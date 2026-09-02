import trtcDocument from '../data/ridership/trtc-station.json' with { type: 'json' }
import trtcCrossSystemDocument from '../data/ridership/trtc-cross-system.json' with { type: 'json' }
import tymcDocument from '../data/ridership/tymc-station.json' with { type: 'json' }
import ntmcDocument from '../data/ridership/ntmc-system.json' with { type: 'json' }
import type { Station } from './stations.ts'

export type RidershipPoint = {
  period: string
  value: number
  entry?: number
  exit?: number
  days?: number
  measure?: 'entry-exit' | 'station-sum' | 'published-total'
}

type SourceRecord = {
  id: string
  title: string
  titleOriginal: string
  publisher: string
  publisherOriginal?: string
  indexUrl: string
  accessed: string
  kind: 'primary' | 'secondary'
  measure: string
}

type StationRecord = {
  operator: string
  code: string
  line: string
  name: string
  nameZh: string
  periods: RidershipPoint[]
}

type LineRecord = {
  value: number | null
  entry: number | null
  exit: number | null
  published: boolean
  measure?: RidershipPoint['measure']
}

type NetworkRecord = RidershipPoint & {
  lines?: Record<string, LineRecord>
}

type RidershipDocument = {
  retrieved: string
  currentPeriod: string
  source: SourceRecord & { files: Array<{ period: string; url: string; title?: string }> }
  stations: StationRecord[]
  network: NetworkRecord[]
}

type CrossSystemDocument = {
  source: RidershipDocument['source']
  network: NetworkRecord[]
}

const TRTC = trtcDocument as RidershipDocument
const TRTC_CROSS_SYSTEM = trtcCrossSystemDocument as CrossSystemDocument
const TYMC = tymcDocument as RidershipDocument
const NTMC = ntmcDocument as RidershipDocument

export type RidershipSource = SourceRecord & {
  files: Array<{ period: string; url: string; title?: string }>
}

export type StationRidership = {
  station: StationRecord
  series: RidershipPoint[]
  current: RidershipPoint
  rank: number
  rankTotal: number
  source: RidershipSource
}

export type LineRidership = {
  line: string
  series: RidershipPoint[]
  current: RidershipPoint
  source: RidershipSource
  published: true
} | {
  line: string
  series: []
  current: null
  source: RidershipSource | null
  published: false
  reason: string
}

export type NetworkRidership = {
  operator: string
  label: string
  series: RidershipPoint[]
  source: RidershipSource
  alternate?: {
    label: string
    series: RidershipPoint[]
    source: RidershipSource
  }
}

function normalized(value: string): string {
  return value.trim().toUpperCase()
}

function stationDocument(station: Pick<Station, 'operator'>): RidershipDocument | null {
  const operator = normalized(station.operator)
  if (operator === 'TRTC') return TRTC
  if (operator === 'TYMC') return TYMC
  if (operator === 'NTMC' || operator === 'NTALRT' || operator === 'NTDLRT') return NTMC
  return null
}

function currentPoint(series: RidershipPoint[]): RidershipPoint | null {
  return series.length > 0 ? series[series.length - 1] : null
}

export function getStationRidership(station: Pick<Station, 'code' | 'line' | 'operator'>): StationRidership | null {
  const document = stationDocument(station)
  if (!document) return null
  const record = document.stations.find((candidate) => normalized(candidate.code) === normalized(station.code))
  if (!record) return null
  const current = currentPoint(record.periods)
  if (!current) return null

  const lineRecords = document.stations
    .filter((candidate) => normalized(candidate.line) === normalized(station.line))
    .map((candidate) => ({ record: candidate, current: currentPoint(candidate.periods) }))
    .filter((candidate): candidate is { record: StationRecord; current: RidershipPoint } => candidate.current !== null)
    .sort((a, b) => b.current.value - a.current.value || a.record.code.localeCompare(b.record.code))
  const rank = lineRecords.findIndex((candidate) => normalized(candidate.record.code) === normalized(station.code)) + 1
  return {
    station: record,
    series: record.periods,
    current,
    rank: rank > 0 ? rank : lineRecords.length,
    rankTotal: lineRecords.length,
    source: document.source,
  }
}

function networkLineSeries(document: RidershipDocument, line: string): RidershipPoint[] {
  const points: Array<RidershipPoint | null> = document.network
    .map((point) => {
      const linePoint = point.lines?.[normalized(line)]
      if (!linePoint || !linePoint.published || linePoint.value === null) return null
      return {
        period: point.period,
        value: linePoint.value,
        entry: linePoint.entry ?? undefined,
        exit: linePoint.exit ?? undefined,
        days: point.days,
        measure: linePoint.measure ?? point.measure,
      }
    })
  return points.filter((point): point is RidershipPoint => point !== null)
}

export function getLineRidership(line: string, operator?: string): LineRidership {
  const code = normalized(line)
  const operatorCode = normalized(operator ?? '')
  const document = operatorCode === 'TYMC' || code === 'A'
    ? TYMC
    : operatorCode === 'NTMC' || operatorCode === 'NTALRT' || operatorCode === 'NTDLRT' || ['Y', 'V', 'K', 'LB'].includes(code)
      ? NTMC
      : operatorCode === 'TRTC'
        ? TRTC
        : null
  if (!document) {
    return {
      line: code,
      series: [],
      current: null,
      source: null,
      published: false,
      reason: 'No ridership series has been imported for this operator. The page keeps the figure TBC rather than borrowing another operator’s data.',
    }
  }
  const series = document === NTMC ? networkLineSeries(document, code) : document === TYMC && code === 'A'
    ? document.network.map(({ period, value, entry, exit, days }) => ({ period, value, entry, exit, days }))
    : []
  const current = currentPoint(series)
  if (current) {
    return { line: code, series, current, source: document.source, published: true }
  }
  return {
    line: code,
    series: [],
    current: null,
    source: document.source,
    published: false,
    reason: document === TRTC
      ? 'The checked TRTC source publishes station-level values and system aggregates, but does not separate totals by line. No line total is inferred.'
      : 'The checked operator source does not publish a line total for this code in the retrieved period range.',
  }
}

export function getNetworkRidership(): NetworkRidership[] {
  return [
    {
      operator: 'TRTC',
      label: 'Taipei Metro',
      series: TRTC.network,
      source: TRTC.source,
      alternate: { label: 'TRTC cross-system', series: TRTC_CROSS_SYSTEM.network, source: TRTC_CROSS_SYSTEM.source },
    },
    { operator: 'NTMC', label: 'New Taipei Metro', series: NTMC.network, source: NTMC.source },
    { operator: 'TYMC', label: 'Taoyuan Metro', series: TYMC.network, source: TYMC.source },
  ]
}

export function formatRidership(value: number): string {
  return new Intl.NumberFormat('en-US').format(value)
}

export function periodLabel(period: string): string {
  const [year, month] = period.split('-')
  return `${month}/${year}`
}
