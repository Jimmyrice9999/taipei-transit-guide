---
title: "NK(Zhonghe-NK Science-Based Park) / 南軟通勤專車中和線"
summary: "Special shuttle route: NK(Zhonghe-NK Science-Based Park) (南軟通勤專車中和線)."
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
  - id: ebus-route-route-8dkx0
    title: "NK(Zhonghe-NK Science-Based Park) route schedule"
    titleOriginal: "南軟通勤專車中和線班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0152003000
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 南軟通勤專車中和線 under 南軟專車 (通勤公車、內科專車、南軟專車與其他).[^ebus-special]
The normalized TDX record retains 2 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “中和 - 南港軟體園區”, the current head/last-departure field “[平日] 0650 - 1800 [假日] 停駛”, fare “兩段票”.[^ebus-route-route-8dkx0] It currently lists weekday service and suspended holiday service.[^ebus-route-route-8dkx0]

The confirmed stop sequence runs from 駕訓中心, past 中和高中/連城路/連
城中正路口/連城錦和路口/台貿一村/中和國稅局/連城景平路/連城中和路口/中
和廟口/中和派出所/南山高中/雙和里/華泰新城(宜安路)/宜安路/中興二村/中興
新村/得和路口/永和國小/金銀大廈/永利路/福和國中/福和橋(永元路), through
捷運六張犁站(基隆路), ending at 喬治商職/三興國小/吳興街口/園區街/南港
軟體園區(一期大門), a shorter run than the separate 南軟通勤專車雙和線,
which continues past a similar Zhonghe stretch through 公館 and further
Nangang stops.[^tdx-bus] One confirmed interchange is recorded in the
curated stop-ID join set: Liuzhangli (BR07), the same single station
confirmed for 南軟通勤專車雙和線.[^tdx-bus] The route runs two named
subroutes under one operator, 中興巴士, on a two-stage fare, weekdays
only with holiday service suspended entirely.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for running two separately numbered Zhonghe–Nangang Software Park shuttles, this route and 南軟通勤專車雙和線, over a largely overlapping opening stretch under different operators, was found in this search.
