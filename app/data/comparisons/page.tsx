import type { Metadata } from 'next'
import Link from 'next/link'
import BackLink from '@/components/BackLink'
import Breadcrumbs from '@/components/Breadcrumbs'
import LineBadge from '@/components/LineBadge'
import PageShell from '@/components/PageShell'
import TableOfContents from '@/components/TableOfContents'
import { getLinePageHref } from '@/lib/content'
import { getLineComparison, getOperatorComparison, getStationComparison } from '@/lib/data-explorer'
import { NEUTRAL_LINE } from '@/lib/lines'
import { getOperator } from '@/lib/operators'

export const metadata: Metadata = {
  alternates: { canonical: '/data/comparisons/' },
  title: 'Network comparisons',
  description: 'Accessible build-time comparisons of Taipei-region lines, operators, station structure and sourced ridership.',
}

export default function ComparisonsPage() {
  const lines = getLineComparison()
  const operators = getOperatorComparison()
  const stations = getStationComparison()

  return (
    <PageShell accent={NEUTRAL_LINE}>
      <Breadcrumbs trail={[{ label: 'Data', href: '/data/' }, { label: 'Comparisons' }]} />
      <BackLink href="/data/" label="Data" />
      <h1 className="page-title">Network comparisons</h1>
      <p className="page-summary">
        Lines by length and stations; operators by published line coverage and documented fleet-family pages; stations by structure and the latest imported ridership point.
      </p>

      <div className="page-body">
        <TableOfContents items={[
          { id: 'lines', label: 'Lines', level: 2 },
          { id: 'operators', label: 'Operators', level: 2 },
          { id: 'stations', label: 'Stations', level: 2 },
        ]} />

        <h2 className="section-heading" id="lines">Lines</h2>
        <p>
          The line table keeps the different length measures separate. Official or operator
          route length is shown beside the guide's measured geometry where both exist; the
          measured value is not substituted for the published one. Ridership is the latest
          point imported for that line from an operator dataset, so an empty cell means the
          checked source does not publish a line total rather than that the line carries no
          passengers.
        </p>
        <div className="wide table-scroll compare" tabIndex={0}>
          <table className="comparison-table">
            <caption className="sr-only">Comparison of lines by stations, length and ridership</caption>
            <thead><tr><th scope="col">Line</th><th scope="col" className="num">Stations</th><th scope="col" className="num">Published km</th><th scope="col" className="num">Measured km</th><th scope="col" className="num">Run min</th><th scope="col" className="num">Latest line ridership</th></tr></thead>
            <tbody>
              {lines.map((row) => (
                <tr key={row.line.key}>
                  <th scope="row"><LineBadge code={row.line.code} operator={row.line.operator} /> {getLinePageHref(row.line.code, row.line.operator) ? <Link href={getLinePageHref(row.line.code, row.line.operator)!}>{row.line.name}</Link> : row.line.name}</th>
                  <td className="num">{row.stations || 'TBC'}</td>
                  <td className="num">{row.lengthKm?.toFixed(2) ?? 'TBC'}</td>
                  <td className="num">{row.measuredKm?.toFixed(2) ?? 'TBC'}</td>
                  <td className="num">{row.travelTimeMin ?? 'TBC'}</td>
                  <td className="num">{row.ridership}{row.ridershipPeriod && <span className="table-subtext">{row.ridershipPeriod}</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="section-heading" id="operators">Operators</h2>
        <p>
          This is an evidence boundary, not an estimate of the companies' complete fleets.
          “Fleet-family pages” counts the researched rolling-stock records currently in the
          metro system folder, while line and station counts come from the namespaced station
          registry. Individual-set allocations, current depot rosters and some light-rail
          vehicle details remain TBC where the published primary sources do not provide them.
        </p>
        <div className="wide table-scroll compare" tabIndex={0}>
          <table className="comparison-table">
            <caption className="sr-only">Comparison of operators by lines, stations and documented fleet-family pages</caption>
            <thead><tr><th scope="col">Operator</th><th scope="col" className="num">Lines</th><th scope="col" className="num">Stations</th><th scope="col" className="num">Fleet-family pages</th><th scope="col">Lines represented</th></tr></thead>
            <tbody>
              {operators.map((row) => {
                const operator = getOperator(row.code)
                return (
                  <tr key={row.code}>
                    <th scope="row">{operator?.href ? <Link href={operator.href}>{row.name}</Link> : row.name} <code>{row.code}</code></th>
                    <td className="num">{row.lineCount}</td>
                    <td className="num">{row.stationCount}</td>
                    <td className="num">{row.fleetFamilyPages || 'TBC'}</td>
                    <td>{row.lines || 'TBC'}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <h2 className="section-heading" id="stations">Stations</h2>
        <p>
          Station depth is the sourced structure classification in the station overlay, not
          a visual inference from coordinates. Ridership and rank use each station's latest
          imported period and rank only within its own line. The table keeps the full record
          available without JavaScript, and TBC rows remain in place instead of disappearing
          from a comparison that would otherwise imply complete coverage.
        </p>
        <div className="wide table-scroll compare" tabIndex={0}>
          <table className="comparison-table station-comparison">
            <caption className="sr-only">Comparison of stations by structure and latest ridership</caption>
            <thead><tr><th scope="col">Station</th><th scope="col">Line</th><th scope="col">Structure</th><th scope="col" className="num">Latest ridership</th><th scope="col" className="num">Line rank</th></tr></thead>
            <tbody>
              {stations.map((row) => (
                <tr key={`${row.station.operator}:${row.station.code}`}>
                  <th scope="row">{row.href ? <Link href={row.href}>{row.station.code} {row.station.name}</Link> : `${row.station.code} ${row.station.name}`}</th>
                  <td>{row.line ? <LineBadge code={row.line.code} operator={row.line.operator} /> : row.station.line}</td>
                  <td>{row.depth}</td>
                  <td className="num">{row.ridership}{row.period && <span className="table-subtext">{row.period}</span>}</td>
                  <td className="num">{row.rank}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageShell>
  )
}
