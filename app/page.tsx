import type { Metadata } from 'next'
import Link from 'next/link'
import PageShell from '@/components/PageShell'
import { NEUTRAL_LINE } from '@/lib/lines'
import { getPages, getSections, getTypes } from '@/lib/content'

// Stated rather than inherited, so the home page's canonical is deliberate and
// so the test that every page declares one has something to find here too.
export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function HomePage() {
  const sections = getSections()

  return (
    <PageShell accent={NEUTRAL_LINE}>
      <h1 className="page-title">Taipei Transit Guide</h1>
      <p className="page-summary">
        An English-language reference for public transport in Taipei — metro lines,
        rolling stock, depots and bus routes.
      </p>

      {sections.map((section) => {
        const types = getTypes(section.slug)
        return (
          <section key={section.slug}>
            <h2 className="section-heading">
              {section.title}
              <Link className="all-link" href={section.href}>
                All {section.title.toLowerCase()} pages →
              </Link>
            </h2>
            {section.description && <p className="section-desc">{section.description}</p>}
            <ul className="card-list">
              {types.map((type) => {
                const count = getPages(section.slug, type.slug).length
                return (
                  <li key={type.slug}>
                    <Link href={type.href}>
                      <span>
                        <span className="card-title">{type.title}</span>
                        {type.description && (
                          <span className="card-desc">{type.description}</span>
                        )}
                      </span>
                      <span className="card-meta">
                        {count} {count === 1 ? 'page' : 'pages'}
                        <span className="card-arrow" aria-hidden="true">
                          →
                        </span>
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </section>
        )
      })}
    </PageShell>
  )
}
