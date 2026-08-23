---
title: "CB26 / 通勤26"
summary: "Special shuttle route: CB26 (通勤26)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "Special shuttle / commuter service (通勤／專車)"
    source: ebus-special
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
    title: "TDX bus data"
    titleOriginal: "交通部運輸資料流通服務平臺"
    publisher: "Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺"
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Supports the normalized route identity, municipality, operators, direction and variant records, stop sequences, shapes, source-update fields and the separately curated geometry-only MRT stop joins. The committed route layer does not carry route length, timetable or fare fields."
  - id: ebus-special
    title: "Commuter and destination-service catalogue"
    titleOriginal: "大臺北公車"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/ebus?ct=tpc
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official catalogue was fetched and read; it lists this route under 通勤公車、內科專車、南軟專車與其他 and its route-id link where a separate entry exists."
  - id: ebus-route-26-utmbkb
    title: "CB26 route schedule"
    titleOriginal: "通勤26班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0152005000
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 通勤26 under 通勤公車 (通勤公車、內科專車、南軟專車與其他).[^ebus-special]
The normalized TDX record retains 2 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “雙溪 - 士林市場”, the current head/last-departure field “[平日] 0920 - 1050 [假日] 停駛”, fare “三段票”.[^ebus-route-26-utmbkb] It currently lists weekday service and suspended holiday service.[^ebus-route-26-utmbkb]

The confirmed stop sequence runs from 大崙尾山, past 大崙尾山步道口/雙溪
社區/雙溪站一/雙溪站二/翠山街/明溪街/雙溪國小/中社路17巷/中央站/中社路
一段61巷口/翠山派出所/社區發展協會/中社路11巷/翠山莊/福林國小/陽明戲院,
ending at 捷運劍潭站(北藝中心).[^tdx-bus] One confirmed interchange is
recorded in the curated stop-ID join set: Jiantan (R15), matching the
route's own terminus.[^tdx-bus] The route runs two half-trip subroutes
under one operator, 首都客運, on a three-stage fare — tied with the
separate 通勤24 for the highest fare tier confirmed in this batch — and
a narrow 0920–1050 morning window.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for CB26; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**CB26 (18 stops):** Mt Dalunwei -> Mt Dalunwei Trail Entrance -> Shuangxi Community -> Shuangxi Sta 1 -> Shuangxi Stop 2 -> Cuishan St -> Mingxi St -> Shuangxi Elementary School -> Zhongshe Rd 17th Lane -> ZhongyangSta -> Zhongshe RdSec1 Lane 61 Entrance -> Cuishan Police Substation -> Community Development Assn -> Zhongshe Rd 11th Lane -> Cui Shanzhuang -> Fulin Elementary School -> Yangming Theater -> MRT Jiantan Sta (Taipei Performing Arts Center)[^tdx-bus]

**CB26 (19 stops):** Shilin Market (Ming Chuan Hostel) -> Yangming Theater -> Fulin Elementary School -> Cui Shanzhuang -> Zhongshe Rd 11th Lane -> Community Development Assn -> Cuishan Police Substation -> Zhongshe RdSec1 Lane 61 Entrance -> ZhongyangSta -> Zhongshe Rd 17th Lane -> Shuangxi Elementary School -> Mingxi St -> Cuishan St -> Shuangxi Stop 2 -> Shuangxi Sta 1 -> Shuangxi Sta -> Shuangxi Community -> Mt Dalunwei Trail Entrance -> Mt Dalunwei[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for the route's own three-stage fare on a corridor this short, or its own narrow published window, was found in this search, nor a stated reason for pairing 雙溪 with 士林市場 specifically as the route's own termini.
