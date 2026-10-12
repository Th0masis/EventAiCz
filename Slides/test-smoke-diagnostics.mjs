import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { readFile, rm } from 'node:fs/promises'
import { createServer } from 'node:http'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

for (const click of [0, 1]) {
  test(`Smoke failure diagnostics at click ${click}`, { timeout: 45000 }, async () => {
    const screenshot = new URL(`./artifacts/slides/desktop/failure-001-click-${click}.png`, import.meta.url)
    const server = createServer((request, response) => {
      if (request.url === '/aborted') {
        request.socket.destroy()
        return
      }
      if (request.url === '/missing') {
        response.writeHead(404).end('Missing fixture asset')
        return
      }
      if (request.url === '/br-template-logo.svg') {
        response.setHeader('Content-Type', 'image/svg+xml')
        response.end('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 30"><rect width="100" height="30"/></svg>')
        return
      }
      const failing = click === 0 || request.url.includes('clicks=1')
      response.setHeader('Content-Type', 'text/html')
      response.end(failing ? `<h1>Failure fixture</h1><script>
        console.error('fixture console error');
        setTimeout(() => { throw new Error('fixture JavaScript error') }, 0);
        fetch('/missing');
        fetch('/aborted').catch(() => {});
      </script>` : `<style>
        .slidev-layout { width: 1280px; height: 720px; }
        .slidev-layout::before { background-image: url('/br-template-logo.svg'); background-position: calc(100% - 20px) calc(100% - 20px); background-size: 100px 30px; }
      </style><div data-slidev-no="1"><div class="slidev-layout">
        <h1>AI &amp; Agentic Engineering Day</h1><div data-slidev-clicks-start="1">Fixture click</div>
      </div></div>`)
    })
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve))
    const url = `http://127.0.0.1:${server.address().port}`
    let child
    try {
      await rm(screenshot, { force: true })
      child = spawn(process.execPath, [fileURLToPath(new URL('./test-smoke.mjs', import.meta.url))], {
        cwd: fileURLToPath(new URL('.', import.meta.url)),
        env: { ...process.env, SLIDES_URL: url },
        stdio: ['ignore', 'pipe', 'pipe'],
      })
      let output = ''
      child.stdout.on('data', data => { output += data })
      child.stderr.on('data', data => { output += data })
      const code = await new Promise((resolve, reject) => {
        child.on('error', reject)
        child.on('exit', resolve)
      })
      assert.equal(code, 1, output)
      for (const expected of [
        `desktop (1280x720), slide 1, click ${click}`,
        `Current URL: ${url}/1${click ? '?clicks=1' : ''}`,
        'fixture console error', 'fixture JavaScript error',
        `HTTP 404 ${url}/missing`, `Request failed GET ${url}/aborted`,
        'Timeout 15000ms exceeded', 'Failure screenshot:',
      ]) assert.ok(output.includes(expected), `Missing ${expected}\n${output}`)
      assert.equal((await readFile(screenshot)).subarray(1, 4).toString(), 'PNG')
    } finally {
      if (child && child.exitCode === null) child.kill()
      server.closeAllConnections()
      await new Promise(resolve => server.close(resolve))
      await rm(screenshot, { force: true })
    }
  })
}
