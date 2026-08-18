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

const dortsXinyiDesignOverview = source(
  'dorts-xinyi-dr148-design-overview',
  'Xinyi Line DR148 station design overview',
  '都會組曲－信義線DR148標建築設計理念',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page65.html',
  'The full technical-journal page gives the Xinyi Line’s six-station corridor context, construction-era R05–R10 labels, underground island-platform forms, station sites and the “Metro Suite” design concept. The original-language passages beginning 臺北捷運信義線自羅斯福路 and 信義線整體建築設計構想 were checked on the linked page.',
  '2026-08-18',
)

const dortsXinyiAnheDesign = source(
  'dorts-xinyi-anhe-design',
  'Xinyi Anhe station design',
  '都會組曲－信義線DR148標建築設計理念',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page67.html',
  'The full technical-journal page describes Xinyi Anhe’s “Life Melody” theme, boutique and furniture-street context, natural materials, dual-arch entrances, transparent glazing, entrance arrangement and the station’s construction-era R07 label. The original-language passages beginning 整體車站設計主題與構思 and 在出入口設計部分 were checked on the linked page.',
  '2026-08-18',
)

const dortsXinyiAnheInterior = source(
  'dorts-xinyi-anhe-interior',
  'Xinyi Anhe station interior and ventilation design',
  '都會組曲－信義線DR148標建築設計理念',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page68.html',
  'The full technical-journal page describes Xinyi Anhe’s reduced ventilation-shaft form, warm colour palette, continuous wall-and-ceiling materials, lighting and beige granite floor. The original-language passages beginning 而車站營運所需之通風井 and 站體室內空間設計理念 were checked on the linked page.',
  '2026-08-18',
)

const dortsXinyiTaipei101Design = source(
  'dorts-xinyi-taipei101-design',
  'Taipei 101/World Trade Center station design',
  '都會組曲－信義線DR148標建築設計理念',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page70.html',
  'The full technical-journal page describes the station’s trade, finance, commercial and leisure context, nearby Taipei World Trade Center and Taipei 101, surrounding offices and housing, the “Modern Movement” theme, entrance-to-plaza connection, transparent curved walls and day/night lighting. The original-language passages beginning 本站所處區位 and 本站設計主題與構思 were checked on the linked page.',
  '2026-08-18',
)

const dortsXinyiXiangshanDesign = source(
  'dorts-xinyi-xiangshan-design',
  'Xiangshan station site and design concept',
  '都會組曲－信義線DR148標建築設計理念',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page73.html',
  'The full technical-journal page describes the Xiangshan site beside Zhongqiang Park, the park’s mature trees and facilities, Taipei tree-frog ecology, and the “Song of the Tree Frog” design concept. The original-language passages beginning 象山站(R05)位於信義路五段 and 因位處四獸山系象山山腳 were checked on the linked page.',
  '2026-08-18',
)

const dortsXinyiXiangshanLandscape = source(
  'dorts-xinyi-xiangshan-landscape',
  'Xiangshan station landscape protection and entrances',
  '都會組曲－信義線DR148標建築設計理念',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page74.html',
  'The full technical-journal page records the retreat of above-ground facilities into a planted north landscape strip to protect tree-frog habitat, and describes the transparent entrance forms. The original-language passages beginning 台北樹蛙是中強公園地區的特色 and 出入口在設計手法上 were checked on the linked page.',
  '2026-08-18',
)

const dortsXinyiXiangshanEntrances = source(
  'dorts-xinyi-xiangshan-entrances',
  'Xiangshan station entrance and public-space design',
  '都會組曲－信義線DR148標建築設計理念',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page75.html',
  'The full technical-journal page describes the reduced visual mass at entrances A and D, the open-space plaza at entrance B in Zhongqiang Park, the underground passage below the Xinyi branch, and the elevator placement. The original-language entries beginning 出入口A、D面臨 and 出入口B位於中強公園內 were checked on the linked page.',
  '2026-08-18',
)

const dortsXinyiXiangshanInterior = source(
  'dorts-xinyi-xiangshan-interior',
  'Xiangshan station interior and tree-frog interpretation',
  '都會組曲－信義線DR148標建築設計理念',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page77.html',
  'The full technical-journal page describes the rainbow colour plan, tree-frog ceramic wall treatment, environmental-education display, urban and natural entrance imagery, and hand-crafted ceramic panels. The original-language passages beginning 象山站(R05)地下站體室內空間 and 出入口A朝臺北市區方向 were checked on the linked page.',
  '2026-08-18',
)

const dortsXinyiCR580B = source(
  'dorts-xinyi-cr580b-contract',
  'CR580B Xinyi Line section contract and station works',
  '捷運信義線土建施工－CR580B區段標之特殊施工及障礙處理',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page100.html',
  'The full technical-journal page records CR580B’s 16 subcontracts, the joint-venture award, value, dates, R07/R06/R05 station construction scales, and the distinction between Taipei 101 structural work and later fit-out. The original-language passages beginning 捷運信義線CR580B區段標 and 二、車站工程規模 were checked on the linked page.',
  '2026-08-18',
)

const dortsXinyiDaanDevelopment = source(
  'dorts-xinyi-daan-development',
  'Daan and Daan Park joint-development sites',
  '臺北捷運聯合開發案例解析',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page17.html',
  'The full technical-journal page records the Daan Park and Daan joint-development sites, their surroundings, private land, building sizes, transit-facility integration and completion/occupancy records. The original-language entries beginning 大安森林公園站（捷）二基地 and 大安站（捷）三基地 were checked on the linked page.',
  '2026-08-18',
)

const dortsXinyiLandDevelopmentContext = source(
  'dorts-xinyi-land-development-context',
  'Xinyi Line joint-development delivery model',
  '臺北捷運聯合開發案例解析',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page19.html',
  'The full technical-journal page explains the land-acquisition constraint in the commercially intense corridor and the investor-built transit-facility model used at Daan Park and Daan to reduce completion uncertainty before the line opening. The original-language passages beginning 信義線沿線因商業規模 and 信義線大安森林公園站 were checked on the linked page.',
  '2026-08-18',
)

const dortsDaanParkLandscape = source(
  'dorts-xinyi-daan-park-landscape',
  'Daan Park station landscape design',
  '大安森林公園站地景設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page203.html',
  'The full technical-journal paper describes the “forest transfer” concept, the integration of sunlight, greenery and water, native planting, habitat support, curved forms and water features linking the underground station to Daan Park. The original-language paragraphs beginning 捷運車站與都會公園結合 and 就景觀植栽而言 were checked on the linked page.',
  '2026-08-18',
)

const dortsDaanParkStationDesign = source(
  'dorts-xinyi-daan-park-station-design',
  'Daan Park station architecture and landscape interface',
  '大安森林公園站地景設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page205.html',
  'The full technical-journal paper records Daan Park station’s site under Xinyi Road, its 25.8-hectare park edge, sunlight hall, sunken garden, light towers, multifunction plaza, opened concourse wall and the green-water-garden design axis. The original-language paragraphs beginning 捷運信義線大安森林公園站 and 大安森林公園站係將車站穿堂層側牆打開 were checked on the linked page.',
  '2026-08-18',
)

const dortsDaanParkArtProject = source(
  'dorts-xinyi-daan-park-art-project',
  'Daan Park, Daan and Xinyi Anhe public-art project',
  '大安森林的公共藝術饗宴－兼論信義線沿線美質環境與藝術場域',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page222.html',
  'The full technical-journal paper records the coordinated three-station public-art plan, its NT$22.5 million budget, October 2011 open selection, completion by the end of 2013 and the ecological design brief. The original-language paragraphs beginning 捷運局期待信義線的大安森林公園站 and 全案所有作品 were checked on the linked page.',
  '2026-08-18',
)

const dortsCK570H = source(
  'dorts-xinyi-ck570h-contract',
  'CK570H Dongmen station and tunnel section',
  '臺北捷運信義線CK570H區段標施工',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page82.html',
  'The full technical-journal page records CK570H’s cut-and-cover Dongmen station, shield-tunnel lengths, common tunnel, site dimensions, excavation depth and construction method. The original-language passages beginning CK570H區段標包含 and 車站位於金山南路 were checked on the linked page.',
  '2026-08-18',
)

const dortsCK570HConstruction = source(
  'dorts-xinyi-ck570h-construction',
  'CK570H Dongmen station structural and architectural works',
  '臺北捷運信義線CK570H區段標施工',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page83.html',
  'The full technical-journal page records Dongmen’s deep diaphragm wall, building-protection measures, double-wall SRC structure, ventilation constraints, finish materials, wayfinding floor and integrated system information counter. The original-language passages beginning 車站建物保護施工 and 車站及出入口建築裝修 were checked on the linked page.',
  '2026-08-18',
)

const dortsCK570HTunnel = source(
  'dorts-xinyi-ck570h-tunnel-intersection',
  'CK570H four-tunnel intersection and settlement control',
  '臺北捷運信義線CK570H區段標施工',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page84.html',
  'The full technical-journal page records the 113-metre four-tunnel intersection, cover depths, tunnel clearances, construction order, ground improvement, supports for the earlier tunnel and measured settlement. The original-language passages beginning 交會區呈一狹長之形狀 and 四條隧道交會區各隧道環片 were checked on the linked page.',
  '2026-08-18',
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
    'The official public-art page identifies 雙連‧行遠, its artists, enamel-panel medium and 16 September 1996 completion date; its full description records the open selection and the work’s historical account of Shuanglian.',
    '2026-08-17',
  ),
  ntuHospital: source(
    'dorts-art-ntu-hospital',
    'NTU Hospital station public art',
    '手之組曲',
    dortsPublisher,
    'https://www.dorts.gov.taipei/cp.aspx?n=2E32DBDC65CAA983&s=C32B3BEE19B6BC1F',
    'The official public-art page identifies 手之組曲, 李光裕, its copper and granite materials, platform location and November 1998 completion; its full description connects the work to the station’s local history and humanities.',
    '2026-08-17',
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
  proseSources?: Source[]
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
    proseSources: [
      dortsXinyiDesignOverview,
      dortsXinyiCR580B,
      dortsXinyiXiangshanDesign,
      dortsXinyiXiangshanLandscape,
      dortsXinyiXiangshanEntrances,
      dortsXinyiXiangshanInterior,
    ],
    prose: [
      { text: 'The current DORTS station table identifies Xiangshan as R02 with engineering code R5, while the DR148 design article uses the construction-era label R05 for the same station.', source: dortsXinyi.id },
      { text: 'That article places the station east of Songren Road and west of the Xinyi branch exit of the National Freeway, at the foot of Xiangshan beside Zhongqiang Park.', source: dortsXinyiXiangshanDesign.id },
      { text: 'It records an underground two-level island-platform station with three entrances, and describes Zhongqiang Park as a mature recreational landscape with trees, sports facilities and morning runners.', source: dortsXinyiDesignOverview.id },
      { text: 'The park setting also brought a specific ecological constraint: the Taipei tree frog breeds in the area, so the design treated existing trees and the park’s dense woodland as a protective screen.', source: dortsXinyiXiangshanDesign.id },
      { text: 'CR580B’s station record gives the R05 construction label a body about 220 metres long and 21.8 metres wide, with a 22.4-metre excavation, three entrances and two ventilation shafts.', source: dortsXinyiCR580B.id },
      { text: 'The contract article records CR580B as a 16-subcontract section awarded on 23 May 2005 to the Taiwan Obayashi–Mutual Construction joint venture for NT$8.272 billion, opened on 1 July 2005 and completed with the line on 23 November 2013.', source: dortsXinyiCR580B.id },
      { text: 'To reduce the impact on the frog habitat, the ventilation shafts, cooling tower and small underground-substation lifting opening were concentrated in a planted landscape strip on the north side of Xinyi Road instead of being scattered through the park.', source: dortsXinyiXiangshanLandscape.id },
      { text: 'Entrances A and D were designed with reduced visual mass and continuous planting, while entrance B sits inside Zhongqiang Park with a shaded waiting plaza, seats and an underground passage beneath the Xinyi branch.', source: dortsXinyiXiangshanEntrances.id },
      { text: 'The entrance language uses curved, lightweight transparent glass so daylight reaches the passage by day and the entrance becomes an urban light form at night.', source: dortsXinyiXiangshanLandscape.id },
      { text: 'Inside, the station’s main colour plan is a rainbow, with tree-frog ceramic wall panels and an environmental-education display linking the underground space to the protected habitat outside.', source: dortsXinyiXiangshanInterior.id },
      { text: 'The interior programme separates the urban imagery toward the city from frog, butterfly and child imagery toward the park, and carries the same distinction to the platform-level art walls.', source: dortsXinyiXiangshanInterior.id },
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
    proseSources: [dortsXinyiDesignOverview, dortsXinyiTaipei101Design, dortsXinyiCR580B],
    prose: [
      { text: 'The current DORTS station table identifies Taipei 101/World Trade Center as R03 with engineering code R6, while the DR148 article labels the station R06.', source: dortsXinyi.id },
      { text: 'The design article places it below Xinyi Road between City Hall Road and Zhuangjing Road, in a district where trade, finance, commerce, leisure and entertainment operate together.', source: dortsXinyiTaipei101Design.id },
      { text: 'Taipei World Trade Center and Taipei 101 stand immediately to the north, while department-store, cinema, office, headquarters and large-residential developments fill the surrounding five-minute walking catchment described by DORTS.', source: dortsXinyiTaipei101Design.id },
      { text: 'DORTS says that concentration of activity gave the station an important role in the Xinyi planning district and was expected to produce high use of the metro facilities.', source: dortsXinyiTaipei101Design.id },
      { text: 'The design theme is Modern Movement, framed as a space for dialogue with the world through the presence of the trade centre and Taipei 101.', source: dortsXinyiTaipei101Design.id },
      { text: 'Four entrances are placed on both sides of Xinyi Road, with a separate E passage connecting toward the Taipei 101 plaza.', source: dortsXinyiTaipei101Design.id },
      { text: 'Their curved transparent walls continue the station family’s light, abstract sculptural language and use the movement of escalator passengers to create visual interaction with the trade centre and financial centre.', source: dortsXinyiTaipei101Design.id },
      { text: 'DORTS describes the daytime effect as sunlight passing through glass and the lightweight internal structure, and the night effect as four urban light forms joining the surrounding commercial district.', source: dortsXinyiTaipei101Design.id },
      { text: 'The CR580B record says the R06 station’s structural work had already been awarded in ROC 91, so that section contract carried only the building fit-out, water and electrical, environmental-control and mechanical-system work for Taipei 101 station.', source: dortsXinyiCR580B.id },
      { text: 'The same contract record identifies the R06 construction-era station as an underground two-level island-platform station with five entrances, keeping the structural package distinction separate from the current R03 code.', source: dortsXinyiCR580B.id },
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
    proseSources: [dortsXinyiDesignOverview, dortsXinyiAnheDesign, dortsXinyiAnheInterior, dortsXinyiCR580B],
    prose: [
      { text: 'The current DORTS station table identifies Xinyi Anhe as R04 with engineering code R7, while the DR148 design article labels the station R07.', source: dortsXinyi.id },
      { text: 'The full station record places it beneath the Xinyi Road–Anhe Road intersection as an underground two-level island-platform station with five entrances.', source: dortsXinyiDesignOverview.id },
      { text: 'CR580B gives the construction-era R07 station a body about 209.8 metres long and 29.5 metres wide, a 21.5-metre excavation and two ventilation shafts.', source: dortsXinyiCR580B.id },
      { text: 'Its design theme is Life Melody, drawn from Xinyi Anhe Road’s refined street windows and the evening meeting and resting culture of the surrounding neighbourhood.', source: dortsXinyiAnheDesign.id },
      { text: 'DORTS connects that theme to the nearby boutique shops and furniture street, using natural materials, light and hand-crafted art to make the underground station echo the street’s more leisurely character.', source: dortsXinyiAnheDesign.id },
      { text: 'The four main entrances on Xinyi and Anhe Roads, plus the northern development entrance D, use paired curved arches intended to suggest a streamlined form rising from underground.', source: dortsXinyiAnheDesign.id },
      { text: 'Transparent full-height curved glass allows daylight into the underground passage and changes the station into a colourful, polished urban way-station after dark.', source: dortsXinyiAnheDesign.id },
      { text: 'The ventilation shafts were reduced and integrated with the road form, using an up-blast arrangement and a 1.8-metre parapet to keep the equipment out of ordinary pedestrian sightlines.', source: dortsXinyiAnheInterior.id },
      { text: 'A warm colour palette and planting were selected to blend the above-ground objects into the street, while the interior uses continuous wall-and-ceiling materials, lighting changes and beige granite flooring to carry the same atmosphere below grade.', source: dortsXinyiAnheInterior.id },
      { text: 'CR580B contained 16 subcontracts and was awarded to the Taiwan Obayashi–Mutual Construction joint venture for NT$8.272 billion after the 23 May 2005 bid opening, with work beginning on 1 July 2005 and the line completed on 23 November 2013.', source: dortsXinyiCR580B.id },
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
    proseSources: [dortsXinyiDesignOverview, dortsXinyiDaanDevelopment, dortsXinyiLandDevelopmentContext, dortsDaanParkArtProject],
    prose: [
      { text: 'The current DORTS station table identifies Daan as R05/BR09 with engineering code R8, while the Xinyi design article uses the construction-era label R08/BR5.', source: dortsXinyi.id },
      { text: 'The same design overview places Daan inside the six-station Xinyi corridor that moves between financial and commercial centres, mixed residential frontage and urban green space before reaching Xiangshan.', source: dortsXinyiDesignOverview.id },
      { text: 'The Daan joint-development site occupies the block between Xinyi Road Section 3, Jianguo South Road and Fuxing South Road, with Shida Affiliated High School on the west and the Wenhu Line Daan interchange at the site.', source: dortsXinyiDaanDevelopment.id },
      { text: 'DORTS records the parcel as privately owned and only 890 square metres, with a 15-storey, four-basement commercial building that received its occupancy permit in 2012.', source: dortsXinyiDaanDevelopment.id },
      { text: 'The R-line entrance was built into the west side of that building, while the building also had to accommodate the station facilities and a roof cooling tower within a very small development footprint.', source: dortsXinyiDaanDevelopment.id },
      { text: 'The technical account presents the site as an example of the difficulty of acquiring land and making large developments in a commercially intense corridor.', source: dortsXinyiLandDevelopmentContext.id },
      { text: 'Daan and Daan Park used an investor-built transit-facility model in which entrances, ventilation shafts and related structures were handed to the development investor to build before the Xinyi Line opened.', source: dortsXinyiLandDevelopmentContext.id },
      { text: 'DORTS says that arrangement reduced uncertainty between the completion of the metro facilities and the joint-development buildings, a practical constraint that sits behind the station’s compact urban footprint.', source: dortsXinyiLandDevelopmentContext.id },
      { text: 'A separate DORTS public-art paper treats Daan, Daan Park and Xinyi Anhe as one coordinated project, budgeted at NT$22.5 million, selected through an open call in October 2011 and installed by the end of 2013.', source: dortsDaanParkArtProject.id },
      { text: 'That project’s stated brief was to make the three stations speak with nature and local human experience rather than treating their artworks as unrelated interior decoration.', source: dortsDaanParkArtProject.id },
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
    proseSources: [dortsXinyiDesignOverview, dortsXinyiDaanDevelopment, dortsDaanParkLandscape, dortsDaanParkStationDesign, dortsDaanParkArtProject],
    prose: [
      { text: 'The current DORTS station table identifies Daan Park as R06 with engineering code R9, while the DR147/148 design overview uses the construction-era label R09.', source: dortsXinyi.id },
      { text: 'The station lies below Xinyi Road Section 3 between Xinsheng South Road and Jianguo South Road, immediately beside the 25.8-hectare Daan Forest Park.', source: dortsDaanParkStationDesign.id },
      { text: 'The original surface plan would have placed entrances and ventilation objects along the park’s northern pavement, but the detailed design changed direction because the site contained a rare large urban forest landscape.', source: dortsDaanParkStationDesign.id },
      { text: 'The resulting concept brings sunlight and greenery into the underground station through a sunlight hall, sunken garden, light corridor and light towers, with different levels used to create a gradual transition between park and platform.', source: dortsDaanParkStationDesign.id },
      { text: 'Opening the side wall of the concourse connects the sunlight hall and multifunction plaza to the sunken garden above it, reducing the physical distance between the station and the park.', source: dortsDaanParkStationDesign.id },
      { text: 'The landscape paper calls this “Forest Transfer—Dialogue between City and Park” and treats sunlight, air and water as the three life-supporting elements that connect the station to the park.', source: dortsDaanParkLandscape.id },
      { text: 'Its planting plan respects the park’s existing forest and Taiwanese native trees, adds seasonal native plants, and uses nectar and bird-attracting species to increase habitat layers.', source: dortsDaanParkLandscape.id },
      { text: 'The hardscape follows the same ecological language through curved forms, waterfalls, water curtains, jumping fountains, mist and a gently planted slope leading back into the park.', source: dortsDaanParkLandscape.id },
      { text: 'The joint-development record gives Daan Park a private 2,994-square-metre site with a 29-storey, five-basement building, and places the station’s Exit 6 on the west side of the development.', source: dortsXinyiDaanDevelopment.id },
      { text: 'That development set the building back 12 metres from Xinyi Road and used matching tones and materials for the transit facilities so that the entrance and building read as one urban edge.', source: dortsXinyiDaanDevelopment.id },
      { text: 'The coordinated Daan Park, Daan and Xinyi Anhe public-art project was selected through an open call in October 2011 with a NT$22.5 million budget and was completed by the end of 2013.', source: dortsDaanParkArtProject.id },
      { text: 'DORTS frames the project as a way to make the park’s ecology and public memory legible through a station that is also a civic landscape, not simply a buried transport box.', source: dortsDaanParkArtProject.id },
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
    proseSources: [dortsXinyiDesignOverview, dortsCK570H, dortsCK570HConstruction, dortsCK570HTunnel],
    prose: [
      { text: 'The current DORTS station table identifies Dongmen as R07/O06 with engineering code R10, while the Xinyi design overview labels the station R10/014.', source: dortsXinyi.id },
      { text: 'The technical overview places Dongmen at the western end of the six-station Xinyi section, where the route continues from the Zhongzheng Memorial Hall area along Xinyi Road toward Xiangshan.', source: dortsXinyiDesignOverview.id },
      { text: 'CK570H included the cut-and-cover Dongmen station, four shield-driven metro tunnels and one common utility tunnel, combining the station with the difficult interface between the Xinyi and Zhonghe–Xinlu systems.', source: dortsCK570H.id },
      { text: 'The station lies below Xinyi Road Section 2 between Jinshan South Road and Yongkang Street, measures about 216 metres by 25 metres, reaches roughly 32 metres deep and uses a cut-and-cover box structure.', source: dortsCK570H.id },
      { text: 'The Xinyi tunnels from Zhongzheng Memorial Hall to Dongmen total about 2,445.1 metres across the two directions, while the shared tunnel through the memorial-park area totals 810.82 metres.', source: dortsCK570H.id },
      { text: 'Because the excavation reached the water-bearing Songshan gravel formation, the project used a 72-metre-deep diaphragm wall through 28 metres of gravel to an impermeable layer rather than relying only on pumping and a shallow cutoff.', source: dortsCK570H.id },
      { text: 'The construction paper says that wall system was intended to control uplift from groundwater and avoid overloading the normal drainage system during the flood season.', source: dortsCK570H.id },
      { text: 'Building protection was designed around predicted settlement: the station used an internal 100-centimetre-thick buttress diaphragm wall to reduce lateral movement while excavation proceeded, even though the measure added work and time.', source: dortsCK570HConstruction.id },
      { text: 'The main station structure is described as a double-wall SRC system built top-down, with the constrained site forcing ventilation facilities into Lianyun Street and Lane 114 rather than leaving a broad surface footprint.', source: dortsCK570HConstruction.id },
      { text: 'Its interior uses directional granite floor patterns, enamel panels, perforated aluminium ceilings and special translucent panels, while the platform wall carries cut-metal art panels with flowers, grasses and birds that DORTS links to the existing Dongmen commercial area.', source: dortsCK570HConstruction.id },
      { text: 'The station’s information counters also had to be resized because the Zhonghe–Xinlu and Xinyi system suppliers were different companies and the combined waterproof-gate and water-level-monitoring equipment would not fit the original counter enclosure.', source: dortsCK570HConstruction.id },
      { text: 'The most complex section was a 113-metre four-tunnel intersection, where the tunnel clearances ranged from 2.93 to 5.42 metres and the two Xinyi tunnels had to pass before the overlying Zhonghe–Xinlu tunnels.', source: dortsCK570HTunnel.id },
      { text: 'Ground improvement, steel supports for the completed lower tunnels and continuous monitoring were used to control settlement; the reported completed settlement was about 1.8–2.1 centimetres against a pre-construction maximum prediction of 1.6 centimetres.', source: dortsCK570HTunnel.id },
      { text: 'The full CK570H pages establish the station package, method, dimensions and tunnel-interface risks but do not identify an individual contractor, award date or final station-package value; those fields remain TBC.', source: dortsCK570H.id },
    ],
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
    prose: [
      { text: 'DORTS frames “Hand Suite” as a humane reading of the metro journey and says it writes NTU Hospital station’s local history and humanities into the work’s landscape.', source: art.ntuHospital.id },
    ],
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
    prose: [
      { text: 'DORTS says “Shuanglian · Travelling Far” was selected through an open call from 53 entries, using linked chronological signs to express the area’s historical change.', source: art.shuanglian.id },
    ],
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
    ...(data.proseSources ?? []),
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
