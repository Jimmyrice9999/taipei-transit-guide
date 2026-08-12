# Research corpus warning

This file is a lead index, not a source. Every claim below has been checked
against a primary or a fully-read secondary source at the URL given. Where a
figure could not be traced to either, it is marked TBC and stays TBC on the
content page. Do not cite this file; cite what it cites.

This supersedes the previous version of `docs/research/rail/lines/airport-mrt.md`
(dated 6 August 2026, "Version 1.0"), which had no per-claim URLs, no
primary/secondary marking and no confidence levels — it was a to-do list, not
evidence. Where that version turned out to be wrong, unconfirmable, or
arithmetically inconsistent, it is flagged inline below rather than silently
dropped. The most consequential finding: **the lead's "NT$7.2 billion total"
claim against Marubeni does not appear, as a stated total, in any primary or
secondary source read for this run** — see claim 8 below.

---

# Taoyuan Airport MRT 機場捷運 (A)

Run: 2026-08-12. Taoyuan Metro Corporation (TYMC, 桃園大眾捷運股份有限公司),
交通部鐵道局 (MOTC Railway Bureau, formerly 高速鐵路工程局 / High Speed Rail
Bureau, the body that built the line before handing it to TYMC).

## What is established

### 1. Station list, codes A1–A22, is current in this site's TDX pull

`lib/stations.generated.ts` and `data/tdx/TYMC/station.json` /
`station-of-route.json` carry all 22 stations, operator `TYMC`, line `A`,
sequence 1–22, chainage 0–51.76 km, including `A22` (老街溪/Laojie River) and
the non-numeric code `A14a` (機場旅館/Airport Hotel) rather than a plain
"A14" — A14 is reserved for the not-yet-open Terminal 3 station (see claim
14). `data/tdx/meta.json` records the TYMC station dataset as 22 records,
`srcUpdatedNewest: 2026-03-13`.
- Source: TDX StationOfRoute/Station, operator TYMC, committed to this
  repository at `data/tdx/TYMC/`, PRIMARY (government open data), confidence
  High — read directly, not summarised.
- This confirms the content stub's claim that "the station list beside it is
  generated from the government registry and current" was already true and
  should be kept, not rewritten.

### 2. Route length: two figures, genuinely two different measurements

TDX's `route.json` for route A-1 (Taipei Main–Laojie River, the all-stops
routing) gives `RouteLength: 51.76`, and `station-of-route.json`'s
`CumulativeDistance` at A22 independently sums to the same 51.76 km. New
Taipei City DORTS's own project page for the line instead states: 「臺灣桃園
國際機場聯外捷運系統... 路線全長51.03公里」— total route length 51.03 km.
- Source: TDX Route, operator TYMC, `data/tdx/TYMC/route.json`, PRIMARY,
  confidence High.
- Source: 機場線, New Taipei City Government Department of Rapid Transit
  Systems (新北市政府捷運工程局), https://www.dorts.ntpc.gov.tw/about/route/npW0dxy4Z3Ex,
  accessed 2026-08-12, PRIMARY, confidence High — builder's own project
  record for the New Taipei-managed portion, read in full.
- **Conflict, not resolved**: 51.76 km (TDX, the sum of surveyed inter-station
  chainage) against 51.03 km (DORTS NTPC's published project length). Both are
  primary. The 0.73 km gap has the same shape as the Wenhu Line's multiple
  length figures — likely non-revenue track, tail track or a different
  start/end reference point — but nothing found here says which. The
  research-file lead's "51.03 km" (unsourced) happened to match the DORTS
  figure, not TDX's.

### 3. Planning did not begin in one single year — three distinct starting points exist across sources

- 交通部運輸研究所 (MOTC Institute of Transportation) began a feasibility
  study for a Taoyuan-area metro system in October 1989 (民國78年10月),
  completing 《桃園都會區大眾捷運系統可行性研究》 in June 1990. This is the
  earliest date found for "planning."
  - Source: search-engine synthesis of results citing 交通部運輸研究所
    publications; the primary report itself was not located and fetched.
    SECONDARY at best, confidence Low — the 1989/1990 dates are consistent
    across independent search results but no single full primary or
    secondary page stating them was fetched and read in full. Flagged as
    **not found at primary-source strength**, distinct from confirmed.
- zh.wikipedia's history section (fetched in full) instead opens with
  1990s-era planning by 臺灣省住宅及都市發展局 (Taiwan Provincial Housing and
  Urban Development Bureau), then: 「1996年10月中央政府決定以民間興建營運後
  轉移模式（BOT模式）興建」— October 1996, central government decided to
  build the line via BOT — and 「1998年長生國際開發公司擊敗另外四家競標申請
  者」— Long Life International Development Co. won the BOT bid in 1998.
  - Source: 桃園機場捷運, 維基百科 (zh.wikipedia),
    https://zh.wikipedia.org/zh-tw/桃園機場捷運, accessed 2026-08-12,
    SECONDARY, confidence Medium — read in full.
- TYMC's own company history page and New Taipei DORTS both instead date the
  project's institutional start to the government take-over after the BOT
  model failed: 「92年10月28日交通部函示指定高鐵局為本計畫之工程建設機構」
  (28 October 2003, MOTC designated the High Speed Rail Bureau as the
  project's construction body) and 「93年03月09日中央核定桃園國際機場聯外捷
  運建設計畫」(9 March 2004, central government approved the construction
  plan) — the New Taipei DORTS page gives the same March 2004 date as
  "planning start": 「臺灣桃園國際機場聯外捷運系統建設計畫規劃報告書93年3月9
  日奉行政院核示原則同意」.
  - Source: 關於桃捷 > 桃捷大事紀, Taoyuan Metro Corporation,
    https://www.tymetro.com.tw/tymetro-new/tw/_pages/about/history.html,
    accessed 2026-08-12, PRIMARY, confidence High — read in full.
  - Source: 機場線, New Taipei City DORTS (as claim 2), PRIMARY, confidence
    High.
- **Conflict, not resolved.** "Planning began in 1989" (the lead's figure) is
  the earliest of at least three defensible starting points — a 1989–90
  feasibility study (weakly sourced here), a 1996 BOT decision, and a
  2003–04 government-build decision (both strongly sourced) — and different
  publishers plainly mean different things by "planning." This page states
  the milestones separately rather than collapsing them into one number.

### 4. The BOT model collapsed 31 December 2002

zh.wikipedia: 「2002年12月31日長生公司與交通部高鐵局召開會議，達成終止議約的
共識，民間興建營運後轉移模式（BOT模式）正式被宣告失敗」— on 31 December 2002,
Long Life Co. and the High Speed Rail Bureau met and agreed to terminate the
contract; the BOT model was formally declared a failure.
- Source: 桃園機場捷運, zh.wikipedia (as claim 3), SECONDARY, confidence
  Medium — read in full; not independently corroborated by a primary MOTC or
  Railway Bureau page in this run, though it is consistent with the
  government taking over construction responsibility in October 2003 per
  TYMC's own history page (claim 3).

### 5. Construction start: two contemporaneous dates for two different sections

New Taipei DORTS: 「『三重站－桃園機場－中壢』段工程及機電系統已於2006年2月27
日正式開工」— the Sanchong–Airport–Zhongli section and E&M systems formally
broke ground 27 February 2006. TYMC's own history page instead gives 26 June
2006 for a groundbreaking ceremony (「行政院長蘇貞昌為機場捷運工程主持動土典
禮」) presided over by the Premier. A separate zh.wikipedia-sourced figure
(not independently re-verified this run) gives 25 September 2006 for the
Taipei-section start.
- Source: 機場線, New Taipei DORTS (claim 2), PRIMARY, confidence High.
- Source: 桃捷大事紀, TYMC (claim 3), PRIMARY, confidence High.
- **Not a contradiction so much as three different events on the calendar in
  2006** — an actual construction start for one section (Feb), a ceremonial
  groundbreaking (June), and a second section's start (Sept, weakly sourced
  this run). The content page states what is sourced and does not force a
  single "construction start" date.

### 6. Opening: 2 March 2017, confirmed by three independent primary/near-primary sources

TYMC: 「機場捷運線於106年3月2日正式營運通車」. New Taipei DORTS: 「106年3月2
日 全線通車營運」. Both agree exactly.
- Source: 關於桃捷, TYMC, https://www.tymetro.com.tw/tymetro-new/tw/_pages/about/index.html,
  accessed 2026-08-12, PRIMARY, confidence High.
- Source: 機場線, New Taipei DORTS (claim 2), PRIMARY, confidence High.

### 7. The opening date changed six times between an original January 2009 target and March 2016

CNA (中央社), 4 March 2016: 「這項12年前就核定由政府興建的重大政策，最早決定
的通車日是2009年1月，至今已變更6次。」— the earliest announced opening date
was January 2009; by the article's date it had changed six times. The article
text fetched did not include an itemised list of each of the six dates with
full detail (page truncated in fetch); a search-engine synthesis (not a full
page read, treated as weak) sketched a partial sequence: original target
2009年1月; revised for split-section opening (Zhongli–Sanchong Dec 2010,
Sanchong–Taipei Feb 2013) after Taipei City required the Sanchong–Taipei
section go underground; further slips to mid-2013 and 2014 for construction
cost and land-cost reasons; a 2013 slip attributed to construction-material
price spikes delaying the civil-works tender; and finally the July
2015 announcement of a March 2016 target that was itself missed because
system testing did not meet contract standards.
- Source: 機場捷運通車時程變更6次 始末報你知, 中央社 CNA, 4 March 2016,
  https://www.cna.com.tw/news/firstnews/201603040457.aspx, accessed
  2026-08-12, SECONDARY (wire service), confidence Medium for the "six
  changes since January 2009" headline claim (directly quoted and read);
  Low for the itemised list of individual dates, which came from a search
  synthesis rather than a full page read and is flagged as **not
  independently verified this run** — a `Checked and failed` item below.
- The lead's claim of "six publicly announced delays" (六度延宕) is
  consistent with this, and Taoyuan's tourism portal and other sources use
  the same 六度延宕 phrase, but the itemised delay table on the lead file
  (17 July, 5 March, 5 August, 2 December) could not be matched to this
  CNA chronology or independently confirmed this run — see Checked and
  failed.

### 8. The Marubeni dispute: two figures confirmed, a "total" figure not found anywhere

Multiple independent secondary sources, all dated within days of each other
in January 2017 and all attributing the same two figures to the same
government body (高鐵局, the High Speed Rail Bureau), state:

- **NT$2.5 billion (25億元) contract penalty, the contractual maximum.**
  CNA: 「除將對承包商日本丸紅公司延後完工裁罰新台幣25億元外」, and separately
  「根據合約，工期延誤的罰款，每天按工程費萬分之5計算，罰金最高上限約25億
  元」— delay penalties accrue at 0.05% of contract value per day, capped at
  about NT$2.5 billion, and the cap had already been reached because of the
  severity of the delay.
- **NT$1.9 billion (19億多元) performance bond withheld**, for a different
  and more specific reason: Marubeni's unauthorised subcontracting of the
  signalling system, which its contract required it to design itself, to a
  British firm. CNA: 「扣住部分履約保證金約19億多元」, reason given as
  Marubeni's illegal subcontracting of signalling work.
- **Separately, Marubeni's own counter-claim against the Ministry: NT$12.9
  billion (129億元)**, on the grounds that the High Speed Rail Bureau had
  made repeated design changes. CNA: 「丸紅公司曾以高鐵局多次變更設計為由，
  向交通部求償129億元」.
- Source: 機捷算總帳 高鐵局將罰丸紅25億並求償, 中央社 CNA, byline 記者汪淑芬,
  9 January 2017, https://www.cna.com.tw/news/ahel/201701090048.aspx,
  accessed 2026-08-12, SECONDARY (national wire service, contemporaneous),
  confidence High for these three figures — read in full, quoted directly.
- Source: 機場捷運年後算總帳！高鐵局將罰丸紅25億並求償, The News Lens,
  https://www.thenewslens.com/article/58853, accessed 2026-08-12, SECONDARY,
  confidence Medium — corroborates the same two Marubeni-side figures
  (NT$2.5bn / NT$1.9bn) independently.
- Source: 機捷有望春節前後通車 高鐵局找丸紅算總帳大罰25億, 三立新聞網 SETN,
  https://www.setn.com/news.aspx?newsid=214557, accessed 2026-08-12,
  SECONDARY, confidence Medium — third independent corroboration of the same
  two figures, plus a detail not in the other two: 「桃園大眾捷運公司及桃捷
  股東之一的新北市政府都曾因機捷進度大幅落後，分別向中央求償4億多元與2億多
  元」— TYMC and New Taipei City (a TYMC shareholder) had separately sought
  roughly NT$400 million and NT$200 million respectively from central
  government over the delay, which the Bureau said it would try to recover
  from Marubeni too.

**On the lead's "NT$7.2 billion total" claim: not confirmed, and probably
wrong.** NT$2.5bn + NT$1.9bn = NT$4.4bn, not NT$7.2bn, and no source read or
searched for this run — not CNA, not News Lens, not SETN, not the Control
Yuan chronology attachment (see Checked and failed), not zh.wikipedia's main
article (which, read in full, contains no Marubeni monetary figures at all)
— states a combined total of any kind, let alone NT$7.2 billion specifically.
The NT$7.2bn figure appeared repeatedly in this run's own web-search-engine
*synthesised summaries* (pre-digested search results, not fetched pages), in
one case appearing in the same summary as an unrelated, later, much smaller
2021 figure (NT$726.93 million / 7億2692萬6496元 — see claim 9) that shares a
leading "7" and could plausibly be the source of the confusion. Per the
skill's rule to fetch full pages rather than publish from a synthesis, **this
page does not repeat the NT$7.2 billion combined total.** The two component
figures (NT$2.5bn penalty, NT$1.9bn withheld bond) are published because they
were each independently confirmed against three contemporaneous CNA/News
Lens/SETN accounts, all naming Marubeni specifically and all citing the same
government source (高鐵局) for the same reasons. **The Marubeni company name
is published on this basis** — the individual figures and the attribution are
confirmed; the "NT$7.2 billion total" headline figure is not, and this page
says so explicitly rather than repeating it as fact.

### 9. A separate, later, and much smaller Marubeni dispute: NT$726.93 million withheld in 2021, for missed performance targets

CNA, 29 August 2021: 「以扣工程款方式辦理驗收，並建議減價金額7億2692萬6496
元」— the Public Construction Commission recommended a price reduction (i.e.
withholding from the contract payment) of NT$726,926,496, for missing three
contractual performance standards: direct-train A1–A12 travel time (contract
required under 35 minutes; actual 35分47秒 and 36分59秒 in the two
directions), average speed (60 km/h required for express trains, 58.31 and
56.46 km/h achieved; commuter trains missed their 45 km/h target by more),
and headway (contract required a direct and a regular train every 6 minutes;
service had run at roughly 15-minute intervals since the 2017 launch). The
Commission's recommendation reached the Railway Bureau in March 2021,
referencing a decision from "去年底" (late 2020).
- Source: 機捷行車時間未達標 鐵道局扣丸紅7億多元工程款, 中央社 CNA, 29 August
  2021, https://www.cna.com.tw/news/firstnews/202108290054.aspx, accessed
  2026-08-12, SECONDARY (wire service), confidence High — read in full,
  quoted directly.
- This is a distinct dispute from claim 8: a different year (2020–21 decision
  vs. 2016–17), a different amount (NT$727 million vs. NT$2.5bn/NT$1.9bn),
  and a different cause (missed in-service operating standards vs. delay
  penalty and unauthorised subcontracting). Not on the content page as part
  of the "delays" story; noted here because it is exactly the kind of figure
  that circulating summaries could compress into "over NT$7 billion" and
  further muddy the NT$7.2bn question in claim 8.

### 10. Express and commuter stop patterns, from TYMC's own timetable pages

TYMC's own travel-guide/timetable page states the express (直達車) stopping
pattern as A1, A3, A8, A12, A13, and a peak-only enhanced express (尖峰增停
直達車) calling additionally at A18 and A21: A1, A3, A8, A12, A13, A18, A21.
zh.wikipedia independently names the same peak pattern "環北直達車" (Huanbei
Express) with a run time of about 64 minutes, and gives the base express
(A1→A3→A8→A12→A13) as 34.03 km and about 39 minutes. The commuter (普通車)
service calls at every station, A1 through A22; the A21–A22 (Huanbei–Laojiexi)
section carries commuter trains only, consistent with TDX's route data, where
route A-1 (all-stops) reaches A22 but routes A-2 and A-3 (the shorter
patterns TDX models) stop short of it.
- Source: 桃園捷運 乘車指南, TYMC,
  https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/timetable.php,
  accessed 2026-08-12, PRIMARY, confidence High — read in full.
- Source: 桃園機場捷運, zh.wikipedia (claim 3), SECONDARY, confidence Medium.
- **A data-model gap, not a content error**: TDX's `route`/`station-of-route`
  datasets for TYMC have no way to express a skip-stop pattern — every route
  object it defines lists consecutive sequence numbers through every
  intervening station, so the "A-2" and "A-3" routes in `data/tdx/TYMC/`
  are not the skip-stop express service; they are shorter all-stop-within-
  range services. The actual express skip-stop pattern is not in this site's
  TDX pull at all and rests entirely on TYMC's own timetable page and
  zh.wikipedia. Recorded so a future editor does not mistake TDX's A-2/A-3
  routes for the express.

### 11. Rolling stock: manufacturer identified for both fleets — the lead's biggest gap is closed

**Express fleet (2000-type, purple):** built by **Kawasaki Heavy Industries**
(川崎重工業), produced 2011–2013, delivered for the 2 March 2017 opening.
zh.wikipedia's dedicated article: 「該型列車由川崎重工業製造」. 11 five-car
sets (201–211), 55 cars total — 4 passenger cars plus 1 dedicated luggage
car per set, all-powered (5M) configuration. Third-rail DC 750V, 1,435mm
standard gauge. Approximately 855 passengers per set, 206 seats, 8 wheelchair
spaces. Operating speed 100 km/h, design maximum 110 km/h. Transverse (橫向)
seating; large overhead luggage racks; WiFi; USB charging; wireless charging
pads noted in one photo caption as currently suspended (暫停使用) — a detail
the lead's "wireless charging with iPhone/Android adapters" claim did not
carry and should not be repeated as current without a fresher check.
- Source: 桃園捷運2000型電聯車, 維基百科 (zh.wikipedia),
  https://zh.wikipedia.org/zh-tw/桃園捷運2000型電聯車, accessed 2026-08-12,
  SECONDARY, confidence Medium-High — read in full; infobox figures are
  internally consistent and match the independent search-engine corroboration
  below.
- Corroborating source (manufacturer only, independent search): confirms
  「桃園捷運2000型電聯車（直達車）由川崎重工業製造」, consistent with the
  Wikipedia infobox. SECONDARY, confidence Medium.

**Commuter fleet (1000-type, blue):** a split-manufacturer fleet under an
industrial-cooperation arrangement — **Kawasaki Heavy Industries built the
prototype and some later sets (101, 118–120); the rest (102–117) were
assembled domestically by 台灣車輛股份有限公司 (Taiwan Rolling Stock Co.)
under an ICP (Industrial Cooperation Programme) arrangement.** zh.wikipedia's
infobox: 「川崎重工（101、118~120編組）」／「台灣車輛（102~117編組）」.
Built 2011–2012 and again in 2015 (a later order); entered service 2 March
2017. 4-car sets (4M), 20 sets currently (目前) = 80 cars. Longitudinal
(縱向) seating for higher standing capacity; DC 750V third rail; 1,435mm
gauge; 100 km/h operating speed, 110 km/h design maximum.
- Source: 桃園捷運1000型電聯車, 維基百科 (zh.wikipedia),
  https://zh.wikipedia.org/zh-tw/桃園捷運1000型電聯車, accessed 2026-08-12,
  SECONDARY, confidence Medium-High — read in full.
- **Seat-count check performed and worth recording**: the article's summary
  prose read as "每節車廂計有188個座位" (188 seats per car), which would be
  implausible for a single metro car. The article's own per-car composition
  table gives 44 (DMC1) + 47 (MC1) + 50 (MC2) + 44 (DMC2) = 185 seats for the
  whole 4-car set — close enough to 188 (allowing for priority/fold seats not
  itemised in the table) that "188" is almost certainly the **per-set** total,
  matching the research-file lead's own "188 seats" claim (there stated
  without a source). This page publishes 188 as the per-set figure and flags
  that the source article's own prose is ambiguous on this point.
- **Not found at a primary source**: 交通部鐵道局's page on the airport line's
  rolling stock subsystem (機場捷運系統各子系統－電聯車) was fetched in full and
  contains no technical specifications, only navigation and unrelated project
  news — see Checked and failed below.

### 12. In-town check-in: current station hours confirmed from TYMC's own process page; airline lists from secondary aggregation only

TYMC's own check-in procedure page states operating hours: **A1 Taipei Main
Station, B1 level, 06:00–21:30; A3 New Taipei Industrial Park Station, 1F
level, 09:00–16:00**, with check-in closing 3 hours before flight departure
at both stations (「於班機起飛前3小時停止辦理預辦登機手續」).
- Source: 預辦登機須知, TYMC,
  https://www.tymetro.com.tw/tymetro-new/tw/_pages/checkin/process.php,
  accessed 2026-08-12, PRIMARY, confidence High for the hours and cutoff;
  this page does not itself list participating airlines.
- TYMC's own check-in overview page links onward to Taoyuan International
  Airport Corporation's own ITCI page
  (https://www.taoyuan-airport.com/ITCI/index.html and the mobile variant
  https://web.taoyuan-airport.com/ITCI/mobile/index.html) for the current
  airline list. **Both returned HTTP 403 to this run's fetch tool and could
  not be read directly** — see Checked and failed.
- Two independent search-engine aggregations (not full primary-page reads,
  but agreeing with each other exactly) give the same airline lists: **A1 —
  China Airlines (中華航空), Mandarin Airlines (華信航空), EVA Air (長榮航
  空), UNI Air (立榮航空), Cathay Pacific (國泰航空), Starlux (星宇航空)**;
  **A3 — China Airlines, Mandarin Airlines, EVA Air, UNI Air, Tigerair
  Taiwan (台灣虎航), and the AirAsia group (全亞洲航空, flight-code prefixes
  AK／D7／FD／Z2)**. SECONDARY, confidence Low-Medium — two independent
  aggregations agreeing is better than one, but neither is a page this run
  fetched and read directly, and airline participation is exactly the kind
  of detail that changes without notice.
- **This corrects the lead file**, which listed AirAsia (excluding Japan
  AirAsia) as an A1 carrier. Both aggregations found this run put AirAsia and
  Tigerair at **A3 only**, not A1; A1's list instead includes Cathay Pacific
  and Starlux, which the lead's A1 list omitted.

### 13. A22 extension: opened 31 July 2023, and the delay was multi-causal, not purely signalling

MOTC's own press release on the A22 opening states construction began
December 2012 (not 2013, contradicting one secondary source in the search
results), completed stability testing March 2023, was inspected by MOTC 18
June 2023, and received its operating permit 31 July 2023, the same day
service began. It gives three delay causes together, not one: **(1) COVID-19
era workforce disruption at foreign E&M suppliers, 2020–2022** (「109~111年
間因遭遇新冠肺炎疫情影響國外機電廠商工率」); **(2) high technical difficulty
integrating the extension's dual-generation signalling system with the
existing line, requiring extended testing** (「新舊系統整合技術難度高且測試
期程較長」); and **(3) design changes needed to coordinate with the separate
Taoyuan Rail Underground project.** Total project cost NT$17.302 billion.
- Source: 交通新聞稿－機場捷運延伸線A22老街溪站正式通車, 中華民國交通部
  (MOTC), https://www.motc.gov.tw/ch/app/data/view?module=news&id=14&serno=03fcdf67-3c92-46b9-b79b-cc98b983dc04,
  accessed 2026-08-12, PRIMARY, confidence High — read in full.
- A separate secondary search result specifically on the signalling issue
  adds operational colour not in the MOTC release: the nightly test window
  for integrating old and new signalling was only about 3 hours, after
  revenue service ended each night. SECONDARY, confidence Low — from a
  search synthesis, not a page read in full this run.
- **This corrects the lead**, which attributed the delay to signalling
  integration alone (and specifically to "manually changing signals" for
  express-train routing, a detail not found in any source read this run).
  Signalling integration is one of three causes MOTC's own release gives, not
  the sole cause, and the "manually changing signals" detail is unconfirmed
  — see Checked and failed.

### 14. Future extensions: A23 Zhongli now targeted 2029 (revised from 2028); A14 Terminal 3 targeted 2027

A search-engine synthesis citing Liberty Times and United Daily News
reporting states the A23 Zhongli extension was originally targeted for July
2028 but has been pushed to around July 2029, because the Railway Bureau
agreed to redesign A23's platforms to connect directly with the Taoyuan
Metro Green Line extension, adding roughly NT$396 million and a year's delay;
project progress was given as 84.93% complete and total budget NT$17.202
billion as of end-June 2025. For the A14 Terminal 3 station, a search
synthesis citing United Daily News gives a target opening of end-2027,
alongside Taiwan's Terminal 3 itself, with a stated project budget of
NT$6.043 billion and a stated project period of 2017–2026 (民國106–115年).
- SECONDARY, confidence Low for both figures — both came from search-engine
  syntheses of news results, not from a Railway Bureau project page read in
  full this run (the Bureau's own A14 project subpage was attempted and
  returned only navigation, no content — see Checked and failed). Treated
  as provisional dates, explicitly caveated as such on the content page,
  and superior to the lead's vaguer "2029" (line-wide) and "planned" (A14),
  since at least a specific target and a stated reason for the A23 slip are
  now recorded.

### 15. The financial turnaround: 2023 first profit, but a precise 2023 NT$ figure was not found; 2024, 2025 figures are corroborated by two independent sources with a small numerical mismatch

Liberty Times (自由時報), 4 February 2026, dateline explicitly current at
time of writing: 「桃園捷運去年盈餘6.79億元創新高... 近11億債務全清償」— last
year's (2025) surplus reached NT$679 million, a record, and close to NT$1.1
billion of debt was fully repaid; and separately 「去年全年運量來到4600多萬人
次，相較2024年增加12%」— 2025 annual ridership reached over 46 million,
up 12% on 2024. A Storm Media (風傳媒) profile of the turnaround, published 6
February 2026, independently gives: 2022 negative net worth of NT$706 million
(「淨值-7.06億元」) forcing a NT$1.067 billion bank loan; 2023 as the first
profitable year (no NT$ figure given for 2023 specifically); 2024 profit
"over NT$400 million"; 2025 profit NT$679 million (matching Liberty Times
exactly); and **the bank loan fully repaid "去年4月" — April of "last year"
relative to a February 2026 publication date, i.e. April 2025**, not April
2026 as the lead file states. A third source (城市學/GVM, 22 December 2024)
gives 2024 surplus as NT$500 million, "a fourfold increase from the previous
year's NT$124 million" — implying a 2023 profit of roughly NT$124 million,
and 2024 daily ridership of 114,289 (annualised ≈41.83 million) — both of
which conflict with Storm's "over NT$400 million" for 2024.
- Source: 桃園捷運去年盈餘6.79億元創新高 近11億債務全清償, 自由時報, 4
  February 2026, https://news.ltn.com.tw/news/Taoyuan/breakingnews/5332661,
  accessed 2026-08-12, SECONDARY, confidence High — read in full, quoted
  directly, publication date puts it inside this project's "current" window.
- Source: 賠錢貨如何變身小金雞？桃園捷運賺錢了！張善政曝3關鍵：10億債務全還清,
  風傳媒 Storm Media, 6 February 2026,
  https://www.storm.mg/lifestyle/11101286, accessed 2026-08-12, SECONDARY,
  confidence High — read in full, quoted directly, includes a direct quote
  from Taoyuan Mayor 張善政.
- Source: 桃園機場捷運2024盈餘5億創新高！為何全線取消車票10元優惠？, 城市學
  (GVM), 22 December 2024, https://city.gvm.com.tw/article/117975, accessed
  2026-08-12, SECONDARY, confidence Medium — read in full; note this article
  predates the end of 2024 by nine days, so its "2024" figures may be a
  projection rather than a final result, which would explain the mismatch
  with Storm's later, presumably final, "over NT$400 million" figure for the
  same year.
- **Conflicts published, not resolved**: (a) 2024 profit — "over NT$400
  million" (Storm, Feb 2026, retrospective) against "NT$500 million" (GVM,
  Dec 2024, likely a pre-year-end estimate); (b) implied 2023 profit — no
  source gives a 2023 figure directly, but GVM's "fourfold increase" framing
  against its own NT$500m figure for 2024 implies roughly NT$124 million for
  2023, which cannot be cross-checked against any other source; (c) **debt
  repayment date — April 2025 (two independent 2026 sources agree) against
  the lead file's unsourced "April 2026," which this page treats as wrong**.
- The lead's 2025 ridership figure ("over 46 million, +12% YoY") and 2025
  surplus figure ("NT$680 million", against the sourced NT$679 million) both
  check out closely — near enough that the lead was very likely working from
  the same or an adjacent report, with NT$680m most likely a rounding of the
  same NT$679m figure.

### 16. TYMC corporate facts: capital, ownership split, headquarters

zh.wikipedia's dedicated company article, cross-checked against a company-registry
search-engine synthesis: capital NT$3 billion (新臺幣30億元) at founding, 6
July 2010; ownership split by original construction-cost share — Taoyuan
64.01%, New Taipei 29.32%, Taipei 6.67%; renamed from 桃園大眾捷運股份有限
公司's predecessor name upon Taoyuan County's 25 December 2014 upgrade to a
municipality; headquarters at the Qingpu Depot (青埔機廠) site, 251 Linghang
North Road Section 4, Dayuan District, Taoyuan, relocated there 19 July 2014
— consistent with the lead's HQ address, and confirms it sits beside A17
Linghang, not A18 Taoyuan HSR.
- Source: 桃園捷運公司, 維基百科 (zh.wikipedia),
  https://zh.wikipedia.org/zh-tw/桃園捷運公司, accessed 2026-08-12,
  SECONDARY, confidence Medium — read in full.
- The capital/shareholding figures were independently corroborated by a
  search-engine synthesis of company-registry sources (twincn.com,
  companys.com.tw); treated as consistent rather than independently primary.

### 17. Two depots, not one

zh.wikipedia's main article names two depots: **蘆竹機廠 (Luzhu Depot)** and
**青埔機廠 (Qingpu Depot)** — the latter is also TYMC's headquarters site
(claim 16).
- Source: 桃園機場捷運, zh.wikipedia (claim 3), SECONDARY, confidence Medium
  — named but not otherwise detailed (which trains are based where, opening
  dates) in the material read this run.

### 18. Fares: NT$160 maximum single fare confirmed; the NT$10 discount was cancelled 2 January 2025

A single journey from Taipei Main Station to either airport terminal is
NT$160[^ticket-check], and TYMC's own fare page describes this as the
distance-based structure without a currently-active discount. GVM's December
2024 article on the fare-cost story states the discount was withdrawn from 2
January 2025: 「機捷全線取消車票10元優惠」, attributed to Chairman 陳志長
citing rising electricity costs. Combination tickets — airport-line return
plus a Taipei Metro 48-hour pass, NT$520; plus a 72-hour pass, NT$600 — are
stated on TYMC's own ticketing page. The Keelung–Taipei–New Taipei–Taoyuan
NT$1,200 monthly pass (基北北桃1200都會通) covers the Airport MRT at
unchanged pricing per a 2025 secondary report on TYMC's fare package.
- Source: 桃園捷運 乘車指南 (ticketing), TYMC,
  https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/ticket.html,
  accessed 2026-08-12, PRIMARY, confidence High for the combination-ticket
  figures and payment-card list; the page as fetched did not itself restate
  the NT$160 base/maximum single fare figure in the section read.
- Source: 桃園機場捷運2024盈餘5億創新高！為何全線取消車票10元優惠？, GVM
  (claim 15), SECONDARY, confidence Medium.
- Source: 機捷營運成本大增 明年1/2起實施三大配套措施、TPASS售價不變, 台灣好
  新聞, accessed via search synthesis 2026-08-12, SECONDARY, confidence Low
  (not fetched and read in full — search synthesis only) for the TPASS
  price-hold claim specifically.
- [^ticket-check]: The NT$160 single-fare figure itself rests on a
  search-engine synthesis of blog/aggregator sources (pixnet, HouseFeel,
  Trip.com), not a page this run fetched and read directly stating the fare
  table; confidence Low for the exact figure, though it is consistent
  across every source seen and matches the lead file.

## Checked and failed

- **Railway Bureau rolling-stock subsystem page** — 交通部鐵道局's page on the
  airport line's rolling-stock subsystem
  (https://www.rb.gov.tw/showpage.php?lmenuid=4&smenuid=9&tmenuid=6&pagetype=0)
  was fetched in full and contains only navigation and unrelated project news
  items, no rolling-stock specifications. Rolling stock detail instead comes
  from the zh.wikipedia model-specific pages (claim 11). Checked 2026-08-12.
- **Control Yuan delay-chronology PDF** — the 監察院 investigation
  attachment 「機場捷運時序表」
  (https://www.cy.gov.tw/Message_Message/25116/機場捷運時序表1050809.PDF)
  could not be rendered by the fetch tool, and a local read of the saved
  binary also failed because `pdftoppm` is unavailable in this environment.
  The Control Yuan's 9 August 2016 correction case against MOTC and the
  Railway Bureau (17 identified deficiencies, 12 attributed to a named
  former Railway Bureau director) is known only via a search-engine
  synthesis of a separate ETtoday report on the same decision, not a full
  page read, and is not used as a sourced claim on the content page.
  Attempted 2026-08-12.
- **Taoyuan airport's own in-town check-in pages** — both
  https://www.taoyuan-airport.com/ITCI/index.html and
  https://web.taoyuan-airport.com/ITCI/mobile/index.html returned HTTP 403
  to the fetch tool. The current airline list on the content page rests on
  secondary aggregation only (claim 12), not a primary read. Attempted
  2026-08-12.
- **Railway Bureau A14 Terminal 3 project page** —
  https://www.rb.gov.tw/showpage.php?lmenuid=3&smenuid=166&tmenuid=134&pagetype=0
  returned only the navigation shell, no project content (budget, dates), in
  the portion fetched. The A14 date on the content page is instead sourced
  to a news synthesis and marked provisional. Attempted 2026-08-12.
- **CICHE 2018 engineering retrospective** — the Journal of the Chinese
  Institute of Civil and Hydraulic Engineering's retrospective on the
  Airport MRT (回顧『機場捷運』,
  https://www.ciche.org.tw/wordpress/wp-content/uploads/2018/02/DB4402-P004-回顧機場捷運.pdf)
  failed to fetch with a TLS certificate error ("certificate has expired")
  on the publisher's own server. This would have been a strong engineering-
  professional account of the delay causes and was not substituted with
  anything of equal strength. Attempted 2026-08-12.
- **The lead file's itemised six-delay date table** — the specific entries
  in the previous version of this research file (17 July [2015], 5 March
  [2016], 5 August [2016], 2 December) were searched for and not found
  stated together on any single page read in full this run. CNA's 4 March
  2016 article (claim 7) confirms "six changes since January 2009" as a
  headline fact, quoted directly, but its itemised chronology was not
  recovered from the truncated fetch obtained this run, and the 5 August
  date looks like it may conflate the Control Yuan's 9 August 2016
  correction case with a separate handover date. Neither confirmed nor
  actively contradicted — simply unverified, and not repeated on the
  content page. Checked 2026-08-12.
- **The lead file's "manually changing signals" mechanism** — the previous
  research file's specific claim that express trains could only be routed
  into the A22 extension by manually changing signals does not appear in
  MOTC's own press release on the A22 opening (claim 13) or in any other
  source read this run. Not repeated on the content page. Checked
  2026-08-12.
- **The lead file's "NT$7.2 billion" combined Marubeni total** — sought
  specifically and repeatedly across multiple search queries and three full
  contemporaneous 2017 news reads; never found stated in a fetched primary
  or secondary page. It appeared only inside pre-digested search-engine
  summary text, never inside quoted source prose, and 2.5 + 1.9 = 4.4
  billion, not 7.2 billion. Not repeated on the content page; the two
  component figures are published individually instead. See claim 8.
  Checked 2026-08-12.

## Stated gaps

- **The precise 2023 TYMC surplus figure in NT$** is not established. Every
  source found states 2023 as "the first profitable year" without a number,
  or implies one (~NT$124 million) through an unverifiable "fourfold
  increase" framing in a single source. TYMC's own annual report or
  financial statement, if published, would settle this — not found or
  fetched this run (a link to 桃捷 > 關於桃捷 > 出版品/公司出版品 exists but
  was not followed up).
- **The itemised six-delay timeline** with a specific date and cause for each
  of the six changes is not established beyond the CNA "six changes since
  Jan 2009" headline fact. A full read of the CNA 4 March 2016 article (the
  truncated fetch here only returned its opening paragraph) or the Control
  Yuan's PDF chronology (rendering failed) would likely settle this.
- **Current in-town check-in airline lists** rest on secondary aggregation,
  not a primary fetch, because both of Taoyuan Airport Corporation's own
  ITCI pages returned HTTP 403. A retry with a different fetch method, or a
  direct check of TYMC's Chinese-language app/PDF timetable inserts, would
  settle this at primary strength.
- **A22's precise reason mix** is established at MOTC's own three-cause
  level (COVID-19 workforce disruption, signalling integration difficulty,
  design coordination with the Taoyuan rail-undergrounding project) but the
  specific "manually switching signals for three hours a night" operational
  detail is unconfirmed.
- **A23 Zhongli and A14 Terminal 3 target dates** (2029 and 2027
  respectively) rest on search-engine synthesis of news reporting, not a
  Railway Bureau project page read in full — the Bureau's own A14 subpage
  returned no content when fetched. Both dates should be treated as
  provisional on the content page.
- **Whether the 2016–17 Marubeni dispute (claim 8) was ever settled, and for
  what amount** — not established. Nothing found this run describes an
  outcome; the 2021 dispute (claim 9) appears to be a separate, later matter
  rather than a resolution of the 2016–17 one.
