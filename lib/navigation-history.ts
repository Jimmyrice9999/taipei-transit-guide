/**
 * A small, session-scoped trail for contextual back links.
 *
 * Static HTML still renders the caller's explicit fallback. The browser adds
 * the previous in-site route after hydration, which keeps direct loads and
 * script-disabled visits useful without pretending a static export can know
 * where a reader came from at build time.
 */

const NAVIGATION_HISTORY_KEY = 'taipei-transit-guide:navigation-history'

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

export function rememberPath(pathname: string) {
  if (typeof window === 'undefined') return
  const current = normalizePath(pathname)
  const history = readHistory()
  if (history.at(-1) === current) return
  try {
    window.sessionStorage.setItem(
      NAVIGATION_HISTORY_KEY,
      JSON.stringify([...history, current].slice(-50)),
    )
  } catch {
    // Blocked storage leaves the explicit fallback link working.
  }
}

export function previousPath(pathname: string) {
  const current = normalizePath(pathname)
  const history = readHistory()
  const last = history.at(-1)
  if (last === current) return history.at(-2) ?? null
  return last ?? null
}
