---
title: "NEIHU GREEN BUS / 雙園巴士"
summary: "Unclassified route identities: NEIHU GREEN BUS (雙園巴士)."
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
  - id: ebus-route-route-1mcjtcr
    title: "NEIHU GREEN BUS route schedule"
    titleOriginal: "雙園巴士班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0152005400
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and corridor

The full official catalogue files 雙園巴士 under the service label 低地板. That label is recorded as evidence, but it does not map this identity to an existing canonical group, so the route remains unclassified rather than being forced into one.[^ebus-unclassified] 低地板 identifies the accessible low-floor vehicle fleet the operator assigns to the route rather than a service class; it is not evidence of a distinct route type on its own.[^ebus-unclassified]
The normalized TDX record retains 6 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The confirmed stop sequence runs along 瑞光路 through Neihu's office-park
corridor, passing named corporate buildings — 仁寶大樓, 麗寶大樓, 精技大樓 among
them — between 瑞湖街口 at one end and 南港車站/捷運南港站 at the other, where
the route's confirmed stop-ID joins put it directly at MRT stations BL22 and
BR16.[^tdx-bus] Ten separate joint-operation companies are recorded as
operators of this one route — 首都客運, 大有巴士, 大南汽車, 光華巴士, 大都會客運,
三重客運, 欣欣客運, 東南客運, 臺北客運 and 中興巴士 — a wider operator list than
almost any other route in this project's coverage, consistent with a shuttle
service the joint-operation companies run between them rather than one
operator's own line.[^tdx-bus]

The full official schedule gives termini “內科 - 南軟”, the current head/last-departure field “[平日] 0700 - 1845 [假日] 停駛”, fare “一段票”.[^ebus-route-route-1mcjtcr] It currently lists weekday service and suspended holiday service.[^ebus-route-route-1mcjtcr]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus]
