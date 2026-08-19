---
title: R5 / 紅5
summary: Red-line feeder route R5 (紅5).
updated: 2026-08-18
line: R
facts:
  - label: Service class
    value: MRT red-line feeder
    source: ebus-red
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
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field.
  - id: ebus-red
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Lists 紅5 under 捷運紅線接駁公車.
  - id: ebus-r5
    title: R5 route and stop information
    titleOriginal: 紅5路線資訊
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/StopsOfRoute?routeid=0111000500
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official route-and-stop page listing the current 陽明山–捷運劍潭站 corridor, weekday/holiday service spans, headway notes, one-section fare, 大都會客運陽明山站 contact and current 文化大學 workings.
---

## Classification and corridor

The official catalogue lists 紅5 under 捷運紅線接駁公車.[^ebus-red] Its full route-and-stop page gives 陽明山 - 捷運劍潭站, weekday and holiday service 0530–2330, one-section fare and 大都會客運陽明山站 as the service contact.[^ebus-r5] It records weekday peak/off-peak headways of 4–8/12–15 minutes and holiday peak/off-peak headways of 12–15/12–15 minutes.[^ebus-r5] The page also records culture-university detours for specified weekday trips, with those detours excluded on holidays and during winter and summer vacations.[^ebus-r5]

At 33-36 stops each way, the confirmed stop sequence climbs from 陽明山
總站, past 中山樓/教師中心/文化大學/山仔后派出所, through 明德新村/陽明山國小/陽明
教養院, along 永福(林語堂故居)/嶺頭/華興中學/岩山里, then descends past 泰北中學/
士林官邸, ending near 捷運劍潭站.[^tdx-bus] Two confirmed interchanges are
recorded in the curated stop-ID join set: Jiantan (R15) and Shilin
(R16).[^tdx-bus] TDX records five named subroutes distinguishing the
文化大學-detour and 陽明山/劍潭-direction workings.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅5 was found in
this search, nor a stated reason for confirming only two interchanges
despite the corridor's long climb through 陽明山's own network of hillside
communities. No predecessor-route or renumbering history for 紅5 was
located either, nor a stated reason for the 陽明山總站 terminus rather than
one of its own confirmed MRT interchanges.
