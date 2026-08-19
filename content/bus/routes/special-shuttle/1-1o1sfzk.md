---
title: "NH Express 1 / 內科快線1"
summary: "Special shuttle route: NH Express 1 (內科快線1)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "Special shuttle / commuter service (通勤／專車)"
    source: ebus-special
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
    title: "TDX bus data"
    titleOriginal: "交通部運輸資料流通服務平臺"
    publisher: "Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺"
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Supports the normalized route identity, municipality, operators, direction and variant records, stop sequences, shapes, source-update fields and the separately curated geometry-only MRT stop joins. The committed route layer does not carry route length, timetable or fare fields."
  - id: ebus-special
    title: "Commuter and destination-service catalogue"
    titleOriginal: "大臺北公車"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/ebus?ct=tpc
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official catalogue was fetched and read; it lists this route under 通勤公車、內科專車、南軟專車與其他 and its route-id link where a separate entry exists."
  - id: ebus-route-1-1o1sfzk
    title: "NH Express 1 route schedule"
    titleOriginal: "內科快線1班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0152000A00
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 內科快線1 under 內科專車 (通勤公車、內科專車、南軟專車與其他).[^ebus-special]
The normalized TDX record retains 6 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “捷運圓山站 - 內湖科技園區”, the current head/last-departure field “[平日] 0700 - 2000 [假日] 停駛”, fare “一段票”.[^ebus-route-1-1o1sfzk] It currently lists weekday service and suspended holiday service.[^ebus-route-1-1o1sfzk]

The confirmed stop sequence runs from 捷運圓山站, past 基湖站/基湖路口/仁
寶大樓/瑞光港墘路口/瑞光路/公館山/麗寶大樓, through 新湖行善路口/精技大樓/
東南客運停車場, ending at 新湖舊宗路口 in the Neihu Science Park (內湖科技
園區).[^tdx-bus] One confirmed interchange is recorded in the curated
stop-ID join set: Yuanshan (R14), matching the route's own terminus.[^tdx-bus] TDX records six direction/variant records for this service
split across four separate operators — 首都客運, 光華巴士, 大都會客運 and
中興巴士 — for what the stop sequences show as the same physical
corridor.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for the route's own holiday suspension was found in this search, nor a stated reason for four operators running what the data shows as one shared corridor rather than a single joint operation.
