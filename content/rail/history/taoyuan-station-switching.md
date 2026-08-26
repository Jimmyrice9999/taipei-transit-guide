---
title: The Taiwan Railways Taoyuan Station Switching Record
summary: The operator's historical PDF records a 0.3 km Taoyuan Station subject with 2015 construction and operation-start fields and a temporary-station switching explanation; current TDX places Taoyuan at Western Main Line position 21.
order: 50
updated: 2026-08-27
aliases:
  - 桃園車站
  - 桃園臨時站切換
  - Taoyuan Station switching
  - Taoyuan temporary station switching
facts:
  - label: Operator row 115 distance
    value: 0.3
    unit: km
    source: tra-construction-history
  - label: Construction-year field
    value: 2015
    source: tra-construction-history
  - label: Operation-start year field
    value: 2015
    source: tra-construction-history
  - label: Operator-listed constructor
    value: Taiwan Railways Administration
    source: tra-construction-history
  - label: Recorded construction explanation
    value: Switching of the Taoyuan temperal Station
    source: tra-construction-history
  - label: Current operator station
    value: Taoyuan (1080)
    source: tra-station-taoyuan
specs:
  - label: Current TDX line ID
    value: WL
    source: tdx-tra-line
  - label: Taoyuan TDX one-based position
    value: 21
    unit: position
    source: tdx-tra-line
  - label: Taoyuan TDX supplied travelled distance
    value: 57.6
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
    note: Full ten-page operator PDF. Row 115 records Taoyuan Station at 0.3 km with TRA as constructor; its aligned chronology gives 2015 and 2015 and records 桃園臨時站切換 (Switching of the Taoyuan temperal Station).
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML history table. No matching Taoyuan Station row or row 115 temporary-station switching explanation was found in the table checked for this subject.
  - id: tra-station-taoyuan
    title: Taoyuan Station information
    titleOriginal: 桃園車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/1080
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies current station 1080 as Taoyuan (桃園).
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains current station record 1080 Taoyuan (桃園), with its current station fields.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Taoyuan at WL source sequence 20 with supplied travelled distance 57.6 km, between Fengming (1075) and Neili (1090); the guide presents that as one-based position 21.
---

## One historical station-switching row

Taiwan Railways' complete construction-history PDF records row 115 as 桃園車站,
Taoyuan Station, at 0.3 km.[^tra-construction-history] The row names the Taiwan
Railways Administration as constructor.[^tra-construction-history]

The aligned chronology gives 2015 in both the construction-year and operation-start
fields.[^tra-construction-history] Its explanation is
<span lang="zh-Hant">桃園臨時站切換</span>, which the operator's English column renders as
`Switching of the Taoyuan temperal Station`.[^tra-construction-history] The source's
wording records the switching event but does not expand it into a complete station
move chronology, contract, engineering boundary or detailed scope.[^tra-construction-history]

The 0.3 km value is kept as the historical row's station subject distance.[^tra-construction-history]
It is not converted into a claim that the switching work formed a 0.3 km continuous
track section, because the checked PDF does not define the measurement points or say
whether the value belongs to station limits, temporary facilities or another railway
accounting boundary.[^tra-construction-history]

## The current passenger station is a separate layer

The current operator page identifies station 1080 as Taoyuan (桃園).[^tra-station-taoyuan]
That page is used here for current station identity and live passenger-service
context; it does not provide the historical switching record or a station-move plan.[^tra-station-taoyuan]

The committed TDX station pull likewise contains current station ID 1080, including
its current name and station fields.[^tdx-tra-station] These fields describe the
current station record, not the extent or disposition of the temporary-station
switching named in row 115.[^tdx-tra-station][^tra-construction-history]

In the current TDX Western Main Line record, Taoyuan is source sequence 20 with a
supplied travelled distance of 57.6 km.[^tdx-tra-line] The preceding member is
Fengming (1075) and the following member is Neili (1090), so the guide presents
Taoyuan as one-based position 21 in that ordered dataset.[^tdx-tra-line] The 57.6 km
value is a current line-position field from the WL data; it is not added to or
subtracted from the historical 0.3 km row.[^tdx-tra-line][^tra-construction-history]

## Source coverage and records still missing

The current operator's full route-construction HTML table does not contain a
matching Taoyuan Station row or the row 115 switching explanation in the table
checked for this subject.[^tra-history-page] That is a source-presentation difference
from the complete construction-history PDF, not evidence that the PDF row did not
exist.[^tra-history-page][^tra-construction-history]

The checked primaries do not provide the exact switching day, the temporary and
permanent station sequence, a surveyed boundary for the 0.3 km value, the station
plan, the contract or completion record, or a source-defined mapping between row
115's distance and the current TDX WL travelled-distance field.[^tra-construction-history][^tdx-tra-line]
Those details remain TBC rather than being inferred from the shared station name.[^tra-construction-history][^tdx-tra-station]

The stable result is narrower: the operator records a 0.3 km Taoyuan Station
subject with 2015/2015 year fields and a Switching of the Taoyuan temperal Station
explanation, while the current operator and TDX records identify passenger station
1080 at current WL position 21 and 57.6 km.[^tra-construction-history][^tra-station-taoyuan][^tdx-tra-line]
