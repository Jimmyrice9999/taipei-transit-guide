import stationRecords from '../data/tdx/THSR/station.json' with { type: 'json' }
import shapeRecords from '../data/tdx/THSR/shape.json' with { type: 'json' }
import meta from '../data/tdx/THSR/meta.json' with { type: 'json' }

export type ThsrStation = {
  id: string
  code: string
  uid: string
  name: string
  nameZh: string
  address: string
  city: string
  town: string
  latitude: number
  longitude: number
  updateTime: string
}

type TdxStation = {
  StationID: string
  StationCode: string
  StationUID: string
  StationName: { En: string; Zh_tw: string }
  StationAddress: string
  LocationCity: string
  LocationTown: string
  StationPosition: { PositionLat: number; PositionLon: number }
  UpdateTime: string
}

const records = stationRecords as unknown as TdxStation[]

/** The ordered station list is the numeric TDX StationID order. */
export const THSR_STATIONS: ThsrStation[] = records
  .toSorted((a, b) => a.StationID.localeCompare(b.StationID, undefined, { numeric: true }))
  .map((station) => ({
    id: station.StationID,
    code: station.StationCode,
    uid: station.StationUID,
    name: station.StationName.En,
    nameZh: station.StationName.Zh_tw,
    address: station.StationAddress,
    city: station.LocationCity,
    town: station.LocationTown,
    latitude: station.StationPosition.PositionLat,
    longitude: station.StationPosition.PositionLon,
    updateTime: station.UpdateTime,
  }))

export const THSR_LINE = {
  code: 'HSRL',
  name: 'High-Speed Rail Line',
  nameZh: '臺灣高鐵線',
  operator: 'THSR',
  stationCount: THSR_STATIONS.length,
  geometry: (shapeRecords as Array<{ Geometry: string }>)[0]?.Geometry ?? '',
  geometryUpdated: (shapeRecords as Array<{ UpdateTime: string }>)[0]?.UpdateTime ?? '',
} as const

export const THSR_DATA_SOURCE = 'https://tdx.transportdata.tw/api/basic/v2/Rail/THSR/Station?$format=JSON'
export const THSR_SHAPE_SOURCE = 'https://tdx.transportdata.tw/api/basic/v2/Rail/THSR/Shape?$format=JSON'
export const THSR_RETRIEVED = String((meta as { retrieved: string }).retrieved)

export function getThsrStation(code: string): ThsrStation | undefined {
  const needle = code.toUpperCase()
  return THSR_STATIONS.find((station) => station.code === needle || station.id === needle)
}
