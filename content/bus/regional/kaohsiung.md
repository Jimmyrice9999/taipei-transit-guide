---
title: Kaohsiung regional buses
description: A dated TDX snapshot of Kaohsiung city-bus routes, operators and ordered stops, with the municipal fare, low-demand taxi-bus and accessibility boundaries kept explicit.
summary: Kaohsiung's TDX snapshot exposes 316 route records, 617 direction runs, 19,191 ordered stops and 30 operator records; the municipal route index separately reports 197 routes.
updated: 2026-08-28
facts:
  - label: TDX route entries
    value: "316"
    source: kaohsiung-route-tdx
  - label: Unique TDX route names
    value: "316"
    source: kaohsiung-route-tdx
  - label: Ordered direction records
    value: "617"
    source: kaohsiung-stop-tdx
  - label: Ordered stop records
    value: "19,191"
    source: kaohsiung-stop-tdx
  - label: TDX operator records
    value: "30"
    source: kaohsiung-operator-tdx
  - label: Municipal route-index count
    value: "197"
    source: kaohsiung-route-index
  - label: Route-level ridership snapshot
    value: TBC
  - label: Historical route-change series
    value: TBC
  - label: Route-level timetable history
    value: TBC
specs:
  - label: Snapshot retrieved
    value: 2026-08-25
    source: kaohsiung-route-tdx
  - label: TDX response update time
    value: 2026-08-25 20:27:59 +08:00
    source: kaohsiung-route-tdx
  - label: Route data format
    value: TDX JSON with route and sub-route records
    source: kaohsiung-route-dataset
  - label: Stop data format
    value: TDX JSON with ordered stops and coordinates
    source: kaohsiung-stop-dataset
  - label: Basic section fare
    value: NT$15 full / NT$10 student card / NT$8 half
    source: kaohsiung-fare-pdf
sources:
  - id: kaohsiung-route-dataset
    title: Kaohsiung bus route and stop dataset
    titleOriginal: 高雄市公車各路線去回程公車站點資料
    publisher: Kaohsiung City Government Transportation Bureau (高雄市政府交通局)
    url: https://data.nat.gov.tw/dataset/43822
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The official catalogue describes route-stop data, coordinates, direction and stop order, and identifies the municipal XML endpoint; the committed snapshot uses the current TDX equivalent.
  - id: kaohsiung-route-index
    title: Kaohsiung bus route overview by route
    titleOriginal: 公車路線總覽(依路線別)
    publisher: Kaohsiung City Government Transportation Bureau (高雄市政府交通局)
    url: https://www.tbkc.gov.tw/Service/PublicTransport/NewBusRoute
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The full municipal route index displayed 197 routes when fetched; its count is retained as a separate publication scope from TDX's 316 route records.
  - id: kaohsiung-operator-index
    title: Kaohsiung bus route overview by operator
    titleOriginal: 公車路線總覽(依業者別)
    publisher: Kaohsiung City Government Transportation Bureau (高雄市政府交通局)
    url: https://www.tbkc.gov.tw/Service/PublicTransport/BusRouterTrader
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The full operator index displayed 197 routes and operator-grouped route lists, including separate taxi-fleet and reservation-labelled entries.
  - id: kaohsiung-route-tdx
    title: Kaohsiung city-bus route response
    titleOriginal: 高雄市公車路線資料（TDX Route）
    publisher: Taiwan Ministry of Transportation and Communications TDX (交通部運輸資料流通服務)
    url: https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/Kaohsiung?$format=JSON
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The full live response supplied 316 route records, route names, terminal labels, operator objects, sub-routes, route-map URLs, version IDs and source update times.
  - id: kaohsiung-stop-dataset
    title: Kaohsiung bus stop-order dataset
    titleOriginal: 高雄市公車各路線去回程公車站點資料
    publisher: Kaohsiung City Government Transportation Bureau (高雄市政府交通局)
    url: https://data.nat.gov.tw/dataset/43822
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The official catalogue defines the route ID, stop ID, longitude, latitude, direction and stop-order fields used by the structured stop layer.
  - id: kaohsiung-stop-tdx
    title: Kaohsiung TDX ordered bus stops by route
    titleOriginal: 高雄市公車路線站序資料（TDX StopOfRoute）
    publisher: Taiwan Ministry of Transportation and Communications TDX (交通部運輸資料流通服務)
    url: https://tdx.transportdata.tw/api/basic/v2/Bus/StopOfRoute/City/Kaohsiung?$format=JSON
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The full live response supplied 617 direction-level records and 19,191 ordered stop objects with names, sequence values, boarding flags and coordinates.
  - id: kaohsiung-operator-tdx
    title: Kaohsiung bus operators
    titleOriginal: 高雄市公車業者資料（TDX Operator）
    publisher: Taiwan Ministry of Transportation and Communications TDX (交通部運輸資料流通服務)
    url: https://tdx.transportdata.tw/api/basic/v2/Bus/Operator/City/Kaohsiung?$format=JSON
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The full live response supplied 30 operator records with names, contacts, websites and update times; not every operator record is attached to a route in the route response.
  - id: kaohsiung-fares
    title: Kaohsiung bus fare information
    titleOriginal: 公車票價資訊(2026年7月1日起調整)
    publisher: Kaohsiung City Government Transportation Bureau (高雄市政府交通局)
    url: https://www.tbkc.gov.tw/Service/PublicTransport/gogo123?id=5599cc66-4ca8-4d82-9532-9f123a361b59
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The full fare page states the section-fare scope, card and cash rules, concession-card boundary and the 15/10/8 basic fare table; its heading says 1 July 2026 while an internal heading says 1 March 2026.
  - id: kaohsiung-fare-pdf
    title: Kaohsiung section-fare explanation, 1 July 2026 edition
    titleOriginal: 高雄市市區公車段次票價說明
    publisher: Kaohsiung City Government Transportation Bureau (高雄市政府交通局)
    url: https://www.tbkc.gov.tw/FileOutput/Page/%E9%AB%98%E9%9B%84%E5%B8%82%E5%B8%82%E5%8D%80%E5%85%AC%E8%BB%8A%E6%AE%B5%E6%AC%A1%E7%A5%A8%E5%83%B9%E8%AA%AA%E6%98%8E115.7.1%E7%89%88.pdf?id=c8b30f33-c69f-4e1a-969c-9acf1a620810
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The full two-page official PDF states implementation from 1 July 2026 and gives cash, electronic-payment, student, half-fare and social-card rules.
  - id: kaohsiung-fare-qa
    title: Kaohsiung mileage-section bus fare Q&A
    titleOriginal: 高雄市市區公車里程段次收費Q&A
    publisher: Kaohsiung City Government Transportation Bureau (高雄市政府交通局)
    url: https://www.tbkc.gov.tw/Service/PublicTransport/gogo123?id=cb7f57d2-317a-4172-8a92-d01491de5057
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The full Q&A explains the 8-kilometre one/two-section boundary, card tap-on/tap-off lock fee, mileage-route cap, MenGo and TPASS-related products.
  - id: kaohsiung-yellow
    title: Kaohsiung 公車式小黃 service plan
    titleOriginal: 公車式小黃服務計畫簡介
    publisher: Kaohsiung City Government Transportation Bureau (高雄市政府交通局)
    url: https://www.tbkc.gov.tw/Service/PublicTransport/Taxis?id=db7194a9-88c3-4277-9343-6e080d7493e8
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The full page describes the taxi-bus rationale, development from 2014, fare treatment from 2019 and the current fixed-route lists for 中華大車隊 and 福倫車隊.
  - id: kaohsiung-accessibility
    title: Kaohsiung public-transport accessibility service index
    titleOriginal: 無障礙服務
    publisher: Kaohsiung City Government Transportation Bureau (高雄市政府交通局)
    url: https://www.tbkc.gov.tw/Service/PublicTransport/Accessibility
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The full page lists a dated low-floor-bus route and reservation information file, plus separate rehabilitation-bus and facility entries; the linked low-floor PDF itself failed fetch and is not expanded here.
  - id: kaohsiung-ridership
    title: Kaohsiung MRT feeder-bus operations
    titleOriginal: 高雄市捷運接駁公車營運情形
    publisher: Kaohsiung City Government Budget Office (高雄市政府主計處)
    url: https://data.gov.tw/dataset/159665
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The full catalogue lists annual fields including route mileage, vehicles, trips, passenger count, passenger-kilometres and revenue; its linked JSON and CSV resources failed direct fetch, so no values are asserted.
  - id: zh-ksbus
    title: Kaohsiung Bus Co., Ltd.
    titleOriginal: 高雄客運
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/wiki/高雄客運
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: Traces to 高旗自動車株式會社 (Japanese era, 1941 by this article's account, not independently confirmed on the operator's own primary page). Names parent 三地集團 (Santi Group) and subsidiaries 府城客運, 普悠瑪客運, 嘉義客運 (2019) and 苗栗客運 (2024).
  - id: ksbus-about
    title: Kaohsiung Bus — company history
    titleOriginal: 高雄客運-歷史沿革
    publisher: 高雄汽車客運股份有限公司
    url: https://ksbus.com.tw/about.asp?id=2
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "The operator's own page (fetched without the www. subdomain, which fails a certificate check). States eleven business stations by name, including one at Gangshan (岡山) — direct evidence against a separate \"岡山客運\" company — and 63 maintenance staff. Does not state an explicit founding year in the text this site could extract."
  - id: mirror-santi
    title: Quietly taking control of Guai Guai and Nanren Lake — Kaohsiung's land-consolidation magnate revealed
    titleOriginal: 低調入主乖乖南仁湖 高雄百億土地重劃大王揭祕
    publisher: 鏡週刊 (Mirror Media)
    url: https://www.mirrormedia.mg/story/20210705fin005
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: Investigative feature naming 高雄客運 as 三地集團's first acquisition/turnaround target roughly five years before the 2021-07-05 article (so approximately 2016, not exact), quoting group CEO 鍾育霖.
  - id: zh-gangdubus
    title: Gangdu Bus
    titleOriginal: 港都客運
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/wiki/港都客運
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: "Formed 1 January 2014 privatising 高雄市公共汽車管理處 (predecessor operating from 1937 under Japanese rule). Ownership roughly 42% Kaohsiung City Government, 58% former public-bus-office employees. The operator's own site (gdbus.com.tw) could not be fetched — a TLS configuration error — so every claim here rests on this secondary source."
  - id: takao-pictorial
    title: Kaohsiung's new good-life progress, No. 05
    titleOriginal: 高雄新好生活進行式 No.05
    publisher: Kaohsiung City Government Information Bureau (高雄市政府新聞局), 高雄畫刊
    url: https://takao.kcg.gov.tw/article/760
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "Published 2026-05-06. States a citywide figure of 195 electric low-floor buses out of roughly 1,000+ total city buses (19%), and profiles a Foxtron \"Model T\" bus in service on Route 24 with a stated 2-hour 80% charge time."
  - id: motc168-ksev-2018
    title: Green electric bus era arrives — Kaohsiung buses roll out further and further
    titleOriginal: 綠色電動巴士時代來臨 高雄公車愈開愈遠
    publisher: MOTC Traffic Safety Portal (交通部168交通安全入口網)
    url: https://168.motc.gov.tw/theme/fullsized/post/1906121103392
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: "Dated 2018-04-10. States a citywide total of 77 electric buses across seven private operators: 港都客運 50, 南台灣客運 14, 高雄客運 11, 漢程客運 2 — a much smaller figure than the 2022 195-bus count, from an earlier date."
  - id: zh-pingtungbus
    title: Pingtung Bus
    titleOriginal: 屏東客運
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/wiki/屏東客運
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: Founded 1931, current name from 1947. Runs routes 9117, 9127, 9188, 9189 jointly with 高雄客運 into Kaohsiung, with a Kaohsiung station established 2001.
  - id: kaohsiung-statistics-journal
    title: Kaohsiung transportation statistical reports index
    titleOriginal: 統計刊物專區
    publisher: Kaohsiung City Government Transportation Bureau (高雄市政府交通局)
    url: https://www.tbkc.gov.tw/AboutUs/Accountant/Journal
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The full index lists transportation statistical reports for 104 through 113, but the linked 113 report URL returned 404 when fetched directly here; no table value is copied from a search result.
---

Kaohsiung's regional bus layer is a dated structural snapshot, not a live departure board. The official municipal route index is the first boundary: its full route list displayed 197 routes when fetched on 25 August 2026.[^kaohsiung-route-index] The separate operator index displayed the same total while grouping route labels under operators, including taxi-fleet entries and labels marked for reservation service.[^kaohsiung-operator-index] Those pages are useful for the city's public-facing route taxonomy, but they do not expose the same record schema as TDX.[^kaohsiung-route-index][^kaohsiung-operator-index]

## Current structured coverage

The live TDX Route response contained 316 route records, each with a route UID and ID, a Traditional Chinese and English name, terminal labels, operator objects, sub-route records, map URL where supplied, version ID and source update time.[^kaohsiung-route-tdx] The response had 316 distinct route-name values in this retrieval, so the page does not silently deduplicate branches or labels that TDX publishes as separate route records.[^kaohsiung-route-tdx] Its route data is joined to the full StopOfRoute response by the exact route UID.[^kaohsiung-route-tdx][^kaohsiung-stop-tdx]

The StopOfRoute response supplied 617 direction-level records and 19,191 ordered stop objects.[^kaohsiung-stop-tdx] Each retained stop has the source stop UID and ID, name, sequence, boarding flag where present, and latitude/longitude values from the TDX object.[^kaohsiung-stop-tdx] This makes the committed JSON useful for stop-level joins and static route inspection, while the source `UpdateTime` remains the date of the underlying record rather than a promise about the next vehicle.[^kaohsiung-stop-tdx]

The operator response supplied 30 operator records with names, phone numbers, URLs, provider IDs, operator numbers and update times.[^kaohsiung-operator-tdx] That is a count of TDX operator records, not a count of companies currently running a passenger route: the route response attaches operators to its own route records, and the municipal index uses a different grouping and publication scope.[^kaohsiung-operator-tdx][^kaohsiung-operator-index] The official catalogue also describes route-stop data with route IDs, stop IDs, coordinates, direction and order fields, and identifies the municipal static-data service as its source boundary.[^kaohsiung-route-dataset]

## Fares and service categories

The current official fare PDF states that the section-fare schedule applies from 1 July 2026 to section-priced city buses, including medical buses, 公車式小黃 and 幸福巴士.[^kaohsiung-fare-pdf] Its basic table gives NT$15 cash or electronic full fare, NT$10 for the specified student-card electronic fare, and NT$8 half fare; cash payment is exact change.[^kaohsiung-fare-pdf] The same document requires electronic passengers to tap or scan on and off, and states that an incomplete transaction locks the electronic ticket until a later NT$15 unlock charge is paid.[^kaohsiung-fare-pdf]

The bureau's full Q&A describes a one-section fare through 8 kilometres and a two-section fare above 8 kilometres, with the fare depending on passenger category.[^kaohsiung-fare-qa] It also documents a 60-dollar maximum self-pay rule for mileage-priced highway and JOY routes, separate social-card point rules, MenGo products and the 399/999 commuter products.[^kaohsiung-fare-qa] The fare page's title says “from 1 July 2026”, while an internal heading on the same fetched page says “from 1 March 2026”; both are retained as a page-level date conflict rather than silently corrected.[^kaohsiung-fares][^kaohsiung-fare-pdf]

Kaohsiung's 公車式小黃 plan explains that taxi vehicles substitute for bus service where low demand or geography makes a conventional route inefficient.[^kaohsiung-yellow] The full plan records a 2014 trial, expansion from 2015, night service from 2017, wider rural deployment from 2019 and further route additions in 2021.[^kaohsiung-yellow] It lists fixed routes operated by 中華大車隊 and 福倫車隊, while the municipal operator index also includes reservation-labelled entries; those labels should not be interpreted as ordinary fixed-timetable stops without reading the linked operator schedule.[^kaohsiung-yellow][^kaohsiung-operator-index]

## Accessibility and ridership boundary

The Transportation Bureau maintains a separate accessibility index listing a dated low-floor-bus route and reservation-information file, a rehabilitation-bus service and facility information.[^kaohsiung-accessibility] The linked low-floor-bus PDF did not return successfully in the full fetch, so this regional page does not invent a route-level accessible-bus list or claim that every TDX route is step-free.[^kaohsiung-accessibility]

The official open-data catalogue for Kaohsiung MRT feeder-bus operations lists annual route mileage, vehicles, trips, operated kilometres, passenger count, passenger-kilometres and revenue fields.[^kaohsiung-ridership] Its linked JSON and CSV resources both failed direct fetch in this environment, so current passenger totals and a historical ridership series remain TBC.[^kaohsiung-ridership] The bureau's statistical-publications index confirms that transportation reports exist for Minguo 104 through 113, but the 113 report link returned 404 in the full fetch; no table value is substituted from a search result.[^kaohsiung-statistics-journal]

## Operators and ownership

**Two operators dominate the network by history rather than by TDX
record count.** 高雄客運 (Kaohsiung Bus) traces to a Japanese-era
predecessor, 高旗自動車株式會社[^zh-ksbus] — a date this site could not
independently confirm on the operator's own history page, which states
eleven named business stations (including one at **岡山**, Gangshan) and
63 maintenance staff without giving an explicit founding year in the text
fetched[^ksbus-about]. It has been owned by **三地集團** (Santi Group)
since roughly 2016 (an approximate date — the source gives only "five
years before" a 2021 article), whose other holdings include 府城客運
(Tainan), 普悠瑪客運 (Taitung), and, more recently, 嘉義客運 (2019) and
苗栗客運 (2024)[^zh-ksbus] [^mirror-santi]. **港都客運** (Gangdu Bus) is a
different company: formed 1 January 2014 by privatising the former
municipal operator, 高雄市公共汽車管理處, which itself traces to a business
operating from 1937 under Japanese rule[^zh-gangdubus]. Ownership splits
roughly 42% Kaohsiung City Government and 58% former public-bus-office
employees[^zh-gangdubus] — the same city-minority/employee-majority shape
as Taipei's 大都會客運, formed the same way a decade later.

**A name-collision check, run directly against this evidence**: no
operator called 大都會客運 or 岡山客運 exists in Kaohsiung. 高雄客運's own page
names a Gangshan (岡山) service **station**, not a separate company[^ksbus-about],
and the only 大都會客運 this site has found anywhere is
[Taipei's](/bus/operators/metropolitanbus-h3iwov/) — see the [operator
ratings page](/bus/network/operator-ratings/) for the fuller account.
**屏東客運** (Pingtung Bus), founded 1931, also serves Kaohsiung: routes
9117, 9127, 9188 and 9189 run jointly with 高雄客運, with a dedicated
Kaohsiung station since 2001[^zh-pingtungbus].

## Electric buses — three citywide counts, three different dates

No single reconciled figure exists; this site publishes all three rather
than picking one. **10 April 2018**: 77 electric buses across seven
private operators — 港都客運 50, 南台灣客運 14, 高雄客運 11, 漢程客運
2[^motc168-ksev-2018]. **6 May 2022**: a city government publication
states 195 electric low-floor buses out of roughly 1,000+ total city
buses, 19% — described as the first among Taiwan's major
cities[^takao-pictorial]. **A higher, unverified figure**: search results
describe up to 130 electric buses at 港都客運 alone, called "全國第一"
(first nationally) by a business magazine — this site could not fetch
that article (HTTP 403 on every attempt, including an AMP variant) and
does not publish the figure as fact. The same 2022 publication profiles a
Foxtron [Model T](/bus/models/model-t-electric/) bus in service on Route
24, with a stated 80%-charge time of two hours, though it does not name
which operator runs that route[^takao-pictorial].

## Conflicts and gaps

The 197-route municipal index and the 316-record TDX snapshot are both published values, but the fetched sources do not define a common counting unit: the index is a public route list while TDX includes separately identified route records and branch/service variants.[^kaohsiung-route-index][^kaohsiung-route-tdx] The page therefore publishes both and leaves the reconciliation TBC. A historical route-change series, current route-level timetable history, fleet allocation, depot assignment, reliability, route-level ridership and a complete accessibility inventory also remain TBC because the fetched primary pages and structured responses do not supply those fields.[^kaohsiung-route-tdx][^kaohsiung-stop-tdx][^kaohsiung-accessibility][^kaohsiung-ridership]
