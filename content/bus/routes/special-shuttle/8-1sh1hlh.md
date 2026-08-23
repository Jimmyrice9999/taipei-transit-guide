---
title: "NH8 / 內科通勤專車8"
summary: "Special shuttle route: NH8 (內科通勤專車8)."
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
  - id: ebus-route-8-1sh1hlh
    title: "NH8 route schedule"
    titleOriginal: "內科通勤專車8班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0152000800
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 內科通勤專車8 under 內科專車 (通勤公車、內科專車、南軟專車與其他).[^ebus-special]
The normalized TDX record retains 2 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “松山車站 - 內湖科技園區”, the current head/last-departure field “[平日] 0750 - 1820 [假日] 停駛”, fare “一段票”.[^ebus-route-8-1sh1hlh] It currently lists weekday service and suspended holiday service.[^ebus-route-8-1sh1hlh]

The confirmed stop sequence runs from 松山車站, past 週美里一/潭美國小
(舊宗)/新湖舊宗路口/精技大樓/新湖行善路口/麗寶大樓/公館山/瑞光路/瑞光港
墘路口/仁寶大樓/基湖路口, ending at 基湖站 in the Neihu Science Park.[^tdx-bus] One confirmed interchange is recorded in the curated
stop-ID join set: Songshan (G19), matching the route's own terminus.[^tdx-bus] The route runs two named subroutes under two operators, 光
華巴士 and 中興巴士, weekdays only with holiday service suspended
entirely.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for NH8; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**NH8 (13 stops):** Songshan Rail Sta -> Zhoumei Village 1 -> Tanmei Elementary School (Jiuzong) -> Xinhu and Jiuzong Intersection -> Unitech Building -> Xinhu and Xingshan Intersection -> Libao Building -> Gongguanshan -> Ruiguang Rd -> Ruiguang &Gangqian Roads -> Renbao Bldg -> Jihu Rd Entrance -> Jihu Stop[^tdx-bus]

**NH8 (14 stops):** Jihu Stop -> Jihu Rd Entrance -> Renbao Bldg -> Ruiguang & Gangqian Intersection -> Ruiguang Rd -> Gongguanshan -> Libao Building -> Xinhu and Xingshan Intersection -> Unitech Building -> SoutheastBusParkingLot -> Xinhu and Jiuzong Intersection -> Tanmei Elementary School (Jiuzong) -> Zhoumei Village 1 -> Songshan Rail Sta[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 2 operator records, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for pairing 松山車站 with the Neihu Science Park specifically as the route's own termini, distinct from the several other Songshan-Neihu shuttles in this batch, was found in this search.
