/*
 * Snapshot Kaohsiung's official TDX city-bus route, operator and ordered-stop
 * records. The municipal route index and fare/service pages remain the prose
 * boundary; this file preserves the structured transport snapshot only.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUTPUT = path.join(ROOT, 'data', 'kaohsiung-bus', 'routes.json')
const PUBLIC_OUTPUT = path.join(ROOT, 'public', 'data', 'kaohsiung-bus-routes.json')
const TDX_BASE = 'https://tdx.transportdata.tw'
const TOKEN_URL = `${TDX_BASE}/auth/realms/TDXConnect/protocol/openid-connect/token`
const ROUTE_URL = `${TDX_BASE}/api/basic/v2/Bus/Route/City/Kaohsiung?$format=JSON`
const STOP_URL = `${TDX_BASE}/api/basic/v2/Bus/StopOfRoute/City/Kaohsiung?$format=JSON`
const OPERATOR_URL = `${TDX_BASE}/api/basic/v2/Bus/Operator/City/Kaohsiung?$format=JSON`
const RETRIEVED = '2026-08-25'

function readEnv() {
  const values = { ...process.env }
  const envFile = path.join(ROOT, '.env.local')
  if (!fs.existsSync(envFile)) return values
  for (const line of fs.readFileSync(envFile, 'utf8').replace(/^\uFEFF/, '').split(/\r?\n/)) {
    const match = line.match(/^\s*(?:export\s+)?([A-Za-z_0-9]+)\s*=\s*(.*?)\s*$/)
    if (match && !line.trimStart().startsWith('#')) values[match[1]] = match[2].replace(/^["']|["']$/g, '')
  }
  return values
}

function text(value) {
  return typeof value === 'string' ? value.trim() : ''
}

function names(value) {
  return { zh_tw: text(value?.Zh_tw), en: text(value?.En) }
}

function stable(value) {
  if (Array.isArray(value)) return value.map(stable)
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, stable(value[key])]))
  }
  return value
}

async function json(url, token) {
  let lastError = null
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(url, { headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' } })
      if (!response.ok) throw new Error(`TDX ${response.status} ${response.statusText}: ${url}`)
      return response.json()
    } catch (error) {
      lastError = error
      if (attempt < 3) await new Promise((resolve) => setTimeout(resolve, 300 * attempt))
    }
  }
  throw lastError
}

async function main() {
  const values = readEnv()
  if (!values.TDX_CLIENT_ID || !values.TDX_CLIENT_SECRET) {
    throw new Error('TDX_CLIENT_ID and TDX_CLIENT_SECRET must be set in .env.local to refresh Kaohsiung data')
  }

  const tokenResponse = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded', accept: 'application/json' },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: values.TDX_CLIENT_ID,
      client_secret: values.TDX_CLIENT_SECRET,
    }),
  })
  if (!tokenResponse.ok) throw new Error(`TDX token ${tokenResponse.status} ${tokenResponse.statusText}`)
  const token = await tokenResponse.json()
  const [rawRoutes, rawStops, rawOperators] = await Promise.all([
    json(ROUTE_URL, token.access_token),
    json(STOP_URL, token.access_token),
    json(OPERATOR_URL, token.access_token),
  ])

  const stopDirections = rawStops.map((row) => ({
    routeUid: row.RouteUID,
    routeId: row.RouteID,
    routeName: names(row.RouteName),
    subRouteUid: row.SubRouteUID,
    subRouteId: row.SubRouteID,
    subRouteName: names(row.SubRouteName),
    direction: row.Direction,
    updateTime: row.UpdateTime || null,
    versionId: row.VersionID ?? null,
    stops: (row.Stops ?? []).map((stop) => ({
      stopUid: stop.StopUID,
      stopId: stop.StopID,
      name: names(stop.StopName),
      sequence: stop.StopSequence,
      boarding: stop.StopBoarding ?? null,
      position: {
        lat: Number(stop.StopPosition?.PositionLat),
        lon: Number(stop.StopPosition?.PositionLon),
        geoHash: stop.StopPosition?.GeoHash || null,
      },
    })),
  }))

  const routes = rawRoutes.map((route) => ({
    routeUid: route.RouteUID,
    routeId: route.RouteID,
    names: names(route.RouteName),
    departure: { zh_tw: text(route.DepartureStopNameZh), en: text(route.DepartureStopNameEn) },
    destination: { zh_tw: text(route.DestinationStopNameZh), en: text(route.DestinationStopNameEn) },
    operators: (route.Operators ?? []).map((operator) => ({
      id: operator.OperatorID,
      name: names(operator.OperatorName),
      number: operator.OperatorNo || null,
    })),
    subRoutes: (route.SubRoutes ?? []).map((subRoute) => ({
      uid: subRoute.SubRouteUID,
      id: subRoute.SubRouteID,
      name: names(subRoute.SubRouteName),
      direction: subRoute.Direction,
      operatorIds: subRoute.OperatorIDs ?? [],
    })),
    routeMapUrl: route.RouteMapImageUrl || null,
    busRouteType: route.BusRouteType ?? null,
    updateTime: route.UpdateTime || null,
    versionId: route.VersionID ?? null,
    directions: stopDirections.filter((direction) => direction.routeUid === route.RouteUID),
  }))

  const operators = (Array.isArray(rawOperators) ? rawOperators : rawOperators.data ?? []).map((operator) => ({
    id: operator.OperatorID,
    name: names(operator.OperatorName),
    phone: operator.OperatorPhone || null,
    url: operator.OperatorUrl || null,
    providerId: operator.ProviderID || null,
    operatorNo: operator.OperatorNo || null,
    updateTime: operator.UpdateTime || null,
  }))

  const coverage = {
    routeCount: routes.length,
    uniqueRouteNameCount: new Set(routes.map((route) => route.names.zh_tw)).size,
    directionRecordCount: stopDirections.length,
    orderedStopCount: stopDirections.reduce((total, direction) => total + direction.stops.length, 0),
    operatorCount: operators.length,
    routeUpdateTimes: [...new Set(routes.map((route) => route.updateTime).filter(Boolean))].sort(),
    officialRouteIndexCount: 197,
    ridership: {
      status: 'TBC',
      datasetUrl: 'https://data.gov.tw/dataset/159665',
      note: 'The official catalogue was read, but its linked JSON and CSV resources failed direct fetch on 2026-08-25; no ridership value is copied into this snapshot.',
    },
  }

  const output = {
    source: {
      routeUrl: ROUTE_URL,
      stopUrl: STOP_URL,
      operatorUrl: OPERATOR_URL,
      municipalRouteIndexUrl: 'https://www.tbkc.gov.tw/Service/PublicTransport/NewBusRoute',
      municipalOperatorIndexUrl: 'https://www.tbkc.gov.tw/Service/PublicTransport/BusRouterTrader',
      fareUrl: 'https://www.tbkc.gov.tw/Service/PublicTransport/gogo123?id=5599cc66-4ca8-4d82-9532-9f123a361b59',
      fareQaUrl: 'https://www.tbkc.gov.tw/Service/PublicTransport/gogo123?id=cb7f57d2-317a-4172-8a92-d01491de5057',
      yellowBusUrl: 'https://www.tbkc.gov.tw/Service/PublicTransport/Taxis?id=db7194a9-88c3-4277-9343-6e080d7493e8',
      accessibilityUrl: 'https://www.tbkc.gov.tw/Service/PublicTransport/Accessibility',
      ridershipDatasetUrl: 'https://data.gov.tw/dataset/159665',
      retrieved: RETRIEVED,
      scope: 'Kaohsiung city-bus route, operator and ordered-stop snapshot from TDX, with municipal service and fare boundaries retained separately.',
    },
    coverage,
    operators,
    routes,
  }

  const serialized = `${JSON.stringify(stable(output), null, 2)}\n`
  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true })
  fs.writeFileSync(OUTPUT, serialized)
  fs.mkdirSync(path.dirname(PUBLIC_OUTPUT), { recursive: true })
  fs.writeFileSync(PUBLIC_OUTPUT, serialized)
  console.log(`kaohsiung-bus: ${routes.length} routes, ${stopDirections.length} direction records, ${coverage.orderedStopCount} ordered stops, ${operators.length} operators`)
  console.log(`kaohsiung-bus: wrote ${path.relative(ROOT, OUTPUT)} and ${path.relative(ROOT, PUBLIC_OUTPUT)}`)
}

main().catch((error) => {
  console.error(`kaohsiung-bus failed: ${error.message}`)
  process.exit(1)
})
