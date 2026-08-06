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
import { getLineStations, STATIONS } from '../lib/stations.ts'
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
  return walk(OUT)
}

/* ---- page inventory ------------------------------------------------ */

test('every content page exported an index.html', () => {
  const missing = getAllPages()
    .map((page) => page.href.replace(/^\//, '') + 'index.html')
    .filter((rel) => !exists(rel))
  assert.deepEqual(missing, [])
})

test('every Wenhu station exported a page', () => {
  const missing = getLineStations('BR')
    .map((s) => `train/stations/${s.code.toLowerCase()}/index.html`)
    .filter((rel) => !exists(rel))
  assert.deepEqual(missing, [])
})

test('the generated routes exported', () => {
  for (const rel of [
    'index.html',
    'train/network/index.html',
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
  const stations = getLineStations('BR').length
  const sections = 2 // /train, /bus
  const types = 6 // lines, rolling-stock, depots, history, routes, operators
  // /, /train/network, /data, /data/stations, /data/line-colours,
  // /data/provenance, /data/sources, /about, /404, /_not-found
  const generated = 10
  const expected = content + stations + sections + types + generated

  const actual = allHtml().filter((f) => f.endsWith('index.html')).length
  assert.equal(
    actual,
    expected,
    `${actual} pages exported, expected ${expected}. If you added a page, update the count here.`,
  )
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
  const html = read('train/lines/wenhu-line/index.html')
  assert.ok(html.includes('25.17'), 'official route length missing')
  assert.ok(!html.includes('26.4'), 'the inflated 26.4 km figure is still being printed')
})

test('the network table prints both a length and a measurement per line', () => {
  const html = read('train/network/index.html')
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
  const html = read('train/network/index.html')
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
  assert.equal(rows.length, STATIONS.length, 'the published JSON and the registry disagree on count')
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
  // The export uses trailing-slash folders. A link to /train/lines/wenhu-line.html
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
