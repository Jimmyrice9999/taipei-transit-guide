/**
 * Fetch the national TDX bus route discovery layer.
 *
 * This intentionally fetches Route/City only.  Stop sequences, shapes and
 * operators remain separate datasets because jurisdictions publish them at
 * different boundaries and a route catalogue is useful before a complete
 * stop normalisation exists.  The output is a dated discovery snapshot, not
 * a live departure board and not a claim that every record is a unique route.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'data', 'tdx', 'bus', 'national-routes.json')
const API = 'https://tdx.transportdata.tw/api/basic/v2'
const TOKEN = 'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token'
const PAGE_SIZE = 1000
const REQUEST_DELAY_MS = 12000
const MAX_RETRIES = 6

const JURISDICTIONS = [
  ['Keelung', 'KEE', 'keelung'],
  ['Taipei', 'TPE', 'taipei'],
  ['NewTaipei', 'NWT', 'new-taipei'],
  ['Taoyuan', 'TAO', 'taoyuan'],
  ['Hsinchu', 'HSZ', 'hsinchu-city'],
  ['HsinchuCounty', 'HSQ', 'hsinchu-county'],
  ['MiaoliCounty', 'MIA', 'miaoli'],
  ['Taichung', 'TXG', 'taichung'],
  ['ChanghuaCounty', 'CHA', 'changhua'],
  ['NantouCounty', 'NAN', 'nantou'],
  ['YunlinCounty', 'YUN', 'yunlin'],
  ['Chiayi', 'CYI', 'chiayi-city'],
  ['ChiayiCounty', 'CYQ', 'chiayi-county'],
  ['Tainan', 'TNN', 'tainan'],
  ['Kaohsiung', 'KHH', 'kaohsiung'],
  ['PingtungCounty', 'PIF', 'pingtung'],
  ['YilanCounty', 'ILA', 'yilan'],
  ['HualienCounty', 'HUN', 'hualien'],
  ['TaitungCounty', 'TTT', 'taitung'],
  ['PenghuCounty', 'PEN', 'penghu'],
  ['KinmenCounty', 'KIN', 'kinmen'],
  ['LienchiangCounty', 'LIE', 'lienchiang'],
].map(([city, code, slug]) => ({ city, code, slug }))

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function loadEnv() {
  const file = path.join(ROOT, '.env.local')
  const values = { ...process.env }
  if (!fs.existsSync(file)) return values
  for (const line of fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, '').split(/\r?\n/)) {
    const match = line.match(/^\s*(?:export\s+)?([A-Za-z_0-9]+)\s*=\s*(.*?)\s*$/)
    if (match && !line.trimStart().startsWith('#')) values[match[1]] = match[2].replace(/^['"]|['"]$/g, '')
  }
  return values
}

async function getToken() {
  const values = loadEnv()
  if (!values.TDX_CLIENT_ID || !values.TDX_CLIENT_SECRET) {
    throw new Error('TDX_CLIENT_ID and TDX_CLIENT_SECRET are required in .env.local')
  }
  const response = await fetch(TOKEN, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: values.TDX_CLIENT_ID,
      client_secret: values.TDX_CLIENT_SECRET,
    }),
  })
  if (!response.ok) throw new Error(`TDX token request failed: ${response.status} ${(await response.text()).slice(0, 240)}`)
  return response.json()
}

async function request(token, url, stats) {
  for (let attempt = 0; ; attempt += 1) {
    const response = await fetch(url, { headers: { authorization: `Bearer ${token.access_token}`, 'accept-encoding': 'gzip' } })
    if (response.status !== 429) {
      if (!response.ok) throw new Error(`TDX request failed: ${response.status} ${response.statusText}\n${url}\n${(await response.text()).slice(0, 240)}`)
      return response.json()
    }
    stats.rateLimits += 1
    if (attempt >= MAX_RETRIES) throw new Error(`TDX rate limited after ${MAX_RETRIES} retries: ${url}`)
    const retryAfter = Number(response.headers.get('retry-after'))
    const wait = Number.isFinite(retryAfter) && retryAfter > 0
      ? retryAfter * 1000
      : REQUEST_DELAY_MS * (attempt + 2)
    console.log(`  429 for ${url}; waiting ${Math.round(wait / 1000)}s`)
    await sleep(wait)
  }
}

function text(value) {
  return typeof value === 'string' ? value.trim() : value == null ? '' : String(value)
}

function names(value) {
  return {
    zh: text(value?.Zh_tw ?? value?.Zh ?? value?.zh_tw),
    en: text(value?.En ?? value?.en),
  }
}

function normalizeRoute(row, jurisdiction) {
  const operatorNames = (row.Operators ?? [])
    .map((operator) => {
      const localized = names(operator.OperatorName)
      return localized.en || localized.zh
    })
    .filter(Boolean)
  const operatorIds = (row.Operators ?? []).map((operator) => text(operator.OperatorID)).filter(Boolean)
  return {
    id: `${jurisdiction.code}:${text(row.RouteUID)}`,
    jurisdiction: jurisdiction.slug,
    sourceCity: jurisdiction.city,
    routeUid: text(row.RouteUID),
    routeId: text(row.RouteID),
    name: names(row.RouteName),
    departure: { zh: text(row.DepartureStopNameZh), en: text(row.DepartureStopNameEn) },
    destination: { zh: text(row.DestinationStopNameZh), en: text(row.DestinationStopNameEn) },
    hasSubRoutes: Boolean(row.HasSubRoutes),
    subRouteCount: Array.isArray(row.SubRoutes) ? row.SubRoutes.length : null,
    busRouteType: row.BusRouteType ?? null,
    operatorIds,
    operatorNames,
    sourceUpdated: text(row.UpdateTime) || null,
  }
}

function stable(value) {
  if (Array.isArray(value)) return value.map(stable)
  if (value && typeof value === 'object') return Object.fromEntries(Object.keys(value).sort().map((key) => [key, stable(value[key])]))
  return value
}

async function fetchCity(token, jurisdiction, stats) {
  const records = []
  for (let skip = 0; ; skip += PAGE_SIZE) {
    const params = new URLSearchParams({ $format: 'JSON', $top: String(PAGE_SIZE), $skip: String(skip) })
    const url = `${API}/Bus/Route/City/${jurisdiction.city}?${params}`
    const page = await request(token, url, stats)
    const rows = Array.isArray(page) ? page : []
    records.push(...rows.map((row) => normalizeRoute(row, jurisdiction)))
    if (rows.length < PAGE_SIZE) break
    await sleep(REQUEST_DELAY_MS)
  }
  return records
}

async function main() {
  const fetchedAt = new Date().toISOString()
  const token = await getToken()
  const stats = { rateLimits: 0 }
  const routes = []
  const jurisdictions = {}

  for (const jurisdiction of JURISDICTIONS) {
    process.stdout.write(`${jurisdiction.city} `)
    const start = routes.length
    const records = await fetchCity(token, jurisdiction, stats)
    routes.push(...records)
    jurisdictions[jurisdiction.slug] = {
      sourceCity: jurisdiction.city,
      cityCode: jurisdiction.code,
      status: 'structured',
      routeRecords: records.length,
      variantRecords: records.reduce((sum, route) => sum + (route.subRouteCount ?? 0), 0),
      routeIds: new Set(records.map((route) => route.routeUid)).size,
      sourceUrl: `${API}/Bus/Route/City/${jurisdiction.city}`,
    }
    console.log(`${routes.length - start} route records`)
    await sleep(REQUEST_DELAY_MS)
  }

  const output = stable({
    source: 'Taiwan MOTC TDX (Transport Data eXchange)',
    sourceUrl: 'https://tdx.transportdata.tw/',
    apiBase: API,
    dataset: 'Bus/Route/City',
    fetchedAt,
    definitions: {
      routeRecords: 'One TDX Route object returned for a jurisdiction, identified by city code and RouteUID.',
      routeIds: 'Distinct RouteUID values in the fetched jurisdiction snapshot.',
      variantRecords: 'Sum of the source SubRoutes array lengths where TDX supplied that array; not a timeless unique-route total.',
      stopSequences: 'Not fetched by this route-only layer; a separate jurisdictional stop normalisation is required.',
    },
    requestDelayMs: REQUEST_DELAY_MS,
    rateLimitsObserved: stats.rateLimits,
    jurisdictions,
    routes: routes.sort((a, b) => a.id.localeCompare(b.id)),
  })
  fs.mkdirSync(path.dirname(OUT), { recursive: true })
  fs.writeFileSync(OUT, JSON.stringify(output, null, 2) + '\n')
  console.log(`wrote ${routes.length} route records across ${Object.keys(jurisdictions).length} jurisdictions`)
  console.log(`rate limits observed: ${stats.rateLimits}`)
}

main().catch((error) => {
  console.error(`national bus discovery failed: ${error.message}`)
  process.exit(1)
})
