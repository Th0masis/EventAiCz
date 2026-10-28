---
layout: default
class: ot-slide chapter-slide topic-as-repository
---

<script setup>
import './as-repository/styles.css'
</script>

<img class="chapter-image" src="/topics/as-repository/chapter.jpg" alt="">

# AS repository: dejte AI<br>kontext automation experta

<!--
*Záměr a čas: 0:30. Navázat na Agentic Bridge a AS CLI; teď se zaměříme na to, co agentovi říká, jak postupovat.*
*Počáteční stav: celý titulek a obraz jsou viditelné; slide nemá klikací odhalení.*

AS Repository není nový model. Jde o sdílené postupy, pravidla a nástroje pro práci s konkrétním Automation Studio projektem. Nejdřív si ujasníme tři základní typy přizpůsobení: instrukce, skills a agenty.

*Konečný stav: stejný jako počáteční; přechod k rozdílům mezi instrukcemi, skills a agenty.*
-->

---
layout: default
class: ot-slide topic-as-repository
---

<script setup>
import './as-repository/styles.css'
</script>

# Obecná znalost<br>není znalost <span class="accent">vašeho projektu</span>

<p class="repo-lead">Model potřebuje správné podklady pro instalaci, verzi i týmové konvence.</p>

<div class="repo-columns">
	<section>
		<h2>Obecný základ</h2>
		<div class="repo-lines">
			<div><mdi-code-braces /><span>Syntaxe a běžné programovací vzory</span></div>
			<div><mdi-state-machine /><span>Principy automatizace a návrhové postupy</span></div>
			<div><mdi-text-box-search-outline /><span>Vysvětlení kódu, který dostane do kontextu</span></div>
		</div>
	</section>
	<section v-click="1">
		<h2>Konkrétní skutečnost</h2>
		<div class="repo-lines">
			<div><mdi-monitor-dashboard /><span>Vlastnosti widgetů v instalované verzi</span></div>
			<div><mdi-link-variant /><span>Vazby mezi HMI, konfigurací a PLC</span></div>
			<div><mdi-package-variant-closed /><span>Architektura a pravidla vašeho projektu</span></div>
		</div>
	</section>
</div>

<p class="repo-takeaway" v-click="2">Přesvědčivý návrh ještě není <strong>ověřené řešení.</strong></p>

<!--
*Záměr a čas: 2:00. Vysvětlit, proč se vyplatí dodat projektový a verzový kontext, aniž bychom tvrdili, že model o B&R nic neví.*
*Počáteční stav: nadpis, podtitul a levý sloupec. Skupina 1 odhalí pravý sloupec; skupina 2 závěrečné sdělení. Konečný stav: oba sloupce a takeaway.*

Model může znát obecné principy, ale nemůžeme spoléhat na úplnost a aktuálnost konkrétního API, schématu nebo instalace. I věrohodná vlastnost widgetu může být pro danou verzi chybná. Potřebujeme dodat architekturu projektu, relevantní postup a podklady pro ověření.
[CLICK]
Konkrétní detaily musí odpovídat skutečnému projektu a instalované verzi.
[CLICK]
Přesvědčivý text sám o sobě nepotvrzuje funkční řešení. Jaké části tohoto kontextu tedy můžeme připravit?
-->

---
layout: default
class: ot-slide topic-as-repository
---

<script setup>
import './as-repository/styles.css'
</script>

# Instrukce:<br><span class="accent">pravidla a hranice projektu</span>

<p class="repo-lead">Řeknou agentovi, co má respektovat napříč prací na projektu.</p>

<div class="repo-columns">
	<section>
		<h2>Co sem patří</h2>
		<div class="repo-lines">
			<div><mdi-file-tree-outline /><span>Architektura a vlastnictví souborů</span></div>
			<div><mdi-link-variant /><span>Konvence a důležité invarianty</span></div>
			<div><mdi-test-tube /><span>Požadované ověření a projektové příkazy</span></div>
		</div>
	</section>
	<section class="repo-document" v-click>
		<h3>Příklad: <code>AGENTS.md</code></h3>
		<ul>
			<li>Neměň generované výstupy.</li>
			<li>Při přidání objektu aktualizuj registraci.</li>
			<li>Metadata ověř v instalaci, nevymýšlej je.</li>
		</ul>
		<p class="repo-note">Instrukce vedou chování; samy nevynucují oprávnění.</p>
	</section>
</div>

<p class="repo-takeaway">Projektová pravidla patří <strong>k projektu a jeho týmu.</strong></p>

<!--
*Záměr a čas: 2:30. Ukázat odpovědnost instrukcí a jejich hranice.*
*Počáteční stav: nadpis, podtitul a levý seznam. Skupina 1 odhalí příklad AGENTS.md. Konečný stav: oba sloupce a takeaway.*

Instrukce popisují architekturu, konvence a důležitá omezení. V Automation Studio šabloně jde například o kořenový AGENTS.md vedle Logical, Physical a souboru projektu. AGENTS.md je soubor s instrukcemi, ne definice agenta.
[CLICK]
Příklady jsou zkrácené. Pravidla mohou agentovi připomenout kontrolu nebo zakázat určitou změnu v jeho postupu, ale sama technicky nezablokují příkaz ani přístup. To musí řešit oprávnění a skutečné kontrolní mechanismy.
Přechod: Co když kromě pravidel potřebujeme opakovatelný odborný postup?
-->

---
layout: default
class: ot-slide topic-as-repository
---

<script setup>
import './as-repository/styles.css'
</script>

# Skills:<br><span class="accent">odborný postup pro daný úkol</span>

<div class="repo-columns">
	<section>
		<h2>Skill obsahuje</h2>
		<div class="repo-lines">
			<div><mdi-book-open-page-variant-outline /><span><code>SKILL.md</code>: účel, spouštěcí popis a postup</span></div>
			<div><mdi-alert-circle-outline /><span>Pravidla technologie a typické chyby</span></div>
			<div><mdi-folder-multiple-outline /><span>Podle potřeby reference, skripty a šablony</span></div>
		</div>
	</section>
	<section v-click="1">
		<h2>Příklady podle zadání</h2>
		<div class="repo-skill-matches">
			<div><p>„Přidej stavový automat.“</p><code>structured-text</code></div>
			<div><p>„Zobraz teplotu na HMI.“</p><code>mappview</code></div>
			<div><p>„Zastav shuttle ve stanici.“</p><code>mapptrak</code></div>
		</div>
	</section>
</div>

<p class="repo-takeaway" v-click="2">Načti relevantní postup a reference. <strong>Ne celý katalog.</strong></p>

<!--
*Záměr a čas: 3:00. Vysvětlit obsah skillu, jeho objevování a postupné načítání.*
*Počáteční stav: nadpis a levý sloupec. Skupina 1 odhalí příklady úloh; skupina 2 takeaway. Konečný stav: celý obsah.*

Skill je složka s povinným SKILL.md; další materiály mohou být v references, scripts nebo assets. Popis v hlavičce pomáhá kompatibilnímu prostředí rozpoznat, kdy se skill hodí. Model může načíst skill podle relevance, člověk ho může vyvolat přímo. Samotné zobrazení skillu v seznamu ale nezaručuje jeho použití.
[CLICK]
Příklady propojují záměr uživatele s konkrétním postupem. V B&R repozitáři jsou specializované skills oddělené podle technologií a vlastnictví souborů.
[CLICK]
Detailní reference se načítají podle potřeby; skill nepřetrénuje model. Je to kontext pro aktuální práci. Chování i umístění skillů závisí na harnessu.
-->

---
layout: default
class: ot-slide topic-as-repository
---

<script setup>
import './as-repository/styles.css'
</script>

# Agent:<br><span class="accent">specializovaná role</span>

<p class="repo-lead"><code>as-project.agent.md</code> dodává roli a pracovní rámec pro projekt Automation Studio.</p>

<div class="repo-process">
	<div><span class="repo-step">1</span><h3>Porozumí zadání</h3><p>Načte pravidla a relevantní projektový kontext.</p></div>
	<div v-click="1"><span class="repo-step">2</span><h3>Vybere postup</h3><p>Použije skill pro technologii a vlastnictví změny.</p></div>
	<div v-click="2"><span class="repo-step">3</span><h3>Pracuje s nástroji</h3><p>Vyhledá symbol nebo provede podporovanou operaci.</p></div>
	<div v-click="3"><span class="repo-step">4</span><h3>Předloží důkazy</h3><p>Build, testy a změna pro lidské review.</p></div>
</div>

<p class="repo-takeaway">Agent je role pro harness. <strong>Není to další vytrénovaný model.</strong></p>

<!--
*Záměr a čas: 2:00. Odlišit agenta jako specializovanou roli od skillu a subagenta.*
*Počáteční stav: nadpis, podtitul a první krok. Skupiny 1–3 postupně odhalí kroky 2–4. Konečný stav: celý proces a takeaway.*

V repozitáři je as-project agent součástí pluginu as-skills. Agent je definice role a workflow, kterou si uživatel vybere, případně ji jiné prostředí spustí jako delegovaný úkol. Skill naopak dodává opakovatelný odborný postup. Subagent označuje delegovanou část práce; není synonymem pro skill.
[CLICK]
Agent vybere postup podle technologie a souborů, které změna vlastní.
[CLICK]
Pak může použít zpřístupněné nástroje, například jazykový server nebo CLI.
[CLICK]
Výsledek musí předložit ke kontrole. Samotná definice agenta nezaručuje, že všechny kroky opravdu proběhly.
-->

---
layout: default
class: ot-slide topic-as-repository
---

<script setup>
import './as-repository/styles.css'
</script>

# Kdy se který díl <span class="accent">zapojí?</span>

<p class="repo-lead">Přesné načítání závisí na agentním prostředí a formátu souboru.</p>

<div class="repo-glossary">
	<div><mdi-format-list-checks /><h3>Instrukce</h3><p>Trvalá nebo cílená pravidla pro projekt či soubory.</p><span>Automaticky, podle vzoru/úkolu, nebo ručně</span></div>
	<div><mdi-book-open-page-variant-outline /><h3>Skill</h3><p>Specializovaný postup dostupný agentovi.</p><span>Podle relevance, nebo přímým vyvoláním</span></div>
	<div><mdi-robot-outline /><h3>Agent</h3><p>Role, pravidla a případně omezené nástroje.</p><span>Vybere ho uživatel, nebo deleguje jiný agent</span></div>
</div>

<p class="repo-takeaway">Nejdřív vyberte <strong>opakující se problém</strong>, potom vhodný typ přizpůsobení.</p>

<!--
*Záměr a čas: 2:30. Srovnat aktivaci tří konceptů a výslovně upozornit na rozdíly mezi harnessy.*
*Počáteční stav: celý srovnávací přehled a takeaway jsou viditelné; bez klikacích skupin. Konečný stav je stejný.*

Instrukce mohou být vždy součástí kontextu, omezené na glob či připojené podle popisu úkolu nebo ručně. Skill může prostředí doporučit podle relevance, ale dostupnost ještě nezaručuje použití. Agenta si uživatel vybere nebo ho lze delegovat. To jsou příklady chování VS Code/Copilot; jiné harnessy mohou používat jiné formáty a pravidla.
Začněte pozorovaným problémem, který se opakuje. Ne každý úkol potřebuje nový soubor přizpůsobení.
-->

---
layout: default
class: ot-slide topic-as-repository repo-overview-slide
---

<script setup>
import './as-repository/styles.css'
</script>

# Co nabízí <span class="accent">AS Repository</span>

<div class="repo-ecosystem" aria-label="Moduly AS Repository">
	<svg class="repo-ecosystem-branches" viewBox="0 0 1140 52" role="presentation" aria-hidden="true">
		<path d="M570 0v20H179v32m391-32v32m0-32h391v32" />
	</svg>
	<div class="repo-ecosystem-modules">
		<section class="repo-ecosystem-module">
			<h3>as-skills</h3>
			<div class="repo-module-stats"><span class="repo-module-stat"><strong>15</strong><span>skills</span></span></div>
			<p>Rozděluje práci na specializované postupy podle úlohy a souborů projektu. Pokrývá například vývoj v Structured Textu, konfiguraci i provozní funkce.</p>
		</section>
		<section class="repo-ecosystem-module">
			<h3>mappView HMI</h3>
			<div class="repo-module-stats">
				<span class="repo-module-stat"><strong>1</strong><span>agent</span></span>
				<span class="repo-module-join" aria-hidden="true">+</span>
				<span class="repo-module-stat"><strong>1</strong><span>skill</span></span>
			</div>
			<p>Pomáhá navrhovat a převádět aplikace mappView do projektu Automation Studio. Read-only kontrola nasazené verze vrátí nálezy, ale nic sama nemění.</p>
		</section>
		<section class="repo-ecosystem-module">
			<h3>as-lsp</h3>
			<div class="repo-module-stats"><span class="repo-module-stat"><strong>1</strong><span>skill</span></span></div>
			<p>Umožňuje agentovi rychle najít definice a použití symbolů ve Structured Textu. Nenahrazuje kompilaci ani testy; změny je nutné ověřit samostatným sestavením projektu.</p>
		</section>
	</div>
</div>

<div class="repo-package-line" v-click>
	<div class="repo-template">
		<mdi-file-tree-outline />
		<div><h3>Projektová šablona</h3><p><code>AGENTS.md</code>, MCP konfigurace a Automation Studio Git nastavení.</p></div>
	</div>
	<p class="repo-package-note">Pluginy lze instalovat po částech podle potřeb týmu a harnessu.</p>
</div>

<!--
*Záměr a čas: 2:00. Ukázat hlavní stavební části repozitáře a nově přidaný as-lsp.*
*Počáteční stav: AS Repository a tři napojené moduly včetně jejich počtů. Skupina 1 odhalí projektovou šablonu a samostatnou volbu pluginů. Konečný stav: moduly i šablona.*

AS Repository nabízí doménový plugin as-skills, specializovaný plugin mappView HMI a klientský plugin as-lsp.
Počty rozlišují 15 doménových skills, agenta se skill pro mappView HMI a jeden skill pro LSP navigaci.
Detailní rozdělení doménových skills následuje na dalším slidu. Samostatně pak ukážeme pracovní postupy jednotlivých pluginů.
[CLICK]
Šablona přidává projektové instrukce, MCP konfiguraci a nastavení pro Automation Studio. Pluginy lze vybírat samostatně podle potřeb týmu a možností harnessu.
-->

---
layout: default
class: ot-slide topic-as-repository
---

<script setup>
import './as-repository/styles.css'
</script>

# 15 odborných oblastí<br><span class="accent">v as-skills</span>

<p class="repo-lead">Doménové postupy pokrývají programování, konfiguraci i provozní funkce.</p>

<div class="repo-skill-breakdown">
	<section>
		<div class="repo-skill-heading"><span class="repo-skill-count">4</span><h2>Programování a konfigurace</h2></div>
		<p>Structured Text · ANSI C · Physical · OPC UA</p>
	</section>
	<section>
		<div class="repo-skill-heading"><span class="repo-skill-count">6</span><h2>HMI a pohyb</h2></div>
		<p>mappView · Motion · Robotics · 6D · Trak · SuperTrak</p>
	</section>
	<section>
		<div class="repo-skill-heading"><span class="repo-skill-count">5</span><h2>Provozní funkce</h2></div>
		<p>AlarmX · Audit · I/O · Recipe · UserX</p>
	</section>
</div>

<div class="repo-skill-routing">
	<p class="repo-skill-routing-lead">Agent nenačítá celý katalog: podle zadání a souborů vybere postup pro danou technologii.</p>
	<div class="repo-skill-routes">
		<p><span>Structured Text</span><b>→</b><code>structured-text</code></p>
		<p><span>Úloha ACOPOS Trak</span><b>→</b><code>mapptrak</code></p>
	</div>
	<p class="repo-skill-routing-detail"><code>SKILL.md</code> určí pravidla a pořadí práce; podle potřeby následují reference, scripts/assets a required tools. Skill také stanoví, jak výsledek ověřit.</p>
</div>

<p class="repo-takeaway">Specializovaný skill vede konkrétní úkol. <strong><code>AGENTS.md</code> platí napříč projektem.</strong></p>

<!--
*Záměr a čas: 1:15. Rozdělit 15 doménových skills do tří přehledových oblastí.*
*Počáteční stav: rozdělení, směrovací příklady i takeaway jsou viditelné; slide nemá klikací odhalení. Konečný stav je stejný.*

Jde o přehledové seskupení 15 skills podle oblasti použití: čtyři programovací a konfigurační postupy, šest HMI a pohybových oblastí a pět provozních funkcí.
Agent podle zadání a souborů, které vlastní, vybere relevantní skill: například structured-text pro změnu IEC Structured Textu nebo mapptrak pro úlohu ACOPOS Trak. Nenačítá celý katalog.
Skill obsahuje účel a rozsah, nepřekročitelná pravidla, požadované nástroje, směrování do referencí, pracovní postup, hranice vůči sousedním oblastem a ověřovací bránu. Reference se načítají jen tehdy, když se jejich téma týká úkolu; scripts a assets skill používá podle potřeby.
AS-Project-Agent a AGENTS.md dávají projektu širší kontext a pravidla. Doménový skill dodá specifický postup pro technologii; konkrétní ověření může využít nástroje jako as-cli.
-->

---
layout: default
class: ot-slide topic-as-repository
---

<script setup>
import './as-repository/styles.css'
</script>

# as-skills:<br><span class="accent">od zadání k ověřenému výsledku</span>

<div class="repo-example">
	<div><span class="repo-step">1</span><h3>Vyberte roli</h3><p>Agent AS-Project-Agent načte projektové <code>AGENTS.md</code>, pokud je přítomné.</p></div>
	<div><span class="repo-step">2</span><h3>Určete vlastníka</h3><p>Podle souborů a úlohy vybere jednu z 15 doménových skills.</p></div>
	<div><span class="repo-step">3</span><h3>Proveďte postup</h3><p><code>SKILL.md</code> směruje reference, <code>as</code> CLI, MCP nebo účelový skript.</p></div>
	<div><span class="repo-step">4</span><h3>Ověřte změnu</h3><p>Build, test či cílená kontrola podle skillu; člověk reviewuje důkazy.</p></div>
</div>

<p class="repo-takeaway">Skill není nástroj. <strong>Popisuje, kdy a jak použít nástroje.</strong></p>
<p class="repo-note">Skripty jsou jen v některých skills; CLI, MCP servery i runtime jsou samostatné závislosti.</p>

<!--
*Záměr a čas: 2:00. Ukázat skutečný postup as-skills včetně rozdílu mezi instrukcí, procedurou, nástrojem a ověřením.*
*Počáteční stav: všechny čtyři kroky jsou viditelné; bez kliků. Konečný stav: stejný.*

Uživatel vybere AS-Project-Agent pro práci v Automation Studio projektu. Agent nejprve čte kořenový AGENTS.md, pokud existuje; šablona repozitáře ho do AS projektu dodává. Tato instrukce popisuje architekturu, invarianty a směrování.
Podle přesných cest a typu úlohy agent zvolí vlastnící skill, například structured-text pro Logical/*.st nebo as-physical-config pro Hardware.hw. SKILL.md je vstupní bod; delší references se načítají jen při odpovídajícím triggeru.
Nástroje jsou další vrstva: as-cli provádí podporované změny, čte metadata a spouští build; MCP se připojuje ke zdrojům/nástrojům; specifické skripty běží jen když je daný postup vyžaduje. Příklad: mapprobotics má volitelný PowerShell capture-scene-viewer.ps1. Ne každá skill má skript.
Ověření určuje vlastní skill a riziko úlohy. Build není runtime test; předání nasazení nebo test na PLC zůstává samostatný krok s lidským rozhodnutím. Branch-code-review je oddělený příkaz, ne automatická součást každého requestu.
-->

---
layout: default
class: ot-slide topic-as-repository
---

<script setup>
import './as-repository/styles.css'
</script>

# Uvnitř skillu: <span class="accent">mapprobotics</span>

<p class="repo-lead">Reálný příklad z as-skills: formát, závislosti i hranice platí pro tento konkrétní skill.</p>

<div class="repo-skill-anatomy">
	<section class="repo-skill-source">
		<h2>Výřez hlavičky <code>SKILL.md</code></h2>
		<pre><code>name: mapprobotics
metadata:
  argument-hint: "Describe the robot, hierarchy, tracking path, feature, or frame/tool change"</code></pre>
		<p class="repo-note"><code>description</code> určuje spouštěče a hranice; kompatibilita: Automation Studio 6 + mapp Motion 6.x.</p>
	</section>
	<section class="repo-skill-resources">
		<h2>Reference a soubory podle úkolu</h2>
		<div><code>references/scene-viewer-validation.md</code><span>Ověření generované scény.</span></div>
		<div><code>scripts/capture-scene-viewer.ps1</code><span>Volitelné snímky z otevřeného Scene Vieweru.</span></div>
		<div><code>assets/robot-motion-program.st</code><span>Ukázkový MotionST program.</span></div>
		<div><code>#pragma LOAD 'robot-motion-interface.typ'</code><span>Řádek z programu výše načítá typový asset, neřídí pohyb.</span></div>
	</section>
</div>

<div class="repo-skill-ops">
	<section>
		<h3>Potřebné nástroje</h3>
		<p><code>as-cli</code> + B&amp;R AS Help MCP.</p>
		<p>PowerShell 5.1+ jen pro volitelný skript snímků.</p>
	</section>
	<section>
		<h3>Ověřovací příkazy</h3>
		<p><code>as config schema list mappMotion</code> → <code>as build</code></p>
		<p>Build ověří konzistenci projektu, ne pohyb robota za běhu.</p>
	</section>
	<section>
		<h3>Na co pozor</h3>
		<p>AS 4 má jiné cesty a dostupné funkce. Ověř schéma instalované verze; needituj generované soubory.</p>
	</section>
</div>

<p class="repo-takeaway"><code>agents/as-project.agent.md</code> potřebuje zapnutý plugin a <code>as</code> na PATH; směruje práci na skill podle vlastnictví souborů.</p>

<!--
*Záměr a čas: 1:30. Ukázat konkrétní tvar skillu a rozlišit jeho obsah od závislostí agenta.*
*Počáteční stav: celý příklad je viditelný; slide nemá klikací odhalení. Konečný stav je stejný.*

Jde o konkrétní výřez z plugins/as-skills/skills/mapprobotics/SKILL.md. Hlavička obsahuje název a argument-hint; úplný soubor navíc popisuje spouštěcí situace, nepodporované oblasti a kompatibilitu s Automation Studio 6 a mapp Motion 6.x.
Reference se načítá jen při práci s generovanou scénou. capture-scene-viewer.ps1 je volitelný, připojuje se k již otevřenému Scene Vieweru a vyžaduje Windows PowerShell 5.1+. robot-motion-program.st je pojmenovaný příkladový asset, nikoli hotový produkční program.
Ukázka <code>#pragma LOAD 'robot-motion-interface.typ'</code> je převzatá z tohoto assetu a pouze načte typovou definici; nejde o příkaz pro pohyb.
mapprobotics očekává as-cli a B&R AS Help MCP. as config schema list mappMotion pomáhá ověřit povolené prvky a přípony podle instalované verze; po změně následuje as build. AS 4 cesty a dostupnost funkcí se mohou lišit. Build sám nepotvrzuje inicializaci runtime ani bezpečný pohyb.
AS-Project-Agent v agents/as-project.agent.md je vstupní bod. Potřebuje nainstalovaný a zapnutý as-skills i příkaz as dostupný na PATH; potom načte skill vlastnící daný soubor nebo operaci.
-->

---
layout: default
class: ot-slide topic-as-repository
---

<script setup>
import './as-repository/styles.css'
</script>

# Co umí plugin <span class="accent">mappView HMI?</span>

<p class="repo-lead">Od návrhu pro obsluhu po ověřené začlenění do projektu Automation Studio 6.</p>

<div class="repo-hmi-capabilities">
	<section>
		<h3>Navrhuje pro obsluhu</h3>
		<p>Uspořádá stav stroje, zpětnou vazbu, alarmy, navigaci i ovládací prvky podle úkolů operátora.</p>
	</section>
	<section>
		<h3>Popisuje návrh jako kontrakt</h3>
		<p>Anotované HTML zachytí vzhled, PLC vazby, akce, formuláře, stránky a média.</p>
	</section>
	<section>
		<h3>Integruje do projektu</h3>
		<p>Schválený návrh mapuje na existující stránky, obsahy, widgety, styly a vazby mappView.</p>
	</section>
	<section>
		<h3>Diagnostikuje sestavení</h3>
		<p>Spustí povinný <code>as build</code>, vysvětlí chyby převodu a nepředpokládá PLC logiku.</p>
	</section>
	<section>
		<h3>Posuzuje nasazené HMI</h3>
		<p>Read-only kontrola hledá problémy ve vazbách, navigaci, zdrojích, čitelnosti a rozvržení.</p>
	</section>
</div>

<p class="repo-takeaway">Návrh, sestavení a chování za běhu jsou <strong>samostatné výsledky s vlastními důkazy.</strong></p>

<!--
*Záměr a čas: 1:30. Představit hlavní schopnosti HMI pluginu bez dojmu, že samotný návrh dokazuje funkční runtime.*
*Počáteční stav: všech pět schopností a závěrečné sdělení jsou viditelné; bez kliků. Konečný stav je stejný.*

Plugin pokrývá návrh průmyslového rozhraní s ohledem na úkoly obsluhy, stav stroje, zpětnou vazbu, alarmy a bezpečnostně významné ovládací prvky. Návrh může předat jako browser-previewable HTML s výslovnými anotacemi pro převod.
V Convert mapuje schválený kontrakt do existující vizualizace mappView a zachovává nesouvisející části projektu. Povinný build diagnostikuje chyby, ale neprokazuje funkční vazby na nasazeném stroji.
Samostatná trasa Validate prohlíží potvrzené nasazení pouze read-only a vrací nálezy. Neprovádí nasazení, nezapisuje do PLC a sama neopravuje projekt.
-->

---
layout: default
class: ot-slide topic-as-repository
---

<script setup>
import './as-repository/styles.css'
</script>

# mappView HMI:<br><span class="accent">návrh, převod a read-only ověření</span>

<p class="repo-lead">Uživatel vybere specialistu a zůstává součástí rozhodování na každém kontrolním bodě.</p>

<div class="repo-binding-steps">
	<div><span class="repo-step">1</span><h3>Příprava zadání</h3><p>Uživatel vybere agenta, projekt a vymezí cíl i rozsah změny.</p></div>
	<div><span class="repo-step">2</span><h3>Design</h3><p>Agent připraví anotované HTML; uživatel návrh zkontroluje a schválí.</p></div>
	<div><span class="repo-step">3</span><h3>Convert + build</h3><p>Agent převede schválený návrh do mappView a spustí <code>as build</code>.</p></div>
	<div><span class="repo-step">4</span><h3>Validate</h3><p>Uživatel nasadí; agent s potvrzenou URL provede read-only kontrolu.</p></div>
</div>

<p class="repo-takeaway">Návrh schvaluje uživatel. <strong>Nasazení i případnou opravu potvrzuje také uživatel.</strong></p>
<p class="repo-note">Plugin je potřeba výslovně vybrat; převod vyžaduje <code>as</code>. Validace sama nic nemění ani nenasazuje.</p>

<!--
*Záměr a čas: 2:30. Projít spolupráci uživatele a agenta od zadání až po bezpečné ověření.*
*Počáteční i konečný stav: celý čtyřkrokový přehled a závěrečné sdělení jsou viditelné; slide nemá interaktivní detaily ani klikací odhalení.*

Uživatel ve svém prostředí výslovně vybere agenta MappView HMI Designer and Converter a otevře správný projekt Automation Studio 6. Agent načte svůj interní skill a zvolí trasu Design, Convert, Validate nebo Complete.
Na začátku uživatel dodá cíl, panel a relevantní podklady. Agent se doptá na chybějící rozhodnutí, například na zamýšlené chování nebo rozhraní PLC; při nevyřešeném předpokladu nepokračuje potichu.
V Design vznikne anotované HTML, které uživatel může prohlédnout a schválit. Teprve schválený kontrakt a jasný rozsah otevřou Convert. U změny existující vizualizace agent předem zmapuje relevantní stránky a artefakty; chrání nesouvisející práci.
V Convert agent upraví existující projekt pomocí dostupného `as` CLI a spustí povinný `as build`. Při chybě nebo nejasném PLC rozhraní sdělí stav a požádá o potřebný vstup; build bez chyb dokazuje pouze sestavení.
Nasazení provádí uživatel. Pro Validate předá runtime URL a potvrdí verzi; agent používá jen bezpečné read-only cesty a vrací nálezy i navrhované opravy. Jakákoli projektová oprava vyžaduje samostatný požadavek či schválení.
Plugin nedodává testovací server a nevykonává strojové příkazy. Specializovaný agent je odlišný od běžného `mappview` skillu v `as-skills`.
-->

---
layout: default
class: ot-slide topic-as-repository repo-binding-slide
---

<script setup>
import HmiWorkflow from './as-repository/components/HmiWorkflow.vue'
import './as-repository/styles.css'
</script>

# Příklad v projektu: <span class="accent">teplota na HMI</span>

<p class="repo-lead">Zadání: „Zobraz aktuální teplotu z PLC.“ Cílem je doplnit existující vizualizaci.</p>

<div class="repo-binding-flow" aria-label="Vazba procesní proměnné na hodnotu widgetu mappView">
	<div class="repo-binding-endpoint">
		<span>Existující proměnná PLC</span>
		<code>::AsGlobalPV:gTemperature</code>
	</div>
	<div class="repo-binding-link">
		<mdi-arrow-right />
		<code>HTML → *.binding</code>
	</div>
	<div class="repo-binding-endpoint">
		<span>Widget v návrhu HMI</span>
		<div class="repo-binding-value">
			<div class="repo-module-stats"><span class="repo-module-stat"><strong>23,8</strong><span>°C</span></span></div>
			<code>TemperatureValue.value</code>
		</div>
	</div>
</div>

<HmiWorkflow />

<p class="repo-takeaway">Build potvrzuje sestavení. <strong>Živou teplotu ověří až kontrola nasazeného HMI.</strong></p>
<p class="repo-note">Ilustrace: proměnná, widget i hodnota; skutečný zdroj musí agent ověřit v projektu.</p>

<!--
*Záměr a čas: 2:30. Projít příklad od výběru pluginu až k bezpečnému ověření nasazené teploty.*
*Počáteční stav: datový tok a čtyři kroky jsou viditelné. Hover nebo fokus na kroku zobrazí podrobnosti; kliknutí detail připne; Escape nebo Zavřít detail jej zavře. Nejde o Slidev klikací odhalení. Konečný stav po zavření: datový tok a kroky zůstávají viditelné.*

Uživatel otevře svůj projekt AS6, výslovně spustí MappView HMI Designer and Converter a požádá o doplnění aktuální teploty do existující vizualizace. Agent načte vlastní skill, který rozdělí práci na Design, Convert, Validate, případně úplnou trasu Complete. AGENTS.md a další projektové instrukce dodají pravidla a rozsah práce; nejde o součást HMI pluginu.
Design vytvoří náhledové anotované HTML s číselným widgetem, jednotkou °C a deklarovanou vazbou na PLC rozhraní. Uživatel zkontroluje a schválí tento kontrakt před převodem. Pokud projekt neobsahuje ověřitelný zdroj teploty nebo je třeba doplnit PLC logiku, agent se zastaví a vyžádá si rozhodnutí; PLC logiku si nevymýšlí.
V Convert agent použije dostupné `as` CLI, najde existující proměnnou a strukturu vizualizace a schválený návrh promítne do mappView artefaktů včetně vazby. `gTemperature`, cesta `::AsGlobalPV:gTemperature` a `TemperatureValue` jsou pouze názorné; konkrétní identifikátory musí odpovídat projektu. Následuje povinný `as build`; nula chyb potvrzuje build, nikoli to, že HMI zobrazuje živou hodnotu.
Po úspěšném buildu nasadí změnu člověk. Pro Validate předá agentovi runtime URL a potvrdí, že obsahuje právě tuto verzi. Agent přes Playwright ověří zobrazení a bezpečné read-only cesty a vrátí nálezy. Hodnoty neposílá, příkazy stroje neaktivuje a případné opravy provede až po samostatném schválení.
Při hoveru nebo klávesnicovém fokusu ukažte nejdřív uživatelské zadání, pak anotovaný HTML kontrakt, převod do artefaktů mappView a nakonec handoff s read-only kontrolou. Kliknutím detail připnete; Escape nebo tlačítkem Zavřít detail se vraťte k přehledu. Hodnoty v anotaci jsou ilustrativní, identifikátory je nutné potvrdit v projektu.
-->

---
layout: default
class: ot-slide topic-as-repository
---

<script setup>
import './as-repository/styles.css'
</script>

# as-lsp:<br><span class="accent">co agent zjistí o Structured Textu</span>

<p class="repo-lead">B&amp;R language server propojí dotaz na symbol se strukturou projektu — ne jen s výskytem textu.</p>

<div class="repo-hmi-capabilities">
	<section><h3>Najde definici</h3><p><code>goToDefinition</code> vede k deklaraci, i do generovaných deklarací komponentů.</p></section>
	<section><h3>Sleduje použití</h3><p><code>findReferences</code> vrátí místa použití symbolu v projektu; zahrne i deklaraci.</p></section>
	<section><h3>Vysvětlí symbol</h3><p><code>hover</code> ukáže typ, rozsah platnosti a komentář deklarace.</p></section>
	<section><h3>Hledá v symbolech</h3><p>Outline souboru i hledání symbolů napříč workspace pomáhá s orientací.</p></section>
	<section><h3>Přejmenuje jen někdy</h3><p><code>rename</code> závisí na harnessu a mění ST, ne konfigurace ani I/O mapy.</p></section>
	<section><h3>Nepotvrzuje správnost</h3><p>LSP nehlásí chyby buildu ani runtime; některé typy knihoven mohou zůstat nerozpoznané.</p></section>
</div>

<p class="repo-takeaway">Požadavky: <strong>Windows · Node.js 18+ · rozšíření <code>br-automation.st-lsp</code> · harness s podporou LSP.</strong></p>
<p class="repo-note">Harness spusťte v kořeni jednoho projektu s <code>*.apj</code>; projekt předtím alespoň jednou sestavte příkazem <code>as build</code>.</p>

<!--
*Záměr a čas: 2:00. Ukázat konkrétní symbolové operace AS-LSP, rozdíly v možnostech zápisu a ověřovací hranice.*
*Počáteční i konečný stav: všech šest schopností a požadavky jsou viditelné; bez kliků.*

Plugin nedodává vlastní language server. Přes skill popisuje agentovi, kdy a jak použít nástroj klienta; schopnosti dostupné agentovi závisí na LSP rozhraní jeho harnessu. Server umí definici, reference, hover, rename, document/workspace symbols a další operace. Claude Code má LSP nástroj read-only; Copilot CLI může rename aplikovat. Rename zasahuje jen ST, ne konfiguraci, mappView bindings ani I/O/PV mapy. Generované deklarace v Temp se nepřejmenovávají.
Windows, Node.js 18+, instalované rozšíření br-automation.st-lsp, jeden projekt v kořeni workspace a předchozí as build jsou požadavky podle README. Některé knihovní typy mohou zůstat unresolved; LSP nehlásí chyby buildu a nepotvrzuje běhové chování.
Zdroje: plugins/as-lsp/README.md (Requirements, Harness support, Limitations); plugins/as-lsp/skills/as-lsp/SKILL.md (description, Operations, Limits); plugins/as-lsp/plugin.json.
-->

---
layout: default
class: ot-slide topic-as-repository
---

<script setup>
import './as-repository/styles.css'
</script>

# Jak dotaz <span class="accent">projde</span> k agentovi?

<div class="repo-binding-steps">
	<div><span class="repo-step">1</span><h3>Agent se ptá</h3><p>Uživatel se zeptá na symbol; skill AS-LSP navede agenta k symbolovému dotazu.</p></div>
	<div><span class="repo-step">2</span><h3>Harness vybere server</h3><p>Copilot CLI čte <code>lsp.json</code>, Claude Code <code>.lsp.json</code>; jednotná přenosná konfigurace neexistuje.</p></div>
	<div><span class="repo-step">3</span><h3>Launcher předá dotaz</h3><p>Node.js spustí server z rozšíření ST-LSP a předává LSP zprávy; doplní cestu ke generovaným deklaracím.</p></div>
	<div><span class="repo-step">4</span><h3>Agent použije odpověď</h3><p>Server vrátí symbolovou informaci. Agent vysvětlí nález; změny a jejich build se řeší zvlášť.</p></div>
</div>

<p class="repo-takeaway">Tok: <strong>dotaz → LSP klient → launcher → B&amp;R ST-LSP server → strukturovaná odpověď agentovi.</strong></p>
<p class="repo-note">Server pochází z VS Code rozšíření — plugin ho nespouští bez instalace. Kořen projektu musí obsahovat <code>*.apj</code>; bez předchozího <code>as build</code> nemusí být dostupné generované deklarace.</p>

<!--
*Záměr a čas: 2:00. Vysvětlit, která vrstva zpracovává symbolový dotaz a co musí připravit uživatel.*
*Počáteční i konečný stav: celý čtyřkrokový tok, odpovědnosti i požadavky jsou viditelné; bez kliků.*

Agent nezačíná s univerzální registrací LSP. Konkrétní klient načte svou konfiguraci: Copilot CLI používá lsp.json a Claude Code .lsp.json; ostatní harnessy mohou potřebovat vlastní konfiguraci nebo nemusí LSP podporovat. Skill nese instrukce pro práci se symboly, server poskytuje dotazy.
Node.js launcher spouští language-server.js z nainstalovaného rozšíření br-automation.st-lsp, přeposílá zprávy přes stdio a po inicializaci posílá cestu ke generovaným AS deklaracím podle aktivní konfigurace. Plugin samotný server neobsahuje.
Server má jeden projekt v kořeni workspace; projekt musí být sestaven alespoň jednou. Pokud globální symboly nejsou rozpoznané, ověřte aktivní konfiguraci a vygenerované deklarace; po as build obnovte/reloadujte LSP.
Zdroje: plugins/as-lsp/README.md (Requirements, Harness support, How the launcher works, Troubleshooting); plugins/as-lsp/lsp.json; plugins/as-lsp/.lsp.json; plugins/as-lsp/scripts/st-lsp-launcher.js.
-->

---
layout: default
class: ot-slide topic-as-repository
---

<script setup>
import './as-repository/styles.css'
</script>

# Situace: <span class="accent">kde se používá gAlarmXCore?</span>

<p class="repo-lead">Modelový příklad: před úpravou alarmové logiky potřebuji znát typ a všechna použití symbolu.</p>

<div class="repo-example">
	<div><span class="repo-step">1</span><h3>Ověřit symbol</h3><p>Agent použije <code>hover</code> a <code>goToDefinition</code>; ověří typ a původ <code>gAlarmXCore</code>.</p></div>
	<div><span class="repo-step">2</span><h3>Zmapovat dopad</h3><p><code>findReferences</code> vrátí deklaraci i místa použití, která má uživatel před změnou posoudit.</p></div>
	<div><span class="repo-step">3</span><h3>Rozlišit generovaný kód</h3><p>Pokud deklarace leží v <code>Temp/Includes/AS_TempDecl/</code>, nepřejmenovávat ji; vzniká z konfigurace.</p></div>
	<div><span class="repo-step">4</span><h3>Ověřit sestavení</h3><p>Chybí-li deklarace, spusťte <code>as build</code> a obnovte LSP. Po změně znovu sestavte projekt.</p></div>
</div>

<p class="repo-takeaway">Výsledek: <strong>agent ukáže typ a rozsah použití; inženýr rozhodne o změně.</strong></p>
<p class="repo-note">Příklad ilustruje situaci popsanou v dokumentaci pluginu; nalezené soubory a použití vždy ověřte ve vlastním projektu.</p>

<!--
*Záměr a čas: 1:30. Uzavřít AS-LSP krátkým modelovým průchodem od otázky k důkazu a bezpečné hranici.*
*Počáteční i konečný stav: všechny čtyři kroky a upozornění na modelový příklad jsou viditelné; bez kliků.*

Zeptejte se: „Kde se používá gAlarmXCore a jaký má typ?“ Agent nejprve ověří symbol přes hover/definici, pak vyhledá reference. Pokud definici najde v Temp/Includes/AS_TempDecl/, jde o generovanou deklaraci komponenty; nepřejmenovávat ji, změnit zdroj konfigurace a ST použití pouze podle záměru projektu. Pokud globální symbol chybí, ověřit, zda už proběhl as build a zda je aktivní konfigurace dostupná launcheru; pak LSP reloadnout a dotaz zopakovat.
Názvy a očekávaný výsledek jsou modelový scénář vycházející z README pluginu, nikoli výsledek skutečně otevřeného zákaznického projektu. findReferences není kompilace. Po úpravě as build ověřuje sestavení, ne běh systému.
Zdroje: plugins/as-lsp/README.md (generated declarations, Troubleshooting); plugins/as-lsp/skills/as-lsp/SKILL.md (Workflow, Limits).
-->

---
layout: default
class: ot-slide topic-as-repository
---

<script setup>
import './as-repository/styles.css'
</script>

# Skill, as-cli a MCP<br>mají <span class="accent">odlišné role</span>

<div class="repo-three-columns">
	<section>
		<mdi-book-open-page-variant-outline />
		<h2>Skill</h2>
		<h3>Jak postupovat</h3>
		<p>Odborné kroky, pravidla technologie a ověření.</p>
	</section>
	<section v-click="1">
		<mdi-console-line />
		<h2>as-cli</h2>
		<h3>Co provést a zjistit</h3>
		<p>Podporované operace Automation Studia, metadata a build.</p>
	</section>
	<section v-click="2">
		<mdi-book-search-outline />
		<h2>MCP</h2>
		<h3>Jak připojit zdroje</h3>
		<p>Protokol pro nástroje a zdroje; není sám o sobě znalostní bází.</p>
	</section>
</div>

<p class="repo-takeaway" v-click="3">Postup, nástroj a zdroj informací jsou <strong>různé vrstvy.</strong></p>

<!--
*Záměr a čas: 2:00. Krátce odlišit znalostní postup, vykonávání operací a protokol nástrojů.*
*Počáteční stav: skill. Skupina 1 odhalí as-cli, skupina 2 MCP a skupina 3 závěrečné sdělení. Konečný stav: všechny tři role.*

Skill říká, jak na úlohu jít; může předepsat použití konkrétního nástroje.
[CLICK]
as-cli poskytuje podporované operace nad projektem a Automation Studiem. Nejde o agenta a jeho příkazy mohou spouštět člověk, agent nebo automatizace.
[CLICK]
MCP je protokol, kterým se harness může připojit k nástrojům či zdrojům. Konkrétní znalostní server z něj nedělá obecnou databázi ani záruku správnosti.
[CLICK]
Tyto vrstvy se doplňují. Rozsah dostupných příkazů a serverů závisí na konkrétním prostředí.
-->

---
layout: default
class: ot-slide topic-as-repository
---

<script setup>
import './as-repository/styles.css'
</script>

# Vlastní přizpůsobení:<br><span class="accent">projekt, nebo uživatel?</span>

<div class="repo-columns">
	<section>
		<h2>Pro celý projekt a tým</h2>
		<div class="repo-lines">
			<div><mdi-source-repository /><span><code>AGENTS.md</code>: sdílená architektura a invarianty</span></div>
			<div><mdi-file-document-outline /><span><code>.github/instructions/*.instructions.md</code>: pravidla pro úkoly či soubory</span></div>
			<div><mdi-book-open-page-variant-outline /><span><code>.agents/skills/&lt;name&gt;/SKILL.md</code>: sdílený pracovní postup</span></div>
			<div><mdi-robot-outline /><span><code>.github/agents/*.agent.md</code>: týmová role</span></div>
		</div>
	</section>
	<section v-click>
		<h2>Pro sebe napříč projekty</h2>
		<div class="repo-lines">
			<div><mdi-account-outline /><span><code>~/.copilot/copilot-instructions.md</code>: osobní výchozí pravidla</span></div>
			<div><mdi-file-document-outline /><span><code>~/.copilot/instructions/</code>: osobní cílené instrukce</span></div>
			<div><mdi-book-open-page-variant-outline /><span><code>~/.copilot/skills/</code>: osobní opakované postupy</span></div>
			<div><mdi-robot-outline /><span><code>~/.copilot/agents/</code>: osobní specializované role</span></div>
		</div>
	</section>
</div>

<p class="repo-takeaway">Sdílená pravidla do projektu. <strong>Osobní preference do uživatelského profilu.</strong></p>
<p class="repo-note">Cesty jsou příklady pro Copilot/VS Code; jiné harnessy mohou používat jiné formáty.</p>

<!--
*Záměr a čas: 2:30. Dát posluchačům jednoduché rozhodnutí, kam vlastní pravidla a postupy uložit.*
*Počáteční stav: projektová oblast. Skupina 1 odhalí uživatelský profil. Konečný stav: obě varianty, takeaway a poznámka k harnessům.*

Pravidla architektury a týmového workflow ukládejte do repozitáře, aby byla verzovaná a dostupná spolupracovníkům. Osobní styl práce, který nechcete vnucovat týmu, patří do uživatelského profilu.
[CLICK]
Pro Copilot/VS Code jsou zde uvedeny příklady cest pro instrukce, skills a agenty. Přesná umístění a podpora závisí na harnessu; nejdřív ověřte, co vybrané prostředí skutečně načítá.
Začněte pravidlem, které řeší opakující se problém. Vyzkoušejte ho na reprezentativním úkolu a zkontrolujte, zda bylo načteno i následováno.
-->

---
layout: default
class: ot-slide topic-as-repository
---

<script setup>
import './as-repository/styles.css'
</script>

# Sdílené know-how.<br><span class="accent">Odpovědnost zůstává.</span>

<div class="repo-columns">
	<section>
		<h2>Co přizpůsobení přináší</h2>
		<div class="repo-lines">
			<div><mdi-account-multiple-outline /><span>Méně opakovaného vysvětlování</span></div>
			<div><mdi-source-branch /><span>Verzované postupy a pravidla projektu</span></div>
			<div><mdi-format-list-checks /><span>Konzistentnější výchozí pracovní postup</span></div>
		</div>
	</section>
	<section v-click>
		<h2>Co tím nenahrazujeme</h2>
		<div class="repo-lines">
			<div><mdi-shield-lock-outline /><span>Oprávnění a ochranu dat</span></div>
			<div><mdi-test-tube /><span>Build, testy a ověření chování</span></div>
			<div><mdi-account-check-outline /><span>Lidské review a schválení nasazení</span></div>
		</div>
	</section>
</div>

<p class="repo-takeaway">Začněte malým pravidlem. <strong>Ověřte, že skutečně pomáhá.</strong></p>

<!--
*Záměr a čas: 1:00. Uzavřít přínosem, hranicemi a konkrétním dalším krokem.*
*Počáteční stav: levý sloupec. Skupina 1 odhalí odpovědnost a kontroly. Konečný stav: oba sloupce a takeaway.*

Sdílené a osobní přizpůsobení pomáhá udržet pravidla a postupy dostupné. Nezaručuje totožné výstupy ani samo o sobě bezpečný provoz.
[CLICK]
Oprávnění, ochrana dat, build, testy, lidské review a schválení nasazení zůstávají samostatné. Začněte jedním opakujícím se problémem a ověřte změnu na konkrétním úkolu.

*Konečný stav: jsou vidět přínosy, nezastupitelné kontroly a závěrečné doporučení.*
-->