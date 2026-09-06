/**
 * /regions/[slug] — one place, every mode that serves it.
 *
 * See lib/regions.ts for why this is an index, not a second hierarchy: every
 * link here is that page's one canonical URL, never a duplicate.
 */

import type { Metadata } from 'next'
import Link from '@/components/LocaleLink'
import { notFound } from 'next/navigation'
import PageShell from '@/components/PageShell'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackLink from '@/components/BackLink'
import Figure from '@/components/Figure'
import RichText from '@/components/RichText'
import TableOfContents from '@/components/TableOfContents'
import type { TocEntry } from '@/lib/markdown-plugins'
import { NEUTRAL_LINE } from '@/lib/lines'
import { getImage } from '@/lib/images'
import { REGIONS, getRegion, type CoverageStatus } from '@/lib/regions'
import { isLocale, withLocaleMetadata } from '@/lib/locale'
import { locale as rootLocale } from 'next/root-params'
import EditorialHeader from '@/components/EditorialHeader'

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

const STATUS_LABELS: Record<CoverageStatus, string> = {
  covered: 'Covered',
  structured: 'Structured',
  'no-service': 'No service registered',
  'not-applicable': 'Not applicable',
  'not-researched': 'Not yet researched',
  tbc: 'TBC',
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
  const currentLocale = await rootLocale()
  return withLocaleMetadata(isLocale(currentLocale) ? currentLocale : 'en', {
    alternates: { canonical: `/regions/${region.slug}/` },
    // "Taichung", "Taoyuan", "Tainan" and "Hsinchu" are already page titles
    // elsewhere (THSR station pages) — the discoverability test requires
    // every built title to be distinct, so this route's <title> disambiguates
    // even though the on-page <h1> stays the plain place name.
    title: `${region.title} region`,
    description: region.summary,
  })
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
  const toc: TocEntry[] = [
    { id: 'coverage-heading', level: 2, label: 'Coverage by mode' },
    { id: 'canonical-pages', level: 2, label: 'Canonical pages' },
    ...(region.gaps && region.gaps.length > 0 ? [{ id: 'not-yet-on-this-site', level: 2 as const, label: 'Not yet on this site' }] : []),
  ]

  return (
    <PageShell accent={NEUTRAL_LINE}>
      <Breadcrumbs trail={[{ href: '/regions/', label: 'Regions' }, { label: region.title }]} />
      <BackLink href="/regions/" label="all regions" />
      <EditorialHeader
        eyebrow="National registry"
        title={region.title}
        summary={<RichText>{region.summary}</RichText>}
      />

      {heroImage && (
        <Figure
          image={heroImage}
          alt={heroCaption?.alt}
          caption={heroCaption?.caption}
          className="figure page-hero"
        />
      )}

      <TableOfContents items={toc} />

      <div className="page-body">
        <section className="coverage-ledger" aria-labelledby="coverage-heading">
          <div className="section-kicker">National registry</div>
          <h2 id="coverage-heading" className="section-heading">Coverage by mode</h2>
          <ul className="coverage-ledger-list">
            {region.modes.map((mode) => (
              <li key={mode.key} className={`coverage-ledger-item coverage-${mode.status}`}>
                <span className="coverage-ledger-heading">
                  <span>{mode.label}</span>
                  <span className="coverage-status">{STATUS_LABELS[mode.status]}</span>
                </span>
                <span className="coverage-ledger-note">
                  <RichText>{mode.note}</RichText>
                  {mode.href && (
                    <Link href={mode.href} className="coverage-ledger-link">Open canonical page</Link>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <h2 id="canonical-pages" className="section-heading">Canonical pages</h2>
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
            <h2 id="not-yet-on-this-site" className="section-heading">Not yet on this site</h2>
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
