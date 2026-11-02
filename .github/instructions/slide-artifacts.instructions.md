---
description: "Use when editing or redesigning Slidev topic slides that explain a process, workflow, human/agent roles, review, testing, or approval. Prefer concrete illustrative artifacts over abstract text."
applyTo: "Slides/topics/**"
---

# Ilustrační artefakty ve slidech

- Když slide popisuje proces jen textem ("agent se doptá", "test ověří", "člověk schválí") a má volné místo, doplň malý ilustrační artefakt podle skillu [slide-artifacts](../skills/slide-artifacts/SKILL.md): dialog s variantami, diff, FAIL→PASS, PR kartu s lidskou bránou, graf práce nebo tickety.
- Jeden artefakt = jedno tvrzení slidu. Bez tvrzení nepřidávej nic; interaktivní modaly a hover nepoužívej.
- Data artefaktu (ID ticketů, čísla, větve, formulace) musí sedět s ostatními slidy tématu i s poznámkami řečníka.
- Každý artefakt označ jako ilustrační (`aria-label` + věta v poznámkách); netvrď skutečný repozitář, PR ani měření.
- Barvy rolí drž jednotně: člověk oranžová (`var(--br-orange)`), agent `#bdaaff`, PASS `#7fd394`, FAIL `#ff8a7a`; ikony jen `mdi-*`.
- Artefakt se objeví na kliku kroku, který dokládá; počet `[click]` v poznámkách se nemění.
- Obsah musí končit nad footer keepout (y ≤ 672 na plátně 720). Při kolizi zmenšuj mezery, ne písmo.
- Ověř podle [presentation-testing.instructions.md](./presentation-testing.instructions.md).
