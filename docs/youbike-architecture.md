# YouBike station data — verified, and a build proposal

**Status: data verified, architecture proposed, no pages built.** This
mirrors how the bus layer started (`docs/bus-architecture.md`): a proposal
document first, approval, then a dedicated build run. Given the scale found
here — roughly four times the bus network's route count, in individual
station records — building station pages without a scoped plan first would
repeat the mistake bus-architecture.md was written to avoid.

## What this run found, verified by direct fetch (not a search summary)

A prior audit reported "no TDX dataset" for YouBike stations. That was
checked directly this run and **found to be wrong** — TDX does publish a
YouBike Bike Station API, structured the same way the bus Stop API is:

- `GET /api/basic/v2/Bike/Station/City/{City}` — static station identity:
  `StationUID`, `StationID`, `AuthorityID`, `StationName` (bilingual),
  `StationPosition` (lat/lon + GeoHash), `StationAddress` (bilingual),
  `BikesCapacity`, `ServiceType`, `SrcUpdateTime`/`UpdateTime`. Same shape
  as `data/tdx/bus/stops.json`, authenticated the same way (client-credential
  OAuth against `TDX_CLIENT_ID`/`TDX_CLIENT_SECRET`, already configured in
  this project's `.env.local` and already used by
  `scripts/fetch-bus-tdx.mjs`).
- `GET /api/basic/v2/Bike/Availability/City/{City}` — a **separate, live**
  feed: `AvailableRentBikes`, `AvailableReturnBikes`, a
  general/electric-bike split, `ServiceStatus`. This is real-time dock
  occupancy, not a stable content fact, and should stay out of scope for a
  statically generated site the same way live bus arrival times are — a
  build-time snapshot would be stale within minutes of publishing.

Live-fetched record counts, 20 August 2026 (`curl` direct to the API, not a
WebFetch summary — an earlier WebFetch summary of Taipei's own separate live
blob feed under-reported 268 stations against the real 1,790, which is
itself a demonstration of why this project's "fetch full pages" rule exists
for machine-read APIs too, not only HTML):

| City | Stations (TDX `Bike/Station/City`) |
|---|---|
| Taipei | 1,790 |
| New Taipei | 1,593 |
| Taoyuan | 698 |
| **Total, these three cities** | **4,081** |

Keelung and other TPASS-zone cities were not queried this run. Taipei's own
municipal open-data portal additionally publishes a separate live JSON feed
(`https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json`,
catalogued at `data.taipei` dataset `c6bc8aed-557d-41d5-bfb1-8da24f78f2fb`,
1-minute update frequency) with a near-identical but differently-named field
set (`sno`/`sna`/`sarea`/`ar`/`Quantity` etc.) to TDX's own. The two
disagree in one respect worth noting as a genuine conflict rather than
picking one: Taipei's own feed's `Quantity` field for station `500101001`
read **28** at fetch time; TDX's `BikesCapacity` for the same `StationID`
also read **28** — these agreed at the moment checked, but they are two
independently published numbers from two different systems, not guaranteed
to stay in sync, and a future page should treat that as a live discrepancy
risk rather than assume permanent agreement.

## Why this is a different scale problem than bus

1,051 bus routes, each with real corridor identity, operator history and
research potential, were worth individual pages built over several dedicated
runs (Run 50–52). YouBike stations are four times that count in Taipei and
New Taipei combined, and the *available* facts per station are much
thinner: a name, an address, a position, a capacity, and (from the separate
live feed only, out of scope) current bikes/docks. There is no per-station
operator history, no route classification, no confirmed-interchange
question to answer — the interesting content is almost entirely structural
(where the docks are, how dense the network is, which ones sit at an MRT
station) rather than researched prose. A 200-word target per page, the bar
this run just finished applying to every bus route, would not be reachable
from real material for the large majority of individual stations, and
forcing it would violate this project's own "no boilerplate" rule at a
scale of thousands of near-identical paragraphs.

## Proposed shape

Do **not** build 4,000+ individual prose pages. Instead:

1. **A data layer**, `data/tdx/bike/`, pulled the same way
   `data/tdx/bus/` is (`scripts/fetch-bike-tdx.mjs`, mirroring
   `fetch-bus-tdx.mjs`): normalized station records with stable IDs,
   position, address, capacity, and a curated MRT/rail stop-ID join using
   the exact same 200 m stop-ID method already built and gated for
   buses (`scripts/curate-bus-rail-joins.mts`'s approach, generalised) —
   this reuses tested code rather than inventing a second geometry method.
2. **One index/browse page per city or district**, not per station: a
   station-density map or sortable table (name, district, capacity, nearest
   MRT/LRT station if within the curated join distance), in the spirit of
   `/bus/routes/<group>/` but without a matching per-station detail page for
   every row.
3. **Individual station pages only where there is a real fact beyond the
   data row** — for example, a station at a documented capacity-expansion
   history, a station tied to a specific rail-connection design decision
   (the gondola or MRT station's own bike-parking capacity, which the
   station's own page could cite), or a small curated set the way
   `content/rail/lines/sanying-line.md` is the *reference* implementation
   for one line, not a mandate to write 4,000 equally deep pages.
4. **Station-to-station-page linking, not station-to-station pages.** Rail
   and gondola station pages can gain a "nearest YouBike dock" fact sourced
   to the curated join, the same way route pages now link confirmed MRT
   interchanges — that is real, useful, low-effort value from the data
   layer without committing to thousands of thin pages.

## What this run did not do

No `data/tdx/bike/` layer was fetched to disk and committed, no
`scripts/fetch-bike-tdx.mjs` was written, and no station or index pages were
built. The counts and field samples above came from ad hoc `curl` calls
against the live API to verify feasibility and were not saved as project
data. Building the data layer and even one pilot city/index page is
future-run scope, the same way the bus layer's own pilot (`colour-brown`)
came only after `bus-architecture.md` was written and the shape approved.
