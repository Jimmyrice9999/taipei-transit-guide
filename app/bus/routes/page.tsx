import Link from 'next/link'
import type { Metadata } from 'next'
import BackLink from '@/components/BackLink'
import Breadcrumbs from '@/components/Breadcrumbs'
import CardRow from '@/components/CardRow'
import HanContentSubset from '@/components/HanContentSubset'
import PageShell from '@/components/PageShell'
import { getBusRoutesByGroup } from '@/lib/bus/routes'
import { getAccent } from '@/lib/lines'

export const metadata: Metadata = {
  title: 'Bus routes',
  description: 'Browse the bus route groups currently covered by the Taipei transit guide.',
  alternates: { canonical: '/bus/routes/' },
}

export default function BusRoutesIndexPage() {
  const brownRoutes = getBusRoutesByGroup('colour-brown')
  const accent = getAccent('BR')

  return (
    <PageShell accent={accent}>
      <HanContentSubset />
      <Breadcrumbs trail={[{ label: 'Bus', href: '/bus/' }, { label: 'Routes' }]} />
      <BackLink href="/bus/" label="Bus" />
      <h1 className="page-title">Bus routes</h1>
      <p className="page-summary">Route groups are the browse key. The brown-line feeder group is the current pilot.</p>
      <ul className="card-list">
        <li>
          <Link href="/bus/routes/colour-brown/">
            <span className="card-body">
              <span className="card-title">Brown-line feeder routes</span>
              <span className="card-desc">{brownRoutes.length} routes listed under the official MRT brown-line feeder class.</span>
            </span>
            <span className="card-meta"><span className="card-arrow" aria-hidden="true">→</span></span>
          </Link>
        </li>
      </ul>
      <p className="section-desc">Other route groups remain outside this shape-test pilot.</p>
      <h2 className="section-heading">Pilot routes</h2>
      <ul className="card-list">
        {brownRoutes.map((route) => (
          <CardRow
            key={route.id}
            href={`/bus/routes/colour-brown/${route.canonicalSlug}/`}
            title={`${route.names.en} / ${route.names.zh_tw}`}
            summary="Brown-line feeder pilot route"
            line="BR"
          />
        ))}
      </ul>
    </PageShell>
  )
}
