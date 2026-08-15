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

import { getAllPages } from '../lib/content.ts'
import { getBusRoutesByGroup } from '../lib/bus/routes.ts'
import { getLineStations, LINES_WITH_STATION_PAGES, STATIONS } from '../lib/stations.ts'
import { LINES } from '../lib/lines.ts'

const OUT = path.join(process.cwd(), 'out')

before(() => {
  assert.ok(
    fs.existsSync(OUT),
    'no out/ directory — run `npm run build` before the tests (npm test does this for you)',
  )
})

const read = (rel: string) => fs.readFileSync(path.join(OUT, rel), 'utf8')
const exists = (rel: string) => fs.existsSync(path.join(OUT, rel))

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
  // out/train holds the generated /train → /rail redirect stubs — tiny
  // meta-refresh pages, not site pages. They have their own test below.
  return walk(OUT).filter((f) => !path.relative(OUT, f).startsWith('train' + path.sep))
}

/* ---- page inventory ------------------------------------------------ */

test('every content page exported an index.html', () => {
  const missing = getAllPages()
    .map((page) => page.href.replace(/^\//, '') + 'index.html')
    .filter((rel) => !exists(rel))
  assert.deepEqual(missing, [])
})

test('every station on every line with station pages exported a page', () => {
  const missing = [...LINES_WITH_STATION_PAGES]
    .flatMap((line) => getLineStations(line))
    .map((s) => `rail/stations/${s.code.toLowerCase()}/index.html`)
    .filter((rel) => !exists(rel))
  assert.deepEqual(missing, [])
})

test('the generated routes exported', () => {
  for (const rel of [
    'index.html',
    'rail/network/index.html',
    'data/index.html',
    'data/stations/index.html',
    'data/line-colours/index.html',
    'data/provenance/index.html',
    'about/index.html',
  ]) {
    assert.ok(exists(rel), `${rel} was not exported`)
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
    (sum, line) => sum + getLineStations(line).length,
    0,
  )
  const sections = 6 // /rail, /bus, /bike, /gondola, /ferry, /ticketing
  // rail: lines, rolling-stock, depots, history, systems, operators
  // bus: network, operators, routes, models, garages
  // bike: history, generations, stations
  // gondola: lines
  // ticketing: guides
  const types = 16
  // /, /rail/network, /rail/stations, /data, /data/stations,
  // /data/line-colours, /data/provenance, /data/sources, /about, /404,
  // /_not-found
  const generated = 11
  /* Bus route overlays live in a nested registry, so they are not part of
     getAllPages(). Count the pilot's group index, its 20 route pages and the
     new stable Depots index explicitly. */
  const busPilotPages = getBusRoutesByGroup('colour-brown').length + 2
  const expected = content + stations + sections + types + generated + busPilotPages

  const actual = allHtml().filter((f) => f.endsWith('index.html')).length
  assert.equal(
    actual,
    expected,
    `${actual} pages exported, expected ${expected}. If you added a page, update the count here.`,
  )
})

test('every /rail page has a /train redirect stub pointing back at it', () => {
  const railPages = allHtml().filter((f) =>
    path.relative(OUT, f).startsWith('rail' + path.sep),
  )
  for (const file of railPages) {
    const rel = path.relative(path.join(OUT, 'rail'), file)
    const stub = path.join(OUT, 'train', rel)
    assert.ok(fs.existsSync(stub), `no redirect stub for rail/${rel}`)
    const html = fs.readFileSync(stub, 'utf8')
    const target = '/rail/' + rel.split(path.sep).join('/').replace(/index\.html$/, '')
    assert.ok(html.includes(`url=${target}`), `stub for ${rel} does not refresh to ${target}`)
    assert.ok(html.includes('rel="canonical"'), `stub for ${rel} carries no canonical`)
    assert.ok(html.includes('noindex'), `stub for ${rel} is indexable`)
  }
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
  const html = read('rail/lines/wenhu-line/index.html')
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
  const tdxBacked = STATIONS.filter((station) => station.recordSource === 'tdx')
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
  // The export uses trailing-slash folders. A link to /rail/lines/wenhu-line.html
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
