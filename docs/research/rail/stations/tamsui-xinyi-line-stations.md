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

### Station-prose deepening — R08–R13 batch, 18 August 2026

The widened search fetched and read the following primary pages in full.
Search snippets were used only to locate them and are not evidence.

#### Initial-network station type and architecture

**Source:** “Initial-network station types and shallow-cut stations” /
`捷運車站規劃與設計實務` — DORTS, PRIMARY, High confidence.

URL: https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page31.html

Original-language text checked in full:

> `淺挖式車站係軌道及月臺布設於地下，穿堂層則布設於地面或月臺層側方，通常係為配合軌道定線高程、地質緣故不適宜深挖或為節省建造成本；例如松山新店線的七張站、新店區公所站、板南線昆陽站及淡水信義線的民權西路站均為此類車站。`

This establishes the definition and the builder’s classification of R13 as
shallow-cut. It does not establish which of the listed reasons controlled the
Minquan W. Rd. design.

**Source:** “Interchange-station planning in the Taipei Metro” /
`捷運車站規劃與設計實務` — DORTS, PRIMARY, High confidence.

URL: https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page36.html

Original-language text checked in full:

> `交會站是指車站有兩條或兩條以上之路線經過，旅客可經由其中一條路線轉至其他路線。`

> `交會站的布設相當複雜，且轉乘旅客將大量地於站內流動，因此需就路線方向及不同月臺型式間的選擇特別考量，以增加其轉乘之便利性及縮短轉乘動線長度。`

> `目前市中心區民權西路站（淡水信義線及中和新蘆線交會）、中山站（淡水信義線及松山新店線交會）、台北車站（淡水信義線及板南線交會）、...中正紀念堂站（淡水信義線及松山新店線交會）...`

This establishes the central interchange group and the planning rationale used
for R08, R10, R11 and R13.

**Source:** “Non-parallel interchange planning” /
`捷運車站規劃與設計實務` — DORTS, PRIMARY, High confidence.

URL: https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page37.html

Original-language text checked in full:

> `若二條路線軌道平面方向不同，則該交會站為非平行交會站，例如淡水信義線與中和新蘆線之民權西路站、淡水信義線與松山新店線之中山站、板南線與淡水信義線之台北車站...`

> `此類車站其站內轉乘旅客之動線必須透過垂直動線於不同高程之月臺進行交會轉乘。`

This supports the non-parallel interchange prose without inferring a paid-area
or street-transfer arrangement.

**Source:** “Initial-network station architecture and individual variation” /
`捷運車站規劃與設計實務` — DORTS, PRIMARY, High confidence.

URL: https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page136.html

Original-language text checked in full:

> `初期路網各路線車站內部硬體設施已建立在統一化之基本架構上從事規劃設計，惟為尊重各細部設計團隊之設計意念並展現出車站個別風格，在主題表現手法、材料搭配運用及色彩計劃等方面仍賦予相當大的彈性發揮空間。`

> `例如龍山寺站、國父紀念館站、市政府站、小南門站、中正紀念堂站、民權西路站等都是明顯的案例。`

This establishes the standardised base/individual variation distinction used for
R08 and R13; it is not treated as a station-specific contract or material list.

**Source:** “Chiang Kai-Shek Memorial Hall station architectural theme” /
`捷運高架車站建築造型設計` — DORTS, PRIMARY, High confidence.

URL: https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page26.html

Original-language text checked in full:

> `較顯著案例為蘆洲線以蘆葦、白鷺鷥為主題之造型、中正紀念堂站之藍頂白牆、亞東醫院站林家花園之庭院曲牆設計等。`

This is the primary support for R08’s blue-roof/white-wall design sentence.

#### Public-art selection and incident evidence

**Source:** “Initial-network public-art station selection” /
`捷運車站規劃與設計實務` — DORTS, PRIMARY, High confidence.

URL: https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page216.html

Original-language text checked in full:

> `基於時間、金錢及人力的考量，在初期路網每條捷運線僅能挑選幾個重點車站設置公共藝術。`

> `新店線辦理之車站中，臺大醫院站地緣重要，中正紀念堂站及古亭站皆為交會站，而公館站為木柵、新店地區的公車轉乘區，新店站則為端點站，皆具備前述特質。`

> `南港線辦理之車站中，台北車站為交會站...`

> `獲選之車站多屬地下站，在穿堂層及月臺層之垂直動線間都有挑空區，作品放在此旅客必經之地最可被大多數人看到，達到視覺焦點的效果。`

This distinguishes station selection criteria from proof that a particular
current station has an installed work.

**Source:** “Initial-network public-art funding and selection methods” /
`捷運車站規劃與設計實務` — DORTS, PRIMARY, High confidence.

URL: https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page218.html

Original-language text checked in full:

> `台北車站經費來源及權責複雜，雖終於釐清由東工處第二特別預算南港線（西段）土木建築工程費項下支應...可惜因該站首獎從缺。`

> `公開徵選...前者有淡水線之「雙連·行遠」...`

> `邀請比件...案例有淡水線之「手之組曲」...`

This supports the R09/R12 procurement distinction and records Taipei Main’s
separate Nangang-line programme without treating its budget as an R10 station
artwork value.

**Source:** “Nari typhoon flood path through Taipei Metro” /
`捷運土木工程實務` — DORTS, PRIMARY, High confidence.

URL: https://ebook.dorts.gov.taipei/ebook/no4/files/basic-html/page181.html

Original-language text checked in full:

> `洪水由臺鐵松山車站附近之隧道出土段灌入，一路漫延至臺鐵臺北車站，當水位超過其月臺面後，經由與捷運相連通之樓梯、電扶梯向下灌入位於地下三、四層之捷運淡水線，並向南漫流至新店線中正紀念堂站（G11），向北漫流至捷運行控中心（CCR）、中山站（R14）而止於雙連站（R15）。`

This establishes the R08/R10/R11/R12 incident prose and preserves the source’s
legacy station notation as a separate measurement.

#### Zhongshan and Minquan W. Rd. station-specific design

**Source:** “Zhongshan station design and the ‘Happy Transfer’ theme” /
`松山線各車站建築設計簡介` — DORTS, PRIMARY, High confidence.

URL: https://ebook.dorts.gov.taipei/JRTST/ebook/no52/files/basic-html/page66.html

Original-language text checked in full:

> `本站為捷運淡水線與松山線共構交會之轉乘站，基地週邊的都市風貌，主要是隨著淡水線鐵路所塑造出的；在鐵路拆除改建成捷運淡水線，促使老舊社區逐步更新。`

> `故本站之設計主題為「快樂轉運」...`

> `牆面採用以年輕族群所認同的流行消費文化與象徵生命力旺盛的重複圖案設計為主軸。`

The page prints `G16/R14`; the current registry is R11. This is recorded as a
notation conflict below, not silently rewritten in the source evidence.

**Source:** “Zhongshan station joint-development public realm” /
`臺北捷運土地開發案例解析（一）` — DORTS, PRIMARY, High confidence.

URL: https://ebook.dorts.gov.taipei/ebook/no20/files/basic-html/page104.html

Original-language text checked in full:

> `基地所在的南京西路為臺北市東西向主要幹道，銜接中山北路及承德路，構成區域路網向東、西、南、北延伸；捷運中山站屬捷運轉乘站，為捷運淡水線、松山線的轉乘點。`

> `於基地一樓設置捷運廣場、展演廊道、MRT光影穿廊及公共藝術人行綠帶等提供當地社區鄰近居民作集會、休閒及交誼服務性之用。`

> `城市．光影與生命—漫遊都會的綠風光廊，以「陽光」、「綠」、「風」帶入基地。`

This supports the joint-development and public-realm sentences for R11.

**Source:** “Zhongshan station art-integrated design example” /
`捷運技術 第50期` — DORTS, PRIMARY, High confidence.

URL: https://ebook.dorts.gov.taipei/JRTST/ebook/no50/files/basic-html/page147.html

Original-language text checked in full:

> `如中山站的晶透...將工程與藝術結合，塑造地區節點新風貌。`

This is a confirmed mention in a technical article, but it does not supply the
complete artist/date/material record required for the station art field.

**Source:** “Zhongshan–Shuanglian linear-park improvement” /
`捷運車站規劃與設計實務` — DORTS, PRIMARY, High confidence.

URL: https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page199.html

Original-language text checked in full:

> `如於106年起在淡水線捷運中山站及雙連站之間，結合臺北市政府城市博物館計畫，進行心中山線形公園改造工程。`

This supports the later public-realm context for R11 and R12.

**Source:** “Minquan W. Rd. station architectural design” /
`捷運車站規劃與設計實務` — DORTS, PRIMARY, High confidence.

URL: https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page147.html

Original-language text checked in full:

> `民權西路站區域環境仍延續舊臺北後站的商業氣息及大龍峒、雙連、圓山等地區之風華種種，而後續的都市發展，又植入不少新都市意象的表率，具「緬懷過去」及「發展未來」的故事性，故車站的建築設計以該區域性特色為設計原意，並以「後現代」藝術為設計主題。`

> `出入口造型延續該區段標共同的建築語彙，以鋼構架鑲嵌玻璃，表現輕巧及減少量體壓迫感；通風井X透過拱門式假牆將所有量體串聯成一整體性建築物。`

> `車站內通道牆面同樣採用玻璃馬賽克拼貼，將舊建築與新建築交織融合；月臺層軌道側牆以烤漆琺瑯版方式，呈現多樣化且配合傳統建築簡樸色彩的圖樣。`

This supports R13’s station-specific architecture and does not supply a
station-level contractor or final account.

#### R08–R13 disposition

- **R08 Chiang Kai-Shek Memorial Hall:** The blue-roof/white-wall architectural
  treatment, interchange planning role, public-art selection rationale and
  Nari flood-path role are established. The current station-level executed-art
  record, civil contractor and final account remain TBC.
- **R09 NTU Hospital:** The public-art title, artist, date, location, invited
  comparison, cost, component names, component materials/dimensions and
  geographic-selection rationale are established. A station-level civil
  contractor and final account remain TBC.
- **R10 Taipei Main:** Non-parallel interchange planning, Nangang-programme
  public-art selection/funding scope and the Nari flood entry path are
  established. The Nangang art budget is not treated as an R-line station art
  value; a current R-line station artwork record and station-level civil account
  remain TBC.
- **R11 Zhongshan:** The railway-corridor history, “Happy Transfer” design,
  joint-development public realm, `晶透` technical-article mention, linear-park
  improvement, legacy-code notation and Nari flood path are established. The
  complete current art record, station-level civil contractor and final account
  remain TBC.
- **R12 Shuanglian:** The artwork’s title, artists, dimensions, enamel medium,
  completion date, open selection, cost, 53-entry field, historical chronology,
  linear-park context and Nari incident notation are established. A
  station-level civil contractor and final account remain TBC.
- **R13 Minquan W. Rd.:** The shallow-cut classification, non-parallel
  interchange planning, old-Taipei context, Postmodern theme, entrance and
  ventilation forms, mosaic/enamel treatment and standardised-base/individual-
  variation distinction are established. The factor controlling the shallow-cut
  choice, station-level contractor, final account and art record remain TBC.

### Station-prose audit — R14–R19 batch, 17 August 2026

The full TRTC station pages for R14–R19 were fetched and read on 17 August
2026. The full DORTS engineering-book page for this elevated station group and
the line’s public-art material were checked against the existing research
record. R14 Yuanshan, R15 Jiantan, R16 Shilin, R17 Zhishan, R18 Mingde and R19
Shipai remain correctly empty: the full pages add current exit and facility
context, while the engineering material supplies line-group platform/structure
details already represented in specs, not a station-specific siting decision,
prior-site history, exit decision, rename, incident or local-history narrative
for body prose. No image or linked station sheet was fetched.

| Station | Result | Full station page |
|---|---|---|
| R14 Yuanshan | Correctly empty | https://web.metro.taipei/pages2026/WebStation/056/1 |
| R15 Jiantan | Correctly empty | https://web.metro.taipei/pages2026/WebStation/057/1 |
| R16 Shilin | Correctly empty | https://web.metro.taipei/pages2026/WebStation/058/1 |
| R17 Zhishan | Correctly empty | https://web.metro.taipei/pages2026/WebStation/059/1 |
| R18 Mingde | Correctly empty | https://web.metro.taipei/pages2026/WebStation/060/1 |
| R19 Shipai | Correctly empty | https://web.metro.taipei/pages2026/WebStation/061/1 |

The shared full engineering source is DORTS, `捷運工程叢書 精進版－34
捷運高架車站建築造型設計`, PRIMARY, High confidence,
https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page43.html.
It was used only for the elevated-group facts already recorded; no additional
sentence survived the station-specific prose test.

### Station-prose deepening — R14–R19 batch, 18 August 2026

The prior audit fetched and read the six full TRTC station pages and DORTS
page 43, but found only group-level engineering material. This deepening pass
fetched the full DORTS pages 42 and 47–52, the full station-design page 177,
the full DORTS public-art overview, and the full TRTC Yuanshan station-story
page. They supplied construction-package history, roof and material design,
the Jiantan wind-engineering intervention, public-realm context and one
station-specific artwork record. R14 Yuanshan, R15 Jiantan, R16 Shilin, R17
Zhishan, R18 Mingde and R19 Shipai were all deepened; no unverified appendix
was used.

#### Elevated construction packages

**Source:** “Tamsui Line elevated construction packages” /
`捷運工程叢書 精進版－34 捷運高架車站建築造型設計` — DORTS, PRIMARY, High
confidence because the full page lists the civil-package scopes and named
contractors and records the CT206 termination and replacement.

URL: https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page42.html

Original-language text checked in full:

> `高架段土建工程計七標如下`

> `CT204 標：淡水線圓山站及隧道出口至劍潭站間高架工程，中華工程股份有限公司承建。`

> `CT204A 標：淡水線劍潭站及劍潭站至士林站間高架工程，互助營造股份有限公司與株式會社大林組聯合承建。`

> `CT205 標：淡水線士林站、福國站及士林站至明德站間高架工程，互助營造股份有限公司與株式會社大林組聯合承建。`

> `CT206 標：淡水線明德站、石牌站、唭哩岸站及明德站至奇岩站間高架工程（因承商工地停擺，工程進度落後，忠和營造工程股份有限公司和本局於民國 80 年 6 月 2 日解約，另以 CT206A 標辦理招標）。`

> `CT206A 標：淡水線明德站、石牌站、唭哩岸站及明德站至奇岩站間高架工程，工信工程股份有限公司。`

This establishes the package and contractor evidence. The page does not give
award values or a station-level final account; neither was invented.

#### Elevated design concept, roofs and materials

**Source:** “Tamsui Line elevated-station design concept” /
`捷運工程叢書 精進版－34 捷運高架車站建築造型設計` — DORTS, PRIMARY, High
confidence because the full design chapter states the architectural rationale.

URL: https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page47.html

Original-language text checked in full:

> `高架車站之造型以現代建築材料及手法展現仿傳統建築為主要風格，並擷取基座、柱廊及屋頂等傳統建築三部分元素整體表現車站建築物之量體及立面。`

**Source:** “Tamsui Line elevated-station base and flood-elevation design” /
`捷運工程叢書 精進版－34 捷運高架車站建築造型設計` — DORTS, PRIMARY, High
confidence because the full page links the raised base to flood elevation and
identifies the Yuanshan example.

URL: https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page48.html

Original-language text checked in full:

> `車站則配合防洪高程需求亦有抬高地面層之基座部分，並設鋪貼玫瑰紅花崗石的大斜面花臺。`

> `圖 2-3-1 圓山站大斜面花臺及防洪高程抬高之基座`

**Source:** “Tamsui Line elevated-station roof design” /
`捷運工程叢書 精進版－34 捷運高架車站建築造型設計` — DORTS, PRIMARY, High
confidence because the full page names the roof form at each station group.

URL: https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page49.html

Original-language text checked in full:

> `屋頂本身之造型為融合懸山式（例如：圓山站、士林站、芝山站及奇岩站等）或卷棚式（例如：劍潭站、明德站、石牌站、唭哩岸站、新北投站及淡水站等）的屋頂。`

**Source:** “Tamsui Line elevated-station exterior materials” /
`捷運工程叢書 精進版－34 捷運高架車站建築造型設計` — DORTS, PRIMARY, High
confidence because the full page gives the selection criteria and materials.

URL: https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page51.html

Original-language text checked in full:

> `綜合上述考量，天然花崗石雖然價格較為昂貴，但其厚實的天然色彩和富有多樣性變化之表面花紋、單元尺寸可彈性調整裁切等特性，選為基座與外牆之裝修材料應是甚為恰當。`

**Source:** “Tamsui Line elevated-station interior materials” /
`捷運工程叢書 精進版－34 捷運高架車站建築造型設計` — DORTS, PRIMARY, High
confidence because the full page gives the concourse and platform material
decisions.

URL: https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page52.html

Original-language text checked in full:

> `高架車站地面層公共區之牆面裝修建材選擇與外牆相同之天然花崗石，應屬正確的抉擇。`

> `能符合上述條件之裝修材料以琺瑯烤漆鋼板為最佳之選擇。`

These pages support the shared engineering and architectural context used in
all six overlays without repeating their facts/specs fields as prose.

#### Jiantan structural intervention

**Source:** “Jiantan station roof wind engineering” /
`捷運車站規劃與設計實務` — DORTS, PRIMARY, High confidence because the full
page records the special roof, wind test and stabilisation measure.

URL: https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page177.html

Original-language text checked in full:

> `劍潭站－係採龍舟意象之造形設計，利用類似橋樑之纜索結構以鋼纜懸吊屋頂。`

> `因位於圓山西側其地形帶來之風流，常造成屋頂之搖晃不穩定，經風動試驗後避免風昇力將屋頂掀起，乃於月臺之燈柱上加裝拉力桿以穩固屋頂。`

#### Public-realm and Yuanshan evidence

**Source:** “Metro public art and station architecture overview” /
`捷運不只是運輸工具` — DORTS, PRIMARY, High confidence because the full
current DORTS page directly describes the station-specific public-realm and
design statements.

URL: https://www.dorts.gov.taipei/cp.aspx?n=DA11BCC514603804

Original-language text checked in full:

> `劍潭站旁的開放空間、士林站的表演廣場、北投站旁的景觀水池、高架站下方的線形公園及自行車道等，皆為都市提供舒適怡人的休閒空間。`

> `石牌站以十字圖形象徵「醫學天地」、原名天母站之明德站以繽紛的色彩展現「異國風味」等。`

**Source:** “Yuanshan station story” / `車站特色－圓山站` — TRTC, PRIMARY,
High confidence because the full operator page directly describes the station
and its artwork.

URL: https://web.metro.taipei/c/stationstory/056/056.html

Original-language text checked in full:

> `圓山站採中國傳統宮廷建築風格。`

> `過去臺灣鐵路管理局淡水線（現已廢止；捷運淡水線前身）亦曾於此處設有圓山車站。本站往民權西路站方向即為高架段至地下段之過渡帶。`

> `作品名稱：圓山五彩物語─記憶中的圓山景色`

> `創作者藉由馬賽克拼貼畫，描寫以前圓山的種種景色，及人們日常生活的回憶。`

#### R14–R19 disposition

- **R14 Yuanshan:** 346 words. CT204 scope and contractor, the elevated
  design system, flood-elevation base, Xuan-shan roof, material choices,
  former-TRA transition, palace-style architecture and the TRTC mosaic work
  are established. The package page gives no award value, final account or
  station-level art cost.
- **R15 Jiantan:** 329 words. CT204A scope and contractors, the former-railway
  site, dragon-boat cable roof, wind-tunnel intervention, roof classification,
  material system, public space and landmark award are established. A complete
  station-specific art record and package value remain TBC.
- **R16 Shilin:** 336 words. CT205 scope and contractors, former-railway
  corridor, Xuan-shan roof, standard material system and performance-plaza
  public realm are established. An individual artwork record, station-level
  award and final account remain TBC.
- **R17 Zhishan:** 314 words. CT205 corridor scope, former-railway setting,
  Xuan-shan roof family, material and public-art planning context are
  established. No individual artwork, award value, final account or rename
  gazette was found in the fetched pages.
- **R18 Mingde:** 306 words. CT206 failure and CT206A replacement, the named
  replacement contractor, Juan-peng roof, materials, former-Tianmu wording and
  colourful “international flavour” design statement are established. The
  legal rename record, station-level cost and complete art entry remain TBC.
- **R19 Shipai:** 300 words. CT206/CT206A scope and failure history, former
  railway context, Juan-peng roof, material system, the “medical world” cross
  motif and elevated public-realm context are established. A complete art
  register entry, station-level award, final account and rename gazette remain
  TBC.

### Station-prose audit — R20–R24 plus R22A batch, 17 August 2026

The full TRTC station pages for R20–R24 and R22A were fetched and read on 17 August
2026. The full DORTS route and station-architecture records already cited in
this file were checked for station-specific narrative. R20 Qilian, R21 Qiyan,
R22 Beitou, R22A Xinbeitou, R23 Fuxinggang and R24 Zhongyi remain
correctly empty: the operator pages add current exits, facilities and branch
context, while the builder material adds line-group structure or chronology,
not a station-specific siting decision, prior-site history, construction
difficulty, rename, incident or local-context narrative suitable for body
prose. No image or linked station sheet was fetched.

| Station | Result | Full station page |
|---|---|---|
| R20 Qilian | Correctly empty | https://web.metro.taipei/pages2026/WebStation/062/1 |
| R21 Qiyan | Correctly empty | https://web.metro.taipei/pages2026/WebStation/063/1 |
| R22 Beitou | Correctly empty | https://web.metro.taipei/pages2026/WebStation/064/1 |
| R22A Xinbeitou | Correctly empty | https://web.metro.taipei/pages2026/WebStation/065/1 |
| R23 Fuxinggang | Correctly empty | https://web.metro.taipei/pages2026/WebStation/066/1 |
| R24 Zhongyi | Correctly empty | https://web.metro.taipei/pages2026/WebStation/067/1 |

The checked builder sources were the full route page
https://www.dorts.gov.taipei/cp.aspx?n=0AC527D5FC9E596A&s=A60BB323F07BC768
and engineering-book pages 43–45 listed above. They add no additional body
sentence for these six pages; `R22A` remains TBC for a station-specific opening
date rather than inheriting the main-line chronology.

### Station-prose deepening — R20–R24 plus R22A batch, 18 August 2026

The prior audit had fetched the six full TRTC station pages and DORTS pages
43–45, but found only line-group structure and chronology already represented
in facts/specs. This pass fetched the full DORTS pages 33 and 37–41. They add
the ground-station construction trade-off, the former TRA corridor and land
planning, the elevated/ground boundary, projected demand, the New Beitou
branch planning record and the walking/cycle public realm. R20 Qilian, R21
Qiyan, R22 Beitou, R22A Xinbeitou, R23 Fuxinggang and R24 Zhongyi were all
deepened. No unverified appendix was used.

#### Elevated network and railway-corridor context

**Source:** “Tamsui Line elevated network and demand context” /
`捷運工程叢書 精進版－34 捷運高架車站建築造型設計` — DORTS, PRIMARY, High
confidence because the full page lists the elevated station sequence, corridor
and original demand rationale.

URL: https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page37.html

Original-language text checked in full:

> `淡水線高架型式的車站，共包括 3 部分，其一為主線高架段：南起承德路 523 巷（三德飯店）附近，向北延伸至北投機廠；其二為淡水線支線高架段：新北投支線等高架路段之車站；其三為端點站：淡水車站亦為高架型式車站，總計為 11 站，由南至北為圓山站（R14）、劍潭站（R15）、士林站（R16）、芝山站（R17）、明德站（R18）、石牌站（R19）、唭哩岸站（R20）、奇岩站（R21）、北投站（R22）、新北投站（R22A），以及淡水站（R28）。`

> `主線高架路段主要沿舊有台鐵用地施工，其間通過基隆河、雙溪、磺溪、磺港溪、貴仔坑溪等重要河川，並經民族西路、酒泉街、劍潭路、中正路、福國路、明德路、石牌路、大同街、大業路等重要道路，長約 8.95km。`

> `在當時 8 大路線運輸走廊中，以士林－淡水走廊的運輸需求量最大，估計民國 90 年，晨峰小時的大眾運輸旅次量將達 58,000 人旅次。`

**Source:** “Tamsui Line railway-corridor planning and land use” /
`捷運工程叢書 精進版－34 捷運高架車站建築造型設計` — DORTS, PRIMARY, High
confidence because the full page explains the former railway right-of-way and
New Beitou branch land-plan changes.

URL: https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page38.html

Original-language text checked in full:

> `淡水線係利用臺鐵淡水支線之原有路權，以有償撥用方式取得，都市計畫變更及土地取得較無困難。`

> `變更新北投火車站附近地區部分停車場、道路、綠地為道路、人行步道及廣場用地計畫案，配合調整新北投車站站前圓環與附近道路交通。`

#### Ground-station type and public realm

**Source:** “Tamsui Line ground-station type and trade-offs” /
`捷運車站規劃與設計實務` — DORTS, PRIMARY, High confidence because the full
page defines the construction type and identifies the Fuxinggang–Hongshulin
ground section.

URL: https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page33.html

Original-language text checked in full:

> `地面車站是指軌道及月臺布設於地面之車站，通常布設於非市區，與平面道路極少交叉之地區，是三種建造型式中最經濟之型式，臺北都會區中目前僅有淡水信義線復興崗站至紅樹林站為地面車站。`

> `具有專用路權捷運系統採用此種型式車站雖造價最為經濟，但將對地面之通行造成阻絕及景觀視覺之阻隔。`

**Source:** “Tamsui Line northern public-realm and recreation design” /
`捷運工程叢書 精進版－34 捷運高架車站建築造型設計` — DORTS, PRIMARY, High
confidence because the full page describes the linear park, walking/cycle
paths, planting and the elevated/ground choice along the northern corridor.

URL: https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page41.html

Original-language text checked in full:

> `台鐵北淡線之路廊提供早期通勤方便性，加以自然生態景觀多元，使沿線土地的開發甚早、人文鼎盛，觀光景點焉然成形。`

> `主要以人行步道及自行車道為主，並輔以植栽綠化，以提供居民休閒活動場所。`

#### Station design goals

**Source:** “Tamsui Line station design goals and environmental integration” /
`捷運工程叢書 精進版－34 捷運高架車站建築造型設計` — DORTS, PRIMARY, High
confidence because the full page states the shared-image, individual-character
and environmental-integration goals.

URL: https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page40.html

Original-language text checked in full:

> `每一車站均應各具特色。`

> `車站應重視其與四周環境之整合，使其成為四鄰之焦點以強化民眾的認同感。`

#### R20–R24 plus R22A disposition

- **R20 Qilian:** 333 words. CT206/CT206A failure and replacement, former
  railway corridor, Juan-peng roof, materials, design goals and linear-park
  rationale are established. The individual architect, artwork, contract value,
  final account and rename gazette remain TBC.
- **R21 Qiyan:** 335 words. CT207 scope and contractors, former railway
  alignment, Xuan-shan roof, material system, demand context and public realm
  are established. No complete artwork record, award value, final account or
  rename gazette was found.
- **R22 Beitou:** 354 words. CT207 scope, branch-related space-truss and glass
  design, former railway/branch land planning, design goals and public realm
  are established. The station-specific art register, package value, final
  account and rename gazette remain TBC.
- **R22A Xinbeitou:** 321 words. CT207A scope and contractors, former branch
  right-of-way, electric-train testing context, station-front land changes and
  public-realm interface are established. No station-specific opening date was
  copied from the main-line chronology; art, contract value, final account and
  rename evidence remain TBC.
- **R23 Fuxinggang:** 327 words. The ground-section boundary, economic and
  surface-barrier trade-off, former railway corridor, depot connection and
  public-realm response are established. Station-specific design, artwork,
  contract value, final account and rename evidence remain TBC.
- **R24 Zhongyi:** 315 words. The same primary pages establish Zhongyi’s
  ground-section engineering rationale, former railway land, planning goals,
  surface-impact trade-off and path/planting response. No individual artwork,
  architect, station-level contract value, final account or rename gazette was
  established.

### Station-prose audit — R25–R28 batch, 18 August 2026

Traditional-Chinese searches were repeated against DORTS and TRTC for `淡水線
關渡站 竹圍站 紅樹林站 建築造型`, `淡水線 淡水站 高架車站 建築造型` and the
four current station names. Search was used only to locate pages; the returned
pages were fetched and read in full. The full TRTC station pages for R25–R28
were checked again, together with DORTS’s route page, the engineering-book
pages 37–46, 50, 55, 69, 71 and 73, and the DORTS public-art index. The TRTC
pages add current exits, facilities, parking and local interchange information.
For R25 Guandu, R26 Zhuwei and R27 Hongshulin, the full DORTS material adds
only shared northern-corridor structure, general station design, public-realm
or unlisted-art context; no station-specific siting, prior-site, construction,
rename, incident or local narrative survived without restating facts/specs.
R28 Tamsui did yield station-specific architectural and terminal-program
prose from the full pages 46, 50, 71 and 73. No image or linked station sheet
was fetched.

| Station | Result | Full station page |
|---|---|---|
| R25 Guandu | Correctly empty | https://web.metro.taipei/pages2026/WebStation/068/1 |
| R26 Zhuwei | Correctly empty | https://web.metro.taipei/pages2026/WebStation/069/1 |
| R27 Hongshulin | Correctly empty | https://web.metro.taipei/pages2026/WebStation/070/1 |
| R28 Tamsui | Deepened, 360 words | https://web.metro.taipei/pages2026/WebStation/071/1 |

The shared engineering source is DORTS, `捷運工程叢書 精進版－34
捷運高架車站建築造型設計`, PRIMARY, High confidence. The full pages were:

- https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page46.html —
  Tamsui’s terminal location, former TRA setting, transport-hub parking and
  transfer facilities.
- https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page50.html —
  Tamsui as a special station and its Red Castle/colonial design rationale.
- https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page71.html —
  the arcade facade, domestic-building imagery, colours and architectural
  elements.
- https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page73.html —
  former railway right-of-way, the elevated two-level form, linear park and
  waterfront recreation setting.

R25–R27 remain at zero body-prose words after the source-family search above;
that is the result, not a claim that the stations lack history or artwork.
This final four-station audit closes the R-line station-prose pass: every R
page now has a recorded sourced result, and R28 has a new 360-word sourced
overlay.

### Station-prose audit — R02–R07 deepening batch, 18 August 2026

The registry contains six pages in the requested first batch only when the
actual line sequence is used: R02–R07. There is no R01 in the generated TDX
station registry, the current DORTS station table or the full TRTC station-page
map. The six pages were therefore deepened as Xiangshan, Taipei 101/World Trade
Center, Xinyi Anhe, Daan, Daan Park and Dongmen. The prior pass had only one or
two public-art sentences on R02–R06 and no body prose on R07.

#### DR148 design overview and construction-era labels

**Source:** “Xinyi Line DR148 station design overview” / `都會組曲－信義線DR148標建築設計理念` — DORTS, PRIMARY, High confidence because the full technical-journal article gives the station sequence, sites, station forms and design rationale.

URL: https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page65.html

Original-language text checked in full:

> `臺北捷運信義線自羅斯福路上的新店線－中正紀念堂站往東 ... 沿線共設東門站（R10/014）、大安森林公園站（R09）、大安站（R08/BR5）、信義安和站（R07）、台北101/世貿站（R06）、象山站（R05）等六個車站。`

> `信義線整體建築設計構想採都會組曲理念 ... 呈現信義線國際化與在地化、商區與住宅、街道與公園等之特性。`

This source establishes the construction-era R05–R10 labels, the six-station
design scope and the “Metro Suite” approach. The current DORTS project page
uses the operating labels R02–R07 and engineering labels R5–R10, so the two
numbering systems are kept separate.

URL: https://www.dorts.gov.taipei/cp.aspx?n=0ac527d5fc9e596a&s=CB7BC86DBDA1E44D

Original-language text checked in full:

> `R02象山 | R5 ... R03台北101/世貿 | R6 ... R04信義安和 | R7 ... R05/BR09大安 | R8 ... R06大安森林公園 | R9 ... R07/O06東門 | R10`

> `本路線中正紀念堂站至象山站於102年10月13日初勘、102年11月8日履勘、於102年11月24日通車。`

#### CR580B package and Xiangshan, Taipei 101 and Xinyi Anhe

**Source:** “CR580B Xinyi Line section contract and station works” /
`捷運信義線土建施工－CR580B區段標之特殊施工及障礙處理` — DORTS,
PRIMARY, High confidence because the full article records the tender, joint
venture, value, dates and station construction records.

URL: https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page100.html

Original-language text checked in full:

> `本區段標經本局南區工程處於94年5月23日開標後，由日商華大林組營造股份有限公司台灣分公司／互助營造股份有限公司聯合承攬以新臺幣82億7,200萬元整得標，並於94年7月1日開工、102年11月23日信義線全線完工通車。`

> `R07信義安和站：地下二層島式月台車站 ... 車站長約209.8公尺，寬29.5公尺，開挖深度21.5公尺。`

> `R06台北101/世貿站：結構工程已於91年發包，本區段標僅施作本站建築裝修、水電環控及機電系統。`

> `R05象山站：地下二層島式月台車站 ... 車站長約220公尺，寬21.8公尺，開挖深度22.4公尺。`

This establishes a package-level contractor, award value and dates, but not an
individual station contractor or station-level final account. It also records
that Taipei 101’s structure had already been awarded before CR580B’s fit-out
scope.

#### Xinyi Anhe design

**Source:** “Xinyi Anhe station design” / `都會組曲－信義線DR148標建築設計理念` — DORTS, PRIMARY, High confidence.

URL: https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page67.html

Original-language text checked in full:

> `整體車站設計主題與構思採用生活旋律（創造與社區對話的櫥窗意象）為主軸 ... 信義安和站抽取周邊環境元素與街道意象充分結合。`

> `本站於安和路與信義路側設置A、B、C1、C2四個出入口（另於北側聯開設有出入口D） ... 以優美雙拱形曲面結合。`

**Source:** “Xinyi Anhe station interior and ventilation design” /
`都會組曲－信義線DR148標建築設計理念` — DORTS, PRIMARY, High confidence.

URL: https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page68.html

Original-language text checked in full:

> `車站營運所需之通風井，其量體也考量隱含於道路路型整體規劃，採用上吹式並減體減量設計，以1.8米高度女兒牆遮掩行人視線。`

> `牆面與天花以同樣材質一體成形 ... 車站地坪以米黃色崗石地磚為主要基調。`

These sources establish the station-specific “Life Melody” theme, street and
material context, curved entrance forms, ventilation treatment and interior
finish strategy.

#### Taipei 101/World Trade Center design

**Source:** “Taipei 101/World Trade Center station design” /
`都會組曲－信義線DR148標建築設計理念` — DORTS, PRIMARY, High confidence.

URL: https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page70.html

Original-language text checked in full:

> `本站所處區位為貿易、金融、商業、休閒、娛樂、商務等活動鼎盛之區域，車站北側緊鄰台北世界貿易中心及台北101大樓。`

> `本站設計主題與構思採用現代樂章（創造與世界對話的空間氛圍）為主軸。`

> `本站於信義路兩側設置A、B、C、D四個出入口（另設置有E通道與台北101大樓廣場連通）。`

> `延續信義安和站理念以單曲面及垂直牆面的構造與輕量透明的玻璃外牆 ... 白天 ... 自然的光之組曲；入夜後四個都市光體 ... 塑造 ... 都市夜景。`

This establishes the station’s commercial and financial catchment, the “Modern
Movement” design theme, the Taipei 101 plaza passage, and the transparent
day/night entrance treatment.

#### Xiangshan design, habitat protection and interior

**Source:** “Xiangshan station site and design concept” /
`都會組曲－信義線DR148標建築設計理念` — DORTS, PRIMARY, High confidence.

URL: https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page73.html

Original-language text checked in full:

> `象山站(R05)位於信義路五段，松仁路以東及北二高信義支線出口以西之間，站體兩側設置A、B、D三個出入口 ... 出入口B則位於中強公園內西側。`

> `因位處四獸山系象山山腳 ... 鄰近台北特有保育動物台北樹蛙棲息繁殖之生態區域，為此開發建設需考量與環境結合，以減少環境衝擊。`

**Source:** “Xiangshan station landscape protection and entrances” /
`都會組曲－信義線DR148標建築設計理念` — DORTS, PRIMARY, High confidence.

URL: https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page74.html

Original-language text checked in full:

> `通風井、冷卻水塔及地下變電站小型吊裝口等設施集中設置於北側臨信義路車行地下道邊的景觀帶區域之內，以景觀植栽綠化圍覆 ... 保存園內濃密樹林作為保護樹蛙之屏障。`

**Source:** “Xiangshan station entrance and public-space design” /
`都會組曲－信義線DR148標建築設計理念` — DORTS, PRIMARY, High confidence.

URL: https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page75.html

Original-language text checked in full:

> `出入口B位於中強公園內 ... 營造出一個旅客進出等候的廣場空間，提供樹蔭及座椅 ... 並設穿越信義支線下方之地下連通道。`

**Source:** “Xiangshan station interior and tree-frog interpretation” /
`都會組曲－信義線DR148標建築設計理念` — DORTS, PRIMARY, High confidence.

URL: https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page77.html

Original-language text checked in full:

> `象山站(R05)地下站體室內空間以彩虹為主要色彩計畫，並以樹蛙意象之燒陶壁飾為主，同時設置展示樹蛙之環保教育櫥窗。`

These sources establish the park interface, habitat-protection layout, entrance
plaza and passage, rainbow and tree-frog interior interpretation.

#### Daan and Daan Park joint development

**Source:** “Daan and Daan Park joint-development sites” /
`臺北捷運聯合開發案例解析` — DORTS, PRIMARY, High confidence.

URL: https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page17.html

Original-language text checked in full:

> `大安森林公園站（捷）二及大安站（捷）三基地採用此種捷運設施委由該用地投資人興建的模式。`

> `大安站（捷）三基地 ... 基地面積為890m2 ... 建築規模為地上15層地下4層 ... 於101年領得使用執照。`

> `另捷運站1號出入口設置於基地西側並與大樓採共構方式興建。`

> `大安森林公園站（捷）二基地 ... 基地面積2,994m2 ... 建築規模為地上29層地下5層 ... 於99年領得使用執照。`

**Source:** “Xinyi Line joint-development delivery model” /
`臺北捷運聯合開發案例解析` — DORTS, PRIMARY, High confidence.

URL: https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page19.html

Original-language text checked in full:

> `信義線沿線因商業規模較為繁盛，土地取得及進行大規模的開發已臻不易。`

> `信義線大安森林公園站（捷）二及大安站（捷）三基地 ... 將捷運出入口、通風口或其他相關附屬設施 ... 由其興建，並要求於信義線通車時程前完成，此種委建模式可減低捷運設施與大樓地下結構體完工時程的不確定性。`

These sources establish the two small urban development interfaces, their
dimensions and occupancy timing, and the investor-built transit-facility model.

#### Daan Park landscape and coordinated public art

**Source:** “Daan Park station landscape design” / `大安森林公園站地景設計` —
DORTS, PRIMARY, High confidence.

URL: https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page203.html

Original-language text checked in full:

> `捷運車站與都會公園結合是本案特色。以「森林轉運-都會與公園對話」為主題構想。`

> `捷運車站在陽光、空氣、水三大要素下產生生命力並與整座綠意盎然的大安森林公園結合。`

**Source:** “Daan Park station architecture and landscape interface” /
`大安森林公園站地景設計` — DORTS, PRIMARY, High confidence.

URL: https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page205.html

Original-language text checked in full:

> `捷運信義線大安森林公園站，位於新生南路與建國南路間之信義路三段道路下方 ... 南側緊鄰大安森林公園。`

> `設計構想包含陽光大廳、下凹庭園、光廊、光塔等 ...`

> `大安森林公園站係將車站穿堂層側牆打開引進陽光與大安森林公園綠意。`

**Source:** “Daan Park, Daan and Xinyi Anhe public-art project” /
`大安森林的公共藝術饗宴－兼論信義線沿線美質環境與藝術場域` — DORTS,
PRIMARY, High confidence.

URL: https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page222.html

Original-language text checked in full:

> `捷運局期待信義線的大安森林公園站、大安站與安和站為一整體規劃之公共藝術設置及節慶，因而編列兩千兩百五十萬經費，於100年十月期間以公開徵選最佳策劃及創作提案。`

> `全案所有作品並在102年底安裝完成順利開幕。`

These sources establish Daan Park’s station/park interface, landscape devices,
native planting and the coordinated three-station public-art project. The art
paper is used as primary institutional evidence for the project scope and
budget; the station-specific artwork pages remain the evidence for individual
work descriptions.

#### CK570H Dongmen construction

**Source:** “CK570H Dongmen station and tunnel section” /
`臺北捷運信義線CK570H區段標施工` — DORTS, PRIMARY, High confidence.

URL: https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page82.html

Original-language text checked in full:

> `工程規模包含1座明挖覆蓋東門車站（O14/R10）及4條捷運潛盾鑽掘隧道、1條共管潛盾鑽掘隧道。`

> `車站位於金山南路至永康街間之信義路二段道路下方，車站長約216m、寬度25m，開挖深度約32m，採用明挖覆蓋工法施工之箱型結構。`

> `信義線隧道 ... 合計長約2,445.1m，共管隧道 ... 長度合計810.82m。`

> `東門站站體開挖深度達32m ... 改採72m深連續壁貫穿28m厚礫石層至不透水層。`

**Source:** “CK570H Dongmen station structural and architectural works” /
`臺北捷運信義線CK570H區段標施工` — DORTS, PRIMARY, High confidence.

URL: https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page83.html

Original-language text checked in full:

> `基於增加連續壁厚度、勁度，減少地盤變形 ... 站內開挖區施作100公分厚扶壁連續壁。`

> `主體工程為雙牆SRC結構，採順打工法施工，結構尺寸約寬25m×長216m×深32m。`

> `車站穿堂層兩端設有方向性花崗石地坪圖案 ... 軌道側牆板 ... 剪紙「金屬鏤空藝術牆板」 ... 出入口使用具現代感之造型鋼構及具視覺穿透之玻璃材質。`

**Source:** “CK570H four-tunnel intersection and settlement control” /
`臺北捷運信義線CK570H區段標施工` — DORTS, PRIMARY, High confidence.

URL: https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page84.html

Original-language text checked in full:

> `交會區呈一狹長之形狀，長度約為113m。`

> `四條隧道交會區各隧道環片到環片最接近處淨距分別為： ... 2.93m ... 3.96m ... 5.42m ... 5.16m。`

> `為保護建物避免沉陷量過大，於四條隧道交會區實施大範圍之地盤改良。`

These sources establish Dongmen’s cut-and-cover station, deep diaphragm-wall
method, building-protection measures, finishes, tunnel lengths and the
four-tunnel intersection’s sequence and settlement controls.

### Station-by-station disposition for the R02–R07 batch

- **R02 Xiangshan:** The current/engineering code distinction, Zhongqiang Park
  site, tree-frog habitat constraint, CR580B station dimensions and package
  dates, protected landscape strip, entrance plaza, interior theme and existing
  art narrative are established. An individual station contractor, station-
  level final account, rename history and feeder-bus prose remain TBC.
- **R03 Taipei 101/World Trade Center:** The current/engineering code
  distinction, commercial and financial catchment, Modern Movement theme,
  Taipei 101 passage, transparent entrance design, CR580B fit-out distinction
  and existing art record are established. The station’s earlier structural
  contractor and final value are not published in the checked pages.
- **R04 Xinyi Anhe:** The current/engineering code distinction, site, station
  dimensions, Life Melody design, ventilation and interior treatment, CR580B
  package history and existing public-art narrative are established. No
  individual station contractor, award date or final station account is
  established.
- **R05 Daan:** The current/engineering code distinction, compact joint-
  development site, Wenhu interchange interface, investor-built facility model
  and coordinated three-station art project are established. The individual
  civil/architecture contractor and final station account are TBC.
- **R06 Daan Park:** The current/engineering code distinction, park-edge site,
  sunlight/greenery/water design, native planting, joint-development interface
  and coordinated art project are established. No station-specific civil
  contractor, final station account or rename history is established.
- **R07 Dongmen:** The current/engineering code distinction, CK570H package,
  cut-and-cover method, deep diaphragm wall, four-tunnel intersection, finishes
  and settlement controls are established. The checked art material did not
  yield a confirmed station-specific artwork, and no individual contractor,
  award date or final station account is established.

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

4. **Construction-era versus operating station codes.** The DR148 design
   overview labels the eastern stations as R05 Xiangshan, R06 Taipei 101, R07
   Xinyi–Anhe, R08/BR5 Daan, R09 Daan Park and R10/O14 Dongmen. The current DORTS
   route table labels the same operating sequence R02 Xiangshan, R03 Taipei
   101/World Trade Center, R04 Xinyi–Anhe, R05/BR09 Daan, R06 Daan Park and
   R07/O06 Dongmen. Both are published values: the first is the engineering
   volume’s construction-era numbering, while the second is the current route
   table’s operating/transfer notation. They are not averaged or silently
   reconciled.

5. **CR580B package scope versus station-level award history.** The CR580B
   record gives one package-level award to the Taiwan Obayashi Taiwan branch /
   Mutual Construction joint venture, with a value of NT$8.272 billion and
   package dates beginning 1 July 2005. The same record says that Taipei 101’s
   structural work had already been awarded in ROC91 and that CR580B covered
   its fit-out and systems work. These values describe different scopes; no
   station-level contractor or final station account was substituted for
   either one.

6. **Zhongshan source-era codes versus the current registry.** The full
   Zhongshan design article prints `G16/R14`, while the current generated
   registry and current TRTC page identify this Red-line station as R11. The
   article’s notation is retained as the source’s historical/line-design
   notation; R11 is retained as the current operating identifier. Neither is
   treated as an alternative station.

7. **Public-art planning mentions versus complete station records.** DORTS’s
   public-art selection chapter names Chiang Kai-Shek Memorial Hall as a
   selected interchange and the current technical article names Zhongshan’s
   `晶透`, but the checked current station-level art material does not provide
   a complete executed record for R08 or R11. The planning/technical mentions
   and the incomplete current register are published as different evidence;
   no artist, date, medium or cost was inferred.

8. **Nari flood notation versus current station codes.** The civil-engineering
   flood review records the path as G11, R14 and R15 for Chiang Kai-Shek
   Memorial Hall, Zhongshan and Shuanglian, while the current registry uses
   R08, R11 and R12. The first value measures the review’s source-era line
   notation; the second is the current station registry. The flood path itself
   is retained without rewriting the source’s labels.

9. **Taipei Main public-art budget scope.** The NT$5 million figure and missing
   first prize in the public-art manual belong to the Nangang-line programme’s
   Taipei Main discussion. They are not a current Tamsui-line station-art
   value; the R10 station art field remains TBC. This is a scope conflict, not
   a hidden competing cost.

10. **CT206 versus CT206A package history.** The full construction page gives
    CT206 as the original Mingde–Shipai–Qilian package, then records the
    contractor stoppage and 2 June ROC80 termination before CT206A was
    re-tendered for the same scope. CT206 is the terminated original package;
    CT206A is the replacement procurement. The two contractor records are
    sequential package values, not competing claims about one completed award.

11. **Elevated roof families versus the Jiantan exception.** DORTS classifies
    Yuanshan, Shilin and Zhishan as Xuan-shan and Jiantan, Mingde and Shipai as
    Juan-peng. Its separate architecture page calls Jiantan a suspended,
    column-free dragon-boat roof that needed wind testing and tie rods. The
    roof-family values describe visible roof form; the wind-engineering page
    describes Jiantan’s structural exception. Neither was collapsed into a
    generic “standard roof” claim.

12. **Current station label versus historical naming description.** The
    current registry uses R18 Mingde, while the DORTS public-art overview says
    “originally Tianmu.” The first is the current operating name; the second is
    an official design-history description. No rename date or gazette was
    found, so the two statements are published as different evidence rather
    than a silently inferred rename chronology.

13. **Station-specific artwork evidence has different granularity.** TRTC’s
   full Yuanshan story names `圓山五彩物語─記憶中的圓山景色` and describes its
   mosaic collage, while the DORTS public-art overview gives only broader
   station design/public-realm statements for Shilin, Mingde and Shipai. The
   named R14 work is not treated as proof of a complete current artwork
   register for R16, R18 or R19.

14. **Elevated versus ground-level station boundary.** DORTS’s elevated-station
   volume lists R14–R22A and R28 as the 11 elevated stations, while its station-
   type manual identifies the Fuxinggang–Hongshulin section as ground-level.
   The values measure two adjacent guideway sections, not competing structure
   classifications. R23–R27 remain ground-level; R28 remains elevated.

15. **Main-line chronology versus R22A station-specific opening date.** The
   route chronology covers the main Tamsui–Zhongshan opening, while the checked
   branch-planning and station material does not publish a specific Xinbeitou
   opening date. R22A therefore remains TBC rather than inheriting the main-
   line date.

16. **Standard elevated design versus Beitou’s special structure.** The design
   pages describe a shared elevated station vocabulary and separately identify
   Beitou’s space-truss and glass-curtain form as a branch-related exception.
   The shared design is the line-wide rule; the Beitou structure is the
   station-specific variation. Neither value was replaced by the other.

17. **Tamsui parking figures.** DORTS’s full terminal page gives 581 car
    spaces, 338 motorcycle spaces and 170 bicycle spaces, alongside 12
    long-distance coach bays and other bus/taxi facilities. The current TRTC
    station page lists 553 car spaces, 1,005 motorcycle spaces and 47 bicycle
    spaces in its transfer-parking table. The first record is the engineering
    book’s terminal programme; the second is the operator’s current table. Both
    are published without choosing one as the universal value.

18. **Elevated-section length versus linear-park length.** DORTS’s network
    context gives the main elevated section as approximately 8.95 km, while
    its summary describes nearly 10 km of linear multi-purpose park beneath the
    elevated corridor. These values measure guideway section and public-realm
    extent respectively, so neither is substituted for the other.

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
- **R01 station page and registry entry** — Checked 18 August 2026 against the
  generated station registry, the current DORTS route table and the TRTC route
  map. No R01 station or official page was found. No page was invented; the
  first six-station batch therefore uses the real registry sequence R02–R07.
- **Individual R02–R07 contractors, awards and final accounts** — Checked 18
  August 2026 in the fetched CR580B, CK570H and Daan joint-development pages.
  They provide package-level scope and, for Daan/Daan Park, the investor-built
  development context, but no complete station-level award/final-account
  record. Those fields remain TBC.
- **R07 Dongmen public-art record** — Checked 18 August 2026 in the full
  DORTS public-art material and the CK570H architectural pages. No confirmed
  station-specific artwork record was found in those pages. This is a failed
  lookup, not evidence that no artwork exists.
- **DR148 design pages 66, 69, 71, 72 and 76** — Full-page fetches were
  attempted 18 August 2026 and returned cache-miss failures. Search snippets
  were not used; the batch relies only on the successfully fetched pages.
- **R02–R07 feeder-bus prose** — TDX stop-ID joins were checked 18 August
  2026, but no full PTO or ebus route page was fetched for these stations. No
  feeder route assertion was published from the joins alone.
- **R08–R13 station-level contracts and final accounts** — Checked 18 August
  2026 across the DORTS route/project material, early-network planning and
  architecture volumes, the civil-engineering flood review, the Zhongshan
  joint-development case and the technical-journal station papers. These
  sources returned package, design and public-realm evidence but no complete
  R08–R13 station-level contractor/award/final-account record.
- **R08/R10/R11/R13 complete public-art records** — Checked 18 August 2026 in
  the full DORTS public-art material, selection chapter and technical article.
  R08 has a selection mention, R11 has the `晶透` technical mention, and the
  current station-level material does not supply the complete fields needed to
  publish either as a fact-box artwork. No absence was inferred.
- **R13 shallow-cut cause** — Checked 18 August 2026 in the full DORTS station-
  type page and Minquan W. Rd. architecture page. The pages classify the form
  and list possible reasons but do not identify which geological, alignment or
  cost factor controlled this station’s choice.
- **R08–R13 feeder-bus prose** — TDX stop-ID joins were checked 18 August
  2026, but no full PTO or ebus route page was fetched for this station batch.
  No feeder route assertion was published from the joins alone.

- **R14–R19 station-level contract values and final accounts** — Checked 18
  August 2026 in the full DORTS elevated-package page and the full elevated
  design pages. The sources identify CT204, CT204A, CT205, CT206 and CT206A
  scopes and contractors, but do not provide award values or station-level
  final accounts. No value was inferred.
- **R15/R16/R17/R18/R19 complete station-art records** — Checked 18 August
  2026 in the full DORTS public-art overview and elevated design material. The
  pages provide Jiantan/Shilin/Mingde/Shipai public-realm or design statements
  but no complete title-artist-date-medium-cost records. This is a failed
  lookup, not evidence that those stations have no artwork.
- **R18 rename gazette** — Checked 18 August 2026 in the full DORTS public-art
  overview and the current TRTC station material. DORTS says “originally
  Tianmu,” but those pages do not provide the gazette or effective date that
  would establish the legal rename. The current name and historical wording
  remain separate evidence.
- **R14–R19 feeder-bus prose** — TDX station joins were retained from the
  project data, but no full PTO or ebus route page was fetched for this station
  batch. No feeder-route assertion was published from a name or join alone.
  Checked 18 August 2026.

- **R20–R24 plus R22A station-level contract values and final accounts** —
  Checked 18 August 2026 in the full DORTS elevated-package, railway-corridor,
  ground-station and station-design pages. The sources return package scopes,
  named contractors and planning history but no award values or station-level
  final accounts. No value was inferred.
- **R20–R24 plus R22A complete station-art records** — Checked 18 August
  2026 in the full DORTS public-art overview and the newly fetched engineering
  pages. Those sources provide general public-realm context but no complete
  title-artist-date-medium-cost record for these six stations. This is a failed
  lookup, not evidence that no artwork exists.
- **R22A branch chronology detail** — Checked 18 August 2026 in the full
  DORTS route chronology, branch land-planning page and full TRTC station page.
  The main-line chronology does not establish a specific Xinbeitou opening
  date, so the field remains TBC.
- **R20–R24 plus R22A feeder-bus prose** — TDX station joins were retained,
  but no full PTO or ebus route page was fetched for this station batch. No
  feeder-route assertion was published from a name or join alone. Checked 18
  August 2026.
- **R25–R27 station-specific prose** — Checked 18 August 2026 in the full
  TRTC station pages 068–070, the DORTS route page, DORTS engineering-book
  pages 37–46, 50, 55, 69, 71 and 73, and the DORTS public-art index. The
  sources returned current facility/exit information and shared northern
  corridor, ground/elevated and unlisted-art context, but no R25-, R26- or
  R27-specific narrative that could be added without restating facts/specs.
  Those three pages remain at zero body-prose words; this is a failed lookup,
  not a claim that the stations lack history or artwork.
- **R25–R28 station-level contracts, final accounts and rename gazettes** —
  Checked 18 August 2026 across the same full DORTS route and engineering
  pages, the current TRTC station pages and the DORTS public-art index. The
  pages provide Tamsui’s terminal architecture and transport-hub programme,
  but no station-level award value, final account or legal rename record for
  these four stations. No value or rename was inferred.
- **R25–R28 feeder-bus prose** — TDX stop-ID joins were retained, but no full
  PTO or ebus route page was fetched for this station batch. No feeder-route
  assertion was published from a name or join alone. Checked 18 August 2026.

## Stated gaps

The pages still cannot state most rename histories, paid/street transfer mode,
individual train-roster depot assignment, or platform track counts where the
primary pages do not publish them. A city gazette or operator announcement
would settle the naming gap; a station-level signalling/platform plan would
settle the remaining track-layout gaps; an operator operations or maintenance
record would settle the roster assignment.

For R02–R07 specifically, station-level contractors, award dates and final
accounts remain TBC pending the period DORTS award, completion or final-account
records. R07’s public-art status remains unresolved pending a complete DORTS
completion register or station-specific record. R02–R07 feeder-bus prose remains
TBC pending full PTO/ebus route pages. There is no R01 page in the checked
registry or primary route materials; a later official registry entry would be
needed before that identifier could be published.

For R08–R13, the current station-art record remains incomplete for R08, R10,
R11 and R13 even though planning or technical pages mention some of them; a
complete DORTS artwork register or station completion record would settle those
entries. The R13 shallow-cut decision remains TBC until a station design or
construction record identifies the controlling factor. Station-level contracts,
final accounts and feeder-bus prose remain TBC pending the corresponding
period procurement/completion and PTO/ebus pages.

For R14–R19, the remaining gaps are the award values and station-level final
accounts for the package records, a complete current artwork register for
R15/R16/R17/R18/R19, the legal gazette and effective date behind the historical
Tianmu wording for R18, and sourced feeder-bus descriptions. The period DORTS
procurement/completion records, a complete station-art register, the relevant
city gazette and full PTO/ebus pages would settle them.

For R25–R28, R25–R27 still have no station-specific body prose after the full
TRTC, DORTS route, DORTS engineering-book and DORTS public-art source families
listed in the audit above were exhausted. R28 has sourced terminal, historic
architecture and waterfront context, but its station-level contract value,
final account, architect, complete artwork register, rename gazette and
feeder-bus description remain TBC. Period DORTS procurement/completion files,
a complete DORTS artwork register, the relevant gazette and full PTO/ebus route
pages would settle those gaps.

---

For R20–R24 plus R22A, the remaining gaps are package award values and
station-level final accounts, complete current artwork registers, a legal
rename record where applicable, the R22A station-specific opening date and
sourced feeder-bus descriptions. Period DORTS procurement/completion records,
a complete station-art register, the relevant gazette and full PTO/ebus pages
would settle them.

### Station-prose audit — R25–R26 batch, 18 August 2026

The earlier zero-prose result was superseded after the shared northern source
families were read as corridor evidence rather than treated as station-specific
facts. R25 and R26 now use the full DORTS route, ground-station, railway-corridor,
station-design and northern-public-realm pages, with the official Guandu wetland
page added for R25. No unverified appendix was used.

R25 is established as part of the Fuxinggang–Hongshulin ground-level section.
DORTS defines that form as tracks and platforms at grade, economical but capable
of interrupting surface movement and views. The full corridor-planning page says
the former TRA Tamsui branch right-of-way was acquired by paid transfer, that
station sites generally had complete land and few construction interfaces, and
that the northern railway corridor already had high transport demand. The full
Guandu district page records the tidal confluence of the Tamsui and Keelung rivers
and its wetland habitats of grassland, sandbars and mangrove.

R26 is established in the same ground-level section and former railway corridor.
The sourced prose keeps the corridor-level public-realm material separate from
station-specific evidence: DORTS describes walking and cycling paths, planting
and small resting spaces as ways of making inherited railway land a recreational
resource, but the fetched pages do not assign a particular landscape feature to
R26.

Sources fetched in full:

- https://www.dorts.gov.taipei/cp.aspx?n=0AC527D5FC9E596A&s=A60BB323F07BC768 —
  PRIMARY, High confidence; DORTS, `淡水信義線`; route sequence, station section
  and opening chronology.
- https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page33.html —
  PRIMARY, High confidence; DORTS, `捷運車站規劃與設計實務`, p.33; ground-station
  definition, economy and surface-barrier trade-off.
- https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page38.html —
  PRIMARY, High confidence; DORTS, `捷運高架車站建築造型設計`, p.38; former TRA
  right-of-way, land planning, complete station sites and northern demand.
- https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page40.html —
  PRIMARY, High confidence; DORTS, p.40; station identity, environmental
  integration and durable modern design goals.
- https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page41.html —
  PRIMARY, High confidence; DORTS, p.41; inherited corridor recreation, walking,
  cycling, planting and small public spaces.
- https://btdo.gov.taipei/News_Content.aspx?n=B154724D802DC488&s=9E4A5535EE009A1F —
  PRIMARY, High confidence; Taipei Beitou District Office, `關渡自然生態特色`;
  Guandu Plain, tidal river confluence and wetland habitats.

Station-specific architect, civil-contract award value, final account, completed
artwork register and rename gazette remain TBC for both pages. No source conflict
was found in this batch. The general ground-station description, corridor demand
record and public-realm programme were not presented as station-level works.

## Unverified incoming lead appendix — `deep-research-report(5).md`

> This appendix preserves an external lead only. It is explicitly unverified,
> and none of its claims is evidence or a replacement for the existing
> primary-source records above.

The report leads concern the old TRA Tamsui corridor, Zhongyi’s TRA and MRT
history, one Zhongshan exit count, Shuanglian public art, and a memorial for
construction deaths. It names DORTS, TRTC and a Taipei City Government source,
but supplies no URL; `[14]` and `[25]` are unresolved placeholders.
