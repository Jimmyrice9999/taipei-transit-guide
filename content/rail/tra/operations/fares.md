---
title: Taiwan Railways fare and ticket-type history
summary: A dated 2026 free-seating rollout with named train numbers, a published five-tier per-km charter rate table — and, found on a second TRA page this run, the same five-tier structure for ordinary single tickets too, effective 23 June 2025.
order: 4
operator: TRA
updated: 2026-08-29
facts:
  - label: Single-ticket categories
    value: full fare, child fare, senior fare, disability fare
    source: tra-fare-booking
  - label: Free-seating (自由座) rollout
    value: West Coast EMU3000 trains only, effective 1 July 2026, named train numbers
    source: tra-fare-booking
  - label: Free-seating adult fare
    value: 95% of full Tzu-Chiang fare (other ticket categories excluded)
    source: tra-fare-booking
  - label: Non-reserved group ticket concession
    value: 80% for 20-49 people, 65% for 50+ people
    source: tra-fare-booking
  - label: Reserved-seat group ticket concession
    value: none — full fare times group size, minimum 10 people
    source: tra-fare-booking
  - label: Onboard no-ticket surcharge
    value: 50% of the travelled-segment fare, if not voluntarily declared
    source: tra-fare-booking
  - label: Single-ticket rate table, effective date
    value: "2025-06-23"
    source: tra-fare-calculator
  - label: Named but unread fare products
    value: season pass, platform ticket, TR-PASS, university-student scheme, welfare-card points riding, nine regional TPASS-style passes
    source: tra-fare-booking
specs:
  - label: Charter-train rate, Local class, under 50 km
    value: "2.18"
    unit: NT$ per person per km
    source: tra-fare-booking
  - label: Charter-train rate, Chu-Kuang class, under 50 km
    value: "2.61"
    unit: NT$ per person per km
    source: tra-fare-booking
  - label: Charter-train rate, Tzu-Chiang class, under 50 km
    value: "3.39"
    unit: NT$ per person per km
    source: tra-fare-booking
  - label: Charter-train rate, Tzu-Chiang class, over 300 km
    value: "2.20"
    unit: NT$ per person per km
    source: tra-fare-booking
  - label: Living-room car service fee (effective 23 June 2025)
    value: "380"
    unit: NT$
    source: tra-fare-booking
  - label: Single-ticket rate, 區間車 (Local), under 50 km
    value: "2.18"
    unit: NT$ per person per km
    source: tra-fare-calculator
  - label: Single-ticket rate, 區間車 (Local), over 300 km
    value: "1.42"
    unit: NT$ per person per km
    source: tra-fare-calculator
  - label: Single-ticket rate, 莒光號 (Chu-Kuang), under 50 km
    value: "2.61"
    unit: NT$ per person per km
    source: tra-fare-calculator
  - label: Single-ticket rate, 莒光號 (Chu-Kuang), over 300 km
    value: "1.70"
    unit: NT$ per person per km
    source: tra-fare-calculator
  - label: Single-ticket rate, 自強號 (Tzu-Chiang), under 50 km
    value: "3.39"
    unit: NT$ per person per km
    source: tra-fare-calculator
  - label: Single-ticket rate, 自強號 (Tzu-Chiang), over 300 km
    value: "2.20"
    unit: NT$ per person per km
    source: tra-fare-calculator
sources:
  - id: tra-fare-booking
    title: Fare and Booking Process (Ticket Types and Prices)
    titleOriginal: 票價與訂票流程（車票類型與價格）
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: "https://www.railway.gov.tw/tra-tip-web/tip/tip00C/tipC21/view?proCode=8ae4cac3756b7b4101757271e5f71703&subCode=8ae4cac3756b7b41017572737d1a1704"
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched and parsed directly from raw HTML rather than a search snippet, page dated 7 August 2026 in its own text. Covers single-ticket categories, the 2026 free-seating rollout, group and charter-train pricing including a full per-km rate table, and the living-room car's service fee; itself defers ordinary single-ticket base pricing to an unfetched calculator tool and names several fare products this report did not follow through to their own pages.
  - id: tra-fare-calculator
    title: Fare Calculator — Fare Calculation Rates
    titleOriginal: 票價試算 — 本公司各級列車票價費率
    publisher: National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)
    url: "https://www.railway.gov.tw/tra-tip-web/tip/tip001/tip114/query"
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: A second, separate TRA page — the fare calculator itself — publishes the ordinary single-ticket rate as static text, not only via an interactive tool. Gives a five-distance-tier, three-class per-km rate table effective for travel from 23 June 2025, independently corroborated by a third TRA service-information page (tip00C/tipC11/view13) reproducing the identical numbers.
---

## Four ticket categories, and a base rate table on a second page

TRA's own fare page names four single-ticket categories — full fare,
child fare, senior fare and disability fare — and a simultaneous
round-trip booking option charged at the single-ticket rate for each
direction.[^tra-fare-booking] That page itself does not state a base
per-km rate or a specific NT$ fare for any route, deferring instead to a
separate fare/distance calculator. That calculator page, fetched
separately, turns out to publish the actual rate as static text rather
than only through an interactive tool: a five-distance-tier table, in NT$
per person per km, for 區間車 (Local), 莒光號 (Chu-Kuang) and 自強號
(Tzu-Chiang) classes, effective for travel from 23 June 2025 — 區間車 runs
from 2.18 (under 50 km) down to 1.42 (over 300 km); 莒光號 from 2.61 down
to 1.70; 自強號 from 3.39 down to 2.20, with any journey under 10 km priced
as if it were 10 km.[^tra-fare-calculator] These are the same five tiers
and the same three classes as the charter-train rate table described
below, and the two tables' figures are identical at every tier this page
checked — a genuine, independently fetched corroboration between two
separate TRA pages, though this page still does not assume the two
schemes are formally the same rate structure rather than a coincidence of
figures, since neither TRA page says so explicitly.[^tra-fare-booking][^tra-fare-calculator]
A passenger who boards without a ticket and voluntarily requests to pay is
charged the fare for the segment travelled; one with no valid reason, or
who only asks when checked, pays that fare plus a 50%
surcharge.[^tra-fare-booking]

## A dated 2026 free-seating rollout

From 1 July 2026, TRA introduces free seating (自由座) specifically on
West Coast Line EMU3000-type trains, excluding through-service workings —
the operator's page names the exact train numbers and specifies which
cars are designated free-seating on each one, 9 cars on direct services
and 9 to 11 cars on non-direct services.[^tra-fare-booking] The adult
free-seating fare is set at 95% of the full Tzu-Chiang single fare; child,
senior and disability tickets are explicitly excluded from that
discount.[^tra-fare-booking] Booking opens 7 days ahead, and a passenger
using an unreserved-class ticket for that day's free-seating car without
one is charged the full fare plus a 50% surcharge, moved out of any
reserved-seat car.[^tra-fare-booking]

## Group and charter pricing, with a real rate table

Group travel is priced two different ways depending on whether seats are
reserved. A non-reserved group of 20 to 49 people pays 80% of the single
fare per person; 50 or more pays 65%.[^tra-fare-booking] A reserved-seat
group, minimum 10 people, pays the full single fare per person — no
discount at all.[^tra-fare-booking]

Chartering an entire train ("專列") follows a stated formula: a per-km
rate for the train class, multiplied by the travelled distance, multiplied
by the chartered car's passenger capacity.[^tra-fare-booking] The
operator's own page publishes the full rate table, in NT$ per person per
km, across five distance tiers and three train classes: Local class runs
from 2.18 (under 50 km) down to 1.42 (over 300 km); Chu-Kuang class from
2.61 down to 1.70; Tzu-Chiang class from 3.39 down to
2.20.[^tra-fare-booking] This table is published specifically for charter
pricing — the page does not state that these are the same per-km rates
behind an ordinary single ticket, and this page does not assume that
equivalence. Puyuma and Taroko charter trains (372–376 seats) and
Tzu-Chiang 3000-type charters (538 seats) cannot have their car count
increased and require a minimum 100 km charter; Puyuma/Taroko charters
additionally receive a round-trip volume discount, effective 1 January
2026 — 85% for a 5-day round-trip or island-circuit total over 600 km,
80% for one over 800 km.[^tra-fare-booking]

A luxury "living-room car" (客廳車), currently marked suspended on the
operator's page, was previously priced at 52 Chu-Kuang single full fares
for the chartered segment plus a service-staff fee — NT$300 originally,
revised to NT$380 effective 23 June 2025 — with any distance under 100 km
billed as if 100 km, and seating capped at 30 passengers.[^tra-fare-booking]

## Named products not covered in this pass

TRA's own navigation names several further fare products this report did
not follow through to their own pages: a season pass, a platform ticket,
an automatic-ticketing stored-value card, a university-student discount
scheme, a "TR-PASS" tourist rail pass, welfare-card points riding, and
nine named regional commuter passes covering different multi-county
groupings across Taiwan (基北北桃, 桃竹竹苗, 中彰投苗, 雲林, 嘉義,
嘉嘉南高屏, 北宜, 花蓮, 臺東).[^tra-fare-booking] Each is confirmed to
exist and to be named by the operator; none of their prices or rules are
established here.

## Remaining gaps

Whether a journey spanning more than one distance bracket is priced by a
single bracket lookup for the whole distance or by a marginal, per-bracket
calculation is not established by either TRA page read for this
page — the published table gives a rate per bracket but not the formula
for combining brackets. Whether the June 2025 rate table replaced an
earlier structure that was itself distance-tiered, or a flat single rate
per class, is also not established: a 2023 news report quotes flat
pre-2025 per-km figures with no distance bracket mentioned, but this page
does not treat that as confirming the earlier structure was genuinely
flat. Prices and rules for the season pass, platform ticket, TR-PASS,
university-student scheme, welfare-card points riding and all nine
regional passes are TBC.
