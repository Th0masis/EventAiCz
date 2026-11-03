import assert from 'assert/strict'
import { fileURLToPath } from 'url'
import { load } from '@slidev/parser/fs'
import { chromium } from 'playwright-chromium'

const root = fileURLToPath(new URL('../../../', import.meta.url))
const deck = await load({ roots: [root], userRoot: root, allowedRoots: [root] },
  fileURLToPath(new URL('../../../slides.md', import.meta.url)))
const slides = deck.slides.filter(slide => slide.source.filepath.endsWith('as-cli.md'))
const usageIndex = slides.findIndex(slide => slide.title === 'Kde AS CLI použít a co tím neprokážeme')
assert.ok(usageIndex >= 0)
assert.equal(slides[usageIndex + 1]?.title, 'Příklad: ověřit reset počítadla')
const comparison = slides.find(slide => slide.content.includes('class="cli-command-shift"'))
assert.ok(comparison)

const browser = await chromium.launch()
try {
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } })
  const base = process.env.SLIDES_URL || 'http://localhost:3030'
  const number = comparison.index + 1
  for (const click of [0, 1]) {
    await page.goto(`${base}/${number}?clicks=${click}`)
    const layout = page.locator(`[data-slidev-no="${number}"] .slidev-layout`).first()
    await layout.waitFor({ state: 'visible' })
    await page.waitForTimeout(700)
    const measurements = await layout.evaluate(element => {
      const headings = [...element.querySelectorAll('.cli-command-shift h2')]
        .filter(node => node.checkVisibility({ checkOpacity: true, checkVisibilityCSS: true }))
      return headings.map(heading => {
        const measure = () => {
          const range = document.createRange()
          range.selectNodeContents(heading)
          return [range.getBoundingClientRect().top, heading.nextElementSibling.getBoundingClientRect().top]
        }
        const shifted = measure()
        const padding = parseFloat(getComputedStyle(heading).paddingTop)
        heading.style.paddingTop = '0px'
        const original = measure()
        heading.style.removeProperty('padding-top')
        const scale = heading.getBoundingClientRect().width / heading.offsetWidth
        return { padding, shifts: shifted.map((value, i) => (value - original[i]) / scale) }
      })
    })
    assert.equal(measurements.length, 2)
    for (const measurement of measurements) {
      assert.ok(measurement.padding >= 70, 'Comparison headings need at least 70px additional padding')
      assert.ok(measurement.shifts.every(shift => shift >= 69.9),
        'Both heading text and following content must move down at least 70px')
    }
  }
  console.log('AS CLI order and 70px comparison offset checks passed')
} finally {
  await browser.close()
}
