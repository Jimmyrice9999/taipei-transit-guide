import Link from '@/components/LocaleLink'

const COMMUNITY_LAYERS = [
  { title: 'Hsinchu', original: '新竹市／新竹縣', href: '/bus/regional/hsinchu/', status: 'medical-shuttle entries in portal snapshot', note: 'Portal categories are preserved separately from ordinary route identities.' },
  { title: 'Taichung', original: '臺中市小黃公車', href: '/bus/regional/taichung/', status: '26-route reservation layer', note: 'Fixed-departure and reservation rules are published as a separate service.' },
  { title: 'Tainan', original: '臺南市小黃公車', href: '/bus/regional/tainan/', status: '52 / 49 official conflict', note: 'The Q&A table and August 2026 notice are retained as different snapshots.' },
  { title: 'Kaohsiung', original: '高雄市公車式小黃', href: '/bus/regional/kaohsiung/', status: 'taxi-bus plan', note: 'Fixed-route and reservation-labelled entries are not silently treated as the same service.' },
  { title: 'Accessible mobility', original: '復康巴士／無障礙運輸', href: '/bus/drt/', status: 'eligibility crosswalk TBC', note: 'Programme eligibility and booking rules remain distinct from open-to-all buses.' },
]

export default function NationalCommunityTransportAtlas() {
  return (
    <section className="coverage-ledger national-mode-ledger" aria-labelledby="national-community-coverage">
      <div className="atlas-note">
        <strong>Community and demand-responsive transport</strong>
        <span>Fixed-route community buses, taxi-bus services, reservation networks and access-limited programmes are kept in their own evidence layer.</span>
      </div>
      <div className="coverage-ledger-heading">
        <h2 className="section-heading" id="national-community-coverage">Current regional evidence</h2>
        <span className="coverage-ledger-total">5 evidence lanes</span>
      </div>
      <ul className="coverage-ledger-list mode-atlas-list">
        {COMMUNITY_LAYERS.map((layer) => (
          <li key={layer.href} className="coverage-ledger-item coverage-structured">
            <div className="coverage-ledger-heading">
              <Link href={layer.href}>{layer.title}</Link>
              <span className="coverage-status">{layer.status}</span>
            </div>
            <span className="coverage-ledger-original" lang="zh-Hant">{layer.original}</span>
            <strong className="bus-coverage-count">Regional primary-source layer</strong>
            <span className="coverage-ledger-note">{layer.note}</span>
            <span className="coverage-ledger-links"><Link className="coverage-ledger-link" href={layer.href}>Open evidence →</Link></span>
          </li>
        ))}
      </ul>
    </section>
  )
}
