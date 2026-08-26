---
title: The Taiwan Railways Hualien–Heping Construction Record
summary: The operator records Hualien–Heping as a 39.4 km project opened in 1979 after construction in 1978, while its historical and current tables disagree on the constructor and current TDX endpoints measure 39.6 km.
order: 26
updated: 2026-08-26
aliases:
  - 花蓮–和平
  - 花蓮和平線
  - Hualien–Heping
  - Hualien–Heping railway
facts:
  - label: Operator-record construction length
    value: 39.4
    unit: km
    source: tra-construction-history
  - label: Operator-record construction year
    value: 1978
    source: tra-construction-history
  - label: Operator-record operation-start year
    value: 1979
    source: tra-construction-history
  - label: Current operator Hualien station record
    value: Hualien (7000)
    source: tra-station-hualien
  - label: Current operator Heping station record
    value: Heping (7060)
    source: tra-station-heping
specs:
  - label: Historical PDF constructor
    value: Taiwan Railways Administration
    source: tra-construction-history
  - label: Current HTML constructor
    value: Taiwan Provincial Government
    source: tra-history-page
  - label: Hualien position in current TDX EL data
    value: 38
    unit: position
    source: tdx-tra-line
  - label: Heping position in current TDX EL data
    value: 32
    unit: position
    source: tdx-tra-line
  - label: Current TDX endpoint-field difference
    value: 39.6
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
    note: Full ten-page operator PDF. It lists row 55 as Hualien–Heping at 39.4 km with TRA as constructor; the aligned chronology gives 1978 construction and 1979 operation start.
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML table. It lists row 31 as Hualien–Heping at 39.4 km, but names Taiwan Provincial Government as constructor and gives 1978/1979 chronology.
  - id: tra-station-hualien
    title: Hualien Station information
    titleOriginal: 花蓮車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7000
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page identifying Hualien as station 7000 and supplying its current station information.
  - id: tra-station-heping
    title: Heping Station information
    titleOriginal: 和平車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7060
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page identifying Heping as station 7060 and supplying its current station information.
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平台)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains current station records for Hualien 7000 and Heping 7060, including names, addresses, station classes, coordinates and update time.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平台)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Heping 7060 at source sequence 31 with travelled distance 130.1 km and Hualien 7000 at source sequence 37 with travelled distance 169.7 km; the guide presents those as positions 32 and 38 and calculates a 39.6 km field difference.
---

## The historical values agree, but the constructor does not

Taiwan Railways' complete construction-history PDF lists row 55 as
Hualien–Heping at 39.4 km.[^tra-construction-history] The aligned chronology
gives that row 1978 as the construction year and 1979 as the operation-start
year.[^tra-construction-history] In that PDF's constructor column, the project
is attributed to Taiwan Railways Administration (TRA).[^tra-construction-history]

The current operator HTML table repeats the same Hualien–Heping name and the
same 39.4 km length.[^tra-history-page] It also repeats the 1978 construction
and 1979 operation-start years, but its constructor field says Taiwan
Provincial Government rather than TRA.[^tra-history-page] These are not two
different lengths to average; they are two operator presentations that agree
on the measurement and chronology while disagreeing on the named constructor.

The page therefore records the constructor disagreement explicitly. The
checked sources do not say whether the difference reflects an attribution
change, a transfer of responsibility, a table revision or a distinction
between construction authority and operating authority.[^tra-construction-history][^tra-history-page]

## Current station records and the TDX measurement layer

The current operator station pages identify Hualien as station 7000 and Heping
as station 7060.[^tra-station-hualien][^tra-station-heping] Those station pages
are current passenger-station records; they do not by themselves define the
historical construction boundary or prove that every intermediate route
element belongs to the 1978 project.[^tra-station-hualien][^tra-station-heping]

The committed TDX station-of-line pull places Heping at source sequence 31,
with a supplied travelled distance of 130.1 km, and Hualien at source sequence
37, with a supplied travelled distance of 169.7 km.[^tdx-tra-line] In the
guide's one-based presentation these are positions 32 and 38; subtracting the
two supplied endpoint fields gives 39.6 km.[^tdx-tra-line] That is a current
data-layer difference, not a replacement for the operator's historical 39.4
km record.[^tdx-tra-line][^tra-construction-history]

The TDX station pull also supplies current records for both station IDs,
including their names and locations.[^tdx-tra-station] It is useful for
identifying the endpoints that exist in the current passenger dataset, but it
does not establish the exact historical chainage, the construction contract,
or the boundary between the Hualien–Heping project and adjacent work.[^tdx-tra-station][^tdx-tra-line]

## Records still missing

The checked primary sources do not provide a surveyed 39.4 km engineering
boundary, a contract or completion certificate, the reason for the constructor
disagreement, or a current as-built track-count record.[^tra-construction-history][^tra-history-page]
They also do not establish whether the 39.6 km TDX endpoint-field difference
comes from rounding, measurement datum, route definition or another data
boundary.[^tdx-tra-line][^tra-construction-history] Those fields remain TBC.

The stable result is narrower and more useful: both operator tables expose a
39.4 km Hualien–Heping record with 1978 construction and 1979 operation, while
the constructor attribution is genuinely inconsistent and the current TDX
fields describe a nearby but distinct 39.6 km interval.[^tra-construction-history][^tra-history-page][^tdx-tra-line]
