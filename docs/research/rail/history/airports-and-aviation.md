> Corpus warning: docs/research/ is leads, not sources. Every claim below is
> either a fetched primary/secondary reading (marked as such) or a stated gap.
> Verify against primaries directly before publishing any figure from here.

# Taiwan airports and domestic aviation — research groundwork

**Status: researched 29 August 2026 (Run 304, scout dispatch). No content page
built this run.** This subject (Part 3f of the Run 304 brief) has no natural
home in the site's existing `content/` sections — rail, bus, ferry, bike and
ticketing all have dedicated top-level sections with their own nav wiring,
sitemap entries, and hand-maintained page-count assertions in
`tests/build-output.test.mts`; air travel does not. Building a real `/air/`
or `/aviation/` section needs the same kind of architecture decision Parts
2a/2b made explicitly for rail's nav split and the `/regions/` index — not
something to improvise mid-research-dump. This file exists so the research
is not lost; a future run should decide the section shape first, then import.

This mirrors the pattern `docs/taiwan-expansion.md` already used for TRA/THSR
groundwork: research complete, no page, explicit deferral with reasoning.

## What is established

### Airports

- **Taoyuan International**: opened 1979-02-26 as Chiang Kai-shek
  International Airport, renamed 2006. Terminal 1 (1979, renovated to
  169,500 m² by 2013), Terminal 2 (2000-07-29, expanded to 318,000 m² by
  2018), two runways (3,660 m and 3,800 m), a third under construction
  targeting 2030. **Source: zh.wikipedia only** — the operator's own
  history page (taoyuanairport.com.tw) is JS-rendered and could not be
  fetched; this is a real gap, not a completed verification.
- **Taipei Songshan**: opened 1936-03-24 under Japanese rule; became the
  primary international gateway until Taoyuan opened in 1979, retaining
  domestic/charter service since. Source: zh.wikipedia only; no dedicated
  history page found on tsa.gov.tw.
- **Kaohsiung International (小港)**: PRIMARY, kia.gov.tw/filearea/history.html.
  1944 airfield opened; 1965 CAA takeover; 1969 upgraded to international
  station; 1972 international passenger service (China Airlines
  Kaohsiung–Hong Kong); 1997 new international terminal; 2008 MRT Red Line
  airport station opened.
- **Taichung International (清泉崗)**: PRIMARY, tca.gov.tw. Relocated from
  Shuishan Airport 2004-03-06; new international terminal 2013-04-11;
  renamed 臺中國際機場 August 2016 (secondary only, not verified against
  tca.gov.tw).
- **Penghu (馬公)**: PRIMARY, mkport.gov.tw. CAT began C-46 service 1957;
  reclassified Class B 2003-05-28; 2023-09-15 merged with Qimei and Wangan
  stations into one 澎湖航空站. **Conflict**: establishment date given as
  either 1966 (unquoted paraphrase from the primary fetch) or 1977 (a
  secondary synthesis distinguishing terminal-construction-start from
  formal-station-establishment) — unresolved.
- **Kinmen (尚義)**: PRIMARY, kma.gov.tw. Civil service began 1987-09 (Far
  Eastern Air Transport, Kinmen–Taipei, using military facilities); formally
  established as Class C station 1994-03-01; new terminal 2010-02; upgraded
  to Class B 2011-01-01.
- **Matsu Nangan/Beigan**: PRIMARY, msa.gov.tw. Nangan opened 2003-01-23
  (approved 1997, built 1998–2001, cost NT$2.276bn); Beigan opened
  1994-01-17 (original 1961 military strip). Merged into one 馬祖航空站 on
  2023-09-15, upgraded from Class D to Class B — corroborated independently
  by the Executive Yuan's Kinmen-Matsu joint service centre. **Caution**:
  the WebFetch tool's own paraphrase mis-converted both ROC dates to the
  wrong Gregorian years in this research pass (corrected above using the
  quoted original text) — re-verify before publishing.
- **Lanyu and Green Island**: administratively branch units of Taitung Air
  Station, not independent CAA stations, per CAA's own facility list.

### Operators

- **UNI Air (立榮航空)**: serves 11 airports (excludes Lanyu, Green Island).
  Founding date (1996, EVA Air subsidiary) is secondary-only, not verified.
- **Mandarin Airlines (華信航空)**: PRIMARY, mandarin-airlines.com. Founded
  1991-06-01, jointly capitalized by China Airlines and the Hosieh Group;
  operates ATR72-600/B737-800/A321neo across 8 domestic destinations. A
  1992 full CAL buyout and 1999 merger with 國華航空 appear only in secondary
  synthesis, not on the airline's own page.
- **Daily Air (德安航空)**: the airline's own site was unreachable
  (`ECONNREFUSED`) every attempt — see Checked and failed below. Entirely secondary-sourced: predecessor
  達信航空 (1993/94), renamed and recapitalized 1996, first fixed-wing
  flight ~June 2005, sole operator serving Lanyu/Green Island/Wangan/Qimei.

### Subsidy schemes — two distinct mechanisms, confirmed via 全國法規資料庫

1. **離島地區居民航空票價補貼辦法** (passenger fare rebate, PRIMARY,
   law.moj.gov.tw/LawClass/LawAll.aspx?PCODE=K0090035): 20% off for
   Penghu/Kinmen main routes, 30% for Matsu Nangan/Beigan, 40% for
   Penghu's Qimei/Wangan and Taitung's Lanyu/Green Island, plus a 10%
   supplemental subsidy for Penghu/Kinmen residents to Taiwan proper.
   Originally promulgated 1999-07-01, renamed/revised 2003-07-30, most
   recent amendment in the consolidated text dated 2014-01-06.
2. **離島偏遠航線營運虧損補貼款** (operating-loss subsidy paid to Daily Air
   and UNI Air): confirmed to exist via recurring semi-annual CAA
   announcements back to at least FY2009; specific amounts sit in
   unopened DOC/PDF files.

### Aggregate statistics (PRIMARY, caa.gov.tw/StatisticChart.aspx?a=215)

All-airport combined passenger totals: 2020: 18.99m; 2021: 7.60m; 2022:
15.49m; 2023: 52.04m; 2024: 63.96m; 2025: 68.89m — split
international/cross-strait vs. domestic in the table. Per-airport
breakdowns exist as downloadable Excel/PDF files
(caa.gov.tw/Article.aspx?a=1088) but could not be opened in this
environment (no Bash/pdftotext access for this scout role).

## Conflicts found (published, not resolved)

- Penghu station establishment year: 1966 vs. 1977.
- Kaohsiung's international-service sequencing: primary page's 3-step
  timeline (1965/1969/1972) vs. a more granular but unverified secondary
  4-step account with different intermediate dates.
- Taichung relocation/terminal dates: one-day discrepancy between the
  primary fetch (2004-03-06 / 2013-04-11) and a secondary synthesis
  (2004-03-05 / 2013-04-10).
- Matsu Beigan runway relocation/extension: "July 1989" (primary page
  paraphrase) vs. "July 2000" (secondary synthesis) for what appears to be
  the identical 160 m relocation / 1,150 m extension work.

## Checked and failed

- **Taoyuan Airport's own primary history page** — docdetail.aspx?uid=255 is JS-rendered; WebFetch returned only the bare `<title>` on two separate attempts. Checked 2026-08-29.
- **taoyuan-airport.com (.com, not .com.tw)** — returned HTTP 403 on every path tried. Checked 2026-08-29.
- **dailyair.com.tw** — returned `ECONNREFUSED` on every attempt; Daily Air's own history/fleet pages could not be read. Checked 2026-08-29.
- **A dedicated Songshan Airport history/沿革 page on tsa.gov.tw** — searched directly; only navigation, FAQ and service pages found, no history page. Checked 2026-08-29.
- **CAA per-airport statistics Excel/PDF downloads** (caa.gov.tw/Article.aspx?a=1088) — links located but not opened; no file-download capability in this scout's toolset. Checked 2026-08-29.
- **CAA's 空運政策白皮書 (Air Transport Policy White Paper) PDF**, the likely source for an explicit "lifeline vs. commercial route" policy statement — not opened. Checked 2026-08-29.

## Stated gaps

Taoyuan's own primary history account (never read directly — only
Wikipedia); Songshan's official history page (not located); Daily Air's
company history and fleet (entirely secondary, primary site unreachable);
per-airport passenger statistics with dates (files not opened); specific
subsidy amounts under the operating-loss scheme (files not opened); UNI
Air's own founding-date page (not fetched); explicit CAA policy language
distinguishing lifeline from commercial routes (inferred structurally, not
quoted from source); Mandarin Airlines' 1992 divestment and 1999 merger
(secondary only).

## Recommendation for a future run

Before writing pages: decide the section architecture (a new `content/air/`
top-level section vs. folding into `/regions/` as a transport mode). Then
re-verify the two dated-conflict items above against a working fetch (a
JS-execution-capable fetch tool would resolve the Taoyuan/Daily Air gaps
directly). The subsidy-scheme legal citations and the aggregate CAA
passenger-statistics table are solid enough to publish as-is once a page
exists to hold them.
