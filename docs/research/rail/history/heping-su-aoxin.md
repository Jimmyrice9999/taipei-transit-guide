# Taiwan Railways Heping–Su'aoxin Construction Record — research findings, 26 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on the operator's Heping–Su'aoxin construction
record, its constructor attribution and the current TDX endpoint fields.

## What is established

- **The complete operator construction-history PDF records Heping–Su'aoxin Station at 39.8 km.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `56.和平─蘇澳新站 Heping-Su'aoxin Station 39.8 臺灣鐵路管理局 TRA`.
- **That PDF gives the project 1973 as construction year and 1980 as operation-start year.** Source: the same full operator PDF, PRIMARY, High confidence because the row and aligned chronology were read together. Original-language basis: `民國 62 年 1973 民國 69 年 1980` aligned with row 56.
- **The PDF names Taiwan Railways Administration as constructor.** Source: the same full operator PDF, PRIMARY, High confidence because the constructor column was read in the complete table. Original-language basis: `臺灣鐵路管理局 TRA`.
- **The current operator HTML repeats 39.8 km and 1973/1980 but names Taiwan Provincial Government as constructor.** Source: National Taiwan Railways Corporation, *Railway route construction history*, titleOriginal `臺灣鐵路路線建造史`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/adr/about-1-5`, PRIMARY, High confidence because the complete current table was fetched and read. Original-language basis: `32.和平 - 蘇澳新站 | 39.8 | 臺灣省政府 | 民國六九年 1980 | 民國六二年 1973`.
- **The current operator station pages identify Heping as 7060 and Su'aoxin as 7130.** Sources: National Taiwan Railways Corporation, *Heping Station information*, titleOriginal `和平車站資訊`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7060`, and *Su'aoxin Station information*, titleOriginal `蘇澳新車站資訊`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7130`, PRIMARY, High confidence because both full current station pages were fetched and read. Original-language basis: `## 7060 和平` and `## 7130 蘇澳新`.
- **The committed TDX station-of-line pull places Su'aoxin at source sequence 25 with travelled distance 90.2 km and Heping at source sequence 31 with travelled distance 130.1 km; the guide presents these as positions 26 and 32 and calculates a 39.9 km difference.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher `交通部運輸資料流通服務平台`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the complete committed pull was scanned. Original-language/data basis: `Sequence: 25, StationID: 7130, StationName: 蘇澳新, TraveledDistance: 90.2` and `Sequence: 31, StationID: 7060, StationName: 和平, TraveledDistance: 130.1`.
- **The committed TDX station pull contains both current passenger-station records.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station records*, titleOriginal `臺灣鐵路車站資料`, publisher `交通部運輸資料流通服務平台`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the complete committed pull was scanned. Original-language/data basis: `StationID: 7130 ... StationName: {En: Su'aoxin, Zh_tw: 蘇澳新}` and `StationID: 7060 ... StationName: {En: Heping, Zh_tw: 和平}`.

## Scope and measurement boundaries

- The 39.8 km value and 1973/1980 chronology are stable across the two operator presentations, but the constructor attribution is not.
- The 39.9 km TDX difference is a subtraction of current supplied travelled-distance fields. It is not silently substituted for the historical construction length.
- Current station IDs identify current passenger records, not the surveyed historical boundary or the as-built track count.

## Conflicts between primary presentations

- The complete operator PDF names TRA as constructor, while the current operator HTML names Taiwan Provincial Government. Both retain 39.8 km and 1973/1980.
- The historical 39.8 km construction record and the current 39.9 km TDX endpoint-field difference are different measurement layers. The source material does not explain whether the 0.1 km difference is rounding, datum, route definition or another boundary.

## Checked and failed

- **Reason for the constructor attribution difference** — checked 2026-08-26 in the complete construction-history PDF and complete current operator HTML table. No explanation was found for whether it is an attribution change, responsibility transfer, table revision or a distinction between construction and operating authority.
- **Surveyed engineering boundary and chainage** — checked 2026-08-26 in the operator PDF, current operator HTML and committed TDX line pull. No surveyed boundary or contract-level chainage was found.
- **Current as-built track count and service boundary** — checked 2026-08-26 in the operator history table, current Heping and Su'aoxin station pages and committed TDX pulls. The sources identify current stations and line fields but do not provide a complete current track-count survey or project-specific service boundary.
- **Explanation for the 39.9 km TDX versus 39.8 km operator difference** — checked 2026-08-26 in the operator PDF and committed TDX line pull. The sources provide the values but do not identify the measurement or rounding rule that accounts for the 0.1 km difference.

## Stated gaps

An operator engineering file, contract/completion record or historical route
diagram would be needed to explain the constructor attribution and define the
39.8 km boundary. A current as-built and service record would be needed to say
more about present physical use. Until those are fetched and read, the two
constructor values, the operator length and the TDX interval remain separate
records.
