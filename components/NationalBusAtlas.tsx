import Link from '@/components/LocaleLink'
import { getNationalBusJurisdictions, getNationalBusStructuredSummary } from '@/lib/bus/national'

const STATE_LABEL: Record<string, string> = {
  structured: 'structured snapshot',
  'not-researched': 'not yet researched',
}

export default function NationalBusAtlas() {
  const rows = getNationalBusJurisdictions()
  const summary = getNationalBusStructuredSummary()

  return (
    <>
      <div className="atlas-note">
        <strong>National bus atlas</strong>
        <span>
          All 22 jurisdictions are listed below. The current structured layer covers {summary.jurisdictionCount} jurisdiction entries and {summary.sourceRouteRecords.toLocaleString()} TDX route records plus {summary.sourceVariantRecords.toLocaleString()} source variants (route snapshot retrieved {summary.tdxRetrieved}). The separate Taipei/New Taipei normaliser contains {summary.normalizedTdxIdentities.toLocaleString()} combined route identities.
        </span>
        <span>Counts are source records or identities as labelled, not a timeless national route total. “Not yet researched” is a visible evidence gap, not a claim of no service.</span>
      </div>
      <section className="coverage-ledger national-bus-ledger" aria-labelledby="national-bus-coverage">
        <div className="coverage-ledger-heading">
          <h2 className="section-heading" id="national-bus-coverage">Jurisdiction coverage</h2>
          <span className="coverage-ledger-total">{rows.length} jurisdictions</span>
        </div>
        <ul className="coverage-ledger-list">
          {rows.map((row) => (
            <li key={row.slug} className={`coverage-ledger-item coverage-${row.state}`}>
              <div className="coverage-ledger-heading">
                <Link href={`/regions/${row.slug}/`}>{row.title}</Link>
                <span className="coverage-status">{STATE_LABEL[row.state]}</span>
              </div>
              <span className="coverage-ledger-original" lang="zh-Hant">{row.titleOriginal}</span>
              <strong className="bus-coverage-count">{row.countLabel}</strong>
              <span className="coverage-ledger-note">{row.note}</span>
              <span className="coverage-ledger-note">
                {row.retrieved ? `Retrieved ${row.retrieved} · ${row.scope}` : row.scope}
              </span>
              <span className="coverage-ledger-links">
                {row.busHref && <Link className="coverage-ledger-link" href={row.busHref}>Browse bus layer →</Link>}
                {row.sourceUrl && (
                  <a className="coverage-ledger-link" href={row.sourceUrl} target="_blank" rel="noreferrer">
                    {row.sourceLabel} source ↗
                  </a>
                )}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
