---
title: O5 / 橘5
summary: Orange-line feeder route O5 (橘5).
updated: 2026-08-19
line: O
facts:
  - label: Service class
    value: MRT orange-line feeder
    source: ebus-orange
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
  - id: ebus-orange
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 橘5 under 捷運橘線接駁公車.
  - id: ebus-o5
    title: O5 route schedule
    titleOriginal: 橘5班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415000500
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 板橋–捷運景安站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 橘5 under 捷運橘線接駁公車.[^ebus-orange] Its full schedule page gives 板橋 - 捷運景安站, weekday service 0540–2310, holiday service 0600–2310, one-section fare and 臺北客運江子翠站 as the service contact.[^ebus-o5]

The confirmed stop sequence starts at 藝香公園 (果菜市場) in Banqiao, crosses
新月橋 into 新埔, calls at 板橋花市 (the Banqiao flower market) and 民生路橋,
then continues through 中和 to end at 捷運景安站.[^tdx-bus] The curated
stop-ID join set confirms four interchanges along this alignment — codes
resolving to Xinpu (BL08), Banxin (Y15), Xinpu Minsheng (Y17) and Jing'an,
served by both the Zhonghe–Xinlu Line (O02) and the Circular Line (Y11) —
though the stop sequence's own names for those points (捷運新埔站, 板橋花市,
民生路橋, 捷運景安站) do not all repeat the station's full official
name.[^tdx-bus] TDX records a fourth "橘5延" (extended) subroute starting one
stop earlier at 環河公園, a short extension rather than a different
corridor.[^tdx-bus] With four confirmed interchanges across two different
MRT lines and the Zhonghe–Xinlu/Circular Line pairing at Jing'an, it is one
of the more MRT-connected routes in this project's colour-orange
coverage.[^tdx-bus] Both directions run 30 stops each, an exactly symmetric
pair unlike several other routes in this batch.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
