/**
 * Counts what this site asserts, and how much of it rests on anything.
 *
 * Run:  npm run claims
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * Three states per factual claim, and the third is the one that matters:
 *
 *   sourced    A citation is attached — `[^id]` in the sentence, or `source:`
 *              on the frontmatter row.
 *   tbc        The site says out loud that it does not know. `TBC`, "to be
 *              confirmed", "not established". A labelled gap.
 *   asserted   Neither. A statement of fact resting on nobody's authority,
 *              indistinguishable to a reader from a sourced one.
 *
 * The first two are fine. The third is the category this project exists to
 * avoid, and before this script there was no way to know how many there were.
 * The answer on the first run was 96, which is roughly what four builds of
 * infrastructure and five stub pages produces.
 *
 * ── On the heuristic, stated plainly ────────────────────────────────────────
 * "Is this sentence a factual assertion" cannot be decided mechanically. What
 * this does is find the sentences that *carry a checkable thing* — a figure, a
 * date, a superlative, a proper-noun product name — and treat those as claims.
 * That will over-count (a sentence can mention 1996 without asserting anything
 * about it) and under-count (an unsourced qualitative claim about engineering
 * carries no marker at all).
 *
 * It is still worth having, for the reason a smoke alarm is worth having when
 * it also goes off at toast: the failure mode being guarded against is silent
 * accumulation, and any consistent counter makes accumulation visible. The
 * number is a trend line, not a measurement. It is reported as such.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { contentFiles, readContent, rowsOf, sourcesOf } from './citations.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const REPORT = path.join(ROOT, 'docs', 'claims.json')

const MARKER = /\[\^[a-z0-9][a-z0-9-]*\]/

/** The site's own vocabulary for "we do not know this". */
const TBC = /\b(TBC|to be confirmed|to be added|to be written|not established|not yet established|still to be|not found|unverified|not publicly documented)\b/i

/**
 * What makes a sentence carry a checkable claim.
 *
 * Station codes are excluded deliberately: BR01 is a name, not a figure, and
 * every sentence on the site mentions one.
 */
const CLAIM_SIGNALS = [
  { name: 'figure', test: (s) => /(?<![A-Za-z])\d[\d,.]*\s*(km|m|mm|cm|ha|kg|t|km\/h|s|min|V|kW|%|公里|公頃|人|座|對|輛|列)\b/.test(s) },
  { name: 'date', test: (s) => /\b(1[89]\d\d|20\d\d)\b/.test(s) },
  { name: 'count', test: (s) => /(?<![A-Za-z\d])\d{2,}(?![\d\w])/.test(s) },
  { name: 'superlative', test: (s) => /\b(first|only|largest|longest|shortest|highest|steepest|oldest|newest|never|no other|every|all of|the whole of)\b/i.test(s) },
]

/**
 * Sentences that are the site talking about its own sourcing rather than
 * asserting anything about the railway.
 *
 * The convention already existed before this script: editorial notes are set
 * in italics as a whole block, and the corrections written in this run are set
 * as "This page previously said X. That was false." Counting those as unsourced
 * assertions would punish the page for admitting an error, which is exactly
 * backwards.
 */
const META = /\b(this page|this site|previously said|previously asserted|used to say|has been removed|was false|is not asserted|research|sources?\b.*\b(found|consulted)|run of research)\b/i

/**
 * Split prose into sentences, keeping it dumb but predictable.
 *
 * ── A table row is one claim, not several ───────────────────────────────────
 * The sentence splitter used to run straight through table rows, so a cell
 * holding two sentences with its citation at the end came out as one cited
 * fragment and one uncited one — reporting a claim as unsourced when the
 * source was eleven words to its right, in the same cell.
 *
 * A row's citation applies to the row. Rows are therefore emitted whole and
 * never split. This makes the count more accurate, not more forgiving: an
 * uncited row is still an uncited row.
 * ────────────────────────────────────────────────────────────────────────────
 */
function sentences(text) {
  const out = []

  /*
   * Normalised here as well as in readContent(). Belt and braces on purpose:
   * this function's whole contract is "same document, same claims", and the
   * paragraph split below is the exact thing that a stray \r silently defeats.
   * Keeping the guarantee local means a future caller that does its own file
   * reading cannot reintroduce the platform split.
   */
  for (const block of text.replace(/\r\n?/g, '\n').split(/\n{2,}/)) {
    /*
     * Within a paragraph, prose is hard-wrapped: one sentence spans several
     * lines. So consecutive prose lines are rejoined before splitting — an
     * earlier version of this split on every newline and turned a three-line
     * sentence into three fragments, which took the count from 34 to 146.
     * Table rows are the exception and are never joined or split.
     */
    let prose = []
    const flush = () => {
      if (prose.length === 0) return
      out.push(...prose.join(' ').split(/(?<=[.!?])\s+(?=[A-Z“"*\[])/))
      prose = []
    }

    for (const line of block.split('\n')) {
      if (/^\s*\|/.test(line)) {
        flush()
        out.push(line)
      } else {
        prose.push(line)
      }
    }
    flush()
  }

  return out.map((s) => s.trim()).filter(Boolean)
}

/**
 * Strip the Markdown that is not prose: code, headings, link targets, and
 * whole blocks set in italics (the site's editorial-note convention).
 */
function proseOf(body) {
  return body
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]*`/g, '')
    // A paragraph or blockquote entirely in italics is an editorial note.
    .replace(/^>?\s*\*[^*][\s\S]*?\*\s*$/gm, '')
    .replace(/^#{1,6}\s.*$/gm, '')
    .replace(/\]\(([^)]*)\)/g, ']')
    .replace(/^\s*\|\s*-+.*$/gm, '')
}

/**
 * The sentence extractor, exposed for the line-ending invariance test in
 * tests/sourcing.test.mts. Same path production takes: strip the non-prose
 * Markdown, then split.
 */
export function classifySentences(text) {
  return sentences(proseOf(text))
}

export function auditClaims() {
  const files = []

  for (const file of contentFiles()) {
    const { relative, data, body } = readContent(file)
    const claims = []

    for (const row of rowsOf(data)) {
      const where = `${row.block}: ${row.label}`
      const text = [row.value, row.unit].filter(Boolean).join(' ')
      if (!text || TBC.test(text)) {
        claims.push({ state: 'tbc', where, text: text || '(empty)' })
      } else if (row.source) {
        claims.push({ state: 'sourced', where, text, source: row.source })
      } else {
        claims.push({ state: 'asserted', where, text })
      }
    }

    for (const sentence of sentences(proseOf(body))) {
      const signals = CLAIM_SIGNALS.filter((s) => s.test(sentence)).map((s) => s.name)
      if (signals.length === 0) continue

      const text = sentence.replace(/\s+/g, ' ').slice(0, 140)
      if (MARKER.test(sentence)) claims.push({ state: 'sourced', where: 'prose', text, signals })
      else if (TBC.test(sentence)) claims.push({ state: 'tbc', where: 'prose', text, signals })
      else if (META.test(sentence)) claims.push({ state: 'meta', where: 'prose', text, signals })
      else claims.push({ state: 'asserted', where: 'prose', text, signals })
    }

    const count = (state) => claims.filter((c) => c.state === state).length
    files.push({
      file: relative,
      sources: sourcesOf(data).length,
      sourced: count('sourced'),
      tbc: count('tbc'),
      asserted: count('asserted'),
      meta: count('meta'),
      claims,
    })
  }

  const totals = ['sourced', 'tbc', 'asserted', 'meta'].reduce((acc, state) => {
    acc[state] = files.reduce((n, f) => n + f[state], 0)
    return acc
  }, {})

  return { files, totals }
}

/* ------------------------------------------------------------------ */

function main() {
  const verbose = process.argv.includes('--list')
  const { files, totals } = auditClaims()

  const graded = totals.sourced + totals.tbc + totals.asserted
  const pct = (n) => (graded ? `${Math.round((n / graded) * 100)}%` : '—')

  console.log('claims: three states per checkable statement in content/\n')
  console.log(`  sourced   ${String(totals.sourced).padStart(4)}  ${pct(totals.sourced).padStart(4)}  a citation is attached`)
  console.log(`  TBC       ${String(totals.tbc).padStart(4)}  ${pct(totals.tbc).padStart(4)}  the site says it does not know`)
  console.log(`  ASSERTED  ${String(totals.asserted).padStart(4)}  ${pct(totals.asserted).padStart(4)}  resting on nobody's authority`)
  console.log(`  (meta)    ${String(totals.meta).padStart(4)}         the site describing its own sourcing\n`)

  const worst = [...files].filter((f) => f.asserted > 0).sort((a, b) => b.asserted - a.asserted)
  if (worst.length) {
    console.log('  unsourced assertions by file:')
    for (const file of worst) {
      console.log(`    ${String(file.asserted).padStart(3)}  ${file.file}`)
    }
  }

  if (verbose) {
    console.log('\n  every unsourced assertion:')
    for (const file of worst) {
      console.log(`\n  ${file.file}`)
      for (const claim of file.claims.filter((c) => c.state === 'asserted')) {
        console.log(`    [${claim.where}] ${claim.text}`)
      }
    }
  } else if (worst.length) {
    console.log('\n  run with --list to see them all.')
  }

  fs.mkdirSync(path.dirname(REPORT), { recursive: true })
  fs.writeFileSync(
    REPORT,
    JSON.stringify(
      {
        generated: 'npm run claims',
        note: 'A trend line, not a measurement. See the header of scripts/claims.mjs.',
        totals,
        files: files.map(({ claims, ...rest }) => rest),
        asserted: files.flatMap((f) =>
          f.claims.filter((c) => c.state === 'asserted').map((c) => ({ file: f.file, ...c })),
        ),
      },
      null,
      2,
    ) + '\n',
  )

  console.log(`\nclaims: wrote ${path.relative(ROOT, REPORT).replace(/\\/g, '/')}`)
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  main()
}
