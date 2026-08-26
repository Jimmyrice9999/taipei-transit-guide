---
title: The Taiwan Railways Shanli–Taitung Double-track Record
summary: The operator's historical PDF records a 7.3 km Shanli–Taitung double-track subject with 2010 and 2013 year fields and a double-tracking explanation; current TDX endpoint fields span 8.2 km.
order: 45
updated: 2026-08-27
aliases:
  - 山里─臺東
  - 山里—臺東
  - Shanli–Taitung
  - Shanli–Taitung double track
facts:
  - label: Operator row 110 distance
    value: 7.3
    unit: km
    source: tra-construction-history
  - label: Historical track form
    value: double track
    source: tra-construction-history
  - label: Construction-year field
    value: 2010
    source: tra-construction-history
  - label: Operation-start year field
    value: 2013
    source: tra-construction-history
  - label: Operator-listed constructor
    value: Railway Reconstruction Bureau, Eastern Region Engineering Office
    source: tra-construction-history
  - label: Recorded construction explanation
    value: Extended to be double-tracked
    source: tra-construction-history
  - label: Current operator Shanli station
    value: Shanli (6010)
    source: tra-station-shanli
  - label: Current operator Taitung station
    value: Taitung (6000)
    source: tra-station-taitung
specs:
  - label: Current TDX line ID
    value: EL
    source: tdx-tra-line
  - label: Shanli TDX one-based position
    value: 63
    unit: position
    source: tdx-tra-line
  - label: Taitung TDX one-based position
    value: 64
    unit: position
    source: tdx-tra-line
  - label: Shanli TDX supplied travelled distance
    value: 312.4
    unit: km
    source: tdx-tra-line
  - label: Taitung TDX supplied travelled distance
    value: 320.6
    unit: km
    source: tdx-tra-line
  - label: Current TDX endpoint-field difference
    value: 8.2
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
    note: Full ten-page operator PDF. Row 110 records Shanli–Taitung as a 7.3 km double-track subject with the Railway Reconstruction Bureau's Eastern Region Engineering Office as constructor; its aligned chronology gives 2010 and 2013 and records 添築雙線 (Extended to be double-tracked).
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML history table. No matching Shanli–Taitung row or row 110 double-tracking explanation was found in the table checked for this subject.
  - id: tra-station-shanli
    title: Shanli Station information
    titleOriginal: 山里車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6010
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies station 6010 as Shanli (山里).
  - id: tra-station-taitung
    title: Taitung Station information
    titleOriginal: 臺東車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6000
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies station 6000 as Taitung (臺東).
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains current station 6010 Shanli (山里) and station 6000 Taitung (臺東).
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Shanli on EL at source sequence 62 with 312.4 km and Taitung at source sequence 63 with 320.6 km; the guide presents one-based positions 63 and 64 and calculates an 8.2 km endpoint-field difference, with Luye between them.
---

## A recorded double-track subject, not a current route boundary

Taiwan Railways' complete construction-history PDF records row 110 as 山里─臺東,
Shanli–Taitung, at 7.3 km and explicitly marks it as double track.[^tra-construction-history]
The row names the Railway Reconstruction Bureau's Eastern Region Engineering Office
as constructor.[^tra-construction-history]

The aligned chronology gives 2010 in the construction-year field and 2013 in the
operation-start year field.[^tra-construction-history] Its explanation is
<span lang="zh-Hant">添築雙線</span>, which the operator's English column renders as
`Extended to be double-tracked`.[^tra-construction-history] That is the work
description recorded in the row; the checked PDF does not expand it into a complete
project contract, track inventory or surveyed boundary.[^tra-construction-history]

The operator's full current construction-history HTML table does not contain a
matching Shanli–Taitung row.[^tra-history-page] That omission is a coverage
difference between the current HTML presentation and the complete construction-
history PDF, not evidence that the PDF row did not exist.[^tra-history-page][^tra-construction-history]

## Current station and TDX records

The current operator station pages identify Shanli as station 6010 and Taitung as
station 6000.[^tra-station-shanli][^tra-station-taitung] These are current passenger
station records and do not by themselves define the historical project boundary or
prove that the 7.3 km table value uses the same endpoints.[^tra-station-shanli][^tra-station-taitung][^tra-construction-history]

The committed TDX station pull contains current records for both station IDs,
including their current names and locations.[^tdx-tra-station] Those records identify
current station entries; they do not replace the operator's historical project
record.[^tdx-tra-station][^tra-construction-history]

In the committed TDX Eastern Main Line station-of-line data, Shanli is source
sequence 62 with a supplied travelled distance of 312.4 km and Taitung is source
sequence 63 with 320.6 km.[^tdx-tra-line] The guide presents them as one-based
positions 63 and 64 and calculates an 8.2 km difference by subtracting the supplied
endpoint fields.[^tdx-tra-line] Luye is the current member between the two endpoints
in that ordered record, so the TDX interval is kept beside, rather than used to
overwrite, the operator's historical 7.3 km construction record.[^tdx-tra-line][^tra-construction-history]

## Records still missing

The checked primary sources do not provide row 110's surveyed 7.3 km engineering
boundary, exact construction/double-tracking/service-opening days, contract or
completion record, before-and-after track inventory, or a complete definition of
the work scope.[^tra-construction-history][^tra-history-page]

The checked sources also do not explain whether the difference between the
historical 7.3 km and current TDX endpoint fields of 8.2 km comes from station
reference points, route definition, the intervening station or another measurement
boundary.[^tdx-tra-line][^tra-construction-history] Those fields remain TBC rather
than being averaged or treated as one measurement.[^tdx-tra-line][^tra-construction-history]

The stable result is narrower: the operator records a 7.3 km Shanli–Taitung
double-track subject with 2010/2013 year fields and a double-tracking explanation,
while current station and TDX records supply a separate 8.2 km EL endpoint
interval.[^tra-construction-history][^tra-station-shanli][^tra-station-taitung][^tdx-tra-line]
