/**
 * Contrast, checked against the real WCAG threshold.
 *
 * Derivation aims at 4.6 and validation uses 4.5 — that gap is the whole point
 * of the margin, so these tests must never be relaxed to 4.6 to make something
 * pass. If a derived colour only clears 4.6, the derivation is fine; if it fails
 * 4.5, the derivation is broken.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'

import { AA, AA_DERIVE, AA_NON_TEXT, NEAR_BLACK, WHITE, contrast, darkenUntil, luminance, readableOn } from '../lib/color.ts'
import { LINES, NEUTRAL_LINE } from '../lib/lines.ts'

const ratio = (n: number) => n.toFixed(2)

test('every badge clears AA for its own text colour', () => {
  for (const line of LINES) {
    const c = contrast(line.badgeFg, line.badgeBg)
    assert.ok(
      c >= AA,
      `${line.code} badge: ${line.badgeFg} on ${line.badgeBg} is ${ratio(c)}:1, below ${AA}`,
    )
  }
})

test('every accent ink clears AA on white', () => {
  for (const line of LINES) {
    const c = contrast(line.ink, WHITE)
    assert.ok(c >= AA, `${line.code} ink ${line.ink} on white is ${ratio(c)}:1, below ${AA}`)
  }
})

test('no derived value sits exactly on the threshold', () => {
  /*
   * The reason the 4.6 margin exists. `darkenUntil` stops at the first passing
   * step, so deriving against 4.5 lands *on* 4.5 — a pass that any rounding
   * difference in someone else's contrast implementation turns into a failure.
   * Wenhu's ink measured 4.50 against a 4.50 requirement before the margin.
   */
  for (const line of LINES) {
    const c = contrast(line.ink, WHITE)
    assert.ok(
      c >= AA_DERIVE,
      `${line.code} ink is ${ratio(c)}:1 — clears AA but not the ${AA_DERIVE} derivation margin, so it is one rounding error from failing`,
    )
  }
})

test('the neutral accent clears AA on white', () => {
  assert.ok(contrast(NEUTRAL_LINE.ink, WHITE) >= AA)
  assert.ok(contrast(NEUTRAL_LINE.badgeFg, NEUTRAL_LINE.badgeBg) >= AA)
})

test('badge text is white or near-black, never an invented colour', () => {
  for (const line of LINES) {
    assert.ok(
      line.badgeFg === WHITE || line.badgeFg === NEAR_BLACK,
      `${line.code} badge text is ${line.badgeFg}`,
    )
  }
})

test('the badge fill is the official colour wherever it can carry text', () => {
  // Darkening a fill loses fidelity to the operator's colour, so it should only
  // happen when neither white nor near-black works on the official value.
  for (const line of LINES) {
    if (readableOn(line.map)) {
      assert.equal(
        line.badgeBg,
        line.map,
        `${line.code} darkened its badge fill although the official colour can carry text`,
      )
    }
  }
})

test('needsHairline is set exactly when the colour is too pale to rule on white', () => {
  for (const line of LINES) {
    const pale = contrast(line.map, WHITE) < AA_NON_TEXT
    assert.equal(
      line.needsHairline,
      pale,
      `${line.code}: map ${line.map} is ${ratio(contrast(line.map, WHITE))}:1 on white`,
    )
  }
})

test('the lines needing a hairline are Orange, Yellow and Sanying only', () => {
  /*
   * Pinned because the design reference records this as a finding: the official
   * brown is darker than the community value it replaced and no longer needs
   * the hairline. If a refetch changes which lines need it, that is a real
   * change to the design and should be noticed, not absorbed.
   */
  // LB joined in run 12: #48B6D2 is 2.21:1 on white, so its length bar and its
  // accent rule need the ink hairline for the same reason Orange and Yellow do.
  const needing = LINES.filter((l) => l.needsHairline).map((l) => l.key).sort()
  assert.deepEqual(needing, ['NTMC:LB', 'NTMC:Y', 'TMRT:G', 'TRTC:O'])
})

test('official colours are normalised uppercase hex', () => {
  for (const line of LINES) {
    assert.match(line.map, /^#[0-9A-F]{6}$/, `${line.code} map ${line.map} is not normalised`)
    assert.match(line.badgeBg, /^#[0-9A-F]{6}$/, `${line.code} badgeBg ${line.badgeBg}`)
    assert.match(line.ink, /^#[0-9A-F]{6}$/, `${line.code} ink ${line.ink}`)
  }
})

test('contrast maths matches known WCAG values', () => {
  // Anchors, so a refactor of the colour module cannot quietly change what
  // "4.5:1" means. Black on white is exactly 21:1.
  assert.equal(Number(contrast('#000000', '#FFFFFF').toFixed(4)), 21)
  assert.equal(contrast('#FFFFFF', '#FFFFFF'), 1)
  assert.equal(Number(luminance('#FFFFFF').toFixed(6)), 1)
  assert.equal(Number(luminance('#000000').toFixed(6)), 0)
  // Symmetry: the order of the arguments must not matter.
  assert.equal(contrast('#B57A25', WHITE), contrast(WHITE, '#B57A25'))
})

test('darkenUntil returns a colour that satisfies its own test', () => {
  for (const line of LINES) {
    const derived = darkenUntil(line.map, (c) => contrast(c, WHITE) >= AA_DERIVE)
    assert.ok(contrast(derived, WHITE) >= AA_DERIVE, `${line.code}: ${derived}`)
  }
})

test('the CIEDE2000 implementation matches the published test vectors', async () => {
  /*
   * CIEDE2000 has three discontinuity traps — the hue-mean wraparound, the
   * C'=0 case, and the RT rotation term — and a wrong implementation looks
   * plausible while being off by enough to change every conclusion. The design
   * reference now states measured colour differences as fact, so the
   * arithmetic behind them has to be provable.
   */
  const { CIEDE2000_VECTORS, ciede2000 } = await import('../lib/cvd.ts')
  for (const v of CIEDE2000_VECTORS) {
    const got = ciede2000(v.lab1, v.lab2)
    assert.ok(
      Math.abs(got - v.expected) < 0.0002,
      `Sharma vector: expected ${v.expected}, got ${got.toFixed(4)}`,
    )
  }
})

test('CVD simulation leaves the achromatic axis untouched', async () => {
  // Greys look the same to dichromats and trichromats alike. A simulation that
  // shifts white is broken in a way that biases every pair it is used on.
  const { NEUTRAL_INVARIANTS, simulate } = await import('../lib/cvd.ts')
  for (const grey of NEUTRAL_INVARIANTS) {
    for (const d of ['protanopia', 'deuteranopia', 'tritanopia'] as const) {
      assert.equal(simulate(grey, d).toUpperCase(), grey.toUpperCase(), `${grey} under ${d}`)
    }
  }
})

test('the confusable pairs are the measured ones, not the assumed ones', async () => {
  /*
   * Pins the correction. The docs asserted brown/orange/red for four builds
   * without measuring; brown/orange is in fact one of the *safest* pairs, and
   * the dangerous one is blue/purple. If a refetch changes an official colour
   * enough to move these, that is a design event and should fail loudly.
   */
  const { deltaE00, simulate } = await import('../lib/cvd.ts')
  const map = Object.fromEntries(LINES.map((l) => [l.code, l.map]))
  const pair = (a: string, b: string, d: 'protanopia' | 'deuteranopia' | 'tritanopia') =>
    deltaE00(simulate(map[a], d), simulate(map[b], d))

  // The real problem.
  assert.ok(pair('BL', 'A', 'protanopia') < 3, 'BL/A should be indistinguishable under protanopia')
  // The claim that was wrong.
  assert.ok(pair('BR', 'O', 'protanopia') > 10, 'brown/orange should be clearly separable')
  assert.ok(pair('BR', 'O', 'deuteranopia') > 10, 'brown/orange should be clearly separable')
  assert.ok(pair('R', 'O', 'deuteranopia') > 10, 'red/orange should be clearly separable')
  // The claim that was right.
  assert.ok(pair('BR', 'R', 'deuteranopia') < 10, 'brown/red should be unreliable under deuteranopia')
})

test('line colours are distinct within each operator namespace', () => {
  const seen = new Map<string, string>()
  for (const line of LINES) {
    const key = `${line.operator}:${line.map}`
    const previous = seen.get(key)
    assert.equal(previous, undefined, `${line.key} and ${previous} share the colour ${line.map}`)
    seen.set(key, line.key)
  }
})

/*
 * ── The two search fields, measured rather than eyeballed ───────────────────
 *
 * Run 51 added a search input to the header and a filter input to the long bus
 * route group pages. A text field's boundary is what identifies it as a
 * control, so WCAG 1.4.11 applies to it at 3:1 — and in the header the field's
 * own fill is barely a shade off the band, which leaves the border doing all of
 * that work by itself.
 *
 * `--rule-strong` was the obvious border colour and is the wrong one:
 * lib/surfaces.ts exempts it from 3:1 explicitly, on the argument that it is a
 * row separator rather than a control boundary. That argument does not cover a
 * text field, so the exemption does not either.
 *
 * These are literal values in globals.css rather than custom properties, so
 * lib/surfaces.ts's "every --name must have a role" sweep cannot see them.
 * Read out of the stylesheet here so a later edit to the numbers has to face
 * the threshold.
 */
test('both search fields have a boundary that identifies them', async () => {
  const fs = await import('node:fs')
  const path = await import('node:path')
  const css = fs.readFileSync(path.join(process.cwd(), 'app', '[locale]', 'globals.css'), 'utf8')

  /** rgba(255,255,255,a) composited over an opaque background. */
  const over = (alpha: number, base: string) => {
    const channel = (i: number) => {
      const back = parseInt(base.slice(1 + i * 2, 3 + i * 2), 16)
      return Math.round(back + (255 - back) * alpha)
    }
    return '#' + [0, 1, 2].map((i) => channel(i).toString(16).padStart(2, '0')).join('')
  }

  const rule = (selector: string) => {
    const block = css.slice(css.indexOf(selector))
    return block.slice(0, block.indexOf('}'))
  }

  // The header field, on the dark band.
  const bar = rule('.site-search-input {')
  const alpha = Number(bar.match(/border:\s*1px solid rgba\(255,\s*255,\s*255,\s*([\d.]+)\)/)?.[1])
  assert.ok(Number.isFinite(alpha), 'could not read the header search input border')
  const measured = contrast(over(alpha, '#16191c'), '#16191c')
  assert.ok(
    measured >= AA_NON_TEXT,
    `the header search field's border is ${ratio(measured)}:1 on the band, below ${AA_NON_TEXT}`,
  )

  // The in-page field, on white. --text-3 is the token; check the token, not
  // the name, so renaming it cannot quietly change what ships.
  const filter = rule('.route-filter-input {')
  assert.match(
    filter,
    /border:\s*1px solid var\(--text-3\)/,
    'the route filter input no longer uses a boundary colour that clears 3:1',
  )
  const onWhite = contrast('#666e79', WHITE)
  assert.ok(
    onWhite >= AA_NON_TEXT,
    `--text-3 is ${ratio(onWhite)}:1 on white, below ${AA_NON_TEXT}`,
  )
})
