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

import { LINES, TDX_LINES } from '../lib/lines.ts'
import { contrast } from '../lib/color.ts'
import { BOUNDARY_EXEMPT, SWATCHES, THRESHOLD, declaredColours } from '../lib/surfaces.ts'
import { isRedirectStub } from '../scripts/redirect-stub.mjs'

const OUT = path.join(process.cwd(), 'out')
const read = (rel: string) => fs.readFileSync(path.join(OUT, rel), 'utf8')

function allHtml(): string[] {
  const walk = (dir: string): string[] =>
    fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) return walk(full)
      return entry.name.endsWith('.html') ? [full] : []
    })
  /*
   * Redirect stubs are not pages — see scripts/redirect-stub.mjs. They are
   * identified by a marker in the file rather than by their path, because
   * since run 51 they live inside the live trees (/rail/lines/, /gondola/) as
   * well as under /train.
   */
  return walk(OUT).filter((f) => !isRedirectStub(fs.readFileSync(f, 'utf8')))
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
  /*
   * ── What changed in run 51, and why this now covers every line ─────────────
   *
   * This asserted over TDX_LINES and then asserted the *opposite* for the
   * off-platform ones: the Sanying Line had no published geometry, so it was
   * in the table and deliberately not on the map. That reading was half right.
   * Its stations were plotted the whole time — twelve loose dots under a note
   * saying the line was not drawn — so the page had a line identified by
   * colour alone, which is the exact 1.4.1 failure this test exists to stop,
   * sitting inside the exemption the test granted it.
   *
   * The line is now drawn, dashed, as a chain of its published station points
   * (see getLineTrack in lib/network.ts). Being drawn, it must be labelled like
   * any other. So the rule is simply: every line the registry carries is
   * labelled on the map. TDX_LINES is kept in the check so a line that TDX
   * carries can never quietly lose its geometry and its label together.
   */
  for (const line of [...LINES, ...TDX_LINES]) {
    assert.ok(
      html.includes(`class="routemap-linelabel-text">${line.code}<`),
      `${line.code} is not labelled on the network map`,
    )
  }

  /*
   * A track drawn from station points is not the same claim as a surveyed
   * alignment, and the map must not let them look alike. The dash is the
   * distinction; the caption is the distinction stated in words for anyone who
   * cannot see it. Neither is optional.
   */
  const chained = LINES.filter((l) => !l.onTdx)
  if (chained.length > 0) {
    assert.ok(
      /stroke-dasharray=/.test(html),
      'a line has no published geometry, but nothing on the map is drawn dashed',
    )
    assert.ok(
      /dashed line is not surveyed track/.test(html),
      'the map draws a dashed line without saying in words what a dash means',
    )
    for (const line of chained) {
      assert.ok(
        html.includes(`>${line.code}<`),
        `${line.code} is neither on the map nor anywhere else on the page`,
      )
    }
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
  const html = visible(read('rail/metro/stations/br10/index.html'))
  assert.ok(html.includes('BL'), 'BR10 does not name the Bannan Line it interchanges with')
})

/*
 * ── Run 11: colour arrived on the index rows and on the line icons ──────────
 * Both were added because the site had a colour system and three consecutive
 * rounds of feedback saying it was not being used. Both are therefore exactly
 * the kind of change that quietly turns into "colour carries the meaning",
 * which is the rule this file exists to hold. These pin the fallbacks.
 */

test('a coloured index row never says which line by colour alone', () => {
  // Every row that carries a line rule also carries that line's letter code
  // and its name in words. Strip the CSS and the page still reads.
  const html = read('rail/metro/lines/index.html')
  for (const line of LINES) {
    if (!html.includes(`data-line="${line.code}"`)) continue
    assert.ok(
      html.includes(`>${line.code}</span>`),
      `${line.code} has a coloured row rule on /rail/metro/lines/ and no code badge`,
    )
  }
  assert.ok(
    /class="card-line-name"/.test(html),
    'no row names its line in words — the rule and the badge would be the whole statement',
  )
})

test('every line icon names the character it draws', () => {
  /*
   * The icon says rubber-tyred / steel-wheel / light rail, and driverless or
   * not, by shape alone. A reader who cannot see shapes gets nothing from it
   * unless it is labelled, so every one carries an accessible name that spells
   * the character out — checked here rather than trusted.
   */
  const html = read('rail/network/index.html')
  const labels = [...html.matchAll(/<svg[^>]*class="line-icon"[^>]*aria-label="([^"]+)"/g)].map(
    (m) => m[1],
  )
  assert.ok(labels.length >= LINES.length, `only ${labels.length} line icons on the network page`)
  for (const label of labels) {
    assert.match(
      label,
      /(steel-wheel metro|rubber-tyred metro|light rail)/,
      `line icon label "${label}" does not say what kind of railway it draws`,
    )
  }
})

test('the two diagrams that were not understood say what they are, above themselves', () => {
  /*
   * Run 11, reported verbatim: "idk what the elevation profile is" and "idk
   * what you're even talking abt". Both drawings were correct and unlabelled,
   * and both explanations sat in a caption underneath. These assert the
   * explanation is present and ABOVE the drawing, because that ordering is the
   * whole fix and a later refactor would not obviously break anything else.
   */
  const line = read('rail/metro/lines/wenhu-line/index.html')
  assert.ok(
    line.indexOf('profile-intro') < line.indexOf('profile-frame'),
    'the section drawing explains itself below itself again',
  )
  assert.match(line, /Above ground and below/, 'the section drawing has no heading')

  const ladder = read('rail/technology/station-numbering/index.html')
  assert.ok(
    ladder.indexOf('ladder-intro') < ladder.indexOf('ladder-frame'),
    'the numbering ladder explains itself below itself again',
  )
  assert.match(
    ladder,
    /was drawing number/,
    'the numbering ladder no longer works its example through in words',
  )
})

test('no depot claims a junction it has not declared', () => {
  /*
   * `resolveSpine('')` marks every station on the line — right for a fleet,
   * false for a depot, and six depot pages were printing "Joins the line at
   * R02, R03, … R28, R22A". The note now degrades to a TBC.
   */
  for (const file of allHtml()) {
    const rel = path.relative(OUT, file).replace(/\\/g, '/')
    if (!rel.startsWith('rail/metro/depots/') || rel === 'rail/metro/depots/index.html') continue
    const html = visible(fs.readFileSync(file, 'utf8'))
    const note = html.match(/Joins the line at ([^<]*(?:<[^>]+>[^<]*)*?)<\/span>/)
    if (!note) continue
    const codes = [...note[1].matchAll(/\b[A-Z]{1,2}\d{2}[A-Z]?\b/g)].length
    assert.ok(codes <= 2, `${rel} claims ${codes} junctions with the line`)
  }
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
   *
   * The closing tag in the strip pattern must match the SAME tag name the
   * lang attribute opened on, via a backreference — not `<\/[a-z]+>`, any
   * closing tag. A lang-tagged span containing a nested element (an
   * auto-linked `<a>`, a badge `<span>`) followed by more Han text in the
   * same outer span used to strip only as far as that inner element's own
   * closing tag, leaving genuinely-tagged trailing Han (still inside the
   * outer span, just past a nested `</a>`) looking like a bare run. Real
   * case: a station-name list rendered as one Han-tagged span with one
   * entity-linked name in the middle —
   * `<span lang="zh-Hant">…<a>林口站</a>、江子翠站…</span>` — where
   * `<\/[a-z]+>` matched `</a>` first and stopped there.
   */
  for (const file of allHtml()) {
    const html = visible(fs.readFileSync(file, 'utf8'))
      .replace(/<([a-z]+)\b[^>]*\blang\s*=\s*["']zh[^"']*["'][^>]*>[\s\S]*?<\/\1>/gi, '')
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

/*
 * ── Every scroll container says that it scrolls ──────────────────────────────
 *
 * The site's answer to a wide table or a wide drawing is to scroll it inside
 * its own box, which is the sanctioned pattern and is what keeps the 320px
 * reflow check green. The cost is that the overflow becomes invisible: measured
 * on /rail/network at 375px, the network table is 743px of content in a 343px
 * box and the platform paints an overlay scrollbar only while it is being
 * dragged. Four hundred pixels of table with no signal that it is there.
 *
 * So: a rule that turns on horizontal overflow has to be a selector the
 * affordance block also styles. This is a ratchet, not a style check — it
 * cannot tell whether the fade looks right, only that a new scroll container
 * cannot be added without one, which is exactly how this one arrived.
 */
test('every horizontal scroll container has the scroll affordance', () => {
  const css = fs.readFileSync(path.join(process.cwd(), 'app', 'globals.css'), 'utf8')

  /** Selectors named in the affordance block, normalised to bare class names. */
  const affordance = new Set(
    [...css.matchAll(/^([^{}]*?)\{[^{}]*?background-attachment:\s*local/gms)]
      .flatMap((match) => match[1].split(','))
      .map((selector) => selector.trim().split(/\s+/).pop() ?? '')
      .filter(Boolean),
  )

  assert.ok(affordance.size > 0, 'no affordance block found in globals.css')

  // Every rule that switches on horizontal overflow, with the selector it is on.
  const missing: string[] = []
  for (const [, selectors, body] of css.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    if (!/overflow-x:\s*(auto|scroll)/.test(body)) continue
    for (const selector of selectors.split(',')) {
      const key = selector.trim().split(/\s+/).pop() ?? ''
      // Comment-only or at-rule fragments.
      if (!key || key.startsWith('@') || key.startsWith('*')) continue
      if (!affordance.has(key)) missing.push(selector.trim())
    }
  }

  assert.deepEqual(
    missing,
    [],
    'these scroll horizontally with no affordance:\n  ' + missing.join('\n  '),
  )
})
