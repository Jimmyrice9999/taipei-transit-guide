# Run 7 plan — the research corpus, and the flatness

Written before building, critiqued below, then built. The brief's Part 7 asks for
wireframes at 1440 and 375 for three things and a self-critique that names
anything generic. Both are here.

---

## The governing constraint, restated

**A device must encode information that is true, sourced, and not otherwise
visible.** Three tests, and a device has to pass all three:

1. **True** — every figure it draws traces to a citation already on the page, or
   it does not draw it.
2. **Not otherwise visible** — if the same fact is legible in the table two
   inches below, the device is a second copy, and a second copy of a fact is
   decoration with a data costume on.
3. **Degrades honestly** — where the underlying data is uncertain, the drawing
   shows uncertainty. A smooth line through a gap is a lie drawn at high
   resolution.

Everything below is argued against those three.

---

## What the research actually unlocked, and what it did not

The corpus is a lead file. Before planning any of this I verified the three
things the devices depend on directly against DORTS, because building a diagram
on an unverified table would put a research claim into an illustration, where
nobody reads a footnote — which is precisely how Neihu Depot ended up drawn at
the wrong end of the railway for four builds.

| Claim the device needs | Verified? | Where |
| --- | --- | --- |
| Per-station engineering numbers, all 24 | **Yes, primary, verbatim** | DORTS 文山內湖線 station table |
| Per-station exit counts, all 24 | **Yes, primary, verbatim** | same table |
| BR13/BR14 the only underground stations | **Yes, two primary** | DORTS 文山內湖線 + DORTS 車站建築設計 |
| 3.9 km of underground running | **Yes, primary** | DORTS 文山內湖線 |
| The 1993 incident is 輪胎起火意外事故 | **Yes, primary** | DORTS 文山內湖線 |
| BR01 → Circular South Ring | **Yes, primary** | DORTS 環狀線北環及南環 |
| BR15 → Circular North Ring | **Yes, primary** | same |
| BR22 → Xidong Line | **Yes, primary** | New Taipei DORTS 汐東捷運 |
| Tunnel portal chainages | **No. No source at all.** | — |
| Per-station structure on any line except Wenhu | **No.** | — |

The last two rows govern two decisions below: the elevation profile draws the
portals as uncertain rather than placing them, and it is built for Wenhu only.

---

## 3A — the elevation profile

### What it draws, and from what

Horizontal axis: `CumulativeDistance` from TDX, per station, 0 to 25.17 km. That
is official data already committed to this repository and already the source of
the route length on the page. **The horizontal axis is not drawn by hand and
cannot drift from the registry.**

Vertical axis: three bands — elevated, at grade, underground — from
`lib/station-overlay.ts`, which is where structure already lives.

### The uncertainty, and why it is the interesting part

DORTS gives the Neihu section as 14.8 km with 3.9 km underground and two
underground stations. The two underground stations are 2.58 km apart by TDX's own
cumulative distances (BR13 at 11.97, BR14 at 14.55). So:

```
3.90 km underground  −  2.58 km between the two underground stations
= 1.32 km of ramp and portal, split between the BR12→BR13 approach and the
  BR14→BR15 exit in a proportion NO SOURCE GIVES.
```

So the profile draws the 2.58 km between BR13 and BR14 as a solid underground
run, and the 1.32 km as **two hatched wedges of unknown split**, with the total
labelled. A reader sees exactly what is known and exactly what is not, and the
arithmetic is printed under the drawing so they can check it.

That is better than the alternative — placing the portals where the prose implies
and drawing a clean line — and it is the whole reason to build this rather than
write a sentence.

### Wireframe, 1440

```
┌─ THE LINE IN SECTION ───────────────────────────── 25.17 km, BR01 → BR24 ──┐
│                                                                             │
│  ELEVATED   ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄╲             ╱▄▄▄▄▄▄▄▄▄▄▄▄▄  │
│                                                ╲___________╱                │
│  AT GRADE   ·············································· (none on this line)│
│                                                                             │
│  UNDERGRND                                    ▓▒▒▒▒▒▒▒▒▒▒▓                  │
│                                               ↑           ↑                 │
│                                              BR13       BR14                │
│                                                                             │
│  ┆    ┆   ┆    ┆  ┆    ┆  ┆   ┆  ┆  ┆   ┆  ┆  ┆      ┆  ┆  ┆ ┆  ┆ ┆  ┆ ┆ ┆  │
│  BR01                        BR12  BR13    BR14  BR15            BR24       │
│  0 km            5              10        15         20            25.17    │
│                                                                             │
│  ▓ underground, located   ▒ ramp, extent not established   ╲ portal          │
│                                                                             │
│  3.9 km underground in total (DORTS). 2.58 km of that is between BR13 and    │
│  BR14. The remaining 1.32 km is ramp at the two portals; no source divides   │
│  it, so it is drawn as unplaced.                                            │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Wireframe, 375

Same drawing, not a different one. The band heights and the station tick rail
survive; the station code labels thin to the six that matter (termini, the two
underground, the two portals) and the rest keep their ticks and their accessible
names. The figure scrolls only if the caption forces it — the SVG itself is
`width: 100%` with a viewBox, like every other drawing on this site.

```
┌─ THE LINE IN SECTION ─────────────┐
│ 25.17 km · BR01 → BR24            │
│                                   │
│ ELEV  ▄▄▄▄▄▄▄▄▄▄▄╲     ╱▄▄▄▄▄▄▄▄  │
│ GRADE ·························   │
│ U/G             ▓▒▒▒▒▒▓           │
│                 ↑     ↑           │
│                BR13  BR14         │
│ ┆ ┆ ┆ ┆ ┆ ┆ ┆ ┆ ┆  ┆  ┆ ┆ ┆ ┆ ┆ ┆ │
│ BR01        BR12  BR14      BR24  │
│ 0     5     10   15   20    25.17 │
│                                   │
│ ▓ located ▒ extent not established│
│ 3.9 km underground in total…      │
└───────────────────────────────────┘
```

### Why not Tamsui–Xinyi

The brief names it as the only high-capacity line with all three structure types,
and it is the obvious second subject. **It cannot be built today**: no station on
the R line has a `structure` value, because nobody has sourced one. The research
file describes the alignment in prose — at grade at Guizikeng, elevated from the
embankment, underground after Minzu West Road — but "the line descends to grade
somewhere north of Beitou" does not assign a structure to R21 Qiyan.

Building it from the prose would mean inventing 28 station structures to make a
picture. The component is written to take any line; the R profile appears the day
its structures are sourced, and not before. That is in the handoff.

---

## 3B — the three numbering systems

Proposed before building, as asked.

### Assessment: yes to the registry field, no to hover, yes to a diagram

**Should the registry carry engineering numbers?** Yes. It is a per-station fact
from a primary source, exactly like `structure`, and it belongs in
`lib/station-overlay.ts` for the same reason: TDX does not publish it, it is
hand-maintained, and the generator already reports an overlay entry whose station
TDX does not recognise. Putting it anywhere else means a second registry.

**Should the strip map reveal them on hover?** No, and this is the one I want to
argue. Hover has no touch equivalent, and "mobile first, and the mobile answer is
not *hide it*" is a stated constraint. A toggle would work but costs a client
component and a second state for the site's most-used navigation device, to
surface a fact that is historical rather than navigational — nobody standing on a
platform needs the engineering number. The strip map's job is "where am I on this
line". Engineering numbers are not that.

**Is there a diagram that makes the inversion legible at a glance?** Yes, and it
is the reason to do this at all.

### The device: a crossing ladder

Two rails. The left rail is the line in operating order, top to bottom, BR01 to
BR24 — the same vocabulary as the strip map, same badges, same colour. The right
rail is the same 24 stations in **engineering** order. A hairline joins each
station to itself across the gap.

Where the two orders agree, the hairlines run parallel. Where they invert, they
cross. **The Muzha section draws a solid X. The Neihu section draws a ladder.**
The inversion is not described, it is visible, and it is visible because the data
is what makes the lines cross.

### Wireframe, 1440

```
┌─ TWO NUMBERINGS, ONE LINE ──────────────────────────────────────────────────┐
│                                                                             │
│   OPERATING                                              ENGINEERING        │
│   what the signs say                          what the drawings said        │
│                                                                             │
│   BR01 Taipei Zoo ─────────────╲                    ┌── BR1  Songshan Airpt │
│   BR02 Muzha ────────────────╲  ╲                  ╱                        │
│   BR03 Wanfang Community ──╲  ╲  ╲                ╱ ┌─ BR2  Zhongshan JHS   │
│   BR04 Wanfang Hospital ──╲ ╲  ╲  ╲              ╱ ╱                        │
│   BR05 Xinhai ──────────╲ ╲ ╲  ╲   ╲            ╱ ╱  ┌ BR3  Nanjing Fuxing  │
│    …                     ╲ ╲ ╲  ╲   ╲          ╱ ╱  ╱   …                   │
│   BR12 Zhongshan JHS ─────╲─╲─╲──╲───╲────────╱─╱──╯   BR12 Muzha           │
│   BR13 Songshan Airport ───╲─╲─╲──╲───╲──────╱─╯       BR13 Taipei Zoo      │
│  ─────────────────────────────────────────────────────────────────────────  │
│   BR14 Dazhi ──────────────────────────────────────────  B1  Dazhi          │
│   BR15 Jiannan Rd. ────────────────────────────────────  B2  Jiannan Rd.    │
│    …                                                     …                  │
│   BR24 Nangang Exhib. ─────────────────────────────────  B11 Nangang Exhib. │
│                                                                             │
│   Above the rule the two run in opposite directions. Below it they agree,    │
│   and the series is a different one. 松山機場 carries engineering BR1        │
│   although it is a Neihu-section station: it was added to the project in     │
│   2001, after the B series had been allocated. [DORTS]                      │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Wireframe, 375

The rails narrow; the right rail drops the English name and keeps the number,
because the station is already named on the left and the connector says which one
it is. The crossing survives because the crossing is the point.

```
┌─ TWO NUMBERINGS ─────────────┐
│ OPERATING        ENGINEERING │
│                              │
│ BR01 Taipei Zoo ──╲    ╱─BR1 │
│ BR02 Muzha ─────╲  ╲  ╱  BR2 │
│ BR03 Wanfang C.─╲╲  ╲╱   BR3 │
│  …               ╲╲ ╱╲    …  │
│ BR12 Zhongshan ───╲╱  ╲ BR12 │
│ BR13 Songshan ────╱    ╲BR13 │
│ ──────────────────────────── │
│ BR14 Dazhi ───────────── B1  │
│ BR15 Jiannan Rd. ─────── B2  │
│  …                       …   │
│ BR24 Nangang Ex. ─────── B11 │
└──────────────────────────────┘
```

### Where it lives

Its own page: `/rail/systems/station-numbering/`. Not the line page — this is a
cross-cutting fact about how Taipei numbers things, the `/rail/systems` section
exists for exactly that, and burying an original finding three quarters of the
way down a line page is how it stays undiscovered. The line page links to it in
one sentence, and every station page carries its own engineering number as a
fact row.

---

## 3D — the revised content page

### Wireframe, station page at 1440

The station code at platform-sign scale, because on a station page the code *is*
the identity, and the site already draws it — just small.

```
┌────────────────────────────────────────────────────────────────────────────┐
│ [ hero photograph, full width ]                                            │
│ credit line                                                                │
│ Home › Rail › Wenhu Line › BR13 Songshan Airport                           │
│                                                                            │
│  ┏━━━━━━━━┓                                                                │
│  ┃        ┃   Songshan Airport                                             │
│  ┃  BR13  ┃   松山機場                                                      │
│  ┃        ┃   Stop 13 of 24 · Songshan District · underground              │
│  ┗━━━━━━━━┛                                                                │
│   ~74px, the badge already exists — this is the same token set large        │
│                                                                            │
│ ┌─ BR · WENHU LINE 文湖線 ────────────────────────────────────────────────┐ │
│ │ POSITION   INTERCHANGE   DISTRICT    STRUCTURE    EXITS   ENGINEERING   │ │
│ │ 13 of 24   None          松山區       Underground  3       BR1          │ │
│ └────────────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────────┘
```

### Wireframe, station page at 375

```
┌──────────────────────────┐
│ [ hero photograph ]      │
│ credit                   │
│ Home › Rail › … › BR13   │
│                          │
│ ┏━━━━━━━┓                │
│ ┃ BR13  ┃                │
│ ┗━━━━━━━┛                │
│ Songshan Airport         │
│ 松山機場                  │
│ Stop 13 of 24 ·          │
│ Songshan District        │
│                          │
│ ┌─ BR · WENHU LINE ────┐ │
│ │ POSITION             │ │
│ │ 13 of 24             │ │
│ │ …                    │ │
│ └──────────────────────┘ │
└──────────────────────────┘
```

The badge shrinks to ~52px and moves above the name rather than beside it, so it
never competes with the title for a 375px measure. It stays large enough to read
as a sign rather than a label.

### Line page: one lead figure

The line page leads with its length, set large, immediately under the summary and
before the facts panel:

```
   25.17 km        24 stations       2 depots
   ─────────       ───────────       ─────────
   revenue length,   BR01 — BR24     Muzha · Neihu
   BR01 to BR24 [1]
```

Three figures, mono, ~46px, each carrying its citation. This is not a new fact —
all three are in the facts panel below — and that is the objection I have to
answer in the critique.

---

## 3C — the comparison devices, and what I cut

| Candidate | Verdict | Reason |
| --- | --- | --- |
| **Depot areas, proportional** | **Build** | 1.47 ha against 13.9 ha is a 9× range that reads as two numbers in two tables. And the largest depot on the network has no published area, which the drawing can *show* rather than hide. |
| **Station exit counts** | **Build** | Now primary. Eleven single-exit stations is a real accessibility characteristic of an elevated medium-capacity line, and it is currently nowhere on the site. |
| **Line lengths against each other** | **Build, but not as a device** | The network table already prints official and measured km side by side. Bars *inside* those cells cost no new furniture and add proportion. A separate chart would be a second copy. |
| **Fleet sizes** | **Cut** | Only Wenhu's two fleets have sourced numbers. Five of seven bars would be "not established", which is a chart of this site's gaps rather than of Taipei's railways. Revisit when the fleets are researched. |
| **Ridership** | **Cut** | One station has a figure (BR16, 27,427, December 2024, secondary). A comparison device needs a set. |

---

## 3F — index and scope pages

**Decision: lead with data, not with borrowed imagery, and not with a map.**

Against pulling a child page's photograph up to the index: the photograph would
be *about* one child, used to decorate the parent. A reader who clicks it expects
the thing in the picture. It is the section index equivalent of a stock photo,
and it pushes the links — which are the page's entire job — below the fold on a
phone. Run 6 rejected section-opener imagery on exactly this argument and it is
still right.

Against leading with a map: `/rail/lines/` would get the network map, which is
already the whole content of `/rail/network/`. Two pages, one picture.

**For leading with data:** an index of eight line pages can say something true
and useful in the space a photograph would take — how many stations, how many
km, how many of them this site has actually written up. That last number is the
honest one, it is computed from the content tree rather than asserted, and it
turns "these pages are barer" into "these pages are a status board."

```
┌─ LINES ────────────────────────────────────────────────────────────────────┐
│ Nine lines across three operators. One written up in full.                 │
│                                                                            │
│   9        1        158        216.6 km                                    │
│   lines    written  stations   route length, where published               │
│                                                                            │
│  BR  Wenhu Line              24 stns   25.17 km   ████████████ full page   │
│  R   Tamsui–Xinyi Line       28 stns   28.24 km   ██ scope statement       │
│  …                                                                         │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 3G — planned interchanges

**They should render, and they must not render like an open interchange.**

An open interchange is a coloured pill carrying the code on the other line. A
planned one gets no fill: an outlined pill in the neutral rule colour, carrying
the line's *name* rather than a station code — because the station code does not
exist yet, and printing one would be inventing data — plus the word "planned" in
the accessible name. Colour is not the distinguishing cue; fill, wording and
shape are, and it still reads correctly in greyscale and under every dichromacy.

```
   open      BR10  BL15  Zhongxiao Fuxing     ← solid pills, both real codes
   planned   BR22 ┆Xidong┆ Donghu             ← hollow pill, line name, no code
```

All three have primary sources; without one, this device does not draw.

---

## 3H — colour

**Position: the restraint is still right, and I am changing one thing.**

Adding line colour to comparison devices would mean colouring bars by line. On a
depot chart that means colouring by which line the depot serves — but the
comparison is *area*, and the line is not the variable. Colour there would encode
nothing, which is the definition the brief itself set.

The one change: **the network page's line-length bars take their line's colour**,
because on that table the line *is* the variable, every row already carries its
code badge in the same colour, and the bar is a second reading of a row the badge
already identifies. That is colour restating an encoding that is already
redundant — which is the only safe way to use it here.

Everything else stays as it is.

---

## 3I — the device of my own

**The exit-count strip, promoted: "how many ways out".**

Not the comparison chart in 3C — a per-station consequence. Eleven of Wenhu's 24
stations have exactly one exit. That means: if that exit is closed, the station is
closed. It means one lift, one set of stairs, one escalator bank, one crowd. On
an elevated medium-capacity line built down the middle of a road, that is a
structural fact about how the line was built, not a trivia column.

The device: on the line page, the strip map's existing station rows carry a small
count. And a single sentence the site can now make and nobody else in English
can: *eleven of the twenty-four have one way in and out; the four interchanges
have five to eight between them.*

Argued from the material: this comes from the DORTS station table, which I
verified verbatim, and it exists in no English source. It is not a design
convention — no transit reference site draws exit counts — and it changes how a
reader thinks about the line.

---

# CRITIQUE OF THE ABOVE

Written after the plan, before building. Anything that reads as what I would
build for any reference site rather than for this one.

### 1. The three big numbers on the line page are generic, and two of them are a second copy

`25.17 km / 24 stations / 2 depots` set large is the KPI row every product
marketing page has had since 2014. Worse, by my own test 2: all three are in the
facts panel eight lines below. That is decoration wearing data's clothes, and I
wrote a rule against it at the top of this document.

**Revised.** One figure, not three, and it is the one the page is *about*: the
line's length, set large, **with the conflict attached**. The line page's best
material is that four numbers measure four different things. So:

```
   25.17 km   revenue length, BR01 to BR24 [1]
   ─────────
   also published as 25.7 (two projects added), 25.04 (this site's own
   measurement), 26.42 (the whole alignment, including depot leads)
```

Now the large figure is doing work no other element does: it states which of four
circulating numbers this site stands behind, and shows the other three losing.
That is this site's argument, set large. Not a KPI.

### 2. The elevation profile risks being a chart rather than a section drawing

My wireframe has an x-axis, a y-axis and a legend. That is a chart. A *section*
is a picture of the railway — the ground line is a real thing, the viaduct sits
above it, the tunnel below it, and the reader should recognise it as the side of
a hill with a railway through it.

**Revised.** Draw a ground line and put the structure relative to it, not three
abstract bands. Elevated is a deck above ground on piers; underground is a bore
below it; the portals are where the deck meets the ground. Keep the distance
scale — that is the informative axis — and drop the vertical axis labels
entirely, because the vertical is *not to scale* and pretending otherwise with
labelled bands would be the lie. Say "vertical not to scale" once, in the
caption, where it belongs.

### 3. "Two numberings, one line" nearly became a table with lines drawn on it

The crossing-ladder wireframe lists every station twice with its name. Twenty-four
rows twice is a table, and the brief explicitly said this deserves better than a
table.

**Revised.** The right rail loses names entirely, at every width. It carries
engineering numbers only. The point of the right rail is its *order*, and a name
on it invites reading it as a second station list. Names live once, on the left.
The connectors do the identifying.

And the table of all 24 pairings still gets published — below the diagram, as the
evidence. The diagram is the argument; the table is the appendix. Not the other
way round.

### 4. The index-page "status board" is at risk of measuring the wrong thing

`1 of 9 written` is honest, and it is also a metric that makes the site look
worse the more lines it adds a scope statement for. A number that punishes honest
scoping is a bad number.

**Revised, mildly.** Keep the count, drop the progress bars. Bars turn a status
into a score. A word per row — *full page* / *scope statement* — says the same
thing without implying that a scope statement is 15% of a page. It is not a
partial page; it is a different, complete thing, and run 5 argued that properly.

### 5. The exit strip is the strongest idea here and I had it as a footnote

I ranked it under 3I as "my own device" while giving the top slot to a
proportional depot chart, which is the more conventional piece of work. The exit
count is the thing no English source has, it is primary, it is per-station, and
it changes how the line reads. It goes on the line page as prose *and* on every
station page as a fact, and it feeds the strip map.

The depot chart stays — it earns its space — but it is the smaller idea and the
plan should have said so.

### 6. What I am not doing, having thought about it

- **No animation of any kind.** Not proposed, and recording that it was not
  considered: nothing here changes over time.
- **No interactive toggle on the strip map** (argued in 3B).
- **No colour beyond the one network-table change** (argued in 3H).
- **No fleet-size or ridership comparison** (argued in 3C).
- **No Tamsui–Xinyi profile** (argued in 3A) — the component takes any line, the
  data does not exist, and inventing 28 structures to fill a picture is the exact
  failure this site was built to avoid.
