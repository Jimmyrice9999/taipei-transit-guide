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
 *   docs/screenshots/     every canonical template at 375 / 768 / 1440 px in
 *                         the default run; --full retains the original
 *                         curated visual set, plus 200% and 400% equivalents
 *   docs/print/           print-media PDF for the selected visual set
 *   docs/browser-verification.json   every raw finding, for the tests
 *   docs/browser-verification.md    the human-readable report
 *
 * Checks, in order:
 *
 *   1. REFLOW (WCAG 1.4.10) — the default loads the selected canonical and
 *      extreme pages at 320 CSS px (the 400%-zoom equivalent of a 1280
 *      desktop) and 640 px (200%); --full loads every real page. Any
 *      document-level horizontal scrollbar is a violation. Overflow *inside*
 *      an overflow-x:auto container is allowed — that is the sanctioned pattern.
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
 *   4. AXE — axe-core against the selected pages by default, or every real
 *      page with --full; violations are grouped by impact.
 *
 *   5. SCREENSHOTS and PRINT PDFs for human review. The default uses one
 *      canonical page per template; --full retains the original visual set.
 *
 * The static server mimics GitHub Pages: extensionless → 404 unless a
 * directory with index.html, correct MIME by extension. Serving out/ through
 * anything smarter would hide exactly the class of bug postbuild.mjs fixed.
 */

import fs from 'node:fs'
import path from 'node:path'
import http from 'node:http'
import { availableParallelism } from 'node:os'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'
import { isRedirectStub } from './redirect-stub.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'out')
const SHOTS = path.join(ROOT, 'docs', 'screenshots')
const PRINT = path.join(ROOT, 'docs', 'print')
const AXE_PATH = path.join(ROOT, 'node_modules', 'axe-core', 'axe.min.js')

const CLI_ARGS = process.argv.slice(2)
const hasFlag = (flag) => CLI_ARGS.includes(flag)
const optionValue = (name) => {
  const prefix = `${name}=`
  const inline = CLI_ARGS.find((arg) => arg.startsWith(prefix))
  if (inline) return inline.slice(prefix.length)
  const index = CLI_ARGS.indexOf(name)
  return index >= 0 ? CLI_ARGS[index + 1] : undefined
}
const positiveInteger = (value, fallback) => {
  const number = Number(value)
  return Number.isInteger(number) && number > 0 ? number : fallback
}
const DEFAULT_WORKERS = Math.max(1, Math.min(4, availableParallelism() - 1))
const WORKERS = positiveInteger(optionValue('--workers') ?? process.env.BROWSER_VERIFY_WORKERS, DEFAULT_WORKERS)
const PAGE_TIMEOUT_MS = positiveInteger(
  optionValue('--timeout') ?? process.env.BROWSER_VERIFY_TIMEOUT,
  30_000,
)
const FULL_SWEEP = hasFlag('--full') || process.env.BROWSER_VERIFY_FULL === '1'
const PROBE_URL = optionValue('--probe-url') ?? process.env.BROWSER_VERIFY_PROBE_URL
const PROBE_ONLY = hasFlag('--probe-only')

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

/** Curated preferred candidates; inventory selection deduplicates these by rendered template. */
const PAGE_TYPES = [
  { name: 'home', url: '/' },
  { name: 'section-rail', url: '/rail/' },
  { name: 'section-bus', url: '/bus/' },
  { name: 'type-lines', url: '/rail/metro/lines/' },
  { name: 'bus-network', url: '/bus/network/' },
  { name: 'bus-routes', url: '/bus/routes/' },
  { name: 'bus-intercity', url: '/bus/intercity/' },
  { name: 'bus-regional-hsinchu', url: '/bus/regional/hsinchu/' },
  { name: 'bus-regional-taichung', url: '/bus/regional/taichung/' },
  { name: 'bus-regional-tainan', url: '/bus/regional/tainan/' },
  { name: 'bus-regional-kaohsiung', url: '/bus/regional/kaohsiung/' },
  { name: 'bus-route-brown', url: '/bus/routes/colour-brown/' },
  { name: 'bus-route-detail', url: '/bus/routes/colour-brown/brown-1/' },
  { name: 'bus-operators', url: '/bus/operators/' },
  { name: 'bus-operator-detail', url: '/bus/operators/taipeibus-1m9ums8/' },
  { name: 'bus-models', url: '/bus/models/' },
  { name: 'bus-depots', url: '/bus/depots/' },
  { name: 'line-wenhu', url: '/rail/metro/lines/wenhu-line/' },
  { name: 'line-sanying', url: '/rail/metro/lines/sanying-line/' },
  { name: 'article-matra', url: '/rail/history/matra-dispute/' },
  { name: 'article-incidents', url: '/rail/history/incidents/' },
  { name: 'article-public-art', url: '/rail/history/public-art/' },
  { name: 'article-station-naming', url: '/rail/history/station-naming/' },
  /* Added in run 7 with the layouts they exercise: station-numbering is the
     only page carrying the numbering ladder, and BR22 is the only station page
     with a planned-interchange strip. Run 5.1's lesson — a new layout that is
     not in this list has no browser coverage, and two of its three regressions
     were exactly that. */
  { name: 'systems-numbering', url: '/rail/technology/station-numbering/' },
  { name: 'station-br22', url: '/rail/metro/stations/br22/' },
  { name: 'station-br13', url: '/rail/metro/stations/br13/' },
  { name: 'station-br10', url: '/rail/metro/stations/br10/' },
  /*
   * Run 21: station pages stopped being Wenhu-only, and this list still had
   * no representative of the other 8 lines — the exact failure mode this
   * comment already names ("a new layout not in this list has no browser
   * coverage"). Y07 is a thin page (no overlay, so no structure/exits/
   * engineering rows) that also has an interchange and, since this run,
   * NTMC run-time data; K01 is Ankeng LRT, the one family of station pages
   * with no first/last-train section at all, TDX not publishing it for
   * light rail.
   */
  { name: 'station-y07', url: '/rail/metro/stations/y07/' },
  { name: 'station-k01', url: '/rail/metro/stations/k01/' },
  /* Run 118: ridership adds a second operator data shape. A1 exercises
     TYMC's station entry/exit report, while the Airport MRT line exercises a
     published line total alongside the TRTC and NTMC variants above. */
  { name: 'station-a1', url: '/rail/metro/stations/a1/' },
  { name: 'line-airport-mrt', url: '/rail/metro/lines/airport-mrt/' },
  { name: 'system-alishan', url: '/rail/alishan/' },
  { name: 'line-alishan-forest-railway', url: '/rail/alishan/lines/alishan-forest-railway/' },
  { name: 'stations-alishan', url: '/rail/alishan/stations/alishan-stations/' },
  { name: 'stock-val256', url: '/rail/metro/rolling-stock/val256/' },
  /* Run 119: the family/lot roster table is the first rolling-stock page
     whose primary purpose is a wide, horizontally scrollable data table. */
  { name: 'stock-fleet-roster', url: '/rail/metro/rolling-stock/fleet-roster/' },
  /* Run 121: systems-and-operations adds the first wide line-by-line
     signalling/power/headway table to the technology section. */
  { name: 'metro-operations', url: '/rail/technology/metro-operations/' },
  { name: 'depot-muzha', url: '/rail/metro/depots/muzha-depot/' },
  /*
   * Run 20 built these three photo-card grids and never added any of them
   * here — the same gap, a run later. `/rail/metro/stations/` in particular
   * changed twice this run (the interchange badges' source, and now every
   * line instead of one).
   */
  { name: 'rail-rolling-stock', url: '/rail/metro/rolling-stock/' },
  { name: 'rail-depots', url: '/rail/metro/depots/' },
  { name: 'rail-stations', url: '/rail/metro/stations/' },
  { name: 'network', url: '/rail/network/' },
  /*
   * Run 51's new layouts. The comment on this list has now been proved right
   * three runs running: a layout not in it has no browser coverage.
   */
  { name: 'rail-system-metro', url: '/rail/metro/' },
  { name: 'rail-system-cable', url: '/rail/cable/' },
  { name: 'rail-cable-lines', url: '/rail/cable/lines/' },
  { name: 'rail-cable-line-maokong', url: '/rail/cable/lines/maokong-gondola/' },
  { name: 'rail-technology', url: '/rail/technology/' },
  /* Run 123: project status is a new long-form rail section with its own
     construction/proposal tables and conflict notes. */
  { name: 'rail-project-status', url: '/rail/projects/project-status/' },
  { name: 'rail-project-taichung-blue', url: '/rail/projects/taichung-blue-line/' },
  { name: 'rail-project-taichung-purple', url: '/rail/projects/taichung-purple-line/' },
  { name: 'rail-project-taichung-orange', url: '/rail/projects/taichung-orange-line/' },
  { name: 'rail-project-taichung-orange-sea', url: '/rail/projects/taichung-orange-sea-extension/' },
  { name: 'rail-project-taichung-red', url: '/rail/projects/taichung-red-line/' },
  { name: 'rail-tod-joint-development', url: '/rail/projects/tod-joint-development/' },
  { name: 'rail-project-minsheng-xizhi', url: '/rail/projects/minsheng-xizhi-line/' },
  { name: 'rail-operators', url: '/rail/operators/' },
  { name: 'rail-operator-trtc', url: '/rail/operators/trtc/' },
  { name: 'bus-route-new-taipei', url: '/bus/routes/new-taipei/' },
  /*
   * Run 52: gondola stations and the fare-stages guide are new page types
   * this run added, and this list's own established lesson (see the run 21
   * and run 20 comments above) is that a new layout not listed here has no
   * keyboard/screenshot/print coverage even though reflow and axe already
   * check every real page via allPages(). Neither ticketing guide was
   * listed before this either — a pre-existing gap, not one this run made
   * worse, closed here since it was found while checking the new page.
   */
  { name: 'rail-cable-stations', url: '/rail/cable/stations/' },
  { name: 'gondola-station-maokong', url: '/rail/cable/stations/maokong-station/' },
  { name: 'ticketing-guides', url: '/ticketing/guides/' },
  { name: 'ticketing-airport-ground', url: '/ticketing/guides/airport-ground-transport/' },
  { name: 'ticketing-fare-stages', url: '/ticketing/guides/bus-fare-stages/' },
  /* Run 122: dated fare history and the operator concession timeline are a
     distinct long-form ticketing page, so keep a representative in the
     curated screenshot/print matrix. */
  { name: 'ticketing-fare-history', url: '/ticketing/guides/fare-history/' },
  { name: 'ticketing-glossary', url: '/ticketing/guides/glossary/' },
  { name: 'ticketing-conflicts-index', url: '/ticketing/guides/conflicts-index/' },
  /*
   * Run 89: the bike, ferry, cards/passes, and Taichung Metro additions are
   * distinct content families. Keep one representative for each index,
   * detail, and municipality/system layout so the expensive checks and the
   * screenshot/print matrix cover the entities added since Run 52.
   */
  { name: 'bike', url: '/bike/' },
  { name: 'bike-generations', url: '/bike/generations/' },
  { name: 'bike-history', url: '/bike/history/youbike/' },
  { name: 'bike-stations', url: '/bike/stations/' },
  { name: 'bike-stations-taipei', url: '/bike/stations/taipei/' },
  { name: 'bike-stations-new-taipei', url: '/bike/stations/new-taipei/' },
  { name: 'bike-stations-taoyuan', url: '/bike/stations/taoyuan/' },
  { name: 'bike-stations-taichung', url: '/bike/stations/taichung/' },
  { name: 'bike-stations-kaohsiung', url: '/bike/stations/kaohsiung/' },
  { name: 'ferry', url: '/ferry/' },
  { name: 'ferry-routes', url: '/ferry/routes/' },
  { name: 'ferry-route-blue-highway', url: '/ferry/routes/blue-highway/' },
  { name: 'ferry-route-cijin', url: '/ferry/routes/cijin/' },
  { name: 'ferry-route-penghu', url: '/ferry/routes/penghu/' },
  { name: 'ferry-route-kinmen', url: '/ferry/routes/kinmen/' },
  { name: 'ferry-route-matsu', url: '/ferry/routes/matsu/' },
  { name: 'ticketing-cards-passes', url: '/ticketing/guides/cards-passes-and-fares/' },
  { name: 'bus-operator-dayou', url: '/bus/operators/16474-f0ksz1/' },
  { name: 'bus-model-detail', url: '/bus/models/model-t-electric/' },
  { name: 'bus-depot-detail', url: '/bus/depots/guandu-danan/' },
  { name: 'tmrt-system', url: '/rail/tmrt/' },
  { name: 'tmrt-lines', url: '/rail/tmrt/lines/' },
  { name: 'tmrt-line-green', url: '/rail/tmrt/lines/green-line/' },
  { name: 'tmrt-stations', url: '/rail/tmrt/stations/' },
  { name: 'tmrt-station-g0', url: '/rail/tmrt/stations/g0/' },
  { name: 'tmrt-operator', url: '/rail/operators/tmrt/' },
  { name: 'thsr-system', url: '/rail/thsr/' },
  { name: 'thsr-lines', url: '/rail/thsr/lines/' },
  { name: 'thsr-line', url: '/rail/thsr/lines/thsr/' },
  { name: 'thsr-stations', url: '/rail/thsr/stations/' },
  { name: 'thsr-station', url: '/rail/thsr/stations/taipei/' },
  /* Run 153: Kaohsiung's Metro and Circular Light Rail use a separate
     operator namespace and have distinct system, line, and station layouts. */
  { name: 'krtc-system', url: '/rail/krtc/' },
  { name: 'krtc-lines', url: '/rail/krtc/lines/' },
  { name: 'krtc-line', url: '/rail/krtc/lines/red-line/' },
  { name: 'krtc-line-circular', url: '/rail/krtc/lines/circular-light-rail/' },
  { name: 'krtc-stations', url: '/rail/krtc/stations/' },
  { name: 'krtc-station', url: '/rail/krtc/stations/formosa-boulevard-r10/' },
  /* Run 154: Taoyuan's Green Line is a project registry pending its own TDX
     operating dataset, so verify its system, line, station index and code page. */
  { name: 'tymc-system', url: '/rail/tymc/' },
  { name: 'tymc-lines', url: '/rail/tymc/lines/' },
  { name: 'tymc-line', url: '/rail/tymc/lines/green-line/' },
  { name: 'tymc-stations', url: '/rail/tymc/stations/' },
  { name: 'tymc-station', url: '/rail/tymc/stations/jiande-xingfeng-g01/' },
  { name: 'data', url: '/data/' },
  { name: 'data-stations', url: '/data/stations/' },
  { name: 'data-colours', url: '/data/line-colours/' },
  /* Run 302: every source the site cites (7,700+ citations) — the single
     tallest rendered page on the site. Was never in this list, so it was
     being visited only by accident (selected as its own template's
     canonical), with no name anyone could grep for. It is also the page
     that proved fullPage screenshots need a clipped fallback; see
     MAX_SCREENSHOT_HEIGHT below. */
  { name: 'data-sources', url: '/data/sources/' },
  { name: 'provenance', url: '/data/provenance/' },
  { name: 'data-network-growth', url: '/data/network-growth/' },
  { name: 'data-comparisons', url: '/data/comparisons/' },
  { name: 'data-changelog', url: '/data/changelog/' },
  { name: 'about', url: '/about/' },
  /* Run 303, Part 2b: the geography index. 'regions' is the index over every
     mode; 'region-detail' exercises a card list with a "Not yet on this
     site" gaps section, which 'regions' itself does not have. */
  { name: 'regions', url: '/regions/' },
  { name: 'region-detail', url: '/regions/taichung/' },
  { name: '404', url: '/no/such/page/' },
]

/** Every real page, excluding generated redirect stubs. */
function allPages() {
  const found = []
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) walk(full)
      /*
       * Redirect stubs are not pages. They meta-refresh instantly, so
       * navigating to one destroys the execution context mid-measurement and
       * the harness crashes on the site's own redirects. Identified by the
       * marker in the file (scripts/redirect-stub.mjs) rather than by path —
       * run 51 moved the Rail section under a system level, which put stubs
       * inside the live trees where no path rule can find them. They have
       * their own test in build-output.test.mts.
       */
      else if (entry.name === 'index.html' && !isRedirectStub(fs.readFileSync(full, 'utf8'))) {
        // path.relative(OUT, OUT) is '' — naive joining produced '//', which
        // the client router treats as an invalid route and swaps the page for
        // Next's error shell. Every "finding" on that URL was this harness
        // testing a page that does not exist.
        const dir = path.relative(OUT, path.dirname(full)).split(path.sep).join('/')
        found.push({ file: full, url: dir === '' ? '/' : `/${dir}/` })
      }
    }
  }
  walk(OUT)
  return found.sort((a, b) => a.url.localeCompare(b.url))
}

/* ------------------------------------------------------------------ */
/* Template inventory                                                  */
/* ------------------------------------------------------------------ */

/*
 * The default run is a rendered-template check, not a census of every data
 * row. The exporter already gives us a cheap, deterministic inventory of the
 * real pages. Read that HTML once to identify the shape of each page and to
 * choose the content extremes that are most likely to break it:
 *
 *   - longest name: rendered h1 text length
 *   - most stops: route-map stations, or bus stop table rows where there is no map
 *   - widest table: largest number of cells in any rendered table row
 *   - deepest nesting: maximum HTML element depth in the rendered export
 *   - most citations: rendered links to numbered references
 *
 * These are layout-risk measurements, not claims about the transport data.
 * The selected URL, metric and template key are written to the JSON report so
 * a future page addition cannot silently disappear from browser coverage.
 */
const TEMPLATE_FEATURES = [
  'page-hero',
  'page-spine',
  'routemap',
  'bus-stops',
  'station-table',
  'profile',
  'formation-train',
  'lead-figure',
  'table-scroll',
  'entity-icon',
  'has-map',
  'has-spine',
  'station-accessibility-list',
  'ridership-panel',
  'page-title-with-icon',
  'pill-planned',
  'adjacent',
  'near-station',
  'specs',
  'data-cards',
  'comparison-table',
  'numbering-ladder',
  'section-desc',
  'no-spine',
]

const SYSTEMS = new Set(['alishan', 'cable', 'krtc', 'metro', 'thsr', 'tmrt', 'tra', 'tymc'])

function withoutScripts(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
}

function decodeHtml(text) {
  return text
    .replace(/<[^>]+>/g, '')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
}

function getClasses(body) {
  return new Set(
    [...body.matchAll(/class="([^"]+)"/g)]
      .flatMap((match) => match[1].split(/\s+/))
      .filter((name) => name && !name.includes('__')),
  )
}

function featureKey(classes) {
  return TEMPLATE_FEATURES.filter((feature) => classes.has(feature)).join(',') || 'base'
}

function templateKey(url, classes) {
  if (url === '/') return 'home'
  if (url === '/no/such/page/') return 'not-found'
  if (url === '/about/') return 'about'

  const parts = url.split('/').filter(Boolean)
  if (parts[0] === 'data') return `data:${parts[1] ?? 'index'}`

  if (classes.has('bus-stops')) return `bus-route:${featureKey(classes)}`
  if (classes.has('station-head')) return `metro-station:${featureKey(classes)}`

  // EntityPage is the shared content renderer for line, station, operator,
  // depot, article and similar detail pages. Optional furniture is part of the
  // template contract, so it stays in the key rather than being lost.
  if (classes.has('refs') && classes.has('prose')) return `entity-detail:${featureKey(classes)}`

  if (parts[0] === 'rail' && SYSTEMS.has(parts[1])) {
    if (parts.length === 2) return `rail-system-index:${featureKey(classes)}`
    if (parts.length === 3) return `rail-system-type-index:${featureKey(classes)}`
  }

  if (parts.length === 1) return `section-index:${featureKey(classes)}`
  if (parts.length === 2) return `type-index:${parts[0]}:${featureKey(classes)}`
  return `nested-index:${parts.slice(0, -1).join('-')}:${featureKey(classes)}`
}

function maxTableColumns(body) {
  let widest = 0
  for (const table of body.matchAll(/<table\b[\s\S]*?<\/table>/gi)) {
    for (const row of table[0].matchAll(/<tr\b[\s\S]*?<\/tr>/gi)) {
      widest = Math.max(widest, (row[0].match(/<(?:th|td)\b/gi) ?? []).length)
    }
  }
  return widest
}

function maxElementDepth(body) {
  const voidElements = new Set([
    'area',
    'base',
    'br',
    'col',
    'embed',
    'hr',
    'img',
    'input',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
  ])
  let depth = 0
  let maximum = 0
  for (const token of body.matchAll(/<\/?([a-z][\w:-]*)\b[^>]*>/gi)) {
    const name = token[1].toLowerCase()
    if (token[0][1] === '/') {
      depth = Math.max(0, depth - 1)
    } else if (!voidElements.has(name) && !token[0].endsWith('/>')) {
      depth += 1
      maximum = Math.max(maximum, depth)
    }
  }
  return maximum
}

function pageMetrics(page) {
  const body = withoutScripts(fs.readFileSync(page.file, 'utf8'))
  const classes = getClasses(body)
  const title = decodeHtml(body.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? '')
  const mapStations = (body.match(/class="[^"]*\broutemap-station\b[^"]*"/gi) ?? []).length
  const busRows = classes.has('bus-stops') ? (body.match(/<tr\b/gi) ?? []).length : 0

  return {
    ...page,
    title,
    template: templateKey(page.url, classes),
    metrics: {
      longestName: title.length,
      mostStops: Math.max(mapStations, busRows),
      widestTable: maxTableColumns(body),
      deepestNesting: maxElementDepth(body),
      mostCitations: (body.match(/href="#ref-/gi) ?? []).length,
    },
  }
}

const EXTREMES = [
  ['longest-name', 'longestName'],
  ['most-stops', 'mostStops'],
  ['widest-table', 'widestTable'],
  ['deepest-nesting', 'deepestNesting'],
  ['most-citations', 'mostCitations'],
]

function addSelected(selected, record, role, reason, preferredName) {
  if (!record) return
  const existing = selected.get(record.url)
  if (existing) {
    existing.roles = [...new Set([...existing.roles, role])]
    if (reason) existing.extremes = [...new Set([...existing.extremes, reason])]
    return
  }
  selected.set(record.url, {
    name: preferredName ?? (record.url.replaceAll('/', '-').replace(/^-|-$/g, '') || 'page'),
    url: record.url,
    template: record.template,
    roles: [role],
    extremes: reason ? [reason] : [],
    metrics: record.metrics,
  })
}

function selectTemplatePages(corpus) {
  const records = corpus.map(pageMetrics)
  const byUrl = new Map(records.map((record) => [record.url, record]))
  const notFound = {
    url: '/no/such/page/',
    title: 'Page not found',
    template: 'not-found',
    metrics: { longestName: 15, mostStops: 0, widestTable: 0, deepestNesting: 5, mostCitations: 0 },
  }
  records.push(notFound)
  byUrl.set(notFound.url, notFound)

  const preferred = PAGE_TYPES.map((candidate) => {
    const record = byUrl.get(candidate.url)
    if (!record) return null
    return { ...record, preferredName: candidate.name }
  }).filter(Boolean)
  const preferredByTemplate = new Map()
  for (const candidate of preferred) {
    if (!preferredByTemplate.has(candidate.template)) preferredByTemplate.set(candidate.template, candidate)
  }

  const groups = new Map()
  for (const record of records) {
    if (!groups.has(record.template)) groups.set(record.template, [])
    groups.get(record.template).push(record)
  }

  const selected = new Map()
  const templates = []
  for (const [template, members] of [...groups].sort(([a], [b]) => a.localeCompare(b))) {
    const canonical = preferredByTemplate.get(template) ?? members[0]
    addSelected(selected, canonical, 'canonical', '', canonical.preferredName)
    const extremeSelections = {}
    for (const [reason, metric] of EXTREMES) {
      const extreme = members.reduce((best, member) =>
        member.metrics[metric] > best.metrics[metric] ? member : best,
      members[0])
      extremeSelections[reason] = {
        url: extreme.url,
        value: extreme.metrics[metric],
      }
      addSelected(selected, extreme, 'extreme', reason)
    }
    templates.push({
      key: template,
      memberCount: members.length,
      canonical: canonical.url,
      extremes: extremeSelections,
    })
  }

  const pages = [...selected.values()].sort((a, b) => a.url.localeCompare(b.url))
  const nameCounts = new Map()
  for (const page of pages) {
    const count = nameCounts.get(page.name) ?? 0
    nameCounts.set(page.name, count + 1)
    if (count > 0) page.name = `${page.name}-${count + 1}`
  }

  return {
    records,
    templates,
    pages,
  }
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
  /*
   * Wait for the webfonts before measuring. `load` fires before font swap on
   * a cold cache, so an early measurement sees fallback-font metrics — which
   * differ per OS. That is how a page can measure clean on the machine that
   * wrote it (Arial fallback) and overflow by a few pixels on a CI runner
   * (Liberation fallback): same HTML, same CSS, same Chromium, different
   * interim glyph widths. The site's own fonts are identical everywhere, so
   * measuring after they apply is what makes the number portable.
   */
  await page.evaluate(() => document.fonts.ready)
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

/**
 * Installed on the context so it exists before any page script runs and
 * survives hydration. Both the stamping pass and the per-Tab identity lookup
 * go through it, so "the focusable elements" means one list, not two that
 * drifted apart.
 */
const FOCUSABLE_HELPER = () => {
  window.__ttgFocusable = () =>
    [...document.querySelectorAll('a[href], button, input, select, textarea, [tabindex]')].filter(
      (el) => {
        const style = getComputedStyle(el)
        if (style.display === 'none' || style.visibility === 'hidden') return false
        if (el.tabIndex < 0) return false
        return true
      },
    )
}

/**
 * Stamp the focusable elements, and do not return until the stamps have
 * actually stuck.
 *
 * `load` fires before React hydration, and hydration replaces the article
 * subtree wholesale — every attribute written before it is thrown away with the
 * nodes that carried it. Measured on the Wenhu line page: 249 stamps applied,
 * 249 present immediately, **0** a second later. Stamping once at `load` was
 * therefore writing to a DOM that was about to be discarded.
 */
async function stampFocusable(page) {
  await page.waitForLoadState('networkidle', { timeout: PAGE_TIMEOUT_MS }).catch(() => {})

  let expected = []
  for (let attempt = 0; attempt < 8; attempt++) {
    expected = await page.evaluate(() =>
      window.__ttgFocusable().map((el, i) => {
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
    // Hydration commits a subtree in one go, so a wipe is never half-done:
    // if the stamps are all still there after a settle, they are staying.
    await page.waitForTimeout(250)
    const survived = await page.evaluate(() => document.querySelectorAll('[data-kbd]').length)
    if (expected.length === 0 || survived === expected.length) return expected
  }
  return expected
}

/** Tab through the page, recording what gets focus and how it looks. */
async function keyboardTraversal(page) {
  /*
   * Match visits by the stamp. The first version matched by label text, which
   * reported the nav links "unreached" on every page purely because their key
   * was an href and their label was text — pure matcher noise presented as a
   * finding.
   *
   * The fallback when a stamp is missing used to be `TAG|href`, and that is not
   * an identity: the Wenhu page carries 27 separate `[2]` citation markers, all
   * href="#ref-2". With the stamps eaten by hydration (see stampFocusable),
   * 244 anchors collapsed into 116 keys, every repeat counted as a revisit, and
   * ten consecutive revisits is this function's definition of a focus trap. It
   * reported a trap on a page that has none — then crashed reporting it, which
   * is how CI run #14 failed with "exit code 1" and no annotation naming a
   * cause. Position in the live focusable list cannot collide and cannot be
   * wiped.
   */
  const expected = await stampFocusable(page)

  await page.evaluate(() => document.body.focus())

  const order = []
  const seen = new Set()
  let stagnant = 0
  let trapped = false

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
        key: el.getAttribute('data-kbd') ?? String(window.__ttgFocusable().indexOf(el)),
      }
    })

    if (!info) break // wrapped back to body: traversal complete

    order.push(info)
    if (seen.has(info.key)) {
      stagnant++
      // Revisiting is normal at the wrap; ten consecutive revisits without a
      // single new element is a trap. Break rather than return: the early
      // return here built a DIFFERENT shape — no noRing, no distinct, no
      // expectedCount — and the caller reads result.noRing.length
      // unconditionally. A trap therefore crashed the whole run with a
      // TypeError instead of being reported as the finding it is.
      if (stagnant > 10) {
        trapped = true
        break
      }
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
    trapped,
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

function duration(started) {
  const seconds = Math.max(0, (Date.now() - started) / 1000)
  if (seconds < 60) return `${seconds.toFixed(1)}s`
  const minutes = Math.floor(seconds / 60)
  return `${minutes}m ${(seconds % 60).toFixed(0).padStart(2, '0')}s`
}

function errorSummary(error) {
  return String(error?.message ?? error).split('\n')[0].slice(0, 240)
}

function recordPageFailure(report, item, phase, error) {
  const message = errorSummary(error)
  const timeout = /timeout/i.test(message) || error?.name === 'TimeoutError'
  const failure = {
    name: item.name,
    url: item.url,
    phase,
    kind: timeout ? 'timeout' : 'navigation/error',
    message,
    expected: item.expected === true,
  }
  report.pageFailures.push(failure)
  console.log(
    `  ✗ ${phase} ${item.name} (${item.url}) — ${timeout ? 'timed out' : 'failed'}: ${message}`,
  )
  return failure
}

async function gotoPage(page, item, base, report, phase) {
  const url = /^https?:\/\//i.test(item.url) ? item.url : base + item.url
  try {
    await page.goto(url, { waitUntil: 'load', timeout: PAGE_TIMEOUT_MS })
    return true
  } catch (error) {
    recordPageFailure(report, item, phase, error)
    return false
  }
}

function startProgress(report, progress, phase, total) {
  progress.phase = phase
  progress.done = 0
  progress.total = total
  progress.lastLogged = 0
  report.progress.push({ phase, total, started: new Date().toISOString() })
  console.log(`\n── ${phase} ──`)
  console.log(`  progress: 0/${total} pages, elapsed ${duration(progress.started)}`)
}

function logProgress(progress, force = false) {
  const now = Date.now()
  if (!force && now - progress.lastLogged < 5_000) return
  progress.lastLogged = now
  console.log(`  progress: ${progress.done}/${progress.total} pages, elapsed ${duration(progress.started)}`)
}

async function runConcurrent({ browser, items, phase, contextOptions, initScript, task, report, progress }) {
  startProgress(report, progress, phase, items.length)
  const phaseReport = report.progress.at(-1)
  if (items.length === 0) {
    phaseReport.done = 0
    phaseReport.elapsed = duration(progress.started)
    return
  }

  let cursor = 0
  const workerCount = Math.min(WORKERS, items.length)
  const worker = async (workerNumber) => {
    const context = await browser.newContext(contextOptions)
    try {
      if (initScript) await context.addInitScript(initScript)
      const page = await context.newPage()
      page.setDefaultTimeout(PAGE_TIMEOUT_MS)
      page.setDefaultNavigationTimeout(PAGE_TIMEOUT_MS)
      while (true) {
        const index = cursor++
        if (index >= items.length) break
        const item = items[index]
        try {
          await task(page, item, workerNumber)
        } catch (error) {
          recordPageFailure(report, item, phase, error)
        } finally {
          progress.done += 1
          logProgress(progress, progress.done === items.length || progress.done % 25 === 0)
        }
      }
    } finally {
      await context.close().catch((error) => {
        console.log(`  ✗ ${phase} worker ${workerNumber + 1} failed to close: ${errorSummary(error)}`)
      })
    }
  }

  await Promise.all(Array.from({ length: workerCount }, (_, i) => worker(i)))
  logProgress(progress, true)
  phaseReport.done = progress.done
  phaseReport.elapsed = duration(progress.started)
}

function writeHumanReport(report) {
  const failures = report.pageFailures.filter((failure) => !failure.expected)
  const templateLines = report.inventory.templates.map((template) => {
    const extremes = Object.entries(template.extremes)
      .map(([reason, value]) => `${reason}=${value.url} (${value.value})`)
      .join('; ')
    return `- ${template.key}: ${template.memberCount} page(s); canonical ${template.canonical}; ${extremes}`
  })
  const coverage = report.mode === 'full'
    ? `Reflow and axe cover all ${report.corpusPages} real pages. Keyboard and ARIA cover the ${report.templatePages} selected template/extreme pages; screenshots and print cover the ${report.visualPages} curated visual pages from the original sweep.`
    : `Reflow, axe, keyboard and ARIA cover the ${report.templatePages} selected template/extreme pages. Screenshots and print cover ${report.visualPages} canonical templates; use \`npm run verify:browser:full\` for the ${report.corpusPages}-page reflow and axe sweep.`
  const text = [
    '# Browser verification',
    '',
    `- Mode: **${report.mode}**`,
    `- Corpus pages: **${report.corpusPages}**`,
    `- Templates identified: **${report.templateCount}**`,
    `- Pages visited by this mode: **${report.visitedPages}**`,
    `- Canonical template pages: **${report.canonicalPages}**; additional extreme pages: **${report.extremePages}**`,
    `- Visual/print pages: **${report.visualPages}**`,
    `- Workers: **${report.workers}**`,
    `- Per-page timeout: **${report.pageTimeoutMs} ms**`,
    `- Elapsed: **${report.elapsed}**`,
    '',
    coverage,
    '',
    '## Selection method',
    '',
    'Each rendered export is grouped by route family plus the optional rendered furniture that changes its layout. One curated canonical candidate is retained for each group, then the maximum rendered h1 length, stop count, table column count, DOM nesting depth and citation-link count are retained for that group. Duplicate URLs are visited once and carry all applicable roles.',
    '',
    ...templateLines,
    '',
    '## Clipped screenshots',
    '',
    report.clippedScreenshots.length
      ? report.clippedScreenshots
          .map(
            (c) =>
              `- ${c.name} (${c.url}) — clipped to ${c.clipHeight}px; full rendered height ${c.fullHeight}px exceeds Chromium's fullPage capture limit`,
          )
          .join('\n')
      : '✓ none — every screenshot captured at full page height',
    '',
    `## Findings`,
    '',
    failures.length ? failures.map((failure) => `- ✗ ${failure.phase}: ${failure.name} (${failure.url}) — ${failure.message}`).join('\n') : '✓ none',
    '',
  ].join('\n')
  fs.writeFileSync(path.join(ROOT, 'docs', 'browser-verification.md'), text)
}

/* ------------------------------------------------------------------ */
/* Main                                                                */
/* ------------------------------------------------------------------ */

const { server, port } = await serve()
const base = `http://127.0.0.1:${port}`
/*
 * A missing browser is an environment problem, not a finding — it exits 2
 * with the command that fixes it, so a CI log says "install Chromium" rather
 * than "exit code 1". The tests this script runs are not weakened or skipped:
 * with no browser they cannot run at all, and the step fails saying why.
 */
let browser
try {
  browser = await chromium.launch()
} catch (error) {
  console.error(
    'Could not launch Chromium — browser verification cannot run.\n' +
      'Install it first:  npx playwright install --with-deps chromium\n\n' +
      String(error.message).split('\n')[0],
  )
  if (process.env.GITHUB_ACTIONS) {
    console.log(
      '::error title=Browser verification::Chromium is not installed on this runner. ' +
        'Add `npx playwright install --with-deps chromium` before this step.',
    )
  }
  server.close()
  process.exit(2)
}
const axeSource = fs.readFileSync(AXE_PATH, 'utf8')

const report = {
  generated: new Date().toISOString(),
  mode: FULL_SWEEP ? 'full' : 'template',
  workers: WORKERS,
  pageTimeoutMs: PAGE_TIMEOUT_MS,
  reflow: [],
  keyboard: {},
  aria: {},
  axe: {},
  axeNames: {},
  axeSummary: { critical: 0, serious: 0, moderate: 0, minor: 0 },
  print: [],
  spineOverlap: [],
  pageFailures: [],
  clippedScreenshots: [],
  progress: [],
}

const log = (msg) => console.log(msg)
const runStarted = Date.now()
const progress = { started: runStarted, phase: '', done: 0, total: 0, lastLogged: 0 }
const progressTimer = setInterval(() => logProgress(progress, true), 30_000)

const corpus = allPages()
const inventory = selectTemplatePages(corpus)
const templatePages = inventory.pages
const canonicalPages = templatePages.filter((page) => page.roles.includes('canonical'))
const visualPages = FULL_SWEEP
  ? PAGE_TYPES
  : canonicalPages
const verificationPages = FULL_SWEEP
  ? corpus.map((page) => ({ name: page.url, url: page.url }))
  : templatePages
report.corpusPages = corpus.length
report.templateCount = inventory.templates.length
report.templatePages = templatePages.length
report.visualPages = visualPages.length
report.canonicalPages = canonicalPages.length
report.extremePages = templatePages.length - canonicalPages.length
report.visitedPages = verificationPages.length
report.inventory = {
  selectionMethod: 'route family plus rendered optional furniture; canonical plus five per-template maxima',
  templates: inventory.templates,
  pages: templatePages,
}

log(
  `\nBrowser verification mode=${report.mode}; corpus=${report.corpusPages} pages; ` +
    `templates=${report.templateCount}; pages visited=${report.visitedPages} ` +
    `(canonical=${report.canonicalPages}, extremes=${report.extremePages}); workers=${WORKERS}; ` +
    `timeout=${PAGE_TIMEOUT_MS}ms`,
)
if (!FULL_SWEEP) {
  log('  default selection: one canonical page per rendered template plus longest-name, most-stops, widest-table, deepest-nesting and most-citations extremes')
}
if (PROBE_URL) log(`  timeout probe: ${PROBE_URL}${PROBE_ONLY ? ' (probe-only)' : ''}`)

/* ---- 0. timeout probe ------------------------------------------------ */

if (PROBE_URL) {
  const probeItems = [
    { name: 'deliberately-unreachable', url: PROBE_URL, expected: true },
    { name: 'after-timeout-probe', url: '/', expected: false },
  ]
  await runConcurrent({
    browser,
    items: probeItems,
    phase: 'Timeout probe',
    contextOptions: { viewport: { width: 1280, height: 900 } },
    task: async (page, item) => {
      const ok = await gotoPage(page, item, base, report, 'Timeout probe')
      if (item.expected && ok) throw new Error('deliberately unreachable URL loaded unexpectedly')
      if (!item.expected && !ok) throw new Error('control page failed after timeout probe')
    },
    report,
    progress,
  })
  const probeFailures = report.pageFailures.filter((failure) => failure.expected)
  const controlFailure = report.pageFailures.find((failure) => failure.name === 'after-timeout-probe')
  report.timeoutProbe = {
    url: PROBE_URL,
    caught: probeFailures.length === 1,
    continued: !controlFailure,
  }
  if (PROBE_ONLY) {
    clearInterval(progressTimer)
    report.elapsed = duration(runStarted)
    writeHumanReport(report)
    fs.writeFileSync(path.join(ROOT, 'docs', 'browser-verification.json'), JSON.stringify(report, null, 2))
    const passed = report.timeoutProbe.caught && report.timeoutProbe.continued
    console.log(`\n${passed ? '✓' : '✗'} timeout probe ${passed ? 'caught the failed page and continued' : 'did not meet both expectations'}\n`)
    await browser.close()
    server.close()
    process.exit(passed ? 0 : 1)
  }
}

/* ---- 1. reflow at zoom equivalents ---------------------------------- */

log('\n═══ 1. Reflow at 200% and 400% zoom equivalents ═══\n')

await runConcurrent({
  browser,
  items: verificationPages,
  phase: 'Reflow at 200% and 400% zoom equivalents',
  contextOptions: {},
  task: async (page, item) => {
    for (const width of [640, 320]) {
      await page.setViewportSize({ width, height: 900 })
      if (!(await gotoPage(page, item, base, report, 'Reflow'))) break
      const { overflow, culprits } = await measureOverflow(page)
      if (overflow > 0) {
        report.reflow.push({ name: item.name, url: item.url, width, overflow, culprits })
        log(`  ✗ ${item.url} at ${width}px: ${overflow}px horizontal overflow`)
        for (const c of culprits) log(`      <${c.tag} class="${c.cls}"> width ${c.width}`)
      }
    }
  },
  report,
  progress,
})
if (report.reflow.length === 0) log('  ✓ no page produces a document-level horizontal scrollbar')

/* ---- 1b. nothing paints across the floated spine ---- */

/*
 * Run 10. `.lead-figure` carried a `border-bottom` in the line colour and was
 * not a block formatting context, so its box started at the container's left
 * edge and the rule painted straight through the strip map, across BR12's
 * name. Reported as "a long brown line spanning the entire page width".
 *
 * The class of bug: a direct child of `.page-main` that paints a border or a
 * background, and is not a BFC, sits UNDER the float rather than beside it.
 * Only the line boxes inside it shorten, and the painting does not. Nothing in
 * the markup looks wrong, and it is invisible to every check that reads HTML —
 * it needs a rendered box, which is why it lives here and not in tests/.
 *
 * Checked at 1440 because that is where the spine is a float and the widths
 * are largest; the mobile block turns the float off entirely.
 */
log('\n═══ 1b. Painted boxes across the spine float ═══\n')

{
  await runConcurrent({
    browser,
    items: templatePages,
    phase: 'Painted boxes across the spine float',
    contextOptions: { viewport: { width: 1440, height: 900 } },
    task: async (page, item) => {
      if (!(await gotoPage(page, item, base, report, 'Painted boxes across the spine float'))) return
    const bad = await page.evaluate(() => {
      const spine = document.querySelector('.page-spine')
      const main = document.querySelector('.page-main')
      if (!spine || !main) return []
      const s = spine.getBoundingClientRect()
      if (s.width === 0 || s.height === 0) return []
      const out = []
      for (const child of main.children) {
        const cs = getComputedStyle(child)
        const paints =
          parseFloat(cs.borderTopWidth) > 0 ||
          parseFloat(cs.borderBottomWidth) > 0 ||
          parseFloat(cs.borderLeftWidth) > 0 ||
          parseFloat(cs.borderRightWidth) > 0 ||
          (cs.backgroundColor !== 'rgba(0, 0, 0, 0)' && cs.backgroundColor !== 'transparent')
        if (!paints) continue
        const r = child.getBoundingClientRect()
        // Vertically clear of the spine? Then it cannot be painting over it.
        if (r.bottom <= s.top || r.top >= s.bottom) continue
        // Horizontally inside the float's column is the failure.
        if (r.left < s.right - 1) {
          out.push({
            cls: child.className.toString().slice(0, 60),
            tag: child.tagName,
            left: Math.round(r.left),
            spineRight: Math.round(s.right),
          })
        }
      }
      return out
    })
    for (const b of bad) {
      report.spineOverlap.push({ page: item.name, url: item.url, ...b })
      log(`  ✗ ${item.name}: <${b.tag} class="${b.cls}"> paints from ${b.left}, spine ends ${b.spineRight}`)
    }
    },
    report,
    progress,
  })
  if (report.spineOverlap.length === 0) {
    log('  ✓ no painted box in .page-main runs under the spine')
  }
}

/* ---- 2. keyboard, per page type ---- */

log('\n═══ 2. Keyboard traversal ═══\n')

{
  await runConcurrent({
    browser,
    items: templatePages,
    phase: 'Keyboard traversal',
    contextOptions: { viewport: { width: 1280, height: 900 } },
    initScript: FOCUSABLE_HELPER,
    task: async (page, item) => {
      if (!(await gotoPage(page, item, base, report, 'Keyboard traversal'))) return
      const result = await keyboardTraversal(page)
      report.keyboard[item.name] = result
      const bad = result.trapped || result.noRing.length > 0
      log(
        `  ${bad ? '✗' : '✓'} ${item.name.padEnd(28)} ${String(result.distinct).padStart(3)}/${result.expectedCount} reachable` +
          (result.trapped ? '  TRAPPED' : '') +
          (result.noRing.length ? `  ${result.noRing.length} without focus ring` : '') +
          (result.unreached.length ? `  (${result.unreached.length} beyond traversal cap)` : ''),
      )
    },
    report,
    progress,
  })
}

/* ---- 3. accessibility tree, per page type ---- */

log('\n═══ 3. Accessibility tree probes ═══\n')

{
  await runConcurrent({
    browser,
    items: templatePages,
    phase: 'Accessibility tree probes',
    contextOptions: { viewport: { width: 1280, height: 900 } },
    task: async (page, item) => {
      if (!(await gotoPage(page, item, base, report, 'Accessibility tree probes'))) return
      const probes = await ariaProbes(page)
      // The full ARIA snapshot, for the record.
      probes.snapshot = await page.locator('main').ariaSnapshot().catch(() => '(no main)')
      report.aria[item.name] = probes

      const nameless =
        (probes.mapStations ?? []).filter((s) => s.name === '(NONE)').length +
        (probes.mapSvg && !probes.mapSvg.name ? 1 : 0) +
        (probes.formation && !probes.formation.name ? 1 : 0)
      log(`  ${nameless ? '✗' : '✓'} ${item.name.padEnd(28)}${nameless ? ` ${nameless} unnamed graphics` : ''}`)
    },
    report,
    progress,
  })
}

/* ---- 4. axe, selected pages by default; every page in --full mode ---- */

log(`\n═══ 4. axe-core, ${FULL_SWEEP ? 'all pages' : 'selected pages'} ═══\n`)

{
  await runConcurrent({
    browser,
    items: verificationPages,
    phase: 'axe-core',
    contextOptions: { viewport: { width: 1280, height: 900 } },
    task: async (page, item) => {
      if (!(await gotoPage(page, item, base, report, 'axe-core'))) return
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
        report.axe[item.url] = results
        report.axeNames[item.url] = item.name
        for (const v of results) {
          report.axeSummary[v.impact ?? 'unknown'] = (report.axeSummary[v.impact ?? 'unknown'] ?? 0) + 1
          log(`  ✗ ${item.name} (${item.url}) [${v.impact}] ${v.id}: ${v.help} (${v.nodes} nodes)`)
        }
      }
    },
    report,
    progress,
  })
  const total = Object.values(report.axeSummary).reduce((a, b) => a + b, 0)
  if (total === 0) log(`  ✓ zero violations across ${verificationPages.length} pages`)
  else log(`\n  ${total} violation instances: ${JSON.stringify(report.axeSummary)}`)
}

/* ---- 5. screenshots ---- */

log('\n═══ 5. Screenshots ═══\n')

/*
 * Chromium's screenshot compositing has a hard texture-height ceiling
 * (Page.captureScreenshot throws "Unable to capture screenshot" above it,
 * not a graceful downscale). /data/sources/ lists every citation on the
 * site — 7,700+ of them — and at that length a fullPage capture exceeds the
 * ceiling regardless of viewport width. This is a genuine limit of the
 * capture tool, not a defect in the page, so the fix is a bounded clipped
 * capture, not excluding the page from coverage.
 *
 * 12,000px is comfortably under every documented ceiling (Chromium's
 * maximum texture dimension is 16,384px on typical GPUs) while still being
 * generous enough that only genuinely extreme pages ever hit it.
 */
const MAX_SCREENSHOT_HEIGHT = 12_000

async function captureScreenshot(page, filePath) {
  try {
    await page.screenshot({ path: filePath, fullPage: true })
    return { clipped: false }
  } catch (error) {
    if (!/unable to capture screenshot/i.test(String(error?.message ?? error))) throw error
    const fullHeight = await page.evaluate(() => document.documentElement.scrollHeight)
    const clipHeight = Math.min(fullHeight, MAX_SCREENSHOT_HEIGHT)
    const viewportWidth = page.viewportSize()?.width ?? 1280
    try {
      await page.screenshot({
        path: filePath,
        clip: { x: 0, y: 0, width: viewportWidth, height: clipHeight },
      })
      return { clipped: true, fullHeight, clipHeight }
    } catch (retryError) {
      return { clipped: true, fullHeight, clipHeight, failed: true, message: errorSummary(retryError) }
    }
  }
}

{
  /*
   * 1920 and 2560 added permanently in run 10.
   *
   * The set was 375 / 768 / 1440, and that is exactly why three layout bugs
   * shipped: the container caps at 1140px, so at 1440 it fills the viewport
   * and everything looks composed. Above 1140 + margins the page stops
   * growing and the reading column becomes a narrow strip in a field of
   * white — a failure that is invisible at every width previously shot.
   * A widescreen laptop at full screen is the common case, not the edge one.
   */
  const widths = [
    [375, ''],
    [768, ''],
    [1440, ''],
    [1920, ''],
    [2560, ''],
    [640, '-zoom200'],
    [320, '-zoom400'],
  ]

  await runConcurrent({
    browser,
    items: visualPages,
    phase: 'Screenshots',
    contextOptions: {},
    task: async (page, item) => {
      for (const [width, suffix] of widths) {
        await page.setViewportSize({ width, height: 900 })
        if (!(await gotoPage(page, item, base, report, 'Screenshots'))) break
        const name = `${item.name}-${width}${suffix}.png`
        const result = await captureScreenshot(page, path.join(SHOTS, name))
        if (result.clipped) {
          report.clippedScreenshots.push({ name, url: item.url, width, ...result })
          if (result.failed) {
            recordPageFailure(
              report,
              item,
              'Screenshots',
              `could not capture even clipped to ${result.clipHeight}px (full height ${result.fullHeight}px): ${result.message}`,
            )
          } else {
            log(
              `  ⚠ ${name} clipped to ${result.clipHeight}px — full rendered height ${result.fullHeight}px exceeds Chromium's capture limit`,
            )
          }
        }
      }
      // A landscape phone is a distinct height/width relationship, not a wide
      // desktop screenshot. Keep one representative operator page for it.
      if (item.url === '/bus/operators/taipeibus-1m9ums8/') {
        await page.setViewportSize({ width: 667, height: 375 })
        if (await gotoPage(page, item, base, report, 'Screenshots')) {
          const result = await captureScreenshot(
            page,
            path.join(SHOTS, 'bus-operator-detail-landscape-phone.png'),
          )
          if (result.clipped) {
            report.clippedScreenshots.push({
              name: 'bus-operator-detail-landscape-phone.png',
              url: item.url,
              width: 667,
              ...result,
            })
          }
        }
      }
    },
    report,
    progress,
  })
  log(`  ${visualPages.length * widths.length + 1} screenshots → docs/screenshots/`)
  if (report.clippedScreenshots.length) {
    log(`  ${report.clippedScreenshots.length} screenshot(s) clipped to stay under Chromium's capture limit — see docs/browser-verification.json`)
  }
}

/* ---- 6. print PDFs ---- */

log('\n═══ 6. Print PDFs ═══\n')

{
  const printPages = visualPages.filter((item) => item.url !== '/no/such/page/')
  await runConcurrent({
    browser,
    items: printPages,
    phase: 'Print PDFs',
    contextOptions: {},
    task: async (page, item) => {
      if (!(await gotoPage(page, item, base, report, 'Print PDFs'))) return
      await page.emulateMedia({ media: 'print' })

      try {
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
        report.print.push({ name: item.name, url: item.url, ...printChecks })

        await page.pdf({
          path: path.join(PRINT, `${item.name}.pdf`),
          format: 'A4',
          printBackground: true,
        })

        const bad = Object.entries(printChecks).filter(([, v]) => v === false)
        log(`  ${bad.length ? '✗' : '✓'} ${item.name}.pdf${bad.length ? '  failed: ' + bad.map(([k]) => k).join(', ') : ''}`)
      } finally {
        await page.emulateMedia({ media: 'screen' })
      }
    },
    report,
    progress,
  })
}

/* ------------------------------------------------------------------ */

clearInterval(progressTimer)
report.elapsed = duration(runStarted)
await browser.close()
server.close()

/*
 * Every finding as one line, so a failure names itself — in the console, as
 * a GitHub annotation on the run, and in the step summary. "Exit code 1" is
 * not a failure message; these are.
 */
const findings = []
for (const r of report.reflow) {
  findings.push(`reflow: ${r.url} at ${r.width}px overflows by ${r.overflow}px`)
}
for (const [name, k] of Object.entries(report.keyboard)) {
  if (k.trapped) findings.push(`keyboard: focus trap on ${name}`)
  if (k.noRing.length) {
    findings.push(`keyboard: no visible focus ring on ${name}: ${k.noRing.slice(0, 3).join(', ')}`)
  }
}
for (const [url, violations] of Object.entries(report.axe)) {
  findings.push(
    `axe: ${violations.length} violation(s) on ${report.axeNames[url] ?? url} — details in browser-verification.json`,
  )
}
for (const [name, probes] of Object.entries(report.aria)) {
  const nameless =
    (probes.mapStations ?? []).filter((station) => station.name === '(NONE)').length +
    (probes.mapSvg && !probes.mapSvg.name ? 1 : 0) +
    (probes.formation && !probes.formation.name ? 1 : 0)
  if (nameless) findings.push(`aria: ${nameless} unnamed graphic(s) on ${name}`)
}
for (const failure of report.pageFailures.filter((failure) => !failure.expected)) {
  findings.push(
    `page: ${failure.phase} failed ${failure.name} (${failure.url}) — ${failure.message}`,
  )
}
for (const o of report.spineOverlap) {
  findings.push(
    `layout: <${o.tag} class="${o.cls}"> on ${o.page} paints under the spine ` +
      `(starts ${o.left}, spine ends ${o.spineRight}) — it needs display: flow-root`,
  )
}
for (const p of report.print) {
  const bad = Object.entries(p)
    .filter(([, v]) => v === false)
    .map(([key]) => key)
  if (bad.length) findings.push(`print: ${p.name} failed ${bad.join(', ')}`)
}

if (process.env.GITHUB_ACTIONS) {
  for (const finding of findings) console.log(`::error title=Browser verification::${finding}`)
}
if (process.env.GITHUB_STEP_SUMMARY) {
  fs.appendFileSync(
    process.env.GITHUB_STEP_SUMMARY,
    `## Browser verification\n\n` +
      `Mode: **${report.mode}** · templates: **${report.templateCount}** · ` +
      `pages visited: **${report.visitedPages}** · workers: **${report.workers}** · ` +
      `elapsed: **${report.elapsed}**\n\n` +
      (findings.length ? findings.map((f) => `- ✗ ${f}`).join('\n') : '✓ clean — no findings') +
      `\n\nFull data in the \`verification\` artifact (browser-verification.json).\n`,
  )
}

report.findings = findings
fs.writeFileSync(
  path.join(ROOT, 'docs', 'browser-verification.json'),
  JSON.stringify(report, null, 2),
)
writeHumanReport(report)

console.log(`\nFull data → docs/browser-verification.json`)
console.log(findings.length === 0 ? '\n✓ browser verification clean\n' : `\n✗ ${findings.length} finding(s):\n`)
for (const finding of findings) console.log(`  ✗ ${finding}`)
process.exit(findings.length === 0 ? 0 : 1)
