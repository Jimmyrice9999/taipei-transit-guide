/*
 * Above this many rows a list gets its own filter box (components/RouteFilter)
 * rather than staying a plain scroll. Twenty is the size of the bus brown-line
 * feeder group, which fits on one screen at desktop width and does not need
 * one; New Taipei's 562 routes and TRA's 243 stations plainly do. The number
 * is a judgement about when a list stops being scannable, not a measurement.
 *
 * Lives in its own plain module rather than in components/RouteFilter.tsx: that
 * file is `'use client'`, and every export of a client module — not just its
 * component — is replaced with an opaque client reference when imported into a
 * Server Component. A Server Component that read this constant from there got
 * that reference instead of the number 24, so `pages.length >= THRESHOLD`
 * silently became `242 >= {clientRef}` — always false — and neither the bus
 * route filter nor a type index ever rendered its filter box. Caught by
 * grepping the built HTML's own RSC payload for the literal `false` where the
 * filter should have been, on a page with hundreds of rows.
 */
export const LIST_FILTER_THRESHOLD = 24
