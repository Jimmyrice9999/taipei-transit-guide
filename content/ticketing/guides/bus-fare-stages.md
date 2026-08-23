---
title: How bus fare stages (段) actually work
summary: Taipei and New Taipei buses do not charge one flat fare. They charge by the number of fare "segments" (段) a trip crosses, and where those segment points fall is not published as one complete list anywhere — only two examples are ever officially named.
order: 2
updated: 2026-08-20
aliases:
  - 段次
  - 分段收費
  - 分段點
  - 分段緩衝區
  - fare stage
  - fare segment
facts:
  - label: Legal basis
    value: 臺北市公共汽車客運業營運管理自治條例, Article 11
    source: taipei-bus-ordinance
  - label: Full fare
    value: NT$15 per segment
    source: ebus-fare-info
  - label: Student fare (EasyCard)
    value: NT$12 per segment
    source: ebus-fare-info
  - label: Concessionary fare
    value: NT$8 per segment
    source: ebus-fare-info
  - label: On-board ticket sales
    value: None — cash or e-ticket only, no change given
    source: ebus-fare-info
specs:
  - label: Officially named segment-point examples
    value: "Huazhong Bridge, Taipei Main Station"
    source: pto-segment-faq
  - label: New Taipei published routes, segment range (committed data)
    value: "1–8"
    source: ntpc-bus-route-data
  - label: MRT–bus transfer discount, ordinary card
    value: "8"
    unit: NT$
    source: trtc-faq-transfer
  - label: Transfer time window
    value: "60"
    unit: min
    source: trtc-faq-transfer
sources:
  - id: pto-segment-faq
    title: "What is the basis for determining bus fare segment points?"
    titleOriginal: 公車之分段點決定之依據為何?
    publisher: Taipei Public Transport Office (臺北市公共運輸處)
    url: "https://www.pto.gov.taipei/News_Content.aspx?n=6B4D38874E971F4B&sms=87415A8B9CE81B16&s=9B757C0E9D8B0EA8"
    accessed: 2026-08-20
    kind: primary
    lang: zh-Hant
    note: "The regulator's own FAQ, fetched and quoted in full. Source for the Article 11 legal basis, the natural-boundary/major-transfer-point siting criteria, and the only two segment points named officially anywhere found this run: Huazhong Bridge and Taipei Main Station."
  - id: taipei-bus-ordinance
    title: Taipei City Public Bus Passenger Transport Business Operation Management Self-Government Ordinance
    titleOriginal: 臺北市公共汽車客運業營運管理自治條例
    publisher: Taipei City Government (臺北市政府)
    url: "https://laws.gov.taipei/Law/LawSearch/LawArticleContent/FL012562"
    accessed: 2026-08-20
    kind: primary
    lang: zh-Hant
    note: "The city's own law database, fetched in full as a complete 14-article chapter view. Source for Article 11's exact text (same-fare-in-principle, segmented or distance-based pricing permitted on longer routes) and Article 9's stop-signage requirement, which mandates that the fare segment point or buffer zone be posted at the physical stop."
  - id: ebus-fare-info
    title: Passenger guide, including fare information
    titleOriginal: 乘客須知(含票價資訊)
    publisher: Taipei City Government and New Taipei City Government (臺北市政府與新北市政府)
    url: "https://ebus.gov.taipei/RelatedLinks/TicketInfo"
    accessed: 2026-08-20
    kind: primary
    lang: zh-Hant
    note: "The joint Taipei/New Taipei bus portal's own fare page, fetched and quoted in full. Source for the NT$15/12/8 fare tiers, the segmented-fare rule stated for both cities together (雙北), the no-on-board-sales/no-change rule, and the free-ride rules for young children."
  - id: busgroup-fare
    title: Fares
    titleOriginal: 票價
    publisher: Taipei City Bus Operators' Trade Association (臺北市公共汽車客運商業同業公會)
    url: "https://www.busgroup.org.tw/fare"
    accessed: 2026-08-20
    kind: primary
    lang: zh-Hant
    note: "The operators' own trade association's fare page, fetched in full, independently stating the same NT$15/12/8 fare structure as the government portal — corroboration from a separate publisher, not a repeated citation."
  - id: ntpc-bus-route-data
    title: New Taipei bus route list
    titleOriginal: 公車路線清單
    publisher: New Taipei City Department of Transportation (新北市政府交通局)
    url: "https://data.ntpc.gov.tw/api/datasets/0ee4e6bf-cee6-4ec8-8fe1-71f544015127/json?size=1000"
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full current New Taipei route-service dataset, already fetched and committed to this project for the bus-route content work (data/ntpc/bus-route-service.json). This page's segment-count range and distribution (1 to 8 segments across 562 rows) is a direct count over that already-committed primary data, not a new claim."
  - id: wiki-taipei-bus
    title: Taipei city buses
    titleOriginal: 臺北市市區公車
    publisher: 維基百科 (Chinese Wikipedia)
    url: "https://zh.wikipedia.org/zh-tw/臺北市市區公車"
    accessed: 2026-08-20
    kind: secondary
    lang: zh-Hant
    note: "Gives a nine-location list of 'common' segment points (Shilin, Dazhi, Taipei Bridge, Taipei Main Station, the Zhonghua Road stops, Wanhua, the wholesale produce market, Gongguan, Songshan), fetched and quoted in full. The article attaches no citation to this sentence, so it is used here as an unverified secondary lead, not confirmed fact — and it does not include Huazhong Bridge, which the PTO's own FAQ names directly."
  - id: wiki-ntpc-bus
    title: New Taipei city buses
    titleOriginal: 新北市市區公車
    publisher: 維基百科 (Chinese Wikipedia)
    url: "https://zh.wikipedia.org/zh-tw/新北市市區公車"
    accessed: 2026-08-20
    kind: secondary
    lang: zh-Hant
    note: "Gives a worked zone-crossing example (A區/B區/C區, and a longer A–E example) illustrating how crossing a segment buffer zone adds one segment fare, fetched and quoted in full. Illustrative only; the underlying rule it illustrates is separately confirmed on the primary ebus-fare-info page."
  - id: trtc-faq-transfer
    title: "What is the two-way transfer discount between MRT and bus (excluding distance-charged buses)? How is it deducted for each stored-value card type?"
    titleOriginal: 何謂捷運與公車（不含里程收費公車）間雙向轉乘優惠？儲值卡各票種雙向轉乘優惠如何扣款？
    publisher: 臺北大眾捷運股份有限公司 (Taipei Rapid Transit Corporation)
    url: "https://www.metro.taipei/News_Content.aspx?n=566DA580861CEE77&sms=87415A8B9CE81B16&s=1CDFC00134A98701"
    accessed: 2026-08-12
    kind: primary
    lang: zh-Hant
    note: "Reused from content/ticketing/guides/cards-passes-and-fares.md, where it was originally fetched. Source for the NT$8/NT$6/NT$4 transfer discount by card type, the 60-minute window, and the FAQ's own title naming 'distance-charged buses' (里程收費公車) as an explicit exclusion — a real, named exception category distinct from the segmented network this page describes."
  - id: megacity-notice
    title: 基北北桃都會通 operating notice
    titleOriginal: 基北北桃都會通使用須知
    publisher: EasyCard Corporation, issued on behalf of the Keelung, Taipei, New Taipei and Taoyuan city governments
    url: "https://www.easycard.com.tw/_upload/files/Megacity%20Pass.pdf"
    accessed: 2026-08-12
    kind: primary
    lang: zh-Hant
    note: "Reused from content/ticketing/guides/cards-passes-and-fares.md. Source for the TPASS pass covering Taipei and New Taipei city buses at unlimited rides and unlimited distance — meaning a pass holder does not pay per-segment at all while the pass is active, with no separate interaction rule needed against the fare-stage system this page describes."
---

Taipei and New Taipei's joint-operation buses do not charge a flat fare. They
charge by **段 (段次)** — fare segments — and a rider who does not know where
the segment points fall on their own route has no reliable way to predict
whether a trip costs one fare or two before boarding.

## The rule, and its legal basis

Under 臺北市公共汽車客運業營運管理自治條例 (the Taipei City ordinance
governing bus operations), Article 11 sets the underlying principle: a bus
operator's fare should be uniform in principle, but a route with a longer
run may instead be charged by segment or by distance[^taipei-bus-ordinance].
Article 9 of the same ordinance requires that the fare segment point (or
buffer zone) be posted on the physical stop sign itself, alongside the
terminus name, first/last bus times and headway[^taipei-bus-ordinance] — the
segment structure is not meant to be a surprise at tap-out, at least not by
design.

Taipei's Public Transport Office states the practical version of the rule
plainly: 「本市聯營公車依據「臺北市公共汽車客運業營運管理自治條例」第11條規
定採分段收費制，同時參採橋樑、河流等自然分界及重要轉運點（如華中橋、臺北車
站等）訂定，並無長度及站數之強制要求，跨越分段點即加收1段票」[^pto-segment-faq].
In English: segment points are sited using natural boundaries — bridges,
rivers — and major transfer hubs, with **no fixed rule for how long a
segment has to be or how many stops it must cover**. Crossing a segment
point (or its buffer zone) simply adds one segment's fare.

New Taipei's own city buses run on the identical mechanic. The joint
Taipei/New Taipei bus portal states it for both cities in one sentence:
「雙北市區公車係依路段分段收費，搭乘2段票(含)以上路線之車輛，若跨越分段點
(或分段緩衝區)，應加收1段票」[^ebus-fare-info].

## What a segment actually costs

| Fare class | Cash | EasyCard/e-ticket |
|---|---|---|
| Full fare | NT$15 | NT$15[^ebus-fare-info] |
| Student | NT$15 | NT$12 (an 8-fold/20%-off card rate)[^ebus-fare-info] |
| Concessionary (elderly, disabled/companion, eligible children) | NT$8 | NT$8[^ebus-fare-info] |

That per-segment rate is confirmed twice, independently: once by the joint
government fare portal, and once by the operators' own trade association,
which publishes the identical NT$15/12/8 structure on its own
site[^busgroup-fare]. Buses do not sell tickets on board and do not give
change — the fare portal is explicit that payment is cash *or* stored-value
card, with no other option, and no change is made for cash
overpayment[^ebus-fare-info]. Children under 115cm ride free outright;
children 115cm or taller but under 6 with an identity document also ride
free; one fare-paying adult may bring up to four such children at no
charge[^ebus-fare-info].

## Where the segment points actually are

Officially, not many are named at all. Taipei's Public Transport Office's own
FAQ gives exactly two worked examples: 華中橋 (Huazhong Bridge) and 臺北車站
(Taipei Main Station)[^pto-segment-faq]. No government source fetched for
this page publishes a complete list of every segment point on the network —
Article 9 requires each one to be posted at its own stop, but that is
necessarily a stop-by-stop disclosure, not a single published index.

Chinese Wikipedia's own article on Taipei's city buses offers a longer,
nine-location list of what it calls "common" segment points — Shilin (士林),
Dazhi (大直), Taipei Bridge (臺北橋), Taipei Main Station, the Zhonghua Road
north/south stops, Wanhua (萬華), the wholesale produce market (果菜市場),
Gongguan (公館), and Songshan (松山) — mostly major transfer hubs or bridgeheads
at the old Taipei City/County boundary[^wiki-taipei-bus]. That list is not
attached to any citation on the Wikipedia page itself, and it notably does
**not** include Huazhong Bridge, which is one of only two locations the
regulator names directly[^pto-segment-faq]. Both lists are published here as
what they are — one official but minimal, one fuller but unverified — rather
than merged into a single confident list.

## How crossing multiple segments is counted

Chinese Wikipedia's article on New Taipei's own city buses gives a worked
example of the counting logic. For a corridor running through zones A, B and
C, with B as the segment point: riding within one zone, or from A to B, or
from B to C, is one segment; riding all the way from A to C is two segments
(the single-segment fare, doubled)[^wiki-ntpc-bus]. On a longer corridor with
two segment points, A–B–C–D–E, both B and D count as crossing
points[^wiki-ntpc-bus]. This is an illustrative example rather than a
government fare rule in itself, but it does not contradict, and directly
illustrates, the primary rule already confirmed above.

## How many segments does a route actually have?

There is no fixed one-to-four-segment ceiling. Counting directly over this
project's own already-committed New Taipei route-service data — 562 routes
with a published fare row — segment counts run from 1 to 8: 128 routes are
1-segment, 77 are 2-segment, 37 are 3-segment, 13 are 4-segment, 8 are
5-segment, 3 are 6-segment, and 3 reach 8 segments, alongside a handful of
free routes[^ntpc-bus-route-data]. Taipei-proper's own committed bus dataset
does not carry a comparable segment-count field, so that same distribution
for Taipei's own colour- and series-numbered routes is not established here.

## How this interacts with transfers and the regional pass

The bidirectional MRT–bus transfer discount — NT$8 for an ordinary card,
NT$6 for a student card, NT$4 for a welfare card, within a 60-minute window —
applies against a segment fare the same way it applies against any bus
fare[^trtc-faq-transfer]. That same FAQ's own title is explicit that the
discount excludes "distance-charged buses" (里程收費公車) — a separate,
named fare category outside the segmented system this page describes, and
one this project has not yet independently researched[^trtc-faq-transfer].

The TPASS 基北北桃1200都會通 regional pass sidesteps the segment system
entirely for a pass holder: its own operating notice confirms unlimited
rides at unlimited distance on both Taipei's joint-operation network and New
Taipei's city buses[^megacity-notice]. A pass holder does not pay per segment
at all — there is no separate multi-segment surcharge or cap to interact
with.
