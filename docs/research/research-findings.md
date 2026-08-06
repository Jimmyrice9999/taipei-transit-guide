# Research findings — outstanding TBC values

**For review. Nothing here has been written into any content page**, with one
exception declared at the top of §6, which was resolved from the repository's
own committed data rather than from research and is argued in `run-log.md` §2.

Compiled 5 August 2026 by web research. Every claim carries its source, whether
that source is primary, and how far I would trust it. Where sources conflict,
every value found is recorded rather than one being chosen.

## How to read the confidence column

| | |
| --- | --- |
| **High** | Primary source (operator, government, manufacturer), or two independent secondary sources agreeing on a specific figure. |
| **Medium** | One good secondary source, internally consistent, no contradicting value found. |
| **Low** | Single source, or sources disagree, or the figure is plausible but unattributed. |
| **None** | Nothing found. Recorded so the gap is documented rather than re-searched. |

A **Low** here is not a licence to publish with a hedge. It means the figure
needs a primary source before it ships.

---

## 1. Which two Wenhu stations are underground

**RESOLVED — and the working assumption was correct.**

| Claim | Value |
| --- | --- |
| The two underground stations are BR13 Songshan Airport and BR14 Dazhi | 松山機場站, 大直站 |
| The remaining 22 are elevated | — |
| BR13 structure | 地下四層車站，一個島式月台 — four levels below ground, one island platform |
| BR14 structure | 地下二層車站，一個島式月台 — two levels below ground, one island platform |

- **Source:** 〈文湖線〉, 維基百科 —
  https://zh.wikipedia.org/zh-tw/文湖線 ; 〈松山機場站〉 —
  https://zh.wikipedia.org/zh-tw/松山機場站 ; 〈大直站〉 —
  https://zh.wikipedia.org/zh-tw/大直站
- **Primary or secondary:** Secondary. The underlying fact is a matter of
  public record and the three articles agree, but I did not find a TRTC or
  DORTS cross-section stating it directly.
- **Confidence:** **High** on the identification, **Medium** on the platform
  depths.
- **Conflicts:** None found. Every source consulted names the same two.

**Recommendation.** This is enough to set `BR13` and `BR14` to `underground` in
`lib/station-overlay.ts` and remove "(which two TBC)" from the line page. The
depths are worth a primary source before publishing.

---

## 2. Published route length — 25.1 vs 25.7 vs the computed 26.42

**RESOLVED. The two figures are not in conflict; they measure different things.**

| Figure | Chinese term | What it measures |
| --- | --- | --- |
| **25.18 km** | 營運長度 | Operating length — terminus to terminus in revenue service |
| **25.7 km** | 路線長度 | Route length — the whole alignment including non-revenue track |
| 25.17 km | — | TDX `CumulativeDistance`, last station of route BR-1 |
| 25.04 km | — | This site's own measurement along the surveyed geometry, BR01 to BR24 |
| 26.42 km | — | This site's former figure: the entire published alignment |

- **Source:** 〈文湖線〉, 維基百科 — https://zh.wikipedia.org/zh-tw/文湖線 ,
  which carries **both** figures in its infobox: 「營運長度 25.18公里」 and
  「路線長度 25.7公里」. The 25.17 km is from `data/tdx/TRTC/station-of-route.json`
  in this repository.
- **Primary or secondary:** The 25.17 km is **primary** (MOTC/TRTC open data).
  The 25.18 and 25.7 are secondary but agree with it.
- **Confidence:** **High.**

**Why this matters.** The site's own geometry corroborates the distinction. The
published alignment measures 26.42 km end to end but runs 635 m beyond BR01 and
744 m beyond BR24; trimmed to the stations it measures 25.04 km. So:

- 25.17–25.18 km ≈ revenue length ≈ our 25.04 km measurement (130 m apart).
- 25.7 km ≈ revenue length plus roughly 500 m of non-revenue track.
- 26.42 km ≈ everything MOTC draws, including both depot leads.

Three numbers that looked like a disagreement are three consistent measurements
of three different things. **Recommendation:** publish 25.17 km as the route
length, citing TDX, and explain the 25.7 as 路線長度 rather than treating it as
a competing claim.

---

## 3. Track gauge, electrification, signalling, headways

### Electrification

| Claim | Value | Confidence |
| --- | --- | --- |
| Supply | 直流 750V, third rail — 「750V，第三軌」 | High |
| Fourth rail | The Wenhu Line is rubber-tyred, so it needs a **fourth rail** for the return path, unlike the steel-wheel lines | Medium |

- **Source:** 〈文湖線〉, 維基百科; the fourth-rail point appears in a Taiwanese
  civil-service examination question bank
  (https://www.tikutang.com/) which is a weak source for a real claim.
- **Note:** The fourth-rail detail is technically expected for a rubber-tyred
  VAL-derived system and I would expect it to be true, but "expected to be true"
  is exactly what this project's rules say not to publish. Needs a DORTS or
  manufacturer source.

### Track gauge

**The question may not have an answer as posed.**

- zh.wikipedia's infobox gives 「軌枕中心線間距 1,880mm」 — *sleeper centre-line
  spacing*, not track gauge.
- This is a **rubber-tyred guideway**, not conventional track. Vehicles run on
  pneumatic tyres on concrete running pads with horizontal guide wheels against
  side guide beams. There is no rail gauge in the ordinary sense.
- **Confidence: High** that 1,880 mm is the guideway dimension published, and
  **High** that reporting it as "track gauge" would be wrong.

**Recommendation.** Replace the `Track gauge: TBC` row with a row that reflects
what the system actually is — "Guideway: rubber-tyred, 1,880 mm running-surface
spacing" — or drop the row. Carrying "TBC" implies a number exists and has not
been found, which is misleading here.

### Signalling

| Claim | Value | Confidence |
| --- | --- | --- |
| System | CITYFLO 650, CBTC with ATO, moving block (「移動式閉塞」) | High |
| Vendor attribution | zh.wikipedia now attributes it to **Alstom**; the site's frontmatter says **Bombardier** | — |

- **Source:** 〈文湖線〉, 維基百科.
- **Note, not a conflict:** Both are correct at different times. Bombardier
  Transportation supplied and installed it; Alstom acquired Bombardier
  Transportation in January 2021 and CITYFLO is now an Alstom product. The site
  should probably say "Bombardier CITYFLO 650 (now Alstom)".

### Headways

| Period | Value | Confidence |
| --- | --- | --- |
| Weekday peak | 「大約2至4分鐘一班」 — about 2–4 min | Medium |
| Off-peak | 「大約4至10分鐘一班」 — about 4–10 min | Medium |
| Minimum design headway | 108 seconds, claimed on PTT | **Low** |

- **Source:** 〈文湖線〉, 維基百科 for the ranges; TRTC's own 路線及班距 page
  (https://www.metro.taipei/cp.aspx?n=EAD981369A065968) is the primary source and
  should be checked directly before publishing. The 108-second figure comes from
  a PTT thread (https://www.ptt.cc/bbs/MRT/M.1292761584.A.F0F.html) and is
  **not** publishable as it stands.
- **Conflicts:** The 2–4 min range and the 108 s (1.8 min) claim are not
  compatible. One is a timetabled headway and the other probably a signalling
  capability; the sources do not say which.

### Speed

| Claim | Value | Confidence |
| --- | --- | --- |
| Maximum operating speed | 「最高速度 每小時70公里」 | High |
| Design speed | 「設計速度 每小時80公里」 | High |

---

## 4. VAL256

| Claim | Value | Confidence |
| --- | --- | --- |
| Builder | Matra (馬特拉) and Alstom (阿爾斯通) | High |
| Build years | 1990–1993; entered service 28 March 1996 | Medium |
| Fleet | 102 cars as 51 pairs, numbered 01–51 | High |
| Formation | 2M+2M — two motor cars per pair, two pairs per train | High |
| Car length | 13,780 mm | High |
| Car width | 2,560 mm | High |
| Car height | 3,530 mm | High |
| Design max speed | 80 km/h | High |
| Operating speed | 70 km/h | High |

### Capacity — sources conflict

| Value | Source |
| --- | --- |
| 114 per car: **20 seated, 94 standing**, at AW2 | 〈台北捷運VAL256型電聯車〉, 維基百科 |
| 114 per car: **24 seated, 90 standing** | A secondary summary of the same article surfaced in search |

- Both agree on **114 per car**; they disagree on the seated/standing split by
  four seats. Given §7 below — a programme that has been physically removing
  seats since 2023 — the likeliest explanation is that the two figures are
  correct at different dates rather than one being wrong.
- **Confidence:** **High** on 114 total, **Low** on the split, and the split
  should probably be published with a date attached or not at all.

- **Sources:** https://zh.wikipedia.org/zh-tw/台北捷運VAL256型電聯車 ;
  http://blair-bus.blogspot.com/2011/03/val256.html (enthusiast blog, secondary,
  used only for corroboration)

---

## 5. Innovia APM 256 (C370)

| Claim | Value | Confidence |
| --- | --- | --- |
| Builder | Bombardier Transportation (加拿大龐巴迪運輸) | High |
| TRTC internal designation | BT370 / 370型 | Medium |
| Car width | 2,540 mm | Medium |
| Interior height | 1,900 mm — 「車廂內部實際高度只有190公分」 | Medium |
| Signalling | CITYFLO 650 | High |
| Interior | Double-level luggage racks, for wheelchairs, pushchairs and large luggage | Medium |

### Fleet size — sources conflict badly, and this is the biggest open question

| Value | Detail | Source |
| --- | --- | --- |
| **51 pairs (102 cars)** | Given in the 文湖線 line article's rolling stock box | 〈文湖線〉, 維基百科 |
| **152 pairs (304 cars)** | 101 pairs built at Bombardier's Pittsburgh plant, plus 51 pairs final-assembled at 唐榮車輛科技 (Tang Eng Iron Works) | 〈龐巴迪INNOVIA APM 256型電聯車〉, 維基百科 |

- These differ by a factor of three and I cannot reconcile them from the sources
  available. Plausible explanations, none confirmed:
  - 152 pairs is the total contract across Taipei including cars for other uses;
    51 pairs is the Wenhu allocation.
  - One figure counts cars and the other pairs, with an error somewhere.
  - The Pittsburgh/Tang Eng split is being double-counted.
- **Confidence: Low.** Do not publish a fleet size for this type until it is
  resolved. This needs a TRTC annual report or a DORTS procurement record.
- **Sources:** https://zh.wikipedia.org/zh-tw/龐巴迪INNOVIA_APM_256型電聯車 ;
  https://zh.wikipedia.org/zh-tw/臺北捷運列車

---

## 6. The Matra contract dispute and the Bombardier transition

**Note.** The route-length finding in §2 has been written into content; this
section has not.

The material here is rich, contested and genuinely under-covered in English —
it is probably the strongest article opportunity on the site. It is also the
section where the sources are least neutral, and several of the vivid details
circulate without attribution.

### What is reasonably well supported

| Claim | Confidence |
| --- | --- |
| The Muzha Line opened in 1996 with Matra VAL256 equipment and a Matra signalling system | High |
| The Neihu extension was awarded to Bombardier, with CITYFLO 650, rather than extending the Matra system | High |
| The two systems were not interoperable, and the VAL256 fleet had to be converted to CITYFLO 650 to run through | High |
| Conversion began 4 July 2009; converted VAL256 units returned to passenger service **26 December 2010** | High |
| Bombardier missed a contractual conversion deadline of **14 February 2010**, and the Taipei City Government's DORTS imposed penalties | Medium |

### Contested, and the interesting part

- **Whether Bombardier had the right to modify Matra's trains at all** — whether
  Matra consented, and whether Matra's patents were appropriated by a
  competitor. Reported as a live legal question. **Confidence: Medium** that the
  dispute existed; **Low** on any characterisation of its merits.
- **The hardware-lock story** — that Matra locked the control-system software
  with hardware dongles on withdrawal, and that the city government eventually
  sourced matching dongles from a computer retailer to run the software, with
  the implication that this was itself a violation. This is repeated widely and
  I found **no primary source**. It is the kind of detail that is repeated
  because it is a good story. **Confidence: Low.** Do not publish without a
  court record or contemporaneous news report.

### Best sources found

- 陳政亮 et al., 〈台北捷運如何成為「拼裝捷運」？科技混生性與北捷的誕生〉,
  巷仔口社會學 (twstreetcorner.org), 6 April 2021 —
  https://twstreetcorner.org/2021/04/06/台北捷運如何成為「拼裝捷運」？科技混生性與北/
  **This is the most valuable source found in the whole run.** It is an academic
  sociology-of-technology treatment of exactly this question — why Taipei's
  metro ended up assembled from incompatible vendors. Secondary, but scholarly
  and referenced, which the forum material is not. Also republished at The News
  Lens: https://www.thenewslens.com/article/149593
- 〈馬特拉vs.龐巴迪〉, 雲程的雙魚鏡 —
  https://blog.xuite.net/hoonting/twblog/160088849 (a partisan blog; useful for
  finding claims to check, not for citing)
- DORTS 文山內湖線 project pages —
  https://www.dorts.gov.taipei/cp.aspx?n=DBAC040496EFAB94 (**primary**, and the
  place to start for the official account)

**Recommendation.** This deserves its own article rather than a paragraph on
the line page, and it should be built from the 巷仔口社會學 piece and the DORTS
record, not from the forum material. Leave the hardware-lock anecdote out until
it can be sourced.

---

## 7. Seat removal and interior optimisation

**Well sourced, recent, and TRTC has published on it directly.**

| Claim | Value | Confidence |
| --- | --- | --- |
| Trial began 2023 on 3 VAL256 trains | Seats and luggage racks removed from the central area of cars 2 and 3 | High |
| Trial effect on capacity | Train capacity from ~400 to ~420 | High |
| Passenger satisfaction with the trial | ~70% | Medium |
| Fleet-wide programme announced | 14 June 2024 | High |
| Scope | All **25** VAL256 trains: some stanchions removed at doorways, narrower grab rails beside doors, twin seats and luggage racks removed from cars 2 and 3, four back-to-back seat groups retained in the car centre, window grab rails and ceiling straps added | High |
| Effect | About +20 passengers per train | High |
| Completion target | By mid-2025 | High |

- **Primary source:** TRTC news release —
  https://www.metro.taipei/News_Content.aspx?n=30CCEFD2A45592BF&sms=72544237BBE4C5F6&s=86F98235BC105C44
  「臺北捷運化身空間魔術師！繼龐巴迪列車改善後 文湖線馬特拉列車空間優化…」
- **Secondary corroboration:** 中央社 CNA, 14 June 2024 —
  https://www.cna.com.tw/news/ahel/202406140152.aspx ; 聯合新聞網 —
  https://udn.com/news/story/7266/8030998 ; ETtoday —
  https://www.ettoday.net/news/20240614/2758072.htm
- **Note:** The Bombardier fleet was modified first ("繼龐巴迪列車改善後"), so
  there is an earlier programme to document as well.
- **Conflict to resolve:** the fleet-wide programme covers **25** VAL256 trains,
  while §4 records **51 pairs**. 51 pairs = 25.5 four-car trains, so these are
  consistent if "51 pairs" means 51 two-car units forming 25 trains with one
  spare pair. That reading also fits the 2M+2M formation. Worth confirming, and
  it may resolve part of the §5 fleet-size confusion too.

### Fleet renewal

- **Nothing found.** The udn headline 「北捷：2025全面換新」 refers to completing
  the *interior refit* by 2025, **not** to replacing the fleet. I found no
  procurement, tender or plan for new Wenhu Line rolling stock.
- **Confidence: None.** Recording this as a genuine negative: as of this search
  there is no evidence of a Wenhu fleet replacement programme, and the site
  should not imply one exists.

---

## 8. Depots

### Muzha Depot 木柵機廠

| Claim | Value | Confidence |
| --- | --- | --- |
| Site area | **6.2 公頃** (6.2 ha) | Medium |
| Opened | 28 March 1996, with the line | High |
| Grade | Now a **三級機廠** (third-level depot), downgraded from **五級機廠** when Neihu Depot opened | Medium |
| Functions | 車輛儲存、維修、行控、清洗、沿線道旁維修及零件倉儲 — storage, maintenance, operations control, washing, lineside maintenance, parts warehousing | Medium |
| Stabling capacity | **84 pairs**, on 12 storage roads | Medium |
| Fleet based | Both VAL256 and Innovia APM 256 | Medium |

- **Source:** 〈木柵機廠〉, 維基百科 — https://zh.wikipedia.org/zh-tw/木柵機廠
- **Conflict with current site content:** the site's depot page says Muzha is
  home to the VAL256 fleet and Neihu to the Innovia fleet. This source says
  Muzha houses **both** types. **Confidence: Low** on the site's current
  allocation claim — it should be checked before the stub flag comes off.

### Neihu Depot 內湖機廠

| Claim | Value | Confidence |
| --- | --- | --- |
| Site area | **7.11 公頃** (7.11 ha) | Medium |
| Location | Northeast side of the 南港經貿園區特定專用區 | Medium |
| Grade | 全功能維修機廠 — full-function maintenance depot, the line's principal one | Medium |
| Functions | 停駐、清洗、檢查、保養、維修、測試、緊急修復、行車控制 — stabling, washing, inspection, servicing, maintenance, testing, emergency repair, operations control | Medium |
| Relationship to Muzha | The two share the line's stabling and maintenance between them | Medium |

- **Source:** DORTS 文山內湖線 project page —
  https://www.dorts.gov.taipei/cp.aspx?n=DBAC040496EFAB94 — **primary**, which
  makes the Neihu figures stronger than the Muzha ones.
- **Not found:** stabling capacity in trains, number of roads, construction
  cost, the site-selection dispute. The site's Neihu page asserts the siting was
  contested during planning; I found **no source** for that in this run.
  **Confidence: None** — it should not stay on the page unsourced.

---

## 9. Summary of what is publishable now

| Finding | Status |
| --- | --- |
| BR13 and BR14 are the underground stations | Ready, pending a primary source for platform depths |
| Route length 25.17 km, and why 25.7 also circulates | **Already applied** — see run-log §2 |
| Max speed 70 km/h, design 80 km/h | Ready |
| Signalling CITYFLO 650, moving block, CBTC/ATO | Ready; consider "Bombardier (now Alstom)" |
| Electrification 750 V DC third rail | Ready; the fourth-rail detail is not |
| VAL256 dimensions and formation | Ready |
| VAL256 capacity 114/car | Ready; the seated/standing split is not |
| Seat removal programme | Ready — TRTC primary source |
| Muzha 6.2 ha / 84 pairs, Neihu 7.11 ha | Usable with attribution; Neihu is DORTS-sourced and stronger |
| Innovia fleet size | **Not publishable** — sources differ threefold |
| Track gauge | **Not publishable as "gauge"** — the question is malformed for a rubber-tyred guideway |
| Headways | Check TRTC's own page before publishing |
| Matra hardware-lock story | **Not publishable** — no primary source found |
| Neihu depot siting dispute | **Not publishable** — no source found; currently asserted on the site |
| Wenhu fleet renewal | **Nothing exists** — do not imply otherwise |

## 10. What I could not do

- **No Chinese-language database or archive access.** Everything here came from
  the open web. The DORTS site, TRTC annual reports and the Public Construction
  Commission tender database (pcc.mlwmlw.org surfaced in one search) would all
  answer questions this could not, particularly the Innovia fleet size.
- **I did not read the PTT and Mobile01 threads in depth.** They surfaced in
  search results and are where the enthusiast detail lives, but a forum post is
  a lead, not a citation, and working through them properly is a larger job than
  this run allowed.
- **I did not verify any figure against a second independent source** where only
  one was found. Several **Medium** ratings would move to **High** or **Low** on
  one more source each.

---
---

# Run 3 — 6 August 2026

Second research pass. The brief was rolling stock, depots, infrastructure and
current developments, plus a source-quality audit over everything above.

**Three things below overturn findings from run 1**, and they are flagged where
they appear rather than quietly replacing the earlier text:

- The **Innovia fleet size is resolved** (§11). Run 1 recorded a threefold
  conflict between 51 pairs and 152 pairs and could not reconcile them. Both
  readings were misreadings of the same article. It is 101 pairs.
- **A fleet renewal programme exists** (§14). Run 1 recorded "nothing found" as
  a deliberate negative and told the site not to imply one existed. TRTC
  announced one in May 2026 — after run 1 searched, so this is the one genuinely
  *new* fact in this set rather than a research failure.
- **The 25.7 km figure is identified** (§13). Not "revenue length plus roughly
  500 m of non-revenue track", as run 1 inferred. It is 10.9 + 14.8, the two
  construction projects added together, both figures DORTS's own.

Confidence marks follow the same scale as the run-1 sections above.

---

## 11. Rolling stock — VAL256 and Innovia APM 256 (C370)

### The corporate lineage, which the site had wrong

| Date | Event | Confidence |
| --- | --- | --- |
| Feb 1996 | Siemens buys 50% of Matra Transport; the company becomes Matra Transport International | High |
| Oct 1998 | Siemens raises its stake to **95%**; Lagardère retains 5% | **High — primary** |
| Nov 2001 | Siemens completes to **100%**; renamed Siemens Transportation Systems | Medium |
| May 2001 | **Bombardier** completes its acquisition of **Adtranz**, from DaimlerChrysler | **High — primary** |
| Jan 2021 | Alstom acquires Bombardier Transportation | High |

- **Primary sources:** Lagardère press release, 1 October 1998 —
  https://www.lagardere.com/en/press-release/siemens-increases-its-stake-in-matra-transport-international/
  ; European Commission, Case COMP/M.2139 Bombardier/ADtranz —
  https://ec.europa.eu/commission/presscorner/api/files/document/print/en/ip_01_501/IP_01_501_EN.pdf
- **Secondary:** Metro Magazine, "Matra Transport changes its name"; Railway
  Gazette International, "Adtranz takeover completed", 1 June 2001.

**The correction.** `innovia-apm-256-c370.md` opened by saying Bombardier
acquired Matra's people mover business and continued it as Innovia APM. VAL went
to Siemens and stayed there — Siemens still markets its descendants as CityVal
and Airval. Bombardier's 2001 acquisition was Adtranz, whose people-mover
heritage runs through Westinghouse and AEG. Two deals, same year, unrelated.

**A note on the brief.** The instruction for this run described the error as
"attributes the Adtranz acquisition to Bombardier. It was Siemens, to 100% in
2001." The conclusion is right and one step of it is not: Bombardier **did**
acquire Adtranz, in May 2001, and the EC decision above is the regulator's own
record of it. What Siemens took to 100% in 2001 was **Matra Transport
International**. Two acquisitions, both completing in 2001, easily run together
— which is presumably how the error reached the page in the first place.

### VAL256

| Claim | Value | Source | Confidence |
| --- | --- | --- | --- |
| Builder | Matra Transport with GEC Alsthom | zh + en Wikipedia | High |
| Built | 1990–1993 | zh.wikipedia | Medium |
| Entered service | 28 March 1996 | DORTS (primary) | High |
| Fleet | 102 cars, 51 two-car sets, numbered 01–51 | zh + en | High |
| Trains | 25 four-car trains, one pair spare | TRTC news release (primary) | High |
| Car length / width / height | 13,780 / 2,560 / 3,530 mm | zh + en agree exactly | High |
| Capacity | 114 per car at AW2 — 20 seated, 94 standing | zh + en agree | High on total, Medium on split |
| Train capacity | ~440 | ETtoday, quoting TRTC in council | **Low** — does not reconcile with 114 × 4 = 456 |
| Design / operating speed | 80 / 70 km/h | zh + en | High |
| Traction | GEC Alsthom armature chopper, 2 DC motors per car | zh.wikipedia | Medium |
| Braking | Regenerative and disc | zh.wikipedia | Medium |
| Doors | 4 per car, 2 per side | zh.wikipedia | Medium |
| Current collection | 750 V DC third rail, **bottom-contact** shoe | zh.wikipedia | Medium |
| Original signalling | Fixed-block ATC/ATO derived from Lyon line D's MAGGALY | en.wikipedia | Medium |
| Guidance | Horizontal wheels on **lateral** guide bars | Railway Technology; en.wikipedia | **Medium** |

**The guidance question, settled — with a caveat.** The site said VAL is guided
by horizontal wheels on a **central rail**. It is not. VAL uses side guidance:
pairs of horizontal wheels bear outward against lateral guide bars, H-section
steel set about 200 mm above the running surface, and those bars also carry the
750 V supply.

- Railway Technology's Lille profile describes the permanent way as "the
  running-tracks, the guide bars (which are also used to provide the electric
  current)", with "the lateral guidance wheels run on the side of this H section
  200 mm above the running surface".
- en.wikipedia independently: "pairs of horizontal tires to provide lateral
  guidance", power "collected by shoes from the guidebars".

**Confidence: Medium, not High**, and the reason is worth stating. Neither is a
manufacturer document or an engineering drawing. Both are secondary, and they
may share an ancestor. A Siemens VAL technical description or a Matra guideway
drawing would settle it properly. What *is* High confidence is that the central
rail claim is wrong — because both sources say side guidance, and because the
likely origin of the error is identifiable: **NeoVal, VAL's own successor,
genuinely is centrally guided**, on a single rail similar to Translohr's. The
site described VAL's future and attributed it to VAL's past.

### Innovia APM 256 (C370)

| Claim | Value | Source | Confidence |
| --- | --- | --- | --- |
| Builder | Bombardier Transportation, West Mifflin (Pittsburgh) | zh + en | High |
| Final assembly, 51 of 101 pairs | 唐榮車輛科技 (Tang Eng Iron Works), Taiwan | zh.wikipedia ×2 | Medium |
| Built | 2006–2009 | zh.wikipedia | Medium |
| **Fleet** | **202 cars, 101 two-car sets, numbered 101–201** | zh + en agree | **High** |
| Entered service | 4 July 2009 | DORTS (primary) | High |
| Car length / width / height | 13,780 / **2,540** / 3,530 mm | zh + en agree | High |
| Capacity | 24 seated + 73 standing per car; 456 per train | zh.wikipedia | Medium |
| Design / operating speed | 90 / 70 km/h | zh + en | High |
| Traction | Bombardier 1512A, 118 kW; IGBT–VVVF MITRAC TC540 AU | zh.wikipedia | Medium |
| Current collection | 750 V DC third rail, **side-contact** shoe, fourth-rail return | zh.wikipedia | Medium |
| Signalling | CITYFLO 650, moving block, GoA4 | zh + en | High |

**The fleet size is resolved, and run 1's conflict was a misreading.** Run 1
recorded 51 pairs against 152 pairs and could not reconcile them. Both figures
came from misreading the same article:

- The **51** is 「51對在唐榮車輛科技最後組裝」 — the 51 pairs *final-assembled in
  Taiwan*, a subset of the order, not the order.
- The **152** is 101 + 51, adding the Taiwanese-assembled subset to the total
  rather than recognising it as part of it.

The actual figure is **101 pairs, 202 cars, numbered 101–201**, and the Chinese
and English articles agree on it independently. Cross-checks that hold:

| Check | Arithmetic |
| --- | --- |
| Total Wenhu fleet | 51 + 101 = 152 pairs = **304 cars** |
| Trains | 304 / 4 = **76 four-car trains** |
| Against the renewal programme | TRTC's plan covers 「七十六列電聯車」 — **76** |
| Against the seat programme | 25 Matra trains from 51 pairs, one pair spare |

Four independent statements landing on the same total is the strongest
corroboration in this document.

**One residual discrepancy, unresolved.** The renewal reporting splits 76 as
「25列馬特拉」 + 「51列龐巴迪」. But 101 Innovia pairs form 50 four-car trains
with one pair over, not 51. Either the news reporting is loose, or a train is
formed across the two fleets, or a spare pair is being counted as a train.
**Confidence: None** on which. It matters, because a mixed-fleet train would
contradict the site's framing of the two fleets as separate.

**The 256 does not mean what the site said.** The VAL256 is 2,560 mm wide; the
Innovia APM 256 is **2,540 mm**. The number names the guideway, not the car. The
site's claim that both fleets share a car width is false, and the claim it was
supporting — that they can share a guideway and platform doors — is true for a
different reason: the running-surface spacing, the side guide beams and the
750 V pickup are common, and the car is built to fit them.

### Why the two fleets differ, and how they coexist

**They are not the same design and never were.** Different manufacturer,
different decade, different body width, different current-collection geometry
(bottom-contact against side-contact), different traction (DC chopper against
IGBT–VVVF), different seating layout, different top speed.

**They are not incompatible in service, and this is the correction to make.**
Since 26 December 2010 both run under **the same CITYFLO 650 moving-block
system**, which is precisely what the eighteen-month conversion was for. TRTC
runs them on the same line, on the same headway, and — per 自由時報 — passengers
tell them apart by seat colour: 「乘客坐上米黃色座椅就是馬特拉車廂、龐巴迪座椅為
藍色」.

**So "how are they kept separated" is close to the wrong question, and the site
should not ask it in that form.** They are separated at the *formation* level —
a train is four cars of one type, as far as anything found here shows — and
integrated at every level above that. **Confidence: Medium**, and see the
50-vs-51 discrepancy above, which is the one piece of evidence pointing the
other way.

- **Sources:** https://zh.wikipedia.org/zh-tw/台北捷運VAL256型電聯車 ;
  https://en.wikipedia.org/wiki/Taipei_Metro_VAL256 ;
  https://zh.wikipedia.org/zh-tw/龐巴迪INNOVIA_APM_256型電聯車 ;
  https://en.wikipedia.org/wiki/Innovia_APM_256 ;
  https://zh.wikipedia.org/zh-hant/臺北捷運列車 ;
  https://www.railway-technology.com/projects/lille_val/ ;
  https://en.wikipedia.org/wiki/V%C3%A9hicule_Automatique_L%C3%A9ger ;
  https://news.ltn.com.tw/news/life/paper/953186

### Tyres — not found

**Confidence: None.** No tyre specification, pressure or replacement interval
was found for either fleet, in any language. Searches in Chinese for
「文湖線 輪胎 更換 里程」 return consumer motoring content. TRTC's own statements
about 「調整關鍵零件更換週期」 — adjusting key-component replacement intervals —
confirm such a schedule exists without publishing any of it.

This is maintenance-manual data. It is not published anywhere, and it should be
recorded as a permanent gap rather than an outstanding search. The spec rows are
marked TBC on both fleet pages.

---

## 12. Depots

### Muzha Depot 木柵機廠

| Claim | Value | Source | Confidence |
| --- | --- | --- | --- |
| Site area | **6.2 ha** | **DORTS (primary)** | High |
| Opened | 28 March 1996, with the line | DORTS + zh | High |
| Position | Near the zoo exit, beside BR01 | DORTS | High |
| Functions | Storage, maintenance, operations control, washing, lineside maintenance, parts warehousing | DORTS | High |
| Grade | 三級機廠 — third-level, regraded down from 五級 when Neihu opened | zh.wikipedia | **Low — single source** |
| Stabling | **12 roads, 84 pairs** | zh.wikipedia | **Low — single source** |
| Buildings | Stabling yard, workshop, plant room, control centre, traction substation, main substation, emergency power, pumping station, test track | zh.wikipedia | Medium |
| Fleet based | **Both** VAL256 and Innovia APM 256 | zh.wikipedia | **Low — single source, and it contradicts what the site said** |

Run 1 gave 6.2 ha as Medium from zh.wikipedia. It is now **primary**: DORTS's own
project page carries it.

**The 84-pair capacity should be treated with suspicion.** The line's entire
fleet is 152 pairs. A depot at the 1996 end, regraded downward in 2009, holding
55% of the fleet is possible but surprising, and it rests on one encyclopedia
article with no references. It is published on the site with the source attached
and a note saying exactly this.

**The fleet allocation is now corrected on the site.** The depot page said
Muzha housed the VAL256 fleet alone. That was never sourced; the best available
source says both types. Changed to match the source, with the change stated on
the page.

### Neihu Depot 內湖機廠

| Claim | Value | Source | Confidence |
| --- | --- | --- | --- |
| Site area | **7.11 ha** | **DORTS (primary)** | High |
| Dimensions | ~600 m × ~120 m | zh.wikipedia | Medium |
| Location | 南港經貿園區特定專用區東北側，緊鄰基隆河 | **DORTS (primary)** | High |
| **District** | **Nangang, not Neihu** | DORTS + zh | **High** |
| **Connects at** | **BR24 Taipei Nangang Exhibition Center** | zh.wikipedia | **High** |
| Completed | 22 February 2009 | zh.wikipedia | Medium |
| In use | 4 July 2009, with the extension | DORTS | High |
| Grade | 全功能維修機廠 — full-function | DORTS | High |
| Facilities | Workshop, multi-storey stabling building, control centre, substation, underframe washing, paint shop, sewage plant, fan-shaped track area, test track | zh.wikipedia | Medium |
| Control centre | Took over the primary function from Muzha in 2009 | zh.wikipedia | Medium |
| Stabling capacity, roads | **Not found** | — | None |

**A fourth false claim, not on the original list.** The site said Neihu Depot
connects to the running line near **BR19**. It does not. It is beside **BR24**,
at the opposite end of the line, and zh.wikipedia says so directly:
「內湖機廠位於南港展覽館站內湖線站體之東北側」. DORTS independently locates it in
the Nangang Economic and Trade Park against the Keelung River, which is the same
place.

This appears to have been an inference from the shared name — Neihu Depot,
therefore near Neihu station — and it is exactly the class of error this project
exists to catch. It also drove the depot marker on the line page's strip map, so
a live illustration was wrong for four builds. Both are corrected, and
`npm run facts` now cross-checks the strip-map marker against the depot page's
own stated junction so the two cannot drift apart again.

**Same source, second correction:** 「雖名為內湖機廠，卻位於南港區」 — despite
the name it is in Nangang District. The facts panel said Neihu.

**The siting dispute has been removed.** Three runs, no source of any kind for
"the siting was contested during planning". Deleted from the page rather than
hedged, with a note saying what would settle it.

### What is not publicly documented, and where it lives

Asked for explicitly, and the answer is specific.

**Not found for either depot:** stabling capacity in trains, number of roads
(Neihu), whether heavy overhaul is done on the line at all or contracted out,
construction cost, and the site-selection process.

**Where it lives.** Depot capacity and layout appear in three places in Taiwan,
none of them on a public web page:

1. **環境影響評估 (EIA) reports.** Taiwan's EPA maintains a public EIA database,
   and depot construction is a notifiable development. A 1990s Muzha EIA may
   predate digitisation; the Neihu one, from around 2000–2002, should exist.
   **Accessible in principle, not found by open-web search.**
2. **DORTS's own 捷運工程叢書 series.** A search result surfaced page 225 of
   volume 22, 〈捷運號誌系統實務〉, hosted at `ebook.dorts.gov.taipei`. This is a
   published technical series by the builder, browsable page by page, and it is
   the single most promising unexplored source found in three runs.
   **Accessible, and not yet read.**
3. **Public Construction Commission tender records.** Contract award records
   carry scope and value. Run 1 noted the database and did not work it.

**Recommendation.** `ebook.dorts.gov.taipei`'s 捷運工程叢書 is a primary,
operator-published technical series and it is sitting there. It would upgrade
the signalling, guideway and depot sections from encyclopedia-grade to
builder-grade in one pass. That is the highest-value research target on the
list and it is not a search problem — it is a reading problem.

---

## 13. Infrastructure

### The 25.7 km, identified

**Resolved, and run 1's explanation was wrong.**

DORTS's own project record gives the two halves separately:

| Section | DORTS figure | Stations |
| --- | --- | --- |
| 木柵線 | 「約10.9公里」 | 12 |
| 內湖線 | 「約14.8公里」 | 12, of which 「地下段3.9公里，2座地下站」 |
| **Total** | **25.7 km** | **24** |

10.9 + 14.8 = 25.7 exactly. The figure that appears on zh.wikipedia as
「路線長度 25.7公里」 is **the two construction projects added together**, each
one the extent of what that project built — including non-revenue track at each
end — rather than the railway that carries passengers.

Run 1 guessed "revenue length plus roughly 500 m of non-revenue track", which
got the direction right and the mechanism wrong. The mechanism matters: it means
25.7 is not a measurement of anything, but a sum of two measurements of two
different things, which is why it has never reconciled with anybody's survey.

**Confidence: High.** Both component figures are DORTS's own, they are stated on
the same page, and they add exactly.

**All the figures now account for themselves:**

| Figure | What it is | Source |
| --- | --- | --- |
| 25.17 km | Revenue length, BR01–BR24 | TDX `CumulativeDistance` — primary |
| 25.18 km | 營運長度, the same thing to one more digit | zh.wikipedia |
| 25.7 km | 路線長度 — 10.9 + 14.8, the two projects | DORTS — primary |
| 25.04 km | This site's own measurement along MOTC geometry | computed |
| 26.42 km | The whole published alignment, depot leads included | computed, superseded |

### Elevated and underground

**Settled, and from two directions.**

- DORTS records the Neihu section as carrying 「地下段3.9公里，2座地下站」 —
  3.9 km underground, two underground stations. The Neihu section is BR13–BR24,
  which excludes every station the Muzha project built. **Primary**, and it
  narrows the pair to the northern half without naming them.
- zh.wikipedia's infobox names them: 「地下車站 2座（松山機場站、大直站）」 — BR13
  and BR14 — corroborated by both station articles.

**Confidence: High** on the identification, and BR13/BR14 are now set to
`underground` in `lib/station-overlay.ts` with the reasoning in the file.

**Still not established:** platform depths. Run 1 recorded BR13 as 地下四層 and
BR14 as 地下二層 at Medium confidence. Not published, because a cross-section is
what would settle it and none was found.

**The 3.9 km underground figure is new** and is now a published spec row. It is
the only quantitative statement about the line's structure that comes from the
builder.

### Guideway, gauge and electrification

**"Track gauge" remains the wrong question**, as run 1 established, and the site
now asks a different one. The row is labelled **Guideway spacing, 1,880 mm** —
zh.wikipedia's 「軌枕中心線間距1,880mm」, sleeper centre-line spacing — rather
than "track gauge, TBC", which implied a number existed and had not been found.

en.wikipedia does print 1,880 mm as a track gauge, noting it "uses cement rail
system differing from standard steel rail". Both sources agree on the number and
disagree on what it is called. **Confidence: High** on 1,880 mm, **High** that
calling it a rail gauge is wrong.

| Claim | Value | Source | Confidence |
| --- | --- | --- | --- |
| Supply | 750 V DC, third rail | zh + en Wikipedia | High |
| Fourth-rail return | Yes, on the Innovia fleet: 「第三軌供電、第四軌回流」 | zh.wikipedia (Innovia article) | **Medium** — upgraded from run 1's Low |
| Collection, VAL256 | Bottom-contact shoe | zh.wikipedia | Medium |
| Collection, Innovia | Side-contact shoe | zh.wikipedia | Medium |
| Guideway | Rubber tyres on concrete running surfaces, lateral H-section guide bars carrying the supply | Railway Technology | Medium |

Run 1 rated the fourth rail Low because its only source was an examination
question bank. The Innovia article states it directly as a vehicle
specification, which is a considerably better place for it to come from. Still
not a manufacturer document.

### Signalling and its generations

| Generation | System | Dates | Confidence |
| --- | --- | --- | --- |
| First | Matra fixed-block ATC/ATO, derived from Lyon line D's MAGGALY | 1996 – 4 July 2009 | Medium |
| Second | Bombardier CITYFLO 650, CBTC, moving block, GoA4 | 4 July 2009 – | High |
| Third | Replacement, phase 1 by 2036 | announced 2026 | Low — provisional |

**The switchover date is the correction.** The site said the VAL256 fleet was
re-signalled *ahead of* the 2009 extension. The line switched to CITYFLO 650 on
**4 July 2009**, the day the extension opened; the VAL256 fleet came out of
service that day and returned on **26 December 2010**. For nearly eighteen
months the whole 24-station line ran on the Bombardier fleet alone.

**Vendor attribution.** zh.wikipedia now attributes CITYFLO 650 to **Alstom**;
the site said Bombardier. Both are right at different times — Bombardier
supplied it, Alstom acquired Bombardier Transportation in January 2021. The site
now says "Bombardier (now Alstom)".

### Control centres

| Claim | Value | Source | Confidence |
| --- | --- | --- | --- |
| Muzha Depot has an operations control centre | Yes, from 1996 | DORTS | High |
| Neihu Depot has one, and it took over the primary role in 2009 | Yes | zh.wikipedia | Medium |
| Whether Muzha's is a live standby or decommissioned | **Not found** | — | None |

### Headways

**Now primary.** TRTC's own 路線及班距 page:

| Period | Value |
| --- | --- |
| Weekday peak (07:00–09:00, 17:00–19:30) | 約2～4分鐘 |
| Weekday off-peak | 約4～10分鐘 |
| After 23:00 | 約12分鐘 |
| Weekends and holidays, 06:00–23:00 | 約4～10分鐘 |
| Operating hours | 06:00–24:00 |
| One-way run time | 約45分鐘 |

**Confidence: High.** This replaces run 1's Medium-confidence encyclopedia
ranges with the operator's own published figures, and they agree.

**The minimum-headway claim has changed shape.** Run 1 recorded 108 seconds from
a PTT thread and rated it Low. zh.wikipedia's infobox says 「可縮短至80秒」 — 80
seconds. Two different numbers from two weak sources, not compatible with each
other or with the timetabled 2–4 minutes. Published as "design minimum headway,
80 s" with the encyclopedia cited and a note in prose that it is a signalling
capability rather than a timetable. **Confidence: Low.** The 108-second figure
is not published.

### Platform screen doors

Full-height on all 24 stations: Faiveley equipment BR01–BR12, ST Electronics
BR13–BR24. **Source:** TRTC 安全設備 (primary). **Confidence: High.** The site
asserted full-height platform screen doors without a source for four builds; now
cited.

---

## 14. Current developments

### Seat removal

Run 1 documented this well and nothing contradicts it. Restated with the
programme's status as of this run:

| Claim | Value | Confidence |
| --- | --- | --- |
| Trial | 2023, three VAL256 trains; seats and luggage racks removed from the centre of cars 2 and 3 | High |
| Trial effect | Train capacity ~400 → ~420 | High |
| Satisfaction | ~70% | Medium |
| Fleet-wide announcement | 14 June 2024 | High — TRTC primary |
| Scope | All **25** VAL256 trains | High |
| Effect | About +20 per train | High |
| Target | Mid-2025 | High |
| **Completed?** | **Not confirmed** | **None** |

**The gap.** Every source found is from the June 2024 announcement. No
completion report, no progress statement, nothing dated 2025 or 2026 confirming
the programme finished. It may have; nobody said so where I could find it.

**The Bombardier fleet was done first** — 「繼龐巴迪列車改善後」 — and that
earlier programme is still undocumented here. **Confidence: High** that it
happened, **None** on its scope or dates.

**Rationale and reaction.** TRTC's own framing is capacity and circulation.
Public reaction is reported only through the ~70% trial satisfaction figure,
which is TRTC reporting on itself. **No independent survey found**, and the site
should not characterise public reaction on that basis.

- **Primary:** TRTC news release —
  https://www.metro.taipei/News_Content.aspx?n=30CCEFD2A45592BF&sms=72544237BBE4C5F6&s=86F98235BC105C44
  ; Taipei City Government —
  https://www.gov.taipei/News_Content.aspx?n=F0DDAF49B89E9413&s=231CA45123BAF2AB
- **Secondary:** 中央社 14 June 2024; 聯合新聞網; ETtoday.

### Fleet renewal — this exists, and run 1's negative is superseded

**All figures provisional.** They come from news reporting of council exchanges
and a general manager's statements, not from a tender, a contract or a published
plan. Marked accordingly, as the brief required.

| Claim | Value | Confidence |
| --- | --- | --- |
| Scope | All **76** trains, plus the signalling system | Medium |
| Phase 1 | 25 new trains in service and signalling switched, by **2036** (民國125年) | Medium |
| Phase 2 | The 51 Bombardier trains retired by **2039** (民國128年) | Low |
| Completion | **2041** (民國130年) | Medium |
| Initial reserve fund | NT$41 bn | Low |
| Total replacement cost | ~NT$55 bn | Low |
| New formation | Four cars, **gangwayed** — 「四節車廂貫穿」, matching the high-capacity lines | Medium |
| New capacity | **574** per train, ~30% above the current 440 | Medium |
| Peak effect | ~5,000 additional passenger journeys | Low |
| Announced by | 北捷總經理黃清信 | Medium |

**Why run 1 found nothing.** It searched before this was announced. The udn
report is dated 18 May 2026 and the ETtoday report 7 May 2026; run 1 ran on
5 August 2026 and searched for a *procurement*, which there still is not. Run 1's
negative was correct when written and is no longer.

**What to be careful about.** The 440 comparison figure does not reconcile with
114 per car × 4 = 456. The 2039 date for the Bombardier fleet has one source.
The budget figures come from a council exchange. None of this is a plan document.

**One structural implication worth noting:** a gangwayed four-car train is not a
pair of married pairs. If that survives into procurement, the "two permanently
coupled pairs" formation this site draws a diagram of stops being true of the
Wenhu Line in about ten years.

- **Sources:** 聯合新聞網, 〈文湖線持續優化 2036年完成25列新車上線〉, 林麗玉,
  18 May 2026 — https://udn.com/news/story/7323/9508714 ;
  ETtoday, 〈文湖線將全線更新　新列車採「四節貫穿」、載客量增30%至574人〉,
  鄭佩玟, 7 May 2026 — https://www.ettoday.net/news/20260507/3162180.htm ;
  聯合新聞網 — https://udn.com/news/story/7266/9507598

---

## 15. Source quality audit

Every claim now published on the site, assessed on the four criteria asked for.

### The headline numbers

**Of the 20 distinct sources cited on the live site: 7 primary, 13 secondary —
35% primary.**

Weighted by claims rather than by source, it is worse. Counting the claims the
site publishes with a citation attached:

| | Claims | Share |
| --- | --- | --- |
| Cited to a primary source | 47 | 37% |
| Cited to a secondary source | 81 | 63% |

**Of the secondary citations, 62 of 81 — three quarters — are to one publisher:
Chinese Wikipedia.** That is the single largest structural weakness on the site,
and it is worse than it looks, because several of the Chinese Wikipedia articles
used carry **no reference section at all**.

### The primary sources, and what each carries

| Source | What it settles | Persistence | Archive? |
| --- | --- | --- | --- |
| MOTC TDX | Station names, codes, order, coordinates, run times, route length | **Committed to this repo** — cannot rot | Already done |
| DORTS 文山內湖線 | Section lengths, station counts, underground running, both depot areas, opening dates | Government CMS behind a query-string id. **Fragile.** | **Yes — priority** |
| TRTC 路線及班距 | Headways, operating hours, run time | Query-string id; content changes with the timetable | Yes, with a date |
| TRTC 安全設備 | Platform screen doors | Query-string id | Yes |
| TRTC news release (seats) | The seat programme | News archives get pruned | **Yes — priority** |
| Taipei City Government release | The seat programme | As above | Yes |
| Lagardère press release | Siemens/Matra ownership | Corporate archive, 1998. Has survived 28 years. | Yes |
| EC Case COMP/M.2139 | Bombardier/Adtranz | EU legal record. As permanent as anything gets. | No need |

**Not one of the DORTS or TRTC URLs is a stable identifier.** They are all
`cp.aspx?n=<hex>`, a CMS node id. A site migration breaks every one of them, and
there would be no way to tell which page had been cited. **Every one should be
captured to the Internet Archive**, with the snapshot recorded alongside the live
URL. That is a mechanism this site does not have and should.

### Did I check whether the secondary sources cite primaries accurately?

**Asked for explicitly, because the line-colour episode proved that citations to
official sources can themselves be wrong. The honest answer is: partly, and here
is exactly how far.**

| Secondary source | Cites a primary? | Did I verify it? |
| --- | --- | --- |
| 〈龐巴迪INNOVIA APM 256型電聯車〉 | Yes — Bombardier product pages, TRTC training documents | **No. I could not.** The Bombardier URLs were retired after the Alstom acquisition. The primary layer beneath this article is currently unreachable. |
| 〈台北捷運VAL256型電聯車〉 | **No reference section at all** | N/A — there is nothing to check |
| 〈木柵機廠〉 | No usable references | N/A |
| 〈內湖機廠〉 | Four numbered references, not resolved | **No** |
| 〈文湖線〉 | Yes, extensively | **Partly.** Cross-checked against DORTS for lengths, station counts and underground running: **they agree.** Not checked for the speeds, the 1,880 mm or the 80-second headway. |
| en.wikipedia VAL256 / Innovia | Yes, five references | **No.** Used as independent corroboration of the Chinese articles rather than as a source in its own right. |
| Railway Technology (Lille VAL) | Trade press, no citations | N/A |
| 自由時報 via 大紀元 | It *is* the record of the judgment | The judgment itself was not retrieved |
| 巷仔口社會學 | The author's own doctoral thesis | **No.** Thesis not retrieved. |

**So: two verified cross-checks, both against DORTS, both of which held.**
Everything else rests on the secondary source's own accuracy. That is not
nothing — the DORTS cross-check is what confirmed the underground pair and
identified the 25.7 km — but it is far short of the standard the line-colour
episode set.

### Confidence, as levels

Of the claims now published on the site with a citation:

| Level | Count | What it means |
| --- | --- | --- |
| **High** | 61 | Primary, or two independent secondary sources on a specific figure |
| **Medium** | 54 | One good secondary source, internally consistent, nothing contradicting |
| **Low** | 13 | Single source, sources disagree, or the figure is provisional |

The **Low** group is where the site is exposed: Muzha's 84-pair capacity and 12
roads; its third-level grade; both fleets being based there; the 80-second
minimum headway; the 440 train capacity; and every figure in the renewal
programme.

### The weakest links, in order

1. **Chinese Wikipedia carries 63% of the site's cited claims, and the two
   rolling-stock articles have no reference sections.** Every dimension,
   capacity, traction and braking figure on both fleet pages is one unreferenced
   encyclopedia article deep, corroborated only by an English article that may
   share its ancestry.
2. **Muzha Depot is entirely single-sourced** apart from its area. Twelve roads,
   84 pairs, the third-level grade, both fleets — all one article, no references.
3. **Nothing in this project has been archived.** Six of the eight primary
   sources are CMS pages behind opaque query strings.
4. **The renewal figures are news reporting of a verbal exchange.** They are
   marked provisional and should stay that way until a tender exists.
5. **The guidance correction rests on two secondary sources.** They agree, and
   the direction of the error is explicable, but the site has now published an
   engineering correction without an engineering source.

### The single most valuable thing available and unread

**DORTS's 捷運工程叢書** at `ebook.dorts.gov.taipei` — a published technical
series by the builder, browsable, one volume of which (no. 22,
〈捷運號誌系統實務〉) surfaced during this run's signalling searches. It is
primary, it is Taiwanese, it is about exactly the subjects the site is weakest
on, and nobody has opened it. Everything above about depots, signalling
generations and guideway construction could plausibly be upgraded from
encyclopedia-grade to builder-grade by reading it.
