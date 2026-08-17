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
  prose?: StationProseSentence[]
}

const oData: Record<string, OData> = {
  O01: { engineering: 'O19', exits: 4, openingDate: '24 December 1998', route: dortsZhonghe, platformDetails: underground, exitDetails: '1: 捷運路52號、近南山路399巷; 2: 捷運路22號; 3: 捷運路16號; 4: 捷運路6號、近興南路1段. Accessible exit: 3.', facilities: 'Exit lift between exits 3 and 4; paid-concourse platform lift near the enquiry point; enquiry point near exits 3 and 4; water dispenser at exit 4; paid-zone toilets and parent/accessible toilet near exits 3 and 4; baby-changing facilities in the parent/accessible and male/female toilets; bicycle access open.', landmarks: tbc, design: 'The builder describes the Zhonghe Line as entirely underground and designed around economical ground facilities and station interiors in the narrow older urban area.', designSource: dortsZhongheArchitecture, publicArt: '青春美樂地 — 賴純純; acrylic, neon tubes and epoxy resin; November 1998; concourse and platform levels.', publicArtSource: dortsPublicArt, prose: [
    { text: 'DORTS places Nanshijiao within the former Taiwan Railway Administration Zhonghe station site, where the constrained depot ground also accommodates the station.', source: dortsZhonghe.id },
    { text: 'The official art brief turns local growth and modernization into a visual language of colour and movement, linking Zhonghe–Nanshijiao to a Taiwanese song about striving and freedom.', source: dortsPublicArt.id },
  ] },
  O02: { engineering: 'O18', exits: 1, openingDate: '24 December 1998', route: dortsZhonghe, platformDetails: underground, exitDetails: 'Single exit: 景平路486號、近景平路、景安路口. Accessible: single exit.', facilities: 'Platform lift at the paid concourse beside the male toilet; exit accessibility lift is published for the station; enquiry points near the exit and at the platform level; water dispenser by the exit; paid-zone toilets and parent/accessible toilet near the exit; baby-changing facilities; bicycle access is open for the O line.', landmarks: tbc, interchange: { label: 'Circular Line; transfer mode: TBC', lineCode: 'Y' } },
  O03: { engineering: 'O17', exits: 1, openingDate: '24 December 1998', route: dortsZhonghe, platformDetails: underground, exitDetails: 'Single exit: 中和路388號. Accessible: single exit.', facilities: 'Exit lift at exit 1; platform lift near the enquiry point, serving the centre of platform 2; enquiry point near the exit; water dispenser at the right of the exit; paid-zone toilets and parent/accessible toilet near the exit; baby-changing facilities; bicycle access open.', landmarks: tbc },
  O04: { engineering: 'O16', exits: 2, openingDate: '24 December 1998', route: dortsZhonghe, platformDetails: underground, exitDetails: '1: 永和路2段168號; 2: 永和路2段233號. Accessible exit: 1.', facilities: 'Exit 1 lift; paid-concourse platform lift behind the enquiry point; enquiry point and water dispenser near exit 1; unpaid toilets and parent/accessible toilet near exit 1; nursing room near exit 2; baby-changing facilities; bicycle access open.', landmarks: tbc },
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
  O08: [
    { text: 'DORTS describes Songjiang Nanjing as a banking-and-finance district whose predominant passengers are commuting office workers, so its design translates the rhythms of busy urban life into the station.', source: architecture.o08.id },
  ],
  O09: [
    { text: 'DORTS distinguishes Xingtian Temple as a consumption-oriented commercial stretch where office workers and shoppers circulate, and ties the station’s design to the Songjiang Road street-making plan’s hoped-for happy, hopeful public space.', source: architecture.o09.id },
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

function makeResearch(code: string, data: OData): StationResearch {
  const stationSource = trtcStation(code)
  const structureSource = data.structureSource ?? data.route
  const platformSource = data.platformSource ?? data.route
  const designSource = data.designSource ?? data.route
  const publicArtOverride = publicArtOverrides[code]
  const publicArtSource = data.publicArtSource ?? publicArtOverride?.source
  const sources = [stationSource, data.route, structureSource, platformSource, designSource, dortsDepot, ...(publicArtSource ? [publicArtSource] : [])]
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
