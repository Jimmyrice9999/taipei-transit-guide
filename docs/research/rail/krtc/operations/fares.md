# Kaohsiung Metro fare history — research findings, 28 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. No existing research file for KRTC addressed fares before this report.

This is a one-subject report on Kaohsiung Metro's ticket types, fare
concessions and time-based passes, drawing on the operator's own ticketing
pages, fetched and parsed directly from raw HTML.

## What is established

- **KRTC does not publish a base single-fare figure in NT$ on its own ticketing pages — the single-ticket page states only that price follows the fare chart (票價圖) physically posted above the add-value ticket machines at each station.** Source: Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司), `單程票` (Single Ticket), `https://www.krtc.com.tw/Ticket/ticket_more?id=f5cd710a91ad435eb0a5d2fd4bb61a78`, PRIMARY, High confidence, fetched and read in full (raw HTML parsed directly). Original-language basis: `售價金額 依本公司公告於各車站加值售票機上方之票價圖`.
- **A social-welfare single ticket gives seniors (65+) and disability-card holders (plus one named companion) a 50% concession fare, same-day use only, purchased at the station service counter.** Same publisher, `社福單程票` (Social-Welfare Single Ticket), `https://www.krtc.com.tw/Ticket/ticket_more?id=69f059233421446e93c730315b400947`, PRIMARY, High confidence, fetched and read in full. Original-language basis: `適用身分 1.適用年滿65歲之長者...2.持有身心障礙證明之身心障礙者及其必要陪伴者(限1人)` and `售價金額 單程票半價`.
- **A bicycle ticket, allowing one person to bring one standard bicycle aboard, has a stated full price of NT$100 and a discounted rate of NT$80.** Same publisher, `腳踏車客票` (Bicycle Ticket), `https://www.krtc.com.tw/Ticket/ticket_more?id=adeeb7bce166403888238a770454725e`, PRIMARY, High confidence, fetched and read in full. Original-language basis: `售價金額 每張售價100元` and `優惠費率 每張優惠價80元`.
- **A group ticket, for parties of 10 or more, gives each traveller 80% of the published fare.** Same publisher, `團體票` (Group Ticket), `https://www.krtc.com.tw/Ticket/ticket_more?id=ee36c87184cb447188b10dda52581d58`, PRIMARY, High confidence, fetched and read in full. Original-language basis: `適用身分 供符合購票資格十人以上(含)團體旅客購買以搭乘捷運` and `售價金額 每人依票價圖之8折`.
- **A school-group discount ("捷運達人優惠"), for field-trip or graduation-trip groups of 20 or more students plus staff, gives a 50% concession fare, valid Monday to Friday only, fractions rounded down rather than up.** Same publisher, `捷運達人優惠`, `https://www.krtc.com.tw/Ticket/ticket_more?id=132d5e0afcb14c0fbfc3b904916d9216`, PRIMARY, High confidence, fetched and read in full, page dated 10 January 2023. Original-language basis: `限定對象為全國各公私立高中(職)、國中、國小校外教學活動(畢業旅行)之師生(限20人以上之團體搭乘為主)` and `團體人數達20人以上，提供捷運公告單程票價之半價優惠(小數點後無條件進入)`.
- **A 24/48-hour unlimited-ride metro pass ("高雄捷運效期票") is priced at NT$180 for 24 hours and NT$280 for 48 hours, activated automatically on first gate tap, non-rechargeable, single-user only, page last updated 20 May 2026.** Same publisher, `高雄捷運效期票 (24．48小時卡)`, `https://www.krtc.com.tw/Ticket/ticket_more?id=2d5b8a749e8140c59e430faf602654f3`, PRIMARY, High confidence, fetched and read in full. Original-language basis: `售價金額 24小時卡$180元 48小時卡$280元`.
- **QR-code single/double-day metro and metro-plus-light-rail passes are priced at NT$150 (1-day metro only), NT$250 (2-day metro only), NT$200 (1-day metro+LRT) and NT$325 (2-day metro+LRT), explicitly stated as effective from 1 January 2024 (民國113年1月1日).** Same publisher, `高雄捷運+輕軌一．二日搭乘票 (QR Code)`, `https://www.krtc.com.tw/Ticket/ticket_more?id=c97ac5f85c2a4d70862272ec95a98375`, PRIMARY, High confidence, fetched and read in full. Original-language basis: `一日捷運效期劵 原價$150元 二日捷運效期劵 原價$250元 一日捷運+輕軌效期劵 原價$200元 二日捷運+輕軌效期劵 原價$325元 註：以上售價自113/1/1起生效`. Sold only via third-party platforms (KKday, Klook, Trip.com), not at station counters or machines.
- **The "MeN Go" multi-modal time-based pass (covering metro, light rail, city buses, intercity coaches, a limited ferry allowance and YouBike 2.0) is priced, as a physical card, at NT$299 (24h), NT$399 (48h) and NT$499 (72h); as a QR code, at NT$199 (24h), NT$299 (48h) and NT$399 (72h).** Same publisher, `高雄交通效期票 (MeN Go 24．48．72小時)`, `https://www.krtc.com.tw/Ticket/ticket_more?id=492434ff3e6b427cbf08fff7821959a5`, PRIMARY, High confidence, fetched and read in full. Original-language basis: `實體卡片：24小時$299元、48小時$399元、72小時$499元 QR code：24小時$199元、48小時$299元、72小時$399元`. The page states the product is issued by a separate operator, 鴻圖股份有限公司 (the MeN Go operating unit), with KRTC selling it on commission.
- **A "TPASS x MeN Go" monthly pass exists as a named product on KRTC's own ticketing page, but that page states no price and refers the reader to MeN Go's own website for details.** Same publisher, `TPASS x MeN Go月票`, `https://www.krtc.com.tw/Ticket/ticket_more?id=dd138797ba3c4d9fafc6852ef3957b2a`, PRIMARY, High confidence for the fact of no price being stated, fetched and read in full. Original-language basis: `使用範圍 了解更多優惠方案 請參閱MeNGo官方網站`.

## Conflicts

None found — no second source addressing any of the above fares was located this session.

## Checked and failed

- **A base/maximum single-fare figure in NT$ for any station pair** — checked 2026-08-28; KRTC's own single-ticket page states only that price follows a fare chart posted physically at stations, not reproduced as text or a table on the page itself. Confirmed absent from the source, not merely unsearched.
- **A price for the "TPASS x MeN Go" monthly pass** — checked 2026-08-28; KRTC's own page for this product states no price and defers to a third-party operator's site, which was not fetched this session.
- **Whether the 24/48-hour pass ($180/$280) and the QR-code 1/2-day pass ($150-$325) prices have changed over time, beyond the one explicit 1 January 2024 effective date already found for the QR-code product** — checked 2026-08-28; the 24/48-hour pass page states only its most recent update date (20 May 2026), not a price-change history; whether that update changed the price or something else on the page is not stated.
- **Search-engine queries for KRTC fare-change news coverage** — checked 2026-08-28; the session's web-search budget was exhausted before this task could issue a query.
- **TDX's Metro ODFare endpoint for KRTC**, tried directly — checked 2026-08-28; returned "Valid API Key Required," and this session has no TDX API credentials configured.

## Stated gaps

No base single-fare NT$ figure for any specific station pair is established
by any source read — KRTC's fare chart is physical/image-based at
stations, not published as text or a data table on the operator's own
site, the same class of gap found separately for TYMC. The TPASS x MeN Go
monthly pass price is TBC. Whether any of the several fixed-price products
found here have changed price over time is TBC beyond the one explicit
2024 effective-date statement for the QR-code day passes.
