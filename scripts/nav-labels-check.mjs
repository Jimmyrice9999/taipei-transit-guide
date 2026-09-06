/**
 * Does every link inside the section dropdown nav actually land on the page
 * it names?
 *
 *   node scripts/nav-labels-check.mjs            check ./out
 *   node scripts/nav-labels-check.mjs --json      machine-readable
 *
 * Runs against the built `out/`, same reasoning as check-links.mjs: only the
 * exported HTML tells the truth about where a link actually lands once
 * basePath rewriting and redirect stubs have had their turn.
 *
 * ── What this catches that check-links.mjs does not ────────────────────────
 *
 * check-links.mjs proves a link's href resolves to SOME real page. It cannot
 * prove that page is the RIGHT one — a link labelled "Xindian Station" that
 * happens to 200 at a different station's URL passes it cleanly.
 *
 * ── Why this is scoped to `<nav class="site-nav">` alone ───────────────────
 *
 * A first version of this checker matched a link's visible text against
 * every page's title/alias registry, site-wide. It found real structural
 * navigation right — but also dozens of "failures" that were not bugs: a
 * bike-share district index titled "Zhonghe" next to a metro station also
 * named Zhonghe; a line page's own "Depots" row linking the bare place name
 * "Tucheng" to the depot rather than the station. Taiwan place names are
 * reused across stations, districts, depots and offices constantly, and
 * in-content prose links a name to whichever of those the sentence actually
 * means — correctly, on purpose. A second version widened the scope to
 * every page's breadcrumb trail too, on the theory that breadcrumbs are
 * equally structural chrome — but breadcrumb *labels* turn out not to share
 * one convention across templates (a TMRT breadcrumb crumb reads "G0 Beitun
 * Main Station" for a page titled "Beitun Main Station"; a KRTC one reads
 * "Hamasen (O1) — Kaohsiung Metro" for a page titled "Hamasen"; the first
 * crumb everywhere reads "Home" for a page titled "Taiwan Transit Guide"),
 * so an exact-match rule against breadcrumbs manufactures its own false
 * positives just as surely as the site-wide version did.
 *
 * `<nav class="site-nav">` — the section dropdown menu, the literal thing a
 * report of "dropdown menus... don't land on the right page" means — has
 * none of that variation: one component (SiteNav.tsx) renders every entry
 * the same way, `<Link href={link.href}>{link.title}</Link>`, so a link's
 * visible text is always meant to be its target's exact title. That is what
 * makes it the part of "does this link land where it says" checkable
 * exactly, everywhere, without exceptions eating the signal — and, because
 * the data driving it can't produce a label/destination mismatch by
 * construction, this check is a regression guard for that invariant rather
 * than an expectation of ever finding one.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { isRedirectStub } from './redirect-stub.mjs'

const OUT = path.join(process.cwd(), 'out')
const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/+$/, '')

function walk(dir, found = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, found)
    else if (entry.name.endsWith('.html')) found.push(full)
  }
  return found
}

function urlOf(file, outRoot) {
  const rel = '/' + path.relative(outRoot, file).split(path.sep).join('/')
  return rel.endsWith('/index.html') ? rel.slice(0, -'index.html'.length) : rel
}

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
}

function plainTextOf(html) {
  return decodeEntities(html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ')).trim()
}

/**
 * A nav link's visible text, with the nav's OWN decoration (a line's
 * colour-code badge, `class="badge ... nav-badge"`) stripped — that badge is
 * added only in the nav rendering and never appears in the target page's own
 * title, so it must not survive into a comparison with one. A station code
 * baked directly into a page's own title (KRTC's "Kaohsiung International
 * Airport (R4) — Kaohsiung Metro") is not this: it renders as plain text in
 * the nav (no badge span at all — see `pageTitleOf`) and is left alone.
 */
function navTextOf(html) {
  const stripped = html
    .replace(/<span\b[^>]*\bclass="[^"]*\bnav-badge\b[^"]*"[^>]*>[\s\S]*?<\/span>/g, ' ')
    // NavLabel marks Han runs with an inline lang span. It is semantic
    // annotation, not visible whitespace: dropping its tags keeps punctuation
    // adjacent exactly as it appears to the reader and in the target h1.
    .replace(/<\/?span\b[^>]*>/g, '')
  return plainTextOf(stripped)
}

/**
 * A page's own canonical name, from its `<h1 class="page-title">`.
 *
 * An EntityIcon's `<svg>` sits inside this h1 and carries its own `<title>`
 * (an accessible name, e.g. "Bike-share service") that generic tag-stripping
 * would otherwise leak into the extracted text as if a reader could see it —
 * stripped for that reason. A station-code badge inside the h1 (rendered by
 * the rich-text pipeline recognising a bare code in prose, e.g. "R4" inside
 * "Kaohsiung International Airport (R4) — Kaohsiung Metro") is the opposite
 * case: its own title attribute duplicates the code as a tooltip, but its
 * visible text IS the same code the nav shows as plain text, so only the
 * wrapping tag is stripped here — the code itself must survive.
 */
export function extractPageTitle(html) {
  const match = html.match(/<h1\b[^>]*\bclass="[^"]*\bpage-title\b[^"]*"[^>]*>([\s\S]*?)<\/h1>/)
  if (!match) return null
  const withoutIcon = match[1].replace(/<svg\b[\s\S]*?<\/svg>/g, ' ')
  // <span> (a badge, a lang tag) is always inline here and butts directly
  // against its surrounding text with no original whitespace — dropped
  // rather than space-replaced, so "(<span>R4A</span>)" reads back as
  // "(R4A)", not "( R4A )".
  const withoutSpanTags = withoutIcon.replace(/<\/?span\b[^>]*>/g, '')
  return plainTextOf(withoutSpanTags)
}

/** Where a redirect stub's meta-refresh actually sends a reader. */
export function extractStubTarget(html) {
  const match = html.match(/<meta http-equiv="refresh" content="0; url=([^"]+)"/)
  return match ? match[1] : null
}

/** The single `<nav class="site-nav">…</nav>` region, or null. */
function siteNavRegion(html) {
  const start = html.indexOf('<nav class="site-nav"')
  if (start < 0) return null
  const end = html.indexOf('</nav>', start)
  return end < 0 ? null : html.slice(start, end)
}

/**
 * Every `<a href="...">…</a>` in a region, with its visible text.
 *
 * A regex over the site's own generated markup, same trade-off
 * check-links.mjs already makes. An anchor containing a nested `<a>` (never
 * valid HTML, would not occur in this build) is skipped rather than
 * mismatched.
 */
export function extractAnchors(html) {
  const anchors = []
  const pattern = /<a\s[^>]*\bhref="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g
  let match
  while ((match = pattern.exec(html)) !== null) {
    const [, href, inner] = match
    if (/<a\s/.test(inner)) continue
    anchors.push({ href, text: navTextOf(inner) })
  }
  return anchors
}

const EXTERNAL = /^([a-z][a-z0-9+.-]*:|\/\/)/i

/** Site-relative href, with any query/fragment and basePath stripped. */
function normalizeHref(raw) {
  const url = raw.trim()
  if (!url || url.startsWith('#') || EXTERNAL.test(url) || url.startsWith('data:')) return null
  let p = url.split(/[?#]/)[0]
  if (BASE_PATH && p.startsWith(BASE_PATH)) p = p.slice(BASE_PATH.length) || '/'
  if (!p.startsWith('/')) return null
  return p
}

function resolve(url, stubTargets) {
  const seen = new Set()
  let current = url
  while (stubTargets.has(current) && !seen.has(current)) {
    seen.add(current)
    if (seen.size > 5) break
    current = stubTargets.get(current)
  }
  return current
}

/**
 * A nav/breadcrumb link's text is wrapped in known, fixed decoration — the
 * mode-group aggregation labels rail nests its systems under, and the
 * "Open …"/"All … index" framing a truncated or subgrouped panel uses (see
 * SiteNav.tsx's NavGroupView). Both are structural chrome, not a claim that
 * the link's own href IS a page titled that exact phrase — a "Metro and
 * light rail" bucket has no page of its own; it points at `/rail/`, and that
 * is correct, not a mismatch.
 */
const MODE_GROUP_LABELS = new Set([
  'metro and light rail',
  'conventional and high speed rail',
  'heritage and special railways',
])

function isStructuralLabel(text) {
  const stripped = text
    .replace(/\s*→\s*$/, '')
    .replace(/^(open|all)\s+/i, '')
    .replace(/\s+index$/i, '')
    .trim()
    .toLowerCase()
  return MODE_GROUP_LABELS.has(stripped)
}

export function auditNavLabels(files, outRoot = OUT) {
  const titleOf = new Map() // url -> title
  const stubTargets = new Map() // url -> url

  for (const file of files) {
    const html = fs.readFileSync(file, 'utf8')
    const url = urlOf(file, outRoot)
    if (isRedirectStub(html)) {
      const target = extractStubTarget(html)
      if (target) {
        let t = target
        if (BASE_PATH && t.startsWith(BASE_PATH)) t = t.slice(BASE_PATH.length) || '/'
        stubTargets.set(url, t)
      }
      continue
    }
    const title = extractPageTitle(html)
    if (title) titleOf.set(url, title)
  }

  const findings = []
  for (const file of files) {
    const html = fs.readFileSync(file, 'utf8')
    if (isRedirectStub(html)) continue
    const sourceUrl = urlOf(file, outRoot)

    for (const region of [siteNavRegion(html)]) {
      if (!region) continue

      for (const { href, text } of extractAnchors(region)) {
        if (!text || isStructuralLabel(text)) continue

        const target = normalizeHref(href)
        if (!target) continue

        const landsOn = resolve(target, stubTargets)
        const targetTitle = titleOf.get(landsOn)
        if (targetTitle === undefined) continue // lands on a page this pass never visited — check-links already covers 404s

        // "Open lines index →" / "All stations →" style framing around a
        // group's own title; strip it before comparing to the target's h1.
        const bare = text
          .replace(/\s*→\s*$/, '')
          .replace(/^(open|all)\s+/i, '')
          .replace(/\s+index$/i, '')
          .trim()
          .toLowerCase()

        /*
         * Containment, not equality. A section's own type groups are
         * deliberately terser in the dropdown than the page they lead to —
         * "Routes" in the Bus panel for a page titled "Bus routes", because
         * the panel is already inside "Bus ▾" and repeating the section name
         * on every entry would be noise; the page's own h1 has to stand on
         * its own when reached directly (search, a shared link), so it keeps
         * the full name. A real "wrong destination" bug — the nav's actual
         * failure mode — does not produce a target title that happens to
         * contain the nav label as a substring; it produces an unrelated
         * one, which containment still catches.
         */
        if (!targetTitle.toLowerCase().includes(bare)) {
          findings.push({ file: sourceUrl, text, href, landsOn, targetTitle })
        }
      }
    }
  }
  return findings
}

/* ------------------------------------------------------------------ */

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  if (!fs.existsSync(OUT)) {
    console.error('nav-labels: out/ does not exist — run npm run build first.')
    process.exit(1)
  }
  const files = walk(OUT)
  const findings = auditNavLabels(files)

  if (process.argv.includes('--json')) {
    console.log(JSON.stringify(findings, null, 2))
  } else if (findings.length === 0) {
    console.log(`nav-labels: clean (${files.length} pages — every dropdown-nav link lands on the page it names).`)
  } else {
    console.log(`nav-labels: ${findings.length} dropdown-nav link(s) whose text names a page they do not lead to:\n`)
    for (const f of findings) {
      console.log(`  ✗ ${f.file}: "${f.text}" → ${f.href} (lands on ${f.landsOn}, titled "${f.targetTitle}")`)
    }
  }
  process.exit(findings.length === 0 ? 0 : 1)
}
