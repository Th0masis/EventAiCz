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

Příklad: požadavek na úpravu chování aplikace potřebuje nejen návrh kódu, ale také kontrolu projektu a test očekávaného chování. Detaily syntaxe a konfigurace zde neřešit. Neopakovat přednášku „proč ChatGPT nestačí“; tu rozvíjí AS Repository.

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
		<strong>Instrukce a skills</strong>
		<p>Postup pro váš projekt</p>
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
Nahoře zůstává agentní prostředí a model, které si zvolíte. Bridge není další model mezi vámi a Automation Studiem. Dodává agentovi tři různé věci.

Workflow říká, jak postupovat a jaké konvence dodržet. Zde pouze roli; konkrétní instrukce, skills a pluginy ukáže AS Repository. Knowledge poskytuje dohledané podklady: MCP propojí agenta se znalostním nástrojem a podklady se musí vztahovat ke konkrétnímu dotazu a verzi. Execution umožní provést podporované operace a vrátit reálný výsledek; CLI ukáže následující přednáška.

Agent skládá vstupy dohromady. Znalostní služba projekt nesestavuje a úspěšný build ještě nedokazuje správné chování stroje. Koncept Bridge není vázán na jednoho poskytovatele modelu, ale konfigurace a nástroje závisí na konkrétním agentním prostředí; neslibovat stejnou kompatibilitu všech klientů. Náklady a licence diagram neřeší.
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
Jde o ilustrační scénář, nikoli tvrzení o právě předvedeném úspěšném demu. Agent nejdříve zjistí, co mění a podle čeho má pracovat. Dokumentaci dohledá, pokud ji úkol potřebuje. Potom upraví projekt, ověří sestavení a otestuje běh. Když dostane chybu, může se vrátit a změnu opravit.

Rozlišit Verify a Test: sestavitelný projekt není totéž co správné chování. Očekávání testu je, že po události se počet zvýší a po resetu bude nulový. Konkrétní příkazy patří do CLI bloku.

Výsledkem pro člověka má být změna a důkazy, ne pouze ujištění agenta. Lidská revize se může uplatnit i dříve podle oprávnění. Tento scénář probíhá v simulaci; přenos na fyzický stroj vyžaduje samostatné schválení a validaci. Netvrdit, že Bridge automaticky zaručuje bezpečnost stroje.
-->

---
layout: default
class: ot-slide topic-as-agentic-bridge bridge-knowledge-slide
---

<script setup>
import './as-agentic-bridge/styles.css'
</script>

# MCP Knowledge Hub: znalosti se zdrojem

<p class="bridge-lead">Online vyhledávací služba napříč technologickými znalostmi B&amp;R.</p>

<div class="bridge-knowledge-flow" aria-label="Tok dotazu přes MCP Knowledge Hub a zpět k agentovi">
	<div v-click="1"><strong>Dotaz</strong><span>ilustrační otázka</span></div><mdi-arrow-right v-click="1" />
	<div v-click="1"><strong>Agent</strong><span>rozhodne, co dohledat</span></div><mdi-arrow-right v-click="2" />
	<div v-click="2"><strong>MCP nástroj</strong><span>Model Context Protocol</span></div><mdi-arrow-right v-click="2" />
	<div class="knowledge-service" v-click="3"><strong>Znalostní báze</strong><span>vyhledání podkladů</span></div><mdi-arrow-left v-click="4" />
	<div class="knowledge-sources" v-click="4"><strong>Podklady + zdroje</strong><span>zpět do kontextu agenta</span></div><mdi-arrow-left v-click="4" />
	<div v-click="4"><strong>Odpověď</strong><span>posoudí člověk</span></div>
</div>

<div class="bridge-knowledge-details" v-click="5">
	<section>
		<h2>Vyhledávané zdroje</h2>
		<ul><li>Automation Help</li><li>B&amp;R Community: příspěvky a komentáře</li><li>Informace o verzích</li><li>Schválený interní zdrojový kód</li></ul>
	</section>
	<p class="bridge-illustrative-query"><strong>Ilustrační dotaz</strong><span>Po přenosu projektu startuje X20 CPU do SERVICE místo RUN. Jaké mohou být příčiny?</span></p>
</div>

<p class="bridge-knowledge-status" v-click="6">Přes MCP · v produkci od červnového vydání Automation Studio Code · aktualizace čtvrtletně</p>
<p class="bridge-knowledge-limit" v-click="6"><strong>Zatím nezahrnuto:</strong> SAP support tickety</p>

<!--
B&R MCP Knowledge Hub je online vyhledávací služba pro technologické znalosti B&R. Prohledává Automation Help, příspěvky i komentáře Community, informace o verzích a schválený interní zdrojový kód. Rozsah a stav služby na slidu vycházejí z podkladu S8 dodaného zadavatelem, nejsou nezávisle ověřeným veřejným tvrzením.

Služba je v produkci od červnového vydání Automation Studio Code a aktualizuje se čtvrtletně. Rok vydání není známý; čtvrtletní aktualizace neznamená živou synchronizaci ani úplnost. SAP support tickety zatím zahrnuté nejsou, jejich zahrnutí čeká na řádnou anonymizaci. Neslibovat termín. Schválený interní kód není libovolný interní ani zákaznický kód.

MCP (Model Context Protocol) zpřístupňuje nástroje a zdroje; RAG (Retrieval-Augmented Generation) dohledává podklady před generováním odpovědi. MCP propojuje, RAG vyhledává. Podklady vstupují do kontextu, ne natrvalo do modelu. Ukazujeme znalostní službu, nikoli ovládání PLC.

Příklad dotazu ze školení: „Po přenosu projektu startuje X20 CPU do SERVICE místo RUN. Jaké mohou být příčiny a co ověřit?“ Neřešit zde diagnostiku, jen ukázat, že nejprve chceme dohledané podklady a pak doporučení. Skutečný výřez volání není připraven, proto použít označené schéma; neimprovizovat živé výsledky ani nevkládat domyšlené citace.

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
