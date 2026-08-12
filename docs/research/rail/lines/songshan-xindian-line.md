# Songshan–Xindian Line 松山新店線 (G) — research

**Corpus warning: `docs/research/` is leads only. It has been wrong repeatedly.
Nothing here is citable until it has been checked against a primary source —
see `.claude/skills/transit-research/SKILL.md`.**

**Version 2.0 — 12 August 2026.**
**Status: verified against primary sources this run. Supersedes the version
headed "Version 1.0 — 6 August 2026, Status: research. Not published."** That
earlier version is preserved in git history; this file replaces it as the
working research record. Every claim below was independently re-fetched; where
the earlier version was wrong or unconfirmed, that is recorded under "Where
the lead was wrong" at the end, not repeated as fact above it.

---

## What is established

### The line is built from three separate DORTS construction projects, not one

DORTS's own project pages treat the line as three separate builds that now
run as one operating line: 新店線 (Xindian Line), 小南門線 (Xiaonanmen Line),
and 松山線 (Songshan Line).

- **Source:** Songshan-Xindian Line — Xindian Line route description (新店線路線說明)
- **titleOriginal:** 臺北市政府捷運工程局-松山新店線
- **Publisher:** 臺北市政府捷運工程局 (DORTS)
- **URL:** https://www.dorts.gov.taipei/cp.aspx?n=71acc5b0cdffc313&s=CBD13A8895C4EF94
- **PRIMARY. Confidence: High** (operator's own project record, fetched in full)
- **Quote:** 「新店線北起台大醫院站，由公園路向南轉入羅斯福路，沿羅斯福路南行、穿越景美溪後進入新北市」；「主線約10.5公里」；「沿線設11座車站（台大醫院站屬淡水信義線營運）」

- **Source:** Songshan-Xindian Line — Songshan section route description (松山線路線說明)
- **URL:** https://www.dorts.gov.taipei/cp.aspx?n=71acc5b0cdffc313&s=C974A7C467B035B8
- **PRIMARY. Confidence: High**
- **Quote:** 「松山線由西門站西側經中華路接塔城街向北…全長約8.5公里，設8座地下車站（含西門站），全線採地下方式建造」

- **Source:** Songshan-Xindian Line — Xiaonanmen line route description (小南門線路線說明)
- **URL:** https://www.dorts.gov.taipei/cp.aspx?n=71acc5b0cdffc313&s=9A7448733F1518F5
- **PRIMARY. Confidence: High**
- **Quote:** 「由西門站至中正紀念堂站，全長約1.6公里」；「設1座車站」；「小南門線提供藍線車輛過軌營運維修的功能」；「併南港線一併設計施工」；「於民國89年8月31日通車營運」；「103年11月15日併入松山新店線營運」

**What this establishes, precisely:** the Xindian Line project (10.5 km, 11
stations, built 1991–1999) supplies G01–G10 (its eleventh station, NTU
Hospital, operates as R09 on the Tamsui-Xinyi Line — see below); the
Xiaonanmen Line project (1.6 km, 1 station, opened 2000) supplies G11, built
alongside the Nangang Line/Bannan Line project to let Bannan Line (blue
line/藍線) trains cross over to Beitou Depot for maintenance; the Songshan
Line project (8.5 km, 8 stations including Ximen, built 2006–2014) supplies
G12–G19. 11 (minus NTU Hospital) + 1 + 8 = 19 stations, G01–G19, plus the
Xiaobitan branch station G03A — 20 stations, matching the station count
independently derived from TDX and from zh.wikipedia's infobox (see
Conflicts, length).

### Opening dates — the "real gap" the earlier version flagged is closable

The earlier version of this file said "Xindian section opening dates are
still not established — a real gap." That gap closes from the same DORTS page
above:

| Section | 履勘 (formal inspection) | Opened | ROC date as published |
|---|---|---|---|
| Xindian Line north: NTU Hospital – Guting | — | **24 December 1998**, together with the Zhonghe Line | 87年12月24日與中和線一併通車 |
| Xindian Line south: Guting – Xindian | — | **11 November 1999** | 88年11月11日通車 |
| Xiaonanmen Line: Ximen – CKS Memorial Hall | — | **31 August 2000** | 民國89年8月31日通車營運 |
| Xiaobitan branch | — | **29 September 2004** | 93年9月29日通車營運 |
| Songshan Line: Ximen – Songshan | 5 Oct 2014 (初勘), 31 Oct 2014 (履勘) | **15 November 2014**, joining the Xindian Line into single-line running | 103年10月5日初勘、103年10月31日履勘、於103年11月15日通車與新店線串聯營運 |

All five dates are read directly off the DORTS project page (both the
Xindian-Line tab and the Songshan-section tab, same URL root
`n=71acc5b0cdffc313`, different `s=` tab parameters) — **primary, confidence
high.** ROC-to-AD conversion performed manually (ROC year + 1911); one
automated fetch summary mis-converted 80年 as "1981" instead of 1991 and a
second mis-converted 87年/88年 as "1987/1988" instead of 1998/1999 — both
caught by re-fetching for raw Chinese text and converting by hand. This is
recorded as a live caution for future work on this file: **do not trust an
AI fetch tool's own ROC→AD conversion; re-derive it from the raw digits.**

Construction start: 「最早自80年3月1日台大醫院站開工」— earliest works began
1 March 1991 at NTU Hospital station (DORTS, same page, primary, high
confidence). zh.wikipedia's 沿革 section independently gives "1991年1月：新店線開工"
(Xindian Line construction began January 1991) — a month earlier than DORTS's
"1 March," both in the same year, not treated here as a conflict worth
publishing since the discrepancy is a single month and the sources may be
describing different milestones (design-contract start vs. first station
groundbreaking).

- **Source:** 松山新店線, 維基百科 (Chinese Wikipedia)
- **URL:** https://zh.wikipedia.org/zh-tw/松山新店線
- **SECONDARY. Confidence: Medium** (Wikipedia, footnoted, cross-checked against DORTS above and agreeing on every shared date)
- **Quote:** 「1991年1月：新店線開工。」「1998年12月24日：『中正紀念堂－古亭』段正式通車啟用」「1999年11月11日：『古亭－新店』段隨新店線全線完工而正式通車啟用」「2000年8月31日：小南門線『中正紀念堂－西門』段正式通車啟用」「2014年11月15日：松山線正式營運並經由小南門線和新店線連接，全線通車」「營運長度：21.3 公里」「車站數目：20」

### The 1986 approval and 1987 redesign to fully underground

- **Source:** DORTS, Xindian Line route description (same page as above)
- **PRIMARY. Confidence: High**
- **Quote:** 「建設計畫於75年4月4日經行政院整體一次核定，核定總經費4444億元」(4 April 1986, NT$444.4bn network-wide budget); 「原核定路線部分採地下、部分採高架，因考量沿線路幅及高架結構對環境之影響…將全線改為地下型式興建，76年5月20日獲行政院同意」(originally part underground/part elevated; changed to fully underground on grounds of street width along the route and elevated structure's environmental impact; Executive Yuan agreed 20 May 1987)

This matches the earlier version's claim exactly and is now sourced to the
primary document rather than to a paraphrase.

### The Xiaobitan branch — engineering, and why it cannot be run by main-line trains

- **Source:** DORTS FAQ — "Can the Xiaobitan branch be merged into Green Line operation?" (小碧潭支線可否併入綠線營運？)
- **titleOriginal:** 臺北市政府捷運工程局-常見問答-路網規劃Q04
- **URL:** https://www.dorts.gov.taipei/News_Content.aspx?n=2A66A485FACB0D5B&sms=87415A8B9CE81B16&s=89085E307909460C
- **PRIMARY. Confidence: High.** Published by DORTS's 綜合規劃處, dated April 2018 per the page footer.
- **Quotes:** 「小碧潭站之月台長度僅可容納3節車廂，因此主線6車組進入小碧潭站時，無法提供後3節車廂旅客上下車」(the Xiaobitan platform only accommodates 3 cars, so a main-line 6-car train cannot let passengers in/out of its rear 3 cars there); 「無法配合於小碧潭站機動不開啟後3節車廂之車門，故有人員跌落之風險」(there is no way to selectively not-open the rear 3 doors, creating a fall risk); 「（七張至小碧潭）採單線雙向行駛（僅有單側月台）」(the Qizhang–Xiaobitan section runs single-track bidirectional with only a single-side platform); 「小碧潭支線仍以維持3車組列車之支線營運方式為宜」(the branch is best kept as a 3-car dedicated branch operation)

This is a materially better and more specific account than the earlier
version's vague "This wants a section drawing" / "no other arrangement like
it" — DORTS itself states two independent engineering reasons the branch
cannot be folded into main-line service: platform length, and single-track
working.

- **Source:** Xiaobitan branch (小碧潭支線), 維基百科
- **URL:** https://zh.wikipedia.org/zh-tw/小碧潭支線
- **SECONDARY. Confidence: Medium**
- **Quotes:** 「鄰近居民及各級中央地方民代、議會質詢及地方首長協調爭取後為主要原因」(the main reason given is nearby residents and various levels of central/local representatives lobbying, council questioning, and coordination by local officials); 「1999年臺北縣政府公告發布實施擬定新店都市計畫」中首次記載此計畫 (the plan is first recorded in a 1999 Taipei County government urban-planning notice); construction of the elevated station track began 2001年4月2日; opened 2004年9月29日 (matching DORTS exactly); 「路線全長1.9公里」; 「三節車廂為一組，以單組為一列」(three cars form one set, and a single set makes one train — i.e. genuinely three-car trains, not a shortened six-car set); named sets 397, 398 (Kawasaki-built C371 series 3)

- **Source:** DORTS procurement FAQ — "How many trains were procured for each Taipei Metro line?" (各路線所採購之列車數為何？)
- **URL:** https://www.dorts.gov.taipei/News_Content.aspx?n=2A66A485FACB0D5B&s=C8602F8588914E91
- **PRIMARY. Confidence: High**
- **Quote:** 「新店線小碧潭站（CH321A標）：共採購3列三車列車（9輛）電聯車」(3 three-car trainsets, 9 cars, contract CH321A, dedicated to Xiaobitan)

This confirms the branch's fleet is three three-car sets (9 cars total) — the
earlier version's "three C371 sets (397, 398, 399)" is right on the *count*,
but only two of the three set numbers (397, 398) were independently found in
a fetched source. **399 is not independently confirmed here — TBC.**

- **Source:** DORTS procurement FAQ, same page
- **Quote:** 「松山線（CG391標）：共採購10列六車列車（60輛）電聯車」(10 six-car trainsets, 60 cars, contract CG391, for the Songshan section)

This is the Songshan section's own train order — separate from whatever
served the original Xindian/Zhonghe network before 2014, which this FAQ table
does not itemise on this line. **Total fleet size serving the whole
Songshan-Xindian Line is not established here — TBC.**

### Service pattern and headways today

- **Source:** TRTC — Routes and headways (路線及班距), Songshan-Xindian Line tab
- **titleOriginal:** 臺北大眾捷運股份有限公司-路線及班距
- **URL:** https://www.metro.taipei/cp.aspx?n=EAD981369A065968&s=0F3F913C344BA050
- **PRIMARY. Confidence: High**
- **Quotes:** operating hours 06:00–24:00; three service patterns — 松山–新店 (full line), 松山–臺電大樓 (short working), 七張–小碧潭 (branch); weekday peak headway on the shared trunk about 4–6 min (about 3 min on the overlap section), off-peak about 6–8 min, after 23:00 about 12 min; weekend/holiday patterns 8–10 min (06:00–09:00), 6–8 min (09:00–23:00), 12 min after 23:00; end-to-end Songshan–Xindian about 37 minutes, Songshan–Taipower Building about 23 minutes; Xiaobitan branch headway 12–20 min throughout the day; last trains on the branch 23:57 from Xiaobitan, 00:09 from Qizhang

This directly confirms the earlier version's "Songshan – Taipower Building
short working" claim and gives it a name, headway and journey time the
earlier version did not have.

### The end of cross-colour Tamsui–Xindian running

- **Source:** 淡水信義線, 維基百科
- **URL:** https://zh.wikipedia.org/zh-tw/淡水信義線
- **SECONDARY. Confidence: Medium**
- **Quotes (service-pattern history):**
  - 「台北車站－中正紀念計站」段開通…營運模式為「淡水－南勢角」(24 Dec 1998, Tamsui–Nanshijiao)
  - 1999-11-11: 改為「淡水－新店」及「北投－南勢角」(Tamsui–Xindian, and Beitou–Nanshijiao)
  - 2012-09-30: 「北投－南勢角」service ended; 「北投－台電大樓」began
  - 2013-11-24: Xinyi Line CKS Memorial–Xiangshan section opens; 「北投－台電大樓」replaced by 「北投－象山」, running crossed with 「淡水－新店」at roughly 6-minute headways each, producing about 3 minutes on the shared section
  - 2014-11-15: Songshan Line opens; 「淡水－新店」through-service ends; pattern reforms as 「淡水－象山」(full line) plus 「北投－大安」(short working), and cross-line running ends

- **Source:** "That day, that year": remembering the Tamsui-Xindian Line, secondary news feature
- **titleOriginal:** 北捷演變歷史一次看！淡水新店線乘載無數回憶 老台北人落淚告別
- **Publisher:** NOWnews今日新聞
- **URL:** https://www.nownews.com/news/6774429
- **SECONDARY. Confidence: Low-medium** (a retrospective feature piece; consistent with the Wikipedia chronology above and independently confirms the headline date, but does not itself cite primary documents for the intermediate dates)
- **Quote:** 「松山線通車，紅、綠線正式分家，淡水新店線走入歷史」(the Songshan Line opened, the red and green lines formally split, and the Tamsui-Xindian Line passed into history) — dated to 15 November 2014 in the article's framing

**14 vs 15 November 2014, reconciled:** zh.wikipedia's 松山新店線 article
places a closing ceremony at Beimen station on the evening of 14 November,
with the old Tamsui–Xindian pattern's and Xiaonanmen Line's last trains
departing at midnight that night — i.e. the formal handover moment is
14/15 November, and the new pattern is dated 15 November across every
source found. This matches the earlier version's framing without
contradiction.

### NTU Hospital station — the anomaly is real and is now directly sourced

The earlier version flagged this as "TBC" and "likely 小南門線 heritage,"
explicitly unconfirmed. It is **not** Xiaonanmen Line heritage — the primary
source puts it somewhere else entirely, on the *Xindian Line* project:

- **Source:** DORTS, Xindian Line route description (as above)
- **PRIMARY. Confidence: High**
- **Quote:** 「新店線北起台大醫院站…沿線設11座車站（台大醫院站屬淡水信義線營運）」

Read plainly: the 新店線 (Xindian Line) construction project's own route
begins at NTU Hospital station and runs 11 stations south to Xindian — and
DORTS's own text notes, in the same sentence, that NTU Hospital station
itself operates as part of the Tamsui-Xinyi Line, not the Songshan-Xindian
Line. The other ten stations of that same 11-station project (CKS Memorial
Hall through Xindian) are Songshan-Xindian Line stations today. **The
mechanism, so far as sourced here:** the section of track this project built
between NTU Hospital and CKS Memorial Hall is shared trunk track — the same
tracks the Tamsui Line's trains have always used south of Taipei Main
Station — while the Songshan-Xindian Line's own route reaches CKS Memorial
Hall from the *north*, via the separate Xiaonanmen Line project (Ximen–CKS
Memorial). NTU Hospital sits on the shared trunk north of CKS Memorial, which
is why it is a Xindian-Line-project station that nonetheless operates under
the Tamsui-Xinyi Line. **This inference is this researcher's reading of the
DORTS text and route geography, not a sentence DORTS states outright** — it
is recorded as the most-supported account found, not as settled fact beyond
what is quoted.

No source found states this is "Xiaonanmen Line heritage" — that specific
claim in the earlier version of this file is **not corroborated by anything
fetched** and should not be repeated as fact. It appears to have been a
plausible-sounding guess that this research could not confirm.

### G13 Beimen and the historic monument — partially verified, and narrower than the earlier framing

The earlier version states: "G13 Beimen is worth noting alongside the Bannan
Line, which had to tunnel beneath the Beimen historic monument itself. Two
lines, one monument, different engineering problems."

What is actually sourced:

- **Source:** DORTS, Bannan Line page (板南線)
- **URL:** https://www.dorts.gov.taipei/cp.aspx?n=5E61169F8C735065
- **PRIMARY. Confidence: High**
- **Quote:** 「（南港線）施工需穿越台北市一級古蹟北門下方，係屬施工困難度較高之路線」(the Nangang Line's construction had to pass beneath Taipei's grade-1 historic monument Beimen, making it a higher-difficulty section)

This confirms the Bannan-Line side of the claim (specifically its Nangang
Line construction project) exactly. **No source found states that the
Songshan-Xindian Line's own tunnel (as opposed to just its G13 station,
named for its proximity to the gate) had a comparable engineering problem
with the monument.** zh.wikipedia's 北門站 article gives only: 「因台北府城北門即位於車站東南邊而得名」
(the station is named for the historic gate, which sits south-east of it) and
「部分遺跡在捷運北門站考古坑展示中」(some relics are displayed at an
archaeological pit inside Beimen MRT station) — station-naming and an
artefact display, not a construction-difficulty claim about the
Songshan-Xindian Line's own bore. **The "two lines, one monument, different
engineering problems" framing is not established here — the Bannan Line half
is sourced, the Songshan-Xindian half is not, and this file does not repeat
the comparison as fact.**

### Line numbering: "3" before "G"

- **Source:** 松山新店線, 維基百科 (as above)
- **SECONDARY. Confidence: Medium**
- **Quote:** 「2016年10月：臺北捷運公司宣布開始分階段進行車站站名增加編號作業，以『路線顏色英文字首』加『車站序號數字』為編碼原則，原3號線調整為編號『G』。」(October 2016: TRTC announced a phased rollout of station numbering, coding by line-colour English initial plus station sequence number; the line, formerly numbered "3," was changed to code "G")

This confirms the line was numbered "3" before October 2016 and became "G"
that month. **The earlier version's specific date "assigned 11 October 2014"
for the "3" numbering could not be independently confirmed from a fetched
primary or secondary page in this research pass** — a WebSearch summary (not
a full page fetch) suggested this date, but per this project's sourcing rule
that is not sufficient to publish. Marked TBC on the content page.

### Route length — TDX operating figures

- **Source:** Taiwan MOTC TDX, StationOfRoute, operator TRTC, routes G-1 (G01–G19), G-2 (G08–G19, the Songshan–Taipower Building short working), G-3 (G03–G03A, the Xiaobitan branch)
- **Data file:** `data/tdx/TRTC/station-of-route.json`
- **PRIMARY. Confidence: High** (government open data, committed to this repository)
- **Figures:** G-1 CumulativeDistance to G19 = **18.77 km**; G-2 to G19 = 11.24 km; G-3 to G03A = **1.94 km**

See Conflicts below — this does not match either DORTS's project-length
arithmetic or zh.wikipedia's headline figure, for reasons that can be stated
but not fully reconciled here.

---

## Conflicts

### Total route length

Four inputs, not fully reconcilable from what was fetched:

| Figure | What it appears to measure | Source |
|---|---|---|
| **18.77 km** | TDX operating length, G01 to G19 (main line only, `CumulativeDistance`) | TDX `data/tdx/TRTC/station-of-route.json`, primary |
| **1.94 km** | TDX operating length, the Xiaobitan branch (G03–G03A) | same, primary |
| **20.6 km** (10.5 + 1.6 + 8.5) | The sum of DORTS's three project lengths (Xindian Line, Xiaonanmen Line, Songshan Line) — but the 10.5 km Xindian Line figure includes the NTU Hospital–CKS Memorial Hall stretch, which does not operate as part of this line | DORTS, three separate project pages, primary |
| **21.3 km** | zh.wikipedia's headline 營運長度 (operating length) | zh.wikipedia, secondary |

The 18.77 km TDX figure and the 20.6 km DORTS-segment-sum are the closest
pair, and the gap between them is roughly consistent with excluding the
NTU Hospital–CKS Memorial Hall segment from the DORTS sum (that segment's own
length is not given anywhere fetched, so this cannot be confirmed
arithmetically here). The 21.3 km zh.wikipedia figure does not visibly
resolve against either the TDX or DORTS numbers from what was found, and no
attempt is made here to force a match. All four are published on the content
page with what each appears to measure; none is picked as *the* figure.

### Xiaobitan branch length

- **DORTS:** 「支線長約1.5公里」— approximately 1.5 km (primary, Xindian Line route page)
- **zh.wikipedia:** 「路線全長1.9公里」— 1.9 km (secondary, 小碧潭支線 article)
- **TDX:** 1.94 km, G03–G03A `CumulativeDistance` (primary, government open data)

zh.wikipedia and TDX agree closely (1.9 vs 1.94 km); DORTS's own rounded
figure (1.5 km) sits about 0.4–0.44 km short of both. Published as a
three-way conflict, not resolved.

### Songshan section station count

The earlier version of this file states "Songshan section | 8.5 km, 7
stations." DORTS's own Songshan-section page states 「全長約8.5公里，設8座地下車站（含西門站）」
— 8 stations, **including** Ximen. **The earlier version was wrong here** —
it is off by one, apparently from not counting Ximen (which is also a Bannan
Line interchange, and might have been mentally assigned to Bannan) as part
of the Songshan section's own station total. DORTS explicitly parenthesises
含西門站 (Ximen included) to prevent exactly this miscount. Corrected on the
content page.

---

## Checked and failed

- **buzzorange.com/citiorange/2015/12/07/mrt-issue/ political-pressure account** — a CitiOrange feature reportedly describing the Xiaobitan campaign as driven by 中央新村 (a neighbourhood of retired National Assembly members) and quoting a named DORTS director (江耀宗) admitting political pressure via the Ministry of Transportation. Checked 2026-08-12, failed: the server returned HTTP 403 Forbidden on two attempts, so the claim could not be read in full — only a WebSearch snippet surfaced it, which this project's rules do not treat as sufficient. A different fetch of thenewslens.com/article/32247 independently corroborates the general shape of the claim (political pressure, 中央新村) without the director's name or the cost figure, and that narrower version is what the content page uses.
- **"Line number 3 assigned 11 October 2014"** — chased via WebSearch, which returned a synthesised claim citing a 2014-11-04 TRTC naming announcement. Checked 2026-08-12, failed to confirm via full fetch: an ettoday.net article from 4 November 2014 was fetched in full and confirms the line names (松山新店線, 淡水信義線, etc.) but does not mention a numbering announcement or the date 11 October. zh.wikipedia's 沿革 section, fetched in full, only confirms the October 2016 switch to letter codes, referencing "原3號線" without dating when "3" itself was assigned. The specific date is not established here — published as TBC.
- **399 as the third Xiaobitan C371 set number** — zh.wikipedia's 小碧潭支線 article, fetched in full, names only 397 and 398 among the branch's three sets. Checked 2026-08-12: not found in any source fetched. DORTS's procurement FAQ confirms the count (3 three-car sets, 9 cars, contract CH321A) but not the individual set numbers. 399 is plausible (the earlier version of this file states it) but unconfirmed — not published as fact.
- **PSD (platform screen door) completion dates** — the earlier version speculates "main line reportedly by April 2018, Xiaobitan September 2018 — confirm." Checked 2026-08-12: nothing found in this search answers it. No DORTS, TRTC or secondary source surfaced with these dates on this line. TBC.
- **The specific "1998" year for the Xiaobitan public campaign** — the earlier version states residents campaigned "during 1998." Checked 2026-08-12: the only dated planning reference found (zh.wikipedia, 小碧潭支線) is a 1999 Taipei County government urban-planning notice as the first recorded mention of the station; DORTS's own approval date is 17 September 1999. 1998 is not independently confirmed — the campaign presumably predates the 1999 approval by some margin, but no source pins it to 1998 specifically. Published as "by 1999" rather than "during 1998."

---

## Stated gaps

- **Total fleet serving the Songshan-Xindian Line.** DORTS's procurement FAQ
  gives only two contracts by name for this line (CG391, 10 six-car sets for
  the Songshan section; CH321A, 3 three-car sets for Xiaobitan) — it does not
  itemise whatever served the original Xindian/Zhonghe network before 2014.
  A full fleet total, and how it reconciles with the wider C371 family shared
  with the Zhonghe-Xinlu Line, would need the C371 rolling-stock page's own
  research (out of scope here; that page is a separate stub).
- **The length of the NTU Hospital–CKS Memorial Hall segment specifically**
  — needed to fully reconcile the 18.77 km TDX figure against the 20.6 km sum
  of DORTS's three project lengths. Not found in this pass.
- **Where "21.3 km" (zh.wikipedia's operating length) actually comes from**
  — it does not visibly resolve against either the TDX or DORTS-segment
  figures found here. Unexplained gap of about 0.6–2.5 km depending which
  pair is compared.
- **PSD completion dates**, **total daily ridership**, **399 as a Xiaobitan
  set number**, **the exact date "3" was assigned as this line's number** —
  all as above.
- **Whether the Songshan-Xindian Line's own tunnel construction had any
  distinct engineering relationship to the Beimen monument**, beyond the
  station being named for it — not established; only the Bannan/Nangang
  Line's own tunnelling-beneath-the-monument claim is sourced.

## Sources consulted (full list)

**Primary — DORTS (臺北市政府捷運工程局):**
- Xindian Line route description — https://www.dorts.gov.taipei/cp.aspx?n=71acc5b0cdffc313&s=CBD13A8895C4EF94
- Songshan section route description — https://www.dorts.gov.taipei/cp.aspx?n=71acc5b0cdffc313&s=C974A7C467B035B8
- Xiaonanmen line route description — https://www.dorts.gov.taipei/cp.aspx?n=71acc5b0cdffc313&s=9A7448733F1518F5
- FAQ — Xiaobitan branch merger question — https://www.dorts.gov.taipei/News_Content.aspx?n=2A66A485FACB0D5B&sms=87415A8B9CE81B16&s=89085E307909460C
- FAQ — train procurement by line — https://www.dorts.gov.taipei/News_Content.aspx?n=2A66A485FACB0D5B&s=C8602F8588914E91
- Bannan Line page — https://www.dorts.gov.taipei/cp.aspx?n=5E61169F8C735065

**Primary — TRTC (臺北大眾捷運股份有限公司):**
- Routes and headways, Songshan-Xindian Line tab — https://www.metro.taipei/cp.aspx?n=EAD981369A065968&s=0F3F913C344BA050

**Primary — government open data:**
- MOTC TDX, StationOfRoute, TRTC — `data/tdx/TRTC/station-of-route.json`

**Secondary:**
- 松山新店線, zh.wikipedia — https://zh.wikipedia.org/zh-tw/松山新店線
- 淡水信義線, zh.wikipedia — https://zh.wikipedia.org/zh-tw/淡水信義線
- 小碧潭支線, zh.wikipedia — https://zh.wikipedia.org/zh-tw/小碧潭支線
- 北門站 (臺北市), zh.wikipedia — https://zh.wikipedia.org/zh-tw/北門站_(臺北市)
- NOWnews feature — https://www.nownews.com/news/6774429
- thenewslens.com/article/32247 (小碧潭 ridership and "political pressure" framing)
- ettoday.net/news/20141104/421391.htm (line-naming, fetched, did not confirm numbering date)

**Failed fetches:** buzzorange.com/citiorange/2015/12/07/mrt-issue/ (HTTP 403,
twice) — see Checked and failed.
