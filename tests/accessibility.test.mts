/**
 * Accessibility guarantees, pinned so they cannot regress quietly.
 *
 * Two halves. The first runs the HTML audit over the export. The second is the
 * part that actually matters on this site: colour carries meaning here, so
 * these tests check that it never carries meaning *alone*, and that the letter
 * codes doing the fallback work stay legible.
 *
 * What these tests do NOT cover, and cannot: whether a screen reader announces
 * a station dot usefully, whether the tab order feels right, and how the page
 * behaves at 400% zoom. Those need a browser and a person.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'

import { LINES } from '../lib/lines.ts'
import { contrast } from '../lib/color.ts'
import { BOUNDARY_EXEMPT, SWATCHES, THRESHOLD, declaredColours } from '../lib/surfaces.ts'

const OUT = path.join(process.cwd(), 'out')
const read = (rel: string) => fs.readFileSync(path.join(OUT, rel), 'utf8')

function allHtml(): string[] {
  const walk = (dir: string): string[] =>
    fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) return walk(full)
      return entry.name.endsWith('.html') ? [full] : []
    })
  // out/train holds the /train → /rail redirect stubs, not pages — skipped.
  return walk(OUT).filter((f) => !path.relative(OUT, f).startsWith('train' + path.sep))
}

const visible = (html: string) => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')

/* ---- the HTML audit ------------------------------------------------ */

test('the accessibility audit reports no errors', () => {
  assert.doesNotThrow(
    () =>
      execFileSync(process.execPath, ['scripts/a11y-report.mjs'], {
        cwd: process.cwd(),
        stdio: 'pipe',
      }),
    'scripts/a11y-report.mjs found errors — run `npm run a11y` to see them',
  )
})

/* ---- colour is never the only cue ---------------------------------- */

test('the network map labels every line with its code', () => {
  /*
   * The regression this guards is a real WCAG 1.4.1 failure that shipped:
   * seven lines drawn in seven colours with no text on the map at all. Under
   * simulated protanopia the Bannan and Airport MRT colours are ΔE 0.8 apart —
   * indistinguishable — so a reader with it could not tell which line was
   * which anywhere on the page's main illustration.
   */
  const html = read('rail/network/index.html')
  for (const line of LINES) {
    assert.ok(
      html.includes(`class="routemap-linelabel-text">${line.code}<`),
      `${line.code} is not labelled on the network map`,
    )
  }
})

test('the network table identifies lines by code, not only by colour', () => {
  const html = visible(read('rail/network/index.html'))
  // A bare colour swatch with no adjacent token would leave the table
  // unreadable for the same reader the map labels were added for.
  assert.ok(!html.includes('network-swatch'), 'the colour-only swatch is back')
  for (const line of LINES) {
    assert.ok(html.includes(`>${line.code}<`), `${line.code} badge missing from the network table`)
  }
})

test('no interchange is shown by colour alone', () => {
  // Interchange badges carry the interchanging line's letter code, not just its
  // colour. If the code were dropped the badge would be a coloured chip.
  const html = visible(read('rail/stations/br10/index.html'))
  assert.ok(html.includes('BL'), 'BR10 does not name the Bannan Line it interchanges with')
})

/* ---- badge legibility ---------------------------------------------- */

test('every badge keeps its text legible against its own fill', () => {
  for (const line of LINES) {
    assert.ok(
      contrast(line.badgeFg, line.badgeBg) >= 4.5,
      `${line.code} badge text fails AA — the non-colour cue is itself unreadable`,
    )
  }
})

/* ---- structure ------------------------------------------------------ */

test('every page has exactly one h1 and no skipped heading levels', () => {
  for (const file of allHtml()) {
    const html = visible(fs.readFileSync(file, 'utf8'))
    const rel = path.relative(OUT, file)

    const headings = [...html.matchAll(/<h([1-6])\b/gi)].map((m) => Number(m[1]))
    const h1s = headings.filter((h) => h === 1).length
    assert.equal(h1s, 1, `${rel} has ${h1s} <h1> elements`)

    let previous = 0
    for (const level of headings) {
      assert.ok(level <= previous + 1 || previous === 0, `${rel} skips from h${previous} to h${level}`)
      previous = level
    }
  }
})

test('every page has a main landmark', () => {
  // The 404 was Next's built-in page — no header, no nav, no <main>, and no
  // route back into the site.
  for (const file of allHtml()) {
    const html = visible(fs.readFileSync(file, 'utf8'))
    assert.ok(/<main\b/i.test(html), `${path.relative(OUT, file)} has no <main>`)
  }
})

test('the 404 page offers a way back into the site', () => {
  const html = visible(read('404.html'))
  assert.ok(html.includes('href="/"'), 'no link home')
  assert.ok(html.includes('/data/stations/'), 'does not point at the station records')
  assert.ok(html.includes('/rail/network/'), 'does not point at the network page')
})

test('no image is missing alt text or explicit dimensions', () => {
  for (const file of allHtml()) {
    const html = visible(fs.readFileSync(file, 'utf8'))
    const rel = path.relative(OUT, file)
    for (const match of html.matchAll(/<img\b([^>]*)>/gi)) {
      assert.match(match[1], /\balt\s*=/, `${rel}: <img> with no alt`)
      assert.match(match[1], /\bwidth\s*=/, `${rel}: <img> with no width — causes layout shift`)
      assert.match(match[1], /\bheight\s*=/, `${rel}: <img> with no height — causes layout shift`)
    }
  }
})

test('every meaningful SVG has a role and an accessible name', () => {
  for (const file of allHtml()) {
    const html = visible(fs.readFileSync(file, 'utf8'))
    const rel = path.relative(OUT, file)
    for (const match of html.matchAll(/<svg\b([^>]*)>/gi)) {
      if (/aria-hidden\s*=\s*["']true["']/.test(match[1])) continue
      assert.match(match[1], /\brole\s*=/, `${rel}: <svg> with no role`)
      assert.match(match[1], /aria-label|aria-labelledby/, `${rel}: <svg> with no accessible name`)
    }
  }
})

test('no positive tabindex overrides document order', () => {
  for (const file of allHtml()) {
    const html = visible(fs.readFileSync(file, 'utf8'))
    for (const match of html.matchAll(/\btabindex\s*=\s*["'](-?\d+)["']/g)) {
      assert.ok(
        Number(match[1]) <= 0,
        `${path.relative(OUT, file)} uses tabindex="${match[1]}"`,
      )
    }
  }
})

test('zoom is not capped', () => {
  // Disabling pinch zoom, or capping maximum-scale below 5, fails WCAG 1.4.4.
  for (const file of allHtml()) {
    const html = fs.readFileSync(file, 'utf8')
    const viewport = html.match(/<meta\s+name=["']viewport["']\s+content=["']([^"']*)["']/i)
    if (!viewport) continue
    assert.ok(!/user-scalable\s*=\s*no/i.test(viewport[1]), 'pinch zoom disabled')
    const max = viewport[1].match(/maximum-scale\s*=\s*([\d.]+)/i)
    assert.ok(!max || Number(max[1]) >= 5, `zoom capped at ${max?.[1]}×`)
  }
})

test('Chinese is always tagged zh-Hant', () => {
  /*
   * Untagged Han renders with Simplified glyph variants on a device carrying
   * only a Simplified font, and is announced with English pronunciation rules.
   * One column header on /data/stations had slipped through, because it was the
   * only Han written straight into JSX rather than passing through the Markdown
   * pipeline or RichText.
   */
  for (const file of allHtml()) {
    const html = visible(fs.readFileSync(file, 'utf8'))
      .replace(/<[^>]*lang\s*=\s*["']zh[^"']*["'][^>]*>[\s\S]*?<\/[a-z]+>/gi, '')
      .replace(/<[^>]*>/g, ' ')
    const stray = html.match(/[一-鿿]{2,}/g)
    assert.equal(
      stray,
      null,
      `${path.relative(OUT, file)} has untagged Han: ${[...new Set(stray ?? [])].slice(0, 3).join(', ')}`,
    )
  }
})

/* ---- regressions from the browser-verification run ------------------ */

/*
 * ── Every colour in the system, not four of them ────────────────────────────
 *
 * Run 2 caught `--text-3` at 3.89:1 and closed it by adding four greys to a
 * test by name. That fixed the instance and not the class: a colour added
 * tomorrow is unchecked tomorrow, for exactly the reason --text-3 was.
 *
 * These three tests together invert the default. Nothing may exist in the
 * stylesheet without a stated role; every role has a threshold; every exemption
 * has to be written down. Adding a colour and saying nothing about it now fails
 * the build.
 */

test('every colour declared in the stylesheet has a stated role', () => {
  const css = fs.readFileSync(path.join(process.cwd(), 'app', 'globals.css'), 'utf8')
  const declared = declaredColours(css)
  const known = new Set(SWATCHES.map((s) => s.name))

  const unclassified = Object.keys(declared).filter((name) => !known.has(name))
  assert.deepEqual(
    unclassified,
    [],
    `these colours are declared in globals.css and classified nowhere: ${unclassified.join(', ')}. ` +
      'Add them to lib/surfaces.ts with a role and a reason. An unclassified colour is an unchecked one — ' +
      'which is precisely how --text-3 shipped at 3.89:1 for four builds.',
  )

  const missing = SWATCHES.map((s) => s.name).filter((name) => !(name in declared))
  assert.deepEqual(missing, [], `classified in lib/surfaces.ts but no longer in globals.css: ${missing.join(', ')}`)
})

test('every colour clears the threshold for its own role', () => {
  const css = fs.readFileSync(path.join(process.cwd(), 'app', 'globals.css'), 'utf8')
  const declared = declaredColours(css)

  for (const swatch of SWATCHES) {
    const threshold = THRESHOLD[swatch.role]
    if (threshold === 0) continue

    const colour = declared[swatch.name]
    assert.ok(colour, `--${swatch.name} not found in globals.css`)
    assert.ok(swatch.on.length > 0, `--${swatch.name} is a ${swatch.role} but names no surface`)

    for (const surface of swatch.on) {
      const bg = declared[surface]
      assert.ok(bg, `--${swatch.name} claims to sit on --${surface}, which is not declared`)

      const measured = contrast(colour, bg)
      if (measured >= threshold) continue

      // A boundary may be exempt, but only with an argument on the record.
      const exemption = swatch.role === 'boundary' ? BOUNDARY_EXEMPT[swatch.name] : undefined
      assert.ok(
        exemption,
        `--${swatch.name} ${colour} is ${measured.toFixed(2)}:1 on --${surface} ${bg}, ` +
          `below the ${threshold}:1 its role requires, and there is no exemption for it in lib/surfaces.ts`,
      )
    }
  }
})

test('the map paper is a surface the accent inks were derived against', () => {
  /*
   * The map draws on its own paper, not on --bg, and the line inks are derived
   * against white. Run 2 measured --text-3 on map paper by hand and moved on;
   * this pins it, because the map caption and the spine key both use it there.
   */
  const css = fs.readFileSync(path.join(process.cwd(), 'app', 'globals.css'), 'utf8')
  const declared = declaredColours(css)

  const paper = css.match(/--map-paper:\s*(#[0-9a-fA-F]{6})/)?.[1] ?? declared['bg']
  for (const name of ['text', 'text-2', 'text-3']) {
    const measured = contrast(declared[name], paper)
    assert.ok(
      measured >= 4.5,
      `--${name} ${declared[name]} is ${measured.toFixed(2)}:1 on map paper ${paper}`,
    )
  }
})

test('no nested anchors survive into the built HTML', () => {
  /*
   * A StationBadge inside the adjacent-station card rendered a link inside a
   * link. The parser splits that on load and React hydration reconstructs it,
   * so the served DOM and the hydrated DOM disagreed on all 24 station pages.
   * Source-level check: an <a> opening before the previous <a> has closed.
   */
  for (const file of allHtml()) {
    const html = visible(fs.readFileSync(file, 'utf8'))
    const rel = path.relative(OUT, file)
    for (const m of html.matchAll(/<a\b[^>]*>((?:(?!<\/a>)[\s\S])*?)<a\b/g)) {
      assert.fail(`${rel}: nested <a> at "${m[0].slice(0, 90).replace(/\s+/g, ' ')}"`)
    }
  }
})

test('an SVG containing links is never role="img"', () => {
  /*
   * role="img" makes the subtree presentational, so the 24 station links
   * inside the line map did not exist for a conforming screen reader, and axe
   * flagged the structure as nested-interactive on 25 pages.
   */
  for (const file of allHtml()) {
    const html = visible(fs.readFileSync(file, 'utf8'))
    const rel = path.relative(OUT, file)
    for (const m of html.matchAll(/<svg\b([^>]*)>([\s\S]*?)<\/svg>/g)) {
      if (/role="img"/.test(m[1]) && /<a\b/.test(m[2])) {
        assert.fail(`${rel}: <svg role="img"> contains links`)
      }
    }
  }
})

/* ---- motion --------------------------------------------------------- */

test('every transition is disabled under prefers-reduced-motion', () => {
  const css = fs.readFileSync(path.join(process.cwd(), 'app', 'globals.css'), 'utf8')

  const reducedBlocks = [...css.matchAll(/@media\s*\(prefers-reduced-motion:\s*reduce\)\s*\{/gi)]
  assert.ok(reducedBlocks.length > 0, 'no prefers-reduced-motion block at all')

  // Count motion declarations outside the reduce blocks against those inside.
  // Not a proof of coverage, but it fails loudly if someone adds a transition
  // and forgets the guard, which is the realistic regression.
  /*
   * Counted by subtraction rather than with a negative lookahead. `\s*(?!none)`
   * looks correct and is not: the engine backtracks `\s*` to zero width, checks
   * "not none" against the space, and matches anyway. Counting the `none`s and
   * taking them off the total has no such trapdoor.
   */
  const total = [...css.matchAll(/transition:/g)].length
  const disabling = [...css.matchAll(/transition:\s*none/g)].length
  const animating = total - disabling

  assert.ok(
    disabling >= animating,
    `${animating} transition(s) declared but only ${disabling} disabled under reduced motion`,
  )

  const animations = [...css.matchAll(/animation:/g)].length
  const animationsOff = [...css.matchAll(/animation:\s*none/g)].length
  assert.equal(
    animations - animationsOff,
    0,
    'a keyframe animation was added without a reduced-motion guard being considered',
  )
})
