---
title: "286 / 286"
summary: "200-series route: 286 (286)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "200-series numbered service (一般公車)"
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
  - id: ebus-route-286-jcjndl
    title: "286 route schedule"
    titleOriginal: "286班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100028600
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 286 under 一般公車 (一般公車).[^ebus-general]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “南港花園社區 - 松山車站”, the current head/last-departure field “[平日] 0630 - 2100 [假日] 0630 - 2100”, fare “一段票”.[^ebus-route-286-jcjndl]

The confirmed stop sequence runs from 成福站, past 南港花園社區's own
numbered blocks (二/一/五/四/三), through 成福宮/成福路口/福德國小, along
捷運廣慈奉天宮站/信義行政中心/松山商職, through 捷運永春站(松山)/雙永
國小/永吉松山路口, ending at 松山車站.[^tdx-bus] Two confirmed
interchanges are recorded in the curated stop-ID join set: Yongchun
and Songshan.[^tdx-bus] The route runs a single subroute under one
operator, 大都會客運, over a shorter corridor than its own express
sibling 286副, which continues past this stretch to 行天宮.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for pairing 南港花園社區 with 松山車站 specifically as the route's own termini was found in this search, nor a stated reason for the route confirming far fewer interchanges than its own express sibling 286副.
