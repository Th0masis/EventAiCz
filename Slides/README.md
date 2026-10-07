# Slidev Presentation

## Design Notes For Agents

Before editing slide graphics, read the
[graphic specifications](../docs/graphic-notes.md) for the palette, typography,
layouts, assets, and validation checklist.

## PowerPoint Template Design

The shared styling in `style.css` is based on
`../OneDrive_1_10-7-2026/B&R Template.potx`: ABBvoice typography, the
`#FF8800` / `#FFA947` orange palette, neutral grays, white slide backgrounds,
and the original bottom-right B&R logo. The cover uses the template's gray
wave artwork. Existing dark technical slides retain a flat charcoal variant
for diagram and code contrast; content and interactions are unchanged.

The original artwork is extracted into `public/br-template-logo.svg` and
`public/br-template-wave.png`. No PowerPoint file is needed at runtime.

ABBvoice is used as a locally installed font, with ABBvoice Office and Arial
fallbacks. For the same typography on another machine or during export,
install ABBvoice there under your organization's font license. Font files
are not bundled with this deck.

## Preview And Check

Run these commands from this folder (use `npm.cmd` on Windows if PowerShell
blocks `npm.ps1`):

```sh
npm install
npm run start -- --port 3030
npm run test:content
npm run test:smoke
npm run build
```
