---
title: BL20 Shuttle / 藍20
summary: Blue-line feeder route BL20 Shuttle (藍20).
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
    note: Lists 藍20 under 捷運藍線接駁公車.
  - id: ebus-bl20
    title: BL20 Shuttle route schedule
    titleOriginal: 藍20班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0112002020
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 南港車站–捷運劍南路站 corridor, service span, fare, the 三軍總醫院內湖 bypass note and operator contact.
---

## Classification and corridor

The official catalogue lists 藍20 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 南港車站 - 捷運劍南路站, weekday service 0600–2200, holiday service 0630–2200, one-section fare and 光華巴士東湖站 as the service contact. It records that some departures bypass 三軍總醫院內湖.[^ebus-bl20]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and the bypass's creation date and rationale remain TBC.[^tdx-bus]
