---
title: "Taoyuan Green Line"
summary: "Taoyuan’s under-construction green route from Bade through Taoyuan and Luzhu to the Airport MRT branches at A11 and A16."
line: G
operator: TYMC
updated: 2026-08-24
order: 2
facts:
  - label: "Line code"
    value: "G"
    source: dorts-green
  - label: "Operator / builder"
    value: "Taoyuan City Department of Rapid Transit Systems"
    source: dorts-green
  - label: "Stations"
    value: "21"
    source: dorts-green
  - label: "Route length"
    value: "27.8"
    source: dorts-green
  - label: "Structure"
    value: "10 underground / 11 elevated"
    source: dorts-green
  - label: "Programme progress"
    value: "72.19%"
    source: dorts-rail-progress
  - label: "Main-line target"
    value: "2030"
    source: dorts-green
specs:
  - label: "Route length"
    value: "27.8"
    unit: km
    source: dorts-green
  - label: "Stations"
    value: "21"
    unit: stations
    source: dorts-green
  - label: "Underground stations"
    value: "10"
    unit: stations
    source: dorts-green
  - label: "Elevated stations"
    value: "11"
    unit: stations
    source: dorts-green
  - label: "Estimated cost"
    value: "982.64"
    unit: NT$ billion
    source: dorts-green
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
  - id: dorts-rail-progress
    title: "Taoyuan rail construction progress overview"
    titleOriginal: "軌道建設進度總覽"
    publisher: "Taoyuan City Department of Rapid Transit Systems (桃園市政府捷運工程局)"
    url: https://dorts.tycg.gov.tw/cp.aspx?n=23173
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "Current programme-level progress record: Green Line construction stage and 72.19% total progress."
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
## Green Line in the current project record

The Taoyuan engineering bureau describes the Green Line as a 27.8-kilometre, 21-station project with 10 underground and 11 elevated stations.[^dorts-green] Its route begins at G01 in Bade, crosses Taoyuan and Luzhu, and divides toward Airport MRT A11 and A16.[^dorts-green] The same page records an estimated cost of NT$982.64 billion, central government support of NT$397.44 billion and a 41.77% self-financing rate.[^dorts-green]

The station table names G01–G15, G15a, G15b and G16–G19. G02 remains provisional because the road in front of the station has not yet been named, while G16–G19 are still unnamed in the checked project record.[^dorts-green] This is why the content keeps those codes visible and does not manufacture English or Chinese station names for them.

## Route and interchanges

The bureau’s route description puts the eastern section through Bade’s Jieshou Road corridor, Taoyuan’s Jianguo and Yanping roads, the TRA Taoyuan station area, Zhongzheng Road and Luzhu’s Zhongzheng North Road. The branch toward G15a and G15b reaches the Airport MRT at A11; the western Aviation City branch continues through G16–G19 to Airport MRT A16.[^dorts-green] The project page identifies future connections with the underground TRA Taoyuan station, the Sanying Line extension at G04, the Nankan transfer hub and Airport MRT A11/A16.[^dorts-green]

## Construction approvals and progress

The feasibility study was approved by the Executive Yuan on 26 August 2011, the environmental assessment on 9 September 2014 and the comprehensive planning report on 20 April 2016.[^dorts-green] The bureau records the GM01 systems package award in 2018, GC01’s elevated civil package in 2018, GC02 and GC03 underground packages in 2019, and the GC05 lifts-and-escalators package in 2022.[^dorts-green] It separately records GD04A detailed design and GC04B’s later elevated civil package, with the package progress values dated to June 2026.[^dorts-green]

The current construction overview lists the Green Line as being in the construction stage at 72.19% overall progress.[^dorts-rail-progress] That programme figure is not silently substituted for any package figure: the line page records both the overview value and the bureau’s individual GM01, GC01, GC02, GC03, GC05 and GC04B values as different measurements with different dates.[^dorts-green][^dorts-rail-progress]

## Data boundary and future work

A live TDX probe on 24 August 2026 returned one TYMC Line record for the Airport MRT and no Green Line record; the corresponding station, route, shape, transfer and first/last-timetable families likewise exposed the operating Airport MRT data rather than a G project dataset.[^tdx-tymc-green-check] The site therefore uses the DORTS project table as the Green Line station registry and leaves coordinates, geometry, ridership, fleet allocation, depot assignment, signalling, power, headways, fares, accessibility and opening dates TBC.

The engineering bureau’s current Green Line page estimates main-line opening in 2030.[^dorts-green] That is a project target, not an operating timetable or a guarantee that every station will enter service on the same day. The approved planning-report record remains linked as the deeper source family for construction, finance and design questions that the concise project page does not resolve.[^dorts-green-report]

## Source boundary

The primary record is intentionally layered: DORTS establishes the planned alignment, station table, approvals and progress; the construction overview supplies the programme-level percentage; the planning-report record points to the approved volumes; and TDX establishes the current absence of a Green Line operating dataset.[^dorts-green][^dorts-rail-progress][^dorts-green-report][^tdx-tymc-green-check]
