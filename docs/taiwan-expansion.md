# Taiwan expansion — groundwork, not a build

**Status: research and proposal only.** Nothing built. This mirrors
`docs/bus-architecture.md` and `docs/youbike-architecture.md`: verify what
exists, say what would break, propose an order — then stop and let the scope
be approved before any page ships.

## 1. What TDX actually publishes, verified live

Checked by direct authenticated API call this run (this project's existing
`TDX_CLIENT_ID`/`TDX_CLIENT_SECRET`, the same credential `scripts/fetch-tdx.mjs`
and `scripts/fetch-bus-tdx.mjs` already use), not from documentation or a
search summary. TDX's own general description states it covers 軌道運輸
（臺鐵、高鐵、捷運、輕軌）— TRA, HSR, metro and light rail — as one category;
the counts below confirm that in practice, not just in principle.

| System | Operator code (TDX path) | Confirmed live |
|---|---|---|
| TRA (臺灣鐵路) | `Rail/TRA/{endpoint}` | 12 lines, 245 stations, line-shape geometry present (`Rail/TRA/Shape`, though its own `SrcUpdateTime` reads 2016-08-08 — old, not necessarily current alignment) |
| THSR (台灣高鐵) | `Rail/THSR/{endpoint}` (note: **v2**, not v1 — v1 404s) | 12 stations |
| Kaohsiung Metro | `Rail/Metro/{endpoint}/KRTC` | 39 stations |
| Taichung Metro | `Rail/Metro/{endpoint}/TMRT` | 18 stations (the Green Line, the only line currently open) |
| Taipei/New Taipei/Taoyuan (already committed) | `TRTC` / `NTMC` / `TYMC` / `NTDLRT` / `NTALRT` | already in `data/tdx/` |

Notes and gaps found while checking, not assumed:

- The Metro endpoints (`Rail/Metro/{endpoint}/{operator}`) are the same
  shape already used for Taipei/New Taipei/Taoyuan — `Station`, and
  (rate-limited before a second attempt this run, not confirmed) presumably
  `Line`, `Shape`, `StationOfLine` following the same pattern
  `scripts/fetch-tdx.mjs` already knows how to pull. **Not independently
  re-confirmed for KRTC/TMRT's `Line`/`Shape`/`StationOfLine` endpoints
  this run** — worth a direct check before writing a fetch script, not an
  assumption that the shape carries over unchanged.
- TRA's `GeneralTimetable` endpoint exists under a different path pattern
  than guessed (`Rail/TRA/GeneralTimetable/OD/1000/to/2000` 404s); the
  correct path was not found this run. TRA timetables are real but the
  exact endpoint needs its own check, not an assumption from the Bus API's
  own OD pattern.
- TDX rate-limits aggressively under rapid sequential calls (`429` hit twice
  in this session on back-to-back requests). A real fetch script for a new
  system needs the same delay/retry discipline `scripts/fetch-bus-tdx.mjs`
  presumably already has for the bus pull, not assumed to be safe at the
  same call rate used for quick manual verification.

## 2. Primary source families, one per system

Mandarin-first, per this project's own sourcing discipline, and distinct
per system — not one generic "government portal":

- **臺灣鐵路 (TRA).** As of **1 January 2024**, the former 臺灣鐵路管理局
  (Taiwan Railway Administration) corporatized into **臺灣鐵路股份有限公司**
  (Taiwan Railway Corporation), a state-owned company wholly held by MOTC.
  Its own site is now the primary source for current TRA facts; anything
  citing 臺灣鐵路管理局 as a current operator is citing a body that no
  longer exists in that form, and pre-2024 sources describing the
  Administration need dating, not silent updating to the new name.
- **台灣高鐵 (THSR).** 台灣高速鐵路股份有限公司 (Taiwan High Speed Rail
  Corporation, THSRC) — a private company, not a government body — is the
  operator primary. 交通部鐵道局 is the regulator, not the operator; a THSR
  fare or schedule fact should cite THSRC, not the Railway Bureau.
- **高雄捷運 (Kaohsiung Metro).** Two bodies, the same split this project
  already handles for Taipei (TRTC vs. DORTS): **高雄捷運股份有限公司**
  (Kaohsiung Rapid Transit Corporation, KRTC) operates; **高雄市政府捷運局**
  (Kaohsiung City Government MRT Bureau) is the city construction/planning
  authority, the Kaohsiung analogue of DORTS.
- **台中捷運 (Taichung Metro).** 台中捷運股份有限公司 (Taichung Metro
  Corporation) operates the Green Line; a corresponding Taichung City
  construction bureau exists for planning/engineering history, not yet
  identified by name this run.
- **交通部鐵道局 (Railway Bureau, MOTC).** Formed **2018** by merging the
  former High Speed Rail Engineering Bureau (交通部高速鐵路工程局) and the
  Railway Reconstruction Bureau (交通部鐵路改建工程局). Its own stated
  remit covers planning, engineering and regulatory oversight for national
  railways **and** urban metro/light rail systems together — confirmed from
  its own site, fetched this run: 「專責包含一般鐵路、都會區捷運（含輕軌）在
  內的全國鐵路與軌道運輸系統之工程建設及監督管理業務」. THSR, as a private
  railway under the Railway Act, falls under its regulatory scope too. This
  is the one MOTC body whose own remit already spans every system this
  document covers — a genuinely useful cross-system primary for regulatory
  and engineering-history material, the way the Control Yuan turned out to
  be for the gondola's T16 failure.

## 3. Does the current architecture accommodate a national network?

Checked directly in `lib/`, not assumed from the shape of `data/tdx/`.

**What is already generic, and would just work:**

- `lib/content.ts`'s folder/type/system registry is filesystem-driven —
  `getSystems('rail')` reads whatever folders under `content/rail/` declare
  `kind: system` in their `_index.md`, not a hardcoded list. A new
  `content/rail/tra/` or `content/rail/thsr/` system folder would be
  discovered the same way `cable` already is, with no route-file change —
  confirmed by how cleanly this run's gondola-station work reused
  `app/rail/[system]/[type]/[slug]/page.tsx` with zero new app code.
- The bus layer's own pattern — a normalized `data/tdx/<system>/` pull, a
  `lib/<system>/` module, and content overlays merged at build time — is a
  proven, working template for a new rail system that is not one of the
  three already wired into `lib/lines.ts`.

**What is not generic, and would need real work:**

- `lib/lines.ts` hardcodes exactly five operators by literal import and a
  literal array: `[['TRTC', trtcLines], ['NTMC', ntmcLines], ['TYMC',
  tymcLines], ['NTDLRT', ntdlrtLines], ['NTALRT', ntalrtLines]]`. Adding
  TRA, THSR, KRTC or TMRT means editing this file directly — new imports,
  new array entries — not dropping a new data folder in and having it
  picked up. `lib/stations.generated.ts`'s own field comment currently
  documents `operator` as "TRTC, NTMC or TYMC" (a comment, not a type-level
  union, so not a hard compile-time block, but a real documentation debt
  the moment a fourth operator is added).
- **Line-code collisions are a real, unrolled risk.** The line registry is
  a flat `Map<string, {record, operator}>` keyed only by `LineID.toUpperCase()`,
  with no operator namespace in the key. Taipei already uses short codes
  (`G`, `O`, `R`, `BL`, `BR`, `Y`). TRA's own line codes seen this run
  (`CZ` for 成追線, and eleven others not enumerated) are a different
  scheme, but KRTC and TMRT's own line-code conventions were **not checked
  this run** — a collision (e.g. a Kaohsiung line also coded `R` or `O`)
  would silently overwrite an existing entry in today's flat map rather
  than erroring, which is exactly the class of bug this project's own
  false-join incident earlier in this run should make everyone cautious
  about. Namespacing the map key by operator before adding a fourth rail
  system is a prerequisite, not an optional cleanup.
- **The metro station page (`app/rail/metro/stations/`) is a bespoke,
  Taipei-specific template** — strip maps, elevation profiles, interchange
  groups — separate from the generic `EntityPage` the cable/gondola stations
  reused this run. A KRTC or TMRT station page would either need its own
  equally bespoke template (real design and build work, not a drop-in) or
  would have to accept the plainer generic `EntityPage` treatment gondola
  stations got, which is a real, visible quality gap between "the Taipei
  network" and "everything else" until someone builds it out.
- **The site's own identity assumes Taipei.** `package.json`'s `name` field,
  the GitHub Pages path (`/taipei-transit-guide/`, per `next.config.mjs`'s
  own comment), and `SITE_NAME` in `lib/site.ts` all currently say
  "Taipei." A national network is a naming and branding decision as much as
  a code one, and this document does not propose an answer to it — it is
  named here because it is a real decision, not a code change that can be
  made silently.
- **Content sourcing discipline scales, but the corpus does not exist yet.**
  There is no `docs/research/tra/`, `docs/research/thsr/`,
  `docs/research/khh/` or `docs/research/tmrt/` lead material at all. Every
  claim for a new system starts from zero, the same as the bus layer did —
  this is expected, not a defect, but it means "add TRA" is a research
  project of bus-layer scale, not a data-pull-and-template exercise.

## 4. Proposed scope and order for the first non-Taipei system

Not a recommendation to start immediately — a proposal to approve or
change, the same posture `bus-architecture.md`'s pilot section took.

**Taichung Metro (TMRT) first, if a pilot is wanted at all.** Reasons,
weighed against the alternatives:

- It is the smallest system checked (18 stations, one line), which bounds
  the size of the line-registry-namespacing fix and the research corpus
  both need to happen before any content ships — the same reasoning that
  made `colour-brown` (20 routes) the bus layer's own pilot rather than
  `colour-red` (40) or New Taipei (562).
- One line only removes the multi-line interchange-and-strip-map complexity
  that made the bespoke Taipei metro station template worth building in the
  first place — a single-line system is the strongest candidate for
  reusing the generic `EntityPage` gondola stations already proved works,
  rather than requiring the bespoke template to be generalized first.
- It is recently opened (2021) with an actively single operator and a
  presumably smaller, more tractable primary-source set than TRA's
  national, 245-station, 12-line network or THSR's older and more
  heavily-covered system.

**Kaohsiung Metro (KRTC) second** — the next smallest (39 stations), two
lines, and a genuine second data point for whether the line-registry and
station-template fixes generalize past one extra system or were
accidentally still Taichung-shaped.

**TRA and THSR last, and separately scoped, not folded into "the metro
work."** Both are national-scale (245 stations / 12 lines for TRA; a
smaller station count for THSR but a fare and timetable system with real
complexity — express/local service patterns, a corporatization in living
memory for TRA) that would each be their own multi-run project on the bus
layer's own scale, not a pilot extension.

**Before any of this starts:** namespace the `lib/lines.ts` line-code map by
operator (the collision risk in §3 is real regardless of which system goes
first), and write the TMRT research corpus the same way bus fare stages was
researched this run — Mandarin primary sources, full-page fetches, TDX for
structure only.

## What this run did not do

No `data/tdx/TMRT/` or `data/tdx/KRTC/` folder was fetched and committed,
no `lib/lines.ts` edit was made, no content pages were written, and no
line-registry namespacing fix was implemented. The API responses and
counts above came from ad hoc `curl` calls made to verify feasibility, not
saved as project data.
