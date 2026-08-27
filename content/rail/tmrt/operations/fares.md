---
title: Taichung Metro fare history
summary: A resident-priced regional season pass with four geographic tiers, a monthly points subsidy layered on top of a senior concession, and — like both other Taiwan metro operators this project has now checked — a base single fare kept off the page entirely.
order: 2
operator: TMRT
updated: 2026-08-28
facts:
  - label: Senior/disability single-ticket concession
    value: 50% of the published fare
    source: tmrt-ticket-types
  - label: Group ticket (10+) concession
    value: 80% of the published fare per person
    source: tmrt-ticket-types
  - label: Taichung senior/disability card monthly points subsidy
    value: "NT$1,000 (Indigenous cardholders: NT$1,500), applied 1 point = NT$1"
    source: tmrt-ticket-types
  - label: Regional season pass tiers
    value: Taichung City, Changhua County, Nantou County, and a combined four-county pass
    source: tmrt-monthly-pass
  - label: Regional pass activation window
    value: must activate within 30 days of purchase; valid 30 consecutive days once activated
    source: tmrt-monthly-pass
  - label: Base/maximum single fare in NT$
    value: TBC (fare page is a dynamic query tool, not static text)
specs:
  - label: Bicycle ticket / double-bass ticket
    value: "70"
    unit: NT$ each
    source: tmrt-ticket-types
  - label: Lost/damaged single-ticket replacement fee
    value: "50"
    unit: NT$
    source: tmrt-ticket-types
  - label: 1-day / 24-hour / 48-hour TMRT-only pass
    value: "120 / 150 / 250"
    unit: NT$
    source: tmrt-ticket-types
  - label: Taichung go MaaS pass, 24/48/72 hours
    value: "180 / 280 / 380"
    unit: NT$
    source: tmrt-ticket-types
  - label: Taichung City season pass (resident / non-resident)
    value: "299 / 599"
    unit: NT$
    source: tmrt-monthly-pass
  - label: Changhua / Nantou County season pass
    value: "699"
    unit: NT$ each
    source: tmrt-monthly-pass
  - label: Four-county regional season pass (resident / non-resident)
    value: "699 / 999"
    unit: NT$
    source: tmrt-monthly-pass
sources:
  - id: tmrt-fare-query
    title: Fare and Travel Time
    titleOriginal: 票價及乘車時間
    publisher: Taichung Metro Corporation (臺中捷運股份有限公司)
    url: https://www.tmrt.com.tw/metro-life/ride-time-and-fare
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched and parsed directly from raw HTML. Is a dropdown station-pair fare-query tool that renders results with JavaScript; no static fare figure or table is present in the fetched HTML.
  - id: tmrt-ticket-types
    title: Ticket Types
    titleOriginal: 車票種類
    publisher: Taichung Metro Corporation (臺中捷運股份有限公司)
    url: https://www.tmrt.com.tw/metro-life/ticket-types
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched and parsed directly from raw HTML. Covers e-payment cards, welfare/child cards, single/group/bicycle/double-bass tickets, day/hour passes and the MaaS hour pass, each with concession rates and prices where stated.
  - id: tmrt-monthly-pass
    title: Central Taiwan Regional Public Transport Season Pass
    titleOriginal: 中部地區公共運輸定期票
    publisher: Taichung Metro Corporation (臺中捷運股份有限公司)
    url: https://www.tmrt.com.tw/metro-life/MonthlyTicket
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched and parsed directly from raw HTML. Gives all four regional season-pass tiers with resident/non-resident prices, covered transport modes and activation rules — more complete than the ticket-types page's narrower two-tier summary of the same product family.
---

## Concessions, and a subsidy layered on top of one

TMRT's concession structure follows the same percentage-of-published-fare
pattern as this project's other Taiwan metro fare pages: a senior or
disability-certificate holder pays 50% of the published fare for a single
ticket, and a group of ten or more pays 80% per person, with the whole
group required to enter and exit together through a staff-operated
gate.[^tmrt-ticket-types] A welfare-card version of the same senior/
disability concession extends to a companion card, valid at half fare only
when tapped immediately after its paired card, and to a Taichung child
card (or a linked digital student ID) for children aged 6 up to 12 who are
Taichung-registered or Taichung-enrolled.[^tmrt-ticket-types]

Taichung goes a step further than a simple concession fare: its own
senior/disability card carries a separate monthly points subsidy — NT$1,000
(1,000 points at 1 point = NT$1) for most cardholders, NT$1,500 for
Indigenous cardholders — specifically usable to offset metro fares, on top
of the 50% concession already applied to the ticket price
itself.[^tmrt-ticket-types] A bicycle ticket and a double-bass ticket are
each priced at a flat NT$70, one item per passenger, both requiring
staff-assisted entry through a service gate and both unavailable at
Taichung HSR Station.[^tmrt-ticket-types]

## Day passes, hour passes, and a city-run MaaS product

TMRT sells three of its own unlimited-ride day/hour passes, valid on the
Green Line only: NT$120 for a same-day pass, NT$150 for 24 hours from
activation, and NT$250 for 48 hours.[^tmrt-ticket-types] A separate
product, "Taichung go套票," issued under a City of Taichung Mobility-as-a-
Service programme and covering both TMRT and designated city bus routes
together, prices its 24/48/72-hour tiers at NT$180, NT$280 and
NT$380.[^tmrt-ticket-types]

## A four-tier regional pass, priced by residency

The most structurally distinctive product TMRT sells is not its own: a
30-day regional season pass system spanning four counties, with genuinely
different prices depending on where the cardholder is
registered.[^tmrt-monthly-pass] A Taichung City pass costs Taichung
residents NT$299 and non-residents NT$599, covering TRA, TMRT, city buses
and YouBike within Taichung.[^tmrt-monthly-pass] Changhua County and
Nantou County each have their own single-price (NT$699) county pass,
covering TRA and intercity coaches in that county — though the source
states the Changhua and Nantou tiers cannot yet be used on TRA at all,
pending unspecified equipment readiness, without giving a
date.[^tmrt-monthly-pass] A combined four-county pass spanning Taichung,
Changhua, Nantou and Miaoli costs Taichung residents NT$699 and
non-residents NT$999.[^tmrt-monthly-pass] Every tier must be activated
within 30 days of purchase and, once activated, runs for 30 consecutive
days; the passes are sold on EasyCard, iPass or icash cards through TMRT
stations, selected regional TRA stations, intercity bus stations, and two
convenience-store chains' self-service kiosks.[^tmrt-monthly-pass]

## The base single fare, again, is not on the page

As with this project's separate TYMC and KRTC fare-history pages, TMRT's
own base single-fare figure in NT$ is not published as static text
anywhere on its site. The dedicated fare-and-travel-time page is a
dropdown station-pair query tool that renders its results with JavaScript,
and several ticket-type entries elsewhere on the site reference an
unstated "單程票最低票價" (minimum single-ticket fare) as a fallback
calculation basis without ever giving the figure.[^tmrt-fare-query]
[^tmrt-ticket-types] This is now the third of three Taiwan metro operators
this project has checked — after Taoyuan Airport MRT and Kaohsiung Metro —
where the identical class of gap turned up independently.

## Remaining gaps

No base or maximum single-fare figure in NT$, for any station pair, is
established by any source read for this page. No date is given for when
the Changhua and Nantou season-pass tiers will gain TRA compatibility, or
for when the "Taichung go套票" MaaS hour pass launched.
