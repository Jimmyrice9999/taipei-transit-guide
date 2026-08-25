---
title: New Taipei — Zhonghe YouBike stations
summary: Static YouBike station rows in New Taipei's Zhonghe group, with coordinates, capacity and confirmed nearby rail joins.
updated: 2026-08-25
aliases:
  - "YouBike2.0_Anle & Yian Rd. Intersection"
  - "YouBike2.0_Feito Community(Xingnan Rd.)"
  - "YouBike2.0_Tekuang & Kuokuang Intersection"
  - "YouBike2.0_Uanchi Big Town Commun"
  - "YouBike2.0_Zhonghe District Office"
  - "YouBike2.0_中和區公所"
  - "YouBike2.0_元氣大鎮社區"
  - "YouBike2.0_安樂宜安路口"
  - "YouBike2.0_德光國光街口"
  - "YouBike2.0_飛駝社區(興南路)"
facts:
  - label: Municipality
    value: New Taipei
    source: tdx-bike-stations
  - label: District group
    value: Zhonghe
    source: tdx-bike-stations
  - label: Static station rows
    value: 5
    source: tdx-bike-stations
  - label: Published dock capacity total
    value: 175
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

This page lists 5 static TDX station rows in New Taipei's Zhonghe group, with a published capacity total of 175 docks. TDX's Station/City feed supplies identity, bilingual names, addresses, coordinates and capacity; that feed does not carry current occupancy [^tdx-bike-stations].

The rail column is a nearest-coordinate join against the committed TDX rail station registry. It is shown only for a unique result within 200 metres; station names are not used to create a match [^tdx-rail-stations].
## Snapshot detail

The New Taipei's Zhonghe group section is a build-time view of 5 returned TDX Station/City records, not a live occupancy display [^tdx-bike-stations]. The normalized rows retain 5 English station names, 5 Traditional Chinese station names, and 5 valid coordinate pairs; the source response also supplies station identifiers, addresses, service type, capacity and source-update timestamps [^tdx-bike-stations].

The published capacity values in this group range from 29 to 40 docks per row, with the total shown above calculated by summing the returned BikesCapacity fields [^tdx-bike-stations]. The observed ServiceType distribution is 2: 5, so a missing or null service value is not converted into an assumed operating category [^tdx-bike-stations].

The TDX records used for this page carried UpdateTime value(s) 2026-08-25T23:37:06+08:00 [^tdx-bike-stations]. Those timestamps date the source response, while the page frontmatter records the retrieval date; neither timestamp is presented as a prediction of future station availability [^tdx-bike-stations].

Representative rows in this group are station ID 500207034 (35 docks; YouBike2.0_安樂宜安路口), station ID 500207033 (40 docks; YouBike2.0_飛駝社區(興南路)) and station ID 500207047 (39 docks; YouBike2.0_德光國光街口) [^tdx-bike-stations]. They remain rows in a browse index because the source provides a compact identity, address, coordinate and capacity record; creating a separate article for every dock would repeat the same source fields without adding a sourced history or design record [^tdx-bike-stations].

The nearby-rail column is conservative: 0 rows have a confirmed coordinate join in this group [^tdx-rail-stations]. A match is retained only when one nearest candidate is within 200 metres and not tied at the one-metre ambiguity threshold, and the calculation compares coordinates rather than station names [^tdx-rail-stations]. Current available bikes and return docks are deliberately outside this static page because TDX publishes those values through a separate availability feed [^tdx-bike-stations].


| Station / 站名 | Capacity | Coordinates | Map | Confirmed nearby MRT/LRT |
|---|---:|---|---|---|
| YouBike2.0_Anle & Yian Rd. Intersection / YouBike2.0_安樂宜安路口 [^tdx-bike-stations] | 35 [^tdx-bike-stations] | 24.99527, 121.51351 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=24.99527&mlon=121.51351#map=19/24.99527/121.51351) | — |
| YouBike2.0_Feito Community(Xingnan Rd.) / YouBike2.0_飛駝社區(興南路) [^tdx-bike-stations] | 40 [^tdx-bike-stations] | 24.98347, 121.50483 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=24.98347&mlon=121.50483#map=19/24.98347/121.50483) | — |
| YouBike2.0_Tekuang & Kuokuang Intersection / YouBike2.0_德光國光街口 [^tdx-bike-stations] | 39 [^tdx-bike-stations] | 25.00314, 121.46809 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=25.00314&mlon=121.46809#map=19/25.00314/121.46809) | — |
| YouBike2.0_Uanchi Big Town Commun / YouBike2.0_元氣大鎮社區 [^tdx-bike-stations] | 29 [^tdx-bike-stations] | 25.00572, 121.47900 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=25.00572&mlon=121.479#map=19/25.00572/121.479) | — |
| YouBike2.0_Zhonghe District Office / YouBike2.0_中和區公所 [^tdx-bike-stations] | 32 [^tdx-bike-stations] | 24.99856, 121.50053 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=24.99856&mlon=121.50053#map=19/24.99856/121.50053) | — |
