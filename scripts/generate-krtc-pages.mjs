import fs from 'node:fs'
import path from 'node:path'

import stationRecords from '../data/tdx/KRTC/station.json' with { type: 'json' }
import routeRecords from '../data/tdx/KRTC/station-of-route.json' with { type: 'json' }
import lineRecords from '../data/tdx/KRTC/line.json' with { type: 'json' }
import shapeRecords from '../data/tdx/KRTC/shape.json' with { type: 'json' }
import transferRecords from '../data/tdx/KRTC/line-transfer.json' with { type: 'json' }
import firstLastRecords from '../data/tdx/KRTC/first-last-timetable.json' with { type: 'json' }
import lrtStations from '../data/krtc/circular-lrt.json' with { type: 'json' }

const ROOT = process.cwd()
const OUT = path.join(ROOT, 'content', 'rail', 'krtc')
const DATE = '2026-08-24'

const urls = {
  station: 'https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/Station/KRTC?%24format=JSON&%24top=1000&%24skip=0',
  stationOfRoute: 'https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/StationOfRoute/KRTC?%24format=JSON&%24top=1000&%24skip=0',
  line: 'https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/Line/KRTC?%24format=JSON&%24top=1000&%24skip=0',
  route: 'https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/Route/KRTC?%24format=JSON&%24top=1000&%24skip=0',
  shape: 'https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/Shape/KRTC?%24format=JSON&%24top=1000&%24skip=0',
  transfer: 'https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/LineTransfer/KRTC?%24format=JSON&%24top=1000&%24skip=0',
  firstLast: 'https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/FirstLastTimetable/KRTC?%24format=JSON&%24top=1000&%24skip=0',
  lrtFirstLast: 'https://www.krtc.com.tw/eng/KLRT/first_and_last_train?KRTCStation=C1',
  guideMap: 'https://www.krtc.com.tw/eng/KLRT/guide_map',
  stationGuide: 'https://www.krtc.com.tw/eng/KLRT/station_guide',
  lrtGuide: 'https://www.krtc.com.tw/KLRT/timetable',
  redOrange: 'https://mtbu.kcg.gov.tw/KaohsiungMetro/CompletedRoutes/RedandOrange/RedandOrange01.html',
  lrtRoute: 'https://mtbu.kcg.gov.tw/KaohsiungMetro/CompletedRoutes/LightRail/LightRail01.html',
}

const q = (value) => JSON.stringify(String(value == null ? '' : value))
const source = (id, title, original, publisher, url, note) => [
  `  - id: ${id}`,
  `    title: ${q(title)}`,
  `    titleOriginal: ${q(original)}`,
  `    publisher: ${q(publisher)}`,
  `    url: ${q(url)}`,
  `    accessed: ${DATE}`,
  '    kind: primary',
  '    lang: zh-Hant',
  `    note: ${q(note)}`,
].join('\n')

const sourceBlocks = {
  'krtc-lrt-first-last': source('krtc-lrt-first-last', 'KRTC Circular Light Rail first and last train page', '首末班車', 'Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)', urls.lrtFirstLast, 'The operator page for C1 Lizihnei displays the Circular Light Rail operating window 06:30–22:30 and 15-minute headway, with a reference-timetable caveat.'),
  'tdx-krtc-station': source('tdx-krtc-station', 'TDX Kaohsiung Metro station records', '高雄捷運車站資料', 'Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)', urls.station, 'The live KRTC pull contains 39 metro station records with codes, names, addresses, administrative areas, coordinates and update times.'),
  'tdx-krtc-station-of-route': source('tdx-krtc-station-of-route', 'TDX Kaohsiung Metro station-of-route records', '高雄捷運路線車站資料', 'Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)', urls.stationOfRoute, 'The live pull contains four directional records: two for the Red Line and two for the Orange Line, with ordered members and cumulative distances.'),
  'tdx-krtc-line': source('tdx-krtc-line', 'TDX Kaohsiung Metro line records', '高雄捷運路線資料', 'Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)', urls.line, 'The live pull contains the two line identities returned for KRTC: R and O.'),
  'tdx-krtc-route': source('tdx-krtc-route', 'TDX Kaohsiung Metro route records', '高雄捷運路線資料', 'Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)', urls.route, 'The live pull contains four directional route records with source route lengths, termini and travel times.'),
  'tdx-krtc-shape': source('tdx-krtc-shape', 'TDX Kaohsiung Metro line shapes', '高雄捷運路線幾何資料', 'Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)', urls.shape, 'The live pull contains two current metro geometry records, one for each line.'),
  'tdx-krtc-transfer': source('tdx-krtc-transfer', 'TDX Kaohsiung Metro line-transfer records', '高雄捷運路線轉乘資料', 'Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)', urls.transfer, 'The live pull contains two interchange records for the Formosa Boulevard transfer between R10 and O5.'),
  'tdx-krtc-first-last': source('tdx-krtc-first-last', 'TDX Kaohsiung Metro first-last timetable records', '高雄捷運首末班車資料', 'Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)', urls.firstLast, 'The live pull contains 304 station-direction timetable records; blank time fields are retained as blank rather than converted into a claim.'),
  'krtc-guide-map-en': source('krtc-guide-map-en', 'KRTC guide map', '導覽圖', 'Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)', urls.guideMap, 'The operator’s English guide map lists the Red, Orange and Circular Light Rail station names and codes.'),
  'krtc-station-guide-en': source('krtc-station-guide-en', 'KRTC station information', '各車站資訊', 'Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)', urls.stationGuide, 'The operator’s English station-guide page exposes metro and light-rail station information and the accessibility/safety navigation.'),
  'krtc-lrt-guide': source('krtc-lrt-guide', 'KRTC Circular Light Rail timetable station list', '各車站時刻表', 'Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)', urls.lrtGuide, 'The operator page lists the 38 Circular Light Rail codes and Traditional Chinese names.'),
  'mtbu-red-orange': source('mtbu-red-orange', 'Red and Orange Line route description', '路線說明（含路網及車站）', 'Kaohsiung City Government Mass Rapid Transit Bureau (高雄市政府捷運工程局)', urls.redOrange, 'The government project page gives the Red/Orange route lengths, station counts, type, depot count and transfer relationships.'),
  'mtbu-lrt': source('mtbu-lrt', 'Circular Light Rail route description', '路線說明', 'Kaohsiung City Government Mass Rapid Transit Bureau (高雄市政府捷運工程局)', urls.lrtRoute, 'The government project page gives the circular alignment, every station’s Traditional Chinese name and location, 22.1 km length, 38 stations, surface-light-rail type and listed transfers.'),
}

const block = (...ids) => ids.map((id) => sourceBlocks[id]).join('\n')
const stationById = new Map(stationRecords.map((station) => [station.StationID, station]))
const routeByLine = new Map(routeRecords.filter((route) => route.Direction === 0).map((route) => [route.LineID, route]))
const lineById = new Map(lineRecords.map((line) => [line.LineID, line]))
const shapeByLine = new Map(shapeRecords.map((shape) => [shape.LineID, shape]))
const slug = (value) => String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const metroLineName = (id) => id === 'R' ? 'Red Line' : 'Orange Line'
const metroLineZh = (id) => id === 'R' ? '紅線' : '橘線'
const metroStationSlug = (station) => `${slug(station.StationName.En)}-${station.StationID.toLowerCase()}`
const lrtStationSlug = (station) => `${slug(station.nameEn)}-${station.id.toLowerCase()}`

function write(relative, text) {
  const full = path.join(OUT, relative)
  fs.mkdirSync(path.dirname(full), { recursive: true })
  fs.writeFileSync(full, text.trim() + '\n', 'utf8')
}

function page(frontmatter, body) {
  return `---\n${frontmatter}\n---\n\n${body.trim()}\n`
}

function systemIndex() {
  return page([
    'title: Kaohsiung Metro',
    'kind: system',
    'description: Kaohsiung Metro’s Red and Orange Lines and the Circular Light Rail, with TDX metro data and operator/government LRT records kept distinct.',
    'order: 5',
    'operator: KRTC',
    'sources:',
    block('tdx-krtc-station', 'tdx-krtc-station-of-route', 'tdx-krtc-line', 'tdx-krtc-route', 'tdx-krtc-transfer', 'tdx-krtc-first-last', 'krtc-guide-map-en', 'krtc-station-guide-en', 'krtc-lrt-guide', 'mtbu-red-orange', 'mtbu-lrt'),
  ].join('\n'), [
    'Kaohsiung Metro is operated by Kaohsiung Rapid Transit Corporation and is represented here as one system containing two TDX metro lines and a separate Circular Light Rail station layer.[^krtc-guide-map-en][^tdx-krtc-line][^krtc-lrt-guide] The Red and Orange Lines are the heavy-metro records returned by the live KRTC TDX pull; the Circular Light Rail list comes from the operator and Kaohsiung City Government pages because it is not part of that committed Metro response.[^tdx-krtc-station][^krtc-lrt-guide][^mtbu-lrt]',
    '',
    'The government route page describes the Red and Orange project as 42.7 km and 38 stations in total, with underground and elevated metro infrastructure.[^mtbu-red-orange] The Circular Light Rail page describes a 22.1 km surface-light-rail loop with 38 stations and transfers to the metro and TRA.[^mtbu-lrt] These are different published measurements of different modes and are not combined into one invented line length.[^mtbu-red-orange][^mtbu-lrt]',
    '',
    'The current data boundary is visible in the page structure. The metro station pages retain TDX IDs, coordinates, route order, chainage and source update fields.[^tdx-krtc-station][^tdx-krtc-station-of-route] The light-rail pages retain the operator’s English and Traditional Chinese names plus the government’s station-location text, while coordinates and a TDX light-rail station sequence remain TBC.[^krtc-guide-map-en][^mtbu-lrt] This distinction prevents a polished map from hiding which dataset actually supports a claim.[^tdx-krtc-station][^mtbu-lrt]',
    '',
    'The interchange structure is explicit in the live metro data: the two TDX LineTransfer records describe the Formosa Boulevard connection between R10 and O5.[^tdx-krtc-transfer] The government pages separately list metro/LRT and metro/TRA relationships, including R6, R13, O1, R11, R16, R23, C18 and C30.[^mtbu-red-orange][^mtbu-lrt] Station pages preserve those as source relationships rather than treating similarly named stations as proof of a transfer.[^tdx-krtc-transfer][^mtbu-lrt]',
    '',
    'The route and station records also carry an important conflict boundary. TDX reports directional route lengths of 29.72 km for the Red Line and 13.12 km for the Orange Line in the current pull, while the government project page reports 28.3 km and 14.4 km respectively.[^tdx-krtc-route][^mtbu-red-orange] The site publishes both values and does not average them, because they may measure different route definitions.[^tdx-krtc-route][^mtbu-red-orange]',
    '',
    'Ridership, accessibility facilities, platform gaps, depots, signalling, power, headways and historical construction disputes are separate research boundaries. This first data layer records what the live structured endpoints and the two full government/operator route pages establish; every unsourced detail remains TBC.[^tdx-krtc-first-last][^krtc-station-guide-en][^mtbu-red-orange][^mtbu-lrt]',
  ].join('\n'))
}

function lineIndex() {
  return page([
    'title: Lines',
    'description: Kaohsiung Metro Red and Orange Lines and the Circular Light Rail, with source-specific route and station boundaries.',
    'order: 1',
    'operator: KRTC',
    'sources:',
    block('tdx-krtc-line', 'tdx-krtc-route', 'tdx-krtc-first-last', 'krtc-guide-map-en', 'krtc-station-guide-en', 'mtbu-red-orange', 'mtbu-lrt'),
  ].join('\n'), [
    'The Kaohsiung line index keeps three published route identities visible: the TDX Red Line, the TDX Orange Line and the operator/government Circular Light Rail.[^tdx-krtc-line][^krtc-guide-map-en][^mtbu-lrt] TDX supplies the two metro line records and directional route records, while the operator and government pages supply the LRT’s station list, alignment description and length.[^tdx-krtc-route][^mtbu-lrt]',
    '',
    'The Red and Orange pages show the TDX route-length fields beside the government project values. The Red Line is 29.72 km in the TDX route record and 28.3 km in the government project description; the Orange Line is 13.12 km and 14.4 km respectively.[^tdx-krtc-route][^mtbu-red-orange] These are conflicts published as conflicts, not values silently reconciled into one number.[^tdx-krtc-route][^mtbu-red-orange]',
    '',
    'The Circular Light Rail is described by the government as 22.1 km, surface light rail and 38 stations.[^mtbu-lrt] Its page has an explicit station list including C21A and C21 as separate codes, which the guide preserves.[^mtbu-lrt] The operator’s English guide map supplies the English names used by the line and station pages.[^krtc-guide-map-en]',
    '',
    'A line page is therefore a source map as much as a route summary. It tells the reader which facts came from TDX, which came from the government’s project page and which came from the operator’s station publication.[^tdx-krtc-line][^mtbu-red-orange][^mtbu-lrt] Service frequencies, construction chronology, signalling, power and fleet history are not inferred from the station sequence and remain TBC until their primary records are transcribed.[^tdx-krtc-first-last][^krtc-station-guide-en]',
  ].join('\n'))
}

function stationIndex() {
  return page([
    'title: Stations',
    'description: Kaohsiung Metro station pages from the 39-record TDX metro pull and the 38-station operator/government Circular Light Rail list.',
    'order: 2',
    'operator: KRTC',
    'sources:',
    block('tdx-krtc-station', 'tdx-krtc-station-of-route', 'tdx-krtc-first-last', 'krtc-guide-map-en', 'krtc-lrt-guide', 'krtc-station-guide-en', 'mtbu-lrt'),
  ].join('\n'), [
    'This station index contains 77 pages: 39 current KRTC metro station records from TDX and 38 Circular Light Rail stations from the operator and government route pages.[^tdx-krtc-station][^krtc-lrt-guide][^mtbu-lrt] The two groups are intentionally labelled by source family because a station count without a dataset boundary can imply a false completeness.[^tdx-krtc-station][^mtbu-lrt]',
    '',
    'The metro records preserve the source station IDs, names, addresses, administrative areas and coordinates.[^tdx-krtc-station] The Red and Orange sequence pages preserve TDX’s direction-zero order and cumulative distances, while the reverse direction remains available in the committed raw snapshot.[^tdx-krtc-station-of-route] The light-rail pages preserve the operator’s English names and the government’s Traditional Chinese names and location descriptions.[^krtc-guide-map-en][^mtbu-lrt]',
    '',
    'C21A and C21 are separate light-rail station codes and remain separate pages.[^mtbu-lrt] O5 and R10 likewise remain distinct TDX station IDs even though both official route records identify Formosa Boulevard, because that is how the source publishes the two line relationships.[^tdx-krtc-station][^tdx-krtc-station-of-route] The guide does not collapse either pair into an invented shared ID.[^tdx-krtc-station][^mtbu-lrt]',
    '',
    'Station facilities, accessibility details, ridership, platform gaps and detailed first/last times remain source-specific follow-up work.[^tdx-krtc-first-last][^krtc-station-guide-en] The TDX timetable pull contains 304 rows, but blank time fields and direction/service-day distinctions mean that a reliable station timetable needs a separate transcription and validation pass.[^tdx-krtc-first-last] The station pages mark that boundary as TBC.[^tdx-krtc-first-last][^krtc-station-guide-en]',
  ].join('\n'))
}

function metroLinePage(lineId) {
  const route = routeByLine.get(lineId)
  const name = metroLineName(lineId)
  const nameZh = metroLineZh(lineId)
  const stationCount = route.Stations.length
  const routeRecord = [...routeRecords].find((item) => item.LineID === lineId && item.Direction === 0)
  const tdxRoute = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'tdx', 'KRTC', 'route.json'), 'utf8')).find((item) => item.LineID === lineId && item.Direction === 0)
  const officialLength = lineId === 'R' ? 28.3 : 14.4
  const lineSlug = lineId === 'R' ? 'red-line' : 'orange-line'
  const lineSourceIds = ['tdx-krtc-line', 'tdx-krtc-station-of-route', 'tdx-krtc-route', 'tdx-krtc-shape', 'tdx-krtc-transfer', 'tdx-krtc-first-last', 'krtc-guide-map-en', 'krtc-station-guide-en', 'mtbu-red-orange']
  if (lineId === 'O') lineSourceIds.push('mtbu-lrt')
  const front = [
    `title: ${name}`,
    `summary: ${q(`${name} (${nameZh}) — ${stationCount} TDX-ordered stations, with route-length values published from both TDX and the Kaohsiung government project page.`)}`,
    `order: ${lineId === 'R' ? 1 : 2}`,
    'operator: KRTC',
    `line: ${lineId}`,
    `updated: ${DATE}`,
    'facts:',
    '  - label: "TDX line ID"',
    `    value: ${q(lineId)}`,
    '    source: tdx-krtc-line',
    '  - label: "Ordered TDX stations"',
    `    value: ${stationCount}`,
    '    source: tdx-krtc-station-of-route',
    '  - label: "TDX route length"',
    `    value: ${q(tdxRoute.RouteLength)}`,
    '    unit: km',
    '    source: tdx-krtc-route',
    '  - label: "Government project length"',
    `    value: ${q(officialLength)}`,
    '    unit: km',
    '    source: mtbu-red-orange',
    '  - label: "Traditional Chinese name"',
    `    value: ${q(nameZh)}`,
    '    source: tdx-krtc-line',
    'sources:',
    block(...lineSourceIds),
  ].join('\n')
  const stations = route.Stations.map((member) => {
    const station = stationById.get(member.StationID)
    return `- [${station?.StationName.En || member.StationID} (${member.StationID})](/rail/krtc/stations/${metroStationSlug(station)}): sequence ${member.Sequence}, TDX distance ${member.CumulativeDistance} km.[^tdx-krtc-station-of-route]`
  }).join('\n')
  const body = [
    `## ${name} in the current data`,
    '',
    `TDX identifies this route as the ${name} with line ID ${lineId}; the line record supplies the Traditional Chinese name ${nameZh}.[^tdx-krtc-line] The operator’s English guide map uses the same line identity and lists the same station-code family from ${route.Stations[0].StationID} to ${route.Stations.at(-1).StationID}.[^krtc-guide-map-en] This page keeps the line record, route record and station-of-route record separate because they answer different questions.[^tdx-krtc-line][^tdx-krtc-route][^tdx-krtc-station-of-route]`,
    '',
    `The direction-zero StationOfRoute record contains ${stationCount} ordered members.[^tdx-krtc-station-of-route] The reverse-direction record is also present in the raw pull, but this page uses direction zero as the reader-facing sequence so that the order is stable and explicit.[^tdx-krtc-station-of-route] The sequence is a data relationship; it does not claim that every train service stops identically at every time of day.[^tdx-krtc-station-of-route][^tdx-krtc-first-last]`,
    '',
    '## Ordered stations',
    '',
    stations,
    '',
    `The TDX route record gives ${tdxRoute.RouteLength} km for this direction-zero route, while the Kaohsiung City Government project page gives ${officialLength} km for the ${lineId === 'R' ? 'Red' : 'Orange'} Line.[^tdx-krtc-route][^mtbu-red-orange] Both values are published because the sources may measure different route definitions; this site does not average them, choose the newest value or relabel one as an error without a source that explains the difference.[^tdx-krtc-route][^mtbu-red-orange] The government page describes the joint Red/Orange project as underground and elevated metro infrastructure and names the relevant station and transfer structure.[^mtbu-red-orange]`,
    '',
    '## Transfers and service boundary',
    '',
    lineId === 'R'
      ? 'The TDX LineTransfer response identifies the Formosa Boulevard transfer relationship between R10 and O5, while the government page lists R10, R11, R13, R16 and R23 among the Red Line’s transfer stations.[^tdx-krtc-transfer][^mtbu-red-orange] The operator and government pages also identify LRT relationships around R6 and R13.[^mtbu-red-orange][^krtc-guide-map-en]'
      : 'The TDX LineTransfer response identifies the Formosa Boulevard transfer relationship between O5 and R10, while the government page lists O1 and O5 among the Orange Line’s transfer stations.[^tdx-krtc-transfer][^mtbu-red-orange] The LRT page identifies O1 at Hamasen as a transfer location for C14.[^mtbu-lrt][^krtc-guide-map-en]',
    '',
    'The committed FirstLastTimetable pull contains station-direction rows for this operator, but several time fields are blank and the dataset has service-day and destination dimensions.[^tdx-krtc-first-last] Detailed first/last trains, headways by time of day, actual versus design capacity, signalling generation, power, depot allocation, platform screen doors, accessibility facilities and current station ridership remain TBC until their primary records are transcribed and checked.[^tdx-krtc-first-last][^krtc-station-guide-en]',
    '',
    '## What the current page does not claim',
    '',
    `The TDX shape is geometry rather than an engineering history; station depth is not inferred from a coordinate, and a route length is not treated as a universal measurement.[^tdx-krtc-shape][^tdx-krtc-route] The government project page, operator map and TDX records are all retained as distinct evidence layers so future construction, fleet and operations research can attach to the correct source.[^mtbu-red-orange][^krtc-guide-map-en][^tdx-krtc-shape]`,
  ].join('\n')
  return { slug: lineSlug, page: page(front, body) }
}

function lrtLinePage() {
  const front = [
    'title: Circular Light Rail',
    `summary: ${q('Kaohsiung’s 22.1 km Circular Light Rail, with 38 operator-listed stations and a government-published surface alignment.')}`,
    'order: 3',
    'operator: KRTC',
    'line: C',
    `updated: ${DATE}`,
    'facts:',
    '  - label: "Station count"',
    '    value: 38',
    '    source: mtbu-lrt',
    '  - label: "Government route length"',
    '    value: "22.1"',
    '    unit: km',
    '    source: mtbu-lrt',
    '  - label: "System type"',
    '    value: "surface light rail"',
    '    source: mtbu-lrt',
    '  - label: "TDX KRTC Metro coverage"',
    '    value: "No LRT records in the committed Metro pull"',
    '    source: tdx-krtc-line',
    'sources:',
    block('krtc-guide-map-en', 'krtc-lrt-guide', 'mtbu-lrt', 'mtbu-red-orange', 'krtc-station-guide-en', 'krtc-lrt-first-last', 'tdx-krtc-line', 'tdx-krtc-station', 'tdx-krtc-shape'),
  ].join('\n')
  const body = [
    '## A circular line with a separate source boundary',
    '','Kaohsiung’s Circular Light Rail is a 22.1 km surface-light-rail route with 38 stations in the Kaohsiung City Government’s completed-route description.[^mtbu-lrt] The operator’s English guide map lists the same line as LRT and supplies the English names used here.[^krtc-guide-map-en] The station page is therefore not presented as a TDX Metro pull: the committed KRTC Metro data contains the Red and Orange line records and 39 metro stations, while the LRT station layer comes from the operator and government pages.[^tdx-krtc-station][^tdx-krtc-line][^krtc-lrt-guide][^mtbu-lrt]',
    '','The government describes the route as a loop running from the former harbour-rail corridor through the port, Pier-2, the west-side railway corridor, the Museum of Fine Arts area and the Dashun roads before returning toward the south-western corridor.[^mtbu-lrt] This is a route-history description, not a geometry generated by guessing between station coordinates.[^mtbu-lrt] The current page preserves the station-location text supplied by the government and leaves a TDX LRT geometry field TBC.[^mtbu-lrt][^tdx-krtc-shape]',
    '','## Station sequence and transfers','',
    'The official station list contains C1 through C37 plus C21A, for 38 stations.[^mtbu-lrt][^krtc-lrt-guide] C21A Neiwei Arts Center and C21 Kaohsiung Museum of Fine Arts are separate codes and separate pages.[^mtbu-lrt] The government page lists transfers to the Red Line at C3 and C24, to the Orange Line at C14 and C32, and to TRA at C18 and C30.[^mtbu-lrt] The Red/Orange project page independently lists R6, R13 and O1 as LRT transfer relationships, so the station pages preserve both the LRT-side and metro-side evidence.[^mtbu-red-orange][^mtbu-lrt]',
    '','## What is established and what is TBC','',
    'The operator and government pages establish the English/Chinese station identities, station locations, loop structure, route length, surface-light-rail type and listed interchanges.[^krtc-guide-map-en][^mtbu-lrt] The operator’s station-guide and first/last-train navigation also establish that station-level operational material exists on the KRTC site, but this batch does not copy a schedule or facilities table into the data layer.[^krtc-station-guide-en][^krtc-lrt-first-last] Detailed platform coordinates, measured alignment geometry, station accessibility facilities, ridership, headways, rolling stock allocation, power system and construction controversy remain TBC until their primary records are fetched and transcribed.[^krtc-station-guide-en][^mtbu-lrt]',
    '','The choice to keep this as an operator/government layer is itself part of the provenance. A reader can see exactly why the Circular Light Rail pages have different structured fields from the TDX metro pages, and future research can replace a TBC with a source without rewriting the current station identities.[^tdx-krtc-line][^krtc-lrt-guide][^mtbu-lrt]',
  ].join('\n')
  return { slug: 'circular-light-rail', page: page(front, body) }
}

function metroStationPage(station) {
  const memberships = []
  for (const lineId of ['R', 'O']) {
    const route = routeByLine.get(lineId)
    const member = route.Stations.find((item) => item.StationID === station.StationID)
    if (member) memberships.push({ lineId, route, member })
  }
  const primary = memberships[0]
  const previous = primary.member.Sequence > 1 ? stationById.get(primary.route.Stations[primary.member.Sequence - 2].StationID) : null
  const next = primary.member.Sequence < primary.route.Stations.length ? stationById.get(primary.route.Stations[primary.member.Sequence].StationID) : null
  const title = `${station.StationName.En} (${station.StationID}) — Kaohsiung Metro`
  const front = [
    `title: ${q(title)}`,
    `summary: ${q(`${station.StationName.En} (${station.StationName.Zh_tw}), TDX station ${station.StationID}, with current KRTC line membership, coordinates and source update fields.`)}`,
    `order: ${primary.member.Sequence}`,
    'operator: KRTC',
    'updated: 2026-08-24',
    'facts:',
    '  - label: "Station ID"',
    `    value: ${q(station.StationID)}`,
    '    source: tdx-krtc-station',
    '  - label: "Traditional Chinese name"',
    `    value: ${q(station.StationName.Zh_tw)}`,
    '    source: tdx-krtc-station',
    '  - label: "Line membership"',
    `    value: ${q(memberships.map((item) => `${metroLineName(item.lineId)} (${item.lineId})`).join('; '))}`,
    '    source: tdx-krtc-station-of-route',
    '  - label: "Administrative city"',
    `    value: ${q(station.LocationCity)}`,
    '    source: tdx-krtc-station',
    'specs:',
    '  - label: "Latitude"',
    `    value: ${station.StationPosition.PositionLat}`,
    '    unit: degrees',
    '    source: tdx-krtc-station',
    '  - label: "Longitude"',
    `    value: ${station.StationPosition.PositionLon}`,
    '    unit: degrees',
    '    source: tdx-krtc-station',
    `  - label: "${metroLineName(primary.lineId)} sequence"`,
    `    value: ${primary.member.Sequence}`,
    '    unit: position',
    '    source: tdx-krtc-station-of-route',
    `  - label: "${metroLineName(primary.lineId)} cumulative distance"`,
    `    value: ${q(primary.member.CumulativeDistance)}`,
    '    unit: km',
    '    source: tdx-krtc-station-of-route',
    'sources:',
    block('tdx-krtc-station', 'tdx-krtc-station-of-route', 'tdx-krtc-transfer', 'tdx-krtc-first-last', 'krtc-guide-map-en', 'krtc-station-guide-en', 'mtbu-red-orange'),
  ].join('\n')
  const body = [
    '## Current identity',
    '',
    `${station.StationName.En} (${station.StationName.Zh_tw}) is station ID ${station.StationID} in the KRTC TDX Station response retrieved on ${DATE}.[^tdx-krtc-station] The record supplies the operator station UID, English and Traditional Chinese names, address, city, district, coordinates, station-class field and source update time.[^tdx-krtc-station] This page reports those fields as the source publishes them and does not convert the station-class code into an unsupported passenger-service ranking.[^tdx-krtc-station]`,
    '',
    `The TDX address is ${station.StationAddress}, in ${station.LocationCity}’s ${station.LocationTown}.[^tdx-krtc-station] The coordinate returned by the same record is ${station.StationPosition.PositionLat}, ${station.StationPosition.PositionLon}.[^tdx-krtc-station] An address and a coordinate describe different reference fields, so neither is substituted for the other.[^tdx-krtc-station] Platform orientation, station depth, entrances, track count and surrounding walking catchment are TBC on this page because those details are not fields in the committed Station record.[^tdx-krtc-station][^krtc-station-guide-en]`,
    '',
    '## Position in the metro network',
    '',
    `The current StationOfRoute data places this station on ${memberships.map((item) => `${metroLineName(item.lineId)} (${item.lineId})`).join(' and ')}.[^tdx-krtc-station-of-route] In the ${metroLineName(primary.lineId)} direction-zero sequence it is position ${primary.member.Sequence}, with a cumulative distance of ${primary.member.CumulativeDistance} km.[^tdx-krtc-station-of-route] The preceding member is ${previous ? `${previous.StationName.En} (${previous.StationID})` : 'the first member in the supplied sequence'}, and the following member is ${next ? `${next.StationName.En} (${next.StationID})` : 'the last member in the supplied sequence'}.[^tdx-krtc-station-of-route] These are relationships in the published ordered dataset, not a claim that every train stops in exactly the same pattern at all times.[^tdx-krtc-station-of-route][^tdx-krtc-first-last]`,
    '',
    `The operator’s English guide map names this station in the ${memberships.map((item) => metroLineName(item.lineId)).join(' and ')} list.[^krtc-guide-map-en] Where a station is a transfer point, the line-transfer dataset is the stronger source for the interchange relationship; the current pull identifies the Formosa Boulevard transfer between O5 and R10.[^tdx-krtc-transfer] A same-name relationship without a LineTransfer record is not promoted into a transfer claim.[^tdx-krtc-transfer]`,
    '',
    '## Service, facilities and access',
    '',
    `The KRTC first/last-timetable pull contains 304 station-direction rows for the operator, with service-day and destination fields.[^tdx-krtc-first-last] The current page does not manufacture a first or last train time from a blank row, nor does it collapse workday and holiday records into a single schedule.[^tdx-krtc-first-last] Detailed headways, actual and design capacity, station accessibility facilities, tactile paths, lifts, toilets, nursing rooms, platform gap, screen doors and station staffing remain TBC until the operator’s station-level material is transcribed.[^tdx-krtc-first-last][^krtc-station-guide-en]`,
    '',
    '## Historical and ridership boundary',
    '',
    'The government Red/Orange project page gives system-level route, station-count and transfer context, but it does not by itself supply this station’s opening chronology, rebuild history, construction dispute or current ridership row.[^mtbu-red-orange] Those claims are therefore TBC here rather than inferred from the station’s current name and coordinate.[^mtbu-red-orange][^tdx-krtc-station] The station page is ready for later primary-source additions because its current identity and route sequence are anchored to stable source IDs.[^tdx-krtc-station][^tdx-krtc-station-of-route]',
    '',
    'This station is consequently a reference entry, not a departure board. The current structured data establishes identity, position, membership and source fields; operations, facilities, ridership and detailed history remain explicit research work.[^tdx-krtc-station][^tdx-krtc-station-of-route][^tdx-krtc-first-last]',
  ].join('\n')
  return { slug: metroStationSlug(station), page: page(front, body) }
}

function lrtStationPage(station) {
  const sourceIds = ['krtc-guide-map-en', 'krtc-lrt-guide', 'mtbu-lrt', 'krtc-station-guide-en', 'krtc-lrt-first-last', 'tdx-krtc-line']
  if (station.id === 'C32') sourceIds.push('tdx-krtc-transfer')
  if (station.id === 'C14') sourceIds.push('mtbu-red-orange')
  const title = `${station.nameEn} — Kaohsiung Circular Light Rail`
  const front = [
    `title: ${q(title)}`,
    `summary: ${q(`${station.nameEn} (${station.nameZh}), operator code ${station.id}, position ${station.sequence} in the 38-station Circular Light Rail list.`)}`,
    `order: ${station.sequence}`,
    'operator: KRTC',
    'updated: 2026-08-24',
    'facts:',
    '  - label: "Light rail code"',
    `    value: ${q(station.id)}`,
    '    source: mtbu-lrt',
    '  - label: "Traditional Chinese name"',
    `    value: ${q(station.nameZh)}`,
    '    source: mtbu-lrt',
    '  - label: "English name"',
    `    value: ${q(station.nameEn)}`,
    '    source: krtc-guide-map-en',
    '  - label: "Circular list position"',
    `    value: ${station.sequence}`,
    '    source: mtbu-lrt',
    'specs:',
    '  - label: "Published station location"',
    `    value: ${q(station.location)}`,
    '    source: mtbu-lrt',
    '  - label: "Coordinate"',
    '    value: TBC',
    'sources:',
    block(...sourceIds),
  ].join('\n')
  const previous = lrtStations[(station.sequence - 2 + lrtStations.length) % lrtStations.length]
  const next = lrtStations[station.sequence % lrtStations.length]
  const body = [
    '## Identity in the operator and government lists',
    '',
    `${station.nameEn} is Circular Light Rail station ${station.id}, with Traditional Chinese name ${station.nameZh}.[^krtc-guide-map-en][^mtbu-lrt] The operator’s English guide map supplies the English station name and code, while the Kaohsiung City Government completed-route page supplies the Traditional Chinese name and published location text.[^krtc-guide-map-en][^mtbu-lrt] This page keeps the two source roles visible instead of pretending that a TDX Metro Station record exists for the LRT.[^tdx-krtc-line][^krtc-lrt-guide]`,
    '',
    `The government location field places the station at ${station.location}.[^mtbu-lrt] That text is a station-location description, not a latitude/longitude pair; the coordinate field remains TBC until a primary structured LRT coordinate dataset is fetched and verified.[^mtbu-lrt] The page does not infer a point from the road names, a map image or the nearest metro station.[^mtbu-lrt]`,
    '',
    '## Position in the circular line',
    '',
    `${station.id} is position ${station.sequence} in the 38-station list published by the government route page.[^mtbu-lrt] The previous published list member is ${previous.nameEn} (${previous.id}) and the next is ${next.nameEn} (${next.id}), with wrap-around because this is a circular line list rather than a pair of terminal stations.[^mtbu-lrt][^krtc-guide-map-en] The sequence is a published list order; it is not a claim that a vehicle’s operational direction or stopping time can be reconstructed from this page alone.[^mtbu-lrt]`,
    '',
    `The operator guide map places ${station.nameEn} in the LRT list, and the operator station-guide namespace provides a station-information page for each code.[^krtc-guide-map-en][^krtc-station-guide-en] The current batch does not transcribe platform entrances, station shelter dimensions, artwork, lifts, tactile paths, accessible toilets or platform gap measurements because those are station-facility claims requiring the relevant primary record.[^krtc-station-guide-en][^mtbu-lrt]`,
    '',
    '## Interchanges and operations',
    '',
    station.id === 'C14'
      ? 'The government page identifies C14 as a transfer to the Orange Line’s O1 Hamasen station.[^mtbu-lrt] The Red/Orange project page also lists O1 as a Circular Light Rail transfer point.[^mtbu-red-orange] The station page preserves that source-backed relationship and does not infer additional transfer paths from geographic proximity.[^mtbu-lrt][^mtbu-red-orange]'
      : station.id === 'C18' || station.id === 'C30'
        ? `The government page lists ${station.id} as a transfer to TRA.[^mtbu-lrt] This page does not add a metro transfer unless the source explicitly names one for this station.[^mtbu-lrt]`
        : station.id === 'C3' || station.id === 'C24'
          ? `The government page lists ${station.id} as a transfer to the Red Line.[^mtbu-lrt] This page does not infer a particular walking path or fare arrangement from that relationship.[^mtbu-lrt]`
          : station.id === 'C32'
            ? 'The government page lists C32 as a transfer to the Orange Line.[^mtbu-lrt] The station page keeps that relationship separate from any TDX metro LineTransfer record, which currently covers the Formosa Boulevard transfer only.[^mtbu-lrt][^tdx-krtc-transfer]'
            : 'The checked government station table does not list a transfer relationship for this station, so an interchange claim is TBC rather than inferred from the line’s circular geography.[^mtbu-lrt]',
    '',
    'KRTC’s English first/last-train page describes the light rail’s published operating model as 06:30–22:30 with a 15-minute headway throughout the day, while also warning that the displayed timetable is for reference and subject to dispatch status.[^krtc-lrt-first-last] This station page does not turn that system-level statement into a station-specific departure promise.[^krtc-lrt-first-last] Current ridership, station facilities, exact platform geometry, accessibility details, power, rolling stock allocation and construction disputes remain TBC.[^krtc-station-guide-en][^mtbu-lrt]',
    '',
    '## Source boundary',
    '',
    'The Circular Light Rail page is deliberately built from the operator’s English naming, the operator’s Traditional Chinese station list and the government’s route/location table.[^krtc-guide-map-en][^krtc-lrt-guide][^mtbu-lrt] It is not silently presented as a TDX metro record, and a future primary coordinate or ridership dataset can be added without changing this station’s source-backed identity.[^tdx-krtc-line][^mtbu-lrt]',
  ].join('\n')
  return { slug: lrtStationSlug(station), page: page(front, body) }
}

write('_index.md', systemIndex())
write('lines/_index.md', lineIndex())
write('stations/_index.md', stationIndex())

for (const lineId of ['R', 'O']) {
  const generated = metroLinePage(lineId)
  write(`lines/${generated.slug}.md`, generated.page)
}
write('lines/circular-light-rail.md', lrtLinePage().page)

for (const station of stationRecords) {
  const generated = metroStationPage(station)
  write(`stations/${generated.slug}.md`, generated.page)
}
for (const station of lrtStations) {
  const generated = lrtStationPage(station)
  write(`stations/${generated.slug}.md`, generated.page)
}

console.log(`Generated KRTC system indexes, 3 line pages and ${stationRecords.length + lrtStations.length} station pages.`)
