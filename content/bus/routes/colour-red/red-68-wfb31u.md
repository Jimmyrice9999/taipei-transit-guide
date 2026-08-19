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

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length and a headway-by-day-type figure also remain TBC, and no
dated history for 紅68 or the reason behind its own TDX-only 紅68預
classification conflict was found in this search.[^tdx-bus] No predecessor-route
or renumbering history for 紅68 was located either, nor a stated reason
for pairing 北投士林科技園區 with 捷運芝山站 specifically as the route's own
termini.[^tdx-bus] A headway-by-day-type figure is likewise absent from the primary
schedule page beyond its own weekday-only span statement.[^ebus-r68]
