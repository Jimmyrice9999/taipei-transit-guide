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
const dortsDingpuStationArchitecture = source(
  'dorts-bannan-dingpu-architecture-2015',
  'Dingpu station architecture and public art',
  '土城線延伸頂埔段車站建築與公共藝術',
  dortsPublisher,
  'https://www-ws.gov.taipei/001/Upload/public/Attachment/66291575315.pdf',
  'The builder’s full station report publishes Dingpu’s station and cross-passage dimensions, geology, diaphragm-wall contract, entrance co-structures, interior daylight design and the relationship between the station theme and public art.',
  '2026-08-18',
)
const dortsPublicArtOverview = source(
  'dorts-bannan-public-art-overview',
  'DORTS public-art programme overview',
  '捷運公共藝術簡介',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=DA11BCC514603804',
  'The builder’s full public-art overview publishes the programme’s planning history and its summary of the Tucheng section’s selection methods.',
  '2026-08-18',
)
const dortsPublicArtPlan = source(
  'dorts-bannan-public-art-plan-p251',
  'Bannan public-art station plans',
  '捷運公共藝術：板南線各站公共藝術規劃',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page251.html',
  'The builder’s full technical-book page publishes the planned locations, themes, entry counts, review rounds and selected works for BL02–BL06.',
  '2026-08-18',
)
const dortsFuzhongParticipation = source(
  'dorts-fuzhong-public-art-participation-p253',
  'Fuzhong public-art participation record',
  '府中站公共藝術民眾參與活動',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page253.html',
  'The builder’s full technical-book page publishes the Fuzhong work’s software testing and community discussion sessions.',
  '2026-08-18',
)
const dortsHospitalParticipation = source(
  'dorts-far-eastern-public-art-course-p254',
  'Far Eastern Hospital and Haishan public-art participation record',
  '亞東醫院站、海山站公共藝術民眾參與活動',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page254.html',
  'The builder’s full technical-book page publishes the Far Eastern Hospital station’s school-art curriculum and the Haishan mosaic production process.',
  '2026-08-18',
)
const dortsTuchengParticipation = source(
  'dorts-tucheng-public-art-course-p255',
  'Tucheng public-art participation record',
  '土城站公共藝術民眾參與活動',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page255.html',
  'The builder’s full technical-book page publishes the Tucheng school-art curriculum and its intended student participation.',
  '2026-08-18',
)
const dortsYongningParticipation = source(
  'dorts-yongning-public-art-participation-p256',
  'Yongning public-art participation record',
  '永寧站公共藝術民眾參與活動',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page256.html',
  'The builder’s full technical-book page publishes the Yongning work’s close-view, website and guided-tour participation plan.',
  '2026-08-18',
)
const dortsUndergroundStationStructure = source(
  'dorts-underground-station-structure-p23',
  'Underground metro-station concrete practice',
  '捷運地下車站結構混凝土施工實務',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no31/files/basic-html/page23.html',
  'The builder’s full technical-book page describes the cut-and-cover box structure, diaphragm walls and waterproofing used for underground stations including the Tucheng and Bannan sections.',
  '2026-08-18',
)
const dortsHaishanEngineering = source(
  'dorts-haishan-engineering-p107',
  'Haishan station dewatering case',
  '捷運隧道工程實務：海山站降水案例',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no8/files/basic-html/page107.html',
  'The builder’s full tunnel-engineering page records the CD268 Haishan dewatering example, settlement monitoring and the resulting public complaints.',
  '2026-08-18',
)
const dortsCd511Track = source(
  'dorts-cd511-track-contract-p22',
  'CD511 Bannan and Tucheng track contract',
  '臺北捷運軌道工程之回顧與展望：板橋線第二階段及土城線',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/jrtst/ebook/no39/files/basic-html/page22.html',
  'The builder’s full technical-journal page publishes CD511’s scope, contractor, contract amount, track form, turnouts and relationship to CD550.',
  '2026-08-18',
)
const dortsProcurementStrategy = source(
  'dorts-bannan-procurement-strategy-p37',
  'Banqiao and Nangang Line procurement strategy',
  '捷運工程施工管理實務：板橋線與南港線發包策略',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no15/files/basic-html/page37.html',
  'The builder’s full technical-book page records why CP261–CP263 used joint bidding, why CP264–CP265B used domestic contractors with foreign technical cooperation, and the procurement history for the Banqiao and Nangang sections.',
  '2026-08-18',
)
const dortsCp541Track = source(
  'dorts-cp541-track-p21',
  'CN531 and CP541 Bannan track contracts',
  '臺北捷運軌道工程之回顧與展望：南港／板橋線軌道工程',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no39/files/basic-html/page21.html',
  'The builder’s full technical-journal page publishes the CP541 underground ballastless-track scope, route length and joint-bid contract history.',
  '2026-08-18',
)
const dortsNangangTrack = source(
  'dorts-cn531-track-p21',
  'CN531 and CP541 track scope and award history',
  '臺北捷運軌道工程之回顧與展望：南港／板橋線軌道工程',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no39/files/basic-html/page21.html',
  'The builder’s full technical-journal page publishes CN531’s 30.6-kilometre, 12-station underground scope, track forms, failed-tender history and joint contract amounts.',
  '2026-08-18',
)
const dortsNangangTrackManagement = source(
  'dorts-cn531-track-management-p239',
  'Nangang East Extension track construction management',
  '軌道工程施工看施工管理之探討─以南港線東延段為例',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no39/files/basic-html/page239.html',
  'The builder’s full technical-journal article introduces the East Extension track work, its seven-month schedule pressure and the need to coordinate unfinished civil works with track and systems interfaces.',
  '2026-08-18',
)
const dortsNangangCityHallTunnel = source(
  'dorts-cn256-cn257-city-hall-tunnel-p272',
  'City Hall station and Keelung Road underpass tunnel case',
  '軟弱地盤隧道於自然大氣下採用新奧工法施工案例探討',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no6/files/basic-html/page272.html',
  'The builder’s full geotechnical case page publishes the CN256/CN257 interface, the shield stopping point, approximately 50-metre residual tunnel, 20-centimetre clearance and the three construction alternatives.',
  '2026-08-18',
)
const dortsNangangCutCover = source(
  'dorts-nangang-cut-cover-p28',
  'Nangang Line cut-and-cover station methods',
  '捷運隧道工程實務',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no8/files/basic-html/page28.html',
  'The builder’s full tunnel-engineering page explains shield and cut-and-cover methods and identifies Sun Yat-Sen Memorial Hall and City Hall as sequential cut-and-cover examples using struts.',
  '2026-08-18',
)
const dortsNangangFlood = source(
  'dorts-nangang-flood-table-p192',
  'Nangang Line station flood design review',
  '捷運土木工程實務',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no4/files/basic-html/page192.html',
  'The builder’s full civil-engineering table publishes the station pavement elevation, 200-year flood level/depth, design review depth and corresponding rainfall return period for BL13–BL18.',
  '2026-08-18',
)
const dortsNangangFloodResponse = source(
  'dorts-nangang-flood-response-p154',
  'Nangang Line flood standard revision',
  '捷運土木工程實務',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no4/files/basic-html/page154.html',
  'The builder’s full civil-engineering page records the post-Nari revision from 0.5 to 1.1 metres of freeboard and the station design-flood and actual-protection-height table.',
  '2026-08-18',
)
const dortsNangangArtPlanning = source(
  'dorts-nangang-public-art-planning-p216',
  'Nangang Line public-art station selection',
  '捷運車站規劃與設計實務：南港線公共藝術選站與選點',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page216.html',
  'The builder’s full public-art planning page records why City Hall, Kunyang and Zhongxiao Dunhua were selected as important or special stations and how underground voids and ventilation structures were considered.',
  '2026-08-18',
)
const dortsNangangArtBudget = source(
  'dorts-nangang-public-art-budget-p218',
  'Nangang Line public-art budget and responsibility',
  '捷運車站規劃與設計實務：南港線公共藝術經費來源與分工',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page218.html',
  'The builder’s full public-art planning page publishes the City Hall and Kunyang ceilings, the Zhongxiao Dunhua ventilation-structure treatment and the responsible engineering offices.',
  '2026-08-18',
)
const dortsKunyangArtProcess = source(
  'dorts-kunyang-public-art-process-p228',
  'Kunyang public-art selection and installation process',
  '捷運車站規劃與設計實務：昆陽站公共藝術',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page228.html',
  'The builder’s full public-art planning page publishes the Kunyang selection rounds, interactive carousel mechanism, glass installation method and completion date.',
  '2026-08-18',
)
const dortsZhongxiaoDunhuaArtProcess = source(
  'dorts-zhongxiao-dunhua-public-art-process-p221',
  'Zhongxiao Dunhua public-art selection process',
  '捷運車站規劃與設計實務：忠孝敦化站通風口公共藝術',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page221.html',
  'The builder’s full public-art planning page publishes the public exhibition, 671 valid questionnaires, three finalists and the selection of 樹河.',
  '2026-08-18',
)
const dortsZhongxiaoFuxingDevelopment = source(
  'dorts-zhongxiao-fuxing-development-p110',
  'Zhongxiao Fuxing joint-development project',
  '捷運開發大樓基本設計概要：初期路網忠孝復興站交4、交10',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no18/files/basic-html/page110.html',
  'The builder’s full joint-development record publishes the 7,691-square-metre site, planning and investment dates, the three-level co-structure with the Wenhu and Bannan lines, and the commercial programme.',
  '2026-08-18',
)
const dortsBanqiaoPublicArt = source(
  'dorts-bannan-banqiao-public-art-table',
  'Banqiao Line public-art table',
  '公共藝術總表：板橋線',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=EF3512A90C6BCFD2&s=D86ABA13A3A25631',
  'The builder’s full public-art table records the Banqiao station entry, including its open selection method and the work’s relationship to the platform columns.',
  '2026-08-18',
)
const dortsBanqiaoCircularArchitecture = source(
  'dorts-circular-banqiao-xinpu-architecture-p235',
  'Banqiao and Xinpu-Mingsheng station design plans',
  '捷運技術第45期：板橋區段 Y15、Y16 車站造型設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no45/files/basic-html/page235.html',
  'The builder’s full technical-journal page records the planned Y15/Y16 station forms, joint-development context, connection to the existing Xinpu Exit 5, and design themes.',
  '2026-08-18',
)
const dortsTemporaryTerminals = source(
  'dorts-bannan-temporary-terminals-p36',
  'Temporary-terminal planning in the early network',
  '捷運車站規劃與設計實務：分段通車之臨時終端站',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page36.html',
  'The builder’s full technical-book page records the temporary-terminal role of Longshan Temple and Xinpu during staged Bannan Line openings and the related escape-facility adjustments.',
  '2026-08-18',
)
const dortsJiangzicuiContractor = source(
  'kseco-cp263-jiangzicui',
  'Jiangzicui station and Xinpu tunnel project record',
  '江子翠站及江子翠站至新埔站間隧道工程',
  'KSECO Engineering Co., Ltd. (工信工程股份有限公司)',
  'https://www.kseco.com.tw/tc/project_in.aspx?cchk=7a7dc159-b64e-44e8-bde4-d53e4c3a4dec&chk=4a22537c-fbcd-43af-8db5-d9e9091642d3&cid=54&id=27&param=pn%3D1',
  'The contractor’s full project record publishes the underground three-level station, approximate project length, surrounding older housing, shield method, duration and completion year.',
  '2026-08-18',
)
const dortsNoiseAndRiverTunnel = source(
  'dorts-bannan-noise-river-tunnel-p253',
  'Bannan Line tunnel noise and vibration record',
  '捷運土木工程實務：板南線過河隧道與車內噪音',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no4/files/basic-html/page253.html',
  'The builder’s full technical-book page identifies the Longshan–Xinpu river tunnel, compares the Xinpu–Jiangzicui and Jiangzicui–Longshan segments, and records the measured frequency range and operating response.',
  '2026-08-18',
)
const dortsCp261Engineering = source(
  'dorts-cp261-engineering-p234',
  'CP261 Longshan Temple station and tunnel engineering',
  '捷運隧道工程實務：CP261 標工程範圍與湧水事件',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no8/files/basic-html/page234.html',
  'The builder’s full tunnel-engineering page publishes CP261’s scope, station and ventilation shaft, shield method, incident location and geological explanation.',
  '2026-08-18',
)
const dortsCp261Incident = source(
  'dorts-cp261-incident-p236',
  'CP261 groundwater-inflow response',
  '捷運隧道工程實務：CP261 標鏡面湧水搶救',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no8/files/basic-html/page236.html',
  'The builder’s full tunnel-engineering page records the 1995 groundwater inflow, surface void, neighbouring-building tilt, emergency grouting and monitoring response.',
  '2026-08-18',
)
const dortsCp261Correction = source(
  'dorts-cp261-correction-p237',
  'CP261 neighbouring-building correction',
  '捷運隧道工程實務：CP261 標傾斜大樓扶正',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no8/files/basic-html/page237.html',
  'The builder’s full tunnel-engineering page records the comparison of five correction methods and the selection of low-pressure grouting.',
  '2026-08-18',
)
const dortsCn252Engineering = source(
  'dorts-cn252-ximen-engineering-p243',
  'CN252 Ximen station and Taipei tunnel engineering',
  '捷運隧道工程實務：CN252 標西門站及西門至臺北站明挖隧道',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no8/files/basic-html/page243.html',
  'The builder’s full tunnel-engineering page publishes CN252’s open-cut scope, three-level interchange station, tunnel interfaces and groundwater-inflow incident.',
  '2026-08-18',
)
const dortsSongshanXimenEngineering = source(
  'dorts-songshan-ximen-engineering-p147',
  'Songshan Line station-type table at Ximen',
  '捷運技術第50期：松山線車站型式與轉乘',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no50/files/basic-html/page147.html',
  'The builder’s full technical-journal page identifies Ximen as an existing three-level island station where the Green and Blue lines interchange.',
  '2026-08-18',
)
const dortsCn253bTunnel = source(
  'dorts-cn253b-tunnel-p305',
  'CN253B Ximen–Taipei tunnel and west underground street',
  '捷運隧道工程實務：CN253B 標古蹟保護與施工',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no8/files/basic-html/page305.html',
  'The builder’s full tunnel-engineering page publishes the CN253B contractor joint venture, 822-metre shield tunnel, curve radius, North Gate clearance and geological layers.',
  '2026-08-18',
)
const dortsCn253bMonitoring = source(
  'dorts-cn253b-monitoring-p306',
  'CN253B North Gate monitoring',
  '捷運隧道工程實務：北門古蹟施工監測',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no8/files/basic-html/page306.html',
  'The builder’s full tunnel-engineering page lists the monitoring instruments installed around the North Gate during CN253B tunnelling.',
  '2026-08-18',
)
const dortsCn253bConclusion = source(
  'dorts-cn253b-conclusion-p308',
  'CN253B North Gate completion conclusion',
  '捷運隧道工程實務：CN253B 標古蹟與工程並存',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no8/files/basic-html/page308.html',
  'The builder’s retrospective conclusion says the CN253B shield tunnel was completed without impact to the North Gate monument.',
  '2026-08-18',
)
const dortsTaipeiMainArtSelection = source(
  'dorts-taipei-main-art-selection-p216',
  'Taipei Main Station public-art site selection',
  '捷運車站規劃與設計實務：南港線公共藝術選站與選點',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page216.html',
  'The builder’s full technical-book page records Taipei Main as an interchange priority and the four-storey void selected as a possible public-art focus.',
  '2026-08-18',
)
const dortsTaipeiMainArtDesign = source(
  'dorts-taipei-main-art-design-p217',
  'Taipei Main Station public-art design brief',
  '捷運車站規劃與設計實務：台北車站公共藝術類型',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page217.html',
  'The builder’s full technical-book page records the Taipei Main four-storey void, interlaced beams and the permitted spatial-art forms.',
  '2026-08-18',
)
const dortsTaipeiMainArtBudget = source(
  'dorts-taipei-main-art-budget-p218',
  'Taipei Main Station public-art budget and responsibility',
  '捷運車站規劃與設計實務：南港線公共藝術經費來源',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page218.html',
  'The builder’s full technical-book page records the NT$5 million Taipei Main public-art ceiling and the complicated responsibility transfer between engineering offices.',
  '2026-08-18',
)
const dortsTaipeiMainArtOutcome = source(
  'dorts-taipei-main-art-outcome-p219',
  'Taipei Main Station public-art selection outcome',
  '捷運車站規劃與設計實務：南港線公共藝術徵選過程',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page219.html',
  'The builder’s full technical-book page records that the Taipei Main public-art competition’s first prize was unawarded and no work was installed there under that programme.',
  '2026-08-18',
)
const dortsTaipeiMainDevelopment = source(
  'dorts-taipei-main-development-p132',
  'Taipei Main Station joint-development arrangement',
  '臺北捷運土地開發案例解析（一）：台北車站 C1、D1 開發案',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no20/files/basic-html/page132.html',
  'The builder’s full land-development case page publishes Taipei Main’s B1–B3 functional layers, links to Taiwan Railways and the Beimen-side connection, and the six-rail joint-development context.',
  '2026-08-18',
)

const art = {
  bl01: source('dorts-bl01-public-art', 'BL01 public art', '飛旋．夢的起點', dortsPublisher, 'https://www.dorts.gov.taipei/cp.aspx?n=1E9E49BD7665CF2D&s=3D0A3BBDE3F705F9', 'The builder’s full public-art record publishes the title, artists, materials, completion month, and placement.'),
  bl02: source('dorts-bl02-public-art', 'BL02 public art', '時間．碎片', dortsPublisher, 'https://www.dorts.gov.taipei/cp.aspx?n=1E9E49BD7665CF2D&s=B39B922B400AE0BE', 'The builder’s full public-art record publishes the title, artist, materials, completion month, and placement.'),
  bl03: source('dorts-bl03-public-art', 'BL03 public art', '金城傳奇', dortsPublisher, 'https://www.dorts.gov.taipei/cp.aspx?n=1E9E49BD7665CF2D&s=774907BC6D8E2127', 'The builder’s full public-art record publishes the title, artist or commissioning group, material, completion month, and placement.'),
  bl04: source('dorts-bl04-public-art', 'BL04 public art', '牧場', dortsPublisher, 'https://www.dorts.gov.taipei/cp.aspx?n=1E9E49BD7665CF2D&s=0061E025C610E544', 'The builder’s full public-art record publishes the title, artist, materials, completion month, and placement.'),
  bl05: source('dorts-bl05-public-art', 'BL05 public art', '河戀', dortsPublisher, 'https://www.dorts.gov.taipei/cp.aspx?n=1E9E49BD7665CF2D&s=C11B42572557E91B', 'The builder’s full public-art record publishes the title, artist or studio, materials, completion month, and placement.'),
  bl06: source('dorts-bl06-public-art', 'BL06 public art', '空間之詩', dortsPublisher, 'https://www.dorts.gov.taipei/cp.aspx?n=1E9E49BD7665CF2D&s=0C7DA2A84E03E271', 'The builder’s full public-art record publishes the title, artist, materials, completion month, and placement.'),
  bl07: source('dorts-bl07-public-art', 'BL07 public art', '進化的軌跡', dortsPublisher, 'https://www.dorts.gov.taipei/cp.aspx?n=1E9E49BD7665CF2D&s=1EB2F342A04D75ED', 'The builder’s full public-art record publishes the title, artist, materials, completion month, and placement.'),
  bl16: source('dorts-bl16-public-art', 'BL16 public art', '樹河（都市翦影）', dortsPublisher, 'https://www.dorts.gov.taipei/cp.aspx?n=1E9E49BD7665CF2D&s=69F49A510E1B983F', 'The builder’s full public-art record publishes the title, artist, dimensions, materials, completion month, placement, selection method and cost.', '2026-08-18'),
  bl18: source('dorts-bl18-public-art', 'BL18 public art', '成長', dortsPublisher, 'https://www.dorts.gov.taipei/cp.aspx?n=1E9E49BD7665CF2D&s=8EB8329E28899847', 'The builder’s full public-art record publishes the title, artist, five-part form, materials, completion month, and placements.'),
  bl21: source('dorts-bl21-public-art', 'BL21 public art', '旋', dortsPublisher, 'https://www.dorts.gov.taipei/cp.aspx?n=1E9E49BD7665CF2D&s=21E7260FD75E88D4', 'The builder’s full public-art record publishes the title, artist or group, materials, completion month, and placement.'),
  bl22: source('dorts-bl22-public-art', 'BL22 public art', '捷運．碼頭', dortsPublisher, 'https://www.dorts.gov.taipei/cp.aspx?n=1E9E49BD7665CF2D&s=303C6A9B61A14F7F', 'The builder’s full public-art record publishes the title, artist, materials, completion month, and placement.'),
  bl23: source('dorts-bl23-public-art', 'BL23 public art', '我們的私房公共藝術', dortsPublisher, 'https://www.dorts.gov.taipei/cp.aspx?n=1E9E49BD7665CF2D&s=2809EC1898BBBD56', 'The builder’s full public-art record publishes both works’ titles, artists, materials, completion month, placement and selection details.'),
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
  proseSources?: Source[]
}

const blData: Record<string, BLData> = {
  BL01: { engineering: 'BL36', exits: 4, openingDate: '6 July 2015', route: dortsDingpu, depot: 'Tucheng Depot is the published depot for the Bannan, Banqiao and Tucheng stretch; station-level roster allocation: TBC.', exitDetails: '1: 中央路4段約100號旁; 2: 中央路4段近鴻海精密工業; 3: 中央路4段51-6號近頂埔之星科技廣場; 4: 中央路4段62號旁. Accessible exits: 1, 3 and 4.', facilities: 'Exit lifts at exits 1, 3 and 4; paid-platform lift at the paid enquiry centre; enquiry points near exits 3 and 4; water dispenser near the enquiry point; unpaid toilets near exit 3 and paid-zone toilets and parent/accessible toilet in the hall; nursing room in the paid B3 hall; bicycle access open.', landmarks: '頂埔之星科技廣場', design: 'The station theme is 節點密碼–C的方程式. DORTS describes a light passage and light platform, a flowing ceiling, and light-wave, halo and ray motifs.', designSource: dortsStationArchitecture, publicArt: '飛旋．夢的起點 — 陳宏誠、林育正（大瑪爾藝術設計有限公司）; stainless steel, stone, fluorocarbon paint and aluminium; June 2015; platform and accessible-lift areas.', publicArtSource: art.bl01, proseSources: [dortsDingpuStationArchitecture] },
  BL02: { engineering: 'BL37', exits: 4, openingDate: '31 May 2006', route: dortsTucheng, depot: 'Tucheng Depot; station-level roster allocation: TBC.', exitDetails: '1: 中央路3段98巷口; 2: 中央路3段承天路口; 3: 中央路3段近89巷; 4: 中央路3段60號. Accessible exits: 1 and 2.', facilities: 'Exit lifts at exits 1 and 2; paid-platform lift in the west side near the enquiry point; enquiry point near exit 2; water dispenser near the enquiry point; unpaid toilets near exits 2 and 3; parent/accessible toilet near exit 2; no nursing room is listed; bicycle access open.', landmarks: tbc, publicArt: '時間．碎片 — 許宗傑; mechanical and motor elements, glass-fibre resin, enamel and glass, with 86,400 LEDs; March 2006; concourse corners by exits 1 and 4.', publicArtSource: art.bl02, proseSources: [dortsPublicArtPlan, dortsYongningParticipation, dortsUndergroundStationStructure, dortsCd511Track] },
  BL03: { engineering: 'BL38', exits: 3, openingDate: '31 May 2006', route: dortsTucheng, depot: 'Tucheng Depot; station-level roster allocation: TBC.', exitDetails: '1: 金城路1段近金城公園; 2: 金城路1段和平路口近土城區戶政事務所; 3: 金城路1段. Accessible exit: 1.', facilities: 'Exit-1 lift; paid-platform lift on the east side; enquiry point and water dispenser near exit 1; unpaid toilets and parent/accessible toilet near exit 3; no nursing room is listed; bicycle access open.', landmarks: '金城公園; 土城區戶政事務所', publicArt: '金城傳奇 — 涂維政（帝門藝術教育基金會）; 夸石; February 2006; unpaid concourse and entrance walls.', publicArtSource: art.bl03, proseSources: [dortsPublicArtOverview, dortsPublicArtPlan, dortsTuchengParticipation, dortsUndergroundStationStructure, dortsCd511Track] },
  BL04: { engineering: 'BL39', exits: 3, openingDate: '31 May 2006', route: dortsTucheng, depot: 'Tucheng Depot; station-level roster allocation: TBC.', exitDetails: '1: 海山路近樂利國小; 2: 海山路新北高工運動場旁; 3: 裕民路92巷22弄3號. Accessible exit: 2.', facilities: 'Exit-2 lift; paid-platform lift on the west side or centre; enquiry point and water dispenser near exit 2; paid toilets and parent/accessible toilet by the hall lift; no nursing room is listed; bicycle access open.', landmarks: '樂利國小; 新北高工運動場', publicArt: '牧場 — 黃清輝; white marble, black granite, mosaic and ground lights; May 2006; entrance forecourt.', publicArtSource: art.bl04, proseSources: [dortsPublicArtOverview, dortsPublicArtPlan, dortsHospitalParticipation, dortsHaishanEngineering, dortsUndergroundStationStructure] },
  BL05: { engineering: 'BL40', exits: 3, openingDate: '31 May 2006', route: dortsTucheng, depot: 'Tucheng Depot; station-level roster allocation: TBC.', exitDetails: '1: 南雅南路2段120號; 2: 南雅南路2段122號; 3: 南雅南路2段近高爾富路口. Accessible exit: 3.', facilities: 'Exit-3 lift; paid-platform lift on the west side; enquiry points near exits 1 and 2; water dispenser at exit 3; paid toilets and parent/accessible toilet by the hall lift; no nursing room is listed; bicycle access open.', landmarks: tbc, publicArt: '河戀 — 楊春森工作室; glass and LED; October 2005; concourse wall.', publicArtSource: art.bl05, proseSources: [dortsPublicArtPlan, dortsHospitalParticipation, dortsUndergroundStationStructure, dortsCd511Track] },
  BL06: { engineering: 'BL1', exits: 3, openingDate: '31 August 2000', route: dortsBanqiao, depot: 'Tucheng Depot is the published depot for the Bannan, Banqiao and Tucheng stretch; station-level roster allocation: TBC.', exitDetails: '1: 縣民大道1段193號近板橋農會; 2: 縣民大道府中路口; 3: 府中路30號近板橋區公所. Accessible exit: 1.', facilities: 'Exit-1 lift; paid-platform lift on the west side near the enquiry point; enquiry point and water dispenser near exit 1; paid toilets and parent/accessible toilet near the enquiry point; no nursing room is listed; bicycle access open.', landmarks: '板橋農會; 板橋區公所', publicArt: '空間之詩 — 陳逸堅; LED message board, software, iron and cables; October 2005; the vertical-circulation void.', publicArtSource: art.bl06, proseSources: [dortsPublicArtPlan, dortsFuzhongParticipation, dortsUndergroundStationStructure, dortsCd511Track] },
  BL07: { engineering: 'BL2', exits: 3, openingDate: '31 May 2006', route: dortsBanqiao, depot: 'Tucheng Depot is the published depot for the Bannan, Banqiao and Tucheng stretch; station-level roster allocation: TBC.', exitDetails: '1: 站前路、新府路口、新板萬坪都會公園; 2: 縣民大道、新府路口、板橋公車站; 3: 站前路5號、板橋火車站對面. Accessible exit: 3.', facilities: 'Exit-3 lift; paid-platform lift on the north side; enquiry point and water dispenser near exit 3; unpaid toilets and parent/accessible toilet near exit 3; nursing room in the unpaid hall; bicycle access open.', landmarks: '新板萬坪都會公園; 板橋公車站; 板橋火車站', interchange: { label: 'Tamsui–Xinyi Line; transfer mode: TBC', lineCode: 'R' }, publicArt: '進化的軌跡 — 陶亞倫; stainless-steel painted rings and motor; October 2005; four main platform columns.', publicArtSource: art.bl07, proseSources: [dortsProcurementStrategy, dortsCp541Track, dortsBanqiaoPublicArt, dortsBanqiaoCircularArchitecture, dortsTemporaryTerminals] },
  BL08: { engineering: 'BL3', exits: 5, openingDate: '31 August 2000', route: dortsBanqiao, depot: 'Tucheng Depot is the published depot for the Bannan, Banqiao and Tucheng stretch; station-level roster allocation: TBC.', exitDetails: '1: 民生路3段15號、新埔市場; 2: 民生路2段251號; 3: 民生路2段234巷; 4: 文化路1段360號; 5: 民生路3段6號. Accessible exits: 4 and 5.', facilities: 'Exit lifts at exits 4 and 5; paid-platform lift on the east side near the enquiry point; enquiry point and water dispenser near exit 4; unpaid toilets and parent/accessible toilet near exits 4 and 5; nursing room in the unpaid hall; bicycle access open.', landmarks: '新埔市場', interchange: { label: 'Tamsui–Xinyi Line; transfer mode: TBC', lineCode: 'R' }, proseSources: [dortsProcurementStrategy, dortsTemporaryTerminals, dortsJiangzicuiContractor, dortsNoiseAndRiverTunnel, dortsBanqiaoCircularArchitecture] },
  BL09: { engineering: 'BL4', exits: 6, openingDate: '31 August 2000', route: dortsBanqiao, depot: 'Tucheng Depot is the published depot for the Bannan, Banqiao and Tucheng stretch; station-level roster allocation: TBC.', exitDetails: '1: 雙十路3段10巷近板橋農村公園; 2: 文化路2段313號; 3: 文化路2段296號; 4: 雙十路2段178號近松柏街; 5: 文化路2段384號近仁化街; 6: 文化路2段383巷近江翠國小. Accessible exit: 3.', facilities: 'Exit-3 lift; paid-platform lift on the west side near the enquiry point; enquiry points near exits 1 and 2; water dispenser near the enquiry point; unpaid toilets and parent/accessible toilet near exits 1–3; no nursing room is listed; bicycle access open.', landmarks: '板橋農村公園; 江翠國小', proseSources: [dortsProcurementStrategy, dortsJiangzicuiContractor, dortsNoiseAndRiverTunnel, dortsTemporaryTerminals] },
  BL10: { engineering: 'BL5', exits: 3, openingDate: '24 December 1999', route: dortsBanqiao, depot: 'Tucheng Depot is the published depot for the Bannan, Banqiao and Tucheng stretch; station-level roster allocation: TBC.', exitDetails: '1: 和平西路3段、西園路1段; 2: 和平西路3段近萬華區公所; 3: 和平西路3段81巷近康定路. Accessible exit: 1.', facilities: 'Exit-1 lift; paid-platform lift in the centre; enquiry point near exit 2; paid toilets and parent/accessible toilet by the hall lift; no nursing room is listed; bicycle access open.', landmarks: '萬華區公所', proseSources: [dortsProcurementStrategy, dortsCp261Engineering, dortsCp261Incident, dortsCp261Correction, dortsTemporaryTerminals] },
  BL11: { engineering: 'BL6', exits: 6, openingDate: '24 December 1999', route: dortsNangang, depot: 'Nangang Depot is the published depot for the Nangang section; station-level roster allocation: TBC.', exitDetails: '1: 漢中街、成都路近西門紅樓; 2: 中華路1段59號近台北市憲兵隊; 3: 中華路1段、寶慶路; 4: 中華路1段、衡陽路; 5: 中華路1段、秀山街; 6: 漢中街、成都路. Accessible exits: 4 and 6.', facilities: 'Exit lifts at exits 4 and 6; paid-platform lift in the centre; enquiry points near exits 1 and 6; paid toilets and parent/accessible toilet by the hall; nursing room in the unpaid hall near exit 4; bicycle access open.', landmarks: '西門紅樓; 臺北市憲兵隊', interchange: { label: 'Songshan–Xindian Line; transfer mode: TBC', lineCode: 'G' }, proseSources: [dortsProcurementStrategy, dortsCn252Engineering, dortsSongshanXimenEngineering, dortsTemporaryTerminals, dortsArchitecture] },
  BL12: { engineering: 'BL7', exits: 8, openingDate: '24 December 1999', route: dortsNangang, depot: 'Nangang Depot is the published depot for the Nangang section; station-level roster allocation: TBC.', exitDetails: 'M1: 台鐵台北車站北一門; M2: 市民大道1段209號近國父史蹟紀念館; M3: 忠孝西路1段45; M4: 忠孝西路1段38對面; M5: 忠孝西路1段66對面; M6: 忠孝西路1段38; M7: 忠孝西路1段33; M8: 公園路13號. Accessible exits: M2 and M4.', facilities: 'Multiple exit lifts; paid-platform lift in the central area; enquiry points around M1–M8; water dispenser near M1 and M2; unpaid toilets and parent/accessible toilet near M1 and M2, with paid-zone facilities in the Bannan and Tamsui–Xinyi areas; nursing room in the paid B2 hall; bicycle access not open.', landmarks: '台鐵台北車站; 國父史蹟紀念館', interchange: { label: 'Tamsui–Xinyi Line and Airport MRT; transfer mode: TBC', lineCode: 'R' }, interchangeSource: dortsLine, proseSources: [dortsCn253bTunnel, dortsCn253bMonitoring, dortsCn253bConclusion, dortsTaipeiMainArtSelection, dortsTaipeiMainArtDesign, dortsTaipeiMainArtBudget, dortsTaipeiMainArtOutcome, dortsTaipeiMainDevelopment, dortsNoiseAndRiverTunnel] },
  BL13: { engineering: 'BL8', exits: 6, openingDate: '24 December 1999', route: dortsNangang, depot: 'Nangang Depot is the published depot for the Nangang section; station-level roster allocation: TBC.', exitDetails: '1: 忠孝東路1段、林森北路近警政署; 2: 忠孝東路1段、林森南路; 3: 忠孝東路1段70巷; 4: 忠孝東路1段84巷近青島國宅; 5: 紹興南街近華山市場; 6: 紹興北街近善導寺. Accessible exit: 3.', facilities: 'Exit-3 lift; paid-platform lift on the west side; enquiry points near exits 1–3; unpaid toilets and parent/accessible toilet near exits 1–3; no nursing room is listed; bicycle access open.', landmarks: '警政署; 青島國宅; 華山市場; 善導寺', proseSources: [dortsNangangTrack, dortsNangangCityHallTunnel, dortsNangangCutCover, dortsNangangFlood, dortsNangangArtPlanning, dortsNangangArtBudget] },
  BL14: { engineering: '4BL9', exits: 7, openingDate: '24 December 1999', route: dortsNangang, depot: 'Nangang Depot is the published depot for the Nangang section; station-level roster allocation: TBC.', exitDetails: '1: 忠孝東路2段101近忠孝國小; 2: 忠孝東路2段134巷近忠孝公園; 3: 忠孝東路3段10巷; 4: 忠孝東路3段、新生南路近台北科技大學; 5: 新生南路56巷近濟南路; 6: 新生南路、濟南路; 7: 新生南路、忠孝東路3段. Accessible exits: 2 and 3.', facilities: 'Exit lifts at exits 2 and 3; paid-platform lifts for the Bannan and Circular Line paid areas; enquiry points near exits 1–2 and 5–7; unpaid toilets and parent/accessible toilets near exits 1–2 and in the paid centre; the Circular Line nursing room is in paid B1; bicycle access not open.', landmarks: '忠孝國小; 忠孝公園; 台北科技大學', interchange: { label: 'Circular Line; transfer mode: TBC', lineCode: 'Y' }, proseSources: [dortsNangangTrack, dortsNangangTrackManagement, dortsNangangFlood, dortsNangangFloodResponse] },
  BL15: { engineering: 'BL10', exits: 5, openingDate: '24 December 1999', route: dortsNangang, depot: 'Nangang Depot is the published depot for the Nangang section; station-level roster allocation: TBC.', exitDetails: '1: 忠孝東路3段291、安東街; 2: 忠孝東路3段、復興南路近 SOGO; 3: 忠孝東路4段52號、SOGO對面; 4: 忠孝東路4段47號近 SOGO; 5: 復興南路1段153號. Accessible exit: 2.', facilities: 'Exit-2 lift; paid-platform lift on the west side near the enquiry point and Wenhu south side; enquiry points near exits 1 and 2; paid toilets and parent/accessible toilet near exit 2; nursing room in the Bannan unpaid B3 hall near exit 3; bicycle access not open.', landmarks: 'SOGO', interchange: { label: 'Wenhu Line; transfer mode: TBC', lineCode: 'BR' }, proseSources: [dortsNangangTrack, dortsZhongxiaoFuxingDevelopment, dortsNangangFlood, dortsNangangArtPlanning] },
  BL16: { engineering: 'BL11', exits: 8, openingDate: '24 December 1999', route: dortsNangang, depot: 'Nangang Depot is the published depot for the Nangang section; station-level roster allocation: TBC.', exitDetails: '1: 忠孝東路4段175號; 2: 忠孝東路4段203號; 3: 忠孝東路4段182號; 4: 忠孝東路4段166號; 5: 忠孝東路4段148號; 6: 敦化南路1段219號; 7: 忠孝東路4段151號; 8: 忠孝東路4段209號. Accessible exit: 2.', facilities: 'Exit-2 lift; paid-platform lift on the east side; enquiry points near exits 1–4; unpaid toilets and parent/accessible toilet near exits 1–4; nursing room in the unpaid hall; bicycle access open.', landmarks: tbc, publicArt: '樹河（都市翦影） — 蔡淑瑩; painted stainless steel, granite, flowing water and LED lights; January 2000; two ventilation structures on the traffic island at Zhongxiao East Road and Dunhua South Road; public selection; approximately NT$43,000,000 plus NT$500,000 first-prize award.', publicArtSource: art.bl16, proseSources: [dortsNangangTrack, dortsNangangCutCover, dortsNangangFlood, dortsNangangArtPlanning, dortsNangangArtBudget, dortsZhongxiaoDunhuaArtProcess] },
  BL17: { engineering: 'BL12', exits: 5, openingDate: '24 December 1999', route: dortsNangang, depot: 'Nangang Depot is the published depot for the Nangang section; station-level roster allocation: TBC.', exitDetails: '1: 忠孝東路4段327巷近中華電信; 2: 忠孝東路4段304巷近觀光局; 3: 忠孝東路4段400號、光復南路近光復國小; 4: 忠孝東路4段400號、光復國小側; 5: 忠孝東路4段400號、光復南路、台北大巨蛋對面. Accessible exits: 4 and 5.', facilities: 'Exit lifts between exits 3 and 4 and at exit 5; paid-platform lift on the east side; enquiry points near exits 3–5; unpaid toilets and parent/accessible toilet near exits 3–5; no nursing room is listed; bicycle access open.', landmarks: '中華電信; 觀光局; 光復國小; 台北大巨蛋', proseSources: [dortsNangangTrack, dortsNangangCutCover, dortsNangangFlood, dortsNangangArtPlanning, dortsNangangArtBudget] },
  BL18: { engineering: 'BL13', exits: 4, openingDate: '24 December 1999', route: dortsNangang, depot: 'Nangang Depot is the published depot for the Nangang section; station-level roster allocation: TBC.', exitDetails: '1: 忠孝東路5段15巷近市政府轉運站; 2: 忠孝東路5段2號近市政府轉運站; 3: 忠孝東路、松仁路近台北市消防局; 4: 忠孝東路5段71巷. Accessible exit: 2.', facilities: 'Exit-2 lift; paid-platform lift on the west side; enquiry point near exit 1; unpaid toilets and parent/accessible toilet near exits 1 and 2; nursing room in the unpaid hall near exit 2; bicycle access open.', landmarks: '市政府轉運站; 台北市消防局', publicArt: '成長 — Steve Woodward; five-part work using marble, granite, bronze and aluminium in varying parts; November 1999; fire-station entrance plaza and platform.', publicArtSource: art.bl18, proseSources: [dortsNangangTrack, dortsNangangCityHallTunnel, dortsNangangCutCover, dortsNangangFlood, dortsNangangArtPlanning, dortsNangangArtBudget] },
  BL19: { engineering: 'BL14', exits: 5, openingDate: '30 December 2000', route: dortsNangang, depot: 'Nangang Depot is the published depot for the Nangang section; station-level roster allocation: TBC.', exitDetails: '1: 忠孝東路5段423巷; 2: 忠孝東路5段420號; 3: 忠孝東路5段446號; 4: 忠孝東路5段464號、虎林街近永春郵局; 5: 忠孝東路5段455號、虎林街近永春市場. Accessible exit: 5.', facilities: 'Exit-5 lift; paid-platform lift on the east side; enquiry points near exits 3–5; unpaid toilets and parent/accessible toilet near exits 3–5; no nursing room is listed; bicycle access open.', landmarks: '永春郵局; 永春市場' },
  BL20: { engineering: 'BL15', exits: 4, openingDate: '30 December 2000', route: dortsNangang, depot: 'Nangang Depot is the published depot for the Nangang section; station-level roster allocation: TBC.', exitDetails: '1: 忠孝東路5段743巷、中坡北路近五分埔; 2: 忠孝東路5段790巷、中坡南路; 3: 忠孝東路6段6號、玉成街近聯合醫院忠孝院區; 4: 玉成街98巷、永吉路605巷近合作金庫. Accessible exit: 3.', facilities: 'Exit-3 lift; paid-platform lift on the east side; enquiry points near exits 3 and 4; unpaid toilets and parent/accessible toilet near exits 3 and 4; no nursing room is listed; bicycle access open.', landmarks: '五分埔; 聯合醫院忠孝院區; 合作金庫' },
  BL21: { engineering: 'BL16', exits: 4, openingDate: '30 December 2000', route: dortsNangang, depot: 'Nangang Depot is the published depot for the Nangang section; station-level roster allocation: TBC.', exitDetails: '1: 忠孝東路6段403巷; 2: 忠孝東路6段403巷1弄; 3: 忠孝東路6段、近昆陽街; 4: 忠孝東路6段449號、昆陽街. Accessible exits: 1 and 4.', facilities: 'The operator lists a central platform lift; enquiry point near exit 4; paid toilets and parent/accessible toilet by the platform lift; no nursing room is listed; bicycle access open.', landmarks: '昆陽街', publicArt: '旋 — 晶矽族群; painted stainless steel, glass, infrared sensor, motor and sounder; December 2000; concourse glass wall.', publicArtSource: art.bl21 },
  BL22: { engineering: 'BL17', exits: 2, openingDate: '25 December 2008', route: dortsNangangEast, depot: 'Nangang Depot is the published depot for the Nangang stretch; station-level roster allocation: TBC.', exitDetails: '1: 忠孝東路7段380號、台鐵南港站對面; 2: 近極限運動中心. Accessible exit: 2.', facilities: 'Exit-2 lift; paid-platform lift on the east side near the enquiry point; enquiry point near the 2A link; unpaid toilet near exit 1 and paid toilet and parent/accessible toilet by the platform lift; nursing room in the paid hall; bicycle access open.', landmarks: '台鐵南港站; 極限運動中心', design: 'The station theme is 懷舊與科技. DORTS describes co-development with Taiwan Railways, a light-green theme and local references including 新庄仔陂、後山陂、舜若多橋、南港茶園 and 胡適紀念館.', designSource: dortsStationArchitecture, publicArt: '捷運．碼頭 — 陶亞倫; iron, white paint, laminated glass, lights, dimmer, timer and colour output; December 2008; platform.', publicArtSource: art.bl22 },
  BL23: { engineering: 'BL18', exits: 7, openingDate: '27 February 2011', route: dortsNangangEast, depot: 'Nangang Depot is the published depot for the Nangang stretch; station-level roster allocation: TBC.', exitDetails: '1: 經貿路、南港展覽館; 2: 南港路1段32號、經貿路; 2A: 同處; 3: 南港路、經貿1路; 4: 經貿1路、南港展覽館; 5: 南港路、研究院路; 6: 南港路、經貿路; 7: 福康街近成德國中. Accessible exits: 1–5 and 2A.', facilities: 'Multiple exit and transfer lifts; enquiry points near exits 2 and 5; water dispensers near exits 2 and 5; toilets, parent/accessible toilet and nursing facilities in the halls; bicycle access open.', landmarks: '南港展覽館; 研究院路; 成德國中', design: 'The station theme is 數位空間、e化車站. DORTS describes a 黎明藍 palette, metal and low-E glass, shell-like entrances, and barcode, circuit-board and binary motifs.', designSource: dortsStationArchitecture, publicArt: '我們的私房公共藝術 — 黃心健（故事巢股份有限公司）; stainless steel, clear glass, acid-free paper, LED, computers, projection fabric, one-way mirror and LCD; September 2010; concourse; invited competition; NT$6,000,000. 快或慢 — 三浦光一郎; anodized aluminium plate, aluminium strip, acrylic sheet and LED lights; September 2010; walls on both sides of the B1 paid-area passage to the Wenhu Line; public selection; NT$5,000,000.', publicArtSource: art.bl23 },
}

const stationProse: Record<string, StationProseSentence[]> = {
  BL01: [
    { text: 'DORTS describes the Dingpu extension as running from Yongning beneath Central Road Sections 3 and 4 to the high-tech industrial-park area, an underground route of about two kilometres with one station.', source: dortsDingpu.id },
    { text: 'The project record gives the approved planning date as 16 February 2007 and a planned total cost of NT$7.627 billion, while identifying one design package, section contract CD552 and its civil, water, vertical-transport and track subcontracts.', source: dortsDingpu.id },
    { text: 'A separate station report measures Dingpu station and its cross-passage together at about 421 metres long, 25.8 metres wide and 21.5 metres deep, built as a cut-and-cover underground structure.', source: dortsDingpuStationArchitecture.id },
    { text: 'Its recorded ground profile contains shallow fill, a dense gravel layer extending roughly 1.5 to 24.55 metres below ground with stones up to 120 centimetres, and weakly cemented sandstone below about 20.3 metres.', source: dortsDingpuStationArchitecture.id },
    { text: 'Because the gravel was unusually large and hard and the schedule was tight, DORTS separated the main diaphragm-wall work into CD271A, awarded it to 弘堃工程, and records 185 wall panels.', source: dortsDingpuStationArchitecture.id },
    { text: 'The contractor used a heavy hydraulic grab, the LK80-150, after the site investigation showed that ordinary assumptions about the gravel would not describe the construction conditions accurately.', source: dortsDingpuStationArchitecture.id },
    { text: 'The architecture report treats Dingpu as both the Tucheng Line terminal and the Sanying Line’s future starting point, then reads the place through a longer transition from coal mining and traditional industry toward high-technology research.', source: dortsDingpuStationArchitecture.id },
    { text: 'That temporal reading is carried into the building: the report describes carbon atoms developing into carbon-nanotube forms, with entrances and underground spaces unfolding in layers like excavation.', source: dortsDingpuStationArchitecture.id },
    { text: 'Entrance 1 is co-constructed with the Tucheng precinct police substation, while Entrance 3 is designed as a shared entrance with the future Sanying station and occupies joint-development land.', source: dortsDingpuStationArchitecture.id },
    { text: 'Inside, a ceiling opening brings daylight into the underground station, and the report describes wave, halo and radiance as three transformations of light across ceiling, floor and wall elements.', source: dortsDingpuStationArchitecture.id },
    { text: 'The same report says temperature-sensitive controls vary the coloured wall lighting, making the wall respond to outdoor temperature and giving passengers an intended interaction with the outside environment.', source: dortsDingpuStationArchitecture.id },
    { text: 'DORTS connects this architectural sequence to the public-art work’s upward and downward movement, presenting transport and cultural creation as a shared new beginning rather than treating the installation as an isolated object.', source: art.bl01.id },
  ],
  BL02: [
    { text: 'The Tucheng section was planned from the early 1990s and runs underground for about 5.6 kilometres from Fuzhong toward Central Road and Chengtian Road, with four stations and a depot in the former Dahan River flood-control area.', source: dortsTucheng.id },
    { text: 'DORTS places the depot beside Xinxing Bridge, the new Tucheng embankment, the Water Resources Agency river office and the Tucheng industrial district, describing it as a major parking, cleaning and maintenance base for the blue line.', source: dortsTucheng.id },
    { text: 'The builder’s architecture guidance says underground stations in this section must reconcile entrances and ventilation shafts with the surface environment, while their internal spaces remain plain, simple and function-led.', source: dortsArchitecture.id },
    { text: 'Technical guidance for underground stations in the Tucheng and Bannan sections describes long box-shaped cut-and-cover structures, diaphragm walls with high water resistance and low construction noise, and waterproofing that wraps the station structure.', source: dortsUndergroundStationStructure.id },
    { text: 'Yongning’s public-art plan starts from two nearby prehistoric sites, 斬龍山 and 土地公山, dated by the report to roughly 3,500 years ago, where settlements were described as dispersed communities about 200 metres square.', source: dortsPublicArtPlan.id },
    { text: 'That account identifies agriculture as the main livelihood and hunting and fishing as secondary activities, with many excavated stone tools, especially small and medium chipped and polished axes.', source: dortsPublicArtPlan.id },
    { text: 'Rather than placing the work in a single gallery-like room, the plan distributed it across four wall and corner locations at entrances A, B and D so that the station itself could carry the archaeological narrative.', source: dortsPublicArtPlan.id },
    { text: 'The plan records seven submissions, one review round and three finalists before selecting the installed work, preserving a concrete record of the public-art procurement rather than only its later interpretation.', source: dortsPublicArtPlan.id },
    { text: 'DORTS’s later participation record says the work was intended for close viewing, with educational value for learning about local excavated objects and history, and a dynamic presentation intended to make passengers pause.', source: dortsYongningParticipation.id },
    { text: 'The participation plan also proposed a dedicated website because a station sign can be seen only briefly in a busy passenger flow, plus guided tours linked to the station-opening programme.', source: dortsYongningParticipation.id },
    { text: 'The route’s CD511 track contract was a separate systems package: it covered the line from 600 metres west of Xinpu to Yongning, 14.9 kilometres of mainly ballastless track, 19 turnouts and about 27 kilometres of third rail.', source: dortsCd511Track.id },
    { text: 'DORTS records that CD511 was awarded to Continental Engineering Corporation in 1999 for NT$996,762,700, and that it sat inside the larger CD550 section contract, so the amount is a track-contract value rather than a station civil cost.', source: dortsCd511Track.id },
  ],
  BL03: [
    { text: 'The Tucheng Line corridor was ultimately built underground from Fuzhong along the west side of the railway, then beside Nanya South Road, the former Gongguan ditch corridor, Jincheng Road and Central Road toward Chengtian Road.', source: dortsTucheng.id },
    { text: 'DORTS records that the line had been planned since 1990, received central approval in 1993 and was delivered together with the Banqiao Line works through three detailed-design packages and the CD550 and CD551 section contracts.', source: dortsTucheng.id },
    { text: 'The same route record says the Tucheng Depot occupies a former Dahan River flood-control site and supports parking, washing and repair functions shared across the blue-line fleet, although it does not assign an individual station roster.', source: dortsTucheng.id },
    { text: 'DORTS’s underground-station construction guidance describes the relevant station form as a long cut-and-cover box, using stiff diaphragm walls to limit water ingress, noise, vibration and movement near neighbouring buildings.', source: dortsUndergroundStationStructure.id },
    { text: 'The public-art plan proposed wall works at the entrances and in the unpaid concourse, using modern treatments of folk and craft elements such as door guardians, stone markers, kites, umbrellas, lanterns and paper cutting.', source: dortsPublicArtPlan.id },
    { text: 'Its procurement record reports twelve submissions, one disqualification, three review rounds and three finalists before selecting the work now associated with the station’s Jincheng story.', source: dortsPublicArtPlan.id },
    { text: 'A separate DORTS overview classifies the Tucheng work as obtained through invited comparison, while the technical-book station plan says it was handled by public submission; these are retained as a selection-method conflict rather than silently reconciled.', source: dortsPublicArtOverview.id },
    { text: 'The participation plan linked the station’s public art to junior-high arts-and-humanities teaching, with artists and teachers collaborating and the curriculum designed around students’ cognitive and psychological characteristics.', source: dortsTuchengParticipation.id },
    { text: 'DORTS says the educational purpose was to stimulate students’ inner perception and modes of expression, then encourage self-exploration and participation through exchanges of artistic messages.', source: dortsTuchengParticipation.id },
    { text: 'The CD511 track package covered a six-station, 14.9-kilometre main line and a separate depot with ten kilometres of ballasted track, forty turnouts and nineteen underground turnouts on the revenue route.', source: dortsCd511Track.id },
    { text: 'The builder records Continental Engineering Corporation as CD511’s contractor and NT$996,762,700 as its contract amount, explicitly describing the package as a child contract within CD550 rather than the civil cost of this station.', source: dortsCd511Track.id },
  ],
  BL04: [
    { text: 'DORTS’s route table labels BL04 as 海山/(新北高工); this source-era slash notation is recorded here without inferring a rename chronology.', source: dortsTucheng.id },
    { text: 'The station lies within the underground Tucheng section, whose alignment follows the railway-side corridor, the former Gongguan ditch, Jincheng Road and Central Road before reaching the Yongning end.', source: dortsTucheng.id },
    { text: 'The builder’s general architecture page says the section’s underground design limits the visual and environmental impact of entrances and ventilation shafts, leaving internal spaces deliberately plain and functional.', source: dortsArchitecture.id },
    { text: 'The technical construction record identifies BL04 as the CD268 Haishan station case in a dewatering discussion, not merely as a generic example of underground construction.', source: dortsHaishanEngineering.id },
    { text: 'It records that wellpoint dewatering outside the diaphragm wall lowered groundwater and reduced lateral water pressure on the wall, but also caused soil-consolidation settlement near the work zone.', source: dortsHaishanEngineering.id },
    { text: 'Settlement points approached or exceeded warning values, and the record says uneven building settlement could cause tilting and led to public complaints, making groundwater control a documented community risk at this station.', source: dortsHaishanEngineering.id },
    { text: 'The public-art plan placed the work along both sides of the new road’s sidewalks between Mingde Road and Yumin Road, proposing paving or street furniture and participation by Haishan Vocational High School and Le-li Elementary School teachers and students.', source: dortsPublicArtPlan.id },
    { text: 'The plan reports eight submissions, two review rounds and three finalists, but the DORTS public-art overview describes the selection as student collage, so the two official records do not describe the same procurement route.', source: dortsPublicArtOverview.id },
    { text: 'The detailed production record explains that the water-pool mosaic pattern came from an in-school drawing competition, using the top three designs rather than a single artist’s image.', source: dortsHospitalParticipation.id },
    { text: 'Those three drawings were first simulated with torn coloured paper, then transferred to a wire-mesh and concrete base after it had fully cured, with the artist and craft workers completing the on-site collage.', source: dortsHospitalParticipation.id },
    { text: 'The broader underground-station method used in the Tucheng section relied on cut-and-cover box structures, diaphragm walls and a waterproofing membrane around the structural envelope.', source: dortsUndergroundStationStructure.id },
    { text: 'This combination of a technically sensitive excavation and a publicly produced surface artwork gives BL04 a documented relationship between construction risk, street repair and local school participation.', source: dortsHaishanEngineering.id },
  ],
  BL05: [
    { text: 'Far Eastern Hospital station is part of DORTS’s underground Tucheng corridor from Fuzhong toward Central Road and Chengtian Road, a route planned as four stations with the Tucheng Depot at the eastern end.', source: dortsTucheng.id },
    { text: 'The route record places the section alongside the railway, Nanya South Road, the former Gongguan ditch and Jincheng Road, describing an alignment assembled through existing urban corridors rather than a free-standing greenfield right-of-way.', source: dortsTucheng.id },
    { text: 'DORTS’s station-architecture guidance says these underground stations were designed to make entrances and ventilation structures coexist with their surroundings, while the internal passenger spaces favour plain, simple and functional treatment.', source: dortsArchitecture.id },
    { text: 'The public-art plan specifically reserved a concourse wall for Far Eastern Hospital station and asked the work to express the water imagery of the former 湳子溝 watercourse.', source: dortsPublicArtPlan.id },
    { text: 'Its procurement record reports fourteen submissions, four review rounds and three finalists before the selected work was chosen, which is more specific than a generic statement that the station has a water-themed installation.', source: dortsPublicArtPlan.id },
    { text: 'DORTS paired the station artwork with school arts education: artists and school teachers were to collaborate through the school’s Arts and Humanities curriculum rather than treating the work as an isolated commission.', source: dortsHospitalParticipation.id },
    { text: 'The stated teaching purpose was to use the station’s artistic medium to develop students’ perception and expression, then encourage self-exploration and participation through exchanges about the artwork.', source: dortsHospitalParticipation.id },
    { text: 'The general underground-station technical record describes the Tucheng and Bannan stations as long box-shaped cut-and-cover structures, with diaphragm walls chosen for stiffness, water resistance and lower noise and vibration.', source: dortsUndergroundStationStructure.id },
    { text: 'It also records that station structures are wrapped with waterproofing and that the design must account for large spans and the risk of neighbouring building movement during excavation.', source: dortsUndergroundStationStructure.id },
    { text: 'The separate CD511 track contract ran from 600 metres west of Xinpu to Yongning and covered 14.9 kilometres of mainly ballastless track, nineteen turnouts and about twenty-seven kilometres of third rail.', source: dortsCd511Track.id },
    { text: 'That package was awarded to Continental Engineering Corporation for NT$996,762,700, but DORTS identifies it as a track child contract inside CD550, not as a station construction price.', source: dortsCd511Track.id },
  ],
  BL06: [
    { text: 'DORTS describes the Banqiao Line as a 7.1-kilometre underground section with five stations, running from Ximen beneath Longshan Junior High and Peace West Road before crossing the Xindian River toward Fuzhong.', source: dortsBanqiao.id },
    { text: 'The alignment then follows Wenhua Road, cuts through the former Banqiao Brewery site and passes under residential blocks along Minquan Road before reaching the New Banqiao special district and the old railway station.', source: dortsBanqiao.id },
    { text: 'The builder records that the blue-line section was part of the original 70.3-kilometre Taipei network plan, but that the western section was changed from elevated to underground and extended to Tucheng during later planning.', source: dortsBanqiao.id },
    { text: 'DORTS’s route table identifies Fuzhong as the BL1 engineering station in the Banqiao section, while the narrative places it at the historic western end where the metro connects the old railway and later Tucheng corridor.', source: dortsBanqiao.id },
    { text: 'The station’s public-art plan used the roughly four-storey vertical void between concourse and platform as the main design opportunity, proposing hanging forms, reliefs or lighting on the walls.', source: dortsPublicArtPlan.id },
    { text: 'The plan reports eight submissions, one review round and three finalists before selecting the installed work, providing a documented procurement history for the unusually tall internal space.', source: dortsPublicArtPlan.id },
    { text: 'After installation, the artist ran two participation sessions in Hualien, one with the teachers’ college poetry society and another with local cultural and arts participants.', source: dortsFuzhongParticipation.id },
    { text: 'The first session tested the mobile-phone interaction software with students, who responded strongly to the idea of contributing through a handset while the artist demonstrated the system using a laptop and projector.', source: dortsFuzhongParticipation.id },
    { text: 'The second discussion addressed later management, the work’s meaning, its possible effect on the community and the transformation of public space, showing that the participation programme extended beyond a launch-day ceremony.', source: dortsFuzhongParticipation.id },
    { text: 'For underground stations in the Banqiao and Tucheng sections, DORTS describes long cut-and-cover box structures supported by diaphragm walls and protected by a waterproofing membrane around the structural body.', source: dortsUndergroundStationStructure.id },
    { text: 'The CD511 track package later connected the western Banqiao works into the Tucheng section, covering the route from 600 metres west of Xinpu to Yongning with 14.9 kilometres of ballastless track and nineteen turnouts.', source: dortsCd511Track.id },
    { text: 'DORTS records Continental Engineering Corporation as CD511’s contractor at NT$996,762,700, while clarifying that this was a track package nested inside CD550 rather than the civil contract value for Fuzhong station.', source: dortsCd511Track.id },
  ],
  BL07: [
    { text: 'DORTS describes the Banqiao section as an entirely underground route from Ximen through Longshan Junior High, Peace West Road, the Xindian River, Culture Road and the former Banqiao Brewery to Fuzhong.', source: dortsBanqiao.id },
    { text: 'The same account says that the original 70.3-kilometre initial network plan was later revised: the western blue-line section changed from elevated to underground and was extended toward Tucheng.', source: dortsBanqiao.id },
    { text: 'The five-station Banqiao section opened in phases, with the Ximen–Longshan segment entering service on 24 December 1999 and the Longshan–Xinpu segment on 31 August 2000.', source: dortsBanqiao.id },
    { text: 'That staging gave Longshan Temple and Xinpu an unusual interim role: DORTS says both were ordinary intermediate stations in the planned network but temporary terminals during phased opening, so their facilities were adjusted for emergency escape requirements.', source: dortsTemporaryTerminals.id },
    { text: 'DORTS records the section’s procurement as a mixture of methods: CP261–CP263 were grouped among technically difficult joint-bid works, while CP264, CP265A and CP265B used domestic main contractors with foreign technical cooperation.', source: dortsProcurementStrategy.id },
    { text: 'A later DORTS design paper for the neighbouring Y15 Banqiao station places it in the New Banqiao special district and describes a planned joint development with the intercity coach terminal, giving the district a deliberately regional transport-hub role.', source: dortsBanqiaoCircularArchitecture.id },
    { text: 'The Y15 design brief describes a two-level underground and four-level above-ground building, with the upper station volume connected to the new Banqiao station above and an architectural concept built around light, LED movement and photovoltaic curtain-wall technology.', source: dortsBanqiaoCircularArchitecture.id },
    { text: 'The same paper treats Y16, the planned Xinpu-Mingsheng station, as a separate project beside the existing Xinpu Exit 5: it describes mixed residential and commercial surroundings, a two-level underground and five-level above-ground form, and a bridge connection to the surface station building.', source: dortsBanqiaoCircularArchitecture.id },
    { text: 'For BL07 itself, DORTS’s public-art table records an open selection and presents the installation’s coloured rings as a metaphor for completed transport links around Greater Taipei, while the rings turn otherwise ordinary platform columns into part of the work through movement and interaction.', source: dortsBanqiaoPublicArt.id },
    { text: 'The section’s track work was separately procured under CP541, whose DORTS technical record describes a 12.46-kilometre underground, ballastless-track package from Ximen toward the Banqiao side and records its domestic and overseas joint-bid contract history.', source: dortsCp541Track.id },
    { text: 'The sources reviewed for this batch do not publish a BL07 station-civil contractor, final account, dated rename gazette, paid-area transfer classification or station-level depot roster; those fields remain TBC rather than being inferred from the surrounding development projects.', source: dortsBanqiao.id },
  ],
  BL08: [
    { text: 'Xinpu is one of the five underground stations in DORTS’s Banqiao section, whose alignment follows Culture Road across the Xindian River corridor and through the older and newer urban districts of Banqiao before reaching Fuzhong.', source: dortsBanqiao.id },
    { text: 'DORTS identifies CP263, the Jiangzicui station and Jiangzicui–Xinpu tunnel contract, as the earliest main construction work in the Banqiao project; the route page distinguishes that main-work date from the separately described vegetation-transfer contract.', source: dortsBanqiao.id },
    { text: 'The contractor’s project record describes the CP263 work as a shield-built underground three-level Jiangzicui station plus the tunnel toward Xinpu, about 890 metres in total, built beside older housing over a two-year period and completed in 1998.', source: dortsJiangzicuiContractor.id },
    { text: 'That record is useful for BL08 because the named contract did not stop at Jiangzicui: its title and description explicitly include the interstation tunnel reaching Xinpu, while the DORTS route table places Xinpu as engineering station BL3.', source: dortsJiangzicuiContractor.id },
    { text: 'DORTS’s technical noise study treats the Xinpu–Jiangzicui tunnel as a distinct measurement segment and says its onboard-noise spectrum was typical of the comparison used for surface and elevated sections.', source: dortsNoiseAndRiverTunnel.id },
    { text: 'The same study contrasts that result with the Jiangzicui–Longshan tunnel, where the route crosses the Xindian River and the approximately three-kilometre tunnel produced noticeably larger sound pressure above 630 hertz.', source: dortsNoiseAndRiverTunnel.id },
    { text: 'Xinpu also carried the operational burden of phased construction: DORTS’s station-planning text says it became a temporary terminal even though it was planned as an intermediate station, and its facilities were adjusted to meet emergency-escape needs during that period.', source: dortsTemporaryTerminals.id },
    { text: 'The route page records the Longshan–Xinpu opening on 31 August 2000, separating it from the earlier Ximen–Longshan opening and from the later Xinpu–Yongning opening in 2006.', source: dortsBanqiao.id },
    { text: 'A later design paper for Y16 Xinpu-Mingsheng identifies the existing Xinpu Exit 5 beside the proposed station site, describes the surrounding land use as mixed residential and commercial, and frames the connection as a response to the district’s urban and high-tech commercial role.', source: dortsBanqiaoCircularArchitecture.id },
    { text: 'The Y16 concept used a two-level underground and five-level above-ground structure, a bridge to the station building over Minsheng Road and a “spirit-light” motif for rapid urban connections; these are design records for the later neighbouring project, not a claim about BL08’s own structure.', source: dortsBanqiaoCircularArchitecture.id },
    { text: 'The full DORTS public-art table fetched for the Banqiao Line returned a station row for Banqiao but no Xinpu row; no station-specific artwork, artist, medium, cost or selection record was therefore added to BL08 from that table.', source: dortsBanqiaoPublicArt.id },
    { text: 'No fetched primary page supplied a BL08 station-civil contractor, final account, construction-era name, dated rename gazette, paid-area transfer classification or station-level depot assignment; those items remain TBC.', source: dortsBanqiao.id },
  ],
  BL09: [
    { text: 'Jiangzicui sits in the underground Banqiao section that DORTS traces from Ximen through Peace West Road and the Xindian River to Culture Road and the former Banqiao Brewery corridor.', source: dortsBanqiao.id },
    { text: 'The route page identifies CP263, signed on 29 February 1992, as the Jiangzicui station and Jiangzicui–Xinpu tunnel work and calls it the earliest main construction work in the Banqiao project.', source: dortsBanqiao.id },
    { text: 'KSECO’s own project record describes that package as a shield-built underground three-level Jiangzicui station and an approximately 890-metre station-and-tunnel work, with older housing on both sides of the alignment.', source: dortsJiangzicuiContractor.id },
    { text: 'The contractor says the work took two years and was completed in 1998 with a zero-accident record; this is the contractor’s project-history statement, not a DORTS final-account or independent safety audit.', source: dortsJiangzicuiContractor.id },
    { text: 'DORTS places CP263 among the joint-bid contracts whose technical difficulty and scale were linked to shield tunnelling beneath the Xindian River corridor, while CP264 and CP265A/B are described under a different domestic-with-foreign-technical-cooperation model.', source: dortsProcurementStrategy.id },
    { text: 'The technical noise study uses Jiangzicui as one endpoint of two different comparisons: Xinpu–Jiangzicui is treated as a typical segment, while Jiangzicui–Longshan crosses the Xindian River in a tunnel about three kilometres long.', source: dortsNoiseAndRiverTunnel.id },
    { text: 'For that river-crossing segment, DORTS records stronger onboard-noise pressure in the 630–800 hertz range and notes that speed reduction and rail grinding were effective operating responses in noisy sections.', source: dortsNoiseAndRiverTunnel.id },
    { text: 'The station-planning record also preserves the effect of staged opening on the neighbouring corridor: Xinpu and Longshan were planned intermediate stations but temporarily served as terminals, requiring adjustments for emergency escape.', source: dortsTemporaryTerminals.id },
    { text: 'The Banqiao section reached service in stages, with the Ximen–Longshan portion opening in December 1999 and the Longshan–Xinpu portion in August 2000; the later extension to Yongning opened in 2006.', source: dortsBanqiao.id },
    { text: 'DORTS’s early-network architecture guidance says underground stations prioritised compact, functional interiors while allowing individual design teams flexibility in themes, material combinations and colour plans; it cites Longshan Temple among the visible examples of that flexibility.', source: dortsArchitecture.id },
    { text: 'The fetched Banqiao public-art table records Banqiao but does not provide a Jiangzicui row, so no station-specific artwork, artist, procurement method or cost is asserted for BL09.', source: dortsBanqiaoPublicArt.id },
    { text: 'The primary material reviewed does not settle a BL09 station-civil contractor and value, a rename gazette, a paid-area transfer classification or a station-level depot roster; each remains TBC.', source: dortsBanqiao.id },
  ],
  BL10: [
    { text: 'Longshan Temple is the station embedded in DORTS’s CP261 contract, which ran 2,063 metres from the south end of Ximen along Zhonghua Road and Peace West Road to a ventilation shaft below Huajiang Bridge.', source: dortsCp261Engineering.id },
    { text: 'The CP261 scope included the station body, one ventilation shaft and one up-line and one down-line tunnel, making the station a structural divider between the two running-tunnel directions rather than a detached stop on a separate civil package.', source: dortsCp261Engineering.id },
    { text: 'DORTS says the whole CP261 tunnel used earth-pressure-balance shield machines with soil conditioning, and places the later groundwater incident at the west-line down tunnel launch face near the Peace West Road–Xiyuan Road intersection.', source: dortsCp261Engineering.id },
    { text: 'During the second stage of breaking out a one-metre launch-face wall on 28 April 1995, seepage appeared at 06:45; at 07:15 a large inflow carried muddy water and sand into the work shaft, followed by a roughly six-metre surface void and slight tilt in a nearby ten-storey building.', source: dortsCp261Incident.id },
    { text: 'The emergency response pushed the shield into a steel bulkhead, pressurised its chamber, injected water-stopping material and used surface backfill and low-pressure grouting to fill the ground voids around the neighbouring building.', source: dortsCp261Incident.id },
    { text: 'DORTS records that extra monitoring was added and the inflow was stopped by 13:00 that day; the report gives the emergency fill, chemical-injection and grouting quantities as incident-response measurements, not as a station construction cost.', source: dortsCp261Incident.id },
    { text: 'For the tilted building, the project team compared five feasible correction methods with designers and outside specialists, then selected low-pressure grouting because it was judged to have the smallest effect on the structure and residents’ daily life.', source: dortsCp261Correction.id },
    { text: 'The broader procurement record says CP261–CP263 were joint-bid works because the shield tunnels had to pass beneath the Xindian River and the projects were technically demanding and large, while it places CP264 and CP265A/B in a domestic-with-foreign-cooperation category.', source: dortsProcurementStrategy.id },
    { text: 'Longshan was also a temporary terminal during the staged opening of the Banqiao Line, even though the network plan treated it as an intermediate station; DORTS says the station facilities were adjusted for emergency escape during that phase.', source: dortsTemporaryTerminals.id },
    { text: 'The route opened from Ximen to Longshan in December 1999 and from Longshan to Xinpu in August 2000, so the station was a working western endpoint before the next Banqiao phase opened.', source: dortsBanqiao.id },
    { text: 'DORTS’s architecture guidance identifies Longshan Temple as one of the early underground stations where standardised planning still allowed a distinctive theme, material palette or colour treatment within a functional base layout.', source: dortsArchitecture.id },
    { text: 'The fetched public-art table for the Banqiao Line has no Longshan Temple row, and the reviewed primary records do not supply a station-specific artwork record, civil final account, rename gazette, paid-area transfer classification or depot roster; those fields remain TBC.', source: dortsBanqiaoPublicArt.id },
  ],
  BL11: [
    { text: 'Ximen is the existing blue-line station at the junction of the Banqiao and Songshan–Xindian systems, and the DORTS tunnel record describes its CN252 station as a three-level stacked interchange built along Zhonghua Road between Changsha Street and Luoyang Street.', source: dortsCn252Engineering.id },
    { text: 'CN252’s north end connected by shield tunnel to the CN253B west underground pedestrian plaza and the future Green Line station under Tacheng Street, while its south end connected to CN251 Xiaonanmen and the CP261 Longshan Temple tunnel.', source: dortsCn252Engineering.id },
    { text: 'The source records a 1994 construction incident after a pressure-gauge replacement drill reached 20.5 metres below the excavation face: groundwater rose through the hole, then sand-water surged from a nearby four-metre-deep sump and the excavation water level reached about 30 centimetres.', source: dortsCn252Engineering.id },
    { text: 'DORTS’s procurement history says the route through the Boai special district included sensitive government and civic buildings, so CN251 and CN252 were awarded through negotiated procurement with the Veterans Engineering Office rather than the joint-bid or technical-cooperation models used for other packages.', source: dortsProcurementStrategy.id },
    { text: 'A later technical record for the Songshan Line lists Ximen as a three-level island station and marks it as an existing station where the Green and Blue lines meet, preserving the source-era distinction between the newly built Songshan Line and the earlier station body.', source: dortsSongshanXimenEngineering.id },
    { text: 'The same later station table illustrates why Ximen required interface control: the Songshan Line had to be connected to an operating station, while other stations on that line were new multi-level structures with their own forms and transfer arrangements.', source: dortsArchitecture.id },
    { text: 'DORTS’s general interchange guidance says passenger movement is heavy at interchange stations, so platform and concourse arrangement must account for line direction, platform form and transfer-path length; Ximen is one of the examples used to explain that class of station.', source: dortsTemporaryTerminals.id },
    { text: 'The early-network architecture guidance describes the broader Nankang Line goal as fitting an underground transport system into the human and commercial environment of western and eastern Taipei, using modest surface structures and linked underground activity rather than a single monumental station style.', source: dortsArchitecture.id },
    { text: 'The Banqiao route history records the Ximen–Longshan opening on 24 December 1999 and the later extension through Longshan to Xinpu on 31 August 2000, placing Ximen at the first operating edge of the western blue-line phases.', source: dortsBanqiao.id },
    { text: 'The fetched DORTS public-art table for the Banqiao Line does not list Ximen, and the reviewed Ximen engineering and architecture pages do not provide a complete station-specific artwork record; the artwork, civil final account, rename gazette, paid-area transfer classification and station-level depot roster remain TBC.', source: dortsBanqiaoPublicArt.id },
  ],
  BL12: [
    { text: 'The CN253B package joined the Ximen–Taipei tunnel to the west underground street and was built by Pacific Construction with Shimizu Construction under DORTS supervision.', source: dortsCn253bTunnel.id },
    { text: 'DORTS describes the shield tunnel as about 822 metres from Zhonghua Road at Luoyang Street to Zhongxiao West Road at Chongqing North Road, with overlapping up and down tracks and a minimum curve radius of 200 metres.', source: dortsCn253bTunnel.id },
    { text: 'The alignment avoided the Zhongxiao elevated-road foundations and most houses but could not avoid the North Gate monument: the tunnel edge passed roughly 70 centimetres from the monument’s southeast corner at a depth of about seven metres.', source: dortsCn253bTunnel.id },
    { text: 'The same report identifies the work area as Taipei Basin Songshan Formation and says seven recognisable layers extended from the surface to about 54 metres, giving the heritage crossing a documented geological as well as geometric constraint.', source: dortsCn253bTunnel.id },
    { text: 'DORTS records a monitoring scheme around the North Gate that included settlement points, inclinometers, convergence points, shallow settlement gauges, multipoint extensometers, in-ground inclinometer tubes, electronic water-pressure gauges and support strain gauges.', source: dortsCn253bMonitoring.id },
    { text: 'The builder’s retrospective conclusion says the CN253B shield tunnel was completed without affecting the monument; that is published here as DORTS’s conclusion, not as a substitute for the underlying monitoring records.', source: dortsCn253bConclusion.id },
    { text: 'Taipei Main was selected in DORTS’s early-network public-art planning because it was an interchange, and the four-level void above the platform tracks was identified as a rare vertical focus visible to passengers transferring from the Tamsui line to the Bannan line.', source: dortsTaipeiMainArtSelection.id },
    { text: 'The design brief allowed spatial art in that void, including hanging forms or work integrated with the interlaced beams, rather than prescribing a single material or object type before the competition.', source: dortsTaipeiMainArtDesign.id },
    { text: 'DORTS set a NT$5 million ceiling for Taipei Main’s work but says the first prize was unawarded, so the programme produced no installed artwork there; the source also records unusually complicated responsibility and funding transfers between engineering offices.', source: dortsTaipeiMainArtBudget.id },
    { text: 'The following process account repeats the outcome: the Nankang Line’s four completed public-art projects were elsewhere, while Taipei Main had no work because its competition’s first prize was left vacant.', source: dortsTaipeiMainArtOutcome.id },
    { text: 'A later DORTS joint-development case describes the Taipei Main complex as a six-rail interchange and assigns the transport layers to B1, B2 and B3, including links to Taiwan Railways, the Bannan station hall and the west-side connection toward Beimen.', source: dortsTaipeiMainDevelopment.id },
    { text: 'DORTS’s noise study identifies the Taipei Main–Ximen section as a curve with a radius below 300 metres and records that the measurement was made while corrugation wear had already led to reduced-speed operation, making this a track-condition observation rather than a station specification.', source: dortsNoiseAndRiverTunnel.id },
    { text: 'The sources reviewed for BL12 do not provide a station-specific civil final account, rename gazette, complete fare-boundary classification or station-level depot roster; those fields remain TBC.', source: dortsCn253bTunnel.id },
  ],
  BL13: [
    { text: 'DORTS describes the Nangang section as an approximately 10.3-kilometre, entirely underground corridor through a dense, high-traffic urban and commercial environment, with eleven stations.', source: dortsNangang.id },
    { text: 'The same project record treats the route as an urban insertion rather than a free-standing railway: the alignment follows Zhongxiao West and East roads toward the eastern commercial district and has to coexist with important buildings and the North Gate area.', source: dortsNangang.id },
    { text: 'A technical-journal article uses a wider CN531 measurement, from Nangang Depot west through Zhongxiao East Road, Zhongxiao West Road and Zhonghua Road toward Jinhua, and reports 30.6 kilometres and twelve mainline stations.', source: dortsNangangTrack.id },
    { text: 'That wider figure describes the CN531 track package, not the eleven-station Nangang section in the route page, and DORTS records both ballasted and ballastless track within it.', source: dortsNangangTrack.id },
    { text: 'The CN531 and CP541 track works were first tendered in the ROC82 period, went through eleven failed or aborted tenders, and were awarded in ROC85 October to DeSheng together with Korean firm Wido.', source: dortsNangangTrack.id },
    { text: 'DORTS gives NT$1,309,170,114 for CN531 and NT$488,829,886 for CP541; those are line-wide track-package contract amounts, not a civil contract price for this station.', source: dortsNangangTrack.id },
    { text: 'The procurement record separates the difficult international-joint-bid packages CN253B and CN257 from CN253A, CN254 and CN256, which used domestic contractors with foreign technical cooperation.', source: dortsProcurementStrategy.id },
    { text: 'It also says CN251 and CN252 were negotiated with the Veterans Engineering Office because the alignment passed through the sensitive Boai district and beside important government and civic buildings.', source: dortsProcurementStrategy.id },
    { text: 'DORTS’s architecture guidance gives the wider Nankang Line a restrained surface presence, linked underground activity and public art used as urban landmarks, rather than a repeated monumental station form.', source: dortsArchitecture.id },
    { text: 'The public-art planning chapter names Taipei Main, City Hall, Kunyang and Zhongxiao Dunhua as selected locations for special urban or spatial reasons, but it does not provide a BL13-specific artwork procurement record.', source: dortsNangangArtPlanning.id },
    { text: 'The flood-engineering material records a post-Nari revision that increased the design freeboard from 0.5 metre to 1.1 metres, a network design standard rather than a passenger-service specification.', source: dortsNangangFloodResponse.id },
    { text: 'The same source family warns that DORTS engineering-era station identifiers do not align directly with TRTC operating codes, so the historical flood tables are not mapped here to a current BL13 station value.', source: dortsNangangFloodResponse.id },
    { text: 'The fetched primary pages do not settle this station’s civil contractor and final account, construction-era name or rename gazette, paid-area transfer classification, complete artwork record or station-level depot roster; each remains TBC.', source: dortsNangang.id },
  ],
  BL14: [
    { text: 'Zhongxiao Xinsheng belongs to DORTS’s all-underground Nangang corridor, planned along the Zhongxiao East and West Road urban spine through a dense commercial district.', source: dortsNangang.id },
    { text: 'DORTS describes the section as approximately 10.3 kilometres with eleven stations, while its wider technical track history uses a 30.6-kilometre CN531 scope and twelve mainline stations.', source: dortsNangang.id },
    { text: 'Those figures describe different published scopes: the first is the route-page Nangang section and the second is the track-contract alignment, so neither is presented as this station’s individual length.', source: dortsNangangTrack.id },
    { text: 'The CN531/CP541 track procurement reached award only after eleven failed or aborted tenders, with the ROC85 October award going to DeSheng and Korean Wido.', source: dortsNangangTrack.id },
    { text: 'The published amounts were NT$1,309,170,114 for CN531 and NT$488,829,886 for CP541, which measure line-wide track works rather than the station’s civil construction.', source: dortsNangangTrack.id },
    { text: 'The procurement strategy identifies CN253A, CN254 and CN256 as domestic-led packages with foreign technical cooperation, while CN253B and CN257 used international joint bidding.', source: dortsProcurementStrategy.id },
    { text: 'DORTS’s explanation ties those different models to technical difficulty, project scale and the need to work around dense or politically sensitive urban areas, not to station fare or passenger classifications.', source: dortsProcurementStrategy.id },
    { text: 'The architecture record frames the Nankang Line as a system that reduces surface mass and carries commercial activity underground, leaving station-specific expression to local design and public-art opportunities.', source: dortsArchitecture.id },
    { text: 'The public-art planning source records a selective programme for special stations and locations, including City Hall, Kunyang and Zhongxiao Dunhua, but gives no BL14 artwork entry that can be safely attached to this page.', source: dortsNangangArtPlanning.id },
    { text: 'The flood-review record revised the post-Nari freeboard requirement from 0.5 metre to 1.1 metres and tabulated design flood levels and actual protection heights for engineering review.', source: dortsNangangFloodResponse.id },
    { text: 'That table uses historical DORTS engineering labels that the source itself distinguishes from TRTC’s operating-code system, so its row values are not silently reassigned to today’s station identity.', source: dortsNangangFloodResponse.id },
    { text: 'No fetched primary record settles a station-specific civil contractor, final account, construction-era name or rename gazette, paid-area transfer classification, complete public-art record or depot roster; those fields remain TBC.', source: dortsNangang.id },
  ],
  BL15: [
    { text: 'Zhongxiao Fuxing sits on the underground Nangang corridor whose route record describes an approximately 10.3-kilometre, eleven-station extension through the Zhongxiao East Road commercial spine.', source: dortsNangang.id },
    { text: 'The technical track history reports a wider CN531 scope of 30.6 kilometres and twelve mainline stations, with mixed ballasted and ballastless track, so that measurement is kept distinct from the route-page section length.', source: dortsNangangTrack.id },
    { text: 'CN531 and CP541 were awarded after eleven failed or aborted tenders; DORTS identifies DeSheng and Korean Wido as the ROC85 October awardees.', source: dortsNangangTrack.id },
    { text: 'The recorded contract amounts, NT$1,309,170,114 for CN531 and NT$488,829,886 for CP541, are systems track-package values and do not establish BL15’s civil station cost.', source: dortsNangangTrack.id },
    { text: 'DORTS’s procurement strategy describes CN253A, CN254 and CN256 as domestic contracts supported by foreign technical cooperation, in contrast to the international joint-bid model for CN253B and CN257.', source: dortsProcurementStrategy.id },
    { text: 'The Zhongxiao Fuxing joint-development record concerns the交4 and交10 sites, not a station civil tender: it measures the site at 7,691 square metres and records a commercial zoning change dated ROC86 September 9.', source: dortsZhongxiaoFuxingDevelopment.id },
    { text: 'That plan placed floors one through three in a co-constructed development with the Wenhu Line and basements B1 through B3 in a co-constructed arrangement with Bannan entrances and ventilation facilities.', source: dortsZhongxiaoFuxingDevelopment.id },
    { text: 'DORTS records the development plan announcement in ROC86 November, investor solicitation in ROC88 March, investment contract in ROC89 January and building completion in ROC95 November.', source: dortsZhongxiaoFuxingDevelopment.id },
    { text: 'The same record describes retail and commercial programming, making it evidence for the station’s joint-development context rather than proof of a particular operator, tenant or paid-area walking distance.', source: dortsZhongxiaoFuxingDevelopment.id },
    { text: 'The public-art planning chapter lists other Nankang locations as selected because of their urban importance or unusual spatial conditions; it does not turn that list into an absence claim about BL15.', source: dortsNangangArtPlanning.id },
    { text: 'The flood-engineering source records the post-Nari freeboard revision from 0.5 metre to 1.1 metres and cautions that DORTS historical station identifiers do not map one-for-one to TRTC operating codes.', source: dortsNangangFloodResponse.id },
    { text: 'The reviewed primary material still does not establish BL15’s station-civil contractor, final account, construction-era name or rename gazette, paid-area transfer classification, full public-art record or station-level depot roster; those fields remain TBC.', source: dortsNangang.id },
  ],
  BL16: [
    { text: 'Zhongxiao Dunhua was planned as part of DORTS’s all-underground Nangang corridor, where the line was fitted into a dense commercial environment and linked to underground pedestrian activity.', source: dortsNangang.id },
    { text: 'The route page measures the Nangang section at approximately 10.3 kilometres and eleven stations, while the track journal’s wider CN531 scope measures 30.6 kilometres and twelve mainline stations with both ballasted and ballastless track.', source: dortsNangangTrack.id },
    { text: 'DORTS records eleven failed or aborted tenders before the CN531/CP541 track award in ROC85 October to DeSheng and Korean Wido.', source: dortsNangangTrack.id },
    { text: 'The two published contract amounts, NT$1,309,170,114 for CN531 and NT$488,829,886 for CP541, are line-wide track values and not a station civil price.', source: dortsNangangTrack.id },
    { text: 'The public-art planning record selected Zhongxiao Dunhua because it was an important urban node and paired the station with a pedestrian plaza and two ventilation structures.', source: dortsNangangArtPlanning.id },
    { text: 'DORTS set the public-art ceiling for this ventilation-structure programme at the planning stage and says the first-prize design was paid NT$500,000, with the remaining construction carried out by the original contractor through design change.', source: dortsNangangArtBudget.id },
    { text: 'The selection process included a public exhibition at Mingyao department store from 8 to 16 November in ROC86 and received 671 valid questionnaires.', source: dortsZhongxiaoDunhuaArtProcess.id },
    { text: 'DORTS records three finalists, including 樹河, and identifies 蔡淑瑩’s design as the selected work after the public-facing process.', source: dortsZhongxiaoDunhuaArtProcess.id },
    { text: 'The builder’s current artwork page gives the installed work a January 2000 completion date, public-selection method, two ventilation structures on the Zhongxiao–Dunhua traffic island and an approximately NT$43 million work cost plus the NT$500,000 first-prize award.', source: art.bl16.id },
    { text: 'The planning ceiling and the later artwork-page cost are different measures: one is a programme-stage funding limit for the ventilation treatment, while the other is the published installed-work expenditure.', source: dortsNangangArtBudget.id },
    { text: 'DORTS’s flood record revises the post-Nari design freeboard from 0.5 metre to 1.1 metres, while its historical engineering identifiers are explicitly not interchangeable with current TRTC operating codes.', source: dortsNangangFloodResponse.id },
    { text: 'The primary records reviewed do not settle a station-civil contractor and final account, rename gazette, paid-area transfer classification or station-level depot roster; those fields remain TBC.', source: dortsNangang.id },
  ],
  BL17: [
    { text: 'Sun Yat-Sen Memorial Hall is one of the stations in DORTS’s all-underground Nangang section, an approximately 10.3-kilometre route through a dense and heavily trafficked commercial corridor.', source: dortsNangang.id },
    { text: 'The wider CN531 track history measures 30.6 kilometres and twelve mainline stations and records a mixture of ballasted and ballastless track, which is a contract scope rather than this station’s own length.', source: dortsNangangTrack.id },
    { text: 'CN531 and CP541 passed through eleven failed or aborted tenders before DORTS awarded them in ROC85 October to DeSheng and Korean Wido.', source: dortsNangangTrack.id },
    { text: 'Their published values, NT$1,309,170,114 and NT$488,829,886 respectively, measure line-wide track packages, not BL17’s station civil construction.', source: dortsNangangTrack.id },
    { text: 'The procurement strategy distinguishes international joint bidding for CN253B and CN257 from domestic contracts with foreign technical cooperation for CN253A, CN254 and CN256.', source: dortsProcurementStrategy.id },
    { text: 'DORTS’s tunnel-engineering text identifies Sun Yat-Sen Memorial Hall and City Hall as examples of sequential cut-and-cover construction with struts, in contrast to the reverse-method examples named elsewhere in the same passage.', source: dortsNangangCutCover.id },
    { text: 'That classification describes a construction method at the station level, but the fetched passage does not give BL17’s station contractor, contract value, excavation dimensions or final account.', source: dortsNangangCutCover.id },
    { text: 'The Nankang architecture guidance emphasises restrained surface structures and underground links to surrounding commercial activity, treating public art as a way to create landmarks without enlarging the transport buildings.', source: dortsArchitecture.id },
    { text: 'The public-art planning source names City Hall, Kunyang and Zhongxiao Dunhua among the selected Nankang locations, but does not supply a BL17-specific artwork record in the material fetched for this batch.', source: dortsNangangArtPlanning.id },
    { text: 'The flood-design source records a post-Nari increase in freeboard from 0.5 metre to 1.1 metres and distinguishes DORTS’s historical engineering station labels from TRTC’s operating-code labels.', source: dortsNangangFloodResponse.id },
    { text: 'That source distinction prevents the engineering table from being used as an unqualified current station-value lookup, so no historical flood number is silently attached to BL17 here.', source: dortsNangangFloodResponse.id },
    { text: 'The reviewed primary material does not settle a BL17 civil contractor and final account, construction-era name or rename gazette, paid-area transfer classification, complete public-art record or station-level depot roster; those fields remain TBC.', source: dortsNangang.id },
  ],
  BL18: [
    { text: 'Taipei City Hall is part of DORTS’s all-underground Nangang corridor, whose route page describes an approximately 10.3-kilometre, eleven-station section through a dense commercial and high-traffic environment.', source: dortsNangang.id },
    { text: 'The wider CN531 track article instead measures 30.6 kilometres and twelve mainline stations from the Nangang Depot side westward, with both ballasted and ballastless track, so the two figures are retained as different published scopes.', source: dortsNangangTrack.id },
    { text: 'CN531 and CP541 reached award in ROC85 October only after eleven failed or aborted tenders; DORTS names DeSheng and Korean Wido as the award team.', source: dortsNangangTrack.id },
    { text: 'The published CN531 and CP541 values, NT$1,309,170,114 and NT$488,829,886, are track-package amounts and do not establish the City Hall station civil price.', source: dortsNangangTrack.id },
    { text: 'A DORTS geotechnical case records a City Hall-area CN256/CN257 shield tunnel stopping near a Keelung Road vehicle underpass because the remaining work could have interacted with the underpass schedule and caused uplift or alignment risk.', source: dortsNangangCityHallTunnel.id },
    { text: 'The case reports roughly 50 metres of unfinished tunnel and only about 20 centimetres of clearance to the underpass bottom, then says three alternatives were put out to public tender.', source: dortsNangangCityHallTunnel.id },
    { text: 'The fetched passage does not identify which alternative was ultimately selected, so the construction outcome is not inferred from the existence of the tender.', source: dortsNangangCityHallTunnel.id },
    { text: 'DORTS’s tunnel text separately identifies City Hall as a sequential cut-and-cover station built with struts, a method description that does not supply a station civil contractor or final account.', source: dortsNangangCutCover.id },
    { text: 'The public-art planning record selected City Hall because of its geographic importance and unusual platform form, and treated an underground void as a focal space for the work.', source: dortsNangangArtPlanning.id },
    { text: 'The planning budget set a NT$3 million ceiling for City Hall’s public art, while the current artwork record publishes 成長 as an open-selection work completed in November 1999 with a published cost of NT$2,960,000.', source: dortsNangangArtBudget.id },
    { text: 'Those figures are not a conflict in the same measurement: the first is a planning ceiling and the second is the later artwork record’s stated expenditure.', source: art.bl18.id },
    { text: 'DORTS’s flood material records the post-Nari freeboard revision from 0.5 metre to 1.1 metres and warns that historical engineering labels differ from TRTC operating codes, so no unqualified flood-table row is mapped to current BL18.', source: dortsNangangFloodResponse.id },
    { text: 'The reviewed primary material does not settle the station’s civil contractor and final account, a rename gazette, paid-area transfer classification or station-level depot roster; those fields remain TBC.', source: dortsNangang.id },
  ],
  BL21: [
    { text: 'DORTS makes BL21’s interactive carousel a pause in the city: approaching passengers trigger wooden-horse silhouettes and music, turning train movements into rotation and briefly shifting commuters from urban haste into an imagined amusement park.', source: art.bl21.id },
  ],
  BL22: [
    { text: 'The work treats Nangang’s platform as a contemporary transfer wharf, pairing a boat, tea, osmanthus and coal with memories of the old agricultural-and-mineral export port.', source: art.bl22.id },
  ],
  BL23: [
    { text: 'DORTS uses crowd movement and programmed light to make the three walls a story of speed, time, urban change and human history, linking station and city as a moving hypertext.', source: art.bl23.id },
    { text: 'Its companion 快或慢 responds to walkers with chase, escape and sliding light modes, contrasting rapid social change with slower cooperation and the continuity of history, culture and agriculture.', source: art.bl23.id },
  ],
}

function makeResearch(code: string, data: BLData): StationResearch {
  const stationSource = trtcStation(code)
  const designSource = data.designSource
  const publicArtSource = data.publicArtSource
  const sources = [stationSource, data.route, dortsArchitecture, ...(designSource ? [designSource] : []), ...(publicArtSource ? [publicArtSource] : []), ...(data.proseSources ?? [])]
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
