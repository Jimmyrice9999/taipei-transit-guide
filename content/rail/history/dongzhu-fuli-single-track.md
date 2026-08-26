---
title: The Taiwan Railways Dongzhu–Fuli Single-track Record
summary: The operator's historical PDF records a 2.9 km Dongzhu–Fuli single-track subject with 2012 and 2013 year fields and a Hualien–Taitung railway electrification explanation; current TDX endpoint fields span 6.1 km.
order: 42
updated: 2026-08-27
aliases:
  - 東竹─富里
  - 東竹—富里
  - Dongzhu–Fuli
  - Dongzhu–Fuli single track
facts:
  - label: Operator row 107 distance
    value: 2.9
    unit: km
    source: tra-construction-history
  - label: Historical track form
    value: single track
    source: tra-construction-history
  - label: Construction-year field
    value: 2012
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
  - label: Current operator Dongzhu station
    value: Dongzhu (6090)
    source: tra-station-dongzhu
  - label: Current operator Fuli station
    value: Fuli (6080)
    source: tra-station-fuli
specs:
  - label: Current TDX line ID
    value: EL
    source: tdx-tra-line
  - label: Dongzhu TDX one-based position
    value: 55
    unit: position
    source: tdx-tra-line
  - label: Fuli TDX one-based position
    value: 56
    unit: position
    source: tdx-tra-line
  - label: Dongzhu TDX supplied travelled distance
    value: 265.5
    unit: km
    source: tdx-tra-line
  - label: Fuli TDX supplied travelled distance
    value: 271.6
    unit: km
    source: tdx-tra-line
  - label: Current TDX endpoint-field difference
    value: 6.1
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
    note: Full ten-page operator PDF. The Chinese row 107 records 東竹─富里 as a 2.9 km single-track subject with the Railway Reconstruction Bureau's Eastern Region Engineering Office as constructor; the adjacent English cell spells the endpoint pair "Dongzhi-Fuli". Its aligned chronology gives 2012 and 2013 and records Hualien–Taitung railway electrification engineering.
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML history table. No matching Dongzhu–Fuli row or row 107 electrification explanation was found in the table checked for this subject.
  - id: tra-station-dongzhu
    title: Dongzhu Station information
    titleOriginal: 東竹車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6090
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies station 6090 as Dongzhu (東竹).
  - id: tra-station-fuli
    title: Fuli Station information
    titleOriginal: 富里車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6080
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies station 6080 as Fuli (富里).
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains current station 6090 Dongzhu (東竹) and station 6080 Fuli (富里).
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Dongzhu on EL at source sequence 54 with 265.5 km and Fuli at source sequence 55 with 271.6 km; the guide presents one-based positions 55 and 56 and calculates a 6.1 km endpoint-field difference.
---

## A recorded single-track subject, not a current route boundary

Taiwan Railways' complete construction-history PDF records row 107 as 東竹─富里,
at 2.9 km and explicitly marks it as single track.[^tra-construction-history]
The row names the Railway Reconstruction Bureau's Eastern Region Engineering Office
as constructor.[^tra-construction-history]

The PDF's adjacent English cell spells the pair `Dongzhi-Fuli`, while the current
operator station page identifies 東竹 as Dongzhu. This page follows the current
operator station spelling, and keeps the PDF's `Dongzhi` form as a source
transcription variant rather than silently treating the two strings as identical.[^tra-construction-history][^tra-station-dongzhu]

The aligned chronology gives 2012 in the construction-year field and 2013 in the
operation-start year field.[^tra-construction-history] Its explanation is
<span lang="zh-Hant">花東鐵路電氣化工程</span>, which the operator's English column
renders as `Hualien-Taitung railway electricification engineering`.[^tra-construction-history]
That is the work description recorded in the row; the checked PDF does not expand
it into a complete project contract, electrification package or surveyed boundary.[^tra-construction-history]

The operator's full current construction-history HTML table does not contain a
matching Dongzhu–Fuli row.[^tra-history-page] That omission is a coverage difference
between the current HTML presentation and the complete construction-history PDF,
not evidence that the PDF row did not exist.[^tra-history-page][^tra-construction-history]

## Current station and TDX records

The current operator station pages identify Dongzhu as station 6090 and Fuli as
station 6080.[^tra-station-dongzhu][^tra-station-fuli] These are current passenger
station records and do not by themselves define the historical project boundary
or prove that the 2.9 km table value uses the same endpoints.[^tra-station-dongzhu][^tra-station-fuli][^tra-construction-history]

The committed TDX station pull contains current records for both station IDs,
including their current names and locations.[^tdx-tra-station] Those records
identify current station entries; they do not replace the operator's historical
project record.[^tdx-tra-station][^tra-construction-history]

In the committed TDX Eastern Main Line station-of-line data, Dongzhu is source
sequence 54 with a supplied travelled distance of 265.5 km and Fuli is source
sequence 55 with 271.6 km.[^tdx-tra-line] The guide presents them as one-based
positions 55 and 56 and calculates a 6.1 km difference by subtracting the supplied
endpoint fields.[^tdx-tra-line] No current station member intervenes in this
ordered pair, but the TDX interval is kept beside, rather than used to overwrite,
the operator's historical 2.9 km construction record.[^tdx-tra-line][^tra-construction-history]

## Records still missing

The checked primary sources do not provide row 107's surveyed 2.9 km engineering
boundary, exact construction/electrification/service-opening days, contract or
completion record, track arrangement during the work, or a complete definition of
the electrification scope.[^tra-construction-history][^tra-history-page]

The checked sources also do not explain whether the difference between the
historical 2.9 km and current TDX endpoint fields of 6.1 km comes from station
reference points, route definition or another measurement boundary.[^tdx-tra-line][^tra-construction-history]
Those fields remain TBC rather than being averaged or treated as one measurement.[^tdx-tra-line][^tra-construction-history]

The stable result is narrower: the operator records a 2.9 km Dongzhu–Fuli
single-track subject with 2012/2013 year fields and a Hualien–Taitung railway
electrification explanation, while current station and TDX records supply a
separate 6.1 km EL endpoint interval.[^tra-construction-history][^tra-station-dongzhu][^tra-station-fuli][^tdx-tra-line]
