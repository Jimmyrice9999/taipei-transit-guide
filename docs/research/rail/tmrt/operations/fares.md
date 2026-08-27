# Taichung Metro fare history — research findings, 28 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. No existing research file for TMRT addressed fares before this report. This is the third of three parallel fare-history reports this session, after TYMC and KRTC — all three independently found the same structural gap: none of the three operators publish a base single-fare figure as static text anywhere on their own site.

This is a one-subject report on the Taichung Metro Green Line's ticket
types, fare concessions and regional season passes, drawing on three of
the operator's own pages, fetched and parsed directly from raw HTML.

## What is established

- **TMRT does not publish a base single-fare figure in NT$ as static text anywhere on its site — its "票價及乘車時間" (Fare and Travel Time) page is a station-pair fare-query tool with dropdown selectors, rendering results with JavaScript this session's fetch tooling could not execute; multiple ticket-type entries separately reference an unstated "單程票最低票價" (minimum single-ticket fare) as a fallback calculation basis without ever stating the figure.** Source: Taichung Metro Corporation (臺中捷運股份有限公司), `票價及乘車時間` (Fare and Travel Time), `https://www.tmrt.com.tw/metro-life/ride-time-and-fare`, PRIMARY, High confidence, fetched and read in full (raw HTML parsed directly). Original-language basis: `票價一覽表 單一車站至所有車站...單一起訖區間 起站...訖站` (a dropdown query interface, not a static table) and, from the ticket-types page, `則以本公司公告之單程票最低票價計算`.
- **Standard single tickets are priced "per the published fare" (依公告票價收費); a senior/disability concession ticket is priced at 50% of the published fare, for those 65 and over or holding a disability certificate plus one required companion; a lost or damaged single ticket carries a NT$50 replacement fee.** Source: Taichung Metro Corporation, `車票種類` (Ticket Types), `https://www.tmrt.com.tw/metro-life/ticket-types`, PRIMARY, High confidence, fetched and read in full. Original-language basis: `單程票：依公告票價收費` and `敬老愛心優待票：依公告票價之5折收費` and `旅客遺失或毀損本公司單程票，需繳付單程票工本費新臺幣50元`.
- **A group ticket for parties of 10 or more is priced at 80% of the published fare, multiplied by the group size; the whole group must enter and exit together through a staff-operated gate.** Same source, PRIMARY, High confidence. Original-language basis: `適用身分 10人以上團體 售票金額 依公告票價之(8折優惠票價)×(團體人數)` and `旅客需團進團出，由公務門進出車站`.
- **A bicycle ticket and a double-bass ticket are each separately priced at NT$70, each covering exactly one item accompanying one passenger, both requiring staff-assisted entry/exit through a service gate and both barred from Taichung HSR Station.** Same source, PRIMARY, High confidence. Original-language basis: `攜帶自行車票...售票金額 每張售價70元` and `攜帶低音提琴票...售票金額 每張售價70元` and, for both, `捷運高鐵臺中站不開放進出`.
- **A dedicated welfare-card concession applies to three groups: a senior/disability card (敬老愛心卡) for citizens 65+, Taichung-registered Indigenous residents 55+, or disability-certificate holders; a companion card (愛陪卡), usable only immediately after its paired senior/disability card taps in, otherwise charged full fare; and a Taichung child card (or a linked digital student ID) for children aged 6 up to (not including) 12 who are Taichung-registered or Taichung-enrolled — all three receive 50% of the published fare.** Same source, PRIMARY, High confidence. Original-language basis: `敬老愛心卡、愛陪卡：依公告票價之5折收費，其中愛陪卡單獨使用時，依公告票價原價收費；如緊隨對應之愛心卡使用，享5折優惠票價` and `台中市兒童卡...依公告票價之5折收費`.
- **Taichung's own senior/disability card additionally carries a monthly government-funded points subsidy — NT$1,000 (1,000 points at 1 point = NT$1) for most cardholders, NT$1,500 for Indigenous cardholders — usable to offset metro fares specifically, separate from and in addition to the 50% concession fare itself.** Same source, PRIMARY, High confidence. Original-language basis: `臺中市敬老愛心卡每月補助1,000點數(原住民每月1,500點數)，可用於折抵捷運車資，1點1元`.
- **Three TMRT-only day/hour passes are priced at NT$120 (1-day, valid for the remainder of the day's operating hours after activation), NT$150 (24 hours from activation) and NT$250 (48 hours from activation), each unlimited-ride on the Green Line only, sold at station information counters.** Same source, PRIMARY, High confidence. Original-language basis: `旅遊票：一日票/24小時票/48小時票...售票金額 1日票：120元。24小時票：150元。48小時票：250元`.
- **A separate multi-modal MaaS ("Mobility as a Service") hour-based QR pass, branded "Taichung go套票," issued under a City of Taichung MaaS programme and covering both TMRT and designated city buses, is priced at NT$180 (24 hours), NT$280 (48 hours) and NT$380 (72 hours).** Same source, PRIMARY, High confidence. Original-language basis: `臺中市政府為推動交通行動服務(Mobility as a Service, MaaS)計畫，推出時數型QR Code交通套票...套票種類 24小時：180元。48小時：280元。72小時：380元`.
- **A regional 30-day season pass system, "中部地區公共運輸定期票" (Central Taiwan Regional Public Transport Season Pass), has four distinct geographic tiers, each with a resident/non-resident price split where applicable: a Taichung City pass (Taichung residents NT$299, non-residents NT$599, covering TRA, TMRT, city buses and YouBike within Taichung), a Changhua County pass (NT$699, covering TRA, intercity coaches and city buses in Changhua), a Nantou County pass (NT$699, covering TRA's Jiji Line only, plus intercity coaches, in Nantou), and a combined Taichung-Changhua-Nantou-Miaoli regional pass (Taichung residents NT$699, non-residents NT$999, covering TRA, TMRT, intercity coaches, city buses and YouBike across all four counties).** Source: Taichung Metro Corporation, `中部地區公共運輸定期票` (Central Taiwan Regional Public Transport Season Pass), `https://www.tmrt.com.tw/metro-life/MonthlyTicket`, PRIMARY, High confidence, fetched and read in full. Original-language basis: the pass-tier table giving `臺中市定期票 臺中市民 299 / 非臺中市民 599`, `彰化縣定期票 民眾 699`, `南投縣定期票 民眾 699`, `中彰投苗定期票 臺中市民 699 / 非臺中市民 999`. The same page notes the Changhua and Nantou county passes cannot initially be used on TRA, pending equipment readiness, without giving a date. Original-language basis: `彰化縣定期票、南投縣定期票於臺鐵初期無法使用，待設備完善後實施`.
- **Every regional season pass must be activated within 30 days of purchase and, once activated, is valid for 30 consecutive days from first use; passes are sold via EasyCard, iPass or icash cards, at TMRT stations, certain regional TRA stations, intercity bus stations, and two convenience-store chains' kiosks (FamiPort, 7-Eleven ibon).** Same source, PRIMARY, High confidence. Original-language basis: `定期票須於購買後30日內啟用...有效期間自啟用當日起算連續30日之營運時間結束截止`.

## Conflicts

None found between independent sources — but the two TMRT pages read for
this report give different, non-contradictory levels of detail for the
same regional pass system: the ticket-types page names only two tiers
(Taichung City and the four-county combined pass), while the dedicated
season-pass page names all four tiers (adding Changhua County and Nantou
County individually). This report treats the dedicated page as the more
complete primary account rather than treating the ticket-types page's
narrower summary as contradicting it.

## Checked and failed

- **A base/maximum single-fare figure in NT$ for any specific station pair** — checked 2026-08-28; TMRT's own fare-and-travel-time page is a dynamic dropdown fare-query tool rendering results via JavaScript, and no ticket-type page states the figure as text — several instead reference an unstated "minimum single fare" as a fallback-charge basis without giving the number. This is now the third of three Taiwan metro operators studied this session (after TYMC and KRTC) where this exact same class of gap was independently confirmed.
- **A date for when the Changhua County and Nantou County season-pass tiers gain TRA compatibility** — checked 2026-08-28; the source states only that it awaits unspecified equipment readiness, no date given.
- **A launch date for the "Taichung go套票" MaaS hour-based pass** — checked 2026-08-28; not stated on the page read.
- **Search-engine queries for TMRT fare-change news coverage** — checked 2026-08-28; the session's web-search budget was exhausted before this task could issue a query.

## Stated gaps

No base single-fare NT$ figure for any specific station pair is
established by any source read — genuinely absent from TMRT's own static
pages, mirroring the identical gap independently found this session for
both TYMC and KRTC. No date is given for the Changhua/Nantou season-pass
tiers' eventual TRA compatibility, or for the MaaS hour-pass's launch.
