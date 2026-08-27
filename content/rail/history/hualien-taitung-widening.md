---
title: The Taiwan Railways Hualien–Taitung Widening Record
summary: The operator records the Hualien–Taitung widening as a 162.2 km project opened in 1982 after work in 1978, while current TDX endpoint fields cover 150.9 km between Hualien and Taitung.
order: 28
updated: 2026-08-27
aliases:
  - 花蓮–臺東拓寬
  - 花蓮臺東拓寬
  - Hualien–Taitung widening
  - Hualien–Taitung railway widening
facts:
  - label: Operator-record widening length
    value: 162.2
    unit: km
    source: tra-construction-history
  - label: Operator-record widening year
    value: 1978
    source: tra-construction-history
  - label: Operator-record operation-start year
    value: 1982
    source: tra-construction-history
  - label: Archived Ji'an widening milestone
    value: 20 June 1982
    source: archives-jian-gauge
  - label: Current operator Hualien station record
    value: Hualien (7000)
    source: tra-station-hualien
  - label: Current operator Taitung station record
    value: Taitung (6000)
    source: tra-station-taitung
specs:
  - label: Operator-record constructor
    value: Taiwan Provincial Government
    source: tra-construction-history
  - label: Operator-record explanation
    value: Eastern Line widening
    source: tra-construction-history
  - label: Hualien position in current TDX EL data
    value: 38
    unit: position
    source: tdx-tra-line
  - label: Taitung position in current TDX EL data
    value: 64
    unit: position
    source: tdx-tra-line
  - label: Current TDX endpoint-field difference
    value: 150.9
    unit: km
    source: tdx-tra-line
  - label: Archived widening work description
    value: Five-fen track replaced by narrow gauge; route redrawn; old stations retired; new stations built
    source: archives-jian-gauge
sources:
  - id: tra-construction-history
    title: Chronological History of Railroad Construction
    titleOriginal: 路線修築沿革
    publisher: National Taiwan Railways Corporation / former Taiwan Railways Administration (國營臺灣鐵路股份有限公司／臺灣鐵路管理局)
    url: https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full ten-page operator PDF. It lists row 58 as Hualien–Taitung widening at 162.2 km with Taiwan Provincial Government as constructor; the aligned chronology gives 1978 work and 1982 operation start, with 東線拓寬 (Eastern Line widening).
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML table. It lists row 33 as Hualien–Taitung widening at 162.2 km with Taiwan Provincial Government, 1978 construction, 1982 operation start and the Eastern Line widening explanation.
  - id: tra-station-hualien
    title: Hualien Station information
    titleOriginal: 花蓮車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7000
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page identifying Hualien as station 7000 and supplying its current station information.
  - id: tra-station-taitung
    title: Taitung Station information
    titleOriginal: 臺東車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6000
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page identifying Taitung as station 6000 and supplying its current station information.
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平台)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains current station records for Hualien 7000 and Taitung 6000, including names, addresses, station classes, coordinates and update time.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平台)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Hualien 7000 at source sequence 37 with travelled distance 169.7 km and Taitung 6000 at source sequence 63 with travelled distance 320.6 km on EL; the guide presents those as positions 38 and 64 and calculates a 150.9 km field difference.
  - id: archives-east-gauge
    title: East Line gauge-widening project
    titleOriginal: 東線鐵路拓寬案
    publisher: National Archives Administration, National Development Council (國家發展委員會檔案管理局)
    url: https://art.archives.gov.tw/tw/art/382-10997.html
    accessed: 2026-08-27
    kind: secondary
    lang: zh-Hant
    note: "The full archival presentation identifies the source agency as Taiwan Railways Administration and says the Hualien–Taitung railway remained 762 mm until the East Line widening began in 1978 and completed in 1982."
  - id: archives-jian-gauge
    title: 2026 archival research and cultural selection — Taiwan Railway project image
    titleOriginal: 強『檔』出擊─2026檔案研究及文創徵選活動
    publisher: National Archives Administration, National Development Council (國家發展委員會檔案管理局)
    url: https://www.archives.gov.tw/wSite/public/Attachment/001/f1772517989625.pdf
    accessed: 2026-08-27
    kind: secondary
    lang: zh-Hant
    note: "The full six-page archival catalogue describes a 20 June 1982 completed Ji'an station and defines the widening works as changing the five-fen track to narrow gauge, rerouting the railway, retiring old stations and building new ones."
---

## The operator calls this a widening, not a new route

Taiwan Railways' complete construction-history PDF lists row 58 as
Hualien–Taitung at 162.2 km.[^tra-construction-history] The row is marked as
an Eastern Line widening, and the aligned chronology gives 1978 as the work
year and 1982 as the operation-start year.[^tra-construction-history] The
constructor field names Taiwan Provincial Government.[^tra-construction-history]

The current operator HTML table repeats the Hualien–Taitung widening at 162.2
km and gives the same 1978/1982 chronology, constructor and Eastern Line
widening explanation.[^tra-history-page] This agreement is narrower than a
claim that every physical or administrative boundary of the widening is known:
the tables provide a named project record, not a surveyed engineering file or
a complete statement of what was widened.[^tra-construction-history][^tra-history-page]

The term “widening” is retained as the operator's own explanation. The page
does not turn it into an unsupported claim that the whole route changed from
one track to two, because the checked row does not state a complete track-count
transition or identify every civil-work package.[^tra-construction-history]

## Current station records and the TDX measurement layer

The current operator station pages identify Hualien as station 7000 and Taitung
as station 6000.[^tra-station-hualien][^tra-station-taitung] These are current
passenger-station records and do not by themselves define the 1978 widening
boundary or prove which construction components the 162.2 km figure covers.[^tra-station-hualien][^tra-station-taitung]

## What the archive adds to the gauge boundary

The operator's current route-history page defines TRA's gauge example as
1,067 mm and separately gives 762 mm for the Alishan Forest Railway.[^tra-history-page]
The National Archives' full East Line presentation identifies the source agency
as the Taiwan Railways Administration and says the Hualien–Taitung railway
remained 762 mm until the widening project began in 1978 and was completed in
1982.[^archives-east-gauge]

A separate full archival catalogue records Ji'an station as complete on 20 June
1982 and describes the widening work as replacing the five-fen track with narrow
gauge, redrawing the route, retiring old stations and building new ones.[^archives-jian-gauge]
That makes the conversion mechanism and the station-and-alignment consequences
explicit for this recorded milestone. Because the catalogue description calls
the target only "narrow gauge", the numeric reading of the target as TRA's
1,067 mm is an inference from the operator's gauge terminology, not a substitute
for a segment-level engineering register.[^tra-history-page][^archives-jian-gauge]

The committed TDX station-of-line pull places Hualien at source sequence 37,
with a supplied travelled distance of 169.7 km, and Taitung at source sequence
63, with a supplied travelled distance of 320.6 km on EL.[^tdx-tra-line] In the
guide's one-based presentation these are positions 38 and 64; subtracting the
two fields gives 150.9 km.[^tdx-tra-line] That current interval is kept beside,
not substituted for, the operator's 162.2 km widening record.[^tdx-tra-line][^tra-construction-history]

The TDX station pull contains current records for both station IDs, including
their names and locations.[^tdx-tra-station] TDX also exposes Taitung in more
than one line-family record; this page uses the EL record because the operator
project is the Hualien–Taitung Eastern Line widening, and does not merge the
other line-family distance into this calculation.[^tdx-tra-line]

## Records still missing

The checked primary sources do not provide a surveyed 162.2 km engineering
boundary, a contract or completion certificate, the exact widening works, a
complete track-count transition or a current as-built boundary.[^tra-construction-history][^tra-history-page]
The archive catalogue now supplies a work description for the Ji'an milestone,
but it does not provide a complete numeric gauge schedule for every section.
They also do not explain whether the 150.9 km TDX field difference is caused by
rounding, measurement datum, route definition, the operator's project scope or
another boundary.[^tdx-tra-line][^tra-construction-history] Those fields remain
TBC.

The stable result is therefore specific: both operator tables record a 162.2
km Hualien–Taitung Eastern Line widening with 1978 work and 1982 operation,
while current TDX EL fields describe a separate 150.9 km interval between the
current endpoint records.[^tra-construction-history][^tra-history-page][^tdx-tra-line]
