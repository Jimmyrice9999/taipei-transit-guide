---
title: "260Shuttle / 260區"
summary: "200-series route: 260Shuttle (260區)."
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
  - id: ebus-route-260-gxeeg4
    title: "260Shuttle route schedule"
    titleOriginal: "260區班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100026020
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 260區 under 一般公車 (一般公車).[^ebus-general]
The normalized TDX record retains 4 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “陽明山 - 臺北車站”, the current head/last-departure field “[平日] 0545 - 2200 [假日] 0545 - 2200”, fare “兩段票”.[^ebus-route-260-gxeeg4]

The confirmed stop sequence runs from 陽明山總站, on some workings via
第一停車場(花鐘), past 中山樓/教師中心/陽明山國小, through 嶺頭/岩山里/士林
官邸(中山), along 捷運士林站/捷運劍潭站/臺北市立美術館, ending at 國賓
飯店/中山市場/行政院/臺北車站(忠孝), a shorter run than the separate 260,
which continues past this stretch to 東園.[^tdx-bus] Three confirmed
interchanges are recorded in the curated stop-ID join set: Taipei
Main Station, Jiantan and Shilin.[^tdx-bus] TDX records four named
direction/variant records distinguishing whether a working detours
via 花鐘 (Flower Clock) and whether it runs as a reservation-based
(預約) service.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for pairing 陽明山 with 臺北車站 specifically as the route's own termini was found in this search.
