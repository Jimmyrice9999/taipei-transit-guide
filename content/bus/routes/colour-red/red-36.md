---
title: R36 / 紅36
summary: Red-line feeder route R36 (紅36).
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
    note: Lists 紅36 under 捷運紅線接駁公車.
  - id: ebus-r36
    title: R36 route and stop information
    titleOriginal: 紅36路線資訊
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/StopsOfRoute?routeid=0411003600
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official route-and-stop page listing the current 新春街–捷運淡水站 corridor, weekday/holiday service spans, headway notes, one-section fare and 淡水客運淡水站 contact.
---

## Classification and corridor

The official catalogue lists 紅36 under 捷運紅線接駁公車.[^ebus-red] Its full route-and-stop page gives 新春街 - 捷運淡水站, weekday and holiday service 0600–0000, one-section fare and 淡水客運淡水站 as the service contact. It records weekday peak headways of 5–8 minutes, weekday off-peak headways of 10–15 minutes, 15–20 minutes after 22:00, and holiday peak/off-peak headways of 15/20 minutes.[^ebus-r36]

The confirmed stop sequence runs from 東宇花園城, past 加州社區/城堡花園/摩天31/
米粉寮, through 新興街/書香大地/登星豪景/淡江中學, along 農會新興分部/海景園中園/
淡水新城, ending at 捷運淡水站.[^tdx-bus] One confirmed interchange is
recorded in the curated stop-ID join set: Tamsui (R28), matching the
route's own terminus.[^tdx-bus] TDX records three named subroutes, 紅36,
紅36東宇花園城 and 紅36捷運淡水站, apparently distinguishing directional
terminus labels rather than corridor variants.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅36 was found
in this search, nor a stated reason for three subroutes carrying near-
identical names distinguished only by direction rather than an actual
corridor difference. No predecessor-route or renumbering history for 紅36
was located either, nor a stated reason for its own dense weekday peak
headway, 5–8 minutes, among the tightest published in this batch.[^tdx-bus]
