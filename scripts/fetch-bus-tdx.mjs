/** Fetch and normalize static TDX bus data for Taipei and New Taipei. */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'data', 'tdx', 'bus')
const API = 'https://tdx.transportdata.tw/api/basic/v2'
const TOKEN = 'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token'
const DELAY = 12000
const MAX_PAGES = 100
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const CITIES = [
  { name: 'Taipei', code: 'TPE' },
  { name: 'NewTaipei', code: 'NWT' },
]
const DATASETS = [
  { key: 'routes', endpoint: 'Route', pageSize: 1000, note: 'route families, route variants and operator relations' },
  { key: 'stops', endpoint: 'Stop', pageSize: 1000, note: 'stop names, coordinates, addresses and update times' },
  { key: 'stop-sequences', endpoint: 'StopOfRoute', pageSize: 1000, note: 'ordered stops for each route variant and direction' },
  { key: 'shapes', endpoint: 'Shape', pageSize: 100, note: 'route geometry records' },
  { key: 'operators', endpoint: 'Operator', pageSize: 1000, note: 'operator identity and contact fields' },
]

const COLOURS = { 紅: 'colour-red', 藍: 'colour-blue', 綠: 'colour-green', 棕: 'colour-brown', 橘: 'colour-orange', 黃: 'colour-yellow' }

function env() {
  const result = { ...process.env }
  const file = path.join(ROOT, '.env.local')
  if (!fs.existsSync(file)) return result
  for (const line of fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, '').split(/\r?\n/)) {
    const match = line.match(/^\s*(?:export\s+)?([A-Za-z_0-9]+)\s*=\s*(.*?)\s*$/)
    if (match && !line.trimStart().startsWith('#')) result[match[1]] = match[2].replace(/^["']|["']$/g, '')
  }
  return result
}

async function token() {
  const values = env()
  if (!values.TDX_CLIENT_ID || !values.TDX_CLIENT_SECRET) throw new Error('TDX_CLIENT_ID and TDX_CLIENT_SECRET are required in .env.local')
  const response = await fetch(TOKEN, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'client_credentials', client_id: values.TDX_CLIENT_ID, client_secret: values.TDX_CLIENT_SECRET }),
  })
  const body = await response.text()
  if (!response.ok) throw new Error(`TDX token request failed: ${response.status} ${body.slice(0, 300)}`)
  return JSON.parse(body)
}

async function get(tokenValue, url) {
  for (let attempt = 0; ; attempt += 1) {
    const response = await fetch(url, { headers: { authorization: `Bearer ${tokenValue.access_token}`, 'accept-encoding': 'gzip' } })
    if (response.status !== 429) {
      if (!response.ok) throw new Error(`TDX request failed: ${response.status} ${response.statusText}\n  ${url}\n  ${(await response.text()).slice(0, 300)}`)
      return response.json()
    }
    if (attempt >= 6) throw new Error(`TDX rate limited after 6 retries: ${url}`)
    const retry = Number(response.headers.get('retry-after'))
    const wait = Number.isFinite(retry) && retry > 0 ? retry * 1000 : DELAY * (attempt + 1)
    console.log(`  429; waiting ${Math.round(wait / 1000)}s`)
    await sleep(wait)
  }
}

function rows(body) {
  if (Array.isArray(body)) return body
  if (Array.isArray(body.data)) return body.data
  if (Array.isArray(body.Data)) return body.Data
  return []
}

async function fetchDataset(tokenValue, city, dataset) {
  const result = []
  for (let page = 0; page < MAX_PAGES; page += 1) {
    const skip = page * dataset.pageSize
    const params = new URLSearchParams({ $format: 'JSON', $top: String(dataset.pageSize), $skip: String(skip) })
    const url = `${API}/Bus/${dataset.endpoint}/City/${city.name}?${params}`
    console.log(`  ${city.name}/${dataset.key} skip=${skip}`)
    const pageRows = rows(await get(tokenValue, url))
    result.push(...pageRows)
    console.log(`    ${pageRows.length} records`)
    if (pageRows.length < dataset.pageSize) break
    await sleep(DELAY)
    if (page === MAX_PAGES - 1) throw new Error(`${city.name}/${dataset.key} exceeded ${MAX_PAGES} pages`)
  }
  return result
}

function stable(value) {
  if (Array.isArray(value)) return value.map(stable)
  if (value && typeof value === 'object') return Object.fromEntries(Object.keys(value).sort().map((key) => [key, stable(value[key])]))
  return value
}
function write(name, value) {
  fs.mkdirSync(OUT, { recursive: true })
  fs.writeFileSync(path.join(OUT, name), `${JSON.stringify(stable(value), null, 2)}\n`)
}
function text(value) { return typeof value === 'string' ? value.trim() : '' }
function names(value) { return { zh_tw: text(value?.Zh_tw), en: text(value?.En) } }
function hash(value) {
  let h = 2166136261
  for (const char of value) { h ^= char.codePointAt(0); h = Math.imul(h, 16777619) }
  return (h >>> 0).toString(36)
}
function slug(value) {
  let result = text(value)
  for (const [prefix, replacement] of Object.entries({ 紅: 'red-', 藍: 'blue-', 綠: 'green-', 棕: 'brown-', 橘: 'orange-', 黃: 'yellow-', 幹線: 'trunk-', 市民小巴: 'minibus-', 小巴: 'minibus-' })) result = result.replace(new RegExp(`^${prefix}`), replacement)
  result = result.replace(/^小(?=\d)/, 'minibus-').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^A-Za-z0-9]+/g, '-').replace(/^-+|-+$/g, '').toLowerCase()
  return result || `route-${hash(text(value))}`
}
function sourceKey(city, row) { return `${city.code}:${text(row.RouteUID)}` }
function operatorKey(row) { return text(row?.OperatorID) || text(row?.OperatorCode) || text(row?.OperatorNo) }

function group(row, cityNames) {
  const routeId = text(row.RouteID)
  const zh = text(row.RouteName?.Zh_tw ?? row.RouteName?.zh_tw)
  const en = text(row.RouteName?.En ?? row.RouteName?.en)
  const serviceName = zh || en || routeId
  const identity = `${serviceName} ${en}`.trim()
  const colour = identity.match(/^\s*(紅|藍|綠|棕|橘|黃)/)?.[1]
  if (colour) return COLOURS[colour]
  if (/^\s*(市民小巴|小巴|小\s*\d)/.test(identity)) return 'minibus'
  if (/幹線|trunk/i.test(identity)) return 'trunk'
  if (cityNames.length && cityNames.every((city) => city === 'NewTaipei')) return 'new-taipei'
  const number = serviceName.match(/^\s*(\d{1,3})(?:\D|$)/)?.[1]
  if (number) {
    const value = Number(number)
    if (value <= 99) return 'series-0-99'
    if (value >= 200 && value < 300) return 'series-200s'
    if (value >= 300 && value < 400) return 'series-300s'
    if (value >= 500 && value < 600) return 'series-500s'
    if (value >= 600 && value < 700) return 'series-600s'
    if (value >= 700 && value < 800) return 'series-700s'
    return 'series-other'
  }
  return 'unclassified'
}

function railName(value) { return text(value).replace(/捷運/g, '').replace(/MRT/gi, '').replace(/站$/g, '').replace(/[\s()（）·•・-]/g, '').toLowerCase() }
function railIndex() {
  const index = new Map()
  for (const operator of ['TRTC', 'NTMC', 'TYMC', 'NTDLRT', 'NTALRT']) {
    const file = path.join(ROOT, 'data', 'tdx', operator, 'station.json')
    if (!fs.existsSync(file)) continue
    for (const row of JSON.parse(fs.readFileSync(file, 'utf8'))) {
      const code = text(row.StationID)
      const lineCode = code.match(/^[A-Z]+/)?.[0]
      if (!code || !lineCode) continue
      for (const value of [row.StationName?.Zh_tw, row.StationName?.En]) {
        const key = railName(value)
        if (!key) continue
        if (!index.has(key)) index.set(key, [])
        index.get(key).push({ code, lineCode })
      }
    }
  }
  return index
}

function normalize(all) {
  const routes = new Map()
  const sourceRoutes = new Map()
  const aliases = (record) => record._aliases
  for (const city of CITIES) for (const row of all[city.name].routes) {
    const routeNames = names(row.RouteName)
    const identity = `${text(row.RouteID)}\u0000${routeNames.zh_tw}\u0000${routeNames.en}`
    let record = routes.get(identity)
    if (!record) {
      record = {
        id: `bus-${slug(row.RouteID || routeNames.en || routeNames.zh_tw)}-${hash(identity)}`,
        canonicalSlug: slug(routeNames.zh_tw || routeNames.en || row.RouteID),
        group: 'unclassified', routeId: text(row.RouteID), names: routeNames,
        sourceCities: [], sourceUids: [], authorityIds: [], providerIds: [], operatorIds: [],
        subRoutes: [], stopSequenceIds: [], shapeIds: [], railJoins: [], aliases: [], sourceUpdated: [],
        _aliases: new Set(), _operators: new Set(), _subRoutes: new Set(),
      }
      routes.set(identity, record)
    }
    if (!record.sourceCities.includes(city.name)) record.sourceCities.push(city.name)
    for (const [field, target] of [['RouteUID', 'sourceUids'], ['AuthorityID', 'authorityIds'], ['ProviderID', 'providerIds']]) if (text(row[field]) && !record[target].includes(text(row[field]))) record[target].push(text(row[field]))
    if (text(row.UpdateTime) && !record.sourceUpdated.includes(text(row.UpdateTime))) record.sourceUpdated.push(text(row.UpdateTime))
    for (const [value, kind] of [[row.RouteUID, 'route-uid'], [row.RouteID, 'route-id'], [row.RouteName?.Zh_tw, 'route-name-zh'], [row.RouteName?.En, 'route-name-en']]) {
      const key = `${kind}\u0000${text(value)}\u0000${city.name}`
      if (text(value) && !record._aliases.has(key)) { record._aliases.add(key); record.aliases.push({ value: text(value), kind, city: city.name }) }
    }
    for (const operator of row.Operators ?? []) if (operatorKey(operator)) record._operators.add(operatorKey(operator))
    for (const sub of row.SubRoutes ?? []) {
      const id = text(sub.SubRouteUID) || `${text(row.RouteUID)}:${sub.Direction}`
      if (record._subRoutes.has(id)) continue
      record._subRoutes.add(id)
      record.subRoutes.push({ id, subRouteId: text(sub.SubRouteID), names: names(sub.SubRouteName), direction: Number.isFinite(sub.Direction) ? sub.Direction : null, operatorKeys: (sub.OperatorIDs ?? []).map(String), sourceCity: city.name })
      for (const [value, kind] of [[sub.SubRouteUID, 'subroute-uid'], [sub.SubRouteID, 'subroute-id']]) if (text(value)) record.aliases.push({ value: text(value), kind, city: city.name })
    }
    sourceRoutes.set(sourceKey(city, row), record)
  }
  const routeList = [...routes.values()]
  for (const route of routeList) {
    route.group = group({ RouteID: route.routeId, RouteName: route.names }, route.sourceCities)
    delete route._aliases; delete route._subRoutes
  }

  const stops = new Map()
  for (const city of CITIES) for (const row of all[city.name].stops) {
    const id = text(row.StopUID)
    if (!id) continue
    const position = row.StopPosition ? { lat: row.StopPosition.PositionLat, lon: row.StopPosition.PositionLon } : null
    if (!stops.has(id)) stops.set(id, { id, stopId: text(row.StopID), names: names(row.StopName), sourceCities: [city.name], authorityId: text(row.AuthorityID) || null, position, address: text(row.StopAddress) || null, bearing: text(row.Bearing) || null, stationId: text(row.StationID) || null, locationCityCode: text(row.LocationCityCode) || null, sourceUpdated: text(row.UpdateTime) || null })
    else if (!stops.get(id).sourceCities.includes(city.name)) stops.get(id).sourceCities.push(city.name)
  }

  const sequences = []
  for (const city of CITIES) for (const row of all[city.name]['stop-sequences']) {
    const route = sourceRoutes.get(`${city.code}:${text(row.RouteUID)}`)
    if (!route) continue
    const key = `${city.code}:${text(row.SubRouteUID) || `${text(row.RouteUID)}:${row.Direction}`}`
    const sequence = { id: `tdx-bus-sequence-${slug(key)}-${hash(key)}`, routeId: route.id, sourceCity: city.name, routeUid: text(row.RouteUID), routeIdSource: text(row.RouteID), subRouteUid: text(row.SubRouteUID) || null, subRouteId: text(row.SubRouteID) || null, names: names(row.SubRouteName || row.RouteName), direction: Number.isFinite(row.Direction) ? row.Direction : null, stops: (row.Stops ?? []).map((stop) => ({ stopUid: text(stop.StopUID), stopId: text(stop.StopID), names: names(stop.StopName), boarding: Number.isFinite(stop.StopBoarding) ? stop.StopBoarding : null, sequence: Number.isFinite(stop.StopSequence) ? stop.StopSequence : null, position: stop.StopPosition ? { lat: stop.StopPosition.PositionLat, lon: stop.StopPosition.PositionLon } : null, locationCityCode: text(stop.LocationCityCode) || null })), sourceUpdated: text(row.UpdateTime) || null }
    sequences.push(sequence); route.stopSequenceIds.push(sequence.id)
  }

  const shapes = []
  for (const city of CITIES) for (const row of all[city.name].shapes) {
    const route = sourceRoutes.get(`${city.code}:${text(row.RouteUID)}`)
    if (!route || !text(row.Geometry)) continue
    const key = `${city.code}:${text(row.RouteUID)}:${text(row.SubRouteUID)}:${row.Direction}`
    const shape = { id: `tdx-bus-shape-${slug(key)}-${hash(key)}`, routeId: route.id, sourceCity: city.name, routeUid: text(row.RouteUID), direction: Number.isFinite(row.Direction) ? row.Direction : null, names: names(row.RouteName), subRouteNames: names(row.SubRouteName), geometry: text(row.Geometry), sourceUpdated: text(row.UpdateTime) || null }
    shapes.push(shape); route.shapeIds.push(shape.id)
  }

  const operatorMap = new Map()
  const addOperator = (row, city) => {
    const key = operatorKey(row); if (!key) return null
    if (!operatorMap.has(key)) operatorMap.set(key, { id: `bus-operator-${slug(row.OperatorCode || row.OperatorNo || key)}-${hash(key)}`, operatorId: key, names: names(row.OperatorName), operatorCode: text(row.OperatorCode), operatorNo: text(row.OperatorNo), phone: text(row.OperatorPhone) || null, url: text(row.OperatorUrl) || null, authorityCodes: [], sourceCities: [] })
    const result = operatorMap.get(key)
    if (!result.sourceCities.includes(city.name)) result.sourceCities.push(city.name)
    if (text(row.AuthorityCode) && !result.authorityCodes.includes(text(row.AuthorityCode))) result.authorityCodes.push(text(row.AuthorityCode))
    return result.id
  }
  for (const city of CITIES) for (const row of all[city.name].operators) addOperator(row, city)
  for (const city of CITIES) for (const row of all[city.name].routes) {
    const route = sourceRoutes.get(sourceKey(city, row)); if (!route) continue
    for (const operator of row.Operators ?? []) { const id = addOperator(operator, city); if (id && !route.operatorIds.includes(id)) route.operatorIds.push(id) }
  }

  const rail = railIndex()
  for (const route of routeList) {
    const joins = new Map()
    for (const sequence of sequences.filter((item) => item.routeId === route.id)) for (const stop of sequence.stops) {
      const candidates = rail.get(railName(stop.names.zh_tw)) ?? rail.get(railName(stop.names.en)) ?? []
      const unique = [...new Map(candidates.map((candidate) => [candidate.code, candidate])).values()]
      if (unique.length === 1) joins.set(`${stop.stopUid}:${unique[0].code}`, { stopUid: stop.stopUid, stationCode: unique[0].code, lineCode: unique[0].lineCode, match: 'normalized-name' })
    }
    route.railJoins = [...joins.values()].sort((a, b) => `${a.stationCode}:${a.stopUid}`.localeCompare(`${b.stationCode}:${b.stopUid}`))
    route.stopSequenceIds = [...new Set(route.stopSequenceIds)].sort()
    route.shapeIds = [...new Set(route.shapeIds)].sort()
    route.operatorIds.sort(); route.sourceCities.sort(); route.sourceUids.sort(); route.authorityIds.sort(); route.providerIds.sort(); route.sourceUpdated.sort(); route.aliases.sort((a, b) => `${a.kind}:${a.value}`.localeCompare(`${b.kind}:${b.value}`)); route.subRoutes.sort((a, b) => a.id.localeCompare(b.id))
  }
  const slugCounts = new Map(routeList.map((route) => [route.canonicalSlug, routeList.filter((other) => other.canonicalSlug === route.canonicalSlug).length]))
  for (const route of routeList) if (slugCounts.get(route.canonicalSlug) > 1) route.canonicalSlug = `${route.canonicalSlug}-${hash(route.id)}`
  routeList.sort((a, b) => `${a.group}:${a.canonicalSlug}`.localeCompare(`${b.group}:${b.canonicalSlug}`))
  sequences.sort((a, b) => a.id.localeCompare(b.id)); shapes.sort((a, b) => a.id.localeCompare(b.id))
  return { routes: routeList, stops: [...stops.values()].sort((a, b) => a.id.localeCompare(b.id)), sequences, shapes, operators: [...operatorMap.values()].sort((a, b) => a.id.localeCompare(b.id)) }
}

function normalizeExisting() {
  const routesFile = path.join(OUT, 'routes.json')
  const metaFile = path.join(OUT, 'meta.json')
  if (!fs.existsSync(routesFile) || !fs.existsSync(metaFile)) throw new Error('Existing bus snapshots are missing')
  const routeList = JSON.parse(fs.readFileSync(routesFile, 'utf8'))
  for (const route of routeList) {
    route.group = group({ RouteID: route.routeId, RouteName: route.names }, route.sourceCities)
    route.canonicalSlug = slug(route.names?.zh_tw || route.names?.en || route.routeId)
  }
  const counts = new Map(routeList.map((route) => [route.canonicalSlug, routeList.filter((other) => other.canonicalSlug === route.canonicalSlug).length]))
  for (const route of routeList) if (counts.get(route.canonicalSlug) > 1) route.canonicalSlug = `${route.canonicalSlug}-${hash(route.id)}`
  routeList.sort((a, b) => `${a.group}:${a.canonicalSlug}`.localeCompare(`${b.group}:${b.canonicalSlug}`))
  const meta = JSON.parse(fs.readFileSync(metaFile, 'utf8'))
  meta.normalized.groupCounts = Object.fromEntries([...new Set(routeList.map((route) => route.group))].sort().map((groupName) => [groupName, routeList.filter((route) => route.group === groupName).length]))
  write('routes.json', routeList)
  write('meta.json', meta)
  console.log(JSON.stringify(meta.normalized, null, 2))
}

async function main() {
  if (process.argv.includes('--normalize-existing')) return normalizeExisting()
  if (process.argv.includes('--probe')) throw new Error('Use the full pull only; --probe is intentionally not a writer.')
  const tokenValue = await token()
  const all = Object.fromEntries(CITIES.map((city) => [city.name, {}]))
  const meta = { fetchedAt: new Date().toISOString(), source: 'Taiwan MOTC TDX (Transport Data eXchange)', sourceUrl: 'https://tdx.transportdata.tw/', apiBase: API, cities: {}, datasetNotes: Object.fromEntries(DATASETS.map((dataset) => [dataset.key, dataset.note])), notPublished: [] }
  for (const city of CITIES) {
    meta.cities[city.name] = { code: city.code, datasets: {} }
    for (const dataset of DATASETS) {
      const result = await fetchDataset(tokenValue, city, dataset)
      all[city.name][dataset.key] = result
      const fields = [...new Set(result.flatMap((row) => Object.keys(row ?? {})))].sort()
      meta.cities[city.name].datasets[dataset.key] = { status: 200, records: result.length, fields }
    }
  }
  const normalized = normalize(all)
  meta.normalized = { routeCount: normalized.routes.length, stopCount: normalized.stops.length, stopSequenceCount: normalized.sequences.length, shapeCount: normalized.shapes.length, operatorCount: normalized.operators.length, railJoinCount: normalized.routes.reduce((sum, route) => sum + route.railJoins.length, 0), groupCounts: Object.fromEntries([...new Set(normalized.routes.map((route) => route.group))].sort().map((group) => [group, normalized.routes.filter((route) => route.group === group).length])) }
  write('routes.json', normalized.routes); write('stops.json', normalized.stops); write('stop-sequences.json', normalized.sequences); write('shapes.json', normalized.shapes); write('operators.json', normalized.operators); write('meta.json', meta)
  console.log(JSON.stringify(meta.normalized, null, 2))
}

main().catch((error) => { console.error(`tdx bus failed: ${error.message}`); process.exit(1) })
