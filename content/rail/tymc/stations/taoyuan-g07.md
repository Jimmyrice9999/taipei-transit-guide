---
title: "Taoyuan — Taoyuan Green Line"
summary: "Taoyuan (G07) on Taoyuan Metro's under-construction Green Line; location, structure and transfer evidence are kept separate from TDX's Airport MRT operating records."
line: G
operator: TYMC
updated: 2026-08-29
facts:
  - label: "Station code"
    value: "G07"
    source: dorts-green
  - label: "Published name"
    value: "桃園車站"
    source: dorts-green
  - label: "Structure"
    value: "underground"
    source: dorts-green
  - label: "Location"
    value: "Taoyuan District, at the TRA Taoyuan station area on Yanping Road"
    source: dorts-green
  - label: "Transfer note"
    value: "Future transfer to the underground TRA Taoyuan station"
    source: dorts-green
specs:
  - label: "Sequence in project table"
    value: "7"
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
  - id: tdx-tymc-green-check
    title: "Live TDX TYMC Green Line coverage check"
    titleOriginal: "交通部運輸資料流通服務平臺 TYMC 綠線查核"
    publisher: "Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)"
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/Line/TYMC?$format=JSON&$top=1000&$skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "Live probe retrieved on 2026-08-24: the TYMC Line endpoint returned one A record and no G record; the project registry therefore remains primary-research rather than TDX-backed."
  - id: dorts-g07-progress
    title: "G07 station construction news"
    titleOriginal: "捷運綠線工程動態"
    publisher: "Taoyuan City Department of Rapid Transit Systems (桃園市政府捷運工程局)"
    url: https://dorts.tycg.gov.tw/News_Content.aspx?n=23116&s=1847139
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: "Dated 27 August 2026. States G07 is currently Taiwan's deepest MRT station excavation at 40 metres, built by top-down method, with a roughly 80,000 cubic metre concrete pour timed ahead of typhoon season."
  - id: ltn-g07-archaeology
    title: "Taoyuan Green Line railway remains backfilled; heritage groups criticise the timing"
    titleOriginal: 桃捷綠線鐵道遺構填平 文團批：破壞前蓋裹屍布
    publisher: Liberty Times (自由時報)
    url: https://news.ltn.com.tw/news/life/breakingnews/4016910
    accessed: 2026-08-29
    kind: secondary
    lang: zh-Hant
    note: "Dated 6 August 2022. Describes the archaeological finds (訊塘埔文化 remains, a Qing-era railway bed, Japanese-era brick and rail-bed remains), the roughly two-year construction halt, and the heritage committee's 29 June 2022 preservation plan. This research could not independently fetch the underlying archaeological report to verify the article's specific dimensions and disposition details."
  - id: dorts-g07-archaeology-index
    title: "Archaeological site index — G07 station"
    titleOriginal: 考古遺址-G07車站
    publisher: "Taoyuan City Department of Rapid Transit Systems (桃園市政府捷運工程局)"
    url: https://dorts.tycg.gov.tw/News.aspx?n=23235&s=20189
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: "Confirms a formal archaeological report exists, dated 26 August 2024 (大樹林疑似遺址（桃園火車站舊站）...清理發掘計畫成果報告), corroborating that the site and report described in the Liberty Times article are real; the report itself was not fetched in this research."
---
## Current identity

Taoyuan is the project-page English rendering of 桃園車站 (G07).[^dorts-green] The project table places it at Taoyuan District, at the TRA Taoyuan station area on Yanping Road and classifies the station as underground; those are project-design fields, not observations from a currently operating railway.[^dorts-green]

## Place in the Green Line project

G07 sits in the Taoyuan Green Line station sequence published by the Taoyuan engineering bureau. The source table lists the code, a location description and a transfer note where one has been defined; it does not turn an unnamed station code into a final public name.[^dorts-green] The published transfer statement is: Future transfer to the underground TRA Taoyuan station.[^dorts-green]

## Taiwan's deepest MRT excavation, and a two-year archaeological halt

G07 is under construction as the deepest MRT station excavation in Taiwan,
reaching 40 metres, built with a top-down (逆打) method that excavates and
casts each floor slab in sequence from the surface downward rather than
completing excavation before building up.[^dorts-g07-progress] A single
concrete pour for the station structure used roughly 80,000 cubic metres of
concrete, more than 10,000 truck loads, timed to finish before typhoon
season.[^dorts-g07-progress]

Construction was halted for roughly two years, from August 2020 to August
2022, after archaeological finds at the site: remains attributed to the
訊塘埔文化 culture, a Qing-era railway bed attributed to Liu Ming-chuan's
original line — an 8-by-4-metre stretch of cobblestones laid in a pattern
resembling modern railway sleepers — and Japanese-era brick and rail-bed
remains from the old Taoyuan station.[^ltn-g07-archaeology] A heritage
review committee approved a preservation plan on 29 June 2022; the site was
recorded by 3D scanning and moulding before being backfilled, with
extracted material planned for display on two underground levels and a
plaza.[^ltn-g07-archaeology] The engineering bureau's own site index
confirms a formal archaeological report on the find exists, dated 26 August
2024, though this research did not fetch that underlying report and cannot
independently verify the Liberty Times account's specific dimensions and
disposition details beyond confirming the report and site are
real.[^dorts-g07-archaeology-index]

## Evidence boundary

A live TDX check of the TYMC Line, Station, StationOfRoute, Route, Shape, transfer and timetable families returned Airport MRT records, including one A line record, but no Green Line record on 24 August 2026.[^tdx-tymc-green-check] This page therefore keeps the Green Line as a primary-research project registry. Coordinates, entrances, accessibility facilities, platform gaps, fares, headways, ridership and opening dates remain TBC rather than being inferred from a map, a neighbouring Airport MRT station or a planned interchange.[^dorts-green][^tdx-tymc-green-check]

The route is still under construction. A construction-project station should not be described as though it already has passenger service, a live timetable or observed daily use. The engineering bureau’s current page gives the line-wide target as 2030, but it does not provide a station-specific opening date for G07; that field remains TBC here.[^dorts-green]

## What the source does and does not establish

The checked material establishes the station’s project identity, project location and planned civil form. It does not establish a final station entrance list, lift count, tactile route, toilet, nursing room, platform-screen-door arrangement, train service pattern or passenger count. Those gaps are recorded as gaps in the research file rather than filled from the Airport MRT’s current station pages.[^dorts-green][^tdx-tymc-green-check]

## Source boundary

The Green Line page is a dated project record. Read the original-language station table and the live TDX result together: the former establishes the planned station, while the latter establishes only the current data boundary.[^dorts-green][^tdx-tymc-green-check]
