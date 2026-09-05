# Taiwan Transit Guide — Taiwan-wide public-transport coverage audit

Audit date: 2026-09-05

This report answers what a credible English-language reference to public
transport across Taiwan would need to cover, and what is still absent from the
repository. It is an audit, not a content-generation pass. The repository
inventory is an observation of the checkout. External findings are based on
full official pages or official data already committed to the repository; a
search result, a research lead and a dynamic page that could not be extracted
are not treated as proof.

The audit was constrained by the project’s single-writer rule. Eight attempted
parallel scout launches were rejected by the account’s thread limit; the stable
scout concurrency available to this run was therefore **one completed
read-only scout at a time**, not the requested 8–12. The scouts that did return
did not write files, run Git, or touch the working tree. The main session
checked the tree after the returned scout work. This is a limitation on breadth,
not permission to lower the sourcing standard.

## 1. Scope definition

The high-level mode test starts with TDX’s public-transport classification:
bus, rail, aviation, shipping and public bicycle. A credible Taiwan Transit
Guide needs two additions that are easy to miss in that list:

1. rural and demand-responsive public transport, including 幸福巴士,
   幸福小黃, community buses and reservation services;
2. clearly labelled accessible/eligibility-based mobility programmes and
   rideable heritage/special passenger systems.

The geographic scope is the 22 first-order jurisdictions usually relevant to
Taiwan public transport: Keelung City, Taipei City, New Taipei City, Taoyuan
City, Hsinchu City, Hsinchu County, Miaoli County, Taichung City, Changhua
County, Nantou County, Yunlin County, Chiayi City, Chiayi County, Tainan City,
Kaohsiung City, Pingtung County, Yilan County, Hualien County, Taitung County,
Penghu County, Kinmen County and Lienchiang County/Matsu.

“Current” means the date on the source, not an unqualified statement that a
route runs every day regardless of weather, season, reservation, subsidy or
temporary closure. Fares, service patterns, project statuses and fleet facts
must carry dates or a source-defined validity period.

## 2. Inclusion and exclusion rules

### Include

- scheduled passenger rail: TRA, THSR, urban metro/LRT, approved/under-
  construction project records, tourism trains and rideable heritage rail;
- city/county buses, intercity 公路客運, community/local buses, tourist buses
  that are scheduled public services, and rural DRT;
- public bike-share systems, with a dock represented as a table row rather than
  a page;
- scheduled domestic passenger ferries, island services, urban/harbour ferries,
  terminals, operators, vessels and dated service notices;
- domestic scheduled aviation as inter-island passenger connectivity, with
  airports and route families but not a general airline encyclopaedia;
- gondolas/ropeways and unusual systems when they carry the public on a
  repeatable scheduled service, labelled `special transport` where their
  primary purpose is tourism;
- system-level taxi/payment/accessibility policy, not mass operator directories;
- national statistics and policy when definitions, dates and denominators are
  explicit.

### Exclude or keep outside the core

- private tour packages, charter boats, private shuttles and sightseeing cruises
  with no public-transport role;
- attraction rides that happen to carry passengers, unless a source establishes
  a scheduled public-transport function;
- international aviation except airport ground interchange;
- freight-only rail, closed lines presented as current transport, museum stock
  that cannot be ridden, and abandoned infrastructure;
- per-taxi-company or per-driver directories;
- per-vehicle bus registration census, registration ranges and crowd-sourced
  fleet lists;
- live flight/ship/bike availability as the canonical reference layer;
- fares or project dates without a dated primary source.

The site can mention an excluded subject in a history or context article, but
must label it so a reader never has to infer whether it is currently rideable
or bookable.

### Institutional taxonomy check

The legal distinction is useful for architecture: the Ministry of
Transportation’s automobile-transport regulation defines 公路汽車客運業 as
passenger service on an approved route and 市區汽車客運業 as passenger service
within an approved area. The Highway Bureau’s service-evaluation rules further
split highway coach into national-highway and general-highway groups, with
ordinary and subsidised general routes.

TDX’s current public-transport registry is broader than the simplest five-mode
summary: it exposes `PTX-DRTS` (需求反應式(DRTS)公車), bus, rail, public bike,
aviation, shipping and tourism. Its API versions are not interchangeable. V2
explicitly models `CityBus` and `InterCityBus`, while V3 models `CityBus`,
`ShuttleBus` and `DRTS` and has no `InterCityBus` path. This is an important
architecture seam, not a reason to call the missing V3 path proof that highway
coaches disappeared.

TDX’s current bus supply table contains 24 source-unit rows, including all 22
first-order jurisdictions plus the Highway Bureau and Tourism Administration.
That is an inventory of data providers, not proof that each local transport
universe is complete. The MOTC daily-transport survey is a useful user-facing
cross-check: it lists aircraft, HSR, TRA, national/general highway coach,
metro/LRT, city bus, taxi, company transport, free/rehabilitation buses and
ferries as public-transport modes. Therefore the site should retain a core
mode taxonomy and add policy/eligibility layers where TDX does not provide a
matching route API.

## 3. Current site inventory by mode

The checkout contains the following authored/generated page counts, excluding
`_index.md` files:

| Mode | Current page count | What is genuinely present |
|---|---:|---|
| Rail | 585 | TRA station pages, THSR pages, Taipei/New Taipei/Taoyuan/Kaohsiung systems, project/history/technology material, Maokong and Alishan/special rail. |
| Bus | 1,133 | 1,051 route overlays plus operators/models/depots/network and four regional data overlays. The route snapshot is Taipei/New Taipei only. |
| Bike | 30 | Five implemented TDX jurisdictions, district/index pages and history; no dock pages. |
| Ferry | 7 | Blue Highway, Kaohsiung Cijin, Green Island, Kinmen, Matsu, Penghu and Orchid Island subjects. This is a researched scaffold, not a national route registry. |
| Air | 4 | Three airport pages plus a main-island/outlying-island grouping and one domestic-carrier page. Not a current domestic route table. |
| Road | 2 | National road context and taxi/ride-hailing regulation. |
| Ticketing | 7 | Payment/pass/reference guides. |
| Statistics | 3 | National/statistical reference pages. |

The structured bus data layer has 1,051 route records, 61,756 stops, 61
operators, shapes, stop sequences and a curated bus–rail join file. The route
records split as 636 New Taipei and 415 Taipei records. That is a valuable
Taipei-region corpus; it is not a national city-bus inventory.

Existing regional data layers add Hsinchu (68 routes), Taichung (392 route
identities), Tainan (165 routes) and Kaohsiung (316 routes), but they are not
yet exposed as a uniform national bus architecture. These counts are committed
snapshot observations, not claims about the total number of current routes in
those jurisdictions.

The committed intercity snapshot at `data/intercity-bus/routes.json` contains
1,837 route records, 44 operator records and 132,398 timetable rows, retrieved
2026-08-25 from the Highway Bureau’s open-data seam. A fresh full CSV extraction
on 2026-09-05 produced 1,835 grouped operator/route/branch/direction/name
variants, 43 distinct operator labels and 132,522 data rows. These are different
dated snapshots; neither is a permanent legal route count.

The bike snapshot at `data/tdx/bike/stations.json` contains 7,403 station rows
and 192,573 published dock-capacity spaces in Taipei, New Taipei, Taoyuan,
Taichung and Kaohsiung. It deliberately excludes live availability. A fresh
TDX station pull on 2026-09-05 returned 9,522 YouBike rows across 13
jurisdictions, while the two MOOVO feeds returned 202 Changhua and 263 Yunlin
rows without a comparable dock-capacity field. Those raw rows are not guaranteed
active-station totals, but they prove the committed repository layer is stale
or intentionally narrowed relative to current TDX supply. The repository does
not currently have a nationwide public-bike operator/system layer.

## 4. Current site inventory by geography

The following table is a page-depth audit, not a statement that a jurisdiction
lacks the transport mode in real life. `●` means a meaningful first-class site
layer exists; `◐` means partial, a regional dataset, an aggregate page or a
research scaffold; `○` means project/lead material without a current operating
system layer; `—` means no first-class page/data layer found in this checkout.
TRA/THSR generated pages make rail appear more geographically complete than the
other modes; they do not supply local bus, ferry or DRT coverage.

| Jurisdiction | Rail | Metro/LRT | City/county bus | Intercity coach | DRT/Happiness | Bike | Ferry | Domestic air | Special/heritage | Terminal/interchange | Main gap |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|---|
| Keelung | ● | ◐ | — | ◐ | ◐ | — | — | — | — | ◐ | City bus, ferry/port and Keelung MRT depth. |
| Taipei | ● | ● | ● | ◐ | ◐ | ● | ● | ◐ | ● | ◐ | National context and cross-mode terminal layer. |
| New Taipei | ● | ● | ● | ◐ | ◐ | ● | ● | — | ◐ | ◐ | DRT/community-bus normalization and terminals. |
| Taoyuan | ● | ● | — | ◐ | — | ● | — | ● | — | ◐ | City bus and rural mobility. |
| Hsinchu City | ● | ○ | ◐ | ◐ | — | — | — | — | — | ◐ | Uniform bus, bike and proposed rail layer. |
| Hsinchu County | ● | ○ | ◐ | ◐ | — | — | — | — | — | ◐ | County buses, DRT and bike systems. |
| Miaoli | ● | — | — | ◐ | — | — | — | — | — | ◐ | County bus, DRT and bike. |
| Taichung | ● | ● | ◐ | ◐ | — | ● | — | ◐ | — | ◐ | Expose existing bus data and regional interchange. |
| Changhua | ● | — | — | ◐ | — | — | — | — | — | ◐ | City/county bus and current MOOVO system. |
| Nantou | ● | — | — | ◐ | — | — | — | — | — | ◐ | Rural bus/DRT and tourism transport. |
| Yunlin | ● | — | — | ◐ | — | — | — | — | — | ◐ | County bus/DRT and public bike. |
| Chiayi City | ● | — | — | ◐ | — | — | — | — | ◐ | ◐ | City bus and Alishan/rail interchange. |
| Chiayi County | ● | — | — | ◐ | — | — | — | ◐ | ● | ◐ | County bus, DRT and heritage rail access. |
| Tainan | ● | ○ | ◐ | ◐ | — | — | ◐ | ◐ | — | ◐ | City bus depth, ferry/airport and project status. |
| Kaohsiung | ● | ● | ◐ | ◐ | — | ● | ● | ● | — | ● | Expose existing bus feed and complete port/rail joins. |
| Pingtung | ● | ○ | — | ◐ | — | — | — | — | — | ◐ | County bus, DRT, Xiaoliuqiu ferry and airport links. |
| Yilan | ● | — | — | ◐ | — | — | — | — | — | ◐ | County bus, DRT and special/heritage services. |
| Hualien | ● | — | — | ◐ | — | — | — | — | — | ◐ | County bus, DRT, ferry/air and tourism rail links. |
| Taitung | ● | — | — | ◐ | — | — | ◐ | ◐ | — | ◐ | County bus/DRT and island ferry/air connectivity. |
| Penghu | — | — | — | — | ◐ | — | ● | ● | — | ◐ | Local/inter-island buses, bikes, ferries and terminals. |
| Kinmen | — | — | — | — | ◐ | — | ● | ● | — | ◐ | Local bus, bike, DRT and Small Three Links integration. |
| Lienchiang/Matsu | — | — | — | — | ◐ | — | ● | ● | — | ◐ | Local island bus, ferry, airport and inter-island joins. |

The matrix makes the central answer visible: the site has good first-class
coverage in Taipei/New Taipei rail and bus, substantial rail coverage elsewhere,
and a small but useful set of ferry/air/special pages. It does not yet have
first-class city/county bus coverage across Taiwan.

## 5. Modal audit and national gaps

### Urban rail and metro/LRT

Current official findings support first-class current/status pages for:

- operating Taipei/New Taipei/Taoyuan/Kaohsiung systems, including Xinyi East
  opening 2026-08-30 and Sanying paid operation from 2026-09-01;
- Taipei Circular East/North/South and Wanda construction activity;
- New Taipei Wanda–Zhonghe, Tucheng–Shulin, Xidong and Keelung first stage;
- Sanying–Bade as Executive Yuan-approved with detailed design launched July
  2026;
- Taoyuan Green Line construction, Green Line–Zhongli early works, Airport MRT
  A23 construction and Brown Line advance works;
- Taichung Blue construction, Green extension approved feasibility and Airport
  Orange feasibility approved 2026-08-18;
- Kaohsiung Yellow, Siaogang–Linyuan and Gangshan–Luzhu 2A construction, with
  Purple still in feasibility review;
- Tainan Blue as approved/pre-construction rather than operating;
- Hsinchu Red/Blue as a funded and awarded integrated feasibility study, not
  construction;
- Keelung first stage approved/early works, with second stage still feasibility.

The correct architecture is a live project/status index plus first-class line
and station pages only when the source-backed identity and route are sufficiently
stable. A feasibility study should not generate a false operating station list.
Project pages can exist for central approval, funding, construction or active
official feasibility work, with a visible status badge and as-of date.

The official pages themselves contain material conflicts and stale boilerplate:

- Xidong shows `0%` in a controlled-plan progress view and `31.23%` in an
  overall-progress news release; preserve both and label their measures.
- Green Line–Zhongli is simultaneously described as package/vendor selection
  and as substantive early works; this appears to be programme/package scope.
- The same Tucheng–Shulin page has construction packages open but introductory
  text describing earlier planning/tender stages.
- Sanying–Bade’s dated history says approved and in detailed design while its
  route disclaimer still says not approved.
- Tainan Blue has a stale advance-works target versus the current page’s
  pre-tender description.

The current content should not flatten these. It should be rechecked on each
status refresh.

### Conventional and high-speed rail

TRA and THSR are the strongest geographically national layer already present,
but the next phase should revalidate station/service counts against current
official maps and service tables rather than reuse corpus numbers. TRA’s
official route map exposes active service across the western and eastern
counties plus Pingsi, Shenao, Neiwan, Liujia, Jiji and Shalun branches. A TRA
tourism page currently lists `環島之星萌旅號`, `鳴日號/鳴日廚房`, `藍皮解憂號`,
`海風號` and `山嵐號` as products. These deserve dated tourism-train product
records, not automatic treatment as ordinary all-day routes.

Missing depth is mostly service patterns, train classes, rolling stock/depot
context, current ticketing/fare integration, historical closures and a
consistent terminal/interchange layer. No per-vehicle census should be
promised.

### City/county bus

The 1,051-route corpus is geographically concentrated: 636 New Taipei and 415
Taipei. It is not nationwide city/county bus coverage. Hsinchu, Taichung,
Tainan and Kaohsiung feeds prove the architecture can accept more than one
regional seam, but their schemas and presentation are not yet unified.

The next bus layer needs a jurisdiction registry, source snapshot date, route
identity, operator, service class, direction/variant, stop sequence, geometry,
fare/payment, reservation requirement, status and overlay/source record. The
TDX layer must remain separate from researched prose. Operators, models and
depots should be pages only when a source-backed identity exists; vehicle
registration ranges remain TBC.

### Intercity/highway coach

The Highway Bureau open-data snapshot is already a useful national structured
seam. The committed 2026-08-25 snapshot contains 1,837 route records, 44
operators and 132,398 timetable rows; a fresh full CSV extraction on 2026-09-05
contains 1,835 grouped variants, 43 operator labels and 132,522 data rows. It
should become an explicit `/bus/intercity/` discovery layer rather than a hidden
parallel data set. The exact current legal route universe is still TBC until the
source’s identity, variant and validity rules are audited. City-bus and coach
routes may share stops or operators but must not share canonical pages without an
identity join.

### 幸福巴士, 幸福小黃 and other DRT

The Highway Bureau’s current `幸福巴士及幸福小黃營運資訊` page is a national,
paginated route registry with jurisdiction filters and rows containing service
type, area, route name, stops and modification date. A fetched official detail
shows both fixed daily service and genuinely flexible reservation service. For
example, the Gongliao flexible route says `貢寮區全區預約，可跨區至雙溪火車站`,
`每日可預約5班次`, and documents different passenger thresholds for solitary
elderly users and other passengers.

These are not edge trivia. They are the public network in places where a fixed
city-bus feed is sparse. Recommended model:

- `/bus/drts/` national landing page, then jurisdiction/township indexes;
- one canonical route/service record when the official identity is stable;
- fields for `serviceClass` (`community-rural`, `demand-responsive-public`,
  `hail-and-ride`, `eligibility-accessible`, `long-term-care-medical`),
  `fixedSchedule`, `bookingRequired`, `openToNonEligiblePassengers`,
  `fareModel`, `wheelchairAccessible`, booking lead time and source date;
- no duplicate city-bus route URL when a route is also a fixed community bus;
- route pages for stable public services, township/index pages for image-only or
  frequently changing reservation tables.

The current exact nationwide route total is TBC because the fetched register is
paginated and not yet extracted into a validated snapshot.

### Accessible and eligibility-based mobility

Include a clearly labelled national reference layer, not an unqualified claim
that every rehabilitation vehicle is ordinary public transit. Official Taipei,
New Taipei and Keelung pages establish reservation-only, point-to-point,
disability-prioritised or medical-purpose services with eligibility and service
area rules. They are useful to a transport reader, but their eligibility,
booking, fare and trip-purpose rules must be visible at the top.

Recommended: policy/service-area pages and jurisdiction indexes first; route
pages only where a stable public programme identity exists. Keep rehabilitation,
long-term-care medical transport, accessible taxi and open DRT as separate
classes. Do not infer Indigenous-only eligibility merely from an Indigenous
service area.

### Public bicycle

The current 7,403-station snapshot in five jurisdictions is substantial but
not national. A 2024 institutional study identified public-bike systems in at
least 15 counties/cities, and current Changhua government information says
MOOVO reached 202 stations across 17 townships in August 2026. The exact current
all-Taiwan total is TBC until the operator/TDX feeds are enumerated directly;
the study is a dated institutional lead, not a live registry.

YouBike is not the only system. MOOVO remains an important different model, with
Changhua’s official notice describing TPASS first-30-minute free use from
September 2026. Other systems, including possible local schemes in offshore
counties, require current primary verification before inclusion.

Preserve the existing rule: a dock is a table row, not a page. Add system,
county, district and operator pages, dock-capacity snapshots, pricing/bike-type
fields, and explicit no-live-availability wording.

### Passenger shipping and ferries

The current seven ferry subjects are useful but leave a national gap. The
Maritime and Port Bureau’s full `兩岸航運業務` page currently establishes four
Small Three Links route pairs:

1. Kinmen–Xiamen Wutong;
2. Kinmen–Quanzhou Shijing;
3. Matsu Nangan Fuao–Fuzhou Langqi;
4. Matsu Beigan Baisha–Fuzhou Huangqi.

That same source states 12 Kinmen–Xiamen round trips daily from 2025-01-14,
two Kinmen–Quanzhou round trips from the same date, and four Matsu round trips
daily from 2024-04-01. These are dated service statements, not a promise that
weather or border rules cannot suspend them.

The MPB `BoatSchedule` page exposes date, origin, destination and sailing-time
queries and gives voyage-duration statements of approximately 30 minutes
(Kinmen–Xiamen), 60 minutes (Kinmen–Quanzhou), 90 minutes (Nangan–Langqi) and
30 minutes (Beigan–Huangqi). The MPB domestic fixed-service and passenger-ship
pages are the authoritative seams for the complete route/vessel/terminal table,
but their dynamic records were not extractable in this audit. The exhaustive
domestic family list therefore remains TBC rather than being guessed.

The next ferry model should cover, with current status per route:

- Taiwan–Matsu, Taiwan–Penghu and Taiwan–other inhabited islands;
- Penghu inter-island services;
- Matsu inter-island services;
- Kinmen local island services and Small Three Links separately;
- Donggang–Xiaoliuqiu and Taitung–Green Island/Orchid Island families;
- Kaohsiung Gushan–Cijin, Fronten–Zhongzhou and KW2/Cijin services;
- New Taipei/Tamsui Blue Highway only where the service is a scheduled public
  passenger route, separate from Danjiang sightseeing tours.

Pages should exist for route family, terminal/port, operator and vessel only
when the MPB/operator source supplies a stable identity. Ferry terminal pages
are the natural cross-mode join point for bus, rail and accessibility, but names
alone must not create a join.

### Domestic aviation

CAA’s current domestic-reservation page, updated 2026-07-30, lists three
domestic reservation carriers: UNI Air (`立榮`), Mandarin Airlines (`華信`) and
Daily Air (`德安`). CAA’s domestic airport/accessibility material exposes the
main-island and island airports including Songshan, Taichung, Chiayi, Tainan,
Hualien, Taitung, Kinmen, Penghu, Nangan, Beigan, Green Island, Orchid Island,
Qimei, Wang’an and Hengchun.

The current site should have airport pages, but as intermodal reference nodes:
location, domestic carriers/routes, ground transport, accessibility, terminal
and island context. Add a route-family table and dated service notices; do not
turn the site into a live flight tracker or global airline directory. Current
carrier-to-route families, essential-service/subsidy rules and seasonal
availability remain TBC until the airline/CAA schedules are extracted.

### Gondolas, ropeways, heritage and tourist public transport

Maokong Gondola is already a clear special passenger-system page. Treat it as
scheduled special transport with an explicit tourism label. Sun Moon Lake
Ropeway should stay outside the core transit taxonomy unless a current primary
source establishes that it operates as a scheduled public-transport connector;
it is presently best treated as attraction/tourism transport.

Alishan Forest Railway is a rideable passenger product, but its current status
cannot be stated without a conflict note. The operator FAQ says `因目前林業鐵路
尚未全線(嘉義-阿里山)復駛，僅行駛嘉義-十字路段`, while the operator homepage
reports full-line service resumed after a weather suspension on 2026-08-26.
The existing content’s simple “full-line reopened in 2024” wording is therefore
not sufficient as a current-status sentence. Publish the historical 2024
opening, the current official disagreement, and the latest dated timetable
state separately until reconciled.

TRA’s named tourism trains belong as scheduled rail-tourism products. Sugar and
forestry passenger operations, museum trains and restored lines belong in a
special/heritage layer only after a current operator source confirms that a
reader can ride them. Display-only stock and abandoned alignments are history,
not active transport.

### Taxi, payment and integration

Keep taxi/ride-hailing as a policy/system layer: ordinary yellow taxis,
多元化計程車, fare/regulatory history, airport regimes, accessible taxi and
the relationship between taxis and 幸福小黃. Do not create thousands of taxi
company pages.

Expand the existing ticketing layer to date EasyCard, iPASS, icash 2.0, cash,
QR/mobile payment, TPASS, metropolitan passes, transfer discounts, concessions
and tourism passes. Hardware/vendor claims remain TBC unless an operator or
procurement source establishes them. Each pass needs a validity geography,
mode list, fare date and exclusion note.

## 6. Tiers of work

### Tier A — core national completeness

1. A current index for all 22 jurisdictions.
2. City/county bus coverage for every jurisdiction with a public route system,
   including the existing regional feeds exposed consistently.
3. National intercity/highway coach discovery and dated route data.
4. Happiness Bus/Happiness Taxi and community/DRT coverage.
5. Current ferry route families, island links, terminals and Small Three Links.
6. Domestic airports and current inter-island route families.
7. Public-bike system coverage beyond the five current TDX jurisdictions.
8. Current status of operating and materially active urban rail projects.

These absences make the “Taiwan Transit Guide” name materially misleading.

### Tier B — important depth

9. Operators, terminals, depots and maintenance bases where documented.
10. Fare/payment integration and dated concessions.
11. Accessibility/reference layer with eligibility and booking rules.
12. TRA/THSR service patterns, classes, tourism products and current projects.
13. Airport/port/rail/bus interchange pages with explicit join rules.
14. Zero-emission bus, rural-access, operator-evaluation and ridership policy.
15. Tourism-oriented scheduled public transport such as Taiwan Tourist Shuttle.

### Tier C — specialist depth

16. Rolling stock, vessels, bus models and historical fleet evolution.
17. Depots, maintenance facilities and infrastructure/engineering history.
18. Heritage/forestry/sugar passenger operations and closed-line context.
19. Station architecture, public art and Japanese-era railway history.
20. Detailed national statistics, modal definitions and network-growth timelines.

### Tier D — explicitly out of scope

Private tour directories, per-driver/per-vehicle census, attraction rides without
a transport role, live operational control, general international aviation,
freight systems and unsourced “complete” lists should not expand the project.

## 7. Recommended canonical URL and data architecture

Keep geography as a cross-cutting index, not a duplicate hierarchy. Suggested
families:

| Need | Canonical family | Rule |
|---|---|---|
| Jurisdiction discovery | `/regions/<jurisdiction>/` | One geography lens linking to canonical mode pages. Expand from seven to 22. |
| City/county bus | `/bus/routes/<group>/<slug>/` | Preserve current route identity and group precedence; add jurisdiction metadata, not duplicate jurisdiction URLs. |
| Intercity coach | `/bus/intercity/` and `/bus/intercity/<route-or-corridor>/` | Separate discovery and data layer from city-bus routes; canonicalise by source route identity. |
| DRT/community | `/bus/drts/`, `/bus/drts/<jurisdiction>/`, optional stable route pages | Use service class and booking/eligibility fields; avoid duplicate fixed-bus pages. |
| Rail | existing `/rail/<system>/...` | Preserve operator/system namespaces and project/operating status. |
| Ferries | `/ferry/routes/`, `/ferry/terminals/`, `/ferry/operators/`, `/ferry/vessels/` | Route family, terminal and vessel are distinct entities; small links get a labelled sub-index. |
| Aviation | `/air/airports/`, `/air/routes/`, `/air/operators/` | Airport is an intermodal node; routes are dated service families, not live flights. |
| Bike | `/bike/systems/`, `/bike/stations/<jurisdiction-or-district>/` | System/district pages and station table rows; no dock URLs. |
| Special/heritage | `/rail/heritage/` or a future clearly labelled `/special/` | Current rideability/status required; attraction-only content stays labelled/outside core. |
| Fare/integration | existing `/ticketing/` plus dated mode/pass indexes | One source-backed pass/product record, no copy-pasted fare claims on every page. |

The data model needs a common `serviceIdentity` with operator, authority,
jurisdiction, mode, status, effective date, source snapshot, geometry/terminal
references, booking and eligibility fields. `status` must distinguish operating,
seasonal, suspended, proposed, feasibility, approved, construction, historical
and attraction-only. A source conflict is an object, not a string overwritten by
the latest fetch.

Cross-mode joins should be explicit and typed:

- bus–rail remains stop ID plus geometry only;
- ferry–terminal–bus/rail uses official terminal/stop identifiers plus geometry
  and a source-backed relationship;
- airport–ground transport uses airport code/official node plus source-backed
  access routes;
- operator names are not joins by text similarity;
- a named place appearing in two modes is a candidate, never confirmation.

Expected page magnitude is not yet a precise count. A national first-class
reference will likely add several thousand canonical pages: jurisdiction/mode
indexes, hundreds or thousands of stable city/intercity/DRT route records,
dozens of ferry/terminal/air/bike system records and selected operator/project
pages. The raw data universe is larger. Do not pre-generate every dock, every
temporary DRT timetable row or every individual vehicle. Exact page counts must
come from the source identity audit, not an invented target.

## 8. Primary-source seams and gaps

| Seam | What it can settle | Audit result |
|---|---|---|
| [Highway Bureau Happiness Bus/Happiness Taxi register](https://www.thb.gov.tw/News.aspx?_CSN=4020&n=10738&sms=13903) | Jurisdiction, service class, route/stops, modification dates | Full page fetched; paginated national register confirmed. Exact total TBC pending extraction. |
| [Highway Bureau intercity open data](https://www.thb.gov.tw/News_Content_thbOpenData.aspx?n=13&s=599) and [timetable CSV](https://www.taiwanbus.tw/TimeTableExport/timetable.csv) | National coach route/operator/timetable identity | Committed snapshot exists; current identity/validity audit still needed. |
| [TDX API service](https://tdx.transportdata.tw/api-service/swagger/advanced/1a723c95-9edf-4dc9-9892-6cdbab40b7a9) | Common bus/rail/bike/transport-data schema | Official seam identified; Swagger shell did not expose usable full content in fetch, so no snippet was used as evidence. |
| [TDX public-transport categories](https://tdx.transportdata.tw/webapi/DataProvide/category) and [bus supply status](https://tdx.transportdata.tw/webapi/DataProvide/PTX-Bus) | Official mode/source-unit taxonomy and current supply flags | Full JSON feeds fetched by scout; 24 bus source-unit rows and a separate DRTS category confirmed. |
| [TDX DRTS supply status](https://tdx.transportdata.tw/webapi/DataProvide/PTX-DRTS) | Whether DRTS is supplied by each jurisdiction | Full official JSON; current rows are not national, so missing supply is recorded as “not shown,” not “does not exist.” |
| [TDX V2 Bus OpenAPI](https://tdx.transportdata.tw/webapi/File/Swagger/V3/2998e851-81d0-40f5-b26d-77e2f5ac4118) and [V3 Bus OpenAPI](https://tdx.transportdata.tw/webapi/File/Swagger/V3/939d7b26-14d6-40bc-bdc9-a076e3f8d4dc) | Version-specific CityBus/InterCityBus/ShuttleBus/DRTS fields | Full official OpenAPI documents; V2/V3 split retained as a data-model warning. |
| [MOTC automobile transport regulation](https://motclaw.motc.gov.tw/webMotcLaw2018/Law/RelateLawContent?LawID=E0043018&LawType=1&RefLawID=E0046101) | Legal city-bus versus highway-coach distinction | Full official law page; primary institutional taxonomy. |
| [CAA domestic reservation carriers](https://www.caa.gov.tw/article.aspx?a=277&lang=1) | Current domestic carrier names and contact/website records | Full page fetched; three carriers confirmed as of 2026-07-30. |
| [CAA domestic airports/accessibility](https://www.caa.gov.tw/Article.aspx?a=1366&lang=1) | Domestic island airport universe and access context | Official airport list seam found; route-family extraction remains. |
| [MPB Small Three Links schedule](https://www.motcmpb.gov.tw/BoatSchedule?nodeId=380&siteId=1) | Current queryable routes, times and voyage durations | Full page fetched; four route pairs and duration statements confirmed. |
| [MPB cross-strait operations](https://www.motcmpb.gov.tw/Information/Detail/68173c5b-6b25-401f-ab32-62a7d902bd95?NodeId=334&SiteId=1) | Small-links route/round-trip/service statements and vessels | Full page fetched; dated service statements confirmed. |
| [MPB domestic passenger information](https://www.motcmpb.gov.tw/Information?nodeId=378&siteId=1) | Domestic fixed routes, ports and operators | Official dynamic navigation found; row-level records were not extractable in this audit. |
| [MPB passenger-ship inventory](https://www.motcmpb.gov.tw/PassengerShip?nodeId=610&siteId=1) | Vessel/operator/route/terminal records | Official structured seam identified; full detail fetch failed, so no exhaustive count claimed. |
| [CAA current flight information](https://www.caa.gov.tw/ImmediateFlight.aspx?a=270&lang=1&sad=A&sap=MZG&sl=1) | Current airport/carrier route examples | Official dynamic seam; not used as a permanent schedule source. |
| [YouBike official service](https://www.youbike.com.tw/region/main/) | Service regions, rental rules and operator links | Full page fetched; live regional list is dynamic. |
| [TDX national bike station dataset](https://data.gov.tw/dataset/177482) and [real-time dataset](https://data.gov.tw/dataset/177480) | Current station schema, raw feed rows and live-availability separation | Full official catalogue/TDX pull; 9,522 YouBike rows across 13 jurisdictions in this audit, plus separate MOOVO feeds. |
| [Tourism Administration public-bike information](https://www.tad.gov.tw/m1.aspx?sNo=0027024) | System model, pricing/payment and non-YouBike leads | Full page fetched; confirms city-dependent charges and MOOVO presence. |
| [Changhua MOOVO notice](https://www.chcg.gov.tw/DTO/traffic/03bulletin/bulletin02_con.aspx?bull_id=437062) | Current Changhua system scale and TPASS integration | Full page fetched; 202 stations/17 townships as of 2026-08-28. |
| [TRTC/municipal metro sources](https://www.dorts.gov.taipei/Content_List.aspx?n=DB5E985E6B7CAB80) | Current Taipei construction/status | Full source fetched; Circular/Wanda activity confirmed. |
| [New Taipei Sanying paid operation](https://ori-www.ntmetro.com.tw/basic/?mode=detail&node=893) | Current paid operation date | Full official operator source; 2026-09-01 confirmed. |
| [New Taipei Sanying–Bade](https://wedid.ntpc.gov.tw/governance/detail/6YdLEB3olR7b) | Approval/detailed-design status | Full official source; approved/detailed design confirmed, disclaimer conflict retained. |
| [Taoyuan rail progress](https://dorts.tycg.gov.tw/cp.aspx?n=23173) | Green/Airport/Brown progress | Full official source; programme/package conflicts retained. |
| [Taichung MRT project pages](https://tcrt.taichung.gov.tw/content/index?Parser=1%2C6%2C46) | Blue/Orange/Green/project status | Full current pages fetched for main status; individual timeouts recorded. |
| [Kaohsiung route progress](https://mtbu.kcg.gov.tw/KaohsiungMetro/Roadmapschedule.html) | Operating/construction/feasibility status | Full official route-progress source; Purple/relevant construction states confirmed. |
| [TRA current station map](https://www.railway.gov.tw/tra-tip-web/tip/tip007/tip711/mapView) | Active station geography/service map | Full official page fetched; current route/station seam. |
| [TRA tourism products](https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH21/view?tripNo=) | Rideable named rail-tourism products | Current official page fetched; product names confirmed. |
| [Alishan operator FAQ](https://afrch.forest.gov.tw/faqs) and [operator homepage](https://afrch.forest.gov.tw/) | Current rideability, branch/mainline status | Both official pages fetched and conflict; must publish both until reconciled. |
| [MOHW rehabilitation-bus hub](https://www.mohw.gov.tw/cp-88-235-1-45.html) | National programme/service-area lead | Official seam identifies county/city service information; individual rules need local primaries. |
| [New Taipei rehabilitation-bus rules](https://www.traffic.ntpc.gov.tw/userfiles/1130901/files/%E6%96%B0%E5%8C%97%E5%B8%82%E6%94%BF%E5%BA%9C%E4%BA%A4%E9%80%9A%E5%B1%80%E8%BA%AB%E5%BF%83%E9%9A%9C%E7%A4%99%E8%80%85%E5%B0%8F%E5%9E%8B%E5%BE%A9%E5%BA%B7%E5%B7%B4%E5%A3%AB%E6%9C%8D%E5%8B%99%E9%A0%88%E7%9F%A5.pdf) and [Taipei rehabilitation-bus FAQ](https://pto.gov.taipei/News_Content.aspx?n=6B4D38874E971F4B&s=552F428E9CF5508D) | Eligibility, booking, service area and point-to-point rules | Full official pages; support a reference layer, not open-route equivalence. |
| [Keelung accessible rehabilitation transport](https://www.klepb.klcg.gov.tw/tw/klepb1/2805.html) | Current local eligibility and booking windows | Full municipal page updated 2026-07-21; other programme documents conflict and must remain separate. |

### Checked and failed

- The TDX Swagger URL returned a JavaScript shell without usable full service
  records. Search-result wording was not used as evidence.
- MPB domestic passenger/fixed-service pages and the passenger-ship inventory
  were dynamic or returned an internal fetch error before row-level extraction.
  They remain the next-run source seams; this report does not claim an exhaustive
  domestic ferry count.
- The Wulai community-bus timetable PDF timed out; no timetable value was used.
- Several Hsinchu/municipal project pages returned 403 or timed out; statuses
  were taken only from successfully fetched official pages and marked where
  review remains.
- The account could not sustain the requested scout concurrency: eight launch
  attempts were rejected by the thread limit. No scout was allowed to write or
  coordinate further work.

## 9. Tiered coverage priorities

These are the 20 highest-value additions, in implementation order.

1. Build the 22-jurisdiction × mode registry and expand `/regions/` without
   duplicating canonical content.
2. Extract every current city/county bus source and map each route identity to
   a source snapshot, operator, jurisdiction and service class.
3. Expose Hsinchu, Taichung, Tainan and Kaohsiung bus datasets through the same
   index/template contract as Taipei/New Taipei.
4. Add missing city/county bus seams for Keelung, Taoyuan, Miaoli, Changhua,
   Nantou, Yunlin, Chiayi, Pingtung, Yilan, Hualien, Taitung and offshore areas.
5. Promote the dated intercity snapshot (currently 1,835 grouped variants in
   the 2026-09-05 CSV) to a coach network page, with corridor/operator/terminal
   discovery and no duplicate city-bus URLs.
6. Extract the Highway Bureau Happiness Bus/Happiness Taxi register and create
   DRT/community indexes with booking/fare/status labels.
7. Add local accessible/rehabilitation/medical transport reference pages with
   eligibility clearly separated from open DRT.
8. Enumerate MPB domestic fixed passenger routes and terminals; publish the
   four Small Three Links pairs as a distinct cross-border category.
9. Complete scheduled island ferry families: Penghu, Matsu, Kinmen, Xiaoliuqiu,
   Green Island, Orchid Island and Taiwan mainland ports.
10. Add ferry terminals/operators/vessels and source-backed port interchange
    joins.
11. Build the domestic-airport node layer and extract current carrier/route
    families for Penghu, Kinmen, Matsu, Green Island and Orchid Island.
12. Audit every current public-bike operator/system, starting with MOOVO and
    all counties outside the five TDX jurisdictions; retain dock-as-row.
13. Revalidate TRA/THSR station/service/ticketing counts and tourism products
    against current official registries.
14. Correct and status-date Alishan and other rideable heritage/special rail;
    verify sugar/forestry passenger operations before adding them.
15. Refresh current urban rail project records, preserving official conflicts
    and refusing station pages for speculative proposals.
16. Add Taiwan Tourist Shuttle and similar scheduled tourism services under a
    clear public-transport criterion.
17. Add national fare/payment/TPASS integration records with dates and scope.
18. Add operator/terminal/depot/maintenance page families where sources support
    stable entities; keep per-vehicle census TBC.
19. Add national policy/statistics overlays for rural access, ridership,
    electrification, accessibility, evaluation and investment.
20. Add historical/closed-line and Japanese-era context only after current
    network fundamentals are covered and each claim has a direct source.

## 10. Explicit answers to the 30 required questions

1. **Does the site genuinely cover city/county buses nationwide?** No. The
   1,051-route corpus is 636 New Taipei plus 415 Taipei; four regional feeds
   are present but not a national first-class architecture.
2. **Which jurisdictions are weak?** Most outside Taipei/New Taipei are weak or
   near-zero in first-class bus/DRT/bike/ferry depth, especially Keelung,
   Taoyuan city buses, Miaoli, Changhua, Nantou, Yunlin, Chiayi, Pingtung,
   Yilan, Hualien, Taitung, Penghu, Kinmen and Matsu.
3. **What is the current intercity route universe?** The committed dated
   snapshot contains 1,837 route records, 44 operators and 132,398 timetable
   rows; the fresh 2026-09-05 official CSV contains 1,835 grouped variants, 43
   operator labels and 132,522 rows. The source-defined legal universe remains
   TBC until identity and validity rules are audited.
4. **How should 幸福巴士/幸福小黃 fit?** A distinct DRT/community layer with
   national and jurisdiction/township indexes, stable route pages where useful,
   and explicit fixed/flexible/reservation/fare fields; no duplicate canonicals.
5. **Should 復康巴士/accessibility transport be in scope?** Yes, as a labelled
   eligibility/reference layer, not as ordinary open-to-all route coverage.
6. **How large is public-bike coverage and what is absent?** The repository has
   7,403 stations and 192,573 capacity spaces across five jurisdictions. A
   fresh TDX pull returned 9,522 YouBike rows across 13 jurisdictions plus 202
   Changhua and 263 Yunlin MOOVO rows; those are raw feed rows, not guaranteed
   active totals. The missing layer is nationwide systems/operators/coverage,
   not dock-page generation.
7. **What scheduled domestic ferry families operate?** The official MPB fixed-
   service/passenger-ship registry is the required source for the complete list.
   The current site/research identifies Taiwan–Matsu, Taiwan–Penghu, Penghu
   inter-island, Matsu inter-island, Kinmen local, Donggang–Xiaoliuqiu,
   Taitung–Green/Orchid Island, Kaohsiung local and Blue Highway families; the
   complete live route inventory is TBC pending MPB row extraction.
8. **What urban/local ferries operate?** Kaohsiung’s current Cijin family
   includes Gushan–Cijin, Fronten–Zhongzhou and KW2/Cijin material; New Taipei’s
   Blue Highway is covered as a public passenger-service subject, with tours
   separated. The nationwide local-ferry inventory remains a priority gap.
9. **What Small Three Links operate?** Kinmen–Xiamen Wutong, Kinmen–Quanzhou
   Shijing, Nangan Fuao–Fuzhou Langqi and Beigan Baisha–Fuzhou Huangqi. MPB’s
   dated page states 12, 2 and 4 daily round-trip figures for the respective
   current service statements.
10. **What domestic scheduled airlines operate?** CAA’s 2026-07-30 reservation
    page lists UNI Air/立榮, Mandarin Airlines/華信 and Daily Air/德安. Route
    families still need direct schedule extraction.
11. **Should airports have pages?** Yes: airport/interchange nodes with domestic
    route families, ground links, accessibility and island context, not live
    flight-status pages.
12. **What special rail can be ridden?** Alishan Forest Railway and TRA named
    tourism products are rideable products, subject to current timetable/status;
    Maokong is an operating special passenger system. Sugar/forestry candidates
    need current operator confirmation.
13. **What is attraction-only?** Sun Moon Lake Ropeway is best kept in a labelled
    tourism/attraction category unless a current source establishes a public-
    transport role. Private cruises and attraction rides are out of core scope.
14. **Which urban projects deserve pages now?** Operating systems and projects
    with central approval, funding, construction or active official feasibility:
    Circular/Wanda/Tucheng–Shulin/Xidong/Keelung, Sanying–Bade, Taoyuan Green/
    Brown/Zhongli/A23, Taichung Blue/Orange/Green extension, Kaohsiung Yellow/
    Siaogang–Linyuan/Gangshan–Luzhu, Tainan Blue and Hsinchu Red/Blue feasibility.
15. **Which are too speculative for first-class line/station pages?** Unapproved
    future proposals and unresolved alternatives in Tainan, Hsinchu, Keelung
    phase 2, Taoyuan’s future list and Taichung Purple/Red/other review-stage
    schemes should be project/index records, not operating line/station pages.
16. **Are current pages stale?** The Alishan content is immediately at risk:
    existing simple full-reopening wording conflicts with current official FAQ
    and homepage status. Existing project pages also inherit official stale
    boilerplate; Xinyi East forward-looking corpus text is stale after its
    2026-08-30 opening.
17. **Missing operator/depot/terminal families?** Yes: national bus operators,
    coach terminals, ferry operators/vessels/ports, airports, public-bike
    systems and many regional depots/interchanges.
18. **Does navigation scale?** Not yet. Top nav plus side rail works locally,
    but caps and long dropdown/list behaviour will not represent 22 jurisdictions
    and many modes without stronger landing pages/search.
19. **Should `/regions/` include all jurisdictions?** Yes. It should be a
    cross-cutting index with coverage/status links, not duplicate hierarchies.
20. **Should geography remain cross-cutting?** Yes. Existing canonical decisions
    and mode namespaces are safer than duplicating route/entity pages by region.
21. **What are the 20 highest-value additions?** The numbered list in section 9
    is the implementation order: jurisdictions, city buses, intercity, DRT,
    accessibility, ferries, aviation, bike, rail correction, special products,
    fares, operators and policy.
22. **What are the 20 highest-leverage UI improvements?** The numbered list in
    `docs/code-ui-architecture-audit.md` prioritises tokens, title hierarchy,
    facts, section intros, large indexes, homepage, regions, tables, related
    links, citations, search, navigation, badges, route scanability, maps,
    imagery, Chinese status and bounded browser coverage.
23. **Which components would they touch?** Primarily `PageShell`, `EntityPage`,
    `FactsPanel`, `CardRow`, `SpecTable`, `RouteMap`, `BusRouteData`,
    `SiteSearch`, `SiteNav`, `SideNavRail`, `LocaleNotice`, `References`,
    `CiteMark`, `Figure`/`PhotoCard`, `lib/regions.ts` and `globals.css`.
24. **Which visual changes are low-risk?** Tokens, spacing/rule refinement,
    section-intro and data-definition strips, related-link grouping, status
    badges, search empty states and card hierarchy when DOM/static fallbacks
    remain unchanged.
25. **Which are high-risk?** Navigation mechanics, locale/canonical links,
    fonts/subsets, Markdown plugin order, page-grid/side-rail breakpoints, map
    interaction, citation markup, joins and any rendered Han expansion.
26. **Is the global stylesheet size a maintenance problem?** It is large but
    organised: 6,604 lines, 165,201 bytes, 34 root variables and 51 media
    blocks. The real issue is near-duplicate title/fact/card/table rules, not
    size alone.
27. **What should be consolidated?** Shared semantic tokens, title/section
    hierarchy, facts/spec/table primitives, card surfaces and nav focus/caret
    styling. Preserve page-specific rules until usage and browser output prove
    they are safe to remove.
28. **What should not be touched?** Hover-gap close delay, Escape/focus logic,
    locale routing, aggregate precomputation, badge context detection, exact
    stop-ID/geometry joins, bus colour precedence, rail namespaces, dashed
    missing-geometry maps, static/no-JS fallbacks, image/font gates, open primary
    lists, `/bus/depots/` and dock-as-row.
29. **What order minimises risk?** Baseline/contracts → source-backed national
    registries → jurisdiction/bus/intercity/DRT/bike/ferry/air data → safe CSS
    tokens/title/section framing → facts/tables/related/citations → bus scale →
    mode templates → nav/locale/mobile → hardening and gates.
30. **What exact next-run sequence should execute?** Follow the 20-step sequence
    in section 11 of `docs/code-ui-architecture-audit.md`: source registry,
    Happiness/coach/bus/bike/ferry/air extraction, heritage/project recheck,
    22-region navigation, shared visual foundation, data templates, bus-scale
    UX, locale/nav polish, incremental gates, final static/font/browser checks,
    diff review, commit, push and remote/local hash proof.

## 11. Falsification pass

The audit was actively attacked rather than treating the existing taxonomy as
complete. The checks that changed or constrained the result were:

- the current official New Taipei operator page changed Sanying from a planned
  route to paid operation on 2026-09-01;
- the current DORTS page established Xinyi East operation on 2026-08-30;
- the official Alishan FAQ contradicted the simple “full line open” wording,
  while the operator homepage reported a later full-line resumption;
- current Changhua government information showed MOOVO growth beyond the five
  bike jurisdictions in the repository;
- the Highway Bureau register proved that community/rural service is a national
  route universe, not merely a New Taipei detail;
- the CAA airport page exposed more island airports than the current air pages
  make discoverable;
- official project pages repeatedly showed different scopes/definitions rather
  than one reliable percentage, so project conflicts are retained.

No evidence from this pass justifies turning every attraction into transit,
using name similarity for interchanges, creating dock pages, or calling every
proposal an approved line.

## 12. Bottom line

The repository already has a serious, source-conscious Taipei-region reference
with strong rail/entity architecture, an unusually useful bus data/prose split,
static maps, citations and proven accessibility/build gates. It is not yet a
credible all-Taiwan public-transport reference because the missing pieces are
not cosmetic: most local bus systems, rural DRT, nationwide public bike,
domestic ferry families/terminals, domestic aviation route connectivity and
complete jurisdiction discovery are still absent or only scaffolded.

The correct expansion is an indexed national transport atlas with explicit
service classes, dated statuses and typed cross-mode joins. The correct visual
direction is an editorial wayfinding atlas: retain the current transport
identity, improve the shared reading hierarchy and make national scope visible,
without rewriting the framework or flattening the site into a generic dashboard.
