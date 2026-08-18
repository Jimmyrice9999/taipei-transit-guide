/**
 * Local station facts that TDX does not publish.
 *
 * TDX gives codes, names, sequence and coordinates. It does not say whether a
 * station is elevated or underground, and that distinction is drawn on the strip
 * map. So it lives here, merged on top of the generated data.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * THIS FILE IS HAND-MAINTAINED AND IS NEVER OVERWRITTEN.
 *
 * `npm run stations` regenerates lib/stations.generated.ts from data/tdx/, then
 * applies this overlay. Refetching official data therefore cannot destroy local
 * research, and local research cannot silently contradict official data — the
 * generator reports any overlay entry whose station TDX does not recognise.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { StationResearch } from './station-research.ts'
import type { Source } from './sources.ts'
import { ANKENG_OVERLAY } from './ankeng-stations.ts'
import { AIRPORT_MRT_OVERLAY } from './airport-mrt-stations.ts'
import { BANNAN_OVERLAY } from './bannan-stations.ts'
import { CIRCULAR_OVERLAY } from './circular-stations.ts'
import { DANHAI_OVERLAY } from './danhai-stations.ts'
import { SONGSHAN_XINDIAN_OVERLAY } from './songshan-xindian-stations.ts'
import { TAMSUI_XINYI_OVERLAY } from './tamsui-xinyi-stations.ts'
import { ZHONGHE_XINLU_OVERLAY } from './zhonghe-xinlu-stations.ts'

export type Structure = 'elevated' | 'at-grade' | 'underground' | 'unknown'

export type StationProseSentence = {
  /** One complete body sentence; the renderer places its citation immediately after it. */
  text: string
  /** Source id for this sentence. */
  source: string
}

export type StationOverlay = {
  structure?: Structure
  /**
   * The construction-project number (工程編號), where the builder published one.
   *
   * Not the operating code and frequently not even in the same direction — see
   * the note below. Held here rather than derived, because it is a fact about a
   * contract drawing rather than anything computable from the running order.
   */
  engineering?: string
  /** Street exits, as counted by the builder's own station table. */
  exits?: number
  /** The operator's station-position description, when it is not a postal address. */
  location?: string
  /** Source id for the station-position description. */
  locationSource?: string
  /** Sources used by the generated station page. */
  sources?: Source[]
  /** Station-specific body prose; each sentence must carry its own source id. */
  prose?: StationProseSentence[]
  /** Hand-researched station record, where the generated data is too thin. */
  research?: StationResearch
  /**
   * Lines that will serve this station but do not yet, keyed by the future
   * line's own name rather than a station code — the code does not exist.
   *
   * A planned interchange is real information and it is not an interchange. It
   * renders unfilled and worded differently, never as a coloured pill: someone
   * planning a journey today must not read it as something they can use.
   *
   * The citation travels in the record rather than as a source id, because
   * station pages are generated from this registry and have no `sources:`
   * frontmatter to resolve an id against. A claim about the future with no
   * source attached is the one kind this site must not make.
   */
  planned?: {
    line: string
    note: string
    /** Publisher and title, rendered as the link text. */
    sourceTitle: string
    sourceUrl: string
  }[]
  /** Why a value is what it is, where that is not obvious. Not rendered. */
  note?: string
}

const DORTS_WENHU_PROJECT: Source = {
  id: 'dorts-wenhu-project-stations',
  title: 'Wenhu Line project and station table',
  titleOriginal: '文山內湖線',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://www.dorts.gov.taipei/cp.aspx?n=DBAC040496EFAB94',
  accessed: '2026-08-17',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full project record supports the Neihu extension’s departure from Zhongshan Junior High tail tracks, its route toward Songshan Airport, and the airport-station siting decision. The original-language wording was checked on the linked page: the paragraph beginning 內湖線為銜接木柵線 and the sentence beginning 經評估以捷運內湖線於松山機場增設車站.',
}

const DORTS_WENHU_ARCHITECTURE: Source = {
  id: 'dorts-wenhu-station-architecture',
  title: 'Wenhu Line station architecture',
  titleOriginal: '車站建築設計',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://www.dorts.gov.taipei/cp.aspx?n=980C85299DA2890A&s=6B0F524CA1EB5C9F',
  accessed: '2026-08-17',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full architecture record explains the Muzha-section constraints illustrated by Zhongshan Junior High, identifies Dazhi as the Neihu section’s underground station, and documents the special station design treatment. The original-language wording was checked on the linked page: the paragraph beginning 文湖線初期路線(木柵段) and the sentence beginning 除大直站為地下車站外.',
}

const DORTS_WENHU_PUBLIC_ART: Source = {
  id: 'dorts-wenhu-public-art-table',
  title: 'Wenhu Line public-art table',
  titleOriginal: '公共藝術總表',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://www.dorts.gov.taipei/cp.aspx?n=EF3512A90C6BCFD2&s=E45C77C5F722B310',
  accessed: '2026-08-17',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full official table supports the Wenhu entries for Songshan Airport, Jiannan Road, Xihu, Gangqian, Wende, Dahu Park, Donghu and Nangang Exhibition Center, including completion dates, locations, titles, authors, descriptions and selection methods. The original-language rows were checked on the linked page.',
}

const DORTS_NANGANG_ARCHITECTURE: Source = {
  id: 'dorts-nangang-exhibition-architecture',
  title: 'Nangang Exhibition Center Station architecture',
  titleOriginal: '南港展覽館站',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://www.dorts.gov.taipei/cp.aspx?n=980C85299DA2890A&s=30FCACCAB334BFA2',
  accessed: '2026-08-17',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full station architecture record supports the station’s technology-park context, its digital-space theme, its dawn-blue palette, its light and transparent materials, and its barcode imagery. The original-language paragraphs were checked on the linked page.',
}

const DORTS_WENHU_HIGH_RISE_PACKAGES: Source = {
  id: 'dorts-wenhu-high-rise-design-packages',
  title: 'High-elevated station architectural design: station packages',
  titleOriginal: '捷運高架車站建築造型設計',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page75.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full page identifies the four Muzha-section station-architecture packages and lists the engineering-era station numbers and platform lengths for the six stations in this batch. The original-language paragraph beginning 文湖線木柵段分為四個設計標 was checked on the linked page.',
}

const DORTS_WENHU_HIGH_RISE_DESIGN: Source = {
  id: 'dorts-wenhu-high-rise-design-constraints',
  title: 'High-elevated station architectural design: design constraints',
  titleOriginal: '捷運高架車站建築造型設計',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page76.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full page describes the road-centre and single-column station forms, the route’s urban constraints, and the use of systematised, modular and standardised design for the twelve-station Muzha section. The original-language paragraphs beginning 車站型式 and 木柵線全線12座車站 were checked on the linked page.',
}

const DORTS_WENHU_HIGH_RISE_ROUTE: Source = {
  id: 'dorts-wenhu-high-rise-route-history',
  title: 'High-elevated station architectural design: alignment history',
  titleOriginal: '捷運高架車站建築造型設計',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page78.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full page records the proposed Dunhua alignment, its change to Fuxing South and North Roads, and the design pressures of narrow streets and dense commercial and residential frontage. The original-language paragraphs beginning 原規劃路線 and 由於敦化南北路 were checked on the linked page.',
}

const DORTS_WENHU_HIGH_RISE_MATERIALS: Source = {
  id: 'dorts-wenhu-high-rise-materials',
  title: 'High-elevated station architectural design: materials and public response',
  titleOriginal: '捷運高架車站建築造型設計',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page80.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full page describes the Muzha section’s aluminium-panel, laminated-glass, curved-roof and frame vocabulary, and records the author’s criticism that the final details did not achieve the intended lightweight transparency. The original-language paragraphs beginning 木柵線車站外觀 and 原設計理念 were checked on the linked page.',
}

const DORTS_WENHU_HIGH_RISE_COLOUR: Source = {
  id: 'dorts-wenhu-high-rise-colour',
  title: 'High-elevated station architectural design: colour and platform-edge treatment',
  titleOriginal: '捷運高架車站建築造型設計',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page82.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full page records the Muzha section’s light-blue base colour and discusses platform-edge railings, adjacent-building privacy, weather exposure and the later Neihu response. The original-language paragraphs beginning 木柵段車站基本色 and 月臺邊緣欄杆 were checked on the linked page.',
}

const DORTS_WENHU_OPENING_HISTORY: Source = {
  id: 'dorts-wenhu-opening-history',
  title: 'High-elevated station architectural design: opening and landscape history',
  titleOriginal: '捷運高架車站建築造型設計',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page83.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full page records the landscape-restoration arrangement, the 28 March 1996 opening, the first-day ridership figure and the Muzha section’s role as the system’s first driverless medium-capacity line. The original-language paragraphs beginning 木柵線沿線景觀 and 木柵線於民國85年3月28日 were checked on the linked page.',
}

const DORTS_WENHU_HIGH_RISE_FORM: Source = {
  id: 'dorts-wenhu-high-rise-form',
  title: 'High-elevated station architectural design: station form',
  titleOriginal: '捷運高架車站建築造型設計',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page84.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full page describes Muzha-section elevated side-platform stations, platform doors, the absence of air-conditioning, curved metal-composite roofs, metal-and-glass envelopes and transparent lifts. The original-language paragraph beginning 木柵段車站均為高架側式月臺 was checked on the linked page.',
}

const DORTS_WENHU_TECHNICAL_CONTRACTS: Source = {
  id: 'dorts-wenhu-technical-contract-structure',
  title: 'Muzha Line construction and operating contract structure',
  titleOriginal: '臺北市中運量捷運系統木柵線工程建設概況',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/ebook/no15/files/basic-html/page35.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full technical-journal page describes the division between system turnkey work, domestic civil and architecture work, and operation contracts, including the A, B and C contract structure. The original-language paragraphs beginning 木柵線工程合約 and 土木建築工程 were checked on the linked page.',
}

const DORTS_WENHU_TECHNICAL_RUBBER_TYRE: Source = {
  id: 'dorts-wenhu-technical-rubber-tyre',
  title: 'Wenhu Line rubber-tyre guideway system',
  titleOriginal: '臺北捷運文湖線膠輪系統之軌道工程',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/JRTST/ebook/no39/files/basic-html/page9.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full technical-journal page describes the Muzha section as a rubber-tyre system, its concrete running surface, its elevated and tunnel portions, and the Fuzhou Mountain-area tunnel wording. The original-language paragraph beginning 木柵線採用膠輪系統 was checked on the linked page.',
}

const DORTS_WENHU_TECHNICAL_RUNNING_SURFACE: Source = {
  id: 'dorts-wenhu-technical-running-surface',
  title: 'Wenhu Line concrete running-surface maintenance',
  titleOriginal: '文湖線膠輪混凝土軌道面維修實務',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/JRTST/ebook/no39/files/basic-html/page252.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full technical-journal page records the Muzha section’s concrete running-surface dimensions, early spalling, cracking, roughness and noise problems, and the repair method and maintenance-cost comparison. The original-language paragraphs beginning 木柵線膠輪軌道面 and 維修工法 were checked on the linked page.',
}

const DORTS_WENHU_STATION_RISK: Source = {
  id: 'dorts-wenhu-station-risk-cases',
  title: 'Rapid-transit joint-development risk cases',
  titleOriginal: '捷運土地開發風險管理案例',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/JRTST/ebook/no45/files/basic-html/page143.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full technical-journal page records a falling safety net from the Muzha joint-development site that delayed a train, and the Wanfang Community joint-development noise case that led to airtight-window requirements and a later DORTS control procedure. The original-language entries beginning 木柵線木柵站聯開工程 and 文湖線萬芳社區聯合開發大樓噪音案 were checked on the linked page.',
}

const DORTS_WENHU_DEVELOPMENT: Source = {
  id: 'dorts-wenhu-land-development-stations',
  title: 'Wenhu Line completed land-development sites',
  titleOriginal: '捷運土地開發實務',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/ebook/no19/files/basic-html/page124.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full land-development volume records the investors, locations, completion dates, building forms and Taipei City property shares for the Wanfang Community, Muzha and Linguang development sites. The original-language entries beginning 萬芳社區站（交十二）, 木柵站（交十三） and 麟光站（交九） were checked on the linked page.',
}

const DORTS_WENHU_XINHAI_DEVELOPMENT: Source = {
  id: 'dorts-wenhu-xinhai-land-development',
  title: 'Xinhai station land-development site',
  titleOriginal: '捷運土地開發實務',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/ebook/no19/files/basic-html/page126.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full land-development volume records the Xinhai development site’s investor, location, completion date, building programme and Taipei City property share. The original-language entry beginning 辛亥站（交十） was checked on the linked page.',
}

const DORTS_WENHU_DEVELOPMENT_INTERFACE: Source = {
  id: 'dorts-wenhu-development-interface',
  title: 'Basic design of rapid-transit development buildings',
  titleOriginal: '捷運開發大樓基本設計概要',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/ebook/no18/files/basic-html/page59.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full page distinguishes co-constructed and separately constructed development buildings and names the Wanfang Community station site as a separate-structure example, including the construction-sequencing and worksite-safety implications. The original-language paragraph beginning 分構案例如 was checked on the linked page.',
}

const TAIPEI_LAW_WENHU_COST: Source = {
  id: 'taipei-law-wenhu-cost-record',
  title: 'Taipei rapid-transit property-cost record',
  titleOriginal: '臺北市政府捷運工程局辦理臺北都會區大眾捷運系統財產列計注意事項',
  publisher: 'Taipei City Legal Affairs Department',
  url: 'https://www.laws.taipei.gov.tw/Law/LawSearch/LawArticleContent/FL013179?date=20060227',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full official legal-system page reproduces DORTS’s cost-allocation example for CC409 and its table of joint-development deductions for BR2, BR5 and BR6. The original-language table beginning 聯合開發應予扣除之費用 was checked on the linked page.',
}

const DORTS_WENHU_LAND_DEVELOPMENT_GENERAL: Source = {
  id: 'dorts-wenhu-land-development-general',
  title: 'Completed Wenhu Line land-development bases',
  titleOriginal: '捷運土地開發實務',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/ebook/no19/files/basic-html/page122.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full page records the completed Wenhu land-development list and the Technology Building and Daan development bases, including investors, locations, completion dates, building levels and Taipei City property shares. The original-language entries beginning 科技大樓站（交七） and 大安站（交六） were checked on the linked page.',
}

const DORTS_WENHU_ZHONGXIAO_DEVELOPMENT: Source = {
  id: 'dorts-wenhu-zhongxiao-development',
  title: 'Zhongxiao Fuxing joint-development project',
  titleOriginal: '捷運開發大樓基本設計概要',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/ebook/no18/files/basic-html/page110.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full page records the Zhongxiao Fuxing development site, its land-use planning, contract and completion milestones, and the co-construction relationship between the Wenhu and Bannan facilities. The original-language section beginning 初期路網忠孝復興站交4、交10 was checked on the linked page.',
}

const DORTS_WENHU_DEVELOPMENT_MANAGEMENT: Source = {
  id: 'dorts-wenhu-development-management',
  title: 'Joint-development management at Zhongxiao Fuxing',
  titleOriginal: '捷運土地開發實務',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/ebook/no19/files/basic-html/page115.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full page records the unified-management model for the Zhongxiao Fuxing development, its investor proposal and investment-contract dates, the building-floor correction, and the city’s continuing property and management concerns. The original-language paragraphs beginning 目前捷運開發基地 and 忠孝復興站（BR4）開發大樓 were checked on the linked page.',
}

const DORTS_WENHU_TRANSFER_PLANNING: Source = {
  id: 'dorts-wenhu-transfer-planning',
  title: 'Rapid-transit station planning and transfer forms',
  titleOriginal: '捷運車站規劃與設計實務',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page37.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full page classifies Nanjing Fuxing, Zhongxiao Fuxing and Daan as central interchange stations and explains that non-parallel interchanges require vertical circulation between platforms at different levels. The original-language paragraphs beginning 南京復興站（文湖線及松山新店線交會） were checked on the linked page.',
}

const TRTC_WENHU_OPERATIONS: Source = {
  id: 'trtc-wenhu-operational-log',
  title: 'Taipei Metro operational information',
  titleOriginal: '臺北捷運營運資訊',
  publisher: 'Taipei Rapid Transit Corporation',
  url: 'https://ssl.metro.taipei/metrooperation/',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full live operational table checked on 18 August 2026 records the BR10 signalling event of 2 August, the BR10 passenger medical emergency of 5 August, and the BR12 dropped-object and train-equipment events. The original-language rows were checked on the linked page; this is a time-stamped operational log, not a complete retrospective incident register.',
}

const TRTC_WENHU_BR09_STATION: Source = {
  id: 'trtc-wenhu-br09-station',
  title: 'Daan station information',
  titleOriginal: '大安站車站資訊',
  publisher: 'Taipei Rapid Transit Corporation',
  url: 'https://web.metro.taipei/pages2026/WebStation/011/1',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full current station page supports Daan’s Wenhu/Tamsui-Xinyi interchange, the separate line addresses and the exit descriptions. The labelled station and interchange sections were checked on the linked page.',
}

const TRTC_WENHU_BR10_STATION: Source = {
  id: 'trtc-wenhu-br10-station',
  title: 'Zhongxiao Fuxing station information',
  titleOriginal: '忠孝復興站車站資訊',
  publisher: 'Taipei Rapid Transit Corporation',
  url: 'https://web.metro.taipei/pages2026/WebStation/010/1',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full current station page supports the Wenhu/Bannan interchange, the transfer-corridor location near Exit 2 and the station’s SOGO exit context. The labelled station, facility and exit sections were checked on the linked page.',
}

const TRTC_WENHU_BR11_STATION: Source = {
  id: 'trtc-wenhu-br11-station',
  title: 'Nanjing Fuxing station information',
  titleOriginal: '南京復興站車站資訊',
  publisher: 'Taipei Rapid Transit Corporation',
  url: 'https://web.metro.taipei/pages2026/WebStation/009/1',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full current station page supports the Wenhu/Songshan-Xindian interchange and the paid-area transfer lift next to the gates. The labelled station, facility and exit sections were checked on the linked page.',
}

const DORTS_WENHU_NEIHU_ARCHITECTURE: Source = {
  id: 'dorts-wenhu-neihu-architecture-overview',
  title: 'Neihu Line station architecture overview',
  titleOriginal: '捷運車站規劃與設計實務',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page141.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full page distinguishes Songshan Airport and Dazhi as the two underground Neihu Line stations, describes the airport station’s flight-themed entrance form, and explains the elevated section’s environmental and humanistic design vocabulary. The original-language paragraphs beginning 內湖線為木柵線之延伸 and 松山機場站位於機場航站前方 were checked on the linked page.',
}

const DORTS_WENHU_NEIHU_PUBLIC_ART_PROCESS: Source = {
  id: 'dorts-wenhu-neihu-public-art-process',
  title: 'Neihu Line public-art selection and implementation',
  titleOriginal: '捷運車站規劃與設計實務',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page257.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full page lists the Neihu station design-topic summary, records the executed-artwork selection methods, explains the later donated Gangqian work, and states how DORTS handled selection, material subsidy and implementation. The original-language paragraphs beginning 各站公共藝術之設置地點及徵選方式 and 港墘站之作品為捐贈 were checked on the linked page.',
}

const DORTS_WENHU_CB420_AIRPORT_TUNNEL: Source = {
  id: 'dorts-wenhu-cb420-airport-tunnel',
  title: 'CB420 shield tunnels beneath Songshan Airport',
  titleOriginal: '內湖線 CB420 標潛盾隧道穿越松山機場自動及人工監測系統應用',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/JRTST/ebook/no32/files/basic-html/page100.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full technical-journal article supports the CB420 scope from Songshan Airport to Dazhi, the shield-tunnel lengths and dates, cover depths, K1 lake-deposit geology, and the automatic and night-time manual monitoring required by airport operations. The original-language paragraphs beginning 捷運內湖線 CB420 區段標之工程範圍 and 在地質狀況方面 were checked on the linked page.',
}

const DORTS_WENHU_NEIHU_CONSTRUCTION_METHOD: Source = {
  id: 'dorts-wenhu-neihu-construction-method',
  title: 'Neihu Line construction method and traffic-maintenance context',
  titleOriginal: '捷運技術 第40期',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/JRTST/ebook/no40/files/basic-html/page47.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full technical-journal article says the two underground station bodies used cut-and-cover while the interstation sections used shield tunnels, and places the line’s route and CB410–CB430 section context. The original-language paragraph beginning 地下車站僅車站站體區 was checked on the linked page.',
}

const DORTS_WENHU_CB423_SCOPE: Source = {
  id: 'dorts-wenhu-cb423-scope',
  title: 'CB423 station and viaduct contract scope',
  titleOriginal: '捷運高架橋梁結構設計與施工',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/ebook/no32/files/basic-html/page22.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full technical volume’s work-scope table assigns B2–B5 stations and the connecting elevated bridge to CB423 under design package DB145. The original-language table beginning 文湖線內湖段各施工標工作範圍 was checked on the linked page.',
}

const DORTS_WENHU_CB423_STATIONS: Source = {
  id: 'dorts-wenhu-cb423-stations',
  title: 'CB423 station structures and sites',
  titleOriginal: '捷運高架橋梁結構設計與施工',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/ebook/no32/files/basic-html/page23.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full technical volume gives B2 as the first Neihu elevated station, gives the B2–B5 station orientations, platform forms and dimensions, the Xihu market and parking-site interface, and the CB423 bridge methods and spans. The original-language entries beginning 一、B2 劍南路站 and 二、B3 西湖站 were checked on the linked page.',
}

const DORTS_WENHU_NEIHU_CONTEXT: Source = {
  id: 'dorts-wenhu-neihu-context',
  title: 'Neihu Line environmental and human context',
  titleOriginal: '捷運高架車站建築造型設計',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page88.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full architecture volume records Neihu’s mountains, Keelung River, former agricultural economy, later urbanisation, parks, community activities and the shared Lake-City Story theme used across architecture, landscape, interiors and public art. The original-language paragraphs beginning 內湖區位於臺北市地理位置 and 湖城故事 were checked on the linked page.',
}

const DORTS_WENHU_NEIHU_DISTRICT: Source = {
  id: 'dorts-wenhu-neihu-district-zones',
  title: 'Neihu Line corridor design zones',
  titleOriginal: '捷運高架車站建築造型設計',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page91.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full architecture volume places B2–B5 in the residential–rural landscape zone, describes the Xihu-area reclaimed land beside the river, and distinguishes the later commercial-recreation and industrial-technology zones. The original-language heading beginning 住宅城鄉風貌 was checked on the linked page.',
}

const DORTS_WENHU_NEIHU_DESIGN_PRINCIPLES: Source = {
  id: 'dorts-wenhu-neihu-design-principles',
  title: 'Neihu Line elevated-station design principles',
  titleOriginal: '捷運高架車站建築造型設計',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page93.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full architecture volume describes the shared materials, platform-space form, overpass, semi-open edges, natural ventilation and “same within difference” approach of the elevated Neihu stations. The original-language paragraphs beginning 特殊站在建築語彙上 and 車站穿透與輕巧之構想 were checked on the linked page.',
}

const DORTS_WENHU_NEIHU_THEMES: Source = {
  id: 'dorts-wenhu-neihu-themes-colours',
  title: 'Neihu Line station themes and colours',
  titleOriginal: '捷運高架車站建築造型設計',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page95.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full architecture volume’s station-theme table records Jiannan Road’s mountain-ridge theme, Xihu’s butterfly theme, Gangqian’s flower-language theme, Wende’s bird-flight theme and their associated colours. The original-language table beginning 各車站設計主題及色彩 was checked on the linked page.',
}

const DORTS_WENHU_NEIHU_ART_INTEGRATION: Source = {
  id: 'dorts-wenhu-neihu-art-integration',
  title: 'Neihu Line station form and environmental detailing',
  titleOriginal: '捷運高架車站建築造型設計',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page97.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full architecture volume explains how route colour and station colour are applied to columns, paving, wall panels, floors and doors, and illustrates the B2–B5 station forms. The original-language paragraphs beginning 各車站之色彩計畫 and 內湖段之車站為高架車站 were checked on the linked page.',
}

const DORTS_WENHU_NEIHU_PLATFORM_MAINTENANCE: Source = {
  id: 'dorts-wenhu-neihu-platform-maintenance',
  title: 'Neihu Line platform-edge design review',
  titleOriginal: '捷運高架車站建築造型設計',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page131.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full architecture volume distinguishes the Xihu and Nangang Exhibition Center island-platform stations from the eight side-platform stations and records the platform-edge rain-stain and glass-cover design review. The original-language paragraph beginning 除了西湖站及南港展覽館站 was checked on the linked page.',
}

const DORTS_WENHU_NEIHU_SPECIAL_FORMS: Source = {
  id: 'dorts-wenhu-neihu-special-station-forms',
  title: 'Neihu Line station forms and Jiannan Road landmark',
  titleOriginal: '捷運車站規劃與設計實務',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page177.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full planning volume describes the Neihu elevated stations’ standard curved-column, metal-roof, glass-and-metal form and identifies Jiannan Road’s raised round arches, mountain-city gateway image and lantern-like night lighting. The original-language paragraphs beginning 內湖線 and 劍南路站 were checked on the linked page.',
}

const DORTS_WENHU_JIANNAN_LANDSCAPE: Source = {
  id: 'dorts-wenhu-jiannan-landscape',
  title: 'Jiannan Road station plaza landscape',
  titleOriginal: '捷運高架車站建築造型設計',
  publisher: 'Taipei City Department of Rapid Transit Systems',
  url: 'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page156.html',
  accessed: '2026-08-18',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The full architecture volume describes Jiannan Road’s station-front plaza, public open-space role, public-art competition, planting and paving that evokes mountain contours and agricultural grids. The original-language paragraphs beginning 劍南路站廣場景觀 and 為了表現本站山陵 were checked on the linked page.',
}

/**
 * Keyed by station code.
 *
 * Wenhu's two underground stations are BR13 Songshan Airport and BR14 Dazhi.
 * As of run 7 this rests on two PRIMARY sources that never mention each other,
 * with the encyclopedia demoted to corroboration:
 *
 *   - DORTS's own project record for the Neihu section gives「地下段3.9公里，
 *     2座地下站」— 3.9 km in tunnel, two underground stations, and the Neihu
 *     section is BR13–BR24, which excludes every station the Muzha section
 *     built. That is primary, and it narrows the pair to the northern half.
 *   - DORTS's 車站建築設計 page names one of the two and counts the rest:
 *     「除大直站為地下車站外，其餘共有十座高架車站」. Ten elevated plus Dazhi is
 *     eleven of twelve; the twelfth is Songshan Airport. Also primary.
 *   - zh.wikipedia's 文湖線 infobox names them outright:「地下車站 2座
 *     （松山機場站、大直站）」, which now agrees with the pair rather than
 *     establishing it.
 *
 * None of the three is a cross-section drawing, which is what would settle the
 * platform depths — those are still not asserted anywhere on the site.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ENGINEERING NUMBERS (工程編號)
 *
 * DORTS's station table lists a second number against every station, allocated
 * during construction, and it is not the operating code. On the Muzha section
 * it runs the other way: BR01 動物園 is engineering BR13, BR13 松山機場 is
 * engineering BR1. The Neihu stations use a separate B1–B11 series.
 *
 * Transcribed verbatim from that table, all 24 rows, and it is the reason
 * /rail/systems/station-numbering/ exists. Exits come from the same table.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const STATION_OVERLAY: Record<string, StationOverlay> = {
  ...AIRPORT_MRT_OVERLAY,
  ...BANNAN_OVERLAY,
  ...CIRCULAR_OVERLAY,
  ...SONGSHAN_XINDIAN_OVERLAY,
  ...TAMSUI_XINYI_OVERLAY,
  ...ZHONGHE_XINLU_OVERLAY,
  ...DANHAI_OVERLAY,
  ...ANKENG_OVERLAY,
  BR01: {
    structure: 'elevated',
    engineering: 'BR13',
    exits: 2,
    sources: [
      DORTS_WENHU_PROJECT,
      DORTS_WENHU_HIGH_RISE_PACKAGES,
      DORTS_WENHU_HIGH_RISE_DESIGN,
      DORTS_WENHU_HIGH_RISE_MATERIALS,
      DORTS_WENHU_HIGH_RISE_FORM,
      DORTS_WENHU_OPENING_HISTORY,
      DORTS_WENHU_TECHNICAL_CONTRACTS,
      DORTS_WENHU_TECHNICAL_RUBBER_TYRE,
      DORTS_WENHU_TECHNICAL_RUNNING_SURFACE,
    ],
    prose: [
      {
        text: 'The Muzha project begins at the zoo and runs through Xinguang Road, Wanfang Road, Xinglong Road and Xinhai Road before turning toward the central city.',
        source: DORTS_WENHU_PROJECT.id,
      },
      {
        text: 'DORTS placed the Muzha depot near the zoo exit on about 6.2 hectares, combining train storage, maintenance, control, washing, wayside maintenance and parts warehousing.',
        source: DORTS_WENHU_PROJECT.id,
      },
      {
        text: 'That depot relationship made the zoo station the public-facing beginning of a line whose operating infrastructure was concentrated beside its southern terminus.',
        source: DORTS_WENHU_PROJECT.id,
      },
      {
        text: 'The architecture volume says the first medium-capacity line had to fit stations into existing urban roads while limiting the visual and structural burden placed on neighbouring buildings.',
        source: DORTS_WENHU_HIGH_RISE_DESIGN.id,
      },
      {
        text: 'Its two station families used either a single-column cantilever arrangement or a conventional beam-and-column frame, selected according to the available site.',
        source: DORTS_WENHU_HIGH_RISE_DESIGN.id,
      },
      {
        text: 'Because all twelve Muzha stations had to be designed, tendered and built on a compressed schedule, DORTS adopted a systematised, modular and standardised design approach.',
        source: DORTS_WENHU_HIGH_RISE_DESIGN.id,
      },
      {
        text: 'The architecture package covering the southern three stations was CC414, whose engineering-era list gives the zoo station a 70-metre platform.',
        source: DORTS_WENHU_HIGH_RISE_PACKAGES.id,
      },
      {
        text: 'The wider construction arrangement separated system turnkey work from domestically bid civil, architectural, tunnel and depot work, while the operating contract was a separate part of the project structure.',
        source: DORTS_WENHU_TECHNICAL_CONTRACTS.id,
      },
      {
        text: 'The line’s rubber-tyre trains run on concrete running surfaces, so the station approaches share the section’s problems of spalling, cracking, roughness and noise that DORTS later addressed with night maintenance.',
        source: DORTS_WENHU_TECHNICAL_RUNNING_SURFACE.id,
      },
      {
        text: 'The original station vocabulary used aluminium panels, laminated glass, curved roofs and structural frames to present a modern, lightweight image.',
        source: DORTS_WENHU_HIGH_RISE_MATERIALS.id,
      },
      {
        text: 'DORTS later acknowledged that frame thickness and detail choices kept the built result from achieving the intended degree of visual transparency and drew less public acceptance than hoped.',
        source: DORTS_WENHU_HIGH_RISE_MATERIALS.id,
      },
      {
        text: 'The Muzha stations were designed as elevated side-platform stations with platform doors, curved metal-composite roofs, metal-and-glass envelopes and transparent lifts, without air-conditioning on the platforms.',
        source: DORTS_WENHU_HIGH_RISE_FORM.id,
      },
      {
        text: 'The line opened on 28 March 1996 as Taiwan’s first driverless medium-capacity metro, recording 42,548 rides on its first day.',
        source: DORTS_WENHU_OPENING_HISTORY.id,
      },
      {
        text: 'Its opening landscaping was also treated as a project responsibility: DORTS was directed to fund and commission planting restoration along the route after the city’s landscape office selected the transplant sites.',
        source: DORTS_WENHU_OPENING_HISTORY.id,
      },
    ],
    planned: [
      {
        line: 'Circular South Ring',
        note: 'The Circular Line’s South Ring is planned to run from here to 大坪林 Dapinglin, interchanging with Wenhu at this station.',
        sourceTitle: 'DORTS, 環狀線北環及南環',
        sourceUrl: 'https://www.dorts.gov.taipei/cp.aspx?n=7CEEE7ECF48CE83F',
      },
    ],
  },
  BR02: {
    structure: 'elevated',
    engineering: 'BR12',
    exits: 1,
    sources: [
      DORTS_WENHU_PROJECT,
      DORTS_WENHU_HIGH_RISE_PACKAGES,
      DORTS_WENHU_HIGH_RISE_DESIGN,
      DORTS_WENHU_HIGH_RISE_MATERIALS,
      DORTS_WENHU_HIGH_RISE_COLOUR,
      DORTS_WENHU_HIGH_RISE_FORM,
      DORTS_WENHU_STATION_RISK,
      DORTS_WENHU_DEVELOPMENT,
      DORTS_WENHU_DEVELOPMENT_INTERFACE,
      TAIPEI_LAW_WENHU_COST,
      DORTS_WENHU_TECHNICAL_RUNNING_SURFACE,
    ],
    prose: [
      {
        text: 'Muzha sits on the southern urban corridor that the project record traces from the zoo through Wanfang Road and Xinglong Road toward the Xinhai section.',
        source: DORTS_WENHU_PROJECT.id,
      },
      {
        text: 'Its station architecture belonged to CC414, the package that grouped the three southern stations and recorded a 72-metre platform for the Muzha station.',
        source: DORTS_WENHU_HIGH_RISE_PACKAGES.id,
      },
      {
        text: 'The station’s later land-development site was on the west side of the station at the Muzha Station and Military Works Road intersection.',
        source: DORTS_WENHU_DEVELOPMENT.id,
      },
      {
        text: 'DORTS records the resulting Xinyi 18 building as a project by Jun-an Construction, completed in February 2011 with three basement levels and nineteen floors above ground.',
        source: DORTS_WENHU_DEVELOPMENT.id,
      },
      {
        text: 'The city’s return from that development was recorded as fifteen homes on floors fourteen to seventeen, one home on the eighteenth floor, about 3,922.66 ping and sixteen parking spaces.',
        source: DORTS_WENHU_DEVELOPMENT.id,
      },
      {
        text: 'A DORTS cost-allocation table separately lists the BR2 joint-development deduction as NT$121 million in construction cost, NT$2.347 million in detailed design and NT$123.447 million in total.',
        source: TAIPEI_LAW_WENHU_COST.id,
      },
      {
        text: 'The official record does not identify the individual CC414 station contractor, award date or final package value, so those fields remain TBC here.',
        source: DORTS_WENHU_HIGH_RISE_PACKAGES.id,
      },
      {
        text: 'A DORTS risk case records a safety net from the Muzha joint-development site falling above the elevated track and delaying a train by three minutes and nineteen seconds.',
        source: DORTS_WENHU_STATION_RISK.id,
      },
      {
        text: 'DORTS responded by stopping the work, strengthening training and site management, and circulating the resulting rules to joint-development investors.',
        source: DORTS_WENHU_STATION_RISK.id,
      },
      {
        text: 'The architecture brief says the twelve-station section was delivered through a systematised, modular and standardised design because its design and tender schedule was compressed.',
        source: DORTS_WENHU_HIGH_RISE_DESIGN.id,
      },
      {
        text: 'That standard vocabulary used curved metal-composite roofs, metal and glass envelopes, transparent lifts and platform doors, while the platforms were not air-conditioned.',
        source: DORTS_WENHU_HIGH_RISE_FORM.id,
      },
      {
        text: 'DORTS describes the Muzha section’s base colour as light blue and notes that the repeated treatment could become monotonous across the section.',
        source: DORTS_WENHU_HIGH_RISE_COLOUR.id,
      },
      {
        text: 'The same review links platform-edge railings to privacy and weather concerns where elevated platforms sit close to neighbouring buildings.',
        source: DORTS_WENHU_HIGH_RISE_COLOUR.id,
      },
      {
        text: 'Its rubber-tyre concrete running surface also required later repair for cracking, roughness and noise, with epoxy mortar and emery used in night work.',
        source: DORTS_WENHU_TECHNICAL_RUNNING_SURFACE.id,
      },
    ],
  },
  BR03: {
    structure: 'elevated',
    engineering: 'BR11',
    exits: 1,
    sources: [
      DORTS_WENHU_PROJECT,
      DORTS_WENHU_HIGH_RISE_PACKAGES,
      DORTS_WENHU_HIGH_RISE_DESIGN,
      DORTS_WENHU_HIGH_RISE_MATERIALS,
      DORTS_WENHU_HIGH_RISE_FORM,
      DORTS_WENHU_STATION_RISK,
      DORTS_WENHU_DEVELOPMENT,
      DORTS_WENHU_DEVELOPMENT_INTERFACE,
      DORTS_WENHU_TECHNICAL_RUBBER_TYRE,
      DORTS_WENHU_TECHNICAL_RUNNING_SURFACE,
      DORTS_WENHU_OPENING_HISTORY,
    ],
    prose: [
      {
        text: 'The project route places Wanfang Community on the Wanfang Road and Xinglong Road corridor between the zoo end and the Xinhai approach.',
        source: DORTS_WENHU_PROJECT.id,
      },
      {
        text: 'Its station architecture was included in CC414 with the Muzha and zoo stations, and the package record gives it a 72-metre platform.',
        source: DORTS_WENHU_HIGH_RISE_PACKAGES.id,
      },
      {
        text: 'DORTS lists the Wanfang Community joint-development building on the south side of Wanfang Road beside Wanhe Street.',
        source: DORTS_WENHU_DEVELOPMENT.id,
      },
      {
        text: 'The building, named Wanfang Huan You Shi, was developed by Huafa Construction and completed in September 2007 with one basement level and seven floors above ground.',
        source: DORTS_WENHU_DEVELOPMENT.id,
      },
      {
        text: 'The city’s recorded return was thirty homes, two shops, about 1,455.23 ping and fourteen parking spaces.',
        source: DORTS_WENHU_DEVELOPMENT.id,
      },
      {
        text: 'Unlike a co-constructed station building, DORTS classifies this Wanfang site as a separate-structure example, with the transit facility built first and the development building designed and built independently.',
        source: DORTS_WENHU_DEVELOPMENT_INTERFACE.id,
      },
      {
        text: 'That arrangement required later construction access and safety distances to be kept from passenger circulation, rather than treating the station and building as one structural worksite.',
        source: DORTS_WENHU_DEVELOPMENT_INTERFACE.id,
      },
      {
        text: 'A DORTS case report says the joint-development environmental review required airtight windows for residences beside the elevated station.',
        source: DORTS_WENHU_STATION_RISK.id,
      },
      {
        text: 'After residents moved in and complained about train noise, DORTS created a specific noise-prevention procedure for joint-development buildings beside exposed or elevated track and notified investors to use it.',
        source: DORTS_WENHU_STATION_RISK.id,
      },
      {
        text: 'The wider station design used a systematised, modular and standardised vocabulary because twelve stations had to be delivered under a compressed design and tender programme.',
        source: DORTS_WENHU_HIGH_RISE_DESIGN.id,
      },
      {
        text: 'That vocabulary combined curved roofs, metal frames, laminated glass and platform doors with elevated side platforms that were not air-conditioned.',
        source: DORTS_WENHU_HIGH_RISE_FORM.id,
      },
      {
        text: 'DORTS later judged that heavy outer frames and detail decisions weakened the intended lightweight transparency of the built stations.',
        source: DORTS_WENHU_HIGH_RISE_MATERIALS.id,
      },
      {
        text: 'The line’s rubber-tyre concrete running surface also brought maintenance concerns around cracking, roughness and noise, repaired through night work with epoxy mortar and emery.',
        source: DORTS_WENHU_TECHNICAL_RUNNING_SURFACE.id,
      },
      {
        text: 'The Muzha section opened on 28 March 1996 as the first driverless medium-capacity metro in Taiwan.',
        source: DORTS_WENHU_OPENING_HISTORY.id,
      },
    ],
  },
  BR04: {
    structure: 'elevated',
    engineering: 'BR10',
    exits: 1,
    sources: [
      DORTS_WENHU_PROJECT,
      DORTS_WENHU_HIGH_RISE_PACKAGES,
      DORTS_WENHU_HIGH_RISE_DESIGN,
      DORTS_WENHU_HIGH_RISE_ROUTE,
      DORTS_WENHU_HIGH_RISE_MATERIALS,
      DORTS_WENHU_HIGH_RISE_COLOUR,
      DORTS_WENHU_HIGH_RISE_FORM,
      DORTS_WENHU_TECHNICAL_CONTRACTS,
      DORTS_WENHU_TECHNICAL_RUBBER_TYRE,
      DORTS_WENHU_TECHNICAL_RUNNING_SURFACE,
      DORTS_WENHU_OPENING_HISTORY,
    ],
    prose: [
      {
        text: 'The project record places Wanfang Hospital on the Xinglong Road part of the Muzha corridor, between Wanfang Road and the Xinhai approach.',
        source: DORTS_WENHU_PROJECT.id,
      },
      {
        text: 'The station was built in CC411, the architectural package that grouped it with Xinhai and recorded an 82.196-metre platform for this station.',
        source: DORTS_WENHU_HIGH_RISE_PACKAGES.id,
      },
      {
        text: 'DORTS’s architectural review explains that the elevated section had to occupy existing roads while controlling the mass placed beside tightly packed buildings.',
        source: DORTS_WENHU_HIGH_RISE_DESIGN.id,
      },
      {
        text: 'The design programme therefore used repeatable station components rather than inventing a completely different structural solution at every stop.',
        source: DORTS_WENHU_HIGH_RISE_DESIGN.id,
      },
      {
        text: 'DORTS records that the twelve Muzha stations had to be designed, tendered and built within one year, which explains the deliberate modular and standardised approach.',
        source: DORTS_WENHU_HIGH_RISE_DESIGN.id,
      },
      {
        text: 'The construction system separated turnkey signalling and vehicle work from domestically bid civil, architecture, tunnel and depot work, with operation treated as a further contract component.',
        source: DORTS_WENHU_TECHNICAL_CONTRACTS.id,
      },
      {
        text: 'No full primary page located in this audit names CC411’s individual contractor, award date or final package value, so those requested fields are TBC.',
        source: DORTS_WENHU_HIGH_RISE_PACKAGES.id,
      },
      {
        text: 'The station’s architectural language used curved metal-composite roofs, metal and glass cladding, transparent lifts and platform doors, while the platform itself was not air-conditioned.',
        source: DORTS_WENHU_HIGH_RISE_FORM.id,
      },
      {
        text: 'DORTS describes light blue as the Muzha section’s base station colour and notes that repeated colour treatment could read as monotonous.',
        source: DORTS_WENHU_HIGH_RISE_COLOUR.id,
      },
      {
        text: 'The same source identifies privacy and weather exposure as problems where platform-edge railings sat close to neighbouring buildings.',
        source: DORTS_WENHU_HIGH_RISE_COLOUR.id,
      },
      {
        text: 'The section’s original aluminium-panel, laminated-glass and frame vocabulary was intended to look modern and light, but DORTS later judged that thick outer frames weakened that goal.',
        source: DORTS_WENHU_HIGH_RISE_MATERIALS.id,
      },
      {
        text: 'The alignment history also records a change away from the proposed Dunhua corridor toward Fuxing South and North Roads after concerns about trees, narrow road space and the pressure of trains beside buildings.',
        source: DORTS_WENHU_HIGH_RISE_ROUTE.id,
      },
      {
        text: 'As part of the rubber-tyre system, the station approaches used concrete running surfaces that later required repair for spalling, cracking, roughness and noise.',
        source: DORTS_WENHU_TECHNICAL_RUNNING_SURFACE.id,
      },
      {
        text: 'The Muzha section opened on 28 March 1996 as Taiwan’s first driverless medium-capacity metro.',
        source: DORTS_WENHU_OPENING_HISTORY.id,
      },
    ],
  },
  BR05: {
    structure: 'elevated',
    engineering: 'BR9',
    exits: 1,
    sources: [
      DORTS_WENHU_PROJECT,
      DORTS_WENHU_HIGH_RISE_PACKAGES,
      DORTS_WENHU_HIGH_RISE_DESIGN,
      DORTS_WENHU_HIGH_RISE_ROUTE,
      DORTS_WENHU_HIGH_RISE_MATERIALS,
      DORTS_WENHU_HIGH_RISE_FORM,
      DORTS_WENHU_TECHNICAL_CONTRACTS,
      DORTS_WENHU_TECHNICAL_RUBBER_TYRE,
      DORTS_WENHU_TECHNICAL_RUNNING_SURFACE,
      DORTS_WENHU_DEVELOPMENT,
      DORTS_WENHU_OPENING_HISTORY,
    ],
    prose: [
      {
        text: 'Xinhai is the southern station at the point where the project record carries the Muzha corridor from Xinglong Road toward Xinhai Road and the tunnel approach.',
        source: DORTS_WENHU_PROJECT.id,
      },
      {
        text: 'Its station architecture belonged to CC411 with Wanfang Hospital, and the package record gives the Xinhai station a 76-metre platform.',
        source: DORTS_WENHU_HIGH_RISE_PACKAGES.id,
      },
      {
        text: 'The project record says the line passes the north side of Xinhai Tunnel.',
        source: DORTS_WENHU_PROJECT.id,
      },
      {
        text: 'A separate DORTS technical article describes a tunnel in the Fuzhou Mountain area, so the two published route descriptions are retained as a conflict rather than merged.',
        source: DORTS_WENHU_TECHNICAL_RUBBER_TYRE.id,
      },
      {
        text: 'The alignment history records that an earlier Dunhua South and North Road proposal was changed to Fuxing South and North Roads because of the existing tree-lined avenue and the oppressive scale created by a narrow road corridor.',
        source: DORTS_WENHU_HIGH_RISE_ROUTE.id,
      },
      {
        text: 'DORTS also describes the selected corridor as passing through dense commercial and residential areas where passenger and economic benefits were part of the route decision.',
        source: DORTS_WENHU_HIGH_RISE_ROUTE.id,
      },
      {
        text: 'The construction arrangement separated system turnkey work from domestic civil, architecture, tunnel and depot work, and kept operation in a separate contract role.',
        source: DORTS_WENHU_TECHNICAL_CONTRACTS.id,
      },
      {
        text: 'The official pages checked here do not identify CC411’s individual contractor, award date or final package value, so those fields remain TBC.',
        source: DORTS_WENHU_HIGH_RISE_PACKAGES.id,
      },
      {
        text: 'DORTS’s completed land-development register lists the Dun Nan Metro Realm site beside Xinhai Road Section 4 and Lane 108.',
        source: DORTS_WENHU_DEVELOPMENT.id,
      },
      {
        text: 'The building was developed by Huayi Construction and completed in June 2017 with three basement levels and eighteen floors above ground for residential, office and retail use.',
        source: DORTS_WENHU_DEVELOPMENT.id,
      },
      {
        text: 'The city’s recorded share was fifty-five homes, five offices and one shop, about 2,574.41 ping and fifty-seven parking spaces.',
        source: DORTS_WENHU_DEVELOPMENT.id,
      },
      {
        text: 'The Muzha section’s repeatable station design used curved roofs, aluminium panels, laminated glass, platform doors and transparent lifts to give the elevated structures a common visual language.',
        source: DORTS_WENHU_HIGH_RISE_MATERIALS.id,
      },
      {
        text: 'DORTS later acknowledged that thick outer frames and detailed construction choices reduced the intended lightweight transparency and public acceptance of that language.',
        source: DORTS_WENHU_HIGH_RISE_MATERIALS.id,
      },
      {
        text: 'The rubber-tyre guideway used concrete running surfaces whose cracking, roughness and noise required later night repairs with epoxy mortar and emery.',
        source: DORTS_WENHU_TECHNICAL_RUNNING_SURFACE.id,
      },
      {
        text: 'The section opened on 28 March 1996 as Taiwan’s first driverless medium-capacity metro.',
        source: DORTS_WENHU_OPENING_HISTORY.id,
      },
    ],
  },
  BR06: {
    structure: 'elevated',
    engineering: 'BR8',
    exits: 1,
    sources: [
      DORTS_WENHU_PROJECT,
      DORTS_WENHU_HIGH_RISE_PACKAGES,
      DORTS_WENHU_HIGH_RISE_DESIGN,
      DORTS_WENHU_HIGH_RISE_MATERIALS,
      DORTS_WENHU_HIGH_RISE_COLOUR,
      DORTS_WENHU_HIGH_RISE_FORM,
      DORTS_WENHU_TECHNICAL_CONTRACTS,
      DORTS_WENHU_TECHNICAL_RUBBER_TYRE,
      DORTS_WENHU_TECHNICAL_RUNNING_SURFACE,
      DORTS_WENHU_DEVELOPMENT,
      DORTS_WENHU_OPENING_HISTORY,
    ],
    prose: [
      {
        text: 'Linguang belongs to the central section of the elevated Muzha corridor, which the project record routes from the zoo through Wanfang and Xinglong roads toward Xinhai and the city.',
        source: DORTS_WENHU_PROJECT.id,
      },
      {
        text: 'Its station architecture was included in CC407 with Daan, Technology Building and Liuzhangli, and the package record gives Linguang a 70-metre platform.',
        source: DORTS_WENHU_HIGH_RISE_PACKAGES.id,
      },
      {
        text: 'The completed Linguang land-development site was the Figaro Garden building by Huafei Construction at the intersection of Heping East Road Section 3 and Wolong Street.',
        source: DORTS_WENHU_DEVELOPMENT.id,
      },
      {
        text: 'DORTS records completion in November 2006, with two basement levels and fourteen floors above ground in a residential building.',
        source: DORTS_WENHU_DEVELOPMENT.id,
      },
      {
        text: 'The city’s return from the site was fifty-three homes, about 1,805 ping and thirty-one parking spaces.',
        source: DORTS_WENHU_DEVELOPMENT.id,
      },
      {
        text: 'The station therefore sits within a development model in which transit construction and land development were recorded together as part of the line’s urban project, not merely as a transport-only work.',
        source: DORTS_WENHU_DEVELOPMENT.id,
      },
      {
        text: 'DORTS’s design brief says the road-centre stations had to control their mass beside existing buildings, using either single-column cantilevers or conventional beam-and-column frames according to the site.',
        source: DORTS_WENHU_HIGH_RISE_DESIGN.id,
      },
      {
        text: 'The twelve-station programme used systematised, modular and standardised design because its stations had to move through design, tender and construction on a compressed schedule.',
        source: DORTS_WENHU_HIGH_RISE_DESIGN.id,
      },
      {
        text: 'The common envelope combined aluminium panels, laminated glass, curved roofs and structural frames, with a light-blue base colour across the Muzha section.',
        source: DORTS_WENHU_HIGH_RISE_MATERIALS.id,
      },
      {
        text: 'DORTS later judged that the final frame thickness and detail treatment weakened the intended transparent, lightweight character.',
        source: DORTS_WENHU_HIGH_RISE_MATERIALS.id,
      },
      {
        text: 'The elevated side-platform stations used platform doors, transparent lifts and metal-and-glass envelopes, but the platforms were not air-conditioned.',
        source: DORTS_WENHU_HIGH_RISE_FORM.id,
      },
      {
        text: 'The separate system and construction contracts also left the station within a larger project that divided turnkey equipment from domestic civil, architecture, tunnel and depot work.',
        source: DORTS_WENHU_TECHNICAL_CONTRACTS.id,
      },
      {
        text: 'No full primary page located in this audit identifies CC407’s individual contractor, award date or final package value, so those fields are TBC.',
        source: DORTS_WENHU_HIGH_RISE_PACKAGES.id,
      },
      {
        text: 'Its rubber-tyre concrete running surface later required repair for spalling, cracking, roughness and noise, using night closures and epoxy-mortar work.',
        source: DORTS_WENHU_TECHNICAL_RUNNING_SURFACE.id,
      },
      {
        text: 'The Muzha section opened on 28 March 1996 as Taiwan’s first driverless medium-capacity metro.',
        source: DORTS_WENHU_OPENING_HISTORY.id,
      },
    ],
  },
  BR07: {
    structure: 'elevated',
    engineering: 'BR7',
    exits: 1,
    sources: [
      DORTS_WENHU_PROJECT,
      DORTS_WENHU_HIGH_RISE_PACKAGES,
      DORTS_WENHU_HIGH_RISE_DESIGN,
      DORTS_WENHU_HIGH_RISE_ROUTE,
      DORTS_WENHU_HIGH_RISE_MATERIALS,
      DORTS_WENHU_HIGH_RISE_COLOUR,
      DORTS_WENHU_HIGH_RISE_FORM,
      DORTS_WENHU_TECHNICAL_CONTRACTS,
      DORTS_WENHU_TECHNICAL_RUNNING_SURFACE,
      DORTS_WENHU_OPENING_HISTORY,
    ],
    prose: [
      {
        text: 'Liuzhangli is in the middle of the original Muzha section, whose project record routes from the zoo through Wanfang Road and Xinglong Road toward the Xinhai approach and the central city.',
        source: DORTS_WENHU_PROJECT.id,
      },
      {
        text: 'Its architecture belonged to CC407 with Daan, Technology Building and Linguang, and the package record gives the Liuzhangli station a 70-metre platform.',
        source: DORTS_WENHU_HIGH_RISE_PACKAGES.id,
      },
      {
        text: 'The station was therefore delivered as part of a four-station architectural package rather than as an isolated design commission.',
        source: DORTS_WENHU_HIGH_RISE_PACKAGES.id,
      },
      {
        text: 'DORTS says the twelve Muzha stations had to pass through design, tender and construction within one year, leading to a systematised, modular and standardised design strategy.',
        source: DORTS_WENHU_HIGH_RISE_DESIGN.id,
      },
      {
        text: 'That strategy was a response to the road-centre sites and to the need to keep station mass from pressing against existing roadside buildings.',
        source: DORTS_WENHU_HIGH_RISE_DESIGN.id,
      },
      {
        text: 'The architecture brief identifies two structural families for those sites: a single-column cantilever and a conventional beam-and-column frame.',
        source: DORTS_WENHU_HIGH_RISE_DESIGN.id,
      },
      {
        text: 'The alignment history records that an earlier Dunhua South and North Road proposal was changed to Fuxing South and North Roads after concerns about the existing tree-lined avenue and the scale of stations in narrow streets.',
        source: DORTS_WENHU_HIGH_RISE_ROUTE.id,
      },
      {
        text: 'DORTS also describes the selected urban corridor as dense commercial and residential frontage where passenger and economic benefits were part of the route decision.',
        source: DORTS_WENHU_HIGH_RISE_ROUTE.id,
      },
      {
        text: 'The built vocabulary used aluminium panels, laminated glass, curved roofs and frames to create a common modern image along the elevated section.',
        source: DORTS_WENHU_HIGH_RISE_MATERIALS.id,
      },
      {
        text: 'DORTS later judged that heavy outer frames and detail choices weakened the intended lightweight transparency and reduced public acceptance of the result.',
        source: DORTS_WENHU_HIGH_RISE_MATERIALS.id,
      },
      {
        text: 'The Muzha station type used elevated side platforms, platform doors, curved metal-composite roofs, metal-and-glass envelopes and transparent lifts without platform air-conditioning.',
        source: DORTS_WENHU_HIGH_RISE_FORM.id,
      },
      {
        text: 'The section’s common light-blue base colour was later described by DORTS as visually monotonous when repeated from station to station.',
        source: DORTS_WENHU_HIGH_RISE_COLOUR.id,
      },
      {
        text: 'Its construction contract structure separated turnkey system work from domestic civil, architectural, tunnel and depot work, with operation treated as a separate contract role.',
        source: DORTS_WENHU_TECHNICAL_CONTRACTS.id,
      },
      {
        text: 'The rubber-tyre concrete running surface later required night repairs for spalling, cracking, roughness and noise, using epoxy mortar and emery.',
        source: DORTS_WENHU_TECHNICAL_RUNNING_SURFACE.id,
      },
      {
        text: 'The Muzha section opened on 28 March 1996 as Taiwan’s first driverless medium-capacity metro.',
        source: DORTS_WENHU_OPENING_HISTORY.id,
      },
      {
        text: 'The official pages checked here do not identify CC407’s individual contractor, award date or final package value, so those fields remain TBC.',
        source: DORTS_WENHU_HIGH_RISE_PACKAGES.id,
      },
    ],
  },
  BR08: {
    structure: 'elevated',
    engineering: 'BR6',
    exits: 1,
    sources: [
      DORTS_WENHU_PROJECT,
      DORTS_WENHU_HIGH_RISE_PACKAGES,
      DORTS_WENHU_HIGH_RISE_DESIGN,
      DORTS_WENHU_HIGH_RISE_MATERIALS,
      DORTS_WENHU_HIGH_RISE_COLOUR,
      DORTS_WENHU_HIGH_RISE_FORM,
      DORTS_WENHU_TECHNICAL_CONTRACTS,
      DORTS_WENHU_TECHNICAL_RUNNING_SURFACE,
      DORTS_WENHU_OPENING_HISTORY,
      DORTS_WENHU_LAND_DEVELOPMENT_GENERAL,
      TAIPEI_LAW_WENHU_COST,
    ],
    prose: [
      {
        text: 'Technology Building is on the section that the project record carries from the zoo through Wanfang and Xinglong roads before turning north through the central city.',
        source: DORTS_WENHU_PROJECT.id,
      },
      {
        text: 'Its architecture belonged to CC407 with Daan, Liuzhangli and Linguang, and the package record gives the station a 70-metre platform.',
        source: DORTS_WENHU_HIGH_RISE_PACKAGES.id,
      },
      {
        text: 'The station’s development base produced the Technology Building, invested in by Hanyang Construction at Fuxing South Road Section 2 near the Heping East Road Section 2 intersection.',
        source: DORTS_WENHU_LAND_DEVELOPMENT_GENERAL.id,
      },
      {
        text: 'DORTS records it as the first completed Muzha-line development building, finished in February 1997 with three basement levels and fourteen floors above ground for offices.',
        source: DORTS_WENHU_LAND_DEVELOPMENT_GENERAL.id,
      },
      {
        text: 'The city retained the basement-level shopping area, general offices on floors one through four and forty-five basement parking spaces.',
        source: DORTS_WENHU_LAND_DEVELOPMENT_GENERAL.id,
      },
      {
        text: 'The official cost-allocation table lists the BR6 joint-development deduction as NT$164.20 million in construction cost, NT$3.116 million in detailed design and NT$167.316 million in total.',
        source: TAIPEI_LAW_WENHU_COST.id,
      },
      {
        text: 'Those figures describe the joint-development deduction, not the complete CC407 station construction account.',
        source: TAIPEI_LAW_WENHU_COST.id,
      },
      {
        text: 'DORTS designed the Muzha stations as a standardised family because all twelve had to move through design, tender and construction within one year.',
        source: DORTS_WENHU_HIGH_RISE_DESIGN.id,
      },
      {
        text: 'The road-centre sites used either single-column cantilevers or ordinary beam-and-column frames, depending on the available urban footprint.',
        source: DORTS_WENHU_HIGH_RISE_DESIGN.id,
      },
      {
        text: 'The common envelope combined aluminium panels, laminated glass, curved roofs and frames, with a light-blue base colour across the Muzha section.',
        source: DORTS_WENHU_HIGH_RISE_MATERIALS.id,
      },
      {
        text: 'DORTS later acknowledged that the outer-frame thickness and detail treatment prevented the built stations from appearing as transparent and lightweight as intended.',
        source: DORTS_WENHU_HIGH_RISE_MATERIALS.id,
      },
      {
        text: 'The elevated side-platform type used platform doors, transparent lifts and metal-and-glass walls, but its platforms were not air-conditioned.',
        source: DORTS_WENHU_HIGH_RISE_FORM.id,
      },
      {
        text: 'The construction model separated turnkey system work from domestic civil, architecture, tunnel and depot work, with operation occupying a separate contract role.',
        source: DORTS_WENHU_TECHNICAL_CONTRACTS.id,
      },
      {
        text: 'The rubber-tyre guideway’s concrete running surface later needed night repairs for spalling, cracking, roughness and noise.',
        source: DORTS_WENHU_TECHNICAL_RUNNING_SURFACE.id,
      },
      {
        text: 'The section opened on 28 March 1996 as Taiwan’s first driverless medium-capacity metro.',
        source: DORTS_WENHU_OPENING_HISTORY.id,
      },
      {
        text: 'The official pages checked here do not identify CC407’s individual contractor, award date or final package value, so those fields remain TBC.',
        source: DORTS_WENHU_HIGH_RISE_PACKAGES.id,
      },
    ],
  },
  BR09: {
    structure: 'elevated',
    engineering: 'BR5',
    exits: 6,
    sources: [
      DORTS_WENHU_PROJECT,
      DORTS_WENHU_HIGH_RISE_PACKAGES,
      DORTS_WENHU_HIGH_RISE_DESIGN,
      DORTS_WENHU_HIGH_RISE_ROUTE,
      DORTS_WENHU_HIGH_RISE_MATERIALS,
      DORTS_WENHU_HIGH_RISE_FORM,
      DORTS_WENHU_TECHNICAL_CONTRACTS,
      DORTS_WENHU_TECHNICAL_RUNNING_SURFACE,
      DORTS_WENHU_OPENING_HISTORY,
      DORTS_WENHU_LAND_DEVELOPMENT_GENERAL,
      TAIPEI_LAW_WENHU_COST,
      DORTS_WENHU_TRANSFER_PLANNING,
      TRTC_WENHU_BR09_STATION,
    ],
    prose: [
      {
        text: 'Daan is one of the central-city stations on the original Muzha corridor, where the project record turns from the Wanfang and Xinhai approach toward the Fuxing and Heping road network.',
        source: DORTS_WENHU_PROJECT.id,
      },
      {
        text: 'Its architecture belonged to CC407 with Technology Building, Liuzhangli and Linguang, and the package record gives Daan a 70-metre platform.',
        source: DORTS_WENHU_HIGH_RISE_PACKAGES.id,
      },
      {
        text: 'DORTS’s land-development volume records the Daan Plaza base at the junction of Xinyi Road Section 4 and Fuxing South Road.',
        source: DORTS_WENHU_LAND_DEVELOPMENT_GENERAL.id,
      },
      {
        text: 'Huafei Construction invested in the building, which was completed at the end of 1999 with four basement levels and eighteen floors above ground for offices.',
        source: DORTS_WENHU_LAND_DEVELOPMENT_GENERAL.id,
      },
      {
        text: 'The city’s property share was recorded as offices on floors seven through ten and fifteen basement parking spaces.',
        source: DORTS_WENHU_LAND_DEVELOPMENT_GENERAL.id,
      },
      {
        text: 'The cost-allocation table lists the BR5 joint-development deduction as NT$212.52 million in construction cost, NT$3.577 million in detailed design and NT$216.097 million in total.',
        source: TAIPEI_LAW_WENHU_COST.id,
      },
      {
        text: 'Those amounts are the joint-development deduction recorded by the city, not a final CC407 station-package account.',
        source: TAIPEI_LAW_WENHU_COST.id,
      },
      {
        text: 'TRTC’s current station page identifies Daan as a Wenhu and Tamsui-Xinyi interchange, with the two line facilities listed at different addresses and the transfer facilities inside the paid area.',
        source: TRTC_WENHU_BR09_STATION.id,
      },
      {
        text: 'DORTS’s planning manual classifies Daan as a non-parallel interchange, where vertical circulation connects platforms at different levels rather than a same-level crossing.',
        source: DORTS_WENHU_TRANSFER_PLANNING.id,
      },
      {
        text: 'The architecture programme used standardised and modular station components because all twelve Muzha stations had to be designed, tendered and built within a year.',
        source: DORTS_WENHU_HIGH_RISE_DESIGN.id,
      },
      {
        text: 'Those components combined curved metal-composite roofs, metal and glass envelopes, transparent lifts and platform doors without air-conditioning on the platforms.',
        source: DORTS_WENHU_HIGH_RISE_FORM.id,
      },
      {
        text: 'The common light-blue base colour and repeated frame vocabulary were intended to unify the elevated section, although DORTS later judged the heavy frames less transparent than intended.',
        source: DORTS_WENHU_HIGH_RISE_COLOUR.id,
      },
      {
        text: 'The project separated turnkey system work from domestic civil, architecture, tunnel and depot work, leaving operation as a separate contract role.',
        source: DORTS_WENHU_TECHNICAL_CONTRACTS.id,
      },
      {
        text: 'The Muzha section opened on 28 March 1996 as Taiwan’s first driverless medium-capacity metro.',
        source: DORTS_WENHU_OPENING_HISTORY.id,
      },
      {
        text: 'The official pages checked here do not identify CC407’s individual contractor, award date or final package value, so those fields remain TBC.',
        source: DORTS_WENHU_HIGH_RISE_PACKAGES.id,
      },
    ],
  },
  BR10: {
    structure: 'elevated',
    engineering: 'BR4',
    exits: 5,
    sources: [
      DORTS_WENHU_PROJECT,
      DORTS_WENHU_HIGH_RISE_PACKAGES,
      DORTS_WENHU_HIGH_RISE_DESIGN,
      DORTS_WENHU_HIGH_RISE_ROUTE,
      DORTS_WENHU_HIGH_RISE_MATERIALS,
      DORTS_WENHU_HIGH_RISE_FORM,
      DORTS_WENHU_TECHNICAL_CONTRACTS,
      DORTS_WENHU_TECHNICAL_RUNNING_SURFACE,
      DORTS_WENHU_OPENING_HISTORY,
      DORTS_WENHU_ZHONGXIAO_DEVELOPMENT,
      DORTS_WENHU_DEVELOPMENT_MANAGEMENT,
      DORTS_WENHU_TRANSFER_PLANNING,
      TRTC_WENHU_BR10_STATION,
      TRTC_WENHU_OPERATIONS,
    ],
    prose: [
      {
        text: 'Zhongxiao Fuxing is the central interchange between the Wenhu and Bannan lines.',
        source: DORTS_WENHU_TRANSFER_PLANNING.id,
      },
      {
        text: 'The project record brings the original Muzha corridor through Fuxing South and North Roads before it reaches Zhongshan Junior High.',
        source: DORTS_WENHU_PROJECT.id,
      },
      {
        text: 'The high-elevated-station volume places it in CC403 with Songshan Airport, Zhongshan Junior High and Nanjing East Road, and gives the station a 70-metre platform.',
        source: DORTS_WENHU_HIGH_RISE_PACKAGES.id,
      },
      {
        text: 'DORTS’s station-planning manual identifies Zhongxiao Fuxing as a non-parallel interchange where vertical circulation joins platforms at different levels.',
        source: DORTS_WENHU_TRANSFER_PLANNING.id,
      },
      {
        text: 'TRTC’s current page places the Wenhu and Bannan transfer corridor near Exit 2 and records separate paid-area facilities for the two lines.',
        source: TRTC_WENHU_BR10_STATION.id,
      },
      {
        text: 'The joint-development site covers the southwest side of the Zhongxiao East Road Section 3 and Fuxing South Road intersection, with a total development area of 7,691 square metres.',
        source: DORTS_WENHU_ZHONGXIAO_DEVELOPMENT.id,
      },
      {
        text: 'DORTS’s concept design joined the building’s first through third floors to the Wenhu facilities and its basement levels one through three to the Bannan entrances.',
        source: DORTS_WENHU_ZHONGXIAO_DEVELOPMENT.id,
      },
      {
        text: 'The city published the development plan in November 1997, sought investors in March 1999, signed the investment contract in January 2000 and recorded completion and an occupancy permit in November 2006.',
        source: DORTS_WENHU_ZHONGXIAO_DEVELOPMENT.id,
      },
      {
        text: 'The project was planned for retail and department-store use, with public paid parking and reserved connections to the rapid-transit facilities.',
        source: DORTS_WENHU_ZHONGXIAO_DEVELOPMENT.id,
      },
      {
        text: 'DORTS later described the Zhongxiao Fuxing building as one of the larger city-managed development assets and recorded a unified-management model with investor Hongtong.',
        source: DORTS_WENHU_DEVELOPMENT_MANAGEMENT.id,
      },
      {
        text: 'The same management record says the original proposal had six basement levels and thirteen floors above ground, but the transit mezzanine was counted as an additional floor, producing a six-basement, fourteen-floor design.',
        source: DORTS_WENHU_DEVELOPMENT_MANAGEMENT.id,
      },
      {
        text: 'The common Muzha station design used curved roofs, aluminium panels, laminated glass, platform doors and transparent lifts, with no platform air-conditioning.',
        source: DORTS_WENHU_HIGH_RISE_FORM.id,
      },
      {
        text: 'DORTS later judged that the heavy outer frames reduced the intended lightweight transparency of the standardised station image.',
        source: DORTS_WENHU_HIGH_RISE_MATERIALS.id,
      },
      {
        text: 'The live TRTC log records a 2 August 2026 signalling anomaly in the Zhongxiao Fuxing section that briefly stopped trains for about two minutes while the rest of the line remained unaffected.',
        source: TRTC_WENHU_OPERATIONS.id,
      },
      {
        text: 'The same log records a 5 August passenger medical emergency at the station; the system continued normal operation while station staff used an AED assessment and CPR before handing over to paramedics.',
        source: TRTC_WENHU_OPERATIONS.id,
      },
      {
        text: 'The Muzha section opened on 28 March 1996 as Taiwan’s first driverless medium-capacity metro.',
        source: DORTS_WENHU_OPENING_HISTORY.id,
      },
      {
        text: 'The individual CC403 contractor, award date and final station-package value are not identified in the full primary pages checked here, so those fields remain TBC.',
        source: DORTS_WENHU_HIGH_RISE_PACKAGES.id,
      },
    ],
  },
  BR11: {
    structure: 'elevated',
    engineering: 'BR3',
    exits: 8,
    sources: [
      DORTS_WENHU_PROJECT,
      DORTS_WENHU_HIGH_RISE_PACKAGES,
      DORTS_WENHU_HIGH_RISE_DESIGN,
      DORTS_WENHU_HIGH_RISE_ROUTE,
      DORTS_WENHU_HIGH_RISE_MATERIALS,
      DORTS_WENHU_HIGH_RISE_COLOUR,
      DORTS_WENHU_HIGH_RISE_FORM,
      DORTS_WENHU_TECHNICAL_CONTRACTS,
      DORTS_WENHU_TECHNICAL_RUNNING_SURFACE,
      DORTS_WENHU_OPENING_HISTORY,
      DORTS_WENHU_TRANSFER_PLANNING,
      TRTC_WENHU_BR11_STATION,
    ],
    prose: [
      {
        text: 'Nanjing Fuxing is on the urban alignment that the project record carries from Heping East Road into Fuxing South and North Roads before reaching Zhongshan Junior High.',
        source: DORTS_WENHU_PROJECT.id,
      },
      {
        text: 'The station architecture belonged to CC403 with Songshan Airport, Zhongshan Junior High and Zhongxiao Fuxing, and the package record gives it a 70-metre platform.',
        source: DORTS_WENHU_HIGH_RISE_PACKAGES.id,
      },
      {
        text: 'DORTS’s planning manual classifies Nanjing Fuxing as a non-parallel interchange between Wenhu and Songshan-Xindian, requiring vertical circulation between platforms at different levels.',
        source: DORTS_WENHU_TRANSFER_PLANNING.id,
      },
      {
        text: 'TRTC’s current station page records the transfer lift inside the paid area beside the gates and shows the two lines’ platform lifts separately.',
        source: TRTC_WENHU_BR11_STATION.id,
      },
      {
        text: 'The route history records that the earlier Dunhua South and North Road proposal was changed to Fuxing South and North Roads because of the existing tree-lined avenue and the pressure of stations in narrow streets.',
        source: DORTS_WENHU_HIGH_RISE_ROUTE.id,
      },
      {
        text: 'DORTS describes the chosen corridor as dense commercial and residential frontage where the passenger and economic benefits of the alignment mattered.',
        source: DORTS_WENHU_HIGH_RISE_ROUTE.id,
      },
      {
        text: 'The station was designed within a twelve-station programme that had to complete design, tender and construction in one year, so its structure followed the section’s modular and standardised family.',
        source: DORTS_WENHU_HIGH_RISE_DESIGN.id,
      },
      {
        text: 'The road-centre station forms used either single-column cantilevers or conventional beam-and-column frames according to the site.',
        source: DORTS_WENHU_HIGH_RISE_DESIGN.id,
      },
      {
        text: 'The common materials were aluminium panels, laminated glass, curved roofs and frames, later judged by DORTS to be heavier and less transparent than the design intent.',
        source: DORTS_WENHU_HIGH_RISE_MATERIALS.id,
      },
      {
        text: 'The elevated side-platform type used platform doors, transparent lifts and metal-and-glass envelopes without platform air-conditioning.',
        source: DORTS_WENHU_HIGH_RISE_FORM.id,
      },
      {
        text: 'Its light-blue base colour was part of the section-wide visual system rather than a station-specific colour choice.',
        source: DORTS_WENHU_HIGH_RISE_COLOUR.id,
      },
      {
        text: 'The project divided turnkey system work from domestic civil, architecture, tunnel and depot work, with operation treated as another contract component.',
        source: DORTS_WENHU_TECHNICAL_CONTRACTS.id,
      },
      {
        text: 'The rubber-tyre concrete running surface later required night work for spalling, cracking, roughness and noise, with epoxy mortar and emery used in repairs.',
        source: DORTS_WENHU_TECHNICAL_RUNNING_SURFACE.id,
      },
      {
        text: 'The section opened on 28 March 1996 as Taiwan’s first driverless medium-capacity metro.',
        source: DORTS_WENHU_OPENING_HISTORY.id,
      },
      {
        text: 'The full primary pages checked here do not identify CC403’s individual contractor, award date or final package value, so those fields remain TBC.',
        source: DORTS_WENHU_HIGH_RISE_PACKAGES.id,
      },
    ],
  },
  BR12: {
    structure: 'elevated',
    engineering: 'BR2',
    exits: 1,
    sources: [
      DORTS_WENHU_PROJECT,
      DORTS_WENHU_ARCHITECTURE,
      DORTS_WENHU_HIGH_RISE_PACKAGES,
      DORTS_WENHU_HIGH_RISE_DESIGN,
      DORTS_WENHU_HIGH_RISE_ROUTE,
      DORTS_WENHU_HIGH_RISE_MATERIALS,
      DORTS_WENHU_HIGH_RISE_COLOUR,
      DORTS_WENHU_HIGH_RISE_FORM,
      DORTS_WENHU_TECHNICAL_CONTRACTS,
      DORTS_WENHU_TECHNICAL_RUNNING_SURFACE,
      DORTS_WENHU_OPENING_HISTORY,
      TRTC_WENHU_OPERATIONS,
    ],
    prose: [
      {
        text: 'At BR12, the Neihu extension leaves the Muzha section from the station’s tail tracks and follows Fuxing North Road toward Minzu East Road before entering Songshan Airport.',
        source: DORTS_WENHU_PROJECT.id,
      },
      {
        text: 'DORTS’s representative Zhongshan Junior High station drawing places this urban elevated work in a design constrained by road-side sites and single-column loads: its mass was kept away from adjacent buildings and expressed in steel and glass.',
        source: DORTS_WENHU_ARCHITECTURE.id,
      },
      {
        text: 'The high-elevated-station volume places Zhongshan Junior High in CC403 with Songshan Airport, Nanjing East Road and Zhongxiao Fuxing, and gives the station a 70-metre platform.',
        source: DORTS_WENHU_HIGH_RISE_PACKAGES.id,
      },
      {
        text: 'The project’s current route description continues from the station toward Fuxing North Road and Minzu East Road, while the architecture source uses the station as its example of the constrained road-side design problem.',
        source: DORTS_WENHU_PROJECT.id,
      },
      {
        text: 'DORTS says all twelve Muzha stations had to be designed, tendered and built in one year, which drove the use of systematised, modular and standardised station components.',
        source: DORTS_WENHU_HIGH_RISE_DESIGN.id,
      },
      {
        text: 'The two structural responses were a single-column cantilever and a conventional beam-and-column frame, selected according to the existing site.',
        source: DORTS_WENHU_HIGH_RISE_DESIGN.id,
      },
      {
        text: 'The wider alignment history records the change from a proposed Dunhua corridor to Fuxing South and North Roads because of trees, narrow streets and the pressure of trains beside buildings.',
        source: DORTS_WENHU_HIGH_RISE_ROUTE.id,
      },
      {
        text: 'The standard station envelope combined aluminium panels, laminated glass, curved roofs and frames, although DORTS later judged that thick outer frames reduced the intended lightweight transparency.',
        source: DORTS_WENHU_HIGH_RISE_MATERIALS.id,
      },
      {
        text: 'The Muzha elevated side-platform type used platform doors, transparent lifts and metal-and-glass envelopes, with no platform air-conditioning.',
        source: DORTS_WENHU_HIGH_RISE_FORM.id,
      },
      {
        text: 'Its light-blue base colour belonged to the repeated Muzha-section system, which DORTS later described as visually monotonous when used without station-specific variation.',
        source: DORTS_WENHU_HIGH_RISE_COLOUR.id,
      },
      {
        text: 'The construction arrangement divided turnkey system work from domestic civil, architecture, tunnel and depot work, while operation occupied a separate contract role.',
        source: DORTS_WENHU_TECHNICAL_CONTRACTS.id,
      },
      {
        text: 'The station’s rubber-tyre concrete running surface shared the later section-wide maintenance problems of spalling, cracking, roughness and noise.',
        source: DORTS_WENHU_TECHNICAL_RUNNING_SURFACE.id,
      },
      {
        text: 'TRTC’s live log records a 4 August 2026 dropped-object inspection near the station, where staff removed a blue tarpaulin from the track area in about three minutes while normal operation continued.',
        source: TRTC_WENHU_OPERATIONS.id,
      },
      {
        text: 'The same log records a 9 June 2026 train-door equipment alert between Songshan Airport and Zhongshan Junior High; about 190 passengers changed trains at the station and the next train arrived about one minute later.',
        source: TRTC_WENHU_OPERATIONS.id,
      },
      {
        text: 'The Muzha section opened on 28 March 1996 as Taiwan’s first driverless medium-capacity metro.',
        source: DORTS_WENHU_OPENING_HISTORY.id,
      },
      {
        text: 'The full primary pages checked here do not identify CC403’s individual contractor, award date or final package value, so those fields remain TBC.',
        source: DORTS_WENHU_HIGH_RISE_PACKAGES.id,
      },
    ],
  },
  BR13: {
    structure: 'underground',
    engineering: 'BR1',
    exits: 3,
    sources: [
      DORTS_WENHU_PROJECT,
      DORTS_WENHU_NEIHU_ARCHITECTURE,
      DORTS_WENHU_PUBLIC_ART,
      DORTS_WENHU_NEIHU_PUBLIC_ART_PROCESS,
      DORTS_WENHU_CB420_AIRPORT_TUNNEL,
    ],
    prose: [
      {
        text: 'Songshan Airport was not part of the first Neihu alignment: the project record says the Ministry of Transportation ordered a feasibility study in ROC 89 (2000) for a station that would directly serve airport trips.',
        source: DORTS_WENHU_PROJECT.id,
      },
      {
        text: 'DORTS reports that the evaluation found an airport station on the Neihu Line more feasible in engineering terms and compatible with the construction schedule, after which the route was adjusted and the station added.',
        source: DORTS_WENHU_PROJECT.id,
      },
      {
        text: 'The same project record says the Executive Yuan agreed in principle in ROC 90 (2001), the Public Construction Commission agreed to the funding arrangement in ROC 91 (2002), and the revised project cost was NT$60.997 billion.',
        source: DORTS_WENHU_PROJECT.id,
      },
      {
        text: 'The route leaves its elevated approach at Minzu East Road, enters the airport, and places the station beneath the surface car park in front of the terminal building.',
        source: DORTS_WENHU_PROJECT.id,
      },
      {
        text: 'The project table identifies the airport station as BR1 in the Neihu engineering sequence, while the operating station is BR13; the two identifiers belong to different numbering systems.',
        source: DORTS_WENHU_PROJECT.id,
      },
      {
        text: 'The CB420 section starts east of the station, uses shield tunnels below Songshan Airport, crosses the expressway and Keelung River, reaches Dazhi, and continues to the point where the line emerges for its elevated section.',
        source: DORTS_WENHU_CB420_AIRPORT_TUNNEL.id,
      },
      {
        text: 'That section is about 3,460 metres long, with separate airport tunnel drives of 1,241 metres and 1,286 metres for the down and up lines.',
        source: DORTS_WENHU_CB420_AIRPORT_TUNNEL.id,
      },
      {
        text: 'The two drives passed below the runway, apron and taxiway, and the published cover decreases from 27.8 metres near the Huajiang Street ventilation shaft to 18.8 metres at the airport-station end.',
        source: DORTS_WENHU_CB420_AIRPORT_TUNNEL.id,
      },
      {
        text: 'DORTS records the airport crossing as Taipei Basin K1 lake-deposit ground, with a 50-to-60-metre layer of very soft silty clay whose low self-support and sensitivity made settlement a central construction concern.',
        source: DORTS_WENHU_CB420_AIRPORT_TUNNEL.id,
      },
      {
        text: 'Because airport rules constrained when workers could enter and observe the site, the monitoring system combined automatic reading and transmission with manual observation during the night-time airport closure.',
        source: DORTS_WENHU_CB420_AIRPORT_TUNNEL.id,
      },
      {
        text: 'The down-line shield drive launched on 8 October 2003 and reached the station diaphragm wall on 30 June 2004; the up-line drive launched on 8 September 2004 and arrived on 7 September 2005.',
        source: DORTS_WENHU_CB420_AIRPORT_TUNNEL.id,
      },
      {
        text: 'DORTS’s architecture account calls the station’s design concept “A Story of Flight”, using spiral-wing steel roofs to link the entrances and accessible lift and to suggest a pair of wings waiting to depart.',
        source: DORTS_WENHU_NEIHU_ARCHITECTURE.id,
      },
      {
        text: 'That account also describes a ground plaza, water feature and curved ventilation-shaft wall as a combined place for activity, rest and artistic work rather than treating the entrance as only a circulation object.',
        source: DORTS_WENHU_NEIHU_ARCHITECTURE.id,
      },
      {
        text: 'The official art table records Great Age of Travel at Exit 3, Flight Plan on the concourse wall and Dream Flight in the platform void, completed in October 2008 through open selection.',
        source: DORTS_WENHU_PUBLIC_ART.id,
      },
      {
        text: 'DORTS’s broader public-art record says Neihu works other than the donated Gangqian piece were funded through the Neihu Line construction budget, with DORTS handling selection and valuation and its eastern works office handling contracts, material subsidies and implementation.',
        source: DORTS_WENHU_NEIHU_PUBLIC_ART_PROCESS.id,
      },
      {
        text: 'The checked CB420 and project pages identify the section and programme but do not publish an individual station contractor, award date or final station-package value, so those fields remain TBC.',
        source: DORTS_WENHU_CB420_AIRPORT_TUNNEL.id,
      },
    ],
    note: '松山機場站. Underground on two primary sources: DORTS 地下段3.9公里，2座地下站 on the Neihu section, and DORTS 車站建築設計 counting ten elevated plus Dazhi out of twelve, which leaves this one. Engineering BR1 despite being a Neihu-section station — the station was added to the project in 2001, after the B series had been allocated.',
  },
  BR14: {
    structure: 'underground',
    engineering: 'B1',
    exits: 3,
    sources: [
      DORTS_WENHU_PROJECT,
      DORTS_WENHU_ARCHITECTURE,
      DORTS_WENHU_NEIHU_ARCHITECTURE,
      DORTS_WENHU_NEIHU_PUBLIC_ART_PROCESS,
      DORTS_WENHU_CB420_AIRPORT_TUNNEL,
      DORTS_WENHU_NEIHU_CONSTRUCTION_METHOD,
    ],
    prose: [
      {
        text: 'Dazhi is one of the Neihu section’s two underground stations.',
        source: DORTS_WENHU_NEIHU_ARCHITECTURE.id,
      },
      {
        text: 'The project table gives it the engineering identifier B1 while the operating registry calls it BR14; the two identifiers belong to different numbering systems.',
        source: DORTS_WENHU_PROJECT.id,
      },
      {
        text: 'DORTS places the station at Beian Road 458 Lane 41 Alley, underground near the south end of the Ziqiang Tunnel roundabout.',
        source: DORTS_WENHU_PROJECT.id,
      },
      {
        text: 'East of Dazhi, the line emerges beside the roundabout and continues east as the Neihu Line’s elevated section; west of it, the route has crossed the airport and Keelung River underground.',
        source: DORTS_WENHU_PROJECT.id,
      },
      {
        text: 'The CB420 section therefore joins two different construction environments: the airport and river crossing in shield tunnel, then the approach to the elevated structure beyond Dazhi.',
        source: DORTS_WENHU_CB420_AIRPORT_TUNNEL.id,
      },
      {
        text: 'Its published scope is about 3,460 metres from the airport-station area through the airport, past the Huajiang Street ventilation shaft, across the expressway and river, and onward to the emergence point.',
        source: DORTS_WENHU_CB420_AIRPORT_TUNNEL.id,
      },
      {
        text: 'The airport portion used two shield drives, 1,241 metres for the down line and 1,286 metres for the up line, with the machine dismantled and redeployed between drives.',
        source: DORTS_WENHU_CB420_AIRPORT_TUNNEL.id,
      },
      {
        text: 'The technical record describes the route through K1 lake-deposit geology, including very soft silty clay with high sensitivity and low self-support, conditions that made disturbance and long-term consolidation settlement important risks.',
        source: DORTS_WENHU_CB420_AIRPORT_TUNNEL.id,
      },
      {
        text: 'The airport’s restricted work windows also required automatic monitoring and manual night observation, a constraint that shaped the section’s construction control even though the station itself lies beyond the runway crossing.',
        source: DORTS_WENHU_CB420_AIRPORT_TUNNEL.id,
      },
      {
        text: 'The technical description of the Neihu Line says the underground station bodies were built by cut-and-cover while the interstation portions used shield tunnelling, separating the road-impact problem at the station from the quieter tunnel drives between stations.',
        source: DORTS_WENHU_NEIHU_CONSTRUCTION_METHOD.id,
      },
      {
        text: 'DORTS’s architecture overview confirms that Songshan Airport and Dazhi are the Neihu section’s two underground stations, with the remaining ten stations elevated.',
        source: DORTS_WENHU_NEIHU_ARCHITECTURE.id,
      },
      {
        text: 'The same architecture account assigns the elevated section a separate vocabulary built from local environmental and human characteristics, so Dazhi marks the buried threshold before the line becomes the visible “river in the sky”.',
        source: DORTS_WENHU_NEIHU_ARCHITECTURE.id,
      },
      {
        text: 'The public-art chapter’s summary list labels Dazhi with the design topic “Landscape”, but its later list of executed Neihu artworks does not include a Dazhi work among the stations actually carried out.',
        source: DORTS_WENHU_NEIHU_PUBLIC_ART_PROCESS.id,
      },
      {
        text: 'Those are two different statements on the same official page: one is a topic list and the other is an executed-artwork list, so this page does not convert the former into a confirmed installed artwork.',
        source: DORTS_WENHU_NEIHU_PUBLIC_ART_PROCESS.id,
      },
      {
        text: 'The checked primary records identify CB420 and the underground construction method but do not publish an individual Dazhi station contractor, award date or final package value, so those fields remain TBC.',
        source: DORTS_WENHU_CB420_AIRPORT_TUNNEL.id,
      },
    ],
    note: '大直站. Named outright as the section’s one underground station by DORTS 車站建築設計: 除大直站為地下車站外，其餘共有十座高架車站.',
  },
  BR15: {
    structure: 'elevated',
    engineering: 'B2',
    exits: 3,
    sources: [
      DORTS_WENHU_PROJECT,
      DORTS_WENHU_ARCHITECTURE,
      DORTS_WENHU_PUBLIC_ART,
      DORTS_WENHU_NEIHU_PUBLIC_ART_PROCESS,
      DORTS_WENHU_CB423_SCOPE,
      DORTS_WENHU_CB423_STATIONS,
      DORTS_WENHU_NEIHU_CONTEXT,
      DORTS_WENHU_NEIHU_DISTRICT,
      DORTS_WENHU_NEIHU_THEMES,
      DORTS_WENHU_NEIHU_ART_INTEGRATION,
      DORTS_WENHU_NEIHU_SPECIAL_FORMS,
      DORTS_WENHU_JIANNAN_LANDSCAPE,
    ],
    prose: [
      {
        text: 'Jiannan Road is the first elevated station in the Neihu section, positioned east of the Ziqiang Tunnel roundabout where the buried alignment has returned to the surface.',
        source: DORTS_WENHU_CB423_STATIONS.id,
      },
      {
        text: 'The CB423 work-scope table assigns the B2–B5 station group and its connecting elevated bridge to one construction package under design package DB145.',
        source: DORTS_WENHU_CB423_SCOPE.id,
      },
      {
        text: 'The technical station record describes B2 as an east–west elevated side-platform station at the east side of the Beian Road and Ziqiang Tunnel intersection, with an approximately 99-metre station body and an 83-metre platform.',
        source: DORTS_WENHU_CB423_STATIONS.id,
      },
      {
        text: 'The engineering volume also treats the B2 station’s western and eastern turnout areas as special bridge units, alongside the regular prestressed U-girder spans used between road crossings.',
        source: DORTS_WENHU_CB423_STATIONS.id,
      },
      {
        text: 'DORTS places B2 through B5 in the Neihu corridor’s residential–rural landscape zone, a classification that includes some commercial activity but treats the surrounding character as the quieter part of the district.',
        source: DORTS_WENHU_NEIHU_DISTRICT.id,
      },
      {
        text: 'The architecture volume connects that zone to Neihu’s former agricultural landscape, its mountains and the Keelung River, and uses the shared “Lake-City Story” theme to link architecture, landscape and public art.',
        source: DORTS_WENHU_NEIHU_CONTEXT.id,
      },
      {
        text: 'For Jiannan Road specifically, the station theme is “Mountain Ridge” and the associated colour is rice-scent green, a deliberate reference to the local mountain and rural setting.',
        source: DORTS_WENHU_NEIHU_THEMES.id,
      },
      {
        text: 'The station-front plaza was planned as an open urban space for transfers, waiting, gathering and crossing, while also providing room for local activities rather than being only a forecourt.',
        source: DORTS_WENHU_JIANNAN_LANDSCAPE.id,
      },
      {
        text: 'Its paving uses free curves to evoke mountain contours together with a gridded pattern recalling agricultural fields, and the design called for a public-art competition whose work would express Neihu’s natural and human history.',
        source: DORTS_WENHU_JIANNAN_LANDSCAPE.id,
      },
      {
        text: 'The official art table records Frog’s Sky at the columns and ceiling beside Exit 2, completed in April 2009 by Chen Chien through open selection, with a listed cost of NT$6 million.',
        source: DORTS_WENHU_PUBLIC_ART.id,
      },
      {
        text: 'The work’s recorded materials include stainless-steel cable, mirror-finished steel, transparent panels, mirror film, LED tube lights and stone, a material palette that extends the station’s designed relationship between structure and landscape.',
        source: DORTS_WENHU_PUBLIC_ART.id,
      },
      {
        text: 'Across the elevated section, DORTS’s design system applies the route colour to platform-door and wayfinding elements while using station colours on columns, paving, wall panels, floors and doors.',
        source: DORTS_WENHU_NEIHU_ART_INTEGRATION.id,
      },
      {
        text: 'The station’s rounded raised arches were described as a mountain-city and gateway-to-Neihu image, while the internal lighting was intended to read like a lantern at night.',
        source: DORTS_WENHU_NEIHU_SPECIAL_FORMS.id,
      },
      {
        text: 'The checked CB423 records establish the station group and structure but do not publish an individual station contractor, award date or final package value, so those fields remain TBC.',
        source: DORTS_WENHU_CB423_SCOPE.id,
      },
    ],
    planned: [
      {
        line: 'Circular North Ring',
        note: 'The Circular Line’s North Ring is planned to end here, meeting the East Ring, and to interchange with Wenhu.',
        sourceTitle: 'DORTS, 環狀線北環及南環',
        sourceUrl: 'https://www.dorts.gov.taipei/cp.aspx?n=7CEEE7ECF48CE83F',
      },
    ],
  },
  BR16: {
    structure: 'elevated',
    engineering: 'B3',
    exits: 2,
    sources: [
      DORTS_WENHU_PROJECT,
      DORTS_WENHU_ARCHITECTURE,
      DORTS_WENHU_PUBLIC_ART,
      DORTS_WENHU_NEIHU_PUBLIC_ART_PROCESS,
      DORTS_WENHU_CB423_SCOPE,
      DORTS_WENHU_CB423_STATIONS,
      DORTS_WENHU_NEIHU_CONTEXT,
      DORTS_WENHU_NEIHU_DISTRICT,
      DORTS_WENHU_NEIHU_THEMES,
      DORTS_WENHU_NEIHU_DESIGN_PRINCIPLES,
      DORTS_WENHU_NEIHU_ART_INTEGRATION,
      DORTS_WENHU_NEIHU_PLATFORM_MAINTENANCE,
    ],
    prose: [
      {
        text: 'Xihu is the B3 station in the CB423 group, the same package that covers Jiannan Road, Gangqian and Wende and their connecting elevated bridge.',
        source: DORTS_WENHU_CB423_SCOPE.id,
      },
      {
        text: 'The technical record places B3 on Neihu Road Section 1 as an east–west elevated island-platform station, with a station body about 93.5 metres long and 18.3 metres wide and an 83-metre platform.',
        source: DORTS_WENHU_CB423_STATIONS.id,
      },
      {
        text: 'Its entrance was placed at the northwest side of the Neihu Road and Lane 285 intersection on the existing Xihu Market site, with the north-side parking land included in an integrated development arrangement.',
        source: DORTS_WENHU_CB423_STATIONS.id,
      },
      {
        text: 'The engineering record therefore describes a station whose site planning had to share and reorganise an active urban market and parking property.',
        source: DORTS_WENHU_CB423_STATIONS.id,
      },
      {
        text: 'DORTS places Xihu in the B2–B5 residential–rural design zone, next to new land created when the Keelung River was straightened, and says the surrounding landscape treatment was intended to respond to that condition.',
        source: DORTS_WENHU_NEIHU_DISTRICT.id,
      },
      {
        text: 'The broader Neihu design account treats the river, former agriculture, mountain setting and later urban growth as one historical background for the stations’ architecture and art.',
        source: DORTS_WENHU_NEIHU_CONTEXT.id,
      },
      {
        text: 'Xihu’s station theme is “Butterfly Dance”, paired with a goose-yellow station colour that DORTS says responds both to butterfly colour and to the grey-green modern architecture of the light-industrial district.',
        source: DORTS_WENHU_NEIHU_THEMES.id,
      },
      {
        text: 'Unlike the side-platform stations around it, Xihu is one of the two Neihu stations identified in the design review as having an island platform, and it was therefore exempted from the platform-edge rain-stain correction applied to the side-platform group.',
        source: DORTS_WENHU_NEIHU_PLATFORM_MAINTENANCE.id,
      },
      {
        text: 'The general design system used glass, metal and curved forms to keep elevated stations visually light, with the overpass and vertical circulation treated as elements that could vary from station to station.',
        source: DORTS_WENHU_NEIHU_DESIGN_PRINCIPLES.id,
      },
      {
        text: 'The official art table records Crossings · Transformation on the Xihu Composite Building’s east and north walls and ground, completed in January 2009 through invited selection at a listed cost of NT$7 million.',
        source: DORTS_WENHU_PUBLIC_ART.id,
      },
      {
        text: 'DORTS records the work as combining digitally printed wall imagery, visual illusion, aluminium composite panels and ceramic tiles, with the ground tiles representing changing relationships between people and land.',
        source: DORTS_WENHU_PUBLIC_ART.id,
      },
      {
        text: 'The station-colour system was designed to appear on structural columns, paving, art wall panels, floor areas and doors, so the theme was intended to be read through ordinary station finishes as well as the named artwork.',
        source: DORTS_WENHU_NEIHU_ART_INTEGRATION.id,
      },
      {
        text: 'The public-art record places Xihu’s work within the wider Neihu programme, whose selection methods ranged from open selection to invitation and donation depending on the station and later changes.',
        source: DORTS_WENHU_NEIHU_PUBLIC_ART_PROCESS.id,
      },
      {
        text: 'The checked CB423 pages establish the station’s work package and site interface but do not publish an individual contractor, award date or final station-package value, so those fields remain TBC.',
        source: DORTS_WENHU_CB423_SCOPE.id,
      },
    ],
  },
  BR17: {
    structure: 'elevated',
    engineering: 'B4',
    exits: 2,
    sources: [
      DORTS_WENHU_PROJECT,
      DORTS_WENHU_ARCHITECTURE,
      DORTS_WENHU_PUBLIC_ART,
      DORTS_WENHU_NEIHU_PUBLIC_ART_PROCESS,
      DORTS_WENHU_CB423_SCOPE,
      DORTS_WENHU_CB423_STATIONS,
      DORTS_WENHU_NEIHU_DISTRICT,
      DORTS_WENHU_NEIHU_THEMES,
      DORTS_WENHU_NEIHU_DESIGN_PRINCIPLES,
      DORTS_WENHU_NEIHU_ART_INTEGRATION,
      DORTS_WENHU_NEIHU_PLATFORM_MAINTENANCE,
    ],
    prose: [
      {
        text: 'Gangqian is B4 in the CB423 station group, whose contract scope covers the four elevated stations from Jiannan Road through Wende and the bridge between them.',
        source: DORTS_WENHU_CB423_SCOPE.id,
      },
      {
        text: 'The technical station record places B4 on the north side of Neihu Road Section 1 as a southeast–northwest elevated side-platform station, with an approximately 92-metre body, 18.3-metre width and 83-metre platform.',
        source: DORTS_WENHU_CB423_STATIONS.id,
      },
      {
        text: 'The station is part of the corridor DORTS classifies as residential–rural in overall character, even though the same B2–B5 zone includes commercial activity and the district’s changing urban edge.',
        source: DORTS_WENHU_NEIHU_DISTRICT.id,
      },
      {
        text: 'Its design theme is “Flower Language”, with an orange-yellow station colour chosen to echo the vivid colours of the flower market identified in DORTS’s design table.',
        source: DORTS_WENHU_NEIHU_THEMES.id,
      },
      {
        text: 'The shared Neihu architecture uses a common family of curved roofs, glass and metal side treatments, then differentiates stations through colour, theme and the treatment of their entrances and overpasses.',
        source: DORTS_WENHU_NEIHU_DESIGN_PRINCIPLES.id,
      },
      {
        text: 'As a side-platform station, Gangqian belongs to the eight-station group for which DORTS reviewed platform-edge weathering and required a design correction.',
        source: DORTS_WENHU_NEIHU_PLATFORM_MAINTENANCE.id,
      },
      {
        text: 'The official art table records Neihu Peach Blossom Land on the wall at the end of the Exit 1 stairs, completed in December 2006 as a donated work rather than a work funded through the original construction-art budget.',
        source: DORTS_WENHU_PUBLIC_ART.id,
      },
      {
        text: 'The table names Tsai Wen-hsun and 84 other contributors and describes the work as a community embroidery project supported by local business, resident participation and professional artist guidance.',
        source: DORTS_WENHU_PUBLIC_ART.id,
      },
      {
        text: 'The technical-art chapter adds an important qualification: the Gangqian piece was donated later, was not part of the original public-art plan, and was placed on the stair-end wall where it cannot be viewed closely.',
        source: DORTS_WENHU_NEIHU_PUBLIC_ART_PROCESS.id,
      },
      {
        text: 'That donation explains why Gangqian’s artwork is recorded differently from the open-selection works at Jiannan Road, Songshan Airport and Wende and the invited-selection work at Xihu.',
        source: DORTS_WENHU_NEIHU_PUBLIC_ART_PROCESS.id,
      },
      {
        text: 'The station-colour plan places route brown on platform-door and sign systems while using the flower-language colour more broadly on structural and interior elements.',
        source: DORTS_WENHU_NEIHU_ART_INTEGRATION.id,
      },
      {
        text: 'The checked CB423 and public-art records establish the station group, form and donated artwork but do not publish an individual station contractor, award date or final package value, so those fields remain TBC.',
        source: DORTS_WENHU_CB423_SCOPE.id,
      },
    ],
  },
  BR18: {
    structure: 'elevated',
    engineering: 'B5',
    exits: 2,
    sources: [
      DORTS_WENHU_PROJECT,
      DORTS_WENHU_ARCHITECTURE,
      DORTS_WENHU_PUBLIC_ART,
      DORTS_WENHU_NEIHU_PUBLIC_ART_PROCESS,
      DORTS_WENHU_CB423_SCOPE,
      DORTS_WENHU_CB423_STATIONS,
      DORTS_WENHU_NEIHU_CONTEXT,
      DORTS_WENHU_NEIHU_DISTRICT,
      DORTS_WENHU_NEIHU_THEMES,
      DORTS_WENHU_NEIHU_DESIGN_PRINCIPLES,
      DORTS_WENHU_NEIHU_ART_INTEGRATION,
    ],
    prose: [
      {
        text: 'Wende is B5 in the CB423 package, the four-station elevated group that includes Jiannan Road, Xihu and Gangqian.',
        source: DORTS_WENHU_CB423_SCOPE.id,
      },
      {
        text: 'DORTS describes B5 as an east–west elevated side-platform station with an approximately 92-metre station body, 22.3-metre width and 83-metre platform.',
        source: DORTS_WENHU_CB423_STATIONS.id,
      },
      {
        text: 'The project table places the operating station at Wende Road in Neihu.',
        source: DORTS_WENHU_PROJECT.id,
      },
      {
        text: 'Its design theme is “Bird Flight”, and DORTS pairs it with a lake-green colour chosen to reflect Bihu Park’s natural setting and water birds.',
        source: DORTS_WENHU_NEIHU_THEMES.id,
      },
      {
        text: 'The Neihu architecture volume treats the district’s parks, mountains and Keelung River as part of the station design background, while using “Lake-City Story” to connect older landscape and newer urban transport.',
        source: DORTS_WENHU_NEIHU_CONTEXT.id,
      },
      {
        text: 'The shared station language uses a light, geometric structure with glass and metal, semi-open platform edges, natural ventilation and station-specific colour rather than six unrelated building designs.',
        source: DORTS_WENHU_NEIHU_DESIGN_PRINCIPLES.id,
      },
      {
        text: 'The official art table records Bird Flight beside the accessible lift at Exit 2, completed in October 2008 by Peng Chih-huang through open selection.',
        source: DORTS_WENHU_PUBLIC_ART.id,
      },
      {
        text: 'The table describes the work as combining digital-image composition and mosaic around Bihu Park and the movement of white egrets.',
        source: DORTS_WENHU_PUBLIC_ART.id,
      },
      {
        text: 'DORTS lists ceramic-tile and ceramic-mosaic materials and a design fee of NT$200,000, with the physical work carried out by the department’s contractor.',
        source: DORTS_WENHU_PUBLIC_ART.id,
      },
      {
        text: 'The station-colour plan places the line colour at platform doors and signs and the station colour across selected columns, paving, wall panels, floors and doors, making the bird-flight theme part of the everyday finish schedule.',
        source: DORTS_WENHU_NEIHU_ART_INTEGRATION.id,
      },
      {
        text: 'The public-art chapter says Wende was one of the stations for which DORTS used open selection, and records the Neihu implementation process as separate from the later donated Gangqian work.',
        source: DORTS_WENHU_NEIHU_PUBLIC_ART_PROCESS.id,
      },
      {
        text: 'Wende therefore combines a station-specific environmental theme with a standardised elevated structure whose form was adjusted for the local corridor and maintained through a common material system.',
        source: DORTS_WENHU_NEIHU_DESIGN_PRINCIPLES.id,
      },
      {
        text: 'The checked CB423 and public-art records establish the station group, dimensions, theme and artwork but do not publish an individual station contractor, award date or final package value, so those fields remain TBC.',
        source: DORTS_WENHU_CB423_SCOPE.id,
      },
    ],
  },
  BR19: { structure: 'elevated', engineering: 'B6', exits: 2 },
  BR20: {
    structure: 'elevated',
    engineering: 'B7',
    exits: 2,
    sources: [DORTS_WENHU_ARCHITECTURE, DORTS_WENHU_PUBLIC_ART],
    prose: [
      {
        text: 'DORTS names Dahu Park among the Neihu section’s specially shaped stations, alongside Jiannan Road and Nangang Exhibition Center.',
        source: DORTS_WENHU_ARCHITECTURE.id,
      },
      {
        text: 'Its public artwork, Kite—Soaring in the Sky, follows the escalator’s movement and uses the glazed façade to connect the flying forms with Dahu Park’s mountains, water, and aquatic life.',
        source: DORTS_WENHU_PUBLIC_ART.id,
      },
    ],
  },
  BR21: { structure: 'elevated', engineering: 'B8', exits: 2 },
  BR22: {
    structure: 'elevated',
    engineering: 'B9',
    exits: 3,
    sources: [DORTS_WENHU_PUBLIC_ART],
    prose: [
      {
        text: 'Lake Ripples at Exit 3 turns the wall into DORTS’s “lake city story”: wind and rain create overlapping ripples that stand for shared memory in a city with lakes.',
        source: DORTS_WENHU_PUBLIC_ART.id,
      },
    ],
    planned: [
      {
        line: 'Xidong Line',
        note: 'New Taipei’s Xidong Line lists its SB10 station as interchanging with Wenhu here.',
        sourceTitle: 'New Taipei DORTS, 汐東捷運',
        sourceUrl: 'https://www.dorts.ntpc.gov.tw/about/route/8l19Zo7NZveD',
      },
    ],
  },
  BR23: { structure: 'elevated', engineering: 'B10', exits: 2 },
  BR24: {
    structure: 'elevated',
    engineering: 'B11',
    exits: 8,
    sources: [DORTS_NANGANG_ARCHITECTURE, DORTS_WENHU_PUBLIC_ART],
    prose: [
      {
        text: 'DORTS’s local design brief ties the station to Nangang Software Park, Nangang Economic and Trade Park, and Academia Sinica, setting the theme “digital space, e-station” to express the surrounding technology landscape.',
        source: DORTS_NANGANG_ARCHITECTURE.id,
      },
      {
        text: 'The same brief uses dawn blue and light, thin, transparent materials, with barcode imagery, to make the station read as an urban technology landmark.',
        source: DORTS_NANGANG_ARCHITECTURE.id,
      },
      {
        text: 'The official art table treats Light Gaps, Glimpses, and River in the Sky as a three-work ensemble: entrance columns form a visual landmark, the wall interacts with moving passengers, and the platform skylight carries water, light, and motion.',
        source: DORTS_WENHU_PUBLIC_ART.id,
      },
    ],
  },

}
