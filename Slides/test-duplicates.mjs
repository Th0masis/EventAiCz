import assert from 'node:assert/strict'
import { mkdtemp, readFile, rm } from 'node:fs/promises'
import { spawnSync } from 'node:child_process'
import { tmpdir } from 'node:os'
import { dirname, isAbsolute, join, relative, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))
for (const suffix of ['', ':css', ':javascript', ':typescript', ':html', ':scss']) {
  assert.equal(displayPath(`topics/fixture.vue${suffix}`), 'Slides/topics/fixture.vue')
  assert.equal(displayPath(join(root, `topics/fixture.vue${suffix}`)), 'Slides/topics/fixture.vue')
}
assert.equal(displayPath('fixture.css'), 'Slides/fixture.css')
assert.equal(displayPath('style.css'), 'Slides/style.css')

const reportDirectory = await mkdtemp(join(tmpdir(), 'slides-jscpd-'))
const executable = resolve(root, 'node_modules/jscpd/run-jscpd.js')
const result = spawnSync(process.execPath, [
  executable,
  root,
  '--ignore', '**/node_modules/**,**/dist/**,**/artifacts/**',
  '--min-tokens', '50',
  '--min-lines', '8',
  '--similarity', '0.85',
  '--format', 'javascript,typescript,vue,css',
  '--formats-exts', 'javascript:js,mjs,cjs',
  '--fail-on-empty',
  '--reporters', 'json',
  '--output', reportDirectory,
  '--no-colors',
], { encoding: 'utf8' })

try {
  assert.ifError(result.error)
  const reportPath = resolve(reportDirectory, 'jscpd-report.json')
  const report = JSON.parse(await readFile(reportPath, 'utf8'))

  for (const duplicate of report.duplicates) {
    const first = displayPath(duplicate.firstFile.name)
    const second = displayPath(duplicate.secondFile.name)
    const description = `Possible ${duplicate.kind} duplicate (${duplicate.lines} lines, ${duplicate.tokens} tokens)`
    reportLocation(first, duplicate.firstFile.startLoc?.line ?? duplicate.firstFile.start, description, second)
    reportLocation(second, duplicate.secondFile.startLoc?.line ?? duplicate.secondFile.start, description, first)
  }

  if (report.duplicates.length > 0) {
    console.error(`Duplicate code check failed: ${report.duplicates.length} clone(s) found in presentation source.`)
    process.exitCode = 1
  } else if (result.status !== 0) {
    console.error(result.stderr || result.stdout || `jscpd exited with code ${result.status}`)
    process.exitCode = result.status || 1
  } else {
    console.log('Duplicate code check passed: no substantial clones found in presentation source, shared CSS or tests.')
  }
} finally {
  await rm(reportDirectory, { recursive: true, force: true })
}

function displayPath(file) {
  const sourcePath = file.replace(/(\.vue):[^/\\:]+$/i, '$1')
  const relativePath = isAbsolute(sourcePath) ? relative(root, sourcePath) : sourcePath
  const normalizedPath = relativePath.split(sep).join('/')
  return `Slides/${normalizedPath}`
}

function reportLocation(file, line, description, counterpart) {
  const title = escapeProperty('Possible duplicate presentation code')
  const details = escapeData(`${description}; matching code: ${counterpart}`)
  console.log(`::error file=${escapeProperty(file)},line=${line},title=${title}::${details}`)
}

function escapeProperty(value) {
  return value.replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A').replace(/:/g, '%3A').replace(/,/g, '%2C')
}

function escapeData(value) {
  return value.replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A')
}