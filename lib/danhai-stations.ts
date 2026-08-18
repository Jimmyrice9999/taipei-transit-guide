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

const ntpcTender = source(
  'ntpc-danhai-phase1-award',
  'Danhai LRT Phase 1 turnkey contract award',
  '「淡海輕軌運輸系統計畫第一期統包工程」決標',
  'New Taipei City Government (新北市政府交通局)',
  'https://www.ntpc.gov.tw/ch/home.jsp?dataserno=201411110022&id=28&mcustomize=news_view.jsp&parentpath=0%2C6%2C27',
  'The government’s full award notice names China Steel Corporation and Union Steel Construction Corporation as the winning joint-bid team, gives the NT$11,512,800,000 award amount, and defines the project as Green Mountain G01–G08 plus Blue Sea B06–B08, 9.9 km, 14 stations and one depot.',
)

const ntpcContract = source(
  'ntpc-danhai-phase1-contract',
  'Danhai LRT Phase 1 turnkey contract signing',
  '國車國造 輕軌技術根留台灣 淡海輕軌統包工程正式簽約',
  'New Taipei City Government (新北市政府交通局)',
  'https://www.ntpc.gov.tw/ch/home.jsp?dataserno=23fcb6ad2ee57514e4de617d90d596a4&id=e8ca970cde5c00e1',
  'The government’s full signing notice records the 5 December 2014 contract signing, repeats the corridor scope and records the project’s domestic vehicle-build and maintenance rationale. It does not allocate a contract value to an individual station.',
)

const dortsRouteRights = source(
  'dorts-danhai-rights-of-way',
  'Danhai LRT right-of-way and alignment explanation',
  '因地制宜使用各種路權，輕軌服務更多地區',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/O6Jmaq0gmqya?page=416',
  'The builder’s full technical article explains the A/B/C right-of-way types and says the first-phase line balanced cost, engineering difficulty, land acquisition and landscape impact by using seven elevated and seven at-grade stations; it places the Green Mountain route on an elevated A-type section through V07 before changing to a B-type at-grade section.',
)

const dortsHongshulinGrade = source(
  'dorts-danhai-hongshulin-grade',
  'Danhai LRT elevation and grade explanation',
  '眼力大考驗！飛機上也看得見淡海輕軌！',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/r6421qqK29nR?page=379',
  'The builder’s full technical article explains that Hongshulin starts around 10 m elevation while the Danhai New Town is around 35–40 m, so the Hongshulin station is elevated; the Hongshulin-to-V07 elevated section reaches a maximum 6.16% grade before the route becomes at-grade.',
)

const dortsHongshulinSlope = source(
  'dorts-danhai-hongshulin-slope-test',
  'Danhai LRT grade and VR testing',
  '克服爬坡向上行！淡海輕軌的爬坡能力與VR科技！',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/xVR2eEEv2J36?page=401',
  'The builder’s full technical article identifies the Hongshulin–Ganzhenlin section as the steepest part of the Green Mountain route and describes repeated grade tests, parameter comparison and VR review of station circulation and equipment before opening.',
)

const dortsHongshulinTransfer = source(
  'dorts-danhai-hongshulin-transfer',
  'Hongshulin MRT–light-rail transfer link',
  '捷運轉乘淡海輕軌只需1分鐘！',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/apVdMjN9ZKRw?page=369',
  'The builder’s full milestone article records the former street transfer, the new link between Taipei Metro and light rail, the April opening of the Taipei Metro platform escalators, and the stated reduction in transfer time from five minutes to one minute.',
)

const dortsV05V06Progress = source(
  'dorts-danhai-v05-v06-progress',
  'Danhai LRT V05 and V06 construction progress',
  '輕軌進度來報告！今天要介紹的是？',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/DJPZEaa0ZKx3?page=382',
  'The builder’s full September 2018 progress article describes V05 with the structure largely complete and finishing/mechanical work continuing, and identifies V06 as the sixth Green Mountain station with structure largely complete and ceiling, wall, floor and mechanical work continuing.',
)

const dortsFinalGreenStations = source(
  'dorts-danhai-final-stations',
  'Danhai LRT final Green Mountain stations progress',
  '綠山線的最後三站！淡海輕軌工程報告！',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/3LXZQr4KmNgE?page=393',
  'The builder’s full October 2018 progress article records the last three Green Mountain stations’ structural and fit-out progress and describes the route’s station sequence and testing context; it is used here for corridor completion context, not as a V01–V06 station contract record.',
)

const dortsQuality = source(
  'dorts-danhai-quality-control',
  'Danhai LRT construction quality-control process',
  '查驗再查驗！確保工程品質的最佳防線！',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/W0OdPPx6dnbJ',
  'The builder’s full project article describes plan review, incoming-material sampling, contractor self-inspection, supervision hold points and owner/project-management spot checks, illustrated with precast beam work from the Phase 1 turnkey team.',
)

const dortsV07V08Progress = source(
  'dorts-danhai-v07-v08-progress',
  'Danhai LRT V07 and V08 construction progress',
  '白色站體越看越好看！淡海輕軌施工報告！',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/bxkZD113mJEw?page=356',
  'The builder’s full September 2018 progress article identifies V07 as the seventh Green Mountain station entering Danhai New Town and says V07 paving was in progress; it identifies V08 as the beginning of the at-grade section and says its structure was largely complete.',
)

const dortsV09V11Progress = source(
  'dorts-danhai-v09-v11-progress',
  'Danhai LRT V09–V11 construction progress',
  '綠山線的最後三站！淡海輕軌工程報告！',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/3LXZQr4KmNgE?page=393',
  'The builder’s full October 2018 progress article describes V09 as structurally and architecturally largely complete with remaining mechanical work, V10 as a test-train holding location with mechanical work continuing, and V11 as the current terminus leading toward the depot.',
)

const dortsV11Structure = source(
  'dorts-danhai-v11-structure',
  'Danhai LRT V11 construction structure record',
  '底下是有變形金剛嗎？崁頂站施工現況！',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/zKjmRqDrZ41B?page=403',
  'The builder’s full October 2017 progress article records V11’s island-platform waiting station, 55 m by 15.15 m dimensions, approximately 6 m height, pedestrian crossing and accessible ramp, and the planned roof, windscreen, paving and art fit-out.',
)

const dortsV07Inspection = source(
  'dorts-danhai-v07-inspection',
  'Danhai LRT Green Mountain inspection and emergency exercise',
  '淡海輕軌履勘完成！年底通車營運就在眼前！',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/nalZ4YqOmzeo?page=49&route%5B0%5D=226',
  'The builder’s full December 2018 inspection article records Ministry of Transportation inspection of civil, electrical/mechanical and operating matters, including a high-elevated-station fire evacuation exercise at V07 and a substation power-loss exercise.',
)

const dortsBlueV26Progress = source(
  'dorts-danhai-v26-progress',
  'Danhai LRT Blue Sea Phase 1 construction progress',
  '跨越公司田溪！淡海輕軌要來吊裝鋼拱橋啦！',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/5v7m9YYBmB8a?page=400',
  'The builder’s full July 2018 progress article says V26 work included cable conduits and station ancillary facilities, while nearby works included the Company Field Creek steel-arch bridge, pier caps, approach fill and conduit work toward V27.',
)

const dortsBlueV26Inspection = source(
  'dorts-danhai-v26-inspection',
  'Danhai LRT Blue Sea Phase 1 preliminary inspection',
  '淡海輕軌第一期藍海線完成初勘囉！',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/nalZ4YaEmzeo?page=274',
  'The builder’s full September 2020 inspection article identifies V26 as the site of a fire scenario exercise covering platform and train evacuation, a train turnback to V27 and bus bridging, and records the line’s preliminary-inspection stage before opening.',
)

const dortsLightRailQA = source(
  'dorts-danhai-light-rail-qa',
  'Danhai LRT planning and open-platform explanation',
  '淡海輕軌大哉問！Q&A大解答！（下）',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/documentary/articleInfo/pW0dxyj4Z3Ex?page=374',
  'The builder’s full technical Q&A explains the Green Mountain dedicated right of way and surface priority, identifies V26 as a potential land-development location to be considered with the Danjiang Bridge and Bali extension, and explains the open-platform approach as a response to limited station land and maintenance cost.',
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

const allSources = [stationList, tdxStations, faq, accessibility, transfer, publicArt, stamps, greenRoute, greenStations, blueRoute, blueStations, v03Engineering, stationDesign, depot, ntpcTender, ntpcContract, dortsRouteRights, dortsHongshulinGrade, dortsHongshulinSlope, dortsHongshulinTransfer, dortsV05V06Progress, dortsFinalGreenStations, dortsQuality, dortsV07V08Progress, dortsV09V11Progress, dortsV11Structure, dortsV07Inspection, dortsBlueV26Progress, dortsBlueV26Inspection, dortsLightRailQA, ...Object.values(operatorStations)]
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
    ntpcTender.id,
    ntpcContract.id,
    dortsRouteRights.id,
    dortsHongshulinGrade.id,
    dortsHongshulinSlope.id,
    dortsHongshulinTransfer.id,
    dortsV05V06Progress.id,
    dortsQuality.id,
    dortsV07V08Progress.id,
    dortsV09V11Progress.id,
    dortsV11Structure.id,
    dortsV07Inspection.id,
    dortsBlueV26Progress.id,
    dortsBlueV26Inspection.id,
    dortsLightRailQA.id,
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

const stationProse: Record<string, StationProseSentence[]> = {
  V01: [
    { text: 'The Phase 1 turnkey award was a corridor contract rather than a V01-only package: the published scope covered the entire Green Mountain section, the B06–B08 Blue Sea section, fourteen stations and one depot.', source: ntpcTender.id },
    { text: 'The signed contract records the winning China Steel and Union Steel Construction joint team and frames the project as a domestic light-rail build intended to support the Danhai New Town’s transport and urban development.', source: ntpcContract.id },
    { text: 'DORTS explains V01’s elevated starting arrangement as a response to the line’s climb from roughly 10 metres at Hongshulin toward the 35–40-metre Danhai New Town, with the route rising before it reaches the later at-grade section.', source: dortsHongshulinGrade.id },
    { text: 'The same technical record gives the Hongshulin-to-V07 elevated section a maximum 6.16% grade, so the opening station is part of the alignment’s initial height-gaining operation rather than a level departure.', source: dortsHongshulinGrade.id },
    { text: 'A separate DORTS testing account identifies the V01–V02 segment as the Green Mountain route’s steepest climb and describes repeated grade tests in which design parameters were compared with measured performance.', source: dortsHongshulinSlope.id },
    { text: 'The testing account also says that VR review was used to inspect the finished station circulation, including escalators, before the system opened, linking the route’s difficult grade work to passenger movement through the station environment.', source: dortsHongshulinSlope.id },
    { text: 'V01’s transfer history has a distinct construction milestone: DORTS records the former street transfer, then the platform escalators and connecting passage that reduced the stated Taipei Metro–light-rail transfer time from five minutes to one.', source: dortsHongshulinTransfer.id },
    { text: 'The project’s quality article describes five control layers—plan review, incoming-material sampling, contractor self-checks, supervision hold points and owner or project-management spot checks—rather than a single final inspection.', source: dortsQuality.id },
  ],
  V02: [
    { text: 'V02 sits inside the first-phase turnkey corridor awarded to China Steel and Union Steel Construction, a package whose published scope combined the Green Mountain route with the B06–B08 Blue Sea section, fourteen stations and one depot.', source: ntpcTender.id },
    { text: 'The award notice set a target-year daily service figure of 68,500 passenger trips for the first-phase project, a planning measure for the corridor rather than a V02 station count or current ridership figure.', source: ntpcTender.id },
    { text: 'DORTS places the route’s main climb between the low Hongshulin start and Danhai New Town, explaining why the opening elevated section was selected before the line changes to at-grade running farther north.', source: dortsHongshulinGrade.id },
    { text: 'Its grade article specifically identifies the Hongshulin–Ganzhenlin section as the steepest part of Green Mountain, making V02 the station at the far end of the route segment singled out for the most demanding ascent.', source: dortsHongshulinSlope.id },
    { text: 'The same account describes a test cycle in which maximum-grade and minimum-curve runs were repeated, then checked against the design parameters so the vehicle could be adjusted before service.', source: dortsHongshulinSlope.id },
    { text: 'The right-of-way explanation says the first-phase design balanced construction cost, engineering difficulty, land acquisition and landscape impact, using a mixture of elevated and at-grade sections instead of applying one form everywhere.', source: dortsRouteRights.id },
    { text: 'For the project as a whole, the builder describes the elevated Green Mountain section as A-type exclusive right of way and the later surface section as B-type separated right of way, which places V02 within the protected elevated design logic.', source: dortsRouteRights.id },
    { text: 'The project quality record describes contractor self-inspection, supervision hold points and project-management sampling for work such as precast beams, providing the documented construction-control context for a station whose individual package account is not published.', source: dortsQuality.id },
  ],
  V03: [
    { text: 'The Phase 1 award defines a single turnkey program spanning Green Mountain G01–G08 and Blue Sea B06–B08, so the published NT$11,512,800,000 award value belongs to that combined corridor and cannot be reassigned to V03 alone.', source: ntpcTender.id },
    { text: 'The contract-signing notice identifies China Steel and Union Steel Construction as the joint team and presents the domestic vehicle and systems build as part of the project’s intended maintenance and operating strategy.', source: ntpcContract.id },
    { text: 'The builder’s V03 engineering article identifies the station as an elevated stop beside Huwei Cherry Blossom Avenue and records slope-movement and earthquake monitoring systems at that location.', source: v03Engineering.id },
    { text: 'That station-specific safety record is important in context because DORTS says the route must climb from the roughly 10-metre Hongshulin area toward Danhai New Town at about 35–40 metres before the alignment reaches its surface section.', source: dortsHongshulinGrade.id },
    { text: 'DORTS gives the Hongshulin-to-V07 elevated section a maximum 6.16% grade, making the elevated station sequence a deliberate response to the corridor’s changing ground levels rather than a purely architectural choice.', source: dortsHongshulinGrade.id },
    { text: 'The builder’s testing account says the Hongshulin–Ganzhenlin climb is the route’s steepest and describes repeated braking and grade tests, parameter comparisons and vehicle adjustment before opening.', source: dortsHongshulinSlope.id },
    { text: 'DORTS also reports that VR was used to review station circulation from escalators through the station body, ticket machine and card-reader interface, connecting the construction model to the passenger path through V03 and its neighbouring stations.', source: dortsHongshulinSlope.id },
    { text: 'The project’s published quality method adds plan review, material sampling, contractor self-checks, supervision hold points and owner spot checks, but the checked primary pages do not identify a V03-only contractor or station-level final account.', source: dortsQuality.id },
  ],
  V04: [
    { text: 'V04 was built within the first-phase turnkey contract whose award notice covers Green Mountain G01–G08, Blue Sea B06–B08, fourteen stations and one depot; that corridor scope is the published contract boundary, not a V04-specific value.', source: ntpcTender.id },
    { text: 'The contract-signing notice records China Steel and Union Steel Construction as the winning joint team and describes the project as a domestic light-rail build intended to improve access to the Danhai New Town and support its development.', source: ntpcContract.id },
    { text: 'DORTS explains that the line’s elevated beginning is driven by the difference between the low Hongshulin area and the higher Danhai New Town, with the route changing from elevated to at-grade after the elevated station section.', source: dortsHongshulinGrade.id },
    { text: 'Its right-of-way article says the first-phase design used seven elevated and seven at-grade stations after weighing cost, engineering difficulty, land acquisition and landscape impact, so V04 belongs to a documented mixed-form corridor strategy.', source: dortsRouteRights.id },
    { text: 'The same article describes the elevated portion through V07 as A-type exclusive right of way, while the later surface portion is B-type separated right of way; V04 therefore sits in the project’s grade-separated operating section.', source: dortsRouteRights.id },
    { text: 'DORTS gives the elevated section a maximum 6.16% grade between the Hongshulin start and the V07 area, which is the engineering condition the Green Mountain station sequence was designed to negotiate.', source: dortsHongshulinGrade.id },
    { text: 'The builder’s testing record says the route team tested maximum grades and minimum curves, compared actual results with the design and adjusted vehicles before passenger service, rather than treating opening as the end of technical validation.', source: dortsHongshulinSlope.id },
    { text: 'The published quality process requires plan review, incoming-material tests, contractor self-checks, supervision hold points and owner or project-management spot checks; no checked primary source assigns a separate V04 contract or final cost.', source: dortsQuality.id },
  ],
  V05: [
    { text: 'DORTS’s September 2018 progress report says V05’s station structure was largely complete and that crews were continuing platform-entry paving, tiles, handrails, granite and mechanical work during the final construction phase.', source: dortsV05V06Progress.id },
    { text: 'The same report places V05 at the Danjin Road–Beixin Road intersection, while the project’s technical records describe this part of Green Mountain as the elevated section that precedes the later surface alignment.', source: stationList.id },
    { text: 'V05 belonged to the corridor-wide Phase 1 turnkey award to China Steel and Union Steel Construction, which combined Green Mountain G01–G08 with Blue Sea B06–B08 rather than publishing a station-by-station contract allocation.', source: ntpcTender.id },
    { text: 'The award notice gives a target-year daily service figure of 68,500 passenger trips for the whole first-phase project; it is not a V05 boarding forecast and should not be read as current station demand.', source: ntpcTender.id },
    { text: 'DORTS explains that the line used elevated and surface rights of way after balancing cost, construction difficulty, land acquisition and landscape impact, and records seven stations in each form across the first phase.', source: dortsRouteRights.id },
    { text: 'The builder’s grade article says the elevated section rises from the low Hongshulin area toward Danhai New Town and reaches its maximum 6.16% grade before the route changes to surface running.', source: dortsHongshulinGrade.id },
    { text: 'The project quality account describes five inspection layers, including incoming-material sampling and supervision hold points, and illustrates the method with the precast-beam work used by the Phase 1 turnkey construction team.', source: dortsQuality.id },
    { text: 'The checked primary material does not publish a V05-only contract price, contractor split or station-specific public-art procurement record, so those fields remain TBC rather than being inferred from the corridor award.', source: ntpcContract.id },
  ],
  V06: [
    { text: 'DORTS’s September 2018 progress report identifies V06 as Green Mountain’s sixth station and says its structure was largely complete while ceiling, wall, floor and mechanical works continued.', source: dortsV05V06Progress.id },
    { text: 'The report’s station-progress description is a construction snapshot from before opening, not a current condition report; the route project record separately records Green Mountain’s later stability testing and December 2018 opening.', source: greenRoute.id },
    { text: 'V06 was part of the Phase 1 turnkey award to China Steel and Union Steel Construction, whose published scope covered Green Mountain G01–G08, Blue Sea B06–B08, fourteen stations and one depot.', source: ntpcTender.id },
    { text: 'The contract notice reports a target-year daily service measure of 68,500 passenger trips for the entire first-phase system, so it cannot be used as a V06-specific demand figure.', source: ntpcTender.id },
    { text: 'DORTS’s right-of-way article says the first phase deliberately mixes seven elevated and seven at-grade stations after weighing cost, engineering difficulty, land acquisition and landscape impact.', source: dortsRouteRights.id },
    { text: 'Its alignment explanation places the Green Mountain route on elevated A-type right of way through the V07 area before it turns to B-type at-grade running, giving V06 a documented role near the end of the elevated section.', source: dortsRouteRights.id },
    { text: 'The grade article explains that the elevated section exists to lift the route from roughly 10 metres at Hongshulin toward the 35–40-metre Danhai New Town, with a maximum 6.16% grade along the climb.', source: dortsHongshulinGrade.id },
    { text: 'The project quality article records plan review, material sampling, contractor self-inspection, supervision hold points and owner or project-management spot checks; no station-only V06 contract value or final account was found in the checked primary pages.', source: dortsQuality.id },
  ],
  V07: [
    { text: 'DORTS identifies V07 as the seventh Green Mountain station and places it where the route turns from Danjin Road into Binhai Road and enters the Danhai New Town corridor.', source: dortsV07V08Progress.id },
    { text: 'That September 2018 construction report says V07\'s main structure was largely complete while crews were still paving the sidewalks around the entrances, so the record captures a late-build stage rather than an operating condition.', source: dortsV07V08Progress.id },
    { text: 'The right-of-way account places the elevated A-type exclusive section through V07 and says the first phase contains seven elevated and seven at-grade stations after balancing cost, engineering difficulty, land acquisition and landscape impact.', source: dortsRouteRights.id },
    { text: 'DORTS\'s grade record explains the reason for that form: the alignment rises from roughly 10 metres near Hongshulin toward the 35–40-metre Danhai New Town area, with a maximum recorded grade of 6.16% on the elevated section.', source: dortsHongshulinGrade.id },
    { text: 'The project Q&A describes the elevated section as dedicated right of way and says surface intersections receive priority, a corridor operating arrangement intended to improve punctuality and comfort while reducing the bus traffic burden.', source: dortsLightRailQA.id },
    { text: 'During the December 2018 Ministry of Transportation inspection, V07 was used for a high-elevated-station fire scenario in which the project tested passenger evacuation alongside civil, electrical-mechanical and operating checks.', source: dortsV07Inspection.id },
    { text: 'V07 was delivered inside the Phase 1 turnkey award whose published scope covered Green Mountain G01–G08, Blue Sea B06–B08, fourteen stations and one depot; the award value therefore belongs to the combined corridor, not to V07 alone.', source: ntpcTender.id },
    { text: 'The contract notice names China Steel and Union Steel Construction as the joint team, while the quality record describes plan review, incoming-material sampling, contractor self-checks, supervision hold points and owner or project-management spot checks.', source: ntpcContract.id },
    { text: 'The checked primary material does not publish a V07-only contract allocation, final account or station-specific public-art procurement cost, so those items remain TBC rather than being derived from the corridor award.', source: dortsQuality.id },
  ],
  V08: [
    { text: 'DORTS\'s September 2018 progress report marks V08 as the point where the Green Mountain route begins its at-grade section and says the station structure was largely complete during that construction snapshot.', source: dortsV07V08Progress.id },
    { text: 'That transition follows the elevated A-type section through V07: DORTS describes the later surface alignment as B-type separated right of way, so V08 is the first station in the documented change of construction and operating form.', source: dortsRouteRights.id },
    { text: 'The same right-of-way account records seven elevated and seven at-grade stations in the first phase, a mixed strategy selected after considering construction cost, engineering difficulty, land acquisition and landscape impact rather than applying one structure everywhere.', source: dortsRouteRights.id },
    { text: 'The route context is developmental as well as technical: the V07/V08 progress report describes the line entering Danhai New Town, while the contract notice defines the first-phase work as a transport project serving that growing corridor.', source: dortsV07V08Progress.id },
    { text: 'DORTS explains that the line uses dedicated right of way on its elevated section and gives surface intersections priority; the stated aims are better punctuality and comfort, lower bus emissions and improved service quality.', source: dortsLightRailQA.id },
    { text: 'The open-platform approach was also a planning response: DORTS says limited land led the project to simplify most non-transfer stations, saving space and construction or maintenance cost while preserving visual permeability.', source: dortsLightRailQA.id },
    { text: 'V08 belonged to the Phase 1 turnkey award to China Steel and Union Steel Construction, whose published scope combined Green Mountain G01–G08, Blue Sea B06–B08, fourteen stations and one depot rather than assigning a separate public price to each station.', source: ntpcTender.id },
    { text: 'The project quality article records five control layers—plan review, material sampling, contractor self-inspection, supervision hold points and owner or project-management spot checks—while the checked pages provide no V08-only final account or art procurement cost.', source: dortsQuality.id },
    { text: 'The progress article is a September 2018 build-stage record; DORTS\'s route record separately documents Green Mountain stability testing and the later opening date, so the two sources describe different moments rather than conflicting station conditions.', source: greenRoute.id },
  ],
  V09: [
    { text: 'DORTS places V09 at the Binhai Road and Shalun Road junction and reports that its structure and architectural fit-out were largely complete in October 2018, with mechanical work still continuing.', source: dortsV09V11Progress.id },
    { text: 'V09 therefore appears in the builder\'s final-three-stations progress record as a late construction-stage stop, not as a station for which the published corridor award can be converted into a station-only price.', source: dortsV09V11Progress.id },
    { text: 'Because DORTS identifies V08 as the beginning of the at-grade section after the elevated run through V07, V09 belongs to the surface portion of the Green Mountain alignment described by the project\'s B-type right-of-way classification.', source: dortsV07V08Progress.id },
    { text: 'The first-phase right-of-way record says the route contains seven elevated and seven at-grade stations, reflecting a deliberate balance among cost, engineering difficulty, land acquisition and landscape impact.', source: dortsRouteRights.id },
    { text: 'DORTS\'s planning Q&A says most non-transfer stations use open platforms because land is limited and a simpler form reduces construction and maintenance demands while keeping the corridor visually permeable.', source: dortsLightRailQA.id },
    { text: 'The Phase 1 turnkey award covered Green Mountain G01–G08, Blue Sea B06–B08, fourteen stations and one depot, and its NT$11,512,800,000 value is a combined-program figure rather than a V09 allocation.', source: ntpcTender.id },
    { text: 'A later DORTS inspection report records the project testing civil, electrical-mechanical and operating matters, including a V07 evacuation exercise, which documents the system-level safety stage reached before Green Mountain service.', source: dortsV07Inspection.id },
    { text: 'The route record separately reports Green Mountain stability testing and the December 2018 opening, so the October progress description and the later operating milestone must be read as dated stages of the same build.', source: greenRoute.id },
    { text: 'No checked primary page publishes a V09-only contractor split, final account, renaming gazette or station-specific public-art procurement cost; those details remain TBC.', source: dortsQuality.id },
  ],
  V10: [
    { text: 'DORTS\'s October 2018 report places V10 at the Shalun Road and Xinshi 3rd Road junction and records that test trains were being held there while mechanical work continued.', source: dortsV09V11Progress.id },
    { text: 'The same article groups V10 with V09 and V11 as the last three Green Mountain stations, so its test-train role belongs to the final integration stage of the route rather than to a separate branch or short working.', source: dortsV09V11Progress.id },
    { text: 'DORTS identifies V08 as the start of the at-grade section after the elevated segment through V07; V10 is consequently within the later surface-running portion described as B-type separated right of way.', source: dortsV07V08Progress.id },
    { text: 'The first-phase engineering account says the seven-elevated/seven-at-grade arrangement was chosen after weighing cost, construction difficulty, land acquisition and landscape effects, providing the documented rationale for the change in form before V10.', source: dortsRouteRights.id },
    { text: 'The planning Q&A explains that open platforms were used at most stations because land was limited and the simpler arrangement reduced construction and maintenance cost while maintaining visual openness.', source: dortsLightRailQA.id },
    { text: 'V10 was included in the corridor-wide turnkey award to China Steel and Union Steel Construction, whose scope covered Green Mountain G01–G08, Blue Sea B06–B08, fourteen stations and one depot; the published value is not a V10-only amount.', source: ntpcTender.id },
    { text: 'The builder\'s quality account describes plan review, incoming-material tests, contractor self-inspection, supervision hold points and owner or project-management spot checks, but it does not disclose a station-level V10 final account.', source: dortsQuality.id },
    { text: 'The December 2018 inspection record shows that the project had moved from construction into integrated civil, electrical-mechanical and operating checks, with a high-elevated-station evacuation exercise at V07 used as part of the safety examination.', source: dortsV07Inspection.id },
    { text: 'DORTS\'s route record documents Green Mountain stability testing and the later opening separately from the October construction snapshot, so the held test trains and the later service date are milestones at different points in the project timeline.', source: greenRoute.id },
  ],
  V11: [
    { text: 'DORTS describes V11 as an island-platform waiting station at the south side of Shalun Road Section 2 and Xinshi 6th Road Section 1, at the end of the Green Mountain route.', source: dortsV11Structure.id },
    { text: 'The builder\'s structure record gives the station a length of 55 metres, a width of 15.15 metres and an approximate height of 6 metres; these are the published waiting-station dimensions, not a route-length measurement.', source: dortsV11Structure.id },
    { text: 'A pedestrian crossing links the station to the sidewalks, and DORTS records an accessible ramp in the same arrangement, making the street approach part of the station structure account rather than an inferred exit description.', source: dortsV11Structure.id },
    { text: 'The 2017 construction snapshot lists structural painting, the metal roof, windscreen, paving and public-art fit-out as remaining work, so it records planned finishing stages rather than claiming that every item was already installed.', source: dortsV11Structure.id },
    { text: 'The later final-stations report describes V11 as the last Green Mountain station, after which the alignment continues toward the depot, and notes a future Danhai Miramar destination about 500 metres away on foot.', source: dortsV09V11Progress.id },
    { text: 'DORTS\'s right-of-way account places the elevated A-type section through V07 and the later B-type surface section after it; V11 is therefore within the documented at-grade end of the Green Mountain route.', source: dortsRouteRights.id },
    { text: 'The Phase 1 turnkey award covered Green Mountain G01–G08, Blue Sea B06–B08, fourteen stations and one depot, while its published value belongs to the combined program and cannot be assigned to V11 alone.', source: ntpcTender.id },
    { text: 'The project quality record describes five inspection layers from design review through owner spot checks, but the checked primary pages do not identify a V11-only contract allocation, final account or public-art procurement cost.', source: dortsQuality.id },
    { text: 'The December 2018 inspection article records the route undergoing civil, electrical-mechanical and operating checks before opening, including a high-elevated-station evacuation exercise at V07; it is a corridor safety milestone, not a V11-specific incident.', source: dortsV07Inspection.id },
  ],
  V26: [
    { text: 'DORTS\'s July 2018 Blue Sea Phase 1 progress report says work at V26 included cable conduits and station ancillary facilities, placing those tasks alongside the civil works still being completed around the station.', source: dortsBlueV26Progress.id },
    { text: 'The same report records a steel-arch bridge lift across Company Field Creek, two pier-cap works, an approach fill and conduit installation extending toward B07/V27, showing that V26 was built within a linked station-and-corridor works package.', source: dortsBlueV26Progress.id },
    { text: 'It also records road widening on Guanhai Road and sidewalk drainage work, while the first-phase construction progress had passed 80 percent in mid-July 2018; that figure is a dated program-progress measure, not a V26 completion percentage.', source: dortsBlueV26Progress.id },
    { text: 'The Blue Sea Phase 1 route record describes a three-station extension, and DORTS\'s station table identifies V26 as the completed Tamsui Fisherman\'s Wharf station within that phase.', source: blueRoute.id },
    { text: 'During the August 2020 preliminary inspection, V26 hosted a human-set fire scenario that tested evacuation from both the platform and train, then tested a train turnback to V27 and bus bridging.', source: dortsBlueV26Inspection.id },
    { text: 'That inspection article records the preliminary-inspection stage and the improvements required before the Ministry of Transportation inspection, so it should not be read as the final acceptance report.', source: dortsBlueV26Inspection.id },
    { text: 'DORTS\'s planning Q&A identifies the Fisherman\'s Wharf area represented by V26 as a potential land-development location considered together with the Danjiang Bridge and a possible Bali extension.', source: dortsLightRailQA.id },
    { text: 'The same Q&A explains that limited land led most non-transfer stations to use simplified open platforms, a design approach intended to save space and construction or maintenance cost while preserving visual permeability.', source: dortsLightRailQA.id },
    { text: 'V26 was part of the first-phase turnkey award covering the Green Mountain section, the B06–B08 Blue Sea section, fourteen stations and one depot; the published contract value is therefore a combined-corridor value, not a V26 station price.', source: ntpcTender.id },
  ],
}

export const DANHAI_OVERLAY: Record<string, StationOverlay> = Object.fromEntries(
  Object.entries(vData).map(([code, data]) => {
    const research = makeResearch(code, data)
    return [code, { structure: data.structure, research, sources: research.sources, location: data.location, locationSource: stationList.id, prose: stationProse[code] ?? [] }]
  }),
) as Record<string, StationOverlay>
