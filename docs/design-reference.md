# Design Reference — Taipei Transit Guide

Source material for the site's visual identity. Drawn from the Taipei MRT's own
design system rather than invented from scratch.

Status: research notes. Not yet implemented.

---

## 1. Line colours

The MRT's line colour system is the single strongest visual asset available, and
it's already how riders navigate the network. Use it as the site's palette rather
than choosing arbitrary brand colours.

| Line | Code | Hex | Source |
|---|---|---|---|
| Wenhu (Brown) | BR | `#C48C31` | Wikidata, cited to TRTC 2025 route map |
| Tamsui–Xinyi (Red) | R | `#E3002C` | en.wikipedia Module:Adjacent stations |
| Songshan–Xindian (Green) | G | `#008659` | en.wikipedia Module:Adjacent stations |
| Zhonghe–Xinlu (Orange) | O | `#F8B61C` | en.wikipedia Module:Adjacent stations |
| Bannan (Blue) | BL | `#0070BD` | en.wikipedia Module:Adjacent stations |
| Taoyuan Airport MRT | A | `#8E47AD` (commuter) | Wikidata |

**Accuracy caveat — verify before publishing.** These are community-sourced values,
not an official spec. The Wikipedia sandbox module carries different values for
several lines (BR `#9E652E`, R `#CB2C30`, G `#007749`), so at least one set is
wrong. DORTS states its signage system defines fixed Pantone, RGB and CMYK values
per line, but the spec is not published openly, and at least one designer writing
about the network has noted the official codes are not clearly identifiable in
public sources.

Action: sample the colours directly from TRTC's official route map PNG and treat
those as canonical. Document the method on the site so readers know where the
numbers came from.

Future lines already have assigned colours (e.g. Wanda–Zhonghe–Shulin is light
green, coded LG), so the palette needs to extend cleanly.

### Applying line colour

- Each page takes its accent from its line, set in frontmatter.
- Colour belongs on badges, rules, and headers — **not body text**. `#F8B61C`
  (orange) on white fails contrast requirements badly; brown and green are
  borderline at small sizes.
- Always pair colour with the letter code. Roughly 1 in 12 men has some colour
  vision deficiency, and brown/orange/red are exactly the confusable set.

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

Noto Sans TC is the practical open choice for Traditional Chinese. Pair it
deliberately with the Latin face and match optical sizes — Han characters
typically need to sit slightly larger than Latin at the same nominal size or they
read as too small.

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
