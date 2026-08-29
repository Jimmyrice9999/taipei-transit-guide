---
title: The Taiwan Railways Sanmin Station Track Record
summary: The operator's historical PDF records a 2.1 km Sanmin Station subject with 2010 construction and 2017 operation-start fields and an Add track explanation; current TDX places Sanmin at Eastern Main Line position 52.
order: 54
updated: 2026-08-29
aliases:
  - 三民車站
  - 三民站增設股道
  - Sanmin Station track
  - Sanmin Station track addition
facts:
  - label: Operator row 119 distance
    value: 2.1
    unit: km
    source: tra-construction-history
  - label: Construction-year field
    value: 2010
    source: tra-construction-history
  - label: Operation-start year field
    value: 2017
    source: tra-construction-history
  - label: Operator-listed constructor
    value: Railway Reconstruction Bureau
    source: tra-construction-history
  - label: Recorded construction explanation
    value: Add track
    source: tra-construction-history
  - label: Current operator station
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
  - label: Sanmin TDX supplied travelled distance
    value: 241.9
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
    note: Full ten-page operator PDF. Row 119 records Sanmin Station at 2.1 km with the Railway Reconstruction Bureau as constructor; its aligned chronology gives 2010 and 2017 and records 增設股道 (Add track).
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML history table. No matching Sanmin Station row or row 119 track-addition explanation was found in the table checked for this subject.
  - id: tra-station-sanmin
    title: Sanmin Station information
    titleOriginal: 三民車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6120
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies station 6120 as Sanmin (三民).
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains current station 6120 Sanmin (三民), with its current station record.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Sanmin on EL at source sequence 51 with supplied travelled distance 241.9 km; the guide presents that as one-based position 52.
  - id: tra-achievement-page
    title: Railway achievements — electrification history
    titleOriginal: 臺鐵電氣化沿革及歷年建設
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-achievement-1
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: States the Hualien-Taitung bottleneck double-tracking and full-line electrification programme was reviewed by the Council for Economic Planning and Development on 18 February 2008 and directed by the Executive Yuan on 13 March 2008; construction began 4 December 2010, covering 30 stations over about 155.46 km from Hualien to Taitung. Does not name Sanmin, the Railway Reconstruction Bureau's four bottleneck sections, or row 119 specifically.
  - id: zhwiki-hualien-taitung-electrification
    title: Hualien-Taitung Railway Electrification (Wikipedia article)
    titleOriginal: 花東鐵路電氣化
    publisher: Wikimedia Foundation / Chinese Wikipedia
    url: https://zh.wikipedia.org/wiki/花東鐵路電氣化
    accessed: 2026-08-29
    kind: secondary
    lang: zh-Hant
    note: Names Ruisui-Sanmin as one of four named bottleneck double-tracking sections in this programme, gives an Executive Yuan approval date of 13 March 2009 (a year later than the operator's own 2008 date), and states the west main line through the new Ziqiang Tunnel opened 26 September 2017, matching row 119's 2017 field at year granularity but not confirmed as the same construction record.
  - id: zhwiki-ziqiang-tunnel-hualien
    title: Ziqiang Tunnel, Hualien County (Wikipedia article)
    titleOriginal: 自強隧道 (花蓮縣)
    publisher: Wikimedia Foundation / Chinese Wikipedia
    url: https://zh.wikipedia.org/wiki/自強隧道_(花蓮縣)
    accessed: 2026-08-29
    kind: secondary
    lang: zh-Hant
    note: States the new, double-track Ziqiang Tunnel between Wuhe Signal Station and Sanmin was built because the original single-track tunnel could not accommodate a second track or electrification clearances; gives a reported tunnel length of 2,676 m, which does not match row 119's 2.1 km figure — not established as measuring the same boundary.
---

## A recorded station-track subject

Taiwan Railways' complete construction-history PDF records row 119 as 三民車站,
Sanmin Station, at 2.1 km.[^tra-construction-history] The row names the Railway
Reconstruction Bureau as constructor.[^tra-construction-history]

The aligned chronology gives 2010 in the construction-year field and 2017 in the
operation-start field.[^tra-construction-history] Its explanation is
<span lang="zh-Hant">增設股道</span>, which the operator's English column renders as
`Add track`.[^tra-construction-history] That is the work description recorded in
the row; the checked PDF does not expand it into a track count, exact date,
contract, engineering boundary or detailed scope.[^tra-construction-history]

The operator's full current construction-history HTML table does not contain a
matching Sanmin Station row.[^tra-history-page] That omission is a coverage
difference between the current HTML presentation and the complete construction-
history PDF, not evidence that the PDF row did not exist.[^tra-history-page][^tra-construction-history]

## Current station and TDX records

The current operator station page identifies Sanmin as station 6120.[^tra-station-sanmin]
That is a current passenger-station identity and does not by itself define the
historical track work, its 2.1 km value or the project boundary.[^tra-station-sanmin][^tra-construction-history]

The committed TDX station pull contains the current 6120 Sanmin record, including
its current name and station fields.[^tdx-tra-station] Those fields identify the
current station entry; they do not replace the operator's historical station-work
record.[^tdx-tra-station][^tra-construction-history]

In the committed TDX Eastern Main Line station-of-line data, Sanmin is source
sequence 51 with a supplied travelled distance of 241.9 km.[^tdx-tra-line] The guide
presents it as one-based position 52.[^tdx-tra-line] The 241.9 km value is a current
line-position field, not a substitute for or a measurement to be combined with the
historical 2.1 km station subject.[^tdx-tra-line][^tra-construction-history]

## A possible, unconfirmed connection to a named programme

Row 119 names the Railway Reconstruction Bureau (鐵路改建工程局) as
constructor, an agency that existed until it merged into the current
Railway Bureau in June 2018.[^tra-construction-history] The operator's own
achievement page confirms that agency carried out a Hualien–Taitung
bottleneck double-tracking and full-line electrification programme,
covering about 155.46 km and 30 stations, construction beginning
4 December 2010 — the same construction-start year row 119
records.[^tra-achievement-page] That page does not name Sanmin, a specific
bottleneck section, or row 119 itself.[^tra-achievement-page]

A secondary source names Ruisui–Sanmin as one of four bottleneck sections
in that same programme, and states its west main line opened through a
newly built double-track tunnel on 26 September 2017 — matching row 119's
2017 operation-start field at year granularity.[^zhwiki-hualien-taitung-electrification]
The new tunnel is reported to have replaced a single-track tunnel that
could not fit a second track or electrification clearances, sitting
directly between Wuhe Signal Station and Sanmin.[^zhwiki-ziqiang-tunnel-hualien]

This page does not treat that match as a confirmed identity. No source
checked explicitly names row 119 as this tunnel project, and the tunnel's
reported 2,676 m length does not match row 119's 2.1 km
figure.[^zhwiki-ziqiang-tunnel-hualien] The two may describe different
boundaries of the same work, or different work entirely; either way, the
gap is not filled in. A secondary source also gives 13 March 2009 for the
programme's Executive Yuan approval, a year later than the operator's own
18 February/13 March 2008 dates — published as a conflict, not
resolved.[^tra-achievement-page][^zhwiki-hualien-taitung-electrification]

## Records still missing

The checked primary sources do not provide the exact track-addition or
commissioning day, the number or type of tracks, track geometry, contract or
completion record, surveyed boundary for the 2.1 km value, or a detailed work
scope for row 119.[^tra-construction-history][^tra-history-page]

The checked sources also do not explain the measurement purpose of the historical
2.1 km station value or provide a source-defined mapping between it and the current
TDX EL travelled-distance field of 241.9 km.[^tdx-tra-line][^tra-construction-history]
Those fields remain separate rather than being averaged, added or treated as one
measurement.[^tdx-tra-line][^tra-construction-history]

The stable result is narrower: the operator records a 2.1 km Sanmin Station
subject with 2010/2017 fields and an Add track explanation, while the current
operator and TDX records identify station 6120 at EL position 52 and 241.9 km.[^tra-construction-history][^tra-station-sanmin][^tdx-tra-line]
