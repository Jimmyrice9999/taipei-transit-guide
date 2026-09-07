---
title: Taoyuan regional buses
description: A dated Taoyuan city-bus discovery layer with the 2026 Taoyuan–Nankan restructuring, 桃小巴 policy boundary and current payment evidence kept separate.
summary: The 7 September 2026 TDX snapshot contains 412 Taoyuan city-scoped route records and 714 source variants; the editorial layer explains the current 106 replacement and the city’s small-bus and payment policy without treating a route-record count as a permanent network total.
updated: 2026-09-07
facts:
  - label: TDX route records
    value: "412"
    source: taoyuan-route-tdx
  - label: TDX source variants
    value: "714"
    source: taoyuan-route-tdx
  - label: TDX operator labels attached to routes
    value: "15"
    source: taoyuan-route-tdx
  - label: Current route-family total across all publication layers
    value: TBC
  - label: Complete Taoyuan fare matrix
    value: TBC
specs:
  - label: Structured snapshot retrieved
    value: 2026-09-07
    source: taoyuan-route-tdx
  - label: Structured data definition
    value: TDX Route/City/Taoyuan records; variants are the supplied SubRoutes records, not timeless unique routes
    source: taoyuan-route-tdx
  - label: 106 replacement effective
    value: 2026-03-09
    source: taoyuan-106-5014
  - label: 5014 main plus branches
    value: 5014 / 5014A / 5014B
    source: taoyuan-106-5014
  - label: Published 5014 fare
    value: NT$18 for the first 8 km, then NT$2.58 per km
    source: taoyuan-106-5014
sources:
  - id: taoyuan-route-tdx
    title: Taoyuan city-bus route snapshot
    titleOriginal: 桃園市公車路線資料（TDX Route/City/Taoyuan）
    publisher: Taiwan Ministry of Transportation and Communications TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/Taoyuan?$format=JSON
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The dated national pull records the Taoyuan Route/City response, its RouteUID-based route records, supplied SubRoutes variant counts, route endpoints, operator labels and source update time.
  - id: taoyuan-106-5014
    title: Route 106 joins route 5014 with added service from 9 March
    titleOriginal: 106路線自3月9日起併入5014路線增班服務
    publisher: Taoyuan City Government Department of Transportation (桃園市政府交通局)
    url: https://www.tycg.gov.tw/NewsPage_Content.aspx?n=7&s=1609279&sms=7882
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full city announcement records the 106 operating-term/contract problem, the 5014/5014A/5014B replacement effective 9 March 2026, service counts, overlap analysis, fare and TPASS/citizen-card treatment.
  - id: taoyuan-dual-bus-plan
    title: Taoyuan dual-bus transfer improvement plan
    titleOriginal: 桃市公車雙巴轉運提升計畫
    publisher: Taoyuan City Government Information Office (桃園市政府新聞處)
    url: https://news.tycg.gov.tw/News_Content.aspx?n=5016&s=1598080&sms=7885
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full 10 December 2025 city-government report explains the policy boundary between 桃小巴, trunk/circular buses, driver capacity and the planned payment integration; it is not used as a current route count.
  - id: taoyuan-bus-portal
    title: Taoyuan bus dynamic information system
    titleOriginal: 桃園市公車動態資訊系統
    publisher: Taoyuan City Government Department of Transportation (桃園市政府交通局)
    url: https://ebus.tycg.gov.tw/ebus/
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The city announcement directs passengers to this route and departure-information portal; this page does not treat the portal as a fetched static timetable snapshot.
---

Taoyuan’s regional bus layer is a dated discovery surface, not a live departure board. The current TDX pull contains 412 Taoyuan city-scoped route records and 714 records in the source `SubRoutes` arrays.[^taoyuan-route-tdx] Those are two different measurements: the first is a RouteUID-oriented response count, while the second preserves the variants supplied by TDX. They are not a claim that Taoyuan has 714 permanent unique routes.[^taoyuan-route-tdx]

The structured layer also carries 15 distinct operator labels attached to the retrieved Taoyuan route records.[^taoyuan-route-tdx] That is an evidence-backed label count for this snapshot, not a legal-company register or a guarantee that every label has the same operating role. Route names, endpoints, source update times and operator references remain in the national data layer rather than being mechanically expanded into hundreds of nearly empty articles.[^taoyuan-route-tdx]

## A current corridor change

The city’s full 2026 announcement says route 106, formerly operated by 指南客運 between Taoyuan and Nankan, reached the end of its operating term and attracted no operator after repeated notices.[^taoyuan-106-5014] From 9 March 2026, the city used route 5014, with new 5014A and 5014B branches, to maintain the Taoyuan–Nankan corridor.[^taoyuan-106-5014] The announcement says the existing 5014 and former 106 sections overlapped by more than 80%, while the city’s electronic-ticket analysis identified nine overlapping routes: GR, GR2, 201, 302, 5014, 5022, 5023, 5059 and 5069.[^taoyuan-106-5014]

The published service pattern is explicit but dated: 5014 main operates five weekday and four holiday services, 5014B 25 weekday and 16 holiday services, and 5014A 13 on both weekdays and holidays.[^taoyuan-106-5014] The city therefore reports 43 combined weekday and 33 combined holiday services for the 5014 group, compared with 24 and 18 for the former 106 service.[^taoyuan-106-5014] The same announcement publishes an NT$18 first-8-kilometre fare followed by NT$2.58 per kilometre, and says the group accepts the city-card basic-mileage buy-one-get-one benefit and TPASS; those statements are retained as this corridor notice’s fare snapshot, not general proof for every Taoyuan route.[^taoyuan-106-5014]

## 桃小巴 and payment boundary

The city describes 桃小巴 as a policy layer for lower-demand or neighbourhood connections, alongside trunk and circular buses; its December 2025 report describes a plan to use small buses to supplement outlying communities while reallocating large-bus driver capacity to higher-demand service.[^taoyuan-dual-bus-plan] The same report describes a planned staged integration of QR payment, city-card discounts and Taoyuan Metro transfers, but it does not by itself establish that every later phase has taken effect.[^taoyuan-dual-bus-plan] The live route and departure boundary is therefore the city’s bus portal, while this static page keeps payment and service claims tied to the specific announcement that supports them.[^taoyuan-bus-portal][^taoyuan-dual-bus-plan]

This page does not assert a complete current fare matrix, a permanent operator roster, vehicle allocations, route reliability, or a complete 桃小巴 route list. Those require separately fetched municipal, operator or timetable records; the national route snapshot and the city’s corridor announcement are useful starting points, not substitutes for them.
