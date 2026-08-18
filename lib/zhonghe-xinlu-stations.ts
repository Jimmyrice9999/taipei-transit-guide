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
  O12: [
    { text: 'DORTS records Daqiaotou’s unpaid concourse as an evocation of Dihua Street’s market arcades, using layered frames for depth; frosted stair glass carries part of Daqiao Elementary School’s song.', source: architecture.o12.id },
    { text: 'Its eight platform-wall paintings separate travel directions: water toward Xinzhuang and Luzhou, and Taipei city views toward the east.', source: architecture.o12.id },
  ],
  O13: [
    { text: 'DORTS puts Taipei Bridge’s main entrance, ventilation shaft, two emergency exits and concourse inside the joint-development building south of the station, while the stacked platform levels remain below the road.', source: architecture.o13.id },
  ],
  O14: [
    { text: 'DORTS says Cailiao’s exit 1 occupies the east side of the simple-court plaza, exit 2 shares a south-side joint-development site, and ventilation and emergency facilities were distributed to reduce bulk.', source: architecture.o14.id },
  ],
  O15: [
    { text: 'At Sanchong, DORTS places the Airport MRT and O-line exit 2 in a shared ground-floor lobby; exit 4 uses north-side 捷六 land to distribute facilities along the long site.', source: architecture.o15.id },
  ],
  O16: [
    { text: 'The station sits at the center of Sanchong’s industrial district; DORTS places exit 1 and its accessible lift in joint development, shares ventilation with exit 2, and puts exit 3 and shaft Y on the southeast.', source: architecture.o16.id },
  ],
  O17: [
    { text: 'DORTS records the site as a former inland-waterway hub known as 竹仔市; the station’s copper wall uses dot motifs to evoke bamboo slips and that older name.', source: architecture.o17.id },
  ],
  O18: [
    { text: 'DORTS connects Xinzhuang’s exit placement to its urban setting: exit 1 and shaft X are in joint development, exit 2 and its lift serve the south side, and shaft Y and the emergency exit sit southeast.', source: architecture.o18.id },
  ],
  O19: [
    { text: 'DORTS treats Fu Jen as an independent four-entrance station outside the sidewalk, without joint development, using Fu Jen campus imagery in the above-ground forms.', source: architecture.o19.id },
    { text: 'Its interior chronicles New Xinzhuang from the seventeenth century with stele-style enamel panels and old maps; transport history appears in mirrored steel, and Xinxiyuan puppet theatre in platform lightboxes.', source: architecture.o19.id },
  ],
  O20: [
    { text: 'DORTS records Danfeng’s entrance and ventilation site as a 特力屋 parking lot; to make room for planting, the design reduces the above-ground forms’ height and volume.', source: architecture.o20.id },
  ],
  O21: [
    { text: 'O21’s road-cover constraint required at least 4.5 metres of overburden, so DORTS staggered parts of the concourse and platform plans; depot and station entrances are coordinated along Zhongzheng Road, with street land reserved for landscape, art and transfer parking.', source: architecture.o21.id },
  ],
  O50: [
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
