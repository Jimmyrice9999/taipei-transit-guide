---
title: New Taipei — Tucheng YouBike stations
summary: Static YouBike station rows in New Taipei's Tucheng group, with coordinates, capacity and confirmed nearby rail joins.
updated: 2026-08-23
aliases:
  - "YouBike2.0_Changfeng Community"
  - "YouBike2.0_Peipo Community Park"
  - "YouBike2.0_Zhongyang Parking Lot"
  - "YouBike2.0_中央公園地下停車場"
  - "YouBike2.0_沛陂社區公園"
  - "YouBike2.0_長風社區"
facts:
  - label: Municipality
    value: New Taipei
    source: tdx-bike-stations
  - label: District group
    value: Tucheng
    source: tdx-bike-stations
  - label: Static station rows
    value: 3
    source: tdx-bike-stations
  - label: Published dock capacity total
    value: 81
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

This page lists 3 static TDX station rows in New Taipei's Tucheng group, with a published capacity total of 81 docks. TDX's Station/City feed supplies identity, bilingual names, addresses, coordinates and capacity; current occupancy is not part of this page [^tdx-bike-stations].

The rail column is a nearest-coordinate join against the committed TDX rail station registry. It is shown only for a unique result within 200 metres; station names are not used to create a match [^tdx-rail-stations].

| Station / 站名 | Capacity | Coordinates | Map | Confirmed nearby MRT/LRT |
|---|---:|---|---|---|
| YouBike2.0_Changfeng Community / YouBike2.0_長風社區 [^tdx-bike-stations] | 30 [^tdx-bike-stations] | 24.97811, 121.43937 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=24.97811&mlon=121.43937#map=19/24.97811/121.43937) | — |
| YouBike2.0_Peipo Community Park / YouBike2.0_沛陂社區公園 [^tdx-bike-stations] | 36 [^tdx-bike-stations] | 24.96326, 121.41970 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=24.963262311576905&mlon=121.41969877977414#map=19/24.963262311576905/121.41969877977414) | — |
| YouBike2.0_Zhongyang Parking Lot / YouBike2.0_中央公園地下停車場 [^tdx-bike-stations] | 15 [^tdx-bike-stations] | 24.98276, 121.44478 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=24.98276&mlon=121.44478#map=19/24.98276/121.44478) | — |
