---
title: Hualien regional buses
description: Hualien County's dated city-bus and highway-bus layer, with its operator boundaries, public-transport pass, transfer-station role and current evaluation-report status kept separate.
summary: A 7 September 2026 TDX snapshot of Hualien bus records joined to the county's current TPASS route scope, Hualien Transfer Station MaaS role and the 2026 service-evaluation announcement.
updated: 2026-09-07
facts:
  - label: TDX route records
    value: "9"
    source: hualien-route-tdx
  - label: TDX supplied variants
    value: "31"
    source: hualien-route-tdx
  - label: Hualien public-transport pass plans
    value: "NT$199 / NT$399"
    source: hualien-tpass
  - label: 114年度 service-evaluation report announcement
    value: 2026-07-15; report attached by county government
    source: hualien-evaluation-notice
specs:
  - label: Structured snapshot retrieved
    value: 2026-09-07
    source: hualien-route-tdx
  - label: City-bus operators named by current TPASS guide
    value: Taroko Bus and Ubus
    source: hualien-tpass
  - label: Complete current route timetable and fare matrix
    value: TBC
  - label: Evaluation scores and rankings
    value: TBC; attachment fetch failed during this verification
sources:
  - id: hualien-route-tdx
    title: Hualien city-bus route snapshot
    titleOriginal: 花蓮縣公車路線資料（TDX Route/City/Hualien）
    publisher: Taiwan Ministry of Transportation and Communications TDX (交通部運輸資料流通服務平台)
    url: https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/Hualien?$format=JSON
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full structured city-scoped response used by the national bus layer; its 9 Route records and 31 supplied SubRoutes variants are snapshot measurements, not a timeless unique-route total.
  - id: hualien-tpass
    title: Hualien public-transport TPASS usage guide
    titleOriginal: TPASS使用指南
    publisher: Hualien County Government (花蓮縣政府)
    url: https://www.hly.tw/tpass/usage
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full current guide defines the NT$199 and NT$399 plans, 30-day use, included TRA/city/highway-bus scopes, excluded Taiwan Tourist Shuttle routes, city-bus operators and route lists, highway-bus operators and routes, and the separate 25-station use / 22-station sales lists.
  - id: hualien-maas
    title: About Hualien Yo真行 MaaS
    titleOriginal: 關於MaaS
    publisher: Hualien County Government (花蓮縣政府)
    url: https://www.hly.tw/about
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full county MaaS page says Hualien Transfer Station is the core for connecting public-transport information.
  - id: hualien-evaluation-notice
    title: Announcement of the 114年度 Hualien city-bus operations and service-evaluation results report
    titleOriginal: 「114年度花蓮縣市區公車營運及服務評鑑計畫委託服務案」成果報告書公告
    publisher: Hualien County Government Construction Department (花蓮縣政府建設處)
    url: https://pw.hl.gov.tw/Detail_sp/309bee78fdcb45d5af2ca51f02c1062e
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full 15 July 2026 notice confirms that the 114年度 evaluation results report was attached; its linked inner PDF could not be fetched in this verification, so no score is claimed.
---

Hualien’s bus layer needs two measurements kept apart. The 7 September 2026 TDX
city-scoped snapshot contains 9 route records and 31 supplied `SubRoutes` variants;
those are discovery-layer records, not a claim that the county has 31 permanent
unique routes.[^hualien-route-tdx] Route names, directions, stops and operators
remain in the structured national layer rather than being expanded into a page for
every source row.[^hualien-route-tdx]

## City and highway-bus boundary

The county’s current Hualien Yo真行 TPASS guide gives a useful editorial view above
that structured layer. It names Taroko Bus for city routes 301, 302, 302A, 303,
305 and 305A, and Ubus for 308, 308A, 311 and 311A.[^hualien-tpass] The list
includes the airport-bound 311A, but a route appearing in a pass guide is not by
itself a promise of a particular departure time or current fare.[^hualien-tpass]

The same guide separates highway-bus services from city buses. Its Ubus list
includes routes linking Hualien with Guangfu, Ruisui, Fengbin, Taroko, Xiuguluan,
Jingpu and Chenggong; Xingdong Bus appears on Taitung–Chenggong–Hualien and
other east-coast pairs, while East Taiwan Bus appears on Taitung–Fuli and
Chishang–Fuli.[^hualien-tpass] This is a source-defined operator and route scope,
not a claim that every one of those routes is a Hualien city-bus route.

## Hualien public-transport pass

The county publishes two 30-day plans.[^hualien-tpass] The NT$199 plan covers unlimited, mileage-
independent TRA travel within the county and city-bus routes; the NT$399 plan adds
the county’s highway-bus routes.[^hualien-tpass] The guide explicitly excludes all
Taiwan Tourist Shuttle routes, so “public transport pass” here does not mean every
tourist-labelled bus service in the county.[^hualien-tpass]

The guide’s two station counts must not be flattened. It lists 25 TRA stations in
the pass’s use scope, but 22 designated TRA stations where station staff can sell
the pass.[^hualien-tpass] Those figures describe eligibility and sales coverage,
not a contradiction about the railway itself. The guide also says the pass can be
loaded through several electronic-ticket media and identifies Hualien Transfer
Station, Fengbin Township Office and Yuli Township Office among sales channels.[^hualien-tpass]

## Transfer station and evaluation status

Hualien Yo真行 describes Hualien Transfer Station as the core around which the
county integrates public-transport information for journey planning.[^hualien-maas]
That is an official published access-chain description; this page does not infer
a timed connection merely because rail and bus names are geographically close.

The county’s Construction Department announced on 15 July 2026 that the 114年度
Hualien city-bus operations and service-evaluation project’s results report had
been published as attachments.[^hualien-evaluation-notice] The notice establishes
that a report was issued, but the linked inner PDF failed to fetch during this
verification. Evaluation scores, rankings, categories and operator consequences
therefore remain **TBC** rather than being reconstructed from an older report or
a search-result excerpt.[^hualien-evaluation-notice]

## What remains TBC

The structured snapshot does not establish a complete current route timetable,
route-wide fare matrix, concession rules, vehicle allocation, depot register,
contract history or current reliability series.[^hualien-route-tdx][^hualien-tpass]
The county TPASS guide is valuable scope evidence, not a replacement for each
operator’s live timetable. The next useful sources would be the official route
portal/API, current operator fare and timetable pages, and a successful full fetch
of the 114年度 evaluation report.[^hualien-evaluation-notice]
