---
title: The Taiwan Railways Haiduan–Ruiyuan Single-track Record
summary: The operator's historical PDF records a 4.6 km Haiduan–Ruiyuan single-track subject with 2010 and 2013 year fields and a Hualien–Taitung railway electrification explanation; current TDX endpoint fields span 16.7 km.
order: 44
updated: 2026-08-27
aliases:
  - 海端─瑞源
  - 海端—瑞源
  - Haiduan–Ruiyuan
  - Haiduan–Ruiyuan single track
facts:
  - label: Operator row 109 distance
    value: 4.6
    unit: km
    source: tra-construction-history
  - label: Historical track form
    value: single track
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
    value: Hualien-Taitung railway electrification engineering
    source: tra-construction-history
  - label: Current operator Haiduan station
    value: Haiduan (6060)
    source: tra-station-haiduan
  - label: Current operator Ruiyuan station
    value: Ruiyuan (6030)
    source: tra-station-ruiyuan
specs:
  - label: Current TDX line ID
    value: EL
    source: tdx-tra-line
  - label: Haiduan TDX one-based position
    value: 58
    unit: position
    source: tdx-tra-line
  - label: Ruiyuan TDX one-based position
    value: 61
    unit: position
    source: tdx-tra-line
  - label: Haiduan TDX supplied travelled distance
    value: 284.1
    unit: km
    source: tdx-tra-line
  - label: Ruiyuan TDX supplied travelled distance
    value: 300.8
    unit: km
    source: tdx-tra-line
  - label: Current TDX endpoint-field difference
    value: 16.7
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
    note: Full ten-page operator PDF. Row 109 records Haiduan–Ruiyuan as a 4.6 km single-track subject with the Railway Reconstruction Bureau's Eastern Region Engineering Office as constructor; its aligned chronology gives 2010 and 2013 and records Hualien–Taitung railway electrification engineering.
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML history table. No matching Haiduan–Ruiyuan row or row 109 electrification explanation was found in the table checked for this subject.
  - id: tra-station-haiduan
    title: Haiduan Station information
    titleOriginal: 海端車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6060
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies station 6060 as Haiduan (海端).
  - id: tra-station-ruiyuan
    title: Ruiyuan Station information
    titleOriginal: 瑞源車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6030
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies station 6030 as Ruiyuan (瑞源).
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains current station 6060 Haiduan (海端) and station 6030 Ruiyuan (瑞源).
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Haiduan on EL at source sequence 57 with 284.1 km and Ruiyuan at source sequence 60 with 300.8 km; the guide presents one-based positions 58 and 61 and calculates a 16.7 km endpoint-field difference, with Guanshan and Ruihe between them.
---

## A recorded single-track subject, not a current route boundary

Taiwan Railways' complete construction-history PDF records row 109 as 海端─瑞源,
Haiduan–Ruiyuan, at 4.6 km and explicitly marks it as single track.[^tra-construction-history]
The row names the Railway Reconstruction Bureau's Eastern Region Engineering Office
as constructor.[^tra-construction-history]

The aligned chronology gives 2010 in the construction-year field and 2013 in the
operation-start year field.[^tra-construction-history] Its explanation is
<span lang="zh-Hant">花東鐵路電氣化工程</span>, which the operator's English column
renders as `Hualien-Taitung railway electricification engineering`.[^tra-construction-history]
That is the work description recorded in the row; the checked PDF does not expand
it into a complete project contract, electrification package or surveyed boundary.[^tra-construction-history]

The operator's full current construction-history HTML table does not contain a
matching Haiduan–Ruiyuan row.[^tra-history-page] That omission is a coverage
difference between the current HTML presentation and the complete construction-
history PDF, not evidence that the PDF row did not exist.[^tra-history-page][^tra-construction-history]

## Current station and TDX records

The current operator station pages identify Haiduan as station 6060 and Ruiyuan as
station 6030.[^tra-station-haiduan][^tra-station-ruiyuan] These are current passenger
station records and do not by themselves define the historical project boundary or
prove that the 4.6 km table value uses the same endpoints.[^tra-station-haiduan][^tra-station-ruiyuan][^tra-construction-history]

The committed TDX station pull contains current records for both station IDs,
including their current names and locations.[^tdx-tra-station] Those records identify
current station entries; they do not replace the operator's historical project
record.[^tdx-tra-station][^tra-construction-history]

In the committed TDX Eastern Main Line station-of-line data, Haiduan is source
sequence 57 with a supplied travelled distance of 284.1 km and Ruiyuan is source
sequence 60 with 300.8 km.[^tdx-tra-line] The guide presents them as one-based
positions 58 and 61 and calculates a 16.7 km difference by subtracting the supplied
endpoint fields.[^tdx-tra-line] Guanshan and Ruihe are current members between the
two endpoints in that ordered record, so the TDX interval is kept beside, rather
than used to overwrite, the operator's historical 4.6 km construction record.[^tdx-tra-line][^tra-construction-history]

## Records still missing

The checked primary sources do not provide row 109's surveyed 4.6 km engineering
boundary, exact construction/electrification/service-opening days, contract or
completion record, track arrangement during the work, or a complete definition of
the electrification scope.[^tra-construction-history][^tra-history-page]

The checked sources also do not explain whether the difference between the
historical 4.6 km and current TDX endpoint fields of 16.7 km comes from station
reference points, route definition, the intervening stations or another measurement
boundary.[^tdx-tra-line][^tra-construction-history] Those fields remain TBC rather
than being averaged or treated as one measurement.[^tdx-tra-line][^tra-construction-history]

The stable result is narrower: the operator records a 4.6 km Haiduan–Ruiyuan
single-track subject with 2010/2013 year fields and a Hualien–Taitung railway
electrification explanation, while current station and TDX records supply a
separate 16.7 km EL endpoint interval.[^tra-construction-history][^tra-station-haiduan][^tra-station-ruiyuan][^tdx-tra-line]
