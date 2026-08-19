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
import JsonLd from '@/components/JsonLd'
import { articleSchema, breadcrumbSchema } from '@/lib/structured-data'
import { getFolder, getPageFromFile } from '@/lib/content'
import { getBusRoutesByGroup, type BusRouteGroup } from '@/lib/bus/routes'
import { getBuiltBusRouteGroups, getGroupLineCode } from '@/lib/bus/route-groups'
import { getAccent } from '@/lib/lines'

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
  return {
    title: routeTitle,
    description,
    alternates: { canonical: result.page.href },
    openGraph: { title: routeTitle, description, url: result.page.href },
  }
}

export default async function BusRoutePage({ params }: Props) {
  const { group, slug } = await params
  const result = await readRoutePage(group, slug)
  if (!result) notFound()
  const { route, page } = result
  const folder = getFolder(['bus', 'routes'], group)
  const accent = getAccent(getGroupLineCode(group as BusRouteGroup))
  const routeTitle = `${route.names.en} / ${route.names.zh_tw}`

  return (
    <PageShell accent={accent}>
      <HanContentSubset />
      <JsonLd data={[articleSchema({ title: routeTitle, description: page.summary, path: page.href, updated: page.updated || undefined }), breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Bus', path: '/bus/' },
        { name: 'Routes', path: '/bus/routes/' },
        { name: folder.title, path: `/bus/routes/${group}/` },
        { name: routeTitle, path: page.href },
      ])]} />
      <Breadcrumbs trail={[{ label: 'Bus', href: '/bus/' }, { label: 'Routes', href: '/bus/routes/' }, { label: folder.title, href: `/bus/routes/${group}/` }, { label: route.names.en }]} />
      <BackLink href={`/bus/routes/${group}/`} label={folder.title} />
      <article>
        {/* badges={false}: a bus route number that looks like a station code is
            not one — see the note on `badges` in components/RichText. */}
        <h1 className="page-title"><RichText badges={false}>{page.title}</RichText></h1>
        {page.summary && <p className="page-summary"><RichText badges={false}>{page.summary}</RichText></p>}
        <div className="page-grid no-spine">
          <div className="page-main">
            <BusRouteData route={route} line={accent} references={page.references} href={page.href} />
            <div className="prose" dangerouslySetInnerHTML={{ __html: page.html }} />
            <SpecTable specs={page.specs} references={page.references} />
            <References references={page.references} />
            {page.updated && <p className="page-updated">Last updated: {page.updated}</p>}
          </div>
        </div>
      </article>
    </PageShell>
  )
}
