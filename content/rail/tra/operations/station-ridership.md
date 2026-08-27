---
title: Taiwan Railways station-level ridership data
summary: A live per-station entry/exit dataset, and an annual report that really does carry a station-by-station table — just not the monthly one secondary sources cited it in — but this page still can't reliably align its rows with its numbers.
order: 2
operator: TRA
updated: 2026-08-28
facts:
  - label: Open dataset
    value: 臺鐵每日各站點進出站人數 (daily per-station entry/exit counts)
    source: datagovtw-station-gate-counts
  - label: Dataset stated coverage
    value: from 23 April 2019
    source: datagovtw-station-gate-counts
  - label: Annual report's station-level table
    value: 表6 各站客貨運起訖量 (Table 6, 2024 annual digest — confirmed by direct extraction)
    source: tra-annual-2024-statistics
  - label: Monthly report's own Table 6
    value: 線別客運延人公里 (line-level passenger-kilometres — not station-level)
    source: tra-monthly-report-jan2024
specs:
  - label: Station-to-station OD matrix availability, per a third-party TDX guide
    value: currently only Taipei MRT, not TRA
    source: tdx-guide-rail-data
sources:
  - id: datagovtw-station-gate-counts
    title: Taiwan Railways daily station entry/exit passenger count (open dataset)
    titleOriginal: 臺鐵每日各站點進出站人數
    publisher: National Taiwan Railway Corporation (國營臺灣鐵路股份有限公司), via 政府資料開放平臺
    url: https://data.gov.tw/dataset/8792
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full dataset landing page, read directly. Confirms a live, per-station, per-day gate entry/exit dataset with JSON and compressed downloads; the page's own stated end date conflicts with the live resource's actual content.
  - id: tra-monthly-report-jan2024
    title: "Monthly Statistical Report of Taiwan Railway — January 2024"
    titleOriginal: 臺灣鐵路統計月報
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://www.railway.gov.tw/tra-tip-web/tip/file/3e5a77ba-0e7a-4fa3-81d6-cb56413b6e35
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full PDF, extracted with pdftotext after the fetch tooling used could not read it directly. Its own Table 6 is a line-level passenger-kilometre table, not the station-level table secondary sources attributed to "Table 6" — that table is in the annual report instead.
  - id: tra-annual-2024-statistics
    title: "Taiwan Railway Statistical Digest, 2024 (113年)"
    titleOriginal: 臺灣鐵路統計要覽 113年
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: https://tip.railway.gov.tw/tra-tip-web/tip/file/28e611f8-e25a-4ca9-9aad-967ca91ae8e0
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full PDF, extracted with pdftotext. Its Table 6, 各站客貨運起訖量, is the genuine station-level boarding-count table; this page could not confirm the extracted text's row-to-value alignment, so no individual station figure from it is published as established.
  - id: tdx-guide-rail-data
    title: "TDX Data Interface Guide — rail transport data"
    titleOriginal: TDX 運輸資料介接指南－軌道運輸資料
    publisher: "Independent guide (not TDX's own documentation)"
    url: https://bookdown.org/chiajungyeh/TDX_Guide/軌道運輸資料.html
    accessed: 2026-08-27
    kind: secondary
    lang: zh-Hant
    note: A third-party guide, not verified against TDX's own API documentation. States a station-to-station origin-destination matrix is currently available only for Taipei MRT.
---

## A dataset exists, and is live

TRA's earlier operations record on this site described station-level
service data as still needing a separate primary-data pass. That framing
was too pessimistic in one respect: TRA does publish a current, per-station,
per-day gate entry/exit dataset as open government data, with both JSON and
compressed downloads, and the dataset's own landing page states coverage
beginning 23 April 2019.[^datagovtw-station-gate-counts] The live JSON
resource itself, fetched directly, returned records into January 2026 —
later than the landing page's own stated end date of 31 December 2025, an
unresolved discrepancy this page does not attempt to explain.[^datagovtw-station-gate-counts]

This page could not verify the dataset's actual content with confidence,
however. A single data point — Taipei Station recording roughly 62,800
gate-ins and 47,300 gate-outs on 1 January 2026 — was obtained via an
automated summary of the raw file rather than a verified parse, and is
reported here only as a low-confidence example, not an established
figure.[^datagovtw-station-gate-counts]

## Two reports, two different Table 6es

Secondary sources cite "Table 6" of TRA's Statistical Report for a
station-level 各站客貨運起訖量 (volume of passenger and freight traffic by
station) figure. Reading the reports directly shows this is only true of
one of them.[^tra-monthly-report-jan2024][^tra-annual-2024-statistics] TRA's **monthly** report has 21 tables, and its own Table 6 is
線別客運延人公里 (passenger-kilometres by line) — a line-level measure with
no station breakdown at all.[^tra-monthly-report-jan2024] TRA's **2024
annual** Statistical Digest does carry a Table 6 titled exactly 各站客貨運起訖量,
spanning six pages of continuations and giving each station's boarding
count (上車人數) for the year.[^tra-annual-2024-statistics] The two reports
are not interchangeable copies of each other, and a citation to "Table 6"
needs to say which report it means.

This page still does not publish any individual station's figure from the
annual table.[^tra-annual-2024-statistics] The table renders station names as single characters stacked
vertically in narrow columns, and every text-extraction method tried
reconstructs that as two separately-ordered blocks — all station labels,
then all values — rather than a row that keeps a label next to its own
number; one more aggressive layout-reconstruction attempt visibly
scrambled station names together instead of fixing this.[^tra-annual-2024-statistics] One figure, a
2024 annual boarding count of 22,598,749 in the position where Taipei
Station's row should be, is at least consistent in order of magnitude with
the open dataset's single-day Taipei figure (roughly 62,800 for 1 January
2026; 22,598,749 ÷ 365 ≈ 61,900/day) — but this page treats that as
suggestive, not confirmed, because the row-to-value mapping itself was
never verified against the PDF's actual visual layout.[^tra-annual-2024-statistics]

Whether the open dataset's "進出站人數" (gate entry/exit) and the annual
report's "起訖量" (origin-destination volume) measure the same thing is not
established by any source this page could read; the two are not assumed to
be interchangeable.

## What does not appear to exist

A true station-to-station origin-destination matrix — how many passengers
travelled from one specific station to another — does not appear to exist
in public TRA or TDX data at all, according to a third-party guide not
independently verified against TDX's own documentation, which states that
level of detail is currently available only for Taipei
MRT.[^tdx-guide-rail-data]

## Remaining gaps

No verified station-by-station ranking is published here; every specific
figure beyond the single, position-only Taipei data point above rests on
unverified secondary compilations or an unconfirmed text-extraction
alignment. Confirming the annual table's actual row-to-value mapping against
its visual layout, or a proper parse of the open dataset's JSON download,
would settle most of what remains TBC on this page.
