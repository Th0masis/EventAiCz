# Presentation Authoring Notes

Internal timing, reveal maps, source references, and authoring guidance for selected topic introductions. This file is not imported into the Slidev deck or shown in Presenter Mode.

## Agentic Bridge

- Opening transition: connect the morning's agent demo to what it needs for Automation Studio: a workflow, domain expertise, and tools for action and verification. Do not repeat the general definition of an agentic system. The former Community-block transition no longer applies; Community is not imported into the current deck.
- Expanded using *Webinar Agentic Engineering with B&R*, 7:34-12:12, and the supplied slide "Why B&R offers an ideal environment"; checked against `agentic-bridge-training/docs/agentic-bridge/slides/s5` and `agentic-engineering-in-automation-studio/{README.md,plugins/as-skills/README.md}`.
- The new slide about the text-based foundation adds approximately 90 seconds.
- Do not copy the original DOCX or screenshot into the repository.

## AS CLI

- Chapter introduction: 0:30. The seven visible content slides have planned durations totaling 16:00, or 16:30 with the introduction. The hidden HMI -> PLC -> HMI extension adds 2:00, bringing the total to 18:30. These are planned times, not measured rehearsal times. A 15-minute slot needs another 1:30 cut without the extension, or 3:30 with it. The 17:00 aggregate still written in the "Where to use AS CLI" speaker notes conflicts with the current slide-by-slide estimates.
- Reveal map: title and image visible immediately; no clicks or interactions.
- Sources for the block, reviewed 2026-10-28:
  - `agentic-bridge-training/docs/agentic-bridge/slides/s5/07-what-is-as-cli/{page,lang.en}.js`
  - s5/08-cli-primer, 09-capabilities, 10-how-agent-learns-as, 14-loop-verify, 15-loop-test.
  - `agentic-engineering-in-automation-studio/plugins/as-skills/README.md` and `template/AGENTS.md`.
  - `UserMeetingSK_AI/Slides/slides.md`, Agentic Bridge chapter.
  - *Webinar Agentic Engineering with B&R*, transcript and supplied screenshot: 7:34-9:38 (text sources and PVI), 16:33-18:55 (runtime test), 26:19-28:55 (HMI and permissions), 32:31-33:51 (Motion diagnostics).
- The original DOCX remains outside the repository. The transcript contains recognition errors; verify commands and technology names against training and plugin sources.
- The scope follows local sources. The installed CLI version is unknown because `as` is not on PATH; do not imply universal availability.
- Check topic diagram contrast and terminal readability with `node topics\\as-cli\\tests\\contrast.test.mjs` against a running server; use `SLIDES_URL` to change its address. Other checks and smoke testing are documented in `Slides/TESTING.md`.
- The topic test covers contrast, terminal output at a minimum of 14px in all ten states, back navigation, and reduced motion. Topic transitions use fades without movement.

## AS Repository

- Purpose and timing: 0:30. Transition from Agentic Bridge and AS CLI to what tells an agent how to proceed.
- Initial and final state: the full title and image are visible; there are no click reveals.
- Expanded using *Webinar Agentic Engineering with B&R*, especially 10:56-11:44 and 19:45-23:34. The new installation-verification example adds about two minutes and can be omitted to preserve the original slot.
- Sources checked in the local `agentic-engineering-in-automation-studio`, `plugins/as-skills/README.md`, and `skills/mappview/SKILL.md`.
- The transcript describes the demo at that time; it does not confirm current availability of every tool or compatibility with every client.
- End by transitioning to the differences between instructions, skills, and agents.