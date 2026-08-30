/**
 * Normalized TDX bus routes.
 *
 * This is intentionally a bus-specific module. `lib/routes.ts` remains the
 * rail route helper and keeps its line/station route semantics unchanged.
 * The committed snapshots are produced by `npm run tdx:bus`; this module does
 * not contact TDX and is safe to import during a build.
 */

import busOperators from '../../data/tdx/bus/operators.json' with { type: 'json' }
import busRoutes from '../../data/tdx/bus/routes.json' with { type: 'json' }
import busSequences from '../../data/tdx/bus/stop-sequences.json' with { type: 'json' }
import busShapes from '../../data/tdx/bus/shapes.json' with { type: 'json' }
import busStops from '../../data/tdx/bus/stops.json' with { type: 'json' }
import confirmedBusRailJoins from '../../data/tdx/bus/rail-stop-joins.json' with { type: 'json' }
import ntpcBusRouteService from '../../data/ntpc/bus-route-service.json' with { type: 'json' }

export type BusRouteGroup =
  | 'colour-red'
  | 'colour-blue'
  | 'colour-green'
  | 'colour-brown'
  | 'colour-orange'
  | 'colour-yellow'
  | 'series-0-99'
  | 'series-100s'
  | 'series-200s'
  | 'series-300s'
  | 'series-500s'
  | 'series-600s'
  | 'series-700s'
  | 'series-900s'
  | 'series-other'
  | 'special-shuttle'
  | 'trunk'
  | 'minibus'
  | 'new-taipei'
  | 'unclassified'

export type BusNames = { zh_tw: string; en: string }

export type BusAlias = {
  value: string
  kind: 'route-uid' | 'route-id' | 'route-name-zh' | 'route-name-en' | 'subroute-uid' | 'subroute-id'
  city: string
}

export type BusRailJoin = {
  stopUid: string
  stationCode: string
  lineCode: string
  match: 'stop-id'
}

export type BusSubRoute = {
  id: string
  subRouteId: string
  names: BusNames
  direction: number | null
  operatorKeys: string[]
  sourceCity: string
}

export type BusRoute = {
  id: string
  canonicalSlug: string
  group: BusRouteGroup
  routeId: string
  names: BusNames
  sourceCities: string[]
  sourceUids: string[]
  authorityIds: string[]
  providerIds: string[]
  operatorIds: string[]
  subRoutes: BusSubRoute[]
  stopSequenceIds: string[]
  shapeIds: string[]
  railJoins: BusRailJoin[]
  aliases: BusAlias[]
  sourceUpdated: string[]
  service?: BusRouteService
}

export type BusRouteService = {
  routeId: string
  routeNameZh: string
  categoryKey: string
  categoryLabel: string
  categoryEnglish: string
  categoryDataset: string
  serviceRecordId: string | null
  providerId: string | null
  providerName: string | null
  startAndEnd: string | null
  distanceKm: string | null
  weekdayOperationHours: string | null
  holidayOperationHours: string | null
  weekdayFirstBus: string | null
  weekdayLastBus: string | null
  weekdayPeakHeadway: string | null
  weekdayOffpeakHeadway: string | null
  weekdayHeadwayDescription: string | null
  holidayFirstBus: string | null
  holidayLastBus: string | null
  holidayPeakHeadway: string | null
  holidayOffpeakHeadway: string | null
  holidayHeadwayDescription: string | null
  fareZh: string | null
  fareEn: string | null
  sourceUpdated: string
}

export type BusStop = {
  id: string
  stopId: string
  names: BusNames
  sourceCities: string[]
  authorityId: string | null
  position: { lat: number; lon: number } | null
  address: string | null
  bearing: string | null
  stationId: string | null
  locationCityCode: string | null
  sourceUpdated: string | null
}

export type BusStopSequence = {
  id: string
  routeId: string
  sourceCity: string
  routeUid: string
  routeIdSource: string
  subRouteUid: string | null
  subRouteId: string | null
  names: BusNames
  direction: number | null
  stops: Array<{
    stopUid: string
    stopId: string
    names: BusNames
    boarding: number | null
    sequence: number | null
    position: { lat: number; lon: number } | null
    locationCityCode: string | null
  }>
  sourceUpdated: string | null
}

export type BusShape = {
  id: string
  routeId: string
  sourceCity: string
  routeUid: string
  direction: number | null
  names: BusNames
  subRouteNames: BusNames
  geometry: string
  sourceUpdated: string | null
}

export type BusOperator = {
  id: string
  operatorId: string
  names: BusNames
  operatorCode: string
  operatorNo: string
  phone: string | null
  url: string | null
  authorityCodes: string[]
  sourceCities: string[]
}

const confirmedJoinsByRoute = new Map(
  (confirmedBusRailJoins as Array<{ routeId: string; joins: BusRailJoin[] }>).map((record) => [
    record.routeId,
    record.joins,
  ]),
)

const ntpcServiceByRoute = new Map(
  (ntpcBusRouteService as unknown as BusRouteService[]).map((record) => [record.routeId, record]),
)

/**
 * Every route's raw `railJoins` from the TDX pull is matched by normalized
 * stop name against the station registry — `match: 'normalized-name'` on
 * every one of the 3,738 raw candidates, with no exceptions. That is exactly
 * the join the sourcing discipline forbids presenting as confirmed: a bus
 * stop can be named after a station, or sit near one, without actually
 * serving it. Only `rail-stop-joins.json`'s curated, individually verified
 * entries earn `match: 'stop-id'` and a badge/link on a route page.
 *
 * So every route is rebuilt with `railJoins` from the curated map, or `[]`
 * when the route has no curated entry — never the unverified raw candidates.
 * A route with real candidate joins and no curated entry correctly renders
 * zero confirmed MRT stops until someone verifies one, rather than silently
 * upgrading a name match into an interchange claim.
 */
export const BUS_ROUTES = (busRoutes as unknown as BusRoute[]).map((route) => ({
  ...route,
  railJoins: confirmedJoinsByRoute.get(route.id) ?? [],
  service: ntpcServiceByRoute.get(route.id),
}))
export const BUS_STOPS = busStops as unknown as BusStop[]
export const BUS_STOP_SEQUENCES = busSequences as unknown as BusStopSequence[]
export const BUS_SHAPES = busShapes as unknown as BusShape[]
export const BUS_OPERATORS = busOperators as unknown as BusOperator[]

const byIdOrSlug = (value: string) => value.trim().toLowerCase()
const routeById = new Map(BUS_ROUTES.map((route) => [route.id, route]))
const routeBySlug = new Map(BUS_ROUTES.map((route) => [route.canonicalSlug, route]))
const routesByOperator = new Map<string, BusRoute[]>()
const routesByLine = new Map<string, BusRoute[]>()
const routesByStation = new Map<string, BusRoute[]>()

for (const route of BUS_ROUTES) {
  for (const operatorId of route.operatorIds) {
    if (!routesByOperator.has(operatorId)) routesByOperator.set(operatorId, [])
    routesByOperator.get(operatorId)?.push(route)
  }
  for (const join of route.railJoins) {
    if (!routesByLine.has(join.lineCode)) routesByLine.set(join.lineCode, [])
    routesByLine.get(join.lineCode)?.push(route)
    if (!routesByStation.has(join.stationCode)) routesByStation.set(join.stationCode, [])
    routesByStation.get(join.stationCode)?.push(route)
  }
}

/** Every normalized route, in the stable data-file order. */
export function getBusRoutes(): BusRoute[] {
  return BUS_ROUTES
}

/** A route can be addressed by normalized ID, canonical slug, or source alias. */
export function getBusRoute(value: string): BusRoute | null {
  const direct = routeById.get(value) ?? routeBySlug.get(byIdOrSlug(value))
  if (direct) return direct
  const alias = BUS_ROUTES.find((route) => route.aliases.some((entry) => entry.value === value))
  return alias ?? null
}

export function getBusRoutesByGroup(group: BusRouteGroup): BusRoute[] {
  return BUS_ROUTES.filter((route) => route.group === group)
}

export function getBusRoutesByOperator(operatorId: string): BusRoute[] {
  return routesByOperator.get(operatorId) ?? []
}

/** Only curated exact-stop joins are indexed as MRT relationships. */
export function getBusRoutesByRailLine(lineCode: string): BusRoute[] {
  return routesByLine.get(lineCode) ?? []
}

export function getBusRoutesByRailStation(stationCode: string, lineCode?: string): BusRoute[] {
  const routes = routesByStation.get(stationCode) ?? []
  if (!lineCode) return routes
  return routes.filter((route) =>
    route.railJoins.some(
      (join) => join.stationCode === stationCode && join.lineCode === lineCode && join.match === 'stop-id',
    ),
  )
}

export function getBusStopSequences(route: string | BusRoute): BusStopSequence[] {
  const routeRecord = typeof route === 'string' ? getBusRoute(route) : route
  if (!routeRecord) return []
  const ids = new Set(routeRecord.stopSequenceIds)
  return BUS_STOP_SEQUENCES.filter((sequence) => ids.has(sequence.id))
}

export function getBusShapes(route: string | BusRoute): BusShape[] {
  const routeRecord = typeof route === 'string' ? getBusRoute(route) : route
  if (!routeRecord) return []
  const ids = new Set(routeRecord.shapeIds)
  return BUS_SHAPES.filter((shape) => ids.has(shape.id))
}

export function getBusStop(stopUid: string): BusStop | null {
  return BUS_STOPS.find((stop) => stop.id === stopUid) ?? null
}

export function getBusOperator(operatorId: string): BusOperator | null {
  return BUS_OPERATORS.find((operator) => operator.id === operatorId || operator.operatorId === operatorId) ?? null
}
