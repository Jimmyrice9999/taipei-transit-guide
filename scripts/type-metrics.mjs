/**
 * Measures the Latin faces against Noto Sans TC to derive the `size-adjust`
 * values in app/layout.tsx from evidence rather than eyeballing.
 *
 * Run: npm run metrics
 *
 * Han glyphs are drawn to fill most of the em box, while Latin lowercase
 * occupies about half of it. Setting both at the same font-size therefore does
 * NOT make them look the same size — and which way the imbalance runs depends
 * on the specific faces. This measures the actual ink, so the correction is a
 * number rather than a guess.
 *
 * Re-run this if either font changes.
 */

import * as fontkit from 'fontkit'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const open = (p) => fontkit.openSync(path.join(ROOT, p))

const FONTS = {
  interBody: open('node_modules/@fontsource/inter/files/inter-latin-400-normal.woff2'),
  zillaHead: open('node_modules/@fontsource/zilla-slab/files/zilla-slab-latin-700-normal.woff2'),
  hanBody: open('node_modules/@expo-google-fonts/noto-sans-tc/400Regular/NotoSansTC_400Regular.ttf'),
  hanHead: open('node_modules/@expo-google-fonts/noto-sans-tc/700Bold/NotoSansTC_700Bold.ttf'),
}

/** The Han characters this site actually uses. */
const SITE_CHARS = [...'內廠文木柵機湖線']

const pct = (v) => (v * 100).toFixed(1) + '%'

/** Measured ink height of a glyph, as a fraction of the em. */
function inkHeight(font, char) {
  const glyph = font.layout(char).glyphs[0]
  const { minY, maxY } = glyph.bbox
  return (maxY - minY) / font.unitsPerEm
}

function latin(font, label) {
  return {
    label,
    upm: font.unitsPerEm,
    cap: inkHeight(font, 'H'),
    x: inkHeight(font, 'x'),
  }
}

function han(font, label) {
  const heights = SITE_CHARS.map((ch) => ({ ch, h: inkHeight(font, ch) }))
  return {
    label,
    upm: font.unitsPerEm,
    heights,
    avg: heights.reduce((a, r) => a + r.h, 0) / heights.length,
    min: Math.min(...heights.map((r) => r.h)),
    max: Math.max(...heights.map((r) => r.h)),
  }
}

const interM = latin(FONTS.interBody, 'Inter 400')
const zillaM = latin(FONTS.zillaHead, 'Zilla Slab 700')
const hanBodyM = han(FONTS.hanBody, 'Noto Sans TC 400')
const hanHeadM = han(FONTS.hanHead, 'Noto Sans TC 700')

console.log('=== Latin ink, fraction of em ===')
for (const m of [interM, zillaM]) {
  console.log(`  ${m.label.padEnd(16)} upm ${String(m.upm).padEnd(6)} cap ${pct(m.cap)}  x-height ${pct(m.x)}`)
}

console.log('\n=== Han ink height, the 8 characters this site uses ===')
for (const m of [hanBodyM, hanHeadM]) {
  console.log(`  ${m.label}  upm ${m.upm}`)
  console.log(`    ${m.heights.map((r) => `${r.ch} ${pct(r.h)}`).join('   ')}`)
  console.log(`    average ${pct(m.avg)}   range ${pct(m.min)}–${pct(m.max)}`)
}

console.log('\n=== Han ink relative to Latin, at size-adjust 100% ===')
console.log(`  body:    Han ${pct(hanBodyM.avg)} vs Inter cap ${pct(interM.cap)}  ->  ${(hanBodyM.avg / interM.cap).toFixed(3)}x cap`)
console.log(`  heading: Han ${pct(hanHeadM.avg)} vs Zilla cap ${pct(zillaM.cap)}  ->  ${(hanHeadM.avg / zillaM.cap).toFixed(3)}x cap`)

console.log('\n=== size-adjust required to reach a target ratio ===')
console.log('  (Han ink height as a multiple of the Latin cap height)')
for (const target of [1.0, 1.05, 1.1, 1.15, 1.2]) {
  const body = (target * interM.cap) / hanBodyM.avg
  const head = (target * zillaM.cap) / hanHeadM.avg
  console.log(`    ${target.toFixed(2)}x cap  ->  body ${pct(body)}   heading ${pct(head)}`)
}

console.log('\n=== rendered px at the sizes actually used ===')
const contexts = [
  ['body 17px', 17, interM.cap, hanBodyM.avg],
  ['table 14.5px', 14.5, interM.cap, hanBodyM.avg],
  ['h2 25px', 25, zillaM.cap, hanHeadM.avg],
  ['h1 40px', 40, zillaM.cap, hanHeadM.avg],
]
for (const [label, size, latinCap, hanAvg] of contexts) {
  const parts = [100, 103, 106, 109].map(
    (a) => `${a}% -> ${(hanAvg * size * (a / 100)).toFixed(2)}px`,
  )
  console.log(`  ${label.padEnd(14)} Latin cap ${(latinCap * size).toFixed(2)}px  |  ${parts.join('  ')}`)
}
