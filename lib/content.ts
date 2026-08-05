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
  rehypeRichText,
  rehypeTableScroll,
  type BadgeWarning,
} from './markdown-plugins.ts'

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

/** A key/value row in a page's "Quick facts" table. */
export type Fact = { label: string; value: string }

/** A section (Train, Bus) or a page type within it (Lines, Depots…). */
export type Folder = {
  slug: string
  title: string
  description: string
  order: number
  href: string
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
}

export type Page = PageMeta & { html: string }

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
          return { label: toText(r.label), value: toText(r.value) }
        }
        const [label, val] = Object.entries(row ?? {})[0] ?? []
        return { label: toText(label), value: toText(val) }
      })
      .filter((f) => f.label)
  }
  if (typeof value === 'object') {
    return Object.entries(value as Record<string, unknown>).map(([label, val]) => ({
      label,
      value: toText(val),
    }))
  }
  return []
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
  }
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

function readPageMeta(section: string, type: string, slug: string): PageMeta {
  const file = path.join(CONTENT_DIR, section, type, `${slug}.md`)
  const { data } = matter(fs.readFileSync(file, 'utf8'))
  return {
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
  }
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

  const html = await unified()
    .use(remarkParse) // Markdown text -> syntax tree
    .use(remarkGfm) // adds tables, strikethrough, task lists
    .use(remarkRehype) // Markdown tree -> HTML tree
    .use(rehypeSlug) // give every heading an id, so headings are linkable
    // station code badges + <span lang="zh-Hant"> around Chinese, one pass
    .use(rehypeRichText, { file: relative, onWarning: reportBadgeWarning })
    .use(rehypeTableScroll) // let wide tables scroll instead of the page
    .use(rehypeBasePath, BASE_PATH) // fix internal links for subpath hosting
    .use(rehypeStringify) // HTML tree -> HTML string
    .process(content)

  return { ...readPageMeta(section, type, slug), html: String(html) }
}
