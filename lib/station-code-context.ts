/**
 * The code-shaped strings that are not station identifiers in a given page
 * context.
 *
 * A tokenizer only sees characters. This module supplies the subject context
 * that the page loader knows: a bus route registry, a bus-model page, or a
 * rail page whose source is discussing a planned/historical numbering scheme.
 * That keeps the station-code proofreader useful without requiring authors to
 * hide source wording in inline code.
 */

import { getBusRoutes } from './bus/routes.ts'
import { getStation } from './stations.ts'

const CODE_SHAPE = /^([A-Za-z]{1,3}\d{1,2})/

function routeCode(value: string): string | null {
  const match = value.trim().match(CODE_SHAPE)
  return match ? `${match[1]}${match[2] ?? ''}`.toUpperCase() : null
}

/** Codes used as bus route identities in the committed route registry. */
export const BUS_ROUTE_CODES = new Set(
  getBusRoutes()
    .flatMap((route) => [
      route.names.en,
      route.names.zh_tw,
      ...route.aliases.map((alias) => alias.value),
    ])
    .map(routeCode)
    .filter((code): code is string => Boolean(code)),
)

function routeIdentityCodes(slug: string): Set<string> {
  const canonicalSlug = slug.split('/').at(-1) ?? slug
  const route = getBusRoutes().find((candidate) => candidate.canonicalSlug === canonicalSlug)
  if (!route) return new Set()
  return new Set(
    [route.names.en, route.names.zh_tw, ...route.aliases.map((alias) => alias.value)]
      .map(routeCode)
      .filter((code): code is string => Boolean(code)),
  )
}

export type StationCodeContext = {
  /** A whole page type, such as bus vehicle models, is not station prose. */
  stationCodes: boolean
  /** Exact code bases that belong to another numbering scheme on this page. */
  ignoreCodes: ReadonlySet<string>
}

/**
 * Resolve the badge context once for a content page and reuse it for both the
 * Markdown body and frontmatter values.
 */
export function getStationCodeContext(
  section: string,
  type: string,
  slug: string,
  system = '',
  operator = '',
  line = '',
): StationCodeContext {
  if (section === 'bus' && type === 'models') {
    return { stationCodes: false, ignoreCodes: new Set() }
  }

  const ignored = new Set<string>()

  // Bus pages can mention the same code as a real station (K1 is the clearest
  // example). The route registry is authoritative for the bus meaning, so a
  // route identity is plain text in bus context while confirmed rail joins
  // such as BL21 remain badges.
  if (section !== 'rail') {
    for (const code of BUS_ROUTE_CODES) {
      // Never hide a registered rail station just because a bus happens to
      // use the same identifier. Unknown bus-only identities are the false
      // positives this context is meant to remove.
      if (!getStation(code)) ignored.add(code)
    }
    if (section === 'bus' && type === 'routes') {
      for (const code of routeIdentityCodes(slug)) ignored.add(code)
    }
  }

  // These are explicit source-numbering contexts, not omissions from the
  // current station registry. They must remain readable but must not become a
  // badge for a different operator's current station.
  if (system === 'krtc' || operator === 'KRTC') {
    for (let number = 1; number <= 23; number += 1) ignored.add(`Y${number}`)
  }
  if ((system === 'tymc' || operator === 'TYMC') && line === 'G') {
    ignored.add('G25')
    ignored.add('G31')
    ignored.add('G32')
  }
  if (section === 'rail' && type === 'projects' && slug === 'taichung-purple-line') {
    ignored.add('G1')
  }
  if (section === 'ticketing' && type === 'guides' && slug === 'conflicts-index') {
    ignored.add('A30')
  }
  if (section === 'statistics' && type === 'national' && slug === 'traffic-safety') {
    return { stationCodes: false, ignoreCodes: new Set() }
  }

  return { stationCodes: true, ignoreCodes: ignored }
}
