---
title: New Taipei — Banqiao YouBike stations
summary: Static YouBike station rows in New Taipei's Banqiao group, with coordinates, capacity and confirmed nearby rail joins.
updated: 2026-08-25
aliases:
  - "YouBike2.0_Fuzhou Apartment(Lequn Rd.)"
  - "YouBike2.0_Puqian Elementary School"
  - "YouBike2.0_Zhenyi Village Park"
  - "YouBike2.0_埔墘國小"
  - "YouBike2.0_振義里公園"
  - "YouBike2.0_浮洲合宜住宅(樂群路)"
facts:
  - label: Municipality
    value: New Taipei
    source: tdx-bike-stations
  - label: District group
    value: Banqiao
    source: tdx-bike-stations
  - label: Static station rows
    value: 3
    source: tdx-bike-stations
  - label: Published dock capacity total
    value: 112
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

This page lists 3 static TDX station rows in New Taipei's Banqiao group, with a published capacity total of 112 docks. TDX's Station/City feed supplies identity, bilingual names, addresses, coordinates and capacity; that feed does not carry current occupancy [^tdx-bike-stations].

The rail column is a nearest-coordinate join against the committed TDX rail station registry. It is shown only for a unique result within 200 metres; station names are not used to create a match [^tdx-rail-stations].
## Snapshot detail

The New Taipei's Banqiao group section is a build-time view of 3 returned TDX Station/City records, not a live occupancy display [^tdx-bike-stations]. The normalized rows retain 3 English station names, 3 Traditional Chinese station names, and 3 valid coordinate pairs; the source response also supplies station identifiers, addresses, service type, capacity and source-update timestamps [^tdx-bike-stations].

The published capacity values in this group range from 30 to 48 docks per row, with the total shown above calculated by summing the returned BikesCapacity fields [^tdx-bike-stations]. The observed ServiceType distribution is 2: 3, so a missing or null service value is not converted into an assumed operating category [^tdx-bike-stations].

The TDX records used for this page carried UpdateTime value(s) 2026-08-25T23:37:06+08:00 [^tdx-bike-stations]. Those timestamps date the source response, while the page frontmatter records the retrieval date; neither timestamp is presented as a prediction of future station availability [^tdx-bike-stations].

Representative rows in this group are station ID 500218063 (48 docks; YouBike2.0_浮洲合宜住宅(樂群路)), station ID 500218079 (34 docks; YouBike2.0_埔墘國小) and station ID 500218072 (30 docks; YouBike2.0_振義里公園) [^tdx-bike-stations]. They remain rows in a browse index because the source provides a compact identity, address, coordinate and capacity record; creating a separate article for every dock would repeat the same source fields without adding a sourced history or design record [^tdx-bike-stations].

The nearby-rail column is conservative: 0 rows have a confirmed coordinate join in this group [^tdx-rail-stations]. A match is retained only when one nearest candidate is within 200 metres and not tied at the one-metre ambiguity threshold, and the calculation compares coordinates rather than station names [^tdx-rail-stations]. Current available bikes and return docks are deliberately outside this static page because TDX publishes those values through a separate availability feed [^tdx-bike-stations].


| Station / 站名 | Capacity | Coordinates | Map | Confirmed nearby MRT/LRT |
|---|---:|---|---|---|
| YouBike2.0_Fuzhou Apartment(Lequn Rd.) / YouBike2.0_浮洲合宜住宅(樂群路) [^tdx-bike-stations] | 48 [^tdx-bike-stations] | 24.99702, 121.44642 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=24.99702&mlon=121.44642#map=19/24.99702/121.44642) | — |
| YouBike2.0_Puqian Elementary School / YouBike2.0_埔墘國小 [^tdx-bike-stations] | 34 [^tdx-bike-stations] | 25.01908, 121.47372 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=25.01908&mlon=121.47372#map=19/25.01908/121.47372) | — |
| YouBike2.0_Zhenyi Village Park / YouBike2.0_振義里公園 [^tdx-bike-stations] | 30 [^tdx-bike-stations] | 25.02389, 121.48397 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=25.02389&mlon=121.48397#map=19/25.02389/121.48397) | — |
