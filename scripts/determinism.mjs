/**
 * Two builds from scratch, compared byte for byte.
 *
 * Run:  npm run determinism
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY
 *
 * A static site that does not build the same way twice cannot be reviewed by
 * diff, and a deploy diff full of noise hides the one line that matters. Run 2
 * checked this by hand and concluded "content is deterministic"; run 3 checked
 * it again after a set of changes and found `sitemap.xml` writing the build
 * instant into `<lastmod>` on all 46 URLs. That had been true the whole time —
 * the two builds in run 2 landed inside the same second.
 *
 * Which is the argument for this being a script rather than a thing someone
 * does carefully once: a check performed by hand is a check performed under
 * whatever conditions happened to obtain that day.
 *
 * ── What is normalised, and why each one is legitimate ─────────────────────
 * Next mints two per-build identifiers: the `_next/static/<id>/` directory
 * name, and a `buildId` embedded in the RSC payload. They are hashes of the
 * build, they appear in every page, and they are meant to differ — that is how
 * cache-busting works. Both are substituted out before comparison, in file
 * paths and in file contents.
 *
 * Nothing else is normalised. Anything that still differs is the site's own
 * output varying between builds, which is a finding.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import crypto from 'node:crypto'
import { spawnSync } from 'node:child_process'

const ROOT = process.cwd()
const OUT = path.join(ROOT, 'out')

function build(label) {
  fs.rmSync(path.join(ROOT, '.next'), { recursive: true, force: true })
  fs.rmSync(OUT, { recursive: true, force: true })
  const result = spawnSync('npm', ['run', 'build'], { cwd: ROOT, encoding: 'utf8', shell: true })
  if (result.status !== 0) {
    console.error(`determinism: build ${label} failed\n${result.stdout}${result.stderr}`)
    process.exit(1)
  }
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), `ttg-${label}-`))
  fs.cpSync(OUT, dir, { recursive: true })
  return dir
}

function walk(dir, found = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, found)
    else found.push(full)
  }
  return found
}

/** The two per-build identifiers Next mints, read out of the export itself. */
function buildIds(root) {
  const ids = []

  const staticDir = path.join(root, '_next', 'static')
  if (fs.existsSync(staticDir)) {
    for (const entry of fs.readdirSync(staticDir, { withFileTypes: true })) {
      if (entry.isDirectory() && !['chunks', 'css', 'media'].includes(entry.name)) ids.push(entry.name)
    }
  }

  for (const file of walk(root)) {
    if (!file.endsWith('.txt') && !file.endsWith('.html')) continue
    const match = fs.readFileSync(file, 'utf8').match(/"buildId":"([A-Za-z0-9_-]{8,})"/)
    if (match && !ids.includes(match[1])) ids.push(match[1])
    if (ids.length >= 2) break
  }

  return ids
}

function fingerprint(root) {
  const ids = buildIds(root)
  const scrub = (text) => ids.reduce((acc, id, i) => acc.split(id).join(`<buildid-${i}>`), text)

  const map = new Map()
  for (const file of walk(root)) {
    const rel = scrub(path.relative(root, file).split(path.sep).join('/'))
    let bytes = fs.readFileSync(file)
    if (/\.(html|txt|xml|json|js|css|svg)$/.test(file)) {
      bytes = Buffer.from(scrub(bytes.toString('utf8')), 'utf8')
    }
    map.set(rel, { hash: crypto.createHash('sha256').update(bytes).digest('hex'), file })
  }
  return { map, ids }
}

/* ------------------------------------------------------------------ */

console.log('\n═══ Build determinism ═══\n')
console.log('  building twice from a clean tree — this takes a couple of minutes\n')

const first = build('a')
const second = build('b')

const a = fingerprint(first)
const b = fingerprint(second)

console.log(`  build ids: ${a.ids.join(', ')}  /  ${b.ids.join(', ')}`)
console.log(`  files:     ${a.map.size} / ${b.map.size}\n`)

/**
 * Differences that are Next's and not ours.
 *
 * `<meta name="next-size-adjust">` is emitted by next/font and lands at a
 * different position in <head> depending on which of the 22 build workers
 * rendered the page. Same tag, same count, same attributes — position only.
 * Recorded in run 2 on 2 of 46 pages and seen again here on 5.
 *
 * Classified rather than ignored: a tool that always exits non-zero is a tool
 * people stop running, and the point of this script is that a NEW difference
 * stands out. If removing the tag entirely makes the two files identical, the
 * only difference was where it sat.
 */
const FRAMEWORK_NOISE = [
  { name: 'next-size-adjust meta position', strip: /<meta name="next-size-adjust" content=""\/>/g },
]

function isFrameworkNoise(fileA, fileB) {
  if (!/\.html$/.test(fileA)) return null
  let A = fs.readFileSync(fileA, 'utf8')
  let B = fs.readFileSync(fileB, 'utf8')
  for (const noise of FRAMEWORK_NOISE) {
    const strippedA = A.replace(noise.strip, '')
    const strippedB = B.replace(noise.strip, '')
    // Only counts as noise if the tag appears the same number of times in both;
    // one going missing is a real change.
    const countA = (A.match(noise.strip) ?? []).length
    const countB = (B.match(noise.strip) ?? []).length
    if (countA === countB && strippedA === strippedB) return noise.name
    A = strippedA
    B = strippedB
  }
  return null
}

const keys = [...new Set([...a.map.keys(), ...b.map.keys()])].sort()
const differences = []
const benign = []

for (const key of keys) {
  const left = a.map.get(key)
  const right = b.map.get(key)
  if (!left) differences.push({ key, why: 'only in the second build' })
  else if (!right) differences.push({ key, why: 'only in the first build' })
  else if (left.hash !== right.hash) {
    const noise = isFrameworkNoise(left.file, right.file)
    if (noise) {
      benign.push({ key, noise })
      continue
    }
    // Show where they first diverge — "these files differ" is not actionable.
    const A = fs.readFileSync(left.file, 'utf8')
    const B = fs.readFileSync(right.file, 'utf8')
    let at = 0
    while (at < A.length && at < B.length && A[at] === B[at]) at++
    differences.push({
      key,
      why: 'content differs',
      at,
      a: A.slice(Math.max(0, at - 60), at + 60).replace(/\s+/g, ' '),
      b: B.slice(Math.max(0, at - 60), at + 60).replace(/\s+/g, ' '),
    })
  }
}

fs.rmSync(first, { recursive: true, force: true })
fs.rmSync(second, { recursive: true, force: true })

if (benign.length) {
  const [{ noise }] = benign
  console.log(`  ${benign.length} file(s) differ only by framework noise (${noise}):`)
  console.log(`    ${benign.slice(0, 6).map((d) => d.key).join(', ')}${benign.length > 6 ? ', …' : ''}\n`)
}

if (differences.length === 0) {
  console.log(
    benign.length
      ? `  ✓ ${keys.length - benign.length} of ${keys.length} files byte-identical across two clean builds;\n` +
        `    the other ${benign.length} differ only in where Next put its own meta tag.\n`
      : `  ✓ all ${keys.length} files byte-identical across two clean builds.\n`,
  )
  process.exit(0)
}

console.log(`  ${differences.length} file(s) differ:\n`)
for (const difference of differences.slice(0, 12)) {
  console.log(`  ✗ ${difference.key} — ${difference.why}`)
  if (difference.at !== undefined) {
    console.log(`      at ${difference.at}`)
    console.log(`      A: …${difference.a}…`)
    console.log(`      B: …${difference.b}…`)
  }
}
if (differences.length > 12) console.log(`  … and ${differences.length - 12} more`)

console.log(
  '\n  Not necessarily a failure: framework-internal ordering has shown up here before.\n' +
    '  What is a failure is the site\'s own output varying — a timestamp, a hash of a\n' +
    '  Set iteration order, anything read from the clock.\n',
)
process.exit(1)
