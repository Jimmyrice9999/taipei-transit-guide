# Run 5 plan — wrap, skeleton, entity graph, linker

Written before building, per the brief. The critique section records what the
first draft of this plan got wrong and what changed.

---

## Part 1 — prose wraps the spine

### Re-examination of the old "can't be done" claim

Run 3 said prose re-centring below a float "can't be expressed in CSS for
block boxes." Re-examined: **the claim was true only for a centred column,
and this site's column is left-set — so it does not apply.** What CSS block
layout genuinely cannot do is keep a column visually centred in the free
space beside a float and then re-centre it in the full width below; that
needs the box itself to change width mid-element. But this layout starts
prose at the container's left edge. For a left-set column, classic float
behaviour IS the wanted behaviour:

- Text lines shorten beside the float and lengthen after it ends. No
  `shape-outside` needed for a rectangle; no container queries; CSS
  exclusions remain Edge-only history.
- The two real problems have standard fixes:
  1. **Boxes with borders/backgrounds** (facts strip, notes, tables) extend
     under a float even though their text wraps. Fix: `display: flow-root`
     (BFC) — the box then sits beside the float, narrowed.
  2. **Wide elements** must not narrow. Fix: `clear: left; max-width: none`.

### Wireframe, 1440 (line page)

```
‹ Lines
Wenhu Line
summary ..........................................
┌──────────┐  ┌───────────────────────────────┐
│ strip    │  │ FACTS STRIP (BFC, narrowed)   │
│ map      │  └───────────────────────────────┘
│ (float,  │  Prose wraps beside the map while
│ max-h    │  it lasts. Headings too (BFC'd so
│ ~100vh)  │  their rules do not run under).
│ BR01     │  ## History
│  ...     │  more wrapped prose ..............
│ BR24     │
└──────────┘
Prose reclaims the left edge here, at reading measure.
┌───────────── wide table: cleared, full width ─────────────┐
[route map, spec table, references — all wide, all cleared]
```

### Wireframe, 375

Unchanged from today: spine unfloats, goes sticky at top, 30vh cap. The wrap
is a ≥781px behaviour.

### Critique → revisions

- **Draft 1 let wide tables clear mid-page.** On a line page the strip map
  float is tall; a table in an early section would leap below the whole map,
  tearing reading order — prose above the table wraps, the table appears
  hundreds of px later. Revision: the strip map float keeps its existing
  `max-height` (viewport-bound), which bounds the worst jump to under one
  screen; and the Wenhu page's early sections are prose-and-timeline anyway.
  Accepted cost, stated.
- **Draft 1 BFC'd every prose child.** That silently disables wrapping —
  a BFC box narrows beside the float, so paragraphs would keep a ragged
  left edge and never slide under. Only *boxed* elements (facts strip, note,
  h2 with its rule) get BFC; plain text wraps.

---

## Part 2 — skeleton

- `content/train` → `content/rail`; `app/train/*` → `app/rail/*`;
  `getStationHref` and every internal link updated.
- **Redirects:** static export, so server redirects do not exist. Postbuild
  generates a meta-refresh + canonical stub at every old `/train/...` path
  (sections, types, pages, all 24 station pages, network). Standard static
  practice; search engines honour the canonical.
- New type folders with real scope statements (what, what not yet, why):
  rail/{stations,systems,operators}, bus/{network,operators,routes,models,garages},
  bike/{history,generations,stations}, sections gondola, ferry, ticketing.
- Section `_index.md` bodies carry the scope prose; the folder `description:`
  stays one line. No page says "stub" as its content.

### Critique → revisions

- **Draft 1 wrote generic scope lines** ("This section will cover X, Y, Z").
  Revised: each scope statement names what exists today, what is missing,
  and the reason for the build order, drawn from docs/site-architecture.md's
  own research (e.g. bus: fleet churn is why routes wait; ticketing: the
  1200 pass supersedes English sources that still describe the 1280).
- **Draft 1 made /rail/stations a content type.** The station pages are
  generated from TDX data by an app route, not content files. Revision: the
  app route moves to /rail/stations; a content `_index.md` gives it a nav
  entry and scope body; the static app route wins the route conflict by
  Next's specificity rules (static beats dynamic), which is verified in the
  build rather than assumed.

## Part 3 — entity pages

Every entity page is a scope-statement page: identity facts only where
sourceable, everything else TBC, none of Jamie's unverified research
published as fact. Exceptions: **Sanying Line gets a real page** — verified
against NTMC/news primary sources this run, with archive snapshots, because
it is five weeks old and English coverage is a vacuum.

Pages: lines (Tamsui–Xinyi, Songshan–Xindian, Zhonghe–Xinlu, Bannan,
Circular, Danhai LRT, Ankeng LRT, Sanying, Airport MRT), fleets (C301,
C321, C341, C371, C381), depots (Beitou, Xindian, Xinzhuang, Tucheng,
Nangang, Luzhou), operators (TRTC, NTMC, TYMC). The C341 procurement story
and the Losheng Sanatorium history are flagged as wanted articles in the
relevant scope statements — not written, since their facts are unverified.

### Critique → revisions

- **Draft 1 risked a claims-ratchet explosion**: 23 new pages full of dates
  would add dozens of unsourced assertions. Revision: scope pages carry
  sourced identity facts or none; prose avoids bare figures; gaps use the
  site's TBC vocabulary, which the counter treats as honest.

## Part 4 — linker

- `lib/entities.ts`: registry of every linkable entity — content pages
  (title + new optional `aliases:` frontmatter, English and Chinese),
  stations (name, 中文, code), lines, operators. Longest-match-first.
- `rehypeAutoLink`: text-node walker; first mention per page; skips
  headings, existing anchors (ancestry-tracked), code, and the page's own
  entity. ASCII names require word boundaries; Chinese names match exactly
  and must be ≥2 characters.
- Backlog report (`npm run entities`): names that look like entities
  (registry names without pages + a generated `X Line/Depot/Metro` pattern
  scan) found in prose with no target. Written to docs/entity-backlog.json
  + console. Generated, not maintained.
- Spine map rows become LTG-style single linked units: `BR10 BL15 Zhongxiao
  Fuxing` — one anchor, code pills concatenated, interchange codes included.
- Audit: per-page count of links gained, in the report.

### Critique → revisions

- **Draft 1 auto-linked every alias everywhere.** Chinese two-character
  names ("木柵", "大安") appear inside longer proper nouns and would
  mislink. Revision: Chinese aliases must not match when embedded in a
  longer Han run — the tokenizer already isolates Han runs, so a Chinese
  alias only links when the *whole run* (or a boundary-delimited slice)
  equals the alias; ambiguous two-character district names are simply left
  off the alias lists.
- **Draft 1 linked inside table cells and lists** — kept, LTG does, but
  first-mention-only applies page-wide so a spec table does not re-link.

## Order of work

1. Plan (this file) → 2. Part 1 CSS + screenshots → 3. rename + redirects →
4. skeleton `_index` scope pages → 5. entity pages + Sanying research →
6. linker + spine units + backlog report → 7. fonts, full verify, claims
baseline, screenshots at 1440/375, weight delta → 8. run log + report.
