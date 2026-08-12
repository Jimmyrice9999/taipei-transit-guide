# Zhonghe–Xinlu Line 中和新蘆線 (O) — research

**Version 2.0 — 12 August 2026**
**Status: research. Verify before further editing.**

Supersedes `docs/research/rail/lines/zhonghe-xinlu-line.md` v1.0 (6 August
2026) as the sourced record for this subject. That file is a lead index —
long, useful, and largely right — but it had no URLs for most claims, no
primary/secondary marking, and it explicitly flagged three unresolved
problems (a CK570F contract-date conflict, an unconfirmed Luzhou opening
date, and O03/O04 spellings to check). This file resolves what could be
resolved against primary sources and reports on the rest — see "Contradicts
the existing lead file" below. It mirrors the content page at
`content/rail/lines/zhonghe-xinlu-line.md`.

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
(`content/rail/rolling-stock/c371.md`) for the fleet as a whole; not
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

`docs/research/rail/lines/zhonghe-xinlu-line.md` v1.0 (6 August 2026) is this
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
