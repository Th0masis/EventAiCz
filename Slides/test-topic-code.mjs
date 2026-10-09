import assert from 'node:assert/strict'
import { readFile, readdir, realpath, stat } from 'node:fs/promises'
import { dirname, extname, relative, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parse as parseScript } from '@babel/parser'
import { compileScript, parse as parseSfc } from '@vue/compiler-sfc'
import MarkdownIt from 'markdown-it'
import postcss from 'postcss'
import selectorParser from 'postcss-selector-parser'
import tokenizeCss from 'postcss/lib/tokenize'
import { deck } from './test-content.mjs'

const root = dirname(fileURLToPath(import.meta.url))
const topicRoot = resolve(root, 'topics')
const markdown = new MarkdownIt({ html: true })
const sourceExtensions = ['.js', '.mjs', '.cjs', '.jsx', '.ts', '.mts', '.cts', '.tsx', '.vue', '.md']
const sharedTokens = new Set()
postcss.parse(await readFile(resolve(root, 'style.css'), 'utf8')).walkDecls(declaration => {
  if (declaration.prop.startsWith('--') && declaration.parent.selector === ':root') {
    sharedTokens.add(declaration.prop)
  }
})

function inside(file, directory) {
  const path = relative(directory, file)
  return path === '' || (!path.startsWith(`..${sep}`) && path !== '..' && !path.startsWith(sep) && !/^[A-Za-z]:/.test(path))
}

function allowed(file, topic) {
  return file === resolve(topicRoot, `${topic}.md`) ||
    inside(file, resolve(topicRoot, topic)) ||
    inside(file, resolve(root, 'public/topics', topic)) ||
    (!/\.(?:css|scss|sass|less|styl|stylus|pcss|postcss)$/i.test(file) &&
      (inside(file, resolve(root, 'components')) || inside(file, resolve(root, 'scripts'))))
}

function importTarget(source, file, topic) {
  assert.ok(typeof source === 'string' && source.length, `${file}: import target must be a static string`)
  const clean = source.split(/[?#]/)[0]
  assert.ok(!source.startsWith('#') && !/^(?:~\/|@\/|[A-Za-z][\w+.-]*:|\\)/.test(source),
    `${file}: unsupported import target ${source}; use a relative path or external package`)
  if (!clean.startsWith('.') && !clean.startsWith('/')) return null
  const target = clean.startsWith('/') ? resolve(root, `.${clean}`) : resolve(dirname(file), clean)
  assert.ok(allowed(target, topic), `${file}: import crosses topic boundary: ${source}`)
  return target
}

function walk(node, visit) {
  if (!node || typeof node !== 'object') return
  if (Array.isArray(node)) {
    for (const child of node) walk(child, visit)
    return
  }
  if (node.type) visit(node)
  for (const [key, child] of Object.entries(node)) {
    if (!['loc', 'start', 'end', 'comments', 'tokens', 'extra'].includes(key)) walk(child, visit)
  }
}

function scriptImports(code, file, language = '') {
  const ast = parseScript(code, {
    sourceType: 'module',
    createImportExpressions: true,
    plugins: [...(/^(?:ts|tsx)$/.test(language) || /\.(?:ts|mts|cts|tsx)$/.test(file) ? ['typescript'] : []),
      ...(/^(?:jsx|tsx)$/.test(language) || /\.(?:jsx|tsx)$/.test(file) ? ['jsx'] : [])],
  })
  const imports = []
  const declarations = new Set()
  const literal = node => {
    if (node?.type === 'StringLiteral') return node.value
    if (node?.type === 'TemplateLiteral' && node.expressions.length === 0) return node.quasis[0].value.cooked
    assert.fail(`${file}: import target must be a static string`)
  }
  walk(ast, node => {
    if (['ImportDeclaration', 'ExportNamedDeclaration', 'ExportAllDeclaration'].includes(node.type) && node.source) {
      const source = literal(node.source)
      imports.push(source)
      if (node.type === 'ImportDeclaration') {
        const signatures = node.specifiers.length ? node.specifiers.map(specifier =>
          JSON.stringify([source, node.importKind, specifier.type, specifier.importKind,
            specifier.imported?.name ?? specifier.imported?.value, specifier.local.name])) : [JSON.stringify([source, 'side-effect'])]
        for (const signature of signatures) {
          assert.ok(!declarations.has(signature), `${file}: duplicate import ${source}`)
          declarations.add(signature)
        }
      }
    }
    if (node.type === 'ImportExpression') imports.push(literal(node.source))
    if (node.type === 'CallExpression' && node.callee.type === 'Identifier' && node.callee.name === 'require') {
      imports.push(literal(node.arguments[0]))
    }
    if (node.type === 'TSImportType') imports.push(literal(node.argument))
    if (node.type === 'TSExternalModuleReference') imports.push(literal(node.expression))
    if (node.type === 'CallExpression' && node.callee.type === 'MemberExpression' &&
      node.callee.object.type === 'MetaProperty' && node.callee.object.meta.name === 'import' &&
      ['glob', 'globEager'].includes(node.callee.property.name ?? node.callee.property.value)) {
      assert.fail(`${file}: import.meta.glob is not a resolvable literal import; use explicit imports`)
    }
  })
  return imports
}

function styleImports(code, file, topic) {
  const stylesheet = postcss.parse(code, { from: file })
  stylesheet.walkDecls(declaration => {
    assert.ok(!sharedTokens.has(declaration.prop) && !/^--(?:br-|type-|space-)/.test(declaration.prop),
      `${file}: cannot redefine shared token ${declaration.prop}`)
  })
  stylesheet.walkRules(rule => {
    const selectors = selectorParser().astSync(rule.selector)
    if (topic && !isKeyframeRule(rule)) {
      for (const selector of selectors.nodes) {
        const boundary = selector.nodes.findIndex(node => node.type === 'combinator')
        const compound = selector.nodes.slice(0, boundary < 0 ? selector.nodes.length : boundary)
        assert.ok(compound.some(node => node.type === 'class' && node.value === `topic-${topic}`),
          `${file}: stylesheet selector must begin with topic namespace: ${selector}`)
      }
    }
    selectors.walk(node => {
      assert.ok(!(node.type === 'tag' && ['html', 'body'].includes(node.value.toLowerCase())) &&
        !(node.type === 'pseudo' && [':root', ':global', '::v-global'].includes(node.value)),
      `${file}: global selector is forbidden: ${rule.selector}`)
    })
  })
  const imports = []
  stylesheet.walkAtRules('import', rule => {
    const tokenizer = tokenizeCss(new postcss.Input(rule.params))
    const tokens = []
    while (!tokenizer.endOfFile()) {
      const token = tokenizer.nextToken()
      if (!['space', 'comment'].includes(token[0])) tokens.push(token)
    }
    let target = tokens.shift()
    if (target?.[0] === 'word' && target[1].toLowerCase() === 'url') {
      target = tokens.shift()
      if (target?.[0] === 'brackets') target = ['word', target[1].slice(1, -1).trim()]
      else {
        assert.equal(target?.[0], '(', `${file}: invalid CSS import URL`)
        target = tokens.shift()
        assert.equal(tokens.shift()?.[0], ')', `${file}: invalid CSS import URL`)
      }
    }
    assert.ok(['string', 'word'].includes(target?.[0]) && target[1], `${file}: CSS import target must be a static string`)
    const raw = target[0] === 'string' ? target[1].slice(1, -1) : target[1]
    const source = raw.replace(/\\(?:([0-9a-f]{1,6})\s?|(\r\n|[\n\r\f])|([\s\S]))/gi,
      (match, hex, newline, character) => hex ? String.fromCodePoint(parseInt(hex, 16) || 0xfffd) : newline ? '' : character)
    imports.push(source.startsWith('.') || source.startsWith('/') || /^[A-Za-z][\w+.-]*:/.test(source)
      ? source : `./${source}`)
  })
  return imports
}

function isKeyframeRule(rule) {
  for (let node = rule.parent; node; node = node.parent) {
    if (node.type === 'atrule' && /keyframes$/i.test(node.name)) return true
  }
  return false
}

function sfcImports(code, file) {
  const { descriptor, errors } = parseSfc(code, { filename: file })
  assert.equal(errors.length, 0, `${file}: ${errors.map(String).join('; ')}`)
  const imports = []
  const scripts = [descriptor.script, descriptor.scriptSetup].filter(Boolean)
  const languages = new Set(scripts.map(script => script.lang ?? 'js'))
  assert.ok(languages.size <= 1, `${file}: script blocks must use the same language`)
  for (const script of scripts) {
    assert.ok(['js', 'ts', 'jsx', 'tsx'].includes(script.lang ?? 'js'), `${file}: unsupported script language`)
    if (script.src) imports.push(script.src)
    imports.push(...scriptImports(script.content, file, script.lang))
  }
  if (descriptor.script && descriptor.scriptSetup) compileScript(descriptor, { id: 'topic-code-check' })
  if (descriptor.template?.src) imports.push(descriptor.template.src)
  for (const style of descriptor.styles) {
    assert.ok(style.scoped, `${file}: topic Vue styles must be scoped`)
    assert.ok(!style.lang || style.lang === 'css', `${file}: only CSS style blocks can be checked`)
    if (style.src) imports.push(style.src)
    imports.push(...styleImports(style.content, file))
  }
  return imports
}

function markdownImports(content, file) {
  const html = []
  for (const token of markdown.parse(content, {})) {
    if (token.type === 'html_block') html.push(token.content)
    for (const child of token.children ?? []) {
      if (child.type === 'html_inline') html.push(child.content)
    }
  }
  const blocks = html.flatMap(fragment => {
    if (/^\s*<!--/.test(fragment)) return []
    return [...fragment.matchAll(/<(script|style)\b[^>]*>(?:[\s\S]*?<\/\1\s*>)|<(?:script|style)\b[^>]*\/\s*>/gi)]
      .map(match => match[0])
  })
  return sfcImports(`<template><div /></template>\n${blocks.join('\n')}`, file)
}

function selfCheck() {
  const file = resolve(topicRoot, 'as-cli/components/fixture.vue')
  const reject = (action, message) => assert.throws(action, message)
  reject(() => importTarget('../../agentic-demo/scripts/demo.js', file, 'as-cli'), /boundary/)
  reject(() => importTarget('./agentic-demo.md', resolve(topicRoot, 'as-cli.md'), 'as-cli'), /boundary/)
  reject(() => importTarget('../../../style.css?inline', file, 'as-cli'), /boundary/)
  reject(() => importTarget('../../../components/global.css', file, 'as-cli'), /boundary/)
  reject(() => importTarget('../../../scripts/global.scss', file, 'as-cli'), /boundary/)
  reject(() => importTarget('@/style.css', file, 'as-cli'), /unsupported/)
  reject(() => scriptImports("import { ref } from 'vue'; import { ref } from 'vue'", file), /already been declared/)
  reject(() => scriptImports('const state = 1; const state = 2', file), /already been declared/)
  reject(() => scriptImports("import 'vue'; import 'vue'", file), /duplicate import/)
  reject(() => scriptImports('import(target)', file), /static string/)
  reject(() => scriptImports('require(target)', file), /static string/)
  reject(() => scriptImports("import.meta.glob('../*/*.vue')", file), /resolvable/)
  reject(() => sfcImports('<script setup>const state = 1; const state = 2</script>', file), /already been declared/)
  reject(() => sfcImports('<script>import {ref} from "vue"; export default {}</script><script setup>import {computed as ref} from "vue"</script>', file), /same local name/)
  reject(() => sfcImports('<template><div /></template><style>.local { color: red }</style>', file), /scoped/)
  reject(() => sfcImports('<template><div /></template><style scoped>:global(.slidev-layout) { color: red }</style>', file), /global selector/)
  reject(() => sfcImports('<template><div /></template><style scoped>.local { --br-orange: red }</style>', file), /shared token/)
  reject(() => styleImports('.slidev-layout { color: red }', file, 'as-cli'), /namespace/)
  reject(() => styleImports('.topic-agentic-demo .local { color: red }', file, 'as-cli'), /namespace/)
  reject(() => styleImports('.topic-as-cli { --ink: red }', file, 'as-cli'), /shared token/)
  styleImports('.slidev-layout.topic-as-cli .local { color: var(--ink) }', file, 'as-cli')
  reject(() => {
    for (const source of sfcImports('<template><div /></template><style scoped>@import "../../../style.css";</style>', file)) {
      importTarget(source, file, 'as-cli')
    }
  }, /boundary/)
  reject(() => markdownImports('<script setup>const state = 1; const state = 2</script>', file), /already been declared/)
  assert.deepEqual(markdownImports('```vue\n<script setup>const state = 1; const state = 2</script>\n```', file), [])
  for (const code of ["import('./local.js')", 'import(`./local.js`)', "export * from './local.js'", "require('./local.js')"]) {
    assert.deepEqual(scriptImports(code, file), ['./local.js'])
  }
  assert.equal(importTarget('../scripts/local.js', file, 'as-cli'), resolve(topicRoot, 'as-cli/scripts/local.js'))
  assert.equal(importTarget('../../../components/Shared.vue', file, 'as-cli'), resolve(root, 'components/Shared.vue'))
  assert.equal(importTarget('../../../scripts/shared.js', file, 'as-cli'), resolve(root, 'scripts/shared.js'))
  assert.equal(importTarget('@slidev/client', file, 'as-cli'), null)
  scriptImports("import { ref } from 'vue'; import { computed } from 'vue'; function nested() { const ref = 1 }", file)
  sfcImports('<script>const state = 1; export default {}</script><script setup>const state = 2</script>', file)
  sfcImports('<template><div /></template><style scoped>.local { color: var(--br-orange) }</style>', file)
  for (const css of ['@import url("local.css") screen;', '@import url(local.css);', '@import "local.css";']) {
    assert.deepEqual(styleImports(css, file), ['./local.css'])
  }
}

async function resolveImport(target, file, source) {
  const candidates = [target, ...sourceExtensions.map(extension => `${target}${extension}`),
    ...sourceExtensions.map(extension => resolve(target, `index${extension}`))]
  for (const candidate of candidates) {
    try {
      if ((await stat(candidate)).isFile()) return await realpath(candidate)
    } catch (error) {
      if (!['ENOENT', 'ENOTDIR'].includes(error.code)) throw error
    }
  }
  assert.fail(`${file}: local import does not resolve: ${source}`)
}

const checked = new Set()
async function checkFile(file, topic) {
  file = await realpath(file)
  assert.ok(allowed(file, topic), `${file}: resolved import crosses topic boundary`)
  const key = `${topic}:${file}`
  if (checked.has(key)) return
  checked.add(key)
  const extension = extname(file)
  assert.ok(!/\.(?:scss|sass|less|styl|stylus|pcss|postcss)$/i.test(file), `${file}: only CSS stylesheets can be checked`)
  if (!sourceExtensions.includes(extension) && extension !== '.css') return
  const code = await readFile(file, 'utf8')
  let imports
  if (extension === '.md') {
    const slides = Object.values(deck.markdownFiles).find(entry => resolve(entry.filepath) === file)?.slides
    assert.ok(slides, `${file}: Markdown is not loaded by the deck`)
    imports = slides.flatMap(slide => {
      const imports = markdownImports(slide.content, file)
      if (slide.frontmatter.src) {
        const source = slide.frontmatter.src
        assert.equal(typeof source, 'string', `${file}: Markdown src must be a static string`)
        imports.push(source.startsWith('.') || source.startsWith('/') ? source : `./${source}`)
      }
      return imports
    })
  } else if (extension === '.vue') imports = sfcImports(code, file)
  else if (extension === '.css') imports = styleImports(code, file, topic)
  else imports = scriptImports(code, file)
  for (const source of imports) {
    const target = importTarget(source, file, topic)
    if (!target) continue
    const resolved = await resolveImport(target, file, source)
    await checkFile(resolved, topic)
  }
}

async function checkDirectory(directory, topic) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = resolve(directory, entry.name)
    if (entry.isDirectory()) await checkDirectory(file, topic)
    else if (sourceExtensions.includes(extname(file)) || extname(file) === '.css') await checkFile(file, topic)
  }
}

selfCheck()
for (const entry of await readdir(topicRoot, { withFileTypes: true })) {
  if (entry.isDirectory()) await checkDirectory(resolve(topicRoot, entry.name), entry.name)
  else if (entry.name.endsWith('.md')) await checkFile(resolve(topicRoot, entry.name), entry.name.slice(0, -3))
}
console.log(`Topic code checks passed: ${checked.size} file(s); parser and boundary self-checks passed`)