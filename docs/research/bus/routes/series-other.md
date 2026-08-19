> **Corpus warning: `docs/research/` is leads only.** Nothing here may be
> published on its own authority. Every statement below was checked against the
> primary source named beside it; the file remains a research record, not a
> source.

# Other numbered routes — research

**Run date: 2026-08-19.** This report covers the 1 records in the merged TDX snapshot classified `series-other`.

## What is established

The committed TDX snapshot contains 1 normalized records in this group. The official catalogue’s full page was fetched and read; its headings and route labels establish the group classification, while the TDX layer supplies the stable route identity, operators, stops, sequences, shapes and source-update fields.

- **Source:** "TDX bus data" / `titleOriginal`: `交通部運輸資料流通服務平臺`
- **Publisher:** Ministry of Transportation and Communications TDX / `交通部運輸資料流通服務平臺`
- **URL:** https://tdx.transportdata.tw/
- **Kind/confidence:** PRIMARY; High for the normalized route count, group, identity and structure — read from the committed snapshot.
- **Original-language text read:** The committed metadata records `1 routes` in group `series-other`, with source update `2026-08-15`.

- **Source:** "Taipei/New Taipei bus route catalogue" / `titleOriginal`: `大臺北公車`
- **Publisher:** Taipei City Government and New Taipei City Government / `臺北市政府與新北市政府`
- **URL:** https://ebus.gov.taipei/ebus?ct=tpc
- **Kind/confidence:** PRIMARY; High — the full official catalogue page was fetched and read.
- **Original-language text read:** `一般公車` and the route labels under the relevant heading.

## Route schedule pages

The following full official pages were fetched individually. Current schedule fields are recorded as current service data, not as route history.

### 1717 / 1717
The full official schedule page was fetched and read. It publishes 起迄站名 : 捷運台大醫院站 - 金山郵局; 頭末班車 : [平日] 0600 - 1840 [假日] 0600 - 1840; 收費方式 : 依里程計費.

- **Source:** "1717 route schedule" / `titleOriginal`: `1717班表`
- **Publisher:** Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100171700
- **Kind/confidence:** PRIMARY; High — full official page fetched and read.
- **Original-language text read:** `起迄站名 : 捷運台大醫院站 - 金山郵局`; `頭末班車 : [平日] 0600 - 1840 [假日] 0600 - 1840`; `收費方式 : 依里程計費`.

## MRT stop-ID joins

The geometry-only join run records 0 confirmed stop-ID joins for this group. These are based on stop coordinates and station coordinates; names are never used as confirmation.

## Conflicts found

- No cross-municipality numeric identity collision was found in the committed Taipei/New Taipei TDX records for this group.

## Checked and failed

- **A separate schedule link for an unlisted variant** — No unmatched variants were found in this group. Checked 2026-08-19; all route records had a corresponding catalogue link.

## Stated gaps

- Route length, service span, headway and fare remain TBC in the TDX fact box because those fields are not carried by the committed normalized route record; an official eBus schedule is cited in prose where a separate full page exists.
- Route opening dates, original corridor rationale, predecessor/renumbering records and dated operator changes remain TBC unless a dated primary notice is found. Current schedule pages do not establish those histories.
- Route-specific restricted eligibility or booking rules remain TBC where the current eBus page does not publish them; no restriction is inferred from a route name.
