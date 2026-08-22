---
title: Taipei YouBike station index
summary: Searchable static YouBike station rows for Taipei, grouped by district with coordinate-verified rail joins.
updated: 2026-08-23
facts:
  - label: Municipality
    value: Taipei
    source: tdx-bike-stations
  - label: Static station rows
    value: 1794
    source: tdx-bike-stations
  - label: Published dock capacity total
    value: 50877
    source: tdx-bike-stations
  - label: Confirmed coordinate joins
    value: 210
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

This is the Taipei browse index for the static TDX Bike Station/City snapshot retrieved on 23 August 2026 [^tdx-bike-stations]. It contains 1794 station rows and a published capacity total of 50877 docks [^tdx-bike-stations]. Live available-bike and available-return-dock values are excluded because they belong to a separate availability feed [^tdx-bike-stations].

The MRT/LRT column is present only when the station has one unique nearest TDX rail station within 200 metres by coordinates [^tdx-rail-stations]. The join does not compare names, and an ambiguous or more distant result is left blank [^tdx-rail-stations].

## District indexes

| District | Stations | Published capacity | Coordinate joins |
|---|---:|---:|---:|
| [Zhongzheng](/bike/stations/taipei-zhongzheng/) [^tdx-bike-stations] | 1 | 40 | 0 |
| [Neihu](/bike/stations/taipei-neihu/) [^tdx-bike-stations] | 2 | 35 | 2 |
| [Daan](/bike/stations/taipei-daan/) [^tdx-bike-stations] | 1 | 40 | 0 |
| [Unclassified](/bike/stations/taipei-unclassified/) [^tdx-bike-stations] | 1790 | 50762 | 208 |

Each district link is a browse page rather than an individual station page: a dock is a data row here, not a thin standalone article [^tdx-bike-stations].
