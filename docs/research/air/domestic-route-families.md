# Corpus warning

`docs/research/` is a lead file, not an authority. Claims below were checked
against the linked Civil Aeronautics Administration or airport pages. Search
snippets and cached research notes are not used as evidence.

## What is established

### The national CAA page is a dated timetable surface, not a permanent route map

- **Claim:** CAA's domestic timetable page exposed July, August and September 2026 selectors and a September 2026 download when fetched on 6 September 2026. It warns that the timetable is reference material and airline announcements control changes.
- **Source:** Domestic scheduled-route flight timetable / `國內定期航線班機時刻表`; Civil Aeronautics Administration, MOTC; https://www.caa.gov.tw/RegularFlight.aspx?a=268&lang=1; PRIMARY; High — the regulator's full page was fetched directly.
- **Original sentence:** 「僅供參考，如有異動，正確時間仍以航空公司公告為準。」

### Hualien's current official pages expose three route families

- **Claim:** Hualien Airport's linked monthly timetable pages expose Hualien–Taipei, Hualien–Taichung and Hualien–Kaohsiung.
- **Source:** Hualien Airport monthly flight timetable pages / `花蓮-台北`, `花蓮-台中`, `花蓮-高雄`; Hualien Airport, CAA; https://www.hulairport.gov.tw/Schedule03?lang=TW&program=722; PRIMARY; High — the airport's page navigation and full timetable pages were fetched directly on 6 September 2026.
- **Original sentences:** 「花蓮-台北」, 「花蓮-台中」, 「花蓮-高雄」.
- **Dated detail:** The Taipei page displayed `此筆資料取得時間：(Get Database Time) 2026-09-06 05-50-05`; the Taichung and Kaohsiung pages displayed 5 September 2026 database times in the same official interface.

### Penghu's September 2026 displayed schedule shows six destination families

- **Claim:** Penghu Airport's fixed-departure page displayed Taipei, Taichung, Tainan, Chiayi, Kaohsiung and Kinmen destination families in the September 2026 validity window.
- **Source:** Penghu Airport fixed departure schedule / `Penghu Airport fixed schedule`; Penghu Airport, CAA; https://www.mkport.gov.tw/English/schedule/FixFlight_Dep.aspx; PRIMARY; High — the airport's full schedule table was fetched directly on 6 September 2026.
- **Original-language basis:** The table labels airline, flight number, aircraft, destination, departure, arrival and validity dates; the displayed destinations are read from the full table, not a search result.

### The sample count is nine airport-origin records, not a national total

- **Claim:** Three Hualien families plus six Penghu families yield nine airport-origin family records in this dated sample.
- **Sources:** Hualien Airport monthly timetable pages; Penghu Airport fixed departure schedule; PRIMARY; High — an explicit addition of the two fetched station snapshots.
- **Method:** The count does not claim deduplication across the national network, and it does not count flight legs, daily departures or current active service beyond the displayed source windows.

## Conflicts

- CAA's page provides a national monthly timetable download, while Hualien and Penghu provide station-specific schedule surfaces. They are different publication layers, not conflicting route totals. The national page's warning that airline announcements control changes is retained alongside the station snapshots.

## Checked and failed

- **A stable complete national route-family catalogue from the CAA HTML page** — Checked 6 September 2026 — the fetched page exposed month selectors, a September download and table headings, but did not expose a safely joinable all-airport route matrix in the HTML. The complete national total remains TBC.
- **A timeless daily-frequency claim for Hualien or Penghu** — Checked 6 September 2026 — the official pages are monthly or validity-window schedules and CAA explicitly makes airline announcements controlling after changes. No permanent frequency is published here.
- **Current route-wide fares from the route-family pages** — Checked 6 September 2026 — the fetched CAA, Hualien and Penghu schedule pages did not provide a complete route-fare table. Fares remain TBC.

## Stated gaps

- A verified national airport-pair matrix requires a stable official export or a complete set of airport/operator schedule pages that can be fetched and joined without guessing.
- Daily Air's current operator-level island-family page has now been fetched separately and is published as a five-family operator snapshot. It does not replace the need for a complete national airport-pair matrix or a per-flight timetable.
- Current domestic fares and route-wide frequencies remain TBC until official current fare and timetable material is fetched for each family.
