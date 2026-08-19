---
title: 306 / 306
summary: General-bus route 306 (蘆洲 - 凌雲五村), jointly run by two operators.
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
    value: "Weekday and holiday 0500–2200"
    source: ebus-306
  - label: Headway by day type
    value: "Peak 12–20 min"
    source: ebus-306
  - label: Fare / transfer
    value: Two-section fare (兩段票)
    source: ebus-306
sources:
  - id: tdx-bus
    title: TDX bus data
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field. Records two operators for this route, matching the two-operator contact split found on its schedule page.
  - id: ebus-general
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 306 under 一般公車, as a routeid entry separate from its 306區 shuttle variant.
  - id: ebus-306
    title: 306 route schedule
    titleOriginal: 306班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100030600
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 蘆洲–凌雲五村 corridor, service span, fare, buffer zone and two operator contacts (三重客運蘆洲站 02-2282-1429; 大都會客運舊莊站 02-2651-2945).
---

## Classification and corridor

The official catalogue lists 306 under 一般公車, as a separate routeid entry
from its 306區 shuttle variant.[^ebus-general] Its full schedule page gives
蘆洲 - 凌雲五村, weekday and holiday service 0500–2200 with peak frequency of
12–20 minutes, a two-section fare (兩段票), and two operator contacts:
三重客運蘆洲站 and 大都會客運舊莊站.[^ebus-306] A buffer zone applies between
涼州重慶路口 and MRT中山國小站(志仁高中) outbound, and the same MRT stop and
民權大龍街口 on the return working.[^ebus-306]

The confirmed stop sequence runs from 蘆洲 in New Taipei through 三重 — past
捷運徐匯中學站 and 捷運三和國中站 — into Taipei along the same Nanjing corridor
several other routes on this site follow, past 捷運中山站, 捷運松江南京站 and
捷運南京復興站, through Songshan and Nangang past 中研院 (Academia
Sinica).[^tdx-bus] The two operating companies' workings diverge only at the
very end: the 三重客運 working continues to 凌雲站 in the hills above Nangang,
while the 大都會客運 working instead turns off toward 舊莊 — a genuine
corridor difference between the two operators' services, not just a shared
number under two contracts.[^tdx-bus] Five separate MRT stations are named
along the shared portion, and none carries a confirmed join in the curated
set.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records and
confirms this route's two operators.[^tdx-bus] Route length and full
headway detail beyond the peak figure above remain TBC, as does the
history of the two-operator split and any corridor realignment.
