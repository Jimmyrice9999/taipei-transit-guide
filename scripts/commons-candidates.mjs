/*
 * Finds licence-clean Commons candidates for the station pages that have no
 * photograph, with pacing.
 *
 *   node scripts/commons-candidates.mjs [--limit=8]
 *
 * Run 6 got three station photographs and hit Commons' rate limits chasing the
 * rest. This does the search half of that job politely and prints a shortlist
 * per station: file title, licence, photographer and thumbnail URL. Nothing is
 * downloaded — `npm run image` is still the only thing that commits a file, and
 * it re-checks the licence at the door.
 *
 * The shortlist is a shortlist. Run 6's finding stands: filenames lie, and two
 * Commons categories contained wrong-subject files. Every candidate still has
 * to be looked at before it ships.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const API = 'https://commons.wikimedia.org/w/api.php'
const UA = 'TaipeiTransitGuide/1.0 (independent reference site; image sourcing)'

/** Same gate the fetch script applies. Listed here only to filter the noise. */
const ALLOWED = /^(cc0|public domain|pd|cc[ -]by(?:[ -]sa)?[ -]?\d(?:\.\d)?)/i

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function api(params) {
  const url = `${API}?${new URLSearchParams({ format: 'json', ...params })}`
  const response = await fetch(url, { headers: { 'User-Agent': UA } })
  if (response.status === 429) {
    // Politeness is the whole point of this script existing.
    await sleep(20_000)
    return api(params)
  }
  if (!response.ok) throw new Error(`${response.status} on ${params.action}`)
  return response.json()
}

// pathToFileURL, not a bare path: on Windows an absolute path starts "C:\",
// which the ESM loader reads as an unsupported URL scheme.
const { STATIONS } = await import(
  new URL('../lib/stations.ts', import.meta.url).href
)
const have = new Set(
  fs.existsSync(path.join(ROOT, 'public', 'images', 'stations'))
    ? fs
        .readdirSync(path.join(ROOT, 'public', 'images', 'stations'))
        .filter((f) => f.endsWith('.json'))
        .map((f) => f.replace('.json', '').toUpperCase())
    : [],
)

const limitArg = process.argv.find((a) => a.startsWith('--limit='))
const perStation = limitArg ? Number(limitArg.slice('--limit='.length)) : 6

/*
 * Two modes, because run 10 needed to go wide.
 *
 *   (no args)                 the original job — every Wenhu station page that
 *                             has no photograph
 *   --subjects <file>         an arbitrary list, one `label | search query`
 *                             per line, for lines, fleets, depots, the
 *                             gondola, YouBike, buses and ferries
 *
 * The station mode stays the default so the run-6 workflow is unchanged.
 */
const subjectsArg = process.argv.find((a) => a === '--subjects')
let bare
if (subjectsArg) {
  const file = process.argv[process.argv.indexOf('--subjects') + 1]
  bare = fs
    .readFileSync(path.resolve(ROOT, file), 'utf8')
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'))
    .map((l) => {
      const [code, query] = l.split('|').map((s) => s.trim())
      return { code, name: query, query }
    })
  console.error(`${bare.length} subject(s) to search.\n`)
} else {
  bare = STATIONS.filter((s) => s.line === 'BR' && !have.has(s.code.toUpperCase())).map((s) => ({
    code: s.code,
    name: s.name,
    query: `${s.name} Station Taipei`,
  }))
  console.error(`${bare.length} Wenhu station page(s) without a photograph.\n`)
}

for (const station of bare) {
  /*
   * Search rather than guess a category name. Commons files for these subjects
   * sit under several conventions — English name, Chinese name, "MRT" or
   * "Metro", with and without "Station" — and a guessed category that does not
   * exist returns nothing rather than an error, which reads as "no photographs
   * exist" and is a different claim entirely.
   */
  const query = station.query
  let results = []
  try {
    const search = await api({
      action: 'query',
      list: 'search',
      srsearch: `${query} filetype:bitmap`,
      srnamespace: '6',
      srlimit: String(perStation * 3),
    })
    results = search?.query?.search ?? []
  } catch (error) {
    console.error(`  ${station.code}: search failed — ${error.message}`)
    await sleep(2000)
    continue
  }

  if (results.length === 0) {
    console.log(`\n## ${station.code} ${station.name} — nothing found`)
    await sleep(1500)
    continue
  }

  const titles = results.map((r) => r.title).slice(0, perStation * 3)
  let pages = {}
  try {
    const info = await api({
      action: 'query',
      titles: titles.join('|'),
      prop: 'imageinfo',
      iiprop: 'extmetadata|url|size',
      iiurlwidth: '320',
    })
    pages = info?.query?.pages ?? {}
  } catch (error) {
    console.error(`  ${station.code}: imageinfo failed — ${error.message}`)
    await sleep(2000)
    continue
  }

  const clean = []
  for (const page of Object.values(pages)) {
    const ii = page?.imageinfo?.[0]
    if (!ii) continue
    const em = ii.extmetadata ?? {}
    const licence = String(em.LicenseShortName?.value ?? em.License?.value ?? '')
    if (!ALLOWED.test(licence)) continue
    clean.push({
      title: page.title,
      licence,
      author: String(em.Artist?.value ?? '')
        .replace(/<[^>]*>/g, '')
        .trim()
        .slice(0, 60),
      thumb: ii.thumburl,
      px: `${ii.width}×${ii.height}`,
    })
  }

  console.log(`\n## ${station.code} ${station.name} — ${clean.length} licence-clean of ${Object.keys(pages).length}`)
  for (const c of clean.slice(0, perStation)) {
    console.log(`  ${c.title}`)
    console.log(`    ${c.licence} · ${c.author || 'no author given'} · ${c.px}`)
    console.log(`    ${c.thumb}`)
  }

  // Commons asks for serial requests from unauthenticated clients; this is the
  // pacing run 6 did not have.
  await sleep(1800)
}
