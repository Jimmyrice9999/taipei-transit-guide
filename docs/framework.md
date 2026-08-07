# Taipei Transit Guide — the framework

**Version 1.1 — last updated 7 August 2026 (run 7.1).**

*This document records intent and structure, and it goes stale silently — the
site changes every run and this file does not. Anything below that disagrees
with `docs/run-log.md` is out of date, and the run log wins. Update the date
line above whenever you touch this file, so the staleness is visible.*

The site structure, the rules that govern it, and where each research file maps.

Keep this as `docs/framework.md`. It's the thing to reread when scope creeps.

---

## The project in one paragraph

An English-language reference site for Taipei-region public transport, modelled on
Land Transport Guru (ltg.sg). The gap it fills: deep transit coverage exists in
Mandarin across zh.wikipedia, PTT, Mobile01, official operator and government sites
and railfan wikis, but **no structured English equivalent exists** beyond thin
Wikipedia stubs and tourist content.

**The value proposition is synthesis and accuracy, not original reporting.**

---

## The founding rules

These have held throughout and should keep holding.

**1. Depth over breadth.** One line covered thoroughly beats ten covered thinly. v1
is the Wenhu Line.

**2. Synthesise Mandarin sources, don't translate them.** Cite in the original
language with titles. Never reproduce wholesale.

**3. Never publish an unsourced fact.** TBC always beats a plausible number. The
build enforces this via the claims ratchet.

**4. Where sources conflict, publish the conflict.** Three different line lengths
turned out to be three correct measurements of three different things. That finding
is more valuable than picking one.

**5. Distinguish primary from secondary.** Operator, government, manufacturer and
court records are primary. News, wikis and enthusiast sites are secondary. A
citation *to* an official source is not the same as the source — the line-colour
episode proved that.

**6. Structured data comes from TDX; prose comes from research.** Station lists,
sequences, coordinates, interchanges, run times and bus routes are a data pull.
History, engineering and controversy are written.

**7. Build one finished page of each type before creating others.** A proven
template beats a hundred stubs. An empty section reads as abandonment; an honest
scope statement reads as discipline.

**8. Only CC or public-domain images, attribution build-enforced.** Citing is not
licensing.

---

## Site structure

```
/rail
  /lines             line pages
  /rolling-stock     fleet pages
  /depots            depot pages
  /stations          station pages
  /systems           signalling, power, structure, automation
  /operators         TRTC · NTMC · TYMC · TRA · THSR
  /history           narrative articles

/bus
  /network           the joint-operation system explainer
  /operators
  /routes            from TDX
  /models            vehicle types
  /garages

/bike
  /history
  /generations       1.0 · 2.0 · 2.0E
  /stations

/gondola             Maokong
/ferry               Blue Highway
/ticketing           EasyCard · iPass · TPASS · fares

/data                the published dataset section — already live
/about               sourcing policy and scope — already live
```

**Why `/rail` and not `/train`:** the network includes light rail, conventional rail
and high speed rail. "Train" reads oddly across all of them.

---

## Every line, and its research file

### TRTC

| Line | Code | Research file | Depth |
|---|---|---|---|
| Wenhu 文湖線 | BR | `wenhu-research-2026-08.md` + `wenhu-research-part2.md` | **Deep** |
| Tamsui–Xinyi 淡水信義線 | R | `tamsui-xinyi-line.md` | Good |
| Songshan–Xindian 松山新店線 | G | `songshan-xindian-line.md` | Moderate |
| Zhonghe–Xinlu 中和新蘆線 | O | `zhonghe-xinlu-line.md` | **Deep** |
| Bannan 板南線 | BL | `bannan-line.md` | Good |

### NTMC

| Line | Code | Research file | Depth |
|---|---|---|---|
| Circular 環狀線 | Y | `circular-line.md` | **Deep** |
| Danhai LRT 淡海輕軌 | V | `danhai-lrt.md` | Moderate |
| Ankeng LRT 安坑輕軌 | K | `ankeng-lrt.md` | Good |
| Sanying 三鶯線 | LB | `sanying-line.md` | Good — **page written, run 5** |

### TYMC

| Line | Code | Research file | Depth |
|---|---|---|---|
| Airport MRT 機場捷運 | A | `airport-mrt.md` | Good |

### Not yet open

`planned-lines.md` — Xinyi East Extension (opening this month), Wanda–Zhonghe,
Circular Line rings, Xidong, Keelung MRT, Sanying–Bade, Airport MRT extensions,
Danhai phase 2, Tucheng–Shulin, plus longer-term proposals and rejected schemes.

### Cross-cutting

| Subject | File |
|---|---|
| All fleets | `rolling-stock.md` |
| All depots | `depots.md` |
| Signalling, power, structure, automation | `systems.md` |
| Bus network, operators, models | `bus-network.md` |
| YouBike | `youbike.md` |
| Maokong Gondola | `maokong-gondola.md` |
| Ticketing | `ticketing.md` |
| Ferry | `blue-highway.md` — **good**: 261 lines, primary-sourced on the 2004 origin, the four operators and EasyCard integration |
| Design system | `design-reference.md` |
| Research prompt templates | `research-prompts.md` |
| Full scope and build order | `site-architecture.md` |

---

## Folder layout for `docs/`

```
docs/
  framework.md              ← this file
  design-reference.md
  site-architecture.md
  research-prompts.md
  run-log.md
  for-jamie.md
  research/
    rail/
      systems.md
      lines/
        wenhu-research-2026-08.md
        wenhu-research-part2.md
        tamsui-xinyi-line.md
        songshan-xindian-line.md
        zhonghe-xinlu-line.md
        bannan-line.md
        circular-line.md
        danhai-lrt.md
        ankeng-lrt.md
        sanying-line.md
        airport-mrt.md
        planned-lines.md
      rolling-stock/rolling-stock.md
      depots/depots.md
    bus/bus-network.md
    bike/youbike.md
    gondola/maokong-gondola.md
    ticketing/ticketing.md
    ferry/blue-highway.md
  drafts/
    matra-dispute.md
  screenshots/
  print/
```

Research paths mirror content paths, so it's obvious what's researched and what
isn't.

**There are 21 research files, not 25.** The table above previously counted
`design-reference.md`, `research-prompts.md` and `site-architecture.md` among
them; the first two are project documents that live at `docs/`, and the third has
never existed. `research-findings.md` was real and has been absorbed into the
per-line files — run 7.1 re-pointed every reference to it. The full per-file
index, with depth, best sources and stated gaps, is **`docs/research/INDEX.md`**.

Each research file may carry a `## Checked and failed` section recording claims
that have been verified and did not survive, so the same dead lead is not chased
twice. `npm run research` enforces that those entries carry a date and a reason,
and that a failed claim is not still asserted unqualified elsewhere in the same
file.

---

## What's built

- Live at `jimmyrice9999.github.io/taipei-transit-guide`
- Next.js, static export, GitHub Pages, auto-deploy on push
- Content as Markdown in `/content`
- Official line colours and station data from TDX
- Geographic maps generated from MOTC route geometry
- Station code badges, auto-detected and build-validated
- Citation infrastructure with archive mirrors
- 177 tests, 16 fact cross-checks, accessibility and browser verification
- 10 pages carrying CC-licensed photographs
- The Matra dispute article — the site's first original contribution

---

## What's published

**One article:** the Matra dispute, at `/rail/history/matra-dispute`.

**Five content pages:** Wenhu Line, VAL256, Innovia APM 256/C370, Muzha Depot,
Neihu Depot. Plus 24 Wenhu station pages, the network page, and the `/data` section.

**Everything else is a scope statement.** That's the honest position.

*As of run 7: also the station-numbering page at `/rail/systems/`, 14 of 24
station pages carry photographs, and every section index states how many of its
pages are written up versus scoped.*

---

## The publication queue

In order of value, not convenience. **Revised in run 7.1** — the previous order
is in `docs/run-log.md` §59.2 along with the argument for each change.

**1. Xinyi East Extension** — R01 opens end of August 2026. Time-critical.
**Do the primary-source pass first, then write.** The research on the extension
is zh.wikipedia-sourced and says so; deadline pressure is exactly what makes
people publish from a wiki.

**2. The joint bus network explainer** — *moved up from 9.* One page, primary
sources already in hand, no research pass needed, and it corrects something no
English source carries: 紅/綠/藍/棕 route prefixes are MRT line colours, and the
trunk network reuses green and blue to mean compass direction instead. The
site's wordmark is a bus destination blind and the bus section has been a scope
statement since run 1.

**3. Circular Line 403 earthquake** — the richest primary-source trail
available: a Control Yuan report, the bearing failure mechanism, a NT$1.927bn
claim, and a natural comparison against the undamaged Wenhu Line.

**4. Losheng Sanatorium and Xinzhuang Depot** — the second-best untold story,
and DORTS itself confirms the engineering was altered for preservation. Handle
as `zhonghe-xinlu-line.md` sets out.

**5. Zhonghe Depot** — *new.* The network's smallest depot, 1.47 hectares
including a passenger station, on a closed TRA station's site, so constrained
DORTS says it can only stable and clean. One primary source, one complete page,
and **the site currently has no page for it at all.**

**6. Maokong Gondola** — *new.* The crystal cabins (48 mm of glass, 213 kg,
five passengers instead of eight), the T16 foundation failure and the 18-month
closure, and suspension thresholds published as numbers.

**7. Ticketing: the two corrections** — *new.* You do not need a TPASS card, and
the NT$100 fee is refunded. Both are what visitors search for and both are got
wrong almost universally in English.

**8. YouBike** — self-contained, TDX data available, and the 2.0 dock design
decision is a genuine engineering story.

**9. The 2014 line naming transition** — short and self-contained. Partly told
already at `/rail/systems/station-numbering/`, which is where the 2014 and 2016
dates now live.

**10. Sanying station pages** — twelve of them, from the operator's own route
page. *Replaces "Sanying Line", which run 5 wrote.*

### Held back, and why

- **The C341 procurement.** A specific and embarrassing claim about a named
  company — a contractor forced to buy from a supplier it did not want, at 1.5×
  the price — resting on one encyclopedia. Off the list until it has a second
  source. By rule 5 it is not ready.
- **Airport MRT.** The arc *is* the article: six missed openings, a NT$7.2bn
  claim against Marubeni, now profitable and debt-free. Nothing found says
  whether the claim was ever settled, and an article that ends "a claim was
  announced" is half a story.

## Known open items

- ~~Three suspect claims in existing content flagged in run-log §17~~ — all
  corrected in run 3
- 32 statements on the site rest on no source (the ratchet only goes down)
- **10 of 24 Wenhu station pages have no photograph.** Fourteen have one as of
  run 7; a reviewed shortlist for the rest is at `docs/commons-candidates.txt`
- **Six** government sources need archive.today mirrors captured manually.
  Wayback now accepts `.gov.taipei` again — it was returning 523 in run 4 — so
  every cited URL has at least one archive
- The 2005 Supreme Court judgment is free via 司法院法學資料檢索系統 — not a purchase
- 商業周刊 445 (30 May 1996) is the one genuine purchase on the list

---

## The discipline to hold

Four consecutive infrastructure runs produced roughly thirty lines of tooling per
line of content. The tooling is excellent and it caught real errors — a false claim
about Bombardier and Adtranz, a depot drawn at the wrong end of the railway, body
text failing WCAG, a route length 1.25 km too long.

But **the site's value is the writing, and the writing is the part that can't be
automated.** The research is now extensive. The next thing that matters is
publishing from it.
