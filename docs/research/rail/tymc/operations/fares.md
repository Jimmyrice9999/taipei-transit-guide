# Taoyuan Airport MRT fare history — research findings, 28 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. `docs/research/rail/lines/airport-mrt.md` claim 18 already noted a January 2025 fare change (a NT$10 single-ticket discount cancellation) from secondary sources only, and explicitly flagged its own NT$160 base-fare figure as resting on a search-engine synthesis of blog/aggregator sources, not a primary page read directly. This report re-investigates via TYMC's own ticketing pages, fetched and parsed directly from raw HTML.

This is a one-subject report on the Taoyuan Airport MRT's fare and
ticket-type history, distinguishing what TYMC's own pages state directly
from what remains sourced only secondarily.

## What is established

- **On 2 January 2025 (民國114年1月2日), TYMC replaced its entire season-pass product line with a new "超值定期票" (Value Season Pass) scheme, discontinuing both the previous 通勤定期票 ("Dongdong" branded commuter pass, four card designs) and the 通勤135團體優惠專案 (Commute-135 group discount programme, three card designs).** Source: Taoyuan Metro Corporation (桃園大眾捷運股份有限公司), `桃捷自有定期票/團體票` (TYMC's Own Season Passes/Group Tickets), `https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/ticketson02.php`, PRIMARY, High confidence, fetched and read in full (raw HTML parsed directly). Original-language basis: `自114/1/2起桃園捷運推出超值定期票版面，原通勤定期票(鶇鶇)和通勤135團體優惠專案版面將不再販售`.
- **Holders of the old-design passes could continue using them, and were separately offered either a fee-free exchange into the new Value Season Pass, or a full refund at any station information desk (except A20 Xingnan) between 23 December 2024 and 30 June 2025 (113年12月23日至114年6月30日).** Same source, PRIMARY, High confidence. Original-language basis: `旅客原本持有的定期票仍可繼續使用，亦可選擇從113年12月23日到114年6月30日...辦理優惠退票` and, for the exchange, `持舊版面定期票續(換)購超值定期票者...可免票卡工本費`.
- **The new Value Season Pass's price is calculated as: full single-fare price × number of calendar days in the pass × 2 trips/day × a tiered discount multiplier — 42% for the 7-day pass, 35% for the 30-day pass, 33% for the 90-day pass, and 27% for the 120-day pass — for a specific origin-destination pair chosen at purchase.** Same source, PRIMARY, High confidence. Original-language basis: `超值定期票費用以單程票全票金額*日曆天*2趟*折扣數計算`, with the four tiers listed as `7天超值定期票 指定站間全票票價*7天*每天使用2次*42折`, `30天超值定期票...*30天...*35折`, `90天超值定期票...*90天...*33折`, `120天超值定期票...*120天...*27折`. This report does not independently recompute or restate these as final NT$ figures — the underlying single-fare price for any specific station pair was not established this session (see Checked and failed).
- **The discontinued old-design commuter pass used a different formula and materially different (less generous) discount tiers: 7-day at "approximately 75%" of full price over only 5 paid days, 30-day at 70% over 21 days, 60-day at "approximately 65%" over 42 days, 90-day at 60% over 63 days, and 120-day at 50% over 84 days — each multiplied by full single fare × 2 trips/day.** Same source, PRIMARY, High confidence. Original-language basis: `7天定期票 指定站間全票票價*5天*每天使用2次*約75折`, `30天定期票...*21天...*7折`, `60天定期票...*42天...*約65折`, `90天定期票...*63天...*6折`, `120天定期票...*84天...*5折`. This directly documents that the January 2025 change was a genuine repricing, not merely a rebranding — the day-count and discount multiplier both changed for every tier.
- **The discontinued 通勤135團體優惠專案 group pass offered a 100-day pass to organisations ordering 300 or more cards at once, priced at full single fare × 2 trips/day × 70 "commute days" × a 50% discount, plus a NT$50 per-card manufacturing fee, open to registered companies, community/apartment associations, schools and government bodies.** Same source, PRIMARY, High confidence. Original-language basis: `團體定期票使用天期100天 團體申辦300張以上 每張享5折優惠` and `費用 指定站間全票票價*每天使用2次*通勤日70天*5折`.
- **Every season-pass product (old and new) charges a NT$50 non-refundable card-manufacturing fee on first purchase, is a named/personal card usable only by its registered holder, cannot be reloaded with stored value, and can be refunded before expiry only with a NT$20 service-fee deduction.** Same source, PRIMARY, High confidence. Original-language basis: `繳交超值定期票費用及工本費50元/張(不可退還)` and `定期票為記名票卡，限本人使用` and `本公司得扣除附加於超值定期票之優待並加收手續費20元`.
- **Single-ticket concession fares are structured as a percentage of the "published fare" (公告票價) rather than a flat discount amount: senior citizens (65+), holders of a disability card and one named companion, and Taoyuan-registered Indigenous residents 55 and older receive a 50% concession fare; children aged 6 (inclusive) to under 12 receive an 80%-of-published-fare concession fare.** Source: Taoyuan Metro Corporation, `單程票/一日票` (Single Tickets/Day Passes), `https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/ticketson01.php`, PRIMARY, High confidence, fetched and read in full. Original-language basis: `敬老愛心優待票 依公告票價之5折收費` and `兒童單程優待票 依公告票價之8折收費`, with eligibility `65歲以上民眾`, `領有身心障礙手冊及其陪伴者1名`, `設籍桃園市且年滿55歲之原住民` and `6歲(含)以上、未滿12歲之本國兒童`.
- **Single tickets are cash-purchase only (not available via stored-value card reload), valid only on the day of purchase, and refundable only if unused on the same day.** Same source, PRIMARY, High confidence. Original-language basis: `支付方式 現金` and `車票使用期限 發售當日營運時間內有效` and `退票 未使用可於購買當日辦理退票`.

## Conflicts

None found — no second source addressing the January 2025 season-pass repricing was located this session; the existing corpus's separate January 2025 claim (the NT$10 single-ticket discount cancellation) concerns a different product (single tickets, not season passes) and is not in conflict with anything found here, though see Stated gaps for whether the two changes are actually connected.

## Checked and failed

- **A specific NT$ base or maximum single-fare figure for any station pair** — checked 2026-08-28; both fetched primary ticketing pages state single-ticket and season-pass prices only as formulas referencing "公告票價" (the published fare) or link out to a separate "票價查詢" (fare query) tool, which is a dynamic, JavaScript-driven fare calculator this session's fetch tooling could not read. This is a different, more specific failure than the existing corpus's already-recorded gap (which rested on an unverified search synthesis) — this report confirms directly that TYMC's own static ticketing pages do not themselves state the figure, rather than merely failing to find it.
- **Independent primary re-confirmation of the NT$10 single-ticket discount cancellation, effective 2 January 2025** — checked 2026-08-28; neither of the two ticketing pages fetched this session mentions this specific change (they describe current rules only, not a discount-cancellation history). The existing corpus's GVM secondary-source citation for this claim was not re-verified this session and is neither confirmed nor contradicted by what was read here.
- **Whether the 2 January 2025 season-pass repricing and the separately-reported 2 January 2025 single-ticket discount cancellation are one coordinated fare reform or two coincidentally same-dated changes** — checked 2026-08-28; no source read states a connection between them. Not assumed either way.
- **Search-engine queries for contemporaneous news coverage of the season-pass repricing** — checked 2026-08-28; the session's web-search budget was exhausted before this task could issue a query.
- **TDX's Metro ODFare endpoint for TYMC**, tried directly — checked 2026-08-28; returned "Valid API Key Required," and this session has no TDX API credentials configured. No committed `data/tdx/TYMC` fare pull exists in the repository either.

## Stated gaps

No specific NT$ fare figure for any station pair is established by any
source read this session, for either single tickets or season passes — the
formulas are established, but the "published fare" (公告票價) variable
they reference is not, since it requires the JavaScript fare-query tool
this session's tooling cannot execute, or authenticated TDX access this
session does not have. Whether the season-pass repricing and the
single-ticket discount cancellation are connected as one fare reform is
TBC. Independent (non-TYMC) confirmation of the discount cancellation
remains at the same secondary-source strength the existing corpus already
recorded — this report neither strengthens nor weakens it, since neither
fetched page addressed it.
