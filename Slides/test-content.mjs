import assert from 'node:assert/strict'
import { access, readdir } from 'node:fs/promises'
import { basename, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { load } from '@slidev/parser/fs'

const root = dirname(fileURLToPath(import.meta.url))
export const deck = await load(
  { roots: [root], userRoot: root, allowedRoots: [root] },
  resolve(root, 'slides.md'),
)
export const topicMarkdownFiles = { ...deck.markdownFiles }

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
const importedTopicFiles = imports.map(source => source.slice('./topics/'.length))
assert.equal(new Set(importedTopicFiles).size, importedTopicFiles.length, 'Duplicate topic imports')
for (const filename of importedTopicFiles) {
  assert.ok(topicFiles.includes(filename), `Missing topic file: ${filename}`)
}

for (const filename of topicFiles) {
  const topicPath = resolve(root, 'topics', filename)
  let topicDeck = deck
  if (!Object.values(deck.markdownFiles).some(markdown => resolve(markdown.filepath) === topicPath)) {
    topicDeck = await load(
      { roots: [root], userRoot: root, allowedRoots: [root] },
      topicPath,
    )
    for (const markdown of Object.values(topicDeck.markdownFiles)) {
      assert.equal(markdown.errors?.length ?? 0, 0, `${markdown.filepath}: ${JSON.stringify(markdown.errors)}`)
    }
    Object.assign(topicMarkdownFiles, topicDeck.markdownFiles)
  }
  const markdown = Object.values(topicDeck.markdownFiles)
    .find(markdown => resolve(markdown.filepath) === topicPath)
  assert.ok(markdown?.slides.length > 0, `Empty topic: ${filename}`)
  assert.ok(topicDeck.slides.some(slide => resolve(slide.source.filepath) === topicPath), `Hidden topic: ${filename}`)
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

const chapterNotes = new Map(
  deck.slides
    .filter(slide => slide.frontmatter.class?.includes('chapter-slide'))
    .map(slide => [basename(slide.source.filepath, '.md'), slide.note ?? '']),
)
for (const topic of ['as-agentic-bridge', 'as-cli', 'as-repository']) {
  const note = chapterNotes.get(topic)
  assert.ok(note, `Missing presenter notes for ${topic} chapter slide`)
  assert.doesNotMatch(note, /(?:\b(?:Zdroje?|Čas):|Mapa odhalování|Počáteční stav|Konečný stav|agentic-bridge-training|plugins\/as-skills)/i,
    `${topic}: presenter notes must not contain authoring instructions or source references`)
}

const orchestraceSlides = deck.slides.filter(slide =>
  resolve(slide.source.filepath) === resolve(root, 'topics/orchestrace-dansko.md'),
)
const legacyOrchestraceSlides = [
  'chapter-slide',
  'loop-slide',
  'vertical-modules-slide',
  'planning-slide',
  'machine-demo-slide',
  'hmi-testing-slide',
  'devops-mountain-slide',
]
const featureOrchestraceSlides = [
  'chapter-slide',
  'loop-slide',
  'machine-demo-slide',
  'specification-slide',
  'vertical-modules-slide',
  'implementation-slide',
  'evaluation-slide',
  'hmi-testing-slide',
  'devops-mountain-slide',
]
const workflowOrchestraceSlides = [
  'chapter-slide',
  'loop-slide',
  'machine-demo-slide',
  'workflow-overview-slide',
  'specification-slide',
  'vertical-modules-slide',
  'implementation-slide',
  'evaluation-slide',
  'hmi-testing-slide',
  'devops-mountain-slide',
]
const hasFeatureStory = orchestraceSlides.some(slide =>
  String(slide.frontmatter.class).split(/\s+/).includes('feature-request-slide'),
)
const hasWorkflowOverview = orchestraceSlides.some(slide =>
  String(slide.frontmatter.class).split(/\s+/).includes('workflow-overview-slide'),
)
const expectedOrchestraceSlides = hasWorkflowOverview
  ? workflowOrchestraceSlides
  : hasFeatureStory ? featureOrchestraceSlides : legacyOrchestraceSlides
const actualOrchestraceSlides = orchestraceSlides.map(slide =>
  String(slide.frontmatter.class).split(/\s+/).find(className => expectedOrchestraceSlides.includes(className)),
)
assert.deepEqual(actualOrchestraceSlides, expectedOrchestraceSlides, 'Orchestrace topic slides are missing, duplicated, or out of order')
const machineDemoIndex = orchestraceSlides.findIndex(slide => slide.frontmatter.class?.includes('machine-demo-slide'))
const hmiDemoIndex = orchestraceSlides.findIndex(slide => slide.frontmatter.class?.includes('hmi-testing-slide'))
assert.ok(machineDemoIndex >= 0 && hmiDemoIndex > machineDemoIndex, 'Orange machine demo must precede HMI verification')

if (hasFeatureStory) {
  const revealCounts = new Map([
    ['machine-demo-slide', 3],
    ['specification-slide', 2],
    ['vertical-modules-slide', 2],
    ['implementation-slide', 2],
    ['evaluation-slide', 2],
  ])
  if (hasWorkflowOverview) revealCounts.set('workflow-overview-slide', 3)
  for (const [className, clicks] of revealCounts) {
    const slide = orchestraceSlides.find(slide => String(slide.frontmatter.class).split(/\s+/).includes(className))
    assert.equal(slide.frontmatter.clicks, clicks, `${className}: wrong reveal count`)
    assert.equal((slide.note?.match(/\[click\]/g) ?? []).length, clicks,
      `${className}: speaker notes must describe each reveal group`)
  }
  const request = orchestraceSlides[machineDemoIndex].content
  for (const requirement of ['100', 'neuzavřené', 'počet', 'poruše']) {
    assert.ok(request.includes(requirement), `Feature request must preserve requirement: ${requirement}`)
  }
  if (hasWorkflowOverview) {
    const overview = orchestraceSlides.find(slide => slide.frontmatter.class?.includes('workflow-overview-slide'))
    for (const phase of ['SPECIFIKACE', 'IMPLEMENTACE', 'VYHODNOCENÍ']) {
      assert.ok(overview.content.includes(phase), `Workflow overview must show the ${phase.toLowerCase()} phase`)
    }
    for (const role of ['Člověk', 'Agent', 'Orchestrátor', 'Subagent']) {
      assert.ok(overview.content.includes(role), `Workflow overview must distinguish ${role}`)
    }
    const specification = orchestraceSlides.find(slide => slide.frontmatter.class?.includes('specification-slide'))
    for (const ticket of ['T1', 'T2', 'T3']) {
      assert.ok(specification.content.includes(ticket), `Specification must label ticket ${ticket}`)
    }
  }
}

const pendingTopics = topicFiles.length - importedTopicFiles.length
console.log(
  `Content checks passed: ${topicFiles.length} topics (${pendingTopics} pending registration), ${deck.slides.length} slides`,
)