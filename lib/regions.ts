/**
 * The geography axis: one canonical gateway for each of Taiwan's 22
 * first-order jurisdictions. This is an index, not a second content tree.
 * Links always point to existing mode/system pages. Coverage statuses describe
 * the guide's evidence layer, not an assertion that a service does not exist.
 */

export type RegionLink = { title: string; href: string; note: string }

export type CoverageStatus =
  | 'covered'
  | 'structured'
  | 'no-service'
  | 'not-applicable'
  | 'not-researched'
  | 'tbc'

export type RegionMode = {
  key: string
  label: string
  status: CoverageStatus
  note: string
  href?: string
}

export type Region = {
  slug: string
  title: string
  titleOriginal: string
  summary: string
  links: RegionLink[]
  modes: RegionMode[]
  gaps?: string[]
  hero?: string
}

export const REGION_REGISTRY_SOURCE = {
  title: 'Local government',
  titleOriginal: '地方政府',
  publisher: 'Office of the President, Republic of China (Taiwan)',
  url: 'https://www.president.gov.tw/Page/106',
  accessed: '2026-09-05',
  note: 'The official government-organisational page states that Taiwan has 6 special municipalities, 13 counties and 3 cities, and lists their canonical Traditional Chinese names.',
}

const MODE_LABELS: Record<string, string> = {
  metro: 'Metro / LRT',
  rail: 'TRA / THSR / heritage rail',
  bus: 'City / county bus',
  coach: 'Intercity coach',
  drt: 'DRT / community transport',
  bike: 'Public bike',
  ferry: 'Ferry / passenger shipping',
  air: 'Domestic aviation',
  special: 'Special / heritage',
  nodes: 'Major nodes',
}
const MODE_KEYS = Object.keys(MODE_LABELS)

type ModeOverride = { status: CoverageStatus; note: string; href?: string }
type RegionInput = Omit<Region, 'modes' | 'title'> & {
  title?: string
  modes?: Record<string, ModeOverride>
}

const mode = (key: string, status: CoverageStatus, note: string, href?: string): RegionMode => ({
  key, label: MODE_LABELS[key], status, note, href,
})

function region(input: RegionInput): Region {
  const modes = MODE_KEYS.map((key) => {
    const override = input.modes?.[key]
    return override
      ? mode(key, override.status, override.note, override.href)
      : mode(key, 'not-researched', 'No jurisdiction-specific primary-source layer has been published here yet.')
  })
  return { ...input, title: input.title ?? input.titleOriginal, modes }
}

const c = (status: CoverageStatus, note: string, href?: string): ModeOverride => ({ status, note, href })

const nationalRail = c('structured', 'National TRA/THSR references are available; a jurisdiction duplicate is not created.', '/rail/tra/')
const nationalBus = c('structured', 'National route discovery exists; a jurisdiction-specific overlay is not yet written.', '/bus/')
const nationalCoach = c('structured', 'National intercity coach snapshot is available.', '/bus/intercity/')
const nodeGap = c('not-researched', 'A jurisdiction-specific multimodal node page is not yet written.')

export const REGIONS: Region[] = [
  region({
    slug: 'keelung', title: 'Keelung City', titleOriginal: '基隆市',
    summary: 'A national reference entry for Keelung, with TRA, bus, coach, port and regional-connection seams kept visible as separate coverage states.',
    links: [
      { title: 'Taiwan Railway', href: '/rail/tra/', note: 'National TRA system and station reference.' },
      { title: 'Bus and coach discovery', href: '/bus/', note: 'National discovery entry while the Keelung-specific bus overlay is not yet written.' },
    ],
    modes: { rail: nationalRail, bus: nationalBus, coach: nationalCoach, nodes: c('structured', 'TRA station coverage exists nationally; a multimodal Keelung node page is not yet written.', '/rail/tra/stations/keelung-0900/') },
  }),
  region({
    slug: 'taipei', title: 'Taipei City', titleOriginal: '臺北市', hero: 'metro/hero',
    summary: 'The Taipei side of the core network: metro, joint-operation buses, the Maokong Gondola, river ferries and the city public-bike snapshot.',
    links: [
      { title: 'Taipei Metro', href: '/rail/metro/', note: 'Lines, stations, rolling stock and depots across TRTC and NTMC.' },
      { title: 'Joint-operation buses', href: '/bus/network/joint-operation/', note: 'The 聯營公車 network and its operators.' },
      { title: 'Maokong Gondola', href: '/rail/cable/', note: 'The region’s cable transit.' },
      { title: 'Blue Highway ferry', href: '/ferry/routes/blue-highway/', note: 'Scheduled river boats on the Tamsui and Keelung rivers.' },
      { title: 'YouBike — Taipei', href: '/bike/stations/taipei/', note: 'Station snapshot by district.' },
      { title: 'Songshan Airport', href: '/air/airports/main-island-hubs/', note: 'National airport reference.' },
    ],
    modes: {
      rail: c('covered', 'Taipei Metro, TRA and national rail references are linked.', '/rail/metro/'),
      bus: c('covered', 'Joint-operation bus routes, operators and ratings are covered.', '/bus/network/joint-operation/'),
      coach: nationalCoach,
      bike: c('covered', 'YouBike station rows are grouped by district; docks are not individual pages.', '/bike/stations/taipei/'),
      ferry: c('covered', 'Blue Highway river-ferry coverage is linked.', '/ferry/routes/blue-highway/'),
      air: c('covered', 'Songshan Airport is included in the national airport layer.', '/air/airports/main-island-hubs/'),
      special: c('covered', 'Maokong Gondola is treated as special/cable transit.', '/rail/cable/'),
      nodes: c('covered', 'Rail, metro, airport and ferry links are connected through canonical pages.', '/rail/metro/'),
    },
  }),
  region({
    slug: 'new-taipei', title: 'New Taipei City', titleOriginal: '新北市', hero: 'metro/hero',
    summary: 'The New Taipei side of the metropolitan network: metro and light-metro lines, joint-operation buses, YouBike districts, river ferries and the newly operating Sanying Line.',
    links: [
      { title: 'Taipei Metro and Sanying Line', href: '/rail/metro/', note: 'The canonical metro index spans the Taipei–New Taipei network.' },
      { title: 'Joint-operation buses', href: '/bus/network/joint-operation/', note: 'The metropolitan bus network and its operators.' },
      { title: 'Sanying Line', href: '/rail/metro/lines/sanying-line/', note: 'New Taipei’s line; paid operation began 1 September 2026.' },
      { title: 'YouBike — New Taipei', href: '/bike/stations/new-taipei/', note: 'Station snapshot by district.' },
      { title: 'Blue Highway ferry', href: '/ferry/routes/blue-highway/', note: 'River-ferry coverage where the service crosses the metropolitan geography.' },
    ],
    modes: {
      rail: c('covered', 'Metro, Sanying Line, TRA and national rail references are covered.', '/rail/metro/'),
      bus: c('covered', 'Joint-operation bus routes and operator records are covered.', '/bus/network/joint-operation/'),
      coach: nationalCoach,
      bike: c('covered', 'YouBike station rows are grouped by district.', '/bike/stations/new-taipei/'),
      ferry: c('covered', 'Blue Highway river-ferry coverage is linked.', '/ferry/routes/blue-highway/'),
      special: c('covered', 'Maokong Gondola is linked as special/cable transit.', '/rail/cable/'),
      nodes: c('covered', 'Metro, TRA, bus and ferry canonical pages are linked.', '/rail/metro/'),
    },
  }),
  region({
    slug: 'taoyuan', title: 'Taoyuan City', titleOriginal: '桃園市', hero: 'airport-mrt/hero',
    summary: 'Airport MRT and a Green Line project, alongside the regional bus, airport and public-bike layers.',
    links: [
      { title: 'Taoyuan Metro', href: '/rail/tymc/', note: 'Airport MRT and Green Line project registry.' },
      { title: 'Taoyuan International Airport', href: '/air/airports/main-island-hubs/', note: 'National airport reference.' },
      { title: 'YouBike — Taoyuan', href: '/bike/stations/taoyuan/', note: 'Station snapshot by district.' },
      { title: 'Operator service ratings', href: '/bus/network/operator-ratings/', note: 'Taoyuan’s dated evaluation layer.' },
    ],
    gaps: ['A dedicated Taoyuan city-bus operator/route page is not yet written separately from the structured network.'],
    modes: { rail: c('covered', 'Airport MRT is covered; the Green Line remains a project record.', '/rail/tymc/'), bus: nationalBus, coach: nationalCoach, bike: c('covered', 'YouBike station rows are grouped by district.', '/bike/stations/taoyuan/'), air: c('covered', 'Taoyuan International Airport is in the national airport layer.', '/air/airports/main-island-hubs/'), nodes: c('covered', 'Airport MRT and airport canonical pages are linked.', '/rail/tymc/') },
  }),
  region({
    slug: 'hsinchu-city', title: 'Hsinchu City', titleOriginal: '新竹市',
    summary: 'A city gateway for Hsinchu’s regional buses and the national TRA/THSR references, kept separate from Hsinchu County.',
    links: [{ title: 'Hsinchu regional buses', href: '/bus/regional/hsinchu/', note: 'Route-and-stop snapshot.' }, { title: 'National rail', href: '/rail/tra/', note: 'TRA and THSR remain canonical national references.' }],
    modes: { rail: nationalRail, bus: c('covered', 'The Hsinchu regional bus snapshot is available.', '/bus/regional/hsinchu/'), coach: nationalCoach, nodes: nodeGap },
  }),
  region({
    slug: 'hsinchu-county', title: 'Hsinchu County', titleOriginal: '新竹縣',
    summary: 'A separate county entry keeps Hsinchu County distinct from Hsinchu City, with national rail, regional-bus and future community-transport seams visible.',
    links: [{ title: 'Hsinchu regional buses', href: '/bus/regional/hsinchu/', note: 'The existing regional snapshot includes the Hsinchu bus research layer.' }, { title: 'National rail', href: '/rail/tra/', note: 'TRA and THSR remain canonical national references.' }],
    gaps: ['A county-specific route and DRT overlay is not yet written.'],
    modes: { rail: nationalRail, bus: c('covered', 'The shared Hsinchu regional snapshot is available.', '/bus/regional/hsinchu/'), coach: nationalCoach, nodes: nodeGap },
  }),
  region({
    slug: 'miaoli', title: 'Miaoli County', titleOriginal: '苗栗縣',
    summary: 'A county gateway for Miaoli’s national rail, coach, bus and future regional research; no local service is inferred from the absence of a dedicated page.',
    links: [{ title: 'Taiwan Railway', href: '/rail/tra/', note: 'National TRA system and station reference.' }, { title: 'Intercity coach discovery', href: '/bus/intercity/', note: 'Dated national snapshot of highway-coach variants.' }],
    modes: { rail: nationalRail, bus: nationalBus, coach: nationalCoach, nodes: nodeGap },
  }),
  region({
    slug: 'taichung', title: 'Taichung City', titleOriginal: '臺中市', hero: 'tmrt/hero',
    summary: 'A single driverless metro line, a large regional bus network, national rail, airport and public-bike references.',
    links: [{ title: 'Taichung Metro', href: '/rail/tmrt/', note: 'The Green Line.' }, { title: 'Taichung regional buses', href: '/bus/regional/taichung/', note: 'Route-and-stop snapshot and 小黃公車 reservation network.' }, { title: 'Taichung Airport', href: '/air/airports/main-island-hubs/', note: 'National airport reference.' }, { title: 'YouBike — Taichung', href: '/bike/stations/taichung/', note: 'Station snapshot by district.' }],
    modes: { rail: c('covered', 'Taichung Metro and the national TRA/THSR layers are linked.', '/rail/tmrt/'), bus: c('covered', 'The regional bus snapshot and operator layer are available.', '/bus/regional/taichung/'), coach: nationalCoach, drt: c('structured', 'The regional page identifies the 小黃公車 reservation network; programme depth is limited.', '/bus/regional/taichung/'), bike: c('covered', 'YouBike station rows are grouped by district.', '/bike/stations/taichung/'), air: c('covered', 'Taichung Airport is included in the national airport layer.', '/air/airports/main-island-hubs/'), nodes: c('covered', 'TMRT, TRA, THSR, bus and airport links are available.', '/rail/tmrt/') },
  }),
  region({
    slug: 'changhua', title: 'Changhua County', titleOriginal: '彰化縣',
    summary: 'A county gateway for Changhua’s TRA/THSR corridor, national bus and coach discovery, and the MOOVO research seam.',
    links: [{ title: 'Taiwan Railway', href: '/rail/tra/', note: 'National TRA system and station reference.' }, { title: 'Intercity coach discovery', href: '/bus/intercity/', note: 'Dated national snapshot of highway-coach variants.' }],
    modes: { rail: nationalRail, bus: nationalBus, coach: nationalCoach, bike: c('structured', 'A MOOVO station snapshot is identified in expansion data; the public index is not yet surfaced.', '/bike/'), nodes: nodeGap },
  }),
  region({
    slug: 'nantou', title: 'Nantou County', titleOriginal: '南投縣',
    summary: 'A county gateway for Nantou’s bus, coach, DRT and tourist-transport research, with national rail references kept distinct from services that actually operate in the county.',
    links: [{ title: 'Intercity coach discovery', href: '/bus/intercity/', note: 'Dated national snapshot of highway-coach variants.' }, { title: 'National bus discovery', href: '/bus/', note: 'National bus entry point for later Nantou overlays.' }],
    modes: { rail: c('not-applicable', 'No canonical rail-system page is assigned to Nantou in this registry entry.'), bus: nationalBus, coach: nationalCoach, special: c('tbc', 'Sun Moon Lake and other tourist transport require a separate primary-source pass.'), nodes: nodeGap },
  }),
  region({
    slug: 'yunlin', title: 'Yunlin County', titleOriginal: '雲林縣',
    summary: 'A county gateway for Yunlin’s TRA/THSR, bus, coach, MOOVO and community-transport research seams.',
    links: [{ title: 'Taiwan Railway', href: '/rail/tra/', note: 'National TRA system and station reference.' }, { title: 'Intercity coach discovery', href: '/bus/intercity/', note: 'Dated national snapshot of highway-coach variants.' }],
    modes: { rail: nationalRail, bus: nationalBus, coach: nationalCoach, bike: c('structured', 'A MOOVO station snapshot is identified in expansion data; the public index is not yet surfaced.', '/bike/'), nodes: nodeGap },
  }),
  region({
    slug: 'chiayi-city', title: 'Chiayi City', titleOriginal: '嘉義市',
    summary: 'The lowland gateway to the Alishan Forest Railway, with TRA, coach and city-bus discovery linked without duplicating the railway’s canonical home.',
    links: [{ title: 'Alishan Forest Railway', href: '/rail/alishan/', note: 'Heritage railway from Chiayi toward Alishan; current service extent is an official-source conflict.' }, { title: 'Taiwan Railway', href: '/rail/tra/', note: 'National TRA system and station reference.' }, { title: 'Intercity coach discovery', href: '/bus/intercity/', note: 'Dated national snapshot of highway-coach variants.' }],
    modes: { rail: c('covered', 'TRA and Alishan Forest Railway canonical pages are linked.', '/rail/alishan/'), bus: nationalBus, coach: nationalCoach, special: c('covered', 'Alishan Forest Railway is treated as heritage/special transport.', '/rail/alishan/'), nodes: c('covered', 'TRA and Alishan railway references are linked.', '/rail/alishan/') },
  }),
  region({
    slug: 'chiayi-county', title: 'Chiayi County', titleOriginal: '嘉義縣', hero: 'alishan/hero',
    summary: 'A county gateway for the Alishan Forest Railway, intercity coaches, buses and the community-transport research seam.',
    links: [{ title: 'Alishan Forest Railway', href: '/rail/alishan/', note: 'The canonical heritage/special-transport system page.' }, { title: 'Intercity coach discovery', href: '/bus/intercity/', note: 'Dated national snapshot of highway-coach variants.' }],
    modes: { rail: c('covered', 'The Alishan Forest Railway page is linked; TRA remains national.', '/rail/alishan/'), bus: nationalBus, coach: nationalCoach, special: c('covered', 'Alishan Forest Railway is treated as heritage/special transport.', '/rail/alishan/'), nodes: c('covered', 'Chiayi/Alishan rail gateway coverage is linked.', '/rail/alishan/') },
  }),
  region({
    slug: 'tainan', title: 'Tainan City', titleOriginal: '臺南市',
    summary: 'A bus-centred city gateway with TRA, intercity coach and future public-bike, DRT and sugar-railway research seams.',
    links: [{ title: 'Tainan regional buses', href: '/bus/regional/tainan/', note: 'Route-and-stop snapshot.' }, { title: 'Operator service ratings', href: '/bus/network/operator-ratings/', note: 'Tainan’s dated evaluation layer.' }, { title: 'Taiwan Railway', href: '/rail/tra/', note: 'National TRA system and station reference.' }],
    gaps: ['A current Tainan public-bike snapshot and sugar-railway/special-transport layer are not yet committed.'],
    modes: { rail: nationalRail, bus: c('covered', 'The Tainan regional bus snapshot is available.', '/bus/regional/tainan/'), coach: nationalCoach, drt: c('structured', 'The regional source layer is present; DRT programme depth is limited.', '/bus/regional/tainan/'), bike: c('tbc', 'A current Tainan public-bike system snapshot needs a primary-source/data pull.'), special: c('tbc', 'Sugar-railway and tourism transport require a separate primary-source pass.'), nodes: c('structured', 'TRA and bus references are available; a multimodal node page is not yet written.', '/rail/tra/') },
  }),
  region({
    slug: 'kaohsiung', title: 'Kaohsiung City', titleOriginal: '高雄市', hero: 'krtc/hero',
    summary: 'Two metro lines plus a circular light rail line, a ferry to Cijin Island, regional buses, airport and public-bike references.',
    links: [{ title: 'Kaohsiung Rapid Transit', href: '/rail/krtc/', note: 'Red and Orange Lines and Circular Light Rail.' }, { title: 'Kaohsiung regional buses', href: '/bus/regional/kaohsiung/', note: 'Route-and-stop snapshot.' }, { title: 'Cijin ferry', href: '/ferry/routes/cijin/', note: 'Harbour crossing to Cijin Island.' }, { title: 'Kaohsiung International Airport', href: '/air/airports/kaohsiung/', note: 'Dedicated airport page.' }, { title: 'YouBike — Kaohsiung', href: '/bike/stations/kaohsiung/', note: 'Station snapshot by district.' }],
    modes: { rail: c('covered', 'KRTC metro and light rail are covered.', '/rail/krtc/'), bus: c('covered', 'The regional bus snapshot and operator layer are available.', '/bus/regional/kaohsiung/'), coach: nationalCoach, drt: c('structured', 'The regional bus layer is available; DRT programme depth is limited.', '/bus/regional/kaohsiung/'), bike: c('covered', 'YouBike station rows are grouped by district.', '/bike/stations/kaohsiung/'), ferry: c('covered', 'Cijin ferry coverage is linked.', '/ferry/routes/cijin/'), air: c('covered', 'Kaohsiung International Airport has a dedicated page.', '/air/airports/kaohsiung/'), nodes: c('covered', 'Metro, light rail, ferry, bus and airport pages are linked.', '/rail/krtc/') },
  }),
  region({
    slug: 'pingtung', title: 'Pingtung County', titleOriginal: '屏東縣',
    summary: 'A county gateway for TRA, buses, intercity coaches, island-ferry links and future DRT research.',
    links: [{ title: 'Taiwan Railway', href: '/rail/tra/', note: 'National TRA system and station reference.' }, { title: 'Intercity coach discovery', href: '/bus/intercity/', note: 'Dated national snapshot of highway-coach variants.' }],
    modes: { rail: nationalRail, bus: nationalBus, coach: nationalCoach, ferry: c('tbc', 'Donggang–Xiaoliuqiu is a priority ferry family; a first-class route page is not yet implemented.', '/ferry/'), nodes: nodeGap },
  }),
  region({
    slug: 'yilan', title: 'Yilan County', titleOriginal: '宜蘭縣',
    summary: 'A county gateway for TRA, buses, coaches and future east-coast ferry, DRT and special-transport research.',
    links: [{ title: 'Taiwan Railway', href: '/rail/tra/', note: 'National TRA system and station reference.' }, { title: 'Intercity coach discovery', href: '/bus/intercity/', note: 'Dated national snapshot of highway-coach variants.' }],
    modes: { rail: nationalRail, bus: nationalBus, coach: nationalCoach, nodes: nodeGap },
  }),
  region({
    slug: 'hualien', title: 'Hualien County', titleOriginal: '花蓮縣',
    summary: 'An east-coast gateway for TRA, buses, coaches, Hualien Airport and future DRT and maritime research.',
    links: [{ title: 'Taiwan Railway', href: '/rail/tra/', note: 'National TRA system and station reference.' }, { title: 'Intercity coach discovery', href: '/bus/intercity/', note: 'Dated national snapshot of highway-coach variants.' }, { title: 'Domestic airports', href: '/air/airports/outlying-islands/', note: 'National airport index; Hualien-specific depth remains an expansion seam.' }],
    modes: { rail: nationalRail, bus: nationalBus, coach: nationalCoach, air: c('tbc', 'Hualien airport connectivity is an identified expansion seam; a dedicated page is not yet written.', '/air/airports/outlying-islands/'), nodes: nodeGap },
  }),
  region({
    slug: 'taitung', title: 'Taitung County', titleOriginal: '臺東縣',
    summary: 'An east-coast and island-connectivity gateway for TRA, coaches, buses, domestic airports, ferries and future DRT research.',
    links: [{ title: 'Taiwan Railway', href: '/rail/tra/', note: 'National TRA system and station reference.' }, { title: 'Domestic airports', href: '/air/airports/outlying-islands/', note: 'Taitung, Green Island and Orchid Island route families require a dedicated pass.' }, { title: 'Ferry route index', href: '/ferry/', note: 'Canonical maritime entry point for island-route research.' }],
    modes: { rail: nationalRail, bus: nationalBus, coach: nationalCoach, ferry: c('tbc', 'Taitung–Green Island and Taitung–Orchid Island are priority families; first-class route pages are not yet implemented.', '/ferry/'), air: c('tbc', 'Taitung, Green Island and Orchid Island domestic-air connectivity is an identified expansion seam.', '/air/airports/outlying-islands/'), nodes: c('tbc', 'TRA, air and island-ferry joins are identified; a published node page is not yet written.', '/rail/tra/') },
  }),
  region({
    slug: 'penghu', title: 'Penghu County', titleOriginal: '澎湖縣',
    summary: 'An offshore connectivity gateway for domestic aviation, inter-island and Taiwan ferry families, buses and community transport.',
    links: [{ title: 'Domestic airports', href: '/air/airports/outlying-islands/', note: 'National airport index; Penghu route-family depth remains an expansion seam.' }, { title: 'Ferry route index', href: '/ferry/', note: 'Canonical maritime entry point for Taiwan–Penghu and inter-island research.' }],
    modes: { rail: c('not-applicable', 'No rail-system page is assigned to Penghu in this registry entry.'), bus: nationalBus, coach: c('not-applicable', 'The intercity coach snapshot is mainland-oriented; Penghu coach coverage is not claimed.'), ferry: c('tbc', 'Taiwan–Penghu and Penghu inter-island are priority families; first-class pages are not yet implemented.', '/ferry/'), air: c('tbc', 'Penghu domestic aviation is a priority island-connectivity family.', '/air/airports/outlying-islands/'), nodes: c('tbc', 'Airport and ferry joins are identified; a Penghu multimodal node page is not yet written.', '/ferry/') },
  }),
  region({
    slug: 'kinmen', title: 'Kinmen County', titleOriginal: '金門縣',
    summary: 'An offshore connectivity gateway for domestic aviation, local scheduled passenger shipping, Small Three Links, buses and community transport.',
    links: [{ title: 'Domestic airports', href: '/air/airports/outlying-islands/', note: 'National airport index; Kinmen route-family depth remains an expansion seam.' }, { title: 'Ferry route index', href: '/ferry/', note: 'Canonical maritime entry point for Kinmen local and cross-border passenger-shipping research.' }],
    modes: { rail: c('not-applicable', 'No rail-system page is assigned to Kinmen in this registry entry.'), bus: nationalBus, coach: c('not-applicable', 'The intercity coach snapshot is mainland-oriented; Kinmen coach coverage is not claimed.'), ferry: c('tbc', 'Kinmen local shipping and Small Three Links are priority families; first-class pages are not yet implemented.', '/ferry/'), air: c('tbc', 'Kinmen domestic aviation is a priority island-connectivity family.', '/air/airports/outlying-islands/'), nodes: c('tbc', 'Airport and ferry joins are identified; a Kinmen multimodal node page is not yet written.', '/ferry/') },
  }),
  region({
    slug: 'lienchiang', title: 'Lienchiang County (Matsu)', titleOriginal: '連江縣',
    summary: 'An offshore connectivity gateway for domestic aviation, Taiwan–Matsu and inter-island ferries, Small Three Links, buses and community transport.',
    links: [{ title: 'Domestic airports', href: '/air/airports/outlying-islands/', note: 'National airport index; Matsu route-family depth remains an expansion seam.' }, { title: 'Ferry route index', href: '/ferry/', note: 'Canonical maritime entry point for Taiwan–Matsu, inter-island and cross-border research.' }],
    modes: { rail: c('not-applicable', 'No rail-system page is assigned to Lienchiang in this registry entry.'), bus: nationalBus, coach: c('not-applicable', 'The intercity coach snapshot is mainland-oriented; Matsu coach coverage is not claimed.'), ferry: c('tbc', 'Taiwan–Matsu, inter-island Matsu and Small Three Links are priority families; first-class pages are not yet implemented.', '/ferry/'), air: c('tbc', 'Matsu domestic aviation is a priority island-connectivity family.', '/air/airports/outlying-islands/'), nodes: c('tbc', 'Airport and ferry joins are identified; a Matsu multimodal node page is not yet written.', '/ferry/') },
  }),
]

export function getRegion(slug: string): Region | undefined {
  return REGIONS.find((region) => region.slug === slug)
}
