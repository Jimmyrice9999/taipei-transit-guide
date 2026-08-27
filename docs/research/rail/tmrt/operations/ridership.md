# Taichung Metro ridership — research findings, 28 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. No existing research file for TMRT addressed ridership before this report.

This is a one-subject report on the Taichung Metro Green Line's ridership,
drawing on the operator's own monthly ridership-statistics PDF archive.
`content/rail/tmrt/` currently has no operations subdirectory.

## What is established

- **The operator publishes a monthly ridership-statistics table (運量統計表) as a downloadable PDF, archived at least back several years, listed on its own "資訊公開專區" (Information Disclosure) page.** Source: Taichung Metro Corporation (臺中捷運股份有限公司), `資訊公開專區` (Information Disclosure), `https://www.tmrt.com.tw/about/information-disclosure`, PRIMARY, High confidence, fetched and read in full (raw HTML parsed directly). The page lists the table titled `115年07月運量統計表` (July 2026, ROC year 115) as the most recent entry at the time of this research, dated 115-08-07 (7 August 2026).
- **The July 2026 monthly ridership PDF, extracted with `pdftotext`, gives a figure for every date from 2026/07/01 through 2026/07/31, a monthly total of 1,484,410, and a daily average of 47,884.** Source: Taichung Metro Corporation (臺中捷運股份有限公司), `115年07月運量統計表` (July 2026 [ROC 115] Ridership Statistics Table), `https://www.tmrt.com.tw/Content/Uploads/PublicClassArticle/6c95db63-c9ad-480f-aa4d-d97c01c26705.pdf`, PRIMARY, High confidence, full single-page PDF extracted with `pdftotext` after the fetch tooling used could not read it directly. The daily total (1,484,410) divided by 31 days equals 47,884.19, matching the separately stated daily average almost exactly — an internal arithmetic cross-check that this is a genuine, internally consistent total-and-average pair, not two unrelated numbers. **The table's column-header text did not survive extraction** — the PDF uses a CJK font encoding that `pdftotext` rendered as blank for every label, leaving only the numeric data and the ISO-format dates readable. What the count specifically measures (station entries, total boardings, or another definition) is therefore not confirmed from the text of this PDF alone, though "運量統計表" ("ridership statistics table," the file's own listed title on the disclosure page) is consistent with it being a daily total-ridership count, the conventional meaning of that term in Taiwan transit reporting.
- **One date within the month, 2026/07/10, shows a markedly lower figure (6,973) than every surrounding date (all in the 39,000–59,000 range).** Same source, PRIMARY, High confidence for the figure itself; the cause of the anomaly is not stated anywhere in the PDF and is not guessed at here — it could reflect a service disruption, a data-reporting gap, or something else entirely.

## Conflicts

None found — no second source giving a Taichung Metro ridership figure for the same or a comparable period was located this session.

## Checked and failed

- **The operator's 2024 annual report (2024年報)**, listed on the same information-disclosure page and fetched in full — checked 2026-08-28; the PDF uses an `Adobe-CNS1` CID character collection that this session's `pdftotext` could not decode at all (a "Syntax Error: Unknown character collection 'Adobe-CNS1'" on every page). Only the isolated English word "ridership" survived extraction from the entire document; no numeric or Chinese-language content could be read. This is a distinct PDF-extraction failure mode from the July monthly table, which extracted numbers cleanly but lost only its column-header text.
- **A station-by-station ridership breakdown** — checked 2026-08-28; the July 2026 monthly PDF gives one system-wide daily figure per date, not a per-station table. No source found this session gives station-level TMRT ridership.
- **Pages 2 onward of the monthly ridership-table archive listing** (which the disclosure page's own "1 2 3 4 5 6 7" pagination control shows exists) — checked 2026-08-28; not fetched this session. Only the most recent (July 2026) entry from page 1 was retrieved.
- **A precise definition of what the monthly table's figures count** (entries, exits, total boardings, or a farebox-transaction count) — checked 2026-08-28; not established, because the PDF's own column-header text did not survive extraction. Not guessed at beyond noting the file's own title uses "運量" (ridership/traffic volume), the conventional term.
- **Search-engine queries for TMRT annual or historical ridership totals** — checked 2026-08-28; the session's web-search budget was exhausted before this task could issue a query.

## Stated gaps

The precise definition of what the monthly ridership table counts is TBC —
the PDF's own column-header text did not survive extraction, so this report
does not assert it counts "boardings" or "entries" as a confirmed fact,
only as consistent with the file's own title. The 2026-07-10 anomaly's
cause is TBC. Historical, annual and station-level ridership figures are
all TBC — the one source successfully read this session covers a single
month at system-wide granularity only, and the operator's 2024 annual
report could not be extracted due to a PDF font-encoding failure distinct
from (and more severe than) the one recorded elsewhere in this project's
PDF-extraction notes.
