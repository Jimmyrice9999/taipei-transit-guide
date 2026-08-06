/**
 * Prints the derived line palette and checks every value against WCAG AA.
 *
 * Run:  npm run palette
 *
 * This imports lib/lines.ts directly, so it reports on exactly the colours the
 * site ships — there is no second copy of the derivation to drift out of sync.
 * Re-run it after correcting any `map` value.
 */

import { LINES, NEUTRAL_LINE } from '../lib/lines.ts'
import { AA, AA_NON_TEXT, WHITE, contrast } from '../lib/color.ts'

const pad = (s: string | number, n: number) => String(s).padEnd(n)
const mark = (ok: boolean) => (ok ? 'pass' : 'FAIL')

let failures = 0

console.log(
  '\n' +
    pad('line', 5) + pad('map', 10) + pad('badge', 10) + pad('text', 7) +
    pad('ratio', 12) + pad('ink', 10) + pad('ratio', 12) + 'notes',
)
console.log('-'.repeat(94))

for (const line of [...LINES, NEUTRAL_LINE]) {
  const rBadge = contrast(line.badgeFg, line.badgeBg)
  const rInk = contrast(line.ink, WHITE)
  if (rBadge < AA || rInk < AA) failures++

  const notes: string[] = []
  if (line.badgeBg.toUpperCase() !== line.map.toUpperCase()) notes.push('badge darkened')
  if (line.needsHairline) notes.push('bar needs ink hairline')
  if (line.operator && line.operator !== 'TRTC' && line.operator !== 'site') {
    notes.push(`operator ${line.operator}`)
  }

  console.log(
    pad(line.code || '—', 5) +
      pad(line.map, 10) +
      pad(line.badgeBg, 10) +
      pad(line.badgeFg === WHITE ? 'white' : 'black', 7) +
      pad(`${rBadge.toFixed(2)} ${mark(rBadge >= AA)}`, 12) +
      pad(line.ink, 10) +
      pad(`${rInk.toFixed(2)} ${mark(rInk >= AA)}`, 12) +
      notes.join(', '),
  )
}

console.log(`\nthresholds: text ${AA}:1, non-text ${AA_NON_TEXT}:1`)

console.log('\nprovenance: Taiwan MOTC TDX LineColor, government open data')
for (const line of LINES) {
  console.log(`  ${pad(line.code, 4)} ${pad(line.name, 22)} operator ${line.operator}`)
}

if (failures > 0) {
  console.error(`\n${failures} line(s) below AA — check the derivation in lib/lines.ts`)
  process.exit(1)
}
console.log('\nall derived values clear AA.')
