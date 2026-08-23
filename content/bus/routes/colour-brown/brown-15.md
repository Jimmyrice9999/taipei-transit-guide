---
title: BR15 / 棕15
summary: Brown-line feeder pilot route BR15 (棕15).
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
    note: Lists 棕15 under 捷運棕線接駁公車.
  - id: ebus-br15
    title: BR15 route schedule
    titleOriginal: 棕15班表
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0114001500
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 富德–貓空纜車站 corridor, service span, one-section fare, 山區路段隨招隨停 note and 欣欣客運富德站 contact.
  - id: pto-107-br15
    title: April 2018 approved bus operating-plan adjustments
    titleOriginal: 107年4月份營運計畫調整
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://www-ws.gov.taipei/001/Upload/458/relfile/22562/3499374/57acc21d-fdf2-4386-a9ab-cce8040fbae3.pdf
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official PDF recording the addition of 政大(聯合醫院) and cancellation of 政大一 (往南) effective 26 April 2018.
  - id: pto-111-br15
    title: March 2022 approved bus operating-plan adjustments
    titleOriginal: 111年3月份營運計畫調整
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://www-ws.gov.taipei/001/Upload/458/relfile/22562/3499374/42ca36d2-ba63-4cf6-aed5-8aa65218430c.pdf
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official PDF recording the addition of 水鋼琴社區 (往北) for 棕15 and related routes effective 17 March 2022.
---

## Classification and corridor

The official 大臺北公車 catalogue lists 棕15 under 捷運棕線接駁公車, the brown-line feeder class.[^ebus-brown]

The confirmed outbound stop sequence runs from 富德, past 象頭埔/北政國中(政大實小)/樟湖步道, ending at 貓空纜車站.[^tdx-bus] One confirmed interchange is recorded in the curated stop-ID join set: Taipei Zoo (BR01).[^tdx-bus] The route runs 2 subroutes under a single operator, 欣欣客運富德站, with no separate variant suffix in the current TDX record.[^tdx-bus] The outbound working covers 21 stops; the return, starting from 天恩宮, covers 23. The mountain-section 隨招隨停 (hail-and-stop) note recorded on the schedule page applies past the last confirmed MRT-adjacent stop.[^ebus-br15][^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for BR15; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BR15 (21 stops):** Fude -> Xiangtoupu -> Wanfu Bridge -> MRT Taipei Zoo Sta -> Maokong Gondola Taipei Zoo Station -> Wanshou Bridge (Xinguang) -> Wanshou Bridge (Xiuming) -> Wanxing Elementary School -> National Chengchi U (TCUH) -> Xiaokengkou (Beizheng Jr High School) -> Beizheng Jr High School (Experimental Elementary School of NCCU) -> Sanjiao Park -> National Chengchi U Vieshow -> Shuigangqin Community -> Zhinan Experimental Elementary School -> Shishijiao -> Zhangshan Temple -> South Entrance of Camphor Tree Trail -> Wacuo -> Zhangshanbudao -> Maokong Gondola Stop[^tdx-bus]

**BR15 (23 stops):** Tianen Temple -> Tea Promotion Center -> Maokong Pothole Sta -> Maokong Sta (Mini Skywalk) -> Pavilion Stop -> Yuanshan -> Yuanshan 1 -> CaoNan -> Qishan -> Shuigangqin Community -> Sanjiao Park -> Beizheng Jr High School (Experimental Elementary School of NCCU) -> Xiaokengkou (Beizheng Jr High School) -> National Chengchi University -> Wanxing Library -> Tacheng High School -> Wanshou Bridge (Xiuming) -> Wanshou Bridge (Xinguang) -> Maokong Gondola Taipei Zoo Station -> MRT Taipei Zoo Sta -> Wanfu Bridge -> Xiangtoupu -> Fude[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The committed TDX bus snapshot supplies the changing structural fields shown above; route length and timetable fields are TBC where that layer does not publish them.[^tdx-bus]

- Route history: Partial — the PTO records the 2018 政大(聯合醫院) addition and 政大一 cancellation, and the 2022 水鋼琴社區 addition; opening and earlier alignment remain TBC.[^pto-107-br15][^pto-111-br15]
- Corridor decision: TBC — the current 富德–貓空纜車站 corridor is published, but its original rationale was not.[^ebus-br15]
- Unusual branch or short working: Partial — the current page records a safety-dependent 隨招隨停 mountain section, but not a dated branch history.[^ebus-br15]
- Operator changes: TBC — the current page names 欣欣客運富德站, but no dated transfer record was found.[^ebus-br15]
