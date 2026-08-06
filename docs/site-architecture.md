# Site architecture — full scope

Structure for the site beyond v1, with research behind each section so the shape
is informed rather than guessed.

**This defines structure. It does not authorise creating pages.** Build one
finished page of each type before creating others — a proven template is worth
more than a hundred stubs.

---

## Top-level structure

```
/rail
/bus
/bike
/gondola
/ferry
/ticketing
/data          exists
/about         exists
```

Rationale for `/rail` over `/train`: the network includes light rail (Danhai,
Ankeng), conventional rail (TRA) and high speed rail. "Train" reads oddly across
all of them.

---

## /rail

```
/rail/lines
/rail/rolling-stock
/rail/depots
/rail/stations
/rail/systems        signalling, power, guideway, automation
/rail/operators      TRTC · NTMC · TYMC · TRA · THSR
```

### Lines to cover

| Operator | Lines |
|---|---|
| **TRTC** | Wenhu, Tamsui–Xinyi, Songshan–Xindian, Zhonghe–Xinlu, Bannan |
| **NTMC** (New Taipei Metro) | Circular Line, Danhai LRT, Ankeng LRT |
| **TYMC** (Taoyuan Metro) | Airport MRT |
| **TRA** | Western Trunk Line, Yilan Line through the region |
| **THSR** | Taipei · Banqiao · Nangang |

The `/rail/systems` section is unusual and worth having. Taipei runs **two
incompatible medium-capacity systems, three signalling generations, both
rubber-tyred and steel-wheel, and both third-rail and overhead**. Nothing in
English explains why.

---

## /bus — and the joint network is the important page

### The structural fact most English sources miss

Taipei's city buses run as **聯營公車 — a joint operation system**. Multiple
private companies operate under one fare structure, one route numbering scheme
and one brand. To a passenger it looks like a single network. It is not.

**This deserves a top-level explainer page**, probably more valuable than any
individual route page.

```
/bus/network         the joint operation system, fares, numbering
/bus/operators
/bus/routes
/bus/models          vehicle types across operators
/bus/garages
```

### Operators identified

Taipei joint-operation and regional operators, with English names where used:

| Chinese | English |
|---|---|
| 首都客運 | Capital Bus |
| 大都會客運 | Metropolitan Transport Corporation (MTC) |
| 三重客運 | Sanchong Bus |
| 大南汽車 | Danan Bus |
| 光華巴士 | Kuanghua Bus |
| 指南客運 | Zhinan Bus |
| 中興大業巴士 | Zhongxing Bus |
| 欣欣客運 | Shinshin Bus |
| 東南客運 | Southeast Bus |
| 台北客運 | Taipei Bus |
| 新北客運 | New Taipei Bus |
| 新店客運 | Sindian Bus |
| 淡水客運 | Tamshui Bus |
| 大有巴士 | Citiair Bus |
| 基隆客運 | Keelung Bus |
| 福和客運 | Fuho Bus |
| 泰樂客運 | Taile Bus |
| 皇家客運 | Royal Bus |
| 國光客運 | Kuo-Kuang |
| 統聯客運 | UBus |

**Corporate structure matters and is poorly documented.** In December 2010
Capital Bus chairman Li Po-wen took **7 of 11 board seats at Metropolitan
Transport** with a combined 52.5% holding, beating the four government-held
seats — MTC having been privatised in 2004. The two operate independently but
cooperate. **Ownership relationships across Taipei's operators are a genuine
research topic and completely absent in English.**

### Route numbering — needs its own explainer

The system encodes meaning that nothing explains in English: 0南/0東 (directional
suffixes), 區間車 (short-working), 副線 (branch), plus the 1xx/2xx/3xx bands, red
/green/blue/brown named routes, 幹線 trunk routes, 小 minibus routes, and 9xxx
national highway coaches.

### Vehicle models

Fleet lists exist for most operators via enthusiast sources (配車表). Known
procurement threads worth following: Daewoo standard-chassis and low-floor buses
from 2010–11; **Foton hybrid low-floor buses from September 2011**, MTC being the
third Taipei operator to adopt them. Electric bus adoption since is a major
current story.

---

## /bike — YouBike

Strong candidate for early build. TDX carries station data, the history is
genuinely interesting, and English coverage is thin.

```
/bike/history
/bike/generations     1.0 · 2.0 · 2.0E · the China-market variant
/bike/stations
/bike/operator        Giant / Microprogram
```

### Timeline

| Date | Event |
|---|---|
| 2009 | Pilot scheme, Xinyi District, Taipei |
| 15 Jan 2020 | **YouBike 2.0 launched**, three-month trial around Gongguan MRT and NTU |
| Sept 2020 | NTU subsidises 2.0 use to reduce private bikes on campus |
| Early 2021 | Taipei re-contracts; Beitou, Shilin, Neihu, Nangang prioritised |
| **8 May 2021, 10:20** | 2.0 enters full service, 160 stations added |
| 28 Sept 2021 | 400 remaining 1.0 stations to be kept to year end, with 2.0 docks placed nearby |
| 14 Oct 2021 | **200 million cumulative rentals** in Taipei |
| **3 Dec 2022** | **YouBike 1.0 formally retired in Taipei** |
| 30 Aug 2024 | **1,500 YouBike 2.0E e-bikes** enter service across Taipei and New Taipei |

### The technical story

**1.0 and 2.0 are incompatible systems** — the city had to warn people to check
which dock they were returning to. The key difference: **2.0 docks need no
electricity**. No road excavation, no Taipower connection, so stations can go
almost anywhere. Intelligence moved from the dock to an onboard unit.

2.0 also brought QR-code hire, more intuitive saddle adjustment, and an onboard
lock removing the need to keep a key for temporary stops.

**2.0E**: high-capacity lithium battery, up to **80 km** on the flat at full
charge, Giant's mid-mounted motor system.

**A genuine oddity worth a paragraph:** Giant (Kunshan) developed a separate
"YouBike electric assist bike" for Putian, China — based on the Giant MIYA E+ —
which **uses YouBike 1.0 docks**, so it has no compatibility problem. Fifty were
deployed on Meizhou Island on 16 October 2020. Three power modes, ~80 km range,
3-speed internal hub, handlebar dashboard instead of an onboard unit.

Retired 1.0 bikes were transferred to city agencies, sold to outside bodies, or
sold through Taipei's second-hand goods site. Each bike costs roughly NT$10,000
because they're built for heavy use.

---

## /gondola — Maokong

TRTC-affiliated, part of the network, and English coverage is entirely
tourist-oriented. The engineering and incident history are untouched.

```
/gondola/system
/gondola/stations
/gondola/cabins
/gondola/history
```

### Facts

| Field | Value |
|---|---|
| Opened | **4 July 2007** |
| Length | **4.03 km** |
| Stations | 4 |
| Operator | Taipei Metro's recreation subsidiary (北捷遊憩) |
| Manufacturer | **POMA (France)** |
| Contractor | 春原營造 |
| PM / supervision | CECI Engineering |
| Planning | Taipei City Department of Transportation |
| Construction | Taipei City New Construction Office |
| Cabin capacity | 640 kg / 8 passengers |
| Crystal cabin capacity | **5 passengers** (glass floor weighs 213 kg) |

**Status:** Taipei's first tourist cable car, Taiwan's longest, and the first with
a public transport character.

### The T16 closure — the real story

**24 September 2008:** Typhoon Jangmi caused **severe foundation loss at tower
16**. Four professional engineering institutes — civil, structural,
geotechnical, and soil and water conservation — assessed it. Service was
suspended.

**It did not reopen until March 2010.** Roughly eighteen months.

Reopening detail:
- 21 March 2010 — reopening rules published
- 28 March 2010 — six-day free-ride period ends, **102,000 people carried**
- 7 April 2010 — **tower T15 tilt monitoring alarm**, subsequently confirmed a false alarm
- 9 April 2010 — 100,000 cumulative riders in the first week
- 9 April 2010, 20:09 — cable detection alarm, **4 min 5 sec stoppage**, no passengers trapped, normal service by 20:50
- 29 April 2010 — 270,000 cumulative

**2 Nov 2010:** twenty **"Eyes of Maokong" crystal cabins** entered service —
numbers 1–10 and 138–147, so one roughly every five minutes. Floor is three
layers of tempered glass, **~48 mm total, 213 kg**, installed under supervision
from SIGMA (POMA's cabin manufacturer), CE certified.

Maintenance: closed the first Monday of each month except when a public holiday.

---

## /ferry — Blue Highway

Small but real, and part of the TPASS fare zone, which most English sources
don't realise. Tamsui–Bali, Tamsui–Fisherman's Wharf, Dadaocheng.

---

## /ticketing — high-value, badly covered in English

```
/ticketing/easycard
/ticketing/ipass
/ticketing/tpass
/ticketing/fares
```

### TPASS — the story is more interesting than it looks

**TPASS 行政院通勤月票** is an Executive Yuan programme. The T is officially
glossed as Taiwan, Transport, Together, Tour and Trust.

**The Taipei-region product is 基北北桃1200都會通** — Keelung, Taipei, New Taipei
and Taoyuan, NT$1,200 for 30 days, unlimited.

| Date | Event |
|---|---|
| 18 May 2023, 11:00 | TPASS card pre-orders open at four convenience store chains and Books.com. First run 20,000 cards, NT$100 each |
| 15 June 2023 | Card collection begins; monthly pass pre-orders open at MRT stations |
| **1 July 2023** | Service starts |
| 30 June 2023 | The predecessor 雙北1280 pass withdrawn from sale |
| 2 Oct 2023 | Second phase adds Taoyuan–Hsinchu–Miaoli, Yilan, Hualien, Taitung zones |

**Coverage** is broader than the pass it replaced. The old NT$1,280 pass covered
Taipei and New Taipei metro, city buses, YouBike, and the Danhai and Ankeng light
rail lines. The NT$1,200 pass **adds TRA, national highway coaches, intercity
buses, Taoyuan Airport MRT, and the Blue Highway ferries** — for less money.

**A detail worth stating plainly:** the NT$100 card fee is fully refunded by the
government on real-name registration, so the card is effectively free. The pass
also works on any existing EasyCard — the TPASS card is not required. English
sources routinely get this wrong.

The TPASS card is a **SuperCard**, allowing purchase and renewal in the EasyWallet
app rather than at a machine.

**Caveat:** one card holds one pass type, which is why switching from 1280 to
1200 required a refund first.

---

## Build order

1. Finish Wenhu completely. It is the template for every line page.
2. **YouBike** — self-contained, good story, TDX data available, no dependency on
   the rail work.
3. **Maokong Gondola** — small, bounded, genuinely uncovered.
4. **The joint bus network explainer** — one page, high value, no fleet churn
   problem.
5. **Ticketing** — reference material people actually search for.
6. Then bus operators, then routes, then models.

Buses are last deliberately: fleet churn and messy data, per the original v2
note. The network and numbering explainers carry most of the value and don't
suffer from churn.

---

## Sources

Taipei PTO; MOTC Highway Bureau operator registry; zh.wikipedia (MTC, YouBike,
Taipei public bicycle system, Maokong Gondola); Taipei City Government gondola
FAQ; TRTC press releases; UDN, Future City, Roo.Cash on TPASS; Cool3c and Taiwan
Excellence on YouBike 2.0.

**Mostly secondary.** Primary sources exist for most of this — TRTC and PTO
publish directly — and should be preferred when these pages get written.
