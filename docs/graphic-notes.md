# Slide Design Specifications

Read this before creating or restyling slides in this workspace. Preserve the
B&R PowerPoint-derived identity and the existing Slidev interactions.

## Sources And Scope

- Design reference: [B&R Template.potx](../OneDrive_1_10-7-2026/B%26R%20Template.potx).
- Implemented design tokens and layouts: [Slides/style.css](../Slides/style.css).
- Deck configuration and slide markup: [Slides/slides.md](../Slides/slides.md).
- Existing interactive visuals: [Slides/components](../Slides/components).

The specifications below describe the current Slidev implementation. Pixel
values are Slidev canvas coordinates, not original PowerPoint measurements.
White backgrounds, ABBvoice, orange accents, the logo, and cover wave are
template-derived. Dark technical slides and diagram colors are deck-specific
extensions, not a claim about the template's official brand rules.

## Canvas And Spacing

- Aspect ratio: 16:9; canvas: 1280 x 720 (`canvasWidth: 1280`).
- Standard layout padding: 34px top, 70px left/right, 48px bottom.
- Keep the footer and logo area free of content and controls.
- Use aligned grids and deliberate whitespace; reuse nearby slide layouts.
- Do not add decorative containers around whole slide sections or nest cards.
- Long text must wrap without clipping. Shorten copy or restructure the layout
  before shrinking every label or changing the shared font.

## Palette

Use the existing CSS variables rather than introducing near-duplicate colors.

| Token | Value | Purpose |
| --- | --- | --- |
| `--br-orange` | `#FF8800` | Primary accent, emphasis, active states |
| `--br-orange-hot` | `#FFA947` | Secondary orange accent |
| `--ink` | `#262626` | Main text; dark technical background |
| `--steel`, `--muted` | `#6E6E6E` | Secondary text on light slides |
| `--line` | `#D2D2D2` | Neutral borders and separators |
| `--paper`, `--white` | `#FFFFFF` | Default background and light text |
| `--success` | `#45A96B` | Positive status |
| `--danger` | `#D64032` | Error or risk status |

Diagram-only tokens: `--flow-blue: #4D9BD6`, `--flow-cyan: #50C2C5`,
`--flow-green: #58B77A`, `--flow-amber: #E6AD56`,
`--flow-purple: #A38AD5`, `--flow-red: #D8786C`.
Keep these semantic or category-based; they must not replace the orange brand
accent. Do not communicate status by color alone.

## Typography

- Main font stack: `ABBvoice`, `ABBvoice Office`, `Arial`, sans-serif.
- Slidev sans and serif fonts are configured as ABBvoice; mono is IBM Plex Mono.
- Use IBM Plex Mono for code, small technical labels, and slide numbers.
- Headings and strong/bold text use the shared brand font; heading weight is 700.
- Letter spacing is 0; do not introduce negative tracking.
- Standard `.ot-slide h1`: 45px, line-height 1.1, max-width 1050px.
- Cover heading: 45px, line-height 1.1, width 1140px.
- Cover subtitle: 20px, line-height 1.35, width 1100px.

These are layout-specific values, not a universal font scale. The stylesheet
also contains generic headings and component-specific overrides. Check the
effective selector and browser computed style before changing a rule.

ABBvoice is locally installed and is **not bundled**. Install it on preview and
export machines under the organization's font license. Do not distribute font
files or substitute a different visual identity without approval. A fallback
font can change wrapping and must be checked visually.

## Layout Variants And Assets

### Standard Content

Use `layout: default` with `class: ot-slide` for the existing content-slide
pattern. Titles are left-aligned; `.accent` marks selected words in orange.
Keep emphasis selective. `.kicker` is currently hidden; do not depend on it to
communicate essential information.

#### Primary Slidev Layout

The PowerPoint template contains 53 named layouts spanning covers, dividers,
content grids, picture layouts, process diagrams, timelines, and closing
slides. Do not reproduce that entire catalog in Slidev. Use PowerPoint's
`One content A` as the source pattern for the primary Slidev content layout:
one left-aligned title, an optional short lead, one dominant content region,
and a reserved footer. In this deck, that pattern is `layout: default` with
`class: ot-slide`; keep it as the single styling authority rather than adding
a parallel custom Vue layout.

- Keep the title to one or two lines and within the existing 1050px width.
- Place one primary diagram, comparison, or structured list below the title;
   use two columns only when comparing related items.
- Keep all content inside the 70px side margins and above the 48px bottom
   keepout. The footer, slide number, and logo must remain unobstructed.
- Add a short takeaway only when it fits inside the same content-safe area.
   Shorten or simplify the slide before shrinking shared typography.
- Use `Content & picture C` as the image-led variant when a real, relevant
   image is necessary. Keep text on the left and the image on the right; do not
   use a large decorative image that displaces the slide's main takeaway.
- The dark technical variant keeps this same title/content/footer structure;
   it changes contrast, not the layout hierarchy.

The shared pseudo-element places the original
[logo](../Slides/public/br-template-logo.svg) at right 35px, bottom 22px,
rendered at 39 x 20px on light backgrounds. On black or other dark backgrounds,
use the [white B&R logo with orange bar](../Slides/public/B%26R_Logo_Screen_RGB_White_with_orange_bar_33px_B%26R_Logo_Screen_RGB_White_with_orange_bar_33px.svg)
instead. Preserve the selected logo asset's aspect ratio; do not redraw, recolor,
distort, or replace it with text.
Slide numbers use `.slide-id`: right 120px, bottom 25px, 10px IBM Plex Mono.

### Cover And Chapter Openers

Use `layout: cover`. The
[Website_header 02 banner](../Slides/public/Website_header%2002.png) occupies
the upper area: top-centered, scaled to 100% width and 485px height. An orange
bar marks its lower edge. The title and subtitle sit in the white lower area,
using padding `490px 35px 65px`.

Topic opening slides use the `chapter-slide` class and a `.chapter-image` asset
from `Slides/public/topics/<topic>/chapter.jpg`. Keep the image 485px high,
with the heading in the white area below it and the same orange bar at the edge.
Later content slides in a topic do not use this class.

The cover has an explicit `.cover-logo`: width 68px, right 35px, bottom 39px.
`.cover-event` sits at left 35px, bottom 22px; its second item has an orange
separator. Cover eyebrow and `.ot-cover-rule` are hidden in the current design.
Reuse the artwork unchanged; do not recreate the wave as a gradient or SVG.

### Dark Technical Variant

Use `class: dark-slide ot-slide` only when technical content benefits from dark
contrast. Background is `--ink`; main text is white. The variant overrides
`--steel` to `#D9E0E3` and `--muted` to `#C7CDD1`. Keep the B&R logo in the
bottom-right footer, using the white variant with orange bar rather than the
dark logo from the light template. Check labels, borders, and inactive controls
against this background.

## Agent Editing Rules

1. Read these notes, the relevant slide markup, and nearby CSS/component rules.
2. Reuse existing classes and components. Keep shared branding in the shared
   stylesheet instead of duplicating it in slide-local markup.
3. Preserve content meaning, Czech diacritics, speaker notes, `v-click` reveal
   steps, and component behavior unless the requested change requires otherwise.
4. Avoid unrelated redesigns, font changes, new palettes, and decorative effects.
5. Account for CSS cascade order: later rules, specificity, and media queries
   can override earlier declarations. Avoid accumulating redundant overrides.
6. Update these notes when an intentional shared design decision changes.

## Validation

Run commands from [Slides](../Slides). On Windows, use `npm.cmd` if PowerShell
blocks `npm.ps1`.

```sh
npm run start -- --port 3030
npm run test:content
npm run test:smoke
npm run build
```

The smoke test defaults to `http://127.0.0.1:3030`; set `SLIDES_URL` if using
another port. Automated checks are not proof of visual fidelity. Inspect the
cover, a light slide, a dark slide, and every changed slide in the browser.
Check a 1280 x 720 viewport and a smaller viewport for text clipping, overlapping
elements, logo/footer clearance, asset loading, and every reveal/interaction
state. Verify exports separately when an export is part of the requested work.

No PowerPoint file is needed at runtime: the reused artwork lives in `public`.
