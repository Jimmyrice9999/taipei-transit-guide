---
title: R9 / 紅9
summary: Red-line feeder route R9 (紅9).
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
    note: Lists 紅9 under 捷運紅線接駁公車.
  - id: ebus-r9
    title: R9 route schedule
    titleOriginal: 紅9班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111000900
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 蘆洲–捷運劍潭站 corridor, weekday/holiday service spans, weekday peak interval, one-section fare and 三重客運蘆一站 contact.
---

## Classification and corridor

The official catalogue lists 紅9 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 蘆洲 - 捷運劍潭站, weekday service 0540–2330, holiday service 0600–2300, one-section fare and 三重客運蘆一站 as the service contact.[^ebus-r9] It records a weekday peak interval of 12–15 minutes.[^ebus-r9]

The confirmed stop sequence runs from 忠義國小, past 柳堤公園/中原公園, through
捷運蘆洲站/仁愛國小/民族民義街口, along 復興路/捷運三民高中站, into 三重's 溪墘/
捷運徐匯中學站/尼加拉瓜公園, then past 分子尾/五華國小/重陽橋, ending near 士林
區行政中心/捷運劍潭站.[^tdx-bus] Four confirmed interchanges are recorded
in the curated stop-ID join set: St. Ignatius High School (O52), Sanmin
Senior High School (O53), Luzhou (O54) and Jiantan (R15).[^tdx-bus] The
route runs a single subroute under one operator, 三重客運.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅9 was found in
this search, nor a stated reason for confirming four interchanges spread
across three different districts — Luzhou, Sanchong and Shilin — along a
single continuous corridor. No predecessor-route or renumbering history
for 紅9 was located either, nor a stated reason for the operator, 三重客運,
running this far into Shilin from its own Sanchong/Luzhou base, or for
pairing 蘆洲 with 捷運劍潭站 specifically as the route's own termini.
