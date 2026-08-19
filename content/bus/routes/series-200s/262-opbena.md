---
title: "262 / 262"
summary: "200-series route: 262 (262)."
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
  - id: ebus-route-262-opbena
    title: "262 route schedule"
    titleOriginal: "262班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100026200
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 262 under 一般公車 (一般公車).[^ebus-general]
The normalized TDX record retains 2 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “宏國德霖科技大學 - 民生社區”, the current head/last-departure field “[平日] 0530 - 2130 [假日] 0600 - 2310”, fare “兩段票”.[^ebus-route-262-opbena]

At up to 77 stops, the confirmed stop sequence is among the longest
in this batch, running from 宏國德霖科技大學 in Tucheng, past 清水/土城
看守所/中正國中, through 中和高中/中和保養廠/捷運中和站, along 中興新村/
捷運頂溪站/重慶南路三段(中正橋), through 臺北車站(忠孝)/捷運忠孝敦化站/
臺北小巨蛋, ending at 民生社區.[^tdx-bus] Eleven confirmed interchanges
are recorded in the curated stop-ID join set, one more than its own
shuttle sibling 262區: Ximen, Taipei Main Station, Shandao Temple,
Zhongxiao Xinsheng, Zhongxiao Fuxing, Songshan Airport, Xiaonanmen,
Jingan, Dingxi, Zhonghe and Qiaohe.[^tdx-bus] TDX records only two
named direction/variant records, both half-trip workings (去程半/
返程半), with a longer published holiday span than its own weekday
one.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for the route's own longer holiday span against a shorter weekday one, the reverse of the usual pattern in this batch, was found in this search.
