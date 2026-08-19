---
title: "S10Shuttle / 小10區"
summary: "Minibus and community route: S10Shuttle (小10區)."
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
  - id: ebus-route-minibus-10-tzvzps
    title: "S10Shuttle route schedule"
    titleOriginal: "小10區班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151001020
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小10區 under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 2 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “萬芳社區 - 貓空纜車站”, the current head/last-departure field “[平日] 0600 - 2300 [假日] 0600 - 2200”, fare “一段票”.[^ebus-route-minibus-10-tzvzps]

The confirmed stop sequence follows sibling 小10's own opening 萬芳社區/
木柵/指南路/政大 stretch, then continues past 樟山寺/樟樹步道/瓦厝/樟湖步道
to end at the Maokong Gondola's own 貓空站(小天空步道), one stop short of
小10's own gondola-station terminus.[^tdx-bus] One confirmed interchange
is recorded in the curated stop-ID join set: Wanfang Community (BR03).
[^tdx-bus] TDX records two named subroutes distinguishing whether the
working detours via 小天空步道.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for
running as a separate route rather than a short-working subroute of
sibling 小10 was found in this search, nor a stated reason for the slight
one-stop difference between the two routes' own gondola-adjacent
termini.
