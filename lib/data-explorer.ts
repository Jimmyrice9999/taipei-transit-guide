import { getAllPages, getLinePageHref, getSystem } from './content.ts'
import { getLine, type Line } from './lines.ts'
import { getOperator } from './operators.ts'
import { getLineRidership, getStationRidership, formatRidership } from './ridership.ts'
import { getStationHref, STATIONS, type Station } from './stations.ts'
import { getLineSummaries } from './network.ts'
import { readAggregateData } from './aggregate-data.ts'

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

export function buildNetworkOpeningTimeline(): TimelineEvent[] {
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

export function buildUndatedOpeningStations(
  datedEvents = buildNetworkOpeningTimeline(),
): TimelineSubject[] {
  const dated = new Set(datedEvents.flatMap((event) => event.subjects.map((subject) => subject.id)))
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

/** Locale-independent timeline snapshot generated once before Next. */
export function getNetworkOpeningTimeline(): TimelineEvent[] {
  return readAggregateData().networkGrowth.events
}

/** Locale-independent undated-stations snapshot generated once before Next. */
export function getUndatedOpeningStations(): TimelineSubject[] {
  return readAggregateData().networkGrowth.undated
}

export type LineComparison = {
  id: string
  code: string
  name: string
  operator: string
  href: string
  line: Line | null
  stations: number | null
  lengthKm: number | null
  measuredKm: number | null
  travelTimeMin: number | null
  ridership: string
  ridershipPeriod: string
  openingYear: string
  system: string
}

export function buildLineComparison(): LineComparison[] {
  const pages = getAllPages()
  const summaries = getLineSummaries()
  return pages.filter((page) => page.section === 'rail' && page.type === 'lines').map((page) => {
    const summary = summaries.find(
      (candidate) => getLinePageHref(candidate.line.code, candidate.line.operator) === page.href,
    )
    const code =
      page.line ||
      page.facts.find((fact) => /^(?:TDX line ID|Line code)$/i.test(fact.label))?.value ||
      (page.operator === 'THSR' ? 'HSR' : page.system.toUpperCase())
    const operator = page.operator || page.system.toUpperCase()
    const registered = getLine(code, operator) ?? summary?.line ?? null
    const ridership = registered ? getLineRidership(registered.code, registered.operator) : { current: null }
    const stationValue = page.facts.find((fact) => /(?:ordered .*stations|stations$|station members|main-line stations)/i.test(fact.label))?.value
    const lengthValue =
      page.facts.find((fact) => /^(?:TDX route length|Route length|Main-line published chainage|Length)$/i.test(fact.label))?.value ??
      page.specs.find((spec) => /^(?:Route length|Main line|Length)$/i.test(spec.label))?.value
    const opened = page.facts.find((fact) => /(?:opened|opening date|operation|passenger reopening)/i.test(fact.label))?.value ?? ''
    return {
      id: page.href,
      code,
      name: page.title,
      operator,
      href: page.href,
      line: registered,
      stations: summary?.stations.length || summary?.published?.stations || Number(stationValue?.match(/\d+/)?.[0]) || null,
      lengthKm: summary?.officialKm ?? summary?.published?.routeKm ?? (lengthValue ? Number(lengthValue.match(/[\d.]+/)?.[0]) : null),
      measuredKm: summary?.measuredKm ?? null,
      travelTimeMin: summary?.travelTimeMin ?? null,
      ridership: ridership.current ? formatRidership(ridership.current.value) : 'TBC',
      ridershipPeriod: ridership.current?.period ?? '',
      openingYear: opened.match(/(?:18|19|20)\d{2}/)?.[0] ?? 'TBC',
      system: getOperator(operator)?.name ?? getSystem('rail', page.system).title,
    }
  }).sort((a, b) => a.system.localeCompare(b.system) || a.name.localeCompare(b.name))
}

export function getLineComparison(): LineComparison[] {
  return readAggregateData().comparisons.lines
}

export type OperatorComparison = {
  code: string
  name: string
  lineCount: number
  stationCount: number
  fleetFamilyPages: number
  fleetSize: string
  depots: number
  lines: string
}

export function buildOperatorComparison(lineRows = buildLineComparison()): OperatorComparison[] {
  const pages = getAllPages().filter((page) => page.section === 'rail')
  const operators = [...new Set(lineRows.map((row) => row.operator))]
  return operators.map((code) => {
    const lines = lineRows.filter((row) => row.operator === code)
    const system = lines[0]?.href.split('/')[2] ?? ''
    const contentStations = pages.filter(
      (page) => page.type === 'stations' && (page.operator === code || (!page.operator && page.system.toUpperCase() === code)),
    ).length
    const registryStations = STATIONS.filter((station) => station.operator === code).length
    const fleetFacts = pages
      .filter(
        (page) =>
          page.type === 'rolling-stock' &&
          (page.operator === code || (!page.operator && page.system.toUpperCase() === code)),
      )
      .flatMap((page) =>
        page.facts
          .filter((fact) => /^(?:Fleet size|Current fleet|Express fleet size)/i.test(fact.label))
          .map((fact) => `${fact.label}: ${fact.value}`),
      )
    return {
      code,
      name: getOperator(code)?.name ?? (system ? getSystem('rail', system).title : code),
      lineCount: lines.length,
      stationCount: Math.max(contentStations, registryStations),
      fleetFamilyPages: 0,
      fleetSize: fleetFacts.join('; ') || 'TBC',
      depots: pages.filter(
        (page) => page.type === 'depots' && (page.operator === code || (!page.operator && page.system.toUpperCase() === code)),
      ).length,
      lines: lines.map((line) => line.name).join(', '),
    }
  })
}

export function getOperatorComparison(): OperatorComparison[] {
  return readAggregateData().comparisons.operators
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
export function buildSystemComparison(
  lines = buildLineComparison(),
  operators = buildOperatorComparison(lines),
): SystemComparison[] {
  return operators.map((operator) => {
    const members = lines.filter((line) => line.operator === operator.code)
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

export function getSystemComparison(): SystemComparison[] {
  return readAggregateData().comparisons.systems
}

export type StationComparison = {
  id: string
  code: string
  name: string
  operator: string
  lineCode: string
  line: Line | undefined
  depth: string
  elevation: string
  ridership: string
  period: string
  rank: string
  href: string | null
}

export function buildStationComparison(): StationComparison[] {
  const pages = getAllPages().filter((page) => page.section === 'rail' && page.type === 'stations')
  const seen = new Set<string>()
  const contentRows: StationComparison[] = pages.map((page) => {
    const code =
      page.facts.find((fact) =>
        ['Station code', 'Light rail code', 'TDX station code', 'Station ID'].includes(fact.label),
      )?.value ?? page.slug
    const operator = page.operator || page.system.toUpperCase()
    seen.add(`${operator}:${code}`.toUpperCase())
    const lineCode = page.line || code.match(/^[A-Za-z]+/)?.[0]?.toUpperCase() || ''
    const depth = page.facts.find((fact) => /(?:depth|structure|station type)/i.test(fact.label))?.value ?? 'TBC'
    const elevation = page.specs.find((spec) => /elevation/i.test(spec.label))?.value ?? 'TBC'
    const ridership = page.facts.find((fact) => /station ridership/i.test(fact.label))?.value ?? 'TBC'
    return {
      id: page.href,
      code,
      name: page.title,
      operator,
      lineCode,
      line: getLine(lineCode, operator),
      depth,
      elevation,
      ridership,
      period: '',
      rank: 'TBC',
      href: page.href,
    }
  })
  const registryRows = STATIONS
    .filter((station) => !seen.has(`${station.operator}:${station.code}`.toUpperCase()))
    .map((station) => {
      const ridership = getStationRidership(station)
      return {
        id: `${station.operator}:${station.code}`,
        code: station.code,
        name: station.name,
        operator: station.operator,
        lineCode: station.line,
        line: getLine(station.line, station.operator),
        depth: station.structure === 'unknown' ? 'TBC' : station.structure,
        elevation: 'TBC',
        ridership: ridership ? formatRidership(ridership.current.value) : 'TBC',
        period: ridership?.current.period ?? '',
        rank: ridership ? `${ridership.rank}/${ridership.rankTotal}` : 'TBC',
        href: getStationHref(station.code, station.operator),
      }
    })
  return [...contentRows, ...registryRows]
    .sort((a, b) => {
      const left = a.ridership === 'TBC' ? -1 : Number(a.ridership.replace(/,/g, ''))
      const right = b.ridership === 'TBC' ? -1 : Number(b.ridership.replace(/,/g, ''))
      return right - left || a.code.localeCompare(b.code)
    })
}

export function getStationComparison(): StationComparison[] {
  return readAggregateData().comparisons.stations
}
