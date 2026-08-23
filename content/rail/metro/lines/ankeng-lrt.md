---
title: Ankeng LRT
summary: The second New Taipei light rail line — a valley feeder into the Xindian corridor, with a button you have to press to get the doors to open.
order: 9
line: K
aliases:
  - 安坑輕軌
updated: 2026-08-23
hero:
  image: ankeng-lrt/hero
  alt: Two cream-and-black Ankeng LRT trams on grass-lined track, overhead wires above and wooded hillside behind.
  caption: Two Ankeng LRT trams, on the line's grassed track through the valley.
lead:
  value: "7.5"
  unit: km
  label: operating length, K01 to K09
  source: tdx
  note: Also published as 7.1 km (TDX's own station-to-station chainage) and 7.67 km (zh.wikipedia's total, measured from Ankeng Depot rather than from K01). Three figures, three different starting points — see "How long the line is" below.
facts:
  - label: Line code
    value: K
    source: tdx
  - label: Operator
    value: New Taipei Metro Corporation (NTMC)
    source: tdx
  - label: Termini
    value: K01 — K09
    source: ntmc-stations
  - label: Stations
    value: "9"
    source: ntmc-stations
  - label: Elevated stations
    value: "5 (K02, K06–K09)"
    source: dorts-route
  - label: At-grade stations
    value: "4 (K01, K03–K05)"
    source: dorts-route
  - label: Opened
    value: 10 February 2023
    source: ntmc-opening
  - label: Free trial
    value: 10 Feb – 12 Mar 2023
    source: ntmc-opening
  - label: Operating hours
    value: 06:00–24:00
    source: ntmc-fares
  - label: Interchange
    value: K09 with the Circular Line
    source: ntmc-fares
  - label: Depot
    value: Ankeng Depot 安坑機廠
    source: dorts-depot
  - label: Rolling stock builder
    value: Taiwan Rolling Stock Company, with Voith Engineering Services
    source: ntmc-fleet
  - label: Fleet
    value: "15 trainsets"
    source: ntmc-fleet
specs:
  - label: Route length, operating
    value: "7.5"
    unit: km
    source: tdx
  - label: Route length, station chainage
    value: "7.1"
    unit: km
    source: tdx
  - label: Route length, published total
    value: "7.67"
    unit: km
    source: zh-wikipedia
  - label: Stations
    value: "9"
    source: ntmc-stations
  - label: Full-line journey
    value: "21"
    unit: min
    source: dorts-operating
  - label: Short-working journey
    value: "9"
    unit: min
    source: dorts-operating
  - label: Peak headway, overlap (K06–K09)
    value: "7.5"
    unit: min
    source: dorts-operating
  - label: Peak headway, non-overlap (K01–K05)
    value: 10—15
    unit: min
    source: dorts-operating
  - label: Off-peak headway
    value: "15"
    unit: min
    source: dorts-operating
  - label: Base fare
    value: "20"
    unit: NT$
    source: ntmc-fares
  - label: Maximum fare
    value: "25"
    unit: NT$
    source: ntmc-fares
  - label: Cars per train
    value: "5"
    source: ntmc-fleet
  - label: Capacity per train
    value: "265"
    source: ntmc-fleet
  - label: Maximum speed
    value: 70 (wired) / 50 (unwired)
    unit: km/h
    source: ntmc-fleet
sources:
  - id: tdx
    title: Taiwan MOTC TDX — Line, Station, StationOfRoute, operator NTALRT
    publisher: Ministry of Transportation and Communications, Taiwan
    url: https://tdx.transportdata.tw/
    snapshot: https://web.archive.org/web/20260806042022/https://tdx.transportdata.tw/
    accessed: 2026-08-12
    kind: primary
    note: "Government open data, committed to this repository at data/tdx/NTALRT/. RouteLength for route K-1 is 7.5, matching NTMC's own published figure exactly; CumulativeDistance against the last station (K09) is 7.1. Station K04's official name, 耕莘安康院區, and the line's colour, #9E925E, are both read from this record."
  - id: ntmc-opening
    title: "Ankeng LRT opens 10 February — one month free trial"
    titleOriginal: 安坑輕軌2月10日通車 試營運期1個月享免費搭乘
    publisher: New Taipei Metro Corporation (新北大眾捷運股份有限公司)
    url: https://www.ntmetro.com.tw/basic/?mode=detail&node=544
    snapshot: https://web.archive.org/web/20260812000000/https://www.ntmetro.com.tw/basic/?mode=detail&node=544
    accessed: 2026-08-12
    kind: primary
    lang: zh-Hant
    note: "The operator's own opening announcement: 安坑輕軌將於2月10日正式通車...新北大眾捷運股份有限公司於當日下午1點正式發出首班車; the free trial from 2月10日 to 3月12日 for anyone tapping an e-ticket; trial hours of 上午10點至下午18點; and the 常客回饋金 rebate, 搭乘每滿200元即可回饋50元."
  - id: ntmc-fares
    title: "Ankeng LRT opens 10 February — headways and fares at a glance"
    titleOriginal: 安坑輕軌2月10日正式通車 班距票價懶人包一次看
    publisher: New Taipei Metro Corporation (新北大眾捷運股份有限公司)
    url: https://www.ntmetro.com.tw/basic/?mode=detail&node=578
    snapshot: https://web.archive.org/web/20260812000001/https://www.ntmetro.com.tw/basic/?mode=detail&node=578
    accessed: 2026-08-12
    kind: primary
    lang: zh-Hant
    note: "The operator's fare and hours summary: 票價比照淡海輕軌採階梯費率制，一段票價為20元，最高25元; post-trial operating hours 6時至24時; the K09 interchange with the Circular Line."
  - id: dorts-route
    title: Ankeng Line
    titleOriginal: 安坑線
    publisher: New Taipei City Government, Department of Rapid Transit Systems (新北市政府捷運工程局, DORTS)
    url: https://www.dorts.ntpc.gov.tw/about/route/jW0OdPGn2nbJ
    snapshot: https://web.archive.org/web/20260812000002/https://www.dorts.ntpc.gov.tw/about/route/jW0OdPGn2nbJ
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: "The builder's full route and chronology page: the corridor and nine stations; July 2013 feasibility approval; June 2015 comprehensive-planning approval; environmental and urban-plan milestones; the 3 March 2016 civil design-build award; the 6 April 2016 start; inspections and the 2 February 2023 operating approval."
  - id: ntpc-opening-process
    title: Ankeng LRT receives operating permit and opens 10 February
    titleOriginal: 安坑輕軌獲營運許可 2月10日通車
    publisher: New Taipei City Government (新北市政府)
    url: https://www.ntpc.gov.tw/ch/home.jsp?dataserno=471c4aecd1fe681460bc91c9f77f27a4&id=e8ca970cde5c00e1
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: "The commissioning sequence: initial inspection on 11 December 2022, completion of improvements and submission for final inspection on 27 December, final inspection on 14 January 2023, and MOTC operating approval on 2 February. Also records construction disruption from labour and material shortages and the pandemic."
  - id: dorts-floating-track
    title: Floating-slab track reduces noise and vibration on Ankeng LRT
    titleOriginal: 安坑輕軌浮動式道床降低噪音振動
    publisher: New Taipei City Government, Department of Rapid Transit Systems (新北市政府捷運工程局, DORTS)
    url: https://www.dorts.ntpc.gov.tw/documentary/articleInfo/WQR2W0lodGPV
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: "Three floating-slab-track locations total 800 m over both directions: 300 m around K08 on each approach combined and 200 m beside the Anhe fire brigade, selected near vibration-sensitive housing around K07 and K08. Explains the elastic-pad isolation mechanism."
  - id: dorts-bridge-engineering
    title: An-Xin Bridge — a New Taipei landmark built to resist severe winds
    titleOriginal: 安心橋－耐強風的新北地標
    publisher: New Taipei City Government, Department of Rapid Transit Systems (新北市政府捷運工程局, DORTS)
    url: https://www.dorts.ntpc.gov.tw/documentary/articleInfo/1AldpKlv2LK7
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: "Water-agency flood requirements limited the river crossing to two piers; the resulting 502 m, three-span hybrid cable-stayed and steel-truss bridge has a 225 m main span. Records 80 m/s wind design and 1:60 wind-tunnel modelling."
  - id: dorts-bim
    title: Practical study of BIM in the design and construction of An-Xin Bridge for the Ankeng LRT system
    titleOriginal: 建築資訊模型(BIM)於安坑輕軌系統安心橋設計施工應用實務探討
    publisher: New Taipei City Government, Department of Rapid Transit Systems (新北市政府捷運工程局, DORTS)
    url: https://www.dorts.ntpc.gov.tw/admin/content/upload/file/20211117/e24abaab-d892-4a63-b31a-dc61c6915f87.pdf
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: "Full eight-page technical paper, downloaded and rendered for verification. Documents BIM clash checking, bridge-member coordination, drone-derived 3D GIS, coating-colour simulation, quantity calculation and model handover across design, construction and operations."
  - id: dorts-project-management
    title: Gender analysis of construction-management staff in the joint site office — Ankeng LRT case study
    titleOriginal: 工地聯合辦公室施工管理人員之性別探討及策進作為－以安坑輕軌為例
    publisher: New Taipei City Government, Department of Rapid Transit Systems (新北市政府捷運工程局, DORTS)
    url: https://www.dorts.ntpc.gov.tw/cdn/file/20211025/2835d99f-85e8-4a32-8106-f8ce91b8bf2c.pdf
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: "Full ten-page official paper. Identifies Sinotech Engineering Consultants as project/construction manager and MOH and Associates as supervising consultant, and records how those teams expanded as systems work grew."
  - id: dorts-k02
    title: Ankeng LRT Rose China Town station
    titleOriginal: 安坑輕軌玫瑰中國城站
    publisher: New Taipei City Government, Department of Rapid Transit Systems (DORTS)
    url: https://www.dorts.ntpc.gov.tw/art_aesthetics/public_artinfo/Pxe2kNxkmEgL
    accessed: 2026-08-12
    kind: primary
    lang: zh-Hant
    note: "Confirms K02 is elevated, ahead of the route's general at-grade-to-elevated transition point: 玫瑰中國城站位於...安一路高架橋上."
  - id: dorts-operating
    title: Ankeng LRT operating pattern
    titleOriginal: 安坑輕軌營運模式
    publisher: New Taipei City Government, Department of Rapid Transit Systems (DORTS)
    url: https://www.dorts.ntpc.gov.tw/documentary/articleInfo/O6Jma074Zqya
    snapshot: https://web.archive.org/web/20260812000003/https://www.dorts.ntpc.gov.tw/documentary/articleInfo/O6Jma074Zqya
    accessed: 2026-08-12
    kind: primary
    lang: zh-Hant
    note: "The two service patterns and their times (全程車...約21分鐘; 區間車...約9分鐘), the baseline headways, the door-open button (上下車也要注意按下車門按鈕列車門才會打開), and the note that both K09 side platforms can be boarded (2側月台皆可搭乘)."
  - id: ntmc-fleet
    title: Light rail rolling stock
    titleOriginal: 輕軌列車
    publisher: New Taipei Metro Corporation (新北大眾捷運股份有限公司)
    url: https://www.ntmetro.com.tw/basic/?mode=detail&node=19
    snapshot: https://web.archive.org/web/20260812000004/https://www.ntmetro.com.tw/basic/?mode=detail&node=19
    accessed: 2026-08-12
    kind: primary
    lang: zh-Hant
    note: "The operator's own rolling-stock page, covering both New Taipei light rail lines together: builder 台灣車輛股份有限公司 with Germany's Voith Engineering Services; 30 trains total, 15 to Danhai and 15 to Ankeng; 5 cars per train, 265 capacity (62 seated, 203 standing); 70 km/h under wire, 50 km/h off wire; livery 光耀金 chosen by public vote."
  - id: ntmc-anniversary
    title: "Ankeng LRT commuter ridership growing steadily — peak short-working converted to full-line running, headway to 6 minutes"
    titleOriginal: 安坑輕軌通勤運量穩定增長 尖峰時段區間車將改為全線行駛 縮短班距可達6分鐘一班
    publisher: New Taipei Metro Corporation (新北大眾捷運股份有限公司)
    url: https://www.ntmetro.com.tw/basic/?mode=detail&node=712
    snapshot: https://web.archive.org/web/20260812000005/https://www.ntmetro.com.tw/basic/?mode=detail&node=712
    accessed: 2026-08-12
    kind: primary
    lang: zh-Hant
    note: "20 February 2024 release: cumulative ridership at one year, 200萬人次, daily average 5,600; growth concentrated K05–K01; from 26 February 2024 the peak short-workings became full-line, with headway tightened to 6–8 minutes (morning peak) and 8–10 minutes (evening peak) — not a single '6-minute' figure."
  - id: dorts-anxin-bridge
    title: "The Ankeng LRT's hardest engineering work — An-Xin Bridge"
    titleOriginal: 安坑輕軌最困難的工程—安心橋
    publisher: New Taipei City Government, Department of Rapid Transit Systems (DORTS)
    url: https://www.dorts.ntpc.gov.tw/documentary/articleInfo/oa1ZKpQXmB9V
    snapshot: https://web.archive.org/web/20260812000006/https://www.dorts.ntpc.gov.tw/documentary/articleInfo/oa1ZKpQXmB9V
    accessed: 2026-08-12
    kind: primary
    lang: zh-Hant
    note: "502 m, three-span continuous asymmetric cable-stayed bridge, 130 m pylon, crossing a 400 m-wide reach of the Xindian River: 全長502公尺的安心橋，採三跨連續不對稱斜張橋設計...塔高130公尺. Called 安坑輕軌難度最高的工程, the line's hardest engineering work — not itself a length superlative."
  - id: dorts-bridge-comparison
    title: "Taiwan's distinctive light rail bridges — Danhai's Blue Sea Bridge, Ankeng's An-Xin Bridge, Kaohsiung's Love River Bridge"
    titleOriginal: 臺灣輕軌特色橋梁 ── 淡海藍海橋・安坑安心橋・高雄愛河橋
    publisher: New Taipei City Government, Department of Rapid Transit Systems (DORTS)
    url: https://www.dorts.ntpc.gov.tw/documentary/articleInfo/r6421Qxv29nR
    accessed: 2026-08-12
    kind: primary
    lang: zh-Hant
    note: "DORTS's own superlative for An-Xin Bridge is about span, not overall length: 臺灣首座單塔斜張橋型軌道複合式橋梁，最大跨度達225公尺，為目前國內鐵路運輸系統中最長跨度. Gives comparison lengths for Danhai's Blue Sea Bridge (120.7 m) and Kaohsiung's Love River Bridge (about 96 m)."
  - id: cna-anxin-bridge
    title: "Ankeng LRT (2/2): the 502-metre An-Xin Bridge — Ankeng LRT crosses the Xindian River to meet the Circular Line"
    titleOriginal: 安坑輕軌2／502公尺安心橋 安坑輕軌跨新店溪銜接環狀線
    publisher: 中央社 (Central News Agency, CNA)
    url: https://www.cna.com.tw/news/aloc/202109250028.aspx
    accessed: 2026-08-12
    kind: secondary
    lang: zh-Hant
    note: "Reports a pylon weight of about 3,450 tonnes and quotes 方一昇, a Sinyi Construction Development project director, calling the bridge 目前國內最長軌道橋 — Taiwan's longest rail bridge outright, a broader claim than DORTS's own 'longest span' framing above."
  - id: dorts-tunnel
    title: "A new highlight on the Ankeng LRT's track — the Shuang'an Tunnel's crossover"
    titleOriginal: 安坑輕軌軌道新亮點！雙安隧道交叉橫渡線！
    publisher: New Taipei City Government, Department of Rapid Transit Systems (DORTS)
    url: https://www.dorts.ntpc.gov.tw/documentary/articleInfo/pRG2lD792b5z
    accessed: 2026-08-12
    kind: primary
    lang: zh-Hant
    note: "Places the 雙安隧道 (Shuang'an Tunnel) — described as Taiwan's first road-and-light-rail co-built tunnel — between K01 station and Ankeng Depot, i.e. on the depot lead rather than between two passenger stations. No length given for the tunnel itself."
  - id: dorts-depot
    title: "Getting to know Ankeng Depot"
    titleOriginal: 安坑機廠知多少！
    publisher: New Taipei City Government, Department of Rapid Transit Systems (DORTS)
    url: https://www.dorts.ntpc.gov.tw/documentary/articleInfo/0V4drGelZqEN
    accessed: 2026-08-12
    kind: primary
    lang: zh-Hant
    note: "Three functional areas: a 9-track stabling yard (駐車廠), a 5-track maintenance shop (維修廠), and an administration building for train control, dispatch and staff training."
  - id: dorts-depot-trial
    title: "Ankeng LRT depot trial well used — extended again to end of December"
    titleOriginal: 安坑輕軌機廠試辦搭乘踴躍 再延長至12月底
    publisher: New Taipei City Government (新北市政府)
    url: https://www.ntpc.gov.tw/ch/home.jsp?id=28&dataserno=202408300041
    accessed: 2026-08-12
    kind: primary
    lang: zh-Hant
    note: "Confirms the depot boarding-platform trial's final extension to 31 December 2024, with roughly 50 riders a day across the two peak trips, run as an evaluation of whether the platform should become a full station: 長期持續觀察在地民眾搭乘輕軌成效."
  - id: dorts-placename
    title: Why is it called the "Ankeng" LRT?
    titleOriginal: 為什麼叫做「安坑」輕軌呢?
    publisher: New Taipei City Government, Department of Rapid Transit Systems (DORTS)
    url: https://www.dorts.ntpc.gov.tw/documentary/articleInfo/vKR2L3J9mJGp
    accessed: 2026-08-12
    kind: primary
    lang: zh-Hant
    note: "Ankeng's old name was 暗坑 (Hokkien Àm-kheⁿ, 'dark valley'); renamed 安坑 in 1801 by Lin Deng-xuan (林登炫), grandson of pioneer settler Lin Tian-cheng (林天成), because the old name sounded unpleasant."
  - id: ntmc-k04
    title: K04 Cardinal Tien Hospital Ankang Branch station
    titleOriginal: K04耕莘安康院區
    publisher: New Taipei Metro Corporation (新北大眾捷運股份有限公司)
    url: https://www.ntmetro.com.tw/basic/?mode=detail&node=607
    accessed: 2026-08-12
    kind: primary
    lang: zh-Hant
    note: "The operator's own station page, titled and located as 耕莘安康院區, 安一路與車子路路口 — confirming the station's official name is the hospital's branch campus name, not the shorter 耕莘醫院 found in some secondary round-ups."
  - id: ntmc-stations
    title: Ankeng LRT stations
    titleOriginal: 安坑輕軌車站
    publisher: New Taipei Metro Corporation (新北大眾捷運股份有限公司)
    url: https://www.ntmetro.com.tw/basic/?node=10137
    accessed: 2026-08-12
    kind: primary
    lang: zh-Hant
    note: "The full nine-station list, K01–K09, matching TDX exactly."
  - id: ltn-naming-2017
    title: "Ankeng LRT station names announced, completion expected end of 2021"
    titleOriginal: 安坑輕軌站名出爐 預計110年底完工
    publisher: 自由時報 (Liberty Times)
    url: https://news.ltn.com.tw/news/local/paper/1158040
    accessed: 2026-08-12
    kind: secondary
    lang: zh-Hant
    note: "Contemporaneous, 7 December 2017, report of the city's own station-naming panel finalising K4 as 耕莘安康院區, years before opening, and describing the naming process (district office consultation with local wardens, historians and elected representatives, decided by 捷運車站命名、更名或名稱加註評審小組)."
  - id: ntmc-tpass
    title: Where to buy the TPASS (Taipei–New Taipei–Keelung–Taoyuan) commuter pass on New Taipei Metro
    titleOriginal: 「TPASS行政院通勤月票(基北北桃)」悠遊卡在新北捷運哪裡可以購卡？
    publisher: New Taipei Metro Corporation (新北大眾捷運股份有限公司)
    url: https://www.ntmetro.com.tw/basic/?mode=detail&node=659
    accessed: 2026-08-12
    kind: primary
    lang: zh-Hant
    note: "Lists Circular Line stations and two Danhai LRT stations (V01, V26) as sales points; no Ankeng LRT station, including K09, is listed. Cited here for what it does not say, against secondary claims that K09 sells the pass."
  - id: ntmc-earthquake
    title: New Taipei Metro — 3 April earthquake update
    titleOriginal: 新北捷運公司 - 0403 地震說明
    publisher: New Taipei Metro Corporation (新北大眾捷運股份有限公司)
    url: https://www.ntmetro.com.tw/basic/?mode=detail&node=716
    accessed: 2026-08-12
    kind: primary
    lang: zh-Hant
    note: "Immediately after the 3 April 2024 earthquake: 安坑輕軌k9至K6以單線雙向營運，K6至K1局部營運."
  - id: ntmc-earthquake-resume
    title: New Taipei Metro's two light rail lines resume normal operation
    titleOriginal: 新北捷運兩線輕軌恢復正常營運
    publisher: New Taipei Metro Corporation (新北大眾捷運股份有限公司)
    url: https://www.ntmetro.com.tw/basic/?mode=detail&node=719
    accessed: 2026-08-12
    kind: primary
    lang: zh-Hant
    note: "Ankeng LRT resumed normal operation at 16:30 on 3 April 2024, at a 15-minute headway: 安坑輕軌已於16：30恢復正常營運，班距為15分鐘."
  - id: ntmc-ridership-2025
    title: New Taipei Metro exceeds 30 million journeys in 2025, a record high
    titleOriginal: 新北捷運2025全年運量突破3,000萬人次！創歷史新高
    publisher: New Taipei Metro Corporation (新北大眾捷運股份有限公司)
    url: https://www.ntmetro.com.tw/basic/?mode=detail&node=843
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: "The operator's full-year release says Ankeng LRT exceeded 2.03 million journeys in 2025; New Taipei Metro's three operated lines together exceeded 30.09 million."
  - id: motc-tpass-table
    title: "Table 1: contents and purchase channels of the Taipei–New Taipei–Keelung–Taoyuan living-circle commuter monthly pass"
    titleOriginal: 表1、基北北桃生活圈通勤月票方案內容及購買通路
    publisher: 中華民國交通部 (Ministry of Transportation and Communications, Taiwan)
    url: "https://motc.gov.tw/ch/app/data/doc?aplistdn=&detailNo=1116207557921214464&id=14&module=news&preview=&serno=1efdb7ab-010b-4e10-ba6c-326d8cfea18f&type=s"
    accessed: 2026-08-13
    kind: primary
    lang: zh-Hant
    note: "Table attached to the Ministry's own 2022 TPASS launch press release. 適用運具 (covered modes): 捷運、輕軌、臺鐵、市區客運、公路客運(含國道客運)、公共自行車 — metro, light rail, rail, city and intercity bus, and public bicycle generally, naming no specific light rail line. Its own sales-point list, by contrast, names **安坑輕軌 K09 十四張站** directly, alongside Taipei Metro, Circular Line and Danhai LRT V01/V26 — conflicting with NTMC's own current sales-point page below, which lists no Ankeng LRT station at all. Not re-verified against a more recent MOTC document; may reflect 2022 launch-day provision rather than the pass's current state."
  - id: zh-wikipedia
    title: Ankeng LRT
    titleOriginal: 安坑輕軌
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/zh-tw/安坑輕軌
    accessed: 2026-08-12
    kind: secondary
    lang: zh-Hant
    note: "Infobox distinguishes 路線長度 7.67公里 from 營運長度 7.5公里 (the latter matching NTMC/TDX exactly), and its route sentence gives the reason: the line is described as starting 起自安坑機廠 (at the depot), not at K01. Also the source for the 2.8+4.3+0.4 km structure breakdown, the 2018 four-option livery vote shortlist, and the July–December 2024 depot trial dates."
---

The Ankeng light rail is a nine-station feeder through the hills and valley of
Xindian, meeting the [Circular Line](/rail/metro/lines/circular-line/) at K09
Shisizhang rather than entering central Taipei itself.[^dorts-route][^ntmc-stations]
It opened on 10 February 2023 and is operated by
[New Taipei Metro](/rail/operators/ntmc/).[^ntmc-opening] The doors do not open
automatically: riders press the illuminated button to board or alight at every
stop.[^dorts-operating]

![The cable-stayed Anxin Bridge, near the Ankeng LRT's route into the valley](/images/ankeng-lrt/guideway-800.webp "Anxin Bridge, near the Ankeng LRT's route. — Tze Chiang Hao, CC BY 4.0, Wikimedia Commons")

## Overview

The line begins beside Ankeng Depot at the junction of Antai and Anyi roads,
runs north along Anyi Road through the valley, turns onto the Anhe branch road
and Anhe Road, then crosses National Freeway 3, the Zhong-An Bridge approach,
the New Taipei Expressway and the Xindian River before reaching
Shisizhang.[^dorts-route] DORTS describes the built railway as a mixed at-grade
and elevated system; the passenger service covers about 7.5 km between K01 and
K09.[^dorts-route][^tdx]

The project gave the Ankeng district a direct rail interchange with the wider
Taipei network at Shisizhang.[^dorts-route] Its alignment required very
different civil works within one short line: street-level track, viaduct, a
depot lead through Shuang'an Tunnel, vibration-isolated track beside housing,
and the long An-Xin Bridge over the Xindian River.[^dorts-tunnel][^dorts-floating-track][^dorts-anxin-bridge]

## Route and alignment

From the depot, the alignment reaches K01 Shuangcheng near the Antai Road–Anyi
Road junction. K02 Rose China Town stands on viaduct, while K03 Taiping Temple,
K04 Cardinal Tien Hospital Ankang Branch and K05 Jingwen University of Science
and Technology form the at-grade middle of the valley route.[^dorts-route][^dorts-k02]
The railway rises again for K06 Ankang and remains elevated through K07
Yangguang Sports Park and K08 Xinhe Elementary School to K09
Shisizhang.[^dorts-route]

The final approach turns east near the Water Resources Agency's Xindian office,
then north on a new road before the railway crosses the expressway and river on
An-Xin Bridge.[^dorts-route] K09 stands in the Shisizhang redevelopment area,
where the light rail terminates beside Circular Line station Y08.[^dorts-route][^ntmc-fares]

## Planning and approvals

The Executive Yuan approved feasibility on 1 July 2013.[^dorts-route] New
Taipei then began comprehensive planning that June, held public hearings on 27
and 30 December, and sent the plan to the Ministry of Transportation and
Communications on 7 May 2014.[^dorts-route] After ministry reviews in September
and November 2014 and National Development Council review on 18 May 2015, the
Executive Yuan approved the comprehensive plan on 8 June 2015.[^dorts-route]

Environmental review had a longer history. The original environmental-impact
statement was placed on record on 14 October 2003; later difference analyses
covered design changes in 2016 and changes to depot layout and earthworks in
2020.[^dorts-route] The urban-plan changes for the route took effect on 24
January 2018, followed by a separate change affecting the river zone on 18
November 2019.[^dorts-route]

## Construction history

The civil and track design-build contract was awarded on 3 March 2016, and
main construction began on 6 April.[^dorts-route] An official project-management
paper identifies Sinotech Engineering Consultants as the project and
construction manager and MOH and Associates as supervising consultant; its
figures show both the government and consultant site teams expanding as the
work moved from civil construction into railway systems.[^dorts-project-management]

Testing and commissioning closed the gap between construction and public
service. Stability testing was complete on 7 November 2022, initial inspection
followed on 11 December, and the project team reported its corrective work
complete on 27 December.[^dorts-route][^ntpc-opening-process] The Ministry of
Transportation and Communications conducted final inspection on 14 January
2023 and issued the operating permit on 2 February; public service began eight
days later.[^ntpc-opening-process][^ntmc-opening]

New Taipei's opening account says labour shortages, material shortages and the
COVID-19 pandemic disrupted delivery.[^ntpc-opening-process] Those statements
describe the builder's account of the schedule pressure; the cited page does
not quantify a separate delay attributable to each cause.

## Engineering

### Track, tunnel and vibration control

Shuang'an Tunnel lies between K01 and Ankeng Depot, on the depot lead rather
than between two passenger stations.[^dorts-tunnel] DORTS describes it as
Taiwan's first combined road-and-light-rail tunnel: road bores flank the light
rail bore, and the tracks contain a crossover at grade inside the tunnel so
trains can change direction during depot movements.[^dorts-tunnel]

Near K07 and K08, homes beside the railway made vibration and secondary noise
a design concern.[^dorts-floating-track] DORTS records three floating-slab
track installations totalling 800 m across both running directions: two
sections around K08 total 300 m each, and the section beside the Anhe fire
brigade totals 200 m.[^dorts-floating-track] Elastic pads separate the heavy
track slab from the bridge deck or structural invert, lowering the system's
natural frequency and reducing vibration transferred into the supporting
structure.[^dorts-floating-track]

### An-Xin Bridge

Between K08 and K09, An-Xin Bridge crosses a roughly 400 m-wide reach of the
Xindian River.[^dorts-anxin-bridge] Flood-management requirements limited the
crossing to two river piers, leading to a 502 m, three-span structure with a
225 m main span.[^dorts-bridge-engineering] Its structural system combines an
asymmetric cable-stayed bridge with a steel truss; the 130 m pylon and
water-bird-wing profile form the line's most conspicuous landmark.[^dorts-anxin-bridge][^dorts-bridge-engineering]

Wind was a specific design load. DORTS says the bridge was checked for wind
speeds up to 80 m/s—above the 61.2 m/s threshold it gives for Beaufort force
17—and tested with a 1:60 wind-tunnel model.[^dorts-bridge-engineering] The
same source explains the name 安心 as a pairing of 安坑 and 新店 as well as a
promise of reassurance.[^dorts-bridge-engineering]

The bridge's design-build team used building-information modelling from
detailed design through construction.[^dorts-bim] The official technical paper
describes collision checks between structural elements, coordinated shop and
construction drawings, drone-derived three-dimensional terrain for the K08–K09
area, simulations of the bridge coating colours, and model-based quantity
calculations.[^dorts-bim] Its handover table also includes models, records and
manuals intended for the operating stage, making the model a project record
rather than only a presentation image.[^dorts-bim]

The bridge's record claim varies by source. DORTS calls its 225 m main span the
longest span in a Taiwanese rail transport system; its comparison gives 120.7
m for Danhai's Blue Sea Bridge and about 96 m for Kaohsiung's Love River
Bridge.[^dorts-bridge-comparison] CNA instead quotes a named Sinyi Construction
Development project director calling the whole 502 m structure Taiwan's
longest rail bridge and reports a pylon weight of about 3,450 tonnes.[^cna-anxin-bridge]
These are different superlatives—span and total bridge—and remain attributed
to the sources that make them.

## Stations and interchange

Nine stations carry codes K01 to K09.[^ntmc-stations] Five are elevated—K02
and K06 through K09—and four are at grade—K01 and K03 through K05—according
to the route description and DORTS's K02 station record.[^dorts-route][^dorts-k02]
At K09, riders may board from either side platform before transferring to the
Circular Line.[^dorts-operating][^ntmc-fares]

K04's full official name is 耕莘安康院區, Cardinal Tien Hospital Ankang Branch.
New Taipei's station-naming panel settled on that form in December 2017, and it
appears consistently in NTMC's station page, its full station list and the TDX
station record.[^ltn-naming-2017][^ntmc-k04][^ntmc-stations][^tdx]

![The canopied platform at Cardinal Tien Hospital Ankang Branch station, overhead wire and open track running beside it](/images/ankeng-lrt/station-800.webp "K04 Cardinal Tien Hospital Ankang Branch station. — S8321414, CC BY-SA 4.0, Wikimedia Commons")

## Route-length records

Three figures circulate for this line's length, and they are not simple
duplicates of each other.

| Figure | What it measures | Source |
| --- | --- | --- |
| **7.5 km** | NTMC's own published length, matching TDX's `RouteLength` field for route K-1 exactly | NTMC[^ntmc-opening], TDX[^tdx] |
| 7.1 km | TDX's own station-to-station chainage, K01 to K09 | TDX `CumulativeDistance`[^tdx] |
| 7.67 km | zh.wikipedia's total route length | zh.wikipedia[^zh-wikipedia] |

The three published length figures use incompatible labels. TDX gives 7.5 km
as `RouteLength` but 7.1 km as the cumulative station-to-station distance at
K09.[^tdx] Chinese Wikipedia labels 7.67 km as total route length and 7.5 km
as operating length, while describing the route as beginning at Ankeng Depot
rather than K01.[^zh-wikipedia] DORTS independently publishes “about 7.5 km”
for the line but does not define its measurement boundary.[^dorts-route]

Chinese Wikipedia also divides 7.5 km into 2.8 km at grade, 4.3 km elevated
and 0.4 km underground including a portal.[^zh-wikipedia] DORTS, by contrast,
describes the passenger system simply as elevated and at grade, while placing
Shuang'an Tunnel between the depot and K01.[^dorts-route][^dorts-tunnel] The
sources therefore do not establish whether the 0.4 km is counted within the
K01–K09 passenger route or on its depot connection.

## Rolling stock

Taiwan Rolling Stock Company built the fleet with Germany's Voith Engineering
Services.[^ntmc-fleet] NTMC's fleet page groups the Danhai and Ankeng orders
together: thirty trains of the design were built, fifteen allocated to each
line.[^ntmc-fleet] Each five-car, fully low-floor train has a stated capacity
of 265 passengers—62 seated and 203 standing—and a maximum speed of 70 km/h
under overhead wire or 50 km/h on an unwired section.[^ntmc-fleet]

![The empty interior of an Ankeng LRT tram, longitudinal seats and a centre grab pole running the length of the car](/images/ankeng-lrt/interior-800.webp "An Ankeng LRT tram's interior. — Wctaiwan, CC BY 4.0, Wikimedia Commons")

The gold livery, 光耀金, was selected by a public vote.[^ntmc-fleet] Chinese
Wikipedia records the other 2018 ballot options as red-gold, purple and green,
but the NTMC fleet page confirms only the winning colour.[^zh-wikipedia][^ntmc-fleet]

## Depot

Ankeng Depot sits on the hillside beyond K01 and connects to the passenger
line through Shuang'an Tunnel.[^dorts-tunnel][^dorts-depot] DORTS divides its
rail facilities into a nine-track stabling yard and a five-track maintenance
shop, with the latter used for inspection, testing, maintenance and cleaning;
the administration building houses train control, dispatch and staff-training
functions.[^dorts-depot]

The depot's boarding platform carried two weekday morning passenger departures
during a trial from July through December 2024.[^dorts-depot-trial] The 06:28
and 07:16 trains ran toward K09, used a portable fare reader, and charged as if
the rider had boarded at K01.[^dorts-depot-trial] New Taipei said the trial was
an input to evaluating whether the platform should be proposed for conversion
to a normal station.[^dorts-depot-trial]

## Operations

Two service patterns run the line. The full-line service, K01 to K09, takes
about 21 minutes; a short working, K06 to K09, takes about 9
minutes[^dorts-operating][^tdx]. Baseline headways were about 7.5 minutes
peak on the overlapping K06–K09 section and 10–15 minutes peak on the
non-overlapping K01–K05 section, both about 15 minutes off
peak[^dorts-operating].

By February 2024
the line had carried 2 million cumulative passengers, averaging 5,600 a day,
with growth concentrated on the non-short-working stretch between K05
Jingwen University of Science and Technology and K01
Shuangcheng[^ntmc-anniversary]. From 26 February 2024 the peak short
workings became full-line services: morning-peak headway tightened to 6–8
minutes, evening-peak to 8–10 minutes[^ntmc-anniversary]. Off-peak sections were left
unchanged.[^ntmc-anniversary]

## Fares

Fares are stepped by distance, matching Danhai LRT: NT$20 base, NT$25
maximum[^ntmc-fares]. A 常客回饋金 (frequent-rider) rebate returns NT$50 for
every NT$200 accumulated on an e-ticket, stated in NTMC's own Ankeng-specific
announcement rather than only a general New Taipei light-rail
scheme[^ntmc-opening].

The line is covered by the TPASS 基北北桃1200 monthly pass: MOTC's programme
table lists light rail among the covered modes across the four participating
municipalities.[^motc-tpass-table] The published sales locations conflict.
MOTC's 2022 sales-point table
names **K09 Shisizhang** directly[^motc-tpass-table], but NTMC's own current
page listing sales locations for the pass names only Circular Line stations
and two Danhai LRT stations — no Ankeng LRT station appears on
it.[^ntmc-tpass] The sources establish different lists at different publication
dates, not whether K09 currently sells the pass.

## Incidents and ridership

The line was affected by the 3 April 2024 Hualien earthquake: immediately
afterward, K09–K06 ran single-track bidirectional and K06–K01 ran a partial
service, before the whole line returned to normal running at 16:30 the same
day, at a 15-minute headway[^ntmc-earthquake][^ntmc-earthquake-resume].

NTMC's full-year release says the line carried more than 2.03 million journeys
in 2025.[^ntmc-ridership-2025] The same release gives more than 6.01 million
for Danhai LRT and 22.04 million for the Circular Line, within a New Taipei
Metro total exceeding 30.09 million journeys.[^ntmc-ridership-2025]

## Naming and place

Ankeng's old name was 暗坑 (Hokkien Àm-kheⁿ), and the district was renamed in
1801 by Lin Deng-xuan, grandson of the pioneer settler Lin Tian-cheng,
because the old name meant “dark valley” and was considered
inauspicious.[^dorts-placename] The modern line name therefore preserves the
district's later name rather than inventing a separate railway identity.

See also: [Public art in the Taipei-region rail network](/rail/history/public-art/) and [Metro incidents and service disruptions](/rail/history/incidents/).
