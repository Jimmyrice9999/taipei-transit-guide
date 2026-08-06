/**
 * The entity report: what links, and what has nothing to link to.
 *
 * Run:  npm run entities
 *
 * Two outputs, both generated rather than maintained:
 *
 *   The audit    How many entity links the auto-linker added to each page —
 *                the measurable answer to "did the linking pass do anything".
 *
 *   The backlog  Names in prose that look like entities — X Line, X Depot,
 *                X Metro/LRT/Station, fleet designations, and short Han runs
 *                ending 線/機廠 — that resolve to no page. That list IS the
 *                content backlog: every entry is a page the prose already
 *                wants to link to. Written to docs/entity-backlog.json so the
 *                diff shows the backlog shrinking (or growing) over time.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
// @ts-expect-error — plain .mjs module, deliberately untyped
import { contentFiles, readContent } from './citations.mjs'
import { getAllPages, getPage, getLinkEntities } from '../lib/content.ts'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const REPORT = path.join(ROOT, 'docs', 'entity-backlog.json')

/** Prose only: no frontmatter (readContent strips it), code, links' targets. */
function proseOf(body: string): string {
  return body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/\]\([^)]*\)/g, ']')
    .replace(/^#{1,6}\s.*$/gm, ' ')
}

const ASCII_ENTITY =
  /(?<![\w–-])((?:[A-Z][A-Za-z'’]+|[A-Z]{2,})(?:[ –-](?:[A-Z][A-Za-z'’]+|[A-Z]{2,}))*[ ](?:Line|Depot|Metro|LRT|Station|Sanatorium))(?![\w])/g
const FLEET = /(?<![\w])(C3\d1|C370|VAL\d{3})(?![\w])/g
const HAN_ENTITY = /[㐀-鿿]{1,5}(?:線|機廠)/g

function main() {
  const entities = getLinkEntities()
  const known = new Set(entities.map((e) => e.name))
  // Names that would resolve once matched — including the pages themselves,
  // so "Wenhu Line" on its own page does not count as backlog.
  for (const page of getAllPages()) known.add(page.title)

  const backlog = new Map<string, { mentions: number; files: Set<string> }>()

  for (const file of contentFiles()) {
    const { relative, body } = readContent(file)
    const prose = proseOf(body)

    for (const pattern of [ASCII_ENTITY, FLEET, HAN_ENTITY]) {
      pattern.lastIndex = 0
      for (const match of prose.matchAll(pattern)) {
        let name = (match[1] ?? match[0]).replace(/^The\s+/, '')
        if (known.has(name)) continue
        // The Han pattern is greedy leftward — 雖名為內湖機廠 contains the
        // known 內湖機廠. A candidate whose suffix is a known name resolved.
        if ([...known].some((k) => /[㐀-鿿]/.test(k) && name.endsWith(k))) continue
        // Generic railway vocabulary, not entities.
        if (/^(路線|支線|全線|沿線|本線|幹線|動線|各線)$/.test(name)) continue
        const entry = backlog.get(name) ?? { mentions: 0, files: new Set<string>() }
        entry.mentions++
        entry.files.add(relative)
        backlog.set(name, entry)
      }
    }
  }

  const sorted = [...backlog.entries()].sort((a, b) => b[1].mentions - a[1].mentions)

  console.log('entities: link audit (auto-links added per page)\n')
  ;(async () => {
    let total = 0
    const audit: { page: string; links: number; to: string[] }[] = []
    for (const meta of getAllPages()) {
      const page = await getPage(meta.section, meta.type, meta.slug)
      total += page.autoLinks.length
      audit.push({
        page: meta.href,
        links: page.autoLinks.length,
        to: page.autoLinks.map((l) => l.name),
      })
      console.log(
        `  ${String(page.autoLinks.length).padStart(3)}  ${meta.href}` +
          (page.autoLinks.length
            ? `  → ${page.autoLinks
                .slice(0, 6)
                .map((l) => l.name)
                .join(', ')}${page.autoLinks.length > 6 ? ', …' : ''}`
            : ''),
      )
    }
    console.log(`\n  ${total} entity links added by the auto-linker site-wide.`)

    console.log('\nentities: backlog — names with no page to link to\n')
    for (const [name, entry] of sorted) {
      console.log(
        `  ${String(entry.mentions).padStart(3)}×  ${name}  (${[...entry.files].join(', ')})`,
      )
    }
    if (sorted.length === 0) console.log('  (none — every entity-shaped name resolves)')

    fs.writeFileSync(
      REPORT,
      JSON.stringify(
        {
          generated: 'npm run entities',
          note: 'Names in prose that resolve to no page. This list is the content backlog.',
          autoLinksTotal: total,
          audit,
          backlog: sorted.map(([name, entry]) => ({
            name,
            mentions: entry.mentions,
            files: [...entry.files],
          })),
        },
        null,
        2,
      ) + '\n',
    )
    console.log(`\nentities: wrote ${path.relative(ROOT, REPORT).replace(/\\/g, '/')}`)
  })()
}

main()
