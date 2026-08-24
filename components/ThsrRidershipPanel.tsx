import { THSR_RIDERSHIP } from '@/lib/thsr-ridership'

function label(period: string): string {
  const [year, month] = period.split('-')
  return `${month}/${year}`
}

function number(value: number): string {
  return new Intl.NumberFormat('en-US').format(value)
}

export default function ThsrRidershipPanel() {
  const series = THSR_RIDERSHIP.observations
  const max = Math.max(...series.map((point) => point.passengers), 1)
  const points = series
    .map((point, index) => {
      const x = 10 + (index / Math.max(series.length - 1, 1)) * 660
      const y = 174 - (point.passengers / max) * 150
      return `${x.toFixed(2)},${y.toFixed(2)}`
    })
    .join(' ')

  return (
    <section className="ridership-panel" id="ridership" aria-labelledby="thsr-ridership-heading">
      <h2 className="section-heading" id="thsr-ridership-heading">Ridership</h2>
      <p className="section-desc">
        The committed series is a dated monthly network snapshot from the Railway Bureau dataset,
        not a station sum. The latest observation is <strong>{label(series.at(-1)!.period)}</strong>:{' '}
        <strong>{number(series.at(-1)!.passengers)}</strong> passengers.
      </p>
      <figure className="ridership-chart" aria-labelledby="thsr-ridership-caption">
        <svg viewBox="0 0 680 190" role="img" aria-hidden="true" focusable="false">
          <line x1="10" x2="670" y1="174" y2="174" />
          <polyline points={points} />
          {series.map((point, index) => {
            const x = 10 + (index / Math.max(series.length - 1, 1)) * 660
            const y = 174 - (point.passengers / max) * 150
            return <circle key={point.period} cx={x} cy={y} r="3" />
          })}
        </svg>
        <figcaption id="thsr-ridership-caption">
          High-Speed Rail monthly network passengers. Exact values and retrieval date are in the table.
        </figcaption>
      </figure>
      <div className="wide table-scroll ridership-table-wrap" tabIndex={0}>
        <table className="ridership-table">
          <caption>Published High-Speed Rail monthly network passengers</caption>
          <thead>
            <tr><th scope="col">Month</th><th scope="col" className="num">Passengers</th></tr>
          </thead>
          <tbody>
            {series.map((point) => (
              <tr key={point.period}><th scope="row">{label(point.period)}</th><td className="num">{number(point.passengers)}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="ridership-source">
        <a href={THSR_RIDERSHIP.source.downloadUrl}>{THSR_RIDERSHIP.source.title}</a> · retrieved {THSR_RIDERSHIP.retrieved};{' '}
        <a href={THSR_RIDERSHIP.source.indexUrl}>dataset record</a>.
      </p>
    </section>
  )
}
