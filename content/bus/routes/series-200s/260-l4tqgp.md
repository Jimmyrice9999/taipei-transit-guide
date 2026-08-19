---
title: "260Shuttle B / 260區預"
summary: "200-series route: 260Shuttle B (260區預)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "200-series numbered service (一般公車)"
    source: ebus-general
specs:
  - label: Route length
    value: TBC
    unit: km
  - label: Service span
    value: TBC
  - label: Headway by day type
    value: TBC
  - label: Fare / transfer
    value: TBC
sources:
  - id: tdx-bus
    title: "TDX bus data"
    titleOriginal: "交通部運輸資料流通服務平臺"
    publisher: "Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺"
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Supports the normalized route identity, municipality, operators, direction and variant records, stop sequences, shapes, source-update fields and the separately curated geometry-only MRT stop joins. The committed route layer does not carry route length, timetable or fare fields."
  - id: ebus-general
    title: "Taipei/New Taipei bus route catalogue"
    titleOriginal: "大臺北公車"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/ebus?ct=tpc
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official catalogue was fetched and read; it lists this route under 一般公車 and its route-id link where a separate entry exists."
---

## Classification and current service

The full official catalogue files 260區預 under 一般公車 (一般公車).[^ebus-general]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full catalogue has no separately listed schedule entry for this normalized variant. Its current service span, headway and fare remain TBC rather than being copied from a related route.[^ebus-general][^tdx-bus]

The confirmed stop sequence matches 260區's own corridor stop for
stop: from 陽明山總站, via 第一停車場(花鐘), past 中山樓/教師中心/陽明山國
小, through 嶺頭/岩山里/士林官邸(中山), along 捷運士林站/捷運劍潭站/臺北
市立美術館, ending at 國賓飯店/中山市場/行政院/臺北車站(忠孝).[^tdx-bus]
Three confirmed interchanges are recorded in the curated stop-ID join
set, identical to 260區's own list: Taipei Main Station, Jiantan and
Shilin.[^tdx-bus] The route runs a single subroute under one operator,
大都會客運, filed as a reservation-based (預約) working of the 花鐘
detour specifically.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for publishing this reservation-based working as a separately numbered route rather than a subroute of 260區 itself was found in this search, nor a stated reason for the reservation basis applying only to the 花鐘 detour and not the plain corridor.
