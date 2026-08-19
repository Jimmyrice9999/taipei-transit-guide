---
title: O17 / 橘17
summary: Orange-line feeder route O17 (橘17).
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
    note: Lists 橘17 under 捷運橘線接駁公車.
  - id: ebus-o17
    title: O17 route schedule
    titleOriginal: 橘17班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415001700
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 新莊中原路–捷運三民高中站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 橘17 under 捷運橘線接駁公車.[^ebus-orange] Its full schedule page gives 新莊中原路 - 捷運三民高中站, weekday service 0540–2000, holiday service 0800–1900, one-section fare and 大都會客運新莊站 as the service contact.[^ebus-o17]

The confirmed stop sequence starts at 中央昌平街口 in Xinzhuang, runs through
新北產業園區 (the New Taipei Industrial Park) past its own MRT/light-rail
station, then continues into 蘆洲 to end at 捷運三民高中站.[^tdx-bus] Three
confirmed interchanges lie along the way: 捷運新北產業園區站 — genuinely served
by both the Airport MRT (A3) and the Circular Line (Y20) — and 捷運蘆洲站
(Luzhou, O54) and 捷運三民高中站 (Sanmin Senior High School, O53) toward the
end.[^tdx-bus] That A3/Y20 pairing is a real interchange between the Airport
MRT and the Circular Line — the same pairing this project's coverage also
confirms on 橘21, which passes through the same industrial park from the
迴龍 direction.[^tdx-bus] Weekday and holiday hours differ noticeably here,
0540–2000 against a shorter 0800–1900, unlike several routes in this group
that publish the same span both day types.[^ebus-o17] Its 大都會客運新莊站
contact is a different 大都會客運 dispatch point from the 大都會客運蘆洲站
contact 橘18 and 橘18福隆路 share, the same operator running separate feeders
from separate stations rather than one shared depot.[^ebus-o17]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
