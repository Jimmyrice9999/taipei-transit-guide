# Kaohsiung Metro ridership — research findings, 27 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below records whether the underlying page was fetched and read in full, or only found via a search summary; the latter is not published as an established fact on the content page. No prior `docs/research/` file on KRTC ridership existed to check against.

This is a one-subject report on Kaohsiung Metro's ridership statistics.
Confidence here is generally lower than on this project's TRA/TYMC
ridership pages: the underlying monthly PDF reports could not be
text-extracted in this pass, so this page rests on aggregate annual figures
only.

## What is established

- **KRTC's corporate homepage states 2025 annual ridership of 71.3 million passenger-trips for the Kaohsiung MRT (Red/Orange heavy rail) and 13.34 million for the Circular Light Rail, separately.** Source: Kaohsiung Rapid Transit Corporation corporate site, `2025年營運績效`, `https://corp.krtc.com.tw/`, PRIMARY, High confidence, fetched and read in full (page footer dated 2026-08-25). Original-language basis: `年總運量 7,130萬人次` (MRT); `年總運量 1,334萬人次` (light rail). No per-line (Red versus Orange) split, no per-station figures, and no stated date-range precision beyond the "2025年" heading appear on this page.
- **KRTC publishes monthly ridership statistics PDFs going back to 2009 — 220 records at the time of check — titled by ROC year and month (e.g. `高雄捷運115年07月份運量統計表`), with a parallel light-rail series at a separate URL.** Source: `https://corp.krtc.com.tw/News/statistics?id=1` (MRT) and `.../statistics?id=2` (light rail), PRIMARY, High confidence for the archive's existence and format, fetched and read in full. Whether these PDFs contain a per-station breakdown or only system/line-level totals could not be confirmed — see Checked and failed.
- **A Wikipedia footnote attributes a fuller title, "各站旅運量統計表" (per-station ridership statistics table), to the same URL as the archive above — a claim about the archive's content this page could not independently verify by opening a PDF.** Source: zh.wikipedia, Kaohsiung MRT article, SECONDARY, Medium confidence for the URL match (confirmed against KRTC's real archive), Low confidence for what the PDF actually contains.
- **A Wikipedia article separately reports 2024 figures — average daily ridership 213,176, a single-day peak of 472,378, and an annual total of 78,022,516 — citing MOTC's statistics query network.** Source: zh.wikipedia, citing `stat.motc.gov.tw`, SECONDARY, Low confidence: the cited MOTC domain failed to resolve on every attempt made in this research, so these figures are unverified against their claimed primary.

## Conflicts

- **2025 KRTC-published MRT-only total (71.3 million) versus 2024 Wikipedia/MOTC-cited total (78,022,516), whose scope (MRT only, or MRT plus light rail) is unclear from the Wikipedia article's framing.** These are different years measuring possibly different scopes; not resolved. Both are published rather than one being picked.

## Checked and failed

- **KRTC's July 2026 monthly ridership PDF** — checked 2026-08-27 and again 2026-08-28 (with `curl` and `pdftotext` access, unlike the initial pass). The statistics listing page is JavaScript-rendered, so its real download links are not present in the raw HTML a non-browser fetch receives; a URL fragment found via a browser-capable fetch tool did not resolve to a genuine PDF when retried directly. The monthly figures therefore remain unread in this pass — a specific, named lead for a follow-up with working browser-rendered link discovery.
- **`stat.motc.gov.tw` (MOTC Statistics Query Network)**, cited by Wikipedia for the 2024 figures above — checked 2026-08-27, failed to resolve (`getaddrinfo ENOTFOUND`) on every URL form tried.
- **`data.gov.tw` and `data.kcg.gov.tw` (national and Kaohsiung City open-data portals)**, checked for a possible open ridership dataset comparable to TRA's — checked 2026-08-27, the national portal returned HTTP 500 and the city portal refused the connection. This is a tool/network failure, not confirmation that no such dataset exists.
- **KRTC's 2025 annual report PDF** — checked 2026-08-27, exceeded the fetch tool's size limit.

## Stated gaps

Whether KRTC's monthly PDFs are station-level or system/line-level totals
is unresolved. The 2024 MOTC-cited figures are unverified against their
claimed primary. Whether an open ridership dataset exists for KRTC,
comparable to TRA's data.gov.tw entry-exit dataset, is unresolved due to
tool/network failures on both the national and Kaohsiung portals checked.
No per-station or per-line ridership figure is published on this page.
