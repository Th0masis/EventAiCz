# Slide Design Specifications

Read this before creating or restyling slides in this workspace. Preserve the
B&R PowerPoint-derived identity and the existing Slidev interactions.

## Sources And Scope

- Design reference: [B&R Template.potx](../OneDrive_1_10-7-2026/B%26R%20Template.potx).
- Implemented design tokens and layouts: [Slides/style.css](../Slides/style.css).
- Deck configuration and slide markup: [Slides/slides.md](../Slides/slides.md).
- Topic-owned interactive visuals: [Slides/topics](../Slides/topics).

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

### Wrapping And Card Text

- Prose wraps at word boundaries: `white-space: normal`, `word-break: normal`
   and `overflow-wrap: normal`. Do not use `break-all` or split ordinary words
   just to fit a narrow card. Widen or restructure the card instead.
- Commands wrap at spaces first, with `overflow-wrap: anywhere` only as an
   emergency for a long identifier or path. Keep `word-break: normal` and
   `hyphens: none`; never insert a visible hyphen that changes command syntax.
   Preformatted help excerpts use `white-space: pre-wrap` to preserve indentation.
- Essential headings, descriptions and commands must not use ellipsis or line
   clamping. Wrapped text must remain inside its parent's content region.
- In repeated capability cards, titles reserve two lines; descriptions start
   at the same height, and the last command rows align at the bottom. A minimum
   height is allowed to align rows; a fixed height that clips content is not.
- Text inside cards is left-aligned. Centered text is reserved for the shared
   CLI anchor and narrow diagram connectors, not multi-line descriptions.
- Use the same inset for heading, description and commands. If space is still
   insufficient, simplify the composition, not its font size.

References: [MDN wrapping text](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_text/Wrapping_breaking_text),
[MDN overflow-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap),
[MDN word-break](https://developer.mozilla.org/en-US/docs/Web/CSS/word-break).

### Avoid Generic Decorative UI

"AI slop" is an informal critique, not a certification or web standard. Here
it means generic visual decoration that does not explain the engineering topic.

- Do not nest a repeated card inside another repeated card. Whole slide
   sections and comparison columns remain unframed, with grouping expressed
   through alignment, proximity and typography.
- A terminal, GUI window or code example is a semantic tool/content view,
   not automatically another card. It may be framed inside a relevant content
   item, but it must have a clear purpose and cannot contain decorative cards.
- No decorative gradients, orbs, floating shadows or stock-like dashboards
   merely to fill empty space. Preserve the actual B&R identity and relevant
   diagrams; do not add generic claims or marketing copy.
- Do not infer a violation solely from nested DOM nodes. Tests use the explicit
   card and unframed-section selectors in the contract; human review remains
   necessary for semantic quality and composition.

References: [NN/g cards](https://www.nngroup.com/articles/cards-component/),
[NN/g common region](https://www.nngroup.com/articles/common-region/),
[Material cards](https://m3.material.io/components/cards/overview).

### Terminal Demonstration Without Scrolling

- Keep every already-revealed command visible; the final state contains all
   nine commands, including `as --help`. Only the current command's result is
   expanded. This is a demonstration transcript, not a full scrolling console.
- No scrollbar, wheel scrolling, automatic scrolling or translated history
   is needed. The body must satisfy `scrollHeight <= clientHeight` and
   `scrollWidth <= clientWidth`; hiding an overflowing region is not a fix.
- The long help output is an explicitly labelled excerpt of the original
   transcript. Never present an excerpt as complete output or shrink hundreds
   of help lines until they appear to fit. Preserve command strings and reveal
   timing; collapse previous results rather than dropping command history.

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
   longer command results remain the code role and wrap.
- Do not shrink text to fit. Reflow or increase the available content region;
   terminal output must keep the same code size and fit without scrolling.
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
   "wrapping": [
      { "selector": ".as-cli-consumer-copy b, .as-cli-capability-name, .as-cli-capability-purpose, .as-cli-capability-sublabel, .as-cli-devops-gate p", "whiteSpace": "normal", "wordBreak": "normal", "overflowWrap": "normal" },
      { "selector": ".as-cli-command > span:last-child, .as-cli-devops-gate code", "whiteSpace": "normal", "wordBreak": "normal", "overflowWrap": "anywhere" },
      { "selector": ".help-output", "whiteSpace": "pre-wrap", "wordBreak": "normal", "overflowWrap": "anywhere" }
   ],
   "structure": {
      "cards": ".as-cli-consumer-card, .as-cli-capability-card, .as-cli-devops-gate, .ot-compare-card",
      "unframed": ".tooling-workflow-panel, .tooling-automated-steps > div"
   },
   "terminal": {
      "commands": [
         "as --help", "as project status", "as sim enable", "as build sim",
         "as plc connect --ip 127.0.0.1", "as var read gProductionCount --task Cyclic",
         "as var write gCmdClear --task Cyclic --value 1",
         "as logbook read --count 20 --level error", "as build pip"
      ],
      "maxOutputs": 1
   },
   "spacing": {
      "scale": [4, 8, 12, 16, 24, 32, 48],
      "components": [
         { "selector": ".tooling-workflow-panel, .as-cli-capability-card, .as-cli-core", "padding": [16, 16, 16, 16] },
         { "selector": ".tooling-gui-window, .tooling-runner-shell, .tooling-cli-boundary, .as-cli-consumer-card", "padding": [12, 12, 12, 12] },
         { "selector": ".as-cli-devops-gate", "padding": [24, 24, 24, 24] },
         { "selector": ".as-cli-command", "padding": [4, 8, 4, 8] }
      ],
      "groups": [
         { "selector": ".as-cli-capability-grid", "rowGap": 16, "columnGap": 16 },
         { "selector": ".tooling-access-grid", "rowGap": 0, "columnGap": 16 },
         { "selector": ".as-cli-consumer-row, .as-cli-devops-flow", "gap": 24 }
      ],
      "comparisons": [
         { "selector": ".as-cli-devops-flow", "items": ".as-cli-devops-gate", "heading": ".as-cli-devops-gate-name", "command": "code" }
      ],
      "cardText": [
         { "selector": ".as-cli-capability-grid", "items": ".as-cli-capability-card", "heading": ".as-cli-capability-name", "description": ".as-cli-capability-purpose", "action": ".as-cli-command:last-child" }
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

For the deck cover, use `layout: cover`. The
[Website_header 02 banner](../Slides/public/Website_header%2002.png) occupies
the upper area: top-centered, scaled to 100% width and 485px height. An orange
bar marks its lower edge. The title and subtitle sit in the white lower area,
using padding `490px 35px 65px`.

Topic opening slides use `layout: default`, `class: ot-slide chapter-slide`
and a `.chapter-image` asset
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

## Topic Ownership

- Keep deck-wide fonts, colors, spacing tokens, canvas defaults, and shared
   slide patterns in `Slides/style.css`. Topic work must not redefine shared
   tokens declared in `:root` (including palette tokens such as `--ink`), any
   `--br-*`, `--type-*`, or `--space-*` tokens, or edit the shared stylesheet.
- A topic may own `Slides/topics/<topic-id>/styles.css` and files under its
   `components/` and `scripts/` folders. Keep topic markup in the matching
   `Slides/topics/<topic-id>.md` file and assets in
   `Slides/public/topics/<topic-id>/`.
- When a topic has `styles.css`, add `topic-<topic-id>` to every slide root in
   that topic, including its chapter opener. Every selector in standalone topic
   CSS must include that namespace in its first compound selector. Both
   `.topic-as-cli .diagram` and `.slidev-layout.topic-as-cli .diagram` are valid;
   unqualified `.slidev-layout`, `:root`, `html`, and `body` are forbidden.
- Slidev compiles each Markdown slide separately. Import a topic stylesheet in
   the `<script setup>` block of every slide in a topic that has `styles.css`;
   importing it once in the first slide does not guarantee the stylesheet is
   loaded on later slides. The guard requires the literal relative import
   `import './<topic-id>/styles.css'` in each slide.
- Import topic-owned Vue components from that topic's `components/` folder.
   Keep a component in `Slides/components/` only when it is intentionally shared
   by multiple topics. Keep component-only behavior in its Vue file; place
   reusable topic logic in that topic's `scripts/` folder.
- Topic code may import its own topic source/assets, explicitly shared
   `Slides/components/` and `Slides/scripts/`, or external packages. Imports
   and re-exports must not cross into another topic or import shared styles.
   Literal dynamic imports and `require` calls follow the same boundary;
   computed targets, unresolved aliases and import globs cannot be verified
   by this guard and must be replaced with explicit imports.
- Topic Vue styles must be scoped CSS, without global selectors or shared
   token redefinitions. Script imports, style `src` attributes and literal CSS
   `@import` paths all follow the same topic boundary. Imported style
   preprocessors are unsupported; shared stylesheet files are not an allowed
   import even when placed under shared component or script directories.
   Every standalone CSS file under `Slides/topics/<topic-id>/`, including
   auxiliary and unimported files, must use the topic selector namespace.
   Embedded scoped component styles
   may target the component's own classes without a slide-root namespace.
- Shared changes require a coordination PR. Topic PRs may change only the
   matching topic Markdown, topic-owned source, and topic asset directory.
- `Slides validation` runs `test:topic-styles` to reject unscoped topic rules,
   shared-token redefinitions, and topic styles left in the global stylesheet.
   It runs `test:topic-code` with Babel, Vue SFC and Markdown parsers to check
   topic JS/TS, Vue and per-slide Markdown scripts and `src` includes, including
   imports through shared source files and duplicate bindings/imports. Fenced
   examples are not executed or checked as code; legal shadowing and `var` redeclarations remain
   allowed. Embedded negative self-checks run with the guard. This is a static
   import/style boundary, not a sandbox for runtime DOM or CSS mutations.
   It runs `test:duplicates` with jscpd (minimum 50 tokens and 8 lines, with
   0.85 JavaScript/TypeScript function similarity) and reports detected clones
   as PR file annotations. The scan covers all JS/MJS/TS, Vue and CSS source
   under `Slides/`, including shared source and test scripts, while excluding
   dependencies, generated builds and artifacts. Reports use an OS temporary
   directory that is removed after the check; old reports in `artifacts/duplicates/`
   are not current results. These checks catch substantial textual/structural
   duplication; review is still needed for different implementations of the
   same behavior.
- Configure the `main` branch ruleset to require `Slides validation` and
   `PR policy`. A failing workflow status does not block merges unless GitHub
   branch protection requires it.

### Current Ownership And Migration

| Topic | Owned Vue Components | Styles And Behavior |
| --- | --- | --- |
| `agentic-demo` | `BottleConveyor.vue` | Scoped component CSS and component state |
| `agentic-engineering` | `AgentWorkflow.vue` | Scoped component CSS and component state |
| `as-agentic-bridge` | `AutomationStudioAgent.vue` | Scoped component CSS and component state |
| `as-cli` | `TerminalCli.vue`, `CycleTradeoff.vue` | `styles.css`, scoped component CSS and component state |
| `as-repository` | `SkillsEmbed.vue` | Scoped component CSS and component state |

The other nine topics currently use only the shared chapter opener. They do
not need empty CSS files or script modules. Import an owned component explicitly
when adding it to topic Markdown; moving it out of `Slides/components/` removes
deck-wide auto-registration. Only `TerminalCli` is currently rendered by the
deck. Retained components are not deleted merely because they are unused today.

The shared stylesheet retains cover/chapter/agenda layouts, typography, footer,
tokens, utilities and reusable presentation primitives. Legacy selector cleanup
checked all 15 deck/topic Markdown files, six retained Vue components and six
configuration files. Only dedicated selector branches absent from these sources
were removed; surviving declarations, order and media contexts were preserved.
Reusable `ot-*` patterns and uncertain strategy/context/control/maturity,
loop/harness, architecture and kanban/TDD patterns remain shared. Static source
checks cannot prove the absence of arbitrary external or runtime-generated
content; review such callers before deleting retained patterns or components.

Moves from the shared component directory and shared CSS removals use a
coordination branch because a topic PR cannot delete shared source files.
Subsequent topic-only changes use `topic/<id>`. Land the coordination PR first,
then update the topic branch to that base before opening its PR.

## Agent Editing Rules

1. Read these notes, the relevant slide markup, and nearby CSS/component rules.
2. Reuse existing classes and components. Keep shared branding in the shared
   stylesheet instead of duplicating it in slide-local markup.
3. Preserve content meaning, Czech diacritics, speaker notes, `v-click` reveal
   steps, and component behavior unless the requested change requires otherwise.
4. Avoid unrelated redesigns, font changes, new palettes, and decorative effects.
5. Account for CSS cascade order: later rules, specificity, and media queries
   can override earlier declarations. Avoid accumulating redundant overrides.
6. Follow Topic Ownership above. When a deliberate shared design change is
   needed, update the executable design contract and these notes.

## Validation

Run commands from [Slides](../Slides), using Node.js 22 as in CI. Install
dependencies and Playwright Chromium first; see the setup and production-preview
commands in the [root README](../README.md#lokální-náhled-a-kontrola).
On Windows, use `npm.cmd` if PowerShell blocks `npm.ps1`.

Keep the development server running in one terminal:

```sh
npm run start -- --port 3030
```

Run checks in a second terminal:

```sh
npm run test:content
npm run test:topic-styles
npm run test:topic-code
npm run test:duplicates
npm run build
npm run test:smoke
```

The smoke test defaults to `http://127.0.0.1:3030`; set `SLIDES_URL` if using
another port. A smoke test against the dev server does not test the built output.
CI builds the deck, runs `npm run preview` on port 4173 and points the smoke test
at that production preview. It reads the executable design contract above and checks all
text roles, heading geometry, logo artwork bounds and slide-number placement
on desktop and mobile. It also checks text clipping and footer clearance
at every reveal step, after transitions and terminal responses complete.
The terminal must display all revealed commands without scrolling or clipping;
only the active result is expanded. Tests verify transcript contents, wrapping,
card-text alignment, and no nested decorative cards or framed sections.
Content objects as
well as text must respect the 70px side margins and 48px bottom keepout. Fixed
canvas layouts use container queries rather than viewport-triggered reflow.
Automated checks are not proof of
visual fidelity. Inspect the
cover, a light slide, a dark slide, and every changed slide in the browser.
Check a 1280 x 720 viewport and a smaller viewport for text clipping, overlapping
elements, logo/footer clearance, asset loading, and every reveal/interaction
state. Verify exports separately when an export is part of the requested work.

No PowerPoint file is needed at runtime: the reused artwork lives in `public`.
