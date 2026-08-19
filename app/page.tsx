import type { Metadata } from 'next'
import Link from 'next/link'
import PageShell from '@/components/PageShell'
import RichText from '@/components/RichText'
import { NEUTRAL_LINE } from '@/lib/lines'
import { getPages, getSections, getSystems, getTypes } from '@/lib/content'
import { getBuiltBusRoutePageCount } from '@/lib/bus/route-groups'
import { getImage, src as imageSrc } from '@/lib/images'

// Stated rather than inherited, so the home page's canonical is deliberate and
// so the test that every page declares one has something to find here too.
export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function HomePage() {
  const sections = getSections()

  /*
   * One featured page, hand-picked: the Matra article is the only original
   * long-form work the site has published, and until this card existed
   * nothing on the front page led to it. A single card, not a redesign —
   * the home page's job is still wayfinding. Swap the slug to re-feature.
   */
  const featured = getPages('rail', 'history').find((p) => p.slug === 'matra-dispute')
  const featuredImage = getImage('matra-dispute/hero')

  return (
    <PageShell accent={NEUTRAL_LINE}>
      <h1 className="page-title">Taipei Transit Guide</h1>
      <p className="page-summary">
        An English-language reference for public transport in Taipei — metro lines,
        rolling stock, depots and bus routes.
      </p>

      {featured && (
        <Link className="feature-card" href={featured.href}>
          {featuredImage && (
            /*
             * Dimensions from the record, not typed.
             *
             * These were `width={400} height={533}` — the portrait shape of the
             * photograph that happened to be here when the card was written.
             * The card crops with object-fit, so a wrong ratio does not show;
             * it just reserves the wrong box before the CSS lands, and it goes
             * silently wrong the moment the featured image changes, which is
             * the one thing this card is designed to make easy. Derived from
             * the sidecar it cannot disagree with what actually loads.
             */
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageSrc(featuredImage).replace(/-\d+\.webp$/, '-400.webp')}
              alt=""
              width={400}
              height={Math.round((400 * featuredImage.height) / featuredImage.width)}
              loading="lazy"
              decoding="async"
            />
          )}
          <span className="feature-body">
            <span className="feature-eyebrow">Featured · History</span>
            <span className="feature-title">
              <RichText>{featured.title}</RichText>
            </span>
            {featured.summary && (
              <span className="feature-summary">
                <RichText>{featured.summary}</RichText>
              </span>
            )}
            {featuredImage && (
              <span className="figure-credit">
                <RichText>{featuredImage.artist}</RichText>
                {' · '}
                {featuredImage.license}
                {' · Wikimedia Commons'}
              </span>
            )}
          </span>
        </Link>
      )}

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
              {/*
                A section's systems come before its types, and are the branch a
                reader actually wants: "the metro", not "lines". This replaced a
                hard-coded Rail card pointing at the station index — which was
                the same instinct, written before there was a level to put it
                on, and which went stale the moment the station index moved.
              */}
              {getSystems(section.slug).map((system) => (
                <li key={system.slug}>
                  <Link href={system.href}>
                    <span className="card-body">
                      <span className="card-title">{system.title}</span>
                      {system.description && (
                        <span className="card-desc">
                          <RichText>{system.description}</RichText>
                        </span>
                      )}
                    </span>
                    <span className="card-meta">
                      <span className="card-arrow" aria-hidden="true">
                        →
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
              {types.map((type) => {
                /*
                 * Bus routes live in a nested registry the content loader does
                 * not read, so `getPages('bus', 'routes')` is 0 — and this card
                 * said "Routes · 0 pages" beside 1,051 of them. See
                 * getBuiltBusRoutePageCount.
                 */
                const count =
                  section.slug === 'bus' && type.slug === 'routes'
                    ? getBuiltBusRoutePageCount()
                    : getPages(section.slug, type.slug).length
                return (
                  <li key={type.slug}>
                    <Link href={type.href}>
                      <span className="card-body">
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
