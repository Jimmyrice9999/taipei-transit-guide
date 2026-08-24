import stationRecords from '../data/tdx/KRTC/station.json' with { type: 'json' }
import routeRecords from '../data/tdx/KRTC/station-of-route.json' with { type: 'json' }
import lineRecords from '../data/tdx/KRTC/line.json' with { type: 'json' }
import shapeRecords from '../data/tdx/KRTC/shape.json' with { type: 'json' }
import meta from '../data/tdx/KRTC/meta.json' with { type: 'json' }
import lrtStations from '../data/krtc/circular-lrt.json' with { type: 'json' }

export type KrtcStation = {
  id: string
  uid: string
  code: string
  name: string
  nameZh: string
  address: string
  city: string
  town: string
  latitude: number
  longitude: number
  classCode: string
  updateTime: string
}

export type KrtcRouteStation = {
  stationId: string
  sequence: number
  cumulativeDistance: number | null
  name: string
  nameZh: string
}

export type KrtcRoute = {
  id: string
  lineId: string
  direction: number
  name: string
  nameZh: string
  stations: KrtcRouteStation[]
  sourceUpdateTime: string
}

export type KrtcLine = {
  id: string
  name: string
  nameZh: string
  updateTime: string
}

export type KrtcLrtStation = {
  id: string
  nameEn: string
  nameZh: string
  sequence: number
  location: string
}

type TdxStation = {
  StationID: string
  StationUID: string
  StationName: { En: string; Zh_tw: string }
  StationAddress?: string
  LocationCity?: string
  LocationTown?: string
  StationPosition?: { PositionLat: number; PositionLon: number }
  StationClass?: string
  UpdateTime: string
}

type TdxRoute = {
  RouteID: string
  LineID: string
  Direction: number
  RouteName: { En?: string; Zh_tw?: string }
  Stations: Array<{
    StationID: string
    Sequence: number
    CumulativeDistance?: number
    StationName: { En?: string; Zh_tw?: string }
  }>
  SrcUpdateTime: string
}

type TdxLine = {
  LineID: string
  LineName: { Zh_tw?: string }
  UpdateTime: string
}

const stations = stationRecords as unknown as TdxStation[]
const routes = routeRecords as unknown as TdxRoute[]
const lines = lineRecords as unknown as TdxLine[]

export const KRTC_METRO_STATIONS: KrtcStation[] = stations.map((station) => ({
  id: station.StationID,
  uid: station.StationUID,
  code: station.StationID,
  name: station.StationName.En,
  nameZh: station.StationName.Zh_tw,
  address: station.StationAddress ?? '',
  city: station.LocationCity ?? '',
  town: station.LocationTown ?? '',
  latitude: station.StationPosition?.PositionLat ?? 0,
  longitude: station.StationPosition?.PositionLon ?? 0,
  classCode: station.StationClass ?? '',
  updateTime: station.UpdateTime,
}))

export const KRTC_ROUTES: KrtcRoute[] = routes.map((route) => ({
  id: route.RouteID,
  lineId: route.LineID,
  direction: route.Direction,
  name: route.RouteName.En ?? route.RouteID,
  nameZh: route.RouteName.Zh_tw ?? '',
  sourceUpdateTime: route.SrcUpdateTime,
  stations: route.Stations.map((station) => ({
    stationId: station.StationID,
    sequence: station.Sequence,
    cumulativeDistance: station.CumulativeDistance ?? null,
    name: station.StationName.En ?? station.StationID,
    nameZh: station.StationName.Zh_tw ?? '',
  })),
}))

export const KRTC_LINES: KrtcLine[] = lines.map((line) => ({
  id: line.LineID,
  name: line.LineID === 'R' ? 'Red Line' : line.LineID === 'O' ? 'Orange Line' : line.LineID,
  nameZh: line.LineName.Zh_tw ?? '',
  updateTime: line.UpdateTime,
}))

export const KRTC_LRT_STATIONS = lrtStations as KrtcLrtStation[]
export const KRTC_LINE_IDS = ['R', 'O', 'C'] as const
export const KRTC_METRO_STATION_COUNT = KRTC_METRO_STATIONS.length
export const KRTC_LRT_STATION_COUNT = KRTC_LRT_STATIONS.length
export const KRTC_STATION_COUNT = KRTC_METRO_STATION_COUNT + KRTC_LRT_STATION_COUNT
export const KRTC_DATASET_META = meta as {
  fetchedAt: string
  operators: Record<string, { datasets: Record<string, { status: number; records: number }> }>
}
export const KRTC_STATION_SOURCE = 'https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/Station/KRTC?$format=JSON&$top=1000&$skip=0'
export const KRTC_STATION_OF_ROUTE_SOURCE = 'https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/StationOfRoute/KRTC?$format=JSON&$top=1000&$skip=0'
export const KRTC_LINE_SOURCE = 'https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/Line/KRTC?$format=JSON&$top=1000&$skip=0'
export const KRTC_ROUTE_SOURCE = 'https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/Route/KRTC?$format=JSON&$top=1000&$skip=0'
export const KRTC_SHAPE_SOURCE = 'https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/Shape/KRTC?$format=JSON&$top=1000&$skip=0'

export function getKrtcStation(id: string): KrtcStation | undefined {
  const needle = id.toUpperCase()
  return KRTC_METRO_STATIONS.find((station) => station.id === needle || station.code === needle)
}

export function getKrtcLine(id: string): KrtcLine | undefined {
  return KRTC_LINES.find((line) => line.id === id.toUpperCase())
}

export function getKrtcRoute(lineId: string): KrtcRoute | undefined {
  return KRTC_ROUTES.find((route) => route.lineId === lineId.toUpperCase() && route.direction === 0)
}

export function getKrtcLrtStation(id: string): KrtcLrtStation | undefined {
  return KRTC_LRT_STATIONS.find((station) => station.id === id.toUpperCase())
}
