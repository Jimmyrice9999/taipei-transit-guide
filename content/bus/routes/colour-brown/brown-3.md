---
title: BR3 / 棕3
summary: Brown-line feeder pilot route BR3 (棕3).
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
    note: Lists 棕3 under 捷運棕線接駁公車.
  - id: ebus-br3
    title: BR3 route information
    titleOriginal: 棕3路線資訊
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/EBus/VsSimpleMap?routeid=0114000300
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official route-information page listing the current 富德–萬美社區 corridor, 欣欣客運富德站 contact and special-event headway response in the Maokong-area section.
---

## Classification and corridor

The official 大臺北公車 catalogue lists 棕3 under 捷運棕線接駁公車, the brown-line feeder class.[^ebus-brown]

The confirmed outbound stop sequence runs from 富德, past 象頭埔/萬壽橋頭(木柵)/萬芳國宅, ending at 萬美社區.[^tdx-bus] Two confirmed interchanges are recorded in the curated stop-ID join set: Taipei Zoo (BR01) and Muzha (BR02).[^tdx-bus] The route runs 2 subroutes under a single operator, 欣欣客運富德站, with no separate variant suffix in the current TDX record.[^tdx-bus] The outbound working covers 24 stops; the return, starting from 公務人員訓練處, covers 23.[^tdx-bus] Both confirmed interchanges fall near the shared 富德 origin this route holds with several other 棕-prefixed routes in this group.

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for BR3; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BR3 (24 stops):** Fude -> Xiangtoupu -> Wanfu Bridge -> MRT Taipei Zoo Sta -> Maokong Gondola Taipei Zoo Station -> Wanshou Bridge (Xinguang) -> Wanshou Bridge (Xiuming) -> Wanxing Elementary School -> Xinguang Rd Entrance -> Zhinan Rd -> Muzha Market -> Wenshan Dist Admin Center -> Wanshou Bridge (Muzha) -> Wanfang Rd Entrance -> Muzha Vocational High School -> MRT Muzha -> Jungong New Village -> Wanfang Community (Heping) -> Heping Rd -> Mingmen Community -> WanNing Shanzhuang -> Wanning St -> Wanfang Public Housing -> Wanmei Community[^tdx-bus]

**BR3 (23 stops):** Dept of Civil Servant Development -> Wanfang Police Substation -> Wanfang Activity Center -> Wanfang Community -> Jungong New Village -> MRT Muzha -> Muzha Vocational High School -> Wanfang Rd Entrance -> Wanshou Bridge (Muzha) -> Wenshan Dist Admin Center -> Muzha Market -> Yongan St -> Zhinan Rd Entrance -> National Chengchi University -> Wanxing Library -> Tacheng High School -> Wanshou Bridge (Xiuming) -> Wanshou Bridge (Xinguang) -> Maokong Gondola Taipei Zoo Station -> MRT Taipei Zoo Sta -> Wanfu Bridge -> Xiangtoupu -> Fude[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The committed TDX bus snapshot supplies the changing structural fields shown above; route length and timetable fields are TBC where that layer does not publish them.[^tdx-bus]

- Route history: TBC — the full current route page does not establish the opening, former alignment or renumbering.[^ebus-br3]
- Corridor decision: TBC — the current 富德–萬美社區 corridor and the operational response to Maokong-area special events are published, but not the original planning rationale.[^ebus-br3]
- Unusual branch or short working: TBC — the page records a special-event headway adjustment, not a dated branch or short-working history.[^ebus-br3]
- Operator changes: TBC — the current page names 欣欣客運富德站, but no dated transfer record was found.[^ebus-br3]
