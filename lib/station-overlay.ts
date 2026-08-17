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
    planned: [
      {
        line: 'Circular South Ring',
        note: 'The Circular Line’s South Ring is planned to run from here to 大坪林 Dapinglin, interchanging with Wenhu at this station.',
        sourceTitle: 'DORTS, 環狀線北環及南環',
        sourceUrl: 'https://www.dorts.gov.taipei/cp.aspx?n=7CEEE7ECF48CE83F',
      },
    ],
  },
  BR02: { structure: 'elevated', engineering: 'BR12', exits: 1 },
  BR03: { structure: 'elevated', engineering: 'BR11', exits: 1 },
  BR04: { structure: 'elevated', engineering: 'BR10', exits: 1 },
  BR05: { structure: 'elevated', engineering: 'BR9', exits: 1 },
  BR06: { structure: 'elevated', engineering: 'BR8', exits: 1 },
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
  BR20: { structure: 'elevated', engineering: 'B7', exits: 2 },
  BR21: { structure: 'elevated', engineering: 'B8', exits: 2 },
  BR22: {
    structure: 'elevated',
    engineering: 'B9',
    exits: 3,
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
  BR24: { structure: 'elevated', engineering: 'B11', exits: 8 },

}
