# D4 DAMAGE — Diablo IV damage calculator (Astro)

Unofficial fan-made damage math for **Diablo IV**, built on the community bucket model. Domain: **https://d4damage.top**.

## Stack & commands
Astro 5, static output, vanilla JS islands. `npm install` → `npm run dev` / `npm run build` → deploy `dist/`.

## Pages (17)
`/` · `/tools/` · tools: `/damage-calculator/`, `/stat-priority/`, `/toughness-calculator/`, `/paragon-planner/` ·
guides: `/guides/how-damage-works/`, `/guides/crit-vs-vulnerable/`, `/guides/survival-math/` ·
trust pages from `src/data/site.ts` via `src/pages/[slug].astro` · `404`.

## Design
Gothic hellfire theme: charcoal base, ember orange + blood red, Cinzel serif headings, sharp edges, engraved dividers — distinct per-game identity.

## Model policy
Blizzard's formulas are unpublished and season-shifted. The bucket model is documented on `/methodology/` with every constant flagged [VERIFY] and editable. The site never presents model output as official.

## [NEEDS DATA] before launch
1. Calibrate bucket baselines (vulnerable 20%, crit 50%) and armor constant K against the current season.
2. About page operator bio (placeholder comment in `site.ts`).
3. Mailbox for `hello@d4damage.top`.
