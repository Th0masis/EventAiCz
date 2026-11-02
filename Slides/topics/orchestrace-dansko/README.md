# Orchestrace: feature-first walkthrough

The topic keeps one Orange Juice fault-recovery request in view throughout:
stop on a conveyor-axis fault, reject uncapped bottles, preserve the produced
count, and resume the same 100-bottle batch.

## Sequence and reveals

Slide numbers depend on the composed deck. Identify slides by their classes.

| Class | Initial content | Click groups |
| --- | --- | --- |
| `loop-slide` | Human gate and Agent / Script / CI → AS CLI → Automation Studio → CI checks | 1: DevOps, skills, and knowledge-source roles; 2: potential time/token benefit, explicitly unmeasured |
| `feature-request-slide` | Full request and illustrative machine at 42/100 | 1: fault and stop; 2: two uncapped example bottles rejected; 3: recovery, then the next good bottle advances 42 to 43 |
| `workflow-overview-slide` | Icon roadmap of three phases (Specifikace, Implementace, Ověření) with human/agent owners, roles, and handoffs | 1: clarification dialog and T1–T3; 2: simplified work graph with a failed test and retry; 3: PR waiting for human approval. Each click spotlights its phase |
| `specification-slide` | Human/agent flow, an illustrative clarification dialog (agent asks with options A–C, human chooses A), and a three-phase progress map | 1: proposed tickets T1–T3 with acceptance examples; 2: human approval and explicit dependencies |
| `vertical-modules-slide` | Two matching matrices; the horizontal row shows one ticket by layer | 1: highlight the vertical column across layers; 2: same T1–T3 on Kanban, with dependencies |
| `implementation-slide` | Ready ticket, orchestrator, and implementation subagent with an illustrative ST diff | 1: review and test subagents, failing acceptance test, and retry path; 2: passing test, integration evidence, or human escalation |
| `evaluation-slide` | Agent's test and risk evidence beside an illustrative PR card | 1: compare with the operator scenario; 2: human approves PR, returns work, or clarifies intent; the PR approval gate is highlighted |
| `hmi-testing-slide` | Operator confirms axis alarm | 1: HMI alarm and count 42; 2: reject uncapped bottles; 3: same batch resumes at 43; 4: human reviews status and remaining risk |

Speaker notes use one `[click]` marker per reveal group. The overview is a
roadmap inspired by the original AgentWorkflow: three stations with owner
icons, human/agent handoffs, and static mini artifacts (dialog, work graph, PR)
instead of interactive modals. The full roadmap is visible from the start; each
click adds one artifact and spotlights its phase. All artifacts are illustrative. All interactions work
with presentation navigation; no hover or mouse-only tabs are required.
The topic contains the chapter opener, a DevOps/AS CLI diagram, the feature
request, a workflow overview, four detail slides, HMI verification, and the
getting-started slide. The six-slide walkthrough from the feature request
through evaluation is intended for roughly seven minutes, excluding the
surrounding slides.

## Interpretation boundaries

- The conveyor, counts, tickets, and Kanban positions are illustrations, not
  live PLC data, created issues, or a functioning machine simulator.
- Crossed-out empty outlines show rejected bottle positions; they are not
  bottles left on the conveyor after clearing.
- The count excludes rejected bottles. Recovery does not reset the batch.
- T1 → T2 → T3 dependencies are explicit; the Kanban is illustrative, not a
  real board. Vertical slicing does not eliminate integration tests and is
  equally applicable to humans and agents.
- Horizontal slicing is a ticket across one layer; vertical slicing is one
  observable behavior across the layers it needs. Kanban columns still show
  work state, not slicing direction.
- The documented `BR.AS.Build.exe` command-line tool builds an Automation
  Studio project. A simulation build is not the same as running a simulator;
  command-line environment setup (including `BR.AS.PrepareBuild.exe`) and
  test/deployment steps depend on the installed version and project tooling.
- Potential time or token savings from reusable CLI workflows, skills, and
  project context are not measured guarantees. Measure them on the target task.
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
[three workflows](https://th0masis.github.io/EventAiAndDevOps/#/32),
[AS CLI build documentation](https://help.br-automation.com/#/en/6/programming/build_commandline.html),
[CLI environment setup](https://help.br-automation.com/#/en/6/programming/build_commandlinetools.html).

The test prerequisite is maintained on
`coord/orchestrace-story-validation`; merge it to `main` before preparing the
topic PR so the PR diff can remain limited to the topic sources.
