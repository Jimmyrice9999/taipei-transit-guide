---
title: Taoyuan — Pingzhen YouBike stations
summary: Static YouBike station rows in Taoyuan's Pingzhen group, with coordinates, capacity and confirmed nearby rail joins.
updated: 2026-08-23
aliases:
  - "YouBike2.0_Anpingzhen Green Park"
  - "YouBike2.0_安平鎮綠映公園"
facts:
  - label: Municipality
    value: Taoyuan
    source: tdx-bike-stations
  - label: District group
    value: Pingzhen
    source: tdx-bike-stations
  - label: Static station rows
    value: 1
    source: tdx-bike-stations
  - label: Published dock capacity total
    value: 15
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

This page lists 1 static TDX station rows in Taoyuan's Pingzhen group, with a published capacity total of 15 docks. TDX's Station/City feed supplies identity, bilingual names, addresses, coordinates and capacity; current occupancy is not part of this page [^tdx-bike-stations].

The rail column is a nearest-coordinate join against the committed TDX rail station registry. It is shown only for a unique result within 200 metres; station names are not used to create a match [^tdx-rail-stations].

| Station / 站名 | Capacity | Coordinates | Map | Confirmed nearby MRT/LRT |
|---|---:|---|---|---|
| YouBike2.0_Anpingzhen Green Park / YouBike2.0_安平鎮綠映公園 [^tdx-bike-stations] | 15 [^tdx-bike-stations] | 24.90599, 121.19045 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=24.90599&mlon=121.19045#map=19/24.90599/121.19045) | — |
