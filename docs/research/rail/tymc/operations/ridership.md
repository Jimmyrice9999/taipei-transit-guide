# Taoyuan Airport MRT ridership — research findings, 27 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below records whether the underlying page was fetched and read in full, or only found via a search summary; the latter is not published as an established fact on the content page. `docs/research/rail/metro/ridership.md` (dated 24-26 August 2026) already established TYMC's ridership publication structure from a full pagination fetch of the operator's statistics archive and a committed data pull (`data/ridership/tymc-station.json`, 22 stations, March 2025-July 2026); this report corroborates and extends that work rather than duplicating it.

This is a one-subject report drawing on both an already-committed structured
data pull and a fresh independent verification pass.

## What is established

- **TYMC publishes two monthly report types: a whole-system daily ridership PDF and a per-station entry/exit PDF, both linked from its statistics page.** Source: Taoyuan Metro Corporation, `統計資料`, `https://www.tymetro.com.tw/tymetro-new/tw/_pages/about/statistics.html`, PRIMARY, High confidence.
- **July 2026 (115年7月) whole-system total: 3,976,430 passenger journeys, daily average 128,272.** Source: TYMC, `115年全系統旅運量統計7月`, PRIMARY, High confidence — independently confirmed twice: once in the committed data pull (`data/ridership/tymc-station.json`, retrieved 2026-08-26) and once by a fresh direct PDF read in this pass (fetched and read with the Read tool, not summarised), both agreeing on the exact figures. Two unexplained low-ridership days appear in the raw daily table for July 2026 — 10 July (Friday) at 58,049 and 11 July (Saturday) at 15,709, both far below the surrounding ~130,000-148,000 range — with no cause stated on the source page and none found elsewhere in this research.
- **July 2026 per-station entry/exit totals: 3,988,722 entries, 3,976,430 exits — the exit total matches the whole-system PDF's total exactly, while entries differ by 12,292, attributed partly to group tickets and other ticket types tracked separately from turnstile counts.** Source: TYMC, `115年7月各站旅運量統計`, PRIMARY, High confidence, read directly. Original-language basis: `入站：由該站進入捷運系統之人次`; `出站：由該站離開捷運系統之人次`; `統計標準時間：以每月1日至該月底之事實為準`.
- **Highest-ridership station for July 2026, from the committed per-station data pull: A1 Taipei Main Station, 1,712,542 (entry 860,067 / exit 852,475) — more than double the next-highest station.** Source: `data/ridership/tymc-station.json`, derived from the same TYMC per-station PDF series above, PRIMARY, High confidence. The next four: A12 Airport Terminal 1 (732,462), A18 Taoyuan HSR Station (720,242), A13 Airport Terminal 2 (719,552), A8 Chang Gung Memorial Hospital (667,252).
- **Lowest-ridership station for July 2026: A20 Xingnan, 21,091 (entry 10,867 / exit 10,224); next lowest A16 Hengshan at 26,711.** Same source, PRIMARY, High confidence.
- **No TYMC-published ridership table splits figures by express (直達車) versus commuter (普通車) service type, or by any airport-worker/general-passenger distinction — checked across two separate months' whole-system and per-station reports and not found in either.** This directly answers a hypothesis this research was instructed to verify rather than assume; the hypothesis is not supported by any source read.
- **A well-documented financial-turnaround story ties TYMC's 2025 record surplus to ridership growth, per secondary (news) sources already verified in `docs/research/rail/lines/airport-mrt.md`:** 2025 surplus NT$679 million (a record), with roughly NT$1.1 billion of debt fully repaid; 2025 annual ridership exceeding 46 million, up 12% on 2024. Sources: Liberty Times (自由時報), 4 February 2026, and Storm Media (風傳媒), 6 February 2026, both SECONDARY, High confidence within that file (both read in full and independently corroborate the NT$679 million figure). Storm Media additionally reports a 2022 negative net worth of NT$706 million forcing a NT$1.067 billion bank loan, fully repaid April 2025.

## Conflicts

- **2024 daily ridership: 114,472/day (zh.wikipedia infobox) versus 114,289/day (城市學/GVM, 22 December 2024, as recorded in the existing research file) — a roughly 0.16% gap, neither figure re-verified against a primary in this pass.** The GVM figure predates year-end 2024 by nine days and may be a projection rather than a final count, which the existing research file flags as a possible explanation for the gap; not resolved.
- **Zh.wikipedia's own citation for its 2024 daily-ridership figure does not check out on inspection.** The infobox figure `114,472/日（2024年）` is footnoted to a TYMC article dated 26 May 2017 (`為機捷營運需要很多汗水 請個別人士少一點口水`), which by its date cannot be the source of a 2024 statistic and, by its title, appears to be a 2017 opinion piece rather than a ridership report. This is a genuine Wikipedia sourcing error caught by checking the citation against what it claims to support, per this project's rule 4 — the underlying TYMC article itself was not independently fetched to confirm its content (its old-format URL path likely no longer resolves), but the date mismatch alone means the citation as recorded does not support the figure it is attached to. Not published as a source for any figure on the content page.

## Checked and failed

- **Web search for accessibility and ridership queries** — checked 2026-08-27; the session's search-tool budget was exhausted before any TYMC-specific query returned results in this pass, so all findings rest on direct fetches of known or discovered URLs instead.
- **The TYMC homepage root** (`https://www.tymetro.com.tw/`, bare domain and legacy paths) — checked 2026-08-27, returned empty content or HTTP 404; the working site root was found only by following a link from elsewhere.
- **A verified, primary-sourced 2023 annual profit figure** — checked 2026-08-27; not established by any source checked in this pass or in the existing research file it draws on.

## Stated gaps

No TYMC report splits ridership by express versus commuter service, or by
airport-worker versus general passenger — checked directly and not found.
The 2024 daily-ridership figure is unresolved between two close but
non-identical values, and Wikipedia's own citation for one of them does not
support it on inspection. The cause of the anomalous 10-11 July 2026
low-ridership days is unknown. A precise 2023 profit figure remains
unestablished.
