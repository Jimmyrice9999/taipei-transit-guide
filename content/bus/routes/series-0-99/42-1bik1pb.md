---
title: 42區 / 42Shuttle
summary: General-bus route 42區 (大直 - 捷運圓山站).
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
    value: "Weekday 0600–1900, holiday 0630–1830"
    source: ebus-42qu
  - label: Headway by day type
    value: TBC
  - label: Fare / transfer
    value: One-section fare (一段票), no stated buffer zone
    source: ebus-42qu
sources:
  - id: tdx-bus
    title: TDX bus data
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field. Records a single subroute, TPE157594, named 42(Shuttle) / 42區, with no dog or half-route variants.
  - id: ebus-general
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 42區 under 一般公車, as a routeid entry separate from the plain 42 route; also cross-listed under 低地板 (low-floor fleet).
  - id: ebus-42qu
    title: 42區 route schedule
    titleOriginal: 42區班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100004220
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 大直–捷運圓山站 corridor, service span, one-section fare, and operator contact (指南客運故宮站 02-2882-2126). Gives all 9 weekday and 10 holiday departure times.
  - id: csgroup-574
    title: "Zhinan Bus notice: 42 and 42區間 departure-count reduction, 15 May 2021"
    titleOriginal: "(班次調整)5/15起，指南客運42、42區間調減發車班次"
    publisher: 中興巴士集團 (Chungshing Bus Group, parent of 指南客運), 中興巴士集團
    url: https://www.csgroup-bus.com.tw/?module=news&func=_detail&id=574
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Operator's own notice giving, from 15 May 2021, the new weekday/holiday departure schedules for both the 42 main line and the 42區間 (=42區) shuttle. The 42區間 figures it states — weekday 0600,0650,0800,1400,1450,1540,1630,1800,1900 and holiday 0630,0730,0830,0930,1130,1330,1530,1630,1730,1830 — match the current ebus schedule page exactly."
  - id: csgroup-388
    title: "Zhinan Bus notice: service-level adjustment for routes 28, 42 (including shuttle), 256"
    titleOriginal: 指南客運28、42(含區間車)、256調整服務水準公告
    publisher: 中興巴士集團 (Chungshing Bus Group, parent of 指南客運), 中興巴士集團
    url: https://www.csgroup-bus.com.tw/?module=news&func=_detail&id=388
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Proposes moving routes 28, 42 (含區間車, i.e. including 42區) and 256 to a reservation system from 29 January 2021, under which an unreserved working would not run.
  - id: csgroup-425
    title: "Zhinan Bus notice: 42 and 42區 portion of the 29 January 2021 change deferred"
    titleOriginal: (試辦調整修正)28、256自1/29起調整及預約班次、及42、42區暫緩試辦
    publisher: 中興巴士集團 (Chungshing Bus Group, parent of 指南客運), 中興巴士集團
    url: https://www.csgroup-bus.com.tw/?module=news&func=_detail&id=425
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "States verbatim: 42、42區間，原訂1/29起試辦調整與預約班次一案，暫緩實施 — the reservation-system trial proposed for 42 and 42區 was deferred, while routes 28 and 256 proceeded as planned on 29 January 2021."
  - id: csgroup-2185
    title: "Zhinan Bus notice: Mingshui Road stop relocation, 24 July 2025"
    titleOriginal: 中山區「明水路一」(往北站位)114年7月24日起，遷移至中山區明水路636至638號前
    publisher: 指南客運, 指南客運
    url: https://www.csgroup-bus.com.tw/?module=news&func=_detail&id=2185
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "States verbatim the affected routes as 42含區、208直 (route 42 including its 42區 shuttle, and route 208直) — the northbound 明水路一 stop moved to outside 明水路636至638號 from 24 July 2025."
  - id: zhwikiversity-42
    title: Taipei joint-operation bus route 42
    titleOriginal: 台北聯營公車42路線
    publisher: Wikiversity contributors, 維基學院
    url: https://zh.wikiversity.org/zh-tw/%E5%8F%B0%E5%8C%97%E8%81%AF%E7%87%9F%E5%85%AC%E8%BB%8A42%E8%B7%AF%E7%B7%9A
    accessed: 2026-08-19
    kind: secondary
    lang: zh-Hant
    note: Community-compiled operational history covering both the plain 42 line and the 42(區間車)/42區 shuttle together; not independently verified except where its own footnotes were followed to the operator's site.
  - id: wiki-collision-check
    title: City bus route lists for Taichung, Taoyuan and Kaohsiung
    titleOriginal: 臺中市公車路線列表／桃園市公車路線列表／高雄市公車路線列表
    publisher: Wikipedia contributors, 維基百科
    url: https://zh.wikipedia.org/wiki/%E8%87%BA%E4%B8%AD%E5%B8%82%E5%85%AC%E8%BB%8A%E8%B7%AF%E7%B7%9A%E5%88%97%E8%A1%A8
    accessed: 2026-08-19
    kind: secondary
    lang: zh-Hant
    note: Route-number listing pages for the three other cities' bus systems, checked for a plain-numbered 42, 46 or 49 route; none found in any of the three.
---

## Classification and corridor

The official catalogue lists 42區 under 一般公車, as a routeid entry separate
from the plain 42 route.[^ebus-general] Its full schedule page gives 大直 -
捷運圓山站, weekday service 0600–1900 and holiday service 0630–1830, a
one-section fare (一段票) with no stated buffer zone, and 指南客運故宮站 as the
service contact.[^ebus-42qu] Departures are not run to a fixed interval: the
page lists 9 weekday departures (0600, 0650, 0800, 1400, 1450, 1540, 1630,
1800, 1900) with a six-hour gap between the 0800 and 1400 workings, and 10
holiday departures (0630, 0730, 0830, 0930, 1130, 1330, 1530, 1630, 1730,
1830).[^ebus-42qu]

## History

An operator notice from 中興巴士集團, the parent group of 指南客運, records that
from 15 May 2021 both the 42 main line and the 42區間 (42區) shuttle had their
departure counts reduced; the notice states the 42區間 schedule directly, and
its weekday and holiday departure lists match the current schedule page
exactly.[^csgroup-574] An earlier notice had proposed moving routes 28, 42
(含區間車, including the shuttle) and 256 to a reservation system from 29
January 2021, under which an unreserved working would not run, but a
follow-up notice deferred the 42 and 42區 portion of that change while routes
28 and 256 proceeded as planned.[^csgroup-388][^csgroup-425] A further
operator notice records that from 24 July 2025 the northbound 明水路一 stop,
used by both 42 (含區, i.e. including its 42區 shuttle) and route 208直, moved
to outside 明水路636至638號.[^csgroup-2185]

## Research status

The TDX snapshot supplies the changing stop and geometry records and records
a single subroute for this route; route length and a fixed headway figure
remain TBC.[^tdx-bus] A community wikiversity entry bundles the history of 42
and 42區 together in one page; its footnoted citations were followed directly
to 中興巴士集團's own announcement pages, which is how the operator notices
above were found and verified.[^zhwikiversity-42] A search for same-numbered
routes 42, 46 and 49 in Kaohsiung, Taichung and Taoyuan's city bus systems
found no plain-numbered match in any of the three cities' route lists.[^wiki-collision-check]
This search does not rule out a route existing under a different
classification not covered by those list pages.
