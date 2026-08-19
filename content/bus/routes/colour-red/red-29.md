---
title: R29 / 紅29
summary: Red-line feeder route R29 (紅29).
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
    note: Lists 紅29 under 捷運紅線接駁公車.
  - id: ebus-r29
    title: R29 route schedule
    titleOriginal: 紅29班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111002900
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 內湖(新湖二路)–捷運民權西路站 corridor, weekday/holiday service spans, one-section fare, 東南客運內湖站 contact and the current 三軍總醫院內湖院區 working.
---

## Classification and corridor

The official catalogue lists 紅29 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 內湖(新湖二路) - 捷運民權西路站, weekday and holiday service 0600–2340, one-section fare and 東南客運內湖站 as the service contact. It records that 0800–2130 trips serve 三軍總醫院內湖院區, with 2130, 2230 and 2340 departures after 2130 on both day types.[^ebus-r29]

At 41-45 stops each way, the confirmed stop sequence is one of the longer
routes in this batch: from 東南客運停車場 in Neihu, past 三總內湖站/將軍嶺, along
成功路三段 past a stop literally named 捷運內湖站, through 瑞光/民權大橋, then
the length of 民權東路 past 民權龍江路口/民權建國路口, ending at 捷運民權西路站.[^tdx-bus] Five confirmed interchanges are recorded in the curated stop-ID
join set: Zhongshan Junior High School (BR12), Songshan Airport (BR13),
Neihu (BR19), Zhongshan Elementary School (O10) and Minquan W. Rd.
(O11/R13).[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅29 was found
in this search, nor a stated reason for the 三軍總醫院內湖院區 detour's own
0800–2130 window rather than running it all day.[^tdx-bus] A headway-by-day-type
figure is likewise absent from the primary schedule page beyond its own
departures listed after 2130.[^ebus-r29]
