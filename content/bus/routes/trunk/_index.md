---
title: Trunk routes
description: The 19 named 幹線 (trunk) metro-bus routes, matching the official catalogue's 幹線專車 list exactly. Not MRT feeders — trunk is its own service class.
order: 6
sources:
  - id: tdx-bus
    title: TDX bus data
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Supplies the normalized route group, identities, stop sequences, shapes, operators and curated rail-stop joins.
  - id: ebus-trunk
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official catalogue heading 幹線專車 lists exactly 19 labels, matching the TDX trunk group.
---

These pages cover the 19 records classified trunk.[^tdx-bus] None contains a
colour character (紅/藍/綠/棕/橘/黃) anywhere in its name, so this group had no
false-prefix candidate to check. Trunk is its own official service class
(幹線), not an MRT-feeder colour class, per docs/bus-architecture.md's
classification precedence — no route here is presented as feeding a specific
MRT line unless a confirmed stop-ID join says otherwise.[^ebus-trunk]
