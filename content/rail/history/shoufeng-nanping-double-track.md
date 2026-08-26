---
title: The Taiwan Railways Shoufeng–Nanping Double-track Record
summary: The operator's historical PDF records a 12.0 km Shoufeng–Nanping double-track subject with 2014 and 2015 year fields and an extension-to-double-track explanation; current TDX endpoint fields span 11.2 km.
order: 49
updated: 2026-08-27
aliases:
  - 壽豐–南平
  - 壽豐—南平
  - Shoufeng–Nanping
  - Shoufeng–Nanping double track
facts:
  - label: Operator row 114 distance
    value: 12.0
    unit: km
    source: tra-construction-history
  - label: Historical track form
    value: double track
    source: tra-construction-history
  - label: Construction-year field
    value: 2014
    source: tra-construction-history
  - label: Operation-start year field
    value: 2015
    source: tra-construction-history
  - label: Operator-listed constructor
    value: Railway Reconstruction Bureau, Eastern Region Engineering Office
    source: tra-construction-history
  - label: Recorded construction explanation
    value: Extended to be double-tracked
    source: tra-construction-history
  - label: Current operator Shoufeng station
    value: Shoufeng (6220)
    source: tra-station-shoufeng
  - label: Current operator Nanping station
    value: Nanping (6190)
    source: tra-station-nanping
specs:
  - label: Current TDX line ID
    value: EL
    source: tdx-tra-line
  - label: Shoufeng TDX one-based position
    value: 42
    unit: position
    source: tdx-tra-line
  - label: Nanping TDX one-based position
    value: 45
    unit: position
    source: tdx-tra-line
  - label: Shoufeng TDX supplied travelled distance
    value: 186.8
    unit: km
    source: tdx-tra-line
  - label: Nanping TDX supplied travelled distance
    value: 198.0
    unit: km
    source: tdx-tra-line
  - label: Current TDX endpoint-field difference
    value: 11.2
    unit: km
    source: tdx-tra-line
sources:
  - id: tra-construction-history
    title: Chronological History of Railroad Construction
    titleOriginal: 路線修築沿革
    publisher: National Taiwan Railways Corporation / former Taiwan Railways Administration (國營臺灣鐵路股份有限公司／臺灣鐵路管理局)
    url: https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full ten-page operator PDF. Row 114 records Shoufeng–Nanping as a 12.0 km double-track subject with Railway Reconstruction Bureau / Eastern Region Engineering Office as constructor; its aligned chronology gives 2014 and 2015 and records 添築雙線 (Extended to be double-tracked).
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML history table. No matching Shoufeng–Nanping row or row 114 double-tracking explanation was found in the table checked for this subject.
  - id: tra-station-shoufeng
    title: Shoufeng Station information
    titleOriginal: 壽豐車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6220
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies station 6220 as Shoufeng (壽豐).
  - id: tra-station-nanping
    title: Nanping Station information
    titleOriginal: 南平車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6190
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies station 6190 as Nanping (南平).
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains current station 6220 Shoufeng (壽豐) and station 6190 Nanping (南平), with their current station records.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Shoufeng on EL at source sequence 41 with 186.8 km and Nanping at source sequence 44 with 198.0 km; the guide presents one-based positions 42 and 45 and calculates an 11.2 km endpoint-field difference. Fengtian and Linrong Xinguang are the two intervening current members.
---

## A recorded double-track subject, not a current route boundary

Taiwan Railways' complete construction-history PDF records row 114 as 壽豐–南平,
Shoufeng–Nanping, at 12.0 km and explicitly marks it as double track.[^tra-construction-history]
The constructor fields name the Railway Reconstruction Bureau and its Eastern
Region Engineering Office.[^tra-construction-history]

The aligned chronology gives 2014 in the construction-year field and 2015 in the
operation-start year field.[^tra-construction-history] Its explanation is
<span lang="zh-Hant">添築雙線</span>, which the operator's English column renders as
`Extended to be double-tracked`.[^tra-construction-history] That is the work
description recorded in the row; the checked PDF does not expand it into a
complete contract, engineering boundary or detailed scope.[^tra-construction-history]

The operator's full current construction-history HTML table does not contain a
matching Shoufeng–Nanping row.[^tra-history-page] That omission is a coverage
difference between the current HTML presentation and the complete construction-
history PDF, not evidence that the PDF row did not exist.[^tra-history-page][^tra-construction-history]

## Current station and TDX records

The current operator station pages identify Shoufeng as station 6220 and Nanping
as station 6190.[^tra-station-shoufeng][^tra-station-nanping] These are current
passenger station records and do not by themselves define the historical project
boundary or prove that the 12.0 km table value uses the same endpoints.[^tra-station-shoufeng][^tra-station-nanping][^tra-construction-history]

The committed TDX station pull contains current records for both station IDs,
including their current names and locations.[^tdx-tra-station] Those records identify
current station entries; they do not replace the operator's historical project
record.[^tdx-tra-station][^tra-construction-history]

In the committed TDX Eastern Line station-of-line data, Shoufeng is source sequence
41 with a supplied travelled distance of 186.8 km and Nanping is source sequence 44
with 198.0 km.[^tdx-tra-line] The guide presents them as one-based positions 42 and
45 and calculates an 11.2 km difference by subtracting the supplied endpoint fields.
Fengtian and Linrong Xinguang are the two intervening current members in that ordered
record.[^tdx-tra-line] The TDX interval is kept beside, rather than used to overwrite,
the operator's historical 12.0 km construction record.[^tdx-tra-line][^tra-construction-history]

## Records still missing

The checked primary sources do not provide row 114's surveyed 12.0 km engineering
boundary, exact construction/double-tracking/service-opening days, contract or
completion record, detailed scope, or a complete definition of the work scope.[^tra-construction-history][^tra-history-page]

The checked sources also do not explain whether the difference between the historical
12.0 km and current TDX endpoint fields of 11.2 km comes from station reference
points, route definition or another measurement boundary.[^tdx-tra-line][^tra-construction-history]
Those fields remain TBC rather than being averaged or treated as one measurement.[^tdx-tra-line][^tra-construction-history]

The stable result is narrower: the operator records a 12.0 km Shoufeng–Nanping
double-track subject with 2014/2015 year fields and an Extended to be double-tracked
explanation, while current station and TDX records supply a separate 11.2 km EL
endpoint interval.[^tra-construction-history][^tra-station-shoufeng][^tra-station-nanping][^tdx-tra-line]
