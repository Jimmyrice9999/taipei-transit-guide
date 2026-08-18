---
title: R7Shuttle / 紅7區
summary: Red-line feeder route R7Shuttle (紅7區).
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
    note: Lists 紅7區 under 捷運紅線接駁公車.
  - id: ebus-r7-shuttle
    title: R7Shuttle route schedule
    titleOriginal: 紅7區班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111000720
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 社子–捷運劍潭站 corridor, weekday/holiday service spans, headway notes, late fixed workings, 陽明戲院 stop note, one-section fare and 首都客運社子站 contact.
---

## Classification and corridor

The official catalogue lists 紅7區 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 社子 - 捷運劍潭站, weekday and holiday service 0540–2350, one-section fare and 首都客運社子站 as the service contact.[^ebus-r7-shuttle] The page records weekday peak/off-peak intervals of 10/20 minutes and holiday intervals of 15–20 minutes, with fixed departures after 22:00; it also limits the 陽明戲院 stop toward 捷運劍潭站 to departures before 11:00.[^ebus-r7-shuttle]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
