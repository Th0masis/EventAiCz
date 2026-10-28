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
  for (const slide of deck.slides.filter(slide => slide.source.filepath.endsWith('as-cli.md'))) {
    const number = slide.index + 1
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
        '.cli-flow-node p, .cli-feedback span, .cli-final-note, .cli-reset-step p, .tooling-panel-note',
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
          }
        })
    })
    for (const result of results) {
      checked++
      assert.equal(result.opacity, 1, `Slide ${number}: text is faded: "${result.text}"`)
      assert.ok(result.contrast >= 4.5,
        `Slide ${number}: contrast ${result.contrast.toFixed(2)}:1 for "${result.text}"`)
      if (result.quote) {
        assert.equal(result.size, '18px')
        assert.equal(result.leading, '24.3px')
      }
    }
  }
  assert.ok(checked >= 20, `Expected AS CLI text coverage, checked only ${checked} elements`)
  assert.equal(diagrams, 5, 'The five AS CLI explanation diagrams must not regress to text-only slides')
  console.log(`AS CLI graphical and readability regression checks passed: ${diagrams} diagrams, ${checked} text elements.`)
} finally {
  await browser.close()
}
