---
title: The Taiwan Railways Hualien Port Line Reconstruction Record
summary: The operator records Hualien Port Line as a 10.5 km Railway Reconstruction Bureau project built in 1992 and opened in 2004 with heavier rail and PC sleepers; current TDX data supplies no named Hualien Port passenger endpoint.
order: 32
updated: 2026-08-26
aliases:
  - 花蓮港線
  - Hualien Port Line
  - Hualien Port railway reconstruction
facts:
  - label: Operator-record construction length
    value: 10.5
    unit: km
    source: tra-construction-history
  - label: Operator-record construction year
    value: 1992
    source: tra-construction-history
  - label: Operator-record operation-start year
    value: 2004
    source: tra-construction-history
  - label: Current operator Hualien station reference
    value: Hualien (7000)
    source: tra-station-hualien
specs:
  - label: Recorded constructor
    value: Railway Reconstruction Bureau, Eastern Region Engineering Office
    source: tra-construction-history
  - label: Recorded works
    value: Heavier rail and PC sleepers
    source: tra-construction-history
  - label: Hualien Port electrification milestone
    value: 2012-06-22
    source: tra-timeline-hualien-port
  - label: Current named port endpoint in TDX station data
    value: TBC
sources:
  - id: tra-construction-history
    title: Chronological History of Railroad Construction
    titleOriginal: 路線修築沿革
    publisher: National Taiwan Railways Corporation / former Taiwan Railways Administration (國營臺灣鐵路股份有限公司／臺灣鐵路管理局)
    url: https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full ten-page operator PDF. Row 95 lists Hualien Port Line at 10.5 km with the Railway Reconstruction Bureau Eastern Region Engineering Office as constructor; the aligned chronology gives 1992 construction, 2004 operation start and an explanation recording heavier rail and PC sleepers.
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML table. It includes Xincheng–Hualien Port at 19.2 km and other Hualien-area records but does not repeat a Hualien Port Line row.
  - id: tra-station-hualien
    title: Hualien Station information
    titleOriginal: 花蓮車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7000
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station page identifying the current passenger station as 7000 花蓮 and supplying its current station information.
  - id: tra-timeline-hualien-port
    title: Taiwan Railways chronology, 2012
    titleOriginal: 101年大事紀要表
    publisher: Taiwan Railways Administration (臺灣鐵路管理局)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-timeline?selectIndex=14
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full operator chronology. The 22 June 2012 entry says Hualien Port station and the Hualien Port branch were fully electrified from 00:00; it does not define the relationship to PDF row 95.
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平台)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains the current Hualien 7000 passenger-station record but no named Hualien Port passenger-station record; it cannot supply a port endpoint code for row 95.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平台)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Hualien 7000 at EL source sequence 37, presented as one-based position 38, with a supplied travelled distance of 169.7 km; it contains no named Hualien Port endpoint record.
---

## A separate operator reconstruction record

Taiwan Railways' complete construction-history PDF lists row 95 as Hualien
Port Line, with a distance of 10.5 km.[^tra-construction-history] Its
constructor field names the Railway Reconstruction Bureau's Eastern Region
Engineering Office.[^tra-construction-history] The rendered places table was
checked against the chronology table on the following page: row 95 aligns with
1992 as the construction year and 2004 as the operation-start year.[^tra-construction-history]

The row's explanation says 舖設重軌、PC枕, translated in the operator PDF as
laying heavier rail and PC sleepers.[^tra-construction-history] That is the
work description attached to this operator row. It is not expanded here into a
claim about every present-day track, structure or service on the port branch,
because the PDF does not provide that inventory.[^tra-construction-history]

The page keeps this 10.5 km row separate from the similarly named
Hualien–Hualien Port records and from the current operator's Xincheng–Hualien
Port row.[^tra-construction-history][^tra-history-page] Similar endpoint words
do not establish that the records describe the same surveyed boundary.

## The current operator presentation has a different boundary

The current operator's full HTML history table contains Xincheng–Hualien Port
as a 19.2 km row, along with Hualien–Heping, Heping–Su'aoxin Station and
Hualien–Taitung records.[^tra-history-page] It does not contain a Hualien Port
Line row corresponding to the PDF's 10.5 km record.[^tra-history-page] This is
a coverage difference between two operator presentations, not evidence that
the older PDF row did not exist.[^tra-construction-history][^tra-history-page]

The operator's separate 2012 chronology records that Hualien Port station and
the Hualien Port branch were fully electrified from 22 June 2012.[^tra-timeline-hualien-port]
That is a related operator milestone, but the chronology does not state that
its branch wording is the same 10.5 km boundary as PDF row 95.[^tra-timeline-hualien-port][^tra-construction-history]

## Current passenger data does not provide the port endpoint

The current operator station page identifies Hualien as station 7000.[^tra-station-hualien]
The committed TDX station pull contains that current passenger record but no
named Hualien Port passenger-station record.[^tdx-tra-station] The page
therefore leaves the port endpoint code TBC rather than assigning one from the
name of the historical row.[^tdx-tra-station]

TDX places Hualien 7000 at source sequence 37 on EL, with a supplied travelled
distance of 169.7 km, shown by the guide as one-based position 38.[^tdx-tra-line]
That current passenger-data reference point is not used as a surveyed endpoint
for the historical 10.5 km construction record.[^tdx-tra-line][^tra-construction-history]

## Records still missing

The checked primary sources do not provide a surveyed endpoint at Hualien Port,
a former station sequence, a contract or completion certificate, the detailed
structures included in the 10.5 km row, or a current passenger/freight service
boundary.[^tra-construction-history][^tra-history-page][^tdx-tra-station]
The relationship between row 95 and the other Hualien Port-named records also
remains TBC; the checked PDF and current HTML do not define whether their
boundaries are shared, overlapping or different.[^tra-construction-history][^tra-history-page]

The stable result is narrower: the operator records a 10.5 km Hualien Port
Line reconstruction built in 1992 and opened in 2004 with heavier rail and PC
sleepers, while current operator and TDX sources do not supply a matching named
passenger endpoint.[^tra-construction-history][^tra-history-page][^tdx-tra-station]
