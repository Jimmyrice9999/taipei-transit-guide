/*
 * Snapshot Tainan's official TDX city-bus route, operator and ordered-stop
 * records, and join the city's published annual route-ridership CSV.  The
 * route and stop responses are fetched live from TDX; the Government Data
 * Open Platform identifies TDX as the source for Tainan's bus datasets.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUTPUT = path.join(ROOT, 'data', 'tainan-bus', 'routes.json')
const PUBLIC_OUTPUT = path.join(ROOT, 'public', 'data', 'tainan-bus-routes.json')
const TDX_BASE = 'https://tdx.transportdata.tw'
const TOKEN_URL = `${TDX_BASE}/auth/realms/TDXConnect/protocol/openid-connect/token`
const ROUTE_URL = `${TDX_BASE}/api/basic/v2/Bus/Route/City/Tainan?$format=JSON`
const STOP_URL = `${TDX_BASE}/api/basic/v2/Bus/StopOfRoute/City/Tainan?$format=JSON`
const OPERATOR_URL = `${TDX_BASE}/api/basic/v2/Bus/Operator/City/Tainan?$format=JSON`
const RIDERSHIP_DATASET_URL = 'https://data.gov.tw/dataset/53402'
const RIDERSHIP_CSVS = [
  { yearMinguo: 108, url: 'https://data.tainan.gov.tw/File/ResourceCsvDownload/c9490b1e-4cd9-43f8-b65f-6ba775298890' },
  { yearMinguo: 109, url: 'https://data.tainan.gov.tw/File/ResourceCsvDownload/0f09d15c-58b8-4ec5-908a-8a7f92f8d4a9' },
  { yearMinguo: 110, url: 'https://data.tainan.gov.tw/File/ResourceCsvDownload/3686aa6e-87e9-4e21-998e-1a9c72b357bf' },
  { yearMinguo: 111, url: 'https://data.tainan.gov.tw/File/ResourceCsvDownload/b28ba03f-82d0-41e0-b423-0c9b914cbfcf' },
  { yearMinguo: 112, url: 'https://data.tainan.gov.tw/File/ResourceCsvDownload/fc1b425d-810e-46ba-bdd4-1bb4698285d0' },
  { yearMinguo: 113, url: 'https://data.tainan.gov.tw/File/ResourceCsvDownload/16050b5f-30cd-458d-be8f-4fe172b14fa8' },
  { yearMinguo: 114, url: 'https://data.tainan.gov.tw/File/ResourceCsvDownload/d3e854e6-8c5d-4091-a09c-efccf4fb1c8a' },
]
const TAINAN_PORTAL = 'https://2384.tainan.gov.tw/tnbusweb/Default.aspx'
const TAINAN_YELLOW_URL = 'https://2384.tainan.gov.tw/newtnbusweb/othersInfoDrtsQA.html'
const RETRIEVED = '2026-08-25'

const YELLOW_ROWS = [
  ['白河', ['黃10-1', '黃10-2', '黃12-1'], '中華衛星大車隊'],
  ['白河', ['黃14-1', '黃15'], '台一大車隊'],
  ['玉井、楠西', ['綠20', '綠20-1', '綠21'], '台一大車隊'],
  ['玉井', ['綠31', '綠32'], '中華衛星大車隊'],
  ['左鎮', ['綠28', '綠30', '綠30-1'], '中華衛星大車隊'],
  ['關廟、龍崎', ['紅11', '紅12', '紅13'], '中華衛星大車隊'],
  ['北門、學甲', ['藍4'], '台一大車隊'],
  ['將軍', ['藍14', '藍15'], '台一大車隊'],
  ['七股、安南', ['藍25'], '中華衛星大車隊'],
  ['七股、佳里', ['藍26', '藍27', '藍28'], '台一大車隊'],
  ['官田', ['橘6'], '台一大車隊'],
  ['麻豆、官田、六甲', ['橘10-1'], '中華衛星大車隊'],
  ['玉井、大內', ['橘21'], '台一大車隊'],
  ['南化', ['綠29'], '台一大車隊'],
  ['南化、左鎮', ['綠12-1', '綠12-2'], '中華衛星大車隊'],
  ['六甲、柳營、東山', ['黃2', '黃2-1'], '台一大車隊'],
  ['山上、善化', ['綠2-1'], '台一大車隊'],
  ['西港、佳里', ['藍29'], '台一大車隊'],
  ['西港、七股、佳里', ['藍30'], '中華衛星大車隊'],
  ['新化、龍崎', ['綠14', '綠15'], '台一大車隊'],
  ['新營、後壁、東山、柳營', ['黃21', '黃22'], '台一大車隊'],
  ['新營、鹽水', ['棕2'], '台一大車隊'],
  ['新營', ['棕3-1'], '台一大車隊'],
  ['新營、柳營、下營', ['黃5'], '中華衛星大車隊'],
  ['麻豆、下營、六甲', ['黃20'], '中華衛星大車隊'],
  ['佳里、七股、安南', ['藍25'], '中華衛星大車隊'],
  ['南區、仁德、東區', ['紅5'], '中華衛星大車隊'],
  ['關廟', ['紅15'], '中華衛星大車隊'],
  ['新市、安南', ['綠33'], '中華衛星大車隊'],
  ['新化', ['綠34'], '台一大車隊'],
  ['新營、柳營、東山', ['黃3'], '中華衛星大車隊'],
  ['白河、東山、柳營、六甲、官田', ['黃16'], '台一大車隊'],
  ['柳營、下營', ['黃23'], '中華衛星大車隊'],
  ['善化、大內', ['橘1'], '台一大車隊'],
  ['善化、官田、六甲', ['橘5'], '台一大車隊'],
  ['善化、安定、安南', ['橘7'], '台一大車隊'],
]

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

function parseCsv(input) {
  const rows = []
  let row = []
  let field = ''
  let quoted = false
  for (let index = 0; index < input.length; index += 1) {
    const char = input[index]
    const next = input[index + 1]
    if (char === '"') {
      if (quoted && next === '"') {
        field += '"'
        index += 1
      } else {
        quoted = !quoted
      }
    } else if (char === ',' && !quoted) {
      row.push(field)
      field = ''
    } else if ((char === '\n' || char === '\r') && !quoted) {
      if (char === '\r' && next === '\n') index += 1
      row.push(field)
      if (row.some((value) => text(value))) rows.push(row)
      row = []
      field = ''
    } else {
      field += char
    }
  }
  if (field || row.length) {
    row.push(field)
    rows.push(row)
  }
  return rows
}

function integer(value) {
  const parsed = Number.parseInt(String(value ?? '').replace(/,/g, ''), 10)
  return Number.isFinite(parsed) ? parsed : null
}

async function json(url, tokenValue) {
  const response = await fetch(url, { headers: { authorization: `Bearer ${tokenValue}` } })
  if (!response.ok) throw new Error(`TDX ${response.status} ${response.statusText}: ${url}`)
  return response.json()
}

async function main() {
  const values = readEnv()
  if (!values.TDX_CLIENT_ID || !values.TDX_CLIENT_SECRET) {
    throw new Error('TDX_CLIENT_ID and TDX_CLIENT_SECRET must be set in .env.local to refresh Tainan data')
  }

  const tokenResponse = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
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

  const ridership = []
  for (const resource of RIDERSHIP_CSVS) {
    const ridershipResponse = await fetch(resource.url)
    if (!ridershipResponse.ok) throw new Error(`ridership ${resource.yearMinguo} ${ridershipResponse.status} ${ridershipResponse.statusText}`)
    const ridershipRows = parseCsv(new TextDecoder('utf-8').decode(await ridershipResponse.arrayBuffer()))
    const ridershipHeader = ridershipRows.shift().map(text)
    for (const values of ridershipRows) {
      const row = Object.fromEntries(ridershipHeader.map((key, index) => [key, text(values[index])]))
      const parsed = {
        routeNameZh: row['路線名稱'] || null,
        originDestinationZh: row['起迄站及行經重要站點'] || null,
        categoryZh: row['路線類別'] || null,
        operatorZh: row['業者'] || null,
        yearMinguo: integer(row['年度[民國年]']) ?? resource.yearMinguo,
        monthly: Object.fromEntries(['一月[統計]', '二月[統計]', '三月[統計]', '四月[統計]', '五月[統計]', '六月[統計]', '七月[統計]', '八月[統計]', '九月[統計]', '十月[統計]', '十一月[統計]', '十二月[統計]'].map((key) => [key.slice(0, 2), integer(row[key])])),
        total: integer(row['統計']),
      }
      if (parsed.routeNameZh && parsed.yearMinguo !== null) ridership.push(parsed)
    }
  }

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
    fare: { zh_tw: text(route.TicketPriceDescriptionZh), en: text(route.TicketPriceDescriptionEn) },
    fareBufferZone: { zh_tw: text(route.FareBufferZoneDescriptionZh), en: text(route.FareBufferZoneDescriptionEn) },
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
    email: operator.OperatorEmail || null,
    url: operator.OperatorUrl || null,
    providerId: operator.ProviderID || null,
    updateTime: operator.UpdateTime || null,
  }))

  const yearlyRidership = Object.fromEntries([...new Set(ridership.map((row) => row.yearMinguo))].sort((a, b) => a - b).map((year) => [
    String(year),
    ridership.filter((row) => row.yearMinguo === year).reduce((total, row) => total + (row.total ?? 0), 0),
  ]))
  const yellowRoutes = [...new Map(YELLOW_ROWS.flatMap(([districts, routeNames, operator]) => routeNames.map((name) => [name, { name, districts, operator }]))).values()]
  const output = {
    source: {
      routeUrl: ROUTE_URL,
      stopUrl: STOP_URL,
      operatorUrl: OPERATOR_URL,
      ridershipDatasetUrl: RIDERSHIP_DATASET_URL,
      ridershipCsvUrls: RIDERSHIP_CSVS,
      portalUrl: TAINAN_PORTAL,
      yellowBusUrl: TAINAN_YELLOW_URL,
      retrieved: RETRIEVED,
      scope: 'Tainan City bus route, operator, ordered-stop and annual route-ridership snapshots, with the separately documented 小黃公車 route catalogue.',
    },
    coverage: {
      routeCount: routes.length,
      uniqueRouteNameCount: new Set(routes.map((route) => route.names.zh_tw)).size,
      directionRecordCount: stopDirections.length,
      orderedStopCount: stopDirections.reduce((total, direction) => total + direction.stops.length, 0),
      operatorCount: operators.length,
      ridershipRecordCount: ridership.length,
      ridershipYearsMinguo: Object.keys(yearlyRidership).map(Number),
      ridershipYearlyTotals: yearlyRidership,
      yellowRouteCount: yellowRoutes.length,
      yellowRouteTableRows: YELLOW_ROWS.length,
      note: 'TDX route and stop records are dated by each source UpdateTime; this snapshot was retrieved on 2026-08-25. Ridership rows retain the source 民國年 year labels and monthly/annual values. 小黃公車 route names and service areas are copied from the official Tainan Q&A table; departure times remain in the official portal timetable layer rather than being invented here.',
    },
    operators,
    routes,
    ridership,
    yellowBus: {
      uniqueRouteCount: yellowRoutes.length,
      tableRows: YELLOW_ROWS.map(([districts, routeNames, operator]) => ({ districts, routeNames, operator })),
      routes: yellowRoutes,
    },
  }

  const serialized = `${JSON.stringify(stable(output), null, 2)}\n`
  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true })
  fs.writeFileSync(OUTPUT, serialized)
  fs.mkdirSync(path.dirname(PUBLIC_OUTPUT), { recursive: true })
  fs.writeFileSync(PUBLIC_OUTPUT, serialized)
  console.log(`tainan-bus: ${routes.length} routes, ${stopDirections.length} direction records, ${output.coverage.orderedStopCount} ordered stops, ${operators.length} operators`)
  console.log(`tainan-bus: ${ridership.length} ridership rows across ${Object.keys(yearlyRidership).length} Minguo years; ${yellowRoutes.length} unique 小黃公車 routes`)
  console.log(`tainan-bus: wrote ${path.relative(ROOT, OUTPUT)} and ${path.relative(ROOT, PUBLIC_OUTPUT)}`)
}

main().catch((error) => {
  console.error(`tainan-bus failed: ${error.message}`)
  process.exit(1)
})
