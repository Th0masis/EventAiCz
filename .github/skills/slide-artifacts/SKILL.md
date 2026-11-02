---
name: slide-artifacts
description: 'Doplnění abstraktních textových slidů o konkrétní ilustrační artefakty (dialog agent/člověk s variantami, git diff, běh testu FAIL→PASS, PR karta se schválením, graf práce, tickety/Kanban). Použij, když slide popisuje proces, workflow, role člověka a agenta, review, testování nebo schvalování jen textem; když uživatel chce slide "graficky znázornit", "ukázat na příkladu", "zkonkretizovat", "inspirovat se originálem" nebo převést tabulku/odrážky na ilustraci. Platí pro Slidev témata v Slides/topics/.'
argument-hint: 'Slide (číslo nebo class) a sdělení, které má artefakt doložit'
---

# Ilustrační artefakty na slidech

Cíl: nahradit abstraktní tvrzení ("agent se doptá", "test ověří", "člověk schválí") malou, čitelnou ukázkou, kterou publikum pozná z praxe. Vzor: slidy 73 (dialog), 75 (diff + FAIL→PASS), 76 (PR karta) tématu `orchestrace-dansko`.

Artefakt **dokládá jedno tvrzení slidu**. Není to dekorace ani nový obsah. Když tvrzení nenajdeš, artefakt nepřidávej.

## Kdy použít / nepoužít

- Ano: slide má volné místo, text popisuje krok procesu a řečník o něm mluví postupně po kliknutích.
- Ne: slide je už plný (méně než ~60 px rezervy nad footer keepout), sdělení je číslo/citace, nebo by artefakt potřeboval vysvětlení delší než samotný slide.
- Interaktivní modaly a hover nepoužívej. Statický artefakt + `v-click` stačí a funguje v exportu.

## Postup

1. **Sdělení a rezerva.** Pro každý cílový slide napiš jednou větou, co má publikum pochopit, a vyfoť konečný stav (`?clicks=<max>`) na 1280 × 720. Změř spodní hranu posledního prvku (viz [měření](./references/artifact-catalog.md#měření-rezervy)). Bez rezervy nejdřív zjednoduš, ne zmenšuj písmo.
2. **Výběr artefaktu** podle tvrzení, ne podle vkusu:

   | Tvrzení na slidu | Artefakt |
   |---|---|
   | Agent se doptá, člověk rozhodne | Dialog s variantami A/B/C a zvolenou odpovědí |
   | Agent udělá malou změnu | Diff 2–3 řádky (`-`/`+`) v jazyce domény (ST, YAML…) |
   | Test / review ověří chování | Běh testu FAIL → PASS (PASS na pozdějším kliku) |
   | Člověk schvaluje výsledek | PR karta: větev → main, kontroly, povinné schválení |
   | Paralelní práce a návrat k opravě | Zjednodušený graf práce (větve, uzel selhání, merge) |
   | Rozpad na úkoly | Tickety T1 → T2 → T3 / Kanban se stejnými ID |

   Šablony HTML a CSS: [artifact-catalog.md](./references/artifact-catalog.md). Inspiraci ber z originálu (`EventAiAndDevOps/Slides/components/AgentWorkflow.vue`), ale převáděj na statické HTML, bez kopírování interaktivity.
3. **Konzistentní příběh.** Artefakt používá stejná data jako zbytek tématu: ID ticketů, čísla (např. počet 42 → 43), název větve, formulace ("neuzavřené lahve"). Než napíšeš text, vyhledej ho grepem v `.md` tématu a sjednoť přehled, detail i poznámky.
4. **Označ ilustraci.** `aria-label="Ilustrační …"` na kontejneru a v poznámkách věta "je ilustrační". U přehledového slidu i viditelná poznámka (role `note`). Netvrď existenci skutečného repozitáře, PR ani měření.
5. **Sémantika barev** (stejná na všech slidech):
   - člověk = `var(--br-orange)`, agent = `#bdaaff`, PASS = `#7fd394`, FAIL = `#ff8a7a`, neutrální text `#c5cdd1`, rám `#3c454a`;
   - ikona vlastníka vždy `mdi-account-*` / `mdi-robot-outline`, nikdy unicode glyf.
6. **Kliky.** Artefakt se objeví spolu s krokem, který dokládá: buď uvnitř už odhaleného prvku, nebo se stejným číslem `v-click`. Vnitřní progres (PASS po FAIL) dostane další číslo `v-click`. Zvýraznění brány: `:class="{ 'is-current': $clicks >= N }"`. Počet `clicks:` ve frontmatteru neměň bez úpravy poznámek a testů.
7. **CSS.** Vše pod `.topic-<id>`, v `Slides/topics/<id>/styles.css`. Každý textový prvek nastaví typografickou roli (viz katalog). Sdílené vlastnosti seskup se stávajícími selektory (jinak `test:duplicates`). Neměň globální styly.
8. **Poznámky řečníka.** Do odstavce příslušného `[click]` doplň jednu větu, co artefakt ukazuje. Počet `[click]` zůstává stejný.
9. **Testy a dokumentace.** Pokud jsi změnil DOM, na který míří `test-smoke.mjs` / `test-content.mjs`, uprav assertion podle nového chování (neoslabuj ji). Aktualizuj reveal mapu v `Slides/topics/<id>/README.md`.
10. **Ověření** podle `.github/instructions/presentation-testing.instructions.md` a `Slides/TESTING.md`: `test:content`, `test:topic-styles`, `test:topic-code`, `test:duplicates`, `build`, `test:smoke` a vizuální kontrola každého klikového stavu. Keepout chyby řeš zmenšením mezer (margin/padding/gap), ne velikostí písma ani skrytím obsahu.

## Tvrdá pravidla (vynucují testy)

- Plátno 1280 × 720, footer keepout 48 px → obsah končí nejpozději na y = 672.
- Žádná vnořená dekorativní karta uvnitř karet z `docs/graphic-notes.md` (`structure.cards`).
- Nepoužívej třídy `.terminal-body`, `.evidence-terminal`, `.demo-steps` (spouští terminálové kontroly) ani tagy `footer` / `i` pro text.
- `letter-spacing` normální, text se nesmí ořezat ani přetéct; kód `white-space: pre` a krátké řádky.

## Výstup

Stručně: které slidy, jaký artefakt dokládá jaké tvrzení, výsledky kontrol a co bylo vizuálně ověřeno (slide + klik).
