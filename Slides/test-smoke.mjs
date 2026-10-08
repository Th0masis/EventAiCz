import assert from 'node:assert/strict'
import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright-chromium'
import { deck } from './test-content.mjs'

const baseUrl = (process.env.SLIDES_URL ?? 'http://127.0.0.1:3030').replace(/\/$/, '')
const screenshotRoot = new URL('./artifacts/slides/', import.meta.url)
const browser = await chromium.launch({ headless: true })
const failures = []

try {
  for (const viewport of [
    { name: 'desktop', width: 1280, height: 720 },
    { name: 'mobile', width: 390, height: 844 },
  ]) {
    const output = new URL(`${viewport.name}/`, screenshotRoot)
    await mkdir(output, { recursive: true })
    const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } })
    await page.context().grantPermissions(['screen-wake-lock'])
    page.on('pageerror', error => failures.push(`${viewport.name}: ${error.message}`))
    page.on('console', message => {
      if (message.type() === 'error') failures.push(`${viewport.name}: ${message.text()}`)
    })
    page.on('response', response => {
      if (response.status() >= 400 && new URL(response.url()).origin === new URL(baseUrl).origin) {
        failures.push(`${viewport.name}: HTTP ${response.status()} ${response.url()}`)
      }
    })

    await page.goto(`${baseUrl}/1`, { waitUntil: 'domcontentloaded', timeout: 15000 })

    for (const slide of deck.slides) {
      const slideNumber = slide.index + 1
      if (slideNumber > 1) {
        await page.goto(`${baseUrl}/${slideNumber}`, { waitUntil: 'domcontentloaded', timeout: 15000 })
      }
      const layout = page.locator(`[data-slidev-no="${slideNumber}"] .slidev-layout`).first()
      await layout.waitFor({ state: 'visible', timeout: 15000 })
      assert.ok(await layout.evaluate(element =>
        element.textContent.trim() || element.querySelector('img, svg, canvas, video, iframe'),
      ), `Blank slide: ${slideNumber}`)
      if (slide.title) {
        const expectedTitle = slide.title.replace(/<[^>]*>/g, '')
        assert.ok((await layout.textContent()).includes(expectedTitle), `Wrong slide: ${slideNumber}`)
      }
      await page.waitForFunction(() => document.fonts.status === 'loaded', null, { timeout: 15000 })
      await layout.locator('img').evaluateAll(images => Promise.all(images.map(image => image.decode())))
      const brokenImages = await layout.locator('img').evaluateAll(images =>
        images.filter(image => !image.complete || image.naturalWidth === 0).map(image => image.src),
      )
      assert.deepEqual(brokenImages, [], `Broken images on slide ${slideNumber}`)
      await layout.screenshot({ path: fileURLToPath(new URL(`${String(slideNumber).padStart(3, '0')}.png`, output)), timeout: 15000 })
    }
    await page.close()
  }

  assert.deepEqual(failures, [], 'Browser runtime or asset errors')
  console.log(`Browser smoke checks passed: ${deck.slides.length} slides, desktop and mobile screenshots`)
} finally {
  await browser.close()
}