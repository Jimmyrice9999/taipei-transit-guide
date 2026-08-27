---
title: "Taoyuan Metro"
description: "Taoyuan Metro’s operating Airport MRT and the separate Green Line project registry published by the city engineering bureau."
kind: system
updated: 2026-08-24
order: 3
facts:
  - label: "Operating TDX line"
    value: "A — Airport MRT"
    source: tdx-tymc-green-check
  - label: "Project line"
    value: "G — Green Line"
    source: dorts-green
  - label: "Green Line stations"
    value: "21"
    source: dorts-green
specs:
  - label: "Green Line route length"
    value: "27.8"
    unit: km
    source: dorts-green
  - label: "Green Line ridership"
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
  - id: dorts-green-report
    title: "Green Line comprehensive planning report record"
    titleOriginal: "桃園捷運綠線綜合規劃報告"
    publisher: "Taoyuan City Department of Rapid Transit Systems (桃園市政府捷運工程局)"
    url: https://dorts.tycg.gov.tw/News_Content.aspx?n=23199&s=1582920
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "Official record and links to the approved comprehensive planning report volumes."
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
## Two different data states

Taoyuan’s current TDX operating record is the Airport MRT, while the Green Line is a construction project represented here by the Taoyuan engineering bureau’s project page. The live TYMC TDX check returned the Airport MRT line and no Green Line line record on 24 August 2026.[^tdx-tymc-green-check] This system index keeps those data states separate so a planned station is not presented as a station with passenger service.

## Green Line project

The Green Line project page publishes 21 planned stations, 27.8 kilometres, 10 underground stations and 11 elevated stations.[^dorts-green] The route starts at G01 in Bade, runs through Taoyuan and Luzhu, and branches toward Airport MRT A11 and A16.[^dorts-green] The bureau also publishes its feasibility, environmental-assessment and comprehensive-planning milestones, civil and systems packages, and a 2030 main-line target.[^dorts-green]

## Reading the system

The Airport MRT pages use TDX-backed station, route, geometry, timetable and ridership material. The Green Line pages use a dated primary-research registry because the project has no corresponding current TYMC operating dataset in the checked TDX families.[^dorts-green][^tdx-tymc-green-check] Coordinates, live service, ridership, entrances, accessibility and rolling stock for the Green Line remain TBC. The approved planning-report record is linked from the line page for readers who need the deeper civil and financial documentation.[^dorts-green-report]

## Source boundary

The system is an index of an operator line and a construction project, not a claim that they are equally mature datasets.[^tdx-tymc-green-check][^dorts-green][^dorts-green-report]

## Systems and rolling stock

The [signalling record](/rail/tymc/technology/signalling/) names the British firm at the centre of the Marubeni signalling dispute for the first time on this site, and declines to publish an automation grade that appears in Wikipedia infoboxes with no supporting citation. The [rolling-stock record](/rail/tymc/rolling-stock/fleet-roster/) covers both the express and commuter fleets, including a case where two primary sources agree on a seat count that a Wikipedia table gets wrong. The [accessibility record](/rail/tymc/facilities/accessibility/) and [ridership record](/rail/tymc/operations/ridership/) cover station facilities in detail and station-level passenger volumes, including another caught Wikipedia miscitation. The [fare history record](/rail/tymc/operations/fares/) covers a season-pass scheme the operator replaced outright in January 2025, with the base single fare itself still out of reach behind a tool this site's tooling cannot read. The [land development record](/rail/tymc/projects/joint-development/) covers Taoyuan's own metro land-development mechanism and its full legal basis, though a case-list page at a known address resisted three separate fetch attempts.
