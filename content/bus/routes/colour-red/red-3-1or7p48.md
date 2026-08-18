---
title: R3 / 紅3
summary: Red-line feeder route R3 (紅3).
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
    note: Lists 紅3 under 捷運紅線接駁公車.
  - id: ebus-r3
    title: R3 route schedule
    titleOriginal: 紅3班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111000300
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 社子–台北花市 corridor, weekday suspension, the single 10:30 Saturday service, two-section fare, 陽明高中–劍潭 buffer and 光華巴士洲美站 contact.
---

## Classification and corridor

The official catalogue lists 紅3 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 社子 - 台北花市, weekdays suspended, a single 10:30 Saturday service, two-section fare, the 陽明高中–劍潭 buffer and 光華巴士洲美站 as the service contact. The page also says Sundays, national holidays, make-up days and typhoon closure days are suspended.[^ebus-r3]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
