---
title: 302區 / 302Shuttle
summary: General-bus shuttle route 302區 (關渡宮 - 兒童新樂園).
updated: 2026-08-19
facts:
  - label: Service class
    value: General bus service (一般公車)
    source: ebus-general
  - label: Service start
    value: 15 June 2024 (113年6月15日)
    source: ebus-302-shuttle
specs:
  - label: Route length
    value: TBC
    unit: km
  - label: Service span
    value: "Weekday 0610–1710; holiday 0600–1700"
    source: ebus-302-shuttle
  - label: Headway by day type
    value: TBC
  - label: Fare / transfer
    value: Single-section fare (一段票)
    source: ebus-302-shuttle
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
    note: Lists 302區 under 一般公車, as its own routeid entry distinct from the plain 302 route.
  - id: ebus-302-shuttle
    title: 302區 route schedule
    titleOriginal: 302區班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100030220
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official schedule page listing the current 關渡宮–兒童新樂園 corridor, service span, fare and operator contact. States verbatim: 本路線自113年6月15日起實施."
---

## Classification and corridor

The official catalogue lists 302區 under 一般公車, filed as its own routeid
entry rather than a sub-listing of plain 302 — confirming the TDX group's
treatment of the shuttle variant as a separate route record.[^ebus-general]
Its full schedule page gives 關渡宮 - 兒童新樂園, weekday service 0610–1710,
holiday service 0600–1700, a single-section fare (一段票), and 大南汽車關渡站
as the service contact.[^ebus-302-shuttle] The page states the route
commenced 15 June 2024: 「本路線自113年6月15日起實施」.[^ebus-302-shuttle] Four
holiday departures (0700, 0900, 1200, 1700) are marked as dog-friendly
workings.[^ebus-302-shuttle]

The confirmed stop sequence follows parent route 302's own Beitou corridor —
past 捷運忠義站, 捷運復興崗站 and 捷運奇岩站 — but turns off before reaching
Wanhua, ending instead at 兒童新樂園 (Taipei Children's Amusement Park) in
Shilin, by way of 士林監理站.[^tdx-bus] As on 302, none of the three named MRT
stations carries a confirmed join in the curated set.[^tdx-bus] The shuttle
also charges a flat single-section fare where parent 302 charges a
two-section fare with its own buffer zone — consistent with 302區 covering a
shorter, single-fare-band trip rather than simply being a truncated copy of
the parent's fare structure.[^ebus-302-shuttle]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for 302Shuttle; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**302(Shuttle) (41 stops):** Guandu Nature Building -> Guandu Temple -> Senior Citizens Home -> Guandu Junior High School (Guandu Hospital) -> Guandu Village -> Guandu -> Guandu Elementary School (Taipei Chengshih University of Science & Technology) -> Yide St Entrance -> Hexin Hospital -> MRT Zhongyi -> Zhongyang N Rd -> TaoyuanJrHighSchool -> Xintian Temple Beitou Branch Zhongyi -> Zhongyang N Rd Sec 3 -> MRT Fuxinggang -> Movie Studio -> Fengnian Post Office -> Fuxinggang -> Wenhua Elementary School -> Daye & Zhongyang N Rd Intersection -> Beitou Elementary School -> Zhongyang S Rd -> Zhongyang S & Daxing St Intersection -> Cihou Temple -> MRT Qiyan -> Daye Rd (Nungchan monastery) -> Chengde and Gongguan Intresection -> Linong Elementary School -> Shijian St Entrance -> Chengde Rd Sec 7 -> Shipai Fuhsing Temple -> Wenlin Elementary School -> Zhongzheng High School -> MRT Zhishan Sta (Taiwan Traditional Theatre Center) -> MRT Zhishan Sta 1 -> Shilin -> Shilin Jr High School -> Shilin Admin Center -> Yangming High School -> Shilin Motor Vehicles Office -> Taipei Children's Amusement Park[^tdx-bus]

**302(Shuttle) (38 stops):** Shilin High School of Commerce -> Shilin Admin Center -> Shilin Jr High School -> Shilin -> MRT Zhishan Sta 1 -> MRT Zhishan Sta (Taiwan Traditional Theatre Center) -> Zhongzheng High School -> Wenlin Elementary School -> Shipai Fuhsing Temple -> Chengde Rd Sec 7 -> Shijian St Entrance -> Lixian Chengde Rd -> Linong Elementary School -> Chengde and Gongguan Intresection -> Daye Rd (Nungchan monastery) -> Fengjia Arts Museum -> Daye Rd (Daxing St Entrance) -> MRT Beitou Sta(Daxing) -> Zhongyang S Rd -> Beitou Elementary School -> Daye & Zhongyang N Rd Intersection -> Wenhua Elementary School -> Fuxinggang -> Movie Studio -> MRT Fuxinggang -> Zhongyang N Rd Sec 3 -> Xintian Temple Beitou Branch Zhongyi -> TaoyuanJrHighSchool -> Zhongyang N Rd -> MRT Zhongyi -> Hexin Hospital -> Yide St Entrance -> Guandu Elementary School (Taipei Chengshih University of Science & Technology) -> Guandu -> Guandu Village -> Guandu Junior High School (Guandu Hospital) -> Senior Citizens Home -> Guandu Temple[^tdx-bus]

**302(Shuttle) (41 stops):** Guandu Nature Building -> Guandu Temple -> Senior Citizens Home -> Guandu Junior High School (Guandu Hospital) -> Guandu Village -> Guandu -> Guandu Elementary School (Taipei Chengshih University of Science & Technology) -> Yide St Entrance -> Hexin Hospital -> MRT Zhongyi -> Zhongyang N Rd -> TaoyuanJrHighSchool -> Xintian Temple Beitou Branch Zhongyi -> Zhongyang N Rd Sec 3 -> MRT Fuxinggang -> Movie Studio -> Fengnian Post Office -> Fuxinggang -> Wenhua Elementary School -> Daye & Zhongyang N Rd Intersection -> Beitou Elementary School -> Zhongyang S Rd -> Zhongyang S & Daxing St Intersection -> Cihou Temple -> MRT Qiyan -> Daye Rd (Nungchan monastery) -> Chengde and Gongguan Intresection -> Linong Elementary School -> Shijian St Entrance -> Chengde Rd Sec 7 -> Shipai Fuhsing Temple -> Wenlin Elementary School -> Zhongzheng High School -> MRT Zhishan Sta (Taiwan Traditional Theatre Center) -> MRT Zhishan Sta 1 -> Shilin -> Shilin Jr High School -> Shilin Admin Center -> Yangming High School -> Shilin Motor Vehicles Office -> Taipei Children's Amusement Park[^tdx-bus]

**302(Shuttle) (38 stops):** Shilin High School of Commerce -> Shilin Admin Center -> Shilin Jr High School -> Shilin -> MRT Zhishan Sta 1 -> MRT Zhishan Sta (Taiwan Traditional Theatre Center) -> Zhongzheng High School -> Wenlin Elementary School -> Shipai Fuhsing Temple -> Chengde Rd Sec 7 -> Shijian St Entrance -> Lixian Chengde Rd -> Linong Elementary School -> Chengde and Gongguan Intresection -> Daye Rd (Nungchan monastery) -> Fengjia Arts Museum -> Daye Rd (Daxing St Entrance) -> MRT Beitou Sta(Daxing) -> Zhongyang S Rd -> Beitou Elementary School -> Daye & Zhongyang N Rd Intersection -> Wenhua Elementary School -> Fuxinggang -> Movie Studio -> MRT Fuxinggang -> Zhongyang N Rd Sec 3 -> Xintian Temple Beitou Branch Zhongyi -> TaoyuanJrHighSchool -> Zhongyang N Rd -> MRT Zhongyi -> Hexin Hospital -> Yide St Entrance -> Guandu Elementary School (Taipei Chengshih University of Science & Technology) -> Guandu -> Guandu Village -> Guandu Junior High School (Guandu Hospital) -> Senior Citizens Home -> Guandu Temple[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 4 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route
length and headway detail remain TBC.[^tdx-bus] The service-start date above comes directly from the
operator's own schedule page, so no further secondary corroboration was
sought.
