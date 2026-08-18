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
  'The full official HTML book page publishes the CF640/CF643B and CF650 construction-package assignments, contractors, Y08–Y09 spacing and Y08’s station architecture description.',
)
const book192 = source(
  'dorts-circular-architecture-book-192',
  'Circular Line elevated station architecture, page 172',
  '捷運工程叢書精進版－34 捷運高架車站建築造型設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page192.html',
  'The full official HTML book page publishes CF650’s CF651A/CF651B assignments, Y09–Y12 interstation distances and each station’s architecture description.',
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
const book15 = source(
  'dorts-circular-construction-management-book-43',
  'Circular Line construction-management strategy, page 43',
  '捷運工程叢書精進版－15 捷運工程施工管理實務',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no15/files/basic-html/page43.html',
  'The full official HTML book page publishes the source-era scope of CF650, CF660A and CF660B, including utilities, environmental control, lifts/escalators, civil works, bridge works and noise barriers.',
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
    { text: 'At programme level, DORTS places the first-phase works within 21 civil, water, environmental and electromechanical section contracts, alongside separate systems packages for rolling stock, signalling, power, communications, depot equipment, automatic-fare collection and track; this is a delivery structure, not a station price.', source: dortsPhase1.id },
    { text: 'The same route record dates the earliest planting contract, IQUX02 for the Y8–Y14 area, to 5 June 2009, and dates the first main civil contract, CF641 for the Dapinglin continuous-wall and structural works, to 5 January 2010.', source: dortsPhase1.id },
    { text: 'DORTS’s construction table calls this station Y06, while the current operating records call it Y07; the builder’s engineering identifier is retained here as historical contract context rather than silently converted into the operating code.', source: dortsPhase1.id },
    { text: 'The DF111 design brief links the Dapinglin section to the Liugong Canal, Shisizhang farmland and the Xindian River crossing, treating those water, agricultural and river landscapes as the local design context.', source: dortsArchitecture.id },
    { text: 'For that section, DORTS describes the “nature” theme through square geometry in façades and seating and through the use of the line colour in interior elements, so the design vocabulary connects the civil corridor to the passenger-facing architecture.', source: dortsArchitecture.id },
    { text: 'The official line-wide art record identifies the public-art procurement as commissioned creation and reports a design fee of NT$16,000,000; that amount belongs to the corridor-wide commission, not to this station alone.', source: artLine.id },
    { text: 'That record describes the commission as extending across roughly 212 elevated columns, about 8 kilometres of beams, about 10 kilometres of sound barriers, platform doors at all 14 stations, selected façades and vertical walls, and train exteriors and interiors.', source: artLine.id },
    { text: 'The checked DORTS records therefore establish the station’s construction-package setting, landscape brief and share of a line-wide art programme, but they do not publish a Y07-only civil final account or a separate station art budget.', source: dortsPhase1.id },
  ],
  Y08: [
    { text: 'The full DORTS architecture book assigns the Y8 elevated works to civil section CF640, with construction sub-contract CF643B and 皇昌營造 as contractor; this is the package record for the section rather than a claim that the whole contractor-built scope was confined to the station platform.', source: book191.id },
    { text: 'The same page places the neighbouring CF650 elevated civil section under 中華工程, with CF651A covering the Y9-to-Y11 sequence and CF651B covering the Y12-to-Y15 sequence, showing how the station sat beside several separately numbered work packages.', source: book191.id },
    { text: 'The book records approximately 1,550 metres from Dapinglin to Y8 and approximately 885 metres from Y8 to Y9; these are interstation distances in the architecture record, not a measurement of the station structure.', source: book191.id },
    { text: 'DORTS’s route history dates the IQUX02 planting contract for the Y8–Y14 area to 5 June 2009 and the CF641 Dapinglin continuous-wall and structural contract to 5 January 2010, giving the surrounding works a dated sequence without supplying a Y8 station account.', source: dortsPhase1.id },
    { text: 'The architecture page describes the DF112 design section as running from engineering Y8 to Y14 and names its “photosynthesis” theme, triangular design element, vertical-circulation wall treatment, ticket-gate ceiling treatment and strip lighting in concourse ceilings.', source: dortsArchitecture.id },
    { text: 'That design-section label is not silently mapped onto the current station code: DORTS’s route table uses Shisizhang Y07/K9, while the current operating records use Y08 for Shisizhang.', source: dortsPhase1.id },
    { text: 'The line-wide public-art record says the commission was procured as commissioned creation with a NT$16,000,000 design fee, so the documented amount is a corridor-level design fee rather than a Y08-only art cost.', source: artLine.id },
    { text: 'The same art record places the work across viaduct columns and beams, sound barriers, platform doors, selected station surfaces and the trains, which makes it relevant to Y08 as part of the line but does not identify a separate Y08 artist selection.', source: artLine.id },
    { text: 'The searched primary records do not publish a Y08 civil final account, construction-era rename gazette or station-specific art procurement amount, so those fields remain TBC rather than being inferred from the section contracts.', source: book191.id },
  ],
  Y09: [
    { text: 'DORTS’s architecture book places Y9 within CF650, the elevated civil section contracted to 中華工程, and specifically within sub-section CF651A, whose stated span runs from Y9 through Y11.', source: book191.id },
    { text: 'The adjacent-station table records approximately 885 metres from Y8 to Y9 and approximately 900 metres from Y9 to Y10; these figures describe alignment spacing in the official architecture book, not platform length or a route-wide distance.', source: book192.id },
    { text: 'DORTS’s design page describes DF112 as the engineering Y8–Y14 design section, so its package-era identifier is retained rather than being rewritten as a current operating station code.', source: dortsArchitecture.id },
    { text: 'The “photosynthesis” concept is explained through seven natural photosynthesis photographs, with the design intended to express exchange between the station and its local environment rather than to provide a generic line decoration.', source: dortsArchitecture.id },
    { text: 'The same brief identifies triangular elements and places the treatment in vertical-circulation side walls, ticket-gate-area ceilings and the concourse ceiling lighting, which records where the design vocabulary was applied.', source: dortsArchitecture.id },
    { text: 'DORTS’s route record dates the earliest Y8–Y14 planting contract to 5 June 2009 and the first Dapinglin main civil contract to 5 January 2010; neither date is presented as Y09’s own opening or station completion date.', source: dortsPhase1.id },
    { text: 'The official line-wide art page records commissioned creation and a NT$16,000,000 design fee, while describing placement across elevated structures, sound barriers, platform doors, station surfaces and trains.', source: artLine.id },
    { text: 'That art record supports Y09’s participation in a corridor-wide commission but does not publish a separate artist, selection result or cost for Y09, so a station-only art attribution would exceed the source.', source: artLine.id },
    { text: 'The checked contract and architecture pages do not provide a Y09 civil final account or a construction-era rename gazette; both remain TBC pending a station-specific primary record.', source: book192.id },
  ],
  Y10: [
    { text: 'The architecture book places Y10 in CF650’s CF651A sub-section, the elevated civil package whose recorded span runs from Y9 through Y11, and names 中華工程 as the CF650 contractor.', source: book191.id },
    { text: 'The official spacing table gives approximately 900 metres from Y9 to Y10 and approximately 1,085 metres from Y10 to Y11; these are interstation alignment distances, not measurements of the Y10 station building.', source: book192.id },
    { text: 'DORTS’s DF112 brief describes a “photosynthesis” design section using triangular elements, with public-art treatment on vertical-circulation side walls, at ticket-gate ceilings and in strip lighting across concourse ceilings.', source: dortsArchitecture.id },
    { text: 'The route-level construction history records 21 section contracts plus separate systems packages, and dates the earliest Y8–Y14 planting contract to 5 June 2009; those programme facts explain the work’s packaging without assigning a station-specific cost.', source: dortsPhase1.id },
    { text: 'DORTS’s construction-era table labels the station Y09, whereas current operating records use Y10, so the lower engineering identifier is kept as a source-era label rather than treated as a rename.', source: dortsPhase1.id },
    { text: 'The line-wide public-art record reports commissioned creation and a NT$16,000,000 design fee, with the work distributed through columns, beams, sound barriers, platform doors, selected station surfaces and trains.', source: artLine.id },
    { text: 'Because that commission is documented at line scale, the checked source does not establish a separate Y10 artwork title, artist selection or station-only budget.', source: artLine.id },
    { text: 'The searched DORTS route page, architecture page and book page do not publish a Y10 civil final account or a construction-era rename gazette, leaving both items TBC.', source: book192.id },
  ],
  Y11: [
    { text: 'The architecture book places Y11 in CF650’s CF651A sub-section, whose recorded span runs from Y9 through Y11, and identifies 中華工程 as the CF650 contractor.', source: book191.id },
    { text: 'The same official table records approximately 1,085 metres from Y10 to Y11 and approximately 1,530 metres from Y11 to Y12; these numbers are the architecture book’s interstation spacing measurements.', source: book192.id },
    { text: 'DORTS describes the DF112 design package as engineering Y8–Y14, with a “photosynthesis” theme and triangular elements carried into vertical-circulation walls, ticket-gate ceilings and concourse strip lighting.', source: dortsArchitecture.id },
    { text: 'The route table identifies this source-era row as Y10/O02, while the current operating records use Y11 and a different current interchange-code system; both identifiers are retained because they belong to different records.', source: dortsPhase1.id },
    { text: 'The route-level account says the first-phase civil, water, environmental and electromechanical works were divided into 21 section contracts, with separate systems packages, so CF651A should be read as one civil package within a larger programme.', source: dortsPhase1.id },
    { text: 'The line-wide art record reports a commissioned-creation procurement and NT$16,000,000 design fee, covering elevated corridor elements, sound barriers, platform doors, selected station surfaces and trains.', source: artLine.id },
    { text: 'The checked line-wide record does not break that fee down by Y11 or publish a station-specific artist selection, so no station-only artwork cost is asserted here.', source: artLine.id },
    { text: 'The searched primary records do not publish a Y11 civil final account or a dated construction-era rename gazette, and both remain TBC.', source: book192.id },
  ],
  Y12: [
    { text: 'The DORTS architecture book places Y12 in CF650 and in sub-section CF651B, the elevated civil package recorded as running from Y12 through Y15, with 中華工程 named as the CF650 contractor.', source: book191.id },
    { text: 'The official spacing table gives approximately 1,530 metres from Y11 to Y12 and approximately 630 metres from Y12 to Y13; these are alignment intervals between stations, not dimensions of the Y12 structure.', source: book192.id },
    { text: 'DORTS’s DF112 brief describes a “photosynthesis” theme for engineering Y8–Y14, using triangular elements and integrating treatment into vertical-circulation side walls, ticket-gate ceilings and concourse strip lighting.', source: dortsArchitecture.id },
    { text: 'The route table’s source-era row is Y11/LG06, while the current operating record uses Y12; the two labels are published together here as an identifier conflict rather than being quietly normalized.', source: dortsPhase1.id },
    { text: 'DORTS’s route history describes a 21-section civil, water, environmental and electromechanical delivery structure plus separate systems packages, which places CF651B within the wider programme but does not make it a station-only contract value.', source: dortsPhase1.id },
    { text: 'The official art record documents commissioned creation and a NT$16,000,000 design fee for a line-wide intervention extending through viaduct elements, sound barriers, platform doors, selected station surfaces and trains.', source: artLine.id },
    { text: 'That source does not publish a Y12-only artwork selection or allocation, so the line-wide fee is not presented as a station art budget.', source: artLine.id },
    { text: 'The searched DORTS route, architecture and book pages do not publish a Y12 civil final account or a construction-era rename gazette; each remains TBC until a station-specific primary record is found.', source: book192.id },
  ],
  Y13: [
    { text: 'The elevated-station architecture book assigns the Y12-to-Y15 source-era section to CF651B within CF650, with 中華工程 as the CF650 contractor; that package description is broader than a station-only bill.', source: book191.id },
    { text: 'A separate DORTS construction-management volume describes CF650 as the Y8-to-Y14 source-era corridor package, including utilities, environmental control, lifts and escalators, civil works and added operational requirements, so its scope is recorded at programme level.', source: book15.id },
    { text: 'The architecture book records approximately 740 metres from Y13 to Y14 and approximately 1,045 metres from Y14 to Y15, measurements of the alignment between stations rather than dimensions of Y13 itself.', source: book193.id },
    { text: 'The same page places the station entrance in the parking area and two-storey building of New Channel Cable TV and records a one-storey temporary building at the neighbouring Y14 site, showing that the station sequence passed through already occupied and temporary urban plots.', source: book193.id },
    { text: 'DORTS’s architecture record describes the DF112 source-era design section as using triangular elements and integrating public-art treatment into vertical-circulation walls, ticket-gate ceilings and concourse strip lighting.', source: dortsArchitecture.id },
    { text: 'The route table labels this station Y12, while current operating records use Y13; the builder’s engineering identifier is kept as a source-era label and is not treated as a later rename.', source: dortsPhase1.id },
    { text: 'The line-wide public-art record documents commissioned creation with a NT$16,000,000 design fee and places the work across viaduct structures, sound barriers, platform doors, selected station surfaces and trains.', source: artLine.id },
    { text: 'The checked primary records do not publish a Y13 civil final account, contract date or value, construction-era rename gazette, or station-only public-art allocation, so those fields remain TBC.', source: book15.id },
  ],
  Y14: [
    { text: 'The elevated-station architecture book places the source-era Y12-to-Y15 work in CF651B under the CF650 section contract and names 中華工程 as the CF650 contractor.', source: book191.id },
    { text: 'The construction-management volume describes CF650 as the source-era Y8-to-Y14 package and includes utilities, environmental control, lifts and escalators, civil works and added operational requirements, a scope description that is not a station-only price.', source: book15.id },
    { text: 'The official architecture table gives approximately 740 metres from Y13 to Y14 and approximately 1,045 metres from Y14 to Y15, retaining both values as the book’s interstation measurements.', source: book193.id },
    { text: 'For Y14, the book records one entrance on the east side of Ban-nan Road near Ban-nan Bridge 2 and says the site had previously contained a one-storey temporary building, an urban-condition detail not represented by the station’s structured dimensions.', source: book193.id },
    { text: 'The DF112 design record identifies triangular elements and art-integrated treatment at vertical-circulation walls, ticket-gate ceilings and the concourse ceiling’s strip lighting.', source: dortsArchitecture.id },
    { text: 'DORTS’s source-era station table calls this row Y13, whereas current operating records call it Y14; the difference is published as an engineering-code conflict, not silently recast as a rename.', source: dortsPhase1.id },
    { text: 'The line-wide art record reports commissioned creation and a NT$16,000,000 design fee for an intervention extending through elevated structures, sound barriers, platform doors, selected station surfaces and trains.', source: artLine.id },
    { text: 'The full pages checked do not provide a Y14-only civil final account, contract date or value, dated rename gazette or station-specific art allocation; each remains TBC.', source: book15.id },
  ],
  Y15: [
    { text: 'The architecture book assigns the source-era Y12-to-Y15 section to CF651B within CF650, with 中華工程 as contractor, and separately lists Y15 in CF660A’s CF661A station package under 春原營造.', source: book191.id },
    { text: 'The construction-management volume instead describes CF650 as the source-era Y8-to-Y14 package and CF660A as the source-era Y15-to-Y16 package, including utilities, environmental control, lifts and escalators, civil works and added operational requirements.', source: book15.id },
    { text: 'These two official books therefore give overlapping boundary labels around Y15—CF651B reaches the source-era Y15 in the architecture book, while CF660A begins with source-era Y15 in the construction-management scope—and the records do not explain the boundary difference.', source: book191.id },
    { text: 'The architecture table records approximately 1,045 metres from Y14 to Y15 and approximately 895 metres from Y15 to Y16, which are interstation alignment intervals rather than station-building dimensions.', source: book193.id },
    { text: 'DORTS’s architecture page places the source-era Y15–Y19 stations in the “心樂活” design package, using circular elements in interior columns, ceiling recesses and seating and colour-block treatment on vertical-circulation walls.', source: dortsArchitecture.id },
    { text: 'The route table calls this row Y14, while current operating records call it Y15; that source-era engineering identifier is retained beside the current code rather than interpreted as a rename.', source: dortsPhase1.id },
    { text: 'The line-wide art record documents commissioned creation and a NT$16,000,000 design fee, but it does not allocate that fee to Y15 or identify a separate station-only artwork budget.', source: artLine.id },
    { text: 'The checked primary pages do not publish Y15’s final civil account, contract dates or values, a dated rename gazette or a station-specific public-art allocation, so those fields remain TBC.', source: book15.id },
  ],
  Y16: [
    { text: 'The architecture book assigns CF660A to 春原營造 and identifies CF662 as the civil package for the station and the Banqiao intercity bus terminal’s joint-development building, adding the contractor to the station’s existing contract reference.', source: book191.id },
    { text: 'The construction-management volume describes CF660A as the source-era Y15-to-Y16 elevated-section package, including utilities, environmental control, lifts and escalators, civil works and added operational requirements.', source: book15.id },
    { text: 'The architecture table records approximately 895 metres from Y15 to Y16 and approximately 1,425 metres from Y16 to Y17, which are the book’s interstation spacing values rather than a measurement of the joint-development building.', source: book193.id },
    { text: 'DORTS’s route table uses engineering Y15 for the current Y16 station, while the operating record uses Y16/BL07; both identifiers remain visible because they describe different numbering systems.', source: dortsPhase1.id },
    { text: 'The station-specific public-art record identifies commissioned creation and a NT$12,000,000 design fee for the Banqiao work, distinct from the NT$16,000,000 line-wide commission recorded elsewhere.', source: artBanqiao.id },
    { text: 'The architecture page describes the source-era Y15–Y19 package as “心樂活”, using circular elements in interior columns, ceiling recesses and seats and colour-block treatment on vertical-circulation walls; this is the corridor design brief, not a description of the artwork’s content.', source: dortsArchitecture.id },
    { text: 'The checked records do not publish the CF662 contract date, contract value, final civil account, a dated rename gazette or a paid-area/street-transfer classification, so those fields remain TBC.', source: book191.id },
    { text: 'DORTS describes Daniel Buren’s work as an optical architecture of 8.7-centimetre colour bands, geometric forms, mirrored space and LED rainbows, with the platform columns carrying the station beneath the bus terminal.', source: artBanqiao.id },
  ],
  Y17: [
    { text: 'The architecture book places source-era Y17 in CF660A’s CF661A station package, alongside Y15, and names 春原營造 as the CF660A contractor.', source: book191.id },
    { text: 'The construction-management volume instead assigns source-era Y17–Y19 to CF660B, including elevated works, utilities, environmental control, lifts and escalators, an extended bridge reconstruction and beautification, operational additions and extra sound barriers.', source: book15.id },
    { text: 'The two official records therefore disagree on the section package boundary around this station—CF661A in the architecture book versus CF660B in the construction-management scope—and both values are retained without choosing one.', source: book191.id },
    { text: 'The architecture table records approximately 1,425 metres from Y16 to Y17 and approximately 1,635 metres from Y17 to Y18, the book’s interstation intervals rather than a station-structure measurement.', source: book193.id },
    { text: 'DORTS’s architecture page describes the source-era Y15–Y19 corridor as a fast-developing urban area around Banqiao New Station, Xinpu, Touqianzhuang, the Xinzhuang sub-centre and New Taipei Industrial Park.', source: dortsArchitecture.id },
    { text: 'Its “心樂活” brief uses circular elements in interior columns, ceiling recesses and seating, while vertical-circulation walls receive station-colour blocks by artist Emmanuelle Moureaux.', source: dortsArchitecture.id },
    { text: 'The route table calls this station Y16, while current operating records call it Y17; the engineering label is retained as historical source context rather than treated as a rename.', source: dortsPhase1.id },
    { text: 'The line-wide art record documents commissioned creation and a NT$16,000,000 design fee, but no Y17-only artwork allocation, final civil account, contract date or contract value is published in the checked pages, so those fields remain TBC.', source: artLine.id },
  ],
  Y18: [
    { text: 'The architecture book assigns source-era Y18–Y20 to CF660B’s CF661B package and names 遠揚營造 as the contractor, providing the section-level builder record for this station’s corridor.', source: book191.id },
    { text: 'The construction-management volume describes CF660B as the source-era Y17–Y19 package, including elevated works, utilities, environmental control, lifts and escalators, the Sihyuan overpass extension and beautification, operational additions and extra sound barriers.', source: book15.id },
    { text: 'Those official books therefore disagree about the source-era endpoints of CF660B—Y18–Y20 in the architecture-package table versus Y17–Y19 in the construction-management scope—and both descriptions are kept.', source: book191.id },
    { text: 'The architecture book records approximately 1,635 metres from Y17 to Y18 and approximately 1,155 metres from Y18 to Y19, while the following page records approximately 1,155 metres from Y18 to Y19 and 1,240 metres from Y19 to Y20.', source: book193.id },
    { text: 'DORTS describes the source-era Y15–Y19 corridor as serving rapidly developing urban districts and important transport hubs, including Touqianzhuang and the Xinzhuang sub-centre.', source: dortsArchitecture.id },
    { text: 'The “心樂活” design brief uses circular elements in interior columns, ceiling recesses and seating and assigns station-colour blocks by Emmanuelle Moureaux to vertical-circulation walls.', source: dortsArchitecture.id },
    { text: 'The route table calls this row Y17/O17, while current operating records call it Y18/O; the difference is preserved as source-era engineering versus current operating identification.', source: dortsPhase1.id },
    { text: 'The line-wide art record documents commissioned creation and a NT$16,000,000 design fee, but the checked primary pages do not publish a Y18-only art allocation, final civil account, contract date or contract value, so those fields remain TBC.', source: artLine.id },
  ],
  Y19: [
    { text: 'The architecture book assigns the source-era Y18–Y20 corridor to CF660B’s CF661B package and names 遠揚營造 as contractor, giving Y19 a section-level construction record rather than a station-only price.', source: book191.id },
    { text: 'The construction-management volume instead describes CF660B as the source-era Y17–Y19 package, including elevated works, utilities, environmental control, lifts and escalators, the Sihyuan overpass extension and beautification, operational additions and extra sound barriers.', source: book15.id },
    { text: 'The two official records therefore give different source-era endpoints for CF660B—Y18–Y20 in the architecture-package table and Y17–Y19 in the construction-management scope—and both values remain published.', source: book191.id },
    { text: 'The architecture book records approximately 1,155 metres from Y18 to Y19 and approximately 1,240 metres from Y19 to Y20, which are interstation alignment intervals rather than dimensions of Y19’s station building.', source: book194.id },
    { text: 'DORTS places the source-era Y15–Y19 design package through Banqiao New Station, Xinpu, Touqianzhuang, the Xinzhuang sub-centre and New Taipei Industrial Park, describing that corridor as a rapidly developing urban and transport setting.', source: dortsArchitecture.id },
    { text: 'The “心樂活” design brief uses circular elements in interior columns, ceiling recesses and seating and assigns station-colour blocks by Emmanuelle Moureaux to vertical-circulation walls.', source: dortsArchitecture.id },
    { text: 'The route table calls this station Y18, while current operating records call it Y19; the engineering label is retained as historical contract context rather than interpreted as a rename.', source: dortsPhase1.id },
    { text: 'The line-wide public-art record documents commissioned creation and a NT$16,000,000 design fee, but the checked primary pages do not publish a Y19-only art allocation, civil final account, contract date or contract value, so those fields remain TBC.', source: artLine.id },
  ],
  Y20: [
    { text: 'The architecture book assigns the source-era Y18–Y20 corridor to CF660B’s CF661B package and names 遠揚營造 as contractor, covering the construction section that reaches the first-phase terminus.', source: book191.id },
    { text: 'The construction-management volume describes CF660B instead as the source-era Y17–Y19 package, including elevated works, utilities, environmental control, lifts and escalators, the Sihyuan overpass extension and beautification, operational additions and added sound barriers.', source: book15.id },
    { text: 'Those official descriptions conflict on CF660B’s source-era endpoints—Y18–Y20 in the architecture book versus Y17–Y19 in the construction-management book—and the page does not explain the difference.', source: book191.id },
    { text: 'The architecture book records approximately 1,240 metres from Y19 to Y20, an interstation alignment interval rather than a measurement of the terminal station structure.', source: book194.id },
    { text: 'DORTS’s architecture record places the source-era Y15–Y19 package through the New Taipei Industrial Park and other rapidly developing urban districts, and assigns the corridor the “心樂活” design concept.', source: dortsArchitecture.id },
    { text: 'That concept uses circular elements in interior columns, ceiling recesses and seating, while the vertical-circulation walls receive station-colour blocks by Emmanuelle Moureaux.', source: dortsArchitecture.id },
    { text: 'The route table calls this row Y19/A3, while current operating records call it Y20/A3; the station-number difference is retained as an engineering-versus-operating identifier conflict.', source: dortsPhase1.id },
    { text: 'The line-wide public-art record documents commissioned creation and a NT$16,000,000 design fee, but the checked primary pages do not publish a Y20-only art allocation, civil final account, contract date or contract value, so those fields remain TBC.', source: artLine.id },
  ],
}

function makeResearch(code: string, data: YData): StationResearch {
  const operatorSource = ntmcStation(code)
    const sources = [operatorSource, ntmcStationList, ntmcAccessibility, tdxStations, book15, data.route, data.structureSource, data.platformSource, data.exitSource, data.landmarksSource, data.engineeringHistorySource, data.publicArtSource]
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
