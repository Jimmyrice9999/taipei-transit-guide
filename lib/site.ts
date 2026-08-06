/**
 * Where the site lives, and what it calls itself.
 *
 * Canonical URLs, OpenGraph tags and the sitemap all need an absolute origin,
 * which is the one thing a static export cannot work out for itself — the same
 * `out/` folder is valid at a GitHub Pages subpath, at a custom domain, or on
 * localhost.
 *
 * The default is derived from the repository's own remote rather than invented:
 * a GitHub project site is served from https://<user>.github.io/<repo>/. If you
 * move to a custom domain, set NEXT_PUBLIC_SITE_URL and drop
 * NEXT_PUBLIC_BASE_PATH from the deploy workflow — see README.
 *
 * A wrong canonical URL is worse than none at all: it tells search engines the
 * real page is somewhere that does not exist. So if you are deploying anywhere
 * other than the default below, set the variable.
 */

const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/+$/, '')

/** Origin only, no trailing slash, no base path. */
export const SITE_ORIGIN = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://jimmyrice9999.github.io'
).replace(/\/+$/, '')

/** Origin plus base path — the true root of the deployed site. */
export const SITE_URL = `${SITE_ORIGIN}${BASE_PATH}`

export const SITE_NAME = 'Taipei Transit Guide'

export const SITE_DESCRIPTION =
  'An English-language reference for public transport in Taipei: metro lines, stations, ' +
  'rolling stock and depots, built from Taiwan MOTC open data with sources attached.'

/**
 * A site-absolute path turned into an absolute URL.
 *
 * Takes the path as written in the app — "/train/network/" — and returns the
 * full address including the base path. Passing an already-prefixed path would
 * double the prefix, so callers should hand over the logical path only.
 */
export function absoluteUrl(pathname: string): string {
  const clean = pathname.startsWith('/') ? pathname : `/${pathname}`
  return `${SITE_URL}${clean}`
}
