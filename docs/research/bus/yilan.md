# Regional bus — Yilan

**Research file — leads, not sources.** The official pages and TDX response below were fetched and read before the content page was written.

**Version 1.0 — 7 September 2026**
**Status: current official verification for `content/bus/regional/yilan.md`.**

## What is established

- **The dated TDX route snapshot contains 72 Yilan County Route records and 187 supplied SubRoutes variants.** **Source:** *Yilan County city-bus route snapshot*, `https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/YilanCounty?$format=JSON`, Taiwan MOTC TDX, PRIMARY, High confidence because the repository's national pull was fetched for the 7 September 2026 snapshot. Original-language/data basis: the `Route` response's `RouteUID` records and `SubRoutes` arrays. The count is a snapshot measurement, not a timeless unique-route count.

- **The same snapshot contains eight distinct operator labels.** **Source:** the same full TDX response, PRIMARY, High confidence. Computed labels: Kuo-Kuang Bus, Kamalan Bus, Capital Bus, Metropolitan Bus, Yilan County Government, Wujie Township Office, Nan'ao Township Office and Su'ao Township Office. This is an operator-label count in the route snapshot, not a legal-company census.

- **Yilan's Transportation Department Public Transport Section is assigned route planning/adjustment, transfer-station construction and operation, and city-bus service-indicator evaluation and rewards.** **Source:** *Yilan Transportation Department responsibilities*, titleOriginal `業務職掌`, `https://trp.e-land.gov.tw/cp.aspx?n=15455`, Yilan County Government Transportation Department, PRIMARY, High confidence for the displayed remit. Original-language basis: `本縣市區公車路線規劃及調整相關業務`, `轉運站興建及維護營運相關業務`, and `市區公車服務指標評鑑及獎懲核定`.

- **The current county local-transport page displays ordinary city-bus fares of NT$20 full / NT$10 half in cash and NT$15 full / NT$10 student on electronic tickets, with additional local-card concessions and free-ride rules.** **Source:** *Yilan local transport*, titleOriginal `區內交通`, `https://travel.yilan.gov.tw/zh-tw/local-transport/`, Yilan County Government, PRIMARY, High confidence because the full page was fetched on 7 September 2026. Original-language basis: `現金支付：全票 20元、半票 10元` and `電子票證（一卡通、悠遊卡、icash）：全票 15元、學生票 10元` plus the following concession/free-ride rows.

- **The same page separately presents four Taiwan Tourist Shuttle routes: Green 11, Green 21, Green 18 and Green 19.** **Source:** the same full page, PRIMARY, High confidence. Original-language basis: the four route headings `綠11 礁溪線`, `綠21 冬山河線`, `綠18 壯圍沙丘線` and `綠19 宜蘭東北角海岸線`.

- **The Taiwan Railways Yilan station page lists a city-bus access point at Yilan Station and transfer buses at Yilan Transfer Station.** **Source:** *Yilan Taiwan Railways station transfer guide*, titleOriginal `宜蘭車站交通轉乘指南`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewTransfer/7190`, Taiwan Railways Corporation, PRIMARY, High confidence because the full current page was fetched. Original-language basis: `市內公車` / `宜蘭縣公車 宜蘭車站` and `轉運巴士` / `宜蘭轉運站`.

## Conflicts

- **The Transportation Department page shows two update signals.** Its body says `更新日期：109-06-15`, while the current footer displays `更新時間 115-09-07`. This is retained as a page-date conflict. The older body date is not silently rewritten as the current page date, and the newer footer is not treated as proof that every remit statement changed in 2026.

## Checked and failed

- **A complete current Yilan route timetable and operator fare matrix** — Checked 2026-09-07. The fetched county pages publish a fare summary and route families, while the TDX route snapshot supplies route/variant discovery but not a complete editorial timetable/fare matrix.

- **Current Yilan operator-evaluation scores and rankings** — Checked 2026-09-07. The county remit page confirms evaluation as a responsibility, but the fetched page does not publish a current score table or result report.

- **A timed railway-to-bus interchange at Yilan Station** — Checked 2026-09-07. The TRA page publishes the city-bus access point and the transfer-station bus location, but no coordinated departure guarantee or timed connection.

## Stated gaps

- The page does not claim a complete coach inventory, current frequency table, operator legal-entity crosswalk, vehicle/fleet count, accessibility matrix, reliability series, or current evaluation result.
- A successful full fetch of a current county/operator timetable and evaluation report would settle those fields.

## Sources and archive status

The county and TRA pages were fetched in full on 7 September 2026. The TDX route response is the repository's dated official structured snapshot. No archive snapshot URLs were captured.
