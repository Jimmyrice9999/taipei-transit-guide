import type { Source } from './sources.ts'
import type { StationOverlay, StationProseSentence, Structure } from './station-overlay.ts'
import type { StationResearch } from './station-research.ts'

const accessed = '2026-08-14'
const trtcPublisher = 'Taipei Rapid Transit Corporation (臺北大眾捷運股份有限公司)'
const dortsPublisher = 'Taipei City Department of Rapid Transit Systems (臺北市政府捷運工程局)'

function source(
  id: string,
  title: string,
  titleOriginal: string,
  publisher: string,
  url: string,
  note: string,
  sourceAccessed = accessed,
): Source {
  return {
    id,
    title,
    titleOriginal,
    publisher,
    url,
    accessed: sourceAccessed,
    snapshot: '',
    snapshotAlt: '',
    kind: 'primary',
    lang: 'zh-Hant',
    note,
  }
}

const dortsRoute = source(
  'dorts-tamsui-xinyi-route',
  'Tamsui–Xinyi Line route and stations',
  '淡水信義線',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=0AC527D5FC9E596A&s=A60BB323F07BC768',
  'The builder’s full route page publishes the line’s mixed guideway, station sequence, station table, interchanges and opening chronology.',
)

const dortsXinyi = source(
  'dorts-xinyi-extension',
  'Xinyi Line extension project',
  '信義線東延段',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=0ac527d5fc9e596a&s=CB7BC86DBDA1E44D',
  'The project page says the CKS Memorial Hall–Xiangshan section has seven underground stations and opened on 24 November 2013.',
)

const dortsStationArchitecture = source(
  'dorts-tamsui-xinyi-station-architecture',
  'Tamsui–Xinyi Line station architectural design',
  '捷運工程叢書 精進版－34 捷運高架車站建築造型設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page41.html',
  'The full engineering-book page distinguishes the underground, elevated and ground-level station groups on the line.',
)

const dortsYuanshanToBeitou = source(
  'dorts-tamsui-xinyi-stations-architecture',
  'Tamsui–Xinyi Line elevated station architecture',
  '捷運工程叢書 精進版－34 捷運高架車站建築造型設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page43.html',
  'The full engineering-book pages document the elevated layouts, exit additions and special structural designs at the northern Taipei stations.',
)

const dortsShilinToXinbeitou = source(
  'dorts-tamsui-xinyi-northern-stations',
  'Tamsui–Xinyi Line northern station architecture',
  '捷運工程叢書 精進版－34 捷運高架車站建築造型設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page45.html',
  'The full engineering-book page documents Qilian, Qiyan, Beitou and Xinbeitou platform and exit arrangements.',
)

const dortsTamsui = source(
  'dorts-tamsui-station-architecture',
  'Tamsui station architectural design',
  '捷運工程叢書 精進版－34 捷運高架車站建築造型設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page46.html',
  'The full engineering-book page documents Tamsui terminal’s elevated island platform and later-added exits.',
)

const dortsSpecialArchitecture = source(
  'dorts-tamsui-xinyi-special-architecture',
  'Special architectural structures on the Tamsui–Xinyi Line',
  '捷運工程叢書 精進版－34 捷運高架車站建築造型設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page50.html',
  'The full engineering-book page documents Jiantan’s suspended roof, Beitou’s space truss and Tamsui’s reuse of the old TRA setting.',
)

const dortsDepot = source(
  'dorts-tamsui-xinyi-depot',
  'Tamsui–Xinyi Line depot planning',
  '捷運工程叢書 精進版－27 捷運機廠規劃與設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no27/files/basic-html/page27.html',
  'The full engineering-book page identifies Beitou Depot as the line’s main depot and gives its location in northern Beitou.',
)

const art = {
  shuanglian: source(
    'dorts-art-shuanglian',
    'Shuanglian station public art',
    '雙連‧行遠',
    dortsPublisher,
    'https://www.dorts.gov.taipei/cp.aspx?n=2E32DBDC65CAA983&s=DE643CF3F6E0171F',
    'The official public-art page identifies 雙連‧行遠, its artists, enamel-panel medium and 16 September 1996 completion date.',
  ),
  ntuHospital: source(
    'dorts-art-ntu-hospital',
    'NTU Hospital station public art',
    '手之組曲',
    dortsPublisher,
    'https://www.dorts.gov.taipei/cp.aspx?n=2E32DBDC65CAA983&s=C32B3BEE19B6BC1F',
    'The official public-art page identifies 手之組曲, 李光裕, its copper and granite materials, platform location and November 1998 completion.',
  ),
  daanPark: source(
    'dorts-art-daan-park',
    'Daan Park station public art',
    '大安之花、秋葉旅人、春光乍現、四季',
    dortsPublisher,
    'https://www.dorts.gov.taipei/cp.aspx?n=2E32DBDC65CAA983&s=36B82FCFF7957990',
    'The official public-art page identifies four Daan Park station works, their artists, materials and locations; it does not publish completion years for these entries.',
  ),
  daan: source(
    'dorts-art-daan',
    'Daan station public art',
    '飛天傳奇',
    dortsPublisher,
    'https://www.dorts.gov.taipei/cp.aspx?n=2E32DBDC65CAA983&s=C09624CB5C9D59D4',
    'The official public-art page identifies 飛天傳奇 by 賴純純, its ceramic-panel, stainless-steel and acrylic-glass materials and station location; it does not publish a completion year.',
  ),
  xinyiAnhe: source(
    'dorts-art-xinyi-anhe',
    'Xinyi Anhe station public art',
    '水城臺北',
    dortsPublisher,
    'https://www.dorts.gov.taipei/cp.aspx?n=2E32DBDC65CAA983&s=D058D336AA77862B',
    'The current official public-art page identifies 水城臺北 by 吳耿禎, its laminated tempered-glass medium and concourse location; it does not publish a completion year. The earlier URL without the final B returned 404 when checked on 17 August 2026.',
    '2026-08-17',
  ),
  taipei101: source(
    'dorts-art-taipei-101',
    'Taipei 101 station public art',
    '相遇時刻',
    dortsPublisher,
    'https://www.dorts.gov.taipei/cp.aspx?n=2E32DBDC65CAA983&s=BB2C701F4B7EA04A',
    'The official public-art page identifies 相遇時刻 by 黃心健, its interactive materials, location and 28 June 2013 completion date; it also records the invited-competition selection and NT$12,000,000 cost.',
  ),
  xiangshan: source(
    'dorts-art-xiangshan',
    'Xiangshan station public art',
    '心蛙朵朵開',
    dortsPublisher,
    'https://www.dorts.gov.taipei/cp.aspx?n=2E32DBDC65CAA983&s=E09DC8AE77E47420',
    'The official public-art page identifies 心蛙朵朵開 by 江洋輝 and 麻粒國際文化試驗股份有限公司, its stainless-steel and epoxy-resin medium, location and 28 June 2013 completion date.',
  ),
} as const

const trtcUrls: Record<string, string> = {
  R02: 'https://web.metro.taipei/pages2026/WebStation/099/1',
  R03: 'https://web.metro.taipei/pages2026/WebStation/100/1',
  R04: 'https://web.metro.taipei/pages2026/WebStation/101/1',
  R05: 'https://web.metro.taipei/pages2026/WebStation/011/1',
  R06: 'https://web.metro.taipei/pages2026/WebStation/103/1',
  R07: 'https://web.metro.taipei/pages2026/WebStation/134/1',
  R08: 'https://web.metro.taipei/pages2026/WebStation/042/1',
  R09: 'https://web.metro.taipei/pages2026/WebStation/050/1',
  R10: 'https://web.metro.taipei/pages2026/WebStation/051/1',
  R11: 'https://web.metro.taipei/pages2026/WebStation/053/1',
  R12: 'https://web.metro.taipei/pages2026/WebStation/054/1',
  R13: 'https://web.metro.taipei/pages2026/WebStation/055/1',
  R14: 'https://web.metro.taipei/pages2026/WebStation/056/1',
  R15: 'https://web.metro.taipei/pages2026/WebStation/057/1',
  R16: 'https://web.metro.taipei/pages2026/WebStation/058/1',
  R17: 'https://web.metro.taipei/pages2026/WebStation/059/1',
  R18: 'https://web.metro.taipei/pages2026/WebStation/060/1',
  R19: 'https://web.metro.taipei/pages2026/WebStation/061/1',
  R20: 'https://web.metro.taipei/pages2026/WebStation/062/1',
  R21: 'https://web.metro.taipei/pages2026/WebStation/063/1',
  R22: 'https://web.metro.taipei/pages2026/WebStation/064/1',
  R22A: 'https://web.metro.taipei/pages2026/WebStation/065/1',
  R23: 'https://web.metro.taipei/pages2026/WebStation/066/1',
  R24: 'https://web.metro.taipei/pages2026/WebStation/067/1',
  R25: 'https://web.metro.taipei/pages2026/WebStation/068/1',
  R26: 'https://web.metro.taipei/pages2026/WebStation/069/1',
  R27: 'https://web.metro.taipei/pages2026/WebStation/070/1',
  R28: 'https://web.metro.taipei/pages2026/WebStation/071/1',
}

const trtcNames: Record<string, { en: string; zh: string }> = {
  R02: { en: 'Xiangshan', zh: '象山' },
  R03: { en: 'Taipei 101/World Trade Center', zh: '台北101/世貿' },
  R04: { en: 'Xinyi Anhe', zh: '信義安和' },
  R05: { en: 'Daan', zh: '大安' },
  R06: { en: 'Daan Park', zh: '大安森林公園' },
  R07: { en: 'Dongmen', zh: '東門' },
  R08: { en: 'Chiang Kai-Shek Memorial Hall', zh: '中正紀念堂' },
  R09: { en: 'NTU Hospital', zh: '台大醫院' },
  R10: { en: 'Taipei Main Station', zh: '台北車站' },
  R11: { en: 'Zhongshan', zh: '中山' },
  R12: { en: 'Shuanglian', zh: '雙連' },
  R13: { en: 'Minquan W. Rd.', zh: '民權西路' },
  R14: { en: 'Yuanshan', zh: '圓山' },
  R15: { en: 'Jiantan', zh: '劍潭' },
  R16: { en: 'Shilin', zh: '士林' },
  R17: { en: 'Zhishan', zh: '芝山' },
  R18: { en: 'Mingde', zh: '明德' },
  R19: { en: 'Shipai', zh: '石牌' },
  R20: { en: 'Qilian', zh: '唭哩岸' },
  R21: { en: 'Qiyan', zh: '奇岩' },
  R22: { en: 'Beitou', zh: '北投' },
  R22A: { en: 'Xinbeitou', zh: '新北投' },
  R23: { en: 'Fuxinggang', zh: '復興崗' },
  R24: { en: 'Zhongyi', zh: '忠義' },
  R25: { en: 'Guandu', zh: '關渡' },
  R26: { en: 'Zhuwei', zh: '竹圍' },
  R27: { en: 'Hongshulin', zh: '紅樹林' },
  R28: { en: 'Tamsui', zh: '淡水' },
}

function trtcStation(code: string): Source {
  const station = trtcNames[code]
  return source(
    `trtc-${code.toLowerCase()}-station`,
    `${code} ${station.en} station information`,
    `車站資訊查詢：${code} ${station.zh}`,
    trtcPublisher,
    trtcUrls[code],
    'The operator’s full station page publishes the current station address, accessibility facilities, toilets, bicycle access, exit count and numbered exit locations.',
  )
}

type RData = {
  structure: Structure
  exits: number
  openingDate?: string
  openingSource?: Source
  structureSource?: Source
  platformDetails: string
  platformSource?: Source
  exitDetails: string
  facilities: string
  landmarks: string
  publicArt: string
  publicArtSource?: Source
  engineeringHistory: string
  engineeringHistorySource?: Source
  interchange?: { label: string; lineCode?: string }
  branch?: { label: string; source: Source }
  prose?: StationProseSentence[]
}

const underground = (platformDetails = 'Underground station; platform form and track count: TBC.') => platformDetails
const elevated = 'Elevated station with one island platform; track count: TBC.'
const atGrade = 'At-grade station; platform form and track count: TBC.'
const tbc = 'TBC'

const rData: Record<string, RData> = {
  R02: {
    structure: 'underground', exits: 3, openingDate: '24 November 2013', openingSource: dortsXinyi, structureSource: dortsXinyi,
    platformDetails: underground(),
    exitDetails: '1: 信義路5段與松勇路口; 2: 信義路5段150巷口、近象山公園、信義快速道路; 3: 信義路5段、近91巷、信義快速道路. Accessible exits: 1 and 2.',
    facilities: 'Accessible lifts: exits 1 and 2, plus a paid-concourse platform lift; paid-concourse toilets by the platform lift; parent/accessible toilet and baby changing at the same location; bicycle access open; enquiry point near exits 1 and 2.',
    landmarks: '象山公園; 信義快速道路', publicArt: '心蛙朵朵開 — 江洋輝、麻粒國際文化試驗股份有限公司; stainless steel and epoxy resin; 2013.', publicArtSource: art.xiangshan,
    engineeringHistory: tbc, interchange: undefined,
    prose: [
      { text: 'DORTS describes Xiangshan’s work as a tree-frog and childhood-memory composition that represents the richness of the local natural environment and invites visitors to experience its distinctive ecology.', source: art.xiangshan.id },
    ],
  },
  R03: {
    structure: 'underground', exits: 5, openingDate: '24 November 2013', openingSource: dortsXinyi, structureSource: dortsXinyi,
    platformDetails: underground(),
    exitDetails: '1: 信義路5段與莊敬路口、世貿一館旁; 2: 信義路5段與莊敬路口對側; 3: 信義路5段20號; 4: 信義路5段7號B1、台北101 B1廣場; 5: 信義路5段與市府路口、世貿一館旁. Accessible exits: 3 and 5.',
    facilities: 'Accessible lifts: exits 3 and 5, plus a paid-concourse platform lift; paid-concourse toilets by the platform lift and unpaid toilets near exit 4/Taipei 101 passage; nursing room near exits 4 and 5; baby changing; bicycle access open; enquiry point near exits 3–5.',
    landmarks: '台北101; 世貿一館', publicArt: '相遇時刻 — 黃心健; interactive mechanical, computer, sensor, network, glass and stainless-steel work; 2013.', publicArtSource: art.taipei101,
    engineeringHistory: tbc,
    prose: [
      { text: 'The Taipei 101 station record describes a 100-metre entrance passage where twelve book-like, kinetic flip-card installations use interaction to connect two imagined futures.', source: art.taipei101.id },
      { text: 'DORTS records the work as the result of an invited competition with a cost of NT$12 million.', source: art.taipei101.id },
    ],
  },
  R04: {
    structure: 'underground', exits: 6, openingDate: '24 November 2013', openingSource: dortsXinyi, structureSource: dortsXinyi,
    platformDetails: underground(),
    exitDetails: '1: 信義路4段與安和路1段路口; 2: 信義路4段與安和路2段路口、安和路派出所前; 2A: 同路口; 3: 信義路4段236號與通安街口; 4: 248號與通安街口; 5: 239巷口. Accessible exits: 2A and 5.',
    facilities: 'Accessible lifts: exits 2A and 5, plus a paid-concourse platform lift; paid-concourse toilets by the platform lift; parent/accessible toilet and baby changing at that location; bicycle access open; enquiry point near exits 3–5.',
    landmarks: '安和路派出所', publicArt: '水城臺北 — 吳耿禎; laminated tempered glass; year TBC.', publicArtSource: art.xinyiAnhe,
    engineeringHistory: tbc,
    prose: [
      { text: 'For Xinyi Anhe, the artwork treats the paid/unpaid concourse barrier as a meeting point between old Taipei waterways and a future city of plants, streets and imagined planets.', source: art.xinyiAnhe.id },
    ],
  },
  R05: {
    structure: 'underground', exits: 6, openingDate: '24 November 2013', openingSource: dortsXinyi, structureSource: dortsXinyi,
    platformDetails: underground(),
    exitDetails: '1: 信義路3段147-1號、近147巷口、近台北農會信義大樓; 2: 信義路3段145號、師大附中旁; 3: 信義路3段180號、近166巷口; 4: 信義路4段2號與復興南路2段交叉口; 5: 信義路4段與復興南路2段交叉、近信義路4段30巷8弄口; 6: 復興南路1段317號. Accessible R exit: 3.',
    facilities: 'R accessible lift: exit 3 and a paid-concourse platform lift; toilets in the paid zone by exit 3 and transfer connection; parent/accessible toilet at the same location; nursing room in the paid B1 area; baby changing; bicycle access not open; enquiry point near R exits 1–3.',
    landmarks: '台北農會信義大樓; 師大附中', publicArt: '飛天傳奇 — 賴純純; ceramic panels, stainless steel and acrylic glass; year TBC.', publicArtSource: art.daan,
    engineeringHistory: tbc, interchange: { label: 'Bannan Line; transfer mode: TBC', lineCode: 'BR' },
    prose: [
      { text: 'The Daan station artwork is presented as a poetic journey through mountains, water and the city, moving from morning to night through light, sound, love and imagined space.', source: art.daan.id },
    ],
  },
  R06: {
    structure: 'underground', exits: 6, openingDate: '24 November 2013', openingSource: dortsXinyi, structureSource: dortsXinyi,
    platformDetails: underground(),
    exitDetails: '1: 信義路3段、31巷口; 2: 近新生南路2段; 3: 西側光塔; 4: 東側光塔; 5: 近建國南路2段; 6: 仁愛路3段24巷口、近產業發展署. Accessible exits: 4, 5 and 6.',
    facilities: 'Accessible lifts: exits 4–6 and a paid-concourse platform lift; unpaid toilets near exits 3 and 5; parent/accessible toilet at the same locations; nursing room near exit 3; baby changing; bicycle access open; enquiry point near exits 4–6.',
    landmarks: '大安森林公園; 產業發展署', publicArt: '大安之花 — Pete Beeman; stainless steel, powder-coated iron and aluminium; year TBC. 秋葉旅人 — Yvan Mauger; stainless steel, forged copper and aluminium; year TBC. 春光乍現 — 林舜龍; cast aluminium, copper, stainless steel, glass mosaic and stone mosaic; year TBC. 四季 — 柴清文; cypress and stone paint; year TBC.', publicArtSource: art.daanPark,
    engineeringHistory: tbc,
    prose: [
      { text: 'At Daan Park, the interactive Daan Flower uses Taipei’s azalea as its subject and asks the observer to awaken the flower, making the station’s park setting part of the work’s conversation between people and nature.', source: art.daanPark.id },
    ],
  },
  R07: {
    structure: 'underground', exits: 8, openingDate: '24 November 2013', openingSource: dortsXinyi, structureSource: dortsXinyi,
    platformDetails: underground(),
    exitDetails: '1: 信義路2段、近臨沂街口; 2: 信義路2段與金山南路1段路口; 3: 信義路2段114巷口; 4: 信義路2段148巷口、近麗水街口; 5: 信義路2段166號、近永康街口; 6: 信義路2段、近連雲街口; 7: 近信義路2段191號; 8: 信義路2段163號、東門郵局旁. Accessible exit: 8.',
    facilities: 'Accessible lift: exit 8 and a paid-concourse platform lift; unpaid toilets near exit 6 and paid toilets by the platform lift; parent/accessible toilet by the platform lift; nursing room near exits 6–8; baby changing; bicycle access open; enquiry point near exits 4–8.',
    landmarks: '東門郵局', publicArt: tbc,
    engineeringHistory: tbc, interchange: { label: 'Zhonghe–Xinlu Line; transfer mode: TBC', lineCode: 'O' },
  },
  R08: {
    structure: 'underground', exits: 7, openingDate: '24 December 1998', openingSource: dortsRoute, structureSource: dortsXinyi,
    platformDetails: underground(),
    exitDetails: '1: 羅斯福路1段、近勞保局; 2: 羅斯福路1段8之1號; 3: 近金華街口; 4: 羅斯福路1段7號; 5: 愛國東路、中山南路口、近中正紀念堂; 6: 愛國西路、中山南路口、市立大學附設小學、國家圖書館; 7: 愛國西路2號、近中央銀行. Accessible exits: 1 and 5.',
    facilities: 'Accessible lifts: exits 1 and 5, plus south and north paid-concourse platform lifts; unpaid toilets near exits 2–4 and 5–7; parent/accessible toilets at the same locations; nursing room by the paid B2 north platform; baby changing; bicycle access open; enquiry points near exits 2–4 and 5–7.',
    landmarks: '中正紀念堂; 國家圖書館; 中央銀行; 市立大學附設小學', publicArt: tbc,
    engineeringHistory: tbc, interchange: { label: 'Songshan–Xindian Line; transfer mode: TBC', lineCode: 'G' },
  },
  R09: {
    structure: 'underground', exits: 4, openingDate: '24 December 1998', openingSource: dortsRoute, structureSource: dortsRoute,
    platformDetails: underground(),
    exitDetails: '1: 公園路52號、近總統府; 2: 常德街1號、臺大醫院舊館大門旁; 3: 公園路、臺大醫院復健部旁; 4: 公園路、近國立台灣博物館. Accessible exits: 1, 2 and 3.',
    facilities: 'Accessible lifts: exits 1–3 and a north paid-concourse platform lift; unpaid toilets near exit 1; parent/accessible toilets at the same location; baby changing; bicycle access open; enquiry point near exits 3 and 4.',
    landmarks: '總統府; 臺大醫院舊館; 臺大醫院復健部; 國立台灣博物館', publicArt: '手之組曲 — 李光裕; copper and granite; November 1998.', publicArtSource: art.ntuHospital,
    engineeringHistory: tbc,
  },
  R10: {
    structure: 'underground', exits: 8, openingDate: '25 December 1997', openingSource: dortsRoute, structureSource: dortsRoute,
    platformDetails: underground(),
    exitDetails: 'M1: 台鐵台北車站北一門旁; M2: 市民大道1段209號對面、近國父史蹟紀念館; M3: 忠孝西路1段45號; M4: 忠孝西路1段38號對面; M5: 忠孝西路1段66號對面; M6: 忠孝西路1段38號; M7: 忠孝西路1段33號; M8: 公園路13號. Accessible lifts: R lifts 1–3; exit naming follows the operator’s M1–M8 designation.',
    facilities: 'R accessible lifts: B2 BL hall to B4 R platform south, B3 R hall to B4 R platform central, and ground M1/M2 to B3 R hall north; non-paid toilets by M1/M2 and paid BL/R toilets; parent/accessible toilets at those locations; nursing room published for BL; baby changing; bicycle access not open; enquiry points near M3, M7 and M8.',
    landmarks: '台鐵台北車站; 國父史蹟紀念館', publicArt: tbc,
    engineeringHistory: tbc, interchange: { label: 'Bannan Line; transfer mode: TBC', lineCode: 'BL' },
  },
  R11: {
    structure: 'underground', exits: 6, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsRoute,
    platformDetails: underground(),
    exitDetails: '1: 南京西路16號; 2: 南京西路12號旁、近中山北路1段; 3: 南京西路11號旁、近中山北路2段; 4: 南京西路27號旁; 5: 南京西路55號、近南京西路與赤峰街路口東北隅; 6: 南京西路與赤峰街路口東南隅、南京西路64巷旁. Accessible exits: 4, 5 and 6.',
    facilities: 'Accessible lifts: exits 4–6 and a paid-concourse platform lift; unpaid toilets near exit 6 and the Zhongshan Arts Corridor; parent/accessible toilets at the same locations; nursing room published for the G platform; baby changing; bicycle access open; enquiry points near exits 1 and 4–6.',
    landmarks: '中山藝術廊道', publicArt: tbc,
    engineeringHistory: tbc, interchange: { label: 'Songshan–Xindian Line; transfer mode: TBC', lineCode: 'G' },
  },
  R12: {
    structure: 'underground', exits: 2, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsRoute,
    platformDetails: underground(),
    exitDetails: '1: 民生西路72號旁; 2: 民生西路47號. Accessible exit: 2.',
    facilities: 'Accessible lift: exit 2 and a paid-concourse platform lift; unpaid toilet near exit 1 toward the Zhongshan underground mall; parent/accessible toilet at the same location; baby changing; bicycle access open; enquiry point near exits 1 and 2.',
    landmarks: '中山地下街', publicArt: '雙連‧行遠 — 井婉婷、楊弼方; enamel panels; 1996.', publicArtSource: art.shuanglian,
    engineeringHistory: tbc,
  },
  R13: {
    structure: 'underground', exits: 10, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: underground('Shallow-cut underground station; two platform lifts, one for each line’s paid concourse; track count: TBC.'),
    exitDetails: '1: 民權西路72號; 2: 成淵高中後方; 3: 天祥路16巷口; 4: 天祥路48巷35號對面; 5: 承德路3段、撫順街口; 6: 承德路2段、民權西路口，近台灣銀行; 7: 民權西路58、60號前; 8: 民權西路、天祥路口，近民權西路48號; 9: 同路口近53號; 10: 民權西路67、69號前. Accessible exit: 10 for the O line.',
    facilities: 'R and O accessible lifts at their paid concourses; toilets at unpaid exit 5, paid exit 1 and paid exits 7–8; parent/accessible toilets at unpaid exit 5 and paid exit 1; nursing room published for O; baby changing; bicycle access open; enquiry points near exits 7–10 and exit 1.',
    landmarks: '成淵高中; 台灣銀行', publicArt: tbc,
    engineeringHistory: 'The builder describes Minquan W. Rd. as a shallow-cut underground example; station-specific construction history beyond that classification: TBC.', engineeringHistorySource: dortsStationArchitecture,
    interchange: { label: 'Zhonghe–Xinlu Line; transfer mode: TBC', lineCode: 'O' },
  },
  R14: {
    structure: 'elevated', exits: 2, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: elevated, platformSource: dortsYuanshanToBeitou,
    exitDetails: '1: 酒泉街與玉門街; 2: 庫倫街. Platform lift: central. Accessible exit: TBC.',
    facilities: 'Paid toilets by exit 1; parent/accessible toilet at that location; baby changing; bicycle access open; enquiry point near exit 1; platform lift at the station centre.',
    landmarks: tbc, publicArt: tbc,
    engineeringHistory: 'The station’s second exit was added later; the original and addition dates are TBC.', engineeringHistorySource: dortsYuanshanToBeitou,
  },
  R15: {
    structure: 'elevated', exits: 3, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: elevated, platformSource: dortsYuanshanToBeitou,
    exitDetails: '1: 中山北路5段65號; 2: 基河路22號對面; 3: 劍潭路. Platform lifts: north hall near exit 3 and south hall near exit 2. Accessible exit: TBC.',
    facilities: 'Paid toilets by exits 1 and 2; parent/accessible toilet by exit 1; nursing room in the paid hall near exit 1; baby changing; bicycle access open; enquiry points near exits 1 and 2; north and south platform lifts.',
    landmarks: tbc, publicArt: tbc,
    engineeringHistory: 'The station has a suspended, column-free roof structure whose form was developed around a dragon-boat image.', engineeringHistorySource: dortsSpecialArchitecture,
  },
  R16: {
    structure: 'elevated', exits: 2, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: elevated, platformSource: dortsYuanshanToBeitou,
    exitDetails: '1: 中正路247巷旁; 2: 福德路1號. Central platform lift. Accessible exit: TBC.',
    facilities: 'Paid toilets by exits 1 and 2; parent/accessible toilet by exit 1; nursing room in the paid hall near exit 1; baby changing; bicycle access open; enquiry points near exits 1 and 2.',
    landmarks: tbc, publicArt: tbc, engineeringHistory: tbc,
  },
  R17: {
    structure: 'elevated', exits: 2, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: elevated, platformSource: dortsYuanshanToBeitou,
    exitDetails: '1: 福國路70號; 2: 福華路162巷口對面. Central and north platform lifts. Accessible exit: TBC.',
    facilities: 'Paid toilets by exits 1 and 2; parent/accessible toilet by exit 1; baby changing; bicycle access open; enquiry points near exits 1 and 2; central and north platform lifts.',
    landmarks: tbc, publicArt: tbc, engineeringHistory: tbc,
  },
  R18: {
    structure: 'elevated', exits: 3, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: elevated, platformSource: dortsYuanshanToBeitou,
    exitDetails: '1: 明德路95號、明德國中斜對面; 2: 東華街一段378號對面; 3: 西安街一段175號對面. Central platform lift. Accessible exit: TBC.',
    facilities: 'Paid toilet by exit 1; parent/accessible toilet at the same location; baby changing; bicycle access open; enquiry point near exit 1; central platform lift.',
    landmarks: '明德國中', publicArt: tbc, engineeringHistory: tbc,
  },
  R19: {
    structure: 'elevated', exits: 2, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: elevated, platformSource: dortsYuanshanToBeitou,
    exitDetails: '1: 石牌路1段、2段與東華街、西安街交叉口、近市立石牌國中; 2: 西安街1段329號對面. Central and south platform lifts. Accessible exit: TBC.',
    facilities: 'Paid toilets by exits 1 and 2; parent/accessible toilet by exit 1; baby changing; bicycle access open; enquiry points near exits 1 and 2; central and south platform lifts.',
    landmarks: '市立石牌國中', publicArt: tbc, engineeringHistory: tbc,
  },
  R20: {
    structure: 'elevated', exits: 2, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: elevated, platformSource: dortsShilinToXinbeitou,
    exitDetails: '1: 西安街2段279號; 2: 西安街2段347號. Central platform lift. Accessible exit: TBC.',
    facilities: 'Paid toilet by exit 1; parent/accessible toilet at the same location; baby changing; bicycle access open; enquiry point near exit 1; central platform lift.',
    landmarks: tbc, publicArt: tbc, engineeringHistory: 'The second exit was added later; the original and addition dates are TBC.', engineeringHistorySource: dortsShilinToXinbeitou,
  },
  R21: {
    structure: 'elevated', exits: 3, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: elevated, platformSource: dortsShilinToXinbeitou,
    exitDetails: '1: 北投路1段與三合街2段交叉口; 2: 北投路1段53號對面; 3: 清江路266號對面. Central platform lift. Accessible exit: TBC.',
    facilities: 'Paid toilet by exit 1; parent/accessible toilet at the same location; baby changing; bicycle access open; enquiry point near exit 1; central platform lift.',
    landmarks: tbc, publicArt: tbc, engineeringHistory: tbc,
  },
  R22: {
    structure: 'elevated', exits: 2, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: 'Elevated station with one island platform and two side platforms; four tracks.', platformSource: dortsShilinToXinbeitou,
    exitDetails: '1: 育仁路與光明路交叉口; 2: 近大興街. Platform lifts serve platforms 1–4. Accessible exit: TBC.',
    facilities: 'Paid toilets by exits 1 and 2; parent/accessible toilets at the same locations; nursing room in the paid hall near exit 1; baby changing; bicycle access open; enquiry points near exits 1 and 2; platform lifts serve platforms 1–4.',
    landmarks: tbc, publicArt: tbc, engineeringHistory: 'The station uses a space-truss and glass-curtain structural treatment.', engineeringHistorySource: dortsSpecialArchitecture,
    branch: { label: 'New Beitou Branch', source: trtcStation('R22') },
  },
  R22A: {
    structure: 'elevated', exits: 2, openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: 'Elevated terminal with one island platform; track count: TBC.', platformSource: dortsShilinToXinbeitou,
    exitDetails: '1: 大業路與光明路交叉口、近北投公園; 2: 近七星街. Central hall platform lift. Accessible exit: TBC.',
    facilities: 'Paid toilet by exit 1; parent/accessible toilet at the same location; baby changing; bicycle access open; enquiry point near exit 1; central hall platform lift.',
    landmarks: '北投公園', publicArt: tbc, engineeringHistory: tbc,
    branch: { label: 'New Beitou Branch terminal', source: trtcStation('R22A') },
  },
  R23: {
    structure: 'at-grade', exits: 2, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: atGrade,
    exitDetails: '1: 中央北路3段53巷內; 2: 捷運北投機廠. Platform lift serves platforms 1 and 2. Accessible exit: TBC.',
    facilities: 'Paid toilet by exit 1; parent/accessible toilet at the same location; baby changing in the paid men’s and women’s toilets; bicycle access open; enquiry point near exit 1; platform lifts behind the platform stairs.',
    landmarks: '北投機廠', publicArt: tbc, engineeringHistory: tbc,
  },
  R24: {
    structure: 'at-grade', exits: 2, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: atGrade,
    exitDetails: '1: 中央北路4段301號; 2: 近和信醫院. Platform lifts serve platforms 1 and 2. Accessible exit: TBC.',
    facilities: 'Paid toilet by exit 1; parent/accessible toilet at the same location; baby changing in the paid men’s and women’s toilets; bicycle access open; enquiry point near exit 1; platform lifts behind the platform stairs.',
    landmarks: '和信醫院', publicArt: tbc, engineeringHistory: tbc,
  },
  R25: {
    structure: 'at-grade', exits: 2, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: atGrade,
    exitDetails: '1: 大度路3段296巷51號; 2: 中央北路4段583巷11弄內、近關渡國小. Platform lifts serve platforms 1 and 2. Accessible exit: TBC.',
    facilities: 'Paid toilet by exit 1; parent/accessible toilet at the same location; baby changing in the paid men’s and women’s toilets; bicycle access open; enquiry point near exit 1; platform lifts behind the platform stairs.',
    landmarks: '關渡國小', publicArt: tbc, engineeringHistory: tbc,
  },
  R26: {
    structure: 'at-grade', exits: 2, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: atGrade,
    exitDetails: '1: 民權路與民族路交叉口、近馬偕醫院; 2: 民權一街16號. Platform lifts serve platforms 1 and 2. Accessible exit: TBC.',
    facilities: 'Paid toilet by exit 1; parent/accessible toilet at the same location; baby changing in the paid men’s and women’s toilets; bicycle access open; enquiry point near exit 1; platform lifts behind the platform stairs.',
    landmarks: '馬偕醫院', publicArt: tbc, engineeringHistory: tbc,
  },
  R27: {
    structure: 'at-grade', exits: 2, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: atGrade,
    exitDetails: '1: 中正東路2段68號、近淡海輕軌紅樹林站; 2: 自行車步道紅樹林段、近紅樹林教育館. Platform lifts serve platforms 1 and 2. Accessible exit: TBC.',
    facilities: 'Paid toilet by exit 1; parent/accessible toilet at the same location; baby changing in the paid men’s and women’s toilets; bicycle access open; enquiry point near exit 1; platform lifts behind the platform stairs.',
    landmarks: '淡海輕軌紅樹林站; 紅樹林教育館', publicArt: tbc, engineeringHistory: tbc,
  },
  R28: {
    structure: 'elevated', exits: 3, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsTamsui,
    platformDetails: 'Elevated terminal with one island platform; track count: TBC.', platformSource: dortsTamsui,
    exitDetails: '1: 中正東路、近英專路; 2: 中正東路、近學府路; 3: 近金色水岸. Platform lift behind the escalator. Accessible exit: TBC.',
    facilities: 'Unpaid toilets by the rear park, bus station and exit 1; parent/accessible toilets at the same locations; nursing room in the paid hall near exit 1; baby changing; bicycle access not open; enquiry point near exit 1; platform lift behind the escalator.',
    landmarks: '金色水岸', publicArt: tbc, engineeringHistory: 'The terminal was built on the old TRA site; the engineering-book account notes the Red Castle brick arch, colonial architecture and local style in its design context.', engineeringHistorySource: dortsSpecialArchitecture,
  },
}

function makeResearch(code: string, data: RData): StationResearch {
  const stationSource = trtcStation(code)
  const sources = [
    stationSource,
    dortsRoute,
    data.structureSource ?? dortsRoute,
    data.openingSource ?? dortsRoute,
    dortsDepot,
    ...(data.platformSource ? [data.platformSource] : []),
    ...(data.publicArtSource ? [data.publicArtSource] : []),
    ...(data.engineeringHistorySource ? [data.engineeringHistorySource] : []),
    ...(data.interchange ? [] : []),
  ].filter((entry, index, all) => all.findIndex((other) => other.id === entry.id) === index)

  return {
    sources,
    identitySource: stationSource.id,
    mapSource: stationSource.id,
    structureSource: (data.structureSource ?? dortsRoute).id,
    openingSource: (data.openingSource ?? dortsRoute).id,
    scheduleSources: [],
    openingDate: data.openingDate,
    interchange: data.interchange ? { ...data.interchange, source: stationSource.id } : undefined,
    branch: data.branch ? { label: data.branch.label, source: data.branch.source.id } : undefined,
    platformDetails: data.platformDetails,
    platformSource: data.platformSource?.id,
    exitDetails: data.exitDetails,
    exitSource: stationSource.id,
    facilities: data.facilities,
    facilitiesSource: stationSource.id,
    depot: 'Beitou Depot is the Tamsui–Xinyi Line’s main depot; station-specific roster assignment: TBC.',
    depotSource: dortsDepot.id,
    publicArt: data.publicArt,
    publicArtSource: data.publicArtSource?.id,
    naming: 'TBC',
    engineeringHistory: data.engineeringHistory,
    engineeringHistorySource: data.engineeringHistorySource?.id,
    landmarks: data.landmarks,
    landmarksSource: stationSource.id,
  }
}

export const TAMSUI_XINYI_OVERLAY: Record<string, StationOverlay> = Object.fromEntries(
  Object.entries(rData).map(([code, data]) => {
    const research = makeResearch(code, data)
    return [code, { structure: data.structure, exits: data.exits, research, sources: research.sources, prose: data.prose ?? [] }]
  }),
) as Record<string, StationOverlay>
