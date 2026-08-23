---
title: BL37 / 藍37
summary: Blue-line feeder route BL37 (藍37).
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
    note: Lists 藍37 under 捷運藍線接駁公車.
  - id: ebus-bl37
    title: BL37 route schedule
    titleOriginal: 藍37班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412003700
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 龍壽里–捷運板橋站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍37 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 龍壽里 - 捷運板橋站, weekday service 0535–2345, holiday service 0600–2345, one-section fare and 三重客運迴龍站 as the service contact.[^ebus-bl37]

At 38 stops each way, the confirmed stop sequence is one of the longer
routes in this batch: from 龍壽里 near 迴龍, past 捷運迴龍站/丹鳳國小, through
福營國中/福祿新城/大唐江山, into 樹林's 圳福里/濟安宮/沙崙里, then past 捷運亞東醫院站/
南雅站, ending at 捷運府中站/新北板橋公車站.[^tdx-bus] Four confirmed
interchanges are recorded in the curated stop-ID join set: Far Eastern
Hospital (BL05), Fuzhong (BL06), Banqiao (BL07) and Huilong (O21).[^tdx-bus]
TDX records three named subroutes, matching the schedule page's own
龍壽里(車機) and 新北板橋公車站(車機) short-working labels.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for BL37; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BL37 (38 stops):** Longshou Village -> Daqing Lianzhuang -> Lunghwa University of Science and Technology -> Huilong Market -> Huilong Police Station -> MRT Huilong Station -> Danfeng Elementary School(New Taipei Blvd) -> Fengshan St Entrance -> Qingshan Rd Entrance -> Shuangfeng Fude Temple -> Danfeng Police Station -> Fuguo Rd Entrance -> Fuying Junior High School -> Minan Rd -> Minan Bridge -> Fulu New Village 2 -> Fulu New Village 1 -> Guanghua Elementary School(Minan W Rd) -> Guangming Village -> Xinbao Community -> Guanghua St Entrance -> Lane 403 Minan W Rd Intersection -> Datang Jiangshan -> Da An Transformer Substation (Xinshu Rd) -> Xucuo -> ZunFu Village -> Shisangong -> Shulin Arts Administration Building -> Jian Temple -> Shalun Elementary School -> Shalun Village -> Oriental University of Science & Technology(Nanya S Rd) -> MRT Far Eastern Hospital Station -> Kuang Hua Senior Commercial Vocational Continuation School -> Banqiao Night Market (Xianmin Blvd) -> Guanqian W Rd Entrance -> MRT Fuzhong Station -> Wanping Park[^tdx-bus]

**BL37 (38 stops):** NTPC Banqiao Bus Station -> MRT Fuzhong Sta -> Guanqian W Rd Entrance -> Banqiao Night Market (Xianmin Blvd) -> Kwang-Hwa Vocational High School -> MRT Far Eastern Hospital Station -> Oriental University of Science & Technology(Nanya S Rd) -> Nanya Stop -> Shalun Village -> Shalun Elementary School -> Jian Temple -> Shulin Arts Administration Building -> Shisangong -> ZunFu Village -> Xucuo -> Datang Jiangshan -> Lane 403 Minan W Rd Intersection -> Guanghua St Entrance -> Xinbao Community -> Guangming Village -> Guanghua Elementary School (Minan W Rd) -> Fulu New Village 1 -> Fulu New Village 2 -> Minan Bridge -> Minan Rd -> Fuying Junior High School -> Fuguo Rd Entrance -> Danfeng Police Station -> Shuangfeng Fude Temple -> Qingshan Rd Entrance -> Fengshan St Entrance -> Danfeng Elementary School -> MRT Huilong Station -> Huilong Police Station -> Huilong Superstore -> Lunghwa University of Science and Technology -> Daqing Lianzhuang -> Longshou Village[^tdx-bus]

**BL37 (38 stops):** Longshou Village -> Daqing Lianzhuang -> Lunghwa University of Science and Technology -> Huilong Market -> Huilong Police Station -> MRT Huilong Station -> Danfeng Elementary School(New Taipei Blvd) -> Fengshan St Entrance -> Qingshan Rd Entrance -> Shuangfeng Fude Temple -> Danfeng Police Station -> Fuguo Rd Entrance -> Fuying Junior High School -> Minan Rd -> Minan Bridge -> Fulu New Village 2 -> Fulu New Village 1 -> Guanghua Elementary School(Minan W Rd) -> Guangming Village -> Xinbao Community -> Guanghua St Entrance -> Lane 403 Minan W Rd Intersection -> Datang Jiangshan -> Da An Transformer Substation (Xinshu Rd) -> Xucuo -> ZunFu Village -> Shisangong -> Shulin Arts Administration Building -> Jian Temple -> Shalun Elementary School -> Shalun Village -> Oriental University of Science & Technology(Nanya S Rd) -> MRT Far Eastern Hospital Station -> Kuang Hua Senior Commercial Vocational Continuation School -> Banqiao Night Market (Xianmin Blvd) -> Guanqian W Rd Entrance -> MRT Fuzhong Station -> Wanping Park[^tdx-bus]

**BL37 (38 stops):** NTPC Banqiao Bus Station -> MRT Fuzhong Sta -> Guanqian W Rd Entrance -> Banqiao Night Market (Xianmin Blvd) -> Kwang-Hwa Vocational High School -> MRT Far Eastern Hospital Station -> Oriental University of Science & Technology(Nanya S Rd) -> Nanya Stop -> Shalun Village -> Shalun Elementary School -> Jian Temple -> Shulin Arts Administration Building -> Shisangong -> ZunFu Village -> Xucuo -> Datang Jiangshan -> Lane 403 Minan W Rd Intersection -> Guanghua St Entrance -> Xinbao Community -> Guangming Village -> Guanghua Elementary School (Minan W Rd) -> Fulu New Village 1 -> Fulu New Village 2 -> Minan Bridge -> Minan Rd -> Fuying Junior High School -> Fuguo Rd Entrance -> Danfeng Police Station -> Shuangfeng Fude Temple -> Qingshan Rd Entrance -> Fengshan St Entrance -> Danfeng Elementary School -> MRT Huilong Station -> Huilong Police Station -> Huilong Superstore -> Lunghwa University of Science and Technology -> Daqing Lianzhuang -> Longshou Village[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 3 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length and a headway-by-day-type figure also remain TBC, and no
dated history for 藍37 or a stated reason for its own near-18-hour,
0535–2345 span was found in this search.[^ebus-bl37] A headway-by-day-type
figure is likewise absent from the primary schedule page. No
predecessor-route or renumbering history for 藍37 specifically was located
either, nor a
stated reason for the route's own three-way subroute split into a plain
working and two vehicle-triggered short workings.[^tdx-bus]
