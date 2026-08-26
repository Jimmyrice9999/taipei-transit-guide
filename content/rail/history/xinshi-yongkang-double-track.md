---
title: The Taiwan Railways Xinshi–Yongkang Double-track Record
summary: The operator's historical PDF records a 2.9 km Xinshi–Yongkang double-track subject with 2009 and 2013 year fields and a Yan-shui River Bridge new-construction explanation; current TDX endpoint fields span 5.0 km.
order: 38
updated: 2026-08-26
aliases:
  - 新市─永康
  - 新市—永康
  - Xinshi–Yongkang
  - Xinshi–Yongkang double track
facts:
  - label: Operator row 103 distance
    value: 2.9
    unit: km
    source: tra-construction-history
  - label: Construction-year field
    value: 2009
    source: tra-construction-history
  - label: Operation-start year field
    value: 2013
    source: tra-construction-history
  - label: Operator-listed constructor
    value: Taiwan Railways Administration
    source: tra-construction-history
  - label: Recorded construction explanation
    value: Yan-shui River Bridge new construction
    source: tra-construction-history
  - label: Current operator Xinshi station
    value: Xinshi (4190)
    source: tra-station-xinshi
  - label: Current operator Yongkang station
    value: Yongkang (4200)
    source: tra-station-yongkang
specs:
  - label: Current TDX line ID
    value: WL
    source: tdx-tra-line
  - label: Xinshi TDX one-based position
    value: 86
    unit: position
    source: tdx-tra-line
  - label: Yongkang TDX one-based position
    value: 87
    unit: position
    source: tdx-tra-line
  - label: Xinshi TDX supplied travelled distance
    value: 341.8
    unit: km
    source: tdx-tra-line
  - label: Yongkang TDX supplied travelled distance
    value: 346.8
    unit: km
    source: tdx-tra-line
  - label: Current TDX endpoint-field difference
    value: 5.0
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
    note: Full ten-page operator PDF. Row 103 records Xinshi–Yongkang at 2.9 km with TRA as constructor; its aligned chronology gives 2009 and 2013 and records the new construction of the Yan-shui River Bridge.
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML history table. No matching Xinshi–Yongkang row or row 103 bridge explanation was found in the table checked for this subject.
  - id: tra-station-xinshi
    title: Xinshi Station information
    titleOriginal: 新市車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/4190
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies current station 4190 as Xinshi (新市).
  - id: tra-station-yongkang
    title: Yongkang Station information
    titleOriginal: 永康車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/4200
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies current station 4200 as Yongkang (永康).
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains current station records 4190 新市 and 4200 永康 with their names, addresses, administrative areas, classes, coordinates and update time.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Xinshi at WL source sequence 85 with 341.8 km and Yongkang at sequence 86 with 346.8 km; the guide presents one-based positions 86 and 87 and calculates a 5.0 km endpoint-field difference.
---

## A recorded double-track project, not a current route boundary

Taiwan Railways' complete construction-history PDF records row 103 as 新市─永康,
Xinshi–Yongkang, at 2.9 km.[^tra-construction-history] The same row names
臺灣鐵路管理局, the Taiwan Railways Administration, as constructor.[^tra-construction-history]
The aligned chronology gives 2009 in the construction-year field and 2013 in the
operation-start year field.[^tra-construction-history]

The row's explanation records <span lang="zh-Hant">鹽水溪橋新建</span>, which the
operator's English column renders as “Yan-shui River Bridge new construction”.[^tra-construction-history]
That is the work description recorded in the row; the checked PDF does not expand
it into a complete bridge contract, project boundary or list of every work item.[^tra-construction-history]

The current operator's full HTML history table does not contain a matching
Xinshi–Yongkang row.[^tra-history-page] That omission is a coverage difference
between the current HTML presentation and the complete construction-history PDF,
not evidence that the PDF row did not exist.[^tra-history-page][^tra-construction-history]

## Current station identities and the TDX measurement layer

The current operator station pages identify Xinshi as station 4190 and Yongkang
as station 4200.[^tra-station-xinshi][^tra-station-yongkang] These are current
passenger-station records and do not by themselves define the historical project
boundary or prove that the 2.9 km table value uses the same endpoints.[^tra-station-xinshi][^tra-station-yongkang][^tra-construction-history]

The committed TDX station pull contains current records for both station IDs,
including their current names and locations.[^tdx-tra-station] Those records
identify current station entries; they do not replace the operator's historical
project record.[^tdx-tra-station][^tra-construction-history]

In the committed TDX Western Main Line station-of-line data, Xinshi is source
sequence 85 with a supplied travelled distance of 341.8 km and Yongkang is source
sequence 86 with 346.8 km.[^tdx-tra-line] The guide presents them as one-based
positions 86 and 87 and calculates a 5.0 km difference by subtracting the supplied
endpoint fields.[^tdx-tra-line] The current ordered record has no station member
between these two endpoints, but the TDX interval is still kept beside, rather
than used to overwrite, the operator's historical 2.9 km construction record.[^tdx-tra-line][^tra-construction-history]

## Records still missing

The checked primary sources do not provide a surveyed 2.9 km engineering
boundary, the exact construction or opening days, a complete bridge-project
scope, contract package, completion certificate or before-and-after track
inventory for this row.[^tra-construction-history][^tra-history-page]
The PDF names the Yan-shui River Bridge new construction but does not specify
which structures, approaches or track works beyond that row explanation.[^tra-construction-history]

The checked sources also do not explain whether the difference between the
historical 2.9 km and current TDX endpoint fields of 5.0 km comes from station
reference points, route definition or another measurement boundary.[^tdx-tra-line][^tra-construction-history]
Those fields remain TBC rather than being averaged or treated as one measurement.[^tdx-tra-line][^tra-construction-history]

The stable result is narrower: the operator records a 2.9 km Xinshi–Yongkang
double-track subject with 2009/2013 year fields and a Yan-shui River Bridge
new-construction explanation, while current station and TDX records supply a
separate 5.0 km WL endpoint interval.[^tra-construction-history][^tra-station-xinshi][^tra-station-yongkang][^tdx-tra-line]
