/*
 * Generate the conflict index from the content corpus.
 *
 * A disagreement belongs to the page that publishes it. This script finds
 * those sections, carries their existing citation markers into a namespaced
 * source block, and writes one ordinary content page. The build runs in check
 * mode, so adding a conflict to a content page without regenerating the index
 * fails rather than silently leaving the index stale.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const CONTENT = path.join(ROOT, 'content')
const OUT = path.join(CONTENT, 'ticketing', 'guides', 'conflicts-index.md')
const CHECK = process.argv.includes('--check')

const HEADING = /^(#{2,6})\s+(.+?)\s*$/gm
const MARKER = /\[\^([a-z0-9][a-z0-9-]*)\]/g
const HEADING_SIGNAL = /conflict|dispute|disagreement/i
const BODY_SIGNAL =
  /(?:sources?\s+(?:disagree|conflict)|source\s+conflict|conflicting\s+(?:published|source)|published\s+as\s+(?:a\s+)?(?:conflict|disagreement)|(?:direct|primary)\s+conflict|contradict(?:s|ed|ion)?|different\s+(?:source|record|figure|measure|value|date|identity))/i

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return walk(full)
    if (!entry.isFile() || !entry.name.endsWith('.md') || entry.name.startsWith('_')) return []
    return full === OUT ? [] : [full]
  })
}

function pageHref(file) {
  const relative = path.relative(CONTENT, file).replaceAll(path.sep, '/')
  return `/${relative.replace(/\.md$/, '')}/`
}

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\p{Letter}\p{Number}\s-]/gu, '')
    .replace(/[\s-]+/g, '-')
}

function yaml(value) {
  return JSON.stringify(value == null ? '' : String(value))
}

function sourceBlock(source) {
  const fields = [
    ['id', source.id],
    ['title', source.title],
    ['titleOriginal', source.titleOriginal],
    ['publisher', source.publisher],
    ['url', source.url],
    ['accessed', source.accessed],
    ['kind', source.kind],
    ['lang', source.lang],
    ['note', source.note],
  ]
  const lines = ['  - id: ' + yaml(fields[0][1])]
  for (const [key, value] of fields.slice(1)) lines.push(`    ${key}: ${yaml(value)}`)
  return lines.join('\n')
}

function sourceMap(data) {
  return new Map(
    (Array.isArray(data.sources) ? data.sources : []).map((source) => [
      source.id,
      {
        ...source,
        accessed:
          source.accessed instanceof Date
            ? source.accessed.toISOString().slice(0, 10)
            : String(source.accessed ?? ''),
      },
    ]),
  )
}

function sections(body) {
  const headings = []
  for (const match of body.matchAll(HEADING)) {
    headings.push({
      start: match.index,
      level: match[1].length,
      title: match[2].trim(),
      end: body.length,
    })
  }
  for (let i = 0; i < headings.length; i++) {
    for (let j = i + 1; j < headings.length; j++) {
      if (headings[j].level <= headings[i].level) {
        headings[i].end = headings[j].start
        break
      }
    }
  }
  return headings
    .map((heading) => ({ ...heading, text: body.slice(heading.start, heading.end).trim() }))
    .filter(({ title, text }) => HEADING_SIGNAL.test(title) || BODY_SIGNAL.test(text))
}

function collect() {
  const entries = []
  const sources = []

  for (const file of walk(CONTENT)) {
    const parsed = matter(fs.readFileSync(file, 'utf8'))
    const pageSources = sourceMap(parsed.data)
    const found = sections(parsed.content)
    if (found.length === 0) continue

    const relativeSlug = path.relative(CONTENT, file).replaceAll(path.sep, '/').replace(/\.md$/, '')
    const prefix = relativeSlug.replaceAll('/', '-').replace(/[^a-z0-9-]/gi, '-').toLowerCase()
    const pageTitle = String(parsed.data.title || path.basename(file, '.md'))
    const href = pageHref(file)

    for (const foundSection of found) {
      const originalIds = [...foundSection.text.matchAll(MARKER)].map((match) => match[1])
      const ids = [...new Set(originalIds)]
      const missing = ids.filter((id) => !pageSources.has(id))
      if (missing.length > 0) {
        throw new Error(`${file}: conflict section cites missing source(s): ${missing.join(', ')}`)
      }

      // A few older pages put the source in a fact or source note and then
      // discuss the disagreement in prose without repeating the marker. Keep
      // those entries traceable when the source note explicitly names the
      // disagreement; otherwise the section is deliberately not promoted.
      if (ids.length === 0) {
        const fallback = [...pageSources.values()].find((source) =>
          /conflict|disagree|contradict|unresolved/i.test(String(source.note)),
        )
        if (fallback) {
          ids.push(fallback.id)
          foundSection.text += `[^${fallback.id}]`
        }
      }
      if (ids.length === 0) continue

      const namespaced = new Map(ids.map((id) => [id, `${prefix}-${id}`]))
      let content = foundSection.text.replace(MARKER, (_, id) => `[^${namespaced.get(id) ?? id}]`)
      content = content.replace(/^#{2,6}\s+(.+)$/m, '### $1')

      const entrySources = ids.map((id) => {
        const original = pageSources.get(id)
        const copy = { ...original, id: namespaced.get(id) }
        sources.push(copy)
        return copy
      })

      const sourceList = entrySources
        .map(
          (source) =>
            `- [${source.title}](${source.url}) — ${source.kind}; ${source.publisher}; ` +
            `accessed ${source.accessed}.[^${source.id}]`,
        )
        .join('\n')

      entries.push(
        `## ${pageTitle} — ${foundSection.title}\n\n` +
          `Discussed on [${pageTitle}](${href}) in the source page's “${foundSection.title}” section.[^${entrySources[0].id}]\n\n` +
          `${content}\n\n` +
          `#### Sources for this entry\n\n${sourceList}`,
      )
    }
  }

  return { entries, sources }
}

function render() {
  const { entries, sources } = collect()
  const unique = new Map(sources.map((source) => [source.id, source]))
  const frontmatter = [
    '---',
    'title: "Conflict index"',
    'summary: "Every source disagreement published by this guide, generated from the conflict sections in its content corpus."',
    'updated: 2026-08-24',
    'sources:',
    ...[...unique.values()].map(sourceBlock),
    '---',
    '',
    '<!-- Generated by scripts/generate-conflicts-index.mjs. Do not edit this file by hand. -->',
    '',
    entries.join('\n\n'),
    '',
  ]
  return frontmatter.join('\n')
}

const output = render()
if (CHECK) {
  const current = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : ''
  if (current !== output) {
    console.error('conflicts: generated index is stale; run npm run conflicts')
    process.exitCode = 1
  } else {
    console.log('conflicts: generated index is current.')
  }
} else {
  fs.writeFileSync(OUT, output)
  console.log(`conflicts: wrote ${path.relative(ROOT, OUT)} from ${output.match(/^## /gm)?.length ?? 0} records.`)
}
