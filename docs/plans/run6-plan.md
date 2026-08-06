# Run 6 plan — photographs, then everything downstream of them

Per the brief: the site is bland because it has no photographs, and layout
work on photo-less pages rearranges the same emptiness. Images first.

## Part 1 — the image pipeline

**Source.** Wikimedia Commons API, two calls per image: `categorymembers` to
enumerate a category, `imageinfo` with `extmetadata` for the original URL,
pixel size, and the licence block (Artist, LicenseShortName, LicenseUrl,
DateTimeOriginal). Requests carry a descriptive User-Agent per Wikimedia
policy.

**Licence gate.** Accepted: CC0, public domain, CC BY, CC BY-SA. Rejected:
anything NC or ND, anything without a machine-readable licence. The fetch
script refuses at download time; the build refuses at render time. Two
gates, because a hand-edited frontmatter block must not be able to sneak an
unlicensed image past the fetch script's judgement.

**Processing.** `sharp` at build-prep time (not build time — processed WebP
is committed, per the never-hotlink rule): 1600/800/400 px widths, quality
tuned so the 1600 stays under 180 KB. Attribution JSON lives beside the
images; frontmatter carries the resolved fields.

**Rendering.** Hero: `<picture>` with srcset, explicit width/height,
`fetchpriority=high`, caption bar carrying photographer + licence, both
linked (licence text to the deed, photographer to the Commons file page).
Attribution is a visible line under the image, not a tooltip — CC BY-SA
requires attribution and licence indication, and the build fails without
both.

**Enforcement** (new `tests/images.test.mts`): every rendered `<img>` has
width and height; every image file ≤ 180 KB and total images per page ≤
400 KB; every hero with a src has photographer, licence, licence URL and
source URL; licence is on the allowed list.

### Commons categories to draw from

- Line/fleet: "Taipei Metro Brown Line", "Taipei Metro Neihu Line", "Taipei
  Metro Wenshan Line", "Bombardier Innovia APM 256", "VAL 256" (name to
  confirm by query).
- Depots: "Muzha Depot", "Neihu Depot" (existence to confirm; fall back to
  line categories' depot shots).
- Stations: per-station categories ("Taipei Zoo Station", "Zhongxiao Fuxing
  Station", …) — targeting interchanges and termini first.
- Sanying: category existence unknown (line is five weeks old) — query,
  expect thin, accept a construction-era photo if the licence is right.
- Matra article: a VAL256 in service is period-appropriate enough; a 1993
  press photo will not be on Commons.

Selection is by eye: download candidates, LOOK at each, keep the best.
Filenames lie about quality.

### Wireframes

1440, content page:
```
[============ hero photo, full content width, ~380px tall ============]
[ caption · © Photographer · CC BY-SA 4.0 ]           ← one quiet line
Wenhu Line
standfirst ..........................................
┌ spine ┐  ┌ facts strip ┐
│       │  prose wraps …
```
768: same order, hero ~300px tall. 375: hero full-bleed edge to edge,
~220px, title below; facts strip after lede unchanged (mobile spine still
pinned after title — hero sits above the title, not inside the pinned
region).

Station page 375:
```
[ hero photo, full width ]
[ caption/credit line    ]
 BR13  ← station badge, much larger than today
 Songshan Airport  松山機場
 …facts, adjacent stations…
```

## Part 2 — navigation

Restore full breadcrumb trails (Home › Rail › Lines › Wenhu Line) on
content and station pages; the single ‹-parent link was a run-3 economy
that stopped paying once the tree got deep. Audit /about, /data/*, 404 for
dead ends. The header wordmark should link home from every page — verify,
not assume.

## Part 3 — wordmark

Inventory every render (header, favicon, OG, 404, print, about) and give
each a deliberate ground. The dot-matrix mark requires the dark band; where
a context can't provide it, use the plain-text title instead.

## Part 4 — visual argument (for/against each suggestion)

- **Hero before title: FOR.** It is the single highest-leverage change and
  photographs make it possible. Implemented on pages that have a photo.
- **Bigger station badge on station pages: FOR.** It is the signature,
  the data is already there, costs nothing.
- **Scale contrast in facts (big numbers): FOR, narrowly** — the platform
  panel's key figure (opened year / length) gets display scale; no other
  number grows.
- **Section openers with imagery: AGAINST for now.** Index pages are
  wayfinding; a hero there pushes the links below the fold on mobile for
  decoration's sake. Revisit when sections have enough pages that indexes
  are destinations.
- **Colour beyond the accent: AGAINST.** The accent system is doing its
  job; more colour without more meaning is decoration, which the brief
  itself rules out.
- **Density variation: comes free** once photos break up the tables — no
  separate work.

## Part 5 — weight

- Three-way split: base (chrome, station, data pages) / content (md-backed
  pages + /data/sources) / stations-data page. The win lands on the ~64
  station/data pages, not on content pages — content pages ARE the
  Han-heavy ones and keep a large subset.
- **The 400 KB hero-page target is unrealistic and the plan says so with
  arithmetic:** framework 172.5 + Latin fonts 100.1 + content-Han ~140 =
  412.6 KB before one byte of HTML or image. Under 400 for content pages
  means leaving the framework or shrinking Han quotation, both rejected
  elsewhere. Proposed target instead: content page + hero ≤ 640 KB with
  hero eager; station pages with hero ≤ 480 KB; and the split's real win
  reported per page type.
- Lazy-load everything below the fold; hero eager with fetchpriority.
- Budgets enforced in the image test; weight table before/after in report.

## Critique → revisions

- **Draft 1 resized images at build time.** That re-downloads nothing but
  re-encodes 3 sizes × N images on every CI build, and puts sharp's native
  binary in the deploy path. Revised: processing is a local prep step, the
  WebP files are committed, CI only verifies budgets/dimensions — same
  place the never-hotlink rule already pushed the architecture.
- **Draft 1 put attribution in a caption tooltip.** CC BY-SA attribution
  behind a hover is attribution most readers never see, on a site whose
  whole brand is visible sourcing. Revised: a visible credit line, rendered
  by the same component that renders the image, enforced by the build.
- **Draft 1 chose photos by resolution and filename.** Filenames lie.
  Revised: download candidates and look at every one before it is kept;
  the selection step is a review step.
- **Draft 1 heroed every page including indexes.** Rejected per the
  argument above; heroes go where a photograph informs (vehicles,
  stations, places), not where it decorates.
- **Draft 1 accepted the 400 KB target.** The arithmetic above says no
  honest implementation reaches it for content pages; the plan proposes a
  defensible alternative instead of quietly missing the number.
