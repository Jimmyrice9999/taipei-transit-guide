---
title: "278Shuttle / 278區"
summary: "200-series route: 278Shuttle (278區)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "200-series numbered service (一般公車)"
    source: ebus-general
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
  - id: ebus-general
    title: "Taipei/New Taipei bus route catalogue"
    titleOriginal: "大臺北公車"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/ebus?ct=tpc
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official catalogue was fetched and read; it lists this route under 一般公車 and its route-id link where a separate entry exists."
  - id: ebus-route-278-1ovobqn
    title: "278Shuttle route schedule"
    titleOriginal: "278區班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100027820
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 278區 under 一般公車 (一般公車).[^ebus-general]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “捷運景美站 - 新益里”, the current head/last-departure field “[平日] 0700 - 1930 [假日] 停駛”, fare “一段票”.[^ebus-route-278-1ovobqn] It currently lists weekday service and suspended holiday service.[^ebus-route-278-1ovobqn]

The confirmed stop sequence runs from 景福街, past 溪口國小/捷運景美站/
財政園區, through 武功國小(羅斯福)/捷運公館站/台電大樓, along 大安森林
公園/龍門國中(和平)/國立臺北教育大學, through 捷運忠孝敦化站/臺視/南京
新村, ending at 三民路/廣合新村/三民國小/新益里, a shorter run than the
separate 278, which continues past this stretch to 捷運內湖站.[^tdx-bus] Ten confirmed interchanges are recorded in the curated
stop-ID join set: Zhongxiao Fuxing, Zhongxiao Dunhua, Sun Yat-Sen
Memorial Hall, Technology Building, Daan, Jingmei, Wanlong, Gongguan,
Taipower Building and Guting.[^tdx-bus] The route runs a single
subroute under one operator, 欣欣客運, weekdays only with holiday
service suspended entirely.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for the route's own holiday suspension, unlike its own all-week sibling 278, was found in this search.
