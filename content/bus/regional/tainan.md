---
title: Tainan regional buses
description: A dated TDX route-and-stop snapshot of Tainan city buses, annual route ridership and the 小黃公車 reservation network.
summary: Tainan's live TDX city-bus catalogue exposes route identities, operators and ordered stops, while the city publishes seven Minguo years of annual route ridership and a separate 52-route 小黃公車 network.
updated: 2026-08-25
facts:
  - label: TDX route entries
    value: "165"
    source: tainan-route-tdx
  - label: Ordered direction records
    value: "692"
    source: tainan-stop-tdx
  - label: Ordered stop records
    value: "23,386"
    source: tainan-stop-tdx
  - label: TDX operator records
    value: "10"
    source: tainan-operator-tdx
  - label: Ridership years
    value: "108–114 Minguo"
    source: tainan-ridership-dataset
  - label: 小黃公車 route names
    value: "52"
    source: tainan-yellow
  - label: Expansion-notice route count
    value: "49"
    source: tainan-yellow-notice
  - label: Route-level timetable snapshot
    value: TBC
  - label: Route-level historical fare series
    value: TBC
specs:
  - label: Snapshot retrieved
    value: 2026-08-25
    source: tainan-route-tdx
  - label: Route response update time
    value: 2026-08-25
    source: tainan-route-tdx
  - label: Ridership dataset update time
    value: 2026-08-11 16:29
    source: tainan-ridership-dataset
  - label: Ridership publication cadence
    value: Annual
    source: tainan-ridership-dataset
  - label: Route data format
    value: TDX JSON with route and sub-route records
    source: tainan-route-dataset
  - label: Stop data format
    value: TDX JSON with ordered stops and coordinates
    source: tainan-stop-dataset
sources:
  - id: tainan-route-dataset
    title: Tainan city-bus route data
    titleOriginal: 大台南公車路線資料
    publisher: Tainan City Government Transportation Bureau (臺南市政府交通局)
    url: https://data.gov.tw/dataset/85855
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The official dataset page defines the route-data fields, identifies the Tainan Transportation Bureau as provider and identifies route data as sourced through TDX.
  - id: tainan-route-tdx
    title: Tainan city-bus route response
    titleOriginal: 大台南公車路線資料（TDX Route）
    publisher: Taiwan Ministry of Transportation and Communications TDX (交通部運輸資料流通服務)
    url: https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/Tainan?$format=JSON
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The full live TDX response supplies 165 Tainan route records, route names, operators, sub-routes, terminal labels, fare descriptions, map links and source update times.
  - id: tainan-stop-dataset
    title: Tainan city-bus route stop order data
    titleOriginal: 大台南公車路線站序資料
    publisher: Tainan City Government Transportation Bureau (臺南市政府交通局)
    url: https://data.gov.tw/dataset/85852
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The official dataset page defines the RouteUID, RouteID, direction, ordered Stops, UpdateTime and VersionID fields and identifies TDX as the data source.
  - id: tainan-stop-tdx
    title: Tainan TDX ordered bus stops by route
    titleOriginal: 大台南公車路線站序資料（TDX StopOfRoute）
    publisher: Taiwan Ministry of Transportation and Communications TDX (交通部運輸資料流通服務)
    url: https://tdx.transportdata.tw/api/basic/v2/Bus/StopOfRoute/City/Tainan?$format=JSON
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The full live response supplies 692 direction records and 23,386 ordered stops with stop IDs, names, sequence, boarding flags and coordinates; the counts are derived from the response.
  - id: tainan-operator-tdx
    title: Tainan bus operator response
    titleOriginal: 大台南公車業者資料（TDX Operator）
    publisher: Taiwan Ministry of Transportation and Communications TDX (交通部運輸資料流通服務)
    url: https://tdx.transportdata.tw/api/basic/v2/Bus/Operator/City/Tainan?$format=JSON
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The full live response supplies ten operator records with names, contacts, URLs and source update times.
  - id: tainan-ridership-dataset
    title: Tainan city-bus ridership information
    titleOriginal: 大台南公車運量資訊
    publisher: Tainan City Government Transportation Bureau (臺南市政府交通局)
    url: https://data.gov.tw/dataset/53402
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The full dataset page defines monthly route ridership fields, lists annual CSV/JSON resources for Minguo years 108–114, gives annual update frequency and records metadata updated 2026-08-11 16:29.
  - id: tainan-ridership-108
    title: Tainan city-bus ridership CSV, Minguo 108
    titleOriginal: 108年大台南公車運量
    publisher: Tainan City Government Transportation Bureau (臺南市政府交通局)
    url: https://data.tainan.gov.tw/File/ResourceCsvDownload/c9490b1e-4cd9-43f8-b65f-6ba775298890
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: Full CSV used for the 108 annual route rows and monthly values in the committed ridership layer.
  - id: tainan-ridership-109
    title: Tainan city-bus ridership CSV, Minguo 109
    titleOriginal: 109年大台南公車運量
    publisher: Tainan City Government Transportation Bureau (臺南市政府交通局)
    url: https://data.tainan.gov.tw/File/ResourceCsvDownload/0f09d15c-58b8-4ec5-908a-8a7f92f8d4a9
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: Full CSV used for the 109 annual route rows and monthly values in the committed ridership layer.
  - id: tainan-ridership-110
    title: Tainan city-bus ridership CSV, Minguo 110
    titleOriginal: 110年大台南公車運量
    publisher: Tainan City Government Transportation Bureau (臺南市政府交通局)
    url: https://data.tainan.gov.tw/File/ResourceCsvDownload/3686aa6e-87e9-4e21-998e-1a9c72b357bf
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: Full CSV used for the 110 annual route rows and monthly values in the committed ridership layer.
  - id: tainan-ridership-111
    title: Tainan city-bus ridership CSV, Minguo 111
    titleOriginal: 111年大台南公車運量
    publisher: Tainan City Government Transportation Bureau (臺南市政府交通局)
    url: https://data.tainan.gov.tw/File/ResourceCsvDownload/b28ba03f-82d0-41e0-b423-0c9b914cbfcf
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: Full CSV used for the 111 annual route rows and monthly values in the committed ridership layer.
  - id: tainan-ridership-112
    title: Tainan city-bus ridership CSV, Minguo 112
    titleOriginal: 112年大台南公車運量
    publisher: Tainan City Government Transportation Bureau (臺南市政府交通局)
    url: https://data.tainan.gov.tw/File/ResourceCsvDownload/fc1b425d-810e-46ba-bdd4-1bb4698285d0
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: Full CSV used for the 112 annual route rows and monthly values in the committed ridership layer.
  - id: tainan-ridership-113
    title: Tainan city-bus ridership CSV, Minguo 113
    titleOriginal: 113年大台南公車運量
    publisher: Tainan City Government Transportation Bureau (臺南市政府交通局)
    url: https://data.tainan.gov.tw/File/ResourceCsvDownload/16050b5f-30cd-458d-be8f-4fe172b14fa8
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: Full CSV used for the 113 annual route rows and monthly values in the committed ridership layer.
  - id: tainan-ridership-114
    title: Tainan city-bus ridership CSV, Minguo 114
    titleOriginal: 114年大台南公車運量
    publisher: Tainan City Government Transportation Bureau (臺南市政府交通局)
    url: https://data.tainan.gov.tw/File/ResourceCsvDownload/d3e854e6-8c5d-4091-a09c-efccf4fb1c8a
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: Full CSV used for the 114 annual route rows and monthly values in the committed ridership layer.
  - id: tainan-portal
    title: Tainan City Bus portal
    titleOriginal: 大台南公車
    publisher: Tainan City Government Transportation Bureau (臺南市政府交通局)
    url: https://2384.tainan.gov.tw/tnbusweb/Default.aspx
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The full official portal exposes dynamic bus information, route maps, stop information, transfer queries, fare queries and timetable/download links.
  - id: tainan-fares
    title: Tainan bus fare information
    titleOriginal: 票價資訊
    publisher: Tainan City Government Transportation Bureau (臺南市政府交通局)
    url: https://2384.tainan.gov.tw/newtnbusweb/priceInfo.html?Lang=cht
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The full fare page gives the 2026 City Card rules, main/branch basic-mileage discount, transfer discount, HSR express rule and electronic-ticket conditions.
  - id: tainan-yellow
    title: Tainan 小黃公車 information and Q&A
    titleOriginal: 小黃公車資訊
    publisher: Tainan City Government Transportation Bureau (臺南市政府交通局)
    url: https://2384.tainan.gov.tw/newtnbusweb/othersInfoDrtsQA.html
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The full official page explains the taxi-bus model, fixed and reservation services, fare rules, service districts and the 52 unique route names in its route table.
  - id: tainan-yellow-notice
    title: Tainan 小黃公車 service expansion notice
    titleOriginal: 臺南市小黃公車新增路線及服務方式
    publisher: Tainan City Government Transportation Bureau (臺南市政府交通局)
    url: https://traffic.tainan.gov.tw/Announcement/news?PageType=1&id=5606215d-e4c4-4b81-9bb0-3bb2d230b29d
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The full official notice records the 黃3/黃16 joint bus-taxi operation, new 黃23 service, reservation window and fare treatment.
---

Tainan's public-bus data has several official layers, and they are not interchangeable. The Government Data Open Platform describes the route and stop datasets as Tainan Transportation Bureau data sourced through TDX, while the live TDX responses expose the route identities and ordered stop records used here.[^tainan-route-dataset][^tainan-stop-dataset][^tainan-route-tdx][^tainan-stop-tdx] The [committed Tainan route JSON](/data/tainan-bus-routes.json) keeps that distinction visible: route metadata, sub-routes and source update times are separate from the direction-level stop arrays.[^tainan-route-tdx][^tainan-stop-tdx]

## The city-bus route layer

The route response supplies route names, route IDs, operator references, sub-route directions, terminal labels, fare descriptions and official route-map links.[^tainan-route-tdx] A route can contain more than one sub-route, including extensions or direction-specific labels, so the data layer retains the source's sub-route UID and name rather than flattening every branch into a bare route number.[^tainan-route-tdx] The stop response then joins by route and sub-route UID; each stop keeps the source stop ID, sequence, boarding flag and coordinate where published.[^tainan-stop-tdx]

This is a structure for navigation and comparison, not a live arrival board. The Tainan portal separately advertises dynamic information, route maps, stop information, transfer queries, fare queries and timetable/download functions.[^tainan-portal] The route JSON's `UpdateTime` values are the source timestamps for the snapshot, while the page retrieval date is 25 August 2026; those dates should be read together when routes are used for a journey.[^tainan-route-tdx][^tainan-stop-tdx]

| Snapshot field | Value |
| --- | ---: |
| TDX route entries | 165 [^tainan-route-tdx] |
| Direction-level stop records | 692 [^tainan-stop-tdx] |
| Ordered stop records | 23,386 [^tainan-stop-tdx] |
| TDX operator records | 10 [^tainan-operator-tdx] |

## Operators, fares and transfers

The operator response publishes ten records with names, phone numbers, websites and update times.[^tainan-operator-tdx] That count is a count of TDX operator records, not an independent legal-company audit: route records can name a bus company, a taxi fleet or a small-bus operator in the same city catalogue.[^tainan-route-tdx][^tainan-operator-tdx]

The fare page describes a fare system with several layers. For 2026, Tainan residents using the City Card receive the stated urban-route weekday half-fare and weekend-free treatment, while the page gives a basic-mileage-free rule for main and branch routes when an electronic card is tapped on and off.[^tainan-fares] The same page states a two-hour TRA-to-bus transfer discount and a separate rule for HSR express routes, including the condition that HSR passengers travel free.[^tainan-fares] These are network and eligibility rules, not a route-by-route historical fare series; that series remains TBC in this page.[^tainan-fares]

## Annual route ridership

The city publishes monthly route ridership with route name, origin/destination and important stops, route category, operator, Minguo year, twelve month fields and an annual total.[^tainan-ridership-dataset] The committed layer includes the seven annual resources listed by the official catalogue, from Minguo 108 through 114, preserving the source year labels rather than silently converting them to Gregorian years.[^tainan-ridership-dataset][^tainan-ridership-108][^tainan-ridership-109][^tainan-ridership-110][^tainan-ridership-111][^tainan-ridership-112][^tainan-ridership-113][^tainan-ridership-114]

The following table is a no-JavaScript, screen-reader-readable network total derived by summing each fetched annual CSV's route totals. It is not an official single “network total” field, and it should not be compared with a station-level MRT total without checking scope.[^tainan-ridership-108][^tainan-ridership-109][^tainan-ridership-110][^tainan-ridership-111][^tainan-ridership-112][^tainan-ridership-113][^tainan-ridership-114]

| Minguo year | Gregorian year | Summed route totals |
| ---: | ---: | ---: |
| 108 | 2019 | 46,625,144 [^tainan-ridership-108] |
| 109 | 2020 | 36,182,134 [^tainan-ridership-109] |
| 110 | 2021 | 12,672,621 [^tainan-ridership-110] |
| 111 | 2022 | 13,301,069 [^tainan-ridership-111] |
| 112 | 2023 | 15,116,658 [^tainan-ridership-112] |
| 113 | 2024 | 15,947,047 [^tainan-ridership-113] |
| 114 | 2025 | 16,787,769 [^tainan-ridership-114] |

The sharp fall between 109 and 110 is visible in the source-derived sum, but this page does not assign a cause to it: the ridership dataset supplies counts and categories, not an explanatory series.[^tainan-ridership-109][^tainan-ridership-110] The 114 resource was available when the catalogue metadata was last updated on 11 August 2026, and the page identifies the publication cadence as annual.[^tainan-ridership-dataset]

## 小黃公車

Tainan describes 小黃公車 as city-bus service operated with taxi vehicles, with fixed routes, stops and timetables plus a reservation mode for trips within one kilometre of a route stop when booked by 17:00 the day before.[^tainan-yellow] The official Q&A also describes reservation stops in places without a fixed route or fixed timetable, so a stop listed in that part of the page must not be treated as a normal scheduled stop.[^tainan-yellow] Its current route table names 52 unique routes across 32 administrative districts and identifies 台一大車隊 or 中華衛星大車隊 for the grouped services.[^tainan-yellow]

The city has continued to change the service model. A recent official notice describes 黃3 and 黃16 as joint bus-and-taxi services, adds 黃23 between 西寮代天府 and 柳營奇美醫院, and states a reservation window from 06:00 to 22:00 for qualifying bookings.[^tainan-yellow-notice] The JSON preserves the grouped route table and unique route names, but leaves individual departure times to the official portal's timetable layer rather than copying a dynamic or image-only schedule into a static claim.[^tainan-yellow][^tainan-portal]

## Gaps and conflicts

The route and stop datasets provide current structure, but not a historical route-change log, reliability series, depot allocation, vehicle assignment or accessibility inventory.[^tainan-route-dataset][^tainan-stop-dataset][^tainan-operator-tdx] TDX provides route and stop update timestamps, while the ridership catalogue provides annual route totals; neither is a complete timetable history.[^tainan-route-tdx][^tainan-ridership-dataset] The city portal and the 小黃公車 Q&A are therefore retained as the service-information boundary, and any timetable or route change should be refreshed from those sources before publication.[^tainan-portal][^tainan-yellow]

The official sources disagree on the current 小黃公車 count. The Q&A page says 52 routes across 32 administrative districts, while the 5 August 2026 expansion notice says that adding 黃3, 黃16 and 黃23 increased the total from 46 to 49 routes across 31 districts.[^tainan-yellow][^tainan-yellow-notice] These may be different publication snapshots or scopes, but the fetched sources do not explain the difference. The data layer preserves the Q&A table's 52 unique route names and reports the notice's 49 separately; it does not average them or choose a winner.[^tainan-yellow][^tainan-yellow-notice]
