import Link from '@/components/LocaleLink'

const AIR_SURFACES = [
  { title: 'Penghu', original: 'Penghu Aviation Station', href: '/air/airports/penghu/', note: 'Dated island flight snapshot and air–sea ground links' },
  { title: 'Main-island hubs', original: '臺灣本島主要機場', href: '/air/airports/main-island-hubs/', note: 'Airport nodes and ground-transport context' },
  { title: 'Kaohsiung', original: '高雄國際機場', href: '/air/airports/kaohsiung/', note: 'Airport, rail, metro and bus context' },
  { title: 'Hualien', original: '花蓮航空站', href: '/air/airports/hualien/', note: 'Dated east-coast flight families and ground-access evidence' },
  { title: 'Outlying-island airports', original: '離島機場', href: '/air/airports/outlying-islands/', note: 'Penghu, Kinmen, Matsu, Lanyu and Green Island' },
  { title: 'Domestic carriers', original: '國內航線航空公司', href: '/air/operators/domestic-carriers/', note: 'UNI Air, Mandarin Airlines and dated route context' },
]

export default function NationalAirAtlas() {
  return (
    <section className="coverage-ledger national-mode-ledger" aria-labelledby="national-air-coverage">
      <div className="atlas-note">
        <strong>Domestic aviation atlas</strong>
        <span>Airports are treated as multimodal public-network nodes. Route families and carrier statements remain dated; this is not an airline directory.</span>
      </div>
      <div className="coverage-ledger-heading">
        <h2 className="section-heading" id="national-air-coverage">Airport and route-family surfaces</h2>
        <span className="coverage-ledger-total">6 canonical surfaces</span>
      </div>
      <ul className="coverage-ledger-list mode-atlas-list">
        {AIR_SURFACES.map((surface) => (
          <li key={surface.href} className="coverage-ledger-item coverage-snapshot">
            <div className="coverage-ledger-heading">
              <Link href={surface.href}>{surface.title}</Link>
              <span className="coverage-status">reference page</span>
            </div>
            <span className="coverage-ledger-original" lang="zh-Hant">{surface.original}</span>
            <strong className="bus-coverage-count">{surface.note}</strong>
            <span className="coverage-ledger-note">Ground links are stated only where the airport or operator source supports them.</span>
            <span className="coverage-ledger-links"><Link className="coverage-ledger-link" href={surface.href}>Open aviation surface →</Link></span>
          </li>
        ))}
      </ul>
    </section>
  )
}
