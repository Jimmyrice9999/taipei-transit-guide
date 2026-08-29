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

## Update, 29 August 2026 — the archive link problem was more specific than thought, plus unread headline leads

- **Corrected finding**: a more targeted fetch of the statistics-archive
  listing page did surface a working link — not by defeating JavaScript
  rendering, but by fetching one level deeper. `https://corp.krtc.com.tw/News/statistics?id=1`
  links to a per-report detail page
  (`.../News/statistics_more?id=ddf7fe6b35de4ab7b8f259975a2b424c`), which
  in turn exposes a direct PDF download URL
  (`.../ReadFileClick/?id=563&p=Statistics&n=4010268dd8b94e46a3656db2db3a6f29.pdf&fn=...`).
  The July 2026 monthly PDF (70.9 KB) was downloaded successfully this
  way. Its content still could not be extracted — the file's internal
  compression defeated the available text-extraction tooling, and no
  Bash/`pdftotext` access was available to this pass either. The prior
  "links not present in the raw page" framing should not be repeated
  unqualified; the more precise statement is in the content page now.
- **Wikipedia's citation title for this same archive URL does not match
  the live page.** Checked directly: the page's own heading is "企業訊息"
  and no report title carries per-station wording, contrary to
  Wikipedia's own title for the citation ("...各站旅運量統計表"). May reflect
  a page redesign since Wikipedia's 2019 archive snapshot (unreachable —
  web.archive.org is refused entirely by the fetch tool in this
  environment) or may mean the description was never accurate. Not
  resolved.
- **KRTC's annual-report PDFs (2016, 2019 tried) both exceeded the fetch
  tool's 10 MB size limit** and returned no content — these are
  image-heavy corporate reports, not simple tables. A Wikipedia-cited
  cumulative-ridership figure ("page 28" of one of these reports,
  599 million by end-2018, 650 million by end-2019) remains unread.
- **An unsourced Wikipedia sentence, checked and found genuinely
  unfootnoted**: the article's raw wikitext states KRTC faced severe
  losses "bordering on bankruptcy" five years into operation, requiring a
  September 2012 petition to amend its BOT contract with Kaohsiung City —
  no `<ref>` tag anywhere near this sentence in the wikitext. Not
  published; recorded as a strong lead for a future pass with working
  news-archive search (a 2012-era 中央社/自由時報/聯合報 search, or a
  KRTC/city government BOT-amendment document, would settle it).
- **Several 2025-2026 news headlines were found via Google News RSS feed
  metadata (a full XML fetch, not a search snippet) but could not be
  read past the headline** — a first post-pandemic profit (mid-2025), a
  195,000/day 2025 full-year average, a >240,000/day Q1 2026 average
  (corroborated by three independent outlets' headlines), and an Audit
  Office finding that Gangshan station (RK1) reached only 39% of a
  forecast ridership figure (corroborated by two independent outlets'
  headlines). None are published on the content page — a headline alone
  is not a read source under this project's rules.
- **The 2008-opening ridership-forecast-versus-actual controversy the
  task specifically asked about was not found anywhere** — including a
  targeted check of zh.wikipedia's raw wikitext for 預估運量/預測運量/可行性研究,
  which returned nothing. Completely unestablished; would need the
  original 1990s feasibility study/EIA ridership projection, or a Control
  Yuan investigation report, neither reached.

### Checked and failed (this pass)

- `stat.motc.gov.tw` — DNS failure, all paths, reconfirmed.
- `web.archive.org` (two specific Wikipedia-cited snapshots) — fetch tool
  refuses this host entirely.
- KRTC 2016/2019 annual-report PDFs — exceeded the fetch tool's 10 MB
  size limit.
- Nine Google News RSS article-redirect fetches across six stories, plus
  an `r.jina.ai` proxy retry (HTTP 403 both times) — all returned empty
  page shells, not article content.
- Direct fetch of chinatimes.com, thenewslens.com — HTTP 403 both.
- 自由時報, CNA, and two guessed audit-office domains' own site search —
  all 404 or DNS failure.
- Bing/DuckDuckGo as WebSearch substitutes — unusable (mismatched
  content, CAPTCHA); WebSearch budget exhausted before this pass began.
