import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const out = path.join(root, 'content', 'rail', 'tmrt', 'stations')

const stations = [
  ['G0', 'Beitun Main Station', '北屯總站', '北屯區', '臺中市北屯區敦富東街100號', 1, 0, 'ground', 'tmrt-art-g0', 'Floating Island', 'tmrt-events'],
  ['G3', 'Jiushe', '舊社', '北屯區', '臺中市北屯區松竹路一段1250號', 2, .99, 'elevated', 'tmrt-art-g3', '尚水', 'soundscape-g3'],
  ['G4', 'Songzhu', '松竹', '北屯區', '臺中市北屯區北屯路458號', 3, 1.67, 'elevated', null, null, 'tmrt-events'],
  ['G5', 'Sihwei Elementary School', '四維國小', '北屯區', '臺中市北屯區文心路四段 898號', 4, 3.31, 'elevated', null, null, 'tmrt-events'],
  ['G6', 'Wenxin Chongde', '文心崇德', '北屯區', '臺中市北屯區文心路四段 538 號', 5, 4.17, 'elevated', null, null, null],
  ['G7', 'Wenxin Zhongqing', '文心中清', '北區', '臺中市北區文心路三段700號', 6, 5.65, 'elevated', 'tmrt-art-g7', 'Flowing Time', 'soundscape-g7'],
  ['G8', 'Wenhua Senior High School', '文華高中', '西屯區', '臺中市西屯區文心路三段199號', 7, 6.71, 'elevated', null, null, null],
  ['G8a', 'Wenxin Yinghua', '文心櫻花', '西屯區', '臺中市西屯區文心路三段107之28號', 8, 7.53, 'elevated', null, null, 'soundscape-g8a'],
  ['G9', 'Taichung City Hall', '市政府', '西屯區', '臺中市西屯區文心路二段688號、699號', 9, 8.33, 'elevated', 'tmrt-art-g9', 'Soundscape of Subterranean Flows', 'tmrt-signal'],
  ['G10', 'Shui-an Temple', '水安宮', '南屯區', '臺中市南屯區文心路一段519號', 10, 9.35, 'elevated', null, null, 'tmrt-signal'],
  ['G10a', 'Wenxin Forest Park', '文心森林公園', '南屯區', '臺中市南屯區文心路一段259號', 11, 10.21, 'elevated', 'tmrt-art-g10a', 'Daily Light', 'tmrt-signal'],
  ['G11', 'Nantun', '南屯', '南屯區', '臺中市南屯區五權西路二段328號', 12, 10.75, 'elevated', null, null, 'tmrt-signal'],
  ['G12', 'Feng-le Park', '豐樂公園', '南屯區', '臺中市南屯區文心南路168號', 13, 11.62, 'elevated', 'tmrt-art-g12', 'lotus-petal station work', 'tmrt-signal'],
  ['G13', 'Daqing', '大慶', '南區', '臺中市南區建國北路一段11號', 14, 13.23, 'elevated', 'tmrt-art-g13', 'Drifting Flow', 'tmrt-signal'],
  ['G14', 'Jiuzhangli', '九張犁', '烏日區', '臺中市烏日區建國路915號', 15, 14.15, 'elevated', null, null, 'soundscape-g14'],
  ['G15', 'Jiude', '九德', '烏日區', '臺中市烏日區建國路639號', 16, 14.84, 'elevated', null, null, 'tmrt-signal'],
  ['G16', 'Wuri', '烏日', '烏日區', '臺中市烏日區建國路295號', 17, 15.87, 'elevated', 'tmrt-art-g16', 'Lightly Afloat', 'tmrt-signal'],
  ['G17', 'HSR Taichung Station', '高鐵臺中站', '烏日區', '臺中市烏日區高鐵東一路28號', 18, 16.93, 'ground', 'tmrt-art-g17', 'Runoff Flow', 'tmrt-signal'],
]

const coordinates = {
  G0: [24.18913, 120.70864], G3: [24.18228, 120.70729], G4: [24.1808, 120.70145],
  G5: [24.17124, 120.69329], G6: [24.17219, 120.68486], G7: [24.17368, 120.67059],
  G8: [24.17141, 120.66045], G8a: [24.16763, 120.65367], G9: [24.16199, 120.64903],
  G10: [24.15311, 120.64668], G10a: [24.1454, 120.6466], G11: [24.1405, 120.6466],
  G12: [24.1326, 120.64635], G13: [24.1191, 120.6476], G14: [24.1145, 120.6401],
  G15: [24.11104, 120.63448], G16: [24.1089, 120.6249], G17: [24.11011, 120.61405],
}

const contract = (code) => code === 'G0' ? 'cj910' : ['G3','G4','G5','G6','G7','G8','G8a','G9'].includes(code) ? 'cj920' : 'cj930'
const contractLabel = { cj910: 'CJ910', cj920: 'CJ920', cj930: 'CJ930' }
const artSource = {
  'tmrt-art-g0': ['tmrt-art', '“Floating Island” (漂浮島)'],
  'tmrt-art-g3': ['tmrt-art', '“尚水”'],
  'tmrt-art-g7': ['tmrt-art', '“Flowing Time”'],
  'tmrt-art-g9': ['tmrt-art', '“Soundscape of Subterranean Flows”'],
  'tmrt-art-g10a': ['tmrt-art', '“Daily Light”'],
  'tmrt-art-g12': ['tmrt-art', 'the lotus-petal station work'],
  'tmrt-art-g13': ['tmrt-art', '“Drifting Flow”'],
  'tmrt-art-g16': ['tmrt-art', '“Lightly Afloat”'],
  'tmrt-art-g17': ['tmrt-art', '“Runoff Flow”'],
}

const sources = (pkg, art, incident) => `
  - id: tdx-tmrt
    title: Taiwan MOTC TDX rail records for TMRT
    titleOriginal: 交通部運輸資料流通服務標準資料
    publisher: Ministry of Transportation and Communications, Taiwan (交通部)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/Station/TMRT?$format=JSON
    accessed: 2026-08-22
    kind: primary
    lang: zh-Hant
    note: Committed TDX Station and StationOfRoute records provide this station's code, names, address, district, coordinates, sequence and route chainage.
  - id: tmrt-map
    title: Metro map
    titleOriginal: 路線圖
    publisher: Taichung Metro Corporation (臺中捷運股份有限公司)
    url: https://www.tmrt.com.tw/metro-life/map
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: Current operator route map and station order.
  - id: tmrt-faq
    title: Frequently asked questions
    titleOriginal: 常見問題
    publisher: Taichung Metro Corporation (臺中捷運股份有限公司)
    url: https://www.tmrt.com.tw/our-services/faq
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: The operator's current technical description gives steel-wheel medium-capacity operation, driverless trains, two-car formation and the two ground-level stations.
  - id: ${pkg}
    title: ${contractLabel[pkg]} project record
    titleOriginal: ${contractLabel[pkg]} 工程
    publisher: Taichung City Government Rapid Transit Systems Bureau (臺中市政府捷運工程局)
    url: ${pkg === 'cj910' ? 'https://tcrt.taichung.gov.tw/form/Details?Parser=2%2C6%2C45%2C%2C%2C%2C30' : pkg === 'cj920' ? 'https://tcrt.taichung.gov.tw/form/Details?Parser=2%2C6%2C45%2C%2C%2C%2C29' : 'https://tcrt.taichung.gov.tw/form/Details?Parser=2%2C6%2C45%2C%2C%2C%2C28'}
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: "The civil contract package that contains this station's route segment."
  - id: cj900
    title: CJ900/CJ907 system-equipment project record
    titleOriginal: CJ900、CJ907 機電系統工程
    publisher: Taichung City Government Rapid Transit Systems Bureau (臺中市政府捷運工程局)
    url: https://tcrt.taichung.gov.tw/form/Details?Parser=2%2C6%2C45%2C%2C%2C%2C31
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: System-equipment package for the Green Line, including power, signalling, communications, fare collection and trains.
  - id: tmrt-art
    title: Public works
    titleOriginal: 公共藝術
    publisher: Taichung Metro Corporation (臺中捷運股份有限公司)
    url: https://www.tmrt.com.tw/art/public-works
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: Current operator roster of Green Line public works.
  - id: tmrt-events
    title: Major events
    titleOriginal: 大事紀
    publisher: Taichung Metro Corporation (臺中捷運股份有限公司)
    url: https://www.tmrt.com.tw/about/major-events
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: Company and Green Line construction/operation milestones, including the 2015 G4/G5 beam accident and 2020 joint-shaft fracture.
  - id: tmrt-reopen
    title: Taichung Metro resumes test operation
    titleOriginal: 臺中捷運恢復試營運
    publisher: Taichung City Government (臺中市政府)
    url: https://www.taichung.gov.tw/8868/8872/9962/1742706
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: The city announcement records the 2021 test restart and formal opening.
  - id: tmrt-signal
    title: Temporary signal power interruption on Green Line
    titleOriginal: 綠線號誌電源瞬斷公告
    publisher: Taichung Metro Corporation (臺中捷運股份有限公司)
    url: https://www.tmrt.com.tw/announcement/draft-news/detail?id=37f16f36-0823-497a-ac30-8eb80525951e
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: Operator incident notice for the 21 March 2026 signal-power interruption affecting G9–G17.
  - id: soundscape-g3
    title: Station music — Jiushe
    titleOriginal: 舊社站音樂
    publisher: Taichung Metro Corporation (臺中捷運股份有限公司)
    url: https://www.tmrt.com.tw/tmrtsoundscape/station-music-tw/103-jiushe/
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: Operator soundscape page for the local history and station music at G3.
  - id: soundscape-g7
    title: Station music — Wenxin Zhongqing
    titleOriginal: 文心中清站音樂
    publisher: Taichung Metro Corporation (臺中捷運股份有限公司)
    url: https://www.tmrt.com.tw/tmrtsoundscape/station-music-tw/107-wenxin-zhongqing/
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: Operator soundscape page for the area's history and station music at G7.
  - id: soundscape-g8a
    title: Station music — Wenxin Yinghua
    titleOriginal: 文心櫻花站音樂
    publisher: Taichung Metro Corporation (臺中捷運股份有限公司)
    url: https://www.tmrt.com.tw/tmrtsoundscape/station-music-tw/109-wenxin-yinghua/
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: Operator soundscape page for local destinations and station music at G8a.
  - id: soundscape-g14
    title: Station music — Jiuzhangli
    titleOriginal: 九張犁站音樂
    publisher: Taichung Metro Corporation (臺中捷運股份有限公司)
    url: https://www.tmrt.com.tw/tmrtsoundscape/station-music-tw/116-jiuzhangli/
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: Operator soundscape page for the remaining farmland character and station music at G14.
${art ? '' : ''}` + (incident === 'tmrt-events' ? '' : '')

const artParagraph = (code, art) => {
  if (art) return `The operator's current public-art roster assigns ${art[1]} to this station.[^${art[0]}] That attribution is kept separate from the station's structural description: a work title is evidence of the operator's art programme, not evidence that the station is underground, elevated or interchange-built.[^tmrt-art]`
  return `The operator's current public-art roster names works at selected Green Line stations, but it does not assign a named work to ${code} in the roster consulted for this page.[^tmrt-art] Whether an unlisted or later work exists here is therefore TBC; the page does not turn a list boundary into a claim that no artwork exists.`
}

const localParagraph = (code, source) => {
  if (!source) return `The TDX record gives the paired English and Traditional Chinese names but does not explain the naming decision.[^tdx-tmrt] A naming etymology, commissioning brief or renaming history for ${code} is TBC rather than inferred from an English gloss or from the surrounding street names.`
  const text = {
    'soundscape-g3': 'The operator’s soundscape page connects the Jiushe name to the older 舊社南興宮 area and to the water channels that shaped the local setting.[^soundscape-g3] It also publishes a station music work, so this page can record a local cultural association without claiming that the station name itself was newly coined for the railway.',
    'soundscape-g7': 'The operator’s soundscape page places Wenxin Zhongqing in the former Shuinan area and describes the market and settlement history used for its station music.[^soundscape-g7] That is a published place-context record, not a claim that the metro station replaced the historic market.',
    'soundscape-g8a': 'The operator’s soundscape page associates Wenxin Yinghua with the city hall, schools, entertainment venues and the Fengjia/nightlife side of Xitun.[^soundscape-g8a] The page records those as the operator’s soundscape context rather than converting nearby destinations into a claim about the station’s catchment size.',
    'soundscape-g14': 'The operator’s soundscape page describes Jiuzhangli as retaining a more rural and agricultural character than the central stations.[^soundscape-g14] That description is useful siting context, but it does not establish a land-use survey or a boundary for the district.',
  }[source]
  return text ?? ''
}

for (const [code, name, zh, district, address, sequence, chainage, structure, artKey, artName, localSource] of stations) {
  const pkg = contract(code)
  const [lat, lon] = coordinates[code]
  const art = artKey ? artSource[artKey] : null
  const incident = localSource === 'tmrt-signal' ? 'tmrt-signal' : localSource === 'tmrt-events' ? 'tmrt-events' : null
  const incidentText = incident === 'tmrt-signal'
    ? `This station is within the G9–G17 segment named in the operator's 21 March 2026 signal-power notice.[^tmrt-signal] The notice records a temporary signal power interruption and subsequent equipment replacement; it is a dated service incident, not evidence of a civil-structure defect at this station.`
    : incident === 'tmrt-events'
      ? `The operator's major-events chronology places the 2015 construction beam accident at the G4/G5 site and separately dates the 2020 joint-shaft fracture during test operation.[^tmrt-events] The entry is therefore part of a documented line history, but neither event should be assigned to this station unless the source does so explicitly.`
      : `The station-specific sources consulted here do not establish a separate incident at ${code}.[^tmrt-events] That is a research boundary, not a claim that no disruption or worksite event has ever occurred here.`

  const body = `
${name} is stop ${sequence} of 18 on the Green Line, and the committed TDX record pairs the code ${code} with the Traditional Chinese name ${zh}.[^tdx-tmrt] TDX places it in ${district} at ${address}, with a published route chainage of ${chainage.toFixed(2)} km in the selected direction.[^tdx-tmrt] The address is the source-backed siting description used here; no extra catchment boundary is inferred from it.

The station belongs to the ${contractLabel[pkg]} civil package.[^${pkg}] ${pkg === 'cj910' ? 'That package covers G0, the Beitun depot and the northern track system, so the station is part of the line’s depot-end civil works rather than an isolated stop.' : pkg === 'cj920' ? 'That package covers the G3–G9 elevated section, which places this station in the central civil contract rather than the northern depot package.' : 'That package covers G10–G17, including the southern approach and the ground-level HSR end; this station is therefore read within the later southern civil segment.'} The separate CJ900/CJ907 contract covers system equipment, including power, communications, automatic fare collection, depot equipment and trains.[^cj900]

The operator describes the Green Line as a steel-wheel, medium-capacity, fully driverless system using two-car trains.[^tmrt-faq] ${structure === 'ground' ? `It identifies ${code} as one of the two ground-level stations; the other 16 stations are elevated.[^tmrt-faq]` : `It identifies ${code} as an elevated station; only G0 and G17 are ground level.[^tmrt-faq]`} That system-level engineering fact is kept separate from the station address because TDX publishes the latter but not the former.[^tdx-tmrt][^tmrt-faq]

${localParagraph(code, localSource)}

${artParagraph(code, art)}

${incidentText}
`
  // The page carries operator: TMRT, so the Markdown badge resolver can use
  // the namespaced station record instead of guessing from a bare G token.
  const safeBody = body

  const factRows = [
    ['Station code', code, 'tdx-tmrt'],
    ['Traditional Chinese', zh, 'tdx-tmrt'],
    ['District', district, 'tdx-tmrt'],
    ['TDX sequence', String(sequence), 'tdx-tmrt'],
    ['TDX chainage', chainage.toFixed(2), 'tdx-tmrt'],
    ['Latitude', lat.toFixed(5), 'tdx-tmrt'],
    ['Longitude', lon.toFixed(5), 'tdx-tmrt'],
    ['Structure', structure === 'ground' ? 'Ground level' : 'Elevated', 'tmrt-faq'],
    ['Civil package', contractLabel[pkg], pkg],
    ['Operator', 'Taichung Metro Corporation', 'tmrt-map'],
  ]

  const slug = code.toLowerCase()
  // Keep each page's source list to the evidence it actually cites. The
  // citation checker treats an unused source as a sourcing defect, and a
  // station page should not advertise every other station's soundscape.
  const usedSourceIds = new Set([
    'tdx-tmrt', 'tmrt-map', 'tmrt-faq', pkg, 'cj900', 'tmrt-art',
    ...(incident !== 'tmrt-signal' ? ['tmrt-events'] : []),
    ...(localSource && localSource.startsWith('soundscape-') ? [localSource] : []),
    ...(incident === 'tmrt-signal' ? ['tmrt-signal'] : []),
  ])
  const sourceBlock = sources(pkg, artKey, incident)
    .split(/\n(?=  - id: )/)
    .filter((block) => usedSourceIds.has(block.match(/^\s*- id: ([^\r\n]+)/m)?.[1]?.trim() ?? ''))
    .join('\n')
  const text = `---
title: ${code} ${name}
summary: ${code} ${name} (${zh}) — stop ${sequence} of 18 on Taichung Metro's Green Line, in ${district}.
order: ${sequence}
line: G
operator: TMRT
updated: 2026-08-23
facts:
${factRows.map(([label, value, source]) => `  - label: ${label}\n    value: ${value}\n    source: ${source}`).join('\n')}
specs:
  - label: Latitude
    value: ${lat.toFixed(5)}
    source: tdx-tmrt
  - label: Longitude
    value: ${lon.toFixed(5)}
    source: tdx-tmrt
  - label: Route chainage
    value: ${chainage.toFixed(2)}
    unit: km
    source: tdx-tmrt
sources:
${sourceBlock}
---
${safeBody}
`
  fs.mkdirSync(out, { recursive: true })
  fs.writeFileSync(path.join(out, `${slug}.md`), text)
}

console.log(`tmrt: wrote ${stations.length} station content pages`)
