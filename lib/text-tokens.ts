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
import { getStation } from './stations.ts'

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
 * A station code: a known line code, one or two digits, and an optional single
 * letter for a branch station. Longest line codes first so BR and BL match
 * before R and B.
 *
 * The branch suffix is not decoration. Three stations carry one — R22A
 * Xinbeitou, G03A Xiaobitan and A14a Airport Hotel — and without it the pattern
 * did not match them *at all*: `\b` after the digits fails when the next
 * character is a letter. So "R22A" in a Markdown file produced no badge AND no
 * warning, which is the worst of both. The proofreading guarantee the README
 * advertises did not cover branch stations.
 */
export const STATION_CODE_PATTERN = new RegExp(
  `\\b(${LINE_CODES_BY_LENGTH.join('|')})(\\d{1,2})([A-Za-z])?\\b`,
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

    const [full, line, digits, suffix] = match

    /*
     * A trailing letter is only part of the code when it makes a real station.
     * Otherwise it belongs to the sentence: "BR01s" is a plural, not a station,
     * and swallowing the 's' would drop a character from the prose.
     *
     * An unknown code still emits a `code` token, so the caller can warn about
     * it — that is the proofreading, and silently downgrading a typo to text
     * would defeat it.
     */
    if (suffix && !getStation(full) && getStation(line + digits)) {
      out.push({ kind: 'code', value: line + digits, line })
      out.push({ kind: 'text', value: suffix })
    } else {
      out.push({ kind: 'code', value: full, line })
    }

    last = match.index + full.length
  }

  if (last < value.length) out.push(...splitHan(value.slice(last)))
  return out
}

/** True when nothing in the string needs special rendering. */
export function isPlain(tokens: Token[]): boolean {
  return tokens.every((t) => t.kind === 'text')
}
