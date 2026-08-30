import { getAllPages, getLinePageHref, getPages } from './content'
import { getLine, type Line } from './lines'
import { getOperator } from './operators'
import { getLineRidership, getStationRidership, formatRidership } from './ridership'
import { getStationHref, STATIONS, type Station } from './stations'
import { getLineSummaries } from './network'

export type TimelineEvent = {
  date: string
  year: number
  stations: Station[]
  sources: Array<{ title: string; url: string; id: string }>
}

function parseDate(value: string): number {
  const timestamp = Date.parse(value)
  return Number.isNaN(timestamp) ? Number.MAX_SAFE_INTEGER : timestamp
}

function sourceFor(station: Station) {
  const sourceId = station.research?.openingSource
  const source = station.research?.sources.find((candidate) => candidate.id === sourceId)
  return source ? { title: source.title, url: source.url, id: source.id } : null
}

export function getNetworkOpeningTimeline(): TimelineEvent[] {
  const grouped = new Map<string, Station[]>()
  for (const station of STATIONS) {
    const date = station.research?.openingDate
    if (!date) continue
    const stations = grouped.get(date) ?? []
    stations.push(station)
    grouped.set(date, stations)
  }

  return [...grouped.entries()]
    .sort(([a], [b]) => parseDate(a) - parseDate(b) || a.localeCompare(b))
    .map(([date, stations]) => ({
      date,
      year: Number(date.match(/\d{4}/)?.[0] ?? 0),
      stations: stations.sort((a, b) => a.sequence - b.sequence || a.code.localeCompare(b.code)),
      sources: stations
        .map(sourceFor)
        .filter((source): source is NonNullable<ReturnType<typeof sourceFor>> => source !== null)
        .filter((source, index, all) => all.findIndex((candidate) => candidate.id === source.id) === index),
    }))
}

export function getUndatedOpeningStations(): Station[] {
  return STATIONS.filter((station) => !station.research?.openingDate)
}

export type LineComparison = {
  line: Line
  stations: number
  lengthKm: number | null
  measuredKm: number | null
  travelTimeMin: number | null
  ridership: string
  ridershipPeriod: string
  openingYear: string
  system: string
}

export function getLineComparison(): LineComparison[] {
  const pages = getAllPages()
  return getLineSummaries().map((summary) => {
    const ridership = getLineRidership(summary.line.code, summary.line.operator)
    const page = pages.find((candidate) => candidate.href === getLinePageHref(summary.line.code, summary.line.operator))
    const opened = page?.facts.find((fact) => /^(?:opened|opening date)$/i.test(fact.label))?.value ?? ''
    return {
      line: summary.line,
      stations: summary.stations.length || summary.published?.stations || 0,
      lengthKm: summary.officialKm ?? summary.published?.routeKm ?? null,
      measuredKm: summary.measuredKm,
      travelTimeMin: summary.travelTimeMin,
      ridership: ridership.current ? formatRidership(ridership.current.value) : 'TBC',
      ridershipPeriod: ridership.current?.period ?? '',
      openingYear: opened.match(/(?:18|19|20)\d{2}/)?.[0] ?? 'TBC',
      system: getOperator(summary.line.operator)?.name ?? summary.line.operator,
    }
  })
}

export type OperatorComparison = {
  code: string
  name: string
  lineCount: number
  stationCount: number
  fleetFamilyPages: number
  depots: number
  lines: string
}

export function getOperatorComparison(): OperatorComparison[] {
  const fleetPages = getPages('rail', 'rolling-stock', 'metro').filter((page) => page.line)
  const depotPages = getPages('rail', 'depots', 'metro')
  const operators = [...new Set(STATIONS.map((station) => station.operator))]
  return operators.map((code) => {
    const lines = [...new Map(
      STATIONS.filter((station) => station.operator === code)
        .map((station) => {
          const line = getLine(station.line, code)
          return [line?.key ?? `${code}:${station.line}`, line] as const
        }),
    ).values()].filter((line): line is Line => Boolean(line))
    const operatorFleetPages = fleetPages.filter((page) => getLine(page.line, page.operator || undefined)?.operator === code)
    return {
      code,
      name: getOperator(code)?.name ?? code,
      lineCount: lines.length,
      stationCount: STATIONS.filter((station) => station.operator === code).length,
      fleetFamilyPages: operatorFleetPages.length,
      depots: depotPages.filter((page) => getLine(page.line, page.operator || undefined)?.operator === code).length,
      lines: lines.map((line) => line.name).join(', '),
    }
  })
}

export type SystemComparison = {
  code: string
  name: string
  publishedLineKm: number | null
  stations: number
  annualRidership: string
}

/**
 * System rows deliberately do not turn monthly snapshots into annual totals.
 * The length column is labelled as a sum of published line records because it
 * is not silently interchangeable with an operator's own network-length KPI.
 */
export function getSystemComparison(): SystemComparison[] {
  const lines = getLineComparison()
  return getOperatorComparison().map((operator) => {
    const members = lines.filter((line) => line.line.operator === operator.code)
    const published = members.map((line) => line.lengthKm).filter((value): value is number => value !== null)
    return {
      code: operator.code,
      name: operator.name,
      publishedLineKm: published.length === members.length && members.length > 0
        ? published.reduce((total, value) => total + value, 0)
        : null,
      stations: operator.stationCount,
      annualRidership: 'TBC',
    }
  })
}

export type StationComparison = {
  station: Station
  line: Line | undefined
  depth: string
  ridership: string
  period: string
  rank: string
  href: string | null
}

export function getStationComparison(): StationComparison[] {
  return STATIONS
    .map((station) => {
      const ridership = getStationRidership(station)
      return {
        station,
        line: getLine(station.line, station.operator),
        depth: station.structure === 'unknown' ? 'TBC' : station.structure,
        ridership: ridership ? formatRidership(ridership.current.value) : 'TBC',
        period: ridership?.current.period ?? '',
        rank: ridership ? `${ridership.rank}/${ridership.rankTotal}` : 'TBC',
        href: getStationHref(station.code, station.operator),
      }
    })
    .sort((a, b) => {
      const left = a.ridership === 'TBC' ? -1 : Number(a.ridership.replace(/,/g, ''))
      const right = b.ridership === 'TBC' ? -1 : Number(b.ridership.replace(/,/g, ''))
      return right - left || a.station.code.localeCompare(b.station.code)
    })
}

export const NETWORK_TIMELINE_START = 1996
