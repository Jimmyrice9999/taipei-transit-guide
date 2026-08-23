---
title: BR13 / 棕13
summary: Brown-line feeder pilot route BR13 (棕13).
updated: 2026-08-17
line: BR
facts:
  - label: Service class
    value: MRT brown-line feeder
    source: ebus-brown
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
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field.
  - id: ebus-brown
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Lists 棕13 under 捷運棕線接駁公車.
  - id: ebus-br13
    title: BR13 route information
    titleOriginal: 棕13路線資訊
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/EBus/VsSimpleMap?routeid=0114001300
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official route-information page listing the current 雙溪–捷運大直站 corridor, weekday sub-route that bypasses 外雙溪(至善), timetable and 首都客運士林站 contact.
  - id: pto-101-br13
    title: March 2012 approved bus operating-plan adjustments
    titleOriginal: 101年3月份核定營運計畫調整
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://www-ws.gov.taipei/001/Upload/public/Attachment/241216302476.pdf
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official PDF recording that 棕13 service reduction was approved effective 1 February 2012.
---

## Classification and corridor

The official 大臺北公車 catalogue lists 棕13 under 捷運棕線接駁公車, the brown-line feeder class.[^ebus-brown]

The confirmed outbound stop sequence runs from 大崙尾山, past 大崙尾山步道口/外雙溪橋/通北街口, ending at 圓山新城一.[^tdx-bus] One confirmed interchange is recorded in the curated stop-ID join set: Dazhi (BR14).[^tdx-bus] The route runs 2 subroutes under a single operator, 首都客運士林站.[^tdx-bus] The published weekday variant bypassing 外雙溪(至善) is a stop-skip pattern within this same identity rather than a separately filed sub-route.[^ebus-br13] The outbound working covers 30 stops; the return, starting from 力行新村, covers 33.[^tdx-bus] Both endpoints, 大崙尾山 and 圓山新城一, sit in Shilin's hill district rather than at a station in the curated join set.

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for BR13; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BR13 (30 stops):** Mt Dalunwei -> Mt Dalunwei Trail Entrance -> Shuangxi Community -> Shuangxi Sta 1 -> Shuangxi Stop 2 -> Cuishan St -> Mingxi St -> Shuangxi Elementary School -> Zhongshe Rd 17th Lane -> ZhongyangSta -> Zhongshe RdSec1 Lane 61 Entrance -> Cuishan Police Substation -> Community Development Assn -> Zhongshe Rd 11th Lane -> Cui Shanzhuang -> Waishuangxi Bridge -> Dajing Bridge -> Jiannan Bridge -> Shuangxi Bieshu -> ChinShan Junior High School -> Wesley Girls High School -> National Palace Museum -> Waishuangxi -> Zihqiang Tunnel -> Zhifu Temple -> MRT Dazhi Station -> Dazhi High School -> Air Force Command Headquarters -> Tongbei St Entrance -> Yuanshan New Village 1[^tdx-bus]

**BR13 (33 stops):** Lixing New Village -> Yuanshan New Village 2 -> Tongbei St Entrance -> Dazhi High School -> Dazhi Elementary School -> MRT Dazhi Station -> Zhifu Temple -> Zihqiang Tunnel (Dazhi Church) -> Waishuangxi -> Waishuangxi -> National Palace Museum -> Wesley Girls High School -> ChinShan Junior High School -> Shuangxi Bieshu -> Jiannan Bridge -> Dajing Bridge -> Waishuangxi Bridge -> Cui Shanzhuang -> Zhongshe Rd 11th Lane -> Community Development Assn -> Cuishan Police Substation -> Zhongshe RdSec1 Lane 61 Entrance -> ZhongyangSta -> Zhongshe Rd 17th Lane -> Shuangxi Elementary School -> Mingxi St -> Cuishan St -> Shuangxi Stop 2 -> Shuangxi Sta 1 -> Shuangxi Sta -> Shuangxi Community -> Mt Dalunwei Trail Entrance -> Mt Dalunwei[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The committed TDX bus snapshot supplies the changing structural fields shown above; route length and timetable fields are TBC where that layer does not publish them.[^tdx-bus]

- Route history: Partial — the PTO records a service reduction effective 1 February 2012; opening and earlier alignment remain TBC.[^pto-101-br13]
- Corridor decision: TBC — the current 雙溪–捷運大直站 corridor is published, but its original rationale was not.[^ebus-br13]
- Unusual branch or short working: Partial — the current page publishes a weekday variant that bypasses 外雙溪(至善), but not when it began or why.[^ebus-br13]
- Operator changes: TBC — the current page names 首都客運士林站, but no dated transfer record was found.[^ebus-br13]
