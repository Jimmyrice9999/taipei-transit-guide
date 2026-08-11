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
// TDX files New Taipei's two light rail lines under their own operator codes,
// not under NTMC — see the note on OPERATORS in scripts/fetch-tdx.mjs.
import ntdlrtLines from '../data/tdx/NTDLRT/line.json' with { type: 'json' }
import ntalrtLines from '../data/tdx/NTALRT/line.json' with { type: 'json' }

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
  ['NTDLRT', ntdlrtLines],
  ['NTALRT', ntalrtLines],
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
const DISPLAY_ORDER = ['BR', 'R', 'G', 'O', 'BL', 'Y', 'A', 'V', 'K'] as const

/**
 * Which lines are heavy metro and which are light rail.
 *
 * The site said "7 lines" everywhere and meant "the seven the fetch happened
 * to ask for". V and K joined in run 10 — see the operator note in
 * `scripts/fetch-tdx.mjs` for why they were absent — and they are a different
 * kind of railway: street-running in places, two-car, much shorter. Lumping
 * them into a single count would make every total on the site quietly mean
 * something new, and a length bar chart that ranks a 7 km tramway against a
 * 51 km airport express without saying they are different things is a chart
 * that misleads.
 *
 * So the distinction is recorded here, once, and the pages that need it read
 * it from here rather than hard-coding a list of codes.
 */
const LIGHT_RAIL = new Set(['V', 'K'])

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
  /** Light rail rather than heavy metro. See LIGHT_RAIL above. */
  lightRail: boolean
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
    lightRail: LIGHT_RAIL.has(code),
  }
}

/**
 * A branch's tint of its parent line's colour.
 *
 * Xinbeitou (R22A) and Xiaobitan (G03A) were drawn in their parent's exact
 * colour, which made a two-station shuttle look like part of the trunk. They
 * are separately-operated shuttles and the official material distinguishes
 * them — Xinbeitou's trains carry their own livery and the branch reads as
 * pinkish against Tamsui red.
 *
 * Derived, not picked: the parent colour mixed toward white by `amount`, so a
 * change at source propagates and no second colour is ever transcribed by
 * hand. It stays a tint of the parent rather than becoming a colour of its
 * own, which is the point — the branch belongs to the line.
 *
 * **This is a fill, never text.** A tint is lighter than its parent by
 * construction, and the parent colours are already at the edge of what carries
 * text on white; tinting further would take several of them under 3:1. Branch
 * labels use the parent's `ink`, which is contrast-checked, and the tint is
 * only ever the stroke. That also keeps the colour-is-never-alone rule intact:
 * the branch carries its own station-code badge either way.
 */
export function branchTint(line: Line, amount = 0.45): string {
  const hex = line.map.replace('#', '')
  const mix = (i: number) => {
    const channel = parseInt(hex.slice(i * 2, i * 2 + 2), 16)
    return Math.round(channel + (255 - channel) * amount)
  }
  return `#${[0, 1, 2].map((i) => mix(i).toString(16).padStart(2, '0')).join('').toUpperCase()}`
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
  lightRail: false,
}

/** Heavy metro only — what "the metro network" means on this site. */
export const METRO_LINES = LINES.filter((l) => !l.lightRail)

/** The two light rail lines, which are counted and drawn separately. */
export const LIGHT_RAIL_LINES = LINES.filter((l) => l.lightRail)

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
