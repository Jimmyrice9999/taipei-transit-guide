# Taiwan Railways tunnel fire safety and evacuation — research findings, 27 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below records whether the underlying page was fetched and read in full, or only found via a search summary; the latter is not published as an established fact on the content page. No prior `docs/research/` file on this subject existed to check against.

This is a one-subject report with two distinct strands, kept separate
throughout: (1) fire-safety/evacuation standards and equipment for TRA's
long mountain tunnels (North Link Line, Sanyi–Houlong new alignment), where
primary material is thin; and (2) TRA's Taipei-area underground emergency
stopping stations, a different kind of infrastructure (urban underground,
not a long mountain tunnel) included as adjacent context and labelled as
such.

## What is established

- **No currently-in-force, formally adopted MOTC or Railway Bureau regulation specifically governing railway tunnel fire safety was found; a 2005 research report commissioned by the Railway Reconstruction Engineering Bureau (predecessor of today's Railway Bureau) explicitly states it is proposed reference material for a future standard, not itself an adopted one.** Source: Central Police University (principal investigator 簡賢文), commissioned research report, titleOriginal `鐵路隧道及地下場站防火避難設施及消防安全設備設置標準（規範）成果報告`, publisher 交通部鐵路改建工程局, `https://www.rb.gov.tw/public/upimgs/A01/5-6.pdf`, PRIMARY (a government-commissioned report about the government's own regulatory gap), read in full via a text-extraction proxy (`r.jina.ai`) after the fetch tool could not decode the raw PDF directly — flagged so page-number citations from it are treated with appropriate caution. Medium confidence. Original-language basis: `本研究成果將列為未來建立鐵路隧道及地下場站防火避難設施及消防安全設備設置標準之重要參考`; `本研究建議應突破建管與消防限制，由交通部主管機關對於其所管區域訂定專法`.
- **Independently, the National Fire Agency's general fire-safety-equipment regulation, read in full, contains no dedicated provision naming railway tunnels or underground railway stations as a distinct regulated category — corroborating the 2005 report's own stated rationale.** Source: `各類場所消防安全設備設置標準`, `https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=D0120029`, PRIMARY, Medium confidence (read via a summarised pass of the statute text, not a manual clause-by-clause read).
- **MOTC does publish a separate, distinct standard for elevated railway stations, and a separate highway-tunnel fire-safety standard under the Highway Bureau — neither is a railway-tunnel-specific standard, and this page does not conflate them.** The elevated-station standard's title was confirmed in an MOTC regulation-index listing but its content page could not be located; the highway-tunnel standard's own page was found but concerns road tunnels, out of TRA's scope.
- **The 2005 report's own proposed technical figures — not confirmed as adopted or as-built for any named TRA tunnel — include: 80 cm safety walkways on both sides; 40 W lighting fixtures every 15 m (citing NFPA 130's minimum lux); hydrant boxes staggered every 50 m; emergency phones marked every 45 m; cross-passages no more than 244 m apart (citing NFPA 130).** Same source, PRIMARY (as a proposal), Low-Medium confidence for applicability to any specific existing tunnel — both North Link's Xinguanyin Tunnel (opened 2003) and the Sanyi–Houlong new alignment's Sanyi Tunnel (opened 1998) predate this 2005 report, and no source found states these figures were applied as-built to either.
- **The Taiwan Transportation Safety Board's own investigation into the 2 April 2021 Qingshui Tunnel derailment (TRA Train 408, Taroko Express, North Link Line) found that the train's conductor did not fully understand the safety-equipment design and use affecting passenger survival — including emergency ventilation and emergency lighting — and that TRA's own "Conductor Operating Manual" did not include technical information on the quantity, function and location of train safety equipment; it recommended TRA review and strengthen emergency-response equipment, conductor documentation, and training across train types.** Source: Taiwan Transportation Safety Board, `0402臺鐵第408次車清水隧道重大鐵道事故調查報告`, `https://www.ttsb.gov.tw/1243/22450/29476/post`, PRIMARY, Medium-High confidence — the TTSB summary page was fetched directly, not the full multi-hundred-page report, so additional detail may exist unread. Original-language basis (Finding 26): `事故車車長未能完整瞭解太魯閣列車影響乘客生還機率之安全設備設計及使用，如緊急通風及緊急照明等`; `臺鐵局「車長乘務手冊」未包含列車安全設備之數量、功能與位置等技術資訊`.
- **These TTSB findings concern on-board train emergency equipment and crew knowledge of it, not the tunnel's own fixed infrastructure; no TTSB finding specifically about the tunnel's fixed evacuation infrastructure was found in the material accessible for this report.** Same source, PRIMARY, Medium confidence — the fuller TTSB report may address this and was not accessible.
- **TRA operates three underground emergency stopping stations in the Taipei underground section — Ximen, Fuxing and Guangfu — not used for regular passenger or freight service; Ximen's is described as equipped with ventilation, lighting and an emergency escape passage direct to ground level, a 300 m single-side platform, with a stated evacuation target of guiding passengers to ground level within 5 minutes.** Source: Liberty Times (自由時報), `台鐵公司揭密台北商圈地下 有3座神秘「緊急停靠站」`, `https://news.ltn.com.tw/news/life/breakingnews/5538411`, SECONDARY (attributing its claims to a TRA Facebook post that could not itself be located/fetched), Medium confidence, fetched in full. Independently corroborated by zh.wikipedia's Ximen emergency-stop-station article (SECONDARY, lead only, itself citing a PTS News article that was not independently fetched), which additionally confirms Ximen has been shared with Taiwan High Speed Rail as an emergency facility since 5 January 2007.

## Conflicts

- **Casualty count for the 2021 Qingshui Tunnel derailment.** Different figures appeared across search summaries not independently fetched in full: 49 dead/213 injured; 49 dead/309 injured; and a separately-seen 51 deaths in one outlet's rolling-update headline. None was confirmed against the TTSB's own stated figure in the material this page could access; all are recorded as found, none picked.

## Checked and failed

- **A TRA-authored 2008 report on South Link Line tunnel safety inspections at Jinlun and six other tunnels** (`https://www.railway.gov.tw/tra-tip-web/tip/file/3be93cbb-75a9-4631-841e-e7cfa068a5f5`), directly on-topic and PRIMARY — checked 2026-08-27, the fetch tool could not extract readable text from the PDF (binary/stream artifacts only) and was not retried via the proxy technique that worked for the 2005 report. A genuine unexploited lead.
- **A Railway Bureau PDF on tunnel engineering** (`https://www.rb.gov.tw/public/files/artsinfo/1500644352-0.pdf`) — checked 2026-08-27, same PDF-extraction failure, not retried via proxy.
- **The Taiwan Transportation Safety Board's full fact-finding report PDF** (linked from `https://www.ttsb.gov.tw/1133/1178/1179/30146/post`) — checked 2026-08-27, the fetch returned only the announcement page's summary, not the underlying full report.
- **MOTC's regulation-index page for the elevated-station fire standard** — checked 2026-08-27, fetched but returned an excerpt from a different, paginated part of the list; the target document's own content was not located. A second attempted URL returned HTTP 404.
- **168 Traffic Safety Portal article "Tunnel Guardian" (隧道守護神)** — checked 2026-08-27, fetched in full; confirmed this concerns Guanyinshan Highway Tunnel (觀音山隧道, under the Highway Bureau), not TRA's North Link Line's similarly-named Xinguanyin Tunnel (新觀音隧道) — a name-collision worth flagging explicitly so the two are not conflated.
- **CommonWealth Magazine's special report on the 0402 accident** — checked 2026-08-27, returned HTTP 403 Forbidden.
- **The Railway Bureau's regulation-index page** (`rb.gov.tw/thirdmenu.php?lmenuid=10&smenuid=351`) — checked 2026-08-27, returned blank content; could not confirm whether the Bureau's own regulation index currently lists any tunnel-specific fire standard.
- **A reported "每350公尺設一處人行避難連絡通道，每1400公尺設一處車行兼人行避難連絡通道" figure attributed to "TRA safety-facility standards" in a search summary** — checked 2026-08-27; a separate, confirmed source uses an identical 350 m figure for a highway tunnel (Guanyinshan), suggesting the search summary likely conflated a highway-tunnel figure with TRA. Not published as an established TRA figure.

## Stated gaps

Whether a currently-in-force, tunnel-specific MOTC or Railway Bureau
regulation exists in 2026 — distinct from the 2005 proposal, the elevated-
station standard and the highway-tunnel standard — is unresolved; MOTC's
full regulation index was not exhaustively searched. What fire/evacuation
equipment is actually installed, as-built, in North Link Line and
Sanyi–Houlong tunnels specifically is TBC — the 2005 report's figures are
proposed, not confirmed as-built, and the on-topic 2008 TRA South Link
tunnel inspection report could not be read (a genuine, specific lead for a
follow-up attempt via a PDF-extraction proxy). Whether the 2021 Qingshui
Tunnel accident led to any change in the tunnel's own fixed infrastructure,
as opposed to the confirmed changes to crew documentation and training, is
unresolved without the TTSB's full report. The exact casualty count for that
accident is an unresolved conflict. Whether the Taipei underground emergency
stations are governed by any standard connected to the long-tunnel
discussion above, or an entirely separate one, was not addressed by any
source read.
