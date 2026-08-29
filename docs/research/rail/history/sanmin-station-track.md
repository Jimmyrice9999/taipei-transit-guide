# Taiwan Railways Sanmin Station Track Record — research findings, 27 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on row 119 of the operator's construction-history
table and its relationship to the current Sanmin and TDX records.

## What is established

- **The complete operator PDF records row 119 as Sanmin Station, a 2.1 km subject.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `119. 三民車站 Sanmin Station 2.1`.
- **The row names the Railway Reconstruction Bureau as constructor.** Source: the same full operator PDF, PRIMARY, High confidence because the constructor field was read beside row 119. Original-language basis: `鐵路改建工程局 Railway Reconstruction Bureau`.
- **The aligned chronology gives 2010 in the construction-year field and 2017 in the operation-start field.** Source: the same full operator PDF, PRIMARY, High confidence because the row order and page-nine continuation were read together. Original-language basis: `民國99年 2010 民國106年 2017` aligned to row 119.
- **The row describes the work as `增設股道`; the operator's English column reads `Add track`.** Source: the same full operator PDF, PRIMARY, High confidence because the Chinese explanation and operator English column were read together. Original-language basis: `增設股道`; the operator's English column reads `Add track`.
- **The current operator page identifies Sanmin as station 6120.** Source: National Taiwan Railways Corporation, *Sanmin Station information*, titleOriginal `三民車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6120`, PRIMARY, High confidence because the complete current station page was fetched. Original-language basis: `## 6120 三民`.
- **The committed TDX station pull contains current station 6120.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station records*, titleOriginal `臺灣鐵路車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `StationID: 6120`, `StationName: { En: Sanmin, Zh_tw: 三民 }`.
- **The committed TDX Eastern Main Line record places Sanmin at source sequence 51 and 241.9 km.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `LineID: EL`, `Sequence: 51`, `StationID: 6120`, `TraveledDistance: 241.9`.

## Scope and measurement boundaries

- The historical 2.1 km value is retained as the operator's row 119 station subject distance. The current TDX 241.9 km value is a travelled-distance field in the EL station-of-line record, not a source-defined replacement for the historical work boundary.
- The 2010/2017 values are reported as the operator's construction and operation-start table fields. The row does not provide a day-level track-addition or commissioning date.
- The `增設股道` / `Add track` explanation is reported as the operator's work description; the checked primary set does not expand it into a track count, design or detailed project scope.
- The current operator construction-history HTML was fetched and read; no matching Sanmin Station row or row 119 explanation was found. This is a source-coverage difference from the complete PDF.

## Conflicts

No direct numeric contradiction was found among the checked primaries. The
historical row's 2.1 km and the current WL field of 241.9 km belong to records
with different stated purposes and are not competing measurements of the same
boundary; they are not averaged or combined. The current operator HTML omits
the historical row, which is recorded as a coverage difference.

## Checked and failed

- **Exact track-addition or commissioning day** — checked 2026-08-27 in the full ten-page operator PDF, current operator history HTML and current station page. The row supplies only 2010 and 2017 year fields and no day.
- **Track count, type, geometry or detailed work scope** — checked 2026-08-27 in the full operator PDF, current operator history HTML and current station page. The row supplies only `增設股道` / `Add track`.
- **Surveyed boundary for the 2.1 km value** — checked 2026-08-27 in the full operator PDF and committed TDX station-of-line data. No source-defined endpoints or accounting boundary were found for row 119.
- **Mapping row 119's 2.1 km to TDX's 241.9 km EL field** — checked 2026-08-27 by comparing the historical row with the current station-of-line record. The source descriptions do not establish a common boundary or measurement purpose.
- **Current operator HTML reproduction of row 119** — checked 2026-08-27 in the full operator construction-history table. No matching Sanmin Station row or track-addition explanation was found.

## Stated gaps

An operator engineering archive with the track-addition plan, exact date, track
register, contract, completion record, asset boundary and source-defined
measurement endpoints would settle the missing details. Until then, row 119 is
kept as a historical 2.1 km Sanmin Station track subject with 2010/2017 fields
and the Add track wording, while current station 6120 and the EL position remain
a separate live-data layer.

## Update, 29 August 2026 — programme context, not a confirmed identity

- **TRA, `臺鐵電氣化沿革及歷年建設`**, `https://www.railway.gov.tw/tra-tip-web/adr/about-achievement-1`.
  PRIMARY. Confirms the Railway Reconstruction Bureau (row 119's named
  constructor) ran a Hualien-Taitung bottleneck double-tracking/full-line
  electrification programme, ~155.46 km/30 stations, construction from
  4 December 2010 — same year as row 119's construction field. Does not
  name Sanmin or row 119.
- **zh.wikipedia, `花東鐵路電氣化`**, SECONDARY. Names Ruisui-Sanmin as one
  of four bottleneck double-track sections; states the west main line
  opened via a new Ziqiang Tunnel on 26 September 2017 (matches row 119's
  2017 field at year level); gives a NT$25.429 billion whole-programme
  cost (matches the TRA-sourced figure order of magnitude); gives Executive
  Yuan approval as 13 March 2009, one year later than TRA's own
  18 Feb/13 Mar 2008 dates — a genuine primary-vs-secondary conflict, not
  resolved.
- **zh.wikipedia, `自強隧道 (花蓮縣)`**, SECONDARY. New double-track tunnel
  between Wuhe Signal Station and Sanmin, built because the original
  single-track tunnel could not fit a second track or electrification
  clearance; reported length 2,676 m — does not match row 119's 2.1 km.
- **zh.wikipedia, `舞鶴號誌站`**, SECONDARY. Wuhe Signal Station (train-
  crossing point only, no passenger service) formally abolished the same
  day, 26 September 2017, when the new double track opened — explaining
  why a crossing point was needed on the old single track and why it
  became unnecessary.
- **Not established**: any source explicitly naming row 119 as this tunnel
  project. The circumstantial match (year, agency, project family) is
  reported on the content page as a possible but unconfirmed connection,
  not a stated identity. The 2.1 km vs 2,676 m discrepancy is unresolved.

### Corrected mid-research error

An initial automated fetch summary of the `臺東線` Wikipedia article wrongly
attributed "the line's first double-tracked section" to Ruisui-Sanmin; a
stricter re-fetch showed that phrase actually describes a different, 2007
Yuli-Dongli section. Not used on the content page.

### Checked and failed (this pass)

- `https://www.rrb.gov.tw/showpage.php?lmenuid=3&smenuid=84` (Railway Bureau
  page naming the four bottleneck sections) — returned empty content,
  likely JS-rendered.
- `https://www.rrb.gov.tw/` and `http://www.rrb.gov.tw/02110.aspx?lan=ch&id=612`
  (the Railway Reconstruction Bureau's own 2017-09-25 switchover press
  release — would have been the strongest possible primary link to row
  119) — both `ECONNREFUSED`; the domain appears dead, consistent with the
  agency's 2018 dissolution.
- Apple Daily article on the same 2017 switchover — certificate expired.
- TRA construction-history PDF re-extraction for row 119's cell layout —
  WebFetch could not parse the PDF binary this pass; relying on the
  existing research file's prior extraction, not independently re-verified
  this pass.
- 自由時報/聯合報/中央社/PTT searches — not run; WebSearch budget exhausted
  after two calls this pass.
