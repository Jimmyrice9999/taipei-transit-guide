/**
 * A small, session-scoped trail for contextual back links.
 *
 * Static HTML still renders the caller's explicit fallback. The browser adds
 * the previous in-site route after hydration, which keeps direct loads and
 * script-disabled visits useful without pretending a static export can know
 * where a reader came from at build time.
 *
 * ── Run 51: this is a STACK, not a visit log ────────────────────────────────
 *
 * `rememberPath` used to append every route the reader landed on, including
 * ones they reached by pressing Back. Exact reported repro, on the trail it
 * produced:
 *
 *   Home                    ["/"]
 *   → Rail ▸ Network        ["/", "/rail/network/"]
 *   → an operator link      ["/", "/rail/network/", "/rail/operators/trtc/"]
 *   → Back                  ["/", "/rail/network/", "/rail/operators/trtc/",
 *                            "/rail/network/"]            ← appended, not popped
 *
 * At that point `previousPath('/rail/network/')` saw its own path at the end,
 * stepped back one more, and returned `/rail/operators/trtc/`. So the Back
 * control on the Network page pointed FORWARD, to the page the reader had just
 * left, and pressing it again walked them into a two-page loop they could not
 * get out of. The browser's own Back button was fine throughout; the site's
 * was not, and it is the one rendered in the page.
 *
 * A trail whose whole purpose is "where does up/back go" has to model the path
 * taken, not the pages seen. Arriving at a route already on the trail means the
 * reader has come BACK to it — by the browser's Back button, by this control,
 * or by clicking a link to somewhere they had already been, which for this
 * purpose is the same thing. Truncating at that point is what makes the trail
 * finite, loop-free, and always pointing at somewhere the reader has actually
 * been before the current page.
 */

const NAVIGATION_HISTORY_KEY = 'taipei-transit-guide:navigation-history'

/** Longest trail kept. Truncation on revisit means this is rarely approached. */
const MAX_TRAIL = 50

export function normalizePath(pathname: string) {
  const path = pathname.split(/[?#]/, 1)[0].replace(/\/+/g, '/')
  if (!path || path === '/') return '/'
  return '/' + path.replace(/^\/+|\/+$/g, '') + '/'
}

function readHistory(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const value = JSON.parse(window.sessionStorage.getItem(NAVIGATION_HISTORY_KEY) ?? '[]')
    return Array.isArray(value) && value.every((path) => typeof path === 'string')
      ? value.map(normalizePath)
      : []
  } catch {
    return []
  }
}

/**
 * The trail after arriving at `current` from `trail`.
 *
 * Exported and pure so tests/navigation.test.mts can drive the reported repro
 * without a browser — the bug was in this one decision, and a scripted
 * navigation is the slowest possible way to check it.
 */
export function advanceTrail(trail: string[], pathname: string): string[] {
  const current = normalizePath(pathname)
  const history = trail.map(normalizePath)

  // Re-render, replace, or a refresh: not a navigation at all.
  if (history.at(-1) === current) return history

  // Already on the trail — the reader has come back to it. Everything after it
  // is a branch they have left, so it goes.
  const seen = history.lastIndexOf(current)
  if (seen !== -1) return history.slice(0, seen + 1)

  return [...history, current].slice(-MAX_TRAIL)
}

export function rememberPath(pathname: string) {
  if (typeof window === 'undefined') return
  const next = advanceTrail(readHistory(), pathname)
  try {
    window.sessionStorage.setItem(NAVIGATION_HISTORY_KEY, JSON.stringify(next))
  } catch {
    // Blocked storage leaves the explicit fallback link working.
  }
}

/**
 * The route the reader was on before this one, or null.
 *
 * `rememberPath` guarantees the current path is the last entry, so this is
 * simply the one before it — but it is looked up by position rather than
 * assumed, so a caller that renders before the trail has been advanced (a
 * first paint, a page reached with storage blocked) gets null rather than an
 * unrelated route.
 */
export function previousPath(pathname: string) {
  const current = normalizePath(pathname)
  const history = readHistory()
  const index = history.lastIndexOf(current)
  if (index === -1) return history.at(-1) ?? null
  return index > 0 ? history[index - 1] : null
}
