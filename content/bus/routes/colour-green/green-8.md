---
title: G8 / 綠8
summary: Green-line feeder route G8 (綠8).
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
    note: Lists 綠8 under 捷運綠線接駁公車.
  - id: ebus-g8
    title: G8 route schedule
    titleOriginal: 綠8班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413000800
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 台北小城–中和 corridor, service span, fare, headway and operator contact.
---

## Classification and corridor

The official catalogue lists 綠8 under 捷運綠線接駁公車.[^ebus-green] Its full schedule page gives 台北小城 - 中和, weekday and holiday service 0600–2230, one-section fare, weekday peak/off-peak headways of 15–20/20–30 minutes, holiday peak/off-peak headways of 20–30/20–30 minutes, and 新店客運碧潭站 as the service contact.[^ebus-g8]

The confirmed stop sequence is the longest and most-connected in this
project's colour-green coverage: starting at 台北小城, another Ankeng estate,
it combines 綠7's 安坑/安康-to-新店 leg with 綠3/綠6's 新店-to-中和 leg into one
continuous run, ending at 中和區公所.[^tdx-bus] Nine separately confirmed
interchange codes lie along the way — 捷運新店區公所站 (G02), 捷運七張站 (G03),
捷運大坪林站 (G04, also Circular Line Y07), 輕軌安康站 (Ankeng LRT, K06), and
捷運景安站 (Zhonghe–Xinlu Line O02, also Circular Line Y11) among them — more
than any other route in this batch.[^tdx-bus] Despite covering the combined
distance of two other routes end to end, it still charges the same flat
one-section fare as the much shorter G18 and G11 — the same pattern already
noted on 綠3, and consistent across this project's whole colour-green
coverage rather than a one-off.[^ebus-g8] Its schedule page is also the only
one in this batch to publish separate weekday and holiday headway bands —
15–20/20–30 minutes on weekdays against a flat 20–30 on holidays — where 綠6
and 綠7 state one peak/off-peak pair covering both day types.[^ebus-g8]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for G8; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**G8 (41 stops):** Taipei Xiaocheng -> Taipei Xiaocheng 1 -> Taipei Xiaocheng 2 -> Taipei Xiaocheng 3 -> Anfeng Rd -> Liqing Market -> Yirenkeng -> Ankang Chezi Rd Intersection -> Taipei Tobacco Factory -> Langmanguizu -> Gonglun New Village(Feng Rong Hospital) -> Ankang Police Station -> Guanghua New Village(Ankang Rd) -> Anhua Rd Intersection -> Xiacheng Community -> Mansion of General Hu-Lien -> Dingcheng -> Dapingding -> Xitou -> Bitan Bridge -> Binlang Rd -> MRT Xindian City Hall Sta(Beixin) -> Qizhang(Beixin Rd) -> MRT Qizhang Sta -> Xindian Post Office -> Dapinglin -> Minquan Rd Entrance -> Minquan Industrial Area -> Minquan Industrial Area 1 -> Far East Industrial City -> Zhuangjing High School/National Human Rights Museum -> MRT Xiulang Bridge Sta -> Jianshanjiao -> Jingping Jingde Intersection -> MRT Jingping Sta -> ET Plaza -> Nanshijiao(Jingping Rd) -> Zhonghe Church -> MRT Jingan Sta(Jingping Rd) -> Yuantong&Jingping Rd Entrance -> Zhonghe Dist Office (Jingping Rd)[^tdx-bus]

**G8 (44 stops):** Taihe St -> Zhonghe Temple -> Zhonghe Police Station -> Nanshan High School -> Shuanghe Village -> Anhe Rd Entrance -> Jingxin St Entrance -> MRT Jingan Sta -> Zhonghe Church -> Nanshijiao(Jingping Rd) -> MRT Jingping Sta -> Jingping Jingde Intersection -> MRT Xiulang Bridge Sta -> Zhuangjing High School/National Human Rights Museum -> Far East Industrial City -> Minquan Industrial Area 1 -> Minquan Industrial Area -> Minquan Rd Entrance -> Dapinglin -> Xindian Post Office -> MRT Qizhang Sta -> Qizhang(Beixin Rd) -> MRT Xindian District Office Station(Beixin Rd) -> Binlang Rd -> Bitan Bridge -> Xitou -> Dapingding -> Dingcheng -> Mansion of General Hu-Lien -> Xiacheng Community -> Anhua Rd Intersection -> Guanghua New Village(Ankang Rd) -> Ankang Police Station -> Gonglun New Village(Feng Rong Hospital) -> Langmanguizu -> Taipei Tobacco Factory -> Chezi Rd -> Yirenkeng -> Liqing Market -> Anfeng Rd -> Taipei Xiaocheng 3 -> Taipei Xiaocheng 2 -> Taipei Xiaocheng 1 -> Taipei Xiaocheng[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
