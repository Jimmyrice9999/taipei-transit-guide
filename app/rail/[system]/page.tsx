/**
 * A rail system landing page: /rail/metro/, /rail/cable/.
 *
 * The level that run 51 added — see the note on `Folder.kind` in lib/content.
 * A system owns lines, stations, rolling stock and depots; the section above it
 * owns the things that cut across systems. This page is the top of one railway.
 */

import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import BackLink from '@/components/BackLink'
import Breadcrumbs from '@/components/Breadcrumbs'
import CardRow from '@/components/CardRow'
import Figure from '@/components/Figure'
import HanContentSubset from '@/components/HanContentSubset'
import PageShell from '@/components/PageShell'
import PhotoCard from '@/components/PhotoCard'
import LineBadge from '@/components/LineBadge'
import References from '@/components/References'
import RichText from '@/components/RichText'
import { getImage } from '@/lib/images'
import { NEUTRAL_LINE } from '@/lib/lines'
import { STATIONS } from '@/lib/stations'
import { THSR_STATIONS } from '@/lib/thsr'
import { TRA_STATION_COUNT } from '@/lib/tra'
import { KRTC_STATION_COUNT } from '@/lib/krtc'
import { getFolderContent, getPages, getSection, getSystem, getSystems, getTypes } from '@/lib/content'

type Props = { params: Promise<{ system: string }> }

export const dynamicParams = false

/*
 * The same two types that get photographed cards on their own index get them
 * here. Matches components/TypeIndex — a fleet or a depot is a thing with a
 * photograph, and a line is a thing with a colour.
 */
const PHOTO_GRID_TYPES = new Set(['rolling-stock', 'depots'])

export function generateStaticParams() {
  return getSystems('rail').map((system) => ({ system: system.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { system } = await params
  const meta = getSystem('rail', system)
  return {
    title: `${meta.title} — ${getSection('rail').title}`,
    description: meta.description || undefined,
    alternates: { canonical: meta.href },
    openGraph: {
      title: meta.title,
      description: meta.description || undefined,
      url: meta.href,
    },
  }
}

export default async function RailSystemPage({ params }: Props) {
  const { system } = await params
  if (!getSystems('rail').some((s) => s.slug === system)) notFound()

  const sectionMeta = getSection('rail')
  const meta = getSystem('rail', system)
  const types = getTypes('rail', system)
  const folderContent = await getFolderContent(['rail'], system)
  const heroImage = meta.hero?.image ? getImage(meta.hero.image) : null

  /*
   * Stations are generated from TDX rather than written into content/, so they
   * have no type folder for the loop below to find — and only the metro has
   * them today. When TRA station data is pulled it gets its own index under its
   * own system, which is the whole reason this level exists.
   */
  const stationCount = system === 'metro'
    ? STATIONS.filter((station) => station.operator !== 'TMRT').length
    : system === 'tmrt'
      ? STATIONS.filter((station) => station.operator === 'TMRT').length
        : system === 'thsr'
          ? THSR_STATIONS.length
        : system === 'tra'
          ? TRA_STATION_COUNT
          : system === 'krtc'
            ? KRTC_STATION_COUNT
            : 0

  return (
    <PageShell accent={NEUTRAL_LINE}>
      <HanContentSubset />
      {heroImage && (
        <Figure
          image={heroImage}
          alt={meta.hero?.alt || meta.title}
          caption={meta.hero?.caption}
          priority
          className="figure page-hero"
        />
      )}
      <Breadcrumbs
        trail={[{ label: sectionMeta.title, href: sectionMeta.href }, { label: meta.title }]}
      />
      <BackLink href={sectionMeta.href} label={sectionMeta.title} />
      <h1 className="page-title">{meta.title}</h1>
      {meta.description && (
        <p className="page-summary">
          <RichText>{meta.description}</RichText>
        </p>
      )}

      {stationCount > 0 && (
        <ul className="card-list">
          <li>
            <Link href={`${meta.href}stations/`}>
              <span className="card-body">
                <span className="card-title">Stations</span>
                <span className="card-desc">
                  Every station on this network, grouped by line — generated from the
                  same registry that draws the maps.
                </span>
              </span>
              <span className="card-meta">
                {stationCount} pages
                <span className="card-arrow" aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
          </li>
        </ul>
      )}

      {types.map((type) => {
        const pages = getPages('rail', type.slug, system)
        if (pages.length === 0) return null
        const photoGrid = PHOTO_GRID_TYPES.has(type.slug)
        return (
          <section key={type.slug}>
            <h2 className="section-heading">
              {type.title}
              <Link className="all-link" href={type.href}>
                All {type.title.toLowerCase()} →
              </Link>
            </h2>
            {type.description && <p className="section-desc">{type.description}</p>}
            {photoGrid ? (
              <ul className="photo-card-grid">
                {pages.map((page) => (
                  <PhotoCard
                    key={page.slug}
                    href={page.href}
                    title={page.title}
                    summary={page.summary}
                    line={page.line}
                    operator={page.operator || undefined}
                    image={page.hero?.image ? getImage(page.hero.image) : null}
                    meta={page.line && <LineBadge code={page.line} operator={page.operator || undefined} />}
                  />
                ))}
              </ul>
            ) : (
              <ul className="card-list">
                {pages.map((page) => (
                  <CardRow
                    key={page.slug}
                    href={page.href}
                    title={page.title}
                    summary={page.summary}
                    line={page.line}
                    isLine={type.slug === 'lines'}
                  />
                ))}
              </ul>
            )}
          </section>
        )
      })}

      {/* The system's own prose, below the links — same argument as the section
          page: an index's job is to get you out of it. */}
      {folderContent.html && (
        <div className="prose section-essay" dangerouslySetInnerHTML={{ __html: folderContent.html }} />
      )}
      <References references={folderContent.references} />
    </PageShell>
  )
}
