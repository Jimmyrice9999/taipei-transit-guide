---
title: Taoyuan — Taoyuan YouBike stations
summary: Static YouBike station rows in Taoyuan's Taoyuan group, with coordinates, capacity and confirmed nearby rail joins.
updated: 2026-08-23
aliases:
  - "YouBike2.0_Sec. 3, Chenggong Rd.(Hutoushan Innovation Hub)"
  - "YouBike2.0_Zhonglu 6th Children's Park"
  - "YouBike2.0_中路兒6公園"
  - "YouBike2.0_成功路三段(虎頭山創新園區)"
facts:
  - label: Municipality
    value: Taoyuan
    source: tdx-bike-stations
  - label: District group
    value: Taoyuan
    source: tdx-bike-stations
  - label: Static station rows
    value: 2
    source: tdx-bike-stations
  - label: Published dock capacity total
    value: 51
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

This page lists 2 static TDX station rows in Taoyuan's Taoyuan group, with a published capacity total of 51 docks. TDX's Station/City feed supplies identity, bilingual names, addresses, coordinates and capacity; that feed does not carry current occupancy [^tdx-bike-stations].

The rail column is a nearest-coordinate join against the committed TDX rail station registry. It is shown only for a unique result within 200 metres; station names are not used to create a match [^tdx-rail-stations].

| Station / 站名 | Capacity | Coordinates | Map | Confirmed nearby MRT/LRT |
|---|---:|---|---|---|
| YouBike2.0_Sec. 3, Chenggong Rd.(Hutoushan Innovation Hub) / YouBike2.0_成功路三段(虎頭山創新園區) [^tdx-bike-stations] | 20 [^tdx-bike-stations] | 24.99788, 121.32522 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=24.997883&mlon=121.325222#map=19/24.997883/121.325222) | — |
| YouBike2.0_Zhonglu 6th Children's Park / YouBike2.0_中路兒6公園 [^tdx-bike-stations] | 31 [^tdx-bike-stations] | 24.99679, 121.29364 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=24.996786&mlon=121.293644#map=19/24.996786/121.293644) | — |
## Reading this city snapshot

The committed TDX extract groups 2 static station rows under the Taoyuan district label and reports a combined published capacity of 51 docks.[^tdx-bike-stations] The station table preserves the row names, bilingual labels, addresses, coordinates and capacities returned by the city feed; it is a point-in-time data record rather than a live occupancy board.[^tdx-bike-stations] A capacity total is the sum of the published dock fields, not a count of bicycles currently available.

The page's rail column is a separate nearest-coordinate join. This snapshot records 0 confirmed coordinate joins for the group.[^tdx-rail-stations] The join accepts a unique rail result within 200 metres and does not compare station names, so a zero is an evidence result rather than a claim that no rail service is nearby.[^tdx-rail-stations] A positive join likewise does not assert a fare integration, a same-building entrance or a signed cycle route.

The static feed supports siting and capacity questions, including map links generated from the published coordinates.[^tdx-bike-stations] It does not publish the live number of bikes or empty docks used by a rider deciding whether to leave immediately; live availability remains TBC until a current availability feed is fetched and archived.[^tdx-bike-stations] The page therefore keeps the durable station identity separate from conditions that can change during a trip.
