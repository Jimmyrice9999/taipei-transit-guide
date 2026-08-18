import Link from 'next/link'
import type { Metadata } from 'next'
import BackLink from '@/components/BackLink'
import Breadcrumbs from '@/components/Breadcrumbs'
import HanContentSubset from '@/components/HanContentSubset'
import PageShell from '@/components/PageShell'
import { getFolder } from '@/lib/content'
import { getBusRoutesByGroup, type BusRouteGroup } from '@/lib/bus/routes'
import { getBuiltBusRouteGroups } from '@/lib/bus/route-groups'
import { getAccent } from '@/lib/lines'

export const metadata: Metadata = {
  title: 'Bus routes',
  description: 'Browse the bus route groups currently covered by the Taipei transit guide.',
  alternates: { canonical: '/bus/routes/' },
}

export default function BusRoutesIndexPage() {
  const groups = getBuiltBusRouteGroups().map((group) => ({
    group,
    folder: getFolder(['bus', 'routes'], group),
    routes: getBusRoutesByGroup(group as BusRouteGroup),
  }))
  const totalRoutes = groups.reduce((sum, g) => sum + g.routes.length, 0)

  return (
    <PageShell accent={getAccent(undefined)}>
      <HanContentSubset />
      <Breadcrumbs trail={[{ label: 'Bus', href: '/bus/' }, { label: 'Routes' }]} />
      <BackLink href="/bus/" label="Bus" />
      <h1 className="page-title">Bus routes</h1>
      <p className="page-summary">Route groups are the browse key. {totalRoutes} routes are built across {groups.length} group{groups.length === 1 ? '' : 's'} so far, out of 1,051 normalized TDX records.</p>
      <ul className="card-list">
        {groups.map(({ group, folder, routes }) => (
          <li key={group}>
            <Link href={folder.href}>
              <span className="card-body">
                <span className="card-title">{folder.title}</span>
                <span className="card-desc">{routes.length} route{routes.length === 1 ? '' : 's'} listed.</span>
              </span>
              <span className="card-meta"><span className="card-arrow" aria-hidden="true">→</span></span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="section-desc">Other route groups (numbered series, minibus, special-shuttle, new-taipei) remain outside this build.</p>
    </PageShell>
  )
}
