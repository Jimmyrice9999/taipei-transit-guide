/**
 * The rehype plugins that turn plain Markdown into the site's house style.
 *
 * None of them require you to write any markup in a Markdown file — a page is
 * prose and a table, and the build applies the styling consistently.
 */

import { CATALOGUED_LINES, getStation } from './stations.ts'
import { getLine } from './lines.ts'
import { isPlain, tokenize } from './text-tokens.ts'

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
