import fs from 'node:fs'
import path from 'node:path'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BackLink from '@/components/BackLink'
import Breadcrumbs from '@/components/Breadcrumbs'
import CardRow from '@/components/CardRow'
import HanContentSubset from '@/components/HanContentSubset'
import PageShell from '@/components/PageShell'
import References from '@/components/References'
import RichText from '@/components/RichText'
import { getFolder, getFolderContent } from '@/lib/content'
import { getBusRoutesByGroup, type BusRouteGroup } from '@/lib/bus/routes'
import { getNewTaipeiRouteSubgroup, NEW_TAIPEI_SUBGROUPS } from '@/lib/bus/new-taipei'
import { getBuiltBusRouteGroups, getGroupLineCode } from '@/lib/bus/route-groups'
import { getAccent } from '@/lib/lines'

type Props = { params: Promise<{ group: string }> }

export const dynamicParams = false

function hasOverlay(group: string, slug: string) {
  return fs.existsSync(path.join(process.cwd(), 'content', 'bus', 'routes', group, `${slug}.md`))
}

export function generateStaticParams() {
  return getBuiltBusRouteGroups().map((group) => ({ group }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { group } = await params
  if (!getBuiltBusRouteGroups().includes(group as BusRouteGroup)) notFound()
  const folder = getFolder(['bus', 'routes'], group)
  return {
    title: folder.title,
    description: folder.description || undefined,
    alternates: { canonical: folder.href },
  }
}

export default async function BusRouteGroupPage({ params }: Props) {
  const { group } = await params
  if (!getBuiltBusRouteGroups().includes(group as BusRouteGroup)) notFound()

  const folder = getFolder(['bus', 'routes'], group)
  const routes = getBusRoutesByGroup(group as BusRouteGroup).filter((route) => hasOverlay(group, route.canonicalSlug))
  const folderContent = await getFolderContent(['bus', 'routes'], group)
  const lineCode = getGroupLineCode(group as BusRouteGroup)
  const subgroups = group === 'new-taipei'
    ? NEW_TAIPEI_SUBGROUPS.map((subgroup) => ({
        ...subgroup,
        routes: routes.filter((route) => getNewTaipeiRouteSubgroup(route) === subgroup.key),
      })).filter((subgroup) => subgroup.routes.length > 0)
    : []
  const routeCards = (items: typeof routes) => items.map((route) => (
    <CardRow
      key={route.id}
      href={`/bus/routes/${group}/${route.canonicalSlug}/`}
      title={`${route.names.en} / ${route.names.zh_tw}`}
      summary={`${route.sourceCities.join(', ')} Â· ${route.operatorIds.length} current operator record${route.operatorIds.length === 1 ? '' : 's'}`}
      line={lineCode}
    />
  ))

  return (
    <PageShell accent={getAccent(lineCode)}>
      <HanContentSubset />
      <Breadcrumbs trail={[{ label: 'Bus', href: '/bus/' }, { label: 'Routes', href: '/bus/routes/' }, { label: folder.title }]} />
      <BackLink href="/bus/routes/" label="Routes" />
      <h1 className="page-title"><RichText>{folder.title}</RichText></h1>
      {folder.description && <p className="page-summary"><RichText>{folder.description}</RichText></p>}
      {folderContent.html && <div className="prose" dangerouslySetInnerHTML={{ __html: folderContent.html }} />}
      <References references={folderContent.references} />
      {group === 'new-taipei' ? (
        <div className="bus-subgroups">
          {subgroups.map((subgroup) => (
            <details key={subgroup.key} className="index-disclosure subgroup-disclosure">
              <summary>
                <span className="section-heading" role="heading" aria-level={2}>{subgroup.title}</span>
                <span className="disclosure-count">{subgroup.routes.length} routes</span>
                <span className="disclosure-caret" aria-hidden="true" />
              </summary>
              <div className="index-disclosure-body">
                <p className="section-desc"><RichText>{subgroup.description}</RichText></p>
                <ul className="card-list">{routeCards(subgroup.routes)}</ul>
              </div>
            </details>
          ))}
        </div>
      ) : (
      <details className="index-disclosure">
        <summary>
          <span className="section-heading" role="heading" aria-level={2}>Routes in this group</span>
          <span className="disclosure-count">{routes.length} routes</span>
          <span className="disclosure-caret" aria-hidden="true" />
        </summary>
        <div className="index-disclosure-body">
          <ul className="card-list">
        {routes.map((route) => (
          <CardRow
            key={route.id}
            href={`/bus/routes/${group}/${route.canonicalSlug}/`}
            title={`${route.names.en} / ${route.names.zh_tw}`}
            summary={`${route.sourceCities.join(', ')} · ${route.operatorIds.length} current operator record${route.operatorIds.length === 1 ? '' : 's'}`}
            line={lineCode}
          />
        ))}
          </ul>
        </div>
      </details>
      )}
    </PageShell>
  )
}
