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
  - id: wiki-yilan-expansion
    title: Yilan Line railway expansion project
    titleOriginal: 宜蘭線鐵路擴建工程
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/zh-tw/宜蘭線鐵路擴建工程
    accessed: 2026-08-29
    kind: secondary
    lang: zh-Hant
    note: "Fetched and re-verified directly. States this segment belonged to a named national programme, the 1974/1-1978/2 'Seven Bottleneck Sections Double-Track Improvement Project' (改善瓶頸七區間雙軌工程): 「四腳亭=瑞芳間4.7公里：本區間路線截彎取直，跨越基隆河二次，新建雙線『四瑞第一號橋』、『四瑞第二號橋』，並新鑿『四瑞第一隧道』（375公尺）、『四瑞第二隧道』（290公尺）。因隧道地質複雜且施工期間遭遇豪雨，工程進行困難，遲至1977年12月2日始完工通車，並廢棄舊線」— giving a 4.7 km scope (not the operator's own 5.8 km figure — see Conflicts), route straightening, two new Keelung River bridges, two new named tunnels, a rain-and-geology-caused delay, and completion 1977-12-02 with the old alignment abandoned. The article cites 交通年鑑 volumes and a 1979 中國時報 article for this passage, neither of which was independently fetched — this Wikipedia account is therefore reported as a lead consistent with the operator's own years, not as independently primary-confirmed for the engineering detail."
  - id: blog-siruifang-tunnels
    title: "放羊的狼: on the Sijiaoting–Ruifang tunnels"
    publisher: 放羊的狼 (blog)
    url: http://ivynimay.blogspot.com/2011/10/1001023.html
    accessed: 2026-08-29
    kind: secondary
    lang: zh-Hant
    note: "Enthusiast blog, a lead per this project's own rules on enthusiast material, fetched and re-checked directly. Gives different tunnel-length figures for the same two named tunnels — 「四瑞第一隧道全長365公尺，四瑞第二隧道全長為273公尺」— against 375 m/290 m in the Wikipedia account; see Conflicts. Its own stated construction dates, checked directly on re-fetch, actually agree with the Wikipedia/operator dating rather than conflicting with it: 「四腳亭至瑞芳的雙線工程，則於民國63年動工，民國66年完工通車」(1974 start, 1977 completion) — an earlier read of this same page reported a conflicting 1963-1966 date range attributed to a station plaque, which this direct re-fetch does not find; that earlier reading is not repeated here."
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

## Part of a named national programme

Secondary reporting places this segment inside a named seven-segment national double-tracking programme, the 改善瓶頸七區間雙軌工程 ("Seven Bottleneck Sections Double-Track Improvement Project"), running January 1974 to February 1978 — a dating consistent with, though not identical in scope to, the operator's own 1974/1977 years.[^wiki-yilan-expansion] That account gives this segment's scope as 4.7 km, describes route straightening across two Keelung River crossings, two new named bridges (四瑞第一號橋, 四瑞第二號橋) and two new named tunnels (四瑞第一隧道 at 375 m, 四瑞第二隧道 at 290 m), attributes construction difficulty to complex tunnel geology and heavy rainfall, and dates completion to 2 December 1977, with the old alignment abandoned.[^wiki-yilan-expansion] The 4.7 km figure differs from the operator's own 5.8 km construction-table scope; the two may be measuring different boundaries, and neither is discarded in favour of the other.[^wiki-yilan-expansion][^tra-construction-history]

An enthusiast source gives different lengths for the same two named tunnels — 「四瑞第一隧道全長365公尺，四瑞第二隧道全長為273公尺」— which is published as an unresolved conflict against the 375 m/290 m figures above.[^blog-siruifang-tunnels] That same source's own construction dates, checked directly, agree with the operator/Wikipedia 1974-1977 dating rather than conflicting with it.[^blog-siruifang-tunnels]

## Records still missing

The checked operator records provide the historical distance, constructor, years
and double-track explanation, but not the day and month of either milestone, the
contract or completion certificate, a surveyed centreline, the historical
boundary's engineering chainage or a current as-built track-count survey.[^tra-history-page][^tra-construction-history]
Those fields remain TBC. The current TDX 5.0 km endpoint-field difference is
reported alongside, rather than substituted for, the operator's 5.8 km
construction scope.[^tdx-tra-line][^tra-construction-history]
