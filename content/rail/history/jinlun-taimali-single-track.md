---
title: The Taiwan Railways Jinlun–Taimali Single-track Record
summary: The operator's historical PDF records a 1.9 km Jinlun–Taimali single-track subject with 2010 and 2014 year fields and a South-Taimail Bridge reconstruction explanation; current TDX endpoint fields span 10.9 km.
order: 47
updated: 2026-08-27
aliases:
  - 金崙─太麻里
  - 金崙—太麻里
  - Jinlun–Taimali
  - Jinlun–Taimali single track
facts:
  - label: Operator row 112 distance
    value: 1.9
    unit: km
    source: tra-construction-history
  - label: Historical track form
    value: single track
    source: tra-construction-history
  - label: Construction-year field
    value: 2010
    source: tra-construction-history
  - label: Operation-start year field
    value: 2014
    source: tra-construction-history
  - label: Operator-listed constructor
    value: Taiwan Railways Administration
    source: tra-construction-history
  - label: Recorded construction explanation
    value: South-Taimail Bridge reconstruction
    source: tra-construction-history
  - label: Current operator Jinlun station
    value: Jinlun (5210)
    source: tra-station-jinlun
  - label: Current operator Taimali station
    value: Taimali (5220)
    source: tra-station-taimali
specs:
  - label: Current TDX line ID
    value: SL
    source: tdx-tra-line
  - label: Jinlun TDX one-based position
    value: 20
    unit: position
    source: tdx-tra-line
  - label: Taimali TDX one-based position
    value: 21
    unit: position
    source: tdx-tra-line
  - label: Jinlun TDX supplied travelled distance
    value: 104.2
    unit: km
    source: tdx-tra-line
  - label: Taimali TDX supplied travelled distance
    value: 115.1
    unit: km
    source: tdx-tra-line
  - label: Current TDX endpoint-field difference
    value: 10.9
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
    note: Full ten-page operator PDF. Row 112 records Jinlun–Taimali as a 1.9 km single-track subject with Taiwan Railways Administration as constructor; its aligned chronology gives 2010 and 2014 and records 南太麻里溪橋改建 (South-Taimail Bridge reconstruction).
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML history table. No matching Jinlun–Taimali row or row 112 bridge-reconstruction explanation was found in the table checked for this subject.
  - id: tra-station-jinlun
    title: Jinlun Station information
    titleOriginal: 金崙車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/5210
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies station 5210 as Jinlun (金崙).
  - id: tra-station-taimali
    title: Taimali Station information
    titleOriginal: 太麻里車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/5220
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies station 5220 as Taimali (太麻里).
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains current station 5210 Jinlun (金崙) and station 5220 Taimali (太麻里).
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Jinlun on SL at source sequence 19 with 104.2 km and Taimali at source sequence 20 with 115.1 km; the guide presents one-based positions 20 and 21 and calculates a 10.9 km endpoint-field difference.
---

## A recorded single-track subject, not a current route boundary

Taiwan Railways' complete construction-history PDF records row 112 as 金崙─太麻里,
Jinlun–Taimali, at 1.9 km and explicitly marks it as single track.[^tra-construction-history]
The row names Taiwan Railways Administration as constructor.[^tra-construction-history]

The aligned chronology gives 2010 in the construction-year field and 2014 in the
operation-start year field.[^tra-construction-history] Its explanation is
<span lang="zh-Hant">南太麻里溪橋改建</span>, which the operator's English column
renders as `South-Taimail Bridge reconstruction`.[^tra-construction-history]
That is the work description recorded in the row; the checked PDF does not expand
it into a complete bridge contract, construction scope or surveyed boundary.[^tra-construction-history]

The operator's full current construction-history HTML table does not contain a
matching Jinlun–Taimali row.[^tra-history-page] That omission is a coverage
difference between the current HTML presentation and the complete construction-
history PDF, not evidence that the PDF row did not exist.[^tra-history-page][^tra-construction-history]

## Current station and TDX records

The current operator station pages identify Jinlun as station 5210 and Taimali as
station 5220.[^tra-station-jinlun][^tra-station-taimali] These are current passenger
station records and do not by themselves define the historical project boundary or
prove that the 1.9 km table value uses the same endpoints.[^tra-station-jinlun][^tra-station-taimali][^tra-construction-history]

The committed TDX station pull contains current records for both station IDs,
including their current names and locations.[^tdx-tra-station] Those records identify
current station entries; they do not replace the operator's historical project
record.[^tdx-tra-station][^tra-construction-history]

In the committed TDX South Link station-of-line data, Jinlun is source sequence 19
with a supplied travelled distance of 104.2 km and Taimali is source sequence 20
with 115.1 km.[^tdx-tra-line] The guide presents them as one-based positions 20 and
21 and calculates a 10.9 km difference by subtracting the supplied endpoint fields.
No current station member intervenes in that ordered pair, so the TDX interval is
kept beside, rather than used to overwrite, the operator's historical 1.9 km
construction record.[^tdx-tra-line][^tra-construction-history]

## Records still missing

The checked primary sources do not provide row 112's surveyed 1.9 km engineering
boundary, exact construction/bridge-reconstruction/service-opening days, contract
or completion record, detailed bridge scope, or a complete definition of the work
scope.[^tra-construction-history][^tra-history-page]

The checked sources also do not explain whether the difference between the
historical 1.9 km and current TDX endpoint fields of 10.9 km comes from station
reference points, route definition or another measurement boundary.[^tdx-tra-line][^tra-construction-history]
Those fields remain TBC rather than being averaged or treated as one measurement.[^tdx-tra-line][^tra-construction-history]

The stable result is narrower: the operator records a 1.9 km Jinlun–Taimali
single-track subject with 2010/2014 year fields and a South-Taimail Bridge
reconstruction explanation, while current station and TDX records supply a
separate 10.9 km SL endpoint interval.[^tra-construction-history][^tra-station-jinlun][^tra-station-taimali][^tdx-tra-line]
