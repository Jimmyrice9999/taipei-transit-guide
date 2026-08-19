---
title: "Xinzhuang-Taipei Main Sta. / 新莊-臺北車站"
summary: "Unclassified route identities: Xinzhuang-Taipei Main Sta. (新莊-臺北車站)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "Unclassified route identity (classification TBC)"
    source: ebus-unclassified
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
  - id: ebus-unclassified
    title: "Taipei/New Taipei bus route catalogue"
    titleOriginal: "大臺北公車"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/ebus?ct=tpc
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official catalogue was fetched and read; it lists this route under official catalogue service labels and its route-id link where a separate entry exists."
  - id: ebus-route-route-v9sv0g
    title: "Xinzhuang-Taipei Main Sta. route schedule"
    titleOriginal: "新莊-臺北車站班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0163000000
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 新莊-臺北車站 under the service label 跳蛙. That label is recorded as evidence, but it does not map this identity to an existing canonical group, so the route remains unclassified rather than being forced into one.[^ebus-unclassified]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “新莊 - 臺北車站”, the current head/last-departure field “[平日] 0650 - 0650 [假日] 停駛”, fare “二段票”.[^ebus-route-route-v9sv0g] It currently lists weekday service and suspended holiday service.[^ebus-route-route-v9sv0g]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus]
