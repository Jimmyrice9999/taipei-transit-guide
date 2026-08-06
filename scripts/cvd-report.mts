/**
 * How the seven official line colours behave under colour vision deficiency.
 *
 * Run: npm run cvd
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHAT THIS MEASURES, AND WHAT IT DELIBERATELY DOES NOT
 *
 * MEASURES: whether two line colours can be told apart. That is a perceptual
 * difference question, answered with CIEDE2000 on simulated colours.
 *
 * DOES NOT MEASURE: WCAG contrast on simulated colours. An earlier version of
 * this script did, and reported six badge "failures" that were artefacts of
 * the simulation. Both facts behind that are settled:
 *
 *   · W3C: contrast is computed from the authored colours, and "[r]equiring
 *     good luminance contrast accommodates [colour deficiency] by requiring
 *     contrast that is independent of color perception". The 4.5 threshold is
 *     documented as already accounting for "congenital or acquired color
 *     deficiencies". Simulating first and re-measuring double-counts it.
 *   · The transforms are not luminance-preserving. Brettel projects onto a
 *     reduced surface in LMS to model hue confusion; under protanopia the L
 *     cone is removed, and because L dominates luminous efficiency, simulated
 *     luminance falls for reds as an artefact of the projection. Dichromats
 *     have broadly normal luminance discrimination — the drop describes the
 *     maths, not a person.
 *
 * Section 4 below demonstrates that mechanism numerically rather than asserting
 * it, so the claim can be checked rather than believed.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * CHOICE OF DIFFERENCE FORMULA
 *
 * CIEDE2000 is used as the headline, with CIE76 printed beside it as a
 * comparator so the disagreement between formulae is visible rather than
 * hidden by picking one.
 *
 * CIEDE2000 because it is the current CIE recommendation and, critically,
 * because this implementation is verified against the Sharma, Wu & Dalal (2005)
 * test vectors — its three discontinuity traps make an unverified
 * implementation genuinely likely to be wrong.
 *
 * NOT CAM16-UCS, although it would be the better instrument for large colour
 * differences of the size seen here: I have no published validation vector to
 * check an implementation against, and shipping unverified colour maths to
 * decide an accessibility question is exactly the failure this whole exercise
 * is meant to prevent. Recorded as a known limitation rather than resolved
 * silently — CAM16-UCS would likely report somewhat larger differences for the
 * widely-separated pairs and similar values for the confusable ones, so it
 * would sharpen the contrast between the two groups without changing which
 * pairs land in which.
 *
 * CAVEAT ON THRESHOLDS. CIEDE2000 was fitted to small uniform patches under
 * controlled viewing. Map strokes are 5 px wide — a small field, where
 * chromatic discrimination is *worse* than the standard observer. So these
 * numbers are, if anything, optimistic for the map, and a pair that is marginal
 * here should be treated as failing there.
 */

import { LINES } from '../lib/lines.ts'
import { contrast, luminance, AA } from '../lib/color.ts'
import {
  CIEDE2000_VECTORS,
  NEUTRAL_INVARIANTS,
  ciede2000,
  deltaE00,
  deltaE76,
  simulate,
  type Deficiency,
} from '../lib/cvd.ts'

const DEFICIENCIES: Deficiency[] = ['protanopia', 'deuteranopia', 'tritanopia']

/**
 * ΔE00 bands. Deliberately conservative given the small-field caveat above.
 *   < 3   indistinguishable in practice
 *   < 10  unreliable: tellable side by side, not in isolation
 */
const INDISTINGUISHABLE = 3
const UNRELIABLE = 10

const pad = (s: string | number, n: number) => String(s).padEnd(n)
const padS = (s: string | number, n: number) => String(s).padStart(n)

/* ------------------------------------------------------------------ */
/* 0. Prove the instruments before using them                          */
/* ------------------------------------------------------------------ */

console.log('\n═══ 0. Instrument verification ═══\n')

let worstErr = 0
for (const v of CIEDE2000_VECTORS) {
  worstErr = Math.max(worstErr, Math.abs(ciede2000(v.lab1, v.lab2) - v.expected))
}
const ciedeOk = worstErr < 0.0002
console.log(
  `  ${ciedeOk ? '✓' : '✗'} CIEDE2000 vs Sharma, Wu & Dalal (2005): ${CIEDE2000_VECTORS.length} vectors, ` +
    `worst error ${worstErr.toExponential(2)}`,
)

const neutralsOk = NEUTRAL_INVARIANTS.every((n) =>
  DEFICIENCIES.every((d) => simulate(n, d).toUpperCase() === n.toUpperCase()),
)
console.log(
  `  ${neutralsOk ? '✓' : '✗'} simulation leaves the achromatic axis unchanged ` +
    `(${NEUTRAL_INVARIANTS.join(', ')})`,
)

if (!ciedeOk || !neutralsOk) {
  console.error('\n  Instruments failed verification. Every number below would be untrustworthy.\n')
  process.exit(2)
}

/* ------------------------------------------------------------------ */
/* 1. The colours as simulated                                         */
/* ------------------------------------------------------------------ */

console.log('\n═══ 1. Official line colours, as simulated ═══\n')
console.log(
  '  ' + pad('line', 5) + pad('name', 18) + pad('official', 10) +
    DEFICIENCIES.map((d) => pad(d.slice(0, 8), 10)).join(''),
)
console.log('  ' + '-'.repeat(73))
for (const line of LINES) {
  console.log(
    '  ' + pad(line.code, 5) + pad(line.name, 18) + pad(line.map, 10) +
      DEFICIENCIES.map((d) => pad(simulate(line.map, d), 10)).join(''),
  )
}

/* ------------------------------------------------------------------ */
/* 2. The full ΔE matrix                                               */
/* ------------------------------------------------------------------ */

type Pair = { a: string; b: string; normal: number; sim: Record<string, number>; e76: Record<string, number> }
const pairs: Pair[] = []

for (let i = 0; i < LINES.length; i++) {
  for (let j = i + 1; j < LINES.length; j++) {
    const a = LINES[i]
    const b = LINES[j]
    const sim: Record<string, number> = {}
    const e76: Record<string, number> = {}
    for (const d of DEFICIENCIES) {
      sim[d] = deltaE00(simulate(a.map, d), simulate(b.map, d))
      e76[d] = deltaE76(simulate(a.map, d), simulate(b.map, d))
    }
    pairs.push({ a: a.code, b: b.code, normal: deltaE00(a.map, b.map), sim, e76 })
  }
}

console.log('\n═══ 2. Full ΔE matrix — all 21 pairs ═══\n')
console.log('  CIEDE2000, with CIE76 in brackets as the comparator.\n')
console.log(
  '  ' + pad('pair', 10) + padS('normal', 8) + '   ' +
    DEFICIENCIES.map((d) => padS(d.slice(0, 6), 16)).join(''),
)
console.log('  ' + '-'.repeat(76))

for (const p of [...pairs].sort((x, y) => Math.min(...Object.values(x.sim)) - Math.min(...Object.values(y.sim)))) {
  const cells = DEFICIENCIES.map((d) => {
    const v = p.sim[d]
    const mark = v < INDISTINGUISHABLE ? '‼' : v < UNRELIABLE ? '!' : ' '
    return padS(`${mark}${v.toFixed(1)} (${p.e76[d].toFixed(0)})`, 16)
  }).join('')
  console.log('  ' + pad(`${p.a}/${p.b}`, 10) + padS(p.normal.toFixed(1), 8) + '   ' + cells)
}

console.log(`\n  ‼ below ΔE00 ${INDISTINGUISHABLE} — indistinguishable`)
console.log(`  ! below ΔE00 ${UNRELIABLE} — unreliable in isolation`)

/* ------------------------------------------------------------------ */
/* 3. Verdict per deficiency                                           */
/* ------------------------------------------------------------------ */

console.log('\n═══ 3. Verdict ═══\n')

const worstPairs: string[] = []
for (const d of DEFICIENCIES) {
  const bad = pairs.filter((p) => p.sim[d] < UNRELIABLE).sort((x, y) => x.sim[d] - y.sim[d])
  console.log(`  ${d}:`)
  if (bad.length === 0) console.log('    ✓ every pair stays above ΔE00 10')
  for (const p of bad) {
    const severity = p.sim[d] < INDISTINGUISHABLE ? 'INDISTINGUISHABLE' : 'unreliable'
    console.log(`    ${p.a}/${p.b}  ΔE00 ${p.sim[d].toFixed(1)}  ${severity}`)
    if (p.sim[d] < INDISTINGUISHABLE) worstPairs.push(`${p.a}/${p.b} under ${d}`)
  }
  console.log('')
}

/* ------------------------------------------------------------------ */
/* 4. Why simulated contrast is not a WCAG measurement                 */
/* ------------------------------------------------------------------ */

console.log('═══ 4. Simulated contrast is an artefact — the demonstration ═══\n')
console.log('  Relative luminance of each official colour, before and after')
console.log('  simulation. A luminance-preserving transform would leave these')
console.log('  unchanged. They move, so contrast computed after simulation is')
console.log('  measuring the projection, not a reader.\n')
console.log(
  '  ' + pad('line', 5) + padS('Y actual', 10) +
    DEFICIENCIES.map((d) => padS('Y ' + d.slice(0, 6), 12)).join('') + padS('max shift', 11),
)
console.log('  ' + '-'.repeat(70))

let worstShift = 0
for (const line of LINES) {
  const actual = luminance(line.map)
  const shifted = DEFICIENCIES.map((d) => luminance(simulate(line.map, d)))
  const shift = Math.max(...shifted.map((s) => Math.abs(s - actual) / actual))
  worstShift = Math.max(worstShift, shift)
  console.log(
    '  ' + pad(line.code, 5) + padS(actual.toFixed(4), 10) +
      shifted.map((s) => padS(s.toFixed(4), 12)).join('') +
      padS((shift * 100).toFixed(1) + '%', 11),
  )
}
console.log(`\n  Largest luminance shift introduced by the transform: ${(worstShift * 100).toFixed(1)}%.`)
console.log('  That shift is the entire cause of the six "badge contrast failures"')
console.log('  reported previously. Contrast is measured on authored colours only:\n')

let badgeFails = 0
for (const line of LINES) {
  const c = contrast(line.badgeFg, line.badgeBg)
  if (c < AA) {
    console.log(`    ✗ ${line.code} badge ${c.toFixed(2)}:1`)
    badgeFails++
  }
}
console.log(
  badgeFails === 0
    ? `  ✓ all ${LINES.length} badges clear ${AA}:1 as authored — no real failure exists`
    : `  ✗ ${badgeFails} genuine badge failure(s)`,
)

/* ------------------------------------------------------------------ */
/* 5. The derived inks under CVD                                       */
/* ------------------------------------------------------------------ */

console.log('\n═══ 5. Derived accent inks under CVD ═══\n')
console.log('  The inks are text and rules on white. Two questions: do they stay')
console.log('  legible (a luminance question, so CVD-independent), and can two')
console.log('  lines’ inks be told apart (a hue question)?\n')

console.log('  Legibility on white, as authored:')
for (const line of LINES) {
  const c = contrast(line.ink, '#FFFFFF')
  console.log(`    ${pad(line.code, 4)} ${line.ink}  ${c.toFixed(2)}:1  ${c >= AA ? '✓' : '✗'}`)
}

const inkPairs: { a: string; b: string; d: Deficiency; v: number }[] = []
for (let i = 0; i < LINES.length; i++) {
  for (let j = i + 1; j < LINES.length; j++) {
    for (const d of DEFICIENCIES) {
      const v = deltaE00(simulate(LINES[i].ink, d), simulate(LINES[j].ink, d))
      if (v < UNRELIABLE) inkPairs.push({ a: LINES[i].code, b: LINES[j].code, d, v })
    }
  }
}

console.log('\n  Ink pairs that become hard to separate:')
if (inkPairs.length === 0) console.log('    ✓ none below ΔE00 10')
for (const p of inkPairs.sort((x, y) => x.v - y.v)) {
  console.log(
    `    ${pad(p.a + '/' + p.b, 10)} ${pad(p.d, 14)} ΔE00 ${p.v.toFixed(1)}` +
      (p.v < INDISTINGUISHABLE ? '  INDISTINGUISHABLE' : ''),
  )
}
console.log('\n  Inks are only ever used one line at a time — a page has a single')
console.log('  accent — so ink pairs are never seen side by side and confusability')
console.log('  between them carries no information loss. Recorded for completeness.')

/* ------------------------------------------------------------------ */

console.log('\n═══ Summary ═══\n')
console.log(`  Indistinguishable pairs (ΔE00 < ${INDISTINGUISHABLE}): ${worstPairs.length}`)
for (const w of worstPairs) console.log(`    ${w}`)
console.log(`  Genuine WCAG contrast failures: ${badgeFails}`)
console.log('')

// Confusable colours are a property of the operators' official palette and
// cannot be "fixed" here. This exits 0 and reports; the mitigation is the
// non-colour cue, which the test suite enforces separately.
process.exit(0)
