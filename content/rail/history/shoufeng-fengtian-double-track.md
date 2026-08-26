---
title: The Taiwan Railways Shoufeng–Fengtian Double-track Record
summary: The operator's historical PDF records a 2.7 km Shoufeng–Fengtian double-track subject with 2015 and 2016 year fields and an extension-to-double-track explanation; current TDX endpoint fields span 2.8 km.
order: 51
updated: 2026-08-27
aliases:
  - 壽豐–豐田
  - 壽豐—豐田
  - Shoufeng–Fengtian
  - Shoufeng–Fengtian double track
facts:
  - label: Operator row 116 distance
    value: 2.7
    unit: km
    source: tra-construction-history
  - label: Historical track form
    value: double track
    source: tra-construction-history
  - label: Construction-year field
    value: 2015
    source: tra-construction-history
  - label: Operation-start year field
    value: 2016
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
  - label: Current operator Fengtian station
    value: Fengtian (6210)
    source: tra-station-fengtian
specs:
  - label: Current TDX line ID
    value: EL
    source: tdx-tra-line
  - label: Shoufeng TDX one-based position
    value: 42
    unit: position
    source: tdx-tra-line
  - label: Fengtian TDX one-based position
    value: 43
    unit: position
    source: tdx-tra-line
  - label: Shoufeng TDX supplied travelled distance
    value: 186.8
    unit: km
    source: tdx-tra-line
  - label: Fengtian TDX supplied travelled distance
    value: 189.6
    unit: km
    source: tdx-tra-line
  - label: Current TDX endpoint-field difference
    value: 2.8
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
    note: Full ten-page operator PDF. Row 116 records Shoufeng–Fengtian as a 2.7 km double-track subject with Railway Reconstruction Bureau / Eastern Region Engineering Office as constructor; its aligned chronology gives 2015 and 2016 and records 添築雙線 (Extended to be double-tracked).
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML history table. No matching Shoufeng–Fengtian row or row 116 double-tracking explanation was found in the table checked for this subject.
  - id: tra-station-shoufeng
    title: Shoufeng Station information
    titleOriginal: 壽豐車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6220
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies station 6220 as Shoufeng (壽豐).
  - id: tra-station-fengtian
    title: Fengtian Station information
    titleOriginal: 豐田車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6210
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies station 6210 as Fengtian (豐田).
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains current station 6220 Shoufeng (壽豐) and station 6210 Fengtian (豐田), with their current station records.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Shoufeng on EL at source sequence 41 with 186.8 km and Fengtian at source sequence 42 with 189.6 km; the guide presents one-based positions 42 and 43 and calculates a 2.8 km endpoint-field difference. No current station member intervenes.
---

## A recorded double-track subject, not a current route boundary

Taiwan Railways' complete construction-history PDF records row 116 as 壽豐–豐田,
Shoufeng–Fengtian, at 2.7 km and explicitly marks it as double track.[^tra-construction-history]
The constructor fields name the Railway Reconstruction Bureau and its Eastern
Region Engineering Office.[^tra-construction-history]

The aligned chronology gives 2015 in the construction-year field and 2016 in the
operation-start year field.[^tra-construction-history] Its explanation is
<span lang="zh-Hant">添築雙線</span>, which the operator's English column renders as
`Extended to be double-tracked`.[^tra-construction-history] That is the work
description recorded in the row; the checked PDF does not expand it into a
complete contract, engineering boundary or detailed scope.[^tra-construction-history]

The operator's full current construction-history HTML table does not contain a
matching Shoufeng–Fengtian row.[^tra-history-page] That omission is a coverage
difference between the current HTML presentation and the complete construction-
history PDF, not evidence that the PDF row did not exist.[^tra-history-page][^tra-construction-history]

## Current station and TDX records

The current operator station pages identify Shoufeng as station 6220 and Fengtian
as station 6210.[^tra-station-shoufeng][^tra-station-fengtian] These are current
passenger station records and do not by themselves define the historical project
boundary or prove that the 2.7 km table value uses the same endpoints.[^tra-station-shoufeng][^tra-station-fengtian][^tra-construction-history]

The committed TDX station pull contains current records for both station IDs,
including their current names and locations.[^tdx-tra-station] Those records identify
current station entries; they do not replace the operator's historical project
record.[^tdx-tra-station][^tra-construction-history]

In the committed TDX Eastern Line station-of-line data, Shoufeng is source sequence
41 with a supplied travelled distance of 186.8 km and Fengtian is source sequence 42
with 189.6 km.[^tdx-tra-line] The guide presents them as one-based positions 42 and
43 and calculates a 2.8 km difference by subtracting the supplied endpoint fields.
No current station member intervenes in that ordered pair.[^tdx-tra-line] The TDX
interval is kept beside, rather than used to overwrite, the operator's historical
2.7 km construction record.[^tdx-tra-line][^tra-construction-history]

## Records still missing

The checked primary sources do not provide row 116's surveyed 2.7 km engineering
boundary, exact construction/double-tracking/service-opening days, contract or
completion record, detailed scope, or a complete definition of the work scope.[^tra-construction-history][^tra-history-page]

The checked sources also do not explain whether the difference between the historical
2.7 km and current TDX endpoint fields of 2.8 km comes from station reference points,
route definition or another measurement boundary.[^tdx-tra-line][^tra-construction-history]
Those fields remain TBC rather than being averaged or treated as one measurement.[^tdx-tra-line][^tra-construction-history]

The stable result is narrower: the operator records a 2.7 km Shoufeng–Fengtian
double-track subject with 2015/2016 year fields and an Extended to be double-tracked
explanation, while current station and TDX records supply a separate 2.8 km EL
endpoint interval.[^tra-construction-history][^tra-station-shoufeng][^tra-station-fengtian][^tdx-tra-line]
