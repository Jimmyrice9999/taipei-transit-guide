/*
 * Build the committed national intercity-bus route summary from the Highway
 * Bureau's public static timetable export.  This is deliberately a summary:
 * the source file is a timetable-row export, not a stable page-per-route
 * catalogue, and route pages would turn every date and operator change into
 * a mass rewrite.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUTPUT = path.join(ROOT, 'data', 'intercity-bus', 'routes.json')
const PUBLIC_OUTPUT = path.join(ROOT, 'public', 'data', 'intercity-bus-routes.json')
const SOURCE = 'https://www.taiwanbus.tw/TimeTableExport/timetable.csv'
const RETRIEVED = '2026-08-25'
const CATALOG = 'https://www.thb.gov.tw/News_Content_thbOpenData.aspx?n=13&s=599'

function parseCsv(text) {
  const rows = []
  let row = []
  let field = ''
  let quoted = false
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i]
    if (quoted) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          field += '"'
          i += 1
        } else quoted = false
      } else field += char
      continue
    }
    if (char === '"' && field.length === 0) quoted = true
    else if (char === ',') {
      row.push(field)
      field = ''
    } else if (char === '\n') {
      row.push(field.replace(/\r$/, ''))
      if (row.some(Boolean)) rows.push(row)
      row = []
      field = ''
    } else field += char
  }
  if (field.length || row.length) {
    row.push(field.replace(/\r$/, ''))
    if (row.some(Boolean)) rows.push(row)
  }
  return rows
}

function text(value) { return String(value ?? '').replace(/^\uFEFF/, '').trim() }

function keyFor(values) { return values.map(text).join('\u0000') }

function asTime(value) {
  const raw = text(value)
  return /^\d{4,6}$/.test(raw) ? raw.padStart(6, '0') : null
}

function stable(value) {
  if (Array.isArray(value)) return value.map(stable)
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, stable(value[key])]))
  }
  return value
}

const response = await fetch(SOURCE)
if (!response.ok) throw new Error(`timetable export failed: ${response.status} ${response.statusText}`)
const bytes = Buffer.from(await response.arrayBuffer())
const rows = parseCsv(new TextDecoder('utf-8').decode(bytes))
if (rows.length < 2) throw new Error('timetable export contained no data rows')

const header = rows.shift().map(text)
const columns = new Map(header.map((name, index) => [name, index]))
const get = (row, name) => text(row[columns.get(name)])
const routes = new Map()

for (const row of rows) {
  const operator = get(row, '客運業者')
  const routeNumber = get(row, '路線編號')
  const branch = get(row, '支線')
  const nameZh = get(row, '路線名稱')
  const nameEn = get(row, 'Route Name')
  const direction = get(row, '往返')
  if (!operator || !routeNumber || !nameZh || !direction) continue

  const routeKey = keyFor([operator, routeNumber, branch, nameZh, nameEn])
  if (!routes.has(routeKey)) {
    routes.set(routeKey, {
      operator,
      routeNumber,
      branch,
      nameZh,
      nameEn,
      directions: new Map(),
    })
  }
  const route = routes.get(routeKey)
  if (!route.directions.has(direction)) {
    route.directions.set(direction, {
      direction,
      stops: [],
      stopKeys: new Set(),
      departureTimes: new Set(),
      weekdayService: new Set(),
      serviceDates: new Set(),
    })
  }
  const service = route.directions.get(direction)
  const stopName = get(row, '站名')
  const stopKey = keyFor([stopName, get(row, 'Stop Name'), get(row, '站位ID')])
  if (stopName && !service.stopKeys.has(stopKey)) {
    service.stopKeys.add(stopKey)
    service.stops.push({
      nameZh: stopName,
      nameEn: get(row, 'Stop Name'),
      stopId: get(row, '站位ID') || null,
      lon: get(row, 'Longitude') || null,
      lat: get(row, 'Latitude') || null,
    })
  }
  const firstStop = service.stops[0]?.nameZh
  if (stopName === firstStop) {
    const time = asTime(get(row, '發車時間'))
    if (time) service.departureTimes.add(time)
    for (const [field, label] of [['星期一', 'Monday'], ['星期二', 'Tuesday'], ['星期三', 'Wednesday'], ['星期四', 'Thursday'], ['星期五', 'Friday'], ['星期六', 'Saturday'], ['星期日', 'Sunday']]) {
      if (get(row, field) === '1') service.weekdayService.add(label)
    }
  }
  for (const [start, end] of [['開班日期_起', 'start'], ['開班日期_迄', 'end']]) {
    const date = get(row, start)
    if (date) service.serviceDates.add(`${end}:${date}`)
  }
}

const routeRows = [...routes.values()].map((route) => ({
  operator: route.operator,
  routeNumber: route.routeNumber,
  branch: route.branch || null,
  nameZh: route.nameZh,
  nameEn: route.nameEn || null,
  directions: [...route.directions.values()].map((service) => {
    const departures = [...service.departureTimes].sort()
    return {
      direction: service.direction,
      firstStop: service.stops[0] ?? null,
      lastStop: service.stops.at(-1) ?? null,
      stopCount: service.stops.length,
      departureCount: departures.length,
      firstDeparture: departures[0] ?? null,
      lastDeparture: departures.at(-1) ?? null,
      serviceDays: [...service.weekdayService].sort(),
      serviceDates: [...service.serviceDates].sort(),
    }
  }).sort((a, b) => a.direction.localeCompare(b.direction)),
  fare: null,
}))

const operators = [...new Set(routeRows.map((route) => route.operator))].sort().map((name) => ({
  name,
  routeVariantCount: routeRows.filter((route) => route.operator === name).length,
}))

const output = {
  source: {
    timetableUrl: SOURCE,
    catalogueUrl: CATALOG,
    retrieved: RETRIEVED,
    catalogueUpdate: '2026-07-01',
    fields: header,
  },
  coverage: {
    timetableRows: rows.length,
    operatorCount: operators.length,
    routeVariantCount: routeRows.length,
    fareCoverage: 'TBC',
    note: 'Route variants are grouped by operator, route number, branch and published Chinese/English route names. Direction summaries derive terminal order and first-stop departure counts from the timetable rows.',
  },
  operators,
  routes: routeRows.sort((a, b) => keyFor([a.operator, a.routeNumber, a.branch, a.nameZh]).localeCompare(keyFor([b.operator, b.routeNumber, b.branch, b.nameZh]))),
}

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true })
const serialized = `${JSON.stringify(stable(output), null, 2)}\n`
fs.writeFileSync(OUTPUT, serialized)
fs.writeFileSync(PUBLIC_OUTPUT, serialized)
console.log(`intercity-bus: ${output.coverage.timetableRows} rows → ${output.coverage.routeVariantCount} route variants, ${output.coverage.operatorCount} operators`)
console.log(`intercity-bus: wrote ${path.relative(ROOT, OUTPUT)}`)
console.log(`intercity-bus: wrote ${path.relative(ROOT, PUBLIC_OUTPUT)}`)
