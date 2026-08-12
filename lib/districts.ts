/**
 * Chinese → English district names, Taipei City and New Taipei City.
 *
 * Romanisation follows the districts' own official English names (TRTC's
 * English site and the existing research corpus use the same forms).
 * Taoyuan's districts, reached by the Airport MRT, are out of scope and
 * deliberately absent rather than guessed; `formatDistrict` marks those TBC.
 */
const DISTRICT_NAMES: Record<string, string> = {
  // Taipei City
  '中正區': 'Zhongzheng District',
  '大同區': 'Datong District',
  '中山區': 'Zhongshan District',
  '松山區': 'Songshan District',
  '大安區': 'Daan District',
  '萬華區': 'Wanhua District',
  '信義區': 'Xinyi District',
  '士林區': 'Shilin District',
  '北投區': 'Beitou District',
  '內湖區': 'Neihu District',
  '南港區': 'Nangang District',
  '文山區': 'Wenshan District',
  // New Taipei City
  '板橋區': 'Banqiao District',
  '三重區': 'Sanchong District',
  '中和區': 'Zhonghe District',
  '永和區': 'Yonghe District',
  '新莊區': 'Xinzhuang District',
  '新店區': 'Xindian District',
  '樹林區': 'Shulin District',
  '鶯歌區': 'Yingge District',
  '三峽區': 'Sanxia District',
  '淡水區': 'Tamsui District',
  '汐止區': 'Xizhi District',
  '瑞芳區': 'Ruifang District',
  '土城區': 'Tucheng District',
  '蘆洲區': 'Luzhou District',
  '五股區': 'Wugu District',
  '泰山區': 'Taishan District',
  '林口區': 'Linkou District',
  '深坑區': 'Shenkeng District',
  '石碇區': 'Shiding District',
  '坪林區': 'Pinglin District',
  '三芝區': 'Sanzhi District',
  '石門區': 'Shimen District',
  '八里區': 'Bali District',
  '平溪區': 'Pingxi District',
  '雙溪區': 'Shuangxi District',
  '貢寮區': 'Gongliao District',
  '金山區': 'Jinshan District',
  '萬里區': 'Wanli District',
  '烏來區': 'Wulai District',
}

/** English name for a district, or `null` if it's outside the map above. */
export function getDistrictEn(districtZh: string): string | null {
  return DISTRICT_NAMES[districtZh] ?? null
}

/**
 * "Neihu District (內湖區)" for display. Falls back to "TBC (內湖區)" rather
 * than guessing a romanisation for a district not in the map.
 */
export function formatDistrict(districtZh: string): string {
  const en = getDistrictEn(districtZh)
  return `${en ?? 'TBC'} (${districtZh})`
}
