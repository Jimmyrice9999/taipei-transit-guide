/**
 * The rehype plugins that turn plain Markdown into the site's house style.
 *
 * None of them require you to write any markup in a Markdown file — a page is
 * prose and a table, and the build applies the styling consistently.
 */

import { CATALOGUED_LINES, getStation } from './stations.ts'
import { getLine } from './lines.ts'
import { isPlain, tokenize } from './text-tokens.ts'
import { CITE_MARKER_PATTERN, type Source } from './sources.ts'

/* eslint-disable @typescript-eslint/no-explicit-any */
type Node = any

/** Elements whose text is left completely alone. */
const OPAQUE = new Set(['code', 'pre', 'script', 'style'])

/**
 * Walk every text node, letting `transform` replace it with a list of nodes.
 * Skips anything inside OPAQUE elements — that is how backticks work as an
 * opt-out: `BR01` in a Markdown file stays literal text.
 */
function transformText(tree: Node, transform: (value: string) => Node[] | null) {
  const walk = (node: Node) => {
    if (!node?.children) return
    if (node.type === 'element' && OPAQUE.has(node.tagName)) return

    const out: Node[] = []
    let changed = false

    for (const child of node.children) {
      if (child.type === 'text') {
        const replacement = transform(child.value)
        if (replacement) {
          out.push(...replacement)
          changed = true
          continue
        }
      }
      out.push(child)
      walk(child)
    }

    if (changed) node.children = out
  }
  walk(tree)
}

/* ------------------------------------------------------------------ */
/* Station badges and Chinese language tagging                         */
/* ------------------------------------------------------------------ */

export type BadgeWarning = {
  file: string
  code: string
  /** 'typo' when the line is catalogued, 'uncatalogued' when it is not. */
  reason: 'typo' | 'uncatalogued'
}

/**
 * Two transformations in one pass over the text.
 *
 * **Station codes** — any standalone BR01, R10, G14 becomes a coloured badge,
 * but only if it resolves to a real station in lib/stations.ts. Anything else is
 * left as plain text and reported, so a wrong code can never masquerade as a
 * station that exists. That makes writing a station list a proofread.
 *
 * **Chinese** — runs of Han are wrapped in `<span lang="zh-Hant">`. Without
 * this, a browser picks glyphs using the document language, which is English,
 * and on a system carrying only a Simplified Chinese font it renders Simplified
 * variants of shared codepoints. Those read as wrong to a Taiwanese reader.
 */
export function rehypeRichText({
  file,
  onWarning,
}: {
  file: string
  onWarning: (warning: BadgeWarning) => void
}) {
  return (tree: Node) => {
    transformText(tree, (value) => {
      const tokens = tokenize(value)
      if (isPlain(tokens)) return null

      const out: Node[] = []
      const pushText = (text: string) => {
        const previous = out[out.length - 1]
        // Merge with the previous text node so a rejected code rejoins its
        // sentence instead of fragmenting it.
        if (previous?.type === 'text') previous.value += text
        else out.push({ type: 'text', value: text })
      }

      for (const token of tokens) {
        if (token.kind === 'text') {
          pushText(token.value)
          continue
        }

        if (token.kind === 'han') {
          out.push({
            type: 'element',
            tagName: 'span',
            properties: { lang: 'zh-Hant' },
            children: [{ type: 'text', value: token.value }],
          })
          continue
        }

        const line = getLine(token.line)
        const station = getStation(token.value)

        if (!line || !station) {
          onWarning({
            file,
            code: token.value,
            reason: CATALOGUED_LINES.has(token.line.toUpperCase()) ? 'typo' : 'uncatalogued',
          })
          pushText(token.value)
          continue
        }

        out.push({
          type: 'element',
          tagName: 'span',
          properties: {
            className: ['badge'],
            style: `--badge-bg:${line.badgeBg};--badge-fg:${line.badgeFg}`,
            title: station ? `${token.value} ${station.name}` : token.value,
          },
          children: [{ type: 'text', value: token.value }],
        })
      }

      return out
    })
  }
}

/* ------------------------------------------------------------------ */
/* Citation markers                                                    */
/* ------------------------------------------------------------------ */

/**
 * Turns `[^dorts-wenhu]` in prose into a numbered superscript linking to the
 * page's references list.
 *
 * Runs on text nodes only and skips `<code>` — so a Markdown file can still
 * write a literal marker in backticks when documenting the syntax itself.
 *
 * An unresolved id is rendered as a visible `[?]` rather than dropped. A
 * citation that quietly disappears leaves a sourced-looking sentence with
 * nothing behind it, which is the exact failure this whole mechanism exists to
 * prevent. `npm run cite` fails the build on the same condition, so this
 * marker should never reach a reader — it is there so that if it ever does, it
 * is the loudest thing on the page rather than the quietest.
 */
export function rehypeCitations({
  sources,
  used,
  onWarning,
}: {
  sources: Source[]
  /** Ids actually cited, collected for the references list and the checker. */
  used: Set<string>
  onWarning?: (message: string) => void
}) {
  const numberOf = new Map(sources.map((source, index) => [source.id, index + 1]))

  return (tree: Node) => {
    transformText(tree, (value) => {
      CITE_MARKER_PATTERN.lastIndex = 0
      if (!CITE_MARKER_PATTERN.test(value)) return null
      CITE_MARKER_PATTERN.lastIndex = 0

      const out: Node[] = []
      let last = 0
      let match: RegExpExecArray | null

      while ((match = CITE_MARKER_PATTERN.exec(value)) !== null) {
        if (match.index > last) out.push({ type: 'text', value: value.slice(last, match.index) })
        last = match.index + match[0].length

        const id = match[1]
        const number = numberOf.get(id)

        if (number === undefined) {
          onWarning?.(
            `citation [^${id}] does not match any entry in this page's sources: block`,
          )
          out.push({
            type: 'element',
            tagName: 'sup',
            properties: { className: ['cite', 'cite-unresolved'], title: `Unknown source "${id}"` },
            children: [{ type: 'text', value: '[?]' }],
          })
          continue
        }

        used.add(id)
        out.push({
          type: 'element',
          tagName: 'sup',
          properties: { className: ['cite'] },
          children: [
            {
              type: 'element',
              tagName: 'a',
              properties: {
                href: `#ref-${number}`,
                // Not aria-label: the visible text is "[3]", and a label that
                // says something else makes voice control unable to address it.
                title: sources[number - 1].title,
              },
              children: [{ type: 'text', value: `[${number}]` }],
            },
          ],
        })
      }

      if (last < value.length) out.push({ type: 'text', value: value.slice(last) })
      return out
    })
  }
}

/* ------------------------------------------------------------------ */
/* Which stations each section talks about                             */
/* ------------------------------------------------------------------ */

/**
 * Records, per `##` section, the station codes that section actually mentions.
 *
 * This is what lets the spine highlight as you scroll without the highlight
 * being decoration. Mapping scroll depth onto the line would be a lie — reading
 * progress is not position on the line. Mapping "the section you are reading
 * mentions BR01 and BR19" onto "light BR01 and BR19" is simply true, and it
 * falls out of the Markdown for free.
 *
 * Must run AFTER rehypeRichText, which is what creates the badge elements.
 */
export function rehypeSectionStations({ into }: { into: Record<string, string[]> }) {
  return (tree: Node) => {
    let current: string | null = null

    const collect = (node: Node, sink: Set<string>) => {
      if (node?.type === 'element' && node.properties?.className?.includes?.('badge')) {
        const text = node.children?.[0]?.value
        if (typeof text === 'string') sink.add(text)
      }
      for (const child of node?.children ?? []) collect(child, sink)
    }

    for (const node of tree.children ?? []) {
      if (node.type === 'element' && node.tagName === 'h2') {
        current = typeof node.properties?.id === 'string' ? node.properties.id : null
        if (current && !into[current]) into[current] = []
        continue
      }
      if (!current) continue

      const found = new Set<string>()
      collect(node, found)
      if (found.size) {
        const list = into[current] ?? (into[current] = [])
        for (const code of found) if (!list.includes(code)) list.push(code)
      }
    }
  }
}

/* ------------------------------------------------------------------ */
/* Images                                                              */
/* ------------------------------------------------------------------ */

/**
 * Turns a Markdown image into a figure with a caption, credit and real
 * dimensions.
 *
 *   ![Alt text](/images/br01.jpg "Caption text — Credit")
 *
 * The title attribute carries the caption; anything after an em dash becomes
 * the credit. That keeps authoring to plain Markdown, which is the rule for
 * everything else on this site.
 *
 * Dimensions are read from the file so the page reserves the right space before
 * the photograph arrives.
 */
export function rehypeFigures({ getSize }: { getSize: (src: string) => { width: number; height: number } | null }) {
  return (tree: Node) => {
    const walk = (node: Node) => {
      if (!node?.children) return

      node.children = node.children.map((child: Node) => {
        walk(child)

        // Markdown wraps a lone image in a paragraph; unwrap it so the figure
        // is not nested inside a <p>, which is invalid.
        const image =
          child.type === 'element' &&
          child.tagName === 'p' &&
          child.children?.length === 1 &&
          child.children[0]?.tagName === 'img'
            ? child.children[0]
            : child.type === 'element' && child.tagName === 'img'
              ? child
              : null

        if (!image) return child

        const src = String(image.properties?.src ?? '')
        const alt = String(image.properties?.alt ?? '')
        const title = String(image.properties?.title ?? '')
        const [caption, credit] = title.split(/\s+—\s+/)

        const size = getSize(src)
        if (size) {
          image.properties.width = size.width
          image.properties.height = size.height
        }
        image.properties.loading = 'lazy'
        image.properties.decoding = 'async'
        image.properties.alt = alt || caption || ''
        delete image.properties.title

        const figcaption =
          caption || credit
            ? [
                {
                  type: 'element',
                  tagName: 'figcaption',
                  properties: {},
                  children: [
                    ...(caption ? [{ type: 'text', value: caption }] : []),
                    ...(credit
                      ? [
                          {
                            type: 'element',
                            tagName: 'span',
                            properties: { className: ['figure-credit'] },
                            children: [{ type: 'text', value: credit }],
                          },
                        ]
                      : []),
                  ],
                },
              ]
            : []

        return {
          type: 'element',
          tagName: 'figure',
          properties: { className: ['figure', 'wide'] },
          children: [image, ...figcaption],
        }
      })
    }
    walk(tree)
  }
}

/* ------------------------------------------------------------------ */
/* Scrollable data tables                                              */
/* ------------------------------------------------------------------ */

/**
 * Wraps every table in a scroll container, so a wide station list scrolls
 * inside itself on a phone instead of stretching the whole page sideways.
 * tabIndex makes the scroll region reachable by keyboard.
 */
export function rehypeTableScroll() {
  return (tree: Node) => {
    const walk = (node: Node) => {
      if (!node?.children) return
      node.children = node.children.map((child: Node) => {
        walk(child)
        if (child.type === 'element' && child.tagName === 'table') {
          return {
            type: 'element',
            tagName: 'div',
            properties: { className: ['table-scroll'], tabIndex: 0 },
            children: [child],
          }
        }
        return child
      })
    }
    walk(tree)
  }
}

/* ------------------------------------------------------------------ */
/* URL scheme safety                                                   */
/* ------------------------------------------------------------------ */

/**
 * Schemes a link or image is allowed to use.
 *
 * Everything else is neutralised. `javascript:`, `data:` and `vbscript:` are
 * the executable ones; the allowlist is used rather than a blocklist because a
 * blocklist has to anticipate every scheme a browser might ever run, and it
 * only has to be wrong once.
 */
const SAFE_SCHEMES = new Set(['http', 'https', 'mailto', 'tel', 'ftp'])

/**
 * Strips executable URL schemes out of Markdown-authored links and images.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * Remark escapes raw HTML — a `<script>` in a Markdown file comes out as text,
 * which is why this pipeline had no HTML injection. It does **not** touch link
 * targets, so both of these produced live, clickable, script-executing links:
 *
 *     [click](javascript:alert(1))
 *     <javascript:alert(1)>
 *
 * That is only theoretical while every Markdown file is written by whoever owns
 * the repository. But /about solicits corrections, the README's headline
 * promise is that adding a page never requires touching code, and the obvious
 * next step for either is accepting a Markdown pull request. At that point this
 * is stored XSS, arriving through the one input the project actively
 * advertises. The cost of closing it now is fifteen lines.
 *
 * Scheme-relative URLs (`//evil.example`) are also rejected: they are not a
 * script vector, but nothing on this site should be linking to another origin
 * without naming it, and `rehypeBasePath` already deliberately skips them.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export function rehypeSafeLinks({ onWarning }: { onWarning?: (message: string) => void } = {}) {
  return (tree: Node) => {
    const walk = (node: Node) => {
      if (node?.type === 'element' && node.properties) {
        for (const attr of ['href', 'src']) {
          const value = node.properties[attr]
          if (typeof value !== 'string') continue

          const trimmed = value.trim()

          // Relative, absolute-path and fragment URLs carry no scheme and are
          // always fine.
          const scheme = trimmed.match(/^([a-z][a-z0-9+.-]*):/i)?.[1]?.toLowerCase()
          const schemeRelative = trimmed.startsWith('//')

          if (!scheme && !schemeRelative) continue
          if (scheme && SAFE_SCHEMES.has(scheme)) continue

          onWarning?.(
            `blocked ${attr}="${trimmed.slice(0, 60)}" — ` +
              `${scheme ? `"${scheme}:" is not an allowed scheme` : 'scheme-relative URLs are not allowed'}`,
          )

          // Removed rather than rewritten to "#": a link that silently goes
          // nowhere is more confusing than one that is plainly not a link.
          delete node.properties[attr]
          if (node.tagName === 'a') node.properties.className = ['blocked-link']
        }
      }
      for (const child of node?.children ?? []) walk(child)
    }
    walk(tree)
  }
}

/* ------------------------------------------------------------------ */
/* Base path for subpath hosting                                       */
/* ------------------------------------------------------------------ */

/**
 * Prefixes site-relative links and images with the deployment base path.
 * Next does this automatically for links written in code, but links written
 * inside a Markdown file become plain <a> tags and are missed.
 */
export function rehypeBasePath(basePath: string) {
  return (tree: Node) => {
    if (!basePath) return
    const walk = (node: Node) => {
      if (node?.type === 'element' && node.properties) {
        for (const attr of ['href', 'src']) {
          const value = node.properties[attr]
          // Site-relative only: skip "https://…", "//cdn…", "#anchor", "mailto:".
          if (typeof value === 'string' && value.startsWith('/') && !value.startsWith('//')) {
            node.properties[attr] = basePath + value
          }
        }
      }
      for (const child of node?.children ?? []) walk(child)
    }
    walk(tree)
  }
}
