---
title: R51 / 紅51
summary: Red-line feeder route R51 (紅51).
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
    note: Lists 紅51 under 捷運紅線接駁公車.
  - id: ebus-r51
    title: R51 route schedule
    titleOriginal: 紅51班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0411005100
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 淡海新市鎮–捷運淡水站 corridor, weekday/holiday service spans, headway notes, one-section fare and 淡水客運淡水站 contact.
---

## Classification and corridor

The official catalogue lists 紅51 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 淡海新市鎮 - 捷運淡水站, weekday and holiday service 0530–2230, one-section fare and 淡水客運淡水站 as the service contact. It records weekday peak/off-peak headways of 15–30/30–60 minutes and holiday peak/off-peak headways of 30/60 minutes.[^ebus-r51]

The confirmed stop sequence runs from 新市站, past 勤家捷奏社區/龍騰區/海洋都心
社區/海都廣場, through 義山新市二路口/濱海義山路口/躍淡水社區, along 合康嘉年華社
區/星海別墅/歡喜天地/觀海社區, then past 行忠宮/高爾夫山莊/真理大學/淡江中學, ending
at 捷運淡水站.[^tdx-bus] Two confirmed interchanges are recorded in the
curated stop-ID join set: Tamsui (R28) and Binhai Yishan (V08).[^tdx-bus]
The route runs a single subroute under one operator, 淡水客運, with its
own notably wide headway bands — 15–60 minutes across the day —
compared with several other Tamsui-area routes in this batch.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for R51; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**R51 (27 stops):** Xinshi Station -> Qinjiajiezou  Community -> Longteng Dist -> The Ocean Community -> Ocean Square -> No3 Ocean City -> Yishan & Xinshi 2nd Rd Intersection -> Sec1,Yishan Rd -> Binhai & Yishan Intersection -> YueTamsui Community -> Hekang Carnival community -> Xinghai Villa -> HuanxiTiandi -> Guanhai Community -> Xingzhong Temple -> Taibeiwan Community -> Gaoerfu village -> Xinxing Fude Temple -> Aletheia University -> Tamkang High School -> Farmers Association Xinxing Branch -> Haijing Yuanzhongyuan -> Tamsui Xincheng -> Chongjian St Intersection -> Yongle Lane Intersection(Zhongshan Market) -> Huanan bank -> MRT Tamsui Sta[^tdx-bus]

**R51 (27 stops):** MRT Tamsui Sta -> Yongle Lane Intersection(Zhongshan Market) -> JhongJian St Entrance -> Tamsui Xincheng -> Haijing Yuanzhongyuan -> Farmers Association Xinxing Branch -> Tamkang High School -> Aletheia University -> Xinxing Fude Temple -> Xinchun & Xinmin Intersection -> Gaoerfu village -> Taibeiwan Community -> Xingzhong Temple -> Guanhai Community -> HuanxiTiandi -> Xinghai Villa -> Hekang Carnival community -> YueTamsui Community -> Binhai & Yishan Intersection -> Sec1,Yishan Rd -> Yishan & Xinshi 2nd Rd Intersection -> No3 Ocean City -> Ocean Square -> The Ocean Community -> Fengxiang Dist -> Gongersan Park -> Xinshi Station[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅51 was found
in this search, nor a stated reason for its own wide headway bands over a
corridor as densely residential as the one it serves. No predecessor-
route or renumbering history for 紅51 was located either, nor a stated
reason for pairing 新市站 with 捷運淡水站 across a corridor overlapping
several other 淡水客運 routes elsewhere in this batch.[^tdx-bus]
