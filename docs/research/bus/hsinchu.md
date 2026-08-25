# Corpus warning

This is a research file, not a source. The existing corpus is a lead index only. Every claim below was checked against the underlying Hsinchu City Government portal or is explicitly marked as a derived value, conflict, gap or checked failure.

## What is established

### The portal and its scope

- **Claim:** Hsinchu City Government operates a public iBus portal with a public-transport route selector. **Source:** [Hsinchu City Government iBus public-transport portal](https://hisatisfy.hccg.gov.tw/ibusWeb/PublicTransport/), original title `新竹市幸福巴士`; **PRIMARY**, High confidence because the full page was fetched on 2026-08-25 and rendered the selector and portal links. **Original-language evidence:** `市區公車`, `國道客運`, `公路客運`, `科學園區接駁車`, `臺鐵/高鐵/YouBike`.
- **Claim:** The selector exposes five regional categories used in this page: `新竹市市區公車`, `新竹縣快捷巴士`, `竹北市民公車`, `新竹縣觀光巴士` and `新竹縣醫療專車`. **Source:** the same full portal page; **PRIMARY**, High confidence because the category option labels and their route options were read from the page HTML rather than a search result.
- **Claim:** The retrieved selector contained 36 city-bus entries, 10 county-express entries, 14 Zhubei citizen-bus entries, five tourist-bus entries and three medical-shuttle entries, 68 in total. **Source:** the same full portal page; **PRIMARY**, High confidence for the 2026-08-25 snapshot. The counts are a script-derived count of the full option list, not a claim that the categories are historically stable.

### Route details, operators and departures

- **Claim:** A selected route value is sent to the official route-detail endpoint and the response contains the route title, operator, fare-link URL, direction names, run identifiers and published departure strings. **Source:** [Hsinchu iBus route-detail endpoint](https://hisatisfy.hccg.gov.tw/ibusWeb/Partial_PublicTransportDetail/), original title `公共運輸路線詳細資料`; **PRIMARY**, High confidence because the full POST response for route `0020|0|2|30` was fetched on 2026-08-25. **Original-language evidence:** `營運業者`, `票價`, `往程`, `返程`, `行駛方向`, `時刻表`.
- **Claim:** The 68 route entries produced 96 direction runs, seven distinct operator labels and 970 departure values in the committed snapshot. **Source:** the route-detail endpoint, queried once for every selected route value; **PRIMARY**, High confidence for the retrieval date. These are derived counts from full responses; the operator count is not a registry count and the departure-value count is not a trip-frequency estimate.
- **Claim:** For route 2, the detail response identified `新竹客運`; the outward run was `火車站→陽明交大` with `0805,0845,1225,1310,1425,1640,1805`, and the return run was `陽明交大→火車站` with `0725,0920,1110,1300,1500,1840`. **Source:** the same route-detail endpoint; **PRIMARY**, High confidence because the full response was read. **Original-language evidence:** `營運業者<span>新竹客運</span>`, `往程`, `返程`, and the two `時刻表` labels.

### Stops and terminal derivation

- **Claim:** The route-detail response links each direction to an iBus map iframe by run identifier. **Source:** the full route 2 detail response; **PRIMARY**, High confidence. **Original-language evidence:** `IFrame_Map/002001` and `IFrame_Map/002002`.
- **Claim:** The official `GetRoadLine` POST response returns ordered stop records containing `idx`, `name`, `stop_Id`, `lat` and `lon`. **Source:** [Hsinchu iBus GetRoadLine endpoint](https://hisatisfy.hccg.gov.tw/ibusWeb/IFrame_Map/GetRoadLine), original title `路線圖站序資料`; **PRIMARY**, High confidence because the full JSON response for run `002001` was fetched and read. **Original-language evidence:** the response keys `idx`, `name`, `stop_Id`, `lat`, `lon`.
- **Claim:** The data layer derives first and last stops from that returned order and preserves the full direction stop sequence. **Source:** the same full endpoint responses for all 96 runs; **PRIMARY**, High confidence for the derivation method. This is a data transformation, not a claim that the portal labels the first and last record as a terminal facility.
- **Claim:** Route 10's detail title says `總站→成德高中`, while the retrieved return stop sequence ends at `火車站`. **Source:** route 10 route-detail response and its two `GetRoadLine` responses; **PRIMARY**, High confidence because both full responses were fetched. This is retained as a source-level distinction rather than reconciled.

### Notices and coverage boundary

- **Claim:** The portal's current notices included a 2026 Green Line summer timetable notice and temporary stop-adjustment notices. **Source:** [Hsinchu iBus home and notices](https://hisatisfy.hccg.gov.tw/ibusWeb/Home/), original title `最新消息`; **PRIMARY**, High confidence because the full page was fetched on 2026-08-25. **Original-language evidence:** the dated notice entries and the Green Line date range shown on the page.
- **Claim:** The Highway Bureau's national timetable is a separate publication layer with a static export and its own route/stop/departure fields. **Source:** [Highway Bureau open-data catalogue: 客運時刻](https://www.thb.gov.tw/News_Content_thbOpenData.aspx?n=13&s=599); **PRIMARY**, High confidence because the full catalogue page was fetched. It is used in the content page only to define the boundary between national intercity and Hsinchu regional data.

## Conflicts

1. **Route 10 terminal labels:** the Hsinchu route-detail response publishes `總站→成德高中` as the title/direction label, while the corresponding returned stop sequence for the opposite run ends at `火車站`. These are different source fields: a displayed route label versus the ordered boundary of a run's stop data. Both values are published on the content page; neither is discarded.
2. **Network identity:** the Hsinchu portal exposes national highway and regional highway query categories alongside city/county categories, while the Highway Bureau publishes a separate national timetable export. This is a scope conflict only if the two are collapsed: the current page keeps them as separate layers because their source identities and publication fields differ.

## Checked and failed

- **Hsinchu City Transport Department route-summary PDF** — Checked 2026-08-25: the official lead URL `https://dep-traffic.hccg.gov.tw/uploaddowndoc?file=Transit%2F202406241750040.pdf&filedisplay=本文.pdf&flag=doc` returned HTTP 403 to a full fetch. The search result was not used as evidence; the PDF does not supply any asserted value in the content page.
- **Hsinchu City Transport Department route page** — Checked 2026-08-25: `https://dep-traffic.hccg.gov.tw/ch/home.jsp?id=53&parentpath=0%2C39` timed out during a full fetch. The portal route selector was used instead because it fetched successfully; the timeout is not treated as evidence of absence.
- **Hsinchu City Transport Department home** — Checked 2026-08-25: `https://dep-traffic.hccg.gov.tw/ch/index.jsp` returned HTTP 403 to a full fetch. No claim about the department's unpublished or inaccessible material is made.

## Stated gaps

- Current numeric fares and concession rules: the portal returns a fare URL, but the route-detail response read for this snapshot does not contain the amount. Full route-level fare records and effective dates would settle this.
- Ridership and revenue: the Highway Bureau catalogue describes monthly aggregate fields, but no Hsinchu-specific series was fetched for this unit. City or operator monthly station/route data would settle it.
- Vehicle allocation, depots, contracts, accessibility, historical changes and service reliability: these require primary city, county, operator or bureau records; the current portal snapshot does not establish them.
