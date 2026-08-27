/**
 * Fast, buildless staleness check for the committed CJK font subsets.
 *
 * `scripts/postbuild.mjs` already catches a missing glyph, but only by
 * reading rendered HTML in out/ — which means the ~4-12 minute full build has
 * to run first. That's exactly what `gate:fast` exists to skip. The result:
 * a stale subset went undetected through several green fast-gate commits
 * (Runs 265-272) until a full CI build finally caught it downstream, after
 * the content had already been pushed.
 *
 * This closes that gap without a build, by scanning the same source
 * directories `npm run fonts` falls back to when out/ is missing (content/,
 * lib/, components/, app/ — reused from subset-cjk.mjs's SCAN/walk/isHan so
 * there is one definition of "where Han can come from", not a second copy
 * that could drift) and failing if a character reachable that way is absent
 * from every committed subset.
 *
 * Source scanning over-counts relative to what actually renders — the same
 * warning subset-cjk.mjs's own header carries ("38 glyphs existed only in
 * code comments"). Concretely, two files define Han-detection regexes using
 * bracket character-class literals, e.g. `/[⺀-鿿豈-﫿]/`: the endpoints of
 * that range read as Han characters to a naive scan, and two of them
 * (`鿿豈`) even land textually adjacent with no separator, defeating a
 * simple "must appear in a run of 2+" filter too. These are regex syntax,
 * never rendered text, so short bracket-hyphen spans (`[X-Y]`, the shape a
 * character-class range takes) are stripped from .ts/.tsx source before
 * scanning it. Real Chinese content in this codebase is always a run of two
 * or more Han characters (a word, a phrase, a proper noun); requiring that
 * on what's left catches everything else a lone code comment might carry.
 *
 * A character present in the *wrong* subset (the per-page split postbuild
 * checks) can still slip through here; that finer check still needs the full
 * build. This one exists to catch the common case this project has now hit
 * twice — a brand-new character nothing has ever subsetted — before it
 * reaches a push.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { SCAN as ALL_SCAN, walk, isHan } from './subset-cjk.mjs'

/*
 * Scoped to content/ only, not the full SCAN list subset-cjk.mjs itself uses
 * (which also covers lib/, components/, app/).
 *
 * Source scanning is inherently an over-approximation of what a completed
 * build actually renders — subset-cjk.mjs's own header records this
 * (`~38 glyphs existed only in code comments`). Scoping to code as well as
 * content confirmed the effect directly: three pre-existing station data
 * files (lib/danhai-stations.ts, lib/circular-stations.ts,
 * lib/airport-mrt-stations.ts) carry nine Han characters that a full build's
 * own postbuild check — which reads rendered out/ HTML, the authority on
 * what's real — confirms never actually render on any current page. Keeping
 * those files in scope here would make this check permanently red on a
 * problem the real build has already established doesn't exist, exactly the
 * kind of noise that trains people to stop reading a check.
 *
 * content/ is where the failure this check exists for actually happens: a
 * run adds a page, and nothing before the full build re-reads it. Every
 * character reachable from a generated content page (conflicts-index.md) or
 * an aggregation route (`/data/sources`, built from `sources[]` fields that
 * live in this same content/**\/*.md frontmatter) originates here too, so
 * this scope still catches the bug this script was written for. lib/,
 * components/ and app/ remain covered by the slower, exact, rendered-HTML
 * check inside `npm run gate:full`.
 */
const SCAN = ALL_SCAN.filter((entry) => entry.dir.endsWith(`${path.sep}content`))

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const MANIFEST = path.join(ROOT, 'public', 'fonts', 'subset-manifest.json')

/** Characters that appear in a run of 2+ consecutive Han-range codepoints, per file. */
function collectRunChars() {
  const needed = new Set()
  const byFile = new Map()

  for (const { dir, exts } of SCAN) {
    for (const file of walk(dir, exts)) {
      let text = fs.readFileSync(file, 'utf8')
      // Regex character-class ranges (`[X-Y]`), the shape that makes a range
      // endpoint read as an isolated or accidentally-adjacent Han character.
      // Only stripped in code, where this syntax lives — never in content/.
      if (/\.tsx?$/.test(file)) {
        text = text.replace(/\[[^\]\n]{0,40}-[^\]\n]{0,40}\]/g, ' ')
      }
      let run = []
      const flush = () => {
        if (run.length >= 2) {
          for (const ch of run) {
            needed.add(ch)
            if (!byFile.has(ch)) byFile.set(ch, path.relative(ROOT, file))
          }
        }
        run = []
      }
      for (const ch of text) {
        if (isHan(ch.codePointAt(0))) run.push(ch)
        else flush()
      }
      flush()
    }
  }
  return { needed, byFile }
}

function main() {
  if (!fs.existsSync(MANIFEST)) {
    console.warn('font-check: no font subset manifest; skipping. Run `npm run fonts`.')
    return
  }

  const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'))
  const covered = new Set()
  for (const subset of Object.values(manifest.subsets ?? {})) {
    for (const ch of subset.characters ?? '') covered.add(ch)
  }

  const { needed, byFile } = collectRunChars()
  const missing = [...needed]
    .filter((ch) => !covered.has(ch))
    .sort((a, b) => a.codePointAt(0) - b.codePointAt(0))

  if (missing.length) {
    const examples = [...new Set(missing.map((ch) => byFile.get(ch)))].slice(0, 8)
    console.error(
      `font-check: ${missing.length} character(s) render somewhere in content/lib/components/app ` +
        `but are not in any committed font subset:\n  ${missing.join('')}\n` +
        '  Run `npm run fonts` and commit public/fonts/.\n' +
        `  Example source file(s): ${examples.join(', ')}`,
    )
    process.exit(1)
  }

  console.log(`font-check: clean (${needed.size} Han characters in 2+ character runs, all covered).`)
}

main()
