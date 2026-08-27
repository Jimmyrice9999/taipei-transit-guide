---
title: Taoyuan Airport MRT fare history
summary: A 2 January 2025 season-pass overhaul replaced two older schemes outright — different formulas, different discount tiers, a fee-free exchange window — while the specific NT$ figures behind every formula stay out of reach of a static fetch.
order: 2
operator: TYMC
updated: 2026-08-28
facts:
  - label: Value Season Pass launched
    value: 2 January 2025, replacing two discontinued schemes
    source: tymc-season-pass-page
  - label: Discontinued schemes
    value: 通勤定期票 (commuter pass, 4 designs) and 通勤135團體優惠專案 (group discount programme, 3 designs)
    source: tymc-season-pass-page
  - label: Old-pass exchange/refund window
    value: 23 December 2024 to 30 June 2025, fee-free exchange or full refund
    source: tymc-season-pass-page
  - label: Senior/disabled single-ticket concession
    value: 50% of the published fare
    source: tymc-single-ticket-page
  - label: Child (6 to under 12) single-ticket concession
    value: 80% of the published fare
    source: tymc-single-ticket-page
  - label: Card-manufacturing fee, all season passes
    value: "NT$50, non-refundable, on first purchase"
    source: tymc-season-pass-page
  - label: Base/maximum single fare in NT$
    value: TBC
  - label: NT$10 single-ticket discount cancellation (separately reported)
    value: not independently re-confirmed this session
    source: gvm-tymc-discount-cancelled
specs: []
sources:
  - id: tymc-season-pass-page
    title: TYMC's Own Season Passes/Group Tickets
    titleOriginal: 桃捷自有定期票/團體票
    publisher: Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)
    url: https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/ticketson02.php
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched and parsed directly from raw HTML rather than a search snippet. States the 2 January 2025 Value Season Pass launch, the two discontinued schemes it replaced, the exchange/refund window, and the pricing formula and discount tiers for both the new and the discontinued passes.
  - id: tymc-single-ticket-page
    title: Single Tickets/Day Passes
    titleOriginal: 單程票/一日票
    publisher: Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)
    url: https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/ticketson01.php
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched and parsed directly from raw HTML. States single-ticket concession categories and their percentage discounts against the published fare, plus purchase/payment/refund rules; does not itself state an NT$ base fare figure.
  - id: gvm-tymc-discount-cancelled
    title: "Taoyuan Airport MRT's 2024 surplus hit a record NT$500 million — why cancel the system-wide NT$10 ticket discount?"
    titleOriginal: 桃園機場捷運2024盈餘5億創新高！為何全線取消車票10元優惠？
    publisher: 城市學 (GVM/Global Views Monthly)
    url: https://city.gvm.com.tw/article/117975
    accessed: 2026-08-12
    kind: secondary
    lang: zh-Hant
    note: Already recorded in this project's existing airport-mrt line research (claim 18/15) as the source for the January 2025 single-ticket discount cancellation, dated 22 December 2024, predating year-end by nine days; not independently re-fetched this session.
---

## A season-pass scheme replaced outright, not just rebranded

On 2 January 2025, Taoyuan Metro Corporation replaced its entire season-pass
product line with a new "超值定期票" (Value Season Pass) scheme, discontinuing
both the previous four-design commuter pass and a separate three-design
group-discount programme for organisations.[^tymc-season-pass-page] Holders
of the old passes kept the right to use them, and were separately offered
either a fee-free exchange into the new pass or a full refund at any
station information desk (except A20 Xingnan) during a transition window
running from 23 December 2024 to 30 June 2025.[^tymc-season-pass-page]

This was a genuine repricing, not a rebrand. The new Value Season Pass
prices each tier as the full single fare for a chosen station pair,
multiplied by the number of calendar days, multiplied by two trips per day,
multiplied by a discount factor — 42% for 7 days, 35% for 30 days, 33% for
90 days, and 27% for 120 days.[^tymc-season-pass-page] The discontinued
commuter pass used a different formula entirely: its 7-day tier counted
only 5 paid days at roughly 75% of full fare, its 30-day tier counted 21
days at 70%, its 60-day tier (a tier the new scheme does not even offer)
counted 42 days at roughly 65%, its 90-day tier counted 63 days at 60%, and
its 120-day tier counted 84 days at 50%.[^tymc-season-pass-page] Every
day-count and every discount multiplier changed between the two
schemes.[^tymc-season-pass-page]

The discontinued group programme offered a 100-day pass to organisations
ordering 300 or more cards at once — companies, apartment/community
associations, schools and government bodies — priced at full single fare ×
2 trips/day × 70 paid days × a 50% discount.[^tymc-season-pass-page] All
season passes, old and new, share the same procedural rules: a NT$50
non-refundable manufacturing fee on first purchase, personal/named-card use
only, no stored-value reloading, and a NT$20 service fee on any early
refund.[^tymc-season-pass-page]

## Single tickets: a percentage of a figure not stated by the source

Single-ticket concessions are structured as a percentage of the "published
fare" (公告票價) for the journey, not a flat discount amount: senior
citizens, disability-card holders with one named companion, and
Taoyuan-registered Indigenous residents 55 and older pay 50% of the
published fare; children aged 6 up to (not including) 12 pay
80%.[^tymc-single-ticket-page] Single tickets are cash-only, valid solely on
the day of purchase, and refundable only while unused on that same
day.[^tymc-single-ticket-page]

The published fare itself, in NT$, for any specific journey is not stated
by either of TYMC's own ticketing pages read for this research: both
reference "公告票價" only as a formula variable, pointing to a separate
fare-query tool that renders its results with JavaScript the fetch tooling
used here cannot execute — and no TDX API credentials were available to
query the fare schema directly either.[^tymc-single-ticket-page] This is a
confirmed, specific gap: not that no figure could be found, but that
TYMC's own static pages genuinely do not state one.

## A separately reported discount, not verified here

Existing research on this project's Airport MRT line page separately
records a January 2025 cancellation of a NT$10 discount that had applied to
single tickets, sourced to a Global Views Monthly (遠見雜誌) article citing
the company chairman on rising electricity costs.[^gvm-tymc-discount-cancelled]
Neither of the two ticketing pages read for this report mentions that
change, so it is neither newly confirmed nor contradicted here — it remains
at the same secondary-source strength already on record. Whether that
single-ticket discount cancellation and the season-pass repricing described
above form one coordinated fare reform, both taking effect the same day, or
are simply two unrelated changes that happened to land together, is not
established by any source read and is not assumed either way.

## Remaining gaps

No NT$ figure for the base or maximum single fare, for any station pair, is
established by a source this page could read. Whether the season-pass
repricing and the single-ticket discount cancellation are connected is TBC.
Independent, non-TYMC confirmation of the discount cancellation was not
attempted this session.
