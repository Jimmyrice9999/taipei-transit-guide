---
title: Keelung regional buses
description: A dated Keelung city-bus discovery layer joined to the municipal transfer-station, payment and transport-data sources.
summary: The 6 September 2026 TDX snapshot contains 116 Keelung route records and 168 supplied variants; the city’s official notices explain the two-zone transfer station, the south-station boundary and the TPASS 288 payment surface.
updated: 2026-09-07
facts:
  - label: TDX route records
    value: "116"
    source: keelung-route-tdx
  - label: TDX source variants
    value: "168"
    source: keelung-route-tdx
  - label: Transfer-station zones published by the city
    value: "2"
    unit: zones
    source: keelung-terminal-current
  - label: TPASS product described by the city
    value: "TPASS 288"
    source: keelung-tpass
  - label: Permanent city-wide route total across publication layers
    value: TBC
  - label: Complete Keelung fare matrix
    value: TBC
specs:
  - label: Structured snapshot retrieved
    value: 2026-09-06
    source: keelung-route-tdx
  - label: Structured data definition
    value: TDX Route/City/Keelung records; variants are supplied SubRoutes records, not timeless unique routes
    source: keelung-route-tdx
  - label: Transfer-station notice last updated
    value: 2025-03-03
    source: keelung-terminal-current
  - label: TPASS sales notice last updated
    value: 2025-05-28
    source: keelung-tpass
sources:
  - id: keelung-route-tdx
    title: Keelung city-bus route snapshot
    titleOriginal: 基隆市公車路線資料（TDX Route/City/Keelung）
    publisher: Taiwan Ministry of Transportation and Communications TDX (交通部運輸資料流通服務平台)
    url: https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/Keelung?$format=JSON
    accessed: 2026-09-06
    kind: primary
    lang: zh-Hant
    note: The dated route pull records RouteUID-oriented route objects, supplied SubRoutes variants and the Keelung source-city boundary; it is not a permanent route total.
  - id: keelung-terminal-current
    title: Keelung Transfer Station information
    titleOriginal: 基隆轉運站資訊
    publisher: Keelung City Government Transportation Department (基隆市政府交通處)
    url: https://www.klcg.gov.tw/tw/tourism/2624-287263.html
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full municipal notice distinguishes the transfer-station building and Zhongshan 1st Road shelter, names route/operator groups, preserves the South Station boundary and gives the publication/update dates.
  - id: keelung-tpass
    title: Keelung public-transport monthly pass sales points
    titleOriginal: 「基隆市公共運輸定期票」(TPASS 288)，販售點更新
    publisher: Keelung City Government Transportation Department (基隆市政府交通處)
    url: https://www.klcg.gov.tw/tw/tourism/2624-301531.html
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full notice lists the TPASS 288 sales channels and the EasyCard, iPASS and icash 2.0 media accepted at the listed railway-station and transfer-station machines; it is not a complete bus fare matrix.
  - id: keelung-tdx-award
    title: 2024 TDX participating-unit performance award
    titleOriginal: 交通部113年度「運輸資料流通服務平臺TDX」加盟協作單位績效評獎
    publisher: Keelung City Government (基隆市政府)
    url: https://www.klcg.gov.tw/tw/klcg1/3242-299556.html
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full city notice records the Transport Bureau and Public Bus Administration receiving the TDX bus-category special award on 5 March 2025; this is a data-cooperation award, not a passenger-service grade.
  - id: keelung-506-current
    title: Route 506 trial detour notice
    titleOriginal: 506公車路線自114年10月1日起試辦平日上午10時班次繞駛成功一路
    publisher: Keelung City Government Transportation Department (基隆市政府交通處)
    url: https://www.klcg.gov.tw/tw/tourism/2624-307208.html
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full notice records a dated route-506 trial detour from 1 October 2025; it is retained as a concrete service-change example, not as a current all-route timetable.
---

Keelung’s regional bus layer is a dated structured discovery surface plus a municipal operating context. The 6 September 2026 TDX pull contains 116 Keelung route records and 168 records in the supplied `SubRoutes` arrays.[^keelung-route-tdx] Those measurements describe one source response and its variants; they are not a permanent count of unique city routes.[^keelung-route-tdx]

## Transfer-station boundary

The city’s official transfer-station notice describes two distinct passenger areas: the transfer-station building and the roadside shelter on Zhongshan 1st Road.[^keelung-terminal-current] The building is assigned to highway-facing services from Kuo-Kuang, Tailo, Keelung Bus, Kuang Hua and Ri-Hao, while the roadside shelter carries the city bus administration’s numbered groups and selected services from other operators.[^keelung-terminal-current] The notice names route groups including `787`, `788`, `789`, `790`, `791`, `862`, `1031`, `1032`, `1191` and `9006` at that shelter.[^keelung-terminal-current]

The same notice says the South Station bus stop at Keelung Railway Station remains in use. Passengers for the 3xx services toward Taibai Village, Zhongshan Senior High School and Daganshan, the 4xx services toward Badu and Qidu, and the 6xx services toward Nuannuan and Sijiaoting are directed to that original stop.[^keelung-terminal-current] This is a useful boundary for route discovery: a listing of Keelung Transfer Station must not silently turn every railway-station bus relation into a departure from the terminal building.[^keelung-terminal-current]

## Payment and data context

The city’s TPASS 288 notice lists railway stations at Keelung, Sankeng, Badu, Qidu and Baifu, plus the Keelung Transfer Station, as sales locations where EasyCard, iPASS and icash 2.0 can be used at the listed machines.[^keelung-tpass] The same notice separately lists online EasyWallet and convenience-store channels, so this evidence supports the dated pass-sales boundary rather than universal proof that every Keelung bus accepts every payment medium.[^keelung-tpass]

Keelung City Government and its Public Bus Administration received a 2024 TDX participating-unit performance award in the bus category, published in March 2025.[^keelung-tdx-award] That award documents data cooperation and does not substitute for a passenger-service quality grade.[^keelung-tdx-award] A dated municipal notice also records a trial detour for route 506 from 1 October 2025, illustrating why route-level notices should remain separate from the static route-record snapshot.[^keelung-506-current]

## Scope and gaps

This page does not claim a complete fare table, current bay-by-bay allocation, step-free path, live departure timetable, vehicle allocation or a permanent operator roster. The transfer-station notice is authoritative for its published zones and route/operator groupings, while TDX is the source for the dated structured discovery count.[^keelung-terminal-current][^keelung-route-tdx]
