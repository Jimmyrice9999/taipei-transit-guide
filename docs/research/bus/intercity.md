# Corpus warning

`docs/research/` is a lead file, not an authority. The route counts and timetable fields below were checked against full Highway Bureau catalogue pages and a complete fetch of the official static timetable export. Search results were used only to locate the primary pages.

**Checked:** 25 August 2026. **Subject:** Taiwan's national intercity-coach network (國道客運), first data-layer unit.

## Sources fetched in full

- Highway Bureau operator and booking directory: https://www.thb.gov.tw/cp.aspx?Create=1&n=312
- Highway Bureau open-data catalogue, `客運時刻`: https://www.thb.gov.tw/News_Content_thbOpenData.aspx?n=13&s=599
- Official timetable export named by that catalogue: https://www.taiwanbus.tw/TimeTableExport/timetable.csv
- Highway Bureau open-data catalogue, `國道汽車客運概況`: https://www.thb.gov.tw/News_Content_thbOpenData.aspx?n=13&s=492
- Highway Bureau fare-adjustment notice: https://www.thb.gov.tw/News_Content.aspx?n=87&s=245774&sms=13235
- Highway Bureau 2030 electric-bus plan PDF: https://ws.thb.gov.tw/Download.ashx?icon=.pdf&n=6Zu75be06KiI55WrKOaguOWumuacrCkucGRm&u=LzAwMS9VcGxvYWQvNDM2L3JlbGZpbGUvMTMyOTEvMjQ4NDQxLzVmYjAzZDZhLTA5ZWQtNGNjYy04YmFlLWZlMGUwYmJlMjdlNC5wZGY%3D
- TDX API documentation: https://tdx.transportdata.tw/api-service/swagger

The CSV was fetched directly on 25 August 2026 with HTTP 200 and 37,455,277 bytes. The response was `application/octet-stream`, so the web viewer could not render it, but the complete response was downloaded and parsed locally; it was not treated as a search snippet. The generated copies are `data/intercity-bus/routes.json` and `public/data/intercity-bus-routes.json`.

## What is established

### The bureau separates the company directory from the timetable dataset

- The Highway Bureau's full company page is titled `網路訂票暨客運公司資訊` and presents intercity-bus company names with online ticketing or company links. The page records update date `114-08-13`. **PRIMARY, High confidence:** operator/regulator directory fetched in full. Original-language basis: `網路訂票暨客運公司資訊` and `更新日期：114-08-13`. [thb-intercity-directory](https://www.thb.gov.tw/cp.aspx?Create=1&n=312)
- The open-data catalogue has a separate record titled `客運時刻`. It records update date `115-07-01`, update frequency `每日`, and supplies `https://www.taiwanbus.tw/TimeTableExport/timetable.csv` as the external data link. **PRIMARY, High confidence:** full catalogue record. Original-language basis: `資料集名稱 客運時刻`, `更新時間 115-07-01`, `更新頻率 每日` and the external CSV URL. [thb-intercity-timetable](https://www.thb.gov.tw/News_Content_thbOpenData.aspx?n=13&s=599)
- The same timetable record lists fields for `客運業者`, `路線編號`, `支線`, `往返`, `路線名稱`, `站名`, `班次序`, `發車時間`, weekday flags, service-date bounds, English route and stop names, longitude, latitude and `站位ID`. **PRIMARY, High confidence:** full field list in the catalogue. Original-language basis: the catalogue's `資料欄位` list, including `客運業者`, `路線編號`, `支線`, `往返`, `路線名稱`, `站名`, `班次序`, `發車時間`, `Route Name`, `Stop Name`, `Longitude`, `Latitude` and `站位ID`. [thb-intercity-timetable](https://www.thb.gov.tw/News_Content_thbOpenData.aspx?n=13&s=599)

### The committed snapshot is a route-summary layer, not thousands of stubs

- The complete CSV response contained 132,398 data rows after its header. **PRIMARY, High confidence:** direct full fetch of the URL named by the Highway Bureau catalogue, retrieved 25 August 2026. [thb-intercity-csv](https://www.taiwanbus.tw/TimeTableExport/timetable.csv)
- Grouping by operator, route number, branch, and published Chinese and English route names produced 1,837 route variants and 44 distinct operator labels. **PRIMARY, High confidence for this derived snapshot:** deterministic local grouping of the complete fetched export; the grouping rule is recorded in the generator. [thb-intercity-csv](https://www.taiwanbus.tw/TimeTableExport/timetable.csv)
- For each direction, the generator retains the ordered distinct stops and derives the first and last stop, stop count, distinct first-stop departure count, first and last departure, weekday flags and service-date values. **PRIMARY, High confidence for the source rows; derived confidence High for the transformation:** all fields come from the fetched export, while terminal and departure summaries are explicitly derived. [thb-intercity-timetable](https://www.thb.gov.tw/News_Content_thbOpenData.aspx?n=13&s=599) [thb-intercity-csv](https://www.taiwanbus.tw/TimeTableExport/timetable.csv)
- The generated file retains `fare: null` and `fareCoverage: TBC`; no route-level fare is inferred from the timetable. **PRIMARY, High confidence:** the checked timetable field list has no route-fare field, and the generated data contains no fare value. [thb-intercity-timetable](https://www.thb.gov.tw/News_Content_thbOpenData.aspx?n=13&s=599)

### The bureau publishes a separate aggregate statistics family

- The full open-data catalogue record `國道汽車客運概況` describes a monthly dataset. Its fields include period, operator count, route count, operating kilometres, trips, vehicle-kilometres, passengers, e-ticket passengers, passenger-kilometres, revenue, e-ticket revenue, seat-kilometres and average trip distance. **PRIMARY, High confidence:** full catalogue record. Original-language basis: `資料集名稱 國道汽車客運概況`, `更新頻率 每月` and the catalogue's field list including `營運車公里`, `旅客人數`, `旅客延人公里`, `營業收入` and `平均乘車里程`. [thb-intercity-stats](https://www.thb.gov.tw/News_Content_thbOpenData.aspx?n=13&s=492)
- The statistics catalogue is not the row-level timetable used for the current route snapshot. **PRIMARY, High confidence:** the two full catalogue records expose different dataset names, frequencies and fields. [thb-intercity-stats](https://www.thb.gov.tw/News_Content_thbOpenData.aspx?n=13&s=492) [thb-intercity-timetable](https://www.thb.gov.tw/News_Content_thbOpenData.aspx?n=13&s=599)

### Fares are governed by a rule, not supplied here as current route values

- The Highway Bureau's full fare notice says the Ministry approved a basic-fare adjustment on 1 May 2024. It says operators may adjust within the approved ceiling, then file with the bureau and publish the changed fare for one week before implementation. **PRIMARY, High confidence:** official notice read in full. Original-language basis: `交通部核定國道客運基本運價，票價微幅調漲`, `自113年5月1日起實施` and the notice's description of operator filing and one-week public notice. [thb-fare-change](https://www.thb.gov.tw/News_Content.aspx?n=87&s=245774&sms=13235)
- The same notice says TPASS users' actual monthly expenditure is unchanged through subsidy treatment and gives route examples including 1816, 1826 and 1610. **PRIMARY, High confidence:** full fare-adjustment notice. Original-language basis: the notice's `TPASS` subsidy explanation and examples `1816`, `1826` and `1610`. [thb-fare-change](https://www.thb.gov.tw/News_Content.aspx?n=87&s=245774&sms=13235)
- The notice does not substitute for a current fare table for every route in the static export. **PRIMARY, High confidence for this boundary:** the full notice explains the adjustment mechanism and examples, while the timetable catalogue's field list does not provide a route-fare field. [thb-fare-change](https://www.thb.gov.tw/News_Content.aspx?n=87&s=245774&sms=13235) [thb-intercity-timetable](https://www.thb.gov.tw/News_Content_thbOpenData.aspx?n=13&s=599)

### The historical planning snapshot uses different units

- The Highway Bureau's `2030 年客運車輛電動化推動計畫` records a May 2022 snapshot of 57 supervised operators, 173 國道客運 routes and 3,130 highway vehicles. **PRIMARY, High confidence:** official PDF fetched and read in full. Original-language basis: `截至111年5月，公路局監理之客運業者計57家、國道客運路線173條、國道客運車輛3,130輛`. [thb-2030-plan](https://ws.thb.gov.tw/Download.ashx?icon=.pdf&n=6Zu75be06KiI55WrKOaguOWumuacrCkucGRm&u=LzAwMS9VcGxvYWQvNDM2L3JlbGZpbGUvMTMyOTEvMjQ4NDQxLzVmYjAzZDZhLTA5ZWQtNGNjYy04YmFlLWZlMGUwYmJlMjdlNC5wZGY%3D)
- The May 2022 values are not silently replaced by the 2026 static-export counts. The former is a dated planning snapshot of regulated operators, routes and vehicles; the latter is a current timetable-row grouping that splits operator, branch and published-name identities. **PRIMARY, High confidence:** the two primary records and the explicit generator key. [thb-2030-plan](https://ws.thb.gov.tw/Download.ashx?icon=.pdf&n=6Zu75be06KiI55WrKOaguOWumuacrCkucGRm&u=LzAwMS9VcGxvYWQvNDM2L3JlbGZpbGUvMTMyOTEvMjQ4NDQxLzVmYjAzZDZhLTA5ZWQtNGNjYy04YmFlLWZlMGUwYmJlMjdlNC5wZGY%3D) [thb-intercity-csv](https://www.taiwanbus.tw/TimeTableExport/timetable.csv)

### TDX documents an API family, but it is not the committed snapshot

- TDX's full API documentation lists an `InterCityBus` family under its transport-data services. **PRIMARY, High confidence for the documentation boundary:** official API documentation read in full. Original-language basis: the Swagger service listing containing `InterCityBus` / 公路客運. [tdx-intercity-api](https://tdx.transportdata.tw/api-service/swagger)
- The committed national route layer uses the public static CSV named by the Highway Bureau catalogue. It does not claim that an authenticated TDX response was successfully pulled for this unit. **PRIMARY, High confidence:** source and fetch record in the generator and this report. [thb-intercity-timetable](https://www.thb.gov.tw/News_Content_thbOpenData.aspx?n=13&s=599) [thb-intercity-csv](https://www.taiwanbus.tw/TimeTableExport/timetable.csv)

## Conflicts

| Subject | Values | What each appears to measure |
| --- | --- | --- |
| Route count | 1,837 route variants in the 25 August 2026 timetable snapshot; 173 highway routes in the May 2022 plan | The current value is a generated timetable identity split by operator, route number, branch and published names. The historical value is a planning snapshot's route count. They are not averaged or substituted. [thb-intercity-csv](https://www.taiwanbus.tw/TimeTableExport/timetable.csv) [thb-2030-plan](https://ws.thb.gov.tw/Download.ashx?icon=.pdf&n=6Zu75be06KiI55WrKOaguOWumuacrCkucGRm&u=LzAwMS9VcGxvYWQvNDM2L3JlbGZpbGUvMTMyOTEvMjQ4NDQxLzVmYjAzZDZhLTA5ZWQtNGNjYy04YmFlLWZlMGUwYmJlMjdlNC5wZGY%3D) |
| Operator count | 44 distinct operator labels in the current timetable export; 57 supervised operators in May 2022 | The current value counts labels with rows in this export. The historical value counts operators under bureau supervision in the plan. They are different dates and populations. [thb-intercity-csv](https://www.taiwanbus.tw/TimeTableExport/timetable.csv) [thb-2030-plan](https://ws.thb.gov.tw/Download.ashx?icon=.pdf&n=6Zu75be06KiI55WrKOaguOWumuacrCkucGRm&u=LzAwMS9VcGxvYWQvNDM2L3JlbGZpbGUvMTMyOTEvMjQ4NDQxLzVmYjAzZDZhLTA5ZWQtNGNjYy04YmFlLWZlMGUwYmJlMjdlNC5wZGY%3D) |
| Fare publication | The timetable export has no route-fare field; the 2024 notice describes a basic-fare ceiling, filing process and subsidy rules | The first is a data-layer absence in the checked timetable schema. The second is a fare-governance announcement, not a current fare table. [thb-intercity-timetable](https://www.thb.gov.tw/News_Content_thbOpenData.aspx?n=13&s=599) [thb-fare-change](https://www.thb.gov.tw/News_Content.aspx?n=87&s=245774&sms=13235) |

## Checked and failed

- **A current route-by-route fare table from the Highway Bureau basic-fare page** — Checked 25 August 2026. The full direct fetch of `https://www.thb.gov.tw/cp.aspx?Create=1&n=560` returned an internal error, so no fare value was published from its search result or inferred from the 2024 announcement; route fares remain TBC.
- **A complete monthly national statistics file for the current ridership and revenue layer** — Checked 25 August 2026. The full catalogue page was read and its fields were recorded, but the linked download redirected to a `ws.thb.gov.tw` download response that the fetch tool returned as HTTP 500 / unsafe to open; no monthly value was published from a snippet.
- **A successful authenticated TDX InterCityBus pull for this unit** — Checked 25 August 2026. The local credential request returned HTTP 400 `invalid_client` and subsequent route requests returned 401; the API documentation was read, but no TDX records were used in the committed snapshot.
- **A real-time service-status field in the public timetable export** — Checked 25 August 2026. The full CSV and the bureau's documented field list provide static schedule rows, weekday flags and service-date bounds, but no checked field established vehicle-running state or delay status; live service remains TBC.

## Stated gaps

- Current fares, concessions, reservation classes and route-specific fare exceptions need a fetchable official fare table or operator fare page for each covered route family.
- Monthly passengers, passenger-kilometres, revenue and trend charts need the full `國道汽車客運概況` data file, with its period and retrieval date retained beside every value.
- Historical route openings, withdrawals, operator transfers, fleet rosters and terminal facilities need dated bureau notices, operator records, procurement files or terminal pages.
- A successful authenticated or public TDX InterCityBus response could add live or structured route fields, but it must be fetched and checked end to end before publication.
- The next implementation unit should add one regional network at a time, keeping municipal bus records distinct from this national intercity layer.
