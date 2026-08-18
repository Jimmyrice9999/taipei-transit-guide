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

const publicArtIndex: Source = {
  id: 'dorts-sanying-public-art-index',
  title: 'Sanying Line public-art index',
  titleOriginal: '公共藝術',
  publisher: 'New Taipei City Department of Rapid Transit Systems (新北市政府捷運工程局)',
  url: 'https://www.dorts.ntpc.gov.tw/art_aesthetics/public_art',
  accessed: proseAccessed,
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The builder’s full public-art index states that the Sanying Line is 14.29 km with 12 elevated stations and lists the LB01–LB05 work titles.',
}

const lb02Art: Source = {
  id: 'dorts-sanying-lb02-art-documentary',
  title: 'Mazutian station public-art documentary',
  titleOriginal: '一路有藝思Part1：三鶯線媽祖田站(LB02)',
  publisher: 'New Taipei City Department of Rapid Transit Systems (新北市政府捷運工程局)',
  url: 'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/0g4d6NKQd5Db',
  accessed: proseAccessed,
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The builder’s full documentary places LB02’s Time Journey work on the third-floor passage wall and describes its AR-linked interactive approach within the line-wide public-art story.',
}

const lb03Art: Source = {
  id: 'dorts-sanying-lb03-art-documentary',
  title: 'Changshoushan station public-art documentary',
  titleOriginal: '一路有藝思Part2：三鶯線長壽山站(LB03)',
  publisher: 'New Taipei City Department of Rapid Transit Systems (新北市政府捷運工程局)',
  url: 'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/eoPZBOnJmgVl?page=1',
  accessed: proseAccessed,
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The builder’s full documentary identifies the LB03 Reed Flower Street Lamp work, its artist and ecological setting, and the Time Journey production groups.',
}

const engineeringRisks: Source = {
  id: 'dorts-sanying-engineering-risks',
  title: 'Sanying Line high-risk bridge and railway construction',
  titleOriginal: '侯市長視察三鶯線陶瓷老街站',
  publisher: 'New Taipei City Department of Rapid Transit Systems (新北市政府捷運工程局)',
  url: 'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/7PVdqkY4mGLb?page=239',
  accessed: proseAccessed,
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The builder’s full documentary states that the line is elevated, crosses national and railway infrastructure and three waterways, and describes fish-fin bridge, railway supervision and night power-off controls.',
}

const dingpuInterchange: Source = {
  id: 'dorts-sanying-dingpu-interchange',
  title: 'Dingpu Bannan–Sanying interchange construction',
  titleOriginal: '三鶯線最關鍵一哩路!全線動態測試進行中',
  publisher: 'New Taipei City Department of Rapid Transit Systems (新北市政府捷運工程局)',
  url: 'https://www.dorts.ntpc.gov.tw/news/indexInfo/O6JmaQ3gmqya?page=1',
  accessed: proseAccessed,
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The builder’s full announcement describes Dingpu’s vertical Bannan–Sanying arrangement, eight direct escalators, two direct lifts and the stated transfer time.',
}

const dingpuConstructionNotice: Source = {
  id: 'dorts-sanying-dingpu-construction-notice',
  title: 'Dingpu interchange construction traffic notice',
  titleOriginal: '新北捷運三鶯線施工 板南線頂埔站3號出口3/1起封閉',
  publisher: 'New Taipei City Department of Rapid Transit Systems (新北市政府捷運工程局)',
  url: 'https://www.dorts.ntpc.gov.tw/news/indexInfo/nalZ4Evzmzeo?page=5',
  accessed: proseAccessed,
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The builder’s full 2024 construction notice records the transfer-facility works between Bannan Dingpu and Sanying Dingpu and the temporary closure of Bannan exit 3.',
}

const dingpuArchitecture: Source = {
  id: 'dorts-sanying-dingpu-architecture',
  title: 'Dingpu station breathable urban-greenhouse design',
  titleOriginal: '捷運三鶯線頂埔站周邊定向越野挑戰賽',
  publisher: 'New Taipei City Department of Rapid Transit Systems (新北市政府捷運工程局)',
  url: 'https://www.dorts.ntpc.gov.tw/news/indexInfo/7PVdqJR7ZGLb?page=2',
  accessed: proseAccessed,
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The builder’s full page describes LB01’s elevated side platform, shared Dingpu entrances and the urban-greenhouse design using planting, a long-span structure, expanded metal, daylight and natural ventilation.',
}

const mazutianDevelopment: Source = {
  id: 'dorts-sanying-mazutian-development',
  title: 'Mazutian station joint-development contract announcement',
  titleOriginal: '三鶯線捷開案實現招商過半! 媽祖田及北大站今簽約',
  publisher: 'New Taipei City Department of Rapid Transit Systems (新北市政府捷運工程局)',
  url: 'https://www.dorts.ntpc.gov.tw/news/indexInfo/XlR276bDmV8v',
  accessed: proseAccessed,
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The builder’s full announcement records the Mazutian station-area joint-development contract, its stated scale and public-benefit facilities; it is not a station civil-works award or final account.',
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
    { text: 'The project route record places LB01 in Tucheng’s Central Road Section 4 and identifies the station as the Sanying Line’s connection to the existing Bannan Line Dingpu station.', source: dortsRoute.id },
    { text: 'DORTS describes the Sanying platform as ground-level three while the Bannan platform is underground three, making this a vertically stacked interchange rather than a same-level transfer.', source: dingpuInterchange.id },
    { text: 'The same interchange announcement records eight direct escalators, arranged as four up and four down, and two lifts serving the direct connection between the lines.', source: dingpuInterchange.id },
    { text: 'That announcement states a transfer time of under two minutes for the direct route, while the operator’s actual passenger walking time is not independently established here.', source: dingpuInterchange.id },
    { text: 'A 2024 construction notice records that the transfer facility was still being built between the two systems and temporarily closed Bannan exit 3 while the work proceeded.', source: dingpuConstructionNotice.id },
    { text: 'The notice describes the construction path from the Bannan station’s underground level three by escalator or lift to Sanying’s ground-level three, which explains why the public route is distinct from a street transfer.', source: dingpuConstructionNotice.id },
    { text: 'DORTS’ station-design record describes an elevated side platform closely integrated with the existing Dingpu station and shared entrances.', source: dingpuArchitecture.id },
    { text: 'It frames the station as an urban greenhouse, using planting, a long-span structure, a semi-transparent expanded-metal façade, daylight and natural ventilation as parts of the design brief.', source: dingpuArchitecture.id },
    { text: 'The line’s public-art index describes the wider project as 14.29 kilometres with 12 elevated stations, placing LB01’s interchange work inside a line-wide rather than underground station programme.', source: publicArtIndex.id },
    { text: 'The builder’s engineering documentary says the elevated alignment crosses national and railway infrastructure, the Dahan and Sanxia rivers and Yingge Creek.', source: engineeringRisks.id },
    { text: 'For railway crossings, it records a fish-fin bridge, protective base plates, railway supervision and a night operation with a TRA power-off section.', source: engineeringRisks.id },
    { text: 'Those controls describe line-level construction risk and should not be read as evidence that a particular LB01 structural incident occurred.', source: engineeringRisks.id },
    { text: 'The public-art record establishes the artists and the interchange-passage media for A Beautiful Journey, but the fetched records do not establish a separate LB01 art cost or a civil construction contract value.', source: lb01Art.id },
    { text: 'No fetched primary record in this batch establishes an LB01 rename, a separate station architect, or a station-specific feeder-bus stop-ID join, so those fields remain TBC.', source: dortsRoute.id },
  ],
  LB02: [
    { text: 'DORTS groups LB02’s art within the line’s “Time Journey” work, one chapter in the network’s mobile museum linking stations through a shared visual story.', source: linePublicArt.id },
    { text: 'The route record places LB02 on Tucheng’s Central Road Section 4 in the Mazutian area, making it a station serving the western approach to the Sanying corridor.', source: dortsRoute.id },
    { text: 'The public-art index describes the Sanying project as a 14.29-kilometre line with 12 elevated stations, so LB02’s station context is part of a continuous elevated corridor rather than an isolated branch.', source: publicArtIndex.id },
    { text: 'DORTS’ engineering documentary says the line must pass over national and railway infrastructure and across the Dahan River, Sanxia River and Yingge Creek.', source: engineeringRisks.id },
    { text: 'It treats the railway crossing as high-risk work and records a fish-fin bridge, a protective base plate, railway supervision and a night section requiring TRA power to be switched off.', source: engineeringRisks.id },
    { text: 'Those measures are evidence about the line’s construction method and risk controls, not a report of a specific LB02 accident.', source: engineeringRisks.id },
    { text: 'DORTS’ Mazutian public-art documentary places Time Journey on the station’s third-floor passage wall.', source: lb02Art.id },
    { text: 'The documentary describes the work as part of a line-wide story called A Smiling Promise and says the programme combines digital, augmented-reality, sculpture, festival, sound and participation formats.', source: lb02Art.id },
    { text: 'It specifically records an interactive public-art installation using augmented reality, making the station’s work more than a static wall treatment.', source: lb02Art.id },
    { text: 'The same record presents LB02 as a window into the Sanying Line’s public-art laboratory, while the detailed imagery and narrative of the copyrighted work are not reproduced here.', source: lb02Art.id },
    { text: 'A separate DORTS announcement says Mazutian was the second-largest station-area joint-development project in the line programme.', source: mazutianDevelopment.id },
    { text: 'That announcement records two towers of 27 floors over three basement levels and one seven-floor building over three basement levels, with a stated total of about 21,000 ping.', source: mazutianDevelopment.id },
    { text: 'It also records about 900 ping of public-benefit space for a community mental-health centre, community empowerment and incubation, public childcare and a residential disability facility.', source: mazutianDevelopment.id },
    { text: 'These figures describe a signed station-area development contract and its planned public benefits, not the value of LB02’s civil-works contract or its final construction account.', source: mazutianDevelopment.id },
    { text: 'The fetched primary records do not establish a separate LB02 station architect, rename gazette, civil contract value, final account or confirmed feeder-bus stop-ID join, so those fields remain TBC.', source: dortsRoute.id },
  ],
  LB03: [
    { text: 'DORTS groups LB03’s art within the line’s “Time Journey” work, one chapter in the network’s mobile museum linking stations through a shared visual story.', source: linePublicArt.id },
    { text: 'The route record places LB03 on Jieshou Road Section 3 in Sanxia, at the point where the Sanying alignment leaves the Tucheng approach and enters the Sanxia corridor.', source: dortsRoute.id },
    { text: 'The public-art index records LB03 among the 12 elevated stations on the 14.29-kilometre Sanying Line.', source: publicArtIndex.id },
    { text: 'The builder’s engineering documentary describes the full line as elevated and lists crossings of national and railway infrastructure, the Dahan River, the Sanxia River and Yingge Creek.', source: engineeringRisks.id },
    { text: 'For the railway crossing, it records a fish-fin bridge, protective base-plate work, railway supervision and a night operation during a TRA power-off period.', source: engineeringRisks.id },
    { text: 'The documentary’s safety description is a line-level account of construction controls and does not establish that an incident occurred at LB03.', source: engineeringRisks.id },
    { text: 'DORTS’ LB03 documentary identifies Reed Flower Street Lamp as a work on the station’s third-floor passage wall and names Wu Jianfu as its artist.', source: lb03Art.id },
    { text: 'The same record relates the work to reed flowers beside the Dahan River and places it at the foot of Changshoushan, described there as a 193-metre ecological mountain and valley setting.', source: lb03Art.id },
    { text: 'It also identifies the production groups for LB03’s Time Journey work as Gu Cai Art Creation Environment, Damar Art Design and He Dong Design.', source: lb03Art.id },
    { text: 'The builder’s 2025 public-art announcement places LB03 within the line-wide mobile-museum programme and assigns it the Time Journey title.', source: linePublicArt.id },
    { text: 'The later 2026 announcement again lists Time Journey for the LB02–LB05 station group, confirming the title assignment across the two public-art announcements.', source: linePublicArt2026.id },
    { text: 'The two announcements agree on the LB03 title and do not provide a competing LB03 title or artist attribution in the passages used here.', source: linePublicArt2026.id },
    { text: 'The fetched records do not establish a separate LB03 civil contract value, final account, architect, public-art cost, feeder-bus stop-ID join or later rename.', source: dortsRoute.id },
    { text: 'Those unestablished fields remain TBC rather than being inferred from the line-wide engineering and public-art records.', source: engineeringRisks.id },
  ],
  LB04: [
    { text: 'DORTS groups LB04’s art within the line’s “Time Journey” work, one chapter in the network’s mobile museum linking stations through a shared visual story.', source: linePublicArt.id },
    { text: 'The route record places LB04 in Sanxia’s Hengxi area near Huanhe Road and the Sanrong driving-school area.', source: dortsRoute.id },
    { text: 'The same route record presents the station as part of the 12-stop Sanying route and uses the project’s planning-era station sequence rather than asserting a separate historical rename.', source: dortsRoute.id },
    { text: 'DORTS’ public-art index identifies the Sanying project as 14.29 kilometres long, with all 12 stations elevated.', source: publicArtIndex.id },
    { text: 'The line’s engineering documentary says the elevated structures cross national and railway infrastructure and the Dahan, Sanxia and Yingge waterways.', source: engineeringRisks.id },
    { text: 'It records high-risk management for those works, including a fish-fin bridge at a railway crossing, protective base plates and railway supervision.', source: engineeringRisks.id },
    { text: 'The railway operation also included a night work period during which the relevant TRA power section was switched off.', source: engineeringRisks.id },
    { text: 'These are documented construction controls for the corridor and are not evidence of an LB04-specific incident.', source: engineeringRisks.id },
    { text: 'The 2025 public-art announcement assigns Time Journey to the LB02–LB05 station group and describes the line as a mobile museum connecting the stations through a shared programme.', source: linePublicArt.id },
    { text: 'The 2026 announcement repeats the LB02–LB05 Time Journey assignment while expanding the public-art programme to 12 works and 13 artist groups.', source: linePublicArt2026.id },
    { text: 'The public-art index independently lists Time Journey at Hengxi, establishing a station-specific title without requiring an inference from the station name.', source: publicArtIndex.id },
    { text: 'The fetched public-art pages do not identify an LB04 artist, medium, selection cost or installation date in the material used for this page.', source: publicArtIndex.id },
    { text: 'The fetched DORTS records also do not establish an LB04 civil construction contract, final account, separate architect, rename gazette or confirmed feeder-bus stop-ID join.', source: dortsRoute.id },
    { text: 'Those gaps remain TBC; the line-wide engineering and mobile-museum records are retained as corridor context rather than converted into station-specific claims.', source: engineeringRisks.id },
  ],
  LB05: [
    { text: 'DORTS groups LB05’s art within the line’s “Time Journey” work, one chapter in the network’s mobile museum linking stations through a shared visual story.', source: linePublicArt.id },
    { text: 'The route record places LB05 on Longpu Road in Sanxia and labels the station Longpu with Sanxia Guangxing Temple as an appended name.', source: dortsRoute.id },
    { text: 'That wording is a route-record label for the station and does not by itself establish a separate rename event.', source: dortsRoute.id },
    { text: 'The public-art index identifies the line as 14.29 kilometres long with 12 elevated stations and lists Time Journey at Longpu.', source: publicArtIndex.id },
    { text: 'The builder’s line documentary says the elevated alignment crosses national and railway infrastructure and the Dahan, Sanxia and Yingge waterways.', source: engineeringRisks.id },
    { text: 'It records a fish-fin bridge for the railway crossing, protective base-plate work under the construction vehicle, railway supervision and a night TRA power-off operation.', source: engineeringRisks.id },
    { text: 'The engineering account describes the corridor’s risk-control method and does not report an LB05-specific construction incident.', source: engineeringRisks.id },
    { text: 'The 2025 public-art announcement assigns Time Journey to LB02 through LB05 and presents the line-wide programme as a mobile museum.', source: linePublicArt.id },
    { text: 'The 2026 announcement repeats that assignment and says the programme contains 12 works by 13 artist groups, including physical and augmented-reality formats.', source: linePublicArt2026.id },
    { text: 'The public-art index independently lists Time Journey at Longpu, providing the station-specific title in the builder’s inventory.', source: publicArtIndex.id },
    { text: 'The full public-art records fetched for this batch do not identify an LB05 artist, medium, selection process, cost or opening date.', source: publicArtIndex.id },
    { text: 'The fetched DORTS records also do not establish an LB05 civil contract value, final account, individual architect, rename gazette or confirmed feeder-bus stop-ID join.', source: dortsRoute.id },
    { text: 'The appended temple name should therefore remain distinct from any future gazette evidence about formal naming.', source: dortsRoute.id },
    { text: 'The missing station-specific fields remain TBC rather than being filled from line-wide engineering or public-art information.', source: engineeringRisks.id },
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
  LB01: [dortsRoute, lb01Art, publicArtIndex, engineeringRisks, dingpuInterchange, dingpuConstructionNotice, dingpuArchitecture],
  LB02: [dortsRoute, linePublicArt, publicArtIndex, lb02Art, engineeringRisks, mazutianDevelopment],
  LB03: [dortsRoute, linePublicArt, linePublicArt2026, publicArtIndex, lb03Art, engineeringRisks],
  LB04: [dortsRoute, linePublicArt, linePublicArt2026, publicArtIndex, engineeringRisks],
  LB05: [linePublicArt, linePublicArt2026, publicArtIndex, engineeringRisks, dortsRoute],
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
