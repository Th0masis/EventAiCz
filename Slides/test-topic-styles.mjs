import assert from 'node:assert/strict'
import { access, readFile, readdir } from 'node:fs/promises'
import { basename, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import postcss from 'postcss'
import selectorParser from 'postcss-selector-parser'
import { deck } from './test-content.mjs'

const root = dirname(fileURLToPath(import.meta.url))
const topicRoot = resolve(root, 'topics')
const topicFiles = (await readdir(topicRoot)).filter(filename => filename.endsWith('.md'))
const sharedStyles = postcss.parse(await readFile(resolve(root, 'style.css'), 'utf8'))
const sharedTokens = new Set()
sharedStyles.walkDecls(declaration => {
  if (declaration.prop.startsWith('--') && declaration.parent.selector === ':root') {
    sharedTokens.add(declaration.prop)
  }
})
let stylesheets = 0

for (const filename of topicFiles) {
  const topic = basename(filename, '.md')
  const cssPath = resolve(topicRoot, topic, 'styles.css')

  try {
    await access(cssPath)
  } catch {
    continue
  }

  stylesheets++
  const topicClass = `topic-${topic}`
  const markdownPath = resolve(topicRoot, filename)
  const slides = deck.slides.filter(slide => resolve(slide.source.filepath) === markdownPath)
  assert.ok(slides.length > 0, `No parsed slides found for topic stylesheet: ${topic}`)

  for (const slide of slides) {
    const classes = String(slide.frontmatter.class ?? '').split(/\s+/)
    assert.ok(classes.includes(topicClass), `${topic}: slide ${slide.index + 1} is missing .${topicClass}`)
    assert.ok(
      slide.content.includes(`import './${topic}/styles.css'`),
      `${topic}: slide ${slide.index + 1} must import its topic stylesheet`,
    )
  }

  const stylesheet = postcss.parse(await readFile(cssPath, 'utf8'), { from: cssPath })
  stylesheet.walkRules(rule => {
    if (isKeyframeRule(rule)) return

    for (const selector of selectorParser().astSync(rule.selector).nodes) {
      selector.walk(node => {
        assert.ok(
          !(node.type === 'tag' && ['html', 'body'].includes(node.value.toLowerCase())) &&
          !(node.type === 'pseudo' && node.value === ':root'),
          `${topic}: global selector is forbidden: ${selector}`,
        )
      })
      const firstCombinator = selector.nodes.findIndex(node => node.type === 'combinator')
      const firstCompound = selector.nodes.slice(0, firstCombinator < 0 ? selector.nodes.length : firstCombinator)
      assert.ok(
        firstCompound.some(node => node.type === 'class' && node.value === topicClass),
        `${topic}: selector must begin with .${topicClass}: ${selector}`,
      )
    }
  })

  stylesheet.walkDecls(declaration => {
    assert.ok(
      !sharedTokens.has(declaration.prop) && !/^--(?:br-|type-|space-)/.test(declaration.prop),
      `${topic}: topic CSS cannot redefine shared token ${declaration.prop}`,
    )
  })
}

sharedStyles.walkRules(rule => {
  selectorParser().astSync(rule.selector).walkClasses(className => {
    assert.ok(
      !/^(?:topic-|as-cli-|tooling-|demo-steps$|cycle-|track-(?:after|before|nodevops)$|skills-embed-|skills-slide$|agentic-bridge-visual$)/.test(className.value),
      `Topic-specific selector remains in Slides/style.css: ${className.value}`,
    )
  })
})

assert.ok(stylesheets > 0, 'No topic stylesheets found')
console.log(`Topic style checks passed: ${stylesheets} stylesheet(s) are namespaced and imported per slide`)

function isKeyframeRule(rule) {
  for (let node = rule.parent; node; node = node.parent) {
    if (node.type === 'atrule' && /keyframes$/i.test(node.name)) return true
  }
  return false
}