/*
 * Snapshot the Hsinchu regional-bus catalogue exposed by Hsinchu City's
 * iBus portal.  The portal is a server-rendered route selector followed by
 * official POST endpoints for route detail and stop geometry; this script
 * keeps those source identities together instead of treating route labels as
 * a stable API.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUTPUT = path.join(ROOT, 'data', 'hsinchu-bus', 'routes.json')
const PUBLIC_OUTPUT = path.join(ROOT, 'public', 'data', 'hsinchu-bus-routes.json')
const PORTAL = 'https://hisatisfy.hccg.gov.tw/ibusWeb/PublicTransport/'
const DETAIL = 'https://hisatisfy.hccg.gov.tw/ibusWeb/Partial_PublicTransportDetail/'
const IFRAME = 'https://hisatisfy.hccg.gov.tw/ibusWeb/IFrame_Map/'
const ROAD_LINE = 'https://hisatisfy.hccg.gov.tw/ibusWeb/IFrame_Map/GetRoadLine'
const RETRIEVED = '2026-08-25'

const CATEGORIES = new Map([
  ['30', { nameZh: '新竹市市區公車', nameEn: 'Hsinchu City buses' }],
  ['41', { nameZh: '新竹縣快捷巴士', nameEn: 'Hsinchu County express buses' }],
  ['42', { nameZh: '竹北市民公車', nameEn: 'Zhubei citizen buses' }],
  ['43', { nameZh: '新竹縣觀光巴士', nameEn: 'Hsinchu County tourist buses' }],
  ['44', { nameZh: '新竹縣醫療專車', nameEn: 'Hsinchu County medical shuttles' }],
])

function htmlText(value) {
  return String(value ?? '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function attr(value, name) {
  return value.match(new RegExp(`${name}=["']([^"']+)`, 'i'))?.[1] ?? null
}

function cookieFrom(response) {
  return response.headers.get('set-cookie')?.split(';', 1)[0] ?? ''
}

function csrfFrom(html) {
  return html.match(/name=["']csrfmiddlewaretoken["'][^>]*value=["']([^"']+)/i)?.[1] ?? ''
}

function stable(value) {
  if (Array.isArray(value)) return value.map(stable)
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, stable(value[key])]))
  }
  return value
}

function parseOptions(html) {
  const routes = []
  const optionRe = /<option\s+value=["']([^"']+)["'][^>]*>([\s\S]*?)<\/option>/gi
  for (const match of html.matchAll(optionRe)) {
    const value = match[1]
    const parts = value.split('|')
    if (parts.length !== 4 || !CATEGORIES.has(parts[3])) continue
    const label = htmlText(match[2]).replace(/^【[^】]+】\s*/, '')
    routes.push({
      value,
      routeId: parts[0],
      branch: parts[1] || null,
      routeNumber: parts[2],
      category: parts[3],
      categoryNameZh: CATEGORIES.get(parts[3]).nameZh,
      categoryNameEn: CATEGORIES.get(parts[3]).nameEn,
      selectorLabel: label || null,
    })
  }
  return routes
}

function parseDirections(html) {
  const directions = []
  const directionRe = /<div\s+id=["']div_run_(go|back)["'][\s\S]*?<strong>行駛方向<\/strong>\s*<span>\s*([^<]+?)\s*&nbsp;[\s\S]*?add_fav\(['"]([^'"]+)['"][\s\S]*?<label\s+id=["']Time(?:Go|Back)["'][^>]*>([\s\S]*?)<\/label>/gi
  for (const match of html.matchAll(directionRe)) {
    directions.push({
      direction: match[1] === 'go' ? 'outbound' : 'return',
      directionZh: match[1] === 'go' ? '往程' : '返程',
      nameZh: htmlText(match[2]),
      runId: match[3],
      departures: htmlText(match[4]).split(',').map((time) => time.trim()).filter(Boolean),
    })
  }
  return directions
}

async function postForm(url, form, cookie, referer) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Referer': referer,
      'X-Requested-With': 'XMLHttpRequest',
      ...(cookie ? { Cookie: cookie } : {}),
    },
    body: new URLSearchParams(form),
  })
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`)
  return response
}

async function readStops(runId, cookie) {
  const iframeUrl = `${IFRAME}${runId}`
  const iframe = await fetch(iframeUrl, {
    headers: { Referer: PORTAL, ...(cookie ? { Cookie: cookie } : {}) },
  })
  if (!iframe.ok) throw new Error(`iframe ${iframe.status} ${iframe.statusText}`)
  const iframeHtml = await iframe.text()
  const csrf = csrfFrom(iframeHtml)
  const roadLine = await postForm(ROAD_LINE, {
    run_id: runId,
    lan: 'zh-TW',
    csrfmiddlewaretoken: csrf,
  }, cookie, iframeUrl)
  const stops = await roadLine.json()
  return {
    iframeUrl,
    stops: Array.isArray(stops) ? stops.map((stop) => ({
      index: Number.parseInt(stop.idx, 10) || null,
      nameZh: stop.name || null,
      stopId: stop.stop_Id || null,
      lat: Number.parseFloat(stop.lat) || null,
      lon: Number.parseFloat(stop.lon) || null,
    })) : [],
  }
}

const pageResponse = await fetch(PORTAL)
if (!pageResponse.ok) throw new Error(`portal ${pageResponse.status} ${pageResponse.statusText}`)
const pageHtml = await pageResponse.text()
const cookie = cookieFrom(pageResponse)
const csrf = csrfFrom(pageHtml)
if (!csrf) throw new Error('portal did not expose a CSRF token')

const selected = parseOptions(pageHtml)
if (selected.length === 0) throw new Error('portal exposed no regional route options')

const routes = []
const failures = []
for (const option of selected) {
  try {
    const response = await postForm(DETAIL, {
      route: option.value,
      inputType: 'route',
      csrfmiddlewaretoken: csrf,
    }, cookie, PORTAL)
    const detailHtml = await response.text()
    const title = htmlText(detailHtml.match(/<h3[^>]*class=["']bus_title["'][^>]*>([\s\S]*?)<\/h3>/i)?.[1]) || null
    const operator = htmlText(detailHtml.match(/營運業者\s*<span>([\s\S]*?)<\/span>/i)?.[1]) || null
    const fareUrl = detailHtml.match(/<a\s+href=["']([^"']+)["'][^>]*>票價<\/a>/i)?.[1] ?? null
    const directions = parseDirections(detailHtml)
    for (const direction of directions) {
      try {
        const stopData = await readStops(direction.runId, cookie)
        direction.iframeUrl = stopData.iframeUrl
        direction.stops = stopData.stops
        direction.firstStop = stopData.stops[0] ?? null
        direction.lastStop = stopData.stops.at(-1) ?? null
        direction.stopCount = stopData.stops.length
      } catch (error) {
        failures.push({ route: option.value, runId: direction.runId, stage: 'stops', reason: String(error.message || error) })
        direction.stops = []
        direction.firstStop = null
        direction.lastStop = null
        direction.stopCount = 0
      }
    }
    routes.push({
      ...option,
      title,
      operator,
      fareUrl,
      detailUrl: DETAIL,
      directions,
    })
  } catch (error) {
    failures.push({ route: option.value, stage: 'detail', reason: String(error.message || error) })
    routes.push({ ...option, title: null, operator: null, fareUrl: null, detailUrl: DETAIL, directions: [] })
  }
}

const operators = [...new Set(routes.map((route) => route.operator).filter(Boolean))].sort().map((name) => ({
  name,
  routeCount: routes.filter((route) => route.operator === name).length,
}))

const output = {
  source: {
    portalUrl: PORTAL,
    detailUrl: DETAIL,
    roadLineUrl: ROAD_LINE,
    retrieved: RETRIEVED,
    scope: [...CATEGORIES.entries()].map(([code, category]) => ({ code, ...category })),
  },
  coverage: {
    routeCount: routes.length,
    operatorCount: operators.length,
    directionCount: routes.reduce((total, route) => total + route.directions.length, 0),
    routeFailures: failures.filter((failure) => failure.stage === 'detail').length,
    stopFailures: failures.filter((failure) => failure.stage === 'stops').length,
    fareCoverage: routes.filter((route) => route.fareUrl).length === routes.length ? 'linked' : 'partial',
    note: 'Route identities and schedules are a dated snapshot of the Hsinchu iBus portal. Direction terminals and stop counts derive from the portal GetRoadLine response; fare links are retained, but fare values are not copied into this layer.',
  },
  operators,
  routes,
  failures,
}

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true })
const serialized = `${JSON.stringify(stable(output), null, 2)}\n`
fs.writeFileSync(OUTPUT, serialized)
fs.mkdirSync(path.dirname(PUBLIC_OUTPUT), { recursive: true })
fs.writeFileSync(PUBLIC_OUTPUT, serialized)
console.log(`hsinchu-bus: ${routes.length} routes, ${operators.length} operators, ${output.coverage.directionCount} directions`)
console.log(`hsinchu-bus: ${failures.length} checked fetch failures (${output.coverage.routeFailures} detail, ${output.coverage.stopFailures} stops)`)
console.log(`hsinchu-bus: wrote ${path.relative(ROOT, OUTPUT)}`)
console.log(`hsinchu-bus: wrote ${path.relative(ROOT, PUBLIC_OUTPUT)}`)
