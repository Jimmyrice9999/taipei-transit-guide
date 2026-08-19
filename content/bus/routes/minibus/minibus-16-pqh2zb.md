---
title: "M16 / 市民小巴16"
summary: "Minibus and community route: M16 (市民小巴16)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "Minibus / community service (小／市民小巴)"
    source: ebus-minibus
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
  - id: ebus-minibus
    title: "Taipei bus route catalogue — 小 and 市民小巴"
    titleOriginal: "大臺北公車"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/ebus?ct=tpc
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official catalogue was fetched and read; it lists this route under 小、市民小巴 and its route-id link where a separate entry exists."
  - id: ebus-route-minibus-16-pqh2zb
    title: "M16 route schedule"
    titleOriginal: "市民小巴16班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0153001600
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 市民小巴16 under 市民小巴 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “天母 - 捷運芝山站”, the current head/last-departure field “[平日] 0600 - 2100 [假日] 0630 - 2100”, fare “一段票”.[^ebus-route-minibus-16-pqh2zb]

The confirmed stop sequence runs from 天母圓環, past 中銀山莊/水管路/天母里/
天和里, through 天母圖書館/東和公園/天和公園/市立臺北特教學校, along 天母
棒球場/蘭雅國中/蘭雅新城/雨農國小/忠誠公園, ending at 捷運芝山站(福國).
[^tdx-bus] One confirmed interchange is recorded in the curated stop-ID
join set: Zhishan (R17), matching the route's own terminus, the same
station confirmed for the separate 市民小巴11, which runs the same
天母-芝山 pairing under a different operator and a different local
street pattern.[^tdx-bus] The route runs a single subroute under one
operator, 光華巴士.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for running two separately numbered minibus routes over the same 天母-芝山 pairing, rather than publishing one route with branching stops, was found in this search.
