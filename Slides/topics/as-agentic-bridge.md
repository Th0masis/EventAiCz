---
layout: default
class: ot-slide chapter-slide topic-as-agentic-bridge
---

<script setup>
import './as-agentic-bridge/styles.css'
</script>

<img class="chapter-image" src="/topics/as-agentic-bridge/chapter.jpg" alt="">

# Automation Studio Agentic Bridge

<!--
Dopoledne jsme viděli, jak agent pracuje. Teď si ukážeme, co potřebuje, aby dokázal pracovat s Automation Studiem: pracovní postup, odborné znalosti a nástroje pro akci i kontrolu výsledku. To je role Agentic Bridge.

Navázat na předchozí Community blok: informace mají být dostupné nejen člověku, ale také jeho nástrojům. Nevracet se k definici agentního systému.
-->

---
layout: default
class: ot-slide topic-as-agentic-bridge bridge-needs-slide
---

<script setup>
import './as-agentic-bridge/styles.css'
</script>

# Co musí agent dostat navíc

<p class="bridge-lead">Samotný model ještě není <strong>engineering prostředí.</strong></p>

<div class="bridge-needs-list" aria-label="Co agent potřebuje pro engineering práci">
	<div class="bridge-need-row" v-click="1"><strong>Jak má pracovat?</strong><span><b>Instrukce</b> a odborné postupy.</span></div>
	<div class="bridge-need-row" v-click="2"><strong>O co opře rozhodnutí?</strong><span><b>Dokumentace</b> a fakta konkrétního projektu.</span></div>
	<div class="bridge-need-row" v-click="3"><strong>Jak ověří výsledek?</strong><span><b>Nástroje</b> pro změnu, build a test.</span></div>
</div>

<p class="bridge-takeaway" v-click="4">Nestačí navrhnout kód. <strong>Potřebujeme zpětnou vazbu.</strong></p>

<!--
Nechceme jen další chatovací okno. Potřebujeme prostředí, které zná pravidla projektu, umí dohledat potřebné informace a dokáže ověřit, co skutečně změnilo.

[CLICK]
Jak má pracovat? Podle projektových instrukcí a odborného postupu, ne jen podle obecného promptu.

[CLICK]
O co opře rozhodnutí? O dokumentaci a fakta konkrétního projektu, ne o domněnky modelu.

[CLICK]
Jak ověří výsledek? Nástroji a testem očekávaného chování. Detaily syntaxe a konfigurace zde neřešit; ty rozvíjí AS Repository.

[CLICK]
Nestačí navrhnout kód. Potřebujeme zpětnou vazbu.

Přechod: B&R dodává propojení těchto částí, ne náhradu vašeho modelu.
-->

---
layout: default
class: ot-slide topic-as-agentic-bridge bridge-architecture-slide
---

<script setup>
import './as-agentic-bridge/styles.css'
</script>

# Agentic Bridge: tři propojené části

<div class="bridge-agent" v-click="1"><strong>Váš agent + zvolený model</strong></div>

<div class="bridge-pillars" aria-label="Tři části Agentic Bridge">
	<section class="bridge-pillar workflow-pillar" v-click="2">
		<h2>Workflow</h2>
		<strong>AS Repository</strong>
		<p>Instrukce, skills a postup pro projekt</p>
		<div class="bridge-pillar-flow"><mdi-arrow-up /><span>pravidla do agenta</span></div>
	</section>
	<section class="bridge-pillar knowledge-pillar" v-click="3">
		<h2>Knowledge</h2>
		<strong>MCP Knowledge Hub</strong>
		<p>Odborné podklady do kontextu</p>
		<div class="bridge-pillar-flow"><mdi-arrow-up /><span>podklady se zdroji</span></div>
	</section>
	<section class="bridge-pillar execution-pillar" v-click="4">
		<h2>Execution</h2>
		<strong>AS CLI</strong>
		<p>Akce a pozorování výsledku</p>
		<div class="bridge-pillar-flow"><span>akce ↓ · výsledky ↑</span></div>
	</section>
</div>

<div class="bridge-environment" v-click="5"><strong>Automation Studio</strong><span>projekt</span><span>AR a ARsim</span></div>

<p class="bridge-architecture-note" v-click="6">Agent využívá pilíře podle úkolu. Build ještě nedokazuje správné chování.</p>

<!--
Nahoře zůstává agentní prostředí a model, které si zvolíte. Bridge není další model mezi vámi a Automation Studiem.

[CLICK]
Workflow říká, jak postupovat a jaké konvence dodržet. Konkrétní instrukce, skills a pluginy ukáže AS Repository.

[CLICK]
Knowledge poskytuje dohledané podklady. MCP propojí agenta se znalostním nástrojem; podklady se musí vztahovat ke konkrétnímu dotazu a verzi.

[CLICK]
Execution umožní provést podporované operace a vrátit výsledek. CLI ukáže následující přednáška.

[CLICK]
Všechny tři části pracují v kontextu Automation Studia a projektu; ARsim je zde testovací prostředí.

[CLICK]
Agent využívá pilíře podle úkolu. Znalostní služba projekt nesestavuje a úspěšný build ještě nedokazuje správné chování stroje. Bridge není vázán na jednoho poskytovatele modelu, ale konfigurace a nástroje závisejí na konkrétním prostředí; neslibovat stejnou kompatibilitu všech klientů. Náklady a licence diagram neřeší.
-->

---
layout: default
class: ot-slide topic-as-agentic-bridge bridge-loop-slide
---

<script setup>
import './as-agentic-bridge/styles.css'
</script>

# Jak se z požadavku stane ověřená změna

<p class="bridge-request">„Přidej počítadlo hotových kusů a ověř reset.“</p>

<div class="bridge-loop" aria-label="Plán, implementace, ověření, test a lidská revize">
	<section class="bridge-loop-step" v-click="1"><h2>Plan</h2><p>Projekt, pravidla a potřebná dokumentace.</p></section>
	<section class="bridge-loop-step" v-click="2"><h2>Implement</h2><p>Změna podle zjištěných pravidel.</p></section>
	<section class="bridge-loop-step" v-click="3"><h2>Verify</h2><p>Build a kontrola konfigurace.</p></section>
	<section class="bridge-loop-step" v-click="4"><h2>Test</h2><p>ARsim: počet se zvýší; po resetu je nula.</p></section>
	<section class="bridge-loop-review" v-click="5"><h2>Lidská revize</h2><p>Změna i důkazy.</p></section>
</div>

<p class="bridge-return" v-click="4"><mdi-arrow-u-left-top /><strong>Chyba nebo výsledek testu zpět do kontextu agenta</strong></p>

<!--
Jde o ilustrační scénář, nikoli tvrzení o právě předvedeném úspěšném demu. Požadavek je vidět hned; jednotlivé kroky odhalujeme postupně.

[CLICK]
Plan: agent zjistí, co mění, jaká pravidla platí a kterou dokumentaci potřebuje.

[CLICK]
Implement: upraví projekt podle zjištěných pravidel.

[CLICK]
Verify: zkontroluje sestavení a konfiguraci. Sestavitelný projekt ještě nedokazuje správné chování.

[CLICK]
Test: v ARsim ověří očekávání, že po události se počet zvýší a po resetu bude nulový. Chyba nebo výsledek testu se vrací agentovi.

[CLICK]
Lidská revize posuzuje změnu i důkazy. Může proběhnout také dříve podle oprávnění. Přenos na fyzický stroj vyžaduje samostatné schválení a validaci; Bridge sám bezpečnost stroje nezaručuje.
-->

---
layout: default
class: ot-slide topic-as-agentic-bridge bridge-knowledge-slide
clicks: 7
---

<script setup>
import './as-agentic-bridge/styles.css'
import KnowledgeFlow from './as-agentic-bridge/components/KnowledgeFlow.vue'
</script>

# MCP Knowledge Hub: znalosti se zdrojem

<p class="bridge-lead">Online vyhledávací služba napříč technologickými znalostmi B&amp;R.</p>

<KnowledgeFlow />

<div class="bridge-knowledge-details" v-click="6">
	<h2>Vyhledávané zdroje</h2>
	<ul><li>Automation Help</li><li>B&amp;R Community: příspěvky a komentáře</li><li>Informace o verzích</li><li>Schválený interní zdrojový kód</li></ul>
</div>

<p class="bridge-knowledge-status" v-click="7">Přes MCP · v produkci od červnového vydání Automation Studio Code · aktualizace čtvrtletně</p>
<p class="bridge-knowledge-limit" v-click="7"><strong>Zatím nezahrnuto:</strong> SAP support tickety</p>

<!--
B&R MCP Knowledge Hub je online vyhledávací služba pro technologické znalosti B&R. Nejprve postupně odhalíme dotazovací cestu. Po vyhledání ji ve stejném prostoru nahradí návrat podkladů přes MCP k agentovi; obsah zdrojů a provozní údaje vycházejí z podkladů k tomuto školení.

[CLICK]
Dotaz pochází ze sdílené ukázky. Hover nebo fokus otevře vysvětlující kartu, kliknutí ji připne; Escape nebo tlačítko Zavřít ji zavře. Nejde o živé vyhledávání.

[CLICK]
Agent otázku vyloží a rozhodne, jaké podklady si vyžádat. Jeho karta vysvětluje převod českého dotazu do anglické vyhledávací formulace a práci s výsledkem; neukazuje interní uvažování.

[CLICK]
MCP předá volání znalostní službě a vrátí její výsledek. Karta ukazuje bnr_knowledge_base_rag a skutečné argumenty z dodaného snímku: query, top_k 5, include_images false. Je to rozhraní a transport, ne vyhledávač ani znalostní báze.

[CLICK]
Zjednodušeně: RAG vyhledá pasáže v připravených zdrojích a vrátí je i s odkazy. Karta Hubu ukazuje dodané výsledky a jejich relevanci. Source 2 souvisí s transferem, Source 1 je chyba osy, Source 3 je zkrácený. Neznáme přesné interní kroky Hubu, proto netvrdíme, zda používá například embeddingy, vektorové vyhledávání nebo reranking. Vrácený výsledek ještě nemusí být relevantní.

[CLICK]
Dotazovací cesta se nahradí návratem: podklady se zdroji se přes MCP vrátí agentovi do kontextu. Agent z nich sestaví odpověď, kterou posoudí člověk. Karta Odpověď shrnuje sdílený výstup a upozorňuje, že předložený výřez nepodkládá celý seznam příčin.

[CLICK]
Zdroje uvedené na slidu jsou Automation Help, Community, informace o verzích a schválený interní zdrojový kód.

[CLICK]
Provozní údaje: služba je v produkci od červnového vydání Automation Studio Code; čtvrtletní aktualizaci potvrdil vývojář služby. Rok vydání zde není uveden a aktualizace neznamená živou synchronizaci ani úplnost. SAP support tickety nejsou zahrnuté; schválený interní kód neznamená libovolný interní ani zákaznický kód.

MCP (Model Context Protocol) zpřístupňuje nástroje a zdroje; RAG (Retrieval-Augmented Generation) dohledává podklady před generováním odpovědi. MCP propojuje, RAG vyhledává. Podklady vstupují do kontextu, ne natrvalo do modelu. Ukazujeme znalostní službu, nikoli ovládání PLC.

Používáme dodaný snímek volání a zkrácený text výsledků. Odpověď je shrnutí sdílené ukázky, nikoli ověřený diagnostický postup. Neřešit zde diagnostiku ani neimprovizovat chybějící výsledky nebo citace. Při změně klikového kroku se detail zavře, aby nezůstal otevřený nad jinou fází toku.

Dohledaná odpověď se zdrojem je kontrolovatelnější, ne automaticky správná. Je nutné posoudit relevanci, verzi a soulad s projektem. Přístup se konfiguruje v klientovi; školení ukazuje Bearer JWT. Nikdy nezobrazovat reálné přihlašovací údaje a netvrdit anonymní přístup ani dostupnost bez dalších podmínek.
-->

---
layout: default
class: ot-slide topic-as-agentic-bridge bridge-summary-slide
---

<script setup>
import './as-agentic-bridge/styles.css'
</script>

# Co si odnést a co přijde dál

<div class="bridge-summary" aria-label="Tři části Agentic Bridge">
	<section><h2>Workflow</h2><p>Agent dostane postup a pravidla.</p></section>
	<section><h2>Knowledge</h2><p>Agent dohledá odborné podklady.</p></section>
	<section class="summary-execution"><h2>Execution</h2><p>Agent provede akci a získá zpětnou vazbu.</p></section>
</div>

<p class="bridge-review-takeaway">Člověk posuzuje <strong>změny i důkazy.</strong></p>
<p class="bridge-next-talk">Teď <strong>AS CLI.</strong> Potom <strong>AS Repository.</strong></p>

<!--
Bridge je propojení, ne nová inteligence. Potřebujeme všechny tři části a rozumně nastavená oprávnění. Dokumentace nenahrazuje test, úspěšný build nenahrazuje test chování a odpovědnost nezmizí tím, že něco navrhl agent.

Teď se podíváme na Execution: co může agent skutečně provést přes AS CLI. Potom se vrátíme k Workflow a ukážeme, jak AS Repository dodává postupy, instrukce a skills. Znalostní část přes MCP už umíme do celku zařadit.

Při dotazu na produktovou dostupnost nebo cenu nespekulovat. Odkázat na aktuální potvrzené podmínky.
-->
