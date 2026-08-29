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
import Figure from '@/components/Figure'
import RichText from '@/components/RichText'
import { NEUTRAL_LINE } from '@/lib/lines'
import { getImage } from '@/lib/images'
import { REGIONS, getRegion } from '@/lib/regions'

/**
 * The same alt/caption already written for this image where it is used as
 * the hero on that system's own section page — not reinvented here, so a
 * reader who has seen the image once gets a consistent description of it.
 */
const REGION_HERO_CAPTION: Record<string, { alt: string; caption: string }> = {
  'metro/hero': {
    alt: "A train with open doors at Zhongshan Station Platform 4, passengers boarding and waiting, the station's Chinese and English name signage overhead.",
    caption: 'A train at Zhongshan Station, Platform 4.',
  },
  'airport-mrt/hero': {
    alt: 'A blue-liveried Airport MRT train crossing an elevated viaduct at Guishan, Taoyuan, apartment towers and a road interchange below.',
    caption: 'An Airport MRT train on the elevated guideway at Guishan, on the Taoyuan side of the line.',
  },
  'tmrt/hero': {
    alt: 'A white-and-green Taichung Metro Green Line train approaching Beitun Main Station over steel track and switches.',
    caption: 'A Taichung Metro Green Line train at Beitun Main Station.',
  },
  'krtc/hero': {
    alt: 'A green-and-white Kaohsiung MRT train at a platform, red destination display partly reading "...aogang", passengers waiting on the platform.',
    caption: 'A Kaohsiung MRT train at a station platform.',
  },
  'alishan/hero': {
    alt: 'Shay geared steam locomotive No. 25, numbered disc on its smokebox door, coupled to open carriages, steam venting beneath it among trees.',
    caption: 'Shay locomotive No. 25 with a carriage rake.',
  },
}

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
    // "Taichung", "Taoyuan", "Tainan" and "Hsinchu" are already page titles
    // elsewhere (THSR station pages) — the discoverability test requires
    // every built title to be distinct, so this route's <title> disambiguates
    // even though the on-page <h1> stays the plain place name.
    title: `${region.title} region`,
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

  const heroImage = region.hero ? getImage(region.hero) : null
  const heroCaption = region.hero ? REGION_HERO_CAPTION[region.hero] : undefined

  return (
    <PageShell accent={NEUTRAL_LINE}>
      <Breadcrumbs trail={[{ href: '/regions/', label: 'Regions' }, { label: region.title }]} />
      <BackLink href="/regions/" label="all regions" />
      <h1 className="page-title">{region.title}</h1>
      <p className="page-summary">
        <RichText>{region.summary}</RichText>
      </p>

      {heroImage && (
        <Figure
          image={heroImage}
          alt={heroCaption?.alt}
          caption={heroCaption?.caption}
          className="figure page-hero"
        />
      )}

      <div className="page-body">
        <ul className="card-list">
          {region.links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <span className="card-body">
                  <span className="card-title">{link.title}</span>
                  <span className="card-desc">
                    <RichText>{link.note}</RichText>
                  </span>
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
                <li key={gap}>
                  <RichText>{gap}</RichText>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </PageShell>
  )
}
