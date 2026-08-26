# Taiwan Railways Hualien–Heping Construction Record — research findings, 26 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on the operator's Hualien–Heping construction
record, its constructor attribution and the current TDX endpoint fields.

## What is established

- **The complete operator construction-history PDF records Hualien–Heping at 39.4 km.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `55.花蓮─和平 Hualien-Heping 39.4 臺灣鐵路管理局 TRA`.
- **That PDF gives the project 1978 as construction year and 1979 as operation-start year.** Source: the same full operator PDF, PRIMARY, High confidence because the row and aligned chronology were read together. Original-language basis: `民國 67 年 1978 民國 68 年 1979` aligned with row 55.
- **The PDF names Taiwan Railways Administration as constructor.** Source: the same full operator PDF, PRIMARY, High confidence because the constructor column was read in the complete table. Original-language basis: `臺灣鐵路管理局 TRA`.
- **The current operator HTML repeats 39.4 km and 1978/1979 but names Taiwan Provincial Government as constructor.** Source: National Taiwan Railways Corporation, *Railway route construction history*, titleOriginal `臺灣鐵路路線建造史`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/adr/about-1-5`, PRIMARY, High confidence because the complete current table was fetched and read. Original-language basis: `31.花蓮 - 和平 | 39.4 | 臺灣省政府 | 民國六八年 1979 | 民國六七年 1978`.
- **The current operator station pages identify Hualien as 7000 and Heping as 7060.** Sources: National Taiwan Railways Corporation, *Hualien Station information*, titleOriginal `花蓮車站資訊`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7000`, and *Heping Station information*, titleOriginal `和平車站資訊`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7060`, PRIMARY, High confidence because both full current station pages were fetched and read. Original-language basis: `## 7000 花蓮` and `## 7060 和平`.
- **The committed TDX station-of-line pull places Heping at source sequence 31 with travelled distance 130.1 km and Hualien at source sequence 37 with travelled distance 169.7 km; the guide presents these as positions 32 and 38 and calculates a 39.6 km difference.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher `交通部運輸資料流通服務平台`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the complete committed pull was scanned. Original-language/data basis: `Sequence: 31, StationID: 7060, StationName: 和平, TraveledDistance: 130.1` and `Sequence: 37, StationID: 7000, StationName: 花蓮, TraveledDistance: 169.7`.
- **The committed TDX station pull contains both current passenger-station records.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station records*, titleOriginal `臺灣鐵路車站資料`, publisher `交通部運輸資料流通服務平台`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the complete committed pull was scanned. Original-language/data basis: `StationID: 7000 ... StationName: {En: Hualien, Zh_tw: 花蓮}` and `StationID: 7060 ... StationName: {En: Heping, Zh_tw: 和平}`.

## Scope and measurement boundaries

- The 39.4 km value and 1978/1979 chronology are stable across the two operator presentations, but the constructor attribution is not.
- The 39.6 km TDX difference is a subtraction of current supplied travelled-distance fields. It is not silently substituted for the historical construction length.
- Current station IDs identify current passenger records, not the surveyed historical boundary or the as-built track count.

## Conflicts between primary presentations

- The complete operator PDF names TRA as constructor, while the current operator HTML names Taiwan Provincial Government. Both retain 39.4 km and 1978/1979.
- The historical 39.4 km construction record and the current 39.6 km TDX endpoint-field difference are different measurement layers. The source material does not explain whether the 0.2 km difference is rounding, datum, route definition or another boundary.

## Checked and failed

- **Reason for the constructor attribution difference** — checked 2026-08-26 in the complete construction-history PDF and complete current operator HTML table. No explanation was found for whether it is an attribution change, responsibility transfer, table revision or a distinction between construction and operating authority.
- **Surveyed engineering boundary and chainage** — checked 2026-08-26 in the operator PDF, current operator HTML and committed TDX line pull. No surveyed boundary or contract-level chainage was found.
- **Current as-built track count and service boundary** — checked 2026-08-26 in the operator history table, current Hualien and Heping station pages and committed TDX pulls. The sources identify current stations and line fields but do not provide a complete current track-count survey or project-specific service boundary.
- **Explanation for the 39.6 km TDX versus 39.4 km operator difference** — checked 2026-08-26 in the operator PDF and committed TDX line pull. The sources provide the values but do not identify the measurement or rounding rule that accounts for the 0.2 km difference.

## Stated gaps

An operator engineering file, contract/completion record or historical route
diagram would be needed to explain the constructor attribution and define the
39.4 km boundary. A current as-built and service record would be needed to say
more about present physical use. Until those are fetched and read, the two
constructor values, the operator length and the TDX interval remain separate
records.
