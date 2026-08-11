import { getPages } from './content.ts'

/**
 * TDX operator code → the company, and its page.
 *
 * ── Why a map and not a lookup by name ───────────────────────────────────────
 *
 * The data calls operators by short codes (`TRTC`, `NTDLRT`), the prose calls
 * them by full name ("Taipei Rapid Transit Corporation"), the facts panels use
 * whichever the author typed, and the pages live at slugs. Four vocabularies
 * for three companies. Every one of those spellings appeared somewhere on the
 * site as plain text, which is the whole of run 10's complaint: every fleet,
 * line, depot and station page names an operator and none of them linked
 * anywhere.
 *
 * ── The one that is not a company ────────────────────────────────────────────
 *
 * `NTDLRT` and `NTALRT` are TDX *operator codes* for the Danhai and Ankeng
 * light rail lines, but they are not separate companies — both are run by New
 * Taipei Metro Corporation, which is also `NTMC`. TDX splits them because it
 * files light rail separately (see the OPERATORS note in scripts/fetch-tdx.mjs);
 * the site should not invent two companies out of that. Both resolve to NTMC.
 */
const CODE_TO_SLUG: Record<string, string> = {
  TRTC: 'trtc',
  NTMC: 'ntmc',
  NTDLRT: 'ntmc',
  NTALRT: 'ntmc',
  TYMC: 'tymc',
}

/** The short name to print when the data gives only a code. */
const CODE_TO_NAME: Record<string, string> = {
  TRTC: 'Taipei Rapid Transit Corporation',
  NTMC: 'New Taipei Metro Corporation',
  NTDLRT: 'New Taipei Metro Corporation',
  NTALRT: 'New Taipei Metro Corporation',
  TYMC: 'Taoyuan Metro Corporation',
}

let bySlug: Map<string, { title: string; href: string }> | null = null
function operatorPages() {
  if (!bySlug) {
    bySlug = new Map(
      getPages('rail', 'operators').map((page) => [page.slug, { title: page.title, href: page.href }]),
    )
  }
  return bySlug
}

export type OperatorRef = { code: string; name: string; href: string | null }

/**
 * Resolve a TDX operator code to something linkable.
 *
 * Returns `href: null` rather than throwing when no page exists, so adding an
 * operator to the fetch cannot break the build before someone writes its page.
 */
export function getOperator(code: string | undefined | null): OperatorRef | null {
  if (!code) return null
  const key = code.toUpperCase()
  const slug = CODE_TO_SLUG[key]
  if (!slug) return { code: key, name: CODE_TO_NAME[key] ?? key, href: null }
  const page = operatorPages().get(slug)
  return {
    code: key,
    name: page?.title ?? CODE_TO_NAME[key] ?? key,
    href: page?.href ?? null,
  }
}
