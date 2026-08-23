---
title: BL31 / 藍31
summary: Blue-line feeder route BL31 (藍31).
updated: 2026-08-19
line: BL
facts:
  - label: Service class
    value: MRT blue-line feeder
    source: ebus-blue
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
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field.
  - id: ebus-blue
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 藍31 under 捷運藍線接駁公車.
  - id: ebus-bl31
    title: BL31 route schedule
    titleOriginal: 藍31班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412003100
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 五福新村–板橋後站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍31 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 五福新村 - 板橋後站, weekday service 0530–2130, holiday service 0600–2100, one-section fare and 臺北客運五福站 as the service contact.[^ebus-bl31]

The confirmed stop sequence runs from 五福新村, past 富貴新村/冷凍廠(懷德)/江子翠/
江翠國小, along 雙十路/大同街口/永安公園/翠華新村/埔墘, into 積穗 past 自來水公司/
松下電子/板橋監理站/環球購物中心, then through 莒光路/德光路/民德路/自強國小, ending
at 板橋後站.[^tdx-bus] One confirmed interchange is
recorded in the curated stop-ID join set: Jiangzicui (BL09), matching a
literal stop at 捷運江子翠站 named on the return working.[^tdx-bus] The route
runs a single subroute under one operator, 臺北客運, with no recorded
holiday variant or short working.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for BL31; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BL31 (30 stops):** Wufu New Village -> FugueiNewVillage -> Freezing Plant -> Huaide St -> Jiangzicui -> Jiangcui Elementary School -> MRT Jiangzicui Station -> Shuangshi Rd -> Datong St Entrance -> Yongan Park -> Cuihua New Village -> Puqian(Sanmin Rd) -> Changshou Village -> Taiwan Water Company -> Matsushita Electronics Company -> Jisui(Yuanshan Rd) -> Jisui -> Banqiao Motor Vehicles Supervision Sta -> Global Mall -> Juguang Rd Entrance -> DeGuang Rd Entrance -> Deguang Rd -> Minde Rd Entrance -> Ziqiang Elementary School -> Huafu St Entrance -> Shoude St Entrance -> Wuquan Park -> Guangfu Park -> Gancheng Rd Entrance -> Old Banqiao Sta[^tdx-bus]

**BL31 (28 stops):** Gancheng Rd Entrance -> Guangfu Park -> Wuquan Park -> Shoude St Entrance -> Huafu St Entrance -> Ziqiang Elementary School -> Minde Rd Entrance -> Deguang Rd -> DeGuang Rd Entrance -> Juguang & Deguang Intersection -> Global Mall -> Banqiao Motor Vehicles Supervision Sta -> Jisui -> Jisui(Yuanshan Rd) -> Matsushita Electronics Company -> Taiwan Water Company -> Changshou Village -> Puqian(Sanmin Rd) -> Cuihua New Village -> Yongan Park -> Datong St Entrance -> Shuangshi Rd -> MRT Jiangzicui Station -> Jiangcui Elementary School -> Huaide St (Wensheng) -> Refrigeration Plant(Wensheng) -> Mousic Park -> Wufu New Village[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 藍31 or a
stated reason for pairing 五福新村 with 板橋後站 specifically was found in
this search. A headway-by-day-type figure is likewise absent from the
primary schedule page beyond its own weekday/holiday span statement. Why
this route confirms only one MRT interchange despite running the length of
Banqiao's 積穗/莒光路 residential corridor, unlike several other Blue-line
feeders in this batch that confirm three or more, was not found in this
search.
