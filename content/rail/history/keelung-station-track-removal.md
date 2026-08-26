---
title: The Taiwan Railways Keelung Station Track-removal Records
summary: The operator's historical PDF contains two TRA Keelung Station records—2.9 km from 1978 and 2.0 km from 1969—both tied to 27 April 2010 track removals; current TDX identifies Keelung as Western Main Line position 1.
order: 34
updated: 2026-08-26
aliases:
  - 基隆車站股道拆除
  - 基隆車站拆除紀錄
  - Keelung Station track removal
  - Keelung Station dismantling records
facts:
  - label: Operator row 97 distance
    value: 2.9
    unit: km
    source: tra-construction-history
  - label: Operator row 97 construction-year field
    value: 1978
    source: tra-construction-history
  - label: Operator row 98 distance
    value: 2.0
    unit: km
    source: tra-construction-history
  - label: Operator row 98 construction-year field
    value: 1969
    source: tra-construction-history
  - label: Current operator Keelung station reference
    value: Keelung (0900)
    source: tra-station-keelung
specs:
  - label: Row 97 removal scope
    value: Keelung Station tracks 10–16
    source: tra-construction-history
  - label: Row 98 removal scope
    value: Keelung Station tracks 3–5, one enginehouse line and turntable line
    source: tra-construction-history
  - label: Recorded removal date
    value: 2010-04-27
    source: tra-construction-history
  - label: Keelung position in current TDX WL data
    value: 1
    unit: position
    source: tdx-tra-line
  - label: Keelung current TDX WL travelled distance
    value: 0.0
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
    note: Full ten-page operator PDF. Rows 97 and 98 both say Keelung Station and name TRA; the aligned chronology gives their distances, 1978/1969 construction-year fields, 2010 operation-year fields and the 27 April 2010 track-removal explanations.
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML history table. It does not repeat either of the historical Keelung Station track-removal rows.
  - id: tra-station-keelung
    title: Keelung Station information
    titleOriginal: 基隆站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/0900
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: Full current operator station-information page whose heading identifies 0900 基隆 and supplies current station-service fields.
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平台)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains current station record 0900 基隆 with its current name, address, administrative area, class and coordinates.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平台)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Keelung at WL source sequence 0 with travelled distance 0.0 km; the guide presents it as one-based position 1, followed by Sankeng 0910.
---

## Two historical rows under one station name

Taiwan Railways' complete construction-history PDF contains two distinct
entries labelled Keelung Station.[^tra-construction-history] Row 97 records
2.9 km, with TRA as constructor; its aligned chronology gives 1978 in the
construction-year field and 2010 in the operation-year field.[^tra-construction-history]
The explanation says that tracks 10–16 inside Keelung Station were dismantled
on 27 April 2010: <span lang="zh-Hant">民國99年4月27日拆除基隆站內10至16股道。</span>[^tra-construction-history]

Row 98 is a second TRA Keelung Station entry, this time 2.0 km.[^tra-construction-history]
Its aligned chronology gives 1969 in the construction-year field and 2010 in
the operation-year field.[^tra-construction-history] Its explanation names a
different group of assets: tracks 3–5, one enginehouse line and the turntable
line, also dismantled on 27 April 2010.[^tra-construction-history]

The two rows are therefore not added into a 4.9 km Keelung Station total.[^tra-construction-history] The
checked source presents different distances, different construction-year
fields and different track-removal scopes, but does not state whether the
distances are nested, overlapping, or two accounting boundaries for the same
station site.[^tra-construction-history] The page keeps both rows visible and
leaves that relationship unresolved.

## The current presentation is a different layer

The current operator's full route-construction HTML table does not repeat
either historical Keelung Station track-removal row.[^tra-history-page] That
omission is a coverage difference between the current HTML presentation and
the older complete construction-history PDF; it is not evidence that either
PDF row did not exist.[^tra-construction-history][^tra-history-page]

The current operator station-information page identifies Keelung as station
0900.[^tra-station-keelung] The committed TDX station pull contains the same
current station identity.[^tdx-tra-station] In the current TDX Western Main
Line station-of-line data, Keelung is source sequence 0 with a supplied
travelled distance of 0.0 km; the guide presents that as one-based position 1,
followed by Sankeng (0910).[^tdx-tra-line] These fields describe the current
ordered passenger-station dataset, not the historical station track groups
removed in 2010.[^tdx-tra-line][^tra-construction-history]

The station page and TDX record are consequently used as current identity
references only.[^tra-station-keelung][^tdx-tra-station] They do not establish
the historical yard footprint, the disposition of the removed assets, or a
one-to-one boundary for either 2.9 km or 2.0 km.[^tra-construction-history][^tdx-tra-line]

## Records still missing

The checked primary sources do not provide a surveyed boundary for either row,
an asset register tying each distance to a mapped track, a contract or
completion record, a detailed Keelung yard plan, or a full account of what
remained after the 27 April 2010 removals.[^tra-construction-history][^tra-history-page][^tra-station-keelung]
The PDF's operation-year field and same-day removal explanation are retained as
the operator presents them; no additional interpretation is supplied for that
combination.[^tra-construction-history]

The stable result is narrower: the operator records two TRA Keelung Station
rows, 2.9 km from 1978 and 2.0 km from 1969, with separate 27 April 2010
removal scopes, while current TDX records Keelung 0900 at WL position 1 and
0.0 km.[^tra-construction-history][^tdx-tra-line]
