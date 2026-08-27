# Taiwan Railways Hualien–Taitung Widening Record — research findings, 26 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on the operator's Hualien–Taitung widening record
and the boundary between its historical project length and current TDX fields.

## What is established

- **The complete operator construction-history PDF records Hualien–Taitung widening at 162.2 km.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `58.花蓮─臺東(拓寬) Hualien-Taitung 162.2 臺灣省政府 Taiwan Provincial Government`.
- **The PDF marks the row as Eastern Line widening and gives 1978 as work year and 1982 as operation-start year.** Source: the same full operator PDF, PRIMARY, High confidence because the row, aligned chronology and explanation were read together. Original-language basis: `民國 67 年 1978 民國 71 年 1982 東線拓寬。 Widened in 1978`.
- **The PDF names Taiwan Provincial Government as constructor.** Source: the same full operator PDF, PRIMARY, High confidence because the constructor field was read in the complete table. Original-language basis: `臺灣省政府 Taiwan Provincial Government`.
- **The current operator HTML repeats 162.2 km, Taiwan Provincial Government, 1978/1982 and Eastern Line widening.** Source: National Taiwan Railways Corporation, *Railway route construction history*, titleOriginal `臺灣鐵路路線建造史`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/adr/about-1-5`, PRIMARY, High confidence because the complete current table was fetched and read. Original-language basis: `33.花蓮 - 臺東(拓寬) | 162.2 | 臺灣省政府 | 民國七一年 1982 | 民國六七年 1978 | 東線拓寬`.
- **The current operator station pages identify Hualien as 7000 and Taitung as 6000.** Sources: National Taiwan Railways Corporation, *Hualien Station information*, titleOriginal `花蓮車站資訊`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7000`, and *Taitung Station information*, titleOriginal `臺東車站資訊`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6000`, PRIMARY, High confidence because both full current station pages were fetched and read. Original-language basis: `## 7000 花蓮` and `## 6000 臺東`.
- **The committed TDX station-of-line pull places Hualien at source sequence 37 with travelled distance 169.7 km and Taitung at source sequence 63 with travelled distance 320.6 km on EL; the guide presents these as positions 38 and 64 and calculates a 150.9 km difference.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher `交通部運輸資料流通服務平台`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the complete committed pull was scanned. Original-language/data basis: `Sequence: 37, StationID: 7000, StationName: 花蓮, TraveledDistance: 169.7` and `Sequence: 63, StationID: 6000, StationName: 臺東, TraveledDistance: 320.6` within `LineID: EL`.
- **The committed TDX station pull contains both current passenger-station records.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station records*, titleOriginal `臺灣鐵路車站資料`, publisher `交通部運輸資料流通服務平台`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the complete committed pull was scanned. Original-language/data basis: `StationID: 7000 ... StationName: {En: Hualien, Zh_tw: 花蓮}` and `StationID: 6000 ... StationName: {En: Taitung, Zh_tw: 臺東}`.

## Scope and measurement boundaries

- The 162.2 km value, 1978/1982 chronology, constructor and widening explanation agree across the two operator presentations.
- The 150.9 km TDX difference is a subtraction of current supplied travelled-distance fields on EL. It is not silently substituted for the historical project length.
- Current station IDs identify current passenger records, not the surveyed project boundary or a complete track-count transition.

## Additional gauge-boundary evidence

- **The National Archives catalogue describes the East Line widening as a
  physical conversion and station-rebuild programme at a dated Ji'an milestone.**
  Source: National Archives Administration, *2026 archival research and cultural
  selection — Taiwan Railway project image*, titleOriginal `強『檔』出擊─2026檔案研究及文創徵選活動`,
  publisher 國家發展委員會檔案管理局,
  `https://www.archives.gov.tw/wSite/public/Attachment/001/f1772517989625.pdf`,
  SECONDARY, Medium confidence because the full six-page government catalogue
  was read but it describes an archival image rather than publishing the
  underlying engineering file. Original-language basis: `1982 年 06 月 20 日
  完成拓寬的東部鐵路吉安站` and `所謂的拓寬工程，包括：五分車軌換成窄軌，鐵路路線重新劃設，廢棄舊站，新站建設等。`
- **The operator's terminology page identifies 1,067 mm as the TRA example and
  762 mm as the Alishan Forest Railway example; the National Archives East Line
  presentation says the former Hualien–Taitung railway remained 762 mm until
  the 1978–1982 widening.** Sources: National Taiwan Railways Corporation,
  *Railway route construction history*,
  `https://www.railway.gov.tw/tra-tip-web/adr/about-1-5`, PRIMARY, High
  confidence; and National Archives Administration, *East Line gauge-widening
  project*, `https://art.archives.gov.tw/tw/art/382-10997.html`, SECONDARY,
  Medium confidence. Original-language basis: `如臺鐵(1,067㎜)、阿里山森林鐵路
  (762mm)`; `一直維持762mm軌距`; and `東線鐵路拓寬計畫於1978年開工，1982年完工通車`.
  Reading the catalogue's unnumbered `窄軌` target as 1,067 mm is an inference
  from the operator's terminology, not a quoted segment-level engineering value.

## Conflicts between primary presentations

- No disagreement was found between the complete operator PDF and current operator HTML for this row. The historical project length and current TDX interval differ because they are different measurement layers, not because the operator tables disagree with each other.
- Taitung appears in more than one TDX line-family record. The EL record is used here because the operator record names the Eastern Line widening; the other family is not merged into this project measurement.

## Checked and failed

- **Complete segment-level numeric gauge conversion and historical geometry** —
  checked 2026-08-27 in the full operator route-history page, the National
  Archives East Line presentation and the six-page archival catalogue. The
  catalogue establishes a 20 June 1982 Ji'an widening milestone and describes
  five-fen track changing to narrow gauge, but no complete numeric target-gauge
  schedule or full alignment geometry was found.

- **Surveyed engineering boundary and detailed widening works** — checked 2026-08-26 in the complete construction-history PDF, complete current operator HTML and committed TDX line pull. No contract-level boundary, work package list or surveyed chainage was found.
- **Complete track-count transition and current as-built boundary** — checked 2026-08-26 in the operator history sources, current station pages and committed TDX pulls. The operator says widening but the checked row does not provide a complete project-wide track-count transition or current as-built survey.
- **Explanation for 150.9 km TDX versus 162.2 km operator difference** — checked 2026-08-26 in the operator PDF, current HTML and committed TDX line pull. The values are present, but no rounding, datum, route-definition or scope explanation was found.
- **Whether the other TDX line-family record should be combined with EL** — checked 2026-08-26 in the complete station-of-line pull. Taitung occurs in another line family, but the source does not establish that its other-family distance belongs to the Eastern Line widening and it was not merged.

## Stated gaps

An operator engineering file, contract/completion record, route diagram and
current as-built track plan would be needed to define the 162.2 km widening
boundary and relate it to the 150.9 km current EL interval. A complete numeric
segment-by-segment gauge schedule would also settle the inferred 1,067 mm target.
Until those are fetched and read, the project and current data layers remain
separate records.
