/**
 * Reads the /content folder and turns it into pages.
 *
 * The folder layout IS the site structure. A file at
 *   content/train/lines/wenhu-line.md
 * becomes the page
 *   /train/lines/wenhu-line/
 *
 * Three levels, always:
 *   content/<section>/<type>/<page>.md
 *   e.g.    train  /  lines /  wenhu-line.md
 *
 * A file named `_index.md` inside a folder is not a page. It describes the
 * folder itself — its display name, blurb, and sort order in the nav.
 *
 * This file only ever runs at build time (Node's `fs` is not available in the
 * browser), which is exactly what a static site needs.
 */

import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import {
  rehypeBasePath,
  rehypeCitations,
  rehypeFigures,
  rehypeRichText,
  rehypeSafeLinks,
  rehypeSectionStations,
  rehypeTableScroll,
  type BadgeWarning,
} from './markdown-plugins.ts'
import { numberSources, validateSource, type NumberedSource, type Source } from './sources.ts'
import { getImageSize } from './image-size.ts'
import { LINES, getLine } from './lines.ts'
import { getStation } from './stations.ts'

const CONTENT_DIR = path.join(process.cwd(), 'content')

/** Prefix for GitHub Pages subpath hosting; empty when served from the root. */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

/**
 * Station codes that failed validation, deduplicated so a code repeated down a
 * table warns once. Next builds pages across several worker processes, so this
 * set is per-worker — good enough to stop the same warning repeating hundreds of
 * times, and every distinct problem is still reported.
 */
const reportedBadges = new Set<string>()

function reportBadgeWarning({ file, code, reason }: BadgeWarning) {
  const key = `${file}::${code}`
  if (reportedBadges.has(key)) return
  reportedBadges.add(key)

  const cause =
    reason === 'typo'
      ? `"${code}" is not a station on that line — most likely a typo.`
      : `no station data for that line yet. Add its stations to lib/stations.ts.`

  console.warn(
    `  ⚠ unknown station code "${code}" in ${file}\n` +
      `    ${cause}\n` +
      `    Rendered as plain text, not a badge. If it is not a station code, wrap it in \`backticks\`.`,
  )
}

/**
 * A key/value row in a page's "Quick facts" table.
 *
 * `source` names an id from the page's `sources:` block. Its absence is not
 * neutral — it is what `npm run claims` counts as an assertion resting on
 * nobody's authority.
 */
export type Fact = { label: string; value: string; source: string }

/** A section (Train, Bus) or a page type within it (Lines, Depots…). */
export type Folder = {
  slug: string
  title: string
  description: string
  order: number
  href: string
  /**
   * `planned` means the folder is deliberately empty, not neglected.
   *
   * An empty section renders as "No pages yet." three times over, which reads
   * as a site that was abandoned halfway. Declaring scope explicitly reads as a
   * site that knows what it does not cover — and that is the same discipline
   * this project already applies to individual figures with TBC, applied to
   * breadth instead of depth.
   */
  status: 'planned' | ''
}

/** Everything about a page except its rendered body. */
export type PageMeta = {
  section: string
  type: string
  slug: string
  href: string
  title: string
  summary: string
  order: number
  stub: boolean
  updated: string
  facts: Fact[]
  /**
   * Line code from frontmatter (`line: BR`). Sets the page's accent colour.
   * Empty means the page falls back to the site neutral.
   */
  line: string
  /**
   * Which stretch of the line this page is about, for the spine.
   * A range (`BR01-BR12`), points (`BR01, BR19`), or empty for the whole line.
   */
  spine: string
  /** Engineering data, rendered as a spec table rather than the facts panel. */
  specs: Spec[]
  /** Train formation in the notation described in the README, e.g. `Mc1=M2 + M2=Mc1`. */
  formation: string
  /** Lead photograph, or a description of the one that is wanted. */
  hero: Hero | null
  /** Everything this page cites, in the order it is numbered on the page. */
  sources: Source[]
}

/** One row of the technical specification table. */
export type Spec = { label: string; value: string; unit: string; source: string }

/**
 * A page's lead photograph.
 *
 * `wanted` describes what should be shot where there is no image yet, so the
 * placeholder says something useful instead of just marking a hole.
 */
export type Hero = {
  src: string
  alt: string
  caption: string
  credit: string
  wanted: string
}

export type Page = PageMeta & {
  html: string
  /** Station codes mentioned by each `##` section, keyed by heading id. */
  sectionStations: Record<string, string[]>
  /** The page's sources with their numbers, and whether anything cites them. */
  references: NumberedSource[]
}

/* ------------------------------------------------------------------ */
/* Small helpers                                                       */
/* ------------------------------------------------------------------ */

function readDirSafe(dir: string): fs.Dirent[] {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir, { withFileTypes: true })
}

/** "wenhu-line" -> "Wenhu Line" (a fallback when no title is given). */
function titleFromSlug(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/** Frontmatter values arrive as strings, numbers, dates or lists. Flatten them. */
function toText(value: unknown): string {
  if (value == null) return ''
  if (Array.isArray(value)) return value.map(toText).filter(Boolean).join(', ')
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  return String(value)
}

/**
 * Accepts either of these frontmatter shapes and normalises both:
 *
 *   facts:
 *     - label: Opened
 *       value: 28 March 1996
 *
 *   facts:
 *     Opened: 28 March 1996
 */
function toFacts(value: unknown): Fact[] {
  if (!value) return []
  if (Array.isArray(value)) {
    return value
      .map((row) => {
        if (row && typeof row === 'object' && 'label' in row) {
          const r = row as Record<string, unknown>
          return { label: toText(r.label), value: toText(r.value), source: toText(r.source) }
        }
        const [label, val] = Object.entries(row ?? {})[0] ?? []
        return { label: toText(label), value: toText(val), source: '' }
      })
      .filter((f) => f.label)
  }
  if (typeof value === 'object') {
    return Object.entries(value as Record<string, unknown>).map(([label, val]) => ({
      label,
      value: toText(val),
      source: '',
    }))
  }
  return []
}

/**
 * Normalises the `sources:` frontmatter block.
 *
 *   sources:
 *     - id: dorts-wenhu
 *       title: Wenshan–Neihu Line
 *       titleOriginal: 文山內湖線
 *       publisher: Taipei City Government, Department of Rapid Transit Systems
 *       url: https://www.dorts.gov.taipei/cp.aspx?n=DBAC040496EFAB94
 *       accessed: 2026-08-06
 *       kind: primary
 *       lang: zh-Hant
 */
function toSources(value: unknown): Source[] {
  if (!Array.isArray(value)) return []
  return value
    .map((row) => {
      const r = (row ?? {}) as Record<string, unknown>
      return {
        id: toText(r.id),
        title: toText(r.title),
        titleOriginal: toText(r.titleOriginal),
        publisher: toText(r.publisher),
        url: toText(r.url),
        accessed: toText(r.accessed),
        snapshot: toText(r.snapshot),
        kind: toText(r.kind) as Source['kind'],
        lang: toText(r.lang),
        note: toText(r.note),
      }
    })
    .filter((s) => s.id || s.title || s.url)
}

/**
 * Normalises the `specs:` frontmatter block.
 *
 *   specs:
 *     - label: Car width
 *       value: 2.56
 *       unit: m
 *
 * Kept separate from `facts:` on purpose: facts identify the subject and live in
 * the platform panel, specs are measurements and are set as engineering data in
 * the main column. Splitting `unit` out of `value` is what lets the table
 * right-align the numbers and set the units in a lighter weight.
 */
function toSpecs(value: unknown): Spec[] {
  if (!Array.isArray(value)) return []
  return value
    .map((row) => {
      const r = (row ?? {}) as Record<string, unknown>
      return {
        label: toText(r.label),
        value: toText(r.value),
        unit: toText(r.unit),
        source: toText(r.source),
      }
    })
    .filter((s) => s.label)
}

/**
 * Normalises the `hero:` frontmatter block.
 *
 *   hero:
 *     src: /images/wenhu-guideway.jpg
 *     alt: The guideway climbing above Wenshan District
 *     caption: Looking north from BR03.
 *     credit: Photo by …
 *     wanted: A train on the elevated guideway, taken from street level.
 *
 * `wanted` alone is valid and is the normal case before any photography exists:
 * it renders a labelled placeholder rather than nothing, so the gap is visible.
 */
function toHero(value: unknown): Hero | null {
  if (!value || typeof value !== 'object') return null
  const h = value as Record<string, unknown>
  const hero = {
    src: toText(h.src),
    alt: toText(h.alt),
    caption: toText(h.caption),
    credit: toText(h.credit),
    wanted: toText(h.wanted),
  }
  return hero.src || hero.wanted ? hero : null
}

/** Sort by explicit `order`, then alphabetically. */
function byOrderThenTitle(a: { order: number; title: string }, b: { order: number; title: string }) {
  if (a.order !== b.order) return a.order - b.order
  return a.title.localeCompare(b.title)
}

/* ------------------------------------------------------------------ */
/* Folders (sections and page types)                                   */
/* ------------------------------------------------------------------ */

function readFolder(parents: string[], slug: string): Folder {
  const indexPath = path.join(CONTENT_DIR, ...parents, slug, '_index.md')
  let data: Record<string, unknown> = {}
  if (fs.existsSync(indexPath)) {
    data = matter(fs.readFileSync(indexPath, 'utf8')).data as Record<string, unknown>
  }
  return {
    slug,
    title: toText(data.title) || titleFromSlug(slug),
    description: toText(data.description),
    order: typeof data.order === 'number' ? data.order : 999,
    href: '/' + [...parents, slug].join('/') + '/',
    status: toText(data.status) === 'planned' ? 'planned' : '',
  }
}

/**
 * The prose body of an `_index.md`, rendered.
 *
 * Folder frontmatter used to be read for its fields and the body thrown away,
 * so there was nowhere to explain a folder — only a one-line `description`.
 * That is exactly what an empty section needs: room to say what it will cover
 * and why it does not yet.
 *
 * Kept separate from `readFolder` because that one is synchronous and runs in
 * the layout on every page to build the nav; this is only wanted on the two
 * index routes.
 */
export async function getFolderBody(parents: string[], slug: string): Promise<string> {
  const indexPath = path.join(CONTENT_DIR, ...parents, slug, '_index.md')
  if (!fs.existsSync(indexPath)) return ''

  const { content } = matter(fs.readFileSync(indexPath, 'utf8'))
  if (!content.trim()) return ''

  const relative = `content/${[...parents, slug].join('/')}/_index.md`

  const html = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeRichText, { file: relative, onWarning: reportBadgeWarning })
    .use(rehypeTableScroll)
    .use(rehypeSafeLinks, {
      onWarning: (message: string) => console.warn(`  ⚠ ${relative}: ${message}`),
    })
    .use(rehypeBasePath, BASE_PATH)
    .use(rehypeStringify)
    .process(content)

  return String(html)
}

function listFolders(parents: string[]): Folder[] {
  return readDirSafe(path.join(CONTENT_DIR, ...parents))
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith('_'))
    .map((entry) => readFolder(parents, entry.name))
    .sort(byOrderThenTitle)
}

/** Top-level sections: Train, Bus. Drives the main nav. */
export function getSections(): Folder[] {
  return listFolders([])
}

export function getSection(section: string): Folder {
  return readFolder([], section)
}

/** Page types inside a section: Lines, Rolling Stock, Depots. */
export function getTypes(section: string): Folder[] {
  return listFolders([section])
}

export function getType(section: string, type: string): Folder {
  return readFolder([section], type)
}

/* ------------------------------------------------------------------ */
/* Pages                                                               */
/* ------------------------------------------------------------------ */

/**
 * Frontmatter problems already reported, so a page read many times per build
 * across several workers complains once per worker rather than once per read.
 */
const reportedFrontmatter = new Set<string>()

function warnOnce(key: string, message: string) {
  if (reportedFrontmatter.has(key)) return
  reportedFrontmatter.add(key)
  console.warn(message)
}

/**
 * Checks the frontmatter fields that silently degrade when mistyped.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * The badge system's selling point is that a wrong station code is *reported* —
 * writing a station list proofreads it. That guarantee stopped at the page
 * body. Two frontmatter fields had no such check, and both fail invisibly:
 *
 *   line: ZZ            falls back to neutral grey, so the page simply looks
 *                       like a site page instead of a Wenhu page, with nothing
 *                       said. `getAccent` is built to fall back silently, which
 *                       is right for "no line set" and wrong for "typo".
 *   spine: BR97-BR99    resolves to an empty set, so the strip map marks
 *                       nothing and reports "serves 0 of 24 stations".
 *
 * Both were found by writing the typo deliberately and watching the build stay
 * quiet. Neither fails the build — a bad accent colour is not worth refusing to
 * deploy over — but neither is silent any more.
 * ─────────────────────────────────────────────────────────────────────────────
 */
function validateFrontmatter(relative: string, meta: PageMeta) {
  if (meta.line && !getLine(meta.line)) {
    warnOnce(
      `${relative}::line`,
      `  ⚠ unknown line code "${meta.line}" in ${relative}\n` +
        `    Not one of ${LINES.map((l) => l.code).join(', ')}. The page will render in the\n` +
        `    neutral accent as though no line were set.`,
    )
  }

  if (meta.spine.trim()) {
    if (!meta.line) {
      warnOnce(
        `${relative}::spine-no-line`,
        `  ⚠ spine: "${meta.spine}" in ${relative} but no line: is set\n` +
          `    A spine range is resolved against a line, so this marks nothing.`,
      )
    } else {
      const unknown = meta.spine
        .split(',')
        .flatMap((part) => part.split(/[-–—]/))
        .map((code) => code.trim())
        .filter(Boolean)
        .filter((code) => !getStation(code))

      if (unknown.length) {
        warnOnce(
          `${relative}::spine`,
          `  ⚠ spine: "${meta.spine}" in ${relative} references unknown station(s): ${unknown.join(', ')}\n` +
            `    The strip map will mark nothing for this page.`,
        )
      }
    }
  }

  /*
   * Sources are validated here rather than only in `npm run cite`, because a
   * malformed entry renders as a plausible-looking reference — an entry with no
   * URL, or with no primary/secondary marking, reads as a citation while being
   * unfollowable or unweighable. The script is the gate; this is the warning
   * you see while writing the page.
   */
  const seen = new Set<string>()
  for (const source of meta.sources) {
    for (const problem of validateSource(source)) {
      warnOnce(
        `${relative}::source::${problem.id}::${problem.field}`,
        `  ⚠ ${relative}: source "${problem.id}" — ${problem.field}: ${problem.message}`,
      )
    }
    if (source.id && seen.has(source.id)) {
      warnOnce(
        `${relative}::source-dup::${source.id}`,
        `  ⚠ ${relative}: duplicate source id "${source.id}" — [^${source.id}] would be ambiguous.`,
      )
    }
    seen.add(source.id)
  }

  for (const row of [...meta.facts, ...meta.specs]) {
    if (row.source && !seen.has(row.source)) {
      warnOnce(
        `${relative}::row-source::${row.label}`,
        `  ⚠ ${relative}: "${row.label}" cites source "${row.source}", which is not in sources:.`,
      )
    }
  }
}

function readPageMeta(section: string, type: string, slug: string): PageMeta {
  const file = path.join(CONTENT_DIR, section, type, `${slug}.md`)

  /*
   * gray-matter throws on malformed YAML with a message that does not say
   * which file it was reading — across 46 pages that is a scavenger hunt.
   */
  let data: Record<string, unknown>
  try {
    data = matter(fs.readFileSync(file, 'utf8')).data as Record<string, unknown>
  } catch (error) {
    throw new Error(
      `Could not parse frontmatter in content/${section}/${type}/${slug}.md — ` +
        `${error instanceof Error ? error.message : String(error)}`,
      { cause: error },
    )
  }

  const meta: PageMeta = {
    section,
    type,
    slug,
    href: `/${section}/${type}/${slug}/`,
    title: toText(data.title) || titleFromSlug(slug),
    summary: toText(data.summary),
    order: typeof data.order === 'number' ? data.order : 999,
    stub: data.stub === true,
    updated: toText(data.updated),
    facts: toFacts(data.facts),
    line: toText(data.line).toUpperCase(),
    spine: toText(data.spine),
    specs: toSpecs(data.specs),
    formation: toText(data.formation),
    hero: toHero(data.hero),
    sources: toSources(data.sources),
  }

  validateFrontmatter(`content/${section}/${type}/${slug}.md`, meta)
  return meta
}

/** Every page inside one type folder, e.g. all Train > Lines pages. */
export function getPages(section: string, type: string): PageMeta[] {
  return readDirSafe(path.join(CONTENT_DIR, section, type))
    .filter((e) => e.isFile() && e.name.endsWith('.md') && !e.name.startsWith('_'))
    .map((e) => readPageMeta(section, type, e.name.replace(/\.md$/, '')))
    .sort(byOrderThenTitle)
}

/** Every page on the site. Used to tell Next which pages to generate. */
export function getAllPages(): PageMeta[] {
  return getSections().flatMap((section) =>
    getTypes(section.slug).flatMap((type) => getPages(section.slug, type.slug)),
  )
}

/** One page, with its Markdown body converted to HTML. */
export async function getPage(section: string, type: string, slug: string): Promise<Page> {
  const file = path.join(CONTENT_DIR, section, type, `${slug}.md`)
  const { content } = matter(fs.readFileSync(file, 'utf8'))

  const relative = `content/${section}/${type}/${slug}.md`
  const sectionStations: Record<string, string[]> = {}
  const meta = readPageMeta(section, type, slug)

  /*
   * Ids cited anywhere on the page. Seeded from the facts and specs blocks
   * before the prose runs, so a source used only by a spec row still counts as
   * cited and does not get reported as dead weight.
   */
  const used = new Set(
    [...meta.facts, ...meta.specs].map((row) => row.source).filter(Boolean),
  )

  const html = await unified()
    .use(remarkParse) // Markdown text -> syntax tree
    .use(remarkGfm) // adds tables, strikethrough, task lists
    .use(remarkRehype) // Markdown tree -> HTML tree
    .use(rehypeSlug) // give every heading an id, so headings are linkable
    // station code badges + <span lang="zh-Hant"> around Chinese, one pass
    .use(rehypeRichText, { file: relative, onWarning: reportBadgeWarning })
    // After rehypeRichText: a marker is plain ASCII and survives that pass
    // untouched, but running first would let a `[^br01-thing]` id be eaten by
    // the station-code tokenizer.
    .use(rehypeCitations, {
      sources: meta.sources,
      used,
      onWarning: (message: string) => console.warn(`  ⚠ ${relative}: ${message}`),
    })
    .use(rehypeSectionStations, { into: sectionStations }) // for the spine
    .use(rehypeFigures, { getSize: getImageSize }) // captions, credits, real dimensions
    .use(rehypeTableScroll) // let wide tables scroll instead of the page
    // Before rehypeBasePath, so a blocked href is gone before anything tries
    // to prefix it.
    .use(rehypeSafeLinks, {
      onWarning: (message: string) => console.warn(`  ⚠ ${relative}: ${message}`),
    })
    .use(rehypeBasePath, BASE_PATH) // fix internal links for subpath hosting
    .use(rehypeStringify) // HTML tree -> HTML string
    .process(content)

  for (const source of meta.sources) {
    if (!used.has(source.id)) {
      warnOnce(
        `${relative}::unused::${source.id}`,
        `  ⚠ ${relative}: source "${source.id}" is listed but nothing cites it.\n` +
          `    Either cite it with [^${source.id}] (or source: ${source.id} on a fact) or remove it.`,
      )
    }
  }

  return {
    ...meta,
    html: String(html),
    sectionStations,
    references: numberSources(meta.sources, used),
  }
}

/**
 * Every source on the site, deduplicated by URL, with the pages citing each.
 *
 * Deduplicated by URL rather than by id because ids are per page and two pages
 * may reasonably give the same document different slugs. The URL is the thing
 * that is actually the same document.
 */
export async function getAllSources(): Promise<
  { source: Source; pages: { title: string; href: string }[] }[]
> {
  const byUrl = new Map<string, { source: Source; pages: { title: string; href: string }[] }>()

  for (const meta of getAllPages()) {
    const page = await getPage(meta.section, meta.type, meta.slug)
    for (const reference of page.references) {
      if (!reference.cited) continue
      const key = reference.url || reference.id
      const entry = byUrl.get(key) ?? { source: reference, pages: [] }
      entry.pages.push({ title: page.title, href: page.href })
      // Keep whichever entry carries the most detail, so one page's terse
      // record does not hide another's fuller one.
      if ((reference.note + reference.titleOriginal).length >
          (entry.source.note + entry.source.titleOriginal).length) {
        entry.source = reference
      }
      // A snapshot recorded on any page survives the merge, whichever entry
      // won on detail — losing the archive link to a terser note would be
      // exactly the rot the field exists to prevent.
      if (!entry.source.snapshot && reference.snapshot) {
        entry.source = { ...entry.source, snapshot: reference.snapshot }
      }
      byUrl.set(key, entry)
    }
  }

  return [...byUrl.values()].sort((a, b) => {
    if (a.source.kind !== b.source.kind) return a.source.kind === 'primary' ? -1 : 1
    return a.source.title.localeCompare(b.source.title)
  })
}
