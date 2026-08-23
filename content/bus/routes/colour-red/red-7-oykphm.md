---
title: R7Shuttle / 紅7區
summary: Red-line feeder route R7Shuttle (紅7區).
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
    note: Lists 紅7區 under 捷運紅線接駁公車.
  - id: ebus-r7-shuttle
    title: R7Shuttle route schedule
    titleOriginal: 紅7區班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111000720
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 社子–捷運劍潭站 corridor, weekday/holiday service spans, headway notes, late fixed workings, 陽明戲院 stop note, one-section fare and 首都客運社子站 contact.
---

## Classification and corridor

The official catalogue lists 紅7區 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 社子 - 捷運劍潭站, weekday and holiday service 0540–2350, one-section fare and 首都客運社子站 as the service contact.[^ebus-r7-shuttle] The page records weekday peak/off-peak intervals of 10/20 minutes and holiday intervals of 15–20 minutes, with fixed departures after 22:00; it also limits the 陽明戲院 stop toward 捷運劍潭站 to departures before 11:00.[^ebus-r7-shuttle]

At just 12-13 stops each way, the confirmed stop sequence is a short loop:
永倫里(社中)、永平街口、社子公園、國泰人壽大樓/社正路/社子市場, past 陽明高中/士林
區行政中心/士林國中/士林國小, ending near 捷運劍潭站.[^tdx-bus] Two confirmed
interchanges are recorded in the curated stop-ID join set: Jiantan (R15)
and Shilin (R16), matching plain 紅7's own confirmed pair.[^tdx-bus] The
route runs a single subroute under one operator, 首都客運, over a
noticeably shorter stop count than plain 紅7's own 21-23 stop
sequence.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for R7Shuttle; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**R7Section (12 stops):** Yonglun Village (Shezhong) -> Yongping St Entrance -> Shezi Park -> Cathay Life Insurance Building -> Shezheng Rd -> Shezi Market -> Yangming High School -> Shilin Admin Center -> Shilin Jr High School -> Shilin Elementary School -> Xiaobei St -> MRT Jiantan Sta (Zhongshan)[^tdx-bus]

**R7Section (13 stops):** MRT Jiantan Sta (Taipei Performing Arts Center) -> Yangming Theater -> Xiaobei St -> Shilin Farmers Assn -> Shilin Jr High School -> Shilin Admin Center -> Yangming High School -> Shezi Market -> Shezheng Rd -> Cathay Life Insurance Building -> Shezi Park -> Yongping St Entrance -> Yonglun Village (Shezhong)[^tdx-bus]

**R7S (12 stops):** Yonglun Village (Shezhong) -> Yongping St Entrance -> Shezi Park -> Cathay Life Insurance Building -> Shezheng Rd -> Shezi Market -> Yangming High School -> Shilin Admin Center -> Shilin Jr High School -> Shilin Elementary School -> Xiaobei St -> MRT Jiantan Sta (Zhongshan)[^tdx-bus]

**R7S (13 stops):** MRT Jiantan Sta (Taipei Performing Arts Center) -> Yangming Theater -> Xiaobei St -> Shilin Farmers Assn -> Shilin Jr High School -> Shilin Admin Center -> Yangming High School -> Shezi Market -> Shezheng Rd -> Cathay Life Insurance Building -> Shezi Park -> Yongping St Entrance -> Yonglun Village (Shezhong)[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 3 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅7區 or its
relationship to plain 紅7 was found in this search. A headway-by-day-type
figure is likewise absent from the primary schedule page beyond its own
weekday/holiday interval statement. No predecessor-route or renumbering
history for 紅7區 was located either.
