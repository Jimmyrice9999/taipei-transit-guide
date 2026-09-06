/**
 * National bus discovery is an index over dated source snapshots, not a claim
 * that every jurisdiction has a comparable live route catalogue. Keep the
 * source scope and retrieval date next to each count so a refresh can change a
 * number without silently changing what the number means.
 */

import tdxMeta from '../../data/tdx/bus/meta.json' with { type: 'json' }
import hsinchu from '../../data/hsinchu-bus/routes.json' with { type: 'json' }
import taichung from '../../data/taichung-bus/routes.json' with { type: 'json' }
import tainan from '../../data/tainan-bus/routes.json' with { type: 'json' }
import kaohsiung from '../../data/kaohsiung-bus/routes.json' with { type: 'json' }
import nationalSnapshot from '../../data/tdx/bus/national-routes.json' with { type: 'json' }
import { REGIONS } from '@/lib/regions'

export type NationalBusState = 'structured' | 'not-researched'

export type NationalBusJurisdiction = {
  slug: string
  title: string
  titleOriginal: string
  state: NationalBusState
  routeCount: number | null
  sourceRouteRecords: number | null
  sourceVariantRecords: number | null
  countLabel: string
  retrieved: string | null
  scope: string
  sourceLabel: string | null
  sourceUrl: string | null
  busHref: string | null
  note: string
}

type TdxMeta = typeof tdxMeta & {
  cities: Record<string, { datasets?: { routes?: { records?: number } } }>
}

const tdx = tdxMeta as TdxMeta

type NationalSnapshot = typeof nationalSnapshot & {
  jurisdictions: Record<string, {
    sourceCity: string
    cityCode: string
    status: string
    routeRecords: number
    variantRecords: number
    routeIds: number
    sourceUrl: string
  }>
}

const national = nationalSnapshot as NationalSnapshot

const structured: Record<string, Omit<NationalBusJurisdiction, 'slug' | 'title' | 'titleOriginal' | 'sourceRouteRecords' | 'sourceVariantRecords'>> = {
  taipei: {
    state: 'structured',
    routeCount: tdx.cities.Taipei?.datasets?.routes?.records ?? null,
    countLabel: '415 TDX route records',
    retrieved: '2026-08-15',
    scope: 'Taipei City route dataset',
    sourceLabel: 'MOTC TDX',
    sourceUrl: 'https://tdx.transportdata.tw/',
    busHref: '/bus/routes/',
    note: 'The route browser normalises Taipei and New Taipei together; this row retains the source city-record count.',
  },
  'new-taipei': {
    state: 'structured',
    routeCount: tdx.cities.NewTaipei?.datasets?.routes?.records ?? null,
    countLabel: '636 TDX route records',
    retrieved: '2026-08-15',
    scope: 'New Taipei City route dataset',
    sourceLabel: 'MOTC TDX',
    sourceUrl: 'https://tdx.transportdata.tw/',
    busHref: '/bus/routes/new-taipei/',
    note: 'The route browser normalises Taipei and New Taipei together; this row retains the source city-record count.',
  },
  'hsinchu-city': {
    state: 'structured',
    routeCount: hsinchu.coverage.routeCount,
    countLabel: '68 shared Hsinchu route identities',
    retrieved: hsinchu.source.retrieved,
    scope: 'Hsinchu City and County categories in one iBus snapshot',
    sourceLabel: 'Hsinchu iBus',
    sourceUrl: hsinchu.source.portalUrl,
    busHref: '/bus/regional/hsinchu/',
    note: 'The source groups city, county, express, tourist and medical categories; it does not publish a city/county split in this snapshot.',
  },
  'hsinchu-county': {
    state: 'structured',
    routeCount: null,
    countLabel: 'included in shared Hsinchu snapshot',
    retrieved: hsinchu.source.retrieved,
    scope: 'Hsinchu County categories in the shared iBus snapshot',
    sourceLabel: 'Hsinchu iBus',
    sourceUrl: hsinchu.source.portalUrl,
    busHref: '/bus/regional/hsinchu/',
    note: 'No separate county total is inferred: the official portal snapshot groups several Hsinchu jurisdictions and service categories.',
  },
  taichung: {
    state: 'structured',
    routeCount: taichung.coverage.routeCount,
    countLabel: '392 city-bus route identities',
    retrieved: taichung.source.retrieved,
    scope: 'Taichung city-bus route and stop catalogue',
    sourceLabel: 'Taichung City Government dataset',
    sourceUrl: taichung.source.datasetUrl,
    busHref: '/bus/regional/taichung/',
    note: 'The same snapshot separately identifies 26 reservation-based yellow community-bus routes; they are not silently merged into the fixed-route count.',
  },
  tainan: {
    state: 'structured',
    routeCount: tainan.coverage.routeCount,
    countLabel: '165 city-bus route identities',
    retrieved: tainan.source.retrieved,
    scope: 'Tainan city-bus route and ordered-stop snapshot',
    sourceLabel: 'Tainan City Government / TDX',
    sourceUrl: tainan.source.routeUrl,
    busHref: '/bus/regional/tainan/',
    note: 'The separate yellow community-bus table is retained as a community-service layer rather than counted as ordinary fixed-route city bus.',
  },
  kaohsiung: {
    state: 'structured',
    routeCount: kaohsiung.coverage.routeCount,
    countLabel: '316 TDX route identities',
    retrieved: kaohsiung.source.retrieved,
    scope: 'Kaohsiung city-bus route and ordered-stop snapshot',
    sourceLabel: 'Kaohsiung City Government / TDX',
    sourceUrl: kaohsiung.source.routeUrl,
    busHref: '/bus/regional/kaohsiung/',
    note: 'The municipal route index also publishes a separate 197-route count; both scopes remain visible on the regional page.',
  },
}

export function getNationalBusJurisdictions(): NationalBusJurisdiction[] {
  return REGIONS.map((region) => {
    const row = structured[region.slug]
    const snapshot = national.jurisdictions[region.slug]
    if (snapshot) {
      const overlay = row?.busHref && row.busHref !== '/bus/'
        ? ` Editorial overlay: ${row.scope}.`
        : ''
      return {
        slug: region.slug,
        title: region.title,
        titleOriginal: region.titleOriginal,
        state: 'structured',
        routeCount: snapshot.routeRecords,
        sourceRouteRecords: snapshot.routeRecords,
        sourceVariantRecords: snapshot.variantRecords,
        countLabel: `${snapshot.routeRecords.toLocaleString()} TDX route records · ${snapshot.routeIds.toLocaleString()} RouteUIDs · ${snapshot.variantRecords.toLocaleString()} source variants`,
        retrieved: national.fetchedAt.slice(0, 10),
        scope: `${snapshot.sourceCity} TDX Bus/Route/City snapshot`,
        sourceLabel: 'MOTC TDX route snapshot',
        sourceUrl: snapshot.sourceUrl,
        busHref: row?.busHref ?? '/bus/',
        note: `Route records and SubRoutes are retained as separate source measurements; they are not a timeless unique-route total.${overlay}`,
      }
    }
    if (row) return { slug: region.slug, title: region.title, titleOriginal: region.titleOriginal, sourceRouteRecords: row.routeCount, sourceVariantRecords: null, ...row }
    return {
      slug: region.slug,
      title: region.title,
      titleOriginal: region.titleOriginal,
      state: 'not-researched',
      routeCount: null,
      sourceRouteRecords: null,
      sourceVariantRecords: null,
      countLabel: 'not yet researched',
      retrieved: null,
      scope: 'No jurisdiction-specific structured bus snapshot in the committed national layer',
      sourceLabel: null,
      sourceUrl: null,
      busHref: '/bus/',
      note: 'This is a research gap, not evidence that the jurisdiction has no bus service.',
    }
  })
}

export function getNationalBusStructuredSummary() {
  const rows = getNationalBusJurisdictions().filter((row) => row.state === 'structured')
  return {
    jurisdictionCount: rows.length,
    sourceRouteRecords: rows.reduce((sum, row) => sum + (row.sourceRouteRecords ?? 0), 0),
    sourceVariantRecords: rows.reduce((sum, row) => sum + (row.sourceVariantRecords ?? 0), 0),
    routeIdentityCount: rows.reduce((sum, row) => sum + (row.routeCount ?? 0), 0),
    normalizedTdxIdentities: tdxMeta.normalized.routeCount,
    tdxRetrieved: national.fetchedAt.slice(0, 10),
  }
}
