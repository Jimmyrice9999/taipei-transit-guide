---
title: "Taoyuan Green Line stations"
description: "Primary-research station records for the under-construction Taoyuan Green Line."
updated: 2026-08-24
facts:
  - label: "Records"
    value: "21 stations"
    source: dorts-green
specs:
  - label: "Coordinates"
    value: "TBC"
  - label: "Ridership"
    value: "TBC"
sources:
  - id: dorts-green
    title: "Taoyuan Metro Green Line project page"
    titleOriginal: "桃園市政府捷運工程局-捷運綠線"
    publisher: "Taoyuan City Department of Rapid Transit Systems (桃園市政府捷運工程局)"
    url: https://dorts.tycg.gov.tw/cp.aspx?Create=1&n=23132
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "Current Green Line station table, locations, structure, transfer notes, route length, station count, budget, approvals, package milestones and target opening."
  - id: tdx-tymc-green-check
    title: "Live TDX TYMC Green Line coverage check"
    titleOriginal: "交通部運輸資料流通服務平臺 TYMC 綠線查核"
    publisher: "Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)"
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/Line/TYMC?$format=JSON&$top=1000&$skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "Live probe retrieved on 2026-08-24: the TYMC Line endpoint returned one A record and no G record; the project registry therefore remains primary-research rather than TDX-backed."
---
## Station records

These records follow the Taoyuan engineering bureau’s current Green Line station table: G01–G15, G15a, G15b and G16–G19.[^dorts-green] The table publishes locations, elevated or underground form and selected future transfer notes; G02 remains provisional and G16–G19 remain unnamed in that source.[^dorts-green]

## Data boundary

The live TYMC TDX check returned Airport MRT operating records but no Green Line station or route dataset.[^tdx-tymc-green-check] Coordinates, entrances, accessibility, fares, opening dates and ridership are therefore TBC on these pages. A project station code is not silently upgraded into a live station record.[^dorts-green][^tdx-tymc-green-check]

## Source boundary

The station pages link back to the full project table so readers can distinguish what is planned from what is currently operated.[^dorts-green][^tdx-tymc-green-check]
