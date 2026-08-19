/**
 * ── Withdrawn in run 51, kept as the record of why ──────────────────────────
 *
 * This used to wrap every `<h2>` of a long Markdown body in a native
 * `<details>`, first section open, on any page with three or more of them. On
 * the Wenhu Line, the Matra dispute and every other researched page, that put
 * the page's ENTIRE ARGUMENT behind a row of closed grey summaries.
 *
 * Run 51's brief: where a section is the main reason someone is on the page, it
 * renders open with no collapse control at all. A researched body is the
 * clearest case there is. Three concrete costs, beyond the click:
 *
 *   find-in-page   Ctrl+F does not search inside a closed `<details>`. On a
 *                  reference site that is the primary way a long page is used,
 *                  and it silently returned nothing.
 *   fragment links The build gives every heading an id and the citation
 *                  markers link to footnotes. A link to `#the-second-dispute`
 *                  scrolled to a closed row and stopped.
 *   print          A closed `<details>` prints closed. Every print PDF of a
 *                  long page was one section and a list of headings.
 *
 * The function is now identity. It is left in place, rather than deleted with
 * its call sites, so that the reasoning survives where the next person will
 * look for it — and so that "make the long pages collapsible" comes back here
 * to read this first. If a long body ever needs navigation, the answer is a
 * table of contents beside the prose, which adds a way in without taking the
 * prose away.
 */

export function collapseMajorSections(html: string) {
  return html
}
