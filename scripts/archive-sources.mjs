/**
 * Archives the site's cited sources, two services deep.
 *
 * Run:  npm run archive            report + capture what is missing
 *       npm run archive -- --dry   report only
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * Decision 2, run 6.1: one archive is a single point of failure, and the 民報
 * rot proved the failure mode mid-run rather than in theory. So every cited
 * source should carry a Wayback capture (`snapshot:`), and sources whose
 * origin blocks Wayback's crawler — the `.gov.taipei` / `metro.taipei` CMS
 * pages return HTTP 523 to Save Page Now — should carry an archive.today
 * capture as well (`snapshotAlt:`).
 *
 * This script reads every `sources:` block, finds what is missing, attempts
 * the captures with polite pacing, and prints paste-ready YAML lines. It does
 * NOT edit content files: an archive URL lands in frontmatter through the
 * same review as any other citation field.
 *
 * Both services rate-limit aggressively (Wayback 429s bursts; archive.today
 * 429s most automation). A run that reports "still refused" has still done
 * its job — run it again another day. That is what "keep retrying
 * occasionally" looks like as a command.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { contentFiles, readContent, sourcesOf } from './citations.mjs'

const UA = 'TaipeiTransitGuide/1.0 (independent reference site; source archiver)'
const DRY = process.argv.includes('--dry')

/** Origins Wayback's crawler cannot reach — these want the second archive. */
const WAYBACK_BLOCKED = /^https:\/\/www\.(dorts\.gov\.taipei|metro\.taipei)\//

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function waybackNewest(url) {
  const cdx =
    'http://web.archive.org/cdx/search/cdx?url=' +
    encodeURIComponent(url) +
    '&limit=-1&fl=timestamp&filter=statuscode:200'
  const response = await fetch(cdx, { headers: { 'User-Agent': UA } })
  if (!response.ok) return null
  const stamp = (await response.text()).trim().split('\n').pop()
  return /^\d{14}$/.test(stamp) ? `https://web.archive.org/web/${stamp}/${url}` : null
}

async function waybackSave(url) {
  const response = await fetch(`https://web.archive.org/save/${url}`, {
    headers: { 'User-Agent': UA },
    redirect: 'manual',
  })
  const location = response.headers.get('content-location') ?? response.headers.get('location')
  if (location?.startsWith('/web/')) return `https://web.archive.org${location}`
  if (location?.includes('web.archive.org/web/')) return location
  return { refused: response.status }
}

async function archiveTodayNewest(url) {
  const response = await fetch(`https://archive.is/newest/${url}`, {
    headers: { 'User-Agent': UA },
    redirect: 'follow',
  })
  const final = response.url ?? ''
  if (response.ok && /archive\.(is|ph|today|md|li)\/[A-Za-z0-9]+$/.test(final)) return final
  return { refused: response.status }
}

async function archiveTodaySubmit(url) {
  const response = await fetch('https://archive.is/submit/', {
    method: 'POST',
    headers: { 'User-Agent': UA, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `url=${encodeURIComponent(url)}`,
    redirect: 'manual',
  })
  const location = response.headers.get('location')
  if (location && /archive\./.test(location) && !/submit/.test(location)) return location
  return { refused: response.status }
}

/* ---- gather ---------------------------------------------------------- */

const byUrl = new Map()
for (const file of contentFiles()) {
  const { relative, data } = readContent(file)
  for (const source of sourcesOf(data)) {
    if (!source.url) continue
    const entry = byUrl.get(source.url) ?? {
      snapshot: '',
      snapshotAlt: '',
      files: new Set(),
      id: source.id,
    }
    entry.snapshot ||= source.snapshot
    entry.snapshotAlt ||= source.snapshotAlt
    entry.files.add(relative)
    byUrl.set(source.url, entry)
  }
}

const needSnapshot = [...byUrl.entries()].filter(([, e]) => !e.snapshot)
const needAlt = [...byUrl.entries()].filter(
  ([url, e]) => WAYBACK_BLOCKED.test(url) && !e.snapshotAlt,
)

console.log(
  `archive: ${byUrl.size} distinct cited URLs — ` +
    `${needSnapshot.length} without a Wayback snapshot, ` +
    `${needAlt.length} blocked-origin URLs without an archive.today mirror`,
)

if (DRY || (needSnapshot.length === 0 && needAlt.length === 0)) {
  for (const [url, e] of [...needSnapshot, ...needAlt]) {
    console.log(`  wanted: ${e.id}  ${url}`)
  }
  process.exit(0)
}

/* ---- capture --------------------------------------------------------- */

const results = []

for (const [url, entry] of needSnapshot) {
  await sleep(8000)
  let capture = await waybackSave(url)
  if (capture?.refused) {
    await sleep(5000)
    capture = await waybackNewest(url)
  }
  if (typeof capture === 'string') {
    results.push({ id: entry.id, field: 'snapshot', url: capture, files: entry.files })
    console.log(`  ✓ snapshot     ${entry.id} → ${capture}`)
  } else {
    console.log(`  ✗ snapshot     ${entry.id} — Wayback refused (try again another day)`)
  }
}

for (const [url, entry] of needAlt) {
  await sleep(20000)
  let capture = await archiveTodayNewest(url)
  if (capture?.refused) {
    await sleep(30000)
    capture = await archiveTodaySubmit(url)
    if (typeof capture === 'string') {
      // A submit redirect can point at a work-in-progress page; re-resolve.
      await sleep(60000)
      const settled = await archiveTodayNewest(url)
      if (typeof settled === 'string') capture = settled
    }
  }
  if (typeof capture === 'string') {
    results.push({ id: entry.id, field: 'snapshotAlt', url: capture, files: entry.files })
    console.log(`  ✓ snapshotAlt  ${entry.id} → ${capture}`)
  } else {
    console.log(
      `  ✗ snapshotAlt  ${entry.id} — archive.today refused (HTTP ${capture.refused}); ` +
        'it rate-limits automation hard. Run again later, or capture once by hand at archive.today.',
    )
  }
}

if (results.length) {
  console.log('\nPaste-ready (add under the matching source id in each file):\n')
  for (const r of results) {
    console.log(`  # ${r.id} — in ${[...r.files].join(', ')}`)
    console.log(`    ${r.field}: ${r.url}\n`)
  }
}
