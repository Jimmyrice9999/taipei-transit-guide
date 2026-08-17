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

const dortsNewStore = source(
  'dorts-songshan-xindian-new-store-route',
  'New Store Line route and stations',
  '新店線路線說明',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=71ACC5B0CDFFC313&s=CBD13A8895C4EF94',
  'The builder’s full route page publishes the New Store and Xiaobitan guideways, opening chronology, engineering numbers, station exit counts and listed interchanges.',
)

const dortsXiaonanmen = source(
  'dorts-songshan-xindian-xiaonanmen-route',
  'Xiaonanmen Line route and station',
  '小南門線路線說明',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=71acc5b0cdffc313&s=9A7448733F1518F5',
  'The builder’s full route page publishes Xiaonanmen’s underground construction, original maintenance-track role, opening date, merger into the G service and G11 station table.',
)

const dortsSongshan = source(
  'dorts-songshan-line-route',
  'Songshan Line route and stations',
  '松山線路線說明',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=71acc5b0cdffc313&s=C974A7C467B035B8',
  'The builder’s full route page publishes the underground alignment, design and construction contracts, opening date, engineering numbers, exit counts and listed connections.',
)

const dortsStationPlanning = source(
  'dorts-songshan-xindian-station-planning',
  'MRT station planning and design practice',
  '捷運工程叢書 精進版－2 捷運車站規劃與設計實務',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page31.html',
  'The full planning-book page identifies Songshan–Xindian as an underground heavy-rail line and names Qizhang and Xindian District Office as shallow-cut examples.',
)

const dortsUndergroundConstruction = source(
  'dorts-songshan-xindian-underground-construction',
  'Underground MRT station concrete construction practice',
  '捷運工程叢書 精進版－31 捷運地下車站結構混凝土施工實務',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no31/files/basic-html/page23.html',
  'The full construction-book page identifies the New Store and Songshan lines as underground, open-cut-and-cover construction using long box structures and slab-wall systems.',
)

const dortsDepot = source(
  'dorts-songshan-xindian-depot',
  'Taipei MRT depot planning summary',
  '臺北捷運機廠規劃營運及建設中機廠彙整表',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no1/files/basic-html/page202.html',
  'The official depot table lists Xindian Depot as the Songshan–Xindian Line depot, a heavy-rail steel-wheel level-three depot with about 3.5 hectares and 18 storage tracks.',
)

const dortsSongshanArchitecture = source(
  'dorts-songshan-station-architecture',
  'Songshan Line station architectural design',
  '松山線各車站建築設計簡介',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no52/files/basic-html/page65.html',
  'The full engineering-journal pages publish station-specific levels, platform forms, exit counts, design themes and surrounding landmarks for the Songshan Line stations.',
)

const dortsSongshanG18Architecture = source(
  'dorts-songshan-g18-architecture',
  'Nanjing Sanmin station architectural design',
  '松山線各車站建築設計簡介',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no52/files/basic-html/page68.html',
  'The full architecture page records Nanjing Sanmin’s surrounding office-and-arcade context, travel pattern and “Community vestibule and city gateway” design rationale.',
)

const dortsArenaArt = source(
  'dorts-songshan-arena-public-art',
  'Songshan Line public art: Taipei Arena station',
  '捷運松山線公共藝術介紹',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no52/files/basic-html/page152.html',
  'The full public-art article identifies Taipei Arena station’s 推進 and 啟動密碼, their artists and optical/mechanical media; its references identify the 2014 selection reports.',
)

const dortsSongshanArt = source(
  'dorts-songshan-songshan-public-art',
  'Songshan Line public art: Songshan station',
  '捷運松山線公共藝術介紹',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no52/files/basic-html/page156.html',
  'The full public-art article identifies 河流彎曲之處，域見繁花光穹, its artist and LED/crystal-glass medium, open-call selection and Songshan site context; the article’s references identify a 2016 results album, not a work completion year.',
)

const trtcUrls: Record<string, string> = {
  G01: 'https://web.metro.taipei/pages2026/WebStation/033/1',
  G02: 'https://web.metro.taipei/pages2026/WebStation/034/1',
  G03: 'https://web.metro.taipei/pages2026/WebStation/035/1',
  G03A: 'https://web.metro.taipei/pages2026/WebStation/032/1',
  G04: 'https://web.metro.taipei/pages2026/WebStation/036/1',
  G05: 'https://web.metro.taipei/pages2026/WebStation/037/1',
  G06: 'https://web.metro.taipei/pages2026/WebStation/038/1',
  G07: 'https://web.metro.taipei/pages2026/WebStation/039/1',
  G08: 'https://web.metro.taipei/pages2026/WebStation/040/1',
  G09: 'https://web.metro.taipei/pages2026/WebStation/041/1',
  G10: 'https://web.metro.taipei/pages2026/WebStation/042/1',
  G11: 'https://web.metro.taipei/pages2026/WebStation/043/1',
  G12: 'https://web.metro.taipei/pages2026/WebStation/086/1',
  G13: 'https://web.metro.taipei/pages2026/WebStation/105/1',
  G14: 'https://web.metro.taipei/pages2026/WebStation/053/1',
  G15: 'https://web.metro.taipei/pages2026/WebStation/132/1',
  G16: 'https://web.metro.taipei/pages2026/WebStation/009/1',
  G17: 'https://web.metro.taipei/pages2026/WebStation/109/1',
  G18: 'https://web.metro.taipei/pages2026/WebStation/110/1',
  G19: 'https://web.metro.taipei/pages2026/WebStation/111/1',
}

const trtcNames: Record<string, { en: string; zh: string }> = {
  G01: { en: 'Xindian', zh: '新店' },
  G02: { en: 'Xindian District Office', zh: '新店區公所' },
  G03: { en: 'Qizhang', zh: '七張' },
  G03A: { en: 'Xiaobitan', zh: '小碧潭' },
  G04: { en: 'Dapinglin', zh: '大坪林' },
  G05: { en: 'Jingmei', zh: '景美' },
  G06: { en: 'Wanlong', zh: '萬隆' },
  G07: { en: 'Gongguan', zh: '公館' },
  G08: { en: 'Taipower Building', zh: '台電大樓' },
  G09: { en: 'Guting', zh: '古亭' },
  G10: { en: 'Chiang Kai-Shek Memorial Hall', zh: '中正紀念堂' },
  G11: { en: 'Xiaonanmen', zh: '小南門' },
  G12: { en: 'Ximen', zh: '西門' },
  G13: { en: 'Beimen', zh: '北門' },
  G14: { en: 'Zhongshan', zh: '中山' },
  G15: { en: 'Songjiang Nanjing', zh: '松江南京' },
  G16: { en: 'Nanjing Fuxing', zh: '南京復興' },
  G17: { en: 'Taipei Arena', zh: '台北小巨蛋' },
  G18: { en: 'Nanjing Sanmin', zh: '南京三民' },
  G19: { en: 'Songshan', zh: '松山' },
}

function trtcStation(code: string): Source {
  const station = trtcNames[code]
  return source(
    `trtc-${code.toLowerCase()}-station`,
    `${code} ${station.en} station information`,
    `車站資訊查詢：${code} ${station.zh}`,
    trtcPublisher,
    trtcUrls[code],
    'The operator’s full station page publishes the current station facilities, toilets, bicycle access, exit count and numbered exit locations.',
  )
}

type GData = {
  structure: Structure
  engineering: string
  exits: number
  openingDate: string
  openingSource?: Source
  structureSource?: Source
  platformDetails: string
  platformSource?: Source
  exitDetails: string
  facilities: string
  landmarks: string
  publicArt?: string
  publicArtSource?: Source
  naming: string
  namingSource?: Source
  engineeringHistory: string
  engineeringHistorySource?: Source
  interchange?: { label: string; lineCode?: string }
  prose?: StationProseSentence[]
}

const tbc = 'TBC'
const underground = 'Underground station; platform form and track count: TBC.'

const gData: Record<string, GData> = {
  G01: {
    structure: 'underground', engineering: 'G01', exits: 1, openingDate: '11 November 1999',
    platformDetails: underground,
    exitDetails: '1: 北新路1段與北宜路1段交叉口. Accessible exit: 1.',
    facilities: 'Accessible lifts: platform lift at the paid concourse near the enquiry point, and exit lift by the Xindian Road concourse; enquiry point near exit 1; water dispenser at exit 1; unpaid toilets at the bus plaza/convenience store and paid-concourse toilets by the lift; parent/accessible toilet and nursing room in the paid concourse; baby-changing facilities; bicycle access open.',
    landmarks: tbc,
    naming: tbc,
    engineeringHistory: 'The New Store Line south section opened between Guting and Xindian on 11 November 1999; station-specific construction history beyond the route chronology: TBC.',
  },
  G02: {
    structure: 'underground', engineering: 'G02', exits: 2, openingDate: '11 November 1999',
    structureSource: dortsStationPlanning,
    platformDetails: 'Shallow-cut underground station; platform form and track count: TBC.', platformSource: dortsStationPlanning,
    exitDetails: '1: 北新路1段295號與中華路交叉口; 2: 北新路1段與北新路88巷交叉口. Accessible exits: TBC.',
    facilities: 'Exit 1 enquiry point; water dispenser at exit 1; platform lifts at the centres of both platforms; paid-concourse toilets; parent/accessible toilet; baby-changing facilities; bicycle access open.',
    landmarks: tbc,
    naming: tbc,
    engineeringHistory: 'DORTS identifies Xindian District Office as a shallow-cut station. The New Store Line south section opened between Guting and Xindian on 11 November 1999.',
    engineeringHistorySource: dortsStationPlanning,
    prose: [
      { text: 'DORTS’s planning manual names Xindian District Office as a shallow-cut example.', source: dortsStationPlanning.id },
      { text: 'Its construction manual places the New Store Line’s underground stations in open-cut-and-cover work using long box structures and slab-wall systems.', source: dortsUndergroundConstruction.id },
    ],
  },
  G03: {
    structure: 'underground', engineering: 'G03', exits: 2, openingDate: '11 November 1999',
    structureSource: dortsStationPlanning,
    platformDetails: 'Shallow-cut underground station; platform form and track count: TBC.', platformSource: dortsStationPlanning,
    exitDetails: '1: 北新路2段150號; 2: 北新路2段、鄰近明德路口、近新店郵局. Accessible exits: TBC.',
    facilities: 'Exit 1 enquiry point; water dispenser at exit 1; platform lift at the centre of platform 2; paid-concourse toilets and parent/accessible toilet by the escalator; nursing room in the paid hall; baby-changing facilities; bicycle access open.',
    landmarks: '新店郵局',
    naming: tbc,
    engineeringHistory: 'DORTS identifies Qizhang as a shallow-cut station. The New Store Line south section opened between Guting and Xindian on 11 November 1999.',
    engineeringHistorySource: dortsStationPlanning,
    prose: [
      { text: 'DORTS’s planning manual names Qizhang as a shallow-cut example.', source: dortsStationPlanning.id },
      { text: 'Its construction manual places the New Store Line’s underground stations in open-cut-and-cover work using long box structures and slab-wall systems.', source: dortsUndergroundConstruction.id },
    ],
  },
  G03A: {
    structure: 'elevated', engineering: 'G01A', exits: 2, openingDate: '29 September 2004',
    platformDetails: 'Elevated terminal station above the Xindian Depot development; platform form and track count: TBC.', platformSource: dortsNewStore,
    exitDetails: '1: 環河路與中央路交叉口; 2: 中央路與中央三街交叉口. Accessible exits: TBC.',
    facilities: 'Exit lifts at exits 1 and 2; exit 1 enquiry point; water dispenser near the enquiry point; unpaid toilets at exit 1 and paid-gate toilets; parent/accessible toilet; baby-changing facilities; bicycle access open.',
    landmarks: tbc,
    naming: tbc,
    engineeringHistory: 'The branch leaves the main line underground, rises to ground level and climbs within Xindian Depot to the elevated Xiaobitan station. The branch opened for shuttle service on 29 September 2004.',
    engineeringHistorySource: dortsNewStore,
  },
  G04: {
    structure: 'underground', engineering: 'G04', exits: 5, openingDate: '11 November 1999',
    platformDetails: underground,
    exitDetails: '1: 民權路27號、北新路3段與民權路路口; 2: 北新路3段142巷口; 3: 北新路3段190號、北新路3段與民權路路口、鄰近消防署; 4: 北新路3段200號、鄰近景美橋; 5: 中興路3段與民權路路口西南隅. Accessible exits: 3 and 5.',
    facilities: 'Exit lifts at exits 3 and 5; platform lift on the paid north concourse; enquiry points near exits 3–5; water dispensers at exit 3 and the unpaid area near exit 5; unpaid toilets by exits 3 and 4 and paid transfer-concourse toilets; parent/accessible toilets; nursing room in the paid hall; baby-changing facilities; bicycle access open except the Circular Line.',
    landmarks: '消防署; 景美橋',
    naming: tbc,
    engineeringHistory: 'The New Store Line south section opened between Guting and Xindian on 11 November 1999.',
    interchange: { label: 'Circular Line; transfer mode: TBC', lineCode: 'Y' },
  },
  G05: {
    structure: 'underground', engineering: 'G05', exits: 3, openingDate: '11 November 1999',
    platformDetails: underground,
    exitDetails: '1: 羅斯福路6段401巷口、景美郵局旁; 2: 景中街1號與景美街交叉口、文山二分局斜對面; 3: 羅斯福路6段218號與景福街交叉口、臺灣銀行旁. Accessible exit: 1.',
    facilities: 'Exit 1 lift; paid-concourse platform lift near the enquiry point; enquiry point at exit 1; water dispenser at exit 1; unpaid toilets and parent/accessible toilet near exit 1; baby-changing facilities; bicycle access open.',
    landmarks: '景美郵局; 文山二分局; 臺灣銀行',
    naming: tbc,
    engineeringHistory: 'The New Store Line south section opened between Guting and Xindian on 11 November 1999.',
  },
  G06: {
    structure: 'underground', engineering: 'G06', exits: 4, openingDate: '11 November 1999',
    platformDetails: underground,
    exitDetails: '1: 羅斯福路5段238號; 2: 羅斯福路5段245號; 3: 羅斯福路5段215號; 4: 羅斯福路5段214號. Accessible exit: 4.',
    facilities: 'Exit 4 lift; paid-concourse platform lift near the enquiry point; enquiry point near exit 3; water dispenser at exit 4; unpaid toilets and parent/accessible toilet near exits 3 and 4; baby-changing facilities; bicycle access open.',
    landmarks: tbc,
    naming: tbc,
    engineeringHistory: 'The New Store Line south section opened between Guting and Xindian on 11 November 1999.',
  },
  G07: {
    structure: 'underground', engineering: 'G07', exits: 4, openingDate: '11 November 1999',
    platformDetails: underground,
    exitDetails: '1: 羅斯福路4段74號; 2: 羅斯福路4段舟山路口; 3: 羅斯福路4段台灣大學; 4: 羅斯福路4段44號. Accessible exits: 1 and 2.',
    facilities: 'Exit lifts at exits 1 and 2; paid-concourse platform lift near the enquiry point; enquiry points at exits 1 and 2; water dispenser at exit 2; unpaid toilets and parent/accessible toilet near exits 1 and 2; nursing room in the unpaid hall near exit 4; baby-changing facilities; bicycle access open.',
    landmarks: '臺灣大學',
    naming: tbc,
    engineeringHistory: 'The New Store Line south section opened between Guting and Xindian on 11 November 1999.',
  },
  G08: {
    structure: 'underground', engineering: 'G09', exits: 5, openingDate: '11 November 1999',
    platformDetails: underground,
    exitDetails: '1: 辛亥路1段、羅斯福路3段142巷口; 2: 羅斯福路3段與辛亥路1段交叉口、古亭國小旁; 3: 羅斯福路3段177號; 4: 羅斯福路3段100號、師大路130巷口; 5: 羅斯福路3段126號. Accessible exit: 5.',
    facilities: 'Exit 5 lift; paid-concourse platform lift near the enquiry point; enquiry point at exit 3; water dispenser at exit 3; unpaid toilets and parent/accessible toilet near exits 3 and 4; baby-changing facilities; bicycle access open.',
    landmarks: '古亭國小',
    naming: tbc,
    engineeringHistory: 'The New Store Line south section opened between Guting and Xindian on 11 November 1999.',
  },
  G09: {
    structure: 'underground', engineering: 'G10', exits: 9, openingDate: '24 December 1998',
    platformDetails: underground,
    exitDetails: '1: 羅斯福路2段136號; 2: 羅斯福路2段168號; 3: 羅斯福路2段79號; 4: 羅斯福路2段69號; 5: 和平東路1段17號; 6: 羅斯福路2段43號; 7: 羅斯福路2段50號、近郵政醫院、婦幼醫院; 8: 和平西路1段13號; 9: 羅斯福路2段100號. Accessible exit: 1.',
    facilities: 'Exit 1 lift; paid-concourse platform lift; enquiry points near exits 1–4 and 5–9; water dispenser at exit 6; unpaid toilets and parent/accessible toilet near exits 1–4; nursing room in the unpaid hall near exits 7–9; baby-changing facilities; bicycle access open.',
    landmarks: '郵政醫院; 婦幼醫院',
    naming: tbc,
    engineeringHistory: 'The New Store Line north section between NTU Hospital and Guting opened with the Zhonghe Line on 24 December 1998.',
    interchange: { label: 'Zhonghe–Xinlu Line; transfer mode: TBC', lineCode: 'O' },
  },
  G10: {
    structure: 'underground', engineering: 'G11', exits: 7, openingDate: '24 December 1998',
    platformDetails: underground,
    exitDetails: '1: 羅斯福路1段、近勞保局; 2: 羅斯福路1段8之1號; 3: 羅斯福路1段、近金華街; 4: 羅斯福路1段7號; 5: 愛國東路與中山南路交叉口、近中正紀念堂; 6: 愛國西路與中山南路交叉口、臺北市立大學附設實驗國民小學、國家圖書館; 7: 愛國西路2號、近中央銀行. Accessible exits: 1 and 5.',
    facilities: 'Exit lifts at exits 1 and 5; paid-concourse platform lifts on the north and south sides; enquiry points near exits 2–4 and 5–7; water dispenser near exit 6; unpaid toilets and parent/accessible toilets near exits 2–4 and 5–7; nursing room at the paid B2 north platform; baby-changing facilities; bicycle access open.',
    landmarks: '勞保局; 中正紀念堂; 國家圖書館; 中央銀行',
    naming: tbc,
    engineeringHistory: 'The New Store Line north section between NTU Hospital and Guting opened with the Zhonghe Line on 24 December 1998. DORTS’s current route table labels this station “中正紀年堂站”; the operator’s station page uses “中正紀念堂”.',
    interchange: { label: 'Tamsui–Xinyi Line; transfer mode: TBC', lineCode: 'R' },
  },
  G11: {
    structure: 'underground', engineering: 'G12', exits: 4, openingDate: '31 August 2000', openingSource: dortsXiaonanmen,
    platformDetails: underground, platformSource: dortsXiaonanmen,
    exitDetails: '1: 愛國西路、臺北市後備指揮部旁; 2: 愛國西路30號; 3: 愛國西路與博愛路口、近植物園; 4: 愛國西路22號、近臺灣菸酒公司. Accessible exit: 3.',
    facilities: 'Exit lift between exits 3 and 4; paid-concourse platform lift near the enquiry point; enquiry point and water dispenser between exits 3 and 4; unpaid toilets and parent/accessible toilet near exits 3 and 4; baby-changing facilities; bicycle access open.',
    landmarks: '植物園; 臺灣菸酒公司',
    naming: 'The route page describes Xiaonanmen as the original maintenance track (原維護軌); public station-name history: TBC.', namingSource: dortsXiaonanmen,
    engineeringHistory: 'Xiaonanmen was designed and built with the Nangang Line under DL171, CN251 and CN254A so Bannan Line trains could reach Beitou Depot for maintenance. It opened as a separate line in 2000 and joined the Songshan–Xindian service in 2014.',
    engineeringHistorySource: dortsXiaonanmen,
    prose: [
      { text: 'DORTS says the route was shortened to avoid construction difficulty and wasted future investment, while still letting Bannan Line trains reach Beitou Depot for maintenance and carrying passengers in service.', source: dortsXiaonanmen.id },
    ],
  },
  G12: {
    structure: 'underground', engineering: 'G13', exits: 6, openingDate: '15 November 2014',
    platformDetails: underground,
    exitDetails: '1: 漢中街與成都路口、近西門紅樓; 2: 中華路1段59號、近臺北市憲兵隊; 3: 中華路與寶慶路口; 4: 中華路與衡陽路口; 5: 中華路與秀山街口; 6: 漢中街與成都路口. Accessible exits: 4 and 6.',
    facilities: 'Exit lifts at exits 4 and 6; paid-concourse platform lift behind the enquiry point; enquiry points at exits 1 and 6; water dispenser at exit 4; paid-zone toilets and parent/accessible toilet by the hall lift; nursing room in the unpaid hall near exit 4; baby-changing facilities; bicycle access open.',
    landmarks: '西門紅樓',
    naming: tbc,
    engineeringHistory: 'The Songshan Line connected Ximen to Songshan as an 8.5-kilometre underground project. DORTS divided its construction into DG166–168 design sections and CG590A–C civil-works sections.',
    engineeringHistorySource: dortsSongshan,
    interchange: { label: 'Bannan Line; transfer mode: TBC', lineCode: 'BL' },
  },
  G13: {
    structure: 'underground', engineering: 'G14', exits: 3, openingDate: '15 November 2014',
    platformDetails: 'Underground four-level side-platform station; two platforms and two running tracks: track count beyond the two platform tracks: TBC.', platformSource: dortsSongshanArchitecture,
    exitDetails: '1: 塔城街與忠孝西路2段交叉口西北側; 2: 塔城街東側; 3: 塔城街與鄭州路交叉口西南隅. Accessible exits: 2 and 3.',
    facilities: 'Exit lifts at exits 2 and 3; paid-concourse platform lifts on the east and west sides; enquiry point at exit 1; water dispensers near exits 1 and 2; unpaid toilets and parent/accessible toilets near exit 2 and the enquiry point; baby-changing facilities; bicycle access open.',
    landmarks: '北門古城門; 臺北車站; 臺北地下街; 機場捷運線臺北車站; 臺灣總督府交通局鐵道部建築群',
    naming: tbc,
    engineeringHistory: 'The station’s design theme is activation and reuse of the Beimen archaeological and cultural heritage. Its underground link level connects Beimen, Taipei Underground Mall and the Airport MRT; granite wall panels and archaeological displays incorporate the former city gate and railway history.',
    engineeringHistorySource: dortsSongshanArchitecture,
    prose: [
      { text: 'DORTS records the Beimen site among the old city gate and former Railway Department buildings, with a former Taiwan Railway Administration dormitory on the west side and other historic buildings around the station.', source: dortsSongshanArchitecture.id },
    ],
    interchange: { label: 'Airport MRT at Taipei Main Station via underground passage; transfer mode: TBC' },
  },
  G14: {
    structure: 'underground', engineering: 'G16', exits: 6, openingDate: '15 November 2014',
    platformDetails: 'Underground four-level island-platform station; two platforms and two running tracks: additional track count: TBC.', platformSource: dortsSongshanArchitecture,
    exitDetails: '1: 南京西路16號; 2: 南京西路12號、近中山北路1段; 3: 南京西路11號、近中山北路2段; 4: 南京西路27號; 5: 南京西路55號、南京西路與赤峰街口東北側; 6: 南京西路與赤峰街口東南側、南京西路64巷. Accessible exits: 4, 5 and 6.',
    facilities: 'Exit lifts at exits 4–6; platform lifts for the G and R platforms; enquiry points near exits 1 and 4 and exits 5–6; water dispensers at exits 1 and 5; unpaid toilets and parent/accessible toilets near exit 6 and exit 1 in the Zhongshan Arts Corridor; nursing room in the unpaid G hall near exit 5; baby-changing facilities; bicycle access open.',
    landmarks: '中山藝術公園',
    naming: tbc,
    engineeringHistory: 'The station is a Tamsui–Xinyi and Songshan Line co-constructed interchange. DORTS’s architectural theme is “Happy transfer” (快樂轉運), with the Songshan station structure integrated into joint-development sites.',
    engineeringHistorySource: dortsSongshanArchitecture,
    interchange: { label: 'Tamsui–Xinyi Line; transfer mode: TBC', lineCode: 'R' },
  },
  G15: {
    structure: 'underground', engineering: 'G17', exits: 8, openingDate: '15 November 2014',
    platformDetails: 'DORTS’s station overview calls this an underground three-level island-platform station; its component description calls the Songshan Line G platform side-style and the O platform island-style. Platform count is therefore published inconsistently; track count: TBC.', platformSource: dortsSongshanArchitecture,
    exitDetails: '1: 松江路與南京東路交叉口西南側、南京東路; 2: 同一西南側、松江路108巷; 3: 同一西南側、近松江公園; 4: 同一東南側、松江路; 5: 同一東南側、南京東路; 6: 同一東北側、南京東路; 7: 同一東北側、松江路、近四平街; 8: 同一西北側、松江路124巷. Accessible exits: 1, 2 and 8.',
    facilities: 'Exit lifts at exits 1, 2 and 8; platform lift on the O-line paid concourse; enquiry points near exits 1–3; water dispensers at exit 2 and between exits 4–7; unpaid toilets and parent/accessible toilets near exits 1, 2, 5 and 6; paid toilets and parent/accessible toilet at exit 8; G-line nursing room in the unpaid B1 hall near exits 6–7; baby-changing facilities; bicycle access open.',
    landmarks: '松江公園; 大同高中; 長安國中',
    naming: tbc,
    engineeringHistory: 'The station’s design theme is “Urban multitude” (都會眾生相). DORTS describes it as a joint station with the Zhonghe–Xinlu Line, with the Songshan platform above the O-line island platform in the station section described there.',
    engineeringHistorySource: dortsSongshanArchitecture,
    interchange: { label: 'Zhonghe–Xinlu Line; transfer mode: TBC', lineCode: 'O' },
  },
  G16: {
    structure: 'underground', engineering: 'G18', exits: 8, openingDate: '15 November 2014',
    platformDetails: 'Underground three-level island-platform station; two platforms and two running tracks: additional track count: TBC.', platformSource: dortsSongshanArchitecture,
    exitDetails: '1: 南京東路3段與遼寧街155巷; 2: 南京東路3段與遼寧街交叉口西南側; 3: 南京東路3段與復興北路交叉口西南側、近南京東路3段194巷; 4: 同一西南側、近216巷; 5: 同一東南側、近256巷; 6: 南京東路3段北側、近兄弟飯店; 7: 同一東北側、近慶城街、兄弟飯店; 8: 同一西北側. Accessible exits: 1, 2 and 7.',
    facilities: 'Exit lifts at exits 1, 2 and 7; platform lifts for the Wenhu north platform and G central/east platform; paid-hall transfer lift for the Wenhu connection; enquiry points near exits 1 and 7; water dispensers at exits 2 and 7; unpaid toilets and parent/accessible toilets near exits 1, 2 and 5 and paid toilets near exit 7 and the middle hall; nursing room in the paid G B2 area; baby-changing facilities; bicycle access not open.',
    landmarks: '華航大樓; 六福皇宮; 兄弟飯店; 敦化國中',
    naming: tbc,
    engineeringHistory: 'The station’s design theme is “The trajectory of transfer” (轉換的軌跡). It is a vertical interchange between the underground Songshan Line and the existing elevated Wenhu station, connected by a transfer escalator more than ten metres long.',
    engineeringHistorySource: dortsSongshanArchitecture,
    interchange: { label: 'Wenhu Line; transfer mode: TBC', lineCode: 'BR' },
  },
  G17: {
    structure: 'underground', engineering: 'G19', exits: 5, openingDate: '15 November 2014',
    platformDetails: 'Underground three-level island-platform station; two platforms and two running tracks: additional track count: TBC.', platformSource: dortsSongshanArchitecture,
    exitDetails: '1: 南京東路4段、近53巷; 2: 南京東路4段南側、近臺北小巨蛋; 3: 南京東路與北寧路交叉口西南側、近臺北體育場; 4: 同一東南側; 5: 南京東路與健康路交叉口西北側. Accessible exits: 1, 2 and 3.',
    facilities: 'Exit lifts at exits 1–3; platform lift near the centre of the platform; enquiry points near exits 3 and 4; water dispenser at exit 2; unpaid toilets and parent/accessible toilets near exit 2 and paid toilets near exits 3–4; baby-changing facilities; bicycle access open.',
    landmarks: '臺北小巨蛋; 臺北市立體育場; 體育學院',
    publicArt: '推進 — 洪東祿; perspective-reversal and lenticular-print wall works; 2014 selection report. 啟動密碼 — 袁廣鳴; mechanical Moiré-animation silhouette works; 2014 selection report.', publicArtSource: dortsArenaArt,
    naming: tbc,
    engineeringHistory: 'The station’s design theme is “The trajectory of sport” (運動的軌跡), integrating the underground station with the Taipei Arena and the city sports precinct. Exit forms use an oval-egg concept responding to the arena.',
    engineeringHistorySource: dortsSongshanArchitecture,
    prose: [
      { text: 'DORTS records the two Taipei Arena works as invited-competition selections installed along the vertical wall between the concourse and platform; Progress uses lenticular perspective so a baseball-playing model appears to move as passengers descend.', source: dortsArenaArt.id },
    ],
  },
  G18: {
    structure: 'underground', engineering: 'G21', exits: 4, openingDate: '15 November 2014',
    platformDetails: 'Underground two-level island-platform station; two platforms and two running tracks: additional track count: TBC.', platformSource: dortsSongshanArchitecture,
    exitDetails: '1: 南京東路5段與三民路口西北側; 2: 同一西南側; 3: 同一東南側; 4: 同一東北側、近路口. Accessible exits: 1 and 2.',
    facilities: 'Exit lifts at exits 1 and 2; platform lift at the platform centre; enquiry points near exits 1 and 2; water dispenser at exit 1; unpaid toilets and parent/accessible toilets near exits 2 and 3 and paid toilets near exits 1 and 4; baby-changing facilities; bicycle access open.',
    landmarks: tbc,
    naming: tbc,
    engineeringHistory: 'The station’s design theme is “Community vestibule and city gateway” (社區玄關＆城市門戶), using a neighbourhood-entrance concept for the station’s urban setting.',
    engineeringHistorySource: dortsSongshanArchitecture,
    prose: [
      { text: 'DORTS describes Nanjing Sanmin’s surroundings as orderly 12-to-19-storey office buildings with continuous arcades, where commuting and school trips predominate and shopping and tourism are secondary.', source: dortsSongshanG18Architecture.id },
    ],
  },
  G19: {
    structure: 'underground', engineering: 'G22', exits: 5, openingDate: '15 November 2014',
    platformDetails: 'Underground three-level island-platform station; two platforms and two running tracks: additional track count: TBC.', platformSource: dortsSongshanArchitecture,
    exitDetails: '1: 八德路4段與松山路口西北側、近饒河街觀光夜市; 2: 八德路4段北側、近松山市場; 3: 八德路4段與松山路口西南側、近松山區公所; 4: 同一東南側、近五分埔; 5: 同一東北側、近松山國小. Accessible exits: 3 and 5.',
    facilities: 'Exit lifts at exits 3 and 5; paid-concourse platform lift near the centre; enquiry point at exit 5; water dispenser at exit 3; unpaid toilets in the east oval hall and paid-centre toilets; parent/accessible toilet at the same areas; nursing room in the unpaid hall near exit 3; baby-changing facilities; bicycle access open.',
    landmarks: '慈祐宮; 饒河街觀光夜市; 五分埔成衣批發中心; 臺鐵松山車站',
    publicArt: '河流彎曲之處，域見繁花光穹 — 麻粒國際文化試驗（江洋輝）; more than 52,000 LED lights and crystal glass; completion year: TBC.', publicArtSource: dortsSongshanArt,
    naming: tbc,
    engineeringHistory: 'The station is a three-level underground interchange with the Taiwan Railways Songshan station, connected at the B1 mezzanine. Its design theme is “Festival of light” (光之慶典), responding to the district’s religious, commercial and transport activity.',
    engineeringHistorySource: dortsSongshanArchitecture,
    prose: [
      { text: 'DORTS places Songshan station under Bade Road beside the north square of Taiwan Railways Songshan station, among Raohe Street Night Market, Ciyou Temple, Wufenpu and the riverside park; its public-art work was chosen by open call and draws on the old name “Malisikou”, meaning a bend in the river.', source: dortsSongshanArt.id },
    ],
    interchange: { label: 'Taiwan Railways Administration Songshan station; transfer mode: TBC' },
  },
}

function makeResearch(code: string, data: GData): StationResearch {
  const stationSource = trtcStation(code)
  const routeSource = code === 'G11' ? dortsXiaonanmen : code >= 'G12' ? dortsSongshan : dortsNewStore
  const structureSource = data.structureSource ?? routeSource
  const openingSource = data.openingSource ?? routeSource
  const platformSource = data.platformSource ?? routeSource
  const engineeringSource = data.engineeringHistorySource ??
    (code >= 'G12' ? dortsSongshanArchitecture : code === 'G11' ? dortsXiaonanmen : code === 'G02' || code === 'G03' ? dortsStationPlanning : dortsNewStore)
  const sources = [
    stationSource,
    structureSource,
    openingSource,
    platformSource,
    dortsDepot,
    ...(data.publicArtSource ? [data.publicArtSource] : []),
    ...(data.namingSource ? [data.namingSource] : []),
    ...(data.prose?.some((sentence) => sentence.source === dortsSongshanG18Architecture.id) ? [dortsSongshanG18Architecture] : []),
    ...(data.prose?.some((sentence) => sentence.source === dortsUndergroundConstruction.id) ? [dortsUndergroundConstruction] : []),
    engineeringSource,
  ].filter((entry, index, all) => all.findIndex((other) => other.id === entry.id) === index)

  return {
    sources,
    identitySource: stationSource.id,
    mapSource: stationSource.id,
    structureSource: structureSource.id,
    openingSource: openingSource.id,
    scheduleSources: [],
    openingDate: data.openingDate,
    interchange: data.interchange ? { ...data.interchange, source: stationSource.id } : undefined,
    platformDetails: data.platformDetails,
    platformSource: platformSource.id,
    exitDetails: data.exitDetails,
    exitSource: stationSource.id,
    facilities: data.facilities,
    facilitiesSource: stationSource.id,
    depot: 'Xindian Depot is the published Songshan–Xindian Line depot; station-specific roster assignment: TBC.',
    depotSource: dortsDepot.id,
    publicArt: data.publicArt ?? tbc,
    publicArtSource: data.publicArtSource?.id,
    naming: data.naming,
    namingSource: data.namingSource?.id,
    engineeringHistory: data.engineeringHistory,
    engineeringHistorySource: engineeringSource.id,
    landmarks: data.landmarks,
    landmarksSource: stationSource.id,
  }
}

export const SONGSHAN_XINDIAN_OVERLAY: Record<string, StationOverlay> = Object.fromEntries(
  Object.entries(gData).map(([code, data]) => {
    const research = makeResearch(code, data)
    return [code, { structure: data.structure, engineering: data.engineering, exits: data.exits, research, sources: research.sources, prose: data.prose ?? [] }]
  }),
) as Record<string, StationOverlay>
