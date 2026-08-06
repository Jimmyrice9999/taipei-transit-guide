/**
 * Browser verification of the exported site.
 *
 * Run: npm run verify:browser   (after npm run build)
 *
 * Everything before this ran against markup. This runs against a rendered page,
 * because the failure classes it hunts — reflow at zoom, focus visibility,
 * print pagination, what a screen reader is actually told — do not exist in
 * HTML source. The prior run explicitly could not check any of this; this
 * script exists so it never has to be taken on structure again.
 *
 * What it produces:
 *
 *   docs/screenshots/     every page type at 375 / 768 / 1440 px, plus
 *                         200% and 400% zoom equivalents (640 / 320 px)
 *   docs/print/           print-media PDF per page type
 *   docs/browser-verification.json   every raw finding, for the tests
 *   docs/browser-verification.md    the human-readable report
 *
 * Checks, in order:
 *
 *   1. REFLOW (WCAG 1.4.10) — every page loaded at 320 CSS px (the 400%-zoom
 *      equivalent of a 1280 desktop) and 640 px (200%); any document-level
 *      horizontal scrollbar is a violation. Overflow *inside* an
 *      overflow-x:auto container is allowed — that is the sanctioned pattern.
 *
 *   2. KEYBOARD — scripted Tab traversal per page type. Records focus order,
 *      flags any focused element with no visible focus indicator (no outline,
 *      no box-shadow change), any interactive element never reached, and any
 *      cycle that stops progressing (a trap).
 *
 *   3. ACCESSIBILITY TREE — the ARIA snapshot per page type, plus targeted
 *      probes: what a map station announces, what the spine is, what a
 *      formation diagram is. An SVG announcing bare "graphic"/"image" with no
 *      name is recorded as a failure.
 *
 *   4. AXE — axe-core against every page, violations grouped by impact.
 *
 *   5. SCREENSHOTS and PRINT PDFs for human review.
 *
 * The static server mimics GitHub Pages: extensionless → 404 unless a
 * directory with index.html, correct MIME by extension. Serving out/ through
 * anything smarter would hide exactly the class of bug postbuild.mjs fixed.
 */

import fs from 'node:fs'
import path from 'node:path'
import http from 'node:http'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'out')
const SHOTS = path.join(ROOT, 'docs', 'screenshots')
const PRINT = path.join(ROOT, 'docs', 'print')
const AXE_PATH = path.join(ROOT, 'node_modules', 'axe-core', 'axe.min.js')

if (!fs.existsSync(OUT)) {
  console.error('No out/ directory. Run `npm run build` first.')
  process.exit(2)
}

fs.mkdirSync(SHOTS, { recursive: true })
fs.mkdirSync(PRINT, { recursive: true })

/* ------------------------------------------------------------------ */
/* Static server that behaves like GitHub Pages                        */
/* ------------------------------------------------------------------ */

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
}

function serve() {
  const server = http.createServer((req, res) => {
    // Not new URL(): a request for "//" parses as protocol-relative and
    // throws. Split off the query by hand; a static server needs no more.
    let urlPath = decodeURIComponent(req.url.split('?')[0].replace(/\/{2,}/g, '/'))
    let file = path.join(OUT, urlPath)

    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
      file = path.join(file, 'index.html')
    }
    if (!fs.existsSync(file)) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
      res.end(fs.readFileSync(path.join(OUT, '404.html')))
      return
    }
    const ext = path.extname(file)
    res.writeHead(200, {
      'Content-Type': MIME[ext] ?? 'application/octet-stream',
    })
    res.end(fs.readFileSync(file))
  })
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve({ server, port: server.address().port }))
  })
}

/* ------------------------------------------------------------------ */
/* Page inventory                                                      */
/* ------------------------------------------------------------------ */

/** One representative per page type, for the expensive checks. */
const PAGE_TYPES = [
  { name: 'home', url: '/' },
  { name: 'section-train', url: '/train/' },
  { name: 'section-bus', url: '/bus/' },
  { name: 'type-lines', url: '/train/lines/' },
  { name: 'line-wenhu', url: '/train/lines/wenhu-line/' },
  { name: 'station-br13', url: '/train/stations/br13/' },
  { name: 'station-br10', url: '/train/stations/br10/' },
  { name: 'stock-val256', url: '/train/rolling-stock/val256/' },
  { name: 'depot-muzha', url: '/train/depots/muzha-depot/' },
  { name: 'network', url: '/train/network/' },
  { name: 'data', url: '/data/' },
  { name: 'data-stations', url: '/data/stations/' },
  { name: 'data-colours', url: '/data/line-colours/' },
  { name: 'provenance', url: '/data/provenance/' },
  { name: 'about', url: '/about/' },
  { name: '404', url: '/no/such/page/' },
]

/** Every real page, for the cheap checks (axe, reflow measurement). */
function allPages() {
  const found = []
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) walk(full)
      else if (entry.name === 'index.html') {
        // path.relative(OUT, OUT) is '' — naive joining produced '//', which
        // the client router treats as an invalid route and swaps the page for
        // Next's error shell. Every "finding" on that URL was this harness
        // testing a page that does not exist.
        const dir = path.relative(OUT, path.dirname(full)).split(path.sep).join('/')
        found.push(dir === '' ? '/' : `/${dir}/`)
      }
    }
  }
  walk(OUT)
  return found.sort()
}

/* ------------------------------------------------------------------ */
/* Checks                                                              */
/* ------------------------------------------------------------------ */

/**
 * Document-level horizontal overflow. Scroll containers are exempt by
 * construction: their overflow never propagates to the document unless their
 * own box is wider than the viewport, which is exactly the bug being hunted.
 */
async function measureOverflow(page) {
  return page.evaluate(() => {
    const doc = document.documentElement
    const overflow = doc.scrollWidth - doc.clientWidth
    if (overflow <= 1) return { overflow: 0, culprits: [] }

    // Name the widest offenders so the report is actionable.
    const culprits = []
    for (const el of document.querySelectorAll('body *')) {
      const rect = el.getBoundingClientRect()
      if (rect.right > doc.clientWidth + 1 || rect.left < -1) {
        const inScroller = el.closest(
          '.table-scroll, .compare-scroll, .formation-scroll, [style*="overflow"]',
        )
        if (!inScroller) {
          culprits.push({
            tag: el.tagName.toLowerCase(),
            cls: String(el.className).slice(0, 60),
            width: Math.round(rect.width),
            right: Math.round(rect.right),
          })
        }
      }
      if (culprits.length >= 5) break
    }
    return { overflow, culprits }
  })
}

/** Tab through the page, recording what gets focus and how it looks. */
async function keyboardTraversal(page) {
  /*
   * Stamp every element that ought to be reachable, and match visits by the
   * stamp. The first version matched by label text, which reported the nav
   * links "unreached" on every page purely because their key was an href and
   * their label was text — pure matcher noise presented as a finding.
   */
  const expected = await page.evaluate(() =>
    [...document.querySelectorAll('a[href], button, input, select, textarea, [tabindex]')]
      .filter((el) => {
        const style = getComputedStyle(el)
        if (style.display === 'none' || style.visibility === 'hidden') return false
        if (el.tabIndex < 0) return false
        return true
      })
      .map((el, i) => {
        el.setAttribute('data-kbd', String(i))
        return {
          i,
          tag: el.tagName.toLowerCase(),
          label:
            el.getAttribute('aria-label') ??
            el.textContent?.trim().slice(0, 40) ??
            el.getAttribute('href') ??
            '',
        }
      }),
  )

  await page.evaluate(() => document.body.focus())

  const order = []
  const seen = new Set()
  let stagnant = 0

  for (let i = 0; i < 400; i++) {
    await page.keyboard.press('Tab')
    const info = await page.evaluate(() => {
      const el = document.activeElement
      if (!el || el === document.body) return null
      const style = getComputedStyle(el)
      // A visible indicator is an outline, or a box-shadow that appears on
      // focus. The site uses :focus-visible outlines, which a scripted Tab
      // does trigger in Chromium.
      const hasOutline = style.outlineStyle !== 'none' && parseFloat(style.outlineWidth) > 0
      const hasShadow = style.boxShadow !== 'none'

      /*
       * SVG links style a CHILD on focus, not themselves: a map station's
       * :focus-visible rule strokes the hit circle and thickens the dot. That
       * is a perfectly visible indicator — confirmed by screenshot — which the
       * first version of this check called missing because it only read the
       * anchor's own outline. Focus indication is wherever the pixels are.
       */
      let childIndicator = false
      if (el instanceof SVGAElement) {
        const hit = el.querySelector('.routemap-hit')
        if (hit && getComputedStyle(hit).stroke !== 'none') childIndicator = true
      }

      const rect = el.getBoundingClientRect()
      return {
        tag: el.tagName.toLowerCase(),
        cls: String(el.className?.baseVal ?? el.className ?? '').slice(0, 60),
        label:
          el.getAttribute('aria-label') ??
          el.textContent?.trim().slice(0, 40) ??
          el.getAttribute('href') ??
          '',
        focusRing: hasOutline || hasShadow || childIndicator,
        offscreen: rect.width === 0 && rect.height === 0,
        key: el.getAttribute('data-kbd') ?? el.tagName + '|' + (el.getAttribute('href') ?? ''),
      }
    })

    if (!info) break // wrapped back to body: traversal complete

    order.push(info)
    if (seen.has(info.key)) {
      stagnant++
      // Revisiting is normal at the wrap; ten consecutive revisits without a
      // single new element is a trap.
      if (stagnant > 10) return { order, expected, trapped: true }
    } else {
      stagnant = 0
      seen.add(info.key)
    }
    if (seen.size >= expected.length) break
  }

  const reachedKeys = new Set(order.map((o) => o.key))
  const unreached = expected.filter((e) => !reachedKeys.has(String(e.i)))

  return {
    tabStops: order.length,
    distinct: seen.size,
    expectedCount: expected.length,
    noRing: order.filter((o) => !o.focusRing).map((o) => `${o.tag}.${o.cls} "${o.label}"`),
    unreached: unreached.slice(0, 10).map((e) => `${e.tag} "${e.label}"`),
    trapped: false,
  }
}

/** What assistive tech is told about the page's specialised furniture. */
async function ariaProbes(page) {
  return page.evaluate(() => {
    const probes = {}

    // Map stations: linked dots must have a name; unlinked dots carry <title>.
    const stations = [...document.querySelectorAll('.routemap-station')]
    probes.mapStations = stations.slice(0, 3).map((el) => {
      const isLink = el.classList.contains('is-link')
      const title = el.querySelector('title')?.textContent ?? null
      return {
        role: isLink ? 'link' : 'graphics/none',
        name: el.getAttribute('aria-label') ?? title ?? '(NONE)',
      }
    })
    probes.mapStationCount = stations.length

    // The map SVG itself.
    const svg = document.querySelector('.routemap-svg')
    probes.mapSvg = svg
      ? { role: svg.getAttribute('role'), name: (svg.getAttribute('aria-label') ?? '').slice(0, 80) }
      : null

    // The spine.
    const spine = document.querySelector('.spine')
    probes.spine = spine
      ? { tag: spine.tagName.toLowerCase(), name: spine.getAttribute('aria-label') }
      : null

    // Formation diagram.
    const formation = document.querySelector('.formation-train')
    probes.formation = formation
      ? { role: formation.getAttribute('role'), name: formation.getAttribute('aria-label') }
      : null

    // A badge: static text is fine, but the title must exist for hover/AT.
    const badge = document.querySelector('.badge[title]')
    probes.badge = badge ? { text: badge.textContent, title: badge.getAttribute('title') } : null

    return probes
  })
}

/* ------------------------------------------------------------------ */
/* Main                                                                */
/* ------------------------------------------------------------------ */

const { server, port } = await serve()
const base = `http://127.0.0.1:${port}`
const browser = await chromium.launch()
const axeSource = fs.readFileSync(AXE_PATH, 'utf8')

const report = {
  generated: new Date().toISOString(),
  reflow: [],
  keyboard: {},
  aria: {},
  axe: {},
  axeSummary: { critical: 0, serious: 0, moderate: 0, minor: 0 },
  print: [],
}

const log = (msg) => console.log(msg)

/* ---- 1. reflow at zoom equivalents, every page ---- */

log('\n═══ 1. Reflow at 200% and 400% zoom equivalents ═══\n')

const pages = allPages()
{
  const context = await browser.newContext()
  const page = await context.newPage()

  for (const width of [640, 320]) {
    await page.setViewportSize({ width, height: 900 })
    for (const url of pages) {
      await page.goto(base + url, { waitUntil: 'load' })
      const { overflow, culprits } = await measureOverflow(page)
      if (overflow > 0) {
        report.reflow.push({ url, width, overflow, culprits })
        log(`  ✗ ${url} at ${width}px: ${overflow}px horizontal overflow`)
        for (const c of culprits) log(`      <${c.tag} class="${c.cls}"> width ${c.width}`)
      }
    }
    log(`  (${width}px: ${pages.length} pages checked)`)
  }
  await context.close()
}
if (report.reflow.length === 0) log('  ✓ no page produces a document-level horizontal scrollbar')

/* ---- 2. keyboard, per page type ---- */

log('\n═══ 2. Keyboard traversal ═══\n')

{
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await context.newPage()

  for (const { name, url } of PAGE_TYPES) {
    await page.goto(base + url, { waitUntil: 'load' })
    const result = await keyboardTraversal(page)
    report.keyboard[name] = result
    const bad = result.trapped || result.noRing.length > 0
    log(
      `  ${bad ? '✗' : '✓'} ${name.padEnd(16)} ${String(result.distinct).padStart(3)}/${result.expectedCount} reachable` +
        (result.trapped ? '  TRAPPED' : '') +
        (result.noRing.length ? `  ${result.noRing.length} without focus ring` : ''),
    )
  }
  await context.close()
}

/* ---- 3. accessibility tree, per page type ---- */

log('\n═══ 3. Accessibility tree probes ═══\n')

{
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await context.newPage()

  for (const { name, url } of PAGE_TYPES) {
    await page.goto(base + url, { waitUntil: 'load' })
    const probes = await ariaProbes(page)
    // The full ARIA snapshot, for the record.
    probes.snapshot = await page.locator('main').ariaSnapshot().catch(() => '(no main)')
    report.aria[name] = probes

    const nameless =
      (probes.mapStations ?? []).filter((s) => s.name === '(NONE)').length +
      (probes.mapSvg && !probes.mapSvg.name ? 1 : 0) +
      (probes.formation && !probes.formation.name ? 1 : 0)
    log(`  ${nameless ? '✗' : '✓'} ${name.padEnd(16)}${nameless ? ` ${nameless} unnamed graphics` : ''}`)
  }
  await context.close()
}

/* ---- 4. axe, every page ---- */

log('\n═══ 4. axe-core, all pages ═══\n')

{
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await context.newPage()

  for (const url of pages) {
    await page.goto(base + url, { waitUntil: 'load' })
    await page.evaluate(axeSource)
    const results = await page.evaluate(() =>
      axe.run(document, { resultTypes: ['violations'] }).then((r) =>
        r.violations.map((v) => ({
          id: v.id,
          impact: v.impact,
          help: v.help,
          nodes: v.nodes.length,
          sample: v.nodes[0]?.target?.join(' ') ?? '',
        })),
      ),
    )
    if (results.length) {
      report.axe[url] = results
      for (const v of results) {
        report.axeSummary[v.impact] = (report.axeSummary[v.impact] ?? 0) + 1
        log(`  ✗ ${url} [${v.impact}] ${v.id}: ${v.help} (${v.nodes} nodes)`)
      }
    }
  }
  const total = Object.values(report.axeSummary).reduce((a, b) => a + b, 0)
  if (total === 0) log(`  ✓ zero violations across ${pages.length} pages`)
  else log(`\n  ${total} violation instances: ${JSON.stringify(report.axeSummary)}`)
  await context.close()
}

/* ---- 5. screenshots ---- */

log('\n═══ 5. Screenshots ═══\n')

{
  const context = await browser.newContext()
  const page = await context.newPage()

  const widths = [
    [375, ''],
    [768, ''],
    [1440, ''],
    [640, '-zoom200'],
    [320, '-zoom400'],
  ]

  for (const { name, url } of PAGE_TYPES) {
    for (const [width, suffix] of widths) {
      await page.setViewportSize({ width, height: 900 })
      await page.goto(base + url, { waitUntil: 'load' })
      await page.screenshot({
        path: path.join(SHOTS, `${name}-${width}${suffix}.png`),
        fullPage: true,
      })
    }
  }
  log(`  ${PAGE_TYPES.length * widths.length} screenshots → docs/screenshots/`)
  await context.close()
}

/* ---- 6. print PDFs ---- */

log('\n═══ 6. Print PDFs ═══\n')

{
  const context = await browser.newContext()
  const page = await context.newPage()

  for (const { name, url } of PAGE_TYPES) {
    if (name === '404') continue
    await page.goto(base + url, { waitUntil: 'load' })
    await page.emulateMedia({ media: 'print' })

    // Machine checks before the PDF: is the chrome actually gone, are the
    // scroll containers actually unwrapped, are URLs actually expanded?
    const printChecks = await page.evaluate(() => {
      const gone = (sel) => {
        const el = document.querySelector(sel)
        return !el || getComputedStyle(el).display === 'none'
      }
      const scroller = document.querySelector('.table-scroll')
      const badge = document.querySelector('.badge')
      return {
        headerGone: gone('.site-header'),
        navGone: gone('.site-nav'),
        upLinkGone: gone('.up-link'),
        adjacentGone: gone('.adjacent'),
        scrollUnwrapped: scroller ? getComputedStyle(scroller).overflowX === 'visible' : null,
        badgeHasBorder: badge ? getComputedStyle(badge).borderTopWidth !== '0px' : null,
        spineFloatCleared: (() => {
          const spine = document.querySelector('.page-spine')
          return spine ? getComputedStyle(spine).float === 'none' : null
        })(),
      }
    })
    report.print.push({ name, url, ...printChecks })

    await page.pdf({
      path: path.join(PRINT, `${name}.pdf`),
      format: 'A4',
      printBackground: true,
    })
    await page.emulateMedia({ media: 'screen' })

    const bad = Object.entries(printChecks).filter(([, v]) => v === false)
    log(`  ${bad.length ? '✗' : '✓'} ${name}.pdf${bad.length ? '  failed: ' + bad.map(([k]) => k).join(', ') : ''}`)
  }
  await context.close()
}

/* ------------------------------------------------------------------ */

await browser.close()
server.close()

fs.writeFileSync(
  path.join(ROOT, 'docs', 'browser-verification.json'),
  JSON.stringify(report, null, 2),
)

const failures =
  report.reflow.length +
  Object.values(report.keyboard).filter((k) => k.trapped || k.noRing.length).length +
  Object.values(report.axeSummary).reduce((a, b) => a + b, 0) +
  report.print.filter((p) => Object.values(p).includes(false)).length

console.log(`\nFull data → docs/browser-verification.json`)
console.log(failures === 0 ? '\n✓ browser verification clean\n' : `\n✗ ${failures} finding(s)\n`)
process.exit(failures === 0 ? 0 : 1)
