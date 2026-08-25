/** Fetch and normalize static TDX YouBike station data for five cities. */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'data', 'tdx', 'bike')
const API = 'https://tdx.transportdata.tw/api/basic/v2'
const TOKEN = 'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token'
const PAGE_SIZE = 1000
const DELAY = 12000
const CITIES = [
  { name: 'Taipei', code: 'TPE' },
  { name: 'NewTaipei', code: 'NWT' },
  { name: 'Taoyuan', code: 'TAO' },
  { name: 'Taichung', code: 'TXG' },
  { name: 'Kaohsiung', code: 'KHH' },
]

const DISTRICTS = {
  TPE: ['中正區', '大同區', '中山區', '松山區', '大安區', '萬華區', '信義區', '士林區', '北投區', '內湖區', '南港區', '文山區'],
  NWT: ['板橋區', '三重區', '中和區', '永和區', '新莊區', '新店區', '樹林區', '鶯歌區', '三峽區', '淡水區', '汐止區', '瑞芳區', '土城區', '蘆洲區', '五股區', '泰山區', '林口區', '深坑區', '石碇區', '坪林區', '三芝區', '石門區', '八里區', '平溪區', '雙溪區', '貢寮區', '金山區', '萬里區', '烏來區'],
  TAO: ['桃園區', '中壢區', '大溪區', '楊梅區', '蘆竹區', '大園區', '龜山區', '八德區', '龍潭區', '平鎮區', '新屋區', '觀音區', '復興區'],
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const text = (value) => typeof value === 'string' ? value.trim() : ''
const names = (value) => ({ zh_tw: text(value?.Zh_tw ?? value?.zh_tw), en: text(value?.En ?? value?.en) })
const address = (value) => ({ zh_tw: text(value?.Zh_tw ?? value?.zh_tw), en: text(value?.En ?? value?.en) })
const stable = (value) => Array.isArray(value)
  ? value.map(stable)
  : value && typeof value === 'object'
    ? Object.fromEntries(Object.keys(value).sort().map((key) => [key, stable(value[key])]))
    : value

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

function districtOf(row, city) {
  const districts = DISTRICTS[city.code] ?? []
  const explicit = text(row.LocationTown || row.StationAddress?.Town)
  if (explicit) {
    const exact = districts.find((district) => explicit === district || explicit === district.slice(0, -1))
    if (exact) return exact
  }
  const full = `${row.StationAddress?.Zh_tw ?? row.StationAddress?.zh_tw ?? ''}`
  return districts.find((district) => full.includes(district)) || '未分類'
}

function normalize(city, row) {
  const position = row.StationPosition || {}
  return {
    id: `youbike-${city.code}-${text(row.StationUID || row.StationID)}`,
    stationUid: text(row.StationUID),
    stationId: text(row.StationID),
    authorityId: text(row.AuthorityID),
    city: city.name,
    cityCode: city.code,
    district: districtOf(row, city),
    names: names(row.StationName),
    address: address(row.StationAddress),
    position: {
      lat: Number(position.PositionLat),
      lon: Number(position.PositionLon),
      geoHash: text(position.GeoHash) || null,
    },
    capacity: Number.isFinite(Number(row.BikesCapacity)) ? Number(row.BikesCapacity) : null,
    serviceType: row.ServiceType ?? null,
    sourceUpdated: text(row.SrcUpdateTime) || null,
    updateTime: text(row.UpdateTime) || null,
  }
}

async function main() {
  const tokenValue = await token()
  const stations = []
  const meta = {
    fetchedAt: new Date().toISOString(),
    source: 'Taiwan MOTC TDX (Transport Data eXchange)',
    sourceUrl: 'https://tdx.transportdata.tw/',
    endpoint: '/api/basic/v2/Bike/Station/City/{City}',
    cities: {},
    excluded: {
      availability: 'GET /api/basic/v2/Bike/Availability/City/{City} is live dock occupancy and is intentionally not committed as static page content.',
    },
  }
  for (const city of CITIES) {
    const raw = []
    for (let page = 0; ; page += 1) {
      const skip = page * PAGE_SIZE
      const params = new URLSearchParams({ $format: 'JSON', $top: String(PAGE_SIZE), $skip: String(skip) })
      const url = `${API}/Bike/Station/City/${city.name}?${params}`
      console.log(`  ${city.name}/stations skip=${skip}`)
      const pageRows = rows(await get(tokenValue, url))
      raw.push(...pageRows)
      console.log(`    ${pageRows.length} records`)
      if (pageRows.length < PAGE_SIZE) break
      await sleep(DELAY)
    }
    const normalized = raw.map((row) => normalize(city, row)).filter((row) => Number.isFinite(row.position.lat) && Number.isFinite(row.position.lon))
    stations.push(...normalized)
    meta.cities[city.name] = { code: city.code, endpoint: `${API}/Bike/Station/City/${city.name}`, records: normalized.length, fields: [...new Set(raw.flatMap((row) => Object.keys(row ?? {})))].sort() }
  }
  stations.sort((a, b) => `${a.cityCode}:${a.district}:${a.stationId}`.localeCompare(`${b.cityCode}:${b.district}:${b.stationId}`))
  meta.totalStations = stations.length
  fs.mkdirSync(OUT, { recursive: true })
  fs.writeFileSync(path.join(OUT, 'stations.json'), `${JSON.stringify(stable(stations), null, 2)}\n`)
  fs.writeFileSync(path.join(OUT, 'meta.json'), `${JSON.stringify(stable(meta), null, 2)}\n`)
  console.log(JSON.stringify({ total: stations.length, cities: meta.cities }, null, 2))
}

main().catch((error) => { console.error(`tdx bike failed: ${error.message}`); process.exit(1) })
