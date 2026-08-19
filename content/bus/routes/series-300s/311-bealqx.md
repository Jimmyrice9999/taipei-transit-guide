---
title: 311區 / 311 Shu.
summary: General-bus shuttle route 311區 (中和 - 捷運公館站), weekday only.
updated: 2026-08-19
facts:
  - label: Service class
    value: General bus service (一般公車)
    source: ebus-general
  - label: 2018 realignment
    value: Terminus-end stops adjusted 24 January 2018, dropping 三軍總醫院/耕莘文教院/台電大樓 and adding 福和國中/福和路/福和里
    source: zhwikiversity-311-shuttle
specs:
  - label: Route length
    value: TBC
    unit: km
  - label: Service span
    value: "Weekday 0600–2000; no holiday service"
    source: ebus-311-shuttle
  - label: Headway by day type
    value: "10 weekday departures"
    source: ebus-311-shuttle
  - label: Fare / transfer
    value: Single-section fare (一段票)
    source: ebus-311-shuttle
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
    note: Lists 311區 under 一般公車, filed as its own routeid entry distinct from the plain 311 route.
  - id: ebus-311-shuttle
    title: 311區 route schedule
    titleOriginal: 311區班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100031120
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 中和–捷運公館站 corridor, weekday-only service span, fare and operator contact (中興巴士中和站 02-2225-9629).
  - id: zhwikiversity-311-shuttle
    title: Taipei joint-operation bus route 311
    titleOriginal: 台北聯營公車311路線
    publisher: Wikiversity contributors, 維基學院
    url: https://zh.wikiversity.org/zh-tw/%E5%8F%B0%E5%8C%97%E8%81%AF%E7%87%9F%E5%85%AC%E8%BB%8A311%E8%B7%AF%E7%B7%9A
    accessed: 2026-08-19
    kind: secondary
    lang: zh-Hant
    note: Community-compiled operational history covering both 311 and 311區 jointly, not independently verified against a primary PTO/operator announcement in this search. States the shuttle service launched in 2014 and its terminus-end stops were adjusted on 24 January 2018, dropping 三軍總醫院、耕莘文教院、台電大樓 and adding 福和國中、福和路、福和里.
---

## Classification and corridor

The official catalogue lists 311區 under 一般公車, filed as its own routeid
entry distinct from the plain 311 route.[^ebus-general] Its full schedule
page gives 中和 - 捷運公館站, weekday service only 0600–2000 (holiday service
停駛), a single-section fare (一段票), and 中興巴士中和站 as the service
contact.[^ebus-311-shuttle] The page lists 10 weekday departures.[^ebus-311-shuttle]

The confirmed stop sequence covers only the New Taipei half of parent route
311's alignment — 中和 through 永和 and across 福和橋 — ending at 捷運公館站
rather than continuing along 仁愛路 into Da'an and Songshan.[^tdx-bus] As on
311, that one MRT-named stop carries no confirmed join in the curated
set.[^tdx-bus] Ending at 捷運公館站 rather than continuing to 311's own 松山
terminus makes 311區 a genuine cross-town shortcut in its own right, linking
中和/永和 directly to the NTU/Gongguan area without requiring a transfer at
the shared 福和橋 crossing.[^tdx-bus]

## History

A community wiki states this shuttle service launched in 2014 and that its
terminus-end stops were adjusted on 24 January 2018, dropping 三軍總醫院、
耕莘文教院、台電大樓 and adding 福和國中、福和路、福和里.[^zhwikiversity-311-shuttle]
This is a secondary source and was not corroborated against a primary PTO
or 中興巴士 announcement in this search.

## Research status

The TDX snapshot supplies the changing stop and geometry records; route
length remains TBC.[^tdx-bus] The 2014
launch year given by the wiki carries no specific date in the material
reviewed and is reported here only as an approximate lead, not a confirmed
fact.
