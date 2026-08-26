---
title: The Taiwan Railways Shanhua Station Platform Record
summary: The operator's historical PDF records a 0.3 km Shanhua Station subject with 2017 construction and operation-start fields and an Add platform explanation; current TDX places Shanhua at Western Main Line position 84.
order: 53
updated: 2026-08-27
aliases:
  - 善化車站
  - 善化站增設月台
  - Shanhua Station platform
  - Shanhua Station platform addition
facts:
  - label: Operator row 118 distance
    value: 0.3
    unit: km
    source: tra-construction-history
  - label: Construction-year field
    value: 2017
    source: tra-construction-history
  - label: Operation-start year field
    value: 2017
    source: tra-construction-history
  - label: Operator-listed constructor
    value: Taiwan Railways Administration
    source: tra-construction-history
  - label: Recorded construction explanation
    value: Add platform
    source: tra-construction-history
  - label: Current operator station
    value: Shanhua (4170)
    source: tra-station-shanhua
specs:
  - label: Current TDX line ID
    value: WL
    source: tdx-tra-line
  - label: Shanhua TDX one-based position
    value: 84
    unit: position
    source: tdx-tra-line
  - label: Shanhua TDX supplied travelled distance
    value: 334.2
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
    note: Full ten-page operator PDF. Row 118 records Shanhua Station at 0.3 km with TRA as constructor; its aligned chronology gives 2017 and 2017 and records 增設月台 (Add platform).
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML history table. No matching Shanhua Station row or row 118 platform explanation was found in the table checked for this subject.
  - id: tra-station-shanhua
    title: Shanhua Station information
    titleOriginal: 善化車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/4170
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies station 4170 as Shanhua (善化).
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains current station 4170 Shanhua (善化), with its current station record.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Shanhua on WL at source sequence 83 with supplied travelled distance 334.2 km; the guide presents that as one-based position 84.
---

## A recorded station-platform subject

Taiwan Railways' complete construction-history PDF records row 118 as 善化車站,
Shanhua Station, at 0.3 km.[^tra-construction-history] The row names the Taiwan
Railways Administration as constructor.[^tra-construction-history]

The aligned chronology gives 2017 in both the construction-year and operation-start
fields.[^tra-construction-history] Its explanation is <span lang="zh-Hant">增設月台</span>,
which the operator's English column renders as `Add platform`.[^tra-construction-history]
That is the work description recorded in the row; the checked PDF does not expand it
into a platform count, exact date, contract, engineering boundary or detailed scope.[^tra-construction-history]

The operator's full current construction-history HTML table does not contain a
matching Shanhua Station row.[^tra-history-page] That omission is a coverage
difference between the current HTML presentation and the complete construction-
history PDF, not evidence that the PDF row did not exist.[^tra-history-page][^tra-construction-history]

## Current station and TDX records

The current operator station page identifies Shanhua as station 4170.[^tra-station-shanhua]
That is a current passenger-station identity and does not by itself define the
historical platform work, its 0.3 km value or the project boundary.[^tra-station-shanhua][^tra-construction-history]

The committed TDX station pull contains the current 4170 Shanhua record, including
its current name and station fields.[^tdx-tra-station] Those fields identify the
current station entry; they do not replace the operator's historical station-work
record.[^tdx-tra-station][^tra-construction-history]

In the committed TDX Western Main Line station-of-line data, Shanhua is source
sequence 83 with a supplied travelled distance of 334.2 km.[^tdx-tra-line] The guide
presents it as one-based position 84.[^tdx-tra-line] The 334.2 km value is a current
line-position field, not a substitute for or a measurement to be combined with the
historical 0.3 km station subject.[^tdx-tra-line][^tra-construction-history]

## Records still missing

The checked primary sources do not provide the exact platform-addition day, the
number or type of platforms, platform geometry, contract or completion record,
surveyed boundary for the 0.3 km value, or a detailed work scope for row 118.[^tra-construction-history][^tra-history-page]

The checked sources also do not explain the measurement purpose of the historical
0.3 km station value or provide a source-defined mapping between it and the current
TDX WL travelled-distance field of 334.2 km.[^tdx-tra-line][^tra-construction-history]
Those fields remain separate rather than being averaged, added or treated as one
measurement.[^tdx-tra-line][^tra-construction-history]

The stable result is narrower: the operator records a 0.3 km Shanhua Station
subject with 2017/2017 fields and an Add platform explanation, while the current
operator and TDX records identify station 4170 at WL position 84 and 334.2 km.[^tra-construction-history][^tra-station-shanhua][^tdx-tra-line]
