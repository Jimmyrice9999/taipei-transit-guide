import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const contentRoot = path.join(root, 'content', 'rail', 'thsr')
const researchRoot = path.join(root, 'docs', 'research', 'rail', 'thsr')

const tdxStationUrl = 'https://tdx.transportdata.tw/api/basic/v2/Rail/THSR/Station?%24format=JSON&%24top=1000'
const tdxShapeUrl = 'https://tdx.transportdata.tw/api/basic/v2/Rail/THSR/Shape?%24format=JSON&%24top=1000'
const thsrcBusinessUrl = 'https://www.thsrc.com.tw/corp/410c493f-6d1b-49ae-8480-8b36dab7c5ef'
const rbUrl = 'https://www.rb.gov.tw/zh-TW/main/main_28/20250505_152320/20251104_134001/20250505_180533/'
const cyBotUrl = 'https://www.cy.gov.tw/CyBsBoxContent2.aspx?n=718&s=356'
const cyFundingUrl = 'https://www.cy.gov.tw/News_Content.aspx?n=795&s=5321'
const cySwitchUrl = 'https://cybsbox.cy.gov.tw/CYBSBoxSSL/edoc/download/54560'
const cyMixedUrl = 'https://cybsbox.cy.gov.tw/CYBSBoxSSL/edoc/download/45303'
const motcRidershipUrl = 'https://www.motc.gov.tw/ch/app/data/doc?detailNo=1&id=580&module=mebook&serno=202501090000&type=s'
const motcDatasetUrl = 'https://www.motc.gov.tw/201506260001/app/govdata_list/view?id=1615&uid=201705110088'

const sourceDefaults = {
  'tdx-thsr': {
    title: 'TDX THSR station records',
    titleOriginal: '臺灣高鐵車站資料',
    publisher: 'Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)',
    url: tdxStationUrl,
    note: 'The committed 24 August 2026 Station pull contains 12 records with station IDs, codes, names, addresses and coordinates. The checked Route and StationOfRoute paths returned 404 and are not used to infer a sequence.',
  },
  'tdx-thsr-shape': {
    title: 'TDX THSR line shape',
    titleOriginal: '臺灣高鐵路線幾何資料',
    publisher: 'Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)',
    url: tdxShapeUrl,
    note: 'The committed 24 August 2026 Shape pull contains one current High-Speed Rail Line geometry record.',
  },
  'thsrc-business': {
    title: 'Main business',
    titleOriginal: '主要業務',
    publisher: 'Taiwan High Speed Rail Corporation (台灣高速鐵路股份有限公司)',
    url: thsrcBusinessUrl,
    note: 'The operator lists the 12 stations and its current operating and station-business scope.',
  },
  'rb-thsr': {
    title: 'Taiwan High-Speed Rail project',
    titleOriginal: '台灣高鐵',
    publisher: 'Railway Bureau, Ministry of Transportation and Communications (交通部鐵道局)',
    url: rbUrl,
    note: 'The builder and regulator’s project history gives the BOT contract, financial restructuring, route, opening chronology, structures, power, signalling, vehicles and maintenance facilities.',
  },
  'cy-bot': {
    title: 'Investigation into whether government investment in the High-Speed Rail company violated BOT principles',
    titleOriginal: '政府直接、間接投資高鐵公司有無違反BOT精神案',
    publisher: 'Control Yuan, Taiwan (監察院)',
    url: cyBotUrl,
    note: 'The official investigation record identifies the case number, adoption date and report files for the government-investment/BOT dispute.',
  },
  'cy-funding': {
    title: 'High-Speed Rail did not fulfil the government-zero-investment commitment',
    titleOriginal: '高鐵未能履行「政府零出資」承諾',
    publisher: 'Control Yuan, Taiwan (監察院)',
    url: cyFundingUrl,
    note: 'The official statement records the Control Yuan’s criticism that public entities supplied 37.42% and describes the supervision and BOT-principle dispute.',
  },
  'cy-switch': {
    title: 'Investigation into High-Speed Rail turnout-signal failures',
    titleOriginal: '台灣高鐵轉轍器訊號異常案調查報告',
    publisher: 'Control Yuan, Taiwan (監察院)',
    url: cySwitchUrl,
    note: 'The report records the European ICE/TGV reference bid, the 1999 change of signalling, power and rolling stock to the Japanese Shinkansen system, and the reported US$65 million compensation plus 5% interest.',
  },
  'cy-mixed': {
    title: 'Investigation into High-Speed Rail turnout failures',
    titleOriginal: '調查報告',
    publisher: 'Control Yuan, Taiwan (監察院)',
    url: cyMixedUrl,
    note: 'A separate official report records the Ministry’s account that Siemens turnout and control equipment remained European while the other systems followed Japanese Shinkansen technology; this is published as a conflict, not collapsed into one description.',
  },
  'motc-ridership': {
    title: 'Passenger Traffic of High-Speed Rail Stations',
    titleOriginal: '高速鐵路各站旅客人數',
    publisher: 'Ministry of Transportation and Communications, Taiwan (交通部)',
    url: motcRidershipUrl,
    note: 'Table 2-9 publishes station-level entry and exit traffic in units of 10,000 passengers and notes each station’s opening date; the current PDF is retained as the source for the station-level TBC boundary.',
  },
}

const stationPages = [
  { slug: 'nangang', id: '0990', code: 'NAK', name: 'Nangang', zh: '南港', city: 'Taipei City', town: 'Nangang District', address: '台北市南港區南港路一段313號', floors: 'B1 and B2', transfer: 'TRA Nangang Station, Taipei Metro and city buses', role: 'the northern end of the TDX-ordered list', opened: '1 July 2016', openingGroup: 'the final station added to the original 12-station network', architecture: 'The operator’s floor navigation is two-level, B1 and B2, reflecting the underground interchange setting rather than an elevated suburban station.', thsrcUrl: 'https://www.thsrc.com.tw/ArticleContent/2f940836-cedc-41ef-8e28-c2336ac4d2cd' },
  { slug: 'taipei', id: '1000', code: 'TPE', name: 'Taipei', zh: '台北', city: 'Taipei City', town: 'Zhongzheng District', address: '台北市北平西路3號', floors: 'B1', transfer: 'TRA Taipei Station, Taipei Metro, Airport MRT and city buses', role: 'the capital-city station immediately south of Nangang in the TDX order', opened: '2 March 2007', openingGroup: 'the second opening stage, after the initial seven stations', architecture: 'The operator’s page presents a B1 floor guide and a corridor-based transfer to the other rail systems; the page does not turn that passenger map into an unsupported architect attribution.', thsrcUrl: 'https://www.thsrc.com.tw/ArticleContent/977abb69-413a-4ccf-a109-0272c24fd490' },
  { slug: 'banqiao', id: '1010', code: 'BAC', name: 'Banqiao', zh: '板橋', city: 'New Taipei City', town: 'Banqiao District', address: '新北市板橋區縣民大道二段7號', floors: '1F, B1 and B2', transfer: 'TRA Banqiao Station, Taipei Metro and city buses', role: 'the first station in the opening-stage list before the line continues through northern Taiwan', opened: '5 January 2007', openingGroup: 'one of the seven stations that opened with High-Speed Rail service', architecture: 'Its three listed passenger levels—1F, B1 and B2—are the operator’s current navigation structure for a shared-city transport complex.', thsrcUrl: 'https://www.thsrc.com.tw/ArticleContent/e6e26e66-7dc1-458f-b2f3-71ce65fdc95f' },
  { slug: 'taoyuan', id: '1020', code: 'TAY', name: 'Taoyuan', zh: '桃園', city: 'Taoyuan City', town: 'Zhongli District', address: '桃園市中壢區高鐵北路一段6號', floors: '1F, B1 and B2', transfer: 'Airport MRT and city buses', role: 'the fourth station in the TDX-ordered list and a Taoyuan-region HSR access point', opened: '5 January 2007', openingGroup: 'one of the seven stations that opened with High-Speed Rail service', architecture: 'The operator lists three passenger levels, 1F, B1 and B2; its transport panel separates Airport MRT and bus access, so this page does not claim a TRA interchange here.', thsrcUrl: 'https://www.thsrc.com.tw/ArticleContent/fbd828d8-b1da-4b06-a3bd-680cdca4d2cd' },
  { slug: 'hsinchu', id: '1030', code: 'HSC', name: 'Hsinchu', zh: '新竹', city: 'Hsinchu County', town: 'Zhubei City', address: '新竹縣竹北市高鐵七路6號', floors: '1F, 2F and 3F', transfer: 'TRA Liujia Station and city buses', role: 'the fifth station in the TDX-ordered list, north of the later-added Miaoli station', opened: '5 January 2007', openingGroup: 'one of the seven stations that opened with High-Speed Rail service', architecture: 'The operator’s floor navigation names 1F, 2F and 3F, a three-level passenger arrangement that this page records without guessing which level contains any service not explicitly listed.', thsrcUrl: 'https://www.thsrc.com.tw/ArticleContent/a7a04c89-900b-4798-95a3-c01c455622f4' },
  { slug: 'miaoli', id: '1035', code: 'MIL', name: 'Miaoli', zh: '苗栗', city: 'Miaoli County', town: 'Houlong Township', address: '苗栗縣後龍鎮高鐵三路268號', floors: '1F, 2F and 3F', transfer: 'TRA Fengfu Station and city buses', role: 'the sixth station in the TDX-ordered list and one of the three stations introduced in the 2015 expansion', opened: '1 December 2015', openingGroup: 'the three-station expansion that also added Changhua and Yunlin', architecture: 'The operator’s current navigation lists 1F, 2F and 3F; the page treats those levels as passenger-layout evidence and leaves any architectural authorship TBC.', thsrcUrl: 'https://www.thsrc.com.tw/ArticleContent/e8fc2123-2aaf-46ff-ad79-51d4002a1ef3' },
  { slug: 'taichung', id: '1040', code: 'TAC', name: 'Taichung', zh: '台中', city: 'Taichung City', town: 'Wuri District', address: '台中市烏日區站區二路8號', floors: '1F, 2F and 3F', transfer: 'TRA Xinwuri Station, Taichung Metro and city buses', role: 'the seventh station in the TDX-ordered list and the central-region station paired with the Taichung rail complex', opened: '5 January 2007', openingGroup: 'one of the seven stations that opened with High-Speed Rail service', architecture: 'The operator gives a three-level guide, 1F through 3F, while the transfer description distinguishes the TRA, Taichung Metro and bus connections rather than treating the complex as one operator.', thsrcUrl: 'https://www.thsrc.com.tw/ArticleContent/3301e395-46b8-47aa-aa37-139e15708779' },
  { slug: 'changhua', id: '1043', code: 'CHA', name: 'Changhua', zh: '彰化', city: 'Changhua County', town: 'Tianzhong Township', address: '彰化縣田中鎮站區路二段99號', floors: '1F, 2F and 3F', transfer: 'city buses', role: 'the eighth station in the TDX-ordered list and one of the 2015 additions', opened: '1 December 2015', openingGroup: 'the three-station expansion that also added Miaoli and Yunlin', architecture: 'The operator’s floor navigation lists 1F, 2F and 3F; the current traffic panel names buses but does not establish a same-station TRA interchange.', thsrcUrl: 'https://www.thsrc.com.tw/ArticleContent/38b8c40b-aef0-4d66-b257-da96ec51620e' },
  { slug: 'yunlin', id: '1047', code: 'YUL', name: 'Yunlin', zh: '雲林', city: 'Yunlin County', town: 'Huwei Township', address: '雲林縣虎尾鎮站前東路301號', floors: '1F and 3F', transfer: 'city buses', role: 'the ninth station in the TDX-ordered list and the southernmost of the three 2015 additions', opened: '1 December 2015', openingGroup: 'the three-station expansion that also added Miaoli and Changhua', architecture: 'The operator’s current floor navigation names 1F and 3F; because the published list skips 2F, this page preserves the source’s floor labels instead of silently “correcting” the gap.', thsrcUrl: 'https://www.thsrc.com.tw/ArticleContent/5f4c7bb0-c676-4e39-8d3c-f12fc188ee5f' },
  { slug: 'chiayi', id: '1050', code: 'CHY', name: 'Chiayi', zh: '嘉義', city: 'Chiayi County', town: 'Taibao City', address: '嘉義縣太保市高鐵西路168號', floors: '1F, 2F and 3F', transfer: 'city buses', role: 'the tenth station in the TDX-ordered list and one of the original seven opening stations', opened: '5 January 2007', openingGroup: 'one of the seven stations that opened with High-Speed Rail service', architecture: 'The operator’s floor navigation names 1F, 2F and 3F. Its traffic panel names bus access, so the page records no TRA or MRT interchange for this station.', thsrcUrl: 'https://www.thsrc.com.tw/ArticleContent/60831846-f0e4-47f6-9b5b-46323ebdcef7' },
  { slug: 'tainan', id: '1060', code: 'TNN', name: 'Tainan', zh: '台南', city: 'Tainan City', town: 'Guiren District', address: '台南市歸仁區歸仁大道100號', floors: '1F, 2F and 3F', transfer: 'TRA Shalun Station and city buses', role: 'the eleventh station in the TDX-ordered list and the southern Taiwan station before Zuoying', opened: '5 January 2007', openingGroup: 'one of the seven stations that opened with High-Speed Rail service', architecture: 'The operator lists 1F, 2F and 3F and separately identifies the Shalun rail connection; the station’s passenger navigation and its interchange are therefore kept as two linked but distinct facts.', thsrcUrl: 'https://www.thsrc.com.tw/ArticleContent/9c5ac6ca-ec89-48f8-aab0-41b738cb1814' },
  { slug: 'zuoying', id: '1070', code: 'ZUY', name: 'Zuoying', zh: '左營', city: 'Kaohsiung City', town: 'Zuoying District', address: '高雄市左營區高鐵路105號', floors: '1F and 2F', transfer: 'TRA Xinzuoying Station, Kaohsiung Metro and city buses', role: 'the southern end of the TDX-ordered list', opened: '5 January 2007', openingGroup: 'one of the seven stations that opened with High-Speed Rail service', architecture: 'The operator’s floor navigation names 1F and 2F; its transport panel also names the Xinzuoying TRA and Kaohsiung Metro connections, making the southern terminus a multi-system passenger interchange.', thsrcUrl: 'https://www.thsrc.com.tw/ArticleContent/f2519629-5973-4d08-913b-479cce78a356' },
]

const tdxStations = JSON.parse(
  fs.readFileSync(path.join(root, 'data', 'tdx', 'THSR', 'station.json'), 'utf8'),
)
for (const station of stationPages) {
  const record = tdxStations.find((candidate) => candidate.StationID === station.id)
  if (!record) throw new Error(`No TDX record for ${station.id}`)
  station.lat = record.StationPosition.PositionLat
  station.lon = record.StationPosition.PositionLon
  station.updateTime = record.UpdateTime
}

function yaml(value) {
  return JSON.stringify(String(value))
}

function sourceBlock(ids) {
  return ids.map((id) => {
    const source = sourceDefaults[id]
    return [
      `  - id: ${id}`,
      `    title: ${yaml(source.title)}`,
      `    titleOriginal: ${yaml(source.titleOriginal)}`,
      `    publisher: ${yaml(source.publisher)}`,
      `    url: ${yaml(source.url)}`,
      '    accessed: 2026-08-24',
      `    kind: primary`,
      '    lang: zh-Hant',
      `    note: ${yaml(source.note)}`,
    ].join('\n')
  }).join('\n')
}

function facts(rows) {
  return rows.map(([label, value, source]) => `  - label: ${yaml(label)}\n    value: ${yaml(value)}\n    source: ${source}`).join('\n')
}

function specs(rows) {
  return rows.map(([label, value, unit, source]) => `  - label: ${yaml(label)}\n    value: ${yaml(value)}\n    unit: ${yaml(unit)}\n    source: ${source}`).join('\n')
}

function write(relative, text) {
  const file = path.join(root, relative)
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, `${text.trim()}\n`, 'utf8')
}

write('content/rail/thsr/_index.md', `---
title: Taiwan High Speed Rail
kind: system
description: Taiwan’s 350 km high-speed railway, with 12 stations from Nangang to Zuoying and a BOT history that changed during financial restructuring.
order: 3
operator: THSR
sources:
${sourceBlock(['tdx-thsr', 'tdx-thsr-shape', 'thsrc-business', 'rb-thsr', 'cy-bot', 'cy-funding', 'cy-switch', 'cy-mixed', 'motc-ridership'])}
---

Taiwan High Speed Rail is the west-coast intercity railway operated by Taiwan High Speed Rail Corporation under a national BOT project.[^rb-thsr] The operator’s current business page lists twelve stations, from Nangang and Taipei through the western corridor to Zuoying.[^thsrc-business] This system folder keeps the station sequence in a committed TDX snapshot while the historical narrative stays tied to Railway Bureau and Control Yuan documents.[^tdx-thsr][^rb-thsr]

The railway opened in stages rather than on one date: seven stations began service on 5 January 2007, Taipei followed on 2 March 2007, Miaoli, Changhua and Yunlin were added on 1 December 2015, and Nangang on 1 July 2016.[^rb-thsr] These dates are repeated on station pages because “the high-speed railway opened” and “this station opened” are different claims.[^rb-thsr]

The financing record is part of the system’s identity. The Railway Bureau describes the project as Taiwan’s first major national infrastructure project promoted through private participation, with the 1998 contracts originally setting a 35-year construction-and-operation concession and a 50-year station-area development concession.[^rb-thsr] The 2015 amendment extended the concession to 70 years, cancelled the station-area development contract, reduced capital and brought NT$30 billion of government investment into the company.[^rb-thsr] The Control Yuan records a separate dispute over whether public and state-enterprise investment—reported there as 37.42%—departed from the promised zero-government-funding model.[^cy-funding][^cy-bot]

The system is physically distinctive. The Railway Bureau reports approximately 73% bridges and viaducts, 18% tunnels and 9% embankment or cut sections.[^rb-thsr] It records 25,000-volt, 60-Hz AC overhead power and ATC/CTC train-control systems, and describes the 700T as a twelve-car EMU based on the Japanese 700 series.[^rb-thsr] The same page names vehicle bases at Wuri and Zuoying, a main workshop at Yanchao and five engineering-and-electrical bases.[^rb-thsr] That is the source-backed system description; it is not a reason to assign every depot or every maintenance activity to an individual station.

## The European reference and Japanese system conflict

The tender history has two official readings that this site keeps side by side. One Control Yuan report says the winning bid used German ICE and French TGV as the European reference system, then records a 12 December 1999 change of signalling, power and rolling stock to the Japanese Shinkansen system and compensation of US$65 million plus 5% interest to the German and French suppliers.[^cy-switch] A separate Control Yuan report records the Ministry’s account that Siemens turnout and control equipment remained European while the other subsystems followed Japanese Shinkansen technology, and says that using different specialist suppliers can be normal if the interfaces work.[^cy-mixed] The disagreement is therefore not reduced to the slogan “European” or “Japanese”: one source frames the change as a mixed-system problem, while the other describes a Japanese system with a specifically retained European turnout subsystem.[^cy-switch][^cy-mixed]

## Ridership data

The Railway Bureau’s open-data record describes a High-Speed Rail traffic dataset, and the MOTC statistical yearbook publishes station-level entry and exit traffic in units of 10,000 passengers.[^motc-ridership] The line panel below uses a committed monthly network snapshot with its source and retrieval date visible; it does not sum station movements or treat entry and exit as two separate trips.[^motc-ridership] Current station-level values, trends and within-line ranks remain TBC until the wide PDF table is transcribed into the same station schema without losing its entry/exit dimensions.[^motc-ridership]

The TDX checks were deliberately narrower than the metro pull. Station and Shape returned records on 24 August 2026, while the checked THSR Route and StationOfRoute paths returned 404; the station order shown here is consequently the operator’s twelve-station order, not a fabricated route response.[^tdx-thsr][^tdx-thsr-shape]
`)

write('content/rail/thsr/lines/_index.md', `---
title: Lines
description: The single Taiwan High Speed Rail route and its source-backed system record.
order: 1
---

The High-Speed Rail system has one passenger route in this guide. Its line page combines the route’s construction and operating record with the BOT and technology conflicts that explain why the system cannot be reduced to a station list.
`)

write('content/rail/thsr/stations/_index.md', `---
title: Stations
description: The 12 current High-Speed Rail stations, ordered by the committed TDX station records.
order: 2
---

The station index follows the numeric TDX StationID order. Each page keeps the TDX address and coordinates, the operator’s current floor and transfer information, the opening stage, and the station-level ridership gap visible.
`)

write('content/rail/thsr/lines/thsr.md', `---
title: Taiwan High Speed Rail
summary: The 350 km, 12-station west-coast high-speed railway, built through a BOT concession and operated with a Japanese-reference 700T system whose procurement history remains contested in official reports.
order: 1
operator: THSR
updated: 2026-08-24
lead:
  value: "350"
  unit: km
  label: Railway Bureau route length
  source: rb-thsr
facts:
${facts([
  ['Operator', 'Taiwan High Speed Rail Corporation', 'thsrc-business'],
  ['Stations', '12', 'rb-thsr'],
  ['Original operating concession', '35 years', 'rb-thsr'],
  ['Amended concession', '70 years', 'rb-thsr'],
  ['Opening stages', '2007, 2015 and 2016', 'rb-thsr'],
  ['Power', '25 kV, 60 Hz AC overhead', 'rb-thsr'],
  ['Train', '700T, 12 cars, 300 km/h maximum operating speed', 'rb-thsr'],
])}
specs:
${specs([
  ['Route length', '350', 'km', 'rb-thsr'],
  ['Viaduct and bridge share', '73', '%', 'rb-thsr'],
  ['Tunnel share', '18', '%', 'rb-thsr'],
  ['Embankment and cut share', '9', '%', 'rb-thsr'],
  ['Overhead supply', '25,000 / 60', 'V / Hz AC', 'rb-thsr'],
  ['Formation (powered + unpowered)', '9+3', 'cars', 'rb-thsr'],
  ['Maximum operating speed', '300', 'km/h', 'rb-thsr'],
])}
sources:
${sourceBlock(['tdx-thsr', 'tdx-thsr-shape', 'thsrc-business', 'rb-thsr', 'cy-bot', 'cy-funding', 'cy-switch', 'cy-mixed', 'motc-ridership'])}
---

Taiwan High Speed Rail is a 350 km railway with twelve stations, according to the Railway Bureau’s current project record.[^rb-thsr] The operator’s own business page names the same twelve-station chain from Nangang to Zuoying and describes station-area commerce and transport operation as part of its business scope.[^thsrc-business] TDX independently returned twelve current Station records and one Shape record on 24 August 2026; the checked Route and StationOfRoute endpoints returned 404, so this page does not claim that TDX supplied a route sequence.[^tdx-thsr][^tdx-thsr-shape]

## Construction and opening stages

The opening chronology is four-stage in practical terms. Banqiao, Taoyuan, Hsinchu, Taichung, Chiayi, Tainan and Zuoying entered service on 5 January 2007.[^rb-thsr] Taipei followed on 2 March 2007.[^rb-thsr] The later stations Miaoli, Changhua and Yunlin opened on 1 December 2015, and Nangang opened on 1 July 2016.[^rb-thsr] The dates matter because a station page about a later addition is not evidence that the original railway had twelve operating stations on its first day.[^rb-thsr]

The route’s physical form reflects the west-coast corridor rather than a single tunnelled urban railway. The Railway Bureau reports approximately 73% bridges and viaducts, 18% tunnels and 9% embankment or cut sections.[^rb-thsr] It identifies vehicle bases at Wuri and Zuoying, a northern Hsizhi base not yet established in the page’s account, a main workshop at Yanchao and five engineering-and-electrical bases.[^rb-thsr] These are system-level facilities; the guide does not convert them into a guessed “depot for every station” field.

## BOT contract and financial disputes

The Railway Bureau describes the project as Taiwan’s first major national infrastructure project promoted through private investment participation.[^rb-thsr] It records the 23 July 1998 signing of a 35-year construction-and-operation concession and a separate 50-year station-area development concession.[^rb-thsr] The stated project cost was approximately NT$513.3 billion, with the government responsible for land, the Taipei underground co-construction section, supervision and management, while the concession company funded civil works, stations, core electromechanical systems, operation and maintenance.[^rb-thsr]

The original financial model did not remain unchanged. The Railway Bureau says a 27 July 2015 amendment extended the concession to 70 years, cancelled the station-area development contract, returned development land, reduced capital to clear accumulated losses and added NT$30 billion of government investment.[^rb-thsr] The Control Yuan’s official record names an investigation into whether direct and indirect public investment violated BOT principles.[^cy-bot] In a related statement, the Control Yuan says public and state-enterprise entities supplied 37.42% and describes that as a serious departure from the government-zero-investment commitment.[^cy-funding] Those are the source’s figures and characterization; this page does not average them into a new ownership percentage.

## Eurotrain, Shinkansen and the system boundary

The procurement history also has an official conflict. One Control Yuan report says the winning application proposed German ICE and French TGV as its European electromechanical reference system, then records a 12 December 1999 change of the core electromechanical system—signalling, power and vehicles—to the Japanese Shinkansen system.[^cy-switch] That report says the change led to commercial arbitration and compensation to the German and French suppliers of US$65 million plus 5% interest.[^cy-switch]

A separate Control Yuan report records the Ministry’s account that railway systems are assembled from specialist subsystems, that Siemens turnout and control equipment remained European for local requirements, and that the other equipment followed Japanese Shinkansen technology.[^cy-mixed] The two reports should be read together, not harmonised into a neat origin label: one foregrounds a European-to-Japanese change and its compensation, while the other explains the retained European turnout subsystem and rejects “mixed blood” as a useful description of the whole railway.[^cy-switch][^cy-mixed]

## Power, signalling and vehicles

The Railway Bureau identifies the Japanese Taiwan Shinkansen consortium as the 2000 core-electromechanical contractor and names the Tokaido–Sanyo Shinkansen as the reference system.[^rb-thsr] Its published technical description gives 25,000-volt, 60-Hz AC overhead power, automatic train control and centralised traffic control.[^rb-thsr] It describes the 700T as based on the Japanese 700 series but adjusted for Taiwan’s route and environment, with nine powered and three unpowered cars, one business car, eleven standard cars, 300 km/h maximum operating speed and a 304 m train length.[^rb-thsr]

## Ridership and source boundary

The MOTC yearbook’s Table 2-9 is titled “Passenger Traffic of High-Speed Rail Stations” and publishes entry and exit values in units of 10,000 passengers.[^motc-ridership] The line panel uses the committed Railway Bureau open-data monthly network snapshot and keeps the exact values, source URL and retrieval date beside the chart.[^motc-ridership] Station-level current values, trends and rank remain TBC while the wide table is not yet safely transcribed into the station data layer with its entry/exit dimensions preserved.[^motc-ridership]
`)

for (const station of stationPages) {
  const sources = ['tdx-thsr', 'thsrc-station', 'rb-thsr', 'motc-ridership']
  sourceDefaults['thsrc-station'] = {
    title: `${station.name} station information`,
    titleOriginal: `高鐵${station.zh}站資訊`,
    publisher: 'Taiwan High Speed Rail Corporation (台灣高速鐵路股份有限公司)',
    url: station.thsrcUrl,
    note: 'The operator’s full station page supports the station address, opening hours, transfer panel, floor navigation and passenger services described on this page.',
  }
  const body = `## Position in the TDX station order

${station.name} (${station.zh}) is station ID ${station.id} and TDX station code ${station.code} in the committed High-Speed Rail snapshot.[^tdx-thsr] It is ${station.role}.[^tdx-thsr] The record places it in ${station.town}, ${station.city}, at ${station.address}, with a position of ${station.lat.toFixed(5)}, ${station.lon.toFixed(5)}.[^tdx-thsr] Those coordinates and the postal address are separate fields in the data pull, so the page does not turn a point into a claim about the station’s whole catchment.[^tdx-thsr]

## Opening stage and system role

The Railway Bureau dates ${station.name}’s opening to ${station.opened} and places it in ${station.openingGroup}.[^rb-thsr] The same source records the route’s 350 km length and twelve-station system, which is why this page distinguishes ${station.name}’s local opening date from the railway’s initial service date.[^rb-thsr] The TDX record gives the current identity and location; it does not supply an architectural history or a reason for the name, so those questions remain outside the page’s asserted facts.[^tdx-thsr]

The station’s position also matters for reading later additions. The Railway Bureau lists the 2015 additions as Miaoli, Changhua and Yunlin, followed by Nangang in 2016.[^rb-thsr] ${station.name} is therefore described here as part of ${station.openingGroup}, rather than being silently grouped with the stations that began in January 2007.[^rb-thsr]

## Connections and passenger movement

The operator’s full station page gives the address as ${station.address} and identifies the passenger connection set as ${station.transfer}.[^thsrc-station] The practical transfer description is deliberately narrower than a regional transport claim: it records the modes named by THSRC and does not infer an interchange from geographic proximity.[^thsrc-station] For ${station.name}, the useful station-to-station question is therefore whether a traveller can follow the operator’s named connection, not whether every nearby bus stop or railway platform belongs to the HSR station.[^thsrc-station]

The page also publishes passenger services and a live-service navigation structure. Those service listings are operator information, while the TDX record is the source for the identifier, coordinates and address used in the guide.[^thsrc-station][^tdx-thsr] Keeping the two sources distinct prevents a station webpage’s floor map from being mistaken for a government geospatial record.[^thsrc-station][^tdx-thsr]

## Architecture and accessible layout

THSRC’s floor navigation for ${station.name} lists ${station.floors}.[^thsrc-station] ${station.architecture}.[^thsrc-station] This is a modest but checkable architectural description: it tells a reader how the operator exposes the passenger levels and what transport connections the station page names, without attributing an architect or an unverified design concept.[^thsrc-station] The national Railway Bureau describes the route as approximately 73% bridges and viaducts, 18% tunnels and 9% embankment or cut sections, but that system-wide ratio does not establish ${station.name}’s structure on its own.[^rb-thsr]

The operator page is also the source to consult for current facilities, opening hours and transfer directions, while the site’s station data layer is static and retrieved on 24 August 2026.[^thsrc-station][^tdx-thsr] A future accessibility pass should transcribe the operator’s lift, tactile, toilet and nursing-room fields into structured station data; this page leaves any field not explicitly extracted as TBC rather than borrowing a generic HSR-station assumption.[^thsrc-station]

## Ridership and what remains TBC

The MOTC statistical yearbook publishes a station-level High-Speed Rail table with separate entry and exit dimensions and a unit of 10,000 passengers.[^motc-ridership] It also records the opening dates used above, including the 2015 three-station addition and the 2016 Nangang opening.[^motc-ridership] A current ${station.name} passenger figure, trend and rank within the High-Speed Rail station set are TBC on this page because the wide PDF table has not yet been transcribed into the committed station schema without risking a column-shift error.[^motc-ridership] The gap is therefore a data-layer boundary; it says nothing about the availability of station ridership in THSRC or MOTC publications.[^motc-ridership]

The line page carries the separate monthly network snapshot from the Railway Bureau open-data dataset, with exact values and retrieval date visible in its table.[^motc-ridership] It should not be read as a substitute for this station’s missing entry/exit row: a network total and a station movement count answer different questions.[^motc-ridership]
`
  const stationFacts = facts([
    ['Station ID', station.id, 'tdx-thsr'],
    ['TDX station code', station.code, 'tdx-thsr'],
    ['Traditional Chinese', station.zh, 'tdx-thsr'],
    ['Location', `${station.town}, ${station.city}`, 'tdx-thsr'],
    ['Address', station.address, 'tdx-thsr'],
    ['Opening date', station.opened, 'rb-thsr'],
    ['Named transfers', station.transfer, 'thsrc-station'],
    ['Station ridership', 'TBC — source table identified, row not yet transcribed', 'motc-ridership'],
  ])
  const stationSpecs = specs([
    ['Latitude', station.lat.toFixed(5), 'degrees', 'tdx-thsr'],
    ['Longitude', station.lon.toFixed(5), 'degrees', 'tdx-thsr'],
    ['TDX update time', station.updateTime, 'timestamp', 'tdx-thsr'],
    ['Operator floor list', station.floors, 'levels', 'thsrc-station'],
  ])
  write(`content/rail/thsr/stations/${station.slug}.md`, `---
title: ${station.name}
summary: ${station.name} (${station.zh}) — TDX station ${station.code}, ${station.town}, with ${station.transfer.toLowerCase()} named by the operator.
order: ${Number(station.id) - 989}
operator: THSR
updated: 2026-08-24
facts:
${stationFacts}
specs:
${stationSpecs}
sources:
${sourceBlock(sources)}
---

${body}`)
}

const research = `# Taiwan High Speed Rail — research report

> Corpus warning: files under docs/research/ are leads and working notes, not sources. Every published claim below was checked against the linked primary page or document.

## What is established

- The Railway Bureau’s full project page describes the Taiwan north–south High-Speed Rail project as a BOT project, records the 23 July 1998 contracts, their original 35-year operating and 50-year station-area concessions, and the approximate NT$513.3 billion project cost. The same page records the 2015 amendment to a 70-year concession and NT$30 billion government investment. PRIMARY, High confidence: regulator/builder project record. Original-language basis: 「交通部於民國87年7月23日與台灣高鐵公司簽訂『興建營運合約』（特許期35年）及『站區開發合約』（特許期50年）」 and 「特許期延長為70年」. [rb-thsr](${rbUrl})
- The Railway Bureau records a 350 km route, 12 stations, the opening stages on 5 January 2007, 2 March 2007, 1 December 2015 and 1 July 2016, 73% bridge/viaduct, 18% tunnel and 9% embankment/cut shares, 25 kV 60 Hz AC overhead power, ATC/CTC, and the 700T technical description. PRIMARY, High confidence: current official project page. Original-language basis: 「高速鐵路路線全長350公里，全線設置12個車站」 and the dated table beneath it. [rb-thsr](${rbUrl})
- THSRC’s full business page lists the 12 current stations: 南港、台北、板橋、桃園、新竹、苗栗、台中、彰化、雲林、嘉義、台南、左營. PRIMARY, High confidence: operator page. Original-language basis: the station list under 「主要業務」. [thsrc-business](${thsrcBusinessUrl})
- TDX’s live THSR Station endpoint returned 12 records and Shape returned one geometry record on 24 August 2026. The checked Route and StationOfRoute endpoints returned 404 and were recorded as failed; no route metadata was inferred from their absence. PRIMARY, High confidence: direct API pull committed under data/tdx/THSR/. [tdx-thsr](${tdxStationUrl}) [tdx-thsr-shape](${tdxShapeUrl})
- The MOTC statistical yearbook’s Table 2-9 publishes High-Speed Rail station entry and exit traffic in units of 10,000 passengers and carries opening-date notes. PRIMARY, High confidence: official statistical PDF. Original-language basis: 「表2-9 高速鐵路各站旅客人數」 and 「單位：萬人次」. [motc-ridership](${motcRidershipUrl})
- The THSRC station pages were fetched in full for all 12 stations. They provide station-specific addresses, passenger-service information, transport/transfer panels and floor-navigation labels. PRIMARY, High confidence: operator station pages. [thsrc-stations](${stationPages.map((s) => `${s.name}: ${s.thsrcUrl}`).join('; ')})

## Conflicts

- The BOT financial model is described by the Railway Bureau as a project with government responsibilities and later NT$30 billion government investment; the Control Yuan’s statement says public and state-enterprise entities supplied 37.42% and calls this a serious departure from the zero-government-investment commitment. These are not averaged: one is the Railway Bureau’s project-finance summary and the other is the Control Yuan’s criticism of the funding outcome. [rb-thsr](${rbUrl}) [cy-funding](${cyFundingUrl})
- One Control Yuan report says the bid used German ICE/French TGV as the European reference system and that signalling, power and vehicles changed to Japanese Shinkansen in 1999, with US$65 million plus 5% interest paid to the German and French suppliers. A separate Control Yuan report records the Ministry’s account that Siemens turnout and control equipment remained European while the rest followed Japanese technology, and rejects treating the whole railway as a “mixed-blood” system. Both values and descriptions are published on the line page. [cy-switch](${cySwitchUrl}) [cy-mixed](${cyMixedUrl})

## Checked and failed

- **TDX /Rail/THSR/Route endpoint** — returned HTTP 404 on 2026-08-24. The failure is recorded in data/tdx/THSR/meta.json; no route record was invented.
- **TDX /Rail/THSR/StationOfRoute endpoint** — returned HTTP 404 on 2026-08-24. The failure is recorded in data/tdx/THSR/meta.json; the station sequence is kept as the operator’s full 12-station list.
- **MOTC station ridership table transcription** — the PDF was fetched in full on 2026-08-24, but its wide multi-column station table was not safely transcribed into the committed station schema during this unit. Station-level current figures, trends and ranks remain TBC rather than being copied from visually ambiguous column order.

## Stated gaps

- The station pages still need an audited import of the MOTC Table 2-9 station rows, preserving entry and exit dimensions and retrieval date. The MOTC statistical PDF and Railway Bureau open-data dataset are the source families that would settle this.
- THSRC’s station pages expose current service and floor-navigation information, but a structured accessibility layer for lifts, tactile paths, accessible toilets, nursing rooms and platform gaps was not extracted in this unit. A field-by-field operator-page transcription would settle it.
- The individual station pages do not assert architects or design authorship. Architectural attribution requires a project brief, station design document or an official cultural/engineering source for each station.
`
write('docs/research/rail/thsr.md', research)

console.log(`thsr: wrote ${stationPages.length + 4} content files and the research report`)
