---
title: Kaohsiung YouBike station index
summary: Searchable static YouBike station rows for Kaohsiung, grouped by district with coordinate-verified rail joins.
updated: 2026-08-25
facts:
  - label: Municipality
    value: Kaohsiung
    source: tdx-bike-stations
  - label: Static station rows
    value: 1500
    source: tdx-bike-stations
  - label: Published dock capacity total
    value: 30382
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

This is the Kaohsiung browse index for the static TDX Bike Station/City snapshot retrieved on 25 August 2026 [^tdx-bike-stations]. It contains 1500 station rows and a published capacity total of 30382 docks [^tdx-bike-stations]. Live available-bike and available-return-dock values are excluded because they belong to a separate availability feed [^tdx-bike-stations].

The MRT/LRT column is present only when the station has one unique nearest TDX rail station within 200 metres by coordinates [^tdx-rail-stations]. The join does not compare names, and an ambiguous or more distant result is left blank [^tdx-rail-stations].

## District indexes

| District | Stations | Published capacity | Coordinate joins |
|---|---:|---:|---:|
| [Unclassified](/bike/stations/kaohsiung-unclassified/) [^tdx-bike-stations] | 1500 | 30382 | 0 |

Each district link is a browse page rather than an individual station page: a dock is a data row here, not a thin standalone article [^tdx-bike-stations].

## Snapshot detail

The Kaohsiung municipality section is a build-time view of 1500 returned TDX Station/City records, not a live occupancy display [^tdx-bike-stations]. The normalized rows retain 1500 English station names, 1500 Traditional Chinese station names, and 1500 valid coordinate pairs; the source response also supplies station identifiers, addresses, service type, capacity and source-update timestamps [^tdx-bike-stations].

The published capacity values in this group range from 10 to 99 docks per row, with the total shown above calculated by summing the returned BikesCapacity fields [^tdx-bike-stations]. The observed ServiceType distribution is 2: 1500, so a missing or null service value is not converted into an assumed operating category [^tdx-bike-stations].

The TDX records used for this page carried UpdateTime value(s) 2026-08-25T23:38:06+08:00 [^tdx-bike-stations]. Those timestamps date the source response, while the page frontmatter records the retrieval date; neither timestamp is presented as a prediction of future station availability [^tdx-bike-stations].

Representative rows in this group are station ID 501216070 (17 docks; YouBike2.0_阿公店柳橋西路口), station ID 501228004 (16 docks; YouBike2.0_阿公店森林公園) and station ID 501228003 (39 docks; YouBike2.0_阿公店水庫停車場) [^tdx-bike-stations]. They remain rows in a browse index because the source provides a compact identity, address, coordinate and capacity record; creating a separate article for every dock would repeat the same source fields without adding a sourced history or design record [^tdx-bike-stations].

The nearby-rail column is conservative: 0 rows have a confirmed coordinate join in this group [^tdx-rail-stations]. A match is retained only when one nearest candidate is within 200 metres and not tied at the one-metre ambiguity threshold, and the calculation compares coordinates rather than station names [^tdx-rail-stations]. Current available bikes and return docks are deliberately outside this static page because TDX publishes those values through a separate availability feed [^tdx-bike-stations].
