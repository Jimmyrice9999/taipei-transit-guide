# Systems — signalling, power, structure, automation

**Version 1.0 — 6 August 2026**  
**Status: research. Not published. Verify before promoting to content.**

The `/rail/systems` section. This is the page that explains *why* Taipei's network
is the way it is.

**Not published. Verify before promoting to content.**

---

## The framing

Taipei's network was built **project by project**, each with its own name, budget,
contractor and systems supplier. Nothing was standardised across the whole
programme.

The consequences are visible everywhere and nobody explains them in English:

- **Two incompatible medium-capacity systems on a single line** — Matra VAL and
  Bombardier CITYFLO 650, both on Wenhu
- **A third medium-capacity system** on the Circular Line (Hitachi)
- **Steel-wheel high-capacity** on four TRTC lines
- **Light rail** on two New Taipei lines
- **Rubber tyres and steel wheels** in the same network
- **Three operators** — TRTC, NTMC, TYMC — with different rolling stock, ticketing
  arrangements and control centres
- Station numbering that starts and stops in disjoint ranges
- Lines whose construction project boundaries don't match their operating boundaries

**This is the single most valuable explainer the site could carry**, because every
individual oddity on every other page traces back to it.

---

## Signalling

### Wenhu — two generations on one line

| System | Section | Notes |
|---|---|---|
| **Matra SACEM / VAL** | Original Muzha | Fixed block, superseded |
| **Bombardier CITYFLO 650** | Whole line since 2009 | **Moving block CBTC** |

**The switchover happened on opening day.** The line changed to CITYFLO 650 on **4
July 2009** — the day the Neihu section opened — and the VAL256 fleet came out of
service **that same day**, not returning until **26 December 2010**.

The Neihu section's CBTC maintains train separation automatically and continuously
monitors all train positions — different from both the original Muzha system and
the high-capacity lines.

**Signalling life expires 2029.** That, not the trains, is the driver for the
renewal programme: the plan is signalling first, then rolling stock.

### The "拼裝捷運" critique

Taiwanese academic commentary called Wenhu a **拼裝捷運** — a bolted-together metro
— for running Bombardier signalling over infrastructure built for Matra's VAL. The
same criticism was made of Taiwan High Speed Rail as a Euro-Japanese hybrid.

**A key mechanism to state precisely:** Matra's native design was **two-car units**.
Taipei ran them **coupled as four**, and the control system was never fully
redesigned for that. Contributing factors to early lock-ups and brake dragging trace
back to this.

### High-capacity lines

CBTC-type moving block. **Generation-by-generation history is TBC** and is a real
gap — the four high-capacity lines opened across roughly 16 years and cannot all be
running the same generation.

### Circular and Sanying

Driverless (**GoA4** on Wenhu and Circular; **confirm for Sanying**). Circular Line
suppliers and signalling generation **TBC**.

### Airport MRT — the signalling failure that delayed a station by seven months

The **A22 老街溪** extension was due by end December 2022 and opened **31 July
2023**. The cause was **signalling integration failure between express and commuter
services** — reportedly express trains could only be routed into the extension by
**manually changing signals**.

**This is the same class of problem that delayed the main line's opening six times**,
more than six years earlier. The Airport MRT's skip-stop operation is unique in
Taiwan and its signalling has been its recurring weakness. Worth drawing out.

---

## Platform screen doors

Rollout was line-by-line and completion dates are a useful concrete timeline:

| Line | Completion |
|---|---|
| Songshan–Xindian main line | **April 2018** (reportedly) |
| Xiaobitan (G03A) | **September 2018** |
| Tamsui–Xinyi | **August 2018** — Fuxinggang last, completing in September 2018 |
| Bannan | **September 2018** — Tucheng station's half-height doors last |
| Circular Line | **Full-height throughout from opening** |

**The Circular Line's full-height doors have a knock-on effect worth noting:** because
the doors seal the platform edge completely, the inter-car connections on its trains
have **only gangway bellows and no anti-fall devices** — unlike TRTC stock, which
carries anti-fall plates.

**A design decision at the platform changing a design decision on the train.** That's
a good, concrete systems insight.

**2018 was the year platform doors were finished across the TRTC network** — worth
stating as a milestone.

---

## Structure types

Taipei is unusual in having all three on one network, and one line with all three
on its own.

| Type | Where |
|---|---|
| **Fully elevated** | Wenhu, Circular Line (West Ring) |
| **Fully underground** | Songshan–Xindian, Zhonghe–Xinlu, Xinyi section |
| **Mixed elevated / at grade / underground** | **Tamsui–Xinyi** — the only high-capacity line with all three |
| **Elevated + at grade** | Ankeng LRT (5 elevated, 4 at grade) |
| **Stacked / double-deck elevated** | **Circular Line in Zhonghe — Taiwan's first** (疊式高架車站) |

### The elevated-versus-underground argument, three times

| Line | Decision | Outcome |
|---|---|---|
| Songshan–Xindian | Redesigned **to fully underground**, Executive Yuan approval **20 May 1987**, on street-width and visual-impact grounds | Built underground |
| Wenhu | Stayed **elevated** | Drew exactly the criticism the Green Line change had avoided |
| Neihu extension | Alignment unresolved | **Delayed four years**; residents campaigned to change the system type entirely |

**The same debate, three times, three outcomes.** This is a cross-cutting article in
its own right.

---

## Running surfaces — a genuine engineering find

The Wenhu line has **two different running surfaces on the same route**:

| Section | Surface |
|---|---|
| **Muzha** | **Reinforced concrete** |
| **Neihu** | **Steel** (鋼製行駛路面) |

**Why:** northern Taiwan's wet climate made concrete maintenance difficult, so the
Neihu section was built with steel running surfaces following international practice.

**How it was made:** special section steel produced at the mill, **pre-bent
mechanically to the alignment's curvature**, rust-treated, then coated on the tyre
contact face with a **paint-and-filler traction mixture** to provide grip.

**This is one of the best pieces of material this project has found.** It's a
concrete engineering difference between two halves of one line, it explains itself
in a sentence, and it is entirely absent from English coverage.

**It also has an operational consequence:** the November 2025 expert review of
Wenhu recommended **revised maintenance standards for the steel running surface**
and **wet-weather speed reduction principles**, and flagged **water film slip**.

*Source: 李政安 & 蘇瑞文, 臺北捷運內湖線中運量系統概述 — an official DORTS
technical paper hosted by New Taipei DORTS. It was read in full in Run 243 and
its running-surface findings are published at
`content/rail/technology/wenhu-steel-running-surface.md`. The 2025 expert-review
lead above remains unverified and is not used as a current operating claim.*

---

## Power and electrification

**What's known:**
- **VAL256 draws 750 V** — reportedly through the **lateral H-section guide bars**
  themselves, roughly 200 mm above the running surface. **Verify: this is a
  defining characteristic and it's commonly stated wrong.**
- Traction substations at depots (Muzha has both a traction substation and a main
  substation)
- Both **third-rail and overhead** exist across the network

**Almost everything else is TBC:** high-capacity voltage and system, collection
method per line, LRT electrification, and whether the Circular Line and Sanying
differ.

**This is the biggest gap in the systems section.**

---

## Automation grades

| Line | Grade |
|---|---|
| Wenhu | **GoA4** driverless |
| Circular | **GoA4** driverless |
| Sanying | Driverless — **confirm grade** |
| High-capacity lines | ATO with crew — **confirm grade** |
| Danhai / Ankeng LRT | **TBC** |

**Formal GoA statements per line are TBC.** Worth getting right, since "driverless"
covers several quite different arrangements.

**One operational consequence worth carrying everywhere:** TRTC's general manager
黃清信 explained that Wenhu records more >5-minute delays **because it is
driverless** — with no crew aboard, station staff must be dispatched to the train,
so the same fault takes longer to clear. That's a fair and important caveat for any
reliability comparison.

---

## Control centres

- **Muzha Depot** houses the original Muzha line medium-capacity control centre,
  which became the Wenhu line's **backup control centre** after Neihu opened
- **Neihu Depot** handles traffic control for Wenhu
- Main network control centre location and arrangement: **TBC**
- NTMC and TYMC control arrangements: **TBC**

---

## Seismic design — and where it failed

**Design code:** the Circular Line was designed by **台灣世曦 (CECI)** to MOTC's
**2007 railway bridge seismic code**, nominally to withstand intensity **6-weak**.

**It was damaged at 5-strong** in the 3 April 2024 earthquake.

**The cause was construction non-conformity, not the code.** The tilt-adjustment
plate (調坡板) was milled **41 mm** — through to the girder's lower flange — instead
of the specified **5 mm**, leaving excess clearance beyond the ~40 mm pot bearing
pin. Under seismic load the pin jumped clear and the bearing failed. Repairs
replaced 32 bearings and added a **second anti-uplift line of defence**.

**Wenhu, also elevated, was undamaged** — concrete superstructure, different
bearing design, different-era standards.

**The correct conclusion is about bearings and construction conformity, not
materials.** Any systems page must say so, because the simple "steel versus
concrete" version is circulating and it's wrong.

---

## Still to research

- Signalling generation by high-capacity line
- Electrification specification, comprehensively
- Formal GoA grades
- Network control centre arrangements for all three operators
- **What TRTC's depot maintenance "Level 3" and "Level 5" actually mean** — the
  terms appear constantly and nothing defines them
- Track gauge per line (high-capacity is standard gauge; VAL and the LRT lines TBC)
- The 2007 seismic code and how it compares to current standards
- Fire and evacuation systems, given the 1993 Wenhu fire and the 2025 Circular Line
  walkway evacuation

## Sources

**Primary:** DORTS line project pages; TRTC press releases; Control Yuan report on
the Circular Line (11 March 2025).

**Primary-adjacent:** 李政安 & 蘇瑞文, 臺北捷運內湖線中運量系統概述 (New Taipei
DORTS) — the best technical source found and largely unexploited.

**Secondary:** zh.wikipedia; twstreetcorner academic blog (the 拼裝捷運 critique);
UDN (the bearing failure mechanism); GVM 城市學 (the Wenhu comparison).
