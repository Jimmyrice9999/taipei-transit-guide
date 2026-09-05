---
title: Alishan Forest Railway fares and ridership
summary: Published 2024 full-line and branch fare records, worked out from a per-kilometre rate, alongside a decade of monthly ridership data extracted directly from the operator's own PDF; current service extent remains an official-record conflict.
order: 1
operator: AFRCHO
updated: 2026-09-05
facts:
  - label: Main-line full fare, Chiayi-Alishan
    value: NT$600 (阿里山號/檜木列車) or NT$540 (中興號)
    source: afr-fares
  - label: Main-line fare structure
    value: distance-based, NT$8.33/km or NT$7.50/km, 6km minimum
    source: afr-ticketing
  - label: Branch-line fares
    value: "Zhushan NT$150, Shenmu NT$100, Zhaoping NT$100 (full fare)"
    source: afr-fares
  - label: Standard concession fare
    value: "50%"
    unit: of full fare, for seniors 65+, disability-certificate holders plus one companion, and children
    source: afr-fares
  - label: TPASS coverage
    value: TBC (the one domain that would confirm this failed to resolve)
  - label: Historical fare change
    value: TBC (only a negative confirmation exists — unchanged at the 2024 reopening)
specs:
  - label: Booking window, station counter
    value: "12"
    unit: days before travel
    source: afr-ticketing
  - label: Booking window, online
    value: "1–14"
    unit: days before travel
    source: afr-ticketing
  - label: 2023 main-line annual ridership (derived)
    value: "248,395"
    unit: passengers, computed from the operator's own monthly figures
    source: afr-ops-pdf
  - label: 2023 branch-line annual ridership (derived)
    value: "960,834"
    unit: passengers, computed from the operator's own monthly figures
    source: afr-ops-pdf
sources:
  - id: afr-fares
    title: Fare Information
    titleOriginal: 票價資訊
    publisher: Alishan Forest Railway and Cultural Heritage Office (阿里山林業鐵路及文化資產管理處)
    url: https://afrch.forest.gov.tw/0000119
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched directly. States the main-line and branch-line full fares, concession-fare eligibility, and the day/two-day branch-line passes. A station-pair fare matrix on this page returned inconsistent figures across two fetches for at least one segment and is not used for anything beyond the corroborated endpoint fares.
  - id: afr-ticketing
    title: Ticketing Information
    titleOriginal: 售票說明
    publisher: Alishan Forest Railway and Cultural Heritage Office (阿里山林業鐵路及文化資產管理處)
    url: https://afrch.forest.gov.tw/0000270
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched directly. States the per-kilometre fare rates and minimum-distance floor, booking windows for station and online sales, per-ID ticket caps, and change/refund fees including a typhoon-warning exception.
  - id: forest-reopening-2024
    title: "Alishan Forest Railway Fully Reopens, 6 July 2024"
    titleOriginal: 阿里山林鐵113年7月6日全線通車
    publisher: Forestry and Nature Conservation Agency (林業及自然保育署)
    url: https://www.forest.gov.tw/news/0073945
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full press release, fetched directly. States the fare was unchanged at the reopening (NT$600 Chiayi-Alishan), and that a ticket to Alishan Station bundles national forest recreation area admission.
  - id: afr-ops-pdf
    title: "Forest Railway Operations Information, January 2014 to December 2023"
    titleOriginal: 林鐵103年1月至112年12月營運資訊
    publisher: Alishan Forest Railway and Cultural Heritage Office (阿里山林業鐵路及文化資產管理處)
    url: https://afrch.forest.gov.tw/File.aspx?fno=85892
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: A monthly operations-statistics PDF, fetched directly and extracted with pdftotext after a research pass's standard fetch tool could not read it. Gives monthly passenger counts, passenger-km, seat-km and load factor, split between the main line and the three branch lines combined. Annual totals published on this page are this project's own sums of the source's monthly figures, not a total the operator itself states.
---

## What it costs

A full-fare ride the length of the main line, Chiayi to Alishan, costs
NT$600 on the 阿里山號 or 檜木列車 services, or NT$540 on the 中興號 local —
both figures confirmed unchanged at the railway's July 2024 full-line
reopening.[^afr-fares][^forest-reopening-2024] The fare isn't a single flat
number so much as a distance formula worked backwards: NT$8.33 per
kilometre for 阿里山號/區間車, NT$7.50 for the 中興號-class local, each with
a six-kilometre minimum — multiplying either rate by the line's 71.6km
length lands within a few dollars of the two published full
fares.[^afr-ticketing] A ticket to Alishan Station comes bundled with
admission to Alishan National Forest Recreation Area at no extra
charge.[^forest-reopening-2024] Fares for intermediate stops exist on a
station-pair matrix this page could not reliably read — two attempts at
extracting the same table returned two different numbers for the same
segment, and neither is published here.

The three forest-park branch lines charge flat, not distance-based,
fares: NT$150 on the Zhushan sunrise line, NT$100 each on the Shenmu and
Zhaoping lines, all half-price for concessions.[^afr-fares] A branch-line
day pass covering all three costs NT$400 (or NT$200 concession); a
two-day pass costs NT$500 (NT$250 concession) — though neither covers the
special New Year Zhushan sunrise service.[^afr-fares] Seniors 65 and over,
disability-certificate holders (plus one companion), and children aged
6–11 or 115–149cm tall all qualify for the standard 50% concession fare;
younger or shorter children ride free without a seat, capped at two per
paying adult, as do licensed tour guides.[^afr-fares]

## Booking, and a limit that isn't a number

Tickets go on sale at station counters 12 days before travel, and online
on a rolling window from 14 days out to the day before — except the
Zhushan sunrise line, whose next-day online booking closes at noon the day
before.[^afr-ticketing] Each ID can book up to six tickets per travel
date, or twelve for a same-transaction round trip; a first itinerary
change is free, a second costs 10% of the fare, and tickets bought during
an announced typhoon warning can be fully refunded within a
year.[^afr-ticketing] The Zhushan line's same-day tickets go on sale 30
minutes before the first departure with what the operator's own FAQ
describes only as "a limited number" — no figure is published anywhere
found for what that limit actually is.

Whether the Alishan Forest Railway participates in TPASS or any
multi-operator pass could not be confirmed either way: the one domain that
would answer this authoritatively, `tpass.motc.gov.tw`, failed to resolve
entirely during this research, and every operator page checked is simply
silent on the question rather than stating an exclusion.

## A decade of ridership, extracted directly from the source

The operator publishes a monthly operations PDF running January 2014
through December 2023.[^afr-ops-pdf] A first research pass could not extract its
contents; fetched directly and read with `pdftotext` in the main session,
it gives a clean decade of monthly passenger, passenger-kilometre and
load-factor figures, split between the main line and the three branch
lines combined.[^afr-ops-pdf] Summed by year, the branch lines carry
five to ten times the main line's annual ridership throughout the entire
decade — unsurprising given their short length and status as popular
short excursions, especially the Zhushan sunrise service, against the
main line's long haul to Alishan:

| Year | Main line | Branch lines |
|---|---|---|
| 2014 | 149,920 | 1,831,147[^afr-ops-pdf] |
| 2015 | 161,527 | 1,783,861[^afr-ops-pdf] |
| 2016 | 172,987 | 1,465,152[^afr-ops-pdf] |
| 2017 | 185,313 | 1,178,869[^afr-ops-pdf] |
| 2018 | 113,773 | 992,560[^afr-ops-pdf] |
| 2019 | 202,248 | 1,027,941[^afr-ops-pdf] |
| 2020 | 201,746 | 801,441[^afr-ops-pdf] |
| 2021 | 130,306 | 519,645[^afr-ops-pdf] |
| 2022 | 195,947 | 735,507[^afr-ops-pdf] |
| 2023 | 248,395 | 960,834[^afr-ops-pdf] |

These are this project's own sums of the source's monthly figures, not a
total the operator publishes anywhere as one number.[^afr-ops-pdf] The
source data itself is not perfectly clean: three consecutive months in
mid-2019 show negative or zero main-line passenger figures, which likely
reflect an accounting correction during a service disruption rather than
literal negative ridership — no source explains it, so it's reported here
exactly as it appears in the primary data, not smoothed away.

## Remaining gaps

This series ends in December 2023, before the reopening, so it cannot show
current or post-reopening ridership — not established here — and it
doesn't reach back to a pre-Typhoon-Morakot baseline either, since it
starts only from 2014.[^afr-ops-pdf] No source found — including a deliberate
search of the operator's own news archive around the plausible one-year
reopening anniversary — gives a stated post-reopening ridership recovery
figure. TPASS coverage stays unconfirmed. Intermediate main-line segment
fares beyond the two corroborated endpoints, and the exact Zhushan-line
daily ticket cap, are both unresolved.
