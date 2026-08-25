---
title: New Taipei — Xinzhuang YouBike stations
summary: Static YouBike station rows in New Taipei's Xinzhuang group, with coordinates, capacity and confirmed nearby rail joins.
updated: 2026-08-25
aliases:
  - "YouBike2.0_Changlong Elementary School"
  - "YouBike2.0_Litai Village(Zhonghuan Rd. Sec. 2)"
  - "YouBike2.0_MRT New Taipei Industrial Park Sta."
  - "YouBike2.0_New Taipei City Xinzhuang Civil Sports Center (Hexing St.)"
  - "YouBike2.0_Yijibang"
  - "YouBike2.0_伊吉邦社區"
  - "YouBike2.0_捷運新北產業園區站"
  - "YouBike2.0_新莊國民運動中心(和興街)"
  - "YouBike2.0_昌隆國小"
  - "YouBike2.0_立泰里(中環路二段)"
facts:
  - label: Municipality
    value: New Taipei
    source: tdx-bike-stations
  - label: District group
    value: Xinzhuang
    source: tdx-bike-stations
  - label: Static station rows
    value: 5
    source: tdx-bike-stations
  - label: Published dock capacity total
    value: 193
    source: tdx-bike-stations
  - label: Confirmed coordinate joins
    value: 1
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

This page lists 5 static TDX station rows in New Taipei's Xinzhuang group, with a published capacity total of 193 docks. TDX's Station/City feed supplies identity, bilingual names, addresses, coordinates and capacity; that feed does not carry current occupancy [^tdx-bike-stations].

The rail column is a nearest-coordinate join against the committed TDX rail station registry. It is shown only for a unique result within 200 metres; station names are not used to create a match [^tdx-rail-stations].
## Snapshot detail

The New Taipei's Xinzhuang group section is a build-time view of 5 returned TDX Station/City records, not a live occupancy display [^tdx-bike-stations]. The normalized rows retain 5 English station names, 5 Traditional Chinese station names, and 5 valid coordinate pairs; the source response also supplies station identifiers, addresses, service type, capacity and source-update timestamps [^tdx-bike-stations].

The published capacity values in this group range from 12 to 70 docks per row, with the total shown above calculated by summing the returned BikesCapacity fields [^tdx-bike-stations]. The observed ServiceType distribution is 2: 5, so a missing or null service value is not converted into an assumed operating category [^tdx-bike-stations].

The TDX records used for this page carried UpdateTime value(s) 2026-08-25T23:37:06+08:00 [^tdx-bike-stations]. Those timestamps date the source response, while the page frontmatter records the retrieval date; neither timestamp is presented as a prediction of future station availability [^tdx-bike-stations].

Representative rows in this group are station ID 500229038 (46 docks; YouBike2.0_昌隆國小), station ID 500229036 (25 docks; YouBike2.0_立泰里(中環路二段)) and station ID 500229015 (70 docks; YouBike2.0_捷運新北產業園區站) [^tdx-bike-stations]. They remain rows in a browse index because the source provides a compact identity, address, coordinate and capacity record; creating a separate article for every dock would repeat the same source fields without adding a sourced history or design record [^tdx-bike-stations].

The nearby-rail column is conservative: 1 rows have a confirmed coordinate join in this group [^tdx-rail-stations]. A match is retained only when one nearest candidate is within 200 metres and not tied at the one-metre ambiguity threshold, and the calculation compares coordinates rather than station names [^tdx-rail-stations]. Current available bikes and return docks are deliberately outside this static page because TDX publishes those values through a separate availability feed [^tdx-bike-stations].


| Station / 站名 | Capacity | Coordinates | Map | Confirmed nearby MRT/LRT |
|---|---:|---|---|---|
| YouBike2.0_Changlong Elementary School / YouBike2.0_昌隆國小 [^tdx-bike-stations] | 46 [^tdx-bike-stations] | 25.05213, 121.45489 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=25.05213&mlon=121.45489#map=19/25.05213/121.45489) | — |
| YouBike2.0_Litai Village(Zhonghuan Rd. Sec. 2) / YouBike2.0_立泰里(中環路二段) [^tdx-bike-stations] | 25 [^tdx-bike-stations] | 25.04568, 121.44213 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=25.04568&mlon=121.44213#map=19/25.04568/121.44213) | — |
| YouBike2.0_MRT New Taipei Industrial Park Sta. / YouBike2.0_捷運新北產業園區站 [^tdx-bike-stations] | 70 [^tdx-bike-stations] | 25.06203, 121.45918 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=25.06203&mlon=121.45918#map=19/25.06203/121.45918) | [New Taipei Industrial Park Station / 新北產業園區站](/rail/metro/stations/a3/) (36 m) [^tdx-rail-stations] |
| YouBike2.0_New Taipei City Xinzhuang Civil Sports Center (Hexing St.) / YouBike2.0_新莊國民運動中心(和興街) [^tdx-bike-stations] | 12 [^tdx-bike-stations] | 25.03891, 121.44759 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=25.03891&mlon=121.44759#map=19/25.03891/121.44759) | — |
| YouBike2.0_Yijibang / YouBike2.0_伊吉邦社區 [^tdx-bike-stations] | 40 [^tdx-bike-stations] | 25.03019, 121.41340 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=25.03019&mlon=121.4134#map=19/25.03019/121.4134) | — |
