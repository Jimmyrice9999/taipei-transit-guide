---
title: "Maokong Left (Zhinan Temple) / 貓空左線(指南宮)"
summary: "Special shuttle route: Maokong Left (Zhinan Temple) (貓空左線(指南宮))."
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
  - id: ebus-route-route-x9c7cr
    title: "Maokong Left (Zhinan Temple) route schedule"
    titleOriginal: "貓空左線(指南宮)班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0162002100
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 貓空左線(指南宮) under 其他 (通勤公車、內科專車、南軟專車與其他).[^ebus-special]
The normalized TDX record retains 2 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “貓空纜車站 - 貓纜指南宮站”, the current head/last-departure field “[平日] 0900 - 1720 [假日] 1320 - 1550”, fare “一段票”.[^ebus-route-route-x9c7cr]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus]
