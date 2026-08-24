/**
 * Fetches the current static THSR records that TDX exposes.
 *
 * Run: npm run thsr
 *
 * TDX's THSR domain is not shaped like Rail/Metro: Station and Shape are
 * available, while the checked Route and StationOfRoute paths return 404.
 * Keep the successful records and the checked gaps in meta.json rather than
 * manufacturing a route sequence from station names.
 */

import fs from 'node:fs'
import path from 'node:path'

const OUT_DIR = path.join(process.cwd(), 'data', 'tdx', 'THSR')
const TOKEN_URL =
  'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token'
const API_BASE = 'https://tdx.transportdata.tw/api/basic/v2/Rail/THSR'
const RETRIEVED = '2026-08-24'

function loadEnv() {
  const env = { ...process.env }
  const file = path.join(process.cwd(), '.env.local')
  if (!fs.existsSync(file)) return env
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Za-z_0-9]+)\s*=\s*(.*?)\s*$/)
    if (match && !line.trimStart().startsWith('#')) {
      env[match[1]] = match[2].replace(/^['"]|['"]$/g, '')
    }
  }
  return env
}

async function getToken() {
  const env = loadEnv()
  const response = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: env.TDX_CLIENT_ID,
      client_secret: env.TDX_CLIENT_SECRET,
    }),
  })
  if (!response.ok) throw new Error(`TDX token request failed: ${response.status}`)
  return (await response.json()).access_token
}

async function fetchRows(token, endpoint) {
  const url = `${API_BASE}/${endpoint}?%24format=JSON&%24top=1000`
  const response = await fetch(url, { headers: { authorization: `Bearer ${token}` } })
  const body = await response.text()
  if (!response.ok) {
    return { status: response.status, url, rows: null, error: body.slice(0, 300) }
  }
  const parsed = JSON.parse(body)
  return { status: response.status, url, rows: Array.isArray(parsed) ? parsed : [] }
}

function stable(value) {
  if (Array.isArray(value)) return value.map(stable)
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, stable(value[key])]))
  }
  return value
}

function writeJson(file, value) {
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, `${JSON.stringify(stable(value), null, 2)}\n`)
}

const token = await getToken()
const [station, shape, route, stationOfRoute] = await Promise.all([
  fetchRows(token, 'Station'),
  fetchRows(token, 'Shape'),
  fetchRows(token, 'Route'),
  fetchRows(token, 'StationOfRoute'),
])

if (!station.rows || station.rows.length !== 12) {
  throw new Error(`Expected 12 THSR station records, received ${station.rows?.length ?? station.status}`)
}
if (!shape.rows || shape.rows.length !== 1) {
  throw new Error(`Expected one THSR shape record, received ${shape.rows?.length ?? shape.status}`)
}

writeJson(path.join(OUT_DIR, 'station.json'), station.rows.sort((a, b) => a.StationID.localeCompare(b.StationID)))
writeJson(path.join(OUT_DIR, 'shape.json'), shape.rows.sort((a, b) => a.LineID.localeCompare(b.LineID)))
writeJson(path.join(OUT_DIR, 'meta.json'), {
  operator: 'THSR',
  publisher: 'Taiwan Ministry of Transportation and Communications, TDX',
  publisherOriginal: '交通部運輸資料流通服務平臺',
  retrieved: RETRIEVED,
  datasets: {
    station: {
      url: station.url,
      status: station.status,
      records: station.rows.length,
      note: '12 current station records with IDs, names, addresses, coordinates and update metadata.',
    },
    shape: {
      url: shape.url,
      status: shape.status,
      records: shape.rows.length,
      note: 'One current line geometry record.',
    },
    route: {
      url: route.url,
      status: route.status,
      records: route.rows?.length ?? 0,
      note: 'Checked live; TDX returned 404, so no route metadata is inferred.',
      error: route.error ?? null,
    },
    stationOfRoute: {
      url: stationOfRoute.url,
      status: stationOfRoute.status,
      records: stationOfRoute.rows?.length ?? 0,
      note: 'Checked live; TDX returned 404, so station sequence is kept as a hand-verified operator list.',
      error: stationOfRoute.error ?? null,
    },
  },
})

console.log(`thsr: wrote ${station.rows.length} stations and ${shape.rows.length} shape to ${OUT_DIR}`)
