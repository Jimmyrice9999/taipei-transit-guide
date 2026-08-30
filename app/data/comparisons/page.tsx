import type { Metadata } from 'next'
import Link from 'next/link'
import BackLink from '@/components/BackLink'
import Breadcrumbs from '@/components/Breadcrumbs'
import LineBadge from '@/components/LineBadge'
import PageShell from '@/components/PageShell'
import TableOfContents from '@/components/TableOfContents'
import SortableTable, { SortButton } from '@/components/SortableTable'
import { getLinePageHref } from '@/lib/content'
import { getLineComparison, getOperatorComparison, getStationComparison, getSystemComparison } from '@/lib/data-explorer'
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
  const systems = getSystemComparison()

  return (
    <PageShell accent={NEUTRAL_LINE}>
      <Breadcrumbs trail={[{ label: 'Data', href: '/data/' }, { label: 'Comparisons' }]} />
      <BackLink href="/data/" label="Data" />
      <h1 className="page-title">Network comparisons</h1>
      <p className="page-summary">
        Build-time line, operator, station and system comparisons. Every row is present without
        JavaScript; sortable headings are a client-side enhancement, and unavailable figures read TBC.
      </p>

      <div className="page-body">
        <TableOfContents items={[
          { id: 'lines', label: 'Lines', level: 2 },
          { id: 'operators', label: 'Operators', level: 2 },
          { id: 'stations', label: 'Stations', level: 2 },
          { id: 'systems', label: 'Systems', level: 2 },
        ]} />

        <h2 className="section-heading" id="lines">Lines</h2>
        <p>
          The line table keeps the different length measures separate. Official or operator
          route length is shown beside the guide's measured geometry where both exist; the
          measured value is not substituted for the published one. Ridership is the latest
          point imported for that line from an operator dataset; TBC means the checked source
          does not publish a comparable line total, not that the line carries no passengers.
        </p>
        <div className="wide table-scroll compare" tabIndex={0}>
          <SortableTable className="comparison-table" label="Lines comparison">
            <caption className="sr-only">Comparison of lines by stations, length and ridership</caption>
            <thead><tr><th scope="col" aria-sort="none"><SortButton column={0}>Line</SortButton></th><th scope="col" aria-sort="none"><SortButton column={1}>System</SortButton></th><th scope="col" className="num" aria-sort="none"><SortButton column={2} type="number">Stations</SortButton></th><th scope="col" className="num" aria-sort="none"><SortButton column={3} type="number">Published km</SortButton></th><th scope="col" className="num" aria-sort="none"><SortButton column={4} type="number">Measured km</SortButton></th><th scope="col" className="num" aria-sort="none"><SortButton column={5} type="number">Opening year</SortButton></th><th scope="col" className="num" aria-sort="none"><SortButton column={6} type="number">Run min</SortButton></th><th scope="col" className="num" aria-sort="none"><SortButton column={7} type="number">Latest line ridership</SortButton></th></tr></thead>
            <tbody>
              {lines.map((row) => (
                <tr key={row.line.key}>
                  <th scope="row" data-sort-value={row.line.name}><LineBadge code={row.line.code} operator={row.line.operator} /> {getLinePageHref(row.line.code, row.line.operator) ? <Link href={getLinePageHref(row.line.code, row.line.operator)!}>{row.line.name}</Link> : row.line.name}</th>
                  <td>{row.system}</td>
                  <td className="num" data-sort-value={row.stations || 'TBC'}>{row.stations || 'TBC'}</td>
                  <td className="num" data-sort-value={row.lengthKm ?? 'TBC'}>{row.lengthKm?.toFixed(2) ?? 'TBC'}</td>
                  <td className="num" data-sort-value={row.measuredKm ?? 'TBC'}>{row.measuredKm?.toFixed(2) ?? 'TBC'}</td>
                  <td className="num" data-sort-value={row.openingYear}>{row.openingYear}</td>
                  <td className="num" data-sort-value={row.travelTimeMin ?? 'TBC'}>{row.travelTimeMin ?? 'TBC'}</td>
                  <td className="num" data-sort-value={row.ridership}>{row.ridership}{row.ridershipPeriod && <span className="table-subtext">{row.ridershipPeriod}</span>}</td>
                </tr>
              ))}
            </tbody>
          </SortableTable>
        </div>

        <h2 className="section-heading" id="operators">Operators</h2>
        <p>
          This is an evidence boundary, not an estimate of the companies' complete fleets.
          Routes and stations come from the namespaced registry; depots count documented depot
          pages. Fleet size remains TBC because a count of researched vehicle-family pages is
          not a fleet census. Individual-set allocations and current depot rosters are not
          inferred.
        </p>
        <div className="wide table-scroll compare" tabIndex={0}>
          <SortableTable className="comparison-table" label="Operators comparison">
            <caption className="sr-only">Comparison of operators by lines, stations and documented fleet-family pages</caption>
            <thead><tr><th scope="col" aria-sort="none"><SortButton column={0}>Operator</SortButton></th><th scope="col" className="num" aria-sort="none"><SortButton column={1} type="number">Routes operated</SortButton></th><th scope="col" className="num" aria-sort="none"><SortButton column={2} type="number">Stations</SortButton></th><th scope="col" className="num" aria-sort="none"><SortButton column={3} type="number">Fleet size</SortButton></th><th scope="col" className="num" aria-sort="none"><SortButton column={4} type="number">Depots documented</SortButton></th><th scope="col">Lines represented</th></tr></thead>
            <tbody>
              {operators.map((row) => {
                const operator = getOperator(row.code)
                return (
                  <tr key={row.code}>
                    <th scope="row" data-sort-value={row.name}>{operator?.href ? <Link href={operator.href}>{row.name}</Link> : row.name} <code>{row.code}</code></th>
                    <td className="num" data-sort-value={row.lineCount}>{row.lineCount}</td>
                    <td className="num" data-sort-value={row.stationCount}>{row.stationCount}</td>
                    <td className="num" data-sort-value="TBC">TBC</td>
                    <td className="num" data-sort-value={row.depots || 'TBC'}>{row.depots || 'TBC'}</td>
                    <td>{row.lines || 'TBC'}</td>
                  </tr>
                )
              })}
            </tbody>
          </SortableTable>
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
          <SortableTable className="comparison-table station-comparison" label="Stations comparison">
            <caption className="sr-only">Comparison of stations by structure and latest ridership</caption>
            <thead><tr><th scope="col" aria-sort="none"><SortButton column={0}>Station</SortButton></th><th scope="col" aria-sort="none"><SortButton column={1}>Line</SortButton></th><th scope="col" aria-sort="none"><SortButton column={2}>Depth / structure</SortButton></th><th scope="col" className="num" aria-sort="none"><SortButton column={3} type="number">Elevation</SortButton></th><th scope="col" className="num" aria-sort="none"><SortButton column={4} type="number">Latest ridership</SortButton></th><th scope="col" className="num" aria-sort="none"><SortButton column={5} type="number">Line rank</SortButton></th></tr></thead>
            <tbody>
              {stations.map((row) => (
                <tr key={`${row.station.operator}:${row.station.code}`}>
                  <th scope="row" data-sort-value={`${row.station.code} ${row.station.name}`}>{row.href ? <Link href={row.href}>{row.station.code} {row.station.name}</Link> : `${row.station.code} ${row.station.name}`}</th>
                  <td data-sort-value={row.line?.name ?? row.station.line}>{row.line ? <LineBadge code={row.line.code} operator={row.line.operator} /> : row.station.line}</td>
                  <td>{row.depth}</td>
                  <td className="num" data-sort-value="TBC">TBC</td>
                  <td className="num" data-sort-value={row.ridership}>{row.ridership}{row.period && <span className="table-subtext">{row.period}</span>}</td>
                  <td className="num" data-sort-value={row.rank}>{row.rank}</td>
                </tr>
              ))}
            </tbody>
          </SortableTable>
        </div>

        <h2 className="section-heading" id="systems">Systems</h2>
        <p>
          The length field is the sum of the published line-length records only when every
          displayed line has one; it is not relabelled as an operator&rsquo;s official network
          KPI. Annual ridership remains TBC until a comparable annual operator series is
          committed. Monthly snapshots are not multiplied by twelve.
        </p>
        <div className="wide table-scroll compare" tabIndex={0}>
          <SortableTable className="comparison-table" label="Systems comparison">
            <caption className="sr-only">Comparison of systems by published line-length sum, stations and annual ridership</caption>
            <thead><tr><th scope="col" aria-sort="none"><SortButton column={0}>System</SortButton></th><th scope="col" className="num" aria-sort="none"><SortButton column={1} type="number">Published line-km sum</SortButton></th><th scope="col" className="num" aria-sort="none"><SortButton column={2} type="number">Stations</SortButton></th><th scope="col" className="num" aria-sort="none"><SortButton column={3} type="number">Annual ridership</SortButton></th></tr></thead>
            <tbody>
              {systems.map((row) => {
                const operator = getOperator(row.code)
                return (
                  <tr key={row.code}>
                    <th scope="row" data-sort-value={row.name}>{operator?.href ? <Link href={operator.href}>{row.name}</Link> : row.name}</th>
                    <td className="num" data-sort-value={row.publishedLineKm ?? 'TBC'}>{row.publishedLineKm?.toFixed(2) ?? 'TBC'}</td>
                    <td className="num" data-sort-value={row.stations}>{row.stations}</td>
                    <td className="num" data-sort-value="TBC">{row.annualRidership}</td>
                  </tr>
                )
              })}
            </tbody>
          </SortableTable>
        </div>
      </div>
    </PageShell>
  )
}
