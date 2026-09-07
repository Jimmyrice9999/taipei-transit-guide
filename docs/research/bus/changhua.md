# Regional bus — Changhua

**Research file — leads, not sources.** Official Changhua County pages, law text, pass PDF and the TDX snapshot below were fetched and read before the content page was written.

**Version 1.0 — 7 September 2026**
**Status: current official verification for `content/bus/regional/changhua.md`.**

## What is established

- **The dated TDX route snapshot contains 17 Changhua County Route records and 46 supplied SubRoutes variants.** **Source:** *Changhua County city-bus route snapshot*, `https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/ChanghuaCounty?$format=JSON`, Taiwan MOTC TDX, PRIMARY, High confidence because the repository's national pull was fetched for the 7 September 2026 snapshot. The values are source-snapshot measurements, not timeless unique-route totals.

- **The same snapshot contains four distinct operator labels: Chang Hua Bus, Yuan Lin Bus, Chung-Lu Bus and HeMei Township Office.** **Source:** the same full TDX response, PRIMARY, High confidence. The count is computed from operator arrays and is not a legal-company census.

- **The county city-bus list identifies the county as the city-bus authority and publishes route, operator and service-area fields for the 11409 update.** **Source:** *Changhua County city-bus route list*, titleOriginal `彰化縣市區客運路線列表(11409更新)`, `https://www.chcg.gov.tw/DTO/traffic/07other/other01_con.aspx?cate_id=7265&data_id=26082&topsn=6537`, Changhua County Government Transportation Department, PRIMARY, High confidence because the full page was fetched. Original-language basis: `彰化縣市區客運路線列表`, `客運業者`, `路線編號`, `路線名稱`, `服務本縣區域`, and `彰化縣市區客運主管機關: 彰化縣政府`.

- **The county route pages publish strategic route evidence.** Route 6 is Lukang–Yuanlin via Yuanlin Transfer Station; Route 7 is Yuanlin–THSR Changhua–Tianzhong Railway Station and is labelled fully electric/high-speed-rail express; Route 8 is Tianzhong Railway Station–Xizhou Park with extensions. **Sources:** the three full county route pages, PRIMARY, High confidence. Original-language bases: `鹿港-員林(經員林轉運站)`, `員林-高鐵彰化站-田中火車站(本線全面電動公車、高鐵快捷公車)` and `台鐵田中站-溪州公園(延駛三條村、張厝村)`.

- **The official evaluation rules require a county committee, at least annual evaluation, five weighted categories and company/route results with possible operating consequences.** **Source:** *Changhua city-bus operating and service-evaluation rules*, titleOriginal `彰化縣政府市區汽車客運營運及服務評鑑執行要點`, `https://lawsearch.chcg.gov.tw/GLRSNEWSOUT/LawContent.aspx?id=GL000246&media=print`, Changhua County Government, PRIMARY, High confidence. Original-language basis: `評鑑作業每年應至少辦理一次`, the five percentage categories, and the provisions for company/route grades and route-continuation/new-route review.

- **The Central Changhua–Taichung–Nantou–Miaoli pass PDF states a 30-day unlimited-use period within its published bus/rail scope.** **Source:** *Central Changhua–Taichung–Nantou–Miaoli public-transport pass*, titleOriginal `中彰投苗公共運輸定期票`, `https://traffic.chcg.gov.tw/dlfile.aspx?file=2&file_id=437496&sid=126`, Changhua County Government Transportation Department, PRIMARY, Medium confidence for current scope because the PDF was fetched, while its web listing is older than the current date. Original-language basis: `有效期間（30日）內可不限次數搭乘` and the following region-specific scope rows.

## Conflicts

- **TDX reports 17 route records / 46 supplied variants while the county's editorial list presents many route-number variants and a separately maintained 11409 list.** These are retained as different publication layers: TDX Route objects versus the county's city-bus list. They are not added together.

## Checked and failed

- **A complete current Changhua timetable and fare matrix** — Checked 2026-09-07. The county list and selected route pages publish route identities and some linked timetable images, while the TDX route-only snapshot has no complete editorial fare/frequency matrix.

- **Current operator evaluation scores and rankings** — Checked 2026-09-07. The county route index exposes 112年度 and 113年度 evaluation links, but the result attachment fetches did not produce a reliable full report in this pass. The official rules are used for the scheme, not for current scores.

- **A timed bus-to-rail or bus-to-THSR interchange** — Checked 2026-09-07. Route names mention stations, but the fetched pages do not publish a coordinated timed connection, shared platform, or walking threshold.

- **Full live Changhua eBus route data through the interactive portal** — Checked 2026-09-07. The portal homepage/search surface was located, but its full dynamic route payload was not fetched into the static editorial layer; the TDX snapshot remains the structured discovery source.

## Stated gaps

- Current route-level schedules, fares, concessions, operator legal identities, accessibility fields, vehicle allocation, evaluation scores, terminal facilities and confirmed multimodal joins remain open.
- A successful fetch of the county's route/timetable payloads, evaluation reports and terminal publications would settle those fields.

## Sources and archive status

The Changhua county pages, legal rules and pass PDF were fetched in full on 7 September 2026. The TDX route response is the repository's dated official structured snapshot. No archive snapshot URLs were captured.
