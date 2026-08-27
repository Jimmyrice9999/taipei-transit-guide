---
title: Kaohsiung Metro fare history
summary: Nine ticket products with real NT$ figures, including a QR day pass dated to an exact 2024 effective date — while the base single fare itself sits only on a chart posted at station machines, never as text on the operator's own site.
order: 2
operator: KRTC
updated: 2026-08-28
facts:
  - label: Social-welfare single ticket concession
    value: 50% of the single-ticket fare
    source: krtc-welfare-ticket
  - label: Group ticket (10+) concession
    value: 80% of the published fare per person
    source: krtc-group-ticket
  - label: School-group discount concession
    value: 50%, weekdays only, groups of 20+
    source: krtc-school-discount
  - label: QR-code day passes effective date
    value: 1 January 2024
    source: krtc-qr-day-pass
  - label: MeN Go pass operator
    value: 鴻圖股份有限公司 (a separate company; KRTC sells on commission)
    source: krtc-mengo-pass
  - label: Base/maximum single fare in NT$
    value: TBC (published only as a chart at station machines, not as site text)
  - label: TPASS x MeN Go monthly pass price
    value: TBC (KRTC's page defers to MeN Go's own site)
    source: krtc-tpass-mengo
specs:
  - label: Bicycle ticket, full price
    value: "100"
    unit: NT$
    source: krtc-bicycle-ticket
  - label: Bicycle ticket, discounted rate
    value: "80"
    unit: NT$
    source: krtc-bicycle-ticket
  - label: 24-hour unlimited metro pass
    value: "180"
    unit: NT$
    source: krtc-24-48-pass
  - label: 48-hour unlimited metro pass
    value: "280"
    unit: NT$
    source: krtc-24-48-pass
  - label: QR 1-day metro-only pass
    value: "150"
    unit: NT$
    source: krtc-qr-day-pass
  - label: QR 2-day metro-only pass
    value: "250"
    unit: NT$
    source: krtc-qr-day-pass
  - label: QR 1-day metro+LRT pass
    value: "200"
    unit: NT$
    source: krtc-qr-day-pass
  - label: QR 2-day metro+LRT pass
    value: "325"
    unit: NT$
    source: krtc-qr-day-pass
  - label: MeN Go physical card, 24/48/72 hours
    value: "299 / 399 / 499"
    unit: NT$
    source: krtc-mengo-pass
  - label: MeN Go QR code, 24/48/72 hours
    value: "199 / 299 / 399"
    unit: NT$
    source: krtc-mengo-pass
sources:
  - id: krtc-single-ticket
    title: Single Ticket
    titleOriginal: 單程票
    publisher: Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)
    url: https://www.krtc.com.tw/Ticket/ticket_more?id=f5cd710a91ad435eb0a5d2fd4bb61a78
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched and parsed directly from raw HTML. States price follows the fare chart posted at station ticket machines; states no NT$ figure itself.
  - id: krtc-welfare-ticket
    title: Social-Welfare Single Ticket
    titleOriginal: 社福單程票
    publisher: Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)
    url: https://www.krtc.com.tw/Ticket/ticket_more?id=69f059233421446e93c730315b400947
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched and parsed directly from raw HTML. States the 50% concession and eligibility (seniors 65+, disability-card holders plus one companion).
  - id: krtc-bicycle-ticket
    title: Bicycle Ticket
    titleOriginal: 腳踏車客票
    publisher: Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)
    url: https://www.krtc.com.tw/Ticket/ticket_more?id=adeeb7bce166403888238a770454725e
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched and parsed directly from raw HTML. States NT$100 full price and NT$80 discounted rate for bringing one bicycle aboard.
  - id: krtc-group-ticket
    title: Group Ticket
    titleOriginal: 團體票
    publisher: Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)
    url: https://www.krtc.com.tw/Ticket/ticket_more?id=ee36c87184cb447188b10dda52581d58
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched and parsed directly from raw HTML. States 80%-of-fare concession for parties of 10 or more.
  - id: krtc-school-discount
    title: Metro Expert Discount (school field-trip groups)
    titleOriginal: 捷運達人優惠
    publisher: Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)
    url: https://www.krtc.com.tw/Ticket/ticket_more?id=132d5e0afcb14c0fbfc3b904916d9216
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched and parsed directly from raw HTML, dated 10 January 2023. States the 50% weekday-only concession for school groups of 20 or more.
  - id: krtc-24-48-pass
    title: "24/48-Hour Unlimited Metro Pass"
    titleOriginal: 高雄捷運效期票 (24．48小時卡)
    publisher: Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)
    url: https://www.krtc.com.tw/Ticket/ticket_more?id=2d5b8a749e8140c59e430faf602654f3
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched and parsed directly from raw HTML, dated 20 May 2026. States NT$180 (24h) and NT$280 (48h) prices.
  - id: krtc-qr-day-pass
    title: "Metro + Light Rail 1/2-Day QR Code Pass"
    titleOriginal: 高雄捷運+輕軌一．二日搭乘票 (QR Code)
    publisher: Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)
    url: https://www.krtc.com.tw/Ticket/ticket_more?id=c97ac5f85c2a4d70862272ec95a98375
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched and parsed directly from raw HTML. States the four prices and an explicit "effective from 1 January 2024" date; sold only via third-party travel platforms.
  - id: krtc-mengo-pass
    title: "Kaohsiung Transit Time Pass (MeN Go 24/48/72-Hour)"
    titleOriginal: 高雄交通效期票 (MeN Go 24．48．72小時)
    publisher: Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)
    url: https://www.krtc.com.tw/Ticket/ticket_more?id=492434ff3e6b427cbf08fff7821959a5
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched and parsed directly from raw HTML. States physical-card and QR-code prices for all three durations; names the separate operating company behind the product.
  - id: krtc-tpass-mengo
    title: "TPASS x MeN Go Monthly Pass"
    titleOriginal: TPASS x MeN Go月票
    publisher: Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)
    url: https://www.krtc.com.tw/Ticket/ticket_more?id=dd138797ba3c4d9fafc6852ef3957b2a
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched and parsed directly from raw HTML. States no price and refers readers to a third-party operator's own site.
---

## Concession fares: five categories, five different rates

KRTC publishes several distinct single-ticket concession categories, each
with its own eligibility and its own discount level rather than one
uniform "concession fare." Seniors aged 65 and over, and disability-card
holders together with one named companion, qualify for a social-welfare
single ticket at 50% of the standard single fare.[^krtc-welfare-ticket]
Parties of ten or more travelling together qualify for a group ticket at
80% of the published fare per person.[^krtc-group-ticket] School field-trip
or graduation-trip groups of twenty or more students and staff qualify for
a separate 50% weekday-only concession, with any fractional amount rounded
down rather than up.[^krtc-school-discount] A bicycle ticket, letting one
passenger bring one standard bicycle aboard, has its own flat pricing: a
full price of NT$100 and a discounted rate of NT$80.[^krtc-bicycle-ticket]

## Time-based passes, priced and dated

Beyond single tickets, KRTC sells several unlimited-ride time-based
products with real, stated NT$ figures. A 24/48-hour unlimited metro pass
costs NT$180 for 24 hours or NT$280 for 48 hours, activating automatically
on first gate tap.[^krtc-24-48-pass] A QR-code day-pass product, sold only
through third-party travel platforms (KKday, Klook, Trip.com) rather than
at station counters, prices a metro-only pass at NT$150 (1 day) or NT$250
(2 days), and a metro-plus-light-rail pass at NT$200 (1 day) or NT$325 (2
days) — with the operator's own page stating these prices took effect from
1 January 2024, one of the few dated fare figures found for this
system.[^krtc-qr-day-pass]

A broader multi-modal pass, branded "MeN Go" and covering metro, light
rail, city buses, intercity coaches, a limited ferry allowance and YouBike
2.0, is sold by KRTC on commission for a separate operating company
(鴻圖股份有限公司). As a physical card it costs NT$299 (24h), NT$399 (48h)
or NT$499 (72h); as a QR code it costs NT$199, NT$299 or NT$399 for the
same durations respectively.[^krtc-mengo-pass] A related "TPASS x MeN Go"
monthly pass appears as a named product on KRTC's own site, but that page
states no price at all, referring readers to the MeN Go operator's own
website instead.[^krtc-tpass-mengo]

## The base single fare itself is not on the website

KRTC's own single-ticket page states plainly that price follows the fare
chart (票價圖) posted physically above the add-value ticket machines at
each station — not a figure or table reproduced anywhere in the page's own
text.[^krtc-single-ticket] Every concession and group discount described
above is defined as a percentage of that chart's figure, so this page can
publish the discount structure precisely while the underlying base fare
for any specific station pair remains genuinely unstated by the source,
not merely unfound.

## Remaining gaps

No base or maximum single-fare figure in NT$, for any station pair, is
established by any source read for this page — confirmed absent from
KRTC's own text, the same class of gap separately found for the Taoyuan
Airport MRT. The TPASS x MeN Go monthly pass has no price stated anywhere
on KRTC's own site. Whether any of the fixed-price products described here
have changed price over time is not established beyond the one explicit
2024 effective-date statement for the QR-code day passes.
