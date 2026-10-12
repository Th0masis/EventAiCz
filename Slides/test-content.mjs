import assert from 'node:assert/strict'
import { access, readdir } from 'node:fs/promises'
import { basename, dirname, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { load } from '@slidev/parser/fs'

const root = dirname(fileURLToPath(import.meta.url))
export const deck = await load(
  { roots: [root], userRoot: root, allowedRoots: [root] },
  resolve(root, 'slides.md'),
)

for (const markdown of Object.values(deck.markdownFiles)) {
  assert.equal(markdown.errors?.length ?? 0, 0, `${markdown.filepath}: ${JSON.stringify(markdown.errors)}`)
}

assert.equal(deck.headmatter.title, 'AI & Agentic Engineering Day')
assert.ok(deck.slides[0].content.includes('4. 11. 2026'), 'Missing event date on cover')

const topicFiles = (await readdir(resolve(root, 'topics')))
  .filter(filename => filename.endsWith('.md'))
  .sort()
assert.ok(topicFiles.length > 0, 'No topic files found')

const imports = deck.entry.slides
  .filter(slide => slide.frontmatter.src)
  .map(slide => slide.frontmatter.src)
assert.deepEqual(imports.slice().sort(), topicFiles.map(filename => `./topics/${filename}`))

for (const filename of topicFiles) {
  const markdown = Object.values(deck.markdownFiles)
    .find(markdown => relative(resolve(root, 'topics', filename), markdown.filepath) === '')
  assert.ok(markdown?.slides.length > 0, `Empty topic: ${filename}`)
  assert.ok(deck.slides.some(slide => slide.source.filepath === markdown.filepath), `Hidden topic: ${filename}`)
  await access(resolve(root, 'public', 'topics', basename(filename, '.md')))
}

const programSlides = deck.entry.slides.slice(1, 3)
assert.equal(programSlides.length, 2, 'Expected two program slides')
assert.ok(programSlides[0].content.includes('14:30–15:00'), 'Missing first program segment')
assert.ok(programSlides[1].content.includes('18:30'), 'Missing second program segment')

const coordinatorTitles = deck.entry.slides
  .filter(slide => !slide.frontmatter.src)
  .slice(3)
  .map(slide => slide.title)
assert.deepEqual(coordinatorTitles, ['Oběd', 'Přestávka', 'ARVK – případová studie zákazníka'])

for (const slide of deck.slides) {
  assert.ok(slide.content.trim(), `Empty slide: ${slide.index + 1}`)
}

const orchestraceSlides = deck.slides.filter(slide =>
  resolve(slide.source.filepath) === resolve(root, 'topics/orchestrace-dansko.md'),
)
const expectedOrchestraceSlides = [
  'chapter-slide',
  'loop-slide',
  'vertical-modules-slide',
  'planning-slide',
  'machine-demo-slide',
  'hmi-testing-slide',
  'devops-mountain-slide',
]
const actualOrchestraceSlides = orchestraceSlides.map(slide =>
  String(slide.frontmatter.class).split(/\s+/).find(className => expectedOrchestraceSlides.includes(className)),
)
const chapterOnly = actualOrchestraceSlides.length === 1 && actualOrchestraceSlides[0] === 'chapter-slide'
assert.ok(
  chapterOnly || JSON.stringify(actualOrchestraceSlides) === JSON.stringify(expectedOrchestraceSlides),
  'Orchestrace topic slides are missing, duplicated, or out of order',
)
if (!chapterOnly) {
  const machineDemoIndex = orchestraceSlides.findIndex(slide => slide.frontmatter.class?.includes('machine-demo-slide'))
  const hmiDemoIndex = orchestraceSlides.findIndex(slide => slide.frontmatter.class?.includes('hmi-testing-slide'))
  assert.ok(machineDemoIndex >= 0 && hmiDemoIndex > machineDemoIndex, 'Orange machine demo must precede HMI verification')
}

console.log(`Content checks passed: ${topicFiles.length} topics, ${deck.slides.length} slides`)