---
title: BL38 / 藍38
summary: Blue-line feeder route BL38 (藍38).
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
    note: Lists 藍38 under 捷運藍線接駁公車.
  - id: ebus-bl38
    title: BL38 route schedule
    titleOriginal: 藍38班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412003800
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 樹林–板橋公車站 corridor, service span, fare, headway and operator contact.
---

## Classification and corridor

The official catalogue lists 藍38 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 樹林 - 板橋公車站, weekday and holiday service 0520–0000, one-section fare, peak headways of 10 minutes, off-peak headways of 15–20 minutes, 30-minute service after 22:30, and 三重客運樹林站 as the service contact.[^ebus-bl38]

The confirmed stop sequence runs from 東昇公園 in 樹林, past 樹興里/樹人家商/
三東紡織/樹林後火車站, through 東昇福德宮/東山里/東榮街口/大同國小/樹林中學, into
沙崙/崑崙里, then past 捷運亞東醫院站/南雅站, ending at 捷運府中站/新北板橋公車站.
[^tdx-bus] Three confirmed interchanges are recorded in the curated
stop-ID join set: Far Eastern Hospital (BL05), Fuzhong (BL06) and Banqiao
(BL07).[^tdx-bus] The route runs a single subroute under one operator,
三重客運, with peak headways of 10 minutes, off-peak 15–20 minutes, and a
30-minute headway after 22:30.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 藍38 or a
stated reason for pairing 樹林 with 板橋公車站 was found in this search.[^ebus-bl38]
No predecessor-route or renumbering history for 藍38 specifically was
located, unlike several joint-operation-numbered routes elsewhere in this
project's coverage, most of which carry a documented Wikiversity lead even
where uncorroborated against a primary announcement.
