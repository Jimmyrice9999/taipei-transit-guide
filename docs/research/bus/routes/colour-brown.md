> **Corpus warning: `docs/research/` is leads only.** Nothing here may be
> published on its own authority. Every statement below was checked against the
> primary source named beside it; the file remains a research record, not a
> source.

# Brown-line feeder routes — research

**Run date: 15 August 2026.** This report covers the 20 records in the merged
TDX snapshot classified `colour-brown`. No images were fetched.

## What is established

### The official class and complete pilot roster

The full Taipei/New Taipei bus catalogue has a heading `捷運棕線接駁公車` and
lists exactly these 20 route labels beneath it: 棕1, 棕2, 棕3, 棕5, 棕6, 棕7,
棕7建業路, 棕7綠野香坡, 棕10, 棕11, 棕11副, 棕12, 棕13, 棕15, 棕18, 棕19,
棕20, 棕21 and 棕22. This is the primary basis for the group, not a colour
word search in the TDX data.

- **Source:** “Taipei/New Taipei bus route catalogue” / `titleOriginal`:
  `大臺北公車`
- **Publisher:** Taipei City Government and New Taipei City Government / `臺北市政府與新北市政府`
- **URL:** https://ebus.gov.taipei/ebus?ct=all
- **Kind/confidence:** PRIMARY; High — the government catalogue itself supplies
  the heading and the complete list.
- **Original-language text read:** `捷運棕線接駁公車` followed by the 20 labels
  listed above.

### TDX structural data

The committed normalized TDX layer supplies route identity, municipality,
operator IDs, route variants, stop sequences, stop IDs and positions, shape
geometry and source-update metadata. The TDX schema describes `genus` as
`路線類別` and includes `14：捷運棕線`; it separately defines route, stop,
coordinates and sequence fields. This supports using the snapshot for the
structural part of each page while leaving route length, service span and
headway as TBC where the snapshot has no such field.

- **Source:** “Taiwan Transport Data eXchange API data dictionary” /
  `titleOriginal`: `Taipei Bus API 資料格式`
- **Publisher:** Ministry of Transportation and Communications TDX /
  `交通部運輸資料流通服務平臺`
- **URL:** the full government PDF read at
  https://www-ws.gov.taipei/Download.ashx?icon=..pdf&n=6Ie65YyX5biCRGF0YTAuYWlwZWnlubPlj7BBUEnoqqrmmI7mlofku7ZfVjYuM18wOS0xNS0yMDI1LnBkZg%3D%3D&u=LzAwMS9VcGxvYWQvNDU4L3JlbGZpbGUvMjI1NDUvNjU1NDM2MC81ZGFhMGEzNy04ZGU3LTQ0NTUtODU2Yi1kZTE0YTNiOGEzMjcucGRm
- **Kind/confidence:** PRIMARY; High for field meanings — government schema.
- **Original-language text read:** `路線類別( 01：一般公車(數字)、... 14：捷運棕線 ... 52：通勤公車 ... 55：內科通勤、56：南軟通勤 ... )`; and the Stop fields `Id`, `routeId`, `nameZh`, `nameEn`, `seqNo`, `longitude`, `latitude`.

### Route-specific primary checks

#### 棕10

The full official schedule page says `起迄站名 : 捷運大湖公園站 - 南京復興路口`,
`頭末班車 : [平日] 0600 - 2300 / [假日] 0600 - 2300`, `收費方式 : 一段票`,
and names `東南客運內湖站` as the service contact.

- **Source:** “BR10 route schedule” / `titleOriginal`: `棕10班表`
- **Publisher:** Taipei City Government / `臺北市政府大臺北公車`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0114001000
- **Kind/confidence:** PRIMARY; High — full route schedule page, not a snippet.
- **Original-language text read:** the four strings quoted above.

#### 棕20 and the reserved working

The full official schedule page says `起迄站名 : 內科 - 故宮博物院`, weekday and
holiday first/last times `0630 - 2120`, `收費方式 : 一段票`, and
`業者服務電話 : 大南汽車內湖站:02-2792-9840`. It also says:
`平日09:05、13:45、14:55、16:40、18:25班次為預約繞駛美堤碼頭班次(倘無人預約則不繞駛該站)`;
the same notice is repeated for holidays. The full stop page lists the
outbound sequence beginning `行善行愛路口` and the return sequence beginning
`故宮博物院(正館)`.

- **Source:** “BR20 route schedule and stop sequence” / `titleOriginal`:
  `棕20路線資訊`
- **Publisher:** Taipei City Government and New Taipei City Government /
  `臺北市政府與新北市政府`
- **URLs:**
  https://ebus.gov.taipei/Route/RouteSchedule?routeid=0114002000 and
  https://ebus.gov.taipei/Route/StopsOfRoute?routeid=0114002000
- **Kind/confidence:** PRIMARY; High — both schedule and stop pages were read in full.
- **Original-language text read:** the route, timetable, fare, operator and
  reservation sentences quoted above.

#### 棕7綠野香坡 — unresolved identity

The full PDA route page labels the current page `棕7綠野香坡` and lists its
stops, but also carries the notice: `原〖812〗路線自115年6月30日起，縮駛至「捷運橫溪站」並調整路線番號為〖三鶯2線〗`. The TDX snapshot still has a separate
record named `棕7綠野香坡` with route code BR7G. Both values are retained.

- **Source:** “BR7 Green Field route information” / `titleOriginal`:
  `棕7綠野香坡公車動態資訊`
- **Publisher:** Taipei City Government bus information system /
  `臺北市政府公車動態資訊系統`
- **URL:** https://pda5284.gov.taipei/MQS/route.jsp?rid=17466
- **Kind/confidence:** PRIMARY; High for the notice and current page — full
  official page read.
- **Original-language text read:** `原〖812〗路線自115年6月30日起，縮駛至「捷運橫溪站」並調整路線番號為〖三鶯2線〗`.

## Negative case — brown wording was tested explicitly

All 20 records were checked by Chinese and English route name, then against the
full official catalogue. Every one uses the official `棕` prefix and appears
under `捷運棕線接駁公車`. None uses `棕` directionally, as a colour description
inside a trunk-route name, or as an unrelated service name. **No route was
excluded.** None of the 20 is linked to the Wenhu Line merely because a brown
word appears in a name; the feeder-to-Wenhu relationship is the official class
relationship and the line code is BR.

Checked route labels: 棕1, 棕2, 棕3, 棕5, 棕6, 棕7, 棕7建業路, 棕7綠野香坡,
棕10, 棕11, 棕11副, 棕12, 棕13, 棕15, 棕18, 棕19, 棕20, 棕20預, 棕21, 棕22.
The official catalogue lists 棕20 rather than a separate 棕20預 label; that
identity difference is recorded as a conflict below.

## Rail joins — exact StopUID only

The original normalized TDX pull contained 110 candidate name joins across the
20 brown records. The pilot crosswalk keeps 74 joins on 74 StopUID records and
marks them `match: stop-id`; all 20 routes have at least one confirmed join.
The remaining 36 candidate StopUID records are deliberately left unlinked.

The test was conservative: a candidate had to be present in the route's TDX
stop sequence and its TDX stop name had to explicitly identify MRT service
(`捷運` or `MRT`); the curated record then retains the exact StopUID and the
MRT station code. A nearby stop whose normalized name merely matched a station
was not promoted. The route page never performs a name lookup at render time.

The 36 excluded candidate records are: TPE57293 松山機場; TPE12293 and
TPE12367 大湖公園; TPE152140, TPE16485, TPE16507, TPE16489 and TPE16503 台電大樓/
公館 candidates; TPE15807 圓山; TPE56848, TPE136165, TPE17607 and NWT197260,
NWT13879, NWT175020 市政府(市府); TPE58063 and TPE58067 大湖公園; TPE14575,
TPE185941, TPE14725, TPE15441 and TPE223309 萬芳社區; TPE155436, TPE155466,
TPE155438 and TPE155464 公館/台電大樓; TPE155447 and TPE155458 崁頂;
TPE17523 and TPE17695 木柵; TPE17547 and TPE17671 萬隆; and NWT197198,
NWT197324, NWT199762 and NWT199764 新店站.

## Conflicts

1. **棕20 endpoint abstraction.** The official schedule summary publishes
   `內科 - 故宮博物院`; its full stop page and the TDX sequence begin at
   `行善行愛路口` and end at `故宮博物院(正館)`. These are both published
   values; the page preserves the schedule summary and the structural stop
   sequence instead of choosing one.
2. **棕20預 identity.** TDX has a separate normalized record `棕20預` / BR20B.
   The official catalogue lists 棕20 and the full BR20 page describes
   reservation-only 美堤碼頭 detours without publishing a separate 棕20預
   label. The pilot does not merge or delete the TDX record.
3. **棕7綠野香坡 and the 812 notice.** The TDX snapshot still identifies BR7G
   as 棕7綠野香坡; the official PDA page says the former 812 was shortened and
   renumbered 三鶯2線 on 30 June 2026. Both are kept and the current identity is
   unresolved.

## Checked and failed

- **Dated route-history, corridor-rationale and operator-change records for 16 pilot routes** — The full official catalogue and available full route pages did not establish these records for 棕1, 棕2, 棕3, 棕5, 棕6, 棕7, 棕7建業路, 棕11, 棕11副, 棕12, 棕13, 棕15, 棕18, 棕19, 棕21 and 棕22; the route pages keep those fields TBC instead of inferring them from current stops or operators. Checked 2026-08-15.

## Stated gaps

- The merged TDX layer has no route-length, service-span or headway fields for
  these pages; those values remain TBC in the structural specs even where a
  separate official schedule page publishes a route-specific timetable.
- No individual bus operator pages were created in this brown-only pilot, so
  operator history and dated contract changes remain TBC.
- The 36 excluded candidates need a curated authoritative stop-location
  crosswalk before any station link can be added; a name-only match would not
  settle them.
