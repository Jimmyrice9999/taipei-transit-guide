---
title: Taiwan Railways station-level ridership data
summary: A live per-station entry/exit dataset exists and is publicly downloadable — the previous "still needs a data pass" framing was too pessimistic — but this page could not read its content, and no source confirms a true station-to-station matrix exists at all.
order: 2
operator: TRA
updated: 2026-08-27
facts:
  - label: Open dataset
    value: 臺鐵每日各站點進出站人數 (daily per-station entry/exit counts)
    source: datagovtw-station-gate-counts
  - label: Dataset stated coverage
    value: from 23 April 2019
    source: datagovtw-station-gate-counts
  - label: Annual report's station-level table
    value: 表6 各站客貨運起訖量 (Table 6, existence confirmed, content unread)
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
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: A genuine PDF, confirmed to exist; the fetch tooling used could not extract its table content, including the station-level Table 6.
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

## A separate table this page could not read

TRA's own Monthly and Annual Statistical Reports separately contain a
station-level table, 表6 各站客貨運起訖量 (Table 6, volume of passenger and
freight traffic by station). Its existence and PDF format were confirmed by
directly fetching the report files, but no tool available to this page's
sourcing process could extract the table's actual content — the PDFs
resisted every extraction method tried.[^tra-monthly-report-jan2024]
Whether Table 6's "起訖量" (origin-destination volume) measures the same
thing as the open dataset's gate-entry/exit counts is not established by
any source this page could read; the two are not assumed to be
interchangeable.

## What does not appear to exist

A true station-to-station origin-destination matrix — how many passengers
travelled from one specific station to another — does not appear to exist
in public TRA or TDX data at all, according to a third-party guide not
independently verified against TDX's own documentation, which states that
level of detail is currently available only for Taipei
MRT.[^tdx-guide-rail-data]

## Remaining gaps

No verified station-by-station ranking exists from a primary source this
page could read; every specific figure beyond the single low-confidence
Taipei data point above rests on unverified secondary compilations and is
not published here. A working PDF text extraction of the Statistical
Report's Table 6, or a proper parse of the open dataset's JSON download,
would settle most of what remains TBC on this page.
