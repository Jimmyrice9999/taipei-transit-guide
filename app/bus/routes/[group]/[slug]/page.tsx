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
import { getPageFromFile } from '@/lib/content'
import { getBusRoute, getBusRoutesByGroup } from '@/lib/bus/routes'
import { getAccent } from '@/lib/lines'

type Props = { params: Promise<{ group: string; slug: string }> }

const GROUP = 'colour-brown'

function overlayPath(group: string, slug: string) {
  return path.join(process.cwd(), 'content', 'bus', 'routes', group, `${slug}.md`)
}

async function readRoutePage(group: string, slug: string) {
  const route = getBusRoutesByGroup('colour-brown').find((candidate) => candidate.canonicalSlug === slug)
  const file = overlayPath(group, slug)
  if (group !== GROUP || !route || !fs.existsSync(file)) return null
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
  return getBusRoutesByGroup('colour-brown').map((route) => ({ group: GROUP, slug: route.canonicalSlug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { group, slug } = await params
  const result = await readRoutePage(group, slug)
  if (!result) notFound()
  const description = `${result.route.names.en} is a brown-line feeder route in the Taipei bus pilot.`
  return {
    title: result.route.names.en,
    description,
    alternates: { canonical: result.page.href },
    openGraph: { title: result.route.names.en, description, url: result.page.href },
  }
}

export default async function BusRoutePage({ params }: Props) {
  const { group, slug } = await params
  const result = await readRoutePage(group, slug)
  if (!result) notFound()
  const { route, page } = result
  const accent = getAccent('BR')

  return (
    <PageShell accent={accent}>
      <HanContentSubset />
      <JsonLd data={[articleSchema({ title: route.names.en, description: page.summary, path: page.href, updated: page.updated || undefined }), breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Bus', path: '/bus/' },
        { name: 'Routes', path: '/bus/routes/' },
        { name: 'Brown-line feeders', path: `/bus/routes/${GROUP}/` },
        { name: route.names.en, path: page.href },
      ])]} />
      <Breadcrumbs trail={[{ label: 'Bus', href: '/bus/' }, { label: 'Routes', href: '/bus/routes/' }, { label: 'Brown-line feeders', href: `/bus/routes/${GROUP}/` }, { label: route.names.en }]} />
      <BackLink href={`/bus/routes/${GROUP}/`} label="Brown-line feeders" />
      <article>
        <h1 className="page-title"><RichText>{page.title}</RichText></h1>
        {page.summary && <p className="page-summary"><RichText>{page.summary}</RichText></p>}
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
