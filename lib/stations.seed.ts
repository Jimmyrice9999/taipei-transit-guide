/**
 * The original hand-transcribed station list.
 *
 * Kept for two reasons, neither of them "in case the pipeline breaks":
 *
 *   1. It is the baseline the generator reconciles against. When TDX data
 *      arrives, `npm run stations` reports every place official records
 *      disagree with what was transcribed by hand — which is the point of
 *      moving to official data in the first place.
 *
 *   2. It keeps the site building before any TDX fetch has succeeded, so the
 *      pipeline can be committed and reviewed independently of credentials.
 *
 * Do not add stations here. New data comes from TDX.
 */

export type SeedStation = {
  code: string
  name: string
  /** Line codes, not station codes — the other lines were never catalogued. */
  interchange: string[]
}

export const SEED_STATIONS: SeedStation[] = [
  { code: 'BR01', name: 'Taipei Zoo', interchange: [] },
  { code: 'BR02', name: 'Muzha', interchange: [] },
  { code: 'BR03', name: 'Wanfang Community', interchange: [] },
  { code: 'BR04', name: 'Wanfang Hospital', interchange: [] },
  { code: 'BR05', name: 'Xinhai', interchange: [] },
  { code: 'BR06', name: 'Linguang', interchange: [] },
  { code: 'BR07', name: 'Liuzhangli', interchange: [] },
  { code: 'BR08', name: 'Technology Building', interchange: [] },
  { code: 'BR09', name: 'Daan', interchange: ['R'] },
  { code: 'BR10', name: 'Zhongxiao Fuxing', interchange: ['BL'] },
  { code: 'BR11', name: 'Nanjing Fuxing', interchange: ['G'] },
  { code: 'BR12', name: 'Zhongshan Junior High School', interchange: [] },
  { code: 'BR13', name: 'Songshan Airport', interchange: [] },
  { code: 'BR14', name: 'Dazhi', interchange: [] },
  { code: 'BR15', name: 'Jiannan Road', interchange: [] },
  { code: 'BR16', name: 'Xihu', interchange: [] },
  { code: 'BR17', name: 'Gangqian', interchange: [] },
  { code: 'BR18', name: 'Wende', interchange: [] },
  { code: 'BR19', name: 'Neihu', interchange: [] },
  { code: 'BR20', name: 'Dahu Park', interchange: [] },
  { code: 'BR21', name: 'Huzhou', interchange: [] },
  { code: 'BR22', name: 'Donghu', interchange: [] },
  { code: 'BR23', name: 'Nangang Software Park', interchange: [] },
  { code: 'BR24', name: 'Nangang Exhibition Center', interchange: ['BL'] },
]
