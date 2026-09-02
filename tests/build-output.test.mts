/**
 * The exported site, as shipped.
 *
 * Everything else in this suite tests the data and the pipeline. This tests
 * `out/` — because the README is explicit that the dev server does not exercise
 * the static export, and because the site has been wrong about its own rendered
 * output before. A page can compile, type-check and still emit the wrong HTML.
 *
 * Requires `npm run build` first; `npm test` runs it in order.
 */

import { test, before } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'

import { getAllPages, getSections, getSystems, getTypes } from '../lib/content.ts'
import { getBusRoutesByGroup } from '../lib/bus/routes.ts'
import { getBuiltBusRouteGroups } from '../lib/bus/route-groups.ts'
import { getLineStations, getStationHref, LINES_WITH_STATION_PAGES, STATIONS } from '../lib/stations.ts'
import { LINES } from '../lib/lines.ts'
import { plannedRedirects } from '../scripts/moves.mjs'
import { isRedirectStub } from '../scripts/redirect-stub.mjs'
import { REGIONS } from '../lib/regions.ts'

const OUT = path.join(process.cwd(), 'out')
const LOCALES = ['en', 'zh-Hant'] as const

before(() => {
  assert.ok(
    fs.existsSync(OUT),
    'no out/ directory — run `npm run build` before the tests (npm test does this for you)',
  )
})

const pageRel = (locale: (typeof LOCALES)[number], href: string) =>
  `${locale}/${href.replace(/^\/+|\/+$/g, '') ? `${href.replace(/^\/+|\/+$/g, '')}/` : ''}index.html`
const withDefaultLocale = (rel: string) =>
  /^(en|zh-Hant)\//.test(rel) || rel.startsWith('404') || rel.startsWith('_not-found') || !rel.endsWith('index.html')
    ? rel
    : `en/${rel}`
const read = (rel: string) => fs.readFileSync(path.join(OUT, withDefaultLocale(rel)), 'utf8')
const exists = (rel: string) => fs.existsSync(path.join(OUT, withDefaultLocale(rel)))

/**
 * The markup a reader actually sees, with Next's inlined navigation payload
 * removed.
 *
 * Every exported page embeds a serialised React tree in `<script>` tags for
 * client-side navigation, and that tree includes the framework's own 404
 * template — so a naive search for "This page could not be found" matches on
 * pages that render perfectly. Assertions about visible content have to strip
 * the scripts first or they test the framework's plumbing instead of the page.
 */
const visible = (html: string) => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')

function allHtml(): string[] {
  const walk = (dir: string): string[] =>
    fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) return walk(full)
      return entry.name.endsWith('.html') ? [full] : []
    })
  /*
   * Redirect stubs are not pages — see scripts/redirect-stub.mjs. They are
   * identified by a marker in the file rather than by their path, because
   * since run 51 they live inside the live trees (/rail/lines/, /gondola/) as
   * well as under /train.
   */
  return walk(OUT).filter((f) => !isRedirectStub(fs.readFileSync(f, 'utf8')))
}

/* ---- page inventory ------------------------------------------------ */

test('every content page exported an index.html', () => {
  const missing = LOCALES.flatMap((locale) =>
    getAllPages().map((page) => pageRel(locale, page.href)),
  )
    .filter((rel) => !exists(rel))
  assert.deepEqual(missing, [])
})

test('every page with three sections has a static ToC whose fragments exist', () => {
  const problems: string[] = []
  for (const file of allHtml()) {
    const rel = path.relative(OUT, file).replaceAll('\\', '/')
    // Error documents offer recovery choices rather than a long article. They
    // intentionally keep those choices directly visible without page furniture.
    if (rel === '404.html' || rel === '404/index.html' || rel === '_not-found/index.html') continue
    const html = visible(fs.readFileSync(file, 'utf8'))
    if (!/class="[^"]*(?:page-main|page-article|page-body)/.test(html)) continue
    const h2Count = [...html.matchAll(/<h2\b/gi)].length
    if (h2Count < 3) continue

    const toc = html.match(/<nav class="page-toc wide"[\s\S]*?<\/nav>/i)?.[0]
    if (!toc) {
      problems.push(`${rel}: ${h2Count} h2 sections but no ToC`)
      continue
    }

    for (const match of toc.matchAll(/href="#([^"]+)"/g)) {
      const id = match[1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      if (!new RegExp(`\\sid="${id}"`).test(html)) {
        problems.push(`${rel}: ToC target #${match[1]} is absent`)
      }
    }
  }
  assert.deepEqual(problems, [])
})

test('every station on every line with station pages exported a page', () => {
  const missing = LOCALES.flatMap((locale) =>
    [...LINES_WITH_STATION_PAGES]
      .flatMap((line) => getLineStations(line).filter((station) => station.operator !== 'TMRT'))
      .map((s) => pageRel(locale, getStationHref(s.code, s.operator)!)),
  )
    .filter((rel) => !exists(rel))
  assert.deepEqual(missing, [])
})

test('the generated routes exported', () => {
  for (const locale of LOCALES) {
    for (const href of [
      '/',
      '/rail/network/',
      '/data/',
      '/data/stations/',
      '/data/line-colours/',
      '/data/provenance/',
      '/data/network-growth/',
      '/data/comparisons/',
      '/data/changelog/',
      '/about/',
      '/regions/',
    ]) {
      const rel = pageRel(locale, href)
      assert.ok(exists(rel), `${rel} was not exported`)
    }
  }
})

test('the expected number of pages was generated', () => {
  /*
   * A count, not a list, so adding a page is a one-line change here — but it
   * IS a change, which is the point. A page silently disappearing from the
   * export is exactly the failure the README warns the dev server will not
   * catch.
   */
  const content = getAllPages().length
  const stations = [...LINES_WITH_STATION_PAGES].reduce(
    (sum, line) => sum + getLineStations(line).filter((station) => station.operator !== 'TMRT').length,
    0,
  )
  /*
   * Sections, systems and type indexes are counted from the tree rather than
   * typed. Run 51 moved the metro's types under /rail/metro/ and the gondola
   * under /rail/cable/, which changed all three numbers at once — three
   * hand-maintained constants that all had to be edited together, which is a
   * count that will be wrong the next time as well. `getSections`,
   * `getSystems` and `getTypes` are the same functions the routes generate
   * from, so this cannot disagree with what shipped.
   */
  const sections = getSections().length
  const systems = getSections().reduce((sum, s) => sum + getSystems(s.slug).length, 0)
  const types = getSections().reduce(
    (sum, s) =>
      sum +
      getTypes(s.slug).length +
      getSystems(s.slug).reduce((n, system) => n + getTypes(s.slug, system.slug).length, 0),
    0,
  )
  // These generated pages live under each locale: /, /rail/network,
  // /rail/metro/stations, /data, the seven data pages, /about and /regions.
  const generatedPerLocale = 13
  // One per lib/regions.ts entry (Part 2b, Run 303) — /regions/<slug>/,
  // generated from that array rather than the content tree, so it belongs
  // here alongside `generated` rather than in `content`.
  const regionPages = REGIONS.length
  /* Bus route overlays live in a nested registry, so they are not part of
     getAllPages(). Count every built group's index page and its route pages
     here — one line per group would drift the moment a group is added, so
     this sums whatever `content/bus/routes/` actually contains. */
  const busGroupPages = getBuiltBusRouteGroups().reduce((sum, group) => {
    const overlays = getBusRoutesByGroup(group).filter((route) =>
      fs.existsSync(path.join(process.cwd(), 'content', 'bus', 'routes', group, `${route.canonicalSlug}.md`)),
    )
    return sum + overlays.length + 1
  }, 0)
  const expected =
    (content + stations + sections + systems + types + generatedPerLocale + busGroupPages + regionPages) *
      LOCALES.length +
    2 // Next's _not-found/index.html and its static 404/index.html copy.

  const actual = allHtml().filter((f) => f.endsWith('index.html')).length
  assert.equal(
    actual,
    expected,
    `${actual} pages exported, expected ${expected}. If you added a page, update the count here.`,
  )
})

/*
 * ── Every URL the site has ever published still resolves ────────────────────
 *
 * Two renames so far: /train → /rail in run 5, and in run 51 the Rail section
 * gaining a system level plus the gondola leaving its own top-level section.
 * A static host cannot redirect, so each old URL gets a stub; the table is in
 * scripts/postbuild.mjs.
 *
 * The old test hard-coded the one rule that existed. This walks the table, so
 * a third rename gets the same coverage by being added to the table — and, the
 * part that actually matters, it asserts a stub never points at another stub.
 * A chained redirect is one readers give up on and crawlers count as a soft
 * 404, and it is the natural failure mode of a table that has grown a rule.
 */
test('every moved URL redirects, in one hop, to a real page', () => {
  const pages = new Set(
    allHtml()
      .filter((f) => f.endsWith('index.html'))
      .map((f) => {
        const rel = path.relative(OUT, path.dirname(f)).split(path.sep).join('/')
        return rel === '' ? '/' : `/${rel}/`
      }),
  )

  const logicalEnglishPages = [...pages]
    .filter((url) => url.startsWith('/en/'))
    .map((url) => url.slice('/en'.length) || '/')

  let checked = 0
  for (const { old, target } of plannedRedirects(logicalEnglishPages)) {
    if (pages.has(old)) continue // a real page occupies the old path
    const file = path.join(OUT, ...old.split('/').filter(Boolean), 'index.html')
    assert.ok(fs.existsSync(file), `no redirect stub at ${old}`)

    const html = fs.readFileSync(file, 'utf8')
    const redirectTarget = html.match(/url=([^"'>]+)/)?.[1]
    assert.ok(redirectTarget, `stub at ${old} has no refresh target`)
    assert.ok(
      pages.has(redirectTarget!),
      `stub at ${old} points at ${redirectTarget}, which is not a real page — a redirect must not chain`,
    )
    assert.ok(html.includes('rel="canonical"'), `stub at ${old} carries no canonical`)
    assert.ok(html.includes('noindex'), `stub at ${old} is indexable`)
    checked++
  }
  assert.ok(checked > 200, `only ${checked} redirect stubs checked — is the table still wired up?`)
})

test('a 404 page exists for unknown paths', () => {
  assert.ok(exists('404.html'), 'no 404.html — a static host has nothing to serve')
  const html = read('404.html')
  assert.ok(html.length > 500, '404 page is suspiciously small')
})

test('no page is a server error placeholder or an empty shell', () => {
  for (const file of allHtml()) {
    const html = fs.readFileSync(file, 'utf8')
    const rel = path.relative(OUT, file)
    assert.ok(html.includes('<html'), `${rel} has no <html>`)
    assert.ok(html.length > 1000, `${rel} is only ${html.length} bytes`)
    assert.ok(
      !/Application error|Internal Server Error|This page could not be found/i.test(visible(html)) ||
        rel.startsWith('404') ||
        rel.startsWith('_not-found'),
      `${rel} renders an error message`,
    )
  }
})

/* ---- correctness of what is rendered -------------------------------- */

test('no unresolved station badge appears anywhere', () => {
  // `badge-absent` is rendered when a code does not resolve. It is a legitimate
  // component state, but nothing on the site should currently reach it.
  const offenders = allHtml()
    .filter((f) => fs.readFileSync(f, 'utf8').includes('badge-absent'))
    .map((f) => path.relative(OUT, f))
  assert.deepEqual(offenders, [])
})

/*
 * Run 7: `RichText` badged any <known-line-prefix><digits> string in
 * frontmatter, real station or not — it checked the line and never the
 * station. `BR1` rendered as a brown badge titled "BR1" on the page about
 * engineering numbers, which is the site asserting that an engineering number
 * is a station. A badge means "this is a real station" or it means nothing.
 */
test('every rendered badge names a station that exists', () => {
  const offenders: string[] = []
  for (const file of allHtml()) {
    const html = fs.readFileSync(file, 'utf8')
    // A badge whose title is a bare code with no name after it.
    for (const m of html.matchAll(/class="badge[^"]*" title="([A-Z]+\d+[a-z]?)"/g)) {
      offenders.push(`${path.relative(OUT, file)}: badge titled "${m[1]}" with no station name`)
    }
  }
  assert.deepEqual(offenders, [])
})

test('no page leaks a literal undefined, NaN or [object Object]', () => {
  const offenders: string[] = []
  for (const file of allHtml()) {
    const html = fs.readFileSync(file, 'utf8')
    for (const pattern of ['>undefined<', '>NaN<', '[object Object]', '>null<']) {
      if (html.includes(pattern)) offenders.push(`${path.relative(OUT, file)}: ${pattern}`)
    }
  }
  assert.deepEqual(offenders, [])
})

test('the Wenhu Line page states the official route length', () => {
  const html = read('rail/metro/lines/wenhu-line/index.html')
  assert.ok(html.includes('25.17'), 'official route length missing')

  /*
   * This used to assert 26.4 appeared nowhere, because the page had been
   * printing the untrimmed alignment AS the route length. Run 7 publishes it
   * deliberately as the fourth of four figures, with what it measures beside
   * it — which is the finding, not the bug.
   *
   * So the check moves to what it was actually protecting: 26.42 may appear
   * only in the row that says it includes depot lead and tail track, and the
   * spec table's route-length value must still be the operating figure.
   */
  const specValue = html.match(/Route length, operating[\s\S]{0,400}?>([\d.]+)</)
  assert.ok(specValue, 'no "Route length, operating" row found in the spec table')
  assert.equal(specValue![1], '25.17', 'the spec table is not printing the operating length')

  if (html.includes('26.42')) {
    assert.ok(
      /26\.42[\s\S]{0,400}?(depot lead|tail track)/.test(html),
      '26.42 km appears without the explanation that it includes non-revenue track',
    )
  }
})

test('the network table prints both a length and a measurement per line', () => {
  const html = read('rail/network/index.html')
  for (const line of LINES) {
    assert.ok(html.includes(line.name), `${line.name} missing from the network table`)
  }
  assert.ok(html.includes('25.17'), 'official Wenhu length missing from the network table')
  assert.ok(html.includes('≥'), 'no lower-bound marker on the discontinuous lines')
})

test('the footer no longer calls the line colours community-sourced', () => {
  // It said so on all 45 pages, contradicting /data and the design reference.
  const offenders = allHtml()
    .filter((f) => /colours are community-sourced/i.test(fs.readFileSync(f, 'utf8')))
    .map((f) => path.relative(OUT, f))
  assert.deepEqual(offenders, [])
})

test('every page carries the official palette, not a stale copy', () => {
  const html = read('rail/network/index.html')
  for (const line of LINES) {
    assert.ok(
      html.includes(line.map),
      `${line.code}: official colour ${line.map} not present in the rendered network page`,
    )
  }
})

test('station data on /data/stations covers every registered station', () => {
  const html = read('data/stations/index.html')
  const missing = STATIONS.filter((s) => !html.includes(`>${s.code}<`)).map((s) => s.code)
  assert.deepEqual(missing, [])
})

test('the downloadable JSON is exported and parses', () => {
  for (const rel of ['data/taipei-metro-stations.json', 'data/taipei-metro-line-colours.json']) {
    assert.ok(exists(rel), `${rel} missing`)
    assert.doesNotThrow(() => JSON.parse(read(rel)), `${rel} is not valid JSON`)
  }
})

test('the exported JSON agrees with the registry it was generated from', () => {
  const stations = JSON.parse(read('data/taipei-metro-stations.json'))
  const rows: { code: string }[] = Array.isArray(stations) ? stations : stations.stations
  const tdxBacked = STATIONS.filter(
    (station) => station.recordSource === 'tdx' && station.operator !== 'TMRT',
  )
  assert.equal(
    rows.length,
    tdxBacked.length,
    'the published TDX JSON and the TDX-backed registry disagree on count',
  )
})

/* ---- links ---------------------------------------------------------- */

test('no internal link 404s', () => {
  /*
   * The Part 1 link checker, run as a test. It exits non-zero on a broken link
   * or a dangling fragment, so its exit code is the assertion.
   */
  assert.doesNotThrow(
    () =>
      execFileSync(process.execPath, ['scripts/check-links.mjs'], {
        cwd: process.cwd(),
        stdio: 'pipe',
      }),
    'scripts/check-links.mjs reported broken links — run `npm run check` to see them',
  )
})

test('no page links to a bare .html file', () => {
  // The export uses trailing-slash folders. A link to /rail/metro/lines/wenhu-line.html
  // would resolve locally and 404 on the host.
  const offenders: string[] = []
  for (const file of allHtml()) {
    const html = fs.readFileSync(file, 'utf8')
    for (const match of html.matchAll(/href="(\/[^"]*\.html)"/g)) {
      offenders.push(`${path.relative(OUT, file)} → ${match[1]}`)
    }
  }
  assert.deepEqual(offenders, [])
})
