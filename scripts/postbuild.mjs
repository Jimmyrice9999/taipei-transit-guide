/**
 * Post-processing the static export.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THIS EXISTS
 *
 * Next's `opengraph-image` file convention writes each generated image to an
 * extension-less path — `out/train/stations/br13/opengraph-image`. On a server
 * that is fine, because the route sets its own Content-Type. On a static host it
 * is not: GitHub Pages decides Content-Type from the file extension, and a file
 * with none is served as `application/octet-stream`.
 *
 * Facebook, Twitter/X, Slack and LinkedIn all reject an `og:image` that does not
 * arrive as an image type. So every share preview on the site would have been
 * broken while the tags themselves looked perfectly correct — the kind of bug
 * that survives review because the HTML is right and only the wire format is
 * wrong.
 *
 * This renames each one to `.png` and rewrites the references to match. It runs
 * as part of `npm run build`, so there is no way to deploy without it.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import fs from 'node:fs'
import path from 'node:path'
import { hanOf, sinkOf } from './subset-cjk.mjs'
import { REDIRECT_STUB_MARKER } from './redirect-stub.mjs'
import { MOVES, plannedRedirects } from './moves.mjs'

const OUT = path.join(process.cwd(), 'out')

if (!fs.existsSync(OUT)) {
  console.error('postbuild: no out/ directory')
  process.exit(1)
}

function walk(dir, found = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, found)
    else found.push(full)
  }
  return found
}

const files = walk(OUT)

/* ---- 1. give every generated image a real extension ---------------- */

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47])

const renamed = []
for (const file of files) {
  const name = path.basename(file)
  if (name !== 'opengraph-image' && name !== 'twitter-image') continue

  // Confirm it really is a PNG before renaming it to one.
  const head = Buffer.alloc(4)
  const fd = fs.openSync(file, 'r')
  fs.readSync(fd, head, 0, 4, 0)
  fs.closeSync(fd)
  if (!head.equals(PNG_MAGIC)) {
    console.warn(`postbuild: ${path.relative(OUT, file)} is not a PNG, leaving it alone`)
    continue
  }

  fs.renameSync(file, `${file}.png`)
  renamed.push('/' + path.relative(OUT, file).split(path.sep).join('/'))
}

/* ---- 2. point the tags at the renamed files ------------------------ */

/*
 * The URLs carry a cache-busting query — `opengraph-image?b4c3392…` — so the
 * extension has to go before the `?`, not on the end of the whole string.
 */
let rewritten = 0
for (const file of files.filter((f) => f.endsWith('.html') || f.endsWith('.txt') || f.endsWith('.xml'))) {
  if (!fs.existsSync(file)) continue
  const original = fs.readFileSync(file, 'utf8')

  const updated = original.replace(
    /(opengraph-image|twitter-image)(?!\.png)(\?|"|&quot;|\\")/g,
    '$1.png$2',
  )

  if (updated !== original) {
    fs.writeFileSync(file, updated)
    rewritten++
  }
}

console.log(
  `postbuild: renamed ${renamed.length} share image(s) to .png, ` +
    `rewrote references in ${rewritten} file(s)`,
)

/* ---- 3. fail loudly if anything still points at an extension-less image ---- */

const dangling = []
for (const file of walk(OUT).filter((f) => f.endsWith('.html'))) {
  const html = fs.readFileSync(file, 'utf8')
  for (const match of html.matchAll(/og:image"\s+content="([^"]+)"/g)) {
    if (!/\.png(\?|$)/.test(match[1])) {
      dangling.push(`${path.relative(OUT, file)} → ${match[1]}`)
    }
  }
}

if (dangling.length) {
  console.error('postbuild: og:image URLs without a .png extension:')
  for (const d of dangling.slice(0, 5)) console.error(`  ${d}`)
  process.exit(1)
}

/* ---- 4. redirect stubs for every URL that has ever moved ------------ */

/*
 * A static host cannot issue a real redirect, so every old URL gets a stub:
 * meta refresh for humans, canonical for crawlers, noindex so the stub itself
 * never ranks.
 *
 * ── The table, and why it is generated rather than written out ──────────────
 *
 * Two renames so far. Run 5 turned /train into /rail, because the network
 * includes light rail, conventional rail and HSR and "train" read oddly across
 * them. Run 51 gave /rail a system level — /rail/metro/lines/wenhu-line/ —
 * because a TRA line and the Wenhu Line cannot share one /rail/lines/ index and
 * their station codes would collide outright, and moved the Maokong Gondola out
 * of a top-level section it held alone.
 *
 * The table itself is scripts/moves.mjs — shared with the test that walks it.
 */


const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''
const ORIGIN = process.env.NEXT_PUBLIC_SITE_URL || 'https://jimmyrice9999.github.io'

function redirectStub(target, why) {
  return [
    `<!doctype html><html lang="en" ${REDIRECT_STUB_MARKER}><head><meta charset="utf-8">`,
    `<title>Moved — Taipei Transit Guide</title>`,
    `<link rel="canonical" href="${ORIGIN}${target}">`,
    `<meta http-equiv="refresh" content="0; url=${target}">`,
    '<meta name="robots" content="noindex">',
    '</head><body>',
    `<p>This page moved to <a href="${target}">${target}</a> when ${why}.</p>`,
    '</body></html>\n',
  ].join('')
}

/** Every exported page URL, as a site-absolute path with a trailing slash. */
const exported = walk(OUT)
  .filter((f) => path.basename(f) === 'index.html')
  .map((f) => {
    const rel = path.relative(OUT, path.dirname(f)).split(path.sep).join('/')
    return rel === '' ? '/' : `/${rel}/`
  })

let stubs = 0
let occupied = 0
for (const { old, target, why } of plannedRedirects(exported)) {
  const file = path.join(OUT, ...old.split('/').filter(Boolean), 'index.html')
  // Never shadow a real page.
  if (fs.existsSync(file)) {
    occupied++
    continue
  }
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, redirectStub(`${BASE}${target}`, why))
  stubs++
}
console.log(
  `postbuild: wrote ${stubs} redirect stub(s) from ${MOVES.length} move rule(s)` +
    (occupied ? `, ${occupied} path(s) already a real page` : ''),
)

/* ---- 5. every rendered Han character is in the subset that page loads ---- */

/*
 * ─────────────────────────────────────────────────────────────────────────────
 * The font-staleness hole, closed.
 *
 * Adding a Chinese word to a page and not re-running `npm run fonts` ships a
 * subset missing those glyphs. A reader with a system CJK font never notices;
 * a reader without one gets tofu, and nothing in the build knew. Run 2 recorded
 * this as unfixed because the fix interacted with the subsetting decision.
 * The two-way split made it necessary as well as possible: now a page can be
 * wrong by rendering a character the *other* subset holds, which is a new way
 * to be silently broken and needs a check that knows which page loads which
 * file.
 *
 * A missing glyph is a failure, not a warning. It cannot be seen on the machine
 * that built it, which is precisely why it needs the build to refuse.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const MANIFEST = path.join(process.cwd(), 'public', 'fonts', 'subset-manifest.json')

if (fs.existsSync(MANIFEST)) {
  const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'))
  const subsets = Object.fromEntries(
    Object.entries(manifest.subsets ?? {}).map(([key, value]) => [key, new Set(value.characters)]),
  )

  const missing = []
  let checked = 0

  for (const file of walk(OUT).filter((f) => f.endsWith('.html'))) {
    const html = fs.readFileSync(file, 'utf8')

    // Which subset this page declares, read from the page itself rather than
    // from a list here — so the check cannot disagree with what shipped.
    const key = sinkOf(html)
    const available = subsets[key]
    if (!available) continue

    checked++
    const absent = [...hanOf(html)].filter((ch) => !available.has(ch))
    if (absent.length) {
      missing.push(`${path.relative(OUT, file)} (${key} subset) → ${absent.join('')}`)
    }
  }

  if (missing.length) {
    console.error(
      `postbuild: ${missing.length} page(s) render Han that is not in the subset they load.\n` +
        '  Run `npm run fonts` and commit public/fonts/.',
    )
    for (const m of missing.slice(0, 8)) console.error(`  ${m}`)
    process.exit(1)
  }

  console.log(`postbuild: ${checked} pages checked against the Han subsets — no missing glyphs.`)
} else {
  console.warn('postbuild: no font subset manifest; skipping the glyph check. Run `npm run fonts`.')
}
