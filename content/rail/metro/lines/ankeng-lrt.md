---
title: Ankeng LRT
summary: The second New Taipei light rail line — a valley feeder into the Xindian corridor, with a button you have to press to get the doors to open.
order: 9
line: K
aliases:
  - 安坑輕軌
updated: 2026-08-12
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
    accessed: 2026-08-12
    kind: primary
    lang: zh-Hant
    note: "The builder's own route page: 全線約7.5公里, 9座車站, and a structure description of an at-grade section along Anyi Road transitioning to elevated (以高架方式沿安和路北行) from around K06. Combined with DORTS's own public-art page for K02 (below), this supports 5 elevated (K02, K06–K09) and 4 at-grade (K01, K03–K05) stations, though no single DORTS table listing all nine by structure was found."
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
    note: "Confirms the depot boarding-platform trial's final extension to 31 December 2024, with roughly 50 riders a day across the two peak trips, run as an evaluation of whether the platform should become a full station: 長期持續觀察在地民眾搭乘輕軌成效. No source found states what happened after that date."
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
  - id: udn-ridership-2025
    title: "Ankeng LRT reaches only 65% of ridership target; New Taipei Metro: network-wide achievement 93.5%"
    titleOriginal: 安坑輕軌運量僅達標65% 新北捷運：整體路網達成率93.5%
    publisher: 聯合新聞網 (UDN)
    url: https://udn.com/news/story/7323/9655456
    accessed: 2026-08-12
    kind: secondary
    lang: zh-Hant
    note: "Reports NTMC's own 2025 figures: Ankeng LRT ridership at 65.38% of budgeted target, revenue at 70.02%, while all three New Taipei light-rail/circular lines together reached 93.5% of target, the company's best combined year yet. Not independently checked against an NTMC primary release, which was not found."
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

The Ankeng light rail threads a valley of hillside housing into the network
at Shisizhang on the [Circular Line](/rail/metro/lines/circular-line/), doing for
the Ankeng district what the [Danhai LRT](/rail/metro/lines/danhai-lrt/) does for
the Tamsui new town: feeding the heavy network rather than reaching the core
itself. It opened on 10 February 2023, is run by
[New Taipei Metro](/rail/operators/ntmc/), and its most-repeated visitor
fact is also true: the doors do not open by themselves — you press a button,
at every stop, on and off[^dorts-operating].

![The cable-stayed Anxin Bridge, near the Ankeng LRT's route into the valley](/images/ankeng-lrt/guideway-800.webp "Anxin Bridge, near the Ankeng LRT's route. — Tze Chiang Hao, CC BY 4.0, Wikimedia Commons")

## Route and stations

Nine stations, K01 to K09, run from Ankeng Depot through the Ankeng valley to
Shisizhang, where K09 connects to the Circular Line[^ntmc-stations][^ntmc-fares].
Five stations are elevated — K02, and K06 through K09 — and four run at
grade — K01, K03, K04 and K05[^dorts-route][^dorts-k02]. The at-grade
stretch follows Anyi Road out of the valley; the line climbs onto viaduct
around K06 Ankang and stays elevated along Anhe Road to the Circular Line
interchange[^dorts-route].

**K04's station name has two forms in circulation, and only one is
official.** New Taipei's own station-naming panel settled on 耕莘安康院區
(Cardinal Tien Hospital Ankang Branch) in December 2017, years before the
line opened[^ltn-naming-2017], and that is the name on NTMC's own station
page[^ntmc-k04], on the operator's full station list[^ntmc-stations], and in
Taiwan MOTC's TDX station record[^tdx]. The shorter "耕莘醫院" that appears in
some secondary round-ups names the same hospital group's main site, not the
branch campus the station actually stands beside — no primary source found
here uses it as the station's name.

![The canopied platform at Cardinal Tien Hospital Ankang Branch station, overhead wire and open track running beside it](/images/ankeng-lrt/station-800.webp "K04 Cardinal Tien Hospital Ankang Branch station. — S8321414, CC BY-SA 4.0, Wikimedia Commons")

At K09 Shisizhang, both side platforms can be boarded — worth knowing,
because it is not the way most interchange stations on this network
work[^dorts-operating].

## How long the line is

Three figures circulate for this line's length, and they are not simple
duplicates of each other.

| Figure | What it measures | Source |
| --- | --- | --- |
| **7.5 km** | NTMC's own published length, matching TDX's `RouteLength` field for route K-1 exactly | NTMC[^ntmc-opening], TDX[^tdx] |
| 7.1 km | TDX's own station-to-station chainage, K01 to K09 | TDX `CumulativeDistance`[^tdx] |
| 7.67 km | zh.wikipedia's total route length | zh.wikipedia[^zh-wikipedia] |

zh.wikipedia's own infobox separates this 7.67 km 路線長度 from a 營運長度
(operating length) of 7.5 km — the same figure NTMC and TDX publish — and its
route description explains the gap: the line is described there as running
「起自安坑機廠」, starting at Ankeng Depot itself, not at K01[^zh-wikipedia].
That is the same distinction this site draws on the
[Wenhu Line](/rail/metro/lines/wenhu-line/) between an operating length and a
longer total that includes a depot lead. No source found here states the
arithmetic outright, and this site's own reading of it is offered as that —
a reading, not a settled fact. About 0.17 km of the 7.67 km figure is not
accounted for by any source found.

## Underground section — an unresolved question

Neither DORTS's own route page nor its operating-pattern page for this line
mentions an underground section on the K01–K09 passenger route: both
describe the line as built elevated and at grade,
「採用高架、平面混合型式建置」[^dorts-route][^dorts-operating]. zh.wikipedia's
structure breakdown, by contrast, gives 2.8 km at grade, 4.3 km elevated and
0.4 km underground "including the portal" (含出土) — summing to the 7.5 km
operating figure, which would put that 0.4 km inside the passenger
route[^zh-wikipedia].

A tunnel genuinely exists on the alignment: 雙安隧道 (Shuang'an Tunnel),
described by DORTS as Taiwan's first road-and-light-rail co-built tunnel,
with road bores either side of a central light rail bore, and an unusual
at-grade track crossover inside it[^dorts-tunnel]. DORTS's own account places it **between
K01 station and Ankeng Depot** — on the depot lead, not between two
passenger stations[^dorts-tunnel]. That placement sits awkwardly next to
zh.wikipedia's breakdown, which counts the underground section inside the
operating total rather than outside it. This site cannot settle which
reading is right and publishes both rather than picking one. The tunnel's
own length was not found in any source searched.

## Service pattern

Two service patterns run the line. The full-line service, K01 to K09, takes
about 21 minutes; a short working, K06 to K09, takes about 9
minutes[^dorts-operating][^tdx]. Baseline headways were about 7.5 minutes
peak on the overlapping K06–K09 section and 10–15 minutes peak on the
non-overlapping K01–K05 section, both about 15 minutes off
peak[^dorts-operating].

**A year in, NTMC changed the pattern on ridership data.** By February 2024
the line had carried 2 million cumulative passengers, averaging 5,600 a day,
with growth concentrated on the non-short-working stretch between K05
Jingwen University of Science and Technology and K01
Shuangcheng[^ntmc-anniversary]. From 26 February 2024 the peak short
workings became full-line services: morning-peak headway tightened to 6–8
minutes, evening-peak to 8–10 minutes[^ntmc-anniversary]. Off-peak sections were left
unchanged, to keep pace with Circular Line transfer patterns rather than the
line's own demand[^ntmc-anniversary].

## The depot platform trial

From 1 July to 31 December 2024, Ankeng Depot's own boarding platform opened
to passengers on weekday mornings at 06:28 and 07:16, explicitly as a trial
to evaluate whether it should become a permanent station[^zh-wikipedia]. The trial was
extended twice from a narrower initial window, citing strong uptake each
time — around 50 riders a day across the two trips in its final eight
weeks — and fares on those extra services were calculated as if boarding
from K01, so the depot-to-K01 leg itself was not charged[^dorts-depot-trial][^zh-wikipedia].
**What happened after 31 December 2024 is TBC** — no source found here says
whether the trial lapsed, continued informally, or the platform became a
numbered station; settling it needs a later DORTS or NTMC announcement that
this search did not turn up.

## Rolling stock

Trains are built by Taiwan Rolling Stock Company with Germany's Voith
Engineering Services — the same manufacturing partnership NTMC's own page
describes for both of New Taipei's light rail lines together, rather than a
detail assumed to carry over from Danhai's fleet[^ntmc-fleet]. Thirty trains
were built to this design in total, 15 for Danhai and 15 for
Ankeng[^ntmc-fleet]. Each Ankeng train has 5 cars and carries 265 passengers,
62 seated and 203 standing, running up to 70 km/h under overhead wire and
50 km/h on wire-free sections[^ntmc-fleet].

![The empty interior of an Ankeng LRT tram, longitudinal seats and a centre grab pole running the length of the car](/images/ankeng-lrt/interior-800.webp "An Ankeng LRT tram's interior. — Wctaiwan, CC BY 4.0, Wikimedia Commons")

The livery, 光耀金 (Radiant Gold), was chosen by public vote — confirmed on
NTMC's own rolling-stock page, though that page does not itself list the
options that lost[^ntmc-fleet]. zh.wikipedia gives a 2018 shortlist of four —
光耀金, 祥紅金 (Auspicious Red-Gold), 高雅紫 (Elegant Purple) and 青翠綠 (Verdant
Green) — treated here as a lead rather than independently
confirmed[^zh-wikipedia].

## 安心橋 An-Xin Bridge

Between K08 Xinhe Elementary School and K09 Shisizhang, the line crosses the
Xindian River on 安心橋 (An-Xin Bridge): a 502 m, three-span continuous
asymmetric cable-stayed bridge on a 130 m pylon, spanning a 400 m-wide reach
of the river[^dorts-anxin-bridge]. DORTS calls it the line's hardest single
piece of engineering, not a length record in itself[^dorts-anxin-bridge].

The superlative claim made for the bridge depends on which source is read.
DORTS's own bridge-comparison material claims the longest **span** among
Taiwan's rail bridges — 225 m, against 120.7 m for Danhai's Blue Sea Bridge
and about 96 m for Kaohsiung's Love River Bridge[^dorts-bridge-comparison].
CNA separately quotes a named Sinyi Construction Development project
director calling it, more broadly, Taiwan's longest rail bridge outright,
and gives a pylon weight of about 3,450 tonnes[^cna-anxin-bridge]. Both are
published here as what each source actually claims, not merged into one
figure.

## Fares

Fares are stepped by distance, matching Danhai LRT: NT$20 base, NT$25
maximum[^ntmc-fares]. A 常客回饋金 (frequent-rider) rebate returns NT$50 for
every NT$200 accumulated on an e-ticket, stated in NTMC's own Ankeng-specific
announcement rather than only a general New Taipei light-rail
scheme[^ntmc-opening].

The line is within the scope of the TPASS 基北北桃1200 monthly pass: MOTC's
own programme table lists light rail generally among the pass's covered
modes, in line with that pass's general coverage of rail, light rail and bus
services across the four municipalities[^motc-tpass-table]. **Where the pass
can actually be bought is a genuine conflict between two primary sources,
not just a secondary-versus-primary gap.** MOTC's own 2022 sales-point table
names **K09 Shisizhang** directly[^motc-tpass-table], but NTMC's own current
page listing sales locations for the pass names only Circular Line stations
and two Danhai LRT stations — no Ankeng LRT station appears on
it[^ntmc-tpass]. Both are published here rather than resolved either way; a
station that stopped selling passes after the 2022 launch and an NTMC page
that is simply incomplete are equally plausible explanations, and no source
found here settles which.

## Incidents and ridership since

The line was affected by the 3 April 2024 Hualien earthquake: immediately
afterward, K09–K06 ran single-track bidirectional and K06–K01 ran a partial
service, before the whole line returned to normal running at 16:30 the same
day, at a 15-minute headway[^ntmc-earthquake][^ntmc-earthquake-resume].

NTMC's reported 2025 figures put full-year ridership at about 2.03 million,
but only 65.38% of the company's own budgeted target for the
line — against 93.5% reached across all three of New Taipei's light-rail and
Circular Line services combined, the company's best year yet on that
combined measure[^udn-ridership-2025].

## Place and context

Ankeng's old name was 暗坑 (Hokkien Àm-kheⁿ), and the district was renamed in
1801 by Lin Deng-xuan, grandson of the pioneer settler Lin Tian-cheng,
because the old name — "dark valley" — sounded unpleasant, per DORTS's own
account of the choice of line name[^dorts-placename].

## Sources

Station names, codes, running order and coordinates come from **Taiwan
MOTC's TDX platform**, operator code `NTALRT` — government open data,
retrieved 12 August 2026[^tdx]. The strip map and geographic map on this page are
generated from it directly. Everything else is cited inline and listed
above. TDX does not publish station structure, headways or rolling-stock
detail; those come from NTMC's and DORTS's own publications where they
exist, and are marked secondary where they do not.

See also: [Public art in the Taipei-region rail network](/rail/history/public-art/) and [Metro incidents and service disruptions](/rail/history/incidents/).
