---
title: The Taiwan Railways Zhuzhong–Liujia Double-track Record
summary: The operator's historical PDF records a 3.1 km Railway Reconstruction Bureau Zhuzhong–Liujia double-track project with 2005 and 2011 year fields; current TDX keeps the two stations as the LJ line's 3.1 km ordered pair.
order: 35
updated: 2026-08-26
aliases:
  - 竹中─六家
  - 竹中—六家
  - Zhuzhong–Liujia
  - Zhuzhong–Liujia double track
facts:
  - label: Operator row 99 distance
    value: 3.1
    unit: km
    source: tra-construction-history
  - label: Construction-year field
    value: 2005
    source: tra-construction-history
  - label: Operation-start year field
    value: 2011
    source: tra-construction-history
  - label: Operator-listed constructor
    value: Railway Reconstruction Bureau
    source: tra-construction-history
  - label: Current Zhuzhong station
    value: Zhuzhong (1193)
    source: tra-station-zhuzhong
  - label: Current Liujia station
    value: Liujia (1194)
    source: tra-station-liujia
specs:
  - label: Historical construction explanation
    value: Extended to be double-tracked
    source: tra-construction-history
  - label: Current TDX line ID
    value: LJ
    source: tdx-tra-line
  - label: Current TDX ordered members
    value: 2
    unit: stations
    source: tdx-tra-line
  - label: Current TDX supplied interval
    value: 3.1
    unit: km
    source: tdx-tra-line
  - label: Zhuzhong current TDX line membership
    value: Liujia Line (LJ); Neiwan Line (NW)
    source: tdx-tra-line
sources:
  - id: tra-construction-history
    title: Chronological History of Railroad Construction
    titleOriginal: 路線修築沿革
    publisher: National Taiwan Railways Corporation / former Taiwan Railways Administration (國營臺灣鐵路股份有限公司／臺灣鐵路管理局)
    url: https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full ten-page operator PDF. Row 99 records Zhuzhong–Liujia at 3.1 km with Railway Reconstruction Bureau as constructor; its aligned chronology gives 2005 and 2011 and the explanation 添築雙線.
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML history table. No matching Zhuzhong–Liujia row was found in the table checked for this subject.
  - id: tra-station-zhuzhong
    title: Zhuzhong Station information
    titleOriginal: 竹中車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/1193
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies current station 1193 as Zhuzhong (竹中) and the page supplies current address and service fields.
  - id: tra-station-liujia
    title: Liujia Station information
    titleOriginal: 六家車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/1194
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies current station 1194 as Liujia (六家) and the page supplies current address and service fields.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Zhuzhong at LJ sequence 0 and Liujia at LJ sequence 1, with supplied travelled distances 0.0 and 3.1 km; it also places Zhuzhong in NW at sequence 3 and 6.5 km.
---

## One historical double-track record

Taiwan Railways' complete construction-history PDF records row 99 as
竹中─六家, Zhuzhong–Liujia, at 3.1 km.[^tra-construction-history] The same
row names 鐵路改建工程局, the Railway Reconstruction Bureau, as constructor.[^tra-construction-history]
The aligned chronology gives 2005 in the construction-year field and 2011 in
the operation-start year field.[^tra-construction-history] Its explanation is
添築雙線, which the document renders as “Extended to be double-tracked.”[^tra-construction-history]

Those are the operator's year fields and explanation, not a day-level contract
or commissioning record.[^tra-construction-history] The checked PDF does not
state the intermediate works, the precise endpoints used for the 3.1 km value,
or the number of tracks present before and after the project.[^tra-construction-history]
The record is therefore kept as a historical construction-table subject; it is
not rewritten as a complete current track inventory.[^tra-construction-history]

## Current endpoint records are a separate layer

The current operator station pages identify station 1193 as Zhuzhong (竹中) and
station 1194 as Liujia (六家).[^tra-station-zhuzhong][^tra-station-liujia] Those
pages establish the current endpoint identities named by the historical record;
they do not supply the historical project contract, completion certificate or
surveyed construction boundary.[^tra-station-zhuzhong][^tra-station-liujia]

The committed TDX StationOfLine snapshot contains two ordered members for line
ID LJ: Zhuzhong at source sequence 0 with supplied travelled distance 0.0 km,
and Liujia at source sequence 1 with 3.1 km.[^tdx-tra-line] The difference
between those current fields is numerically 3.1 km, the same number as the
historical row.[^tdx-tra-line][^tra-construction-history] That agreement does
not prove that TDX's travelled-distance field and the historical construction
table used the same survey points, accounting boundary or project definition,
so the page keeps both measurements labelled by source.[^tdx-tra-line][^tra-construction-history]

TDX also places Zhuzhong in the current Neiwan Line record at sequence 3 with
6.5 km, so the shared station is a live relationship between two line datasets,
not a claim that the historical double-track scope extends along the Neiwan
Line.[^tdx-tra-line] Current line membership and historical project scope are
not merged merely because one endpoint is shared.[^tdx-tra-line]

The current operator's full route-construction HTML table does not contain a
matching 竹中 or 六家 row in the table checked for this subject.[^tra-history-page]
That is a difference in source presentation and coverage, not evidence that the
PDF row did not exist.[^tra-history-page][^tra-construction-history]

## Records still missing

The checked primaries do not provide a surveyed 3.1 km boundary, intermediate
historical station register, construction contract, completion or commissioning
notice, before-and-after track inventory, electrification scope, signalling
scope or the exact relationship between the historical row and current TDX
travelled distance.[^tra-construction-history][^tdx-tra-line] Those fields remain
TBC rather than being inferred from the matching number.[^tdx-tra-line]

The stable result is narrower: the operator records a 3.1 km Zhuzhong–Liujia
double-track subject with 2005 and 2011 year fields and Railway Reconstruction
Bureau as constructor, while current operator pages identify stations 1193 and
1194 and TDX presents them as the two-member LJ ordered pair.[^tra-construction-history][^tra-station-zhuzhong][^tra-station-liujia][^tdx-tra-line]
