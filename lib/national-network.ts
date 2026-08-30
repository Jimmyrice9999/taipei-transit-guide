import traShapesJson from '../data/tdx/TRA/shape.json'
import traStationsJson from '../data/tdx/TRA/station.json'
import thsrShapesJson from '../data/tdx/THSR/shape.json'
import thsrStationsJson from '../data/tdx/THSR/station.json'
import krtcShapesJson from '../data/tdx/KRTC/shape.json'
import krtcStationsJson from '../data/tdx/KRTC/station.json'
import { getAllPages } from './content.ts'
import { parseWkt, simplify, type Point } from './geometry.ts'
import { getLine } from './lines.ts'
import type { MapLine, MapStation } from '@/components/RouteMap'

type ShapeRecord = {
  LineID: string
  LineName?: { En?: string; Zh_tw?: string }
  Geometry: string
}

type StationRecord = {
  StationID: string
  StationCode?: string
  StationName: { En?: string; Zh_tw?: string }
  StationPosition: { PositionLat: number; PositionLon: number }
}

const TRA_INK = '#4B5563'
const THSR_INK = '#171717'

function paths(record: ShapeRecord, toleranceM = 120): Point[][] {
  return parseWkt(record.Geometry)
    .map((segment) => simplify(segment, toleranceM))
    .filter((segment) => segment.length > 1)
}

function stationPageHrefs() {
  const result = new Map<string, string>()
  for (const page of getAllPages()) {
    if (page.section !== 'rail' || page.type !== 'stations' || !page.operator) continue
    const stationId = page.facts.find((fact) => fact.label === 'Station ID')?.value
    const stationCode = page.facts.find((fact) => fact.label === 'TDX station code')?.value
    if (stationId) result.set(`${page.operator}:${stationId}`, page.href)
    if (stationCode) result.set(`${page.operator}:${stationCode}`, page.href)
  }
  return result
}

function line(
  record: ShapeRecord,
  operator: 'TRA' | 'THSR' | 'KRTC',
  colour: string,
): MapLine {
  const registered = getLine(record.LineID, operator)
  return {
    code: operator === 'TRA' ? `TRA ${record.LineID}` : operator === 'THSR' ? 'HSR' : record.LineID,
    name:
      registered?.name ??
      record.LineName?.En ??
      (operator === 'THSR' ? 'Taiwan High Speed Rail' : `${operator} ${record.LineID}`),
    colour,
    badgeBg: registered?.badgeBg ?? colour,
    badgeFg: registered?.badgeFg ?? '#FFFFFF',
    paths: paths(record),
  }
}

function stations(
  records: StationRecord[],
  operator: 'TRA' | 'THSR' | 'KRTC',
  colour: string,
  hrefs: Map<string, string>,
): MapStation[] {
  return records.map((station) => {
    const code = station.StationCode || station.StationID
    return {
      id: `${operator}:${station.StationID}`,
      code,
      name: station.StationName.En || station.StationName.Zh_tw || code,
      nameZh: station.StationName.Zh_tw,
      lat: station.StationPosition.PositionLat,
      lon: station.StationPosition.PositionLon,
      colour,
      href: hrefs.get(`${operator}:${station.StationID}`) ?? hrefs.get(`${operator}:${code}`),
      isTerminus: false,
      isInterchange: false,
    }
  })
}

/** Build-time nationwide layers not already supplied by the metro registry. */
export function getNationalNetworkLayers(): { lines: MapLine[]; stations: MapStation[] } {
  const hrefs = stationPageHrefs()
  const krtcColour = (code: string) => getLine(code, 'KRTC')?.map ?? '#222222'

  const lines: MapLine[] = [
    ...(traShapesJson as ShapeRecord[]).map((shape) => line(shape, 'TRA', TRA_INK)),
    ...(thsrShapesJson as ShapeRecord[]).map((shape) => line(shape, 'THSR', THSR_INK)),
    ...(krtcShapesJson as ShapeRecord[]).map((shape) => line(shape, 'KRTC', krtcColour(shape.LineID))),
  ]

  return {
    lines,
    stations: [
      ...stations(traStationsJson as StationRecord[], 'TRA', TRA_INK, hrefs),
      ...stations(thsrStationsJson as StationRecord[], 'THSR', THSR_INK, hrefs),
      ...(krtcStationsJson as StationRecord[]).flatMap((station) =>
        stations([station], 'KRTC', krtcColour(station.StationID.charAt(0)), hrefs),
      ),
    ],
  }
}
