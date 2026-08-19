# Page layout — the canonical order

Established in run 51 after an audit found element order differing between page
types with no rule behind the differences, and sources rendering *above* the
index they were sources for on two of them.

This document is the rule. A new page type follows it; a page that departs from
it says why, in a comment, at the point of departure.

## The order

1. **Identity** — hero photograph, breadcrumbs, back link, `h1`, summary.
2. **Facts** — the facts panel, the lead figure, key data. What a reader
   consults rather than reads.
3. **Primary content** — the reason the page exists. On an index that is the
   list; on a researched page it is the prose; on `/rail/network/` it is the map.
4. **Supporting diagrams** — route map, elevation profile, formation diagram,
   numbering ladder, where they illustrate the primary content rather than
   constitute it.
5. **Secondary data** — spec tables, comparison tables, provenance notes.
6. **Related links and navigation** — adjacent stations, "all X" links,
   cross-links to sibling pages.
7. **Sources and footnotes** — the reference list, then the last-updated line.

Two rules follow from it and are worth stating on their own, because both were
being broken:

- **A reference list goes last.** It is what you check a statement against, so
  it belongs below everything it answers for. Never above the content it cites.
- **A description of a list goes above the list.** Under it, it explains what
  the reader has already finished reading.

### Where the hero photograph sits

Above the breadcrumbs, before the title. That is deliberate and predates this
document: a reader recognises a place before they read its name. It is still
step 1 — a hero is identity, not decoration.

### Where an index's own prose sits

Below its links, not above them. An index's job is to get you out of it, and on
`/rail/` the section essay used to be a full screen of explanation before the
first link. The essay is step 3 for a page that is an essay and step 5 for a
page that is an index; which one a page is decides where it goes.

## Collapsibles

A `<details>` is legitimate when it is **one of several peers and the reader is
choosing between them**. The first peer opens; the rest wait.

A single disclosure wrapping the whole of a page's content is not that. Its only
useful state is open, so it does not get a control — use `.index-section`, which
is the same heading and count with no summary and nothing hidden.

| Disclosure | Where | Classification | State |
| --- | --- | --- | --- |
| The type index list | `components/TypeIndex.tsx` | **primary** | open, no control |
| "Routes in this group" | `app/bus/routes/[group]/page.tsx` | **primary** | open, no control |
| Article body `h2` sections | `lib/collapsible-html.ts` | **primary** | withdrawn entirely |
| New Taipei's seven route subgroups | `app/bus/routes/[group]/page.tsx` | peers, long lists | first open |
| The station index's per-line groups | `app/rail/metro/stations/page.tsx` | peers, long lists | first open |
| A bus route's stop sequences, per direction | `components/BusRouteData.tsx` | peers | first open |
| Section dropdowns and their submenus | `components/SiteNav.tsx` | menu | closed |

Three costs decided the article-body case, over and above the click: find-in-page
does not search inside a closed `<details>`, a fragment link to a heading inside
one scrolls to a closed row and stops, and a closed `<details>` prints closed.
The reasoning is kept in `lib/collapsible-html.ts`, where anyone proposing to
bring it back will look first.
