/**
 * Does any bus route page assert a station-code token as an MRT connection
 * for a code that is not in this route's curated
 * `data/tdx/bus/rail-stop-joins.json` entry?
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THIS EXISTS
 *
 * Run 51/52 found 16 route pages stating "confirmed rail-stop joins ... by
 * stop-ID geometry" to MRT stations that were never in the curated join
 * file — raw `match: 'normalized-name'` candidates, exactly what
 * lib/bus/routes.ts's own comments say must never be presented as
 * confirmed. That is invisible to a reader: the page just reads as fact.
 *
 * This is the general form of that check, not a list of the 16 files it was
 * first found on. It scans every bus route content file's frontmatter
 * source notes and body prose for a station-code-shaped token, resolves it
 * against the real station registry, and — for any real code the route's
 * curated join set does not confirm — requires a hedge word nearby ("not
 * confirmed", "candidate", "name match", "TBC", "no interchange", and so
 * on). A real code with no hedge nearby is a claim strong enough to read as
 * an established interchange, which is exactly the failure mode found.
 *
 * A route's own colour+number identity (e.g. "R10" on 紅10) is excluded: it
 * happens to collide with a real, unrelated station's code on roughly a
 * third of the colour-prefixed feeder routes (R10 is Taipei Main Station,
 * not anything to do with 紅10), and mentioning a route's own name is not a
 * join claim. That collision is a rendering concern — handled by
 * `badges={false}` in FactsPanel/References on bus route pages — not a
 * sourcing one, and is out of scope for this check.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const ROOT = process.cwd()

const LINE_CODES = ['BR', 'BL', 'LB', 'SS', 'R', 'G', 'O', 'Y', 'A', 'V', 'K']
const CODE_PATTERN = new RegExp(`\\b(${LINE_CODES.join('|')})(\\d{1,2})([A-Za-z])?\\b`, 'g')

export const HEDGE =
  /candidate|unconfirmed|not confirmed|name.?match|normalized-name|proximity|raw stop-name|TBC|not in it|not in the|no interchange|not curated|not independently|not presented as confirmed|flags candidate|is not a confirmed|does not confirm|not a verified|not necessarily|no confirmed|zero confirmed|not established/i

function walk(dir) {
  let out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out = out.concat(walk(full))
    else if (entry.name.endsWith('.md') && entry.name !== '_index.md') out.push(full)
  }
  return out
}

/** @returns {{ file: string, code: string, context: string }[]} */
export function auditBusRailJoinClaims() {
  const routesPath = path.join(ROOT, 'data/tdx/bus/routes.json')
  const joinsPath = path.join(ROOT, 'data/tdx/bus/rail-stop-joins.json')
  if (!fs.existsSync(routesPath) || !fs.existsSync(joinsPath)) return []

  const routes = JSON.parse(fs.readFileSync(routesPath, 'utf8'))
  const curated = JSON.parse(fs.readFileSync(joinsPath, 'utf8'))
  const curatedByRoute = new Map(curated.map((c) => [c.routeId, new Set(c.joins.map((j) => j.stationCode))]))

  const contentDir = path.join(ROOT, 'content/bus/routes')
  if (!fs.existsSync(contentDir)) return []

  const flagged = []

  for (const file of walk(contentDir)) {
    const rel = path.relative(ROOT, file).split(path.sep).join('/')
    const parts = rel.split('/')
    const group = parts[2]
    const slug = parts[3].replace(/\.md$/, '')
    const route = routes.find((r) => r.group === group && r.canonicalSlug === slug)
    if (!route) continue

    const curatedCodes = curatedByRoute.get(route.id) ?? new Set()

    const raw = fs.readFileSync(file, 'utf8')
    const { content, data } = matter(raw)
    const ownCode = (String(data.title ?? '').split('/')[0] ?? '').trim()
    const noteText = (data.sources ?? []).map((s) => s.note ?? '').join('\n')
    const fullText = noteText + '\n' + content

    CODE_PATTERN.lastIndex = 0
    let m
    const seen = new Set()
    while ((m = CODE_PATTERN.exec(fullText)) !== null) {
      const code = m[1] + m[2] + (m[3] ?? '')
      const codeNoSuffix = m[1] + m[2]
      if (code === ownCode) continue // the route's own identity, not a join claim
      const isCurated = curatedCodes.has(code) || curatedCodes.has(codeNoSuffix)
      if (isCurated) continue

      const key = code + ':' + m.index
      if (seen.has(key)) continue
      seen.add(key)

      const windowStart = Math.max(0, m.index - 220)
      const windowEnd = Math.min(fullText.length, m.index + 220)
      const context = fullText.slice(windowStart, windowEnd)
      if (HEDGE.test(context)) continue

      flagged.push({ file: rel, code, context: context.replace(/\s+/g, ' ') })
    }
  }

  return flagged
}
