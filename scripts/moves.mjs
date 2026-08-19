/**
 * Every URL prefix the site has ever moved, and where it moved to.
 *
 * A static host cannot issue a real redirect, so `scripts/postbuild.mjs` writes
 * a meta-refresh stub at each old path. This table is the single definition of
 * what those stubs are; `tests/build-output.test.mts` walks the same table and
 * asserts a stub exists for every moved page, points at a real page, and never
 * points at another stub.
 *
 * Rules are prefix pairs, and the stubs are generated from what the build
 * actually exported at the new prefix — so a page added later gets its redirect
 * for free and a page removed stops redirecting.
 *
 * A rename that happens after an earlier one is COMPOSED with it rather than
 * chained. /train/lines/wenhu-line/ points straight at
 * /rail/metro/lines/wenhu-line/, not at /rail/lines/wenhu-line/, which is
 * itself a stub. A redirect that redirects is one readers give up on, and a
 * crawler counts it as a soft 404.
 */

export const MOVES = [
  /* run 51 — the Rail section gained a system level */
  { from: '/rail/lines/', to: '/rail/metro/lines/', why: 'the Rail section gained a system level' },
  { from: '/rail/rolling-stock/', to: '/rail/metro/rolling-stock/', why: 'the Rail section gained a system level' },
  { from: '/rail/depots/', to: '/rail/metro/depots/', why: 'the Rail section gained a system level' },
  { from: '/rail/stations/', to: '/rail/metro/stations/', why: 'the Rail section gained a system level' },
  { from: '/rail/systems/', to: '/rail/technology/', why: '"systems" now names the level above, not the page type' },

  /* run 51 — the gondola stopped being a top-level section holding one line */
  { from: '/gondola/lines/', to: '/rail/cable/lines/', why: 'the gondola moved under Rail & cable' },
  { from: '/gondola/', to: '/rail/cable/', why: 'the gondola moved under Rail & cable' },

  /*
   * Run 5 — Train became Rail. COMPOSED with the run-51 rules above, so an old
   * /train URL lands on the page's current home in one hop rather than on a
   * stub that redirects to another stub. A redirect that redirects is a
   * redirect readers give up on, and a crawler counts as a soft 404.
   */
  { from: '/train/lines/', to: '/rail/metro/lines/', why: 'the Train section became Rail and then gained a system level' },
  { from: '/train/rolling-stock/', to: '/rail/metro/rolling-stock/', why: 'the Train section became Rail and then gained a system level' },
  { from: '/train/depots/', to: '/rail/metro/depots/', why: 'the Train section became Rail and then gained a system level' },
  { from: '/train/stations/', to: '/rail/metro/stations/', why: 'the Train section became Rail and then gained a system level' },
  { from: '/train/systems/', to: '/rail/technology/', why: 'the Train section became Rail and the page type was renamed' },
  { from: '/train/', to: '/rail/', why: 'the Train section became Rail' },
]


/**
 * Which stubs should exist, given the URLs the build actually exported.
 *
 * One stub per (old tree, destination). Rules are grouped by the first segment
 * of `from` — the tree the old URL lived in — and within a group the rule whose
 * `to` matches longest wins. That is what keeps the general /train/ rule from
 * also inventing /train/metro/lines/wenhu-line/, a URL that never existed:
 * /rail/metro/lines/… is claimed by the specific /train/lines/ rule first.
 *
 * Shared by the generator and by the test that checks its output, so the two
 * cannot disagree about what a complete set of redirects is.
 */
export function plannedRedirects(pageUrls) {
  const byRoot = new Map()
  for (const move of MOVES) {
    const root = move.from.split('/')[1]
    if (!byRoot.has(root)) byRoot.set(root, [])
    byRoot.get(root).push(move)
  }

  const planned = []
  for (const [, rules] of byRoot) {
    const longestFirst = [...rules].sort((a, b) => b.to.length - a.to.length)
    for (const url of pageUrls) {
      const move = longestFirst.find((rule) => url.startsWith(rule.to))
      if (!move) continue
      planned.push({ old: move.from + url.slice(move.to.length), target: url, why: move.why })
    }
  }
  return planned
}
