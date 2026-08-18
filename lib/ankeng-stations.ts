import type { Source } from './sources.ts'
import type { StationOverlay, StationProseSentence, Structure } from './station-overlay.ts'
import type { StationResearch } from './station-research.ts'

const accessed = '2026-08-14'
const freshAnkengSources = new Set([
  'dorts-ankeng-k02-design',
  'dorts-ankeng-k01-k02-track',
  'dorts-ankeng-k06-turnback',
  'dorts-ankeng-k01-k05-power',
  'dorts-ankeng-power',
  'dorts-ankeng-first-train',
  'dorts-ankeng-k05-inspection',
  'dorts-ankeng-quality-award',
  'dorts-ankeng-k08-floating-track',
  'dorts-ankeng-k09-track',
])
const ntmcPublisher = 'New Taipei Metro Corporation (新北大眾捷運股份有限公司)'
const dortsPublisher = 'New Taipei City Department of Rapid Transit Systems (新北市政府捷運工程局)'
const motcPublisher = 'Ministry of Transportation and Communications, Taiwan (交通部)'

function source(
  id: string,
  title: string,
  titleOriginal: string,
  publisher: string,
  url: string,
  note: string,
  accessedDate = accessed,
): Source {
  return {
    id,
    title,
    titleOriginal,
    publisher,
    url,
    accessed: freshAnkengSources.has(id) ? '2026-08-18' : accessedDate,
    snapshot: '',
    snapshotAlt: '',
    kind: 'primary',
    lang: 'zh-Hant',
    note,
  }
}

const stationList = source(
  'ntmc-ankeng-stations',
  'Ankeng LRT station list',
  '安坑輕軌車站',
  ntmcPublisher,
  'https://www.ntmetro.com.tw/basic/?node=10137',
  'The operator’s full station table publishes K01–K09 codes, current names and station-position descriptions; it does not provide postal street addresses for the eight TDX address gaps.',
)

const tdxStations = source(
  'tdx-ankeng-stations',
  'Taiwan MOTC TDX — Ankeng LRT station records',
  'TDX 安坑輕軌車站資料',
  motcPublisher,
  'https://tdx.transportdata.tw/',
  'The committed TDX records publish station sequence, current names, the K09 postal address, districts, coordinates and running data used by the generated registry.',
)

const operatorUrls: Record<string, string> = {
  K01: 'https://www.ntmetro.com.tw/basic/?mode=detail&node=600',
  K02: 'https://www.ntmetro.com.tw/basic/?mode=detail&node=601',
  K03: 'https://www.ntmetro.com.tw/basic/?mode=detail&node=608',
  K04: 'https://www.ntmetro.com.tw/basic/?mode=detail&node=607',
  K05: 'https://www.ntmetro.com.tw/basic/?mode=detail&node=606',
  K06: 'https://www.ntmetro.com.tw/basic/?mode=detail&node=605',
  K07: 'https://www.ntmetro.com.tw/basic/?mode=detail&node=604',
  K08: 'https://www.ntmetro.com.tw/basic/?mode=detail&node=603',
  K09: 'https://www.ntmetro.com.tw/basic/?mode=detail&node=602',
}

const operatorStations = Object.fromEntries(
  Object.entries(operatorUrls).map(([code, url]) => [
    code,
    source(
      `ntmc-${code.toLowerCase()}-station`,
      `Ankeng LRT ${code} station page`,
      `安坑輕軌${code}車站`,
      ntmcPublisher,
      url,
      'The operator’s full station page identifies the station and publishes its timetable record; the readable HTML links to a station-information document rather than stating a station-specific platform or exit table.',
    ),
  ]),
) as Record<string, Source>

const faq = source(
  'ntmc-light-rail-faq-ankeng',
  'New Taipei Metro light-rail frequently asked questions',
  '常見問題',
  ntmcPublisher,
  'https://www.ntmetro.com.tw/basic/?node=10005',
  'The operator’s full FAQ states that K09 has male/female and accessible toilets while the other light-rail stations do not, that K09 transfers with the Circular Line, that light rail uses open platforms and card readers, and that doors are opened by passenger buttons.',
)

const accessibility = source(
  'ntmc-light-rail-accessibility-ankeng',
  'New Taipei Metro light-rail accessibility services',
  '無障礙服務',
  ntmcPublisher,
  'https://www.ntmetro.com.tw/basic/?node=10041',
  'The operator’s full accessibility page publishes enquiry points, accessible ticket machines, lifts at elevated stations, ramps at at-grade stations, and K09 nursing-room and accessible-toilet information.',
)

const transfer = source(
  'ntmc-ankeng-transfers',
  'New Taipei Metro light-rail transfer information',
  '請問輕軌系統轉乘其他運輸系統資訊？',
  ntmcPublisher,
  'https://www.ntmetro.com.tw/basic/?mode=detail&node=36',
  'The operator’s full transfer answer states that Ankeng LRT K09 Shisizhang and the Circular Line Shisizhang station are co-constructed and can transfer with one another.',
)

const dortsRoute = source(
  'dorts-ankeng-route',
  'Ankeng Line project record',
  '安坑線',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/about/route/jW0OdPGn2nbJ',
  'The builder’s full route page publishes the 7.5 km length, nine stations, 10 February 2023 opening, route milestones, the at-grade Anyi Road section, the elevated Anhe Road section and the route’s named station surroundings.',
)

const dortsRouteInfo = source(
  'dorts-ankeng-station-positions',
  'Ankeng Line station positions',
  '安坑線',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/about/routeInfo/jW0OdPGn2nbJ',
  'The builder’s full station table publishes K01–K09 names and station-position descriptions. Its K09 row calls the adjacent Circular station Y7; current NTMC and DORTS route prose use Y8, so both identifiers are retained as a conflict.',
)

const k02Art = source(
  'dorts-ankeng-k02-art',
  'Rose China Town station public art',
  '安坑輕軌玫瑰中國城站',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/art_aesthetics/public_artinfo/Pxe2kNxkmEgL',
  'The builder’s full public-art record names 《星宇安坑》, its artist 許唐瑋, its K02 position and its rounded stainless-steel and multicolour-painted construction; it does not give an artwork year.',
)

const k08Art = source(
  'dorts-ankeng-k08-art',
  'Xinhe Elementary School station public art',
  '安坑輕軌新和國小站',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/art_aesthetics/public_artinfo/O6JmaQKpmqya',
  'The builder’s full public-art record names 《曼波安坑》 and 《漂浮安坑》, their artists 林舜龍 and 富永泰雄, the K08 position and the latter work’s mosaic-inlay medium; it does not give an artwork year.',
)

const k09Art = source(
  'dorts-ankeng-k09-art',
  'Shisizhang station public art',
  '安坑輕軌尋找螢火蟲',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/yEwdwjao2M04',
  'The builder’s full public-art article names 《螢火蟲回家的路》 at the Shisizhang station platform ceiling and describes its perforated-metal plate and micro wind-powered lights; it does not give an artwork year or artist.',
)

const k09Bridge = source(
  'dorts-ankeng-anxin-bridge',
  'An-Xin Bridge construction record',
  '安坑輕軌最困難的工程—安心橋',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/oa1ZKpQXmB9V',
  'The builder’s full construction article publishes An-Xin Bridge’s 502 m length, three-span continuous asymmetric cable-stayed design, 130 m pylon, 400 m river crossing and connection between Xindian and Ankeng.',
)

const k01Tunnel = source(
  'dorts-ankeng-shuangan-tunnel',
  'Shuang’an Tunnel track crossover',
  '安坑輕軌軌道新亮點！雙安隧道交叉橫渡線！',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/pRG2lD792b5z',
  'The builder’s full engineering article places the three-bore Shuang’an Tunnel between K01 and Ankeng Depot and describes its light-rail track crossover.',
)

const dortsK02Design = source(
  'dorts-ankeng-k02-design',
  'Rose China Town station architecture',
  '安坑輕軌玫瑰中國城站設計搶先看',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/pW0dxgR923Ex?page=188',
  'The builder’s full June 2021 station-design article describes K02 as an island-platform station on the Anyi Road elevated bridge, with a forest-in-the-trees design concept and an orange dotted-glass roof.',
)

const dortsK01K02Track = source(
  'dorts-ankeng-k01-k02-track',
  'Ankeng K01–K02 track-laying progress',
  '侯市長視察安坑輕軌工程！',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/MJjdJV4wdAv6?page=230',
  'The builder’s full February 2021 progress article records track laying at K01 and K02 on the at-grade section and describes the 2.6-hectare depot layout and construction sequence.',
)

const dortsK06Turnback = source(
  'dorts-ankeng-k06-turnback',
  'Ankeng K06 turnback and station-platform design',
  '安坑輕軌高架車站及機廠進度！',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/O6Jmar102qya',
  'The builder’s full August 2021 progress article records K06 construction, a side-and-island-platform arrangement and six turnouts around the station allowing vehicles to turn back toward K09.',
)

const dortsK01K05Power = source(
  'dorts-ankeng-k01-k05-power',
  'Ankeng K01–K05 systems energisation',
  '一月安坑沿線空拍！',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/lRb2b9e4mAyP',
  'The builder’s full January 2022 progress article records the depot and K01–K05 systems energised by the end of the preceding year as preparation for train-on-line testing.',
)

const dortsAnkengPower = source(
  'dorts-ankeng-power',
  'Ankeng LRT high-voltage traction power',
  '安坑輕軌機電系統高壓供電知多少！',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/3QGZ8V7J2rb4?page=220',
  'The builder’s full September 2021 technical article describes 161 kV supply entering the K05 and K09 utility rooms, transformation to 22.8 kV, distribution to the depot/K02/K06/K07/K08 substations and rectification to 750 V DC for trains.',
)

const dortsAnkengFirstTrain = source(
  'dorts-ankeng-first-train',
  'Ankeng LRT first-train and civil-work milestone',
  '安坑輕軌首列車登廠！',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/P9z2zp6WZrDp',
  'The builder’s full October 2021 milestone article records the first train entering the depot, the completed at-grade civil and track works, ongoing elevated track and electromechanical work, and the planned static, dynamic and endurance testing sequence.',
)

const dortsK05Inspection = source(
  'dorts-ankeng-k05-inspection',
  'Ankeng K05 preliminary-inspection collision exercise',
  '模擬演練在演什麼？',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/apVdMDJg2KRw?keyword=%E6%A8%A1%E6%93%AC%E6%BC%94%E7%B7%B4%E5%9C%A8%E6%BC%94%E4%BB%80%E9%BA%BC%EF%BC%9F&page=1',
  'The builder’s full December 2022 preliminary-inspection article records a simulated motorcycle collision with a train near K05 at the Anyi Road–Anzhong Road intersection and says emergency responders stood by without injury.',
)

const dortsAnkengQualityAward = source(
  'dorts-ankeng-quality-award',
  'Ankeng LRT electromechanical contract and quality award',
  '新北捷運安坑輕軌 榮獲公共工程金質獎優等殊榮',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/news/indexInfo/Pxe2kjWxmEgL?page=7',
  'The builder’s full December 2023 award article identifies China Steel as the electromechanical turnkey contractor, China Engineering Consultants as project manager and Sinotech Engineering Consultants as supervision consultant, and records the project’s Public Construction Golden Quality Award.',
)

const dortsK08FloatingTrack = source(
  'dorts-ankeng-k08-floating-track',
  'Ankeng K08 floating trackbed record',
  '減振神器！安坑輕軌浮動式道床',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/documentary/video/BjeZYp3wdAwv?Page=6&type=149&vid=WQR2WeNvZGPV',
  'The builder’s full video-page article says the elevated section between Anhe Road Section 3 and Xinhe Elementary School K08 has three floating-trackbed locations because it runs near homes, describes the measure as vibration reduction, and distinguishes grooved surface rail from I-shaped elevated rail.',
)

const dortsK09Track = source(
  'dorts-ankeng-k09-track',
  'Ankeng K09 and An-Xin Bridge track-laying progress',
  '安坑輕軌高架段軌道及機廠進度',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/documentary/video/MJjdJqXb2Av6?type=149&vid=xVR2eNL0dJ36',
  'The builder’s full video-page article records track laying at K09 and on An-Xin Bridge and explains that the bridge’s diamond turnout was tackled first because its construction difficulty was high.',
)

const depot = source(
  'dorts-ankeng-depot',
  'Ankeng Depot engineering record',
  '安坑機廠知多少！',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/0V4drGelZqEN',
  'The builder’s full depot article publishes the nine-track stabling yard, five-track maintenance shop and administration building functions; a station-by-station operating roster is not published.',
)

const commonFacilities = 'NTMC publishes a passenger enquiry point with wheelchair availability and an accessible ticket machine at all light-rail stations. K01/K03–K05 use the operator’s at-grade ramp provision; K02/K06–K09 use the operator’s elevated-station lift provision. Station-specific lift/ramp count: TBC. Bike parking: TBC.'
const tbc = 'TBC'

type KData = {
  location: string
  structure: Structure
  structureSource: Source
  openingDate: string
  platformDetails: string
  platformSource: Source
  exitDetails: string
  facilities: string
  interchange?: { label: string; lineCode?: string }
  interchangeSource?: Source
  engineeringHistory: string
  engineeringHistorySource: Source
  landmarks: string
  landmarksSource: Source
  publicArt?: string
  publicArtSource?: Source
}

const kData: Record<string, KData> = {
  K01: {
    location: '安一路上，鄰近甜蜜蜜社區', structure: 'at-grade', structureSource: dortsRoute, openingDate: '10 February 2023',
    platformDetails: 'At-grade; platform form and track count: TBC. NTMC describes the light-rail system as open platforms with card readers rather than closed gates.', platformSource: faq,
    exitDetails: 'Number, street-emergence positions and station-specific accessible entry points: TBC.', facilities: commonFacilities + ' Toilet: none; NTMC says only K09 has a light-rail station toilet.',
    engineeringHistory: 'DORTS places the three-bore Shuang’an Tunnel and its track crossover on the section between K01 and Ankeng Depot. This is the depot lead, not a tunnel between two passenger stations.', engineeringHistorySource: k01Tunnel,
    landmarks: 'Anyi Road and Tiantianmi Community are named in the operator and builder station-position descriptions.', landmarksSource: stationList,
  },
  K02: {
    location: '安一路與玫瑰路路口', structure: 'elevated', structureSource: k02Art, openingDate: '10 February 2023',
    platformDetails: 'Elevated station on the Anyi Road viaduct; platform form and track count: TBC.', platformSource: k02Art,
    exitDetails: 'Number, street-emergence positions and station-specific accessible entry points: TBC.', facilities: commonFacilities + ' Toilet: none; NTMC says only K09 has a light-rail station toilet.',
    engineeringHistory: 'DORTS identifies the station as situated on the Anyi Road elevated bridge. Station-specific construction history beyond that structure: TBC.', engineeringHistorySource: k02Art,
    landmarks: 'Anyi Road and Rose Road are named in the operator and builder station-position descriptions.', landmarksSource: stationList,
    publicArt: '《星宇安坑》 — 許唐瑋; rounded stainless steel with multicolour paint; year: TBC.', publicArtSource: k02Art,
  },
  K03: {
    location: '安一路與僑信路路口', structure: 'at-grade', structureSource: dortsRoute, openingDate: '10 February 2023',
    platformDetails: 'At-grade; platform form and track count: TBC. NTMC describes the light-rail system as open platforms with card readers rather than closed gates.', platformSource: faq,
    exitDetails: 'Number, street-emergence positions and station-specific accessible entry points: TBC.', facilities: commonFacilities + ' Toilet: none; NTMC says only K09 has a light-rail station toilet.',
    engineeringHistory: 'DORTS places K03 on the Anyi Road section before the route turns to the elevated Anhe Road section at K06; station-specific construction history: TBC.', engineeringHistorySource: dortsRoute,
    landmarks: 'Anyi Road and Qiaoxin Road are named in the operator and builder station-position descriptions.', landmarksSource: stationList,
  },
  K04: {
    location: '安一路與車子路路口', structure: 'at-grade', structureSource: dortsRoute, openingDate: '10 February 2023',
    platformDetails: 'At-grade; platform form and track count: TBC. NTMC describes the light-rail system as open platforms with card readers rather than closed gates.', platformSource: faq,
    exitDetails: 'Number, street-emergence positions and station-specific accessible entry points: TBC.', facilities: commonFacilities + ' Toilet: none; NTMC says only K09 has a light-rail station toilet.',
    engineeringHistory: 'DORTS places K04 on the Anyi Road section before the route turns to the elevated Anhe Road section at K06; station-specific construction history: TBC.', engineeringHistorySource: dortsRoute,
    landmarks: 'Anyi Road and Chezilu Road are named in the operator and builder station-position descriptions; the current operator name is Cardinal Tien Hospital Ankang Branch.', landmarksSource: stationList,
  },
  K05: {
    location: '安一路與安忠路路口', structure: 'at-grade', structureSource: dortsRoute, openingDate: '10 February 2023',
    platformDetails: 'At-grade; platform form and track count: TBC. NTMC describes the light-rail system as open platforms with card readers rather than closed gates.', platformSource: faq,
    exitDetails: 'Number, street-emergence positions and station-specific accessible entry points: TBC.', facilities: commonFacilities + ' Toilet: none; NTMC says only K09 has a light-rail station toilet.',
    engineeringHistory: 'DORTS places K05 on the Anyi Road section immediately before the route turns to the elevated Anhe Road section at K06; station-specific construction history: TBC.', engineeringHistorySource: dortsRoute,
    landmarks: 'Anyi Road and Anzhong Road are named in the operator and builder station-position descriptions; Jingwen University of Science and Technology is the current operator name.', landmarksSource: stationList,
  },
  K06: {
    location: '安和路一段與安康路一段路口', structure: 'elevated', structureSource: dortsRoute, openingDate: '10 February 2023',
    platformDetails: 'Elevated; platform form and track count: TBC. NTMC describes the light-rail system as open platforms with card readers rather than closed gates.', platformSource: faq,
    exitDetails: 'Number, street-emergence positions and station-specific accessible entry points: TBC.', facilities: commonFacilities + ' Toilet: none; NTMC says only K09 has a light-rail station toilet.',
    engineeringHistory: 'DORTS records the transition to the elevated Anhe Road section at K06 and describes the route continuing north on Anhe Road; station-specific construction history: TBC.', engineeringHistorySource: dortsRoute,
    landmarks: 'Anhe Road Section 1 and Ankang Road Section 1 are named in the operator and builder station-position descriptions.', landmarksSource: stationList,
  },
  K07: {
    location: '安和路二段與安利街路口', structure: 'elevated', structureSource: dortsRoute, openingDate: '10 February 2023',
    platformDetails: 'Elevated; platform form and track count: TBC. NTMC describes the light-rail system as open platforms with card readers rather than closed gates.', platformSource: faq,
    exitDetails: 'Number, street-emergence positions and station-specific accessible entry points: TBC.', facilities: commonFacilities + ' Toilet: none; NTMC says only K09 has a light-rail station toilet.',
    engineeringHistory: 'DORTS places K07 near the former Taiwan Malt Factory site and records the route crossing National Freeway 3 and the Zhong’an Bridge approach after this station; station-specific construction history: TBC.', engineeringHistorySource: dortsRoute,
    landmarks: 'Anhe Road Section 2, Anli Street and the former Taiwan Malt Factory site are named in the builder’s route description.', landmarksSource: dortsRoute,
  },
  K08: {
    location: '安和路三段與新和街路口', structure: 'elevated', structureSource: dortsRoute, openingDate: '10 February 2023',
    platformDetails: 'Elevated; platform form and track count: TBC. NTMC describes the light-rail system as open platforms with card readers rather than closed gates.', platformSource: faq,
    exitDetails: 'Number, street-emergence positions and station-specific accessible entry points: TBC.', facilities: commonFacilities + ' Toilet: none; NTMC says only K09 has a light-rail station toilet.',
    engineeringHistory: 'DORTS records the route turning east near the Water Resources Agency Xindian Office area after K07 and then continuing toward K09; station-specific construction history: TBC.', engineeringHistorySource: dortsRoute,
    landmarks: 'Anhe Road Section 3, Xinhe Street and the Water Resources Agency Xindian Office area are named in the operator and builder material.', landmarksSource: stationList,
    publicArt: '《曼波安坑》 — 林舜龍; medium: TBC. 《漂浮安坑》 — 富永泰雄; mosaic inlay; year: TBC.', publicArtSource: k08Art,
  },
  K09: {
    location: 'Y8十四張地區、環狀線Y8站旁可轉乘捷運環狀線Y8站', structure: 'elevated', structureSource: dortsRoute, openingDate: '10 February 2023',
    platformDetails: 'Elevated; both side platforms can be used for boarding; track count: TBC.', platformSource: dortsRoute,
    exitDetails: 'Number, street-emergence positions and station-specific accessible entry points: TBC.', facilities: commonFacilities + ' K09 has public male/female toilets, an accessible toilet and a nursing room.',
    interchange: { label: 'Circular Line at Shisizhang; transfer mode: TBC', lineCode: 'Y' }, interchangeSource: transfer,
    engineeringHistory: 'DORTS records the 502 m An-Xin Bridge, a three-span continuous asymmetric cable-stayed bridge with a 130 m pylon crossing a 400 m-wide river reach between Xindian and Ankeng.', engineeringHistorySource: k09Bridge,
    landmarks: 'Shisizhang area and the Circular Line transfer station are named in the operator’s transfer material.', landmarksSource: transfer,
    publicArt: '《螢火蟲回家的路》 — artist: TBC; perforated metal plate with micro wind-powered lights; year: TBC.', publicArtSource: k09Art,
  },
}

const allSources = [
  stationList,
  tdxStations,
  faq,
  accessibility,
  transfer,
  dortsRoute,
  dortsRouteInfo,
  k02Art,
  k08Art,
  k09Art,
  k09Bridge,
  k01Tunnel,
  dortsK02Design,
  dortsK01K02Track,
  dortsK06Turnback,
  dortsK01K05Power,
  dortsAnkengPower,
  dortsAnkengFirstTrain,
  dortsK05Inspection,
  dortsAnkengQualityAward,
  dortsK08FloatingTrack,
  dortsK09Track,
  depot,
  ...Object.values(operatorStations),
]
const sourcesById = Object.fromEntries(allSources.map(item => [item.id, item]))

function uniqueSources(ids: string[]): Source[] {
  return ids.filter((id, index) => ids.indexOf(id) === index).map(id => sourcesById[id]).filter(Boolean)
}

function makeResearch(code: string, data: KData): StationResearch {
  const operatorSource = operatorStations[code]
  const interchange = data.interchange ? { ...data.interchange, source: data.interchangeSource?.id ?? operatorSource.id } : undefined
  const sourceIds = [
    operatorSource.id,
    stationList.id,
    tdxStations.id,
    data.structureSource.id,
    dortsRoute.id,
    data.platformSource.id,
    data.interchangeSource?.id,
    data.engineeringHistorySource.id,
    data.landmarksSource.id,
    accessibility.id,
    faq.id,
    depot.id,
    dortsK02Design.id,
    dortsK01K02Track.id,
    dortsK06Turnback.id,
    dortsK01K05Power.id,
    dortsAnkengPower.id,
    dortsAnkengFirstTrain.id,
    dortsK05Inspection.id,
    dortsAnkengQualityAward.id,
    dortsK08FloatingTrack.id,
    dortsK09Track.id,
    data.publicArtSource?.id,
  ].filter((id): id is string => Boolean(id))
  return {
    sources: uniqueSources(sourceIds),
    identitySource: operatorSource.id,
    mapSource: tdxStations.id,
    structureSource: data.structureSource.id,
    openingSource: dortsRoute.id,
    scheduleSources: [],
    openingDate: data.openingDate,
    interchange,
    platformDetails: data.platformDetails,
    platformSource: data.platformSource.id,
    exitDetails: data.exitDetails,
    exitSource: operatorSource.id,
    facilities: data.facilities,
    facilitiesSource: accessibility.id,
    depot: 'Ankeng Depot; station-level operating roster allocation: TBC.',
    depotSource: depot.id,
    publicArt: data.publicArt ?? tbc,
    publicArtSource: data.publicArtSource?.id,
    naming: 'Current operator name is established; original/construction-era name, dated renames and the announcement that made any change: TBC.',
    namingSource: operatorSource.id,
    engineeringHistory: data.engineeringHistory,
    engineeringHistorySource: data.engineeringHistorySource.id,
    landmarks: data.landmarks,
    landmarksSource: data.landmarksSource.id,
  }
}

const stationProse: Record<string, StationProseSentence[]> = {
  K01: [
    { text: 'DORTS records the Ankeng civil turnkey award on 3 March 2016, the main works start on 6 April 2016, and a line-wide budget of NT$16.632 billion.', source: dortsRoute.id },
    { text: 'The route project record describes the depot at the Antai and Anyi roads, then the first five passenger stations following Anyi Road before the alignment turns onto elevated Anhe Road at K06.', source: dortsRoute.id },
    { text: 'A separate builder engineering record places the three-bore Shuang’an Tunnel and its light-rail track crossover in the section between K01 and Ankeng Depot.', source: k01Tunnel.id },
    { text: 'That tunnel record distinguishes the depot lead from a tunnel between passenger stations, making the underground work part of the operating approach rather than a buried K01–K02 segment.', source: k01Tunnel.id },
    { text: 'In February 2021, DORTS reported track laying at K01 and K02 on what its progress article calls the at-grade section, with depot track work scheduled next.', source: dortsK01K02Track.id },
    { text: 'The same progress record describes the 2.6-hectare depot as a deliberately small facility divided into stabling, maintenance and administration areas.', source: dortsK01K02Track.id },
    { text: 'By the end of 2021, the depot and K01–K05 systems had been energised so trains could begin on-line testing, according to the builder’s January 2022 progress report.', source: dortsK01K05Power.id },
    { text: 'An earlier October 2021 milestone recorded the first train entering the depot, completed at-grade civil and track work, and continuing elevated track and electromechanical work.', source: dortsAnkengFirstTrain.id },
    { text: 'That milestone set out static, dynamic and endurance tests as the next sequence, connecting the physical completion of the K01 approach with the later systems-validation programme.', source: dortsAnkengFirstTrain.id },
    { text: 'The power-system design takes 161 kV from Taipower supply points into the K05 and K09 utility rooms, steps it down to 22.8 kV, and distributes it to the line’s traction substations.', source: dortsAnkengPower.id },
    { text: 'Those substations rectify the traction supply to 750 V direct current for the trains, although the technical article does not assign a separate traction substation to K01 itself.', source: dortsAnkengPower.id },
    { text: 'The builder later identified China Steel as electromechanical turnkey contractor, China Engineering Consultants as project manager, and Sinotech Engineering Consultants as supervision consultant.', source: dortsAnkengQualityAward.id },
    { text: 'The electromechanical project received New Taipei’s Public Construction Golden Quality Award in December 2023, with the award article also noting a 42 percent vehicle-domestication ratio.', source: dortsAnkengQualityAward.id },
    { text: 'DORTS presents the route as a connection for the Anyi and Anhe communities and estimates that the project can shorten relevant trips by roughly 15 to 20 minutes.', source: dortsRoute.id },
  ],
  K02: [
    { text: 'The station-specific design record describes K02 as an island-platform station on an elevated Anyi Road bridge, with a forest-in-the-trees concept and an orange dotted-glass roof.', source: dortsK02Design.id },
    { text: 'That architectural description treats the roof as a light, transparent and bright surface, using the glass pattern as part of the station’s visual identity.', source: dortsK02Design.id },
    { text: 'The route-level project record gives a different description: it places K01–K05 along the Anyi Road section and says the elevated Anhe Road section begins at K06.', source: dortsRoute.id },
    { text: 'The route statement is an alignment-level account, while the design page is a station-specific account, so the two primary descriptions are retained rather than silently reconciled.', source: dortsRoute.id },
    { text: 'A February 2021 construction update adds a third dated description by calling the K01/K02 track-laying area the at-grade section during that stage of work.', source: dortsK01K02Track.id },
    { text: 'That progress wording records what was under construction in 2021 and does not erase the later station-design description or convert the three records into one measurement.', source: dortsK01K02Track.id },
    { text: 'The civil turnkey package was awarded on 3 March 2016, while the main Ankeng works began on 6 April 2016 under a line-wide NT$16.632 billion project record.', source: dortsRoute.id },
    { text: 'By the end of 2021, DORTS says the depot and K01–K05 systems were energised for train-on-line testing, placing K02 inside the first powered testing block.', source: dortsK01K05Power.id },
    { text: 'The builder’s traction-power article places a K02 traction substation in the 22.8 kV distribution network and says its output is rectified to 750 V direct current.', source: dortsAnkengPower.id },
    { text: 'The wider testing programme began after the first train entered the depot in October 2021, when at-grade civil and track works were reported complete and elevated work remained active.', source: dortsAnkengFirstTrain.id },
    { text: 'DORTS says the planned sequence then moved through static, dynamic and endurance tests, rather than treating track completion as the end of commissioning.', source: dortsAnkengFirstTrain.id },
    { text: 'The project’s later quality-award record names China Steel as the electromechanical turnkey contractor, with China Engineering Consultants managing and Sinotech Engineering Consultants supervising.', source: dortsAnkengQualityAward.id },
    { text: 'The same record says the electromechanical project won the Public Construction Golden Quality Award and reports a 42 percent vehicle-domestication ratio.', source: dortsAnkengQualityAward.id },
    { text: 'DORTS frames the line as improved access for the Anyi and Anhe communities, with a projected reduction of about 15 to 20 minutes for relevant journeys.', source: dortsRoute.id },
    { text: 'DORTS describes the K02 artwork as a cluster whose flexible, biological curves suggest an alien organism; its rounded forms and multicolour surfaces also evoke Mambo-like movement and insect flight.', source: k02Art.id },
  ],
  K03: [
    { text: 'DORTS places K03 within the Anyi Road portion of the Ankeng alignment, before the route changes to elevated Anhe Road at K06.', source: dortsRoute.id },
    { text: 'The same project record says the civil turnkey package was awarded on 3 March 2016 and that the main works began on 6 April 2016.', source: dortsRoute.id },
    { text: 'The NT$16.632 billion figure in that record is a line-wide project budget, not a cost assigned to K03 or to any single station.', source: dortsRoute.id },
    { text: 'DORTS reports that the depot and K01–K05 systems were energised by the end of 2021 so trains could enter the on-line testing phase.', source: dortsK01K05Power.id },
    { text: 'Because K03 is in that numbered range, the report establishes inclusion in the powered section without publishing a K03-only energisation date or equipment inventory.', source: dortsK01K05Power.id },
    { text: 'The traction-power design routes 161 kV through the K05 and K09 utility rooms, transforms it to 22.8 kV, and distributes it to several traction substations.', source: dortsAnkengPower.id },
    { text: 'The system then rectifies that supply to 750 V direct current for the light-rail trains, while the article does not identify a dedicated K03 substation.', source: dortsAnkengPower.id },
    { text: 'A first-train milestone recorded the train entering the depot in October 2021 and described the at-grade civil and track works as complete at that point.', source: dortsAnkengFirstTrain.id },
    { text: 'The same milestone says elevated track and electromechanical work continued, followed by planned static, dynamic and endurance testing.', source: dortsAnkengFirstTrain.id },
    { text: 'This separates completion of the civil section from the later validation of vehicles, signalling, power and operating performance.', source: dortsAnkengFirstTrain.id },
    { text: 'The builder’s December 2023 quality-award article identifies China Steel as electromechanical turnkey contractor, China Engineering Consultants as project manager and Sinotech Engineering Consultants as supervisor.', source: dortsAnkengQualityAward.id },
    { text: 'It also records the electromechanical project’s Public Construction Golden Quality Award and a 42 percent vehicle-domestication ratio.', source: dortsAnkengQualityAward.id },
    { text: 'DORTS says the route was intended to improve access through the Anyi and Anhe communities and estimates roughly 15 to 20 minutes of journey-time reduction.', source: dortsRoute.id },
  ],
  K04: [
    { text: 'The route project record places K04 in the Anyi Road section, before the Ankeng alignment turns onto elevated Anhe Road at K06.', source: dortsRoute.id },
    { text: 'DORTS records the civil turnkey award on 3 March 2016 and the start of the main works on 6 April 2016.', source: dortsRoute.id },
    { text: 'Its NT$16.632 billion figure measures the full Ankeng project, so it cannot be read as a K04 construction price.', source: dortsRoute.id },
    { text: 'The builder’s January 2022 progress account says the depot and K01–K05 systems had already been energised by the end of the previous year for train-on-line testing.', source: dortsK01K05Power.id },
    { text: 'That range places K04 in the energised part of the line, but the source does not publish a station-only switching date or a K04 equipment list.', source: dortsK01K05Power.id },
    { text: 'The technical power account starts with 161 kV entering utility rooms at K05 and K09, then describes transformation to 22.8 kV and distribution to traction substations.', source: dortsAnkengPower.id },
    { text: 'The substations convert the supplied power to 750 V direct current for train operation; the article does not say that K04 contains one of those substations.', source: dortsAnkengPower.id },
    { text: 'In October 2021, the first-train report said the vehicle had entered the depot and the at-grade civil and track works were complete.', source: dortsAnkengFirstTrain.id },
    { text: 'It simultaneously reported ongoing elevated track and electromechanical work, followed by static, dynamic and endurance tests.', source: dortsAnkengFirstTrain.id },
    { text: 'The sequence matters because a completed track section and a commissioned passenger station are different project milestones in the builder’s account.', source: dortsAnkengFirstTrain.id },
    { text: 'The later quality record names China Steel as the electromechanical turnkey contractor, China Engineering Consultants as project manager and Sinotech Engineering Consultants as supervision consultant.', source: dortsAnkengQualityAward.id },
    { text: 'DORTS says that electromechanical project received the Public Construction Golden Quality Award and reports a vehicle-domestication ratio of 42 percent.', source: dortsAnkengQualityAward.id },
    { text: 'The route’s stated purpose was better access for the Anyi and Anhe communities, with DORTS estimating about 15 to 20 minutes saved on relevant trips.', source: dortsRoute.id },
  ],
  K05: [
    { text: 'DORTS places K05 on Anyi Road immediately before the alignment turns to the elevated Anhe Road section at K06.', source: dortsRoute.id },
    { text: 'The project record gives a civil turnkey award date of 3 March 2016, a main works start of 6 April 2016 and a line-wide budget of NT$16.632 billion.', source: dortsRoute.id },
    { text: 'The builder’s technical power article gives K05 a specific electrical role by placing the incoming 161 kV supply in its utility room alongside the corresponding K09 room.', source: dortsAnkengPower.id },
    { text: 'Those utility rooms transform the high-voltage supply to 22.8 kV before cables distribute power to the depot and the line’s traction substations.', source: dortsAnkengPower.id },
    { text: 'The traction substations rectify the supply to 750 V direct current for the trains, making K05 part of the documented power-entry architecture rather than only a passenger-stop reference.', source: dortsAnkengPower.id },
    { text: 'A January 2022 progress report says the depot and K01–K05 systems had been energised by the end of 2021 to support train-on-line testing.', source: dortsK01K05Power.id },
    { text: 'The first-train milestone had already recorded the vehicle entering the depot and the at-grade civil and track works as complete in October 2021.', source: dortsAnkengFirstTrain.id },
    { text: 'That milestone still listed elevated track and electromechanical work as ongoing, with static, dynamic and endurance tests to follow.', source: dortsAnkengFirstTrain.id },
    { text: 'During preliminary inspection in December 2022, DORTS staged a train-and-motorcycle collision exercise at the Anyi Road and Anzhong Road intersection near K05.', source: dortsK05Inspection.id },
    { text: 'The exercise report says the scenario produced no injury and that emergency responders stood by, making it a preparedness test rather than a reported crash.', source: dortsK05Inspection.id },
    { text: 'The inspection exercise demonstrates that the project’s verification work included street-interface response procedures, not only hidden systems testing.', source: dortsK05Inspection.id },
    { text: 'The later quality-award article identifies China Steel as electromechanical turnkey contractor, China Engineering Consultants as project manager and Sinotech Engineering Consultants as supervisor.', source: dortsAnkengQualityAward.id },
    { text: 'It records the electromechanical project’s Public Construction Golden Quality Award and a 42 percent vehicle-domestication ratio.', source: dortsAnkengQualityAward.id },
    { text: 'DORTS presents the corridor as a way to improve access for the Anyi and Anhe communities and estimates about 15 to 20 minutes of journey-time reduction.', source: dortsRoute.id },
  ],
  K06: [
    { text: 'DORTS identifies K06 as the point where the Ankeng route leaves the Anyi Road section and begins its elevated run along Anhe Road.', source: dortsRoute.id },
    { text: 'The civil turnkey package was awarded on 3 March 2016, main works began on 6 April 2016, and the published NT$16.632 billion figure covers the line-wide project.', source: dortsRoute.id },
    { text: 'A construction update from August 2021 records K06 with both side and island platforms, rather than a single platform form.', source: dortsK06Turnback.id },
    { text: 'The same update says three turnouts sit before the station and three after it, creating six turnouts around K06.', source: dortsK06Turnback.id },
    { text: 'DORTS explains that arrangement as allowing light-rail vehicles to turn back toward K09, giving the elevated section an operational short-working capability.', source: dortsK06Turnback.id },
    { text: 'The builder’s October 2021 first-train report says the first vehicle had entered the depot while elevated track and electromechanical work remained in progress.', source: dortsAnkengFirstTrain.id },
    { text: 'It describes the at-grade civil and track works as complete and places static, dynamic and endurance testing later in the commissioning sequence.', source: dortsAnkengFirstTrain.id },
    { text: 'The traction-power design includes K06 in the 22.8 kV distribution network fed from the K05 and K09 utility rooms.', source: dortsAnkengPower.id },
    { text: 'That distributed system rectifies the traction supply to 750 V direct current for trains, while the technical article does not assign K06 a separate incoming 161 kV connection.', source: dortsAnkengPower.id },
    { text: 'By the end of 2021, the builder reported the depot and K01–K05 systems energised for train-on-line testing, documenting the earlier powered section before K06’s own elevated work was complete.', source: dortsK01K05Power.id },
    { text: 'The later quality-award record identifies China Steel as electromechanical turnkey contractor, China Engineering Consultants as project manager and Sinotech Engineering Consultants as supervision consultant.', source: dortsAnkengQualityAward.id },
    { text: 'DORTS says the electromechanical project won the Public Construction Golden Quality Award and reports a 42 percent vehicle-domestication ratio.', source: dortsAnkengQualityAward.id },
    { text: 'The route project frames this transition as part of improved access for the Anyi and Anhe communities and estimates about 15 to 20 minutes saved on relevant journeys.', source: dortsRoute.id },
  ],
  K07: [
    { text: 'DORTS places K07 near the former Taiwan Malt Factory site after the route has turned from Anyi Road onto the elevated Anhe Road corridor.', source: dortsRoute.id },
    { text: 'The route description says the alignment crosses National Freeway 3 and the Zhong’an Bridge approach after K07 before reaching the Water Resources Agency’s Xindian Office area near K08.', source: dortsRoute.id },
    { text: 'This makes the K07 section a sequence of elevated roadway, freeway and bridge-approach interfaces rather than an isolated station approach.', source: dortsRoute.id },
    { text: 'The same project page records early works from 7 November 2014 to 11 May 2016, main works from 6 April 2016 and stability testing on 7 November 2022.', source: dortsRoute.id },
    { text: 'DORTS records the civil turnkey award on 3 March 2016 and publishes NT$16.632 billion as the value of the complete Ankeng project, not a K07-only package.', source: dortsRoute.id },
    { text: 'The route’s construction sequence reached a first-train milestone in October 2021, when the vehicle entered the depot and at-grade civil and track works were reported complete.', source: dortsAnkengFirstTrain.id },
    { text: 'That same milestone says elevated track and electromechanical work continued, so the K07-area elevated works were part of a later commissioning stage than the completed surface section.', source: dortsAnkengFirstTrain.id },
    { text: 'The traction-power design names K07 among the substations supplied through the 22.8 kV distribution network after 161 kV enters the K05 and K09 utility rooms.', source: dortsAnkengPower.id },
    { text: 'The named traction substations rectify their supply to 750 V direct current for train operation, documenting the electrical chain that serves the elevated northern section.', source: dortsAnkengPower.id },
    { text: 'The route’s later quality-award record identifies China Steel as electromechanical turnkey contractor, China Engineering Consultants as project manager and Sinotech Engineering Consultants as supervision consultant.', source: dortsAnkengQualityAward.id },
    { text: 'The electromechanical project received the Public Construction Golden Quality Award, and the same article reports a 42 percent vehicle-domestication ratio.', source: dortsAnkengQualityAward.id },
    { text: 'DORTS presents the line as a way to improve access through the Anyi and Anhe communities and estimates roughly 15 to 20 minutes of journey-time reduction for relevant trips.', source: dortsRoute.id },
    { text: 'The route page also describes the project as an environmentally sustainable and accessible light-rail connection, linking the K07 corridor to New Taipei’s stated transport-development objectives.', source: dortsRoute.id },
  ],
  K08: [
    { text: 'DORTS places K08 in the Anhe Road Section 3 Water Resources Agency Xindian Office area, where the route turns east before continuing toward K09.', source: dortsRoute.id },
    { text: 'The same description says the alignment crosses the New Taipei Ring Expressway and Xindian River after that turn before reaching the Shisizhang area.', source: dortsRoute.id },
    { text: 'A full DORTS trackbed article identifies the elevated section from Anhe Road Section 3 to Xinhe Elementary School K08 as having three floating-trackbed locations.', source: dortsK08FloatingTrack.id },
    { text: 'The builder gives the reason for those three locations as the elevated alignment’s proximity to homes and presents the floating trackbed as a vibration-reduction measure.', source: dortsK08FloatingTrack.id },
    { text: 'The K08 trackbed record therefore adds a corridor-specific mitigation decision to the route map: it names both the section endpoint and the number of treatment locations.', source: dortsK08FloatingTrack.id },
    { text: 'The civil turnkey package was awarded on 3 March 2016, while the project page publishes NT$16.632 billion as the line-wide Ankeng value rather than a K08 construction price.', source: dortsRoute.id },
    { text: 'The traction-power article lists K08 among the substations receiving 22.8 kV from the K05 and K09 utility-room distribution chain.', source: dortsAnkengPower.id },
    { text: 'That system converts the distributed supply to 750 V direct current for trains, connecting K08’s elevated track environment to the documented line power architecture.', source: dortsAnkengPower.id },
    { text: 'The first-train milestone records the vehicle entering the depot while elevated track and electromechanical work continued, after at-grade civil and track works had been completed.', source: dortsAnkengFirstTrain.id },
    { text: 'DORTS says static, dynamic and endurance tests followed that construction sequence, so structural completion and operational commissioning are recorded as separate stages.', source: dortsAnkengFirstTrain.id },
    { text: 'The project’s later quality record names China Steel as electromechanical turnkey contractor, China Engineering Consultants as project manager and Sinotech Engineering Consultants as supervision consultant.', source: dortsAnkengQualityAward.id },
    { text: 'It records the Public Construction Golden Quality Award for the electromechanical project and reports a 42 percent vehicle-domestication ratio.', source: dortsAnkengQualityAward.id },
    { text: 'DORTS frames the Ankeng route as improved access for the Anyi and Anhe communities, with a projected reduction of about 15 to 20 minutes for relevant journeys.', source: dortsRoute.id },
    { text: 'The K08 public-art pair uses insect imagery to cast the train as a lively, flying creature, while its ground-level mosaic counterpart adds flower-like colours, Japanese craft texture and a calm spatial layer.', source: k08Art.id },
  ],
  K09: [
    { text: 'DORTS’s route introduction places K09 in the Shisizhang area beside the Circular Line and describes the connection as the northern end of the Ankeng alignment.', source: dortsRoute.id },
    { text: 'That route page labels the adjacent Circular Line station Y8, while DORTS’s separate station-position table labels the same transfer Y7.', source: dortsRouteInfo.id },
    { text: 'These are conflicting primary identifiers from different DORTS records, so both values remain visible rather than being silently reconciled.', source: dortsRouteInfo.id },
    { text: 'A full builder progress page records track laying at K09 and on An-Xin Bridge, including a diamond turnout that was tackled first because its construction difficulty was high.', source: dortsK09Track.id },
    { text: 'A separate full DORTS rail article distinguishes the grooved rail used on the surface section from the I-shaped rail used on the elevated section, making K09’s approach part of a mixed track-engineering sequence.', source: dortsK08FloatingTrack.id },
    { text: 'The earlier An-Xin Bridge record says its asymmetric form avoided the active waterway and strengthened flood-defence safety, which explains why the final station approach required a special crossing structure.', source: k09Bridge.id },
    { text: 'DORTS’s K06 operating-layout article records six turnouts around K06 that allow vehicles to turn back toward K09, tying K09 into the line’s documented short-working arrangement.', source: dortsK06Turnback.id },
    { text: 'The traction-power article places the incoming 161 kV supply in the K09 utility room before transformation to 22.8 kV and distribution to the line’s traction substations.', source: dortsAnkengPower.id },
    { text: 'The substations rectify that supply to 750 V direct current for train operation, while the article records K09’s utility-room role rather than a separate station-only operating account.', source: dortsAnkengPower.id },
    { text: 'The first-train milestone records the vehicle entering the depot while elevated track and electromechanical work continued, followed by static, dynamic and endurance testing.', source: dortsAnkengFirstTrain.id },
    { text: 'The later quality-award record names China Steel as electromechanical turnkey contractor, China Engineering Consultants as project manager and Sinotech Engineering Consultants as supervision consultant.', source: dortsAnkengQualityAward.id },
    { text: 'The electromechanical project won the Public Construction Golden Quality Award, and DORTS reports a 42 percent vehicle-domestication ratio.', source: dortsAnkengQualityAward.id },
    { text: 'The route project presents K09 as the connection into the wider Taipei metropolitan rail network and as part of the access improvement planned for the Anyi and Anhe communities.', source: dortsRoute.id },
    { text: 'The builder says the asymmetric An-Xin Bridge was designed to avoid the active waterway and strengthen flood-defence safety while crossing the river between Xindian and Ankeng.', source: k09Bridge.id },
    { text: 'At K09, DORTS says wind passing through the perforated plate powers tiny lights that imitate fireflies in flight between stations.', source: k09Art.id },
  ],
}

export const ANKENG_OVERLAY: Record<string, StationOverlay> = Object.fromEntries(
  Object.entries(kData).map(([code, data]) => {
    const research = makeResearch(code, data)
    return [code, { structure: data.structure, research, sources: research.sources, location: data.location, locationSource: stationList.id, prose: stationProse[code] ?? [] }]
  }),
) as Record<string, StationOverlay>
