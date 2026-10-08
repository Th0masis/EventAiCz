import assert from 'node:assert/strict'
import { mkdir, readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright-chromium'
import { deck } from './test-content.mjs'

const baseUrl = (process.env.SLIDES_URL ?? 'http://127.0.0.1:3030').replace(/\/$/, '')
const screenshotRoot = new URL('./artifacts/slides/', import.meta.url)
const notes = await readFile(new URL('../docs/graphic-notes.md', import.meta.url), 'utf8')
const contract = JSON.parse(notes.match(/```json\s*([\s\S]*?)```/)[1])
const browser = await chromium.launch({ headless: true })
const failures = []

async function checkDesign(layout, label) {
  const errors = await layout.evaluate(async (element, rules) => {
    const errors = []
    const near = (actual, expected) => Math.abs(actual - expected) <= rules.tolerance
    const check = (condition, message) => { if (!condition) errors.push(message) }
    const canvas = element.getBoundingClientRect()
    const bounds = target => {
      const rect = target.getBoundingClientRect()
      return { left: (rect.left - canvas.left) * element.offsetWidth / canvas.width,
        top: (rect.top - canvas.top) * element.offsetHeight / canvas.height,
        width: rect.width * element.offsetWidth / canvas.width,
        height: rect.height * element.offsetHeight / canvas.height }
    }
    const cover = element.classList.contains('cover')
    const chapter = element.classList.contains('chapter-slide')
    const dark = element.classList.contains('dark-slide')
    const [leftMargin, topMargin, rightMargin, bottomMargin] = rules.contentMargins
    const safeContent = (rect, name) => {
      check(rect.left >= leftMargin - 1 && rect.left + rect.width <= rules.canvas[0] - rightMargin + 1, `Object violates side margins: ${name}`)
      check(rect.top >= topMargin - 1 && rect.top + rect.height <= rules.canvas[1] - bottomMargin + 1, `Object violates top/footer keepout: ${name}`)
    }
    check(element.offsetWidth === rules.canvas[0] && element.offsetHeight === rules.canvas[1], 'Wrong canvas dimensions')
    if (!cover && !chapter) {
      for (const child of element.children) {
        if (child.matches('.slide-id, .template-foot, .kicker') || !child.checkVisibility({ checkOpacity: true, checkVisibilityCSS: true })) continue
        safeContent(bounds(child), child.className || child.localName)
      }
    }
    const scrollWindows = new Set()
    for (const node of element.querySelectorAll('*')) {
      if (node.closest('svg') || ['style', 'script'].includes(node.localName)
        || ![...node.childNodes].some(child => child.nodeType === 3 && child.textContent.trim())) continue
      const style = getComputedStyle(node)
      const role = style.getPropertyValue('--text-role').trim()
      const expected = rules.typography[role]
      const name = `${node.localName}.${[...node.classList].join('.')} (${node.textContent.trim().slice(0, 35)})`
      check(Boolean(expected), `Unrecognized text role: ${name}`)
      if (!expected) continue
      check(near(parseFloat(style.fontSize), expected[0]), `Wrong ${role} size: ${name}`)
      check(near(parseFloat(style.lineHeight), expected[0] * (node.matches('.slide-id') ? 1 : expected[1])), `Wrong ${role} line-height: ${name}`)
      check(style.fontFamily.includes(expected[2] === 'mono' ? 'IBM Plex Mono' : 'ABBvoice'), `Wrong ${role} font: ${name}`)
      check(['normal', '0px'].includes(style.letterSpacing), `Wrong letter spacing: ${name}`)
      if (!node.checkVisibility({ checkOpacity: true, checkVisibilityCSS: true })) continue
      const rect = bounds(node)
      let scrollable = null
      for (let parent = node; parent && parent !== element; parent = parent.parentElement) {
        const parentStyle = getComputedStyle(parent)
        if (['auto', 'scroll'].includes(parentStyle.overflowY) || ['auto', 'scroll'].includes(parentStyle.overflowX)) {
          scrollable = parent
          break
        }
      }
      if (!scrollable) {
        check(!node.clientWidth || node.scrollWidth <= node.clientWidth + 1, `Text overflows its container: ${name}`)
        if (['hidden', 'clip'].includes(style.overflowY) && node.clientHeight) {
          check(node.scrollHeight <= node.clientHeight + 1, `Text is vertically clipped: ${name}`)
        }
        for (let parent = node.parentElement; parent && parent !== element; parent = parent.parentElement) {
          const parentStyle = getComputedStyle(parent)
          const parentRect = bounds(parent)
          if (['hidden', 'clip'].includes(parentStyle.overflowY)) {
            check(rect.top >= parentRect.top - 1 && rect.top + rect.height <= parentRect.top + parentRect.height + 1, `Ancestor clips text vertically: ${name}`)
          }
          if (['hidden', 'clip'].includes(parentStyle.overflowX)) {
            check(rect.left >= parentRect.left - 1 && rect.left + rect.width <= parentRect.left + parentRect.width + 1, `Ancestor clips text horizontally: ${name}`)
          }
        }
        if (!node.closest('.slide-id, .template-foot, .cover-event')) {
          const sideMargin = cover || chapter ? 35 : leftMargin
          check(rect.left >= sideMargin - 1 && rect.left + rect.width <= rules.canvas[0] - sideMargin + 1, `Text violates side margins: ${name}`)
        }
        if (!node.closest('.slide-id, .template-foot, .cover-event')) {
          check(rect.top + rect.height <= rules.canvas[1] - rules.footer.keepout + 1, `Text enters footer keepout: ${name}`)
        }
      } else if (!scrollWindows.has(scrollable)) {
        scrollWindows.add(scrollable)
        safeContent(bounds(scrollable), scrollable.className)
        check(scrollable.scrollWidth <= scrollable.clientWidth + 1, `Horizontal overflow in scroll window: ${scrollable.className}`)
        const frame = scrollable.closest('.evidence-terminal')
        if (frame) {
          const windowRect = bounds(scrollable)
          const footerRect = bounds(frame.querySelector('.terminal-footer'))
          check(windowRect.top + windowRect.height <= footerRect.top + 1, 'Terminal scroll viewport overlaps its footer')
          const last = scrollable.querySelector('.terminal-entry:last-child')
          if (last) check(bounds(last).top + bounds(last).height <= windowRect.top + windowRect.height + 1, 'Latest terminal output is clipped instead of scrolling into view')
        }
      }
    }
    const heading = element.querySelector('h1')
    for (const rule of rules.wrapping) {
      for (const text of element.querySelectorAll(rule.selector)) {
        const style = getComputedStyle(text)
        check(style.whiteSpace === rule.whiteSpace && style.wordBreak === rule.wordBreak && style.overflowWrap === rule.overflowWrap, `Wrong text wrapping: ${text.className || text.localName}`)
        check(style.textOverflow !== 'ellipsis' && ['none', ''].includes(style.webkitLineClamp), `Essential text is truncated: ${text.className || text.localName}`)
        if (['command', 'code', 'technical'].includes(style.getPropertyValue('--text-role').trim())) {
          check(style.hyphens === 'none', 'Technical text must not insert hyphens')
        }
      }
    }
    for (const card of element.querySelectorAll(rules.structure.cards)) {
      check(!card.parentElement.closest(rules.structure.cards), `Nested decorative card: ${card.className}`)
    }
    for (const section of element.querySelectorAll(rules.structure.unframed)) {
      const style = getComputedStyle(section)
      check([style.borderTopWidth, style.borderRightWidth, style.borderBottomWidth, style.borderLeftWidth].every(width => parseFloat(width) === 0)
        && style.boxShadow === 'none' && style.backgroundImage === 'none'
        && ['transparent', 'rgba(0, 0, 0, 0)'].includes(style.backgroundColor), `Decorative frame on section: ${section.className}`)
    }
    const terminal = element.querySelector('.terminal-body')
    if (terminal) {
      const style = getComputedStyle(terminal)
      check(!['auto', 'scroll'].includes(style.overflowX) && !['auto', 'scroll'].includes(style.overflowY), 'Terminal must not use a scrollbar')
      check(terminal.scrollHeight <= terminal.clientHeight + 1 && terminal.scrollWidth <= terminal.clientWidth + 1 && terminal.scrollTop === 0, 'Terminal transcript overflows or scrolls')
      const revealed = element.querySelectorAll('.demo-steps > div:not(.slidev-vclick-hidden)').length
      const commands = [...terminal.querySelectorAll('.terminal-command b')].map(node => node.textContent.trim())
      check(JSON.stringify(commands) === JSON.stringify(rules.terminal.commands.slice(0, revealed)), 'Revealed command history is missing or out of order')
      check(terminal.querySelectorAll('.terminal-output').length <= rules.terminal.maxOutputs, 'Old terminal results must collapse')
      if (terminal.querySelector('.help-output')) check(terminal.querySelector('.help-excerpt-label')?.textContent.includes('excerpt'), 'Partial help output must be labelled as an excerpt')
      const frame = terminal.closest('.evidence-terminal')
      const windowRect = bounds(terminal)
      const footerRect = bounds(frame.querySelector('.terminal-footer'))
      check(windowRect.top + windowRect.height <= footerRect.top + 1, 'Terminal body overlaps its footer')
    }
    for (const rule of rules.spacing.components) {
      for (const component of element.querySelectorAll(rule.selector)) {
        const style = getComputedStyle(component)
        const padding = [style.paddingTop, style.paddingRight, style.paddingBottom, style.paddingLeft].map(parseFloat)
        check(padding.every((value, index) => near(value, rule.padding[index])), `Wrong component padding: ${component.className}`)
      }
    }
    for (const rule of rules.spacing.groups) {
      for (const group of element.querySelectorAll(rule.selector)) {
        const style = getComputedStyle(group)
        check(near(parseFloat(style.rowGap), rule.gap) && near(parseFloat(style.columnGap), rule.gap), `Wrong group gap: ${group.className}`)
      }
    }
    for (const rule of rules.spacing.comparisons) {
      for (const group of element.querySelectorAll(rule.selector)) {
        const items = [...group.querySelectorAll(rule.items)]
        if (items.length < 2) continue
        const reference = bounds(items[0])
        const referenceHeading = bounds(items[0].querySelector(rule.heading))
        const referenceCommand = bounds(items[0].querySelector(rule.command))
        check(items.every(item => {
          const rect = bounds(item)
          const headingRect = bounds(item.querySelector(rule.heading))
          const commandRect = bounds(item.querySelector(rule.command))
          return near(rect.top, reference.top) && near(rect.top + rect.height, reference.top + reference.height)
            && near(headingRect.top, referenceHeading.top) && near(commandRect.top, referenceCommand.top)
        }), 'Comparison cards, headings or commands are not aligned')
      }
    }
    for (const rule of rules.spacing.cardText) {
      for (const group of element.querySelectorAll(rule.selector)) {
        const items = [...group.querySelectorAll(rule.items)]
        if (items.length < 2) continue
        const referenceHeading = bounds(items[0].querySelector(rule.heading))
        const referenceDescription = bounds(items[0].querySelector(rule.description))
        const referenceAction = bounds(items[0].querySelector(rule.action))
        check(items.every(item => {
          const title = item.querySelector(rule.heading)
          const description = item.querySelector(rule.description)
          const action = item.querySelector(rule.action)
          const titleRect = bounds(title)
          const descriptionRect = bounds(description)
          const actionRect = bounds(action)
          return near(titleRect.top, referenceHeading.top) && near(descriptionRect.top, referenceDescription.top)
            && near(actionRect.top + actionRect.height, referenceAction.top + referenceAction.height)
            && near(titleRect.left, descriptionRect.left) && actionRect.left >= titleRect.left - 1
            && [title, description].every(text => ['start', 'left'].includes(getComputedStyle(text).textAlign))
        }), 'Card headings, descriptions or final command rows are not aligned')
      }
    }
    check(Boolean(heading), 'Missing h1')
    if (heading) {
      const rect = bounds(heading)
      const style = getComputedStyle(heading)
      const variant = cover ? 'cover' : chapter ? 'chapter' : element.classList.contains('agenda-slide') ? 'agenda' : 'content'
      const expected = rules.headings[variant]
      check(near(rect.left, expected[0]) && near(rect.top, expected[1]), 'Wrong h1 position')
      check(rect.width <= expected[2] + 1 && rect.height <= parseFloat(style.lineHeight) * 2 + 1, 'H1 exceeds width or two-line limit')
      check(style.fontWeight === '700', 'Wrong h1 weight')
    }
    const number = element.querySelector('.slide-id')
    if (number) {
      const rect = bounds(number)
      check(/^\d+$/.test(number.textContent.trim()), 'Slide number is not numeric')
      check(near(rules.canvas[0] - rect.left - rect.width, rules.footer.numberRight)
        && near(rules.canvas[1] - rect.top - rect.height, rules.footer.numberBottom), 'Wrong slide-number position')
    }
    const logo = cover ? element.querySelector('.cover-logo') : null
    const footer = getComputedStyle(element, '::before')
    const image = cover ? logo?.src : footer.backgroundImage.slice(5, -2)
    const filename = dark ? 'B&R_Logo_Screen_RGB_White_with_orange_bar_33px_B&R_Logo_Screen_RGB_White_with_orange_bar_33px.svg' : 'br-template-logo.svg'
    check(Boolean(image?.endsWith(`/${filename}`) || cover && image?.startsWith('data:image/svg+xml,')), 'Wrong footer logo asset')
    const response = await fetch(image)
    check(response.ok, 'Footer logo failed to load')
    const svg = new DOMParser().parseFromString(await response.text(), 'image/svg+xml').documentElement
    if (svg.localName !== 'svg') return [...errors, 'Invalid footer SVG']
    if (cover) {
      const reference = new DOMParser().parseFromString(await (await fetch(`/${filename}`)).text(), 'image/svg+xml').documentElement
      const shapes = source => [...source.querySelectorAll('path, rect')].map(shape =>
        [shape.localName, ...['d', 'x', 'y', 'width', 'height', 'fill'].map(attribute => shape.getAttribute(attribute))])
      check(JSON.stringify(shapes(svg)) === JSON.stringify(shapes(reference)), 'Cover logo does not match the original asset')
    }
    const node = document.importNode(svg, true)
    node.setAttribute('style', 'position:absolute;visibility:hidden')
    document.body.append(node)
    try {
      const box = node.getBBox()
      const viewBox = node.viewBox.baseVal
      const size = cover ? [bounds(logo).width, bounds(logo).height] : footer.backgroundSize.split(' ')
      const scaleX = parseFloat(size[0]) / viewBox.width
      const scaleY = !size[1] || size[1] === 'auto' ? scaleX : parseFloat(size[1]) / viewBox.height
      const inset = position => Number(position.match(/- ([\d.]+)px/)[1])
      const right = cover ? rules.canvas[0] - bounds(logo).left - bounds(logo).width : inset(footer.backgroundPositionX)
      const bottom = cover ? rules.canvas[1] - bounds(logo).top - bounds(logo).height : inset(footer.backgroundPositionY)
      check(near(box.width * scaleX, cover ? rules.footer.coverLogoWidth : rules.footer.logoWidth), 'Wrong visible logo width')
      check(near(scaleX, scaleY), 'Logo aspect ratio is distorted')
      check(near(right + (viewBox.x + viewBox.width - box.x - box.width) * scaleX, rules.footer.logoRight), 'Wrong visible logo right inset')
      check(near(bottom + (viewBox.y + viewBox.height - box.y - box.height) * scaleY, cover ? rules.footer.coverLogoBottom : rules.footer.logoBottom), 'Wrong visible logo bottom inset')
    } finally {
      node.remove()
    }
    return errors
  }, contract)
  failures.push(...errors.map(error => `${label}: ${error}`))
}

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
      await checkDesign(layout, `${viewport.name}, slide ${slideNumber}, initial`)
      const clicks = Math.max(Number(slide.frontmatter.clicks) || 0, await layout.locator('[data-slidev-clicks-start]').evaluateAll(nodes =>
        Math.max(0, ...nodes.map(node => Number(node.getAttribute('data-slidev-clicks-start')) || 0)),
      ))
      for (let click = 1; click <= clicks; click++) {
        await page.goto(`${baseUrl}/${slideNumber}?clicks=${click}`, { waitUntil: 'domcontentloaded', timeout: 15000 })
        await layout.waitFor({ state: 'visible', timeout: 15000 })
        await page.waitForFunction(number => {
          const element = document.querySelector(`[data-slidev-no="${number}"] .slidev-layout`)
          return document.fonts.status === 'loaded' && element && !element.querySelector('.terminal-command em.pending')
            && element.getAnimations({ subtree: true }).every(animation =>
              animation.effect.getComputedTiming().iterations === Infinity || animation.playState === 'finished')
        }, slideNumber, { timeout: 15000 })
        await checkDesign(layout, `${viewport.name}, slide ${slideNumber}, click ${click}`)
      }
      await layout.locator('img').evaluateAll(images => Promise.all(images.map(image => image.decode())))
      const brokenImages = await layout.locator('img').evaluateAll(images =>
        images.filter(image => !image.complete || image.naturalWidth === 0).map(image => image.src),
      )
      assert.deepEqual(brokenImages, [], `Broken images on slide ${slideNumber}`)
      await layout.screenshot({ path: fileURLToPath(new URL(`${String(slideNumber).padStart(3, '0')}.png`, output)), timeout: 15000 })
    }
    await page.close()
  }

  assert.deepEqual(failures, [], 'Browser runtime, asset or design-contract errors')
  console.log(`Browser smoke and design checks passed: ${deck.slides.length} slides, desktop and mobile screenshots`)
} finally {
  await browser.close()
}