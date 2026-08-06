/**
 * The line registry — the single source of colour on this site.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * SOURCE: OFFICIAL
 *
 * Line colours come from `LineColor` in Taiwan MOTC's TDX platform, fetched with
 * `npm run tdx` and committed under data/tdx/. They are government open data,
 * not community transcription, and they superseded the values this file used to
 * carry — see docs/design-reference.md §1 for the old-to-new record.
 *
 * The Circular Line and the Airport MRT are not operated by TRTC, so their
 * colours come from the New Taipei Metro and Taoyuan Metro line records
 * respectively. Same platform, different operator.
 *
 * To refresh: `npm run tdx`, then `npm run palette` to confirm every derived
 * value still clears WCAG AA.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Each line carries ONE colour from source, `map`. `badge` and `ink` are derived
 * from it at build time, so a change at source propagates automatically and
 * cannot go stale.
 */

import { AA_DERIVE, NEAR_BLACK, WHITE, contrast, darkenUntil, readableOn } from './color.ts'
// `with { type: 'json' }` is required by Node's ESM loader, which `npm run
// palette` uses to import this file directly. Bundlers accept it too.
import trtcLines from '../data/tdx/TRTC/line.json' with { type: 'json' }
import ntmcLines from '../data/tdx/NTMC/line.json' with { type: 'json' }
import tymcLines from '../data/tdx/TYMC/line.json' with { type: 'json' }

type TdxLine = {
  LineID: string
  LineColor: string
  LineName: { En: string; Zh_tw: string }
}

/** Every line record we hold, keyed by line code, with its operator. */
const SOURCE_LINES = new Map<string, { record: TdxLine; operator: string }>()

for (const [operator, records] of [
  ['TRTC', trtcLines],
  ['NTMC', ntmcLines],
  ['TYMC', tymcLines],
] as const) {
  for (const record of records as unknown as TdxLine[]) {
    if (record?.LineID && record?.LineColor) {
      SOURCE_LINES.set(record.LineID.toUpperCase(), { record, operator })
    }
  }
}

/**
 * Which lines the site displays, in network order.
 *
 * Listed explicitly rather than taken from the data wholesale, so that adding an
 * operator to the fetch does not silently change the palette. A code here with
 * no source record throws at build — better than rendering a colourless badge.
 */
const DISPLAY_ORDER = ['BR', 'R', 'G', 'O', 'BL', 'Y', 'A'] as const

export type Line = {
  code: string
  name: string
  /** Traditional Chinese line name, from source. */
  nameZh: string
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
  /** Which operator's records this came from. */
  operator: string
}

/** TDX names lines "Wenhu Line"; the UI appends "Line" itself. */
const trimLine = (name: string) => name.replace(/\s+Line$/i, '').trim()

function derive(code: string): Line {
  const source = SOURCE_LINES.get(code)
  if (!source) {
    throw new Error(
      `No TDX line record for "${code}". Run \`npm run tdx\`, or remove it from DISPLAY_ORDER.`,
    )
  }

  const { record, operator } = source
  // TDX publishes lowercase hex; normalise so it matches everywhere else.
  const map = record.LineColor.trim().toUpperCase()

  // Prefer the official colour untouched. Most lines can carry white or
  // near-black text at AA; only darken the fill when neither works.
  // Derived against AA_DERIVE, not AA, so nothing lands on the threshold.
  const direct = readableOn(map)
  const badgeBg = direct ? map : darkenUntil(map, (c) => contrast(WHITE, c) >= AA_DERIVE)

  return {
    code,
    name: trimLine(record.LineName?.En ?? code),
    nameZh: trimLine(record.LineName?.Zh_tw ?? ''),
    map,
    badgeBg,
    badgeFg: direct ?? WHITE,
    ink: darkenUntil(map, (c) => contrast(c, WHITE) >= AA_DERIVE),
    needsHairline: contrast(map, WHITE) < 3,
    operator,
  }
}

export const LINES: Line[] = DISPLAY_ORDER.map(derive)

const BY_CODE = new Map(LINES.map((l) => [l.code, l]))

/** Neutral accent for pages with no line set (bus operators, site pages). */
export const NEUTRAL_LINE: Line = {
  code: '',
  name: 'No line',
  nameZh: '',
  map: '#3D454E',
  badgeBg: '#3D454E',
  badgeFg: WHITE,
  ink: '#3D454E',
  needsHairline: false,
  operator: 'site',
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
