/**
 * Routes, as distinct from lines.
 *
 * A line is a colour and a set of stations. A *route* is a service pattern over
 * it, and TDX publishes those separately: the Green Line has three (the G01–G19
 * trunk, a G08–G19 short working, and the two-station Xiaobitan shuttle). This
 * distinction is what the site was missing, and two visible errors came out of
 * not having it.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * 1. TDX DOES PUBLISH ROUTE LENGTH.
 *
 * The site said, in prose and in three code comments, that it does not — that
 * `RouteLength` on the Route record is zero for every metro route, so the figure
 * had to be computed from geometry or left TBC.
 *
 * `RouteLength` is indeed zero. But `StationOfRoute` carries a
 * `CumulativeDistance` on every station, and the last one is the route's length:
 *
 *     BR-1  Taipei Zoo – Taipei Nangang Exhibition Center   25.17 km
 *     BL-1  Dingpu – Taipei Nangang Exhibition Center       26.65 km
 *     Y-1   Dapinglin – New Taipei Industrial Park          15.06 km
 *
 * This is an operator-published figure, and it was sitting in data/tdx/ the
 * whole time under a key nobody looked in. It settles the Wenhu Line's route
 * length — 25.17 km, against the 25.1 that circulates and the 25.04 the surveyed
 * geometry measures — without any research at all.
 *
 * 2. TERMINI WERE TAKEN FROM THE WRONG END.
 *
 * `lib/stations.ts` flattens every route into one sequence per line, and the
 * generator appends branch stations after the trunk. So G03A Xiaobitan carries
 * sequence 20 on a nineteen-station line, and "last station by sequence" gave
 * the network page a terminus of G03A instead of G19 Songshan. Same for R22A
 * over R28 Tamsui, and O54 over O21 Huilong. Taking termini from the trunk
 * route's own endpoints fixes it at the source rather than special-casing the
 * three codes.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { TDX_STATION_OF_ROUTE } from './tdx.ts'
import { lineKey } from './lines.ts'

type StationOfRouteRow = {
  operator: string
  LineID: string
  RouteID: string
  Direction: number
  RouteName?: { En?: string; Zh_tw?: string }
  Stations?: {
    StationID: string
    Sequence: number
    CumulativeDistance: number
  }[]
}

const rows: StationOfRouteRow[] = [
  ...TDX_STATION_OF_ROUTE<StationOfRouteRow>(),
]

export type Route = {
  /** Stable operator namespace plus the bare line code. */
  key: string
  operator: string
  lineId: string
  routeId: string
  nameEn: string
  nameZh: string
  /** Station codes in running order, outbound. */
  stations: string[]
  from: string
  to: string
  /**
   * Route length in km, from the last station's CumulativeDistance.
   *
   * OFFICIAL, not derived. Null only where the source omits it.
   */
  lengthKm: number | null
}

/** Outbound routes only — the inbound record is the same stations reversed. */
const ROUTES: Route[] = rows
  .filter((row) => Number(row.Direction) === 0 && (row.Stations?.length ?? 0) > 0)
  .map((row) => {
    const stations = [...row.Stations!].sort((a, b) => a.Sequence - b.Sequence)
    const last = stations[stations.length - 1]
    const length = Number(last?.CumulativeDistance)
    return {
      key: lineKey(row.operator, row.LineID),
      operator: row.operator,
      lineId: row.LineID,
      routeId: row.RouteID,
      nameEn: row.RouteName?.En ?? '',
      nameZh: row.RouteName?.Zh_tw ?? '',
      stations: stations.map((s) => s.StationID),
      from: stations[0]?.StationID ?? '',
      to: last?.StationID ?? '',
      lengthKm: Number.isFinite(length) && length > 0 ? length : null,
    }
  })

export function getRoutes(lineId: string, operator?: string): Route[] {
  const matches = ROUTES.filter((r) => r.lineId.toUpperCase() === lineId.toUpperCase())
  if (operator) {
    const namespace = operator.trim().toUpperCase()
    return matches.filter((r) => r.operator.toUpperCase() === namespace)
  }

  // A bare code is only safe while it names one operator's line. Returning an
  // arbitrary operator's routes here would recreate the overwrite bug this
  // namespace exists to prevent.
  const keys = new Set(matches.map((r) => r.key))
  return keys.size === 1 ? matches : []
}

/**
 * The route that best represents the line: the one calling at most stations.
 *
 * Not "the first by RouteID" — that happens to be right today but only because
 * the trunk is numbered -1 on every line. Longest is what is actually meant.
 */
export function getTrunkRoute(lineId: string, operator?: string): Route | null {
  const routes = getRoutes(lineId, operator)
  if (routes.length === 0) return null
  return routes.reduce((best, r) => (r.stations.length > best.stations.length ? r : best))
}

/**
 * Routes that reach a station the trunk never calls at — the genuine branches.
 *
 * Distinguishing these from short workings matters: G-2 (Taipower Building to
 * Songshan) is a peak short working over trunk track and is not a branch, while
 * G-3 (Qizhang to Xiaobitan) is. Counting routes alone would call both branches.
 */
export function getBranchRoutes(lineId: string, operator?: string): Route[] {
  const trunk = getTrunkRoute(lineId, operator)
  if (!trunk) return []
  const onTrunk = new Set(trunk.stations)
  return getRoutes(lineId, operator).filter(
    (r) => r.routeId !== trunk.routeId && r.stations.some((s) => !onTrunk.has(s)),
  )
}
