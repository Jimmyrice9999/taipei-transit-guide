/**
 * Every named entity on the site, against the link registry.
 *
 *   npm run links
 *
 * Answers one question: **which pages name something the site has a page for,
 * and do not link to it?**
 *
 * The site has three separate linking mechanisms — `rehypeAutoLink` for prose,
 * `RichText link` for frontmatter values, and hand-written `<Link>`s in the
 * page components — and each covers a different part of the output. Nothing
 * knew what the three of them together had missed. This walks the built HTML,
 * which is the only place that question can be answered, and reports the gap.
 *
 * What it does NOT do is fail the build. An unlinked mention is often correct:
 * a heading should not link, a page must not link to itself, and a name inside
 * an existing link cannot be linked again. The output is a work list, and the
 * counts at the end are the thing to watch across runs.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { isRedirectStub } from './redirect-stub.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'out')

if (!fs.existsSync(OUT)) {
  console.error('No out/ directory. Run `npm run build` first.')
  process.exit(2)
}

const { getLinkEntities } = await import(new URL('../lib/content.ts', import.meta.url).href)

/** Every built page, as a path relative to out/. */
function pages() {
  const found = []
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) walk(full)
      // Redirect stubs are meta-refresh shims, not pages — they carry no links
      // of their own and must not be crawled as if they did. See
      // scripts/redirect-stub.mjs for why the marker is in the file.
      else if (entry.name === 'index.html' && !isRedirectStub(fs.readFileSync(full, 'utf8')))
        found.push(full)
    }
  }
  walk(OUT)
  return found.sort()
}

/**
 * Strip everything a mention could legitimately sit inside and not be linked.
 *
 *   <a>…</a>       already a link — including one pointing somewhere else,
 *                  because a name inside another link cannot be linked
 *   <h1>…</h1>     headings are deliberately skipped by the prose linker
 *   <title>, <script>, <style>, <head>  not body text at all
 *   comments       React renders separators as <!-- --> inside text
 *
 * What remains is text that could carry a link and does not.
 */
function linkableText(html) {
  return html
    .replace(/<head[\s\S]*?<\/head>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    /*
     * `sr-only` spans are screen-reader labels duplicating something already
     * on the page — the marker-rail spine emits one per stop, "R05 Daan".
     * They are not prose, they are not visible, and a link inside one would
     * be unreachable by every reader who can see. Left in, they were the
     * single largest source of noise in this report.
     */
    .replace(/<span class="sr-only"[\s\S]*?<\/span>/gi, ' ')
    .replace(/<a\b[\s\S]*?<\/a>/gi, ' ')
    .replace(/<h[1-6]\b[\s\S]*?<\/h[1-6]>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
}

/** Which hrefs a page already links to, so a second mention is not counted. */
function linkedHrefs(html) {
  const set = new Set()
  for (const m of html.matchAll(/<a\b[^>]*href="([^"]+)"/gi)) {
    set.add(m[1].replace(/^\/taipei-transit-guide/, ''))
  }
  return set
}

const entities = getLinkEntities()

/*
 * One entry per destination, carrying every name that reaches it. Reporting by
 * destination rather than by name stops the same missing link being counted
 * three times because a page has three aliases.
 */
const byHref = new Map()
for (const entity of entities) {
  if (!byHref.has(entity.href)) byHref.set(entity.href, new Set())
  byHref.get(entity.href).add(entity.name)
}

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const isHan = (s) => /[⺀-鿿豈-﫿]/.test(s)

/*
 * ── Ambiguous names, and a real bug they exposed ─────────────────────────────
 *
 * Station names are NOT unique across the network. "Daan" is BR09 on the Wenhu
 * Line and R05 on the Tamsui–Xinyi Line; "Nanjing Fuxing", "Zhongxiao Fuxing",
 * "Songshan Airport" and a dozen others are the same. Only Wenhu has station
 * pages, so the registry holds exactly one "Daan" — BR09 — and any occurrence
 * of the word anywhere resolves to it.
 *
 * This audit was reporting those as missing links. They are not: linking the
 * word "Daan" in a sentence about R05 to the BR09 page would be wrong, not
 * merely absent.
 *
 * **The same flaw is in the auto-linker**, which shares this registry — see
 * `getLinkEntities` in lib/content.ts. Its blast radius is smaller because it
 * links first mention only, but it is the same mistake and it is recorded at
 * the end of this report rather than silently filtered.
 *
 * Names of one or two characters go too: "A" is the Airport MRT's alias and
 * matches the indefinite article.
 */
const nameCounts = new Map()
for (const entity of entities) {
  nameCounts.set(entity.name, (nameCounts.get(entity.name) ?? 0) + 1)
}
const stationNameCounts = new Map()
for (const station of (await import(new URL('../lib/stations.ts', import.meta.url).href)).STATIONS) {
  for (const name of [station.name, station.nameZh].filter(Boolean)) {
    stationNameCounts.set(name, (stationNameCounts.get(name) ?? 0) + 1)
  }
}
const ambiguous = new Set(
  [...stationNameCounts.entries()].filter(([, n]) => n > 1).map(([name]) => name),
)

const candidates = [...byHref.entries()]
  .map(([href, names]) => ({
    href,
    names: [...names].filter((n) => n.length > 2 && !ambiguous.has(n)),
  }))
  .filter((c) => c.names.length > 0)

const findings = []
const perDestination = new Map()

for (const file of pages()) {
  const url = '/' + path.relative(OUT, path.dirname(file)).split(path.sep).join('/') + '/'
  const normalised = url === '//' ? '/' : url
  const html = fs.readFileSync(file, 'utf8')
  const text = linkableText(html)
  const already = linkedHrefs(html)

  for (const { href, names } of candidates) {
    if (href === normalised) continue // a page never links to itself
    if (already.has(href)) continue // already linked somewhere on this page
    const hit = names.find((name) => {
      const pattern = isHan(name)
        ? new RegExp(escape(name))
        : new RegExp(`\\b${escape(name)}\\b`)
      return pattern.test(text)
    })
    if (!hit) continue
    findings.push({ page: normalised, name: hit, href })
    perDestination.set(href, (perDestination.get(href) ?? 0) + 1)
  }
}

/* ------------------------------------------------------------------ */

const total = pages().length
console.log(`\nlinks-audit: ${total} pages, ${candidates.length} linkable destinations\n`)

if (findings.length === 0) {
  console.log('  ✓ every named entity that could link, does')
} else {
  console.log(`  ${findings.length} unlinked mention(s), by destination:\n`)
  const ranked = [...perDestination.entries()].sort((a, b) => b[1] - a[1])
  for (const [href, count] of ranked) {
    const examples = findings
      .filter((f) => f.href === href)
      .slice(0, 4)
      .map((f) => `${f.page} ("${f.name}")`)
    console.log(`  ${String(count).padStart(4)} × ${href}`)
    for (const example of examples) console.log(`         ${example}`)
    if (count > 4) console.log(`         … and ${count - 4} more`)
  }
}

if (ambiguous.size) {
  console.log(
    `\n  ${ambiguous.size} station name(s) are shared by more than one line and are` +
      `\n  excluded from this audit — linking them would be wrong, not merely absent.` +
      `\n  The auto-linker shares this registry and does NOT exclude them:` +
      `\n    ${[...ambiguous].slice(0, 12).join(', ')}${ambiguous.size > 12 ? ', …' : ''}`,
  )
}

fs.writeFileSync(
  path.join(ROOT, 'docs', 'links-audit.json'),
  JSON.stringify(
    { pages: total, destinations: candidates.length, ambiguous: [...ambiguous], findings },
    null,
    2,
  ) + '\n',
)
console.log(`\nFull list → docs/links-audit.json\n`)
