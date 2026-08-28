# TRA station-area land development — research findings, 28 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes,
> not sources. `docs/research/rail/tra.md` was checked and contains no
> matches for 開發/資產/聯合 — confirming this as a genuine gap. The
> cross-system page `content/rail/projects/tod-joint-development.md` was
> also checked and is entirely MRT/大眾捷運法-scoped with no mention of TRA
> — no overlap risk. A first pass by a read-only scout flagged TRA Corp's
> own "元年報告書" (first-year report) PDF as the single highest-value
> unread source, too large for its WebFetch tool (60MB, >10MB limit). The
> main session fetched it directly with `curl` and read it with
> `pdftotext`, per the documented PDF-extraction workaround — this
> superseded most of the scout's weaker secondary-sourced material below.

## What is established

### Legal basis: a two-track split created by 2024 corporatization

- **Railway Act (鐵路法) Article 21-1** authorises "national-operated railway institutions" (including TRA) to develop, dispose of or profit from state real estate under their management, exempt from the general National Property Act Article 28 restriction, with proceeds recycled to the operator and fast-track urban-plan rezoning available. Source: 鐵路法（民國111年）, zh.wikisource transcription, `https://zh.wikisource.org/wiki/鐵路法_(民國111年)`, kind: secondary (a transcription of a primary legal text, not independently checked against the Ministry of Justice's own law database, which could not be located under the expected URL — see Checked and failed), Confidence: Medium-High. Quoted: 「國營鐵路機構報經主管機關核准，得辦理其經管之國有不動產開發、處分或收益，不受國有財產法第二十八條規定之限制」.
- **The 國營臺灣鐵路股份有限公司設置條例 (TRA Corp Establishment Act)**, in force since the 1 January 2024 corporatization, splits TRA's land assets into two distinct institutional tracks — Article 9 governs assets TRA Corp itself operates on (capitalised investment, gift, subsidy, lease, or superficies right); Article 10 establishes a **separate MOTC-administered fund** holding "surplus" assets inherited from the old 臺灣鐵路管理局, used to retire that agency's debt, with development/disposal rules set by MOTC regulation and a specific floor-area-transfer provision for fund-held assets designated as monuments or historic buildings. Article 22 restates the Railway Act's fast-track rezoning mechanism specifically for TRA Corp. Source: 國營臺灣鐵路股份有限公司設置條例（民國114年）, zh.wikisource transcription, `https://zh.wikisource.org/wiki/國營臺灣鐵路股份有限公司設置條例_(民國114年)`, kind: secondary (same caveat), Confidence: Medium-High. Quoted (Art. 10): 「政府應移撥臺灣鐵路管理局及所屬機構…經管之適足資產，由交通部設立基金，處理原機構既存之短期債務。」
- **This two-track split is directly confirmed, independently, by TRA Corp's own first-year report**: subsidiary-business revenue figures are explicitly reported "excluding asset-disposal gains and debt-repayment-fund transfers" (「扣除資產處分收益及移撥償債基金影響」), confirming the fund exists as a real, active accounting boundary separate from TRA Corp's own asset-development revenue line. Source: 臺鐵公司元年報告書 (TRA Corp First-Year Report), PRIMARY, High confidence — see full detail below.

### TRA Corp's own first-year report (元年報告書) — the strongest source found

- Source: 臺鐵公司元年報告書, publisher 國營臺灣鐵路股份有限公司 (TRA Corp), PDF, `https://www.railway.gov.tw/tra-tip-web/tip/file/c9f6c839-1ca1-4fbb-b9fe-68dad673f227`, PRIMARY, High confidence. Fetched directly via `curl` (60MB) and extracted with `pdftotext -enc UTF-8` after the scout's WebFetch tool hit a 10MB size limit. Covers TRA Corp's first year of operation as a corporatised state enterprise, 1 January – 31 December 2024 (ROC 113年).
- **Corporatisation date confirmed directly**: 「臺鐵公司化自113年1月1日成立迄今已滿週歲」 — 1 January 2024.
- **Development methods, TRA Corp's own list**: beyond continuing urban renewal (都市更新) and Promotion of Private Participation (促參), TRA Corp states it added new land-development methods in its first year: joint construction development (合建開發), superficies right (設定地上權), participation in hazardous/old building reconstruction (參與危老重建), and MRT-style development (捷運開發). Quoted: 「公司元年資產開發除都市更新和促參外，新增土地開發辦理方式，如合建開發、設定地上權、參與危老重建或捷運開發等」.
- **Four new "highlight" sites in pre-tender planning** as of the report's writing: Keelung Guangming Road land (基隆光明路土地), Taipei Andong Street land (臺北安東街土地), Taichung Fuxing Road land (臺中復興路土地), Kaohsiung Zili Road land (高雄自立路土地) — each with a professional consultant engaged for legal/market analysis, financial modelling and development-method evaluation, awaiting TRA Corp board approval and MOTC ratification before a public tender is announced.
- **Six named, executed 2024 cases, with real dates and dollar figures**:
  - **A. Banqiao Station ROT renewal**: negotiated with 冠誠公司 (Guancheng Company) 21 March 2024, signed and notarised 28 May 2024, estimated annual revenue approximately NT$159 million.
  - **B. Xinzuoying Station ROT renewal**: negotiated with 冠友公司 (Guanyou Company) 8 May 2024, signed and notarised 26 June 2024, estimated annual revenue approximately NT$13.18 million.
  - **C. Nangang Marshalling Yard urban renewal (南港調車場都更案)**: main construction began 18 June 2024, estimated returned property value approximately NT$70.8 billion.
  - **D. TRA land participating in the Kaohsiung Gangshan RK1 MRT development case**: tender announced 28 June 2024, estimated returned property value approximately NT$770 million.
  - **E. Pingtung Station urban renewal**: tender announced 29 October 2024, estimated returned property value approximately NT$1.764 billion.
  - **F. By ROC year 122 (2033)**: the Taipei Twin Towers development (臺北雙子星開發案), the Nangang Marshalling Yard urban renewal, and the Nangang Commercial-3 public urban renewal (南港商三特公辦都更案) — all already-signed cases — are projected to complete progressively, with combined asset-development benefit projected to exceed NT$30 billion.
- **Ten priority stations/areas named for 2024–2025 development pursuit**: Kaohsiung Station, Fengshan Station, Qidu Station, Taichung Station, Pingtung Station, Yuanlin Station, Sankuaicuo Station, Hualien Minquan Road, Taipei Andong Street, and Lishui Street. Quoted: 「臺鐵公司預計於113年至114年優先推動10處車站及周邊地區的開發案件（如：高雄車站、鳳山車站、七堵車站、臺中車站、屏東車站、員林車站、三塊厝車站、花蓮民權路、臺北安東街及麗水街），透過土地開發活絡當地商機」. Note the list mixes station names with street/area names — consistent with "stations and surrounding areas," not all ten are literal station buildings.
- **Asset-development revenue, 2024**: NT$3.781 billion, up 8.5% year-on-year excluding disposal gains and debt-repayment-fund transfers — 17% of TRA Corp's total 2024 revenue (passenger NT$17.4 billion/77%, freight NT$437 million/2%, asset development NT$3.781 billion/17%, lunchbox and merchandise NT$863 million/4%).
- **Multi-year asset-development revenue series, NT$ billions, 2017–2024** (bar-chart figures, one attached footnote about a disposal/fund-transfer inclusion whose exact year attribution could not be pinned down precisely in extraction — treat the older years with slightly lower confidence than 2024's directly-quoted figure): 2017 (106年) 4.239; 2018 (107年) 5.005; 2019 (108年) 5.747; 2020 (109年) 5.075; 2021 (110年) 4.579; 2022 (111年) 4.818; 2023 (112年) 3.484; 2024 (113年) 3.781.

### TRA Corp's internal organisation for asset development

- **TRA Corp runs land/asset leasing and development through an internal division, 資產開發處 (Asset Development Division), with four regional branch offices** (Taipei: Keelung–Hsinchu; Taichung: Miaoli–Chiayi; Hualien: Yilan–Taitung; Kaohsiung: Tainan–Pingtung) — not a separate real-estate subsidiary company. Source: TRA Corp's own tender-announcement page, `https://www.railway.gov.tw/tra-tip-web/adr/rent-tender-1`, PRIMARY, High confidence, directly fetched. No evidence of a separate subsidiary was found anywhere — reported as not found, not confirmed absent.

### Weaker, secondary-sourced material (from the scout's research, not independently re-verified by the main session)

- **Taipei Station's ground-floor retail has run under a ROT (Reconstruction-Operate-Transfer) contract**: Breeze Group operated 2006 (opened October 2007) to 24 July 2026; a new ROT tender was then awarded to Shin Kong Mitsukoshi, running to 2041, with a 2-year-8-month renovation requirement. Source: zh.wikipedia, 臺北車站, SECONDARY, Medium confidence — underlying news citations not individually opened; not found in TRA's own current tender-award listing (may have rotated off after a retention period).
- **Kaohsiung Station**: the historic 1941 Imperial Crown-style station building was relocated 82.6m southeast in 2002 during undergrounding and restored as "高雄願景館" (Kaohsiung Vision Hall) by Kaohsiung City Government; a canopy structure "高雄綠之丘" opened 28 December 2024; an underground commercial development "高雄駅一番街" opened 18 July 2026. Source: zh.wikipedia, 高雄車站, SECONDARY, Medium confidence, not independently verified against a Kaohsiung City/TRA primary announcement.
- **A Kaohsiung City Government urban-renewal designation** of 11 station areas along a 15.37km corridor (Zuoying–Fengshan), ~300m bands, 812 hectares total — sourced to a 2019 Commercial Times article the scout could not fetch directly (HTTP 403); currently two links removed from any primary government statement. Confidence: Low. This is a city-government urban-renewal designation of surrounding blocks, not a TRA project itself.
- **Taichung Station**: the historic 1917 second-generation station is preserved as a National Historic Site adjacent to the new elevated station; a "new-style TRA station mall" branded "橘町三丁目" reportedly opened tender for commercial operators from 26 July [year in the citing footnote unclear, dated 2019-07-23] — this specific claim could not be verified (the cited invest-taichung.com.tw page returned no usable content). Confidence: Low/TBC.
- **Tainan**: the historic station building will be preserved as a national monument, becoming the underground station's western exit; sustained resident opposition (反台南鐵路東移自救會) from around 2016 included forced demolitions 2019–2021 and disputed compensation, with land acquisition (~407 households) completed by October 2020 after nine years of resistance. Main undergrounding project reported 85.25% complete as of May 2026, targeted for August 2026 completion. Source: zh.wikipedia, 臺南市區鐵路地下化計畫, SECONDARY, Medium confidence for the broad shape (well-documented public controversy), Low confidence for specific numbers — individual underlying news citations not opened.
- **A "交九用地" / Taipei Railway Workers' Union housing dispute lead** named in the original task brief was **not found** anywhere — the specific Wikipedia article title returned 404, and Taipei Station's and Taipei Depot's own Wikipedia articles, checked specifically for this content, contained nothing on it. Taipei Depot's own article describes only a preservation success story (retained in full, declared a national historic site March 2015, future National Railway Museum site) with no controversy content. Not published; recorded as an unconfirmed lead, not a confirmed absence.
- **A secondary (ETtoday news) claim** that four major TRA-legacy assets (Taipei Depot, Taipei Station Special Zones E1/E2, Kaohsiung Port Station) were named as moving into the MOTC debt-repayment fund, which assumed NT$169.911 billion of TRA's short-term debt (Executive Yuan approval 12 January 2024) — SECONDARY, Medium confidence, not independently verified against a Railway Bureau or Executive Yuan primary source (the Railway Bureau's domain could not be located by the scout; the main session did not independently re-check this specific claim, having found the first-year report as a stronger primary source for the general development-activity picture instead).

## Conflicts

- **The ETtoday article's NT$1.5 trillion 30-year revenue projection is described as spanning "all three properties," but four assets were named** (Taipei Depot, Special Zones E1 and E2, Kaohsiung Port Station). Unresolved — possibly an extraction artifact, possibly a genuine scoping distinct from the fourth asset. Not published as a specific figure; flagged as an open question if the underlying claim is used at all.
- **No conflict found between TRA Corp's own first-year report and any secondary source** — the report's figures were not independently duplicated or contradicted by any other source read.

## Checked and failed

- **`https://www.tra.gov.tw`** — DNS failure. TRA's operational domain remains `www.railway.gov.tw`. Checked 2026-08-28.
- **Ministry of Justice law database (`law.moj.gov.tw`)** — the correct `pcode` for the TRA Establishment Act could not be located; one guessed URL returned the wrong law (Highway Act) and a search-style URL returned HTTP 400. The statute text used above rests on zh.wikisource transcriptions, not the Ministry of Justice's own canonical database. Checked 2026-08-28.
- **Railway Bureau (交通部鐵道局) domain** — could not be located (`rbtra.gov.tw` and `rb.gov.tw` both failed to resolve in the scout's session); the ETtoday four-asset/debt-fund claim remains unverified against a Railway Bureau primary source. Checked 2026-08-28.
- **`https://www.chinatimes.com/newspapers/20190621001185-260204?chdtv`** (source for the Kaohsiung 11-station/812-hectare claim) — HTTP 403 Forbidden.
- **`https://www.invest-taichung.com.tw/`** (source for the Taichung 「橘町三丁目」 station-mall claim) — returned no usable page content.
- **zh.wikipedia articles titled `交九用地` and `臺北車站特定專用區`** — both 404, do not exist under those titles. Checked 2026-08-28.

## Stated gaps

- Site areas, specific developer names, and exact tender outcomes for the Kaohsiung, Taichung and Tainan station-area cases beyond what TRA Corp's own report names are TBC — none of the secondary heritage/redevelopment narratives above were independently corroborated against a primary source this run.
- Whether any TRA station-area development is a literal shared building (TRA station plus an independently-owned private tower, on the strict MRT joint-development model) rather than an ROT/superficies-right/urban-renewal arrangement on adjacent land is not established — the Taichung "橘町三丁目" lead is the closest candidate and is unverified.
- The exact scope of the ETtoday article's "all three properties" NT$1.5 trillion figure (which three of the four named assets) is unresolved.
- Whether a "交九用地" or Taipei Railway Workers' Union land dispute exists as described in the original task brief was not confirmed anywhere reachable this run.
