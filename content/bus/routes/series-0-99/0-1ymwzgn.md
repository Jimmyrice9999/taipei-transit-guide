---
title: 0South / 0南
summary: General-bus route 0South (萬芳社區 - 捷運東門站).
updated: 2026-08-19
facts:
  - label: Service class
    value: General bus service (一般公車)
    source: ebus-general
specs:
  - label: Route length
    value: TBC
    unit: km
  - label: Service span
    value: "Weekday 0600–2250; holiday 0625–2250"
    source: ebus-0south
  - label: Headway by day type
    value: "Weekday peak 15–20 min, off-peak 20–30 min; holiday 27 departures across the day"
    source: ebus-0south
  - label: Fare / transfer
    value: Single-section fare (一段票)
    source: ebus-0south
sources:
  - id: tdx-bus
    title: TDX bus data
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length field. Records a single subroute, 0南. Its raw stop-name matching flags candidate proximity to MRT stations BR03, BR04 and G07, but none of these is in the site's separately curated stop-ID rail-join set, so no interchange is presented as confirmed.
  - id: ebus-general
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 0南 under 一般公車; also cross-listed under 低地板 (low-floor fleet).
  - id: ebus-0south
    title: 0South route schedule
    titleOriginal: 0南班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100000B00
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 萬芳社區–捷運東門站 corridor, service span, headway, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 0南 under 一般公車.[^ebus-general] Its full
schedule page gives 萬芳社區 - 捷運東門站, weekday service 0600–2250 at peak
intervals of 15–20 minutes and off-peak intervals of 20–30 minutes, holiday
service 0625–2250 run as a fixed 27-departure schedule across the day, a
single-section fare (一段票), and 大都會客運萬芳站 as the service contact.[^ebus-0south]
The TDX snapshot records a single subroute for this route.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for 0South; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**0-South (27 stops):** Wanfang Community -> Wanfang Activity Center -> Wanfang Elementary School -> Wanfang No6 Park -> Wanli St Entrance -> Palm Spring Community -> Wen Shan Sports Center (Wanfang) -> Taiwan Police College -> MRT Wanfang Hospital Sta -> China University of Technology (Xinglong) -> Xinglong Elementary School -> Xingde Elementary School -> Xinglong Market -> Chingshin Academy -> Xianguang Apartment -> Jingming St Entrance -> Changan Elementary School (Xinglong) -> National Taiwan Normal University Branch -> MRT Gongguan Sta -> National Taiwan U -> NTU Sports Center -> Wenzhou St Entrance -> NTNU Union Building 1 -> National Taiwan Normal U -> Jinshan Chaozhou St Intersection -> Center for Public & Business Administration Education -> MRT Dongmen Sta (Jinshan)[^tdx-bus]

**0-South (25 stops):** Xinyi & Yongkang Intersection (MRT Dongmen Sta) -> Jinhua and Xinsheng Intersection -> Heping and Xinsheng Intersection -> Longan Elementary School (Civil Service Development Institute) -> NTU Sports Center -> National Taiwan U -> MRT Gongguan Sta -> National Taiwan Normal University Branch -> Changan Elementary School (Xinglong) -> Jingming St Entrance -> Xianguang Apartment -> Chingshin Academy -> Xinglong Market -> Xingde Elementary School -> Xinglong Elementary School -> MRT Wanfang Hospital Sta -> Taiwan Police College -> Wen Shan Sports Center (Wanfang) -> Palm Spring Community -> Wanli St Entrance -> MRT Wanfang Community Sta -> Wanfang No6 Park -> Wanfang Elementary School -> Wanfang Activity Center -> Wanfang Community[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length
remains TBC.[^tdx-bus] Stop names put the route near MRT stations BR03, BR04 and G07,
but this project only presents an MRT interchange as confirmed where the curated stop-ID
join set says so, and none of these three is in it.[^tdx-bus] A community wiki (zh.wikiversity) lead describes
0南's predecessor as a Taipei Municipal Bus Administration circular route
between 興隆路 and 臺北車站, split into left and right branches, with the left
branch renumbered to joint-operation route 653 in September 2000 and ceased
by March 2001; the same lead attributes the route's later shortening to 金華
新生路口 to a September 2007 adjustment, and its endpoint's formal move to
捷運東門站 to the completion of Xinyi Line construction works by November
2012. None of this could be corroborated against a primary source in this
search — the 臺北市公共運輸處's public 公車營運調整 document archive only extends
back to 2024, and no primary announcement for any of these dates was found —
so the history above is left unconfirmed and does not appear as fact in the
Classification section.[^tdx-bus]
