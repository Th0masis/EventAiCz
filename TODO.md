# TODO

## Topic Ownership

- [ ] Complete the topic-by-topic migration. Move only styles, Vue components, and JavaScript/TypeScript that are verified to belong to a specific topic into `Slides/topics/<topic-id>/`; keep design tokens and genuinely shared code in their shared locations.
- [ ] Audit the remaining files in `Slides/components/`. Move topic-only components under their topic, keep components used by multiple topics shared, and remove unused components only after confirming they are not referenced by generated or external content.
- [ ] Decide whether each topic needs a `scripts/` module. Keep component-only state and behavior in its Vue component; extract reusable or substantial topic logic into `scripts/` instead of creating empty files or folders.
- [ ] Review unreferenced selectors in `Slides/style.css` before moving or deleting them. Preserve shared patterns; remove legacy rules only after proving they are unused.

## Visual Regression

- [x] Fix AS CLI typography roles after the stylesheet move. The topic text-role rules now match the `.slidev-layout.topic-as-cli` root; local badge and demo-step font metrics match the deployed slide.
- [ ] Fix slide-number line-height assertions for the affected content slides. The topic-level minor-role rule currently overrides the special slide-number line-height in the design contract.
- [ ] Reconcile the tooling workflow grid gap: the CSS uses 14px while `docs/graphic-notes.md` expects 16px. Choose the intended value, update the implementation or contract, and verify rendered slides.
- [ ] Fix the mobile agenda slide's footer keepout/overflow failures and verify at the smoke-test viewport.
- [ ] Re-run `npm run test:smoke` and confirm both desktop and mobile design-contract checks pass across all slides and reveal states.

## Merge Protection

- [ ] Configure GitHub branch protection for `main` to require `Slides validation` and `PR policy`; workflow failures do not block merging until these statuses are required.
- [ ] Confirm a topic PR with duplicate code receives line annotations and fails the required `Slides validation` check in GitHub Actions.
