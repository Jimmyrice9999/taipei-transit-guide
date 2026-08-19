---
title: "NH2 / 內科通勤專車2"
summary: "Special shuttle route: NH2 (內科通勤專車2)."
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
  - id: ebus-route-2-5ogs1q
    title: "NH2 route schedule"
    titleOriginal: "內科通勤專車2班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0152000200
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 內科通勤專車2 under 內科專車 (通勤公車、內科專車、南軟專車與其他).[^ebus-special]
The normalized TDX record retains 2 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “中和 - 內湖科技園區”, the current head/last-departure field “[平日] 0712 - 1830 [假日] 停駛”, fare “兩段票”.[^ebus-route-2-5ogs1q] It currently lists weekday service and suspended holiday service.[^ebus-route-2-5ogs1q]

The confirmed stop sequence runs from 駕訓中心, past 中和高中/連城路/連
城中正路口/連城錦和路口/台貿一村/中和國稅局/連城景平路/連城中和路口/廟美
里/南山高中(中山路)/佳和公園/保生路口/永平高中/中山路口, through 捷運頂
溪站, along 重慶南路三段(中正橋)/和平西路一段, through 捷運古亭站(和
平)/公企中心/捷運東門站(金山), past 仁愛路二段/金山泰安街口/圓山大飯店/
中央電台/忠烈祠/經國七海文化園區, ending at 基湖站/基湖路口/瑞光路/公館
山/麗寶大樓 in the Neihu Science Park.[^tdx-bus] Three confirmed
interchanges are recorded in the curated stop-ID join set: Guting
(G09/O05), Dingxi (O04) and Dongmen (O06/R07), all confirmed along
the route's own Zhonghe leg, the same three stations confirmed for
the separate 內科通勤專車3.[^tdx-bus] The route runs two named
subroutes under one operator, 中興巴士, on a two-stage fare, weekdays
only with holiday service suspended entirely.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for running two separately numbered Zhonghe–Neihu Science Park shuttles, 內科2 and 內科3, under different operators over a largely overlapping corridor, was found in this search.
