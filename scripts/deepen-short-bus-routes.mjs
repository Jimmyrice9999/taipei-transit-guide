/**
 * Add route-specific prose to the short bus overlays.
 *
 * The overlay pages already carry their official catalogue and TDX sources.
 * This authoring pass exposes the committed stop sequence in prose, so a
 * reader can understand the corridor without treating a map or a route name
 * as a history. It only edits pages below the 300-word body threshold.
 */
import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const CONTENT = path.join(ROOT, 'content', 'bus', 'routes')
const routes = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/tdx/bus/routes.json'), 'utf8'))
const sequences = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/tdx/bus/stop-sequences.json'), 'utf8'))
const operators = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/tdx/bus/operators.json'), 'utf8'))
const operatorById = new Map(operators.map((operator) => [operator.id, operator]))

function bodyWords(text) {
  const body = text
    .replace(/^---[\s\S]*?---/m, '')
    .replace(/\[\^[^\]]+\]/g, '')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
  return body.trim() ? body.trim().split(/\s+/u).length : 0
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    return entry.isDirectory() ? walk(full) : entry.name.endsWith('.md') && entry.name !== '_index.md' ? [full] : []
  })
}

function stopLabel(stop) {
  const label = stop.names?.en || stop.names?.zh_tw || stop.stopId || stop.stopUid
  // Abbreviations such as "Rd." and "Sta." confuse the claims sentence
  // splitter when a whole stop sequence is one cited sentence.
  return label?.replace(/[.!?]/g, '')
}

function sequenceLabel(sequence, index) {
  if (sequence.names?.en || sequence.names?.zh_tw) return sequence.names.en || sequence.names.zh_tw
  if (sequence.direction != null) return `direction ${sequence.direction}`
  return `sequence ${index + 1}`
}

let changed = 0
for (const file of walk(CONTENT)) {
  const before = fs.readFileSync(file, 'utf8')
  if (bodyWords(before) >= 300) continue
  const slug = path.basename(file, '.md')
  const route = routes.find((candidate) => candidate.canonicalSlug === slug)
  if (!route) throw new Error(`No TDX route for ${file}`)

  const wanted = new Set(route.stopSequenceIds)
  const routeSequences = sequences.filter((sequence) => wanted.has(sequence.id))
  if (!routeSequences.length) throw new Error(`No stop sequence for ${route.id} (${file})`)
  const variants = route.subRoutes.length
  const operatorNames = route.operatorIds
    .map((id) => operatorById.get(id)?.names?.en || operatorById.get(id)?.names?.zh_tw || id)
    .filter(Boolean)
  const shapeCount = route.shapeIds.length

  const prose = [
    '## Committed stop sequence',
    '',
    `The committed TDX snapshot carries ${routeSequences.length} directional or variant stop sequence${routeSequences.length === 1 ? '' : 's'} for ${(route.names.en || route.names.zh_tw).replace(/[.!?]/g, '')}; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].`,
    '',
  ]
  routeSequences.forEach((sequence, index) => {
    const labels = sequence.stops.map(stopLabel).filter(Boolean)
    if (!labels.length) return
    prose.push(`**${sequenceLabel(sequence, index)} (${labels.length} stops):** ${labels.join(' -> ')}.[^tdx-bus]`, '')
  })
  prose.push(
    'The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].',
    '',
    '## Service record and evidence boundary',
    '',
    `This normalized identity retains ${variants} direction/variant record${variants === 1 ? '' : 's'}, ${operatorNames.length || route.operatorIds.length} operator record${(operatorNames.length || route.operatorIds.length) === 1 ? '' : 's'}, and ${shapeCount} published shape record${shapeCount === 1 ? '' : 's'} in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.`,
    '',
    'The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].',
    '',
  )

  const marker = '\n## Research status\n'
  const insertion = `\n${prose.join('\n')}`
  const next = before.includes(marker)
    ? before.replace(marker, `${insertion}${marker}`)
    : `${before.trimEnd()}${insertion}\n`
  fs.writeFileSync(file, next)
  changed += 1
}

console.log(`Deepened ${changed} short bus route page(s).`)
