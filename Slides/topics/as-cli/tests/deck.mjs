import { fileURLToPath } from 'url'
import { load } from '@slidev/parser/fs'
import { chromium } from 'playwright-chromium'

const root = fileURLToPath(new URL('../../../', import.meta.url))
export const deck = await load({ roots: [root], userRoot: root, allowedRoots: [root] },
  fileURLToPath(new URL('../../../slides.md', import.meta.url)))
export const asCliSlides = deck.slides.filter(slide => slide.source.filepath.endsWith('as-cli.md'))
export const base = process.env.SLIDES_URL || 'http://localhost:3030'

export async function withDesktopPage(run) {
  const browser = await chromium.launch()
  try {
    await run(await browser.newPage({ viewport: { width: 1280, height: 720 } }))
  } finally {
    await browser.close()
  }
}
