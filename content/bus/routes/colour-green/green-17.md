---
title: G17 / 綠17
summary: Green-line feeder route G17 (綠17).
updated: 2026-08-18
line: G
facts:
  - label: Service class
    value: MRT green-line feeder
    source: ebus-green
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
  - id: ebus-green
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Lists 綠17 under 捷運綠線接駁公車.
  - id: ebus-g17
    title: G17 route schedule
    titleOriginal: 綠17班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0113001700
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 華中河濱公園–大稻埕碼頭 corridor, service span and operator contact; the page does not state a fare class.
---

## Classification and corridor

The official catalogue lists 綠17 under 捷運綠線接駁公車.[^ebus-green] Its full schedule page gives 華中河濱公園 - 大稻埕碼頭, weekday service 0740–1840 with no holiday service, and 首都客運東園站 as the service contact. The schedule page does not publish a fare class for this route.[^ebus-g17]

The confirmed stop sequence runs from 華中河濱公園, a riverside park in
Wanhua, past 龍山寺 (Longshan Temple) and through central Taipei, ending at
大稻埕碼頭 (Dadaocheng Wharf), the historic pier on the Tamsui River waterfront.[^tdx-bus] It calls at four confirmed interchanges along the way: 捷運龍山寺站
(Longshan Temple, BL10) on the Bannan Line, 捷運西門站 — served by both the
Bannan Line (BL11) and the Songshan–Xindian Line (G12) — and 捷運北門站
(Beimen, G13).[^tdx-bus] Despite its own colour-line classification as a
green-line feeder, its four confirmed interchanges split evenly between the
Bannan Line and the green line itself, at 龍山寺/西門 and 西門/北門
respectively.[^tdx-bus] The schedule page's own silence on a fare class is
itself a gap worth recording rather than filling in with a plausible
figure — every other route in this project's colour-green coverage states
one, and this is the one exception found.[^ebus-g17]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
