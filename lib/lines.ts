/**
 * The line registry — the single source of truth for colour on this site.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * SOURCE AND ACCURACY
 *
 * These are community-sourced values, NOT an official TRTC specification.
 * Treat them as provisional and do not present them to readers as authoritative.
 *
 * DORTS states its signage system defines fixed Pantone, RGB and CMYK values per
 * line, but that spec is not published openly. Conflicting values circulate: the
 * English Wikipedia sandbox module carries BR #9E652E, R #CB2C30 and G #007749,
 * which disagree with the values below. At least one of the two sets is wrong.
 *
 * TO VERIFY: sample the colours directly from TRTC's official route map and
 * treat those as canonical. Then update `map` below and re-run
 * `npm run palette` — every derived value regenerates from it.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Each entry carries ONE hand-maintained colour, `map` — the official line
 * colour. `badge` and `ink` are derived from it at build time (see below), so a
 * correction to `map` propagates automatically and cannot go stale.
 */

// Explicit .ts extension so `npm run palette` can run this file directly under
// Node's native TypeScript support, sharing the exact code the site ships.
import { AA, NEAR_BLACK, WHITE, contrast, darkenUntil, readableOn } from './color.ts'

type LineSource = {
  code: string
  name: string
  /** The official line colour, as published on route maps. */
  map: string
  /** Provenance for this specific value. Keep it honest and per-value. */
  source: string
}

const SOURCES: LineSource[] = [
  { code: 'BR', name: 'Wenhu', map: '#C48C31', source: 'Wikidata, cited to TRTC 2025 route map' },
  { code: 'R', name: 'Tamsui–Xinyi', map: '#E3002C', source: 'en.wikipedia Module:Adjacent stations' },
  { code: 'G', name: 'Songshan–Xindian', map: '#008659', source: 'en.wikipedia Module:Adjacent stations' },
  { code: 'O', name: 'Zhonghe–Xinlu', map: '#F8B61C', source: 'en.wikipedia Module:Adjacent stations' },
  { code: 'BL', name: 'Bannan', map: '#0070BD', source: 'en.wikipedia Module:Adjacent stations' },
  { code: 'A', name: 'Taoyuan Airport MRT', map: '#8E47AD', source: 'Wikidata (commuter service)' },

  // UNSOURCED — weaker provenance than everything above. This value does not
  // appear in docs/design-reference.md; it is a plausible yellow carried over
  // from an earlier draft. Verify before any Circular Line page is published.
  { code: 'Y', name: 'Circular', map: '#FFDB00', source: 'UNSOURCED — not in design reference' },

  // Future lines already have assigned colours (Wanda–Zhonghe–Shulin is light
  // green, code LG). Add them here and the whole system extends: nav, badges,
  // accents and contrast checks all follow from this one array.
]

export type Line = {
  code: string
  name: string
  /** Official colour. Large fills only — several lines fail contrast on white. */
  map: string
  /** Badge background. The official colour wherever it can carry text. */
  badgeBg: string
  /** Badge text colour, chosen to clear AA against badgeBg. */
  badgeFg: string
  /** Darkened variant safe for accent text and rules on white. */
  ink: string
  /**
   * True when `map` alone is too pale to read as a rule on white, so the accent
   * bar needs its 1px ink hairline to have a defined edge.
   */
  needsHairline: boolean
  source: string
}

function derive(line: LineSource): Line {
  // Prefer the official colour untouched. Most lines can carry white or
  // near-black text at AA; only darken the fill when neither works.
  const direct = readableOn(line.map)
  const badgeBg = direct ? line.map : darkenUntil(line.map, (c) => contrast(WHITE, c) >= AA)
  const badgeFg = direct ?? WHITE

  return {
    code: line.code,
    name: line.name,
    map: line.map,
    badgeBg,
    badgeFg,
    ink: darkenUntil(line.map, (c) => contrast(c, WHITE) >= AA),
    needsHairline: contrast(line.map, WHITE) < 3,
    source: line.source,
  }
}

export const LINES: Line[] = SOURCES.map(derive)

const BY_CODE = new Map(LINES.map((l) => [l.code, l]))

/** Neutral accent for pages with no line set (bus operators, site pages). */
export const NEUTRAL_LINE: Line = {
  code: '',
  name: 'No line',
  map: '#3D454E',
  badgeBg: '#3D454E',
  badgeFg: WHITE,
  ink: '#3D454E',
  needsHairline: false,
  source: 'Site neutral, not a line colour',
}

export function getLine(code: string | undefined | null): Line | undefined {
  if (!code) return undefined
  return BY_CODE.get(code.toUpperCase())
}

/** The accent a page uses. Falls back to the site neutral. */
export function getAccent(code: string | undefined | null): Line {
  return getLine(code) ?? NEUTRAL_LINE
}

/** Line codes longest-first, so "BL" matches before "B" when scanning text. */
export const LINE_CODES_BY_LENGTH = LINES.map((l) => l.code).sort((a, b) => b.length - a.length)

export { NEAR_BLACK, WHITE, contrast }
