import Link from 'next/link'
import LineBadge from './LineBadge'
import type { PageMeta } from '@/lib/content'
import type { Line } from '@/lib/lines'
import { getAccent } from '@/lib/lines'

/**
 * Sets the pages in one folder side by side, a column each.
 *
 * Built entirely from their `specs:` frontmatter — nothing is authored twice.
 * This is the thing an encyclopedia does badly: comparing two fleets means
 * opening two articles and holding both in your head. A reference site puts the
 * columns next to each other and lets you read across.
 *
 * Column headers carry the line badge and the stretch of line each page covers,
 * so the comparison and the spine are visibly the same system rather than a
 * generic table bolted on.
 */
export default function ComparisonTable({ pages }: { pages: PageMeta[] }) {
  const withSpecs = pages.filter((page) => page.specs.length > 0)
  if (withSpecs.length < 2) return null

  // Row order follows first appearance, so the first page's spec order wins and
  // anything only the others list is appended.
  const labels: string[] = []
  for (const page of withSpecs) {
    for (const spec of page.specs) {
      if (!labels.includes(spec.label)) labels.push(spec.label)
    }
  }

  const lookup = (page: PageMeta, label: string) =>
    page.specs.find((spec) => spec.label === label)

  return (
    <section className="compare" aria-label="Side-by-side comparison">
      <div className="compare-scroll" tabIndex={0}>
        <table>
          <thead>
            <tr>
              <th scope="col" className="compare-corner">
                <span className="sr-only">Specification</span>
              </th>
              {withSpecs.map((page) => {
                const line: Line = getAccent(page.line)
                return (
                  <th scope="col" key={page.slug}>
                    <Link href={page.href}>{page.title}</Link>
                    <span className="compare-meta">
                      {/* Outside the column's own link, so this one can link
                          to the line rather than repeat the page above it. */}
                      {line.code && <LineBadge code={line.code} />}
                      {page.spine && <span className="compare-range">{page.spine}</span>}
                    </span>
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {labels.map((label) => (
              <tr key={label}>
                <th scope="row">{label}</th>
                {withSpecs.map((page) => {
                  const spec = lookup(page, label)
                  return (
                    <td key={page.slug}>
                      {spec?.value ? (
                        <>
                          <span className="compare-value">{spec.value}</span>
                          {spec.unit && <span className="compare-unit">{spec.unit}</span>}
                        </>
                      ) : (
                        <span className="compare-absent">—</span>
                      )}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
