---
title: Roosevelt Rd. Metro Bus / 羅斯福路幹線
summary: Trunk route 羅斯福路幹線 (Roosevelt Rd. Metro Bus).
updated: 2026-08-19
facts:
  - label: Service class
    value: Trunk route (幹線)
    source: ebus-trunk
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
  - id: ebus-trunk
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 羅斯福路幹線 under 幹線專車.
  - id: ebus-roosevelt
    title: Roosevelt Rd. Metro Bus route schedule
    titleOriginal: 羅斯福路幹線班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161001600
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 捷運動物園站–臺北車站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 羅斯福路幹線 under 幹線專車.[^ebus-trunk] Its full schedule page gives 捷運動物園站 - 臺北車站, weekday and holiday service 0530–0030, a two-section fare and 欣欣客運木柵二站 as the service contact.[^ebus-roosevelt]

The confirmed stop sequence runs the full length of 羅斯福路 (Roosevelt
Road) it is named for, from 捷運動物園站 in Wenshan, through 木柵/興隆, past
NTU, then north to 臺北車站 (Taipei Main Station).[^tdx-bus] Seven confirmed
interchanges are named directly in the stop sequence: 捷運動物園站 (Taipei
Zoo, BR01), 捷運萬芳醫院站 (Wanfang Hospital, BR04), 捷運公館站 (Gongguan,
G07), 捷運台電大樓站 (Taipower Building, G08), 捷運古亭站 (served by both the
Songshan–Xindian Line as G09 and the Zhonghe–Xinlu Line as O05), 捷運中正
紀念堂站 (served by both the Songshan–Xindian Line as G10 and the Tamsui–
Xinyi Line as R08) and 捷運台大醫院站 (NTU Hospital, R09).[^tdx-bus] Its
nearly 19-hour weekday and holiday span, 0530 to 0030, is among the longest
published for any route in this project's trunk-route coverage.[^ebus-roosevelt]
TDX records it as a single subroute run by a single operator, 欣欣客運,
across its full 39-stop outbound and 41-stop return sequence, with no
recorded holiday-specific or half-working variant.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
