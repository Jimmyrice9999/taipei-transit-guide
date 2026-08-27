---
title: Taipei Metro signalling generations
summary: The published boundary between Taipei’s fixed-block high-capacity signalling and its later moving-block CBTC systems.
order: 5
updated: 2026-08-27
facts:
  - label: High-capacity signalling family
    value: Alstom (formerly GRS) conventional fixed block with audio-frequency track circuits
    source: dorts-high-capacity-signalling
  - label: Wenhu signalling family
    value: Bombardier CITYFLO 650 moving-block CBTC
    source: dorts-wenhu-cbtc
  - label: Circular and Sanying signalling family
    value: Hitachi CBTC, with unattended operation documented for the Circular Line and the same approach used on Sanying
    source: dorts-circular-cbtc
  - label: Complete current equipment-generation register
    value: TBC
specs:
  - label: High-capacity separation method
    value: Fixed block and audio-frequency track circuits
    source: dorts-high-capacity-signalling
  - label: Wenhu position/control basis
    value: Moving-block coordinate system with position updates at approximately 0.5-second intervals
    source: dorts-wenhu-cbtc
  - label: Circular location boundary
    value: CBTC location error no greater than 10 metres in the published design description
    source: dorts-circular-cbtc
sources:
  - id: dorts-signalling-introduction
    title: Practical signalling systems for Taipei Metro — introduction
    titleOriginal: 捷運號誌系統實務
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://ebook.dorts.gov.taipei/ebook/no22/files/basic-html/page21.html
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full introduction lists the staffed high-capacity corridors as traditional track-circuit signalling and describes Wenhu, Circular and Wanda as unmanned CBTC systems in the scope of the volume."
  - id: dorts-high-capacity-signalling
    title: Practical signalling systems for Taipei Metro — high-capacity main-line signalling
    titleOriginal: 捷運號誌系統實務
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://ebook.dorts.gov.taipei/ebook/no22/files/basic-html/page73.html
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full high-capacity signalling page names the R, G, O and BL network corridors, identifies Alstom (formerly GRS) as contractor, and specifies conventional fixed blocks with audio-frequency track circuits."
  - id: dorts-signalling-evolution
    title: Review and outlook of Taipei Metro electromechanical engineering — signalling evolution
    titleOriginal: 臺北捷運機電工程回顧與展望
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://ebook.dorts.gov.taipei/JRTST/ebook/no48/files/basic-html/page159.html
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full journal page describes the evolution from fixed-block track-circuit detection in the initial network to moving-block CBTC on Wenhu, including the Muzha-to-Neihu signalling update."
  - id: dorts-wenhu-cbtc
    title: Practical signalling systems for Taipei Metro — Wenhu CITYFLO 650
    titleOriginal: 捷運號誌系統實務
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://ebook.dorts.gov.taipei/ebook/no22/files/basic-html/page225.html
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full Wenhu CBTC chapter describes CITYFLO 650, moving-block coordinate operation, approximately 0.5-second position updates, six regions and the ATP/ATO/ATS functions."
  - id: dorts-circular-cbtc
    title: Practical signalling systems for Taipei Metro — Circular Line train supervision
    titleOriginal: 捷運號誌系統實務
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://ebook.dorts.gov.taipei/ebook/no22/files/basic-html/page292.html
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full Circular Line page identifies Hitachi Rail Transportation Signalling, CBTC, unattended operation, high-resolution location detection and the published ten-metre error limit; it also says the system is used on Sanying."
  - id: dorts-signalling-summary
    title: Practical signalling systems for Taipei Metro — summary
    titleOriginal: 捷運號誌系統實務
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://ebook.dorts.gov.taipei/ebook/no22/files/basic-html/page341.html
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full summary page contrasts early high-capacity GoA2 ATC using ATO/ATP with CBTC GoA4 unattended operation and describes ATS SCADA as the operating core of the latter."
---

Taipei’s published signalling record is a sequence of system families, not a
single network-wide generation. The early high-capacity network uses staffed,
traditional track-circuit signalling, while later medium-capacity systems use
moving-block CBTC.[^dorts-signalling-introduction] The distinction is about how
train position and separation are established; it is not, by itself, a complete
statement about staffing or Grade of Automation.

## The fixed-block high-capacity family

DORTS identifies the high-capacity route corridors—Tamsui-Xinyi, Songshan-Xindian,
Zhonghe-Xinlu, Bannan, Tucheng, Xinzhuang-Luzhou and the Nangang eastern
extension—as one signalling family.[^dorts-high-capacity-signalling] The page
names Alstom, formerly GRS, as the contractor and specifies conventional fixed
blocks with audio-frequency track circuits.[^dorts-high-capacity-signalling]
Its equipment scope includes wayside, onboard, depot and control-centre
equipment, so “fixed block” here describes the operating signalling architecture,
not merely a piece of trackside hardware.[^dorts-high-capacity-signalling]

The fixed-block arrangement divides the railway into protected sections and
uses the occupied section to constrain following movements.[^dorts-wenhu-cbtc]
DORTS’s comparison says that this position estimate can have an error of roughly
100–200 metres, which is why the safe braking separation is longer than in the
moving-block example.[^dorts-wenhu-cbtc] The source describes the family and its
technical principles; it does not publish a current line-by-line inventory of
relay rooms, software versions, replacement dates or residual equipment.

## Wenhu: moving-block CBTC

The Wenhu Line is the documented transition to moving-block CBTC. DORTS names
Bombardier CITYFLO 650 and describes a moving-block coordinate system that uses
the region, segment and offset of each train to calculate movement authority.[^dorts-wenhu-cbtc]
The published architecture divides the main line and the two depots into six
regions and describes ATP, ATO and ATS as the three principal automatic-train-
control functions.[^dorts-wenhu-cbtc]

CITYFLO 650 transmits train-position information at roughly half-second
intervals in the DORTS description.[^dorts-wenhu-cbtc] A separate DORTS review
describes the broader evolution from the initial network’s fixed-block track
circuits to Wenhu’s moving-block CBTC and records the signalling update that
joined the older Muzha section to the Neihu section without requiring passengers
to change trains.[^dorts-signalling-evolution] That is a documented system
renewal boundary, not evidence that every Taipei line was later converted to the
same equipment.

## Circular and Sanying: a later CBTC family

DORTS identifies Hitachi Rail Transportation Signalling as the contractor for
the Circular Line Phase 1 train-supervision system.[^dorts-circular-cbtc] The
published description calls it CBTC and unattended operation, using continuous
two-way train-to-wayside or control-centre data communication and high-resolution
position detection rather than relying on track circuits; its stated position
error limit is 10 metres.[^dorts-circular-cbtc] The same page says the system is
also used on the Sanying Line.[^dorts-circular-cbtc]

This establishes a shared published family, but not a complete current register
of every Sanying or Circular subsystem.[^dorts-circular-cbtc] The DORTS summary separately describes
the general progression from early high-capacity GoA2 ATC with ATO/ATP to CBTC
GoA4 unattended operation.[^dorts-signalling-summary] The automation grade and
the signalling technology therefore belong in related but separate fields.

## What remains open

The primary records establish three broad boundaries: Alstom/GRS fixed-block
signalling for the high-capacity network, Bombardier CITYFLO 650 moving-block
CBTC for Wenhu, and Hitachi CBTC for Circular with the same system identified on
Sanying.[^dorts-high-capacity-signalling][^dorts-wenhu-cbtc][^dorts-circular-cbtc]
They do not expose a complete current equipment-generation register, the date
and scope of every high-capacity renewal, or the exact fallback mode for each
line. Those details remain TBC rather than being inferred from a supplier name,
a line’s automation grade or the age of its civil works.
