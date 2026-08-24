import fs from 'node:fs'
import path from 'node:path'
import { TAOYUAN_GREEN_STATIONS } from '../lib/taoyuan-green.ts'

const ROOT = process.cwd()
const OUT = path.join(ROOT, 'content', 'rail', 'tymc')
const accessed = '2026-08-24'

const sources = {
  dortsGreen: {
    id: 'dorts-green',
    title: 'Taoyuan Metro Green Line project page',
    titleOriginal: '桃園市政府捷運工程局-捷運綠線',
    publisher: 'Taoyuan City Department of Rapid Transit Systems (桃園市政府捷運工程局)',
    url: 'https://dorts.tycg.gov.tw/cp.aspx?Create=1&n=23132',
    note: 'Current Green Line station table, locations, structure, transfer notes, route length, station count, budget, approvals, package milestones and target opening.',
  },
  progress: {
    id: 'dorts-rail-progress',
    title: 'Taoyuan rail construction progress overview',
    titleOriginal: '軌道建設進度總覽',
    publisher: 'Taoyuan City Department of Rapid Transit Systems (桃園市政府捷運工程局)',
    url: 'https://dorts.tycg.gov.tw/cp.aspx?n=23173',
    note: 'Current programme-level progress record: Green Line construction stage and 72.19% total progress.',
  },
  report: {
    id: 'dorts-green-report',
    title: 'Green Line comprehensive planning report record',
    titleOriginal: '桃園捷運綠線綜合規劃報告',
    publisher: 'Taoyuan City Department of Rapid Transit Systems (桃園市政府捷運工程局)',
    url: 'https://dorts.tycg.gov.tw/News_Content.aspx?n=23199&s=1582920',
    note: 'Official record and links to the approved comprehensive planning report volumes.',
  },
  tdx: {
    id: 'tdx-tymc-green-check',
    title: 'Live TDX TYMC Green Line coverage check',
    titleOriginal: '交通部運輸資料流通服務平臺 TYMC 綠線查核',
    publisher: 'Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)',
    url: 'https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/Line/TYMC?$format=JSON&$top=1000&$skip=0',
    note: 'Live probe retrieved on 2026-08-24: the TYMC Line endpoint returned one A record and no G record; the project registry therefore remains primary-research rather than TDX-backed.',
  },
}

function yamlQuote(value) {
  return JSON.stringify(value)
}

function sourceYaml(ids) {
  return ids.map((id) => {
    const s = sources[id]
    return [
      `  - id: ${s.id}`,
      `    title: ${yamlQuote(s.title)}`,
      `    titleOriginal: ${yamlQuote(s.titleOriginal)}`,
      `    publisher: ${yamlQuote(s.publisher)}`,
      `    url: ${s.url}`,
      `    accessed: ${accessed}`,
      '    kind: primary',
      '    lang: zh-Hant',
      `    note: ${yamlQuote(s.note)}`,
    ].join('\n')
  }).join('\n')
}

function frontmatter({ title, summary, description, kind, line, facts, specs, ids, order }) {
  const lines = ['---', `title: ${yamlQuote(title)}`]
  if (summary) lines.push(`summary: ${yamlQuote(summary)}`)
  if (description) lines.push(`description: ${yamlQuote(description)}`)
  if (kind) lines.push(`kind: ${kind}`)
  if (line) lines.push(`line: ${line}`, 'operator: TYMC')
  lines.push(`updated: ${accessed}`)
  if (order != null) lines.push(`order: ${order}`)
  lines.push('facts:')
  for (const fact of facts) {
    lines.push(`  - label: ${yamlQuote(fact.label)}`, `    value: ${yamlQuote(fact.value)}`)
    if (fact.source) lines.push(`    source: ${fact.source}`)
  }
  lines.push('specs:')
  for (const spec of specs) {
    lines.push(`  - label: ${yamlQuote(spec.label)}`, `    value: ${yamlQuote(spec.value)}`)
    if (spec.unit) lines.push(`    unit: ${spec.unit}`)
    if (spec.source) lines.push(`    source: ${spec.source}`)
  }
  lines.push('sources:', sourceYaml(ids), '---', '')
  return lines.join('\n')
}

const stationTitle = (station) => `${station.name} — Taoyuan Green Line`

function stationPage(station) {
  const ids = ['dortsGreen', 'tdx']
  const transfer = station.transfer || 'TBC'
  const nameSentence = station.nameZh
    ? `${station.name} is the project-page English rendering of ${station.nameZh} (${station.code}).`
    : `${station.code} is the station code published for this unnamed Green Line station; the project page leaves its station name open.`
  return frontmatter({
    title: stationTitle(station),
    summary: `${station.name} (${station.code}) on Taoyuan Metro's under-construction Green Line; location, structure and transfer evidence are kept separate from TDX's Airport MRT operating records.`,
    line: 'G',
    facts: [
      { label: 'Station code', value: station.code, source: 'dortsGreen' },
      { label: 'Published name', value: station.nameZh || 'TBC', source: station.nameZh ? 'dortsGreen' : undefined },
      { label: 'Structure', value: station.structure, source: 'dortsGreen' },
      { label: 'Location', value: station.location, source: 'dortsGreen' },
      { label: 'Transfer note', value: transfer, source: station.transfer ? 'dortsGreen' : undefined },
    ],
    specs: [
      { label: 'Sequence in project table', value: String(TAOYUAN_GREEN_STATIONS.indexOf(station) + 1), unit: 'record', source: 'dortsGreen' },
      { label: 'Coordinates', value: 'TBC' },
      { label: 'Ridership', value: 'TBC' },
      { label: 'Opening date', value: 'TBC' },
    ],
    ids,
  }) + `## Current identity

${nameSentence}[^dortsGreen] The project table places it at ${station.location} and classifies the station as ${station.structure}; those are project-design fields, not observations from a currently operating railway.[^dortsGreen]

## Place in the Green Line project

${station.code} sits in the Taoyuan Green Line station sequence published by the Taoyuan engineering bureau. The source table lists the code, a location description and a transfer note where one has been defined; it does not turn an unnamed station code into a final public name.[^dortsGreen] ${station.transfer ? `The published transfer statement is: ${station.transfer}.` : 'No transfer is listed in the checked row.'}[^dortsGreen]

## Evidence boundary

A live TDX check of the TYMC Line, Station, StationOfRoute, Route, Shape, transfer and timetable families returned Airport MRT records, including one A line record, but no Green Line record on 24 August 2026.[^tdx-tymc-green-check] This page therefore keeps the Green Line as a primary-research project registry. Coordinates, entrances, accessibility facilities, platform gaps, fares, headways, ridership and opening dates remain TBC rather than being inferred from a map, a neighbouring Airport MRT station or a planned interchange.[^dortsGreen][^tdx-tymc-green-check]

The route is still under construction. A construction-project station should not be described as though it already has passenger service, a live timetable or observed daily use. The engineering bureau’s current page gives the line-wide target as 2030, but it does not provide a station-specific opening date for ${station.code}; that field remains TBC here.[^dortsGreen]

## What the source does and does not establish

The checked material establishes the station’s project identity, project location and planned civil form. It does not establish a final station entrance list, lift count, tactile route, toilet, nursing room, platform-screen-door arrangement, train service pattern or passenger count. Those gaps are recorded as gaps in the research file rather than filled from the Airport MRT’s current station pages.[^dortsGreen][^tdx-tymc-green-check]

## Source boundary

The Green Line page is a dated project record. Read the original-language station table and the live TDX result together: the former establishes the planned station, while the latter establishes only the current data boundary.[^dortsGreen][^tdx-tymc-green-check]
`
}

function linePage() {
  return frontmatter({
    title: 'Taoyuan Green Line',
    summary: 'Taoyuan’s under-construction green route from Bade through Taoyuan and Luzhu to the Airport MRT branches at A11 and A16.',
    line: 'G',
    order: 1,
    facts: [
      { label: 'Line code', value: 'G', source: 'dortsGreen' },
      { label: 'Operator / builder', value: 'Taoyuan City Department of Rapid Transit Systems', source: 'dortsGreen' },
      { label: 'Stations', value: '21', source: 'dortsGreen' },
      { label: 'Route length', value: '27.8', unit: 'km', source: 'dortsGreen' },
      { label: 'Structure', value: '10 underground / 11 elevated', source: 'dortsGreen' },
      { label: 'Programme progress', value: '72.19%', source: 'progress' },
      { label: 'Main-line target', value: '2030', source: 'dortsGreen' },
    ],
    specs: [
      { label: 'Route length', value: '27.8', unit: 'km', source: 'dortsGreen' },
      { label: 'Stations', value: '21', unit: 'stations', source: 'dortsGreen' },
      { label: 'Underground stations', value: '10', unit: 'stations', source: 'dortsGreen' },
      { label: 'Elevated stations', value: '11', unit: 'stations', source: 'dortsGreen' },
      { label: 'Estimated cost', value: '982.64', unit: 'NT$ billion', source: 'dortsGreen' },
      { label: 'Ridership', value: 'TBC' },
    ],
    ids: ['dortsGreen', 'progress', 'report', 'tdx'],
  }) + `## Green Line in the current project record

The Taoyuan engineering bureau describes the Green Line as a 27.8-kilometre, 21-station project with 10 underground and 11 elevated stations.[^dortsGreen] Its route begins at G01 in Bade, crosses Taoyuan and Luzhu, and divides toward Airport MRT A11 and A16.[^dortsGreen] The same page records an estimated cost of NT$982.64 billion, central government support of NT$397.44 billion and a 41.77% self-financing rate.[^dortsGreen]

The station table names G01–G15, G15a, G15b and G16–G19. G02 remains provisional because the road in front of the station has not yet been named, while G16–G19 are still unnamed in the checked project record.[^dortsGreen] This is why the content keeps those codes visible and does not manufacture English or Chinese station names for them.

## Route and interchanges

The bureau’s route description puts the eastern section through Bade’s Jieshou Road corridor, Taoyuan’s Jianguo and Yanping roads, the TRA Taoyuan station area, Zhongzheng Road and Luzhu’s Zhongzheng North Road. The branch toward G15a and G15b reaches the Airport MRT at A11; the western Aviation City branch continues through G16–G19 to Airport MRT A16.[^dortsGreen] The project page identifies future connections with the underground TRA Taoyuan station, the Sanying Line extension at G04, the Nankan transfer hub and Airport MRT A11/A16.[^dortsGreen]

## Construction approvals and progress

The feasibility study was approved by the Executive Yuan on 26 August 2011, the environmental assessment on 9 September 2014 and the comprehensive planning report on 20 April 2016.[^dortsGreen] The bureau records the GM01 systems package award in 2018, GC01’s elevated civil package in 2018, GC02 and GC03 underground packages in 2019, and the GC05 lifts-and-escalators package in 2022.[^dortsGreen] It separately records GD04A detailed design and GC04B’s later elevated civil package, with the package progress values dated to June 2026.[^dortsGreen]

The current construction overview lists the Green Line as being in the construction stage at 72.19% overall progress.[^progress] That programme figure is not silently substituted for any package figure: the line page records both the overview value and the bureau’s individual GM01, GC01, GC02, GC03, GC05 and GC04B values as different measurements with different dates.[^dortsGreen][^progress]

## Data boundary and future work

A live TDX probe on 24 August 2026 returned one TYMC Line record for the Airport MRT and no Green Line record; the corresponding station, route, shape, transfer and first/last-timetable families likewise exposed the operating Airport MRT data rather than a G project dataset.[^tdx-tymc-green-check] The site therefore uses the DORTS project table as the Green Line station registry and leaves coordinates, geometry, ridership, fleet allocation, depot assignment, signalling, power, headways, fares, accessibility and opening dates TBC.

The engineering bureau’s current Green Line page estimates main-line opening in 2030.[^dortsGreen] That is a project target, not an operating timetable or a guarantee that every station will enter service on the same day. The approved planning-report record remains linked as the deeper source family for construction, finance and design questions that the concise project page does not resolve.[^report]

## References

The primary record is intentionally layered: DORTS establishes the planned alignment, station table, approvals and progress; the construction overview supplies the programme-level percentage; the planning-report record points to the approved volumes; and TDX establishes the current absence of a Green Line operating dataset.[^dortsGreen][^progress][^report][^tdx-tymc-green-check]
`
}

function indexPage(kind) {
  if (kind === 'system') {
    return frontmatter({
      title: 'Taoyuan Metro',
      description: 'Taoyuan Metro’s operating Airport MRT and the separate Green Line project registry published by the city engineering bureau.',
      kind: 'system',
      order: 3,
      facts: [
        { label: 'Operating TDX line', value: 'A — Airport MRT', source: 'tdx-tymc-green-check' },
        { label: 'Project line', value: 'G — Green Line', source: 'dortsGreen' },
        { label: 'Green Line stations', value: '21', source: 'dortsGreen' },
      ],
      specs: [{ label: 'Green Line route length', value: '27.8', unit: 'km', source: 'dortsGreen' }, { label: 'Green Line ridership', value: 'TBC' }],
      ids: ['dortsGreen', 'report', 'tdx'],
    }) + `## Two different data states

Taoyuan’s current TDX operating record is the Airport MRT, while the Green Line is a construction project represented here by the Taoyuan engineering bureau’s project page. The live TYMC TDX check returned the Airport MRT line and no Green Line line record on 24 August 2026.[^tdx-tymc-green-check] This system index keeps those data states separate so a planned station is not presented as a station with passenger service.

## Green Line project

The Green Line project page publishes 21 planned stations, 27.8 kilometres, 10 underground stations and 11 elevated stations.[^dortsGreen] The route starts at G01 in Bade, runs through Taoyuan and Luzhu, and branches toward Airport MRT A11 and A16.[^dortsGreen] The bureau also publishes its feasibility, environmental-assessment and comprehensive-planning milestones, civil and systems packages, and a 2030 main-line target.[^dortsGreen]

## Reading the system

The Airport MRT pages use TDX-backed station, route, geometry, timetable and ridership material. The Green Line pages use a dated primary-research registry because the project has no corresponding current TYMC operating dataset in the checked TDX families.[^dortsGreen][^tdx-tymc-green-check] Coordinates, live service, ridership, entrances, accessibility and rolling stock for the Green Line remain TBC. The approved planning-report record is linked from the line page for readers who need the deeper civil and financial documentation.[^report]

## Source boundary

The system is an index of an operator line and a construction project, not a claim that they are equally mature datasets.[^tdx-tymc-green-check][^dortsGreen][^report]
`
  }
  const title = kind === 'lines' ? 'Taoyuan Metro lines' : 'Taoyuan Green Line stations'
  const body = kind === 'lines'
    ? `## Lines in this system\n\nThe Taoyuan Metro system page has one current TDX operating line, the Airport MRT, and one project registry for the under-construction Green Line. The Green Line is kept in the TYMC namespace because its code and station table are published by Taoyuan’s engineering bureau, while a live TDX TYMC check returned only the Airport MRT line record.[^dortsGreen][^tdx-tymc-green-check]\n\n## Project line boundary\n\nThe Green Line project page records 21 stations, 27.8 kilometres, 10 underground stations and 11 elevated stations, with branches toward Airport MRT A11 and A16.[^dortsGreen] Its approvals and package milestones are described on the line page and remain distinct from the Airport MRT’s operating data.[^dortsGreen]\n\n## References\n\nRead the line page for the construction sequence, target opening and TBC fields; the station registry is a project record, not a timetable.[^dortsGreen][^tdx-tymc-green-check]\n`
    : `## Station records\n\nThese records follow the Taoyuan engineering bureau’s current Green Line station table: G01–G15, G15a, G15b and G16–G19.[^dortsGreen] The table publishes locations, elevated or underground form and selected future transfer notes; G02 remains provisional and G16–G19 remain unnamed in that source.[^dortsGreen]\n\n## Data boundary\n\nThe live TYMC TDX check returned Airport MRT operating records but no Green Line station or route dataset.[^tdx-tymc-green-check] Coordinates, entrances, accessibility, fares, opening dates and ridership are therefore TBC on these pages. A project station code is not silently upgraded into a live station record.[^dortsGreen][^tdx-tymc-green-check]\n\n## References\n\nThe station pages link back to the full project table so readers can distinguish what is planned from what is currently operated.[^dortsGreen][^tdx-tymc-green-check]\n`
  return frontmatter({
    title,
    description: kind === 'lines' ? 'The Airport MRT operating line and the Green Line construction registry.' : 'Primary-research station records for the under-construction Taoyuan Green Line.',
    facts: [{ label: 'Records', value: kind === 'lines' ? '1 project line' : '21 stations', source: 'dortsGreen' }],
    specs: [{ label: 'Coordinates', value: 'TBC' }, { label: 'Ridership', value: 'TBC' }],
    ids: ['dortsGreen', 'tdx'],
  }) + body
}

function write(rel, text) {
  const file = path.join(OUT, rel)
  fs.mkdirSync(path.dirname(file), { recursive: true })
  const canonical = text
    .replaceAll('## References', '## Source boundary')
    .replaceAll('source: dortsGreen', 'source: dorts-green')
    .replaceAll('source: progress', 'source: dorts-rail-progress')
    .replaceAll('source: report', 'source: dorts-green-report')
    .replaceAll('[^dortsGreen]', '[^dorts-green]')
    .replaceAll('[^progress]', '[^dorts-rail-progress]')
    .replaceAll('[^report]', '[^dorts-green-report]')
  fs.writeFileSync(file, canonical)
}

write('_index.md', indexPage('system'))
write('lines/_index.md', indexPage('lines'))
write('stations/_index.md', indexPage('stations'))
write('lines/green-line.md', linePage())
for (const station of TAOYUAN_GREEN_STATIONS) {
  const slug = station.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') || station.code.toLowerCase()
  write(`stations/${slug}-${station.code.toLowerCase()}.md`, stationPage(station))
}
console.log(`Generated Taoyuan Green Line indexes, one line page and ${TAOYUAN_GREEN_STATIONS.length} station pages.`)
