---
title: R53 / 紅53
summary: Red-line feeder route R53 (紅53).
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
    note: Lists 紅53 under 捷運紅線接駁公車.
  - id: ebus-r53
    title: R53 route and stop information
    titleOriginal: 紅53路線資訊
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/StopsOfRoute?routeid=0411005300
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official route-and-stop page listing the current 淡海新市鎮–捷運淡水站 corridor, weekday service, holiday suspension, one-section fare, 淡水客運新市站 contact and holiday note.
---

## Classification and corridor

The official catalogue lists 紅53 under 捷運紅線接駁公車.[^ebus-red] Its full route-and-stop page gives 淡海新市鎮 - 捷運淡水站, weekday service 0630–2000, no holiday service, one-section fare and 淡水客運新市站 as the service contact. The page repeats that the route is suspended on holidays.[^ebus-r53]

The confirmed stop sequence runs from 新市站, past 皇城家天下社區/宏盛水悅社區/
宏普社區/理想家社區, through 淡海國小/新市二路二段/沙崙濱海路口/沙崙路一段, along
行忠宮/台北灣社區/高爾夫山莊, then past 東宇花園城/加州社區/城堡花園/摩天31/米粉寮,
ending at 捷運淡水站.[^tdx-bus] Three confirmed interchanges are recorded
in the curated stop-ID join set: Tamsui (R28), Binhai Shalun (V09) and
Danhai New Town (V10).[^tdx-bus] The route runs a single subroute under
one operator, 淡水客運, weekdays only with holiday service suspended
entirely.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for R53; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**R53 (26 stops):** Xinshi Station -> Huangchengjiatianxia Community -> Hungsheng Water Palace Community -> Hongpu Community -> Ideal Home Community(Xinshi 2nd Rd) -> Danhai Elementary School -> Xinshi 2nd Rd Sec 2 -> Shalun & Binhai Intersection -> Shalun Rd Sec 1 -> Shalun Rd Sec 1 1 -> Xingzhong Temple -> Taibeiwan Community -> Gaoerfu village -> Xinchun & Xinmin Intersection -> Xinchun St -> DongyuGardenCity -> California community -> Chengbao Garden Community -> Motain 31 Community -> Mifenliao -> Shuiduizi -> Dinghao -> North Tamsui -> Yongle Lane Intersection(Zhongshan Market) -> Huanan bank -> MRT Tamsui Sta[^tdx-bus]

**R53 (25 stops):** MRT Tamsui Sta -> Yongle Lane Intersection(Zhongshan Market) -> BeiTamsui -> Dinghao -> Shuiduizi -> MiFenLiao -> Motain 31 Community -> Chengbao Garden -> California community -> Dongyu Garden City -> Xinchun St -> Xinchun & Xinmin Intersection -> Gaoerfu village -> Taibeiwan Community -> Xingzhong Temple -> Shalun Rd Sec 1 1 -> Shalun Rd Sec 1 -> Shalun & Binhai Intersection -> Xinshi 2nd Rd Sec 2 -> Danhai Elementary School -> Ideal Home Community(Xinshi 2nd Rd) -> Hongpu Community -> Hungsheng Water Palace Community -> Huangchengjiatianxia Community -> Xinshi Station[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length and a headway-by-day-type figure also remain TBC, and no
dated history for 紅53 was found in this search, nor a stated reason for
its own weekday-only pattern against sibling routes that run holiday
service over an overlapping corridor. No predecessor-route or renumbering
history for 紅53 was located either, nor a stated reason for confirming
Danhai New Town without also confirming stations closer to the 沙崙 stretch
it passes through on its way toward 淡水.[^tdx-bus]
