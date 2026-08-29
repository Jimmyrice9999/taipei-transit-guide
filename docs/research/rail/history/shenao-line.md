# Taiwan Railways Shen'ao–Liandong Line — research findings, 26 August 2026

**Corpus warning: `docs/research/` is leads only. It has been wrong repeatedly.
Nothing here is citable until it has been checked against a primary source —
see `.claude/skills/transit-research/SKILL.md`.**

This is a one-subject report on the former Shen'ao–Liandong alignment and the
shorter northern passenger route that later returned. Retrieval date:
2026-08-26. The operator construction-history PDF, operator chronology pages,
operator planning note and the National Museum of Marine Science and Technology
article were fetched as full pages; search snippets are not used as evidence.

## What is established

- **The operator's construction-history table identifies Shen'ao–Liandong as a
  6.0 km TRA route, constructed in 1966 with operation starting in 1967.** Its
  explanation says the 3.7 km Haipin–Liandong section was dismantled in
  December 1977 and Shen'ao–Haipin stopped operating in August 1990. Source:
  Taiwan Railways, *Chronological History of Railroad Construction*,
  titleOriginal `路線修築沿革`, publisher 國營臺灣鐵路股份有限公司 / former
  臺灣鐵路管理局, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`,
  PRIMARY, High confidence because the complete ten-page PDF was fetched and
  the row and explanation were read in context. Original-language basis:
  `41. 深澳─濂洞 Shen'ao-Liandong 6.0`, `民國55年 1966`, `民國56年 1967`,
  `海濱至濂洞3.7公里於民國66年12月拆除` and `深澳至海濱民國79年8月停駛`.
- **Passenger service on the surviving northern section was restored from
  Ruifang to Haikeguan on 9 January 2014.** The operator's full one-page note
  says the restored route was approximately 4.2 km and initially ran ten
  round trips daily. Source: Taiwan Railways, *Railway access for the National
  Museum of Marine Science and Technology*, titleOriginal
  `為因應海科館開館營運之聯外運輸需求`, publisher 國營臺灣鐵路股份有限公司 /
  former 臺灣鐵路管理局,
  `https://www.railway.gov.tw/tra-tip-web/tip/file/9a3ddb1f-e02e-407e-b618-12fe08554783`,
  PRIMARY, High confidence because the complete PDF was fetched. Original
  sentences: `深澳支線已配合提前於同年1月9日恢復客運` and `瑞芳站-海科館站間共10往返車次`.
- **The operator held a formal Shen'ao Line reopening ceremony on 9 January
  2014.** Source: Taiwan Railways, *Taiwan Railways chronology — 103*,
  titleOriginal `臺鐵大事紀`, publisher 國營臺灣鐵路股份有限公司,
  `https://www.railway.gov.tw/tra-tip-web/adr/about-timeline?selectIndex=12`,
  PRIMARY, High confidence because the full HTML page was fetched. Original
  sentence: `103.01.09 | 深澳線復駛通車典禮`.
- **The operator extended the current passenger route from Haikeguan to
  Badouzi on 28 December 2016 and described the resulting Shenao branch as
  4.7 km.** Source: Taiwan Railways, *Taiwan Railways chronology — 105*,
  titleOriginal `臺鐵大事紀`, publisher 國營臺灣鐵路股份有限公司,
  `https://www.railway.gov.tw/tra-tip-web/adr/about-timeline?selectIndex=10`,
  PRIMARY, High confidence because the full HTML page was fetched. Original
  sentence: `105.12.28 八斗子車站新站正式啟用 ... 深澳支線全長4.7公里，由海科館站延長至八斗子站`.
- **The current TDX StationOfLine snapshot contains three Shenao Line members
  and a final supplied travelled distance of 4.7 km.** This is a current-data
  boundary, not a historical route register. Source: TDX, *Taiwan Railways
  station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher
  Ministry of Transportation and Communications TDX (交通部運輸資料流通服務平臺),
  `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`,
  PRIMARY, High confidence because the committed 2026-08-24 pull was parsed in
  full. Original fields: `LineID: SA`, three ordered station members and the
  final `TravelledDistance: 4.7`.
- **A National Museum of Marine Science and Technology history article gives a
  different passenger/freight milestone, saying service stopped on 21 August
  1989 and coal trains continued.** Source: National Museum of Marine Science
  and Technology, *Badouzi Station — a beautiful railway full of stories on
  the North Coast*, titleOriginal `八斗子車站－北海岸充滿故事的的美麗鐵道`,
  publisher 國立海洋科技博物館,
  `https://www.nmmst.gov.tw/chhtml/publication_detail/519/3/8`, SECONDARY,
  Medium confidence because it is a later institutional history article rather
  than the operator's construction register. Original sentence: `直到1989年8月21日深澳線的客貨運停止，僅有運煤車運行`.

## Conflicts and measurement boundaries

- **August 1990 versus 21 August 1989.** The operator's construction-history
  row says Shen'ao–Haipin stopped operating in August 1990. The museum article
  says passenger/freight operation stopped on 21 August 1989 and coal trains
  continued. These may be different operational scopes, but the fetched set
  does not establish the legal or traffic distinction; both values stay
  published.
- **6.0 km versus approximately 4.2 km versus 4.7 km.** The construction table
  gives the historical Shen'ao–Liandong route length. The 2014 operator note
  measures the restored Ruifang–Haikeguan passenger section, while the 2016
  chronology measures the extended Haikeguan–Badouzi route. They are not
  interchangeable measurements.
- **A partial dismantling versus a later current route.** The operator records
  the Haipin–Liandong section dismantled in December 1977, while the current
  TDX record ends at Badouzi. The sources do not prove that the TDX route is a
  legal continuation of the historical 6.0 km entry; the page keeps current
  membership and historical alignment separate.

## Checked and failed

- **2014 Taiwan Railways annual report PDF** — checked 2026-08-26 at
  `https://www.railway.gov.tw/tra-tip-web/tip/file/6f5427dc-3c99-418d-bb99-b298b8dead23`.
  The search result identified relevant text, but the full-page fetch returned
  a cache-miss error, so it was not used as evidence; the one-page operator note
  was fetched instead.
- **Ruifang District Office transport-history PDF** — checked 2026-08-26 at
  `https://www.ruifang.ntpc.gov.tw/uploaddowndoc?file=govdata%2F202012301428130.pdf&filedisplay=%E4%BA%A4%E9%80%9A%E7%AF%87.pdf&flag=doc`.
  The full fetch returned an internal error. The report's search result was not
  used to publish a station sequence or closure date.
- **Complete historical station register, exact legal closure instrument,
  track-removal chronology and historical gauge/geometry** — checked 2026-08-26
  in the full operator construction-history PDF, operator chronology pages,
  operator restoration note, museum history article and current TDX pull. No
  single citable register or segment-level chronology was found.
- **Direct live TDX API re-fetch during this subject pass** — checked
  2026-08-26. The web fetch rejected the API URL as unsafe; the page uses the
  already committed full TDX pull retrieved on 2026-08-24 and records the
  failed live fetch here rather than treating the error as a source.

## Stated gaps

An operator timetable archive, legal gazette, engineering completion record or
Railway Bureau right-of-way inventory could settle the exact historical station
sequence, the legal boundary between the 1977 dismantling and the 1990 stop,
the gauge and the surviving structures. The current evidence supports the
phased account above, not a complete historical station page for each former
stop.

## Update, 29 August 2026 — pre-TRA origin and the 1977 highway dispute

- **NMMST, `臺鐵海科館站`**, SECONDARY. Traces the corridor to a private
  1936-completed Japanese-era mining railway (Jinguashi ore via Bachimen,
  Badouzi, Shen'ao to Liandong), run postwar by Taiwan Metal Mining Corp
  until financial failure ended it. A second NMMST article on Badouzi
  gives a different origin year, 1935 (extended 1936) — reported as an
  unresolved date conflict, not merged.
- **zh.wikipedia, `深澳線`**, SECONDARY, unfootnoted for these sentences.
  Same mining-railway narrative with company name 日本礦業株式會社; gives
  an exact abandonment date, 26 August 1962, not found in either NMMST
  article.
- **A railfan blog, Milky Railway**, `https://milkyrailway.blogspot.com/2023/11/blog-post.html`,
  SECONDARY (enthusiast), names but does not itself reproduce three
  primary archives (a 1984 highway-engineering-office construction report;
  a TRA archive file 深澳複線, 檔號 A315180000M/0069/235/001; and 1983-84
  provincial-assembly gazettes). Gives the fullest account found of *why*
  the 1977 dismantling happened: North Coast Highway planning from 1975
  originally intended full railway removal; the Ministry of Economic
  Affairs intervened to require road/rail coexistence with added budget;
  insufficient land remained a problem regardless, leading to the
  suspension and dismantling of two specific chainage sections when
  highway construction reached them, with named substitute-bus operator
  Keelung Bus Company and a target vehicle-return date of September 1978.
  The blog's own quoted sentence does not state a year for the
  suspension — consistent with, not confirming, TRA's December 1977 date.
- **21 August 1989 stoppage now corroborated by a second independent
  secondary source**: zh.wikipedia's `深澳線` gives the same date (previously
  only NMMST's Badouzi article had it), still with no primary source and
  still conflicting with TRA's own August 1990 field.

### Conflict, not resolved: three-way mining-origin year/builder

1933 (台灣鑛業株式會社, per the Milky Railway blog) vs. 1935/extended-1936
(日本礦業株式會社, per NMMST's Badouzi article) vs. 1936 (日本礦業株式會社, per
NMMST's Haikeguan article and zh.wikipedia). The company names differ, not
just the years — this may be a real distinction between initial survey/
construction and completion, or an error in one source; not resolved.

### Checked and failed (this pass)

- Taipower (台電) primary source for the plant/coal-rail connection —
  `taipower.com.tw` page returned blank (likely JS-rendered); no Taipower
  primary reached at all this pass.
- The three archives the Milky Railway blog names — no accessible URL
  found for any of them.
- zh.wikipedia's own footnotes for the mining-origin and 1977-dismantling
  sentences — confirmed absent; the article's only reference for that
  section is an unpaged print book (《臺灣鐵路古今站名詞典》), so this
  material is unsourced on Wikipedia's own terms, not merely unverified by
  this pass.
- 自由時報/聯合報/中央社 archives — not searched; WebSearch budget exhausted
  before this pass began.
