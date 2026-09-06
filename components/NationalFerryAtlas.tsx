import Link from '@/components/LocaleLink'

const FERRY_FAMILIES = [
  { title: 'Small Three Links', original: '小三通客運', href: '/ferry/routes/small-three-links/', note: 'Cross-border scheduled passenger services' },
  { title: 'Blue Highway', original: '藍色公路', href: '/ferry/routes/blue-highway/', note: 'River and harbour passenger services' },
  { title: 'Cijin ferries', original: '旗津渡輪', href: '/ferry/routes/cijin/', note: 'Kaohsiung harbour crossing' },
  { title: 'Penghu', original: '澎湖交通船', href: '/ferry/routes/penghu/', note: 'Mainland and inter-island services' },
  { title: 'Kinmen', original: '金門海運', href: '/ferry/routes/kinmen/', note: 'Jin–Lie and Small Three Links' },
  { title: 'Matsu', original: '連江縣海運', href: '/ferry/routes/matsu/', note: 'Island, Keelung and Small Three Links services' },
  { title: 'Green Island', original: '綠島交通船', href: '/ferry/routes/green-island/', note: 'Taitung–Green Island service' },
  { title: 'Orchid Island', original: '蘭嶼交通船', href: '/ferry/routes/orchid-island/', note: 'Taitung–Orchid Island service' },
  { title: 'Donggang–Xiaoliuqiu', original: '東港—小琉球', href: '/ferry/routes/donggang-xiaoliuqiu/', note: 'Pingtung passenger-shipping family' },
]

export default function NationalFerryAtlas() {
  return (
    <section className="coverage-ledger national-mode-ledger" aria-labelledby="national-ferry-coverage">
      <div className="atlas-note">
        <strong>Passenger-shipping atlas</strong>
        <span>Route-family pages are the canonical homes for dated timetables, fares, operators and weather rules. The index does not turn a changing sailing table into a timeless frequency.</span>
      </div>
      <div className="coverage-ledger-heading">
        <h2 className="section-heading" id="national-ferry-coverage">Ferry and maritime route families</h2>
        <span className="coverage-ledger-total">9 route families</span>
      </div>
      <ul className="coverage-ledger-list mode-atlas-list">
        {FERRY_FAMILIES.map((family) => (
          <li key={family.href} className="coverage-ledger-item coverage-snapshot">
            <div className="coverage-ledger-heading">
              <Link href={family.href}>{family.title}</Link>
              <span className="coverage-status">route page</span>
            </div>
            <span className="coverage-ledger-original" lang="zh-Hant">{family.original}</span>
            <strong className="bus-coverage-count">{family.note}</strong>
            <span className="coverage-ledger-note">Read the linked page for the source date and operating qualifications.</span>
            <span className="coverage-ledger-links"><Link className="coverage-ledger-link" href={family.href}>Open route family →</Link></span>
          </li>
        ))}
      </ul>
    </section>
  )
}
