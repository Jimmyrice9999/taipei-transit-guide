import RouteFilter from '@/components/RouteFilter'
import coachSnapshot from '../data/intercity-bus/routes.json' with { type: 'json' }

type CoachDirection = {
  direction: string
  departureCount: number
  firstDeparture: string
  lastDeparture: string
  firstStop: { nameEn: string; nameZh: string }
  lastStop: { nameEn: string; nameZh: string }
  serviceDays: string[]
  serviceDates: string[]
  stopCount: number
}

type CoachRoute = {
  branch: string
  directions: CoachDirection[]
  nameEn: string
  nameZh: string
  operator: string
  routeNumber: string
}

const routes = coachSnapshot.routes as CoachRoute[]
const operators = [...coachSnapshot.operators].sort((a, b) => b.routeVariantCount - a.routeVariantCount)

function formatTime(value: string) {
  if (value.length !== 6) return value
  return `${value.slice(0, 2)}:${value.slice(2, 4)}`
}

function directionSummary(direction: CoachDirection) {
  return `${direction.firstStop.nameEn} → ${direction.lastStop.nameEn} · ${direction.departureCount} departures · ${formatTime(direction.firstDeparture)}–${formatTime(direction.lastDeparture)}`
}

export default function NationalCoachIndex() {
  return (
    <section className="national-coach-index" aria-labelledby="coach-discovery">
      <div className="atlas-note">
        <strong>Static timetable discovery</strong>
        <span>The route list below is a complete dated export grouped by operator, route number, branch and published route names. It is not a live departure board, and a variant count is not the same thing as a count of unique corridor routes.</span>
        <span>Retrieved 2026-08-25 · catalogue update recorded 2026-07-01 · fares remain TBC in this snapshot.</span>
      </div>

      <h2 className="section-heading" id="coach-discovery">Find an intercity coach</h2>
      <div className="coach-summary" aria-label="Intercity coach snapshot totals">
        <div><strong>{routes.length.toLocaleString()}</strong><span>route variants</span></div>
        <div><strong>{operators.length}</strong><span>operator labels</span></div>
        <div><strong>{coachSnapshot.coverage.timetableRows.toLocaleString()}</strong><span>timetable rows</span></div>
        <div><strong>TBC</strong><span>current route fares</span></div>
      </div>

      <h3 className="section-heading coach-subheading">Operators in this export</h3>
      <ul className="coach-operator-list">
        {operators.map((operator) => (
          <li key={operator.name}>
            <span>{operator.name}</span>
            <span>{operator.routeVariantCount} variants</span>
          </li>
        ))}
      </ul>

      <div data-route-filter="">
        <RouteFilter total={routes.length} noun="route variants" />
        <ul className="coach-route-list">
          {routes.map((route, index) => (
            <li
              key={`${route.operator}-${route.routeNumber}-${route.branch}-${index}`}
              data-search={`${route.operator} ${route.routeNumber} ${route.branch} ${route.nameEn} ${route.nameZh}`}
              className="coach-route-row"
            >
              <div className="coach-route-primary">
                <strong>{route.routeNumber}{route.branch !== '0' ? ` · branch ${route.branch}` : ''}</strong>
                <span>{route.nameEn}</span>
              </div>
              <div className="coach-route-secondary" lang="zh-Hant">{route.nameZh} · {route.operator}</div>
              <div className="coach-route-directions">
                {route.directions.map((direction, directionIndex) => (
                  <span key={`${direction.direction}-${directionIndex}`}>
                    {directionSummary(direction)}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
