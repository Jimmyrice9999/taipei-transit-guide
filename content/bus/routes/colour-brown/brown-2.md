---
title: BR2 / 棕2
summary: Brown-line feeder pilot route BR2 (棕2).
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
    note: Lists 棕2 under 捷運棕線接駁公車.
  - id: ebus-br2
    title: BR2 route schedule
    titleOriginal: 棕2班表
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0114000200
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 萬芳社區–景美女中 corridor, service pattern and 欣欣客運木柵二站 contact.
---

## Classification and corridor

The official 大臺北公車 catalogue lists 棕2 under 捷運棕線接駁公車, the brown-line feeder class.[^ebus-brown]

The confirmed outbound stop sequence runs from 萬芳社區, past 萬芳活動中心/景華公園/木新區民活動中心, ending at 景美女中.[^tdx-bus] Two confirmed interchanges are recorded in the curated stop-ID join set: Wanfang Community (BR03) and Wanfang Hospital (BR04).[^tdx-bus] The route runs 2 subroutes under a single operator, 欣欣客運木柵二站, with no separate variant suffix in the current TDX record.[^tdx-bus] The outbound working covers 30 stops; the return, run in reverse between the same two named termini, covers 27.[^tdx-bus] Both confirmed interchanges sit on the outbound leg near 萬芳社區, before the route continues north to its 景美女中 terminus, which is not itself a curated MRT join.

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for BR2; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BR2 (30 stops):** Wanfang Community -> Wanfang Activity Center -> Wanfang Elementary School -> Wanfang No6 Park -> Wanli St Entrance -> Palm Spring Community -> Wen Shan Sports Center (Wanfang) -> Taiwan Police College -> MRT Wanfang Hospital Sta -> China University of Technology (Xinglong) -> Xinglong Elementary School -> Xingde Elementary School -> Xinglong Market -> Chingshin Academy -> Jingxing Junior High School -> Jingxing Rd -> Jingmei Junior High School -> Wenshan Police Sta2 -> Jingmei Elementary School (Jingwen) -> Shunan St -> MRT Dapinglin Sta -> Dapinglin -> Baoqiang Rd -> Baoqiao Rd Entrance -> Baoqiao Rd&Zhongxing St Intersection 1 -> Gas Sta -> Baogao Science and Intellectual Park -> Muxin Rd Entrance -> Muxin Activity Center -> Jingmei Girls High School[^tdx-bus]

**BR2 (27 stops):** Jingmei Girls High School -> Baogao Science and Intellectual Park(Baozhong Rd) -> Baozhong Rd -> Bank of Taiwan -> Baoqiang Rd -> Dapinglin -> MRT Dapinglin Sta -> Shunan St -> Jingmei Elementary School (Jingwen) -> Wenshan Police Sta2 -> Jingmei Junior High School -> Jinhua Park -> Jingxing Junior High School -> Chingshin Academy -> Xinglong Market -> Xingde Elementary School -> Xinglong Elementary School -> MRT Wanfang Hospital Sta -> Taiwan Police College -> Wen Shan Sports Center (Wanfang) -> Palm Spring Community -> Wanli St Entrance -> MRT Wanfang Community Sta -> Wanfang No6 Park -> Wanfang Elementary School -> Wanfang Activity Center -> Wanfang Community[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The committed TDX bus snapshot supplies the changing structural fields shown above; route length and timetable fields are TBC where that layer does not publish them.[^tdx-bus]

- Route history: TBC — the full current schedule establishes the present route but no fetched primary establishes its opening, former alignment or renumbering.[^ebus-br2]
- Corridor decision: TBC — the current corridor is published, but no primary rationale for selecting it was found.[^ebus-br2]
- Unusual branch or short working: TBC.
- Operator changes: TBC — the current schedule names 欣欣客運木柵二站, but no dated transfer record was found.[^ebus-br2]
