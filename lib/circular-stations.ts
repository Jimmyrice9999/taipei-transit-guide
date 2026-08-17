import type { Source } from './sources.ts'
import type { StationOverlay, StationProseSentence, Structure } from './station-overlay.ts'
import type { StationResearch } from './station-research.ts'

const accessed = '2026-08-14'
const ntmcPublisher = 'New Taipei Metro Corporation (新北大眾捷運股份有限公司)'
const dortsPublisher = 'Taipei City Department of Rapid Transit Systems (臺北市政府捷運工程局)'
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

const ntmcStationList = source(
  'ntmc-circular-stations',
  'Circular Line station list',
  '環狀線車站',
  ntmcPublisher,
  'https://www.ntmetro.com.tw/basic/?node=10138',
  'The operator’s full station-list page publishes the Y07–Y20 station names, codes and station-position addresses.',
)
const ntmcAccessibility = source(
  'ntmc-circular-accessibility',
  'Circular Line accessibility services',
  '車站無障礙服務(環狀線)',
  ntmcPublisher,
  'https://www.ntmetro.com.tw/basic/?mode=detail&node=616',
  'The operator’s full accessibility page publishes the common Circular Line passenger enquiry, ramp, accessible gate, accessible toilet, accessible ticket-machine and accessible-elevator facilities.',
)
const tdxStations = source(
  'tdx-circular-stations',
  'Taiwan MOTC TDX — Circular Line station records',
  'TDX 新北捷運環狀線車站資料',
  motcPublisher,
  'https://tdx.transportdata.tw/',
  'The committed TDX station records publish the station sequence, addresses, coordinates and current interchange codes used by the generated registry.',
)
const dortsPhase1 = source(
  'dorts-circular-phase1',
  'Circular Line Phase 1',
  '環狀線第一階段',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=86E55BE3A390F789',
  'The builder’s full route page publishes the underground/elevated split, opening date, depot functions, route-level construction history, engineering identifiers, station positions, exit counts and its interchange table.',
)
const dortsArchitecture = source(
  'dorts-circular-architecture',
  'Circular Line station architecture',
  '車站建築設計：環狀線第一階段',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=980C85299DA2890A&s=3293A4AF14D279A8',
  'The builder’s full station-architecture page publishes the three design-section themes, design elements, public-art theme and station context.',
)
const book191 = source(
  'dorts-circular-architecture-book-191',
  'Circular Line elevated station architecture, pages 171–172',
  '捷運工程叢書精進版－34 捷運高架車站建築造型設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page191.html',
  'The full official HTML book page publishes Y08’s side-platform form, platform dimensions, entrance and accessible-lift description, and construction section.',
)
const book192 = source(
  'dorts-circular-architecture-book-192',
  'Circular Line elevated station architecture, page 172',
  '捷運工程叢書精進版－34 捷運高架車站建築造型設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page192.html',
  'The full official HTML book page publishes Y09–Y12 platform forms, platform dimensions, entrance positions and accessible-lift descriptions.',
)
const book193 = source(
  'dorts-circular-architecture-book-193',
  'Circular Line elevated station architecture, page 173',
  '捷運工程叢書精進版－34 捷運高架車站建築造型設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page193.html',
  'The full official HTML book page publishes Y13–Y17 platform forms, platform dimensions, entrance positions and accessible-lift descriptions.',
)
const book194 = source(
  'dorts-circular-architecture-book-194',
  'Circular Line elevated station architecture, page 174',
  '捷運工程叢書精進版－34 捷運高架車站建築造型設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page194.html',
  'The full official HTML book page publishes Y18–Y20 platform forms, platform dimensions, entrance positions and accessible-lift descriptions.',
)
const artLine = source(
  'dorts-circular-art-line',
  'Circular Line Phase 1 public art — Lin Guang',
  '環狀線第一階段：第一區公共藝術',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=6213240b5a7c3330&s=C8FCD9B3118D2576',
  'The builder’s full public-art record publishes 粼光, Emmanuelle Moureaux, its materials, December 2019 completion and line-wide placement across viaducts, sound barriers, platform doors, station façades and trains.',
)
const artBanqiao = source(
  'dorts-circular-art-banqiao',
  'Banqiao station public art — Between Reflections',
  '環狀線第一階段：第二區公共藝術',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=6213240b5a7c3330&s=658A187A584F11E4',
  'The builder’s full public-art record publishes 思映之間, Daniel Buren, its materials, December 2019 completion and its placement at Banqiao station.',
)

const ntmcIds: Record<string, string> = {
  Y07: '796', Y08: '797', Y09: '798', Y10: '799', Y11: '800', Y12: '801',
  Y13: '802', Y14: '803', Y15: '804', Y16: '805', Y17: '806', Y18: '807',
  Y19: '808', Y20: '809',
}
const ntmcNames: Record<string, { en: string; zh: string }> = {
  Y07: { en: 'Dapinglin', zh: '大坪林' }, Y08: { en: 'Shisizhang', zh: '十四張' },
  Y09: { en: 'Xiulang Bridge', zh: '秀朗橋' }, Y10: { en: 'Jingping', zh: '景平' },
  Y11: { en: 'Jingan', zh: '景安' }, Y12: { en: 'Zhonghe', zh: '中和' },
  Y13: { en: 'Qiaohe', zh: '橋和' }, Y14: { en: 'Zhongyuan', zh: '中原' },
  Y15: { en: 'Banxin', zh: '板新' }, Y16: { en: 'Banqiao', zh: '板橋' },
  Y17: { en: 'Xinpu Minsheng', zh: '新埔民生' }, Y18: { en: 'Touqianzhuang', zh: '頭前庄' },
  Y19: { en: 'Xingfu', zh: '幸福' }, Y20: { en: 'New Taipei Industrial Park', zh: '新北產業園區' },
}
function ntmcStation(code: string): Source {
  const station = ntmcNames[code]
  return source(
    'ntmc-' + code.toLowerCase() + '-station',
    code + ' ' + station.en + ' station information',
    station.zh + '（' + code + '）',
    ntmcPublisher,
    'https://www.ntmetro.com.tw/basic/?mode=detail&node=' + ntmcIds[code],
    'The operator’s full station page identifies this station and links its official station-information and timetable records. The linked PDF/image documents were not fetched in this run under the no-image rule.',
  )
}

const tbc = 'TBC'
type YData = {
  engineering: string
  structure: Structure
  exits: number
  openingDate: string
  route: Source
  structureSource: Source
  platformDetails: string
  platformSource: Source
  exitDetails: string
  exitSource: Source
  facilities: string
  landmarks: string
  landmarksSource: Source
  interchange?: { label: string; lineCode?: string }
  interchangeSource?: Source
  planned?: StationOverlay['planned']
  engineeringHistory: string
  engineeringHistorySource: Source
  publicArt: string
  publicArtSource: Source
}

const commonFacilities = 'NTMC publishes a passenger enquiry point with wheelchair availability, accessible ramps and guidance, accessible gates and ticket machines, an accessible toilet and an accessible elevator at every Circular Line station; station-specific nursing-room and bicycle-parking details: TBC.'
const lineArt = '粼光 — 艾曼紐．莫侯（Emmanuelle Moureaux）; paint, stickers, fibreglass, metal and plastic; December 2019; line-wide work on viaduct columns, drainage pipes, steel beams, sound barriers, platform doors at all 14 stations, selected façades and vertical-circulation walls, and train exteriors and interiors.'
const yData: Record<string, YData> = {
  Y07: { engineering: 'Y06', structure: 'underground', exits: 5, openingDate: '31 January 2020', route: dortsPhase1, structureSource: dortsPhase1, platformDetails: 'Underground station; platform form, number of platforms and track count: TBC.', platformSource: dortsPhase1, exitDetails: 'Five exits are published in the DORTS station table; the checked HTML route and operator pages do not publish the five street-emergence positions. Exact exit locations: TBC.', exitSource: dortsPhase1, facilities: commonFacilities, landmarks: '北新路3段190號', landmarksSource: ntmcStationList, interchange: { label: 'Songshan–Xindian Line; transfer mode: TBC', lineCode: 'G' }, interchangeSource: tdxStations, engineeringHistory: 'The first-phase route begins at the Dapinglin interchange underground, follows Minquan Road and Zhongzheng Road, then rises toward the Y08 section. DORTS identifies the first main civil-works contract, CF641, as beginning with the Dapinglin continuous-wall and structural works on 5 January 2010.', engineeringHistorySource: dortsPhase1, publicArt: lineArt, publicArtSource: artLine },
  Y08: { engineering: 'Y07', structure: 'elevated', exits: 1, openingDate: '31 January 2020', route: dortsPhase1, structureSource: book191, platformDetails: 'Elevated side-platform station; two side platforms; track count: TBC. Platform level main structure 96.5 m long, 28.3 m wide; platform length 80 m.', platformSource: book191, exitDetails: 'One entrance on the north side of the station body, within the South Depot land, connected to the depot joint-development artificial platform; accessible lift published.', exitSource: book191, facilities: commonFacilities + ' DORTS also publishes the entrance-side accessible lift for this station.', landmarks: '十四張地區; 南機廠', landmarksSource: book191, interchange: { label: 'Ankeng LRT; transfer mode: TBC' }, interchangeSource: dortsPhase1, engineeringHistory: 'DORTS places Y08 in the DF111 design section, whose concept is 自然 (nature), using a square element and the line colour in the interior. The station uses a green-skin concept over the artificial platform and is integrated with the South Depot development.', engineeringHistorySource: dortsArchitecture, publicArt: lineArt, publicArtSource: artLine },
  Y09: { engineering: 'Y08', structure: 'elevated', exits: 2, openingDate: '31 January 2020', route: dortsPhase1, structureSource: book192, platformDetails: 'Elevated side-platform station; two side platforms; track count: TBC. Platform level main structure 92.6 m long, 21.3 m wide; platform length 80 m.', platformSource: book192, exitDetails: 'North entrance at the north-west side of the Jingping Road, Chenggong South Road and Xiulang Road 3rd Section junction, with one accessible lift; south entrance on the south side of Jingping Road in front of the Northern Reserve Command, with one accessible lift.', exitSource: book192, facilities: commonFacilities + ' DORTS publishes one accessible lift at each entrance.', landmarks: '景平路、秀朗路3段路口; 北區後備司令部', landmarksSource: book192, engineeringHistory: 'DORTS places Y09 in the DF112 design section, whose 光合 (photosynthesis) concept turns seven natural processes into station and local-place design. The section uses triangular elements and integrated wall, gate-area and concourse lighting treatments.', engineeringHistorySource: dortsArchitecture, publicArt: lineArt, publicArtSource: artLine },
  Y10: { engineering: 'Y09', structure: 'elevated', exits: 1, openingDate: '31 January 2020', route: dortsPhase1, structureSource: book192, platformDetails: 'Elevated side-platform station; two side platforms; track count: TBC. Platform level main structure 92.6 m long, 21.3 m wide; platform length 80 m.', platformSource: book192, exitDetails: 'One entrance on the south side of Jingping Road, north of Jingde Street, inside the parking area of the Second Special Police Corps; one accessible lift.', exitSource: book192, facilities: commonFacilities + ' DORTS publishes one entrance-side accessible lift.', landmarks: '景平路123號; 警政署保安警察第2總隊', landmarksSource: book192, engineeringHistory: 'Y10 is in the DF112 光合 design section; station-specific artistic subtheme: TBC.', engineeringHistorySource: dortsArchitecture, publicArt: lineArt, publicArtSource: artLine },
  Y11: { engineering: 'Y10', structure: 'elevated', exits: 1, openingDate: '31 January 2020', route: dortsPhase1, structureSource: book192, platformDetails: 'Elevated side-platform station; two side platforms; track count: TBC. Platform level main structure 94.9 m long, 21.3 m wide; platform length 80 m.', platformSource: book192, exitDetails: 'One entrance in the completed station joint-development building; one accessible lift and three escalators.', exitSource: book192, facilities: commonFacilities + ' DORTS publishes one accessible lift in the joint-development building.', landmarks: '景平路、景安路路口; 景安站聯開大樓', landmarksSource: book192, interchange: { label: 'Zhonghe–Xinlu Line; transfer mode: TBC', lineCode: 'O' }, interchangeSource: tdxStations, engineeringHistory: 'Y11 is in the DF112 光合 design section. DORTS records the station as a joint interchange with the Zhonghe–Xinlu Line; its entrance is co-constructed with the existing Jingan station exit.', engineeringHistorySource: dortsArchitecture, publicArt: lineArt, publicArtSource: artLine },
  Y12: { engineering: 'Y11', structure: 'elevated', exits: 1, openingDate: '31 January 2020', route: dortsPhase1, structureSource: book192, platformDetails: 'Elevated stacked-platform station; platform level main structure 106.8 m long and 9.06 m wide; platform length 80 m; track count: TBC.', platformSource: book192, exitDetails: 'One entrance at the Jingping Road and Zhongshan Road 2nd Section junction, on the site of a former four-storey cold-storage plant; one accessible lift.', exitSource: book192, facilities: commonFacilities + ' DORTS publishes one entrance-side accessible lift.', landmarks: '景平路、中山路2段路口; former cold-storage plant site', landmarksSource: book192, planned: [{ line: 'Wanda–Zhonghe–Shulin Line', note: 'DORTS’s station table labels this future transfer as 萬大線（興建中）; it is planned, not a current interchange.', sourceTitle: 'Circular Line Phase 1', sourceUrl: dortsPhase1.url }], engineeringHistory: 'Y12 is a stacked elevated station in the DF112 光合 section. DORTS records the former cold-storage plant site and a future Wanda–Zhonghe–Shulin Line transfer in its station table.', engineeringHistorySource: dortsPhase1, publicArt: lineArt, publicArtSource: artLine },
  Y13: { engineering: 'Y12', structure: 'elevated', exits: 1, openingDate: '31 January 2020', route: dortsPhase1, structureSource: book193, platformDetails: 'Elevated stacked-platform station; platform level main structure 121.8 m long and 9.06 m wide; platform length 80 m; track count: TBC.', platformSource: book193, exitDetails: 'One entrance on the east side of Ban-nan Road between Zhongshan Road 2nd Section and Qiaohe Road, in the parking area and two-storey building of New Channel Cable TV; one accessible lift.', exitSource: book193, facilities: commonFacilities + ' DORTS publishes one entrance-side accessible lift.', landmarks: '板南路、中山路2段與橋和路間; 新視波有線電視停車場', landmarksSource: book193, engineeringHistory: 'Y13 is an elevated stacked-platform station in the DF112 光合 section; station-specific artistic subtheme: TBC.', engineeringHistorySource: dortsArchitecture, publicArt: lineArt, publicArtSource: artLine },
  Y14: { engineering: 'Y13', structure: 'elevated', exits: 1, openingDate: '31 January 2020', route: dortsPhase1, structureSource: book193, platformDetails: 'Elevated stacked-platform station; platform level main structure 121.8 m long and 9.06 m wide; platform length 80 m; track count: TBC.', platformSource: book193, exitDetails: 'One entrance on the east side of Ban-nan Road at the Zhongzheng Road junction, near Ban-nan Bridge 2; one accessible lift.', exitSource: book193, facilities: commonFacilities + ' DORTS publishes one entrance-side accessible lift.', landmarks: '板南路、中正路路口; 板南2號橋', landmarksSource: book193, engineeringHistory: 'Y14 is an elevated stacked-platform station in the DF112 光合 section; station-specific artistic subtheme: TBC.', engineeringHistorySource: dortsArchitecture, publicArt: lineArt, publicArtSource: artLine },
  Y15: { engineering: 'Y14', structure: 'elevated', exits: 1, openingDate: '31 January 2020', route: dortsPhase1, structureSource: book193, platformDetails: 'Elevated side-platform station; two side platforms; track count: TBC. Platform level main structure 92.6 m long, 21.3 m wide; platform length 80 m.', platformSource: book193, exitDetails: 'One entrance at the south-west side of the Banxin Road and Zhongshan 1st Road junction; one accessible lift.', exitSource: book193, facilities: commonFacilities + ' DORTS publishes one entrance-side accessible lift.', landmarks: '板新路、中山1路路口', landmarksSource: book193, engineeringHistory: 'Y15 is the western endpoint of the DF112 光合 section and the first station of the DF113 心樂活 section in the builder’s design-section descriptions. The project placed the station land in a dedicated urban-plan station-use site.', engineeringHistorySource: dortsArchitecture, publicArt: lineArt + ' Station-specific allocation of the separate Banqiao work: TBC.', publicArtSource: artLine },
  Y16: { engineering: 'Y15', structure: 'elevated', exits: 2, openingDate: '31 January 2020', route: dortsPhase1, structureSource: book193, platformDetails: 'Elevated side-platform station; two side platforms; track count: TBC. Platform level main structure 84 m long and 25 m wide; platform length 80 m.', platformSource: book193, exitDetails: 'Two entrances within the station land-development base at the Xianmin Boulevard and Xinzhan Road junction; DORTS publishes two accessible lifts. Exact street-side emergence of each entrance: TBC.', exitSource: book193, facilities: commonFacilities + ' DORTS publishes two accessible lifts in the station land-development base.', landmarks: '縣民大道、新站路路口; 中長程客運站; 市政府辦公大樓', landmarksSource: book193, interchange: { label: 'Bannan Line; transfer mode: TBC', lineCode: 'BL' }, interchangeSource: tdxStations, engineeringHistory: 'Y16 is the first station in the DF113 心樂活 section. DORTS records a joint-development project with the intercity bus station and city-government office building, and a station engineering contract CF662.', engineeringHistorySource: dortsArchitecture, publicArt: '思映之間 — 丹尼爾．布罕（Daniel Buren）; enamel panels indoors, aluminium panels outdoors and indoor LEDs; December 2019; 12 columns below the station, escalator walls and ceilings, platform doors and columns, platform LEDs and the bus-building exterior. ' + lineArt, publicArtSource: artBanqiao },
  Y17: { engineering: 'Y16', structure: 'elevated', exits: 1, openingDate: '31 January 2020', route: dortsPhase1, structureSource: book193, platformDetails: 'Elevated side-platform station; two side platforms; track count: TBC. Platform level main structure 90 m long, 21.5 m wide; platform length 80 m.', platformSource: book193, exitDetails: 'One entrance within the station land-development base; a separate underground passage crosses Banqiao Minsheng Road, with one accessible lift on each side. The main entrance and the two passage lifts are the published access points.', exitSource: book193, facilities: commonFacilities + ' DORTS publishes one main entrance lift and two accessible lifts at the Minsheng Road passage.', landmarks: '民生路、文化路路口北側; 板橋民生路3段地下道', landmarksSource: book193, interchange: { label: 'Bannan Line; transfer mode: TBC', lineCode: 'BL' }, interchangeSource: tdxStations, engineeringHistory: 'Y17 is in the DF113 心樂活 section. DORTS records a station land-development base and a separate underground passage across Minsheng Road with lifts on both sides.', engineeringHistorySource: dortsArchitecture, publicArt: lineArt, publicArtSource: artLine },
  Y18: { engineering: 'Y17', structure: 'elevated', exits: 4, openingDate: '31 January 2020', route: dortsPhase1, structureSource: book194, platformDetails: 'Elevated side-platform station; two side platforms; track count: TBC. Platform level main structure 87 m long, 24.7 m wide; platform length 80 m.', platformSource: book194, exitDetails: 'One entrance within the station land-development base; two escalators, a 1.8 m stair and one accessible lift. The Circular Line entrance is linked to the Zhonghe–Xinlu Line station transfer route.', exitSource: book194, facilities: commonFacilities + ' DORTS publishes one accessible lift at the entrance.', landmarks: '思源路、中正路路口; 頭前庄站聯開基地', landmarksSource: book194, interchange: { label: 'Zhonghe–Xinlu Line; transfer mode: TBC', lineCode: 'O' }, interchangeSource: tdxStations, engineeringHistory: 'Y18 is in the DF113 心樂活 section. DORTS records that the Circular Line and Zhonghe–Xinlu Line exits are connected to form the transfer movement, without a separate urban-plan land change for this station.', engineeringHistorySource: dortsArchitecture, publicArt: lineArt, publicArtSource: artLine },
  Y19: { engineering: 'Y18', structure: 'elevated', exits: 2, openingDate: '31 January 2020', route: dortsPhase1, structureSource: book194, platformDetails: 'Elevated side-platform station; two side platforms; track count: TBC. Platform level main structure 90 m long, 24.7 m wide; platform length 80 m.', platformSource: book194, exitDetails: 'One main entrance on the ground at the east side of the station; two escalators, a 1.8 m stair and one accessible lift. The DORTS route table publishes two entrances for this station, while the architecture book describes one main entrance; both values are retained as a conflict.', exitSource: book194, facilities: commonFacilities + ' DORTS publishes one accessible lift for the described main entrance.', landmarks: '思源路、幸福路路口', landmarksSource: book194, engineeringHistory: 'Y19 is in the DF113 心樂活 section. The station land was obtained through a parking-and-transportation-use urban-plan change published in the builder’s project book.', engineeringHistorySource: dortsArchitecture, publicArt: lineArt, publicArtSource: artLine },
  Y20: { engineering: 'Y19', structure: 'elevated', exits: 1, openingDate: '31 January 2020', route: dortsPhase1, structureSource: book194, platformDetails: 'Elevated side-platform station; two side platforms; track count: TBC. Platform level main structure 90 m long, 23 m wide; platform length 80 m.', platformSource: book194, exitDetails: 'One entrance on the west side of the station body; one accessible lift, two escalators and a 1.925 m stair.', exitSource: book194, facilities: commonFacilities + ' DORTS publishes one entrance-side accessible lift.', landmarks: '五工路、中山路1段路口; New Taipei Industrial Park', landmarksSource: book194, interchange: { label: 'Airport MRT; transfer mode: TBC' }, interchangeSource: dortsPhase1, engineeringHistory: 'Y20 is the northern endpoint of the first-phase route and in the DF113 心樂活 section. DORTS records a dedicated station-use urban-plan site and land development at the industrial-park terminus.', engineeringHistorySource: dortsArchitecture, publicArt: lineArt, publicArtSource: artLine },
}

const stationProse: Record<string, StationProseSentence[]> = {
  Y07: [
    { text: 'DORTS’s DF111 brief links this section to the Liugong Canal, Shisizhang farmland and the Xindian River crossing; its “nature” concept responds with square elements and extensive use of the Circular Line colour.', source: dortsArchitecture.id },
  ],
  Y16: [
    { text: 'DORTS describes Daniel Buren’s work as an optical architecture of 8.7-centimetre colour bands, geometric forms, mirrored space and LED rainbows, with the platform columns carrying the station beneath the bus terminal.', source: artBanqiao.id },
  ],
}

function makeResearch(code: string, data: YData): StationResearch {
  const operatorSource = ntmcStation(code)
  const sources = [operatorSource, ntmcStationList, ntmcAccessibility, tdxStations, data.route, data.structureSource, data.platformSource, data.exitSource, data.landmarksSource, data.engineeringHistorySource, data.publicArtSource]
    .filter((entry, index, all) => all.findIndex((other) => other.id === entry.id) === index)
  return {
    sources,
    identitySource: operatorSource.id,
    mapSource: tdxStations.id,
    structureSource: data.structureSource.id,
    openingSource: data.route.id,
    scheduleSources: [],
    openingDate: data.openingDate,
    interchange: data.interchange ? { ...data.interchange, source: data.interchangeSource?.id ?? tdxStations.id } : undefined,
    platformDetails: data.platformDetails,
    platformSource: data.platformSource.id,
    exitDetails: data.exitDetails,
    exitSource: data.exitSource.id,
    facilities: data.facilities,
    facilitiesSource: ntmcAccessibility.id,
    depot: 'South Depot (南機廠) is the Circular Line Phase 1 main maintenance depot; station-level operating roster allocation: TBC.',
    depotSource: data.route.id,
    publicArt: data.publicArt,
    publicArtSource: data.publicArtSource.id,
    naming: tbc,
    engineeringHistory: data.engineeringHistory,
    engineeringHistorySource: data.engineeringHistorySource.id,
    landmarks: data.landmarks,
    landmarksSource: data.landmarksSource.id,
  }
}

export const CIRCULAR_OVERLAY: Record<string, StationOverlay> = Object.fromEntries(
  Object.entries(yData).map(([code, data]) => {
    const research = makeResearch(code, data)
    return [code, { structure: data.structure, engineering: data.engineering, exits: data.exits, research, sources: research.sources, planned: data.planned, prose: stationProse[code] ?? [] }]
  }),
) as Record<string, StationOverlay>
