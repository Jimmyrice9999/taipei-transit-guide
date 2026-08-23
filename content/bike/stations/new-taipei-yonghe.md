---
title: New Taipei — Yonghe YouBike stations
summary: Static YouBike station rows in New Taipei's Yonghe group, with coordinates, capacity and confirmed nearby rail joins.
updated: 2026-08-23
aliases:
  - "YouBike2.0_Baoping Ln 214"
  - "YouBike2.0_Yonghe Ziyou St."
  - "YouBike2.0_Yonghe-Sun Yat-Sen Memorial Hall"
  - "YouBike2.0_保平路214巷"
  - "YouBike2.0_永和國父紀念館"
  - "YouBike2.0_永和自由街"
facts:
  - label: Municipality
    value: New Taipei
    source: tdx-bike-stations
  - label: District group
    value: Yonghe
    source: tdx-bike-stations
  - label: Static station rows
    value: 3
    source: tdx-bike-stations
  - label: Published dock capacity total
    value: 87
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

This page lists 3 static TDX station rows in New Taipei's Yonghe group, with a published capacity total of 87 docks. TDX's Station/City feed supplies identity, bilingual names, addresses, coordinates and capacity; that feed does not carry current occupancy [^tdx-bike-stations].

The rail column is a nearest-coordinate join against the committed TDX rail station registry. It is shown only for a unique result within 200 metres; station names are not used to create a match [^tdx-rail-stations].

| Station / 站名 | Capacity | Coordinates | Map | Confirmed nearby MRT/LRT |
|---|---:|---|---|---|
| YouBike2.0_Baoping Ln 214 / YouBike2.0_保平路214巷 [^tdx-bike-stations] | 25 [^tdx-bike-stations] | 25.00701, 121.50921 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=25.00701&mlon=121.50921#map=19/25.00701/121.50921) | — |
| YouBike2.0_Yonghe Ziyou St. / YouBike2.0_永和自由街 [^tdx-bike-stations] | 32 [^tdx-bike-stations] | 25.00520, 121.51334 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=25.0052&mlon=121.51334#map=19/25.0052/121.51334) | — |
| YouBike2.0_Yonghe-Sun Yat-Sen Memorial Hall / YouBike2.0_永和國父紀念館 [^tdx-bike-stations] | 30 [^tdx-bike-stations] | 25.00839, 121.52023 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=25.00839&mlon=121.52023#map=19/25.00839/121.52023) | — |
