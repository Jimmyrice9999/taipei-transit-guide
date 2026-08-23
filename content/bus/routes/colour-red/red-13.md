---
title: R13 / 紅13
summary: Red-line feeder route R13 (紅13).
updated: 2026-08-18
line: R
facts:
  - label: Service class
    value: MRT red-line feeder
    source: ebus-red
specs:
  - label: Route length
    value: TBC
    unit: km
  - label: Service span
    value: TBC
  - label: Headway by day type
    value: TBC
  - label: Fare / transfer
    value: TBC
sources:
  - id: tdx-bus
    title: TDX bus data
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field.
  - id: ebus-red
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Lists 紅13 under 捷運紅線接駁公車.
  - id: ebus-r13
    title: R13 route schedule
    titleOriginal: 紅13班表
    publisher: New Taipei City Public Transportation Office (新北市政府交通局)
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0411001300
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 八里–捷運關渡站 corridor, weekday/holiday service spans, one-section fare and 淡水客運八里站 contact.
---

## Classification and corridor

The official catalogue lists 紅13 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 八里 - 捷運關渡站, weekday service 0600–2110, holiday service 0745–2110, one-section fare and 淡水客運八里站 as the service contact.[^ebus-r13]

At 47 stops each way, the confirmed stop sequence is one of the longer
routes in this batch: from 淡水客運八里站, past 八里國中/八仙樂園/八里區農會,
through 八里行政中心/十三行博物館/挖子尾自然保護區, then crosses 關渡大橋 into
Beitou past 關渡/關渡里, ending at 捷運關渡站.[^tdx-bus] One confirmed
interchange is recorded in the curated stop-ID join set: Guandu (R25),
matching the route's own terminus.[^tdx-bus] The route runs a single
subroute under one operator, 淡水客運.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for R13; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**R13 (47 stops):** Tamsui Bus Bali Station -> Guimashan -> Zhonghua Rd Sec 2 -> Siajhuang Market -> Bali Junior High School -> Liaotianding Temple -> Shuixianxi Bridge -> Amusement Park -> Baxian Bridge -> Xiazhuwei -> Tudigong Temple -> Bali -> JiouCheng Village -> Bali District Farmers' Association -> Bali Service Sta -> Bali Elementary School -> Broadcasting Corporation of China -> Shanhaiguan -> Bali District Administration Center(Shisanhung Museum) -> Shihsanhang Rd Entrance -> Shihsanhang Museum(ShihsanhangRd) -> Bali Sewage Treatment Plant -> Shihsanhang Culture Park -> Waziwei Nature Reserve -> Reiron Park -> Shuixing Temple -> Rive Gauch Park-Rive Gauch Wharf -> Xiajiezi -> Ferryboats’Dock -> Shuiyun Shanzhuang -> Micang Village -> Guanyin Rd Entrance -> Micang Elementary School -> Micang Junior School 1 -> Shengxin Villa -> Wushantou -> Zhangcuo -> Sacred Heart Girls High School -> Longxing -> Dafu Community -> Bangka Bridge -> Bangka Bridge -> Guandu Bridge -> Guandu -> Guandu Nature Building -> Guandu Village -> MRT Guandu Sta[^tdx-bus]

**R13 (47 stops):** Beitou District Office(Guandu) -> Ligong & Lide Intersection -> Da Ai Television -> Guandu -> Guandu Bridge -> Bangka Bridge -> Dafu Community -> Longxing -> Sacred Heart Girls High School -> Zhangcuo -> Wushantou -> Shengxin Villa -> Micang Elementary School I -> Micang Junior School -> Guanyin Rd Entrance -> Micang Village -> Shuiyun Shanzhuang -> Ferryboats' Dock -> Xiajie Zai -> Rive Gauch Park-Rive Gauch Wharf -> Shuixing Temple -> Reiron Park -> Waziwei Nature Reserve -> Shihsanhang Culture Park -> Bali Sewage Treatment Plant -> Ren 3rd St Entrance -> Shihsanhang Museum(MuseumRd) -> Shihsanhang Rd Entrance -> Bali District Administration Center(Shisanhung Museum) -> Shanhaiguan -> Broadcasting Corporation of China -> Bali Elementary School -> Bali Service Sta -> Bali District Farmers' Association -> JiouCheng Village -> Bali -> Tudigong Temple -> Xiazhuwei -> Baxian Bridge -> Amusement Park -> Shuixianxi Bridge -> Liaotianding Temple -> Bali Junior High School -> Siajhuang Market -> Zhonghua Rd Sec 2 -> Guimashan -> Tamsui Bus Bali Station[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅13 was found
in this search.[^tdx-bus] A headway-by-day-type figure is likewise absent from the
primary schedule page beyond its own weekday 0600–2110 and holiday
0745–2110 span statement.[^ebus-r13] No predecessor-route or renumbering history for
紅13 was located either, nor a stated reason for confirming only one interchange along a 47-stop
corridor running the length of 八里's own riverside district before
crossing 關渡大橋 into Beitou at the very end of the route.[^tdx-bus]
