---
title: BL32 / 藍32
summary: Blue-line feeder route BL32 (藍32).
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
    note: Lists 藍32 under 捷運藍線接駁公車.
  - id: ebus-bl32
    title: BL32 route schedule
    titleOriginal: 藍32班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412003200
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 南雅站–聯合醫院(板橋院區) corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍32 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 南雅站 - 聯合醫院(板橋院區), weekday service 0600–2100, holiday service 0700–2000, one-section fare and 臺北客運南雅站 as the service contact.[^ebus-bl32]

The confirmed stop sequence runs from 臺北客運南雅站, past 信義國小/信義公園/
益華紡織, into 板橋後站's 重慶國小/重慶國中 area, then through 審計公廨/介壽公園/
萬坪公園/新北板橋公車站, ending at 聯合醫院板橋院區.[^tdx-bus] Three confirmed
interchanges are recorded in the curated stop-ID join set: Far Eastern
Hospital (BL05), Fuzhong (BL06) and Banqiao, a Bannan–Circular
interchange (BL07/Y16).[^tdx-bus] The route runs a single subroute under
one operator, 臺北客運, with no recorded holiday variant or short
working.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for BL32; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BL32 (21 stops):** Taipei Bus Nanya Station(Hua-dong St) -> Xinyi Elementary School -> Xinyi Park -> Yihua Textile -> Xinyi Rd -> Old Banqiao Sta -> Chongqing Elementary School -> Wuquan St Entrance -> Shoude New Village -> Chongqing Junior High School -> Chongqing & Zhongxiao Rd Intersection -> Houpu Elementary School -> Taipei County Auditing Office -> Jieshou Park -> Wanping Park -> NTPC Banqiao Bus Station -> Xinmin Village -> Hansheng Post Office -> Tangchen Mansion -> Wende Elementary School -> New Taipei City Hospital(Banqiao Branch)[^tdx-bus]

**BL32 (20 stops):** Xinhai Police Sta -> Hansheng W Rd -> Xinmin Village -> NTPC Banqiao Bus Station -> Banqiao Bus Terminal Extension -> Old Banqiao Sta Shopping Circle -> Taipei County Auditing Office -> Houpu Elementary School -> Chongqing & Zhongxiao Rd Intersection -> Chongqing Junior High School -> Wuquan St Entrance -> Chongqing Elementary School -> Old Banqiao Sta -> Yihua Textile -> Xinyi Park -> Xinyi Elementary School -> Nanya Stop -> Oriental University of Science & Technology -> MRT Far Eastern Hospital Station -> Taipei Bus Nanya Station(Hua-dong St)[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 藍32 or a
stated reason for pairing 南雅站 with 聯合醫院板橋院區 was found in this search.
A headway-by-day-type figure is likewise absent from the primary schedule
page beyond its own weekday 0600–2100 and holiday 0700–2000 span
statement, and whether the route predates or postdates the Circular
Line's own opening at Banqiao station was not established in this search,
nor was any renumbering or predecessor-route history for 藍32 specifically
found in this project's search.
