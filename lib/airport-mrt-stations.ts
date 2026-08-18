import type { Source } from './sources.ts'
import type { StationInterchange, StationResearch } from './station-research.ts'
import type { StationOverlay, StationProseSentence, Structure } from './station-overlay.ts'

const accessed = '2026-08-14'
const tymcPublisher = 'Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)'
const dortsPublisher = 'New Taipei City Department of Rapid Transit Systems (新北市政府捷運工程局)'
const taipeiDortsPublisher = 'Taipei City Department of Rapid Transit Systems (臺北市政府捷運工程局)'
const rbPublisher = 'Railway Bureau, Ministry of Transportation and Communications (交通部鐵道局)'
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

const tdxStations = source(
  'tdx-airport-mrt-stations',
  'Taiwan MOTC TDX — Airport MRT station records',
  'TDX 桃園捷運車站資料',
  motcPublisher,
  'https://tdx.transportdata.tw/',
  'The committed TDX records publish the A1–A22 station sequence, names, postal addresses, districts, coordinates and current interchange codes. The current A records contain no interchange codes.',
)

const dortsRoute = source(
  'dorts-airport-mrt-route',
  'Airport MRT route and stations',
  '機場捷運',
  dortsPublisher,
  'https://www.dorts.ntpc.gov.tw/about/route/npW0dxy4Z3Ex',
  'The builder’s full route page publishes the built 22-station route, the 2 March 2017 opening for the initial Airport MRT service, the 15 elevated/7 underground split, route construction history, station positions, transfers and the Qingpu/Luzhu depot pair.',
)

const dortsA1 = source(
  'dorts-airport-a1',
  'Taipei section of the Airport MRT',
  '機場線臺北段',
  taipeiDortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=efeac549b2c68706',
  'The Taipei builder’s full project page places A1 underground at level 3, publishes its seven exits and records the C1/D1 station and contract history.',
)

const rbStations = source(
  'rb-airport-station-architecture',
  'Airport MRT station architecture and structure',
  '臺灣桃園國際機場聯外捷運系統建築設計',
  rbPublisher,
  'https://www.rb.gov.tw/public/files/artsinfo/1500644721-0.pdf',
  'The Railway Bureau’s full station-architecture report publishes station-by-station elevated/underground form, platform arrangement, track counts, levels, access arrangements and the design-contract groupings. Its report excludes A1 because that section was handled by Taipei City and describes the initial A1–A21/A14a set rather than the later A22 extension.',
)

const rbAnnual102 = source(
  'rb-airport-annual-report-102',
  'Airport MRT civil works in the Railway Bureau 102 annual report',
  '高鐵局102年年報',
  rbPublisher,
  'https://www.rb.gov.tw/public/files/artsinfo/1503058979-0.pdf',
  'The Railway Bureau full 102 annual-report PDF publishes the A2-A4 CE01B, A5-A6 CE01C and A8-A11 CE02 scopes, fit-out, testing, landscape, drainage and fire-safety milestones, the 102 progress snapshots, and the three-lot civil-work arrangement for the A2-A1 section.',
)

const rbAnnual101 = source(
  'rb-airport-annual-report-101',
  'Airport MRT civil works in the Railway Bureau 101 annual report',
  '高鐵局101年年報',
  rbPublisher,
  'https://www.rb.gov.tw/public/files/artsinfo/1503059115-0.pdf',
  'The Railway Bureau full 101 annual-report PDF publishes CU01 for A7, CU02 and CU02A for A12-A14a, the A7 cut-and-cover and excavation-section lengths, station construction/test milestones, and the 101 progress snapshots.',
)

const rbAirportRisk = source(
  'rb-airport-risk-monitoring',
  'Airport MRT shield-tunnel risk monitoring at the airport',
  '桃園機場捷運潛盾隧道施工風險管理監測成果探討',
  rbPublisher,
  'https://www.rb.gov.tw/public/upimgs/D04/1520_Tunnel_for_TIAA_MRT.pdf',
  'This full Railway Bureau technical-conference paper describes the airport underground section, the runway and control-tower interfaces, the A12-A14a geology, and the monitoring and risk-control approach used for shield tunnelling beneath airport-sensitive areas.',
)

const publicArt = source(
  'tymc-airport-public-art',
  'Airport MRT public art',
  '桃園機場捷運公共藝術',
  tymcPublisher,
  'https://www.tymetro.com.tw/tymetro-new/tw/_pages/life/public_art.html',
  'The operator’s full public-art page publishes the station allocation, work titles and artists recorded here. It generally does not publish a work year or medium; those fields remain TBC unless the page itself includes a year in the title.',
)

const rbDepots = source(
  'rb-airport-depots',
  'Airport MRT depots',
  '機場捷運機廠',
  rbPublisher,
  'https://www.rb.gov.tw/zh-TW/main/main_71/main_80/main_87/main_93/',
  'The Railway Bureau’s full depot page publishes Qingpu and Luzhu as the Airport MRT depots and describes their parking, cleaning, maintenance, overhaul and inspection functions; it does not publish a station-by-station roster allocation.',
)

const motcA22 = source(
  'motc-airport-a22-opening',
  'Airport MRT A22 opening',
  '機場捷運A22老街溪站通車',
  motcPublisher,
  'https://www.motc.gov.tw/ch/app/data/view?module=news&id=14&serno=03fcdf67-3c92-46b9-b79b-cc98b983dc04',
  'The Ministry’s full announcement records the A22 Laojie River extension, its design changes required by the Taoyuan railway undergrounding project, construction and signalling-integration difficulties, the 31 July 2023 opening, and the planned onward A23/Zhongli connections.',
)

const operatorUrls: Record<string, string> = {
  A1: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A1/A4',
  A2: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A2/A4',
  A3: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A3/A4',
  A4: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A4/A4',
  A5: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A5/A4',
  A6: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A6/A4',
  A7: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A7/A4',
  A8: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A8/A4',
  A9: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A9/A4',
  A10: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A10/A4',
  A11: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A11/A4',
  A12: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A12/A4',
  A13: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A13/A4',
  A14a: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A14a/A4',
  A15: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A15/A4',
  A16: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A16/A4',
  A17: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A17/A4',
  A18: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A18/A4',
  A19: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A19/A4',
  A20: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A20/A4',
  A21: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A21/A4',
  A22: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A22/A4',
}

const operatorStations = Object.fromEntries(
  Object.entries(operatorUrls).map(([code, url]) => [
    code,
    source(
      `tymc-${code.toLowerCase()}-station`,
      `Airport MRT ${code} station page`,
      `桃園機場捷運${code}車站資訊`,
      tymcPublisher,
      url,
      'The operator’s full station page publishes the station address, exit table, accessible lifts and station-service details used for this station record; transfer and facility fields are included only where the page states them.',
    ),
  ]),
) as Record<string, Source>

const tbc = 'TBC'

type AData = {
  structure: Structure
  structureSource: Source
  exits: number
  platformDetails: string
  platformSource: Source
  exitDetails: string
  facilities: string
  interchange?: StationInterchange
  interchangeSource?: Source
  engineeringHistory: string
  engineeringHistorySource: Source
  landmarks: string
  landmarksSource: Source
  publicArt: string
  openingDate: string
  openingSource: Source
}

const initialOpening = '2 March 2017'

const aData: Record<string, AData> = {
  A1: {
    structure: 'underground', structureSource: dortsA1, exits: 7,
    platformDetails: 'Underground; platform form, number of platforms and track count: TBC.', platformSource: dortsA1,
    exitDetails: 'Seven exits: 1 at Taipei City Mall Y12 west; 2 at Taipei City Mall Y18 east; 3 at the southeast corner of Civic Boulevard and Chongqing North Road Section 1; 4 at the northeast corner of Chongqing North Road Section 1 and Beiping West Road; 5 at the southwest corner of Civic Boulevard and Chongqing North Road Section 1; 6 near the Civic Boulevard–Yanping North Road intersection; 7 near the Yanping North Road–Civic Boulevard intersection.',
    facilities: 'TYMC publishes enquiry points at the B1 pre-check-in area and B2 concourse, three drinking-water points, three toilets, accessible exit lifts at exits 1, 3 and 5, five platform lifts, lockers and a B1 nursing room near Y22.',
    interchange: { label: 'Tamsui–Xinyi, Bannan and Songshan–Xindian lines; transfer mode: TBC' }, interchangeSource: operatorStations.A1,
    engineeringHistory: 'DORTS places A1 at underground level 3 in the C1/D1 Taipei section. Its project page records the A1 station contract sequence, including CA441A signed on 15 September 2006.', engineeringHistorySource: dortsA1,
    landmarks: 'Taipei Main Station and Taipei City Mall entrances Y12 and Y18 are named in the operator’s exit descriptions.', landmarksSource: operatorStations.A1,
    publicArt: '文化基因－Meme (artist: TBC); 天地之窗 — 黃心健; 遊子之鏡 — 黃心健; ‘紛紛從田裡飛起’ (2013; medium: TBC) — Joseph Kosuth; 宇宙 — 林壽宇; 遠山無盡碧層層 — 林壽宇.',
    openingDate: initialOpening, openingSource: dortsRoute,
  },
  A2: {
    structure: 'elevated', structureSource: rbStations, exits: 2,
    platformDetails: 'Elevated four-level island-platform station; two tracks. Ground-level exits, 3F concourse and 4F platform; co-constructed with Taipei Metro O5.', platformSource: rbStations,
    exitDetails: 'Exit 1 at MRT Road 36; exit 1A at the middle of the New Taipei Metropolitan Park pedestrian bridge beside the station body.',
    facilities: 'TYMC publishes an enquiry point near exit 1A, drinking water in the unpaid concourse, a paid-zone toilet, two accessible lifts at exit 1, one platform lift, YouBike by Shuǐyang Road and Taipei Metro Sanchong exit 3, lockers and a paid-zone nursing room.',
    interchange: { label: 'Zhonghe–Xinlu Line; transfer mode: TBC; via an in-station connecting passage', lineCode: 'O' }, interchangeSource: operatorStations.A2,
    engineeringHistory: 'The Railway Bureau identifies A2 as a four-level elevated station co-constructed with Taipei Metro O5; design contract DE01 covers A2–A6.', engineeringHistorySource: rbStations,
    landmarks: 'New Taipei Metropolitan Park pedestrian bridge and Taipei Metro Sanchong Station are named in the operator’s exit and YouBike descriptions.', landmarksSource: operatorStations.A2,
    publicArt: '夢想與回憶的輸送帶 — 陶亞倫 (year: TBC; medium: TBC).',
    openingDate: initialOpening, openingSource: dortsRoute,
  },
  A3: {
    structure: 'elevated', structureSource: rbStations, exits: 1,
    platformDetails: 'Elevated three-level double-island-platform station; four tracks. Ground-level exit, 2F platforms and a 3F connector to the Circular Line station. The RB report labels the connector station Y19; the current TDX operating record is Y20.', platformSource: rbStations,
    exitDetails: 'One numbered exit at Wugong Road 37, plus a separate connector entrance to the Circular Line.',
    facilities: 'TYMC publishes enquiry points at the 1F concourse and 3F connector, drinking water in the unpaid concourse, a paid-zone toilet, no exit lift, two platform lifts and two connector lifts, YouBike, lockers and a paid-zone nursing room.',
    interchange: { label: 'Circular Line (operator/builder label: Y19; current TDX code: Y20); transfer mode: TBC', lineCode: 'Y' }, interchangeSource: operatorStations.A3,
    engineeringHistory: 'A3’s four-track double-island arrangement carries the Circular Line connector on the upper level. The Railway Bureau groups the station in design contract DE01.', engineeringHistorySource: rbStations,
    landmarks: 'New Taipei Industrial Park and the Circular Line connector are named in the operator’s station and exit information.', landmarksSource: operatorStations.A3,
    publicArt: '伽利略與他朋友們留給我的月亮… — 蘇尼爾‧高帝; 城市鄰居 — 賴珮瑜 (years and media: TBC).',
    openingDate: initialOpening, openingSource: dortsRoute,
  },
  A4: {
    structure: 'elevated', structureSource: rbStations, exits: 2,
    platformDetails: 'Elevated five-level side-platform station; track count: TBC.', platformSource: rbStations,
    exitDetails: 'Exit 1 at New Taipei Boulevard Section 4 No. 188; exit 2 on New Taipei Boulevard Section 4 near Zhongxin Street, southwest of the intersection.',
    facilities: 'TYMC publishes an enquiry point in the concourse, drinking water in the unpaid concourse, a paid-zone toilet, two accessible exit lifts, two platform lifts, YouBike and lockers.',
    engineeringHistory: 'The Railway Bureau groups A4 in design contract DE01 and describes its five-level elevated side-platform form.', engineeringHistorySource: rbStations,
    landmarks: 'New Taipei Boulevard Section 4 and Zhongxin Street are named in the operator’s exit descriptions.', landmarksSource: operatorStations.A4,
    publicArt: '幸福之旅 — 任大賢 (year: TBC; medium: TBC).',
    openingDate: initialOpening, openingSource: dortsRoute,
  },
  A5: {
    structure: 'elevated', structureSource: rbStations, exits: 4,
    platformDetails: 'Elevated five-level side-platform station; two tracks.', platformSource: rbStations,
    exitDetails: 'Exits 1, 2 and 3 are grouped at New Taipei Boulevard Section 4 No. 431; exit 4 is on Tailin Road Section 2.',
    facilities: 'TYMC publishes a concourse enquiry point, unpaid-concourse drinking water, a paid-zone toilet, an accessible exit lift at exit 1, two platform lifts and YouBike near exits 2 and 4.',
    engineeringHistory: 'The Railway Bureau groups A5 in design contract DE01 and describes its five-level elevated side-platform form.', engineeringHistorySource: rbStations,
    landmarks: 'New Taipei Boulevard Section 4 and Tailin Road Section 2 are named in the operator’s exit descriptions.', landmarksSource: operatorStations.A5,
    publicArt: 'TBC — no A5 work is listed on TYMC’s checked public-art page.',
    openingDate: initialOpening, openingSource: dortsRoute,
  },
  A6: {
    structure: 'elevated', structureSource: rbStations, exits: 1,
    platformDetails: 'Elevated four-level side-platform station; two tracks.', platformSource: rbStations,
    exitDetails: 'Exit 1 is at New Taipei Boulevard Section 6 No. 460.',
    facilities: 'TYMC publishes a concourse enquiry point, unpaid-concourse drinking water, a paid-zone toilet, one accessible exit lift, two platform lifts and YouBike beside the bicycle parking area at exit 1.',
    engineeringHistory: 'The Railway Bureau groups A6 in design contract DE01 and describes its four-level elevated side-platform form.', engineeringHistorySource: rbStations,
    landmarks: 'New Taipei Boulevard Section 6 is named in the operator’s exit description.', landmarksSource: operatorStations.A6,
    publicArt: 'TBC — no A6 work is listed on TYMC’s checked public-art page.',
    openingDate: initialOpening, openingSource: dortsRoute,
  },
  A7: {
    structure: 'underground', structureSource: rbStations, exits: 2,
    platformDetails: 'Underground two-level side-platform station; two tracks; B1 concourse and B2 platforms.', platformSource: rbStations,
    exitDetails: 'Exit 1 is on the south side of the Wenhua 1st Road–Qingshan Road intersection, toward National Taiwan Sport University and Chang Gung University; exit 2 is on the north side.',
    facilities: 'TYMC publishes a concourse enquiry point, drinking water near exit 2 in the unpaid concourse, a paid-zone toilet, two accessible exit lifts, two platform lifts, YouBike at both exits and lockers.',
    engineeringHistory: 'The Railway Bureau groups A7 with the underground stations in design contract DU01 and describes its two-level side-platform form.', engineeringHistorySource: rbStations,
    landmarks: 'National Taiwan Sport University and Chang Gung University are named in the operator’s exit description.', landmarksSource: operatorStations.A7,
    publicArt: 'TBC — no A7 work is listed on TYMC’s checked public-art page.',
    openingDate: initialOpening, openingSource: dortsRoute,
  },
  A8: {
    structure: 'elevated', structureSource: rbStations, exits: 1,
    platformDetails: 'Elevated three-level station with two island platforms and four tracks. The two middle tracks serve express trains and the two outer tracks serve commuter trains.', platformSource: rbStations,
    exitDetails: 'Exit 1 is at the southeast corner of the Wenhua 1st Road–Fuxing 1st Road intersection.',
    facilities: 'TYMC publishes a concourse enquiry point, unpaid-concourse drinking water, a paid-zone toilet, two accessible exit lifts, platform lifts described as one each to platforms 1/2 and 3/4 but with a stated total of two, YouBike and lockers.',
    engineeringHistory: 'The Railway Bureau groups A8 in design contract DE02 and records the express/commuter track separation in its four-track two-island arrangement.', engineeringHistorySource: rbStations,
    landmarks: 'Chang Gung Memorial Hospital is the operator’s station name; Wenhua 1st Road and Fuxing 1st Road are named in the exit description.', landmarksSource: operatorStations.A8,
    publicArt: '銀河鐵道印記 — Paramodel (year: TBC; medium: TBC).',
    openingDate: initialOpening, openingSource: dortsRoute,
  },
  A9: {
    structure: 'elevated', structureSource: rbStations, exits: 2,
    platformDetails: 'Elevated two-level side-platform station; four tracks. The two middle tracks are express through tracks and the two outer tracks are commuter tracks; space for a future Linkou branch is reserved.', platformSource: rbStations,
    exitDetails: 'Exit 1 is on Bade Road; exit 2 is on Wenhua 3rd Road Section 1.',
    facilities: 'TYMC publishes a concourse enquiry point, unpaid-concourse drinking water, a paid-zone toilet, one accessible exit lift at exit 2, two platform lifts, YouBike at exits 1 and 2 and lockers.',
    engineeringHistory: 'The Railway Bureau groups A9 in design contract DE02 and records the four-track express/commuter arrangement and reserved Linkou branch space.', engineeringHistorySource: rbStations,
    landmarks: 'Linkou Transfer Station and Qingkongshu Building are named in the operator’s YouBike information; Bade Road and Wenhua 3rd Road Section 1 are named in the exit table.', landmarksSource: operatorStations.A9,
    publicArt: '一個自在的游晃 — 豪華朗機工 (year: TBC; medium: TBC).',
    openingDate: initialOpening, openingSource: dortsRoute,
  },
  A10: {
    structure: 'elevated', structureSource: rbStations, exits: 1,
    platformDetails: 'Elevated three-level side-platform station; two tracks.', platformSource: rbStations,
    exitDetails: 'Exit 1 is south of Shanbi Bridge on Nanshan Road.',
    facilities: 'TYMC publishes a concourse enquiry point, unpaid-concourse drinking water, a paid-zone toilet, two platform lifts and YouBike beside Shanbi Fude Temple; exit lift: TBC.',
    engineeringHistory: 'The Railway Bureau groups A10 in design contract DE02 and describes its three-level elevated side-platform form.', engineeringHistorySource: rbStations,
    landmarks: 'Shanbi Bridge and Shanbi Fude Temple are named in the operator’s exit and YouBike information.', landmarksSource: operatorStations.A10,
    publicArt: 'TBC — no A10 work is listed on TYMC’s checked public-art page.',
    openingDate: initialOpening, openingSource: dortsRoute,
  },
  A11: {
    structure: 'elevated', structureSource: rbStations, exits: 1,
    platformDetails: 'Elevated three-level double-island-platform station; four tracks; space for a future freight-park branch is reserved.', platformSource: rbStations,
    exitDetails: 'Exit 1 is southwest of the Kengguo Road intersection.',
    facilities: 'TYMC publishes an accessible exit lift at exit 1, two platform lifts serving platforms 2 and 3, and YouBike in front of the exit.',
    engineeringHistory: 'The Railway Bureau groups A11 in design contract DE02 and records the four-track double-island form and reserved freight-park branch space.', engineeringHistorySource: rbStations,
    landmarks: 'Kengguo Road is named in the operator’s exit description.', landmarksSource: operatorStations.A11,
    publicArt: 'TBC — no A11 work is listed on TYMC’s checked public-art page.',
    openingDate: initialOpening, openingSource: dortsRoute,
  },
  A12: {
    structure: 'underground', structureSource: rbStations, exits: 1,
    platformDetails: 'Underground two-level island-platform station; two tracks; B1 concourse and B2 platforms. The Railway Bureau describes two access points: one directly connected to Terminal 1 and one at the south end of the ground-level parking area.', platformSource: rbStations,
    exitDetails: 'Numbered exit 1 is at Terminal 1 parking lot 1; a separate Airport connector exit reaches the Terminal 1 B2 food court.',
    facilities: 'TYMC publishes two platform lifts serving platforms 1 and 2; the terminal connector is an additional access point.',
    engineeringHistory: 'The Railway Bureau groups A12 in underground design contract DU01 and records its direct Terminal 1 connection and second parking-area access point.', engineeringHistorySource: rbStations,
    landmarks: 'Taoyuan International Airport Terminal 1 and its B2 food court are named in the operator’s exit information.', landmarksSource: operatorStations.A12,
    publicArt: '過境—心航線 — 林俊廷 (year: TBC; medium: TBC).',
    openingDate: initialOpening, openingSource: dortsRoute,
  },
  A13: {
    structure: 'underground', structureSource: rbStations, exits: 1,
    platformDetails: 'Underground side-platform station; two tracks; B2 concourse and luggage facilities, with platforms on B3.', platformSource: rbStations,
    exitDetails: 'Exit 1 is at the southeast side of Terminal 2’s B2 food court.',
    facilities: 'TYMC publishes two platform lifts serving platforms 1 and 2.',
    engineeringHistory: 'The Railway Bureau groups A13 in underground design contract DU01 and records the B2 concourse/luggage level and B3 platforms.', engineeringHistorySource: rbStations,
    landmarks: 'Taoyuan International Airport Terminal 2 and its B2 food court are named in the operator’s exit information.', landmarksSource: operatorStations.A13,
    publicArt: '數位鏡面 — 丹尼爾‧羅森 (year: TBC; medium: TBC).',
    openingDate: initialOpening, openingSource: dortsRoute,
  },
  A14a: {
    structure: 'underground', structureSource: rbStations, exits: 1,
    platformDetails: 'Underground two-level island-platform station; two tracks; B1 concourse and B2 platform. The station has one entrance, an accessible lift, two emergency stairs and ventilation shafts; only commuter trains stop here.', platformSource: rbStations,
    exitDetails: 'Exit 1 is at Airport South Road 1-2.',
    facilities: 'TYMC publishes one accessible platform lift serving platforms 1 and 2.',
    engineeringHistory: 'The Railway Bureau groups A14a in underground design contract DU01 and distinguishes it from the incomplete A14 third-terminal station, which was not a current passenger stop in the checked report.', engineeringHistorySource: rbStations,
    landmarks: 'Airport Hotel and Airport South Road are named in the operator’s station and exit information.', landmarksSource: operatorStations.A14a,
    publicArt: 'TBC — no A14a work is listed on TYMC’s checked public-art page.',
    openingDate: initialOpening, openingSource: dortsRoute,
  },
  A15: {
    structure: 'elevated', structureSource: rbStations, exits: 1,
    platformDetails: 'Elevated two-level side-platform station; two tracks; 87 m long and 24.68 m wide in the Railway Bureau report.', platformSource: rbStations,
    exitDetails: 'Exit 1 is on the east side of Hengnan 1st Road.',
    facilities: 'TYMC publishes a paid-zone toilet, two platform lifts and YouBike beside the taxi stand near exit 1; lockers and exit lift: TBC.',
    engineeringHistory: 'The Railway Bureau groups A15 in design contract DE03 and describes its two-level elevated side-platform form.', engineeringHistorySource: rbStations,
    landmarks: 'Hengnan 1st Road and the station taxi stand are named in the operator’s exit and YouBike information.', landmarksSource: operatorStations.A15,
    publicArt: 'TBC — no A15 work is listed on TYMC’s checked public-art page.',
    openingDate: initialOpening, openingSource: dortsRoute,
  },
  A16: {
    structure: 'elevated', structureSource: rbStations, exits: 1,
    platformDetails: 'Elevated two-level side-platform station; two tracks; 80 m long and 27.7 m wide in the Railway Bureau report.', platformSource: rbStations,
    exitDetails: 'Exit 1 is on the north side of Dazhu South Road.',
    facilities: 'TYMC publishes an enquiry point and drinking water near exit 1 in the unpaid concourse, a paid-zone toilet, two platform lifts and YouBike in front of exit 1.',
    engineeringHistory: 'The Railway Bureau groups A16 in design contract DE03 and describes its two-level elevated side-platform form.', engineeringHistorySource: rbStations,
    landmarks: 'Dazhu South Road is named in the operator’s exit description.', landmarksSource: operatorStations.A16,
    publicArt: 'TBC — no A16 work is listed on TYMC’s checked public-art page.',
    openingDate: initialOpening, openingSource: dortsRoute,
  },
  A17: {
    structure: 'elevated', structureSource: rbStations, exits: 1,
    platformDetails: 'Elevated two-level station with two island platforms and four tracks; 87 m long and 22.42 m wide in the Railway Bureau report.', platformSource: rbStations,
    exitDetails: 'Exit 1 is on the north side of Linghang North Road Section 4.',
    facilities: 'TYMC publishes an enquiry point and drinking water near exit 1 in the unpaid concourse, a paid-zone toilet, two platform lifts serving platforms 2 and 3 and YouBike left of exit 1.',
    engineeringHistory: 'The Railway Bureau groups A17 in design contract DE03 and describes its four-track two-island arrangement.', engineeringHistorySource: rbStations,
    landmarks: 'Linghang North Road Section 4 is named in the operator’s exit description.', landmarksSource: operatorStations.A17,
    publicArt: 'TBC — no A17 work is listed on TYMC’s checked public-art page.',
    openingDate: initialOpening, openingSource: dortsRoute,
  },
  A18: {
    structure: 'underground', structureSource: rbStations, exits: 2,
    platformDetails: 'A mixed station: one underground level and a three-level above-ground structure with side platforms and two tracks. Ground-level exits, level-2 concourse, level-3 platforms and a B1 connector to the High Speed Rail station.', platformSource: rbStations,
    exitDetails: 'Exit 1 is on the east side of HSR North Road Section 1 at Taoyuan HSR station; exit 2 is on the west side at Gloria Outlets.',
    facilities: 'TYMC publishes an enquiry point and drinking water near exit 1, a paid-zone toilet, three accessible exit lifts (two at exit 1 and one at exit 2), two platform lifts, YouBike, lockers and a paid-zone nursing room.',
    interchange: { label: 'Taiwan High Speed Rail; transfer mode: TBC' }, interchangeSource: operatorStations.A18,
    engineeringHistory: 'The Railway Bureau groups A18 in design contract DE03 and records the B1 connector to the High Speed Rail station as part of the mixed underground/above-ground arrangement.', engineeringHistorySource: rbStations,
    landmarks: 'Taoyuan High Speed Rail station and Gloria Outlets are named in the operator’s exit table.', landmarksSource: operatorStations.A18,
    publicArt: '氣門9號律動 — 佛羅里安‧克拉爾 (year: TBC; medium: TBC).',
    openingDate: initialOpening, openingSource: dortsRoute,
  },
  A19: {
    structure: 'elevated', structureSource: rbStations, exits: 1,
    platformDetails: 'Elevated three-level side-platform station; two tracks.', platformSource: rbStations,
    exitDetails: 'Exit 1 is on the west side of HSR South Road Section 2.',
    facilities: 'TYMC publishes an enquiry point and drinking water near the exit in the unpaid concourse, a paid-zone toilet, an accessible exit lift, two platform lifts, YouBike and lockers.',
    engineeringHistory: 'The Railway Bureau groups A19 in design contract DE03 and describes its three-level elevated side-platform form.', engineeringHistorySource: rbStations,
    landmarks: 'Taoyuan Sports Park is the operator’s station name; HSR South Road Section 2 is named in the exit table.', landmarksSource: operatorStations.A19,
    publicArt: 'TBC — no A19 work is listed on TYMC’s checked public-art page.',
    openingDate: initialOpening, openingSource: dortsRoute,
  },
  A20: {
    structure: 'elevated', structureSource: rbStations, exits: 1,
    platformDetails: 'Elevated three-level side-platform station; two tracks.', platformSource: rbStations,
    exitDetails: 'Exit 1 is on the south side of Zhongfeng North Road Section 1.',
    facilities: 'TYMC publishes an enquiry point and drinking water near the exit in the unpaid concourse, a paid-zone toilet, an accessible exit lift, two platform lifts and YouBike at the Zhongfeng North Road–Xingbei 2nd Road intersection.',
    engineeringHistory: 'The Railway Bureau groups A20 in design contract DE03 and describes its three-level elevated side-platform form.', engineeringHistorySource: rbStations,
    landmarks: 'Zhongfeng North Road Section 1 and Xingbei 2nd Road are named in the operator’s exit and YouBike information.', landmarksSource: operatorStations.A20,
    publicArt: 'TBC — no A20 work is listed on TYMC’s checked public-art page.',
    openingDate: initialOpening, openingSource: dortsRoute,
  },
  A21: {
    structure: 'underground', structureSource: rbStations, exits: 1,
    platformDetails: 'Underground two-level island-platform station; two tracks; the Railway Bureau places the Taoyuan bus station on the east side, with B1 concourse and B2 platforms. One ground entrance, an accessible lift, emergency stairs and two ventilation shafts are described.', platformSource: rbStations,
    exitDetails: 'Exit 1 is at the northwest corner of Zhongfeng North Road Section 1 and Huanbei Road.',
    facilities: 'TYMC publishes a central concourse enquiry point, drinking water in the unpaid concourse by the men’s toilet, a non-paid-zone toilet, one accessible exit lift, one platform lift, YouBike and lockers.',
    engineeringHistory: 'The Railway Bureau groups A21 in underground design contract DU01 and records its relationship to the Taoyuan bus station and emergency access.', engineeringHistorySource: rbStations,
    landmarks: 'Taoyuan bus station, Zhongfeng North Road Section 1 and Huanbei Road are named in the operator and Railway Bureau material.', landmarksSource: operatorStations.A21,
    publicArt: 'TBC — no A21 work is listed on TYMC’s checked public-art page.',
    openingDate: initialOpening, openingSource: dortsRoute,
  },
  A22: {
    structure: 'unknown', structureSource: operatorStations.A22, exits: 2,
    platformDetails: 'Station structure, platform form and track count: TBC.', platformSource: operatorStations.A22,
    exitDetails: 'Exit 1 is at the Central West Road–Zhongfeng Road intersection; exit 2 is on Zhongfeng Road.',
    facilities: 'TYMC publishes a concourse enquiry point near exit 1, a drinking-water station near exit 2, a paid-zone toilet, two accessible exit lifts, one platform lift, YouBike and lockers.',
    engineeringHistory: 'A22 is the later Laojie River extension, opened on 31 July 2023. Station-specific construction form and engineering history: TBC.', engineeringHistorySource: motcA22,
    landmarks: 'Central West Road and Zhongfeng Road are named in the operator’s exit table.', landmarksSource: operatorStations.A22,
    publicArt: 'TBC — no A22 work is listed on TYMC’s checked public-art page.',
    openingDate: '31 July 2023', openingSource: motcA22,
  },
}

const allSources = [tdxStations, dortsRoute, dortsA1, rbStations, rbAnnual102, rbAnnual101, rbAirportRisk, publicArt, rbDepots, motcA22, ...Object.values(operatorStations)]
const sourcesById = Object.fromEntries(allSources.map(item => [item.id, item]))

function uniqueSources(ids: string[]): Source[] {
  return ids.filter((id, index) => ids.indexOf(id) === index).map(id => sourcesById[id]).filter(Boolean)
}

function makeResearch(code: string, data: AData): StationResearch {
  const operatorSource = operatorStations[code]
  const interchange = data.interchange ? { ...data.interchange, source: data.interchangeSource?.id ?? operatorSource.id } : undefined
  const sourceIds = [
    operatorSource.id,
    tdxStations.id,
    data.structureSource.id,
    data.platformSource.id,
    data.openingSource.id,
    data.interchangeSource?.id,
    data.engineeringHistorySource.id,
    data.landmarksSource.id,
    rbAnnual102.id,
    rbAnnual101.id,
    rbAirportRisk.id,
    rbDepots.id,
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
    facilitiesSource: operatorSource.id,
    depot: 'Qingpu and Luzhu maintenance depots serve the Airport MRT; station-level operating roster allocation: TBC.',
    depotSource: rbDepots.id,
    publicArt: data.publicArt,
    publicArtSource: publicArt.id,
    naming: tbc,
    namingSource: operatorSource.id,
    engineeringHistory: data.engineeringHistory,
    engineeringHistorySource: data.engineeringHistorySource.id,
    landmarks: data.landmarks,
    landmarksSource: data.landmarksSource.id,
  }
}

const stationProse: Record<string, StationProseSentence[]> = {
  A1: [
    { text: 'DORTS records one design package, DA115, for the Taipei section and names CA441A, CA450A, CA450B, CA384, CA386 and CA441H as the construction packages for the diaphragm wall, route, station body, building services, lifts and escalators, and architectural fit-out.', source: dortsA1.id },
    { text: 'The Railway Bureau separately describes the A2-A1 civil works as a three-lot package entrusted to Taipei City, so that three-lot description and DORTS six named packages are retained as records made at different scopes.', source: rbAnnual102.id },
    { text: 'The Taipei section is approximately 4.4 kilometres and includes one underground station, a storage area and a joint-development structural body, according to DORTS project description.', source: dortsA1.id },
    { text: 'The 102 annual report also lists a dedicated ME01 A1 station systems supervision check.', source: rbAnnual102.id },
    { text: 'The checked DORTS project page and annual report do not publish a station-level final civil account or a complete award-value table for these packages, so those details remain TBC.', source: dortsA1.id },
    { text: 'Taipei City argued that an elevated Airport MRT would damage the urban landscape and land use, then offered to cover the added cost of putting the A2–A1 section underground as it entered the city.', source: dortsA1.id },
    { text: 'The Taipei approach runs from the A2 tail tracks beside the flood embankment, dives underground after Zhongxing Bridge, passes beneath Zhongxiao Bridge and the Tamsui River, and reaches the C1/D1 site after crossing the civic-centre fabric and meeting Beimen Station.', source: dortsA1.id },
    { text: 'Because four of the six required cross-passages lay beneath the Tamsui River, DORTS selected a double-O tunnel shield in place of the riskier single-bore arrangement; it records this as the first domestic use of the DOT method.', source: dortsA1.id },
    { text: 'TYMC’s art map places 天地之窗 and 遊子之鏡 in the unpaid concourse, ‘紛紛從田裡飛起’ in the B1 pick-up area, 宇宙 beside the bamboo-and-water stair, and 遠山無盡碧層層 by the escalator toward Taipei Metro Beimen Station.', source: publicArt.id },
  ],
  A2: [
    { text: 'The Railway Bureau CE01B civil package covers the viaduct, the elevated A2-A4 stations and their water, electrical and environmental-control works.', source: rbAnnual102.id },
    { text: 'By the end of the 102 reporting year, CE01B station fit-out was complete, and the under-viaduct land around the A2-O5 connecting bridge had been returned for use after the bridge works.', source: rbAnnual102.id },
    { text: 'The report records water, electrical and environmental-control equipment installation and single-machine testing as complete, with building-management-system integration carried out on 1 April and CE01B progress at 99.97 percent at year-end.', source: rbAnnual102.id },
    { text: 'The same report does not identify a CE01B contractor, a station-only contract value or a final account for A2, so those fields remain TBC.', source: rbAnnual102.id },
    { text: 'A2 occupies the road over the 12th floodway embankment at the MRT Road–Shuhong East Road junction, making it the first elevated Airport MRT station encountered when travelling from Taipei toward the airport.', source: rbStations.id },
    { text: 'The Railway Bureau calls the station “Taipei’s gate”: its light tubular form and changing solid-to-void façade were intended to suggest flight and point travellers toward the airport, while its ground-level entrances are shared with Taipei Metro O5.', source: rbStations.id },
    { text: 'TYMC places 夢想與回憶的輸送帶 on the south-side machinery building at the platform level; the checked art page does not state its year, medium, selection method or cost.', source: publicArt.id },
  ],
  A3: [
    { text: 'A3 is part of the Railway Bureau CE01B civil package, whose scope combines the viaduct, elevated A2-A4 stations and station water, electrical and environmental-control systems.', source: rbAnnual102.id },
    { text: 'The 102 annual report says the completed under-viaduct P301-P324 area was handed over for the New Taipei Northern Knowledge Industrial Park, documenting a corridor-level land use around the elevated section rather than a passenger facility inside A3.', source: rbAnnual102.id },
    { text: 'CE01B had completed station fit-out and reached 99.97 percent progress at the end of that reporting year, while its installed equipment was being checked and integrated with the building-management system.', source: rbAnnual102.id },
    { text: 'The report does not publish the CE01B contractor, its award value or a final civil account attributable to A3, so those details are TBC.', source: rbAnnual102.id },
    { text: 'A3 was positioned at the northwest corner of Zhongshan Road and Wugong Road to meet the Circular Line, and the Railway Bureau assigns the interchange station the additional role of city check-in and baggage drop-off for airport passengers.', source: rbStations.id },
    { text: 'Its architecture continues A2’s flight vocabulary but changes the image to the twin wings of an aircraft, a response to a site that had to handle both transfers and airport-bound passenger processing.', source: rbStations.id },
    { text: 'TYMC places 伽利略與他朋友們留給我的月亮… in the paid concourse and 城市鄰居 on the curved glass wall at the entrance; the checked art page does not state their years, media, selection methods or costs.', source: publicArt.id },
  ],
  A4: [
    { text: 'The annual record supplies these package-level milestones rather than an A4-specific opening, contractor or cost date, so those station-level details remain TBC.', source: rbAnnual102.id },
    { text: 'The Railway Bureau places A4 inside CE01B, a civil package covering the viaduct, elevated A2-A4 stations and their water, electrical and environmental-control works.', source: rbAnnual102.id },
    { text: 'The annual report records completed CE01B station fit-out and the handover of the P301-P324 under-viaduct area for the New Taipei Northern Knowledge Industrial Park, a land-use outcome along the shared elevated corridor.', source: rbAnnual102.id },
    { text: 'It also records completed single-machine checks for the installed services, building-management-system integration on 1 April and 99.97 percent CE01B progress at the end of the 102 reporting year.', source: rbAnnual102.id },
    { text: 'No CE01B contractor, station-only award value or A4 final civil account is published in the checked annual report, leaving those details TBC.', source: rbAnnual102.id },
    { text: 'A4 was set about 250 metres east of the Zhongshan Road Section 1–Xinwu Road junction, across from the Xinzhuang subcenter rather than directly at the intersection.', source: rbStations.id },
    { text: 'Its entrance bridge crosses beneath the Zhongshan Road viaduct to reach the subcenter, and the Railway Bureau describes the bridge’s ribbon-like language as a “Starlight Avenue” linking the district’s emerging film and media industry.', source: rbStations.id },
    { text: 'TYMC places 幸福之旅 across the north–south platforms on the second-floor connector and fifth-floor platform levels; the checked art page does not state its year, medium, selection method or cost.', source: publicArt.id },
  ],
  A5: [
    { text: 'The Railway Bureau CE01C civil package covers the viaduct, elevated A5-A6 stations and their water, electrical and environmental-control works.', source: rbAnnual102.id },
    { text: 'During the 102 reporting year, CE01C station fit-out was complete, and the report records partial final acceptance for A5/A6 landscape and planting works.', source: rbAnnual102.id },
    { text: 'The same package included cleaning and handover of an existing road-crossing drainage culvert on Zhongshan Road between Minsheng Road and Taili Street within the Taishan District Office area.', source: rbAnnual102.id },
    { text: 'Its installed services had completed single-machine testing by 31 January and building-management-system integration by 25 February; A5/A6 fire-safety acceptance was recorded on 24 October, with CE01C progress at 99.98 percent at year-end.', source: rbAnnual102.id },
    { text: 'The report does not publish a CE01C contractor, a station-only award value or a final civil account for A5, so those details remain TBC.', source: rbAnnual102.id },
    { text: 'A5 follows the shared Taiwan Route 1 corridor at the east side of the Zhongshan Road–Tailin Road junction, where the platform structure was integrated with the road viaduct rather than treated as a separate station frame.', source: rbStations.id },
    { text: 'The Railway Bureau groups A5 with A6 as standard DE01 stations: nearby high-rise housing gives the corridor an urban-edge character, while the architecture responds with forms that echo surrounding hills, bring light into the pedestrian flow and leave an open ground plaza for public use.', source: rbStations.id },
  ],
  A6: [
    { text: 'The Railway Bureau groups A6 in CE01C, whose civil scope includes the shared viaduct, the elevated A5-A6 stations and their water, electrical and environmental-control systems.', source: rbAnnual102.id },
    { text: 'The 102 annual report records completed station fit-out for CE01C and partial final acceptance of the A5/A6 landscape and planting works, extending the station\'s public realm beyond the elevated platform structure.', source: rbAnnual102.id },
    { text: 'It also records cleaning and handover of an existing road-crossing drainage culvert on the Zhongshan Road section between Minsheng Road and Taili Street within Taishan District, a utility task associated with the corridor rather than a new passenger feature.', source: rbAnnual102.id },
    { text: 'CE01C services completed single-machine testing by 31 January and building-management-system integration by 25 February, while A5/A6 fire-safety acceptance was recorded on 24 October and year-end progress stood at 99.98 percent.', source: rbAnnual102.id },
    { text: 'No CE01C contractor, station-only award value or final civil account for A6 is published in the checked report, so those details are TBC.', source: rbAnnual102.id },
    { text: 'A6 continues the Taiwan Route 1/road-viaduct arrangement to the east side of the Zhongshan Road–Guiyang Street junction, so its station structure shares the highway corridor that also carries A5.', source: rbStations.id },
    { text: 'The Railway Bureau describes A5 and A6 as stations on the metropolitan fringe, beside substantial high-rise housing but still reading as an edge suburb; their hill-like forms, daylight and open ground plazas were intended to soften that infrastructure for local residents.', source: rbStations.id },
  ],
  A7: [
    { text: 'The 101 record treats the remaining station landscaping as a later task and does not provide an A7-specific planting completion date.', source: rbAnnual101.id },
    { text: 'The Railway Bureau assigns A7 to CU01, whose scope included the underground station, a 940-metre cut-and-cover tunnel section and a 170-metre excavation section, together with civil, water and environmental-control work.', source: rbAnnual101.id },
    { text: 'The 101 annual report says the cut-and-cover and excavation works and the station main structure were complete, while station fit-out and water and environmental-control equipment installation were still being finished.', source: rbAnnual101.id },
    { text: 'That work also included completion checks for water-soil-conservation measures, restoration of site roads and removal of surplus excavated material to Taipei Port for fill.', source: rbAnnual101.id },
    { text: 'CU01 had completed single-machine testing by the end of the 101 reporting year and was continuing building-management-system integration and preparation for low-voltage power supply, with 99.58 percent progress at year-end.', source: rbAnnual101.id },
    { text: 'The 102 annual report later lists A7 among the stations whose fire-safety completion inspection had been accepted by the competent authority.', source: rbAnnual102.id },
    { text: 'The checked annual reports name the CU01 scope and progress but do not publish its station-level contractor, award value or final account, so those details remain TBC.', source: rbAnnual101.id },
    { text: 'The Railway Bureau places A7 on Wenhua 1st Road with the Linkou multi-purpose sports park to the south and Hwaya Industrial Park reachable to the west, recording the two destinations as the station’s surrounding context.', source: rbStations.id },
  ],
  A8: [
    { text: 'The Railway Bureau assigns A8 to CE02, a package covering four elevated stations from A8 through A11, the A9a emergency stopping platform, 14 kilometres of elevated route and two trackside traction substations.', source: rbAnnual102.id },
    { text: 'The 102 report records package-level road restoration, water-soil-conservation work, station architectural fit-out, and installation and testing of the water and environmental-control systems across this elevated corridor.', source: rbAnnual102.id },
    { text: 'It also records additional wind-and-rain protection and maintenance-climbing-ladder work as changes within the CE02 scope, rather than as a new station interchange or passenger service.', source: rbAnnual102.id },
    { text: 'A8 appears in the report\'s list of stations with an accepted fire-safety completion inspection, while CE02 stood at 99.98 percent progress at the end of the 102 reporting year.', source: rbAnnual102.id },
    { text: 'The annual report does not identify the CE02 contractor, a station-only award value or a final civil account for A8, so those details are TBC.', source: rbAnnual102.id },
    { text: 'A8 stands at the Wenhua 1st Road–Fuxing 1st Road junction in the Linkou area that the Railway Bureau identifies as a dense transport and commercial centre, with joint development intended to connect the station to the surrounding business district.', source: rbStations.id },
    { text: 'The Railway Bureau says the entrance land and its adjoining parcel were planned as a shared development, with the entrance at the co-developed building’s ground floor and the connecting facilities on its second floor.', source: rbStations.id },
    { text: 'TYMC places 銀河鐵道印記 by Paramodel on the second-floor concourse; the checked art page does not state its year, medium, selection method or cost.', source: publicArt.id },
  ],
  A9: [
    { text: 'A9 is one of the four elevated stations and one emergency stopping platform included in CE02, whose package also covered 14 kilometres of elevated route and two trackside traction substations.', source: rbAnnual102.id },
    { text: 'The Railway Bureau\'s 102 land-development record gives the A9 joint-development base about 0.4914 hectares and says the entrance was co-constructed with the adjoining development parcel.', source: rbAnnual102.id },
    { text: 'It records a building permit on 5 September 2012, a land-development trust contract on 30 October 2012 and handover of the co-constructed MRT facilities to the developer on 17 January 2013 for follow-on work.', source: rbAnnual102.id },
    { text: 'CE02 later appears in the 102 report with corridor-level road restoration, water-soil-conservation, fit-out, equipment installation and testing work, and A9 is listed among the stations with accepted fire-safety completion inspection.', source: rbAnnual102.id },
    { text: 'The checked annual report does not publish the CE02 contractor, a station-only award value or a final civil account for A9, so those details remain TBC.', source: rbAnnual102.id },
    { text: 'A9 was sited at the Wenhua 3rd Road–Bade Road junction beside the highway, with the entrance parcel and adjoining land planned for joint development as part of the same Linkou commercial-centre strategy as A8.', source: rbStations.id },
    { text: 'The Railway Bureau also records reserved space for a future Linkou branch, leaving the station’s structure prepared for a connection that was not part of the operating route described by the report.', source: rbStations.id },
    { text: 'TYMC places 一個自在的游晃 by 豪華朗機工 on the ceiling of the ground-floor entrance hall; the checked art page does not state its year, medium, selection method or cost.', source: publicArt.id },
  ],
  A10: [
    { text: 'The annual record describes CE02 package completion and does not provide a separate A10 handover date.', source: rbAnnual102.id },
    { text: 'The Railway Bureau places A10 in CE02, the package for the A8-A11 elevated stations, A9a emergency stopping platform, 14 kilometres of elevated route and two trackside traction substations.', source: rbAnnual102.id },
    { text: 'The package-level 102 work programme included road restoration, water-soil-conservation measures, station architectural fit-out, and installation and testing of water and environmental-control equipment along the elevated corridor.', source: rbAnnual102.id },
    { text: 'The same report records additional drainage construction within Luzhu Township and safety fencing at roads crossing the elevated line, but it does not assign either item to A10 alone.', source: rbAnnual102.id },
    { text: 'CE02 stood at 99.98 percent progress at the end of the 102 reporting year, and A10 appears in the earlier station list for accepted fire-safety completion inspection.', source: rbAnnual102.id },
    { text: 'The annual reports do not publish the CE02 contractor, a station-only award value or a final civil account for A10, so those details are TBC.', source: rbAnnual102.id },
    { text: 'The source material therefore establishes shared CE02 corridor work around A10 but does not establish a station-specific incident, renaming date or separate civil completion value.', source: rbAnnual102.id },
    { text: 'The Railway Bureau groups A10 with A11 along the 赤塗崎溪 woodland landscape and Luzhu’s agricultural fields, calling this rural, open and green stretch a key section of the line’s “green corridor”.', source: rbStations.id },
  ],
  A11: [
    { text: 'A11 is included in CE02 with A8-A10 and the A9a emergency stopping platform, a package covering 14 kilometres of elevated route and two trackside traction substations as well as the stations.', source: rbAnnual102.id },
    { text: 'The Railway Bureau reports that CE02 work included road restoration, water-soil-conservation measures, station fit-out, equipment installation and system testing across the shared elevated section.', source: rbAnnual102.id },
    { text: 'For the Luzhu part of the package it records added drainage works, safety fencing at crossing roads, a drainage ditch on a land-rights section and changes to station wind-and-rain protection and maintenance ladders.', source: rbAnnual102.id },
    { text: 'A11 is named in the report\'s station imagery and CE02 reached 99.98 percent progress at the end of the 102 reporting year, but that figure is package progress rather than an A11-only measure.', source: rbAnnual102.id },
    { text: 'The checked annual reports do not publish the CE02 contractor, a station-only award value or a final civil account for A11, so those details remain TBC.', source: rbAnnual102.id },
    { text: 'The shared-package records do not establish a station-specific construction incident, renaming date or separate completion value for A11.', source: rbAnnual102.id },
    { text: 'A11 was placed on the west side of Kengguo Road within the same Luzhu rural corridor, but the Railway Bureau also identifies it as the access station for the Airport MRT’s Luzhu maintenance depot.', source: rbStations.id },
    { text: 'The depot connection was kept in the station planning: the report says the existing depot access track leaves space for a possible freight-park branch, with the station able to develop into a freight-business and commuter-transfer point.', source: rbStations.id },
  ],
  A12: [
    { text: 'The Railway Bureau assigns A12 to CU02 for station structure, architectural fit-out and water works, a package covering the four underground stations from A12 through A14a; in the 101 report, its structures were complete, architectural work was nearly 90 percent complete, and installed water and environmental-control equipment had completed single-machine testing.', source: rbAnnual101.id },
    { text: 'CU02A separately covered the airport underground section from A12 to A14a, the adjacent cut-and-cover works and deep excavation, retaining and support, shield tunnelling, internal tunnel structure, and expansion of an existing tunnel co-constructed with the east parking area of Terminal 2.', source: rbAnnual101.id },
    { text: 'The 5,520-metre CU02A work was accepted by the Railway Bureau on 25 September 2012, so the source records acceptance of the package rather than a claim that every later station fit-out item was complete on that date.', source: rbAnnual101.id },
    { text: 'The Railway Bureau\'s airport-risk paper describes the underground airport section as using shield tunnels and cut-and-cover structures beneath sensitive runways and the control-tower zone, with the east runway lying 48 metres along the A12-to-emergency-exit section.', source: rbAirportRisk.id },
    { text: 'For A12-A14a, that paper records a 0.3-to-1.0-metre red-soil surface layer over 10-to-40 metres of gravel-bearing strata and a groundwater level approximately 3 to 10 metres below ground, conditions that shaped the monitoring requirement.', source: rbAirportRisk.id },
    { text: 'A12 is also listed in the 102 annual report among stations with accepted fire-safety completion inspection, while the checked reports do not publish a CU02 or CU02A contractor, station-only award value or final A12 civil account, so those details remain TBC.', source: rbAnnual102.id },
    { text: 'A12 lies beneath Terminal South Road on the southeast side of Terminal 1, where the Railway Bureau’s national-gateway improvement project placed one entrance directly inside the terminal and the other at the south end of its surface car park.', source: rbStations.id },
    { text: 'The report therefore records two deliberately separate airport approaches: an indoor terminal connection and a second access point at the south end of the surface car park.', source: rbStations.id },
    { text: 'TYMC places 過境—心航線 by 林俊廷 on the wall of the passage from the fare gates to the terminal; the checked art page does not state its year, medium, selection method or cost.', source: publicArt.id },
  ],
  A13: [
    { text: 'A13 was structurally reserved when Terminal 2 was built, and the Railway Bureau records that it served as the Airport MRT’s temporary express terminus and baggage-processing station until the third terminal and A14 were ready.', source: rbStations.id },
    { text: 'The station’s baggage role is built into the design record: the concourse level includes the baggage-processing area, while the lower platform level includes a dedicated baggage-train platform.', source: rbStations.id },
    { text: 'TYMC places 數位鏡面 by Daniel Rosen in the main public area of Terminal 2’s B2 concourse; the checked art page does not state its year, medium, selection method or cost.', source: publicArt.id },
  ],
  A14a: [
    { text: 'A14a was added beside the China Airlines Park airport transit hotel as part of the Taoyuan International Airport China Airlines Park plan, giving the hotel complex its own Airport MRT access rather than treating it as a terminal extension.', source: rbStations.id },
    { text: 'The Railway Bureau’s airport-station brief groups A14a with the terminal stations as direct links into the airport precinct, while the operating record distinguishes it by stopping only ordinary trains.', source: rbStations.id },
  ],
  A15: [
    { text: 'The Railway Bureau locates A15 near National Freeway 2’s Dayuan interchange and Hengnan Road, in rural fields close to Taoyuan International Airport.', source: rbStations.id },
  ],
  A16: [
    { text: 'A16 sits in the fields near Dayuan’s Hengshan community and Ziqiang Bridge; the Railway Bureau describes it as the outward-transport interchange for the Dayuan area.', source: rbStations.id },
  ],
  A17: [
    { text: 'A17 is part of the Taoyuan HSR station special district, which the Railway Bureau describes as a development centre for a future new town.', source: rbStations.id },
  ],
  A18: [
    { text: 'A18 was placed north of the Taoyuan HSR station beside HSR North Road so the Airport MRT could turn the HSR–airport connection into a major gateway for Taoyuan, with a below-ground link between the two stations.', source: rbStations.id },
    { text: 'The Railway Bureau’s DE03 design concept treats the line’s two travel directions as an upward and downward movement, using staggered platforms and open roof geometry to express the pull of trains moving toward and away from the airport.', source: rbStations.id },
    { text: 'TYMC places 氣門9號律動 by Florian Claar on the plaza between A18 and the HSR station; the checked art page does not state its year, medium, selection method or cost.', source: publicArt.id },
  ],
  A19: [
    { text: 'A19 lies in the Taoyuan HSR station special district on HSR South Road, within the future-new-town development area identified by the Railway Bureau.', source: rbStations.id },
    { text: 'The station-front plaza on the planned-road side was designed as the transition and connection between the bus stop and Airport MRT, while also separating pedestrian and vehicle movements and providing a gathering and disaster-prevention space.', source: rbStations.id },
  ],
  A20: [
    { text: 'A20 stands on Zhongfeng North Road at the edge of Zhongli, which the Railway Bureau describes as the hinterland of future urban expansion and an outward-transport hub.', source: rbStations.id },
    { text: 'Its entrances are coordinated with an open-space system and planted buffer strips; the high-ceiling station uses a windmill paving image with the columns to give the space a local design motif.', source: rbStations.id },
  ],
  A21: [
    { text: 'A21 was built as the Airport MRT’s phased terminus, with the Railway Bureau recording a planned extension to Zhongli that would connect with Taiwan Railways and future Taoyuan Metro transfers.', source: rbStations.id },
    { text: 'Its underground station design uses the memory of a suitcase as its organising theme, distributing ideas of drifting, movement, time, rest and nature through the architecture and public art.', source: rbStations.id },
  ],
  A22: [
    { text: 'A22 is the first built stage of the Airport MRT extension from A21 toward Zhongli; the Ministry says the extension required changes to the track alignment and station configuration to coordinate with the Taoyuan railway-undergrounding project.', source: motcA22.id },
    { text: 'The Ministry records construction difficulties specific to this extension: COVID-19 affected overseas electrical and mechanical suppliers, while integrating the new section’s signalling with the existing system created technical difficulty and lengthened testing.', source: motcA22.id },
    { text: 'The same announcement describes A22 as a step toward a future A23 connection with the underground Zhongli railway station and a planned Green Line extension transfer.', source: motcA22.id },
  ],
}

export const AIRPORT_MRT_OVERLAY: Record<string, StationOverlay> = Object.fromEntries(
  Object.entries(aData).map(([code, data]) => {
    const research = makeResearch(code, data)
    return [code, { structure: data.structure, exits: data.exits, research, sources: research.sources, prose: stationProse[code] ?? [] }]
  }),
) as Record<string, StationOverlay>
