import type { Station } from '@/lib/stations'
import {
  formatRidership,
  getLineRidership,
  getNetworkRidership,
  getStationRidership,
  periodLabel,
  type RidershipPoint,
  type RidershipSource,
} from '@/lib/ridership'

type StationProps = { station: Station; lineCode?: never; operator?: never }
type LineProps = { station?: never; lineCode: string; operator?: string }
type Props = StationProps | LineProps

function sourceLink(source: RidershipSource): { href: string; label: string } {
  const latest = source.files.reduce((candidate, file) => (
    !candidate || file.period > candidate.period ? file : candidate
  ), undefined as RidershipSource['files'][number] | undefined)
  return { href: latest?.url ?? source.indexUrl, label: source.title }
}

function SourceNote({ source }: { source: RidershipSource }) {
  const link = sourceLink(source)
  return (
    <p className="ridership-source">
      <span>
        Source: <a href={link.href}>{link.label}</a> ·{' '}
        <a href={source.indexUrl}>operator statistics index</a> · retrieved {source.accessed}
      </span>
    </p>
  )
}

function RidershipChart({ id, label, series }: { id: string; label: string; series: RidershipPoint[] }) {
  const width = 680
  const height = 190
  const padX = 10
  const padY = 16
  const max = Math.max(...series.map((point) => point.value), 1)
  const min = Math.min(...series.map((point) => point.value), 0)
  const range = max - min || 1
  const points = series.map((point, index) => {
    const x = padX + (index / Math.max(series.length - 1, 1)) * (width - padX * 2)
    const y = height - padY - ((point.value - min) / range) * (height - padY * 2)
    return `${x.toFixed(2)},${y.toFixed(2)}`
  })
  return (
    <figure className="ridership-chart" aria-labelledby={`${id}-caption`}>
      <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-hidden="true" focusable="false">
        <line x1={padX} x2={width - padX} y1={height - padY} y2={height - padY} />
        <polyline points={points.join(' ')} />
        {points.map((point, index) => {
          const [cx, cy] = point.split(',')
          return <circle key={`${id}-${index}`} cx={cx} cy={cy} r="3" />
        })}
      </svg>
      <figcaption id={`${id}-caption`}>
        {label} monthly trend. Exact values and dates are in the table below; entry and exit dimensions are retained where the source publishes them.
      </figcaption>
    </figure>
  )
}

function RidershipTable({ id, series, line, network }: { id: string; series: RidershipPoint[]; line?: boolean; network?: boolean }) {
  return (
    <div className="wide table-scroll ridership-table-wrap" tabIndex={0}>
      <table className="ridership-table" id={id}>
        <caption>{line ? 'Published line ridership by month' : network ? 'Published network ridership by month' : 'Station ridership by month'}</caption>
        <thead>
          <tr>
            <th scope="col">Month</th>
            <th scope="col" className="num">{line ? 'Published total' : 'Movement'}</th>
            <th scope="col" className="num">Entry</th>
            <th scope="col" className="num">Exit</th>
            <th scope="col" className="num">Days</th>
          </tr>
        </thead>
        <tbody>
          {series.map((point) => (
            <tr key={point.period}>
              <th scope="row">{periodLabel(point.period)}</th>
              <td className="num">{formatRidership(point.value)}</td>
              <td className="num">{point.entry === undefined ? 'TBC' : formatRidership(point.entry)}</td>
              <td className="num">{point.exit === undefined ? 'TBC' : formatRidership(point.exit)}</td>
              <td className="num">{point.days ?? 'TBC'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function StationRidershipPanel({ station }: StationProps) {
  const ridership = getStationRidership(station)
  return (
    <section className="ridership-panel" id="ridership" aria-labelledby="ridership-heading">
      <h2 className="section-heading" id="ridership-heading">Ridership</h2>
      {ridership ? (
        <>
          <p className="section-desc">
            Monthly station movement is entry plus exit. The latest published month is{' '}
            <strong>{periodLabel(ridership.current.period)}</strong>:{' '}
            <strong>{formatRidership(ridership.current.value)}</strong> movements, ranked{' '}
            <strong>#{ridership.rank} of {ridership.rankTotal}</strong> stations on the {station.line} Line.
          </p>
          <dl className="ridership-summary">
            <div>
              <dt>Latest month</dt>
              <dd>{periodLabel(ridership.current.period)}</dd>
            </div>
            <div>
              <dt>Movement</dt>
              <dd>{formatRidership(ridership.current.value)}</dd>
            </div>
            <div>
              <dt>Line rank</dt>
              <dd>#{ridership.rank} / {ridership.rankTotal}</dd>
            </div>
            <div>
              <dt>Entry / exit</dt>
              <dd>{formatRidership(ridership.current.entry ?? 0)} / {formatRidership(ridership.current.exit ?? 0)}</dd>
            </div>
          </dl>
          <RidershipChart
            id={`ridership-${station.code.toLowerCase()}`}
            label={`${station.code} ${station.name}`}
            series={ridership.series}
          />
          <RidershipTable id={`ridership-table-${station.code.toLowerCase()}`} series={ridership.series} />
          {ridership.source && <SourceNote source={ridership.source} />}
        </>
      ) : (
        <p className="note">
          <strong>TBC.</strong> No station series is present in the retrieved operator data layer for this station. The page keeps the gap visible rather than deriving a figure from another source.
        </p>
      )}
    </section>
  )
}

function LineRidershipPanel({ lineCode, operator }: LineProps) {
  const ridership = getLineRidership(lineCode, operator)
  const ntmcLegacyFormats = ridership.source?.id === 'ntmc-system-reports'
  return (
    <section className="ridership-panel" id="ridership" aria-labelledby="ridership-heading">
      <h2 className="section-heading" id="ridership-heading">Ridership</h2>
      {ridership.published ? (
        <>
          <p className="section-desc">
            The operator&rsquo;s published line total for {periodLabel(ridership.current.period)} is{' '}
            <strong>{formatRidership(ridership.current.value)}</strong>. The table preserves the source&rsquo;s
            entry and exit dimensions where they are published.
            {ntmcLegacyFormats && ' NTMC’s older PDF records publish whole-system and line totals without station rows or separate entry and exit dimensions; the table leaves those cells TBC.'}
          </p>
          <dl className="ridership-summary">
            <div>
              <dt>Latest month</dt>
              <dd>{periodLabel(ridership.current.period)}</dd>
            </div>
            <div>
              <dt>Published total</dt>
              <dd>{formatRidership(ridership.current.value)}</dd>
            </div>
            <div>
              <dt>Entry / exit</dt>
              <dd>{formatRidership(ridership.current.entry ?? 0)} / {formatRidership(ridership.current.exit ?? 0)}</dd>
            </div>
          </dl>
          <RidershipChart id={`ridership-line-${lineCode.toLowerCase()}`} label={`${lineCode} Line`} series={ridership.series} />
          <RidershipTable id={`ridership-line-table-${lineCode.toLowerCase()}`} series={ridership.series} line />
          <SourceNote source={ridership.source} />
        </>
      ) : (
        <>
          <p className="note">
            <strong>TBC.</strong> {ridership.reason}
          </p>
          {ridership.source && <SourceNote source={ridership.source} />}
        </>
      )}
    </section>
  )
}

export default function RidershipPanel(props: Props) {
  return 'station' in props && props.station ? <StationRidershipPanel station={props.station} /> : <LineRidershipPanel {...props as LineProps} />
}

export function NetworkRidershipPanel() {
  const networks = getNetworkRidership()
  return (
    <section className="ridership-panel network-ridership" id="ridership" aria-labelledby="network-ridership-heading">
      <h2 className="section-heading" id="network-ridership-heading">Ridership</h2>
      <p className="section-desc">
        Monthly published operator totals make the network trend visible without pretending that
        different operators publish the same table. Values below use each operator&rsquo;s system
        convention and are not deduplicated across transfers.
      </p>
      {networks.map((network) => {
        const current = network.series[network.series.length - 1]
        const id = `network-ridership-${network.operator.toLowerCase()}`
        return (
          <section className="network-ridership-operator" key={network.operator} aria-labelledby={`${id}-heading`}>
            <h3 id={`${id}-heading`}>{network.label}</h3>
            <p>
              Latest published month: <strong>{periodLabel(current.period)}</strong>,{' '}
              <strong>{formatRidership(current.value)}</strong> system trips.
            </p>
            <RidershipChart id={id} label={network.label} series={network.series} />
            <RidershipTable id={`${id}-table`} series={network.series} network />
            <SourceNote source={network.source} />
            {network.alternate && (
              <section className="network-ridership-alternate" aria-labelledby={`${id}-alternate-heading`}>
                <h4 id={`${id}-alternate-heading`}>{network.alternate.label}</h4>
                <p>
                  TRTC publishes this longer cross-system total separately from station movement;
                  it is not merged into the station-derived network series above.
                </p>
                <RidershipChart
                  id={`${id}-alternate`}
                  label={network.alternate.label}
                  series={network.alternate.series}
                />
                <RidershipTable
                  id={`${id}-alternate-table`}
                  series={network.alternate.series}
                  network
                />
                <SourceNote source={network.alternate.source} />
              </section>
            )}
          </section>
        )
      })}
    </section>
  )
}
