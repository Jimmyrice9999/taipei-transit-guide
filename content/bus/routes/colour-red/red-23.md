---
title: R23 / 紅23
summary: Red-line feeder route R23 (紅23).
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
    note: Lists 紅23 under 捷運紅線接駁公車.
  - id: ebus-r23
    title: R23 route schedule
    titleOriginal: 紅23班表
    publisher: New Taipei City Public Transportation Office (新北市政府交通局)
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0411002300
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 淡水–關渡 corridor, service span, one-section fare and 三重客運淡水站 contact.
---

## Classification and corridor

The official catalogue lists 紅23 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 淡水 - 關渡, weekday and holiday service 0550–0000, one-section fare and 三重客運淡水站 as the service contact.[^ebus-r23]

At 48 stops each way, the confirmed stop sequence is among the longest in
this batch: from 三重客運淡水站, along 淡海's 新市二路/沙崙濱海路口, past
輕軌台北海洋大學站, through 淡海市民活動中心/行忠宮, along 中正東路 past 輕軌淡江
大學站/輕軌竿蓁林站/輕軌紅樹林站/捷運紅樹林站, into 竹圍's 安老所/馬偕醫院/捷運竹
圍站, ending at 慈濟志業中心 near 關渡.[^tdx-bus] This route runs roughly parallel to a long stretch of the Danhai Light
Rail by road, confirming eight interchanges: Zhuwei (R26), Hongshulin — a
Tamsui–Xinyi/Danhai LRT interchange (R27/V01) — Ganzhenlin (V02), Tamkang
University (V04), Danjin Beixin (V05), Binhai Shalun (V09), Danhai New
Town (V10) and Taipei University of Marine Technology (V28).[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅23 was found
in this search.[^tdx-bus] A headway-by-day-type figure is likewise absent from the
primary schedule page beyond its own near-24-hour, 0550–0000 weekday and
holiday span statement.[^ebus-r23] No predecessor-route or renumbering history for
紅23 was located either, nor a stated reason for the corridor's own dense
Danhai LRT interchange count relative to its shorter siblings elsewhere in
this batch.[^tdx-bus]
