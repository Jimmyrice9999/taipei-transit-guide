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
import { availableParallelism, freemem, totalmem } from 'node:os'
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
const MEMORY_GIB = 1024 ** 3
const CPU_WORKERS = Math.max(1, Math.min(4, availableParallelism() - 1))
const AVAILABLE_MEMORY_GIB = freemem() / MEMORY_GIB
/* Reserve room for the OS, the static server, and unrelated desktop work.
 * Browser contexts have large transient peaks during screenshots and print,
 * so the default budgets 4 GiB per worker after retaining a 4 GiB reserve.
 * This is a ceiling, not a target: an explicit --workers value is still useful
 * for a controlled probe, while the default must back off on a memory-bound
 * host. */
const MEMORY_RESERVE_GIB = 4
const MEMORY_PER_WORKER_GIB = 4
const MEMORY_WORKERS = Math.max(
  1,
  Math.min(4, Math.floor((AVAILABLE_MEMORY_GIB - MEMORY_RESERVE_GIB) / MEMORY_PER_WORKER_GIB)),
)
const DEFAULT_WORKERS = Math.min(CPU_WORKERS, MEMORY_WORKERS)
const WORKERS = positiveInteger(optionValue('--workers') ?? process.env.BROWSER_VERIFY_WORKERS, DEFAULT_WORKERS)
const CHUNK_SIZE = positiveInteger(
  optionValue('--chunk-size') ?? process.env.BROWSER_VERIFY_CHUNK_SIZE,
  25,
)
const PAGE_TIMEOUT_MS = positiveInteger(
  optionValue('--timeout') ?? process.env.BROWSER_VERIFY_TIMEOUT,
  30_000,
)
/* Screenshot compositing is much more sensitive to runner contention than
 * navigation or DOM probes. Keep the local default short enough to expose a
 * slow capture, but let CI buy a larger budget without weakening any check. */
const SCREENSHOT_TIMEOUT_MS = positiveInteger(
  optionValue('--screenshot-timeout') ?? process.env.BROWSER_VERIFY_SCREENSHOT_TIMEOUT,
  30_000,
)
const SCREENSHOT_SET = optionValue('--screenshot-set') ?? process.env.BROWSER_VERIFY_SCREENSHOT_SET ?? 'full'
const FULL_SWEEP = hasFlag('--full') || process.env.BROWSER_VERIFY_FULL === '1'
const PROBE_URL = optionValue('--probe-url') ?? process.env.BROWSER_VERIFY_PROBE_URL
const PROBE_ONLY = hasFlag('--probe-only')

/* The device matrix is deliberately explicit: a single "mobile" width hid
 * the 414px and landscape failures in earlier runs, while the two zoom cases
 * exercise the same CSS pixel widths under the site's documented reflow
 * equivalents. */
const DEVICE_VIEWPORTS = [
  { width: 320, height: 900, label: 'phone-320' },
  { width: 375, height: 900, label: 'phone-375' },
  { width: 390, height: 900, label: 'phone-390' },
  { width: 414, height: 900, label: 'phone-414' },
  { width: 428, height: 900, label: 'phone-428' },
  { width: 667, height: 375, label: 'landscape-667x375' },
  { width: 844, height: 390, label: 'landscape-844x390' },
  { width: 932, height: 430, label: 'landscape-932x430' },
  { width: 768, height: 900, label: 'tablet-768' },
  { width: 834, height: 900, label: 'tablet-834' },
  { width: 1024, height: 900, label: 'tablet-1024' },
  { width: 1280, height: 900, label: 'desktop-1280' },
  { width: 1440, height: 900, label: 'desktop-1440' },
  { width: 1920, height: 900, label: 'desktop-1920' },
  { width: 2560, height: 900, label: 'desktop-2560' },
  { width: 320, height: 900, label: 'zoom-400' },
  { width: 640, height: 900, label: 'zoom-200' },
]

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
    try {
      // Not new URL(): a request for "//" parses as protocol-relative and
      // throws. Split off the query by hand; a static server needs no more.
      let urlPath = decodeURIComponent(req.url.split('?')[0].replace(/\/{2,}/g, '/'))
      let file = path.join(OUT, urlPath)

      if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
        file = path.join(file, 'index.html')
      }
      if (!fs.existsSync(file)) {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
        // out/404.html is postbuild's GitHub-Pages-facing copy of Next's own
        // `_not-found/index.html` (see scripts/postbuild.mjs) — read whichever
        // actually exists rather than crashing the whole sweep on a missing
        // file, since a 404 during crawling is themselves a signal worth a
        // clean report, not a hard process exit.
        const notFound = fs.existsSync(path.join(OUT, '404.html'))
          ? path.join(OUT, '404.html')
          : path.join(OUT, '_not-found', 'index.html')
        res.end(fs.existsSync(notFound) ? fs.readFileSync(notFound) : 'Not found')
        return
      }
      const ext = path.extname(file)
      res.writeHead(200, {
        'Content-Type': MIME[ext] ?? 'application/octet-stream',
      })
      res.end(fs.readFileSync(file))
    } catch (err) {
      // Any of the fs calls above race against nothing under normal
      // operation, but a many-hundred-page sweep runs long enough that a
      // transient OS-level hiccup (this has been observed as an ENOENT on a
      // file that `existsSync` had just confirmed present, on Windows) must
      // not take down the whole run — the same reasoning as the 404 branch
      // above, generalised to "any request handler error is a signal to
      // report for that one request, not a reason to crash the process."
      console.warn(`  ! request handler error for ${req.url}: ${err.message}`)
      if (!res.headersSent) res.writeHead(500, { 'Content-Type': 'text/plain' })
      res.end('Internal error')
    }
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
  /* Run 306, Part 6/7: air, road and statistics are new top-level sections.
     The auto-inventory below already assigns them their own template keys
     (confirmed: `type-index:air:...`, `nested-index:air-airports:...` etc. all
     appeared in a real sweep without any change here), so these are named
     entries for readable screenshot/print filenames, not new coverage. */
  { name: 'section-air', url: '/air/' },
  { name: 'air-airports-index', url: '/air/airports/' },
  { name: 'air-airport-kaohsiung', url: '/air/airports/kaohsiung/' },
  { name: 'air-operators-index', url: '/air/operators/' },
  { name: 'section-road', url: '/road/' },
  { name: 'road-taxi-and-ride-hailing', url: '/road/regulation/taxi-and-ride-hailing/' },
  { name: 'road-national-freeways', url: '/road/network/national-freeways/' },
  { name: 'section-statistics', url: '/statistics/' },
  { name: 'statistics-modal-share', url: '/statistics/national/modal-share/' },
  /* Runs 307–308: these are named separately so the interactive map, the
     confirmed near-station joins, the opening timeline, comparison tables and
     reader-facing changelog cannot disappear behind an older generic entry. */
  { name: 'interactive-network-map', url: '/rail/network/' },
  { name: 'station-near-this-station', url: '/rail/metro/stations/br13/' },
  { name: 'network-opening-timeline', url: '/data/network-growth/' },
  { name: 'comparison-tables', url: '/data/comparisons/' },
  { name: 'reader-changelog', url: '/data/changelog/' },
  { name: '404', url: '/no/such/page/' },
]

/* The app has one explicit, static URL space per locale. Keep the readable
 * seed list above logical so the two locale inventories cannot drift apart. */
const PAGE_TYPE_SEEDS = PAGE_TYPES
const PAGE_TYPES_LOCALIZED = PAGE_TYPE_SEEDS.flatMap((candidate) => [
  { ...candidate, name: `${candidate.name}-en`, url: `/en${candidate.url}` },
  { ...candidate, name: `${candidate.name}-zh-Hant`, url: `/zh-Hant${candidate.url}` },
])

/* Every later phase consumes the localized list. The exported audit JSON thus
 * names the exact URL that was rendered, while the seed list remains the
 * human-maintained record of page types added by each run. */
PAGE_TYPES.length = 0
PAGE_TYPES.push(...PAGE_TYPES_LOCALIZED)

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

function logicalUrl(url) {
  const parts = url.split('/').filter(Boolean)
  if (parts[0] === 'en' || parts[0] === 'zh-Hant') {
    const remainder = parts.slice(1)
    return remainder.length ? `/${remainder.join('/')}/` : '/'
  }
  return url || '/'
}

function templateKey(url, classes) {
  const contentUrl = logicalUrl(url)
  if (contentUrl === '/') return 'home'
  if (contentUrl === '/no/such/page/') return 'not-found'
  if (contentUrl === '/about/') return 'about'

  const parts = contentUrl.split('/').filter(Boolean)
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
    [...document.querySelectorAll('a[href], button, input, select, textarea, summary, [tabindex]')].filter(
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

async function localeProbe(page) {
  return page.evaluate(() => {
    const lang = document.documentElement.lang
    const expectedTarget = lang === 'zh-Hant' ? '/en/' : '/zh-Hant/'
    const toggles = [...document.querySelectorAll('.language-toggle a')]
    return {
      lang,
      toggleCount: toggles.length,
      toggleHrefs: toggles.map((link) => link.getAttribute('href')),
      accessibleNames: toggles.map((link) => link.getAttribute('aria-label')),
      targetPrefix: expectedTarget,
      hasHeaderToggle: Boolean(document.querySelector('.language-toggle-header a')),
      hasRailToggle: Boolean(document.querySelector('.language-toggle-rail a')),
    }
  })
}

async function navigationProbe(page, base, sourceUrl) {
  await page.goto(`${base}${sourceUrl}`, { waitUntil: 'load', timeout: PAGE_TIMEOUT_MS })
  const links = await page.locator('header a[href], .side-nav-rail a[href]').evaluateAll((elements) => {
    const seen = new Set()
    return elements.flatMap((element) => {
      const href = element.getAttribute('href')
      if (!href || seen.has(href)) return []
      seen.add(href)
      return [{
        href,
        label: (element.getAttribute('aria-label') || element.textContent || '').trim(),
      }]
    })
  })

  const results = []
  for (const link of links) {
    const target = new URL(link.href, `${base}${sourceUrl}`)
    if (target.origin !== new URL(base).origin || !target.pathname.startsWith('/')) continue

    const expectedLang = target.pathname.startsWith('/zh-Hant/') ? 'zh-Hant' : 'en'
    let status = 0
    let lang = ''
    let h1 = ''
    let error = ''
    try {
      const response = await page.goto(target.href, { waitUntil: 'load', timeout: PAGE_TIMEOUT_MS })
      status = response?.status() ?? 0
      ;({ lang, h1 } = await page.evaluate(() => ({
        lang: document.documentElement.lang,
        h1: document.querySelector('h1')?.textContent?.trim() || '',
      })))
    } catch (caught) {
      error = errorSummary(caught)
    }

    results.push({
      sourceUrl,
      label: link.label,
      href: link.href,
      status,
      lang,
      h1,
      error,
      ok: status === 200 && lang === expectedLang && Boolean(h1),
    })
  }
  return results
}

/* `load` fires before React hydration has finished. On entity pages, hydration
 * replaces the server-rendered article subtree, including its image nodes.
 * A locator created before that commit can therefore resolve to a node that
 * is detached by the time the next action runs. Match stampFocusable's
 * measured settle window, then acquire locators only at the action site. */
async function waitForHydration(page) {
  await page.waitForLoadState('networkidle', { timeout: PAGE_TIMEOUT_MS }).catch(() => {})
  await page.waitForTimeout(250)
}

async function imageProbe(page) {
  await waitForHydration(page)
  const imageCount = await page.locator('main img').count()
  for (let index = 0; index < imageCount; index += 1) {
    const image = page.locator('main img').nth(index)
    await image.waitFor({ state: 'attached' })
    await image.scrollIntoViewIfNeeded()
    await image.evaluate((element) => {
      if (element.complete) return
      return new Promise((resolve) => {
        const finish = () => resolve()
        element.addEventListener('load', finish, { once: true })
        element.addEventListener('error', finish, { once: true })
        setTimeout(finish, 5_000)
      })
    })
  }
  return page.evaluate(() => {
    const wordmark = document.querySelector('.wordmark')
    const photos = [...document.querySelectorAll('main img')]
    return {
      wordmark: wordmark instanceof HTMLImageElement
        ? {
            complete: wordmark.complete,
            naturalWidth: wordmark.naturalWidth,
            alt: wordmark.alt,
            visible: wordmark.getBoundingClientRect().width > 0,
          }
        : null,
      photos: photos.map((image) => ({
        complete: image.complete,
        naturalWidth: image.naturalWidth,
        src: image.currentSrc || image.src,
        hasSrcSet: Boolean(image.getAttribute('srcset')),
        visible: image.getBoundingClientRect().width > 0,
      })),
      captions: document.querySelectorAll('figcaption').length,
      attributions: document.querySelectorAll('.photo-attribution, .figure-attribution').length,
    }
  })
}

async function interactiveMapProbe(page) {
  await waitForHydration(page)
  await page.waitForFunction(
    () => Boolean(document.querySelector('.routemap-interactive.is-enhanced')),
    { timeout: PAGE_TIMEOUT_MS },
  )
  await page.waitForTimeout(50)
  const getMap = () => page.locator('.routemap-interactive.is-enhanced').first()
  if ((await getMap().count()) === 0) return null

  await getMap().waitFor({ state: 'attached' })
  await getMap().scrollIntoViewIfNeeded()
  await getMap().waitFor({ state: 'visible' })
  await getMap().hover()
  const before = await page.locator('.routemap-viewport').first().getAttribute('style')
  await page.mouse.wheel(0, -160)
  await page.waitForTimeout(100)
  const afterZoom = await page.locator('.routemap-viewport').first().getAttribute('style')

  const box = await getMap().boundingBox()
  if (box) {
    const x = box.x + box.width / 2
    const y = box.y + box.height / 2
    await page.mouse.move(x, y)
    await page.mouse.down()
    await page.mouse.move(x + 24, y + 18)
    await page.mouse.up()
  }
  await page.waitForTimeout(100)
  const afterPan = await page.locator('.routemap-viewport').first().getAttribute('style')

  return page.evaluate(({ before, afterZoom, afterPan }) => ({
    enhanced: Boolean(document.querySelector('.routemap-interactive.is-enhanced')),
    hasControls: Boolean(document.querySelector('.routemap-controls')),
    hasStaticSvg: Boolean(document.querySelector('.routemap-svg')),
    stationCount: document.querySelectorAll('a.routemap-station[href]').length,
    allStationsKeyboardReachable: [...document.querySelectorAll('a.routemap-station[href]')].every(
      (station) => station.getAttribute('tabindex') !== null,
    ),
    zoomChanged: before !== afterZoom,
    panChanged: afterZoom !== afterPan,
    documentOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
  }), { before, afterZoom, afterPan })
}

async function reducedMotionProbe(page) {
  return page.evaluate(() => {
    const animated = []
    for (const element of document.querySelectorAll('body *')) {
      const style = getComputedStyle(element)
      if (style.transitionDuration !== '0s' || style.animationDuration !== '0s') {
        animated.push({
          tag: element.tagName.toLowerCase(),
          className: String(element.className).slice(0, 80),
          transition: style.transitionDuration,
          animation: style.animationDuration,
        })
      }
      if (animated.length >= 5) break
    }
    return { media: matchMedia('(prefers-reduced-motion: reduce)').matches, animated }
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

function recordMemory(report, label) {
  const processMemory = process.memoryUsage()
  const availableBytes = freemem()
  const sample = {
    label,
    at: new Date().toISOString(),
    rssBytes: processMemory.rss,
    heapUsedBytes: processMemory.heapUsed,
    externalBytes: processMemory.external,
    arrayBuffersBytes: processMemory.arrayBuffers,
    availableBytes,
    totalBytes: totalmem(),
  }
  const memory = report.memory
  memory.peakRssBytes = Math.max(memory.peakRssBytes, sample.rssBytes)
  memory.peakHeapUsedBytes = Math.max(memory.peakHeapUsedBytes, sample.heapUsedBytes)
  memory.minimumAvailableBytes = Math.min(memory.minimumAvailableBytes, sample.availableBytes)
  memory.samples.push(sample)
}

async function relaunchBrowser() {
  await browser.close()
  browser = await chromium.launch()
}

async function runConcurrent({ browser: _browser, items, phase, contextOptions, initScript, task, report, progress }) {
  startProgress(report, progress, phase, items.length)
  const phaseReport = report.progress.at(-1)
  if (items.length === 0) {
    phaseReport.done = 0
    phaseReport.elapsed = duration(progress.started)
    return
  }

  for (let chunkStart = 0; chunkStart < items.length; chunkStart += CHUNK_SIZE) {
    if (chunkStart > 0) {
      await relaunchBrowser()
      await new Promise((resolve) => setImmediate(resolve))
    }
    const chunk = items.slice(chunkStart, chunkStart + CHUNK_SIZE)
    let cursor = 0
    const workerCount = Math.min(WORKERS, chunk.length)
    const worker = async (workerNumber) => {
      const context = await browser.newContext(contextOptions)
      let page
      try {
        if (initScript) await context.addInitScript(initScript)
        page = await context.newPage()
        page.setDefaultTimeout(PAGE_TIMEOUT_MS)
        page.setDefaultNavigationTimeout(PAGE_TIMEOUT_MS)
        while (true) {
          const index = cursor++
          if (index >= chunk.length) break
          const item = chunk[index]
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
        await page?.close().catch((error) => {
          console.log(`  ✗ ${phase} worker ${workerNumber + 1} failed to close its page: ${errorSummary(error)}`)
        })
        await context.close().catch((error) => {
          console.log(`  ✗ ${phase} worker ${workerNumber + 1} failed to close: ${errorSummary(error)}`)
        })
      }
    }

    await Promise.all(Array.from({ length: workerCount }, (_, i) => worker(i)))
    recordMemory(report, `${phase}: chunk ${Math.floor(chunkStart / CHUNK_SIZE) + 1}`)
  }
  logProgress(progress, true)
  phaseReport.done = progress.done
  phaseReport.elapsed = duration(progress.started)
  // Do not carry browser caches or renderer processes into the next phase.
  await relaunchBrowser()
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
    ? `Reflow and axe cover all ${report.corpusPages} real pages. Keyboard and ARIA cover the ${report.templatePages} selected template/extreme pages; screenshots and print cover the ${report.visualPages} ${report.screenshotSet} visual pages.`
    : report.screenshotSet === 'smoke'
      ? `Reflow, axe, keyboard and ARIA cover the ${report.templatePages} selected template/extreme pages. Screenshots and print cover the ${report.visualPages}-page push smoke set; the scheduled/manual full sweep covers the complete visual matrix.`
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
    `- Browser chunk size: **${report.chunkSize} pages**; default worker selection saw **${report.memory.availableAtStartGiB.toFixed(2)} GiB** free, reserved **${MEMORY_RESERVE_GIB} GiB**, and budgeted **${MEMORY_PER_WORKER_GIB} GiB** per worker.`,
    `- Peak process RSS: **${(report.memory.peakRssBytes / MEMORY_GIB).toFixed(2)} GiB**; minimum observed free system memory: **${(report.memory.minimumAvailableBytes / MEMORY_GIB).toFixed(2)} GiB**`,
    `- Per-page timeout: **${report.pageTimeoutMs} ms**`,
    `- Screenshot timeout: **${report.screenshotTimeoutMs} ms**; screenshot set: **${report.screenshotSet}**`,
    `- Device matrix: **${report.deviceViewports.map((v) => `${v.width}×${v.height} (${v.label})`).join(', ')}**`,
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
  deviceViewports: DEVICE_VIEWPORTS,
  workers: WORKERS,
  chunkSize: CHUNK_SIZE,
  memory: {
    availableAtStartGiB: AVAILABLE_MEMORY_GIB,
    totalAtStartGiB: totalmem() / MEMORY_GIB,
    cpuWorkers: CPU_WORKERS,
    memoryWorkers: MEMORY_WORKERS,
    peakRssBytes: 0,
    peakHeapUsedBytes: 0,
    minimumAvailableBytes: Number.POSITIVE_INFINITY,
    samples: [],
  },
  pageTimeoutMs: PAGE_TIMEOUT_MS,
  screenshotTimeoutMs: SCREENSHOT_TIMEOUT_MS,
  screenshotSet: SCREENSHOT_SET,
  reflow: [],
  keyboard: {},
  aria: {},
  axe: {},
  axeNames: {},
  axeSummary: { critical: 0, serious: 0, moderate: 0, minor: 0 },
  print: [],
  spineOverlap: [],
  locale: {},
  navigation: [],
  images: {},
  maps: {},
  noJsFallback: [],
  reducedMotion: {},
  pageFailures: [],
  clippedScreenshots: [],
  progress: [],
}

const log = (msg) => console.log(msg)
const runStarted = Date.now()
const progress = { started: runStarted, phase: '', done: 0, total: 0, lastLogged: 0 }
recordMemory(report, 'start')
const progressTimer = setInterval(() => logProgress(progress, true), 30_000)
const memoryTimer = setInterval(() => recordMemory(report, 'interval'), 10_000)

const corpus = allPages()
const inventory = selectTemplatePages(corpus)
const templatePages = inventory.pages
const canonicalPages = templatePages.filter((page) => page.roles.includes('canonical'))
const SCREENSHOT_SMOKE_PAGES = [
  { name: 'home-en', url: '/en/' },
  { name: 'interactive-network-map-en', url: '/en/rail/network/' },
  { name: 'data-sources-en', url: '/en/data/sources/' },
  { name: 'krtc-facilities-accessibility-en', url: '/en/rail/krtc/facilities/accessibility/' },
  { name: 'krtc-line-en', url: '/en/rail/krtc/lines/red-line/' },
  { name: 'krtc-station-formosa-boulevard-en', url: '/en/rail/krtc/stations/formosa-boulevard-r10/' },
  { name: 'rail-system-metro-en', url: '/en/rail/metro/' },
]
if (!['full', 'smoke'].includes(SCREENSHOT_SET)) {
  throw new Error(`BROWSER_VERIFY_SCREENSHOT_SET must be full or smoke, got ${SCREENSHOT_SET}`)
}
const visualPages = SCREENSHOT_SET === 'smoke'
  ? SCREENSHOT_SMOKE_PAGES
  : FULL_SWEEP
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
    `timeout=${PAGE_TIMEOUT_MS}ms; screenshotTimeout=${SCREENSHOT_TIMEOUT_MS}ms; ` +
    `screenshotSet=${SCREENSHOT_SET}`,
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
    clearInterval(memoryTimer)
    recordMemory(report, 'end')
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
    for (const { width, height } of DEVICE_VIEWPORTS) {
      await page.setViewportSize({ width, height })
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

/* ---- 3b. locale, images and interactive map ------------------------- */

log('\n═══ 3b. Locale, image and interactive-map behavior ═══\n')

await runConcurrent({
  browser,
  items: templatePages,
  phase: 'Locale and image behavior',
  contextOptions: { viewport: { width: 375, height: 900 } },
  task: async (page, item) => {
    if (!(await gotoPage(page, item, base, report, 'Locale and image behavior'))) return
    const locale = await localeProbe(page)
    const images = await imageProbe(page)
    report.locale[item.url] = locale
    report.images[item.url] = images
    const expectedLang = item.url.startsWith('/zh-Hant/') ? 'zh-Hant' : 'en'
    const localeBad =
      locale.lang !== expectedLang ||
      locale.toggleCount !== 2 ||
      locale.accessibleNames.some((name) => !name) ||
      locale.toggleHrefs.some((href) => !href?.startsWith(locale.targetPrefix))
    const imageBad =
      !images.wordmark?.complete ||
      !images.wordmark?.naturalWidth ||
      !images.wordmark?.visible ||
      images.photos.some((image) => !image.complete || !image.naturalWidth || !image.visible)
    if (localeBad) log(`  ✗ ${item.name}: locale toggle or document language is wrong`)
    if (imageBad) log(`  ✗ ${item.name}: a wordmark or photo did not paint as a loaded image`)
  },
  report,
  progress,
})

const mapItems = [...new Map(
  PAGE_TYPES
    .filter((item) => item.url.includes('/rail/network/'))
    .map((item) => [item.url, item]),
).values()]

await runConcurrent({
  browser,
  items: mapItems,
  phase: 'Interactive map behavior',
  contextOptions: { viewport: { width: 390, height: 900 } },
  task: async (page, item) => {
    if (!(await gotoPage(page, item, base, report, 'Interactive map behavior'))) return
    const result = await interactiveMapProbe(page)
    if (!result) {
      report.maps[item.url] = { missing: true }
      log(`  ✗ ${item.name}: interactive map is missing`)
      return
    }
    report.maps[item.url] = result
    const bad =
      !result.enhanced ||
      !result.hasControls ||
      !result.hasStaticSvg ||
      result.stationCount === 0 ||
      !result.allStationsKeyboardReachable ||
      !result.zoomChanged ||
      !result.panChanged ||
      result.documentOverflow > 1
    log(`  ${bad ? '✗' : '✓'} ${item.name}: ${result.stationCount} linked stations; zoom=${result.zoomChanged}; pan=${result.panChanged}`)
  },
  report,
  progress,
})

log('\nâ•â•â• 3c. Header and side-rail navigation â•â•â•\n')

{
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  try {
    const page = await context.newPage()
    page.setDefaultTimeout(PAGE_TIMEOUT_MS)
    page.setDefaultNavigationTimeout(PAGE_TIMEOUT_MS)
    for (const sourceUrl of ['/en/', '/zh-Hant/']) {
      try {
        const results = await navigationProbe(page, base, sourceUrl)
        report.navigation.push(...results)
        const bad = results.filter((result) => !result.ok)
        log(`  ${bad.length ? 'âœ—' : 'âœ“'} ${sourceUrl}: ${results.length} internal navigation links checked`)
      } catch (error) {
        recordPageFailure(report, { name: `navigation-${sourceUrl}`, url: sourceUrl }, 'Navigation probe', error)
      }
    }
  } finally {
    await context.close()
  }
}

await runConcurrent({
  browser,
  items: mapItems,
  phase: 'No-JavaScript map fallback',
  contextOptions: { viewport: { width: 390, height: 900 }, javaScriptEnabled: false },
  task: async (page, item) => {
    for (const { width, height } of [{ width: 320, height: 900 }, { width: 1440, height: 900 }]) {
      await page.setViewportSize({ width, height })
      if (!(await gotoPage(page, item, base, report, 'No-JavaScript map fallback'))) return
      const result = await page.evaluate(() => ({
        staticSvg: Boolean(document.querySelector('.routemap-svg')),
        stationCount: document.querySelectorAll('a.routemap-station[href]').length,
        controlsHidden: !document.querySelector('.routemap-controls'),
      }))
      report.noJsFallback.push({ ...result, name: item.name, url: item.url, width })
      const bad = !result.staticSvg || result.stationCount === 0 || !result.controlsHidden
      log(`  ${bad ? '✗' : '✓'} ${item.name} at ${width}px: static SVG=${result.staticSvg}; stations=${result.stationCount}`)
    }
  },
  report,
  progress,
})

await runConcurrent({
  browser,
  items: templatePages,
  phase: 'Reduced-motion behavior',
  contextOptions: { viewport: { width: 390, height: 900 }, reducedMotion: 'reduce' },
  task: async (page, item) => {
    if (!(await gotoPage(page, item, base, report, 'Reduced-motion behavior'))) return
    const result = await reducedMotionProbe(page)
    report.reducedMotion[item.url] = result
    if (!result.media || result.animated.length) {
      log(`  ✗ ${item.name}: reduced motion left ${result.animated.length} animated element(s)`)
    }
  },
  report,
  progress,
})

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
  const fullHeight = await page.evaluate(() => document.documentElement.scrollHeight)
  if (fullHeight > MAX_SCREENSHOT_HEIGHT) {
    const clipHeight = MAX_SCREENSHOT_HEIGHT
    const viewportWidth = page.viewportSize()?.width ?? 1280
    await page.screenshot({
      path: filePath,
      clip: { x: 0, y: 0, width: viewportWidth, height: clipHeight },
      timeout: SCREENSHOT_TIMEOUT_MS,
    })
    return { clipped: true, fullHeight, clipHeight }
  }

  try {
    await page.screenshot({ path: filePath, fullPage: true, timeout: SCREENSHOT_TIMEOUT_MS })
    return { clipped: false }
  } catch (error) {
    if (!/unable to capture screenshot/i.test(String(error?.message ?? error))) throw error
    const clipHeight = Math.min(fullHeight, MAX_SCREENSHOT_HEIGHT)
    const viewportWidth = page.viewportSize()?.width ?? 1280
    try {
      await page.screenshot({
        path: filePath,
        clip: { x: 0, y: 0, width: viewportWidth, height: clipHeight },
        timeout: SCREENSHOT_TIMEOUT_MS,
      })
      return { clipped: true, fullHeight, clipHeight }
    } catch (retryError) {
      return { clipped: true, fullHeight, clipHeight, failed: true, message: errorSummary(retryError) }
    }
  }
}

{
  const widths = DEVICE_VIEWPORTS

  await runConcurrent({
    browser,
    items: visualPages,
    phase: 'Screenshots',
    contextOptions: {},
    task: async (page, item) => {
      for (const { width, height, label } of widths) {
        await page.setViewportSize({ width, height })
        if (!(await gotoPage(page, item, base, report, 'Screenshots'))) break
        const name = `${item.name}-${label}.png`
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
clearInterval(memoryTimer)
recordMemory(report, 'end')
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
for (const [url, probe] of Object.entries(report.locale)) {
  const expectedLang = url.startsWith('/zh-Hant/') ? 'zh-Hant' : 'en'
  if (
    probe.lang !== expectedLang ||
    probe.toggleCount !== 2 ||
    probe.accessibleNames.some((name) => !name) ||
    probe.toggleHrefs.some((href) => !href?.startsWith(probe.targetPrefix)) ||
    !probe.hasHeaderToggle ||
    !probe.hasRailToggle
  ) {
    findings.push(`locale: toggle/document language failed on ${url}`)
  }
}
for (const result of report.navigation) {
  if (!result.ok) {
    findings.push(
      `navigation: ${result.sourceUrl} â†’ ${result.href} (${result.label || 'unnamed link'}) ` +
        `returned ${result.status}, lang=${result.lang || '(none)'}, h1=${result.h1 || '(none)'}`,
    )
  }
}
for (const [url, probe] of Object.entries(report.images)) {
  if (
    !probe.wordmark?.complete ||
    !probe.wordmark?.naturalWidth ||
    !probe.wordmark?.visible ||
    probe.photos.some((image) => !image.complete || !image.naturalWidth || !image.visible)
  ) {
    findings.push(`image: wordmark or photo did not paint on ${url}`)
  }
}
for (const [url, probe] of Object.entries(report.maps)) {
  if (
    probe.missing ||
    !probe.enhanced ||
    !probe.hasControls ||
    !probe.hasStaticSvg ||
    probe.stationCount === 0 ||
    !probe.allStationsKeyboardReachable ||
    !probe.zoomChanged ||
    !probe.panChanged ||
    probe.documentOverflow > 1
  ) {
    findings.push(`map: interaction/focus/overflow probe failed on ${url}`)
  }
}
for (const probe of report.noJsFallback) {
  if (!probe.staticSvg || probe.stationCount === 0 || !probe.controlsHidden) {
    findings.push(`map: no-JavaScript fallback failed on ${probe.url} at ${probe.width}px`)
  }
}
for (const [url, probe] of Object.entries(report.reducedMotion)) {
  if (!probe.media || probe.animated.length) {
    findings.push(`motion: reduced-motion probe found animation/transition on ${url}`)
  }
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
