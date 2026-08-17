# Research corpus warning

This is a lead index, not a source. Every claim below was checked against the
full primary HTML page at the URL given on 14 August 2026. The generated
station records supply the TDX identity, sequence, address where present,
district, coordinates and running data; this file records the operator and
builder material added to the station pages. TBC means the checked primary
material did not establish it. No address was inferred from coordinates. No
image asset was fetched.

---

# Danhai LRT stations (V01–V11, V26–V28)

## Audit before editing

The 14 generated pages all had TDX district and coordinates. V01 and V26 had
TDX address strings; V02–V11 and V27–V28 had no TDX address. The Part 1
operator-position overlay already supplied NTMC station-position descriptions
for those 12 gaps, but did not turn a position description into a postal
address. TDX listed no current interchange code for any V record; the NTMC
transfer page establishes V01 as a transfer with Taipei Metro Hongshulin.

The 14 NTMC station pages, the full NTMC station table, FAQ, accessibility,
transfer, public-art and stamp pages, the full DORTS Green Mountain and Blue
Sea route and station pages, the DORTS shelter-design article, the NTMC V03
engineering article and the NTMC depot page were fetched and read. The 14
station pages expose the operator identity and timetable records and link to
station information documents; those linked documents and images were not
fetched under this run's no-image contract. The readable HTML therefore does
not establish station-specific platform, track or exit tables for this pass.

## Station-prose audit: V01–V06

The six full NTMC station pages, the full DORTS Green Mountain route and
station pages, the full NTMC V03 safety article, the full DORTS shelter-design
article and the full NTMC public-art page were fetched and read before this
batch. No station in V01–V06 received prose: the station-specific material
found is already represented in the facts box, while the remaining material is
line-wide rather than station-specific.

| Code | Result | Full-page evidence searched | Search result |
|---|---|---|---|
| V01 | Correctly empty | NTMC station page; DORTS Green Mountain route/station pages; NTMC transfer and public-art pages | The transfer/co-construction note, Hongshulin position and line-wide Jimmy Liao work are already in facts; no additional station history or siting decision found. |
| V02 | Correctly empty | NTMC station page; DORTS Green Mountain route/station pages; DORTS shelter-design article; NTMC public-art page | The road/intersection position and shared wind-protection/public-art material are already in facts; no V02-specific construction, naming or incident record found. |
| V03 | Correctly empty | NTMC station page and full V03 safety article; DORTS Green Mountain route/station pages; DORTS shelter-design article; NTMC public-art page | The elevated form, Huwei Cherry Blossom Avenue context and slope/earthquake monitoring are already in facts; no additional V03 siting or construction history found. |
| V04 | Correctly empty | NTMC station page; DORTS Green Mountain route/station pages; DORTS shelter-design article; NTMC public-art page | The road/intersection position, university name and shared shelter/public-art material are already in facts; no V04-specific history or incident found. |
| V05 | Correctly empty | NTMC station page; DORTS Green Mountain route/station pages; DORTS shelter-design article; NTMC public-art page | The road/intersection position, `北投子` annotation and shared shelter/public-art material are already in facts; no dated rename or V05-specific history found. |
| V06 | Correctly empty | NTMC station page; DORTS Green Mountain route/station pages; DORTS shelter-design article; NTMC public-art page | The road/intersection position and shared shelter/public-art material are already in facts; no V06-specific construction, naming or incident record found. |

The full pages searched for this batch were:

- NTMC station pages: https://www.ntmetro.com.tw/basic/?mode=detail&node=460,
  https://www.ntmetro.com.tw/basic/?mode=detail&node=459,
  https://www.ntmetro.com.tw/basic/?mode=detail&node=458,
  https://www.ntmetro.com.tw/basic/?mode=detail&node=457,
  https://www.ntmetro.com.tw/basic/?mode=detail&node=456,
  https://www.ntmetro.com.tw/basic/?mode=detail&node=455
- DORTS Green Mountain route: https://www.dorts.ntpc.gov.tw/about/route/kq4VmGpM2BoY
- DORTS Green Mountain station table: https://www.dorts.ntpc.gov.tw/about/routeInfo/kq4VmGpM2BoY
- NTMC V03 safety article: https://www.ntmetro.com.tw/basic/?mode=detail&node=297
- DORTS shelter-design article: https://www.dorts.ntpc.gov.tw/documentary/articleInfo/JnldARRDZY9v
- NTMC public art: https://www.ntmetro.com.tw/basic/?mode=detail&node=17

No new value conflict was found in this batch. Existing conflicts about the
Green Mountain opening date, V28’s two primary position values and the
line-wide V03 structure inference remain published below.

## What is established

### Identity and position

The NTMC station table is PRIMARY, High confidence: it is the operator's own
full table and labels the fields `車站站名`, `車站代碼`, `車站位置`, `車站位置圖`
and `車站資訊圖`. It publishes the current V01–V11 and V26–V28 names, codes
and station-position descriptions. The 14 full detail pages are also PRIMARY,
High confidence, and identify the corresponding station and timetable record.

| Code | Operator detail page | Source id |
|---|---|---|
| V01 | https://www.ntmetro.com.tw/basic/?mode=detail&node=460 | ntmc-v01-station |
| V02 | https://www.ntmetro.com.tw/basic/?mode=detail&node=459 | ntmc-v02-station |
| V03 | https://www.ntmetro.com.tw/basic/?mode=detail&node=458 | ntmc-v03-station |
| V04 | https://www.ntmetro.com.tw/basic/?mode=detail&node=457 | ntmc-v04-station |
| V05 | https://www.ntmetro.com.tw/basic/?mode=detail&node=456 | ntmc-v05-station |
| V06 | https://www.ntmetro.com.tw/basic/?mode=detail&node=455 | ntmc-v06-station |
| V07 | https://www.ntmetro.com.tw/basic/?mode=detail&node=454 | ntmc-v07-station |
| V08 | https://www.ntmetro.com.tw/basic/?mode=detail&node=453 | ntmc-v08-station |
| V09 | https://www.ntmetro.com.tw/basic/?mode=detail&node=452 | ntmc-v09-station |
| V10 | https://www.ntmetro.com.tw/basic/?mode=detail&node=451 | ntmc-v10-station |
| V11 | https://www.ntmetro.com.tw/basic/?mode=detail&node=450 | ntmc-v11-station |
| V28 | https://www.ntmetro.com.tw/basic/?mode=detail&node=449 | ntmc-v28-station |
| V27 | https://www.ntmetro.com.tw/basic/?mode=detail&node=448 | ntmc-v27-station |
| V26 | https://www.ntmetro.com.tw/basic/?mode=detail&node=447 | ntmc-v26-station |

The operator-position descriptions are used as locations, not as postal
addresses. V02–V11 and V27–V28 therefore remain TBC for postal address. The
TDX source remains the source for the current station identity and coordinates.

### Opening dates and phases

The DORTS Green Mountain route page is PRIMARY, High confidence. Its full
project record says:

> 「淡海綠山線 107年12月24日 通車營運」

It also gives 7.34 km and 11 stations, and publishes the construction
milestones leading to the Green Mountain opening. This establishes 24
December 2018 for V01–V11 and that they opened with that operating phase.

The DORTS Blue Sea Phase 1 route page is PRIMARY, High confidence. It says:

> 「淡海藍海線第一期 109年11月15日 通車營運」

It gives 2.21 km and three stations, and publishes the construction milestones.
This establishes 15 November 2020 for V26–V28 and that they opened with Blue
Sea Phase 1. No later opening event is asserted for these stations.

### Structure, platforms and tracks

The NTMC V03 engineering article is PRIMARY, High confidence for V03. It says:

> 「淡海輕軌路線將近半數為高架路段……V03淡金鄧公站……滬尾櫻花大道旁高架站……邊坡滑動監測系統……地震偵測系統」

V03 is therefore recorded as elevated. The article also establishes the
station-specific slope-movement and earthquake monitoring systems. The line-
level statement does not classify the other 13 stations individually. Platform
form and track count remain TBC for every station. NTMC's full FAQ establishes
the system-wide operating form:

> 「沒有封閉式的閘門，僅設置刷卡機」

That is recorded as an open-platform/card-reader fact, not as a platform or
track count. The DORTS shelter-design article is PRIMARY, High confidence for
the shared station-shelter design; it says the shelter provides protection
from wind and rain and that the northeast side uses:

> 「8mm+8mm厚強化膠合清玻璃」

### Exits and facilities

No readable full HTML primary source in this pass gives a numbered exit count
or street-emergence list for a Danhai station. Exit count, exit positions and
station-specific accessible entry points remain TBC for all 14 pages.

The NTMC accessibility page and FAQ are PRIMARY, High confidence for the
following operator-wide or explicitly station-specific facts:

- NTMC publishes a passenger enquiry point and accessible ticket machine for
  the light-rail system.
- The accessibility page says elevated stations have accessible lifts and
  at-grade platforms have accessible ramps. V03's elevated lift is therefore
  supported; the individual lift/ramp arrangement at the other stations is
  TBC because their structure is not established here.
- The FAQ says: 「淡海輕軌於紅樹林(V01站)與淡水漁人碼頭(V26站)，有提供男女廁及無障礙廁所。其餘車站……未設計廁所」. V01 and V26 are recorded with public male/female toilets and accessible toilets; the other 12 are recorded with no toilet.
- The accessibility page says V01 and V26 have nursing rooms. The other
  stations' nursing-room status is TBC.
- The FAQ says: 「暫無提供置物櫃」. No station is recorded with lockers.
- Bike parking and service-counter details beyond the operator's enquiry-point
  and accessible-ticket-machine statements remain TBC.

### Interchange

The NTMC transfer page is PRIMARY, High confidence. It says:

> 「淡海輕軌紅樹林(V01站)與台北捷運紅樹林站共構……」

V01 is recorded as an interchange with Taipei Metro's Tamsui–Xinyi Line at
Hongshulin. The source establishes co-construction and transfer availability;
whether the passenger movement is paid-area or street transfer is TBC. No
other current interchange is established by the checked primary material.

### Depot

The NTMC Open Danhai Depot page is PRIMARY, Medium confidence for the depot
name and service-area context. It identifies the Danhai Depot. The operator's
checked HTML does not publish a station-by-station operating roster, so each
station page records Danhai Depot with the roster allocation TBC.

### Public art

The NTMC public-art page is PRIMARY, High confidence for the Green Mountain
line-wide work. It identifies:

> 「《閉上眼睛一下下》」

by 幾米 (Jimmy Liao), and says the 11 Green Mountain stations use large
cast-bronze sculptures and painted glass: 「沿線的11個站……使用大型鑄銅雕塑與彩繪玻璃」 and 「整條綠山線就是幾米的作品」. The work is recorded for V01–V11 with title, artist and medium. A year and station-specific titles are TBC because the readable primary page does not publish them. No Blue Sea Phase 1 station-specific public-art title, artist, year or medium was established, so those fields remain TBC for V26–V28.

### Naming and landmarks

No checked primary source supplies a dated original/construction-era name,
rename date or gazette announcement for any of the 14 station pages. Naming
history remains TBC. The DORTS Green Mountain table includes the annotation
「加註北投子」 alongside V05; this is recorded as an annotation and not
promoted to a rename.

The station-position table and DORTS station tables support the road,
intersection, bridge, district-office, university, Fisherman's Wharf and
Hongshulin landmarks used in each station record. These are descriptions of
what the operator or builder names near the station, not inferred geography.

## Conflicts

1. The DORTS Green Mountain route page gives the operating opening as 24
   December 2018. The existing line research also records a secondary
   zh.wikipedia value of 23 December 2018 and a 24 December public opening or
   trial distinction. Both values are retained in the line research; the
   station overlay uses the DORTS primary operating date and does not erase
   the secondary conflict.
2. The current NTMC station table places V28 at 「濱海路三段與新民街一段交叉路口東側」.
   The DORTS Blue Sea station table places it at 「濱海路三段與中正路二段交叉路口東側」.
   Both full primary values are retained; the page location uses the current
   NTMC station-table value and the conflict is recorded here.
3. NTMC's FAQ gives toilets only at V01 and V26 and no toilets at the other
   stations; its accessibility page separately identifies those same two
   stations' accessible toilets and nursing rooms. These are complementary
   exceptions to the system-wide no-toilet result, not a reason to fill in
   facilities for the other stations.
4. NTMC's article establishes V03 as elevated and says nearly half the line
   is elevated. It does not establish an individual structure classification
   for the remaining stations, so their structure values stay TBC rather than
   being derived from the line-level proportion.

## Checked and failed

- **Station-specific platform form and track count** — the readable operator
  HTML links to station information documents but does not state these fields;
  the linked documents were not fetched under the no-image contract. Checked
  14 August 2026.
- **Numbered exits and street-emergence positions** — no checked full HTML
  primary page publishes a Danhai exit table. Checked 14 August 2026.
- **Individual structure classifications for stations other than V03** — the
  checked article gives a line-level proportion, not a station-by-station
  list. Checked 14 August 2026.
- **Original names and dated renames** — no dated primary announcement or
  gazette was found in the checked operator and DORTS material. Checked 14
  August 2026.
- **Station-level depot roster** — the operator identifies Danhai Depot but
  does not publish the station allocation roster in the checked HTML. Checked
  14 August 2026.
- **Blue Sea Phase 1 public-art title, artist, year and medium** — no
  station-specific primary record was found in the checked NTMC material.
  Checked 14 August 2026.
- **The linked station PDFs and image documents** — not fetched because this
  run permits image removal only. Checked 14 August 2026.

## Stated gaps

The next useful primary records would be the operator's linked station
information documents for platform, track, exit and lift/ramp details; a
station-by-station Danhai Depot roster; city or operator rename announcements;
and a primary Blue Sea public-art inventory. Until those are read, the page
keeps the affected values as TBC.

## Sources

The implementation source records in `lib/danhai-stations.ts` contain the
complete metadata for the 28 unique primary sources used by the generated
pages: TDX, the NTMC station table and 14 NTMC station detail pages, seven
additional NTMC pages, two DORTS route pages, two DORTS station tables, and the
DORTS shelter-design article. Each record includes the original-language title,
publisher, URL, access date, language, primary kind and a note describing what
it supports.
