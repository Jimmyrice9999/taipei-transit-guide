import { getAllPages, getLinePageHref, getPages } from './content'
import { getLine, type Line } from './lines'
import { getOperator } from './operators'
import { getLineRidership, getStationRidership, formatRidership } from './ridership'
import { getStationHref, STATIONS, type Station } from './stations'
import { getLineSummaries } from './network'

export type TimelineEvent = {
  date: string
  year: number
  subjects: TimelineSubject[]
  sources: Array<{ title: string; url: string; id: string }>
}

export type TimelineSubject = {
  id: string
  label: string
  href: string | null
  code: string
  line: string
  operator: string
  kind: 'Opening' | 'Extension' | 'Station opening' | 'Closure' | 'Reopening'
}

function parseDate(value: string): number {
  const timestamp = Date.parse(value)
  if (!Number.isNaN(timestamp)) return timestamp
  const year = Number(value.match(/(?:18|19|20)\d{2}/)?.[0] ?? 0)
  return year ? Date.UTC(year, 0, 1) : Number.MAX_SAFE_INTEGER
}

function sourceFor(station: Station) {
  const sourceId = station.research?.openingSource
  const source = station.research?.sources.find((candidate) => candidate.id === sourceId)
  return source ? { title: source.title, url: source.url, id: source.id } : null
}

function isNetworkDateLabel(label: string): boolean {
  return (
    /^(Opened|Opening date|Line opened|First section opened|Public opening|Historical operation start|Passenger service began|Commercial service began|Line-wide opening|Operator-stated opening|Confirmed opening date|Full-line formal operation|Passenger reopening|Reopened|Closed by earthquake)$/i.test(label) ||
    /^(Operation-start year|Operator-record operation-start year|Construction-history operation start|Full opening date|Full freight service opening date|Greenway opening date|Later operation-start year)/i.test(label) ||
    /(?:line|section|extension|station|railway|transit center).*(?:opened|opening|closure|closed|reopened|full operation)$/i.test(label) ||
    /^(Opening \(|Extension opening \(|Red\/Orange Line operation|R24 service opening)/i.test(label)
  )
}

function eventKind(label: string, type: string): TimelineSubject['kind'] {
  if (/reopen/i.test(label)) return 'Reopening'
  if (/clos/i.test(label)) return 'Closure'
  if (/extension|section/i.test(label)) return 'Extension'
  return type === 'stations' ? 'Station opening' : 'Opening'
}

export function getNetworkOpeningTimeline(): TimelineEvent[] {
  const grouped = new Map<string, { subjects: TimelineSubject[]; sources: TimelineEvent['sources'] }>()
  for (const station of STATIONS) {
    const date = station.research?.openingDate
    const source = sourceFor(station)
    if (!date || !source) continue
    const group = grouped.get(date) ?? { subjects: [], sources: [] }
    group.subjects.push({
      id: `${station.operator}:${station.code}`,
      label: `${station.code} ${station.name}`,
      href: getStationHref(station.code, station.operator),
      code: station.code,
      line: station.line,
      operator: station.operator,
      kind: 'Station opening',
    })
    group.sources.push(source)
    grouped.set(date, group)
  }

  for (const page of getAllPages().filter((candidate) => candidate.section === 'rail')) {
    for (const fact of page.facts.filter((candidate) => isNetworkDateLabel(candidate.label))) {
      if (!/(?:18|19|20)\d{2}/.test(fact.value) || /TBC/i.test(fact.value)) continue
      const source = page.sources.find((candidate) => candidate.id === fact.source)
      if (!source?.url) continue
      const code =
        page.facts.find((candidate) =>
          ['Station code', 'Light rail code', 'TDX station code', 'Station ID'].includes(candidate.label),
        )?.value ?? page.line
      const group = grouped.get(fact.value) ?? { subjects: [], sources: [] }
      group.subjects.push({
        id: page.href,
        label: page.title,
        href: page.href,
        code,
        line: page.line,
        operator: page.operator,
        kind: eventKind(fact.label, page.type),
      })
      group.sources.push({ title: source.title, url: source.url, id: `${page.href}:${source.id}` })
      grouped.set(fact.value, group)
    }
  }

  return [...grouped.entries()]
    .sort(([a], [b]) => parseDate(a) - parseDate(b) || a.localeCompare(b))
    .map(([date, group]) => ({
      date,
      year: Number(date.match(/\d{4}/)?.[0] ?? 0),
      subjects: group.subjects
        .filter((subject, index, all) => all.findIndex((candidate) => candidate.id === subject.id) === index)
        .sort((a, b) => a.label.localeCompare(b.label)),
      sources: group.sources.filter(
        (source, index, all) => all.findIndex((candidate) => candidate.url === source.url) === index,
      ),
    }))
}

export function getUndatedOpeningStations(): TimelineSubject[] {
  const dated = new Set(getNetworkOpeningTimeline().flatMap((event) => event.subjects.map((subject) => subject.id)))
  const subjects: TimelineSubject[] = STATIONS.map((station) => ({
    id: `${station.operator}:${station.code}`,
    label: `${station.code} ${station.name}`,
    href: getStationHref(station.code, station.operator),
    code: station.code,
    line: station.line,
    operator: station.operator,
    kind: 'Station opening',
  }))
  for (const page of getAllPages().filter((candidate) => candidate.section === 'rail' && candidate.type === 'stations')) {
    const code =
      page.facts.find((candidate) =>
        ['Station code', 'Light rail code', 'TDX station code', 'Station ID'].includes(candidate.label),
      )?.value ?? page.slug
    subjects.push({
      id: page.href,
      label: page.title,
      href: page.href,
      code,
      line: page.line,
      operator: page.operator || page.system.toUpperCase(),
      kind: 'Station opening',
    })
  }
  return subjects
    .filter((subject) => !dated.has(subject.id))
    .filter((subject, index, all) => all.findIndex((candidate) => candidate.href === subject.href) === index)
    .sort((a, b) => a.operator.localeCompare(b.operator) || a.code.localeCompare(b.code))
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
