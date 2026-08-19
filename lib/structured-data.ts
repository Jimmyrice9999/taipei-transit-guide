/**
 * Builders for the JSON-LD each page type emits.
 *
 * Kept out of the components so the shape of a claim is written once and can be
 * tested. See components/JsonLd.tsx for which types are used and why the line
 * pages deliberately get no transit-specific type.
 */

import { SITE_NAME, SITE_DESCRIPTION, absoluteUrl } from './site.ts'
import { getDistrictEn } from './districts.ts'
import type { Station } from './stations.ts'
import type { Line } from './lines.ts'

type Node = Record<string, unknown>

/** The site itself. Emitted once, from the root layout. */
export function websiteSchema(): Node {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: absoluteUrl('/'),
    description: SITE_DESCRIPTION,
    inLanguage: 'en',
    // Independent and non-commercial, and the site says so in the footer and on
    // /about. Declaring a publisher here keeps that consistent for machines.
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: absoluteUrl('/'),
    },
  }
}

/** Where a page sits in the site. Well supported and genuinely true here. */
export function breadcrumbSchema(trail: { name: string; path: string }[]): Node {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  }
}

/**
 * A station, as a place.
 *
 * `SubwayStation` rather than `TrainStation`: Taipei Metro is a metro, and the
 * subway type is the one search engines associate with urban rail. That the
 * Wenhu Line happens to be an elevated rubber-tyred people mover does not make
 * it a main-line railway station.
 *
 * Only fields the data actually contains are emitted. A `geo` block with null
 * coordinates, or an `address` that is an empty string, is worse than the field
 * being absent — it asserts a value the site does not have.
 */
export function stationSchema(station: Station, line: Line, position: number, total: number): Node {
  const node: Node = {
    '@context': 'https://schema.org',
    '@type': 'SubwayStation',
    name: station.name,
    identifier: station.code,
    url: absoluteUrl(`/rail/metro/stations/${station.code.toLowerCase()}/`),
    description: `Stop ${position} of ${total} on Taipei Metro's ${line.name} Line.`,
    publicAccess: true,
  }

  if (station.nameZh) node.alternateName = station.nameZh

  if (station.lat !== null && station.lon !== null) {
    node.geo = {
      '@type': 'GeoCoordinates',
      latitude: station.lat,
      longitude: station.lon,
    }
  }

  if (station.address) {
    node.address = {
      '@type': 'PostalAddress',
      streetAddress: station.address,
      // English preferred for a schema.org locality; falls back to the
      // Chinese name rather than an unmapped district going missing.
      addressLocality: station.district
        ? (getDistrictEn(station.district) ?? station.district)
        : undefined,
      addressCountry: 'TW',
    }
  }

  // The operator is a real, checkable fact from the source data.
  node.containedInPlace = {
    '@type': 'Place',
    name: 'Taipei',
    address: { '@type': 'PostalAddress', addressLocality: 'Taipei', addressCountry: 'TW' },
  }

  return node
}

/** A written page about a subject. */
export function articleSchema({
  title,
  description,
  path,
  updated,
}: {
  title: string
  description: string
  path: string
  updated?: string
}): Node {
  const node: Node = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    inLanguage: 'en',
    isAccessibleForFree: true,
    publisher: { '@type': 'Organization', name: SITE_NAME, url: absoluteUrl('/') },
  }

  if (description) node.description = description
  if (updated) node.dateModified = updated

  return node
}

/**
 * A published dataset.
 *
 * This is the one piece of markup on the site with a real chance of doing
 * something: `Dataset` drives dataset search, and a structured English-language
 * record of Taipei's station data is a genuinely findable thing. The licence and
 * the upstream creator are both stated, because the data is MOTC's, not ours.
 */
export function datasetSchema({
  name,
  description,
  path,
  downloadPath,
  encodingFormat = 'application/json',
  keywords,
}: {
  name: string
  description: string
  path: string
  downloadPath?: string
  encodingFormat?: string
  keywords: string[]
}): Node {
  const node: Node = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name,
    description,
    url: absoluteUrl(path),
    inLanguage: ['en', 'zh-Hant'],
    keywords,
    isAccessibleForFree: true,
    license: 'https://data.gov.tw/licenses',
    creator: {
      '@type': 'GovernmentOrganization',
      name: 'Ministry of Transportation and Communications, Taiwan',
      alternateName: '交通部',
      url: 'https://tdx.transportdata.tw/',
    },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: absoluteUrl('/') },
    spatialCoverage: {
      '@type': 'Place',
      name: 'Taipei metropolitan area, Taiwan',
    },
  }

  if (downloadPath) {
    node.distribution = [
      {
        '@type': 'DataDownload',
        encodingFormat,
        contentUrl: absoluteUrl(downloadPath),
      },
    ]
  }

  return node
}
