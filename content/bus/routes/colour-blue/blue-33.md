---
title: BL33 / 藍33
summary: Blue-line feeder route BL33 (藍33).
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
    note: Lists 藍33 under 捷運藍線接駁公車.
  - id: ebus-bl33
    title: BL33 route schedule
    titleOriginal: 藍33班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412003300
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 五福新村–新北板橋公車站 corridor, service span, fare, the school-day detour note and operator contact; the route has no published holiday service.
---

## Classification and corridor

The official catalogue lists 藍33 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 五福新村 - 新北板橋公車站, weekday-only service 0700–0815 with no holiday service, one-section fare and 臺北客運五福站 as the service contact. It records that the 07:00 departure detours via 光復國小/國中 except during school breaks.[^ebus-bl33]

The confirmed stop sequence runs from 五福新村, past 振義里/光復橋頭/真武廟, then
through 埔墘/懷仁街/中山公園, past 江翠國中/捷運新埔站, into 致理科技大學/中山國中,
ending at 新北板橋公車站.[^tdx-bus] Three confirmed interchanges are
recorded in the curated stop-ID join set: Banqiao (BL07), Xinpu (BL08) and
Jiangzicui (BL09); a further curated code, Y16, also resolves to
Banqiao.[^tdx-bus] TDX records a second subroute, 藍33繞, adding stops at
光復國小 and 光復高中 that match the schedule page's own school-day detour
note.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and the detour's creation date and rationale remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 藍33 or a
stated reason for its own single-hour-and-a-quarter, weekday-only,
07:00–08:15 span was found in this search — a markedly narrow schedule window, consistent
with a school-run service rather than a general-purpose all-day feeder.
Which primary or secondary school the 光復國小/光復高中 detour actually serves,
and why it is suspended during school breaks rather than simply dropped
from the route entirely, was likewise not established.
