---
title: G7 / 綠7
summary: Green-line feeder route G7 (綠7).
updated: 2026-08-18
facts:
  - label: Service class
    value: MRT green-line feeder
    source: ebus-green
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
  - id: ebus-green
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Lists 綠7 under 捷運綠線接駁公車.
  - id: ebus-g7
    title: G7 route schedule
    titleOriginal: 綠7班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413000700
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 黎明清境–捷運大坪林站 corridor, service span, fare, headway and two operator contacts.
---

## Classification and corridor

The official catalogue lists 綠7 under 捷運綠線接駁公車.[^ebus-green] Its full schedule page gives 黎明清境 - 捷運大坪林站, weekday and holiday service 0600–2230, one-section fare, peak headways of 15–20 minutes, off-peak headways of 20–30 minutes, and two service contacts, 新店客運碧潭站 and 新店客運錦繡站.[^ebus-g7]

The confirmed stop sequence starts at 黎明清境, an Ankeng housing estate, and
runs the same 安坑/安康-to-新店 corridor as 綠10 — the two routes share almost
their entire alignment — ending at 捷運大坪林站.[^tdx-bus] The same four
confirmed interchanges as 綠10 apply: 捷運新店區公所站 (Xindian District
Office, G02), 捷運七張站 (Qizhang, G03), 捷運大坪林站 itself (Dapinglin, G04,
also Circular Line Y07), and 輕軌安康站 (Ankang, K06).[^tdx-bus] Its two
listed service contacts, 新店客運碧潭站 and 新店客運錦繡站, both belong to the
same operator, 新店客運, at two separate dispatch stations rather than a
joint operation between two companies.[^ebus-g7] 新店客運 also runs 綠10,
which shares this route's corridor almost exactly, out of the same 碧潭
dispatch station named on both routes' schedule pages.[^tdx-bus] Its 15–20/
20–30 minute headway split matches 綠6 and 綠8 exactly, one more data point
for a shared scheduling pattern across this operator's colour-green
routes.[^ebus-g7]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for G7; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**G7 (21 stops):** LiMing Rd Entrance -> LRT Cardinal Tien Hospital An Kang Branch Sta(Chezi Rd) -> Ankang Chezi Rd Intersection -> Taipei Tobacco Factory -> Lang Man Guei Zu -> Gonglun New Village(Feng Rong Hospital) -> Ankang Police Station -> Guanghua New Village(Ankang Rd) -> Anhua Rd Intersection -> SiaCheng Community -> Mansion of General Hu-Lien -> DingCheng -> Dapingding -> Xitou -> Bitan Bridge -> BinLang Rd -> MRT Xindian City Hall Sta(Beixin) -> Qizhang(Beixin Rd) -> MRT Qizhang Sta -> Xindian Post Office -> DaPingLin[^tdx-bus]

**G7 (28 stops):** MRT DaPingLin Station -> Shunan St -> Jiangling Ercun -> Buddhist Tzu Chi General Hospital -> MinQuan Industrial Area -> Minquan Rd Entrance -> DaPingLin -> Xindian Post Office -> MRT Qizhang Sta -> Qizhang(Beixin Rd) -> MRT SinDian City Hall Station -> BinLang Rd -> Bitan Bridge -> SiTou -> DaPingDing -> DingCheng -> Mansion of General Hu-Lien -> SiaCheng Community -> Anhua Rd Intersection -> Guanghua New Village(Ankang Rd) -> Ankang Police Station -> Gonglun New Village(Feng Rong Hospital) -> Lang Man Guei Zu -> Taipei Cigarette Plant -> CheZih Rd Entrance -> LRT Cardinal Tien Hospital An Kang Branch Sta(Chezi Rd) -> LiMing Rd Entrance -> Limingqingjing[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
