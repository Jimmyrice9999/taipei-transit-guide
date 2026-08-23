---
title: Taipei — Neihu YouBike stations
summary: Static YouBike station rows in Taipei's Neihu group, with coordinates, capacity and confirmed nearby rail joins.
updated: 2026-08-23
aliases:
  - "YouBike2.0_MRT Xihu Sta. (Exit 1) (Neihu Rd.)"
  - "YouBike2.0_Wende Green No.1"
  - "YouBike2.0_捷運西湖站(1號出口)內湖路側"
  - "YouBike2.0_文德一號綠地"
facts:
  - label: Municipality
    value: Taipei
    source: tdx-bike-stations
  - label: District group
    value: Neihu
    source: tdx-bike-stations
  - label: Static station rows
    value: 2
    source: tdx-bike-stations
  - label: Published dock capacity total
    value: 35
    source: tdx-bike-stations
  - label: Confirmed coordinate joins
    value: 2
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

This page lists 2 static TDX station rows in Taipei's Neihu group, with a published capacity total of 35 docks. TDX's Station/City feed supplies identity, bilingual names, addresses, coordinates and capacity; that feed does not carry current occupancy [^tdx-bike-stations].

The rail column is a nearest-coordinate join against the committed TDX rail station registry. It is shown only for a unique result within 200 metres; station names are not used to create a match [^tdx-rail-stations].

| Station / 站名 | Capacity | Coordinates | Map | Confirmed nearby MRT/LRT |
|---|---:|---|---|---|
| YouBike2.0_MRT Xihu Sta. (Exit 1) (Neihu Rd.) / YouBike2.0_捷運西湖站(1號出口)內湖路側 [^tdx-bike-stations] | 20 [^tdx-bike-stations] | 25.08227, 121.56709 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=25.08227&mlon=121.56709#map=19/25.08227/121.56709) | [Xihu / 西湖](/rail/metro/stations/br16/) (18 m) [^tdx-rail-stations] |
| YouBike2.0_Wende Green No.1 / YouBike2.0_文德一號綠地 [^tdx-bike-stations] | 15 [^tdx-bike-stations] | 25.07860, 121.58302 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=25.0786&mlon=121.58302#map=19/25.0786/121.58302) | [Wende / 文德](/rail/metro/stations/br18/) (197 m) [^tdx-rail-stations] |
