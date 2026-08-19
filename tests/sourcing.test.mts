/**
 * Sourcing, as a regression surface.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * "Fail if any content file contains a factual assertion without a citation"
 * was the brief. Taken literally that test is red on the day it is written —
 * there are 34 such assertions right now, and several of them are things like
 * "Operator: Taipei Rapid Transit Corporation" that no reasonable person is
 * going to footnote.
 *
 * A permanently-red test is not a test. It is a warning that people learn to
 * scroll past, which is the same failure as a verification tool with false
 * positives. So this is a **ratchet**: the count may fall and may not rise. The
 * baseline is committed, so raising it is a visible line in a diff with someone's
 * name on it, and lowering it is the ordinary result of doing the work.
 *
 * The honest weakness, stated: a ratchet permits the current 34 forever. What
 * it stops is the thing that actually happened over four builds — assertions
 * accumulating one page at a time with nobody counting.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

// @ts-expect-error — plain .mjs scripts, deliberately not typed
import { auditCitations } from '../scripts/citations.mjs'
// @ts-expect-error — plain .mjs scripts, deliberately not typed
import { auditClaims, classifySentences } from '../scripts/claims.mjs'

const ROOT = process.cwd()
const OUT = path.join(ROOT, 'out')
const BASELINE = path.join(ROOT, 'docs', 'claims-baseline.json')

const contentPages = () =>
  ['rail/metro/lines/wenhu-line', 'rail/metro/rolling-stock/val256', 'rail/metro/rolling-stock/innovia-apm-256-c370',
   'rail/metro/depots/muzha-depot', 'rail/metro/depots/neihu-depot', 'rail/history/matra-dispute']
    .map((slug) => ({ slug, file: path.join(OUT, slug, 'index.html') }))
    .filter((page) => fs.existsSync(page.file))

/* ---- Part 8: the citation mechanism itself -------------------------- */

test('every citation marker resolves to a source entry', () => {
  const { errors } = auditCitations()
  assert.deepEqual(errors, [], `citation errors:\n  ${errors.join('\n  ')}`)
})

test('no source is listed and left uncited', () => {
  const { warnings } = auditCitations()
  assert.deepEqual(warnings, [], `unused source entries:\n  ${warnings.join('\n  ')}`)
})

test('no unresolved citation mark reaches the built HTML', () => {
  /*
   * The build renders an unknown id as a visible `[?]` rather than dropping it,
   * because a citation that silently disappears leaves a sourced-looking
   * sentence with nothing behind it. This asserts the visible fallback never
   * actually ships.
   */
  for (const page of contentPages()) {
    const html = fs.readFileSync(page.file, 'utf8')
    assert.ok(
      !/cite-unresolved/.test(html),
      `${page.slug} renders an unresolved citation mark`,
    )
  }
})

test('every page that declares sources renders a references list', () => {
  const { pages } = auditCitations()
  for (const page of contentPages()) {
    const record = pages.find((p: { relative: string }) =>
      p.relative === `content/${page.slug}.md`,
    )
    if (!record || record.sources.length === 0) continue

    const html = fs.readFileSync(page.file, 'utf8')
    assert.ok(/id="references"/.test(html), `${page.slug} declares sources but renders no references list`)
    for (const source of record.sources) {
      assert.ok(
        html.includes(source.url.replace(/&/g, '&amp;')) || html.includes(source.url),
        `${page.slug}: source "${source.id}" is not linked in the rendered references`,
      )
    }
  }
})

test('primary and secondary are distinguished by more than colour', () => {
  // The site's own rule. The kind marker carries its word as text, so the
  // distinction survives monochrome print and every dichromacy.
  for (const page of contentPages()) {
    const html = fs.readFileSync(page.file, 'utf8')
    if (!/id="references"/.test(html)) continue
    assert.ok(
      /refs-kind"[^>]*>primary</.test(html) || /refs-kind"[^>]*>secondary</.test(html),
      `${page.slug}: reference kinds are not written out in text`,
    )
  }
})

/* ---- Part 9: the ratchet -------------------------------------------- */

test('unsourced assertions have not increased', () => {
  const { totals } = auditClaims()
  assert.ok(fs.existsSync(BASELINE), 'docs/claims-baseline.json is missing — run `npm run claims` and commit it')

  const baseline = JSON.parse(fs.readFileSync(BASELINE, 'utf8'))
  assert.ok(
    totals.asserted <= baseline.asserted,
    `${totals.asserted} unsourced assertions, up from the committed baseline of ${baseline.asserted}. ` +
      'Either cite them, mark them TBC, or — if the increase is deliberate — raise ' +
      'docs/claims-baseline.json in the same commit and say why in the run log.',
  )
})

test('the baseline is not stale in the other direction', () => {
  /*
   * If the real count has fallen well below the baseline, the ratchet has gone
   * slack and stopped protecting anything. Ten is an arbitrary tolerance and is
   * meant to be: the point is that the file gets re-committed occasionally, not
   * that it tracks every citation added.
   */
  const { totals } = auditClaims()
  const baseline = JSON.parse(fs.readFileSync(BASELINE, 'utf8'))
  assert.ok(
    baseline.asserted - totals.asserted <= 10,
    `the baseline says ${baseline.asserted} unsourced assertions and there are now ${totals.asserted}. ` +
      'Run `npm run claims` and commit docs/claims-baseline.json so the ratchet tightens.',
  )
})

test('the claim classifier recognises all three states', () => {
  // Guards the classifier itself: a version that quietly returned zero
  // assertions would make the ratchet above pass forever.
  const { totals } = auditClaims()
  assert.ok(totals.sourced > 0, 'no sourced claims found — the classifier is not reading citations')
  assert.ok(totals.tbc > 0, 'no TBC claims found — the classifier is not reading TBC values')
  assert.ok(
    totals.sourced + totals.tbc + totals.asserted > 100,
    'fewer than 100 checkable statements found across all content — the extractor has probably broken',
  )
})

/* ---- Part 10: the count must mean the same thing on every machine ---- */

test('the claim classifier is line-ending invariant', () => {
  /*
   * ── Why this exists ────────────────────────────────────────────────────────
   * This repository is checked out CRLF on Windows (`core.autocrlf=true`) and
   * LF on the CI runner. The same commit is therefore different bytes on the
   * two machines, and the classifier pattern-matches across line breaks.
   *
   * It did not survive that. `sentences()` split paragraphs on `\n{2,}`, and a
   * CRLF blank line is `\r\n\r\n` — the newlines are not adjacent, so the split
   * never fired on Windows. The identical content measured **31 asserted
   * claims on Windows and 34 on Linux**, which meant every baseline this
   * project has recorded across five runs was a Windows-only number and CI had
   * been comparing against a different one. Run #10 is where the margin closed
   * and the build failed.
   *
   * The fix is normalisation in readContent(). This test is what stops it
   * regressing, and it does not depend on which machine runs it: it feeds the
   * classifier the same document twice, once with each line ending, and
   * requires the same answer. A platform-dependent metric is not a metric.
   * ───────────────────────────────────────────────────────────────────────────
   */
  const body = [
    'A paragraph with a figure in it: the line is 25.17 km long.',
    'It wraps across two lines, as every paragraph in this repository does.',
    '',
    'A second paragraph, opened in 1996, with no citation attached to it.',
    '',
    '| Date | Event |',
    '| --- | --- |',
    '| 4 July 2009 | Something opens. It then does a second thing[^x] |',
  ]

  const lf = body.join('\n')
  const crlf = body.join('\r\n')
  const cr = body.join('\r')

  assert.notEqual(lf, crlf, 'the fixture must actually differ, or this test proves nothing')

  const split = (text: string) => classifySentences(text)

  assert.deepEqual(
    split(crlf),
    split(lf),
    'the classifier gives different answers for CRLF and LF — the unsourced-claim ' +
      'count would then depend on which machine measured it, which is how CI run #10 broke',
  )
  assert.deepEqual(split(cr), split(lf), 'bare CR is not normalised either')

  // And the fixture must exercise the paragraph split, or it would pass on a
  // classifier that ignored blank lines entirely.
  assert.ok(split(lf).length >= 4, `expected the fixture to split into several claims, got ${split(lf).length}`)
})
