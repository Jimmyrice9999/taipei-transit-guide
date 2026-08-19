---
title: "605Express / 605快"
summary: "600-series route: 605Express (605快)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "600-series numbered service (一般公車)"
    source: ebus-general
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
  - id: ebus-general
    title: "Taipei/New Taipei bus route catalogue"
    titleOriginal: "大臺北公車"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/ebus?ct=tpc
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official catalogue was fetched and read; it lists this route under 一般公車 and its route-id link where a separate entry exists."
  - id: ebus-route-605-nsoxuq
    title: "605Express route schedule"
    titleOriginal: "605快班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100060550
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 605快 under 一般公車 (一般公車).[^ebus-general]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “汐止 - 臺北車站”, the current head/last-departure field “[平日] 0630 - 1800 [假日] 停駛”, fare “兩段票”.[^ebus-route-605-nsoxuq] It currently lists weekday service and suspended holiday service.[^ebus-route-605-nsoxuq]

The confirmed stop sequence runs from 東方山河社區, past 國泰醫院/汐止/潭美公園/南京舊宗路口, through a run of 南京東路 stops from 南京公寓 to 捷運中山站, along 圓環(南京)/圓環(重慶)/後車站, ending at 臺北車站/行政院/中山市場, a different corridor from the rest of the 605 family, which routes via 忠孝東路 and 南港 instead.[^tdx-bus] Five confirmed interchanges are recorded in the curated stop-ID join set, none shared with its own siblings: Taipei Main Station (BL12), Nanjing Fuxing (BR11/G16), Zhongshan (G14/R11), Songjiang Nanjing (G15/O08) and Nanjing Sanmin (G18).[^tdx-bus] The route runs a single subroute under one operator, 中興巴士, weekdays only with holiday service suspended entirely.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for this route's own 南京東路 corridor sharing no confirmed interchange with the rest of the 605 family, despite carrying the same route number and both termini, was found in this search.
