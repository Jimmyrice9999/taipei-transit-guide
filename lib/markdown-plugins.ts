/**
 * The rehype plugins that turn plain Markdown into the site's house style.
 *
 * None of them require you to write any markup in a Markdown file — a page is
 * prose and a table, and the build applies the styling consistently.
 */

import { CATALOGUED_LINES, getStation, getStationHref } from './stations.ts'
import { getLine } from './lines.ts'
import { isPlain, tokenize, type TokenizeOptions } from './text-tokens.ts'
import { CITE_MARKER_PATTERN, type Source } from './sources.ts'
import { getImage } from './images.ts'
import { localizedPath, type Locale } from './locale.ts'

/* eslint-disable @typescript-eslint/no-explicit-any */
type Node = any

export type TocEntry = {
  id: string
  label: string
  level: 2 | 3
}

/** Elements whose text is left completely alone. */
const OPAQUE = new Set(['code', 'pre', 'script', 'style'])

/**
 * Walk every text node, letting `transform` replace it with a list of nodes.
 * Skips anything inside OPAQUE elements — that is how backticks work as an
 * opt-out: `BR01` in a Markdown file stays literal text.
 *
 * The transform also learns whether the text sits inside an `<a>`, because a
 * transform that emits links (station badges on article pages) must not nest
 * an anchor inside an anchor — that is invalid HTML that browsers repair by
 * silently splitting the outer link.
 */
function transformText(
  tree: Node,
  transform: (value: string, context: { inAnchor: boolean }) => Node[] | null,
) {
  const walk = (node: Node, inAnchor: boolean) => {
    if (!node?.children) return
    if (node.type === 'element' && OPAQUE.has(node.tagName)) return

    const inside = inAnchor || (node.type === 'element' && node.tagName === 'a')
    const out: Node[] = []
    let changed = false

    for (const child of node.children) {
      if (child.type === 'text') {
        const replacement = transform(child.value, { inAnchor: inside })
        if (replacement) {
          out.push(...replacement)
          changed = true
          continue
        }
      }
      out.push(child)
      walk(child, inside)
    }

    if (changed) node.children = out
  }
  walk(tree, false)
}

/** Collect the real h2/h3 nodes after rehype-slug has assigned stable ids. */
export function rehypeCollectHeadings({ into }: { into: TocEntry[] }) {
  const textOf = (node: Node): string => {
    if (node?.type === 'text') return node.value
    return (node?.children ?? []).map(textOf).join('')
  }

  return (tree: Node) => {
    const walk = (node: Node) => {
      if (node?.type === 'element' && (node.tagName === 'h2' || node.tagName === 'h3')) {
        const id = typeof node.properties?.id === 'string' ? node.properties.id : ''
        const label = textOf(node).trim()
        if (id && label) into.push({ id, label, level: node.tagName === 'h2' ? 2 : 3 })
      }
      for (const child of node?.children ?? []) walk(child)
    }
    walk(tree)
  }
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
  linkStations = false,
  operator,
  ignoreCodes,
  stationCodes = true,
}: {
  file: string
  onWarning: (warning: BadgeWarning) => void
  operator?: string
  ignoreCodes?: ReadonlySet<string>
  stationCodes?: boolean
  /**
   * Render each station badge as a link to its station page. On by default
   * nowhere: line pages already link every station from the strip map, and a
   * spec-sheet page linking BR01 four times in one table is clutter. Article
   * pages turn it on — they have no map, so the inline mention IS the way to
   * a station. A badge inside an existing link stays a span.
   */
  linkStations?: boolean
}) {
  return (tree: Node) => {
    transformText(tree, (value, { inAnchor }) => {
      const tokens = tokenize(value, { ignoreCodes, stationCodes } satisfies TokenizeOptions)
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

        const station = getStation(token.value, operator)
        // Resolve the station first: its registry row carries the operator
        // namespace needed when two systems reuse a line code (TRTC:G and
        // TMRT:G). Resolving the bare line first made every G station look
        // invalid as soon as Taichung Metro was added.
        const line = getLine(token.line, station?.operator ?? operator)

        if (!line || !station) {
          onWarning({
            file,
            code: token.value,
            reason: CATALOGUED_LINES.has(token.line.toUpperCase()) ? 'typo' : 'uncatalogued',
          })
          pushText(token.value)
          continue
        }

        const href = linkStations && !inAnchor ? getStationHref(token.value, station.operator) : null
        out.push({
          type: 'element',
          tagName: href ? 'a' : 'span',
          properties: {
            className: href ? ['badge', 'badge-link'] : ['badge'],
            ...(href ? { href } : {}),
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
/**
 * Splits plain text into hast text/span nodes, tagging Han runs
 * `lang="zh-Hant"` — the same rule `rehypeRichText` applies to the rest of a
 * page's prose.
 *
 * Needed because a figure's caption and credit are synthesised here, from an
 * image's `title` attribute, *after* `rehypeRichText` has already walked the
 * tree. A photographer credited in Chinese — 梁立豪, 李元顥, and every name like
 * them on this site — would otherwise reach the built HTML untagged, which is
 * exactly the failure `npm run a11y` exists to catch site-wide.
 */
function hanTaggedNodes(value: string): Node[] {
  return tokenize(value).map((token) =>
    token.kind === 'han'
      ? { type: 'element', tagName: 'span', properties: { lang: 'zh-Hant' }, children: [{ type: 'text', value: token.value }] }
      : { type: 'text', value: token.value },
  )
}

/**
 * The widest variant a Markdown-embedded figure is allowed to reference.
 *
 * The site's three generated tiers are 400/800/1600. A body figure sits in a
 * ~760px reading column, so 800w is the tier that actually paints there —
 * 1600w is what a *hero* image needs (it can run full-bleed above the
 * column), not a figure inside the prose. Capping here is what makes
 * `tests/images.test.mts`'s per-page budget mean anything: the budget test
 * charges each image its *largest referenced* variant, so a figure that
 * references 1600w when 800w would display identically still costs the full
 * 1600w file — one such figure is a third of the whole page budget. This is
 * the same reasoning `srcCapped`/`srcsetCapped` already apply to card
 * thumbnails; body figures are the same shape of problem at a larger cap.
 */
const BODY_IMAGE_MAX_WIDTH = 800

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

        // A figure that names a pipeline image (`/images/<id>-<width>.webp`)
        // gets a real responsive srcset, capped at BODY_IMAGE_MAX_WIDTH,
        // regardless of which literal tier the author typed — so a figure
        // authored against the wrong (too-large) tier is corrected here
        // rather than shipping over budget, and every figure gains a
        // smaller variant for phones for free.
        const pipelineMatch = src.match(/^(\/images\/(.+))-\d+\.webp$/)
        const id = pipelineMatch?.[2]
        const pipelineImage = id ? getImage(id) : null
        if (pipelineImage && pipelineMatch) {
          const base = pipelineMatch[1]
          const usable = pipelineImage.widths.filter((w) => w <= BODY_IMAGE_MAX_WIDTH)
          const widths = usable.length ? usable : [Math.min(...pipelineImage.widths)]
          const largest = Math.max(...widths)
          image.properties.src = `${base}-${largest}.webp`
          image.properties.srcSet = widths.map((w) => `${base}-${w}.webp ${w}w`).join(', ')
          image.properties.sizes = '(max-width: 780px) 100vw, 760px'
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
                    ...(caption ? hanTaggedNodes(caption) : []),
                    ...(credit
                      ? [
                          {
                            type: 'element',
                            tagName: 'span',
                            properties: { className: ['figure-credit'] },
                            children: hanTaggedNodes(credit),
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

        // srcSet is a different shape: "path width, path width, …". Missing
        // this meant a Markdown figure's srcset (see rehypeFigures) would
        // point at the un-prefixed root on subpath hosting (GitHub Pages),
        // 404ing every responsive variant while the plain `src` still worked.
        const srcSet = node.properties.srcSet
        if (typeof srcSet === 'string') {
          node.properties.srcSet = srcSet
            .split(',')
            .map((candidate) => {
              const trimmed = candidate.trim()
              const [url, descriptor] = trimmed.split(/\s+/, 2)
              if (!url || !url.startsWith('/') || url.startsWith('//')) return trimmed
              return descriptor ? `${basePath}${url} ${descriptor}` : `${basePath}${url}`
            })
            .join(', ')
        }
      }
      for (const child of node?.children ?? []) walk(child)
    }
    walk(tree)
  }
}

/** Prefix Markdown-authored page links with the locale in the static export. */
export function rehypeLocaleLinks(locale: Locale) {
  const isPublicAsset = (href: string) => {
    const path = href.split(/[?#]/, 1)[0]
    return /\.[a-z0-9]+$/i.test(path)
  }

  return (tree: Node) => {
    const walk = (node: Node) => {
      if (node?.type === 'element' && node.tagName === 'a' && node.properties) {
        const value = node.properties.href
        if (
          typeof value === 'string' &&
          value.startsWith('/') &&
          !value.startsWith('//') &&
          !isPublicAsset(value)
        ) {
          node.properties.href = localizedPath(locale, value)
        }
      }
      for (const child of node?.children ?? []) walk(child)
    }
    walk(tree)
  }
}

/* ------------------------------------------------------------------ */
/* Article layout devices                                              */
/* ------------------------------------------------------------------ */

/**
 * Structural devices for long-form article pages (the `history` type).
 *
 * Two transforms, both driven by conventions an author can hit from plain
 * Markdown — no markup in the content file, same contract as everything else
 * in this module:
 *
 * **Timeline** — a table whose first header cell is "Date" or "Stage" becomes
 * an `<ol class="timeline">`: one item per row, first cell as the date rail,
 * remaining cells merged into the entry. A chronology set as a spreadsheet
 * reads as data to be looked up; set as a timeline it reads as a sequence to
 * be followed, and on an article the dates ARE the page's spine. Tables with
 * any other first header (a keyless facts grid, a comparison) stay tables.
 *
 * **Threads** — an `<h2>` followed immediately by two or more paragraphs that
 * each open with a `<strong>` run gets those paragraphs wrapped in
 * `<div class="threads">`, one `.thread` card each, the bold opener as the
 * card's label. This is how an article shows a fork in its argument — the
 * Matra page's two-disputes distinction — as layout rather than as a sentence
 * asking the reader to notice.
 *
 * Runs only on article pages, and must run before rehypeTableScroll — a
 * timeline is no longer a table and must not be wrapped as one.
 */
export function rehypeArticleLayout() {
  const textOf = (node: Node): string => {
    if (node?.type === 'text') return node.value
    return (node?.children ?? []).map(textOf).join('')
  }
  const elementsOf = (nodes: Node[]) => (nodes ?? []).filter((n: Node) => n.type === 'element')

  const toTimeline = (table: Node): Node | null => {
    const head = elementsOf(table.children).find((n: Node) => n.tagName === 'thead')
    const body = elementsOf(table.children).find((n: Node) => n.tagName === 'tbody')
    if (!head || !body) return null

    const headerRow = elementsOf(head.children)[0]
    const firstHeader = headerRow ? textOf(elementsOf(headerRow.children)[0] ?? null).trim() : ''
    if (!/^(date|stage)$/i.test(firstHeader)) return null

    const items = elementsOf(body.children)
      .filter((row: Node) => row.tagName === 'tr')
      .map((row: Node) => {
        const cells = elementsOf(row.children).filter((c: Node) => c.tagName === 'td')
        if (cells.length === 0) return null
        const what: Node[] = []
        for (const cell of cells.slice(1)) {
          if (!textOf(cell).trim() && elementsOf(cell.children).length === 0) continue
          if (what.length) what.push({ type: 'text', value: ' ' })
          what.push(...(cell.children ?? []))
        }
        return {
          type: 'element',
          tagName: 'li',
          properties: { className: ['timeline-item'] },
          children: [
            {
              type: 'element',
              tagName: 'span',
              properties: { className: ['timeline-when'] },
              children: cells[0].children ?? [],
            },
            {
              type: 'element',
              tagName: 'div',
              properties: { className: ['timeline-what'] },
              children: what,
            },
          ],
        }
      })
      .filter(Boolean)

    if (items.length === 0) return null
    return {
      type: 'element',
      tagName: 'ol',
      properties: { className: ['timeline'] },
      children: items,
    }
  }

  const opensWithStrong = (node: Node) =>
    node?.type === 'element' &&
    node.tagName === 'p' &&
    node.children?.[0]?.type === 'element' &&
    node.children[0].tagName === 'strong'

  return (tree: Node) => {
    const walk = (node: Node) => {
      if (!node?.children) return

      const kids: Node[] = node.children
      const out: Node[] = []
      let changed = false

      for (let i = 0; i < kids.length; i++) {
        const child = kids[i]

        if (child.type === 'element' && child.tagName === 'table') {
          const timeline = toTimeline(child)
          if (timeline) {
            out.push(timeline)
            changed = true
            continue
          }
        }

        out.push(child)
        walk(child)

        if (child.type === 'element' && child.tagName === 'h2') {
          // Gather the run of strong-led paragraphs that follows, keeping the
          // whitespace text nodes between them out of the cards.
          const cards: Node[] = []
          let j = i + 1
          while (j < kids.length) {
            const next = kids[j]
            if (next.type === 'text' && !next.value.trim()) {
              j++
              continue
            }
            if (opensWithStrong(next)) {
              cards.push(next)
              j++
              continue
            }
            break
          }

          if (cards.length >= 2) {
            out.push({
              type: 'element',
              tagName: 'div',
              properties: { className: ['threads'] },
              children: cards.map((card) => ({
                type: 'element',
                tagName: 'div',
                properties: { className: ['thread'] },
                children: [card],
              })),
            })
            changed = true
            i = j - 1
          }
        }
      }

      if (changed) node.children = out
    }
    walk(tree)
  }
}

/* ------------------------------------------------------------------ */
/* Entity auto-linking                                                 */
/* ------------------------------------------------------------------ */

/** A linkable entity: one name string that should resolve to one page. */
export type LinkEntity = { name: string; href: string }

/**
 * Links the first mention of every known entity, from plain Markdown, with no
 * manual syntax — the same contract as the station badges: writing a name is
 * enough, and the build does the rest.
 *
 * The rules, each of which exists because its absence produced a bug in
 * something this site already shipped:
 *
 *   first mention only   A reference work links a name once per page. The
 *                        linked set is seeded with every href the page has
 *                        already linked manually, so an author's deliberate
 *                        link suppresses the automatic one instead of
 *                        doubling it. A page never links to itself.
 *   no nested anchors    Ancestry is tracked; text inside an existing <a> is
 *                        never matched. (Learned with badges inside links.)
 *   headings excluded    A linked heading reads as navigation, not prose.
 *   ASCII: word-bounded  "Muzha Depot" must not match inside "Muzha Depots".
 *                        Longest name wins, so "Muzha Depot" beats the
 *                        station "Muzha".
 *   Han: whole segments  A Chinese alias matches only when it fills an entire
 *                        punctuation-delimited segment of a Han run. 文湖線
 *                        links; the same characters inside 文湖線車輛 do not,
 *                        because two-character names embedded in longer nouns
 *                        are how mislinks happen.
 */
export function rehypeAutoLink({
  entities,
  currentHref,
  onLink,
}: {
  entities: LinkEntity[]
  /** The page being rendered; it never links to itself. */
  currentHref: string
  /** Called once per link added, for the audit report. */
  onLink?: (entity: LinkEntity) => void
}) {
  const SKIP = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
  const HAN_SEGMENT_BREAK = /[「」『』【】（）《》〈〉，。、；：！？·　]/

  // Longest first, so the most specific name wins the overlap.
  const sorted = [...entities].sort((a, b) => b.name.length - a.name.length)

  /*
   * A name that resolves to more than one distinct page cannot be
   * auto-linked at all: which page would a bare mention mean? Station names
   * are not unique across the network ("Daan" is BR09 on Wenhu and R05 on
   * Tamsui-Xinyi; scripts/links-audit.mjs's report already excludes 38 such
   * names for exactly this reason). This used to resolve the collision by
   * accident instead of on purpose, two different ways: the ASCII path built
   * `byName` as `new Map(sorted.map(...))`, so whichever entity happened to
   * land last in iteration order silently overwrote the other, and the Han
   * path (below) scans its own array in order and matches whichever entity
   * comes first. Both are fixed the same way: remove every ambiguous name
   * before either path ever sees it, so the auto-linker makes the same
   * choice the audit already makes: link what is unambiguous, link nothing
   * where it is not.
   */
  const hrefsByName = new Map<string, Set<string>>()
  for (const e of sorted) {
    const hrefs = hrefsByName.get(e.name) ?? new Set<string>()
    hrefs.add(e.href)
    hrefsByName.set(e.name, hrefs)
  }
  const unambiguous = sorted.filter((e) => hrefsByName.get(e.name)!.size === 1)

  const ascii = unambiguous.filter((e) => !/[\u2e80-\u9fff\uf900-\ufaff]/.test(e.name))
  const han = unambiguous.filter((e) => /[\u2e80-\u9fff\uf900-\ufaff]/.test(e.name))

  const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const asciiPattern = ascii.length
    ? new RegExp(`(?<![\\w–-])(${ascii.map((e) => escape(e.name)).join('|')})(?![\\w–-])`)
    : null
  const byName = new Map(ascii.map((e) => [e.name, e]))

  const anchor = (entity: LinkEntity, text: string): Node => ({
    type: 'element',
    tagName: 'a',
    properties: { href: entity.href, className: ['entity-link'] },
    children: [{ type: 'text', value: text }],
  })

  return (tree: Node) => {
    const linked = new Set<string>([currentHref])

    // Seed with the page's own manual links, so deliberate linking wins.
    const seed = (node: Node) => {
      if (node?.type === 'element' && node.tagName === 'a' && node.properties?.href) {
        linked.add(String(node.properties.href))
      }
      for (const child of node?.children ?? []) seed(child)
    }
    seed(tree)

    const tryLink = (value: string): Node[] | null => {
      // Han names: the whole value (one Han run) split on punctuation; an
      // alias must fill a whole segment.
      for (const entity of han) {
        if (linked.has(entity.href)) continue
        const index = value.indexOf(entity.name)
        if (index === -1) continue
        const before = value[index - 1]
        const after = value[index + entity.name.length]
        const okBefore = index === 0 || HAN_SEGMENT_BREAK.test(before)
        const okAfter = after === undefined || HAN_SEGMENT_BREAK.test(after)
        if (!okBefore || !okAfter) continue
        linked.add(entity.href)
        onLink?.(entity)
        const out: Node[] = []
        if (index > 0) out.push({ type: 'text', value: value.slice(0, index) })
        out.push(anchor(entity, entity.name))
        const rest = value.slice(index + entity.name.length)
        if (rest) out.push({ type: 'text', value: rest })
        return out
      }

      if (!asciiPattern) return null
      const match = asciiPattern.exec(value)
      if (!match) return null
      const entity = byName.get(match[1])
      if (!entity || linked.has(entity.href)) {
        // Matched a name already linked — try again past this match so a
        // later, different name in the same text node still links.
        const rest = value.slice(match.index + match[1].length)
        const restOut = rest ? tryLink(rest) : null
        if (!restOut) return null
        return [{ type: 'text', value: value.slice(0, match.index + match[1].length) }, ...restOut]
      }
      linked.add(entity.href)
      onLink?.(entity)
      const out: Node[] = []
      if (match.index > 0) out.push({ type: 'text', value: value.slice(0, match.index) })
      out.push(anchor(entity, match[1]))
      const rest = value.slice(match.index + match[1].length)
      if (rest) {
        const restOut = tryLink(rest)
        if (restOut) out.push(...restOut)
        else out.push({ type: 'text', value: rest })
      }
      return out
    }

    const walk = (node: Node, inAnchor: boolean) => {
      if (!node?.children) return
      if (node.type === 'element' && (OPAQUE.has(node.tagName) || SKIP.has(node.tagName))) return

      const inside = inAnchor || (node.type === 'element' && node.tagName === 'a')
      const out: Node[] = []
      let changed = false

      for (const child of node.children) {
        if (child.type === 'text' && !inside) {
          const replacement = tryLink(child.value)
          if (replacement) {
            out.push(...replacement)
            changed = true
            continue
          }
        }
        out.push(child)
        walk(child, inside)
      }

      if (changed) node.children = out
    }
    walk(tree, false)
  }
}
