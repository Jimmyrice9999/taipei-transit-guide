# For Jamie

Run 51 continues from `20c7088`. It adds no route content; coverage stays at 1,051/1,051 and 1,393 pages.

Part 1 fixed all six reported bugs, each reproduced by measurement before it was touched.
The missing front-page photo was a dangling `getImage('matra-dispute/hero')` in `app/page.tsx` — the sidecar went in `a371fc1` on 14 August and that one reference, being hard-coded rather than in frontmatter, was missed. Zero URLs were broken; the markup was simply never emitted.
All seven images run 22 culled are restored from Commons at 1600px, chosen against the quality objections run 22 recorded, and two new guards fail the build on any dangling image id.
The nav panel now overlays at every width (the bar went 125px → 603px below 780px), the submenu caret has its rotation's 2px overhang, and every scroll container has a visible thumb and an edge fade.
The session trail is a stack, so the site's Back control no longer walks forward; `npm run nav` walks the reported sequence in a real browser.
The Sanying Line is drawn dashed as a chain of its published station points — the page used to say "not drawn" above twelve Sanying dots.
Gates: cite clean, verify green, test:unit 195/195, nav 19/19, research clean.
Do not poll Actions.
Do not stage the pre-existing untracked `probes/` directory.
