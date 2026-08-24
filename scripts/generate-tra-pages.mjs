import fs from 'node:fs'
import path from 'node:path'

import stations from '../data/tdx/TRA/station.json' with { type: 'json' }
import stationLines from '../data/tdx/TRA/station-of-line.json' with { type: 'json' }
import shapes from '../data/tdx/TRA/shape.json' with { type: 'json' }

const ROOT = process.cwd()
const OUT = path.join(ROOT, 'content', 'rail', 'tra')
const DATE = '2026-08-24'
const requestedLine = process.argv.find((arg) => arg.startsWith('--line='))?.slice(7) || 'WL'
const stationLimit = Number(process.argv.find((arg) => arg.startsWith('--station-limit='))?.slice(16) || '15')

const urls = {
  station: 'https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0',
  line: 'https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0',
  shape: 'https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Shape?%24format=JSON&%24top=1000&%24skip=0',
  history: 'https://www.railway.gov.tw/tra-tip-web/adr/about-1-5',
  timetable: 'https://www.railway.gov.tw/tra-tip-web/tip/tip00C/tipC21/view?proCode=8ae4cac3756b7b41017572e9077f1790&subCode=8ae4cac3756b7b41017573e352ae18f8',
  report: 'https://www.railway.gov.tw/tra-tip-web/tip/file/486e23bd-740a-46a1-bb75-f68442125a2a',
}

const q = (value) => JSON.stringify(String(value == null ? '' : value))
const source = (id, title, original, publisher, url, note) => [
  '  - id: ' + id,
  '    title: ' + q(title),
  '    titleOriginal: ' + q(original),
  '    publisher: ' + q(publisher),
  '    url: ' + q(url),
  '    accessed: ' + DATE,
  '    kind: primary',
  '    lang: zh-Hant',
  '    note: ' + q(note),
].join('\n')

const sourceBlock = [
  source('tdx-tra-station', 'TDX Taiwan Railways station records', '臺灣鐵路車站資料', 'Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平台)', urls.station, 'The full 24 August 2026 pull contains 245 TRA station records with station IDs, names, addresses, administrative areas, classes, coordinates and update times.'),
  source('tdx-tra-line', 'TDX Taiwan Railways station-of-line records', '臺灣鐵路路線車站資料', 'Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平台)', urls.line, 'The full pull contains 12 line records with ordered station members and, where supplied, travelled distances.'),
  source('tdx-tra-shape', 'TDX Taiwan Railways line shapes', '臺灣鐵道路線幾何資料', 'Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平台)', urls.shape, 'The full pull contains one current shape record for each of the 12 TDX line IDs.'),
  source('tra-history', 'Railway construction history', '鐵路建設沿革', 'Taiwan Railways Administration (臺灣鐵路公司)', urls.history, 'The operator history page gives the official route-history framework and gauge terminology used to separate current data from historical alignments.'),
  source('tra-timetable', 'Taiwan Railways timetable and route index', '臺鐵時刻表及路線資料', 'Taiwan Railways Administration (臺灣鐵路公司)', urls.timetable, 'The operator index names the Western, Eastern and South Link trunk families and the Pingxi, Shenao, Neiwan, Liujia, Jiji and Shalun branches.'),
  source('tra-report', 'Taiwan Railways statistical report', '臺灣鐵路統計資料', 'Taiwan Railways Administration (臺灣鐵路公司)', urls.report, 'The operator report gives the end-2023 route-length, electrification and station-count aggregates; those historical aggregates are kept separate from this current TDX snapshot.'),
].join('\n')
const sourceBlocks = Object.fromEntries(sourceBlock.replace(/^  - id: /, '').split('\n  - id: ').map((entry) => {
  const id = entry.split('\n', 1)[0]
  return [id, '  - id: ' + entry]
}))
const block = (...ids) => ids.map((id) => sourceBlocks[id]).join('\n')

const stationById = new Map(stations.map((station) => [station.StationID, station]))
const lineById = new Map(stationLines.map((line) => [line.LineID, line]))
const lineName = (line) => (shapes.find((shape) => shape.LineID === line.LineID)?.LineName?.En || line.LineID)
const lineNameZh = (line) => (shapes.find((shape) => shape.LineID === line.LineID)?.LineName?.Zh_tw || '')
const slug = (value) => String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const lineSlug = (line) => slug(lineName(line)) + (line.LineID === 'WL-C' ? '-coast' : '')
const stationSlug = (station) => slug(station.StationName?.En || station.StationID) + '-' + station.StationID
const members = (line) => [...(line.Stations || [])].sort((a, b) => a.Sequence - b.Sequence)

function write(relative, text) {
  const full = path.join(OUT, relative)
  fs.mkdirSync(path.dirname(full), { recursive: true })
  fs.writeFileSync(full, text.trim() + '\n', 'utf8')
}

function page(frontmatter, body) {
  return '---\n' + frontmatter + '\n---\n\n' + body.trim() + '\n'
}

function systemIndex() {
  return page([
    'title: Taiwan Railways',
    'kind: system',
    'description: Taiwan Railways current station and line data, with historical route architecture kept distinct from the live TDX snapshot.',
    'order: 4',
    'operator: TRA',
    'sources:',
    block('tdx-tra-station', 'tdx-tra-line', 'tra-history'),
  ].join('\n'), [
    'Taiwan Railways is represented here as a system with its own station identities, route memberships and historical intervals. The current data layer is a full TDX snapshot retrieved on ' + DATE + '.[^tdx-tra-station] The operator historical pages and reports are used to mark what is established, what conflicts with the current snapshot, and what remains TBC.[^tra-history]',
    '',
    'The first current pages cover the Western Main Line.[^tdx-tra-line] Eastern Main Line, branch lines and closed alignments follow in separate batches so route sequence, gauge and historical status are not silently merged.[^tra-history] The page count is a work boundary, not a claim that an unwritten station or alignment does not exist.[^tra-history]',
  ].join('\n'))
}

function lineIndex() {
  return page([
    'title: Lines',
    'description: Current Taiwan Railways line families and branches in the committed TDX snapshot; historical and closed alignments are documented separately as evidence is verified.',
    'order: 1',
    'sources:',
    block('tdx-tra-shape', 'tra-timetable', 'tra-history'),
  ].join('\n'), [
    'The current line index follows the twelve line identities returned by TDX on ' + DATE + '.[^tdx-tra-shape] The source calls some records trunk lines and others branches; the guide preserves those identities instead of flattening the railway into one invented route.[^tra-timetable] Historical route names, closed alignments and gauge changes remain separate research work until each chronology is verified against a primary record.[^tra-history]',
  ].join('\n'))
}

function stationIndex() {
  return page([
    'title: Stations',
    'description: Taiwan Railways station pages generated from the current TDX station and station-of-line records, with the retrieval boundary shown on every page.',
    'order: 2',
    'sources:',
    block('tdx-tra-station', 'tdx-tra-line', 'tra-history'),
  ].join('\n'), [
    'The current TDX snapshot contains ' + stations.length + ' station records retrieved on ' + DATE + '.[^tdx-tra-station] Pages are added in documented batches. The index therefore makes the live data boundary visible while the research work expands from the Western and Eastern trunk families to the branch and historical sections.[^tdx-tra-line][^tra-history]',
  ].join('\n'))
}

function linePage(line) {
  const ordered = members(line)
  const name = lineName(line)
  const nameZh = lineNameZh(line)
  const first = stationById.get(ordered[0]?.StationID)
  const last = stationById.get(ordered.at(-1)?.StationID)
  const distance = ordered.at(-1)?.TraveledDistance
  const role = ['WL', 'EL', 'SL'].includes(line.LineID) ? 'trunk-family record' : 'branch or connecting route record'
  const front = [
    'title: ' + q(name),
    'summary: ' + q(name + ' (' + nameZh + ') in the ' + role + ' returned by TDX, with ' + ordered.length + ' ordered station members in the ' + DATE + ' snapshot.'),
    'order: ' + (line.LineID === requestedLine ? 1 : 20),
    'operator: TRA',
    'updated: ' + DATE,
    'facts:',
    '  - label: "TDX line ID"',
    '    value: ' + q(line.LineID),
    '    source: tdx-tra-line',
    '  - label: "TDX English name"',
    '    value: ' + q(name),
    '    source: tdx-tra-shape',
    '  - label: "TDX Traditional Chinese name"',
    '    value: ' + q(nameZh),
    '    source: tdx-tra-shape',
    '  - label: "Ordered station members"',
    '    value: ' + q(ordered.length),
    '    source: tdx-tra-line',
    '  - label: "Snapshot retrieval"',
    '    value: ' + DATE,
    '    source: tdx-tra-line',
    'specs:',
    '  - label: "First TDX member"',
    '    value: ' + q((first?.StationName?.En || ordered[0]?.StationID) + ' (' + (ordered[0]?.StationID || 'TBC') + ')'),
    '    source: tdx-tra-line',
    '  - label: "Last TDX member"',
    '    value: ' + q((last?.StationName?.En || ordered.at(-1)?.StationID) + ' (' + (ordered.at(-1)?.StationID || 'TBC') + ')'),
    '    source: tdx-tra-line',
    '  - label: "Last supplied travelled distance"',
    '    value: ' + (distance == null ? 'TBC' : q(distance)),
    '    unit: km',
    '    source: tdx-tra-line',
    '  - label: "Current gauge"',
    '    value: 1067',
    '    unit: mm',
    '    source: tra-history',
    'sources:',
    sourceBlock,
  ].join('\n')
  const body = [
    '## What this TDX line identity means',
    '',
    'TDX returns ' + name + ' as line ID ' + line.LineID + ' and supplies the Traditional Chinese name ' + nameZh + ' in its Shape record.[^tdx-tra-shape] The StationOfLine record is a separate dataset: it contains ' + ordered.length + ' ordered members for this line and is the source for the sequence displayed on this page.[^tdx-tra-line] That separation matters because a shape is geometry, while an ordered member list is a station relationship; this page does not infer one from the other.[^tdx-tra-shape][^tdx-tra-line]',
    '',
    'The first member in the committed sequence is ' + (first?.StationName?.En || ordered[0]?.StationID) + ' (' + (ordered[0]?.StationID || 'TBC') + ') and the last is ' + (last?.StationName?.En || ordered.at(-1)?.StationID) + ' (' + (ordered.at(-1)?.StationID || 'TBC') + ').[^tdx-tra-line]',
    '',
    '## Ordered stations and distance fields',
    '',
    'The station table is generated from the complete response retrieved on ' + DATE + ', not from a route-map redraw.[^tdx-tra-line] Each row keeps the TDX station ID, the sequence supplied by the data platform and the travelled-distance field when that field exists.[^tdx-tra-line] The final supplied distance is ' + (distance == null ? 'TBC' : distance + ' km') + ' in this snapshot; the guide does not relabel it as a surveyed route length or combine it with another line’s measure.[^tdx-tra-line]',
    '',
    'The member list can overlap another TDX line record at a shared station. That is a data relationship, not evidence that every train or every timetable service traverses both records.[^tdx-tra-line] Service patterns, passing loops, stopping patterns, headways and first or last trains are TBC here because this snapshot contains station membership rather than a timetable transcription.[^tdx-tra-line]',
    '',
    '## Trunk, branch and historical boundaries',
    '',
    'The operator timetable index names the Western, Eastern and South Link trunk families and identifies the Pingxi, Shenao, Neiwan, Liujia, Jiji and Shalun branches.[^tra-timetable] This page preserves the TDX line ID ' + line.LineID + ' and the operator name instead of rewriting it into an English grouping that the source does not use.[^tra-timetable][^tdx-tra-shape] The route-history page is the source for historical construction and gauge terminology; it does not turn this current snapshot into a complete closed-line inventory.[^tra-history]',
    '',
    'The end-2023 operator report gives system-level aggregates of 1,065 km, 90.5 km of branches and 241 stations, while the current TDX station pull contains ' + stations.length + ' records.[^tra-report][^tdx-tra-station] Those values are published together here as a dated conflict between a report aggregate and a later live-data snapshot; neither is silently substituted for the other.[^tra-report][^tdx-tra-station]',
    '',
    '## What remains TBC',
    '',
    'The TDX endpoint checked for Route returned 404, so this page does not claim that its line record is the operator’s complete historical route definition.[^tdx-tra-line] A checked StationOfRoute endpoint also returned 404, so the page uses StationOfLine for the ordered sequence and records that boundary in the research file.[^tdx-tra-line] Historical names, closed sections, gauge changes through time, depot allocation, signalling, power, accessibility facilities, service frequency and ridership are TBC until the relevant primary records are transcribed and cited.[^tra-history][^tra-report]',
  ].join('\n')
  return page(front, body)
}

function stationPage(station, member, line) {
  const ordered = members(line)
  const index = ordered.findIndex((entry) => entry.StationID === station.StationID)
  const previous = index > 0 ? stationById.get(ordered[index - 1].StationID) : null
  const next = index >= 0 && index < ordered.length - 1 ? stationById.get(ordered[index + 1].StationID) : null
  const memberships = stationLines.filter((candidate) => candidate.Stations?.some((entry) => entry.StationID === station.StationID)).map((candidate) => lineName(candidate) + ' (' + candidate.LineID + ')')
  const pos = station.StationPosition || {}
  const displayName = station.StationName?.En || station.StationID
  const zh = station.StationName?.Zh_tw || 'TBC'
  const name = displayName + ' (' + zh + ')'
  const front = [
    'title: ' + q(displayName + ' — Taiwan Railways'),
    'summary: ' + q(name + ', TDX station ' + station.StationID + ', in ' + (station.LocationCity || 'an administrative area not supplied') + '; current line membership and coordinates from the ' + DATE + ' snapshot.'),
    'order: ' + (member.Sequence + 1),
    'operator: TRA',
    'updated: ' + DATE,
    'facts:',
    '  - label: "Station ID"',
    '    value: ' + q(station.StationID),
    '    source: tdx-tra-station',
    '  - label: "Traditional Chinese name"',
    '    value: ' + q(zh),
    '    source: tdx-tra-station',
    '  - label: "Administrative city"',
    '    value: ' + q(station.LocationCity || 'TBC'),
    '    source: tdx-tra-station',
    '  - label: "Administrative district"',
    '    value: ' + q(station.LocationTown || 'TBC'),
    '    source: tdx-tra-station',
    '  - label: "Station class code"',
    '    value: ' + q(station.StationClass || 'TBC'),
    '    source: tdx-tra-station',
    '  - label: "Line memberships"',
    '    value: ' + q(memberships.join('; ')),
    '    source: tdx-tra-line',
    'specs:',
    '  - label: "Latitude"',
    '    value: ' + (pos.PositionLat == null ? 'TBC' : q(pos.PositionLat)),
    '    unit: degrees',
    '    source: tdx-tra-station',
    '  - label: "Longitude"',
    '    value: ' + (pos.PositionLon == null ? 'TBC' : q(pos.PositionLon)),
    '    unit: degrees',
    '    source: tdx-tra-station',
    '  - label: "' + lineName(line) + ' sequence"',
    '    value: ' + (member.Sequence + 1),
    '    unit: position',
    '    source: tdx-tra-line',
    '  - label: "' + lineName(line) + ' travelled distance"',
    '    value: ' + (member.TraveledDistance == null ? 'TBC' : q(member.TraveledDistance)),
    '    unit: km',
    '    source: tdx-tra-line',
    'sources:',
    block('tdx-tra-station', 'tdx-tra-line', 'tra-history', 'tra-report'),
  ].join('\n')
  const body = [
    '## Identity in the current station data',
    '',
    name + ' is station ID ' + station.StationID + ' in the TDX Station response retrieved on ' + DATE + '.[^tdx-tra-station] That record supplies the English and Traditional Chinese names, the address, administrative city and district, station-class field, coordinates and source update time.[^tdx-tra-station] The page reports those fields as fields: it does not turn the class code ' + (station.StationClass || 'TBC') + ' into a passenger-service ranking because the checked station response does not define that code in the record itself.[^tdx-tra-station]',
    '',
    'The address field is ' + (station.StationAddress || 'TBC') + '.[^tdx-tra-station] This is the source station address, not a claim about the size of the station site, the walking catchment or every entrance.[^tdx-tra-station] A street address and a coordinate answer different questions, so both are retained when present.[^tdx-tra-station]',
    '',
    '## Position on ' + lineName(line),
    '',
    'On the ' + lineName(line) + ' StationOfLine record, this station has sequence ' + (member.Sequence + 1) + ' and a supplied travelled distance of ' + (member.TraveledDistance == null ? 'TBC' : member.TraveledDistance + ' km') + '.[^tdx-tra-line] The preceding member is ' + (previous ? previous.StationName?.En + ' (' + previous.StationID + ')' : 'the first member in this TDX sequence') + ' and the following member is ' + (next ? next.StationName?.En + ' (' + next.StationID + ')' : 'the last member in this TDX sequence') + '.[^tdx-tra-line] These are adjacency statements about the ordered dataset; they are not a claim about the stopping pattern of a particular train.[^tdx-tra-line]',
    '',
    'The current line membership list for this station is ' + memberships.join(', ') + '.[^tdx-tra-line] A shared station can therefore appear in more than one TDX line family without the data proving that all services, rolling stock or timetables use every listed relationship.[^tdx-tra-line] Route service patterns and first or last trains are TBC on this page because the committed endpoint supplies station membership rather than a complete timetable.[^tdx-tra-line]',
    '',
    '## Location and architecture boundary',
    '',
    'TDX places the station at latitude ' + (pos.PositionLat == null ? 'TBC' : pos.PositionLat) + ' and longitude ' + (pos.PositionLon == null ? 'TBC' : pos.PositionLon) + '.[^tdx-tra-station] The guide keeps those values at the precision returned by the source and does not infer platform orientation, elevation, track count or station depth from a point coordinate.[^tdx-tra-station] Platform arrangement, lifts, tactile paths, accessible toilets, nursing rooms, platform gap, exits, staffing and station opening hours are TBC until the operator station-level material is transcribed.[^tra-history]',
    '',
    'The operator route-history page is used for historical construction and gauge terminology, not as a substitute for this station live identity record.[^tra-history] If a future primary source gives a former name, opening date, relocation, closure interval or rebuilt platform, it belongs in the station temporal architecture record rather than overwriting the current TDX name.[^tra-history]',
    '',
    '## Ridership and next research boundary',
    '',
    'Current station ridership, a line rank and a dated trend are TBC for this page.[^tra-report] The report checked for this batch provides system aggregates and an end-2023 station count, but it does not supply a transcribed current row for this station in the committed data layer.[^tra-report] That is an explicit data boundary, not a claim that no ridership publication exists.[^tra-report]',
    '',
    'The next station-data pass should connect this station record to monthly passenger counts, accessibility facilities and named interchange services from their respective primary datasets.[^tdx-tra-station][^tra-report] Until those joins are verified, the page keeps the current identity, sequence, address and coordinates visible and leaves the operational additions TBC.[^tdx-tra-station][^tra-report]',
  ].join('\n')
  return page(front, body)
}

write('_index.md', systemIndex())
write('lines/_index.md', lineIndex())
write('stations/_index.md', stationIndex())

const line = lineById.get(requestedLine)
if (!line) throw new Error('Unknown TRA line ' + requestedLine)
write('lines/' + lineSlug(line) + '.md', linePage(line))
for (const member of members(line).slice(0, stationLimit)) {
  const station = stationById.get(member.StationID)
  if (station) write('stations/' + stationSlug(station) + '.md', stationPage(station, member, line))
}
console.log('Generated TRA system indexes, ' + lineSlug(line) + ' and ' + Math.min(stationLimit, members(line).length) + ' station pages.')
