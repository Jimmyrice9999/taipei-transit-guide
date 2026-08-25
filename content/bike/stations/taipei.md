---
title: Taipei YouBike station index
summary: Searchable static YouBike station rows for Taipei, grouped by district with coordinate-verified rail joins.
updated: 2026-08-25
facts:
  - label: Municipality
    value: Taipei
    source: tdx-bike-stations
  - label: Static station rows
    value: 1794
    source: tdx-bike-stations
  - label: Published dock capacity total
    value: 50876
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

This is the Taipei browse index for the static TDX Bike Station/City snapshot retrieved on 25 August 2026 [^tdx-bike-stations]. It contains 1794 station rows and a published capacity total of 50876 docks [^tdx-bike-stations]. Live available-bike and available-return-dock values are excluded because they belong to a separate availability feed [^tdx-bike-stations].

The MRT/LRT column is present only when the station has one unique nearest TDX rail station within 200 metres by coordinates [^tdx-rail-stations]. The join does not compare names, and an ambiguous or more distant result is left blank [^tdx-rail-stations].

## District indexes

| District | Stations | Published capacity | Coordinate joins |
|---|---:|---:|---:|
| [Zhongzheng](/bike/stations/taipei-zhongzheng/) [^tdx-bike-stations] | 1 | 40 | 0 |
| [Neihu](/bike/stations/taipei-neihu/) [^tdx-bike-stations] | 2 | 35 | 2 |
| [Daan](/bike/stations/taipei-daan/) [^tdx-bike-stations] | 1 | 40 | 0 |
| [Unclassified](/bike/stations/taipei-unclassified/) [^tdx-bike-stations] | 1790 | 50761 | 208 |

Each district link is a browse page rather than an individual station page: a dock is a data row here, not a thin standalone article [^tdx-bike-stations].

## Snapshot detail

The Taipei municipality section is a build-time view of 1794 returned TDX Station/City records, not a live occupancy display [^tdx-bike-stations]. The normalized rows retain 1794 English station names, 1794 Traditional Chinese station names, and 1794 valid coordinate pairs; the source response also supplies station identifiers, addresses, service type, capacity and source-update timestamps [^tdx-bike-stations].

The published capacity values in this group range from 5 to 99 docks per row, with the total shown above calculated by summing the returned BikesCapacity fields [^tdx-bike-stations]. The observed ServiceType distribution is 2: 1794, so a missing or null service value is not converted into an assumed operating category [^tdx-bike-stations].

The TDX records used for this page carried UpdateTime value(s) 2026-08-25T23:37:06+08:00 [^tdx-bike-stations]. Those timestamps date the source response, while the page frontmatter records the retrieval date; neither timestamp is presented as a prediction of future station availability [^tdx-bike-stations].

Representative rows in this group are station ID 500101023 (87 docks; YouBike2.0_第二學生活動中心), station ID 500111014 (54 docks; YouBike2.0_中研公園) and station ID 500111010 (30 docks; YouBike2.0_研究院舊莊街口) [^tdx-bike-stations]. They remain rows in a browse index because the source provides a compact identity, address, coordinate and capacity record; creating a separate article for every dock would repeat the same source fields without adding a sourced history or design record [^tdx-bike-stations].

The nearby-rail column is conservative: 210 rows have a confirmed coordinate join in this group [^tdx-rail-stations]. A match is retained only when one nearest candidate is within 200 metres and not tied at the one-metre ambiguity threshold, and the calculation compares coordinates rather than station names [^tdx-rail-stations]. Current available bikes and return docks are deliberately outside this static page because TDX publishes those values through a separate availability feed [^tdx-bike-stations].
