# Corpus warning

`docs/research/` is a lead file, not an authority. The vessel claim below was
checked against the full Maritime and Port Bureau passenger-route and vessel
pages fetched on 2026-09-06. The route page is the service source; the vessel
page is the identity and safety-data source.

## What is established

### The Maritime and Port Bureau publishes a current passenger-route directory

- **Claim:** The Bureau's full passenger-route page was last checked 7 August 2026 and last modified 17 July 2026 when fetched on 6 September 2026. It lists route families including Donggang–Xiaoliuqiu and identifies multiple operators for that crossing.
- **Source:** *Ticket information — Taiwan main island and offshore-island routes* / `購票資訊 — 臺灣本島與離島間各航線購票資訊`; Maritime and Port Bureau, MOTC; https://www.motcmpb.gov.tw/Article?nodeId=376&siteId=1; PRIMARY; High — the complete HTML table was fetched directly.
- **Original-language basis:** `最後檢核時間：2026-08-07`, `最後修改時間：2026-07-17`, `屏東東港-小琉球` and the operator row `1、琉興有限公司`.

### Liu Xin is an official vessel record on the Dafu Fishing Port route

- **Claim:** The Bureau's full vessel page names `琉興` / `LIU XIN`, official number 016441, on the `東港-小琉球(大福漁港)` service.
- **Source:** *Donggang–Xiaoliuqiu (Dafu Fishing Port) — passenger-ship information* / `東港-小琉球(大福漁港) — 船舶資訊`; Maritime and Port Bureau, MOTC; https://www.motcmpb.gov.tw/PassengerShip/Detail?NodeId=610&PassengerShipSno=016441&ShipLaneNo=X277&SiteId=1; PRIMARY; High — the full detail page was fetched directly.
- **Original-language basis:** `### 琉興`, `英文船名 Name LIU XIN`, `船舶號數 Official No. 016441`, and `東港-小琉球(大福漁港)`.

### The record publishes capacity, tonnage, build month and survey validity

- **Claim:** The official record classifies Liu Xin as a passenger ship, gives 149 certified passengers, 178 gross tonnage, build month ROC 110 October, and survey validity through ROC 115 October 25 (25 October 2026).
- **Source:** same full official vessel page; PRIMARY; High — fields were read directly from the page.
- **Original-language basis:** `船舶種類 Type of Ship 客船`, `乘客定額 Certified No. of Passenger 149 人`, `總噸位 Gross Tonnage 178`, `建造年月 Date of Built 110年10月`, and `檢查效期 Expire of Survey 到 115年10月25日止`.

## Conflicts

No direct conflict was found between the route page and the vessel detail. They serve different levels: the route page names multiple operators and booking links, while the vessel detail describes one ship. The site keeps those levels separate instead of treating one ship as the whole service.

## Checked and failed

- **A complete current national passenger-vessel census** — the Bureau route page lists route operators and the site exposes vessel details through separate records, but no stable all-route vessel export was found in the fetched HTML. Checked 2026-09-06.
- **A vessel-specific timetable or fare for Liu Xin** — the official vessel detail publishes identity and safety fields but no departure timetable or fare. The route/operator page is required for ticket information. Checked 2026-09-06.
- **A current engine, builder or propulsion specification** — the fetched official detail page publishes no such field. Those attributes remain TBC rather than being taken from enthusiast databases. Checked 2026-09-06.

## Stated gaps

- The vessel layer needs additional official detail pages before counts or fleet composition can be reported nationally.
- Route-to-vessel joins should use the Bureau's explicit service association; vessel names appearing in operator marketing pages are not enough to confirm a current scheduled assignment.
