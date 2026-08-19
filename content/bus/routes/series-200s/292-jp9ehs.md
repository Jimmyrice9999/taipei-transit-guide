---
title: "292 / 292"
summary: "200-series route: 292 (292)."
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
  - id: ebus-route-292-jp9ehs
    title: "292 route schedule"
    titleOriginal: "292班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100029200
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 292 under 一般公車 (一般公車).[^ebus-general]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “二重 - 捷運麟光站”, the current head/last-departure field “[平日] 0520 - 2230 [假日] 0550 - 2230”, fare “兩段票”.[^ebus-route-292-jp9ehs]

The confirmed stop sequence runs from 二重站, past 仙公廟/三重商工/三重
稅捐分處, through 捷運菜寮站/捷運台北橋站/成淵高中, along 捷運中山站(志
仁高中)/南京林森路口/捷運松江南京站, through 南京龍江路口/捷運南京復興
站/仁愛敦化路口, ending at 吳興街口/三興國小(臨江街觀光夜市)/喬治商職/
富陽街口/捷運麟光站.[^tdx-bus] Ten confirmed interchanges are recorded
in the curated stop-ID join set, the same list confirmed for its own
narrower-hours sibling 292副: Zhongxiao Dunhua, Linguang, Liuzhangli,
Nanjing Fuxing, Zhongshan, Songjiang Nanjing, Minquan W. Rd., Taipei
Bridge, Cailiao and Xinyi Anhe.[^tdx-bus] The route runs a single
subroute under one operator, 首都客運, with a slightly earlier weekday
start than its own holiday span.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for pairing 二重 with 捷運麟光站 specifically as the route's own termini was found in this search, nor for the fare remaining a flat two-section rate over the whole confirmed corridor.
