/**
 * The site's search index, and the matcher that reads it.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THE INDEX IS A FILE AND NOT A SERVICE
 *
 * This is a static export on GitHub Pages. There is no server to query, so the
 * index is built here from the same registries the pages are built from,
 * written to `public/data/search-index.json` by `npm run search`, and filtered
 * in the browser. `tests/search.test.mts` rebuilds it and compares, so the
 * committed file cannot go stale behind the content — the same contract the
 * font subsets have.
 *
 * WHAT SEARCH IS NOT
 *
 * It is an accelerator, never the only path. Every entry in this index is a
 * page that is already reachable through the section indexes, the route group
 * pages and the station index, in static HTML, with no script running. The
 * search box does not exist without JavaScript and nothing is lost when it
 * does not: what would be lost is a reader having to know which of eleven
 * indexes holds 棕10.
 *
 * WHAT IS INDEXED, AND UNDER WHICH KEYS
 *
 * Every content page, every station, every built bus route, and the indexes
 * themselves. Four kinds of key, because a reader arrives with whichever one
 * they have:
 *
 *   the English name     "Wenhu", "Songshan Airport", "Capital Bus"
 *   the Chinese name     文湖線, 松山機場, 棕10
 *   the code             BR13, R22A — the thing printed on the platform
 *   the route number     212, BR10, 藍26 — the thing printed on the bus
 *
 * Ranking is deliberately dumb and explainable: an exact key match first, then
 * a prefix, then a substring. A reader who types BR13 gets BR13.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** One indexed page. Keys are one character to keep the shipped file small. */
export type SearchEntry = {
  /** Title, as the page shows it. */
  t: string
  /** Chinese name, where the source publishes one. */
  z?: string
  /** Codes, route numbers and aliases, space-separated. */
  k?: string
  /** Multi-word aliases kept whole so address numbers do not become route keys. */
  a?: string[]
  /** Where it goes. */
  h: string
  /** What kind of thing it is, for the result row's label. */
  c: string
}

export type SearchIndex = {
  /** When the index was generated, from the data's own provenance. */
  generated: string
  entries: SearchEntry[]
}

/**
 * The comparable form of a string.
 *
 * Case-folded, and stripped of the punctuation that differs between how a
 * reader types a name and how the source writes it: "Zhonghe–Xinlu" carries an
 * en dash, "Tamsui-Xinyi" a hyphen, "BR 13" a space. Han is left alone — it has
 * no case and no spacing to normalise.
 */
export function normalise(value: string): string {
  return (
    value
      .toLowerCase()
      .normalize('NFKD')
      // Combining diacritics left behind by NFKD.
      .replace(/[\u0300-\u036f]/g, '')
      /*
       * Whitespace and the separators that differ between how a reader types a
       * name and how the source writes it: ASCII hyphen, en dash, em dash,
       * figure dash, the CJK middle dot, and ordinary punctuation.
       *
       * Written as \u escapes rather than the characters themselves. Spelled
       * out, this file's encoding becomes load-bearing for a regex — which is
       * how a dash range quietly stops matching after a tool round-trips the
       * file. Same reasoning as the CJK range in components/RichText.
       */
      .replace(/[\s\u002d\u2010-\u2015\u00b7\u30fb_./()[\],'"]+/g, '')
  )
}

export type SearchHit = { entry: SearchEntry; score: number }

/**
 * Rank one entry against a normalised query, or null for no match.
 *
 * Scores are small integers rather than a tuned relevance function, because a
 * reference site's search has one job — get the thing whose name you typed —
 * and a score anyone can read is a score anyone can debug.
 *
 * ── Why the key field is split and the name fields are not ──────────────────
 *
 * `k` is a space-joined LIST of independent keys — a station code, a slug, the
 * aliases — so each is matched in its own right and "212" does not have to beat
 * the whole of "212 212Night 212Express". A title is one string, and splitting
 * it before normalising was a bug: "New Taipei bus routes" became four tokens
 * "new", "taipei", "bus", "routes", and the query "new taipei" — which
 * normalises to "newtaipei" — matched none of them. The group page a reader
 * typed the name of came back below four operator records.
 */
function scoreEntry(entry: SearchEntry, query: string): number | null {
  let best: number | null = null
  const consider = (score: number) => {
    if (best === null || score < best) best = score
  }
  const rank = (value: string, weight: number) => {
    if (!value) return
    if (value === query) consider(weight)
    else if (value.startsWith(query)) consider(weight + 2)
    else if (value.includes(query)) consider(weight + 4)
  }

  // Codes, numbers and aliases: the strongest signal, each key on its own.
  for (const token of (entry.k ?? '').split(' ')) rank(normalise(token), 0)

  // Content aliases are phrases, not whitespace-delimited codes. Keeping them
  // whole prevents the street number in a station name from outranking a bus
  // route with that number while preserving exact and partial name searches.
  for (const alias of entry.a ?? []) rank(normalise(alias), 1)

  // The names, whole — and then word by word, so "airport" still finds
  // "Songshan Airport" without letting a mid-word substring outrank a real
  // prefix.
  for (const name of [entry.t, entry.z ?? '']) {
    rank(normalise(name), 1)
    for (const word of name.split(/[\s\u2010-\u2015\u002d]+/)) rank(normalise(word), 3)
  }

  return best
}

/**
 * The best `limit` matches for a query, best first.
 *
 * Ties break on title length, so "Bannan Line" comes before "Bannan Line
 * rolling stock" for the same score — the shorter title is the more general
 * page and is what a two-word query usually means.
 */
export function searchIndex(
  entries: readonly SearchEntry[],
  query: string,
  limit = 12,
): SearchHit[] {
  const normalised = normalise(query)
  if (!normalised) return []

  const hits: SearchHit[] = []
  for (const entry of entries) {
    const score = scoreEntry(entry, normalised)
    if (score !== null) hits.push({ entry, score })
  }

  hits.sort((a, b) => a.score - b.score || a.entry.t.length - b.entry.t.length)
  return hits.slice(0, limit)
}
