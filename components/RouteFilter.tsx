'use client'

/**
 * In-page filtering for a long route list.
 *
 * ── Why this filters the DOM rather than re-rendering a list ────────────────
 *
 * /bus/routes/new-taipei/ carries 562 routes in seven subgroups. Every one of
 * them is a real `<a>` in the static HTML, and that is the property that must
 * survive: a filter that re-rendered the list from data would make the links
 * exist only while script runs, which is the opposite of what this site is.
 *
 * So the rows stay exactly as the server wrote them, and this hides the ones
 * that do not match by setting `hidden` on the `<li>`. Turn the script off and
 * every route is still there, in order, linked. It is the same relationship
 * the top-bar search has to the indexes: an accelerator over static HTML.
 *
 * Matching reads `data-search` off each row — the route's English name, its
 * Chinese name and its slug, written by the server — rather than the row's
 * rendered text, so it cannot accidentally match the operator count in the
 * summary line and it uses exactly the keys the global search uses.
 *
 * A subgroup that contains a match is opened, and one that does not is closed
 * and labelled as empty for this query, so "no results in Rapid buses" is
 * visible rather than being an absence a reader has to infer.
 */

import { useEffect, useId, useRef, useState } from 'react'
import { normalise } from '@/lib/search'

export default function RouteFilter({
  /** The count shown before anything is typed, for the "N of M" line. */
  total,
  /** What the rows are, for the label and the result count: "routes". */
  noun = 'routes',
}: {
  total: number
  noun?: string
}) {
  const idBase = useId()
  const [query, setQuery] = useState('')
  const [matches, setMatches] = useState<number | null>(null)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scope = rootRef.current?.closest('[data-route-filter]')
    if (!scope) return

    const rows = scope.querySelectorAll<HTMLElement>('li[data-search]')
    const needle = normalise(query)

    /*
     * A subgroup prints its own total — "70 routes" — and with a filter running
     * that number describes a list the reader is not looking at. It is swapped
     * for "2 of 70" while filtering and put back when the filter clears. The
     * original is stashed on the element the first time it is touched rather
     * than recomputed, so repeated filtering cannot erode it.
     */
    const counts = scope.querySelectorAll<HTMLElement>('[data-subgroup] .disclosure-count')

    if (!needle) {
      for (const row of rows) row.hidden = false
      for (const group of scope.querySelectorAll<HTMLElement>('[data-subgroup]')) {
        group.hidden = false
      }
      for (const count of counts) {
        if (count.dataset.total) count.textContent = count.dataset.total
      }
      setMatches(null)
      return
    }

    let found = 0
    for (const row of rows) {
      const hit = normalise(row.dataset.search ?? '').includes(needle)
      row.hidden = !hit
      if (hit) found++
    }

    /*
     * Open a subgroup that has something to show and close one that does not.
     * `<details open>` is set as a property rather than an attribute so the
     * browser's own state and ours cannot disagree.
     */
    for (const group of scope.querySelectorAll<HTMLElement>('[data-subgroup]')) {
      const hits = group.querySelectorAll('li[data-search]:not([hidden])').length
      group.hidden = hits === 0
      if (group instanceof HTMLDetailsElement) group.open = hits > 0

      const count = group.querySelector<HTMLElement>('.disclosure-count')
      if (!count) continue
      if (!count.dataset.total) count.dataset.total = count.textContent ?? ''
      const all = group.querySelectorAll('li[data-search]').length
      count.textContent = `${hits} of ${all}`
    }

    setMatches(found)
  }, [query])

  return (
    <div className="route-filter" ref={rootRef}>
      <label className="route-filter-label" htmlFor={`${idBase}-input`}>
        Filter these {noun}
      </label>
      <input
        id={`${idBase}-input`}
        className="route-filter-input"
        type="search"
        autoComplete="off"
        spellCheck={false}
        placeholder="Number, English name or Chinese name"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      {/* Polite, so it reads the count when typing pauses. The same sentence is
          visible, because a count only a screen reader gets is a count the
          sighted reader has to work out from a list that shrank. */}
      <p className="route-filter-count" role="status">
        {matches === null
          ? `${total} ${noun}`
          : `${matches} of ${total} ${noun}${matches === 0 ? ' — try a number, or clear the filter' : ''}`}
      </p>
    </div>
  )
}
