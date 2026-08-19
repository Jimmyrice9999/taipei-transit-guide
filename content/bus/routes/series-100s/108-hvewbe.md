---
title: 108 / 108
summary: General-bus route 108 (陽明山公車總站 circular).
updated: 2026-08-19
facts:
  - label: Service class
    value: General bus service (一般公車)
    source: ebus-general
  - label: 2012 headway widening
    value: Headway widened from weekday 20–30 min/holiday 8–15 min to weekday 30–40 min/holiday 20–30 min, effective 20 September 2012
    source: zhwikiversity-108
specs:
  - label: Route length
    value: TBC
    unit: km
  - label: Service span
    value: "Weekday and holiday 0700–1730"
    source: ebus-108
  - label: Headway by day type
    value: "Weekday 30–40 min, holiday 20–30 min (peak and off-peak alike)"
    source: ebus-108
  - label: Fare / transfer
    value: Single-section fare (一段票)
    source: ebus-108
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
    note: Lists 108 under 一般公車, as a routeid entry separate from its 108區 shuttle variant.
  - id: ebus-108
    title: 108 route schedule
    titleOriginal: 108班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100010800
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: 'Full official schedule page. Its 起迄站名 field reads verbatim "陽明山公車總站 - 陽明山公車總站" (the same name on both sides), giving service span, headway by day type, fare and operator contact.'
  - id: zhwikiversity-108
    title: Taipei joint-operation bus route 108
    titleOriginal: 台北聯營公車108路線
    publisher: Wikiversity contributors, 維基學院
    url: https://zh.wikiversity.org/wiki/%E5%8F%B0%E5%8C%97%E8%81%AF%E7%87%9F%E5%85%AC%E8%BB%8A108%E8%B7%AF%E7%B7%9A
    accessed: 2026-08-19
    kind: secondary
    lang: zh-Hant
    note: 'Community-compiled operational history, not independently verified against a primary PTO/operator announcement in this search. States the route runs 陽明山 to 擎天崗 (起點站為陽明山，終點站為擎天崗) rather than as a loop, and records dated headway and fleet changes.'
---

## Classification and corridor

The official catalogue lists 108 under 一般公車, as a separate routeid entry
from its 108區 shuttle variant.[^ebus-general] Its full schedule page gives
service span weekday and holiday 0700–1730, headway weekday 30–40 minutes and
holiday 20–30 minutes at both peak and off-peak, a single-section fare
(一段票), and 大都會客運陽明山站 as the service contact.[^ebus-108]

The schedule page's own 起迄站名 field names the same stop, 陽明山公車總站, on
both sides, which reads as a loop starting and ending at the Yangmingshan bus
terminal.[^ebus-108] A community wiki instead describes the route as running
from 陽明山 to a different terminus, 擎天崗 (起點站為陽明山，終點站為擎天崗),
not as a loop.[^zhwikiversity-108] This is a direct conflict between a primary
field and a secondary description; both values are published here and neither
is picked.

## History

The same wiki records a 20 September 2012 headway change, from weekday 20–30
minutes/holiday 8–15 minutes to weekday 30–40 minutes/holiday 20–30
minutes.[^zhwikiversity-108] The post-change values it states match the
headway currently shown on the primary schedule page exactly.[^ebus-108] It
also records a fleet delivery of 5 new Toyota mid-size buses dated 1 March
2022.[^zhwikiversity-108] Neither claim was corroborated against a primary
PTO or 大都會客運 announcement in this search.

## Research status

The TDX snapshot supplies the changing stop and geometry records; route
length remains TBC.[^tdx-bus] A direct fetch of 大都會客運's own website
(https://www.mtcbus.com.tw/index.php?m=Route&a=detail&id=00108) returned only
a sitemap listing, not route-specific content, so it could not be used to
settle the terminus conflict above.
