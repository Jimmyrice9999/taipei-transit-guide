---
title: The Taiwan Railways Wuhe–Sanmin Single-track Record
summary: The operator's historical PDF records a 1.6 km Wuhe–Sanmin single-track subject with 2013 and 2013 year fields and a Hualien–Taitung railway electrification explanation; current TDX exposes Sanmin but no Wuhe endpoint record.
order: 39
updated: 2026-08-26
aliases:
  - 舞鶴─三民
  - 舞鶴—三民
  - Wuhe–Sanmin
  - Wuhe–Sanmin single track
facts:
  - label: Operator row 104 distance
    value: 1.6
    unit: km
    source: tra-construction-history
  - label: Historical track form
    value: single track
    source: tra-construction-history
  - label: Construction-year field
    value: 2013
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
  - label: Current operator Sanmin station
    value: Sanmin (6120)
    source: tra-station-sanmin
specs:
  - label: Current TDX line ID
    value: EL
    source: tdx-tra-line
  - label: Sanmin TDX one-based position
    value: 52
    unit: position
    source: tdx-tra-line
  - label: Ruisui TDX supplied travelled distance
    value: 232.5
    unit: km
    source: tdx-tra-line
  - label: Sanmin TDX supplied travelled distance
    value: 241.9
    unit: km
    source: tdx-tra-line
  - label: Yuli TDX supplied travelled distance
    value: 252.7
    unit: km
    source: tdx-tra-line
sources:
  - id: tra-construction-history
    title: Chronological History of Railroad Construction
    titleOriginal: 路線修築沿革
    publisher: National Taiwan Railways Corporation / former Taiwan Railways Administration (國營臺灣鐵路股份有限公司／臺灣鐵路管理局)
    url: https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full ten-page operator PDF. Row 104 records Wuhe–Sanmin as a 1.6 km single-track subject with the Railway Reconstruction Bureau's Eastern Region Engineering Office as constructor; its aligned chronology gives 2013 and 2013 and records Hualien–Taitung railway electrification engineering.
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML history table. No matching Wuhe–Sanmin row or row 104 electrification explanation was found in the table checked for this subject.
  - id: tra-achievement
    title: Railway achievements
    titleOriginal: 臺鐵電氣化沿革及歷年建設
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-achievement-1
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator achievement page. Its Hualien–Taitung programme section records the 2008 approval, 4 December 2009 start and approximately 155.46 km/30-station scope; it does not define row 104's 1.6 km boundary.
  - id: tra-station-sanmin
    title: Sanmin Station information
    titleOriginal: 三民車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6120
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies current station 6120 as Sanmin (三民).
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains current station 6120 Sanmin and no matching Wuhe / 舞鶴 station record.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Sanmin on EL at source sequence 51 with 241.9 km, between Ruisui at 232.5 km and Yuli at 252.7 km; no Wuhe member is present for a current endpoint interval.
---

## A recorded single-track subject, not a current route boundary

Taiwan Railways' complete construction-history PDF records row 104 as 舞鶴─三民,
Wuhe–Sanmin, at 1.6 km and explicitly marks it as single track.[^tra-construction-history]
The row names the Railway Reconstruction Bureau's Eastern Region Engineering Office
as constructor.[^tra-construction-history]

The aligned chronology gives 2013 in the construction-year field and 2013 in the
operation-start year field.[^tra-construction-history] Its explanation is
<span lang="zh-Hant">花東鐵路電氣化工程</span>, which the operator's English column
renders as `Hualien-Taitung railway electricification engineering`.[^tra-construction-history]
That is the work description recorded in the row; the checked PDF does not expand
it into a complete project contract, electrification package or surveyed boundary.[^tra-construction-history]

The operator's full current construction-history HTML table does not contain a
matching Wuhe–Sanmin row.[^tra-history-page] That omission is a coverage difference
between the current HTML presentation and the complete construction-history PDF,
not evidence that the PDF row did not exist.[^tra-history-page][^tra-construction-history]

## Programme context, kept separate

The operator's broader achievement page records the Hualien–Taitung railway
bottleneck double-tracking and full-line electrification programme as approved in
2008, formally started on 4 December 2009, and covering 30 stations over about
155.46 km.[^tra-achievement] Those are programme-level fields. The checked source
does not say that 155.46 km is row 104's distance or that its 2009 start date
replaces the row's 2013/2013 fields.[^tra-achievement][^tra-construction-history]

## Current station and TDX records

The current operator station page identifies Sanmin as station 6120.[^tra-station-sanmin]
The current TDX station pull contains station 6120 with the current Sanmin name and
record fields, but no station whose English or Traditional Chinese name matches
Wuhe or 舞鶴.[^tdx-tra-station] The historical Wuhe endpoint therefore remains a
historical place label in this record, not an invented current station identity.

On the committed TDX Eastern Main Line record, Sanmin is source sequence 51 with a
supplied travelled distance of 241.9 km; Ruisui is sequence 50 at 232.5 km and Yuli
is sequence 52 at 252.7 km.[^tdx-tra-line] The guide presents Sanmin as one-based
position 52.[^tdx-tra-line] Because no current Wuhe member is present, the data
does not define a current Wuhe–Sanmin endpoint difference.[^tdx-tra-line]

## Records still missing

The checked primary sources do not provide row 104's surveyed 1.6 km engineering
boundary, exact construction/electrification/service-opening days, contract or
completion record, track arrangement during the work, or a complete definition of
the electrification scope.[^tra-construction-history][^tra-history-page]

The checked sources also do not explain whether Wuhe is represented today under a
different station identity, a non-station location, or no current TDX member at
all.[^tdx-tra-station][^tdx-tra-line] The historical 1.6 km field is therefore
kept beside, rather than converted into, current Sanmin's 241.9 km EL field.[^tra-construction-history][^tdx-tra-line]

The stable result is narrower: the operator records a 1.6 km Wuhe–Sanmin
single-track subject with 2013/2013 year fields and a Hualien–Taitung railway
electrification explanation, while current station and TDX records expose Sanmin
6120 and its surrounding EL sequence without a source-defined Wuhe endpoint.[^tra-construction-history][^tra-station-sanmin][^tdx-tra-station][^tdx-tra-line]
