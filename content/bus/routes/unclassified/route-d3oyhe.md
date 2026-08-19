---
title: "Jingmei-T.V.G.H Express / 景美-榮總(快)"
summary: "Unclassified route identities: Jingmei-T.V.G.H Express (景美-榮總(快))."
updated: 2026-08-19
facts:
  - label: Service class
    value: "Unclassified route identity (classification TBC)"
    source: ebus-unclassified
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
  - id: ebus-unclassified
    title: "Taipei/New Taipei bus route catalogue"
    titleOriginal: "大臺北公車"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/ebus?ct=tpc
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official catalogue was fetched and read; it lists this route under official catalogue service labels and its route-id link where a separate entry exists."
  - id: ebus-route-route-d3oyhe
    title: "Jingmei-T.V.G.H Express route schedule"
    titleOriginal: "景美-榮總(快)班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0162000400
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and corridor

The full official catalogue files 景美-榮總(快) under the service label 快速. That label is recorded as evidence, but it does not map this identity to an existing canonical group, so the route remains unclassified rather than being forced into one.[^ebus-unclassified] The route carries no route number at all, only a named identity — so the 快速 label here has nothing to do with the 9xx numeral band this project has found reported elsewhere as marking express service; a catalogue can call a route "express" independently of any numbering convention.[^ebus-unclassified]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The confirmed stop sequence links two very different parts of Taipei: it
starts at 景美女中 (Jingmei Girls' High School) in Wenshan District, loops out
past 木新市場 and 木柵公園 before doubling back through the same stops, then
runs north past 世新大學 and 捷運公館站 (confirmed MRT stop-ID join G07) into
Shilin, and finishes at 榮總 — Taipei Veterans General Hospital — by way of
綜合市場(捷運石牌站), a confirmed MRT stop-ID join at R19.[^tdx-bus] The
outbound working's out-and-back detour around 木柵公園 rather than a straight
run explains why the same TDX direction record lists more stops travelling
away from 景美女中 than travelling back towards it.[^tdx-bus]

The full official schedule gives termini “景美女中 - 榮總”, the current head/last-departure field “[平日] 0520 - 1130 [假日] 停駛”, fare “二段票”.[^ebus-route-route-d3oyhe] It currently lists weekday service and suspended holiday service.[^ebus-route-route-d3oyhe]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus]
