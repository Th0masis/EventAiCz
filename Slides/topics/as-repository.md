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
1 minuta. Navazujeme na Agentic Bridge a AS CLI, které už představily nástroje.
Nyní řešíme, podle čeho se agent rozhoduje a jak mu předat znalosti B&R i našeho projektu.
Neinstalujeme jiný model ani do něj nenahráváme nové znalosti natrvalo.
Přidáváme čitelný kontext, odborné postupy a pravidla, která lze sdílet a aktualizovat.
Tyto pluginy a skills používám i ve svém pracovním prostředí.
-->

---
layout: default
class: ot-slide topic-as-repository
---

<script setup>
import './as-repository/styles.css'
</script>

# Proč samotný ChatGPT<br>nestačí na <span class="accent">B&R projekt</span>

<p class="repo-lead">Obecná znalost programování není znalost vaší instalace.</p>

<div class="repo-columns">
	<section>
		<h2>Model může znát princip</h2>
		<div class="repo-lines">
			<div><mdi-code-braces /><span>Syntaxe a běžné programovací vzory</span></div>
			<div><mdi-state-machine /><span>Stavové automaty a rozdělení úlohy</span></div>
			<div><mdi-text-box-search-outline /><span>Vysvětlení předloženého kódu</span></div>
		</div>
	</section>
	<section v-click>
		<h2>Konkrétní detaily musíme ověřit</h2>
		<div class="repo-lines">
			<div><mdi-monitor-dashboard /><span>Platné vlastnosti widgetu mappView</span></div>
			<div><mdi-link-variant /><span>Vazby mezi konfigurací, HMI a PLC</span></div>
			<div><mdi-package-variant-closed /><span>API a schémata instalované verze</span></div>
		</div>
	</section>
</div>

<p class="repo-takeaway" v-click>Věrohodný text ještě není <strong>funkční řešení.</strong></p>

<!--
3 minuty. Neříkáme, že LLM nevědí o B&R vůbec nic. Nemůžeme se ale spolehnout na úplnost,
aktuálnost a správnost jejich znalostí konkrétních verzí a proprietárních detailů.
Například název vlastnosti widgetu může vypadat věrohodně, přesto nemusí existovat.
Model navíc bez poskytnutého kontextu nezná naše konvence, cílovou konfiguraci a závislosti.
Potřebujeme informace z projektu, dokumentaci a metadata odpovídající instalované verzi.
Přechod: Jaké části tohoto kontextu vlastně dodáváme?
-->

---
layout: default
class: ot-slide topic-as-repository
---

<script setup>
import './as-repository/styles.css'
</script>

# Instrukce, skills, agenti:<br><span class="accent">kdo dělá co?</span>

<div class="repo-glossary">
	<div><mdi-format-list-checks /><h3>Instrukce</h3><p>Takto pracujeme v našem projektu.</p><span>Pravidla</span></div>
	<div v-click><mdi-book-open-page-variant-outline /><h3>Skill</h3><p>Takto řešíme tento typ úkolu.</p><span>Odborný postup</span></div>
	<div v-click><mdi-robot-outline /><h3>Agent</h3><p>V této roli řídím práci a používám nástroje.</p><span>Role a workflow</span></div>
	<div v-click><mdi-package-variant-closed /><h3>Plugin</h3><p>Tento obsah instalujeme jako balíček.</p><span>Distribuce</span></div>
	<div v-click><mdi-console-line /><h3>CLI / MCP</h3><p>Tudy přistupujeme k operacím a zdrojům.</p><span>Rozhraní</span></div>
</div>

<!--
2 minuty. Pět pojmů, pět různých úloh, nikoli pět různých modelů.
CLI je příkazový nástroj. MCP je protokol pro zpřístupnění nástrojů a zdrojů agentovi;
není automaticky databází znalostí a může zpřístupnit i akční nástroje.
Zde znalostní MCP používáme především jako přístup k dokumentaci.
Plugin balí obsah pro instalaci a aktualizace. Samotná instalace není důkaz, že ho agent načetl.
-->

---
layout: default
class: ot-slide topic-as-repository
---

<script setup>
import './as-repository/styles.css'
</script>

# Instrukce:<br><span class="accent">pravidla vašeho projektu</span>

<p class="repo-lead">B&R základ + vaše architektura, konvence a hranice změn.</p>

<div class="repo-columns">
	<section>
		<h2>Co má agent respektovat</h2>
		<div class="repo-lines">
			<div><mdi-file-tree-outline /><span>Vlastnictví souborů v Logical a Physical</span></div>
			<div><mdi-link-variant /><span>Přesné identifikátory a reference</span></div>
			<div><mdi-shield-check-outline /><span>Rozsah změny a povinné ověření</span></div>
		</div>
	</section>
	<section class="repo-document" v-click>
		<h3>Projektové instrukce</h3>
		<code>AGENTS.md</code>
		<ul>
			<li>Neměň generované výstupy.</li>
			<li>Při přidání objektu aktualizuj jeho registraci.</li>
			<li>Nevymýšlej metadata. Ověř je v instalaci.</li>
			<li>Dodržuj firemní pojmenování.</li>
		</ul>
		<p class="repo-note">Zkrácené příklady pravidel, nikoli úplná šablona.</p>
	</section>
</div>

<p class="repo-takeaway">Pravidla napište jednou. <strong>Sdílejte je s projektem.</strong></p>

<!--
2 minuty. Projektová šablona repozitáře obsahuje AGENTS.md. Je to soubor instrukcí,
nikoli definice dalšího agenta. Zde uvedené body jsou zkrácené příklady z tohoto základu
a příklad firemní konvence. Není to doslovný výřez ani univerzální kompletní soubor.
Načítání a rozsah instrukcí se řídí použitým agentním prostředím.
Instrukce pomáhají směrovat chování, ale nevynucují oprávnění ani bezpečnost.
-->

---
layout: default
class: ot-slide topic-as-repository
---

<script setup>
import './as-repository/styles.css'
</script>

# Skills: správný postup<br><span class="accent">ve správnou chvíli</span>

<div class="repo-columns">
	<section>
		<h2>Co obsahuje skill</h2>
		<div class="repo-lines">
			<div><mdi-target /><span>Kdy ho použít a které soubory vlastní</span></div>
			<div><mdi-alert-circle-outline /><span>Pravidla a typické chyby technologie</span></div>
			<div><mdi-book-search-outline /><span>Reference, nástroje a kontrolu výsledku</span></div>
		</div>
	</section>
	<section v-click>
		<h2>Úkol vybírá relevantní postup</h2>
		<div class="repo-skill-matches">
			<div><p>„Přidej stavový automat.“</p><code>structured-text</code></div>
			<div><p>„Zobraz teplotu na HMI.“</p><code>mappview</code></div>
			<div><p>„Zastav shuttle ve stanici.“</p><code>mapptrak</code></div>
		</div>
	</section>
</div>

<p class="repo-takeaway">Načíst potřebný postup a reference. <strong>Ne celý katalog do promptu.</strong></p>

<!--
3 minuty. SKILL.md je vstupní bod. Popis určuje relevantní úlohy, samotný text vede práci.
Podrobnější reference se načítají podle potřeby. V repozitáři jsou tyto engineering skills
Markdown soubory, nikoli binární nástroje. Obecně mohou jiné skills přibalovat i skripty.
Skill model nepřetrénuje. Dodává mu kontext pro aktuální práci.
Automatický výběr závisí na prostředí a popisu skillu; ověřujeme, že byl skutečně načten.
Ukázka shuttle má v tomto příkladu kontext ACOPOStrak, nikoli ACOPOS 6D či SuperTrak.
-->

---
layout: default
class: ot-slide topic-as-repository
---

<script setup>
import './as-repository/styles.css'
</script>

# Agenti:<br><span class="accent">role a řízení práce</span>

<p class="repo-lead">AS-Project-Agent je vstupní role pro práci na Automation Studio projektu.</p>

<div class="repo-process">
	<div><span class="repo-step">1</span><h3>Přečte projekt</h3><p>Instrukce, architektura a rozsah zadání.</p></div>
	<div v-click><span class="repo-step">2</span><h3>Vybere postup</h3><p>Skill podle technologie a vlastnictví souborů.</p></div>
	<div v-click><span class="repo-step">3</span><h3>Použije nástroje</h3><p>Dokumentace, metadata a podporované operace.</p></div>
	<div v-click><span class="repo-step">4</span><h3>Ověří výsledek</h3><p>Build, testy a podklady pro lidské review.</p></div>
</div>

<p class="repo-takeaway">Specializovaná role <strong>není další vytrénovaný model.</strong></p>

<!--
2 minuty. Definice AS-Project-Agent v lokálním pluginu určuje společný workflow a směrování.
Nejdříve projektové instrukce, potom skill vlastníka změny a dokumentace pro danou verzi.
Agent je model pracující v prostředí s kontextem a nástroji; custom agent přidává roli a postup.
Subagent znamená delegovanou část úlohy. Není to synonymum skillu a není nutný pro každou změnu.
Definice role sama nezaručuje, že budou všechny kroky dodrženy. Potřebujeme skutečné výsledky kontrol.
-->

---
layout: default
class: ot-slide topic-as-repository
---

<script setup>
import './as-repository/styles.css'
</script>

# Co najdete<br>v <span class="accent">B&R repozitáři</span>

<div class="repo-catalog">
	<div><h3>Programování</h3><p>Structured Text a ANSI C</p></div>
	<div><h3>Konfigurace a data</h3><p>Physical konfigurace a OPC UA</p></div>
	<div><h3>HMI</h3><p>mappView: stránky, widgety, bindings a události</p></div>
	<div><h3>Motion</h3><p>Osy, ACOPOStrak, ACOPOS 6D a SuperTrak</p></div>
	<div><h3>mapp Services</h3><p>Alarmy, audit, uživatelé, receptury a runtime I/O</p></div>
</div>

<div class="repo-package-line" v-click>
	<div><h3>Plugin as-skills</h3><p>Skills + AS projektový agent + review příkaz</p></div>
	<div><h3>Projektová šablona</h3><p>Instrukce + MCP konfigurace + Git nastavení</p></div>
</div>

<!--
2 minuty. Toto jsou skupiny skutečného obsahu lokálně instalovaného repozitáře,
ne příslib, že každý katalog nebo funkce je kompletní a funguje se všemi verzemi.
Nemusíme číst všechny názvy. Smyslem je vybrat vlastnictví konkrétní úlohy.
Plugin as-skills zahrnuje také AS-Project-Agent a branch-code-review.
Projektová šablona obsahuje AGENTS.md, MCP konfiguraci a Git soubory.
Plugin používám lokálně. Přístupnost repozitáře pro zákazníky musí být před distribucí ověřena;
webový odkaz při přípravě vyžadoval ABB SSO.
EventAiAndDevOps je jiný repozitář: demonstrace, projekt a testy, nikoli totožný katalog pluginů.
Zdroje: https://github.com/br-automation-com/agentic-engineering-in-automation-studio
a https://github.com/Th0masis/EventAiAndDevOps
-->

---
layout: default
class: ot-slide topic-as-repository
---

<script setup>
import './as-repository/styles.css'
</script>

# Dva pluginy, <span class="accent">dvě role</span>

<div class="repo-plugin-cards">
	<details class="repo-plugin-card">
		<summary><strong>as-skills</strong><span>Odborné postupy pro Automation Studio</span></summary>
		<div class="repo-plugin-body">
			<p>Plugin obsahuje odborné skills i AS project agenta. Podle zadání agent vybere postup, načte jeho <code>SKILL.md</code> a potřebné reference až podle potřeby, například <code>structured-text</code> pro IEC Structured Text nebo <code>mapptrak</code> pro ACOPOStrak.</p>
		</div>
	</details>
	<details class="repo-plugin-card">
		<summary><strong>mappview-hmi-design-and-conversion</strong><span>Specializovaný agent pro návrh a převod mappView</span></summary>
		<div class="repo-plugin-body">
			<p>Plugin obsahuje specializovaného agenta pro návrh HMI, převod anotovaného HTML do mappView a build validaci. Runtime assessment je read-only: agent běžící vizualizaci pouze posuzuje.</p>
			<p>Skill <code>mappview</code> v <code>as-skills</code> naproti tomu vede ruční editaci mappView souborů, například stránek, widgetů a vazeb.</p>
		</div>
	</details>
</div>

<!--
3 minuty. as-skills předává agentovi znalosti podle typu práce, nikoli celý katalog
při každém zadání. HMI plugin je zaměřený na návrh, převod a ověření vizualizace.
Vysvětlit rozdíl vůči mappview skillu, který vlastní ruční editaci mappView projektu.
Read-only runtime assessment není interaktivní HMI test ani řízení stroje.
-->

---
layout: default
class: ot-slide topic-as-repository
---

<script setup>
import './as-repository/styles.css'
</script>

# Skills, as-cli a MCP<br>se <span class="accent">doplňují</span>

<div class="repo-three-columns">
	<section>
		<mdi-book-open-page-variant-outline />
		<h2>Skill</h2>
		<h3>Jak postupovat</h3>
		<p>Pravidla technologie, návaznosti a požadované ověření.</p>
	</section>
	<section v-click>
		<mdi-console-line />
		<h2>as-cli</h2>
		<h3>Provést a pozorovat</h3>
		<p>Podporované operace AS, metadata, build a diagnostika.</p>
	</section>
	<section v-click>
		<mdi-book-search-outline />
		<h2>Znalostní MCP</h2>
		<h3>Vyhledat a ověřit</h3>
		<p>Dokumentace a další zdroje pro konkrétní technický detail.</p>
	</section>
</div>

<div class="repo-history" v-click>
	<h3>Dříve PowerShellové helpery. Dnes as-cli.</h3>
	<p>CLI nahrazuje as-script-task-skills, ne odborné as-skills.</p>
	<p class="repo-note">Stejné CLI využije inženýr, agent i DevOps pipeline.</p>
</div>

<!--
3 minuty. Toto jen propojuje předchozí bloky, neopakujeme jejich detailní výklad.
Skill se opírá o CLI a znalostní zdroje. Dokumentaci ověřujeme už před implementací,
nikoli až jako poslední záchranu při selhání.
Podle kolegy as-cli používá přímo AS API pro podporované operace; část zjišťování
metadat pracuje také s instalací. Nejde o náhradu Automation Studia ani o AI agenta.
README pluginu as-skills označuje staré as-script-task-skills za deprecated,
ale root README ještě obsahuje starší doporučení instalovat oba pluginy.
Neříkáme, že starý plugin už byl odstraněn. Používáme nový směr, ale ověřujeme konkrétní verzi.
Automatizovaná migrace mapp balíčků je směr rozvoje, nikoli zde potvrzená kompletní funkce.
MCP je obecný protokol; v tomto schématu ukazujeme jeho znalostní použití.
-->

---
layout: default
class: ot-slide topic-as-repository
---

<script setup>
import './as-repository/styles.css'
</script>

# Příklad: zobrazte teplotu<br>v <span class="accent">mappView</span>

<p class="repo-lead">Zadání: na existující stránce zobrazit hodnotu existující PLC proměnné.</p>

<div class="repo-example">
	<div v-click><span class="repo-step">1</span><h3>Kontext projektu</h3><p>Stránka, cílové CPU, konvence a zdroj hodnoty.</p></div>
	<div v-click><span class="repo-step">2</span><h3>Skill a dokumentace</h3><p>mappView; OPC UA postup, pokud chybí vystavení proměnné.</p></div>
	<div v-click><span class="repo-step">3</span><h3>Widget a binding</h3><p>Ověřené vlastnosti, přesná ID a potřebná registrace.</p></div>
	<div v-click><span class="repo-step">4</span><h3>Důkaz výsledku</h3><p>Build a kontrola hodnoty i její aktualizace v testovacím runtime.</p></div>
</div>

<p class="repo-takeaway">Nestačí přidat widget. <strong>Hodnota musí skutečně přijít z PLC.</strong></p>
<p class="repo-note">Ilustrace pracovního postupu, nikoli záznam provedeného dema.</p>

<!--
4 minuty. Celý příklad držíme malý: proměnná a stránka už existují, nepřidáváme nové řízení stroje.
Nejprve zjistit přesný název proměnné, node alias, cílovou konfiguraci a architekturu HMI.
MappView skill rozlišuje znovupoužitelné vizuální definice v Logical a runtime konfiguraci
a wiring v Physical. Konkrétní vlastnosti widgetu se zjišťují z instalace, nevymýšlejí.
Pokud proměnná není vystavena nebo je potřeba měnit přístupová práva, práci vlastní
opcua-connectivity. HMI samo nevlastní PLC data a skrytý widget není serverové oprávnění.
Navázat přesná ID, obsah, stránku a registraci podle existujícího projektu.
Build ověřuje část konzistence. V testovacím runtime ověřit očekávanou hodnotu,
řízenou změnu hodnoty a aktualizaci zobrazení; podle rizika také výpadek spojení.
Nezapisovat do skutečného stroje kvůli prezentačnímu příkladu.
Tento slide nezobrazuje naměřené výsledky ani vykonané příkazy; není to úspěšné živé demo.
-->

---
layout: default
class: ot-slide topic-as-repository
---

<script setup>
import './as-repository/styles.css'
</script>

# Co získá váš tým,<br><span class="accent">a co tím nenahradíme</span>

<div class="repo-columns">
	<section>
		<h2>Sdílené know-how</h2>
		<div class="repo-lines">
			<div><mdi-account-multiple-outline /><span>Méně opakovaného vysvětlování</span></div>
			<div><mdi-source-branch /><span>Verzované postupy a pravidla projektu</span></div>
			<div><mdi-format-list-checks /><span>Konzistentnější práce a snazší onboarding</span></div>
		</div>
	</section>
	<section v-click>
		<h2>Odpovědnost zůstává</h2>
		<div class="repo-lines">
			<div><mdi-test-tube /><span>Build nenahrazuje test chování.</span></div>
			<div><mdi-shield-lock-outline /><span>Instrukce nejsou bezpečnostní pojistka.</span></div>
			<div><mdi-account-check-outline /><span>Review a schválení zůstávají na lidech.</span></div>
		</div>
	</section>
</div>

<p class="repo-takeaway">Know-how aktualizujeme v souborech. <strong>Bez přetrénování modelu.</strong></p>
<p class="repo-note">Přínos ověřujte na vlastní úloze. Instalace pluginu není garance úspory ani kvality.</p>

<!--
3 minuty. Přínosy jsou důvod pro tento přístup, nikoli změřený výsledek konkrétního zákazníka.
Nevkládáme procenta produktivity. Důležitý je menší počet oprav, kratší vysvětlování
a konkrétní výsledky kontrol na vlastní ohraničené úloze.
Znalosti a pravidla se dají sdílet, verzovat a aktualizovat bez přetrénování modelu.
To neznamená stejné výstupy při každém běhu ani úplnou nezávislost na agentním prostředí.
Skills i instrukce mohou být zastaralé nebo nesprávné; potřebují údržbu a review.
Oprávnění, testovací brány, ochrana zákaznických dat a schvalování nasazení jsou samostatné kontroly.
Body 1 až 10 představují 25 minut z plánovaného 30min bloku.
Závěr o prvních krocích a otázky budou doplněny samostatně, nejsou součástí tohoto zadání.
-->