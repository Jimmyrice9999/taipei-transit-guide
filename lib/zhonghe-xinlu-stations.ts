import type { Source } from './sources.ts'
import type { StationOverlay, StationProseSentence, Structure } from './station-overlay.ts'
import type { StationResearch } from './station-research.ts'

const accessed = '2026-08-18'
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

const dortsZhonghe = source(
  'dorts-zhonghe-xinlu-zhonghe-route',
  'Zhonghe Line route and stations',
  '中和新蘆線：中和線路線說明',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=122C012A85C41404',
  'The builder’s full route page publishes the underground guideway, the Zhonghe Line opening date, the Zhonghe Depot description, engineering history, station engineering numbers, exit counts and the O05/G09 note.',
)

const dortsXinzhuang = source(
  'dorts-zhonghe-xinlu-xinzhuang-route',
  'Xinzhuang Line route and stations',
  '中和新蘆線：新莊線路線說明',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=122C012A85C41404&s=33245A586D747A2C',
  'The builder’s full route page publishes the Xinzhuang route, depot history, three opening phases, station engineering numbers, exit counts and listed interchanges.',
)

const dortsLuzhou = source(
  'dorts-zhonghe-xinlu-luzhou-route',
  'Luzhou Line route and stations',
  '中和新蘆線：蘆洲線路線說明',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=122C012A85C41404&s=3843E83F882E79FD',
  'The builder’s full route page publishes the underground Luzhou branch, Luzhou Depot, construction contracts, opening date, station engineering numbers and exit counts.',
)

const dortsDepot = source(
  'dorts-zhonghe-xinlu-depots',
  'Taipei MRT depot planning summary',
  '捷運路網規劃實務：臺北捷運機廠規劃營運及建設中機廠彙整表',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no1/files/basic-html/page202.html',
  'The full official depot table lists Zhonghe, Xinzhuang and Luzhou depots for the Zhonghe–Xinlu Line and gives their system type, level, area and storage capacity.',
)

const dortsZhongheArchitecture = source(
  'dorts-zhonghe-xinlu-station-architecture',
  'Zhonghe Line station architecture',
  '車站建築設計：中和線',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=980C85299DA2890A&s=099C7E1AFD7FD705',
  'The full station-architecture page describes the underground Zhonghe stations and their design approach; it does not publish a station-by-station platform or track table.',
)

const dortsLuzhouArchitecture = source(
  'dorts-zhonghe-xinlu-luzhou-architecture',
  'Luzhou Line station architecture',
  '蘆洲線各車站說明',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=7E5951D50A733E70',
  'The full station-architecture page publishes the five-station design sequence and the line’s white-egret design concept.',
)

const dortsPublicArt = source(
  'dorts-zhonghe-xinlu-public-art',
  'Zhonghe–Xinlu Line public art',
  '捷運不只是運輸工具：中和新蘆線',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=ABF67AE806949931',
  'The full official public-art page identifies 南勢角站’s 青春美樂地, its artist, medium, completion month, location and selection method.',
)

const dortsZhongheEngineering = source(
  'dorts-zhonghe-xinlu-structural-engineering',
  'Zhonghe Line station excavation and support engineering',
  '捷運結構工程實務：中和線車站基地開挖',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no7/files/basic-html/page175.html',
  'The full DORTS structural-engineering page records the Zhonghe Line route, four underground stations, sequential excavation, H-section steel internal bracing, preload ranges and cover slabs where roads overlap the works.',
)

const dortsZhongheLandDevelopmentCases = source(
  'dorts-zhonghe-xinlu-land-development-cases',
  'Completed Zhonghe Line land-development sites',
  '捷運土地開發實務：中和線土地開發',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no19/files/basic-html/page135.html',
  'The full DORTS land-development casebook page records Dingxi, Yongan Market and Jingan station-area buildings, their investors, completion dates, building forms and Taipei City retained premises.',
)

const dortsNanshijiaoLandDevelopmentPlan = source(
  'dorts-nanshijiao-land-development-plan',
  'Nanshijiao station joint-development plan',
  '臺北捷運土地開發案例解析：中和線南勢角站捷六土地開發案',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no20/files/basic-html/page119.html',
  'The full DORTS case study explains the Nanshijiao joint-development planning origin, its relation to the Zhonghe Line corridor and the statutory land-use process.',
)

const dortsNanshijiaoLandDevelopmentBenefits = source(
  'dorts-nanshijiao-land-development-benefits',
  'Nanshijiao station joint-development benefits and site summary',
  '臺北捷運土地開發案例解析：中和線南勢角站土地開發基地概要',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no20/files/basic-html/page121.html',
  'The full DORTS case-study page records the Nanshijiao development open space, public-use childcare area, site area, building programme, parking, permit and use-certificate dates.',
)

const dortsZhongheTrackContract = source(
  'dorts-zhonghe-xinlu-track-contract',
  'Zhonghe Line track contract and construction method',
  '捷運技術：中和線軌道工程',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/jrtst/ebook/no39/files/basic-html/page20.html',
  'The full DORTS technical-journal page records the CT561/CC561 Zhonghe track scope, underground trackwork, joint contractors, contract value, completion date and the work-shaft rail-welding method.',
)

const dortsDongmenEngineering = source(
  'dorts-dongmen-station-overlapping-tunnels',
  'Dongmen station and overlapping tunnel construction',
  '捷運工程叢書：新莊線 CK570H 區段標工程內容',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no12/files/basic-html/page25.html',
  'The full DORTS technical-book page records Dongmen’s construction package, the four closely overlapping shield tunnels, ground improvement, source-era station code, station dimensions, exits and tunnel lengths.',
)

const dortsDongmenTechnical = source(
  'dorts-dongmen-station-technical-journal',
  'Dongmen station structural construction and fit-out',
  '捷運技術第51期：臺北捷運信義線 CK570H 區段標施工',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page82.html',
  'The full DORTS journal record describes the CK570H subcontracts, Dongmen cut-and-cover construction and the tunnel route from Dongmen to Guting and Zhongzheng Memorial Hall.',
)

const dortsDongmenFitout = source(
  'dorts-dongmen-station-fitout',
  'Dongmen station structural and architectural fit-out',
  '捷運技術第51期：東門站車站結構及建築裝修施工',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page83.html',
  'The full DORTS journal page records the double-wall SRC station structure, permanent columns, platform and concourse finishes, working shafts and service integration.',
)

const dortsStationArchitectureGeneral = source(
  'dorts-mrt-station-architecture-general',
  'MRT station architectural design principles',
  '車站建築設計',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=980C85299DA2890A',
  'The full DORTS architecture page explains function-first circulation, modular planning, local station themes, public-art integration and the requirement to reduce the visual mass of surface structures.',
)

const dortsZhonghePublicArtIntro = source(
  'dorts-zhonghe-xinlu-public-art-introduction',
  'Zhonghe–Xinlu public-art introduction',
  '捷運不只是運輸工具：中和新蘆線公共藝術',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=DA11BCC514603804',
  'The full DORTS public-art introduction records the invitation-competition programme for the early network, including Guting’s suspended work 邂逅 and the Zhonghe Line art programme.',
)

const dortsZhongheXinluPublicArtTable = source(
  'dorts-zhonghe-xinlu-public-art-table',
  'MRT public-art table: Dongmen station',
  '公共藝術總表：東門站',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=EF3512A90C6BCFD2&s=55502A1464815D8D',
  'The full DORTS public-art table records Dongmen’s completion month, placement, artist, title, materials, cost and invitation method.',
)

const dortsSongjiangLandDevelopment = source(
  'dorts-songjiang-nanjing-land-development',
  'Songjiang Nanjing station joint-development case',
  '臺北捷運土地開發案例解析：松江南京站捷十土地開發案',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no20/files/basic-html/page109.html',
  'The full DORTS land-development case page records the Songjiang Nanjing joint-development site, its land area, mixed-use building, integrated MRT facilities and design rationale.',
)

const dortsXinluStationDesignTechnical = source(
  'dorts-xinlu-station-design-technical',
  'Xinzhuang Line station design themes and treatments',
  '捷運工程叢書：捷運車站規劃與設計實務',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page147.html',
  'The full DORTS station-design chapter records the Xinzhuang Line station themes and the relationship between local context, mosaics, enamel panels, entrances and ventilation structures.',
)

const dortsSongjiangStationTechnical = source(
  'dorts-songjiang-nanjing-station-technical',
  'Songjiang Nanjing station structure and design',
  '捷運技術第52期：松江南京站車站設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no52/files/basic-html/page66.html',
  'The full DORTS technical-journal page records Songjiang Nanjing’s source-era station codes, mixed office and education setting, underground arrangement, interchange relationship and design theme.',
)

const dortsXinzhuangGroundEngineering = source(
  'dorts-xinzhuang-line-ground-engineering',
  'Xinzhuang Line ground engineering and fault protection',
  '捷運工程叢書精進版－6 捷運大地工程實務',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no6/files/basic-html/page58.html',
  'The full DORTS geotechnical-book page records the CK570E section, the Shanjiao Fault assessment between source-era O59 and O60, and the waterproof bulkhead-gate response at Danfeng.',
)

const dortsLoshenFAQ = source(
  'dorts-loshen-depot-faq',
  'Xinzhuang Depot and the Losheng entrance project',
  '有關衛福部目前所採行之樂生療養院入口意象方案，因樂生保留自救會與青年樂生聯盟反對，以致遲遲無法施作，是否會連帶影響捷運新莊機廠營運？',
  dortsPublisher,
  'https://www.dorts.gov.taipei/News_Content.aspx?n=2A66A485FACB0D5B&s=602D327B2B353759',
  'The full DORTS FAQ records that the depot was already operating, the entrance-landscape project had been suspended after a court order, and future works were to be coordinated so depot operations were not affected.',
)

const controlYuanLoshenCorrection = source(
  'control-yuan-loshen-correction',
  'Control Yuan correction on the Losheng preservation dispute',
  '臺北都會區大眾捷運系統新莊線新莊機廠選址不當糾正案文',
  'Control Yuan (監察院)',
  'https://www.cy.gov.tw/CyBsBoxContent.aspx?n=134&s=3612',
  'The full Control Yuan correction records the dispute over the depot site, delayed land handover and resident relocation, slope and building damage, and the resulting construction delay.',
)

const controlYuanLoshenInvestigation = source(
  'control-yuan-loshen-investigation',
  'Control Yuan investigation report on Losheng and the Xinzhuang Depot',
  '調查報告：樂生療養院及新莊機廠工程',
  'Control Yuan (監察院)',
  'https://cybsbox.cy.gov.tw/CYBSBoxSSL/edoc/download/54397',
  'The full investigation report records the original depot-site decision, the 2002 start, land and resident-relocation arrangements, cracking near the works, partial stoppage, and the reported delay and added-cost estimates.',
)

const ntpcLoshenGazette = source(
  'ntpc-loshen-historical-building-gazette',
  'Losheng Sanatorium historical-building registration gazette',
  '公告「新莊樂生療養院」登錄為本縣歷史建築',
  'Taipei County Government / New Taipei City Government (臺北縣政府／新北市政府)',
  'https://web.law.ntpc.gov.tw/Scripts/FLAWDOC03.aspx?ecase=%E5%8C%97%E5%BA%9C%E6%96%87%E8%B3%87&ecode=H00000&eno=09800123211&rtype=E',
  'The full gazette record gives the 7 September 2009 registration, the Zhongzheng Road address and the historical-building reasons and scope.',
)

const detail = (
  id: string,
  title: string,
  titleOriginal: string,
  url: string,
) =>
  source(
    id,
    title,
    titleOriginal,
    dortsPublisher,
    url,
    'The builder’s full station-design page publishes this station’s structure or design treatment and adjacent context.',
  )

const architecture = {
  o07: detail('dorts-o07-station-architecture', 'Zhongxiao Xinsheng station architecture', '忠孝新生站建築設計', 'https://www.dorts.gov.taipei/cp.aspx?n=7F9131BAD8DCF960&s=0F40A754FDE16633'),
  o08: detail('dorts-o08-station-architecture', 'Songjiang Nanjing station architecture', '松江南京站建築設計', 'https://www.dorts.gov.taipei/cp.aspx?n=7F9131BAD8DCF960&s=3E757BE805D81177'),
  o09: detail('dorts-o09-station-architecture', 'Xingtian Temple station architecture', '行天宮站建築設計', 'https://www.dorts.gov.taipei/cp.aspx?n=7F9131BAD8DCF960&s=8A210F80A944AAE0'),
  o10: detail('dorts-o10-station-architecture', 'Zhongshan Elementary School station architecture', '中山國小站建築設計', 'https://www.dorts.gov.taipei/cp.aspx?n=7F9131BAD8DCF960&s=C6803452E573ECF0'),
  o11: detail('dorts-o11-station-architecture', 'Minquan W. Rd. station architecture', '民權西路站建築設計', 'https://www.dorts.gov.taipei/cp.aspx?n=7F9131BAD8DCF960&s=581BAEA5E045EE90'),
  o12: detail('dorts-o12-station-architecture', 'Daqiaotou station architecture', '大橋頭站建築設計', 'https://www.dorts.gov.taipei/cp.aspx?n=7F9131BAD8DCF960&s=CEDF8906C30FD635'),
  o13: detail('dorts-o13-station-architecture', 'Taipei Bridge station architecture', '台北橋站建築設計', 'https://www.dorts.gov.taipei/cp.aspx?n=A7D84926581F5817&s=1A03C950E2F3B99D'),
  o14: detail('dorts-o14-station-architecture', 'Cailiao station architecture', '菜寮站建築設計', 'https://www.dorts.gov.taipei/cp.aspx?n=A7D84926581F5817&s=68B457A5F26795D9'),
  o15: detail('dorts-o15-station-architecture', 'Sanchong station architecture', '三重站建築設計', 'https://www.dorts.gov.taipei/cp.aspx?n=A7D84926581F5817&s=294F03F343781B2A'),
  o16: detail('dorts-o16-station-architecture', 'Xianse Temple station architecture', '先嗇宮站建築設計', 'https://www.dorts.gov.taipei/cp.aspx?n=A7D84926581F5817&s=C04B10E6E04BB667'),
  o17: detail('dorts-o17-station-architecture', 'Touqianzhuang station architecture', '頭前庄站建築設計', 'https://www.dorts.gov.taipei/cp.aspx?n=A7D84926581F5817&s=A4027E05917003A3'),
  o18: detail('dorts-o18-station-architecture', 'Xinzhuang station architecture', '新莊站建築設計', 'https://www.dorts.gov.taipei/cp.aspx?n=A7D84926581F5817&s=23FAA46925341D3A'),
  o19: detail('dorts-o19-station-architecture', 'Fu Jen University station architecture', '輔大站建築設計', 'https://www.dorts.gov.taipei/cp.aspx?n=A7D84926581F5817&s=E0B092D336CE2101'),
  o20: detail('dorts-o20-station-architecture', 'Danfeng station architecture', '丹鳳站建築設計', 'https://www.dorts.gov.taipei/cp.aspx?n=A7D84926581F5817&s=8E7DF8D577939484'),
  o21: detail('dorts-o21-station-architecture', 'Huilong station architecture', '迴龍站建築設計', 'https://www.dorts.gov.taipei/cp.aspx?n=A7D84926581F5817&s=9C549620EBC8B24B'),
  o50: detail('dorts-o50-station-architecture', 'Sanchong Elementary School station architecture', '三重國小站建築設計', 'https://www.dorts.gov.taipei/cp.aspx?n=7E5951D50A733E70&s=EAEE26A50A59F9ED'),
  o51: detail('dorts-o51-station-architecture', 'Sanhe Junior High School station architecture', '三和國中站建築設計', 'https://www.dorts.gov.taipei/cp.aspx?n=7E5951D50A733E70&s=C5ABC1F9EB79143D'),
  o52: detail('dorts-o52-station-architecture', 'St. Ignatius High School station architecture', '徐匯中學站建築設計', 'https://www.dorts.gov.taipei/cp.aspx?n=7E5951D50A733E70&s=23CA4BCC6D53E872'),
  o53: detail('dorts-o53-station-architecture', 'Sanmin Senior High School station architecture', '三民高中站建築設計', 'https://www.dorts.gov.taipei/cp.aspx?n=7E5951D50A733E70&s=D4B52BEBD27350DD'),
  o54: detail('dorts-o54-station-architecture', 'Luzhou station architecture', '蘆洲站建築設計', 'https://www.dorts.gov.taipei/cp.aspx?n=7E5951D50A733E70&s=95421D9B2C9744B9'),
}

const trtcIds: Record<string, string> = {
  O01: '048', O02: '047', O03: '046', O04: '045', O05: '041', O06: '134',
  O07: '089', O08: '132', O09: '131', O10: '130', O11: '055', O12: '128',
  O13: '127', O14: '126', O15: '125', O16: '124', O17: '123', O18: '122',
  O19: '121', O20: '180', O21: '179', O50: '178', O51: '177', O52: '176',
  O53: '175', O54: '174',
}

const trtcNames: Record<string, { en: string; zh: string }> = {
  O01: { en: 'Nanshijiao', zh: '南勢角' }, O02: { en: 'Jingan', zh: '景安' },
  O03: { en: 'Yongan Market', zh: '永安市場' }, O04: { en: 'Dingxi', zh: '頂溪' },
  O05: { en: 'Guting', zh: '古亭' }, O06: { en: 'Dongmen', zh: '東門' },
  O07: { en: 'Zhongxiao Xinsheng', zh: '忠孝新生' }, O08: { en: 'Songjiang Nanjing', zh: '松江南京' },
  O09: { en: 'Xingtian Temple', zh: '行天宮' }, O10: { en: 'Zhongshan Elementary School', zh: '中山國小' },
  O11: { en: 'Minquan W. Rd.', zh: '民權西路' }, O12: { en: 'Daqiaotou', zh: '大橋頭' },
  O13: { en: 'Taipei Bridge', zh: '台北橋' }, O14: { en: 'Cailiao', zh: '菜寮' },
  O15: { en: 'Sanchong', zh: '三重' }, O16: { en: 'Xianse Temple', zh: '先嗇宮' },
  O17: { en: 'Touqianzhuang', zh: '頭前庄' }, O18: { en: 'Xinzhuang', zh: '新莊' },
  O19: { en: 'Fu Jen University', zh: '輔大' }, O20: { en: 'Danfeng', zh: '丹鳳' },
  O21: { en: 'Huilong', zh: '迴龍' }, O50: { en: 'Sanchong Elementary School', zh: '三重國小' },
  O51: { en: 'Sanhe Junior High School', zh: '三和國中' }, O52: { en: 'St. Ignatius High School', zh: '徐匯中學' },
  O53: { en: 'Sanmin Senior High School', zh: '三民高中' }, O54: { en: 'Luzhou', zh: '蘆洲' },
}

function trtcStation(code: string): Source {
  const station = trtcNames[code]
  return source(
    'trtc-' + code.toLowerCase() + '-station',
    code + ' ' + station.en + ' station information',
    '車站資訊查詢：' + code + ' ' + station.zh,
    trtcPublisher,
    'https://web.metro.taipei/pages2026/WebStation/' + trtcIds[code] + '/1',
    'The operator’s full station page publishes the current address, accessibility facilities, toilets, bicycle access, exit count and numbered exit locations.',
  )
}

const tbc = 'TBC'
const underground = 'Underground station; platform form and track count: TBC.'

type OData = {
  engineering: string
  exits: number
  openingDate: string
  route: Source
  structureSource?: Source
  platformDetails?: string
  platformSource?: Source
  exitDetails: string
  facilities: string
  landmarks: string
  interchange?: { label: string; lineCode?: string }
  design?: string
  designSource?: Source
  publicArt?: string
  publicArtSource?: Source
  proseSources?: Source[]
  prose?: StationProseSentence[]
}

const oData: Record<string, OData> = {
  O01: { engineering: 'O19', exits: 4, openingDate: '24 December 1998', route: dortsZhonghe, platformDetails: underground, exitDetails: '1: 捷運路52號、近南山路399巷; 2: 捷運路22號; 3: 捷運路16號; 4: 捷運路6號、近興南路1段. Accessible exit: 3.', facilities: 'Exit lift between exits 3 and 4; paid-concourse platform lift near the enquiry point; enquiry point near exits 3 and 4; water dispenser at exit 4; paid-zone toilets and parent/accessible toilet near exits 3 and 4; baby-changing facilities in the parent/accessible and male/female toilets; bicycle access open.', landmarks: tbc, design: 'The builder describes the Zhonghe Line as entirely underground and designed around economical ground facilities and station interiors in the narrow older urban area.', designSource: dortsZhongheArchitecture, publicArt: '青春美樂地 — 賴純純; acrylic, neon tubes and epoxy resin; November 1998; concourse and platform levels.', publicArtSource: dortsPublicArt, proseSources: [dortsZhongheArchitecture, dortsZhongheEngineering, dortsNanshijiaoLandDevelopmentPlan, dortsNanshijiaoLandDevelopmentBenefits], prose: [
    { text: 'DORTS places Nanshijiao within the former Taiwan Railway Administration Zhonghe station site, where the constrained depot ground also accommodates the station.', source: dortsZhonghe.id },
    { text: 'The official art brief turns local growth and modernization into a visual language of colour and movement, linking Zhonghe–Nanshijiao to a Taiwanese song about striving and freedom.', source: dortsPublicArt.id },
    { text: 'The structural-engineering record places the four Zhonghe Line stations in a 5.4-kilometre underground corridor connected by shield tunnels.', source: dortsZhongheEngineering.id },
    { text: 'It says the station and switch-tunnel excavation was carried out by sequential excavation with H-section steel internal bracing.', source: dortsZhongheEngineering.id },
    { text: 'Where the station works overlapped roads, cover slabs were used so surface traffic could continue rather than being treated as a permanent construction closure.', source: dortsZhongheEngineering.id },
    { text: 'The same source records different preload ranges for the northern Dingxi and Yongan Market stations and the southern Jingan and Nanshijiao stations, preserving a section-level engineering distinction.', source: dortsZhongheEngineering.id },
    { text: 'Nanshijiao was also the subject of a dedicated joint-development plan because the station site sits at a major urban intersection and transport node.', source: dortsNanshijiaoLandDevelopmentPlan.id },
    { text: 'DORTS describes the plan as part of the statutory land-use process for station, transfer, parking and related railway facilities, rather than as an ordinary private redevelopment.', source: dortsNanshijiaoLandDevelopmentPlan.id },
    { text: 'The completed development provides a large open space at ground level and a public-use area on the second floor that New Taipei City planned as a regional childcare centre.', source: dortsNanshijiaoLandDevelopmentBenefits.id },
    { text: 'The site summary gives a 25,124.94-square-metre base, commercial and residential zoning, a nineteen-storey building above three basement levels and 592 parking spaces.', source: dortsNanshijiaoLandDevelopmentBenefits.id },
    { text: 'DORTS records the building permit on 2 July 2007 and the use certificate on 15 April 2011, so the station’s joint-development story extends well beyond the railway opening date.', source: dortsNanshijiaoLandDevelopmentBenefits.id },
    { text: 'The building combines housing, shops and general offices with the metro facilities, and the case study treats the resulting skyline as a deliberate station landmark.', source: dortsNanshijiaoLandDevelopmentBenefits.id },
    { text: 'Its design uses setbacks, a corner plaza, public and welfare facilities and internalised transport services to improve the surrounding urban environment.', source: dortsNanshijiaoLandDevelopmentBenefits.id },
    { text: 'The common Zhonghe architecture record says the line did not seek a new architectural style, instead using economical underground construction and restrained surface facilities to avoid a strong visual impact on the old narrow-road districts.', source: dortsZhongheArchitecture.id },
    { text: 'At Nanshijiao, that restraint is paired with a large co-constructed development whose public space and childcare use give the station a civic edge.', source: dortsNanshijiaoLandDevelopmentBenefits.id },
    { text: 'The fetched primary pages do not establish the individual civil contractor, final station account, rename gazette, complete current artwork inventory or paid-area versus street-transfer classification for O01.', source: dortsZhongheEngineering.id },
    { text: 'Those fields remain TBC rather than being inferred from the joint-development building or the public-art title.', source: dortsZhongheArchitecture.id },
  ] },
  O02: { engineering: 'O18', exits: 1, openingDate: '24 December 1998', route: dortsZhonghe, platformDetails: underground, exitDetails: 'Single exit: 景平路486號、近景平路、景安路口. Accessible: single exit.', facilities: 'Platform lift at the paid concourse beside the male toilet; exit accessibility lift is published for the station; enquiry points near the exit and at the platform level; water dispenser by the exit; paid-zone toilets and parent/accessible toilet near the exit; baby-changing facilities; bicycle access is open for the O line.', landmarks: tbc, interchange: { label: 'Circular Line; transfer mode: TBC', lineCode: 'Y' }, proseSources: [dortsZhongheArchitecture, dortsZhongheEngineering, dortsZhongheLandDevelopmentCases], prose: [
    { text: 'Jingan belongs to the first underground Zhonghe corridor, where DORTS used sequential excavation, internal H-section steel bracing and road-cover slabs to keep the narrow urban route functioning during construction.', source: dortsZhongheEngineering.id },
    { text: 'The engineering record distinguishes the Jingan and Nanshijiao excavation support from the northern Dingxi and Yongan Market preload figures, so the four-station corridor is not treated as one undifferentiated construction case.', source: dortsZhongheEngineering.id },
    { text: 'DORTS’s completed land-development register identifies a Jingan station joint-development site at the intersection of Jingan Road and Jingping Road.', source: dortsZhongheLandDevelopmentCases.id },
    { text: 'The project was invested in by Kindom Construction and is named the Beautiful Jingan Building in the official case record.', source: dortsZhongheLandDevelopmentCases.id },
    { text: 'DORTS records a May 2008 completion date, a five-level basement and nineteen floors above ground, with a mixed office-and-residential use.', source: dortsZhongheLandDevelopmentCases.id },
    { text: 'The city retained four general-office units on floors three through five, totalling about 1,592.06 ping, together with twenty underground parking spaces.', source: dortsZhongheLandDevelopmentCases.id },
    { text: 'Those retained premises show that the station development was also a public-property project, not simply a private building placed near a metro entrance.', source: dortsZhongheLandDevelopmentCases.id },
    { text: 'The architecture record explains why this kind of interface mattered: the Zhonghe Line passes through older districts with narrow roads, so land development supplied a way to obtain station surface facilities and guide surrounding renewal.', source: dortsZhongheArchitecture.id },
    { text: 'The builder says the line did not aim to impose a new surface architectural style, and instead sought economical station design with as little urban-landscape impact as possible.', source: dortsZhongheArchitecture.id },
    { text: 'Interior design consequently became more important than a large exterior object because all four original Zhonghe stations are underground.', source: dortsZhongheArchitecture.id },
    { text: 'Jingan’s development record therefore adds a property and urban-renewal history to the engineering record without turning the Beautiful Jingan Building into the station itself.', source: dortsZhongheLandDevelopmentCases.id },
    { text: 'It also explains why the station’s public edge should be read as a negotiated combination of transport infrastructure, retained public premises and a mixed-use building.', source: dortsZhongheLandDevelopmentCases.id },
    { text: 'The fetched primary pages do not identify Jingan’s individual civil contractor, final station account, architect, rename gazette, complete artwork record or paid-area versus street-transfer classification.', source: dortsZhongheLandDevelopmentCases.id },
    { text: 'Those fields remain TBC rather than being filled from the development building’s investor or address.', source: dortsZhongheArchitecture.id },
  ] },
  O03: { engineering: 'O17', exits: 1, openingDate: '24 December 1998', route: dortsZhonghe, platformDetails: underground, exitDetails: 'Single exit: 中和路388號. Accessible: single exit.', facilities: 'Exit lift at exit 1; platform lift near the enquiry point, serving the centre of platform 2; enquiry point near the exit; water dispenser at the right of the exit; paid-zone toilets and parent/accessible toilet near the exit; baby-changing facilities; bicycle access open.', landmarks: tbc, proseSources: [dortsZhongheArchitecture, dortsZhongheEngineering, dortsZhongheLandDevelopmentCases], prose: [
    { text: 'Yongan Market is one of the four underground stations in the first Zhonghe corridor, which DORTS records as a 5.4-kilometre route connected by shield tunnels.', source: dortsZhongheEngineering.id },
    { text: 'The station-base and switch-tunnel excavations used sequential excavation with H-section-steel internal bracing, while cover slabs maintained traffic where the works overlapped roads.', source: dortsZhongheEngineering.id },
    { text: 'The engineering record distinguishes the preload reported for Yongan Market and Dingxi from the figures for Jingan and Nanshijiao, so these are section measurements rather than one line-wide value.', source: dortsZhongheEngineering.id },
    { text: 'The land-development register places the Yongan Market joint-development site on Zhonghe Road and Lane 400.', source: dortsZhongheLandDevelopmentCases.id },
    { text: 'DORTS names the development Beautiful Yongan and identifies Guande Construction as its investor.', source: dortsZhongheLandDevelopmentCases.id },
    { text: 'The official case record gives a March 2007 completion date, four basement levels and twenty-two floors above ground, with residential use.', source: dortsZhongheLandDevelopmentCases.id },
    { text: 'It records ninety-eight city-retained residential units totalling about 3,129.6 ping and thirteen underground parking spaces.', source: dortsZhongheLandDevelopmentCases.id },
    { text: 'That retained-property entry documents the public-property interface around the station-area building, not a claim that the developer built the railway itself.', source: dortsZhongheLandDevelopmentCases.id },
    { text: 'DORTS’s Zhonghe architecture account says the line is underground through a narrow older urban fabric, making station interiors more important to identity than a visible elevated structure.', source: dortsZhongheArchitecture.id },
    { text: 'The same account describes joint development or expropriation as the way surface facilities were obtained and says surrounding facilities were designed to limit urban-landscape impact.', source: dortsZhongheArchitecture.id },
    { text: 'This makes Yongan Market a station-and-development interface in the corridor’s renewal strategy, rather than an isolated platform box.', source: dortsZhongheArchitecture.id },
    { text: 'The Yongan development record therefore differs from the Jingan record, which DORTS describes as a mixed office-and-residential building with city-retained offices rather than the same residential programme.', source: dortsZhongheLandDevelopmentCases.id },
    { text: 'The fetched primary pages do not establish Yongan Market’s individual civil contractor, final station account, architect, rename gazette, complete current artwork inventory or paid-area versus street-transfer classification.', source: dortsZhongheEngineering.id },
    { text: 'Those fields remain TBC rather than being inferred from the nearby development or the station name.', source: dortsZhongheArchitecture.id },
  ] },
  O04: { engineering: 'O16', exits: 2, openingDate: '24 December 1998', route: dortsZhonghe, platformDetails: underground, exitDetails: '1: 永和路2段168號; 2: 永和路2段233號. Accessible exit: 1.', facilities: 'Exit 1 lift; paid-concourse platform lift behind the enquiry point; enquiry point and water dispenser near exit 1; unpaid toilets and parent/accessible toilet near exit 1; nursing room near exit 2; baby-changing facilities; bicycle access open.', landmarks: tbc, proseSources: [dortsZhongheArchitecture, dortsZhongheEngineering, dortsZhongheLandDevelopmentCases], prose: [
    { text: 'Dingxi is one of the four underground stations in the original Zhonghe corridor, whose station works DORTS describes as sequential excavations supported by H-section steel and cover slabs over traffic-bearing roads.', source: dortsZhongheEngineering.id },
    { text: 'The structural source reports a northern-station preload range for Dingxi and Yongan Market and a separate range for Jingan and Nanshijiao; the values measure construction support conditions, not passenger demand.', source: dortsZhongheEngineering.id },
    { text: 'DORTS’s completed development register records three Dingxi station-area sites rather than one generic building.', source: dortsZhongheLandDevelopmentCases.id },
    { text: 'The Dingxi J2 site, called the Cardia Building, stands at Yonghe Road Section 2 No. 233 and was invested in by Baochiang Construction.', source: dortsZhongheLandDevelopmentCases.id },
    { text: 'DORTS gives the Cardia Building a July 2006 completion date, two basement levels and seventeen floors above ground, with mixed office-and-residential use.', source: dortsZhongheLandDevelopmentCases.id },
    { text: 'The city-retained portion is recorded as eleven offices and five residences totalling about 872.54 ping, with no underground parking retained in that entry.', source: dortsZhongheLandDevelopmentCases.id },
    { text: 'The Dingxi J3 site, Huafu Qianjin at Yonghe Road Section 2 Nos. 166 and 168, was invested in by Huafu Construction and completed in April 2011.', source: dortsZhongheLandDevelopmentCases.id },
    { text: 'Its case record gives three basement levels and nineteen floors above ground, mixed use, two shops, five residences and ninety general offices totalling about 2,314.4 ping, with a fourth basement and forty-five parking spaces.', source: dortsZhongheLandDevelopmentCases.id },
    { text: 'The J4 site, Jieyun Celebrity at Yonghe Road Section 2 No. 121, was also invested in by Huafu Construction and completed in June 2005.', source: dortsZhongheLandDevelopmentCases.id },
    { text: 'DORTS records J4 as a two-basement, nineteen-floor mixed-use building and says the city retained no property rights in that case.', source: dortsZhongheLandDevelopmentCases.id },
    { text: 'These three entries show that the station-area record concerns separate development contracts and property outcomes, not three conflicting counts for one building.', source: dortsZhongheLandDevelopmentCases.id },
    { text: 'The Zhonghe architecture source describes the common line context as underground construction in a narrow older urban area, with economical surface facilities and station interiors carrying much of the identity.', source: dortsZhongheArchitecture.id },
    { text: 'It also describes joint development or expropriation as the surface-land mechanism and says facilities were arranged to reduce effects on the cityscape.', source: dortsZhongheArchitecture.id },
    { text: 'The fetched primary pages do not establish Dingxi’s individual civil contractor, architect, rename gazette, complete current artwork inventory or paid-area versus street-transfer classification.', source: dortsZhongheEngineering.id },
    { text: 'Those fields remain TBC; the separate development dates and floor programmes are not silently combined into a single station statistic.', source: dortsZhongheLandDevelopmentCases.id },
  ] },
  O05: { engineering: 'O15', exits: 9, openingDate: '24 December 1998', route: dortsZhonghe, platformDetails: underground, exitDetails: '1: 羅斯福路2段136號; 2: 羅斯福路2段168號; 3: 羅斯福路2段79號; 4: 羅斯福路2段69號; 5: 和平東路1段17號; 6: 羅斯福路2段43號; 7: 羅斯福路2段50號、近郵政醫院、婦幼醫院; 8: 和平西路1段13號; 9: 羅斯福路2段100號. Accessible exit: 1.', facilities: 'Exit 1 lift; paid-concourse platform lift behind the enquiry point; enquiry points near exits 1–4 and 5–9; water dispenser at exit 6; unpaid toilets and parent/accessible toilet near exits 1–4; nursing room near exits 7–9; baby-changing facilities; bicycle access open.', landmarks: '郵政醫院; 婦幼醫院', design: 'DORTS notes that O05/G09 Guting was built under the Xindian Line project rather than the Zhonghe Line contract.', designSource: dortsZhonghe, interchange: { label: 'Songshan–Xindian Line; transfer mode: G', lineCode: 'G' } },
  O06: { engineering: 'O14', exits: 8, openingDate: '30 September 2012', route: dortsXinzhuang, platformDetails: underground, exitDetails: '1: 信義路2段、近臨沂街口; 2: 信義路2段與金山南路1段路口; 3: 信義路2段114巷口; 4: 信義路2段148巷口、近麗水街口; 5: 信義路2段166號、近永康街口; 6: 信義路2段、近連雲街口; 7: 近信義路2段191號; 8: 信義路2段163號、東門郵局旁. Accessible exit: 8.', facilities: 'Exit 8 lift; paid-concourse platform lift; enquiry points near exits 4–8; water dispenser between exits 1 and 3; unpaid toilets near exit 6 and paid toilets by the platform lift; parent/accessible toilet by the platform lift; nursing room near exits 6–8; baby-changing facilities; bicycle access open.', landmarks: '東門郵局', design: 'The O06 extension from Zhongxiao Xinsheng to Guting passed its final inspection on 14 September 2012 and opened on 30 September 2012.', designSource: dortsXinzhuang, interchange: { label: 'Tamsui–Xinyi Line; transfer mode: R', lineCode: 'R' } },
  O07: { engineering: 'O13', exits: 7, openingDate: '3 November 2010', route: dortsXinzhuang, structureSource: architecture.o07, platformDetails: underground, platformSource: architecture.o07, exitDetails: '1: 忠孝東路2段101號、近忠孝國小; 2: 忠孝東路2段134巷、近忠孝公園; 3: 忠孝東路3段10巷; 4: 忠孝東路3段與新生南路1段交叉口、近台北科技大學; 5: 新生南路1段56巷口，近濟南路; 6: 新生南路1段、濟南路口; 7: 新生南路1段、忠孝東路3段口. Accessible exits: 2 and 3.', facilities: 'Exit lifts at exits 2 and 3; paid-concourse platform lifts for the Bannan and O lines; enquiry points near exits 1–2 and 5–7; water dispensers at exits 1 and 5; unpaid toilets and parent/accessible toilet near exits 1–2; O-line nursing room in the paid B1 hall; baby-changing facilities; bicycle access not open.', landmarks: '忠孝國小; 忠孝公園; 台北科技大學', design: 'The builder’s station page gives the design theme as 現代化、科技感 (“modernity and technology”), responding to Taipei Tech and the Guanghua information-commerce district.', designSource: architecture.o07, interchange: { label: 'Bannan Line; transfer mode: BL', lineCode: 'BL' } },
  O08: { engineering: 'O12', exits: 8, openingDate: '3 November 2010', route: dortsXinzhuang, structureSource: architecture.o08, platformDetails: underground, platformSource: architecture.o08, exitDetails: '1: 松江路與南京東路口西南隅（於南京東路上）; 2: 松江路與南京東路口西南隅（於松江路上）、松江路108巷旁; 3: 同一西南隅（於松江路上）、近松江公園; 4: 松江路與南京東路口東南隅（於松江路上）; 5: 松江路與南京東路口東南隅（於南京東路上）; 6: 松江路與南京東路口東北隅（於南京東路上）; 7: 松江路與南京東路口東北隅（於松江路上）、近四平街; 8: 松江路與南京東路口西北隅（於松江路上）、松江路124巷旁. Accessible exits: 1, 2 and 8.', facilities: 'Exit lifts at exits 1, 2 and 8; paid-concourse platform lifts on the O-line north and south sides; enquiry points near exits 1 and 2–3; water dispensers at exit 2 and between exits 4–7; unpaid toilets near exits 1, 2 and 5–6, paid toilets near exit 8; parent/accessible toilets at those locations; G-line nursing room near exits 6–7; baby-changing facilities; bicycle access open.', landmarks: '松江公園', design: 'The station design theme is 都市生活之幽默主義 (“urban-life humourism”), responding to the surrounding banking and office district.', designSource: architecture.o08, interchange: { label: 'Songshan–Xindian Line; transfer mode: G', lineCode: 'G' } },
  O09: { engineering: 'O11', exits: 4, openingDate: '3 November 2010', route: dortsXinzhuang, structureSource: architecture.o09, platformDetails: underground, platformSource: architecture.o09, exitDetails: '1: 松江路218號; 2: 松江路235巷口; 3: 松江路273號、近錦州街口; 4: 松江路318號、近錦州街口. Accessible exit: 2.', facilities: 'Exit 2 lift; paid-concourse platform lift; enquiry points near exits 1–2; water dispenser at exit 3; paid-zone toilets and parent/accessible toilet near exits 1 and 4; baby-changing facilities; bicycle access open.', landmarks: tbc, design: 'The station design theme is 快樂上班族 (“happy office worker”), combining the surrounding commercial district, Songjiang Road streetscape and Xingtian Temple cultural references.', designSource: architecture.o09 },
  O10: { engineering: 'O10', exits: 4, openingDate: '3 November 2010', route: dortsXinzhuang, structureSource: architecture.o10, platformDetails: underground, platformSource: architecture.o10, exitDetails: '1: 民權東路1段、林森北路口，近中山國小; 2: 民權東路1段、林森北路口，近新興國中; 3: 民權東路1段、新生北路2段口，近新興國中; 4: 民權東路1段、新生北路3段口，近中山國小. Accessible exits: 2 and 4.', facilities: 'Exit lifts at exits 2 and 4; paid-concourse platform lift; enquiry points near exits 1 and 4; water dispenser at exit 4; unpaid toilet near exit 4 and paid toilets near exits 3–4; parent/accessible toilet in the paid zone; baby-changing facilities; bicycle access open.', landmarks: '中山國小; 新興國中', design: 'The station design theme is 童話世界 (“fairy-tale world”), expressed from the entrances and escalator sides through the concourse and platform wall.', designSource: architecture.o10 },
  O11: { engineering: 'O09', exits: 10, openingDate: '3 November 2010', route: dortsXinzhuang, structureSource: architecture.o11, platformDetails: underground, platformSource: architecture.o11, exitDetails: '1: 民權西路72號; 2: 成淵高中後方; 3: 天祥路16巷口; 4: 天祥路48巷35號對面; 5: 承德路3段、撫順街口; 6: 承德路2段、民權西路口，近台灣銀行; 7: 民權西路58、60號前; 8: 民權西路、天祥路口，近民權西路48號; 9: 民權西路、天祥路口，近民權西路53號; 10: 民權西路67、69號前. Accessible exits: 1 and 10.', facilities: 'Exit 10 lift for the O line; paid-concourse platform lifts for the R and O lines; enquiry points near exits 7–10 and exit 1; water dispensers at exits 1 and 9; unpaid toilet near exit 5 and paid toilets near exits 1 and 7–8; parent/accessible toilets near exit 5 and exit 1; O-line nursing room near exit 10; baby-changing facilities; bicycle access open.', landmarks: '成淵高中; 台灣銀行', design: 'The station design theme is 後現代主義 (“postmodernism”), using glass mosaic and stainless-steel treatments to connect old Taipei’s post-station district with urban development.', designSource: architecture.o11, interchange: { label: 'Tamsui–Xinyi Line; transfer mode: R', lineCode: 'R' } },
  O12: { engineering: 'O08', exits: 4, openingDate: '3 November 2010', route: dortsXinzhuang, structureSource: architecture.o12, platformDetails: underground, platformSource: architecture.o12, exitDetails: '1: 民權西路225巷口; 1A: 民權西路、延平北路3段口; 2: 民權西路、重慶北路3段口; 3: 重慶北路3段、大橋國小旁. Accessible exit: 1.', facilities: 'Exit lift behind exit 1; paid-concourse platform lift; enquiry point and water dispenser near exit 1; unpaid toilet near exit 1 and paid toilets near exits 2–3; parent/accessible toilet in the paid zone; nursing room near exit 3; baby-changing facilities; bicycle access open.', landmarks: '大橋國小', design: 'The station design incorporates Daqiaotou neighbourhood and Daqiao Elementary School history; its page documents eight platform-wall paintings by domestic artists, but does not publish their individual titles, artists, years or media.', designSource: architecture.o12, publicArt: 'Eight platform-wall paintings by domestic artists are documented; individual titles, artists, year and medium: TBC.', publicArtSource: architecture.o12 },
  O13: { engineering: 'O07', exits: 1, openingDate: '5 January 2012', route: dortsXinzhuang, structureSource: architecture.o13, platformDetails: 'Underground six-level stacked station with upper and lower platform waiting levels; platform form and track count: TBC.', platformSource: architecture.o13, exitDetails: 'Single exit: 重新路1段108號. Accessible: single exit.', facilities: 'Exit lift at the single exit; paid-concourse platform lift; enquiry point and water dispenser near the exit; paid-zone toilets and parent/accessible toilet near the east side of the concourse; baby-changing facilities; bicycle access open.', landmarks: tbc, design: 'The station is co-constructed with a joint-development building; its design theme is 鐵橋夕照 (“bridge at sunset”), with Danshui River, Guanyin Mountain, market culture and Taipei Bridge historical images.', designSource: architecture.o13 },
  O14: { engineering: 'O06', exits: 3, openingDate: '5 January 2012', route: dortsXinzhuang, structureSource: architecture.o14, platformDetails: 'Underground two-level island-platform station; platform length 141 m; track count: TBC.', platformSource: architecture.o14, exitDetails: '1: 重新路3段115巷旁、近三重簡易庭; 2: 重新路3段150號、近光明路; 3: 重新路3段、近新北大道1段. Accessible exit: 2.', facilities: 'Exit 2 lift; paid-concourse platform lift; enquiry points near exits 1 and 2; water dispenser at exit 1; paid-zone toilets and parent/accessible toilet near exit 3; baby-changing facilities; bicycle access open.', landmarks: '三重簡易庭', design: 'The station design theme is 都會剪影 (“urban silhouette”), using ordered glass, enamel-panel and LED treatments.', designSource: architecture.o14 },
  O15: { engineering: 'O05', exits: 3, openingDate: '5 January 2012', route: dortsXinzhuang, structureSource: architecture.o15, platformDetails: 'Underground two-level station; the builder describes the central platform waiting area and platform doors, but not the platform form or track count.', platformSource: architecture.o15, exitDetails: '1: 捷運路36號、近水漾路1段及桃園機場捷運三重站; 2: 捷運路、近捷運路22巷口; 3: 捷運路、近捷運路19巷口. Accessible exit: 1.', facilities: 'Exit 1 lift; paid-concourse platform lift; enquiry point near exit 1; no water-dispenser position is published; unpaid toilet near exit 1 and paid toilet by the platform lift; parent/accessible toilet by the platform lift; baby-changing facilities; bicycle access open.', landmarks: '桃園機場捷運三重站', design: 'The station is a transfer station with the Airport MRT; its design theme is 親水綠地 (“waterside green space”), expressed through water-ripple and grass imagery.', designSource: architecture.o15, interchange: { label: 'Airport MRT; transfer mode: TBC', lineCode: 'A' } },
  O16: { engineering: 'O04', exits: 3, openingDate: '5 January 2012', route: dortsXinzhuang, structureSource: architecture.o16, platformDetails: 'Underground two-level island-platform station; platform length 141 m; track count: TBC.', platformSource: architecture.o16, exitDetails: '1: 重新路5段515號、近光復路1段; 2: 重新路5段、近中興南街; 3: 重新路5段、近光復路1段路口. Accessible exit: 1.', facilities: 'Exit 1 lift; paid-concourse platform lift; enquiry points near exits 1 and 3; no water-dispenser position is published; paid-zone toilets and parent/accessible toilet near the enquiry point; baby-changing facilities; bicycle access open.', landmarks: tbc, design: 'The station design concept is 沙洲上的鋼鐵業 (“steel industry on a sandbar”), reflecting Sanchong’s industrial district and using lightweight steel entrance structures.', designSource: architecture.o16 },
  O17: { engineering: 'O03', exits: 4, openingDate: '5 January 2012', route: dortsXinzhuang, structureSource: architecture.o17, platformDetails: 'Underground three-level island-platform station; platform length 141 m; track count: TBC.', platformSource: architecture.o17, exitDetails: '1: 思源路20號、近中正路口; 2: 中正路81巷口、近大漢橋; 3: 中正路、近中正路61巷; 4: 中正路、近中正路56巷. Accessible exit: 1.', facilities: 'Paid-concourse transfer lift and platform lift; enquiry points near exits 1 and 2; no water-dispenser position is published; O-line unpaid and paid toilets and parent/accessible toilets are published; Circular Line facilities are separately listed; baby-changing facilities; bicycle access is open for O and excluded for Circular Line.', landmarks: '大漢橋', design: 'The station design concept is 千帆數不盡・北台新莊港 (“countless sails, northern Xin-zhuang port”), responding to the former inland-waterway setting and water-ripple imagery.', designSource: architecture.o17, interchange: { label: 'Circular Line; transfer mode: TBC', lineCode: 'Y' } },
  O18: { engineering: 'O02', exits: 2, openingDate: '5 January 2012', route: dortsXinzhuang, structureSource: architecture.o18, platformDetails: 'Underground two-level island-platform station; platform length 141 m; track count: TBC.', platformSource: architecture.o18, exitDetails: '1: 中正路138號、近中華路1段、新莊區衛生所旁; 2: 中正路、近新莊國中校門旁. Accessible exits: 1 and 2.', facilities: 'Exit lifts at exits 1 and 2; paid-concourse platform lift; enquiry points near exits 1 and 2; no water-dispenser position is published; unpaid toilet near exit 1 and paid toilets near the east hall; parent/accessible toilet near the east hall; baby-changing facilities; bicycle access open.', landmarks: '新莊區衛生所; 新莊國中', design: 'The station design concept is 飛揚的絹・編織未來 (“flying silk, weaving the future”), reflecting Xinzhuang’s former textile industry; its public-area wall treatment uses textile imagery.', designSource: architecture.o18 },
  O19: { engineering: 'O01', exits: 4, openingDate: '5 January 2012', route: dortsXinzhuang, structureSource: architecture.o19, platformDetails: underground, platformSource: architecture.o19, exitDetails: '1: 中正路510之1號、近輔大校門; 2: 福營路、近建國一路、福營派出所; 3: 鄰近中正路537號; 4: 鄰近中正路488號. Accessible exits: 1 and 2.', facilities: 'Exit lifts at exits 1 and 2; paid-concourse platform lift; enquiry points near exits 1 and 2; no water-dispenser position is published; unpaid toilet near exit 2 and paid toilet by the platform lift; parent/accessible toilet by the platform lift; baby-changing facilities; bicycle access open.', landmarks: '輔仁大學; 福營派出所', design: 'The station’s architecture uses Fu Jen University campus imagery and documents New Xinzhuang history, transport history and the Xinxiyuan puppet-theatre tradition in its interior treatments.', designSource: architecture.o19 },
  O20: { engineering: 'O60', exits: 2, openingDate: '29 June 2013', route: dortsXinzhuang, structureSource: architecture.o20, platformDetails: 'Underground two-level island-platform station; track count: TBC.', platformSource: architecture.o20, exitDetails: '1: 中正路624之1號; 2: 中正路、近民安路口. Accessible exit: 2.', facilities: 'Exit 2 lift; paid-concourse platform lift; enquiry points near exits 1 and 2; no water-dispenser position is published; paid-zone toilets and parent/accessible toilet near the east hall; baby-changing facilities; bicycle access open.', landmarks: tbc, design: 'DORTS documents a two-level island-platform station and a public-art design theme of 活潑、希望、進步、朝氣 (“liveliness, hope, progress and vitality”).', designSource: architecture.o20 },
  O21: { engineering: 'O59', exits: 3, openingDate: '29 June 2013', route: dortsXinzhuang, structureSource: architecture.o21, platformDetails: 'Underground island-platform station; the station is the Xinzhuang Line terminal beside Xinzhuang Depot; track count: TBC.', platformSource: architecture.o21, exitDetails: '1: 中正路758號、近樂生療養院; 2: 中正路、近中正路929巷; 3: 中正路、近中正路746巷. Accessible exit: 1.', facilities: 'Exit 1 lift; paid-concourse platform lift; enquiry point near exit 1; no water-dispenser position is published; paid-zone toilets and parent/accessible toilet by the platform lift; nursing room in the paid hall; baby-changing facilities; bicycle access open.', landmarks: '樂生療養院', design: 'The station is beside and integrated with the Xinzhuang Depot boundary; the station page describes its three-entrance arrangement, mixed concourse and equipment spaces, and island platform.', designSource: architecture.o21 },
  O50: { engineering: 'O47', exits: 1, openingDate: '3 November 2010', route: dortsLuzhou, structureSource: architecture.o50, platformDetails: 'Underground two-level island-platform station; track count: TBC.', platformSource: architecture.o50, exitDetails: 'Single exit: 三和路3段、仁愛街口，近三重國小. Accessible: single exit.', facilities: 'Exit lift at the single exit; paid-concourse platform lift; enquiry point, water dispenser, unpaid toilets and parent/accessible toilet near the exit; baby-changing facilities; bicycle access open.', landmarks: '三重國小; 仁愛公園', design: 'The Luzhou-line station theme is 飛越花圃 (“flying over a flower garden”), using a grid motif for spring ground and rice fields; DORTS documents the station as an underground two-level island-platform station.', designSource: architecture.o50 },
  O51: { engineering: 'O46', exits: 2, openingDate: '3 November 2010', route: dortsLuzhou, structureSource: architecture.o51, platformDetails: 'Underground two-level island-platform station; track count: TBC.', platformSource: architecture.o51, exitDetails: '1: 三和路4段218巷口，近三和國中正門; 2: 三和路4段107號. Accessible exits: 1 and 2.', facilities: 'Exit lifts at exits 1 and 2; paid-concourse platform lift; enquiry points near exits 1 and 2; water dispenser at exit 2; paid-zone toilets and parent/accessible toilet near the platform lift; baby-changing facilities; bicycle access open.', landmarks: '三和國中', design: 'The station theme is 獨立沙洲 (“isolated sandbar”), using sandbar floor patterns and white-egret imagery; DORTS documents the station as an underground two-level island-platform station.', designSource: architecture.o51 },
  O52: { engineering: 'O45', exits: 2, openingDate: '3 November 2010', route: dortsLuzhou, platformDetails: underground, platformSource: dortsLuzhou, exitDetails: '1: 中山一路3號，近徐匯中學; 2: 三和路4段、永安北路口. Accessible exit: 2.', facilities: 'Exit 2 lift; west-side paid-concourse platform lift; enquiry point near exit 2; no water-dispenser position is published; unpaid toilets and parent/accessible toilet near exit 1; baby-changing facilities; bicycle access open.', landmarks: '徐匯中學', design: 'The station theme is 蘆荻泛月 (“reeds under the moon”), one of the five white-egret sub-themes of the Luzhou branch.', designSource: architecture.o52 },
  O53: { engineering: 'O44', exits: 2, openingDate: '3 November 2010', route: dortsLuzhou, platformDetails: underground, platformSource: dortsLuzhou, exitDetails: '1: 三民路、復興路口，近三民停車場; 2: 三民路、復興路口，近三民高中. Accessible exit: 1.', facilities: 'Exit 1 lift; paid-concourse platform lift; enquiry points near exits 1 and 2; no water-dispenser position is published; paid-zone toilets and parent/accessible toilet near exit 2; baby-changing facilities; bicycle access open.', landmarks: '三民高中; 三民停車場', design: 'The station theme is 在水一方 (“by the water”), using blue and green, water-ripple curves and waterbird imagery as the Luzhou branch’s water sub-theme.', designSource: architecture.o53 },
  O54: { engineering: 'O43', exits: 3, openingDate: '3 November 2010', route: dortsLuzhou, platformDetails: underground, platformSource: dortsLuzhou, exitDetails: '1: 三民路386號，近中正路口; 2: 捷運廣場; 3: 三民路、中正路口，近中正路側. Accessible exit: 2.', facilities: 'Exit 2 lift; paid-concourse platform lift; enquiry points near exits 1 and 3; unpaid toilet near exit 1 and paid toilet by the platform lift; parent/accessible toilet by the platform lift; nursing room in the paid hall; baby-changing facilities; bicycle access open.', landmarks: tbc, design: 'The station theme is 迎風起舞 (“dancing in the wind”), the Luzhou branch’s wind sub-theme, expressed through a double-curve vocabulary.', designSource: architecture.o54 },
}

const stationProse: Record<string, StationProseSentence[]> = {
  O05: [
    { text: 'Guting is the northern end of the original Zhonghe track package: DORTS separates the station itself from the CT561 track scope, which ran from Guting toward Nanshijiao.', source: dortsZhongheTrackContract.id },
    { text: 'That package covered 12.8 kilometres of underground track, four stations and the simple parking-and-maintenance depot at Nanshijiao.', source: dortsZhongheTrackContract.id },
    { text: 'DORTS records CC561 as awarded in ROC year 81 to Dongyi Construction and Bilfinger + Berger, with a contract value of NT$490 million and completion on 24 December 1998.', source: dortsZhongheTrackContract.id },
    { text: 'The track contract was unusual because the underground line had no ground depot that could serve as a materials yard or rail-welding shop.', source: dortsZhongheTrackContract.id },
    { text: 'Construction therefore used work shafts to lower material and placed the rail-welding operation below ground, a method DORTS identifies as a departure from the usual track-construction pattern.', source: dortsZhongheTrackContract.id },
    { text: 'The route page separately notes that O05/G09 Guting was built under the Xindian Line project rather than under the Zhonghe Line contract, preserving the boundary between the station’s interchange history and the later southbound track package.', source: dortsZhonghe.id },
    { text: 'Guting is consequently a joint point between the earlier Xindian Line and the Zhonghe section that opened southward in 1998, rather than an ordinary intermediate station in one construction package.', source: dortsZhonghe.id },
    { text: 'DORTS’s general architecture account treats circulation as the first design requirement: large passenger flows need simple routes, modular planning and systematised space.', source: dortsStationArchitectureGeneral.id },
    { text: 'Because the Zhonghe stations are underground, the architecture page says interior finishes and spatial treatment carry more of the identity than a visible elevated structure.', source: dortsZhongheArchitecture.id },
    { text: 'The same page describes the later network’s practice of developing station themes and public-art concepts from local environmental and cultural settings.', source: dortsStationArchitectureGeneral.id },
    { text: 'The early-network public-art introduction records Guting’s suspended-form work 邂逅 as an invited-competition selection, placing the station within that programme rather than leaving it as an art-free interchange.', source: dortsZhonghePublicArtIntro.id },
    { text: 'The art record is a programme description, not a complete current inventory of every object or finish at Guting.', source: dortsZhonghePublicArtIntro.id },
    { text: 'The fetched pages do not establish a Guting-only civil contract price, station architect, rename gazette, incident record or paid-area versus street-transfer classification.', source: dortsZhongheTrackContract.id },
    { text: 'Those fields remain TBC instead of being inferred from the interchange or from a line-wide contract.', source: dortsZhongheArchitecture.id },
  ],
  O06: [
    { text: 'The DORTS engineering record labels Dongmen as O14/R10, while the current operator identifies the station as O06/R10; both are retained as source-era and current operating codes.', source: dortsDongmenEngineering.id },
    { text: 'The CK570H package combined Dongmen station with four metro shield tunnels and two common-utility tunnels, making the station a construction junction rather than a simple single-line box.', source: dortsDongmenEngineering.id },
    { text: 'The four railway tunnels crossed and overlapped beneath Hangzhou South Road beside Zhongzheng Junior High School, with adjacent tunnels as close as about three metres and about one metre at the launch shaft.', source: dortsDongmenEngineering.id },
    { text: 'Their S-shaped alignment had a minimum radius of 200 metres, so ground improvement by grouting preceded excavation and completed tunnels had to be protected while the remaining bores were driven.', source: dortsDongmenEngineering.id },
    { text: 'DORTS calls this the first domestic construction case of several tunnels crossing and overlapping within such a confined area.', source: dortsDongmenEngineering.id },
    { text: 'The same engineering page describes a four-level underground interchange island station with the concourse at B1, platforms at B2 and B4, and an intermediate level at B3.', source: dortsDongmenEngineering.id },
    { text: 'That page gives a 154-metre station length, 22.3-metre clear width and 31.2-metre excavation depth, and lists six source-era surface entrances and two ventilation shafts.', source: dortsDongmenEngineering.id },
    { text: 'A separate DORTS technical-journal account gives 216 metres by 25 metres and about 32 metres deep for the cut-and-cover station structure; these are published as different project measurements, not averaged.', source: dortsDongmenTechnical.id },
    { text: 'The tunnel schedule distinguishes the Xinzhuang Line bores from Dongmen to Guting and the Xinyi Line bores from Dongmen to Chiang Kai-shek Memorial Hall, with four single-direction shield tunnels in the package.', source: dortsDongmenEngineering.id },
    { text: 'The station structure used a double-wall SRC system with permanent H-section steel columns, and the fit-out record describes directional granite floor patterns, enamel panels, perforated aluminium ceilings and special daylight panels.', source: dortsDongmenFitout.id },
    { text: 'The systems for the two lines came from different suppliers, so the station’s D-type enquiry counter had to be enlarged and reorganised to contain the combined monitoring equipment.', source: dortsDongmenFitout.id },
    { text: 'DORTS’s public-art table records 璀璨東門‧龍躍永康 on the vertical-circulation end wall, by Chang Naiwen of 麻粒國際文化試驗.', source: dortsZhongheXinluPublicArtTable.id },
    { text: 'The table gives an ROC-year 101 April completion, stainless steel and LED materials, a NT$5 million cost and invitation competition as the selection method.', source: dortsZhongheXinluPublicArtTable.id },
    { text: 'The source-era engineering page lists six surface entrances, while the current TRTC record publishes eight exits; the values measure different records and both remain visible in the page data.', source: dortsDongmenEngineering.id },
    { text: 'The fetched primary pages do not establish a separate Dongmen civil-construction final account, rename gazette or paid-area versus street-transfer classification.', source: dortsDongmenEngineering.id },
  ],
  O07: [
    { text: 'Zhongxiao Xinsheng sits beside Taipei Tech and the Guanghua information-and-technology commercial district, so DORTS treats the surrounding setting as a reason to make the station interior modern and technologically inflected.', source: architecture.o07.id },
    { text: 'The station page names 現代化、科技感 (“modernity and technology”) as its design theme rather than presenting the station as a generic underground stop.', source: architecture.o07.id },
    { text: 'Its location brings a university campus, an information-commercial district and ordinary Zhongxiao Road traffic into the same station design problem.', source: architecture.o07.id },
    { text: 'That combination explains why the station’s identity is expressed through interior treatment and circulation rather than through a large isolated surface building.', source: dortsStationArchitectureGeneral.id },
    { text: 'DORTS’s general architecture guidance starts with the need to move large numbers of passengers quickly and clearly, then uses modular and systematised space to support that movement.', source: dortsStationArchitectureGeneral.id },
    { text: 'The guidance also says that later-network stations develop a local creative theme and public-art concept together with their building form.', source: dortsStationArchitectureGeneral.id },
    { text: 'At Zhongxiao Xinsheng, the local reference is the technology-and-information setting around Taipei Tech and Guanghua, not a historic-waterfront or religious district.', source: architecture.o07.id },
    { text: 'The builder’s station record therefore connects the theme to place and use: students, technology businesses and visitors approach the same underground public room from different directions.', source: architecture.o07.id },
    { text: 'The current TRTC station record identifies O07, while the DORTS route and station-design material belongs to the construction-era Xinzhuang Line sequence; the page keeps current operating identity separate from historical project documentation.', source: dortsXinzhuang.id },
    { text: 'DORTS’s station-design chapter describes the shared Xinzhuang treatment as a relationship among local context, entrances, ventilation structures, mosaics and enamel panels.', source: dortsXinluStationDesignTechnical.id },
    { text: 'That chapter’s design logic makes the entrance, concourse and platform a continuous sequence rather than unrelated decorative surfaces.', source: dortsXinluStationDesignTechnical.id },
    { text: 'The general architecture page asks surface structures to be light, transparent and visually restrained, an approach suited to an already crowded Zhongxiao corridor.', source: dortsStationArchitectureGeneral.id },
    { text: 'The fetched primary pages do not establish O07’s individual civil contractor, final account, architect, rename gazette, complete art inventory or paid-area versus street-transfer classification.', source: architecture.o07.id },
    { text: 'Those fields remain TBC rather than being inferred from Taipei Tech, Guanghua or the station’s technology theme.', source: dortsStationArchitectureGeneral.id },
  ],
  O08: [
    { text: 'The DORTS technical record labels Songjiang Nanjing as G17/O12, while the current TRTC station records use G15/O08; these are source-era project codes and current operating codes, not a value to reconcile.', source: dortsSongjiangStationTechnical.id },
    { text: 'The station sits at the Nanjing East Road and Songjiang Road intersection in a high-rise mixed office, residential and financial district.', source: dortsSongjiangStationTechnical.id },
    { text: 'DORTS also notes nearby schools, including Datong High School and Changan Junior High School, and says the station drew substantial school and commuter flows after opening.', source: dortsSongjiangStationTechnical.id },
    { text: 'The source-era plan describes a three-level underground interchange with the Songshan Line and the O line occupying different platform levels beneath the same concourse.', source: dortsSongjiangStationTechnical.id },
    { text: 'The architecture page names the theme 都會生活之幽默主義 (“urban-life humourism”), using the office district as the setting for a more playful treatment of everyday city movement.', source: architecture.o08.id },
    { text: 'That theme is attached to a real transfer and commuter node, not to a stand-alone art installation separated from the network’s operating work.', source: architecture.o08.id },
    { text: 'DORTS’s joint-development case gives the site an area of 1,471 square metres, with 1,166 square metres assigned to the MRT portion.', source: dortsSongjiangLandDevelopment.id },
    { text: 'The planned building has eighteen floors above six basements and incorporates escalators, an MRT entrance, an accessible lift, ventilation and a cooling tower into the shared structure.', source: dortsSongjiangLandDevelopment.id },
    { text: 'The case describes a mixed-use building and treats the joint structure as a way to connect a transport network with urban redevelopment rather than as a separate station shell.', source: dortsSongjiangLandDevelopment.id },
    { text: 'Its design rationale calls for respect for the site’s land and urban history, including the rebirth of a church formerly on the site.', source: dortsSongjiangLandDevelopment.id },
    { text: 'The building mass was divided into three parts to adjust its proportions and reduce visual impact on the surroundings.', source: dortsSongjiangLandDevelopment.id },
    { text: 'DORTS’s general principles require simple passenger circulation, modular planning, safe materials and maintainable public-art integration across the station.', source: dortsStationArchitectureGeneral.id },
    { text: 'The fetched primary pages do not establish a separate O08 civil contract, final account, architect, rename gazette, complete art inventory or paid-area versus street-transfer classification.', source: dortsSongjiangLandDevelopment.id },
  ],
  O09: [
    { text: 'DORTS distinguishes Xingtian Temple as a consumption-oriented commercial stretch where office workers and shoppers circulate, rather than the predominantly banking-and-office setting described at Songjiang Nanjing.', source: architecture.o09.id },
    { text: 'The station’s design theme is 音樂及舞蹈—快樂上班族 (“music and dance—happy office worker”), a deliberate response to the busy commercial street and its everyday users.', source: architecture.o09.id },
    { text: 'The builder ties the design to the Songjiang Road street-making plan’s aim of a happy and hopeful public space.', source: architecture.o09.id },
    { text: 'It also combines mixed old-and-new architectural language with the cultural colour of Xingtian Temple and other popular religious practice.', source: architecture.o09.id },
    { text: 'The station therefore sits at a junction of commercial consumption, office travel and religious-cultural activity, rather than serving a single land-use category.', source: architecture.o09.id },
    { text: 'DORTS’s station-design chapter describes the surrounding northern-city corridor as a mixture of new towers and older buildings, with busy traffic and commercial space interwoven.', source: dortsXinluStationDesignTechnical.id },
    { text: 'That context is carried into the station through mosaic and enamel-panel treatments, which let the public art and building finishes share a local visual vocabulary.', source: dortsXinluStationDesignTechnical.id },
    { text: 'The official public-art table records 國泰民安 at Xingtian Temple station, by 鞏文宜 of 謙石國際藝術有限公司.', source: dortsZhongheXinluPublicArtTable.id },
    { text: 'The table gives a ROC-year 98 June completion, concourse-wall placement, ceramic material, NT$6.1 million cost and public open selection.', source: dortsZhongheXinluPublicArtTable.id },
    { text: 'The art record describes the work as drawing on temple ritual objects and Bajiajiang facial imagery to express peace and public welfare; the page does not require reproducing the artwork itself.', source: dortsZhongheXinluPublicArtTable.id },
    { text: 'DORTS’s general architecture account says each station theme should be developed with its public-art concept from the beginning rather than added after the building is fixed.', source: dortsStationArchitectureGeneral.id },
    { text: 'The current operator record identifies O09, while the project pages describe the earlier Xinzhuang Line construction sequence and its local design vocabulary.', source: dortsXinzhuang.id },
    { text: 'The fetched primary pages do not establish O09’s individual civil contractor, final account, architect, rename gazette or paid-area versus street-transfer classification.', source: architecture.o09.id },
  ],
  O10: [
    { text: 'Zhongshan Elementary School lies beside a school-and-education corridor: DORTS places the station north of Zhongshan Elementary School and south of Xinxing Junior High School.', source: dortsXinluStationDesignTechnical.id },
    { text: 'Its station identity is deliberately based on children’s worlds, with the design theme 童話世界 (“fairy-tale world”).', source: architecture.o10.id },
    { text: 'The builder says the theme is expressed through art and through the school-district character of the surrounding blocks.', source: dortsXinluStationDesignTechnical.id },
    { text: 'The entrance form uses simple geometric lines and planes, with strengthened glass openings to reduce the apparent mass of the above-ground structure.', source: dortsXinluStationDesignTechnical.id },
    { text: 'Glass-mosaic panels at the entrance portray the liveliness of children at play, and the image continues inward to the platform-side enamel panels.', source: dortsXinluStationDesignTechnical.id },
    { text: 'Ventilation structures reuse the entrance geometry where function allows, giving the otherwise technical elements a recognisable station vocabulary.', source: dortsXinluStationDesignTechnical.id },
    { text: 'The detailed station-design chapter describes the treatment as a transition from outside to inside rather than a decoration confined to the concourse.', source: dortsXinluStationDesignTechnical.id },
    { text: 'DORTS’s general station principles begin with simple passenger movement and modular planning, so the school-themed treatment sits inside a functional transport building.', source: dortsStationArchitectureGeneral.id },
    { text: 'The same principles require public art and architecture to be integrated across entrances, ventilation, concourse, platforms, walls, ceilings and lighting.', source: dortsStationArchitectureGeneral.id },
    { text: 'That integration explains why the school reference appears in the station’s surface geometry, wall mosaics, platform enamel panels and ventilation forms together.', source: dortsXinluStationDesignTechnical.id },
    { text: 'O10 belongs to the Xinzhuang Line’s northern Taipei construction sequence, while the current operator page supplies the operating identity and passenger facilities.', source: dortsXinzhuang.id },
    { text: 'The project design record does not claim that the station is a school facility; it describes the schools as the surrounding urban context for the theme.', source: dortsXinluStationDesignTechnical.id },
    { text: 'This distinguishes O10 from the commercial and temple references described for O09 immediately south on the same line.', source: architecture.o10.id },
    { text: 'The fetched primary pages do not establish O10’s individual civil contractor, final account, architect, rename gazette, complete art inventory or paid-area versus street-transfer classification.', source: architecture.o10.id },
    { text: 'Those fields remain TBC rather than being inferred from the school names or from the fairy-tale design theme.', source: dortsStationArchitectureGeneral.id },
  ],
  O11: [
    { text: 'DORTS describes Minquan West Road as a boundary between the old Taipei rear-station atmosphere and later metropolitan development.', source: architecture.o11.id },
    { text: 'Its design theme is 後現代主義 (“postmodernism”), which the builder uses to make the station a meeting point between those two urban periods.', source: architecture.o11.id },
    { text: 'The station’s concourse wall uses glass mosaics and the platform-side track wall uses painted stainless steel, carrying the new-and-old urban fusion from one level to the next.', source: architecture.o11.id },
    { text: 'Different granite floor materials and patterns mark the connection between the Xinzhuang and Tamsui lines, so the interchange is expressed in the architecture as well as in the route map.', source: architecture.o11.id },
    { text: 'DORTS’s chapter places Minquan West Road in a corridor where later urban development sits beside older commercial space and the historical atmosphere of Dalongdong, Shuanglian and Yuanshan.', source: dortsXinluStationDesignTechnical.id },
    { text: 'That mixture is why the page avoids a single purely historic or purely modern image for the station.', source: architecture.o11.id },
    { text: 'The surface entrance language follows the shared section vocabulary, using steel frames and glass to keep the structures light and reduce visual pressure on neighbouring buildings.', source: dortsXinluStationDesignTechnical.id },
    { text: 'The builder’s general architecture principles require station circulation to remain simple and clear even when local art and history are layered into the finishes.', source: dortsStationArchitectureGeneral.id },
    { text: 'At Minquan West Road, the directional floor pattern is therefore both a design element and an orientation device for transfer passengers.', source: architecture.o11.id },
    { text: 'The current operator record identifies O11, while the DORTS architecture page records the station within the earlier Xinzhuang Line project sequence.', source: dortsXinzhuang.id },
    { text: 'The station’s public edge is consequently documented as a negotiated urban transition rather than a freestanding object in an open site.', source: architecture.o11.id },
    { text: 'DORTS’s design account does not publish a station-only civil contract, final account or named architect for O11.', source: architecture.o11.id },
    { text: 'It also does not establish a dated rename gazette, complete current public-art inventory or paid-area versus street-transfer classification.', source: dortsStationArchitectureGeneral.id },
    { text: 'Those fields remain TBC rather than being inferred from the postmodern treatment or the interchange floor.', source: architecture.o11.id },
  ],
  O12: [
    { text: 'DORTS records Daqiaotou’s unpaid concourse as an evocation of Dihua Street’s market arcades, using layered frames to create depth.', source: architecture.o12.id },
    { text: 'Frosted stair glass carries part of Daqiao Elementary School’s song, linking the neighbourhood school to the station’s circulation space.', source: architecture.o12.id },
    { text: 'Eight platform-wall paintings separate travel directions: water toward Xinzhuang and Luzhou, and Taipei city views toward the east.', source: architecture.o12.id },
    { text: 'The public-art table separately records four Daqiaotou works, including 物件故事, 大河再舞, 搖籃 and another wall treatment, with completion in ROC year 99 January.', source: dortsZhongheXinluPublicArtTable.id },
    { text: 'The table names the artists and records ceramic, glass-brick, copper-wire and glazed materials across those entries, rather than treating the eight platform paintings as one undifferentiated work.', source: dortsZhongheXinluPublicArtTable.id },
    { text: 'One of the works was made with a 2009 sixth-grade class at Daqiao Elementary School, giving the station’s school reference a documented participatory component.', source: dortsZhongheXinluPublicArtTable.id },
    { text: 'Another work connects Dadaocheng’s earlier prosperity and the replacement of water transport by rail with the hope that the MRT would support urban renewal.', source: dortsZhongheXinluPublicArtTable.id },
    { text: 'The builder’s design chapter presents Daqiaotou as a place where market memory, school life and transport history overlap.', source: architecture.o12.id },
    { text: 'The general DORTS architecture principles require art and architecture to be planned together across entrances, concourses, platforms, landscape, walls, ceilings and lighting.', source: dortsStationArchitectureGeneral.id },
    { text: 'Daqiaotou’s treatment follows that principle by distributing local references between the street approach, unpaid hall, stairs, platform walls and public-art surfaces.', source: architecture.o12.id },
    { text: 'The current operator record identifies O12, while the DORTS page records the station in the north Taipei Xinzhuang Line sequence.', source: dortsXinzhuang.id },
    { text: 'The sources do not establish a station-only civil contract, final account, architect, rename gazette or paid-area versus street-transfer classification.', source: architecture.o12.id },
    { text: 'The complete current inventory of the eight platform-wall paintings remains TBC where title, artist, year or medium is not published.', source: architecture.o12.id },
  ],
  O13: [
    { text: 'DORTS places Taipei Bridge’s main entrance, ventilation shaft, two emergency exits and concourse inside a joint-development building on the south side of the station.', source: architecture.o13.id },
    { text: 'The arrangement keeps the large public and service elements inside the development site while the platform structure remains below the road corridor.', source: architecture.o13.id },
    { text: 'The station’s design theme is 鐵橋夕照 (“bridge at sunset”), drawing on the Danshui River, Guanyin Mountain, market culture and historical images of Taipei Bridge.', source: architecture.o13.id },
    { text: 'DORTS’s architecture account treats the bridge not only as a crossing but also as a carrier of local memory and a way to connect the station to the surrounding district.', source: architecture.o13.id },
    { text: 'The joint-development arrangement means that station access, ventilation and emergency circulation were negotiated with a building programme rather than laid out on an open independent lot.', source: architecture.o13.id },
    { text: 'The general station-design principles require such surface forms to be light, transparent and visually restrained while remaining easy to recognise as entrances.', source: dortsStationArchitectureGeneral.id },
    { text: 'That requirement is particularly important at a station whose public programme is partly inside a private development structure.', source: dortsStationArchitectureGeneral.id },
    { text: 'The public-art table records Taipei Bridge’s 大橋千尺枕江流-浮光‧掠影 on entrance-side walls and stair-platform walls.', source: dortsZhongheXinluPublicArtTable.id },
    { text: 'It names 黃文慶 of 場所精靈藝術有限公司, gives ROC-year-101 January, coloured glass and marble mosaic with fibre-optic lighting, a NT$5.5 million cost and public open selection.', source: dortsZhongheXinluPublicArtTable.id },
    { text: 'The table connects the work’s material language to bridge and river imagery, which is consistent with the station’s architectural theme without requiring the artwork to be reproduced.', source: dortsZhongheXinluPublicArtTable.id },
    { text: 'The current operator record identifies O13, while the DORTS page preserves the earlier station-design and joint-development record.', source: dortsXinzhuang.id },
    { text: 'The fetched primary pages do not establish O13’s individual civil contract, final account, architect, rename gazette or paid-area versus street-transfer classification.', source: architecture.o13.id },
    { text: 'Those fields remain TBC rather than being inferred from the development building or the bridge imagery.', source: dortsStationArchitectureGeneral.id },
  ],
  O14: [
    { text: 'DORTS places Cailiao’s exit 1 on the east side of the simple-court plaza and places exit 2 on a south-side joint-development site.', source: architecture.o14.id },
    { text: 'Because the available land is divided by the road and development boundaries, the ventilation and emergency elements are distributed rather than gathered into one large surface volume.', source: architecture.o14.id },
    { text: 'The station’s design theme is 都會剪影 (“urban silhouette”), using ordered glass, enamel panels and LED treatment to turn a constrained urban edge into a recognisable entrance.', source: architecture.o14.id },
    { text: 'The builder’s choice of silhouette is a response to the surrounding city form, not a claim that Cailiao is an isolated park station.', source: architecture.o14.id },
    { text: 'DORTS’s general architecture page says surface structures should be reduced in mass, light and transparent, with identity carried by material and proportion.', source: dortsStationArchitectureGeneral.id },
    { text: 'Cailiao’s distributed elements follow that rule by breaking the station’s above-ground presence into smaller pieces around existing streets and development.', source: architecture.o14.id },
    { text: 'The station is part of the northern Xinzhuang Line sequence for which DORTS used local themes and public art to distinguish otherwise underground stations.', source: dortsXinzhuang.id },
    { text: 'That approach lets a functional ventilation shaft and an emergency route participate in the same visual system as the entrance.', source: architecture.o14.id },
    { text: 'The current operator record identifies O14, while the DORTS design record describes the source-era project layout and its surface constraints.', source: dortsXinzhuang.id },
    { text: 'The primary pages checked for this batch do not provide a station-specific public-art title, artist, year, medium or cost for Cailiao.', source: architecture.o14.id },
    { text: 'They also do not establish the individual civil contractor, final account, architect, rename gazette or paid-area versus street-transfer classification.', source: architecture.o14.id },
    { text: 'Those fields remain TBC rather than being inferred from the silhouette theme or the nearby court site.', source: dortsStationArchitectureGeneral.id },
  ],
  O15: [
    { text: 'At Sanchong, DORTS places the Airport MRT and O-line exit 2 in a shared ground-floor lobby, making the transfer legible before passengers descend to the platforms.', source: architecture.o15.id },
    { text: 'The long station site also distributes exit 4 and the 捷六 land facilities rather than concentrating every surface element at one point.', source: architecture.o15.id },
    { text: 'The station’s design theme is 親水綠地 (“waterside green space”), expressed through water-ripple and grass imagery.', source: architecture.o15.id },
    { text: 'That theme relates the station to Sanchong’s river-edge and floodplain setting while retaining a practical response to a transfer site.', source: architecture.o15.id },
    { text: 'The joint use of the Airport MRT and the O line means that passenger circulation crosses two systems with different operators and construction histories.', source: architecture.o15.id },
    { text: 'DORTS’s general principles require circulation to be simple and clear and ask architecture and public art to be planned together across the whole passenger route.', source: dortsStationArchitectureGeneral.id },
    { text: 'At Sanchong, that route begins with a shared lobby, passes through the station’s distributed facilities and reaches a themed underground interchange.', source: architecture.o15.id },
    { text: 'The public-art table records 三重站’s 時代的回聲 on the concourse wall, by Cero Architectural Design Company.', source: dortsZhongheXinluPublicArtTable.id },
    { text: 'The table gives ROC-year-98 June, mosaic material, a NT$9.5 million cost and public selection, and describes the work as bringing old and new eras together.', source: dortsZhongheXinluPublicArtTable.id },
    { text: 'The artwork’s historical framing complements the station’s transfer role without changing the documented distinction between the Airport MRT and O-line facilities.', source: dortsZhongheXinluPublicArtTable.id },
    { text: 'The current operator record identifies O15, while the DORTS design page preserves the shared-lobby and long-site planning decisions.', source: dortsXinzhuang.id },
    { text: 'The fetched primary pages do not establish O15’s individual civil contract, final account, architect, rename gazette or paid-area versus street-transfer classification.', source: architecture.o15.id },
    { text: 'Those fields remain TBC rather than being inferred from the Airport MRT connection or the waterside theme.', source: dortsStationArchitectureGeneral.id },
  ],
  O16: [
    { text: 'DORTS describes Xianse Temple as the centre of Sanchong’s industrial district and places its station access within that working urban setting.', source: architecture.o16.id },
    { text: 'Exit 1 and its accessible lift are incorporated into joint development, ventilation is shared with exit 2, and exit 3 and shaft Y are placed to the southeast.', source: architecture.o16.id },
    { text: 'The station theme is 沙洲上的鋼鐵業 (“steel industry on a sandbar”), joining the district’s industrial identity to the landform of the river plain.', source: architecture.o16.id },
    { text: 'DORTS uses lightweight steel entrance structures to give the theme a material expression without turning the entrance into a heavy industrial monument.', source: architecture.o16.id },
    { text: 'The surface arrangement shows how a station in a dense industrial district must share land with development, streets and ventilation requirements.', source: architecture.o16.id },
    { text: 'DORTS’s general architecture principles require the surface elements to remain clear, safe, durable and maintainable while carrying local identity.', source: dortsStationArchitectureGeneral.id },
    { text: 'The station’s public-art record reinforces the industrial reading through a separate concourse-wall work rather than relying on the entrance form alone.', source: dortsZhongheXinluPublicArtTable.id },
    { text: 'The public-art table names Xianse Temple’s 金屬之城-36種凝視 by 王梅珍 and records stainless steel, copper, titanium, enamel and lacquer materials.', source: dortsZhongheXinluPublicArtTable.id },
    { text: 'It gives ROC-year-98 July, a NT$2.5 million cost and invitation competition, and describes the work through factory history, metal industry and technological futures.', source: dortsZhongheXinluPublicArtTable.id },
    { text: 'The art and architecture therefore measure two different layers of the same industrial context: one is a station-building theme and the other a commissioned concourse work.', source: dortsZhongheXinluPublicArtTable.id },
    { text: 'The current operator record identifies O16, while the DORTS page preserves the source-era joint-development and industrial-district planning record.', source: dortsXinzhuang.id },
    { text: 'The fetched primary pages do not establish O16’s individual civil contract, final account, architect, rename gazette or paid-area versus street-transfer classification.', source: architecture.o16.id },
    { text: 'Those fields remain TBC rather than being inferred from the steel theme or the public-art materials.', source: dortsStationArchitectureGeneral.id },
  ],
  O17: [
    { text: 'DORTS places O17 below Zhongzheng Road at the Siyuan Road junction, east of Dahan Bridge, in a site shaped by a major crossing.', source: architecture.o17.id },
    { text: 'The station record describes a three-level underground civil-defence station, with a net body about 170.85 metres long and 17.85 metres wide.', source: architecture.o17.id },
    { text: 'Its excavation depth is given as approximately 24.53 to 25.13 metres, a measure of the constrained underground construction envelope.', source: architecture.o17.id },
    { text: 'The surface works divide the entrance, ventilation and accessible-lift functions across transfer land and the road edges rather than concentrating them in one pavilion.', source: architecture.o17.id },
    { text: 'DORTS specifies glass, steel frames, metal and aluminium panels to keep the above-ground elements light, bright and visually penetrable.', source: architecture.o17.id },
    { text: 'The ventilation structures are broken into proportional pieces so that mechanical requirements remain within a human-scale street composition.', source: architecture.o17.id },
    { text: 'Wave-pattern paving carries the water idea across the ground plane, where it can be maintained without building a literal water feature.', source: architecture.o17.id },
    { text: 'That choice reflects the source page description of the area as a former inland-waterway route, not a claim that the station itself occupies a former canal.', source: architecture.o17.id },
    { text: 'The concourse wall uses coloured, embossed copper sheets to form a water-ripple composition and to connect the local name 竹仔市 with bamboo-slip dots.', source: architecture.o17.id },
    { text: 'The station therefore layers a transport crossing, a former water route and a material reference to writing into one architectural narrative.', source: architecture.o17.id },
    { text: 'The general DORTS architecture guidance treats entrances and ventilation shafts as the visible part of an underground station that must remain safe, durable and legible.', source: dortsStationArchitectureGeneral.id },
    { text: 'That guidance helps explain why O17 uses repeated small surface forms and pavement rather than a single large landmark object.', source: dortsStationArchitectureGeneral.id },
    { text: 'The current DORTS route record places O17 in the Xinzhuang section and records the section opening as part of the staged 2012 commissioning.', source: dortsXinzhuang.id },
    { text: 'The fetched primary records do not identify O17 civil-construction value, final account, architect, rename gazette, complete current art inventory or transfer-zone classification.', source: architecture.o17.id },
    { text: 'Those gaps remain TBC rather than being inferred from the station theme or from the nearby interchange label.', source: dortsStationArchitectureGeneral.id },
    { text: 'DORTS records the site as a former inland-waterway hub known as 竹仔市; the station’s copper wall uses dot motifs to evoke bamboo slips and that older name.', source: architecture.o17.id },
  ],
  O18: [
    { text: 'The DORTS station record places O18 below Zhongzheng Road and describes a two-level island-platform structure about 223.8 metres long and 16.15 metres wide.', source: architecture.o18.id },
    { text: 'A west-side scissor crossover sits in a cut-and-cover tunnel, showing that the station page covers operating geometry as well as surface architecture.', source: architecture.o18.id },
    { text: 'The northern entrance and ventilation shaft are within a joint-development design area, while the southern entrance and lift serve the opposite side of the corridor.', source: architecture.o18.id },
    { text: 'A second ventilation shaft and emergency exit occupy the southeast corner, distributing safety and mechanical functions away from the main entrance.', source: architecture.o18.id },
    { text: 'The western end of the concourse contains traction-power equipment, including transformer, rectifier, switchgear, control and battery rooms.', source: architecture.o18.id },
    { text: 'The textile theme is not only a name: the entrance uses steel tubes and cables as a woven outward-moving net.', source: architecture.o18.id },
    { text: 'Transparent glass on the inside of that curved structure makes the textile reference visible while keeping the entrance open to daylight.', source: architecture.o18.id },
    { text: 'A rough stone background wall supplies a counterpoint by representing the historical layer behind the station future described by DORTS.', source: architecture.o18.id },
    { text: 'A partial skylight lets daylight fall through the entrance structure, giving the design a concrete environmental effect rather than a purely symbolic one.', source: architecture.o18.id },
    { text: 'The corner ventilation shaft is raised to increase louvre area and to mark a prominent urban junction, according to the builder record.', source: architecture.o18.id },
    { text: 'Aluminium panels, aluminium louvres and small-format tiles are used there as a more technical surface treatment than the woven entrance.', source: architecture.o18.id },
    { text: 'Inside, textured enamel panels combine pop-art and textile-art references, while corroded and coloured copper forms a repeated textile image beside the tracks.', source: architecture.o18.id },
    { text: 'The current route record identifies O18 as part of the Xinzhuang section, while the architecture page preserves the earlier planning description.', source: dortsXinzhuang.id },
    { text: 'The fetched primary pages do not establish O18 civil contract value, final account, architect, rename gazette, complete current art inventory or transfer-zone classification.', source: architecture.o18.id },
    { text: 'Those fields remain TBC; the material descriptions are not a substitute for procurement or completion records.', source: dortsStationArchitectureGeneral.id },
    { text: 'DORTS connects Xinzhuang’s exit placement to its urban setting: exit 1 and shaft X are in joint development, exit 2 and its lift serve the south side, and shaft Y and the emergency exit sit southeast.', source: architecture.o18.id },
  ],
  O19: [
    { text: 'DORTS describes O19 as four independent entrance sites outside the footway, explicitly distinguishing the station from a joint-development building.', source: architecture.o19.id },
    { text: 'The station has two underground levels and a main structure about 199.5 metres long and 16.55 metres wide.', source: architecture.o19.id },
    { text: 'Its surface vocabulary takes material cues from the adjacent university campus, including stone-like cladding, white vertical grilles and square volumes.', source: architecture.o19.id },
    { text: 'The builder says the surface objects were kept visually light and transparent so they could be recognisable without becoming a heavy campus wall.', source: architecture.o19.id },
    { text: 'DORTS frames the public-area interior around history, humanities and reflection, with the station architecture and public art intended to work together.', source: architecture.o19.id },
    { text: 'The interior history sequence starts in the seventeenth century and uses stele-style enamel panels with old maps at its beginning and end.', source: architecture.o19.id },
    { text: 'Transport history is represented through repeated vehicle forms cut into mirrored stainless steel, allowing passengers to see themselves in the historical display.', source: architecture.o19.id },
    { text: 'The station also records Xinxiyuan puppet theatre through platform lightboxes showing puppets and stories associated with loyalty and filial duty.', source: architecture.o19.id },
    { text: 'Reinforced-glass silk-screen panels in the entrance passages carry local human and landscape imagery, extending the site narrative into circulation space.', source: architecture.o19.id },
    { text: 'The source page says public participation and participation by Fu Jen students could enrich the design, so that statement describes an intended process rather than a measured attendance figure.', source: architecture.o19.id },
    { text: 'That distinction matters because the architecture record documents design intent and installed treatments, but not a separate procurement file for every interior element.', source: architecture.o19.id },
    { text: 'The station thus serves a university corridor while presenting New Xinzhuang as a sequence of history, transport and performance culture.', source: architecture.o19.id },
    { text: 'The current route record places O19 in the Xinzhuang section and records the staged opening of that section separately from the station design narrative.', source: dortsXinzhuang.id },
    { text: 'The fetched primary pages do not establish O19 civil contract value, final account, architect, rename gazette, complete current art inventory or transfer-zone classification.', source: architecture.o19.id },
    { text: 'Those fields remain TBC rather than being inferred from Fu Jen University or the historical displays.', source: dortsStationArchitectureGeneral.id },
    { text: 'DORTS treats Fu Jen as an independent four-entrance station outside the sidewalk, without joint development, using Fu Jen campus imagery in the above-ground forms.', source: architecture.o19.id },
    { text: 'Its interior chronicles New Xinzhuang from the seventeenth century with stele-style enamel panels and old maps; transport history appears in mirrored steel, and Xinxiyuan puppet theatre in platform lightboxes.', source: architecture.o19.id },
  ],
  O20: [
    { text: 'DORTS places O20 near the Zhongzheng Road and Min-an Road intersection and records two surface entrances, two ventilation shafts and an emergency exit.', source: architecture.o20.id },
    { text: 'One entrance and a ventilation shaft were planned on the site of a retail-store car park, so the design had to leave usable ground around existing urban activity.', source: architecture.o20.id },
    { text: 'The entrances use simple geometric volumes with lightweight and transparent treatment, and their height and bulk were deliberately reduced.', source: architecture.o20.id },
    { text: 'DORTS says the reduction made more land available for planting, turning a transport requirement into a small public-realm decision.', source: architecture.o20.id },
    { text: 'The second entrance also contains the accessible lift and refuse-storage room, while the other ventilation and emergency functions remain grouped separately.', source: architecture.o20.id },
    { text: 'The underground station is a two-level island-platform arrangement with a main body about 150 metres long and 16.55 metres wide.', source: architecture.o20.id },
    { text: 'The public interior is described as bright, lively and artistic, while non-public and equipment areas prioritise practical maintenance.', source: architecture.o20.id },
    { text: 'Lighting, materials and colour change at horizontal and vertical circulation nodes so the passenger route carries the public-art theme through movement.', source: architecture.o20.id },
    { text: 'DORTS presents that interior contrast as a deliberate response to the disorder of the surrounding urban surface, rather than as an attempt to hide the station structure.', source: architecture.o20.id },
    { text: 'The public-art concept is stated as liveliness, hope, progress and vitality; the source records a design theme, not a complete current commission list.', source: architecture.o20.id },
    { text: 'A separate DORTS geotechnical record uses the project-era label O60 for Danfeng, while the current station registry and operator page use O20.', source: dortsXinzhuangGroundEngineering.id },
    { text: 'Those labels measure an engineering-era station number and a current line code, so they are published together rather than reconciled into one number.', source: dortsXinzhuang.id },
    { text: 'The current route record places O20 in the staged Xinzhuang opening to Huilong, while the architecture page is a design-stage description of the station.', source: dortsXinzhuang.id },
    { text: 'The fetched primary pages do not establish O20 civil contract value, final account, architect, rename gazette, complete current art inventory or transfer-zone classification.', source: architecture.o20.id },
    { text: 'Those fields remain TBC rather than being inferred from the parking-lot setting or the public-art concept.', source: dortsStationArchitectureGeneral.id },
    { text: 'DORTS records Danfeng’s entrance and ventilation site as a 特力屋 parking lot; to make room for planting, the design reduces the above-ground forms’ height and volume.', source: architecture.o20.id },
  ],
  O21: [
    { text: 'DORTS identifies O21 as the Xinzhuang Line terminal at the boundary between Xinzhuang Depot and Zhongzheng Road.', source: architecture.o21.id },
    { text: 'Because the road structure needed at least 4.5 metres of cover, parts of the concourse and platform plans had to be staggered rather than aligned in a single rectangle.', source: architecture.o21.id },
    { text: 'The street arrangement places two northern entrances, an emergency exit and ventilation facilities along Zhongzheng Road, with a southern entrance and shaft reached through a crossing route.', source: architecture.o21.id },
    { text: 'The concourse is divided into paid, unpaid and administrative areas, while the west end houses traction-power, mechanical, environmental-control and other service rooms.', source: architecture.o21.id },
    { text: 'DORTS gives the concourse a length of about 260 metres and a width of 19.55 metres, and the island platform about 251.5 metres.', source: architecture.o21.id },
    { text: 'The western non-public area includes a driver dispatch centre with staff facilities, while the eastern end contains signalling, communications, battery and uninterruptible-power equipment.', source: architecture.o21.id },
    { text: 'The station entrances and depot entrances are arranged together along Zhongzheng Road, so their colours and forms were planned as one visible frontage.', source: architecture.o21.id },
    { text: 'The depot palette is described as light pink and grey-white, while the station entrances retain their own visibility, transparency and liveliness.', source: architecture.o21.id },
    { text: 'To reduce surface clutter, DORTS places a cooling tower above a ventilation shaft and reserves street-level land for planting, paving and public art.', source: architecture.o21.id },
    { text: 'Transfer parking is also reserved at the street edge, making the terminal a depot interface and a local access point rather than only a platform below ground.', source: architecture.o21.id },
    { text: 'The Control Yuan investigation records that the depot site was selected at the Losheng Sanatorium after an earlier plan for land east of Fu Jen University could not provide enough land.', source: controlYuanLoshenInvestigation.id },
    { text: 'The same investigation records a 2002 construction start, resident-relocation arrangements and cracking near the work area during excavation.', source: controlYuanLoshenInvestigation.id },
    { text: 'It also records partial stoppage from July 2004 while the authorities dealt with the new hospital, cultural-preservation dispute and site handover.', source: controlYuanLoshenInvestigation.id },
    { text: 'The Control Yuan reported an estimated 37.5-month delay and about NT$7.3 billion in added and claim-related costs; those are investigation estimates, not a final station account.', source: controlYuanLoshenInvestigation.id },
    { text: 'A separate Control Yuan correction found that the depot siting, land handover, slope risk and damage to some sanatorium buildings involved administrative failings and construction consequences.', source: controlYuanLoshenCorrection.id },
    { text: 'The New Taipei gazette records Losheng as a historical building on 7 September 2009 at Zhongzheng Road 794, with the registration covering the historic-building scope stated there.', source: ntpcLoshenGazette.id },
    { text: 'DORTS later recorded the depot entering operation on 4 January 2021 after the preservation-related configuration changes, while the entrance-landscape project was handled separately.', source: dortsXinzhuang.id },
    { text: 'Its FAQ states that the depot was operating even while the entrance project was suspended and that any later work had to be coordinated around depot operations.', source: dortsLoshenFAQ.id },
    { text: 'A geotechnical book labels the fault-protection comparison as source-era O59 for Huilong and O60 for Danfeng; the current station pages use O21 and O20.', source: dortsXinzhuangGroundEngineering.id },
    { text: 'The two code sets measure project-era engineering labels and current operating codes, so both remain visible in the station history.', source: dortsXinzhuang.id },
    { text: 'The fetched primary pages do not establish O21 civil contract value, final account, architect, rename gazette, complete current art inventory or a full transfer classification.', source: architecture.o21.id },
    { text: 'Those fields remain TBC rather than being inferred from the depot dispute or the terminal layout.', source: dortsStationArchitectureGeneral.id },
    { text: 'O21’s road-cover constraint required at least 4.5 metres of overburden, so DORTS staggered parts of the concourse and platform plans; depot and station entrances are coordinated along Zhongzheng Road, with street land reserved for landscape, art and transfer parking.', source: architecture.o21.id },
  ],
  O50: [
    { text: 'DORTS places O50 below Sanhe Road at the Renai Street, Anle Street and Anxing Street junctions in Sanchong.', source: architecture.o50.id },
    { text: 'The station has two visible surface elements: an entrance on the existing Renai Park site and ventilation shaft Y within Sanchong Elementary School land.', source: architecture.o50.id },
    { text: 'The site is triangular, so DORTS specifies a transparent design as a way to keep the entrance legible without closing off the park edge.', source: architecture.o50.id },
    { text: 'The underground station is a two-level island-platform structure about 153 metres long, with a width varying from about 23 to 50 metres.', source: architecture.o50.id },
    { text: 'The underground concourse separates public from non-public space, and paid and unpaid passenger areas are divided by the fare gates.', source: architecture.o50.id },
    { text: 'The platform level uses platform doors, tying the Luzhou branch station design to the operating safety equipment passengers encounter.', source: architecture.o50.id },
    { text: 'The park and school sites make O50 a case where a station surface is split across two public institutions instead of one conventional forecourt.', source: architecture.o50.id },
    { text: 'That split also explains why the architecture page discusses the entrance, ventilation shaft and local landscape together rather than presenting one isolated building.', source: architecture.o50.id },
    { text: 'The design theme is expressed through a flying-garden idea, orange colour and repeated bird, field and ground-pattern references in the station treatment.', source: architecture.o50.id },
    { text: 'DORTS presents those elements as a combined architecture and art-language proposal, not as a published list of every later artwork or maintenance change.', source: architecture.o50.id },
    { text: 'The general architecture guidance requires such surface structures to remain clear, safe, durable and maintainable while still carrying a local identity.', source: dortsStationArchitectureGeneral.id },
    { text: 'The current route record places O50 on the Luzhou branch and records the branch as an underground line with its own station engineering sequence.', source: dortsLuzhou.id },
    { text: 'The fetched primary pages do not establish O50 civil contract value, final account, architect, rename gazette, complete current art inventory or transfer-zone classification.', source: architecture.o50.id },
    { text: 'Those fields remain TBC rather than being inferred from the park, school or flying-garden references.', source: dortsStationArchitectureGeneral.id },
    { text: 'DORTS splits O50’s two surface elements between Ren’ai Park and Sanchong Elementary School land, using a transparent entrance design to work across those public sites.', source: architecture.o50.id },
  ],
  O51: [
    { text: 'The DORTS design page says the station had no commissioned public-art work, while sandbar floors, waterbird forms and thematic seats carry its artistic identity; this is a design-stage statement, not a current inventory.', source: architecture.o51.id },
  ],
  O53: [
    { text: 'The builder says Sanmin Senior High School’s lightweight, simple surface forms respond to the current streetscape and traffic, while Luzhou’s former water-town setting shaped the egret imagery, water-ripple materials and bird-nest ventilation shaft.', source: architecture.o53.id },
  ],
  O54: [
    { text: 'DORTS identifies Luzhou as the branch station with the strongest potential for an outdoor landscape and future joint-development plaza; its skylight brings wind and sunlight underground, and invited competition selected Ray King’s Dance of Feathers.', source: architecture.o54.id },
  ],
}

const publicArtOverrides: Record<string, { text: string; source: Source }> = {
  O54: { text: '舞之羽 — Ray King; coated glass; year: TBC; invited competition; cost: TBC.', source: architecture.o54 },
}

const proseSourceEntries: Record<string, Source[]> = {
  O05: [dortsZhongheTrackContract, dortsStationArchitectureGeneral, dortsZhonghePublicArtIntro],
  O06: [dortsDongmenEngineering, dortsDongmenTechnical, dortsDongmenFitout, dortsZhongheXinluPublicArtTable],
  O07: [architecture.o07, dortsStationArchitectureGeneral, dortsXinluStationDesignTechnical],
  O08: [architecture.o08, dortsSongjiangStationTechnical, dortsSongjiangLandDevelopment, dortsStationArchitectureGeneral],
  O09: [architecture.o09, dortsXinluStationDesignTechnical, dortsZhongheXinluPublicArtTable, dortsStationArchitectureGeneral],
  O10: [architecture.o10, dortsXinluStationDesignTechnical, dortsStationArchitectureGeneral],
  O11: [architecture.o11, dortsXinluStationDesignTechnical, dortsStationArchitectureGeneral],
  O12: [architecture.o12, dortsZhongheXinluPublicArtTable, dortsStationArchitectureGeneral],
  O13: [architecture.o13, dortsZhongheXinluPublicArtTable, dortsStationArchitectureGeneral],
  O14: [architecture.o14, dortsStationArchitectureGeneral],
  O15: [architecture.o15, dortsZhongheXinluPublicArtTable, dortsStationArchitectureGeneral],
  O16: [architecture.o16, dortsZhongheXinluPublicArtTable, dortsStationArchitectureGeneral],
  O17: [architecture.o17, dortsStationArchitectureGeneral],
  O18: [architecture.o18, dortsStationArchitectureGeneral],
  O19: [architecture.o19, dortsStationArchitectureGeneral],
  O20: [architecture.o20, dortsXinzhuangGroundEngineering, dortsStationArchitectureGeneral],
  O21: [architecture.o21, dortsXinzhuangGroundEngineering, dortsLoshenFAQ, controlYuanLoshenCorrection, controlYuanLoshenInvestigation, ntpcLoshenGazette, dortsStationArchitectureGeneral],
  O50: [architecture.o50, dortsStationArchitectureGeneral],
}

function makeResearch(code: string, data: OData): StationResearch {
  const stationSource = trtcStation(code)
  const structureSource = data.structureSource ?? data.route
  const platformSource = data.platformSource ?? data.route
  const designSource = data.designSource ?? data.route
  const publicArtOverride = publicArtOverrides[code]
  const publicArtSource = data.publicArtSource ?? publicArtOverride?.source
  const sources = [stationSource, data.route, structureSource, platformSource, designSource, dortsDepot, ...(publicArtSource ? [publicArtSource] : []), ...(data.proseSources ?? []), ...(proseSourceEntries[code] ?? [])]
    .filter((entry, index, all) => all.findIndex((other) => other.id === entry.id) === index)
  return {
    sources,
    identitySource: stationSource.id,
    mapSource: stationSource.id,
    structureSource: structureSource.id,
    openingSource: data.route.id,
    scheduleSources: [],
    openingDate: data.openingDate,
    interchange: data.interchange ? { ...data.interchange, source: stationSource.id } : undefined,
    platformDetails: data.platformDetails ?? underground,
    platformSource: platformSource.id,
    exitDetails: data.exitDetails,
    exitSource: stationSource.id,
    facilities: data.facilities,
    facilitiesSource: stationSource.id,
    depot: 'DORTS identifies Zhonghe Depot for the Zhonghe section, Xinzhuang Depot for the Xinzhuang section and Luzhou Depot for the Luzhou branch; station-level operating roster allocation: TBC.',
    depotSource: dortsDepot.id,
    publicArt: data.publicArt ?? publicArtOverride?.text ?? tbc,
    publicArtSource: publicArtSource?.id,
    naming: tbc,
    engineeringHistory: data.design ?? tbc,
    engineeringHistorySource: designSource.id,
    landmarks: data.landmarks,
    landmarksSource: stationSource.id,
  }
}

export const ZHONGHE_XINLU_OVERLAY: Record<string, StationOverlay> = Object.fromEntries(
  Object.entries(oData).map(([code, data]) => {
    const research = makeResearch(code, data)
    return [code, { structure: 'underground' as Structure, engineering: data.engineering, exits: data.exits, research, sources: research.sources, prose: [...(data.prose ?? []), ...(stationProse[code] ?? [])] }]
  }),
) as Record<string, StationOverlay>
