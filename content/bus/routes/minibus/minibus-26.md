---
title: "S26 / 小26"
summary: "Minibus and community route: S26 (小26)."
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
  - id: ebus-route-minibus-26
    title: "S26 route schedule"
    titleOriginal: "小26班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151002600
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小26 under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “北投 - 頂湖”, the current head/last-departure field “[平日] 0530 - 2230 [假日] 0530 - 2230”, fare “一段票”.[^ebus-route-minibus-26]

The confirmed stop sequence runs from 致遠新村, past 稻香圖書館/復興崗/文化
國小/幼華高中(大業), through 捷運北投站(北投)/北投國小/第一銀行/北投公園,
along 新北投/華僑會館/雅敘園/源之鄉/郵政訓練所/八勝園/上北投/泉源別墅/彌陀
寺(硫磺谷)/大同之家/十八份福德宮/十八份/泉源國小/泉源國小宿舍/紅柿下/無尾
崙/風尾/頂湖活動中心, ending at 頂湖.[^tdx-bus] Two confirmed interchanges
are recorded in the curated stop-ID join set: Beitou (R22) and
Xinbeitou (R22A), both confirmed along the route's own starting
stretch, the same pair confirmed for the neighbouring 小6, 小7 and 小9
family over an overlapping Beitou-area corridor.[^tdx-bus] The route
runs a single subroute under one operator, 大南汽車.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for terminating at 頂湖 rather than continuing further up the same hillside as the neighbouring 小8 and 小9, both of which extend past 頂湖 into Yangmingshan itself, was found in this search.
