> **Corpus warning: `docs/research/` is leads only.** Nothing here may be
> published on its own authority. Every statement below was checked against the
> primary source named beside it; the file remains a research record, not a
> source.

# Unclassified route identities — research

**Run date: 2026-08-19.** This report covers the 3 records in the merged TDX snapshot classified `unclassified`.

## What is established

The committed TDX snapshot contains 3 normalized records in this group. The official catalogue’s full page was fetched and read; its headings and route labels establish the group classification, while the TDX layer supplies the stable route identity, operators, stops, sequences, shapes and source-update fields.

- **Source:** "TDX bus data" / `titleOriginal`: `交通部運輸資料流通服務平臺`
- **Publisher:** Ministry of Transportation and Communications TDX / `交通部運輸資料流通服務平臺`
- **URL:** https://tdx.transportdata.tw/
- **Kind/confidence:** PRIMARY; High for the normalized route count, group, identity and structure — read from the committed snapshot.
- **Original-language text read:** The committed metadata records `3 routes` in group `unclassified`, with source update `2026-08-15`.

- **Source:** "Taipei/New Taipei bus route catalogue" / `titleOriginal`: `大臺北公車`
- **Publisher:** Taipei City Government and New Taipei City Government / `臺北市政府與新北市政府`
- **URL:** https://ebus.gov.taipei/ebus?ct=tpc
- **Kind/confidence:** PRIMARY; High — the full official catalogue page was fetched and read.
- **Original-language text read:** `official catalogue service labels` and the route labels under the relevant heading.

## Route schedule pages

The following full official pages were fetched individually. Current schedule fields are recorded as current service data, not as route history.

### 雙園巴士 / NEIHU GREEN BUS
The full official schedule page was fetched and read. It publishes 起迄站名 : 內科 - 南軟; 頭末班車 : [平日] 0700 - 1845 [假日] 停駛; 收費方式 : 一段票.

- **Source:** "NEIHU GREEN BUS route schedule" / `titleOriginal`: `雙園巴士班表`
- **Publisher:** Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0152005400
- **Kind/confidence:** PRIMARY; High — full official page fetched and read.
- **Original-language text read:** `起迄站名 : 內科 - 南軟`; `頭末班車 : [平日] 0700 - 1845 [假日] 停駛`; `收費方式 : 一段票`.

### 景美-榮總(快) / Jingmei-T.V.G.H Express
The full official schedule page was fetched and read. It publishes 起迄站名 : 景美女中 - 榮總; 頭末班車 : [平日] 0520 - 1130 [假日] 停駛; 收費方式 : 二段票.

- **Source:** "Jingmei-T.V.G.H Express route schedule" / `titleOriginal`: `景美-榮總(快)班表`
- **Publisher:** Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0162000400
- **Kind/confidence:** PRIMARY; High — full official page fetched and read.
- **Original-language text read:** `起迄站名 : 景美女中 - 榮總`; `頭末班車 : [平日] 0520 - 1130 [假日] 停駛`; `收費方式 : 二段票`.

### 新莊-臺北車站 / Xinzhuang-Taipei Main Sta.
The full official schedule page was fetched and read. It publishes 起迄站名 : 新莊 - 臺北車站; 頭末班車 : [平日] 0650 - 0650 [假日] 停駛; 收費方式 : 二段票.

- **Source:** "Xinzhuang-Taipei Main Sta. route schedule" / `titleOriginal`: `新莊-臺北車站班表`
- **Publisher:** Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0163000000
- **Kind/confidence:** PRIMARY; High — full official page fetched and read.
- **Original-language text read:** `起迄站名 : 新莊 - 臺北車站`; `頭末班車 : [平日] 0650 - 0650 [假日] 停駛`; `收費方式 : 二段票`.

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
