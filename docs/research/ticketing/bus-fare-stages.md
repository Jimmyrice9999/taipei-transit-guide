# Bus fare stages (段次) — research file

**⚠ Corpus warning.** `docs/research/` is leads, not sources. Nothing in this
file should be cited onward without following its own citation to the primary
underneath it. This file is new as of 20 August 2026, written from primary
fetches, not from the existing corpus.

---

## What is established

### The legal basis for segmented fares

1. **Taipei's joint-operation buses charge by fare segment (段), under a
   named city ordinance.** Taipei's Public Transport Office's own FAQ states,
   verbatim: 「本市聯營公車依據「臺北市公共汽車客運業營運管理自治條例」第11條
   規定採分段收費制，同時參採橋樑、河流等自然分界及重要轉運點（如華中橋、臺北
   車站等）訂定，並無長度及站數之強制要求，跨越分段點即加收1段票。」
   Source: [臺北市公共運輸處-常見問答-公車之分段點決定之依據為何?](https://www.pto.gov.taipei/News_Content.aspx?n=6B4D38874E971F4B&sms=87415A8B9CE81B16&s=9B757C0E9D8B0EA8),
   publisher 臺北市公共運輸處 (Taipei Public Transport Office), fetched in
   full 20 August 2026. **PRIMARY. Confidence: High** — the regulator's own
   FAQ, quoted verbatim, naming the specific ordinance article.

2. **The ordinance article itself, read directly.** Taipei's own law-search
   system gives Article 11 of 臺北市公共汽車客運業營運管理自治條例 as: 「公共
   汽車客運業營運票價，以同一票價為原則。但行駛里程較長者，得採分段或以里程
   計算。」This establishes the *legal permission* for segmented or
   distance-based pricing on longer routes; it does not itself name bridges,
   rivers, or specific stations — that practical siting criteria comes from
   the PTO's FAQ (claim 1) describing its own administrative practice, not
   from the ordinance text. The two are complementary, not duplicates: one
   is the enabling law, the other is the stated method of applying it.
   Source: [臺北市法規查詢系統 — 臺北市公共汽車客運業營運管理自治條例](https://laws.gov.taipei/Law/LawSearch/LawArticleContent/FL012562),
   publisher 臺北市政府 (Taipei City Government), fetched 20 August 2026.
   **PRIMARY. Confidence: High** — the city's own law database.

3. **A separate article of the same ordinance requires segment points to be
   posted at the stop itself.** Article 9, on stop signage requirements,
   fetched from the same law-search system, includes among the mandatory
   postings: 「停車站站牌，應揭示該站至訖站名稱、頭末班車時間、班距及收費分段
   點（緩衝區）。」— the terminus name, first/last bus times, headway, and the
   fare segment point (or buffer zone) must all be shown on the physical stop
   sign. Same source as claim 2. **PRIMARY. Confidence: High.**

4. **New Taipei's own city buses use the identical mechanic, in near-identical
   wording.** Taipei's own combined ebus portal — which also carries New
   Taipei routes — states, for both cities together: 「雙北市區公車係依路段
   分段收費，搭乘2段票(含)以上路線之車輛，若跨越分段點(或分段緩衝區)，應加收1
   段票。」Source: [大臺北公車 — 乘客須知/票價資訊](https://ebus.gov.taipei/RelatedLinks/TicketInfo),
   publisher 臺北市政府與新北市政府 (Taipei City Government and New Taipei
   City Government jointly), fetched in full 20 August 2026. **PRIMARY.
   Confidence: High.**

### Fare amounts

5. **Full fare is NT$15 per segment**, regardless of cash or stored-value
   card. Source: same ebus.gov.taipei page as claim 4: 「全票：每段次新臺幣15
   元」— quoted directly from the fetched page. **PRIMARY. Confidence: High.**

6. **Student fare is NT$15 cash, or NT$12 (an 8-fold/20%-off rate) with a
   student EasyCard.** Same page, quoted: 「學生優待票：投現15元/段，悠遊卡享8
   折優惠（每段12元）」. **PRIMARY. Confidence: High.**

7. **Concessionary fare — elderly, disabled/companion, and eligible
   children — is NT$8 per segment.** Same page, quoted: 「老殘孩童優待票：每段
   次新臺幣8元」. **PRIMARY. Confidence: High.**

8. **No on-board ticket sales and no change given.** Same page, quoted:
   「公車上不售票、不找零」, alongside 「採車上投現或使用電子票證刷卡雙軌並
   行」(cash or e-ticket, both accepted, no third option). **PRIMARY.
   Confidence: High.**

9. **Free travel for young children, capped per fare-paying adult.** Same
   page: children under 115cm ride free; children 115cm or taller but under 6
   with an ID document also ride free; one fare-paying passenger may bring up
   to 4 such free-riding children. **PRIMARY. Confidence: High.**

10. **The same NT$15/12/8 structure is independently stated on the operator
    association's own page**, not merely repeated from the government portal.
    Source: [臺北市公共汽車客運商業同業公會 — 臺北市公車聯營管理委員會](https://www.busgroup.org.tw/fare),
    publisher 臺北市公共汽車客運商業同業公會 (Taipei City Bus Operators'
    Trade Association), fetched in full 20 August 2026. **PRIMARY
    (operator-association trade body, publishing its own members' fare
    schedule). Confidence: High** — agreement between the regulator's portal
    and the operators' own association, not one source repeated.

### Segment counts, from the project's own committed data

11. **Among the 562 New Taipei route-service rows already committed to this
    project (`data/ntpc/bus-route-service.json`, fetched 19 August 2026 for
    the bus-route content work), published fare segment counts range from 1
    to 8**, distributed 128 routes at 1 segment, 77 at 2, 37 at 3, 13 at 4, 8
    at 5, 3 at 6, and 3 at 8 (plus 7 free routes and one row using a
    full-width "３" digit). This is a direct count over already-fetched
    primary data, not a new external source, and it corrects an earlier,
    unverified "routes are classified into one-, two-, three- or
    four-segment bands" claim that a search-engine summary produced during
    this same research session (see Checked and failed) — the real range, at
    least for New Taipei, runs past four segments. **PRIMARY (project's own
    committed TDX/NTPC data pull). Confidence: High for the New Taipei
    range**; Taipei-proper's own segment-count distribution is not
    established here — see Stated gaps.

### Where segment points actually fall

12. **The PTO's own FAQ names exactly two example locations**: 華中橋
    (Huazhong Bridge) and 臺北車站 (Taipei Main Station) — see claim 1's full
    quotation. It does not publish a complete list.

13. **zh.wikipedia's 臺北市市區公車 article gives a longer, uncited list of
    common segment-point locations**: 「常見的分段點位於士林、大直、臺北橋、
    臺北車站、中華路南北站、萬華、果菜市場、公館、松山等，通常是重要的交通樞
    紐，或是臺北縣市交界的橋頭」— Shilin, Dazhi, Taipei Bridge, Taipei Main
    Station, the Zhonghua Road north/south stops, Wanhua, the wholesale
    produce market, Gongguan, and Songshan. Fetched in full 20 August 2026;
    the article attaches no footnote to this sentence. Source:
    [臺北市市區公車 — 維基百科](https://zh.wikipedia.org/zh-tw/臺北市市區公車),
    **SECONDARY. Confidence: Medium** — plausible and consistent with the two
    confirmed examples (Taipei Main Station appears in both lists; Huazhong
    Bridge does not appear in the Wikipedia list, which is itself notable —
    see Conflicts), but the Wikipedia article does not cite a primary source
    for it, so it is carried as an unverified secondary account, not
    confirmed independently.

14. **New Taipei's own transport-management FAQ site was fetched but only
    returns a topic list (FAQ headings), not individual answer text**, on the
    URL reached this run. Source:
    [新北市政府交通局 — 公車常見問題](https://www.traffic.ntpc.gov.tw/home.jsp?id=bbf2545829bcdcbb),
    fetched 20 August 2026. **PRIMARY page, but the specific fare-segment
    answer text was not extractable from this fetch** — see Checked and
    failed.

### Zone-crossing worked example

15. **zh.wikipedia's 新北市市區公車 article gives a worked example of how
    crossing a segment buffer zone is counted**: 「A區 - B區 – C區（B區為分段
    點或分段緩衝區）→同一區內乘車、從A區乘車至B區或從B區乘車至C區皆為一段
    票；從A區乘車至C區則為兩段票（單段票價×2）」, and for a longer corridor:
    「A區 - B區 – C區 - D區 – E區（B區及D區為分段點或分段緩衝區）」. Source:
    [新北市市區公車 — 維基百科](https://zh.wikipedia.org/zh-tw/新北市市區公車),
    fetched in full 20 August 2026. **SECONDARY. Confidence: Medium** — this
    is an illustrative worked example on an encyclopedia page, not itself a
    government fare rule document, but it is consistent with, and does not
    contradict, the primary rule already confirmed in claim 4 (crossing a
    segment point/buffer zone adds one segment fare).

### Transfer discount and TPASS

16. **The MRT–bus transfer discount, and its explicit exclusion of
    distance-charged (里程收費) buses, is already sourced on this project's
    existing ticketing page** — `content/ticketing/guides/cards-passes-and-fares.md`,
    citing `trtc-faq-transfer` and `pto-bus-cards`: NT$8/NT$6/NT$4 by card
    type, within a 60-minute window, bidirectional, explicitly not extending
    to distance-charged buses or other modes. Not re-fetched this run; reused
    by reference rather than duplicated. **Confidence: High (already
    verified in a prior run).**

17. **The TPASS 基北北桃1200都會通 pass's own operating notice already
    confirms unlimited-ride, unlimited-distance coverage of segmented Taipei
    and New Taipei city buses** — same existing page, citing
    `megacity-notice`. This means the fare-stage system in this file has no
    separate cap or interaction rule under the pass: a pass holder simply
    does not pay per-segment at all while the pass is active. Not re-fetched
    this run. **Confidence: High (already verified in a prior run).**

18. **"Distance-charged" (里程收費) buses are a real, named exception category
    distinct from the segmented network**, per the existing transfer-discount
    FAQ title itself: 「何謂捷運與公車（不含里程收費公車）間雙向轉乘優惠？」—
    "excluding distance-charged buses" appears in the FAQ's own title. What
    specific routes fall into this category, and how their fares are
    structured, was not established this run — see Stated gaps.

## Conflicts

### Huazhong Bridge appears in the PTO's own example, but not in Wikipedia's list

The PTO FAQ (claim 1, primary) names 華中橋 (Huazhong Bridge) as one of its
two worked examples of a segment point. zh.wikipedia's list (claim 13,
secondary, nine locations) does not include Huazhong Bridge at all, despite
including several other bridges and river crossings implicitly (臺北橋 /
Taipei Bridge is listed). Both are published here rather than harmonised:
it is possible Huazhong Bridge no longer functions as a segment point at the
time the Wikipedia list was last edited, or that the Wikipedia list is
simply incomplete rather than current. No source read this run explains the
gap.

## Checked and failed

- **"Routes are classified into one-, two-, three- or four-segment bands"**
  — this claim came from a search-engine-generated summary (not a fetched
  primary page) early in this research session, run 20 August 2026. Checked
  against the project's own committed New Taipei fare data (claim 11) and
  found to be wrong for New Taipei: segment counts there run to 8. Not
  carried onto the content page as stated; replaced with the verified
  range from claim 11, with Taipei-proper's own range left as a stated gap.

- **The wulai.ntpc.gov.tw district-office PDF `收費標準(交通費).pdf`** —
  found via search on 20 August 2026, and its search-result title itself
  quotes the same core segmented-fare sentence as claim 4 verbatim, which is
  reassuring corroboration. But the PDF itself could not be read: it fetched
  as a compressed/embedded-font binary stream with no extractable text this
  run. Not used as a citation for any claim above; claim 4 instead rests on
  the ebus.gov.taipei HTML page, which was fetched and read in full.

- **New Taipei's own transport-office FAQ answer text for its bus-fare
  question** — the FAQ index page at traffic.ntpc.gov.tw (claim 14) was
  fetched, but returned only the list of FAQ question headings, not the
  individual answer bodies, on this run's fetch. The specific New Taipei
  answer text was not obtained; New Taipei's segmented-fare rule is instead
  sourced to the joint ebus.gov.taipei page (claim 4), which explicitly
  covers 雙北 (both cities) in one sentence.

- **A verified, government-sourced complete list of Taipei's own segment
  points** (beyond the two examples in claim 1) — searched and not found
  as a single published list from a primary source this run. The
  nine-location Wikipedia list (claim 13) is the best lead found, but it is
  secondary and self-describes as "common" (常見的) rather than complete or
  official.

- **Taipei-proper's own segment-count distribution** (as opposed to New
  Taipei's, which claim 11 establishes from committed data) — the
  committed TDX bus layer for Taipei's own colour/series/trunk groups does
  not carry a segment-count or fare field (this was already established in
  an earlier run's work on those route pages), and no separate Taipei-only
  fare-count dataset was fetched this run. Left as a stated gap rather than
  assumed to match New Taipei's range.

## Stated gaps

- **A complete, official list of Taipei's segment points.** Only two are
  confirmed directly from a primary source (Huazhong Bridge, Taipei Main
  Station); a longer secondary list exists but is unverified and itself
  admits to being a "common" rather than exhaustive account.
- **Taipei-proper's own fare-segment-count distribution** (1 to how many
  segments does a Taipei city route actually reach) — established here only
  for New Taipei, from already-committed project data.
- **What specifically defines a "distance-charged" (里程收費) bus route**,
  how many such routes exist, and how their fares are structured — named as
  an exception category in an existing FAQ title, but not itself researched
  this run.
- **New Taipei's own primary-sourced fare-segment explanation text** — the
  transport office's FAQ page did not yield extractable answer text this
  run; the joint ebus.gov.taipei page covers the same ground for both
  cities and is used instead.
