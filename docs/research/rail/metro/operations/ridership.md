# Taipei Metro (TRTC/NTMC) ridership — research findings, 28 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes,
> not sources. `docs/research/rail/metro/ridership.md` was checked first —
> it covers the *technical provenance of structured TDX/per-station data
> files*, not narrative ridership statistics, so nothing here contradicts
> it; the two are complementary, not overlapping.

## What is established

- **FY2025 (ROC 114) TRTC average daily ridership: 2,101,700, up 3.7% from FY2024's 2,026,843 — split weekday 2,276,587 / holiday 1,740,170.** Source: TRTC's own FY2025 Operational Performance Report (臺北捷運公司114年度營運績效報告), PDF, `https://www.metro.taipei/cp.aspx?n=2EC550B62FFE16C2` (landing page), PRIMARY, High confidence, full 10-page PDF read directly (not a fetch summary). Quoted: 「114 年平均日運量 210 萬 1,700 人次...與 113 年 202 萬 6,843 人次/日相較，增加 7 萬 4,857 人次/日，增幅 3.7%。」
- **97.2% recovered to pre-pandemic (FY2019) levels**: FY2019 average daily ridership was 2,163,285. Same source, PRIMARY, High confidence: 「已恢復 97.2%」.
- **Full monthly average-daily-ridership series, 2019/2024/2025**, read directly from the report's bar chart — see full table in the content page. Same source, PRIMARY, High confidence.
- **Per-line service statistics, FY2025**: peak/off-peak headways, punctuality and train-availability rates for all five heavy/medium lines, all above statutory floors (punctuality >99%, availability >90%). Same source, PRIMARY, High confidence.
- **System reliability (MKBF): FY2024 = 23.009 million car-km (best-ever); FY2025 = 19.678 million car-km (second-best-ever).** Same source, PRIMARY, High confidence. A secondary paraphrase claiming "MKBF exceeds 20 million car-km" for both years does **not** hold for FY2025 — flagged explicitly as a case of a secondary source overgeneralizing the primary figure.
- **Cumulative ridership milestones**, TRTC's own company chronicle (大事紀), `https://www.metro.taipei/cp.aspx?n=B27E7BC8CBBCDA61`, PRIMARY, High confidence: 500M (4 Jan 2001), 2B (16 Aug 2005 — see conflict below), 4B (22 Apr 2010), 5B (17 Feb 2012), 10B (31 Mar 2019), 13B (3 Nov 2023), 15B (24 Jun 2026). This list is likely not exhaustive — extraction targeted "億人次" occurrences and may have missed intermediate entries (1B, 3B, 6-9B, 11-14B not found — see Checked and failed).
- **TRTC publishes only a two-way ridership split** (Wenhu Line vs. the other four heavy lines combined as "高運量"), not true per-line figures for Red/Green/Orange/Blue separately. Source: TRTC statistics table, `https://www.metro.taipei/cp.aspx?n=FED7CC0F31E0A664`, PRIMARY, High confidence. FY2025 annual: Wenhu 72,495,000; 高運量 (four lines combined) 694,624,000.
- **NTMC, by contrast, does publish true per-line figures**, via press releases rather than its statistics-download index. FY2025 full year: system total >30.09M, Circular Line >22.04M, Danhai LRT >6.01M, Ankeng LRT 2.03M. Source: NTMC press release, `https://www.ntmetro.com.tw/basic/?mode=detail&node=843`, dated 2026-01-08, PRIMARY, High confidence.
- **NTMC December 2025 average daily ridership by line**: Circular Line 71,688/day (+15.5% vs pre-earthquake baseline, +22%+ YoY); Ankeng LRT 7,006/day (+32.7% vs pre-earthquake baseline); Danhai LRT 18,090/day (Jan 2025: 14,000/day, +24% over the year). Source: NTMC press release, `https://www.ntmetro.com.tw/basic/?mode=detail&node=838`, dated 2025-12-12, PRIMARY, High confidence. Context: the Circular Line was disrupted by the April 2024 (113年4月) earthquake; this release marks one year since full restoration.
- **Sanying Line (三鶯線): trial service began 30 June 2026; first-month cumulative ridership exceeded 900,000; free through 31 August 2026.** Source: NTMC press release, `https://www.ntmetro.com.tw/basic/?mode=detail&node=884`, dated 2026-07-30, PRIMARY, High confidence.
- **Single-day figures**: New Year 2025→2026 24-hour system-wide ridership 3,043,167 (from TRTC's own monthly daily-ridership file, `https://web.metro.taipei/RidershipCounts/c/11412.htm`, PRIMARY, High confidence — cross-validated against the operational report's December bar-chart value). 15 August 2026 (Saturday): 2.13M+, described by TRTC as a record for August Saturdays specifically (not an all-time record), driven by Dadaocheng fireworks, a Taipei Dome game and a Pokémon GO event. Source: TRTC press release, PRIMARY, High confidence.

## Conflicts

- **TRTC total FY2025 annual ridership: 767,120,668 (zh.wikipedia, citing a Taipei City Transportation Bureau annual report) vs 767,119,000 (this project's own sum of TRTC's two-category table, Wenhu + 高運量).** Difference of 1,668, within the rounding tolerance of a 1,000-person-precision table — very likely the same underlying figure, not a substantive disagreement, but published as two values per the sourcing rule rather than picked. The Wikipedia-cited city-government PDF could not be independently verified — its tables are embedded as scanned images, unextractable without a working `pdftotext` pass (attempted, failed — see Checked and failed).
- **2 billion cumulative milestone date: 16 August 2005 vs 13 August 2005**, an internal extraction discrepancy across two fetches of TRTC's own chronicle page, not resolved. Publish as "August 2005" pending a cleaner re-fetch, or flag both dates.
- **Per-line ridership granularity differs by design between the two operators** (TRTC: two-way split only; NTMC: full per-line figures) — stated as a genuine asymmetry, not a gap to paper over.

## Checked and failed

- **The Taipei City Transportation Bureau's 114年臺北市交通統計年報 PDF**, cited by zh.wikipedia for the 767,120,668 figure — fetched successfully (6MB) but its tables are embedded as scanned images; WebFetch's summarizer could not locate the figure, and the Read tool's PDF-to-image fallback failed (`pdftoppm is not installed` in the scout's environment). The main session, which does have `pdftotext` access per AGENTS.md, should retry this PDF directly before treating either figure as settled.
- **NTMC's raw per-line statistics-download files (ODS/XLSX/PDF)** — one fetch attempt resolved to NTMC's homepage instead of the file (URL-encoding/redirect issue). Per-line figures instead came from NTMC's press releases, a valid but different primary source.
- **TRTC's "1億人次" (1998) and "30億人次" (2008) milestones**, both claimed by zh.wikipedia without an attached citation in its own wikitext — neither found in the portion of TRTC's chronicle successfully extracted. Not published; recorded as an unresolved lead, not a confirmed gap in TRTC's chronicle (which may simply not have been extracted in full).

## Stated gaps

- Individual per-line ridership for the four TRTC heavy lines separately (Red/Green/Orange/Blue) is not published by TRTC in any readily available table; TBC.
- Whether the 31 Dec 2025 24-hour figure (3.04M) is TRTC's genuine all-time single-day record is not confirmed — no "record" language was found attached to it directly.
- Exact day-of-month for the 2 billion milestone (13 vs 16 August 2005) is unresolved.
- Whether TRTC's chronicle records earlier/intermediate cumulative milestones is unconfirmed — the extraction pass used may not have captured the full page.
- Total fleet/trainset counts were not researched in this pass.
