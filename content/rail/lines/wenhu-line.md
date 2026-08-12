---
title: Wenhu Line
summary: Taipei's driverless brown line — no cab, a front window you can stand at, and a rubber-tyred guideway that climbs hills the rest of the network cannot.
order: 1
line: BR
aliases:
  - 文湖線
  - Muzha Line
  - 木柵線
  - 內湖線
  - Brown Line
updated: 2026-08-06
hero:
  image: wenhu-line/hero
  alt: A four-car VAL256 train crossing the Keelung River on the elevated guideway, apartment towers behind.
  caption: A VAL256 crosses the Keelung River into Neihu.
  wanted: A train on the elevated guideway, shot from street level — the line is fully elevated here, so the structure and a passing train are both reachable without a permit.
lead:
  value: "25.17"
  unit: km
  label: operating length, BR01 to BR24
  source: tdx
  note: Also published as 25.7 km (two construction projects added together), 25.04 km (this site's own measurement) and 26.42 km (the whole alignment, depot leads included). Four figures, four different things — the section below says which is which.
profile:
  caption: The line runs on viaduct for all but 3.9 km of its length, dives under Songshan Airport and the Keelung River, and comes back up beside the south portal of the Ziqiang road tunnel at Dazhi.
  label:
    - BR01
    - BR09
    - BR12
    - BR13
    - BR14
    - BR15
    - BR24
  underground:
    km: 3.9
    note: "The 3.9 km is DORTS's own figure for the Neihu section, and it is the line's only underground running: the builder records the Muzha section as 全線以高架方式興建, built entirely on viaduct. zh.wikipedia's route description reads 穿越福州山隧道後, which implies a tunnel between BR05 and BR06 where DORTS instead has the line passing the north side of the Xinhai road tunnel. A viaduct does not run through a hill, so the drawing follows the builder — but the two accounts of that half-kilometre have not been reconciled."
facts:
  - label: Line code
    value: BR
  - label: Operator
    value: Taipei Rapid Transit Corporation
  - label: Termini
    value: BR01 — BR24
  - label: Stations
    value: "24"
    source: dorts-wenhu
  - label: Elevated
    value: "22"
    source: dorts-wenhu
  - label: Underground
    value: BR13, BR14
    source: dorts-architecture
  - label: Opened
    value: 28 March 1996
    source: dorts-wenhu
  - label: Last extension
    value: 4 July 2009
    source: dorts-wenhu
  - label: End to end
    value: 45 min
    source: trtc-headways
  - label: Guideway
    value: Rubber-tyred, side-guided
    source: railway-tech-lille
  - label: Electrification
    value: 750 V DC, off the guide bars
    source: railway-tech-lille
  - label: Signalling
    value: CITYFLO 650, Bombardier (now Alstom)
    source: zh-wenhu
  - label: Automation
    value: GoA4, driverless
    source: zh-wenhu
  - label: Depots
    value: Muzha, Neihu
specs:
  - label: Route length, operating
    value: "25.17"
    unit: km
    source: tdx
  - label: Route length, published
    value: "25.7"
    unit: km
    source: dorts-wenhu
  - label: Stations
    value: "24"
    source: dorts-wenhu
  - label: Elevated stations
    value: "22"
    source: dorts-wenhu
  - label: Underground stations
    value: "2"
    source: dorts-wenhu
  - label: Underground running
    value: "3.9"
    unit: km
    source: dorts-wenhu
  - label: Guideway spacing
    value: "1880"
    unit: mm
    source: zh-wenhu
  - label: Electrification
    value: "750"
    unit: V DC
    source: zh-wenhu
  - label: Automation grade
    value: GoA4
    source: zh-wenhu
  - label: Peak headway
    value: 2—4
    unit: min
    source: trtc-headways
  - label: Off-peak headway
    value: 4—10
    unit: min
    source: trtc-headways
  - label: Late-evening headway
    value: "12"
    unit: min
    source: trtc-headways
  - label: Design minimum headway
    value: "80"
    unit: s
    source: zh-wenhu
  - label: Maximum operating speed
    value: "70"
    unit: km/h
    source: zh-wenhu
  - label: Design speed
    value: "80"
    unit: km/h
    source: zh-wenhu
  - label: End-to-end journey
    value: "45"
    unit: min
    source: trtc-headways
sources:
  - id: tdx
    title: Taiwan MOTC TDX — StationOfRoute, operator TRTC
    publisher: Ministry of Transportation and Communications, Taiwan
    url: https://tdx.transportdata.tw/
    snapshot: https://web.archive.org/web/20260806042022/https://tdx.transportdata.tw/
    accessed: 2026-08-05
    kind: primary
    note: "Government open data, committed to this repository at data/tdx/. The route's revenue length is the CumulativeDistance against the last station of route BR-1; the RouteLength field is zero for every metro route, which is what once led this page to say the figure was not published."
  - id: dorts-wenhu
    title: Wenshan—Neihu Line
    titleOriginal: 文山內湖線
    publisher: Taipei City Government, Department of Rapid Transit Systems (DORTS)
    url: https://www.dorts.gov.taipei/cp.aspx?n=DBAC040496EFAB94
    snapshot: https://web.archive.org/web/20260209210832/https://www.dorts.gov.taipei/cp.aspx?n=DBAC040496EFAB94
    accessed: 2026-08-06
    kind: primary
    lang: zh-Hant
    note: "The builder's own project record for both halves: 木柵線 約10.9公里，設12座車站 and 內湖線 約14.8公里，設12座車站（地下段3.9公里，2座地下站）. Those two lengths are what add to the 25.7 km that circulates as this line's route length."
  - id: zh-linguang
    title: Linguang station
    titleOriginal: 麟光站
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/zh-tw/麟光站
    accessed: 2026-08-07
    kind: secondary
    lang: zh-Hant
    note: "The station chronology that dates both 1993 fires and numbers the second one: 「1993年5月5日：辛亥站前發生火燒車事件」 and 「1993年9月24日：發生第二次火燒車事件」. Also the source for this station having been the first completed with two exits after the 1996 opening, and for its two ticket machines being the fewest on the network."
  - id: dorts-fleet-faq
    title: How many trains were procured for each line of the Taipei metro network?
    titleOriginal: 台北都會區大眾捷運系統路網中，各路線所採購之列車數為何？
    publisher: Taipei City Government, Department of Rapid Transit Systems (DORTS)
    url: "https://www.dorts.gov.taipei/News_Content.aspx?n=2A66A485FACB0D5B&s=C8602F8588914E91"
    snapshot: https://web.archive.org/web/20260807044541/https://www.dorts.gov.taipei/News_Content.aspx?n=2A66A485FACB0D5B&s=C8602F8588914E91
    accessed: 2026-08-07
    kind: primary
    lang: zh-Hant
    note: "The builder's own procurement table, by contract: 木柵線 CC350 51對電聯車（102輛）and 文湖線 CB370 101對電聯車（202輛）. Cited here for the pair counts that do not divide into the reported train counts."
  - id: zh-taipei-fleet
    title: Taipei Metro rolling stock
    titleOriginal: 臺北捷運列車
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/zh-hant/臺北捷運列車
    snapshot: https://web.archive.org/web/20260807045301/https://zh.wikipedia.org/zh-hant/%E8%87%BA%E5%8C%97%E6%8D%B7%E9%81%8B%E5%88%97%E8%BB%8A
    accessed: 2026-08-07
    kind: secondary
    lang: zh-Hant
    note: "Source for the 25-and-51 train split, and for the VAL256 running 非固定編組 — four consecutively-numbered cars forming a train rather than a permanent set, which is one of the three readings of the arithmetic problem."
  - id: dorts-architecture
    title: Station architectural design
    titleOriginal: 車站建築設計
    publisher: Taipei City Government, Department of Rapid Transit Systems (DORTS)
    url: "https://www.dorts.gov.taipei/cp.aspx?n=980C85299DA2890A&s=6B0F524CA1EB5C9F"
    snapshot: https://web.archive.org/web/20260807045159/https://www.dorts.gov.taipei/cp.aspx?n=980C85299DA2890A&s=6B0F524CA1EB5C9F
    accessed: 2026-08-07
    kind: primary
    lang: zh-Hant
    note: "The builder's own account of why the stations look as they do, and — from a completely different direction than the project record — a count that identifies the underground pair: 「文湖線內湖段為木柵段之延伸，屬中運量系統，除大直站為地下車站外，其餘共有十座高架車站」. Ten elevated plus Dazhi is eleven of the Neihu section's twelve; the twelfth is Songshan Airport. Also the source for the single-column load constraint on the Muzha section and the 「空中之河」 / 「湖城故事」 framing of the Neihu section."
  - id: trtc-headways
    title: Routes and headways
    titleOriginal: 路線及班距
    publisher: Taipei Rapid Transit Corporation
    url: https://www.metro.taipei/cp.aspx?n=EAD981369A065968
    snapshot: https://web.archive.org/web/20260803093910/https://www.metro.taipei/cp.aspx?n=EAD981369A065968
    accessed: 2026-08-06
    kind: primary
    lang: zh-Hant
    note: The operator's own published service pattern. Weekday peak about 2–4 min, off-peak about 4–10 min, about 12 min after 23:00, and one-way running time about 45 minutes.
  - id: zh-wenhu
    title: Wenhu line
    titleOriginal: 文湖線
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/zh-tw/文湖線
    snapshot: https://web.archive.org/web/20250714045049/https://zh.wikipedia.org/zh-tw/文湖線
    accessed: 2026-08-06
    kind: secondary
    lang: zh-Hant
    note: "Carries both length figures in one infobox — 路線長度 25.7公里 against 營運長度 25.18公里 — which is what showed the two were never in conflict. Also the source for the 1,880 mm sleeper-centre spacing, the electrification, the speeds, and the identification of BR13 and BR14."
  - id: zh-muzha
    title: Muzha Line
    titleOriginal: 木柵線
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/zh-tw/木柵線
    snapshot: https://web.archive.org/web/20250531163800/https://zh.wikipedia.org/zh-tw/木柵線
    accessed: 2026-08-06
    kind: secondary
    lang: zh-Hant
    note: The fullest chronology of the original section's construction years — the 1988 Matra contract, the 1993 test fires, the 1996 opening.
  - id: ltn-2005
    title: "Muzha metro line: Matra wins, Taipei to pay NT$1.64 billion"
    titleOriginal: 木柵捷運線 馬特拉勝訴 北市要賠16.4億
    publisher: 孫友廉, 陳曉宜, 鄭學庸, 自由時報, 23 July 2005 (via 大紀元 reprint)
    url: https://www.epochtimes.com/b5/5/7/23/n995027.htm
    snapshot: https://web.archive.org/web/20260807043739/https://www.epochtimes.com/b5/5/7/23/n995027.htm
    accessed: 2026-08-06
    kind: secondary
    lang: zh-Hant
    note: The report of the judgment that ended the Matra litigation, cited here for the headline figures; the full account is on the Matra dispute page.
  - id: zh-val256
    title: Taipei Metro VAL256 electric multiple unit
    titleOriginal: 台北捷運VAL256型電聯車
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/zh-tw/台北捷運VAL256型電聯車
    snapshot: https://web.archive.org/web/20221006051618/https://zh.wikipedia.org/zh-tw/台北捷運VAL256型電聯車
    accessed: 2026-08-06
    kind: secondary
    lang: zh-Hant
  - id: zh-innovia
    title: Bombardier INNOVIA APM 256 electric multiple unit
    titleOriginal: 龐巴迪INNOVIA APM 256型電聯車
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/zh-tw/龐巴迪INNOVIA_APM_256型電聯車
    snapshot: https://web.archive.org/web/20150531215555/https://zh.wikipedia.org/zh-tw/龐巴迪INNOVIA_APM_256型電聯車
    accessed: 2026-08-06
    kind: secondary
    lang: zh-Hant
  - id: trtc-psd
    title: Safety equipment
    titleOriginal: 安全設備
    publisher: Taipei Rapid Transit Corporation
    url: https://www.metro.taipei/cp.aspx?n=c4b618682db27979&s=288E97B4A5E9A725
    snapshot: https://web.archive.org/web/20250616230758/https://www.metro.taipei/cp.aspx?n=C4B618682DB27979&s=288E97B4A5E9A725
    accessed: 2026-08-06
    kind: primary
    lang: zh-Hant
  - id: railway-tech-lille
    title: Lille VAL — project profile
    publisher: Railway Technology
    url: https://www.railway-technology.com/projects/lille_val/
    snapshot: https://web.archive.org/web/20260807044500/https://www.railway-technology.com/projects/lille_val/
    accessed: 2026-08-06
    kind: secondary
    note: Describes the VAL guideway — running surfaces with lateral H-section guide bars that also carry the 750 V supply. Side guidance, not a central rail.
  - id: peoplenews-1996
    title: "That day, that year: 28 March 1996, Taiwan's first metro line, the Muzha Line, opens"
    titleOriginal: 【那一年的這一天】1996.3.28 台灣第一條捷運「木柵線」通車
    publisher: 民報 Taiwan People News
    url: https://www.peoplenews.tw/news/19facc82-2320-47f3-8e14-0f62366535f9
    snapshot: https://web.archive.org/web/20191207073911/https://www.peoplenews.tw/news/19facc82-2320-47f3-8e14-0f62366535f9
    accessed: 2026-08-06
    kind: secondary
    lang: zh-Hant
    note: "Cited for the \"first in Taiwan\" claim, which had been on this page as a bare superlative. The live URL rotted some time before 6 August 2026 — the citation survives only because the Internet Archive holds a 2019 capture, which is the archiving policy's whole argument made for it."
---

There is no cab. Stand at the front of the leading car and the guideway comes
straight at you — through the hills above Muzha, across the rooftops of eastern
Taipei, over the Keelung River into Neihu. It is the best free view in the city,
and it exists because nobody needs to sit where you are standing.

The Wenhu Line was **Taiwan's first metro line**[^peoplenews-1996], and it
remains the only line in the Taipei network running on rubber tyres rather than
steel wheels. That choice is what lets it climb through Wenshan's hills; the
precise gradients it clears are a figure this site has not yet sourced, and the
design criteria that would settle them are still to be found.

## History

The name is a contraction: **Wen**shan and Nei**hu**, the districts at either
end. The two halves opened thirteen years apart, and they are the two halves of
one of the strangest procurement stories in modern transit.

| Stage | Section | Length | Opened |
| --- | --- | --- | --- |
| Muzha Line | BR01 — BR12 | 10.9 km[^dorts-wenhu] | 28 March 1996[^dorts-wenhu] |
| Neihu extension | BR13 — BR24 | 14.8 km[^dorts-wenhu] | 4 July 2009[^dorts-wenhu] |

### The alignment was redrawn by protest before a metre of it was built

The route that opened in 1996 is not the route that was
approved[^zh-muzha]. A 13 km scheme from Taipei Zoo to Liuzhangli had already
been settled when **residents in Muzha objected, and on 4 May the northern
section was redirected onto Fuxing South and North Roads** — where it runs
today[^zh-muzha].

That is the earliest instance of a pattern this site records twice more: the
Songshan–Xindian Line redesigned from part-elevated to fully underground in
1987 on street-width and visual-impact grounds, and the Neihu extension held up
for years over the same argument. **The objection came first, before the line
existed, and it worked.** What exactly was moved, and which proposed stations
went with it, is not established here and is worth a proper look.

The original section was bought in 1988 as a turnkey system from France's
Matra[^zh-muzha]. What followed — **two fires during testing in 1993**, on 5
May and 24 September, the second recorded as exactly that, 第二次火燒車事件, a
second vehicle-fire incident[^zh-linguang]; an opening four and a quarter years
late; the builder's withdrawal from maintaining its own system; and a lawsuit
that ran until the Supreme Court ordered the city to pay roughly NT$1.64 billion
in 2005[^zh-muzha][^ltn-2005] — is told in full on
its own page: **[The Matra dispute](/rail/history/matra-dispute/)**. The short
version is that Taipei learned, expensively, how not to buy a railway, and
bought the second half differently.

When the Neihu extension opened on 4 July 2009, the two sections began running
as one through line under the extension's new CITYFLO 650
signalling[^dorts-wenhu][^zh-wenhu]. The original VAL256 fleet was withdrawn
that same day for conversion to the new system and did not carry passengers
again until 26 December 2010[^zh-val256] — eighteen months in which the 1996
railway ran entirely on the 2009 trains. See
[VAL256](/rail/rolling-stock/val256/).

## Route

Elevated for almost its entire length. From BR01 the line climbs north through
Wenshan District, crosses central Taipei on an east–west alignment, then turns
north-east across the Keelung River into Neihu.

**Two of the twenty-four stations are underground: BR13 Songshan Airport and
BR14 Dazhi**, and both are now settled by DORTS itself rather than inferred.

The builder's project record gives the Neihu section as 14.8 km with
「地下段3.9公里，2座地下站」 — 3.9 km underground, two underground
stations[^dorts-wenhu] — which narrows the pair to BR13–BR24 without naming
them. Its station architecture page then names one of the two and counts the
rest: 「除大直站為地下車站外，其餘共有十座高架車站」, apart from Dazhi being
underground, the remaining ten are elevated[^dorts-architecture]. Ten elevated
plus Dazhi is eleven of the section's twelve stations, and the project record
says there are exactly two underground[^dorts-wenhu]. The twelfth station is
Songshan Airport, so Songshan Airport is the second. Two primary documents that
never mention each other, and the identification falls out of the arithmetic
between them. zh.wikipedia names the same pair outright[^zh-wenhu]; it is no
longer what the claim rests on.

The platform depths are still not established here and are not asserted.

Every platform on the line has full-height platform screen doors: Faiveley
equipment from BR01 to BR12, ST Electronics from BR13 to BR24[^trtc-psd].

## How many ways out

DORTS's station table counts the street exits at every station, and the
distribution is lopsided in a way that says something about how the line was
built[^dorts-wenhu].

**Eight of the twenty-four stations have exactly one exit**[^dorts-wenhu], and
seven of those eight are consecutive: BR02 Muzha through BR08 Technology
Building, an unbroken run from Wenshan into Daan where every station has one way
in and one way out. BR12 Zhongshan Junior High School is the
eighth[^dorts-wenhu].

Twenty of the twenty-four have three exits or fewer. The whole line has
sixty-three between its twenty-four stations, and a quarter of those are at two
stations: BR11 Nanjing Fuxing and BR24 Nangang Exhibition Center have eight
each. BR09 Daan has six, BR10 Zhongxiao Fuxing five. All four are
interchanges[^dorts-wenhu].

That is not a trivia column. A single-exit station is one lift, one stair, one
escalator bank and one crowd; when it closes, the station closes. It is a
predictable consequence of building a medium-capacity railway on a single row
of columns down the middle of an existing road — the same constraint DORTS
gives for why these stations carry no decoration, which is that a single-column
support system limits what you can hang on
it[^dorts-architecture]. The exits are the same economy, at street level.

Every station page carries its own count, from the same
table[^dorts-wenhu].

**BR06 Linguang is the exception that proves the constraint was real.** It has
two exits and it is the first station on the Taipei Metro that opened with both
of them already built[^zh-linguang] — everywhere else, a second exit was
something added later or not at all. The same station has **two ticket machines,
the fewest anywhere on the network**[^zh-linguang].

## Operations

Trains run without on-board drivers under automatic train control, at GoA4 —
unattended train operation, the highest grade[^zh-wenhu].

Weekday headways are about 2–4 minutes at peak, 4–10 off-peak, and about 12
minutes after 23:00; weekends and holidays run the off-peak pattern all
day[^trtc-headways]. **End to end takes about 45 minutes**, BR01 to BR24 or the
reverse[^trtc-headways]. zh.wikipedia adds that the headway can be compressed to
80 seconds[^zh-wenhu]; that is a signalling capability rather than a timetable,
and no primary source for it was found.

## How long the line is

Four figures circulate, and they are not in conflict — they measure four
different things. **This site publishes 25.17 km, the operating length**, and
says what each of the others counts.

| Figure | What it measures | Source |
| --- | --- | --- |
| **25.17 km** | **Operating length** — the railway that carries passengers, BR01 to BR24 | TDX `CumulativeDistance` against the last station of route BR-1[^tdx] |
| 25.7 km | The two construction projects added together | 10.9 km + 14.8 km, both DORTS's own figures[^dorts-wenhu] |
| 25.04 km | The same railway, measured by this site along MOTC's surveyed geometry from the first station to the last | the map below |
| 26.42 km | The whole published alignment, including 635 m of depot lead beyond BR01 and 744 m of tail track beyond BR24 | the same geometry, untrimmed[^tdx] |

The last row is the one this site got wrong: it printed the untrimmed figure as
the route length for four builds, because measuring everything MOTC draws counts
depot lead and tail track that no passenger travels on[^tdx]. Trimmed to the
termini, the same geometry lands within 130 m of the operator's own
figure[^tdx] — and that agreement is the check working, which is why both are
still printed side by side on the [network page](/rail/network/).

The 25.7 km that appears as 路線長度 on zh.wikipedia[^zh-wenhu] is the **sum of
the two published section lengths**: DORTS records 木柵線 約10.9公里 and 內湖線
約14.8公里, and 10.9 + 14.8 = 25.7 exactly[^dorts-wenhu]. Those are project
lengths — the extent of what was built, including non-revenue track at each
end — which is why the total exceeds the 25.17 km of railway that carries
passengers[^tdx].

## Rolling stock

Two fleets share the line, both running as four cars made up of two coupled
pairs:

- [VAL256](/rail/rolling-stock/val256/) — 51 pairs, the original Muzha Line
  fleet[^zh-val256]
- [Innovia APM 256 (C370)](/rail/rolling-stock/innovia-apm-256-c370/) — 101
  pairs, delivered for the Neihu extension[^zh-innovia]

### The fleet totals do not divide, and this site cannot say why

A four-car train on this line is two coupled pairs. DORTS's procurement record
gives **51 pairs of VAL256 and 101 pairs of Innovia**[^dorts-fleet-faq]. The
renewal reporting counts **25 Matra trains and 51 Bombardier trains**, 76 in
total[^zh-taipei-fleet].

Those do not reconcile[^dorts-fleet-faq][^zh-taipei-fleet]. 25 four-car trains
need 50 pairs, not 51; 51 trains need 102 pairs, not 101. The totals agree — 152 pairs, 304 cars, 76
trains[^dorts-fleet-faq] — but **neither fleet on its own divides into whole
trains.**

Three readings, and nothing found settles between them:

- **A spare pair in each fleet.** 25 Matra trains plus one pair out of service,
  50 Bombardier trains plus one — which makes the "76 trains" figure a count of
  the two fleets' nominal sizes rather than of trains in traffic.
- **Formations are not fixed.** zh.wikipedia describes the VAL256 as
  「非固定編組」, running as four consecutively-numbered cars rather than as a
  permanent set[^zh-taipei-fleet]. If pairs are re-formed in maintenance, the two
  counts are simply two different things measured on two different
  days[^zh-taipei-fleet], and there is no discrepancy to explain.
- **One train is mixed.** Moving a pair across the boundary makes both counts
  work — and would mean exactly one train on this line runs one fleet's pair
  coupled to the other's.

**The third would make this page wrong**, because it describes the fleets as
separate. It is also the only one of the three that requires something no source
found here reports[^zh-taipei-fleet]. It is recorded here because leaving it out would be picking
an answer quietly.

They are not the same vehicle and not the same design lineage — the second was
built by a competitor to fit the first's guideway, which is the Matra story's
last chapter — but the interface they share is exact: the same running-surface
spacing, the same side guide bars, the same 750 V taken off
them[^zh-innovia][^railway-tech-lille]. TRTC has announced a programme to
replace all 76 trains by 2041 — see the research notes, and treat the figures
as provisional.

## Depots

[Muzha Depot](/rail/depots/muzha-depot/) sits at the southern end beside BR01
and opened with the line in 1996[^dorts-wenhu].
[Neihu Depot](/rail/depots/neihu-depot/) was built for the extension and came
into use in 2009[^dorts-wenhu]. Despite its name it is in Nangang District, and
it joins the running line at **BR24**, at the far end of the
line[^dorts-wenhu].

## Sources

Station names, codes, running order, coordinates and the end-to-end journey time
come from **Taiwan MOTC's TDX platform**, operator TRTC — government open data,
retrieved 5 August 2026. The strip map is generated from it directly. Everything
else is cited inline and listed below.

TDX does not publish station structure, headways, or anything about rolling
stock and depots; those come from TRTC's and DORTS's own publications where they
exist, and are marked secondary where they do not.

## Corrections

This page's errors are corrected in place and recorded here, most recent first.

- **The strip map drew Neihu Depot at the wrong end of the line for four
  builds.** This page previously said the depot joined the running line near
  BR19 Neihu — an unsourced inference from the shared name. It actually
  connects at BR24, in Nangang District[^dorts-wenhu], and the map marker
  moved with the fact. `npm run facts` now cross-checks the marker against the
  depot page's own stated junction.
- **Two engineering superlatives were removed rather than corrected.** This
  page used to say the gradients through Wenshan were steeper than conventional
  heavy metro could manage, and that the elevated curves would be *impossible*
  on a steel-wheel alignment. Both are probably true and neither was sourced,
  and "impossible" was doing a great deal of unattributed work. They can return
  when DORTS's design criteria are found.
- **The 25.7 km figure was described as unaccounted for.** An earlier version
  of this page could not say where the widely-circulated 25.7 km came from. It
  is simply the sum of DORTS's two project lengths, as the length section above
  now shows.
