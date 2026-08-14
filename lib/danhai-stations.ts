import type { Source } from './sources.ts'
import type { StationOverlay, Structure } from './station-overlay.ts'
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
  'ntmc-danhai-stations',
  'Danhai LRT station list',
  '淡海輕軌車站',
  ntmcPublisher,
  'https://www.ntmetro.com.tw/basic/?node=10136',
  'The operator’s full station table publishes the V01–V11 and V26–V28 codes, names and station-position descriptions. The table has no postal street address for the 12 TDX address gaps.',
)

const tdxStations = source(
  'tdx-danhai-stations',
  'Taiwan MOTC TDX — Danhai LRT station records',
  'TDX 淡海輕軌車站資料',
  motcPublisher,
  'https://tdx.transportdata.tw/',
  'The committed TDX records publish the station sequence, current names, postal addresses where present, districts, coordinates and interchange codes used by the generated registry.',
)

const operatorUrls: Record<string, string> = {
  V01: 'https://www.ntmetro.com.tw/basic/?mode=detail&node=460',
  V02: 'https://www.ntmetro.com.tw/basic/?mode=detail&node=459',
  V03: 'https://www.ntmetro.com.tw/basic/?mode=detail&node=458',
  V04: 'https://www.ntmetro.com.tw/basic/?mode=detail&node=457',
  V05: 'https://www.ntmetro.com.tw/basic/?mode=detail&node=456',
  V06: 'https://www.ntmetro.com.tw/basic/?mode=detail&node=455',
  V07: 'https://www.ntmetro.com.tw/basic/?mode=detail&node=454',
  V08: 'https://www.ntmetro.com.tw/basic/?mode=detail&node=453',
  V09: 'https://www.ntmetro.com.tw/basic/?mode=detail&node=452',
  V10: 'https://www.ntmetro.com.tw/basic/?mode=detail&node=451',
  V11: 'https://www.ntmetro.com.tw/basic/?mode=detail&node=450',
  V28: 'https://www.ntmetro.com.tw/basic/?mode=detail&node=449',
  V27: 'https://www.ntmetro.com.tw/basic/?mode=detail&node=448',
  V26: 'https://www.ntmetro.com.tw/basic/?mode=detail&node=447',
}

const operatorStations = Object.fromEntries(
  Object.entries(operatorUrls).map(([code, url]) => [
    code,
    source(
      `ntmc-${code.toLowerCase()}-station`,
      `Danhai LRT ${code} station page`,
      `淡海輕軌${code}車站`,
      ntmcPublisher,
      url,
      'The operator’s full station page identifies the station and publishes its official station-information/timetable record; station-specific platform and exit fields remain TBC where the readable page links out to a document rather than stating them in HTML.',
    ),
  ]),
) as Record<string, Source>

const faq = source(
  'ntmc-light-rail-faq',
  'New Taipei Metro light-rail frequently asked questions',
  '常見問題',
  ntmcPublisher,
  'https://www.ntmetro.com.tw/basic/?node=10005',
  'The operator’s full FAQ states that the light rail uses open platforms and card readers rather than closed gates, that V01 and V26 have toilets while the other light-rail stations do not, that lockers are not provided, and that V01 interchanges with Taipei Metro Hongshulin.',
)

const accessibility = source(
  'ntmc-light-rail-accessibility',
  'New Taipei Metro light-rail accessibility services',
  '無障礙服務',
  ntmcPublisher,
  'https://www.ntmetro.com.tw/basic/?node=10041',
  'The operator’s full accessibility page publishes passenger enquiry points, accessible ticket machines, lifts at elevated stations, ramps at at-grade stations, V01/V26 accessible toilets and V01/V26 nursing rooms.',
)

const transfer = source(
  'ntmc-light-rail-transfers',
  'New Taipei Metro light-rail transfer information',
  '請問輕軌系統轉乘其他運輸系統資訊？',
  ntmcPublisher,
  'https://www.ntmetro.com.tw/basic/?mode=detail&node=36',
  'The operator’s full transfer answer states that Danhai LRT V01 and Taipei Metro Hongshulin are co-constructed and can transfer with one another.',
)

const publicArt = source(
  'ntmc-danhai-public-art',
  'Danhai LRT public art',
  '淡海輕軌公共藝術',
  ntmcPublisher,
  'https://www.ntmetro.com.tw/basic/?mode=detail&node=17',
  'The operator’s full public-art page publishes Jimmy Liao’s line-wide Green Mountain work 《閉上眼睛一下下》, its 11-station scope, and its cast-bronze sculpture and painted-glass media. It does not publish a year or station-by-station titles in the readable HTML.',
)

const stamps = source(
  'ntmc-danhai-stamps',
  'Danhai LRT route-stamp locations',
  '車站/路線紀念章戳',
  ntmcPublisher,
  'https://www.ntmetro.com.tw/basic/?node=10133',
  'The operator’s full page identifies V01 as the Green Mountain route-stamp location and V26 as the Blue Sea route-stamp location, and describes the Blue Sea bridge as the Blue Sea Line visual reference.',
)

const greenRoute = source(
  'dorts-danhai-green-route',
  'Green Mountain Line project record',
  '淡海綠山線',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/about/route/kq4VmGpM2BoY',
  'The builder’s full route page publishes the Green Mountain Line’s 7.34 km length, 11 stations, 24 December 2018 opening, construction milestones, line type and project history.',
)

const greenStations = source(
  'dorts-danhai-green-stations',
  'Green Mountain Line station positions',
  '淡海綠山線',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/about/routeInfo/kq4VmGpM2BoY',
  'The builder’s full station table publishes V01–V11 names, engineering station-position descriptions, the V01 transfer note and the V05 Beitouzi annotation.',
)

const blueRoute = source(
  'dorts-danhai-blue1-route',
  'Blue Sea Line Phase 1 project record',
  '淡海藍海線第一期',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/about/route/LXlR27XkdV8v',
  'The builder’s full route page publishes the Blue Sea Line Phase 1 2.21 km length, three-station scope, 15 November 2020 opening, construction milestones and project history.',
)

const blueStations = source(
  'dorts-danhai-blue1-stations',
  'Blue Sea Line Phase 1 station positions',
  '淡海藍海線第一期',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/about/routeInfo/LXlR27XkdV8v',
  'The builder’s full station table publishes V26–V28 names, station-position descriptions and their completed status.',
)

const v03Engineering = source(
  'ntmc-danhai-v03-engineering',
  'Danhai LRT safety monitoring at V03',
  '提升行車及搭乘安全 淡海輕軌推月台軌道全時監控及性別友善空間',
  ntmcPublisher,
  'https://www.ntmetro.com.tw/basic/?mode=detail&node=297',
  'The operator’s full article identifies V03 as an elevated station beside the Huwei Cherry Blossom Avenue and publishes slope-movement and earthquake monitoring at that station.',
)

const stationDesign = source(
  'dorts-danhai-station-design',
  'Danhai LRT shelter design',
  '擋風遮雨就靠它！輕軌車站的防護罩！',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/JnldARRDZY9v',
  'The builder’s full design article publishes the general shelter purpose and the 8 mm + 8 mm laminated tempered-glass windbreak used on the northeast side of Danhai LRT station shelters.',
)

const depot = source(
  'ntmc-danhai-depot',
  'Open Danhai Depot',
  'Open淡海機廠',
  ntmcPublisher,
  'https://www.ntmetro.com.tw/basic/?node=10147',
  'The operator’s depot page identifies the Danhai Depot service area. A station-by-station operating roster is not published in the checked HTML.',
)

const commonFacilities = 'NTMC publishes a passenger enquiry point and accessible ticket machine at light-rail stations; the operator says no lockers are provided on the light-rail system. Station-specific lift/ramp details: TBC.'
const tbc = 'TBC'

type VData = {
  location: string
  structure: Structure
  structureSource: Source
  openingDate: string
  openingSource: Source
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
  publicArt: string
}

const greenArt = '《閉上眼睛一下下》 — 幾米 (Jimmy Liao); line-wide Green Mountain work with cast-bronze sculptures and painted glass; year: TBC; station-specific title: TBC.'

const vData: Record<string, VData> = {
  V01: {
    location: '中正東路二段紅樹林站旁', structure: 'unknown', structureSource: operatorStations.V01, openingDate: '24 December 2018', openingSource: greenRoute,
    platformDetails: 'Platform form and track count: TBC. NTMC describes the light-rail system as open platforms with card readers rather than closed gates.', platformSource: faq,
    exitDetails: 'Number and street-emergence positions of exits: TBC; this is an open light-rail platform rather than a closed heavy-rail concourse.',
    facilities: commonFacilities + ' V01 has a public male/female toilet, an accessible toilet and a nursing room.',
    interchange: { label: 'Taipei Metro Tamsui–Xinyi Line at Hongshulin; transfer mode: TBC', lineCode: 'R' }, interchangeSource: transfer,
    engineeringHistory: 'V01 is the Green Mountain Line terminus and is co-constructed with Taipei Metro Hongshulin; DORTS’s station table records the transfer. The builder’s shelter design uses an 8 mm + 8 mm laminated tempered-glass windbreak on the northeast side of Danhai LRT shelters.', engineeringHistorySource: greenStations,
    landmarks: 'Taipei Metro Hongshulin Station is named as the co-constructed transfer; the operator also identifies V01 as the Green Mountain route-stamp location.', landmarksSource: transfer,
    publicArt: greenArt,
  },
  V02: {
    location: '淡金路上與淡金路77巷交叉路口北側', structure: 'unknown', structureSource: operatorStations.V02, openingDate: '24 December 2018', openingSource: greenRoute,
    platformDetails: 'Platform form and track count: TBC. NTMC describes the light-rail system as open platforms with card readers rather than closed gates.', platformSource: faq,
    exitDetails: 'Number, street-emergence positions and station-specific accessible entry points: TBC.',
    facilities: commonFacilities + ' Toilet: none; NTMC says only V01 and V26 have light-rail station toilets.',
    engineeringHistory: 'The Green Mountain Line’s station shelters were designed as wind-protected waiting spaces; station-specific construction history: TBC.', engineeringHistorySource: stationDesign,
    landmarks: '淡金路 and 淡金路77巷 are named in the operator and builder station-position descriptions.', landmarksSource: stationList,
    publicArt: greenArt,
  },
  V03: {
    location: '淡金路上鄰近國泰橋', structure: 'elevated', structureSource: v03Engineering, openingDate: '24 December 2018', openingSource: greenRoute,
    platformDetails: 'Elevated station; platform form and track count: TBC.', platformSource: v03Engineering,
    exitDetails: 'Number, street-emergence positions and station-specific accessible entry points: TBC.',
    facilities: commonFacilities + ' Toilet: none; NTMC says only V01 and V26 have light-rail station toilets. The operator publishes an accessible lift for elevated stations.',
    engineeringHistory: 'NTMC identifies V03 as an elevated station beside Huwei Cherry Blossom Avenue and publishes slope-movement and earthquake monitoring systems there. The operator’s station list also records a pedestrian-access warning near the Danjin Road–Zhongai Street intersection.', engineeringHistorySource: v03Engineering,
    landmarks: '國泰橋 and the Huwei Cherry Blossom Avenue are named in the operator’s material.', landmarksSource: v03Engineering,
    publicArt: greenArt,
  },
  V04: {
    location: '淡金路上與水源街二段交叉路口北側', structure: 'unknown', structureSource: operatorStations.V04, openingDate: '24 December 2018', openingSource: greenRoute,
    platformDetails: 'Platform form and track count: TBC. NTMC describes the light-rail system as open platforms with card readers rather than closed gates.', platformSource: faq,
    exitDetails: 'Number, street-emergence positions and station-specific accessible entry points: TBC.',
    facilities: commonFacilities + ' Toilet: none; NTMC says only V01 and V26 have light-rail station toilets.',
    engineeringHistory: 'The Green Mountain Line’s station shelters were designed as wind-protected waiting spaces; station-specific construction history: TBC.', engineeringHistorySource: stationDesign,
    landmarks: '淡金路 and 水源街二段 are named in the operator and builder station-position descriptions; Tamkang University is the station’s official name.', landmarksSource: stationList,
    publicArt: greenArt,
  },
  V05: {
    location: '淡金路上與北新路交叉路口北側', structure: 'unknown', structureSource: operatorStations.V05, openingDate: '24 December 2018', openingSource: greenRoute,
    platformDetails: 'Platform form and track count: TBC. NTMC describes the light-rail system as open platforms with card readers rather than closed gates.', platformSource: faq,
    exitDetails: 'Number, street-emergence positions and station-specific accessible entry points: TBC.',
    facilities: commonFacilities + ' Toilet: none; NTMC says only V01 and V26 have light-rail station toilets.',
    engineeringHistory: 'The DORTS station table adds the annotation 「加註北投子」 to V05; it does not describe this as a rename. The Green Mountain Line’s station shelters were designed as wind-protected waiting spaces.', engineeringHistorySource: greenStations,
    landmarks: '淡金路 and 北新路 are named in the operator and builder station-position descriptions; the DORTS table also annotates 北投子.', landmarksSource: greenStations,
    publicArt: greenArt,
  },
  V06: {
    location: '淡金路上與新市一路三段交叉路口北側', structure: 'unknown', structureSource: operatorStations.V06, openingDate: '24 December 2018', openingSource: greenRoute,
    platformDetails: 'Platform form and track count: TBC. NTMC describes the light-rail system as open platforms with card readers rather than closed gates.', platformSource: faq,
    exitDetails: 'Number, street-emergence positions and station-specific accessible entry points: TBC.',
    facilities: commonFacilities + ' Toilet: none; NTMC says only V01 and V26 have light-rail station toilets.',
    engineeringHistory: 'The Green Mountain Line’s station shelters were designed as wind-protected waiting spaces; station-specific construction history: TBC.', engineeringHistorySource: stationDesign,
    landmarks: '淡金路 and 新市一路三段 are named in the operator and builder station-position descriptions.', landmarksSource: stationList,
    publicArt: greenArt,
  },
  V07: {
    location: '濱海路一段上與中山北路二段交叉路口東側', structure: 'unknown', structureSource: operatorStations.V07, openingDate: '24 December 2018', openingSource: greenRoute,
    platformDetails: 'Platform form and track count: TBC. NTMC describes the light-rail system as open platforms with card readers rather than closed gates.', platformSource: faq,
    exitDetails: 'Number, street-emergence positions and station-specific accessible entry points: TBC.',
    facilities: commonFacilities + ' Toilet: none; NTMC says only V01 and V26 have light-rail station toilets.',
    engineeringHistory: 'The Green Mountain Line’s station shelters were designed as wind-protected waiting spaces; station-specific construction history: TBC.', engineeringHistorySource: stationDesign,
    landmarks: '淡水 District Office is the station’s official name; 濱海路一段 and 中山北路二段 are named in the operator and builder descriptions.', landmarksSource: stationList,
    publicArt: greenArt,
  },
  V08: {
    location: '濱海路二段上與義山路交叉路口西側', structure: 'unknown', structureSource: operatorStations.V08, openingDate: '24 December 2018', openingSource: greenRoute,
    platformDetails: 'Platform form and track count: TBC. NTMC describes the light-rail system as open platforms with card readers rather than closed gates.', platformSource: faq,
    exitDetails: 'Number, street-emergence positions and station-specific accessible entry points: TBC.',
    facilities: commonFacilities + ' Toilet: none; NTMC says only V01 and V26 have light-rail station toilets.',
    engineeringHistory: 'The Green Mountain Line’s station shelters were designed as wind-protected waiting spaces; station-specific construction history: TBC.', engineeringHistorySource: stationDesign,
    landmarks: '濱海路二段 and 義山路 are named in the operator and builder station-position descriptions.', landmarksSource: stationList,
    publicArt: greenArt,
  },
  V09: {
    location: '濱海路二段上與沙崙路交叉路口東側', structure: 'unknown', structureSource: operatorStations.V09, openingDate: '24 December 2018', openingSource: greenRoute,
    platformDetails: 'Platform form and track count: TBC. NTMC describes the light-rail system as open platforms with card readers rather than closed gates.', platformSource: faq,
    exitDetails: 'Number, street-emergence positions and station-specific accessible entry points: TBC.',
    facilities: commonFacilities + ' Toilet: none; NTMC says only V01 and V26 have light-rail station toilets.',
    engineeringHistory: 'The Green Mountain Line’s station shelters were designed as wind-protected waiting spaces; station-specific construction history: TBC.', engineeringHistorySource: stationDesign,
    landmarks: '濱海路二段 and 沙崙路 are named in the operator and builder station-position descriptions.', landmarksSource: stationList,
    publicArt: greenArt,
  },
  V10: {
    location: '沙崙路上與新市三路二段交叉路口南側', structure: 'unknown', structureSource: operatorStations.V10, openingDate: '24 December 2018', openingSource: greenRoute,
    platformDetails: 'Platform form and track count: TBC. NTMC describes the light-rail system as open platforms with card readers rather than closed gates.', platformSource: faq,
    exitDetails: 'Number, street-emergence positions and station-specific accessible entry points: TBC.',
    facilities: commonFacilities + ' Toilet: none; NTMC says only V01 and V26 have light-rail station toilets.',
    engineeringHistory: 'The Green Mountain Line’s station shelters were designed as wind-protected waiting spaces; station-specific construction history: TBC.', engineeringHistorySource: stationDesign,
    landmarks: '淡海新市鎮 is the station’s official name; 沙崙路 and 新市三路二段 are named in the operator and builder descriptions.', landmarksSource: stationList,
    publicArt: greenArt,
  },
  V11: {
    location: '沙崙路上與新市六路交叉路口南側', structure: 'unknown', structureSource: operatorStations.V11, openingDate: '24 December 2018', openingSource: greenRoute,
    platformDetails: 'Platform form and track count: TBC. NTMC describes the light-rail system as open platforms with card readers rather than closed gates.', platformSource: faq,
    exitDetails: 'Number, street-emergence positions and station-specific accessible entry points: TBC.',
    facilities: commonFacilities + ' Toilet: none; NTMC says only V01 and V26 have light-rail station toilets.',
    engineeringHistory: 'The Green Mountain Line’s station shelters were designed as wind-protected waiting spaces; station-specific construction history: TBC.', engineeringHistorySource: stationDesign,
    landmarks: '崁頂 is the Green Mountain terminus; 沙崙路 and 新市六路 are named in the operator and builder descriptions.', landmarksSource: stationList,
    publicArt: greenArt,
  },
  V26: {
    location: '中正路二段51巷', structure: 'unknown', structureSource: operatorStations.V26, openingDate: '15 November 2020', openingSource: blueRoute,
    platformDetails: 'Platform form and track count: TBC. NTMC describes the light-rail system as open platforms with card readers rather than closed gates.', platformSource: faq,
    exitDetails: 'Number, street-emergence positions and station-specific accessible entry points: TBC.',
    facilities: commonFacilities + ' V26 has a public male/female toilet, an accessible toilet and a nursing room.',
    engineeringHistory: 'V26 is one of the three completed Blue Sea Line Phase 1 stations. The operator identifies it as the Blue Sea route-stamp location; station-specific construction history: TBC.', engineeringHistorySource: blueRoute,
    landmarks: 'Tamsui Fisherman’s Wharf is the station’s official name; the operator identifies V26 as the Blue Sea route-stamp location.', landmarksSource: stamps,
    publicArt: 'TBC',
  },
  V27: {
    location: '淡海路上於觀海路交叉路口東側', structure: 'unknown', structureSource: operatorStations.V27, openingDate: '15 November 2020', openingSource: blueRoute,
    platformDetails: 'Platform form and track count: TBC. NTMC describes the light-rail system as open platforms with card readers rather than closed gates.', platformSource: faq,
    exitDetails: 'Number, street-emergence positions and station-specific accessible entry points: TBC.',
    facilities: commonFacilities + ' Toilet: none; NTMC says only V01 and V26 have light-rail station toilets.',
    engineeringHistory: 'V27 is one of the three completed Blue Sea Line Phase 1 stations; station-specific construction history: TBC.', engineeringHistorySource: blueRoute,
    landmarks: '觀海路 and 淡海路 are named in the operator and builder station-position descriptions.', landmarksSource: stationList,
    publicArt: 'TBC',
  },
  V28: {
    location: '濱海路三段與新民街一段交叉路口東側', structure: 'unknown', structureSource: operatorStations.V28, openingDate: '15 November 2020', openingSource: blueRoute,
    platformDetails: 'Platform form and track count: TBC. NTMC describes the light-rail system as open platforms with card readers rather than closed gates.', platformSource: faq,
    exitDetails: 'Number, street-emergence positions and station-specific accessible entry points: TBC.',
    facilities: commonFacilities + ' Toilet: none; NTMC says only V01 and V26 have light-rail station toilets.',
    engineeringHistory: 'V28 is one of the three completed Blue Sea Line Phase 1 stations; station-specific construction history: TBC.', engineeringHistorySource: blueRoute,
    landmarks: 'Taipei University of Marine Technology is the station’s official name; 濱海路三段 and 新民街一段 are named in the operator and builder descriptions.', landmarksSource: stationList,
    publicArt: 'TBC',
  },
}

const allSources = [stationList, tdxStations, faq, accessibility, transfer, publicArt, stamps, greenRoute, greenStations, blueRoute, blueStations, v03Engineering, stationDesign, depot, ...Object.values(operatorStations)]
const sourcesById = Object.fromEntries(allSources.map(item => [item.id, item]))

function uniqueSources(ids: string[]): Source[] {
  return ids.filter((id, index) => ids.indexOf(id) === index).map(id => sourcesById[id]).filter(Boolean)
}

function makeResearch(code: string, data: VData): StationResearch {
  const operatorSource = operatorStations[code]
  const interchange = data.interchange ? { ...data.interchange, source: data.interchangeSource?.id ?? operatorSource.id } : undefined
  const sourceIds = [
    operatorSource.id,
    stationList.id,
    tdxStations.id,
    data.structureSource.id,
    data.openingSource.id,
    data.platformSource.id,
    data.interchangeSource?.id,
    data.engineeringHistorySource.id,
    data.landmarksSource.id,
    accessibility.id,
    faq.id,
    depot.id,
    publicArt.id,
  ].filter((id): id is string => Boolean(id))
  return {
    sources: uniqueSources(sourceIds),
    identitySource: operatorSource.id,
    mapSource: tdxStations.id,
    structureSource: data.structureSource.id,
    openingSource: data.openingSource.id,
    scheduleSources: [],
    openingDate: data.openingDate,
    interchange,
    platformDetails: data.platformDetails,
    platformSource: data.platformSource.id,
    exitDetails: data.exitDetails,
    exitSource: operatorSource.id,
    facilities: data.facilities,
    facilitiesSource: accessibility.id,
    depot: 'Danhai Depot; station-level operating roster allocation: TBC.',
    depotSource: depot.id,
    publicArt: data.publicArt,
    publicArtSource: publicArt.id,
    naming: 'TBC',
    namingSource: operatorSource.id,
    engineeringHistory: data.engineeringHistory,
    engineeringHistorySource: data.engineeringHistorySource.id,
    landmarks: data.landmarks,
    landmarksSource: data.landmarksSource.id,
  }
}

export const DANHAI_OVERLAY: Record<string, StationOverlay> = Object.fromEntries(
  Object.entries(vData).map(([code, data]) => {
    const research = makeResearch(code, data)
    return [code, { structure: data.structure, research, sources: research.sources, location: data.location, locationSource: stationList.id }]
  }),
) as Record<string, StationOverlay>
