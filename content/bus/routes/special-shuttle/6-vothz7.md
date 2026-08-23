---
title: "NH6 / 內科通勤專車6"
summary: "Special shuttle route: NH6 (內科通勤專車6)."
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
  - id: ebus-route-6-vothz7
    title: "NH6 route schedule"
    titleOriginal: "內科通勤專車6班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0152000600
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 內科通勤專車6 under 內科專車 (通勤公車、內科專車、南軟專車與其他).[^ebus-special]
The normalized TDX record retains 2 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “蘆洲站 - 內湖科技園區”, the current head/last-departure field “[平日] 0700 - 1810 [假日] 停駛”, fare “兩段票”.[^ebus-route-6-vothz7] It currently lists weekday service and suspended holiday service.[^ebus-route-6-vothz7]

The confirmed stop sequence runs from 蘆洲總站, past 溪墘/捷運三和國中
站/德林寺(三和路)/長元西街口/大同路口/重安街口(中正南路)/新湖一路口/新
湖舊宗路口/精技大樓/麗寶大樓/公館山/瑞光路/瑞光港墘路口/仁寶大樓/基湖路
口, ending at 基湖站 in the Neihu Science Park.[^tdx-bus] One confirmed
interchange is recorded in the curated stop-ID join set: Sanhe Junior
High School (O51), matching a stop early in the route's own corridor.[^tdx-bus] The route runs two named subroutes under one operator, 三重
客運, on a two-stage fare, weekdays only with holiday service
suspended entirely.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for NH6; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**NH6 (17 stops):** Luzhou Bus Terminal -> XiQian -> MRT Sanhe Juior High School Sta -> Delin Temple(Sanhe Rd) -> Changyuan WSt Entrance -> Datong Rd Entrance -> Chongan St Entrance(Zhongzheng S Rd) -> Xinhu 1st Rd Entrance -> Xinhu and Jiuzong Intersection -> Unitech Building -> Libao Building -> Gongguanshan -> Ruiguang Rd -> Ruiguang &Gangqian Roads -> Renbao Bldg -> Jihu Rd Entrance -> Jihu Stop[^tdx-bus]

**MH6 (18 stops):** Jihu Stop -> Jihu Rd Entrance -> Renbao Bldg -> Ruiguang & Gangqian Intersection -> Ruiguang Rd -> Gongguanshan -> Libao Building -> Unitech Building -> SoutheastBusParkingLot -> Xinhu and Jiuzong Intersection -> Xinhu 1st Rd Entrance -> Chongan St Entrance(Zhongzheng S Rd) -> Datong Rd Entrance -> Changyuan WSt Entrance -> Delin Temple(Sanhe Rd) -> MRT Sanhe Juior High School Sta -> XiQian -> Luzhou Sta[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for the route's own holiday suspension was found in this search, nor a stated reason for pairing 蘆洲站 with the Neihu Science Park specifically as the route's own termini.
