---
title: BL43 / 藍43
summary: Blue-line feeder route BL43 (藍43).
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
    note: Lists 藍43 under 捷運藍線接駁公車.
  - id: ebus-bl43
    title: BL43 route schedule
    titleOriginal: 藍43班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412004300
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 三峽–捷運永寧站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍43 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 三峽 - 捷運永寧站, weekday service 0600–2000, holiday service 1730–1930, one-section fare and 臺北客運三峽二站 as the service contact.[^ebus-bl43] TDX carries a separate 藍43延南天母 record (canonical slug `blue-43-1c3c509`) with the same published termini and operator; their relationship is TBC.

The confirmed stop sequence runs from 三峽二站, past 姑娘廟/三樹路/農業改良場,
through 柑園/民權街口/紅瓦厝/柑城橋, then along 成功街口/自強街口/牛軋糖博物館/亞洲路,
ending at 捷運永寧站.[^tdx-bus] One confirmed interchange is recorded in the
curated stop-ID join set: Yongning (BL02), matching the route's own
terminus.[^tdx-bus] The stop sequence is otherwise identical to 藍43延南天母's
own, which continues past 捷運永寧站 into the 南天母 hills rather than
stopping there.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for BL43; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**BL43 (25 stops):** Sanxia Stop 2 -> Guniang Temple -> Sanshu Rd -> Agricultural Research and Extension Station -> Nanyuan -> Jiayuan Xuechin Rd Intersection -> Shibajian -> Ganyuan -> Ganyuan Elementary School -> Minquan St Entrance -> Ganyuan St -> Dongyuan Village -> Ganyuan Precinct -> Hungwacuo -> Gancheng Bridge -> Honhai -> Goodwill -> Chenggong St Entrance -> Ziqiang St Entrance -> Taiwan Nougot Museum -> Yazhou Rd -> Zhonghua High School(Chenglin Rd) -> Zhonghua High School 1 -> Tucheng 2 -> MRT Yongning Station[^tdx-bus]

**BL43 (28 stops):** MRT Yongning Station -> Tucheng (II) -> Zhonghua High School 1 -> Zhonghua High School(Yazhou Rd) -> Yazhou Rd -> Taiwan Nougot Museum -> Ziqiang St Entrance -> Chenggong St Entrance -> Zhongxing Rd Entrance -> Service Center -> Minzu Rd Entrance -> Minquan St Entrance -> Fuan St Entrance -> Gancheng Bridge -> Hungwacuo -> Ganyuan Precinct -> Dongyuan Village -> Ganyuan St -> Minquan St Entrance -> Ganyuan Elementary School -> Ganyuan -> Shibajian -> Landscape Wanping Park(Gongcuozi) -> Jiayuan Xuechin Rd Intersection -> Nanyuan -> Agricultural Research and Extension Station -> Sanshu Rd -> Sanxia Stop 2[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and any dated relationship to 藍43延南天母 remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 藍43 or a
stated reason for the schedule page's own 1730–1930 holiday window,
markedly narrower than its 0600–2000 weekday span, was found in this
search.[^ebus-bl43] No predecessor-route or renumbering history for 藍43
was located either, and a headway-by-day-type figure is likewise absent
from the primary schedule page beyond its own weekday and holiday span
statement.[^ebus-bl43]
