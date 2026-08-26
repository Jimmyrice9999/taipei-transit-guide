---
title: The Taiwan Railways Haikeguan–Badouzi Reopening Record
summary: The operator's historical PDF records a 0.4 km Haikeguan–Badouzi subject with 2015 and 2016 year fields and a resumption-of-service explanation; current TDX places the two stations 0.4 km apart on the Shenao Line.
order: 52
updated: 2026-08-27
aliases:
  - 海科館–八斗子
  - 海科館—八斗子
  - Haikeguan–Badouzi
  - Haikeguan–Badouzi reopening
facts:
  - label: Operator row 117 distance
    value: 0.4
    unit: km
    source: tra-construction-history
  - label: Construction-year field
    value: 2015
    source: tra-construction-history
  - label: Operation-start year field
    value: 2016
    source: tra-construction-history
  - label: Operator-listed constructor
    value: Taiwan Railways Administration
    source: tra-construction-history
  - label: Recorded explanation
    value: Revest drove (operator English column)
    source: tra-construction-history
  - label: Current operator Haikeguan station
    value: Haikeguan (7361)
    source: tra-station-haikeguan
  - label: Current operator Badouzi station
    value: Badouzi (7362)
    source: tra-station-badouzi
specs:
  - label: Current TDX line ID
    value: SA
    source: tdx-tra-line
  - label: Haikeguan TDX one-based position
    value: 2
    unit: position
    source: tdx-tra-line
  - label: Badouzi TDX one-based position
    value: 3
    unit: position
    source: tdx-tra-line
  - label: Haikeguan TDX supplied travelled distance
    value: 4.3
    unit: km
    source: tdx-tra-line
  - label: Badouzi TDX supplied travelled distance
    value: 4.7
    unit: km
    source: tdx-tra-line
  - label: Current TDX endpoint-field difference
    value: 0.4
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
    note: Full ten-page operator PDF. Row 117 records Haikeguan–Badouzi at 0.4 km with TRA as constructor; its aligned chronology gives 2015 and 2016 and records 復駛, while the operator's English column reads `Revest drove`.
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML history table. No matching Haikeguan–Badouzi row or row 117 reopening explanation was found in the table checked for this subject.
  - id: tra-station-haikeguan
    title: Haikeguan Station information
    titleOriginal: 海科館車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7361
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies station 7361 as Haikeguan (海科館).
  - id: tra-station-badouzi
    title: Badouzi Station information
    titleOriginal: 八斗子車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7362
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies station 7362 as Badouzi (八斗子).
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains current station 7361 Haikeguan (海科館) and station 7362 Badouzi (八斗子), with their current station records.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Haikeguan on SA at source sequence 1 with 4.3 km and Badouzi at source sequence 2 with 4.7 km; the guide presents one-based positions 2 and 3 and calculates a 0.4 km endpoint-field difference.
---

## A recorded reopening subject

Taiwan Railways' complete construction-history PDF records row 117 as 海科館–八斗子,
Haikeguan–Badouzi, at 0.4 km.[^tra-construction-history] The row names the Taiwan
Railways Administration as constructor.[^tra-construction-history]

The aligned chronology gives 2015 in the construction-year field and 2016 in the
operation-start year field.[^tra-construction-history] Its explanation is
<span lang="zh-Hant">復駛</span>, which the operator's English column renders as
`Revest drove`.[^tra-construction-history] The English wording is reproduced as
published; the row itself does not expand the event into a detailed reopening date,
contract, engineering boundary or service history.[^tra-construction-history]

The operator's full current construction-history HTML table does not contain a
matching Haikeguan–Badouzi row.[^tra-history-page] That omission is a coverage
difference between the current HTML presentation and the complete construction-
history PDF, not evidence that the PDF row did not exist.[^tra-history-page][^tra-construction-history]

## Current station and TDX records

The current operator station pages identify Haikeguan as station 7361 and Badouzi
as station 7362.[^tra-station-haikeguan][^tra-station-badouzi] These are current
passenger station records and do not by themselves define the historical row's
reopening boundary or prove that the 0.4 km table value uses the same endpoints.[^tra-station-haikeguan][^tra-station-badouzi][^tra-construction-history]

The committed TDX station pull contains current records for both station IDs,
including their current names and locations.[^tdx-tra-station] Those records identify
current station entries; they do not replace the operator's historical subject.[^tdx-tra-station][^tra-construction-history]

In the committed TDX Shenao Line station-of-line data, Haikeguan is source sequence
1 with a supplied travelled distance of 4.3 km and Badouzi is source sequence 2 with
4.7 km.[^tdx-tra-line] The guide presents them as one-based positions 2 and 3 and
calculates a 0.4 km difference by subtracting the supplied endpoint fields. No
current station member intervenes in that ordered pair.[^tdx-tra-line] The current
interval is kept beside, rather than used to overwrite, the operator's historical
0.4 km reopening subject.[^tdx-tra-line][^tra-construction-history]

The two 0.4 km values numerically agree, but the checked sources do not state that
the historical subject distance and the current TDX travelled-distance difference
use identical reference points or accounting purposes.[^tra-construction-history][^tdx-tra-line]

## Records still missing

The checked primary sources do not provide row 117's exact reopening day, the
service timetable or operating pattern associated with the event, a contract or
completion record, a surveyed 0.4 km engineering boundary, or a detailed scope of
the work.[^tra-construction-history][^tra-history-page]

The checked sources also do not explain whether the historical 0.4 km and current
TDX endpoint fields are the same measurement despite their equal values.[^tdx-tra-line][^tra-construction-history]
Those fields remain separate rather than being treated as proof of a shared
boundary.[^tdx-tra-line][^tra-construction-history]

The stable result is narrower: the operator records a 0.4 km Haikeguan–Badouzi
subject with 2015/2016 year fields and a 復駛 explanation whose English column says
`Revest drove`, while current station and TDX records supply adjacent stations 7361
and 7362 and a separate 0.4 km SA endpoint interval.[^tra-construction-history][^tra-station-haikeguan][^tra-station-badouzi][^tdx-tra-line]
