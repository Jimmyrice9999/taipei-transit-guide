/**
 * Accessibility checks that can be made against the exported HTML.
 *
 * Run: npm run a11y   (after npm run build)
 *
 * This does NOT replace testing with a screen reader or a keyboard, and it does
 * not pretend to. It covers the machine-checkable half — heading order, alt
 * text, SVG semantics, landmarks, language tagging, duplicate ids — so that
 * human attention can go to the half that needs judgement.
 *
 * Regex rather than a DOM parser, for the same reason as the link checker: the
 * input is our own generated markup, and adding a parser to lint it would be a
 * dependency bought for one script.
 */

import fs from 'node:fs'
import path from 'node:path'
import { isRedirectStub } from './redirect-stub.mjs'

const OUT = path.join(process.cwd(), 'out')

function walk(dir, found = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, found)
    else if (entry.name.endsWith('.html')) found.push(full)
  }
  return found
}

/** Strip Next's inlined navigation payload — it is data, not rendered markup. */
const visible = (html) => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')

const findings = []
const record = (severity, page, message) => findings.push({ severity, page, message })

if (!fs.existsSync(OUT)) {
  console.error('No out/ directory. Run `npm run build` first.')
  process.exit(2)
}

// Redirect stubs are not pages — see scripts/redirect-stub.mjs.
const pages = walk(OUT).filter((f) => !isRedirectStub(fs.readFileSync(f, 'utf8')))

for (const file of pages) {
  const rel = '/' + path.relative(OUT, file).split(path.sep).join('/').replace(/index\.html$/, '')
  const raw = fs.readFileSync(file, 'utf8')
  const html = visible(raw)

  /* ---- heading hierarchy ---------------------------------------- */

  const headings = [...html.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi)].map((m) => ({
    level: Number(m[1]),
    text: m[2].replace(/<[^>]*>/g, '').trim().slice(0, 40),
  }))

  const h1s = headings.filter((h) => h.level === 1)
  if (h1s.length === 0) record('error', rel, 'no <h1>')
  if (h1s.length > 1) record('error', rel, `${h1s.length} <h1> elements — there should be exactly one`)

  let previous = 0
  for (const heading of headings) {
    if (previous && heading.level > previous + 1) {
      record(
        'error',
        rel,
        `heading level jumps h${previous} → h${heading.level} at "${heading.text}"`,
      )
    }
    previous = heading.level
  }

  /* ---- images ---------------------------------------------------- */

  for (const match of html.matchAll(/<img\b([^>]*)>/gi)) {
    const attrs = match[1]
    if (!/\balt\s*=/.test(attrs)) {
      record('error', rel, `<img> with no alt attribute: ${attrs.trim().slice(0, 70)}`)
    }
    if (!/\bwidth\s*=/.test(attrs) || !/\bheight\s*=/.test(attrs)) {
      record(
        'warn',
        rel,
        `<img> without explicit width/height — reserves no space, so the page shifts as it loads: ${attrs.trim().slice(0, 70)}`,
      )
    }
  }

  /* ---- SVG semantics --------------------------------------------- */

  for (const match of html.matchAll(/<svg\b([^>]*)>/gi)) {
    const attrs = match[1]
    const decorative = /aria-hidden\s*=\s*["']true["']/.test(attrs)
    if (decorative) continue
    if (!/\brole\s*=/.test(attrs)) {
      record('error', rel, '<svg> with no role — announced inconsistently across screen readers')
    }
    if (!/aria-label|aria-labelledby/.test(attrs)) {
      record('error', rel, '<svg role="img"> with no accessible name')
    }
  }

  /* ---- interactive elements -------------------------------------- */

  for (const match of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)) {
    const attrs = match[1]
    const text = match[2].replace(/<[^>]*>/g, '').trim()
    const labelled = /aria-label|aria-labelledby|\btitle\s*=/.test(attrs)
    // An SVG link whose name comes from a child <title> is fine.
    const hasSvgTitle = /<title>/i.test(match[2])
    // So is a link wrapping an image with non-empty alt text — that alt IS the
    // link's accessible name. The wordmark link in the site header is exactly
    // this shape, and treating it as unnamed produced a false positive on every
    // page of the site.
    const hasImageAlt = /<img\b[^>]*\balt\s*=\s*["'][^"']+["']/i.test(match[2])
    if (!text && !labelled && !hasSvgTitle && !hasImageAlt) {
      record('error', rel, `link with no accessible name: ${attrs.trim().slice(0, 70)}`)
    }
    if (/\bhref\s*=\s*["']["']/.test(attrs)) {
      record('error', rel, 'link with an empty href')
    }
  }

  for (const match of html.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/gi)) {
    const text = match[2].replace(/<[^>]*>/g, '').trim()
    if (!text && !/aria-label|aria-labelledby/.test(match[1])) {
      record('error', rel, 'button with no accessible name')
    }
  }

  /* ---- landmarks -------------------------------------------------- */

  if (!/<main\b/i.test(html)) record('error', rel, 'no <main> landmark')

  const navs = [...html.matchAll(/<nav\b([^>]*)>/gi)]
  const unlabelledNavs = navs.filter((m) => !/aria-label|aria-labelledby/.test(m[1]))
  if (navs.length > 1 && unlabelledNavs.length > 0) {
    record(
      'warn',
      rel,
      `${unlabelledNavs.length} of ${navs.length} <nav> landmarks have no aria-label — indistinguishable in a landmark list`,
    )
  }

  /* ---- language --------------------------------------------------- */

  if (!/<html\b[^>]*\blang\s*=/i.test(html)) record('error', rel, '<html> has no lang attribute')

  // Han characters outside a zh-Hant-tagged element render with the wrong
  // glyph variants and are announced in the wrong language.
  //
  // The closing tag must match the SAME tag name as the one that opened
  // with the lang attribute, via a backreference — not `<\/[a-z]+>`, any
  // closing tag. A lang-tagged span that itself contains a nested element
  // (an auto-linked `<a>`, a badge `<span>`) followed by more Han text in
  // the same outer span used to strip only as far as that inner element's
  // OWN closing tag, leaving the correctly-tagged trailing Han text (still
  // genuinely inside the outer span, just past a nested `</a>`) looking
  // like a bare, untagged run to this regex. Real case: a station-name
  // list rendered as one Han-tagged span with one entity-linked name in
  // the middle — `<span lang="zh-Hant">…<a>林口站</a>、江子翠站…</span>` — where
  // `<\/[a-z]+>` matched `</a>` first and stopped there.
  const stripped = html
    .replace(/<([a-z]+)\b[^>]*\blang\s*=\s*["']zh[^"']*["'][^>]*>[\s\S]*?<\/\1>/gi, '')
    .replace(/<[^>]*>/g, ' ')
  const strayHan = stripped.match(/[一-鿿]{2,}/g)
  if (strayHan) {
    record('warn', rel, `Han text possibly outside a zh-Hant element: ${[...new Set(strayHan)].slice(0, 3).join(', ')}`)
  }

  /* ---- duplicate ids ---------------------------------------------- */

  const ids = [...html.matchAll(/\sid\s*=\s*["']([^"']+)["']/g)].map((m) => m[1])
  const seen = new Set()
  const duplicates = new Set()
  for (const id of ids) {
    if (seen.has(id)) duplicates.add(id)
    seen.add(id)
  }
  if (duplicates.size) {
    record('error', rel, `duplicate id(s): ${[...duplicates].join(', ')}`)
  }

  /* ---- tabindex --------------------------------------------------- */

  for (const match of html.matchAll(/\btabindex\s*=\s*["'](-?\d+)["']/g)) {
    if (Number(match[1]) > 0) {
      record('error', rel, `positive tabindex="${match[1]}" — overrides document order`)
    }
  }

  /* ---- viewport --------------------------------------------------- */

  const viewport = html.match(/<meta\s+name=["']viewport["']\s+content=["']([^"']*)["']/i)
  if (viewport) {
    if (/user-scalable\s*=\s*no/i.test(viewport[1])) {
      record('error', rel, 'viewport disables pinch zoom')
    }
    const max = viewport[1].match(/maximum-scale\s*=\s*([\d.]+)/i)
    if (max && Number(max[1]) < 5) {
      record('error', rel, `viewport caps zoom at ${max[1]}× — WCAG 1.4.4 wants 5×`)
    }
  }
}

/* ------------------------------------------------------------------ */

const errors = findings.filter((f) => f.severity === 'error')
const warnings = findings.filter((f) => f.severity === 'warn')

const summarise = (list, label) => {
  if (list.length === 0) {
    console.log(`  ✓ no ${label}`)
    return
  }
  // Group identical messages, since most repeat across every page.
  const byMessage = new Map()
  for (const f of list) {
    if (!byMessage.has(f.message)) byMessage.set(f.message, [])
    byMessage.get(f.message).push(f.page)
  }
  console.log(`  ✗ ${list.length} ${label} (${byMessage.size} distinct):\n`)
  for (const [message, onPages] of [...byMessage].sort((a, b) => b[1].length - a[1].length)) {
    console.log(`      ${message}`)
    console.log(
      `        on ${onPages.length} page(s): ${onPages.slice(0, 3).join(', ')}${onPages.length > 3 ? ` … +${onPages.length - 3}` : ''}\n`,
    )
  }
}

console.log(`\nChecked ${pages.length} pages.\n`)
console.log('ERRORS')
summarise(errors, 'errors')
console.log('\nWARNINGS')
summarise(warnings, 'warnings')
console.log('')

process.exit(errors.length > 0 ? 1 : 0)
