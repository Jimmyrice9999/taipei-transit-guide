/**
 * Network-level facts assembled from the committed TDX data.
 *
 * Everything here is derived at build time from data/tdx/. Nothing is
 * hand-maintained, so a refetch updates the network page automatically.
 */

import { TDX_ROUTES, TDX_TRANSFERS } from './tdx.ts'
import {
  getLineGeometry,
  measureLine,
  partitionBranch,
  type Partition,
  type Point,
} from './geometry.ts'
import { lineKey, LINES, type Line } from './lines.ts'
import { getBranchRoutes, getTrunkRoute } from './routes.ts'
import { STATIONS, getStation, type Station } from './stations.ts'

type RouteRow = {
  operator: string
  LineID: string
  RouteID: string
  Direction: number
  TravelTime: number
  RouteLength: number
  StartStationID: string
  EndStationID: string
}

type TransferRow = {
  FromStationID: string
  ToStationID: string
}

/** All three operators merged — an interchange can span operators. */
const routes = [
  ...TDX_ROUTES<RouteRow>(),
]

const transfers = [
  ...TDX_TRANSFERS<TransferRow>(),
]

/**
 * What the operator publishes for a line the platform does not carry.
 *
 * ── Why these three numbers are typed out here ───────────────────────────────
 *
 * Every other figure on the network page is read out of data/tdx/. The Sanying
 * Line has no record there at all (see OFF_PLATFORM in lib/lines.ts), so its
 * row would otherwise be four em dashes — a line present in the list and absent
 * from every column, which reads as a fault rather than as a fact about the
 * source.
 *
 * These are the operator's own figures from its opening announcement, the same
 * ones the line page states and cites. They are duplicated here rather than
 * read out of that page's frontmatter by matching on label text, and
 * `npm run facts` checks the two against each other — this project's answer to
 * a number living in two places has always been to check it, not to hope.
 */
export type PublishedFigures = {
  stations: number
  routeKm: number
  endToEndMin: number
  /** Frontmatter source id on the line page, for the cross-check. */
  sourceId: string
  /** One line naming the material, for the footnote. */
  label: string
}

const OPERATOR_PUBLISHED: Record<string, PublishedFigures> = {
  [lineKey('NTMC', 'LB')]: {
    stations: 12,
    routeKm: 14.29,
    endToEndMin: 30,
    sourceId: 'ntmetro-opening',
    label: "New Taipei Metro's own opening announcement, 30 June 2026",
  },
}

export type LineSummary = {
  line: Line
  stations: Station[]
  from: Station | null
  to: Station | null
  /**
   * End-to-end run time in minutes, from TDX. Null where not published.
   */
  travelTimeMin: number | null
  /**
   * Length in km from the first station to the last, along the surveyed curve.
   *
   * NOT an official figure. TDX exposes a RouteLength field but leaves it at
   * zero for every metro route, so this is computed from the drawn alignment.
   *
   * Measured between the outermost stations, not end to end of the published
   * geometry. That geometry runs past both termini into depot leads and tail
   * track — 1.38 km of it on Wenhu — and counting that as route length inflated
   * the figure to 26.42 km against a published 25.1. Trimmed to the stations it
   * measures 25.04 km, so the survey and the literature agree after all.
   */
  measuredKm: number | null
  /** The whole published alignment, including non-revenue track. */
  publishedGeometryKm: number | null
  /** How much of the alignment lies outside the station extent. */
  overrunKm: number | null
  /**
   * The operator's own route length, from StationOfRoute's CumulativeDistance.
   * This is the figure to quote; `measuredKm` only corroborates it.
   */
  officialKm: number | null
  /**
   * True when the line has a route reaching stations the trunk does not — a
   * real branch, not a short working. Was previously inferred from the geometry
   * arriving in several runs, which is a different thing entirely: it marked
   * the Circular Line as branched when its breaks are holes in the source, and
   * would miss a branch whose alignment happened to chain cleanly.
   */
  hasBranch: boolean
  /**
   * How many separate runs the geometry chains into. One means the measurement
   * is complete; more means it is a LOWER BOUND, because the track crossing
   * each gap is not in the source and so cannot be measured. Five of the seven
   * lines are in that position, and the shortfall is not always small — the
   * Circular Line measures 12.24 km against a published 15.4.
   */
  runs: number
  /**
   * Operator figures, for a line TDX has no record of. Null on every line the
   * platform carries — those get their numbers from the data, and mixing the
   * two silently would be the whole problem.
   */
  published: PublishedFigures | null
}

export function getLineSummaries(): LineSummary[] {
  const rows = routes

  return LINES.map((line) => {
    const stations = STATIONS.filter(
      (s) => s.line === line.code && s.operator === line.operator,
    ).sort(
      (a, b) => a.sequence - b.sequence,
    )

    const trunk = getTrunkRoute(line.code, line.operator)

    // End-to-end time for the trunk route specifically. Matching on RouteID
    // rather than "first outbound record" keeps the time and the termini
    // describing the same service.
    const primary = rows.find(
      (r) =>
        r.operator === line.operator &&
        r.LineID === line.code &&
        Number(r.Direction) === 0 &&
        r.RouteID === trunk?.routeId,
    )

    const geometry = getLineGeometry(line.code, line.operator)

    /*
     * Measure against the TRUNK route's stations only, so this column and the
     * official one describe the same thing.
     *
     * Measuring against every station on the line put the branch in our figure
     * but not in the operator's — the Zhonghe–Xinlu Line came out at 28.13 km
     * against an official 24.11, a 4 km "disagreement" that was really the
     * Luzhou branch being counted once on one side and not at all on the other.
     * Two numbers side by side are only worth printing if they are answers to
     * the same question.
     */
    const trunkStations = trunk
      ? trunk.stations
          .map((code) => getStation(code))
          .filter((s): s is Station => !!s && s.lat !== null && s.lon !== null)
      : stations.filter((s) => s.lat !== null && s.lon !== null)

    const measurement = geometry
      ? measureLine(
          geometry.chained,
          trunkStations.map((s) => [s.lon!, s.lat!] as Point),
        )
      : null

    return {
      line,
      stations,
      // Termini from the trunk ROUTE, not from the first and last station by
      // sequence — branch stations are appended past the end of the sequence,
      // so "last" was G03A Xiaobitan rather than G19 Songshan.
      from: (trunk && getStation(trunk.from)) ?? stations[0] ?? null,
      to: (trunk && getStation(trunk.to)) ?? (stations.length ? stations[stations.length - 1] : null),
      travelTimeMin: primary && primary.TravelTime > 0 ? primary.TravelTime : null,
      officialKm: trunk?.lengthKm ?? null,
      measuredKm: measurement ? measurement.revenueKm : null,
      publishedGeometryKm: measurement ? measurement.publishedKm : null,
      overrunKm: measurement ? measurement.overrunKm : null,
      hasBranch: getBranchRoutes(line.code, line.operator).length > 0,
      runs: geometry ? geometry.paths.length : 0,
      published: line.onTdx ? null : (OPERATOR_PUBLISHED[line.key] ?? null),
    }
  })
}

/**
 * One line's drawn geometry, with its branch track separated from its trunk.
 *
 * Every map on the site goes through this rather than through `getLineGeometry`
 * directly, so a branch is drawn as a branch on the network map, on the line
 * page and on a station page alike, without each of them having to know which
 * lines have one.
 *
 * `branch` is empty for the five lines that have none, which makes the caller's
 * job the same either way.
 */
/**
 * Where a drawn track came from.
 *
 * `surveyed` — MOTC's published route geometry, the real alignment.
 * `station-chain` — straight segments between the operator's own published
 *   station points, for a line MOTC has no geometry for at all. It says the
 *   stations are in that order and roughly there. It does NOT say the track
 *   goes that way, and a map must not let the two look alike.
 */
export type TrackKind = 'surveyed' | 'station-chain'

export type LineTrack = Partition & {
  runs: number
  /** The branch's own terminus, per branch. */
  branchStations: Station[]
  kind: TrackKind
}

export function getLineTrack(lineCode: string, operator?: string): LineTrack {
  const geometry = getLineGeometry(lineCode, operator)

  /*
   * ── Run 51: the Sanying Line drew as twelve loose dots ──────────────────────
   *
   * Reported as "LB has no line on the network map", and it was the only line
   * on the page with none. MOTC publishes no LB shape record — the New Taipei
   * extract this map is built from is stamped 23 May 2023 and the railway
   * opened on 30 June 2026 — so `getLineGeometry` correctly returns null and
   * the line was filtered out of `mapLines` entirely.
   *
   * What was NOT correct is that its stations were still plotted. `mapStations`
   * takes every station with coordinates, and all twelve LB stations have them:
   * lib/sanying-stations.ts carries the New Taipei landmark register's TWD97
   * points converted to WGS84, a primary source. So the page ended up asserting
   * the exact opposite of the note printed above it — "the Sanying Line is not
   * drawn", above twelve Sanying dots.
   *
   * Inventing an alignment is not the answer; that is the thing this project
   * refuses to do. But joining points the operator published, in the order the
   * operator published them, and saying in the drawing and in words that it is
   * a chain of station points rather than surveyed track, asserts only what the
   * source supports. It is drawn dashed for exactly that reason — see the
   * `dashed` note in components/RouteMap.
   */
  if (!geometry) {
    const chain = STATIONS.filter(
      (s) =>
        s.line === lineCode &&
        (!operator || s.operator === operator) &&
        s.lat !== null &&
        s.lon !== null,
    )
      .slice()
      .sort((a, b) => a.sequence - b.sequence)
      .map((s) => [s.lon!, s.lat!] as Point)

    return {
      trunk: chain.length > 1 ? [chain] : [],
      branch: [],
      runs: 0,
      branchStations: [],
      kind: 'station-chain',
    }
  }

  const trunkRoute = getTrunkRoute(lineCode, operator)
  const onTrunk = new Set(trunkRoute?.stations ?? [])

  const points = (codes: Iterable<string>): Point[] =>
    [...codes]
      .map((code) => getStation(code))
      .filter((s): s is Station => !!s && s.lat !== null && s.lon !== null)
      .map((s) => [s.lon!, s.lat!] as Point)

  // Stations a branch route reaches that the trunk route never calls at. Taken
  // from the routes rather than from station codes, so an "A" suffix is not
  // load-bearing — the Luzhou branch has no suffixed codes at all.
  const branchCodes = new Set<string>()
  const termini: string[] = []
  for (const route of getBranchRoutes(lineCode, operator)) {
    for (const code of route.stations) if (!onTrunk.has(code)) branchCodes.add(code)
    // Whichever end of the branch route is not on the trunk is the branch's own
    // terminus — taking `to` would name Nanshijiao on a branch to Luzhou if the
    // source ever published that route the other way round.
    const outer = [route.to, route.from].find((code) => !onTrunk.has(code))
    if (outer) termini.push(outer)
  }

  const { trunk, branch } = partitionBranch(
    geometry.paths,
    points(onTrunk),
    points(branchCodes),
  )

  return {
    trunk,
    branch,
    runs: geometry.paths.length,
    branchStations: termini
      .map((code) => getStation(code))
      .filter((s): s is Station => !!s),
    kind: 'surveyed',
  }
}

export type Interchange = {
  /** Display name, taken from the first station in the group. */
  name: string
  nameZh: string
  /** Every station code serving this physical interchange, sorted by line. */
  codes: string[]
}

/**
 * Physical interchanges, assembled from TDX's transfer pairs.
 *
 * An interchange station carries a different code on each line it serves —
 * Zhongxiao Fuxing is BR10 and BL15 — so the pairs are treated as edges and
 * grouped into connected components. That handles three-line interchanges
 * without special-casing them.
 */
export function getInterchanges(): Interchange[] {
  const parent = new Map<string, string>()

  const find = (code: string): string => {
    if (!parent.has(code)) parent.set(code, code)
    let root = parent.get(code)!
    while (root !== parent.get(root)!) root = parent.get(root)!
    parent.set(code, root)
    return root
  }

  const union = (a: string, b: string) => {
    const rootA = find(a)
    const rootB = find(b)
    if (rootA !== rootB) parent.set(rootA, rootB)
  }

  for (const row of transfers) {
    if (row.FromStationID && row.ToStationID) union(row.FromStationID, row.ToStationID)
  }

  const groups = new Map<string, Set<string>>()
  for (const code of parent.keys()) {
    const root = find(code)
    if (!groups.has(root)) groups.set(root, new Set())
    groups.get(root)!.add(code)
  }

  const order = new Map(LINES.map((l, i) => [l.key, i]))

  return [...groups.values()]
    .map((set) => {
      const codes = [...set]
        .filter((code) => getStation(code))
        .sort((a, b) => {
          const stationA = getStation(a)!
          const stationB = getStation(b)!
          const lineA = order.get(lineKey(stationA.operator, stationA.line)) ?? 99
          const lineB = order.get(lineKey(stationB.operator, stationB.line)) ?? 99
          return lineA - lineB || a.localeCompare(b)
        })
      const first = codes[0] ? getStation(codes[0]) : undefined
      return { name: first?.name ?? '', nameZh: first?.nameZh ?? '', codes }
    })
    .filter((group) => group.codes.length > 1)
    .sort((a, b) => b.codes.length - a.codes.length || a.name.localeCompare(b.name))
}
