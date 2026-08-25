---
title: New Taipei YouBike station index
summary: Searchable static YouBike station rows for New Taipei, grouped by district with coordinate-verified rail joins.
updated: 2026-08-25
facts:
  - label: Municipality
    value: New Taipei
    source: tdx-bike-stations
  - label: Static station rows
    value: 1593
    source: tdx-bike-stations
  - label: Published dock capacity total
    value: 48355
    source: tdx-bike-stations
  - label: Confirmed coordinate joins
    value: 136
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
    accessed: 2026-08-25
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

This is the New Taipei browse index for the static TDX Bike Station/City snapshot retrieved on 25 August 2026 [^tdx-bike-stations]. It contains 1593 station rows and a published capacity total of 48355 docks [^tdx-bike-stations]. Live available-bike and available-return-dock values are excluded because they belong to a separate availability feed [^tdx-bike-stations].

The MRT/LRT column is present only when the station has one unique nearest TDX rail station within 200 metres by coordinates [^tdx-rail-stations]. The join does not compare names, and an ambiguous or more distant result is left blank [^tdx-rail-stations].

## District indexes

| District | Stations | Published capacity | Coordinate joins |
|---|---:|---:|---:|
| [Sanchong](/bike/stations/new-taipei-sanchong/) [^tdx-bike-stations] | 1 | 36 | 0 |
| [Zhonghe](/bike/stations/new-taipei-zhonghe/) [^tdx-bike-stations] | 5 | 175 | 0 |
| [Tucheng](/bike/stations/new-taipei-tucheng/) [^tdx-bike-stations] | 3 | 81 | 0 |
| [Xindian](/bike/stations/new-taipei-xindian/) [^tdx-bike-stations] | 3 | 110 | 0 |
| [Xinzhuang](/bike/stations/new-taipei-xinzhuang/) [^tdx-bike-stations] | 5 | 193 | 1 |
| [Unclassified](/bike/stations/new-taipei-unclassified/) [^tdx-bike-stations] | 1567 | 47489 | 135 |
| [Banqiao](/bike/stations/new-taipei-banqiao/) [^tdx-bike-stations] | 3 | 112 | 0 |
| [Linkou](/bike/stations/new-taipei-linkou/) [^tdx-bike-stations] | 1 | 17 | 0 |
| [Shulin](/bike/stations/new-taipei-shulin/) [^tdx-bike-stations] | 1 | 26 | 0 |
| [Yonghe](/bike/stations/new-taipei-yonghe/) [^tdx-bike-stations] | 3 | 87 | 0 |
| [Yingge](/bike/stations/new-taipei-yingge/) [^tdx-bike-stations] | 1 | 29 | 0 |

Each district link is a browse page rather than an individual station page: a dock is a data row here, not a thin standalone article [^tdx-bike-stations].

## Snapshot detail

The New Taipei municipality section is a build-time view of 1593 returned TDX Station/City records, not a live occupancy display [^tdx-bike-stations]. The normalized rows retain 1593 English station names, 1593 Traditional Chinese station names, and 1593 valid coordinate pairs; the source response also supplies station identifiers, addresses, service type, capacity and source-update timestamps [^tdx-bike-stations].

The published capacity values in this group range from 8 to 99 docks per row, with the total shown above calculated by summing the returned BikesCapacity fields [^tdx-bike-stations]. The observed ServiceType distribution is 2: 1593, so a missing or null service value is not converted into an assumed operating category [^tdx-bike-stations].

The TDX records used for this page carried UpdateTime value(s) 2026-08-25T23:37:06+08:00 [^tdx-bike-stations]. Those timestamps date the source response, while the page frontmatter records the retrieval date; neither timestamp is presented as a prediction of future station availability [^tdx-bike-stations].

Representative rows in this group are station ID 500205047 (10 docks; YouBike2.0_國慶學成路口), station ID 500233030 (15 docks; YouBike2.0_鷺江國中(長興路298巷)) and station ID 500231042 (25 docks; YouBike2.0_柑園五里聯合活動中心) [^tdx-bike-stations]. They remain rows in a browse index because the source provides a compact identity, address, coordinate and capacity record; creating a separate article for every dock would repeat the same source fields without adding a sourced history or design record [^tdx-bike-stations].

The nearby-rail column is conservative: 136 rows have a confirmed coordinate join in this group [^tdx-rail-stations]. A match is retained only when one nearest candidate is within 200 metres and not tied at the one-metre ambiguity threshold, and the calculation compares coordinates rather than station names [^tdx-rail-stations]. Current available bikes and return docks are deliberately outside this static page because TDX publishes those values through a separate availability feed [^tdx-bike-stations].
