---
title: The Taiwan Railways Huatan–Shetou Double-track Record
summary: The operator's historical PDF records a 4.3 km Huatan–Shetou double-track subject with 2006 and 2014 year fields and a Yuan-Lin Railway elevated explanation; current TDX endpoint fields span 15.3 km.
order: 46
updated: 2026-08-27
aliases:
  - 花壇─社頭
  - 花壇—社頭
  - Huatan–Shetou
  - Huatan–Shetou double track
facts:
  - label: Operator row 111 distance
    value: 4.3
    unit: km
    source: tra-construction-history
  - label: Historical track form
    value: double track
    source: tra-construction-history
  - label: Construction-year field
    value: 2006
    source: tra-construction-history
  - label: Operation-start year field
    value: 2014
    source: tra-construction-history
  - label: Operator-listed constructor
    value: Railway Reconstruction Bureau, Eastern Region Engineering Office
    source: tra-construction-history
  - label: Recorded construction explanation
    value: Yuan-Lin Railway Elevated
    source: tra-construction-history
  - label: Current operator Huatan station
    value: Huatan (3370)
    source: tra-station-huatan
  - label: Current operator Shetou station
    value: Shetou (3410)
    source: tra-station-shetou
specs:
  - label: Current TDX line ID
    value: WL
    source: tdx-tra-line
  - label: Huatan TDX one-based position
    value: 60
    unit: position
    source: tdx-tra-line
  - label: Shetou TDX one-based position
    value: 64
    unit: position
    source: tdx-tra-line
  - label: Huatan TDX supplied travelled distance
    value: 217.5
    unit: km
    source: tdx-tra-line
  - label: Shetou TDX supplied travelled distance
    value: 232.8
    unit: km
    source: tdx-tra-line
  - label: Current TDX endpoint-field difference
    value: 15.3
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
    note: Full ten-page operator PDF. Row 111 records Huatan–Shetou as a 4.3 km double-track subject with the Railway Reconstruction Bureau's Eastern Region Engineering Office as constructor; its aligned chronology gives 2006 and 2014 and records 員林鐵路高架化 (Yuan-Lin Railway Elevated).
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML history table. No matching Huatan–Shetou row or row 111 elevated-railway explanation was found in the table checked for this subject.
  - id: tra-station-huatan
    title: Huatan Station information
    titleOriginal: 花壇車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/3370
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies station 3370 as Huatan (花壇).
  - id: tra-station-shetou
    title: Shetou Station information
    titleOriginal: 社頭車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/3410
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies station 3410 as Shetou (社頭).
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains current station 3370 Huatan (花壇) and station 3410 Shetou (社頭).
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Huatan on WL at source sequence 59 with 217.5 km and Shetou at source sequence 63 with 232.8 km; the guide presents one-based positions 60 and 64 and calculates a 15.3 km endpoint-field difference, with Dacun, Yuanlin and Yongjing between them.
---

## A recorded double-track subject, not a current route boundary

Taiwan Railways' complete construction-history PDF records row 111 as 花壇─社頭,
Huatan–Shetou, at 4.3 km and explicitly marks it as double track.[^tra-construction-history]
The row names the Railway Reconstruction Bureau's Eastern Region Engineering Office
as constructor.[^tra-construction-history]

The aligned chronology gives 2006 in the construction-year field and 2014 in the
operation-start year field.[^tra-construction-history] Its explanation is
<span lang="zh-Hant">員林鐵路高架化</span>, which the operator's English column renders as
`Yuan-Lin Railway Elevated`.[^tra-construction-history] That is the work description
recorded in the row; the checked PDF does not expand it into a complete project
contract, elevated-structure inventory or surveyed boundary.[^tra-construction-history]

The operator's full current construction-history HTML table does not contain a
matching Huatan–Shetou row.[^tra-history-page] That omission is a coverage
difference between the current HTML presentation and the complete construction-
history PDF, not evidence that the PDF row did not exist.[^tra-history-page][^tra-construction-history]

## Current station and TDX records

The current operator station pages identify Huatan as station 3370 and Shetou as
station 3410.[^tra-station-huatan][^tra-station-shetou] These are current passenger
station records and do not by themselves define the historical project boundary or
prove that the 4.3 km table value uses the same endpoints.[^tra-station-huatan][^tra-station-shetou][^tra-construction-history]

The committed TDX station pull contains current records for both station IDs,
including their current names and locations.[^tdx-tra-station] Those records identify
current station entries; they do not replace the operator's historical project
record.[^tdx-tra-station][^tra-construction-history]

In the committed TDX Western Main Line station-of-line data, Huatan is source
sequence 59 with a supplied travelled distance of 217.5 km and Shetou is source
sequence 63 with 232.8 km.[^tdx-tra-line] The guide presents them as one-based
positions 60 and 64 and calculates a 15.3 km difference by subtracting the supplied
endpoint fields.[^tdx-tra-line] Dacun, Yuanlin and Yongjing are current members
between the two endpoints in that ordered record, so the TDX interval is kept beside,
rather than used to overwrite, the operator's historical 4.3 km construction
record.[^tdx-tra-line][^tra-construction-history]

## Records still missing

The checked primary sources do not provide row 111's surveyed 4.3 km engineering
boundary, exact construction/elevated-railway/service-opening days, contract or
completion record, before-and-after track inventory, or a complete definition of
the work scope.[^tra-construction-history][^tra-history-page]

The checked sources also do not explain whether the difference between the
historical 4.3 km and current TDX endpoint fields of 15.3 km comes from station
reference points, route definition, the intervening stations or another measurement
boundary.[^tdx-tra-line][^tra-construction-history] Those fields remain TBC rather
than being averaged or treated as one measurement.[^tdx-tra-line][^tra-construction-history]

The stable result is narrower: the operator records a 4.3 km Huatan–Shetou
double-track subject with 2006/2014 year fields and a Yuan-Lin Railway elevated
explanation, while current station and TDX records supply a separate 15.3 km WL
endpoint interval.[^tra-construction-history][^tra-station-huatan][^tra-station-shetou][^tdx-tra-line]
