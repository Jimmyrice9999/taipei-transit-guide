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

## Research status

The relationship between the TDX-only record and the official 紅68 appointment workings remains TBC; no separate opening date, corridor rationale, operator change, service span, headway, fare or route-length claim is published here.[^tdx-bus] Whether this record reflects a genuinely separate short working, a data artefact of the
appointment-only booking system, or a naming inconsistency within the
same operator's own TDX submission was not established in this search.
