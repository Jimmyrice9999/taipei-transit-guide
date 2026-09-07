# Chiayi Bus operator and rear-station BRT node — research

**Corpus warning: `docs/research/` is leads only. Nothing here is citable until it has been checked against a primary source — see `.claude/skills/transit-research/SKILL.md`.**

**Checked 7 September 2026.** The operator pages were opened in full and read as primary material. The route page is a current operator index; the profile figures are retained as operator-stated values, not silently reconciled with TDX.

## What is established

- *About Chiayi Bus* (`https://www.cibus.com.tw/about`, PRIMARY, High confidence) states that the company was founded in 1917 and currently has 145 commercial buses, 20 tour buses, 180 employees and 37 operating routes. Original-language basis: `本公司創立於民國6年(西元1917年)` and the full profile row containing `營業大客車145輛、遊覽車大客車20輛、員工180名` and `營運路線計有37條`.
- *Chiayi Bus route and fare query* (`https://www.cibus.com.tw/route`, PRIMARY, High confidence) lists route groups departing Chiayi, Beigang and Puzi, and a separate BRT group containing 7211, 7212A and 7212. The full page exposes route-map, timetable and fare links; it is not treated as a permanent frequency table.
- *Chiayi Bus operating sites* (`https://www.cibus.com.tw/about4`, PRIMARY, High confidence) says the Chiayi headquarters is an administrative office, repair/maintenance centre and vehicle parking centre; it calls Zhongshan the largest Chiayi station, Beigang the largest Yunlin station and Puzi the largest Puzi station. No capacities are inferred.
- *Chiayi BRT current state* (`https://www.cibus.com.tw/brt2`, PRIMARY, High confidence) states a 29.3-km corridor, 15.4-km HSR-to-rear-station main section, 4.3-km Chiayi-city connection, 9.6-km Chiayi-county connection and 18 listed stops. It says the 7211/7212 fleet is accessible low-floor operation.
- *Chiayi BRT real-time information and stop list* (`https://www.cibus.com.tw/brt3`, PRIMARY, High confidence) links 7211, 7212 and the early 7212 branch and names the TRA rear-station transfer centre, HSR Chiayi Station and Puzi Transfer Station in the two-direction stop tables.
- *Chiayi Bus current notices* (`https://www.cibus.com.tw/news`, PRIMARY, High confidence) was read in full. Its 2 September 2026 entries include two September traffic-control notices, and its 20 August BRT notice says selected 7212 services add Zhongxiao Beijie stop service from 1 September 2026.

## Conflicts and boundaries

- The operator's 37-route profile figure is not reconciled with TDX's Chiayi City/County RouteUID and SubRoutes counts. They measure different scopes: company route groups versus jurisdiction-scoped structured records.
- The current-state page lists 18 BRT stops, while the separate BRT query page presents direction-specific stop tables and a 7212 early branch. The site retains both presentation contexts and does not claim a single universal stop total.
- The operator-published rear-station and HSR stop names establish a published bus-stop relationship only. They do not establish a timed connection, shared building, platform access or step-free path.

## Checked and failed

- **Complete current company fleet model/registration census** — checked 7 September 2026: the profile gives aggregate commercial and tour-bus counts but no model/registration roster.
- **Route-by-route current frequency and fare matrix** — checked 7 September 2026: the route index links individual timetable/fare pages, but a single complete current matrix was not extracted in this batch.
- **Bus-bay, station-building and step-free interchange evidence at the rear-station transfer centre** — checked 7 September 2026: the operator source names the stop but supplies no platform allocation or access chain.

## Stated gaps

The next useful primary sources are Chiayi City/TRA/HSR station-owner access pages, route-specific current timetable/fare pages and any official fleet/procurement records. Until those are fetched, operator-stated aggregates and BRT stop relationships remain the defensible depth boundary.
