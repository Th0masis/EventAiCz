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

### Spacing And Composition

- Use the shared `--space-*` scale: xs 4px, sm 8px, md 12px, lg 16px,
   xl 24px, 2xl 32px and 3xl 48px. Brand-derived outer margins and SVG logo
   compensation are deliberately outside this component spacing scale.
- Keep related labels and descriptions 8-12px apart; separate independent
   content groups by 24-32px. Relationships matter more than filling the canvas.
- Ordinary cards use 16-24px internal padding. Compact consumer cards and
   genuinely framed technical tools may use 12px. Command rows may use 4px
   vertically/8px horizontally; workflow rows are repeated diagram items,
   not ordinary cards. These are explicit density exceptions.
- Use 16-24px between repeated cards. Align comparison-card top and bottom
   edges, headings and command baselines. Let text determine row height.
- Never use fixed-height text rows with hidden overflow or ellipses for
   essential information. Wrapped commands must grow vertically.
- Whitespace must support hierarchy and grouping. Do not fill every empty
   region, but do not compress essential text while leaving unrelated empty
   space below it. A simple comparison may intentionally remain spacious.
- The spacing rules are a project design contract, not a claim of WCAG
   certification. Readability on a projector must be checked in the actual room.

References: [Carbon spacing](https://carbondesignsystem.com/elements/spacing/overview/),
[NN/g proximity](https://www.nngroup.com/articles/gestalt-proximity/),
[Microsoft accessible presentations](https://support.microsoft.com/en-us/office/make-your-powerpoint-presentations-accessible-to-people-with-disabilities-6f7772b2-2f33-4bd2-8ca7-dae3b2b3ef25).

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
- Use one role-based scale across light, dark, cover and chapter slides.
   Sizes are canvas pixels, never viewport-dependent. Use CSS `--type-*` tokens;
   inherited `--text-role`, `--text-size`, `--text-leading` and `--text-font`
   select the role for an element and its inline descendants.
- `title`: every slide's h1. `section`: h2 and major diagram anchors.
   `block`: h3, card titles and workflow names. `body`: prose, subtitles and
   takeaways. `caption`: diagram labels, purpose labels and agenda times.
   `note`: secondary explanations. `code`: commands, terminal output and tables.
   `minor`: metadata, status badges, timestamps, footer text and slide numbers.
   `compact`: labels in dense numbered workflows, not ordinary card titles.
   `technical`: dense log tables and full command-help output. These two roles
   are explicit density variants, not permission to shrink arbitrary prose.
   `command`: essential demonstration commands and test-script paths, 14px mono;
   longer command results remain the code role and may scroll.
- Do not shrink text to fit. Reflow or increase the available content region;
   scrollable terminal output may scroll, but must keep the same code size.
- Main h1 is at most two lines and 1050px wide (1140px on the cover).
   Cover heading starts at left 35px/top 490px; chapter heading at left 35px/top
   535px; content heading at left 70px/top 34px. Agenda grid adds 10px on top.
   Main heading margins are zero, not optical per-slide offsets.
- Numbering is checked where present; existing unnumbered slides remain
   unnumbered. Sequential numbering values are outside this visual contract.

### Executable Design Contract

The smoke test reads this JSON directly. `brand` means the ABBvoice stack;
`mono` means IBM Plex Mono. Role values are size, line-height multiplier and font.
The slide number is the minor role with a special line-height of 1.

```json
{
   "canvas": [1280, 720],
   "typography": {
      "title": [45, 1.1, "brand"],
      "section": [28, 1.15, "brand"],
      "block": [22, 1.2, "brand"],
      "body": [18, 1.35, "brand"],
      "caption": [14, 1.3, "brand"],
      "note": [12, 1.35, "brand"],
      "code": [12, 1.35, "mono"],
      "minor": [10, 1.2, "mono"],
      "compact": [14, 1.3, "brand"],
      "technical": [10, 1.35, "mono"],
      "command": [14, 1.35, "mono"]
   },
   "headings": {
      "content": [70, 34, 1050],
      "agenda": [70, 44, 1050],
      "chapter": [35, 535, 1050],
      "cover": [35, 490, 1140]
   },
   "footer": {
      "logoWidth": 39,
      "logoRight": 35,
      "logoBottom": 22,
      "coverLogoWidth": 68,
      "coverLogoBottom": 39,
      "numberRight": 120,
      "numberBottom": 25,
      "keepout": 48
   },
   "contentMargins": [70, 34, 70, 48],
   "spacing": {
      "scale": [4, 8, 12, 16, 24, 32, 48],
      "components": [
         { "selector": ".tooling-workflow-panel, .as-cli-capability-card, .as-cli-core", "padding": [16, 16, 16, 16] },
         { "selector": ".tooling-gui-window, .tooling-runner-shell, .tooling-cli-boundary, .as-cli-consumer-card", "padding": [12, 12, 12, 12] },
         { "selector": ".as-cli-devops-gate", "padding": [24, 24, 24, 24] },
         { "selector": ".as-cli-command", "padding": [4, 8, 4, 8] }
      ],
      "groups": [
         { "selector": ".as-cli-capability-grid, .tooling-access-grid", "gap": 16 },
         { "selector": ".as-cli-consumer-row, .as-cli-devops-flow", "gap": 24 }
      ],
      "comparisons": [
         { "selector": ".as-cli-devops-flow", "items": ".as-cli-devops-gate", "heading": ".as-cli-devops-gate-name", "command": "code" }
      ]
   },
   "tolerance": 0.1
}
```

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
The white SVG has transparent margins. Its CSS image box is 60.1px wide at
right 24.49px/bottom 11.64px, with automatic height. The visible artwork is
approximately 39 x 20.71px at right 35px/bottom 22px. Its small height difference
from the light logo is intentional: preserve each original's proportions.
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
another port. It reads the executable design contract above and checks all
text roles, heading geometry, logo artwork bounds and slide-number placement
on desktop and mobile. It also checks text clipping and footer clearance
at every reveal step, after transitions and terminal responses complete.
Scrollable terminal contents are allowed
to extend inside their own scroll area only when the scroll viewport and its
outer frame stay inside the content margins. New terminal output automatically
scrolls into view; horizontal text overflow is not allowed. Content objects as
well as text must respect the 70px side margins and 48px bottom keepout. Fixed
canvas layouts use container queries rather than viewport-triggered reflow.
Automated checks are not proof of
visual fidelity. Inspect the
cover, a light slide, a dark slide, and every changed slide in the browser.
Check a 1280 x 720 viewport and a smaller viewport for text clipping, overlapping
elements, logo/footer clearance, asset loading, and every reveal/interaction
state. Verify exports separately when an export is part of the requested work.

No PowerPoint file is needed at runtime: the reused artwork lives in `public`.
