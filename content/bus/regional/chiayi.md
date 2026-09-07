---
title: Chiayi City and County regional buses
description: A dated Chiayi City/County bus discovery layer joined to the county iBus reservation boundary and Chiayi Bus's official BRT corridor material.
summary: The 6 September 2026 TDX pull contains 11 Chiayi City route records with 29 supplied variants and 41 Chiayi County records with 104 supplied variants; official portals add the BRT, intercity, transfer and Happiness Bus boundaries.
updated: 2026-09-07
facts:
  - label: Chiayi City TDX route records
    value: "11"
    source: chiayi-city-route-tdx
  - label: Chiayi City TDX source variants
    value: "29"
    source: chiayi-city-route-tdx
  - label: Chiayi County TDX route records
    value: "41"
    source: chiayi-county-route-tdx
  - label: Chiayi County TDX source variants
    value: "104"
    source: chiayi-county-route-tdx
  - label: Permanent City/County route total across source layers
    value: TBC
  - label: Unified Chiayi fare matrix
    value: TBC
specs:
  - label: Structured snapshot retrieved
    value: 2026-09-06
    source: chiayi-city-route-tdx
  - label: Structured data definition
    value: TDX Route/City records; supplied variants are SubRoutes records, not timeless unique routes
    source: chiayi-city-route-tdx
  - label: County public portal
    value: Chiayi County iBus
    source: chiayi-county-ibus
  - label: BRT corridor examples
    value: 7211 / 7212
    source: chiayi-bus-brt
sources:
  - id: chiayi-city-route-tdx
    title: Chiayi City city-bus route snapshot
    titleOriginal: 嘉義市公車路線資料（TDX Route/City/Chiayi）
    publisher: Taiwan Ministry of Transportation and Communications TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/Chiayi?$format=JSON
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The committed national snapshot records 11 Chiayi City RouteUID-oriented records and 29 supplied SubRoutes variants; it is not used as a permanent city route total.
  - id: chiayi-county-route-tdx
    title: Chiayi County city-bus route snapshot
    titleOriginal: 嘉義縣公車路線資料（TDX Route/City/ChiayiCounty）
    publisher: Taiwan Ministry of Transportation and Communications TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/ChiayiCounty?$format=JSON
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The committed national snapshot records 41 Chiayi County RouteUID-oriented records and 104 supplied SubRoutes variants; it is not used as a permanent county route total.
  - id: chiayi-county-ibus
    title: Chiayi County iBus
    titleOriginal: 嘉義縣iBus
    publisher: Chiayi County Government (嘉義縣政府)
    url: https://chiayiibus.cyhg.gov.tw/Links
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full official iBus page was fetched directly. Its metadata identifies the county-developed smart-bus service, and its site navigation exposes dynamic bus, stop, transfer-planning and Happiness Bus reservation surfaces.
  - id: chiayi-county-reservation
    title: Chiayi County iBus reservation interface
    titleOriginal: 嘉義縣iBus預約幸福巴士
    publisher: Chiayi County Government (嘉義縣政府)
    url: https://chiayiibus.cyhg.gov.tw/DynamicBusQuery
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full official reservation page was fetched directly. It records the reservation fields, provider contact boundary, maintenance notice, cancellation guidance and the published 15-kilometre NT$100 example for Puzi, Dongshi and Budai.
  - id: chiayi-bus-brt
    title: BRT bus rapid transit
    titleOriginal: BRT公車捷運
    publisher: Chiayi Bus Co., Ltd. (嘉義汽車客運股份有限公司)
    url: https://www.cibus.com.tw/brt3
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full operator page links route 7211, 7212 and a 7212 early-morning branch, lists the stop order in both directions, names the Chiayi rear-station transfer centre and HSR Chiayi Station, and gives the operator contact.
  - id: highway-city-bus-directory
    title: Urban bus information
    titleOriginal: 市區公車資訊
    publisher: Highway Bureau, Ministry of Transportation and Communications (交通部公路局)
    url: https://www.taiwanbus.tw/eBUSPage/link3.aspx
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full official directory identifies Chiayi City urban buses as administered by Chiayi City Transportation Department and Chiayi County urban buses as administered by the Chiayi County Public Bus Office, with separate inquiry contacts.
---

Chiayi needs two adjacent but distinct bus records. The TDX snapshot contains 11
Chiayi City route records with 29 supplied variants and 41 Chiayi County route
records with 104 supplied variants.[^chiayi-city-route-tdx][^chiayi-county-route-tdx]
Those are source-defined RouteUID and SubRoutes measurements from the 6
September 2026 acquisition, not a claim that the City and County publish one
shared permanent route total.[^chiayi-city-route-tdx][^chiayi-county-route-tdx]

The Highway Bureau's full urban-bus directory keeps the administrative boundary
explicit: Chiayi City urban buses are associated with the Chiayi City
Transportation Department, while Chiayi County urban buses are associated with
the Chiayi County Public Bus Office.[^highway-city-bus-directory] The county's
official iBus site is a separate discovery and operations surface with dynamic
bus, stop, transfer-planning and Happiness Bus reservation functions.[^chiayi-county-ibus]

## Chiayi Bus's BRT corridor

Chiayi Bus's official BRT page links current dynamic-query surfaces for routes
7211 and 7212, plus an early-morning 7212 branch.[^chiayi-bus-brt] Its published
stop tables place Chiayi Park and the Chiayi County Puzi Transfer Station at
opposite ends of the 7211 corridor, with the Chiayi rear-station transfer centre
and HSR Chiayi Station among the named stops.[^chiayi-bus-brt] These are operator-
published route and stop relationships; this page does not convert them into
timed rail, HSR or ferry connections.[^chiayi-bus-brt]

The operator page lists 19 stop positions in each displayed direction and gives
Chiayi Bus's address and phone number.[^chiayi-bus-brt] It is a useful editorial
overlay for the corridor, but not a complete list of every City or County route
in the TDX snapshot.[^chiayi-bus-brt][^chiayi-city-route-tdx][^chiayi-county-route-tdx]

## County Happiness Bus boundary

The County iBus reservation interface separates Happiness Bus from ordinary
city-bus lookup and asks for a provider, contact details, desired boarding and
alighting locations, reservation time and passenger count.[^chiayi-county-reservation]
When fetched on 7 September 2026 it displayed a notice that the online
reservation system was under maintenance and should be handled by telephone;
that notice is retained as a dated interface state rather than a permanent
booking rule.[^chiayi-county-reservation]

The same official page publishes a specific flexible-service example: in Puzi
City, Dongshi Township and Budai Township, passengers may choose arbitrary
boarding and alighting points within 15 kilometres for NT$100 per trip, subject
to the published reservation conditions.[^chiayi-county-reservation] That figure
is not generalised to all Chiayi County Happiness Bus services, and a complete
county fare, operator and service-day matrix remains TBC.[^chiayi-county-reservation]

## What remains separate

The City and County route records, Chiayi Bus BRT page and County iBus
reservation interface use different scopes and update mechanisms. The guide
therefore keeps structured discovery, operator route evidence and flexible
reservation evidence as separate layers. A complete current City/County
operator roster, unified fare matrix, current timetable export and evidence-
backed interchange graph remain TBC.[^chiayi-city-route-tdx][^chiayi-county-route-tdx][^chiayi-bus-brt][^chiayi-county-ibus]
