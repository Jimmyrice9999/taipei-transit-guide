import fs from 'node:fs'
import path from 'node:path'
import Link from 'next/link'
import type { Metadata } from 'next'
import BackLink from '@/components/BackLink'
import Breadcrumbs from '@/components/Breadcrumbs'
import BusGroupIcon from '@/components/BusGroupIcon'
import HanContentSubset from '@/components/HanContentSubset'
import PageShell from '@/components/PageShell'
import { getFolder } from '@/lib/content'
import { getBusRoutesByGroup, type BusRouteGroup } from '@/lib/bus/routes'
import { getBuiltBusRouteGroups } from '@/lib/bus/route-groups'
import { getAccent } from '@/lib/lines'

function hasOverlay(group: string, slug: string) {
  return fs.existsSync(path.join(process.cwd(), 'content', 'bus', 'routes', group, `${slug}.md`))
}

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
  const publishedRoutes = groups.reduce(
    (sum, g) => sum + g.routes.filter((route) => hasOverlay(g.group, route.canonicalSlug)).length,
    0,
  )
  const totalRoutes = groups.reduce((sum, g) => sum + g.routes.length, 0)

  return (
    <PageShell accent={getAccent(undefined)}>
      <HanContentSubset />
      <Breadcrumbs trail={[{ label: 'Bus', href: '/bus/' }, { label: 'Routes' }]} />
      <BackLink href="/bus/" label="Bus" />
      <h1 className="page-title">Bus routes</h1>
      <p className="page-summary">Route groups are the browse key. {publishedRoutes} route pages are published across {groups.length} group{groups.length === 1 ? '' : 's'} so far, covering {totalRoutes} normalized TDX identities.</p>
      {/* A description of a list goes above the list. This sat under it, where
          it explained what the reader had already finished reading. */}
      <p className="section-desc">Every group is municipality- or service-class scoped; a partially published group shows its current page count against the normalized TDX identities.</p>
      <ul className="card-list">
        {groups.map(({ group, folder, routes }) => (
          <li key={group}>
            <Link href={folder.href}>
              <BusGroupIcon group={group as BusRouteGroup} size={30} className="card-icon" />
              <span className="card-body">
                <span className="card-title">{folder.title}</span>
              <span className="card-desc">{(() => {
                const published = routes.filter((route) => hasOverlay(group, route.canonicalSlug)).length
                return published === routes.length
                  ? `${routes.length} route${routes.length === 1 ? '' : 's'} listed.`
                  : `${published} of ${routes.length} route pages published.`
              })()}</span>
              </span>
              <span className="card-meta"><span className="card-arrow" aria-hidden="true">→</span></span>
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  )
}
