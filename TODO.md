# TODO

## Topic Ownership

- [x] Complete the verified topic-by-topic migration. AS CLI owns its stylesheet; all six Vue components and their state/styles live under their owning topic. Other topics currently need only shared chapter layouts.
- [x] Audit `Slides/components/`. No shared components remain there; unused topic components are retained rather than deleted without external-reference evidence.
- [x] Decide whether each topic needs a `scripts/` module. Current behavior is component-only, so no empty modules or folders were added.
- [x] Review unreferenced selectors in `Slides/style.css`. Remove proven-unused dedicated legacy rules; retain reusable and uncertain patterns documented in `docs/graphic-notes.md`.

## Visual Regression

- [x] Fix AS CLI typography roles after the stylesheet move. The topic text-role rules now match the `.slidev-layout.topic-as-cli` root; local badge and demo-step font metrics match the deployed slide.
- [x] Fix slide-number line-height: preserve the special minor-role leading of 1 in AS CLI.
- [x] Reconcile the tooling workflow grid contract: 0px row gap and 16px column gap; verify the rendered slide.
- [x] Fix mobile agenda typography/time-column overflow and verify footer keepout at the smoke-test viewport.
- [x] Re-run `npm run test:smoke`: all 24 slides and reveal states pass desktop/mobile design-contract checks.

## Merge Protection

- [ ] Configure GitHub branch protection for `main` to require `Slides validation` and `PR policy`; workflow failures do not block merging until these statuses are required.
- [ ] Confirm a topic PR with duplicate code receives line annotations and fails the required `Slides validation` check in GitHub Actions.

Local duplicate fixtures fail with real Vue file/line annotations. GitHub PR
validation and required-status configuration still need administrator access;
no branches or commits were pushed during this migration.
