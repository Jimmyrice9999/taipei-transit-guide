# Taiwan Transit Guide — code and UI architecture audit

Audit date: 2026-09-05

This is an investigation and design handoff, not an implementation pass. The
repository observations below come from the checked-out code and committed
data. Transport statements marked as research findings come from full official
pages fetched during this audit; recommendations are explicitly labelled.
The existing generated screenshots, PDFs, probes and audit JSON files were
already dirty before this run and are not part of this report.

## Executive architecture map

```text
Traditional-Chinese or English URL
              |
       app/[locale]/ routes
              |
  lib/locale + lib/nav + lib/content
       /              \
authored Markdown       structured TDX snapshots / generated registries
content/                 data/tdx, data/*, lib/*-stations.ts
       \                 /
        shared server page templates
        components/ + EntityPage + RichText + data components
              |
     globals.css + local image/font assets
              |
   static HTML, SVG, WebP, JSON -> GitHub Pages-compatible export
```

The practical runtime is Next.js 16.3 with React 19 and TypeScript in strict
mode. `next.config.mjs` switches production to `output: 'export'`, uses an
optional `NEXT_PUBLIC_BASE_PATH`, keeps `trailingSlash: true`, and disables
Next image optimisation because the deployment is static. The build is
therefore a compiler pipeline: it resolves every page at build time and emits
plain files rather than depending on a Node server at request time.

The top-level responsibilities are:

| Area | What it actually does |
|---|---|
| `app/` | URL families, locale wrappers, `generateStaticParams`, metadata, and the small number of pages that assemble structured data. |
| `components/` | Shared rendering devices: shell, navigation, entity headers, facts, maps, tables, figures, citations, search and bus/rail data displays. |
| `lib/` | Content parsing, registries, joins, station/line data, locale and navigation rules, image/source helpers, aggregate readers and structured-data builders. |
| `content/` | Authored Markdown research overlays. The folder shape is part of the URL contract; the prose is not generated from the TDX feed. |
| `data/` | Committed snapshots and generated aggregates. `data/tdx/` supplies structured public-transport data; `data/generated/aggregate-data.json` prevents both locales recomputing the same large datasets. |
| `scripts/` | Fetchers, importers, page generators, aggregate/search generation, font/image processing, audits, browser sampling, and gates. |
| `tests/` | Unit and integration-style checks for accessibility, joins, geometry, citations/claims, navigation, images, Markdown, data integrity, determinism and special fixes. |

The current content inventory is approximately 2,000 authored/generated page
files, excluding `_index.md` files: 4 air pages, 30 bike pages, 1,133 bus
pages, 7 ferry pages, 585 rail pages, 2 road pages and 3 statistics pages
(repo count at audit time). The most important structured layer is the 1,051
route snapshot in `data/tdx/bus/routes.json`, not a national route count.

### Build and verification pipeline

`npm run build` runs the conflict gate, generates aggregates, runs the static
Next build, then runs `scripts/postbuild.mjs`. Postbuild checks the emitted
pages against the Han font subsets and audits internal links/fragments. The
larger `npm run verify` chain adds navigation labels, unused assets, a11y,
facts, citations, claims, unit tests, research checks, geometry and the CVD
report. The fast gate is deliberately cheaper and is the correct feedback loop
for Markdown or shared-template edits.

The citation/claim pipeline is layered:

1. `lib/content.ts` normalises frontmatter and source records and turns
   Markdown into HTML with remark/rehype plugins.
2. Citation markers are resolved by `rehypeCitations` and checked by
   `scripts/citations.mjs`; every marker/source id must resolve.
3. `scripts/claims.mjs` counts sourced, TBC and asserted material. The claims
   baseline is a ratchet, so adding unsupported prose is a regression.
4. `scripts/research-check.mjs` checks the research-file contract, including
   checked-and-failed entries.

The image pipeline is sidecar-driven. `lib/images.ts`, the image-size helper,
`rehypeFigures` and `Figure` require source/artist/license/dimensions metadata;
the page can render a deliberate placeholder instead of an unverified image.
Images are prepared as responsive WebP assets, with a 240px card cap. The
font pipeline uses `next/font` for Zilla Slab, Inter and IBM Plex Mono plus a
custom Noto Sans TC subset loaded through `hanFontFace`. `npm run fonts` must
run after any new Han-bearing rendered content, and `npm run font:check` is the
guard against missing glyphs.

Search is a client enhancement over a static fallback. `scripts/search-index.mts`
builds `public/data/search-index.json` (about 164 KB in the checked snapshot),
`SiteSearch` lazy-loads it into a combobox, and the normal HTML remains useful
without JavaScript. Maps are static SVG from committed geometry with small
client enhancements; they do not require runtime tile services. `RouteMap`
also knows the dashed-chain convention for a route whose official shape is not
published.

## Routing map and canonical URL rules

The locale is the first URL segment: `/en/...` or `/zh-Hant/...`. `lib/locale.ts`
owns locale validation, locale-link construction, language alternates and the
canonical path rules. The shared layout is `app/[locale]/layout.tsx`; there is
no second authored site per language. The Chinese mode displays existing
authoritative Chinese material where it exists and does not machine-translate
the English synthesis.

| URL family | Source and implementation | Canonical behaviour |
|---|---|---|
| `/<locale>/` | `app/[locale]/page.tsx`; computed homepage cards, current section counts and a curated feature image. | Locale-prefixed trailing-slash URL. |
| `/<locale>/<section>/` | `app/[locale]/[section]/page.tsx`; section index from content/nav registries. | Section index is the canonical discovery page. |
| `/<locale>/<section>/<type>/` | `app/[locale]/[section]/[type]/page.tsx`; type-index shim. | Canonical type index, not a duplicate article. |
| `/<locale>/<section>/<type>/<slug>/` | Generic Markdown page shim. | Authored Markdown canonical. |
| `/<locale>/rail/<system>/...` | Rail-specific route hierarchy. System namespacing prevents duplicate codes such as `G` meaning different operators. | Rail system is part of the canonical identity. |
| `/<locale>/rail/metro/stations/<code>/` | Generated metro station route, with context-aware code handling. | Code page is canonical; no false badge inference from buses. |
| `/<locale>/bus/routes/` | Computed group index from `lib/bus/routes.ts`. | Bus network/group discovery page. |
| `/<locale>/bus/routes/<group>/` | Computed route-group page with client filter and static list fallback. | Group is canonical; route identity is nested below it. |
| `/<locale>/bus/routes/<group>/<slug>/` | `BusRouteData` plus optional Markdown overlay. | One route identity, with structured data and prose combined. |
| `/<locale>/data/...` | Explicit computed data pages such as stations, comparisons, growth, sources and provenance. | Data URLs are intentionally separate from narrative entity pages. |
| `/<locale>/regions/` and `.../<slug>/` | Seven curated cross-cutting indexes in `lib/regions.ts`. | Geography is a lens, not a duplicate content hierarchy. |

There are no production redirects/shims that should be casually removed. The
generic route files exist partly to keep authored content and computed entities
under a stable URL model. The build also emits metadata/open-graph routes, and
the base-path rewriting is performed in the Markdown pipeline so internal links
work on GitHub Pages.

## Page-template inventory

| Template family | Main implementation | Data source | Responsive/special behaviour |
|---|---|---|---|
| Site shell/home | `layout.tsx`, `PageShell`, `app/[locale]/page.tsx` | nav tree, section registries, images, counts | Top nav plus side rail at 1280px; mobile returns to top bar; homepage is intentionally static and long. |
| Section/type indexes | generic `app` pages, `CardRow`, `CardList` | content registry and computed lists | Open lists are HTML-first; peer lists can be closed `<details>`. |
| Rail system/index | rail system routes, `EntityPage`, line/station registries | TDX plus operator/DORTS research | System identity, official line colour and namespaced station codes. |
| Rail line | rail dynamic route, `EntityPage`, `RouteMap`, `FormationDiagram`, elevation/profile devices | authored line page plus structured station/geometry data | Desktop spine/map layout collapses to a single column on small screens. |
| Metro/TRA/THSR station | station route pages and `EntityPage` | generated station registries plus Markdown/source overlays | facts, station identity, near-station links, route map/table; wide tables scroll within a bounded frame. |
| Article/history/reference | generic Markdown plus article layout plugins | authored Markdown | Timeline/thread/pull-quote devices are applied only to article types. |
| Bus route | nested bus route page plus `BusRouteData` | TDX route/stops/shapes/sequences, curated joins, optional overlay | static stop table/map fallback; `badges=false` prevents route IDs becoming rail badges. |
| Bus group/network | group page and `RouteFilter` | route registry and route-group taxonomy | 1,051-route scale is handled by DOM filtering, but the unbroken long list is a UX limit. |
| Bus operator/model/depot | entity/content pages, `CardRow`, `PhotoCard` | authored overlays, operator/model registries | Photo-card grids and entity links; depot pages intentionally do not invent junctions. |
| Bike index/district | bike pages and generated index pages | TDX public-bike snapshot plus authored context | dock is a row in a district table, never a page; tables are scrollable. |
| Ferry/air/special scaffold | authored ferry route and airport/operator pages | current primary-source overlays | Presently small and editorial; not yet a full national terminal/route data model. |
| Region index | `regions` route and region detail | curated cross-cutting links | Seven-card discovery layer; it does not duplicate canonical pages. |
| Data/aggregate page | explicit data routes and data components | `aggregate-data.json`, TDX snapshots, ridership imports | Tables prioritise values and source notes, but currently feel like engineering output. |
| Interactive network map | `RouteMap` and map wrapper | committed SVG geometry and station registries | Static map is the no-JS baseline; hit areas and panel interactions are enhancement. |

The most important architectural fact is that these are not independent visual
pages. `EntityPage`, the content parser and the CSS page-grid are shared across
many of them. A visual change to the title/facts/table treatment can therefore
improve hundreds of pages, but a change to the grid or navigation can regress
every page family at once.

## Component map and coupling

### Shared shell and navigation

- `PageShell` establishes the accent variables, page hairline, bounded
  container and main region. It is server-rendered and safe to redesign only
  when the page-grid contract is preserved.
- `SiteNav` is client-side because it owns hover/click menus, the 250ms
  hover-gap close delay, Escape-to-close/focus restoration, outside-pointer
  close, route-change close and a ten-item cap. These are behavioural fixes,
  not decoration.
- `SideNavRail` reuses the same nav tree on wide screens and is hidden below
  the existing 1280px breakpoint. The split is deliberate: do not collapse the
  side rail into a new mobile architecture without browser evidence.
- `SiteSearch` is a client combobox with a static fallback. `LocaleLink`,
  `LanguageToggle`, `LocaleNotice` and `BackLink` handle base paths, locale
  doubling, honest translation coverage and history-aware orientation.

### Entity and reading devices

- `EntityPage` composes facts, spine, map, specs, near-station context and
  citations. It carries special cases such as no map on a non-line entity,
  no false depot junction claims and no duplicate station icons.
- `FactsPanel` is the horizontal platform-sign-like identity strip: line badge,
  title, Chinese name and quick facts.
- `RichText` is the Markdown display boundary. It applies context-aware rail
  badge detection and CJK language tags; it must not be replaced by a global
  regex.
- `References` and `CiteMark` connect visible prose markers to full provenance.
  The marker styling deliberately avoids making every sentence look like a
  footnote while retaining auditability.
- `Figure` and `PhotoCard` share image-sidecar assumptions, but `PhotoCard`
  caps thumbnails and keeps attribution outside the image link.

### Data and maps

- `BusRouteData` is the structured route renderer. Its rail joins are confirmed
  only by stop ID plus geometry; name similarity is not a fallback.
- `RouteMap` is static-first SVG with accessible linked stations, enlarged hit
  areas and the dashed-chain treatment for missing official geometry.
- `SpecTable`, station tables, `TableScroll` output and data pages share the
  wide-table contract: a table may scroll inside itself, never force the whole
  page sideways.
- `CardRow` is the repeated list primitive. It has line bars, badges, icons and
  no nested links. It is visually dependable but overused on the homepage and
  huge indexes.
- `Disclosure`/native `<details>` devices are used where a secondary list may
  start closed; primary page lists remain open by design.

The main hidden dependency is the frontmatter shape. `lib/content.ts` parses
fields such as `facts`, `specs`, `sources`, `line`, `hero`, `profile` and
article metadata and silently ignores unknown fields except where validation
guards have been added. A design change that asks Markdown to name arbitrary
new components would bypass the existing type-safe boundary. Add a component
or a deliberately validated field instead.

## CSS and design-system audit

`app/[locale]/globals.css` is 6,604 lines and 165,201 bytes in this checkout.
It has 34 root-level custom properties and 51 media-query blocks. It is
organised into commented families: page frame, wordmark/header, top navigation,
search, side rail, page header/grid, platform facts, guideway spine, specs,
references, formation diagrams, maps, station pages, index lists, card/photo
grids, article layout, data tables, scroll affordances and print styles.

### Coherent parts

- The token layer has a small semantic palette: paper/background/well, text
  levels, rules, accent/map accent, link, dark band, amber and font roles.
- The typography roles are legible and purposeful: Zilla Slab for transport
  display, Inter for prose/UI and IBM Plex Mono for codes/numbers.
- Official line colours are treated as meaning-bearing only in the appropriate
  contexts. The stylesheet explicitly separates text-safe accent from large
  map fills, which helps the contrast gate.
- The page-grid rules distinguish normal reading measure, wide data, map/spine
  pages and mobile collapse instead of forcing one universal card grid.
- The table and scroll rules protect the viewport from width extremes; the
  focus rules, reduced-motion rules and high-contrast checks are valuable.

### Duplication or consolidation candidates

- Page-title, section-heading and article-heading declarations recur across
  page, article, station, data and index sections. They should eventually
  share a small hierarchy of tokens and utility classes, but the result must
  retain each page family’s semantics.
- Facts panels, quick facts and specs tables have overlapping borders, labels,
  numbers and responsive rules. They can share primitives while keeping their
  different information architectures.
- Card rows, photo cards and featured cards repeat spacing and hover language.
  A shared card surface/token would reduce drift; do not flatten them into one
  generic card component.
- Navigation has separate top and rail rules because the layouts are different,
  but colours, focus rings, label sizing and caret treatment should derive from
  common tokens.
- The stylesheet includes many narrowly scoped page-specific selectors. These
  are not automatically dead code: several document why a past map, table,
  depot or mobile failure was fixed. Consolidate only after selector usage and
  browser snapshots are checked.

### Fragile/high-specificity areas

- `.page-main > *`, `.page-body > *` and the `.wide/.platform/.figure/.note`
  exceptions encode float/clear behaviour. Changing them can move maps,
  tables and citation blocks on every entity page.
- The side-rail media block begins at 1280px and has larger 1600px/2200px
  measures. This is coupled to the duplicate-nav visual balance and should be
  changed only with the bounded viewport matrix.
- The route-map selectors use SVG class/data relationships and larger invisible
  hit targets. They are accessibility and usability code, not expendable
  ornament.
- Very small mono sizes in navigation, table and map labels are deliberate for
  density but deserve a legibility pass before increasing density further.
- CSS has grown to include print and static fallbacks. A browser-only cleanup
  can silently damage PDF/print output or no-JS HTML.

### Design-system conclusion

The stylesheet is a large but reasonably organised reference-site system. Its
maintenance problem is not raw size; it is that several visual families have
grown their own near-equivalent title, card, fact and table rules. The safe
next step is tokenising repeated relationships and then consolidating one
shared primitive at a time, with `npm run verify:browser` and the unit gates.
A wholesale rewrite or CSS-in-JS migration would create more risk than value.

## Technical-debt map

| Rank | Problem | User impact | Regression risk | Development friction | Recommendation |
|---:|---|---|---|---|---|
| 1 | National mode/geography layers are incomplete, especially bus, ferry, bike, DRT and aviation. | Readers can mistake a Taipei-heavy reference for national coverage. | Medium data-model risk. | High research/fetch cost. | Add source-backed registries and indexes before polishing local edge cases. |
| 2 | Route-group pages can become enormous, especially New Taipei’s 562-route list. | Discovery and scanning are exhausting. | Medium template risk. | Medium. | Add subgroup summaries, queryable filters and bounded pagination/sections while keeping static lists. |
| 3 | Geography navigation has only seven curated regions. | National discovery is visibly incomplete. | Medium nav risk. | Low/medium. | Expand region index to all first-order jurisdictions as a cross-cutting index. |
| 4 | Ferry and airport content lacks a shared terminal/route/entity data model. | Island connectivity is hard to compare and extend. | High if joined incorrectly. | High source work. | Establish route/terminal/operator records with explicit joins and dated service status. |
| 5 | Data pages expose raw table structure before explaining the reader’s question. | Credibility is present but public usability is weak. | Low UI risk. | Low/medium. | Add data-page intros, query labels, unit/definition strips and grouped tables. |
| 6 | Chinese mode has honest gaps but repetitive notice treatment. | Chinese readers see mixed-language pages without enough orientation. | High locale/content risk. | Medium. | Improve coverage/status signalling without machine translation. |
| 7 | Card/list primitive is visually repetitive. | Homepage and indexes feel generated. | Low/medium UI risk. | Low. | Add hierarchy variants, not unrelated one-off cards. |
| 8 | Source/citation presentation is accurate but visually noisy on long articles. | Reading rhythm suffers. | Medium content-rendering risk. | Medium. | Improve source summary/footnote grouping without hiding provenance. |
| 9 | Structured bus data and prose overlay are powerful but require manual identity discipline. | Wrong overlay or join would be materially misleading. | High data integrity risk. | Medium. | Keep the dual-layer model and add explicit overlay diagnostics. |
| 10 | Generated aggregate/search artifacts are essential but easy to accidentally recompute per locale. | Build times and static generation can fail. | High build risk. | Medium. | Preserve precomputation and add determinism/build-cost checks around new datasets. |

## Visual and UX audit

The visual review used the existing generated screenshots, not only DOM/code
inspection. Representative files inspected included:

`home-en-desktop-1280.png`, `home-zh-Hant-desktop-1280.png`,
`home-en-phone-390.png`, `line-wenhu-en-desktop-1280.png`,
`station-br13-en-desktop-1280.png`, `bus-route-detail-en-desktop-1280.png`,
`bus-route-detail-en-phone-390.png`, `bus-routes-en-desktop-1280.png`,
`bus-route-new-taipei-en-desktop-1280.png`, `bus-intercity-en-desktop-1280.png`,
`bike-stations-new-taipei-en-desktop-1280.png`, `regions-en-desktop-1280.png`,
`air-airports-index-en-desktop-1280.png`, `ferry-routes-en-desktop-1280.png`,
`data-stations-en-desktop-1280.png`, `interactive-network-map-en-desktop-1280.png`,
`thsr-station-en-desktop-1280.png`, `rail-project-status-en-desktop-1280.png`,
and the operator/model/depot and special-transport screenshots in the same set.

### First impression

The site already has a recognisable transport-reference identity: charcoal
header and rail, amber pixel wordmark, Zilla Slab display face, monospaced
codes, official line colours, maps, source notes and a serious editorial tone.
It does not look like a generic SaaS dashboard. The weaker first impression is
that the homepage and several indexes read as a very long directory: repeated
rows have similar visual weight, national coverage is not the first organising
idea, and the single featured image is asked to do too much brand work.

The wordmark is legible but small at desktop and phone sizes. The narrow reading
measure creates a calm editorial column, but on wide screens it can leave large
quiet margins while a side rail and the top navigation both compete for
attention. This is a hierarchy issue, not a case for filling every margin.

### Homepage

Good: clear title/summary, strong dark identity, obvious section headings,
static-first content, visible research/data differentiator and a useful feature
card. The Chinese homepage is honest about missing localized synthesis instead
of pretending translation exists.

Needs improvement: add a national coverage orientation near the top; reduce
the repeated card-wall feeling; make regions and modes discoverable before the
full content directory; distinguish “read an overview”, “browse data” and
“find a route”; give featured photography a deliberate editorial role; and
compress the footer/provenance material on small screens without hiding it.

### Navigation

The top navigation and wide-screen side rail are coherent independently. The
side rail is useful on long pages, and the existing breakpoint behaviour should
remain: below the wide-screen threshold the top navigation is the one primary
navigation. At about 1280px the duplicate presence is visually heavy, however,
and the navigation tree will not scale to 22 jurisdictions plus more modes
without stronger grouping.

The current caps on station/page links are prudent, but they also show that a
national taxonomy cannot be represented as one giant dropdown. The next design
needs mode/region landing pages, search prominence, and “all index” links rather
than more nav items. Mobile needs shorter labels, persistent access to search,
and clear section-level back/forward orientation.

### Article and entity pages

The title, summary, line identity, facts, body, map/specs and references create a
credible scan path. Wenhu demonstrates the best version: photography establishes
place, facts orient the reader, prose explains, and data follows. Station and
THSR pages are structurally consistent, though the generic entity header can
feel repetitive when the page has little authored context.

Citation markers are a strength for trust and a weakness for rhythm on long
pages. Tables are legible in the sense that columns, numbers and sources are
clear, but they often dominate the page before the reader has been told what
question the table answers. Related links and nearby entities are useful but
need stronger grouping so they feel like navigation rather than an afterthought.

### Bus route pages

The typical route screenshot answers the essential questions quickly: route
identity, English/Chinese name, operator, termini, direction/variant, map and
stops. The explicit “confirmed MRT stop joins” treatment is a real credibility
feature. The page also makes the source boundary visible: structured data is
separate from an optional prose overlay and unsupported vehicle claims do not
get invented.

The dense route is usable but asks the reader to scroll through a large stop
table. New Taipei’s group page is the largest immediate UX problem: hundreds of
rows are technically filterable, yet the initial page is an unbroken wall of
similar items. Add counts by subgroup, a visible query/status summary and a
way to jump to subgroup anchors before considering pagination. Keep a static
all-rows fallback for no-JS and accessibility.

### Rail and station pages

Rail pages have the clearest system identity: official colour, code badges,
line spine, route map, station order and facts. The station page’s platform-like
header is memorable. The main issue is vertical competition between the facts,
map, station table, long prose and references. A stronger “at a glance” block
and a restrained related-content strip would improve scan speed without removing
detail.

### Data pages

The data index and station table are transparent and useful to expert readers,
but they look like raw engineering output rather than a finished public
reference. This is mostly framing: define the measure, snapshot date, source,
unit and intended question above the table; group columns; keep the raw view
available as a secondary detail. The coloured station table should gain a compact
legend/definition strip and a more obvious table title.

### Chinese mode and accessibility

The Chinese mode is structurally sound and honest. It is not a machine-
translated English site, which is the correct sourcing decision. The mixed-mode
notice is useful but currently adds visible bulk; an improved status component
could distinguish “authoritative Chinese article”, “English synthesis with
Chinese navigation”, and “data-only page” in less space.

Existing accessibility is an asset: semantic headings/links, keyboard focus,
Escape and focus restoration in navigation, native details, no-JS fallbacks,
reduced-motion handling, safe links, contrast checks, alt/attribution guards and
static maps. Preserve these behaviours while changing appearance. A polished
surface that removes them would be a regression.

## Possible visual directions

### Direction A — Editorial wayfinding atlas (recommended)

Keep the current charcoal/amber transport identity and Zilla/Inter/Mono roles,
but make the information hierarchy more editorial and map-like. Use a stronger
page eyebrow and title block, a restrained colour band for system identity,
modular facts panels, clear table introductions, and route/map relationship
before long data. Cards become varied editorial/list modules rather than one
universal row. Photography is used selectively as place evidence. Dense pages
remain dense, but the first viewport always establishes what the page is and how
to navigate it. Mobile becomes a compact sequence of identity, key facts,
primary action/index, then detail.

### Direction B — Institutional national transport catalogue

Use a lighter, more government-report-like visual language: neutral blue/grey
tokens, small restrained colour accents, compact data cards, stronger filter
controls and jurisdiction dashboards. Typography would be more utilitarian,
photography secondary, and tables more prominent. This scales well to national
coverage and statistics but risks losing the site’s distinct transport character
and making authored history feel bureaucratic.

### Direction C — Enthusiast transport publication

Push photography, large line-colour hero bands, rolling-stock/vessel imagery,
rich timeline spreads and expressive display typography. Maps and badges become
strong graphic elements and article pages feel like a magazine. This would make
rail and heritage subjects compelling but would overstate thinly sourced bus,
ferry and rural DRT coverage, increase image/attribution work and make large
tables harder to scan.

### Recommendation

Choose Direction A. It fits the existing Land Transport Guru inspiration and
the project’s actual strength: a dense, source-conscious reference with useful
structured data. It improves thousands of pages through shared hierarchy and
framing without pretending that every page is a photo essay or a dashboard.

The design vocabulary should be:

- a stable charcoal/amber shell with a quieter paper/well surface system;
- a two-level title block: page kind/status first, identity second;
- a reusable facts strip with explicit `TBC`, `dated`, and `conflict` states;
- line/operator/system badges that carry identity but never carry facts alone;
- tables introduced by definition, date, unit and source strips;
- map/diagram blocks that state geometry status and work without runtime tiles;
- related links grouped by “continue”, “nearby”, “same operator” or “same mode”;
- mobile spacing and sticky/compact orientation that preserve static HTML;
- image frames that distinguish place evidence from decoration.

## Top 20 UI priorities and component touch points

These are ordered by leverage, not visual novelty.

1. Add a shared page-eyebrow/status/title hierarchy — `PageShell`, page-header
   classes, `EntityPage`.
2. Introduce semantic design tokens for surface, rule, type scale, spacing and
   status — `globals.css`, no content changes.
3. Redesign `FactsPanel` into a responsive at-a-glance block with `TBC`, dated
   and conflict states — `FactsPanel`, `EntityPage`, CSS.
4. Add a common section-intro treatment with purpose, count and source/snapshot
   context — section/type pages, `CardRow`.
5. Make all large indexes subgroup-aware at first glance — `CardRow`, route-group
   pages, `RouteFilter`, native anchors/details.
6. Reframe the homepage around national mode and region discovery —
   `app/[locale]/page.tsx`, `PhotoCard`, region/mode cards.
7. Give `/regions/` a complete-jurisdiction discovery layout — `lib/regions.ts`,
   region routes, navigation links.
8. Add data-page definition/snapshot/unit/source strips — data page routes,
   `SpecTable`, table CSS.
9. Improve table hierarchy, sticky headers where safe, and mobile column
   labelling — `SpecTable`, station/data tables, `TableScroll`.
10. Create one consistent related-content pattern — `EntityPage`, `CardRow`,
    `BackLink`, region links.
11. Reduce citation visual noise while keeping every marker and reference —
    `CiteMark`, `References`, Markdown CSS and tests.
12. Improve search prominence and empty/loading/keyboard states — `SiteSearch`,
    `search-index`, nav CSS.
13. Polish the side rail’s active state and reduce duplicate-nav heaviness at
    1280px without changing its breakpoint contract — `SideNavRail`, `SiteNav`.
14. Standardise mode/operator/eligibility status badges — shared badge CSS and
    future bus/ferry/DRT components.
15. Make bus-route quick answers visually scannable above the stop table —
    `BusRouteData`, `FactsPanel`, `RouteMap`.
16. Add route-table jump controls and density summaries — route-group pages,
    `RouteFilter`, static fallback.
17. Improve map framing, legend, geometry-status note and mobile controls —
    `RouteMap`, map CSS; preserve static SVG.
18. Establish a disciplined photo/placeholder composition — `Figure`,
    `PhotoCard`, sidecar image pipeline.
19. Improve Chinese coverage-status notice compactness — `LocaleNotice`, locale
    CSS; no machine translation.
20. Add a focused visual regression matrix to the bounded browser script —
    `scripts/browser-verify.mjs`, screenshot selection and tests.

Low-risk improvements are tokens, section intros, table definition strips,
related-link grouping, status badges, search states and card spacing, provided
they keep the same DOM semantics and static fallbacks. High-risk changes are
navigation structure, locale/canonical links, fonts, Markdown rendering order,
page-grid/side-rail breakpoints, map interaction, citation markup and any change
that expands rendered Han text. Those require the full relevant gates, fresh
font generation when content changes, and bounded browser verification.

## What not to touch casually

The following encode previous failure modes and should be treated as contracts:

- `SiteNav`’s hover-gap delay, Escape/focus handling, outside close and route
  close;
- the top-nav/side-rail split and its current below-breakpoint fallback;
- `LocaleLink`/`LanguageToggle` canonical locale construction and the
  locale-doubling guard;
- aggregate precomputation and locale-independent generated artifacts;
- `RichText` context-aware station badges and the bus badge opt-out;
- exact stop-ID-plus-geometry bus/rail joins;
- colour-bus precedence rules and the absence of a Taipei yellow feeder class;
- namespaced rail identifiers and honest Sanying ambiguity;
- dashed map chains where official geometry is absent;
- static/no-JS rendering of filters, maps, details and search fallback;
- image sidecars, attribution, dimensions and hydration-safe image checks;
- font subsets and their postbuild missing-glyph gate;
- primary lists open by default and peer lists allowed to use closed details;
- `/bus/depots/` and the YouBike rule that a dock is a table row, not a page.

The replacement for any one of these must demonstrate the old failure mode is
still prevented, rather than merely making the source code shorter.

## Phased implementation plan

### Phase 0 — freeze contracts and baselines

Record current bounded screenshots, accessibility/contrast output, static
fallback HTML and gate output. Add no new rendered Han text. Establish a
component-to-template matrix so each shared change has named representatives.

### Phase 1 — safe visual foundation

Add semantic tokens and shared page-eyebrow/title/section-intro primitives.
Improve surfaces, spacing, rule weight, wordmark sizing and table definition
strips without changing routes, Markdown fields or navigation structure.
Verify representative home, line, station, bus, data and mobile pages.

### Phase 2 — high-leverage reading surfaces

Redesign `FactsPanel`, tables, related content, citation grouping, images and
route quick-answer blocks. Keep all source markers, TBC values, no-JS HTML and
existing map/join semantics. Address the huge route-group experience with
subgroup anchors and static filters before considering pagination.

### Phase 3 — national discovery surfaces

Expand region indexes to all 22 first-order jurisdictions, add a mode/region
homepage orientation, and add new ferry/air/DRT/bike categories only after
their registries have source-backed identities. Keep geography cross-cutting.

### Phase 4 — navigation and locale polish

Refine grouping and search prominence, active states, mobile orientation and
compact Chinese coverage notices. Do not add a second hierarchy or machine
translation. Run canonical-link, nav-label, locale and browser checks together.

### Phase 5 — data density and national scale

Add terminal/operator/route join rules, DRT eligibility fields, public-bike
system metadata, ferry service snapshots and aviation route tables. Introduce
pagination or virtualised *enhancement* only if the static all-content fallback
remains accessible. Keep aggregates precomputed and run determinism/build-cost
checks.

### Phase 6 — hardening

Run `gate:fast`, `gate:full`, bounded browser verification and the mode-specific
research/data audits. Rebuild fonts only when rendered Han changes. Review the
diff for accidental generated artifacts, then commit and verify the remote/local
hashes. Do not run the exhaustive browser sweep merely for a visual audit.

## Exact recommended sequence for the next long run

1. Re-read the current handoff/run log and capture clean baselines.
2. Build a source-backed jurisdiction/mode registry schema without generating
   pages yet.
3. Extract and normalise Highway Bureau Happiness Bus/Happiness Taxi rows,
   including booking, fixed/flexible and fare fields.
4. Extract all current city/county bus seams and reconcile their route identity
   rules with the existing TDX bus registry.
5. Promote the existing intercity-bus snapshot into an explicit national coach
   index with dated source metadata.
6. Extract public-bike service regions and operator metadata; preserve dock-as-
   row and add missing county systems only after direct operator/government
   verification.
7. Extract Maritime and Port Bureau fixed domestic passenger-ship, terminal,
   vessel and small-three-links records; publish fetch failures and conflicts.
8. Verify domestic airline/airport route families and define airport pages as
   intermodal nodes, not flight-status encyclopaedia pages.
9. Audit rideable heritage/special systems and give each a current-operation
   status distinct from attraction-only transport.
10. Recheck current urban rail project statuses and create only approved,
    funded, under-construction or clearly active project records.
11. Expand `/regions/` to all 22 jurisdictions as cross-cutting indexes.
12. Implement the shared visual foundation: tokens, title hierarchy and
    section intro, with no new content claims.
13. Implement facts/table/related/citation improvements against template
    representatives.
14. Improve bus group scale and route quick answers while preserving static
    fallback and exact joins.
15. Add ferry/air/DRT/bike templates only after data identities and source
    contracts exist.
16. Refine navigation/search/mobile/Chinese status presentation.
17. Run source/claims/citations/research tests after each subject, not at the
    end of a giant content batch.
18. Rebuild aggregates, then run the font check; regenerate subsets only if
    rendered Han was added.
19. Run fast gate, full gate and bounded browser verification sequentially.
20. Inspect the final diff, stage only deliberate files, commit in the main
    session, push, compare remote/local logs, and write the next handoff.
