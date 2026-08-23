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

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for R23; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**R23 (48 stops):** Sanchong Bus Tamsui Sta -> Hungsheng Water Palace Community -> Hongpu Community -> Ideal Home Community(Xinshi 2nd Rd) -> Danhai Elementary School -> Xinshi 2nd Rd Sec 2 -> Shalun & Binhai Intersection -> FU LI HE Community -> LRT Taipei University of Marine Technology Sta -> Dazhuang -> Meirenyu Community -> Danhai & Zhongzheng Intersection -> Danhai -> DanHai Community Activity Center -> Dahewenming -> Green Avenue -> Tiansheng Community -> Xingzhong Temple -> Taibeiwan Community -> Gaoerfu village -> Xinchun & Xinmin Intersection -> Xinchun St -> DongyuGardenCity -> California community -> Chengbao Garden -> Motian 31 -> Mifenliao -> Shuiduizi -> Zhengde Junior High School -> TPC Dormitory -> Fude Temple -> Beixin Rd Entrance -> Taiwan Water Company -> Tamkang University -> Zhongai St Entrance -> Gas Station -> LRT Ganzhenlin Sta -> ShanHaiDaDi -> Bashi 1st St -> MRT Hongshulin Sta -> Bashi Village -> Zhuwei Elementary School -> Nursing Home -> Mackay Memorial Hospital -> MRT Zhuwei Station -> Xucuo -> Guandu -> Tzuchi Humantarian Center[^tdx-bus]

**R23 (48 stops):** Ligong St -> Guandu -> Xucuo -> MRT Zhuwei Station -> Mackay Memorial Hospital -> Minquan Rd3 Lane Entrance -> Senior Home -> Zhuwei Elementary School -> Bashi Village -> MRT Hongshulin Sta -> Bashi 1st St -> Ganzhenlin -> ShanHaiDaDi -> LRT Ganzhenlin Sta -> Gas Sta -> Zhongai St Entrance -> Tamkang University -> Fude Temple -> TPC Dormitory -> Zhengde Junior High School -> Shuiduizi -> Mifenliao -> Motian 31 -> Chengbao Garden -> California community -> Dongyu Garden City -> Xinchun St -> Xinchun & Xinmin Intersection -> Gaoerfu village -> Taibeiwan Community -> Xingzhong Temple -> Tiansheng Community -> Green Avenue -> Dahe Wenming -> DanHai Community Activity Center -> DanHai -> Danhai & Zhongzheng Intersection -> Meirenyu Community -> Dazhuang -> LRT Taipei University of Marine Technology Sta -> FU LI HE Community -> Shalun & Binhai Intersection -> Xinshi 2nd Rd Sec 2 -> Danhai Elementary School -> Ideal Home Community(Xinshi 2nd Rd) -> Hongpu Community -> Hungsheng Water Palace Community -> Sanchong Bus Tamsui Sta[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅23 was found
in this search.[^tdx-bus] A headway-by-day-type figure is likewise absent from the
primary schedule page beyond its own near-24-hour, 0550–0000 weekday and
holiday span statement.[^ebus-r23] No predecessor-route or renumbering history for
紅23 was located either, nor a stated reason for the corridor's own dense
Danhai LRT interchange count relative to its shorter siblings elsewhere in
this batch.[^tdx-bus]
