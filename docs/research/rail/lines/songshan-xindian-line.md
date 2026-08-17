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

## Incoming lead transfer — `deep-research-report(1).md` (2026-08-15)

> The external report is retained below as an unverified lead appendix. Its
> “Confirmed” labels, source classifications and confidence labels have no
> authority here. Only the independent sample checks in this transfer record
> were promoted to established evidence.

### Independent sample checks

**Claim — The DORTS Songshan project is approximately 8.5 km, has eight underground stations including Ximen, and is identified as G Songshan–Xindian Line.** Independently checked: the URL resolved and both quoted clauses appear on the full page.

- **Source title:** *Songshan–Xindian Line — Songshan Line route description*
- **titleOriginal:** `松山新店線－松山線路線說明`
- **Publisher:** `臺北市政府捷運工程局`
- **URL:** <https://www.dorts.gov.taipei/cp.aspx?n=71acc5b0cdffc313>
- **Archive snapshot:** not captured
- **kind:** primary
- **Confidence:** High — current DORTS project page, exact text read on 2026-08-15
- **Original-language sentence:** `全長約8.5公里，設8座地下車站（含西門站），全線採地下方式建造。` and `本路線編號名稱為「G 松山新店線」`.

**Claim — The 2014 Songshan opening ended the cross-line-running transition.** Independently checked: the full DORTS technical-publication page contains the quoted passage.

- **Source title:** *Songshan Line Route Planning and Operating Pattern*
- **titleOriginal:** `松山線路線規劃與營運模式`
- **Publisher:** `臺北市政府捷運工程局`, *捷運技術* no. 52
- **URL:** <https://ebook.dorts.gov.taipei/JRTST/ebook/no52/files/basic-html/page6.html>
- **Archive snapshot:** not captured
- **kind:** primary
- **Confidence:** High — official technical publication, exact text read on 2026-08-15
- **Original-language sentence:** `松山線於103年11月15日通車……結束各路線跨線運行的過渡模式`.

### Remaining unverified lead material

The appendix preserves the report’s additional claims about Xindian, Xiaonanmen, opening chronology, station counts and route-length scope. They remain leads only. The report’s station-count conflict (two DORTS readings of 8 versus one reading of 7) remains a conflict, not a corrected value; its consolidated G-line length remains TBC. See the full transferred appendix after the existing corpus sections.

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


---

## Imported external lead appendix — deep-research-report(1).md

> Preserved from an external lead report on 2026-08-15. This appendix is not a source. Every claim, URL, source classification, confidence label and status in it remains unverified unless independently promoted in the transfer record above.
pm run research intentionally does not parse this demoted appendix as a corpus Checked and failed section.

> **Research file — leads, not sources.** Every claim here must be
> verified against the primary source before publication.

### Songshan–Xindian Line (松山新店線, G)

Research date: 2026-08-15 (Asia/Taipei).

#### What is established

**External report label — unverified: Confirmed — The official route identifier/name is “G 松山新店線” (G Songshan–Xindian Line).**

The current DORTS route material explicitly assigns the route-numbering name `G 松山新店線`. This is safer than deriving the present line name from older “Green Line” planning documents.

Source title (English, working translation): *Songshan–Xindian Line — Songshan Line Route Description*
Original-language title: `松山新店線（松山線路線說明）`
Publisher: 臺北市政府捷運工程局 (Taipei City Department of Rapid Transit Systems, DORTS)
URL: https://www.dorts.gov.taipei/cp.aspx?n=71acc5b0cdffc313
Type: PRIMARY
Confidence: High
Original-language sentence: `配合路線編號系統，本路線編號名稱為「G 松山新店線」。`


**External report label — unverified: Confirmed — The 2014 Songshan Line opening was the point at which the network returned from interim cross-line running to the planned color-line operating pattern.**

A DORTS technical article describes the original network architecture as Xindian–Songshan (green), Tamsui–Xinyi (red), Zhonghe–Xinzhuang/Luzhou (orange), Nangang–Banqiao/Tucheng (blue), and Wenshan–Neihu (brown). It says the Songshan Line opened on ROC 103-11-15 (2014-11-15) and ended the transitional cross-line-running pattern. In practical terms, the former Tamsui–Xindian operating pattern was replaced by the dedicated Songshan–Xindian and Tamsui–Xinyi patterns.

Source title (English, working translation): *Songshan Line Route Planning and Operating Pattern*
Original-language title: `松山線路線規劃與營運模式`
Publisher: 臺北市政府捷運工程局, in `捷運技術 第52期`
Authors: 鄭安良、曾明月
URL: https://ebook.dorts.gov.taipei/JRTST/ebook/no52/files/basic-html/page6.html
Type: PRIMARY
Confidence: High
Original-language sentence/evidentiary clause: `松山線於103年11月15日通車，…結束各路線跨線運行的過渡模式，整併回歸至原整體路網「棕、紅、綠、橘、藍」5條線。`


**External report label — unverified: Confirmed — Immediately before opening, central government also described the operating change as splitting the former Tamsui–Xindian service into Songshan–Xindian and Tamsui–Xiangshan.**

This is useful corroboration because it states the operational change directly rather than merely describing a color-line plan.

Source title (English, working translation): *Songshan Line Opening Imminent; Premier Jiang Instructs Agencies to Strengthen Publicity for Transfers*
Original-language title: `捷運松山線通車在即 江揆指示加強宣導以利民眾轉乘`
Publisher: 行政院 (Executive Yuan)
URL: https://www.ey.gov.tw/Page/9277F759E41CCD91/aaa388c9-972a-4f6c-95f7-babda855e27f
Type: PRIMARY
Confidence: High
Original-language sentence/evidentiary clause: `原「淡水-新店」列車將分線行駛「松山-新店」及「淡水-象山」。`


**External report label — unverified: Confirmed — The Songshan project planning report was approved in 1997, its financial plan in 2004, and DORTS labels 499.3億元 as the project’s “total construction cost.”**

Do not turn 499.3億元 into an unqualified “final cost”: the Audit Office reports different special-budget and audited-final-account figures, recorded under **Conflicts** below.

Source title (English, working translation): *Songshan–Xindian Line — Songshan Line Route Description*
Original-language title: `松山新店線（松山線路線說明）`
Publisher: 臺北市政府捷運工程局
URL: https://www.dorts.gov.taipei/cp.aspx?n=71acc5b0cdffc313
Type: PRIMARY
Confidence: High for what DORTS calls the figure; Medium if the figure is to be interpreted as a final outturn cost
Original-language sentence: `路線規劃報告書於86年11月21日奉行政院核定，財務計畫於93年12月2日奉行政院核定，建設總經費499.3億元。`


**External report label — unverified: Confirmed — DORTS says the first Songshan construction package was CG590C and that work under it began on ROC 95-03-29 (2006-03-29).**

The same page identifies three civil packages, a track package and the principal E&M contracts, including rolling stock, signaling, power, communications and automatic fare collection.

Source title (English, working translation): *Songshan–Xindian Line — Songshan Line Route Description*
Original-language title: `松山新店線（松山線路線說明）`
Publisher: 臺北市政府捷運工程局
URL: https://www.dorts.gov.taipei/cp.aspx?n=71acc5b0cdffc313
Type: PRIMARY
Confidence: High
Original-language sentence/evidentiary clause: `最早施工標為CG590C，自95年3月29日簽約開始施工。`


**External report label — unverified: Confirmed — The Xindian main service reached Xindian on ROC 88-11-11 (1999-11-11), and the Qizhang–Xiaobitan branch entered passenger operation on ROC 93-09-29 (2004-09-29).**

The current DORTS history is more granular than many English summaries: it distinguishes the northern NTU Hospital–Guting portion, opened with the Zhonghe Line on 1998-12-24, from the Guting–Xindian southern portion opened on 1999-11-11. For a concise reference-site chronology, 1999-11-11 is the date on which service reached Xindian; it is not the date on which every part of what DORTS calls the Xindian Line first carried passengers.

Source title (English, working translation): *Songshan–Xindian Line — Xindian Line Route Description*
Original-language title: `松山新店線（新店線路線說明）`
Publisher: 臺北市政府捷運工程局
URL: https://www.dorts.gov.taipei/cp.aspx?n=71acc5b0cdffc313&s=CBD13A8895C4EF94
Type: PRIMARY
Confidence: High
Original-language sentence/evidentiary clause: `南段（古亭站至新店站）…於88年11月11日11時通車營運。小碧潭站至七張站…於93年9月29日通車營運。`


**External report label — unverified: Confirmed — Xiaonanmen is a short underground constituent section between Ximen and Chiang Kai-Shek Memorial Hall; DORTS gives approximately 1.6 km and one intermediate station.**

This is a constituent-project description rather than a consolidated present-day G-line length.

Source title (English, working translation): *Songshan–Xindian Line — Xiaonanmen Line Route Description*
Original-language title: `松山新店線（小南門線路線說明）`
Publisher: 臺北市政府捷運工程局
URL: https://www.dorts.gov.taipei/cp.aspx?n=71acc5b0cdffc313&s=9A7448733F1518F5
Type: PRIMARY
Confidence: High
Original-language sentence: `小南門線由西門站至中正紀念堂站，全長約1.6公里，設1座車站，全線採地下方式建造。`


**External report label — unverified: Confirmed — Xiaonanmen opened on ROC 89-08-31 (2000-08-31) and DORTS says it was incorporated into Songshan–Xindian operation on 2014-11-15.**

DORTS also records the historical engineering purpose of this connection: it allowed high-capacity rolling stock to reach Beitou Depot for maintenance. That is an important reason not to treat Xiaonanmen merely as a one-station passenger “extension.”

Source title (English, working translation): *Songshan–Xindian Line — Xiaonanmen Line Route Description*
Original-language title: `松山新店線（小南門線路線說明）`
Publisher: 臺北市政府捷運工程局
URL: https://www.dorts.gov.taipei/cp.aspx?n=71acc5b0cdffc313&s=9A7448733F1518F5
Type: PRIMARY
Confidence: High
Original-language sentence/evidentiary clause: `於民國89年8月31日通車營運，…103年11月15日併入松山新店線營運。`


**External report label — unverified: Confirmed — The operator’s live service page publishes three G-line operating patterns: Songshan–Xindian, Songshan–Taipower Building, and Qizhang–Xiaobitan.**

The page also publishes approximately 37 minutes one way for Songshan–Xindian, approximately 23 minutes for Songshan–Taipower Building, and approximately 4 minutes for Qizhang–Xiaobitan. It states operating hours as 06:00–24:00.

Important currentness qualification: the page was still live when checked on 2026-08-15, but its own content metadata says `資料更新：112-05-16`, i.e. 2023-05-16. It therefore establishes what the operator is still publishing, but not with high confidence that every exact interval has been freshly reviewed in 2026.

Source title (English): *Routes and Headways*
Original-language title: `路線及班距`
Publisher: 臺北大眾捷運股份有限公司 (Taipei Rapid Transit Corporation, TRTC)
URL: https://www.metro.taipei/cp.aspx?n=EAD981369A065968&s=0F3F913C344BA050
Type: PRIMARY
Confidence: Medium for exact present-day 2026 operating details because the page bears a 2023 content-update date; High that these are the values currently published on that page
Original-language sentence/evidence: `營運模式：〖松山－新店〗、〖松山－臺電大樓〗、〖七張－小碧潭〗`
Original-language sentence/evidence: `單向運行時間：〖松山－新店〗約37分鐘；〖松山－臺電大樓〗約23分鐘。`
Original-language sentence/evidence: `單向運行時間：約4分鐘。`


**External report label — unverified: Confirmed — TRTC explicitly says the Xiaobitan branch shares Qizhang station infrastructure with the main line and that inserting branch trains changes some peak gaps on the Xindian section.**

In a 2024 clarification, TRTC said the Taipower Building–Songshan overlap was approximately 3 minutes at weekday peaks. Between Xindian and Gongguan, some gaps reached 5–6 minutes when Xiaobitan branch trains were inserted, while other gaps were 3–4 minutes. TRTC stated that in the 07:00–09:00 peak, 30 trains passed through the Xindian section: 10 associated with 5–6-minute gaps for branch insertion and 20 with 3–4-minute gaps.

This is a dated February 2024 operating explanation, not proof that the identical dispatch plan survives unchanged in August 2026.

Source title (English, working translation): *Further Clarification of Peak Headways on the Taipei MRT Songshan–Xindian Line: 3 Minutes Songshan–Taipower Building; Some Sections 4–6 Minutes for Xiaobitan Branch*
Original-language title: `臺北捷運松山新店線尖峰時段班距再說明 松山至臺電大樓站班距3分鐘 因應小碧潭支線部分路段班距4至6分鐘`
Publisher: 臺北大眾捷運股份有限公司
URL: https://www.gov.taipei/News_Content.aspx?n=F0DDAF49B89E9413&s=089B9ADABE51C4E3
Type: PRIMARY
Confidence: High for the February 2024 operating arrangement; Medium as a statement of August 2026 practice
Original-language sentence: `因小碧潭支線與松山新店線共用七張站月臺，因此有少部分列車班距6分鐘。`


**External report label — unverified: Confirmed — DORTS classifies the Songshan project as a high-capacity MRT system.**

A DORTS engineering-journal article explicitly puts the recently completed Xinyi and Songshan lines in the high-capacity category. In its general description of Taipei’s high-capacity system, the same article gives 1,435 mm steel-wheel/steel-rail track and 750 V DC third-rail collection. Those are network-standard engineering statements rather than a line-specific rolling-stock assignment.

Source title (English, official article title): *Innovation of Taipei MRT Xinyi Line E&M Systems*
Original-language title: `臺北捷運信義線的機電系統創新`
Publisher: 臺北市政府捷運工程局, in `捷運技術 第51期`
URL: https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page133.html
Type: PRIMARY
Confidence: High for system classification and physical engineering standard
Original-language sentence/evidence: `信義、松山線皆屬高運量系統。`
Original-language sentence/evidence: `臺北都會區高運量捷運系統則一律採用軌距寬度為1,435mm之鋼輪鋼軌系統。`
Original-language sentence/evidence: `集電方式採直流750伏特(V)之第三軌型式。`


**External report label — unverified: Confirmed — Songshan Line planning provided terminal tail tracks rather than a dedicated depot and specified Xindian Depot for routine train maintenance.**

This should be written historically: it is what the Songshan planning article says. A later DORTS FAQ says high-capacity depots can support each other, so this sentence alone does not establish the exclusive present-day maintenance depot for every G-line train.

Source title (English, working translation): *Songshan Line Route Planning and Operating Pattern*
Original-language title: `松山線路線規劃與營運模式`
Publisher: 臺北市政府捷運工程局, in `捷運技術 第52期`
Authors: 鄭安良、曾明月
URL: https://ebook.dorts.gov.taipei/JRTST/ebook/no52/files/basic-html/page8.html
Type: PRIMARY
Confidence: High as a statement of Songshan planning; Medium for present-day exclusive maintenance allocation
Original-language sentence: `由於機廠用地不易取得，因此於路線尾端設置儲車尾軌供營運調度，另須利用新店機廠作列車平常之維修保養。`


**External report label — unverified: Confirmed — DORTS records distinct rolling-stock procurements for the constituent projects: 11 six-car trains for Xindian, three three-car trains for the Xiaobitan project, and 10 six-car trains for Songshan.**

These are procurement quantities. They must not be rewritten as “the G line currently operates only these train types” or as a current fleet allocation.

Source title (English, working translation): *E&M Design — How Many Trains Were Procured for Each Line in the Taipei Metropolitan MRT Network?*
Original-language title: `機電設計>台北都會區大眾捷運系統路網中，各路線所採購之列車數為何？`
Publisher: 臺北市政府捷運工程局
URL: https://www.dorts.gov.taipei/News_Content.aspx?n=2A66A485FACB0D5B&s=C8602F8588914E91
Alternative accessible FAQ-list URL: https://www.dorts.gov.taipei/news_toggle.aspx?PageSize=20&n=2A66A485FACB0D5B&page=7&sms=87415A8B9CE81B16
Type: PRIMARY
Confidence: High for procurement quantities
Original-language sentence/evidence: `新店線(CH321標)共採購11列六車列車(66輛)。`
Original-language sentence/evidence: `新店線小碧潭站(CH321A標)共採購3列三車列車(9輛)。`
Original-language sentence/evidence: `松山線(CG391標)共採購10列六車列車(60輛)。`


**External report label — unverified: Confirmed — The official June 2026 line-by-line operating-statistics table records 10,659,184 passenger trips for Songshan–Xindian.**

For ROC 115 June (June 2026), the Taipei City Public Transportation Office table records for `松山新店線`: 10,659,184 passenger trips (`客運人次`), 10,417,349 electronic-ticket trips, 62,830,929 passenger-km (`延人公里`), and an average trip distance of 5.89 km. These should be cited as June 2026 monthly statistics, not as daily ridership and not as annual ridership.

The statistical form itself does not, in the material read here, explain in detail how a multi-line passenger journey is allocated among lines; that methodological point remains a stated gap below.

Source title (English, working translation): *Taipei Rapid Transit Corporation MRT Operating Overview — by Line, June 2026*
Original-language title: `臺北大眾捷運股份有限公司捷運營運概況-按路線分`
Publisher / compiling agency: 臺北市公共運輸處
Source data attribution in table: `本處一般運輸科`
URL: https://www-ws.gov.taipei/Download.ashx?icon=..pdf&n=MjA2MTItMDItMDLljJfmjbfmjInot6%2Fnt5rliIYxMTUwNi5wZGY%3D&u=LzAwMS9VcGxvYWQvNDU4L3JlbGZpbGUvMjI1ODMvOTY2NjQ2Mi80NTgwMjYwZi0zYTUwLTRlNDgtYjIxNi05Y2Y0MjNmOTdiNmQucGRm
Type: PRIMARY
Confidence: High
Original-language source text: the source is a table rather than prose; the relevant row is `松山新店線　10,659,184　10,417,349　62,830,929　5.89　－　－`, under the headings `客運人次／電子票證人次／延人公里／平均運距／客運收入／電子票證收入`.


#### Conflicts

**Contradicted — Songshan Line station count: 8 versus 7, even though the sources purport to describe the same approximately 8.5 km Songshan project and explicitly include Ximen.**

Value A: **8 underground stations, including Ximen.**

The current DORTS route page says eight.

Source title (English, working translation): *Songshan–Xindian Line — Songshan Line Route Description*
Original-language title: `松山新店線（松山線路線說明）`
Publisher: 臺北市政府捷運工程局
URL: https://www.dorts.gov.taipei/cp.aspx?n=71acc5b0cdffc313
Type: PRIMARY
Confidence: High that the current source prints 8; High factual confidence because a second DORTS technical source independently prints the same value
Original-language sentence/evidence: `全長約8.5公里，設8座地下車站（含西門站），全線採地下方式建造。`

Value B: **8 underground stations, including Ximen.**

A DORTS technical-journal article independently gives the same count and names Ximen, Beimen, Zhongshan, Songjiang Nanjing, Nanjing Fuxing, Taipei Arena, Nanjing Sanmin and Songshan.

Source title (English, working translation): *Songshan Line Route Planning and Operating Pattern*
Original-language title: `松山線路線規劃與營運模式`
Publisher: 臺北市政府捷運工程局, `捷運技術 第52期`
URL: https://ebook.dorts.gov.taipei/JRTST/ebook/no52/files/basic-html/page8.html
Type: PRIMARY
Confidence: High
Original-language sentence/evidence: `沿線設8個地下車站（含西門站）。`

Value C: **7 underground stations, including Ximen.**

A DORTS engineering book instead prints seven while giving the same approximately 8.5 km length and saying Ximen is included. On its face this is a direct numerical contradiction, not an obvious difference in whether Ximen is counted.

Source title (English, working translation): *Taipei MRT Engineering Technical Document Management Practice*
Original-language title: `臺北捷運工程技術文件管理實務`
Publisher: 臺北市政府捷運工程局, `捷運工程叢書 精進版－17`
URL: https://ebook.dorts.gov.taipei/ebook/no17/files/basic-html/page23.html
Type: PRIMARY
Confidence: Low for the factual value 7 because it conflicts with two other DORTS sources; High that the book itself prints 7
Original-language sentence/evidence: `全線長約8.5公里，設7座地下車站（含西門站）。`

Disposition: **Contradicted. Do not silently correct the 7 to 8 in a research file.** A publication can probably use 8 only after the underlying DORTS as-built/station register or an explicit correction is checked.


**Contradicted / unresolved scope — DORTS gives incompatible descriptions of the Xindian Line’s northern limit, main-line length and station count.**

Value A: **NTU Hospital–Xindian; main line approximately 10.5 km; 11 stations, while NTU Hospital is assigned operationally to Tamsui–Xinyi; Xiaobitan branch approximately 1.5 km.**

This is the current DORTS Xindian route-description page.

Source title (English, working translation): *Songshan–Xindian Line — Xindian Line Route Description*
Original-language title: `松山新店線（新店線路線說明）`
Publisher: 臺北市政府捷運工程局
URL: https://www.dorts.gov.taipei/cp.aspx?n=71acc5b0cdffc313&s=CBD13A8895C4EF94
Type: PRIMARY
Confidence: Medium for the figures as a coherent engineering definition; High that the page prints them
Original-language sentence/evidence: `新店線由台大醫院站至新店站(含小碧潭支線)…主線約10.5公里…沿線共設11座車站(其中台大醫院站歸屬淡水信義線營運)。`

Value B: **Chiang Kai-Shek Memorial Hall–Xindian; 11.2 km; 10 stations and one depot.**

This is the definition in DORTS's engineering-document-management book.

Source title (English, working translation): *Taipei MRT Engineering Technical Document Management Practice*
Original-language title: `臺北捷運工程技術文件管理實務`
Publisher: 臺北市政府捷運工程局, `捷運工程叢書 精進版－17`
URL: https://ebook.dorts.gov.taipei/ebook/no17/files/basic-html/page23.html
Type: PRIMARY
Confidence: Medium for the figure as the unique definition; High that the source prints it
Original-language sentence/evidence: `新店線由中正紀念堂站至新店站（含小碧潭支線）…全長11.2公里，設10座車站及1座機廠。`

What each appears to measure: the two sources explicitly begin at different northern stations. That alone means their scope is not identical. However, the material read does **not** explain why the source beginning farther north at NTU Hospital gives the shorter 10.5 km main-line figure while the source beginning at Chiang Kai-Shek Memorial Hall gives 11.2 km. No attempt has been made here to “fix” this by geometry, subtraction or averaging.

Disposition: **Contradicted / definition unresolved.** A consolidated line-length claim should remain TBC until the underlying chainage/as-built documentation is read.


**Conflict of accounting measures — Songshan project financial figures are 499.3億元, 530億4,206萬餘元, and 502億9,566萬餘元, but the labels are different.**

These figures must not be averaged, and none should be presented merely as “the cost” without its accounting definition.

Value A: **499.3億元 — `建設總經費`.**

DORTS gives this in the context of approval of the route plan and financial plan. It appears to be the project-plan total construction-cost figure.

Source title (English, working translation): *Songshan–Xindian Line — Songshan Line Route Description*
Original-language title: `松山新店線（松山線路線說明）`
Publisher: 臺北市政府捷運工程局
URL: https://www.dorts.gov.taipei/cp.aspx?n=71acc5b0cdffc313
Type: PRIMARY
Confidence: High for the label/value; Medium if treated as final outturn
Original-language sentence/evidence: `財務計畫於93年12月2日奉行政院核定，建設總經費499.3億元。`

Value B: **530億4,206萬餘元 — `歲出預算數`.**

The Audit Office preface identifies this as the expenditure amount budgeted in the Songshan Line special budget, not as the audited final expenditure.

Source title (English, working translation): *Audit Report on the Special Final Accounts for the Taipei Metropolitan Area MRT System Subsequent Network Songshan Line Construction Project*
Original-language title: `臺北都會區大眾捷運系統建設計畫後續路網松山線特別決算審核報告`
Publisher: 審計部臺北市審計處
URL: https://auditreport.audit.gov.tw/ServerFile/Get/637927033231617129357c12bea3f0498585d044e95ec0d05d
Type: PRIMARY
Confidence: High
Original-language sentence/evidence: `歲出預算數530億4,206萬餘元。`

Value C: **502億9,566萬餘元 — audited final-account expenditure total (`決算審定數`).**

The audit preface breaks this into 461億4,771萬餘元 of audited realized expenditure plus 41億4,795萬餘元 in payable retained amounts, producing the stated audited final-account total.

Source title (English, working translation): *Audit Report on the Special Final Accounts for the Taipei Metropolitan Area MRT System Subsequent Network Songshan Line Construction Project*
Original-language title: `臺北都會區大眾捷運系統建設計畫後續路網松山線特別決算審核報告`
Publisher: 審計部臺北市審計處
URL: https://auditreport.audit.gov.tw/ServerFile/Get/637927033231617129357c12bea3f0498585d044e95ec0d05d
Type: PRIMARY
Confidence: High
Original-language sentence/evidence: `合計決算審定數為502億9,566萬餘元。`

Disposition: **Different figures, apparently different accounting concepts rather than a demonstrated arithmetic contradiction.** For publication, retain the source labels. A defensible formulation would distinguish “DORTS planned construction total,” “special-budget expenditure appropriation,” and “audited final-account expenditure” rather than choosing one number.


**Apparent discrepancy, probably different levels of aggregation — peak headways are published as “about 4–6 minutes” on one TRTC page while a later TRTC clarification describes individual Xindian-section gaps of 3–4 and 5–6 minutes.**

Value A: **Weekday peak average approximately 4–6 minutes; approximately 3 minutes in the Songshan–Taipower Building overlap.**

Source title (English): *Routes and Headways*
Original-language title: `路線及班距`
Publisher: 臺北大眾捷運股份有限公司
URL: https://www.metro.taipei/cp.aspx?n=EAD981369A065968&s=0F3F913C344BA050
Type: PRIMARY
Confidence: Medium for August 2026 because the page bears a 2023-05-16 content-update date
Original-language sentence/evidence: `尖峰時段（07:00～09:00，17:00～19:30）：約4～6分鐘，重疊區間約3分鐘。`

Value B: **In the February 2024 explanation, 10 of 30 morning-peak trains were associated with 5–6-minute intervals for Xiaobitan insertion, and the other 20 with 3–4-minute intervals; the overlap remained approximately 3 minutes.**

Source title (English, working translation): *Further Clarification of Peak Headways on the Taipei MRT Songshan–Xindian Line*
Original-language title: `臺北捷運松山新店線尖峰時段班距再說明 松山至臺電大樓站班距3分鐘 因應小碧潭支線部分路段班距4至6分鐘`
Publisher: 臺北大眾捷運股份有限公司
URL: https://www.gov.taipei/News_Content.aspx?n=F0DDAF49B89E9413&s=089B9ADABE51C4E3
Type: PRIMARY
Confidence: High for February 2024; Medium for August 2026
Original-language sentence/evidence: `其中10部列車…班距為5至6分鐘；其餘20部列車，班距均為3至4分鐘。`

Disposition: **Not proven contradictory.** The first source publishes an average/service-range summary; the second explains the uneven sequence created by inserting branch trains. The more important unresolved issue is recency: neither source is a freshly dated August 2026 working timetable.


#### Checked and failed

**2026-08-15 — Rejected: “4444億元 was the construction cost of the Xindian Line.”**

Reason: the DORTS Xindian page does contain `4444億元`, but the grammar explicitly attaches it to the once-approved **entire initial 70.3 km network**, of which Xindian was only one part. It does not establish a Xindian-only capital cost.

Status: Not found for a Xindian-only total cost in the primary pages read.

Source title (English, working translation): *Songshan–Xindian Line — Xindian Line Route Description*
Original-language title: `松山新店線（新店線路線說明）`
Publisher: 臺北市政府捷運工程局
URL: https://www.dorts.gov.taipei/cp.aspx?n=71acc5b0cdffc313&s=CBD13A8895C4EF94
Type: PRIMARY
Confidence: High
Original-language sentence/evidence: `新店線為臺北初期70.3公里路網…中的一部分，…核定總經費4444億元。`

Reason for rejection: the source's own scope is network-wide, not Xindian-only.


**2026-08-15 — Rejected: “4444億元 was the cost of the Xiaonanmen Line.”**

Reason: the Xiaonanmen page uses the same initial-network approval context. It also says Xiaonanmen's systems were included with the Nangang Line project. No Xiaonanmen-only 4444億元 claim survives source checking.

Status: Not found for a Xiaonanmen-only total construction cost in the pages read.

Source title (English, working translation): *Songshan–Xindian Line — Xiaonanmen Line Route Description*
Original-language title: `松山新店線（小南門線路線說明）`
Publisher: 臺北市政府捷運工程局
URL: https://www.dorts.gov.taipei/cp.aspx?n=71acc5b0cdffc313&s=9A7448733F1518F5
Type: PRIMARY
Confidence: High
Original-language sentence/evidence: `小南門線(原維護軌)屬臺北初期70.3公里路網中的一部分，…核定總經費4444億元。`

Reason for rejection: network-level figure, not a Xiaonanmen project-only cost.


**2026-08-15 — Rejected as a present-day length: 19.3 km.**

Reason: a DORTS planning-history article does print 19.3 km, but explicitly for the **1981 recommended Green Line** devised during the BMTC study, running from the city/Songshan corridor south toward Xindian. It is a historical proposed-network figure, not an as-built current Songshan–Xindian route length.

Status: Confirmed historical figure; rejected for present-day line length.

Source title (English, working translation): *Songshan Line Route Planning and Operating Pattern*
Original-language title: `松山線路線規劃與營運模式`
Publisher: 臺北市政府捷運工程局, `捷運技術 第52期`
URL: https://ebook.dorts.gov.taipei/JRTST/ebook/no52/files/basic-html/page8.html
Type: PRIMARY
Confidence: High
Original-language sentence/evidence: `松山地區即建議由綠線服務，…西端並往南延伸服務新店，全長計19.3公里。`

Reason for rejection: historical proposed alignment/scope, not as-built G-line route length.


**2026-08-15 — Rejected: producing a consolidated G-line length by simply adding constituent-project figures.**

Reason: no single primary source read states a consolidated, as-operated G main-line distance under one defined chainage convention. DORTS gives approximately 8.5 km for Songshan and 1.6 km for Xiaonanmen, but gives mutually incompatible Xindian figures of 10.5 km and 11.2 km under different endpoint definitions. Adding selected values would manufacture a number that no checked source actually states.

Status: Not found.

Primary sources checked:

Source title (English, working translation): *Songshan–Xindian Line — Songshan/Xindian/Xiaonanmen Route Descriptions*
Original-language title: `松山新店線`
Publisher: 臺北市政府捷運工程局
URLs:
https://www.dorts.gov.taipei/cp.aspx?n=71acc5b0cdffc313
https://www.dorts.gov.taipei/cp.aspx?n=71acc5b0cdffc313&s=CBD13A8895C4EF94
https://www.dorts.gov.taipei/cp.aspx?n=71acc5b0cdffc313&s=9A7448733F1518F5
Type: PRIMARY
Confidence: High that no consolidated figure appears in those route descriptions
Original-language source evidence: `全長約8.5公里`; `主線約10.5公里`; `全長約1.6公里`.

Reason for rejection: inconsistent constituent definitions make arithmetic synthesis unsafe.


**2026-08-15 — Audit Office full-report access did not completely survive.**

The Audit Office landing page for `臺北都會區大眾捷運系統建設計畫後續路網松山線特別決算審核報告` opened. Following the full-report link through the research client produced a 404. A separate official Audit Office server file containing the four-page preface/table-of-contents fragment did open and was visually checked; only figures actually present in that accessible fragment are used above.

Status: Partially accessible; full report body **not verified** in this research pass.

Source title (English, working translation): *Audit Report on the Special Final Accounts for the Taipei Metropolitan Area MRT System Subsequent Network Songshan Line Construction Project*
Original-language title: `臺北都會區大眾捷運系統建設計畫後續路網松山線特別決算審核報告`
Publisher: 審計部 / 審計部臺北市審計處
Landing URL: https://www.audit.gov.tw/p/405-1000-3628%2Cc280.php?Lang=zh-tw
Accessible preface URL: https://auditreport.audit.gov.tw/ServerFile/Get/637927033231617129357c12bea3f0498585d044e95ec0d05d
Type: PRIMARY
Confidence: High regarding the access result and the four-page fragment; no confidence assigned to unread portions of the report
Original-language sentence: N/A for the 404 observation; this is an access result rather than a claim drawn from page text.


**2026-08-15 — A secondary claim that the Xiaobitan branch itself causes the Taipower Building short-turn service was not promoted.**

A 2020 Central News Agency feature says that because Xiaobitan has no dedicated Qizhang platform and shares track with the G line, the branch both lengthens intervals and results in some Songshan–Xindian trains turning at Taipower Building instead of reaching Xindian.

The first part survives a primary-source check: TRTC's 2024 clarification explicitly confirms shared use of Qizhang station infrastructure and says Xiaobitan train insertion creates some longer gaps. The primary source read does **not**, however, expressly establish the further causal claim that this is why the Songshan–Taipower Building short-turn operating pattern exists. That causal statement is therefore withheld.

Secondary source title (English, working translation): *Lowest Ridership and Little Presence: IKEA Brings a Turning Point for Xiaobitan Station*
Original-language title: `運量敬陪末座存在感超低 IKEA為小碧潭站帶來轉機`
Publisher: 中央通訊社 (Central News Agency)
URL: https://www.cna.com.tw/project/20200416-metro/page11.html
Type: SECONDARY
Confidence: Medium as a lead; not sufficient for the disputed causal claim
Original-language sentence/evidence: `也使得松山新店線部分列車無法行駛至新店站，只到台電大樓站就折返。`

Primary check title (English, working translation): *Further Clarification of Peak Headways on the Taipei MRT Songshan–Xindian Line*
Original-language title: `臺北捷運松山新店線尖峰時段班距再說明 松山至臺電大樓站班距3分鐘 因應小碧潭支線部分路段班距4至6分鐘`
Publisher: 臺北大眾捷運股份有限公司
URL: https://www.gov.taipei/News_Content.aspx?n=F0DDAF49B89E9413&s=089B9ADABE51C4E3
Type: PRIMARY
Confidence: High
Original-language sentence: `因小碧潭支線與松山新店線共用七張站月臺，因此有少部分列車班距6分鐘。`

Result: **Partially corroborated, partially Not found.** Shared infrastructure/headway interaction is confirmed; causation of the Taipower short-turn pattern is not established by the primary material read.


**2026-08-15 — Rejected: treating project-specific train procurement totals as the current G-line fleet assignment.**

DORTS establishes what the Xindian, Xiaobitan and Songshan projects purchased, but that is not the same question as which cars are currently dispatched to G-line service in 2026. The same FAQ collection explains that high-capacity rolling-stock procurement is intended to preserve cross-line operational flexibility; therefore a present fleet roster cannot be reconstructed safely by attaching old procurement batches permanently to their purchasing projects.

Status: Not found for a current G-line fleet-assignment roster.

Source title (English, working translation): *E&M Design — How Many Trains Were Procured for Each Line in the Taipei Metropolitan MRT Network?*
Original-language title: `機電設計>台北都會區大眾捷運系統路網中，各路線所採購之列車數為何？`
Publisher: 臺北市政府捷運工程局
URL: https://www.dorts.gov.taipei/news_toggle.aspx?PageSize=20&n=2A66A485FACB0D5B&page=7&sms=87415A8B9CE81B16
Type: PRIMARY
Confidence: High
Original-language sentence/evidence: `捷運局採購之各批列車均需能跨線使用，通行於路網內所有路線以發揮營運調度之彈性。`

Reason for rejection: procurement history is not an allocation roster.


#### Stated gaps

**TBC — Consolidated as-operated G-line route length.**

What can currently be said: DORTS gives constituent figures, but the Xindian figures conflict in both endpoint definition and distance. No primary source read gives one consolidated Songshan–Xindian main-line distance under an explicit present-day chainage convention.

Status: Not found.

Documents that would settle it: a current TRTC infrastructure/asset-register route-length table; DORTS final as-built chainage schedules for the three constituent projects; or an official current route fact sheet that explicitly defines whether branch mileage and shared/interchange limits are included.

Primary material already checked: the three DORTS `松山新店線` route-description pages and `臺北捷運工程技術文件管理實務`.

Publication value until settled: **TBC.**


**TBC — Definitive station count for the Songshan project and, separately, a source-stated total station count for the present G route.**

What can currently be said: two DORTS primary sources say Songshan has eight underground stations including Ximen; one DORTS engineering book says seven including Ximen. The current Songshan page's station table is consistent with the eight-station description, but the contradictory seven must not be erased from the research record.

Status: Contradicted for the Songshan project; Not found for a single explicitly stated consolidated G-route total in the primary material read.

Document that would settle it: DORTS final completion/as-built station register, an erratum for `臺北捷運工程技術文件管理實務`, or a current TRTC/DORTS line fact sheet giving an explicit total and counting convention.

Publication value until settled: **TBC for any claim that depends on reconciling the contradictory DORTS statements.**


**TBC — Why DORTS currently says NTU Hospital–Xindian / 10.5 km / 11 stations while another DORTS engineering source says Chiang Kai-Shek Memorial Hall–Xindian / 11.2 km / 10 stations.**

The sources appear to use different northern boundaries, but that does not by itself explain the incompatible lengths. The research does not assume either is a typo.

Status: Contradicted / unresolved definition.

Document that would settle it: original Xindian final design/as-built chainage documentation, project completion report, or a DORTS explanatory correction that defines exactly which civil/operating segment each figure measures.

Publication value until settled: **TBC.**


**TBC — A single unqualified “Songshan Line construction cost.”**

Three source-defined values survive: `建設總經費499.3億元`, `歲出預算數530億4,206萬餘元`, and audited `決算審定數502億9,566萬餘元`. They plainly carry different accounting labels.

Status: Multiple confirmed values; single metric not established.

Document that would settle the scope: the complete Songshan special-final-accounts audit report, particularly the detailed final-account tables and explanation of project scope, read alongside the DORTS financial-plan approval and any final project closeout report.

Publication treatment until settled: publish the separate labeled figures, not one synthetic “cost.”


**TBC — Exact August 2026 scheduled G-line peak headways.**

The operator's live `路線及班距` page still publishes the service patterns and average headways, but the page bears a 2023-05-16 content-update date. A February 2024 TRTC clarification gives more granular peak intervals, but that too is historical relative to the research date.

Status: Not freshly confirmed for 2026-08-15.

Document that would settle it: a current TRTC working timetable, current dispatch/headway plan, or a newly updated official route/headway page.

What is safe now: say “TRTC's live page publishes…” and include the page's update date; do not present its exact intervals as independently proven August 2026 practice without qualification.


**TBC — Current rolling-stock types and quantities assigned to G-line service.**

DORTS gives procurement history: Xindian CH321, Xiaobitan CH321A, and Songshan CG391 quantities are confirmed. DORTS also explicitly says procured high-capacity batches are intended to permit cross-line use. Nothing read here is a current TRTC 2026 fleet-assignment roster.

Status: Not found.

Document that would settle it: a current TRTC rolling-stock allocation/dispatch roster, fleet management document, annual report that maps car classes to routes, or an official answer identifying regular G-line assignments as of a specified date.

Publication value until settled: **TBC. Do not equate project procurement with present fleet.**


**TBC — Current exclusive “home depot” or routine-maintenance depot for G-line rolling stock.**

The Songshan planning article says Xindian Depot was to handle routine maintenance because Songshan lacked depot land. A current DORTS FAQ, however, emphasizes that high-capacity depots can support each other and explicitly gives Xinzhuang Depot supporting Songshan trains as an example. These statements are compatible as “planned routine base” versus “network maintenance support,” but they do not establish a unique 2026 home-depot assignment.

Planning source title (English, working translation): *Songshan Line Route Planning and Operating Pattern*
Original-language title: `松山線路線規劃與營運模式`
Publisher: 臺北市政府捷運工程局
URL: https://ebook.dorts.gov.taipei/JRTST/ebook/no52/files/basic-html/page8.html
Type: PRIMARY
Confidence: High for the planning statement
Original-language sentence/evidence: `另須利用新店機廠作列車平常之維修保養。`

Later support source title (English, working translation): *DORTS E&M Design FAQ — Depot Maintenance Capacity*
Original-language title: `常見問答（機電設計）`
Publisher: 臺北市政府捷運工程局
URL: https://www.dorts.gov.taipei/news_toggle.aspx?PageSize=20&n=2A66A485FACB0D5B&page=7&sms=87415A8B9CE81B16
Type: PRIMARY
Confidence: High
Original-language sentence/evidence: `例如新莊機廠可支援松山線列車維修。`

Document that would settle current assignment: TRTC's current depot/fleet maintenance allocation or rolling-stock stabling plan.


**TBC — Methodological definition behind the current official “passenger trips by line” statistic.**

The June 2026 Public Transportation Office table directly gives `松山新店線` passenger trips, passenger-km and average distance. The page/table read in this pass does not provide the detailed statistical rule for assigning journeys that involve transfers between lines.

Status: Not found in the document read; the numerical June 2026 row itself is Confirmed.

Source title (English, working translation): *Taipei Rapid Transit Corporation MRT Operating Overview — by Line, June 2026*
Original-language title: `臺北大眾捷運股份有限公司捷運營運概況-按路線分`
Publisher: 臺北市公共運輸處
URL: https://www-ws.gov.taipei/Download.ashx?icon=..pdf&n=MjA2MTItMDItMDLljJfmjbfmjInot6%2Fnt5rliIYxMTUwNi5wZGY%3D&u=LzAwMS9VcGxvYWQvNDU4L3JlbGZpbGUvMjI1ODMvOTY2NjQ2Mi80NTgwMjYwZi0zYTUwLTRlNDgtYjIxNi05Y2Y0MjNmOTdiNmQucGRm
Type: PRIMARY
Confidence: High for the published values; Low for any unstated interpretation of how transfer journeys are allocated
Original-language source text: `路線別／客運人次／延人公里／平均運距`.

Document that would settle it: the statistical-form definition/manual for table `20612-02-02`, or an explanatory note from 臺北市公共運輸處/TRTC defining `客運人次` on a line-by-line basis.
