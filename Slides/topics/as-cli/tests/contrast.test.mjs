import assert from 'assert/strict'
import { fileURLToPath } from 'url'
import { load } from '@slidev/parser/fs'
import { chromium } from 'playwright-chromium'

const root = fileURLToPath(new URL('../../../', import.meta.url))
const deck = await load({ roots: [root], userRoot: root, allowedRoots: [root] },
  fileURLToPath(new URL('../../../slides.md', import.meta.url)))
const browser = await chromium.launch()
try {
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } })
  const base = process.env.SLIDES_URL || 'http://localhost:3030'
  let checked = 0
  let diagrams = 0
  let terminalSlide
  for (const slide of deck.slides.filter(slide => slide.source.filepath.endsWith('as-cli.md'))) {
    const number = slide.index + 1
    assert.equal(slide.frontmatter.transition, 'fade', `Slide ${number}: use non-spatial topic transitions`)
    await page.goto(`${base}/${number}?clicks=99`)
    const layout = page.locator(`[data-slidev-no="${number}"] .slidev-layout`).first()
    await layout.waitFor({ state: 'visible' })
    await page.waitForTimeout(1000)
    for (const [selector, items, count] of [
      ['.tooling-access-grid', '.tooling-step', 5],
      ['.as-cli-consumer-row', '.as-cli-consumer-card', 3],
      ['.cli-discovery-flow', '.cli-flow-node', 4],
      ['.cli-reset-flow', '.cli-reset-step', 3],
      ['.as-cli-devops-flow', '.as-cli-devops-gate', 2],
    ]) {
      if (!await layout.locator(selector).count()) continue
      diagrams++
      const diagram = layout.locator(selector)
      assert.equal(await diagram.count(), 1, `Slide ${number}: missing graphical structure`)
      assert.equal(await diagram.locator(items).count(), count, `Slide ${number}: missing diagram steps`)
      assert.ok(await diagram.locator('svg').count() >= 3, `Slide ${number}: diagram icons were removed`)
    }
    if (await layout.locator('.as-cli-core').count()) {
      assert.equal(await layout.locator('.as-cli-consumer-card').count(), 3)
      assert.equal(await layout.locator('.as-cli-capability-card').count(), 5)
    }
    if (await layout.locator('.cli-reset-flow').count()) {
      assert.deepEqual(await layout.locator('.cli-counter').allTextContents(), ['17 UDINT', '1', '?'])
      assert.deepEqual(
        (await layout.locator('.cli-reset-command').allInnerTexts()).map(text => text.replace(/\s+/g, ' ').trim()),
        [
          'as var read gProductionCount --task Cyclic',
          'as var write gCmdClear --task Cyclic --value 1',
          'as var read gProductionCount --task Cyclic',
        ],
        'The reset example must show executable read/write/read command lines',
      )
    }
    const hasTerminal = await layout.locator('.evidence-terminal').count()
    if (hasTerminal) terminalSlide = number
    const states = hasTerminal
      ? Array.from({ length: 10 }, (_, click) => click)
      : [99]
    for (const click of states) {
      if (click !== 99) {
        await page.goto(`${base}/${number}?clicks=${click}`)
        await layout.waitFor({ state: 'visible' })
        await page.waitForTimeout(1000)
      }
      const results = await layout.evaluate(element => {
        const rgba = value => value.match(/[\d.]+/g).map(Number)
        const blend = (front, back) => front.slice(0, 3).map((value, i) =>
          value * (front[3] ?? 1) + back[i] * (1 - (front[3] ?? 1)))
        const luminance = color => color.map(value => {
          const srgb = value / 255
          return srgb <= 0.04045 ? srgb / 12.92 : ((srgb + 0.055) / 1.055) ** 2.4
        }).reduce((sum, value, i) => sum + value * [0.2126, 0.7152, 0.0722][i], 0)
        return [...element.querySelectorAll(
          '.cli-lead, .cli-demo-label, .cli-request, .cli-conclusion p, code, .as-cli-command, ' +
          '.cli-flow-node p, .cli-feedback span, .cli-final-note, .cli-reset-step p, .tooling-panel-note, ' +
          '.terminal-footer, .terminal-title span, .terminal-title small, .terminal-idle div, ' +
          '.terminal-command span, .terminal-command b, .terminal-command em, .output-label, ' +
          '.terminal-output > b, .help-excerpt-label, .help-output span, .logbook-output strong, ' +
          '.logbook-output th, .logbook-output td',
        )]
          .filter(node => node.checkVisibility({ checkOpacity: true, checkVisibilityCSS: true }))
          .map(node => {
            const ancestors = []
            for (let parent = node; parent; parent = parent.parentElement) ancestors.unshift(parent)
            const background = ancestors.reduce((color, ancestor) =>
              blend(rgba(getComputedStyle(ancestor).backgroundColor), color), [255, 255, 255])
            const style = getComputedStyle(node)
            const foreground = blend(rgba(style.color), background)
            const light = [luminance(foreground), luminance(background)].sort((a, b) => b - a)
            return {
              text: node.textContent.trim(), contrast: (light[0] + 0.05) / (light[1] + 0.05),
              opacity: ancestors.reduce((value, ancestor) => value * Number(getComputedStyle(ancestor).opacity), 1),
              quote: node.matches('.cli-request'), size: style.fontSize, leading: style.lineHeight,
              terminalContent: Boolean(node.closest('.terminal-output')) && !node.matches('.output-label'),
            }
          })
      })
      for (const result of results) {
        checked++
        assert.equal(result.opacity, 1, `Slide ${number}: text is faded: "${result.text}"`)
        assert.ok(result.contrast >= 4.5,
          `Slide ${number}, click ${click}: contrast ${result.contrast.toFixed(2)}:1 for "${result.text}"`)
        if (result.terminalContent) {
          assert.ok(parseFloat(result.size) >= 14, `Slide ${number}, click ${click}: terminal output is too small`)
        }
        if (result.quote) {
          assert.equal(result.size, '18px')
          assert.equal(result.leading, '24.3px')
        }
      }
      if (hasTerminal) {
        assert.equal(await layout.locator('.terminal-command').count(), click)
        assert.equal(await layout.locator('.terminal-output').count(), click > 0 ? 1 : 0)
        assert.ok(await layout.locator('.terminal-body').evaluate(node =>
          node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth,
        ), `Slide ${number}, click ${click}: terminal must fit without scrolling`)
        if (click === 8) {
          assert.ok(await layout.locator('.logbook-output th').evaluateAll(nodes => nodes.every(node => {
            const range = document.createRange()
            range.selectNodeContents(node)
            return range.getBoundingClientRect().height <= parseFloat(getComputedStyle(node).lineHeight) + 1
          })), 'Logbook headings must fit on one line at the readable output size')
        }
      }
    }
  }
  assert.ok(terminalSlide, 'Expected a terminal demonstration slide')
  const terminal = page.locator(`[data-slidev-no="${terminalSlide}"] .slidev-layout`).first()
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto(`${base}/${terminalSlide}?clicks=0`)
  await terminal.waitFor({ state: 'visible' })
  await page.keyboard.press('ArrowRight')
  await terminal.locator('.terminal-command em.pending').waitFor({ state: 'visible' })
  assert.equal(await terminal.locator('em.pending').evaluate(node => getComputedStyle(node).animationName), 'none',
    'Reduced motion must keep the waiting indicator static')
  const revealStyles = await terminal.locator('.demo-steps > div').evaluateAll(nodes =>
    nodes.map(node => ({ transform: getComputedStyle(node).transform, transition: getComputedStyle(node).transitionProperty })),
  )
  assert.ok(revealStyles.every(style => style.transform === 'none' && style.transition === 'opacity'),
    'Reduced motion must reveal steps without spatial movement')
  await terminal.locator('.terminal-command em.ok').waitFor({ state: 'visible' })
  assert.ok((await terminal.locator('.terminal-output').innerText()).includes('as --help (excerpt)'))
  await page.keyboard.press('ArrowRight')
  await terminal.locator('.terminal-command em.pending').waitFor({ state: 'visible' })
  await page.keyboard.press('ArrowLeft')
  await terminal.locator('.terminal-command em.ok').waitFor({ state: 'visible' })
  assert.equal(await terminal.locator('.terminal-command').count(), 1, 'Going back must restore command history')
  assert.ok((await terminal.locator('.terminal-output').innerText()).includes('as --help (excerpt)'),
    'Going back during a pending result must not show a stale result')
  await page.goto(`${base}/${terminalSlide}?clicks=9`)
  await terminal.waitFor({ state: 'visible' })
  await terminal.locator('em.pending').waitFor({ state: 'detached' })
  await page.keyboard.press('ArrowRight')
  await page.waitForURL(`${base}/${terminalSlide + 1}`)
  const motion = await page.evaluate(() => document.getAnimations()
    .filter(animation => animation.effect.target.classList.contains('slidev-page'))
    .map(animation => ({ frames: animation.effect.getKeyframes(), name: animation.transitionProperty })),
  )
  assert.ok(motion.length > 0, 'Expected an active slide transition to verify')
  assert.ok(motion.every(animation => animation.name === 'opacity' &&
    animation.frames.every(frame => !frame.transform && !frame.translate)),
  'Reduced-motion slide navigation must only crossfade')
  assert.ok(checked >= 20, `Expected AS CLI text coverage, checked only ${checked} elements`)
  assert.equal(diagrams, 5, 'The five AS CLI explanation diagrams must not regress to text-only slides')
  console.log(`AS CLI readability and motion checks passed: ${diagrams} diagrams, ${checked} text elements, 10 terminal states.`)
} finally {
  await browser.close()
}
