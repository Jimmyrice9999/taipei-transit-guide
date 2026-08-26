---
title: The Taiwan Railways Heping–Su'aoxin Construction Record
summary: The operator records Heping–Su'aoxin as a 39.8 km project opened in 1980 after construction in 1973, while its historical and current tables disagree on the constructor and current TDX endpoints measure 39.9 km.
order: 27
updated: 2026-08-26
aliases:
  - 和平–蘇澳新
  - 和平蘇澳新線
  - Heping–Su'aoxin
  - Heping–Su'aoxin railway
facts:
  - label: Operator-record construction length
    value: 39.8
    unit: km
    source: tra-construction-history
  - label: Operator-record construction year
    value: 1973
    source: tra-construction-history
  - label: Operator-record operation-start year
    value: 1980
    source: tra-construction-history
  - label: Current operator Heping station record
    value: Heping (7060)
    source: tra-station-heping
  - label: Current operator Su'aoxin station record
    value: Su'aoxin (7130)
    source: tra-station-su-aoxin
specs:
  - label: Historical PDF constructor
    value: Taiwan Railways Administration
    source: tra-construction-history
  - label: Current HTML constructor
    value: Taiwan Provincial Government
    source: tra-history-page
  - label: Heping position in current TDX EL data
    value: 32
    unit: position
    source: tdx-tra-line
  - label: Su'aoxin position in current TDX EL data
    value: 26
    unit: position
    source: tdx-tra-line
  - label: Current TDX endpoint-field difference
    value: 39.9
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
    note: Full ten-page operator PDF. It lists row 56 as Heping–Su'aoxin Station at 39.8 km with TRA as constructor; the aligned chronology gives 1973 construction and 1980 operation start.
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML table. It lists row 32 as Heping–Su'aoxin Station at 39.8 km, but names Taiwan Provincial Government as constructor and gives 1973/1980 chronology.
  - id: tra-station-heping
    title: Heping Station information
    titleOriginal: 和平車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7060
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page identifying Heping as station 7060 and supplying its current station information.
  - id: tra-station-su-aoxin
    title: Su'aoxin Station information
    titleOriginal: 蘇澳新車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7130
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page identifying Su'aoxin as station 7130 and supplying its current station information.
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平台)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains current station records for Heping 7060 and Su'aoxin 7130, including names, addresses, station classes, coordinates and update time.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平台)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Su'aoxin 7130 at source sequence 25 with travelled distance 90.2 km and Heping 7060 at source sequence 31 with travelled distance 130.1 km; the guide presents those as positions 26 and 32 and calculates a 39.9 km field difference.
---

## The historical values agree, but the constructor does not

Taiwan Railways' complete construction-history PDF lists row 56 as
Heping–Su'aoxin Station at 39.8 km.[^tra-construction-history] The aligned
chronology gives that row 1973 as the construction year and 1980 as the
operation-start year.[^tra-construction-history] The PDF's constructor column
attributes the project to Taiwan Railways Administration (TRA).[^tra-construction-history]

The current operator HTML table repeats the Heping–Su'aoxin name and the same
39.8 km length.[^tra-history-page] It also gives the same 1973 construction
and 1980 operation-start years, but its constructor field says Taiwan
Provincial Government rather than TRA.[^tra-history-page] The stable numerical
agreement should not hide this attribution conflict: the checked operator
presentations give different answers to who the constructor was.

The page does not choose between those fields. The sources do not explain
whether the difference reflects a change in attribution, a transfer of
responsibility, a table revision or a distinction between construction
authority and operating authority.[^tra-construction-history][^tra-history-page]

## Current station records and the TDX measurement layer

The current operator station pages identify Heping as station 7060 and
Su'aoxin as station 7130.[^tra-station-heping][^tra-station-su-aoxin] These are
current passenger-station records. They do not by themselves define the
historical construction boundary, the project contract or the as-built track
count.[^tra-station-heping][^tra-station-su-aoxin]

The committed TDX station-of-line pull places Su'aoxin at source sequence 25,
with a supplied travelled distance of 90.2 km, and Heping at source sequence
31, with a supplied travelled distance of 130.1 km.[^tdx-tra-line] In the
guide's one-based presentation these are positions 26 and 32; subtracting the
two supplied endpoint fields gives 39.9 km.[^tdx-tra-line] That current
data-layer difference is retained beside, not substituted for, the operator's
historical 39.8 km record.[^tdx-tra-line][^tra-construction-history]

The TDX station pull contains current records for both IDs, including their
names and locations.[^tdx-tra-station] Its station fields identify the present
dataset members but do not establish which intermediate route elements were
within the 1973 construction scope or explain the 0.1 km difference between
the TDX interval and the historical record.[^tdx-tra-station][^tdx-tra-line]

## Records still missing

The checked primary sources do not provide a surveyed 39.8 km engineering
boundary, a contract or completion certificate, the reason for the constructor
disagreement, or a current as-built track-count record.[^tra-construction-history][^tra-history-page]
They also do not identify whether the 39.9 km TDX endpoint-field difference
comes from rounding, measurement datum, route definition or another boundary.
Those fields remain TBC.[^tdx-tra-line][^tra-construction-history]

The stable result is therefore narrow: both operator tables expose a 39.8 km
Heping–Su'aoxin record with 1973 construction and 1980 operation, while the
constructor attribution is inconsistent and current TDX fields describe a
nearby 39.9 km interval.[^tra-construction-history][^tra-history-page][^tdx-tra-line]
