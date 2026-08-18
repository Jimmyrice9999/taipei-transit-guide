import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const operators = JSON.parse(fs.readFileSync(path.join(root, 'data/tdx/bus/operators.json'), 'utf8'))
const routes = JSON.parse(fs.readFileSync(path.join(root, 'data/tdx/bus/routes.json'), 'utf8'))

const sourceId = 'tdx-bus-operator-pull'
const sourceBlock = `  - id: ${sourceId}
    title: TDX bus operator and route pull
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Supports the committed operator records, contact fields, source municipalities, operator IDs, route associations and route names; the pull contains no ownership, fleet-model, depot or contract-history fields.`

const quote = (value) => JSON.stringify(String(value ?? ''))
const displayName = (record) =>
  record.names?.en || record.operatorCode || (record.operatorNo ? `Operator ${record.operatorNo}` : record.id)
const chineseName = (record) => record.names?.zh_tw || 'TBC'
const cityName = (record) => (record.sourceCities || []).join(', ') || 'TBC'
const slug = (record) => record.id.replace(/^bus-operator-/, '').toLowerCase()

const routeCounts = new Map(operators.map((record) => [record.id, 0]))
const operatorRoutes = new Map(operators.map((record) => [record.id, []]))
for (const route of routes) {
  for (const operatorId of route.operatorIds || []) {
    if (!operatorRoutes.has(operatorId)) operatorRoutes.set(operatorId, [])
    operatorRoutes.get(operatorId).push(route)
    routeCounts.set(operatorId, (routeCounts.get(operatorId) || 0) + 1)
  }
}

const routeLabel = (route) => {
  const en = route.names?.en || ''
  const zh = route.names?.zh_tw || ''
  const english = en && en !== zh ? `\`${en.replaceAll('`', '')}\`` : en ? `\`${en.replaceAll('`', '')}\`` : ''
  const chinese = zh && zh !== en ? zh : ''
  return [english, chinese].filter(Boolean).join(' / ') || route.canonicalSlug
}

const routeItem = (route) => {
  const relative = path.join(root, 'content/bus/routes', route.group, `${route.canonicalSlug}.md`)
  const label = routeLabel(route)
  if (route.group === 'colour-brown' && fs.existsSync(relative)) {
    return `- [${label}](/bus/routes/${route.group}/${route.canonicalSlug}/) [^${sourceId}]`
  }
  return `- ${label} [^${sourceId}]`
}

function page(record) {
  const name = displayName(record)
  const cities = cityName(record)
  const routesForOperator = [...(operatorRoutes.get(record.id) || [])].sort((a, b) => a.canonicalSlug.localeCompare(b.canonicalSlug))
  const recordSlug = slug(record)
  const title = `${name} — ${cities} TDX operator record`
  const urlValue = record.url || 'TBC'
  const codeValue = record.operatorCode || 'TBC'
  const noValue = record.operatorNo || 'TBC'
  const phoneValue = record.phone || 'TBC'
  const routeList = routesForOperator.length
    ? routesForOperator.map(routeItem).join('\n')
    : `No route record in the committed TDX route pull currently references this operator record [^${sourceId}].`

  return `---
title: ${quote(title)}
summary: ${quote(`TDX operator record for ${name} in ${cities}.`)}
updated: 2026-08-18
facts:
  - label: English name
    value: ${quote(record.names?.en || 'TBC')}
    source: ${sourceId}
  - label: Chinese name
    value: ${quote(chineseName(record))}
    source: ${sourceId}
  - label: TDX operator record ID
    value: ${quote(record.id)}
    source: ${sourceId}
  - label: TDX operator code
    value: ${quote(codeValue)}
    source: ${sourceId}
  - label: TDX operator number
    value: ${quote(noValue)}
    source: ${sourceId}
  - label: Source municipality
    value: ${quote(cities)}
    source: ${sourceId}
  - label: Routes in committed pull
    value: ${quote(routesForOperator.length)}
    source: ${sourceId}
  - label: TDX phone
    value: ${quote(phoneValue)}
    source: ${sourceId}
  - label: TDX-published URL
    value: ${quote(urlValue)}
    source: ${sourceId}
specs:
  - label: Fleet models
    value: TBC
  - label: Depots or garages
    value: TBC
  - label: Contract history
    value: TBC
sources:
${sourceBlock}
---

## TDX record

The committed TDX pull identifies this page as the operator record for ${name} (${chineseName(record)}), with source municipality ${cities} [^${sourceId}].

TDX publishes the record ID ${record.id}, operator code ${codeValue}, operator number ${noValue}, phone ${phoneValue} and URL ${urlValue} for this record [^${sourceId}].

This is a data record, not a claim that every TDX record with the same company name is a separate legal entity [^${sourceId}].

## Routes associated with this record

The list below is generated from the committed route pull’s operatorIds associations, so it records the current data snapshot rather than a hand-maintained route roster [^${sourceId}].

${routeList}

## Research gaps

The committed TDX operator record contains no founding history, ownership structure, fleet-model roster, depot or garage field, or contract-history field; each remains TBC here [^${sourceId}].

The record’s URL is reproduced as TDX metadata, but a company-history, ownership, fleet, depot or dated contract claim requires a full page from the operator or responsible government authority [^${sourceId}].
`
}

const operatorDir = path.join(root, 'content/bus/operators')
fs.mkdirSync(operatorDir, { recursive: true })
for (const record of operators) {
  fs.writeFileSync(path.join(operatorDir, `${slug(record)}.md`), page(record), 'utf8')
}

const ranked = operators
  .map((record) => ({ record, count: routeCounts.get(record.id) || 0 }))
  .sort((a, b) => b.count - a.count || displayName(a.record).localeCompare(displayName(b.record)))

const indexBody = ranked
  .map(({ record, count }) => `- [${displayName(record)} — ${cityName(record)}](/bus/operators/${slug(record)}/) — ${count} route records [^${sourceId}]`)
  .join('\n')

fs.writeFileSync(path.join(operatorDir, '_index.md'), `---
title: Bus operators
description: TDX operator records, generated route associations and the fields that still require company or government sources.
order: 1
sources:
${sourceBlock}
---

The committed TDX pull contains ${operators.length} operator records associated with ${routes.length} route records [^${sourceId}].

The records are sorted by the number of route associations in the pull; duplicate company names remain separate where TDX supplied separate record IDs or municipalities [^${sourceId}].

${indexBody}

TDX does not publish the corporate history, ownership, fleet, depot or contract-history fields needed to complete every operator profile; those gaps are marked TBC on the record pages [^${sourceId}].
`, 'utf8')

const indexPage = (title, description, body) => `---
title: ${quote(title)}
description: ${quote(description)}
order: 2
sources:
${sourceBlock}
---

${body}
`

fs.mkdirSync(path.join(root, 'content/bus/models'), { recursive: true })
fs.mkdirSync(path.join(root, 'content/bus/depots'), { recursive: true })
fs.writeFileSync(path.join(root, 'content/bus/models/_index.md'), indexPage(
  'Bus models',
  'What the committed TDX pull does and does not publish about bus vehicle models.',
  `The committed TDX bus operator and route pull contains no vehicle-model roster, fleet count or model-to-operator field [^${sourceId}].\n\nNo bus model page is published from an unverified appendix or an enthusiast fleet list. A model index will become sourceable when an operator or government fleet register is fetched in full [^${sourceId}].\n\nCurrent status: fleet models TBC for all 61 TDX operator records [^${sourceId}].`,
), 'utf8')
fs.writeFileSync(path.join(root, 'content/bus/depots/_index.md'), indexPage(
  'Bus garages and depots',
  'What the committed TDX pull does and does not publish about bus garages and depots.',
  `The committed TDX bus operator and route pull contains no depot, garage, yard or maintenance-facility field [^${sourceId}].\n\nNo bus depot page is published from a guessed location or an unverified appendix. A depot index will become sourceable when operators or responsible authorities publish and a full page is fetched [^${sourceId}].\n\nCurrent status: bus depots and garages TBC for all 61 TDX operator records [^${sourceId}].`,
), 'utf8')

const legacyGaragesDir = path.join(root, 'content/bus/garages')
if (fs.existsSync(legacyGaragesDir) && fs.readdirSync(legacyGaragesDir).length === 0) fs.rmdirSync(legacyGaragesDir)

console.log(`generated ${operators.length} operator pages, ${routes.length} route associations, and bus model/depot indexes`)
