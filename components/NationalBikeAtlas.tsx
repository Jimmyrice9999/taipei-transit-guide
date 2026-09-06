import Link from '@/components/LocaleLink'
import bikeMeta from '../data/tdx/bike/meta.json' with { type: 'json' }
import bikeStations from '../data/tdx/bike/stations.json' with { type: 'json' }
import moovo from '../data/bike/moovo.json' with { type: 'json' }
import { REGIONS } from '@/lib/regions'

type BikeState = 'snapshot' | 'operator-listed' | 'tbc' | 'not-researched'

type BikeRow = {
  state: BikeState
  countLabel: string
  note: string
  href: string | null
  sourceUrl: string | null
  sourceLabel: string | null
}

const SNAPSHOT_CITY: Record<string, string> = {
  taipei: 'Taipei',
  'new-taipei': 'NewTaipei',
  taoyuan: 'Taoyuan',
  taichung: 'Taichung',
  kaohsiung: 'Kaohsiung',
}

const OFFICIAL_YOUBIKE_AREAS = new Set([
  'taipei', 'new-taipei', 'taoyuan', 'hsinchu-city', 'hsinchu-county', 'miaoli',
  'taichung', 'chiayi-city', 'chiayi-county', 'tainan', 'kaohsiung', 'pingtung', 'taitung',
])

const SYSTEM_URL = 'https://www.youbike.com.tw/region/main/'

function snapshotRow(slug: string): BikeRow | null {
  const city = SNAPSHOT_CITY[slug]
  if (!city) return null
  const rows = bikeStations.filter((station) => station.city === city)
  const capacity = rows.reduce((sum, station) => sum + (station.capacity ?? 0), 0)
  return {
    state: 'snapshot',
    countLabel: `${rows.length.toLocaleString()} station rows · ${capacity.toLocaleString()} published docks`,
    note: 'Dated TDX Station/City snapshot; a station row is a data record, not a separate article.',
    href: `/bike/stations/${slug}/`,
    sourceUrl: 'https://tdx.transportdata.tw/',
    sourceLabel: 'TDX snapshot',
  }
}

function getBikeRow(slug: string): BikeRow {
  const snapshot = snapshotRow(slug)
  if (snapshot) return snapshot
  if (OFFICIAL_YOUBIKE_AREAS.has(slug)) {
    return {
      state: 'operator-listed',
      countLabel: 'operator service area · station snapshot TBC',
      note: 'YouBike lists this area in its current service-area and support pages, but this checkout has not yet committed a comparable static station pull for it.',
      href: '/bike/stations/',
      sourceUrl: SYSTEM_URL,
      sourceLabel: 'YouBike service area',
    }
  }
  if (slug === 'changhua' || slug === 'yunlin') {
    const system = moovo.systems.find((entry) => entry.slug === slug)
    if (system) {
      return {
        state: 'snapshot',
        countLabel: `${system.stationRows.toLocaleString()} visible MOOVO station rows`,
        note: 'Official MOOVO operator-map snapshot; this is a station-row count, not live bicycles, return spaces or published capacity.',
        href: '/bike/systems/moovo/',
        sourceUrl: system.mapUrl,
        sourceLabel: 'MOOVO operator map',
      }
    }
    return {
      state: 'tbc',
      countLabel: 'MOOVO current snapshot TBC',
      note: 'MOOVO is kept separate from YouBike. A current station feed and comparable capacity field still need a directly fetched primary source.',
      href: '/bike/',
      sourceUrl: null,
      sourceLabel: null,
    }
  }
  return {
    state: 'not-researched',
    countLabel: 'not yet researched',
    note: 'No current jurisdiction-specific public-bike source has been committed here; this is not evidence that no service exists.',
    href: '/bike/',
    sourceUrl: null,
    sourceLabel: null,
  }
}

const STATE_LABEL: Record<BikeState, string> = {
  snapshot: 'static snapshot',
  'operator-listed': 'operator-listed',
  tbc: 'current data TBC',
  'not-researched': 'not yet researched',
}

export default function NationalBikeAtlas() {
  const rows = REGIONS.map((region) => ({ region, bike: getBikeRow(region.slug) }))
  const snapshotRows = bikeStations.length
  const snapshotCapacity = bikeStations.reduce((sum, station) => sum + (station.capacity ?? 0), 0)

  return (
    <section className="coverage-ledger national-bike-ledger" aria-labelledby="national-bike-coverage">
      <div className="atlas-note">
        <strong>National public-bike atlas</strong>
        <span>All 22 jurisdictions are listed below. The committed TDX pull contains {snapshotRows.toLocaleString()} station rows and {snapshotCapacity.toLocaleString()} published dock spaces, retrieved {bikeMeta.fetchedAt.slice(0, 10)}, across five jurisdictions; the separate MOOVO operator-map snapshot adds 202 Changhua and 263 Yunlin visible station rows, retrieved {moovo.retrievedAt}.</span>
        <span>Live available-bike and return-dock values are intentionally excluded. “Operator-listed” means the official YouBike service-area page names the area; it does not turn an unpulled feed into a station count.</span>
      </div>
      <div className="coverage-ledger-heading">
        <h2 className="section-heading" id="national-bike-coverage">Jurisdiction and system coverage</h2>
        <span className="coverage-ledger-total">22 jurisdictions</span>
      </div>
      <ul className="coverage-ledger-list">
        {rows.map(({ region, bike }) => (
          <li key={region.slug} className={`coverage-ledger-item coverage-${bike.state}`}>
            <div className="coverage-ledger-heading">
              <Link href={`/regions/${region.slug}/`}>{region.title}</Link>
              <span className="coverage-status">{STATE_LABEL[bike.state]}</span>
            </div>
            <span className="coverage-ledger-original" lang="zh-Hant">{region.titleOriginal}</span>
            <strong className="bus-coverage-count">{bike.countLabel}</strong>
            <span className="coverage-ledger-note">{bike.note}</span>
            <span className="coverage-ledger-links">
              {bike.href && <Link className="coverage-ledger-link" href={bike.href}>Browse bike layer →</Link>}
              {bike.sourceUrl && (
                <a className="coverage-ledger-link" href={bike.sourceUrl} target="_blank" rel="noreferrer">
                  {bike.sourceLabel} ↗
                </a>
              )}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
