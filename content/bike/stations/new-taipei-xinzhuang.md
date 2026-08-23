---
title: New Taipei — Xinzhuang YouBike stations
summary: Static YouBike station rows in New Taipei's Xinzhuang group, with coordinates, capacity and confirmed nearby rail joins.
updated: 2026-08-23
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

This page lists 5 static TDX station rows in New Taipei's Xinzhuang group, with a published capacity total of 193 docks. TDX's Station/City feed supplies identity, bilingual names, addresses, coordinates and capacity; that feed does not carry current occupancy [^tdx-bike-stations].

The rail column is a nearest-coordinate join against the committed TDX rail station registry. It is shown only for a unique result within 200 metres; station names are not used to create a match [^tdx-rail-stations].

| Station / 站名 | Capacity | Coordinates | Map | Confirmed nearby MRT/LRT |
|---|---:|---|---|---|
| YouBike2.0_Changlong Elementary School / YouBike2.0_昌隆國小 [^tdx-bike-stations] | 46 [^tdx-bike-stations] | 25.05213, 121.45489 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=25.05213&mlon=121.45489#map=19/25.05213/121.45489) | — |
| YouBike2.0_Litai Village(Zhonghuan Rd. Sec. 2) / YouBike2.0_立泰里(中環路二段) [^tdx-bike-stations] | 25 [^tdx-bike-stations] | 25.04568, 121.44213 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=25.04568&mlon=121.44213#map=19/25.04568/121.44213) | — |
| YouBike2.0_MRT New Taipei Industrial Park Sta. / YouBike2.0_捷運新北產業園區站 [^tdx-bike-stations] | 70 [^tdx-bike-stations] | 25.06203, 121.45918 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=25.06203&mlon=121.45918#map=19/25.06203/121.45918) | [New Taipei Industrial Park Station / 新北產業園區站](/rail/metro/stations/a3/) (36 m) [^tdx-rail-stations] |
| YouBike2.0_New Taipei City Xinzhuang Civil Sports Center (Hexing St.) / YouBike2.0_新莊國民運動中心(和興街) [^tdx-bike-stations] | 12 [^tdx-bike-stations] | 25.03891, 121.44759 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=25.03891&mlon=121.44759#map=19/25.03891/121.44759) | — |
| YouBike2.0_Yijibang / YouBike2.0_伊吉邦社區 [^tdx-bike-stations] | 40 [^tdx-bike-stations] | 25.03019, 121.41340 [^tdx-bike-stations] | [Map](https://www.openstreetmap.org/?mlat=25.03019&mlon=121.4134#map=19/25.03019/121.4134) | — |
## Reading this city snapshot

The committed TDX extract groups 5 static station rows under the Xinzhuang district label and reports a combined published capacity of 193 docks.[^tdx-bike-stations] The station table preserves the row names, bilingual labels, addresses, coordinates and capacities returned by the city feed; it is a point-in-time data record rather than a live occupancy board.[^tdx-bike-stations] A capacity total is the sum of the published dock fields, not a count of bicycles currently available.

The page's rail column is a separate nearest-coordinate join. This snapshot records 1 confirmed coordinate join for the group.[^tdx-rail-stations] The join accepts a unique rail result within 200 metres and does not compare station names, so a zero is an evidence result rather than a claim that no rail service is nearby.[^tdx-rail-stations] A positive join likewise does not assert a fare integration, a same-building entrance or a signed cycle route.

The static feed supports siting and capacity questions, including map links generated from the published coordinates.[^tdx-bike-stations] It does not publish the live number of bikes or empty docks used by a rider deciding whether to leave immediately; live availability remains TBC until a current availability feed is fetched and archived.[^tdx-bike-stations] The page therefore keeps the durable station identity separate from conditions that can change during a trip.
