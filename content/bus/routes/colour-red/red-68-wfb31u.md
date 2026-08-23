---
title: R68 / 紅68
summary: Red-line feeder route R68 (紅68).
updated: 2026-08-18
line: R
facts:
  - label: Service class
    value: MRT red-line feeder
    source: ebus-red
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
  - id: ebus-red
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Lists 紅68 under 捷運紅線接駁公車.
  - id: ebus-r68
    title: R68 route schedule
    titleOriginal: 紅68班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111006800
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 北投士林科技園區–捷運芝山站 corridor, weekday service, holiday suspension, one-section fare, 首都客運士林站 contact, 中鼎第二總部大樓 detours and appointment-only trials.
---

## Classification and corridor

The official catalogue lists 紅68 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 北投士林科技園區 - 捷運芝山站, weekday service 0640–1830, no regular holiday service, one-section fare and 首都客運士林站 as the service contact. It records specified detours via 中鼎第二總部大樓 and appointment-only trial workings on both weekdays and holidays.[^ebus-r68]

The confirmed stop sequence runs from 洲美里, past 洲美街219號/洲美國小/福美
站/三王宮, through 福美承平路口/福國承信路口, ending at 捷運芝山站(福華) —
matching the TDX-only 紅68預 record's own near-identical corridor.[^tdx-bus]
One confirmed interchange is recorded in the curated stop-ID join set:
Zhishan (R17), matching the route's own terminus.[^tdx-bus] TDX records
four named subroutes distinguishing the 中鼎大樓 detour choice and the
appointment-only booking condition the schedule page's own note
describes.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 8 directional or variant stop sequences for R68; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**R68 (8 stops):** Zhoumei Village -> No219 Zhoumei St -> Zhoumei Elementary School -> Fu Mei Stop -> Sanwang Temple -> FuMei ChengPing Intersection -> Fuguo ChengXin Intersection -> MRT Zhishan Sta (Fuhua)[^tdx-bus]

**R68 (11 stops):** Zhongshan N Rd Entrance (Dexing) -> Shilin Electric and Engineering Corp (Zhongshan & Dexing Rd Intersection) -> Dexing (Zhongshan & Zhongcheng Rd Intersection) -> MRT Zhishan Sta (Fuguo) -> Fuguo ChengXin Intersection -> FuMei ChengPing Intersection -> Sanwang Temple -> Fu Mei Stop -> Zhoumei Elementary School -> No219 Zhoumei St -> Zhoumei Village[^tdx-bus]

**R68 (10 stops):** Zhoumei Village -> No219 Zhoumei St -> Zhoumei Elementary School -> Fu Mei Stop -> Sanwang Temple -> FuMei ChengPing Intersection -> Farglory Ark Building -> CTCI Second Headquarters -> Fuguo ChengXin Intersection -> MRT Zhishan Sta (Fuhua)[^tdx-bus]

**R68 (11 stops):** Zhongshan N Rd Entrance (Dexing) -> Shilin Electric and Engineering Corp (Zhongshan & Dexing Rd Intersection) -> Dexing (Zhongshan & Zhongcheng Rd Intersection) -> MRT Zhishan Sta (Fuguo) -> Fuguo ChengXin Intersection -> FuMei ChengPing Intersection -> Sanwang Temple -> Fu Mei Stop -> Zhoumei Elementary School -> No219 Zhoumei St -> Zhoumei Village[^tdx-bus]

**R68 (8 stops):** Zhoumei Village -> No219 Zhoumei St -> Zhoumei Elementary School -> Fu Mei Stop -> Sanwang Temple -> FuMei ChengPing Intersection -> Fuguo ChengXin Intersection -> MRT Zhishan Sta (Fuhua)[^tdx-bus]

**R68 (12 stops):** Zhongshan N Rd Entrance (Dexing) -> Shilin Electric and Engineering Corp (Zhongshan & Dexing Rd Intersection) -> Dexing (Zhongshan & Zhongcheng Rd Intersection) -> MRT Zhishan Sta (Fuguo) -> Fuguo ChengXin Intersection -> CTCI Second Headquarters -> FuMei ChengPing Intersection -> Sanwang Temple -> Fu Mei Stop -> Zhoumei Elementary School -> No219 Zhoumei St -> Zhoumei Village[^tdx-bus]

**R68 (10 stops):** Zhoumei Village -> No219 Zhoumei St -> Zhoumei Elementary School -> Fu Mei Stop -> Sanwang Temple -> FuMei ChengPing Intersection -> Farglory Ark Building -> CTCI Second Headquarters -> Fuguo ChengXin Intersection -> MRT Zhishan Sta (Fuhua)[^tdx-bus]

**R68 (12 stops):** Zhongshan N Rd Entrance (Dexing) -> Shilin Electric and Engineering Corp (Zhongshan & Dexing Rd Intersection) -> Dexing (Zhongshan & Zhongcheng Rd Intersection) -> MRT Zhishan Sta (Fuguo) -> Fuguo ChengXin Intersection -> CTCI Second Headquarters -> FuMei ChengPing Intersection -> Sanwang Temple -> Fu Mei Stop -> Zhoumei Elementary School -> No219 Zhoumei St -> Zhoumei Village[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 4 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length and a headway-by-day-type figure also remain TBC, and no
dated history for 紅68 or the reason behind its own TDX-only 紅68預
classification conflict was found in this search.[^tdx-bus] No predecessor-route
or renumbering history for 紅68 was located either, nor a stated reason
for pairing 北投士林科技園區 with 捷運芝山站 specifically as the route's own
termini.[^tdx-bus] A headway-by-day-type figure is likewise absent from the primary
schedule page beyond its own weekday-only span statement.[^ebus-r68]
