---
title: BL27 / 藍27
summary: Blue-line feeder route BL27 (藍27).
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
    note: Lists 藍27 under 捷運藍線接駁公車.
  - id: ebus-bl27
    title: BL27 route schedule
    titleOriginal: 藍27班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0112002700
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 內湖行政中心–捷運市政府站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍27 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 內湖行政中心 - 捷運市政府站, weekday and holiday service 0530–2300, one-section fare and 大南汽車內湖站 as the service contact.[^ebus-bl27]

The confirmed stop sequence runs from 行善行愛路口 in Neihu's 內湖科技園區,
past 三總內湖站/金龍寺, through 環山/西湖 and Neihu's own 瑞光 office corridor,
then along 民權大橋 into 三民/松山, ending at 捷運市政府站.[^tdx-bus] Three
confirmed interchanges are recorded in the curated stop-ID join set: Taipei
City Hall (BL18), Xihu (BR16) and Neihu (BR19).[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] TDX records three named subroutes — 藍27, 藍27(僅往程) and 藍27(僅返程).[^tdx-bus]
Their exact scheduling difference from the main working, including whether
the outbound-only and return-only workings run at specific times of day or
only under particular traffic or event conditions, was not found in this
search — neither the schedule page nor the TDX record states a rule for
when each applies. The route
length and a headway-by-day-type figure also remain TBC beyond the
schedule page's own weekday/holiday span, and no dated history for the
route or a stated reason for its 內湖行政中心 origin, rather than a nearby
MRT station, was found in this search.
