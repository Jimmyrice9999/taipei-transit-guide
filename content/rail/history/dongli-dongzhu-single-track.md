---
title: The Taiwan Railways Dongli–Dongzhu Single-track Record
summary: The operator's historical PDF records a 2.1 km Dongli–Dongzhu single-track subject with 2012 and 2013 year fields and a Hualien–Taitung railway electrification explanation; current TDX endpoint fields span 6.0 km.
order: 41
updated: 2026-08-27
aliases:
  - 東里─東竹
  - 東里—東竹
  - Dongli–Dongzhu
  - Dongli–Dongzhu single track
facts:
  - label: Operator row 106 distance
    value: 2.1
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
  - label: Current operator Dongli station
    value: Dongli (6100)
    source: tra-station-dongli
  - label: Current operator Dongzhu station
    value: Dongzhu (6090)
    source: tra-station-dongzhu
specs:
  - label: Current TDX line ID
    value: EL
    source: tdx-tra-line
  - label: Dongli TDX one-based position
    value: 54
    unit: position
    source: tdx-tra-line
  - label: Dongzhu TDX one-based position
    value: 55
    unit: position
    source: tdx-tra-line
  - label: Dongli TDX supplied travelled distance
    value: 259.5
    unit: km
    source: tdx-tra-line
  - label: Dongzhu TDX supplied travelled distance
    value: 265.5
    unit: km
    source: tdx-tra-line
  - label: Current TDX endpoint-field difference
    value: 6.0
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
    note: Full ten-page operator PDF. Row 106 records Dongli–Dongzhu as a 2.1 km single-track subject with the Railway Reconstruction Bureau's Eastern Region Engineering Office as constructor; its aligned chronology gives 2012 and 2013 and records Hualien–Taitung railway electrification engineering.
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML history table. No matching Dongli–Dongzhu row or row 106 electrification explanation was found in the table checked for this subject.
  - id: tra-achievement
    title: Railway achievements
    titleOriginal: 臺鐵電氣化沿革及歷年建設
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-achievement-1
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator achievement page. Its Hualien–Taitung programme section records the 2008 approval, 4 December 2009 start and approximately 155.46 km/30-station scope; it does not define row 106's 2.1 km boundary.
  - id: tra-station-dongli
    title: Dongli Station information
    titleOriginal: 東里車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6100
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies station 6100 as Dongli (東里).
  - id: tra-station-dongzhu
    title: Dongzhu Station information
    titleOriginal: 東竹車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6090
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies station 6090 as Dongzhu (東竹).
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains current station 6100 Dongli (東里) and station 6090 Dongzhu (東竹).
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Dongli on EL at source sequence 53 with 259.5 km and Dongzhu at source sequence 54 with 265.5 km; the guide presents one-based positions 54 and 55 and calculates a 6.0 km endpoint-field difference.
---

## A recorded single-track subject, not a current route boundary

Taiwan Railways' complete construction-history PDF records row 106 as 東里─東竹,
Dongli–Dongzhu, at 2.1 km and explicitly marks it as single track.[^tra-construction-history]
The row names the Railway Reconstruction Bureau's Eastern Region Engineering Office
as constructor.[^tra-construction-history]

The aligned chronology gives 2012 in the construction-year field and 2013 in the
operation-start year field.[^tra-construction-history] Its explanation is
<span lang="zh-Hant">花東鐵路電氣化工程</span>, which the operator's English column
renders as `Hualien-Taitung railway electricification engineering`.[^tra-construction-history]
That is the work description recorded in the row; the checked PDF does not expand
it into a complete project contract, electrification package or surveyed boundary.[^tra-construction-history]

The operator's full current construction-history HTML table does not contain a
matching Dongli–Dongzhu row.[^tra-history-page] That omission is a coverage
difference between the current HTML presentation and the complete construction-
history PDF, not evidence that the PDF row did not exist.[^tra-history-page][^tra-construction-history]

## Programme context, kept separate

The operator's broader achievement page records the Hualien–Taitung railway
bottleneck double-tracking and full-line electrification programme as approved in
2008, formally started on 4 December 2009, and covering 30 stations over about
155.46 km.[^tra-achievement] Those are programme-level fields. The checked source
does not say that 155.46 km is row 106's distance or that its 2009 start date
replaces the row's 2012/2013 fields.[^tra-achievement][^tra-construction-history]

## Current station and TDX records

The current operator station pages identify Dongli as station 6100 and Dongzhu as
station 6090.[^tra-station-dongli][^tra-station-dongzhu] These are current passenger
station records and do not by themselves define the historical project boundary
or prove that the 2.1 km table value uses the same endpoints.[^tra-station-dongli][^tra-station-dongzhu][^tra-construction-history]

The committed TDX station pull contains current records for both station IDs,
including their current names and locations.[^tdx-tra-station] Those records
identify current station entries; they do not replace the operator's historical
project record.[^tdx-tra-station][^tra-construction-history]

In the committed TDX Eastern Main Line station-of-line data, Dongli is source
sequence 53 with a supplied travelled distance of 259.5 km and Dongzhu is source
sequence 54 with 265.5 km.[^tdx-tra-line] The guide presents them as one-based
positions 54 and 55 and calculates a 6.0 km difference by subtracting the supplied
endpoint fields.[^tdx-tra-line] No current station member intervenes in this
ordered pair, but the TDX interval is kept beside, rather than used to overwrite,
the operator's historical 2.1 km construction record.[^tdx-tra-line][^tra-construction-history]

## Records still missing

The checked primary sources do not provide row 106's surveyed 2.1 km engineering
boundary, exact construction/electrification/service-opening days, contract or
completion record, track arrangement during the work, or a complete definition of
the electrification scope.[^tra-construction-history][^tra-history-page]

The checked sources also do not explain whether the difference between the
historical 2.1 km and current TDX endpoint fields of 6.0 km comes from station
reference points, route definition or another measurement boundary.[^tdx-tra-line][^tra-construction-history]
Those fields remain TBC rather than being averaged or treated as one measurement.[^tdx-tra-line][^tra-construction-history]

The stable result is narrower: the operator records a 2.1 km Dongli–Dongzhu
single-track subject with 2012/2013 year fields and a Hualien–Taitung railway
electrification explanation, while current station and TDX records supply a
separate 6.0 km EL endpoint interval.[^tra-construction-history][^tra-station-dongli][^tra-station-dongzhu][^tdx-tra-line]
