'use client'

/**
 * The search box in the top bar.
 *
 * ── The shape, and why each part of it is the way it is ─────────────────────
 *
 * WITHOUT SCRIPT the input renders disabled, labelled as needing JavaScript.
 * Not hidden, because a control that appears out of nowhere on hydration shifts
 * the bar; and not enabled-but-inert, because an input you can type into that
 * does nothing is the worst of the three. Everything search reaches is reachable
 * without it — the section indexes, the route group pages, the station index are
 * all static HTML — so this is an accelerator losing its speed, not a reader
 * losing a page. `<noscript>` says where to go instead.
 *
 * THE INDEX IS FETCHED ON FIRST USE, not on page load. It is 164 KB of JSON
 * covering 1,387 pages, which is not something to put on the critical path of a
 * station page. The fetch starts on focus — before the first keystroke is
 * finished — so by the time there is a query to run there is usually an index
 * to run it against.
 *
 * THE PATTERN IS A COMBOBOX, per WAI-ARIA: the input owns `aria-expanded` and
 * `aria-controls`, the results are a `listbox`, and the active option is named
 * by `aria-activedescendant` rather than taking focus — so the caret stays in
 * the input and typing keeps working while arrowing through results. A live
 * region announces the count, because a sighted reader sees the list appear and
 * a screen-reader user otherwise gets nothing until they arrow into it.
 *
 * EVERY RESULT IS A REAL LINK to a real static page. Enter follows the active
 * one; so does a click; so does opening it in a new tab, which a
 * button-with-an-onClick would have broken.
 */

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useId, useRef, useState } from 'react'
import { searchIndex, type SearchEntry } from '@/lib/search'

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''
const INDEX_URL = `${BASE_PATH}/data/search-index.json`

export default function SiteSearch() {
  const router = useRouter()
  const pathname = usePathname()
  const idBase = useId()
  const listId = `${idBase}-results`
  const rootRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  /*
   * `false` on the server and on the first client render, so hydration matches;
   * the effect flips it. This is the enabled/disabled state of the input, and
   * it is the only thing that says "script is running" without measuring.
   */
  const [ready, setReady] = useState(false)
  useEffect(() => setReady(true), [])

  const [entries, setEntries] = useState<SearchEntry[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [failed, setFailed] = useState(false)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)

  const load = () => {
    if (entries || loading) return
    setLoading(true)
    fetch(INDEX_URL)
      .then((response) => (response.ok ? response.json() : Promise.reject(response.status)))
      .then((data) => setEntries(data.entries as SearchEntry[]))
      .catch(() => setFailed(true))
      .finally(() => setLoading(false))
  }

  // Any navigation closes the results; otherwise following one leaves the list
  // sitting over the page it just asked for.
  useEffect(() => {
    setQuery('')
    setActive(0)
  }, [pathname])

  useEffect(() => {
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setQuery('')
    }
    document.addEventListener('pointerdown', onPointer)
    return () => document.removeEventListener('pointerdown', onPointer)
  }, [])

  const hits = entries && query.trim() ? searchIndex(entries, query, 10) : []
  const open = query.trim().length > 0
  const activeId = hits.length ? `${idBase}-option-${Math.min(active, hits.length - 1)}` : undefined

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      setQuery('')
      return
    }
    if (!hits.length) return
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActive((i) => (i + 1) % hits.length)
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActive((i) => (i - 1 + hits.length) % hits.length)
    } else if (event.key === 'Enter') {
      event.preventDefault()
      const hit = hits[Math.min(active, hits.length - 1)]
      if (hit) {
        setQuery('')
        router.push(hit.entry.h)
      }
    }
  }

  return (
    <div className="site-search" ref={rootRef}>
      <label className="sr-only" htmlFor={`${idBase}-input`}>
        Search stations, lines, routes, operators and articles
      </label>
      <input
        id={`${idBase}-input`}
        ref={inputRef}
        className="site-search-input"
        type="search"
        autoComplete="off"
        spellCheck={false}
        disabled={!ready}
        placeholder={ready ? 'Search…' : 'Search needs JavaScript'}
        value={query}
        role="combobox"
        aria-expanded={open}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-activedescendant={activeId}
        onFocus={load}
        onChange={(event) => {
          load()
          setQuery(event.target.value)
          setActive(0)
        }}
        onKeyDown={onKeyDown}
      />

      <noscript>
        {/* The honest fallback: the indexes this box is a shortcut through. */}
        <a className="site-search-fallback" href="/rail/metro/stations/">
          Browse the indexes →
        </a>
      </noscript>

      {/* Assertive would interrupt typing; polite reads the count when the
          reader pauses, which is when it is useful. */}
      <p className="sr-only" role="status">
        {open && entries ? `${hits.length} result${hits.length === 1 ? '' : 's'}` : ''}
      </p>

      {open && (
        <ul className="site-search-results" id={listId} role="listbox" aria-label="Search results">
          {hits.map((hit, index) => (
            <li key={hit.entry.h} role="presentation">
              <Link
                id={`${idBase}-option-${index}`}
                role="option"
                aria-selected={index === Math.min(active, hits.length - 1)}
                href={hit.entry.h}
                onMouseEnter={() => setActive(index)}
                onClick={() => setQuery('')}
              >
                <span className="site-search-title">{hit.entry.t}</span>
                {hit.entry.z && (
                  <span className="site-search-zh" lang="zh-Hant">
                    {hit.entry.z}
                  </span>
                )}
                <span className="site-search-kind">{hit.entry.c}</span>
              </Link>
            </li>
          ))}
          {hits.length === 0 && (
            <li className="site-search-empty" role="presentation">
              {failed
                ? 'The search index could not be loaded.'
                : entries
                  ? 'Nothing matches. Try a station code, a route number, or a Chinese name.'
                  : 'Loading the index…'}
            </li>
          )}
        </ul>
      )}
    </div>
  )
}
