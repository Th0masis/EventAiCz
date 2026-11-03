import assert from 'assert/strict'
import { mkdir } from 'fs/promises'
import { fileURLToPath } from 'url'
import { load } from '@slidev/parser/fs'
import { chromium } from 'playwright-chromium'

const directory = fileURLToPath(new URL('../../../', import.meta.url))
const parsed = await load({ roots: [directory], userRoot: directory, allowedRoots: [directory] },
  fileURLToPath(new URL('../../../slides.md', import.meta.url)))
const output = new URL('../../../artifacts/slides/desktop/', import.meta.url)
await mkdir(output, { recursive: true })
const browser = await chromium.launch()
try {
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } })
  for (const [slideClass, max] of [['bridge-loop-slide', 6], ['bridge-rag-slide', 4]]) {
    const slide = parsed.slides.find(entry => String(entry.frontmatter.class).includes(slideClass))
    const hidden = Object.values(parsed.markdownFiles).flatMap(markdown => markdown.slides)
      .some(entry => entry.frontmatter.hide && String(entry.frontmatter.class).includes(slideClass))
    if (!slide && hidden) {
      console.log(`Skipping ${slideClass}: hidden backup slide`)
      continue
    }
    assert.ok(slide, `Missing ${slideClass}`)
    assert.equal((slide.note.match(/\[click\]/gi) || []).length, max, 'Keep the speaker-note reveal map')
    for (let click = 0; click <= max; click++) {
      await page.goto(`${process.env.SLIDES_URL || 'http://localhost:3031'}/${slide.index + 1}?clicks=${click}`)
      const canvas = page.locator(`[data-slidev-no="${slide.index + 1}"] .slidev-layout`).first()
      await canvas.waitFor({ state: 'visible' })
      await page.waitForFunction(number => {
        const element = document.querySelector(`[data-slidev-no="${number}"] .slidev-layout`)
        return document.fonts.status === 'loaded' && element.getAnimations({ subtree: true }).every(animation =>
          animation.effect.getComputedTiming().iterations === Infinity || animation.playState === 'finished')
      }, slide.index + 1)
      assert.match(await canvas.locator('[role="note"]').innerText(), /Ilustrační/)
      if (slideClass === 'bridge-loop-slide') {
        assert.equal(slide.frontmatter.clicks, 6)
        assert.equal(await canvas.locator('.bridge-loop > section:not(.slidev-vclick-hidden)').count(), Math.min(click, 5))
        assert.equal(await canvas.locator('.bridge-forward > path:not(.slidev-vclick-hidden)').count(),
          Math.max(0, Math.min(click - 1, 4)), 'Each arrow appears with its destination')
        assert.equal(await canvas.locator('.bridge-loop > .is-current').count(), click > 0 && click < 6 ? 1 : 0)
        const titleColors = await canvas.locator('.bridge-loop > section h2').evaluateAll(nodes =>
          nodes.map(node => ({ active: node.parentElement.classList.contains('is-current'), color: getComputedStyle(node).color })))
        for (const title of titleColors) {
          assert.equal(title.color === 'rgb(255, 136, 0)', title.active, 'Only the current title must be orange')
        }
        assert.equal(await canvas.locator('.bridge-loop-visual').count(), 5)
        assert.equal(await canvas.locator('.bridge-loop-evidence, .bridge-loop pre, .bridge-loop code').count(), 0,
          'Use graphical nodes, not technical text panels')
        assert.ok((await canvas.innerText()).split(/\s+/).length <= 55, 'Keep the slide to 55 visible words')
        const sizes = await canvas.locator('.bridge-loop-visual > svg:first-of-type').evaluateAll(nodes =>
          nodes.map(node => node.getBoundingClientRect().width))
        assert.ok(sizes.every(width => width >= 80), 'Primary graphics must be readable at slide scale')
        if (click >= 4) {
          assert.equal(await canvas.locator('.bridge-test-signal').isVisible(), true)
          assert.equal(await canvas.locator('.bridge-return').isVisible(), true)
        }
        assert.equal(await canvas.locator('.bridge-human-boundary:not(.slidev-vclick-hidden)').count(), click >= 5 ? 1 : 0)
        if (click >= 5) {
          assert.match(await canvas.locator('.bridge-loop-review').innerText(), /Čeká na schválení/)
          assert.equal(await canvas.locator('.bridge-approval-lock').isVisible(), true)
        }
      } else {
        assert.equal(await canvas.locator('.bridge-rag-example > section:not(.slidev-vclick-hidden)').count(), Math.min(click, 3))
        assert.equal(await canvas.locator('.bridge-rag-example > .is-current').count(), click > 0 && click < 4 ? 1 : 0)
        assert.equal(await canvas.locator('.bridge-rag-example blockquote, .bridge-rag-example pre').count(), 0)
        assert.equal(await canvas.locator('.bridge-rag-link:not(.slidev-vclick-hidden)').count(), Math.max(0, Math.min(2, click - 1)))
        if (click >= 2) assert.match(await canvas.locator('.bridge-rag-passage').innerText(), /Reset → 0[\s\S]*S1 · § 2/)
        if (click >= 3) assert.match(await canvas.locator('.bridge-rag-answer').innerText(), /Opora: \[S1, § 2\]/)
        const colors = await canvas.locator('.bridge-rag-example > section h2').evaluateAll(nodes =>
          nodes.map(node => ({ active: node.parentElement.classList.contains('is-current'), color: getComputedStyle(node).color })))
        for (const title of colors) assert.equal(title.color === 'rgb(255, 136, 0)', title.active)
        assert.equal(await canvas.locator('.bridge-rag-example a').count(), 0, 'No invented source URLs')
      }
      await canvas.screenshot({ path: fileURLToPath(new URL(`${slideClass}-${click}.png`, output)), animations: 'disabled' })
    }
  }
  console.log('Bridge artifacts passed: loop clicks 0–6, RAG clicks 0–4, approval and source traceability')
} finally {
  await browser.close()
}
