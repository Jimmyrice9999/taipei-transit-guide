---
title: Taichung regional buses
description: A dated route-and-stop snapshot of Taichung city buses and the separate 小黃公車 reservation network.
summary: Taichung's official route-map CSV preserves 392 city-bus entries and ordered stop lists; the city also publishes 26 fixed-departure 小黃公車 routes with reservation rules.
updated: 2026-08-25
facts:
  - label: City-bus route entries
    value: "392"
    source: taichung-csv
  - label: Operator labels
    value: "23"
    source: taichung-csv
  - label: Direction runs
    value: "784"
    source: taichung-csv
  - label: Ordered stop records
    value: "37,138"
    source: taichung-csv
  - label: 小黃公車 routes
    value: "26"
    source: taichung-yellow
  - label: Route-level departure times
    value: TBC
  - label: Route-level fares
    value: TBC
specs:
  - label: Snapshot retrieved
    value: 2026-08-25
    source: taichung-csv
  - label: Dataset metadata updated
    value: 2026-06-09
    source: taichung-dataset
  - label: Dataset update frequency
    value: Irregular
    source: taichung-dataset
  - label: City-bus data format
    value: CSV route map and stop text
    source: taichung-dataset
  - label: 小黃公車 timetable format
    value: Linked official images
    source: taichung-yellow
sources:
  - id: taichung-dataset
    title: Taichung city-bus route and stop information dataset
    titleOriginal: 臺中市市區公車路線站點資訊
    publisher: Taichung City Government Transportation Bureau (臺中市政府交通局)
    url: https://data.gov.tw/dataset/83748
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The official dataset page defines the route-map scope, fields, provider, irregular update frequency, 2026-06-09 metadata update and warning that the published compilation can lag actual service.
  - id: taichung-csv
    title: Taichung city-bus route-map CSV
    titleOriginal: taichung_bus_maps_2026.CSV
    publisher: Taichung City Government Transportation Bureau (臺中市政府交通局)
    url: https://newdatacenter.taichung.gov.tw/api/v1/no-auth/resource.download?rid=20c2e4cc-49bf-45d5-a880-714c7c66eed6
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The full CSV snapshot supplies 392 route records with operator labels, route descriptions, map links and outbound/return stop strings; counts and direction terminal summaries in this page are derived from those records.
  - id: taichung-citybus
    title: Taichung bus real-time information
    titleOriginal: 台中公車即時動態資訊
    publisher: Taichung City Government Transportation Bureau (臺中市政府交通局)
    url: https://citybus.taichung.gov.tw/ebus
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The official city-bus interface publishes network fare rules, directs passengers to live/operator schedules for actual departures and lists operator links.
  - id: taichung-yellow
    title: Taichung 小黃公車
    titleOriginal: 臺中市小黃公車
    publisher: Taichung City Government Transportation Bureau (臺中市政府交通局)
    url: https://www.traffic.taichung.gov.tw/content/index.asp?Parser=1,7,505,52
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The official page lists 26 Yellow routes, fixed-departure and reservation rules, two reservation phone groups, stop behaviour and linked route/timetable images.
  - id: taichung-notices
    title: Taichung bus service-adjustment notice
    titleOriginal: 臺中市公車最新消息
    publisher: Taichung City Government Transportation Bureau (臺中市政府交通局)
    url: https://www.traffic.taichung.gov.tw/news/index-1.asp?Parser=9%2C4%2C20%2C%2C%2C%2C21415
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: A full official notice dated 2026-06-12 announcing a one-month trial adjustment for 15 routes from 2026-06-15 and directing passengers to the live bus site and app.
---

Taichung's official city-bus catalogue is a route-map dataset, not a live timetable. The Government Data Open Platform describes it as the city's route-and-stop information and warns that compilation and publication can lag actual operations.[^taichung-dataset] The committed snapshot therefore preserves the source's route identity, operator label, route description, map link and two ordered stop strings rather than presenting the CSV as a promise of service on a particular day.[^taichung-dataset][^taichung-csv]

## The city-bus route layer

The 25 August 2026 fetch contains 392 route records, 23 distinct operator labels and 784 direction records.[^taichung-csv] It contains 37,138 ordered stop records after the outbound and return strings are split at the source's `、` separator.[^taichung-csv] The [committed Taichung route JSON](/data/taichung-bus-routes.json) retains each raw direction string alongside the parsed stop list, so a later refresh can be checked against the source wording rather than only against a derived terminal pair.[^taichung-csv]

The CSV's fields are 機關代碼, telephone, serial number, 公車業者, 路線, 路線說明, a route-map link, 去程, 回程 and notes.[^taichung-dataset][^taichung-csv] The operator count is consequently a count of labels in this file, not a count of legal companies: shared labels such as 中台灣客運、統聯客運 remain intact in the data layer.[^taichung-csv] The route description is the source's compact corridor statement, while the first and last stop shown in this page's data are derived from the corresponding ordered direction text.[^taichung-csv]

| Snapshot field | Value |
| --- | ---: |
| Route entries | 392 [^taichung-csv] |
| Operator labels | 23 [^taichung-csv] |
| Direction records | 784 [^taichung-csv] |
| Ordered stop records | 37,138 [^taichung-csv] |

## Fares and departure times

The citybus page publishes network fare rules rather than a route-fare column. Taichung residents, qualifying new-resident spouses and out-of-city students studying in Taichung can use a linked resident e-card for the Double Ten benefit of 10 kilometres free and a fare cap of 10 New Taiwan dollars beyond 10 kilometres.[^taichung-citybus] Non-residents are charged by distance, with the page stating a cash full fare of 20 dollars and half fare of 11 dollars, while an electronic full fare starts at 15 dollars before distance beyond the basic mileage is added.[^taichung-citybus] The page names EasyCard, iPASS and icash2.0 as electronic fare media, and gives a separate Double Ten point rule for the municipal senior and love card.[^taichung-citybus]

The route-map CSV has no departure-time field, so route-level frequencies remain TBC in this layer.[^taichung-dataset][^taichung-csv] The official citybus interface explicitly tells passengers to check the dynamic information service or the operator's schedule because road conditions and boarding times affect departures.[^taichung-citybus] A current route count must therefore be read with its retrieval date and with the city's own warning that the published compilation can differ from actual operations.[^taichung-dataset]

## 小黃公車

Taichung separately publishes 26 小黃公車 routes, each with fixed departure times and a linked route-and-timetable image.[^taichung-yellow] These services use taxis limited to three or four passengers, so the bureau asks passengers to reserve in advance and recommends booking on the day before travel.[^taichung-yellow] The JSON preserves the 26 route names and their two official reservation phone groups, but leaves individual departure values TBC because the page exposes the schedules as linked images rather than CSV timetable fields.[^taichung-yellow]

Where a 小黃公車 route overlaps a city-bus corridor it uses city-bus stops; outside those sections the official instruction is hail-and-ride.[^taichung-yellow] The page groups 黃1–黃10, 黃16–黃18, 黃21, 黃22, 黃25 and 黃26 under (04)2436-6666, with reservations from 08:00 to 17:00, and the remaining nine routes under (04)4058-8888#9, with reservations from 09:00 to 18:00.[^taichung-yellow] The same page records that 黃22 stopped at 神岡(神林路) from 19 December 2025 for road-safety reasons and gives a last-change timestamp of 17 December 2025.[^taichung-yellow]

## Freshness and open gaps

The dataset metadata was updated on 9 June 2026 and describes the file as irregularly updated, so the committed date is the date this project retrieved the CSV, not a claim that every route was unchanged since the metadata update.[^taichung-dataset][^taichung-csv] A 12 June 2026 official notice announced one-month trial changes from 15 June for 15 routes and directed passengers to the live bus site and app, which is a concrete example of why static route data needs a date beside it.[^taichung-notices] Ridership, vehicle allocation, depot assignment, route-level historical frequencies, accessibility inventories and a machine-readable fare history remain TBC here because the fetched sources did not provide those fields in this unit.[^taichung-dataset][^taichung-csv][^taichung-citybus]

## Conflicts

The route-map dataset warns that its compiled publication can lag actual operations, while the citybus interface directs passengers to dynamic information or operator schedules for actual departures.[^taichung-dataset][^taichung-citybus] These sources measure different publication layers, so the JSON retains route identity and stops but does not turn them into a frequency claim.[^taichung-dataset][^taichung-csv]

The full CSV contains 23 raw operator-label values, while the visible operator-link group on the citybus page presents 14 labels.[^taichung-csv][^taichung-citybus] The first is a count of labels attached to route records and the second is a portal link list; neither is treated as a legal-company count.[^taichung-csv][^taichung-citybus]

The city-bus CSV has no departure-time field, while the separate 小黃公車 page describes 26 services with fixed departure times and linked image schedules.[^taichung-csv][^taichung-yellow] The two values belong to different networks and publication formats, so the Yellow timetable is kept in its own data-layer object.[^taichung-yellow]
