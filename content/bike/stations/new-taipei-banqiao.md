---
title: New Taipei — Banqiao YouBike stations
summary: Static YouBike station rows in New Taipei's Banqiao group, with coordinates, capacity and confirmed nearby rail joins.
updated: 2026-08-23
aliases:
  - "YouBike2.0_Fuzhou Apartment(Lequn Rd.)"
  - "YouBike2.0_Puqian Elementary School"
  - "YouBike2.0_Zhenyi Village Park"
  - "YouBike2.0_埔墘國小"
  - "YouBike2.0_振義里公園"
  - "YouBike2.0_浮洲合宜住宅(樂群路)"
facts:
  - label: Municipality
    value: New Taipei
    source: tdx-bike-stations
  - label: District group
    value: Banqiao
    source: tdx-bike-stations
  - label: Static station rows
    value: 3
    source: tdx-bike-stations
  - label: Published dock capacity total
    value: 112
    source: tdx-bike-stations
  - label: Confirmed coordinate joins
    value: 0
    source: tdx-rail-stations
specs:
  - label: Live availability
    value: TBC
sources:
  - id: tdx-bike-stations
    title: TDX Bike Station City pull
    titleOriginal: 交通部運輸資料流通服務平臺 — Bike Station/City
    publisher: Ministry of Transportation and Communications TDX / 交通部運輸資料流通服務平臺
    url: 'https://tdx.transportdata.tw/api/basic/v2/Bike/Station/City/{City}'
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: Supports the static station rows, bilingual names and addresses, coordinates, capacity and the city snapshot counts. It does not support live bike or dock availability.
  - id: tdx-rail-stations
    title: TDX rail station registry
    titleOriginal: 交通部運輸資料流通服務平臺 — Rail Station
    publisher: Ministry of Transportation and Communications TDX / 交通部運輸資料流通服務平臺
    url: 'https://tdx.transportdata.tw/'
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Supports the rail station coordinates, codes and bilingual names used for the nearest-coordinate join; the join does not compare station names.
---

This page lists 3 static TDX station rows in New Taipei's Banqiao group, with a published capacity total of 112 docks. TDX's Station/City feed supplies identity, bilingual names, addresses, coordinates and capacity; that feed does not carry current occupancy [^tdx-bike-stations].

The rail column is a nearest-coordinate join against the committed TDX rail station registry. It is shown only for a unique result within 200 metres; station names are not used to create a match [^tdx-rail-stations].

| Station / 站名 | Capacity | Coordinates | Map | Confirmed nearby MRT/LRT |
|---|---:|---|---|---|
| YouBike2.0_Fuzhou Apartment(Lequn Rd.) / YouBike2.0_浮洲合宜住宅(樂群路) [^tdx-bike-stations] | 48 [^tdx-bike-stations] | 24.99702, 121.44642 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=24.99702&mlon=121.44642#map=19/24.99702/121.44642) | — |
| YouBike2.0_Puqian Elementary School / YouBike2.0_埔墘國小 [^tdx-bike-stations] | 34 [^tdx-bike-stations] | 25.01908, 121.47372 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=25.01908&mlon=121.47372#map=19/25.01908/121.47372) | — |
| YouBike2.0_Zhenyi Village Park / YouBike2.0_振義里公園 [^tdx-bike-stations] | 30 [^tdx-bike-stations] | 25.02389, 121.48397 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=25.02389&mlon=121.48397#map=19/25.02389/121.48397) | — |
## Reading this city snapshot

The committed TDX extract groups 3 static station rows under the Banqiao district label and reports a combined published capacity of 112 docks.[^tdx-bike-stations] The station table preserves the row names, bilingual labels, addresses, coordinates and capacities returned by the city feed; it is a point-in-time data record rather than a live occupancy board.[^tdx-bike-stations] A capacity total is the sum of the published dock fields, not a count of bicycles currently available.

The page's rail column is a separate nearest-coordinate join. This snapshot records 0 confirmed coordinate joins for the group.[^tdx-rail-stations] The join accepts a unique rail result within 200 metres and does not compare station names, so a zero is an evidence result rather than a claim that no rail service is nearby.[^tdx-rail-stations] A positive join likewise does not assert a fare integration, a same-building entrance or a signed cycle route.

The static feed supports siting and capacity questions, including map links generated from the published coordinates.[^tdx-bike-stations] It does not publish the live number of bikes or empty docks used by a rider deciding whether to leave immediately; live availability remains TBC until a current availability feed is fetched and archived.[^tdx-bike-stations] The page therefore keeps the durable station identity separate from conditions that can change during a trip.
