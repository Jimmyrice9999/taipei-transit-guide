# Taipei Metro (TRTC/NTMC) fares — research findings, 28 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes,
> not sources. No existing `docs/research/rail/metro/operations/fares.md`
> or equivalent existed to check against — a genuine gap, not a corpus
> correction. This is distinct from the cross-operator ticketing guides at
> `content/ticketing/guides/cards-passes-and-fares.md` and `fare-history.md`,
> which cover EasyCard/TPASS generally rather than TRTC/NTMC's own fare
> structure.

## What is established

- **TRTC's distance-fare bands, official PDF: 10 bands, NT$20 to NT$65.** Source: TRTC, 臺北捷運系統票價表, PDF via `https://www.metro.taipei/cp.aspx?n=ECEADC266D7120A7`, PRIMARY, High confidence, full PDF read directly. Quoted: 「搭乘距離　票價　小（等）於5公里　20元...大於31公里　65元」. Bands: ≤5km NT$20 · >5–8km NT$25 · >8–11km NT$30 · >11–14km NT$35 · >14–17km NT$40 · >17–20km NT$45 · >20–23km NT$50 · >23–27km NT$55 · >27–31km NT$60 · >31km NT$65. Corroborated independently by zh.wikipedia's identical band table (SECONDARY, Medium confidence, matches exactly).
- **EasyCard and paper-token fares are currently identical — no discount for stored-value cards.** Source: TRTC, stored-value card page, `https://www.metro.taipei/cp.aspx?n=CEF54168B23F73B4&s=9C19A1790ED1E5B4`, PRIMARY, High confidence: 「普通卡(含聯名卡、Debit卡)、學生卡及優待卡搭乘捷運以單程票價全額扣款。」 This directly contradicts a common assumption (and the task's own working premise) that EasyCard is cheaper than a token — it is not, currently.
- **Concession fares: 40% of full fare for seniors, disability-certificate holders (plus one companion), and Taipei-registered children aged 6–12.** Source: TRTC, single-journey ticket page, PRIMARY, High confidence: 「敬老愛心優惠票：全票之4折票價」; 「兒童優惠票：全票之4折票價」.
- **Unlimited-ride passes, current NT$ figures**: Day Pass NT$150 (activates on first use, valid until service end that day); 24-hour NT$180; 48-hour NT$280; 72-hour NT$380. Source: TRTC, travel-passes page, `https://www.metro.taipei/cp.aspx?n=CEF54168B23F73B4&s=9D540D31C5F81237`, PRIMARY, High confidence. Confirmed usable on TRTC + NTMC's Circular Line; whether the three light-rail lines (Danhai/Ankeng/Sanying) are covered is not confirmed either way.
- **TRTC's current frequent-rider program: percentage-tiered cash rebate, effective 3 January 2026.** Source: TRTC, 常客優惠方案, `https://www.metro.taipei/cp.aspx?n=AB56163F79ECB2C2`, PRIMARY, High confidence. Tiers: 11–20 rides/month = 5% cashback; 21–40 = 10%; 41+ = 15%, calculated on the prior month's spend and credited the following month. Excludes social-welfare cards, digital student IDs, TPASS, bike/pet tickets, group fares.
- **A secondary claim (zh.wikipedia, citing the same live URL as above but as it stood in 2020, unverifiable via archive.org which is blocked in this environment) states the current tiered scheme replaced a flat 20%-off (8折) EasyCard discount, removed 1 February 2020.** SECONDARY, Medium confidence — could not be verified against the page as it stood in 2020; web.archive.org fetches fail categorically in this environment. If true, this would mean EasyCard WAS cheaper than a token before 2020, consistent with the task's original premise, just not today.
- **TRTC senior/disability card monthly point allowance: 600 points/month (1 point = NT$1), usable on TRTC, NTMC's Circular Line and light rail, Maokong Gondola, and Taipei-area joint bus operators (New Taipei residents get the same 600 points minus Maokong Gondola).** Source: TRTC FAQ, `https://www.metro.taipei/News_Content.aspx?n=566DA580861CEE77&sms=87415A8B9CE81B16&s=41B78C4788395C41`, PRIMARY, High confidence. After points exhausted: 40% off (MRT/light rail) or 50% off (bus).
- **NTMC's own FAQ states a different figure for the same benefit: 480 points/month.** Source: NTMC FAQ, `https://www.ntmetro.com.tw/basic/?node=10005`, PRIMARY, High confidence: 「新北市及臺北市敬老卡與愛心卡，每月享有480點社福點數」. **Genuine, unresolved conflict — see below.**
- **NTMC publishes its own distance-banded fare table, as an image, for each of its four lines**, all fetched and read directly from ntmetro.com.tw: Danhai LRT NT$20–30 (V01–V11 plus V26–V28 branch); Ankeng LRT NT$20–25 (K01–K09); Circular Line NT$20–40 (Y07–Y20); Sanying Line NT$20–35 (LB01–LB12). All PRIMARY, High confidence. The step pattern (NT$5 increments) matches TRTC's own band spacing, suggesting a shared methodology, though no NTMC page explicitly states this — the connection is an inference, not a quoted claim.
- **NTMC fares are set through a distinct statutory process from TRTC's**: New Taipei City's own Mass Transit System Fare Review Committee (新北市政府大眾捷運系統運價審議委員會) reviews and the city government ratifies. Source: NTMC FAQ, PRIMARY, High confidence: 「淡海輕軌收費標準業經新北市政府大眾捷運系統運價審議委員會審議通過並奉市府核定」.
- **NTMC concession fares match TRTC's 40% rate.** Same NTMC FAQ, PRIMARY, High confidence: 「持社福卡...搭乘享有票價4折優惠；新北市兒童卡、臺北市國小數位學生證或臺北市兒童優惠卡搭乘享有票價4折優惠」.
- **NTMC's frequent-rider mechanic is structurally different from TRTC's**: a flat "spend NT$200, get NT$50 back" rebate, not a percentage tier. Same NTMC FAQ, PRIMARY, High confidence: 「搭乘票價累積滿200元可回饋50元」.
- **Danhai LRT fare history (secondary, not independently verified against a primary announcement)**: regular fares began 1 February 2019; a NT$5 system-wide reduction plus an additional 20% electronic-card discount applied from 1 Feb–30 Apr 2019 as a launch promotion; free trial operation ran from 24 December 2018. Source: zh.wikipedia, SECONDARY, Medium confidence.
- **A NT$50 flat combined passenger-plus-bicycle single fare exists for bicycle carriage on Danhai LRT** — a genuine flat fare, but for bicycle carriage specifically, not ordinary passenger travel. Source: zh.wikipedia, SECONDARY, Medium confidence.
- **Transfer discounts currently apply to QR-code/mobile-payment instruments specifically (悠遊付, iPASS MONEY, icash Pay, LINE Pay Money, TWQR), not confirmed either way for a plain physical EasyCard tap.** Source: TRTC FAQ, `https://www.metro.taipei/News_Content.aspx?n=566DA580861CEE77&sms=87415A8B9CE81B16&s=6AEC68627B4C4FB1`, PRIMARY, High confidence, page revision date stated as 2026-07-01. Discount applies bidirectionally between bus and MRT (or NTMC light rail) if the transfer completes within 1 hour with no other mode in between, and is credited retroactively the following month by the payment provider, not deducted at the gate.
- **TRTC↔NTMC Circular Line through-fare interchange rules**: at in-station interchanges (大坪林, 景安, 頭前庄) no tap-out is needed; at out-of-station interchanges (板橋, 新埔) passengers must tap out and back in within 20 minutes, with the fare reconciled to the shortest-path through-fare on final exit. Source: TRTC FAQ, PRIMARY, High confidence.

## Conflicts

- **Senior/disability monthly social-welfare point allowance: 600 points (TRTC's own FAQ) vs 480 points (NTMC's own FAQ), for what both pages describe as the same benefit covering the same population.** Not resolved — both are primary sources, directly contradicting each other. Publish both figures with their sources; do not average or pick.
- **Whether EasyCard was ever cheaper than a paper token**: TRTC's site today states no discount exists. A secondary (zh.wikipedia) claim, unverifiable via a blocked archive.org, says a flat 20% EasyCard discount was removed on 1 February 2020. If true, the "EasyCard is cheaper" premise was correct historically but is not correct today — publish the historical claim as secondary and unverified, not as established fact.
- **A wikipedia rendering of TRTC's fare table appears to show a third, ~60%-of-full-fare child-concession column, distinct from TRTC's own stated 40%.** Not resolved — likely a mis-extraction of the source table rather than a genuine third tier, but not confirmed either way. Do not publish a 60% figure; TRTC's own direct 40% statement is the one used on the content page.

## Checked and failed

- **`web.metro.taipei` (TRTC's newer client-rendered site)** — returns only an empty SPA shell to a non-browser fetch for every fare-related URL tried; the legacy server-rendered `www.metro.taipei` domain was used instead throughout, successfully. Checked 2026-08-28.
- **web.archive.org**, needed to verify the pre-2020 fare-page wording for the EasyCard-discount-removal claim — fetches fail categorically in this environment ("Claude Code is unable to fetch from web.archive.org"). Not verified.
- **The Taipei City Transportation Bureau statistical annual report PDF and NTMC's `.odt` fare-detail attachments** — the annual report's tables are scanned images (unextractable without a working `pdftotext` pass, not attempted by the scout, which had no Bash tool); the `.odt` files are zip/XML archives the scout's toolset could not open. Checked 2026-08-28.
- **Whether the 24/48/72-hour passes cover Danhai/Ankeng/Sanying LRT** — TRTC's page text confirmed Circular Line coverage only; the three light-rail lines are neither confirmed included nor excluded. Checked 2026-08-28.
- **TRTC's original 1996 opening fare structure** — not found in any page reached this run; no news-archive search was possible (WebSearch budget exhausted). Checked 2026-08-28.

## Stated gaps

- The 600-vs-480-point conflict on senior/disability social-welfare cards is unresolved; would be settled by contacting either operator directly or finding a dated announcement explaining a change.
- Whether EasyCard was cheaper than a token before February 2020 rests on an unverified secondary claim.
- The apparent third child-concession tier (~60%) in a Wikipedia rendering of TRTC's fare table is unresolved.
- Whether the three NTMC light-rail lines are covered by TRTC's day/24hr/48hr/72hr passes is unconfirmed.
- Whether a physical EasyCard tap (as opposed to QR/mobile-payment) still receives any bus↔MRT transfer discount is unconfirmed from TRTC's current site.
