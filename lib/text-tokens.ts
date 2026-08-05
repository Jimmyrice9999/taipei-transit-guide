/**
 * Splits a run of text into the pieces the site renders specially:
 * station codes, Chinese, and everything else.
 *
 * Used twice, from two very different places — the Markdown pipeline builds
 * HTML nodes from these tokens, and React components build elements from them.
 * Keeping the splitting here means a station code in a Markdown table and a
 * station code in a frontmatter `facts:` value are recognised identically.
 */

import { LINE_CODES_BY_LENGTH } from './lines.ts'

/**
 * Han and CJK punctuation.
 *
 * Must stay in sync with HAN_RANGES in scripts/subset-cjk.mjs and the
 * unicode-range on the @font-face rules in app/layout.tsx. If they disagree,
 * the browser will request characters the subset does not contain.
 */
export const HAN_PATTERN =
  /[\u2E80-\u2FDF\u3000-\u303F\u3100-\u312F\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF\uFF00-\uFFEF]+/g

/**
 * A station code: a known line code followed by one or two digits, as a whole
 * word. Longest line codes first so BR and BL match before R and B.
 */
export const STATION_CODE_PATTERN = new RegExp(
  `\\b(${LINE_CODES_BY_LENGTH.join('|')})(\\d{1,2})\\b`,
  'g',
)

export type Token =
  | { kind: 'text'; value: string }
  | { kind: 'han'; value: string }
  | { kind: 'code'; value: string; line: string }

function splitHan(value: string): Token[] {
  const out: Token[] = []
  let last = 0
  let match: RegExpExecArray | null
  HAN_PATTERN.lastIndex = 0

  while ((match = HAN_PATTERN.exec(value)) !== null) {
    if (match.index > last) out.push({ kind: 'text', value: value.slice(last, match.index) })
    out.push({ kind: 'han', value: match[0] })
    last = match.index + match[0].length
  }

  if (last < value.length) out.push({ kind: 'text', value: value.slice(last) })
  return out
}

/** Station codes are ASCII and Han is not, so the two passes never overlap. */
export function tokenize(value: string): Token[] {
  const out: Token[] = []
  let last = 0
  let match: RegExpExecArray | null
  STATION_CODE_PATTERN.lastIndex = 0

  while ((match = STATION_CODE_PATTERN.exec(value)) !== null) {
    if (match.index > last) out.push(...splitHan(value.slice(last, match.index)))
    out.push({ kind: 'code', value: match[0], line: match[1] })
    last = match.index + match[0].length
  }

  if (last < value.length) out.push(...splitHan(value.slice(last)))
  return out
}

/** True when nothing in the string needs special rendering. */
export function isPlain(tokens: Token[]): boolean {
  return tokens.every((t) => t.kind === 'text')
}
