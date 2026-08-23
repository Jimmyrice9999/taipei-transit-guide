---
title: 536 / 536
summary: General-bus route 536 (台北海大 - 大同之家), weekday only since a 2024 shuttle split.
updated: 2026-08-19
facts:
  - label: Service class
    value: General bus service (一般公車)
    source: ebus-general
  - label: 2024 restructuring
    value: Weekday departures cut from 34 to 10 and holiday service suspended, effective 1 July 2024, with a new 536Shuttle opened alongside covering 台北海大–榮總
    source: zhwikiversity-536
specs:
  - label: Route length
    value: TBC
    unit: km
  - label: Service span
    value: "Weekday 0540–2230; no holiday service"
    source: ebus-536
  - label: Headway by day type
    value: TBC
  - label: Fare / transfer
    value: Two-section fare (兩段票)
    source: ebus-536
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
  - id: ebus-general
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 536 under 一般公車, as a routeid entry separate from the 536Shuttle.
  - id: ebus-536
    title: 536 route schedule
    titleOriginal: 536班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100053600
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: 'Full official schedule page. States verbatim termini "台北海大 - 大同之家", weekday span 0540–2230, holiday service "例假日停駛", the two-section fare, contact "首都客運社子站:02-2810-8566", and 13 weekday departures.'
  - id: ebus-536shuttle
    title: 536Shuttle route schedule
    titleOriginal: 536區班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100053620
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: 'Full official schedule page for the shuttle counterpart of this route. States verbatim its current arrangement took effect "113年7月1日" (1 July 2024), corroborating the mainline restructuring date given by the wiki lead.'
  - id: zhwikiversity-536
    title: Taipei joint-operation bus route 536
    titleOriginal: 台北聯營公車536路線
    publisher: Wikiversity contributors, 維基學院
    url: https://zh.wikiversity.org/zh-tw/%E5%8F%B0%E5%8C%97%E8%81%AF%E7%87%9F%E5%85%AC%E8%BB%8A536%E8%B7%AF%E7%B7%9A
    accessed: 2026-08-19
    kind: secondary
    lang: zh-Hant
    note: "Community-compiled operational history covering both 536 and 536區 jointly, not independently verified against a primary PTO/operator announcement in this search except where the 1 July 2024 date is corroborated by the shuttle's own schedule page. Records 首都客運 taking over operation on 15 June 2002, an extension to 中國海專 with fare restructured to two sections on 10 April 2005, a buffer-zone change on 1 September 2009, and the two-stage 2024 restructuring (1 July: mainline weekday 34→10, holiday suspended, shuttle opened at 24 weekday/14 holiday; 1 September: mainline weekday 10→13, shuttle weekday 24→21)."
---

## Classification and corridor

The official catalogue lists 536 under 一般公車.[^ebus-general] Its full
schedule page gives 台北海大 - 大同之家, weekday service 0540–2230 with
holiday service suspended (例假日停駛), a two-section fare (兩段票), and
首都客運社子站 as the service contact.[^ebus-536] The page lists 13 weekday
departures.[^ebus-536]

The confirmed stop sequence covers the same 社子–士林–石牌 corridor as
536Shuttle, extended past 榮總 into the 行義路 hot-spring area to end at 大同
之家 — effectively 508's own northern half, run independently since the
2024 restructuring recorded below split the line from its own
shuttle.[^tdx-bus] The same three literally-named MRT stops as
536Shuttle — 捷運芝山站, 捷運明德站 and 捷運石牌站 — lie along the way with no
confirmed interchange in the curated set.[^tdx-bus]

## History

A community wiki records 首都客運 took over operation on 15 June 2002, the
route was extended to serve 中國海專 with fare restructured to two sections
on 10 April 2005, a fare-buffer-zone adjustment on 1 September 2009, and a
two-stage restructuring in 2024: from 1 July, the full-length line's weekday
departures were cut from 34 to 10, its holiday service suspended entirely,
and a new 台北海大–榮總 shuttle (536Shuttle) opened alongside it running 24
weekday and 14 holiday departures; from 1 September, the full-length line's
weekday count rose from 10 to 13 and the shuttle's weekday count fell from
24 to 21.[^zhwikiversity-536] This is a secondary source; the 1 July 2024
restructuring date and the shuttle's existence are independently
corroborated by 536Shuttle's own schedule page, which states its current
arrangement took effect from 113年7月1日 (1 July 2024).[^ebus-536shuttle]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for 536; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**536 (50 stops):** Fuzhou Village -> Taipei University of Maritime Technology -> Fuxian -> Fuzhou Village Sec 9 -> Weiling Temple -> Xiaxi Shawei -> Jianan New Village -> Fuan Elementary School -> Fuzhou Village Sec 8 -> Fuan Junior High School -> Linjiangyuan -> Dizang Temple -> Xiazhuwei -> Taipei City Fire Dept Fuan Sta -> Fuan Village -> Puji Temple -> Shezi Elementary School 2 -> Shezi Elementary School -> Yonoglun Village (south) -> Shezi Police Substation -> Shezi Market2 -> Shezi Market -> Yangming High School -> Shilin Admin Center -> Shilin Jr High School -> Shilin -> MRT Zhishan Sta 1 -> MRT Zhishan Sta (Taiwan Traditional Theatre Center) -> Zhongzheng High School -> Mingde Junior High School -> MRT Mingde Sta (Donghua) -> Ziqiang St Entrance (Donghua) -> MRT Shipai Sta (Donghua) -> General Market (MRT Shipai Sta) -> Yongming Police Substation -> Veterans General Hospital -> Rongguan New Village (Eastern District of VGH) -> Yongxin Village -> Wufu Temple (Shipai Rd) -> Wufu Temple (Xingyi Rd) -> Huangxi -> Mingshan Temple -> Yonghe Village -> Lane 154 Xingyi Rd -> Lane 186 Xingyi Rd -> Lane 260 Xingyi Rd -> Xingyi Rd hot spring area -> Lane 402 Xingyi Rd -> Dunxu High School of Industry and Commerce(Xingyi) -> Datong House[^tdx-bus]

**536 (51 stops):** Dunxu High School of Industry and Commerce -> Lane 402 Xingyi Rd -> Xingyi Rd hot spring area -> Lane 260 Xingyi Rd -> Lane 186 Xingyi Rd -> Lane 154 Xingyi Rd -> Yonghe Village -> Mingshan Temple -> Huangxi -> Wufu Temple (Xingyi Rd) -> Wufu Temple (Shipai Rd) -> Yongxin Village -> Rongguan New Village (Eastern District of VGH) -> Veterans General Hospital (1) -> Veterans General Hospital -> Yongming Police Substation -> General Market (MRT Shipai Sta) -> MRT Shipai Sta (Xi’an) -> Ziqiang St Entrance (Xi'an) -> MRT Mingde Sta (Xi'an) -> Mingde Junior High School -> Zhongzheng High School -> MRT Zhishan Sta (Taiwan Traditional Theatre Center) -> MRT Zhishan Sta 1 -> Shilin -> Shilin Jr High School -> Shilin Admin Center -> Yangming High School -> Shezi Market -> Sheyuan Village -> Shezi Police Substation -> Yonoglun Village (south) -> Shezi Elementary School -> Yonglun Village (Yanping) -> Zhoumei Bridge -> Zhongku -> Fuan Village -> Taipei City Fire Dept Fuan Sta -> Xiazhuwei -> Dizang Temple -> Linjiangyuan -> Fuan Junior High School -> Fuzhou Village Sec 8 -> Fuan Elementary School -> Jianan New Village -> Xiaxi Shawei -> Weiling Temple -> Fuzhou Village Sec 9 -> Fuxian -> Taipei University of Maritime Technology -> Fuzhou Village[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route
length remains TBC.[^tdx-bus]
