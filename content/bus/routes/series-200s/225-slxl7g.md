---
title: "225 / 225"
summary: "200-series route: 225 (225)."
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
  - id: ebus-route-225-slxl7g
    title: "225 route schedule"
    titleOriginal: "225班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100022500
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 225 under 一般公車 (一般公車).[^ebus-general]
The normalized TDX record retains 4 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “蘆洲 - 民生社區”, the current head/last-departure field “[平日] 0500 - 2230 [假日] 0500 - 2230”, fare “兩段票”.[^ebus-route-225-slxl7g]

The confirmed stop sequence runs from 蘆洲總站, past 忠義國小/柳堤公園/
中原公園, through 捷運蘆洲站/蘆洲監理站/溪墘, along 捷運徐匯中學站/捷運三和
國中站/三重國小, through 捷運民權西路站/民權吉林路口/民權敦化路口, ending
at 松山機場's own 新益里 in Minsheng Community.[^tdx-bus] Eight confirmed
interchanges are recorded in the curated stop-ID join set, matching
the same list confirmed for its own shuttle sibling 225區: Zhongshan
Junior High School, Songshan Airport, Zhongshan Elementary School,
Minquan W. Rd., Sanchong Elementary School, Sanhe Junior High School,
St. Ignatius High School and Luzhou.[^tdx-bus] TDX records four named
direction/variant records, including a pet-friendly working (狗狗公車)
alongside the plain corridor and its two directional short-turns.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for pairing 蘆洲 with 民生社區 specifically as the route's own termini was found in this search.
