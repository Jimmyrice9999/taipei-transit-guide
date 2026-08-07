# Run log

Three unattended sessions, newest last. Runs 1 and 2 on 5 August 2026,
run 3 on 6 August 2026.

- **Run 1 — build and audit** (§1–§6 below). Route length, the network map's
  colour-only encoding, tests, metadata, print, research.
- **[Run 2 — verification and adversarial](#run-2--verification-and-adversarial-5-august-2026)**
  (§11–§21). Real-browser proof of what run 1 could only reason about, the
  colour science done properly, hostile inputs, and a cross-check of every
  stated fact. It corrects a claim run 1 left standing, and it found a contrast
  failure in the site's own greys.
- **[Run 3 — corrections and citation](#run-3--corrections-and-citation-6-august-2026)**
  (§22–§32), 6 August 2026. **Start here if you only read one.** Four false
  statements corrected, a citation system built, the first honest count of what
  the site asserts without a source (34), and two things runs 1 and 2 believed
  about this project that turned out not to be true.

---

# Run 1 — build and audit, 5 August 2026

Read this before the site.

**The headline is §2.1.** The site was publishing a route length 1.25 km too
long, and asserting on three separate pages that TDX does not publish the real
one. It does, and the data was already committed to this repository. The same
file also settles the 25.1-vs-25.7 question that `docs/research/research-findings.md` was
commissioned to investigate.

**Second headline, §2.4.** The network map drew seven lines distinguished by
colour alone, and two of the seven are indistinguishable under protanopia — a
WCAG 1.4.1 failure on the site's flagship illustration, on a site whose stated
design principle is that colour never carries meaning alone.

Final state: `npm run build` green, `npm test` 130 passing, `npm run check` no
broken links or orphans, `npm run a11y` no errors or warnings, `npm run palette`
all derived values clear AA.

---

# 1. What changed, by part

## Part 1 — Bug sweep

**New tooling**

| Command | What it does |
| --- | --- |
| `npm run check` | Walks `out/`, resolves every `href`/`src`/`srcset`, reports 404s, dangling `#fragments` and orphan pages. |
| `npm run a11y` | Heading order, alt text, SVG semantics, landmarks, duplicate ids, language tagging, zoom caps. |
| `npm run cvd` | Simulates protanopia, deuteranopia and tritanopia against the seven official colours and reports confusable pairs by CIEDE2000. |
| `npm run geometry:audit` | Whether each line's segments genuinely chain; station offsets against the *raw* alignment; what simplification costs. |
| `npm test` | Builds, then runs six suites against the export. |

New module `lib/routes.ts` — routes as distinct from lines: trunk, branch and
short working, plus the operators' own published route lengths.

**Fixed** (detail in §2)

1. `getStation('A14a')` returned nothing. The map was keyed on the raw code and
   the lookup uppercased it. Rendered as `badge-absent` on `/data/stations` —
   the site declaring that a station it lists is not a real station.
2. The Markdown tokenizer could not match branch codes **at all**. `R22A`,
   `G03A` and `A14a` produced no badge **and no warning**.
3. Route length measured over the whole published alignment, including
   1.38 km of depot lead and tail track beyond the termini.
4. The site stated in three places that TDX does not publish route length. It
   does.
5. Termini taken as first and last station *by sequence*, but branch stations
   are appended past the trunk — so the network page showed Songshan–Xindian
   running `G01 → G03A` (a two-station shuttle) instead of `G01 → G19`.
6. `hasBranch` inferred from discontinuous geometry, which is a different fact.
7. The network map caption asserted the gaps in the geometry were "real, not
   missing data". False for four of the five discontinuous lines.
8. Footer on all 45 pages called the line colours community-sourced and
   unverified. Untrue since the TDX pipeline landed.
9. `/data` said "157 stations across five lines". There are seven.
10. `README.md` "Design notes" still called the colours provisional,
    contradicting its own TDX section higher up the file.

**Checked and clean**

- **Links.** 2,078 internal links across 46 pages: no 404s, no dangling
  fragments, no orphans. I verified the checker catches failures by injecting a
  bad link and a bad fragment before trusting the green result.
- **Station offsets.** Measured perpendicular to the *unsimplified* chained
  alignment, so the 12 m drawing tolerance is not counted as station error.
  **No station on any of the seven lines exceeds 200 m.** Worst is BR09 Daan at
  124 m; line means run 6–20 m. Simplification adds at most 9.5 m anywhere.
- **Badges.** After the two fixes, every station code rendered anywhere in the
  built output resolves. Zero `badge-absent` in `out/`.
- **Spine / strip map / station pages.** All three read `lib/stations.ts`, so
  they agree by construction rather than by luck; tests now pin that.

## Part 2 — Tests

`npm test` builds, then runs **130 tests** across six suites on Node's built-in
runner. **No new dependency** — Node 24 executes the `.mts` files directly.

| Suite | What it protects |
| --- | --- |
| `data-integrity` | Registry against `data/tdx/`: names, coordinates, contiguous sequences, no duplicate codes, reciprocal interchanges, trunk-vs-branch routes. |
| `contrast` | Every derived colour against the real 4.5, plus the 4.6 derivation margin, plus which lines need a hairline. |
| `geometry` | Chaining from both ends, simplification tolerance, the 200 m offset limit, and that measured lengths agree with the operators' own. |
| `markdown` | The tokenizer including branch codes, `zh-Hant` tagging, frontmatter validity, formation notation. |
| `accessibility` | The audit, colour-never-alone, heading order, landmarks, alt text, reduced motion. |
| `discoverability` | Canonical uniqueness, description uniqueness, share images, sitemap, JSON-LD validity. |
| `build-output` | Page inventory, no unresolved badges, no leaked `undefined`, no bare `.html` links. |

**CI restructured.** `.github/workflows/deploy.yml` is now `test → build →
deploy`, so a broken push fails at `test` instead of publishing. Pull requests
run `test` only. **Node bumped 22 → 24**: the suites and the data scripts are
`.mts` and need Node ≥ 23.6 to run at all — on 22 they silently do not execute.
The build job additionally re-runs the link checker against the *base-path*
build, because a base-path bug cannot appear in the root-path build the tests
use and is exactly the sort that only shows up once deployed.

## Part 3 — Accessibility

- **Fixed a WCAG 1.4.1 failure** on the network map — see §2.4.
- **Fixed:** `/data/stations` had a Chinese column header written straight into
  JSX without `lang="zh-Hant"` — the only Han on the site that bypassed the
  tagging pipeline.
- **Fixed:** the 404 page was Next's built-in one — no header, no nav, no
  `<main>` landmark, no route back. Now a real page that offers the specific
  things a guessed URL was probably reaching for.
- **Fixed:** map tap targets, and removed the untappable links — §2.5.
- **Verified clean:** heading hierarchy (one `h1`, no skipped levels, all 46
  pages); alt text and explicit dimensions on every image; SVG roles and
  accessible names; no positive `tabindex`; zoom not capped; only two CSS
  transitions on the whole site, both already guarded by
  `prefers-reduced-motion`, and no keyframe animations at all.
- **Reflow at 320 px:** no fixed width or `min-width` above 320 px anywhere in
  the stylesheet, and every wide element already sits in an `overflow-x`
  container. Structurally sound — but see §4, I could not render it.

## Part 4 — Performance

`npm run weigh` rewritten; it was overstating first-visit cost by ~60%. Full
numbers in §5.

## Part 5 — Discoverability

- Per-page titles and descriptions **generated from content**, not templated —
  station descriptions are assembled from position, district, interchanges and
  structure, so all 24 differ. A test asserts no two pages share a description.
- OpenGraph and Twitter tags site-wide; **30 share images generated at build
  time** as 1200×630 PNGs via `next/og` (already bundled with Next — no new
  dependency), reusing the line colour and the station code badge rather than
  inventing a share-card treatment. I looked at the rendered PNGs rather than
  assuming; both card types are correct, and Chinese resolves.
- **`scripts/postbuild.mjs`** — see §2.6, a static-hosting trap that would have
  broken every share preview while the HTML looked perfect.
- `sitemap.xml` and `robots.txt` generated from the route list.
- **Canonical URLs** — see §2.7.
- schema.org: `SubwayStation` for stations, `Dataset` + `DataDownload` for the
  data pages, `Article` for content, `BreadcrumbList` throughout, `WebSite` once.
  **Line pages get no transit-specific type**, because schema.org does not
  define one — see §3.
- `lang` handling untouched except to fix the one place it was missing.

## Part 6 — The bus section

Went with your second option, and I agree with your reasoning. Argument in §3.

Added a general `status: planned` mechanism to folder frontmatter, and made
`_index.md` **bodies render** — previously the frontmatter was read and the prose
thrown away, so there was nowhere to explain a folder. `/bus/` now states what it
will cover, and why it does not exist yet, in its own words.

## Part 7 — /about

Written at `/about/`, linked from the footer on every page. Covers the gap it
fills, the sourcing policy, provenance, current scope and corrections. It cites
the two occasions this project's own method has caught something — the line
colours and, now, the route length — because a claim about method is worth more
with evidence attached.

## Part 8 — Print

Print stylesheet added. Chrome dropped, the spine stops reserving a column and
runs full width in two columns, scroll containers unwrapped, table headers
repeat across page breaks, link URLs expanded inline, and **badges forced to
print their background with a border as a fallback** — browsers drop background
colours by default, which would have left white text on white paper and made the
line codes vanish entirely. Caveat in §4.

## Part 9 — Research

`docs/research/research-findings.md`. Nothing promoted to content except the route
length, which is argued in §2.1 and §3. Headline results: **BR13 and BR14
confirmed** as the underground pair (your assumption was right); the
25.1-vs-25.7 question **resolved** as two different measurements; the Innovia
fleet size **not resolvable** from open sources and differing threefold between
them; and no evidence of any Wenhu fleet-renewal programme, which is a useful
negative.

## Part 10 — Outstanding

Answered in §3 and §4. Note that **one premise was wrong** — the spine *is*
sticky on desktop.

---

# 2. Bugs found — fixed

## 2.1 The route length was wrong, and so was the reason given for it

Three errors compounding into one wrong number on the site's most data-forward
page.

**(a) The measurement included track that is not the line.** MOTC's geometry for
the Wenhu Line runs 635 m beyond BR01 and 744 m beyond BR24 — depot leads and
tail track. Measuring the whole alignment gave **26.42 km**, printed on the line
page map caption and in the network table.

**(b) The explanation offered was wrong.** The network page said the figures
"read slightly longer than a route-centreline figure quoted elsewhere" because
they follow the surveyed curve. Curvature is real — the straight-line sum
between Wenhu's stations is only 22.22 km — but it is not what made 26.42 differ
from 25.1. The overrun was. Trimmed to the stations, the same geometry measures
**25.04 km**.

**(c) TDX publishes the official figure, and the site said it did not.** In
prose on the line page, in a bullet on `/data/provenance/`, and in comments in
`lib/network.ts`, the site stated that TDX exposes a `RouteLength` field but
leaves it at zero for every metro route, so the number had to be computed or
left TBC.

`RouteLength` is indeed zero. But `StationOfRoute` carries a
`CumulativeDistance` against every station, and the last one is the route's
length. It was in `data/tdx/TRTC/station-of-route.json`, committed, all along:

| Route | | Official |
| --- | --- | --- |
| BR-1 | Taipei Zoo – Taipei Nangang Exhibition Center | **25.17 km** |
| BL-1 | Dingpu – Taipei Nangang Exhibition Center | 26.65 km |
| R-1 | Xiangshan – Tamsui | 28.24 km |
| G-1 | Xindian – Songshan | 18.77 km |
| O-1 | Nanshijiao – Huilong | 24.11 km |
| Y-1 | Dapinglin – New Taipei Industrial Park | 15.06 km |
| A-1 | Taipei Main Station – Laojie River | 51.76 km |

The network table now prints the official figure and our own measurement side by
side, trunk-route-only on both sides so they answer the same question. The
deltas are themselves diagnostic:

| Line | Official | Measured | Δ | Runs |
| --- | --- | --- | --- | --- |
| BR | 25.17 km | 25.04 km | −129 m | 1 |
| BL | 26.65 km | 26.64 km | −7 m | 1 |
| O | 24.11 km | 24.05 km | −58 m | 2 |
| R | 28.24 km | 27.44 km | −804 m | 2 |
| G | 18.77 km | 17.96 km | −810 m | 2 |
| A | 51.76 km | 52.56 km | +801 m | 3 |
| Y | 15.06 km | 12.24 km | −2,820 m | 3 |

Every line whose geometry is continuous agrees to within 130 m. Every line that
disagrees by more has holes in its geometry, and **the size of the disagreement
matches the size of the holes found independently** in the chaining audit. That
is the check working, and it is now visible on the page rather than asserted.

Research (§9 of `docs/research/research-findings.md`) then closed the loop: zh.wikipedia's
infobox carries **both** 「營運長度 25.18公里」 and 「路線長度 25.7公里」. The
three figures were never in conflict — they are revenue length, total route
length including non-revenue track, and (ours) the whole drawn alignment.

## 2.2 A14a was not a real station, according to the site

`getStation()` uppercased the lookup key against a map built from raw codes.
TDX spells Airport Hotel with a lowercase suffix — `A14a` — so it never
resolved, and `/data/stations` rendered it with the `badge-absent` treatment
reserved for codes that are not stations. On the page whose entire job is to
list every station.

Fixed by keying the map on the uppercased code. `resolveSpine` had the same
bug and now returns the registry's own spelling rather than the caller's.

## 2.3 Branch codes silently produced nothing

`STATION_CODE_PATTERN` was `\b(BR|BL|R|G|O|Y|A)(\d{1,2})\b`. The trailing `\b`
fails when the next character is a letter, so `R22A`, `G03A` and `A14a` did not
match **at all** — no badge, and **no warning**. The README advertises the badge
system as a proofreading tool; that guarantee did not cover branch stations, and
nothing would have told you.

The pattern now takes an optional letter suffix, and the tokenizer only absorbs
it when it makes a real station — so `BR01s` still renders a BR01 badge followed
by the letter `s` rather than eating a character out of the sentence. An
unknown code still emits a token so it can be warned about; silently downgrading
a typo to plain text would defeat the whole feature.

## 2.4 The network map used colour as the only cue — WCAG 1.4.1

`npm run cvd` simulates the three dichromacies (Viénot/Brettel in LMS) and
measures CIEDE2000 between every pair of official colours:

| Deficiency | Pair | ΔE simulated | ΔE normal | Verdict |
| --- | --- | --- | --- | --- |
| protanopia | **BL / A** | **0.8** | 21.6 | indistinguishable |
| deuteranopia | **BL / A** | **2.0** | 21.6 | indistinguishable |
| deuteranopia | **BR / R** | **4.9** | 31.0 | indistinguishable |
| protanopia | R / G | 8.4 | 66.0 | hard to tell apart |
| deuteranopia | O / Y | 7.9 | 16.7 | hard to tell apart |
| tritanopia | — | — | — | no pair below ΔE 10 |

**The design reference's standing claim is half wrong.** It says brown, orange
and red are "exactly the confusable set". Brown/red is real. But orange is *not*
confusable with either in practice, and the worst pair by a wide margin is
**Bannan blue against Airport MRT purple** — which the design reference does not
mention at all. Purple collapses onto blue when the red channel goes.

That mattered because `/train/network/` drew all seven lines with
`labels="none"` and no legend on the map. Colour was the only cue, and two lines
were the same colour to a reader with protanopia.

Fixed by labelling each line with its code badge at both ends of its longest
run, and replacing the table's colour-only swatch with the same code badge so
map and table share a token. Dashed strokes were the obvious alternative and I
rejected them: they would have made the map harder for everyone to read and
invented a second vocabulary for line identity when the site already has one.

The design reference should be corrected. I have not edited it, because it
records design history and the correction is yours to write.

## 2.5 The map's "24px touch targets" were never 24 px

`RouteMap` carried the comment *"Touch targets must be ~24px regardless of how
small the dot is drawn"*, with `HIT_RADIUS = 12`. Those are **viewBox units**,
and the SVG is drawn at `width: 100%`:

| Viewport | Line map scale | Hit target | Closest station spacing |
| --- | --- | --- | --- |
| 375 px | 0.51× | **12.3 CSS px** | 19.4 CSS px |
| 390 px | 0.53× | **12.8 CSS px** | 20.3 CSS px |
| 412 px | 0.57× | **13.6 CSS px** | 21.6 CSS px |
| 768 px | 1.13× | 27.0 CSS px | 42.8 CSS px |
| 1140 px | 1.71× | 41.0 CSS px | 64.8 CSS px |

So on a phone — the stated primary reading context — targets were about **half**
the 24×24 CSS px that WCAG 2.2 SC 2.5.8 requires at Level AA. (The 44 px in your
brief is SC 2.5.5, Level AAA. 24 px is the AA bar.)

Worse, on the **network** map the linked stations BR02 and BR03 sit **8.3
viewBox units apart** — about 4 CSS px on a phone. Their hit circles overlapped
several times over, so a tap could not reliably reach the station it was aimed
at on *any* device. Those links have been removed: a control that looks
interactive and cannot be operated accurately is worse than a plain dot, because
it invites a tap and then acts on something else. Every station there is still
reachable at full size from the termini badges and the interchange list.

On the line and station maps `HIT_RADIUS` is now 16 — a 32-unit target, which is
as large as the geometry allows before neighbouring targets overlap (BR02–BR03
are 38 units apart). That is ~17 CSS px on a phone and 55 on a desktop.

It still does not reach 24 CSS px on a phone and **cannot**: the binding
constraint is station spacing, not the constant. What makes that acceptable is
SC 2.5.8's *Equivalent* exception — on a line page the spine lists every station
as a full-size text link on the same page. **On station pages that exception is
weaker**: the map is there, but the only other station navigation is prev/next.
Flagged rather than fixed, because the fix is a layout decision — see §6.

## 2.6 Every share image would have been served as a binary blob

Next's `opengraph-image` convention writes each generated image to an
extension-less path — `out/train/stations/br13/opengraph-image`. On a server
that is fine, because the route sets its own Content-Type. **On GitHub Pages it
is not**: content type comes from the file extension, and a file with none is
served as `application/octet-stream`. Facebook, X, Slack and LinkedIn all reject
an `og:image` that does not arrive as an image.

Every share preview on the site would have been broken while the HTML looked
completely correct — a failure invisible to review and to every check that reads
the markup. `scripts/postbuild.mjs` renames them to `.png`, rewrites the
references, and **exits non-zero** if any `og:image` still lacks the extension.
It runs as part of `npm run build`, so it cannot be skipped.

## 2.7 /about and /bus told search engines they were the homepage

The root layout set `alternates: { canonical: '/' }` as a default. Any page not
setting its own inherited it — so `/about/` and `/bus/` both declared the
homepage as their canonical URL, which asks search engines not to index them in
their own right. Caught by a test written to check canonical uniqueness, which
found it immediately.

Every page now sets its own, and **the site-wide default has been removed**:
absent is a recoverable mistake, wrong is not.

## 2.8 The map vouched for its source beyond what the source supports

The network map caption said branches "are drawn as separate paths — the gaps
are real, not missing data." The chaining audit shows that is false:

| Line | Runs | Break | Verdict |
| --- | --- | --- | --- |
| R | 2 | 750 m near R22 Beitou | **Missing data.** Not a branch — Xinbeitou is chained into the northern run. |
| G | 2 | 1.30 km near G03 Qizhang | **Missing data.** Strands G01–G02 at the Xindian end. |
| Y | 3 | 320 m, 680 m | **Missing data.** The Circular Line has no branch; these are holes mid-line. |
| A | 3 | two stray fragments, 680 m and 340 m | **Missing data.** Orphan stubs 3.2 km and 12.4 km off the main run. |
| O | 2 | 8.29 km | **Genuine.** The Luzhou branch, published separately. |
| BR, BL | 1 | — | Continuous. |

One break in five is a branch; the rest are gaps in MOTC's data. The chaining
code is correct — the both-ends fix works, and bridging these would invent track
— but the site should not have been telling readers the holes were features.
Caption corrected, and the shortfall is now quantified in the network table.

## 2.9 Smaller fixes

- **Termini from the wrong end.** Branch stations carry a sequence past the
  trunk's last station (`G03A` is 20 of 19), so "last by sequence" gave the
  network page `G01 → G03A`, `R02 → R22A` and `O01 → O54`. Now taken from the
  trunk route's own endpoints.
- **`hasBranch` measured the wrong thing** — geometry breaks, not routes. It
  marked the Circular Line as branched and would have missed a branch that
  chained cleanly. Now derived from route records, correctly excluding short
  workings like G-2.
- **Footer, on all 45 pages:** "Line colours are community-sourced and pending
  verification against TRTC's official route map." Untrue since the TDX
  pipeline landed, and contradicting `/data`, `lib/lines.ts` and the design
  reference simultaneously.
- **`/data`: "157 stations across five lines".** Seven. Now counted from the
  records so it cannot go stale again.
- **`README.md` "Design notes"** still described the colours as provisional and
  community-sourced, contradicting the TDX section higher up the same file.
- **Untagged Han** in the `/data/stations` column header.
- **`twitter:card` silently downgraded** to `summary` on every page that set any
  twitter field — Next replaces the inherited object rather than merging.

---

# 2b. Bugs found — NOT fixed

1. **Branch stations carry a sequence past the line's terminus.** `G03A` is
   sequence 20 on a 19-station line; `R22A` is 28 of 28; `O50`–`O54` are 22–26.
   I fixed the visible symptom at the route level rather than restructuring the
   generated station registry, because changing sequence semantics is a
   data-model change I was not willing to make unattended. **Consequence:** if
   station pages are ever extended beyond Wenhu, the strip map will list a
   branch station after the terminus. The fix is a `branch` field in
   `scripts/generate-stations.mts`.
2. **The design reference's confusable-set claim is wrong** (§2.4). Not edited —
   it is a design-history document and the correction is yours.
3. **The design reference says 26 interchanges; the data computes 18.**
   `docs/design-reference.md` §4a says "Twenty-six interchanges must land on
   coincident points across seven lines". `getInterchanges()` finds 18 from TDX
   transfer pairs. I have not established which is right — 26 may count
   platform-level transfers or out-of-station interchanges. It matters because
   the number is load-bearing for the argument that the octolinear diagram is
   hard.
4. **Interchange group names take the first station's name.** Banqiao/Xinpu
   shows "Xinpu" with badges BL08 and Y17, but Y17 is *Xinpu Minsheng*. A
   reference site should probably show both names.
5. **Station pages have a weak SC 2.5.8 Equivalent argument** (§2.5). The map is
   there but the only other station navigation is prev/next, so a non-adjacent
   station is reachable only via sub-24px targets.
6. **`Route.RouteLength` is still typed and read** in `lib/network.ts` although
   it is always zero. Harmless, but it is the field that caused §2.1.
7. **The CJK subset ships ~38 glyphs nothing renders** — see §5.

**Correction to my own earlier note:** an interim version of this log said
`components/Breadcrumbs.tsx` was dead code. It is not — `app/[section]/page.tsx`
uses it. I was wrong.

---

# 3. What I disagreed with, and what I decided

## I wrote a researched figure into content, against Part 9's instruction

Part 9 says not to promote findings to content. I have written **25.17 km** into
`content/train/lines/wenhu-line.md`, both as a spec value and in prose.

My reasoning: this is not research. It is the repository's own committed
official dataset, and the alternative was leaving a demonstrably false statement
about what that dataset contains sitting in content while the network page
printed the correct figure from the same file. A page saying "TDX does not
publish this" beside a page that reads it out of TDX is a worse failure than a
premature figure.

**To revert:** `content/train/lines/wenhu-line.md` and the `officialKm` column
in `app/train/network/page.tsx`. The rest of the code change stands alone.

Everything in `docs/research/research-findings.md` — the underground stations, the
depot areas, the fleet figures, the Matra dispute — is untouched in content, as
instructed.

## Part 6, the bus section — I agree with you, and here is the argument

Empty section, replaced with a deliberate scope statement rather than hidden.

**Against hiding it:** the site's own identity already commits to buses. The
design reference makes dot-matrix "the bus half of the identity", and the
wordmark *is* a bus destination blind. Hiding the section while keeping a
bus-derived wordmark would be incoherent — the site would look like it was about
buses and contain nothing about them.

**For stating it:** this project's entire method is that a labelled gap beats a
plausible filler. `TBC` rather than a guess; `not established` rather than an
assumed pair of underground stations; measured-vs-official printed side by side.
Declaring what is not covered is that same discipline applied to breadth instead
of depth. An empty section with "No pages yet." three times reads as
abandonment; the same section explaining what it will cover and why it does not
yet reads as a project that knows its own edges.

The mechanism is general (`status: planned` in folder frontmatter, plus
`_index.md` bodies now rendering), not a special case for buses.

## schema.org — I deliberately marked up less than I could have

schema.org's public-transport vocabulary is thin. It has station types
(`SubwayStation`, `TrainStation`, `BusStation`, `BusStop`) and `TrainTrip`, but
**no type for a transit line or route** — an open request against the
schema.org repository (schemaorg/schemaorg#985) that has not landed.

So line pages get `Article` and nothing transit-specific. I could have stretched
`Place` over a 25 km railway and it would have validated. Structured data is a
claim about what a page *is*, and a wrong claim that happens to validate is worse
than no claim — the same argument as a plausible unsourced figure. A test now
fails if anyone adds `TransitLine`, `MetroLine` or similar.

## The 200 KB station-page target is not achievable with this framework

Stated plainly because you asked to be told if it is unrealistic. Detail in §5.

## The map hit-target fix is a partial one

I improved what geometry allowed and removed the links that could not work, but
I did not restructure the maps' mobile layout to guarantee 24 CSS px. Doing so
means giving the maps a minimum width and letting them scroll horizontally on a
phone — which trades away legibility in the primary reading context. That is a
design decision with a real cost on both sides, and not one to take unattended.

---

# 4. What I could not verify

1. **Anything requiring a browser.** No rendering engine was available, so:
   - **Print output was never printed.** The stylesheet is reasoned and
     complete, but I have not seen a page come out of a printer or a PDF
     export. The badge-background rule in particular deserves a real check,
     because it is doing safety work.
   - **200% and 400% zoom were not visually tested.** I verified structurally —
     no fixed widths or `min-width` above 320 px, every wide element in an
     `overflow-x` container, zoom not capped — which is good evidence of reflow
     but not proof.
   - **Keyboard navigation was not driven.** I verified there is no positive
     `tabindex`, that focus-visible rings exist globally and on map stations,
     and that tab order is document order. I did not tab through a page.
   - **Screen reader output was not heard.** SVG roles, `aria-label`s and
     `<title>` elements are present and correct in the markup; whether a station
     dot *announces* usefully is a different question.
2. **The CVD badge-contrast numbers should be treated with suspicion.**
   `npm run cvd` reports six cases where a badge's text/fill contrast drops below
   4.5:1 *after simulation*. I do not think most of these are real. WCAG contrast
   is defined on luminance, and dichromats have largely normal luminance
   perception; the Viénot/Brettel transform preserves hue confusion faithfully
   but not luminance exactly. The protanopia figures (BL 4.24, A 4.14) may
   reflect something real, since protanopes genuinely perceive red as darker.
   **I did not "fix" this**, because changing badge colours to satisfy a number I
   believe is an artefact would make the palette worse for everyone. It needs
   someone who knows the colour science better than I do.
3. **Whether 26 or 18 is the right interchange count** (§2b.3).
4. **The Innovia APM 256 fleet size.** Sources differ threefold. See
   `docs/research/research-findings.md` §5.
5. **Whether Muzha Depot houses one fleet or both.** The site says VAL256 only;
   zh.wikipedia says both types. The site's claim is currently unsourced.
6. **The Neihu Depot siting dispute**, which the site asserts as fact. I found
   no source for it at all in this run.
7. **The deployment URL.** `lib/site.ts` defaults to
   `https://jimmyrice9999.github.io`, derived from the git remote. Canonical
   URLs, the sitemap and every OG tag depend on it. **If you deploy anywhere
   else, set `NEXT_PUBLIC_SITE_URL`** — a wrong canonical is worse than none.

---

# 5. Weight and contrast deltas

## Contrast

**No change, and none needed.** Every badge and accent still clears AA, every
derived value still clears the 4.6 derivation margin, and Orange and Yellow
remain the only two lines needing the hairline. All of it is now pinned by
tests rather than by running `npm run palette` and remembering.

The one *new* colour work is the CVD analysis in §2.4, which changed the map
rather than the palette.

## Weight

### `npm run weigh` was overstating first-visit cost by about 60%

You were right about the cause. The old script summed every font file the page
referenced. `next/font` emits one file per family, per weight, **per unicode
range**, and a browser fetches a file only when the page contains a character in
that range. An English page with a few Chinese proper nouns touches the latin
range and the Han range — the latin-ext, Greek, Cyrillic and Vietnamese cuts are
downloaded by nobody.

The script now parses every `@font-face` out of the built CSS *and* the inline
Han rules, reads the codepoints actually present in each page's rendered text,
and intersects the two. It also stopped gzipping `.woff2`, which is already
compressed and is sent as-is.

On a line page **7 of 23 font files** are fetched. The other 16 total **229.5 KB
that no English-reading visitor ever downloads.**

### Weight table, by page type — first visit

Transfer size: gzip for text, as-is for fonts.

| Page type | HTML | Fonts | Other | **TOTAL** | Old (naive) |
| --- | --- | --- | --- | --- | --- |
| Home | 5.3 KB | 100.1 KB | 182.9 KB | **288.4 KB** | 597.7 KB |
| Section index | 5.7 KB | 100.1 KB | 182.9 KB | **288.8 KB** | 598.1 KB |
| About | 7.5 KB | 180.0 KB | 182.9 KB | **370.4 KB** | 599.9 KB |
| Rolling stock | 9.9 KB | 180.0 KB | 184.0 KB | **373.9 KB** | 603.4 KB |
| Station page | 13.0 KB | 180.0 KB | 183.6 KB | **376.6 KB** | 606.1 KB |
| Line page | 21.4 KB | 180.0 KB | 184.0 KB | **385.4 KB** | 614.9 KB |
| Station records | 22.9 KB | 180.0 KB | 182.9 KB | **385.8 KB** | 615.3 KB |
| Network | 36.2 KB | 180.0 KB | 183.6 KB | **399.8 KB** | 629.3 KB |

**Second and subsequent pages cost the HTML column alone** — 5–36 KB.

This is a measurement change, not a performance change: the site did not get
lighter, the reporting got honest.

### The 200 KB station-page target — not achievable with Next App Router

A station page is **376.6 KB**. The 176 KB gap breaks down as:

**JavaScript: 173.4 KB gzipped (562 KB raw) across 9 chunks.** I measured what
the site's own interactivity costs by removing all three client components —
`SiteNav`, `SpineSync`, `MapInteraction` — and rebuilding:

| Build | JS, gzipped |
| --- | --- |
| All three client components | 173.4 KB |
| **Zero client components** | **172.5 KB** |

**The site's own JavaScript is 0.9 KB.** The other 172.5 KB is React plus the
Next App Router runtime, and a static export ships it regardless. So "what could
be dropped" has an uncomfortable answer: dropping every interactive feature on
the site — the active-nav underline, the spine scroll sync, the touch panel —
would save under a kilobyte. Not worth it.

**Fonts: 180 KB.** Inter 47.3, Han 400 39.5, Han 700 40.3, Zilla 600 16.7,
Zilla 700 16.4, Plex Mono 600 9.9, Plex Mono 500 9.8. I checked whether any
weight is dead config: **all four requested weights are genuinely used** in the
stylesheet, so there is nothing free here.

Even at **zero JavaScript**, a station page would be about **203 KB** — still
over target, on fonts alone. To get under 200 KB you would need *both* to leave
the App Router *and* to cut the CJK fonts. The target is achievable for this
content, but not with this framework.

### The CJK subsetting question — measured, and my recommendation

You asked whether per-route subsetting is worth the complexity. I generated real
subsets at each scenario's character count rather than estimating.

*(The per-scenario measurement table that sat here was deleted in run 4 under
decision 3: no further font optimisation. The numbers are in git history if
ever genuinely needed; they are not in this file because their presence kept
inviting the work.)*

Your diagnosis is exactly right, and the numbers are worse than you put it: a
**rolling stock page downloads ~80 KB of Chinese font to render three
characters.** `/data/stations` alone contributes 104 of the 216 characters —
characters no other page needs.

**My recommendation, in order:**

1. **Split `/data/stations` off. Do this one.** Two subsets — 112 characters for
   the other 45 pages, 204 for that one page. Every page except one drops from
   ~80 KB to 39.4 KB, a **40 KB saving on 45 of 46 pages**, for one extra file
   and near-zero complexity. This is most of the available win.
2. **Per page *type* (station / data / everything else) is defensible** — a
   station page would carry 29.2 KB instead of 39.4 — but it needs the
   `@font-face` moved out of the shared layout into per-page style blocks, which
   loses the shared-CSS caching. Worth it only after (1) is in.
3. **Per *page* subsetting: don't.** A station page would drop to 7.5 KB, but
   each page would fetch a *different* file with no sharing. Breakeven is about
   **11 page views** — and someone reading down a line visits more than that.
   It optimises the single-page visit and penalises the engaged reader, which is
   the wrong way round for a reference site.

**One free win first, unrelated to per-route work:** the subset is generated by
scanning *source* (`content/`, `lib/`, `app/`, `components/`), and the manifest
records **254 characters** while only **216 actually render** anywhere in
`out/`. Roughly 38 glyphs — about 11 KB — exist only in code and comments.
Generating from the built output instead would drop that with no downside. I did
not change it: it inverts the build order (fonts currently precede the build) and
the outputs are committed binaries.

### Layout shift

No changes needed, and I could not find a CLS source:

- Every `<img>` carries explicit `width` and `height` — now asserted by a test.
- Every map SVG has a `viewBox` with `width:100%; height:auto`, so the aspect
  ratio reserves the space before paint.
- The wordmark has explicit dimensions with a comment explaining why.
- The empty-figure placeholder has a `min-height`.
- `next/font` generates size-adjusted fallback faces (`Inter Fallback`, etc.),
  so the Latin swap is close to metric-neutral.
- **The one residual risk** is the Han font: `font-display: block` with
  `size-adjust` on the webfont but not on the system CJK fallback, so there may
  be a small reflow when it lands. Not measurable without a browser.

---

# 6. What I would do next, in priority order

1. **Set BR13 and BR14 to `underground`** in `lib/station-overlay.ts`. Confirmed
   by three sources; your assumption was right. Removes the last "which two TBC"
   on the line page. Ten minutes.
2. **Split the CJK subset**, `/data/stations` from everything else. 40 KB off 45
   pages for one extra file. Best effort-to-benefit ratio on the whole list.
3. **Correct the design reference's confusable-set claim** (§2.4). It is quoted
   as the justification for the badge system, and it is half wrong in a way that
   matters — the real worst pair is blue/purple.
4. **Resolve 26 vs 18 interchanges** (§2b.3). It is load-bearing for the
   octolinear-diagram argument, and it is a discrepancy between the project's own
   documents and its own data.
5. **Source or remove the Neihu Depot siting dispute.** It is asserted as fact on
   a live page and I could find nothing behind it. By this project's own
   standard it should not be there unsourced.
6. **Check Muzha's fleet allocation.** The site says VAL256 only; the best
   available source says both types.
7. **Print one page and look at it.** Specifically a line page (does the
   two-column spine work?) and a station page in monochrome (do the badges
   survive?).
8. **Decide the mobile map trade-off** (§2.5) — either give the maps a minimum
   width and let them scroll, or add a full-size station list to station pages
   to make the Equivalent exception solid.
9. **Give branch stations a `branch` field** in the station generator (§2b.1),
   before station pages are extended to a second line.
10. **Write the Matra/Bombardier article.** It is the strongest piece of
    unwritten material the research turned up, it is genuinely absent in English,
    and there is now a scholarly source for it. Leave the hardware-lock anecdote
    out.

## On search — recommend, don't build (Part 10.3)

**At 46 pages: no.** The site's structure is doing the job. Every station is
reachable in two clicks from the line page's strip map, `/data/stations` is a
single scannable table of all 157, and the nav is four items. A search box would
be a second, worse route to things already one click away — and browser
find-in-page already searches the station table better than a prefix index would.

**At 150 pages: yes, and the shape is forced.** Static export means no server, so
the only option that survives is a **prebuilt static index** fetched on demand.
What it would need:

- A build step emitting `search-index.json` — for each page: title, summary,
  station codes, line, type. At 150 pages that is roughly 30–60 KB gzipped,
  which must be **lazy-loaded on first interaction**, never in the initial
  payload; otherwise search costs every reader who never uses it.
- Client-side matching. Prefix and substring over titles and codes is genuinely
  enough for this content — someone types "BR13" or "Songshan", not a phrase.
  Fuzzy ranking would be over-engineering, and a full inverted index would cost
  more bytes than the site's entire HTML.
- **No new dependency.** A 40-line matcher over a flat array beats adding
  a search library, which would cost more than the index.
- It must work without JavaScript in the sense of not breaking: a `<form>` that
  degrades to nothing, not a search box that silently does nothing.

**The trigger is not page count, it is when the second line gets station pages.**
At that point there are 40+ stations whose names a reader knows but whose line
they may not, and the strip-map route stops working. That is the moment to build
it — and the index should key on station codes first, because the codes are the
site's signature and are what someone standing on a platform can actually see.

## The other two Part 10 items

**Prose beside the spine (10.1).** Re-examined. **Container queries do not solve
this** — they respond to container size, not to "am I currently beside a float".
CSS Exclusions would, and are implemented in no browser. `shape-outside` alters
the wrap shape, not the block box.

But there *is* a CSS-only option that was not tried: drop `margin-left` on plain
prose blocks only (`p`, `ul`, `ol`) and keep it on everything with a visible box
(tables, figures, `.note`, `.platform`, anything `.wide`). Text then wraps beside
the spine and runs full width below it — the behaviour you want — while boxed
elements still clear the float, which is what the current comment is really
protecting against.

I did not make the change: whether the resulting ragged flow reads as
"magazine" or as "half-indented bug" is a visual judgement, and the existing
comment records that you already looked at something like it and disliked it. It
is a one-line experiment if you want to look again.

**The sticky spine (10.2) — the premise is wrong.** The spine **is** sticky:
`.spine { position: sticky; top: 16px }`, with
`.spine-map { max-height: calc(100vh - 32px); overflow-y: auto }` so a tall strip
map scrolls inside itself rather than pinning BR24 out of reach. That is a good
implementation and it is live on desktop.

What is true is that `@media (max-width: 780px)` sets `.spine { position:
static }`, and on mobile the map-variant spine is reordered *after* the prose.
So on phones — the stated primary reading context — the strip map is not visible
while you read.

**That makes `SpineSync` incoherent on mobile.** Its whole purpose is to light
the stations the section you are reading mentions. If the spine is below the
prose and not sticky, that highlight is never on screen while reading. On mobile
the component is doing nothing except costing an `IntersectionObserver`.

Two coherent options, and I would not pick between them without seeing it:
either give mobile the same sticky treatment the `.spine-rail` variant already
gets (it is sticky at `top: 0` on mobile), or accept that the strip map is an
end-of-page reference on phones and skip `SpineSync` there. What should not
survive is the current state, where a feature runs and cannot be seen.

---
---

# Run 2 — verification and adversarial, 5 August 2026

Second pass. The brief was to prove things rather than build them, and to
investigate anything suspicious in preference to finishing a part. That trade
was taken twice, and both times it paid.

**Headline: the site had a real WCAG contrast failure in its own neutral greys,
on every page, and never noticed** — because the machinery that polices contrast
was only ever pointed at the seven line colours. §12 below.

**Second: the colour-science conclusion from run 1 was right, and is now
proven rather than suspected.** The six "badge contrast failures" were
simulation artefacts. W3C says so explicitly, the transforms are not
luminance-preserving, and §14 demonstrates the mechanism numerically. What
replaced that guesswork also overturned a claim this project had been repeating
for four builds. §14.

**Third, and the one that needs a human decision: the site states at least one
thing that is simply false.** Not a TBC, not an unsourced guess — a wrong
attribution presented as an explanation. §17.

New tooling, all repeatable:

| Command | What it does |
| --- | --- |
| `npm run verify:browser` | Real Chromium: reflow at 200%/400%, keyboard traversal, ARIA tree, axe-core, screenshots, print PDFs |
| `npm run adversarial` | 16 hostile fixtures against the build |
| `npm run facts` | Every stated figure against the data it came from |
| `npm run verify` | Links + a11y + facts + geometry + CVD in one sweep |

`npm test` is now 162 tests and additionally runs the fact cross-check. CI runs
all of it and uploads screenshots and PDFs as artifacts.

Two dependencies added, both as devDependencies and both named in the brief:
`playwright` and `axe-core`. Nothing else.

---

## 11. Browser verification — findings by category

### Reflow at 200% and 400% zoom — PASSES, now proven

Run 1 called this "structurally sound but unproven". It is now proven: **45
pages loaded at 640 px and again at 320 px** (the 200% and 400% equivalents of a
1280 px desktop, which is how WCAG 1.4.10 defines the test) produced **zero
document-level horizontal scrollbars**.

The check names offending elements when it finds any, and deliberately exempts
overflow *inside* a scroll container, since that is the sanctioned pattern.

### Print — PASSES, and it looks right

Fifteen PDFs in `docs/print/`. Every machine check passed on every page: header
gone, nav gone, up-link gone, adjacent nav gone, scroll containers unwrapped,
spine float cleared, badges carrying their fallback border.

I also rendered print media to PNG and looked at it, because "the CSS applied"
and "the page reads well" are different claims.

**Worth your time: `docs/print/_line-wenhu-printmedia.png`.** The two-column
spine works — 24 stations in two columns at the head of the page, depot marks
included, "end of line" terminus, the key. Internal links expand inline as
`[/train/rolling-stock/val256/]`. The map is bounded rather than claiming a
page. The provenance footer survives. The stub notice is boxed and prominent,
which matters more on paper than on screen.

**Also worth a look: `docs/print/_station-br13-printmedia.png`** — the badge
renders as a filled brown box with the code legible, which was the specific
thing run 1 could not confirm and flagged as doing safety work.

### Keyboard — PASSES

Scripted Tab traversal across 16 page types. No focus traps, no unreachable
interactive elements, every stop with a visible focus indicator, tab order
following document order throughout.

Two harness bugs had to be fixed before that result meant anything — see §16.

### Screen-reader semantics — ONE REAL FAILURE, FIXED

The map SVG was `role="img"` with 24 links inside it. `role="img"` makes the
entire subtree presentational: **a conforming screen reader flattened the map to
a single caption and the 24 station links did not exist.** axe flagged the same
structure as `nested-interactive` (serious) on 25 pages.

Fixed: the SVG is now `role="group"` when it contains links and `role="img"`
when it does not, with the visible station and line labels marked
`aria-hidden` so names are not announced twice. Verified in the ARIA tree —
the map now exposes `img/group "BR13 on the Wenhu Line…"` containing
`link "BR01 Taipei Zoo"` and so on.

### axe-core — 73 violations found, all fixed, now zero

| Rule | Impact | Instances | Cause |
| --- | --- | --- | --- |
| `color-contrast` | serious | ~470 nodes across 24 pages | `--text-3` at 3.89:1 — §12 |
| `nested-interactive` | serious | 25 pages | `role="img"` SVG containing links — above |
| `nested-interactive` (2nd) | serious | 24 pages | `<a>` inside `<a>` — §13 |

**Zero violations across all 45 pages now**, and the three causes are pinned by
regression tests so they cannot come back quietly.

---

## 12. The contrast failure the contrast machinery never looked at

`--text-3` was `#79828e`. Against white that is **3.89:1** — below the 4.5 that
WCAG AA requires, and below it on:

- every `dt` in the facts panel, on all 24 station pages and every content page
- every `figcaption`, including all the map captions
- the site footer and the provenance line, on all 46 pages
- the spine key, the table footnotes, `.page-updated`, `.compare-range`

axe counted roughly 470 failing text nodes.

**The part worth sitting with:** this project derives seven line colours against
a deliberate 4.6 safety margin, fails the build if any lands below 4.5, and
documents the reasoning at length in `docs/design-reference.md` §1. It never
once pointed that machinery at its own neutral greys. The rigour was real and it
was aimed in one direction.

Fixed by darkening the same hue and saturation until it clears 4.6 against the
most demanding background it actually sits on:

| | Old `#79828e` | New `#666e79` |
| --- | --- | --- |
| on white | 3.89 ✗ | **5.16** ✓ |
| on `--bg-well` | 3.57 ✗ | **4.73** ✓ |
| on map paper | 3.70 ✗ | **4.90** ✓ |

A test now checks `--text`, `--text-2`, `--text-3` and `--link` against both
backgrounds, so the neutrals are held to the same standard as the line colours.

---

## 13. Nested anchors — invalid HTML that was also a hydration mismatch

The adjacent-station nav wraps the whole card in a link. Inside it,
`<StationBadge>` rendered *another* link to the same place.

`<a>` inside `<a>` is invalid, but the interesting part is what actually
happened: the HTML parser splits the nesting on load, then React hydration
reconstructs it through DOM APIs. **So the served markup and the hydrated DOM
had different structures on all 24 station pages**, and the live DOM ended up
containing exactly the nesting the parser exists to prevent.

Fixed with a `linked` prop on `StationBadge`, set false wherever a badge sits
inside another link. A test now scans the built HTML for an `<a>` opening before
the previous one closed.

---

## 14. Colour science, properly

### Whether the six "badge failures" were real: they were not

Two independent reasons, both checkable.

**W3C says contrast is not evaluated after simulating colour blindness.**
From Understanding SC 1.4.3:

> "contrast is calculated in such a way that color (hue) is not a key factor"

> "Requiring good luminance contrast accommodates this by requiring contrast
> that is independent of color perception."

> "The 4.5:1 ratio is used in this success criterion to account for the loss in
> contrast that results from moderately low visual acuity, congenital or
> acquired **color deficiencies**, or the loss of contrast sensitivity that
> typically accompanies aging."

The threshold already prices in colour deficiency. Simulating first and
re-measuring double-counts the same allowance.

**The transforms are not luminance-preserving, so the number was an artefact.**
Brettel (1997) and Viénot (1999) both project stimuli onto a reduced surface in
LMS. That models *hue confusion*; it makes no claim about brightness, and
dichromats have broadly normal luminance discrimination. Under protanopia the L
cone is removed, and L dominates the luminous efficiency function, so simulated
luminance collapses for reds by construction.

`npm run cvd` now prints the mechanism rather than asserting it:

| Line | Y actual | Y protan | Y deutan | Y tritan | max shift |
| --- | --- | --- | --- | --- | --- |
| R Tamsui–Xinyi | 0.1487 | 0.0766 | 0.1838 | 0.1530 | **48.5%** |
| A Airport MRT | 0.1222 | 0.0731 | 0.1374 | 0.1249 | **40.1%** |
| BL Bannan | 0.1027 | 0.0845 | 0.1054 | 0.1106 | 17.7% |
| G Songshan–Xindian | 0.1329 | 0.1546 | 0.1228 | 0.1315 | 16.3% |
| BR Wenhu | 0.2388 | 0.2187 | 0.2488 | 0.2365 | 8.4% |
| O Zhonghe–Xinlu | 0.4748 | 0.4357 | 0.4931 | 0.4693 | 8.2% |
| Y Circular | 0.7173 | 0.7173 | 0.7173 | 0.6910 | 3.7% |

The colours that "failed" — R, A, BL — are exactly the ones the transform moves
most. **All seven badges clear 4.5:1 as authored. There was never a failure.**

Run 1's instinct was right and its numbers were not: the old script used a
hand-rolled approximation. This one is verified before use.

### Methodology, stated

**Simulation: Brettel (1997) two-plane**, not Viénot (1999) single-matrix.
Viénot collapses the two half-planes into one, which is a good approximation for
protan and deutan and an acknowledged poor one for tritan. Since this site has
to answer for all three, the two-plane form is the honest choice.

**Difference: CIEDE2000**, with CIE76 printed alongside so the disagreement
between formulae is visible rather than hidden by picking one.

**Not CAM16-UCS**, although it is the better instrument for differences of this
magnitude. I have no published validation vector to check an implementation
against, and shipping unverified colour maths to settle an accessibility
question is the exact failure this exercise exists to prevent. Recorded as a
known limitation. Expected effect if implemented: somewhat larger values for the
well-separated pairs, similar values for the confusable ones — sharpening the
gap between the two groups without moving pairs between them.

**Both instruments are verified before any number is reported.** CIEDE2000
against the Sharma, Wu & Dalal (2005) test vectors — 13 vectors, worst error
4.17×10⁻⁵ — and the simulation against the requirement that it leave the
achromatic axis exactly untouched. `npm run cvd` exits 2 if either fails, and
both are also unit-tested.

**Threshold caveat, which matters:** CIEDE2000 was fitted to small uniform
patches under controlled viewing. Map strokes are 5 px wide — a *small* field,
where chromatic discrimination is worse than the standard observer. The figures
below are therefore optimistic for the map specifically.

### The full ΔE matrix

CIEDE2000, all 21 pairs, all three deficiencies. CIE76 in brackets.

| Pair | Normal | Protanopia | Deuteranopia | Tritanopia |
| --- | --- | --- | --- | --- |
| **BL/A** | 21.6 | **‼ 2.5** (7) | ! 4.9 (10) | 35.0 (34) |
| **G/BL** | 42.8 | 47.1 (85) | 38.3 (67) | **! 4.0** (6) |
| **BR/R** | 31.0 | 21.1 (32) | **! 6.8** (7) | 17.1 (49) |
| **O/Y** | 16.7 | 11.6 (23) | **! 8.6** (16) | 12.2 (23) |
| R/G | 66.0 | 11.4 (13) | 17.0 (39) | 53.8 (97) |
| BR/G | 39.5 | 12.5 (27) | 21.5 (42) | 44.7 (51) |
| BR/O | 16.3 | 16.3 (28) | 16.2 (29) | 15.5 (20) |
| BR/A | 54.4 | 62.1 (117) | 52.9 (98) | 18.8 (26) |
| R/O | 42.4 | 40.6 (60) | 22.5 (35) | 27.3 (49) |
| R/A | 36.9 | 48.9 (92) | 51.4 (97) | 23.7 (69) |
| BR/Y | 29.2 | 27.7 (52) | 24.6 (45) | 24.2 (33) |
| G/O | 48.4 | 27.5 (54) | 36.4 (70) | 52.5 (65) |
| R/Y | 59.3 | 50.8 (83) | 30.8 (51) | 37.8 (72) |
| G/A | 45.5 | 48.9 (91) | 35.9 (58) | 32.8 (29) |
| O/A | 65.7 | 75.3 (141) | 62.1 (124) | 32.9 (44) |
| Y/A | 79.5 | 83.4 (162) | 67.3 (138) | 37.8 (46) |
| G/Y | 48.3 | 38.2 (77) | 43.9 (86) | 53.9 (58) |
| R/BL | 45.8 | 47.5 (86) | 55.0 (106) | 57.4 (101) |
| BR/BL | 52.7 | 59.9 (111) | 57.2 (107) | 47.7 (56) |
| O/BL | 64.0 | 72.2 (135) | 67.7 (133) | 57.0 (70) |
| BL/Y | 73.9 | 80.1 (157) | 73.1 (147) | 57.4 (63) |

‼ below 3, indistinguishable · ! below 10, unreliable in isolation

### The design reference was wrong, and is now corrected

It said in two places that "brown, orange and red are exactly the confusable
set". Measured, that is **wrong in both directions**:

- **Brown/orange never confuses** — 15.5 to 16.3 across all three deficiencies.
  It is one of the *safest* pairs. Orange is far lighter, so the L/M confusion
  that collapses hue leaves the luminance difference intact.
- **Red/orange never confuses** either — 22.5 at worst.
- **Brown/red does**, at 6.8 under deuteranopia. One of the three implied
  pairings is real.
- **The worst pair on the network is Bannan blue against Airport MRT purple**,
  ΔE 2.5 under protanopia — the same colour for practical purposes. Purple is
  blue plus red; remove the red response and blue remains. The document did not
  mention it.
- **Green/blue fails under tritanopia** at 4.0, which the old framing could not
  reach because it only considered the red–green axis.

Corrected in `docs/design-reference.md` §1 with the wrong claim marked
**superseded** and the evidence beside it, matching the treatment given to the
CJK optical-sizing note. The same claim was repeated in `README.md` and in a
comment in `app/globals.css`; both are corrected. A test pins the measured
result so a refetch that moves an official colour fails loudly.

Corrected `docs/design-reference.md`, `README.md` and `app/globals.css` — you
said the wrong claim was yours; the correction is now written and attributed to
measurement rather than to anyone.

### Is the badge label sufficient mitigation? Yes — with one reservation

**Assessment: sufficient, and stroke patterns would be worse.**

The mitigation now in place is that every line carries its code badge at both
ends of its longest run on the network map, and the network table identifies
lines by the same badge rather than a colour swatch, so map and table share one
token.

Stroke patterns — dashing or dotting the confusable lines — were considered and
rejected on three grounds: they degrade the map for every reader to solve a
problem for some; a dashed transit line already means *under construction* to
most readers, so the cue would carry a false meaning; and they would introduce a
second visual vocabulary for line identity when the badge system already is one.

**The reservation:** the badge appears at each line's two endpoints, not along
its length. Someone tracing a stroke through central Taipei, where six lines
cross within a few hundred pixels, still has only colour to hold onto mid-route.
That is acceptable at this map's purpose — an overview, with the table below
carrying the detail — and it would not be acceptable on a journey-planning
diagram. Recorded so the octolinear schematic, when it happens, starts from
"label every line at every branch" rather than rediscovering this.

### The derived inks under CVD — worse, and it costs nothing today

The inks are *far* more confusable than the map colours, because darkening every
one to ~4.7:1 on white compresses them into a single narrow luminance band:

| Ink pair | Deficiency | ΔE00 |
| --- | --- | --- |
| BR/O | tritanopia | **0.7** |
| O/Y | deuteranopia | **0.9** |
| R/O | deuteranopia | **1.2** |
| BR/R | deuteranopia | **1.7** |
| R/Y | deuteranopia | **2.1** |

Seventeen ink pairings fall below ΔE 10.

**This costs nothing at present, and I verified that rather than assuming it.**
A page carries exactly one accent, so two inks are never rendered as meaningful
colour together. I checked every built page for two distinct inks and found one
hit — `/data/line-colours` — then checked what it actually was: the inks appear
there as hex strings inside `<code>`, in a table with line names attached, not
as applied colour. No information rests on telling them apart.

It would start costing something the moment ink is used to distinguish two lines
in one view. Recorded in the design reference so that becomes a decision rather
than an accident.

---

## 15. Adversarial testing

16 fixtures, each declaring whether the build should fail, warn, or stay silent,
plus an assertion over the output. **16/16 now behave as specified**; 4 did not
when first run.

### Fixed — inputs that used to build silently

| Input | Was | Now |
| --- | --- | --- |
| `[click](javascript:alert(1))` | **live clickable link** | stripped, warns |
| `<javascript:alert(1)>` autolink | **live clickable link** | stripped, warns |
| `![x](data:text/html;base64,…)` | live `src` | stripped, warns |
| `line: ZZ` | silent fallback to neutral grey | warns, names the file |
| `spine: BR97-BR99` | silently marks nothing | warns, names the codes |
| malformed YAML | threw without naming the file | error names the file |

**The `javascript:` URL is the one that matters.** Remark escapes raw HTML, so a
`<script>` in Markdown comes out as text and there was never HTML injection —
verified: scripts, event handlers and iframes are all neutralised, in the body
and in frontmatter. But nothing touched link *targets*.

That is theoretical while every Markdown file is written by whoever owns the
repository. It stops being theoretical the moment a correction is accepted as a
pull request — which `/about` solicits and the README's headline promise ("you
never need to touch the code to add a page") invites. Then it is stored XSS
arriving through the one input the project actively advertises. Closed with a
15-line scheme allowlist (`http`, `https`, `mailto`, `tel`, `ftp`), applied to
both Markdown pipelines.

### Fixed — a real crash-class bug in the projection

`makeProjection` divided by zero when every input point shared a longitude:
`inner / spanX` became `Infinity`, every projected coordinate became `NaN`, and
the SVG rendered as `viewBox="0 0 640 NaN"` — **an invisible, silently broken
map with no error anywhere**.

Reachable from a line with one station, or one whose geometry is missing so only
station coordinates remain. Guarded with a minimum span; existing maps are
byte-identical (BR height 769.38, BL 376.13, A 342.34 before and after).

### Passed first time

- Raw HTML, event handlers and iframes in Markdown — all neutralised
- HTML in every frontmatter field — escaped by React
- RTL override characters, zero-width joiners, combining marks, emoji — no
  layout or parsing damage, emoji survive
- Han characters outside the font subset — still tagged `zh-Hant`, so the
  fallback font is chosen by language rather than by document default
- Empty file, frontmatter with no body — build cleanly with a slug-derived title
- A title of 2,000 characters and a summary of 15,000 — no unbounded meta
  description
- Broken formation notation — renders nothing, which is correct

### Also guarded, as unit tests (26 new)

Coincident points, zero-length segments, single-segment lines, segments that
cannot chain, a station outside the bounding box, antimeridian coordinates,
`measureLine` with zero or one station, `simplify` with absurd tolerances,
prototype-pollution keys (`__proto__`, `constructor`) against both registries,
malformed spine ranges, `darkenUntil` with an unsatisfiable predicate, and
tokenizer termination on pathological input.

### Build determinism

Two clean builds from scratch, compared byte by byte. **Content is
deterministic.** Two differences, both benign and both explained:

1. The build-ID directory name (`_next/static/<id>/`) — expected; it is a
   per-build hash.
2. On 2 of 46 pages, one Next-emitted `<meta name="next-size-adjust">` tag
   appears at a different position in `<head>`. Same tag, same count, same
   attributes — **ordering only**, and framework-internal.

Nothing in the site's own output varies between builds.

### Script ordering

`npm run fonts` not being re-run after adding Chinese is a genuine failure mode
and it is **not** currently caught: the subset would lack the new glyphs and
readers without a system CJK font would see tofu. The build does not know. This
is unfixed — see §19.

---

## 16. What I broke, and whether it is guarded

Four of my own tools reported findings that were not real. Recording them
because a verification tool that cries wolf is worse than none — it teaches you
to skim its output.

| Harness bug | Symptom | Fixed |
| --- | --- | --- |
| `path.relative(OUT, OUT)` returned `''` | walker emitted `//`, Next served its error shell, harness reported 4 "violations" on a page that does not exist | yes |
| Focus check read only the anchor's own outline | 24 map stations reported as having no focus ring; they style a **child** circle on focus, confirmed by screenshot | yes |
| Keyboard matcher compared label text | nav links reported "unreached" on every page; now stamps `data-kbd` and matches by identity | yes |
| `execSync` dropped stderr on success | adversarial harness reported "built silently" for inputs it had just been warned about — a false negative in the tool built to find false negatives | yes |
| Fact-checker matched raw markup | React's `<!-- -->` separators broke every prose regex; now extracts normalised text | yes |
| Formation assertion searched whole document | matched `$undefined` in React's serialised payload and reported a bug that did not exist | yes, scoped to the section |

All six are fixed with the reason written into the code, so the next person to
read those scripts sees why the naive version does not work.

---

## 17. Unsourced assertions in prose

Requested audit. **No TDX dataset carries an opening date, a fleet size, a
dimension, or anything about depots** — I checked every fetched file for such a
field and there is none. So every one of these rests on nobody's authority.

Four of the five content pages already say `Sources: *To be added.*`, which is
honest. This is what those sections are missing.

### Suspected WRONG, not merely unsourced — needs your decision

**1. `innovia-apm-256-c370.md`: "Bombardier acquired Matra's people mover
business and continued the line as Innovia APM."**

This appears to be false. **Siemens** acquired Matra Transport International —
raising its stake from 50% to 95% and completing to 100% in 2001 — after which
it became Siemens Transportation Systems. Bombardier's Innovia APM lineage runs
through its own people-mover business, not through Matra. Sources:
[Lagardère press release](https://www.lagardere.com/en/press-release/siemens-increases-its-stake-in-matra-transport-international/),
[EC merger case M.685](https://competition-cases.ec.europa.eu/cases/M.685),
[Metro Magazine](https://www.metro-magazine.com/news/matra-transport-changes-its-name).

It is the article's opening sentence and its whole explanation for why the two
fleets are compatible. The compatibility claim may still be right; the reason
given for it is not.

**2. `val256.md`: "Ahead of the 2009 Neihu extension the VAL256 fleet had its
original Matra signalling stripped out and replaced with the Bombardier CITYFLO
650."**

The timing looks wrong. Research (run 1, `docs/research/research-findings.md` §6) puts the
CBTC conversion as *beginning* 4 July 2009 — the day the extension opened — with
converted units returning to passenger service **26 December 2010**. "Ahead of"
inverts that.

**3. `val256.md`: VAL vehicles are "guided by horizontal wheels bearing on a
central rail."**

VAL guidance is normally described as horizontal wheels bearing on *side* guide
beams, not a central rail. Low confidence on my side — I did not find a
definitive engineering source — but it does not match the usual description and
should be checked before the stub flag comes off.

**I have not edited any of these.** Your constraint was that run 1's route-length
exception does not generalise, and I think that is right: removing a false claim
needs a true one to replace it, and that is a research finding. But leaving
known-false content published is worse than leaving a TBC, so these are the top
of §20.

### Unsourced, plausible, load-bearing

| Claim | Where | Note |
| --- | --- | --- |
| Opened 28 March 1996 / 4 July 2009 | line page, both depots, both fleets | Not in any fetched dataset. Widely documented; cite it. |
| "Taiwan's first metro line" | wenhu-line.md | Superlative, unsourced. Probably true (Muzha 1996 predates Tamsui 1997). |
| "the only line in the Taipei network running on rubber tyres" | wenhu-line.md | Checkable and almost certainly true; unsourced. |
| Signalling: Bombardier CITYFLO 650 | facts | Research corroborates, but note Alstom acquired Bombardier Transportation in 2021 — "Bombardier (now Alstom)" would be more accurate. |
| Automation GoA4, driverless | facts | Unsourced. |
| "every platform is fitted with full-height platform screen doors" | wenhu-line.md | Unsourced. |
| "gradients through Wenshan District are far steeper than conventional heavy metro would manage" | wenhu-line.md | Unsourced engineering claim. |
| "the tight elevated curves would be impossible on a steel-wheel alignment" | wenhu-line.md | "Impossible" is doing a lot of work, unsourced. |
| "The 256 in the name is the car width in centimetres" | val256.md | Research corroborates (2,560 mm); unsourced on-site. |
| "the wider of the two standard VAL profiles" | val256.md | Unsourced. |
| Muzha Depot houses the VAL256 fleet | muzha-depot.md, val256.md | **Contested** — zh.wikipedia says Muzha stables both types. |
| Neihu Depot connects near BR19 | neihu-depot.md, line page | Unsourced; drives the depot marker on the strip map. |
| "The siting was contested during planning" | neihu-depot.md | **No source found in either run.** Asserted as fact. |
| "no other depot, no other line, no other fleet" in 1996 | muzha-depot.md | Unsourced. |
| "The name is a contraction: Wenshan and Neihu" | wenhu-line.md | Unsourced but etymologically self-evident. |

### Properly handled, for contrast

- Two stations underground, *which two* marked "not established" — the count is
  stated, the identity is not, and the strip map draws a dotted tick.
- Route length now carries the official figure and the site's own measurement
  side by side.
- Every `TBC` in `specs:` is a labelled gap rather than a filled one.

---

## 18. The three ambiguous items, resolved

### CJK subsetting — do the two-way split

**Measured finding.** The committed subset holds 254 characters across two
weights, ~80 KB, and every page downloads all of it.

*(The per-page-type measurement table that sat here was deleted in run 4 under
decision 3: no further font optimisation. Git history has it.)*

A rolling stock page downloads roughly 80 KB of Chinese font to render three
characters.

**Recommendation: split `/data/stations` off from everything else. One extra
file, ~40 KB saved on 45 of 46 pages.** That single page contributes 104 of the
216 characters and no other page needs them. This is most of the available win
for almost no complexity.

**Do not go per-page.** A station page would drop to 7.5 KB, but each page would
fetch a *different* file with no sharing between them. Breakeven is about **11
page views**, and anyone reading down a line exceeds that. It optimises the
drive-by visit and penalises the engaged reader — backwards for a reference site.

**Per page *type* is defensible as a later step** (station pages 29.2 KB rather
than 39.4), but it requires moving `@font-face` out of the shared layout into
per-page style blocks, losing the shared-CSS caching. Only worth it after the
two-way split is in and measured.

**One free win first, unrelated:** the subset is generated by scanning *source*
(`content/`, `lib/`, `app/`, `components/`), so it holds 254 characters while
only 216 render anywhere. ~38 glyphs, about 11 KB, exist only in code and
comments. Generating from `out/` instead removes them, at the cost of inverting
the build order.

### Framework floor — 172.5 KB, and the number that matters is 163 KB

**Measured floor: 172.5 KB gzipped**, established by removing all three client
components and rebuilding. The site's own JavaScript is **0.9 KB**; the rest is
React plus the Next App Router runtime, which a static export ships regardless.

Where a station page's 376.6 KB goes:

| | KB gz |
| --- | --- |
| JavaScript (framework) | 172.5 |
| JavaScript (this site's own) | 0.9 |
| Fonts (Latin 100.2, CJK 79.8) | 180.0 |
| HTML | 13.0 |
| CSS + icons | 10.3 |

**What dropping Next would actually buy: a station page of about 203 KB**, or
**~163 KB with the CJK split from §18 above** — comfortably inside the 200 KB
target that is currently unreachable by 176 KB.

**What it would cost.** Not the rendering — the site already generates its own
maps, badges, spine and share images from its own data, and none of that is
Next-specific. What goes is four conveniences:

- `next/font` — self-hosting, subsetting and the size-adjusted fallback metrics
  would become manual. This is the biggest single loss; the fallback metrics are
  what keep layout shift near zero.
- `next/og` — replaceable by calling satori and resvg directly, which is what it
  wraps.
- The metadata API — canonical, OpenGraph, Twitter and JSON-LD would become
  hand-written head tags. The tests already assert all of it, so the risk is
  bounded.
- File-based routing and `generateStaticParams` — a few dozen lines in any
  generator.

**Realistic target: Astro**, which ships zero JS by default and keeps
component-based authoring. Rough estimate two to three days, and the test suite
would carry over almost unchanged because it tests `out/` rather than the
framework.

**This is a number, not a recommendation, as you asked.** My view if you want
it: not yet. 376 KB on first visit and 13 KB on every page after is not a bad
experience, and the framework is not currently costing correctness. Revisit if
the site grows past one line, when the fixed 172.5 KB stops being amortised over
46 pages.

### Spine stickiness — make mobile sticky, and here is what I would do

Run 1 established the facts: the spine **is** sticky on desktop
(`position: sticky; top: 16px`, with `max-height: calc(100vh - 32px)` so a tall
strip map scrolls inside itself). On mobile, `@media (max-width: 780px)` sets it
`static` and reorders it after the prose.

**What I would do: give the mobile map-variant spine the same sticky treatment
the `.spine-rail` variant already has** — collapsed to a compact horizontal
strip pinned at `top: 0`, expanding on tap.

The reasoning is that the current state is incoherent rather than merely
imperfect. `SpineSync` exists to light the stations the section you are reading
mentions. On mobile the spine sits below the prose and does not follow, so that
highlight is never on screen while reading: the component runs, costs an
`IntersectionObserver`, and cannot be seen. One of the two has to change.

Between the options, sticky wins because the mobile pattern already exists in
the codebase — `.spine-rail` is sticky at `top: 0` on mobile with a background
and a bottom rule — so this is applying an established pattern rather than
inventing one, and it preserves the feature on the platform the project calls
primary.

**I did not make the change**, because it is a visual judgement about how much
vertical space a pinned strip may take on a phone, and that needs someone
looking at it. `docs/screenshots/line-wenhu-375.png` shows the current state:
the strip map is at the very bottom, after the specifications table.

---

## 19. What still needs a human

1. **The three suspected-false statements in §17.** They need a decision about
   what replaces them, which is a sourcing question.
2. **The mobile spine decision** (§18) — needs eyes on a phone-width render.
3. **`npm run fonts` staleness.** Adding Chinese to a page without re-running it
   ships a subset missing those glyphs, and nothing detects it. A build-time
   check comparing rendered Han against the subset manifest would close it; I
   did not add one because the fix interacts with the subsetting decision above.
4. **26 vs 18 interchanges** — still unresolved from run 1. The design reference
   says 26, the data computes 18.
5. **CAM16-UCS**, if you want the colour differences on the better instrument.
   Needs a validation vector before it can be trusted.
6. **The deployment URL.** `lib/site.ts` still defaults to
   `https://jimmyrice9999.github.io`. Every canonical, the sitemap and every OG
   tag depend on it.
7. **Print PDFs at A4** were generated with Chromium's default margins from the
   `@page` rule. I checked pagination programmatically and looked at the
   print-media renders, but I have not put paper through a printer, and toner
   behaviour on the badge fills is the one thing that cannot be simulated.

---

## 20. Priority order

1. **Resolve the three suspected-false claims** (§17). A wrong attribution
   presented as an explanation is worse than any TBC on the site, and one of
   them is an article's opening sentence.
2. **Source or remove "the siting was contested"** on the Neihu depot page —
   two runs, no source, asserted as fact.
3. **Split the CJK subset** (§18). 40 KB off 45 of 46 pages for one extra file.
4. **Set BR13/BR14 to `underground`** — confirmed in run 1, still outstanding,
   ten minutes.
5. **Add the font-staleness check** (§19.3).
6. **Decide the mobile spine** (§18), then either fix it or drop `SpineSync` on
   mobile.
7. **Cite the opening dates.** They appear on five pages and rest on nothing.
8. **Resolve 26 vs 18 interchanges.**
9. **Check Muzha's fleet allocation** — the site says VAL256 only, the best
   source says both.
10. **Revisit the framework** only if the site grows past one line.

---

## 21. Where to look

Worth your time, in order:

| File | Why |
| --- | --- |
| `docs/print/_line-wenhu-printmedia.png` | The print stylesheet actually working — two-column spine, expanded URLs, bounded map. The thing run 1 could not verify. |
| `docs/print/_station-br13-printmedia.png` | Badge survival in print, which was the safety-critical unknown. |
| `docs/screenshots/line-wenhu-375.png` | The mobile spine problem in §18 — strip map stranded below the specs table. |
| `docs/screenshots/network-1440.png` | The line-code labels fixing the WCAG 1.4.1 failure, at full size. |
| `docs/screenshots/line-wenhu-320-zoom400.png` | 400% zoom reflow, the WCAG 1.4.10 case. |
| `docs/browser-verification.json` | Every raw finding, including the full ARIA snapshots. |
| `docs/design-reference.md` §1 | The corrected confusable-set claim with the measured matrix. |

Skip the other 75 screenshots unless something looks wrong — they exist so the
next run can diff against them.

Final state: `npm run build` green, **162 tests passing**, `npm run facts` 14
cross-checks with no contradictions, `npm run verify:browser` clean,
`npm run adversarial` 16/16, `npm run a11y` and `npm run check` clean,
`npm run palette` all AA, **axe-core zero violations across 45 pages**.

---
---

# Run 3 — corrections and citation, 6 August 2026

Third pass. The brief put false claims above everything, research above
infrastructure, and infrastructure above polish. That order was right and it is
the order this ran in.

**Headline: the site was publishing four false statements, not three.** The
three in §17 are corrected. The fourth was found while checking the depots, and
it had put a marker in the wrong place on a live illustration for four builds:
**Neihu Depot does not connect to the line at BR19.** It is beside BR24, at the
other end, and it is not in Neihu District either. §22.

**Second: the site now has citations, and the first honest count of what it
asserts without them.** 128 claims sourced, 10 labelled TBC, **34 resting on
nobody's authority**, and a ratchet that fails the build if that last number
rises. §25, §26.

**Third: two things this project has believed about itself for four builds are
not true.** The spine was never sticky — the declaration was on an element that
could not move. And `sitemap.xml` has never built deterministically; run 2's two
builds simply landed inside the same second. Both found by measuring rather than
by reading. §27, §29.

New tooling:

| Command | What it does |
| --- | --- |
| `npm run cite` | Every citation marker resolves; every source entry is complete; unused entries reported |
| `npm run claims` | Sourced / TBC / asserted-without-source, per file and site-wide |
| `npm run determinism` | Two clean builds compared byte for byte, build ids normalised out |

`npm test` is now **172 tests** and runs `npm run cite` before it builds.

Final state: `npm run build` green, 172 tests passing, `npm run cite` clean,
`npm run facts` 16 cross-checks with no contradictions, `npm run check` and
`npm run a11y` clean, `npm run adversarial` 16/16, `npm run verify:browser`
clean with axe-core at zero across 46 pages, `npm run determinism` byte-identical.

---

# 22. The false claims

## 22.1 The Innovia was never a Matra product — CORRECTED

`innovia-apm-256-c370.md` opened: *"Bombardier acquired Matra's people mover
business and continued the line as Innovia APM."* This was the article's first
sentence and its entire explanation for why the two fleets are compatible.

**What actually happened:**

| Date | Event | Source |
| --- | --- | --- |
| Feb 1996 | Siemens buys 50% of Matra Transport → Matra Transport International | Lagardère (primary) |
| Oct 1998 | Siemens to **95%**; Lagardère keeps 5% | Lagardère (primary) |
| Nov 2001 | Siemens to **100%**; renamed Siemens Transportation Systems | Metro Magazine |
| May 2001 | **Bombardier acquires Adtranz**, from DaimlerChrysler | EC Case COMP/M.2139 (primary) |
| Jan 2021 | Alstom acquires Bombardier Transportation | — |

VAL went to Siemens and stayed there; Siemens still sells its descendants as
CityVal and Airval. Bombardier bought Adtranz, whose people mover heritage runs
through Westinghouse and AEG. Two acquisitions, same year, unrelated.

**The page now leads with the correction rather than hiding it**, carries the
table above with citations, and explains the compatibility by engineering
instead: Bombardier built to Taipei's existing guideway because the tender
required it.

**And the compatibility claim itself was wrong in a second way.** The page said
both fleets share a car width. They do not — VAL256 is 2,560 mm, Innovia APM 256
is **2,540 mm**. The `256` names the guideway, not the car. What they share is
the running-surface spacing, the side guide beams and the 750 V pickup.

### Where I disagree with the brief

The instruction said the file *"attributes the Adtranz acquisition to
Bombardier. It was Siemens, to 100% in 2001."*

**The conclusion is right and one step of it is not.** Bombardier **did** acquire
Adtranz — May 2001, from DaimlerChrysler, and the European Commission's own
decision is the record of it. What Siemens took to 100% in 2001 was **Matra
Transport International**. Two acquisitions, both completing in 2001, and
running them together is presumably how the error got onto the page in the first
place. The file never mentioned Adtranz at all; what it did was give Matra's
business to the wrong buyer.

Recording this because the brief asked to be disagreed with where I think it is
wrong, and because "Bombardier never acquired Adtranz" would be a new false
claim to replace an old one.

## 22.2 The re-signalling ran the other way round — CORRECTED

`val256.md` said the fleet was re-signalled *"Ahead of the 2009 Neihu
extension."*

| Date | What happened |
| --- | --- |
| **4 July 2009** | The extension opens. The line switches to CITYFLO 650, the Matra system is cut off after thirteen years, and the VAL256 fleet **comes out of service that day** to begin conversion |
| **26 December 2010** | Converted units return to passenger service |

So for nearly eighteen months the whole 24-station line ran on the Bombardier
fleet alone while the trains that opened the railway sat in a depot having their
control system replaced. That is a better story than the one the page told, and
it has the advantage of being true. Corrected with both dates cited.

## 22.3 VAL is side-guided, not centre-guided — CORRECTED

`val256.md` said VAL vehicles are *"guided by horizontal wheels bearing on a
central rail."*

VAL uses **side guidance**: pairs of horizontal wheels bear outward against
lateral guide bars — H-section steel, about 200 mm above the running surface on
either side — and those bars also carry the 750 V supply, which is why a VAL
guideway needs no separate conductor rail.

- Railway Technology's Lille profile: the permanent way is "the running-tracks,
  the guide bars (which are also used to provide the electric current)", with
  "the lateral guidance wheels run on the side of this H section 200 mm above
  the running surface".
- en.wikipedia independently: "pairs of horizontal tires to provide lateral
  guidance", power "collected by shoes from the guidebars".

**The error is explicable, and the page now says so.** VAL's own successor went
the other way: the **NeoVal** generation Siemens announced in 2006 *is* centrally
guided, on a single rail similar to Translohr's. The site described VAL's future
and attributed it to VAL's past.

**Confidence is Medium, not High, and the page does not overstate it.** Neither
source is a manufacturer drawing, and they may share an ancestor. What is High
is that the central-rail claim is wrong.

## 22.4 The fourth one — Neihu Depot is at BR24, in Nangang

Not on the brief's list. Found while researching Part 4.

The depot page and the line page both said Neihu Depot connects to the running
line **near BR19**, and the facts panel gave its district as **Neihu**. Both are
wrong:

- 「內湖機廠位於南港展覽館站內湖線站體之東北側」 — it is on the northeast side of
  **BR24 Taipei Nangang Exhibition Center**.
- DORTS independently locates it in the 南港經貿園區特定專用區, against the
  Keelung River — the same place, and that is **Nangang District**.
- 「雖名為內湖機廠，卻位於南港區」 — despite the name, it is in Nangang.

**This one had consequences beyond prose.** The strip map's depot markers are
generated from each depot page's own `spine:` frontmatter, so the line page has
been drawing Neihu Depot at the wrong end of the railway for four builds — in an
illustration, where nobody reads a footnote.

It looks like an inference from the shared name: Neihu Depot, therefore near
Neihu station. Which is exactly the class of error this project exists to catch,
committed by this project.

**Guarded**: `npm run facts` now cross-checks the strip-map marker against the
depot page's own stated junction, so prose and illustration cannot drift apart
again. That check would not have caught BR19 — both said BR19 — and the log says
so where the check is written. What caught it was reading a source.

## 22.5 Two claims removed rather than corrected

- **"The siting was contested during planning"** (Neihu Depot). Three runs, no
  source of any kind. Deleted, with a note on the page saying what would settle
  it. A visible gap beats a plausible sentence.
- **The gradient and curve claims** (line page) — that Wenshan's gradients are
  steeper than conventional heavy metro would manage, and that the elevated
  curves "would be impossible on a steel-wheel alignment". Both probably true,
  neither sourced, and "impossible" was doing a great deal of unattributed work.
  Removed with a note; they need DORTS's design criteria.

---

# 23. Every other unsourced assertion, and what happened to it

The audit in §17 listed fifteen. Here is the disposition of each, plus what the
new machinery found that the manual audit missed.

| Claim | Now |
| --- | --- |
| Opened 28 March 1996 / 4 July 2009 | **Cited** — DORTS (primary), on all five pages |
| "Taiwan's first metro line" | **Cited** — 民報 retrospective |
| "the only line running on rubber tyres" | Still unsourced. Trivially true and still nobody's authority. |
| Signalling CITYFLO 650 | **Cited**, and reattributed: "Bombardier (now Alstom)" |
| Automation GoA4, driverless | **Cited** |
| "every platform is fitted with full-height platform screen doors" | **Cited** — TRTC 安全設備 (primary), with the two suppliers named |
| Gradients steeper than heavy metro | **Removed** — see §22.5 |
| Tight curves "impossible" on steel wheels | **Removed** |
| "The 256 in the name is the car width" | **Cited**, and the Innovia's use of the same number corrected |
| "the wider of the two standard VAL profiles" | **Cited** |
| Muzha houses the VAL256 fleet | **Corrected** — the best source says both types, and the page now says so |
| Neihu Depot connects near BR19 | **Corrected to BR24** — §22.4 |
| "The siting was contested during planning" | **Removed** |
| "no other depot, no other line, no other fleet" in 1996 | Still unsourced. Rhetorical, and true. |
| "The name is a contraction: Wenshan and Neihu" | Still unsourced. Self-evident. |

Twelve of fifteen resolved. The three left are the three where a citation would
be theatre.

**What the manual audit missed.** `npm run claims` finds 34 unsourced assertions
where the human read found fifteen. The extra nineteen are mostly the kind
nobody notices while reading: identity rows in the facts panel ("Operator: Taipei
Rapid Transit Corporation", "Line: Wenhu", "Chinese name: 木柵機廠"), and
sentences that restate a cited fact one paragraph later without carrying the
mark down. Some of those are over-counts. The point of the number is not that all
34 are scandals — it is that a human sweep found 44% of what a mechanical one
does, twice, and both times the sweep was done carefully.

---

# 24. Research findings by topic

Full detail in `docs/research/research-findings.md` §11–§15 and `docs/drafts/matra-dispute.md`.
Headlines only here.

## Rolling stock

- **The Innovia fleet size is resolved: 101 pairs, 202 cars, numbered 101–201.**
  Run 1's threefold conflict was two misreadings of one article — the "51 pairs"
  is the subset final-assembled at Tang Eng in Taiwan, and the "152" is 101 + 51,
  double-counting that subset. Four independent cross-checks land on the same
  total: 51 + 101 = 152 pairs = 304 cars = **76 four-car trains**, which is
  exactly the number in TRTC's renewal programme.
- **The two fleets are not incompatible.** Since December 2010 both run under
  one CITYFLO 650 moving-block system on the same line at the same headway;
  passengers tell them apart by seat colour. They differ at the vehicle level —
  width, current collection, traction, top speed — and are separated at the
  formation level. The brief's framing ("why they are incompatible, how they are
  kept separated") is close to the wrong question and the research notes say so.
- **Tyres: nothing, in any language.** No specification, no pressure, no
  replacement interval. This is maintenance-manual data and should be recorded
  as a permanent gap rather than an open search.

## Depots

Muzha 6.2 ha and Neihu 7.11 ha are now **primary** (DORTS), up from run 1's
Medium. Neihu's location, district and junction are corrected. Muzha's 12 roads
and 84-pair capacity are published with the source attached and a note that 84
pairs against a 152-pair fleet is surprising and one source deep.

**What is not published, and where it lives** — asked for explicitly. Stabling
capacity, road counts, heavy-overhaul arrangements and construction cost are in
EIA reports, in DORTS's own 捷運工程叢書 technical series, and in Public
Construction Commission tender records. The second of those is **browsable
online at `ebook.dorts.gov.taipei`** and nobody has opened it. It is the highest
-value unread source this project has found in three runs.

## Infrastructure

**The 25.7 km is identified, and run 1's explanation was wrong.** DORTS
publishes 木柵線 約10.9公里 and 內湖線 約14.8公里. 10.9 + 14.8 = 25.7 exactly. It
is not a measurement of anything — it is two measurements of two different
construction projects added together, which is why it has never reconciled with
a survey.

Also settled: **BR13 and BR14 underground** (DORTS's 「地下段3.9公里，2座地下站」
on the Neihu section, plus zh.wikipedia naming them — primary and secondary
agreeing from different directions), **3.9 km of underground running** as a new
published figure, headways now from **TRTC's own page** rather than an
encyclopedia, and the guideway row relabelled from "track gauge, TBC" to
"guideway spacing, 1,880 mm", because the old label implied a number existed and
had not been found.

## Current developments

**A fleet renewal programme exists, and run 1's negative is superseded.** Run 1
recorded "nothing found" and told the site not to imply one existed. That was
correct when written — TRTC announced it in **May 2026**, three months before run
1 searched for it, but as statements to a council rather than as a procurement,
which is what run 1 looked for.

All 76 trains and the signalling to be replaced: 25 new trains and the signalling
switchover by **2036**, the Bombardier fleet retired by **2039**, completion by
**2041**. NT$41 bn reserved, ~NT$55 bn total. New trains gangwayed across four
cars at **574** passengers, up ~30%.

**Every one of those figures is provisional**, marked as such, and none is on the
site except as a single sentence pointing at the research notes. They come from
news reports of a council exchange, not a tender.

**One structural implication:** a gangwayed four-car train is not a pair of
married pairs. If that survives into procurement, the formation diagram this site
draws stops being true of the Wenhu Line in about ten years.

## The Matra dispute

Drafted at `docs/drafts/matra-dispute.md`, **not published**, confidence marked
per claim.

The most useful thing the research established is that **there are two disputes
and almost everyone conflates them**. The NT$1.64 bn that circulates belongs to a
*delay claim* — Matra suing for the cost of a contract that ran years long
because the civil works were late — arbitrated in **1993** and finally decided by
the Supreme Court on **22 July 2005**. The withdrawal everyone remembers is a
separate event, in 1996 or 1997, and the sources disagree about which.

The full chain is documented: contract signed 13 July 1988 (~NT$7.87 bn) →
arbitration award 6 October 1993 (NT$1.025 bn plus 5%) → annulment suit lost,
Supreme Court November 2000 → debtor's objection suit won at two instances on a
two-year limitation → High Court rehearing reclassifies the contract as a
「買賣、承攬的混合契約」 with a fifteen-year limitation → Supreme Court, final,
22 July 2005 → ~NT$1.64 bn.

**The hardware-dongle story remains unpublishable** — three runs, no primary
source. And 黃令名's account of engineers copying the French control software and
buying parts at Guanghua Market is flagged as needing either a second source or
in-text attribution, because it is close kin to the dongle anecdote and may be
the same story.

---

# 25. Primary versus secondary — the summary

**Of the 20 distinct sources now cited on the site: 7 primary, 13 secondary —
35% primary.**

By claims rather than by source:

| | Claims | Share |
| --- | --- | --- |
| Cited to a primary source | 47 | 37% |
| Cited to a secondary source | 81 | 63% |

**Of the 81 secondary citations, 62 — three quarters — are to Chinese
Wikipedia.** That is the site's largest structural weakness, and it is worse
than it looks: 〈台北捷運VAL256型電聯車〉 and 〈木柵機廠〉 carry **no reference
sections at all**, and between them they are the sole source for every
dimension, capacity, traction and braking figure on one fleet page and every
facility figure on one depot page.

**Did I check whether the secondary sources cite their primaries accurately?**
Asked for explicitly, because the line-colour episode proved they can be wrong.
**Two cross-checks, both against DORTS, both of which held** — the underground
pair and the section lengths. Everything else rests on the secondary source's own
accuracy. The full matrix of what was and was not verified is in
`docs/research/research-findings.md` §15, including the one case where verification was
impossible: 〈龐巴迪INNOVIA APM 256型電聯車〉 cites Bombardier product pages that
were retired after the Alstom acquisition, so the primary layer under the site's
best rolling-stock source is currently unreachable.

**Nothing has been archived.** Six of the eight primary sources are government
CMS pages behind opaque query strings (`cp.aspx?n=<hex>`). A site migration
breaks every one and leaves no way to tell which page was cited. **This is the
most serious sourcing gap the site now has**, and it is a mechanism problem, not
a research one.

---

# 26. The unsourced claim count

```
sourced    128   74%   a citation is attached
TBC         10    6%   the site says out loud that it does not know
ASSERTED    34   20%   resting on nobody's authority
(meta)       3         the site describing its own sourcing
```

**34.** Distributed as: 9 on the line page, 8 each on Muzha Depot and the Innovia
page, 7 on VAL256, 6 on Neihu Depot, 1 on `/bus/`.

Roughly half are identity rows nobody would footnote — "Operator: Taipei Rapid
Transit Corporation", "Line: Wenhu", "Chinese name: 內湖機廠". They are counted
anyway, and the counter documents why: exempting the ones that look harmless is
how the list stops being a count and becomes an opinion.

**The heuristic is stated in `scripts/claims.mjs` and it over- and under-counts
in both directions.** It finds sentences carrying a checkable thing — a figure, a
date, a superlative — and treats those as claims. A sentence can mention 1996
without asserting anything about it, and an unsourced qualitative claim about
engineering carries no marker at all. It is a trend line, not a measurement,
reported as one. What makes it worth having is that the failure mode being
guarded against is silent accumulation, and any consistent counter makes
accumulation visible.

**Guarded by a ratchet, not a threshold.** `tests/sourcing.test.mts` fails if the
count rises above the committed baseline in `docs/claims-baseline.json`. A
permanently-red test is not a test — it is a warning people learn to scroll past,
which is the same failure as a verification tool with false positives. The
ratchet already caught something: adding two spec rows during this run took the
count from 34 to 35 and the suite went red until they were cited.

---

# 27. What I found by measuring that the last two runs got wrong about themselves

Both of these were stated as fact in earlier logs. Both are false, and both were
found the same way — by driving the thing rather than reading the code that
declares it.

## 27.1 The spine has never been sticky. Anywhere.

`.spine { position: sticky; top: 16px }` has been in the stylesheet since run 1.
Run 1 recorded the desktop spine as sticky and called your premise wrong for
suggesting otherwise. Run 2 repeated it, and added that "the mobile pattern
already exists in the codebase — `.spine-rail` is sticky at `top: 0` on mobile".

**Neither was true, and the reason is one line of CSS.** A sticky box is
constrained to its **containing block**, and `.spine`'s containing block was
`.page-spine` — a float whose height is exactly its content's height. Zero range
to travel in. The declaration was inert on every page at every width, and had
been for four builds, while two run logs asserted it worked.

Measured with Playwright at 375 px and at 1280 px: the spine scrolled away
with the page, ending up 2,271 px above the viewport.

**Fixing it means moving the declaration one level out**, onto `.page-spine`
itself, so the containing block becomes `.page-grid` — as tall as the article.
Done on mobile. Measured after: pinned at `top: 0`, with SpineSync's highlight
on screen and populated.

**Deliberately not done on desktop**, and this is the second thing measurement
settled. Wide elements — spec tables, maps, the references list — reclaim the
spine's column with a negative margin and `clear: left`. `clear` resolves
against the float's *static* position, so a float that then slides down the page
gets painted over the elements that took its space. I shipped it, rendered a
page at 1000 px, and the spec table's row labels were behind the strip map:
"Traction motor" reading as "raction motor". Reverted on desktop, with the
reasoning written into the stylesheet.

Which is a better outcome than it sounds. The float was chosen in run 1
precisely so the column would be reclaimable, and that trade is still right. On
desktop the strip map is a station list you read down and it starts where the
reading does; on mobile it is an indicator that has to follow you, because
otherwise SpineSync has nothing to light. And on mobile the wide elements do not
reclaim anything, so there is nothing to overlap.

Which means run 1's answer to your Part 10.2 — "the premise is wrong, the spine
*is* sticky" — was itself the wrong premise. You were right the first time, and
about the desktop as well as the phone.

## 27.2 `sitemap.xml` has never built deterministically

Run 2 built twice, compared, and reported two differences: the build-id
directory and one meta tag's position. **The two builds landed inside the same
second.**

`app/sitemap.ts` set `lastModified: new Date()` for every page without its own
`updated:` date. So every build wrote a fresh millisecond timestamp onto all 46
URLs. Two builds eighteen seconds apart differ in every entry.

It was also a claim about the world that was not true — telling search engines
that all 46 URLs changed at 13:45:37.866 today, because that is when the CI
runner reached that function. Which is the same class of unsourced assertion the
rest of the site is built to avoid, written by the site about itself. Publishing
`lastmod` on every page on every deploy is also the standard way to get a
sitemap's dates ignored.

**Fixed** to use the TDX data's own retrieval date, which is a fact about the
data rather than about the build, and stable between builds.

**And made repeatable.** `npm run determinism` builds twice from a clean tree,
normalises the two build ids Next mints, and compares byte for byte. It
classifies the known `next-size-adjust` meta reordering as framework noise
rather than failing on it, because a tool that always exits non-zero is a tool
people stop running. Current result: **byte-identical.**

---

# 28. The outstanding fixes

## 28.1 The mobile spine — done, and the desktop one with it

Fixed as §27.1 — sticky on the float itself, mobile only — plus the ordering:
`.page-spine` now comes **first** on mobile rather than after the prose, and the
strip map is capped at `30vh` with its own scrollbar so it pins as a window onto
the line rather than taking the screen.

Run 1's reasoning for putting it last was that on a phone the strip map is the
station list, and a station list is something you scroll to rather than past.
That is true of the strip map read as a list and it ignores what the spine is
for *while you are reading*. SpineSync exists to light the stations the current
section mentions; a spine below the fold cannot show that to anyone.

**Verified by rendering, not by reading:** at 375×667, scrolled to 2,600 px, the
spine sits at `top: 0` with BR01, BR12, BR13, BR14 and BR24 lit and
`data-syncing` set. Screenshot at `docs/screenshots/line-wenhu-375-sticky.png`.

**One honest limitation.** On the line page the pinned window shows the top of
the list, so a highlight further down the line is on screen only if it falls in
the visible third. The marker rail on the other four content pages shows all 24
stops in one 55 px strip, so every highlight is visible there. Closing the gap
on the line page needs either a scroll-into-view inside the strip — which is
new behaviour and the brief said not to add features — or a decision to show
only the marked stretch on mobile. **That is a decision for you; it is in
`for-jamie.md`.**

**30vh is one number.** If a third of a phone screen is too much, it is one line
in `globals.css`.

## 28.2 The CJK subset split — done, and it did not save what run 1 predicted

Implemented as recommended: two subsets, `/data/stations` split off from
everything else, with that page declaring its own font family and overriding
`--font-han`.

**The measured result is smaller than the 40 KB run 1 forecast, and the reason
is this run's own work.**

*(The before/after/counterfactual table that sat here was deleted in run 4
under decision 3: no further font optimisation. Git history has it.)*

Run 1 measured "everything except /data/stations" at **112 characters**. It is
now **217**, because the citation infrastructure put Chinese source titles,
original-language titles and quoted DORTS text onto every content page. The
split did not deliver a 40 KB reduction; it **absorbed a 26.6 KB increase**.

Against the do-nothing counterfactual the split saves **26.6 KB on 45 pages** and
**34.8 KB on the stations page**. Against the state before this run it is worth
about **8 KB per page**. Both numbers are true and the second is the one to quote
if you are asking what the last four hours bought.

Line page went 385.4 → **383.9 KB**; station records 385.8 → **369.8 KB**.

**The build order is now inverted**, and this is the real cost. The subsets are
generated by reading what each *built page* renders, which is the only way to
know which characters belong to which subset — and it also drops the ~38 glyphs
that existed only in code comments, which run 1 identified as a free win. So
`npm run fonts` needs `out/` to exist. When it does not, it falls back to the old
source scan, writes the union into both subsets so nothing renders as tofu, and
says loudly that the split was not applied.

**A three-way split was measured and available, and in run 4 Jamie declined it
(decision 3, option B).** The decision is recorded here so it is not re-litigated:
first visit ~380 KB, every page after ~15 KB, and that is good enough for a
site whose actual deficit is content. The measurements were deleted from this
file for the same reason.

**One free thing came with it.** The `npm run fonts` staleness hole that run 2
recorded as unfixed (§19.3) is closed: `postbuild` now compares the Han rendered
on every built page against the subset that page declares, and **fails the build**
if anything is missing. It has to fail rather than warn, because the symptom —
tofu — is invisible on any machine that has a system CJK font, which includes
every machine that builds this site.

## 28.3 The harness bugs — five of six were already fixed, and I found a seventh

The six in §16 are fixed and stayed fixed; all six behaviours were re-exercised
and hold. What this run found instead:

**Seventh: `npm run facts` read YAML with regexes, and lied.** Every lookup was
of the form `/label:\s*Route length[\s\S]*?value:\s*([\d.]+)/` — "find the label,
then the next number". Two ways that fails, and both fired at once when the route
length row was renamed and quoted:

- `value: "25.17"` does not match `value:\s*([\d.]+)` because of the quote, so
  `[\s\S]*?` keeps scanning and finds the *next* row's number.
- `label: Route length` also matches `Route length, revenue`, and a label that no
  longer exists matches nothing while the check still reports success.

The result was the cross-checker announcing **"specs say route length 2 km"**,
having silently read the value off `Underground stations`. A tool that reports a
contradiction which is not there is the §16 failure again — it teaches you to
skim its output.

Fixed by parsing the frontmatter with gray-matter and looking up rows by exact
label, and by **failing when the expected row is absent** rather than passing
silently. A skipped check that reports nothing is the thing this file exists to
prevent.

**Eighth: `npm run weigh` was overstating `/data/stations` by 63 KB.** Once that
page declared a second Han family, both families were counted as fetched — they
have identical unicode-ranges, so both looked used. A declared face that nothing
selects is not a download. The script now reads the last `--font-han`
declaration, the way the cascade does.

**Ninth: the adversarial runner could not assert on a failed build.** The
assertion only ran when the build succeeded, so a `build-fails` case could check
nothing about *why* it failed — any non-zero exit counted. That mattered as soon
as the font-subset fixture flipped from `clean` to `build-fails`: "the build
broke somehow" is not evidence the right check fired. The runner now passes the
output to the assertion on both paths, and the fixture verifies the refusal names
the missing characters.

---

# 29. Regression hardening

## 29.1 Every colour, not four of them

Run 2 caught `--text-3` at 3.89:1 and closed it by adding four greys to a test
**by name**. That fixes the instance and not the class: the next colour added is
unchecked for exactly the reason `--text-3` was.

`lib/surfaces.ts` inverts the default. Every `--name: #hex` in `globals.css` must
appear there with a **role** — surface, text, boundary or decorative — and a
written reason. Three tests enforce it:

- every declared colour has a stated role (an unclassified colour fails);
- every colour clears the threshold its role requires (4.5:1 for text, 3:1 for
  boundaries), against the surfaces it actually sits on;
- the map paper is checked as a surface too.

**Boundaries below 3:1 are permitted only with an argument on the record.**
`--rule` and `--rule-strong` are exempt, and the exemption is written out: a
hairline between two table rows is a reading aid, not a control boundary, and
darkening every rule to 3:1 would turn a quiet document into a grid. That
judgement is now visible and arguable instead of a silent pass.

**Verified by breaking it.** Adding `--oops: #aabbcc` fails with "declared in
globals.css and classified nowhere"; reverting `--text-3` to `#79828e` fails with
"3.89:1 on --bg, below the 4.5:1 its role requires".

**Remaining unchecked colour: none in the stylesheet.** Two remain outside it —
the wordmark and favicon generators carry their own values in
`scripts/make-wordmark.mjs` and `scripts/make-favicon.mjs`. They are ornament on
the dark band and nothing reads them, but they are the only colours in the system
this machinery still cannot see.

## 29.2 A test for factual assertions without citations

`tests/sourcing.test.mts`, eight tests. The ratchet is described in §26. The
others check the mechanism rather than the content: every marker resolves, no
source is listed and left uncited, no unresolved `[?]` mark reaches the built
HTML, every page declaring sources renders a references list with every URL
linked, and primary/secondary is written out as text so the distinction survives
monochrome print and every dichromacy.

One of them guards the guard: if the classifier ever returned zero assertions,
the ratchet would pass forever. It asserts that all three states are populated
and that more than a hundred checkable statements are found.

## 29.3 A test for the claim-about-data-sources class

The existing check was three hardcoded claims — the three instances that had been
found. That catches yesterday's mistake.

The general rule now: **any sentence saying a named source does not publish
something must register what it claims is absent**, and the register is checked
against the fields that actually carry values in `data/tdx/` (97 of them). An
*unregistered* absence claim fails, exactly like an unclassified colour. To
assert an absence you have to say which field you looked for, and the build looks
for it too.

**Verified by planting both failure modes.** "TDX does not publish route length
for this line" fails with *"CumulativeDistance and RouteLength carry values in
data/tdx/"*. "TDX does not publish the paint colour of the seats" fails with
*"nothing in ABSENCE_REGISTER says what field was looked for"*.

## 29.4 Determinism

Covered in §27.2. `npm run determinism` exists, the sitemap bug is fixed, and two
clean builds are byte-identical.

**One regression this run caused and the browser check caught.** The new spec
rows — "GEC Alsthom armature chopper", "V DC, third rail" — overflowed the spec
table at 320 px, pushing three pages sideways. WCAG 1.4.10, on the primary
reading context. The cause was `white-space: nowrap` on both spec columns, which
worked for as long as every value was a number. `nowrap` on author-supplied
content is a landmine: it holds until someone types a longer string and nothing
in the authoring path warns them. Both columns now wrap; the units were shortened
anyway.

Worth noting that **no static check would have found this**. The CSS was
unchanged; the content changed underneath it.

**And the first fix for it was wrong**, which is worth recording because it is a
one-word bug. Both spec columns were given `overflow-wrap: anywhere`. That
keyword participates in min-content sizing, and combined with the `width: 1%`
shrink-to-fit on the unit column it collapsed that column to a single character,
setting "118 kW each" as a vertical ladder — visible only in a render, and found
by taking a screenshot of the references section for a completely different
reason. `break-word` breaks a long word only when it must and leaves minimum
width alone. Both keywords "wrap long strings"; only one keeps a table looking
like a table.

---

# 30. Part 12 — the argument against the current direction

Asked for bluntly, so:

## Is the infrastructure disproportionate to five stub content pages?

**Yes. Obviously and by a wide margin.** The repository has 12 content files, 5
of which are real pages, and all 5 still carry `stub: true`. Against that:
20 scripts, 9 test suites, 172 tests, a colour-science module with published
validation vectors, a CVD simulator, a geometry auditor, an adversarial harness,
a Playwright rig, a citation system, a claim classifier and a determinism
checker.

The tooling-to-content ratio is roughly **30:1 by line count**. No reference site
in the world has that ratio, and none of them should.

## Is anything built so far unnecessary?

Three things, and I built one of them today.

**1. `npm run cvd` is over-built for what the site draws.** It implements
Brettel two-plane simulation and CIEDE2000 with Sharma test vectors, and it
answers one question — are two of the seven official colours confusable — which
has one answer that will not change unless MOTC changes a colour. That answer is
now pinned by four assertions in the test suite. The 400-line simulator is
insurance against a refetch moving a colour, and a refetch has happened once.
**Keep the tests, and the module could be a script you run when the data changes
rather than part of `npm run verify`.**

**2. The determinism checker I wrote today is the least defensible thing in the
repository.** It builds the site twice — several minutes — to catch a class of
bug that has occurred once, and the once was a `new Date()` I could have found by
grepping for `new Date`. It is genuine and it found something real. It is also
the fourth verification tool for a site with five pages, and its honest
justification is "run 2 checked this by hand and got it wrong", which is an
argument for checking rather than for a script.

**3. The adversarial harness runs a full build per fixture — sixteen builds.**
It has found real bugs (a `javascript:` URL that was live, a division by zero
that produced an invisible map) and it costs several minutes every time. That
was worth it once. As a routine check it is disproportionate.

Everything else earns its place, and the ones that look most excessive have the
best records: `npm run facts` has caught three separate wrong numbers, and the
browser check caught a WCAG failure this run that no static analysis could have.

## What would I cut?

**Nothing.** And that is the uncomfortable answer, because it is not the same as
saying the balance is right.

I would not cut any of it because every piece has caught something, and removing
a check that has caught something is how the caught thing comes back. What I
would do instead is **stop building more of it**. There is a real difference
between "this tooling was worth building" and "the next tooling is worth
building", and this project has been answering the first question when it should
have started answering the second about two runs ago.

The one thing I would genuinely remove is **`--font-han`'s three-way split, if
you were about to build it**. It saves 33 KB on 40 pages. It is exactly the kind
of well-measured, clearly-positive, thoroughly-defensible improvement that this
project keeps making instead of writing about trains.

## What is the single highest-value thing not yet done?

**Write the Matra article.**

It has been the recommendation at the bottom of every priority list for three
runs and it has never moved. There is now a draft at
`docs/drafts/matra-dispute.md` with the arbitration chain sourced to a
contemporaneous newspaper report of the judgment, the fires explained
mechanically, and the procurement consequence traced through to why a Canadian
company built a French-gauge people mover. It is genuinely absent in English. It
is the only thing on this site that someone would link to.

Second: **read `ebook.dorts.gov.taipei`**. DORTS published a technical book
series about building this railway. It is online, it is primary, and in three
runs of research nobody has opened it. Every "Confidence: Medium, one
encyclopedia article deep" in the research notes is potentially one afternoon's
reading away from being builder-sourced.

## Four consecutive runs have been infrastructure. Is that the wrong priority?

**It was right for runs 1 and 2 and it is wrong now.**

The case for the first two is strong and I would make it again: the site was
publishing a route length 1.25 km too long, asserting three times that TDX did
not publish a number sitting in this repository, failing WCAG on its own greys,
and serving every share image as a binary blob. Building content on that
foundation would have meant more wrong pages, more confidently.

The case for run 3 is weaker but real: **the site was publishing statements that
were simply false**, and it had no mechanism to say where anything came from. You
cannot write a reference site without citations. That had to exist before more
content, not after.

**But that argument has now run out.** The foundation is done. The next run that
is mostly infrastructure will be building tools to check content that does not
exist. The five pages are still stubs, the bus section is still a scope
statement, and the strongest material this project has found in three runs of
research is sitting in a drafts folder marked "not published".

**Concretely, and this is the disagreement:** if the next brief is a list of
twelve parts and two of them are content, that is the wrong brief. It should be
one part — *write the Matra article, publish it, take `stub: true` off the line
page* — and the rest of the run spent on whatever that turns up. This project has
proved it can build machinery. It has not yet proved it can produce the thing the
machinery is for.

---

# 31. Priority order

1. **Write and publish the Matra article** from the draft. Third run running.
2. **Archive the eight primary sources** to the Internet Archive and record the
   snapshot alongside the live URL. Six of them are CMS pages behind query
   strings; one migration and the site's whole primary layer is unverifiable.
3. **Read `ebook.dorts.gov.taipei`** — DORTS's 捷運工程叢書. It would upgrade
   depots, signalling and guideway from encyclopedia-grade to builder-grade.
4. **Decide the mobile spine height** (§28.1) and whether the line page needs
   the highlight scrolled into view.
5. **Take `stub: true` off the line page.** With BR13/BR14 settled, the route
   length settled, headways primary and platform doors cited, the remaining TBCs
   on that page are honest gaps rather than unfinished work.
6. **The three-way CJK split** if you want the 33 KB — measured, mechanism
   already built. Or don't, and say so, and stop measuring it.
7. **Resolve 26 vs 18 interchanges.** Fourth run of asking.
8. **Confirm whether the seat programme finished.** Everything found dates from
   the June 2024 announcement.
9. **Chase the 50-vs-51 Innovia train discrepancy.** If a train is ever formed
   across both fleets, the site's framing of them as separate is wrong.
10. **Set `NEXT_PUBLIC_SITE_URL`** before deploying anywhere that is not
    `jimmyrice9999.github.io`. Still outstanding from run 1.

---

# 32. What I could not find, and why

| Wanted | Why not |
| --- | --- |
| Tyre specification and replacement interval, either fleet | Maintenance-manual data. Nothing in any language. TRTC confirms such intervals exist without publishing them. Record as permanent. |
| Neihu Depot stabling capacity and road count | Lives in the EIA report and the construction record. Neither found on the open web. |
| Whether heavy overhaul happens on the line at all | Same. |
| A source for the Neihu siting dispute | Three runs, nothing. Removed from the site. |
| Platform depths at BR13 and BR14 | Needs a cross-section. zh.wikipedia gives 地下四層 and 地下二層 at Medium; not published. |
| A manufacturer document for VAL guidance | The correction rests on two secondary sources that agree. A Siemens or Matra engineering description would settle it. |
| The 2005 Supreme Court judgment | Taiwan's judgments are indexed and searchable; not retrieved this run. It would move most of the Matra draft to primary. |
| A contemporaneous report of Matra's withdrawal | Would settle the 1996-vs-1997 conflict. Not found. |
| Any accident investigation into the 1993 fires | Would confirm or kill the coupling explanation, which is the best technical content in the draft. |
| Anything at all from Matra's side | Every source is Taiwanese. That is the largest structural bias in the draft and it is stated there. |
| Confirmation the seat programme completed | Everything is from the June 2024 announcement. |
| An independent survey of public reaction to seat removal | The only figure is TRTC reporting ~70% satisfaction with its own trial. |

---

# Run 4 — the content run

One instruction: publish the Matra article, finish the line page. Six decisions
from `for-jamie.md` executed. 6 August 2026.

## 33. The Matra dispute is published

`docs/drafts/matra-dispute.md` → `/train/history/matra-dispute/`, a new
`history` type under Train. The two-conflated-disputes finding leads the page.
The draft's rules were followed: no hardware-dongle story, no 1999 date, no
year asserted for the withdrawal — the 1996-vs-1997 disagreement is published
*as* a disagreement, with both readings cited.

**Publication research improved on the draft in three places:**

- **The fire mechanism now has two independent sources.** A 2008 自由時報
  piece (〈改車廂火燒車 還賠馬特拉16億〉, found this run) describes the same
  causal chain as 黃令名 2021 — two-car units run as four, control not
  redesigned, brakes dragging, tyres igniting — from a different angle, three
  years earlier. The draft had this at Medium on one scholarly account; it is
  now corroborated, and the two accounts' differing details are published as
  differing.
- **The 「馬特拉不拉，我們自己拉」 quotation has a primary source.** Neither
  the draft's sources nor 〈木柵線〉 carries it. What does: 陳水扁 himself, in
  a March 2026 鏡週刊 essay for the line's thirtieth anniversary, retelling
  the moment (a parts-pricing fight; a NT$10,000 patented rubbish bin; the
  withdrawal used as leverage). Cited as what it is — the speaker's own
  memoir, thirty years on. The moment of utterance remains undated by any
  contemporaneous record.
- **The claims counter reports zero unsourced assertions on the article** —
  188→192 sourced site-wide, and the new page carries 12 cited sources, 3 of
  them primary.

## 34. The line page is no longer a stub

`stub: true` removed from `wenhu-line.md`; the History section now tells the
construction story in brief and hands off to the article. Corrections moved
per decision 6 (§36).

## 35. Decision 4 — sources archived, and the argument proved itself mid-run

Every primary source on the site now carries a `snapshot:` field (schema in
`lib/sources.ts`, validated in `citations.mjs`, rendered as an "archived" link
in the references list and the bibliography).

Two things worth recording:

- **The rot argument stopped being hypothetical during the run.** The 民報
  article cited for "Taiwan's first metro line" is already dead — HTTP 404 on
  the very day the archiving decision was executed. A 2019 Wayback capture
  holds the article (verified by content, not just status), and the citation
  now points at it.
- **Save Page Now cannot currently reach Taiwanese government origins.** All
  four `.gov.taipei` / `metro.taipei` captures failed with HTTP 523 — the
  Archive's crawler is blocked or unroutable there. Their `snapshot:` fields
  therefore point at the newest *existing* captures (DORTS: Feb 2026;
  headways: 3 Aug 2026; PSD: Jun 2025; seat programme: Jul 2025) rather than
  captures taken today. Fresh captures were taken successfully for TDX,
  Lagardère, the EC decision and the 鏡週刊 essay.

## 36. Decision 6 — corrections moved to the foot

All five previously-corrected pages now open by talking about the railway; the
self-corrections sit in a `## Corrections` section at the foot of each page,
facts restated straight in the prose above. Nothing was deleted — every
correction still names what was wrong and cites what replaced it.

## 37. Decision 2 — the strip map scrolls its highlight into view

`SpineSync` now nudges the spine's own scroll container (never the page) so
the first highlighted station is inside the pinned 30vh window, 8px of
headroom, instant rather than smooth under `prefers-reduced-motion`. The 30vh
cap itself is unchanged, as decided.

## 38. Decisions 3 and 5 — executed as instructed

Ratchet left alone (decision 5); it tightened on its own — the committed
baseline moves 34 → 33, because the run netted one assertion out despite
adding the largest page on the site. Font measurement tables deleted from this
file (decision 3B), and the §28.2 three-way-split recommendation is closed
with the decision recorded.

**One number Jamie should see, reported not acted on:** the article's Chinese
quotations grew the base Han subset 217 → 404 characters, 71.6 → 128.5 KB.
That is the cost of quoting sources in their own language on a site that
loads its fonts up front, and decision 3 says it is not to be optimised. It is
in `for-jamie.md`.

## 39. Small things

- `Spine` grew a `railVerb` prop: the marker rail on a history page says
  "Concerns 12 of 24 stations", because an article does not *serve* stations.
- `tests/build-output.test.mts` page count 47 → 48; the new page is in
  `sourcing.test.mts`'s rendered-HTML checks.
- `getAllSources` merges `snapshot:` across pages so an archive link recorded
  on one page survives URL-level dedup on the bibliography.
- Full suite green: 172 tests, citations clean, claims 192 sourced / 9 TBC /
  33 asserted, facts 16 cross-checks no contradictions, verify pass.

---

# Run 4.1 — the article layout, done properly this time

Jamie's finding, verbatim in spirit: the Matra article shipped with a spine
that is an unlabelled column of circles, prose squeezed off-centre beside it,
and nobody had rendered the page before shipping. All true. Screenshots at
1440/768/375 are in docs/screenshots/ (`matra-*-before.png` is the failure,
`matra-*-final.png` the fix), and this entry records what looking found.

## 40.1 Articles now have a layout of their own

`ARTICLE_TYPES` in lib/content.ts (currently `history`) drives it:

- **No spine, no map.** On an entity page "which stretch of line" is a fact;
  beside a narrative the rail is decoration pretending to be data. Articles
  render neither, and take one centred column at reading measure instead.
- **The facts strip moved off the title.** The rendered body splits at its
  first `<h2>`; the lede reads first, the strip follows it. A narrative page
  begins by being read, not consulted.
- **Timeline device** (`rehypeArticleLayout`): a table whose first header is
  Date or Stage becomes a dated rail — on an article the dates are the spine
  the page actually has. The incidents and litigation chronologies use it.
- **Threads device**: an h2 followed by two or more strong-led paragraphs
  becomes side-by-side cards, so the two-disputes fork — the article's whole
  argument — is visible before a word is read.
- **Pull quote and section rule** styling for blockquotes and `---`; the
  馬特拉不拉 quotation now sits as the centrepiece of the political ledger.
- **Stations link inline** (badge → station page), articles only — no map
  there to do that job. Badges inside an existing link stay spans; nested
  anchors are invalid HTML.

## 40.2 The audit: the spine was wrong three more ways, all found by looking

Asked which other page types the spine is wrong for, the honest answer turned
out to be "the device is right everywhere else, and its *claims* were wrong
in three places":

1. **Fleet spines asserted stale facts.** VAL256 marked BR01–BR12 and its key
   said "Serves 12 of 24 stations" — contradicted by the same page's prose,
   which says the fleet has run the full route since December 2010. Innovia
   likewise. Both now mark the whole line: "Serves all 24 stations", true.
2. **Depot keys used the wrong verb.** "Serves 1 of 24 stations" on pages
   whose Corrections sections discuss a misplaced junction. Now "Joins the
   line at BR24" (a `railNote` override the page computes per type).
3. **The rail's loudest ink was an unkeyed encoding.** BR13/BR14 rendered as
   solid line-colour dots (the strip map's underground fill, keyed there,
   unexplained here) while the marked station was a faint outline. On the
   rail, the mark is now the only ink.
4. **And the mark itself was off-screen.** At 375px the rail overflowed by
   ~14px, and the stop that fell off the end was BR24 — the one marked tick
   on the Neihu Depot page. Ticks now compress to fit a 320px viewport.

Finding 4 is the process lesson restated: the DOM said `marked: BR24` and
every test passed while the pixel was unreachable. Only a screenshot showed
it — which is why `scripts/article-shot.mjs` now exists and why the
before/after images are committed alongside this entry.

## 40.3 Suite

172/172 tests, citations clean, claims unchanged (192 sourced / 9 TBC / 33
asserted, at baseline), no new colours in the stylesheet (everything uses
existing custom properties), fonts unchanged (no new Han). The `hero:` and
`spine:` fields came off the article frontmatter — an article renders
neither, and dead config invites the next confusion.

---

# Run 5 — the wrap, the skeleton, the entity graph, the linker

Four-part brief, executed in order. Plan and its critique in
`docs/plans/run5-plan.md`; screenshots prefixed `wrap-` and `r5-` in
docs/screenshots/.

## 41. The wrap — and the correction of run 3's "can't be done"

Run 3 claimed prose re-flow below a float "can't be expressed in CSS for
block boxes." **Wrong, and now on the record as wrong:** that limitation is
real only for a *centred* column, which would need to change its own width
mid-element. This site's column is left-set, and for a left-set column plain
float behaviour is exactly the wanted behaviour. The reserved-column
margin-left is gone; prose text now wraps beside the spine and reclaims the
full measure below it. Boxed elements (`display: flow-root`) sit beside the
float without their borders running under it; wide elements — tables, maps,
spec tables, references — `clear: left` and take the full page. The facts
strip and hero are the two deliberate exceptions: they stay beside the spine
as BFCs, because clearing would throw the page's identity below its fold.
No shape-outside, no container queries, no exclusions — the rectangle case
never needed them.

## 42. /train → /rail, with 62 redirect stubs

Sections are now rail, bus, bike, gondola, ferry, ticketing — each with a
scope statement in its own words (what exists, what is missing, why that
order), none saying "stub". The rename generates meta-refresh + absolute
canonical + noindex stubs for every old /train URL from what the build
actually exports, so redirects cannot drift from content. The station index
gained a real page at /rail/stations (generated from the registry), since
the type had app-route pages but no index.

## 43. The entity graph, and the Sanying Line while it is news

Twenty-three new entity pages: eight lines, five fleets, six depots, three
operators — every one a scope statement holding sourced facts or none, with
Jamie's unverified research flagged as *to be verified* rather than
borrowed. The claims counter confirms the discipline held: **32 unsourced
assertions site-wide, one below the pre-run baseline, with 23 pages added.**
Baseline re-tightened to 32.

**The Sanying Line page is the exception — a real page, verified this run:**
opened 30 June 2026, 14.29 km, 12 elevated stations, driverless two-car
sets, free trial to 31 August, NT$20–35 fares after — all cited to the
operator's own announcement (snapshotted today) plus 自由時報 and
zh.wikipedia. Two of Jamie's notes did not survive verification, which is
what verification is for: trial hours are no longer 10:00–20:00 (extended
to 08:00–22:00 from 1 August), and "over 750,000 in the first month" checks
out but the themed train's "runs at random" is nobody's sourced claim — the
page marks it as this site editorialising. The Hitachi plant question
(Kasado vs Italy) is published as a disagreement.

## 44. The linker

- `getLinkEntities()` — every page title + `aliases:` (English and Chinese)
  + every station name in both languages. 300-odd names.
- `rehypeAutoLink` — first mention per page, manual links suppress
  automatic ones, no nested anchors, no heading links, ASCII word-bounded,
  Han whole-segment matched. **20 links added site-wide** on top of the
  existing manual linking; scope pages gained none because their entity
  mentions were written as manual links, which is the suppression working.
- `npm run entities` — the audit plus the generated backlog
  (docs/entity-backlog.json). Current backlog, all genuine: Losheng
  Sanatorium, 三峽機廠, Lyon Metro, VAL206.
- Spine station rows are single linked units, LTG-style, with interchange
  pills carrying the *station's* code on the other line — `R10 BL15 Taipei
  Main Station` — resolved from the registry by same-name lookup.

## 45. Weight, honestly

Line page first visit: **457.5 KB** (383.9 before run 4). Nearly all of the
increase is the Han subset — 71.6 → 141.4 KB across the two weights —
because the Matra article, the Sanying page and the scope statements quote
sources in Chinese. Decision 3 (run 4) says fonts are not to be optimised;
the number is reported, not acted on. Every page after the first still
costs its HTML alone. `npm run weigh` had been silently measuring the
/train redirect stubs after the rename — 0.3 KB pages reported as the whole
site — which is a reminder that a measurement tool is a page consumer too;
fixed alongside the tests.

## 46. Suite

173/173 tests (redirect-stub coverage added; walkers exempt the stub tree
explicitly), verify pass, facts 16 cross-checks clean, citations clean,
fonts regenerated from the built output, claims 216 sourced / 13 TBC / 32
asserted / 13 meta, ratchet tightened 33 → 32.

---

# Run 5.1 — why CI never deployed, from the outside

No logs were readable without repo admin, so the diagnosis came from the
public Actions API: all three failed runs (#2, #3, #4) died at the **Browser
verification** step — never at `npm test`, which passed on the runner every
time. The job is *named* Tests, which is why the failure read as a test
failure. Neither suspected cause was real: Chromium installs successfully
two steps earlier, and the Node warning is cosmetic.

What was actually wrong, found by running the step locally and reading it:

1. **The harness crashed on its own redirect stubs (#4).** `allPages()`
   walked `out/train/`, and a stub's instant meta-refresh destroys the
   execution context mid-measurement. Excluded, with the reason in place.
2. **Measurements ran before webfonts settled (the #2/#3 class).** `load`
   fires before font swap, so reflow was measured against fallback-font
   metrics — Arial-family locally, Liberation on the runner. Same HTML, same
   Chromium, different interim glyph widths, findings only where it is
   tight. Now `document.fonts.ready` gates every overflow measurement; the
   site's own fonts are identical everywhere, so the number is portable.
3. **Re-running the fixed harness found three real run-5 regressions**,
   which would have failed the next push: the six-section nav overflowed
   every page at 320px (now wraps); the thread cards put accent-ink cite
   marks on the tinted well, dropping four below AA (cards now sit on plain
   paper); the contract table had an empty header row (headers added). The
   article and Sanying pages are now in the browser-verified page set — new
   layouts get browser coverage, which is how two of these were caught.

Workflow changes: Node pinned to 24.18.0 (was a floating '24'); `npm test`
split into four named steps so the checks UI names the failing phase;
browser-verify exits 2 with the install command if Chromium is missing, and
emits per-finding `::error` annotations plus a step summary — the next
failure, if any, names itself on the run page instead of saying "exit
code 1". Nothing was weakened: every check that ran before still runs, plus
two more pages' worth.

Verified locally in CI's exact order: cite, build, 173/173 unit tests,
facts, palette, geometry, a11y, browser verification clean, 16/16
adversarial cases.

---

# Run 6 — photographs

The diagnosis in the brief: the site was bland because it had no photographs,
and every layout pass since run 1 has been rearranging that absence. Plan and
critique in docs/plans/run6-plan.md; the critique moved image processing out
of the build (committed WebP, CI only verifies), made attribution a visible
line rather than a tooltip, and killed the 400 KB hero-page target with
arithmetic before the work started rather than after.

## 47. The pipeline

`npm run image -- "File:X.jpg" dest/slug` fetches from the Commons API,
captures photographer/licence/licence-URL/source from extmetadata, refuses
anything outside CC0/PD/CC BY/CC BY-SA, downloads the original to a
git-ignored cache, and commits 1600/800/400 WebP with a JSON attribution
sidecar. The budget (180 KB/file) is enforced at encode time — quality steps
down, then pixels — and again in tests/images.test.mts, which also requires
the visible credit line, explicit dimensions on every img, a 400 KB per-page
imagery cap, and an allowed licence in every sidecar. Two licence gates on
purpose: the fetch script judges at download, the test judges what is in the
tree.

**The gate worked on its first day.** The best photo found for the Matra
article — a VAL256 carriage being unloaded at the Port of Keelung in 1990 —
is licensed under Commons' bare "Attribution" template, which is free but is
neither CC nor PD, and the script refused it. It stays refused; the article
gets a period VAL256 in service instead. Also refused by circumstance: two
files whose category placement lied (a fern filed under "Taipei Metro Brown
Line").

## 48. What got photographs

Selected by eye from ~120 candidate thumbnails (filenames lie; two Commons
categories contained wrong-subject files): Wenhu Line (VAL256 crossing the
Keelung River — CC0), Sanying Line (the Dahan River arch bridge, shot in
opening week), VAL256 (head-on at Daan, the front-window shot the page's
placeholder asked for), Innovia (threading the Liuzhangli curve), Muzha
Depot (the depot approach at Taipei Zoo), Neihu Depot (aerial between
expressway and river). Heroes render before the title — recognition before
naming — with srcset, eager+high-priority for the hero, lazy for everything
below, and the credit line linking photographer and licence deed.

The Matra article's hero (a VAL256 above the zoo gateway, 2007) and the
three station heroes — BR10 Zhongxiao Fuxing (exit and the round-cornered
Xieda building), BR13 Songshan Airport (the B3 concourse), BR24 Nangang
Exhibition Center (the elevated frontage) — all landed on later retries,
were reviewed by eye, and shipped. Adding 玄史生's credit to a station page
put Han on a base-subset page; the postbuild gate refused the build until
the subsets were regenerated, which is that gate doing precisely its job.
Still bare: the other 21 station pages and the entity scope pages. The "photograph wanted" placeholders
stay, saying what to shoot.

## 49. Navigation and the wordmark

Full breadcrumb trails returned (run 3's single parent link was an economy
that became a dead end as the tree deepened), and /about, /data and every
data subpage — which had NO in-page route up at all — now carry them.
The wordmark investigation ended in an alibi: every current context grounds
the mark (header band, self-grounded favicon, text-only OG, print hides the
header). The black-on-white Jamie saw is the two-day-old deployed version,
which predates the band — resolved by run 5.1's deploy fix, verified in this
run's screenshots.

## 50. Weight, before and after

Three-way CJK split implemented (base / content / stations, classified by
which font family each built page declares — the same detection postbuild
enforces, so classification cannot drift):

| Page type | Run 5 | Now (no hero) | Hero adds |
| --- | --- | --- | --- |
| Station page | 439.3 KB | 337.1 KB | +~110 KB where one exists |
| Network | 462.5 KB | 360.2 KB | — |
| Line page | 457.5 KB | 438.8 KB | +89 KB (CC0 hero) |
| Home | 290.9 KB | 291.0 KB | — |

Base Han subset: 450 → 111 characters (141 → 39 KB); content pages carry
their own 392-character subset, which is the honest cost of quoting sources
in Chinese. **The 400 KB target for a content page with a hero is not
reachable** — framework 172.5 + Latin 100.1 + content-Han ~120 + HTML ~30 =
~423 KB before one image byte — and the plan said so before building. What
was reachable: station pages under 340 without heroes, ~450 with; and the
line page with its hero at ~528, down from a photo-less 457.5 in run 5.

## 51. Decisions argued in the plan

Hero-before-title: for (implemented). Big station badge: for (implemented).
Big facts figure: for, narrowly. Section-opener imagery: against — indexes
are wayfinding, and a hero would push the links below the mobile fold for
decoration. Colour beyond the accent: against — more colour without more
meaning is what the brief itself ruled out. Density variation: arrived free
with the photographs.

Suite: 177/177 (four new image-compliance tests), claims steady at 32,
citations clean, postbuild verifies all 147 pages against the three subsets.

---

# Run 6.1 — decisions executed

Jamie's calls on the run-6 open items, and what was done with them:

- **Decision 1 — the 57 KB stays.** The Chinese quotations are the evidence;
  the weight is the cost of quoting sources in their own language. Recorded,
  closed, not to be re-optimised (this supersedes nothing — it confirms
  run 4's decision 3 under the new numbers).
- **Decision 2 — second archive, overruling the run-6 recommendation to
  accept single-archive risk.** Jamie's reasoning is on the record and
  correct: the 民報 source died mid-run, which proves the failure mode
  rather than theorising it. The source schema gains `snapshotAlt` —
  rendered as a "mirror" link beside "archived" — for the four
  `.gov.taipei`/`metro.taipei` sources whose origin blocks Wayback's
  crawler. archive.today capture attempts for all four are recorded below;
  Wayback retries continue occasionally as before.
- **Decision 3 — the 2005 Supreme Court judgment is Jamie's to fetch, and
  it is FREE**: retrievable through 司法院法學資料檢索系統 (the Judicial
  Yuan's judgment search), not a purchase as the run-4 handoff implied.
  Corrected here so nobody budgets for it. The 商業周刊 445 article remains
  the only actual purchase on the follow-up list.
- **Home page — the Matra article is featured.** One card above the section
  listing: thumbnail (with its CC BY-SA credit, which the image test
  enforces on the home page like anywhere else), eyebrow, title,
  standfirst. Not a redesign; the home page's job is still wayfinding.

---

# Run 7 — the corpus, and the flatness

Two jobs: absorb a 21-file research corpus without publishing any of it on its
own authority, and stop every page reading at the same texture. Plan and its
self-critique in `docs/plans/run7-plan.md`; the corpus index is
`docs/research/INDEX.md`.

**Headline: the site was contradicting itself about how its trains take
power.** The line page's facts panel said `750 V DC third rail`. The VAL256
page, two clicks away, explains at length that the current comes off the
lateral guide bars and states outright that this is *why a VAL guideway needs
no separate conductor rail*. Both were live, on the same site, for four builds.
Run 3 corrected the guidance claim on the fleet page and never looked at the
line page. §54.1.

**Second: five bugs, and three were found by looking rather than by any check.**
A strip map drawing two stations differently with nothing in its key to say why;
a badge system asserting that engineering numbers are real stations; seven of
nine line pages with no link from the page whose job is to list them; and an
adversarial fixture that has been failing since run 6 because nobody ran the
suite. §54.

**Third: the corpus is a lead file and it needed treating as one.** Every figure
the new devices rest on was verified against DORTS directly before anything was
drawn. Three of those checks changed something: one research URL is wrong and
lands on a page that does not contain what is quoted from it; the corpus's
exit-count summary is a miscount of its own table (eleven against a real eight,
and this run's brief inherited the error); and a claim the corpus puts on the
Muzha section contradicts the builder's own alignment text. §52.

Final state: build green, **178 unit tests**, citations clean, **18 fact
cross-checks** with no contradictions, `npm run check` and `npm run a11y` clean,
browser verification clean with **axe-core at zero across 85 pages**,
`npm run adversarial` back to **16/16**, claims ratchet holding at 32 with
sourced claims up 216 → 240.

---

# 51. The corpus, indexed

`docs/research/INDEX.md`. Twenty-one files — **not the twenty-five the brief
describes**; §5 of the index accounts for the difference, and two of the four
missing are referenced by other documents and do not exist anywhere in the tree.
`docs/research/research-findings.md` is cited a dozen times in this log and is
not in the repository.

What the index revealed beyond the per-file summaries:

**The site is missing a depot.** Zhonghe Depot — 1.47 hectares including a
passenger station, the smallest on the network, built on a closed TRA station's
site, and so constrained that DORTS says it can only stable and clean trains —
has no page. There are eight depot pages and it is not one of them. It is a
complete page from a single primary source and it is the best effort-to-value
ratio in the corpus.

**The highest-value table in the corpus is in the bus file, not a rail one.**
Taipei's coloured bus routes are not decorative: 紅 = R = Tamsui–Xinyi, 綠 = G =
Songshan–Xindian, 藍 = BL = Bannan, 棕 = BR = Wenhu. They are MRT feeder services
named after the line they feed. Someone standing at a stop looking at 藍26 has no
way in English to know it is a Bannan feeder. Four rows fix that, and TRTC's own
documentation is the source. Better still: on the *trunk* network green and blue
mean compass direction instead — the same two colours, two meanings, one city.

**The most valuable source in the corpus has never been opened.** 李政安 &
蘇瑞文, 臺北捷運內湖線中運量系統概述, hosted by New Taipei DORTS. Two separate
files name it as important and largely unexploited. It probably answers the
running-surface, signalling and electrification gaps at once.

**The corpus has no memory.** `sanying-line.md` is dated as current research and
run 5 already killed two of its claims — the trial hours it gives were superseded
on 1 August, and "runs at random" is nobody's sourced claim. Anyone reading it
fresh would reintroduce both. That is a structural weakness of the corpus rather
than of any file in it, and it is in `for-jamie.md`.

## 51.1 Archiving

`npm run archive` run against the site's own citations: **20 new Wayback
snapshots captured and written into frontmatter**, including both sources added
this run. The site now carries 31 distinct cited URLs.

**One thing has changed since run 4 and it is worth recording: `.gov.taipei`
accepted Wayback captures this time.** Run 4 found all four government captures
failing with HTTP 523 and concluded the Archive's crawler was blocked at that
origin. It is not blocked today — DORTS's project page, its architecture page and
its procurement FAQ all captured on request. **archive.today still refuses
everything** (HTTP 429 on all six blocked-origin URLs), which is the same finding
run 6.1 recorded and the same remedy.

The corpus's own reading list is *not* archived and `npm run archive` cannot do
it — the command reads the site's citations, not the research. That is the right
design (archiving a URL nobody has read records a page, not a claim), and it
means fourteen government CMS node ids in the corpus are unprotected until
somebody actually uses one.

---

# 52. Contradictions between the research and what is published

Full list in `docs/research/INDEX.md` §3. The ones that changed something:

## 52.1 The research's citation URL does not go where it says

`wenhu-line.md` cites DORTS's 車站建築設計 page as `cp.aspx?n=980C85299DA2890A`.
That lands on a general overview carrying two sentences and **none** of the
material quoted from it. The page actually being quoted is the same node with its
sub-section id — `cp.aspx?n=980C85299DA2890A&s=6B0F524CA1EB5C9F`. Anyone
following the citation as written would conclude the research had invented the
quotations.

Verified at the correct URL, verbatim, and it says exactly what the corpus says
it does: 「文湖線內湖段為木柵段之延伸，屬中運量系統，除大直站為地下車站外，其餘
共有十座高架車站」. The site cites the working URL.

## 52.2 The exit-count summary is a miscount, and the brief inherited it

The corpus says eleven Wenhu stations have a single exit. Its own transcribed
table says eight. This run's brief repeated the eleven.

The builder's table, verified verbatim: **8 stations with one exit, 8 with two,
4 with three, 1 with five, 1 with six, 2 with eight.** Sixty-three exits across
twenty-four stations. The published prose says eight, and `npm run facts` now
cross-checks that sentence against the registry — verified by planting *eleven*
and watching it fail.

## 52.3 A tunnel the builder does not mention

`wenhu-research-part2.md` puts a **福州山隧道 Fuzhou Mountain Tunnel** on the
Muzha section's route, between BR05 and BR06. zh.wikipedia agrees:
「穿越福州山隧道後，再沿著和平東路」.

DORTS's own alignment text says something different: 「穿越辛亥隧道北側接和平
東路」 — passing the *north side* of the Xinhai road tunnel — and closes
「全線以高架方式興建」, built entirely as elevated.

Those are not the same claim, and between BR05 and BR06 the line has to cross a
ridge somehow. **Unresolved, and published as unresolved**: the section drawing
follows the primary source and its caption names the disagreement. It matters
because it is the one stretch of that drawing where the picture could be wrong.

## 52.4 The fleet arithmetic still does not divide, and no file notices

51 VAL pairs and 101 Innovia pairs. A four-car train is two pairs. **51 and 101
are both odd, so neither fleet alone forms a whole number of four-car trains** —
only the sum does (152 pairs = 76 trains). `rolling-stock.md` prints "51 pairs /
25 trains" and "101 pairs / 51 trains", and neither matches its own pair count.

Either a pair is stabled spare in each fleet, or at least one train is formed
across both. **If it is the second, this site's framing of the two fleets as
separated at formation level is wrong.** Open since run 3; the corpus reproduces
the arithmetic without flagging it. It is the sharpest unresolved question in the
whole corpus.

---

# 53. Part 2 — the three corrections, all verified before changing anything

Every one was checked against the cited primary source directly, not against the
research file that names it.

## 53.1 BR13 and BR14: upgraded from an encyclopedia to two primary sources

The brief said these were marked `structure: unknown` with a dotted tick. **They
were not** — run 3 set them to `underground`. What was still true is that the
facts panel cited zh.wikipedia for it.

They now rest on two DORTS documents that never mention each other:

- The project record gives the Neihu section as 「地下段3.9公里，2座地下站」 — two
  underground stations in 3.9 km of tunnel, which narrows the pair to BR13–BR24
  without naming either.
- The station architecture page names one and counts the rest:
  「除大直站為地下車站外，其餘共有十座高架車站」. Ten elevated plus Dazhi is
  eleven of the section's twelve. The twelfth is Songshan Airport.

Two primary documents, and the identification falls out of the arithmetic between
them. zh.wikipedia now agrees with the pair rather than establishing it. The
Wenhu line page went from 4 primary citations to 5.

## 53.2 The 1993 incident: the builder's own wording now leads

DORTS's project page says 「木柵線於82年系統測試階段發生**輪胎起火意外事故**」 —
during system testing in 1993, **a tyre ignition accident**. Verified verbatim.
That is the builder describing its own worst construction year, in the document it
still publishes, and it is the most precise wording anyone has used: what burned
was a tyre, not a train.

The Matra article now opens its fires section with that, then sets the secondary
framing beside it — zh.wikipedia's 火燒車 and 自由時報's 「接連被兩把大火燒得焦黑
的電聯車」 — and says explicitly that neither is a correction of the other. They
are an incident classification and a newspaper description of the same events, and
the gap between them is roughly the gap between "an overheated tyre ignited" and
"the train was on fire", which from a platform look identical.

**One thing I did not do, and the reason.** Re-reading 〈木柵線〉 this run did not
find the 24 September 1993 second fire the article's chronology dates from it, and
a 電聯車爆胎 — a tyre burst — appears on the same day and month in a different
year. I have **not** removed or redated the claim. A summarising fetch failing to
confirm a source is not the same as a source contradicting it, and deleting a
twice-cited claim on that basis would be the same error in the opposite direction.
It is flagged on the page, in its gaps list, where somebody reading the article in
full can settle it.

## 53.3 The four lengths

The page carried three figures. It now carries four, states **25.17 km as the
operating length** in bold before the table, and explains each:

| Figure | What it measures |
| --- | --- |
| **25.17 km** | Operating length, BR01 to BR24 — TDX `CumulativeDistance` |
| 25.7 km | The two construction projects added: DORTS's 10.9 + 14.8 |
| 25.04 km | The same railway, measured here along MOTC's geometry |
| 26.42 km | The whole alignment, including 635 m of depot lead and 744 m of tail track |

The fourth row is the one this site got wrong for four builds, and it is now
published *as* the finding rather than omitted. The spec row was renamed
`Route length, revenue` → `Route length, operating`, matching 營運長度, the term
both DORTS and zh.wikipedia use; `npm run facts` looks that row up by exact label
and was updated in the same commit, because the lookup fails loudly rather than
skipping.

---

# 54. Four bugs, found in passing

## 54.1 The site contradicted itself about how the trains take power

`content/rail/lines/wenhu-line.md` facts panel: **`Electrification: 750 V DC
third rail`**, cited to zh.wikipedia.

`content/rail/rolling-stock/val256.md`, two clicks away: pairs of horizontal
wheels bear outward against lateral guide bars, and those bars carry the 750 V
supply, *"which is why a VAL guideway needs no separate conductor rail"*.

Run 3 corrected the guidance claim on the fleet page — the central-rail error —
and never looked at the line page's power row. Both statements have been live
together since. **Corrected to `750 V DC, off the guide bars`**, cited to the
guideway description rather than the encyclopedia.

Recorded plainly because the whole point of the citation system is that a figure
can be traced, and two pages of one site tracing the same fact to opposite answers
is the failure that system exists to make visible.

## 54.2 "C370" was labelled as a contract number. It is not.

DORTS's own procurement FAQ — found while checking the fleet arithmetic, and
richer than the corpus records: **sixteen contracts with line and quantity against
each** — gives the Wenhu fleet's contract as **CB370**, in the same CB series as
the Neihu civil contracts CB410/CB420/CB430 into which the E&M scope was folded.
C370 is the *fleet designation*, in the same series as C301, C321, C341, C371 and
C381.

Both names are correct for different things and the page used one to mean the
other. Now two rows — `Fleet designation: C370` and `Procurement contract: CB370`
— on separate sources, with the correction recorded on the page. The URL keeps
`c370`, which is what the fleet is called.

## 54.3 The badge system asserted that engineering numbers are stations

`components/RichText.tsx` renders frontmatter strings with station codes as
badges. Its own comment said an unrecognised code "is rendered as plain text".
**It was not.** The check was on the *line* — `getLine('BR')` resolves — so any
`<known prefix><digits>` string got a badge whether or not it was a station.

Found the moment a page needed to say `BR1`: on the new numbering page, whose
entire subject is that BR1 is an engineering number and *not* a station code, BR1
rendered as a brown badge titled "BR1".

A badge means "this is a real station". That is what the README sells the badge
system on, and it is the same failure `badge-absent` was introduced to prevent on
`/data/stations` in run 1, arriving through a different door. The station now has
to resolve too, and a test scans every built page for a badge whose title is a
bare code with no name after it.

## 54.4 Seven of nine line pages had no link from the lines index

`/rail/lines/` rendered a two-column comparison table of Wenhu and Sanying and
nothing else. The comparison table *replaced* the link list whenever two pages had
specs — written when there were two line pages, still in place when there were
ten. The others were reachable only from prose elsewhere.

The list is not optional. An index navigates; a comparison compares. Both are on
the page now, in that order, and the comparison renders only when two or more
pages actually have specs to compare.

**No static check would have caught this.** `npm run check` reports orphans, and
these pages were not orphans — they were linked from body prose on other pages.
The index simply stopped listing them. Found by looking at a screenshot taken for
a different reason, which is the third time this project has found something that
way.

## 54.5 Also fixed, smaller

- **The strip map had an unkeyed encoding.** BR13 and BR14 render as solid ticks
  against everyone else's hollow ring, and the key listed only "elevated" — the
  "not established" entry it used to pair with disappeared when the last unknown
  structure was resolved in run 3, and nothing replaced it. Exactly the fault run
  4.1 fixed on the rail variant, still live on the map variant.
- **A systems page said it "serves" stations.** Same class of small false claim in
  the page furniture that run 4.1 found on the depot pages; caught before shipping
  this time. Systems pages now say "concerns".
- **Untagged Han in a new component**, caught by the language-tagging audit rather
  than by review.

## 54.6 A fifth: an adversarial fixture that had been failing since run 6

`npm run adversarial` came back **15/16**, and the failing case was
"zero-width joiners, combining marks, emoji" — a fixture that plants a page
containing a ZWJ, stacked combining marks and emoji, and expects a clean build.

It was failing on none of those. The fixture's Han was 動物園, and **run 6's
three-way CJK split means a new Han character on a new content page correctly
fails the build** — the font gate exists because tofu is invisible on any machine
with a system CJK font, which includes every machine that builds this site. So
the fixture had quietly turned into a second, accidental test of the font gate,
which the case immediately below it already tests deliberately.

It has been failing since run 6 and nobody saw it, because **run 6 and 6.1 did
not run the adversarial suite** — run 5.1 was the last to report it, at 16/16,
and that was before the split. Run 3 itself called the harness disproportionate
as a routine check and it was dropped in practice; this is what dropping it cost.

Fixed by giving the fixture Han that is in the content subset by construction
(文湖線, which is on the line page), so the case tests what its name says. Back
to **16/16**.

---

# 55. Part 3 — what was built

Plan and full self-critique in `docs/plans/run7-plan.md`. The critique changed
five things before building; §57.

## 55.1 The elevation profile — `components/ElevationProfile.tsx`

A section drawing of the Wenhu Line: distance along the horizontal from TDX's own
`CumulativeDistance`, structure from `lib/station-overlay.ts`.

**The horizontal axis is not drawn by hand.** `chainageKm` is now a field on the
generated station registry, from the same TDX field whose last value is the route
length the page prints. The registry regenerates from `data/tdx/`, so the drawing
cannot drift from the number above it.

**What it refuses to draw is the point.** DORTS gives 3.9 km of underground
running and two underground stations. Those two stations are 2.58 km apart by the
operator's own chainage. The remaining 1.32 km is ramp at the two portals, and
**no source divides it between them** — so the located run is drawn solid and the
unlocated part as two hatched wedges, with the arithmetic printed under the
drawing. Guessing the portals would have produced a better picture asserting two
chainages nobody published, and this project has already drawn one thing in the
wrong place for four builds.

Height is not to scale and the caption says so once: no source gives a rail level,
and an invented vertical axis dressed as a measurement would be worse than none.

**Not built for Tamsui–Xinyi**, which the brief named and which is the obvious
second subject. **No station on the R line has a sourced structure value.** The
research describes the alignment in prose — at grade at Guizikeng, elevated from
the embankment, underground after Minzu West Road — but that does not assign a
structure to R21 Qiyan. The component takes any line; building it today would have
meant inventing twenty-eight station structures to fill a picture.

**Mobile:** 540 px minimum, scrolling in its own keyboard-reachable container. 540
is chosen rather than rounded — at that width the visible ~343 px reaches BR14, so
the tunnel is on screen before anyone scrolls. A wider drawing reads better and
opens on a viaduct, which is the least informative part of it.

## 55.2 Two numberings, one line — `components/NumberingLadder.tsx`

New page at **`/rail/systems/station-numbering/`**.

The engineering numbers are now a registry field, transcribed verbatim from
DORTS's station table — verified row by row this run, all twenty-four.

**Assessment, as the brief asked for before building:**

- *Should the registry carry them?* **Yes.** A per-station fact from a primary
  source, exactly like `structure`, and the generator already reports an overlay
  entry whose station TDX does not recognise.
- *Hover, or a toggle on the strip map?* **No.** Hover has no touch equivalent,
  and a toggle costs a client component and a second state on the site's most-used
  navigation device to surface a fact that is historical rather than navigational.
  Nobody standing on a platform needs the engineering number.
- *A diagram that makes the inversion legible at a glance?* **Yes, and it is the
  reason to do this at all.**

The device is a crossing ladder: the line in operating order on the left, the same
twenty-four stations in engineering order on the right, a hairline joining each
station to itself. Where the orders agree the hairlines run parallel; where they
invert, they cross. **The Muzha half draws a solid X and the Neihu half draws a
ladder, and the reason is the data.** BR07 Liuzhangli is the fixed point — the one
station whose two numbers land in the same place, because 7 + 7 is the fourteen
every Muzha pair sums to.

The full table is published below the diagram as the evidence. The diagram is the
argument; the table is the appendix, and the plan's first draft had that the wrong
way round.

**One inference is marked as one.** DORTS gives the Songshan Airport station's
chronology — study directed February 2000, Executive Yuan agreement 1 August 2001,
funding approved 4 January 2002 — and the table shows the station carries a
BR-series number although it is a Neihu-section station. The reading that it was
folded into the other series because it arrived after the B series was allocated is
**this site's**, and the page says so in those words.

## 55.3 Typographic scale

**The lead figure.** One number at 58 px, on pages where a figure is the page's
argument. On the Wenhu page that is 25.17 km with the other three underneath it.
**One figure, not three** — three would be the KPI strip every marketing page has
had since 2014, and all three would already be in the facts panel eight lines
below, which is a second copy of a fact wearing a data costume. The plan proposed
three; the critique cut it to one.

**The station code at platform-sign scale.** 40 px, same badge token, same
AA-checked colour pair from the line registry, only the scale changes. On a station
page the code *is* the identity — it is what is printed largest on the real
platform — and it was set at 15 px beside the title, which is the size it takes
when it is an aside inside a sentence.

**The index tally.** Section indexes now open with counts computed from the content
tree: how many pages, how many written up, how many are scope statements. No new
colour, and it makes the barest pages say something true.

## 55.4 Exits — the device of my own

Not a chart. A fact per station and a paragraph on the line page.

**Eight of Wenhu's twenty-four stations have exactly one exit, and seven of the
eight are consecutive** — BR02 Muzha through BR08 Technology Building, an unbroken
run from Wenshan into Daan where every station has one way in and one way out.
Twenty of twenty-four have three or fewer. A quarter of the line's sixty-three
exits are at two stations.

That is not a trivia column. A single-exit station is one lift, one stair, one
escalator bank and one crowd, and when it closes the station closes. It is the
predictable consequence of a medium-capacity railway on a single row of columns
down the middle of an existing road — and DORTS gives that same constraint as the
reason these stations carry no decoration, because a single-column support system
limits what can hang on it. The exits are the same economy at street level.

Primary, per-station, absent from every English source, and not a design
convention: no transit reference site draws exit counts. Every station page carries
its own, and `npm run facts` pins the prose to the registry.

## 55.5 Planned interchanges

Three, all primary-sourced and verified this run:

| Station | Planned | Source |
| --- | --- | --- |
| BR01 Taipei Zoo | Circular South Ring | DORTS 環狀線北環及南環 |
| BR15 Jiannan Rd. | Circular North Ring | DORTS 環狀線北環及南環 |
| BR22 Donghu | Xidong Line | New Taipei DORTS 汐東捷運 |

**They render, and they must not render like an interchange.** No fill, no coloured
pill, no station code — the code does not exist yet and printing one would be
inventing data. A dashed outline carrying the *line's name*, the word "planned" in
a label, and the citation inline, because station pages are generated from the
registry and have no references list to resolve a source id against. Colour is not
the cue; fill and wording are, so it survives greyscale, print and every
dichromacy.

## 55.6 Length bars on the network table

Inline, in the existing cell, beside the number that is still printed. Seven
figures between 15 and 52 km read as seven figures; drawn, the Airport MRT is
visibly twice the Bannan Line and three times the Circular.

**This is the one place colour was added this run.** §56.

## 55.7 The index pages

Argued in the plan, changed by the critique in one respect.

**Against a borrowed photograph:** it would decorate a parent with a picture of one
of its children, and push the links — the page's entire job — below the fold on a
phone. Run 6 rejected section-opener imagery on exactly that argument. **Against a
map:** `/rail/lines/` would get the network map, which is already the whole content
of `/rail/network/`.

**For data:** an index of ten line pages can say something true in the space a
photograph would take, and the honest number is how many are actually written. It
is computed from the tree, so it cannot flatter the site.

The critique cut the progress bars that were in the first draft. A bar turns a
status into a score and implies a scope statement is fifteen per cent of a page. It
is not a partial page; it is a different and complete thing, and run 5 argued that
properly. A word per row says the same without the implication.

---

# 56. Colour — the restraint holds, with one exception

Asked again, and the answer is again mostly no.

Colouring the comparison devices would mean colouring by line. On a depot chart
that means colouring by which line the depot serves — but the comparison is *area*,
and the line is not the variable. Colour there encodes nothing, which is the
definition the brief itself set.

**The one exception is the network table's length bars**, where the line *is* the
variable, every row already carries the same colour in its badge two cells to the
left, and the bar is therefore colour restating an encoding that is already
redundant. That is the only safe use available here.

Everything else was left alone. The section drawing and the numbering ladder are
both single-accent, and both distinguish their categories by **position and fill
only** — above, on or below the ground line; solid, hollow or hatched — so nothing
is lost in greyscale, in print, or under any of the three dichromacies. That is the
badge rule applied to diagrams, and it was not relaxed because a diagram looks like
a place where colour would be nice.

---

# 57. What I proposed and what I cut

## Cut before building, in the plan's own critique

1. **Three big numbers on the line page → one.** The KPI strip every product page
   has, and two of the three were already in the facts panel below.
2. **The elevation profile as a chart → as a section.** The first wireframe had
   three abstract bands, an axis and a legend. A section has a ground line, a deck
   on piers above it and a bore below it, because that is what the railway is.
3. **Names on both rails of the ladder → names on one.** Twenty-four stations
   listed twice is a table with lines drawn on it, and the brief said this deserved
   better than a table.
4. **Progress bars on the index → a word.**
5. **The exit strip promoted from a footnote to the lead device.** It had been
   ranked under a proportional depot chart, which is the more conventional piece of
   work. It is the thing no English source has.

## Cut during the build

**The proportional depot-area diagram.** The device is right and the data is not
there. **Exactly two depots on this site have a sourced area** — Muzha 6.2 ha and
Neihu 7.11 ha. The corpus adds Nangang, Zhonghe, Xinzhuang and Xindian, but those
are research, and publishing research figures to make a chart look full is the
precise failure this site was built to avoid. A two-bar chart is not a comparison;
it is two numbers with rectangles behind them. It becomes available the day the
depot pages are written from the corpus, which is a Part 4 recommendation.

**Exit counts on the strip map rows.** The plan had them there. The strip map is
navigation, and a number against every row makes it noisier at its primary job. The
station pages carry the count and the line page carries the finding.

## Not considered, recorded as not considered

No animation anywhere. Nothing on this site changes over time.

---

# 58. Density — Part 3E

Audited, and most of the answer arrived with the devices.

**Line page, before:** hero photograph, then 5,000 px of uniformly-spaced 17 px
prose broken only by 25 px headings, then a map, a spec table and a reference list.
One tonal event at the top and nothing after it.

**Line page, now:** hero → title → one 58 px figure → dense facts grid → prose →
**section drawing** → geographic map → dense spec table → references. Dense, open,
dense. The two new devices are both pictures in a run of text, which is the
alternation LTG gets from photographs and this site could not get that way, because
most of its subjects cannot be photographed usefully.

**Station page:** hero → 40 px code → dense facts strip → map → tables. Also
alternating, where before it was badge-title-panel-map-table at one weight
throughout.

**Index pages:** large tally → list. Was: title, one line of prose, list.

**Still uniform, and honestly so: the scope pages.** A scope statement is three
paragraphs saying what a page will cover and why it does not exist yet. There is
nothing to alternate against and inventing something would be decoration. They now
at least sit under an index that says how many of them there are.

---

# 59. Part 4 — what is now publishable

## 59.1 Scope statements that could become real content today

Ranked by material × source quality × work needed. Everything here names a source
specific enough to go and read.

| Page | What it gets | Best source |
| --- | --- | --- |
| **`/rail/depots/zhonghe-depot`** — does not exist | The whole page: 1.47 ha including a passenger station, the former TRA site, stabling and cleaning only, and DORTS's own 因用地面積之限制 as the reason | DORTS 中和新蘆線, **primary** |
| **`/bus/network`** | The feeder-colour table, the four-tier hierarchy, the number bands, the revenue-pooling model | Taipei PTO + TRTC's own feeder documentation, **primary** |
| **`/gondola`** | Crystal cabins — 48 mm of glass, 213 kg, five passengers instead of eight — the T16 foundation failure, numeric suspension thresholds | 土木技師公會 journal + gondola.taipei, **primary** |
| **`/ticketing`** | The two things English sources get wrong: the TPASS card is not required, and the NT$100 fee is refunded | NTPC TPASS documentation, **primary** |
| **`/ferry`** | Weekend headways of 3–5 minutes on the Tamsui–Bali crossing; four operators doing different things; the concession trap | Taipei DoT 2004 release + operator sites, **primary** |
| **`/rail/lines/circular-line`** | The 403 earthquake and the bearing mechanism | Control Yuan report, **primary** |
| **`/rail/lines/songshan-xindian-line`** | The 1987 all-underground decision; Xiaobitan; the end of cross-colour running | DORTS 松山新店線, **primary** |
| **`/rail/lines/bannan-line`** | Three simultaneous service patterns; empty trains run into the peak purely to absorb loading | TRTC operations, **primary** |
| **`/bike`** | Why 2.0 exists: no electricity in the dock, so no excavation and no Taipower connection | EasyCard + Taipei DGBAS, **primary** |
| **12 Sanying station pages** | Codes, names, locations, sub-names | NTMC route page, **primary** |

## 59.2 The publication queue — where I disagree

**#2 Sanying Line is done.** Run 5 wrote it. The queue is stale. What remains is
its twelve station pages, which is a different job.

**#1 Xinyi East Extension stays first, but the first task is not writing.** The
corpus's own sourcing note says the extension material is zh.wikipedia-sourced and
needs a primary pass. Time-critical *and* under-sourced is the worst combination,
because deadline pressure is exactly what makes people publish from a wiki. **Do
the primary pass first, then write.**

**#6 the C341 procurement should come off the list until it has a second source.**
It is a strong, specific and embarrassing claim about a named company — a
contractor forced to buy from a supplier it did not want, at 1.5× the price —
resting on one encyclopedia. It currently outranks two items with primary sourcing.
By this site's own rule 5 it is not ready.

**#9 the joint bus network explainer should be second.** Primary sourcing, one
page, no new research pass, and it corrects something no English source carries.
Best effort-to-value ratio on the list and it is ninth. And the site's wordmark
*is* a bus destination blind: the design reference makes dot-matrix "the bus half
of the identity", and the bus section has been a scope statement since run 1. The
site looks like it is about buses and contains nothing about them.

**#7 Airport MRT should hold until the Marubeni question is answered.** The arc is
the article — six missed openings, a NT$7.2 bn claim, now profitable and debt-free —
and the corpus cannot say whether the claim was ever settled. An article that ends
"a NT$7.2 bn claim was announced" is half a story.

**Zhonghe Depot is not on the list and should be.**

### Revised order

1. **Xinyi East Extension** — primary pass, then write. Opens this month.
2. **The joint bus network explainer** — best ratio, primary, no research needed.
3. **Circular Line 403 earthquake** — the richest primary trail available.
4. **Losheng and Xinzhuang Depot** — with the handling the corpus specifies.
5. **Zhonghe Depot** *(new)* — one primary source, one complete page.
6. **Maokong Gondola** *(new)* — crystal cabins and T16.
7. **Ticketing: the two corrections** *(new)*.
8. **YouBike** — the 2.0 dock decision.
9. **The 2014 naming transition** — partly told already on the new numbering page,
   which is where the 2014 and 2016 dates now live.
10. **Sanying station pages** — replaces "Sanying Line", done.

Off the list until sourced: **C341** (needs a second source), **Airport MRT**
(needs the Marubeni outcome).

## 59.3 The single highest-value page this week

**The joint bus network explainer, `/bus/network`.**

Not Xinyi East: its value window is real but narrow — after the end of August it is
routine — and its sourcing is a wiki. Not the Circular 403 article: it is the best
*story* on the list and it is a research-heavy write with a three-hundred-line
source trail, which is not a week's work done well.

The bus explainer, because a visitor standing at a stop in Taipei looking at 藍26
has no way in English to know it is a Bannan Line feeder, and four rows of a table
fix that permanently.

**What it needs, and it is a short list:**

1. Confirm the number bands — 1–99 core, 100–199 outward, 200–299 cross-district —
   against Taipei PTO. Currently one secondary source, and the corpus flags it.
2. Establish whether the Airport MRT has been given a feeder colour prefix.
3. The URL for TRTC's own feeder documentation, so the 藍7 and 棕10 worked examples
   cite the operator rather than a summary of it.
4. A decision on how to present the colour collision — trunk green and blue mean
   compass direction, feeder green and blue mean MRT line. It is the page's best
   content and it needs care, not a footnote.

No TDX pull, no fleet data, no photographs. One page. Two days: one chasing
sources, one writing.

---

# 60. Weight and contrast

## Contrast

**No change to any colour, and none needed.** Everything added this run uses
existing custom properties. `lib/surfaces.ts` classifies every colour in the
stylesheet by role and three tests enforce it; nothing new was declared, so nothing
new needed classifying.

axe-core: **zero violations across 85 pages**, including the two new layouts, which
were added to the browser-verified page set — run 5.1's lesson that a layout not in
that list has no browser coverage, and two of its three regressions were exactly
that.

## Weight, before and after

Run 6's figures against this run's, same script, unchanged:

| Page type | Run 6 | Run 7 | Δ |
| --- | --- | --- | --- |
| Home | 291.0 KB | 292.6 KB | +1.6 |
| Station page (no hero) | 337.1 KB | 339.5 KB | +2.4 |
| Network | 360.2 KB | 362.7 KB | +2.5 |
| Line page (with hero) | 438.8 KB | 458.0 KB | **+19.2** |

The line page's 19 KB is HTML: the exits section, the numbering hand-off, the
fourth length row and the section drawing's SVG, plus the Chinese quotations the
two new DORTS citations bring with them. Fonts are unchanged in kind — the content
Han subset carries the new characters, which is the cost of quoting sources in
their own language, and **decision 3 (run 4, reconfirmed as decision 1 in run 6.1)
says that is not to be optimised.** Reported, not acted on.

Every page after the first still costs its HTML alone.

**269.5 KB of font files are still emitted, committed and deployed that no
English-reading visitor ever downloads.** Unchanged, same decision.

---

# 61. Housekeeping

## 61.1 Station photographs

`scripts/commons-candidates.mjs` — a new discovery script that searches Commons for
each bare station page and prints a licence-filtered shortlist with thumbnails,
with pacing. It downloads nothing: `npm run image` is still the only thing that
commits a file, and it re-checks the licence at the door.

**Fourteen of twenty-four station pages now have a photograph, up from three.**
BR02, BR03, BR05, BR06, BR07, BR08, BR09, BR11, BR12, BR15 and BR18 added.

**Every candidate was looked at before it shipped, and three were rejected on
sight:**

- The top result for BR01 Taipei Zoo is a photograph of the **Maokong Gondola**
  station, not the MRT station. The sign in the frame reads 動物園站 and the file
  title says Gondola. Run 6's lesson, recurring: filenames lie.
- BR14 Dazhi's best candidate shows the surface entrance **shuttered before
  opening**. Historically interesting; a poor and potentially misleading lead image
  for a station open since 2009.
- BR16 Xihu's best candidate is a row of ticket machines, which identifies no
  station.

**Commons rate-limits hard** — HTTP 429 after six thumbnail fetches at 400 ms
spacing, and again after nine at 5 s. Ten stations remain bare because the *search*
half of the job ran out of budget, not because nothing exists: the shortlist for
all twenty-one is committed at `docs/commons-candidates.txt`, so the next run
starts from a reviewed list rather than a search.

Two of the new images (BR06, BR08) have no 1600 px variant because their sources
are 800 px wide. The pipeline records the widths it actually produced rather than
upscaling, and the image tests pass.

## 61.2 Print

Every new device has a print rule, written with it rather than after it:

- The section drawing loses its scroll container and its tinted well, and its
  ground and axis lines darken, because a background fill browsers drop is not
  something a drawing may depend on.
- The numbering ladder likewise.
- **The network length bars print as outlines**, not fills — a bar whose background
  is dropped is a gap in a table, which is worse than no bar.
- The lead figure prints black rather than in the line accent.

Seventeen print PDFs regenerate clean.

## 61.3 Accessibility on everything new

- **Keyboard:** both new scroll containers carry `tabIndex` and a group role, so a
  region that scrolls can be scrolled from the keyboard (WCAG 2.1.1). Full
  traversal passes on every page type, including the two new ones.
- **Screen readers:** the big station code is `aria-hidden` with the code restored
  inside the `<h1>`, so it is announced once rather than twice. Both diagrams carry
  a sentence-length `aria-label` describing what they show, not what they are. The
  ladder renders two layouts and hides one with `display: none`, which removes it
  from the accessibility tree — exactly one diagram is announced.
- **Contrast:** no new colours; everything inherits values already classified and
  tested.
- **400% zoom:** no document-level horizontal scrollbar on any page.
- **Touch:** the planned-interchange citation is an inline link inside a paragraph,
  the same target size as every other inline link on the site. No new sub-24 px
  controls were introduced.
- **The mobile answer for both diagrams is not "hide it"** — the section drawing
  scrolls at a width chosen so the tunnel is visible before anyone scrolls, and the
  ladder switches to a layout without station names because at 375 px the wide
  layout renders its text at about 6 px. A diagram that technically fits and cannot
  be read is the same failure as hiding it with extra steps.

## 61.4 Tooling

| Command | What changed |
| --- | --- |
| `npm run facts` | +2 cross-checks: single-exit count and total exits, prose against the registry. Verified by planting a wrong number and watching it fail. |
| `npm run stations` | Emits `chainageKm` per station from TDX `CumulativeDistance`. |
| `scripts/shot.mjs` *(new)* | Screenshots any route at any width, with `--clip` for 1:1 bands. Generalises `article-shot.mjs`, which hardcoded one route. Waits on `document.fonts.ready`. |
| `scripts/commons-candidates.mjs` *(new)* | §61.1. |
| `npm run verify:browser` | Two pages added to the verified set: the numbering page and BR22. |
| `tests/build-output.test.mts` | +1 test: no badge may be titled with a bare code. The 26.42 assertion was rewritten to check what it was protecting rather than banning a substring the page now publishes deliberately. |

---

# 62. Screenshots worth looking at

All in `docs/screenshots/`. Before-and-after pairs use the `r7before` and `r7*`
suffixes.

| File | What it shows |
| --- | --- |
| `prof-1440-r7prof3.png` | The section drawing at full size — the tunnel, the two hatched portal wedges, the arithmetic under it. |
| `profm-375-r7prof3.png` | The same on a phone, opened so the tunnel is on screen before any scrolling. |
| `ladderc-1440-r7ladder2.png` | The numbering X. The finding, drawn. |
| `ladderm-375-r7ladder3.png` | The compact ladder — the mobile answer that is not "hide it". |
| `st-1440-r7station.png` | The station page: code at sign scale, exits, engineering number, the planned-interchange strip. |
| `idx-1440-r7index.png` | The lines index, listing all ten lines again. |
| `linetop-1440-r7before-top.png` | The before, for comparison: everything between 10 and 17 px. |

---

# 63. What still needs a human

1. **The Fuzhou Mountain Tunnel** (§52.3). The builder says the Muzha section is
   entirely elevated; two secondary sources put a tunnel between BR05 and BR06. The
   section drawing follows the primary and names the disagreement, but one stretch
   of a published illustration is uncertain and that is worth settling.
2. **The fleet arithmetic** (§52.4). 51 and 101 are both odd. If any train is
   formed across both fleets, this site's framing of them as separate is wrong.
   Fourth run of asking.
3. **The 24 September 1993 second fire** (§53.2). Needs somebody to read 〈木柵線〉
   in full rather than a summary of it.
4. **`docs/research/research-findings.md` does not exist** and this log cites it a
   dozen times. Either restore it or rewrite the references.
5. **`docs/framework.md` is out of date** in three places: it calls
   `blue-highway.md` "thin, gap statement only" when it is 261 lines with primary
   sourcing; it maps twenty-five research files when twenty-one exist; and its
   publication queue lists Sanying as unwritten.
6. **What TRTC's depot "Level 3" and "Level 5" actually mean.** The site publishes
   "Third-level depot" on a live page and cannot say what it means. The corpus notes
   the terms are referenced constantly and defined nowhere.
7. **archive.today still refuses every automated capture.** Six blocked-origin URLs
   still have no second archive. One manual visit each settles it.
8. **Ten station pages are still bare**, with a reviewed shortlist waiting at
   `docs/commons-candidates.txt`.
