/** Current TRA snapshot from the committed TDX pull. */

import stationRows from '../data/tdx/TRA/station.json' with { type: 'json' }
import stationOfLineRows from '../data/tdx/TRA/station-of-line.json' with { type: 'json' }
import shapeRows from '../data/tdx/TRA/shape.json' with { type: 'json' }
import meta from '../data/tdx/TRA/meta.json' with { type: 'json' }
import type {
  RailArchitectureModel,
  RailGeometryVersion,
  RailGaugeSegment,
  RailRouteEntity,
  RailStationEntity,
} from './rail-architecture.ts'

type Localised = { En?: string; Zh_tw?: string }
type TdxStation = {
  StationID: string
  StationUID?: string
  StationName?: Localised
  StationAddress?: string
  StationPosition?: { PositionLat?: number; PositionLon?: number }
  LocationCity?: string
  LocationTown?: string
  StationClass?: string
  UpdateTime?: string
}
type StationOfLine = {
  LineID: string
  Stations?: Array<{ Sequence: number; StationID: string; StationName?: string; TraveledDistance?: number }>
  UpdateTime?: string
}
type TdxShape = {
  LineID: string
  LineName?: Localised
  Geometry?: string
  UpdateTime?: string
}

export const TRA_RETRIEVED = meta.retrieved
export const TRA_STATION_COUNT = (stationRows as TdxStation[]).length
export const TRA_LINE_IDS = (shapeRows as TdxShape[]).map((row) => row.LineID)

const stationById = new Map((stationRows as TdxStation[]).map((station) => [station.StationID, station]))
const lineRows = stationOfLineRows as StationOfLine[]
const shapes = shapeRows as TdxShape[]

export const TRA_STATIONS: RailStationEntity[] = (stationRows as TdxStation[]).map((station) => ({
  operator: 'TRA',
  stationId: station.StationID,
  code: station.StationID,
  currentName: {
    nameEn: station.StationName?.En ?? station.StationID,
    nameZh: station.StationName?.Zh_tw,
  },
  formerNames: [],
  routeMembership: lineRows
    .filter((line) => line.Stations?.some((member) => member.StationID === station.StationID))
    .map((line) => {
      const member = line.Stations!.find((candidate) => candidate.StationID === station.StationID)!
      return {
        routeId: line.LineID,
        role: ['WL', 'EL', 'SL'].includes(line.LineID) ? 'trunk' : 'branch',
        status: 'active',
        sequence: member.Sequence + 1,
      } as const
    }),
  status: 'active',
}))

const routeVersionId = (lineId: string) => `tdx-${lineId.toLowerCase()}-${TRA_RETRIEVED}`

export const TRA_ROUTES: RailRouteEntity[] = lineRows.map((line) => ({
  operator: 'TRA',
  routeId: line.LineID,
  name: {
    nameEn: shapes.find((shape) => shape.LineID === line.LineID)?.LineName?.En ?? line.LineID,
    nameZh: shapes.find((shape) => shape.LineID === line.LineID)?.LineName?.Zh_tw,
  },
  versions: [{
    versionId: routeVersionId(line.LineID),
    status: 'active',
    validFrom: TRA_RETRIEVED,
    stationIds: (line.Stations ?? []).slice().sort((a, b) => a.Sequence - b.Sequence).map((station) => station.StationID),
    segmentIds: (line.Stations ?? []).slice().sort((a, b) => a.Sequence - b.Sequence).slice(1).map((station, index) => `segment-${line.LineID}-${index + 1}-${station.StationID}`),
    geometryIds: [`geometry-${line.LineID}`],
  }],
}))

export const TRA_SEGMENTS: RailGaugeSegment[] = lineRows.flatMap((line) => {
  const stations = (line.Stations ?? []).slice().sort((a, b) => a.Sequence - b.Sequence)
  return stations.slice(1).map((station, index) => ({
    segmentId: `segment-${line.LineID}-${index + 1}-${station.StationID}`,
    routeId: `TRA:${line.LineID}`,
    fromStationId: stations[index].StationID,
    toStationId: station.StationID,
    gaugeMm: 1067,
    status: 'active',
    validFrom: TRA_RETRIEVED,
  }))
})

export const TRA_GEOMETRIES: RailGeometryVersion[] = shapes.map((shape) => ({
  geometryId: `geometry-${shape.LineID}`,
  routeId: `TRA:${shape.LineID}`,
  versionId: routeVersionId(shape.LineID),
  status: 'active',
  validFrom: TRA_RETRIEVED,
  wkt: shape.Geometry ?? '',
}))

export const TRA_ARCHITECTURE: RailArchitectureModel = {
  stations: TRA_STATIONS,
  routes: TRA_ROUTES,
  segments: TRA_SEGMENTS,
  geometries: TRA_GEOMETRIES,
  interchanges: [],
}

export const TRA_DATASET_META = meta

export function getTraStation(stationId: string): RailStationEntity | undefined {
  const source = stationById.get(stationId.trim())
  return source ? TRA_STATIONS.find((station) => station.stationId === source.StationID) : undefined
}

export function getTraLine(lineId: string): RailRouteEntity | undefined {
  return TRA_ROUTES.find((line) => line.routeId.toUpperCase() === lineId.trim().toUpperCase())
}
