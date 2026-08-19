---
title: "S9 / 小9(台灣好行-北投竹子湖)"
summary: "Minibus and community route: S9 (小9(台灣好行-北投竹子湖))."
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
  - id: ebus-route-minibus-9-yjn69t
    title: "S9 route schedule"
    titleOriginal: "小9(台灣好行-北投竹子湖)班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151000900
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小9(台灣好行-北投竹子湖) under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “北投 - 竹子湖”, the current head/last-departure field “[平日] 0520 - 2250 [假日] 0520 - 2250”, fare “兩段票”.[^ebus-route-minibus-9-yjn69t]

At 55 stops outbound and 48 back, the confirmed stop sequence is the
second-longest of any minibus route in this batch, after only the
separate 小8, running from 致遠新村, past 捷運北投站(北投)/新北投/新民國
中/國軍北投醫院/彌陀寺(硫磺谷)/大同之家/十八份福德宮/十八份/泉源國小/頂
湖, up into Yangmingshan itself past 陽明公園服務中心/陽明山立體停車場/陽
明山/陽明山國家公園管理處/氣象台/陽明書屋, ending at 竹子湖.[^tdx-bus] Two
confirmed interchanges are recorded in the curated stop-ID join set:
Beitou (R22) and Xinbeitou (R22A), the same pair confirmed for the
shorter shuttle sibling 小9區.[^tdx-bus] The route runs a single
subroute under one operator, 大南汽車, branded as a 台灣好行 (Taiwan
Tourist Shuttle) service on a two-stage fare.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for this route's own two-stage fare and Taiwan Tourist Shuttle branding, distinct from the plain minibus classification and one-stage fare of most routes in this batch, was found in this search.
