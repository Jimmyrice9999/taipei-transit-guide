import Link from 'next/link'

/**
 * "← Back to Lines" — the up-navigation control, on every page.
 *
 * The site already had breadcrumbs and they were reported in run 10 as "NO
 * BACK BUTTON anywhere", a top complaint. Both things are true. A breadcrumb
 * trail is an *orientation* device — it tells you where you are — and it is
 * rendered as small grey text with chevrons between the crumbs. Nothing about
 * it reads as a control you press, and the one people actually want to press
 * is the second-to-last crumb, which is the least prominent thing in the row.
 *
 * So this is a separate, deliberate control: an arrow, a border, a hit area,
 * and one destination. It does not replace the breadcrumbs — they answer a
 * different question and both belong.
 *
 * **It is a link, not `history.back()`.** A back *button* would be
 * unpredictable: it depends on how you arrived, it does nothing on a page
 * opened in a new tab or from a search result, and its label cannot say where
 * it goes. A link to the parent always goes to the same place and can name it.
 * That is also why it takes an explicit `label` — "Back" alone is the failure
 * being fixed.
 */
export default function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link className="back-link" href={href}>
      <span className="back-arrow" aria-hidden="true">
        ←
      </span>
      Back to {label}
    </Link>
  )
}
