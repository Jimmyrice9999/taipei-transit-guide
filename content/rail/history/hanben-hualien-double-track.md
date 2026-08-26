---
title: The Taiwan Railways Hanben–Hualien Double-track Record
summary: The operator records Hanben–Hualien as a 42.5 km Railway Reconstruction Bureau project built in 1992 and opened in 2003 with double-tracking, electrification, heavier rail and PC sleepers; current TDX endpoint fields measure 44.0 km.
order: 29
updated: 2026-08-26
aliases:
  - 漢本–花蓮
  - 漢本花蓮雙線
  - Hanben–Hualien
  - Hanben–Hualien double track
facts:
  - label: Operator-record construction length
    value: 42.5
    unit: km
    source: tra-construction-history
  - label: Operator-record construction year
    value: 1992
    source: tra-construction-history
  - label: Operator-record operation-start year
    value: 2003
    source: tra-construction-history
  - label: Current operator Hanben station record
    value: Hanben (7070)
    source: tra-station-hanben
  - label: Current operator Hualien station record
    value: Hualien (7000)
    source: tra-station-hualien
specs:
  - label: Recorded constructor
    value: Railway Reconstruction Bureau, Eastern Region Engineering Office
    source: tra-construction-history
  - label: Recorded works
    value: Double-tracking, electrification, heavier rail and PC sleepers
    source: tra-construction-history
  - label: Hanben position in current TDX EL data
    value: 31
    unit: position
    source: tdx-tra-line
  - label: Hualien position in current TDX EL data
    value: 38
    unit: position
    source: tdx-tra-line
  - label: Current TDX endpoint-field difference
    value: 44.0
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
    note: Full ten-page operator PDF. It lists row 91 as Hanben–Hualien at 42.5 km with the Railway Reconstruction Bureau Eastern Region Engineering Office as constructor; the aligned chronology gives 1992 construction, 2003 operation start and double-tracking, electrification, heavier rail and PC sleepers.
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML table. Its current table has no Hanben–Hualien row, so it is used as a coverage-boundary record rather than as confirmation of row 91.
  - id: tra-timeline
    title: Taiwan Railways chronology, 1966–1998
    titleOriginal: 66年～98年大事紀要表
    publisher: National Taiwan Railways Corporation / former Taiwan Railways Administration (國營臺灣鐵路股份有限公司／臺灣鐵路管理局)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-timeline?selectIndex=17
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full operator chronology. It records the East Line widening beginning at Nanhua in 1978 and the North Link signalling milestones; it does not replace the row 91 project record.
  - id: president-north-link
    title: President attends the opening ceremony for East Railway Improvement Project North Link electrification
    titleOriginal: 總統參加「東部鐵路改善計畫北迴線電氣化」通車典禮
    publisher: Office of the President, Republic of China (Taiwan) (中華民國總統府)
    url: https://www.president.gov.tw/NEWS/154
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full official ceremony record dated 4 July 2003. It says North Link electrification formally opened and thanks the Railway Reconstruction Bureau and its Eastern Region Engineering Office; it does not define the 42.5 km row 91 boundary.
  - id: tra-station-hanben
    title: Hanben Station information
    titleOriginal: 漢本站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7070
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page identifying Hanben as station 7070 and supplying current station information.
  - id: tra-station-hualien
    title: Hualien Station information
    titleOriginal: 花蓮車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7000
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page identifying Hualien as station 7000 and supplying current station information.
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains current station records for Hanben 7070 and Hualien 7000, including names, addresses, station classes, coordinates and update time.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Hanben 7070 at EL source sequence 30 with travelled distance 125.7 km and Hualien 7000 at source sequence 37 with travelled distance 169.7 km; the guide presents those as positions 31 and 38 and calculates a 44.0 km field difference.
---

## A recorded reconstruction project, not a new route identity

Taiwan Railways' complete construction-history PDF lists row 91 as
Hanben–Hualien, with a distance of 42.5 km.[^tra-construction-history] The
constructor field names the Railway Reconstruction Bureau's Eastern Region
Engineering Office.[^tra-construction-history] The aligned chronology gives
1992 as the construction year and 2003 as the operation-start year.[^tra-construction-history]

The same row records more than a generic line opening: its explanation says
the works extended the section to double track and electrification, laid
heavier rail and used PC sleepers.[^tra-construction-history] Those are the
operator's recorded work categories. The page does not turn them into a claim
that every present-day track element between the two station records has the
same construction history.[^tra-construction-history]

The current operator's full HTML history table does not contain a
Hanben–Hualien row.[^tra-history-page] That omission is a coverage difference
between the current HTML presentation and the older full construction-history
PDF, not evidence that the PDF row did not exist.[^tra-construction-history][^tra-history-page]

## The 2003 opening record and project context

The Office of the President's full ceremony record is dated 4 July 2003 and
describes North Link electrification as formally completed and opened.[^president-north-link]
It thanks the Railway Reconstruction Bureau and its Eastern Region Engineering
Office for carrying out the work.[^president-north-link] This is consistent with
the row 91 chronology ending in 2003 and its constructor field, but the ceremony
record does not redraw the 42.5 km project boundary.[^tra-construction-history][^president-north-link]

The operator's chronology separately records the East Line widening beginning
at Nanhua in 1978.[^tra-timeline] That earlier milestone is not substituted for
the later Hanben–Hualien row: the source table assigns row 91 its own 1992–2003
construction and operation interval.[^tra-construction-history][^tra-timeline]

## Current station identities and the TDX measurement layer

The current operator station pages identify Hanben as station 7070 and Hualien
as station 7000.[^tra-station-hanben][^tra-station-hualien] The committed TDX
station pull also contains current records for both station IDs.[^tdx-tra-station]
These records identify current passenger-station entries; they do not by
themselves define the historical project boundary or prove the as-built state
of each intervening structure.[^tdx-tra-station][^tra-construction-history]

In the committed TDX Eastern Line station-of-line data, Hanben is source
sequence 30 with a supplied travelled distance of 125.7 km, while Hualien is
source sequence 37 with 169.7 km.[^tdx-tra-line] The guide presents those as
one-based positions 31 and 38 and calculates a 44.0 km difference by subtracting
the supplied fields.[^tdx-tra-line] That current data-layer interval is kept
beside, rather than used to overwrite, the operator's historical 42.5 km
construction record.[^tdx-tra-line][^tra-construction-history]

## Records still missing

The checked primary sources do not provide a surveyed 42.5 km engineering
boundary, contract package, completion certificate, detailed track-by-track
sequence or current as-built inventory for this row.[^tra-construction-history][^tra-history-page]
They also do not explain whether the 1.5 km difference between the operator's
historical length and the current TDX endpoint fields comes from rounding,
route definition, station reference points or another measurement boundary.[^tdx-tra-line][^tra-construction-history]
Those fields remain TBC.

The stable result is narrower: the operator records a 42.5 km Hanben–Hualien
project built in 1992 and opened in 2003 with double-tracking, electrification,
heavier rail and PC sleepers, while the current data layer supplies a separate
44.0 km EL endpoint interval.[^tra-construction-history][^tdx-tra-line]
