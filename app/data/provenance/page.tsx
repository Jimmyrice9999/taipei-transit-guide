/**
 * /data/provenance — what is official, what is ours, what is unknown.
 *
 * The dataset matrix and the staleness figures are read out of the committed
 * TDX metadata rather than written by hand, so this page cannot claim the data
 * is fresher or more complete than it is.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import PageShell from '@/components/PageShell'
import Breadcrumbs from '@/components/Breadcrumbs'
import meta from '@/data/tdx/meta.json' with { type: 'json' }
import { NEUTRAL_LINE } from '@/lib/lines'
import { PROVENANCE, STATIONS } from '@/lib/stations'

export const metadata: Metadata = {
  // Without an explicit canonical this page inherits the root layout's,
  // which declares '/' — telling search engines this page is really the
  // homepage, and that it should not be indexed in its own right.
  alternates: { canonical: '/data/provenance/' },
  title: 'Data provenance',
  description:
    'What on this site comes from official open data, what is hand-researched, what is still unknown, and which datasets each of the three operators publishes.',
}

type DatasetInfo = {
  status: number
  records: number
  srcUpdatedOldest?: string | null
  srcUpdatedNewest?: string | null
}

type OperatorInfo = { name: string; datasets: Record<string, DatasetInfo> }

const OPERATORS = (meta as { operators?: Record<string, OperatorInfo> }).operators ?? {}
const NOTES = (meta as { datasetNotes?: Record<string, string> }).datasetNotes ?? {}

export default function ProvenancePage() {
  const operatorCodes = Object.keys(OPERATORS)
  const datasetNames = [...new Set(operatorCodes.flatMap((op) => Object.keys(OPERATORS[op].datasets)))]

  const allDates = operatorCodes
    .flatMap((op) => Object.values(OPERATORS[op].datasets))
    .flatMap((d) => [d.srcUpdatedOldest, d.srcUpdatedNewest])
    .filter((d): d is string => typeof d === 'string')
    .sort()

  const oldest = allDates[0]
  const newest = allDates[allDates.length - 1]

  return (
    <PageShell accent={NEUTRAL_LINE}>
      <Link className="up-link" href="/data/">
        ‹ Data
      </Link>

      <Breadcrumbs trail={[{ label: 'Data', href: '/data/' }, { label: 'Provenance' }]} />
      <h1 className="page-title">Provenance</h1>
      <p className="page-summary">
        Which facts on this site are official records, which are our own research, and
        which are still open. A reference site that will not tell you this is asking you to
        take it on trust.
      </p>

      <div className="page-body">
        {oldest && (
          <p className="note">
            <strong>The source data is not current.</strong> We retrieved it on{' '}
            {PROVENANCE.fetchedAt?.slice(0, 10)}, but the operators' own last-updated
            stamps run from <strong>{oldest}</strong>
            {newest !== oldest && <> to {newest}</>}. That is fine for a network which has
            not changed since — but a station opening after those dates will not appear
            here, and no amount of refetching changes that until the operator republishes.
          </p>
        )}

        <h2 className="section-heading">Who publishes what</h2>
        <p className="section-desc">
          Taipei's network is run by three companies, and they do not publish identical
          datasets. If you are building on this data, this is the table you want before you
          start.
        </p>

        <div className="wide table-scroll" tabIndex={0}>
          <table className="matrix-table">
            <thead>
              <tr>
                <th scope="col">Dataset</th>
                {operatorCodes.map((code) => (
                  <th scope="col" key={code} className="num">
                    {code}
                  </th>
                ))}
                <th scope="col">What it gives us</th>
              </tr>
            </thead>
            <tbody>
              {datasetNames.map((name) => (
                <tr key={name}>
                  <th scope="row">
                    <code>{name}</code>
                  </th>
                  {operatorCodes.map((code) => {
                    const info = OPERATORS[code].datasets[name]
                    const published = info && info.status === 200
                    const empty = published && info.records === 0
                    return (
                      <td key={code} className="num">
                        {!published ? (
                          <span className="absent" title="Not published by this operator">
                            —
                          </span>
                        ) : empty ? (
                          <span className="empty-set" title="Published but contains no records">
                            0
                          </span>
                        ) : (
                          info.records
                        )}
                      </td>
                    )
                  })}
                  <td className="matrix-note">{NOTES[name] ?? ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="note">
          <strong>Zero is not the same as absent.</strong> Taoyuan Metro publishes a
          transfer dataset and it is empty — the Airport MRT has no in-system interchanges
          to record. An em dash means the operator does not publish that dataset at all.
        </p>

        <h2 className="section-heading">Ours — researched, not official</h2>
        <ul>
          <li>
            <strong>Elevated or underground.</strong> TDX does not publish structure. Ours
            is compiled by hand and kept in a separate overlay file so refetching official
            data can never overwrite it — and so it is never mistaken for official data.
            Two Wenhu stations are marked <em>not established</em> rather than guessed.
          </li>
          <li>
            <strong>Everything about rolling stock and depots.</strong> Fleet sizes, car
            dimensions, capacities, depot areas and stabling capacity are not in any open
            dataset we have found. Anything marked TBC on those pages is genuinely unknown
            to us, not merely unfetched.
          </li>
          <li>
            <strong>Measured route lengths.</strong> Distances computed along the drawn
            geometry, between the first station and the last. These are ours, and they sit
            beside the operators' own figures on{' '}
            <Link href="/rail/network/">the network page</Link> rather than replacing them
            — printing both is what makes the check visible.
          </li>
        </ul>

        <h2 className="section-heading">Corrected</h2>
        <p>
          This site previously said TDX did not publish route length, because the{' '}
          <code>RouteLength</code> field on the route record is zero for every metro route.
          That was wrong, and the data was already in this repository: <code>StationOfRoute</code>{' '}
          carries a cumulative distance against every station, and the last one is the
          route's length. The Wenhu Line is 25.17 km, which settles a figure this site had
          been recording as unsourced. The lesson is the same one the line colours taught —
          check the whole record before concluding a source is silent.
        </p>

        <h2 className="section-heading">Still open</h2>
        <ul>
          <li>Which two Wenhu stations are underground.</li>
          <li>
            Where the 25.7 km Wenhu route length in circulation comes from. The official
            figure is 25.17 km and our own measurement agrees at 25.04 km; 25.7 is
            unaccounted for.
          </li>
          <li>Headways, track gauge and electrification.</li>
          <li>Station opening dates — not published in any dataset we fetch.</li>
          <li>
            Whether DORTS's published Pantone and CMYK signage values match the hex values
            on <Link href="/data/line-colours/">the colours page</Link>.
          </li>
        </ul>

        <h2 className="section-heading">Licence and reuse</h2>
        <p>
          The underlying records are Taiwan government open data, published by MOTC through
          TDX under the{' '}
          <a href="https://data.gov.tw/licenses" rel="noreferrer">
            Open Government Data Licence
          </a>
          . You may use, reproduce, distribute and adapt them, including commercially,
          provided you attribute the source.
        </p>
        <p>
          Our derived work — the contrast-checked badge and accent colours, the chained
          geometry, the structure overlay — is offered on the same terms. Attribution to
          Taipei Transit Guide is welcome but not required; attribution to MOTC is required
          by their licence, not ours.
        </p>

        <p className="page-updated">
          {STATIONS.length} stations · {operatorCodes.length} operators · retrieved{' '}
          {PROVENANCE.fetchedAt?.slice(0, 10)} · sources last updated {oldest ?? 'unknown'}
          {newest !== oldest && <> to {newest}</>}
        </p>
      </div>
    </PageShell>
  )
}
