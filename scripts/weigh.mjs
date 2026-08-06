/**
 * What the site weighs, and — the part that matters — what a phone actually
 * downloads.
 *
 * Run: npm run weigh            (after npm run build)
 *      npm run weigh -- --all   (also print the per-file breakdown)
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THIS WAS REWRITTEN
 *
 * The previous version summed every font file the page referenced and called
 * that the first-visit cost. It reported 385 KB for a line page. That number was
 * wrong, and wrong in the direction that matters: it was roughly double.
 *
 * `next/font` emits one file per family, per weight, per unicode range. A
 * browser fetches a file only when the page contains a character inside that
 * file's `unicode-range` AND something on the page is set in that family and
 * weight. An English page with a handful of Chinese proper nouns touches the
 * latin range and the Han range and nothing else — the latin-ext, Greek,
 * Cyrillic and Vietnamese cuts are downloaded by nobody.
 *
 * So this now does the unicode-range arithmetic explicitly: it reads every
 * @font-face out of the built CSS, reads the characters actually present in the
 * page's rendered text, and intersects the two. What is left is what gets
 * fetched.
 *
 * It also stops gzipping woff2. A woff2 file is already Brotli-compressed
 * internally; a server sends it as-is and re-compressing it in this script
 * measured a number no reader will ever experience.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import fs from 'node:fs'
import path from 'node:path'
import zlib from 'node:zlib'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'out')
const SHOW_ALL = process.argv.includes('--all')

if (!fs.existsSync(OUT)) {
  console.error('No out/ directory. Run `npm run build` first.')
  process.exit(1)
}

const kb = (n) => (n / 1024).toFixed(1) + ' KB'
const mb = (n) => (n / 1024 / 1024).toFixed(2) + ' MB'
const pad = (s, n) => String(s).padEnd(n)
const padS = (s, n) => String(s).padStart(n)

function walk(dir, found = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, found)
    else found.push(full)
  }
  return found
}

const files = walk(OUT).map((f) => ({
  path: f,
  rel: path.relative(OUT, f).replace(/\\/g, '/'),
  ext: path.extname(f),
  size: fs.statSync(f).size,
}))

/**
 * Transfer size.
 *
 * gzip is the conservative floor for text — GitHub Pages also negotiates
 * Brotli, which does better. Fonts and images are already compressed and are
 * sent byte for byte, so their transfer size IS their file size.
 */
const PRECOMPRESSED = new Set(['.woff2', '.woff', '.png', '.jpg', '.jpeg', '.webp', '.ico', '.gif'])
const transferSize = (file) => {
  const ext = path.extname(file)
  const bytes = fs.readFileSync(file)
  if (PRECOMPRESSED.has(ext)) return bytes.length
  return zlib.gzipSync(bytes, { level: 9 }).length
}

/* ------------------------------------------------------------------ */
/* @font-face, parsed out of the built CSS                             */
/* ------------------------------------------------------------------ */

/** Parse `unicode-range` into a list of [lo, hi] codepoint pairs. */
function parseUnicodeRange(spec) {
  const ranges = []
  for (const part of spec.split(',').map((s) => s.trim())) {
    const token = part.replace(/^U\+/i, '')

    if (token.includes('-')) {
      const [lo, hi] = token.split('-')
      ranges.push([parseInt(lo, 16), parseInt(hi, 16)])
      continue
    }

    // Wildcard form: "U+??" means U+0000–U+00FF, "U+1??" means U+0100–U+01FF.
    if (token.includes('?')) {
      ranges.push([
        parseInt(token.replace(/\?/g, '0'), 16),
        parseInt(token.replace(/\?/g, 'F'), 16),
      ])
      continue
    }

    const single = parseInt(token, 16)
    ranges.push([single, single])
  }
  return ranges
}

const cssFiles = files.filter((f) => f.ext === '.css')

const faces = []
for (const css of cssFiles) {
  const text = fs.readFileSync(css.path, 'utf8')
  for (const block of text.matchAll(/@font-face\{([^}]*)\}/g)) {
    const body = block[1]
    const family = body.match(/font-family:\s*([^;}]+)/)?.[1]?.trim().replace(/["']/g, '')
    const weight = body.match(/font-weight:\s*([^;}]+)/)?.[1]?.trim() ?? '400'
    const url = body.match(/src:\s*url\(([^)]+)\)/)?.[1]?.replace(/["']/g, '')
    const range = body.match(/unicode-range:\s*([^;}]+)/)?.[1]?.trim()
    if (!family || !url) continue

    // URLs in the chunk CSS are relative to the CSS file.
    const resolved = path.resolve(path.dirname(css.path), url.split('?')[0])
    if (!fs.existsSync(resolved)) continue

    faces.push({
      family,
      weight,
      url: '/' + path.relative(OUT, resolved).replace(/\\/g, '/'),
      file: resolved,
      size: fs.statSync(resolved).size,
      // No unicode-range means the face covers everything.
      ranges: range ? parseUnicodeRange(range) : null,
    })
  }
}

/*
 * The Chinese faces are declared in an inline <style> in app/layout.tsx rather
 * than in the chunk CSS, so they have to be read from a page's own HTML.
 */
function facesInHtml(html) {
  const found = []
  for (const block of html.matchAll(/@font-face\s*\{([^}]*)\}/g)) {
    const body = block[1]
    const family = body.match(/font-family:\s*([^;}]+)/)?.[1]?.trim().replace(/["']/g, '')
    const weight = body.match(/font-weight:\s*([^;}]+)/)?.[1]?.trim() ?? '400'
    const url = body.match(/src:\s*url\(\s*['"]?([^'")]+)/)?.[1]
    const range = body.match(/unicode-range:\s*([^;}]+)/)?.[1]?.trim()
    if (!family || !url) continue

    const resolved = path.join(OUT, url.split('?')[0].replace(/^\//, ''))
    if (!fs.existsSync(resolved)) continue

    found.push({
      family,
      weight,
      url: url.split('?')[0],
      file: resolved,
      size: fs.statSync(resolved).size,
      ranges: range ? parseUnicodeRange(range) : null,
    })
  }
  return found
}

/* ------------------------------------------------------------------ */
/* What one page costs                                                 */
/* ------------------------------------------------------------------ */

/** Text a reader sees: tags, scripts, styles and inline data removed. */
function visibleText(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&[a-z]+;/gi, ' ')
}

const inRange = (cp, ranges) => ranges === null || ranges.some(([lo, hi]) => cp >= lo && cp <= hi)

function weighPage(rel) {
  const file = path.join(OUT, rel)
  if (!fs.existsSync(file)) return null

  const html = fs.readFileSync(file, 'utf8')
  const codepoints = new Set([...visibleText(html)].map((c) => c.codePointAt(0)))

  // Assets the page references directly.
  const referenced = new Set()
  for (const m of html.matchAll(/(?:href|src)="([^"]+\.(?:js|css|svg|ico|png))"/g)) {
    referenced.add(m[1].split('?')[0])
  }

  const rows = [{ what: rel, bytes: transferSize(file), kind: 'html' }]

  for (const url of referenced) {
    const asset = path.join(OUT, url.replace(/^\//, ''))
    if (!fs.existsSync(asset)) continue
    rows.push({
      what: url.replace(/^.*\//, ''),
      bytes: transferSize(asset),
      kind: path.extname(asset).slice(1),
    })
  }

  /*
   * Fonts. A face is fetched only if the page contains a character inside its
   * unicode-range — this is the whole correction, and it is what removes the
   * latin-ext, Greek, Cyrillic and Vietnamese cuts that nobody reading this
   * site will ever download.
   */
  const allFaces = [...faces, ...facesInHtml(html)]

  /*
   * ── Which Han family this page actually uses ───────────────────────────────
   * /data/stations declares a second Han family and points `--font-han` at it,
   * so the layout's base face is present in the page's CSS and never matched by
   * anything. Without this, the two families have identical unicode-ranges and
   * both look "used", and the page is reported at 235 KB of font when it
   * downloads 63 KB.
   *
   * A declared face that nothing selects is not a download. Reading the LAST
   * `--font-han` declaration is how the cascade resolves it, and it is how the
   * page was built to work.
   */
  const hanFamily = [...html.matchAll(/--font-han:\s*'([^']+)'/g)].pop()?.[1]
  const hanFamilies = new Set(allFaces.filter((f) => /Han/i.test(f.family)).map((f) => f.family))

  const fetched = []
  const skipped = []

  for (const face of allFaces) {
    const shadowed = hanFamily && hanFamilies.has(face.family) && face.family !== hanFamily
    const used = !shadowed && [...codepoints].some((cp) => inRange(cp, face.ranges))
    if (used) fetched.push(face)
    else skipped.push(face)
  }

  // Two faces can point at the same file; a browser fetches it once.
  const uniqueFetched = new Map()
  for (const face of fetched) uniqueFetched.set(face.file, face)
  const uniqueSkipped = new Map()
  for (const face of skipped) if (!uniqueFetched.has(face.file)) uniqueSkipped.set(face.file, face)

  for (const face of uniqueFetched.values()) {
    rows.push({
      what: `${face.family} ${face.weight}`,
      bytes: face.size,
      kind: 'woff2',
    })
  }

  const total = rows.reduce((n, r) => n + r.bytes, 0)
  const naive = total + [...uniqueSkipped.values()].reduce((n, f) => n + f.size, 0)

  return {
    rel,
    rows,
    total,
    html: rows[0].bytes,
    naive,
    fetchedFaces: [...uniqueFetched.values()],
    skippedFaces: [...uniqueSkipped.values()],
    chars: codepoints.size,
  }
}

/* ------------------------------------------------------------------ */
/* Report                                                              */
/* ------------------------------------------------------------------ */

const total = files.reduce((a, f) => a + f.size, 0)

function categorise(f) {
  if (f.ext === '.woff2' && f.rel.startsWith('fonts/')) return 'CJK subset (ours)'
  if (f.ext === '.woff2') return 'Latin fonts (next/font)'
  if (f.ext === '.js') return 'JavaScript'
  if (f.ext === '.css') return 'CSS'
  if (f.ext === '.html') return 'HTML'
  if (f.ext === '.txt') return 'RSC payloads (.txt)'
  if (f.ext === '.png') return 'Share images'
  if (f.ext === '.svg' || f.ext === '.ico') return 'Icons'
  return 'Other'
}

const byCategory = new Map()
for (const f of files) {
  const key = categorise(f)
  const entry = byCategory.get(key) ?? { count: 0, size: 0 }
  entry.count++
  entry.size += f.size
  byCategory.set(key, entry)
}

console.log(`\n═══ On disk: ${mb(total)} across ${files.length} files ═══\n`)
console.log('  category                    files       size    share')
console.log('  ' + '-'.repeat(54))
for (const [name, e] of [...byCategory].sort((a, b) => b[1].size - a[1].size)) {
  console.log(
    `  ${pad(name, 26)} ${padS(e.count, 5)}  ${padS(kb(e.size), 10)}  ${padS(((e.size / total) * 100).toFixed(1) + '%', 6)}`,
  )
}
console.log('\n  Disk size is not download size — most of those font files are')
console.log('  never sent to anyone, and the .txt payloads are only fetched on')
console.log('  client-side navigation, never on a first visit.')

/* ---- per page type ---- */

const PAGE_TYPES = [
  ['Home', 'index.html'],
  ['Line page', 'rail/lines/wenhu-line/index.html'],
  ['Station page', 'rail/stations/br13/index.html'],
  ['Rolling stock', 'rail/rolling-stock/val256/index.html'],
  ['Network', 'rail/network/index.html'],
  ['Station records', 'data/stations/index.html'],
  ['Section index', 'rail/index.html'],
  ['About', 'about/index.html'],
]

console.log('\n\n═══ First visit, by page type ═══\n')
console.log('  Transfer size: gzip for text, as-is for fonts (already compressed).')
console.log('  "Naive" is what this script used to report — every referenced font')
console.log('  counted, whether the browser fetches it or not.\n')
console.log(
  '  ' + pad('page type', 17) + padS('HTML', 9) + padS('fonts', 9) + padS('other', 9) + padS('TOTAL', 10) + padS('naive', 10) + '  fonts',
)
console.log('  ' + '-'.repeat(76))

const weighed = []
for (const [label, rel] of PAGE_TYPES) {
  const w = weighPage(rel)
  if (!w) continue
  weighed.push([label, w])

  const fontBytes = w.rows.filter((r) => r.kind === 'woff2').reduce((n, r) => n + r.bytes, 0)
  const otherBytes = w.total - w.html - fontBytes

  console.log(
    '  ' +
      pad(label, 17) +
      padS(kb(w.html), 9) +
      padS(kb(fontBytes), 9) +
      padS(kb(otherBytes), 9) +
      padS(kb(w.total), 10) +
      padS(kb(w.naive), 10) +
      `  ${w.fetchedFaces.length}/${w.fetchedFaces.length + w.skippedFaces.length}`,
  )
}

console.log('\n  Second and subsequent pages cost the HTML column alone — fonts, CSS')
console.log('  and JavaScript are all cached after the first page.')

/* ---- the 200 KB target ---- */

const stationPage = weighed.find(([label]) => label === 'Station page')?.[1]
if (stationPage) {
  const TARGET = 200 * 1024
  console.log('\n\n═══ Against the 200 KB station-page target ═══\n')
  console.log(`  First visit: ${kb(stationPage.total)}`)
  console.log(`  Target:      ${kb(TARGET)}`)
  console.log(
    `  ${stationPage.total <= TARGET ? '✓ under' : '✗ over'} by ${kb(Math.abs(TARGET - stationPage.total))}\n`,
  )
  for (const r of [...stationPage.rows].sort((a, b) => b.bytes - a.bytes)) {
    console.log(`  ${padS(kb(r.bytes), 10)}  ${pad(r.kind, 6)} ${r.what.slice(0, 44)}`)
  }
}

/* ---- which font files nobody fetches ---- */

const line = weighPage('rail/lines/wenhu-line/index.html')
if (line) {
  console.log('\n\n═══ Font files a reader never downloads ═══\n')
  console.log('  Measured against the line page. These are emitted, committed and')
  console.log('  deployed, but no character on the page falls in their range.\n')

  const wasted = line.skippedFaces.reduce((n, f) => n + f.size, 0)
  for (const face of [...line.skippedFaces].sort((a, b) => b.size - a.size)) {
    console.log(`  ${padS(kb(face.size), 10)}  ${face.family} ${face.weight}`)
  }
  console.log('  ' + '-'.repeat(46))
  console.log(`  ${padS(kb(wasted), 10)}  never fetched by anyone reading English`)

  console.log('\n  Fetched:\n')
  for (const face of [...line.fetchedFaces].sort((a, b) => b.size - a.size)) {
    console.log(`  ${padS(kb(face.size), 10)}  ${face.family} ${face.weight}`)
  }
}

if (SHOW_ALL) {
  console.log('\n\n═══ 15 largest files on disk ═══\n')
  for (const f of [...files].sort((a, b) => b.size - a.size).slice(0, 15)) {
    console.log(`  ${padS(kb(f.size), 10)}  ${f.rel}`)
  }
}

console.log()
