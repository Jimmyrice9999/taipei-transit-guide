import nationalSnapshot from '../data/tdx/bus/national-routes.json' with { type: 'json' }
import { REGIONS } from '@/lib/regions'

type RouteRecord = {
  id: string
  jurisdiction: string
  routeId: string
  routeUid: string
  sourceCity: string
  name: { en: string; zh: string }
  departure: { en: string; zh: string }
  destination: { en: string; zh: string }
  operatorIds: string[]
  operatorNames: string[]
  subRouteCount: number | null
  sourceUpdated: string | null
}

const routes = nationalSnapshot.routes as RouteRecord[]
const regionNames = new Map(REGIONS.map((region) => [region.slug, region.title]))

type OperatorRow = {
  key: string
  id: string
  name: string
  sourceCity: string
  routeCount: number
}

const operatorMap = new Map<string, OperatorRow>()
for (const route of routes) {
  route.operatorIds.forEach((id, index) => {
    const key = `${route.sourceCity}:${id}`
    const existing = operatorMap.get(key)
    if (existing) {
      existing.routeCount += 1
      return
    }
    operatorMap.set(key, {
      key,
      id,
      name: route.operatorNames[index] || 'TDX name TBC',
      sourceCity: route.sourceCity,
      routeCount: 1,
    })
  })
}
const operators = Array.from(operatorMap.values()).sort((a, b) => b.routeCount - a.routeCount || a.name.localeCompare(b.name))

const byJurisdiction = REGIONS.map((region) => ({
  region,
  routes: routes.filter((route) => route.jurisdiction === region.slug),
})).filter(({ routes: jurisdictionRoutes }) => jurisdictionRoutes.length > 0)

function displayDate(value: string | null) {
  return value ? value.slice(0, 10) : 'TBC'
}

export default function NationalBusRouteDirectory() {
  return (
    <section className="national-bus-route-directory" aria-labelledby="national-bus-route-directory">
      <div className="coverage-ledger-heading">
        <h2 className="section-heading" id="national-bus-route-directory">Route discovery</h2>
        <span className="coverage-ledger-total">{routes.length.toLocaleString()} records</span>
      </div>
      <p className="atlas-note">
        <strong>Static TDX route directory</strong>
        <span>Each row is one route record returned by the dated `Bus/Route/City` snapshot. RouteUID, source city, operator labels and source update dates stay visible; a record is not silently promoted to a timeless unique-route or live-departure claim.</span>
        <span>Open a jurisdiction to browse its records. Stop sequences, fares and live vehicle positions remain separate datasets and are not implied by this route-only directory.</span>
      </p>
      <details className="national-bus-operator-signals">
        <summary>
          <span>Operator signals</span>
          <span>{operators.length.toLocaleString()} source-city/operator pairs</span>
        </summary>
        <p className="section-note">These rows are associations in the dated TDX route snapshot, namespaced by source city and operator ID. They are discovery signals, not a replacement for a researched canonical operator page or proof that an ID is globally unique.</p>
        <div className="table-scroll">
          <table>
            <caption>Operator associations in the national TDX route snapshot</caption>
            <thead>
              <tr>
                <th scope="col">Operator</th>
                <th scope="col">Source city</th>
                <th scope="col">Route records</th>
              </tr>
            </thead>
            <tbody>
              {operators.map((operator) => (
                <tr key={operator.key}>
                  <th scope="row">{operator.name}</th>
                  <td>{operator.sourceCity} · ID {operator.id}</td>
                  <td>{operator.routeCount.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
      <div className="national-bus-route-directory-groups">
        {byJurisdiction.map(({ region, routes: jurisdictionRoutes }) => (
          <details key={region.slug} className="national-bus-route-group">
            <summary>
              <span>{region.title}</span>
              <span>{jurisdictionRoutes.length.toLocaleString()} records</span>
            </summary>
            <div className="table-scroll">
              <table>
                <caption>{region.title} route records from the national TDX snapshot</caption>
                <thead>
                  <tr>
                    <th scope="col">Route</th>
                    <th scope="col">Endpoints</th>
                    <th scope="col">Operator</th>
                    <th scope="col">Variants</th>
                    <th scope="col">Source update</th>
                  </tr>
                </thead>
                <tbody>
                  {jurisdictionRoutes.map((route) => (
                    <tr key={route.id}>
                      <th scope="row">
                        <span>{route.name.en || route.routeId}</span>
                        {route.name.zh && <small lang="zh-Hant">{route.name.zh}</small>}
                        <small>{route.routeUid}</small>
                      </th>
                      <td>
                        <span>{route.departure.en || route.departure.zh || 'TBC'}</span>
                        <span className="route-directory-arrow" aria-hidden="true">→</span>
                        <span>{route.destination.en || route.destination.zh || 'TBC'}</span>
                      </td>
                      <td>{route.operatorNames.length > 0 ? route.operatorNames.join('; ') : 'TBC'}</td>
                      <td>{route.subRouteCount ?? 'TBC'}</td>
                      <td>{displayDate(route.sourceUpdated)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        ))}
      </div>
      <p className="section-note">The jurisdiction labels above use the site registry; route values are not merged across city/county source boundaries. {regionNames.size} registry jurisdictions are available to the atlas, and only jurisdictions with route records are expanded here.</p>
    </section>
  )
}
