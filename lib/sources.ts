/**
 * Citations.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * Citation discipline is this site's actual product. Everything else — the
 * measured route length, the colour science, the labelled TBCs — is downstream
 * of one claim: that a figure here can be traced to something. Until this
 * module existed, the site had no way to make that traceable at all. Four of
 * the five content pages ended with `Sources: *To be added.*`, which was honest
 * and useless.
 *
 * The design goal is that sourcing is *visible*, not buried in a footer nobody
 * reads. So:
 *
 *   - A source is declared once per page, in frontmatter, with enough fields to
 *     find it again if the URL rots: title in English, title in the original
 *     language, publisher, date accessed, and whether it is primary.
 *   - Primary/secondary is a required field, not an optional nicety. The
 *     line-colour episode proved that a citation to an official source can
 *     itself be wrong, so "who says this" has to travel with the claim.
 *   - A marker in prose renders as a numbered superscript that links to the
 *     entry. A fact or spec row cites by naming a source id.
 *   - Every marker must resolve; unused entries are reported. Both are checked
 *     by `npm run cite`, which exits non-zero on the first and warns on the
 *     second.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** Whether the source is the body that created the fact, or reports on it. */
export type SourceKind = 'primary' | 'secondary'

export type Source = {
  /** Short slug used by `[^id]` markers and by `source:` on a fact or spec. */
  id: string
  /** Title in English, or a translation where the original is not English. */
  title: string
  /** Title as published, where that is not English. Rendered with `lang`. */
  titleOriginal: string
  /** Author where there is a named one, publisher otherwise. Both if both. */
  publisher: string
  url: string
  /** ISO date the URL was last read. */
  accessed: string
  /**
   * Internet Archive capture of `url`, recorded beside the live link.
   *
   * Six of the site's primary sources are government CMS pages whose URLs are
   * database node ids (`cp.aspx?n=DBAC…`). One site migration breaks them all,
   * and an id carries no meaning to search for afterwards — the citation would
   * be unrecoverable, not merely stale. The snapshot is what makes the claim
   * checkable after the live URL dies. Optional, because a snapshot of a page
   * that was never captured cannot be conjured retroactively.
   */
  snapshot: string
  kind: SourceKind
  /** BCP-47 tag for `titleOriginal`, e.g. `zh-Hant`. Empty when English. */
  lang: string
  /** Why this source and not another, or what it does not settle. */
  note: string
}

/** A source paired with the number it was given on the page that cites it. */
export type NumberedSource = Source & { number: number; cited: boolean }

export const SOURCE_KINDS: SourceKind[] = ['primary', 'secondary']

/**
 * A citation marker in Markdown prose: `[^dorts-wenhu]`.
 *
 * Deliberately the same shape as a GFM footnote reference, because that is what
 * a reader of the raw Markdown will expect it to mean. It is safe to reuse:
 * remark-gfm only turns `[^id]` into a footnote when a matching `[^id]:`
 * definition exists in the same file, and there never is one — the definitions
 * live in frontmatter. Verified rather than assumed; a bare marker comes out of
 * the pipeline as literal text, which is exactly what leaves it for us.
 *
 * If anyone ever does write a `[^id]:` definition, GFM wins and our marker
 * disappears — so `npm run cite` rejects definition lines outright.
 */
export const CITE_MARKER_PATTERN = /\[\^([a-z0-9][a-z0-9-]*)\]/g

/** A GFM footnote definition, which would silently take over our markers. */
export const CITE_DEFINITION_PATTERN = /^\s{0,3}\[\^([a-z0-9][a-z0-9-]*)\]:/m

/** Problems found while validating a page's `sources:` block. */
export type SourceProblem = { id: string; field: string; message: string }

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/

/**
 * Checks one source entry for the fields that make it useless if wrong.
 *
 * Being strict here is the point. A half-filled entry looks like a citation in
 * the rendered list while being unfollowable, which is worse than no entry —
 * the same argument as a plausible unsourced figure.
 */
export function validateSource(source: Source): SourceProblem[] {
  const problems: SourceProblem[] = []
  const fail = (field: string, message: string) =>
    problems.push({ id: source.id || '(no id)', field, message })

  if (!source.id) fail('id', 'every source needs an id — it is what `[^id]` refers to')
  else if (!/^[a-z0-9][a-z0-9-]*$/.test(source.id))
    fail('id', `"${source.id}" must be lowercase letters, digits and hyphens`)

  if (!source.title) fail('title', 'a title in English is required')

  if (!source.publisher) fail('publisher', 'name the author or the publisher')

  if (!source.url) fail('url', 'a URL is required — an unfollowable citation is not one')
  else if (!/^https?:\/\//i.test(source.url)) fail('url', `"${source.url}" is not an http(s) URL`)

  if (!source.accessed) fail('accessed', 'record the date the URL was read')
  else if (!ISO_DATE.test(source.accessed))
    fail('accessed', `"${source.accessed}" is not an ISO date (YYYY-MM-DD)`)

  if (source.snapshot && !/^https?:\/\//i.test(source.snapshot))
    fail('snapshot', `"${source.snapshot}" is not an http(s) URL`)

  if (!SOURCE_KINDS.includes(source.kind))
    fail(
      'kind',
      `must be "primary" or "secondary" — got "${source.kind || '(missing)'}". ` +
        'This is required: the line-colour episode proved a citation to an ' +
        'official source can itself be wrong, so who says it travels with it.',
    )

  if (source.titleOriginal && !source.lang)
    fail('lang', 'titleOriginal needs a lang tag, e.g. zh-Hant, or it is set in the wrong font')

  return problems
}

/**
 * Numbers a page's sources.
 *
 * Numbering follows frontmatter order rather than order of first citation, and
 * that is a deliberate choice. A page cites from three places — the facts
 * panel above the prose, the prose itself, and the spec table below it — so
 * "reading order" is not a single sequence, and any rule that tried to be one
 * would renumber a page when a fact moved. Frontmatter order is stable, is
 * under the author's control, and survives an edit to the middle of the page.
 */
export function numberSources(sources: Source[], used: Set<string>): NumberedSource[] {
  return sources.map((source, index) => ({
    ...source,
    number: index + 1,
    cited: used.has(source.id),
  }))
}
