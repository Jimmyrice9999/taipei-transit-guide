# Research corpus warning

This is a lead index, not a source. Every claim below was checked against the
full primary page at the URL given on 14 August 2026. The generated station
records still supply the TDX identity, address, district, coordinates and
running data; this file records the operator and builder material added to the
station pages. `TBC` means the checked primary material did not establish it.

---

# Tamsui–Xinyi Line stations (R02–R28, R22A)

## Audit before editing

The 28 generated pages all had a TDX postal address, district and coordinates.
None had hand-researched structure, exit details or a station research record.
TDX supplied interchange codes at R05, R07, R08, R10, R11 and R13; R22 carried
its own line code (`R`) as an unusable self-interchange. The implementation
filters that self-code and records the operator’s New Beitou branch
relationship separately.

The rendered station-page baseline was 10,275 whitespace-delimited words in
total (357–378 per page). After the pass it was 20,321 words (672–799 per
page), an increase of 10,046 words. The increase is mostly the operator’s
numbered exit destinations and facility descriptions; the new rows are not
claims that a source did not publish.

## What is established

### Operator station information

The Taipei Rapid Transit Corporation’s full station pages were fetched for all
28 records. Each page exposes the station address and the labelled sections
`車站名稱`, `出口資訊`, `無障礙電梯位置`, `服務台位置`, `飲水機位置`, `廁所位置`,
`親子/無障礙廁所位置`, `哺集乳室位置`, `自行車進出站資訊` and
`轉乘停車資訊`. The numbered exit rows and accessibility/facility values on
those pages are the evidence for the corresponding station-page facts.

| Codes | Full primary page | Source id used by the generated page |
|---|---|---|
| R02 | https://web.metro.taipei/pages2026/WebStation/099/1 | `trtc-r02-station` |
| R03 | https://web.metro.taipei/pages2026/WebStation/100/1 | `trtc-r03-station` |
| R04 | https://web.metro.taipei/pages2026/WebStation/101/1 | `trtc-r04-station` |
| R05 | https://web.metro.taipei/pages2026/WebStation/011/1 | `trtc-r05-station` |
| R06 | https://web.metro.taipei/pages2026/WebStation/103/1 | `trtc-r06-station` |
| R07 | https://web.metro.taipei/pages2026/WebStation/134/1 | `trtc-r07-station` |
| R08 | https://web.metro.taipei/pages2026/WebStation/042/1 | `trtc-r08-station` |
| R09 | https://web.metro.taipei/pages2026/WebStation/050/1 | `trtc-r09-station` |
| R10 | https://web.metro.taipei/pages2026/WebStation/051/1 | `trtc-r10-station` |
| R11 | https://web.metro.taipei/pages2026/WebStation/053/1 | `trtc-r11-station` |
| R12 | https://web.metro.taipei/pages2026/WebStation/054/1 | `trtc-r12-station` |
| R13 | https://web.metro.taipei/pages2026/WebStation/055/1 | `trtc-r13-station` |
| R14 | https://web.metro.taipei/pages2026/WebStation/056/1 | `trtc-r14-station` |
| R15 | https://web.metro.taipei/pages2026/WebStation/057/1 | `trtc-r15-station` |
| R16 | https://web.metro.taipei/pages2026/WebStation/058/1 | `trtc-r16-station` |
| R17 | https://web.metro.taipei/pages2026/WebStation/059/1 | `trtc-r17-station` |
| R18 | https://web.metro.taipei/pages2026/WebStation/060/1 | `trtc-r18-station` |
| R19 | https://web.metro.taipei/pages2026/WebStation/061/1 | `trtc-r19-station` |
| R20 | https://web.metro.taipei/pages2026/WebStation/062/1 | `trtc-r20-station` |
| R21 | https://web.metro.taipei/pages2026/WebStation/063/1 | `trtc-r21-station` |
| R22 | https://web.metro.taipei/pages2026/WebStation/064/1 | `trtc-r22-station` |
| R22A | https://web.metro.taipei/pages2026/WebStation/065/1 | `trtc-r22a-station` |
| R23 | https://web.metro.taipei/pages2026/WebStation/066/1 | `trtc-r23-station` |
| R24 | https://web.metro.taipei/pages2026/WebStation/067/1 | `trtc-r24-station` |
| R25 | https://web.metro.taipei/pages2026/WebStation/068/1 | `trtc-r25-station` |
| R26 | https://web.metro.taipei/pages2026/WebStation/069/1 | `trtc-r26-station` |
| R27 | https://web.metro.taipei/pages2026/WebStation/070/1 | `trtc-r27-station` |
| R28 | https://web.metro.taipei/pages2026/WebStation/071/1 | `trtc-r28-station` |

These are PRIMARY, High confidence: the operator’s own station pages were read
in full and publish the current exit and facility fields. The repeated field
labels above are preserved in the original language so the generated compact
English summaries can be checked against the source rather than a snippet.

### Guideway structure and opening chronology

**Source:** “Tamsui–Xinyi Line route and stations” / `淡水信義線` — Taipei
City Department of Rapid Transit Systems (`臺北市政府捷運工程局`), PRIMARY,
High confidence.

URL: https://www.dorts.gov.taipei/cp.aspx?n=0AC527D5FC9E596A&s=A60BB323F07BC768

Original sentence: `淡水線北起淡水站沿原北淡鐵路南行至北投以北之貴子坑溪為地面段；自貴子坑溪堤起高架南行跨基隆河，過民族西路下降進入地下至中正紀念堂站。`

This establishes the broad structure: R23–R27 are the ground-level northern
group, the route rises from the Guizikeng Creek embankment and crosses the
Keelung River, and the southern Taipei section descends underground. The same
page publishes the opening chronology: `淡水站至中山站於86年2月12日起初勘、86年3月21日履勘、於86年3月28日通車營運，86年12月25日再通車至台北車站...至於台北車站至中正紀念堂站，於87年12月24日...`.

**Source:** “Xinyi Line extension project” / `信義線東延段` — DORTS,
PRIMARY, High confidence.

URL: https://www.dorts.gov.taipei/cp.aspx?n=0ac527d5fc9e596a&s=CB7BC86DBDA1E44D

Original sentence: `信義線自羅斯福路中正紀念堂站往東...設7座地下車站（含中正紀念堂站），全線採地下方式建造...`

The page also records that the CKS Memorial Hall–Xiangshan section opened on
24 November 2013. It supports the underground structure and opening date for
R02–R07. R08–R09 use the route page’s 24 December 1998 Taipei Main–CKS
opening; R10 uses 25 December 1997; R11–R28 use the 28 March 1997
Tamsui–Zhongshan opening. R22A has no station-specific opening date in the
checked material and remains TBC.

**Source:** “Tamsui–Xinyi Line station architectural design” / `捷運工程叢書
精進版－34 捷運高架車站建築造型設計` — DORTS, PRIMARY, High confidence.

URLs: https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page41.html,
https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page43.html,
https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page44.html,
https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page45.html,
https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page46.html

Original terms read on the full pages include `島式月台`, `側式月台`, `四股道`
and the station-specific exit descriptions. These pages establish the elevated
island-platform treatment for R14–R21, the mixed one-island/two-side-platform
four-track arrangement at R22, the island terminal at R22A, and the island
terminal at R28. They also record later exit additions at several stations.
The exact platform form and track count remain TBC where the checked page did
not publish them; no count was inferred from a map or from the word “island”.

R13 is recorded as the builder’s shallow-cut underground example. R23–R27 are
recorded as at-grade from the route classification and station-group material;
their individual platform forms and track counts remain TBC.

### Depot

**Source:** “Tamsui–Xinyi Line depot planning” / `捷運工程叢書 精進版－27 捷運機廠規劃與設計` — DORTS, PRIMARY, High confidence.

URL: https://ebook.dorts.gov.taipei/ebook/no27/files/basic-html/page27.html

Original sentence: `淡水信義線設有一座機廠，為北投機廠，位於北投區中央北路三段。`

The pages therefore say that Beitou Depot is the line’s main depot. They do
not assign individual station stretches or train rosters, so every station
page says “station-specific roster assignment: TBC” rather than claiming that
the nearest depot serves that station.

### Public art

The following are official DORTS public-art pages, all PRIMARY and High
confidence because the builder publishes the title, artist and medium itself:

| Station | Established work | Original evidence | URL |
|---|---|---|---|
| R02 Xiangshan | *心蛙朵朵開* — 江洋輝、麻粒國際文化試驗股份有限公司; stainless steel and epoxy resin; 2013 | `作品名稱`, `作者`, `材質`, `完成日期` and `作品位置` fields | https://www.dorts.gov.taipei/cp.aspx?n=2E32DBDC65CAA983&s=E09DC8AE77E47420 |
| R03 Taipei 101 | *相遇時刻* — 黃心健; interactive mechanical/computer/sensor/network, glass and stainless steel; 2013 | same official fields | https://www.dorts.gov.taipei/cp.aspx?n=2E32DBDC65CAA983&s=BB2C701F4B7EA04A |
| R04 Xinyi Anhe | *水城臺北* — 吳耿禎; laminated tempered glass; year TBC | same official fields; no year published | https://www.dorts.gov.taipei/cp.aspx?n=2E32DBDC65CAA983&s=D058D336AA77862B |
| R05 Daan | *飛天傳奇* — 賴純純; ceramic panels, stainless steel and acrylic glass; year TBC | same official fields; no year published | https://www.dorts.gov.taipei/cp.aspx?n=2E32DBDC65CAA983&s=C09624CB5C9D59D4 |
| R06 Daan Park | *大安之花*, *秋葉旅人*, *春光乍現*, *四季*; artists and materials as published; years TBC | same official fields; no years published | https://www.dorts.gov.taipei/cp.aspx?n=2E32DBDC65CAA983&s=36B82FCFF7957990 |
| R09 NTU Hospital | *手之組曲* — 李光裕; copper and granite; November 1998 | same official fields | https://www.dorts.gov.taipei/cp.aspx?n=2E32DBDC65CAA983&s=C32B3BEE19B6BC1F |
| R12 Shuanglian | *雙連‧行遠* — 井婉婷、楊弼方; enamel panels; 16 September 1996 | same official fields | https://www.dorts.gov.taipei/cp.aspx?n=2E32DBDC65CAA983&s=DE643CF3F6E0171F |

No official station-specific public-art entry was found in the checked DORTS
material for R07, R08, R10, R11, R13–R28. Those pages therefore show TBC. A
missing entry is not treated as proof that a station has no art.

### Station-prose audit — 17 August 2026

The following prose was added only where a full primary page supplied context
that is not already in the generated facts and specs. Each source is a DORTS
public-art record, PRIMARY, High confidence: the builder publishes the work’s
description and metadata on the station-specific page.

- **R02 Xiangshan:** The full record starts from tree frogs and childhood
  memories, represents the richness of the local natural environment, and
  invites visitors to experience its distinctive ecology. Original evidence:
  `藝術家由樹蛙、童夢記憶出發，以綻放愉悅的造型姿態，表現出本地自然環境的豐碩與美好。` and
  `在自然輕快的童趣色彩氛圍裡，體驗本地生態的獨特性。` URL:
  https://www.dorts.gov.taipei/cp.aspx?n=2E32DBDC65CAA983&s=E09DC8AE77E47420
- **R03 Taipei 101/World Trade Center:** The record describes a 100-metre
  entrance passage with twelve interactive, book-like flip-card installations
  that connect two imagined futures; it also records an invited competition and
  NT$12,000,000 cost. Original evidence: `作品位置：穿堂層入口通道牆面及天花板` and
  `徵選方式：邀請比件`; the description begins `一百公尺長的通道`. URL:
  https://www.dorts.gov.taipei/cp.aspx?n=2E32DBDC65CAA983&s=BB2C701F4B7EA04A
- **R04 Xinyi Anhe:** The record describes the work as a dialogue between old
  and new time, using Taipei’s former waterways and a future collage of plants,
  city corners and planets. Original evidence: `「新舊時光的對話」` and
  `臺北盆地原來多河流溝渠`. URL:
  https://www.dorts.gov.taipei/cp.aspx?n=2E32DBDC65CAA983&s=D058D336AA77862B
- **R05 Daan:** The record presents the work as a poetic passage through
  mountains, water and the city, from morning to night, with light, sound, love
  and imagined space. Original evidence: `飛天穿越山林 水涯來到都會` and
  `從清晨到黃昏 到夜裡 神祕的夢境`. URL:
  https://www.dorts.gov.taipei/cp.aspx?n=2E32DBDC65CAA983&s=C09624CB5C9D59D4
- **R06 Daan Park:** The record says the interactive Daan Flower uses Taipei’s
  city flower, the azalea, and asks visitors to awaken it, establishing a direct
  connection between people and nature. Original evidence: `藝術家運用臺北市花－杜鵑花創作`
  and `這是一朵需要由觀者喚醒的花朵`. URL:
  https://www.dorts.gov.taipei/cp.aspx?n=2E32DBDC65CAA983&s=36B82FCFF7957990
- **R07 Dongmen:** Full DORTS route and Xinyi-extension pages, the DORTS
  public-art index, and the full TRTC R07 station page were checked. They
  supplied current structured station information but no station-specific
  architecture, public-art description or incident/history suitable for body
  prose, so the page correctly remains empty. This is a search result, not a
  claim that R07 has no artwork. URLs:
  https://www.dorts.gov.taipei/cp.aspx?n=0AC527D5FC9E596A&s=A60BB323F07BC768
  and https://www.dorts.gov.taipei/cp.aspx?n=0ac527d5fc9e596a&s=CB7BC86DBDA1E44D

The five R02–R06 entries above use the source id for their DORTS art page;
R07 has no prose source id because no prose claim was published.

### Station-prose audit — R08–R13 batch, 17 August 2026

The full TRTC station pages for R08–R13 were fetched and read on 17 August
2026. The R09 and R12 DORTS public-art pages were also fetched in full. R08,
R10, R11 and R13 remain correctly empty: their full operator pages add current
exit, facility and interchange context already represented in the facts and
specs, but no station-specific siting decision, former-site history,
construction difficulty, rename, incident or public-art narrative suitable for
body prose. No image or linked station sheet was fetched.

| Station | Result | Full station page |
|---|---|---|
| R08 CKS Memorial Hall | Correctly empty | https://web.metro.taipei/pages2026/WebStation/042/1 |
| R09 NTU Hospital | 1 sentence | https://web.metro.taipei/pages2026/WebStation/050/1 |
| R10 Taipei Main | Correctly empty | https://web.metro.taipei/pages2026/WebStation/051/1 |
| R11 Zhongshan | Correctly empty | https://web.metro.taipei/pages2026/WebStation/053/1 |
| R12 Shuanglian | 1 sentence | https://web.metro.taipei/pages2026/WebStation/054/1 |
| R13 Minquan W. Rd. | Correctly empty | https://web.metro.taipei/pages2026/WebStation/055/1 |

**R09 source:** DORTS, `淡水信義線`, PRIMARY, High confidence,
https://www.dorts.gov.taipei/cp.aspx?n=2E32DBDC65CAA983&s=C32B3BEE19B6BC1F.
The full page records `以生命探索的角度來思維，將人生旅途比喻為捷運旅程` and
`書寫了台大醫院站地緣的歷史與人文`.

**R12 source:** DORTS, `淡水信義線`, PRIMARY, High confidence,
https://www.dorts.gov.taipei/cp.aspx?n=2E32DBDC65CAA983&s=DE643CF3F6E0171F.
The full page records `雙連站之公共藝術品為室內裝修之一部份` and says the work
was selected `自53件參選作品中脫穎而出`; it describes the linked chronology as
reflecting `雙連地區歷史的變遷`.

The current full re-fetch of the DORTS route URL
`https://www.dorts.gov.taipei/cp.aspx?n=0AC527D5FC9E596A&s=A60BB323F07BC768`
returned a cache-miss failure. No new route-level claim was promoted from
that failed fetch; the route material already established earlier in this
file remains separately sourced and dated.

### Engineering and landmarks

The official engineering-book page documents Jiantan’s suspended column-free
roof, Beitou’s space-truss/glass-curtain treatment and Tamsui’s design context
on the old TRA site, including the Red Castle brick arch and colonial/local
architectural references. Those are the only station-specific engineering
histories asserted. Other stations show TBC.

Adjacent landmarks are transcribed only where TRTC names them in its exit or
facility fields: for example Xiangshan Park, Taipei 101, World Trade Center,
Dongmen Post Office, Chiang Kai-shek Memorial Hall, National Library, NTU
Hospital, the National Taiwan Museum, Beitou Depot, HeXin Hospital, Guandu
Elementary School, Hongshulin Education Center and the Golden Riverside. A
road name alone is not promoted to a landmark.

## Conflicts

1. **Taipei Main interchange metadata.** The current TRTC R10 station page
   identifies the station’s R and BL service, while the DORTS route table also
   lists the Taoyuan Airport Line in its Taipei Main station row. TDX carries
   only `BL`. The station page retains the current operator/TDX BL interchange;
   the DORTS Airport entry is recorded here as a conflict, not silently merged.

2. **Beitou’s self-code.** TDX carries `R` in R22’s interchange array. That is
   the station’s own line, not a distinct usable transfer. TRTC’s full R22 page
   identifies the New Beitou Branch relationship instead. The generated page
   removes the self-code and prints a separately sourced “New Beitou Branch”
   row. This is a data-semantics conflict, not a disagreement over geography.

3. **Opening evidence for R22A.** The route page’s 28 March 1997 chronology
   covers the main Tamsui–Zhongshan segment, while the checked station page and
   engineering pages do not publish a specific Xinbeitou opening date. The
   station page therefore shows TBC; no main-line date was copied onto the
   branch by inference.

No conflicting exit count was found when the full TRTC station pages were
compared with the DORTS station material for the stations where both publish a
count. Differences between TDX’s fields and the operator’s facility text are
field-coverage differences, not competing values.

## Checked and failed

- **Current DORTS route re-fetch for the R08–R13 audit** — Checked 2026-08-17.
  `https://www.dorts.gov.taipei/cp.aspx?n=0AC527D5FC9E596A&s=A60BB323F07BC768`
  returned a cache-miss failure. No claim was published from that failed
  fetch; the earlier full-page route evidence remains cited in the established
  section with its original access date.
- **Station naming** — Full current TRTC station pages and the DORTS
  route/project pages were checked for construction-era names, rename dates and
  rename announcements. The checked primary material publishes current names
  only; all 28 naming fields remain TBC. Checked 14 August 2026.
- **Paid-area versus street transfers** — Full operator pages identify transfer
  lines and facility locations but do not establish a consistent paid-area or
  street-transfer classification. Transfer arrangement remains TBC rather than
  inferred from station geometry. Checked 14 August 2026.
- **Station-specific depot assignment** — DORTS establishes Beitou as the
  line’s main depot, not a station-by-station roster. The pages retain that
  distinction and mark the individual assignment TBC. Checked 14 August 2026.
- **Unpublished platform details for the remaining stations** — The checked sources establish the
  published island/side/four-track layouts only where stated in the
  engineering-book pages. R02–R13 and R23–R27 retain TBC for details the
  sources do not publish. Checked 14 August 2026.
- **Unlisted public-art entries for the remaining stations** — No official station-specific entry was found in the checked
  DORTS public-art material for R07, R08, R10, R11, R13–R28. This records a
  failed search, not an assertion that those stations have no artwork. Checked
  14 August 2026.
- **R04 Xinyi Anhe public-art URL** — The earlier corpus URL ending in
  `D058D336AA77862` returned HTTP 404 on a full fetch. The current DORTS public-
  art index links `D058D336AA77862B`, whose full page returned HTTP 200 and
  contains the work record. The source URL in the station overlay and table was
  corrected to the current link; the failed URL remains recorded here. Checked
  17 August 2026.
- **Incoming report(5) bundle: five Tamsui–Xinyi lead records** — the file supplies no literal HTTP(S) URL or bibliography, so its corridor, Zhongyi history, exit-count example, Shuanglian artwork and construction-memorial claims were not independently fetched or carried forward. Checked 17 August 2026.
- **Incoming report(5) reference `[14]`** — the lead names a TRTC station-information page but supplies only a numeric placeholder, so the alleged dynamic-page failure cannot be reproduced or verified. Checked 17 August 2026.
- **Incoming report(5) reference `[25]`** — the lead names a Tamsui historical-data site but supplies only a numeric placeholder, so the alleged access denial cannot be reproduced or verified. Checked 17 August 2026.
- **Incoming report(5) assertion that all cited URLs were opened** — inspection found zero URL strings, so the assertion is unsupported and is not a verification result. Checked 17 August 2026.

## Stated gaps

The pages still cannot state most rename histories, paid/street transfer mode,
individual train-roster depot assignment, or platform track counts where the
primary pages do not publish them. A city gazette or operator announcement
would settle the naming gap; a station-level signalling/platform plan would
settle the remaining track-layout gaps; an operator operations or maintenance
record would settle the roster assignment.

---

## Unverified incoming lead appendix — `deep-research-report(5).md`

> This appendix preserves an external lead only. It is explicitly unverified,
> and none of its claims is evidence or a replacement for the existing
> primary-source records above.

The report leads concern the old TRA Tamsui corridor, Zhongyi’s TRA and MRT
history, one Zhongshan exit count, Shuanglian public art, and a memorial for
construction deaths. It names DORTS, TRTC and a Taipei City Government source,
but supplies no URL; `[14]` and `[25]` are unresolved placeholders.
