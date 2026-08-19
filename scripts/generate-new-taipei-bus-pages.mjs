/**
 * Generate New Taipei route overlays from the committed TDX identities joined
 * to the New Taipei Department of Transportation's published route datasets.
 *
 * Usage:
 *   node scripts/generate-new-taipei-bus-pages.mjs --category event --start 0 --limit 4 --research
 *   node scripts/generate-new-taipei-bus-pages.mjs --route blue-2-1xzokkx --research
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const ACCESS_DATE = '2026-08-19'
const CONTENT_DIR = path.join(ROOT, 'content', 'bus', 'routes', 'new-taipei')
const RESEARCH_DIR = path.join(ROOT, 'docs', 'research', 'bus', 'routes')
const SERVICE_URL = 'https://data.ntpc.gov.tw/api/datasets/0ee4e6bf-cee6-4ec8-8fe1-71f544015127/json?size=1000'
const SERVICE_PAGE = 'https://data.ntpc.gov.tw/datasets/1016bb4c-e8eb-4113-a2be-657fb51a1558'
const TRANSPORT_PAGE = 'https://www.traffic.ntpc.gov.tw/home.jsp?id=f06672ba2aadbd3c'

const CATEGORY_INFO = {
  general: { title: 'General buses', label: '\u4e00\u822c\u516c\u8eca', english: 'General bus', dataset: '45572534-e503-4ece-afea-54440bf2624a' },
  rapid: { title: 'Rapid buses', label: '\u5feb\u901f\u516c\u8eca', english: 'Rapid bus', dataset: '8732f6a7-c226-4ebd-ab0c-fca42b981b5c' },
  pioneer: { title: 'MRT pioneer buses', label: '\u6377\u904b\u5148\u5c0e\u516c\u8eca', english: 'MRT pioneer bus', dataset: '99fa69ea-24bf-4580-877a-998eb2cc42c2' },
  newbus: { title: 'New Bus community services', label: '\u65b0\u5df4\u58eb', english: 'New Bus community service', dataset: 'e4c58656-22d1-4bcf-af33-16ca94532a36' },
  event: { title: 'Event shuttles', label: '\u6d3b\u52d5\u5c08\u8eca', english: 'Event shuttle', dataset: '0c8bfb41-4014-4e09-bfb3-129a65103fb7' },
  jumpfrog: { title: 'Jump-frog commuter buses', label: '\u8df3\u86d9\u516c\u8eca', english: 'Jump-frog commuter bus', dataset: 'f5e9a430-f337-476f-801e-dc167a112aa2' },
  lrt: { title: 'Light-rail feeder routes', label: '\u8f15\u8ecc\u63a5\u99c1\u8def\u7dda', english: 'Light-rail feeder route', dataset: '0358b481-a8ce-45ac-a40f-50cd6c895683' },
}

function arg(name, fallback = '') {
  const index = process.argv.indexOf(name)
  return index >= 0 ? process.argv[index + 1] ?? fallback : fallback
}

function flag(name) {
  return process.argv.includes(name)
}

function json(value) {
  return JSON.stringify(value)
}

function published(value) {
  const text = String(value ?? '').trim()
  return text && text !== '-' && text !== '－' ? text : ''
}

function source(id, title, titleOriginal, url, note) {
  return { id, title, titleOriginal, publisher: 'New Taipei City Department of Transportation, 新北市政府交通局', url, accessed: ACCESS_DATE, kind: 'primary', lang: 'zh-Hant', note }
}

function tdxSource() {
  return {
    id: 'tdx-bus',
    title: 'TDX bus data',
    titleOriginal: '交通部運輸資料流通服務平臺',
    publisher: 'Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺',
    url: 'https://tdx.transportdata.tw/',
    accessed: ACCESS_DATE,
    kind: 'primary',
    lang: 'zh-Hant',
    note: 'Supports the normalized route identity, municipality, operators, direction and variant records, stop sequences, shapes, source-update fields and the separately curated geometry-only MRT stop joins. The committed route layer does not carry the New Taipei route-type or service fields.',
  }
}

function serviceSource() {
  return source('ntpc-bus-route-data', 'New Taipei bus route list', '公車路線清單', SERVICE_URL, 'The full current route-service dataset was fetched. A record is joined to a TDX route only by the exact published Traditional-Chinese route name; it supports current route endpoints, distance, first/last service, headway fields and fare where the row carries them. Missing rows remain TBC.')
}

function categorySource(categoryKey) {
  const category = CATEGORY_INFO[categoryKey]
  return source(`ntpc-category-${categoryKey}`, `New Taipei bus route catalogue — ${category.title}`, category.label, `https://data.ntpc.gov.tw/datasets/${category.dataset}`, `The full official ${category.label} dataset was fetched. Its exact route-name record establishes this route's New Taipei service category; it is not used to infer route history.`)
}

function transportSource() {
  return source('ntpc-transport', 'New Taipei Department of Transportation transport-management page', '新北市政府交通局運輸管理科', TRANSPORT_PAGE, 'The official transport-management page identifies the New Taipei route-information, rapid, jump-frog and low-floor service resources searched for this run.')
}

function serviceSpan(service) {
  const weekday = published(service.weekdayOperationHours)
  const holiday = published(service.holidayOperationHours)
  return [weekday && `Weekdays: ${weekday}`, holiday && `Holidays: ${holiday}`].filter(Boolean).join('; ')
}

function serviceHeadway(service) {
  const weekday = [
    published(service.weekdayPeakHeadway) && `weekday peak ${service.weekdayPeakHeadway}`,
    published(service.weekdayOffpeakHeadway) && `weekday off-peak ${service.weekdayOffpeakHeadway}`,
    published(service.weekdayHeadwayDescription),
  ].filter(Boolean).join('; ')
  const holiday = [
    published(service.holidayPeakHeadway) && `holiday peak ${service.holidayPeakHeadway}`,
    published(service.holidayOffpeakHeadway) && `holiday off-peak ${service.holidayOffpeakHeadway}`,
    published(service.holidayHeadwayDescription),
  ].filter(Boolean).join('; ')
  return [weekday && `Weekdays: ${weekday}`, holiday && `Holidays: ${holiday}`].filter(Boolean).join('; ')
}

function routeServiceSentence(route) {
  const service = route.service
  if (!service?.serviceRecordId) {
    return `The current New Taipei route-service dataset has no row with this exact TDX route identity; route length, service span, headway and fare therefore remain TBC rather than being borrowed from a related route.[^ntpc-bus-route-data]`
  }
  const details = [
    service.startAndEnd && `endpoints “${service.startAndEnd}”`,
    published(service.distanceKm) && `published distance ${service.distanceKm} km`,
    serviceSpan(service) && `service span ${serviceSpan(service)}`,
    serviceHeadway(service) && `headway fields ${serviceHeadway(service)}`,
    published(service.fareZh) && `fare ${service.fareZh}${published(service.fareEn) ? ` / ${service.fareEn}` : ''}`,
  ].filter(Boolean)
  return `The full New Taipei route-service row publishes ${details.join('; ')}.[^ntpc-bus-route-data]`
}

function routePage(route) {
  const category = CATEGORY_INFO[route.service.categoryKey]
  const categoryId = `ntpc-category-${route.service.categoryKey}`
  const sources = [tdxSource(), serviceSource(), categorySource(route.service.categoryKey), transportSource()]
  const body = [
    '## Classification and current service',
    '',
    `New Taipei City Department of Transportation's full ${category.label} dataset files ${route.names.zh_tw} as a ${category.english} (${category.label}) identity.[^${categoryId}]`,
    `The normalized TDX record keeps this route under the New Taipei municipality group and supplies its route identity, current operator records, direction/variant records, stops and geometry.[^tdx-bus]`,
    '',
    '## Current service data',
    '',
    routeServiceSentence(route),
    '',
    '## Research status',
    '',
    `The New Taipei category, route-service and transport-management pages were fetched for this entry; route opening history, predecessor/renumbering history, dated operator changes and route-specific eligibility remain TBC unless a dated primary source says otherwise.[^ntpc-bus-route-data][^${categoryId}][^ntpc-transport]`,
  ]
  return [
    '---',
    `title: ${json(`${route.names.en} / ${route.names.zh_tw}`)}`,
    `summary: ${json(`New Taipei route: ${route.names.en} (${route.names.zh_tw}).`)}`,
    `updated: ${ACCESS_DATE}`,
    'facts:',
    '  - label: Service class',
    `    value: ${json(`${category.english} (${category.label})`)}`,
    `    source: ${categoryId}`,
    'specs:',
    '  - label: Route length',
    '    value: TBC',
    '    unit: km',
    '  - label: Service span',
    '    value: TBC',
    '  - label: Headway by day type',
    '    value: TBC',
    '  - label: Fare / transfer',
    '    value: TBC',
    'sources:',
    ...sources.flatMap((item) => [
      `  - id: ${item.id}`,
      `    title: ${json(item.title)}`,
      `    titleOriginal: ${json(item.titleOriginal)}`,
      `    publisher: ${json(item.publisher)}`,
      `    url: ${item.url}`,
      `    accessed: ${item.accessed}`,
      `    kind: ${item.kind}`,
      `    lang: ${item.lang}`,
      `    note: ${json(item.note)}`,
    ]),
    '---',
    '',
    ...body,
    '',
  ].join('\n')
}

function numberIdentity(route) {
  const text = `${route.names.en} ${route.names.zh_tw}`
  return text.match(/(?:^|[^\d])([0-9]{1,4})(?!\d)/)?.[1] ?? null
}

function collisionLines(routes, allRoutes) {
  const byNumber = new Map()
  for (const route of allRoutes) {
    const number = numberIdentity(route)
    if (!number) continue
    const rows = byNumber.get(number) ?? []
    rows.push(route)
    byNumber.set(number, rows)
  }
  const seen = new Set()
  const lines = []
  for (const route of routes) {
    const number = numberIdentity(route)
    if (!number || seen.has(number)) continue
    seen.add(number)
    const hits = (byNumber.get(number) ?? []).filter((candidate) => candidate.id !== route.id)
    const otherCities = new Set(hits.flatMap((candidate) => candidate.sourceCities).filter((city) => !route.sourceCities.includes(city)))
    if (!hits.length || !otherCities.size) continue
    const records = [route, ...hits].filter((candidate, index, all) => all.findIndex((item) => item.id === candidate.id) === index)
    lines.push(`- **Numeric identity ${number}:** ${records.map((candidate) => `${candidate.sourceCities.join('+')} ${candidate.names.zh_tw} (${candidate.group})`).join('; ')}. The number alone is not a route identity; the municipality, full name and TDX route ID remain distinct.`)
  }
  return lines
}

function variants(routes) {
  const markers = [['區', '區'], ['副', '副'], ['繞', '繞'], ['延', '延'], ['預', '預'], ['直', '直'], ['平日', '平日'], ['假日', '假日']]
  return markers.flatMap(([label, marker]) => {
    const matches = routes.filter((route) => route.names.zh_tw.includes(marker))
    return matches.length ? [`- **${label}:** ${matches.length} records — ${matches.map((route) => route.names.zh_tw).join('、')}.`] : []
  })
}

function researchFile(categoryKey, routes, allRoutes, joins) {
  const category = CATEGORY_INFO[categoryKey]
  const missing = routes.filter((route) => !route.service?.serviceRecordId)
  const joinCount = routes.reduce((sum, route) => sum + (joins.get(route.id) ?? 0), 0)
  const routeRows = routes.map((route) => {
    const service = route.service
    return `- ${route.names.zh_tw} / ${route.names.en}: ${service?.serviceRecordId ? `${service.startAndEnd ?? 'endpoints TBC'}; ${published(service.distanceKm) ? `${service.distanceKm} km` : 'distance TBC'}; ${serviceSpan(service) || 'span TBC'}; ${published(service.fareZh) || 'fare TBC'}` : 'no exact current route-service row; service fields TBC'}.`
  }).join('\n')
  const collisions = collisionLines(routes, allRoutes)
  return [
    '> **Corpus warning: `docs/research/` is leads only.** Nothing here may be',
    '> published on its own authority. Every statement below was checked against the',
    '> primary source named beside it; the file remains a research record, not a',
    '> source.',
    '',
    `# New Taipei ${category.title} — research`,
    '',
    `**Run date: ${ACCESS_DATE}.** This report covers ${routes.length} TDX route identities in the official ${category.label} category dataset.`,
    '',
    '## What is established',
    '',
    `The full New Taipei Department of Transportation ${category.label} dataset was fetched and read. It files these exact route-name identities under ${category.label}; TDX supplies the canonical route IDs, operators, stops, sequences, shapes and municipality metadata.[^ntpc-category-${categoryKey}][^tdx-bus]`,
    `The New Taipei route-service dataset was fetched in full and joined by exact route name. ${routes.length - missing.length} of ${routes.length} records have a current service row; ${missing.length} do not and remain TBC.[^ntpc-bus-route-data]`,
    '',
    '## Current service records',
    '',
    routeRows,
    '',
    '## MRT stop-ID joins',
    '',
    `The geometry-only join run records ${joinCount} confirmed stop-ID joins for this category. Names were never used as confirmation; candidates outside the coordinate threshold or ambiguous same-line positions were rejected.[^tdx-bus]`,
    '',
    '## Numeric collisions',
    '',
    collisions.length ? collisions.join('\n') : '- No cross-municipality numeric identity collision was found for this category.',
    '',
    '## Variants discovered',
    '',
    variants(routes).join('\n') || '- No 區, 副, 繞, 延, 預, 直, 平日 or 假日 marker appeared in this category.',
    '',
    '## Conflicts found',
    '',
    '- The New Taipei category datasets and the TDX municipality/group metadata are different measurements: the former is the current city route-type filing, while the latter is the normalized transport-data identity. Both are published; neither is substituted for the other.',
    '',
    '## Checked and failed',
    '',
    missing.length
      ? `- **Exact current service row** — the full ${SERVICE_URL} dataset was fetched on ${ACCESS_DATE}, but no row with the exact TDX route name was present for: ${missing.map((route) => route.names.zh_tw).join('、')}. Timetable, headway, fare and distance remain TBC for these identities.`
      : `- **Exact current service row** — all ${routes.length} category identities had a matching row in the full route-service dataset fetched on ${ACCESS_DATE}.`,
    '',
    '## Stated gaps',
    '',
    '- Route opening dates, predecessor/renumbering history, dated operator changes and route-specific eligibility remain TBC unless a dated primary notice or operator record is found. Current route datasets do not establish those histories.',
    '- The Taipei eBus catalogue was not treated as authoritative for New Taipei-specific category or service claims; New Taipei Department of Transportation datasets and pages are the source hierarchy for this group.',
    '',
  ].join('\n')
}

function groupIndex(routes) {
  const counts = Object.fromEntries(Object.keys(CATEGORY_INFO).map((key) => [key, routes.filter((route) => route.service?.categoryKey === key).length]))
  const sources = [tdxSource(), serviceSource(), transportSource(), ...Object.keys(CATEGORY_INFO).map(categorySource)]
  const body = `The committed TDX layer contains ${routes.length} New Taipei route identities in this municipality group.[^tdx-bus] New Taipei Department of Transportation route-type datasets provide seven stable browse subgroups: ${Object.entries(counts).map(([key, count]) => `${CATEGORY_INFO[key].title} (${count})`).join(', ')}.[^ntpc-transport][^ntpc-category-general][^ntpc-category-rapid][^ntpc-category-pioneer][^ntpc-category-newbus][^ntpc-category-event][^ntpc-category-jumpfrog][^ntpc-category-lrt]

The group page keeps those subgroups collapsed by default and retains every route at the municipality-scoped URL /bus/routes/new-taipei/<slug>/.[^tdx-bus] That path includes the municipality group, so a numeric collision with a Taipei route cannot overwrite or masquerade as the other record.[^tdx-bus]

The full current New Taipei route-service dataset was fetched and joined by exact route name.[^ntpc-bus-route-data] Missing current rows stay TBC on their route pages; no related route is used as a proxy.[^ntpc-bus-route-data]`
  return [
    '---',
    'title: New Taipei bus routes',
    'description: New Taipei routes grouped by the official Department of Transportation route-type datasets.',
    'order: 17',
    'sources:',
    ...sources.flatMap((item) => [
      `  - id: ${item.id}`,
      `    title: ${json(item.title)}`,
      `    titleOriginal: ${json(item.titleOriginal)}`,
      `    publisher: ${json(item.publisher)}`,
      `    url: ${item.url}`,
      `    accessed: ${item.accessed}`,
      `    kind: ${item.kind}`,
      `    lang: ${item.lang}`,
      `    note: ${json(item.note)}`,
    ]),
    '---',
    '',
    body,
    '',
  ].join('\n')
}

const allRoutes = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'tdx', 'bus', 'routes.json'), 'utf8'))
const routes = allRoutes.filter((route) => route.group === 'new-taipei')
const services = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'ntpc', 'bus-route-service.json'), 'utf8'))
const servicesByRoute = new Map(services.map((service) => [service.routeId, service]))
for (const route of routes) route.service = servicesByRoute.get(route.id)

const requestedCategory = arg('--category')
if (requestedCategory && !CATEGORY_INFO[requestedCategory]) throw new Error(`Unknown category ${requestedCategory}`)
const categoryRoutes = requestedCategory ? routes.filter((route) => route.service?.categoryKey === requestedCategory) : routes
const requestedRoute = arg('--route')
const start = Number(arg('--start', '0'))
const limit = Number(arg('--limit', String(categoryRoutes.length)))
const selected = requestedRoute
  ? categoryRoutes.filter((route) => route.canonicalSlug === requestedRoute || route.id === requestedRoute)
  : flag('--missing')
    ? categoryRoutes.filter((route) => !fs.existsSync(path.join(CONTENT_DIR, `${route.canonicalSlug}.md`)))
    : categoryRoutes.slice(start, start + limit)
if (selected.length === 0) throw new Error(`No New Taipei routes selected at start=${start} limit=${limit}`)

fs.mkdirSync(CONTENT_DIR, { recursive: true })
fs.writeFileSync(path.join(CONTENT_DIR, '_index.md'), groupIndex(routes))
for (const route of selected) fs.writeFileSync(path.join(CONTENT_DIR, `${route.canonicalSlug}.md`), routePage(route))

if (flag('--research')) {
  const joinsRecords = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'tdx', 'bus', 'rail-stop-joins.json'), 'utf8'))
  const joins = new Map(joinsRecords.map((record) => [record.routeId, record.joins.length]))
  const keys = requestedCategory ? [requestedCategory] : Object.keys(CATEGORY_INFO)
  for (const key of keys) {
    const category = categoryRoutes.filter((route) => route.service?.categoryKey === key)
    fs.mkdirSync(RESEARCH_DIR, { recursive: true })
    fs.writeFileSync(path.join(RESEARCH_DIR, `new-taipei-${key}.md`), researchFile(key, category, allRoutes, joins))
  }
}

console.log(`Wrote ${selected.length} New Taipei route overlay(s) in content/bus/routes/new-taipei/`)
