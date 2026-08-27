---
title: Taoyuan Airport MRT ridership
summary: Taipei Main Station carries more than double the next-busiest stop, no report ever splits express from commuter riders, and a Wikipedia ridership figure turns out to cite a 2017 opinion piece.
order: 1
operator: TYMC
updated: 2026-08-28
facts:
  - label: July 2026 whole-system total
    value: "3,976,430 passenger journeys"
    source: tymc-system-ridership-jul2026
  - label: July 2026 daily average
    value: "128,272"
    source: tymc-system-ridership-jul2026
  - label: Highest-ridership station, July 2026
    value: A1 Taipei Main Station, 1,712,542
    source: tymc-station-ridership-jul2026
  - label: Lowest-ridership station, July 2026
    value: A20 Xingnan, 21,091
    source: tymc-station-ridership-jul2026
  - label: Express/commuter ridership split
    value: not published by TYMC in any report checked
    source: tymc-statistics-index
specs: []
sources:
  - id: tymc-statistics-index
    title: Statistics
    titleOriginal: 統計資料
    publisher: Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)
    url: https://www.tymetro.com.tw/tymetro-new/tw/_pages/about/statistics.html
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full index page, read directly. Links two monthly report types (whole-system and per-station); neither, checked across two separate months, splits ridership by express versus commuter service.
  - id: tymc-system-ridership-jul2026
    title: "System-wide ridership statistics, July 2026 (115年7月)"
    titleOriginal: 115年全系統旅運量統計7月
    publisher: Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)
    url: https://www.tymetro.com.tw/tymetro-new/upload/file/20260819_111120_doc_345.pdf
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full PDF, read directly (not summarised). Independently corroborated by this project's earlier committed data pull, which read the same figures from the same report on 2026-08-26.
  - id: tymc-station-ridership-jul2026
    title: "Station-level ridership statistics, July 2026 (115年7月)"
    titleOriginal: 115年7月各站旅運量統計
    publisher: Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)
    url: https://www.tymetro.com.tw/tymetro-new/upload/file/20260819_111103_doc_243.pdf
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full PDF, read directly and reflected in the committed data/ridership/tymc-station.json pull. Source for the highest/lowest-ridership stations.
  - id: gvm-2024-ridership
    title: "Airport MRT's 2024 surplus hits a record NT$500 million! Why was the network-wide NT$10 discount cancelled?"
    titleOriginal: 桃園機場捷運2024盈餘5億創新高！為何全線取消車票10元優惠？
    publisher: 城市學 (GVM/CommonWealth city-affairs desk)
    url: https://city.gvm.com.tw/article/117975
    accessed: 2026-08-27
    kind: secondary
    lang: zh-Hant
    note: Article dated 22 December 2024, giving a 114,289/day 2024 ridership figure; not independently re-verified against a primary source, and the article predates year-end 2024 by nine days, so its "2024" figures may be a projection.
  - id: zhwiki-airport-mrt-ridership
    title: Taoyuan Airport MRT
    titleOriginal: 桃園機場捷運
    publisher: Wikipedia
    url: https://zh.wikipedia.org/zh-tw/桃園機場捷運
    accessed: 2026-08-27
    kind: secondary
    lang: zh-Hant
    note: Infobox states 2024 daily ridership of 114,472, footnoted to a TYMC article dated 26 May 2017 — a citation checked against its own claim and found not to support a 2024 figure by date alone.
---

## What the monthly reports show

TYMC's July 2026 whole-system report records 3,976,430 passenger journeys
for the month, a daily average of 128,272.[^tymc-system-ridership-jul2026]
The figure is independently corroborated: this project's own earlier
committed data pull read the identical numbers from the same report a day
apart, and this page's own direct read agrees exactly. Two days that month
sit far outside the normal range with no stated cause — 10 July (Friday) at
58,049 and 11 July (Saturday) at 15,709, against a surrounding daily range
of roughly 130,000–148,000 — and this page does not guess why.

The companion per-station report for the same month gives 3,988,722
entries and 3,976,430 exits system-wide; the exit total matches the
whole-system report exactly, while the 12,292 difference on the entry side
is attributed partly to group tickets and other ticket types tracked
separately from ordinary turnstile counts.[^tymc-station-ridership-jul2026]
Taipei Main Station (A1) is by far the busiest stop, at 1,712,542 for the
month — more than double the next-busiest station, Airport Terminal 1
(A12) at 732,462, followed closely by Taoyuan HSR Station (A18, 720,242)
and Airport Terminal 2 (A13, 719,552).[^tymc-station-ridership-jul2026] The
quietest station is Xingnan (A20) at 21,091.[^tymc-station-ridership-jul2026]

No TYMC report checked — across two separate months, both the whole-system
and per-station types — splits ridership by express (直達車) versus
commuter (普通車) service, or distinguishes airport-worker ridership from
general passenger ridership.[^tymc-statistics-index] That distinction,
sometimes assumed to exist in casual discussion of the line, is not
published anywhere this page could find.

## A ridership figure worth checking twice

Wikipedia's infobox for this line states 2024 daily ridership of 114,472,
footnoted to a TYMC article dated 26 May 2017.[^zhwiki-airport-mrt-ridership]
Checking that citation against what it claims to support — this project's
own rule for every secondary citation — shows the date cannot be right: a
2017 article cannot be the source of a 2024 statistic, and by its title
("為機捷營運需要很多汗水 請個別人士少一點口水") it appears to be a 2017
opinion piece responding to launch-era criticism, not a ridership report at
all. This page does not use that figure. A separate secondary source gives
114,289/day for 2024, close but not identical to Wikipedia's number, and
neither is independently confirmed against a primary source here.[^gvm-2024-ridership]

TYMC's well-documented 2025 financial turnaround — a record NT$679 million
surplus and full repayment of roughly NT$1.1 billion in debt — is tied in
news coverage to 2025 annual ridership exceeding 46 million, up 12% on
2024, though that figure comes from secondary sources already verified
elsewhere in this project's research rather than a TYMC primary financial
statement.

## Remaining gaps

Whether the 2024 daily-ridership figure is 114,472 or 114,289 is not
established against a primary source either way. A precise 2023 profit
figure is not found in any source read for this page. The cause of the
anomalous low-ridership days in July 2026 is not established.
