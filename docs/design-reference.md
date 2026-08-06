# Design Reference — Taipei Transit Guide

Source material for the site's visual identity. Drawn from the Taipei MRT's own
design system rather than invented from scratch.

Status: implemented, except where noted. The line colours, station code badges,
typography and the dot-matrix wordmark are all built, and station and colour data
now come from Taiwan MOTC's TDX platform rather than transcription. One thing
remains open — the Cast licensing question (section 3).

Where implementation disproved a note here, the note has been corrected in place
and marked **superseded**, with the evidence. Nothing is silently overwritten.

---

## 1. Line colours

The MRT's line colour system is the single strongest visual asset available, and
it's already how riders navigate the network. Use it as the site's palette rather
than choosing arbitrary brand colours.

**Accuracy caveat: RESOLVED.** The values below are now taken from `LineColor` in
Taiwan MOTC's TDX platform — government open data, fetched with `npm run tdx` and
committed under `data/tdx/`. They are no longer community-sourced, and no line is
unsourced. The earlier plan to sample colours off a route map PNG is unnecessary
and has been dropped.

| Line | Code | Official (TDX) | Operator | Superseded value | Old source |
|---|---|---|---|---|---|
| Wenhu (Brown) | BR | `#B57A25` | TRTC | `#C48C31` | Wikidata |
| Tamsui–Xinyi (Red) | R | `#D90023` | TRTC | `#E3002C` | en.wikipedia module |
| Songshan–Xindian (Green) | G | `#107547` | TRTC | `#008659` | en.wikipedia module |
| Zhonghe–Xinlu (Orange) | O | `#F5A818` | TRTC | `#F8B61C` | en.wikipedia module |
| Bannan (Blue) | BL | `#0A59AE` | TRTC | `#0070BD` | en.wikipedia module |
| Circular (Yellow) | Y | `#FEDB00` | NTMC | `#FFDB00` | **unsourced** |
| Taoyuan Airport MRT | A | `#8246AF` | TYMC | `#8E47AD` | Wikidata |

**Every community-sourced value was wrong.** Not badly wrong — most are within a
few percent — but not one matched. Two are worth recording specifically:

- **Wenhu.** The Wikidata value `#C48C31`, cited to a TRTC 2025 route map, was
  adopted here as a correction to an earlier `#B57A28`. Official data says
  `#B57A25`. The "correction" moved away from the right answer.
- **Airport MRT.** Same pattern: `#8E47AD` from Wikidata replaced an earlier
  `#8246AF`. Official data says `#8246AF` exactly.

The lesson is not that Wikidata is bad, but that a *citation* to an official
source is not the same as the official source, and that a confident correction
can be worse than the value it replaced. Where an API publishes the data, use it.

**Circular and Airport MRT are not TRTC.** Circular belongs to New Taipei Metro
and the Airport MRT to Taoyuan Metro, so their colours come from those operators'
line records — same platform, different operator code. A fetch limited to TRTC
returns five lines and would leave these two community-sourced.

Contrast was recomputed against all seven official colours: **every badge and
accent pair still clears WCAG AA.** Two notes, though —

- **Wenhu no longer needs the hairline** under its accent bar. The official brown
  is darker than the community value and clears 3:1 on white unaided. Only
  Orange and Yellow still need it.

### Derivation carries a safety margin

Derived colours are generated against **4.6**, not the 4.5 they are checked
against. The 0.1 is deliberate, and it applies to every derived value on the
site, not to one troublesome colour.

The reason is structural. `darkenUntil` walks lightness down in 1% steps and
stops at the first value that passes, so deriving against the threshold itself
always lands *on* it. Wenhu's accent ink measured 4.50 against a 4.50
requirement — technically a pass, practically a trap: any correction to the
official colour, or a rounding difference in someone else's contrast
implementation, would drop it below AA with no warning.

| Line | ink before | after |
|---|---|---|
| BR Wenhu | `#A06C21` — 4.50 | `#9C6920` — 4.71 |
| O Zhonghe–Xinlu | `#A06B07` — 4.56 | `#9B6707` — 4.84 |
| Y Circular | `#897600` — 4.51 | `#847100` — 4.84 |

The cost is a barely perceptible darkening of three accent colours. Validation
still uses the real 4.5, so the margin can never mask a genuine failure —
`npm run palette` exits non-zero on anything below AA.

Future lines already have assigned colours (e.g. Wanda–Zhonghe–Shulin is light
green, coded LG). Add the code to `DISPLAY_ORDER` in `lib/lines.ts` once TDX
publishes the line record; everything else derives.

### Applying line colour

- Each page takes its accent from its line, set in frontmatter.
- Colour belongs on badges, rules, and headers — **not body text**. `#F8B61C`
  (orange) on white fails contrast requirements badly; brown and green are
  borderline at small sizes.
- Always pair colour with the letter code. Roughly 1 in 12 men has some colour
  vision deficiency. **Which colours actually confuse is measured below — the
  answer is not the one this document assumed.**

### Which line colours actually confuse — measured

**Superseded.** This document said in two places that "brown, orange and red
are exactly the confusable set". That was asserted from general knowledge about
colour deficiency, never measured against these seven specific colours, and it
is **wrong in both directions**: it names a pair that never confuses and misses
the pair that confuses worst.

Measured with `npm run cvd` — Brettel (1997) two-plane dichromat simulation,
differences in CIEDE2000. Both instruments are verified before use: CIEDE2000
against the Sharma, Wu & Dalal (2005) test vectors (worst error 4×10⁻⁵), and
the simulation against the requirement that it leave the achromatic axis
untouched.

| Pair | Normal | Protanopia | Deuteranopia | Tritanopia | Verdict |
|---|---|---|---|---|---|
| **BL / A** blue vs purple | 21.6 | **2.5** | 4.9 | 35.0 | **Indistinguishable.** The worst pair on the network. |
| **BR / R** brown vs red | 31.0 | 21.1 | **6.8** | 17.1 | Unreliable under deuteranopia. |
| **O / Y** orange vs yellow | 16.7 | 11.6 | **8.6** | 12.2 | Unreliable under deuteranopia. |
| **G / BL** green vs blue | 42.8 | 47.1 | 38.3 | **4.0** | Unreliable under tritanopia. |
| BR / O brown vs orange | 16.3 | 16.3 | 16.2 | 15.5 | **Never confusable.** |
| R / O red vs orange | 42.4 | 40.6 | 22.5 | 27.3 | **Never confusable.** |

So of the three pairings the old claim implies — brown/orange, brown/red,
red/orange — **only brown/red is real**, and only under deuteranopia. Orange is
comfortably separable from both, because it is far lighter: the L/M confusion
that collapses hue leaves the luminance difference intact.

What the claim missed is worse than what it got wrong. **Bannan `#0A59AE` and
the Airport MRT `#8246AF` collapse to ΔE 2.5 under protanopia** — the same
colour, for practical purposes. Purple is blue plus red, so removing the red
response leaves blue. And **green against blue fails under tritanopia**, which
the old framing did not consider at all because it only thought about the
red–green axis.

**The general lesson, which does survive:** colour must never carry meaning
alone. The specific lesson is narrower and sharper — *guessing which colours
confuse is unreliable even when the guess sounds professional.* Brown, orange
and red is the textbook answer. It is not this palette's answer.

### The mitigation, and why the badge alone is enough here

`/train/network/` draws all seven lines at once and was, until this was
measured, distinguishing them by colour alone. Each line now carries its code
badge at both ends of its longest run, and the network table identifies lines by
the same badge rather than a colour swatch.

Stroke patterns — dashing or dotting the confusable lines — were considered and
rejected. They would degrade the map for every reader to solve a problem for
some, they would collide with the convention that a dashed transit line means
*under construction*, and they would introduce a second visual vocabulary for
line identity when the badge system already is one.

One caveat worth recording: CIEDE2000 was fitted to small uniform patches, and
map strokes are 5 px wide, where chromatic discrimination is *worse* than the
standard observer. The figures above are therefore optimistic for the map
specifically. That argues for the text label, not against it.

**The derived inks are far more confusable than the map colours** — BR/O inks
sit at ΔE 0.7 under tritanopia — because darkening every ink to ~4.7:1 on white
compresses them into one narrow luminance band. This costs nothing today: a
page carries exactly one accent, so two inks are never seen together, and the
one page listing all seven shows them as hex strings in a table with names
attached. It would start costing something the moment ink colour is used to
distinguish two lines in the same view. Recorded so that is a decision rather
than an accident.

---

## 2. Station codes — the signature device

Format: line code + zero-padded number. `BR01` Taipei Zoo through `BR24` Taipei
Nangang Exhibition Center.

Introduced 2016, replacing an older numeric scheme, explicitly to help
non-Chinese-reading passengers navigate.

This is the site's best candidate for a signature element:

- Coloured badge, monospaced or tabular figures, consistent everywhere a station
  is named
- Interchange stations carry multiple badges — visually encodes the transfer
  without needing prose
- Nothing else in the English-language Taipei transit space uses these
  systematically. LTG's equivalent move is its route number badges.

---

## 3. Typography

### What the MRT actually uses

**Cast**, by Dominique Kerber (Serpentype, Zurich) — adopted by most Taiwanese
urban rail systems since 2022. Designed specifically to work at both text and
signage sizes, with open apertures and a wide weight range.

**Licensing problem:** Cast is a commercial retail font. Web use requires a paid
licence. Options:

1. Licence it — most authentic, costs money
2. Find a close open substitute and document the choice
3. Use Cast only for the wordmark (a single static SVG needs no webfont licence
   in most terms, but check) and an open face for everything else

### Chinese text

Noto Sans TC is the practical open choice for Traditional Chinese. It ships
self-hosted and subset to only the Han characters the site actually uses — a few
KB rather than the ~61 MB of the full family — so "practical" holds even though
the site is English-language and Chinese appears only in proper nouns.

#### Optical sizing — measure it, don't assume the direction

**Superseded.** This section previously said Han characters need to sit slightly
*larger* than Latin at the same nominal size or they read as too small. That is
the common advice, and it holds against Latin faces whose cap height is tall
relative to the em. **For the pairing this site actually uses it is wrong, and by
a wide margin.**

Measured ink heights, as a fraction of the em:

| Face | Measured | Fraction of em |
|---|---|---|
| Noto Sans TC 400 | Han glyph, mean of the characters in use | 91.7% (range 87.5–94.4) |
| Noto Sans TC 700 | Han glyph, same characters | 93.8% |
| Inter 400 | cap height (H) | 72.8% |
| Zilla Slab 700 | cap height (H) | 65.0% |

At `size-adjust: 100%` a Han glyph is therefore already **1.26× the height of a
capital H** in body text, and **1.44×** in a heading. Han does not read small
here — it looms.

Two independent causes, both worth carrying forward:

- **Noto Sans TC fills the em box.** Han glyphs occupy roughly 92% of it, because
  a CJK face has to work in dense grid setting where characters sit on a fixed
  square. Latin lowercase occupies not much more than half the em, so the same
  nominal size produces very different apparent sizes.
- **Zilla Slab has a short cap height** — 65.0% of the em against Inter's 72.8%.
  This is why headings need a far bigger correction than body text: the cause is
  a property of the *Latin* face, not of headings being large. Swap the display
  face and the heading value changes; the body value does not.

Shipped values, applied to the Han face only:

| Context | `size-adjust` | Puts Han at |
|---|---|---|
| Body — Inter 400 | 94% | ~1.18× cap height |
| Headings — Zilla Slab 700 | 82% | ~1.18× cap height |

Han stays deliberately *larger* than the Latin cap — it is stroke-dense and needs
the room — just no longer towering over it.

**Body stops at 94% rather than going lower for a legibility reason, not an
optical one.** The smallest Chinese on the site is a 14.5px table cell; 94%
leaves about 12.5px of ink for 16-stroke characters like 機, and below roughly
12px those strokes begin to merge on a phone. Headings have no such floor, so
they take the full correction.

The general principle survives — pair deliberately and match optical sizes. What
does not survive is assuming which direction the correction runs. Run
`npm run metrics` to re-derive these values from the actual font files if either
typeface changes.

### Ongoing change worth noting on the site

TRTC has been running a two-phase signage revision:
- From June 2023, Japanese and Korean added at 21 tourist-heavy stations
- Second phase moves station names to bolder weights, specifically for elderly and
  dementia-affected passengers

That's a genuinely interesting bit of accessibility design history and thin in
English — a candidate article in itself.

---

## 4. Dot matrix LED — the bus half of the identity

Taipei's buses carry amber/red LED destination signs. Character grids are
typically 16 dots high; Latin-only variants run narrower cells (7×9 and similar).
Traditional Chinese needs the full 16×16 to stay legible, which is why the
displays have their characteristic chunky, low-resolution look.

### How to use it without wrecking readability

Dot matrix is **atmosphere, not body text.** Spend it in exactly one place.
Candidates, best first:

1. **Site wordmark** — "TAIPEI TRANSIT GUIDE" rendered as a destination blind
2. **Bus page headers** — route number in LED style, mirroring the real vehicle
3. **A "last updated" strip** — scrolling-blind styling for page metadata

Do not set navigation, tables, or prose in it.

### Implementation notes

- The look is achievable in pure CSS for short strings: a tight grid of
  `border-radius: 50%` cells, or a repeating radial-gradient overlay masked to
  the text
- Amber on near-black is the authentic palette; true LED amber sits around
  `#FFB000`
- Google Fonts carries DotGothic16, a 16-dot bitmap-style face — worth evaluating,
  but confirm Traditional Chinese coverage before relying on it, since it was
  designed for Japanese
- Respect `prefers-reduced-motion` if anything scrolls

---

## 4a. The octolinear schematic — DEFERRED, not abandoned

A Beck-convention octolinear network diagram (all segments horizontal, vertical
or 45°, even station spacing, straightened for legibility rather than accuracy)
belongs on this site. It answers "how do I get from here to there", which the
geographic map does not — that one answers "where are the lines actually".

**Why it has not been built.** Not difficulty in the abstract: a specific,
concrete blocker. Twenty-six interchanges must land on coincident points across
seven lines. Octolinear layout is a constraint-satisfaction problem, and every
published approach relies on iterating against the rendered result. Producing it
without being able to see the render means hand-solving a 26-constraint jigsaw
blind, and the failure mode is a diagram that is subtly wrong in ways only
visible to someone looking at it. A bad schematic is worse than no schematic,
because people trust diagrams.

**The tractable route when it is picked up.** A hand-authored topology file —
runs of `{line, from, direction, stations}` — rendered by code, reviewed over two
or three iterations with someone who can see the output. Not automatic
octolinearisation from coordinates.

**What is deliberately not the answer:** copying, tracing or closely imitating
TRTC's official map. It is copyrighted. The octolinear *convention* is a design
language anyone may use; that operator's specific arrangement is not.

A single-line octolinear diagram for Wenhu alone is tractable — one line has no
coincidence constraints — but the strip map beside the prose already answers
station order for a single line, so it would be a second device doing the first
one's job.

---

## 5. Direction summary

Light background, dense and scannable, LTG-style information density.

Line colour supplies the accent, station code badges are the signature, and dot
matrix appears once as the bus-side counterpoint. Everything else stays quiet —
the colour system is doing enough work already.

The risk to avoid: applying every element at once produces a novelty site rather
than a reference. Pick the badges as the memorable thing and hold the rest back.

---

## Sources to verify against

- TRTC official route map — canonical colour sampling
- DORTS signage system pages (english.dorts.gov.taipei) — design principles
- TRTC news releases — signage font change programme
- Serpentype — Cast licensing terms
