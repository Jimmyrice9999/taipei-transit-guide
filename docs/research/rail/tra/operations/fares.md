# Taiwan Railways Administration (TRA) fare and ticket-type history — research findings, 28 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. No existing research file for TRA addressed fare structure or ticket types before this report. `content/rail/tra/operations/` already has ridership and timetable pages but no fare page.

This is a one-subject report on TRA's ticket types, group/charter pricing
and a dated 2026 free-seating policy change, drawing on the operator's own
fare-and-booking page, fetched and parsed directly from raw HTML.

## What is established

- **TRA's own fare-and-booking page states single tickets come in four categories — full fare (全票), child fare (孩童票), senior fare (敬老票) and disability fare (愛心票) — with a separate simultaneous round-trip booking option, each direction charged at the single-ticket rate; the page does not itself state a base per-km NT$ rate for these ordinary single tickets, instead linking to a separate "票價/里程試算" (fare/distance calculator) tool.** Source: Taiwan Railways Administration (國營臺灣鐵路股份有限公司), `票價與訂票流程` / `車票類型與價格` (Fare and Booking Process / Ticket Types and Prices — the same page under two different menu labels), `https://www.railway.gov.tw/tra-tip-web/tip/tip00C/tipC21/view?proCode=8ae4cac3756b7b4101757271e5f71703&subCode=8ae4cac3756b7b41017572737d1a1704`, PRIMARY, High confidence, fetched and read in full (raw HTML parsed directly), page dated "last updated" 7 August 2026 in its own text and generated 27 August 2026 per its footer timestamp. Original-language basis: `單程票 全票、孩童票、敬老票、愛心票，本公司另有提供去、回行程同時訂、取票功能，各按單程票全價計算`.
- **A passenger boarding without a ticket and voluntarily requesting to pay onboard is charged the fare for the travelled segment; a passenger who does not have a valid reason, or only requests payment when checked, is charged that fare plus a 50% surcharge on the travelled segment.** Same source, PRIMARY, High confidence. Original-language basis: `無票旅客上車後主動向列車長或查票員申請補票者，補收起程站至到達站間應付票價，如無正當理由或於驗票時始聲請補票者，除補收應收票價外並加收已乘區間五成票價`.
- **From 1 July 2026 (乘車日115年7月1日生效), TRA implements a free-seating (自由座) policy specifically on West Coast Line EMU3000-type trains (excluding through-service trains), naming exact train numbers and specifying which cars are designated free-seating — 9 cars on direct/express services and 9–11 cars on non-direct services, with adult free-seating fare set at 95% of the full Tzu-Chiang (自強號) single fare; other ticket categories (child/senior/disability) do not receive this 95% discount.** Same source, PRIMARY, High confidence. Original-language basis: `實施班次：西部幹線EMU3000型（不含跨線列車）...乘車日115年7月1日生效...票價：成人為自強號全票票價95折（其餘票種不適用95折優惠）`.
- **Non-reserved-seat group tickets are priced at 80% of the single fare for groups of 20–49 people, and at 65% for groups of 50 or more, with the total rounded; reserved-seat ("all-class") group tickets require 10 or more people and are priced at the full single fare multiplied by group size, with no discount at all.** Same source, PRIMARY, High confidence. Original-language basis: `非對號車團體...票價計算：團體人數20人至49人，按乘車區間單程票價八折，50人以上按六五折減價尾數四捨五入後乘以團體人數即為團體票總價` and `各級對號列車團體...票價計算：團體人數10人以上，按乘車區間單程全價票價乘以團體人數，即為團體票總價（無折扣）`.
- **A charter-train ("專列") is priced by a stated formula — car-class per-km rate × travelled distance (rounded) × the chartered car's passenger capacity — with a published five-tier distance-based per-km rate table, in NT$ per person per km, for three train classes.** Same source, PRIMARY, High confidence, the table transcribed directly from the page (values in NT$):
  | Class | <50 km | 50.1–100 km | 100.1–200 km | 200.1–300 km | 300.1 km+ |
  |---|---|---|---|---|---|
  | 區間 (Local) | 2.18 | 1.92 | 1.81 | 1.53 | 1.42 |
  | 莒光 (Chu-Kuang) | 2.61 | 2.30 | 2.17 | 1.83 | 1.70 |
  | 自強 (Tzu-Chiang) | 3.39 | 2.98 | 2.81 | 2.37 | 2.20 |

  Original-language basis: `公式：總票價= { 車種費率 x 乘車里程(尾數四捨五入) }（即為乘車區間全票票價）x 定員人數` and the table itself, headed `里程遞遠遞減費率(每人/公里)`. **This table is explicitly published for charter-train pricing specifically — the page does not state that these are the same per-km rates used to calculate an ordinary single-ticket fare, and this report does not assume that equivalence.**
- **Charter-train capacity and discount rules vary by rolling-stock type: Puyuma/Taroko trains (372–376 seats, 8 cars) and Tzu-Chiang 3000-type trains (538 seats, 12 cars) cannot have their car count increased and require a minimum 100 km charter distance; Puyuma/Taroko charters additionally receive a distance-based round-trip discount — 85% for a 5-day round-trip or island-circuit total exceeding 600 km, 80% for one exceeding 800 km, stated as effective from 1 January 2026 (自乘車日115.1.1起適用).** Same source, PRIMARY, High confidence. Original-language basis: `普悠瑪/太魯閣 372/376人(共8節車廂) 不可增加 100km 每一往返或環島計算，5日內超過600公里以上85折，800公里以上8折優待(需網路申請，自乘車日115.1.1起適用)`.
- **A "living-room car" (客廳車, a luxury lounge carriage), currently marked as suspended from service on the page, is priced — when previously available — at 52 Chu-Kuang single full fares for the chartered segment plus a NT$300 service-staff fee (revised to NT$380 effective 23 June 2025, 114年6月23日起適用), with any distance under 100 km charged as if 100 km, and seating limited to 30 passengers.** Same source, PRIMARY, High confidence. Original-language basis: `客廳車廂(目前暫停服務)...票價計算：按包用區間之52張莒光號單程全票票價+300元(一名服務人員費用)計收...114年6月23日起適用:按包用區間之52張莒光號單程全票票價+380元`.
- **The same page's navigation lists several fare/pass products this report did not investigate in detail: a season pass (定期票), a platform ticket (月台票), an automatic-ticketing stored-value card, a university-student discount purchase scheme, a "TR-PASS" tourist rail pass, welfare-card points riding (社福卡點數乘車), and nine named regional commuter "living circle" (生活圈) TPASS-style monthly passes covering different multi-county groupings across Taiwan (基北北桃, 桃竹竹苗, 中彰投苗, 雲林, 嘉義, 嘉嘉南高屏, 北宜, 花蓮, 臺東).** Same source, PRIMARY, High confidence for the existence and naming of these products; their prices and rules were not read this session.

## Conflicts

None found — no second source addressing any of the above was located
this session.

## Checked and failed

- **A base per-km NT$ rate, or a specific fare figure, for an ordinary single ticket on any named route** — checked 2026-08-28; the fetched page states single-ticket pricing only by reference to a separate fare/distance calculator tool ("票價/里程試算"), which was not itself fetched this session. The charter-train per-km rate table found on this page is explicitly scoped to charter pricing and is not treated as equivalent to the ordinary single-ticket rate without a source stating that connection.
- **Prices or rules for the season pass, platform ticket, stored-value card, university-student scheme, TR-PASS, welfare-card points riding, or any of the nine regional TPASS-style passes** — checked 2026-08-28; each is named in the page's navigation but this session did not follow through to its own dedicated sub-page.
- **Search-engine queries for TRA fare-change history or news coverage** — checked 2026-08-28; the session's web-search budget was exhausted before this task could issue a query.

## Stated gaps

No base single-ticket fare figure, in NT$ or per-km, is established by any
source read this session — the operator's own page defers to an unfetched
fare-calculator tool. Prices for the season pass, platform ticket,
TR-PASS, university-student discount, welfare-card points riding, and all
nine regional TPASS-style passes are TBC, named but not detailed by this
report. Whether the charter-train per-km rate table bears any defined
relationship to ordinary single-ticket pricing is not stated by the source
and is not assumed here.
