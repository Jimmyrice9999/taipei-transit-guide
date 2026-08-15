# Bus network architecture — proposal

**Status: structure only.** This is the shape to approve before any route,
operator, model or depot page is written. No bus content or research was added
for this proposal.

## Audit of the current tree

The bus section currently contains:

- `content/bus/_index.md`, the section landing page;
- `content/bus/network/_index.md` and the one live article,
  `network/joint-operation.md`;
- `_index.md` files for `routes`, `operators`, `models` and `garages`, all
  marked planned and containing no entity pages.

There are no bus route or operator pages and no bus datasets under
`data/tdx/`. `lib/routes.ts` is the rail route helper: it reads rail
`StationOfRoute` records and knows nothing about bus routes, operators or
stops. The current content reader expects exactly
`content/<section>/<type>/<slug>.md`; `getPages()` reads only the immediate
files in one type folder. The generic page route is likewise exactly
`/<section>/<type>/<slug>/`.

That shape is fine for the current article. If several hundred route files were
placed directly in `content/bus/routes/`, `/bus/routes/` would render every
card in one list, and the Bus dropdown would show a ten-link sample followed by
“All routes”. Neither is a useful route browser. Nested class folders would
currently be ignored by `getPages()` and would have no matching page route.

## 1. Primary hierarchy: service class, then route identity

The canonical filing should be by route class and number series, not by district
or operator. Districts are a useful filter because routes cross them; they are a
bad primary folder because filing by district duplicates routes or forces an
arbitrary home district. Operators are a cross-cutting relationship: contracts
and operating companies change while the service identity should remain at one
stable URL.

Use these route groups:

| Group | Contents | Why it is a primary group |
|---|---|---|
| `colour-red`, `colour-blue`, `colour-green`, `colour-brown`, `colour-orange`, `colour-yellow` | Colour-prefixed corridor/feeder services, keyed to the MRT corridor they explicitly feed | The prefix is the passenger-facing route class and gives a natural rail index, but it must not be inferred for trunk routes that reuse colour words directionally. |
| `series-0-99` | The 0–99 numbered series | Keeps the compact historic numbering family together. |
| `series-200s`, `series-300s`, `series-500s`, `series-600s`, `series-700s` | The numbered series named in the existing bus brief | The number range is the stable browse key even when a route’s contractor changes. |
| `trunk` | `幹線` trunk routes, including named corridor services | Trunk is a service class, not a district or an operator. |
| `minibus` | `市民小巴` and other community/minibus services | These have different vehicle and operating context from ordinary numbered routes. |
| `new-taipei` | New Taipei’s own route-numbering system and services | Keeps the municipality’s distinct catalogue legible without duplicating a cross-border route into a Taipei district. |

The group is a canonical home, not a claim that a route has only one useful
classification. A route record can also carry `series`, `municipalities`,
`feederLineCodes`, `districts`, `serviceClass`, and `operatorIds` as indexes.
Those facets are links and filters, not second copies of the page. A route that
crosses Taipei and New Taipei remains one route page; it is not duplicated under
both municipalities.

Classification has an explicit precedence rule. When the official service
identity has a colour prefix and a number—such as 紅5, 藍26 or 棕20—the official
colour prefix determines the canonical group; the number is an index facet, not
a second home. A number-only route such as 212 belongs to its numbered series.
A colour word that is directional, descriptive or part of a trunk name rather
than an official colour-prefixed service class does not qualify for a colour
group: it stays in its actual class, such as `trunk`. This decision must come
from the official service identity, not from matching a Chinese character in a
route name.

The route slug should be a normalized service identity—number plus a stable
variant or name where needed—not the current operator. Preserve source route IDs
and previous names as aliases in the data record so a contract change or a
renaming does not move the page.

## 2. Operators, models and depots as cross-cutting indexes

Use the LTG-style split as separate browseable indexes:

```text
/bus/operators/             companies and operating relationships
/bus/models/                vehicle models and technical families
/bus/depots/                garages, depots and allocation
```

`/bus/depots/` is the only proposed public URL for garages, depots and
allocation. The existing planned `content/bus/garages/_index.md` is not a
published URL and is not retained as an alias; it should be removed when the
bus content structure is built. This data-layer run leaves the existing planned
content and navigation files untouched.

An operator page lists current routes, former routes, models and depots from
the shared indexes. A route page lists its current operator or operators and an
operator history when research establishes one. The route page remains
canonical: an operator change edits the relationship record, not the route’s
folder. Model pages list the operators and route families using that model;
depot pages list the operator, routes and models assigned there, with a dated
allocation when the evidence is historical.

This gives three useful reading directions without multiplying pages:

```text
route ── current/former operator ── models
  │              │                   │
  └── depot ─────┴───────────────────┘
```

All three indexes should be generated from the same normalized relationship
records so an operator’s route list, a depot’s allocation and a route’s operator
row cannot silently disagree.

## 3. Rail linkage

Rail linkage should be explicit data, not a guess from a Chinese colour word.
Colour-prefixed feeders get a `feederLineCodes` relationship to the MRT line
or lines they serve. Trunk routes that happen to use green, blue or yellow for a
direction stay trunk routes unless a source explicitly identifies them as
feeders.

Every route page should link:

- its feeder line page, when `feederLineCodes` is present;
- the relevant MRT station pages, when the stop join identifies them; and
- the line/station index used to browse the relationship, not merely a colour
  badge.

Each line page should gain a “Bus connections” section generated from the
route index. Each station page should gain a compact list of routes that stop
there, grouped into feeder, trunk and other services. A line page is the right
place for the corridor view; a station page is the right place for the local
stop view. Neither should duplicate route prose.

The join key should prefer the normalized TDX stop ID and a curated MRT station
code mapping. Names are a fallback requiring review because bus stop names and
MRT station names are not necessarily identical. A route that passes near a
station but does not stop there must not be presented as an interchange.

## 4. URL scheme, files and library work

The proposed canonical URLs are:

```text
/bus/network/joint-operation/
/bus/routes/
/bus/routes/colour-brown/brown-10/
/bus/routes/series-200s/212/
/bus/routes/trunk/xinyi-main-line/
/bus/routes/minibus/m1/
/bus/routes/new-taipei/blue-2/
/bus/operators/capital-bus/
/bus/models/<model-slug>/
/bus/depots/<depot-slug>/
```

The production URL slug must be URL-safe ASCII even when the source name is
Chinese; the route record keeps the Chinese number/name and aliases. A route
group has its own index URL, so the path itself is meaningful without placing
the operator in it.

Proposed file shape:

```text
content/bus/
  _index.md
  network/
    _index.md
    joint-operation.md
  routes/
    _index.md
    colour-brown/
      _index.md
      brown-10.md
    series-200s/
      _index.md
      212.md
    trunk/
      _index.md
    minibus/
      _index.md
    new-taipei/
      _index.md
  operators/
    _index.md
    capital-bus.md
  models/
    _index.md
  depots/
    _index.md
```

Do not duplicate the TDX stop list or operator fields in every Markdown
frontmatter block. Store the normalized, committed TDX pull in a bus data
directory, and let a route page merge that record with a small researched
Markdown overlay. The overlay holds the page title/summary, classification
decisions, prose, research facts and citations; the data record holds changing
route facts.

The implementation changes needed are:

1. Add a bus TDX fetch/normalization step and committed snapshots under
   `data/tdx/bus/` for routes, stops, stop sequences, shapes, operators and any
   published service/timetable records. The current `data/tdx/` is rail-only.
2. Add `lib/bus/routes.ts` with stable route IDs, canonical slugs, route groups,
   stop sequences, operators, rail joins and aliases. Keep the existing
   rail-only `lib/routes.ts` separate.
3. Add `lib/bus/operators.ts`, `lib/bus/models.ts` and `lib/bus/depots.ts`, or
   one typed relationship module with these named indexes. They must all read
   the same route/operator/depot/model records.
4. Extend the content registry so a nested bus route overlay is discoverable,
   while leaving the current three-level rail/content contract unchanged. The
   safest first implementation is a bus-specific registry that resolves
   `content/bus/routes/<group>/<slug>.md`; do not make every existing content
   type recursive just to support buses.
5. Add static routes for `/bus/routes/<group>/` and
   `/bus/routes/<group>/<slug>/`, with `dynamicParams = false`, plus group
   metadata and canonical URLs. The existing generic route can continue to
   serve the current three-level pages.
6. Add shared index helpers for “routes by operator”, “routes by model”,
   “routes by depot”, “routes by MRT line” and “routes by MRT station”. These
   helpers should return stable IDs and links, not pre-rendered prose.
7. Add the route fields to the claims/citation and build audits. A missing TDX
   value is `TBC`; a missing relationship is not silently inferred from a
   district, colour or current operator.

## 5. Navigation at several hundred routes

The global Bus dropdown should expose only stable indexes: Network, Routes,
Operators, Models and Depots. It should not enumerate individual routes. The
existing ten-link cap is useful for ordinary types but is not the route
architecture; adding a sample of route numbers to the global menu would repeat
the flat-dropdown problem in a different form.

`/bus/routes/` should be a browse page of route-group cards, each showing a
count and a short description. A group page should then provide:

- a search box over the static route index (number, English name, Chinese name
  and alias);
- filters for operator, municipality, MRT line and service class;
- grouped links by number or route name, with the route class visible; and
- a stable “all routes in this group” link for keyboard users and crawlers.

The complete route index can be shipped as a small JSON payload for client-side
filtering, but every route link should also exist in the static HTML of its group
page. Search is an accelerator, not the only way to reach a page. The global
navigation remains short; the route index owns route discovery.

## 6. Route-page contract

The first screen should identify the service, not the contractor:

1. route number/name in English and Traditional Chinese, route class and
   municipality;
2. current operator(s), with a link to each operator page and a dated history
   where a change is sourced;
3. termini, direction/variant, stop count, route length and a route map;
4. a stop sequence with stop IDs, accessibility/boarding attributes where
   published, and links to MRT stations where the join is confirmed;
5. service span, first/last departures, frequency or headway by day type, and
   the retrieval date;
6. fare/transfer notes only where an official fare source supports them; and
7. a short researched section for why the route belongs to its class, route
   history, corridor decisions, unusual branches/short workings and operator
   changes.

TDX is the source for structured, changing service data: route ID and name,
direction, termini, stop IDs and order, coordinates, shape geometry, route
length where published, operator code, service/timetable fields where
published, and the retrieval/source-update metadata. The page should state
`TBC` when a TDX dataset omits a field rather than derive a plausible value.

Primary research is the source for interpretation and history: the meaning of
number bands and prefixes, why a route was classified as a feeder or trunk,
route renamings and withdrawals, operator contracts and ownership, depot
allocations, vehicle procurement, fare rules not represented in TDX, and any
controversy. Each such sentence needs its normal primary/secondary source
record. Secondary sources are leads and corroboration, not a substitute for the
operator, municipality or regulator.

## 7. Pilot proposal

Build the `colour-brown` feeder group first, after the bus TDX pull exists. It is
the best shape test because the site already has a deep Wenhu Line page and all
of that line’s station pages: one pilot exercises route-class filing, explicit
feeder-to-line linkage, station stop joins, operator indexing and the route
page’s map/stop layout against a known rail destination. It also tests the
important negative case: a brown word used in a trunk name must not be attached
to Wenhu merely by colour.

The pilot is the group shape, not permission to write the whole bus network.
Acceptance means one group index, one normalized route record per pilot route,
route pages with TDX-backed stop data, operator and station/line links, and no
district or operator duplicates. Only after that shape passes the build, claims,
links and browser checks should the other groups be populated.

## Decision requested

Approve or change the route group names, the `/bus/routes/<group>/<slug>/`
canonical URL, the data-plus-Markdown-overlay split, and the brown-feeder pilot.
No route pages, route data pull, content restructuring or new research should
start until that decision is made.
