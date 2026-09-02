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
import { REGIONS } from '@/lib/regions'
import { isLocale, withLocaleMetadata } from '@/lib/locale'
import { locale as rootLocale } from 'next/root-params'

export async function generateMetadata(): Promise<Metadata> {
  const currentLocale = await rootLocale()
  return withLocaleMetadata(isLocale(currentLocale) ? currentLocale : 'en', {
  alternates: { canonical: '/regions/' },
  title: 'Regions',
  description:
    'Every mode of transport this site covers, gathered by place — Taipei and New Taipei, Taoyuan, Taichung, Kaohsiung, Tainan, Hsinchu, Chiayi and Alishan.',
  })
}

export default function RegionsPage() {
  return (
    <PageShell accent={NEUTRAL_LINE}>
      <Breadcrumbs trail={[{ label: 'Regions' }]} />
      <BackLink href="/" label="the home page" />
      <h1 className="page-title">Regions</h1>
      <p className="page-summary">
        This site is organised by mode — rail, bus, ferry, bike — because that
        is how the sources are organised. A reader going to a specific place
        wants the opposite cut. Each region below gathers every system, network
        and page that serves it, with nothing duplicated: every link goes to
        that page&rsquo;s one real address elsewhere on the site.
      </p>

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
                  {region.links.length} {region.links.length === 1 ? 'page' : 'pages'}
                </span>
              }
            />
          ))}
        </ul>
      </div>
    </PageShell>
  )
}
