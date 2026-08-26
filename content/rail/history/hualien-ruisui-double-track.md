---
title: The Taiwan Railways Hualien–Ruisui Double-track Record
summary: The operator records Hualien–Ruisui as a 70.5 km Railway Reconstruction Bureau project built in 1987 and opened in 1994 with double-tracking; current TDX endpoint fields measure 62.8 km.
order: 30
updated: 2026-08-26
aliases:
  - 花蓮–瑞穗
  - 花蓮瑞穗雙線
  - Hualien–Ruisui
  - Hualien–Ruisui double track
facts:
  - label: Operator-record construction length
    value: 70.5
    unit: km
    source: tra-construction-history
  - label: Operator-record construction year
    value: 1987
    source: tra-construction-history
  - label: Operator-record operation-start year
    value: 1994
    source: tra-construction-history
  - label: Current operator Hualien station record
    value: Hualien (7000)
    source: tra-station-hualien
  - label: Current operator Ruisui station record
    value: Ruisui (6130)
    source: tra-station-ruisui
specs:
  - label: Recorded constructor
    value: Railway Reconstruction Bureau, Eastern Region Engineering Office
    source: tra-construction-history
  - label: Recorded works
    value: Extended to be double-tracked
    source: tra-construction-history
  - label: Hualien position in current TDX EL data
    value: 38
    unit: position
    source: tdx-tra-line
  - label: Ruisui position in current TDX EL data
    value: 51
    unit: position
    source: tdx-tra-line
  - label: Current TDX endpoint-field difference
    value: 62.8
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
    note: Full ten-page operator PDF. It lists row 92 as Hualien–Ruisui at 70.5 km with the Railway Reconstruction Bureau Eastern Region Engineering Office as constructor; the aligned chronology gives 1987 construction, 1994 operation start and an explanation that the section was extended to be double-tracked.
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML table. Its current table includes nearby Hualien–Heping and Hualien–Taitung records but no Hualien–Ruisui row, so it is used as a coverage-boundary record rather than confirmation of row 92.
  - id: tra-station-hualien
    title: Hualien Station information
    titleOriginal: 花蓮車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7000
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page identifying Hualien as station 7000 and supplying current station information.
  - id: tra-station-ruisui
    title: Ruisui Station information
    titleOriginal: 瑞穗站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6130
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page identifying Ruisui as station 6130 and supplying its current station information.
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains current station records for Hualien 7000 and Ruisui 6130, including names, addresses, station classes, coordinates and update time.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Hualien 7000 at EL source sequence 37 with travelled distance 169.7 km and Ruisui 6130 at source sequence 50 with 232.5 km; the guide presents those as positions 38 and 51 and calculates a 62.8 km field difference.
---

## A recorded double-track project, not a new route identity

Taiwan Railways' complete construction-history PDF lists row 92 as
Hualien–Ruisui, with a distance of 70.5 km.[^tra-construction-history] The
constructor field names the Railway Reconstruction Bureau's Eastern Region
Engineering Office.[^tra-construction-history] The aligned chronology gives
1987 as the construction year and 1994 as the operation-start year.[^tra-construction-history]

The explanation for the row says 添築雙線, translated in the operator PDF as
an extension to double track.[^tra-construction-history] That is the operator's
recorded work category. The page does not turn it into a claim that every
present-day track element between the two station records has the same
construction history.[^tra-construction-history]

The current operator's full HTML history table does not contain a
Hualien–Ruisui row.[^tra-history-page] That omission is a coverage difference
between the current HTML presentation and the older full construction-history
PDF, not evidence that the PDF row did not exist.[^tra-construction-history][^tra-history-page]

## Current station identities and the TDX measurement layer

The current operator station pages identify Hualien as station 7000 and Ruisui
as station 6130.[^tra-station-hualien][^tra-station-ruisui] These are current
passenger-station records and do not by themselves define the historical
project boundary or prove the as-built state of each intervening structure.[^tra-station-hualien][^tra-station-ruisui]

The committed TDX station pull contains current records for both station IDs,
including their names and locations.[^tdx-tra-station] Those records identify
current station entries; they do not replace the operator's historical project
record.[^tdx-tra-station][^tra-construction-history]

In the committed TDX Eastern Line station-of-line data, Hualien is source
sequence 37 with a supplied travelled distance of 169.7 km, while Ruisui is
source sequence 50 with 232.5 km.[^tdx-tra-line] The guide presents those as
one-based positions 38 and 51 and calculates a 62.8 km difference by
subtracting the supplied fields.[^tdx-tra-line] That current data-layer
interval is kept beside, rather than used to overwrite, the operator's
historical 70.5 km construction record.[^tdx-tra-line][^tra-construction-history]

## Records still missing

The checked primary sources do not provide a surveyed 70.5 km engineering
boundary, contract package, completion certificate, detailed track-by-track
sequence or current as-built inventory for this row.[^tra-construction-history][^tra-history-page]
The operator PDF records the double-track work category but does not specify
the individual structures or the complete civil-work package in the row.[^tra-construction-history]

The checked sources also do not explain whether the 7.7 km difference between
the historical operator length and current TDX endpoint fields comes from
rounding, route definition, station reference points or another measurement
boundary.[^tdx-tra-line][^tra-construction-history] Those fields remain TBC.

The stable result is narrower: the operator records a 70.5 km Hualien–Ruisui
project built in 1987 and opened in 1994 with an extension to double track,
while the current data layer supplies a separate 62.8 km EL endpoint interval.[^tra-construction-history][^tdx-tra-line]
