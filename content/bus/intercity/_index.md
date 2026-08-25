---
title: National intercity coaches
description: A source-backed snapshot of Taiwan's national intercity-coach operators, route variants, stops and published departure times.
summary: A source-backed snapshot of Taiwan's 國道客運 operators, route variants, stops and published departure times.
order: 3
updated: 2026-08-25
facts:
  - label: Timetable rows
    value: "132,398"
    source: thb-intercity-csv
  - label: Route variants
    value: "1,837"
    source: thb-intercity-csv
  - label: Operator labels
    value: "44"
    source: thb-intercity-csv
  - label: Timetable catalogue frequency
    value: Daily
    source: thb-intercity-timetable
  - label: Current route fares
    value: TBC
  - label: Historical May 2022 highway routes
    value: "173"
    source: thb-2030-plan
specs:
  - label: Timetable snapshot retrieved
    value: 2026-08-25
    source: thb-intercity-csv
  - label: Catalogue update recorded
    value: 2026-07-01
    source: thb-intercity-timetable
  - label: Fare coverage in this layer
    value: TBC
  - label: Historical May 2022 highway vehicles
    value: "3,130"
    source: thb-2030-plan
sources:
  - id: thb-intercity-directory
    title: Highway Bureau online ticketing and intercity-bus company directory
    titleOriginal: 網路訂票暨客運公司資訊
    publisher: Highway Bureau, Ministry of Transportation and Communications (交通部公路局)
    url: https://www.thb.gov.tw/cp.aspx?Create=1&n=312
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The bureau's directory of intercity-bus companies and online booking links, updated 114-08-13.
  - id: thb-intercity-timetable
    title: "Highway Bureau open-data catalogue: bus timetable"
    titleOriginal: 客運時刻
    publisher: Highway Bureau, Ministry of Transportation and Communications (交通部公路局)
    url: https://www.thb.gov.tw/News_Content_thbOpenData.aspx?n=13&s=599
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The daily timetable dataset catalogue, including the published CSV URL and field list; the catalogue records update 115-07-01.
  - id: thb-intercity-csv
    title: National intercity-bus static timetable export
    titleOriginal: 公路客運客運時刻 CSV
    publisher: Highway Bureau public transport data portal (公路局公共運輸資料流通服務)
    url: https://www.taiwanbus.tw/TimeTableExport/timetable.csv
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: Full static export fetched on 2026-08-25 and used to generate data/intercity-bus/routes.json and the public route-summary copy.
  - id: thb-intercity-stats
    title: "Highway Bureau open-data catalogue: national highway-bus overview"
    titleOriginal: 國道汽車客運概況
    publisher: Highway Bureau, Ministry of Transportation and Communications (交通部公路局)
    url: https://www.thb.gov.tw/News_Content_thbOpenData.aspx?n=13&s=492
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: Monthly aggregate dataset catalogue with operator count, route count, vehicle-kilometres, passengers, passenger-kilometres and revenue fields.
  - id: thb-fare-change
    title: Highway Bureau announcement on base-fare adjustment
    titleOriginal: 交通部核定國道客運基本運價，票價微幅調漲
    publisher: Highway Bureau, Ministry of Transportation and Communications (交通部公路局)
    url: https://www.thb.gov.tw/News_Content.aspx?n=87&s=245774&sms=13235
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The 2024 base-fare adjustment notice, including the operator filing and passenger-notice rule and TPASS subsidy treatment.
  - id: thb-2030-plan
    title: 2030 electric intercity-bus plan
    titleOriginal: 2030 年客運車輛電動化推動計畫
    publisher: Highway Bureau, Ministry of Transportation and Communications (交通部公路局)
    url: https://ws.thb.gov.tw/Download.ashx?icon=.pdf&n=6Zu75be06KiI55WrKOaguOWumuacrCkucGRm&u=LzAwMS9VcGxvYWQvNDM2L3JlbGZpbGUvMTMyOTEvMjQ4NDQxLzVmYjAzZDZhLTA5ZWQtNGNjYy04YmFlLWZlMGUwYmJlMjdlNC5wZGY%3D
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: "A May 2022 snapshot in the plan: 57 supervised operators, 173 highway routes and 3,130 highway vehicles."
  - id: tdx-intercity-api
    title: TDX API documentation
    titleOriginal: 線上API說明
    publisher: Ministry of Transportation and Communications TDX (交通部運輸資料流通服務平台)
    url: https://tdx.transportdata.tw/api-service/swagger
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: Documents the InterCityBus API family; this page does not treat an authenticated API pull as part of the committed snapshot.
---

The national intercity-coach network is published as transport data rather than as a single English network map. The Highway Bureau's company directory is the right starting point for operators and booking links, while its open-data catalogue exposes the timetable as a separate daily dataset.[^thb-intercity-directory][^thb-intercity-timetable] The directory is dated 114-08-13 (13 August 2025), whereas the timetable catalogue records an update of 115-07-01 (1 July 2026); those dates describe different publications and are not a single network “last updated” value.[^thb-intercity-directory][^thb-intercity-timetable]

## What the national data actually publishes

The timetable catalogue names the export as 客運時刻 and supplies a static CSV at the Taiwanbus timetable endpoint.[^thb-intercity-timetable] Its documented fields include the operator, route number, branch, direction, Chinese and English route names, stop name, stop sequence, departure time, weekday flags, service-date bounds, stop coordinates and stop-position identifier.[^thb-intercity-timetable] The committed snapshot is a full fetch of that CSV on 25 August 2026, not a transcription of search results or a sample of advertised routes.[^thb-intercity-csv] It contains 132,398 timetable rows, 44 distinct operator labels and 1,837 route variants after grouping by operator, route number, branch and the published Chinese and English route names.[^thb-intercity-csv]

The route-summary file is available as [the committed national route-summary JSON](/data/intercity-bus-routes.json).[^thb-intercity-csv] It preserves the source fields and adds a compact direction summary so the site can expose the network without creating thousands of brittle route stubs.[^thb-intercity-csv] The data layer is deliberately a dated snapshot: a later timetable export can add, remove or rename a route variant, so its retrieval date belongs beside every figure that is read from it.[^thb-intercity-csv]

## Route identities and terminals

“Route” is not one unambiguous key in the export. The same number can be separated by operator, branch, direction or published route name, and those distinctions are retained in the generated route variants.[^thb-intercity-timetable][^thb-intercity-csv] This is why the index reports 1,837 variants rather than silently collapsing the file to a smaller count of route numbers.[^thb-intercity-csv]

For each direction, the data layer keeps the first and last distinct stops in the order presented by the source rows, together with stop count, coordinates where present and the source stop-position identifier.[^thb-intercity-csv] These are derived terminal summaries, not a separate operator-published field called “terminal”.[^thb-intercity-timetable][^thb-intercity-csv] A user should therefore treat a first or last stop as the timetable export's ordered boundary and follow the underlying route identity when a service has a short-working, branch or date-bounded variation.[^thb-intercity-csv]

## Frequencies and service days

The direction summary counts distinct departure times found at the first stop and records the earliest and latest published times.[^thb-intercity-csv] It also retains weekday flags and the service-date values present in the export, which makes weekday-only, weekend and date-bounded services visible without pretending that a static timetable is a real-time feed.[^thb-intercity-timetable][^thb-intercity-csv] “Frequency” here means the number and span of published departures in the retrieved timetable, not an inferred headway between every pair of trips.[^thb-intercity-csv]

The national data layer can therefore answer questions such as which operator publishes a route variant, which stops bound a direction in the export, how many departures are listed at its first stop, and which weekday flags or date bounds accompany those rows.[^thb-intercity-csv] It cannot yet answer whether a vehicle is running now, whether a listed trip is sold out, or whether an operator has made a temporary operational change after the static export was generated.[^thb-intercity-timetable][^tdx-intercity-api]

## Operators, fares and transfer points

The Highway Bureau directory links operator names to online ticketing and company information, which is useful for moving from a normalized route identity to the operator's own booking surface.[^thb-intercity-directory] The current snapshot contains 44 operator labels with timetable rows; that is a count of labels in this export, not a claim that it is the bureau's complete regulated-company count.[^thb-intercity-csv][^thb-intercity-directory]

Fares remain TBC in this layer. The bureau's 2024 fare notice says the Ministry approved a basic-fare adjustment and that operators may adjust within the approved ceiling, file the result with the bureau and publish it for a week before it takes effect; the notice also explains the TPASS subsidy treatment.[^thb-fare-change] That rule is not a current fare table for every route, so no route-specific fare has been invented here.[^thb-fare-change] Current fares, reservation classes, concession rules outside the notice's scope, terminal facilities, luggage policy and guaranteed transfer arrangements need route-level operator or bureau records.[^thb-intercity-directory][^thb-fare-change]

TDX documents an InterCityBus API family alongside its other transport-data services.[^tdx-intercity-api] This page uses the full public static timetable export for its committed snapshot; authenticated API coverage, real-time service status and any additional route-level fields remain outside the present data layer.[^tdx-intercity-api]

## Coverage and conflicts

The current snapshot's 1,837 route variants does not contradict the Highway Bureau plan's historical figure of 173 highway routes in May 2022, because the two values count different things.[^thb-intercity-csv][^thb-2030-plan] The snapshot splits operator, branch, direction-linked names and timetable identities, while the plan describes a historical route count in a vehicle-electrification planning context.[^thb-intercity-csv][^thb-2030-plan] The same plan records 57 supervised operators and 3,130 highway vehicles for that May 2022 picture, so its 57 cannot be substituted for the current CSV's 44 timetable labels.[^thb-2030-plan][^thb-intercity-csv]

The bureau's monthly 國道汽車客運概況 catalogue is another publication layer: it describes aggregate fields such as operator count, route count, trips, passengers, passenger-kilometres and revenue, but it is not the row-level timetable used for this index.[^thb-intercity-stats] A national ridership and revenue series should be built from that monthly dataset once the full data file can be fetched and verified; until then, those figures stay TBC.[^thb-intercity-stats]

## What remains TBC

Current fares by route, live departures, historical route changes, operator fleet allocation, terminal-by-terminal facilities, route ridership, revenue and a stable transfer graph are not established by the committed static snapshot.[^thb-intercity-directory][^thb-intercity-stats][^tdx-intercity-api] The next evidence needed is a full route-level fare source, a successful authenticated or public TDX pull that can be checked end to end, the bureau's monthly statistics file, and operator or terminal primary pages for service details.[^thb-fare-change][^thb-intercity-stats][^tdx-intercity-api]
