---
title: The Taiwan Railways Pingtung–Chaozhou Double-track Record
summary: The operator's historical PDF records a 16.3 km Pingtung–Chaozhou double-track subject with 2009 and 2015 year fields and a south-of-Pingtung railway-elevation explanation; current TDX endpoint fields span 15.0 km.
order: 48
updated: 2026-08-27
aliases:
  - 屏東–潮州
  - 屏東—潮州
  - Pingtung–Chaozhou
  - Pingtung–Chaozhou double track
facts:
  - label: Operator row 113 distance
    value: 16.3
    unit: km
    source: tra-construction-history
  - label: Historical track form
    value: double track
    source: tra-construction-history
  - label: Construction-year field
    value: 2009
    source: tra-construction-history
  - label: Operation-start year field
    value: 2015
    source: tra-construction-history
  - label: Operator-listed constructor
    value: Railway Reconstruction Bureau, Southern Region Engineering Office
    source: tra-construction-history
  - label: Recorded construction explanation
    value: South of Pingtung to Chaozhou Railway Elevated
    source: tra-construction-history
  - label: Current operator Pingtung station
    value: Pingtung (5000)
    source: tra-station-pingtung
  - label: Current operator Chaozhou station
    value: Chaozhou (5050)
    source: tra-station-chaozhou
specs:
  - label: Current TDX line ID
    value: SL
    source: tdx-tra-line
  - label: Pingtung TDX one-based position
    value: 1
    unit: position
    source: tdx-tra-line
  - label: Chaozhou TDX one-based position
    value: 6
    unit: position
    source: tdx-tra-line
  - label: Pingtung TDX supplied travelled distance
    value: 0.0
    unit: km
    source: tdx-tra-line
  - label: Chaozhou TDX supplied travelled distance
    value: 15.0
    unit: km
    source: tdx-tra-line
  - label: Current TDX endpoint-field difference
    value: 15.0
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
    note: Full ten-page operator PDF. Row 113 records Pingtung–Chaozhou as a 16.3 km double-track subject with Railway Reconstruction Bureau / Southern Region Engineering Office as constructor; its aligned chronology gives 2009 and 2015 and records 屏東以南至潮州鐵路高架化 (South of Pingtung to Chaozhou Railway Elevated).
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML history table. No matching Pingtung–Chaozhou row or row 113 railway-elevation explanation was found in the table checked for this subject.
  - id: tra-station-pingtung
    title: Pingtung Station information
    titleOriginal: 屏東車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/5000
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies station 5000 as Pingtung (屏東).
  - id: tra-station-chaozhou
    title: Chaozhou Station information
    titleOriginal: 潮州車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/5050
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies station 5050 as Chaozhou (潮州).
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains current station 5000 Pingtung (屏東) and station 5050 Chaozhou (潮州), with their current station records.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Pingtung on SL at source sequence 0 with 0.0 km and Chaozhou at source sequence 5 with 15.0 km; the guide presents one-based positions 1 and 6 and calculates a 15.0 km endpoint-field difference. Guilai, Linluo, Xishi and Zhutian are the four intervening current members.
---

## A recorded double-track subject, not a current route boundary

Taiwan Railways' complete construction-history PDF records row 113 as 屏東–潮州,
Pingtung–Chaozhou, at 16.3 km and explicitly marks it as double track.[^tra-construction-history]
The constructor fields name the Railway Reconstruction Bureau and its Southern
Region Engineering Office.[^tra-construction-history]

The aligned chronology gives 2009 in the construction-year field and 2015 in the
operation-start year field.[^tra-construction-history] Its explanation is
<span lang="zh-Hant">屏東以南至潮州鐵路高架化</span>, which the operator's English column
renders as `South of Pingtung to Chaozhou Railway Elevated`.[^tra-construction-history]
That is the work description recorded in the row; the checked PDF does not expand
it into a complete contract, engineering boundary or detailed scope.[^tra-construction-history]

The operator's full current construction-history HTML table does not contain a
matching Pingtung–Chaozhou row.[^tra-history-page] That omission is a coverage
difference between the current HTML presentation and the complete construction-
history PDF, not evidence that the PDF row did not exist.[^tra-history-page][^tra-construction-history]

## Current station and TDX records

The current operator station pages identify Pingtung as station 5000 and Chaozhou
as station 5050.[^tra-station-pingtung][^tra-station-chaozhou] These are current
passenger station records and do not by themselves define the historical project
boundary or prove that the 16.3 km table value uses the same endpoints.[^tra-station-pingtung][^tra-station-chaozhou][^tra-construction-history]

The committed TDX station pull contains current records for both station IDs,
including their current names and locations.[^tdx-tra-station] Those records identify
current station entries; they do not replace the operator's historical project
record.[^tdx-tra-station][^tra-construction-history]

In the committed TDX South Link station-of-line data, Pingtung is source sequence 0
with a supplied travelled distance of 0.0 km and Chaozhou is source sequence 5 with
15.0 km.[^tdx-tra-line] The guide presents them as one-based positions 1 and 6 and
calculates a 15.0 km difference by subtracting the supplied endpoint fields. Guilai,
Linluo, Xishi and Zhutian are the four intervening current members in that ordered
record.[^tdx-tra-line] The TDX interval is kept beside, rather than used to overwrite,
the operator's historical 16.3 km construction record.[^tdx-tra-line][^tra-construction-history]

## Records still missing

The checked primary sources do not provide row 113's surveyed 16.3 km engineering
boundary, exact construction/elevation/service-opening days, contract or completion
record, detailed scope, or a complete definition of the work scope.[^tra-construction-history][^tra-history-page]

The checked sources also do not explain whether the difference between the historical
16.3 km and current TDX endpoint fields of 15.0 km comes from station reference
points, route definition or another measurement boundary.[^tdx-tra-line][^tra-construction-history]
Those fields remain TBC rather than being averaged or treated as one measurement.[^tdx-tra-line][^tra-construction-history]

The stable result is narrower: the operator records a 16.3 km Pingtung–Chaozhou
double-track subject with 2009/2015 year fields and a South of Pingtung to Chaozhou
Railway Elevated explanation, while current station and TDX records supply a
separate 15.0 km SL endpoint interval.[^tra-construction-history][^tra-station-pingtung][^tra-station-chaozhou][^tdx-tra-line]
