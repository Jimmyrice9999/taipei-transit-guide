/**
 * A content page: /train/lines/wenhu-line/
 *
 * Three columns: the spine, the prose, the platform panel. The spine's variant
 * changes with the page type — a line page gets the full strip map, everything
 * else gets a narrow marker rail — because a line and a fleet have genuinely
 * different information shapes and should not be laid out identically.
 */

import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import FactsPanel from '@/components/FactsPanel'
import Figure from '@/components/Figure'
import FormationDiagram from '@/components/FormationDiagram'
import PageShell from '@/components/PageShell'
import References from '@/components/References'
import RichText from '@/components/RichText'
import RouteMap from '@/components/RouteMap'
import SpecTable from '@/components/SpecTable'
import Spine, { type DepotMark } from '@/components/Spine'
import SpineSync from '@/components/SpineSync'
import { getLineGeometry, measureLine, type Point } from '@/lib/geometry'
import { getAccent } from '@/lib/lines'
import { getLineStations, getStationHref, resolveSpine } from '@/lib/stations'
import { getAllPages, getPage, getPages, getSection, getType } from '@/lib/content'
import JsonLd from '@/components/JsonLd'
import { articleSchema, breadcrumbSchema } from '@/lib/structured-data'

type Props = { params: Promise<{ section: string; type: string; slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return getAllPages().map((page) => ({
    section: page.section,
    type: page.type,
    slug: page.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section, type, slug } = await params
  const page = await getPage(section, type, slug)
  const accent = getAccent(page.line)

  /*
   * Descriptions are built from what the page actually contains, not from a
   * template with the title dropped into it.
   *
   * The `summary` is the author's own one-liner and is always the best
   * sentence available, so it leads. What follows is assembled from the page's
   * own frontmatter — the line it belongs to, the facts it lists — so a search
   * result or a shared link says something specific about this page rather
   * than repeating the site blurb 46 times.
   */
  const parts: string[] = []
  if (page.summary) parts.push(page.summary)

  if (accent.code) {
    parts.push(`On the ${accent.name} Line (${accent.code}), Taipei Metro.`)
  }

  // The two or three most identifying facts, where the page lists any.
  const identifying = page.facts
    .filter((f) => f.value && !/TBC/i.test(f.value))
    .filter((f) => /operator|opened|stations|termini|fleet|built|entered service|depot/i.test(f.label))
    .slice(0, 3)
  if (identifying.length) {
    parts.push(identifying.map((f) => `${f.label}: ${f.value}`).join('. ') + '.')
  }

  if (page.stub) parts.push('Stub entry — some figures are still unverified.')

  // Search engines truncate around 160 characters; going much beyond that
  // wastes the space rather than filling it.
  let description = parts.join(' ').replace(/\s+/g, ' ').trim()
  if (description.length > 300) description = description.slice(0, 297).trimEnd() + '…'

  return {
    title: page.title,
    description: description || undefined,
    alternates: { canonical: page.href },
    openGraph: {
      type: 'article',
      title: page.title,
      description: description || undefined,
      url: page.href,
      ...(page.updated ? { modifiedTime: page.updated } : {}),
    },
    // `card` has to be repeated here. Setting any twitter field on a page
    // replaces the inherited object rather than merging into it, so omitting it
    // silently downgraded every content page to a small thumbnail.
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: description || undefined,
    },
  }
}

/**
 * Depot junctions for the strip map, taken from the depot pages' own `spine:`
 * frontmatter. No new data: a depot already declares where it meets the line.
 */
function depotMarks(section: string, lineCode: string): DepotMark[] {
  return getPages(section, 'depots')
    .filter((page) => page.line === lineCode && page.spine.trim())
    .map((page) => ({ at: page.spine.trim().toUpperCase(), title: page.title, href: page.href }))
}

export default async function ContentPage({ params }: Props) {
  const { section, type, slug } = await params

  const exists = getAllPages().some(
    (p) => p.section === section && p.type === type && p.slug === slug,
  )
  if (!exists) notFound()

  const page = await getPage(section, type, slug)
  const typeMeta = getType(section, type)
  const accent = getAccent(page.line)

  const stations = getLineStations(page.line)
  const hasSpine = stations.length > 0
  const variant = type === 'lines' ? 'map' : 'rail'
  const marked = hasSpine ? resolveSpine(page.spine, page.line) : new Set<string>()

  /*
   * The geographic map goes on line pages only. On a fleet or depot page it
   * would be the same picture with nothing about that page marked on it — the
   * marker rail already says which stretch of line is relevant.
   */
  const geometry = type === 'lines' ? getLineGeometry(page.line) : null
  const measurement =
    geometry && stations.length > 0
      ? measureLine(
          geometry.chained,
          stations
            .filter((s) => s.lat !== null && s.lon !== null)
            .map((s) => [s.lon!, s.lat!] as Point),
        )
      : null

  const map =
    geometry && measurement && stations.length > 0 ? (
      <RouteMap
        lines={[{ code: accent.code, name: accent.name, colour: accent.map, paths: geometry.paths }]}
        stations={stations
          .filter((s) => s.lat !== null && s.lon !== null)
          .map((s, i, all) => ({
            code: s.code,
            name: s.name,
            nameZh: s.nameZh,
            lat: s.lat!,
            lon: s.lon!,
            colour: accent.map,
            isTerminus: i === 0 || i === all.length - 1,
            isInterchange: s.interchange.length > 0,
            href: getStationHref(s.code) ?? undefined,
          }))}
        /*
         * The figure quoted here used to be geometry.lengthKm — the whole
         * published alignment, which on Wenhu runs 1.38 km past the two termini
         * into depot leads and tail track. That put "26.4 km" on a page whose
         * own prose says the route length is unsettled between 25.1 and 25.7,
         * and the site's number was the outlier for a reason that had nothing
         * to do with the sources. Trimmed to the stations it reads 25.0 km.
         */
        caption={
          `The line as surveyed, from MOTC route geometry — ${measurement.revenueKm.toFixed(1)} km ` +
          `measured along the alignment from the first station to the last. ` +
          `Termini and interchanges are labelled; every station has a name on hover.`
        }
      />
    ) : null

  return (
    <PageShell accent={accent}>
      {/*
        Article, not a transit-specific type: schema.org has station types but
        nothing for a line or route, and stretching Place over a railway would
        be markup that validates and means nothing. See components/JsonLd.tsx.
      */}
      <JsonLd
        data={[
          articleSchema({
            title: page.title,
            description: page.summary,
            path: page.href,
            updated: page.updated || undefined,
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: getSection(section).title, path: `/${section}/` },
            { name: typeMeta.title, path: typeMeta.href },
            { name: page.title, path: page.href },
          ]),
        ]}
      />

      {/*
        Collapsed from the full Home > Train > Lines > Wenhu Line trail. The
        trail was encyclopedia furniture and cost a whole line on mobile; the
        parent link is the only part anyone used.
      */}
      <Link className="up-link" href={typeMeta.href}>
        ‹ {typeMeta.title}
      </Link>

      <article>
        {/* The eyebrow that sat here said "Line · Wenhu Line" above an <h1>
            reading "Wenhu Line". The spine and the panel badge both carry line
            identity now, so it was the third statement of one fact. */}
        <h1 className="page-title">
          <RichText>{page.title}</RichText>
        </h1>
        {page.summary && (
          <p className="page-summary">
            <RichText>{page.summary}</RichText>
          </p>
        )}

        <div className={`page-grid ${hasSpine ? `has-spine has-${variant}` : 'no-spine'}`}>
          {hasSpine && (
            <div className="page-spine">
              <Spine
                variant={variant}
                line={accent}
                stations={stations}
                marked={marked}
                depots={variant === 'map' ? depotMarks(section, page.line) : []}
                railVerb={type === 'history' ? 'Concerns' : 'Serves'}
              />
            </div>
          )}

          <div className="page-main">
            {/* Spans the content width: a platform sign is a wide strip. */}
            <FactsPanel
              facts={page.facts}
              line={accent}
              title={page.title}
              references={page.references}
            />

            {page.hero && (
              <Figure
                src={page.hero.src || undefined}
                alt={page.hero.alt}
                caption={page.hero.caption}
                credit={page.hero.credit}
                wanted={page.hero.wanted}
              />
            )}

            {page.stub && (
              <p className="note">
                <strong>Stub page.</strong> This entry is an outline. Figures marked{' '}
                <em>TBC</em> still need to be checked against a primary source before
                publication.
              </p>
            )}

            {/* Data, not prose — spans wider than the reading measure. */}
            {page.formation && <FormationDiagram formation={page.formation} />}

            {/*
              The Markdown body was converted to HTML at build time, including
              station badges and Chinese language tagging. React needs this
              explicit opt-in to insert raw HTML — only ever safe because the
              content is our own files in /content.
            */}
            <div className="prose" dangerouslySetInnerHTML={{ __html: page.html }} />

            {map}

            <SpecTable specs={page.specs} references={page.references} />

            {/* Last on the page, after the specs, because a reference list is
                what you check a figure against — it should sit below every
                figure it answers for, not above half of them. */}
            <References references={page.references} />

            {page.updated && <p className="page-updated">Last updated: {page.updated}</p>}
          </div>
        </div>
      </article>

      {hasSpine && <SpineSync sectionStations={page.sectionStations} />}
    </PageShell>
  )
}
