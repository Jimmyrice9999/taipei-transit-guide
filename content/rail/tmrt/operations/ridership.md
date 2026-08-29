---
title: Taichung Metro ridership
summary: July 2026's daily figures add up to exactly the stated average — a real, internally consistent primary total, even though the table's own column headers were lost to a PDF font-encoding gap.
order: 1
operator: TMRT
updated: 2026-08-28
facts:
  - label: Reporting period
    value: July 2026 (ROC 115年07月), most recent published at time of research
    source: tmrt-ridership-july2026
  - label: What the count measures
    value: TBC (column-header text did not survive PDF extraction)
  - label: Anomalous date within the month
    value: "2026/07/10, markedly lower than every surrounding date"
    source: tmrt-ridership-july2026
  - label: 2024 annual report
    value: TBC (PDF uses an undecodable Adobe-CNS1 character collection)
specs:
  - label: Monthly total, July 2026
    value: "1,484,410"
    source: tmrt-ridership-july2026
  - label: Daily average, July 2026
    value: "47,884"
    source: tmrt-ridership-july2026
sources:
  - id: tmrt-disclosure-page
    title: Information Disclosure
    titleOriginal: 資訊公開專區
    publisher: Taichung Metro Corporation (臺中捷運股份有限公司)
    url: https://www.tmrt.com.tw/about/information-disclosure
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched and parsed directly from raw HTML. Lists the monthly ridership-statistics PDF archive and the annual-report archive, each with its own download link.
  - id: tmrt-ridership-july2026
    title: "July 2026 (ROC 115年07月) Ridership Statistics Table"
    titleOriginal: 115年07月運量統計表
    publisher: Taichung Metro Corporation (臺中捷運股份有限公司)
    url: https://www.tmrt.com.tw/Content/Uploads/PublicClassArticle/6c95db63-c9ad-480f-aa4d-d97c01c26705.pdf
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full single-page PDF, extracted with pdftotext after the fetch tooling used could not read it directly. Gives a daily figure for every date in July 2026, a monthly total and a daily average; the column-header text did not survive extraction due to the PDF's CJK font encoding.
  - id: udn-ridership-milestone
    title: "Green Line marks 5 years of service, cumulative ridership passes 60 million"
    titleOriginal: 台中捷運綠線通車5年 累積運量破6000萬人次
    publisher: 聯合報 (United Daily News)
    url: https://udn.com/news/story/7325/9258074
    accessed: 2026-08-29
    kind: secondary
    lang: zh-Hant
    note: "News report, fetched in full, attributing annual and cumulative figures directly to the operator: 「中捷公司指出，台中綠線2025年總運量達1722萬人次，較2024年1580萬人次成長達9%」(TMRT states 2025 annual ridership reached 17.22 million, up 9% from 15.80 million in 2024). States cumulative ridership passed 50 million on 2025-06-09 and 60 million in early January 2026."
---

## One month, cleanly cross-checked against itself

Taichung Metro Corporation's own information-disclosure page publishes a
monthly ridership-statistics table as a downloadable PDF; the most recent
entry available at the time of this research covered July
2026.[^tmrt-disclosure-page] Extracted directly from the PDF, the table
gives a daily figure for every date that month, a stated monthly total of
1,484,410, and a stated daily average of 47,884.[^tmrt-ridership-july2026]
Dividing the total by the number of days in July yields almost exactly the
stated average — an internal arithmetic check that this is a genuine,
self-consistent pair of figures rather than two unrelated numbers stitched
together.[^tmrt-ridership-july2026]

One date stands out: 2026/07/10 shows a markedly lower figure than every
surrounding date, all of which cluster in a much narrower
range.[^tmrt-ridership-july2026] The PDF does not state a cause, and none
is guessed at here.

## What exactly is being counted is not confirmed

The PDF's table carries a CJK font encoding that this session's extraction
tooling could not render for the column-header labels — every numeric cell
and every date extracted cleanly, but the header text describing what the
numbers actually count came back blank.[^tmrt-ridership-july2026] The file
is titled "運量統計表" (ridership statistics table) on the operator's own
disclosure page, consistent with a daily total-ridership count in the
conventional sense used across Taiwan transit reporting, but this page does
not present that as independently confirmed by a readable label within the
document itself. What exactly the count measures — station entries, total
boardings, or another definition — is published here as TBC.

## Annual and cumulative figures, from news reporting

Beyond the single month read directly from the operator's own PDF, 聯合報 reports figures it attributes directly to the operator: 2025 annual ridership of 17.22 million, up 9% from 15.80 million in 2024, cumulative ridership passing 50 million on 9 June 2025 and 60 million in early January 2026, and unspecified new monthly and daily records set in December 2025.[^udn-ridership-milestone] TMRT's own press-release listings, checked directly, do not currently carry a release stating these figures in the operator's own words — they rest on this news report's attribution to the company, not on a primary release read directly, and are reported with that provenance rather than as independently primary-confirmed.[^udn-ridership-milestone]

## Remaining gaps

The operator's most recent annual report, which might otherwise supply an
independently confirmed annual total and a stated definition of what the
monthly tables count, is not found readable this session: its PDF uses an
`Adobe-CNS1` character collection that this session's extraction tooling
could not decode at all, a more severe failure than the column-header gap
in the monthly table. No station-by-station ridership breakdown was found —
the monthly table gives one system-wide figure per day. Historical and
annual totals beyond the single month read here are TBC.
