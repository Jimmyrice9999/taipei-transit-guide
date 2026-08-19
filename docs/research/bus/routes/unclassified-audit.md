> **Corpus warning: `docs/research/` is leads only.** Nothing here may be
> published on its own authority. Every statement below was checked against the
> primary source named beside it; the file remains a research record, not a
> source.

# Former unclassified route audit — Run 50

**Run date: 2026-08-19.** The audit covered all 14 records that were
`unclassified` in the pre-run TDX snapshot. The full Taipei/New Taipei eBus
catalogue was fetched and read at
<https://ebus.gov.taipei/ebus?ct=tpc>; every route with a catalogue entry was
then checked against its exact `RouteSchedule?routeid=` page. The New Taipei
record was also checked against the New Taipei Department of Transportation
route-type data at
<https://data.ntpc.gov.tw/datasets/99fa69ea-24bf-4580-877a-998eb2cc42c2>.

## Classification decisions

| TDX identity | Full catalogue label read | Decision | Evidence |
|---|---|---|---|
| 藍海2線先導公車 / Lan Hai2 | New Taipei `捷運先導公車` | `new-taipei` | New Taipei's exact route-type dataset lists the route; TDX records `NewTaipei` authority/provider metadata. |
| 北士科1 / BS1 | `其他` | `special-shuttle` | Named destination service; the full schedule is separately filed under route ID `0162001500`. |
| 兒樂1號線 / TPE Child's Amuse. Park 1 | `其他` | `special-shuttle` | Attraction-specific service; the full schedule is separately filed under route ID `0162003000`. |
| 兒樂2號線 / TPE Child's Amuse. Park 2 | `其他` | `special-shuttle` | Attraction-specific service; the full schedule is separately filed under route ID `0162003100`. |
| 花季專車124 / 124 | `活動專車` | `special-shuttle` | The catalogue explicitly files it as an event shuttle under route ID `0171002000`. |
| 貓空右線 / Maokong Right | `其他` | `special-shuttle` | Named destination service; the full schedule is separately filed under route ID `0162002000`. |
| 貓空左線(指南宮) / Maokong Left (Zhinan Temple) | `其他` | `special-shuttle` | Named destination service; the full schedule is separately filed under route ID `0162002100`. |
| 貓空左線(動物園) / Maokong Left (Zoo) | `其他` | `special-shuttle` | Named destination service; the full schedule is separately filed under route ID `0162002200`. |
| 臺北觀光巴士紅線 / Taipei Sightseeing Bus Red route | `觀光巴士` | `special-shuttle` | Sightseeing is an explicit special-service label, not an MRT colour feeder; the full schedule is route ID `0162003400`. |
| 臺北觀光巴士藍線 / Taipei Sightseeing Bus Blue route | `觀光巴士` | `special-shuttle` | Sightseeing is an explicit special-service label, not an MRT colour feeder; the full schedule is route ID `0162003500`. |
| 1717 / 1717 | `一般公車` | `series-other` | It is an ordinary numbered identity, but 1717 is outside the site's named 0–99, 100s, 200s, 300s, 500s, 600s, 700s and 900s bands; it uses the existing review group rather than a one-off class. |
| 雙園巴士 / NEIHU GREEN BUS | `低地板` | `unclassified` | The full catalogue label describes vehicle accessibility, not a route-service class represented by the canonical group taxonomy; no source found a durable alternate class. |
| 景美-榮總(快) / Jingmei-T.V.G.H Express | `快速` | `unclassified` | The full catalogue identifies a rapid route, but the current taxonomy has no rapid group and this route has no numbered-series identity to file under. |
| 新莊-臺北車站 / Xinzhuang-Taipei Main Sta. | `跳蛙` | `unclassified` | The full catalogue identifies a jump-frog route, but the current taxonomy has no jump-frog group and this Taipei route is not a New Taipei route-type record. |

The first 11 decisions move records into existing canonical groups. The last
three remain a durable, explicitly labelled `unclassified` remainder because
their official labels describe three different classes that the current
taxonomy does not yet represent. No route was forced into a group merely to
make the remainder disappear.

## Sources read

- **TDX bus data** — `交通部運輸資料流通服務平臺`, Ministry of Transportation and Communications TDX, PRIMARY, High for route identity, municipality, operators, variants, stops, sequences and shapes: <https://tdx.transportdata.tw/>. The committed route records were read directly.
- **Taipei/New Taipei bus catalogue** — `大臺北公車`, Taipei City Government and New Taipei City Government, PRIMARY, High for the complete service headings and route links: <https://ebus.gov.taipei/ebus?ct=tpc>. The full HTML page was fetched, not a search snippet.
- **New Taipei MRT pioneer dataset** — `新北市公車路線說明及示意圖-捷運先導公車`, New Taipei City Department of Transportation / `新北市政府交通局`, PRIMARY, High for the exact `藍海2線先導公車` category record: <https://data.ntpc.gov.tw/datasets/99fa69ea-24bf-4580-877a-998eb2cc42c2>.
- **Exact eBus schedule pages** — PRIMARY, High, full pages fetched and read for route IDs `0162001500`, `0162003000`, `0162003100`, `0171002000`, `0162002000`, `0162002100`, `0162002200`, `0162003400`, `0162003500`, `0100171700`, `0152005400`, `0162000400` and `0163000000` at <https://ebus.gov.taipei/Route/RouteSchedule?routeid=> plus each ID.

## Checked and failed

- **A durable existing group for 低地板, 快速 or 跳蛙** — searched the complete eBus category list, the current bus group architecture, and the New Taipei transport-management route resources on 2026-08-19. The labels were confirmed, but no existing canonical group covers these three Taipei identities without misrepresenting the service class; they remain unclassified.
- **A dated history or operator-change source for the three remainder routes** — searched the full catalogue, each exact schedule page and the New Taipei transport-management resource index on 2026-08-19. No dated primary history was found; history and operator changes remain TBC.
- **A separate Taipei route-type data source for `雙園巴士`** — checked 2026-08-19: the full catalogue's `低地板` heading was found, but that source does not say that low-floor is the route's service purpose. No stronger classification source survived the check.

## Stated gaps

Route length, service span, headway and fare remain TBC in the TDX-backed fact
box where the exact schedule page did not expose a field to the normalized
overlay. Route history, corridor rationale, predecessors, renumberings, dated
operator changes and special eligibility remain TBC unless a dated primary
source is found. The pages publish the exact schedule values where the fetched
route page exposed them; no related route's values were copied.
