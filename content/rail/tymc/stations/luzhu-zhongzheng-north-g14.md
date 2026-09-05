---
title: "Luzhu Zhongzheng North — Taoyuan Green Line"
summary: "Luzhu Zhongzheng North (G14) on Taoyuan Metro's under-construction Green Line; location, structure and transfer evidence are kept separate from TDX's Airport MRT operating records."
line: G
operator: TYMC
updated: 2026-08-24
facts:
  - label: "Station code"
    value: "G14"
    source: dorts-green
  - label: "Published name"
    value: "蘆竹中正北站"
    source: dorts-green
  - label: "Structure"
    value: "elevated"
    source: dorts-green
  - label: "Location"
    value: "Luzhu District, near Zhongzheng North Road and Luzhu Street"
    source: dorts-green
  - label: "Transfer note"
    value: "TBC"
specs:
  - label: "Sequence in project table"
    value: "14"
    unit: record
    source: dorts-green
  - label: "Coordinates"
    value: "TBC"
  - label: "Ridership"
    value: "TBC"
  - label: "Opening date"
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
  - id: dorts-gc01-design
    title: "Green Line GC01 station design briefs"
    titleOriginal: "桃園捷運綠線車站設計-GC01標"
    publisher: "Taoyuan City Department of Rapid Transit Systems (桃園市政府捷運工程局)"
    url: https://dorts.tycg.gov.tw/cp.aspx?n=23242
    accessed: 2026-09-05
    kind: primary
    lang: zh-Hant
    note: "The GC01 design brief gives G14's pond-and-water concept and site description."
  - id: dorts-green-naming
    title: "Green Line main-line station naming completed"
    titleOriginal: "桃園捷運綠線主線車站命名完成，開啟城市新篇章"
    publisher: "Taoyuan City Department of Rapid Transit Systems (桃園市政府捷運工程局)"
    url: https://dorts.tycg.gov.tw/News_Content.aspx?n=23116&s=1581651&sms=20161
    accessed: 2026-09-05
    kind: primary
    lang: zh-Hant
    note: "The naming announcement records G14 as the renumbered successor to G13a."
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
## Current identity

Luzhu Zhongzheng North is the project-page English rendering of 蘆竹中正北站 (G14).[^dorts-green] The project table places it at Luzhu District, near Zhongzheng North Road and Luzhu Street and classifies the station as elevated; those are project-design fields, not observations from a currently operating railway.[^dorts-green]

## Place in the Green Line project

G14 sits in the Taoyuan Green Line station sequence published by the Taoyuan engineering bureau. The source table lists the code, a location description and a transfer note where one has been defined; it does not turn an unnamed station code into a final public name.[^dorts-green] No transfer is listed in the checked row.[^dorts-green]

## Evidence boundary

A live TDX check of the TYMC Line, Station, StationOfRoute, Route, Shape, transfer and timetable families returned Airport MRT records, including one A line record, but no Green Line record on 24 August 2026.[^tdx-tymc-green-check] This page therefore keeps the Green Line as a primary-research project registry. Coordinates, entrances, accessibility facilities, platform gaps, fares, headways, ridership and opening dates remain TBC rather than being inferred from a map, a neighbouring Airport MRT station or a planned interchange.[^dorts-green][^tdx-tymc-green-check]

The route is still under construction. A construction-project station should not be described as though it already has passenger service, a live timetable or observed daily use. The engineering bureau’s current page gives the line-wide target as 2030, but it does not provide a station-specific opening date for G14; that field remains TBC here.[^dorts-green]

## Design and numbering history

The GC01 design brief uses water imagery for G14: ponds, a stream branch and ripples are the stated references, and the planned site is south of the Zhongzheng North Road and Luzhu Street intersection.[^dorts-gc01-design] The current name is also a renumbering record, not an original code: DORTS's naming announcement identifies G14 as the former G13a and says the numbering was adjusted as part of planning for a future circular network.[^dorts-green-naming] Neither source establishes a completed station interior or an opening date.

## What the source does and does not establish

The checked material establishes the station’s project identity, project location and planned civil form. It does not establish a final station entrance list, lift count, tactile route, toilet, nursing room, platform-screen-door arrangement, train service pattern or passenger count. Those gaps are recorded as gaps in the research file rather than filled from the Airport MRT’s current station pages.[^dorts-green][^tdx-tymc-green-check]

## Source boundary

The Green Line page is a dated project record. Read the original-language station table and the live TDX result together: the former establishes the planned station, while the latter establishes only the current data boundary.[^dorts-green][^tdx-tymc-green-check]
