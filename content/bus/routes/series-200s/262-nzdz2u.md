---
title: "262Shuttle / 262區"
summary: "200-series route: 262Shuttle (262區)."
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
  - id: ebus-route-262-nzdz2u
    title: "262Shuttle route schedule"
    titleOriginal: "262區班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100026220
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 262區 under 一般公車 (一般公車).[^ebus-general]
The normalized TDX record retains 4 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “中和 - 民生社區”, the current head/last-departure field “[平日] 0500 - 2220 [假日] 0515 - 2200”, fare “兩段票”.[^ebus-route-262-nzdz2u]

The confirmed stop sequence runs from 中和保養廠, past 捷運中和站/捷運
景安站/中和教會, through 中興新村/永和國小/捷運頂溪站, along 重慶南路三
段(中正橋)/臺北郵局/臺北車站(忠孝), through 捷運善導寺站/捷運忠孝敦化站/
臺北小巨蛋, ending at 民生社區's own 民生社區活動中心/塔悠疏散門.[^tdx-bus] Ten confirmed interchanges are recorded in the curated
stop-ID join set: Ximen, Taipei Main Station, Shandao Temple,
Zhongxiao Xinsheng, Zhongxiao Fuxing, Songshan Airport, Xiaonanmen,
Jingan, Dingxi and Zhonghe.[^tdx-bus] TDX records four named
direction/variant records, including a pet-friendly working (狗狗
公車) alongside the plain corridor and its two directional short-turns.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for the route's own shorter weekday span against a slightly narrower holiday one was found in this search, nor a stated reason for pairing 中和 with 民生社區 specifically as the route's own termini.
