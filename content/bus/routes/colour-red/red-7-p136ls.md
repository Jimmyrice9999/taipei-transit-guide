---
title: R7 / 紅7
summary: Red-line feeder route R7 (紅7).
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
    note: Lists 紅7 under 捷運紅線接駁公車.
  - id: ebus-r7
    title: R7 route schedule
    titleOriginal: 紅7班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111000700
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 捷運劍潭站–社子 corridor, weekday/holiday service spans, 陽明戲院 stop note, one-section fare and 首都客運士林站 contact.
---

## Classification and corridor

The official catalogue lists 紅7 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 捷運劍潭站 - 社子, weekday service 0600–1900, holiday service 0800–1700, one-section fare and 首都客運士林站 as the service contact.[^ebus-r7] The page says that the 陽明戲院 stop toward 捷運劍潭站 is served only by departures before 11:00 on both weekdays and holidays.[^ebus-r7]

The confirmed stop sequence runs from 捷運劍潭站, past 陽明戲院/小北街/士林區
農會/士林國中, through 社子's 社子公園/國泰人壽大樓/社正路/社子市場, along 永倫里
(社中)/永倫里(延平)/洲美橋, ending near 福安里/普濟堂 on the outbound working.[^tdx-bus] Two confirmed interchanges are recorded in the curated stop-ID
join set: Jiantan (R15) and Shilin (R16).[^tdx-bus] The route runs a
single subroute under one operator, 首都客運, with a narrower weekday
0600–1900 and holiday 0800–1700 span than sibling 紅7區's own near-24-hour
service.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for R7; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**R7 (23 stops):** MRT Jiantan Sta (Taipei Performing Arts Center) -> Yangming Theater -> Xiaobei St -> Shilin Farmers Assn -> Shilin Jr High School -> Shilin Admin Center -> Yangming High School -> Shezi Market -> Shezheng Rd -> Cathay Life Insurance Building -> Shezi Park -> Yongping St Entrance -> Yonglun Village (Shezhong) -> Yonglun Village (Yanping) -> Qiaomei Stop -> Zhongku -> Fuan Village 1 -> Xuyingma Temple -> Fuan Temple -> Mingan Temple -> Industrial District -> Fuzhou Activity Center -> Wanjin Rd Entrance[^tdx-bus]

**R7 (21 stops):** Shapu -> Fuan Junior High School -> Linjiangyuan -> Dizang Temple -> Xiazhuwei -> Taipei City Fire Dept Fuan Sta -> Fuan Village -> Puji Temple -> Yonglun Village (Shezhong) -> Yongping St Entrance -> Shezi Park -> Cathay Life Insurance Building -> Shezheng Rd -> Shezi Market -> Yangming High School -> Shilin Admin Center -> Shilin Jr High School -> Shilin Elementary School -> Xiaobei St -> Yangming Theater -> MRT Jiantan Sta (Zhongshan)[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length and a headway-by-day-type figure also remain TBC, and no
dated history for 紅7 was found in this search, nor a stated reason for
the 陽明戲院 stop's own time-of-day restriction toward 捷運劍潭站. No
predecessor-route or renumbering history for 紅7 was located either, nor
a stated reason for its own narrower weekday and holiday spans compared
with sibling 紅7區's near-24-hour service.[^tdx-bus]
