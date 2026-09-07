# Corpus warning

This is a research lead file. Production claims must remain traceable to the full primary sources listed below; a TDX record count is a dated data measurement, not a timeless network total.

## What is established

- The national TDX pull fetched the `Bus/Route/City/Taoyuan` response on 7 September 2026. Its Taoyuan jurisdiction object records 412 route records and 714 supplied `SubRoutes` variant records. The source is TDX’s JSON response at `https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/Taoyuan?$format=JSON`. PRIMARY, high confidence for the snapshot definition; the route and variant counts are calculated from the fetched response and committed national pull.
- The same pull attaches 15 distinct non-empty operator labels to Taoyuan route records. PRIMARY, medium confidence for this response scope; it is not a company registry.
- Taoyuan City Government’s full 106/5014 announcement says 106 Taoyuan–Nankan reached the end of its operating term and received no willing operator after repeated notices. It says the replacement began on 9 March 2026 with 5014, 5014A and 5014B. PRIMARY, high confidence. Original wording includes: 「原由指南客運營運之市區公車〖106桃園－南崁〗路線，因路線營運期限屆期，且依規定多次公告均無業者有意願經營」 and 「自115年3月9日(一)起以〖5014桃園－捷運山鼻站〗增開支線且增班為替代」.
- The same announcement publishes the route overlap analysis, weekday/holiday service counts, the combined 5014-group count, NT$18 first-eight-kilometre fare plus NT$2.58/km after that, the city-card basic-mileage benefit and TPASS applicability. PRIMARY, high confidence for that dated corridor notice; it does not establish a citywide fare matrix.
- The full Taoyuan city-government December 2025 “dual-bus transfer improvement plan” describes 桃小巴 as a small-bus policy for lower-demand/outlying or neighbourhood connections alongside trunk/circular buses. It also describes staged payment and transfer integration as a plan. PRIMARY, high confidence for the plan; not evidence that every planned phase is complete.

## Conflicts

- No numerical conflict is asserted between the TDX 412/714 counts and the city’s route notice. They measure different scopes: TDX response objects and supplied variants versus one corridor’s service schedule.
- The search result for the city’s January 2026 QR announcement says QR service entered a first phase for Taoyuan city buses, but the full official page returned HTTP 428 to the fetcher during this run. It is not used as production evidence. The accessible December 2025 city report supports only the earlier staged-plan wording.

## Checked and failed

- **Taoyuan QR article full fetch** — Full fetch of the city QR article returned HTTP 428 Precondition Required through the page fetcher and a connection-reset/short challenge response through curl on 2026-09-07. Search output was treated as a lead only; no current QR claim was promoted.
- **10-route 桃小巴 notice full fetch** — Full fetch of the city’s 10-route 桃小巴 notice timed out/reset on 2026-09-07. Search output was not used as a source. The page remains a lead for a future 桃小巴 route batch.
- **Complete Taoyuan fare and operator records** — No fetched source in this batch established a complete current Taoyuan fare matrix, full operator legal register, permanent route total, vehicle allocation or route-level reliability series on 2026-09-07; each remains TBC rather than being inferred from the TDX snapshot.

## Stated gaps

The static page still needs a direct full municipal or operator snapshot of current 桃小巴 routes, a dated current fare/payment matrix, and independent operator/terminal profiles. The city’s dynamic bus portal is linked for live lookup but is not treated as a static timetable source here.
