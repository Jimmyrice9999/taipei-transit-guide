---
title: Yilan regional buses
description: Yilan County's dated city-bus discovery layer, fare boundary, operator mix and transfer-station evidence, with tourist shuttles kept separate from ordinary city buses.
summary: A 7 September 2026 TDX snapshot of Yilan County bus records joined to current county fare guidance, operator labels, tourist-shuttle scope and official transfer-station access evidence.
updated: 2026-09-07
facts:
  - label: TDX route records
    value: "72"
    source: yilan-route-tdx
  - label: TDX supplied variants
    value: "187"
    source: yilan-route-tdx
  - label: Distinct operator labels in snapshot
    value: "8"
    source: yilan-route-tdx
  - label: City-bus cash fare shown by county page
    value: NT$20 full / NT$10 half
    source: yilan-local-transport
specs:
  - label: Structured snapshot retrieved
    value: 2026-09-07
    source: yilan-route-tdx
  - label: Electronic-ticket fare shown by county page
    value: NT$15 full / NT$10 student
    source: yilan-local-transport
  - label: Taiwan Tourist Shuttle routes separately displayed
    value: Green 11, Green 21, Green 18 and Green 19
    source: yilan-local-transport
  - label: Complete current timetable and operator fare matrix
    value: TBC
  - label: Published operator-evaluation scores
    value: TBC
sources:
  - id: yilan-route-tdx
    title: Yilan County city-bus route snapshot
    titleOriginal: 宜蘭縣公車路線資料（TDX Route/City/YilanCounty）
    publisher: Taiwan Ministry of Transportation and Communications TDX (交通部運輸資料流通服務平台)
    url: https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/YilanCounty?$format=JSON
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The dated national route pull contains 72 Route records and 187 supplied SubRoutes variants. The eight operator-label count is computed from the operator arrays in that snapshot; neither number is presented as a timeless unique-route or fleet total.
  - id: yilan-transport-department
    title: Yilan Transportation Department responsibilities
    titleOriginal: 業務職掌
    publisher: Yilan County Government Transportation Department (宜蘭縣政府交通處)
    url: https://trp.e-land.gov.tw/cp.aspx?n=15455
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full department page assigns the Public Transport Section route planning/adjustment, transfer-station construction and operation, and city-bus service-indicator evaluation and rewards. Its content shows an older 109-06-15 update while the footer shows 115-09-07; the date conflict is retained in the research record.
  - id: yilan-local-transport
    title: Yilan local transport
    titleOriginal: 區內交通
    publisher: Yilan County Government Tourism and Travel information site (宜蘭縣政府)
    url: https://travel.yilan.gov.tw/zh-tw/local-transport/
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full current page displays city-bus cash/electronic-ticket fares, payment instructions and four Taiwan Tourist Shuttle route descriptions; tourist shuttle is kept separate from ordinary city-bus discovery.
  - id: yilan-tourism-arrival
    title: How to reach Yilan
    titleOriginal: 如何到宜蘭
    publisher: Yilan County Government Tourism and Travel information site (宜蘭縣政府)
    url: https://travel.yilan.gov.tw/zh-tw/go-to-yilan/
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full page names Yilan, Luodong and Jiaoxi transfer stations as coach destinations and lists the principal operators/routes it chooses to explain to visitors; it is not used as a complete national coach inventory.
  - id: yilan-tra-transfer
    title: Yilan Taiwan Railways station transfer guide
    titleOriginal: 宜蘭車站交通轉乘指南
    publisher: Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewTransfer/7190
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full current station page lists a city-bus access point at Yilan Station and transfer buses at Yilan Transfer Station. It supports a published access chain, not a timed or guaranteed interchange.
---

The 7 September 2026 TDX city-scoped snapshot contains 72 Yilan County Route
records and 187 supplied `SubRoutes` variants.[^yilan-route-tdx] Those are
discovery-layer measurements, not a claim that Yilan has 187 permanent unique
routes. The route records preserve the source's local identity rather than
forcing every service into Taipei's colour taxonomy.[^yilan-route-tdx]

The snapshot contains eight distinct operator labels: Kuo-Kuang Bus, Kamalan
Bus, Capital Bus, Metropolitan Bus, Yilan County Government, Wujie Township
Office, Nan'ao Township Office and Su'ao Township Office.[^yilan-route-tdx]
This mix matters: county and township services sit beside established bus
companies in the same structured discovery layer, so an operator name alone is
not a safe proxy for route type or service frequency.[^yilan-route-tdx]

## County responsibilities and fare boundary

Yilan's Transportation Department assigns its Public Transport Section work on
city-bus route planning and adjustment, transfer-station construction and
operation, and city-bus service-indicator evaluation and rewards.[^yilan-transport-department]
The page contains two different update signals—an older content update and a
115-09-07 footer update—so this establishes the department's stated remit, not
a current evaluation score or a newly changed organisation chart.[^yilan-transport-department]

The county's current local-transport page displays a city-bus cash fare of
NT$20 full / NT$10 half, and electronic-ticket fares of NT$15 full / NT$10
student.[^yilan-local-transport] It also says that Yilan County senior and
disability cards and companion cards receive a NT$10 concession, while the
listed local cards and qualifying young children ride free; the page instructs
cash riders to prepare exact change and electronic-ticket users to tap when
boarding and alighting.[^yilan-local-transport] These are the page's displayed
county city-bus rules retrieved on 7 September 2026, not a universal Taiwan bus
fare claim.[^yilan-local-transport]

## Ordinary buses and tourist shuttles

The same official page separately presents four Taiwan Tourist Shuttle routes:
Green 11 Jiaoxi, Green 21 Dongshan River, Green 18 Zhuangwei Sand Dune and
Green 19 Northeast Coast.[^yilan-local-transport] They are retained as
scheduled tourist transport rather than silently merged into the 72-record
ordinary city-bus measurement.[^yilan-local-transport]

The county's arrival guide describes Yilan, Luodong and Jiaoxi transfer
stations as destinations for intercity coach services, and names selected
Kuo-Kuang, Kamalan and Capital routes for that visitor-facing explanation.[^yilan-tourism-arrival]
That page is a useful terminal and corridor index, not a complete current
coach-route or departure-frequency register.[^yilan-tourism-arrival]

## Transfer evidence and gaps

Taiwan Railways' current Yilan station transfer guide lists a city-bus access
point at Yilan Station and transfer buses at Yilan Transfer Station.[^yilan-tra-transfer]
This is published access-chain evidence; it does not establish a timed
rail-to-bus connection, a shared platform, or a guaranteed transfer.[^yilan-tra-transfer]

Current route-by-route timetable, operator-scoped fare, accessibility, vehicle,
reliability and evaluation-score matrices remain **TBC**. The structured pull
does not supply a complete editorial timetable, and the department page states
that evaluation is part of the remit without publishing a current score table
in the fetched material.[^yilan-route-tdx][^yilan-transport-department]
