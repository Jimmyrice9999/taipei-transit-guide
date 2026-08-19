---
title: 0–99 routes
description: The 33 normalized TDX services classified as series-0-99, matching the official catalogue's 一般公車 (general bus) list — not a colour-feeder or trunk service class.
order: 11
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
  - id: ebus-general
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official catalogue lists all 33 labels under 一般公車, each under its own routeid parameter.
---

These pages cover the 33 normalized TDX records classified series-0-99.[^tdx-bus]
The full official catalogue places all 33 — 0東, 0南, and the plain numbers 1
through 88, plus the 38區 and 88區 shuttle variants and 39夜's night working —
under 一般公車 (general bus service), each as its own routeid entry rather
than a sub-listing of its parent number.[^ebus-general] None carries a
colour character (紅/藍/綠/棕/橘/黃) or a 幹線 designation, so none was a
candidate for the colour-feeder or trunk groups.[^ebus-general]

Route numbers this low are not nationally unique — several other Taiwanese
cities run their own unrelated same-numbered services — but that finding is
not published here pending a fetched citation for each; see
`docs/run-log.md` for what was found during this group's research.
