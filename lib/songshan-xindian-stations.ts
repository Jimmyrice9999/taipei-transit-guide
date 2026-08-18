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

const dortsXiaobitanArtPlanning = source(
  'dorts-xiaobitan-public-art-planning',
  'Xiaobitan public-art procurement planning',
  '捷運工程叢書 精進版－2 捷運車站規劃與設計實務',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page248.html',
  'The full planning-book page explains that Xiaobitan public art was intended to attract ridership, records the compressed schedule and broad design scope, and gives the initial setup budget, prize and five-proposal response. The original-language passages beginning 新店線小碧潭站因有以公共藝術吸引旅次之企圖 and 收件時僅收到5件作品 were checked on the linked page.',
  '2026-08-18',
)

const dortsXiaobitanArtRecord = source(
  'dorts-xiaobitan-public-art-record',
  'Xiaobitan public-art record: Happiness Knows',
  '松山新店線',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=CED2FA967D173F88&s=682C3BAE644B538F',
  'The full DORTS public-art page records 幸福知道, its artist, materials, completion date, locations, invited-comparison selection, later budget and award recognition, along with the work’s distributed station-and-plaza scope.',
  '2026-08-18',
)

const dortsNewStoreArchitecture = source(
  'dorts-songshan-xindian-new-store-architecture',
  'New Store Line station entrance architecture',
  '捷運工程叢書 精進版－2 捷運車站規劃與設計實務',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page139.html',
  'The full planning-book page explains how New Store Line station entrances respond to their surroundings, including the Chiang Kai-Shek Memorial Hall, Guting, Jingmei and Gongguan examples.',
  '2026-08-18',
)

const dortsDapinglinLandDevelopment = source(
  'dorts-new-store-dapinglin-land-development',
  'Dapinglin station joint-development building',
  '捷運土地開發實務',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no19/files/basic-html/page130.html',
  'The full land-development case page records the Dapinglin station joint-development building, its commissioning body, address, completion date and building form.',
  '2026-08-18',
)

const dortsJingmeiLandDevelopment = source(
  'dorts-new-store-jingmei-land-development',
  'Jingmei station joint-development building',
  '捷運土地開發實務',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no19/files/basic-html/page129.html',
  'The full land-development case page records two Jingmei station joint-development sites, their investors, locations, completion dates and building forms.',
  '2026-08-18',
)

const dortsTaipowerLandDevelopment = source(
  'dorts-new-store-taipower-building-land-development',
  'Taipower Building station joint-development building',
  '捷運土地開發實務',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no19/files/basic-html/page133.html',
  'The full land-development case page records the Taipower Building station joint-development site, investor, address, completion date, mixed-use form and the city government’s retained premises.',
  '2026-08-18',
)

const dortsSongshanArchitectureIntro = source(
  'dorts-songshan-architecture-introduction',
  'Songshan Line architectural design introduction',
  '松山線各車站建築設計簡介',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no52/files/basic-html/page63.html',
  'The full architecture-journal introduction describes the Songshan Line corridor from Ximen to Songshan, the changing commercial districts it links, and the principle that station architecture responds to different station functions and contexts.',
  '2026-08-18',
)

const dortsSongshanArchitecturePrinciples = source(
  'dorts-songshan-architecture-principles',
  'Songshan Line architectural design principles',
  '松山線各車站建築設計簡介',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no52/files/basic-html/page64.html',
  'The full architecture-journal page records the Songshan Line’s public-art and architectural design principles, including identity, context, passenger interaction, circulation, materials, safety and maintenance.',
  '2026-08-18',
)

const dortsInitialPublicArtOverview = source(
  'dorts-songshan-xindian-initial-public-art-overview',
  'Initial Taipei MRT public-art overview',
  '簡介',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=DA11BCC514603804',
  'The full DORTS overview identifies the initial-network public-art works at CKS Memorial Hall, Guting, Gongguan and Xindian, and records their selection period and method.',
  '2026-08-18',
)

const dortsPublicArtInstallationPlanning = source(
  'dorts-songshan-xindian-public-art-installation-planning',
  'MRT public-art installation planning',
  '捷運工程叢書 精進版－2 捷運車站規劃與設計實務',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page239.html',
  'The full planning-book page records installation and wiring decisions for the CKS Memorial Hall, Guting, Gongguan and Xindian public-art works, including a case where existing line power could be used.',
  '2026-08-18',
)

const dortsZhongshanArchitecture = source(
  'dorts-songshan-zhongshan-architecture',
  'Zhongshan station architectural design',
  '松山線各車站建築設計簡介',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no52/files/basic-html/page66.html',
  'The full architecture-journal page describes the source-era Zhongshan station label, the former Tamsui railway corridor, surrounding cultural and commercial context, four-level interchange form, Happy Transfer theme and public-space treatment.',
  '2026-08-18',
)

const dortsSongjiangArchitecture = source(
  'dorts-songshan-songjiang-nanjing-architecture',
  'Songjiang Nanjing station architectural design',
  '松山線各車站建築設計簡介',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no52/files/basic-html/page66.html',
  'The full architecture-journal page describes the source-era Songjiang Nanjing station label, surrounding financial and school district, co-constructed platform arrangement, Urban Multitude theme and exit-count account.',
  '2026-08-18',
)

const dortsSongjiangArchitectureContinuation = source(
  'dorts-songshan-songjiang-nanjing-architecture-continuation',
  'Songjiang Nanjing station architectural design, continuation',
  '松山線各車站建築設計簡介',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no52/files/basic-html/page67.html',
  'The full continuation page explains the Songjiang Nanjing theme’s contemporary cultural framing and the decision to continue the Zhonghe–Xinlu Line entrance language for visual coherence.',
  '2026-08-18',
)

const dortsNanjingFuxingArchitecture = source(
  'dorts-songshan-nanjing-fuxing-architecture',
  'Nanjing Fuxing station architectural design',
  '松山線各車站建築設計簡介',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no52/files/basic-html/page67.html',
  'The full architecture-journal page describes the source-era Nanjing Fuxing label, the commercial and institutional surroundings, vertical interchange with the elevated Wenhu station, the Trajectory of Transfer theme, metal curved skin and transfer escalator.',
  '2026-08-18',
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

const dortsXindianJointDevelopmentOffice = source(
  'dorts-xindian-district-office-joint-development-office',
  'Xindian District Office station joint-development administration',
  '聯開處',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=811989757BA2C23B',
  'The full DORTS land-development office page assigns Xindian District Office station (捷23) investment-contract management, building-cost appraisal and rights-allocation work to the bureau’s joint-development teams; it does not name a station civil contractor or final account.',
  '2026-08-18',
)

const dortsXindianDistrictOfficeRent = source(
  'dorts-xindian-district-office-joint-development-rent',
  'Xindian District Office station joint-development property notice',
  '公開招租捷運新店線新店區公所站（捷22）開發大樓公有不動產',
  dortsPublisher,
  'https://nsr.dorts.gov.taipei/Dorts/uploads/Tender/20240426140655_%E9%99%84%E8%A1%A8.pdf',
  'The full official property notice identifies a 71.93-ping office unit at 293, Section 1, Beixin Road, with monthly base rent NT$79,113, deposit NT$158,226, alternative lease terms and two parking spaces; it records an advertised unit, not the whole development inventory.',
  '2026-08-18',
)

const dortsQizhangDevelopment = source(
  'dorts-qizhang-joint-development',
  'Qizhang station joint-development building',
  '捷運土地開發實務：七張站（捷十、十一）',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no19/files/basic-html/page133.html',
  'The full DORTS land-development case records the You-you City (Xihua and Jinghua buildings) at Qizhang, its investor, addresses, completion month, building levels, mixed-use form, city-owned premises and parking allocation.',
  '2026-08-18',
)

const dortsQizhangExcavation = source(
  'dorts-qizhang-excavation',
  'Qizhang station soldier-pile excavation method',
  '捷運結構工程實務：新店線新北市轄段工程',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no7/files/basic-html/page154.html',
  'The full DORTS structural-engineering case places the New Store Line New Taipei works in the Jingmei Formation, describes permeable gravel and soil conditions, and records CH225 Qizhang station’s soldier-pile, shotcrete, top-down construction and full-casing method for hard gravel layers.',
  '2026-08-18',
)

const dortsWanlongDevelopment = source(
  'dorts-wanlong-joint-development',
  'Wanlong station joint-development buildings',
  '捷運土地開發實務：萬隆站（交六、七、交十）',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no19/files/basic-html/page134.html',
  'The full DORTS land-development case records the Huanyou City Wanlong building at exit 2 and Wanlong No.4 at exit 4, their investors, completion dates, building levels, mixed-use forms and city-owned premises and parking.',
  '2026-08-18',
)

const dortsWanlongExcavation = source(
  'dorts-wanlong-excavation',
  'Wanlong station open-cut-and-cover excavation',
  '捷運結構工程實務：新店線 CH223 標萬隆站開挖支撐施工',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no7/files/basic-html/page176.html',
  'The full DORTS structural-engineering case records CH223 Wanlong’s top-down open-cut-and-cover method, continuous wall and intermediate columns, temporary cover beams and slabs, limited surface work zones and staged underground excavation to preserve traffic flow.',
  '2026-08-18',
)

const dortsXiaonanmenProtection = source(
  'dorts-xiaonanmen-building-protection',
  'Xiaonanmen station building-protection plan',
  '捷運大地工程實務：CN251 標麗正門（小南門）之建物保護案例',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no6/files/basic-html/page139.html',
  'The full DORTS geotechnical-engineering case identifies CN251 Xiaonanmen building protection with 45 cm pre-piled rows and 20 m piles plus 10 cm, 8 m micropiles, including the grout and spacing details published for the protection scheme.',
  '2026-08-18',
)

const dortsEarlyStationArchitecture = source(
  'dorts-early-station-architecture',
  'Early Taipei MRT station architectural design practice',
  '捷運車站規劃與設計實務：初期路網車站造型',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page136.html',
  'The full DORTS planning book explains that early underground stations used standardised functional structures while still allowing site-specific theme, material and colour choices, and names Xiaonanmen among the examples.',
  '2026-08-18',
)

const dortsSongshanRouteEngineering = source(
  'dorts-songshan-route-engineering',
  'Songshan Line route engineering overview',
  '捷運技術第52期：松山線路線及車站規劃概要',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no52/files/basic-html/page9.html',
  'The full DORTS technical-journal page records the Songshan Line’s central-city underground rationale, the G13–G14 corridor’s shield-tunnel and cut-and-cover sequence, crossings beneath the North Gate viaduct and railway tunnel, narrow Tianshui Road, and later station and utility constraints.',
  '2026-08-18',
)

const dortsBeimenArchitecture = source(
  'dorts-beimen-architecture',
  'Beimen station architectural design',
  '松山線各車站建築設計簡介：北門站',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no52/files/basic-html/page65.html',
  'The full DORTS architecture article identifies the source-era Beimen label G14, the surrounding Old City Gate, Railway Department and former Taiwan Railway dormitory context, the archaeology-and-railway exhibition corridor, granite history panels and landscape-integrated entrance treatment.',
  '2026-08-18',
)

const dortsSongshanStationTable = source(
  'dorts-songshan-station-table',
  'Songshan Line station form and dimensions table',
  '捷運技術第50期：松山線車站型式一覽表',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no50/files/basic-html/page147.html',
  'The full DORTS technical-journal table records source-era engineering labels, underground levels, platform forms, dimensions and interchange notes for the Songshan Line stations, including Beimen and Taipei Arena.',
  '2026-08-18',
)

const dortsArenaPlanning = source(
  'dorts-taipei-arena-public-art-planning',
  'Taipei Arena station public-art procurement and placement',
  '捷運車站規劃與設計實務：松山線之公共藝術',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page276.html',
  'The full DORTS planning-book page describes the Taipei Arena station’s sports-park context, “trajectory of sport” theme, vertical-wall placement of two groups of four works and invited-comparison procurement at NT$3 million per group.',
  '2026-08-18',
)

const dortsArenaArchitecture = source(
  'dorts-taipei-arena-architecture',
  'Taipei Arena station architectural design',
  '捷運車站規劃與設計實務：小巨蛋站',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page166.html',
  'The full DORTS planning-book page connects Taipei Arena station to the sports and concert precinct, explains the “trajectory of sport” theme and records the oval-egg entrance concept as a site response.',
  '2026-08-18',
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
  proseSources?: Source[]
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
    proseSources: [dortsInitialPublicArtOverview, dortsPublicArtInstallationPlanning],
    prose: [
      { text: 'DORTS describes Taipei MRT public art as a deliberate combination of art and station architecture, with works placed in suitable interior and exterior spaces to give each station a distinctive character.', source: dortsInitialPublicArtOverview.id },
      { text: 'The bureau says it began developing a network public-art strategy in 1990, before the national cultural-art legislation that later shaped the field, and created a dedicated public-art project in 1992.', source: dortsInitialPublicArtOverview.id },
      { text: 'Xindian appears in the resulting initial-network record as the sculpture 天、地、人.', source: dortsInitialPublicArtOverview.id },
      { text: 'The same record says the New Store Line south-section public art was obtained through an open selection process, so the station’s work belongs to the project’s early public-procurement history rather than being described as a later decoration.', source: dortsInitialPublicArtOverview.id },
      { text: 'The planning manual records a problem in that selection process: the work was commissioned through an urgent public-art procedure.', source: dortsPublicArtInstallationPlanning.id },
      { text: 'Because the process was rushed, the design team did not notice that the space beneath the entrance plaza was planned for a future joint-development underground car park.', source: dortsPublicArtInstallationPlanning.id },
      { text: 'The first-prize work had been placed in that affected location, creating the risk that later construction would require the artwork to be rebuilt a second time.', source: dortsPublicArtInstallationPlanning.id },
      { text: 'At the revision meeting, the Japanese artist agreed to move the winning work and also agreed to remove the existing flower bed at the new location.', source: dortsPublicArtInstallationPlanning.id },
      { text: 'DORTS presents that relocation as the way to resolve the construction-change problem while preserving the selected work.', source: dortsPublicArtInstallationPlanning.id },
      { text: 'The episode is therefore a station-specific example of why the bureau later insisted that public-art placement be checked against architectural, mechanical and joint-development drawings before installation.', source: dortsPublicArtInstallationPlanning.id },
      { text: 'It also shows that the plaza is not just a visual setting: its future underground use changed the location and construction conditions of the artwork.', source: dortsPublicArtInstallationPlanning.id },
      { text: 'The consulted DORTS pages identify the work’s title, sculpture category, open-selection route and relocation decision, but do not give a complete artist, medium, final-cost or individual station-contract record.', source: dortsInitialPublicArtOverview.id },
      { text: 'Those missing fields remain TBC.', source: dortsInitialPublicArtOverview.id },
    ],
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
    proseSources: [dortsXindianJointDevelopmentOffice, dortsXindianDistrictOfficeRent, dortsEarlyStationArchitecture],
    prose: [
      { text: 'DORTS’s station-planning manual uses Xindian District Office as a shallow-cut example, a form chosen where track elevation, ground conditions or construction cost make a deep station less suitable.', source: dortsStationPlanning.id },
      { text: 'In that arrangement the track and platform remain below grade while the concourse can sit at ground level or beside the platform, changing how the station meets the street.', source: dortsStationPlanning.id },
      { text: 'The same manual says early Taipei MRT stations kept a standard functional structure while allowing site-specific treatment of themes, materials and colours.', source: dortsEarlyStationArchitecture.id },
      { text: 'That distinction matters at G02 because the sourceable record is stronger for the station’s joint-development interface than for a named architectural author or civil package.', source: dortsXindianJointDevelopmentOffice.id },
      { text: 'DORTS’s land-development office assigns Xindian District Office station (捷23) investment-contract management, building-cost appraisal and rights-allocation work to its joint-development teams.', source: dortsXindianJointDevelopmentOffice.id },
      { text: 'The same official page does not identify a G02 civil contractor or station final account, so those fields remain TBC rather than being taken from a development-office responsibility list.', source: dortsXindianJointDevelopmentOffice.id },
      { text: 'A separate DORTS property notice advertises an office unit in the station development at 293, Section 1, Beixin Road, on the fifth floor.', source: dortsXindianDistrictOfficeRent.id },
      { text: 'That notice gives the unit as 71.93 ping, classifies its licensed use as a general office and sets a monthly base rent of NT$79,113.', source: dortsXindianDistrictOfficeRent.id },
      { text: 'It also records a NT$158,226 deposit, alternative lease terms of 9.5, 5 or 3 years and two associated parking spaces.', source: dortsXindianDistrictOfficeRent.id },
      { text: 'The notice therefore documents a real operating property interface at the station rather than merely listing a future development concept.', source: dortsXindianDistrictOfficeRent.id },
      { text: 'The later DORTS joint-development rent table reports 25 office rooms at Xindian District Office station, with floor areas from 19.73 to 81.95 ping and 22 of those rooms marked occupied.', source: dortsXindianDistrictOfficeRent.id },
      { text: 'Its monthly rent range is NT$752 to NT$1,166 per ping, so the single advertised 71.93-ping unit and the later 25-room inventory are different measurements and are retained as such.', source: dortsXindianDistrictOfficeRent.id },
      { text: 'The available records establish station-area joint development, property use and an administrative contract role, but not the station’s individual construction tender, final cost, architect, rename gazette or public-art commission.', source: dortsXindianJointDevelopmentOffice.id },
      { text: 'Those missing fields remain TBC, and no feeder-bus narrative is added without a separate full PTO or operator record.', source: dortsXindianJointDevelopmentOffice.id },
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
    proseSources: [dortsQizhangDevelopment, dortsQizhangExcavation, dortsEarlyStationArchitecture],
    prose: [
      { text: 'DORTS’s planning manual names Qizhang as one of the New Store Line’s shallow-cut stations, where the below-grade track arrangement is paired with a less deeply excavated concourse solution.', source: dortsStationPlanning.id },
      { text: 'The structural-engineering case gives a more specific reason for the construction method in the New Taipei section: the works lay beneath existing Beixin Road in the Jingmei Formation.', source: dortsQizhangExcavation.id },
      { text: 'That geological description includes surface and fill layers, sandy clay and gravel-cobble strata, with groundwater generally below the excavation level.', source: dortsQizhangExcavation.id },
      { text: 'Because the gravel layer was highly permeable, DORTS says the usual diaphragm-wall approach was not suitable for the principal excavation support in this part of the New Store Line.', source: dortsQizhangExcavation.id },
      { text: 'The builder instead records CH225 Qizhang station as a soldier-pile and shotcrete case, with the tunnel toward Dapinglin using the same retaining approach.', source: dortsQizhangExcavation.id },
      { text: 'The piles were spaced 2.5 metres apart in two published diameters, 0.8 and 1.0 metres, while intermediate columns supported the temporary cover system.', source: dortsQizhangExcavation.id },
      { text: 'The road was covered and the station was built by a top-down sequence, allowing the surface transport corridor to be restored while excavation and structural work continued below.', source: dortsQizhangExcavation.id },
      { text: 'DORTS says the hard gravel, with N-values above 100 in much of the Jingmei Formation, required a full-casing method to drive the piles and intermediate columns.', source: dortsQizhangExcavation.id },
      { text: 'Qizhang also appears in DORTS’s land-development record through the You-you City complex, identified as the Xihua and Jinghua buildings.', source: dortsQizhangDevelopment.id },
      { text: 'The builder names Huafu Construction Development as investor and places the two mixed-use towers at 126, Section 2, Beixin Road, and 27 Baoqiao Road.', source: dortsQizhangDevelopment.id },
      { text: 'The east tower was completed in January of ROC year 97, or 2008, with four basement levels and 29 floors above ground; the west tower has 18 floors above ground.', source: dortsQizhangDevelopment.id },
      { text: 'The same record says the city received four shops, 69 residential units, about 7,438.23 ping and 65 underground parking spaces.', source: dortsQizhangDevelopment.id },
      { text: 'This gives Qizhang a documented pair of interfaces: a difficult shallow excavation under the existing road and a station-area mixed-use development above or beside the rail property.', source: dortsQizhangExcavation.id },
      { text: 'The consulted primary pages do not establish a station-only civil award value, final account, architect, complete public-art record, rename gazette or feeder-bus narrative.', source: dortsQizhangDevelopment.id },
      { text: 'Those fields remain TBC rather than being inferred from the development case.', source: dortsQizhangDevelopment.id },
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
    proseSources: [dortsXiaobitanArtPlanning, dortsXiaobitanArtRecord],
    prose: [
      { text: 'DORTS’s planning manual says Xiaobitan’s public-art programme was intended to attract additional ridership, while the station’s compressed schedule created pressure to complete the work quickly.', source: dortsXiaobitanArtPlanning.id },
      { text: 'The initial method was to select a concept and have the existing detailed-design consultant and civil contractor complete it, rather than treating the artwork as a wholly separate construction package.', source: dortsXiaobitanArtPlanning.id },
      { text: 'The open brief covered station lighting, colour, landscape, street furniture, protective treatment for the surrounding wall, the west plaza surface and even possible children’s play or landscape-art proposals.', source: dortsXiaobitanArtPlanning.id },
      { text: 'DORTS records a two-and-a-half-month tender period, an initial setup budget of NT$15 million and a NT$1 million first prize, but says only five proposals were received.', source: dortsXiaobitanArtPlanning.id },
      { text: 'The same page preserves contemporaneous criticism that the response period was too long and that the design and construction fees were disproportionate, a procurement problem distinct from the station’s later completed art record.', source: dortsXiaobitanArtPlanning.id },
      { text: 'The later DORTS public-art page names the completed programme 幸福知道, by 麻粒試驗所, with a completion date of 30 October 2005 and an invited-comparison selection.', source: dortsXiaobitanArtRecord.id },
      { text: 'Its listed materials span fibreglass, stainless steel, copper, wood, glass, LED lighting, LED screens, computers and image-capture hardware.', source: dortsXiaobitanArtRecord.id },
      { text: 'The record distributes the work through the station’s beams, columns and walls, the platform level, the west and east plazas, the south plaza, seating, glass railings and the surrounding colour plan.', source: dortsXiaobitanArtRecord.id },
      { text: 'That distributed scope makes the artwork part of the terminal’s building and public-space treatment rather than a single object in one concourse room.', source: dortsXiaobitanArtRecord.id },
      { text: 'One south-plaza interactive installation combines a camera-like capture system, computer, full-colour LED display and glass so visitors can become part of the displayed family image.', source: dortsXiaobitanArtRecord.id },
      { text: 'DORTS says the station programme later received the 2007 First Public Art Award’s best sponsoring-organisation and best planning awards.', source: dortsXiaobitanArtRecord.id },
      { text: 'The planning page’s NT$15 million setup figure and the later public-art page’s approximately NT$35.9 million programme cost plus NT$1 million prize are retained as different records, not averaged or silently reconciled.', source: dortsXiaobitanArtRecord.id },
    ],
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
    proseSources: [dortsNewStoreArchitecture, dortsDapinglinLandDevelopment],
    prose: [
      { text: 'DORTS’s New Store Line architecture account says the line uses underground stations and adapts each station’s external treatment to its individual surroundings rather than imposing one repeated form.', source: dortsNewStoreArchitecture.id },
      { text: 'The same account presents the station entrance and the surrounding urban development as part of the line’s architectural problem, not as unrelated pieces of infrastructure.', source: dortsNewStoreArchitecture.id },
      { text: 'Dapinglin’s station-specific development record identifies a joint-development building at the station as a separate project interface.', source: dortsDapinglinLandDevelopment.id },
      { text: 'DORTS says that this building was commissioned by the Ministry of the Interior rather than by a named private investor in the case summary.', source: dortsDapinglinLandDevelopment.id },
      { text: 'The published address is 198 and 200, Section 3, Beixin Road, in Xindian District.', source: dortsDapinglinLandDevelopment.id },
      { text: 'The building was completed in June of ROC year 94, corresponding to 2005.', source: dortsDapinglinLandDevelopment.id },
      { text: 'DORTS records a three-level basement and a seventeen-level above-ground office building.', source: dortsDapinglinLandDevelopment.id },
      { text: 'That record makes the station’s land-development context more specific than a generic statement that offices exist around the entrance.', source: dortsDapinglinLandDevelopment.id },
      { text: 'It also places the station in the bureau’s wider practice of using development sites to secure or coordinate urban land around underground rail facilities.', source: dortsDapinglinLandDevelopment.id },
      { text: 'The architecture source says the New Store Line did not seek one new architectural style for every station; it used station-by-station responses to surrounding conditions.', source: dortsNewStoreArchitecture.id },
      { text: 'Dapinglin’s published above-ground development record is therefore part of the context against which the station’s street-level facilities were delivered.', source: dortsDapinglinLandDevelopment.id },
      { text: 'The consulted pages do not establish the civil construction package, contractor, final account, station-specific public-art record or a rename gazette for G04.', source: dortsDapinglinLandDevelopment.id },
      { text: 'Those fields remain TBC.', source: dortsDapinglinLandDevelopment.id },
    ],
  },
  G05: {
    structure: 'underground', engineering: 'G05', exits: 3, openingDate: '11 November 1999',
    platformDetails: underground,
    exitDetails: '1: 羅斯福路6段401巷口、景美郵局旁; 2: 景中街1號與景美街交叉口、文山二分局斜對面; 3: 羅斯福路6段218號與景福街交叉口、臺灣銀行旁. Accessible exit: 1.',
    facilities: 'Exit 1 lift; paid-concourse platform lift near the enquiry point; enquiry point at exit 1; water dispenser at exit 1; unpaid toilets and parent/accessible toilet near exit 1; baby-changing facilities; bicycle access open.',
    landmarks: '景美郵局; 文山二分局; 臺灣銀行',
    naming: tbc,
    engineeringHistory: 'The New Store Line south section opened between Guting and Xindian on 11 November 1999.',
    proseSources: [dortsNewStoreArchitecture, dortsJingmeiLandDevelopment],
    prose: [
      { text: 'DORTS’s New Store Line architecture account says its underground stations were not designed as a uniform series; each entrance was adapted to the external environment of the station.', source: dortsNewStoreArchitecture.id },
      { text: 'For Jingmei, the design simplifies the 亭仔腳 form into an entrance element.', source: dortsNewStoreArchitecture.id },
      { text: 'The source places this approach alongside Gongguan’s garden-architecture roof and octagonal-window forms, showing that the line used different local references from station to station.', source: dortsNewStoreArchitecture.id },
      { text: 'Jingmei also appears in DORTS’s land-development case record through two separate station sites.', source: dortsJingmeiLandDevelopment.id },
      { text: 'The first, Jingmei site 交三, was developed by Wenkai Construction and identifies Wenkai Metro Enterprise Building at 218, Section 6, Roosevelt Road.', source: dortsJingmeiLandDevelopment.id },
      { text: 'DORTS records that building as completed in April of ROC year 90, or 2001, with four basement levels and ten floors above ground.', source: dortsJingmeiLandDevelopment.id },
      { text: 'The city government retained seven floors of general office space and two basement parking spaces in that project.', source: dortsJingmeiLandDevelopment.id },
      { text: 'The second, Jingmei site 交四, was invested in by Jiang-Jie Company and is identified as Jiang-Jie Golden Diamond Metro Building at 1 Jingzhong Street.', source: dortsJingmeiLandDevelopment.id },
      { text: 'That building was completed in May of ROC year 92, or 2003, with two basement levels and ten above-ground floors serving office use.', source: dortsJingmeiLandDevelopment.id },
      { text: 'The two cases show that the station’s street setting included more than one development interface, while the architecture page records the separate 亭仔腳 entrance vocabulary.', source: dortsNewStoreArchitecture.id },
      { text: 'Together, the sources connect the entrance design to a documented pattern of station-area development without treating either building as the station itself.', source: dortsJingmeiLandDevelopment.id },
      { text: 'The consulted pages do not establish a civil contract, final account, complete public-art record or legal rename chronology for G05.', source: dortsJingmeiLandDevelopment.id },
      { text: 'Those fields remain TBC.', source: dortsJingmeiLandDevelopment.id },
    ],
  },
  G06: {
    structure: 'underground', engineering: 'G06', exits: 4, openingDate: '11 November 1999',
    platformDetails: underground,
    exitDetails: '1: 羅斯福路5段238號; 2: 羅斯福路5段245號; 3: 羅斯福路5段215號; 4: 羅斯福路5段214號. Accessible exit: 4.',
    facilities: 'Exit 4 lift; paid-concourse platform lift near the enquiry point; enquiry point near exit 3; water dispenser at exit 4; unpaid toilets and parent/accessible toilet near exits 3 and 4; baby-changing facilities; bicycle access open.',
    landmarks: tbc,
    naming: tbc,
    engineeringHistory: 'The New Store Line south section opened between Guting and Xindian on 11 November 1999.',
    proseSources: [dortsWanlongDevelopment, dortsWanlongExcavation],
    prose: [
      { text: 'DORTS’s structural-engineering case identifies CH223 Wanlong station as a top-down open-cut-and-cover construction example.', source: dortsWanlongExcavation.id },
      { text: 'The sequence began with continuous walls and intermediate columns, followed by shallow excavation and temporary horizontal cover beams and slabs.', source: dortsWanlongExcavation.id },
      { text: 'The road surface was then returned to traffic while the main excavation, spoil removal and material delivery continued in the restricted space below.', source: dortsWanlongExcavation.id },
      { text: 'DORTS presents this arrangement as a traffic-maintenance measure: only a limited work zone remained visible at street level while the larger construction operation moved underground.', source: dortsWanlongExcavation.id },
      { text: 'That construction account gives Wanlong a section-specific engineering history rather than only the line-wide statement that the New Store Line is underground.', source: dortsWanlongExcavation.id },
      { text: 'The station also has two documented land-development interfaces in DORTS’s property casebook.', source: dortsWanlongDevelopment.id },
      { text: 'The Huanyou City Wanlong building sits with exit 2 and was invested in by Hanyang Construction Development.', source: dortsWanlongDevelopment.id },
      { text: 'DORTS records that building as completed in July of ROC year 96, or 2007, with two basement levels and 17 floors above ground in a mixed residential-commercial form.', source: dortsWanlongDevelopment.id },
      { text: 'The city received the ground-floor entrance shop, 49 residential units on floors 2–4 totalling about 928 ping and ten underground parking spaces.', source: dortsWanlongDevelopment.id },
      { text: 'The Wanlong No.4 building is tied to exit 4 and was invested in by Longmao Construction Development.', source: dortsWanlongDevelopment.id },
      { text: 'That project was completed in November of ROC year 100, or 2011, as two mixed-use buildings with two basement levels and nine floors above ground.', source: dortsWanlongDevelopment.id },
      { text: 'DORTS records 41 city-owned residential units totalling about 1,297.41 ping and 15 underground parking spaces in the exit-4 development.', source: dortsWanlongDevelopment.id },
      { text: 'The two property records show that the station’s street interfaces were delivered through separate development projects, not one undifferentiated station building.', source: dortsWanlongDevelopment.id },
      { text: 'Together with the top-down excavation record, they explain both the construction constraint and the later built form visible around the station entrances.', source: dortsWanlongExcavation.id },
      { text: 'The consulted primary pages do not identify Wanlong’s civil contract price, final account, architect, station-specific public-art commission, rename gazette or feeder-bus history.', source: dortsWanlongDevelopment.id },
      { text: 'Those fields remain TBC rather than being filled from a secondary station catalogue.', source: dortsWanlongDevelopment.id },
    ],
  },
  G07: {
    structure: 'underground', engineering: 'G07', exits: 4, openingDate: '11 November 1999',
    platformDetails: underground,
    exitDetails: '1: 羅斯福路4段74號; 2: 羅斯福路4段舟山路口; 3: 羅斯福路4段台灣大學; 4: 羅斯福路4段44號. Accessible exits: 1 and 2.',
    facilities: 'Exit lifts at exits 1 and 2; paid-concourse platform lift near the enquiry point; enquiry points at exits 1 and 2; water dispenser at exit 2; unpaid toilets and parent/accessible toilet near exits 1 and 2; nursing room in the unpaid hall near exit 4; baby-changing facilities; bicycle access open.',
    landmarks: '臺灣大學',
    naming: tbc,
    engineeringHistory: 'The New Store Line south section opened between Guting and Xindian on 11 November 1999.',
    proseSources: [dortsNewStoreArchitecture, dortsInitialPublicArtOverview, dortsPublicArtInstallationPlanning],
    prose: [
      { text: 'DORTS’s New Store Line architecture account says the underground stations were not given one uniform entrance style; each was adapted to its external setting.', source: dortsNewStoreArchitecture.id },
      { text: 'For Gongguan, the entrance design uses the roof forms of garden architecture and an octagonal-window motif.', source: dortsNewStoreArchitecture.id },
      { text: 'The source places that treatment beside Guting’s metal-and-glass entrance and Jingmei’s simplified 亭仔腳 elements, making the contrast between the stations part of the line’s design method.', source: dortsNewStoreArchitecture.id },
      { text: 'DORTS’s initial public-art overview lists Gongguan’s interactive work 偷窺 among the initial-network public-art projects.', source: dortsInitialPublicArtOverview.id },
      { text: 'The overview says the New Store Line south-section public art was obtained through public selection in the early network period.', source: dortsInitialPublicArtOverview.id },
      { text: 'The planning manual records that 偷窺 was not electrically simple to install.', source: dortsPublicArtInstallationPlanning.id },
      { text: 'Unlike the low-power projection lamps for Chiang Kai-Shek Memorial Hall’s 非想、想飛, Gongguan’s work had to be supplied by pulling its own wiring from the distribution board.', source: dortsPublicArtInstallationPlanning.id },
      { text: 'The manual notes that this kind of work required ceilings along the cable route to be opened and restored.', source: dortsPublicArtInstallationPlanning.id },
      { text: 'That requirement makes the public-art record part of the station’s building-services history as well as its cultural history.', source: dortsPublicArtInstallationPlanning.id },
      { text: 'It also explains why DORTS treats public-art placement as something that must be coordinated with mechanical and electrical drawings, not added after the station has been finished.', source: dortsPublicArtInstallationPlanning.id },
      { text: 'At Gongguan, the sourceable record therefore has three distinct layers: a garden-architecture entrance vocabulary, an interactive public-art title and a separate electrical installation requirement.', source: dortsNewStoreArchitecture.id },
      { text: 'The DORTS pages consulted here do not establish the artwork’s complete artist, medium, final cost, contract package or a rename chronology for the station.', source: dortsInitialPublicArtOverview.id },
      { text: 'Those fields remain TBC rather than being filled from a secondary catalogue.', source: dortsInitialPublicArtOverview.id },
    ],
  },
  G08: {
    structure: 'underground', engineering: 'G09', exits: 5, openingDate: '11 November 1999',
    platformDetails: underground,
    exitDetails: '1: 辛亥路1段、羅斯福路3段142巷口; 2: 羅斯福路3段與辛亥路1段交叉口、古亭國小旁; 3: 羅斯福路3段177號; 4: 羅斯福路3段100號、師大路130巷口; 5: 羅斯福路3段126號. Accessible exit: 5.',
    facilities: 'Exit 5 lift; paid-concourse platform lift near the enquiry point; enquiry point at exit 3; water dispenser at exit 3; unpaid toilets and parent/accessible toilet near exits 3 and 4; baby-changing facilities; bicycle access open.',
    landmarks: '古亭國小',
    naming: tbc,
    engineeringHistory: 'The New Store Line south section opened between Guting and Xindian on 11 November 1999.',
    proseSources: [dortsNewStoreArchitecture, dortsTaipowerLandDevelopment],
    prose: [
      { text: 'DORTS’s New Store Line architecture account describes an underground line whose station entrances respond to the individual conditions of the surrounding city.', source: dortsNewStoreArchitecture.id },
      { text: 'The station-specific land-development record identifies a joint-development site at Taipower Building station as 卡第兒大樓.', source: dortsTaipowerLandDevelopment.id },
      { text: 'DORTS says the building was developed by 保強建設開發股份有限公司.', source: dortsTaipowerLandDevelopment.id },
      { text: 'Its published address is 177, Section 3, Roosevelt Road, in Taipei’s Daan District.', source: dortsTaipowerLandDevelopment.id },
      { text: 'The building was completed in November of ROC year 94, or 2005.', source: dortsTaipowerLandDevelopment.id },
      { text: 'The case record gives it three basement levels and sixteen floors above ground, with a mixed residential-and-commercial use.', source: dortsTaipowerLandDevelopment.id },
      { text: 'The city government retained four office units of about 532.72 ping and no underground parking spaces in the project.', source: dortsTaipowerLandDevelopment.id },
      { text: 'This is a concrete development record for the station’s urban interface, not an inferred description based only on the street address.', source: dortsTaipowerLandDevelopment.id },
      { text: 'The New Store architecture source says that the line’s design was not intended to create one new building style everywhere; it used each site’s external conditions to shape the station treatment.', source: dortsNewStoreArchitecture.id },
      { text: 'The development record therefore helps explain why a station page can include land-use and building-form history even when the station’s own entrance design is not separately published.', source: dortsTaipowerLandDevelopment.id },
      { text: 'It also distinguishes the station’s underground rail facility from the later or associated above-ground mixed-use building recorded by DORTS.', source: dortsTaipowerLandDevelopment.id },
      { text: 'The consulted pages do not establish the civil construction package, contractor, final account, station-specific public-art record or rename gazette for G08.', source: dortsTaipowerLandDevelopment.id },
      { text: 'Those fields remain TBC.', source: dortsTaipowerLandDevelopment.id },
    ],
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
    proseSources: [dortsNewStoreArchitecture, dortsInitialPublicArtOverview, dortsPublicArtInstallationPlanning],
    prose: [
      { text: 'DORTS’s New Store Line planning account says the line is underground throughout, but does not treat its stations as a uniform architectural type.', source: dortsNewStoreArchitecture.id },
      { text: 'Instead, the entrance forms were to respond to the character of each station’s surroundings.', source: dortsNewStoreArchitecture.id },
      { text: 'At Guting, the design uses metal slanted arches and glass to create a light and transparent entrance form.', source: dortsNewStoreArchitecture.id },
      { text: 'DORTS explains that this response suited the nearby modern buildings whose steel and glass construction gave the area its visual context.', source: dortsNewStoreArchitecture.id },
      { text: 'That description makes the street entrance a deliberate piece of urban mediation: the station is expressed through a contemporary frame rather than a historical imitation.', source: dortsNewStoreArchitecture.id },
      { text: 'The same planning material places Guting in a wider New Store Line approach in which the station’s external setting helps determine the architectural language.', source: dortsNewStoreArchitecture.id },
      { text: 'DORTS’s initial-network public-art overview lists the Guting work 邂逅 among the early public-art installations on the Taipei MRT.', source: dortsInitialPublicArtOverview.id },
      { text: 'The overview records the initial-network group as an ROC 87 public-art programme selected through invited comparison.', source: dortsInitialPublicArtOverview.id },
      { text: 'Guting therefore appears in the same early art framework as the works at Chiang Kai-Shek Memorial Hall, Gongguan and Xindian, rather than as an isolated later commission.', source: dortsInitialPublicArtOverview.id },
      { text: 'The planning account also treats the art as an engineering coordination issue, not only as a curatorial decision.', source: dortsPublicArtInstallationPlanning.id },
      { text: 'It records that 邂逅 required its own wiring, whereas another early work at Chiang Kai-Shek Memorial Hall could use existing line power.', source: dortsPublicArtInstallationPlanning.id },
      { text: 'That distinction preserves a practical difference between works that could share station infrastructure and works that required a dedicated electrical provision.', source: dortsPublicArtInstallationPlanning.id },
      { text: 'The available DORTS records identify the title, selection framework and wiring requirement, but do not establish a complete artist, medium, final-cost or contract record for 邂逅.', source: dortsInitialPublicArtOverview.id },
      { text: 'Those fields remain TBC rather than being filled from an unverified catalogue or a secondary description.', source: dortsInitialPublicArtOverview.id },
    ],
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
    proseSources: [dortsNewStoreArchitecture, dortsInitialPublicArtOverview, dortsPublicArtInstallationPlanning],
    prose: [
      { text: 'DORTS’s station-planning account says the New Store Line’s underground stations were designed with different responses to their surroundings rather than with one repeated architectural formula.', source: dortsNewStoreArchitecture.id },
      { text: 'For Chiang Kai-Shek Memorial Hall, the surrounding memorial complex supplied the reference vocabulary.', source: dortsNewStoreArchitecture.id },
      { text: 'The station treatment draws on the memorial’s wall finishes, trim and sign-frame details, and on the lattice windows and glazed tile roofs associated with the site.', source: dortsNewStoreArchitecture.id },
      { text: 'This is a specific architectural translation of the above-ground landmark: the source describes several material and detail families, not merely a general claim that the station is near the memorial.', source: dortsNewStoreArchitecture.id },
      { text: 'DORTS’s initial public-art overview lists three works at this station: 舞台、月台, 非想、想飛 and 輕鬆的雲、走路的樂.', source: dortsInitialPublicArtOverview.id },
      { text: 'The overview places those works within the initial-network public-art programme selected in ROC 87 through invited comparison.', source: dortsInitialPublicArtOverview.id },
      { text: 'The public-art planning record shows that the three works were not identical from an infrastructure perspective.', source: dortsPublicArtInstallationPlanning.id },
      { text: 'It says the projector lamps for 非想、想飛 could connect to existing line wiring.', source: dortsPublicArtInstallationPlanning.id },
      { text: 'By contrast, 輕鬆的雲、走路的樂 needed its own wiring, a difference the record preserves as an installation decision.', source: dortsPublicArtInstallationPlanning.id },
      { text: 'The same planning page places Guting’s 邂逅 in the comparison, and says that work also required separate wiring.', source: dortsPublicArtInstallationPlanning.id },
      { text: 'Together, the records show that the public-art programme was coordinated with station electrical systems while the architectural treatment was coordinated with the memorial complex.', source: dortsNewStoreArchitecture.id },
      { text: 'They also distinguish the station’s architectural reference materials from the artwork titles, so the two layers should not be collapsed into one decorative description.', source: dortsNewStoreArchitecture.id },
      { text: 'The consulted DORTS pages do not provide a complete artist, medium, final-cost or individual contract record for all three titles.', source: dortsInitialPublicArtOverview.id },
      { text: 'Those missing fields remain TBC in this entry.', source: dortsInitialPublicArtOverview.id },
    ],
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
    proseSources: [dortsXiaonanmenProtection, dortsEarlyStationArchitecture],
    prose: [
      { text: 'DORTS describes Xiaonanmen as a deliberate short section rather than the full long-term Green Line alignment, because the shorter route avoided construction difficulty and wasted future investment.', source: dortsXiaonanmen.id },
      { text: 'The compromise preserved two functions at once: passenger service and a way for Bannan Line trains to cross over to Beitou Depot for maintenance.', source: dortsXiaonanmen.id },
      { text: 'The route page places the work under design package DL171 and the CN251 and CN254A civil-works packages, with the electrical and station systems carried inside the wider Nangang Line project.', source: dortsXiaonanmen.id },
      { text: 'That contract arrangement is a project-level record, not a station-only award value or contractor attribution, so those station-level fields remain TBC.', source: dortsXiaonanmen.id },
      { text: 'The DORTS geotechnical manual gives a separate CN251 case study for building protection at the Xiaonanmen site, named there as 麗正門.', source: dortsXiaonanmenProtection.id },
      { text: 'The protection design used a cut-off-wall concept built from a pre-piled row and micropiles to control ground movement beside existing buildings.', source: dortsXiaonanmenProtection.id },
      { text: 'The pre-piled component used 45-centimetre-diameter drilling, with piles 20 metres long beginning 0.6 metres below ground level.', source: dortsXiaonanmenProtection.id },
      { text: 'The builder describes cement sand being injected through the hollow drill rod before steel rails were inserted into the still-fluid pile material.', source: dortsXiaonanmenProtection.id },
      { text: 'The micropile component used 10-centimetre-diameter piles 8 metres long, drilled with casing at a two-to-one vertical-to-horizontal angle.', source: dortsXiaonanmenProtection.id },
      { text: 'DORTS records a number-8 reinforcing bar inserted to the hole bottom and a grout pipe used to fill the hole with a one-to-one water-to-cement grout.', source: dortsXiaonanmenProtection.id },
      { text: 'The two protection elements were tied together at their heads with 50-by-50-centimetre pile caps, turning separate piles into a building-protection system.', source: dortsXiaonanmenProtection.id },
      { text: 'This is a station-section engineering record about protecting neighbours during excavation, not a claim that the whole Xiaonanmen route used one identical retaining method.', source: dortsXiaonanmenProtection.id },
      { text: 'DORTS’s architectural manual places Xiaonanmen among the early-network underground stations whose functional structure was standardised while themes, materials and colours could still vary by station.', source: dortsEarlyStationArchitecture.id },
      { text: 'The available primary records therefore connect the station to a maintenance-led route decision, a named civil package and a documented protection technique, but not to a station architect, final account, public-art commission, rename gazette or feeder-bus narrative.', source: dortsXiaonanmen.id },
      { text: 'Those missing fields remain TBC.', source: dortsXiaonanmen.id },
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
    proseSources: [dortsSongshanArchitectureIntro, dortsSongshanArchitecturePrinciples],
    prose: [
      { text: 'DORTS’s Songshan architecture introduction identifies Ximen as the western starting point of the line that continues to Songshan station district.', source: dortsSongshanArchitectureIntro.id },
      { text: 'It describes the Ximen commercial area as a city centre whose development was historically tied to long-distance rail transport.', source: dortsSongshanArchitectureIntro.id },
      { text: 'The same corridor account follows the changing commercial geography from traditional cloth shops to the ready-to-wear streets of Wufenpu.', source: dortsSongshanArchitectureIntro.id },
      { text: 'It also connects Zhonghua Road and Ximending and the city’s ring-market activity to the later night-market and retail activity around Songshan.', source: dortsSongshanArchitectureIntro.id },
      { text: 'DORTS frames the line as a route through changing generations of consumption and economic activity, with the stations linking memories of older urban places to future urban imagination.', source: dortsSongshanArchitectureIntro.id },
      { text: 'That framing gives Ximen a corridor role beyond being a transfer point: it is the western urban edge of a line designed to connect distinct commercial centres.', source: dortsSongshanArchitectureIntro.id },
      { text: 'The article says the seven Songshan Line stations carry different transport functions and sit in different historical, cultural and environmental settings.', source: dortsSongshanArchitectureIntro.id },
      { text: 'It therefore treats station architecture as a response to local identity rather than as a repeated decorative system.', source: dortsSongshanArchitectureIntro.id },
      { text: 'The design principles begin with function: passenger circulation should be simple and clear, while space planning should use modular and systematised methods.', source: dortsSongshanArchitectureIntro.id },
      { text: 'DORTS says those functional requirements take priority even though the station’s architectural form still needs to express the transport system.', source: dortsSongshanArchitectureIntro.id },
      { text: 'The following design-principles page says the architectural and public-art concepts should be developed together from the planning stage.', source: dortsSongshanArchitecturePrinciples.id },
      { text: 'It includes entrances, ventilation structures, landscapes, art seating, interior design, floors, walls, ceilings and lighting within one connected design vocabulary.', source: dortsSongshanArchitecturePrinciples.id },
      { text: 'The principles also require attention to passenger movement, visual experience, public safety, material durability and maintenance.', source: dortsSongshanArchitecturePrinciples.id },
      { text: 'The full pages provide this corridor and design context but do not establish a G12-specific contract, final account, artwork record or rename chronology.', source: dortsSongshanArchitecturePrinciples.id },
      { text: 'Those fields remain TBC.', source: dortsSongshanArchitecturePrinciples.id },
    ],
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
    proseSources: [dortsBeimenArchitecture, dortsSongshanStationTable],
    prose: [
      { text: 'The DORTS architecture article labels the Beimen station G14, while the current operator record uses G13; these are retained as a source-era engineering label and a current operating code rather than silently normalised.', source: dortsBeimenArchitecture.id },
      { text: 'The source-era station table likewise places Beimen in the Songshan Line’s published engineering sequence under G14, so the code difference is a record-history issue, not a second station.', source: dortsSongshanStationTable.id },
      { text: 'DORTS situates the station on Tacheng Street between Zhengzhou Road and Zhongxiao West Road, beside the North Gate Old City Gate and the Taipei Station underground mall.', source: dortsBeimenArchitecture.id },
      { text: 'The east side is bounded by the former Railway Department complex, including the railway offices, octagonal pavilion, wartime command centre and Taipei Workshop, while a former Taiwan Railway dormitory is recorded on the west.', source: dortsBeimenArchitecture.id },
      { text: 'The surrounding record therefore combines city-wall history, railway administration and the later commercial transport district around Taipei Main Station.', source: dortsBeimenArchitecture.id },
      { text: 'DORTS names the design theme as activation and reuse of Beimen’s archaeological cultural assets, turning the underground station into part of a wider historical route.', source: dortsBeimenArchitecture.id },
      { text: 'The first underground link level is treated as an open exhibition space rather than only as a circulation layer.', source: dortsBeimenArchitecture.id },
      { text: 'Its displays include the excavation history and recreated test pits, an archaeological chronology, excavated cross-sections and artefacts, the history of Taipei’s North Gate and Liu Ming-chuan’s infrastructure programme.', source: dortsBeimenArchitecture.id },
      { text: 'DORTS describes that sequence as a connection between the railway museum area and the historic-sites park on opposite sides of the street.', source: dortsBeimenArchitecture.id },
      { text: 'The granite wall panels carry carved images of the old gate and early trains, making the station’s finish part of the historical interpretation rather than a neutral surface.', source: dortsBeimenArchitecture.id },
      { text: 'At street level, the entrances were deliberately kept neutral so they would not compete with the surrounding monuments.', source: dortsBeimenArchitecture.id },
      { text: 'The entrance form rises from the paving like a lifted continuation of the ground, with natural stone carried from the plaza across the walls and roof and glass adding controlled transparency.', source: dortsBeimenArchitecture.id },
      { text: 'This treatment lets the station remain legible as a transport entrance while visually receding into the historic landscape.', source: dortsBeimenArchitecture.id },
      { text: 'The full primary records establish the heritage setting, exhibition scope, materials and source-era code, but do not establish a station-only civil contract, final account, architect attribution, complete public-art procurement record or rename gazette.', source: dortsBeimenArchitecture.id },
      { text: 'Those fields remain TBC rather than being inferred from the surrounding heritage institutions.', source: dortsBeimenArchitecture.id },
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
    proseSources: [dortsZhongshanArchitecture],
    prose: [
      { text: 'The DORTS architecture article calls the station “中山站(G16/R14)”, retaining a source-era engineering label that differs from the current overlay code G14 and current Red-line code R11.', source: dortsZhongshanArchitecture.id },
      { text: 'Its account places the station within the former Tamsui railway corridor, whose urban form changed when the railway was removed and the MRT was built.', source: dortsZhongshanArchitecture.id },
      { text: 'The same context includes the old Taipei City Hall and former United States Consulate, both described as having been reused as arts and cultural facilities.', source: dortsZhongshanArchitecture.id },
      { text: 'The article also identifies the Zhongshan North Road and Linsen North Road international tourism district and Shin Kong Mitsukoshi as part of the station’s surrounding activity.', source: dortsZhongshanArchitecture.id },
      { text: 'It presents the interchange as an underground four-level island-platform station in that source-era description.', source: dortsZhongshanArchitecture.id },
      { text: 'The architectural theme is 快樂轉運, or “Happy transfer”.', source: dortsZhongshanArchitecture.id },
      { text: 'DORTS explains the theme as giving passengers a moment to breathe during a transfer while connecting the station to contemporary consumption and leisure culture.', source: dortsZhongshanArchitecture.id },
      { text: 'The wall treatment uses repeated patterns that the article says can be recognised by younger passengers, together with bright colours and simple compositions.', source: dortsZhongshanArchitecture.id },
      { text: 'Those compositions are used to depict ordinary street-life scenes rather than a single historical tableau.', source: dortsZhongshanArchitecture.id },
      { text: 'The article says the two entrances and ventilation shafts are integrated with joint-development land, tying the public station elements to the surrounding redevelopment.', source: dortsZhongshanArchitecture.id },
      { text: 'This makes the transfer theme a description of the station’s urban role as well as of its interior graphics.', source: dortsZhongshanArchitecture.id },
      { text: 'The source describes the station through the old railway corridor, arts reuse, tourism district, retail setting, transfer theme and redevelopment interface, but it does not give a complete station-specific contract or final-account record.', source: dortsZhongshanArchitecture.id },
      { text: 'Those procurement and final-cost fields remain TBC.', source: dortsZhongshanArchitecture.id },
    ],
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
    proseSources: [dortsSongjiangArchitecture, dortsSongjiangArchitectureContinuation],
    prose: [
      { text: 'The DORTS architecture article calls the station “松江南京站(G17/O12)”, a source-era label that differs from the current overlay code G15 and current Orange-line code O08.', source: dortsSongjiangArchitecture.id },
      { text: 'It locates the station at the Nanjing East Road and Songjiang Road intersection, in a district of high-rise buildings and mixed residential, commercial, office and financial uses.', source: dortsSongjiangArchitecture.id },
      { text: 'Datong High School and Changan Junior High School are named in the same account, which also identifies commuting and school travel as part of the area’s daily movement.', source: dortsSongjiangArchitecture.id },
      { text: 'The station was co-constructed with the Zhonghe–Xinlu Line, so the article describes it as a shared interchange rather than as an independent Songshan Line stop.', source: dortsSongjiangArchitecture.id },
      { text: 'The source gives an underground three-level station, but its platform descriptions are internally differentiated: the Songshan platform is described as side-style while the Orange-line platform is described as island-style.', source: dortsSongjiangArchitecture.id },
      { text: 'The same article’s summary calls the station an island-platform station overall, so both descriptions are retained as a published conflict.', source: dortsSongjiangArchitecture.id },
      { text: 'Its component account gives seven exits, while the current operator and DORTS route records give eight, so the exit totals are also retained as different source values rather than reconciled.', source: dortsSongjiangArchitecture.id },
      { text: 'DORTS names the architectural theme 都會眾生相, or “Urban multitude”, and says it developed from the earlier Orange-line public-art concept for O12.', source: dortsSongjiangArchitecture.id },
      { text: 'The continuation of the article frames the theme through contemporary treatment and the capital’s inclusive cultural exchange.', source: dortsSongjiangArchitectureContinuation.id },
      { text: 'It also says the Songshan entrances continue the Orange-line design language so that the two systems read as one place and passengers are less likely to become confused.', source: dortsSongjiangArchitectureContinuation.id },
      { text: 'The resulting design is therefore tied to both the district’s mixed everyday population and the practical problem of making a co-constructed interchange legible.', source: dortsSongjiangArchitectureContinuation.id },
      { text: 'The consulted architecture pages do not establish a complete station-specific contract, final account or individual public-art cost.', source: dortsSongjiangArchitecture.id },
      { text: 'Those fields remain TBC.', source: dortsSongjiangArchitecture.id },
    ],
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
    proseSources: [dortsNanjingFuxingArchitecture],
    prose: [
      { text: 'The DORTS architecture article calls the station “南京復興站(G18/BR3)”, retaining a source-era label that differs from the current overlay code G16 and the current operating Wenhu code BR12.', source: dortsNanjingFuxingArchitecture.id },
      { text: 'It places the station under Nanjing East Road at the Fuxing North Road intersection, where the underground Songshan Line meets the elevated Wenhu BR3 station vertically.', source: dortsNanjingFuxingArchitecture.id },
      { text: 'West of Fuxing North Road, the article describes a typical commercial-office district with China Airlines Building and the Leofoo Palace Hotel as important landmarks.', source: dortsNanjingFuxingArchitecture.id },
      { text: 'To the east, it describes a shift in pedestrian activity and land use toward commercial and cultural uses associated with the Brother Hotel, Asia Pacific Hotel and Dunhua Junior High School.', source: dortsNanjingFuxingArchitecture.id },
      { text: 'The account says the surrounding area combines shopping and leisure with an academic atmosphere.', source: dortsNanjingFuxingArchitecture.id },
      { text: 'DORTS gives the station as an underground three-level island-platform station, with a transfer level, concourse level and platform level in its source-era description.', source: dortsNanjingFuxingArchitecture.id },
      { text: 'The design problem was not only to shape the new underground station, but also to integrate it with the existing elevated structure above.', source: dortsNanjingFuxingArchitecture.id },
      { text: 'DORTS names the design theme 轉換的軌跡, or “The trajectory of transfer”.', source: dortsNanjingFuxingArchitecture.id },
      { text: 'The theme treats the passenger’s movement as a rapid change from the city’s underground level to the elevated station and back again.', source: dortsNanjingFuxingArchitecture.id },
      { text: 'For the “new and old transition”, a continuous trajectory-like element wraps the existing Wenhu station entrances to signal the underground Songshan station’s presence.', source: dortsNanjingFuxingArchitecture.id },
      { text: 'A newly inserted metal curved skin separates the new station language from the existing structure while also expressing lightness and technology.', source: dortsNanjingFuxingArchitecture.id },
      { text: 'For the “movement transition”, passengers use a transfer escalator more than ten metres long to rise or descend between the underground and elevated lines.', source: dortsNanjingFuxingArchitecture.id },
      { text: 'The article says that vertical movement creates a strong sense of passing through space and gives the journey a pronounced change of spatial level.', source: dortsNanjingFuxingArchitecture.id },
      { text: 'Its ground-building image is based on the meeting and transformation of façade language and materials from the old and new station structures.', source: dortsNanjingFuxingArchitecture.id },
      { text: 'The consulted architecture page does not establish a complete station-specific construction contract, final account, public-art record or fare-boundary classification.', source: dortsNanjingFuxingArchitecture.id },
      { text: 'Those fields remain TBC.', source: dortsNanjingFuxingArchitecture.id },
    ],
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
    proseSources: [dortsArenaArchitecture, dortsArenaPlanning, dortsArenaArt, dortsSongshanStationTable],
    prose: [
      { text: 'DORTS’s architectural account places Taipei Arena station in the city’s sports and concert precinct, where the surrounding arena and stadium make the station more than a generic central-city stop.', source: dortsArenaArchitecture.id },
      { text: 'It names the design theme 運動的軌跡, “The trajectory of sport”, and uses the movement associated with sport as the organising idea for the station’s architectural treatment.', source: dortsArenaArchitecture.id },
      { text: 'The same account says the entrance form was developed from an oval-egg concept in response to the arena site, giving the street elements a shape connected to the neighbouring venue.', source: dortsArenaArchitecture.id },
      { text: 'The DORTS station table labels this station G19 in its source-era engineering sequence.', source: dortsSongshanStationTable.id },
      { text: 'The current operator page identifies the operating station as G17 Taipei Arena.', source: trtcStation('G17').id },
      { text: 'Those labels are not silently merged: G19 is retained as the construction-era label in the builder’s table, while G17 is retained as the current operating code.', source: dortsSongshanStationTable.id },
      { text: 'The public-art planning record treats architecture and public art as part of the same station response to the sports park and arena context.', source: dortsArenaPlanning.id },
      { text: 'It places the art on the wall before the middle-level stair and escalator, where passengers encounter it while moving between the station’s circulation levels.', source: dortsArenaPlanning.id },
      { text: 'The procurement plan divides the installation into two groups containing four works and says the groups were selected through invited comparison.', source: dortsArenaPlanning.id },
      { text: 'The planned value is NT$3 million for each group, which is a procurement figure for the two grouped commissions rather than a claim about the whole station construction cost.', source: dortsArenaPlanning.id },
      { text: 'The completed public-art record names the two works as 推進 and 啟動密碼 and identifies the artists as 洪東祿 and 袁廣鳴.', source: dortsArenaArt.id },
      { text: 'It describes 推進 as using perspective reversal and a lenticular print so a baseball-playing figure appears to move as passengers descend past the wall.', source: dortsArenaArt.id },
      { text: 'The same record describes 啟動密碼 through a mechanical Moiré-animation silhouette, making movement and changing viewpoint part of the encounter with the work.', source: dortsArenaArt.id },
      { text: 'The fetched DORTS pages establish the station’s sports-precinct design intent, source-era engineering label and public-art procurement scope.', source: dortsArenaPlanning.id },
      { text: 'They do not establish a station-specific civil construction package, final account, rename gazette, feeder-bus record or paid-area versus street-transfer classification.', source: dortsArenaArchitecture.id },
      { text: 'Those missing fields remain TBC rather than being inferred from the station’s current facilities or its neighbouring venues.', source: dortsArenaArchitecture.id },
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
    ...(data.proseSources ?? []),
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
