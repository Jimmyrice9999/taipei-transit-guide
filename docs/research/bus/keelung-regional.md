# Keelung regional buses — research

**Corpus warning: `docs/research/` is leads only. Nothing here is citable until it has been checked against a primary source — see `.claude/skills/transit-research/SKILL.md`.**

**Checked 7 September 2026.** The TDX route response and municipal notices were fetched and read as full primary sources. The route-record measurements are retained as source-defined snapshots.

## What is established

- *Keelung city-bus route snapshot* (`https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/Keelung?$format=JSON`, PRIMARY, High confidence) contains 116 route records and 168 supplied `SubRoutes` variants in the committed 6 September 2026 pull. The source is a structured discovery response, not a timeless unique-route count.
- *Keelung Transfer Station information* (`https://www.klcg.gov.tw/tw/tourism/2624-287263.html`, PRIMARY, High confidence) describes two zones: the station building and the Zhongshan 1st Road roadside shelter. It names highway-oriented operators inside the building and route groups at the shelter, and says the South Station bus stop remains in service for specified 3xx, 4xx and 6xx groups. The page was updated 3 March 2025 and fetched 7 September 2026.
- *Keelung public-transport monthly pass sales points* (`https://www.klcg.gov.tw/tw/tourism/2624-301531.html`, PRIMARY, High confidence) describes TPASS 288 sales channels. At the listed railway-station and transfer-station machines it names EasyCard, iPASS and icash 2.0; it does not provide a complete bus fare or universal acceptance table.
- *2024 TDX participating-unit performance award* (`https://www.klcg.gov.tw/tw/klcg1/3242-299556.html`, PRIMARY, High confidence) records a bus-category special award for the city’s data-participating departments on 5 March 2025. It is not treated as a service-quality grade.
- *Route 506 trial detour notice* (`https://www.klcg.gov.tw/tw/tourism/2624-307208.html`, PRIMARY, Medium confidence) records a dated 1 October 2025 trial detour and links route PDFs. It is an example of service-change material, not a current all-route schedule.

Original-language evidence read from the municipal pages includes `分為「轉運站站體內」及「中山一路側候車亭」兩處站區`, `基隆火車站（南站）公車站位不會廢除`, and the TPASS media list `悠遊卡、一卡通及愛金卡`.

## Conflicts and boundaries

- The 116 TDX route-record count and 168 variant count are not reconciled with a permanent city-wide route total; they measure the API response and its nested variants.
- The transfer-station notice groups routes by zone but does not publish a bay-by-bay timetable or step-free access chain. No direct railway-platform interchange is inferred from the shared station name.
- The TDX award is a data-cooperation award, not evidence of a passenger-service grade.

## Checked and failed

- **Complete Keelung fare matrix** — checked 7 September 2026: the municipal TPASS notice lists pass-sales media and locations but no all-route cash/concession table.
- **Current transfer-station bay allocation and step-free route** — checked 7 September 2026: the full municipal notice supplies zone and route-group information but no current platform/facility inventory.
- **Complete current vehicle/operator roster** — checked 7 September 2026: the TDX snapshot and municipal notices do not publish a stable legal/operator/vehicle census for all records.

## Stated gaps

Route-level timetable refresh, current fare tables, terminal facility/accessibility documentation and a comparable public-service evaluation result would require additional current operator or municipal records. The page therefore keeps those fields TBC.
