---
title: "NH22 / 內科通勤專車22"
summary: "Special shuttle route: NH22 (內科通勤專車22)."
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
  - id: ebus-route-22-1oxen3v
    title: "NH22 route schedule"
    titleOriginal: "內科通勤專車22班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100002100
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 內科通勤專車22 under 內科專車 (通勤公車、內科專車、南軟專車與其他).[^ebus-special]
The normalized TDX record retains 2 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “捷運圓山站 - 西湖圖書館(湖光教會)”, the current head/last-departure field “[平日] 0650 - 0805 [假日] 停駛”, fare “一段票”.[^ebus-route-22-1oxen3v] It currently lists weekday service and suspended holiday service.[^ebus-route-22-1oxen3v]

The confirmed stop sequence runs from 捷運圓山站, past 臺北市立美術館/圓
山大飯店/中央電台/忠烈祠/經國七海文化園區/堤頂大道口/基湖站/基湖路口/仁
寶大樓/瑞光港墘路口, through 捷運港墘站(內湖高工), ending at 西湖圖書館
(湖光教會)/內湖國小/達人高中(臺灣戲曲學院)/內湖派出所.[^tdx-bus] Three
confirmed interchanges are recorded in the curated stop-ID join set:
Gangqian (BR17), Wende (BR18) and Yuanshan (R14), matching the route's
own terminus and two stops further along its own corridor.[^tdx-bus]
The route runs two named subroutes under one operator, 首都客運, on a
morning-only published window narrower than most other routes in this
batch.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for the route's own narrow 0650–0805 morning window was found in this search, nor a stated reason for pairing 捷運圓山站 with 西湖圖書館 specifically as the route's own termini.
