/**
 * /regions/[slug] — one place, every mode that serves it.
 *
 * See lib/regions.ts for why this is an index, not a second hierarchy: every
 * link here is that page's one canonical URL, never a duplicate.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageShell from '@/components/PageShell'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackLink from '@/components/BackLink'
import { NEUTRAL_LINE } from '@/lib/lines'
import { REGIONS, getRegion } from '@/lib/regions'

export function generateStaticParams() {
  return REGIONS.map((region) => ({ slug: region.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const region = getRegion(slug)
  if (!region) return {}
  return {
    alternates: { canonical: `/regions/${region.slug}/` },
    title: region.title,
    description: region.summary,
  }
}

export default async function RegionPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const region = getRegion(slug)
  if (!region) notFound()

  return (
    <PageShell accent={NEUTRAL_LINE}>
      <Breadcrumbs trail={[{ href: '/regions/', label: 'Regions' }, { label: region.title }]} />
      <BackLink href="/regions/" label="all regions" />
      <h1 className="page-title">{region.title}</h1>
      <p className="page-summary">{region.summary}</p>

      <div className="page-body">
        <ul className="card-list">
          {region.links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <span className="card-body">
                  <span className="card-title">{link.title}</span>
                  <span className="card-desc">{link.note}</span>
                </span>
                <span className="card-meta">
                  <span className="card-arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {region.gaps && region.gaps.length > 0 && (
          <>
            <h2 className="section-heading">Not yet on this site</h2>
            <ul>
              {region.gaps.map((gap) => (
                <li key={gap}>{gap}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </PageShell>
  )
}
