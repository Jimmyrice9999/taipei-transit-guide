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
沙崙/崑崙里, then past 捷運亞東醫院站/南雅站, ending at 捷運府中站/新北板橋公車站.[^tdx-bus] Three confirmed interchanges are recorded in the curated
stop-ID join set: Far Eastern Hospital (BL05), Fuzhong (BL06) and Banqiao
(BL07).[^tdx-bus] The route runs a single subroute under one operator,
三重客運, with peak headways of 10 minutes, off-peak 15–20 minutes, and a
30-minute headway after 22:30.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for BL38; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BL38 (31 stops):** Dongsheng Park -> Zhongshan & Beiqian St Intersection -> Wunhua St 2 -> Wenhua St Entrance -> Shuxing Village -> Shu Jen High School of Home Economics & Commerce -> SanDong Textile Factory -> Zhongshan Rd Entrance -> Shulin Train Station Rear -> Yuying St Entrance(Catholic Church) -> ShuLin Renai Hospital -> Zhongshan & Beiqian St Intersection -> Dongsheng Park -> Dongsheng Fude Temple -> Dongshan Village -> Dongrong St Entrance -> Datong Elementary School -> Heping St Entrance -> Shulin High School -> Duxing Rd Sec 3 -> XiFu Village -> Shalun Elementary School(Duxing Rd) -> Kunlun Village -> Shalun Village -> Oriental University of Science & Technology(Nanya S Rd) -> MRT Far Eastern Hospital Station -> Kwang-Hwa Vocational High School -> Banqiao Night Market (Xianmin Blvd) -> Guanqian W Rd Entrance -> MRT Fuzhong Station -> Wanping Park[^tdx-bus]

**BL38 (30 stops):** NTPC Banqiao Bus Station -> MRT Fuzhong Sta -> Guanqian W Rd Entrance -> Banqiao Night Market (Xianmin Blvd) -> Kwang-Hwa Vocational High School -> MRT Far Eastern Hospital Station -> Oriental University of Science & Technology(Nanya S Rd) -> Nanya Stop -> Shalun Village -> Kunlun Village -> Shalun Elementary School(Duxing Rd) -> XiFu Village -> Duxing Rd Sec 3 -> Shulin High School -> Heping St Entrance -> Datong Elementary School -> Dongrong St Entrance -> Dongshan Village -> Dongsheng Fude Temple -> Dongsheng Park -> Zhongshan & Beiqian St Intersection -> ShuLin Renai Hospital -> Yuying St Entrance(Catholic Church) -> Shulin Train Station Rear -> Zhongshan Rd Entrance -> Sandong Textile Factory -> Shu Jen High School of Home Economics & Commerce -> Shuxing Village -> Wunhua St 1 -> Wunhua St 2[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 藍38 or a
stated reason for pairing 樹林 with 板橋公車站 was found in this search.[^ebus-bl38]
No predecessor-route or renumbering history for 藍38 specifically was
located, unlike several joint-operation-numbered routes elsewhere in this
project's coverage, most of which carry at least a documented Wikiversity
lead even where uncorroborated against a primary announcement.[^tdx-bus]
