import fs from 'node:fs'
import path from 'node:path'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BackLink from '@/components/BackLink'
import Breadcrumbs from '@/components/Breadcrumbs'
import BusRouteData from '@/components/BusRouteData'
import HanContentSubset from '@/components/HanContentSubset'
import PageShell from '@/components/PageShell'
import References from '@/components/References'
import RichText from '@/components/RichText'
import SpecTable from '@/components/SpecTable'
import TableOfContents from '@/components/TableOfContents'
import EditorialHeader from '@/components/EditorialHeader'
import JsonLd from '@/components/JsonLd'
import { articleSchema, breadcrumbSchema } from '@/lib/structured-data'
import { getFolder, getPageFromFile } from '@/lib/content'
import { getBusRoutesByGroup, type BusRouteGroup } from '@/lib/bus/routes'
import { getBuiltBusRouteGroups, getGroupLineCode, getGroupLineOperator } from '@/lib/bus/route-groups'
import { getAccent } from '@/lib/lines'
import { isLocale, withLocaleMetadata } from '@/lib/locale'
import { locale as rootLocale } from 'next/root-params'

type Props = { params: Promise<{ group: string; slug: string }> }

function overlayPath(group: string, slug: string) {
  return path.join(process.cwd(), 'content', 'bus', 'routes', group, `${slug}.md`)
}

async function readRoutePage(group: string, slug: string) {
  const builtGroups: string[] = getBuiltBusRouteGroups()
  if (!builtGroups.includes(group)) return null
  const route = getBusRoutesByGroup(group as BusRouteGroup).find((candidate) => candidate.canonicalSlug === slug)
  const file = overlayPath(group, slug)
  if (!route || !fs.existsSync(file)) return null
  const page = await getPageFromFile(file, {
    section: 'bus',
    type: 'routes',
    slug: `${group}/${slug}`,
    href: `/bus/routes/${group}/${slug}/`,
    relative: `content/bus/routes/${group}/${slug}.md`,
  })
  return { route, page }
}

export const dynamicParams = false

export function generateStaticParams() {
  return getBuiltBusRouteGroups().flatMap((group) =>
    getBusRoutesByGroup(group)
      .filter((route) => fs.existsSync(overlayPath(group, route.canonicalSlug)))
      .map((route) => ({ group, slug: route.canonicalSlug })),
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { group, slug } = await params
  const result = await readRoutePage(group, slug)
  if (!result) notFound()
  const folder = getFolder(['bus', 'routes'], group)
  const routeTitle = `${result.route.names.en} — ${result.route.canonicalSlug}`
  const description = `${routeTitle} is a route in the ${folder.title} group of the Taipei transit guide.`
  const currentLocale = await rootLocale()
  return withLocaleMetadata(isLocale(currentLocale) ? currentLocale : 'en', {
    title: routeTitle,
    description,
    alternates: { canonical: result.page.href },
    openGraph: { title: routeTitle, description, url: result.page.href },
  })
}

export default async function BusRoutePage({ params }: Props) {
  const { group, slug } = await params
  const currentLocale = await rootLocale()
  const locale = isLocale(currentLocale) ? currentLocale : 'en'
  const result = await readRoutePage(group, slug)
  if (!result) notFound()
  const { route, page } = result
  const folder = getFolder(['bus', 'routes'], group)
  const lineCode = getGroupLineCode(group as BusRouteGroup)
  const lineOperator = getGroupLineOperator(group as BusRouteGroup)
  const accent = getAccent(lineCode, lineOperator)
  const routeTitle = `${route.names.en} / ${route.names.zh_tw}`
  const ignoreCodes = new Set(page.stationCodeContext.ignoreCodes)
  const stationCodes = page.stationCodeContext.stationCodes
  const toc = [
    { id: 'stop-sequence', label: 'Stop sequence', level: 2 as const },
    ...page.toc,
    ...(page.references.length ? [{ id: 'references', label: 'References', level: 2 as const }] : []),
  ]

  return (
    <PageShell accent={accent}>
      <HanContentSubset />
      <JsonLd data={[articleSchema({ title: routeTitle, description: page.summary, path: page.href, updated: page.updated || undefined, locale }), breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Bus', path: '/bus/' },
        { name: 'Routes', path: '/bus/routes/' },
        { name: folder.title, path: `/bus/routes/${group}/` },
        { name: routeTitle, path: page.href },
      ], locale)]} />
      <Breadcrumbs trail={[{ label: 'Bus', href: '/bus/' }, { label: 'Routes', href: '/bus/routes/' }, { label: folder.title, href: `/bus/routes/${group}/` }, { label: route.names.en }]} />
      <BackLink href={`/bus/routes/${group}/`} label={folder.title} />
      <article>
        {/* badges={false}: a bus route number that looks like a station code is
            not one — see the note on `badges` in components/RichText. */}
        <EditorialHeader
          eyebrow={`Bus route · ${folder.title}`}
          updated={page.updated || undefined}
          title={<RichText badges={false} ignoreCodes={ignoreCodes} stationCodes={stationCodes}>{page.title}</RichText>}
          summary={page.summary ? <RichText badges={false} ignoreCodes={ignoreCodes} stationCodes={stationCodes}>{page.summary}</RichText> : undefined}
        />
        <div className="page-grid no-spine">
          <div className="page-main">
            <BusRouteData
              route={route}
              line={accent}
              references={page.references}
              href={page.href}
              ignoreCodes={ignoreCodes}
              stationCodes={stationCodes}
              contents={<TableOfContents items={toc} />}
            />
            <div className="prose" dangerouslySetInnerHTML={{ __html: page.html }} />
            <SpecTable specs={page.specs} references={page.references} ignoreCodes={ignoreCodes} stationCodes={stationCodes} />
            {/* badges={false}: see the note on References' own badges prop —
                a route's colour+number label is frequently a different,
                unrelated real station's code. */}
            <References references={page.references} badges={false} ignoreCodes={ignoreCodes} stationCodes={stationCodes} />
            {page.updated && <p className="page-updated">Last updated: {page.updated}</p>}
          </div>
        </div>
      </article>
    </PageShell>
  )
}
