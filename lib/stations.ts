/**
 * The station registry.
 *
 * Two jobs:
 *   1. Gives every station code badge a name, for tooltips and (later) links.
 *   2. Turns the badge system into a proofreading tool — a code written in a
 *      Markdown file that is not listed here fails the build with a warning
 *      naming the file, rather than rendering a badge for a station that does
 *      not exist.
 *
 * Only lines with a written page need listing. Add a line's stations here when
 * you start writing about it; until then, its codes will warn.
 *
 * Station names follow TRTC's English romanisation. The Wenhu list below still
 * needs checking against TRTC's published network map — see the note on
 * content/train/lines/wenhu-line.md.
 */

export type Station = {
  code: string
  name: string
}

/** Wenhu Line, BR01–BR24, south-west to north-east. */
const WENHU: Station[] = [
  { code: 'BR01', name: 'Taipei Zoo' },
  { code: 'BR02', name: 'Muzha' },
  { code: 'BR03', name: 'Wanfang Community' },
  { code: 'BR04', name: 'Wanfang Hospital' },
  { code: 'BR05', name: 'Xinhai' },
  { code: 'BR06', name: 'Linguang' },
  { code: 'BR07', name: 'Liuzhangli' },
  { code: 'BR08', name: 'Technology Building' },
  { code: 'BR09', name: 'Daan' },
  { code: 'BR10', name: 'Zhongxiao Fuxing' },
  { code: 'BR11', name: 'Nanjing Fuxing' },
  { code: 'BR12', name: 'Zhongshan Junior High School' },
  { code: 'BR13', name: 'Songshan Airport' },
  { code: 'BR14', name: 'Dazhi' },
  { code: 'BR15', name: 'Jiannan Road' },
  { code: 'BR16', name: 'Xihu' },
  { code: 'BR17', name: 'Gangqian' },
  { code: 'BR18', name: 'Wende' },
  { code: 'BR19', name: 'Neihu' },
  { code: 'BR20', name: 'Dahu Park' },
  { code: 'BR21', name: 'Huzhou' },
  { code: 'BR22', name: 'Donghu' },
  { code: 'BR23', name: 'Nangang Software Park' },
  { code: 'BR24', name: 'Nangang Exhibition Center' },
]

export const STATIONS: Station[] = [...WENHU]

const BY_CODE = new Map(STATIONS.map((s) => [s.code, s]))

export function getStation(code: string): Station | undefined {
  return BY_CODE.get(code.toUpperCase())
}

/**
 * Lines we hold station data for.
 *
 * Every code must resolve to a station here to render as a badge — a badge
 * asserts "this is a real station", so an unverified one is never drawn. This
 * set only decides which of two warnings you get: a code on a catalogued line
 * is almost certainly a typo, while a code on an uncatalogued line means the
 * line's stations have not been added yet.
 */
export const CATALOGUED_LINES = new Set(['BR'])
