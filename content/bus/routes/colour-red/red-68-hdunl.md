---
title: R68B / 紅68預
summary: TDX colour-red record R68B (紅68預); separate official service status is TBC.
updated: 2026-08-18
line: R
facts:
  - label: Service class
    value: TDX colour-red record; official catalogue omission
    source: tdx-bus
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
    note: Supports the normalized route record named 紅68預 and its colour-red group in the committed TDX-derived snapshot; it does not by itself establish a route history or current operator timetable.
  - id: ebus-red
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: The full official catalogue lists 39 labels under 捷運紅線接駁公車 and does not list 紅68預.
  - id: ebus-r68
    title: R68 route schedule
    titleOriginal: 紅68班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111006800
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official page is labelled 紅68, not 紅68預; it records current appointment-only trials within the 紅68 service but does not establish a separate 紅68預 route.
---

## Classification conflict

The committed TDX snapshot contains a colour-red record named 紅68預, which is why this page exists.[^tdx-bus] The full official catalogue lists 39 labels under 捷運紅線接駁公車 and omits 紅68預.[^ebus-red] The full official schedule page is labelled 紅68 and records appointment-only trial workings within that service; it does not name a separate 紅68預 route.[^ebus-r68]

Despite the classification conflict, the TDX-only record does carry its
own confirmed stop sequence and curated interchange: from 洲美里, past
洲美街219號/洲美國小/福美站/三王宮, through 福美承平路口, and on the outbound
working past 遠雄商舟大樓/中鼎第二總部大樓, ending at 捷運芝山站(福華).[^tdx-bus]
One confirmed interchange is recorded in the curated stop-ID join set:
Zhishan (R17), matching the route's own terminus and identical to plain
紅68's own confirmed interchange.[^tdx-bus] The stop sequence is otherwise
near-identical to plain 紅68's own, differing only in whether the 中鼎
第二總部大樓 detour is included — the same detour the schedule page's
own appointment-only note describes.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for R68B; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**R68B (9 stops):** Zhoumei Village -> No219 Zhoumei St -> Zhoumei Elementary School -> Fu Mei Stop -> Sanwang Temple -> FuMei ChengPing Intersection -> Farglory Ark Building -> CTCI Second Headquarters -> MRT Zhishan Sta (Fuhua)[^tdx-bus]

**R68B (12 stops):** Zhongshan N Rd Entrance (Dexing) -> Shilin Electric and Engineering Corp (Zhongshan & Dexing Rd Intersection) -> Dexing (Zhongshan & Zhongcheng Rd Intersection) -> MRT Zhishan Sta (Fuguo) -> Fuguo ChengXin Intersection -> CTCI Second Headquarters -> FuMei ChengPing Intersection -> Sanwang Temple -> Fu Mei Stop -> Zhoumei Elementary School -> No219 Zhoumei St -> Zhoumei Village[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 0 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The relationship between the TDX-only record and the official 紅68 appointment workings remains TBC; no separate opening date, corridor rationale, operator change, service span, headway, fare or route-length claim is published here.[^tdx-bus] Whether this record reflects a genuinely separate short working, a data artefact of the
appointment-only booking system, or a naming inconsistency within the
same operator's own TDX submission was not established in this search.
