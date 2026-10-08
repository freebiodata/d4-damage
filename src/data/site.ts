/**
 * D4 DAMAGE — site data. The bucket damage model is community-documented
 * and has shifted between seasons [VERIFY]. Nothing here is official.
 */

export const SITE = {
  brand: 'D4 DAMAGE',
  domain: 'd4damage.top',
  game: 'Diablo IV',
  kicker: 'Sanctuary arithmetic // model reviewed',
  lastVerified: '2026-10-08',
  disclaimer:
    'Unofficial fan-made toolkit. Not affiliated with or endorsed by Blizzard Entertainment. Diablo IV and related marks belong to their respective owners.',
};

export const NAV = [
  { href: '/tools/', label: 'Tools' },
  { href: '/damage-calculator/', label: 'Damage Calc' },
  { href: '/guides/how-damage-works/', label: 'Guides' },
  { href: '/about/', label: 'About' },
];

export const TOOLS = [
  { href: '/damage-calculator/', ico: '⚔️', name: 'Damage Calculator', desc: 'The bucket model: weapon, main stat, crit, vulnerable and additive damage — expected hit numbers.', tag: 'Flagship' },
  { href: '/stat-priority/', ico: '🧿', name: 'Stat Priority Comparator', desc: 'Is +18% additive better than +20% crit damage? Marginal-gain math for your exact build.', tag: 'Calculator' },
  { href: '/toughness-calculator/', ico: '🛡️', name: 'Toughness Calculator', desc: 'Effective HP from life, armor and resistances — how many hits you actually survive.', tag: 'Calculator' },
  { href: '/paragon-planner/', ico: '🕯️', name: 'Paragon Planner', desc: 'Levels to your target, XP needed, and days of grinding at your real pace.', tag: 'Calculator' },
];

export const GUIDES = [
  { href: '/guides/how-damage-works/', ico: '📘', name: 'How damage works', desc: 'The five buckets, why they multiply, and why additive damage feels weak.' },
  { href: '/guides/crit-vs-vulnerable/', ico: '📗', name: 'Crit vs Vulnerable', desc: 'Which bucket to feed on your affixes, depending on what you already have.' },
  { href: '/guides/survival-math/', ico: '📙', name: 'Survival math', desc: 'Effective HP, armor curves, and why one-shots are a toughness problem.' },
];

const y = '2026-10-08';

export const TRUST: { slug: string; title: string; desc: string; html: string }[] = [
  {
    slug: 'about',
    title: 'About D4 DAMAGE – Free Diablo IV Calculators',
    desc: 'Who builds D4 DAMAGE, why it exists, how the damage model is maintained across seasons. An unofficial, ad-free Diablo IV toolkit.',
    html: `
<h2>Why this site exists</h2>
<p>Eight seasons in, Diablo IV still has no community-standard damage calculator: Blizzard's formulas are opaque, the big planners' numbers get disputed every patch, and players fall back to spreadsheets. D4 DAMAGE is a transparent, auditable middle ground: the <a href="/damage-calculator/">damage calculator</a>, <a href="/stat-priority/">stat priority comparator</a>, <a href="/toughness-calculator/">toughness calculator</a> and <a href="/paragon-planner/">paragon planner</a> — each with its full model on the <a href="/methodology/">methodology page</a>.</p>
<h2>How the tools are built</h2>
<ul>
<li>Every calculation runs client-side in your browser. Nothing you type is uploaded — see <a href="/privacy/">privacy</a>.</li>
<li>The damage model is community-documented (the "buckets" system), parameterized, and labeled [VERIFY] where seasons have shifted it.</li>
<li>Model reviewed after major patches; review dates on every page.</li>
</ul>
<h2>How the site is funded</h2>
<p>Currently: out of pocket, no ads, no affiliate links. Future funding will be disclosed here first.</p>
<h2>Who is behind it</h2>
<p>Maintained by an independent ARPG player. <!-- [NEEDS DATA]: add your name/bio before publishing. --> Corrections: <a href="/contact/">contact</a>.</p>
<h2>Affiliation notice</h2>
<p>${SITE.disclaimer}</p>`,
  },
  {
    slug: 'contact',
    title: 'Contact D4 DAMAGE – Report a Model Error',
    desc: 'Contact D4 DAMAGE: report model drift after a patch, request a build preset, or question a formula.',
    html: `
<h2>Email</h2>
<p><strong>hello@d4damage.top</strong><br />
<!-- [NEEDS DATA]: set up this mailbox before launch. --> Include the season/patch and, ideally, an in-game screenshot pair that demonstrates the discrepancy.</p>
<h2>What to include in a model report</h2>
<ol class="steps">
<li>The page and inputs you used.</li>
<li>The in-game number that disagreed.</li>
<li>Season/patch number.</li>
</ol>
<h2>Requests</h2>
<p>Build presets and glyph math are on the roadmap — see the <a href="/changelog/">changelog</a>.</p>`,
  },
  {
    slug: 'methodology',
    title: 'Methodology – The Bucket Model | D4 DAMAGE',
    desc: 'The community-documented Diablo IV bucket model behind D4 DAMAGE: multiplier groups, crit and vulnerable, armor curves, plus sources and the [VERIFY] policy.',
    html: `
<h2>The bucket model</h2>
<pre class="formula">base      = weaponDamage × skillMultiplier
bucket₁   = 1 + mainStat ÷ 1000           (primary attribute)
bucket₂   = vulnerable ? 1 + 0.20 + vulnBonus : 1      [baseline 20% VERIFY]
bucket₃   = isCrit ? 1 + critBonus : 1
bucket₄   = 1 + Σ additive bonuses        (core, close, CC'd, etc.)
hit       = base × bucket₁ × bucket₂ × bucket₃ × bucket₄</pre>
<p>Damage buckets <em>multiply</em>; bonuses inside a bucket <em>add</em>. That single fact explains most build math in Diablo IV — and why additive affixes underperform multiplicative ones late in a build. Bucket boundaries have shifted between seasons; this model is parameterized and flagged [VERIFY] rather than asserted.</p>
<h2>Toughness model</h2>
<pre class="formula">armorDR   = armor ÷ (armor + K × enemyLevel)     K editable [VERIFY]
resDR     = resistance-based, same shape
EHP       = life ÷ (1 − armorDR) ÷ (1 − resDR)   (+fortified pool)</pre>
<h2>Paragon model</h2>
<p>Flat per-level XP input by default (scaling curves vary by level band and season mechanics); enter an average cost per level for the range you're climbing.</p>
<h2>Sources</h2>
<p>Community theorycrafting (maxroll, Icy Veins, r/diablo4 threads disputing planner numbers) informs the model shape; nothing on this site is presented as Blizzard-official. Links and drift notes: <a href="/changelog/">changelog</a>.</p>
<h2>The [VERIFY] policy</h2>
<p>Every constant carries a flag and the dataset a review date (currently <span class="mono">${y}</span>). Patch-day flow: test in-game → adjust model constants → bump date → <a href="/changelog/">changelog</a>.</p>
<h2>AI-assist disclosure</h2>
<p>Pages drafted with AI assistance, reviewed by the operator before publishing. All math is deterministic, auditable client-side code.</p>`,
  },
  {
    slug: 'privacy',
    title: 'Privacy Policy | D4 DAMAGE',
    desc: 'D4 DAMAGE privacy in plain language: calculators run in your browser, nothing is uploaded, no tracking cookies, no accounts.',
    html: `
<p class="note">Last updated: ${y}</p>
<h2>The short version</h2>
<ul>
<li>All calculators run in your browser. <strong>Nothing you type is sent to any server.</strong></li>
<li>No advertising or tracking cookies; no analytics by default; no accounts.</li>
</ul>
<h2>Third parties</h2>
<p>Fonts load from Google Fonts — the only external request. If analytics are ever added, this page updates first with a dated <a href="/changelog/">changelog</a> note.</p>`,
  },
  {
    slug: 'terms',
    title: 'Terms of Use | D4 DAMAGE',
    desc: 'Terms of use for D4 DAMAGE: free unofficial Diablo IV tools provided as-is, with no warranty of accuracy.',
    html: `
<p class="note">Last updated: ${y}</p>
<h2>What this site is</h2>
<p>${SITE.disclaimer}</p>
<h2>Accuracy</h2>
<p>Tools are provided <strong>as is, with no warranty of accuracy</strong>. The model is a community approximation of formulas Blizzard does not publish; seasons change the math. Verify anything that matters before respecing around it.</p>
<h2>Acceptable use</h2>
<ul><li>Personal use, freely. Don't resell or rebrand the tools.</li><li>Linking is welcome and needs no permission.</li></ul>
<h2>Limitation of liability</h2>
<p>To the maximum extent permitted by law, the operator is not liable for losses arising from use of the tools, including in-game resources spent on the strength of a calculation.</p>`,
  },
  {
    slug: 'changelog',
    title: "Changelog – What's New | D4 DAMAGE",
    desc: 'Every real update to D4 DAMAGE: tools, model reviews after patches, fixes. Dated and honest, newest first.',
    html: `
<h2>2026-10-08 — Launch</h2>
<ul>
<li>Shipped four tools: <a href="/damage-calculator/">damage calculator</a>, <a href="/stat-priority/">stat priority comparator</a>, <a href="/toughness-calculator/">toughness calculator</a>, <a href="/paragon-planner/">paragon planner</a>.</li>
<li>Bucket model initialized from community documentation, all constants flagged [VERIFY] — see <a href="/methodology/">methodology</a>.</li>
<li>Three guides published: <a href="/guides/how-damage-works/">how damage works</a>, <a href="/guides/crit-vs-vulnerable/">crit vs vulnerable</a>, <a href="/guides/survival-math/">survival math</a>.</li>
</ul>
<h2>Planned</h2>
<ul><li>Build presets per popular archetype (request via <a href="/contact/">contact</a>).</li><li>Glyph and paragon board math research.</li></ul>`,
  },
  {
    slug: 'sitemap',
    title: 'HTML Sitemap – All Pages | D4 DAMAGE',
    desc: 'Every page on D4 DAMAGE: damage calculator, stat priority, toughness calculator, paragon planner, guides and site information.',
    html: '',
  },
];
