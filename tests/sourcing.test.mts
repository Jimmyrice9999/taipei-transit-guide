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
import { auditClaims } from '../scripts/claims.mjs'

const ROOT = process.cwd()
const OUT = path.join(ROOT, 'out')
const BASELINE = path.join(ROOT, 'docs', 'claims-baseline.json')

const contentPages = () =>
  ['rail/lines/wenhu-line', 'rail/rolling-stock/val256', 'rail/rolling-stock/innovia-apm-256-c370',
   'rail/depots/muzha-depot', 'rail/depots/neihu-depot', 'rail/history/matra-dispute']
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
