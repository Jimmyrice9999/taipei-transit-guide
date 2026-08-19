---
title: G15 / 綠15
summary: Green-line feeder route G15 (綠15).
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
    note: Lists 綠15 under 捷運綠線接駁公車.
  - id: ebus-g15
    title: G15 route schedule
    titleOriginal: 綠15班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413001500
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 綠野香坡–捷運大坪林站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 綠15 under 捷運綠線接駁公車.[^ebus-green] Its full schedule page gives 綠野香坡 - 捷運大坪林站, weekday and holiday service 0540–2200, one-section fare and 新店客運錦繡站 as the service contact.[^ebus-g15] 綠野香坡, the route's own terminus, is a Xindian place name rather than a colour marker — the same name recurs as a terminus on 棕7綠野香坡 (filed under colour-brown) and on the unrelated numbered route 624綠野香坡.

The confirmed stop sequence runs from 綠野香坡, an Ankeng hillside housing
estate, through the same 安坑/安康 corridor as 綠10, then continues past
小碧潭 and 新店高中 into central 新店, ending at 捷運大坪林站.[^tdx-bus] Three
confirmed interchanges lie along the way: 捷運七張站/捷運大坪林站 area stations
(G03/G04) and 捷運小碧潭站 (Xiaobitan, G03A) — the short branch off the
Songshan–Xindian Line's main alignment — plus 輕軌安康站 (Ankang, K06) on the
Ankeng Light Rail.[^tdx-bus] That the route's own name and terminus share the
place name 綠野香坡 with an unrelated brown-line feeder and an unrelated
numbered route is a coincidence of two different colour-classification
systems and a Xindian housing-estate name, not evidence any of the three are
connected.[^ebus-g15]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
