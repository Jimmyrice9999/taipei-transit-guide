import type { Source } from './sources.ts'
import type { StationOverlay, StationProseSentence, Structure } from './station-overlay.ts'
import type { StationResearch } from './station-research.ts'

const accessed = '2026-08-14'
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
): Source {
  return {
    id,
    title,
    titleOriginal,
    publisher,
    url,
    accessed,
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
  K02: [
    { text: 'DORTS describes the K02 artwork as a cluster whose flexible, biological curves suggest an alien organism; its rounded forms and multicolour surfaces also evoke Mambo-like movement and insect flight.', source: k02Art.id },
  ],
}

export const ANKENG_OVERLAY: Record<string, StationOverlay> = Object.fromEntries(
  Object.entries(kData).map(([code, data]) => {
    const research = makeResearch(code, data)
    return [code, { structure: data.structure, research, sources: research.sources, location: data.location, locationSource: stationList.id, prose: stationProse[code] ?? [] }]
  }),
) as Record<string, StationOverlay>
