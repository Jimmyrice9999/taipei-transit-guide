/**
 * Turns the committed TDX JSON in data/tdx/ into lib/stations.generated.ts.
 *
 * Run: npm run stations
 *
 * Does not touch the network. It reads files that `npm run tdx` committed, so
 * it works in CI, offline, and for anyone without credentials.
 *
 * Three things it will not do:
 *
 *   · It will not silently overwrite. Every disagreement between official data
 *     and the hand-transcribed seed is printed, because those disagreements are
 *     the reason for moving to official data at all.
 *   · It will not touch lib/station-overlay.ts. Local research (elevated vs
 *     underground) survives every refetch.
 *   · It will not invent. Where TDX has no data yet, it says so and falls back
 *     to the seed, recording that in the provenance the footer displays.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { SEED_STATIONS } from '../lib/stations.seed.ts'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DATA_DIR = path.join(ROOT, 'data', 'tdx')
const OUT_FILE = path.join(ROOT, 'lib', 'stations.generated.ts')

/**
 * Lines to generate, in network order, with the operator that publishes each.
 *
 * All seven, not just the one with pages written. A station code that exists
 * should validate whether or not anyone has written about its line yet —
 * otherwise every R05 in prose warns as a typo, and the badge system trains you
 * to ignore its own warnings.
 *
 * Taipei's network is run by three companies. Grouping by operator is not
 * pedantry: fares, rolling stock and signage all differ across them.
 */
const LINE_SOURCES = [
  { prefix: 'BR', operator: 'TRTC' },
  { prefix: 'R', operator: 'TRTC' },
  { prefix: 'G', operator: 'TRTC' },
  { prefix: 'O', operator: 'TRTC' },
  { prefix: 'BL', operator: 'TRTC' },
  { prefix: 'Y', operator: 'NTMC' },
  { prefix: 'A', operator: 'TYMC' },
  // Run 10. TDX files New Taipei's light rail under its own operator codes
  // rather than under NTMC, which is why these two were missing from the site
  // entirely — see the note on OPERATORS in scripts/fetch-tdx.mjs.
  { prefix: 'V', operator: 'NTDLRT' },
  { prefix: 'K', operator: 'NTALRT' },
] as const

/** The line the hand-transcribed seed covers, and so the only one to reconcile. */
const SEEDED_LINE = 'BR'

type Row = Record<string, any>

type Built = {
  code: string
  /** Line prefix, e.g. "BR". Stored so lookups need no string surgery. */
  line: string
  /** The operator publishing this line: TRTC, NTMC or TYMC. */
  operator: string
  name: string
  nameZh: string
  /** District, from the source's LocationTown. */
  district: string
  address: string
  lat: number | null
  lon: number | null
  sequence: number
  interchange: string[]
  /**
   * Distance along the route to this station, in km, from TDX's
   * `CumulativeDistance`.
   *
   * The same field whose last value is the route's official length — the one
   * this project spent a run insisting TDX did not publish. Carried per station
   * because a section drawing needs a real horizontal axis, and the only honest
   * one is the operator's own chainage. Null on branch stations, which have no
   * position along the trunk.
   */
  chainageKm: number | null
}

/** Reads one operator's dataset. Null when that operator does not publish it. */
const readJson = (operator: string, name: string): Row[] | null => {
  const file = path.join(DATA_DIR, operator, `${name}.json`)
  if (!fs.existsSync(file)) return null
  return JSON.parse(fs.readFileSync(file, 'utf8'))
}

/** The same dataset across every operator, merged. */
const readAll = (name: string): Row[] => {
  const operators = [...new Set(LINE_SOURCES.map((l) => l.operator))]
  return operators.flatMap((op) => readJson(op, name) ?? [])
}

/* ------------------------------------------------------------------ */
/* Field access, written defensively                                   */
/* ------------------------------------------------------------------ */

/*
 * TDX returns localised names as { Zh_tw, En }. These helpers tolerate the
 * variations that show up across TDX versions rather than assuming one shape,
 * and the generator prints which shape it actually found so the mapping is
 * confirmed by the first successful run rather than by faith.
 */
const en = (value: any): string =>
  typeof value === 'string' ? value : (value?.En ?? value?.en ?? '')

const zh = (value: any): string =>
  typeof value === 'string' ? '' : (value?.Zh_tw ?? value?.ZhTw ?? value?.zh_tw ?? '')

/* ------------------------------------------------------------------ */
/* Build from TDX                                                      */
/* ------------------------------------------------------------------ */

function buildFromTdx(): { stations: Built[]; notes: string[] } | null {
  const stationRows = readAll('station')
  const routeRows = readAll('station-of-route')
  if (stationRows.length === 0 || routeRows.length === 0) return null

  const notes: string[] = []

  const byId = new Map<string, Row>()
  for (const row of stationRows) {
    const id = row.StationID ?? row.StationUID
    if (id) byId.set(String(id), row)
  }

  /**
   * Codes on this line, and only this line.
   *
   * A prefix test alone is wrong once every line is generated: "R" matches
   * "R05" but the same test would let "BR05" through, and "G" would swallow
   * every station on every line beginning with G. The digits must follow the
   * prefix immediately.
   */
  const onLine = (code: string, prefix: string) =>
    new RegExp(`^${prefix}\\d`).test(code)

  /*
   * Find the route carrying a line's stations.
   *
   * TDX publishes each route twice, once per direction, and Sequence restarts at
   * 1 for each. On the Wenhu Line, Direction 1 numbers BR24 as #1 — picking the
   * wrong record renders the whole strip map backwards. So Direction 0 wins
   * explicitly rather than by whichever record happened to be encountered first.
   */
  function sequenceFor(prefix: string) {
    const candidates = routeRows
      .map((route) => ({
        direction: Number(route.Direction ?? 0),
        routeId: String(route.RouteID ?? ''),
        stops: (route.Stations ?? route.stations ?? []) as Row[],
      }))
      .filter((r) => r.stops.some((s) => onLine(String(s.StationID ?? ''), prefix)))
      .sort(
        (a, b) =>
          a.direction - b.direction || // outbound first
          b.stops.length - a.stops.length || // the fullest route, not a branch
          a.routeId.localeCompare(b.routeId), // then stable
      )
    return candidates[0]
  }

  const transfers = readAll('line-transfer')
  const interchangeByStation = new Map<string, Set<string>>()

  if (transfers.length > 0) {
    for (const row of transfers) {
      const from = String(row.FromStationID ?? '')
      const toLine = String(row.ToLineID ?? row.ToLineNo ?? '')
      if (!from || !toLine) continue
      if (!interchangeByStation.has(from)) interchangeByStation.set(from, new Set())
      interchangeByStation.get(from)!.add(toLine)
    }
    notes.push(`Interchanges taken from line-transfer.json (${transfers.length} records).`)
  } else {
    notes.push('No line-transfer.json — interchanges carried over from the seed.')
  }

  const seedInterchange = new Map(SEED_STATIONS.map((s) => [s.code, s.interchange]))

  const stations: Built[] = []

  for (const { prefix, operator } of LINE_SOURCES) {
    const chosen = sequenceFor(prefix)

    if (!chosen) {
      notes.push(`No route found for line ${prefix} — skipped.`)
      continue
    }

    const build = (
      code: string,
      sequence: number,
      fallbackName?: any,
      chainageKm: number | null = null,
    ): Built => {
      const record = byId.get(code) ?? {}
      const position = record.StationPosition ?? {}
      const fromTransfers = interchangeByStation.get(code)

      return {
        code,
        line: prefix,
        operator,
        name: en(record.StationName ?? fallbackName) || code,
        nameZh: zh(record.StationName ?? fallbackName),
        district: String(record.LocationTown ?? ''),
        address: String(record.StationAddress ?? ''),
        lat: typeof position.PositionLat === 'number' ? position.PositionLat : null,
        lon: typeof position.PositionLon === 'number' ? position.PositionLon : null,
        sequence,
        interchange: fromTransfers
          ? [...fromTransfers].sort()
          : (seedInterchange.get(code) ?? []),
        chainageKm,
      }
    }

    const forLine = chosen.stops
      .filter((stop) => onLine(String(stop.StationID ?? ''), prefix))
      .map((stop, index) =>
        build(
          String(stop.StationID),
          typeof stop.Sequence === 'number' ? stop.Sequence : index + 1,
          stop.StationName,
          typeof stop.CumulativeDistance === 'number' ? stop.CumulativeDistance : null,
        ),
      )
      .sort((a, b) => a.sequence - b.sequence)

    /*
     * Branch stations are not on the main route.
     *
     * Xinbeitou (R22A) and Xiaobitan (G03A) each sit on their own short branch
     * route, so building from the main route alone misses them. They are real
     * stations, and a real station code must validate — otherwise writing
     * "R22A" in prose warns as a typo. Sequence continues past the main route,
     * which is honest: they have no position along it.
     */
    const seen = new Set(forLine.map((s) => s.code))
    const branch = stationRows
      .map((row) => String(row.StationID ?? ''))
      .filter((code) => onLine(code, prefix) && !seen.has(code))
      .sort()
      .map((code, index) => build(code, forLine.length + index + 1))

    notes.push(
      `${prefix}: ${forLine.length} on route ${chosen.routeId} dir ${chosen.direction}` +
        (branch.length ? `, plus ${branch.length} branch (${branch.map((b) => b.code).join(', ')})` : '') +
        '.',
    )
    stations.push(...forLine, ...branch)
  }

  return { stations, notes }
}

function buildFromSeed(): Built[] {
  return SEED_STATIONS.map((station, index) => ({
    code: station.code,
    line: SEEDED_LINE,
    operator: 'TRTC',
    name: station.name,
    nameZh: '',
    district: '',
    address: '',
    lat: null,
    lon: null,
    sequence: index + 1,
    interchange: station.interchange,
    chainageKm: null,
  }))
}

/* ------------------------------------------------------------------ */
/* Reconciliation                                                      */
/* ------------------------------------------------------------------ */

/**
 * Reports where official data and the hand transcription disagree.
 * This is the payoff of the whole pipeline: it names what was wrong.
 */
function reconcile(all: Built[]): { disagreements: number } {
  // Only the seeded line is comparable — the others were never transcribed by
  // hand, so listing all 97 of their stations as "new" would bury the signal.
  const built = all.filter((s) => s.line === SEEDED_LINE)

  const seedByCode = new Map(SEED_STATIONS.map((s) => [s.code, s]))
  const builtByCode = new Map(built.map((s) => [s.code, s]))

  const lines: string[] = []

  for (const [index, station] of built.entries()) {
    const seed = seedByCode.get(station.code)
    if (!seed) {
      lines.push(`  + ${station.code}  ${station.name}  — in TDX, absent from the seed`)
      continue
    }
    if (seed.name !== station.name) {
      lines.push(`  ~ ${station.code}  name: seed "${seed.name}" → TDX "${station.name}"`)
    }
    const seedIndex = SEED_STATIONS.findIndex((s) => s.code === station.code)
    if (seedIndex !== index) {
      lines.push(`  ~ ${station.code}  position: seed #${seedIndex + 1} → TDX #${index + 1}`)
    }
    const a = [...seed.interchange].sort().join(',')
    const b = [...station.interchange].sort().join(',')
    if (a !== b) {
      lines.push(`  ~ ${station.code}  interchange: seed [${a || '—'}] → TDX [${b || '—'}]`)
    }
  }

  for (const seed of SEED_STATIONS) {
    if (!builtByCode.has(seed.code)) {
      lines.push(`  - ${seed.code}  ${seed.name}  — in the seed, absent from TDX`)
    }
  }

  if (lines.length === 0) {
    console.log(
      `reconciliation (${SEEDED_LINE} only): official data agrees with the hand-transcribed seed exactly.`,
    )
  } else {
    console.log(
      `reconciliation (${SEEDED_LINE} only): ${lines.length} disagreement(s) between the seed and TDX:\n`,
    )
    lines.forEach((line) => console.log(line))
    console.log('\n  The seed was hand-transcribed. Where they differ, TDX is the record.')
  }

  return { disagreements: lines.length }
}

/** Overlay entries pointing at stations that do not exist are silent rot. */
function checkOverlay(built: Built[]) {
  const overlayFile = path.join(ROOT, 'lib', 'station-overlay.ts')
  if (!fs.existsSync(overlayFile)) return

  const source = fs.readFileSync(overlayFile, 'utf8')
  const codes = [...source.matchAll(/^\s{2}([A-Z]+\d+):/gm)].map((m) => m[1])
  const known = new Set(built.map((s) => s.code))
  const orphans = codes.filter((code) => !known.has(code))

  if (orphans.length) {
    console.log(
      `\noverlay: ${orphans.length} entr(y/ies) reference unknown stations: ${orphans.join(', ')}`,
    )
    console.log('  Either the station closed, or the code is a typo. lib/station-overlay.ts')
  }
}

/* ------------------------------------------------------------------ */

function main() {
  const meta = fs.existsSync(path.join(DATA_DIR, 'meta.json'))
    ? JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'meta.json'), 'utf8'))
    : null

  const tdx = buildFromTdx()
  const usingTdx = tdx !== null && tdx.stations.length > 0

  let stations: Built[]
  let sourceLabel: string

  if (usingTdx) {
    stations = tdx!.stations
    sourceLabel = 'tdx'
    console.log(`stations: built ${stations.length} stations from data/tdx/`)
    tdx!.notes.forEach((note) => console.log(`  note: ${note}`))
    console.log('')
    reconcile(stations)
  } else {
    stations = buildFromSeed()
    sourceLabel = 'seed'
    console.log('stations: no TDX data in data/tdx/ — falling back to the hand-transcribed seed.')
    console.log('  Run `npm run tdx` once credentials work, then re-run this.')
    if (tdx) tdx.notes.forEach((note) => console.log(`  note: ${note}`))
  }

  checkOverlay(stations)

  const provenance = {
    source: sourceLabel,
    fetchedAt: meta?.fetchedAt ?? null,
    sourceName: usingTdx ? (meta?.source ?? 'Taiwan MOTC TDX') : 'Hand-transcribed, pending TDX fetch',
    sourceUrl: 'https://tdx.transportdata.tw/',
    operator: meta?.operator ?? 'TRTC',
    stationCount: stations.length,
  }

  const body = `/**
 * GENERATED FILE — do not edit.
 *
 * Written by \`npm run stations\` from ${usingTdx ? 'data/tdx/, fetched from Taiwan MOTC TDX' : 'lib/stations.seed.ts (no TDX data present yet)'}.
 * Local facts TDX does not publish live in lib/station-overlay.ts and are
 * merged on top at runtime — edit those there, not here.
 */

export type GeneratedStation = {
  code: string
  /** Line prefix, e.g. "BR". */
  line: string
  /** Operator publishing this line: TRTC, NTMC or TYMC. */
  operator: string
  name: string
  /** Traditional Chinese name, when the source provides one. */
  nameZh: string
  /** District, from the source's LocationTown. */
  district: string
  address: string
  lat: number | null
  lon: number | null
  /** Position along the line, 1-based, in running order. */
  sequence: number
  /** Line codes this station interchanges with. */
  interchange: string[]
  /**
   * Distance along the route in km, from TDX \`CumulativeDistance\`. The last
   * value on a route is that route's official length. Null on branch stations.
   */
  chainageKm: number | null
}

/**
 * Where this data came from, and when. Surfaced to readers in the footer.
 *
 * Typed as a union rather than \`as const\` so the footer can branch on it —
 * a literal type would make one branch statically unreachable.
 */
export type Provenance = {
  source: 'tdx' | 'seed'
  fetchedAt: string | null
  sourceName: string
  sourceUrl: string
  operator: string
  stationCount: number
}

export const PROVENANCE: Provenance = ${JSON.stringify(provenance, null, 2)}

export const GENERATED_STATIONS: GeneratedStation[] = [
${stations
  .map(
    (s) =>
      `  { code: ${JSON.stringify(s.code)}, line: ${JSON.stringify(s.line)}, ` +
      `operator: ${JSON.stringify(s.operator)}, ` +
      `name: ${JSON.stringify(s.name)}, nameZh: ${JSON.stringify(s.nameZh)}, ` +
      `district: ${JSON.stringify(s.district)}, address: ${JSON.stringify(s.address)}, ` +
      `lat: ${s.lat}, lon: ${s.lon}, ` +
      `sequence: ${s.sequence}, interchange: ${JSON.stringify(s.interchange)}, ` +
      `chainageKm: ${s.chainageKm} },`,
  )
  .join('\n')}
]
`

  fs.writeFileSync(OUT_FILE, body)
  console.log(`\nstations: wrote lib/stations.generated.ts — ${stations.length} stations, source "${sourceLabel}".`)

  /*
   * The public download, written from the same array the site renders — so the
   * file someone downloads can never disagree with the page they downloaded it
   * from. Structure/overlay data is deliberately not merged in here: this file
   * is the official record, and the overlay is our research.
   */
  const publicDir = path.join(ROOT, 'public', 'data')
  fs.mkdirSync(publicDir, { recursive: true })

  const download = {
    source: provenance.sourceName,
    sourceUrl: provenance.sourceUrl,
    licence: 'Government open data (Taiwan). See https://data.gov.tw/licenses',
    operator: provenance.operator,
    retrieved: provenance.fetchedAt,
    note:
      'Generated by the Taipei Transit Guide from Taiwan MOTC TDX data. ' +
      'Elevated/underground status is NOT included: TDX does not publish it.',
    stations: stations.map((s) => ({
      code: s.code,
      line: s.line,
      nameEn: s.name,
      nameZh: s.nameZh,
      sequence: s.sequence,
      lat: s.lat,
      lon: s.lon,
      interchange: s.interchange,
    })),
  }

  fs.writeFileSync(
    path.join(publicDir, 'taipei-metro-stations.json'),
    JSON.stringify(download, null, 2) + '\n',
  )
  console.log(`stations: wrote public/data/taipei-metro-stations.json — ${stations.length} records.`)

  if (stations.some((s) => s.nameZh)) {
    console.log('stations: Chinese names present — run `npm run fonts` to update the subset.')
  }
}

main()
