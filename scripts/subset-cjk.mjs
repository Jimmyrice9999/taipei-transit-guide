/**
 * Builds Traditional Chinese webfonts containing ONLY the Han characters this
 * site actually renders.
 *
 * Why: the site is English-language and Chinese appears in a few dozen proper
 * nouns (木柵機廠, 文湖線...). A full Noto Sans TC is ~61 MB across all weights.
 * Subsetting to the characters that reach a page brings that to a few KB.
 *
 * Why not rely on the reader's system font: Android typically ships Noto CJK in
 * its Simplified cut, and the Simplified glyph variants for codepoints shared
 * with Traditional are visibly wrong to Taiwanese readers. `local()` stays first
 * in the src stack as a zero-download fast path for macOS/iOS/Windows, and this
 * subset is the guaranteed-correct fallback everywhere else.
 *
 * Run:  npm run build   (so out/ exists)
 *       npm run fonts
 * Then commit the generated files in public/fonts/.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * TWO SUBSETS, NOT ONE — and why the build now has to run first.
 *
 * Measured in run 1: /data/stations renders 204 Han characters and every other
 * page put together renders 112. One page was making the other 45 carry ~40 KB
 * of font for characters none of them contain. A rolling stock page was
 * downloading roughly 80 KB of Chinese to render three characters.
 *
 * So there are two sets now:
 *
 *   base      Everything except /data/stations. Declared in the root layout,
 *             loaded by 45 of 46 pages.
 *   stations  /data/stations alone. Declared by that page, which overrides
 *             --font-han so the base face is never requested there.
 *
 * Splitting that way needs to know what each *page* renders, which the old
 * source scan could not answer — it read content/, lib/, app/ and components/
 * and could only produce one union. It also over-counted: the committed subset
 * held 254 characters while 216 actually rendered, so ~38 glyphs existed only
 * in code comments.
 *
 * Reading out/ fixes both at once, at the cost of inverting the order: the
 * build has to have run. When out/ is missing the script falls back to the old
 * source scan, emits the union into BOTH subsets so nothing renders as tofu,
 * and says loudly that the split was not applied.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import subsetFont from 'subset-font'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT_DIR = path.join(ROOT, 'public', 'fonts')
const BUILD_DIR = path.join(ROOT, 'out')

/**
 * The one page that gets its own subset.
 *
 * Kept here and in app/data/stations/page.tsx. If they disagree, the staleness
 * check in scripts/postbuild.mjs catches it — that page's Han would not be in
 * the subset it declares.
 */
export const SPLIT_ROUTE = 'data/stations'

/** Directories scanned for Han characters. */
const SCAN = [
  { dir: path.join(ROOT, 'content'), exts: ['.md'] },
  { dir: path.join(ROOT, 'lib'), exts: ['.ts', '.tsx'] },
  { dir: path.join(ROOT, 'components'), exts: ['.ts', '.tsx'] },
  { dir: path.join(ROOT, 'app'), exts: ['.ts', '.tsx'] },
]

/**
 * Ranges we treat as "Chinese". Must stay in sync with the unicode-range on the
 * @font-face rule in app/layout.tsx, or the browser will ask for characters the
 * subset does not contain.
 */
const HAN_RANGES = [
  [0x2e80, 0x2fdf], // CJK radicals, Kangxi radicals
  [0x3000, 0x303f], // CJK symbols and punctuation
  [0x3100, 0x312f], // Bopomofo
  [0x3400, 0x4dbf], // CJK Unified Ideographs Extension A
  [0x4e00, 0x9fff], // CJK Unified Ideographs
  [0xf900, 0xfaff], // CJK Compatibility Ideographs
  [0xff00, 0xffef], // Fullwidth forms
]

export const isHan = (cp) => HAN_RANGES.some(([lo, hi]) => cp >= lo && cp <= hi)

const WEIGHTS = [
  { weight: 400, file: '400Regular/NotoSansTC_400Regular.ttf' },
  { weight: 700, file: '700Bold/NotoSansTC_700Bold.ttf' },
]

/** The two subsets, and the file each weight is written to. */
const SUBSETS = [
  { key: 'base', name: (w) => `noto-sans-tc-subset-${w}.woff2` },
  { key: 'stations', name: (w) => `noto-sans-tc-stations-${w}.woff2` },
]

/* ------------------------------------------------------------------ */

function walk(dir, exts, found = []) {
  if (!fs.existsSync(dir)) return found
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, exts, found)
    else if (exts.includes(path.extname(entry.name))) found.push(full)
  }
  return found
}

function collectFromSource() {
  const chars = new Set()
  const perFile = new Map()

  for (const { dir, exts } of SCAN) {
    for (const file of walk(dir, exts)) {
      const text = fs.readFileSync(file, 'utf8')
      const here = new Set()
      for (const ch of text) {
        const cp = ch.codePointAt(0)
        if (isHan(cp)) {
          chars.add(ch)
          here.add(ch)
        }
      }
      if (here.size) perFile.set(path.relative(ROOT, file), here.size)
    }
  }
  return { chars, perFile }
}

/* ------------------------------------------------------------------ */
/* Reading what each built page actually renders                       */
/* ------------------------------------------------------------------ */

/**
 * Text a reader sees.
 *
 * Scripts go first, and they carry the weight here: Next embeds its RSC flight
 * payload in a <script>, which repeats most of the page's text. Counting it
 * would put every page's characters into every page's set and quietly undo the
 * split.
 *
 * `alt` and `title` are kept — alt text is read aloud and shown when an image
 * fails, and a title is drawn as a tooltip. Both can carry Han. No other
 * attribute is: `content` on a meta tag is never painted in page type.
 */
export function visibleText(html) {
  const attributes = [...html.matchAll(/\s(?:alt|title)="([^"]*)"/g)].map((m) => m[1]).join(' ')
  const body = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&[a-z]+;/gi, ' ')
  return `${body} ${attributes}`
}

/** Every `index.html` under out/, as a route path like `data/stations`. */
export function builtPages(dir = BUILD_DIR, found = []) {
  if (!fs.existsSync(dir)) return found
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) builtPages(full, found)
    else if (entry.name === 'index.html' || entry.name.endsWith('.html')) {
      const route = path
        .relative(BUILD_DIR, full)
        .replace(/\\/g, '/')
        .replace(/(?:^|\/)index\.html$/, '')
        .replace(/\.html$/, '')
      found.push({ route, file: full })
    }
  }
  return found
}

/** Han rendered by one built page. */
export function hanOf(html) {
  const chars = new Set()
  for (const ch of visibleText(html)) {
    if (isHan(ch.codePointAt(0))) chars.add(ch)
  }
  return chars
}

/**
 * The two character sets, from the built output.
 *
 * Returns null when there is no build to read, so the caller can fall back
 * rather than silently emitting an empty font.
 */
export function collectFromBuild() {
  const pages = builtPages()
  if (pages.length === 0) return null

  const base = new Set()
  const stations = new Set()
  const perPage = new Map()

  for (const { route, file } of pages) {
    const chars = hanOf(fs.readFileSync(file, 'utf8'))
    if (chars.size === 0) continue
    perPage.set(route || '/', chars.size)
    const sink = route === SPLIT_ROUTE ? stations : base
    for (const ch of chars) sink.add(ch)
  }

  return { base, stations, perPage, pages: pages.length }
}

const sorted = (set) => [...set].sort((a, b) => a.codePointAt(0) - b.codePointAt(0)).join('')

/* ------------------------------------------------------------------ */

async function main() {
  const fromBuild = collectFromBuild()
  let sets
  let mode

  if (fromBuild) {
    mode = 'build'
    sets = { base: fromBuild.base, stations: fromBuild.stations }
    console.log(`subset-cjk: read ${fromBuild.pages} built pages from out/`)
    console.log(
      `  base subset      ${String(sets.base.size).padStart(3)} characters ` +
        `(every page except /${SPLIT_ROUTE}/)`,
    )
    console.log(`  stations subset  ${String(sets.stations.size).padStart(3)} characters (/${SPLIT_ROUTE}/ only)`)
  } else {
    mode = 'source'
    const { chars, perFile } = collectFromSource()
    sets = { base: chars, stations: chars }
    console.warn(
      'subset-cjk: ⚠ out/ is empty or missing, so the two-way split could NOT be applied.\n' +
        '  Falling back to scanning source, and writing the same union into both subsets.\n' +
        '  Nothing will render as tofu, but every page carries the full set —\n' +
        '  about 40 KB more than it needs. Run `npm run build` first, then this again.',
    )
    console.log(`subset-cjk: ${chars.size} distinct Han characters across ${perFile.size} source files`)
  }

  if (sets.base.size === 0 && sets.stations.size === 0) {
    console.log('subset-cjk: no Han characters found — nothing to build.')
    return
  }

  fs.mkdirSync(OUT_DIR, { recursive: true })

  const manifest = {
    generated: 'npm run fonts',
    mode,
    splitRoute: SPLIT_ROUTE,
    subsets: {},
    files: {},
  }

  for (const subset of SUBSETS) {
    const text = sorted(sets[subset.key])
    manifest.subsets[subset.key] = { characters: text, count: sets[subset.key].size }
    console.log(`\n  ${subset.key}: ${sets[subset.key].size} characters`)
    console.log(`    ${text}`)

    for (const { weight, file } of WEIGHTS) {
      const src = path.join(ROOT, 'node_modules/@expo-google-fonts/noto-sans-tc', file)
      if (!fs.existsSync(src)) {
        throw new Error(
          `Source font missing: ${src}\nRun: npm install -D @expo-google-fonts/noto-sans-tc`,
        )
      }

      const out = subset.name(weight)
      const buf = await subsetFont(fs.readFileSync(src), text, { targetFormat: 'woff2' })
      fs.writeFileSync(path.join(OUT_DIR, out), buf)

      manifest.files[out] = { subset: subset.key, weight, bytes: buf.length }
      console.log(`    ${out}  ${(buf.length / 1024).toFixed(1)} KB`)
    }
  }

  const bytes = (key) =>
    Object.values(manifest.files)
      .filter((f) => f.subset === key)
      .reduce((n, f) => n + f.bytes, 0)

  fs.writeFileSync(
    path.join(OUT_DIR, 'subset-manifest.json'),
    JSON.stringify(manifest, null, 2) + '\n',
  )

  console.log(
    `\nsubset-cjk: base ${(bytes('base') / 1024).toFixed(1)} KB on 45 pages, ` +
      `stations ${(bytes('stations') / 1024).toFixed(1)} KB on one.`,
  )
  console.log('subset-cjk: done. Commit public/fonts/.')
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  main().catch((err) => {
    console.error('subset-cjk failed:', err.message)
    process.exit(1)
  })
}
