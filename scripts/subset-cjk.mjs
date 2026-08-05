/**
 * Builds a Traditional Chinese webfont containing ONLY the Han characters this
 * site actually uses.
 *
 * Why: the site is English-language and Chinese appears in a few dozen proper
 * nouns (木柵機廠, 文湖線...). A full Noto Sans TC is ~61 MB across all weights.
 * Subsetting to the characters in /content brings that to a few KB.
 *
 * Why not rely on the reader's system font: Android typically ships Noto CJK in
 * its Simplified cut, and the Simplified glyph variants for codepoints shared
 * with Traditional are visibly wrong to Taiwanese readers. `local()` stays first
 * in the src stack as a zero-download fast path for macOS/iOS/Windows, and this
 * subset is the guaranteed-correct fallback everywhere else.
 *
 * Run:  npm run fonts
 * Then commit the generated files in public/fonts/.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import subsetFont from 'subset-font'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT_DIR = path.join(ROOT, 'public', 'fonts')

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

const isHan = (cp) => HAN_RANGES.some(([lo, hi]) => cp >= lo && cp <= hi)

const WEIGHTS = [
  { weight: 400, file: '400Regular/NotoSansTC_400Regular.ttf', out: 'noto-sans-tc-subset-400.woff2' },
  { weight: 700, file: '700Bold/NotoSansTC_700Bold.ttf', out: 'noto-sans-tc-subset-700.woff2' },
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

function collectCharacters() {
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

async function main() {
  const { chars, perFile } = collectCharacters()

  if (chars.size === 0) {
    console.log('subset-cjk: no Han characters found in content — nothing to build.')
    return
  }

  // Sorted so the output is deterministic and diffs stay readable.
  const text = [...chars].sort((a, b) => a.codePointAt(0) - b.codePointAt(0)).join('')

  console.log(`subset-cjk: ${chars.size} distinct Han characters across ${perFile.size} files`)
  console.log(`  ${text}`)

  fs.mkdirSync(OUT_DIR, { recursive: true })

  const manifest = { generated: 'npm run fonts', characters: text, count: chars.size, files: {} }

  for (const { weight, file, out } of WEIGHTS) {
    const src = path.join(ROOT, 'node_modules/@expo-google-fonts/noto-sans-tc', file)
    if (!fs.existsSync(src)) {
      throw new Error(
        `Source font missing: ${src}\nRun: npm install -D @expo-google-fonts/noto-sans-tc`,
      )
    }

    const buf = await subsetFont(fs.readFileSync(src), text, { targetFormat: 'woff2' })
    fs.writeFileSync(path.join(OUT_DIR, out), buf)

    const kb = (buf.length / 1024).toFixed(1)
    const srcMb = (fs.statSync(src).size / 1024 / 1024).toFixed(1)
    manifest.files[out] = { weight, bytes: buf.length }
    console.log(`  ${out}  ${kb} KB  (from ${srcMb} MB)`)
  }

  fs.writeFileSync(
    path.join(OUT_DIR, 'subset-manifest.json'),
    JSON.stringify(manifest, null, 2) + '\n',
  )

  console.log('subset-cjk: done. Commit public/fonts/.')
}

main().catch((err) => {
  console.error('subset-cjk failed:', err.message)
  process.exit(1)
})
