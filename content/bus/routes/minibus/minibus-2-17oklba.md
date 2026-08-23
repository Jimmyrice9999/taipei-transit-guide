---
title: "S2Shuttle / 小2區"
summary: "Minibus and community route: S2Shuttle (小2區)."
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
  - id: ebus-route-minibus-2-17oklba
    title: "S2Shuttle route schedule"
    titleOriginal: "小2區班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0151000220
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 小2區 under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “國立臺灣戲曲學院 - 石崁(經白石湖)”, the current head/last-departure field “[平日] 0510 - 2250 [假日] 0430 - 2250”, fare “一段票”.[^ebus-route-minibus-2-17oklba]

The confirmed stop sequence runs from 國立臺灣戲曲學院, past 內湖派出所/
碧湖國小/捷運內湖站, through 貿商三村/碧山路口/碧霞宮/圓覺寺/碧山巖(白石湖
吊橋), ending at 石崁 by way of 城門仔/恆光禪寺, a shorter run than the
separate 小2, which continues past 石崁 to loop up to 觀光草莓園 and on to
捷運市政府站.[^tdx-bus] One confirmed interchange is recorded in the
curated stop-ID join set: Neihu (BR19), matching the shared starting
stretch of both routes.[^tdx-bus] The route runs a single subroute
under one operator, 東南客運, the same operator running 小2 over the
longer corridor.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for S2Shuttle; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**S2(Shuttle) (12 stops):** National Taiwan College of Performing Arts -> Neihu Police Substation -> Bihu Elementary School -> MRT Neihu Sta (Neihu) -> MaoshangVillage3 -> Bishan Rd Entrance -> Bixia Temple -> Yuan Jue Temple (Liyushan) -> Bishanyan (Baishihu Bridge) -> Chenmenzai (Xuanming Temple) -> Hengguang Temple -> Shikan[^tdx-bus]

**S2(Shuttle) (12 stops):** Sightseeing Strawberry Park 2 -> Sightseeing Strawberry Park -> Bishanyan (Baishihu Bridge) -> Chenmenzai (Xuanming Temple) -> Bixia Temple -> Taiyang Temple -> Bishan Rd Entrance -> Maoshang Village 3 -> MRT Neihu Sta (Neihu) -> Bihu Elementary School -> Neihu Police Substation -> National Taiwan College of Performing Arts[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for publishing this shorter run as a separately numbered shuttle route rather than a subroute of 小2 itself was found in this search.
