/**
 * Network-level facts assembled from the committed TDX data.
 *
 * Everything here is derived at build time from data/tdx/. Nothing is
 * hand-maintained, so a refetch updates the network page automatically.
 */

import { TDX_ROUTES, TDX_TRANSFERS } from './tdx.ts'
import { getLineGeometry, measureLine, type Point } from './geometry.ts'
import { LINES, type Line } from './lines.ts'
import { getBranchRoutes, getTrunkRoute } from './routes.ts'
import { STATIONS, getStation, type Station } from './stations.ts'

type RouteRow = {
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
}

export function getLineSummaries(): LineSummary[] {
  const rows = routes

  return LINES.map((line) => {
    const stations = STATIONS.filter((s) => s.line === line.code).sort(
      (a, b) => a.sequence - b.sequence,
    )

    const trunk = getTrunkRoute(line.code)

    // End-to-end time for the trunk route specifically. Matching on RouteID
    // rather than "first outbound record" keeps the time and the termini
    // describing the same service.
    const primary = rows.find(
      (r) => r.LineID === line.code && Number(r.Direction) === 0 && r.RouteID === trunk?.routeId,
    )

    const geometry = getLineGeometry(line.code)

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
      hasBranch: getBranchRoutes(line.code).length > 0,
      runs: geometry ? geometry.paths.length : 0,
    }
  })
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

  const order = new Map(LINES.map((l, i) => [l.code, i]))

  return [...groups.values()]
    .map((set) => {
      const codes = [...set]
        .filter((code) => getStation(code))
        .sort((a, b) => {
          const lineA = order.get(getStation(a)!.line) ?? 99
          const lineB = order.get(getStation(b)!.line) ?? 99
          return lineA - lineB || a.localeCompare(b)
        })
      const first = codes[0] ? getStation(codes[0]) : undefined
      return { name: first?.name ?? '', nameZh: first?.nameZh ?? '', codes }
    })
    .filter((group) => group.codes.length > 1)
    .sort((a, b) => b.codes.length - a.codes.length || a.name.localeCompare(b.name))
}
