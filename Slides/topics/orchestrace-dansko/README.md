# Orchestrace: feature-first walkthrough

The topic keeps one Orange Juice fault-recovery request in view throughout:
stop on a conveyor-axis fault, reject uncapped bottles, preserve the produced
count, and resume the same 100-bottle batch.

## Sequence and reveals

Slide numbers depend on the composed deck. Identify slides by their classes.

| Class | Initial content | Click groups |
| --- | --- | --- |
| `feature-request-slide` | Full request and illustrative machine at 42/100 | 1: fault and stop; 2: two uncapped example bottles rejected; 3: recovery, then the next good bottle advances 42 to 43 |
| `specification-slide` | Human/agent clarification flow and two open questions | 1: three proposed tickets and acceptance examples; 2: human approval and dependencies |
| `vertical-modules-slide` | Horizontal tasks by layer | 1: vertical outcome and illustrative Kanban; 2: ticket scope, not board orientation |
| `implementation-slide` | Plan and smallest implementation | 1: review and test; 2: retry or integration into the feature branch |
| `evaluation-slide` | Check evidence against the original intent | 1: operator scenario; 2: human PR decision |

Speaker notes use one `[click]` marker per reveal group. All interactions work
with presentation navigation; no hover or mouse-only tabs are required.
The existing chapter, DevOps loop, HMI verification, and getting-started slides
remain in the topic. The five-slide walkthrough is intended for roughly six
minutes of spoken explanation, excluding the existing surrounding slides.

## Interpretation boundaries

- The conveyor, counts, tickets, and Kanban positions are illustrations, not
  live PLC data, created issues, or a functioning machine simulator.
- Crossed-out empty outlines show rejected bottle positions; they are not
  bottles left on the conveyor after clearing.
- The count excludes rejected bottles. Recovery does not reset the batch.
- Ticket dependencies are explicit. Vertical slicing does not eliminate
  integration tests and is equally applicable to humans and agents.
- Axis fault recovery is not an emergency stop or safety-function validation.
  Real motion permissions and recovery sequencing require machine-specific design.
- Passing checks permits integration into a feature branch, not automatic human
  approval, release authorization, or deployment to a real machine.

## Optional CI/CD demonstration

The previous tag-and-release narration is no longer part of the feature-request
slide. If a separate live CI/CD demo is desired, use the existing demonstration
project in `EventAiAndDevOps/DevOps/DevOpsDemo`: prepare the release tag according
to that project's instructions, inspect its GitHub Actions workflow, and show
the build, tests, packaged artifact, and traceability. This topic does not create
tags, run that pipeline, or validate its deployment configuration.

## Validation

Follow [the presentation testing guide](../../TESTING.md). From `Slides/`:

```powershell
npm.cmd run test:content
npm.cmd run test:topic-styles
npm.cmd run test:topic-code
npm.cmd run test:duplicates
npm.cmd run build
$env:SLIDES_TOPIC = 'orchestrace-dansko'
npm.cmd run test:smoke
Remove-Item Env:SLIDES_TOPIC
```

Set `SLIDES_URL` when the running development server is not on port 3030.
Inspect all reveal states at 1280 x 720 and check speaker-note highlighting in
Presenter Mode. The shared content and smoke regression update lives on
`coord/orchestrace-story-validation`; merge that prerequisite into `main` before
the topic PR so its final diff contains only this topic's sources.

Content references:
[feature request](https://th0masis.github.io/EventAiAndDevOps/#/16?clicks=1),
[three workflows](https://th0masis.github.io/EventAiAndDevOps/#/32).
