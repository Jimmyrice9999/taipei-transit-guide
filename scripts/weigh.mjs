/**
 * Reports what the built site weighs — on disk, and more usefully, what a
 * reader's phone actually downloads for one page.
 *
 * Run: npm run weigh   (after npm run build)
 *
 * Total disk size is misleading: next/font emits one small file per unicode
 * range and a browser fetches only the ranges a page uses, so most of the font
 * bytes are never sent to anyone.
 */

import fs from 'node:fs'
import path from 'node:path'
import zlib from 'node:zlib'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'out')

if (!fs.existsSync(OUT)) {
  console.error('No out/ directory. Run `npm run build` first.')
  process.exit(1)
}

const kb = (n) => (n / 1024).toFixed(1) + ' KB'
const mb = (n) => (n / 1024 / 1024).toFixed(2) + ' MB'

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

/* ---------- on disk, by category ---------- */

function categorise(f) {
  if (f.ext === '.woff2' && f.rel.startsWith('fonts/')) return 'CJK subset (ours)'
  if (f.ext === '.woff2') return 'Latin fonts (next/font)'
  if (f.ext === '.js') return 'JavaScript'
  if (f.ext === '.css') return 'CSS'
  if (f.ext === '.html') return 'HTML'
  if (f.ext === '.txt') return 'RSC payloads (.txt)'
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

const total = files.reduce((a, f) => a + f.size, 0)

console.log(`\n=== on disk: ${mb(total)} across ${files.length} files ===\n`)
console.log('  category                    files      size     share')
console.log('  ' + '-'.repeat(56))
for (const [name, e] of [...byCategory].sort((a, b) => b[1].size - a[1].size)) {
  console.log(
    `  ${name.padEnd(26)} ${String(e.count).padStart(5)}  ${kb(e.size).padStart(10)}   ${((e.size / total) * 100).toFixed(1).padStart(5)}%`,
  )
}

/* ---------- what one page actually costs ---------- */

/**
 * Static hosts serve .woff2, .js and .css compressed. Gzip is the conservative
 * floor; GitHub Pages also negotiates Brotli, which does better on HTML.
 */
const gzipped = (file) => zlib.gzipSync(fs.readFileSync(file), { level: 9 }).length

const PAGE = path.join(OUT, 'train', 'lines', 'wenhu-line', 'index.html')
const html = fs.readFileSync(PAGE, 'utf8')

// Everything the page references, as the browser would resolve it.
const referenced = new Set()
for (const m of html.matchAll(/(?:href|src)="([^"]+\.(?:js|css|woff2|svg|ico))"/g)) referenced.add(m[1])
for (const m of html.matchAll(/url\(['"]?([^'")]+\.woff2)['"]?\)/g)) referenced.add(m[1])

const resolve = (url) => path.join(OUT, url.replace(/^\//, '').split('?')[0])

let pageBytes = gzipped(PAGE)
const rows = [{ what: 'HTML (this page)', bytes: gzipped(PAGE), note: 'gzip' }]

for (const url of [...referenced].sort()) {
  const file = resolve(url)
  if (!fs.existsSync(file)) continue
  const size = gzipped(file)
  pageBytes += size
  rows.push({ what: url.replace(/^.*\//, ''), bytes: size, note: path.extname(file).slice(1) })
}

console.log(`\n=== one page over the wire: /train/lines/wenhu-line/ ===`)
console.log('  (gzip; the CJK font is only fetched because this page contains Chinese)\n')
for (const r of rows.sort((a, b) => b.bytes - a.bytes)) {
  console.log(`  ${r.what.slice(0, 44).padEnd(46)} ${kb(r.bytes).padStart(10)}   ${r.note}`)
}
console.log('  ' + '-'.repeat(66))
console.log(`  ${'TOTAL'.padEnd(46)} ${kb(pageBytes).padStart(10)}`)

const secondBytes = gzipped(PAGE)
console.log(`\n  First visit:      ${kb(pageBytes)}`)
console.log(`  Every page after: ${kb(secondBytes)} — everything else is cached`)

/* ---------- the largest individual files ---------- */

console.log('\n=== 10 largest files on disk ===\n')
for (const f of [...files].sort((a, b) => b.size - a.size).slice(0, 10)) {
  console.log(`  ${kb(f.size).padStart(10)}  ${f.rel}`)
}
console.log()
