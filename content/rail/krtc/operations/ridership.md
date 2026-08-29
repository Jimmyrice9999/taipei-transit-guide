---
title: Kaohsiung Metro ridership
summary: 71.3 million MRT trips and 13.34 million light-rail trips in 2025, from the operator's own homepage — everything more granular than an annual total stayed out of reach this run.
order: 1
operator: KRTC
updated: 2026-08-29
facts:
  - label: 2025 annual MRT ridership
    value: 71.3 million passenger-trips
    source: krtc-2025-operating-performance
  - label: 2025 annual Circular Light Rail ridership
    value: 13.34 million passenger-trips
    source: krtc-2025-operating-performance
  - label: Monthly PDF archive
    value: 220 records, back to 2009, separate MRT and light-rail series
    source: krtc-statistics-archive
specs: []
sources:
  - id: krtc-2025-operating-performance
    title: 2025 Operating Performance
    titleOriginal: 2025年營運績效
    publisher: Kaohsiung Rapid Transit Corporation (高雄大眾捷運股份有限公司)
    url: https://corp.krtc.com.tw/
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Corporate homepage, read directly (footer dated 2026-08-25). States separate 2025 annual totals for the MRT and the Circular Light Rail; no per-line or per-station breakdown appears.
  - id: krtc-statistics-archive
    title: Kaohsiung MRT ridership statistics archive
    titleOriginal: 運量統計表
    publisher: Kaohsiung Rapid Transit Corporation (高雄大眾捷運股份有限公司)
    url: https://corp.krtc.com.tw/News/statistics?id=1
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full archive listing, read directly. Confirms 220 monthly reports exist back to 2009 with a parallel light-rail series. A later pass found each report's own detail sub-page does expose a working PDF download link (a two-step fetch, not JavaScript rendering, was the actual obstacle) - but the PDF's compressed content still could not be extracted to text by the tooling available, so monthly and per-station content remains unread either way.
  - id: zhwiki-krtc-ridership
    title: Kaohsiung MRT
    titleOriginal: 高雄捷運
    publisher: Wikipedia
    url: https://zh.wikipedia.org/zh-tw/高雄捷運
    accessed: 2026-08-27
    kind: secondary
    lang: zh-Hant
    note: Cites MOTC's statistics query network for 2024 daily/peak/annual ridership figures; that MOTC domain failed to resolve on every attempt made for this page, so the figures are reported as unverified against their claimed primary.
---

## What the operator's own homepage states

KRTC's corporate homepage reports separate 2025 annual ridership totals:
71.3 million passenger-trips on the Kaohsiung MRT (the Red and Orange
heavy-rail lines together), and 13.34 million on the Circular Light Rail.[^krtc-2025-operating-performance]
Neither figure is broken down further — there is no published split between
the Red and Orange Lines, and no per-station figures appear on this
page.[^krtc-2025-operating-performance]

## A large archive this page still could not open

KRTC separately publishes monthly ridership statistics as PDFs, with 220
records in the archive at the time of check, going back to 2009, in
parallel MRT and light-rail series.[^krtc-statistics-archive] A Wikipedia
footnote for the same archive URL describes the reports as per-station
tables — but checking that description directly against the live page
found no such wording anywhere on it; the page's own heading is "企業訊息"
(Corporate Information) and its report titles carry no per-station
language, an unresolved conflict between what Wikipedia's citation claims
and what the cited page currently says.[^krtc-statistics-archive]

A later pass found the reason a single report's PDF couldn't be reached
was not JavaScript rendering, as first thought: each report's own detail
sub-page (one fetch step further than the listing page) does expose a
working direct download link.[^krtc-statistics-archive] One report was downloaded successfully this
way. Its content still could not be read — the PDF's internal compression
defeated the extraction tooling available — so monthly and per-station
KRTC ridership remain unread either way, just for a more precise
reason.[^krtc-statistics-archive]

Several recent news headlines describe further ridership research
opportunities — a post-pandemic profit milestone, quarterly ridership
records, and a specific station reported by an audit finding to be
under-performing its forecast — but none of those article bodies could
be read this pass, only the headlines themselves, which this research
process does not treat as sourced.

## A 2024 figure this page does not use

A Wikipedia article on the system separately reports 2024 figures —
average daily ridership 213,176, a single-day peak of 472,378, and an
annual total of 78,022,516 — citing MOTC's own statistics query
network.[^zhwiki-krtc-ridership] That MOTC domain failed to resolve on
every attempt made for this page, so these figures remain unverified
against the primary source Wikipedia itself names, and this page does not
publish them as established.[^zhwiki-krtc-ridership] Whether that 2024
total covers the MRT alone or the MRT and light rail together is also
unclear from the Wikipedia article's own framing, which adds a further
reason not to set it directly against KRTC's own 2025 MRT-only figure
above — the two may not even measure the same scope, on top of being
different years.

## Remaining gaps

Whether the monthly reports are per-station or system/line-level totals is
TBC. No per-line (Red versus Orange) or per-station ridership figure is
published here. Whether KRTC's ridership is mirrored in any national or
municipal open-data portal is unresolved — both portals checked returned
errors unrelated to whether the data exists. The 2024 MOTC-cited figures
above are unverified against their claimed primary source.[^zhwiki-krtc-ridership]
