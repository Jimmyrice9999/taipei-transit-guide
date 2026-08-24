import fs from 'node:fs'
import path from 'node:path'
import bikeStations from '@/data/tdx/bike/stations.json' with { type: 'json' }
import bikeJoins from '@/data/tdx/bike/rail-joins.json' with { type: 'json' }
import bikeMeta from '@/data/tdx/bike/meta.json' with { type: 'json' }
import busMeta from '@/data/tdx/bus/meta.json' with { type: 'json' }
import { getBusRoutesByRailStation, type BusRoute } from './bus/routes'
import { getBuiltBusRouteGroups } from './bus/route-groups'
import type { Station } from './stations'

type BikeStation = {
  id: string
  names: { en: string; zh_tw: string }
  city: string
  capacity: number | null
  position: { lat: number; lon: number } | null
  address: { en: string; zh_tw: string } | null
  sourceUpdated: string | null
}

type BikeJoin = {
  bikeId: string
  distanceM: number
  method: string
  railCode: string
  railSystem: string
}

export type NearBusRoute = {
  route: BusRoute
  href: string | null
}

export type NearBikeDock = BikeStation & {
  distanceM: number
  method: string
}

export type NearStationData = {
  busRoutes: NearBusRoute[]
  bikeDocks: NearBikeDock[]
  bikeRetrieved: string
  bikeSourceUrl: string
  busRetrieved: string
  busSourceUrl: string
}

const bikes = new Map(
  (bikeStations as BikeStation[]).map((station) => [station.id, station]),
)

function busHref(route: BusRoute): string | null {
  const group = route.group
  if (!getBuiltBusRouteGroups().includes(group)) return null
  const file = path.join(process.cwd(), 'content', 'bus', 'routes', group, `${route.canonicalSlug}.md`)
  return fs.existsSync(file) ? `/bus/routes/${group}/${route.canonicalSlug}/` : null
}

function bikeSystemFor(station: Pick<Station, 'operator' | 'line'>): string[] {
  if (station.operator === 'TYMC') return ['Taoyuan Airport MRT']
  if (station.operator === 'NTMC') {
    if (station.line === 'Y') return ['New Taipei Circular Line']
    if (station.line === 'V') return ['New Taipei Danhai LRT']
    if (station.line === 'K') return ['New Taipei Ankeng LRT']
  }
  return ['Taipei Metro']
}

export function getNearStationData(station: Pick<Station, 'code' | 'operator' | 'line'>): NearStationData {
  const systems = new Set(bikeSystemFor(station))
  const joins = (bikeJoins as BikeJoin[])
    .filter((join) => join.railCode.toUpperCase() === station.code.toUpperCase() && systems.has(join.railSystem))
    .sort((a, b) => a.distanceM - b.distanceM || a.bikeId.localeCompare(b.bikeId))

  const bikeDocks = joins
    .map((join) => {
      const dock = bikes.get(join.bikeId)
      return dock ? { ...dock, distanceM: join.distanceM, method: join.method } : null
    })
    .filter((dock): dock is NearBikeDock => dock !== null)

  const routes = new Map<string, NearBusRoute>()
  for (const route of getBusRoutesByRailStation(station.code)) {
    if (!routes.has(route.id)) routes.set(route.id, { route, href: busHref(route) })
  }

  return {
    busRoutes: [...routes.values()].sort((a, b) => a.route.canonicalSlug.localeCompare(b.route.canonicalSlug)),
    bikeDocks,
    bikeRetrieved: String((bikeMeta as { fetchedAt?: string }).fetchedAt ?? '').slice(0, 10),
    bikeSourceUrl: String((bikeMeta as { sourceUrl?: string }).sourceUrl ?? 'https://tdx.transportdata.tw/'),
    busRetrieved: String((busMeta as { fetchedAt?: string }).fetchedAt ?? '').slice(0, 10),
    busSourceUrl: String((busMeta as { sourceUrl?: string }).sourceUrl ?? 'https://tdx.transportdata.tw/'),
  }
}
