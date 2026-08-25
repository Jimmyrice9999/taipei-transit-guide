---
title: New Taipei — Tucheng YouBike stations
summary: Static YouBike station rows in New Taipei's Tucheng group, with coordinates, capacity and confirmed nearby rail joins.
updated: 2026-08-25
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

This page lists 3 static TDX station rows in New Taipei's Tucheng group, with a published capacity total of 81 docks. TDX's Station/City feed supplies identity, bilingual names, addresses, coordinates and capacity; that feed does not carry current occupancy [^tdx-bike-stations].

The rail column is a nearest-coordinate join against the committed TDX rail station registry. It is shown only for a unique result within 200 metres; station names are not used to create a match [^tdx-rail-stations].
## Snapshot detail

The New Taipei's Tucheng group section is a build-time view of 3 returned TDX Station/City records, not a live occupancy display [^tdx-bike-stations]. The normalized rows retain 3 English station names, 3 Traditional Chinese station names, and 3 valid coordinate pairs; the source response also supplies station identifiers, addresses, service type, capacity and source-update timestamps [^tdx-bike-stations].

The published capacity values in this group range from 15 to 36 docks per row, with the total shown above calculated by summing the returned BikesCapacity fields [^tdx-bike-stations]. The observed ServiceType distribution is 2: 3, so a missing or null service value is not converted into an assumed operating category [^tdx-bike-stations].

The TDX records used for this page carried UpdateTime value(s) 2026-08-25T23:37:06+08:00 [^tdx-bike-stations]. Those timestamps date the source response, while the page frontmatter records the retrieval date; neither timestamp is presented as a prediction of future station availability [^tdx-bike-stations].

Representative rows in this group are station ID 500206028 (30 docks; YouBike2.0_長風社區), station ID 500206021 (36 docks; YouBike2.0_沛陂社區公園) and station ID 500206071 (15 docks; YouBike2.0_中央公園地下停車場) [^tdx-bike-stations]. They remain rows in a browse index because the source provides a compact identity, address, coordinate and capacity record; creating a separate article for every dock would repeat the same source fields without adding a sourced history or design record [^tdx-bike-stations].

The nearby-rail column is conservative: 0 rows have a confirmed coordinate join in this group [^tdx-rail-stations]. A match is retained only when one nearest candidate is within 200 metres and not tied at the one-metre ambiguity threshold, and the calculation compares coordinates rather than station names [^tdx-rail-stations]. Current available bikes and return docks are deliberately outside this static page because TDX publishes those values through a separate availability feed [^tdx-bike-stations].


| Station / 站名 | Capacity | Coordinates | Map | Confirmed nearby MRT/LRT |
|---|---:|---|---|---|
| YouBike2.0_Changfeng Community / YouBike2.0_長風社區 [^tdx-bike-stations] | 30 [^tdx-bike-stations] | 24.97811, 121.43937 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=24.97811&mlon=121.43937#map=19/24.97811/121.43937) | — |
| YouBike2.0_Peipo Community Park / YouBike2.0_沛陂社區公園 [^tdx-bike-stations] | 36 [^tdx-bike-stations] | 24.96326, 121.41970 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=24.963262311576905&mlon=121.41969877977414#map=19/24.963262311576905/121.41969877977414) | — |
| YouBike2.0_Zhongyang Parking Lot / YouBike2.0_中央公園地下停車場 [^tdx-bike-stations] | 15 [^tdx-bike-stations] | 24.98276, 121.44478 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=24.98276&mlon=121.44478#map=19/24.98276/121.44478) | — |
