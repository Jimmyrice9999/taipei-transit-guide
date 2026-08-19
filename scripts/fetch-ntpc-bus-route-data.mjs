/**
 * Fetch the New Taipei Department of Transportation's published route-type
 * and current service records, then join them to the committed TDX route
 * identities by the exact Traditional-Chinese route name.
 *
 * The result is a static snapshot used by the route fact box and authoring
 * tools. It is not a replacement for TDX stops, shapes or operators.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'data', 'ntpc', 'bus-route-service.json')
const API_BASE = 'https://data.ntpc.gov.tw/api/datasets/'
const ROUTE_LIST = '0ee4e6bf-cee6-4ec8-8fe1-71f544015127'

const CATEGORIES = [
  { key: 'general', label: '\u4e00\u822c\u516c\u8eca', english: 'General bus', dataset: '45572534-e503-4ece-afea-54440bf2624a' },
  { key: 'rapid', label: '\u5feb\u901f\u516c\u8eca', english: 'Rapid bus', dataset: '8732f6a7-c226-4ebd-ab0c-fca42b981b5c' },
  { key: 'pioneer', label: '\u6377\u904b\u5148\u5c0e\u516c\u8eca', english: 'MRT pioneer bus', dataset: '99fa69ea-24bf-4580-877a-998eb2cc42c2' },
  { key: 'mrt', label: '\u6377\u904b\u63a5\u99c1\u8def\u7dda', english: 'MRT feeder route', dataset: '807b1c1f-29e7-499b-950e-257164e5fc54' },
  { key: 'newbus', label: '\u65b0\u5df4\u58eb', english: 'New Bus community service', dataset: 'e4c58656-22d1-4bcf-af33-16ca94532a36' },
  { key: 'event', label: '\u6d3b\u52d5\u5c08\u8eca', english: 'Event shuttle', dataset: '0c8bfb41-4014-4e09-bfb3-129a65103fb7' },
  { key: 'jumpfrog', label: '\u8df3\u86d9\u516c\u8eca', english: 'Jump-frog commuter bus', dataset: 'f5e9a430-f337-476f-801e-dc167a112aa2' },
  { key: 'lrt', label: '\u8f15\u8ecc\u63a5\u99c1\u8def\u7dda', english: 'Light-rail feeder route', dataset: '0358b481-a8ce-45ac-a40f-50cd6c895683' },
]

const ACCESS_DATE = '2026-08-19'
const normalise = (value) => String(value ?? '').replace(/\s+/g, '').replace(/[－–—]/g, '-')

async function fetchJson(url) {
  const response = await fetch(url, { headers: { 'user-agent': 'TaipeiTransitGuide/route-authoring' } })
  if (!response.ok) throw new Error(`New Taipei data fetch failed: ${response.status} ${url}`)
  return response.json()
}

function serviceRow(rows, name) {
  const matches = rows.filter((row) => normalise(row.namezh) === normalise(name))
  if (matches.length === 0) return null
  return matches.find((row) => normalise(row.pathattributename) === normalise(row.routename)) ?? matches[0]
}

const routes = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'tdx', 'bus', 'routes.json'), 'utf8'))
  .filter((route) => route.group === 'new-taipei')

const routeRows = await fetchJson(`${API_BASE}${ROUTE_LIST}/json?size=1000`)
const categoryRows = new Map()
for (const category of CATEGORIES) {
  const rows = await fetchJson(`${API_BASE}${category.dataset}/json?size=1000`)
  for (const row of rows) categoryRows.set(normalise(row.routename), { category, row })
}

const output = routes.map((route) => {
  const classification = categoryRows.get(normalise(route.names.zh_tw))
  const row = serviceRow(routeRows, route.names.zh_tw)
  if (!classification) throw new Error(`No New Taipei route category for ${route.names.zh_tw}`)
  return {
    routeId: route.id,
    routeNameZh: route.names.zh_tw,
    categoryKey: classification.category.key,
    categoryLabel: classification.category.label,
    categoryEnglish: classification.category.english,
    categoryDataset: classification.category.dataset,
    serviceRecordId: row?.id ?? null,
    providerId: row?.providerid ?? null,
    providerName: row?.providername ?? null,
    startAndEnd: classification.row.start_and_end ?? (row?.departurezh && row?.destinationzh ? `${row.departurezh}-${row.destinationzh}` : null),
    distanceKm: row?.distance ?? null,
    weekdayOperationHours: classification.row.weekday_operation_hours ?? null,
    holidayOperationHours: classification.row.holiday_operation_hours ?? null,
    weekdayFirstBus: row?.gofirstbustime ?? null,
    weekdayLastBus: row?.golastbustime ?? null,
    weekdayPeakHeadway: row?.peakheadway ?? null,
    weekdayOffpeakHeadway: row?.offpeakheadway ?? null,
    weekdayHeadwayDescription: row?.headwaydesc ?? null,
    holidayFirstBus: row?.holidaygofirstbustime ?? null,
    holidayLastBus: row?.holidaygolastbustime ?? null,
    holidayPeakHeadway: row?.holidaypeakheadway ?? null,
    holidayOffpeakHeadway: row?.holidayoffpeakheadway ?? null,
    holidayHeadwayDescription: row?.holidayheadwaydesc ?? null,
    fareZh: row?.ticketpricedescriptionzh ?? null,
    fareEn: row?.ticketpricedescriptionen ?? null,
    sourceUpdated: ACCESS_DATE,
  }
})

fs.mkdirSync(path.dirname(OUT), { recursive: true })
fs.writeFileSync(OUT, `${JSON.stringify(output, null, 2)}\n`)
console.log(`Wrote ${output.length} New Taipei service records to ${path.relative(ROOT, OUT)}`)
console.log(Object.fromEntries(CATEGORIES.map((category) => [category.key, output.filter((row) => row.categoryKey === category.key).length])))
