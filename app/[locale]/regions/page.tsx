/**
 * /regions — the geography entry point (Part 2b, Run 303).
 *
 * A reader thinking "I am going to Taichung" had no path into the site before
 * this route existed: every page lived under a mode (rail, bus, ferry, bike),
 * never under a place. This is an index over those existing pages, not a
 * second hierarchy — every link below points at a page's one canonical URL.
 */

import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackLink from '@/components/BackLink'
import PhotoCard from '@/components/PhotoCard'
import { NEUTRAL_LINE } from '@/lib/lines'
import { getImage } from '@/lib/images'
import { REGION_REGISTRY_SOURCE, REGIONS } from '@/lib/regions'
import { isLocale, withLocaleMetadata } from '@/lib/locale'
import { locale as rootLocale } from 'next/root-params'

export async function generateMetadata(): Promise<Metadata> {
  const currentLocale = await rootLocale()
  return withLocaleMetadata(isLocale(currentLocale) ? currentLocale : 'en', {
  alternates: { canonical: '/regions/' },
  title: 'Regions',
  description:
    'A 22-jurisdiction gateway to Taiwan transport coverage, with mode status and canonical links kept visible.',
  })
}

export default function RegionsPage() {
  return (
    <PageShell accent={NEUTRAL_LINE}>
      <Breadcrumbs trail={[{ label: 'Regions' }]} />
      <BackLink href="/" label="the home page" />
      <h1 className="page-title">Regions</h1>
      <p className="page-summary">
        This is the national geography cut: all 22 first-order jurisdictions,
        each with a mode ledger and links to the one canonical page for any
        system already covered. Coverage states are deliberately explicit — a
        gap is not presented as a service, and a structured snapshot is not
        inflated into editorial depth.
      </p>

      <aside className="atlas-note">
        <strong>Registry boundary</strong>
        <span>
          6 special municipalities, 13 counties and 3 cities, following the
          <a href={REGION_REGISTRY_SOURCE.url}>official government list</a>.
        </span>
      </aside>

      <div className="page-body">
        <ul className="photo-card-grid">
          {REGIONS.map((region) => (
            <PhotoCard
              key={region.slug}
              href={`/regions/${region.slug}/`}
              image={region.hero ? getImage(region.hero) : null}
              title={region.title}
              summary={region.summary}
              entityKind="region"
              meta={
                <span className="photo-card-subtitle">
                  {region.links.length} {region.links.length === 1 ? 'page' : 'pages'} · {region.modes.filter((mode) => mode.status === 'covered').length} covered modes
                </span>
              }
            />
          ))}
        </ul>
      </div>
    </PageShell>
  )
}
