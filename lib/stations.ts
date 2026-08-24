/**
 * The station registry — composed from generated and researched records.
 *
 *   lib/stations.generated.ts   official data, written by `npm run stations`
 *   lib/station-overlay.ts      local research TDX does not publish
 *   lib/sanying-stations.ts     primary-sourced records absent from TDX
 *   this file                   merges them and serves the site
 *
 * TDX-backed stations are never edited here: fetch with `npm run tdx`, then
 * regenerate with `npm run stations`. A line absent from TDX needs a separate,
 * cited hand-maintained registry like Sanying's.
 *
 * Three jobs, as before:
 *   1. Gives every station code badge a name.
 *   2. Makes the badge system a proofreading tool — a code that is not in this
 *      registry fails the build with a warning naming the file, so BR25 cannot
 *      quietly render as though it were a real station.
 *   3. Draws the guideway spine, in official sequence.
 */

import { GENERATED_STATIONS, PROVENANCE } from './stations.generated.ts'
import { STATION_OVERLAY, type StationProseSentence, type Structure } from './station-overlay.ts'
import { SANYING_STATIONS } from './sanying-stations.ts'
import type { StationResearch } from './station-research.ts'
import type { Source } from './sources.ts'
import type { RailFormerName, RailRouteMembership, RailStatus } from './rail-architecture.ts'
import { KRTC_LRT_STATIONS, KRTC_METRO_STATIONS, getKrtcRoute } from './krtc.ts'

/** A line that will serve a station but does not yet. See the overlay. */
export type PlannedInterchange = {
  line: string
  note: string
  sourceTitle: string
  sourceUrl: string
}

export type { Structure }
export { PROVENANCE }

export type Station = {
  code: string
  /** Line prefix, e.g. "BR". */
  line: string
  /** Operator publishing this line: TRTC, NTMC or TYMC. */
  operator: string
  name: string
  /** Traditional Chinese name, where the source publishes one. */
  nameZh: string
  /** District, from the source's LocationTown. */
  district: string
  address: string
  /** Operator station-position description, distinct from a postal address. */
  location: string
  locationSource: string
  sources: Source[]
  /** Station-specific prose; unlike facts/specs, this explains the station's context. */
  prose?: StationProseSentence[]
  lat: number | null
  lon: number | null
  /** Position along the line, 1-based. */
  sequence: number
  /** Distance along the route in km, from TDX. Null on branch stations. */
  chainageKm: number | null
  /** Line codes this station interchanges with — not station codes. */
  interchange: string[]
  /** From the local overlay: TDX does not publish this. */
  structure: Structure
  /** Construction-project number, where the builder published one. Overlay. */
  engineering: string
  /** Street exits, where the builder published a count. Overlay. */
  exits: number | null
  /** Lines that will serve this station but do not yet. Overlay. */
  planned: PlannedInterchange[]
  /** Whether the record came from TDX or a documented primary-source research pass. */
  recordSource: 'tdx' | 'primary-research'
  /** Page-level evidence for a hand-researched station; null for TDX records. */
  research: StationResearch | null
  /** Stable identity and temporal fields used by historical systems such as TRA. */
  stableId?: string
  formerNames?: RailFormerName[]
  routeMembership?: RailRouteMembership[]
  validFrom?: string
  validTo?: string
  status?: RailStatus
  interchangeGroup?: string
}

export const STATIONS: Station[] = [
  ...GENERATED_STATIONS.map((station) => {
    // Taipei's overlay is keyed by its bare station code. TMRT deliberately
    // reuses G10–G17, so those rows must not inherit Taipei structure, exits,
    // or engineering contracts.
    const overlay = station.operator.toUpperCase() === 'TRTC'
      ? STATION_OVERLAY[station.code]
      : undefined
    return {
      ...station,
      interchange: station.interchange.filter((code) => code !== station.line),
      structure: (overlay?.structure ?? 'unknown') as Structure,
      engineering: overlay?.engineering ?? '',
      exits: overlay?.exits ?? null,
      location: overlay?.location ?? '',
      locationSource: overlay?.locationSource ?? '',
      sources: overlay?.sources ?? [],
      prose: overlay?.prose ?? [],
      planned: overlay?.planned ?? [],
      recordSource: 'tdx' as const,
      research: overlay?.research ?? null,
    }
  }),
  ...SANYING_STATIONS,
]

const KRTC_STATIONS: Station[] = [
  ...KRTC_METRO_STATIONS.map((station) => ({
    code: station.code,
    line: station.code.startsWith('O') || station.code === 'OT1' ? 'O' : 'R',
    operator: 'KRTC',
    name: station.name,
    nameZh: station.nameZh,
    district: station.town,
    address: station.address,
    location: station.address,
    locationSource: 'TDX Station response',
    sources: [],
    prose: [],
    lat: station.latitude,
    lon: station.longitude,
    sequence: 0,
    chainageKm: null,
    interchange: [],
    structure: 'unknown' as Structure,
    engineering: '',
    exits: null,
    planned: [],
    recordSource: 'tdx' as const,
    research: null,
  })),
  ...KRTC_LRT_STATIONS.map((station) => ({
    code: station.id,
    line: 'C',
    operator: 'KRTC',
    name: station.nameEn,
    nameZh: station.nameZh,
    district: '',
    address: station.location,
    location: station.location,
    locationSource: 'KRTC/MTBU Circular Light Rail route pages',
    sources: [],
    prose: [],
    lat: null,
    lon: null,
    sequence: station.sequence,
    chainageKm: null,
    interchange: [],
    structure: 'unknown' as Structure,
    engineering: '',
    exits: null,
    planned: [],
    recordSource: 'tdx' as const,
    research: null,
  })),
]

const KRTC_BY_CODE = new Map(KRTC_STATIONS.map((station) => [station.code.toUpperCase(), station]))

/*
 * Keyed on the UPPERCASED code, because lookups uppercase too.
 *
 * Three stations carry a letter suffix — R22A Xinbeitou, G03A Xiaobitan, and
 * A14a Airport Hotel — and TDX publishes that last one with a lowercase 'a'.
 * Keying on the raw code while looking up an uppercased one meant A14a never
 * resolved: it rendered as `badge-absent` on /data/stations, which is the site
 * stating that a station it lists is not a real station.
 */
const BY_CODE = new Map<string, Station>()
const BY_KEY = new Map<string, Station>()
for (const station of STATIONS) {
  // Taipei's existing bare-code links remain stable when another TDX system
  // reuses a code. New callers must pass the operator for the namespaced row.
  if (!BY_CODE.has(station.code.toUpperCase())) BY_CODE.set(station.code.toUpperCase(), station)
  BY_KEY.set(`${station.operator.toUpperCase()}:${station.code.toUpperCase()}`, station)
}

export function getStation(code: string, operator?: string): Station | undefined {
  const normalized = code.trim().toUpperCase()
  if (operator?.trim().toUpperCase() === 'KRTC') return KRTC_BY_CODE.get(normalized)
  if (operator?.trim()) return BY_KEY.get(`${operator.trim().toUpperCase()}:${normalized}`)
  return BY_CODE.get(normalized) ?? KRTC_BY_CODE.get(normalized)
}

/**
 * Every station on one line, in official running order.
 *
 * Returns nothing for an empty code — a page with no `line:` set has no spine,
 * and an empty prefix would otherwise match every station on every line.
 */
export function getLineStations(lineCode: string, operator?: string): Station[] {
  const prefix = lineCode.trim().toUpperCase()
  if (!prefix) return []
  const namespace = operator?.trim().toUpperCase()
  if (namespace === 'KRTC') {
    if (prefix === 'C') return KRTC_STATIONS.filter((station) => station.line === prefix)
    const route = getKrtcRoute(prefix)
    if (!route) return []
    return route.stations
      .map((member) => KRTC_BY_CODE.get(member.stationId.toUpperCase()))
      .filter((station): station is Station => Boolean(station))
      .map((station, index) => ({
        ...station,
        sequence: route.stations[index].sequence,
        chainageKm: route.stations[index].cumulativeDistance,
      }))
  }
  return STATIONS.filter(
    (s) => s.line === prefix && (!namespace || s.operator.toUpperCase() === namespace),
  ).sort((a, b) => a.sequence - b.sequence)
}

/**
 * Lines we hold station data for.
 *
 * Every code must resolve to a station to render as a badge — a badge asserts
 * "this is a real station", so an unverified one is never drawn. This set only
 * decides which of two warnings you get: a code on a catalogued line is almost
 * certainly a typo, while a code on an uncatalogued line means that line's
 * stations have not been pulled yet.
 */
export const CATALOGUED_LINES = new Set(STATIONS.map((s) => s.line).filter(Boolean))

/**
 * Lines whose stations have their own pages.
 *
 * Run 21: every catalogued line, not just Wenhu — generating a page from a
 * real TDX record is a templating decision, not a data one; every field the
 * template prints is already conditional on the data existing, so a line
 * with no hand-researched overlay just gets a thinner page, not a missing
 * one. Wenhu remains the depth standard (see the overlay and 24 photographs)
 * but "only Wenhu is written up" stopped being true this run.
 */
export const LINES_WITH_STATION_PAGES = CATALOGUED_LINES

/** The URL for a station's page, or null when it does not have one. */
export function getStationHref(code: string, operator?: string): string | null {
  const station = getStation(code, operator)
  if (station?.operator.toUpperCase() === 'KRTC') {
    const slug = station.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    return `/rail/krtc/stations/${slug}-${station.code.toLowerCase()}/`
  }
  if (!station || !LINES_WITH_STATION_PAGES.has(station.line)) return null
  if (station.operator.toUpperCase() === 'TMRT') {
    return `/rail/tmrt/stations/${station.code.toLowerCase()}/`
  }
  return `/rail/metro/stations/${station.code.toLowerCase()}/`
}

/**
 * Expands a `spine:` frontmatter value into the set of stations a page marks.
 *
 *   spine: BR01-BR12   a range, for a fleet that works part of the line
 *   spine: BR01        a single point, for a depot connection
 *   spine: BR01, BR19  several points
 *   (omitted)          the whole line
 */
export function resolveSpine(value: string, lineCode: string, operator?: string): Set<string> {
  const all = getLineStations(lineCode, operator)
  if (!value.trim()) return new Set(all.map((s) => s.code))

  const marked = new Set<string>()
  for (const part of value.split(',').map((p) => p.trim()).filter(Boolean)) {
    // The endpoints may carry a branch suffix (BR01-G03A), so allow one.
    const range = part.match(/^([A-Z]+\d+[A-Z]?)\s*[-–—]\s*([A-Z]+\d+[A-Z]?)$/i)
    if (range) {
      // Compare case-insensitively: A14a is spelled with a lowercase suffix.
      const at = (code: string) =>
        all.findIndex((s) => s.code.toUpperCase() === code.toUpperCase())
      const from = at(range[1])
      const to = at(range[2])
      if (from >= 0 && to >= 0) {
        const [lo, hi] = from <= to ? [from, to] : [to, from]
        all.slice(lo, hi + 1).forEach((s) => marked.add(s.code))
        continue
      }
    }
    // Add the registry's own spelling, not the caller's. The spine matches on
    // `station.code`, so an uppercased "A14A" would never light A14a's tick.
    const station = getStation(part, operator)
    if (station) marked.add(station.code)
  }
  return marked
}
