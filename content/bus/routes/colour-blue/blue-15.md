---
title: BL15 / 藍15
summary: Blue-line feeder route BL15 (藍15).
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
    note: Lists 藍15 under 捷運藍線接駁公車.
  - id: ebus-bl15
    title: BL15 route schedule
    titleOriginal: 藍15班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412001500
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 汐止–捷運昆陽站 corridor, service span, fare, headway and operator contact.
---

## Classification and corridor

The official catalogue lists 藍15 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 汐止 - 捷運昆陽站, weekday and holiday service 0540–0010, one-section fare, weekday peak/off-peak headways of 5–8/8–12 minutes, holiday peak/off-peak headways of 10/15 minutes, and 中興巴士汐止站 as the service contact.[^ebus-bl15]

The confirmed stop sequence runs from 東方山河社區 in outer Xizhi, past 崇義
高中/汐止後車站/秀峰高中 through the town centre, along 忠孝東路 past 東方科學
園區/遠東世界中心 into Nangang, through 南港展覽館/南港/南港高工, then south past
南港行政中心/台肥新村 to end at 捷運昆陽站.[^tdx-bus] Two confirmed interchanges
are recorded in the curated stop-ID join set: Kunyang (BL21) and Taipei
Nangang Exhibition Center, itself a Bannan–Wenhu interchange (BL23/BR24).[^tdx-bus] TDX records a second, near-identical subroute named 藍15寵物公車
(pet bus), sharing the same stop sequence under the same operator,
中興巴士.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for BL15; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BL15 (25 stops):** Dongfang Shanhe Community -> Xiangzhang Rd Sec 1 -> Chongyi High School -> Qiaodong -> Modern Family Community -> Xizhi Rail Sta -> Xioufong High School(Zhongxiao E Rd) -> Xizhi Dist Admin Center -> XiZhi Farmers Association -> Lianxing St Entrance -> Oriental Science Park -> Far East World Center -> Ocean Community -> Hengke -> MRT Nangang Exhibition Hall (Nangang Rd ) -> Nangang Exhibition Hall -> Nangang -> Nangang Vocational High School (Nangang Rd) -> Nangang Dist Admin Center(Nangang Rail Sta) -> Taifei New Village -> Nangang Rd Sec2 Lane 178 Entrance -> Dongming Village / Taipei Music Center -> Tudigong Temple -> Nangang High School -> MRT Kunyang[^tdx-bus]

**BL15 (24 stops):** MRT Kunyang -> Nangang High School -> Tudigong Temple -> Dongming Village / Taipei Music Center -> Nangang Rd Sec2 Lane 178 Entrance -> Taifei New Village -> Nangang Dist Admin Center(Nangang Rail Sta) -> Nangang Vocational High School (Nangang Rd) -> Nangang -> MRT Nangang Exhibition Hall (Nangang Rd ) -> Hengke -> Fusin Hotel -> Far East World Center -> Oriental Science Park -> Lianxing St Intersection -> XiZhi Farmers Association -> Xizhi Dist Admin Center -> Xioufong High School(Zhongxiao E Rd) -> Xizhi Rail Sta -> Modern Family Community -> Qiaodong -> Chongyi High School -> Xiangzhang Rd Sec 1 -> Dongfang Shanhe Community[^tdx-bus]

**BL15 (25 stops):** Dongfang Shanhe Community -> Xiangzhang Rd Sec 1 -> Chongyi High School -> Qiaodong -> Modern Family Community -> Xizhi Rail Sta -> Xioufong High School(Zhongxiao E Rd) -> Xizhi Dist Admin Center -> XiZhi Farmers Association -> Lianxing St Entrance -> Oriental Science Park -> Far East World Center -> Ocean Community -> Hengke -> MRT Nangang Exhibition Hall (Nangang Rd ) -> Nangang Exhibition Hall -> Nangang -> Nangang Vocational High School (Nangang Rd) -> Nangang Dist Admin Center(Nangang Rail Sta) -> Taifei New Village -> Nangang Rd Sec2 Lane 178 Entrance -> Dongming Village / Taipei Music Center -> Tudigong Temple -> Nangang High School -> MRT Kunyang[^tdx-bus]

**BL15 (24 stops):** MRT Kunyang -> Nangang High School -> Tudigong Temple -> Dongming Village / Taipei Music Center -> Nangang Rd Sec2 Lane 178 Entrance -> Taifei New Village -> Nangang Dist Admin Center(Nangang Rail Sta) -> Nangang Vocational High School (Nangang Rd) -> Nangang -> MRT Nangang Exhibition Hall (Nangang Rd ) -> Hengke -> Fusin Hotel -> Far East World Center -> Oriental Science Park -> Lianxing St Intersection -> XiZhi Farmers Association -> Xizhi Dist Admin Center -> Xioufong High School(Zhongxiao E Rd) -> Xizhi Rail Sta -> Modern Family Community -> Qiaodong -> Chongyi High School -> Xiangzhang Rd Sec 1 -> Dongfang Shanhe Community[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] What distinguishes 藍15寵物公車 operationally from the plain 藍15 working —
whether it runs specific departures, a different vehicle, or a booking
requirement — was not found in this search. The route length also remains
TBC beyond the schedule page's own headway figures, and no dated history
for the route was found in this search.
