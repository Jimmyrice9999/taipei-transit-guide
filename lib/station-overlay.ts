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

export type Structure = 'elevated' | 'underground' | 'unknown'

export type StationOverlay = {
  structure?: Structure
  /** Why a value is what it is, where that is not obvious. Not rendered. */
  note?: string
}

/**
 * Keyed by station code.
 *
 * Wenhu's two underground stations are BR13 Songshan Airport and BR14 Dazhi.
 * Settled across three runs from two independent directions:
 *
 *   - DORTS's own project record for the Neihu section gives「地下段3.9公里，
 *     2座地下站」— 3.9 km in tunnel, two underground stations, and the Neihu
 *     section is BR13–BR24, which excludes every station the Muzha section
 *     built. That is primary, and it narrows the pair to the northern half.
 *   - zh.wikipedia's 文湖線 infobox names them outright:「地下車站 2座
 *     （松山機場站、大直站）」, corroborated by both station articles.
 *
 * Neither source is a cross-section drawing, which is what would settle the
 * platform depths — those are still not asserted anywhere on the site.
 */
export const STATION_OVERLAY: Record<string, StationOverlay> = {
  BR01: { structure: 'elevated' },
  BR02: { structure: 'elevated' },
  BR03: { structure: 'elevated' },
  BR04: { structure: 'elevated' },
  BR05: { structure: 'elevated' },
  BR06: { structure: 'elevated' },
  BR07: { structure: 'elevated' },
  BR08: { structure: 'elevated' },
  BR09: { structure: 'elevated' },
  BR10: { structure: 'elevated' },
  BR11: { structure: 'elevated' },
  BR12: { structure: 'elevated' },
  BR13: {
    structure: 'underground',
    note: '松山機場站. Named as underground by zh.wikipedia 文湖線 and 松山機場站; consistent with DORTS 地下段3.9公里，2座地下站 on the Neihu section.',
  },
  BR14: {
    structure: 'underground',
    note: '大直站. Named as underground by zh.wikipedia 文湖線 and 大直站; the second of the Neihu section 2座地下站.',
  },
  BR15: { structure: 'elevated' },
  BR16: { structure: 'elevated' },
  BR17: { structure: 'elevated' },
  BR18: { structure: 'elevated' },
  BR19: { structure: 'elevated' },
  BR20: { structure: 'elevated' },
  BR21: { structure: 'elevated' },
  BR22: { structure: 'elevated' },
  BR23: { structure: 'elevated' },
  BR24: { structure: 'elevated' },
}
