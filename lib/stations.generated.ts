/**
 * GENERATED FILE — do not edit.
 *
 * Written by `npm run stations` from data/tdx/, fetched from Taiwan MOTC TDX.
 * Local facts TDX does not publish live in lib/station-overlay.ts and are
 * merged on top at runtime — edit those there, not here.
 */

export type GeneratedStation = {
  code: string
  /** Line prefix, e.g. "BR". */
  line: string
  /** Operator publishing this line: the TDX rail-system code. */
  operator: string
  name: string
  /** Traditional Chinese name, when the source provides one. */
  nameZh: string
  /** District, from the source's LocationTown. */
  district: string
  address: string
  lat: number | null
  lon: number | null
  /** Position along the line, 1-based, in running order. */
  sequence: number
  /** Line codes this station interchanges with. */
  interchange: string[]
  /**
   * Distance along the route in km, from TDX `CumulativeDistance`. The last
   * value on a route is that route's official length. Null on branch stations.
   */
  chainageKm: number | null
}

/**
 * Where this data came from, and when. Surfaced to readers in the footer.
 *
 * Typed as a union rather than `as const` so the footer can branch on it —
 * a literal type would make one branch statically unreachable.
 */
export type Provenance = {
  source: 'tdx' | 'seed'
  fetchedAt: string | null
  sourceName: string
  sourceUrl: string
  operator: string
  stationCount: number
}

export const PROVENANCE: Provenance = {
  "source": "tdx",
  "fetchedAt": "2026-08-24T14:00:05.657Z",
  "sourceName": "Taiwan MOTC TDX (Transport Data eXchange)",
  "sourceUrl": "https://tdx.transportdata.tw/",
  "operator": "TRTC, NTMC, TYMC, NTDLRT, NTALRT, TMRT",
  "stationCount": 198
}

export const GENERATED_STATIONS: GeneratedStation[] = [
  { code: "BR01", line: "BR", operator: "TRTC", name: "Taipei Zoo", nameZh: "動物園", district: "文山區", address: "116016臺北市文山區新光路2段32號", lat: 24.998205, lon: 121.579501, sequence: 1, interchange: [], chainageKm: 0 },
  { code: "BR02", line: "BR", operator: "TRTC", name: "Muzha", nameZh: "木柵", district: "文山區", address: "116027臺北市文山區木柵路4段135號", lat: 24.99824, lon: 121.573127, sequence: 2, interchange: [], chainageKm: 0.68 },
  { code: "BR03", line: "BR", operator: "TRTC", name: "Wanfang Community", nameZh: "萬芳社區", district: "文山區", address: "116027臺北市文山區萬芳路60號", lat: 24.99857, lon: 121.568088, sequence: 3, interchange: [], chainageKm: 1.2 },
  { code: "BR04", line: "BR", operator: "TRTC", name: "Wanfang Hospital", nameZh: "萬芳醫院", district: "文山區", address: "116081臺北市文山區興隆路3段113號", lat: 24.99932, lon: 121.558092, sequence: 4, interchange: [], chainageKm: 2.34 },
  { code: "BR05", line: "BR", operator: "TRTC", name: "Xinhai", nameZh: "辛亥", district: "文山區", address: "116081臺北市文山區辛亥路4段128號", lat: 25.005455, lon: 121.557046, sequence: 5, interchange: [], chainageKm: 3.1 },
  { code: "BR06", line: "BR", operator: "TRTC", name: "Linguang", nameZh: "麟光", district: "大安區", address: "106043臺北市大安區和平東路3段410號", lat: 25.018495, lon: 121.558834, sequence: 6, interchange: [], chainageKm: 4.7 },
  { code: "BR07", line: "BR", operator: "TRTC", name: "Liuzhangli", nameZh: "六張犁", district: "大安區", address: "106039臺北市大安區和平東路3段168號", lat: 25.02381, lon: 121.55302, sequence: 7, interchange: [], chainageKm: 5.52 },
  { code: "BR08", line: "BR", operator: "TRTC", name: "Technology Building", nameZh: "科技大樓", district: "大安區", address: "106101臺北市大安區復興南路2段235號", lat: 25.02612, lon: 121.543462, sequence: 8, interchange: [], chainageKm: 6.65 },
  { code: "BR09", line: "BR", operator: "TRTC", name: "Daan", nameZh: "大安", district: "大安區", address: "106097臺北市大安區信義路4段2號", lat: 25.033311, lon: 121.54237, sequence: 9, interchange: ["R"], chainageKm: 7.4 },
  { code: "BR10", line: "BR", operator: "TRTC", name: "Zhongxiao Fuxing", nameZh: "忠孝復興", district: "大安區", address: "106084臺北市大安區忠孝東路3段302號", lat: 25.041104, lon: 121.543703, sequence: 10, interchange: ["BL"], chainageKm: 8.29 },
  { code: "BR11", line: "BR", operator: "TRTC", name: "Nanjing Fuxing", nameZh: "南京復興", district: "松山區", address: "105020臺北市松山區南京東路3段253號", lat: 25.052044, lon: 121.544303, sequence: 11, interchange: ["G"], chainageKm: 9.56 },
  { code: "BR12", line: "BR", operator: "TRTC", name: "Zhongshan Junior High School", nameZh: "中山國中", district: "中山區", address: "104079臺北市中山區復興北路376號", lat: 25.06085, lon: 121.544215, sequence: 12, interchange: [], chainageKm: 10.49 },
  { code: "BR13", line: "BR", operator: "TRTC", name: "Songshan Airport", nameZh: "松山機場", district: "松山區", address: "105008臺北市松山區敦化北路338號", lat: 25.063111, lon: 121.55162, sequence: 13, interchange: [], chainageKm: 11.97 },
  { code: "BR14", line: "BR", operator: "TRTC", name: "Dazhi", nameZh: "大直", district: "中山區", address: "104044臺北市中山區北安路534之1號", lat: 25.07943, lon: 121.54679, sequence: 14, interchange: [], chainageKm: 14.55 },
  { code: "BR15", line: "BR", operator: "TRTC", name: "Jiannan Rd.", nameZh: "劍南路", district: "中山區", address: "104051臺北市中山區北安路798號", lat: 25.08483, lon: 121.555582, sequence: 15, interchange: [], chainageKm: 15.88 },
  { code: "BR16", line: "BR", operator: "TRTC", name: "Xihu", nameZh: "西湖", district: "內湖區", address: "114066臺北市內湖區內湖路1段256號", lat: 25.08216, lon: 121.567227, sequence: 16, interchange: [], chainageKm: 17.17 },
  { code: "BR17", line: "BR", operator: "TRTC", name: "Gangqian", nameZh: "港墘", district: "內湖區", address: "114004臺北市內湖區內湖路1段663號", lat: 25.08007, lon: 121.57516, sequence: 17, interchange: [], chainageKm: 17.99 },
  { code: "BR18", line: "BR", operator: "TRTC", name: "Wende", nameZh: "文德", district: "內湖區", address: "114053臺北市內湖區文德路214號", lat: 25.078567, lon: 121.584973, sequence: 18, interchange: [], chainageKm: 19 },
  { code: "BR19", line: "BR", operator: "TRTC", name: "Neihu", nameZh: "內湖", district: "內湖區", address: "114049臺北市內湖區成功路4段186號", lat: 25.083675, lon: 121.594363, sequence: 19, interchange: [], chainageKm: 20.13 },
  { code: "BR20", line: "BR", operator: "TRTC", name: "Dahu Park", nameZh: "大湖公園", district: "內湖區", address: "114041臺北市內湖區成功路5段11號", lat: 25.083805, lon: 121.602214, sequence: 20, interchange: [], chainageKm: 21 },
  { code: "BR21", line: "BR", operator: "TRTC", name: "Huzhou", nameZh: "葫洲", district: "內湖區", address: "114046臺北市內湖區康寧路3段16號", lat: 25.07271, lon: 121.607146, sequence: 21, interchange: [], chainageKm: 22.63 },
  { code: "BR22", line: "BR", operator: "TRTC", name: "Donghu", nameZh: "東湖", district: "內湖區", address: "114056臺北市內湖區康寧路3段235號", lat: 25.067455, lon: 121.611535, sequence: 22, interchange: [], chainageKm: 23.48 },
  { code: "BR23", line: "BR", operator: "TRTC", name: "Nangang Software Park", nameZh: "南港軟體園區", district: "南港區", address: "115018臺北市南港區經貿二路183號", lat: 25.059911, lon: 121.61586, sequence: 23, interchange: [], chainageKm: 24.52 },
  { code: "BR24", line: "BR", operator: "TRTC", name: "Taipei Nangang Exhibition Center", nameZh: "南港展覽館", district: "南港區", address: "文湖線：115018臺北市南港區南港路1段32號", lat: 25.054919, lon: 121.616861, sequence: 24, interchange: ["BL"], chainageKm: 25.17 },
  { code: "R02", line: "R", operator: "TRTC", name: "Xiangshan", nameZh: "象山", district: "信義區", address: "110022臺北市信義區信義路5段152號B1", lat: 25.032816, lon: 121.57008, sequence: 1, interchange: [], chainageKm: 0 },
  { code: "R03", line: "R", operator: "TRTC", name: "Taipei 101/World Trade Center", nameZh: "台北101/世貿", district: "信義區", address: "110013臺北市信義區信義路5段20號B1", lat: 25.033028, lon: 121.562755, sequence: 2, interchange: [], chainageKm: 0.74 },
  { code: "R04", line: "R", operator: "TRTC", name: "Xinyi Anhe", nameZh: "信義安和", district: "大安區", address: "106049臺北市大安區信義路4段212之1號B1", lat: 25.03331, lon: 121.55265, sequence: 3, interchange: [], chainageKm: 1.73 },
  { code: "R05", line: "R", operator: "TRTC", name: "Daan", nameZh: "大安", district: "大安區", address: "106028臺北市大安區信義路3段180號B1", lat: 25.033311, lon: 121.54237, sequence: 4, interchange: ["BR"], chainageKm: 2.72 },
  { code: "R06", line: "R", operator: "TRTC", name: "Daan Park", nameZh: "大安森林公園", district: "大安區", address: "106008臺北市大安區信義路3段100號B1", lat: 25.033225, lon: 121.536151, sequence: 5, interchange: [], chainageKm: 3.51 },
  { code: "R07", line: "R", operator: "TRTC", name: "Dongmen", nameZh: "東門", district: "大安區", address: "106007臺北市大安區信義路2段166號B1", lat: 25.033894, lon: 121.528766, sequence: 6, interchange: ["O"], chainageKm: 4.18 },
  { code: "R08", line: "R", operator: "TRTC", name: "Chiang Kai-Shek Memorial Hall", nameZh: "中正紀念堂", district: "中正區", address: "100207臺北市中正區羅斯福路1段8之1號B1?", lat: 25.032767, lon: 121.518273, sequence: 7, interchange: ["G"], chainageKm: 5.74 },
  { code: "R09", line: "R", operator: "TRTC", name: "NTU Hospital", nameZh: "台大醫院", district: "中正區", address: "100006臺北市中正區公園路52號B1", lat: 25.041399, lon: 121.51602, sequence: 8, interchange: [], chainageKm: 6.73 },
  { code: "R10", line: "R", operator: "TRTC", name: "Taipei Main Station", nameZh: "台北車站", district: "中正區", address: "100009臺北市中正區忠孝西路1段49號", lat: 25.04631, lon: 121.517415, sequence: 9, interchange: ["BL"], chainageKm: 7.36 },
  { code: "R11", line: "R", operator: "TRTC", name: "Zhongshan", nameZh: "中山", district: "中山區", address: "103014臺北市大同區南京西路16號", lat: 25.052621, lon: 121.520364, sequence: 10, interchange: ["G"], chainageKm: 8.02 },
  { code: "R12", line: "R", operator: "TRTC", name: "Shuanglian", nameZh: "雙連", district: "中山區", address: "103018臺北市大同區民生西路47號", lat: 25.057575, lon: 121.520685, sequence: 11, interchange: [], chainageKm: 8.57 },
  { code: "R13", line: "R", operator: "TRTC", name: "Minquan W. Rd.", nameZh: "民權西路", district: "中山區", address: "103045臺北市大同區民權西路72號", lat: 25.06235, lon: 121.519585, sequence: 12, interchange: ["O"], chainageKm: 9.1 },
  { code: "R14", line: "R", operator: "TRTC", name: "Yuanshan", nameZh: "圓山", district: "中山區", address: "103032臺北市大同區酒泉街9之1號", lat: 25.071409, lon: 121.520074, sequence: 13, interchange: [], chainageKm: 10.13 },
  { code: "R15", line: "R", operator: "TRTC", name: "Jiantan", nameZh: "劍潭", district: "士林區", address: "111011臺北市士林區中山北路5段65號", lat: 25.084201, lon: 121.524955, sequence: 14, interchange: [], chainageKm: 11.65 },
  { code: "R16", line: "R", operator: "TRTC", name: "Shilin", nameZh: "士林", district: "士林區", address: "111012臺北市士林區福德路1號", lat: 25.093492, lon: 121.52623, sequence: 15, interchange: [], chainageKm: 12.74 },
  { code: "R17", line: "R", operator: "TRTC", name: "Zhishan", nameZh: "芝山", district: "士林區", address: "111031臺北市士林區福國路70號", lat: 25.102718, lon: 121.522546, sequence: 16, interchange: [], chainageKm: 13.84 },
  { code: "R18", line: "R", operator: "TRTC", name: "Mingde", nameZh: "明德", district: "北投區", address: "112038臺北市北投區明德路95號", lat: 25.109815, lon: 121.518785, sequence: 17, interchange: [], chainageKm: 14.72 },
  { code: "R19", line: "R", operator: "TRTC", name: "Shipai", nameZh: "石牌", district: "北投區", address: "112052臺北市北投區石牌路1段200號", lat: 25.114455, lon: 121.515572, sequence: 18, interchange: [], chainageKm: 15.32 },
  { code: "R20", line: "R", operator: "TRTC", name: "Qilian", nameZh: "唭哩岸", district: "北投區", address: "112025臺北市北投區東華街2段301號", lat: 25.120852, lon: 121.506234, sequence: 19, interchange: [], chainageKm: 16.58 },
  { code: "R21", line: "R", operator: "TRTC", name: "Qiyan", nameZh: "奇岩", district: "北投區", address: "112057臺北市北投區三合街2段489號", lat: 25.12547, lon: 121.50114, sequence: 20, interchange: [], chainageKm: 17.41 },
  { code: "R22", line: "R", operator: "TRTC", name: "Beitou", nameZh: "北投", district: "北投區", address: "112006臺北市北投區光明路1號", lat: 25.131819, lon: 121.498648, sequence: 21, interchange: ["R"], chainageKm: 18.17 },
  { code: "R23", line: "R", operator: "TRTC", name: "Fuxinggang", nameZh: "復興崗", district: "北投區", address: "112054臺北市北投區中央北路3段53巷10號", lat: 25.137474, lon: 121.485457, sequence: 22, interchange: [], chainageKm: 19.78 },
  { code: "R24", line: "R", operator: "TRTC", name: "Zhongyi", nameZh: "忠義", district: "北投區", address: "112017臺北市北投區中央北路4段301號", lat: 25.131041, lon: 121.473293, sequence: 23, interchange: [], chainageKm: 21.23 },
  { code: "R25", line: "R", operator: "TRTC", name: "Guandu", nameZh: "關渡", district: "北投區", address: "112021臺北市北投區大度路3段296巷51號", lat: 25.12563, lon: 121.4671, sequence: 24, interchange: [], chainageKm: 22.1 },
  { code: "R26", line: "R", operator: "TRTC", name: "Zhuwei", nameZh: "竹圍", district: "淡水區", address: "251033新北市淡水區民權路50號", lat: 25.1369, lon: 121.45955, sequence: 25, interchange: [], chainageKm: 24.24 },
  { code: "R27", line: "R", operator: "TRTC", name: "Hongshulin", nameZh: "紅樹林", district: "淡水區", address: "251033新北市淡水區中正東路2段68號", lat: 25.15399, lon: 121.4588, sequence: 26, interchange: [], chainageKm: 26.15 },
  { code: "R28", line: "R", operator: "TRTC", name: "Tamsui", nameZh: "淡水", district: "淡水區", address: "251018新北市淡水區中正路1號", lat: 25.167745, lon: 121.445805, sequence: 27, interchange: [], chainageKm: 28.24 },
  { code: "R22A", line: "R", operator: "TRTC", name: "Xinbeitou", nameZh: "新北投", district: "北投區", address: "112028臺北市北投區大業路700號", lat: 25.136931, lon: 121.502595, sequence: 28, interchange: [], chainageKm: null },
  { code: "G01", line: "G", operator: "TRTC", name: "Xindian", nameZh: "新店", district: "新店區", address: "231039新北市新店區北宜路1段2號", lat: 24.958181, lon: 121.5377, sequence: 1, interchange: [], chainageKm: 0 },
  { code: "G02", line: "G", operator: "TRTC", name: "Xindian District Office", nameZh: "新店區公所", district: "新店區", address: "231634新北市新店區北新路1段295號", lat: 24.96744, lon: 121.5413, sequence: 2, interchange: [], chainageKm: 1.11 },
  { code: "G03", line: "G", operator: "TRTC", name: "Qizhang", nameZh: "七張", district: "新店區", address: "231007新北市新店區北新路2段150號", lat: 24.975036, lon: 121.543129, sequence: 3, interchange: ["G"], chainageKm: 2.01 },
  { code: "G04", line: "G", operator: "TRTC", name: "Dapinglin", nameZh: "大坪林", district: "新店區", address: "23143新北市新店區北新路3段190號", lat: 24.98272, lon: 121.54134, sequence: 4, interchange: ["Y"], chainageKm: 2.86 },
  { code: "G05", line: "G", operator: "TRTC", name: "Jingmei", nameZh: "景美", district: "文山區", address: "116056臺北市文山區羅斯福路6段216號", lat: 24.992824, lon: 121.540697, sequence: 5, interchange: [], chainageKm: 4.01 },
  { code: "G06", line: "G", operator: "TRTC", name: "Wanlong", nameZh: "萬隆", district: "文山區", address: "116060臺北市文山區羅斯福路5段214號", lat: 25.001978, lon: 121.539008, sequence: 6, interchange: [], chainageKm: 5.07 },
  { code: "G07", line: "G", operator: "TRTC", name: "Gongguan", nameZh: "公館", district: "大安區", address: "100046臺北市中正區羅斯福路4段64之1號B1", lat: 25.014781, lon: 121.534358, sequence: 7, interchange: [], chainageKm: 6.63 },
  { code: "G08", line: "G", operator: "TRTC", name: "Taipower Building", nameZh: "台電大樓", district: "大安區", address: "100043臺北市中正區羅斯福路3段126之5號B1", lat: 25.020733, lon: 121.528143, sequence: 8, interchange: [], chainageKm: 7.53 },
  { code: "G09", line: "G", operator: "TRTC", name: "Guting", nameZh: "古亭", district: "中正區", address: "100032臺北市中正區羅斯福路2段164之1號B1", lat: 25.026373, lon: 121.522868, sequence: 9, interchange: ["O"], chainageKm: 8.41 },
  { code: "G10", line: "G", operator: "TRTC", name: "Chiang Kai-Shek Memorial Hall", nameZh: "中正紀念堂", district: "中正區", address: "100207臺北市中正區羅斯福路1段8之1號B1?", lat: 25.032767, lon: 121.518273, sequence: 10, interchange: ["R"], chainageKm: 9.34 },
  { code: "G11", line: "G", operator: "TRTC", name: "Xiaonanmen", nameZh: "小南門", district: "中正區", address: "100057臺北市中正區愛國西路22號B1", lat: 25.035619, lon: 121.510798, sequence: 11, interchange: [], chainageKm: 10.1 },
  { code: "G12", line: "G", operator: "TRTC", name: "Ximen", nameZh: "西門", district: "中正區", address: "100005臺北市中正區寶慶路32之1號B1", lat: 25.042274, lon: 121.508511, sequence: 12, interchange: ["BL"], chainageKm: 10.92 },
  { code: "G13", line: "G", operator: "TRTC", name: "Beimen", nameZh: "北門", district: "大同區", address: "103005臺北市大同區塔城街10號", lat: 25.049554, lon: 121.510184, sequence: 13, interchange: [], chainageKm: 11.73 },
  { code: "G14", line: "G", operator: "TRTC", name: "Zhongshan", nameZh: "中山", district: "中山區", address: "103022臺北市大同區南京西路55號", lat: 25.052621, lon: 121.520364, sequence: 14, interchange: ["R"], chainageKm: 12.99 },
  { code: "G15", line: "G", operator: "TRTC", name: "Songjiang Nanjing", nameZh: "松江南京", district: "中山區", address: "104092臺北市中山區松江路126號B1", lat: 25.052693, lon: 121.53285, sequence: 15, interchange: ["O"], chainageKm: 14.29 },
  { code: "G16", line: "G", operator: "TRTC", name: "Nanjing Fuxing", nameZh: "南京復興", district: "松山區", address: "105020臺北市松山區南京東路3段253號", lat: 25.052044, lon: 121.544303, sequence: 16, interchange: ["BR"], chainageKm: 15.28 },
  { code: "G17", line: "G", operator: "TRTC", name: "Taipei Arena", nameZh: "台北小巨蛋", district: "松山區", address: "105037臺北市松山區南京東路4段10之1號", lat: 25.05152, lon: 121.552549, sequence: 17, interchange: [], chainageKm: 16.22 },
  { code: "G18", line: "G", operator: "TRTC", name: "Nanjing Sanmin", nameZh: "南京三民", district: "松山區", address: "105062臺北市松山區南京東路5段237號", lat: 25.051588, lon: 121.56471, sequence: 18, interchange: [], chainageKm: 17.42 },
  { code: "G19", line: "G", operator: "TRTC", name: "Songshan", nameZh: "松山", district: "松山區", address: "105057臺北市松山區八德路4段742號", lat: 25.050118, lon: 121.577706, sequence: 19, interchange: [], chainageKm: 18.77 },
  { code: "G03A", line: "G", operator: "TRTC", name: "Xiaobitan", nameZh: "小碧潭", district: "新店區", address: "231222新北市新店區中央路151號4樓", lat: 24.97188, lon: 121.53058, sequence: 20, interchange: [], chainageKm: null },
  { code: "O01", line: "O", operator: "TRTC", name: "Nanshijiao", nameZh: "南勢角", district: "中和區", address: "235050新北市中和區捷運路6號", lat: 24.990065, lon: 121.509237, sequence: 1, interchange: [], chainageKm: 0 },
  { code: "O02", line: "O", operator: "TRTC", name: "Jingan", nameZh: "景安", district: "中和區", address: "23582新北市中和區景平路486號", lat: 24.99392, lon: 121.505114, sequence: 2, interchange: ["Y"], chainageKm: 0.81 },
  { code: "O03", line: "O", operator: "TRTC", name: "Yongan Market", nameZh: "永安市場", district: "永和區", address: "235066新北市中和區中和路388號", lat: 25.002895, lon: 121.511225, sequence: 3, interchange: [], chainageKm: 1.89 },
  { code: "O04", line: "O", operator: "TRTC", name: "Dingxi", nameZh: "頂溪", district: "永和區", address: "234016新北市永和區永和路2段168號B1", lat: 25.01308, lon: 121.515398, sequence: 4, interchange: [], chainageKm: 3.22 },
  { code: "O05", line: "O", operator: "TRTC", name: "Guting", nameZh: "古亭", district: "中正區", address: "100032臺北市中正區羅斯福路2段164之1號B1", lat: 25.026373, lon: 121.522868, sequence: 5, interchange: ["G"], chainageKm: 5.36 },
  { code: "O06", line: "O", operator: "TRTC", name: "Dongmen", nameZh: "東門", district: "大安區", address: "10650臺北市大安區信義路2段166號B1", lat: 25.033894, lon: 121.528766, sequence: 6, interchange: ["R"], chainageKm: 6.94 },
  { code: "O07", line: "O", operator: "TRTC", name: "Zhongxiao Xinsheng", nameZh: "忠孝新生", district: "大安區", address: "106083臺北市大安區新生南路1段67號", lat: 25.041797, lon: 121.532856, sequence: 7, interchange: ["BL"], chainageKm: 8.14 },
  { code: "O08", line: "O", operator: "TRTC", name: "Songjiang Nanjing", nameZh: "松江南京", district: "中山區", address: "104092臺北市中山區松江路126號B1", lat: 25.052693, lon: 121.53285, sequence: 8, interchange: ["G"], chainageKm: 9.28 },
  { code: "O09", line: "O", operator: "TRTC", name: "Xingtian Temple", nameZh: "行天宮", district: "中山區", address: "104023臺北市中山區松江路316號B1", lat: 25.05924, lon: 121.53315, sequence: 9, interchange: [], chainageKm: 10.08 },
  { code: "O10", line: "O", operator: "TRTC", name: "Zhongshan Elementary School", nameZh: "中山國小", district: "中山區", address: "104028臺北市中山區民權東路1段71號B1", lat: 25.062665, lon: 121.526609, sequence: 10, interchange: [], chainageKm: 11.03 },
  { code: "O11", line: "O", operator: "TRTC", name: "Minquan W. Rd.", nameZh: "民權西路", district: "中山區", address: "103045臺北市大同區民權西路72號", lat: 25.06235, lon: 121.519585, sequence: 11, interchange: ["R"], chainageKm: 11.74 },
  { code: "O12", line: "O", operator: "TRTC", name: "Daqiaotou", nameZh: "大橋頭", district: "大同區", address: "103041臺北市大同區民權西路223號B1", lat: 25.06322, lon: 121.513003, sequence: 12, interchange: ["O"], chainageKm: 12.4 },
  { code: "O13", line: "O", operator: "TRTC", name: "Taipei Bridge", nameZh: "台北橋", district: "三重區", address: "241454新北市三重區重新路1段108號B1", lat: 25.063075, lon: 121.500575, sequence: 13, interchange: [], chainageKm: 13.73 },
  { code: "O14", line: "O", operator: "TRTC", name: "Cailiao", nameZh: "菜寮", district: "三重區", address: "241007新北市三重區重新路3段150號B1", lat: 25.059808, lon: 121.491451, sequence: 14, interchange: [], chainageKm: 14.72 },
  { code: "O15", line: "O", operator: "TRTC", name: "Sanchong", nameZh: "三重", district: "三重區", address: "241012新北市三重區捷運路36號B1", lat: 25.05571, lon: 121.48422, sequence: 15, interchange: [], chainageKm: 15.59 },
  { code: "O16", line: "O", operator: "TRTC", name: "Xianse Temple", nameZh: "先嗇宮", district: "三重區", address: "241017新北市三重區重新路5段515號B1", lat: 25.04632, lon: 121.47165, sequence: 16, interchange: [], chainageKm: 17.31 },
  { code: "O17", line: "O", operator: "TRTC", name: "Touqianzhuang", nameZh: "頭前庄", district: "新莊區", address: "24251新北市新莊區思源路18號B1", lat: 25.039862, lon: 121.460479, sequence: 17, interchange: ["Y"], chainageKm: 18.58 },
  { code: "O18", line: "O", operator: "TRTC", name: "Xinzhuang", nameZh: "新莊", district: "新莊區", address: "242008新北市新莊區中正路138號B1", lat: 25.03608, lon: 121.45218, sequence: 18, interchange: [], chainageKm: 19.6 },
  { code: "O19", line: "O", operator: "TRTC", name: "Fu Jen University", nameZh: "輔大", district: "新莊區", address: "242062新北市新莊區中正路510之1號B1", lat: 25.03279, lon: 121.435735, sequence: 19, interchange: [], chainageKm: 21.34 },
  { code: "O20", line: "O", operator: "TRTC", name: "Danfeng", nameZh: "丹鳳", district: "新莊區", address: "242048新北市新莊區中正路624之1號B1", lat: 25.029073, lon: 121.422422, sequence: 20, interchange: [], chainageKm: 22.71 },
  { code: "O21", line: "O", operator: "TRTC", name: "Huilong", nameZh: "迴龍", district: "新莊區", address: "242052新北市新莊區中正路758號B1", lat: 25.022107, lon: 121.411757, sequence: 21, interchange: [], chainageKm: 24.11 },
  { code: "O50", line: "O", operator: "TRTC", name: "Sanchong Elementary School", nameZh: "三重國小", district: "三重區", address: "241054新北市三重區三和路3段5號B1", lat: 25.070275, lon: 121.49701, sequence: 22, interchange: [], chainageKm: null },
  { code: "O51", line: "O", operator: "TRTC", name: "Sanhe Junior High School", nameZh: "三和國中", district: "三重區", address: "241080新北市三重區三和路4段107號B1", lat: 25.076794, lon: 121.486455, sequence: 23, interchange: [], chainageKm: null },
  { code: "O52", line: "O", operator: "TRTC", name: "St.lgnatius High School", nameZh: "徐匯中學", district: "蘆洲區", address: "247019新北市蘆洲區中山一路3號B1", lat: 25.080485, lon: 121.479945, sequence: 24, interchange: [], chainageKm: null },
  { code: "O53", line: "O", operator: "TRTC", name: "Sanmin Senior High School", nameZh: "三民高中", district: "蘆洲區", address: "247010新北市蘆洲區三民路105號B1", lat: 25.085425, lon: 121.473365, sequence: 25, interchange: [], chainageKm: null },
  { code: "O54", line: "O", operator: "TRTC", name: "Luzhou", nameZh: "蘆洲", district: "蘆洲區", address: "247011新北市蘆洲區三民路386號B1", lat: 25.09152, lon: 121.46471, sequence: 26, interchange: [], chainageKm: null },
  { code: "BL01", line: "BL", operator: "TRTC", name: "Dingpu", nameZh: "頂埔", district: "土城區", address: "236040新北市土城區中央路4段51之6號B3", lat: 24.959351, lon: 121.418744, sequence: 1, interchange: [], chainageKm: 0 },
  { code: "BL02", line: "BL", operator: "TRTC", name: "Yongning", nameZh: "永寧", district: "土城區", address: "236036新北市土城區中央路3段105號B1", lat: 24.96682, lon: 121.43613, sequence: 2, interchange: [], chainageKm: 1.95 },
  { code: "BL03", line: "BL", operator: "TRTC", name: "Tucheng", nameZh: "土城", district: "土城區", address: "236017新北市土城區金城路1段105號B1", lat: 24.97313, lon: 121.44432, sequence: 3, interchange: [], chainageKm: 3.06 },
  { code: "BL04", line: "BL", operator: "TRTC", name: "Haishan", nameZh: "海山", district: "土城區", address: "236023新北市土城區海山路39號B2", lat: 24.985348, lon: 121.448787, sequence: 4, interchange: [], chainageKm: 4.53 },
  { code: "BL05", line: "BL", operator: "TRTC", name: "Far Eastern Hospital", nameZh: "亞東醫院", district: "板橋區", address: "220056新北市板橋區南雅南路2段17號B1", lat: 24.99828, lon: 121.452465, sequence: 5, interchange: [], chainageKm: 6.17 },
  { code: "BL06", line: "BL", operator: "TRTC", name: "Fuzhong", nameZh: "府中", district: "板橋區", address: "220052新北市板橋區縣民大道1段193號B1", lat: 25.008465, lon: 121.459276, sequence: 6, interchange: [], chainageKm: 7.45 },
  { code: "BL07", line: "BL", operator: "TRTC", name: "Banqiao", nameZh: "板橋", district: "板橋區", address: "220073新北市板橋區站前路5號B1", lat: 25.014098, lon: 121.462671, sequence: 7, interchange: ["Y"], chainageKm: 8.1 },
  { code: "BL08", line: "BL", operator: "TRTC", name: "Xinpu", nameZh: "新埔", district: "板橋區", address: "220030新北市板橋區民生路3段2號B1", lat: 25.023736, lon: 121.468363, sequence: 8, interchange: ["Y"], chainageKm: 9.38 },
  { code: "BL09", line: "BL", operator: "TRTC", name: "Jiangzicui", nameZh: "江子翠", district: "板橋區", address: "220016新北市板橋區文化路2段296號B1", lat: 25.030265, lon: 121.47257, sequence: 9, interchange: [], chainageKm: 10.25 },
  { code: "BL10", line: "BL", operator: "TRTC", name: "Longshan Temple", nameZh: "龍山寺", district: "萬華區", address: "108015臺北市萬華區西園路1段153號", lat: 25.03528, lon: 121.500325, sequence: 10, interchange: [], chainageKm: 13.33 },
  { code: "BL11", line: "BL", operator: "TRTC", name: "Ximen", nameZh: "西門", district: "中正區", address: "100005臺北市中正區寶慶路32之1號B1", lat: 25.042274, lon: 121.508511, sequence: 11, interchange: ["G"], chainageKm: 14.64 },
  { code: "BL12", line: "BL", operator: "TRTC", name: "Taipei Main Station", nameZh: "台北車站", district: "中正區", address: "100009臺北市中正區忠孝西路1段49號", lat: 25.04631, lon: 121.517415, sequence: 12, interchange: ["R"], chainageKm: 15.99 },
  { code: "BL13", line: "BL", operator: "TRTC", name: "Shandao Temple", nameZh: "善導寺", district: "中正區", address: "100024臺北市中正區忠孝東路1段58號B1", lat: 25.04468, lon: 121.523885, sequence: 13, interchange: [], chainageKm: 16.67 },
  { code: "BL14", line: "BL", operator: "TRTC", name: "Zhongxiao Xinsheng", nameZh: "忠孝新生", district: "中正區", address: "106083臺北市大安區新生南路1段67號", lat: 25.0423, lon: 121.5328, sequence: 14, interchange: ["O"], chainageKm: 17.61 },
  { code: "BL15", line: "BL", operator: "TRTC", name: "Zhongxiao Fuxing", nameZh: "忠孝復興", district: "大安區", address: "106071臺北市大安區忠孝東路4段47號", lat: 25.041633, lon: 121.543769, sequence: 15, interchange: ["BR"], chainageKm: 18.73 },
  { code: "BL16", line: "BL", operator: "TRTC", name: "Zhongxiao Dunhua", nameZh: "忠孝敦化", district: "大安區", address: "106057臺北市大安區忠孝東路4段182號", lat: 25.041505, lon: 121.55045, sequence: 16, interchange: [], chainageKm: 19.4 },
  { code: "BL17", line: "BL", operator: "TRTC", name: "Sun Yat-Sen Memorial Hall", nameZh: "國父紀念館", district: "信義區", address: "110054臺北市信義區忠孝東路4段400號", lat: 25.04137, lon: 121.557815, sequence: 17, interchange: [], chainageKm: 20.13 },
  { code: "BL18", line: "BL", operator: "TRTC", name: "Taipei City Hall", nameZh: "市政府", district: "信義區", address: "110060臺北市信義區忠孝東路5段2號", lat: 25.041135, lon: 121.565685, sequence: 18, interchange: [], chainageKm: 20.97 },
  { code: "BL19", line: "BL", operator: "TRTC", name: "Yongchun", nameZh: "永春", district: "信義區", address: "110037臺北市信義區忠孝東路5段455號", lat: 25.040855, lon: 121.5762, sequence: 19, interchange: [], chainageKm: 21.96 },
  { code: "BL20", line: "BL", operator: "TRTC", name: "Houshanpi", nameZh: "後山埤", district: "南港區", address: "115025臺北市南港區忠孝東路6段2號", lat: 25.044715, lon: 121.58227, sequence: 20, interchange: [], chainageKm: 22.78 },
  { code: "BL21", line: "BL", operator: "TRTC", name: "Kunyang", nameZh: "昆陽", district: "南港區", address: "115007臺北市南港區忠孝東路6段451號", lat: 25.050459, lon: 121.593228, sequence: 21, interchange: [], chainageKm: 24.14 },
  { code: "BL22", line: "BL", operator: "TRTC", name: "Nangang", nameZh: "南港", district: "南港區", address: "115011臺北市南港區忠孝東路7段380號", lat: 25.052035, lon: 121.60697, sequence: 22, interchange: [], chainageKm: 25.56 },
  { code: "BL23", line: "BL", operator: "TRTC", name: "Taipei Nangang Exhibition Center", nameZh: "南港展覽館", district: "南港區", address: "板南線：115021臺北市南港區研究院路1段1號", lat: 25.054919, lon: 121.616861, sequence: 23, interchange: ["BR"], chainageKm: 26.65 },
  { code: "Y07", line: "Y", operator: "NTMC", name: "Dapinglin", nameZh: "大坪林", district: "新店區", address: "23143新北市新店區北新路3段190號", lat: 24.98272, lon: 121.54134, sequence: 1, interchange: ["G"], chainageKm: 0 },
  { code: "Y08", line: "Y", operator: "NTMC", name: "Shisizhang", nameZh: "十四張", district: "新店區", address: "23141新北市新店區民權路282號", lat: 24.984333, lon: 121.527698, sequence: 2, interchange: [], chainageKm: 1.55 },
  { code: "Y09", line: "Y", operator: "NTMC", name: "Xiulang Bridge", nameZh: "秀朗橋", district: "中和區", address: "23582新北市中和區景平路2號", lat: 24.990549, lon: 121.525051, sequence: 3, interchange: [], chainageKm: 2.43 },
  { code: "Y10", line: "Y", operator: "NTMC", name: "Jingping", nameZh: "景平", district: "中和區", address: "23578新北市中和區景平路121號", lat: 24.992143, lon: 121.516386, sequence: 4, interchange: [], chainageKm: 3.34 },
  { code: "Y11", line: "Y", operator: "NTMC", name: "Jingan", nameZh: "景安", district: "中和區", address: "23582新北市中和區景平路486號", lat: 24.99392, lon: 121.505114, sequence: 5, interchange: ["O"], chainageKm: 4.42 },
  { code: "Y12", line: "Y", operator: "NTMC", name: "Zhonghe", nameZh: "中和", district: "中和區", address: "23558新北市中和區中山路二段271號", lat: 25.002382, lon: 121.495978, sequence: 6, interchange: [], chainageKm: 5.94 },
  { code: "Y13", line: "Y", operator: "NTMC", name: "Qiaohe", nameZh: "橋和", district: "中和區", address: "23557新北市中和區板南路430號", lat: 25.004413, lon: 121.490461, sequence: 7, interchange: [], chainageKm: 6.57 },
  { code: "Y14", line: "Y", operator: "NTMC", name: "Zhongyuan", nameZh: "中原", district: "中和區", address: "23556新北市中和區板南路510號", lat: 25.00841, lon: 121.484159, sequence: 8, interchange: [], chainageKm: 7.32 },
  { code: "Y15", line: "Y", operator: "NTMC", name: "Banxin", nameZh: "板新", district: "板橋區", address: "22066新北市板橋區板新路109號", lat: 25.014436, lon: 121.472269, sequence: 9, interchange: [], chainageKm: 8.72 },
  { code: "Y16", line: "Y", operator: "NTMC", name: "Banqiao", nameZh: "板橋", district: "板橋區", address: "22041新北市板橋區新站路66號", lat: 25.015156, lon: 121.464825, sequence: 10, interchange: ["BL"], chainageKm: 9.62 },
  { code: "Y17", line: "Y", operator: "NTMC", name: "Xinpu Minsheng", nameZh: "新埔民生", district: "板橋區", address: "22047新北市板橋區民生路3段70號", lat: 25.026282, lon: 121.466831, sequence: 11, interchange: ["BL"], chainageKm: 11.04 },
  { code: "Y18", line: "Y", operator: "NTMC", name: "Touqianzhuang", nameZh: "頭前庄", district: "新莊區", address: "24251新北市新莊區思源路18號B1", lat: 25.039862, lon: 121.460479, sequence: 12, interchange: ["O"], chainageKm: 12.67 },
  { code: "Y19", line: "Y", operator: "NTMC", name: "Xingfu", nameZh: "幸福", district: "新莊區", address: "24250新北市新莊區思源路292號", lat: 25.049984, lon: 121.45998, sequence: 13, interchange: [], chainageKm: 13.82 },
  { code: "Y20", line: "Y", operator: "NTMC", name: "New Taipei Industrial Park", nameZh: "新北產業園區", district: "新莊區", address: "24886新北市新莊區五工路35號", lat: 25.061548, lon: 121.459926, sequence: 14, interchange: [], chainageKm: 15.06 },
  { code: "A1", line: "A", operator: "TYMC", name: "Taipei Main Station", nameZh: "台北車站", district: "中正區", address: "台北市中正區鄭州路8號", lat: 25.04869, lon: 121.51428, sequence: 1, interchange: [], chainageKm: 0 },
  { code: "A2", line: "A", operator: "TYMC", name: "Sanchong Station", nameZh: "三重站", district: "三重區", address: "新北市三重區捷運路36號", lat: 25.0548, lon: 121.48273, sequence: 2, interchange: [], chainageKm: 4.236 },
  { code: "A3", line: "A", operator: "TYMC", name: "New Taipei Industrial Park Station", nameZh: "新北產業園區站", district: "新莊區", address: "新北市新莊區五工路37號", lat: 25.06171, lon: 121.45918, sequence: 3, interchange: [], chainageKm: 7.729 },
  { code: "A4", line: "A", operator: "TYMC", name: "Xinzhuang Fuduxin Station", nameZh: "新莊副都心站", district: "泰山區", address: "新北市新莊區新北大道四段188號", lat: 25.05924, lon: 121.44561, sequence: 4, interchange: [], chainageKm: 9.098 },
  { code: "A5", line: "A", operator: "TYMC", name: "Taishan Station", nameZh: "泰山站", district: "泰山區", address: "新北市泰山區新北大道四段431號", lat: 25.05321, lon: 121.43943, sequence: 5, interchange: [], chainageKm: 10.029 },
  { code: "A6", line: "A", operator: "TYMC", name: "Taishan Guihe Station", nameZh: "泰山貴和站", district: "泰山區", address: "新北市泰山區新北大道六段460號", lat: 25.03321, lon: 121.42262, sequence: 6, interchange: [], chainageKm: 12.833 },
  { code: "A7", line: "A", operator: "TYMC", name: "National Taiwan Sport University Station", nameZh: "體育大學站", district: "龜山區", address: "桃園市龜山區文化一路688號", lat: 25.04124, lon: 121.38543, sequence: 7, interchange: [], chainageKm: 17.403 },
  { code: "A8", line: "A", operator: "TYMC", name: "Chang Gung Memorial Hospital Station", nameZh: "長庚醫院站", district: "龜山區", address: "桃園市龜山區文化一路6號", lat: 25.06053, lon: 121.37073, sequence: 8, interchange: [], chainageKm: 20.145 },
  { code: "A9", line: "A", operator: "TYMC", name: "Linkou Station", nameZh: "林口站", district: "林口區", address: "新北市林口區八德路290號", lat: 25.0658, lon: 121.36134, sequence: 9, interchange: [], chainageKm: 21.35 },
  { code: "A10", line: "A", operator: "TYMC", name: "Shanbi Station", nameZh: "山鼻站", district: "蘆竹區", address: "桃園市蘆竹區南山路三段155號", lat: 25.0808, lon: 121.28476, sequence: 10, interchange: [], chainageKm: 29.745 },
  { code: "A11", line: "A", operator: "TYMC", name: "Kengkou Station", nameZh: "坑口站", district: "蘆竹區", address: "桃園市蘆竹區坑菓路460號", lat: 25.08646, lon: 121.26637, sequence: 11, interchange: [], chainageKm: 31.721 },
  { code: "A12", line: "A", operator: "TYMC", name: "Airport Terminal 1 Station", nameZh: "機場第一航廈站", district: "大園區", address: "桃園市大園區航站南路17之1號", lat: 25.0814, lon: 121.23783, sequence: 12, interchange: [], chainageKm: 34.876 },
  { code: "A13", line: "A", operator: "TYMC", name: "Airport Terminal 2 Station", nameZh: "機場第二航廈站", district: "大園區", address: "桃園市大園區航站南路9號地下一層之1號", lat: 25.07735, lon: 121.23213, sequence: 13, interchange: [], chainageKm: 35.896 },
  { code: "A14a", line: "A", operator: "TYMC", name: "Airport Hotel Station", nameZh: "機場旅館站", district: "大園區", address: "桃園市大園區航站南路1之2號", lat: 25.07007, lon: 121.22142, sequence: 14, interchange: [], chainageKm: 37.232 },
  { code: "A15", line: "A", operator: "TYMC", name: "Dayuan Station", nameZh: "大園站", district: "大園區", address: "桃園市大園區橫湳一路50號", lat: 25.05595, lon: 121.21048, sequence: 15, interchange: [], chainageKm: 39.13 },
  { code: "A16", line: "A", operator: "TYMC", name: "Hengshan Station", nameZh: "橫山站", district: "大園區", address: "桃園市大園區大竹南路1180號", lat: 25.03665, lon: 121.21556, sequence: 16, interchange: [], chainageKm: 41.38 },
  { code: "A17", line: "A", operator: "TYMC", name: "Linghang Station", nameZh: "領航站", district: "大園區", address: "桃園市大園區橫峰里37鄰領航北路四段351號", lat: 25.02417, lon: 121.22095, sequence: 17, interchange: [], chainageKm: 42.96 },
  { code: "A18", line: "A", operator: "TYMC", name: "Taoyuan HSR Station", nameZh: "高鐵桃園站", district: "中壢區", address: "桃園市中壢區青埔里2鄰高鐵北路一段5號", lat: 25.01374, lon: 121.21406, sequence: 18, interchange: [], chainageKm: 44.57 },
  { code: "A19", line: "A", operator: "TYMC", name: "Taoyuan Sports Park Station", nameZh: "桃園體育園區站", district: "中壢區", address: "桃園市中壢區芝芭里1鄰高鐵南路二段350號", lat: 25.00199, lon: 121.20349, sequence: 19, interchange: [], chainageKm: 46.31 },
  { code: "A20", line: "A", operator: "TYMC", name: "Xingnan Station", nameZh: "興南站", district: "中壢區", address: "桃園市中壢區興和里6鄰中豐北路一段685號", lat: 24.98025, lon: 121.21627, sequence: 20, interchange: [], chainageKm: 49.27 },
  { code: "A21", line: "A", operator: "TYMC", name: "Huanbei Station", nameZh: "環北站", district: "中壢區", address: "桃園市中壢區中豐北路一段26號", lat: 24.96722, lon: 121.22114, sequence: 21, interchange: [], chainageKm: 50.81 },
  { code: "A22", line: "A", operator: "TYMC", name: "Laojie River Station", nameZh: "老街溪站", district: "中壢區", address: "桃園市中壢區中豐路289號", lat: 24.95823, lon: 121.21936, sequence: 22, interchange: [], chainageKm: 51.76 },
  { code: "V01", line: "V", operator: "NTDLRT", name: "Hongshulin", nameZh: "紅樹林", district: "淡水區", address: "新北市淡水區中正東路二段68號(輕軌紅樹林站)", lat: 25.155597, lon: 121.458851, sequence: 1, interchange: [], chainageKm: 0 },
  { code: "V02", line: "V", operator: "NTDLRT", name: "Ganzhenlin", nameZh: "竿蓁林", district: "淡水區", address: "", lat: 25.162415, lon: 121.456232, sequence: 2, interchange: [], chainageKm: 0.84 },
  { code: "V03", line: "V", operator: "NTDLRT", name: "Danjin Denggong", nameZh: "淡金鄧公", district: "淡水區", address: "", lat: 25.169363, lon: 121.460813, sequence: 3, interchange: [], chainageKm: 1.77 },
  { code: "V04", line: "V", operator: "NTDLRT", name: "Tamkang University", nameZh: "淡江大學", district: "淡水區", address: "", lat: 25.176959, lon: 121.456082, sequence: 4, interchange: [], chainageKm: 2.75 },
  { code: "V05", line: "V", operator: "NTDLRT", name: "Danjin Beixin", nameZh: "淡金北新", district: "淡水區", address: "", lat: 25.181131, lon: 121.452366, sequence: 5, interchange: [], chainageKm: 3.33 },
  { code: "V06", line: "V", operator: "NTDLRT", name: "Xinshi 1st Rd.", nameZh: "新市一路", district: "淡水區", address: "", lat: 25.183817, lon: 121.448258, sequence: 6, interchange: [], chainageKm: 3.84 },
  { code: "V07", line: "V", operator: "NTDLRT", name: "Tamsui District Office", nameZh: "淡水行政中心", district: "淡水區", address: "", lat: 25.189017, lon: 121.444482, sequence: 7, interchange: [], chainageKm: 4.69 },
  { code: "V08", line: "V", operator: "NTDLRT", name: "Binhai Yishan", nameZh: "濱海義山", district: "淡水區", address: "", lat: 25.18977, lon: 121.43738, sequence: 8, interchange: [], chainageKm: 5.41 },
  { code: "V09", line: "V", operator: "NTDLRT", name: "Binhai Shalun", nameZh: "濱海沙崙", district: "淡水區", address: "", lat: 25.190501, lon: 121.431589, sequence: 9, interchange: [], chainageKm: 6 },
  { code: "V28", line: "V", operator: "NTDLRT", name: "Taipei University of Marine Technology", nameZh: "台北海洋大學", district: "淡水區", address: "", lat: 25.191141, lon: 121.426365, sequence: 10, interchange: [], chainageKm: 6.49 },
  { code: "V27", line: "V", operator: "NTDLRT", name: "Shalun", nameZh: "沙崙", district: "淡水區", address: "", lat: 25.187536, lon: 121.417331, sequence: 11, interchange: [], chainageKm: 7.61 },
  { code: "V26", line: "V", operator: "NTDLRT", name: "Tamsui Fisherman's Wharf", nameZh: "淡水漁人碼頭", district: "淡水區", address: "新北市淡水區中正路二段51巷", lat: 25.182005, lon: 121.418605, sequence: 12, interchange: [], chainageKm: 8.42 },
  { code: "V10", line: "V", operator: "NTDLRT", name: "Danhai New Town", nameZh: "淡海新市鎮", district: "淡水區", address: "", lat: 25.195691, lon: 121.432471, sequence: 13, interchange: [], chainageKm: null },
  { code: "V11", line: "V", operator: "NTDLRT", name: "Kanding", nameZh: "崁頂", district: "淡水區", address: "", lat: 25.200994, lon: 121.434651, sequence: 14, interchange: [], chainageKm: null },
  { code: "K01", line: "K", operator: "NTALRT", name: "Shuangcheng", nameZh: "雙城", district: "新店區", address: "", lat: 24.946321, lon: 121.489645, sequence: 1, interchange: [], chainageKm: 0 },
  { code: "K02", line: "K", operator: "NTALRT", name: "Rose China Town", nameZh: "玫瑰中國城", district: "新店區", address: "", lat: 24.95076, lon: 121.493861, sequence: 2, interchange: [], chainageKm: 0.61 },
  { code: "K03", line: "K", operator: "NTALRT", name: "Taipei Xiaocheng", nameZh: "台北小城", district: "新店區", address: "", lat: 24.954472, lon: 121.504674, sequence: 3, interchange: [], chainageKm: 1.3 },
  { code: "K04", line: "K", operator: "NTALRT", name: "Cardinal Tien Hospital An Kang Branch", nameZh: "耕莘安康院區", district: "新店區", address: "", lat: 24.954463, lon: 121.504803, sequence: 4, interchange: [], chainageKm: 1.89 },
  { code: "K05", line: "K", operator: "NTALRT", name: "Jinwen University of Science and Technology", nameZh: "景文科大", district: "新店區", address: "", lat: 24.955505, lon: 121.510387, sequence: 5, interchange: [], chainageKm: 2.45 },
  { code: "K06", line: "K", operator: "NTALRT", name: "Ankang", nameZh: "安康", district: "新店區", address: "", lat: 24.965213, lon: 121.51729, sequence: 6, interchange: [], chainageKm: 3.83 },
  { code: "K07", line: "K", operator: "NTALRT", name: "Sunshine Sports Park", nameZh: "陽光運動公園", district: "新店區", address: "", lat: 24.972351, lon: 121.519509, sequence: 7, interchange: [], chainageKm: 4.65 },
  { code: "K08", line: "K", operator: "NTALRT", name: "Xinhe Elementary School", nameZh: "新和國小", district: "新店區", address: "", lat: 24.983483, lon: 121.518444, sequence: 8, interchange: [], chainageKm: 6.06 },
  { code: "K09", line: "K", operator: "NTALRT", name: "Shisizhang", nameZh: "十四張", district: "新店區", address: "新北市新店區民權路282號(輕軌十四張站)", lat: 24.984328, lon: 121.527247, sequence: 9, interchange: [], chainageKm: 7.1 },
  { code: "G0", line: "G", operator: "TMRT", name: "Beitun Main Station", nameZh: "北屯總站", district: "北屯區", address: "臺中市北屯區敦富東街100號", lat: 24.18913, lon: 120.70864, sequence: 1, interchange: [], chainageKm: 0 },
  { code: "G3", line: "G", operator: "TMRT", name: "Jiushe", nameZh: "舊社", district: "北屯區", address: "臺中市北屯區松竹路一段1250號", lat: 24.18228, lon: 120.70729, sequence: 2, interchange: [], chainageKm: 0.99 },
  { code: "G4", line: "G", operator: "TMRT", name: "Songzhu", nameZh: "松竹", district: "北屯區", address: "臺中市北屯區北屯路458號", lat: 24.1808, lon: 120.70145, sequence: 3, interchange: [], chainageKm: 1.67 },
  { code: "G5", line: "G", operator: "TMRT", name: "Sihwei Elementary School", nameZh: "四維國小", district: "北屯區", address: "臺中市北屯區文心路四段 898號", lat: 24.17124, lon: 120.69329, sequence: 4, interchange: [], chainageKm: 3.31 },
  { code: "G6", line: "G", operator: "TMRT", name: "Wenxin Chongde", nameZh: "文心崇德", district: "北屯區", address: "臺中市北屯區文心路四段 538 號", lat: 24.17219, lon: 120.68486, sequence: 5, interchange: [], chainageKm: 4.17 },
  { code: "G7", line: "G", operator: "TMRT", name: "Wenxin Zhongqing", nameZh: "文心中清", district: "北區", address: "臺中市北區文心路三段700號", lat: 24.17368, lon: 120.67059, sequence: 6, interchange: [], chainageKm: 5.65 },
  { code: "G8", line: "G", operator: "TMRT", name: "Wenhua Senior High School", nameZh: "文華高中", district: "西屯區", address: "臺中市西屯區文心路三段199號", lat: 24.17141, lon: 120.66045, sequence: 7, interchange: [], chainageKm: 6.71 },
  { code: "G8a", line: "G", operator: "TMRT", name: "Wenxin Yinghua", nameZh: "文心櫻花", district: "西屯區", address: "臺中市西屯區文心路三段107之28號", lat: 24.16763, lon: 120.65367, sequence: 8, interchange: [], chainageKm: 7.53 },
  { code: "G9", line: "G", operator: "TMRT", name: "Taichung City Hall", nameZh: "市政府", district: "西屯區", address: "臺中市西屯區文心路二段688號、699號", lat: 24.16199, lon: 120.64903, sequence: 9, interchange: [], chainageKm: 8.33 },
  { code: "G10", line: "G", operator: "TMRT", name: "Shui-an Temple", nameZh: "水安宮", district: "南屯區", address: "臺中市南屯區文心路一段519號", lat: 24.15311, lon: 120.64668, sequence: 10, interchange: ["R"], chainageKm: 9.35 },
  { code: "G10a", line: "G", operator: "TMRT", name: "Wenxin Forest Park", nameZh: "文心森林公園", district: "南屯區", address: "臺中市南屯區文心路一段259號", lat: 24.1454, lon: 120.6466, sequence: 11, interchange: [], chainageKm: 10.21 },
  { code: "G11", line: "G", operator: "TMRT", name: "Nantun", nameZh: "南屯", district: "南屯區", address: "臺中市南屯區五權西路二段328號", lat: 24.1405, lon: 120.6466, sequence: 12, interchange: [], chainageKm: 10.75 },
  { code: "G12", line: "G", operator: "TMRT", name: "Feng-le Park", nameZh: "豐樂公園", district: "南屯區", address: "臺中市南屯區文心南路168號", lat: 24.1326, lon: 120.64635, sequence: 13, interchange: ["BL"], chainageKm: 11.62 },
  { code: "G13", line: "G", operator: "TMRT", name: "Daqing", nameZh: "大慶", district: "南區", address: "臺中市南區建國北路一段11號", lat: 24.1191, lon: 120.6476, sequence: 14, interchange: [], chainageKm: 13.23 },
  { code: "G14", line: "G", operator: "TMRT", name: "Jiuzhangli", nameZh: "九張犁", district: "烏日區", address: "臺中市烏日區建國路915號", lat: 24.1145, lon: 120.6401, sequence: 15, interchange: ["R"], chainageKm: 14.15 },
  { code: "G15", line: "G", operator: "TMRT", name: "Jiude", nameZh: "九德", district: "烏日區", address: "臺中市烏日區建國路639號", lat: 24.11104, lon: 120.63448, sequence: 16, interchange: ["O"], chainageKm: 14.84 },
  { code: "G16", line: "G", operator: "TMRT", name: "Wuri", nameZh: "烏日", district: "烏日區", address: "臺中市烏日區建國路295號", lat: 24.1089, lon: 120.6249, sequence: 17, interchange: ["BR"], chainageKm: 15.87 },
  { code: "G17", line: "G", operator: "TMRT", name: "HSR Taichung Station", nameZh: "高鐵臺中站", district: "烏日區", address: "臺中市烏日區高鐵東一路28號", lat: 24.11011, lon: 120.61405, sequence: 18, interchange: [], chainageKm: 16.93 },
]
