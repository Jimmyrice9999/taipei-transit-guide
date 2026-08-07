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

export type Structure = 'elevated' | 'at-grade' | 'underground' | 'unknown'

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
  BR12: { structure: 'elevated', engineering: 'BR2', exits: 1 },
  BR13: {
    structure: 'underground',
    engineering: 'BR1',
    exits: 3,
    note: '松山機場站. Underground on two primary sources: DORTS 地下段3.9公里，2座地下站 on the Neihu section, and DORTS 車站建築設計 counting ten elevated plus Dazhi out of twelve, which leaves this one. Engineering BR1 despite being a Neihu-section station — the station was added to the project in 2001, after the B series had been allocated.',
  },
  BR14: {
    structure: 'underground',
    engineering: 'B1',
    exits: 3,
    note: '大直站. Named outright as the section’s one underground station by DORTS 車站建築設計: 除大直站為地下車站外，其餘共有十座高架車站.',
  },
  BR15: {
    structure: 'elevated',
    engineering: 'B2',
    exits: 3,
    planned: [
      {
        line: 'Circular North Ring',
        note: 'The Circular Line’s North Ring is planned to end here, meeting the East Ring, and to interchange with Wenhu.',
        sourceTitle: 'DORTS, 環狀線北環及南環',
        sourceUrl: 'https://www.dorts.gov.taipei/cp.aspx?n=7CEEE7ECF48CE83F',
      },
    ],
  },
  BR16: { structure: 'elevated', engineering: 'B3', exits: 2 },
  BR17: { structure: 'elevated', engineering: 'B4', exits: 2 },
  BR18: { structure: 'elevated', engineering: 'B5', exits: 2 },
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
