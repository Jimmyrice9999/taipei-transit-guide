/**
 * Walks the exported site and reports every internal link that does not resolve.
 *
 * Runs against `out/`, not against the source. That is the point: a link can be
 * correct in Markdown and still 404 once basePath rewriting, trailing slashes
 * and static export have had their turn. Only the built output tells the truth.
 *
 * What counts as a link: href and src on any element, plus srcset candidates.
 * External URLs (scheme or protocol-relative), mailto/tel, and pure fragments
 * are skipped. Everything else must resolve to a file in `out/`.
 *
 *   node scripts/check-links.mjs            check ./out
 *   node scripts/check-links.mjs --json     machine-readable, for the test suite
 *
 * Exits non-zero when anything is broken, so it works as a test and as a hook.
 */

import fs from 'node:fs'
import path from 'node:path'

const OUT = path.join(process.cwd(), 'out')
const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/+$/, '')

/* ------------------------------------------------------------------ */

function walk(dir, found = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, found)
    else found.push(full)
  }
  return found
}

/** Every path the built site can actually serve, as site-absolute URLs. */
function servableSet(files) {
  const set = new Set()
  for (const file of files) {
    const rel = '/' + path.relative(OUT, file).split(path.sep).join('/')
    set.add(rel)
    // A folder-with-index.html is served at the folder URL, with and without
    // the trailing slash — static hosts redirect one to the other.
    if (rel.endsWith('/index.html')) {
      const dir = rel.slice(0, -'index.html'.length)
      set.add(dir)
      set.add(dir.replace(/\/$/, '') || '/')
    }
  }
  return set
}

/**
 * Pull href/src/srcset out of HTML.
 *
 * A regex rather than a parser, deliberately: the input is our own generated
 * markup, and adding an HTML parser to check links would be a dependency bought
 * for one script. It over-matches at worst, which surfaces as a reported link
 * that turns out to be fine — a cheap failure mode.
 */
function extractLinks(html) {
  const links = []
  const attr = /\s(href|src)\s*=\s*("([^"]*)"|'([^']*)')/gi
  let match
  while ((match = attr.exec(html)) !== null) {
    links.push(match[3] ?? match[4] ?? '')
  }
  const srcset = /\ssrcset\s*=\s*"([^"]*)"/gi
  while ((match = srcset.exec(html)) !== null) {
    for (const candidate of match[1].split(',')) {
      const url = candidate.trim().split(/\s+/)[0]
      if (url) links.push(url)
    }
  }
  return links
}

const EXTERNAL = /^([a-z][a-z0-9+.-]*:|\/\/)/i

function classify(raw) {
  const url = raw.trim()
  if (!url) return null
  if (url.startsWith('#')) return null
  if (EXTERNAL.test(url)) return null
  if (url.startsWith('data:')) return null
  return url
}

/* ------------------------------------------------------------------ */

const json = process.argv.includes('--json')

if (!fs.existsSync(OUT)) {
  console.error('No out/ directory. Run `npm run build` first.')
  process.exit(2)
}

const files = walk(OUT)
const servable = servableSet(files)
const htmlFiles = files.filter((f) => f.endsWith('.html'))

/** Fragment targets available in each page, so #anchor links can be checked. */
function idsIn(html) {
  const ids = new Set()
  const re = /\sid\s*=\s*("([^"]*)"|'([^']*)')/gi
  let m
  while ((m = re.exec(html)) !== null) ids.add(m[2] ?? m[3] ?? '')
  const named = /\sname\s*=\s*("([^"]*)"|'([^']*)')/gi
  while ((m = named.exec(html)) !== null) ids.add(m[2] ?? m[3] ?? '')
  return ids
}

const idsByPage = new Map()
for (const file of htmlFiles) {
  const rel = '/' + path.relative(OUT, file).split(path.sep).join('/')
  idsByPage.set(rel, idsIn(fs.readFileSync(file, 'utf8')))
}

const broken = []
const brokenFragments = []
/** Every internal target that at least one page links to. */
const linkedTo = new Set()
let checked = 0

for (const file of htmlFiles) {
  const rel = '/' + path.relative(OUT, file).split(path.sep).join('/')
  const pageUrl = rel.endsWith('/index.html') ? rel.slice(0, -'index.html'.length) : rel
  const html = fs.readFileSync(file, 'utf8')

  for (const raw of extractLinks(html)) {
    const url = classify(raw)
    if (url === null) continue
    checked++

    const [pathPartRaw, fragment] = url.split('#')
    let pathPart = pathPartRaw.split('?')[0]

    // Resolve relative to the page it appeared on.
    if (!pathPart.startsWith('/')) {
      pathPart = path.posix.normalize(path.posix.join(path.posix.dirname(pageUrl), pathPart))
    }

    // Strip the deployment prefix before looking the file up on disk.
    let lookup = pathPart
    if (BASE_PATH && lookup.startsWith(BASE_PATH)) lookup = lookup.slice(BASE_PATH.length) || '/'

    if (pathPart === '' && fragment) {
      // A pure fragment after splitting: same page.
      lookup = pageUrl
    }

    const candidates = [
      lookup,
      lookup.endsWith('/') ? lookup + 'index.html' : lookup + '/index.html',
    ]
    const hit = candidates.find((c) => servable.has(c))

    if (!hit) {
      broken.push({ from: pageUrl, href: raw })
      continue
    }

    linkedTo.add(lookup.endsWith('/') ? lookup : lookup + '/')
    linkedTo.add(lookup)

    if (fragment) {
      const target = candidates.find((c) => idsByPage.has(c)) ?? hit
      const ids = idsByPage.get(target)
      if (ids && !ids.has(fragment)) {
        brokenFragments.push({ from: pageUrl, href: raw, fragment })
      }
    }
  }
}

/* Orphans: a built page nothing links to. --------------------------- */

const pageUrls = htmlFiles
  .map((f) => '/' + path.relative(OUT, f).split(path.sep).join('/'))
  .filter((r) => r.endsWith('/index.html'))
  .map((r) => r.slice(0, -'index.html'.length))

// The root and the 404 are reachable by definition, not by link.
const EXEMPT = new Set(['/', '/404/', '/_not-found/'])
const orphans = pageUrls.filter((u) => !EXEMPT.has(u) && !linkedTo.has(u))

/* ------------------------------------------------------------------ */

const report = { checked, pages: htmlFiles.length, broken, brokenFragments, orphans }

if (json) {
  console.log(JSON.stringify(report, null, 2))
} else {
  console.log(`Checked ${checked} internal links across ${htmlFiles.length} pages.`)
  console.log('')

  if (broken.length === 0) console.log('  ✓ no broken links')
  else {
    console.log(`  ✗ ${broken.length} broken link(s):`)
    for (const b of broken) console.log(`      ${b.from}  →  ${b.href}`)
  }

  if (brokenFragments.length === 0) console.log('  ✓ every #fragment resolves')
  else {
    console.log(`  ✗ ${brokenFragments.length} dangling fragment(s):`)
    for (const b of brokenFragments) console.log(`      ${b.from}  →  ${b.href}`)
  }

  if (orphans.length === 0) console.log('  ✓ no orphan pages')
  else {
    console.log(`  ! ${orphans.length} orphan page(s) — reachable only by typing the URL:`)
    for (const o of orphans) console.log(`      ${o}`)
  }
}

// Orphans are a warning, not a failure: /404/ and friends legitimately have no
// inbound links, and the judgement of what should be linked is editorial.
process.exit(broken.length + brokenFragments.length > 0 ? 1 : 0)
