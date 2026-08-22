# YouBike station data — decision and implementation

**Status: implemented for Taipei, New Taipei and Taoyuan.** A dock is a data
row, not an individual prose page. This avoids creating thousands of thin
pages whose useful facts are limited to a name, address, coordinate and
capacity.

## Committed data layer

`data/tdx/bike/stations.json` is a normalized build-time pull from TDX
`Bike/Station/City/{City}`. It keeps stable station identifiers, bilingual
names and addresses, coordinates, capacity, service type and source update
timestamps. `meta.json` records the endpoints, fields, retrieval time and the
explicit exclusion of the separate live availability feed. The pull is
reproducible with `scripts/fetch-bike-tdx.mjs` and uses the same TDX OAuth
credentials as the bus pull.

The 23 August 2026 local pull produced 1,794 Taipei rows, 1,593 New Taipei
rows and 699 Taoyuan rows, for 4,086 rows in this committed snapshot. An
earlier direct check recorded 1,790, 1,593 and 698 respectively, or 4,081 in
total. Both snapshots remain published as dated values; they are not averaged
or silently reconciled. The difference is a live dataset change between
retrievals.

## Pages and grouping

The site has one city index and one district-group index for each group exposed
by the TDX address data. The generated pages are:

- `content/bike/stations/taipei.md`
- `content/bike/stations/new-taipei.md`
- `content/bike/stations/taoyuan.md`
- direct district pages beneath the same folder

Every district row carries English and Chinese station names, capacity,
coordinates, an OpenStreetMap link and, where available, a nearby rail link.
Station names and identifiers are also page aliases, so the site search can
find the browse page containing a row. TDX does not expose a usable district
for many rows; those rows are kept in an explicit `Unclassified` page rather
than assigned from a guessed address or name.

## Rail join

`data/tdx/bike/rail-joins.json` contains only unique nearest-coordinate joins
within 200 metres. The candidates come from the committed TDX station
registries for Taipei Metro, the Circular Line, Airport MRT, Danhai LRT and
Ankeng LRT. A name match is never used. If the nearest result is ambiguous at
the one-metre tolerance or beyond 200 metres, the bike station has no join.
The current snapshot contains 364 joins from 4,086 bike rows.

## Deliberate exclusions and gaps

The `Bike/Availability/City/{City}` feed is live dock occupancy and is not
committed as static page content. Keelung and other TPASS-zone municipalities
are outside this first layer. Published historical counts and growth figures
remain on `content/bike/history/youbike.md`, with the 2025 Taipei figure kept
as a separate dated value because it does not measure the same retrieval as
the TDX snapshot.

There are no individual station pages in this design. A future station-level
article needs a real sourced fact beyond the data row, such as a documented
capacity expansion or a rail-station design decision; it must not be created
just to give every dock a URL.
