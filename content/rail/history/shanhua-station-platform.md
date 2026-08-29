---
title: The Taiwan Railways Shanhua Station Platform Record
summary: The operator's historical PDF records a 0.3 km Shanhua Station subject with 2017 construction and operation-start fields and an Add platform explanation; current TDX places Shanhua at Western Main Line position 84.
order: 53
updated: 2026-08-29
aliases:
  - 善化車站
  - 善化站增設月台
  - Shanhua Station platform
  - Shanhua Station platform addition
facts:
  - label: Operator row 118 distance
    value: 0.3
    unit: km
    source: tra-construction-history
  - label: Construction-year field
    value: 2017
    source: tra-construction-history
  - label: Operation-start year field
    value: 2017
    source: tra-construction-history
  - label: Operator-listed constructor
    value: Taiwan Railways Administration
    source: tra-construction-history
  - label: Recorded construction explanation
    value: Add platform
    source: tra-construction-history
  - label: Current operator station
    value: Shanhua (4170)
    source: tra-station-shanhua
specs:
  - label: Current TDX line ID
    value: WL
    source: tdx-tra-line
  - label: Shanhua TDX one-based position
    value: 84
    unit: position
    source: tdx-tra-line
  - label: Shanhua TDX supplied travelled distance
    value: 334.2
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
    note: Full ten-page operator PDF. Row 118 records Shanhua Station at 0.3 km with TRA as constructor; its aligned chronology gives 2017 and 2017 and records 增設月台 (Add platform).
  - id: tra-history-page
    title: Railway route construction history
    titleOriginal: 臺灣鐵路路線建造史
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/adr/about-1-5
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator HTML history table. No matching Shanhua Station row or row 118 platform explanation was found in the table checked for this subject.
  - id: tra-station-shanhua
    title: Shanhua Station information
    titleOriginal: 善化車站資訊
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/4170
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full current operator station page. Its heading identifies station 4170 as Shanhua (善化).
  - id: tdx-tra-station
    title: TDX Taiwan Railways station records
    titleOriginal: 臺灣鐵路車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull contains current station 4170 Shanhua (善化), with its current station record.
  - id: tdx-tra-line
    title: TDX Taiwan Railways station-of-line records
    titleOriginal: 臺灣鐵路路線車站資料
    publisher: Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The committed full pull places Shanhua on WL at source sequence 83 with supplied travelled distance 334.2 km; the guide presents that as one-based position 84.
  - id: peopo-shanhua-2017
    title: "Shanhua Station's second platform to open with this month's timetable change; Shalun Line trains to originate there"
    titleOriginal: 善化車站第二月台配合本月底改點啟用 沙崙線列車始發
    publisher: PeoPo Citizen Journalism / Public Television Service (公視 PeoPo 公民新聞)
    url: https://www.peopo.org/news/333307
    accessed: 2026-08-29
    kind: secondary
    lang: zh-Hant
    note: A 2017-04-10 citizen-journalism article giving a day-level opening date (27 April 2017), the platform's operational purpose (letting Shalun Line trains originate at Shanhua instead of running empty from Nanke) and eight renumbered train workings. Not an operator source; the day-level date and purpose are not independently confirmed by TRA.
  - id: zhwiki-shanhua
    title: Shanhua Station (Wikipedia article)
    titleOriginal: 善化車站
    publisher: Wikimedia Foundation / Chinese Wikipedia
    url: https://zh.wikipedia.org/wiki/善化車站
    accessed: 2026-08-29
    kind: secondary
    lang: zh-Hant
    note: Cites the PeoPo article above for the same 27 April 2017 date and adds an unverified superlative claim (that Shanhua was previously TRA's only single-platform second-class station), which is not stated in the PeoPo article itself and is not used on this page.
  - id: ltn-shanhua-reconstruction-2024
    title: "Southern Science Park effect: Shanhua and Longtian stations near NT$1.4 billion rebuild prospect"
    titleOriginal: 南科效應 善化、隆田站 近14億改建露曙光
    publisher: Liberty Times (自由時報)
    url: https://news.ltn.com.tw/news/life/breakingnews/4719121
    accessed: 2026-08-29
    kind: secondary
    lang: zh-Hant
    note: A 2024 report on a separate, later cross-platform reconstruction project (planning fee NT$20 million, estimated construction NT$715 million for Shanhua alone), distinct from the 2017 platform addition this page documents; confirms Shanhua's daily ridership exceeds 3,000 trips and its role as the Shalun Line's originating station as of 2024.
  - id: ptt-shanhua-2022
    title: "[News] TRA Shanhua Station: transport bureau pushes for expansion"
    titleOriginal: "[新聞] 台鐵善化站 交通局力爭擴建"
    publisher: PTT Railway board (批踢踢實業坊 Railway 板), reposting news coverage
    url: https://www.ptt.cc/bbs/Railway/M.1646454709.A.CEB.html
    accessed: 2026-08-29
    kind: secondary
    lang: zh-Hant
    note: A 2022 repost describing a 2020-proposed "Platform 1 expansion and station-yard improvement" project, a separate and differently-scoped proposal from both the 2017 platform addition and the 2024-reported reconstruction plan.
---

## A recorded station-platform subject

Taiwan Railways' complete construction-history PDF records row 118 as 善化車站,
Shanhua Station, at 0.3 km.[^tra-construction-history] The row names the Taiwan
Railways Administration as constructor.[^tra-construction-history]

The aligned chronology gives 2017 in both the construction-year and operation-start
fields.[^tra-construction-history] Its explanation is <span lang="zh-Hant">增設月台</span>,
which the operator's English column renders as `Add platform`.[^tra-construction-history]
That is the work description recorded in the row; the checked PDF does not expand it
into a platform count, exact date, contract, engineering boundary or detailed scope.[^tra-construction-history]

The operator's full current construction-history HTML table does not contain a
matching Shanhua Station row.[^tra-history-page] That omission is a coverage
difference between the current HTML presentation and the complete construction-
history PDF, not evidence that the PDF row did not exist.[^tra-history-page][^tra-construction-history]

## Current station and TDX records

The current operator station page identifies Shanhua as station 4170.[^tra-station-shanhua]
That is a current passenger-station identity and does not by itself define the
historical platform work, its 0.3 km value or the project boundary.[^tra-station-shanhua][^tra-construction-history]

The committed TDX station pull contains the current 4170 Shanhua record, including
its current name and station fields.[^tdx-tra-station] Those fields identify the
current station entry; they do not replace the operator's historical station-work
record.[^tdx-tra-station][^tra-construction-history]

In the committed TDX Western Main Line station-of-line data, Shanhua is source
sequence 83 with a supplied travelled distance of 334.2 km.[^tdx-tra-line] The guide
presents it as one-based position 84.[^tdx-tra-line] The 334.2 km value is a current
line-position field, not a substitute for or a measurement to be combined with the
historical 0.3 km station subject.[^tdx-tra-line][^tra-construction-history]

## What the platform addition was for

A 2017 citizen-journalism report — not an operator source, but internally
detailed and consistent with later independent coverage — describes the
purpose behind row 118's <span lang="zh-Hant">增設月台</span>: enabling Shalun Line
(<span lang="zh-Hant">沙崙線</span>) trains to originate at Shanhua rather
than running empty from Nanke Station to pick up passengers, a pattern the
article says had produced visible complaints from Shanhua-area riders who
could see trains pass without being able to board them.[^peopo-shanhua-2017]
It names eight specific train workings renumbered to originate at Shanhua
once the new platform opened and gives a day-level opening date of 27 April
2017 — a date not found in any operator source checked for this page, only
in this secondary account and in zh.wikipedia's citation of
it.[^peopo-shanhua-2017][^zhwiki-shanhua] The operator's own construction
record supplies only the year 2017 in both its construction and
operation-start fields; the day-level date refines that year rather than
contradicting it, but it remains secondary-sourced, not
operator-confirmed.[^tra-construction-history][^peopo-shanhua-2017]

zh.wikipedia's article, citing the same 2017 report, additionally claims
Shanhua had until then been the only single-platform second-class station on
the TRA network.[^zhwiki-shanhua] That specific superlative is not stated in
the cited article itself and was not corroborated by any other source
checked for this page; it is reported here only as an unverified claim, not
as an established fact.[^zhwiki-shanhua]

The operator's current Shanhua station page still lists a Shalun–Shanhua
working on its live train board, which is consistent with — though it does
not by itself establish the history of — the origination pattern the 2017
report describes.[^tra-station-shanhua][^peopo-shanhua-2017]

## A later, separate reconstruction project

Independent reporting from 2022 onward describes further, larger and
differently-scoped work at Shanhua that should not be conflated with row
118's 2017 platform addition.[^ptt-shanhua-2022][^ltn-shanhua-reconstruction-2024]
A 2022 report describes a 2020-proposed
"Platform 1 expansion and station-yard improvement," citing Shanhua
district's rapid development and floating a future plan for
South-Link-bound Western Trunk Line trains to depart from
Shanhua.[^ptt-shanhua-2022] By 2024, reporting describes a distinct
cross-platform reconstruction plan for Shanhua and neighbouring Longtian
Station, with a combined estimated cost near NT$1.4 billion — a planning fee
of NT$20 million and estimated construction of NT$715 million for Shanhua
alone — and states Shanhua's daily ridership then exceeded 3,000
trips.[^ltn-shanhua-reconstruction-2024] None of these later figures belong
to the 2017 platform addition this page's sourced facts describe; no source
checked for this page gives a cost for the 2017 work
itself.[^ptt-shanhua-2022][^ltn-shanhua-reconstruction-2024][^tra-construction-history]

Whether the 2017 <span lang="zh-Hant">增設月台</span> row, the 2020-proposed "Platform 1 expansion,"
and the 2020s cross-platform reconstruction plan describe the same, an
overlapping, or entirely separate physical platforms is not established by
any source read for this page. They are reported here as three
chronologically distinct episodes of platform work at the same station,
not as a single continuous project.[^tra-construction-history][^ptt-shanhua-2022][^ltn-shanhua-reconstruction-2024]

## Records still missing

The checked primary sources do not provide the exact platform-addition day, the
number or type of platforms, platform geometry, contract or completion record,
surveyed boundary for the 0.3 km value, or a detailed work scope for row 118.[^tra-construction-history][^tra-history-page]
A day-level date and operational purpose are available only from secondary
sources, not from the operator itself.[^peopo-shanhua-2017][^zhwiki-shanhua]
No source checked for this page, primary or secondary, gives a cost or
contractor for the 2017 work specifically.[^tra-construction-history][^peopo-shanhua-2017]

The checked sources also do not explain the measurement purpose of the historical
0.3 km station value or provide a source-defined mapping between it and the current
TDX WL travelled-distance field of 334.2 km.[^tdx-tra-line][^tra-construction-history]
Those fields remain separate rather than being averaged, added or treated as one
measurement.[^tdx-tra-line][^tra-construction-history]

The stable result is narrower: the operator records a 0.3 km Shanhua Station
subject with 2017/2017 fields and an Add platform explanation, while the current
operator and TDX records identify station 4170 at WL position 84 and 334.2 km.[^tra-construction-history][^tra-station-shanhua][^tdx-tra-line]
