---
title: "Unclassified route identities"
description: "Route identities whose authoritative catalogue label does not yet map to an existing canonical service group."
order: 18
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
  - id: ebus-unclassified
    title: "Taipei/New Taipei bus route catalogue"
    titleOriginal: "大臺北公車"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/ebus?ct=tpc
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official catalogue was fetched and read; it lists this route under official catalogue service labels and its route-id link where a separate entry exists."
---

The full official catalogue labels these 3 identities as 雙園巴士、景美-榮總(快)、新莊-臺北車站. Those labels are retained as evidence, but they are different service classes rather than one shared route group; the identities remain unclassified until the site has a durable canonical home for each class.[^ebus-unclassified][^tdx-bus]
