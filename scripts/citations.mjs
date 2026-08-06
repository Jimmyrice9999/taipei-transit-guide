/**
 * Checks that every citation on the site actually cites something.
 *
 * Run:  npm run cite
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * What it enforces, and why each one is a hard failure rather than a warning:
 *
 *   marker with no entry      A sentence that looks sourced and is not. This is
 *                             the exact failure the whole mechanism exists to
 *                             prevent, so it cannot be advisory.
 *   malformed entry           An entry with no URL, or with no primary/secondary
 *                             marking, renders as a citation while being
 *                             unfollowable or unweighable.
 *   duplicate id on a page    `[^x]` would silently pick one of two.
 *   a GFM footnote definition Writing `[^x]: something` in a body makes remark
 *                             claim every marker in that file and turn it into
 *                             its own footnote system, so ours would vanish
 *                             from that page without an error anywhere.
 *
 * And one warning, not a failure:
 *
 *   unused entry              Dead weight in the references list. Worth telling
 *                             you about; not worth refusing to deploy over.
 *
 * Reads the Markdown directly rather than the built output, so it runs without
 * a build and reports file and line rather than a URL.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const CONTENT = path.join(ROOT, 'content')

/** Kept in step with lib/sources.ts. Duplicated because this is a plain .mjs
 *  script and importing a .ts module here would mean a build step to lint. */
const MARKER = /\[\^([a-z0-9][a-z0-9-]*)\]/g
const DEFINITION = /^\s{0,3}\[\^([a-z0-9][a-z0-9-]*)\]:/
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/
const KINDS = new Set(['primary', 'secondary'])

/** Every `.md` under content/, including the folder `_index.md` files. */
export function contentFiles(dir = CONTENT, found = []) {
  if (!fs.existsSync(dir)) return found
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) contentFiles(full, found)
    else if (entry.name.endsWith('.md')) found.push(full)
  }
  return found
}

/** Frontmatter, body and a relative path, for one content file. */
export function readContent(file) {
  const raw = fs.readFileSync(file, 'utf8')
  let data
  let content
  try {
    // gray-matter's error does not say which file it was reading, and across a
    // dozen content files that is a scavenger hunt. Same fix as lib/content.ts.
    ;({ data, content } = matter(raw))
  } catch (error) {
    const where = path.relative(ROOT, file).split(path.sep).join('/')
    const first = error instanceof Error ? error.message.split('\n')[0] : String(error)
    throw new Error(`Could not parse frontmatter in ${where} — ${first}`, { cause: error })
  }
  return {
    file,
    relative: path.relative(ROOT, file).replace(/\\/g, '/'),
    data,
    body: content,
    /** Line number of the first line of the body within the whole file. */
    bodyOffset: raw.slice(0, raw.length - content.length).split('\n').length - 1,
  }
}

/** Rows from `facts:` and `specs:`, normalised the way lib/content.ts does. */
export function rowsOf(data) {
  const rows = []
  for (const key of ['facts', 'specs']) {
    const block = data[key]
    if (!Array.isArray(block)) continue
    for (const row of block) {
      if (!row || typeof row !== 'object') continue
      rows.push({
        block: key,
        label: String(row.label ?? ''),
        value: row.value === undefined || row.value === null ? '' : String(row.value),
        unit: row.unit === undefined || row.unit === null ? '' : String(row.unit),
        source: String(row.source ?? ''),
      })
    }
  }
  return rows.filter((r) => r.label)
}

export function sourcesOf(data) {
  if (!Array.isArray(data.sources)) return []
  return data.sources
    .filter((s) => s && typeof s === 'object')
    .map((s) => ({
      id: String(s.id ?? ''),
      title: String(s.title ?? ''),
      titleOriginal: String(s.titleOriginal ?? ''),
      publisher: String(s.publisher ?? ''),
      url: String(s.url ?? ''),
      accessed: s.accessed instanceof Date ? s.accessed.toISOString().slice(0, 10) : String(s.accessed ?? ''),
      snapshot: String(s.snapshot ?? ''),
      kind: String(s.kind ?? ''),
      lang: String(s.lang ?? ''),
      note: String(s.note ?? ''),
    }))
}

function validate(source) {
  const problems = []
  if (!source.id) problems.push('no id')
  else if (!/^[a-z0-9][a-z0-9-]*$/.test(source.id))
    problems.push(`id "${source.id}" must be lowercase letters, digits and hyphens`)
  if (!source.title) problems.push('no title')
  if (!source.publisher) problems.push('no author or publisher')
  if (!source.url) problems.push('no URL — an unfollowable citation is not one')
  else if (!/^https?:\/\//i.test(source.url)) problems.push(`url "${source.url}" is not http(s)`)
  if (!source.accessed) problems.push('no accessed date')
  else if (!ISO_DATE.test(source.accessed)) problems.push(`accessed "${source.accessed}" is not YYYY-MM-DD`)
  if (source.snapshot && !/^https?:\/\//i.test(source.snapshot))
    problems.push(`snapshot "${source.snapshot}" is not an http(s) URL`)
  if (!KINDS.has(source.kind))
    problems.push(`kind "${source.kind || '(missing)'}" must be primary or secondary`)
  if (source.titleOriginal && !source.lang) problems.push('titleOriginal without a lang tag')
  return problems
}

/**
 * The whole check, as data, so `npm run claims` and the test suite can reuse it
 * rather than re-implementing the parsing and drifting.
 */
export function auditCitations() {
  const errors = []
  const warnings = []
  const pages = []

  for (const file of contentFiles()) {
    const { relative, data, body, bodyOffset } = readContent(file)
    const sources = sourcesOf(data)
    const rows = rowsOf(data)

    const byId = new Map()
    for (const source of sources) {
      if (source.id && byId.has(source.id)) {
        errors.push(`${relative}: duplicate source id "${source.id}" — [^${source.id}] is ambiguous`)
      }
      byId.set(source.id, source)
      for (const problem of validate(source)) {
        errors.push(`${relative}: source "${source.id || '(no id)'}" — ${problem}`)
      }
    }

    const used = new Set()

    // A GFM footnote definition anywhere in the body hijacks every marker in
    // the file, so it is rejected before the markers are even read.
    body.split('\n').forEach((line, index) => {
      const definition = DEFINITION.exec(line)
      if (definition) {
        errors.push(
          `${relative}:${bodyOffset + index + 1}: "[^${definition[1]}]:" is a GFM footnote ` +
            `definition. It would take over every citation marker in this file. ` +
            `Sources belong in the frontmatter sources: block.`,
        )
      }

      // Markers inside `backticks` are documentation of the syntax, not uses of
      // it — the same opt-out the station badges use.
      const scannable = line.replace(/`[^`]*`/g, '')
      let match
      MARKER.lastIndex = 0
      while ((match = MARKER.exec(scannable)) !== null) {
        used.add(match[1])
        if (!byId.has(match[1])) {
          errors.push(
            `${relative}:${bodyOffset + index + 1}: [^${match[1]}] does not match any entry in sources:`,
          )
        }
      }
    })

    for (const row of rows) {
      if (!row.source) continue
      used.add(row.source)
      if (!byId.has(row.source)) {
        errors.push(
          `${relative}: ${row.block} "${row.label}" cites source "${row.source}", which is not in sources:`,
        )
      }
    }

    for (const source of sources) {
      if (source.id && !used.has(source.id)) {
        warnings.push(
          `${relative}: source "${source.id}" is listed but nothing cites it — cite it or remove it`,
        )
      }
    }

    pages.push({
      relative,
      sources,
      used,
      primary: sources.filter((s) => s.kind === 'primary' && used.has(s.id)).length,
      secondary: sources.filter((s) => s.kind === 'secondary' && used.has(s.id)).length,
    })
  }

  return { errors, warnings, pages }
}

/* ------------------------------------------------------------------ */

function main() {
  const { errors, warnings, pages } = auditCitations()

  const withSources = pages.filter((p) => p.sources.length > 0)
  const totalPrimary = withSources.reduce((n, p) => n + p.primary, 0)
  const totalSecondary = withSources.reduce((n, p) => n + p.secondary, 0)

  console.log(`citations: ${pages.length} content files, ${withSources.length} with a sources: block`)
  console.log(
    `  ${totalPrimary + totalSecondary} citations resolved — ` +
      `${totalPrimary} to primary sources, ${totalSecondary} to secondary`,
  )

  for (const page of withSources) {
    console.log(
      `  ${page.relative.padEnd(48)} ${String(page.used.size).padStart(2)} cited ` +
        `(${page.primary} primary, ${page.secondary} secondary)`,
    )
  }

  for (const warning of warnings) console.warn(`  ⚠ ${warning}`)
  for (const error of errors) console.error(`  ✗ ${error}`)

  if (errors.length) {
    console.error(`\ncitations: ${errors.length} error(s). A citation that resolves to nothing is worse than none.`)
    process.exit(1)
  }

  console.log(
    warnings.length
      ? `\ncitations: no errors, ${warnings.length} unused entr${warnings.length === 1 ? 'y' : 'ies'}.`
      : '\ncitations: clean.',
  )
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  main()
}
