/**
 * The geography axis (Part 2b, Run 303): "I am going to Taichung" is a
 * question this site could not answer before this file existed, because
 * every page lived under a mode (rail, bus, ferry, bike) and nothing
 * gathered the modes that actually serve one place.
 *
 * This is deliberately an INDEX, not a second hierarchy. Every href below
 * points at a page's one existing canonical URL — nothing here is rendered
 * as its own content, and no page gains a second address. Where a region
 * has nothing built for it yet, the entry says so rather than linking
 * somewhere approximate (a bare TRA or THSR link with no regional slice
 * would misrepresent what the page actually covers).
 */

export type RegionLink = {
  title: string
  href: string
  /** One line saying what this specific link covers for the region. */
  note: string
}

export type Region = {
  slug: string
  title: string
  /** One paragraph: what the place is, transit-wise, and how it hangs together. */
  summary: string
  links: RegionLink[]
  /** Named systems/services that serve this region but have no dedicated page yet. */
  gaps?: string[]
  /**
   * A pipeline image id (lib/images) representative of the region's own
   * network — the same system-hero photograph already used on that system's
   * own section page, not a new photograph shot for this index. Omitted
   * rather than left to fall back to a generic placeholder for a region
   * this site has not sourced imagery for yet (Tainan, Hsinchu).
   */
  hero?: string
}

export const REGIONS: Region[] = [
  {
    slug: 'taipei-new-taipei',
    hero: 'metro/hero',
    title: 'Taipei and New Taipei',
    summary:
      'The core network: one metro system spanning two municipalities, one ' +
      'joint-operation bus brand run by fourteen private companies, an aerial ' +
      'ropeway, a river ferry, and the system this site has researched deepest.',
    links: [
      { title: 'Taipei Metro', href: '/rail/metro/', note: 'Lines, stations, rolling stock and depots across TRTC and NTMC.' },
      { title: 'Joint-operation buses', href: '/bus/network/joint-operation/', note: 'The 聯營公車 network — 14 operators, one brand, one fare structure.' },
      { title: 'Maokong Gondola', href: '/rail/cable/', note: 'The region’s only cable transit, run by a TRTC subsidiary.' },
      { title: 'Blue Highway ferry', href: '/ferry/routes/blue-highway/', note: 'Scheduled river boats on the Tamsui and Keelung rivers, inside the regional fare system.' },
      { title: 'YouBike — Taipei', href: '/bike/stations/taipei/', note: 'Station snapshot by district.' },
      { title: 'YouBike — New Taipei', href: '/bike/stations/new-taipei/', note: 'Station snapshot by district.' },
      { title: 'Operator service ratings', href: '/bus/network/operator-ratings/', note: 'Taipei’s and New Taipei’s separate bus evaluation schemes.' },
      { title: 'Taipei Songshan Airport', href: '/air/airports/main-island-hubs/', note: 'The city’s in-town joint military-civil airfield, covered together with Taoyuan and Taichung.' },
    ],
  },
  {
    slug: 'taoyuan',
    hero: 'airport-mrt/hero',
    title: 'Taoyuan',
    summary:
      'Airport MRT and a Green Line still under construction, run by Taoyuan ' +
      'Metro Corporation; a bus evaluation scheme currently under public dispute ' +
      'over its own punctuality figures.',
    links: [
      { title: 'Taoyuan Metro', href: '/rail/tymc/', note: 'Airport MRT (operating) and the Green Line project registry (not yet built).' },
      { title: 'Taoyuan International Airport', href: '/air/airports/main-island-hubs/', note: 'Taiwan’s main international gateway, run by a dedicated state corporation — covered together with Songshan and Taichung.' },
      { title: 'YouBike — Taoyuan', href: '/bike/stations/taoyuan/', note: 'Station snapshot by district.' },
      { title: 'Operator service ratings', href: '/bus/network/operator-ratings/', note: 'Taoyuan’s scheme, outsourced by tender, current as of 2026 — historical grades TBC.' },
    ],
    gaps: [
      'A dedicated Taoyuan city-bus operator/route page — TDX operator records exist but have not been written up separately from the joint-operation network.',
    ],
  },
  {
    slug: 'taichung',
    hero: 'tmrt/hero',
    title: 'Taichung',
    summary:
      'A single driverless metro line, a large bus network run by fourteen ' +
      'named operators on the government’s own portal, and six colour-coded ' +
      'trunk routes launched in stages from 2016.',
    links: [
      { title: 'Taichung Metro (TMRT)', href: '/rail/tmrt/', note: 'The Green Line — Beitun, the city centre and the HSR station.' },
      { title: 'Taichung regional buses', href: '/bus/regional/taichung/', note: 'Route-and-stop snapshot, 392 city-bus entries and the 小黃公車 reservation network.' },
      { title: 'Taichung Airport', href: '/air/airports/main-island-hubs/', note: 'A joint military-civil airfield per CAA’s own list — covered together with Taoyuan and Songshan.' },
      { title: 'YouBike — Taichung', href: '/bike/stations/taichung/', note: 'Station snapshot by district.' },
      { title: 'Operator service ratings', href: '/bus/network/operator-ratings/', note: 'Taichung’s scheme, running since at least 2015, dated 113年度 grade tables.' },
    ],
  },
  {
    slug: 'kaohsiung',
    hero: 'krtc/hero',
    title: 'Kaohsiung',
    summary:
      'Two metro lines plus a circular light rail line, a ferry to Cijin ' +
      'Island, and a bus evaluation scheme whose report archive runs back ' +
      'to 2011 under three different names.',
    links: [
      { title: 'Kaohsiung Rapid Transit (KRTC)', href: '/rail/krtc/', note: 'Red and Orange Lines, and the Circular Light Rail, kept as distinct records.' },
      { title: 'Kaohsiung regional buses', href: '/bus/regional/kaohsiung/', note: 'Route-and-stop snapshot.' },
      { title: 'Cijin ferry', href: '/ferry/routes/cijin/', note: 'The harbour crossing to Cijin Island.' },
      { title: 'Kaohsiung International Airport', href: '/air/airports/kaohsiung/', note: 'The south’s main airport, with its own dedicated page.' },
      { title: 'YouBike — Kaohsiung', href: '/bike/stations/kaohsiung/', note: 'Station snapshot by district.' },
      { title: 'Operator service ratings', href: '/bus/network/operator-ratings/', note: 'Kaohsiung’s scheme — 2017 results sourced, newer grade tables TBC (report PDFs did not extract).' },
    ],
  },
  {
    slug: 'tainan',
    title: 'Tainan',
    summary:
      'No metro or light rail yet — the network here is entirely bus, run by ' +
      'a shifting set of operators under the 大台南公車 brand, evaluated ' +
      'annually by the city government.',
    links: [
      { title: 'Tainan regional buses', href: '/bus/regional/tainan/', note: 'Route-and-stop snapshot.' },
      { title: 'Operator service ratings', href: '/bus/network/operator-ratings/', note: 'Tainan’s scheme — four consecutive ceremony years read, same three excellent-grade operators each time.' },
    ],
    gaps: [
      'No rail or light rail system exists in Tainan on this site’s evidence.',
      'No YouBike station data for Tainan in the committed TDX pull (the 25 August 2026 pull covers Taipei, New Taipei, Taoyuan, Taichung and Kaohsiung only).',
    ],
  },
  {
    slug: 'hsinchu',
    title: 'Hsinchu',
    summary:
      'City buses run by six companies under Hsinchu City Government, plus ' +
      'Hsinchu County running a separate scheme of its own — neither city ' +
      'nor county has rail or light rail on this site’s evidence.',
    links: [
      { title: 'Hsinchu regional buses', href: '/bus/regional/hsinchu/', note: 'Route-and-stop snapshot.' },
      { title: 'Operator service ratings', href: '/bus/network/operator-ratings/', note: 'Hsinchu City’s scheme confirmed to exist (three dated rounds); grades TBC — report PDFs did not extract.' },
    ],
    gaps: [
      'Taiwan Railway serves Hsinchu, but this site has no city-scoped TRA slice — see the national Taiwan Railway pages.',
    ],
  },
  {
    slug: 'chiayi-alishan',
    hero: 'alishan/hero',
    title: 'Chiayi and Alishan',
    summary:
      'Home to the Alishan Forest Railway, Taiwan’s 762 mm mountain and ' +
      'forest railway climbing from Chiayi city into the mountains — a ' +
      'system this site treats as heritage/special rather than commuter rail.',
    links: [
      { title: 'Alishan Forest Railway', href: '/rail/alishan/', note: 'Lines and stations from Chiayi to Alishan, including active sunrise and forest-park branches.' },
    ],
  },
]

export function getRegion(slug: string): Region | undefined {
  return REGIONS.find((region) => region.slug === slug)
}
