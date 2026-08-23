# Zhonghe–Xinlu Line 中和新蘆線 (O) — research

**Version 2.1 — 23 August 2026**
**Status: research. Verify before further editing.**

Supersedes `docs/research/rail/metro/lines/zhonghe-xinlu-line.md` v1.0 (6 August
2026) as the sourced record for this subject. That file is a lead index —
long, useful, and largely right — but it had no URLs for most claims, no
primary/secondary marking, and it explicitly flagged three unresolved
problems (a CK570F contract-date conflict, an unconfirmed Luzhou opening
date, and O03/O04 spellings to check). This file resolves what could be
resolved against primary sources and reports on the rest — see "Contradicts
the existing lead file" below. It mirrors the content page at
`content/rail/metro/lines/zhonghe-xinlu-line.md`.

All station codes, names, sequences, coordinates and interchange flags are
taken from `data/tdx/TRTC/station.json`, `route.json` and
`station-of-route.json` (committed TDX data), per this project's rule that
structured data is not hand-researched. This file researches history,
engineering and controversy only.

---

## What is established

### The three component projects and their boundaries

DORTS runs the line's own project page (中和新蘆線) as three tabs, one per
component project, each with its own route description. Read directly:

- **Zhonghe line 中和線** — "北起羅斯福路、和平東路口(和新店線之古亭站銜接)，沿著
  羅斯福路轉入師大路，至水源路後穿越新店溪，接永和路、中和路、景安路以迄中和南勢角"
  — starts at the Roosevelt Rd/Heping E Rd junction, connecting to Guting
  station on the Xindian line, and runs south to Nanshijiao. **全長約5.4公里，
  設4座車站，全線以地下方式建造，為鋼軌鋼輪高運量系統.**
  Source: DORTS 中和新蘆線 (中和線分頁), https://www.dorts.gov.taipei/cp.aspx?n=122C012A85C41404,
  fetched 12 Aug 2026. PRIMARY. High confidence.
- **Xinzhuang line 新莊線** — "新莊線路線自古亭站起，北經杭州南路轉信義路、新生南路、
  松江路、民權東、西路至三重、新莊" — starts *at* Guting station and runs north.
  **全長約19.7公里，設16座車站；全線採地下方式建造，採鋼軌鋼輪高運量系統.**
  Source: DORTS 中和新蘆線 (新莊線分頁), https://www.dorts.gov.taipei/cp.aspx?n=122C012A85C41404&s=33245A586D747A2C,
  fetched 12 Aug 2026. PRIMARY. High confidence.
- **Luzhou line 蘆洲線** — "東起臺北大橋西北側三重區三和路一段與環河北路交叉口之捷運
  新莊線道岔交會處，沿三重區三和路、蘆洲區中山一路轉三民路，至環河路前沿水湳溝U型
  迴轉，於蘆洲抽水站附近，跨越水湳溝抵達蘆洲機廠，全長約6.4公里，設5座車站；全線採
  地下方式建造，採鋼軌鋼輪高運量捷運系統."
  Source: DORTS 中和新蘆線 (蘆洲線分頁), https://www.dorts.gov.taipei/cp.aspx?n=122C012A85C41404&s=3843E83F882E79FD,
  fetched 12 Aug 2026. PRIMARY. High confidence.

Reading the Zhonghe and Xinzhuang route descriptions together: Zhonghe line's
own text ends at Guting ("和新店線之古亭站銜接"), and Xinzhuang line's own
text begins at Guting ("自古亭站起"). **Guting is therefore the boundary
between the two component projects, confirmed from both sides independently
in DORTS's own route descriptions** — not asserted only by zh.wikipedia, as
the lead file's phrasing implied needed checking.

The Luzhou line's own route description locates its southern end at **"臺北
大橋西北側...捷運新莊線道岔交會處"** — the switch/turnout point with the
Xinzhuang line's track, northwest of Taipei Bridge. Taipei Bridge is **O13**,
one stop *north* of Daqiaotou (**O12**). **This is a correction to the lead
file's shorthand that the fork is "at Daqiaotou": DORTS's own text places the
physical track switch between O12 and O13, closer to Taipei Bridge, not at
Daqiaotou station itself.** Daqiaotou is still the last shared stop and the
station where TRTC's own signage becomes operationally important (see
Conflicts/notes below on branch designations), but the trackwork divide is a
stop further north.

### Why the printed "4 stations" and the 5-station list on the Zhonghe tab don't match

DORTS's Zhonghe-line tab states **"設4座車站"** but lists five: O01 南勢角,
O02/Y11 景安, O03 永安市場, O04 頂溪, O05/G09 古亭. The same page's own note
against Guting reads **"本站工程併入捷運新店線辦理"** — Guting station's
construction was folded into the Xindian line project, not the Zhonghe line
project. That is why Guting is listed (it is physically the Zhonghe line's
northern terminus) but not counted in Zhonghe's own "4" — and it explains the
line's total station count: **Zhonghe 4 (O01–O04) + Guting 1 (O05, built
under the Xindian line project) + Xinzhuang 16 (O06–O21) + Luzhou 5
(O50–O54) = 26**, which is the total both DORTS and zh.wikipedia give for the
whole line.
Source: DORTS 中和新蘆線 (中和線分頁), as above. PRIMARY. High confidence for
the arithmetic; the "26 total" reconciliation is this file's own synthesis
from DORTS's per-project figures, not a sentence DORTS states in one place.

### Opening sequence, all sections — DORTS primary, ROC years converted

Every date below was fetched directly and re-checked with a second, narrower
fetch that explicitly asked for un-converted ROC-calendar numerals, after an
initial AI-summarised fetch mis-converted 民國99年 (=2010) as "1999" — see
"Checked and failed."

| Section | 初勘 | 履勘 | **通車/啟用** | Source (verbatim) |
|---|---|---|---|---|
| Zhonghe line (古亭–南勢角) | 87年11月6日 | 87年12月8日 | **87年12月24日** (24 Dec 1998) | "中和線於87年11月6日初勘、87年12月8日履勘、於87年12月24日通車營運" |
| Xinzhuang line, Taipei section (大橋頭–忠孝新生) | 99年9月4日 | 99年10月16日 | **99年11月3日** (3 Nov 2010) | "新莊線臺北市段，大橋頭站至忠孝新生站於99年9月4日初勘、99年10月16日履勘、於99年11月3日通車營運" |
| **Luzhou line (蘆洲–大橋頭)** | **99年9月4日** | **99年10月16日** | **99年11月3日** (3 Nov 2010) | "於99年9月4日初勘、99年10月16日履勘、99年11月3日通車營運" |
| Dongmen (忠孝新生–古亭) | 101年8月24日 | 101年9月14日 | **101年9月30日** (30 Sept 2012) | "東門站(忠孝新生站至古亭站)於101年8月24日初勘、101年9月14日履勘、於101年9月30日通車" |
| Xinzhuang line, New Taipei section (大橋頭–輔大) | 100年11月26日 | 100年12月17日 | **101年1月5日** (5 Jan 2012) | "新莊線新北市段，大橋頭站至輔大站於100年11月26日初勘、100年12月17日履勘、於101年1月5日通車營運" |
| 輔大–迴龍 | 102年5月24日 | 102年6月14日 | **102年6月29日** (29 June 2013) | "輔大站至迴龍站則於102年5月24日初勘、102年6月14日履勘、於102年6月29日通車營運" |
| Xinzhuang Depot 新莊機廠 | 109年10月25日 | 109年12月23日 | **110年1月4日 啟用營運** (4 Jan 2021) | "新莊機廠…於109年10月25日初勘、109年12月23日履勘、於110年1月4日啟用營運" |

Source for all rows: DORTS 中和新蘆線 (新莊線分頁),
https://www.dorts.gov.taipei/cp.aspx?n=122C012A85C41404&s=33245A586D747A2C,
fetched 12 Aug 2026, quotes verified verbatim in a second, narrower fetch.
PRIMARY. High confidence.

**The Luzhou line's opening date, which the lead file flagged as needing
independent confirmation, is now settled: DORTS's own Luzhou-line route
description gives the identical 初勘/履勘/通車 dates (4 Sept / 16 Oct / 3 Nov
2010) as the Xinzhuang line's Taipei section, in the Luzhou line's own tab —
not inferred from the Xinzhuang tab, as the lead worried might be
necessary.** The lead's guess ("almost certainly opened alongside") was
correct; it is now primary-confirmed rather than assumed.

### Dongmen as the connector

Dongmen's opening on 30 September 2012 closed the gap between 忠孝新生 (on the
Xinzhuang line) and 古亭 (the Zhonghe line's terminus), joining the two
previously separate operating sections into one line. Before that date the
Zhonghe section (古亭–南勢角, running through with Xindian/Danshui services)
and the Xinlu section (Xinzhuang plus Luzhou, running Fu Jen/Luzhou–Zhongxiao
Xinsheng) were operationally distinct.
Source: DORTS opening-date table above (Dongmen row), PRIMARY; corroborated
independently by zh.wikipedia's history section, which dates the resulting
service-pattern change ("輔大－南勢角" and "蘆洲－南勢角") to the same day —
zh.wikipedia, 中和新蘆線, https://zh.wikipedia.org/zh-tw/中和新蘆線, fetched
12 Aug 2026. SECONDARY, agrees with the primary date.

### Line number, code, and branch designations

- **"4號線"** assigned **11 October 2014**; station codes changed to **"O" +
  number** in **October 2016**.
  Source: zh.wikipedia, 中和新蘆線, history section ("2014年10月11日：路線編號
  定為4號線" / "2016年10月：車站編號改為「O」加數字"). SECONDARY — no DORTS
  primary page with this specific administrative-naming date was found in
  this pass; recorded as secondary rather than upgraded on the strength of a
  plausible date.
- Branch labels: zh.wikipedia's own infobox/history phrasing is **"4A往新莊"**
  and **"4B往蘆洲"** — 4A towards Xinzhuang (the branch whose terminus is
  Huilong), 4B towards Luzhou. SECONDARY.
- TRTC's own service-pattern page describes the branches by terminus pair
  rather than by letter: **"【迴龍－南勢角】、【蘆洲－南勢角】"**.
  Source: TRTC 路線及班距 (中和新蘆線), https://www.metro.taipei/cp.aspx?n=EAD981369A065968&s=E153D917FDC2AC69,
  fetched 12 Aug 2026. PRIMARY. High confidence for the service pattern
  itself; TRTC's own page does not use the "4A/4B" letters at all in the text
  fetched, so that specific letter-pair labelling rests on zh.wikipedia only.

### Headways and journey times — TRTC primary, cross-checked against TDX

TRTC's own page: weekday peak (07:00–09:00, 17:00–19:30) about **6 minutes**
per branch (**3 minutes** on the shared trunk); weekday off-peak about
**9–10 minutes** per branch (**4.5–5 minutes** shared); after 23:00 about
**12 minutes** per branch (**6 minutes** shared); weekends/holidays run the
off-peak pattern all day from 06:00. One-way journey time: **"【迴龍－南勢角】
約48分鐘；【蘆洲－南勢角】約38分鐘"**.
Source: TRTC 路線及班距, as above. PRIMARY.

TDX's own `route.json` gives `TravelTime` of **48** minutes for route O-1
(Nanshijiao–Huilong) and **38** minutes for route O-2 (Nanshijiao–Luzhou) —
an exact match to TRTC's published figures, from an independently-structured
government dataset rather than the same prose page.
Source: `data/tdx/TRTC/route.json` (committed). PRIMARY.

### Budget and approval history

- Route plan (路線規劃報告書) approved by the Executive Yuan **17 September
  1994** (83年9月17日); EIA final report accepted by the EPA **28 January
  1995** (84年1月28日); finance plan approved **15 July 1998** (87年7月15日),
  original total budget **NT$167.69 billion (1,676.9億元)**.
  Quote: "路線規劃報告書於83年9月17日奉行政院核定，財務計畫於87年7月15日核定，
  總經費1676.9億元。；環境影響評估報告書定稿本於84年1月28日獲環保署同意備查。"
- Fifth revised plan approved by the Executive Yuan **10 June 2019**
  (108年6月10日), total budget reduced to **NT$161.19 billion
  (1,611.9億元)**.
  Quote: "第5次修正計畫於108年6月10日奉行政院核定，總經費1611.9億元。"

Source for both: DORTS 中和新蘆線 (新莊線分頁), as above. PRIMARY. High
confidence for the figures themselves. **The page does not itemise the 2nd,
3rd or 4th revisions, and states no reason for the decrease between the
original and fifth figures.** No other source found in this pass explains
the decrease — see "Stated gaps."

### Contract structure

- Taipei City section (civil, water/environmental control, lifts/escalators,
  finishes): **4 section contracts — CK570A, CK570B, CK570G, CK570H**.
- New Taipei section, same scope: **5 section contracts — CK570C, CK570D,
  CK570E, CK570F, CK570J**.
- E&M systems and rolling stock procured jointly with the Luzhou line, the
  Nangang line east extension, Xindian line's Xiaobitan station, and TRTC's
  own additional-stock purchases: **CK371, CK372, CK373, CK375, CK375A,
  CK377, CK379A, CK571**.
- Earliest contract: **IKTX02**, the Erchong floodway temporary levee-crossing
  access road, signed **7 February 2001** (90年2月7日). Earliest *main-works*
  contract: **CK570D**, signed **29 June 2001** (90年6月29日).
  Quote: "最早自90年2月7日簽約開始施工的IKTX02標二重疏洪道越堤臨時便道工程，最早
  施工的主體工程為90年6月29日簽約施工的CK570D區段標工程。"

Source: DORTS 中和新蘆線 (新莊線分頁), as above. PRIMARY. High confidence.

### Rolling stock procurement, as originally contracted

DORTS's own FAQ on fleet procurement by line/contract:

- **中和線 CC361標**: "共採購8列六車列車(48輛)" — 8 six-car trains (48 cars).
- **新莊線 CK371標**: "共採購20列六車列車(120輛)" — 20 six-car trains (120 cars).
- **蘆洲線 CL601標**: "共採購4列六車列車(24輛)" — 4 six-car trains (24 cars).

Source: DORTS 常見問答 — 台北都會區大眾捷運系統路網中，各路線所採購之列車數為何？,
https://www.dorts.gov.taipei/News_Content.aspx?n=2A66A485FACB0D5B&s=C8602F8588914E91,
fetched 12 Aug 2026. PRIMARY. High confidence. **These are original
procurement figures by contract, not the current in-service fleet.**
zh.wikipedia's 蘆洲機廠 article separately states the Luzhou depot alone now
stables "33列共198輛" (33 trains, 198 cars) — more than the 4-train CL601
figure on its own, consistent with later stock transfers/additional
purchases across the C371 family, but not reconciled against DORTS's
original contract counts in this pass. See the C371 rolling-stock page
(`content/rail/metro/rolling-stock/c371.md`) for the fleet as a whole; not
re-derived here.

### Zhonghe Depot 中和機廠

**"中和機廠位於中和市和平街南方之原臺灣鐵路管理局中和車站基地內，佔地約1.47公頃
(包括捷運南勢角車站)。因用地面積之限制，設駐車廠、維修設備房及主變電站，提供營運
列車停放、一般維修及清潔之功能。"**

— on the former TRA Zhonghe station site, south of Heping Street; area
approximately **1.47 hectares, including Nanshijiao station itself**; and
DORTS's own stated reason for the depot's limited functions is exactly this
site-size constraint ("因用地面積之限制"): it has a stabling yard,
maintenance-equipment building and main substation, and provides train
stabling, general maintenance and cleaning only.

Source: DORTS 中和新蘆線 (中和線分頁), as above. PRIMARY. High confidence —
this is the operator's own stated reason, not an inference from the small
area figure.

### Xinzhuang Depot 新莊機廠 and the Losheng Sanatorium 樂生療養院

**The depot's engineering was changed for the preservation case — DORTS's
own words, independently verified in this pass**:

**"新莊機廠因配合樂生療養院保存案計畫，調整機廠設施的配置"**

— fetched directly from DORTS 中和新蘆線 (新莊線分頁), as above, 12 Aug 2026.
PRIMARY. High confidence. This is the exact sentence the lead file quoted; it
has now been independently re-fetched and confirmed to be on the page, in
this wording, rather than taken on the lead's word.

DORTS's own site-area figures: **"基地跨越新北市與桃園市…原始基地面積約17.4公頃，
配合樂生療養院保存案，基地面積縮減為13.9公頃"** — the original site,
straddling New Taipei and Taoyuan, was about 17.4 hectares; reduced to 13.9
hectares to accommodate the Losheng preservation plan. A separate sentence on
the same page's facilities summary instead gives **"佔地約17.5公頃"** for the
depot generally — a small (17.4 vs 17.5 ha) internal inconsistency on the
same DORTS page, published as found; see Conflicts.

**Losheng, established 1930** under Japanese rule as Taiwan's first and only
public leprosarium (漢生病 isolation hospital).

**The Ministry of Culture's own account of the "530 plan"**:

**"原地保留39棟建物，拆除6棟，9棟建物納入園區整體規劃進行則要重建"**

— 39 buildings preserved in place, 6 demolished, 9 to be relocated/rebuilt
as part of overall site planning. The 530 decision (30 May 2007) followed a
prior, less protective **41.6%** preservation proposal from the (then)
Taipei County Government (approved in principle by the Executive Yuan in
March 2006) and a more protective **90%** (46-building) proposal evaluated
for the Council for Cultural Affairs.
Source: 文化部文化資產局 臺灣世界遺產潛力點 — 樂生療養院,
https://twh.boch.gov.tw/taiwan/intro.aspx?id=14&lang=zh_tw, fetched 12 Aug
2026. PRIMARY (a government cultural-heritage body's own published account).
High confidence for the 39/6/9 figures as MOC's own record of the decision.

**But campaigners found the 530 plan, once implemented, actually preserved
far fewer buildings than promised**:

**"此案卻被樂青發現實際上只保留28棟，僅是41.6%方案翻版"** — "捷運局強調
「沒有機廠，新莊捷運不能通車」，提出41.6%保存方案" — "後文建會提出保留90%方案
（保存46棟）" — "2007年5月，行政院公共工程委員會宣稱以90%方案為底，做出
「保留40棟、拆遷重組9棟」院舍的「530方案」".

Source: 焦點事件, 樂生療養院爭議 (issue page), https://eventsinfocus.org/issues/1346,
fetched 12 Aug 2026. SECONDARY (independent investigative-journalism outlet).
High confidence for the "only 28 preserved" finding being what this source
reports; not independently re-derived building-by-building in this pass.

The Youth Losheng Alliance (青年樂生聯盟) formed 2004; the Losheng
Preservation Self-Rescue Association (樂生保留自救會), among the residents
(院民) themselves, formed 2005.
Source: e-info.org.tw (環境資訊中心), 2007台灣回顧：樂生療養院保留與否爭議,
https://e-info.org.tw/node/28638, fetched 12 Aug 2026 ("以醫學院學生為主體的
「青年樂生聯盟」於2004年成立" / "「樂生保留自救會」在2005成立"). SECONDARY.

**16–18 March 2007**: a one-month demolition notice was posted, producing
clashes with police and arrests; preservation groups crowdfunded roughly
NT$200,000 within 24 hours via the 黑米 platform to run a half-page *Apple
Daily* advertisement comparing the preservation plans, described by e-info as
setting a record in Taiwan's social-movement history.
**11 April 2007**: Premier 蘇貞昌 apologised on site and pledged **"保留90%為
最高目標"** — 90% preservation as the highest goal.
**15 April 2007**: 5,000–6,000 people marched demanding 90% preservation.
**30 May 2007**: the Public Construction Commission's 530 plan, above.
**3 December 2008**: a second forced clearance.
Source: e-info.org.tw, as above. SECONDARY. Not independently corroborated
against a primary government or news-agency record in this pass beyond the
MOC page's confirmation of the 530 decision itself.

**The CK570F contract, its 2008 termination, and the retender as CK570J** —
this part of the story is well documented and does *not* have the date
conflict the lead flagged:

**"2008年1月2日，CK570F區段標廠商工信工程因樂生案本工程停工達183天，依據合約
規定辦理終止契約"** — the original contractor, 工信工程, terminated its own
contract on 2 January 2008 after work had been suspended 183 days over the
Losheng case. The section was re-tendered as **CK570J** in **June 2008**,
won by **大陸工程**, which began work **26 November 2008**.
Source: zh.wikipedia, 新莊機廠, https://zh.wikipedia.org/zh-tw/新莊機廠,
fetched 12 Aug 2026. SECONDARY, but this specific 2008 termination/retender
sequence is not the part of the story the lead flagged as conflicted — see
next entry.

### The lead's flagged CK570F date conflict, chased and not resolved

The lead file flagged a conflict between **21 May 2002** and **19 April
2004** for "the CK570F contract award." Chasing this to its source
(tahr.org.tw, the origin of both figures) makes the problem worse, not
better, than the lead described it: **both dates are on the same page**, and
they are not offered as alternatives for the same event — they are used for
two different-sounding steps that, read in the order given, are
**chronologically backwards**:

- **"2002/5/21簽約"** — captioned by the source itself as the date the depot
  construction contract was **signed** (機廠工程合約簽訂日期).
- **"2002/6/20舉行開工儀式"** — the groundbreaking ceremony, a month later,
  consistent with a May signing.
- **"由工信工程公司於2004/4/19以新臺幣參拾億肆仟捌佰萬元整得標CK570F區段標工程"**
  — 工信工程 **won the bid** (得標) for the CK570F contract on **19 April
  2004**, for NT$3.048 billion (參拾億肆仟捌佰萬元 = NT$3,048,000,000).

A contract cannot be signed in 2002 and its tender won in 2004 for the same
award. Source: 台灣人權促進會 (TAHR), https://www.tahr.org.tw/news/602, fetched
12 Aug 2026, quotes verbatim. SECONDARY (a campaign organisation's own
published account, not a procurement record). **No DORTS primary page giving
a CK570F signing or award date was found in this pass** — DORTS's own
Xinzhuang-line page (fetched above) states the earliest *main-works* contract
as CK570D (29 June 2001) and does not separately date CK570F's award.
zh.wikipedia's 新莊機廠 article, also fetched directly above, documents the
2008 termination and retender in detail but likewise gives no 2002 or 2004
award date for the original CK570F contract. **This is recorded as
genuinely unresolved, not settled**: either TAHR's page conflates two
different contracts or milestones, or one of its two dates is a
transcription error, and nothing else found in this pass says which. See
"Stated gaps."

### Luzhou Depot 蘆洲機廠

**"蘆洲機廠位於蘆洲線末端，北臨淡水河堤防，南側為水湳溝排水幹線，西接蘆洲抽水站，
東側為計畫道路，基地全長約800公尺，最寬處約280公尺，佔地面積約16.8公頃。"**

Facilities listed on the same page: train wash (列車清洗場), entry/exit
lines (進出場線), a maintenance workshop (維修工廠), a civil/track workshop
(土木/軌道工廠), a test track (測試軌), outdoor stabling tracks (室外儲車軌),
a storage yard (儲車區), a perimeter road, parking, the main substation/power
distribution room, an administration/training centre and security post, and a
sewage-treatment plant.
Source: DORTS 中和新蘆線 (蘆洲線分頁), as above. PRIMARY. High confidence.
**This resolves the lead file's own note that "everything else TBC" for this
depot** — area, dimensions and functions are now sourced.

zh.wikipedia separately gives the depot's **grade as "準五級機廠"**
(quasi-Level-5), reporting that it was originally planned as Level 3, raised
to Level 4, then to quasi-Level-5 specifically to absorb maintenance load
that Xinzhuang Depot could no longer carry after its footprint was reduced
for the Losheng case — and states a widest-point figure of **300 m**, not
DORTS's 280 m (see Conflicts). It also gives an address (環堤大道698號),
completion in September 2010, entry into service with the Luzhou line's 3
November 2010 opening, and a fleet of "33列共198輛" of C371 numbered
401/402–465/466.
Source: zh.wikipedia, 蘆洲機廠, https://zh.wikipedia.org/zh-tw/蘆洲機廠,
fetched 12 Aug 2026. SECONDARY.

### How long the line is — four figures, not in conflict once labelled

- **31.5 km, 26 stations** — the sum of the three component projects' own
  DORTS-published lengths (5.4 + 19.7 + 6.4 = 31.5) and station counts
  (reconciled above to 26 once Guting's separate accounting is understood).
  This is also the figure zh.wikipedia's infobox gives outright
  ("路線長度：31.5公里（19.6英里）", "車站數目：26"). Source: DORTS (component
  figures, PRIMARY) and zh.wikipedia (infobox total, SECONDARY, matches the
  DORTS sum).
- **24.11 km** — TDX `CumulativeDistance` for route **O-1**, Nanshijiao to
  Huilong, the full Xinzhuang-branch service as actually run.
- **18.41 km** — TDX `CumulativeDistance` for route **O-2**, Nanshijiao to
  Luzhou, the full Luzhou-branch service as actually run.
  Source for both: `data/tdx/TRTC/station-of-route.json` (committed).
  PRIMARY.
- **≈30.1 km** — this file's own arithmetic on the TDX chainages, not a
  figure any source states directly: the two branch lengths share the trunk
  from Nanshijiao (O01) to Daqiaotou (O12), whose chainage is **12.40 km**
  (`data/tdx/TRTC/station.json`, O12). Distinct trackage is therefore
  12.40 (trunk) + (24.11 − 12.40 = 11.71, Xinzhuang arm) + (18.41 − 12.40 =
  6.01, Luzhou arm) ≈ **30.12 km** of unique revenue railway. This is offered
  as a check, not a headline figure — it is this file's own derivation from
  committed data, not an independently published number, and depot leads and
  any non-revenue track are not part of the TDX chainage in the first place,
  so it should not be read as directly comparable to Wenhu-line's
  "untrimmed alignment" figure.

None of these four figures is wrong; they measure the whole built network
(31.5 km), one branch's revenue run (24.11 km or 18.41 km), or this file's
own de-duplicated total of distinct track (≈30.1 km). Publish all, pick
none — the pattern this project's Wenhu-line page already established for
exactly this kind of figure.

---

## Conflicts

Every value found, with what each appears to measure. Nothing here has been
averaged, or had one reading discarded.

1. **Luzhou Depot's widest point.**
   - **"最寬處約280公尺"** — DORTS 中和新蘆線 (蘆洲線分頁). PRIMARY.
   - **"最寬處約300公尺"** — zh.wikipedia, 蘆洲機廠. SECONDARY.
   Not reconciled in this pass; both describe the same depot's maximum width.

2. **Zhonghe Depot's area, and whether it is underground.**
   - **"佔地約1.47公頃(包括捷運南勢角車站)"** — DORTS 中和新蘆線 (中和線分頁).
     PRIMARY. No statement in this DORTS text about the depot being
     underground.
   - **"約1.1公頃"**, and described as underground at the fourth basement
     level of a joint-development building with only six stabling tracks —
     zh.wikipedia, 中和機廠, https://zh.wikipedia.org/zh-tw/中和機廠, fetched
     12 Aug 2026. SECONDARY.
   These are not obviously the same measurement (DORTS's figure explicitly
   includes the station footprint; zh.wikipedia's may or may not). Neither
   the area difference nor the "underground" description is confirmed
   against DORTS in this pass.

3. **Xinzhuang Depot's general area figure vs its original/reduced figures.**
   Both sentences are on the same DORTS page:
   - **"佔地約17.5公頃"** (general facilities summary).
   - **"原始基地面積約17.4公頃，配合樂生療養院保存案，基地面積縮減為13.9公頃"**
     (site-history sentence: original area, then reduced area).
   Source for both: DORTS 中和新蘆線 (新莊線分頁). PRIMARY. Published as
   found; the 17.4/17.5 discrepancy is a 0.1-hectare inconsistency within a
   single DORTS page, not resolved here.

4. **Xinzhuang Depot's commissioning date.**
   - **"110年1月4日啟用營運"** (4 January 2021, start of operation) — DORTS
     中和新蘆線 (新莊線分頁). PRIMARY.
   - **"2021年1月14日：獲臺北市政府同意開始營運"** (14 January 2021, Taipei
     City Government's approval to begin operations) — zh.wikipedia,
     新莊機廠. SECONDARY.
   These may describe two different administrative steps (an internal "start
   of operation" date versus a city-government sign-off ten days later), but
   no source found states that explicitly — published as two dates, not
   reconciled.

5. **The 530 plan's preservation count, three ways.**
   - **"原地保留39棟建物，拆除6棟，9棟建物…重建"** — 39 in place, 6 demolished,
     9 rebuilt — 文化部文化資產局 (Ministry of Culture), MOC's own record of
     the Executive Yuan's decision. PRIMARY.
   - **"保留40棟、拆遷重組9棟"** — 40 preserved, 9 relocated/rebuilt —
     焦點事件's characterisation of the same 530 decision. SECONDARY.
   - **"實際上只保留28棟"** — campaigners' (青年樂生聯盟's) count of what the
     plan actually preserved once implemented, reported by 焦點事件.
     SECONDARY.
   MOC's 39/6/9 and 焦點事件's "40 preserved" do not match exactly either
   (39 ≠ 40), and neither matches the campaigners' subsequent count of 28
   actually preserved. All three published; none picked.

6. **CK570F contract dates** — see "The lead's flagged CK570F date conflict,
   chased and not resolved" above. Two dates (21 May 2002, 19 April 2004),
   both on the same secondary source, captioned as two different kinds of
   event (signing vs bid-won) in an order that cannot both be literally true.
   Not resolved.

7. **Line length** — see "How long the line is" above: 31.5 km (whole
   network, DORTS component sum), 24.11 km and 18.41 km (TDX per-branch
   operating lengths), ≈30.1 km (this file's own de-duplicated total). All
   published; none is "the" length.

---

## Incoming lead transfer — `deep-research-report(2).md` (2026-08-15)

> The external report is retained below as an unverified lead appendix. Its
> “Confirmed” labels are not accepted as verification. Only the independent
> sample checks recorded here were promoted to established evidence.

### Independent sample checks

**Claim — The O line combines the Zhonghe, Xinzhuang and Luzhou components and is named O Zhonghe–Xinlu Line.** Independently checked: the full DORTS page contains both the component description and the route-number/name sentence.

- **Source title:** *Zhonghe–Xinlu Line*
- **titleOriginal:** `中和新蘆線`
- **Publisher:** `臺北市政府捷運工程局`
- **URL:** <https://www.dorts.gov.taipei/cp.aspx?n=122c012a85c41404&s=33245A586D747A2C>
- **Archive snapshot:** not captured
- **kind:** primary
- **Confidence:** High — current DORTS project page, exact text read on 2026-08-15
- **Original-language sentence:** `臺北捷運橘線路網，包括初期路網的中和線及後續路網的新莊線與蘆洲支線` and `本路線編號名稱為「O 中和新蘆線」`.

**Claim — DORTS gives the Zhonghe component as approximately 5.4 km and four stations.** Independently checked: the full component page contains the quoted engineering figures.

- **Source title:** *Zhonghe–Xinlu Line — Zhonghe Line route description*
- **titleOriginal:** `中和新蘆線－中和線路線說明`
- **Publisher:** `臺北市政府捷運工程局`
- **URL:** <https://www.dorts.gov.taipei/cp.aspx?n=122c012a85c41404>
- **Archive snapshot:** not captured
- **kind:** primary
- **Confidence:** High — current DORTS component page, exact text read on 2026-08-15
- **Original-language sentence:** `全長約5.4公里，設4座車站，全線以地下方式建造`.

### Remaining unverified lead material

The appendix preserves the report’s component dimensions, openings, Losheng material, station-number discussion and source list as leads only. Its Xinzhuang Depot date conflict (2021-01-04 versus 2021-01-14) and the 55-versus-54 Losheng building count are retained as conflicts; no value is selected. Aggregate O-line length and passenger-station count remain TBC.

## Independent full-page verification — 23 August 2026

The following primary pages were fetched in full on 23 August 2026 and the
claims promoted into the content page were checked against their rendered
text, not a search result or lead appendix:

- DORTS, “中和新蘆線”: https://www.dorts.gov.taipei/cp.aspx?n=122C012A85C41404
- DORTS, “新莊線路線說明”: https://www.dorts.gov.taipei/cp.aspx?n=122C012A85C41404&s=33245A586D747A2C
- DORTS, “蘆洲線路線說明”: https://www.dorts.gov.taipei/cp.aspx?n=122C012A85C41404&s=3843E83F882E79FD
- DORTS, fleet FAQ: https://www.dorts.gov.taipei/News_Content.aspx?n=2A66A485FACB0D5B&s=C8602F8588914E91
- TRTC, “路線及班距”: https://www.metro.taipei/cp.aspx?n=EAD981369A065968&s=E153D917FDC2AC69
- Bureau of Cultural Heritage, “樂生療養院”: https://twh.boch.gov.tw/taiwan/intro.aspx?id=14&lang=zh_tw

These fetches confirm the project boundaries, station-count caveat at Guting,
opening sequence, branch headways and journey times, original procurement
counts, and the Losheng preservation figures already recorded above. No
previously published line claim was contradicted by these full-page checks.

## Checked and failed


- **ROC-year mis-conversion on the first Luzhou-line fetch** — checked 12 Aug
  2026. An initial AI-summarised fetch of the Luzhou-line tab reported the
  opening date as "November 3, 1999," converting 民國99年 to "1999" instead
  of 2010. A second, narrower fetch that explicitly asked for un-converted
  ROC numerals returned "99年9月4日初勘、99年10月16日履勘、99年11月3日通車營運"
  verbatim, which is 2010, matching the Xinzhuang line's Taipei-section
  dates exactly. The wrong figure was not published; recorded here so the
  same mis-conversion is not repeated by re-summarising this page casually.
- **web.archive.org snapshots** — attempted 12 Aug 2026 for the DORTS index
  page (both the save endpoint and reading an existing capture). Both
  requests were blocked by this session's fetch tool ("unable to fetch from
  web.archive.org"). No `snapshot:` URLs are recorded in this file's sources
  as a result; this is a tooling limitation in this pass, not a statement
  that no archive exists.
- **Explanation for the 5th budget revision's decrease** — searched
  (「中和新蘆線 第五次修正計畫 總經費 減少 原因」) 12 Aug 2026. Found only
  restatements of the same two figures (167.69bn → 161.19bn); no source
  explaining the decrease. Not speculated on the content page; left as a
  stated gap.
- **CK570F original award date, sought directly from DORTS or a procurement
  record** — searched 12 Aug 2026 by contract number and contractor name; no
  DORTS page or independent news report with the original signing/tender
  date was found, only the 2008 termination and CK570J retender. See
  "Stated gaps."
- **metro.taipei's own page for a stated total length/station count** —
  fetched 12 Aug 2026 (the same page used for headways). It does not contain
  a total-length or total-station-count sentence; the 31.5 km/26-station
  figure used on the content page rests on DORTS's three component figures
  summed, corroborated by zh.wikipedia's infobox, not on a single
  metro.taipei statement.
- **Daily ridership** — searched 12 Aug 2026 (「中和新蘆線 每日運量」 and TRTC's
  own statistics index). Nothing found gives a ridership figure specific to
  this line, by branch or by whole line; TRTC's published statistics are
  network-wide or per-station, not per-line. Not asserted on the content
  page.
- **Incident history** — searched 12 Aug 2026 for a service-disruption record
  specific to this line (major fires, derailments, signal failures). Nothing
  found beyond routine, undated delay notices with no lasting record. Not
  asserted on the content page.

---

## Contradicts the existing lead file

`docs/research/rail/metro/lines/zhonghe-xinlu-line.md` v1.0 (6 August 2026) is this
project's own lead file for this subject. Checked against primary sources
here, it was:

- **Right, and now independently confirmed**, on: the Zhonghe-line opening
  dates and 5.4 km/4-station figures; the Xinzhuang and Luzhou 初勘/履勘/通車
  dates for the sections it did assert; the budget figures and 2019
  revision date; the contract structure (CK570A/B/G/H, CK570C/D/E/F/J,
  IKTX02, CK570D as earliest main works); the Zhonghe Depot description and
  its "因用地面積之限制" reasoning, quoted verbatim and now re-verified; the
  Xinzhuang Depot Losheng-adjustment quote, verbatim and now re-verified;
  the MOC 39/6/9 figures; the campaigners' 28-building count.
- **Correctly flagged as unconfirmed, and now confirmed**: the Luzhou line's
  opening date. The lead guessed it "almost certainly" matched the Xinzhuang
  Taipei-section date and said to verify separately. It does match, and
  DORTS's own Luzhou-line tab states it independently rather than requiring
  inference from the Xinzhuang tab.
- **Imprecise on the Y-junction's location.** The lead states the fork is
  "at 大橋頭 Daqiaotou" (O12). DORTS's own Luzhou-line route description
  places the physical track switch north of Taipei Bridge (O13), one stop
  further than Daqiaotou. See "The three component projects and their
  boundaries" above.
- **Correctly flagged as unresolved, and still unresolved after being
  chased**: the CK570F contract-date conflict. The lead described it as "one
  source gives X, another gives Y" and asked for it to be resolved before
  publishing. Chasing it to its actual source (tahr.org.tw) shows both dates
  come from the *same* page, describing what should be sequential steps
  (signing, then tender-won) in reverse chronological order — a more
  specific and, if anything, harder problem than the lead's framing
  suggested. No source found in this pass resolves it.
- **Understated on Luzhou Depot.** The lead said "everything else TBC" for
  this depot. DORTS's own route page gives area, dimensions, boundary
  landmarks and a full facilities list; that was reachable with one more
  fetch. See "Luzhou Depot" above.
- **Missing the Zhonghe-line station-count explanation.** The lead's own
  station table lists O01–O05 as if without comment. It does not explain why
  DORTS's Zhonghe-line prose says "4 stations" while listing five — the
  Guting exception ("本站工程併入捷運新店線辦理") is new material in this
  file, not carried over from the lead.
- **The O03/O04 spelling worry does not need signage-checking.** Per this
  run's brief, the site's committed TDX data (`永安市場`/Yongan Market,
  `頂溪`/Dingxi) is the answer to that question for this site's purposes, not
  a station-signage photograph. No discrepancy was found between the lead's
  table and the committed TDX data.

---

## Stated gaps

- **CK570F's original award date** — 21 May 2002 vs 19 April 2004, both on
  the same secondary source (tahr.org.tw), describing what should be
  sequential events in the wrong order. A DORTS procurement record, a
  Government e-Procurement (政府採購公報) entry, or a contemporaneous 2002/2004
  news report naming the contract explicitly would settle this.
- **Why the 5th revised budget (2019) is lower than the original (1998)** —
  no source found explains it. DORTS's own page states only the two
  endpoints. A public-works audit report, a Legislative/City Council budget
  review, or DORTS's own itemised revision history (if published) would
  settle it.
- **Xinzhuang Depot's area: 17.4 vs 17.5 hectares**, both DORTS's own
  figures on one page — not chased further; a site-plan or land-registry
  figure would settle it.
- **Zhonghe Depot's area: 1.47 vs 1.1 hectares**, and whether it is
  genuinely underground with six stabling tracks as zh.wikipedia states —
  DORTS's own page does not mention "underground" at all for this depot;
  a site plan or a direct DORTS statement on the depot's levels would settle
  it.
- **Luzhou Depot's widest point: 280 m vs 300 m** — a site plan would settle
  it.
- **Daily ridership, by branch or by line** — not chased in this pass.
- **Incident history** — not chased in this pass; nothing gathered.
- **The C371 fleet's current in-service totals**, reconciled against the
  original CC361/CK371/CL601 procurement counts (8+20+4 = 32 trains) and
  zh.wikipedia's separate claim of 33 trains at Luzhou depot alone — left to
  the C371 rolling-stock page, not re-derived here.
- **Snapshot/archive URLs for the DORTS and zh.wikipedia pages cited here** —
  web.archive.org was unreachable from this session's tools; a future pass
  with working archive access should capture them.


---

## Imported external lead appendix — deep-research-report(2).md

> Preserved from an external lead report on 2026-08-15. This appendix is not a source. Every claim, URL, source classification, confidence label and status in it remains unverified unless independently promoted in the transfer record above.
pm run research intentionally does not parse this demoted appendix as a corpus Checked and failed section.

> **Research file — leads, not sources.** Every claim here must be
> verified against the primary source before publication.

### Zhonghe–Xinlu Line (中和新蘆線, O)

#### What is established

**Claim — The official “O Zhonghe–Xinlu Line” is an operating-line identity assembled from the Zhonghe Line, Xinzhuang Line and Luzhou branch.**

**State (external lead; unverified):** Confirmed.

The Taipei City Department of Rapid Transit Systems describes the Orange-line network as the initial-network Zhonghe Line plus the later Xinzhuang Line and Luzhou branch, and explicitly gives the route-number/name as “O 中和新蘆線”. For reference-site wording, it is therefore safer to distinguish the **operating line, O Zhonghe–Xinlu Line**, from its three historical/construction components rather than treating “Zhonghe–Xinlu” as the original project name of one indivisible construction contract.

**Source title (English, research translation):** *Zhonghe–Xinlu Line*
**Original-language title:** `中和新蘆線`
**Publisher:** 臺北市政府捷運工程局 (Department of Rapid Transit Systems, Taipei City Government; DORTS)
**URL:** https://www.dorts.gov.taipei/cp.aspx?n=122c012a85c41404&s=33245A586D747A2C
**Class:** PRIMARY
**Confidence:** High
**Original-language sentence:** `臺北捷運橘線路網，包括初期路網的中和線及後續路網的新莊線與蘆洲支線。`
**Original-language sentence:** `配合路線編號系統，本路線編號名稱為「O 中和新蘆線」。`


**Claim — DORTS publishes separate engineering dimensions for the three components: Zhonghe about 5.4 km / 4 stations; Xinzhuang about 19.7 km / 16 stations; Luzhou about 6.4 km / 5 stations. All three are described as underground construction.**

**State (external lead; unverified):** Confirmed, but these are **component engineering counts**, not a safely summable O-line station total.

The Zhonghe figure requires particular care: DORTS says “4 stations” in its engineering description even though Guting is part of the present O-line passenger sequence and appears in the line's station material. A reference article should therefore not simply add 4 + 16 + 5 and call the result the number of passenger stations; the construction packages and shared/interchange-station treatment are not identical to an operating-line count.

**Source A title (English, research translation):** *Zhonghe–Xinlu Line — Zhonghe Line route description*
**Original-language title:** `中和新蘆線－中和線路線說明`
**Publisher:** 臺北市政府捷運工程局
**URL:** https://www.dorts.gov.taipei/cp.aspx?n=122c012a85c41404
**Class:** PRIMARY
**Confidence:** High
**Original-language sentence:** `全長約5.4公里，設4座車站，全線以地下方式建造，為鋼軌鋼輪高運量系統，設有1座機廠。`

**Source B title (English, research translation):** *Zhonghe–Xinlu Line — Xinzhuang Line route description*
**Original-language title:** `中和新蘆線－新莊線路線說明`
**Publisher:** 臺北市政府捷運工程局
**URL:** https://www.dorts.gov.taipei/cp.aspx?n=122c012a85c41404&s=33245A586D747A2C
**Class:** PRIMARY
**Confidence:** High
**Original-language sentence:** `全長約19.7公里，設16座車站，全線採地下方式建造，採鋼軌鋼輪高運量系統，設有1座新莊機廠。`

**Source C title (English, research translation):** *Zhonghe–Xinlu Line — Luzhou Line route description*
**Original-language title:** `中和新蘆線－蘆洲線路線說明`
**Publisher:** 臺北市政府捷運工程局
**URL:** https://www.dorts.gov.taipei/cp.aspx?n=122c012a85c41404&s=3843E83F882E79FD
**Class:** PRIMARY
**Confidence:** High
**Original-language sentence:** `全長約6.4公里，設5座車站，全線採地下方式建造，另設有1座機廠。`


**Claim — The physical Y-fork is not at Daqiaotou station itself. The Luzhou branch diverges from the Xinzhuang alignment under/at the Taipei Bridge corridor, on the Sanchong side; Daqiaotou is the last passenger station common to both present services.**

**State (external lead; unverified):** Confirmed.

DORTS gives unusually precise wording for the junction: the Luzhou Line branches from the Xinzhuang Line beneath Taipei Bridge, with the turnout junction on the northwest side of Taipei Bridge around the intersection of Sanhe Road Section 1 and Huanhe North Road in Sanchong. Taipei Metro separately defines the **overlapping operating section** as Daqiaotou–Nanshijiao. These facts should not be collapsed into the common shorthand “the line forks at Daqiaotou”: Daqiaotou is the last common station, while the actual turnout is farther west.

**Source A title (English, research translation):** *Zhonghe–Xinlu Line — Luzhou Line route description*
**Original-language title:** `中和新蘆線－蘆洲線路線說明`
**Publisher:** 臺北市政府捷運工程局
**URL:** https://www.dorts.gov.taipei/cp.aspx?n=122c012a85c41404&s=3843E83F882E79FD
**Class:** PRIMARY
**Confidence:** High
**Original-language sentence:** `蘆洲線於臺北大橋下方與新莊線分叉，屬鋼軌鋼輪高運量捷運系統。`
**Original-language sentence:** `東起臺北大橋西北側三重區三和路一段與環河北路交叉口之捷運新莊線道岔交會處。`

**Source B title (English, research translation):** *Routes and Headways*
**Original-language title:** `路線及班距`
**Publisher:** 臺北大眾捷運股份有限公司 (Taipei Rapid Transit Corporation)
**URL:** https://www.metro.taipei/cp.aspx?n=ead981369a065968&s=E153D917FDC2AC69
**Class:** PRIMARY
**Confidence:** High
**Original-language sentence:** `營運模式：〖迴龍－南勢角〗、〖蘆洲－南勢角〗`
**Original-language sentence:** `平均班距（重疊區間：大橋頭－南勢角）`


**Claim — Taipei Metro's currently published O-line operating pattern is two interleaved through services: Huilong–Nanshijiao and Luzhou–Nanshijiao.**

**State (external lead; unverified):** Confirmed as the operator's currently published pattern.

The same operator page says the common Daqiaotou–Nanshijiao section receives the combined service. It publishes peak headways of about six minutes on each branch and about three minutes on the overlap; because the page itself carries an older data-update date, those numerical headways should be rechecked immediately before publication even though the page remains the operator's live route/headway page.

**Source title (English, research translation):** *Routes and Headways*
**Original-language title:** `路線及班距`
**Publisher:** 臺北大眾捷運股份有限公司
**URL:** https://www.metro.taipei/cp.aspx?n=ead981369a065968&s=E153D917FDC2AC69
**Class:** PRIMARY
**Confidence:** High for the published service pattern; Medium for treating the numerical headways as a 2026 timetable without further operator confirmation
**Original-language sentence:** `尖峰時段（07:00～09:00，17:00～19:30）：約6分鐘，重疊區間約3分鐘。`


**Claim — The opening sequence was staged over many years: the Zhonghe Line opened on 24 December 1998; the Luzhou Line and Xinzhuang city section between Luzhou and Zhongxiao Xinsheng opened on 3 November 2010; the Xinzhuang route reached Fu Jen University on 5 January 2012; Dongmen opened and connected the northern lines to Zhonghe on 30 September 2012; the final Fu Jen University–Huilong extension opened on 29 June 2013.**

**State (external lead; unverified):** Confirmed.

The dates are revenue-opening dates, not preliminary- or final-inspection dates. DORTS lists those inspection stages separately.

**Source A title (English, research translation):** *Zhonghe–Xinlu Line — Zhonghe Line route description*
**Original-language title:** `中和新蘆線－中和線路線說明`
**Publisher:** 臺北市政府捷運工程局
**URL:** https://www.dorts.gov.taipei/cp.aspx?n=122c012a85c41404
**Class:** PRIMARY
**Confidence:** High
**Original-language sentence:** `中和線於87年11月6日初勘、87年12月8日履勘、於87年12月24日通車營運。`

**Source B title (English, research translation):** *Zhonghe–Xinlu Line — Luzhou Line route description*
**Original-language title:** `中和新蘆線－蘆洲線路線說明`
**Publisher:** 臺北市政府捷運工程局
**URL:** https://www.dorts.gov.taipei/cp.aspx?n=122c012a85c41404&s=3843E83F882E79FD
**Class:** PRIMARY
**Confidence:** High
**Original-language sentence:** `蘆洲線配合橘線第一階段通車計畫，與新莊線市區段，即蘆洲站至忠孝新生站間路段，於99年11月3日通車營運。`

**Source C title (English, research translation):** *Zhonghe–Xinlu Line — Xinzhuang Line route description*
**Original-language title:** `中和新蘆線－新莊線路線說明`
**Publisher:** 臺北市政府捷運工程局
**URL:** https://www.dorts.gov.taipei/cp.aspx?n=122c012a85c41404&s=33245A586D747A2C
**Class:** PRIMARY
**Confidence:** High
**Original-language sentence:** `大橋頭站至輔大站於100年11月26日初勘、100年12月17日履勘、於101年1月5日通車營運。`
**Original-language sentence:** `輔大站至迴龍站則於102年5月24日初勘、102年6月14日履勘、於102年6月29日通車營運。`


**Claim — The September 2012 Dongmen opening is the key operating-history breakpoint: it ended Zhonghe's old north–south through-running arrangement and produced the recognizable branched Orange-line service.**

**State (external lead; unverified):** Confirmed.

Before Dongmen, the Zhonghe Line had operated through with the Xindian/Tamsui corridor. DORTS states that when Dongmen opened in 2012, Zhonghe was joined operationally to Xinzhuang and Luzhou. A DORTS technical article says the initial Orange-line through patterns on 30 September 2012 were Nanshijiao–Luzhou and Nanshijiao–Fu Jen University; when Huilong opened in June 2013 the second service became Nanshijiao–Huilong.

**Source A title (English, research translation):** *Zhonghe–Xinlu Line — Zhonghe Line route description*
**Original-language title:** `中和新蘆線－中和線路線說明`
**Publisher:** 臺北市政府捷運工程局
**URL:** https://www.dorts.gov.taipei/cp.aspx?n=122c012a85c41404
**Class:** PRIMARY
**Confidence:** High
**Original-language sentence:** `中和線於87年12月24日通車營運，先與新店線及淡水線跨線營運服務。`

**Source B title (English, research translation):** *Songshan Line Route Planning and Operating Pattern*
**Original-language title:** `松山線路線規劃與營運模式`
**Publisher:** 臺北市政府捷運工程局, 《捷運技術》第52期
**URL:** https://ebook.dorts.gov.taipei/JRTST/ebook/no52/files/basic-html/page12.html
**Class:** PRIMARY
**Confidence:** High
**Original-language sentence:** `至101年9月30日東門站通車之捷運分流，中和新蘆線（橘線）貫通營運，行車路線為「南勢角－蘆洲」與「南勢角－輔大」。`

**Source C title (English, research translation):** *Operating Pattern after the Taipei Metro Xinyi Line Opening*
**Original-language title:** `臺北捷運信義線通車後之營運模式`
**Publisher:** 臺北市政府捷運工程局, 《捷運技術》第51期
**URL:** https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page8.html
**Class:** PRIMARY
**Confidence:** High
**Original-language sentence:** `102年6月29日新莊線迴龍站通車後，中和新蘆線營運模式為「南勢角－蘆洲」及「南勢角－迴龍」。`


**Claim — The Xinzhuang and Luzhou projects were approved together; DORTS gives 17 September 1994 for Executive Yuan approval of the route-planning report and 28 January 1995 for EPA acceptance of the final EIA report.**

**State (external lead; unverified):** Confirmed.

DORTS also gives two different whole-project approved-budget snapshots: NT$167.69 billion for the financial plan approved in 1998, and NT$161.19 billion for the fifth revised plan approved in 2019. These are different approval states and should not be confused with the Control Yuan's later estimate of **additional depot-related cost** discussed below.

**Source title (English, research translation):** *Zhonghe–Xinlu Line — Luzhou Line route description*
**Original-language title:** `中和新蘆線－蘆洲線路線說明`
**Publisher:** 臺北市政府捷運工程局
**URL:** https://www.dorts.gov.taipei/cp.aspx?n=122c012a85c41404&s=3843E83F882E79FD
**Class:** PRIMARY
**Confidence:** High
**Original-language sentence:** `蘆洲支線與新莊線併同一計畫報核，路線規劃報告書於83年9月17日奉行政院核定。`
**Original-language sentence:** `第5次修正計畫於108年6月10日奉行政院核定，總經費1611.9億元。`


**Claim — The Losheng controversy is not merely a later objection to an otherwise fixed depot site: the Control Yuan found that the Xinzhuang depot had originally been planned in an agricultural area east of Fu Jen Catholic University before the site was shifted toward Losheng.**

**State (external lead; unverified):** Confirmed as the Control Yuan's documented reconstruction of the decision history.

The Control Yuan report records that the then Taipei County magistrate and Xinzhuang mayor pressed for another site; DORTS subsequently learned that Losheng was expected to close, and central-government coordination followed. The Executive Yuan's 17 September 1994 approval then fixed the Xinzhuang depot at the Losheng Sanatorium site.

**Source title (English, research translation):** *Investigation Report — Xinzhuang Depot / Losheng Sanatorium case*
**Original-language title:** `調查報告`
**Publisher:** 監察院 (Control Yuan)
**URL:** https://cybsbox.cy.gov.tw/CYBSBoxSSL/edoc/download/54483
**Class:** PRIMARY
**Confidence:** High
**Original-language sentence:** `台北捷運新莊線新莊機廠工址原規劃於輔仁大學東側農業區內。`
**Original-language sentence:** `行政院於同年9月17日同意新莊線及蘆洲支線規劃報告書，新莊機廠確定設於樂生療養院址。`


**Claim — The depot construction contract was let and work began in 2002 on a scheme premised on extensive removal of the old sanatorium; preservation demands then became a direct constraint on the project.**

**State (external lead; unverified):** Confirmed.

The Public Construction Commission's own retrospective says the original scheme would remove the area's buildings except for two to be reconstructed elsewhere. Its 2007 account also says construction was suspended from July 2004 amid petitions from residents and heritage-preservation groups.

**Source title (English, research translation):** *Losheng Preservation Plan: 39 Buildings Retained In Situ, 10 Selected for Off-site Reconstruction or Reassembly*
**Original-language title:** `樂生保留方案：原地保留39棟、10棟擇要異地重建或重組`
**Publisher:** 行政院公共工程委員會 (Public Construction Commission, Executive Yuan)
**URL:** https://www.pcc.gov.tw/content/index?eid=279&ltype=N&nn=C61062639C0CD29F&sms=21EF9CF82726C1BB
**Class:** PRIMARY
**Confidence:** High
**Original-language sentence:** `該機廠工程於91年開工，原計畫將拆除院區全數建物，僅保留其中兩棟建物異地重組。`


**Claim — Before the final 30 May 2007 compromise, government bodies had placed materially different preservation schemes on the table: a 41.6% scheme and a later “90%” scheme.**

**State (external lead; unverified):** Confirmed.

The Public Construction Commission says the Taipei County Government and Taipei DORTS proposed the 41.6% scheme, described as 20 buildings retained in situ and two rebuilt elsewhere, and submitted it for Executive Yuan record in April 2006. It says the Council for Cultural Affairs then proposed in February 2007 a “90%” scheme for the remaining buildings, described as 46 retained in place plus three rebuilt elsewhere. These percentages therefore describe **different proposed schemes**, not rival estimates of what was ultimately preserved.

**Source title (English, research translation):** *Losheng Preservation Plan: 39 Buildings Retained In Situ, 10 Selected for Off-site Reconstruction or Reassembly*
**Original-language title:** `樂生保留方案：原地保留39棟、10棟擇要異地重建或重組`
**Publisher:** 行政院公共工程委員會
**URL:** https://www.pcc.gov.tw/content/index?eid=279&ltype=N&nn=C61062639C0CD29F&sms=21EF9CF82726C1BB
**Class:** PRIMARY
**Confidence:** High
**Original-language sentence:** `台北縣政府及台北市政府捷運局遂提出保留41.6%方案，即原地保留20棟異地重建2棟。`
**Original-language sentence:** `96年2月文建會又提出保存院區剩餘建物90%方案，即原地保留46棟異地重建3棟。`


**Claim — The Public Construction Commission's 30 May 2007 “530 plan” called for 39 buildings retained in place, 10 selected for off-site reconstruction/reassembly, and six demolished.**

**State (external lead; unverified):** Confirmed from both the Commission's contemporary release and the later Control Yuan investigation.

The PCC explicitly framed its intervention under the principle `文化保存最多、捷運影響最小` (“maximum cultural preservation, minimum metro impact”). Its detailed contemporary release names ten buildings in the relocation/reconstruction category and says the six demolitions were the same six in the Council for Cultural Affairs proposal.

**Source A title (English, research translation):** *Losheng Preservation Plan: 39 Buildings Retained In Situ, 10 Selected for Off-site Reconstruction or Reassembly*
**Original-language title:** `樂生保留方案：原地保留39棟、10棟擇要異地重建或重組`
**Publisher:** 行政院公共工程委員會
**URL:** https://www.pcc.gov.tw/content/index?eid=279&ltype=N&nn=C61062639C0CD29F&sms=21EF9CF82726C1BB
**Class:** PRIMARY
**Confidence:** High
**Original-language sentence:** `技師公會提出原地保留39棟及建議……10棟建物納入園區整體規劃擇要重建，至於拆除6棟則與文建會原提出的方案相同。`

**Source B title (English, research translation):** *Investigation Report — Xinzhuang Depot / Losheng Sanatorium case*
**Original-language title:** `調查報告`
**Publisher:** 監察院
**URL:** https://cybsbox.cy.gov.tw/CYBSBoxSSL/edoc/download/54483
**Class:** PRIMARY
**Confidence:** High
**Original-language sentence:** `決定院區55棟建物中，原地保留39棟，擇要異地重組或重建10棟，拆除6棟。`


**Claim — The controversy involved sustained organized opposition and repeated confrontations, not solely administrative negotiation.**

**State (external lead; unverified):** Confirmed at the general level; specific crowd/police numbers remain secondary unless a police or government operations record is obtained.

The Control Yuan states that use of most of Losheng for the depot drew strong opposition from the Youth Alliance for Losheng, cultural/history groups, academics and others and led to repeated clashes. A contemporaneous Public Television report documents one later confrontation on 2 August 2011 during demolition/restart works, but its numerical estimates should remain attributed to PTS unless primary policing records are found.

**Source A title (English, research translation):** *Investigation Report — Xinzhuang Depot / Losheng Sanatorium case*
**Original-language title:** `調查報告`
**Publisher:** 監察院
**URL:** https://cybsbox.cy.gov.tw/CYBSBoxSSL/edoc/download/54483
**Class:** PRIMARY
**Confidence:** High
**Original-language sentence:** `致遭青年樂生聯盟、文史團體、專家學者及社會各界強力抗爭反對，數度暴發衝突事件。`

**Source B title (English, research translation):** *Students and Residents Defend Losheng; Police Remove Them by Force*
**Original-language title:** `學生.院民護樂生 優勢警力強抬離`
**Publisher:** 公共電視 / 公視新聞網 PNN (Public Television Service)
**URL:** https://news.pts.org.tw/article/63709
**Class:** SECONDARY
**Confidence:** Medium for event-specific numerical details; High that a confrontation occurred
**Original-language sentence:** `台北市捷運局上午到樂生院、展開第一階段的拆除作業，自救會和青年學生用鐵鍊相互綑綁、坐在木箱裡阻擋施工。`


**Claim — In 2012 the Control Yuan formally corrected New Taipei City Government, the then Department of Health, and Taipei DORTS over the Xinzhuang depot project, finding improper site selection, land-handover/resettlement failures and inadequate design review.**

**State (external lead; unverified):** Confirmed.

This is an institutional finding, not merely a press characterization. The correction was approved on 16 August 2012. The Control Yuan expressly attributed responsibility to all three bodies, albeit for different failures.

**Source title (English, research translation):** *Xinzhuang Depot Construction Delayed 64.5 Months; Control Yuan Corrects New Taipei City Government and Two Other Agencies*
**Original-language title:** `捷運新莊機廠施工延宕64.5個月 監察院糾正新北市政府等3機關`
**Publisher:** 監察院
**URL:** https://www.cy.gov.tw/News_Content.aspx?n=124&s=6148
**Class:** PRIMARY
**Confidence:** High
**Original-language sentence:** `臺北捷運新莊線新莊機廠選址不當，引發民間社團強力抗爭。`
**Original-language sentence:** `糾正新北市政府、衛生署、臺北市政府捷運工程局。`


**Claim — The Control Yuan's detailed 2012 accounting estimated approximately NT$8.5 billion of additional project cost associated with the depot/preservation/land-delay/slope issues.**

**State (external lead; unverified):** Confirmed as a **2012 Control Yuan estimate**, not an audited final out-turn cost.

The report breaks the approximately NT$8.5 billion into about NT$1.5 billion attributed to the PCC preservation scheme, NT$2.1 billion in price escalation associated with delayed land acquisition, about NT$3.7 billion in contractor claims associated with the delay, and about NT$1.2 billion for the long-term slope-safety scheme. Some of these components were estimates or then-unresolved claims; the figure must not be published as a final cash expenditure without later accounts.

**Source title (English, research translation):** *Investigation Report — Xinzhuang Depot / Losheng Sanatorium case*
**Original-language title:** `調查報告`
**Publisher:** 監察院
**URL:** https://cybsbox.cy.gov.tw/CYBSBoxSSL/edoc/download/54483
**Class:** PRIMARY
**Confidence:** High that this is what the 2012 report calculated; Medium if interpreted as final realized expenditure
**Original-language sentence:** `工程預算增加主要包含……三大部分，共計增加費用約85億元。`


**Claim — The detailed Control Yuan report calculated an 88-month aggregate extension of the depot completion schedule, made up of 64.5 months attributed to delayed construction-land acquisition, about 8.5 months attributed to the PCC preservation scheme, and about 15 months attributed to the long-term slope-safety scheme.**

**State (external lead; unverified):** Confirmed.

In that 2012 calculation, the planned depot completion moved from August 2009 to December 2016. December 2016 was still a forecast at the time, not the eventual opening date.

**Source title (English, research translation):** *Investigation Report — Xinzhuang Depot / Losheng Sanatorium case*
**Original-language title:** `調查報告`
**Publisher:** 監察院
**URL:** https://cybsbox.cy.gov.tw/CYBSBoxSSL/edoc/download/54483
**Class:** PRIMARY
**Confidence:** High
**Original-language sentence:** `因施工用地延遲取得、工程會樂生保存方案及邊坡長期安全方案三大方面，合計增加工期88個月。`
**Original-language sentence:** `因施工用地延遲取得，自93年7月15日至98年12月1日，前後延遲共約64.5個月。`


**Claim — The 2012 Control Yuan investigation regarded the depot site's geology and large cut slopes as a central engineering issue, based on project geotechnical reports describing the Xinzhuang fault and fault gouge at the site.**

**State (external lead; unverified):** Confirmed as the Control Yuan's finding based on the engineering reports it reviewed.

Do **not** turn this into the unsourced modern claim “the depot is on an active fault.” The report says the Xinzhuang fault passes the site and quotes older engineering characterization of it as a high-angle reverse fault. This research did not independently verify its status under the Geological Survey's current active-fault classification.

**Source title (English, research translation):** *Investigation Report — Xinzhuang Depot / Losheng Sanatorium case*
**Original-language title:** `調查報告`
**Publisher:** 監察院
**URL:** https://cybsbox.cy.gov.tw/CYBSBoxSSL/edoc/download/54483
**Class:** PRIMARY
**Confidence:** High for the Control Yuan finding; TBC for present-day national active-fault classification
**Original-language sentence:** `本工址有新莊斷層通過，新莊斷層為一高角度逆衝斷層。`
**Original-language sentence:** `以上報告均顯示樂生療養院區為新莊斷層所通過，地層中普遍有斷層泥分布。`


**Claim — Excavation was associated with cracking in parts of the retained Losheng area and newer sanatorium area, and the Control Yuan faulted DORTS for insufficient review of the risks of the roughly 40-metre-high cut slope.**

**State (external lead; unverified):** Confirmed.

The Control Yuan says buildings and paving were damaged/cracked and that work had to be stopped while reinforcement was reconsidered. A later DORTS technical paper likewise describes excavation disturbance of the fault-zone slope as producing lateral deformation and cracks in the retained Losheng area.

**Source A title (English, research translation):** *Investigation Report — Xinzhuang Depot / Losheng Sanatorium case*
**Original-language title:** `調查報告`
**Publisher:** 監察院
**URL:** https://cybsbox.cy.gov.tw/CYBSBoxSSL/edoc/download/54483
**Class:** PRIMARY
**Confidence:** High
**Original-language sentence:** `導致樂生療養院續住區與新院區部分建物及地坪裂損情事，工程也因此全面停工、重新檢討補強。`

**Source B title (English, research translation):** *Introduction and Application of the Xinzhuang Depot Automated Monitoring System*
**Original-language title:** `新莊機廠自動化監測系統之介紹及應用`
**Publisher:** 臺北市政府捷運工程局, 《捷運技術》第58期
**URL:** https://ebook.dorts.gov.taipei/JRTST/ebook/no58/files/basic-html/page154.html
**Class:** PRIMARY (project technical paper; project engineering authors)
**Confidence:** High for the paper's project-engineering account
**Original-language sentence:** `本基地北側斷層帶邊坡因施工開挖造成邊坡監測數值異常，並引致邊坡上方鄰近之醫療院區部分院舍產生龜裂情形。`


**Claim — Later monitoring reported a stable condition after mitigation; this does not contradict the earlier cracking.**

**State (external lead; unverified):** Confirmed as a later engineering-monitoring result.

A DORTS technical article says that after more than three years of automated safety monitoring, including typhoons and earthquakes, the monitored depot slopes and structures showed long-term stability; it also says monitoring would continue during depot operation. This describes the **post-mitigation condition**, not the condition during the 2010–2012 crisis.

**Source title (English, research translation):** *Introduction and Application of the Xinzhuang Depot Automated Monitoring System*
**Original-language title:** `新莊機廠自動化監測系統之介紹及應用`
**Publisher:** 臺北市政府捷運工程局, 《捷運技術》第58期
**URL:** https://ebook.dorts.gov.taipei/JRTST/ebook/no58/files/basic-html/page172.html
**Class:** PRIMARY
**Confidence:** High for what the monitoring paper reports
**Original-language sentence:** `各監測資料結果顯示新莊機廠邊坡與結構設施皆呈現長期穩定狀態。`


**Claim — DORTS says the Xinzhuang depot footprint was reduced in response to the Losheng preservation scheme: from an original base area of about 17.4 ha to 13.9 ha.**

**State (external lead; unverified):** Confirmed.

This is one of the clearest direct statements from the builder linking the preservation settlement to a concrete change in depot design.

**Source title (English, research translation):** *Zhonghe–Xinlu Line — Xinzhuang Line route description*
**Original-language title:** `中和新蘆線－新莊線路線說明`
**Publisher:** 臺北市政府捷運工程局
**URL:** https://www.dorts.gov.taipei/cp.aspx?n=122c012a85c41404&s=33245A586D747A2C
**Class:** PRIMARY
**Confidence:** High
**Original-language sentence:** `原始基地面積約17.4公頃，配合樂生療養院保存案，基地面積縮減為13.9公頃。`


**Claim — Losheng was formally entered by New Taipei City as both a cultural landscape and a historic building on 7 September 2009.**

**State (external lead; unverified):** Confirmed through the Ministry of Culture's Bureau of Cultural Heritage material.

The underlying National Cultural Heritage Database asset pages were located but their record bodies did not render through the research fetcher; the Bureau's separate Losheng heritage page does state the registration date and categories in readable full-page text.

**Source title (English, research translation):** *Losheng Sanatorium — Taiwan Potential World Heritage Site*
**Original-language title:** `樂生療養院－臺灣世界遺產潛力點`
**Publisher:** 文化部文化資產局 (Bureau of Cultural Heritage, Ministry of Culture)
**URL:** https://twh.boch.gov.tw/taiwan/intro.aspx?id=14&lang=zh_tw
**Class:** PRIMARY
**Confidence:** High
**Original-language sentence:** `該院業於2009年9月7日由新北市政府登錄為文化景觀與歷史建築。`


**Claim — The Losheng dispute continued after the main metro line and depot construction issues, shifting in part to the design of the sanatorium entrance and second pedestrian bridge.**

**State (external lead; unverified):** Confirmed.

In 2020, the Taipei High Administrative Court granted a provisional disposition requiring a temporary halt to implementation of the “Losheng Sanatorium Entrance Image” works at the entrance location until the associated environmental-impact-assessment case became final. This later dispute should not be conflated with the original 2000s dispute over whether the sanatorium would be demolished for the depot, although the court itself noted that the entrance works were tied to Xinlu-line right-of-way, funding and DORTS works.

**Source title (English, research translation):** *Press Release on Taipei High Administrative Court 2020 Quan No. 12 Provisional-Disposition Case*
**Original-language title:** `臺北高等行政法院109年度全字第12號聲請人國際愛地芽協會台灣分會等與相對人行政院環境保護署間聲請假處分事件新聞稿`
**Publisher:** 臺北高等行政法院 / 司法院
**URL:** https://www.judicial.gov.tw/tw/cp-1888-244314-0cd69-1.html
**Class:** PRIMARY
**Confidence:** High
**Original-language sentence:** `經審理結果裁定准予聲請。`
**Original-language sentence:** `於本院109年度訴字第618號環境影響評估事件確定前，暫時停止……「樂生療養院入口意象工程」之行政處分。`


**Claim — DORTS presently says the unresolved entrance-image works do not prevent operation of Xinzhuang Depot.**

**State (external lead; unverified):** Confirmed as DORTS's own currently published position, not as a determination of the current court docket.

The FAQ was updated on 31 July 2026. It says the entrance-image scheme is temporarily unable to proceed but that Xinzhuang Depot has entered operation and is unaffected. The same FAQ also describes the environmental case's appeal as still before the Supreme Administrative Court; that latter legal-status statement is **not treated as established here**, because an official judicial page indicating subsequent case material could not be opened during this research session. See “Checked and failed” and “Stated gaps.”

**Source title (English, research translation):** *DORTS Frequently Asked Questions — Losheng Entrance Image / Xinzhuang Depot*
**Original-language title:** `常見問答－樂生入口意象案`
**Publisher:** 臺北市政府捷運工程局
**URL:** https://www.dorts.gov.taipei/News_toggle.aspx?PageSize=200&n=2A66A485FACB0D5B&page=1&sms=87415A8B9CE81B16
**Class:** PRIMARY for DORTS's own operational position
**Confidence:** High for depot-operation statement; Low for using the FAQ as the final word on the judicial docket
**Original-language sentence:** `樂生入口意象案目前雖暫時無法執行，惟捷運新莊機廠現已納入營運，不受影響。`


#### Conflicts

**Conflict — Xinzhuang Depot opening date: 4 January 2021 versus 14 January 2021.**

**State:** Contradicted. Do not choose between them without a more specific commissioning/operation record.

**Value A: 4 January 2021 (110年1月4日).**

**Source title (English, research translation):** *Zhonghe–Xinlu Line — Xinzhuang Line route description*
**Original-language title:** `中和新蘆線－新莊線路線說明`
**Publisher:** 臺北市政府捷運工程局
**URL:** https://www.dorts.gov.taipei/cp.aspx?n=122c012a85c41404&s=33245A586D747A2C
**Class:** PRIMARY
**Confidence:** High that this page gives this value
**Original-language sentence:** `於109年10月25日初勘、109年12月23日履勘、於110年1月4日啟用營運。`

**Value B: 14 January 2021 (110年1月14日).**

**Source title (English, research translation):** *MRT Engineering Series, Refined Edition No. 17 — Taipei MRT Engineering Technical Document Management Practice*
**Original-language title:** `捷運工程叢書 精進版－17 臺北捷運工程技術文件管理實務`
**Publisher:** 臺北市政府捷運工程局
**URL:** https://ebook.dorts.gov.taipei/ebook/no17/files/basic-html/page24.html
**Class:** PRIMARY
**Confidence:** High that this handbook gives this value
**Original-language sentence:** `新莊機廠於110年1月14日啟用加入營運服務。`

**What each appears to measure:** Both texts use language meaning entry into/commencement of operational service, so there is no clear wording-based reason to treat them as different milestones. This is a genuine ten-day discrepancy in two DORTS publications.

**Publication value:** `TBC`.


**Conflict — The 30 May 2007 Losheng preservation-plan building count is 55 buildings in the PCC/Control Yuan record, but the Bureau of Cultural Heritage's later summary accounts for only 54.**

**State:** Contradicted.

**Value A: 55 buildings = 39 retained in situ + 10 selected for off-site reconstruction/reassembly + 6 demolished.**

**Source title (English, research translation):** *Losheng Preservation Plan: 39 Buildings Retained In Situ, 10 Selected for Off-site Reconstruction or Reassembly*
**Original-language title:** `樂生保留方案：原地保留39棟、10棟擇要異地重建或重組`
**Publisher:** 行政院公共工程委員會
**URL:** https://www.pcc.gov.tw/content/index?eid=279&ltype=N&nn=C61062639C0CD29F&sms=21EF9CF82726C1BB
**Class:** PRIMARY
**Confidence:** High
**Original-language sentence:** `技師公會提出原地保留39棟……10棟建物納入園區整體規劃擇要重建，至於拆除6棟則與文建會原提出的方案相同。`

**Corroborating source:**
**Source title (English, research translation):** *Investigation Report — Xinzhuang Depot / Losheng Sanatorium case*
**Original-language title:** `調查報告`
**Publisher:** 監察院
**URL:** https://cybsbox.cy.gov.tw/CYBSBoxSSL/edoc/download/54483
**Class:** PRIMARY
**Confidence:** High
**Original-language sentence:** `決定院區55棟建物中，原地保留39棟，擇要異地重組或重建10棟，拆除6棟。`

**Value B: 39 retained + 6 demolished + 9 “included in overall planning for reconstruction” = 54 buildings accounted for.**

**Source title (English, research translation):** *Losheng Sanatorium — Taiwan Potential World Heritage Site*
**Original-language title:** `樂生療養院－臺灣世界遺產潛力點`
**Publisher:** 文化部文化資產局
**URL:** https://twh.boch.gov.tw/taiwan/intro.aspx?id=14&lang=zh_tw
**Class:** PRIMARY
**Confidence:** High that the page gives these numbers; Low that its shorthand is a complete building inventory
**Original-language sentence:** `原地保留39棟建物，拆除6棟，9棟建物納入園區整體規劃進行則要重建。`

**What each appears to be measuring:** The PCC contemporary record explicitly names **10** buildings for the reconstruction/reassembly category and Control Yuan later reproduces 55 = 39 + 10 + 6. The heritage summary says nine, leaving one building unaccounted for if categories are directly comparable. A possible category distinction cannot be established from the heritage page itself.

**Publication value:** Use the PCC/Control Yuan formulation only after checking the original 530 meeting record or building schedule; otherwise state the discrepancy.


**Conflict — “64.5 months delayed” and “88 months delayed” both appear in Control Yuan material, but they are not the same measurement.**

**State (external lead; unverified):** Confirmed measurement conflict/ambiguity, substantially resolved by the detailed investigation report.

**Value A: 64.5 months.**

The Control Yuan press release characterizes the depot completion schedule as having been seriously delayed by 64.5 months.

**Source title (English, research translation):** *Xinzhuang Depot Construction Delayed 64.5 Months; Control Yuan Corrects New Taipei City Government and Two Other Agencies*
**Original-language title:** `捷運新莊機廠施工延宕64.5個月 監察院糾正新北市政府等3機關`
**Publisher:** 監察院
**URL:** https://www.cy.gov.tw/News_Content.aspx?n=124&s=6148
**Class:** PRIMARY
**Confidence:** High that the press release says this
**Original-language sentence:** `導致新莊機廠完工期程嚴重延宕64.5個月，驟增預算85億元。`

**Value B: 88 months total.**

The detailed report says **64.5 months** is specifically the land-acquisition delay. It then adds about **8.5 months** for the PCC Losheng-preservation scheme and **15 months** for the long-term slope-safety scheme, producing an **88-month aggregate schedule increase**.

**Source title (English, research translation):** *Investigation Report — Xinzhuang Depot / Losheng Sanatorium case*
**Original-language title:** `調查報告`
**Publisher:** 監察院
**URL:** https://cybsbox.cy.gov.tw/CYBSBoxSSL/edoc/download/54483
**Class:** PRIMARY
**Confidence:** High
**Original-language sentence:** `合計增加工期88個月，新莊機廠完工日期自98年8月延後至105年12月。`

**What each appears to measure:** 64.5 months = delayed availability of construction land; 88 months = report's combined schedule effect of land delay + preservation redesign + slope-safety scheme. A reference article should not describe the two figures as competing estimates of the same thing.


**Conflict — DORTS publishes three Xinzhuang Depot area figures: approximately 17.5 ha, approximately 17.4 ha, and 13.9 ha.**

**State (external lead; unverified):** Confirmed values; apparently different scope/plan-state rather than a simple factual contradiction.

**Value A: approximately 17.5 ha.**
The current route page's general depot description says `佔地約17.5公頃`.

**Value B: approximately 17.4 ha.**
The same page's preservation-specific paragraph calls this the `原始基地面積`.

**Value C: 13.9 ha.**
The same preservation-specific paragraph says the base was reduced to this size in conjunction with the Losheng preservation plan.

**Source title (English, research translation):** *Zhonghe–Xinlu Line — Xinzhuang Line route description*
**Original-language title:** `中和新蘆線－新莊線路線說明`
**Publisher:** 臺北市政府捷運工程局
**URL:** https://www.dorts.gov.taipei/cp.aspx?n=122c012a85c41404&s=33245A586D747A2C
**Class:** PRIMARY
**Confidence:** High that all three values are published there
**Original-language sentence:** `新莊機廠……佔地約17.5公頃。`
**Original-language sentence:** `原始基地面積約17.4公頃，配合樂生療養院保存案，基地面積縮減為13.9公頃。`

**What each appears to measure:** 17.4 ha is explicitly the pre-preservation/original base; 13.9 ha is explicitly the reduced preservation-era base. The 17.5-ha generic figure may reflect rounding or a different site-boundary convention, but the page does not explain it.

**Publication value:** Do not silently normalize 17.4 and 17.5. State 13.9 ha only when explicitly describing DORTS's preservation-adjusted base figure.


**Conflict — In 2007 the PCC described its compromise as pursuing preservation without schedule extension, but the 2012 Control Yuan later calculated about 8.5 months of additional construction time attributable to the PCC preservation scheme.**

**State (external lead; unverified):** Confirmed wording difference; not necessarily a like-for-like contradiction because the baselines differ.

**Position A — 2007 PCC framing.**

**Source title (English, research translation):** *Losheng Preservation Plan: 39 Buildings Retained In Situ, 10 Selected for Off-site Reconstruction or Reassembly*
**Original-language title:** `樂生保留方案：原地保留39棟、10棟擇要異地重建或重組`
**Publisher:** 行政院公共工程委員會
**URL:** https://www.pcc.gov.tw/content/index?eid=279&ltype=N&nn=C61062639C0CD29F&sms=21EF9CF82726C1BB
**Class:** PRIMARY
**Confidence:** High
**Original-language sentence:** `在安全無虞、工期不延長下，就工程技術最大極限做最大努力。`

**Position B — 2012 retrospective calculation.**

**Source title (English, research translation):** *Investigation Report — Xinzhuang Depot / Losheng Sanatorium case*
**Original-language title:** `調查報告`
**Publisher:** 監察院
**URL:** https://cybsbox.cy.gov.tw/CYBSBoxSSL/edoc/download/54483
**Class:** PRIMARY
**Confidence:** High
**Original-language sentence:** `因工程會樂生保存方案：增加約8.5個月。`

**What each appears to measure:** The PCC statement describes the design/coordination objective in May 2007. The Control Yuan compares estimated durations under the earlier scheme and the 530 scheme retrospectively. Do not publish “PCC promised zero delay and was wrong by 8.5 months” without first comparing the underlying schedules and baselines.


#### Checked and failed

**2026-08-15 — National Cultural Heritage Database asset record for the Losheng cultural landscape.**

**State:** Not found in usable full-page text.

**Source title (English, research translation):** *Xinzhuang Losheng Sanatorium — Cultural Landscape Asset Record*
**Original-language title:** `新莊樂生療養院`
**Publisher:** 文化部文化資產局－國家文化資產網
**URL:** https://nchdb.boch.gov.tw/assets/overview/culturalLandscape/20090907000002
**Class:** PRIMARY
**Confidence:** High that this is the relevant official record; none assigned to unrendered fields
**Result:** The URL opened, but the asset-record content required for quoting the designation fields did not render in the retrieved full page. Search-result text was **not** used as authority. The readable Bureau of Cultural Heritage “Taiwan Potential World Heritage” page was used for the 7 September 2009 registration statement instead.


**2026-08-15 — National Cultural Heritage Database historic-building asset record.**

**State:** Not found in usable full-page text.

**Source title (English, research translation):** *Xinzhuang Losheng Sanatorium — Historic Building Asset Record*
**Original-language title:** `新莊樂生療養院`
**Publisher:** 文化部文化資產局－國家文化資產網
**URL:** https://nchdb.boch.gov.tw/assets/overview/historicalBuilding/20090907000001
**Class:** PRIMARY
**Confidence:** High that this is the relevant official record; none assigned to unrendered fields
**Result:** Same problem: the official URL opened but did not expose the substantive asset record in readable full-page text. No fact in this file is based on its search snippet.


**2026-08-15 — Taipei High Administrative Court “indicator judgment” page for 109年度訴字第618號 / corresponding Supreme Administrative Court case.**

**State:** Not found in readable full-page form.

**Source title (English, research translation):** *Environmental Impact Assessment — Taipei High Administrative Court 109 Su No. 618 Judgment*
**Original-language title:** `【環境影響評估】本院109年度訴字第618號判決`
**Publisher:** 臺北高等行政法院
**URL:** https://tpb.judicial.gov.tw/tw/cp-11700-2827796-0b93a-061.html
**Class:** PRIMARY
**Confidence:** High that this is the relevant official case-summary page
**Result:** Multiple direct opens returned HTTP 502/Internal Error. Search results exposed references to a corresponding Supreme Administrative Court judgment, but under the research rule those snippets were not used to establish the disposition or date.


**2026-08-15 — Official judicial downloadable document concerning the later Losheng litigation.**

**State:** Not found in readable full-page form.

**Publisher:** 臺北高等行政法院
**URL:** https://tpb.judicial.gov.tw/tw/dl-182442-196ad73cc6c245378ff5ea16c84e6afd.html
**Class:** PRIMARY
**Confidence:** High that it is relevant; none assigned to contents not successfully opened
**Result:** Direct open returned HTTP 502/Internal Error. No substantive statement from its search snippet was carried into this file.


**2026-08-15 — DORTS FAQ statement that the appeal is “currently” before the Supreme Administrative Court.**

**State:** Not accepted as a verified statement of present judicial status.

**Source title (English, research translation):** *DORTS Frequently Asked Questions — Losheng Entrance Image / Xinzhuang Depot*
**Original-language title:** `常見問答－樂生入口意象案`
**Publisher:** 臺北市政府捷運工程局
**URL:** https://www.dorts.gov.taipei/News_toggle.aspx?PageSize=200&n=2A66A485FACB0D5B&page=1&sms=87415A8B9CE81B16
**Class:** PRIMARY for DORTS's own work; not the court of record for litigation status
**Confidence:** Low for current court status
**Original-language sentence:** `上訴人(同原告)於111年7月27日提起行政上訴，目前正由最高行政法院受理中。`
**Reason:** Although the FAQ itself shows a 2026-07-31 page update, an official judiciary search located later case material that could not be opened. The court, not DORTS, must settle the current disposition. Therefore the actual present status is `TBC`.


**2026-08-15 — A heritage-site search lead stating that the depot land was “expropriated” in 1994.**

**State:** Not used.

**Publisher:** 文化部文化資產局
**URL:** https://twh.boch.gov.tw/tw18/index15.htm
**Class:** PRIMARY government heritage material if opened
**Confidence:** Low for the particular date wording in this research file
**Reason:** The search result contained a 1994 formulation, but the full page was not opened and read before the research limit was reached. It is therefore excluded. The Control Yuan's opened investigation is the basis used above for the 1994 administrative approval and site-selection chronology.


**2026-08-15 — Secondary claim that the 2012 Control Yuan finding meant the project was “delayed seven years four months.”**

**State:** Checked; not used as the governing formulation.

**Source title (English, research translation):** *Losheng Residents: What Is the Use of Such a Late Correction?*
**Original-language title:** `樂生院民嘆 糾正遲來 有何意義`
**Publisher:** 公共電視 / 公視新聞網 PNN
**URL:** https://news.pts.org.tw/article/218413
**Class:** SECONDARY
**Confidence:** High that PTS accurately reported the broad Control Yuan story
**Original-language sentence:** `通車時程更延宕了7年4個月。`
**Reason:** The underlying Control Yuan report was opened. It gives the more precise 88-month aggregate and explains its components. Therefore the secondary shorthand is unnecessary and is not used to define the schedule impact.


#### Stated gaps

**Gap — A single authoritative present-day total route length and total passenger-station count for the O Zhonghe–Xinlu operating line is TBC.**

DORTS provides the historical construction-component figures—Zhonghe about 5.4 km / 4 stations, Xinzhuang about 19.7 km / 16 stations, Luzhou about 6.4 km / 5 stations—but those construction counts have shared/interchange treatment that makes simple addition unsafe.

**Known primary material:**
`中和新蘆線` — 臺北市政府捷運工程局
https://www.dorts.gov.taipei/cp.aspx?n=122c012a85c41404
https://www.dorts.gov.taipei/cp.aspx?n=122c012a85c41404&s=33245A586D747A2C
https://www.dorts.gov.taipei/cp.aspx?n=122c012a85c41404&s=3843E83F882E79FD
**Class:** PRIMARY
**Confidence:** High for component figures; Low for deriving an aggregate not explicitly stated.

**Document that would settle it:** A current Taipei Rapid Transit Corporation line technical-data table, operations manual, or official network-statistics table explicitly defining O-line route-km and number of passenger stations, including how Guting and the common trunk are counted.


**Gap — The exact Xinzhuang Depot operational-opening date is TBC.**

Two DORTS primary publications give **2021-01-04** and **2021-01-14**.

**Known primary material:**
`中和新蘆線－新莊線路線說明` — 臺北市政府捷運工程局
https://www.dorts.gov.taipei/cp.aspx?n=122c012a85c41404&s=33245A586D747A2C

`捷運工程叢書 精進版－17 臺北捷運工程技術文件管理實務` — 臺北市政府捷運工程局
https://ebook.dorts.gov.taipei/ebook/no17/files/basic-html/page24.html

**Class:** PRIMARY
**Confidence:** High that the conflict exists.

**Document that would settle it:** The formal operating authorization/commissioning notice, Taipei Metro operating circular, DORTS acceptance record, or MOTC inspection/permission document identifying the legal or operational commencement date.


**Gap — The final judicial disposition of the Losheng entrance-image environmental case is TBC.**

The 2020 provisional disposition is verified directly from the Judicial Yuan. DORTS's 2026 FAQ says an appeal remained before the Supreme Administrative Court, but the official judiciary's later case page/download could not be opened and search snippets were deliberately not used.

**Verified primary source:**
`臺北高等行政法院109年度全字第12號……聲請假處分事件新聞稿` — 臺北高等行政法院 / 司法院
https://www.judicial.gov.tw/tw/cp-1888-244314-0cd69-1.html
**Class:** PRIMARY
**Confidence:** High for the 2020 provisional order.

**Failed primary URLs:**
https://tpb.judicial.gov.tw/tw/cp-11700-2827796-0b93a-061.html
https://tpb.judicial.gov.tw/tw/dl-182442-196ad73cc6c245378ff5ea16c84e6afd.html

**Document that would settle it:** The complete Supreme Administrative Court judgment and docket for `111年度上字第716號` (or any superseding disposition), read in full from the Judicial Yuan/Supreme Administrative Court.


**Gap — The present national geological classification of the “Xinzhuang fault” at Losheng is TBC.**

The 2012 Control Yuan investigation accurately records what the project's older engineering reports said: a Xinzhuang fault passes the site, fault gouge is present, and one report described it as a high-angle reverse fault. This research did **not** verify whether that mapped structure is presently classified by Taiwan's competent geological authority as an active fault, suspected active fault, or another category.

**Verified source for historical project characterization:**
`調查報告` — 監察院
https://cybsbox.cy.gov.tw/CYBSBoxSSL/edoc/download/54483
**Class:** PRIMARY
**Confidence:** High for the historical project reports as reproduced by Control Yuan; TBC for current geological classification.

**Document that would settle it:** The latest Central Geological Survey / Geological Survey and Mining Management Agency active-fault map and explanatory report covering the Xinzhuang–Huilong area, cross-checked against the depot's final as-built geotechnical reports.

**Publication warning:** Do not write “Losheng sits on an active reverse fault” from the Control Yuan report alone.


**Gap — The definitive building-by-building schedule for the 30 May 2007 Losheng preservation settlement is TBC.**

The contemporary PCC and later Control Yuan record agree on 55 buildings: 39 retained in place, 10 in the reconstruction/reassembly category, six demolished. The Bureau of Cultural Heritage's later overview says 39 + 9 + 6 and therefore accounts for only 54.

**Known primary sources:**
行政院公共工程委員會, `樂生保留方案：原地保留39棟、10棟擇要異地重建或重組`
https://www.pcc.gov.tw/content/index?eid=279&ltype=N&nn=C61062639C0CD29F&sms=21EF9CF82726C1BB

監察院, `調查報告`
https://cybsbox.cy.gov.tw/CYBSBoxSSL/edoc/download/54483

文化部文化資產局, `樂生療養院－臺灣世界遺產潛力點`
https://twh.boch.gov.tw/taiwan/intro.aspx?id=14&lang=zh_tw

**Class:** PRIMARY
**Confidence:** High that the discrepancy exists.

**Document that would settle it:** The original 2007-05-30 PCC meeting resolution plus its attached building-by-building disposition schedule, followed by the final New Taipei cultural-asset designation inventory to identify whether one building changed category or was omitted in the heritage summary.


**Gap — Exact Y-junction chainage, turnout numbers and as-built track geometry are TBC.**

The public DORTS description is sufficient to establish that the Luzhou branch diverges under the Taipei Bridge corridor at the Xinzhuang-line turnout junction near Sanhe Road Section 1 / Huanhe North Road, and the operator establishes Daqiaotou–Nanshijiao as the common service section. It does not provide chainage or a detailed interlocking/track plan.

**Verified primary sources:**
臺北市政府捷運工程局, `中和新蘆線－蘆洲線路線說明`
https://www.dorts.gov.taipei/cp.aspx?n=122c012a85c41404&s=3843E83F882E79FD

臺北大眾捷運股份有限公司, `路線及班距`
https://www.metro.taipei/cp.aspx?n=ead981369a065968&s=E153D917FDC2AC69

**Class:** PRIMARY
**Confidence:** High for location and service topology; TBC for engineering chainage/interlocking detail.

**Document that would settle it:** DORTS as-built trackwork/signalling drawings for the Xinzhuang–Luzhou junction, or the relevant CK/CL contract track and interlocking documentation.


**Gap — A final audited realization of the Control Yuan's “NT$8.5 billion increase” is TBC.**

The 2012 Control Yuan total includes elements that its own report identifies as estimates or then-pending contractor claims. It is therefore unsafe to convert “85億元” into a statement that exactly NT$8.5 billion was ultimately spent.

**Verified primary source:**
監察院, `調查報告`
https://cybsbox.cy.gov.tw/CYBSBoxSSL/edoc/download/54483
**Class:** PRIMARY
**Confidence:** High for the 2012 estimate; TBC for final realized cost.

**Document that would settle it:** DORTS final project accounts/settlement, Audit Office audit material after completion, and final judgments or settlements for the land-delay contractor claims.
```

The core route geometry, operating pattern and construction chronology above are anchored in DORTS and Taipei Metro primary material. citeturn16search2turn23search1turn28view1turn28view2 The Losheng preservation-plan chronology and the 39/10/6 disposition are supported directly by the Public Construction Commission and the Control Yuan investigation. citeturn27view0turn27view1turn27view2 The heritage-registration and later entrance-project litigation sections are anchored in Bureau of Cultural Heritage and Judicial Yuan material, while the unresolved present appellate status is deliberately left TBC because the later judiciary pages failed to open. citeturn18view5turn28view0turn18view6turn21view0
