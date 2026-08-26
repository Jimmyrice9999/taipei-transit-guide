---
title: The Taiwan Railways Longtian–Shanhua Double-track Record
summary: The operator's historical PDF records a 3.8 km Longtian–Shanhua double-track subject with 2001 and 2013 year fields and a Zeng-Wun River Bridge new-construction explanation; current TDX fields span 6.8 km via Baling.
order: 37
updated: 2026-08-26
aliases:
  - 隆田─善化
  - 隆田—善化
  - Longtian–Shanhua
  - Longtian–Shanhua double track
facts:
  - label: Operator row 102 distance
    value: 3.8
    unit: km
    source: tra-construction-history
  - label: Construction-year field
    value: 2001
    source: tra-construction-history
  - label: Operation-start year field
    value: 2013
    source: tra-construction-history
  - label: Operator-listed constructor
    value: Taiwan Railways Administration
    source: tra-construction-history
  - label: Recorded construction explanation
    value: Zeng-Wun River Bridge new construction
    source: tra-construction-history
  - label: Current operator Longtian station
    value: Longtian (4150)
    source: tra-station-longtian
  - label: Current operator Shanhua station
    value: Shanhua (4170)
    source: tra-station-shanhua
specs:
  - label: Current TDX line ID
    value: WL
    source: tdx-tra-line
  - label: Longtian TDX one-based position
    value: 82
    unit: position
    source: tdx-tra-line
  - label: Shanhua TDX one-based position
    value: 84
    unit: position
    source: tdx-tra-line
  - label: Longtian TDX supplied travelled distance
    value: 327.4
    unit: km
    source: tdx-tra-line
  - label: Baling TDX supplied travelled distance
    value: 329.6
    unit: km
    source: tdx-tra-line
  - label: Shanhua TDX supplied travelled distance
    value: 334.2
    unit: km
    source: tdx-tra-line
  - label: Current TDX endpoint-field difference
    value: 6.8
    unit: km
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
    note: Full ten-page operator PDF. Row 102 records Longtian–Shanhua at 3.8 km with TRA as constructor; its aligned chronology gives 2001 and 2013 and records the new construction of the Zeng-Wun River Bridge.
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML history table. No matching Longtian–Shanhua row or row 102 bridge explanation was found in the table checked for this subject.
  - id: tra-station-longtian
    title: Longtian Station information
    titleOriginal: 隆田車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/4150
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies current station 4150 as Longtian (隆田).
  - id: tra-station-shanhua
    title: Shanhua Station information
    titleOriginal: 善化車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/4170
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies current station 4170 as Shanhua (善化).
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains current station records 4150 隆田 and 4170 善化 with their names, addresses, administrative areas, classes, coordinates and update time.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Longtian at WL source sequence 81 with 327.4 km, Baling at sequence 82 with 329.6 km and Shanhua at sequence 83 with 334.2 km; the guide presents one-based positions 82 and 84 and calculates a 6.8 km endpoint-field difference.
---

## A recorded double-track project, not a current route boundary

Taiwan Railways' complete construction-history PDF records row 102 as 隆田─善化,
Longtian–Shanhua, at 3.8 km.[^tra-construction-history] The same row names
臺灣鐵路管理局, the Taiwan Railways Administration, as constructor.[^tra-construction-history]
The aligned chronology gives 2001 in the construction-year field and 2013 in the
operation-start year field.[^tra-construction-history]

The row's explanation records <span lang="zh-Hant">曾文溪橋新建</span>, which the
operator's English column renders as “Zeng-Wun River Bridge new construction”.[^tra-construction-history]
That is the work description recorded in the row; the checked PDF does not expand
it into a complete bridge contract, project boundary or list of every work item.[^tra-construction-history]

The current operator's full HTML history table does not contain a matching
Longtian–Shanhua row.[^tra-history-page] That omission is a coverage difference
between the current HTML presentation and the complete construction-history PDF,
not evidence that the PDF row did not exist.[^tra-history-page][^tra-construction-history]

## Current station identities and the TDX measurement layer

The current operator station pages identify Longtian as station 4150 and Shanhua
as station 4170.[^tra-station-longtian][^tra-station-shanhua] These are current
passenger-station records and do not by themselves define the historical project
boundary or prove that the 3.8 km table value uses the same endpoints.[^tra-station-longtian][^tra-station-shanhua][^tra-construction-history]

The committed TDX station pull contains current records for both station IDs,
including their current names and locations.[^tdx-tra-station] Those records
identify current station entries; they do not replace the operator's historical
project record.[^tdx-tra-station][^tra-construction-history]

In the committed TDX Western Main Line station-of-line data, Longtian is source
sequence 81 with a supplied travelled distance of 327.4 km, Baling is sequence 82
with 329.6 km, and Shanhua is sequence 83 with 334.2 km.[^tdx-tra-line] The guide
presents Longtian and Shanhua as one-based positions 82 and 84 and calculates a
6.8 km difference by subtracting the supplied endpoint fields.[^tdx-tra-line]
Because Baling is an intervening member in this current ordered record, the TDX
interval is kept beside, rather than used to overwrite, the operator's historical
3.8 km construction record.[^tdx-tra-line][^tra-construction-history]

## Records still missing

The checked primary sources do not provide a surveyed 3.8 km engineering
boundary, the exact construction or opening days, a complete bridge-project
scope, contract package, completion certificate or before-and-after track
inventory for this row.[^tra-construction-history][^tra-history-page]
The PDF names the Zeng-Wun River Bridge new construction but does not specify
which structures, approaches or track works beyond that row explanation.[^tra-construction-history]

The checked sources also do not explain whether the difference between the
historical 3.8 km and current TDX endpoint fields of 6.8 km comes from station
reference points, route definition, an intervening station limit or another
measurement boundary.[^tdx-tra-line][^tra-construction-history] Those fields
remain TBC rather than being averaged or treated as one measurement.[^tdx-tra-line][^tra-construction-history]

The stable result is narrower: the operator records a 3.8 km Longtian–Shanhua
double-track subject with 2001/2013 year fields and a Zeng-Wun River Bridge
new-construction explanation, while current station and TDX records supply a
separate 6.8 km WL endpoint interval through Baling.[^tra-construction-history][^tra-station-longtian][^tra-station-shanhua][^tdx-tra-line]
