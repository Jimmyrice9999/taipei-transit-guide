---
title: "Taoyuan Metro stations"
description: "22 current Airport MRT stations (TDX-backed) and 21 under-construction Green Line stations (primary-research project records) — two different data states, kept visibly distinct."
updated: 2026-08-28
facts:
  - label: "Airport MRT stations (current, operating)"
    value: "22 stations, A1-A22"
    source: tdx-tymc-green-check
  - label: "Green Line stations (project registry)"
    value: "21 stations"
    source: dorts-green
specs:
  - label: "Coordinates"
    value: "TBC for Green Line; TDX-backed for Airport MRT"
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
## Two different data states, in one folder

This folder holds two genuinely different kinds of record, and the difference matters more than the fact that both are called "stations." The 22 Airport MRT stations (A1–A22) are the current, operating line: TDX-backed for code, address, coordinates and sequence, with prose built from the Railway Bureau's own station-architecture report and TYMC's own per-station pages.[^tdx-tymc-green-check] The 21 Green Line stations (G01–G19, plus G15a and G15b) are project records for a line that has not opened: they follow the Taoyuan engineering bureau's current Green Line station table, which publishes locations, elevated-or-underground form and selected future transfer notes, but G02 remains provisional and G16–G19 remain unnamed even in that source.[^dorts-green]

## Data boundary

The live TYMC TDX check that established this split returned Airport MRT operating records but no Green Line station or route dataset.[^tdx-tymc-green-check] Coordinates, entrances, accessibility, fares, opening dates and ridership are therefore TBC on the Green Line pages specifically — not on the Airport MRT pages, which draw those fields from TDX and the operator directly. A project station code is not silently upgraded into a live station record.[^dorts-green][^tdx-tymc-green-check]

## Source boundary

Every page in this folder states which of the two kinds it is in its own opening paragraph, and the Green Line pages link back to the full project table so a reader can distinguish what is planned from what is currently operated.[^dorts-green][^tdx-tymc-green-check]
