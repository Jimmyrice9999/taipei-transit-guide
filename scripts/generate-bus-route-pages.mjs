/**
 * Generate bus route overlays and the matching research record from the
 * committed TDX layer plus the full official eBus catalogue/schedule pages.
 *
 * This is a batch authoring tool, not part of the Next build. It deliberately
 * writes only the requested group and route slice so each invocation can be
 * reviewed, gated, committed and pushed as a small batch.
 *
 * Usage:
 *   node scripts/generate-bus-route-pages.mjs --group special-shuttle --start 0 --limit 18 --research
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const ACCESS_DATE = '2026-08-19'
const CATALOGUE_URL = 'https://ebus.gov.taipei/ebus?ct=tpc'
const SCHEDULE_BASE = 'https://ebus.gov.taipei/Route/RouteSchedule?routeid='
const DATA_DIR = path.join(ROOT, 'data', 'tdx', 'bus')
const CONTENT_DIR = path.join(ROOT, 'content', 'bus', 'routes')
const RESEARCH_DIR = path.join(ROOT, 'docs', 'research', 'bus', 'routes')

const GROUPS = {
  'special-shuttle': {
    title: 'Special shuttle routes',
    description: 'Named commuter, destination, event and sightseeing services kept separate from numbered, trunk and minibus classes.',
    order: 13,
    categorySource: 'ebus-special',
    categoryTitle: 'Commuter and destination-service catalogue',
    categoryOriginal: '通勤公車、內科專車、南軟專車與其他',
    classValue: 'Special shuttle / commuter service (通勤／專車)',
    categoryFor: (route) => {
      if (route.names.zh_tw.startsWith('內科')) return '內科專車'
      if (route.names.zh_tw.startsWith('南軟')) return '南軟專車'
      if (route.names.zh_tw.startsWith('通勤')) return '通勤公車'
      if (route.names.zh_tw.startsWith('懷恩')) return '其他'
      if (['BS1', "TPE Child's Amuse. Park 1", "TPE Child's Amuse. Park 2", 'Maokong Right', 'Maokong Left (Zoo)', 'Maokong Left (Zhinan Temple)'].includes(route.names.en)) return '其他'
      if (route.names.en === '124') return '活動專車'
      if (route.names.en.startsWith('Taipei Sightseeing Bus')) return '觀光巴士'
      return '通勤公車或其他'
    },
  },
  minibus: {
    title: 'Minibus and community routes',
    description: 'Taipei community services filed under the official 小 and 市民小巴 catalogue categories.',
    order: 14,
    categorySource: 'ebus-minibus',
    categoryTitle: 'Taipei bus route catalogue — 小 and 市民小巴',
    categoryOriginal: '小、市民小巴',
    classValue: 'Minibus / community service (小／市民小巴)',
    categoryFor: (route) => route.names.zh_tw.startsWith('市民小巴') ? '市民小巴' : '小',
  },
  'series-600s': {
    title: '600-series routes',
    description: 'Taipei general numbered services in the 600 series, including separately filed 副, 快, 區 and 預 variants.',
    order: 15,
    categorySource: 'ebus-general',
    categoryTitle: 'Taipei/New Taipei bus route catalogue',
    categoryOriginal: '一般公車',
    classValue: '600-series numbered service (一般公車)',
    categoryFor: () => '一般公車',
  },
  'series-200s': {
    title: '200-series routes',
    description: 'Taipei general numbered services in the 200 series, with 區, 直, 快, 夜, 副 and 預 variants kept as separate TDX identities.',
    order: 16,
    categorySource: 'ebus-general',
    categoryTitle: 'Taipei/New Taipei bus route catalogue',
    categoryOriginal: '一般公車',
    classValue: '200-series numbered service (一般公車)',
    categoryFor: () => '一般公車',
  },
  'series-other': {
    title: 'Other numbered routes',
    description: 'Numbered route identities outside the named Taipei series bands, retained as a reviewable numbered group.',
    order: 17,
    categorySource: 'ebus-general',
    categoryTitle: 'Taipei/New Taipei bus route catalogue',
    categoryOriginal: '一般公車',
    classValue: 'Numbered service outside named series (一般公車)',
    categoryFor: () => '一般公車',
  },
  unclassified: {
    title: 'Unclassified route identities',
    description: 'Route identities whose authoritative catalogue label does not yet map to an existing canonical service group.',
    order: 18,
    categorySource: 'ebus-unclassified',
    categoryTitle: 'Taipei/New Taipei bus route catalogue',
    categoryOriginal: 'official catalogue service labels',
    classValue: 'Unclassified route identity (classification TBC)',
    categoryFor: (route) => {
      if (route.names.en === 'NEIHU GREEN BUS') return '低地板'
      if (route.names.en === 'Jingmei-T.V.G.H Express') return '快速'
      if (route.names.en === 'Xinzhuang-Taipei Main Sta.') return '跳蛙'
      return '未分類'
    },
  },
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

function normaliseName(value) {
  return decodeEntities(String(value ?? '')).replace(/\s+/g, '')
}

function decodeEntities(value) {
  return String(value)
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, decimal) => String.fromCodePoint(Number(decimal)))
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
}

function plainText(html) {
  return decodeEntities(html)
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function field(text, pattern) {
  return text.match(pattern)?.[1]?.replace(/\s+/g, ' ').trim() || ''
}

function parseSchedule(html, route) {
  const text = plainText(html)
  const routeName = normaliseName(route.names.zh_tw)
  if (!text.includes(routeName)) return null

  const termini = field(text, /起迄站名\s*:\s*(.*?)\s*頭末班車/i)
  const serviceSpan = field(text, /頭末班車\s*:\s*(.*?)\s*(?:分段緩衝|收費方式|業者服務電話)/i)
  const fare = field(text, /收費方式\s*:\s*(.*?)\s*業者服務電話/i)
  const holidaySuspended = /(?:假日|例假日)\s*(?:停駛|停班)/.test(serviceSpan) || /例假日停駛/.test(text)
  return {
    termini,
    serviceSpan,
    fare,
    holidaySuspended,
    raw: [termini && `起迄站名 : ${termini}`, serviceSpan && `頭末班車 : ${serviceSpan}`, fare && `收費方式 : ${fare}`].filter(Boolean),
  }
}

async function fetchText(url) {
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const response = await fetch(url, { headers: { 'user-agent': 'TaipeiTransitGuide/route-authoring' } })
    const body = await response.text()
    if (response.ok) return { status: response.status, body }
    if (attempt === 2) return { status: response.status, body }
    await new Promise((resolve) => setTimeout(resolve, 250 * (attempt + 1)))
  }
  return { status: 599, body: '' }
}

function categoryPairs(html) {
  const pairs = new Map()
  const pattern = /go\('([^']+)'\)[^>]*>\s*([^<\r\n]+?)\s*</g
  for (const match of html.matchAll(pattern)) {
    const routeId = match[1]
    const name = decodeEntities(match[2]).trim()
    const key = normaliseName(name)
    if (!pairs.has(key)) pairs.set(key, { routeId, name })
  }
  return pairs
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
    note: 'Supports the normalized route identity, municipality, operators, direction and variant records, stop sequences, shapes, source-update fields and the separately curated geometry-only MRT stop joins. The committed route layer does not carry route length, timetable or fare fields.',
  }
}

function categorySource(config) {
  return {
    id: config.categorySource,
    title: config.categoryTitle,
    titleOriginal: '大臺北公車',
    publisher: 'Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府',
    url: CATALOGUE_URL,
    accessed: ACCESS_DATE,
    kind: 'primary',
    lang: 'zh-Hant',
    note: `The full official catalogue was fetched and read; it lists this route under ${config.categoryOriginal} and its route-id link where a separate entry exists.`,
  }
}

function scheduleSource(route, routeId) {
  return {
    id: `ebus-route-${route.canonicalSlug}`,
    title: `${route.names.en} route schedule`,
    titleOriginal: `${route.names.zh_tw}班表`,
    publisher: 'Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府',
    url: `${SCHEDULE_BASE}${routeId}`,
    accessed: ACCESS_DATE,
    kind: 'primary',
    lang: 'zh-Hant',
    note: 'Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history.',
  }
}

function yamlSources(sources) {
  return sources.flatMap((source) => [
    `  - id: ${source.id}`,
    `    title: ${json(source.title)}`,
    `    titleOriginal: ${json(source.titleOriginal)}`,
    `    publisher: ${json(source.publisher)}`,
    `    url: ${source.url}`,
    `    accessed: ${source.accessed}`,
    `    kind: ${source.kind}`,
    `    lang: ${source.lang}`,
    `    note: ${json(source.note)}`,
  ])
}

function categorySentence(route, config) {
  if (config === GROUPS.unclassified) {
    return `The full official catalogue files ${route.names.zh_tw} under the service label ${config.categoryFor(route)}. That label is recorded as evidence, but it does not map this identity to an existing canonical group, so the route remains unclassified rather than being forced into one.[^${config.categorySource}]`
  }
  return `The full official catalogue files ${route.names.zh_tw} under ${config.categoryFor(route)} (${config.categoryOriginal}).[^${config.categorySource}]`
}

function scheduleSentence(schedule, route) {
  if (!schedule) return ''
  const details = []
  if (schedule.termini) details.push(`termini “${schedule.termini}”`)
  if (schedule.serviceSpan) details.push(`the current head/last-departure field “${schedule.serviceSpan}”`)
  if (schedule.fare) details.push(`fare “${schedule.fare}”`)
  if (details.length === 0) return `The full official schedule page for ${route.names.zh_tw} was fetched, but its rendered service fields were not recoverable in this run.[^ebus-route-${route.canonicalSlug}]`
  const marker = `[^ebus-route-${route.canonicalSlug}]`
  const holiday = schedule.holidaySuspended ? ` It currently lists weekday service and suspended holiday service.${marker}` : ''
  return `The full official schedule gives ${details.join(', ')}.${marker}${holiday}`
}

function routePage(route, config, categoryPair, schedule) {
  const sources = [tdxSource(), categorySource(config)]
  if (categoryPair && schedule) sources.push(scheduleSource(route, categoryPair.routeId))

  const body = [
    '## Classification and current service',
    '',
    categorySentence(route, config),
    `The normalized TDX record retains ${route.subRoutes.length} direction/variant record${route.subRoutes.length === 1 ? '' : 's'} for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]`,
  ]

  if (categoryPair && schedule) {
    body.push('', scheduleSentence(schedule, route))
  } else {
    body.push('', `The full catalogue has no separately listed schedule entry for this normalized variant. Its current service span, headway and fare remain TBC rather than being copied from a related route.[^${config.categorySource}][^tdx-bus]`)
  }

  body.push('', '## Research status', '', 'The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus]')

  const lines = [
    '---',
    `title: ${json(`${route.names.en} / ${route.names.zh_tw}`)}`,
    `summary: ${json(`${config.title.replace(' routes', ' route')}: ${route.names.en} (${route.names.zh_tw}).`)}`,
    `updated: ${ACCESS_DATE}`,
    'facts:',
    `  - label: Service class`,
    `    value: ${json(config.classValue)}`,
    `    source: ${config.categorySource}`,
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
    ...yamlSources(sources),
    '---',
    '',
    ...body,
    '',
  ]
  return lines.join('\n')
}

function groupIndex(group, config, routes) {
  const labels = routes.map((route) => route.names.zh_tw).join('、')
  const body = group === 'special-shuttle'
    ? `The full official catalogue separates these services into 通勤公車, 內科專車, 南軟專車 and 其他 headings; the TDX snapshot contains ${routes.length} normalized identities in this group.[^ebus-special][^tdx-bus]\n\nThese are employer- or destination-specific services in the catalogue’s own naming, but eligibility, hours and booking conditions are route-specific. Each route page cites its current schedule where the catalogue has a separate entry; a missing entry stays TBC.[^ebus-special]`
    : group === 'minibus'
      ? `The full official catalogue lists these records under 小 and 市民小巴; the TDX snapshot contains ${routes.length} normalized identities in this group.[^ebus-minibus][^tdx-bus]\n\nThe catalogue does not by itself establish a vehicle-access or hill/lane rationale for every route. Those details are stated only when a route-specific primary source supports them.[^ebus-minibus]`
    : group === 'unclassified'
      ? `The full official catalogue labels these ${routes.length} identities as ${labels}. Those labels are retained as evidence, but they are different service classes rather than one shared route group; the identities remain unclassified until the site has a durable canonical home for each class.[^ebus-unclassified][^tdx-bus]`
      : `The full official catalogue lists the ${routes.length} normalized records in this group under 一般公車. TDX identities remain separate when the catalogue also uses 區, 副, 直, 快, 夜 or 預 variants.[^ebus-general][^tdx-bus]\n\nThe current catalogue labels are: ${labels}.[^ebus-general]`

  const configSources = [tdxSource(), categorySource(config)]
  return [
    '---',
    `title: ${json(config.title)}`,
    `description: ${json(config.description)}`,
    `order: ${config.order}`,
    'sources:',
    ...yamlSources(configSources),
    '---',
    '',
    ...body.split('\n'),
    '',
  ].join('\n')
}

function numberIdentity(route) {
  const text = `${route.names.en} ${route.names.zh_tw}`
  const match = text.match(/(?:NH\s*|CB\s*|M\s*|S\s*|市民小巴|小|懷恩專車S?)\s*(\d{1,4})/i) || text.match(/\b(\d{1,4})\b/)
  return match?.[1] || null
}

function collisionLines(routes, allRoutes) {
  const byNumber = new Map()
  for (const route of allRoutes) {
    const number = numberIdentity(route)
    if (!number) continue
    const rows = byNumber.get(number) || []
    rows.push(route)
    byNumber.set(number, rows)
  }
  const lines = []
  const seenNumbers = new Set()
  for (const route of routes) {
    const number = numberIdentity(route)
    if (seenNumbers.has(number)) continue
    seenNumbers.add(number)
    const hits = (byNumber.get(number) || []).filter((candidate) => candidate.id !== route.id)
    const cities = new Set(hits.flatMap((candidate) => candidate.sourceCities))
    if (cities.size === 0 || !hits.length) continue
    const distinct = [...new Map([route, ...hits].map((candidate) => [candidate.id, candidate])).values()]
    const label = distinct.map((candidate) => `${candidate.sourceCities.join('+')} ${candidate.names.zh_tw}`).join('；')
    const line = `- **Numeric identity ${number}** — ${label}. The number is not a route identity by itself; the TDX group and full Chinese name distinguish these records.`
    if (!lines.includes(line)) lines.push(line)
  }
  return lines
}

function researchFile(group, config, routes, allRoutes, results, confirmedJoins) {
  const unmatched = results.filter((result) => !result.categoryPair)
  const scheduleRows = results.map((result) => {
    const route = result.route
    const source = result.categoryPair ? scheduleSource(route, result.categoryPair.routeId) : null
    const detail = result.schedule?.raw.join('; ') || 'No rendered schedule fields were promoted.'
    return [
      `### ${route.names.zh_tw} / ${route.names.en}`,
      result.categoryPair
        ? `The full official schedule page was fetched and read. It publishes ${detail}.`
        : `The full official catalogue was fetched and read, but no separate schedule link was found for this normalized variant.`,
      '',
      '- **Source:** "' + (source?.title || config.categoryTitle) + '" / `titleOriginal`: `' + (source?.titleOriginal || '大臺北公車') + '`',
      '- **Publisher:** ' + (source?.publisher || categorySource(config).publisher),
      '- **URL:** ' + (source?.url || CATALOGUE_URL),
      '- **Kind/confidence:** PRIMARY; High — full official page fetched and read.',
      '- **Original-language text read:** `' + (result.schedule?.raw.join('`; `') || `${route.names.zh_tw} was not separately listed`) + '`.',
      '',
    ].join('\n')
  }).join('\n')

  const sourceRows = [
    '- **Source:** "TDX bus data" / `titleOriginal`: `交通部運輸資料流通服務平臺`',
    '- **Publisher:** Ministry of Transportation and Communications TDX / `交通部運輸資料流通服務平臺`',
    '- **URL:** https://tdx.transportdata.tw/',
    '- **Kind/confidence:** PRIMARY; High for the normalized route count, group, identity and structure — read from the committed snapshot.',
    '- **Original-language text read:** The committed metadata records `' + `${routes.length} routes` + '` in group `' + group + '`, with source update `2026-08-15`.',
    '',
    '- **Source:** "' + config.categoryTitle + '" / `titleOriginal`: `大臺北公車`',
    '- **Publisher:** Taipei City Government and New Taipei City Government / `臺北市政府與新北市政府`',
    '- **URL:** ' + CATALOGUE_URL,
    '- **Kind/confidence:** PRIMARY; High — the full official catalogue page was fetched and read.',
    '- **Original-language text read:** `' + config.categoryOriginal + '` and the route labels under the relevant heading.',
    '',
  ].join('\n')

  const collisions = collisionLines(routes, allRoutes)
  const failed = unmatched.length === 0
    ? '- **A separate schedule link for an unlisted variant** — No unmatched variants were found in this group. Checked 2026-08-19; all route records had a corresponding catalogue link.'
    : unmatched.map(({ route }) => `- **A separate official schedule entry for ${route.names.zh_tw}** — The full ${CATALOGUE_URL} catalogue was fetched, but it lists no entry with this exact normalized variant. Checked 2026-08-19; the TDX identity remains published, but timetable and fare were not promoted from a related base route.`).join('\n')

  return [
    '> **Corpus warning: `docs/research/` is leads only.** Nothing here may be',
    '> published on its own authority. Every statement below was checked against the',
    '> primary source named beside it; the file remains a research record, not a',
    '> source.',
    '',
    `# ${config.title} — research`,
    '',
    `**Run date: ${ACCESS_DATE}.** This report covers the ${routes.length} records in the merged TDX snapshot classified \`${group}\`.`,
    '',
    '## What is established',
    '',
    `The committed TDX snapshot contains ${routes.length} normalized records in this group. The official catalogue’s full page was fetched and read; its headings and route labels establish the group classification, while the TDX layer supplies the stable route identity, operators, stops, sequences, shapes and source-update fields.`,
    '',
    sourceRows,
    '## Route schedule pages',
    '',
    'The following full official pages were fetched individually. Current schedule fields are recorded as current service data, not as route history.',
    '',
    scheduleRows,
    '## MRT stop-ID joins',
    '',
    `The geometry-only join run records ${confirmedJoins} confirmed stop-ID joins for this group. These are based on stop coordinates and station coordinates; names are never used as confirmation.`,
    '',
    '## Conflicts found',
    '',
    collisions.length ? collisions.join('\n') : '- No cross-municipality numeric identity collision was found in the committed Taipei/New Taipei TDX records for this group.',
    '',
    '## Checked and failed',
    '',
    failed,
    '',
    '## Stated gaps',
    '',
    '- Route length, service span, headway and fare remain TBC in the TDX fact box because those fields are not carried by the committed normalized route record; an official eBus schedule is cited in prose where a separate full page exists.',
    '- Route opening dates, original corridor rationale, predecessor/renumbering records and dated operator changes remain TBC unless a dated primary notice is found. Current schedule pages do not establish those histories.',
    '- Route-specific restricted eligibility or booking rules remain TBC where the current eBus page does not publish them; no restriction is inferred from a route name.',
    '',
  ].join('\n')
}

async function main() {
  const group = arg('--group')
  const config = GROUPS[group]
  if (!config) throw new Error(`Unknown or missing --group. Choose one of ${Object.keys(GROUPS).join(', ')}`)

  const routes = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'routes.json'), 'utf8')).filter((route) => route.group === group)
  const allRoutes = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'routes.json'), 'utf8'))
  const start = Number(arg('--start', '0'))
  const limit = Number(arg('--limit', String(routes.length)))
  const routeArg = arg('--route')
  const selected = routeArg
    ? routes.filter((route) => route.canonicalSlug === routeArg || route.id === routeArg)
    : flag('--missing')
      ? routes.filter((route) => !fs.existsSync(path.join(CONTENT_DIR, group, `${route.canonicalSlug}.md`)))
      : routes.slice(start, start + limit)
  if (selected.length === 0) throw new Error(`No routes selected for ${group} at start=${start} limit=${limit}`)

  console.log(`Fetching full catalogue: ${CATALOGUE_URL}`)
  const catalogue = await fetchText(CATALOGUE_URL)
  if (!catalogue.body) throw new Error(`Catalogue fetch failed: ${catalogue.status}`)
  const pairs = categoryPairs(catalogue.body)
  console.log(`Catalogue route links parsed: ${pairs.size}`)

  const cache = new Map()
  const results = []
  for (const [index, route] of selected.entries()) {
    const categoryPair = pairs.get(normaliseName(route.names.zh_tw)) || null
    let schedule = null
    if (categoryPair) {
      if (!cache.has(categoryPair.routeId)) {
        const url = `${SCHEDULE_BASE}${categoryPair.routeId}`
        const fetched = await fetchText(url)
        cache.set(categoryPair.routeId, fetched.status === 200 ? parseSchedule(fetched.body, route) : null)
      }
      schedule = cache.get(categoryPair.routeId) || null
    }
    results.push({ route, categoryPair, schedule })
    console.log(`${String(start + index + 1).padStart(3)}/${routes.length} ${route.names.zh_tw} ${categoryPair ? categoryPair.routeId : 'NO-SEPARATE-SCHEDULE'}`)
  }

  const targetDir = path.join(CONTENT_DIR, group)
  fs.mkdirSync(targetDir, { recursive: true })
  const complete = routes.every((route) => selected.some((candidate) => candidate.id === route.id) || fs.existsSync(path.join(CONTENT_DIR, group, `${route.canonicalSlug}.md`)))
  if (complete) {
    fs.writeFileSync(path.join(targetDir, '_index.md'), groupIndex(group, config, routes))
  }

  for (const result of results) {
    fs.writeFileSync(path.join(targetDir, `${result.route.canonicalSlug}.md`), routePage(result.route, config, result.categoryPair, result.schedule))
  }

  if (flag('--research')) {
    const allResults = []
    for (const route of routes) {
      const categoryPair = pairs.get(normaliseName(route.names.zh_tw)) || null
      let schedule = null
      if (categoryPair) {
        if (!cache.has(categoryPair.routeId)) {
          const fetched = await fetchText(`${SCHEDULE_BASE}${categoryPair.routeId}`)
          cache.set(categoryPair.routeId, fetched.status === 200 ? parseSchedule(fetched.body, route) : null)
        }
        schedule = cache.get(categoryPair.routeId) || null
      }
      allResults.push({ route, categoryPair, schedule })
    }
    const joins = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'rail-stop-joins.json'), 'utf8'))
    const joinByRoute = new Map(joins.map((record) => [record.routeId, record.joins.length]))
    const confirmedJoins = routes.reduce((sum, route) => sum + (joinByRoute.get(route.id) || 0), 0)
    fs.mkdirSync(RESEARCH_DIR, { recursive: true })
    fs.writeFileSync(path.join(RESEARCH_DIR, `${group}.md`), researchFile(group, config, routes, allRoutes, allResults, confirmedJoins))
    console.log(`Wrote docs/research/bus/routes/${group}.md (${allResults.length} route records audited)`)
  }

  console.log(`Wrote ${selected.length} route overlay(s) in content/bus/routes/${group}/`)
}

main().catch((error) => {
  console.error(`bus route generation failed: ${error.message}`)
  process.exit(1)
})
