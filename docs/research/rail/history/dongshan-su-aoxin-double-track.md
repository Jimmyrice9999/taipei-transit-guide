# Taiwan Railways Dongshan–Su'aoxin Double Track — research findings, 26 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on the Dongshan–Su'aoxin construction-history entry
and its relationship to the current operator table, station pages and TDX line
data.

## What is established

- **The full TRA construction-history PDF lists Dongshan–Su'aoxin Station as row 51 at 5.4 km, with TRA as constructor.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `51.冬山─蘇澳新站(雙線) Dongshan-Su'aoxin Station 5.4 臺灣鐵路管理局 TRA`.
- **The PDF's aligned chronology gives 1974 as construction year, 1977 as operation start and 添築雙線 as the explanation.** Source: the same full operator PDF, PRIMARY, High confidence because row 51 and its aligned continuation were read in the complete document. Original-language basis: `民 國 63 年 1974 民 國 66 年 1977 添築雙線。 Extended to be double-tracked`.
- **The current operator HTML independently lists the same subject as row 28 at 5.4 km, with 1974 construction, 1977 operation start and 添築雙線.** Source: National Taiwan Railways Corporation, *Railway route construction history*, titleOriginal `臺灣鐵路路線建造史`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/adr/about-1-5`, PRIMARY, High confidence because the complete current table was fetched and read. Original-language basis: `28.冬山 - 蘇澳新站(雙線) | 5.4 | 臺灣鐵路管理局 | 民國六六年 1977 | 民國六三年 1974 | 添築雙線`.
- **The current operator station pages identify Dongshan as 7150 and Su'aoxin as 7130.** Sources: National Taiwan Railways Corporation, *Dongshan Station information*, titleOriginal `冬山車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7150`, and *Su'aoxin Station information*, titleOriginal `蘇澳新車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7130`, PRIMARY, High confidence because both complete current station pages were fetched and read. Original-language bases: `## 7150 冬山` and `## 7130 蘇澳新`.
- **The committed TDX station pull contains Xinma 7140 between current Dongshan and Su'aoxin records.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station records*, titleOriginal `臺灣鐵路車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the full committed pull was scanned for the three station IDs.
- **The committed TDX StationOfLine pull places Dongshan at source sequence 23 and 85.1 km, Xinma at 24 and 89.3 km, and Su'aoxin at 25 and 90.2 km on EL.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the full committed pull was checked. Original-language basis: `EL`, `7150`/`冬山`, `Sequence: 23`, `TraveledDistance: 85.1`; `7140`/`新馬`, `Sequence: 24`, `TraveledDistance: 89.3`; `7130`/`蘇澳新`, `Sequence: 25`, `TraveledDistance: 90.2`.
- **The current Su'aoxin page reports Xinma as temporarily out of service and directs passengers to transfer at Su'aoxin.** Source: National Taiwan Railways Corporation, *Su'aoxin Station information*, titleOriginal `蘇澳新車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7130`, PRIMARY, High confidence because the current station page was fetched and read. Original-language basis: `新馬站暫停營運，請於蘇澳新站轉乘。`.

## Scope and measurement boundaries

- The 5.4 km value is the construction-table scope reported by both operator presentations. The current TDX endpoint fields are retained as supplied travelled-distance data and are not treated as a surveyed historical boundary.
- The historical PDF row number is 51 and the current HTML row number is 28. The differing numbering is a presentation boundary; the two operator records agree on the reported values for this subject.
- The phrase `添築雙線` is reported as the operator's explanation. The checked records do not supply a current as-built track-count survey for this historical boundary.
- Xinma's current TDX membership and the current service notice are live-data facts. They do not rewrite the historical endpoint name.

## Conflicts between primary presentations

- No numerical disagreement was found between the full operator PDF and the current operator HTML: both report 5.4 km, TRA, 1974 construction, 1977 operation start and double-track work. Their row numbers differ (51 versus 28), and that presentation difference is retained.
- The operator construction scope is 5.4 km, while the current TDX endpoint fields differ by 5.1 km (90.2 minus 85.1), with Xinma between the endpoints in the current ordered sequence. These are different evidence layers and are not averaged or silently substituted.

## Checked and failed

- **Exact day/month of the double-track work and operation start** — checked 2026-08-26 in the full construction-history PDF and current operator HTML. Only years are supplied.
- **Contract, completion certificate and commissioning notice** — checked 2026-08-26 in the full operator PDF and current HTML history page. No such document is linked or transcribed for this subject.
- **Historical engineering chainage and surveyed 5.4 km boundary** — checked 2026-08-26 in the full operator records, current station pages and committed TDX pulls. No surveyed boundary or complete engineering chainage was found.
- **Current as-built track count for the historical boundary** — checked 2026-08-26 in the full construction records, current station pages and TDX data. These establish the historical explanation and current ordered records, not a current track-count survey.

## Stated gaps

An operator engineering archive with the contract, completion record, historic
timetable, intermediate station register, surveyed centreline and current
as-built track plan would settle the day-level milestones, exact construction
boundary and relationship between the 5.4 km record and the current 5.1 km
distance-field interval. Until then, both measures and the current Xinma
intermediate station are retained separately.

## Update, 29 August 2026 — Xinma is the project's historical midpoint, not just a current-layer fact

A second pass found that Xinma (the current intermediate station already
noted from TDX data) is directly named as the midpoint of this same
double-tracking project in its own naming-history article, and that both
endpoint stations carried different names at the time of construction.

- **zh.wikipedia, `宜蘭線`**, `https://zh.wikipedia.org/wiki/宜蘭線`, SECONDARY.
  States double-tracking "between 1974 and 1978" across three sections
  including 冬山=聖湖（今新馬站）=南聖湖（今蘇澳新站）, footnoted to
  中華民國66年《交通年鑑》(1978), p.223 — not independently accessed. A wider
  range than the operator's own 1974/1977 row for this specific segment; not
  necessarily contradictory (a multi-year programme can have a narrower
  single-segment record), but not reconciled by any source read.
- **zh.wikipedia, `新馬車站`**, `https://zh.wikipedia.org/wiki/新馬車站`,
  SECONDARY. States the station was renamed 新城→聖湖 on 1 June 1975 (cited
  to the TRA 1975 Statistical Yearbook, 大事紀要, p.294 — not independently
  opened), and that the same year the Nanshenghu–Dongshan double-tracking
  project shortened its spacing to Su'aoxin to 1.1 km (cited only to an
  unreachable enthusiast site, trstour.com). Renamed again, to 新馬, on
  1983-04-01. A separate, later 2003 electrification project is stated to
  have shortened the same interval again, to 0.9 km.
- **zh.wikipedia, `蘇澳新站`**, `https://zh.wikipedia.org/wiki/蘇澳新站`,
  SECONDARY. Naming history: opened 1968-04-15 as 南新城 (cited to a 1968
  newspaper via a public library digital archive, and to a TRA 30th
  North-Link-anniversary volume); renamed 南聖湖 1975-01-01 (cited to the TRA
  1975 yearbook and a 2013 municipal gazetteer); renamed to the current
  蘇澳新站 only on 1982-01-01 — five years after this page's recorded 1977
  operation-start year. None of these citations were independently opened.

**Conflict, not resolved**: three different year statements now exist for
this corridor — the operator's own 1974 (construction) / 1977
(operation-start) row for the specific 5.4 km entry; Wikipedia's combined
"1974–1978" range covering three sections together; and Wikipedia's implied
1975 for the Xinma-adjacent portion specifically (tied to Xinma's 1 June
1975 rename). Published as three separate values; none is picked.

**Methodological note**: a second independent fetch of the operator's HTML
construction table returned this entry as row 29, not row 28 as recorded
above from the first fetch — most likely an artefact of how the fetch
tool's summarizing model counts table rows across calls, since the
underlying values (5.4 km, TRA, 1974/1977, 添築雙線) were identical and
stable across every fetch. Row-number citations from this table should be
treated cautiously; the content values are the load-bearing fact, not the
row index.

### Checked and failed (this pass)

- `http://trstour.com/yi-lan%20line.htm` (the enthusiast site behind the
  Xinma 1975 distance-shortening claim) — failed with an invalid
  self-signed HTTPS certificate, 2026-08-29.
- web.archive.org snapshots of the same page, and of the TRA yearbook
  citation pages on twinfo.ncl.edu.tw — the fetch tool refuses
  web.archive.org entirely in this environment; the twinfo.ncl.edu.tw page
  returned with no extractable text.
- 1978《交通年鑑》p.223 and 1975《臺灣鐵路統計年報》大事紀要 p.294 — page
  references to physical government yearbooks with no accessible digital
  copy found.
- Re-parsing the TRA construction-history PDF for rows 46–56 to cross-check
  the row-numbering discrepancy — WebFetch could not parse the PDF's binary
  content this pass; no `pdftotext` fallback was available to this scout.
- Contractor, project cost, day/month milestones, named engineering
  structures, and any construction dispute — checked across the TRA table,
  both TRA station pages, and all five zh.wikipedia articles read this
  pass (宜蘭線, 北迴線, 冬山車站, 新馬車站, 蘇澳新站); none supply any of these.
  Confirmed absent from everything checked, not merely unsearched.
- 自由時報/聯合報/中央社 archives — not searched this pass; WebSearch budget
  was exhausted before this scout began.
