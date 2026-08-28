---
title: "Taoyuan Metro lines"
description: "The Airport MRT operating line and the Green Line construction registry."
updated: 2026-08-28
facts:
  - label: "Records"
    value: "1 operating line (Airport MRT), 1 project line (Green Line)"
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
## Lines in this system

The Taoyuan Metro system page has one current TDX operating line, the Airport MRT, and one project registry for the under-construction Green Line. The Green Line is kept in the TYMC namespace because its code and station table are published by Taoyuan’s engineering bureau, while a live TDX TYMC check returned only the Airport MRT line record.[^dorts-green][^tdx-tymc-green-check]

## Project line boundary

The Green Line project page records 21 stations, 27.8 kilometres, 10 underground stations and 11 elevated stations, with branches toward Airport MRT A11 and A16.[^dorts-green] Its approvals and package milestones are described on the line page and remain distinct from the Airport MRT’s operating data.[^dorts-green]

## Source boundary

Read the line page for the construction sequence, target opening and TBC fields; the station registry is a project record, not a timetable.[^dorts-green][^tdx-tymc-green-check]
