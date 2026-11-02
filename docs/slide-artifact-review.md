# Návrh vizualizací: Agentic Bridge, AS CLI a AS Repository

Záznam celého výstupu review z 2. 11. 2026 před implementací. Čísla slidů
a odkazy na zdroje odpovídají tehdejší prezentaci. Záznam zachovává původní
hodnocení; není potvrzením stavu po následných úpravách.

## Verdikt

**[Likely · posouzeno] Největší problém není nedostatek obrázků, ale opakování stejné kompozice:** nadpis → několik textových bloků → závěrečná věta. Nejvýraznější je to v AS Repository. Doporučuji **část textu nahradit konkrétní ukázkou**, ne přidávat další obsah pod něj.

**[Certain] Prošel jsem všech 43 slidů těchto bloků, včetně jejich finálních renderů na 1280 × 720.** Níže používám aktuální čísla prezentace 10–52. Nic jsem neupravoval.

## Kontroly

**[Certain] PASS:** `npm.cmd run test:content`, `test:topic-styles`, `test:topic-code`, `test:duplicates` a `test:smoke-diagnostics`.

Cílený `npm.cmd run test:smoke` prošel pro všechna tři témata: **14 + 9 + 20 slidů**, včetně klikacích stavů. Bylo nutné nastavit `$env:SLIDES_URL='http://localhost:3030'`; výchozí adresa přes `127.0.0.1` odmítala spojení.

## Kde bych text nahradil vizualizací

Následující návrhy jsou **[Likely · posouzeno]**, nikoli funkční závady. **A = největší přínos, B = druhá vlna.**

### Agentic Bridge

| Priorita | Slide | Konkrétní návrh a jeho účel |
|---|---|---|
| **A** | [15 – Jak se z požadavku stane ověřená změna](../Slides/topics/as-agentic-bridge.md#jak-se-z-požadavku-stane-ověřená-změna) | **Krátký ST diff → výsledek testu → lidská schvalovací brána.** Současný diagram pojmenovává kroky, ale neukazuje jejich výstupy. Pod kroky zobrazit jednu drobnou změnu počítadla, očekávání testu resetu a předání k review. |
| **A** | [19 – RAG](../Slides/topics/as-agentic-bridge.md#rag-odpověď-opřená-o-dohledané-podklady) | **Dotaz → nalezená pasáž s verzí a zdrojem → odpověď s odkazem na pasáž.** Nahradit tři obecné řádky konkrétní ukázkou. Na následujícím slidu už je proces Knowledge Hubu; tady má být vidět, **co jsou dohledané podklady**. |
| **B** | [12 – Automation Studio má textový základ](../Slides/topics/as-agentic-bridge.md#automation-studio-má-textový-základ) | **Výřez stromu projektu + několik řádků ST + krátký výstup nástroje.** Ukázat čitelný materiál, se kterým agent skutečně pracuje. Tím se rozbije shodný vzhled se slidem 11. |
| **B** | [13 – Model, harness, tools a skills](../Slides/topics/as-agentic-bridge.md#model-harness-tools-a-skills) | **Mapa čtyř rolí s vyznačením příspěvku B&R** místo široké tabulky. Zkrátit seznamy dodavatelů na příklady. Cílem je rychle pochopit rozdělení odpovědností, ne přečíst katalog značek. |
| **B** | [18 – MCP a API](../Slides/topics/as-agentic-bridge.md#mcp-a-api-propojené-vrstvy-ne-náhrady) | **Dvě komunikační cesty:** AI aplikace ↔ MCP server ↔ API služby a běžná aplikace ↔ API služby. Zachovat příklad objednávky. Obrázek vztahu vysvětlí „nejsou náhrady“ rychleji než dvě podobné textové poloviny. |

**Ponechat bez další grafiky:** 10, 11, 14, 16, 17, 20, 21, 22 a 23. Architektura, výběr nástroje a Knowledge Hub už vizuální mechanismus mají; katalog nástrojů může zůstat tabulkou.

### AS CLI

**[Likely · posouzeno] Tento blok potřebuje nejméně zásahů.** Už obsahuje srovnání GUI/CLI, diagram operací, číselný příklad i terminál.

| Priorita | Slide | Konkrétní návrh a jeho účel |
|---|---|---|
| **A** | [30 – Test HMI: klik musí dojít až do PLC](../Slides/topics/as-cli.md#test-hmi-klik-musí-dojít-až-do-plc) | **Miniatura HMI s Resetem → nezávislé čtení PLC → hodnota zpět na HMI.** Nahradit část popisů konkrétními pozorováními. Zvlášť ukázat kontrolu oprávnění hosta. Publikum uvidí rozdíl mezi kliknutím a důkazem změny. |
| **B** | [31 – Kde AS CLI použít a co neprokážeme](../Slides/topics/as-cli.md#kde-as-cli-použít-a-co-tím-neprokážeme) | **Karta důkazů před schválením:** build doložen / čtení po resetu chybí / schválení čeká. Je to vhodný artefakt lidské brány — nikoli automatická zelená karta „všechno prošlo“. |
| **B** | [27 – Jak agent zjistí správný příkaz](../Slides/topics/as-cli.md#jak-agent-zjistí-správný-příkaz) | **Krátký výřez nápovědy vedle vybraného příkazu.** Nahradit obecnou formulaci o syntaxi ukázkou, odkud ji agent získal. Nepřidávat další celý terminál. |

**Ponechat:** 24, 25, 26, 28, 29 a 32.

**[Certain] Otazník na slidu 28 je důležitý:** v přepisu chybí měření po resetu. Nesmí se kvůli vizuálnímu efektu změnit na naměřenou nulu nebo PASS.

### AS Repository

| Priorita | Slide | Konkrétní návrh a jeho účel |
|---|---|---|
| **A** | [41 – as-skills: od zadání k výsledku](../Slides/topics/as-repository.md#as-skills-od-zadání-k-ověřenému-výsledku) | **Jeden úkol jako sled artefaktů:** zadání → zvolený skill → malý diff → ověřovací výstup. Nahradit obecnou čtyřpolní mřížku. Tady má publikum poprvé vidět, co použití skillu prakticky změní. |
| **A** | [44 – mappView: návrh, převod a ověření](../Slides/topics/as-repository.md#mappview-hmi-návrh-převod-a-read-only-ověření) | **Dvě vodorovné dráhy: člověk / agent.** Mezi nimi návrh HTML, schválení návrhu, převod a build, uživatelské nasazení a read-only nálezy. Zřetelné brány ukážou, **kde agent musí čekat na člověka**. |
| **A** | [48 – Kde se používá gAlarmXCore?](../Slides/topics/as-repository.md#situace-kde-se-používá-galarmxcore) | **Ilustrační pohled editoru:** zvýrazněný symbol, výsledek dotazu na deklaraci a seznam referencí. Generovanou deklaraci označit „neupravovat přímo“. Slide konečně ukáže odpověď na otázku v titulku, nejen postup hledání. |
| **B** | [36 – Skills](../Slides/topics/as-repository.md#skills-odborný-postup-pro-daný-úkol) | **Strom složky skillu** s hlavním dokumentem, referencemi a volitelnými skripty/assets. Zvýraznit jen větev relevantní k jednomu zadání. Nahradit levý seznam, pravé přiřazení úloh zachovat. |
| **B** | [43 – Co umí plugin mappView HMI](../Slides/topics/as-repository.md#co-umí-plugin-mappview-hmi) | **Jedna HMI maketa s několika anotacemi:** stav stroje, alarm, navigace, ovládání. Vedle stručně kontrakt, integrace a ověření. Pět textových schopností získá společný konkrétní předmět. |
| **B** | [47 – Jak dotaz projde k agentovi](../Slides/topics/as-repository.md#jak-dotaz-projde-k-agentovi) | **Sekvenční diagram** agent → klient harnessu → launcher → ST-LSP a odpověď zpět. Konfigurační odlišnosti harnessů připsat k příslušnému místu. Současný text popisuje vztahy, které by měly být nakreslené. |
| **B** | [51 – Projekt, nebo uživatel?](../Slides/topics/as-repository.md#vlastní-přizpůsobení-projekt-nebo-uživatel) | **Dva stromy souborů: repozitář a uživatelský profil.** Stejnou barvou propojit odpovídající typy přizpůsobení. Nahradit seznam cest, nepřidávat třetí vysvětlující blok. |

**Ponechat:** 33–35, 37–40, 45, 46, 49, 50 a 52. **Na 42 nic nepřidávat** — už obsahuje skutečný výřez skillu a je hustý.

## Co funguje a co hlídat

- **[Likely · posouzeno]** Kapitolové fotografie už poskytují vizuální předěly; další ilustrační fotky mezi technické slidy nepotřebuješ.
- **[Likely · posouzeno]** Nejlepší vzor je konkrétnost slidu 28: zadání, proměnná, hodnota a chybějící důkaz.
- **[Certain · měřeno]** Slidy **28, 42 a 49** mají před footer keepout jen přibližně **3, 11 a 25 px** rezervy. Případná grafika musí **nahradit obsah**, ne se přilepit dolů.

Nové artefakty bych držel statické, případně odhalované se souvisejícím krokem. Každý označit jako ilustraci; žádné vymyšlené skutečné výsledky, PR nebo měření.

## Neověřeno

Ručně jsem prohlédl finální stavy všech 43 slidů a vybrané detaily ve větším zobrazení. **Všechny mezistavy, Presenter Mode ani čitelnost na skutečném projektoru jsem ručně neověřoval.** Klikací stavy ověřil smoke test.

## Top 5 pro první úpravu

**[Likely · doporučení]** Začal bych těmito slidy:

1. **44:** člověk × agent a schvalovací brány.
2. **48:** skutečně viditelný výsledek hledání symbolu.
3. **15:** diff, test a předání člověku.
4. **19:** dohledaná pasáž a odpověď se zdrojem.
5. **41:** jeden konkrétní průchod skillem.

Tato pětice přinese **pět odlišných způsobů vysvětlení**, ne dalších pět podobných diagramů.

## Realizace po zpětné vazbě autora

Původní návrh výše je archivovaný beze změny. Autor odmítl provedení s dalšími
textovými panely a schválil grafický vzorek slidu 15 jako směr pro celou pětici.
Výsledkem proto nejsou přidané terminály ani další bloky textu:

| Slide | Výsledná grafika | Odhalování |
|---|---|---|
| 15 | Pět velkých symbolů, směrové šipky, návratová smyčka a oddělená lidská brána. | Kliky 1–5 zvýrazní ikonu, kruh, číslo a název oranžově; klik 6 vrátí neutrální celek. |
| 19 | Dokumenty → vybraná pasáž → odpověď s citací S1. | Původní čtyři skupiny; kliky 1–3 mají oranžový symbol i nadpis, klik 4 neutrální diagram a závěr. |
| 41 | Kniha postupu → soubor změny → kontrolní seznam build + test. | Statický přehled; čekající lidské review zůstává viditelné. |
| 44 | Šest symbolů propojených mezi drahami člověk/agent; dvě lidské brány. | Statický přehled, bez nových kliků. Validate zůstává jen čtení. |
| 48 | Symbol se větví ke generované deklaraci se zámkem a dvěma ST použitím. | Statický graf; nejde o tok vykonávání programu. |

Technické podrobnosti jsou v poznámkách řečníka. Zůstává označení ilustrace;
grafika neprokazuje skutečný build, test, nález souboru ani schválení nasazení.

### Ověření výsledné podoby

Příkazy byly spuštěny z `Slides/` na obou oddělených tematických větvích:

- `npm.cmd run test:content` — PASS.
- `npm.cmd run test:topic-styles` — PASS.
- `npm.cmd run test:topic-code` — PASS.
- `npm.cmd run test:duplicates` — PASS.
- `npm.cmd run build` — PASS.
- `node topics\as-repository\tests\artifacts.test.mjs` — PASS na větvi Repository.
- `node topics\as-agentic-bridge\tests\artifacts.test.mjs` — PASS na větvi Bridge.
- `$env:SLIDES_URL = 'http://localhost:3030'; npm.cmd run test:smoke` — PASS,
  všech 79 slidů na větvi Repository.
- `$env:SLIDES_URL = 'http://localhost:3031'; npm.cmd run test:smoke` — PASS,
  všech 79 slidů na větvi Bridge.

Vizuálně byly zkontrolovány slide 15 v klicích 0–6, slide 19 v klicích 0–4,
statické slidy 41/44/48 i Presenter Mode všech pěti. Obsah se vejde do plátna
1280 × 720, text není oříznutý. Skutečný projektor ani délka přednesu ověřeny nebyly.

Smoke odhalil nesprávnou typografickou roli a řádkování cest a symbolu;
zdroj byl opraven bez oslabení testu. Jeden další běh skončil timeoutem načítání
písem na nezměněném slidu 74 (desktop 1280 × 720, klik 0, exit 1;
`Slides/artifacts/slides/desktop/failure-074-click-0.png`). Izolovaný opakovaný
běh prošel. Po studeném startu Bridge jednou vypršel `page.goto` na slidu 15
(exit 1, screenshot se neukládal); ověření dostupnosti, úplný smoke a opakovaný
cílený test poté prošly.

### Oddělení změn

- `topic/as-repository`: `db5f73c` a následná grafická revize `39c1b04`.
- `topic/as-agentic-bridge`: `c93c6c2`.
- `coord/slide-artifact-review`: pouze tento archiv a záznam realizace.

Žádný sdílený styl, komponenta ani chování tématu AS CLI nebyly změněny.
