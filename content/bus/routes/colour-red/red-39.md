---
title: R39 / 紅39
summary: Red-line feeder route R39 (紅39).
updated: 2026-08-18
line: R
facts:
  - label: Service class
    value: MRT red-line feeder
    source: ebus-red
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
    title: TDX bus data
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field.
  - id: ebus-red
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Lists 紅39 under 捷運紅線接駁公車.
  - id: ebus-r39
    title: R39 route schedule
    titleOriginal: 紅39班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0411003900
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 新春街–捷運淡水站 corridor, weekday/holiday service spans, one-section fare and 淡水客運淡水站 contact.
---

## Classification and corridor

The official catalogue lists 紅39 under 捷運紅線接駁公車.[^ebus-red] Its full schedule page gives 新春街 - 捷運淡水站, weekday and holiday service 0610–2210, one-section fare and 淡水客運淡水站 as the service contact.[^ebus-r39]

At just 10-11 stops each way, the confirmed stop sequence is among the
shortest in this batch: 東宇花園城、加州社區、城堡花園、摩天31、米粉寮、水碓子、頂好、
北淡水, ending at 捷運淡水站.[^tdx-bus] One confirmed interchange is recorded
in the curated stop-ID join set: Tamsui (R28), matching the route's own
terminus.[^tdx-bus] TDX records three named subroutes, 紅39, 紅39東宇花園城
and 紅39捷運淡水站, apparently distinguishing directional terminus labels
rather than corridor variants — the same pattern as sibling 紅36.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for R39; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**R39 (11 stops):** DongyuGardenCity -> California community -> Chengbao Garden Community -> Motain 31 Community -> Mifenliao -> Shuiduizi -> Dinghao -> North Tamsui -> Yongle Lane Intersection(Zhongshan Market) -> Huanan bank -> MRT Tamsui Sta[^tdx-bus]

**R39 (10 stops):** MRT Tamsui Sta -> Yongle Lane Intersection(Zhongshan Market) -> BeiTamsui -> Dinghao -> Shuiduizi -> MiFenLiao -> Motain 31 Community -> Chengbao Garden -> California community -> Dongyu Garden City[^tdx-bus]

**R39 DongyuGardenCity (11 stops):** DongyuGardenCity -> California community -> Chengbao Garden Community -> Motain 31 Community -> Mifenliao -> Shuiduizi -> Dinghao -> North Tamsui -> Yongle Lane Intersection(Zhongshan Market) -> Huanan bank -> MRT Tamsui Sta[^tdx-bus]

**R39 MRT Tamsui Sta (10 stops):** MRT Tamsui Sta -> Yongle Lane Intersection(Zhongshan Market) -> BeiTamsui -> Dinghao -> Shuiduizi -> MiFenLiao -> Motain 31 Community -> Chengbao Garden -> California community -> Dongyu Garden City[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 3 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 紅39 or its
relationship to 紅36, which shares its 加州社區/城堡花園/摩天31/米粉寮 opening
stretch and operator but diverges further along, was found in this
search. A headway-by-day-type figure is likewise absent from the primary
schedule page beyond its own weekday and holiday span statement. No
predecessor-route or renumbering history for 紅39 was located either, nor
a stated reason for the operator running two near-duplicate short routes,
紅36 and 紅39, over a shared origin.[^tdx-bus]
