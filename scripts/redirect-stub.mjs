/**
 * The one definition of "this file is a redirect stub, not a page".
 *
 * ── Why it is a marker in the file and not a path rule ──────────────────────
 *
 * A static host cannot issue a real redirect, so every URL the site has ever
 * moved gets a stub with a meta refresh in it (see step 4 of postbuild). Those
 * stubs are not pages: they have no h1, no main landmark, no title beyond
 * "Moved", and no canonical of their own. Every audit that walks out/ therefore
 * has to skip them.
 *
 * Until run 51 the stubs all lived under out/train, and six different audits
 * each carried their own `startsWith('train')` check. Run 51 moved the Rail
 * section's pages under a system level, which put stubs at /rail/lines/…,
 * /rail/stations/… and /gondola/ — inside the live trees, where no path rule
 * can distinguish them from real pages. Every one of those six audits failed at
 * once, which is the useful version of this bug: the stubs are marked, the
 * marker is defined here, and a seventh audit gets the same answer as the
 * other six.
 */

/** Present on the <html> element of every generated redirect stub. */
export const REDIRECT_STUB_MARKER = 'data-redirect-stub'

/** True for the generated stubs, false for anything the site actually renders. */
export function isRedirectStub(html) {
  return html.includes(REDIRECT_STUB_MARKER)
}
