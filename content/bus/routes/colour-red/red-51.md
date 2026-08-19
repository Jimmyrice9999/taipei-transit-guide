---
title: R51 / 紅51
summary: Red-line feeder route R51 (紅51).
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
    note: Lists 紅51 under 捷運紅線接駁公車.
  - id: ebus-r51
    title: R51 route schedule
    titleOriginal: 紅51班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0411005100
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 淡海新市鎮–捷運淡水站 corridor, weekday/holiday service spans, headway notes, one-section fare and 淡水客運淡水站 contact.
---

## Classification and corridor

The official catalogue lists 紅51 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 淡海新市鎮 - 捷運淡水站, weekday and holiday service 0530–2230, one-section fare and 淡水客運淡水站 as the service contact. It records weekday peak/off-peak headways of 15–30/30–60 minutes and holiday peak/off-peak headways of 30/60 minutes.[^ebus-r51]

The confirmed stop sequence runs from 新市站, past 勤家捷奏社區/龍騰區/海洋都心
社區/海都廣場, through 義山新市二路口/濱海義山路口/躍淡水社區, along 合康嘉年華社
區/星海別墅/歡喜天地/觀海社區, then past 行忠宮/高爾夫山莊/真理大學/淡江中學, ending
at 捷運淡水站.[^tdx-bus] Two confirmed interchanges are recorded in the
curated stop-ID join set: Tamsui (R28) and Binhai Yishan (V08).[^tdx-bus]
The route runs a single subroute under one operator, 淡水客運, with its
own notably wide headway bands — 15–60 minutes across the day —
compared with several other Tamsui-area routes in this batch.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅51 was found
in this search, nor a stated reason for its own wide headway bands over a
corridor as densely residential as the one it serves. No predecessor-
route or renumbering history for 紅51 was located either, nor a stated
reason for pairing 新市站 with 捷運淡水站 across a corridor overlapping
several other 淡水客運 routes elsewhere in this batch.[^tdx-bus]
