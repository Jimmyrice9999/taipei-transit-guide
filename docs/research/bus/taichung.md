# Corpus warning

This is a research file, not a source. The existing corpus is a lead index only. Every claim below was checked against a full Taichung City Government page or the full official CSV, or is explicitly marked as a derived value, conflict, gap or checked failure.

## What is established

### City-bus dataset and scope

- **Dataset scope** — Source: [Taichung city-bus route and stop information dataset](https://data.gov.tw/dataset/83748), original title `臺中市市區公車路線站點資訊`; **PRIMARY**, High confidence because the full Government Data Open Platform page was fetched on 2026-08-25 and identifies the provider as 臺中市政府交通局. **Original-language evidence:** `該資料集為臺中市市區公車各路線路線圖`.
- **Dataset freshness warning** — Source: the same full dataset page; **PRIMARY**, High confidence because the page states that aggregation/publication may differ from actual operation and directs readers to the bureau's latest announcement. **Original-language evidence:** `該資料集彙整、發布時間難免與各公車實際運行情形有落差，最新詳細乘車資訊仍請依本局官網公告為準。`
- **Published fields** — Source: the same full dataset page and its linked CSV; **PRIMARY**, High confidence because the field list is displayed on the dataset page and the full CSV header was read. **Original-language evidence:** `機關代碼、電話/市話、序號、公車業者、路線、路線說明、連結、去程、回程、備註`.
- **Metadata timing and update cadence** — Source: the full dataset page; **PRIMARY**, High confidence. The page gives metadata update time `2026-06-09 09:10` and update frequency `不定期更新`.

### Current route snapshot

- **Route and operator counts** — Source: [Taichung city-bus route-map CSV](https://newdatacenter.taichung.gov.tw/api/v1/no-auth/resource.download?rid=20c2e4cc-49bf-45d5-a880-714c7c66eed6), original title `taichung_bus_maps_2026.CSV`; **PRIMARY**, High confidence for the 2026-08-25 retrieval. The full CSV contained 392 non-empty route records and 23 distinct raw `公車業者` labels.
- **Direction and stop counts** — Source: the same full CSV; **PRIMARY**, High confidence for the derivation. Each of the 392 records supplied non-empty `去程` and `回程` stop strings, giving 784 direction records and 37,138 ordered stop names after splitting the source's `、` separator. These are data-layer counts, not an official published route total or stop total.
- **Route record shape** — Source: the same full CSV; **PRIMARY**, High confidence because the first records and all fields were read. The CSV keeps route descriptions, operator labels, route-map URLs and the complete outbound/return stop text; it contains no departure-time or numeric fare column.
- **Terminal derivation** — Source: the same full CSV; **PRIMARY**, High confidence as a documented transformation. The data layer records the first and last stop in each source direction string as a derived boundary summary and preserves the raw string beside it; this is not a claim that every boundary is a designated terminal facility.

### Fares and live departures

- **Network fare rules** — Source: [Taichung bus real-time information](https://citybus.taichung.gov.tw/ebus), original title `台中公車即時動態資訊`; **PRIMARY**, High confidence because the full official page was fetched. The page states the resident Double Ten rule, non-resident cash/e-card starting fares, senior/love-card point rule and the EasyCard, iPASS and icash2.0 media.
- **Departure-time boundary** — Source: the same full citybus page; **PRIMARY**, High confidence. **Original-language evidence:** `因應道路狀況及民眾上下車時間影響，發車時刻請查詢公車動態資訊或業者網站。` The route-map CSV is therefore not used to assert route frequencies.
- **Operator links** — Source: the same full citybus page; **PRIMARY**, Medium confidence for link coverage rather than company enumeration because the page presents a visible operator-link list, not a registry. The page visibly links Taichung Bus, Ubus, Giant, Chuan Hang, Fengyuan, Southeast, Miaoli, Central Taiwan, Ho Hsin, Zhonglu, Zongda, Kuo-Kuang, Jianming and RY Transportation labels.

### 小黃公車

- **Fixed departure and reservation model** — Source: [Taichung 小黃公車](https://www.traffic.taichung.gov.tw/content/index.asp?Parser=1%2C7%2C505%2C52), original title `臺中市小黃公車`; **PRIMARY**, High confidence because the full page was fetched on 2026-08-25. **Original-language evidence:** `「小黃公車」有固定發車時間，但因計程車只能載運3到4人，請乘客務必事先預約搭車`.
- **Route count and names** — Source: the same full page; **PRIMARY**, High confidence. The page lists 黃1 through 黃26 as 26 named routes, with two reservation phone groups and hours.
- **Stop behaviour** — Source: the same full page; **PRIMARY**, High confidence. Overlapping city-bus sections use city-bus stops; sections without city-bus stops use hail-and-ride.
- **Route 22 change** — Source: the same full page; **PRIMARY**, High confidence. The page states that 黃22 no longer stops at `神岡(神林路)` from 2025-12-19 for road-safety reasons and gives a last-change timestamp of 2025-12-17 09:43.

### Current service-change context

- **Static data versus a current notice** — Source: [Taichung bus service-adjustment notice](https://www.traffic.taichung.gov.tw/news/index-1.asp?Parser=9%2C4%2C20%2C%2C%2C%2C21415), original title `臺中市政府交通局-公告資訊-最新消息`; **PRIMARY**, High confidence because the full notice was fetched. The 2026-06-12 notice announces a one-month trial adjustment from 2026-06-15 for routes 91, 206, 208, 250, 258, 260, 263, 264, 265, 269, 270, 271, 277, 286 and 850, and directs passengers to the live bus site and app.

## Conflicts

1. **Static route-map scope versus live departure scope:** the dataset page says its compiled route maps can lag actual operation and directs readers to bureau announcements, while the citybus page says road conditions and boarding times affect departures and directs passengers to dynamic information or operator schedules. These are not silently merged: the CSV supplies route identity and stops, while frequency remains TBC.
2. **Operator counts:** the full CSV has 23 raw operator-label values, while the visible operator-link group on the citybus page presents 14 labels. These measure different things: raw labels in the route file versus links shown in a portal section; neither is published here as a legal company count.
3. **City-bus versus 小黃公車 timetable fields:** the city-bus CSV has no departure-time field, while the separate 小黃公車 page says its 26 services have fixed departure times and links image schedules. This is a publication-format and network-scope conflict, not a reason to assign the Yellow timetable to city-bus routes.

## Checked and failed

- **Taichung OAS YAML** — Checked 2026-08-25: full fetch of `https://datacenter.taichung.gov.tw/swagger/yaml/387290000H` failed because the remote name could not be resolved in this environment. The data.gov.tw page was read, but no API field is asserted from the failed endpoint.
- **Taichung OAS API documentation** — Checked 2026-08-25: full fetch of `https://datacenter.taichung.gov.tw/swagger/api-docs/` failed because the remote name could not be resolved in this environment. No API endpoint is asserted from a search snippet.
- **Taichung live XML bus root** — Checked 2026-08-25: full fetch of `https://citybus.taichung.gov.tw/xmlbus4/` returned HTTP 403. The route-map CSV and the rendered citybus page were used instead; no XML response is treated as evidence of absence.
- **Taichung timetable page** — Checked 2026-08-25: full fetch of `https://citybus.taichung.gov.tw/sche/` rendered the timetable shell but exposed no route timetable values in this fetch. It is not used to fill the TBC frequency field.
- **小黃公車 黃1 schedule image** — Checked 2026-08-25: full fetch of `https://www.traffic.taichung.gov.tw/df_ufiles/df_pics/df_file/%E9%BB%831-1130201.png` failed with a cache miss. The official HTML page was read, but no image timetable value is transcribed.
- **小黃公車 黃26 schedule image** — Checked 2026-08-25: full fetch of `https://www.traffic.taichung.gov.tw/df_ufiles/df_pics/df_file/%E9%BB%8326.png` failed with a cache miss. The official HTML page was read, but no image timetable value is transcribed.
- **Six-corridor bus notice lead** — Checked 2026-08-25: full fetch of `https://www.traffic.taichung.gov.tw/news/index-1.asp?Parser=9%2C4%2C20%2C%2C%2C%2C21185%2C%2C%2C%2C5` failed with a cache miss. It is not used; the independently fetched 2026-06-12 service-adjustment notice is the source for the dated service-change statement.
- **Bus API-path notice lead** — Checked 2026-08-25: full fetch of `https://www.traffic.taichung.gov.tw/news/index-1.asp?Parser=9%2C4%2C21%2C%2C%2C%2C21482%2C%2C%2C%2C1%2C%2C%2C%2C%2Cb%2C1` failed with a cache miss. No API-path claim is published from the failed page.

## Stated gaps

- Route-level departure times and headways: the fetched city CSV has no timetable field; machine-readable schedule or operator timetable records would settle this.
- Route-level fares and concession history: the citybus page publishes network rules, but the route CSV has no fare field; dated fare tables or gazettes would settle this.
- 小黃公車 departure values: the official HTML links fixed-departure images, but two full image fetches failed; successful image retrieval or an official text/CSV source would settle the times.
- Ridership, vehicle allocation, depots, accessibility, contracts and historical route changes: none of the fetched sources supplies a complete Taichung series for these subjects; city, operator or Highway Bureau primary records are needed.
