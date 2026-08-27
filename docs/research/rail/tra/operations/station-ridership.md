# Taiwan Railways station-level ridership — research findings, 27 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below records whether the underlying page was fetched and read in full, or only found via a search summary; the latter is not published as an established fact on the content page.

This is a one-subject follow-up. The published `content/rail/tra/operations/ridership-and-service.md`
page and its `_index.md` state that "station-level service data... still
needs a separate primary-data pass" and treat station-level ridership as a
blanket gap. This research finds that framing too pessimistic in one
respect and correct in another: a current, live, per-station dataset exists
and is publicly accessible; but its actual content (specific station
figures, rankings) could not be verified by this pass, and a true
station-to-station origin-destination matrix does not appear to exist in
public TRA/TDX data at all.

## What is established

- **TRA publishes a live, per-station, per-day entry/exit (turnstile-gate) dataset as open government data, with JSON and compressed downloads.** Source: National Taiwan Railway Corporation, `臺鐵每日各站點進出站人數`, via 政府資料開放平臺, `https://data.gov.tw/dataset/8792`, PRIMARY, High confidence — full page fetched, not a snippet. Fields: `trnOpDate`, `staCode`, `gateInComingCnt`, `gateOutGoingCnt`. Original-language basis: `檢視資料自20190423開始至20251231之進出站人數`.
- **The live JSON download resource, fetched directly, returns records for dates in January 2026, later than the dataset landing page's own stated end date of 31 December 2025.** Same URL family as above, PRIMARY, Medium confidence — a genuine, unresolved discrepancy between the landing page's coverage note and the resource's actual live content (see Conflicts).
- **One data point read from that live resource: station code 1000 (corroborated by a secondary railfan source as Taipei Station) recorded a `gateInComingCnt` of 62,751 and `gateOutGoingCnt` of 47,316 for 1 January 2026.** Same source, PRIMARY as data, but Low-Medium confidence on extraction — obtained via an AI summariser reading a large binary/JSON file rather than a verified parse; not independently re-parsed.
- **Correction to the above (2026-08-28): the two PDFs are not two copies of the same report, and only one of them carries the station-level table.** Both were successfully extracted in full with `pdftotext` after the fetch tooling used could not read either directly (see AGENTS.md's PDF-extraction guidance). The January 2024 **monthly** report (`https://www.railway.gov.tw/tra-tip-web/tip/file/3e5a77ba-0e7a-4fa3-81d6-cb56413b6e35`) has 21 tables, and its own Table 6 is 「線別客運延人公里」 (Passenger-Kilometers by Lines) — a **line-level**, not station-level, table. The secondary sources' claimed 「表6 各站客貨運起訖量」 does not exist under that number in the monthly report at all. The 2024 **annual** Statistical Digest (`https://tip.railway.gov.tw/tra-tip-web/tip/file/28e611f8-e25a-4ca9-9aad-967ca91ae8e0`, titled 臺灣鐵路統計要覽 113年) does carry a Table 6 titled exactly 「各站客貨運起訖量」 (Volume of Passenger & Freight Traffic, by station), spanning six pages (five continuations) and giving 上車人數 (boarding count) by station for civil year 113 (2024). PRIMARY, High confidence for the table's existence, title, scope and year. Original-language basis: `表6 各站客貨運起訖量`; `中華民國113年`; monthly report's own Table 6 heading: `表6 線別客運延人公里`.
- **The annual report's Table 6 content was read, but individual station-to-figure alignment could not be confirmed reliably from the extracted text, so no per-station figure from it is published as established.** The table renders station names as vertically-stacked single characters in narrow columns; both default and `-layout` text extraction reconstruct this as two separately-ordered blocks (all labels, then all values) rather than a clean row-by-row table, and a mis-scan attempt (`-layout` mode) visibly interleaved unrelated station-name characters. One data point — Taipei's 2024 annual boarding count of 22,598,749 — is plausible by position and is consistent in order of magnitude with the live open dataset's single-day Taipei figure (roughly 62,800 for 1 January 2026; 22,598,749 ÷ 365 ≈ 61,900/day), but this page still does not publish it as confirmed, because the underlying row-to-value mapping was not independently verified against the PDF's visual layout.
- **A third-party TDX guide (not TDX's own documentation) reports that TDX exposes the same-style entry/exit data via a documented function, and states that a full station-to-station origin-destination matrix is currently available only for Taipei MRT, not TRA.** Source: `TDX 運輸資料介接指南`, bookdown.org (independent author, not TDX itself), `https://bookdown.org/chiajungyeh/TDX_Guide/軌道運輸資料.html`, SECONDARY, Medium confidence — not verified against TDX's own primary documentation. Original-language basis: `目前僅臺北捷運提供` (currently only Taipei MRT provides [station-to-station volumes]).
- **A Wikipedia ranking article states its own methodology explicitly and cites Table 6 as its source; Table 6's existence, title and station-level scope are now confirmed (above), but its specific ranking figures remain unverified against the primary — see Conflicts.** Source: `臺灣鐵路車站旅客人次排名`, zh.wikipedia, SECONDARY, lead index only. Original-language basis: `排名順序則依據「每日平均進出站人次」一項目`.

## Conflicts

- **Dataset coverage window: the landing page states data runs to 31 December 2025; the live JSON resource itself returns January 2026 records.** Both readings came from full fetches of the same primary source family. Not resolved; may reflect a stale landing-page note or a split between "recent" and "historical" download files.
- **Whether the open dataset's "進出站人數" (gate entry/exit) and the annual report's "起訖量" (origin-destination volume) are the same measurement is unresolved** — no TRA source read states this explicitly, and secondary compilers (Wikipedia, a PTT post, a railfan blog) all treat them as equivalent without stating why. This determines whether figures from the two sources are even comparable, and this page does not assume they are.
- **Three different, unverified secondary figures for Taipei Station's daily-average entry/exit count**: 113,506/day for 2023 (a PTT post citing the "112年年報"), 122,149.53/day for 2024 (a railfan blog citing the "113年統計年報"), and 121,905/day for "2025 in part" (zh.wikipedia, citing Table 6). None of the three underlying primary documents could be read in this research; all three are reported as found, none picked, and none published as an established figure on the content page given none was independently confirmed.
- **Bottom-of-list station figures diverge sharply across the same three secondary sources' different years** (e.g., a station recorded as 0 or a handful of riders a year in one compilation, absent or differently valued in another) — consistent with genuine year-to-year variance at tiny stations, but none independently verified.

## Checked and failed

- **The January 2024 TRA Monthly Statistical Report PDF and the 2024 Annual Statistical Digest PDF, via the original fetch tooling** — checked 2026-08-27, both confirmed as genuine PDFs but unreadable by that tooling (compressed-stream extraction failure). Superseded 2026-08-28: both were successfully extracted with `pdftotext` (see "What is established" above); this entry is retained to record that the *original* fetch method failed, not that the content remains unread.
- **An older (~2019) station-level table PDF** (`https://www.railway.gov.tw/tra-tip-web/tip/file/7703f24b-0378-4419-88a3-9363d0457d54`) — checked 2026-08-27, same original extraction failure; not re-attempted with `pdftotext` in this pass.
- **A direct attempt to render these PDFs locally via the Read tool's page-image mode** — checked 2026-08-27, failed: the environment lacks `pdftoppm`/poppler-utils, so no PDF rendering method was available at all for these files this way. `pdftotext` (a separate tool, already present) succeeded instead — see AGENTS.md.
- **MOTC's own monthly statistics table for TRA passenger figures** (`https://www.motc.gov.tw/ch/app/statistics401/view?module=month&id=579&serno=201111160014`) — checked 2026-08-27, returned HTTP 500.
- **A Wayback Machine snapshot of the same MOTC page** — checked 2026-08-27, `web.archive.org` fetches are blocked in the tooling used.
- **TDX's own API documentation, to verify the third-party guide's claims (Claim 6 above)** — checked 2026-08-27; not fetched in this research, a real, specific gap left for a follow-up pass.

## Stated gaps

Whether the open dataset's gate-count figures and the annual report's
origin-destination table measure the same thing is unresolved. No verified
top-N or bottom-N station ranking exists from a primary source this
research could read — every specific station figure beyond the single,
unconfirmed-by-position Taipei data point rests on unverified secondary
compilations or an unreliable text-extraction alignment. Confirming the
annual report Table 6's row-to-value alignment — by checking the extracted
text against the PDF's actual visual layout, not just position in a text
dump — would settle most of the above and is the clear next step for this
subject. Whether MOTC separately publishes a station-level table is
unresolved due to a server error. A genuine station-to-station
origin-destination matrix does not appear to exist in public TRA/TDX data
(unlike Taipei MRT, per one unverified secondary source) — this specific
negative claim itself remains unconfirmed against TDX's own documentation.
