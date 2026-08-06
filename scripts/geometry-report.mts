/**
 * Reports what the published route geometry actually supports.
 *
 * Run: npm run geometry
 *
 * Checks the things that would make a geographic map dishonest: whether the
 * segments really chain, how much simplification costs, and how far stations sit
 * from the alignment drawn for them.
 */

import {
  distanceToPaths,
  getAllLineGeometry,
  getLineGeometry,
  metres,
  type Point,
} from '../lib/geometry.ts'
import { STATIONS } from '../lib/stations.ts'
import { LINES } from '../lib/lines.ts'

const pad = (s: string | number, n: number) => String(s).padEnd(n)

console.log('\n=== geometry as published ===\n')
console.log(pad('line', 6) + pad('paths', 7) + pad('raw pts', 9) + pad('kept', 7) + pad('length km', 11) + 'note')
console.log('-'.repeat(64))

for (const geometry of getAllLineGeometry()) {
  const note = geometry.paths.length > 1 ? `${geometry.paths.length} discontinuous runs` : 'continuous'
  console.log(
    pad(geometry.lineId, 6) +
      pad(geometry.paths.length, 7) +
      pad(geometry.rawPoints, 9) +
      pad(geometry.points, 7) +
      pad(geometry.lengthKm.toFixed(2), 11) +
      note,
  )
}

console.log('\n=== how far each station sits from its line ===\n')

for (const line of LINES) {
  const geometry = getLineGeometry(line.code)
  if (!geometry) continue

  const stations = STATIONS.filter((s) => s.line === line.code && s.lat !== null)
  if (stations.length === 0) continue

  const distances = stations.map((s) => ({
    code: s.code,
    name: s.name,
    d: distanceToPaths([s.lon!, s.lat!], geometry.paths),
  }))

  const worst = distances.reduce((a, b) => (b.d > a.d ? b : a))
  const mean = distances.reduce((n, d) => n + d.d, 0) / distances.length

  console.log(
    `${pad(line.code, 4)} ${pad(line.name, 20)} mean ${mean.toFixed(0).padStart(4)} m   ` +
      `worst ${worst.d.toFixed(0).padStart(4)} m  (${worst.code} ${worst.name})`,
  )
}

console.log(
  '\nStation coordinates are entrances or centroids, not track positions, so an' +
    '\noffset of tens of metres is expected and correct. Hundreds would mean the' +
    '\ngeometry does not describe the line we think it does.',
)

console.log('\n=== gaps between runs, where a line is not continuous ===\n')

for (const geometry of getAllLineGeometry()) {
  if (geometry.paths.length < 2) continue
  const gaps: string[] = []
  for (let i = 1; i < geometry.paths.length; i++) {
    const previous = geometry.paths[i - 1]
    const gap = metres(previous[previous.length - 1], geometry.paths[i][0])
    gaps.push(`${(gap / 1000).toFixed(2)} km`)
  }
  console.log(`  ${pad(geometry.lineId, 4)} ${geometry.paths.length} runs, jumps: ${gaps.join(', ')}`)
}

console.log(
  '\nA large jump is a branch or a genuinely separate alignment, not an error.' +
    '\nThey are drawn as separate paths rather than bridged with track that does' +
    '\nnot exist.\n',
)
