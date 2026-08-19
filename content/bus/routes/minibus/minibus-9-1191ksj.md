---
title: "M9 / 市民小巴9"
summary: "Minibus and community route: M9 (市民小巴9)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "Minibus / community service (小／市民小巴)"
    source: ebus-minibus
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
  - id: ebus-minibus
    title: "Taipei bus route catalogue — 小 and 市民小巴"
    titleOriginal: "大臺北公車"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/ebus?ct=tpc
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official catalogue was fetched and read; it lists this route under 小、市民小巴 and its route-id link where a separate entry exists."
  - id: ebus-route-minibus-9-1191ksj
    title: "M9 route schedule"
    titleOriginal: "市民小巴9班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0153000900
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 市民小巴9 under 市民小巴 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 2 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “大佳河濱公園 - 聯合醫院中興院區”, the current head/last-departure field “[平日] 0640 - 1730 [假日] 0700 - 1700”, fare “一段票”.[^ebus-route-minibus-9-1191ksj]

The confirmed stop sequence runs from 大佳河濱公園, past 八號水門/新生公園
(林安泰)/新生公園(松江)/新生公園/吉林路底/新福里/新壽公園/錦州街口/民生東
路口/台北銀行/吉林國小/長安國小(吉林)/正守公園/長安林森路口/華山公園(中山
教會)/市民林森路口, ending at 臺北車站(鄭州), with one working detouring
via 聯合醫院中興院區(西寧)/延平一站/當代藝術館/長安東路一段.[^tdx-bus] The
curated stop-ID join set records zero confirmed interchanges for this
route, despite its own terminus naming 臺北車站.[^tdx-bus] TDX records
two named subroutes distinguishing whether a working detours via 中興
院區.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for the confirmed zero-interchange gap despite the route's own stops naming Taipei Main Station was found in this search, nor a stated reason for pairing 大佳河濱公園 with 聯合醫院中興院區 specifically as the route's own termini, rather than a nearer named stop.
