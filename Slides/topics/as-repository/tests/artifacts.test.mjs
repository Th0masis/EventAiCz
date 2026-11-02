import assert from 'assert/strict'
import { fileURLToPath } from 'url'
import { load } from '@slidev/parser/fs'
import { chromium } from 'playwright-chromium'

{
  const root = fileURLToPath(new URL('../../../', import.meta.url))
  const deck = await load({ roots: [root], userRoot: root, allowedRoots: [root] },
    fileURLToPath(new URL('../../../slides.md', import.meta.url)))
  const browser = await chromium.launch({ headless: true })
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } })
    for (const selector of ['.repo-task-story', '.repo-handoff', '.repo-symbol-view']) {
      const slide = deck.slides.find(slide => slide.content.includes(`class="${selector.slice(1)}"`))
      assert.ok(slide, `Missing artifact ${selector}`)
      assert.equal((slide.note.match(/\[click\]/gi) || []).length, 0, 'Static slides must keep zero note markers')
      await page.goto(`${process.env.SLIDES_URL || 'http://localhost:3030'}/${slide.index + 1}`)
      const layout = page.locator(`[data-slidev-no="${slide.index + 1}"] .slidev-layout`).first()
      await layout.locator(selector).waitFor({ state: 'visible' })
      assert.match(await layout.locator(selector).getAttribute('aria-label'), /^Ilustrační/)
      assert.equal(await layout.locator('[data-slidev-clicks-start]').count(), 0, 'No new reveal steps')
      assert.match(await layout.locator('[role="note"]').innerText(), /Ilustrační/)
      assert.equal(await layout.locator(`${selector} pre`).count(), 0, 'No extra technical text panels')
      assert.ok((await layout.innerText()).split(/\s+/).length <= 85, 'Keep the graphical slide to 85 words')
      if (selector === '.repo-task-story') {
        assert.equal(await layout.locator('.repo-artifact-code').count(), 0)
        assert.equal(await layout.locator('.repo-task-story section > div > svg').count(), 3)
        assert.equal(await layout.locator('.repo-story-link').count(), 2)
        assert.match(await layout.locator('.repo-task-route').innerText(), /structured-text/)
        assert.match(await layout.locator('.repo-task-change').innerText(), /Reset → 0/)
        assert.match(await layout.locator('.repo-task-evidence').innerText(), /Build \+ test/)
        assert.match(await layout.locator('.repo-human-gate').innerText(), /čeká/)
      } else if (selector === '.repo-handoff') {
        assert.equal(await layout.locator('.repo-handoff-lane').count(), 2)
        assert.equal(await layout.locator('.is-human .is-gate').count(), 2)
        assert.equal(await layout.locator('.repo-handoff-event > svg').count(), 6)
        assert.equal(await layout.locator('.repo-handoff-path path').count(), 1)
        assert.match(await layout.locator('.at-design-gate').innerText(), /Bez souhlasu STOP/)
        assert.match(await layout.locator('.at-deploy-gate').innerText(), /URL a verzi/)
        assert.match(await layout.locator('.at-validate').innerText(), /Jen čtení/)
        assert.match(await layout.locator('.repo-takeaway').innerText(), /Nový požadavek či schválení/)
      } else {
        assert.equal(await layout.locator('.repo-symbol-reference').count(), 3)
        assert.equal(await layout.locator('.repo-symbol-reference.is-generated').count(), 1)
        assert.equal(await layout.locator('.repo-symbol-branches path').count(), 1)
        assert.match(await layout.locator('.is-generated').innerText(), /Neupravovat přímo/)
        assert.match(await layout.locator('.repo-symbol-query').innerText(), /Typ z deklarace projektu/)
        assert.match(await layout.locator('[role="note"]').innerText(), /Reference nejsou test/)
      }
    }
  } finally {
    await browser.close()
  }
  console.log('Repository artifacts passed: 3 static slides, evidence, ownership and read-only gates')
}
