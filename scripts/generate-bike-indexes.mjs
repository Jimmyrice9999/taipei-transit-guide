/** Generate the YouBike city and district indexes from the committed TDX pull. */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DATA = path.join(ROOT, 'data', 'tdx', 'bike')
const OUT = path.join(ROOT, 'content', 'bike', 'stations')
const RAIL_FILES = [
  ['TRTC', 'Taipei Metro', 'TRTC'],
  ['NTMC', 'New Taipei Circular Line', 'NTMC'],
  ['TYMC', 'Taoyuan Airport MRT', 'TYMC'],
  ['NTDLRT', 'New Taipei Danhai LRT', 'NTDLRT'],
  ['NTALRT', 'New Taipei Ankeng LRT', 'NTALRT'],
]

const CITIES = {
  TPE: { name: 'Taipei', slug: 'taipei', endpoint: 'Taipei' },
  NWT: { name: 'New Taipei', slug: 'new-taipei', endpoint: 'NewTaipei' },
  TAO: { name: 'Taoyuan', slug: 'taoyuan', endpoint: 'Taoyuan' },
}

const DISTRICTS = {
  TPE: {
    中正區: 'Zhongzheng', 大同區: 'Datong', 中山區: 'Zhongshan', 松山區: 'Songshan',
    大安區: 'Daan', 萬華區: 'Wanhua', 信義區: 'Xinyi', 士林區: 'Shilin',
    北投區: 'Beitou', 內湖區: 'Neihu', 南港區: 'Nangang', 文山區: 'Wenshan',
  },
  NWT: {
    板橋區: 'Banqiao', 三重區: 'Sanchong', 中和區: 'Zhonghe', 永和區: 'Yonghe',
    新莊區: 'Xinzhuang', 新店區: 'Xindian', 樹林區: 'Shulin', 鶯歌區: 'Yingge',
    三峽區: 'Sanxia', 淡水區: 'Tamsui', 汐止區: 'Xizhi', 瑞芳區: 'Ruifang',
    土城區: 'Tucheng', 蘆洲區: 'Luzhou', 五股區: 'Wugu', 泰山區: 'Taishan',
    林口區: 'Linkou', 深坑區: 'Shenkeng', 石碇區: 'Shiding', 坪林區: 'Pinglin',
    三芝區: 'Sanzhi', 石門區: 'Shimen', 八里區: 'Bali', 平溪區: 'Pingxi',
    雙溪區: 'Shuangxi', 貢寮區: 'Gongliao', 金山區: 'Jinshan', 萬里區: 'Wanli', 烏來區: 'Wulai',
  },
  TAO: {
    桃園區: 'Taoyuan', 中壢區: 'Zhongli', 大溪區: 'Daxi', 楊梅區: 'Yangmei',
    蘆竹區: 'Luzhu', 大園區: 'Dayuan', 龜山區: 'Guishan', 八德區: 'Bade',
    龍潭區: 'Longtan', 平鎮區: 'Pingzhen', 新屋區: 'Xinwu', 觀音區: 'Guanyin', 復興區: 'Fuxing',
  },
}

const sourceBlock = `sources:
  - id: tdx-bike-stations
    title: TDX Bike Station City pull
    titleOriginal: 交通部運輸資料流通服務平臺 — Bike Station/City
    publisher: Ministry of Transportation and Communications TDX / 交通部運輸資料流通服務平臺
    url: 'https://tdx.transportdata.tw/api/basic/v2/Bike/Station/City/{City}'
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: Supports the static station rows, bilingual names and addresses, coordinates, capacity and the city snapshot counts. It does not support live bike or dock availability.
  - id: tdx-rail-stations
    title: TDX rail station registry
    titleOriginal: 交通部運輸資料流通服務平臺 — Rail Station
    publisher: Ministry of Transportation and Communications TDX / 交通部運輸資料流通服務平臺
    url: 'https://tdx.transportdata.tw/'
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Supports the rail station coordinates, codes and bilingual names used for the nearest-coordinate join; the join does not compare station names.
`

const stable = (value) => Array.isArray(value)
  ? value.map(stable)
  : value && typeof value === 'object'
    ? Object.fromEntries(Object.keys(value).sort().map((key) => [key, stable(value[key])]))
    : value

const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const escapeCell = (value) => String(value ?? '').replaceAll('|', '\\|').replaceAll('\n', ' ')
const number = (value) => Number.isFinite(Number(value)) ? Number(value) : null

function readJson(file) {
  return JSON.parse(fs.readFileSync(path.join(ROOT, file), 'utf8'))
}

function railCandidates() {
  return RAIL_FILES.flatMap(([fileKey, system, folder]) => readJson(`data/tdx/${fileKey}/station.json`).flatMap((row) => {
    const code = String(row.StationID ?? '').trim()
    const lat = number(row.StationPosition?.PositionLat)
    const lon = number(row.StationPosition?.PositionLon)
    if (!code || lat === null || lon === null) return []
    return [{
      code,
      system,
      folder,
      en: String(row.StationName?.En ?? '').trim(),
      zh: String(row.StationName?.Zh_tw ?? '').trim(),
      lat,
      lon,
    }]
  }))
}

function distanceM(a, b) {
  const radians = Math.PI / 180
  const lat1 = a.lat * radians
  const lat2 = b.lat * radians
  const dLat = (b.lat - a.lat) * radians
  const dLon = (b.lon - a.lon) * radians
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2
  return 6371008.8 * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h))
}

function findJoin(station, rails) {
  const ranked = rails.map((rail) => ({ rail, distanceM: distanceM(station.position, rail) }))
    .sort((a, b) => a.distanceM - b.distanceM)
  const best = ranked[0]
  if (!best || best.distanceM > 200) return null
  if (ranked[1] && ranked[1].distanceM - best.distanceM < 1) return null
  return {
    bikeId: station.id,
    railSystem: best.rail.system,
    railCode: best.rail.code,
    railNameEn: best.rail.en || best.rail.code,
    railNameZh: best.rail.zh || null,
    distanceM: Math.round(best.distanceM * 10) / 10,
    method: 'nearest-coordinate-unique-within-200m',
  }
}

function pageHeader({ title, summary, facts, aliases = [] }) {
  return `---
title: ${title}
summary: ${summary}
updated: 2026-08-23
${aliases.length ? `aliases:\n${aliases.map((alias) => `  - ${JSON.stringify(alias)}`).join('\n')}\n` : ''}facts:
${facts.map((fact) => `  - label: ${fact.label}\n    value: ${fact.value}${fact.source ? `\n    source: ${fact.source}` : ''}`).join('\n')}
specs:
  - label: Live availability
    value: TBC
${sourceBlock}---

`
}

function mapUrl(station) {
  const { lat, lon } = station.position
  return `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=19/${lat}/${lon}`
}

function stationRow(station, join) {
  const name = `${station.names.en || 'TBC'} / ${station.names.zh_tw || 'TBC'}`.replaceAll('V1', '`V1`')
  const coordinates = `${station.position.lat.toFixed(5)}, ${station.position.lon.toFixed(5)}`
  const rail = join
    ? `[${escapeCell(join.railNameEn)} / ${escapeCell(join.railNameZh || 'TBC')}](\/rail\/metro\/stations\/${join.railCode.toLowerCase()}\/) (${Math.round(join.distanceM)} m) [^tdx-rail-stations]`
    : '—'
  return `| ${escapeCell(name)} [^tdx-bike-stations] | ${station.capacity ?? 'TBC'} [^tdx-bike-stations] | ${coordinates} [^tdx-bike-stations] | [Map](${mapUrl(station)}) | ${rail} |`
}

function writeCityPage(cityCode, stations, joinsById) {
  const city = CITIES[cityCode]
  const byDistrict = new Map()
  for (const station of stations) {
    const district = station.district || '未分類'
    if (!byDistrict.has(district)) byDistrict.set(district, [])
    byDistrict.get(district).push(station)
  }
  const capacity = stations.reduce((sum, station) => sum + (station.capacity ?? 0), 0)
  const joinCount = stations.filter((station) => joinsById.has(station.id)).length
  const facts = [
    { label: 'Municipality', value: city.name, source: 'tdx-bike-stations' },
    { label: 'Static station rows', value: stations.length, source: 'tdx-bike-stations' },
    { label: 'Published dock capacity total', value: capacity, source: 'tdx-bike-stations' },
    { label: 'Confirmed coordinate joins', value: joinCount, source: 'tdx-rail-stations' },
  ]
  let body = `This is the ${city.name} browse index for the static TDX Bike Station/City snapshot retrieved on 23 August 2026 [^tdx-bike-stations]. It contains ${stations.length} station rows and a published capacity total of ${capacity} docks [^tdx-bike-stations]. Live available-bike and available-return-dock values are excluded because they belong to a separate availability feed [^tdx-bike-stations].

The MRT/LRT column is present only when the station has one unique nearest TDX rail station within 200 metres by coordinates [^tdx-rail-stations]. The join does not compare names, and an ambiguous or more distant result is left blank [^tdx-rail-stations].

## District indexes

| District | Stations | Published capacity | Coordinate joins |
|---|---:|---:|---:|
`
  for (const [district, rows] of [...byDistrict.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    const districtSlug = district === '未分類' ? 'unclassified' : slugify(DISTRICTS[cityCode]?.[district] || district)
    const label = DISTRICTS[cityCode]?.[district] || 'Unclassified'
    const total = rows.reduce((sum, station) => sum + (station.capacity ?? 0), 0)
    const joins = rows.filter((station) => joinsById.has(station.id)).length
    body += `| [${label}](/bike/stations/${city.slug}-${districtSlug}/) [^tdx-bike-stations] | ${rows.length} | ${total} | ${joins} |\n`
  }
  body += `
Each district link is a browse page rather than an individual station page: a dock is a data row here, not a thin standalone article [^tdx-bike-stations].
`
  fs.writeFileSync(path.join(OUT, `${city.slug}.md`), pageHeader({
    title: `${city.name} YouBike station index`,
    summary: `Searchable static YouBike station rows for ${city.name}, grouped by district with coordinate-verified rail joins.`,
    facts,
  }) + body)
}

function writeDistrictPage(cityCode, district, stations, joinsById) {
  const city = CITIES[cityCode]
  const districtSlug = district === '未分類' ? 'unclassified' : slugify(DISTRICTS[cityCode]?.[district] || district)
  const label = DISTRICTS[cityCode]?.[district] || 'Unclassified'
  const capacity = stations.reduce((sum, station) => sum + (station.capacity ?? 0), 0)
  const joinCount = stations.filter((station) => joinsById.has(station.id)).length
  let body = `This page lists ${stations.length} static TDX station rows in ${city.name}'s ${label} group, with a published capacity total of ${capacity} docks. TDX's Station/City feed supplies identity, bilingual names, addresses, coordinates and capacity; current occupancy is not part of this page [^tdx-bike-stations].

The rail column is a nearest-coordinate join against the committed TDX rail station registry. It is shown only for a unique result within 200 metres; station names are not used to create a match [^tdx-rail-stations].`
  if (district === '未分類') body += ` The feed did not expose a usable district for these rows, so they remain in an explicit Unclassified group rather than being assigned from a guessed address or station name [^tdx-bike-stations].`
  body += `

| Station / 站名 | Capacity | Coordinates | Map | Confirmed nearby MRT/LRT |
|---|---:|---|---|---|
`
  for (const station of stations.sort((a, b) => `${a.names.en}:${a.stationId}`.localeCompare(`${b.names.en}:${b.stationId}`))) {
    body += `${stationRow(station, joinsById.get(station.id) || null)}\n`
  }
  fs.writeFileSync(path.join(OUT, `${city.slug}-${districtSlug}.md`), pageHeader({
    title: `${city.name} — ${label} YouBike stations`,
    summary: `Static YouBike station rows in ${city.name}'s ${label} group, with coordinates, capacity and confirmed nearby rail joins.`,
    aliases: [...new Set(stations.flatMap((station) => [station.names.en, station.names.zh_tw].filter(Boolean)))].sort(),
    facts: [
      { label: 'Municipality', value: city.name, source: 'tdx-bike-stations' },
      { label: 'District group', value: label, source: 'tdx-bike-stations' },
      { label: 'Static station rows', value: stations.length, source: 'tdx-bike-stations' },
      { label: 'Published dock capacity total', value: capacity, source: 'tdx-bike-stations' },
      { label: 'Confirmed coordinate joins', value: joinCount, source: 'tdx-rail-stations' },
    ],
  }) + body)
}

function main() {
  const stations = readJson('data/tdx/bike/stations.json')
  const rails = railCandidates()
  const joins = stations.map((station) => findJoin(station, rails)).filter(Boolean)
    .sort((a, b) => a.bikeId.localeCompare(b.bikeId))
  const joinsById = new Map(joins.map((join) => [join.bikeId, join]))
  fs.mkdirSync(OUT, { recursive: true })
  fs.writeFileSync(path.join(DATA, 'rail-joins.json'), `${JSON.stringify(stable(joins), null, 2)}\n`)
  for (const cityCode of Object.keys(CITIES)) {
    const cityStations = stations.filter((station) => station.cityCode === cityCode)
    writeCityPage(cityCode, cityStations, joinsById)
    const byDistrict = new Map()
    for (const station of cityStations) {
      const district = station.district || '未分類'
      if (!byDistrict.has(district)) byDistrict.set(district, [])
      byDistrict.get(district).push(station)
    }
    for (const [district, rows] of byDistrict) writeDistrictPage(cityCode, district, rows, joinsById)
    console.log(`${CITIES[cityCode].name}: ${cityStations.length} stations, ${byDistrict.size} district pages`)
  }
  console.log(`Generated ${joins.length} unique coordinate joins from ${stations.length} station rows.`)
}

main()
