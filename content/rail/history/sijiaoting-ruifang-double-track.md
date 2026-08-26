---
title: The Taiwan Railways Sijiaoting–Ruifang Double Track
summary: A 5.8 km TRA construction-history segment recorded in the operator's records as built in 1974 and opened in 1977 with an added second track, while current TDX data gives a separate 5.0 km endpoint-distance interval.
order: 23
updated: 2026-08-26
aliases:
  - 四腳亭–瑞芳(雙線)
  - Sijiaoting–Ruifang
  - Sijiaoting–Ruifang double track
facts:
  - label: Operator construction-history segment length
    value: 5.8
    unit: km
    source: tra-construction-history
  - label: Construction year in the operator records
    value: 1974
    source: tra-construction-history
  - label: Operation-start year in the operator records
    value: 1977
    source: tra-construction-history
  - label: Operator listed as constructor
    value: Taiwan Railways Administration
    source: tra-construction-history
  - label: Current operator Sijiaoting station record
    value: Sijiaoting (7380)
    source: tra-station-sijiaoting
  - label: Current operator Ruifang station record
    value: Ruifang (7360)
    source: tra-station-ruifang
specs:
  - label: Construction-table explanation
    value: Extended to be double-tracked
    source: tra-construction-history
  - label: Current TDX line membership
    value: Eastern Main Line (EL)
    source: tdx-tra-line
  - label: Current TDX ordered positions
    value: Sijiaoting 3; Ruifang 4
    source: tdx-tra-line
  - label: Current TDX endpoint distance difference
    value: 5.0
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
    note: Full ten-page operator PDF. Row 52 lists Sijiaoting–Ruifang (double track) as 5.8 km with TRA as constructor; the aligned chronology gives 1974 construction, 1977 operation start and 添築雙線.
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML page, marked last updated 2026-04-27. Row 29 lists Sijiaoting–Ruifang (double track) at 5.8 km, with 1974 construction, 1977 operation start and 添築雙線.
  - id: tra-station-sijiaoting
    title: Sijiaoting Station information
    titleOriginal: 四腳亭車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7380
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. It identifies current station 7380 as Sijiaoting and supplies its current station information.
  - id: tra-station-ruifang
    title: Ruifang Station information
    titleOriginal: 瑞芳車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7360
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. It identifies current station 7360 as Ruifang and supplies its current station information.
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平台)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains current station records for Sijiaoting 7380 and Ruifang 7360.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平台)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Sijiaoting at source sequence 2 and 3.9 km, and Ruifang at source sequence 3 and 8.9 km on EL; the content layer presents these as one-based positions 3 and 4.
---

## One historical double-track record

The full operator construction-history PDF identifies row 52 as 四腳亭–瑞芳(雙線),
Sijiaoting–Ruifang (double track), at 5.8 km, with Taiwan Railways
Administration as constructor.[^tra-construction-history] Its aligned chronology
gives 1974 as the construction year and 1977 as the operation-start year.[^tra-construction-history]
The explanation is 添築雙線, rendered by the operator as “Extended to be
double-tracked.”[^tra-construction-history]

The current operator HTML independently preserves the same record. Its row 29
lists Sijiaoting–Ruifang (double track) at 5.8 km, with 1974 construction, 1977
operation start and the same 添築雙線 explanation.[^tra-history-page] The two
operator presentations agree on the historical values even though their row
numbers differ.[^tra-history-page][^tra-construction-history] The table gives
years and a construction explanation, not exact day-level milestones or a
current as-built track-count survey.[^tra-history-page][^tra-construction-history]

## Current station and TDX records are a separate layer

The current operator station pages identify Sijiaoting as station 7380 and
Ruifang as station 7360.[^tra-station-sijiaoting][^tra-station-ruifang] The
committed TDX station pull contains the same two current station identities.[^tdx-tra-station]

TDX places both stations on the Eastern Main Line (EL).[^tdx-tra-line] In its
source sequence Sijiaoting is position 2 with a supplied travelled distance of
3.9 km, and Ruifang is position 3 at 8.9 km.[^tdx-tra-line] The guide presents
those as one-based positions 3 and 4.[^tdx-tra-line] Subtracting the supplied
endpoint fields gives 5.0 km. That is a current distance-field measure, not a
replacement for the operator's 5.8 km historical construction-table scope.[^tdx-tra-line][^tra-construction-history]

The current ordered TDX records make these two stations adjacent in the EL
snapshot.[^tdx-tra-line] That current ordering is useful for locating the
station records, but it does not by itself prove that the operator's historical
5.8 km construction boundary is identical to the current endpoint interval.[^tdx-tra-line][^tra-construction-history]

## Records still missing

The checked operator records provide the historical distance, constructor, years
and double-track explanation, but not the day and month of either milestone, the
contract or completion certificate, a surveyed centreline, the historical
boundary's engineering chainage or a current as-built track-count survey.[^tra-history-page][^tra-construction-history]
Those fields remain TBC. The current TDX 5.0 km endpoint-field difference is
reported alongside, rather than substituted for, the operator's 5.8 km
construction scope.[^tdx-tra-line][^tra-construction-history]
