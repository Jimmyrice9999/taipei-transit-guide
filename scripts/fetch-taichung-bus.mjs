/*
 * Snapshot Taichung's official city-bus route/stops catalogue and the
 * separately published 小黃公車 reservation catalogue.  The city CSV is a
 * route-map publication, not a timetable: preserve that boundary in the
 * output instead of manufacturing frequencies or fares.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUTPUT = path.join(ROOT, 'data', 'taichung-bus', 'routes.json')
const PUBLIC_OUTPUT = path.join(ROOT, 'public', 'data', 'taichung-bus-routes.json')
const DATASET_URL = 'https://data.gov.tw/dataset/83748'
const CSV_URL = 'https://newdatacenter.taichung.gov.tw/api/v1/no-auth/resource.download?rid=20c2e4cc-49bf-45d5-a880-714c7c66eed6'
const CITYBUS_URL = 'https://citybus.taichung.gov.tw/ebus'
const YELLOW_URL = 'https://www.traffic.taichung.gov.tw/content/index.asp?Parser=1,7,505,52'
const RETRIEVED = '2026-08-25'

const YELLOW_GROUPS = [
  {
    phone: '(04)2436-6666',
    hours: '08:00-17:00',
    routes: [
      ['黃1', '豐原球場線'], ['黃2', '東勢埤頭里線'], ['黃3', '新社新五村線'],
      ['黃4', '豐原朴子線'], ['黃5', '黃竹線'], ['黃6', '桐林線'],
      ['黃7', '舊正象鼻線'], ['黃8', '喀哩線'], ['黃9', '新社白毛台線'],
      ['黃10', '潭子大富線'], ['黃16', '福興永豐線'], ['黃17', '中興嶺石岡線'],
      ['黃18', '后里四塊厝線'], ['黃21', '王田營埔線'], ['黃22', '舊庄員林線'],
      ['黃25', '九德溪尾線'], ['黃26', '大坑松竹線'],
    ],
  },
  {
    phone: '(04)4058-8888#9',
    hours: '09:00-18:00',
    routes: [
      ['黃11', '麗水龍津線'], ['黃12', '大甲大安線'], ['黃13', '客庄菁埔線'],
      ['黃14', '清水塭仔寮線'], ['黃15', '沙鹿水裡社線'], ['黃19', '口庄水美線'],
      ['黃20', '梧棲沙鹿線'], ['黃23', '中庄龜壳線'], ['黃24', '麗水田中線'],
    ],
  },
]

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
      if (row.some((value) => value.trim())) rows.push(row)
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

function tidy(value) {
  return String(value ?? '').replace(/^\uFEFF/, '').replace(/\s+/g, ' ').trim()
}

function stopsFrom(value) {
  const sourceText = tidy(value)
  const stopText = sourceText.split('停靠：').at(-1) ?? ''
  const stops = stopText.split('、').map(tidy).filter(Boolean)
  return { sourceText, stops }
}

function direction(value, directionName, directionZh) {
  const parsed = stopsFrom(value)
  return {
    direction: directionName,
    directionZh,
    sourceText: parsed.sourceText || null,
    stops: parsed.stops,
    firstStop: parsed.stops[0] ?? null,
    lastStop: parsed.stops.at(-1) ?? null,
    stopCount: parsed.stops.length,
  }
}

function stable(value) {
  if (Array.isArray(value)) return value.map(stable)
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, stable(value[key])]))
  }
  return value
}

async function getSource() {
  const localFile = process.env.TAICHUNG_BUS_SOURCE_FILE
  if (localFile) return fs.readFileSync(path.resolve(localFile), 'utf8')
  const response = await fetch(CSV_URL)
  if (!response.ok) throw new Error(`CSV ${response.status} ${response.statusText}`)
  return new TextDecoder('utf-8').decode(await response.arrayBuffer())
}

const csv = await getSource()
const rows = parseCsv(csv)
const header = rows.shift().map(tidy)
const records = rows.map((values) => Object.fromEntries(header.map((key, index) => [key, tidy(values[index])]))).filter((record) => record['路線'])

const routes = records.map((record) => ({
  authorityCode: record['機關代碼'] || null,
  phone: record['電話/市話'] || null,
  serial: Number.parseInt(record['序號'], 10) || null,
  operatorLabel: record['公車業者'] || null,
  route: record['路線'],
  description: record['路線說明'] || null,
  mapUrl: record['連結'] || null,
  directions: [
    direction(record['去程'], 'outbound', '去程'),
    direction(record['回程'], 'return', '回程'),
  ],
  notes: record['備註'] || null,
}))

const operatorLabels = [...new Set(routes.map((route) => route.operatorLabel).filter(Boolean))].sort().map((name) => ({
  name,
  routeCount: routes.filter((route) => route.operatorLabel === name).length,
}))

const yellowRoutes = YELLOW_GROUPS.flatMap((group) => group.routes.map(([route, nameZh]) => ({
  route,
  nameZh,
  reservationPhone: group.phone,
  reservationHours: group.hours,
  operatorLabel: '計程車隊',
})))

const directionCount = routes.reduce((total, route) => total + route.directions.filter((run) => run.sourceText).length, 0)
const stopCount = routes.reduce((total, route) => total + route.directions.reduce((sum, run) => sum + run.stopCount, 0), 0)
const output = {
  source: {
    datasetUrl: DATASET_URL,
    csvUrl: CSV_URL,
    citybusUrl: CITYBUS_URL,
    yellowBusUrl: YELLOW_URL,
    retrieved: RETRIEVED,
    datasetMetadataUpdated: '2026-06-09',
    scope: 'Taichung city-bus route and stop catalogue, plus the city government 小黃公車 catalogue.',
  },
  coverage: {
    routeCount: routes.length,
    operatorLabelCount: operatorLabels.length,
    directionCount,
    stopCount,
    routesWithoutReturnData: routes.filter((route) => !route.directions[1].sourceText).length,
    timetableCoverage: 'TBC: the official route-map CSV has no departure-time field.',
    fareCoverage: 'TBC: the official citybus page states network fare rules, but the CSV has no route-level fare field.',
    yellowRouteCount: yellowRoutes.length,
    yellowScheduleCoverage: 'Fixed departure times are published as linked official images; image schedules are not transcribed here.',
  },
  operatorLabels,
  routes,
  yellowBus: {
    routeCount: yellowRoutes.length,
    reservationRequired: true,
    fixedDepartureTimes: true,
    routes: yellowRoutes,
  },
}

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true })
const serialized = `${JSON.stringify(stable(output), null, 2)}\n`
fs.writeFileSync(OUTPUT, serialized)
fs.mkdirSync(path.dirname(PUBLIC_OUTPUT), { recursive: true })
fs.writeFileSync(PUBLIC_OUTPUT, serialized)
console.log(`taichung-bus: ${routes.length} route entries, ${operatorLabels.length} operator labels, ${directionCount} directions, ${yellowRoutes.length} 小黃公車 routes`)
console.log(`taichung-bus: ${stopCount} ordered stop records; timetable and fares remain explicitly TBC where the source does not provide fields`)
console.log(`taichung-bus: wrote ${path.relative(ROOT, OUTPUT)}`)
console.log(`taichung-bus: wrote ${path.relative(ROOT, PUBLIC_OUTPUT)}`)
