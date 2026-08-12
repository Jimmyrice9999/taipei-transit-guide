/**
 * Machinery that exists and is wired to nothing.
 *
 *   npm run unused
 *
 * Three cases turned up by hand across four passes before this existed:
 * `branchTint()` unused since run 11, `needsHairline` computed since run 5
 * and drawn by nothing, and image folders fetched but referenced by no page.
 * All three were the same shape — something built, then never wired to a
 * caller — and nothing short of reading every file caught them. This is
 * that reading, automated.
 *
 * Three checks:
 *
 *   1. Exported functions/consts/types/classes in app, components, lib,
 *      scripts, tests with no reference anywhere else in that corpus.
 *   2. CSS classes declared in app/globals.css with no reference in any
 *      component, page, or content file.
 *   3. Image sidecars under public/images with no id string anywhere in
 *      content frontmatter, markdown bodies, or app/lib/component code.
 *
 * This is a grep-shaped heuristic, not a type-checker: it matches identifier
 * text, not bindings, so a common name reused elsewhere can hide a real
 * miss, and a name built only via template literal (`` `line-${code}` ``)
 * can produce a false positive. It reports; it does not delete and does not
 * fail the build — some flagged code is deliberate (a public API kept for
 * one caller that will land later, a class reserved for a state not yet
 * reachable). Read the report, don't script around it.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

const SKIP_DIRS = new Set(['node_modules', '.next', 'out', '.git', '.image-cache', 'docs'])

function walk(dir, exts) {
  const found = []
  if (!fs.existsSync(dir)) return found
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) found.push(...walk(full, exts))
    else if (exts.some((e) => entry.name.endsWith(e))) found.push(full)
  }
  return found
}

const CODE_DIRS = ['app', 'components', 'lib', 'scripts', 'tests']
const CODE_EXTS = ['.ts', '.tsx', '.mts', '.mjs']
const codeFiles = CODE_DIRS.flatMap((d) => walk(path.join(ROOT, d), CODE_EXTS))
const contentFiles = walk(path.join(ROOT, 'content'), ['.md'])
const allTextFiles = [...codeFiles, ...contentFiles]

const rel = (f) => path.relative(ROOT, f).split(path.sep).join('/')

/*
 * Next.js special-file exports the framework calls by name, not by import —
 * a real caller, just not a grep-visible one.
 */
const RESERVED = new Set([
  'default', 'metadata', 'generateMetadata', 'generateStaticParams',
  'generateViewport', 'viewport', 'dynamic', 'dynamicParams', 'revalidate',
  'fetchCache', 'runtime', 'preferredRegion', 'maxDuration', 'GET', 'POST',
  'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS', 'config', 'alt', 'size',
  'contentType',
])
const isAppFile = (f) => rel(f).startsWith('app/')

/* ---------- 1. exported symbols with no reference outside their file ---------- */

const EXPORT_PATTERN =
  /^export\s+(default\s+)?(?:async\s+)?(?:function|const|class|type|interface)\s+([A-Za-z_$][A-Za-z0-9_$]*)/

const exports = []
for (const file of codeFiles) {
  const lines = fs.readFileSync(file, 'utf8').split('\n')
  lines.forEach((line, i) => {
    const m = line.match(EXPORT_PATTERN)
    if (!m) return
    const isDefault = Boolean(m[1])
    const name = m[2]
    if (isAppFile(file) && RESERVED.has(name)) return
    // Next.js route files are resolved by path, not by importing this
    // identifier — a default export here has no grep-visible caller by
    // design, not because it's unwired.
    if (isAppFile(file) && isDefault) return
    exports.push({ name, file, line: i + 1 })
  })
}

/* Whole corpus, minus each definition's own file, searched per symbol. */
const fileText = new Map(allTextFiles.map((f) => [f, fs.readFileSync(f, 'utf8')]))

const unusedExports = exports.filter(({ name, file }) => {
  const pattern = new RegExp(`\\b${name}\\b`)
  return !allTextFiles.some((f) => f !== file && pattern.test(fileText.get(f)))
})

/* ---------- 2. CSS classes declared but never referenced ---------- */

const cssPath = path.join(ROOT, 'app', 'globals.css')
const css = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, 'utf8') : ''
const declaredClasses = new Set()
for (const m of css.matchAll(/\.([a-zA-Z][a-zA-Z0-9_-]*)/g)) declaredClasses.add(m[1])

const nonCssFiles = allTextFiles.filter((f) => f !== cssPath)

/*
 * className is sometimes assembled with a template literal — `spine-${variant}`,
 * `ladder-${L.key}` — so no sidecar-free literal string ever names the class.
 * Nested templates (a ternary inside a template inside a className) defeat a
 * simple backtick-pairing scan, so instead of parsing the template, just look
 * for the shape itself: a hyphen-terminated literal run immediately before an
 * interpolation, on a line that assigns className. That's enough to turn
 * `has-${variant}` into a `^has-[…]*` wildcard without needing to know where
 * the enclosing template starts or ends.
 */
const dynamicClassPatterns = []
for (const text of fileText.values()) {
  for (const line of text.split('\n')) {
    if (!line.includes('className')) continue
    for (const m of line.matchAll(/([A-Za-z][A-Za-z0-9_-]*-)\$\{/g)) {
      const prefix = m[1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      dynamicClassPatterns.push(new RegExp(`^${prefix}[a-zA-Z0-9_-]*$`))
    }
  }
}

const unusedClasses = [...declaredClasses]
  .filter((name) => {
    if (dynamicClassPatterns.some((p) => p.test(name))) return false
    const pattern = new RegExp(`\\b${name}\\b`)
    return !nonCssFiles.some((f) => pattern.test(fileText.get(f)))
  })
  .sort()

/* ---------- 3. image sidecars with no referencing id string ---------- */

const IMAGES = path.join(ROOT, 'public', 'images')
const sidecars = []
const walkImages = (dir) => {
  if (!fs.existsSync(dir)) return
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walkImages(full)
    else if (entry.name.endsWith('.json')) {
      sidecars.push(path.relative(IMAGES, full).replace(/\.json$/, '').split(path.sep).join('/'))
    }
  }
}
walkImages(IMAGES)

/*
 * getImage() is also called with a template literal built per-item, e.g.
 * `stations/${station.code.toLowerCase()}` for every station on a line with
 * per-station pages — no single sidecar id ever appears as a literal string
 * for those, since the id is assembled at build time. A literal-string scan
 * would flag the whole family as unused, which is wrong: it's used once per
 * station, just not spelled out. Find those dynamic prefixes and cover any
 * sidecar under them.
 */
const dynamicPrefixes = new Set()
for (const text of fileText.values()) {
  for (const m of text.matchAll(/getImage\(\s*`([^`$]*)\$\{/g)) dynamicPrefixes.add(m[1])
}

const unusedImages = sidecars.filter((id) => {
  if ([...dynamicPrefixes].some((prefix) => id.startsWith(prefix))) return false
  const pattern = new RegExp(id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  return !allTextFiles.some((f) => pattern.test(fileText.get(f)))
})

/* ---------- report ---------- */

console.log(`\nunused-audit: ${exports.length} exports, ${declaredClasses.size} CSS classes, ${sidecars.length} image sidecars scanned\n`)

console.log(`1. Exported symbols with no reference elsewhere (${unusedExports.length})\n`)
if (unusedExports.length === 0) {
  console.log('  ✓ none')
} else {
  for (const { name, file, line } of unusedExports) console.log(`  ${rel(file)}:${line}  ${name}`)
}

console.log(`\n2. CSS classes declared but never referenced (${unusedClasses.length})\n`)
if (unusedClasses.length === 0) {
  console.log('  ✓ none')
} else {
  for (const name of unusedClasses) console.log(`  .${name}`)
}

console.log(`\n3. Image sidecars with no referencing id (${unusedImages.length})\n`)
if (unusedImages.length === 0) {
  console.log('  ✓ none')
} else {
  for (const id of unusedImages) console.log(`  ${id}`)
}

fs.writeFileSync(
  path.join(ROOT, 'docs', 'unused-audit.json'),
  JSON.stringify(
    {
      exports: exports.length,
      cssClasses: declaredClasses.size,
      imageSidecars: sidecars.length,
      unusedExports: unusedExports.map(({ name, file, line }) => ({ name, file: rel(file), line })),
      unusedClasses,
      unusedImages,
    },
    null,
    2,
  ) + '\n',
)
console.log(`\nFull list → docs/unused-audit.json`)
console.log(`\nThis is a heuristic (identifier-text match, not a type-checker) — read the`)
console.log(`report and judge each line; it does not fail the build.\n`)
