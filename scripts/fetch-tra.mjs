/**
 * Fetches the current static TRA records that TDX exposes.
 *
 * Run: npm run tra
 *      npm run tra -- --probe
 *
 * This is a snapshot writer, never a build-time dependency. The raw TDX
 * response is committed with its retrieval date and every checked endpoint so
 * a later import can distinguish a source gap from a failed fetch.
 */

import fs from 'node:fs'
import path from 'node:path'

const OUT_DIR = path.join(process.cwd(), 'data', 'tdx', 'TRA')
const TOKEN_URL =
  'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token'
const API_BASE = 'https://tdx.transportdata.tw/api/basic/v2/Rail/TRA'
const RETRIEVED = '2026-08-24'
const PAGE_SIZE = 1000
const REQUEST_DELAY_MS = 1500
const MAX_RETRIES = 4
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function loadEnv() {
  const env = { ...process.env }
  const file = path.join(process.cwd(), '.env.local')
  if (!fs.existsSync(file)) return env
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Za-z_0-9]+)\s*=\s*(.*?)\s*$/)
    if (match && !line.trimStart().startsWith('#')) env[match[1]] = match[2].replace(/^['"]|['"]$/g, '')
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
  const rows = []
  let skip = 0
  let status = 0
  let error = null
  let url = `${API_BASE}/${endpoint}?%24format=JSON&%24top=${PAGE_SIZE}&%24skip=0`
  for (;;) {
    url = `${API_BASE}/${endpoint}?%24format=JSON&%24top=${PAGE_SIZE}&%24skip=${skip}`
    let response
    for (let attempt = 0; ; attempt++) {
      response = await fetch(url, { headers: { authorization: `Bearer ${token}` } })
      if (response.status !== 429 || attempt >= MAX_RETRIES) break
      const retryAfter = Number(response.headers.get('retry-after'))
      const wait = Number.isFinite(retryAfter) && retryAfter > 0
        ? retryAfter * 1000
        : Math.max(REQUEST_DELAY_MS * 2 ** (attempt + 1), 60000)
      console.log(`${endpoint}: 429, waiting ${Math.round(wait / 1000)}s before retry ${attempt + 1}`)
      await sleep(wait)
    }
    status = response.status
    const body = await response.text()
    if (!response.ok) {
      error = body.slice(0, 300)
      return { endpoint, status, url, rows: null, error }
    }
    const page = JSON.parse(body)
    if (!Array.isArray(page)) return { endpoint, status, url, rows: [], error: 'TDX response was not an array' }
    rows.push(...page)
    if (page.length < PAGE_SIZE) break
    skip += PAGE_SIZE
    await sleep(REQUEST_DELAY_MS)
  }
  return { endpoint, status, url, rows, error }
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
const endpoints = ['Station', 'Route', 'StationOfLine', 'StationOfRoute', 'Shape']
const results = []
for (const endpoint of endpoints) {
  results.push(await fetchRows(token, endpoint))
  await sleep(REQUEST_DELAY_MS)
}

for (const result of results) {
  console.log(`${result.endpoint}: ${result.status} ${result.rows?.length ?? 0} records`)
  if (result.error) console.log(`  ${result.error}`)
}

if (process.argv.includes('--probe')) process.exit(0)

const byEndpoint = new Map(results.map((result) => [result.endpoint, result]))
for (const endpoint of ['Station', 'StationOfLine', 'Shape']) {
  const result = byEndpoint.get(endpoint)
  if (!result?.rows) throw new Error(`Required TRA endpoint ${endpoint} failed with ${result?.status}`)
}

const filenames = {
  Station: 'station.json',
  Route: 'route.json',
  StationOfLine: 'station-of-line.json',
  StationOfRoute: 'station-of-route.json',
  Shape: 'shape.json',
}

for (const result of results) {
  if (!result.rows) continue
  const values = [...result.rows]
  const sortKey = result.endpoint === 'Station' ? 'StationID' : result.endpoint === 'Shape' ? 'LineNo' : result.endpoint
  values.sort((a, b) => String(a[sortKey] ?? '').localeCompare(String(b[sortKey] ?? '')))
  writeJson(path.join(OUT_DIR, filenames[result.endpoint]), values)
}

writeJson(path.join(OUT_DIR, 'meta.json'), {
  operator: 'TRA',
  publisher: 'Taiwan Railways Administration and Taiwan MOTC, TDX',
  publisherOriginal: '交通部運輸資料流通服務平台；臺灣鐵路公司',
  retrieved: RETRIEVED,
  datasets: Object.fromEntries(results.map((result) => [result.endpoint, {
    url: result.url,
    status: result.status,
    records: result.rows?.length ?? 0,
    note: result.rows ? 'Full paged response fetched from the live TDX endpoint.' : 'Checked live; response failed and is not used as data.',
    error: result.error,
  }])),
})

console.log(`tra: wrote snapshot to ${OUT_DIR}`)
