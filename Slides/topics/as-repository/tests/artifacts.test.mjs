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
      if (selector === '.repo-task-story') {
        assert.deepEqual(await layout.locator('.repo-artifact-code code').allTextContents(),
          ['IF gCmdClear THEN', '- gProductionCount := 1;', '+ gProductionCount := 0;'])
        assert.match(await layout.locator('.repo-task-route').innerText(), /structured-text/)
        assert.match(await layout.locator('.repo-task-evidence').innerText(), /Modelový build: PASS/)
        assert.match(await layout.locator('.repo-human-gate').innerText(), /čeká/)
      } else if (selector === '.repo-handoff') {
        assert.equal(await layout.locator('.repo-handoff-lane').count(), 2)
        assert.equal(await layout.locator('.is-human .is-gate').count(), 2)
        assert.match(await layout.locator('.at-design-gate').innerText(), /Bez souhlasu se nepřevádí/)
        assert.match(await layout.locator('.at-deploy-gate').innerText(), /URL i verzi/)
        assert.match(await layout.locator('.at-validate').innerText(), /Read-only nálezy[\s\S]*Nové schválení/)
      } else {
        assert.equal(await layout.locator('.repo-symbol-reference').count(), 3)
        assert.equal(await layout.locator('.repo-symbol-reference.is-generated').count(), 1)
        assert.match(await layout.locator('.repo-symbol-generated').innerText(), /Neupravovat přímo/)
        assert.match(await layout.locator('.repo-symbol-query').innerText(), /typ z deklarace projektu/)
        assert.match(await layout.locator('.repo-symbol-limit').innerText(), /reference nejsou test/)
      }
    }
  } finally {
    await browser.close()
  }
  console.log('Repository artifacts passed: 3 static slides, evidence, ownership and read-only gates')
}
