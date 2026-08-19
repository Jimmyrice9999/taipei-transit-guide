---
title: BL29 / 藍29
summary: Blue-line feeder route BL29 (藍29).
updated: 2026-08-19
line: BL
facts:
  - label: Service class
    value: MRT blue-line feeder
    source: ebus-blue
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
    title: TDX bus data
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field.
  - id: ebus-blue
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 藍29 under 捷運藍線接駁公車.
  - id: ebus-bl29
    title: BL29 route schedule
    titleOriginal: 藍29班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0112002900
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 東園–聯合醫院中興院區 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍29 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 東園 - 聯合醫院中興院區, weekday and holiday service 0600–0000, one-section fare and 欣欣客運華江站 as the service contact.[^ebus-bl29]

The confirmed stop sequence runs from 東園 through 光仁國小/青年路/中正新城,
past 青年公園 and 古亭國中/萬華醫院, along 西藏路/萬大路past 萬華車站, then on the
return working through 捷運北門站/萬華運動中心/捷運西門站/小南門/龍山寺(康定) before
ending at 聯合醫院中興院區.[^tdx-bus] Three confirmed interchanges are
recorded in the curated stop-ID join set: Longshan Temple (BL10), Ximen — a
Bannan–Songshan/Xindian interchange (BL11/G12) — and Beimen (G13).[^tdx-bus]
The route runs a single subroute under one operator, 欣欣客運, the same
company that runs neighbouring 藍28.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length and a headway-by-day-type figure also remain TBC, and no
dated history for 藍29, nor a stated reason for its own near-24-hour
0600–0000 span, close to but not identical with neighbouring 藍28's
0550–0000, was found in this search. Whether 藍28 and 藍29, run by the same
operator with near-identical spans and both terminating near 東園, were
introduced together as a pair or grew independently over time is likewise
not established in this search.
