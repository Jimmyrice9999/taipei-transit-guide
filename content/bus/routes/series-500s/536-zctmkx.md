---
title: 536區 / 536Shuttle
summary: General-bus shuttle route 536區 (台北海大 - 榮總), opened 1 July 2024.
updated: 2026-08-19
facts:
  - label: Service class
    value: General bus service (一般公車)
    source: ebus-general
  - label: Launch
    value: Opened 1 July 2024 alongside a departure cut on the full-length 536 line
    source: ebus-536shuttle
specs:
  - label: Route length
    value: TBC
    unit: km
  - label: Service span
    value: "Weekday 0610–2040, holiday 0540–2230"
    source: ebus-536shuttle
  - label: Headway by day type
    value: TBC
  - label: Fare / transfer
    value: Two-section fare (兩段票)
    source: ebus-536shuttle
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
    note: Lists 536區 under 一般公車, as a routeid entry separate from the plain 536 route.
  - id: ebus-536shuttle
    title: 536Shuttle route schedule
    titleOriginal: 536區班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100053620
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: 'Full official schedule page. States verbatim termini "台北海大 - 榮總", weekday span 0610–2040, holiday span 0540–2230, the two-section fare, contact "首都客運社子站:02-2810-8566", that the current arrangement took effect "113年7月1日" (1 July 2024), and 21 weekday and 14 holiday departures.'
  - id: zhwikiversity-536shuttle
    title: Taipei joint-operation bus route 536
    titleOriginal: 台北聯營公車536路線
    publisher: Wikiversity contributors, 維基學院
    url: https://zh.wikiversity.org/zh-tw/%E5%8F%B0%E5%8C%97%E8%81%AF%E7%87%9F%E5%85%AC%E8%BB%8A536%E8%B7%AF%E7%B7%9A
    accessed: 2026-08-19
    kind: secondary
    lang: zh-Hant
    note: Community-compiled operational history covering both 536 and 536區 jointly. States the shuttle opened 1 July 2024 alongside the full-length line's weekday cut from 34 to 10 and holiday suspension, and that from 1 September 2024 the shuttle's weekday count fell from 24 to 21 while its holiday count of 14 stayed unchanged — matching the current schedule page. The 1 July 2024 launch date is corroborated against the primary schedule page; earlier detail was not independently corroborated in this search.
---

## Classification and corridor

The official catalogue lists 536區 under 一般公車, filed as its own routeid
entry separate from the plain 536 route.[^ebus-general] Its full schedule
page gives 台北海大 - 榮總, weekday service 0610–2040 and holiday service
0540–2230, a two-section fare (兩段票), and 首都客運社子站 as the service
contact, and states the current arrangement took effect from 113年7月1日 (1
July 2024).[^ebus-536shuttle] The page lists 21 weekday departures and 14
holiday departures.[^ebus-536shuttle]

## History

A community wiki covering both 536 and 536區 on one page records this
shuttle opening on 1 July 2024, when the full-length 536 line's weekday
departures were simultaneously cut from 34 to 10 and its holiday service
suspended; it further records that from 1 September 2024 the shuttle's
weekday count fell from 24 to 21 while its holiday count of 14 stayed
unchanged, matching the current schedule page.[^zhwikiversity-536shuttle]
The 1 July 2024 launch date is corroborated between the primary schedule
page and the secondary wiki.[^ebus-536shuttle][^zhwikiversity-536shuttle]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route
length remains TBC.[^tdx-bus]
