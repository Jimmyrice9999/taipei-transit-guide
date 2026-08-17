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
  'The Ministry’s full announcement records the opening of the A22 Laojie River extension on 31 July 2023.',
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

const allSources = [tdxStations, dortsRoute, dortsA1, rbStations, publicArt, rbDepots, motcA22, ...Object.values(operatorStations)]
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
    { text: 'Taipei City argued that an elevated Airport MRT would damage the urban landscape and land use, then offered to cover the added cost of putting the A2–A1 section underground as it entered the city.', source: dortsA1.id },
    { text: 'The Taipei approach runs from the A2 tail tracks beside the flood embankment, dives underground after Zhongxing Bridge, passes beneath Zhongxiao Bridge and the Tamsui River, and reaches the C1/D1 site after crossing the civic-centre fabric and meeting Beimen Station.', source: dortsA1.id },
    { text: 'Because four of the six required cross-passages lay beneath the Tamsui River, DORTS selected a double-O tunnel shield in place of the riskier single-bore arrangement; it records this as the first domestic use of the DOT method.', source: dortsA1.id },
    { text: 'TYMC’s art map places 天地之窗 and 遊子之鏡 in the unpaid concourse, ‘紛紛從田裡飛起’ in the B1 pick-up area, 宇宙 beside the bamboo-and-water stair, and 遠山無盡碧層層 by the escalator toward Taipei Metro Beimen Station.', source: publicArt.id },
  ],
  A2: [
    { text: 'A2 occupies the road over the 12th floodway embankment at the MRT Road–Shuhong East Road junction, making it the first elevated Airport MRT station encountered when travelling from Taipei toward the airport.', source: rbStations.id },
    { text: 'The Railway Bureau calls the station “Taipei’s gate”: its light tubular form and changing solid-to-void façade were intended to suggest flight and point travellers toward the airport, while its ground-level entrances are shared with Taipei Metro O5.', source: rbStations.id },
    { text: 'TYMC places 夢想與回憶的輸送帶 on the south-side machinery building at the platform level; the checked art page does not state its year, medium, selection method or cost.', source: publicArt.id },
  ],
  A3: [
    { text: 'A3 was positioned at the northwest corner of Zhongshan Road and Wugong Road to meet the Circular Line, and the Railway Bureau assigns the interchange station the additional role of city check-in and baggage drop-off for airport passengers.', source: rbStations.id },
    { text: 'Its architecture continues A2’s flight vocabulary but changes the image to the twin wings of an aircraft, a response to a site that had to handle both transfers and airport-bound passenger processing.', source: rbStations.id },
    { text: 'TYMC places 伽利略與他朋友們留給我的月亮… in the paid concourse and 城市鄰居 on the curved glass wall at the entrance; the checked art page does not state their years, media, selection methods or costs.', source: publicArt.id },
  ],
  A4: [
    { text: 'A4 was set about 250 metres east of the Zhongshan Road Section 1–Xinwu Road junction, across from the Xinzhuang subcenter rather than directly at the intersection.', source: rbStations.id },
    { text: 'Its entrance bridge crosses beneath the Zhongshan Road viaduct to reach the subcenter, and the Railway Bureau describes the bridge’s ribbon-like language as a “Starlight Avenue” linking the district’s emerging film and media industry.', source: rbStations.id },
    { text: 'TYMC places 幸福之旅 across the north–south platforms on the second-floor connector and fifth-floor platform levels; the checked art page does not state its year, medium, selection method or cost.', source: publicArt.id },
  ],
  A5: [
    { text: 'A5 follows the shared Taiwan Route 1 corridor at the east side of the Zhongshan Road–Tailin Road junction, where the platform structure was integrated with the road viaduct rather than treated as a separate station frame.', source: rbStations.id },
    { text: 'The Railway Bureau groups A5 with A6 as standard DE01 stations: nearby high-rise housing gives the corridor an urban-edge character, while the architecture responds with forms that echo surrounding hills, bring light into the pedestrian flow and leave an open ground plaza for public use.', source: rbStations.id },
  ],
  A6: [
    { text: 'A6 continues the Taiwan Route 1/road-viaduct arrangement to the east side of the Zhongshan Road–Guiyang Street junction, so its station structure shares the highway corridor that also carries A5.', source: rbStations.id },
    { text: 'The Railway Bureau describes A5 and A6 as stations on the metropolitan fringe, beside substantial high-rise housing but still reading as an edge suburb; their hill-like forms, daylight and open ground plazas were intended to soften that infrastructure for local residents.', source: rbStations.id },
  ],
  A7: [
    { text: 'The Railway Bureau places A7 on Wenhua 1st Road with the Linkou multi-purpose sports park to the south and Hwaya Industrial Park reachable to the west, recording the two destinations as the station’s surrounding context.', source: rbStations.id },
  ],
  A8: [
    { text: 'A8 stands at the Wenhua 1st Road–Fuxing 1st Road junction in the Linkou area that the Railway Bureau identifies as a dense transport and commercial centre, with joint development intended to connect the station to the surrounding business district.', source: rbStations.id },
    { text: 'The Railway Bureau says the entrance land and its adjoining parcel were planned as a shared development, with the entrance at the co-developed building’s ground floor and the connecting facilities on its second floor.', source: rbStations.id },
    { text: 'TYMC places 銀河鐵道印記 by Paramodel on the second-floor concourse; the checked art page does not state its year, medium, selection method or cost.', source: publicArt.id },
  ],
  A9: [
    { text: 'A9 was sited at the Wenhua 3rd Road–Bade Road junction beside the highway, with the entrance parcel and adjoining land planned for joint development as part of the same Linkou commercial-centre strategy as A8.', source: rbStations.id },
    { text: 'The Railway Bureau also records reserved space for a future Linkou branch, leaving the station’s structure prepared for a connection that was not part of the operating route described by the report.', source: rbStations.id },
    { text: 'TYMC places 一個自在的游晃 by 豪華朗機工 on the ceiling of the ground-floor entrance hall; the checked art page does not state its year, medium, selection method or cost.', source: publicArt.id },
  ],
  A10: [
    { text: 'The Railway Bureau groups A10 with A11 along the 赤塗崎溪 woodland landscape and Luzhu’s agricultural fields, calling this rural, open and green stretch a key section of the line’s “green corridor”.', source: rbStations.id },
  ],
  A11: [
    { text: 'A11 was placed on the west side of Kengguo Road within the same Luzhu rural corridor, but the Railway Bureau also identifies it as the access station for the Airport MRT’s Luzhu maintenance depot.', source: rbStations.id },
    { text: 'The depot connection was kept in the station planning: the report says the existing depot access track leaves space for a possible freight-park branch, with the station able to develop into a freight-business and commuter-transfer point.', source: rbStations.id },
  ],
  A12: [
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
}

export const AIRPORT_MRT_OVERLAY: Record<string, StationOverlay> = Object.fromEntries(
  Object.entries(aData).map(([code, data]) => {
    const research = makeResearch(code, data)
    return [code, { structure: data.structure, exits: data.exits, research, sources: research.sources, prose: stationProse[code] ?? [] }]
  }),
) as Record<string, StationOverlay>
