---
title: Heping Metro Bus / 和平幹線
summary: Trunk route 和平幹線 (Heping Metro Bus).
updated: 2026-08-19
facts:
  - label: Service class
    value: Trunk route (幹線)
    source: ebus-trunk
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
  - id: ebus-trunk
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 和平幹線 under 幹線專車.
  - id: ebus-heping
    title: Heping Metro Bus route schedule
    titleOriginal: 和平幹線班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161000700
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 萬芳社區–衡陽路 corridor, service span, fare, headway and operator contact.
---

## Classification and corridor

The official catalogue lists 和平幹線 under 幹線專車.[^ebus-trunk] Its full schedule page gives 萬芳社區 - 衡陽路, weekday and holiday service 0520–2300, one-section fare, weekday peak headways of 4–6 minutes and off-peak headways of 5–10 minutes, and 大都會客運萬芳站 as the service contact. It publishes a two-way transfer discount.[^ebus-heping]

The confirmed stop sequence runs the length of 和平東/西路 from 萬芳社區 in
Wenshan, through 六張犁 and 大安, past NTU into 古亭, then through 中正紀念堂
to end near 衡陽路 by Taipei Main Station.[^tdx-bus] Five confirmed
interchanges are named directly in the stop sequence: 麟光站 (Linguang, BR06),
捷運六張犁站 (Liuzhangli, BR07), 捷運古亭站 (served by both the Songshan–
Xindian Line as G09 and the Zhonghe–Xinlu Line as O05), 捷運中正紀念堂站
(served by both the Songshan–Xindian Line as G10 and the Tamsui–Xinyi Line
as R08), and 臺北車站, resolving to Taipei Main Station on both the Bannan
Line (BL12) and the Tamsui–Xinyi Line (R10).[^tdx-bus] A further curated
code resolves to 捷運善導寺站 (Shandao Temple, BL13), not directly named in
the stop sequence's own text.[^tdx-bus] TDX also records a "繞駛世界山莊"
(detour via Shijie Villa) variant adding one stop, 世界山莊(和平), to the
Wenshan end of the route.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for Heping Metro Bus; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**Heping Metro Bus (34 stops):** Wanfang Community -> Wanfang Activity Center -> Wanfang Police Substation -> Dept of Civil Servant Development -> Wanmei Community -> Wanfang Public Housing -> Wanning St -> WanNing Shanzhuang -> Mingmen Community -> Wolong New Village -> Dawoxinshe -> Linguang -> Lizhong Market -> Fuyang St Entrance -> MRT Liuzhangli Sta (Heping) -> Heping and Anhe intersection -> Wolong St -> National Taipei University of Education -> Fuxing S Rd Entrance -> National Taipei University of Education Experiment Elementary School -> Longmen Jr High School (Heping) -> Daan Park -> Wenzhou St Entrance -> NTNU Union Building 1 -> National Taiwan Normal U -> MRT Guting Sta (Heping) -> Roosevelt and Chaozhou Intersection -> MRT Chiang Kai-Shek Memorial Hall (Roosevelt) -> MRT CKS Memorial Hall Station -> Jingfu Gate -> NTU Hospital -> Taipei Main Sta (Zhongxiao) -> Chongqing S Road Sec 1 -> 2/28 Peace Park[^tdx-bus]

**Heping Metro Bus (34 stops):** Boai Rd -> Taipei Post Office -> Taipei Main Sta (Zhongxiao) -> MRT Shandao Temple Sta -> Taipei Kainan High School -> Renai and Linsen Intersection -> MRT Chiang Kai-Shek Memorial Hall (Roosevelt) -> Nanchang Rd Furniture Market -> MRT Guting Sta (Heping) -> National Taiwan Normal U -> NTNU Union Building 1 -> Wenzhou St Entrance -> Daan Park -> Longmen Jr High School (Heping) -> Fuxing S Rd Entrance -> National Taipei University of Education -> Wolong St -> Heping and Anhe intersection -> MRT Liuzhangli Sta (Heping) -> Fuyang St Entrance -> Lizhong Market -> MRT Linguang Sta -> Linguang -> Dawoxinshe -> Wolong New Village -> Mingmen Community -> WanNing Shanzhuang -> Wanning St -> Wanfang Public Housing -> Wanmei Community -> Dept of Civil Servant Development -> Wanfang Police Substation -> Wanfang Activity Center -> Wanfang Community[^tdx-bus]

**Heping Metro Bus (34 stops):** Wanfang Community -> Wanfang Activity Center -> Wanfang Police Substation -> Dept of Civil Servant Development -> Wanmei Community -> Wanfang Public Housing -> Wanning St -> WanNing Shanzhuang -> Mingmen Community -> World Shanzhuang (Heping) -> Dawoxinshe -> Linguang -> Lizhong Market -> Fuyang St Entrance -> MRT Liuzhangli Sta (Heping) -> Heping and Anhe intersection -> Wolong St -> National Taipei University of Education -> Fuxing S Rd Entrance -> National Taipei University of Education Experiment Elementary School -> Longmen Jr High School (Heping) -> Daan Park -> Wenzhou St Entrance -> NTNU Union Building 1 -> National Taiwan Normal U -> MRT Guting Sta (Heping) -> Roosevelt and Chaozhou Intersection -> MRT Chiang Kai-Shek Memorial Hall (Roosevelt) -> MRT CKS Memorial Hall Station -> Jingfu Gate -> NTU Hospital -> Taipei Main Sta (Zhongxiao) -> Chongqing S Road Sec 1 -> 2/28 Peace Park[^tdx-bus]

**Heping Metro Bus (34 stops):** Boai Rd -> Taipei Post Office -> Taipei Main Sta (Zhongxiao) -> MRT Shandao Temple Sta -> Taipei Kainan High School -> Renai and Linsen Intersection -> MRT Chiang Kai-Shek Memorial Hall (Roosevelt) -> Nanchang Rd Furniture Market -> MRT Guting Sta (Heping) -> National Taiwan Normal U -> NTNU Union Building 1 -> Wenzhou St Entrance -> Daan Park -> Longmen Jr High School (Heping) -> Fuxing S Rd Entrance -> National Taipei University of Education -> Wolong St -> Heping and Anhe intersection -> MRT Liuzhangli Sta (Heping) -> Fuyang St Entrance -> Lizhong Market -> MRT Linguang Sta -> Linguang -> Dawoxinshe -> World Shanzhuang (Heping) -> Mingmen Community -> WanNing Shanzhuang -> Wanning St -> Wanfang Public Housing -> Wanmei Community -> Dept of Civil Servant Development -> Wanfang Police Substation -> Wanfang Activity Center -> Wanfang Community[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 4 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and the transfer discount's creation date remain TBC.[^tdx-bus]
