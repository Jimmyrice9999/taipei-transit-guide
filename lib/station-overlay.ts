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
  BR07: { structure: 'elevated', engineering: 'BR7', exits: 1 },
  BR08: { structure: 'elevated', engineering: 'BR6', exits: 1 },
  BR09: { structure: 'elevated', engineering: 'BR5', exits: 6 },
  BR10: { structure: 'elevated', engineering: 'BR4', exits: 5 },
  BR11: { structure: 'elevated', engineering: 'BR3', exits: 8 },
  BR12: {
    structure: 'elevated',
    engineering: 'BR2',
    exits: 1,
    sources: [DORTS_WENHU_PROJECT, DORTS_WENHU_ARCHITECTURE],
    prose: [
      {
        text: 'At BR12, the Neihu extension leaves the Muzha section from the station’s tail tracks and follows Fuxing North Road toward Minzu East Road before entering Songshan Airport.',
        source: DORTS_WENHU_PROJECT.id,
      },
      {
        text: 'DORTS’s representative Zhongshan Junior High station drawing places this urban elevated work in a design constrained by road-side sites and single-column loads: its mass was kept away from adjacent buildings and expressed in steel and glass.',
        source: DORTS_WENHU_ARCHITECTURE.id,
      },
    ],
  },
  BR13: {
    structure: 'underground',
    engineering: 'BR1',
    exits: 3,
    sources: [DORTS_WENHU_PROJECT, DORTS_WENHU_PUBLIC_ART],
    prose: [
      {
        text: 'The airport station was added after a Ministry of Transportation study found that placing a station on the Neihu line was more engineering-feasible and compatible with the schedule for direct airport trips.',
        source: DORTS_WENHU_PROJECT.id,
      },
      {
        text: 'DORTS’s alignment then carries the line beneath the airport and the Keelung River, with the station under the surface car park in front of the terminal.',
        source: DORTS_WENHU_PROJECT.id,
      },
      {
        text: 'The official art table records three public works here—Great Age of Travel, Flight Plan, and Dream Flight—placed at Exit 3, the concourse wall, and the platform void, all selected through public competition.',
        source: DORTS_WENHU_PUBLIC_ART.id,
      },
    ],
    note: '松山機場站. Underground on two primary sources: DORTS 地下段3.9公里，2座地下站 on the Neihu section, and DORTS 車站建築設計 counting ten elevated plus Dazhi out of twelve, which leaves this one. Engineering BR1 despite being a Neihu-section station — the station was added to the project in 2001, after the B series had been allocated.',
  },
  BR14: {
    structure: 'underground',
    engineering: 'B1',
    exits: 3,
    sources: [DORTS_WENHU_PROJECT, DORTS_WENHU_ARCHITECTURE],
    prose: [
      {
        text: 'BR14 is where the underground section returns to daylight: DORTS places the emergence beside the roundabout at the south end of Ziqiang Tunnel, on the east side of Beian Road.',
        source: DORTS_WENHU_PROJECT.id,
      },
      {
        text: 'The department’s architecture summary identifies Dazhi as the Neihu section’s sole underground station, while describing the rest of that section as elevated.',
        source: DORTS_WENHU_ARCHITECTURE.id,
      },
    ],
    note: '大直站. Named outright as the section’s one underground station by DORTS 車站建築設計: 除大直站為地下車站外，其餘共有十座高架車站.',
  },
  BR15: {
    structure: 'elevated',
    engineering: 'B2',
    exits: 3,
    sources: [DORTS_WENHU_ARCHITECTURE, DORTS_WENHU_PUBLIC_ART],
    prose: [
      {
        text: 'DORTS names Jiannan Road among the Neihu section’s specially shaped stations, where the standard steel-and-glass vocabulary was adapted into a station-specific form.',
        source: DORTS_WENHU_ARCHITECTURE.id,
      },
      {
        text: 'Its public artwork, Frog’s Sky, uses the fourteen columns beside Exit 2 for reversed views of mountain, stream, and pond, reflecting on the distance between people and nature after urban development.',
        source: DORTS_WENHU_PUBLIC_ART.id,
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
    sources: [DORTS_WENHU_PUBLIC_ART],
    prose: [
      {
        text: 'Xihu’s Crossings · Transformation occupies the Xihu Composite Building’s east and north walls and the ground, combining digitally printed imagery, visual illusion, and ceramic tiles that mark changing relationships with the land.',
        source: DORTS_WENHU_PUBLIC_ART.id,
      },
    ],
  },
  BR17: {
    structure: 'elevated',
    engineering: 'B4',
    exits: 2,
    sources: [DORTS_WENHU_PUBLIC_ART],
    prose: [
      {
        text: 'Neihu Peach Blossom Land at Gangqian is a collective embroidery mural by 84 residents, made with professional artist guidance and local business support.',
        source: DORTS_WENHU_PUBLIC_ART.id,
      },
      {
        text: 'DORTS records it at the wall at the end of Exit 1’s stairs and as a donation, so the work’s location and authorship remain tied to the surrounding community.',
        source: DORTS_WENHU_PUBLIC_ART.id,
      },
    ],
  },
  BR18: {
    structure: 'elevated',
    engineering: 'B5',
    exits: 2,
    sources: [DORTS_WENHU_PUBLIC_ART],
    prose: [
      {
        text: 'Bird Flight beside Exit 2 was designed around Bihu Park and white egrets, using digital image composition and mosaic to make the station space align with nature.',
        source: DORTS_WENHU_PUBLIC_ART.id,
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
