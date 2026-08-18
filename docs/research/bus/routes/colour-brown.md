> **Corpus warning: `docs/research/` is leads only.** Nothing here may be
> published on its own authority. Every statement below was checked against the
> primary source named beside it; the file remains a research record, not a
> source.

# Brown-line feeder routes — research

**Run date: 17 August 2026.** This report covers the 20 records in the merged
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

## Batch 1 — 棕1, 棕2, 棕3 and 棕5, checked 17 August 2026

This batch checked the four route pages against full official pages. Current
route identity and service details are published where the pages provide them;
opening history, original corridor decisions and dated operator changes remain
TBC unless a primary source states them.

### 棕1 / BR1

The full Taipei bus schedule page gives the current corridor as
`松山車站 - 松山機場`, weekday service `0540 - 2100`, holiday suspension,
one-section fare and `首都客運內湖站` as the operator contact.

- **Source:** “BR1 route schedule” / `titleOriginal`: `棕1班表`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0114000100
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 松山車站 - 松山機場`;
  `頭末班車 : [平日] 0540 - 2100 / [假日] 停駛`;
  `業者服務電話 : 首都客運內湖站`.

The Taipei Department of Transportation’s full 2009 announcement says Minibus
10 was introduced on 3 August 2009 because 棕1 had been shortened, to serve
short trips for residents near 麥帥新城 and 新明路 to 三軍總醫院、內湖行政中心、
三民國中 and 潭美國小. It establishes the shortening before that announcement,
but not the earlier 棕1 termini or the decision date.

- **Source:** “Minibus 10 scheduled to start service in Neihu” /
  `titleOriginal`: `市民小巴10路公車訂於98年8月3日通車營運，提供內湖地區市民便捷之大眾運輸服務`
- **Publisher:** Taipei City Department of Transportation /
  `臺北市政府交通局`
- **URL:** https://dot.gov.taipei/News_Content.aspx?n=230A79C0F27D6B8F&s=4232D242EAA4B05A
- **Kind/confidence:** PRIMARY; High — full official announcement read.
- **Original-language text read:** `本路線係為配合棕1路公車路線縮短後，提供麥帥新城、
  新明路一帶居民前往三軍總醫院、內湖行政中心、三民國中及潭美國小等地區短程接駁之用`.

### 棕2 / BR2

The full official route-schedule page gives `萬芳社區 - 景美女中`, weekday and
holiday service `0540 - 0000`, one-section fare and `欣欣客運木柵二站` as the
operator contact. It does not establish the opening date, a former alignment,
the original corridor rationale or a dated operator transfer.

- **Source:** “BR2 route schedule” / `titleOriginal`: `棕2班表`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0114000200
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 萬芳社區 - 景美女中`;
  `頭末班車 : [平日] 0540 - 0000 / [假日] 0540 - 0000`;
  `業者服務電話 : 欣欣客運木柵二站`.

### 棕3 / BR3

The full official route-information page gives `富德 - 萬美社區`, weekday and
holiday service `0545 - 2300`, one-section fare and `欣欣客運富德站` as the
operator contact. Its note describes a current special-event headway adjustment
for the 貓空 area; it does not establish the opening date, former alignment,
original corridor rationale or a dated operator transfer.

- **Source:** “BR3 route information” / `titleOriginal`: `棕3路線資訊`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/EBus/VsSimpleMap?routeid=0114000300
- **Kind/confidence:** PRIMARY; High — full official route-information page read.
- **Original-language text read:** `起迄站名 : 富德 - 萬美社區`;
  `頭末班車 : [平日] 0545 - 2300 / [假日] 0545 - 2300`;
  `業者服務電話 : 欣欣客運富德站` and the current 貓空 special-event headway note.

### 棕5 / BR5

The full official route-information page gives `萬芳社區 - 指南宮`, with three
weekday trips detouring via `指南實小`, no holiday service for that detour, and
`東南客運萬芳站` as the operator contact. A full Taipei PTO PDF
records two 2012 operating-plan changes: `萬寧街一` was renamed `萬寧山莊`,
effective 1 March 2012, and `政大附中` was added to the return trip, effective
14 March 2012.

- **Source:** “BR5 route information” / `titleOriginal`: `棕5路線資訊`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/EBus/VsSimpleMap?routeid=0114000500
- **Kind/confidence:** PRIMARY; High — full official route-information page read.
- **Original-language text read:** `起迄站名 : 萬芳社區 - 指南宮`;
  the three weekday `指南實小` trips; and `業者服務電話 : 東南客運萬芳站`.

- **Source:** “March 2012 approved bus operating-plan adjustments” /
  `titleOriginal`: `101年3月份核定營運計畫調整`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://www-ws.gov.taipei/001/Upload/public/Attachment/241216302476.pdf
- **Kind/confidence:** PRIMARY; High — full official PDF read.
- **Original-language text read:** `棕5路 萬寧街一站更名為萬寧山莊，自101年3月1日起實施`;
  `棕5路返程增停政大附中，自101年3月14日起實施`.

### What remains TBC

- **棕1:** the fact and approximate timing of a shortening before 2009 are
  established; the former termini, shortening decision and operator history are
  TBC.
- **棕2:** opening date, former alignment, original corridor rationale and dated
  operator changes are TBC.
- **棕3:** opening date, former alignment, original corridor rationale and dated
  operator changes are TBC; the special-event note is current operational
  information, not a dated branch history.
- **棕5:** opening date, earlier alignment, original corridor rationale and dated
  operator changes are TBC; only the two 2012 stop adjustments are established.

## Batch 2 — 棕6, 棕7, 棕7建業路 and 棕11, checked 17 August 2026

The four current route pages were fetched in full. They establish current
identity, service patterns and operator contacts; only the dated 棕11 stop
change below supplies route-specific historical evidence. Current dog-friendly,
event, 綠野香坡 and 建業路 timetable notes are not treated as origin history.

### 棕6 / BR6

The full official route-information page gives `捷運動物園站 - 捷運市政府站`,
weekday and holiday service `0540~0000`, weekday peak/off-peak intervals of
12–15 and 20–25 minutes, one-section fare, `欣欣客運木柵二站`, two weekday and
four holiday dog-friendly departures, and a current 貓空 event note that may
change the event-period interval from 20 to 20–30 minutes.

- **Source:** “BR6 route information” / `titleOriginal`: `棕6路線資訊`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/EBus/VsSimpleMap?gb=1&routeid=0114000600
- **Kind/confidence:** PRIMARY; High — full official route-information page read.
- **Original-language text read:** `起訖站名：捷運動物園站 - 捷運市政府站`;
  `平日：0540~0000` and `假日：0540~0000`;
  `業者服務電話 : 欣欣客運木柵二站`; `平日0600、1015班次為狗狗友善公車`;
  `假日0830、1120、1500、1640班次為狗狗友善公車`; and the `貓空山區特殊活動`
  headway note.

### 棕7 / BR7

The full official schedule page gives `新店 - 臺北市政府`, weekday service
0525–2245, holiday service 0525–2215, two-section fare, `臺北客運新店站`, and
the separate 綠野香坡 trip pattern. It does not establish the opening date,
former alignment, original corridor rationale or a dated operator transfer.

- **Source:** “BR7 route schedule” / `titleOriginal`: `棕7班表`
- **Publisher:** Taipei City and New Taipei City Public Transportation Offices /
  `臺北市政府公共運輸處、新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0414000700
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 新店 - 臺北市政府`;
  `頭末班車 : [平日] 0525 - 2245 / [假日] 0525 - 2215`;
  `業者服務電話 : 臺北客運新店站`; and the dated-time 綠野香坡 note.

### 棕7建業路 / BR7 Jianye Road

The full official route-information page identifies the New Taipei route as
`新店 - 臺北市政府`, with weekday departures 0730, 0800, 1350, 1500 and 1800,
holiday departures 0600, 0900, 1200, 1500 and 1800, two-section fare, the
景美女中–博嘉國小 buffer and `臺北客運新店站`. The page does not establish
when this Jianye Road variant began, why it was created or whether its operator
ever changed.

- **Source:** “BR7 Jianye Road route information” /
  `titleOriginal`: `棕7建業路路線資訊`
- **Publisher:** New Taipei City Public Transportation Office /
  `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/EBus/VsSimpleMap?rid=17940&sec=1
- **Kind/confidence:** PRIMARY; High — full official route-information page read.
- **Original-language text read:** `管轄單位：新北市`;
  `起訖站名：新店 - 臺北市政府`;
  `平日：0730 0800 1350 1500 1800`;
  `假日：0600 0900 1200 1500 1800`;
  `分段緩衝區：景美女中-博嘉國小`; and `業者服務電話 : 臺北客運新店站`.

### 棕11 / BR11

The full official route-and-stop page gives `富德 - 捷運公館站`, weekday
departures from 0550 to 2230, holiday departures from 0630 to 1340,
one-section fare and `欣欣客運富德站`. It does not establish the opening date,
former alignment or original corridor rationale.

- **Source:** “BR11 route and stop information” / `titleOriginal`: `棕11路線資訊`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/StopsOfRoute?routeid=0114001100
- **Kind/confidence:** PRIMARY; High — full official route-and-stop page read.
- **Original-language text read:** `起迄站名 : 富德 - 捷運公館站`;
  `頭末班車 : [平日] 0550 - 2230 / [假日] 0630 - 1340`;
  `收費方式 : 一段票`; and `業者服務電話 : 欣欣客運富德站`.

The PTO’s full supplementary December 2013 operating-plan PDF records that
棕11, including its sub-line, cancelled the `萬壽橋頭(木柵)` stop effective
31 December 2013. This is a stop-level adjustment, not evidence of the route’s
opening or original corridor decision.

- **Source:** “November 2013 supplementary approved bus operating-plan adjustments” /
  `titleOriginal`: `102年11月份營運計畫調整(補充)`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://www-ws.gov.taipei/001/Upload/public/Attachment/412316222945.pdf
- **Kind/confidence:** PRIMARY; High — full official three-page PDF read.
- **Original-language text read:** `102/12/31 棕11(含副) 取消「萬壽橋頭(木柵)」站`.

### What remains TBC

- **棕6:** opening date, former alignment, original corridor rationale and dated
  operator changes are TBC. The dog-friendly and 貓空-event notes are current
  operating details only.
- **棕7:** opening date, former alignment, original corridor rationale and dated
  operator changes are TBC. The 綠野香坡 pattern is current schedule evidence,
  not a dated branch history.
- **棕7建業路:** opening date, creation rationale, former alignment and dated
  operator changes are TBC. The current page confirms its limited schedule and
  建業路 stops only.
- **棕11:** opening date, former alignment, original corridor rationale and dated
  operator changes are TBC; the 2013 stop cancellation is established.

## Batch 3 — 棕11副, 棕12, 棕13 and 棕15, checked 17 August 2026

The four route pages and the dated PTO records below were fetched in full.
They establish current service and several later adjustments. They do not, by
themselves, establish the routes’ opening decisions or original corridor
rationales.

### 棕11副 / BR11Sub

The full official route-and-stop page gives `富德 - 福興路`, weekday and holiday
service `0600 - 0000`, one-section fare and `欣欣客運富德站`.

- **Source:** “BR11Sub route and stop information” /
  `titleOriginal`: `棕11副路線資訊`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/StopsOfRoute?routeid=0114001110
- **Kind/confidence:** PRIMARY; High — full official route-and-stop page read.
- **Original-language text read:** `起迄站名 : 富德 - 福興路`;
  `頭末班車 : [平日] 0600 - 0000 / [假日] 0600 - 0000`;
  `收費方式 : 一段票`; and `業者服務電話 : 欣欣客運富德站`.

The PTO’s full 2012 chronology records `棕 11 副線延駛文山區福興路` on 4 August
2012. The full 2013 supplementary operating-plan PDF separately records the
parent and sub-line cancellation of `萬壽橋頭(木柵)` effective 31 December
2013. These are route adjustments, not the opening record or original rationale.

- **Source:** “Taipei Public Transportation Office 2012 chronology” /
  `titleOriginal`: `臺北市公共運輸處大事紀要(101 年)`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://www-ws.gov.taipei/Download.ashx?n=MzQxNTE1MzUxMzcxLnBkZg%3D%3D&u=LzAwMS9VcGxvYWQvNDU4L3JlbGZpbGUvMjI1OTAvMzUwMjkxMi8zNDE1MTUzNTEzNzEucGRm
- **Kind/confidence:** PRIMARY; High — full official four-page chronology read.
- **Original-language text read:** `8月 4日 棕 11 副線延駛文山區福興路`.

- **Source:** “November 2013 supplementary approved bus operating-plan adjustments” /
  `titleOriginal`: `102年11月份營運計畫調整(補充)`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://www-ws.gov.taipei/001/Upload/public/Attachment/412316222945.pdf
- **Kind/confidence:** PRIMARY; High — full official three-page PDF read.
- **Original-language text read:** `102/12/31 棕11(含副) 取消「萬壽橋頭(木柵)」站`.

### 棕12 / BR12

The full official route-and-stop page gives `景美 - 客家文化主題公園`, weekday
and holiday service `0600 - 0000`, a one-section fare and `欣欣客運景德站`.

- **Source:** “BR12 route and stop information” / `titleOriginal`: `棕12路線資訊`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/StopsOfRoute?routeid=0114001200
- **Kind/confidence:** PRIMARY; High — full official route-and-stop page read.
- **Original-language text read:** `起迄站名 : 景美 - 客家文化主題公園`;
  `頭末班車 : [平日] 0600 - 0000 / [假日] 0600 - 0000`;
  `收費方式 : 一段票`; and `業者服務電話 : 欣欣客運景德站`.

The full April 2012 PTO plan records that the operating endpoint named
`交通博物館` was renamed `客家文化主題公園`, effective 23 March 2012.

- **Source:** “April 2012 approved bus operating-plan adjustments” /
  `titleOriginal`: `101年4月份核定營運計畫調整`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://www-ws.gov.taipei/001/Upload/public/Attachment/252117392922.pdf
- **Kind/confidence:** PRIMARY; High — full official three-page PDF read.
- **Original-language text read:** `棕12 本市聯營公車棕12營運起訖點[交通博物館]更名為[客家文化主題公園]。`
  and `2012/3/23`.

### 棕13 / BR13

The full official route-information page gives `雙溪 - 捷運大直站`, weekday and
holiday service `0600~2315`, `首都客運士林站`, and a weekday sub-route that does
not serve `外雙溪(至善)` on Wednesday and Friday at 1700 and 1720.

- **Source:** “BR13 route information” / `titleOriginal`: `棕13路線資訊`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/EBus/VsSimpleMap?routeid=0114001300
- **Kind/confidence:** PRIMARY; High — full official route-information page read.
- **Original-language text read:** `起訖站名：雙溪 - 捷運大直站`;
  `平日：0600~2315` and `假日：0600~2315`;
  `棕13不經外雙溪(至善)週三及週五班表:1700 1720`;
  and `業者服務電話 : 首都客運士林站`.

The full March 2012 PTO plan records a service reduction for 棕13, approved
effective 1 February 2012. It does not state the reason for the reduction.

- **Source:** “March 2012 approved bus operating-plan adjustments” /
  `titleOriginal`: `101年3月份核定營運計畫調整`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://www-ws.gov.taipei/001/Upload/public/Attachment/241216302476.pdf
- **Kind/confidence:** PRIMARY; High — full official three-page PDF read.
- **Original-language text read:** `棕13 棕13路公車調降班次一案，核定自101年2月1日起正式實施。`

### 棕15 / BR15

The full official schedule page gives `富德 - 貓空纜車站`, weekday service
0600–2300, holiday service 0600–0000, one-section fare, `欣欣客運富德站`, and
the safety-dependent instruction that the 水鋼琴社區–貓空 mountain section is
served on a hail-and-ride basis when conditions are safe.

- **Source:** “BR15 route schedule” / `titleOriginal`: `棕15班表`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0114001500
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 富德 - 貓空纜車站`;
  `頭末班車 : [平日] 0600 - 2300 / [假日] 0600 - 0000`;
  `業者服務電話 : 欣欣客運富德站`; and `水鋼琴社區至貓空地區山區路段，於安全無虞狀況下隨招隨停`.

The full April 2018 PTO plan records an addition of `政大(聯合醫院)` and the
cancellation of `政大一` in the southbound direction, effective 26 April 2018.
The full March 2022 plan records a northbound `水鋼琴社區` stop addition for
棕15 and related routes, effective 17 March 2022.

- **Source:** “April 2018 approved bus operating-plan adjustments” /
  `titleOriginal`: `107年4月份營運計畫調整`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://www-ws.gov.taipei/001/Upload/458/relfile/22562/3499374/57acc21d-fdf2-4386-a9ab-cce8040fbae3.pdf
- **Kind/confidence:** PRIMARY; High — full official two-page PDF read.
- **Original-language text read:** `107/04/26 棕15 新增「政大(聯合醫院)」站及取消「政大一」站(往南)`.

- **Source:** “March 2022 approved bus operating-plan adjustments” /
  `titleOriginal`: `111年3月份營運計畫調整`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://www-ws.gov.taipei/001/Upload/458/relfile/22562/3499374/42ca36d2-ba63-4cf6-aed5-8aa65218430c.pdf
- **Kind/confidence:** PRIMARY; High — full official two-page PDF read.
- **Original-language text read:** `111/03/17 棕15、通勤21、貓空左線(動物園)、棕5、小10(含區) 增設「水鋼琴社區」站(往北)。`

### What remains TBC

- **棕11副:** opening date, earlier alignment, original corridor rationale and
  dated operator transfers are TBC; the 2012 extension and 2013 stop change are
  established.
- **棕12:** opening date, earlier alignment, original corridor rationale and
  dated operator transfers are TBC; the 2012 endpoint rename is established.
- **棕13:** opening date, earlier alignment, original corridor rationale, the
  reason for the 2012 service reduction and dated operator transfers are TBC.
- **棕15:** opening date, earlier alignment, original corridor rationale and
  dated operator transfers are TBC; the 2018 and 2022 stop adjustments are
  established.

## Batch 4 — 棕18, 棕19, 棕21 and 棕22, checked 17 August 2026

The four current route pages were fetched in full. They establish current
identity, service patterns and operator contacts. Only 棕21 has a dated
route-history record in the primary material found for this batch; original
corridor decisions and dated operator transfers remain TBC where no primary
record was found. Current route variants are recorded as current operation, not
as an inferred origin story.

### 棕18 / BR18

The full official schedule page gives `政治大學 - 松山車站`, weekday and
holiday service `0600 - 2300`, one-section fare and `欣欣客運富德站` as the
operator contact. Its full service notes distinguish ordinary trips from
`棕18經松山車站` trips.

- **Source:** “BR18 route schedule and stop information” / `titleOriginal`:
  `棕18班表`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0114001800
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 政治大學 - 松山車站`;
  `頭末班車 : [平日] 0600 - 2300 / [假日] 0600 - 2300`;
  `業者服務電話 : 欣欣客運富德站`; and the full service-note distinction
  `①不經松山車站 ②經松山車站`.

### 棕19 / BR19

The full official route-information page gives `捷運昆陽站 - 捷運大湖公園站`,
weekday service `0620~1830`, holiday service `0620~1740`, one-section fare and
`東南客運內湖站` as the operator contact. Its stop sequence runs through the
南港 and 東湖 corridor. No opening, corridor-rationale or dated operator-change
record was found in the primary material checked for this batch.

- **Source:** “BR19 route information” / `titleOriginal`: `棕19路線資訊`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/EBus/VsSimpleMap?rid=16153&sec=0
- **Kind/confidence:** PRIMARY; High — full official route-information page read.
- **Original-language text read:** `起訖站名：捷運昆陽站 - 捷運大湖公園站`;
  `平日：0620~1830`; `假日：0620~1740`; `一段票`; and
  `東南客運內湖站`.

### 棕21 / BR21

The full official route-and-stop page gives `政大里 - 捷運市政府站`, weekday
service `0640 - 1815` and no holiday service. It distinguishes
`棕21不經政大御花園` and `棕21經政大御花園`; the latter’s 08:00 and 18:15
workings begin and end at `兆如安養中心`. The page names `欣欣客運富德站`.

- **Source:** “BR21 route and stop information” / `titleOriginal`:
  `棕21路線資訊`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/StopsOfRoute?routeid=0114002100
- **Kind/confidence:** PRIMARY; High — full official route-and-stop page read.
- **Original-language text read:** `起迄站名 : 政大里 - 捷運市政府站`;
  `頭末班車 : [平日] 0640 - 1815 / [假日] 停駛`;
  `棕21不經政大御花園`; `棕21經政大御花園`; `08:00、18:15 ... 兆如安養中心`;
  and `業者服務電話 : 欣欣客運富德站`.

The full PTO 2012 chronology records the service as newly opened on 16 July
2012, from 政大里 to 捷運市政府站. It does not state why that corridor was
selected or identify a later operator transfer.

- **Source:** “Taipei Public Transportation Office 2012 chronology” /
  `titleOriginal`: `臺北市公共運輸處大事紀要(101 年)`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://www-ws.gov.taipei/Download.ashx?n=MzQxNTE1MzUxMzcxLnBkZg%3D%3D&u=LzAwMS9VcGxvYWQvNDU4L3JlbGZpbGUvMjI1OTAvMzUwMjkxMi8zNDE1MTUzNTEzNzEucGRm
- **Kind/confidence:** PRIMARY; High — full official chronology read.
- **Original-language text read:** `7月 16日 新闢棕 21 路(政大里─捷運市政府站)。`

### 棕22 / BR22

The full official route-information page gives `景美 - 青年路`, weekday and
holiday service `0640~2130`, ten departures on each day type, one-section fare
and `欣欣客運景德站` as the operator contact. Its stop sequence serves the
客家文化主題公園 and 青年路 corridor. No opening, corridor-rationale or dated
operator-change record was found in the primary material checked for this batch.

- **Source:** “BR22 route information” / `titleOriginal`: `棕22路線資訊`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/EBus/VsSimpleMap?rid=16747&sec=0
- **Kind/confidence:** PRIMARY; High — full official route-information page read.
- **Original-language text read:** `起訖站名：景美 - 青年路`;
  `平日：0640~2130`; `假日：0640~2130`; `一段票`; and
  `欣欣客運景德站`.

### What remains TBC

- **棕18:** opening date, earlier alignment, original corridor rationale and
  dated operator transfers are TBC; the current standard/經松山車站 variants
  are established.
- **棕19:** opening date, earlier alignment, original corridor rationale,
  dated operator transfers and any branch history are TBC.
- **棕21:** the 16 July 2012 new-service record is established; the reason for
  the corridor, the creation dates/rationales of the current variants and
  dated operator transfers are TBC.
- **棕22:** opening date, earlier alignment, original corridor rationale,
  dated operator transfers and any branch history are TBC.

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

- **A complete 2024 棕2 route-change record** — The search result identified a PTO PDF lead, but the full PDF fetch failed with a cache miss; no claim was published from the snippet. Checked 17 August 2026.
- **Dated route-history, corridor-rationale and operator-change records for the 16 pilot routes** — The batch-1 through batch-4 checks found a partial pre-2009 shortening record for 棕1, two 2012 stop adjustments for 棕5, a 2013 stop cancellation for 棕11 (including its sub-line), the 2012 棕11副 extension and stop change, the 2012 棕12 endpoint rename, the 2012 棕13 service reduction, the 2018/2022 棕15 stop adjustments, and a 16 July 2012 new-service record for 棕21. They did not establish the remaining opening histories, original corridor decisions or dated operator changes for 棕1, 棕2, 棕3, 棕5, 棕6, 棕7, 棕7建業路, 棕11, 棕11副, 棕12, 棕13, 棕15, 棕18, 棕19, 棕21 and 棕22; those fields remain TBC rather than being inferred from current stops or operators. Checked 17 August 2026.

## Stated gaps

- The merged TDX layer has no route-length, service-span or headway fields for
  these pages; those values remain TBC in the structural specs even where a
  separate official schedule page publishes a route-specific timetable.
- No individual bus operator pages were created in this brown-only pilot, so
  operator history and dated contract changes remain TBC.
- The 36 excluded candidates need a curated authoritative stop-location
  crosswalk before any station link can be added; a name-only match would not
  settle them.
