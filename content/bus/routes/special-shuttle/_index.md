---
title: "Special shuttle routes"
description: "Named commuter and destination-specific services, including Neihu and Nangang technology-park routes, commuter services and Huai-en shuttles."
order: 13
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
  - id: ebus-special
    title: "Commuter and destination-service catalogue"
    titleOriginal: "大臺北公車"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/ebus?ct=tpc
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official catalogue was fetched and read; it lists this route under 通勤公車、內科專車、南軟專車與其他 and its route-id link where a separate entry exists."
---

The full official catalogue separates these services into 通勤公車, 內科專車, 南軟專車 and 其他 headings; the TDX snapshot contains 42 normalized identities in this group.[^ebus-special][^tdx-bus]

These are employer- or destination-specific services in the catalogue’s own naming, but eligibility, hours and booking conditions are route-specific. Each route page cites its current schedule where the catalogue has a separate entry; a missing entry stays TBC.[^ebus-special]
