/**
 * Hand-researched Sanying Line station records.
 *
 * TDX did not publish an LB station dataset when these pages were researched
 * on 14 August 2026. These records therefore sit beside, rather than inside,
 * stations.generated.ts. Every displayed fact points to the operator,
 * builder, Ministry of Transportation, or New Taipei City source that
 * publishes it; coordinates use the official New Taipei landmark register's
 * TWD97 point records, converted to WGS84 for display.
 */

import type { Source } from './sources.ts'
import type { StationProseSentence, Structure } from './station-overlay.ts'
import type { StationInterchange, StationResearch } from './station-research.ts'

export type SanyingResearch = StationResearch

type SanyingStation = {
  code: string
  line: 'LB'
  operator: 'NTMC'
  name: string
  nameZh: string
  district: string
  address: string
  location: string
  locationSource: string
  sources: Source[]
  lat: number | null
  lon: number | null
  sequence: number
  chainageKm: null
  interchange: string[]
  structure: Structure
  engineering: string
  exits: number
  planned: []
  recordSource: 'primary-research'
  prose?: StationProseSentence[]
  research: SanyingResearch
}

const accessed = '2026-08-14'
const proseAccessed = '2026-08-17'
const ntmetroPublisher = 'New Taipei Metro Corporation (新北大眾捷運股份有限公司)'

const stationList: Source = {
  id: 'ntmetro-sanying-stations',
  title: 'Sanying Line stations',
  titleOriginal: '三鶯線車站',
  publisher: ntmetroPublisher,
  url: 'https://www.ntmetro.com.tw/basic/?node=10164',
  accessed,
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The operator’s current table of LB station codes, Chinese names, addresses and running order.',
}

const opening: Source = {
  id: 'ntmetro-sanying-opening',
  title: 'The Sanying Line officially opens on 30 June',
  titleOriginal: '捷運三鶯線6/30正式通車',
  publisher: ntmetroPublisher,
  url: 'https://www.ntmetro.com.tw/basic/?mode=detail&node=867',
  accessed,
  snapshot: 'https://web.archive.org/web/20260806053328/https://www.ntmetro.com.tw/basic/?mode=detail&node=867',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'Opening date, operator, Dingpu and Yingge transfers, trial-fare rules, service plan and the NT$20–35 normal fare band. It says the charging date will be announced separately.',
}

const dortsRoute: Source = {
  id: 'dorts-sanying-route',
  title: 'Sanying Line project route and stations',
  titleOriginal: '三鶯線',
  publisher: 'New Taipei City Department of Rapid Transit Systems (新北市政府捷運工程局)',
  url: 'https://www.dorts.ntpc.gov.tw/about/routeInfo/1MJjdJr7dAv6',
  accessed,
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The builder’s current station list, construction locations and officially appended station names.',
}

const ntpcLandmarkCoordinates: Source = {
  id: 'ntpc-sanying-landmark-coordinates',
  title: 'New Taipei City important landmarks information',
  titleOriginal: '新北市重要地標資訊',
  publisher: 'New Taipei City Government Research, Development and Evaluation Commission (新北市政府研究發展考核委員會)',
  url: 'https://data.ntpc.gov.tw/api/datasets/6dcff24a-838c-40fb-a9df-f1160afafe84/json?page=0&size=3000',
  accessed,
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The official open-data records whose 地標類型 is 捷運站 and whose 地標名稱 identifies each 三鶯線 station. The records publish TWD97 TM2 fields twd97_x and twd97_y; the registry converts those published EPSG:3826 values to WGS84 latitude/longitude for display without estimating from a map.',
}

/*
 * The official landmark API publishes TWD97 / TM2 zone 121 (EPSG:3826)
 * easting/northing pairs. These are the deterministic inverse-projection
 * results used by the page, rounded to six decimals to match the registry's
 * other WGS84 station coordinates. They are not map estimates or interpolated
 * points. The source rows are listed in the research file beside each pair.
 */
const ntpcLandmarkWgs84: Record<string, { lat: number; lon: number }> = {
  LB01: { lat: 24.959265, lon: 121.418186 },
  LB02: { lat: 24.953703, lon: 121.412077 },
  LB03: { lat: 24.944434, lon: 121.402531 },
  LB04: { lat: 24.937416, lon: 121.390398 },
  LB05: { lat: 24.940122, lon: 121.384604 },
  LB06: { lat: 24.938741, lon: 121.377055 },
  LB07: { lat: 24.939240, lon: 121.367045 },
  LB08: { lat: 24.953318, lon: 121.356293 },
  LB09: { lat: 24.952631, lon: 121.349438 },
  LB10: { lat: 24.954399, lon: 121.342452 },
  LB11: { lat: 24.961007, lon: 121.334200 },
  LB12: { lat: 24.967520, lon: 121.330643 },
}

const motcInspection: Source = {
  id: 'motc-sanying-inspection',
  title: 'Ministry of Transportation to inspect the Sanying Line on 7 June 2026',
  titleOriginal: '交通部訂於115年6月7日辦理捷運三鶯線履勘',
  publisher: 'Ministry of Transportation and Communications (交通部)',
  url: 'https://www.motc.gov.tw/ch/app/data/view?id=14&module=news&serno=a7dd045e-24d7-4cfe-88e2-e390627cb279',
  accessed,
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The ministry describes the inspected line as 14.29 km with twelve elevated stations.',
}

const augustHours: Source = {
  id: 'ntpc-sanying-august-hours',
  title: 'Sanying Line operating hours extended to 08:00–22:00 from 1 August',
  titleOriginal: '赴市議會施政報告 侯友宜宣布三鶯線8/1起延長營運時間為「8時至22時」',
  publisher: 'New Taipei City Government (新北市政府)',
  url: 'https://www.ntpc.gov.tw/ch/home.jsp?dataserno=715da45564e1ee910042fd23ce8bcf0b&id=e8ca970cde5c00e1',
  accessed,
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'Publishes the trial-operation hours effective from 1 August 2026.',
}

const laterAugustHours: Source = {
  id: 'ntmetro-sanying-later-august-hours',
  title: 'Sanying Line fare and trial-operation notice',
  titleOriginal: '三鶯線票價',
  publisher: ntmetroPublisher,
  url: 'https://www.ntmetro.com.tw/basic/?node=10166',
  accessed,
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The operator announces 06:00–24:00 service from 16 to 31 August and repeats the stored-value-card trial rule.',
}

const namingGazette: Source = {
  id: 'ntpc-sanying-naming-gazette',
  title: 'New Taipei City Gazette, winter issue 14, 2020',
  titleOriginal: '新北市政府公報 109年冬字第14期',
  publisher: 'New Taipei City Government (新北市政府)',
  url: 'https://doc2-exthird.ntpc.gov.tw/NTPC_SODPUBLISH/FILE/0000000/PUBLISH/109/2/109214.pdf',
  accessed,
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The 9 June 2020 notice changes LB03 from 挖子 to 長壽山 and appends 三峽廣行宮 to LB05.',
}

const lb01Art: Source = {
  id: 'dorts-sanying-lb01-art',
  title: 'Sanying Line public art: A Beautiful Journey',
  titleOriginal: '一路有藝思：三鶯線公共藝術規劃構想',
  publisher: 'New Taipei City Department of Rapid Transit Systems (新北市政府捷運工程局)',
  url: 'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/1AldpD9odLK7',
  accessed: proseAccessed,
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The builder’s full public-art article describes LB01’s lighting performance and mosaic ceramic-panel works in the Bannan–Sanying interchange passage, including their linkage to train information and the flowing-light-river concept.',
}

const linePublicArt: Source = {
  id: 'dorts-sanying-public-art-announcement',
  title: 'Sanying Line public art announcement',
  titleOriginal: '捷運三鶯線打造行動美術館「有趣」首亮相',
  publisher: 'New Taipei City Department of Rapid Transit Systems (新北市政府捷運工程局)',
  url: 'https://www.dorts.ntpc.gov.tw/news/indexInfo/vKR2LvO1ZJGp',
  accessed: proseAccessed,
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The builder’s full announcement lists the station-specific public-art titles for LB02–LB05 and LB06, and describes the line-wide mobile-museum concept.',
}

const linePublicArt2026: Source = {
  id: 'dorts-sanying-public-art-2026-announcement',
  title: 'Sanying Line public art opens as a mobile exhibition',
  titleOriginal: '捷運即展場！三鶯線12件公共藝術驚艷登場',
  publisher: 'New Taipei City Department of Rapid Transit Systems (新北市政府捷運工程局)',
  url: 'https://www.dorts.ntpc.gov.tw/news/indexInfo/xVR2eBELdJ36',
  accessed: proseAccessed,
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The builder’s full 19 February 2026 announcement lists the public-art titles assigned to LB07, LB10, LB11 and LB12 and describes the line as a mobile museum.',
}

const lb06Architecture: Source = {
  id: 'dorts-sanying-lb06-architecture',
  title: 'Breathable expanded-metal station skin at Sanxia station',
  titleOriginal: '穿洞洞裝的車站？',
  publisher: 'New Taipei City Department of Rapid Transit Systems (新北市政府捷運工程局)',
  url: 'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/bxkZDn3X2JEw?page=202',
  accessed: proseAccessed,
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The builder’s full station-design article explains LB06’s expanded-metal platform skin, ventilation openings, reduced material weight and the use of heat buoyancy and train movement to exhaust air.',
}

const lb08Art: Source = {
  id: 'dorts-sanying-lb08-art',
  title: 'Yingge station picture-book public art record',
  titleOriginal: '鶯歌車站(繪本)',
  publisher: 'New Taipei City Department of Rapid Transit Systems (新北市政府捷運工程局)',
  url: 'https://www.dorts.ntpc.gov.tw/art_aesthetics/public_artinfo/W0OdPjjBmnbJ',
  accessed: proseAccessed,
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full art record names 陶鄉, identifies 吳建福, places the work at the corridors to TRA Yingge and the New Taipei Art Museum, and describes its ceramic and kiln-firing references and practical lighting function.',
}

const lb08Corridor: Source = {
  id: 'dorts-sanying-lb08-corridor',
  title: 'Weather corridor between Sanying Yingge station and TRA Yingge',
  titleOriginal: '美到不行好好拍！三鶯線鶯歌車站至鶯歌火車站之風雨廊道',
  publisher: 'New Taipei City Department of Rapid Transit Systems (新北市政府捷運工程局)',
  url: 'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/q4VmGpDp2BoY?page=13',
  accessed: proseAccessed,
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The builder’s full September 2022 article describes the planned coloured reinforced-glass weather corridor from LB08 to TRA Yingge, its bridge to the New Taipei Art Museum, and the planned seven-minute walk to the museum.',
}

const lb09Art: Source = {
  id: 'dorts-sanying-lb09-art',
  title: 'Playing with Clay at Ceramics Old Street station',
  titleOriginal: '玩陶-陶瓷老街站(說明牌)',
  publisher: 'New Taipei City Department of Rapid Transit Systems (新北市政府捷運工程局)',
  url: 'https://www.dorts.ntpc.gov.tw/art_aesthetics/public_artinfo/MVamXGXBZ8rj',
  accessed: proseAccessed,
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full art record names 玩陶, identifies 劉鎮洲, places it on four ground-level station columns, and describes the ceramic-panel, glaze and firing techniques used to represent Yingge ceramics.',
}

const lb11Art: Source = {
  id: 'dorts-sanying-lb11-art',
  title: 'Yongji Park station picture-book public art record',
  titleOriginal: '永吉公園站(繪本)',
  publisher: 'New Taipei City Department of Rapid Transit Systems (新北市政府捷運工程局)',
  url: 'https://www.dorts.ntpc.gov.tw/art_aesthetics/public_artinfo/l19ZoxxemveD',
  accessed: proseAccessed,
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full art record names 便捷通行 鶯鳥永吉, identifies 陳宏誠, places it on ground-level columns and walls, and gives the bird-and-wind-chime story behind the work.',
}

const lb12Art: Source = {
  id: 'dorts-sanying-lb12-art',
  title: 'Sanying Line overall index model at Yingtao Fude station',
  titleOriginal: '三鶯線總案索引模型-鶯桃福德站(說明牌)',
  publisher: 'New Taipei City Department of Rapid Transit Systems (新北市政府捷運工程局)',
  url: 'https://www.dorts.ntpc.gov.tw/art_aesthetics/public_artinfo/0g4d6Nn5d5Db',
  accessed: proseAccessed,
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full art record names 三鶯線總案索引模型, identifies 林昭慶 and 古采藝創環境有限公司, places it on the third-floor concourse wall, and describes its border, water, mobile-museum and capsule-model concepts.',
}

const stationProse: Record<string, StationProseSentence[]> = {
  LB01: [
    { text: 'At LB01, DORTS presents A Beautiful Journey as an interchange walk: wall lighting and mosaic ceramic panels linked to train information turn the passage into a flowing river of light.', source: lb01Art.id },
  ],
  LB02: [
    { text: 'DORTS groups LB02’s art within the line’s “Time Journey” work, one chapter in the network’s mobile museum linking stations through a shared visual story.', source: linePublicArt.id },
  ],
  LB03: [
    { text: 'DORTS groups LB03’s art within the line’s “Time Journey” work, one chapter in the network’s mobile museum linking stations through a shared visual story.', source: linePublicArt.id },
  ],
  LB04: [
    { text: 'DORTS groups LB04’s art within the line’s “Time Journey” work, one chapter in the network’s mobile museum linking stations through a shared visual story.', source: linePublicArt.id },
  ],
  LB05: [
    { text: 'DORTS groups LB05’s art within the line’s “Time Journey” work, one chapter in the network’s mobile museum linking stations through a shared visual story.', source: linePublicArt.id },
  ],
  LB06: [
    { text: 'DORTS lists “Footprints · Building Footprints” as LB06’s public-art work.', source: linePublicArt.id },
    { text: 'DORTS also describes the platform’s expanded-metal skin as breathable: perforations ventilate the station and reduce structural weight, while clerestory openings use heat buoyancy and train movement to exhaust hot air.', source: lb06Architecture.id },
  ],
  LB07: [
    { text: 'DORTS’s 2026 public-art announcement lists LB07’s work as “Gather · Flow” (匯聚‧流轉) within the Sanying Line’s mobile-museum programme.', source: linePublicArt2026.id },
  ],
  LB08: [
    { text: 'DORTS’s full LB08 art record presents “陶鄉” as a ceramic- and kiln-firing-inspired landmark and practical lighting installation for the corridors linking Yingge’s local institutions.', source: lb08Art.id },
    { text: 'A DORTS builder article from September 2022 describes the planned weather corridor linking LB08 to TRA Yingge and, by a bridge, the New Taipei Art Museum; it says the walk to the museum was planned at seven minutes.', source: lb08Corridor.id },
  ],
  LB09: [
    { text: 'At LB09, DORTS describes “玩陶” as ceramic panels on station columns using glaze painting, glaze variation, ceramic texture and firing effects to show Yingge’s ceramic diversity.', source: lb09Art.id },
  ],
  LB10: [
    { text: 'DORTS’s 2026 public-art announcement lists two LB10 works, “Time Journey” and “陶鄉,” as part of the Sanying Line’s mobile-museum programme.', source: linePublicArt2026.id },
  ],
  LB11: [
    { text: 'DORTS’s LB11 artwork, “Convenient Passage: Ying Bird Yongji,” turns birds leaving and returning to nests into a daily journey, with wind-chime imagery welcoming passengers home.', source: lb11Art.id },
  ],
  LB12: [
    { text: 'DORTS describes LB12’s index model as a mobile-museum overview: water imagery marks the New Taipei–Taoyuan junction, while capsule forms hold miniatures of works from the line’s twelve art teams.', source: lb12Art.id },
  ],
}

const stationProseSources: Record<string, Source[]> = {
  LB01: [lb01Art],
  LB02: [linePublicArt],
  LB03: [linePublicArt],
  LB04: [linePublicArt],
  LB05: [linePublicArt],
  LB06: [linePublicArt, lb06Architecture],
  LB07: [linePublicArt2026],
  LB08: [lb08Art, lb08Corridor],
  LB09: [lb09Art],
  LB10: [linePublicArt2026],
  LB11: [lb11Art],
  LB12: [lb12Art],
}

function mapSource(code: string, name: string, nameZh: string, url: string): Source {
  return {
    id: `ntmetro-${code.toLowerCase()}-map`,
    title: `${code} ${name} station information map`,
    titleOriginal: `${code} ${nameZh}站資訊圖`,
    publisher: ntmetroPublisher,
    url,
    accessed,
    snapshot: '',
    snapshotAlt: '',
    kind: 'primary',
    lang: 'zh-Hant',
    note: 'The operator’s station-specific information sheet publishes the official English name, numbered exits and facility symbols.',
  }
}

type Row = {
  code: string
  name: string
  nameZh: string
  district: string
  address: string
  exits: number
  mapUrl: string
  interchange?: StationInterchange
  additionalName?: string
  additionalNameSource?: 'route' | 'gazette'
  formerName?: SanyingResearch['formerName']
}

const rows: Row[] = [
  { code: 'LB01', name: 'Dingpu', nameZh: '頂埔', district: '土城區', address: '新北市土城區頂埔里中央路四段51之7號', exits: 4, mapUrl: 'https://www.ntmetro.com.tw/archive/file/1150805-LB01.jpg', interchange: { label: 'Bannan Line at Dingpu', lineCode: 'BL' } },
  { code: 'LB02', name: 'Mazutian', nameZh: '媽祖田', district: '土城區', address: '新北市土城區頂新里中央路四段412號', exits: 1, mapUrl: 'https://www.ntmetro.com.tw/archive/images/1150625-LB02.jpg' },
  { code: 'LB03', name: 'Changshoushan', nameZh: '長壽山', district: '三峽區', address: '新北市三峽區溪北里介壽路三段190號', exits: 2, mapUrl: 'https://www.ntmetro.com.tw/archive/images/1150625-LB03.jpg', formerName: { name: 'Wazi', nameZh: '挖子', announced: '12 July 2017', renamed: '9 June 2020', source: 'ntpc-sanying-naming-gazette' } },
  { code: 'LB04', name: 'Hengxi', nameZh: '橫溪', district: '三峽區', address: '新北市三峽區佳興路360號', exits: 1, mapUrl: 'https://www.ntmetro.com.tw/archive/images/1150625-LB04.jpg' },
  { code: 'LB05', name: 'Longpu', nameZh: '龍埔', district: '三峽區', address: '新北市三峽區龍埔里龍埔路399號', exits: 1, mapUrl: 'https://www.ntmetro.com.tw/archive/images/1150625-LB05.jpg', additionalName: '三峽廣行宮', additionalNameSource: 'gazette' },
  { code: 'LB06', name: 'Sanxia', nameZh: '三峽', district: '三峽區', address: '新北市三峽區龍恩里國慶路100號', exits: 2, mapUrl: 'https://www.ntmetro.com.tw/archive/images/1150625-LB06.jpg', additionalName: '國家教育研究院', additionalNameSource: 'route' },
  { code: 'LB07', name: 'National Taipei University', nameZh: '臺北大學', district: '三峽區', address: '新北市三峽區鳶山里復興路280號', exits: 2, mapUrl: 'https://www.ntmetro.com.tw/archive/images/1150625-LB07.jpg', additionalName: '恩主公醫院', additionalNameSource: 'route' },
  { code: 'LB08', name: 'Yingge', nameZh: '鶯歌車站', district: '鶯歌區', address: '新北市鶯歌區東鶯里館前路299號', exits: 3, mapUrl: 'https://www.ntmetro.com.tw/archive/images/1150625-LB08.jpg', interchange: { label: 'Taiwan Railways at Yingge' } },
  { code: 'LB09', name: 'Ceramics Old Street', nameZh: '陶瓷老街', district: '鶯歌區', address: '新北市鶯歌區南靖里重慶街28之2號', exits: 2, mapUrl: 'https://www.ntmetro.com.tw/archive/images/1150625-LB09.jpg' },
  { code: 'LB10', name: 'Guohua', nameZh: '國華', district: '鶯歌區', address: '新北市鶯歌區建國里國華路66號', exits: 2, mapUrl: 'https://www.ntmetro.com.tw/archive/images/1150625-LB10.jpg' },
  { code: 'LB11', name: 'Yongji Park', nameZh: '永吉公園', district: '鶯歌區', address: '新北市鶯歌區永吉里鶯桃路296號', exits: 2, mapUrl: 'https://www.ntmetro.com.tw/archive/file/1150625-LB11.jpg' },
  { code: 'LB12', name: 'Yingtao Fude', nameZh: '鶯桃福德', district: '鶯歌區', address: '新北市鶯歌區福德一路1之1號', exits: 2, mapUrl: 'https://www.ntmetro.com.tw/archive/images/1150625-LB12.jpg' },
]

export const SANYING_STATIONS: SanyingStation[] = rows.map((row, index) => {
  const map = mapSource(row.code, row.name, row.nameZh, row.mapUrl)
  const sources = [stationList, map, opening, motcInspection, augustHours, laterAugustHours, ...(stationProseSources[row.code] ?? [])]
  const coordinates = ntpcLandmarkWgs84[row.code]
  if (coordinates) sources.push(ntpcLandmarkCoordinates)
  if (row.additionalNameSource === 'route') sources.push(dortsRoute)
  if (row.additionalNameSource === 'gazette' || row.formerName) sources.push(namingGazette)

  return {
    code: row.code,
    line: 'LB',
    operator: 'NTMC',
    name: row.name,
    nameZh: row.nameZh,
    district: row.district,
    address: row.address,
    location: '',
    locationSource: '',
    sources: [],
    lat: coordinates?.lat ?? null,
    lon: coordinates?.lon ?? null,
    sequence: index + 1,
    chainageKm: null,
    interchange: [],
    structure: 'elevated',
    engineering: '',
    exits: row.exits,
    planned: [],
    recordSource: 'primary-research',
    prose: stationProse[row.code] ?? [],
    research: {
      sources,
      identitySource: stationList.id,
      mapSource: map.id,
      coordinateSource: coordinates ? ntpcLandmarkCoordinates.id : undefined,
      structureSource: motcInspection.id,
      openingSource: opening.id,
      scheduleSources: [augustHours.id, laterAugustHours.id],
      interchange: row.interchange,
      additionalName: row.additionalName,
      additionalNameSource: row.additionalNameSource === 'route' ? dortsRoute.id : row.additionalNameSource === 'gazette' ? namingGazette.id : undefined,
      formerName: row.formerName,
      facilities: 'Step-free access; accessible toilet; information point; AED; water dispenser',
      openingDate: '30 June 2026',
      trialFare: 'Stored-value cards ride free from 30 June to 31 August 2026; riders without one need a single-journey ticket.',
      trialHours: '08:00–22:00 from 1 August; 06:00–24:00 announced for 16–31 August.',
      normalFare: 'NT$20–35; the operator has not announced the charging start date.',
      provenance: 'Station order is the operator’s published LB01–LB12 sequence. Coordinates come from the official New Taipei landmark records, converted from their published TWD97 fields to WGS84 for display.',
      provenanceSource: ntpcLandmarkCoordinates.id,
    },
  }
})
