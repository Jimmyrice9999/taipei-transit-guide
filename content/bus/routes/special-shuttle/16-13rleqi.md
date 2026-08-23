---
title: "CB16 / 通勤16"
summary: "Special shuttle route: CB16 (通勤16)."
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
  - id: ebus-route-16-13rleqi
    title: "CB16 route schedule"
    titleOriginal: "通勤16班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0152003800
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 通勤16 under 通勤公車 (通勤公車、內科專車、南軟專車與其他).[^ebus-special]
The normalized TDX record retains 4 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “捷運南港展覽館站 - 國家生技園區”, the current head/last-departure field “[平日] 0710 - 1905 [假日] 停駛”, fare “一段票”.[^ebus-route-16-13rleqi] It currently lists weekday service and suspended holiday service.[^ebus-route-16-13rleqi]

At three to four stops each way, the confirmed stop sequence is among
the shortest in this batch, running from 捷運南港展覽館站(經貿二), past
捷運南港站, ending at 國家生技園區A/C棟/國家生技園區F棟, with one working
starting directly from 捷運南港站 rather than the exhibition-centre
stop.[^tdx-bus] Two confirmed interchanges are recorded in the curated
stop-ID join set: Nangang (BL22) and Taipei Nangang Exhibition Center
(BL23/BR24), matching the route's own terminus and the stop it
sometimes omits.[^tdx-bus] TDX records four named direction/variant
records for this service under one operator, 欣欣客運, distinguishing
the full working from the shorter one that skips 南港展覽館.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for CB16; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**CB16 (4 stops):** MRT Nangang Exhibition Center Sta (Jingmao 2) -> MRT Nangang Sta -> National Biotechnology Research Park -> National Biotechnology Research Park[^tdx-bus]

**CB16 (4 stops):** National Biotechnology Research Park -> National Biotechnology Research Park -> MRT Nangang Exhibition Center Sta (Jingmao 2) -> MRT Nangang Sta[^tdx-bus]

**CB16 (3 stops):** MRT Nangang Sta -> National Biotechnology Research Park -> National Biotechnology Research Park[^tdx-bus]

**CB16 (3 stops):** National Biotechnology Research Park -> National Biotechnology Research Park -> MRT Nangang Sta[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 4 direction/variant records, 1 operator record, and 4 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for the route's own holiday suspension was found in this search, nor a stated reason for two workings differing only in whether they touch 南港展覽館 on such a short corridor.
