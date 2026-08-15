import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BackLink from '@/components/BackLink'
import Breadcrumbs from '@/components/Breadcrumbs'
import CardRow from '@/components/CardRow'
import HanContentSubset from '@/components/HanContentSubset'
import PageShell from '@/components/PageShell'
import RichText from '@/components/RichText'
import { getFolder, getFolderBody } from '@/lib/content'
import { getBusRoutesByGroup, type BusRouteGroup } from '@/lib/bus/routes'
import { getAccent } from '@/lib/lines'

type Props = { params: Promise<{ group: string }> }

const GROUP: BusRouteGroup = 'colour-brown'

export const dynamicParams = false

export function generateStaticParams() {
  return [{ group: GROUP }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { group } = await params
  if (group !== GROUP) notFound()
  const folder = getFolder(['bus', 'routes'], group)
  return {
    title: folder.title,
    description: folder.description || undefined,
    alternates: { canonical: folder.href },
  }
}

export default async function BusRouteGroupPage({ params }: Props) {
  const { group } = await params
  if (group !== GROUP) notFound()

  const folder = getFolder(['bus', 'routes'], group)
  const routes = getBusRoutesByGroup(GROUP)
  const body = await getFolderBody(['bus', 'routes'], group)

  return (
    <PageShell accent={getAccent('BR')}>
      <HanContentSubset />
      <Breadcrumbs trail={[{ label: 'Bus', href: '/bus/' }, { label: 'Routes', href: '/bus/routes/' }, { label: folder.title }]} />
      <BackLink href="/bus/routes/" label="Routes" />
      <h1 className="page-title"><RichText>{folder.title}</RichText></h1>
      {folder.description && <p className="page-summary"><RichText>{folder.description}</RichText></p>}
      {body && <div className="prose" dangerouslySetInnerHTML={{ __html: body }} />}
      <ul className="card-list">
        {routes.map((route) => (
          <CardRow
            key={route.id}
            href={`/bus/routes/${GROUP}/${route.canonicalSlug}/`}
            title={`${route.names.en} / ${route.names.zh_tw}`}
            summary={`${route.sourceCities.join(', ')} · ${route.operatorIds.length} current operator record${route.operatorIds.length === 1 ? '' : 's'}`}
            line="BR"
          />
        ))}
      </ul>
    </PageShell>
  )
}
