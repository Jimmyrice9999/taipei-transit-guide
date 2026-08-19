---
title: "S8 / 小8"
summary: "Minibus and community route: S8 (小8)."
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
  - id: ebus-route-minibus-8-1keuami
    title: "S8 route schedule"
    titleOriginal: "小8班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151000800
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小8 under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “捷運石牌站 - 竹子湖”, the current head/last-departure field “[平日] 0540 - 1900 [假日] 0540 - 2000”, fare “兩段票”.[^ebus-route-minibus-8-1keuami]

At 54 stops outbound and 49 back, the confirmed stop sequence is the
longest of any minibus route in this batch, running from 捷運石牌站
(東華), past 榮總/五福宮/磺溪/明山宮/永和里/行義路154巷至402巷/惇敘工商(行
義), through 大同之家/十八份福德宮/泉源國小/頂湖, up into Yangmingshan
itself past 陽明公園服務中心/陽明山立體停車場/陽明山/陽明山國家公園管理處/
氣象台/陽明書屋, ending at 竹子湖.[^tdx-bus] One confirmed interchange is
recorded in the curated stop-ID join set: Shipai (R19), matching the
route's own terminus.[^tdx-bus] The route runs a single subroute under
one operator, 大南汽車, on a two-stage fare unlike most other single-
stage minibus routes in this batch.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for this route's own two-stage fare, distinct from the one-stage fare published for most other minibus routes in this batch, was found in this search.
