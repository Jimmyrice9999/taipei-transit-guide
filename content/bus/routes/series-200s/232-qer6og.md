---
title: "232Express / 232快"
summary: "200-series route: 232Express (232快)."
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
  - id: ebus-route-232-qer6og
    title: "232Express route schedule"
    titleOriginal: "232快班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100023250
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 232快 under 一般公車 (一般公車).[^ebus-general]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “蘆洲 - 松山車站”, the current head/last-departure field “[平日] 0715 - 0715 [假日] 停駛”, fare “兩段票”.[^ebus-route-232-qer6og] It currently lists weekday service and suspended holiday service.[^ebus-route-232-qer6og]

The confirmed stop sequence runs from 蘆洲總站, past 王爺廟口/蘆洲監理站/
溪墘, through 捷運徐匯中學站/捷運三和國中站/正義郵局/頂好市場, along 捷運
忠孝敦化站/阿波羅大廈/國父紀念館, through 捷運市政府站/市立工農/捷運永春站,
ending at 松山車站.[^tdx-bus] Seven confirmed interchanges are recorded
in the curated stop-ID join set: Zhongxiao Fuxing, Zhongxiao Dunhua,
Sun Yat-Sen Memorial Hall, Taipei City Hall, Yongchun, Sanhe Junior
High School and St. Ignatius High School.[^tdx-bus] The route runs a
single subroute under one operator, 三重客運, with an identical head
and last-departure time, “0715 - 0715”, the same unusual pattern seen
on the separate 218直 and 225區, weekdays only with holiday service
suspended entirely.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for the identical head and last-departure time was found in this search — whether this reflects a single daily trip or a data-entry artefact in the source schedule is not settled by the data pulled for this page.
