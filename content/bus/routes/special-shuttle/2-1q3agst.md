---
title: "TPE Child's Amuse. Park 2 / 兒樂2號線"
summary: "Special shuttle route: TPE Child's Amuse. Park 2 (兒樂2號線)."
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
  - id: ebus-route-2-1q3agst
    title: "TPE Child's Amuse. Park 2 route schedule"
    titleOriginal: "兒樂2號線班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0162003100
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 兒樂2號線 under 其他 (通勤公車、內科專車、南軟專車與其他).[^ebus-special]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “兒童新樂園 - 捷運劍潭站”, the current head/last-departure field “[平日] 0830 - 1730 [假日] 0830 - 1830”, fare “一段票”.[^ebus-route-2-1q3agst] It currently lists service on both weekdays and holidays, unlike the separate 兒樂1號線, which runs only on holidays.[^ebus-route-2-1q3agst]

The confirmed stop sequence is a single loop, running from 兒童新樂園,
past 福港街/承德路四段/大南路口, through 捷運劍潭站(北藝中心), along 士林
市場(銘傳會館)/公教住宅/士林區行政中心(基河)/天文科學館/國立科教館, and
back to 兒童新樂園.[^tdx-bus] One confirmed interchange is recorded in
the curated stop-ID join set: Jiantan (R15), confirmed on the outbound
leg of the loop, the same station family as the separate 兒樂1號線's own
Zhishan interchange.[^tdx-bus] The route runs a single subroute under
two operators, 光華巴士 and 中興巴士, the same two operators running 兒樂
1號線.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 1 directional or variant stop sequence for TPE Child's Amuse. Park 2; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**Taipei Children's Amusement Park 2 (11 stops):** Taipei Children's Amusement Park -> Fugang St -> Chengde Rd Sec 4 -> Danan Rd Entrance -> MRT Jiantan Sta (Taipei Performing Arts Center) -> Shilin Market (Ming Chuan Hostel) -> Civil Service Housing -> Shilin Admin Center -> Astronomical Museum -> National Taiwan Science Education Center -> Taipei Children's Amusement Park[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 2 operator records, and 1 published shape record in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for the two children's-park routes running on opposite calendars — this one every day, 兒樂1號線 only on holidays — was found in this search.
