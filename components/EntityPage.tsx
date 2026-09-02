/**
 * One content entity, rendered: /rail/metro/lines/wenhu-line/, /bike/history/youbike/.
 *
 * Three columns: the spine, the prose, the platform panel. The spine's variant
 * changes with the page type — a line page gets the full strip map, everything
 * else gets a narrow marker rail — because a line and a fleet have genuinely
 * different information shapes and should not be laid out identically.
 *
 * ── Why this is a component and not a route ─────────────────────────────────
 *
 * Run 51 gave the Rail section a system level, so the same entity page is now
 * reached down two different route shapes: `/<section>/<type>/<slug>/` for the
 * sections that have no systems, and `/rail/<system>/<type>/<slug>/` for the
 * ones that do. Both are thin route files that resolve their params and hand
 * them here. Copying 400 lines of layout into the second route would have
 * guaranteed the two drifted apart, which is precisely the failure this
 * project keeps finding in itself.
 */
import Link from '@/components/LocaleLink'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackLink from '@/components/BackLink'
import CiteMark from '@/components/CiteMark'
import ElevationProfile from '@/components/ElevationProfile'
import HanContentSubset from '@/components/HanContentSubset'
import NumberingLadder from '@/components/NumberingLadder'
import FactsPanel from '@/components/FactsPanel'
import Figure from '@/components/Figure'
import FormationDiagram from '@/components/FormationDiagram'
import PageShell from '@/components/PageShell'
import References from '@/components/References'
import RidershipPanel from '@/components/RidershipPanel'
import ThsrRidershipPanel from '@/components/ThsrRidershipPanel'
import RichText from '@/components/RichText'
import RouteMap from '@/components/RouteMap'
import SpecTable from '@/components/SpecTable'
import TableOfContents from '@/components/TableOfContents'
import NearStation from '@/components/NearStation'
import Spine, { type DepotMark } from '@/components/Spine'
import StationBadge from '@/components/StationBadge'
import SpineSync from '@/components/SpineSync'
import EntityIcon, { getEntityIconKind } from '@/components/EntityIcon'
import { getLineGeometry, measureLine, type Point } from '@/lib/geometry'
import { branchTint, getAccent } from '@/lib/lines'
import { getLineTrack } from '@/lib/network'
import { getLineStations, getStation, getStationHref, resolveSpine } from '@/lib/stations'
import { getPage, getPages, getSection, getSystem, getType, isArticlePage } from '@/lib/content'
import { getImage } from '@/lib/images'
import { collapseMajorSections } from '@/lib/collapsible-html'
import JsonLd from '@/components/JsonLd'
import { articleSchema, breadcrumbSchema } from '@/lib/structured-data'
import { isLocale, withLocaleMetadata } from '@/lib/locale'
import { locale as rootLocale } from 'next/root-params'


/** Which entity to render. `system` is '' for a section that has no systems. */
export type EntityRef = {
  section: string
  system?: string
  type: string
  slug: string
}

export async function entityMetadata({
  section,
  system = '',
  type,
  slug,
}: EntityRef): Promise<Metadata> {
  const page = await getPage(section, type, slug, system)
  const accent = getAccent(page.line, page.operator)

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

  const currentLocale = await rootLocale()
  return withLocaleMetadata(isLocale(currentLocale) ? currentLocale : 'en', {
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
  })
}

/**
 * Depot junctions for the strip map, taken from the depot pages' own `spine:`
 * frontmatter. No new data: a depot already declares where it meets the line.
 */
function depotMarks(section: string, system: string, lineCode: string): DepotMark[] {
  return getPages(section, 'depots', system)
    .filter((page) => page.line === lineCode && page.spine.trim())
    .map((page) => ({ at: page.spine.trim().toUpperCase(), title: page.title, href: page.href }))
}

export default async function EntityPage({ section, system = '', type, slug }: EntityRef) {
  const currentLocale = await rootLocale()
  const locale = isLocale(currentLocale) ? currentLocale : 'en'
  const page = await getPage(section, type, slug, system, locale).catch(() => null)
  if (!page) notFound()
  const codeContext = {
    ignoreCodes: new Set(page.stationCodeContext.ignoreCodes),
    stationCodes: page.stationCodeContext.stationCodes,
  }
  const typeMeta = getType(section, type, system)
  const systemMeta = system ? getSystem(section, system) : null
  const accent = getAccent(page.line, page.operator)
  const entityKind = getEntityIconKind(section, type)
  const articlePage = isArticlePage(section, type, slug)
  const stationCodeFact =
    type === 'stations'
      ? page.facts.find((fact) =>
          ['Station code', 'Light rail code', 'TDX station code', 'Station ID'].includes(fact.label),
        )
      : undefined
  const stationCode = stationCodeFact?.value || (type === 'stations' ? page.slug : '')
  const registeredStation = stationCode ? getStation(stationCode, page.operator) : undefined
  const nearStationSubject =
    type === 'stations'
      ? {
          code: registeredStation?.code ?? stationCode,
          operator: registeredStation?.operator ?? page.operator ?? system.toUpperCase(),
          line:
            registeredStation?.line ??
            page.line ??
            stationCode.match(/^[A-Za-z]+/)?.[0]?.toUpperCase() ??
            '',
          interchange: registeredStation?.interchange ?? [],
          sources: registeredStation?.sources ?? [],
          research: registeredStation?.research ?? null,
          exits: registeredStation?.exits ?? null,
        }
      : null
  const interchangeFact =
    type === 'stations'
      ? page.facts.find((fact) =>
          /^(Named transfers|Nearest MRT station|Interchange|Rail interchanges)$/i.test(fact.label),
        )
      : undefined
  const exitFact =
    type === 'stations'
      ? page.facts.find((fact) => /^(Exits|Exit count|Street exits|Access)$/i.test(fact.label))
      : undefined
  const toc = [
    ...page.toc,
    ...(type === 'lines' && (page.line || page.operator === 'THSR')
      ? [{ id: 'ridership', label: 'Ridership', level: 2 as const }]
      : []),
    ...(type === 'stations'
      ? [{ id: 'near-this-station', label: 'Near this station', level: 2 as const }]
      : []),
    ...(!articlePage && page.specs.length
      ? [{ id: 'specifications', label: 'Specifications', level: 2 as const }]
      : []),
    ...(page.references.length ? [{ id: 'references', label: 'References', level: 2 as const }] : []),
  ]

  /*
   * The hero photograph leads the page — before the title, the way a reader
   * recognises a place before they read its name. `hero.image` names a
   * pipeline image (lib/images); when it resolves, the photo opens the page
   * and the old in-flow slot renders nothing. When it does not, the
   * "photograph wanted" placeholder stays in the flow, saying what to shoot.
   */
  const heroImage = page.hero?.image ? getImage(page.hero.image) : null

  /*
   * Articles get a reading layout, not the entity grid. The spine is right on
   * an entity page because "which stretch of line" is one of its facts; beside
   * a narrative it is an unlabelled rail of ticks — decoration pretending to
   * be data — so it is not rendered at all. See ARTICLE_TYPES in lib/content.
   */
  if (articlePage) {
    /*
     * The facts strip belongs after the opening, not after the title: a
     * narrative page should begin by being read, not consulted. The rendered
     * body is split at its first <h2> — everything before it is the lede.
     * Deterministic because every article opens with prose before its first
     * section heading; if one ever does not, the whole body lands after the
     * strip and the page degrades to the old order rather than breaking.
     */
    const splitAt = page.html.indexOf('<h2')
    const lede = splitAt > 0 ? page.html.slice(0, splitAt) : ''
    const body = splitAt > 0 ? page.html.slice(splitAt) : page.html

    return (
      <PageShell accent={accent}>
      <HanContentSubset />
        <JsonLd
          data={[
            articleSchema({
              title: page.title,
              description: page.summary,
              path: page.href,
              updated: page.updated || undefined,
              locale,
            }),
            breadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: getSection(section).title, path: `/${section}/` },
              ...(systemMeta ? [{ name: systemMeta.title, path: systemMeta.href }] : []),
              { name: typeMeta.title, path: typeMeta.href },
              { name: page.title, path: page.href },
            ], locale),
          ]}
        />

        <article className="page-article">
          {heroImage && (
            <Figure
              image={heroImage}
              alt={page.hero?.alt || page.title}
              caption={page.hero?.caption}
              priority
              className="figure page-hero"
            />
          )}

          <Breadcrumbs
            trail={[
              { label: getSection(section).title, href: `/${section}/` },
              ...(systemMeta ? [{ label: systemMeta.title, href: systemMeta.href }] : []),
              { label: typeMeta.title, href: typeMeta.href },
              { label: page.title },
            ]}
          />

          <header className="article-head">
            <h1 className="page-title article-title page-title-with-icon">
              {entityKind && <EntityIcon kind={entityKind} size={34} className="page-title-icon" />}
              <span className="page-title-text">
                <RichText operator={page.operator || undefined} {...codeContext}>{page.title}</RichText>
              </span>
            </h1>
            {page.summary && (
              <p className="article-standfirst">
                <RichText operator={page.operator || undefined} {...codeContext}>{page.summary}</RichText>
              </p>
            )}
          </header>

          {lede && <div className="prose article-lede" dangerouslySetInnerHTML={{ __html: lede }} />}

          <FactsPanel
            facts={page.facts}
            line={accent}
            title={page.title}
            references={page.references}
            href={page.href}
            operator={page.operator || undefined}
            {...codeContext}
          />

          <TableOfContents items={toc} />

          <div
            className="prose article-body"
            dangerouslySetInnerHTML={{ __html: collapseMajorSections(body) }}
          />

          <References references={page.references} {...codeContext} />

          {page.updated && <p className="page-updated">Last updated: {page.updated}</p>}
        </article>
      </PageShell>
    )
  }

  const stations = getLineStations(page.line, page.operator)
  const hasSpine = stations.length > 0
  const variant = type === 'lines' ? 'map' : 'rail'

  /*
   * ── Run 11: the same false claim, on six more depot pages ────────────────
   * `resolveSpine('')` returns EVERY station on the line — the right default
   * for a fleet, which does work the whole line, and a false statement about a
   * depot, which joins it at one place. Six depot pages declare no `spine:`,
   * so all six lit every tick on the rail and printed, in the page furniture:
   *
   *     Joins the line at R02, R03, R04, … R28, R22A
   *
   * Twenty-seven junctions for one depot. This is the third time this exact
   * class of bug has been found here — a small false claim in the furniture,
   * on the depot pages, next to prose about a depot drawn in the wrong place —
   * and the first two were caught by looking at a screenshot. This one was
   * caught by auditing station codes rendered without a badge, which is what
   * twenty-seven of them in a row look like.
   *
   * A depot with no declared junction now marks nothing and says nothing. Not
   * knowing where it joins is the truth; drawing it everywhere is not.
   */
  const declaresSpine = page.spine.trim().length > 0
  const marked =
    hasSpine && (declaresSpine || type !== 'depots')
      ? resolveSpine(page.spine, page.line, page.operator)
      : new Set<string>()

  /*
   * The rail key states the page subject's relationship to the line, and that
   * relationship differs by type: a fleet serves stations, a depot joins the
   * line at one. The audit that added this found "Serves 1 of 24 stations" on
   * the depot pages — a small false claim, in the furniture, on the exact
   * pages whose Corrections sections discuss a misplaced depot junction.
   */
  const railNote =
    type === 'depots'
      ? marked.size > 0
        ? (
            <>
              Joins the line at{' '}
              {[...marked].map((code, i) => (
                <span key={code}>
                  {i > 0 && ', '}
                  <StationBadge code={code} operator={page.operator || undefined} />
                </span>
              ))}
            </>
          )
        : /*
           * Six of the eight depots do not say where they meet their line, and
           * with `marked` now empty the default key would read "Serves 0 of 28
           * stations" — which is both wrong and worse than the claim it
           * replaced. A TBC about a fact is this site's standard answer to not
           * knowing something, so that is what it says.
           */
          'Junction with the line not recorded'
      : /*
         * A systems page does not serve stations either — it describes
         * something about them. Same class of small false claim in the page
         * furniture that run 4.1 found on the depot pages, caught this time
         * before shipping rather than after.
         */
        type === 'systems' && marked.size > 0
        ? marked.size === stations.length
          ? `Concerns all ${stations.length} stations`
          : `Concerns ${marked.size} of ${stations.length} stations`
        : undefined

  /*
   * The geographic map goes on line pages only. On a fleet or depot page it
   * would be the same picture with nothing about that page marked on it — the
   * marker rail already says which stretch of line is relevant.
   */
  const geometry = type === 'lines' ? getLineGeometry(page.line, page.operator) : null
  const track = geometry
    ? getLineTrack(accent.code, accent.operator)
    : { trunk: [], branch: [], branchStations: [] }
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
        lines={[
          {
            code: accent.code,
            name: accent.name,
            colour: accent.map,
            /* Trunk and branch drawn apart — on this page more than anywhere
               else, because a line page's map is the picture of that line, and
               Xinbeitou drawn in Tamsui red made a shuttle look like the main
               line running to two Tamsuis. */
            paths: track.trunk,
            branchPaths: track.branch,
            branchColour: branchTint(accent),
            branchEdge: accent.ink,
          },
        ]}
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
            href: getStationHref(s.code, s.operator) ?? undefined,
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
          `Termini and interchanges are labelled; every station has a name on hover.` +
          /* Named, not just tinted. A reader who cannot see the tint — or who is
             looking at this in print — still gets told which stations are on the
             branch, so the colour is never the only thing carrying it. */
          (track.branch.length > 0 && track.branchStations.length > 0
            ? ` The branch to ${track.branchStations
                .map((s) => s.name)
                .join(', ')} is drawn as a pale core of the line's colour inside a darker` +
              ` hairline of it: a branch of this line, not a line of its own.`
            : '')
        }
      />
    ) : null

  return (
    <PageShell accent={accent}>
      <HanContentSubset />
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
            locale,
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: getSection(section).title, path: `/${section}/` },
            ...(systemMeta ? [{ name: systemMeta.title, path: systemMeta.href }] : []),
            { name: typeMeta.title, path: typeMeta.href },
            { name: page.title, path: page.href },
          ], locale),
        ]}
      />

      {heroImage && (
        <Figure
          image={heroImage}
          alt={page.hero?.alt || page.title}
          caption={page.hero?.caption}
          priority
          className="figure page-hero"
        />
      )}

      {/*
        The full trail, restored in run 6. Run 3 collapsed it to a single
        parent link to save a line on mobile — defensible at five pages, a
        dead end at eighty. Depth returned faster than the economy paid.
      */}
      <Breadcrumbs
        trail={[
          { label: getSection(section).title, href: `/${section}/` },
          ...(systemMeta ? [{ label: systemMeta.title, href: systemMeta.href }] : []),
          { label: typeMeta.title, href: typeMeta.href },
          { label: page.title },
        ]}
      />

      <BackLink href={typeMeta.href} label={typeMeta.title} />

      <article>
        {/* The eyebrow that sat here said "Line · Wenhu Line" above an <h1>
            reading "Wenhu Line". The spine and the panel badge both carry line
            identity now, so it was the third statement of one fact. */}
        <h1 className="page-title page-title-with-icon">
          {entityKind && <EntityIcon kind={entityKind} size={34} className="page-title-icon" />}
          <span className="page-title-text">
            <RichText operator={page.operator || undefined} {...codeContext}>{page.title}</RichText>
          </span>
        </h1>
        {page.summary && (
          <p className="page-summary">
            <RichText operator={page.operator || undefined} {...codeContext}>{page.summary}</RichText>
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
                depots={variant === 'map' ? depotMarks(section, system, page.line) : []}
                railNote={railNote}
              />
            </div>
          )}

          <div className="page-main">
            {/*
              One figure, set large, above the facts panel — where a page has a
              figure that is its argument rather than one of its attributes.
              Singular by decision: see the Lead type in lib/content.
            */}
            {page.lead && (
              <div className="lead-figure">
                <p className="lead-value">
                  {page.lead.value}
                  {page.lead.unit && <span className="lead-unit">{page.lead.unit}</span>}
                  <CiteMark id={page.lead.source} references={page.references} />
                </p>
                <p className="lead-label">{page.lead.label}</p>
                {page.lead.note && <p className="lead-note">{page.lead.note}</p>}
              </div>
            )}

            {/* Spans the content width: a platform sign is a wide strip. */}
            <FactsPanel
              facts={page.facts}
              line={accent}
              title={page.title}
              references={page.references}
              href={page.href}
              operator={page.operator || undefined}
              {...codeContext}
            />

            {page.hero && !heroImage && (
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
              A named device leads the page, above the prose, because on the
              pages that carry one the diagram IS the argument and the prose
              is the explanation of it. See DEVICES in lib/content.
            */}
            {page.device === 'numbering-ladder' && (
              <NumberingLadder line={accent} stations={stations} seriesBreakAfter="BR13" />
            )}

            <TableOfContents items={toc} />

            {/*
              The Markdown body was converted to HTML at build time, including
              station badges and Chinese language tagging. React needs this
              explicit opt-in to insert raw HTML — only ever safe because the
              content is our own files in /content.
            */}
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: collapseMajorSections(page.html) }}
            />

            {type === 'lines' && page.operator === 'THSR' ? (
              <ThsrRidershipPanel />
            ) : type === 'lines' && page.line ? (
              <RidershipPanel lineCode={page.line} operator={page.operator} />
            ) : null}

            {/*
              The section drawing goes above the geographic map, because they
              answer different questions and this is the one nobody else draws:
              the map says where the line goes, the profile says what it is
              built on. Opt-in per page — see toProfile in lib/content.
            */}
            {page.profile && (
              <ElevationProfile
                line={accent}
                stations={stations}
                caption={page.profile.caption}
                label={page.profile.label}
                underground={page.profile.underground ?? undefined}
              />
            )}

            {map}

            {nearStationSubject && (
              <NearStation
                station={nearStationSubject}
                references={page.references}
                interchangeFact={interchangeFact}
                exitFact={exitFact}
              />
            )}

            <SpecTable
              specs={page.specs}
              references={page.references}
              operator={page.operator || undefined}
              {...codeContext}
            />

            {/* Last on the page, after the specs, because a reference list is
                what you check a figure against — it should sit below every
                figure it answers for, not above half of them. */}
            <References references={page.references} {...codeContext} />

            {page.updated && <p className="page-updated">Last updated: {page.updated}</p>}
          </div>
        </div>
      </article>

      {hasSpine && <SpineSync sectionStations={page.sectionStations} />}
    </PageShell>
  )
}
