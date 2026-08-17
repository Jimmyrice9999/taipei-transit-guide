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

const dortsLine = source(
  'dorts-bannan-line',
  'Bannan Line route and stations',
  '板南線路線說明',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=5E61169F8C735065',
  'The builder’s full line page publishes the underground route, opening phases, the Nangang Depot, station engineering numbers and route-level construction history.',
)
const dortsNangang = source(
  'dorts-bannan-nangang',
  'Nangang section route and stations',
  '板南線路線說明：南港段',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=5E61169F8C735065&s=8F1493D5192F9C06',
  'The builder’s full Nangang section page publishes the section route, station table, underground structure and engineering history.',
)
const dortsBanqiao = source(
  'dorts-bannan-banqiao',
  'Banqiao section route and stations',
  '板南線路線說明：板橋段',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=5E61169F8C735065&s=F007031A0E7C5D14',
  'The builder’s full Banqiao section page publishes the underground route, opening phases, station engineering numbers and exit counts.',
)
const dortsTucheng = source(
  'dorts-bannan-tucheng',
  'Tucheng section route and stations',
  '板南線路線說明：土城段',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=5E61169F8C735065&s=12C5B1574D868732',
  'The builder’s full Tucheng section page publishes the underground route, Tucheng Depot, opening date, station engineering numbers and exit counts.',
)
const dortsNangangEast = source(
  'dorts-bannan-nangang-east',
  'Nangang East section route and stations',
  '板南線路線說明：南港東延段',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=5E61169F8C735065&s=D392F4A16D3932DF',
  'The builder’s full Nangang East page publishes the underground co-structure, opening dates, station engineering numbers and exit counts for BL22 and BL23.',
)
const dortsDingpu = source(
  'dorts-bannan-dingpu',
  'Dingpu section route and station',
  '板南線路線說明：頂埔段',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=5E61169F8C735065&s=02B240F1DBB7806E',
  'The builder’s full Dingpu page publishes the underground route, BL01 engineering number, opening date and exit count.',
)
const dortsArchitecture = source(
  'dorts-bannan-architecture',
  'Bannan Line station architecture',
  '車站建築設計：板南線',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=980C85299DA2890A',
  'The builder’s full architecture page describes the environmental and functional design approach for the early underground Bannan sections.',
)
const dortsStationArchitecture = source(
  'dorts-bannan-station-architecture',
  'Bannan Line station-specific architecture',
  '車站建築設計：板南線各車站',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=980C85299DA2890A&s=30FCACCAB334BFA2',
  'The builder’s full station-architecture page publishes the BL01, BL22 and BL23 design themes, construction context and named local references.',
)

const art = {
  bl01: source('dorts-bl01-public-art', 'BL01 public art', '飛旋．夢的起點', dortsPublisher, 'https://www.dorts.gov.taipei/cp.aspx?n=1E9E49BD7665CF2D&s=3D0A3BBDE3F705F9', 'The builder’s full public-art record publishes the title, artists, materials, completion month, and placement.'),
  bl02: source('dorts-bl02-public-art', 'BL02 public art', '時間．碎片', dortsPublisher, 'https://www.dorts.gov.taipei/cp.aspx?n=1E9E49BD7665CF2D&s=B39B922B400AE0BE', 'The builder’s full public-art record publishes the title, artist, materials, completion month, and placement.'),
  bl03: source('dorts-bl03-public-art', 'BL03 public art', '金城傳奇', dortsPublisher, 'https://www.dorts.gov.taipei/cp.aspx?n=1E9E49BD7665CF2D&s=774907BC6D8E2127', 'The builder’s full public-art record publishes the title, artist or commissioning group, material, completion month, and placement.'),
  bl04: source('dorts-bl04-public-art', 'BL04 public art', '牧場', dortsPublisher, 'https://www.dorts.gov.taipei/cp.aspx?n=1E9E49BD7665CF2D&s=0061E025C610E544', 'The builder’s full public-art record publishes the title, artist, materials, completion month, and placement.'),
  bl05: source('dorts-bl05-public-art', 'BL05 public art', '河戀', dortsPublisher, 'https://www.dorts.gov.taipei/cp.aspx?n=1E9E49BD7665CF2D&s=C11B42572557E91B', 'The builder’s full public-art record publishes the title, artist or studio, materials, completion month, and placement.'),
  bl06: source('dorts-bl06-public-art', 'BL06 public art', '空間之詩', dortsPublisher, 'https://www.dorts.gov.taipei/cp.aspx?n=1E9E49BD7665CF2D&s=0C7DA2A84E03E271', 'The builder’s full public-art record publishes the title, artist, materials, completion month, and placement.'),
  bl07: source('dorts-bl07-public-art', 'BL07 public art', '進化的軌跡', dortsPublisher, 'https://www.dorts.gov.taipei/cp.aspx?n=1E9E49BD7665CF2D&s=1EB2F342A04D75ED', 'The builder’s full public-art record publishes the title, artist, materials, completion month, and placement.'),
  bl18: source('dorts-bl18-public-art', 'BL18 public art', '成長', dortsPublisher, 'https://www.dorts.gov.taipei/cp.aspx?n=1E9E49BD7665CF2D&s=8EB8329E28899847', 'The builder’s full public-art record publishes the title, artist, five-part form, materials, completion month, and placements.'),
  bl21: source('dorts-bl21-public-art', 'BL21 public art', '旋', dortsPublisher, 'https://www.dorts.gov.taipei/cp.aspx?n=1E9E49BD7665CF2D&s=21E7260FD75E88D4', 'The builder’s full public-art record publishes the title, artist or group, materials, completion month, and placement.'),
  bl22: source('dorts-bl22-public-art', 'BL22 public art', '捷運．碼頭', dortsPublisher, 'https://www.dorts.gov.taipei/cp.aspx?n=1E9E49BD7665CF2D&s=303C6A9B61A14F7F', 'The builder’s full public-art record publishes the title, artist, materials, completion month, and placement.'),
  bl23: source('dorts-bl23-public-art', 'BL23 public art', '我們的私房公共藝術', dortsPublisher, 'https://www.dorts.gov.taipei/cp.aspx?n=1E9E49BD7665CF2D&s=2809EC1898BBBD56', 'The builder’s full public-art record publishes the first work’s title, artist, materials, completion month, and placement; a second work is named without complete metadata in the fetched page text.'),
}

const trtcIds: Record<string, string> = {
  BL01: '076', BL02: '077', BL03: '078', BL04: '079', BL05: '080', BL06: '081',
  BL07: '082', BL08: '083', BL09: '084', BL10: '085', BL11: '086', BL12: '051',
  BL13: '088', BL14: '089', BL15: '010', BL16: '091', BL17: '092', BL18: '093',
  BL19: '094', BL20: '095', BL21: '096', BL22: '097', BL23: '031',
}
const trtcNames: Record<string, { en: string; zh: string }> = {
  BL01: { en: 'Dingpu', zh: '頂埔' }, BL02: { en: 'Yongning', zh: '永寧' },
  BL03: { en: 'Tucheng', zh: '土城' }, BL04: { en: 'Haishan', zh: '海山' },
  BL05: { en: 'Far Eastern Hospital', zh: '亞東醫院' }, BL06: { en: 'Fuzhong', zh: '府中' },
  BL07: { en: 'Banqiao', zh: '板橋' }, BL08: { en: 'Xinpu', zh: '新埔' },
  BL09: { en: 'Jiangzicui', zh: '江子翠' }, BL10: { en: 'Longshan Temple', zh: '龍山寺' },
  BL11: { en: 'Ximen', zh: '西門' }, BL12: { en: 'Taipei Main Station', zh: '台北車站' },
  BL13: { en: 'Shandao Temple', zh: '善導寺' }, BL14: { en: 'Zhongxiao Xinsheng', zh: '忠孝新生' },
  BL15: { en: 'Zhongxiao Fuxing', zh: '忠孝復興' }, BL16: { en: 'Zhongxiao Dunhua', zh: '忠孝敦化' },
  BL17: { en: 'Sun Yat-Sen Memorial Hall', zh: '國父紀念館' }, BL18: { en: 'Taipei City Hall', zh: '市政府' },
  BL19: { en: 'Yongchun', zh: '永春' }, BL20: { en: 'Houshanpi', zh: '後山埤' },
  BL21: { en: 'Kunyang', zh: '昆陽' }, BL22: { en: 'Nangang', zh: '南港' },
  BL23: { en: 'Nangang Exhibition Center', zh: '南港展覽館' },
}
function trtcStation(code: string): Source {
  const station = trtcNames[code]
  return source(
    'trtc-' + code.toLowerCase() + '-station',
    code + ' ' + station.en + ' station information',
    '車站資訊查詢：' + code + ' ' + station.zh,
    trtcPublisher,
    'https://web.metro.taipei/pages2026/WebStation/' + trtcIds[code] + '/1',
    'The operator’s full station page publishes the current exit count and destinations, accessibility lifts, toilets, nursing or parent facilities, enquiry points, water dispensers and bicycle access.',
  )
}

const tbc = 'TBC'
const underground = 'Underground station; platform form, number of platforms and track count: TBC.'
type BLData = {
  engineering: string
  exits: number
  openingDate: string
  route: Source
  exitDetails: string
  facilities: string
  landmarks: string
  depot: string
  interchange?: { label: string; lineCode?: string }
  interchangeSource?: Source
  design?: string
  designSource?: Source
  publicArt?: string
  publicArtSource?: Source
}

const blData: Record<string, BLData> = {
  BL01: { engineering: 'BL36', exits: 4, openingDate: '6 July 2015', route: dortsDingpu, depot: 'Tucheng Depot is the published depot for the Bannan, Banqiao and Tucheng stretch; station-level roster allocation: TBC.', exitDetails: '1: 中央路4段約100號旁; 2: 中央路4段近鴻海精密工業; 3: 中央路4段51-6號近頂埔之星科技廣場; 4: 中央路4段62號旁. Accessible exits: 1, 3 and 4.', facilities: 'Exit lifts at exits 1, 3 and 4; paid-platform lift at the paid enquiry centre; enquiry points near exits 3 and 4; water dispenser near the enquiry point; unpaid toilets near exit 3 and paid-zone toilets and parent/accessible toilet in the hall; nursing room in the paid B3 hall; bicycle access open.', landmarks: '頂埔之星科技廣場', design: 'The station theme is 節點密碼–C的方程式. DORTS describes a light passage and light platform, a flowing ceiling, and light-wave, halo and ray motifs.', designSource: dortsStationArchitecture, publicArt: '飛旋．夢的起點 — 陳宏誠、林育正（大瑪爾藝術設計有限公司）; stainless steel, stone, fluorocarbon paint and aluminium; June 2015; platform and accessible-lift areas.', publicArtSource: art.bl01 },
  BL02: { engineering: 'BL37', exits: 4, openingDate: '31 May 2006', route: dortsTucheng, depot: 'Tucheng Depot; station-level roster allocation: TBC.', exitDetails: '1: 中央路3段98巷口; 2: 中央路3段承天路口; 3: 中央路3段近89巷; 4: 中央路3段60號. Accessible exits: 1 and 2.', facilities: 'Exit lifts at exits 1 and 2; paid-platform lift in the west side near the enquiry point; enquiry point near exit 2; water dispenser near the enquiry point; unpaid toilets near exits 2 and 3; parent/accessible toilet near exit 2; no nursing room is listed; bicycle access open.', landmarks: tbc, publicArt: '時間．碎片 — 許宗傑; mechanical and motor elements, glass-fibre resin, enamel and glass, with 86,400 LEDs; March 2006; concourse corners by exits 1 and 4.', publicArtSource: art.bl02 },
  BL03: { engineering: 'BL38', exits: 3, openingDate: '31 May 2006', route: dortsTucheng, depot: 'Tucheng Depot; station-level roster allocation: TBC.', exitDetails: '1: 金城路1段近金城公園; 2: 金城路1段和平路口近土城區戶政事務所; 3: 金城路1段. Accessible exit: 1.', facilities: 'Exit-1 lift; paid-platform lift on the east side; enquiry point and water dispenser near exit 1; unpaid toilets and parent/accessible toilet near exit 3; no nursing room is listed; bicycle access open.', landmarks: '金城公園; 土城區戶政事務所', publicArt: '金城傳奇 — 涂維政（帝門藝術教育基金會）; 夸石; February 2006; unpaid concourse and entrance walls.', publicArtSource: art.bl03 },
  BL04: { engineering: 'BL39', exits: 3, openingDate: '31 May 2006', route: dortsTucheng, depot: 'Tucheng Depot; station-level roster allocation: TBC.', exitDetails: '1: 海山路近樂利國小; 2: 海山路新北高工運動場旁; 3: 裕民路92巷22弄3號. Accessible exit: 2.', facilities: 'Exit-2 lift; paid-platform lift on the west side or centre; enquiry point and water dispenser near exit 2; paid toilets and parent/accessible toilet by the hall lift; no nursing room is listed; bicycle access open.', landmarks: '樂利國小; 新北高工運動場', publicArt: '牧場 — 黃清輝; white marble, black granite, mosaic and ground lights; May 2006; entrance forecourt.', publicArtSource: art.bl04 },
  BL05: { engineering: 'BL40', exits: 3, openingDate: '31 May 2006', route: dortsTucheng, depot: 'Tucheng Depot; station-level roster allocation: TBC.', exitDetails: '1: 南雅南路2段120號; 2: 南雅南路2段122號; 3: 南雅南路2段近高爾富路口. Accessible exit: 3.', facilities: 'Exit-3 lift; paid-platform lift on the west side; enquiry points near exits 1 and 2; water dispenser at exit 3; paid toilets and parent/accessible toilet by the hall lift; no nursing room is listed; bicycle access open.', landmarks: tbc, publicArt: '河戀 — 楊春森工作室; glass and LED; October 2005; concourse wall.', publicArtSource: art.bl05 },
  BL06: { engineering: 'BL1', exits: 3, openingDate: '31 August 2000', route: dortsBanqiao, depot: 'Tucheng Depot is the published depot for the Bannan, Banqiao and Tucheng stretch; station-level roster allocation: TBC.', exitDetails: '1: 縣民大道1段193號近板橋農會; 2: 縣民大道府中路口; 3: 府中路30號近板橋區公所. Accessible exit: 1.', facilities: 'Exit-1 lift; paid-platform lift on the west side near the enquiry point; enquiry point and water dispenser near exit 1; paid toilets and parent/accessible toilet near the enquiry point; no nursing room is listed; bicycle access open.', landmarks: '板橋農會; 板橋區公所', publicArt: '空間之詩 — 陳逸堅; LED message board, software, iron and cables; October 2005; the vertical-circulation void.', publicArtSource: art.bl06 },
  BL07: { engineering: 'BL2', exits: 3, openingDate: '31 May 2006', route: dortsBanqiao, depot: 'Tucheng Depot is the published depot for the Bannan, Banqiao and Tucheng stretch; station-level roster allocation: TBC.', exitDetails: '1: 站前路、新府路口、新板萬坪都會公園; 2: 縣民大道、新府路口、板橋公車站; 3: 站前路5號、板橋火車站對面. Accessible exit: 3.', facilities: 'Exit-3 lift; paid-platform lift on the north side; enquiry point and water dispenser near exit 3; unpaid toilets and parent/accessible toilet near exit 3; nursing room in the unpaid hall; bicycle access open.', landmarks: '新板萬坪都會公園; 板橋公車站; 板橋火車站', interchange: { label: 'Tamsui–Xinyi Line; transfer mode: TBC', lineCode: 'R' }, publicArt: '進化的軌跡 — 陶亞倫; stainless-steel painted rings and motor; October 2005; four main platform columns.', publicArtSource: art.bl07 },
  BL08: { engineering: 'BL3', exits: 5, openingDate: '31 August 2000', route: dortsBanqiao, depot: 'Tucheng Depot is the published depot for the Bannan, Banqiao and Tucheng stretch; station-level roster allocation: TBC.', exitDetails: '1: 民生路3段15號、新埔市場; 2: 民生路2段251號; 3: 民生路2段234巷; 4: 文化路1段360號; 5: 民生路3段6號. Accessible exits: 4 and 5.', facilities: 'Exit lifts at exits 4 and 5; paid-platform lift on the east side near the enquiry point; enquiry point and water dispenser near exit 4; unpaid toilets and parent/accessible toilet near exits 4 and 5; nursing room in the unpaid hall; bicycle access open.', landmarks: '新埔市場', interchange: { label: 'Tamsui–Xinyi Line; transfer mode: TBC', lineCode: 'R' } },
  BL09: { engineering: 'BL4', exits: 6, openingDate: '31 August 2000', route: dortsBanqiao, depot: 'Tucheng Depot is the published depot for the Bannan, Banqiao and Tucheng stretch; station-level roster allocation: TBC.', exitDetails: '1: 雙十路3段10巷近板橋農村公園; 2: 文化路2段313號; 3: 文化路2段296號; 4: 雙十路2段178號近松柏街; 5: 文化路2段384號近仁化街; 6: 文化路2段383巷近江翠國小. Accessible exit: 3.', facilities: 'Exit-3 lift; paid-platform lift on the west side near the enquiry point; enquiry points near exits 1 and 2; water dispenser near the enquiry point; unpaid toilets and parent/accessible toilet near exits 1–3; no nursing room is listed; bicycle access open.', landmarks: '板橋農村公園; 江翠國小' },
  BL10: { engineering: 'BL5', exits: 3, openingDate: '24 December 1999', route: dortsBanqiao, depot: 'Tucheng Depot is the published depot for the Bannan, Banqiao and Tucheng stretch; station-level roster allocation: TBC.', exitDetails: '1: 和平西路3段、西園路1段; 2: 和平西路3段近萬華區公所; 3: 和平西路3段81巷近康定路. Accessible exit: 1.', facilities: 'Exit-1 lift; paid-platform lift in the centre; enquiry point near exit 2; paid toilets and parent/accessible toilet by the hall lift; no nursing room is listed; bicycle access open.', landmarks: '萬華區公所' },
  BL11: { engineering: 'BL6', exits: 6, openingDate: '24 December 1999', route: dortsNangang, depot: 'Nangang Depot is the published depot for the Nangang section; station-level roster allocation: TBC.', exitDetails: '1: 漢中街、成都路近西門紅樓; 2: 中華路1段59號近台北市憲兵隊; 3: 中華路1段、寶慶路; 4: 中華路1段、衡陽路; 5: 中華路1段、秀山街; 6: 漢中街、成都路. Accessible exits: 4 and 6.', facilities: 'Exit lifts at exits 4 and 6; paid-platform lift in the centre; enquiry points near exits 1 and 6; paid toilets and parent/accessible toilet by the hall; nursing room in the unpaid hall near exit 4; bicycle access open.', landmarks: '西門紅樓; 臺北市憲兵隊', interchange: { label: 'Songshan–Xindian Line; transfer mode: TBC', lineCode: 'G' } },
  BL12: { engineering: 'BL7', exits: 8, openingDate: '24 December 1999', route: dortsNangang, depot: 'Nangang Depot is the published depot for the Nangang section; station-level roster allocation: TBC.', exitDetails: 'M1: 台鐵台北車站北一門; M2: 市民大道1段209號近國父史蹟紀念館; M3: 忠孝西路1段45; M4: 忠孝西路1段38對面; M5: 忠孝西路1段66對面; M6: 忠孝西路1段38; M7: 忠孝西路1段33; M8: 公園路13號. Accessible exits: M2 and M4.', facilities: 'Multiple exit lifts; paid-platform lift in the central area; enquiry points around M1–M8; water dispenser near M1 and M2; unpaid toilets and parent/accessible toilet near M1 and M2, with paid-zone facilities in the Bannan and Tamsui–Xinyi areas; nursing room in the paid B2 hall; bicycle access not open.', landmarks: '台鐵台北車站; 國父史蹟紀念館', interchange: { label: 'Tamsui–Xinyi Line and Airport MRT; transfer mode: TBC', lineCode: 'R' }, interchangeSource: dortsLine },
  BL13: { engineering: 'BL8', exits: 6, openingDate: '24 December 1999', route: dortsNangang, depot: 'Nangang Depot is the published depot for the Nangang section; station-level roster allocation: TBC.', exitDetails: '1: 忠孝東路1段、林森北路近警政署; 2: 忠孝東路1段、林森南路; 3: 忠孝東路1段70巷; 4: 忠孝東路1段84巷近青島國宅; 5: 紹興南街近華山市場; 6: 紹興北街近善導寺. Accessible exit: 3.', facilities: 'Exit-3 lift; paid-platform lift on the west side; enquiry points near exits 1–3; unpaid toilets and parent/accessible toilet near exits 1–3; no nursing room is listed; bicycle access open.', landmarks: '警政署; 青島國宅; 華山市場; 善導寺' },
  BL14: { engineering: '4BL9', exits: 7, openingDate: '24 December 1999', route: dortsNangang, depot: 'Nangang Depot is the published depot for the Nangang section; station-level roster allocation: TBC.', exitDetails: '1: 忠孝東路2段101近忠孝國小; 2: 忠孝東路2段134巷近忠孝公園; 3: 忠孝東路3段10巷; 4: 忠孝東路3段、新生南路近台北科技大學; 5: 新生南路56巷近濟南路; 6: 新生南路、濟南路; 7: 新生南路、忠孝東路3段. Accessible exits: 2 and 3.', facilities: 'Exit lifts at exits 2 and 3; paid-platform lifts for the Bannan and Circular Line paid areas; enquiry points near exits 1–2 and 5–7; unpaid toilets and parent/accessible toilets near exits 1–2 and in the paid centre; the Circular Line nursing room is in paid B1; bicycle access not open.', landmarks: '忠孝國小; 忠孝公園; 台北科技大學', interchange: { label: 'Circular Line; transfer mode: TBC', lineCode: 'Y' } },
  BL15: { engineering: 'BL10', exits: 5, openingDate: '24 December 1999', route: dortsNangang, depot: 'Nangang Depot is the published depot for the Nangang section; station-level roster allocation: TBC.', exitDetails: '1: 忠孝東路3段291、安東街; 2: 忠孝東路3段、復興南路近 SOGO; 3: 忠孝東路4段52號、SOGO對面; 4: 忠孝東路4段47號近 SOGO; 5: 復興南路1段153號. Accessible exit: 2.', facilities: 'Exit-2 lift; paid-platform lift on the west side near the enquiry point and Wenhu south side; enquiry points near exits 1 and 2; paid toilets and parent/accessible toilet near exit 2; nursing room in the Bannan unpaid B3 hall near exit 3; bicycle access not open.', landmarks: 'SOGO', interchange: { label: 'Wenhu Line; transfer mode: TBC', lineCode: 'BR' } },
  BL16: { engineering: 'BL11', exits: 8, openingDate: '24 December 1999', route: dortsNangang, depot: 'Nangang Depot is the published depot for the Nangang section; station-level roster allocation: TBC.', exitDetails: '1: 忠孝東路4段175號; 2: 忠孝東路4段203號; 3: 忠孝東路4段182號; 4: 忠孝東路4段166號; 5: 忠孝東路4段148號; 6: 敦化南路1段219號; 7: 忠孝東路4段151號; 8: 忠孝東路4段209號. Accessible exit: 2.', facilities: 'Exit-2 lift; paid-platform lift on the east side; enquiry points near exits 1–4; unpaid toilets and parent/accessible toilet near exits 1–4; nursing room in the unpaid hall; bicycle access open.', landmarks: tbc },
  BL17: { engineering: 'BL12', exits: 5, openingDate: '24 December 1999', route: dortsNangang, depot: 'Nangang Depot is the published depot for the Nangang section; station-level roster allocation: TBC.', exitDetails: '1: 忠孝東路4段327巷近中華電信; 2: 忠孝東路4段304巷近觀光局; 3: 忠孝東路4段400號、光復南路近光復國小; 4: 忠孝東路4段400號、光復國小側; 5: 忠孝東路4段400號、光復南路、台北大巨蛋對面. Accessible exits: 4 and 5.', facilities: 'Exit lifts between exits 3 and 4 and at exit 5; paid-platform lift on the east side; enquiry points near exits 3–5; unpaid toilets and parent/accessible toilet near exits 3–5; no nursing room is listed; bicycle access open.', landmarks: '中華電信; 觀光局; 光復國小; 台北大巨蛋' },
  BL18: { engineering: 'BL13', exits: 4, openingDate: '24 December 1999', route: dortsNangang, depot: 'Nangang Depot is the published depot for the Nangang section; station-level roster allocation: TBC.', exitDetails: '1: 忠孝東路5段15巷近市政府轉運站; 2: 忠孝東路5段2號近市政府轉運站; 3: 忠孝東路、松仁路近台北市消防局; 4: 忠孝東路5段71巷. Accessible exit: 2.', facilities: 'Exit-2 lift; paid-platform lift on the west side; enquiry point near exit 1; unpaid toilets and parent/accessible toilet near exits 1 and 2; nursing room in the unpaid hall near exit 2; bicycle access open.', landmarks: '市政府轉運站; 台北市消防局', publicArt: '成長 — Steve Woodward; five-part work using marble, granite, bronze and aluminium in varying parts; November 1999; fire-station entrance plaza and platform.', publicArtSource: art.bl18 },
  BL19: { engineering: 'BL14', exits: 5, openingDate: '30 December 2000', route: dortsNangang, depot: 'Nangang Depot is the published depot for the Nangang section; station-level roster allocation: TBC.', exitDetails: '1: 忠孝東路5段423巷; 2: 忠孝東路5段420號; 3: 忠孝東路5段446號; 4: 忠孝東路5段464號、虎林街近永春郵局; 5: 忠孝東路5段455號、虎林街近永春市場. Accessible exit: 5.', facilities: 'Exit-5 lift; paid-platform lift on the east side; enquiry points near exits 3–5; unpaid toilets and parent/accessible toilet near exits 3–5; no nursing room is listed; bicycle access open.', landmarks: '永春郵局; 永春市場' },
  BL20: { engineering: 'BL15', exits: 4, openingDate: '30 December 2000', route: dortsNangang, depot: 'Nangang Depot is the published depot for the Nangang section; station-level roster allocation: TBC.', exitDetails: '1: 忠孝東路5段743巷、中坡北路近五分埔; 2: 忠孝東路5段790巷、中坡南路; 3: 忠孝東路6段6號、玉成街近聯合醫院忠孝院區; 4: 玉成街98巷、永吉路605巷近合作金庫. Accessible exit: 3.', facilities: 'Exit-3 lift; paid-platform lift on the east side; enquiry points near exits 3 and 4; unpaid toilets and parent/accessible toilet near exits 3 and 4; no nursing room is listed; bicycle access open.', landmarks: '五分埔; 聯合醫院忠孝院區; 合作金庫' },
  BL21: { engineering: 'BL16', exits: 4, openingDate: '30 December 2000', route: dortsNangang, depot: 'Nangang Depot is the published depot for the Nangang section; station-level roster allocation: TBC.', exitDetails: '1: 忠孝東路6段403巷; 2: 忠孝東路6段403巷1弄; 3: 忠孝東路6段、近昆陽街; 4: 忠孝東路6段449號、昆陽街. Accessible exits: 1 and 4.', facilities: 'The operator lists a central platform lift; enquiry point near exit 4; paid toilets and parent/accessible toilet by the platform lift; no nursing room is listed; bicycle access open.', landmarks: '昆陽街', publicArt: '旋 — 晶矽族群; painted stainless steel, glass, infrared sensor, motor and sounder; December 2000; concourse glass wall.', publicArtSource: art.bl21 },
  BL22: { engineering: 'BL17', exits: 2, openingDate: '25 December 2008', route: dortsNangangEast, depot: 'Nangang Depot is the published depot for the Nangang stretch; station-level roster allocation: TBC.', exitDetails: '1: 忠孝東路7段380號、台鐵南港站對面; 2: 近極限運動中心. Accessible exit: 2.', facilities: 'Exit-2 lift; paid-platform lift on the east side near the enquiry point; enquiry point near the 2A link; unpaid toilet near exit 1 and paid toilet and parent/accessible toilet by the platform lift; nursing room in the paid hall; bicycle access open.', landmarks: '台鐵南港站; 極限運動中心', design: 'The station theme is 懷舊與科技. DORTS describes co-development with Taiwan Railways, a light-green theme and local references including 新庄仔陂、後山陂、舜若多橋、南港茶園 and 胡適紀念館.', designSource: dortsStationArchitecture, publicArt: '捷運．碼頭 — 陶亞倫; iron, white paint, laminated glass, lights, dimmer, timer and colour output; December 2008; platform.', publicArtSource: art.bl22 },
  BL23: { engineering: 'BL18', exits: 7, openingDate: '27 February 2011', route: dortsNangangEast, depot: 'Nangang Depot is the published depot for the Nangang stretch; station-level roster allocation: TBC.', exitDetails: '1: 經貿路、南港展覽館; 2: 南港路1段32號、經貿路; 2A: 同處; 3: 南港路、經貿1路; 4: 經貿1路、南港展覽館; 5: 南港路、研究院路; 6: 南港路、經貿路; 7: 福康街近成德國中. Accessible exits: 1–5 and 2A.', facilities: 'Multiple exit and transfer lifts; enquiry points near exits 2 and 5; water dispensers near exits 2 and 5; toilets, parent/accessible toilet and nursing facilities in the halls; bicycle access open.', landmarks: '南港展覽館; 研究院路; 成德國中', design: 'The station theme is 數位空間、e化車站. DORTS describes a 黎明藍 palette, metal and low-E glass, shell-like entrances, and barcode, circuit-board and binary motifs.', designSource: dortsStationArchitecture, publicArt: '我們的私房公共藝術 — 黃心健（故事巢股份有限公司）; stainless steel, clear glass, acid-free paper, LED, computers, projection fabric, one-way mirror and LCD; September 2010; concourse. The same page names a second work, 快或慢, but its complete metadata is TBC.', publicArtSource: art.bl23 },
}

const stationProse: Record<string, StationProseSentence[]> = {
  BL01: [
    { text: 'DORTS says the work’s vertical motion evokes water piercing a mine and rising earth energy; its hexagonal structure recasts coal-mining imagery and nano-carbon-tube grids as a new transport-and-cultural-creation beginning.', source: art.bl01.id },
  ],
  BL02: [
    { text: 'The work draws on archaeological reports from Tudigong Mountain and Zhanlong Mountain, turning replica pottery fragments into a mechanical image of local cultural origins and time repeatedly dissolving and recomposing.', source: art.bl02.id },
  ],
  BL03: [
    { text: 'DORTS describes Tucheng’s art as “techno-antiquities”: resident-created symbols, prehistoric-to-modern histories and transit technology are collaged into a new “Jincheng civilisation”.', source: art.bl03.id },
  ],
  BL04: [
    { text: 'The artwork’s water imagery records an older waterway, while the mosaic design came from the top three entries in Le-li Elementary School’s in-school drawing competition.', source: art.bl04.id },
  ],
  BL05: [
    { text: 'DORTS treats the Banqiao river as a witness to local history and residents’ memories; glass rods and LEDs turn that “river of space” into changing time-colours.', source: art.bl05.id },
  ],
  BL06: [
    { text: 'The work turns the station into a participatory public space: its LED poetry can receive real-time submissions from citizens, passengers and poets by SMS.', source: art.bl06.id },
  ],
  BL07: [
    { text: 'DORTS presents the work’s linked coloured rings as both Greater Taipei’s completed transport connections and a way to give ordinary platform columns new meaning through interaction.', source: art.bl07.id },
  ],
}

function makeResearch(code: string, data: BLData): StationResearch {
  const stationSource = trtcStation(code)
  const designSource = data.designSource
  const publicArtSource = data.publicArtSource
  const sources = [stationSource, data.route, dortsArchitecture, ...(designSource ? [designSource] : []), ...(publicArtSource ? [publicArtSource] : [])]
    .filter((entry, index, all) => all.findIndex((other) => other.id === entry.id) === index)
  return {
    sources,
    identitySource: stationSource.id,
    mapSource: stationSource.id,
    structureSource: data.route.id,
    openingSource: data.route.id,
    scheduleSources: [],
    openingDate: data.openingDate,
    interchange: data.interchange ? { ...data.interchange, source: data.interchangeSource?.id ?? stationSource.id } : undefined,
    platformDetails: underground,
    platformSource: data.route.id,
    exitDetails: data.exitDetails,
    exitSource: stationSource.id,
    facilities: data.facilities,
    facilitiesSource: stationSource.id,
    depot: data.depot,
    depotSource: data.route.id,
    publicArt: data.publicArt ?? tbc,
    publicArtSource: publicArtSource?.id,
    naming: tbc,
    engineeringHistory: data.design ?? tbc,
    engineeringHistorySource: designSource?.id,
    landmarks: data.landmarks,
    landmarksSource: stationSource.id,
  }
}

export const BANNAN_OVERLAY: Record<string, StationOverlay> = Object.fromEntries(
  Object.entries(blData).map(([code, data]) => {
    const research = makeResearch(code, data)
    return [code, { structure: 'underground' as Structure, engineering: data.engineering, exits: data.exits, research, sources: research.sources, prose: stationProse[code] ?? [] }]
  }),
) as Record<string, StationOverlay>
