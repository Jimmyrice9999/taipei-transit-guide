# Research corpus warning

This file is a lead record, not a source. The two operator pages below were
fetched in full on 14 August 2026. TDX supplies district and WGS84 coordinates
for every station in these lines, but its station rows leave the postal
address empty for 20 stations. The operator material supplies station
positions, not postal addresses; the page therefore renders those positions
under a separate label and leaves Address as TBC.

# TDX station locations supplied by the operator

## What is established

### Danhai LRT

**Source:** “Danhai LRT stations” / `淡海輕軌車站` — New Taipei Metro
Corporation (`新北大眾捷運股份有限公司`), PRIMARY, High confidence because this
is the operator’s complete current station table.

URL: https://www.ntmetro.com.tw/basic/?node=10136

The station-position column publishes the following original-language rows:

| Code | Original-language station position |
|---|---|
| V01 | `中正東路二段紅樹林站旁` |
| V02 | `淡金路上與淡金路77巷交叉路口北側` |
| V03 | `淡金路上鄰近國泰橋` |
| V04 | `淡金路上與水源街二段交叉路口北側` |
| V05 | `淡金路上與北新路交叉路口北側` |
| V06 | `淡金路上與新市一路三段交叉路口北側` |
| V07 | `濱海路一段上與中山北路二段交叉路口東側` |
| V08 | `濱海路二段上與義山路交叉路口西側` |
| V09 | `濱海路二段上與沙崙路交叉路口東側` |
| V10 | `沙崙路上與新市三路二段交叉路口南側` |
| V11 | `沙崙路上與新市六路交叉路口南側` |
| V26 | `中正路二段51巷` |
| V27 | `淡海路上於觀海路交叉路口東側` |
| V28 | `濱海路三段與新民街一段交叉路口東側` |

The full table labels the field `車站位置`; it does not call these strings
postal addresses. TDX has an address only for V01 and V26. V02–V11 and V27–V28
therefore retain `Address: TBC` and show the operator’s `Station location`.

Original-language evidence: `車站站名 | 車站代碼 | 車站位置` and the 14 rows
above on the fetched page.

### Ankeng LRT

**Source:** “Ankeng LRT stations” / `安坑輕軌車站` — New Taipei Metro
Corporation (`新北大眾捷運股份有限公司`), PRIMARY, High confidence because this
is the operator’s complete current station table.

URL: https://www.ntmetro.com.tw/basic/?node=10137

The station-position column publishes the following original-language rows:

| Code | Original-language station position |
|---|---|
| K01 | `安一路上，鄰近甜蜜蜜社區` |
| K02 | `安一路與玫瑰路路口` |
| K03 | `安一路與僑信路路口` |
| K04 | `安一路與車子路路口` |
| K05 | `安一路與安忠路路口` |
| K06 | `安和路一段與安康路一段路口` |
| K07 | `安和路二段與安利街路口` |
| K08 | `安和路三段與新和街路口` |
| K09 | `Y8十四張地區、環狀線Y8站旁可轉乘捷運環狀線Y8站` |

The full table labels the field `車站位置`; it does not publish postal
addresses for K01–K08. Those eight pages therefore retain `Address: TBC` and
show the operator’s `Station location`. K09 already has a TDX address and now
also shows the operator’s position description.

Original-language evidence: `車站站名 | 車站代碼 | 車站位置` and the nine rows
above on the fetched page.

## Conflicts

1. **Address versus station position:** TDX’s `StationAddress` field is empty
   for V02–V11, V27–V28 and K01–K08. NTMC’s full station pages publish a
   `車站位置` description for each of them, but do not publish postal addresses.
   These are different fields and are both retained: the site shows the
   operator position and `Address: TBC`.

## Checked and failed

- **Postal addresses for the 20 empty TDX rows** — Checked 2026-08-14. The full
  NTMC Danhai and Ankeng station tables were read; each supplies a station
  position, not a postal address. No address was inferred from coordinates or
  junction wording.

## Stated gaps

- Postal street addresses for V02–V11, V27–V28 and K01–K08 remain TBC. An
  operator station information sheet or government address register that
  explicitly assigns a postal address to each station would settle them.
