---
title: Taoyuan YouBike station index
summary: Searchable static YouBike station rows for Taoyuan, grouped by district with coordinate-verified rail joins.
updated: 2026-08-23
facts:
  - label: Municipality
    value: Taoyuan
    source: tdx-bike-stations
  - label: Static station rows
    value: 699
    source: tdx-bike-stations
  - label: Published dock capacity total
    value: 24214
    source: tdx-bike-stations
  - label: Confirmed coordinate joins
    value: 18
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

This is the Taoyuan browse index for the static TDX Bike Station/City snapshot retrieved on 23 August 2026 [^tdx-bike-stations]. It contains 699 station rows and a published capacity total of 24214 docks [^tdx-bike-stations]. Live available-bike and available-return-dock values are excluded because they belong to a separate availability feed [^tdx-bike-stations].

The MRT/LRT column is present only when the station has one unique nearest TDX rail station within 200 metres by coordinates [^tdx-rail-stations]. The join does not compare names, and an ambiguous or more distant result is left blank [^tdx-rail-stations].

## District indexes

| District | Stations | Published capacity | Coordinate joins |
|---|---:|---:|---:|
| [Dayuan](/bike/stations/taoyuan-dayuan/) [^tdx-bike-stations] | 1 | 33 | 0 |
| [Pingzhen](/bike/stations/taoyuan-pingzhen/) [^tdx-bike-stations] | 1 | 15 | 0 |
| [Fuxing](/bike/stations/taoyuan-fuxing/) [^tdx-bike-stations] | 1 | 15 | 0 |
| [Unclassified](/bike/stations/taoyuan-unclassified/) [^tdx-bike-stations] | 692 | 24045 | 18 |
| [Taoyuan](/bike/stations/taoyuan-taoyuan/) [^tdx-bike-stations] | 2 | 51 | 0 |
| [Yangmei](/bike/stations/taoyuan-yangmei/) [^tdx-bike-stations] | 1 | 14 | 0 |
| [Guishan](/bike/stations/taoyuan-guishan/) [^tdx-bike-stations] | 1 | 41 | 0 |

Each district link is a browse page rather than an individual station page: a dock is a data row here, not a thin standalone article [^tdx-bike-stations].
