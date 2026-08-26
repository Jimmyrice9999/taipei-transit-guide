---
title: The Taiwan Railways Songshan–Nangang Underground Record
summary: The operator records Songshan–Nangang as a 7.7 km Railway Reconstruction Bureau project built in 1998 and opened in 2008 as railway underground; current TDX endpoint fields measure 2.8 km.
order: 33
updated: 2026-08-26
aliases:
  - 松山–南港地下化
  - 松山南港地下化
  - Songshan–Nangang underground
  - Songshan–Nangang railway underground
facts:
  - label: Operator-record construction length
    value: 7.7
    unit: km
    source: tra-construction-history
  - label: Operator-record construction year
    value: 1998
    source: tra-construction-history
  - label: Operator-record operation-start year
    value: 2008
    source: tra-construction-history
  - label: Current operator Songshan station reference
    value: Songshan (0990)
    source: tra-station-songshan
  - label: Current operator Nangang station reference
    value: Nangang (0980)
    source: tra-station-nangang
specs:
  - label: Recorded constructor
    value: Railway Reconstruction Bureau
    source: tra-construction-history
  - label: Recorded works
    value: Railway underground
    source: tra-construction-history
  - label: Nangang position in current TDX WL data
    value: 9
    unit: position
    source: tdx-tra-line
  - label: Songshan position in current TDX WL data
    value: 10
    unit: position
    source: tdx-tra-line
  - label: Current TDX endpoint-field difference
    value: 2.8
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
    note: Full ten-page operator PDF. Row 96 lists Songshan–Nangang as 7.7 km and names the Railway Reconstruction Bureau; the aligned chronology gives 1998 construction, 2008 operation start and 鐵路地下化 (railway underground).
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML history table. It supplies the current route-history presentation but does not repeat a Songshan–Nangang underground row matching PDF row 96.
  - id: tra-station-songshan
    title: Songshan Station information
    titleOriginal: 松山站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/0990
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station-information page for the 0990 Songshan station record.
  - id: tra-station-nangang
    title: Nangang Station information
    titleOriginal: 南港站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/0980
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station-information page for the 0980 Nangang station record.
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平台)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains current station records for 0980 南港 and 0990 松山, including their current names, addresses, administrative districts, classes and coordinates.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平台)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Nangang at WL source sequence 8 with travelled distance 19.3 km and Songshan at source sequence 9 with 22.1 km; the guide presents those as one-based positions 9 and 10 and calculates their 2.8 km field difference.
---

## A recorded underground project, not a new current route identity

Taiwan Railways' complete construction-history PDF lists row 96 as
Songshan–Nangang, with a distance of 7.7 km.[^tra-construction-history] The
constructor field names the Railway Reconstruction Bureau.[^tra-construction-history]
The rendered places table was checked against the chronology table on the
following page: row 96 aligns with 1998 as the construction year and 2008 as
the operation-start year.[^tra-construction-history]

The explanation attached to that chronology row is 鐵路地下化, rendered by the
operator's bilingual table as railway underground.[^tra-construction-history]
That is the work description attached to this historical record. It is not
expanded here into claims about the tunnel's exact portals, station depths,
track arrangement or every civil-work package, because the checked row does
not provide those details.[^tra-construction-history]

The current operator's full HTML history table does not contain a matching
Songshan–Nangang underground row.[^tra-history-page] That is a coverage
difference between two operator presentations, not evidence that the PDF row
did not exist.[^tra-construction-history][^tra-history-page]

## Current station identities and the TDX measurement layer

The current operator station-information pages provide the 0990 Songshan and
0980 Nangang station records.[^tra-station-songshan][^tra-station-nangang] The
committed TDX station pull likewise contains current records for both IDs and
their current names.[^tdx-tra-station] These are current passenger-station
identities; they do not by themselves define the historical project's surveyed
boundary or prove the as-built state of every intervening structure.[^tdx-tra-station][^tra-construction-history]

In the committed TDX Western Main Line station-of-line data, Nangang is source
sequence 8 with a supplied travelled distance of 19.3 km, and Songshan is
source sequence 9 with 22.1 km.[^tdx-tra-line] The guide presents those as
one-based positions 9 and 10 and calculates a 2.8 km difference by subtracting
the supplied fields.[^tdx-tra-line] This current data-layer interval is kept
beside, rather than used to overwrite, the operator's historical 7.7 km
construction record.[^tdx-tra-line][^tra-construction-history]

The sequence also records Nangang immediately before Songshan in the ordered
WL dataset.[^tdx-tra-line] That is an adjacency statement about the TDX
ordering, not a claim about the stopping pattern of a particular train or the
direction in which a service runs.[^tdx-tra-line]

## Records still missing

The checked primary sources do not provide a surveyed 7.7 km engineering
boundary, tunnel portals, station relocation or depth schedule, contract,
completion certificate, detailed structures, or a current as-built inventory
for this row.[^tra-construction-history][^tra-history-page][^tra-station-songshan][^tra-station-nangang]
The PDF identifies the project as railway underground but does not break out
which portions, facilities or construction packages are included in that
description.[^tra-construction-history]

The checked sources also do not explain whether the 4.9 km difference between
the historical operator length and current TDX endpoint fields comes from
rounding, route definition, station reference points or another measurement
boundary.[^tdx-tra-line][^tra-construction-history] Those fields remain TBC.

The stable result is narrower: the operator records a 7.7 km Songshan–Nangang
project built in 1998 and opened in 2008 as railway underground, while the
current data layer supplies a separate 2.8 km WL endpoint interval.[^tra-construction-history][^tdx-tra-line]
