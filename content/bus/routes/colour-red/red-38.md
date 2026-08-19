---
title: R38 / 紅38
summary: Red-line feeder route R38 (紅38).
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
    note: Lists 紅38 under 捷運紅線接駁公車.
  - id: ebus-r38
    title: R38 route schedule
    titleOriginal: 紅38班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0411003800
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 淡海新市鎮–捷運淡水站 corridor, weekday/holiday service spans, headway notes, one-section fare and 淡水客運新市站 contact.
---

## Classification and corridor

The official catalogue lists 紅38 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 淡海新市鎮 - 捷運淡水站, weekday and holiday service 0550–0000, one-section fare and 淡水客運新市站 as the service contact. It records weekday peak/off-peak headways of 8–12/12–20 minutes, holiday peak/off-peak headways of 15/20 minutes, and 20–30 minute service after 22:00.[^ebus-r38]

The confirmed stop sequence runs from 新市站, past 勤家捷奏社區/龍騰區/鳳翔區,
through 理想家社區/淡海國小/新市二路二段, along 輕軌台北海洋大學站/大庄/大庄福德廟/
行忠宮, then past 真理大學/淡江中學/農會新興分部, ending at 捷運淡水站.[^tdx-bus]
Four confirmed interchanges are recorded in the curated stop-ID join set:
Tamsui (R28), Binhai Shalun (V09), Danhai New Town (V10) and Taipei
University of Marine Technology (V28).[^tdx-bus] The route runs a single
subroute under one operator, 淡水客運.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅38 was found
in this search, nor a stated reason for pairing 新市站 with 捷運淡水站 across a
corridor that overlaps considerably with siblings 紅37 and 紅51. No
predecessor-route or renumbering history for 紅38 was located either, nor
a stated reason for confirming only four interchanges despite the
corridor's own dense Danhai LRT proximity throughout.[^tdx-bus]
