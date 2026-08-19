---
title: "TPE Child's Amuse. Park 1 / 兒樂1號線"
summary: "Special shuttle route: TPE Child's Amuse. Park 1 (兒樂1號線)."
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
  - id: ebus-route-1-4fkw3k
    title: "TPE Child's Amuse. Park 1 route schedule"
    titleOriginal: "兒樂1號線班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0162003000
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 兒樂1號線 under 其他 (通勤公車、內科專車、南軟專車與其他).[^ebus-special]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “兒童新樂園 - 捷運芝山站、士林站”, the current head/last-departure field “[平日] 停駛 [假日] 0845 - 1815”, fare “一段票”.[^ebus-route-1-4fkw3k] Unlike most other routes in this batch, it currently lists suspended weekday service and holiday-only operation.[^ebus-route-1-4fkw3k]

The confirmed stop sequence is a single loop, running from 兒童新樂園,
past 捷運芝山站(福國), through 捷運士林站(中正), along 天文科學館/國立科
教館, and back to 兒童新樂園.[^tdx-bus] One confirmed interchange is
recorded in the curated stop-ID join set: Zhishan (R17), confirmed on
the outbound leg of the loop.[^tdx-bus] The route runs a single
subroute under two operators, 光華巴士 and 中興巴士.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for the route running only on holidays, the reverse pattern of most commuter shuttles in this batch, was found in this search — consistent with, but not confirmed by, its own name naming a children's amusement park.
