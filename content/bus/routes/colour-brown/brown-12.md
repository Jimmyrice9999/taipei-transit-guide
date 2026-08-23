---
title: BR12 / 棕12
summary: Brown-line feeder pilot route BR12 (棕12).
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
    note: Lists 棕12 under 捷運棕線接駁公車.
  - id: ebus-br12
    title: BR12 route and stop information
    titleOriginal: 棕12路線資訊
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://ebus.gov.taipei/Route/StopsOfRoute?routeid=0114001200
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official route-and-stop page listing the current 景美–客家文化主題公園 corridor, service pattern, stops and 欣欣客運景德站 contact.
  - id: pto-101-br12
    title: April 2012 approved bus operating-plan adjustments
    titleOriginal: 101年4月份核定營運計畫調整
    publisher: Taipei City Public Transportation Office (臺北市政府公共運輸處)
    url: https://www-ws.gov.taipei/001/Upload/public/Attachment/252117392922.pdf
    accessed: 2026-08-17
    kind: primary
    lang: zh-Hant
    note: Full official PDF recording that the 棕12 endpoint 交通博物館 was renamed 客家文化主題公園 effective 23 March 2012.
---

## Classification and corridor

The official 大臺北公車 catalogue lists 棕12 under 捷運棕線接駁公車, the brown-line feeder class.[^ebus-brown]

The confirmed outbound stop sequence runs from 景福街, past 溪口國小/興隆路口(辛亥)/嘉禾社區, ending at 客家文化主題公園(師大路).[^tdx-bus] Four confirmed interchanges are recorded in the curated stop-ID join set: Wanfang Hospital (BR04), Xinhai (BR05), Gongguan (G07) and Taipower Building (G08).[^tdx-bus] The route runs 2 subroutes under a single operator, 欣欣客運景德站, with no separate variant suffix in the current TDX record.[^tdx-bus] The outbound working covers 36 stops; the return, starting from 捷運台電大樓站, covers 32.[^tdx-bus] The route's four confirmed interchanges match the set confirmed for 棕22, both routes running the same Wanfang–Xinhai–Gongguan corridor before their own endpoints diverge.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for BR12; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BR12 (36 stops):** Jingfu St -> Xikou Elementary School -> Jingmei Junior High School -> Jingmei Elementary School (Jingxing) -> Shih Hsin University -> Fuxing Police Substation -> Examination Yuan -> Yongjian Elementary School -> Zhongxing Apartment -> Zaixing High School -> Mamingtan (Zaixing High School) -> Xinglong Shanzhuang -> Coast Guard Administration 1 -> Coast Guard Administration -> Wenshan Sports Center (Xinglong) -> Taiwan Police College -> MRT Wanfang Hospital Sta -> China University of Technology (Xinglong) -> Xinglong Rd Entrance (Xinhai) -> MRT Xinhai Sta -> Xinhai Elementary School -> Qingfeng Activity Center -> Taipei Water Department (Xinhai) -> Keelung and Changxing Intersection -> NTU Cancer Center(Keelung Rd) -> NTUST -> Gongguan -> MRT Gongguan Sta -> Taipower Building -> Xinmin Elementary School -> Tri-Service General Hospital(Xinhai) -> Tri-Service General Hospital (Nanhua Senior High School) -> Water Museum (Dormitory of Prince) -> Siyuan RdEntrance -> JiaheCommunity -> Taipei City Hakka Cultural Park（Shida Rd）[^tdx-bus]

**BR12 (32 stops):** MRT Taipower Building Sta -> Taipower Building -> MRT Gongguan Sta -> Gongguan -> NTUST -> NTU Hospital Gongguan Branch -> Keelung and Changxing Intersection -> Taipei Water Department (Xinhai) -> Qingfeng Activity Center -> Taipei Huai Ai Funeral Parlor -> Xinhai Elementary School -> MRT Xinhai Sta -> MRT Hsinhai Station (I) -> Xinglong Rd Entrance (Xinhai) -> MRT Wanfang Hospital Sta -> Taiwan Police College -> Wenshan Sports Center (Xinglong) -> Coast Guard Administration -> Coast Guard Administration 1 -> Xinglong Shanzhuang -> Mamingtan (Zaixing High School) -> Zaixing High School -> Zhongxing Apartment -> Yongjian Elementary School -> Gouzikou -> Examination Yuan -> Fuxing Police Substation -> Shih Hsin University -> Jingmei Elementary School (Jingwen) -> Wenshan Police Sta 2 -> Xikou Elementary School -> Jingfu St[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The committed TDX bus snapshot supplies the changing structural fields shown above; route length and timetable fields are TBC where that layer does not publish them.[^tdx-bus]

- Route history: Partial — the PTO records the endpoint rename from 交通博物館 to 客家文化主題公園 effective 23 March 2012; opening and earlier alignment remain TBC.[^pto-101-br12]
- Corridor decision: TBC — the current 景美–客家文化主題公園 corridor is published, but its original rationale was not.[^ebus-br12]
- Unusual branch or short working: TBC.
- Operator changes: TBC — the current page names 欣欣客運景德站, but no dated transfer record was found.[^ebus-br12]
