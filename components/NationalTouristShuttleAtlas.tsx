import Link from '@/components/LocaleLink'

const ROUTE_COVERAGE = [
  { title: 'Yilan County', original: '宜蘭縣', href: '/regions/yilan/', count: 5, examples: 'Jiaoxi A/B, Dongshan River, Zhuangwei Dune, Northeast Coast' },
  { title: 'Keelung City', original: '基隆市', href: '/regions/keelung/', count: 1, examples: 'T99 Coastal Keelung–Chi-chi' },
  { title: 'Taipei City', original: '臺北市', href: '/regions/taipei/', count: 1, examples: 'Small 9 Beitou–Zhuzihu' },
  { title: 'New Taipei City', original: '新北市', href: '/regions/new-taipei/', count: 5, examples: '856 Gold–Fulong, 716 Crown North Coast, 795, 965' },
  { title: 'Taoyuan City', original: '桃園市', href: '/regions/taoyuan/', count: 4, examples: 'Daxi, Xiaowulai, Shimen Reservoir, Dongyanshan' },
  { title: 'Hsinchu County', original: '新竹縣', href: '/regions/hsinchu-county/', count: 2, examples: 'Lion Head Mountain, Guanwu' },
  { title: 'Miaoli County', original: '苗栗縣', href: '/regions/miaoli/', count: 1, examples: 'Nanzhuang' },
  { title: 'Taichung City', original: '臺中市', href: '/regions/taichung/', count: 3, examples: 'Taichung Fashion City, Fenghou, Xueshan' },
  { title: 'Nantou County', original: '南投縣', href: '/regions/nantou/', count: 18, examples: 'Puli, Jiji, Sun Moon Lake, Xitou, Qingjing, Dongpu' },
  { title: 'Changhua County', original: '彰化縣', href: '/regions/changhua/', count: 2, examples: 'Lukang blessing routes' },
  { title: 'Yunlin County', original: '雲林縣', href: '/regions/yunlin/', count: 4, examples: 'Douliu–Gukeng, Beigang–Huwei, Yunxi, Caoling' },
  { title: 'Chiayi City', original: '嘉義市', href: '/regions/chiayi-city/', count: 2, examples: 'Guanglin Wo-Jia and branch' },
  { title: 'Chiayi County', original: '嘉義縣', href: '/regions/chiayi-county/', count: 5, examples: 'Ruili, Taiping, Southern Branch of the National Palace Museum, Alishan' },
  { title: 'Tainan City', original: '臺南市', href: '/regions/tainan/', count: 7, examples: 'Guanziling, West Coast, Lingbo Guantian, Tainan Airport' },
  { title: 'Pingtung County', original: '屏東縣', href: '/regions/pingtung/', count: 5, examples: 'Kenting, Dapeng Bay–Liuqiu, 185 Mountain Coffee, Shenshan' },
  { title: 'Hualien County', original: '花蓮縣', href: '/regions/hualien/', count: 6, examples: 'East Coast, Yuchang–Fengbin, Taroko, Rift Valley day tours' },
  { title: 'Taitung County', original: '臺東縣', href: '/regions/taitung/', count: 2, examples: 'Luye Rift Valley, East Coast day tour' },
  { title: 'Penghu County', original: '澎湖縣', href: '/regions/penghu/', count: 4, examples: 'Magong North Ring, Huxi, Pengnan, Airport Express' },
  { title: 'Kinmen County', original: '金門縣', href: '/regions/kinmen/', count: 9, examples: 'A–G cultural and battlefield routes' },
  { title: 'Lienchiang County', original: '連江縣', href: '/regions/lienchiang/', count: 8, examples: 'Nangan, Beigan, Juguang and Dongyin routes' },
]

export default function NationalTouristShuttleAtlas() {
  const routeCount = ROUTE_COVERAGE.reduce((total, row) => total + row.count, 0)

  return (
    <section className="coverage-ledger national-mode-ledger" aria-labelledby="national-tourist-shuttle-coverage">
      <div className="atlas-note">
        <strong>Taiwan Tourist Shuttle atlas</strong>
        <span>
          The official route selector snapshot lists {routeCount} route entries in {ROUTE_COVERAGE.length} first-order jurisdictions. It is a dated discovery surface, not a timeless route total.
        </span>
        <span>
          Hsinchu City and Kaohsiung are not shown in this selector snapshot. That is an evidence gap, not a claim that no tourist transport exists there.
        </span>
      </div>
      <div className="coverage-ledger-heading">
        <h2 className="section-heading" id="national-tourist-shuttle-coverage">Jurisdiction route coverage</h2>
        <span className="coverage-ledger-total">20 jurisdictions · 94 listed entries</span>
      </div>
      <ul className="coverage-ledger-list mode-atlas-list">
        {ROUTE_COVERAGE.map((row) => (
          <li key={row.original} className="coverage-ledger-item coverage-snapshot">
            <div className="coverage-ledger-heading">
              <Link href={row.href}>{row.title}</Link>
              <span className="coverage-status">selector snapshot</span>
            </div>
            <span className="coverage-ledger-original" lang="zh-Hant">{row.original}</span>
            <strong className="bus-coverage-count">{row.count} listed {row.count === 1 ? 'entry' : 'entries'}</strong>
            <span className="coverage-ledger-note">{row.examples}</span>
          </li>
        ))}
      </ul>
      <p className="atlas-source-note">
        Route names and the 94-entry grouping were read from the official selector on 6 September 2026. <a href="https://www.taiwantrip.com.tw/Frontend/Route/Select_p" target="_blank" rel="noreferrer">Open the official route selector ↗</a>
      </p>
    </section>
  )
}
