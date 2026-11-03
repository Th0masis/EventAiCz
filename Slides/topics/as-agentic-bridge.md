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
	<div class="bridge-need-row" v-click="1"><mdi-source-repository aria-hidden="true" /><strong>Jak má pracovat?</strong><span><b>Instrukce</b> a odborné postupy.</span></div>
	<div class="bridge-need-row" v-click="2"><mdi-book-search-outline aria-hidden="true" /><strong>O co opře rozhodnutí?</strong><span><b>Dokumentace</b> a fakta konkrétního projektu.</span></div>
	<div class="bridge-need-row" v-click="3"><mdi-console aria-hidden="true" /><strong>Jak ověří výsledek?</strong><span><b>Nástroje</b> pro změnu, build a test.</span></div>
</div>

<!--
Mapa odhalování: 0 = nadpis a úvod; 1 = instrukce; 2 = dokumentace;
3 = nástroje. Finále = všechny tři potřeby. Bez dalších interakcí.

Nechceme jen další chatovací okno. Potřebujeme prostředí, které zná pravidla projektu, umí dohledat potřebné informace a dokáže ověřit, co skutečně změnilo.

[CLICK]
Jak má pracovat? Podle projektových instrukcí a odborného postupu, ne jen podle obecného promptu.

[CLICK]
O co opře rozhodnutí? O dokumentaci a fakta konkrétního projektu, ne o domněnky modelu.

[CLICK]
Jak ověří výsledek? Nástroji a testem očekávaného chování. Detaily syntaxe a konfigurace zde neřešit; ty rozvíjí AS Repository.

Nestačí navrhnout kód. Potřebujeme zpětnou vazbu.

Přechod: B&R dodává propojení těchto částí, ne náhradu vašeho modelu.
-->

---
layout: default
class: ot-slide topic-as-agentic-bridge bridge-foundation-slide
---

<script setup>
import './as-agentic-bridge/styles.css'
</script>

# Automation Studio má textový základ

<p class="bridge-lead">Agent může <strong>číst projekt i technické podklady.</strong></p>

<div class="bridge-needs-list" aria-label="Textové vstupy pro práci agenta s Automation Studiem">
	<div class="bridge-need-row" v-click="1"><mdi-file-code-outline aria-hidden="true" /><strong>Projektové zdroje</strong><span>Kód a konfigurace v textu: čtení, úpravy a kontrola diffu.</span></div>
	<div class="bridge-need-row" v-click="2"><mdi-book-search-outline aria-hidden="true" /><strong>Instalace a Help</strong><span>Textová metadata, schémata a HTML dokumentace pro danou verzi.</span></div>
	<div class="bridge-need-row" v-click="3"><mdi-console aria-hidden="true" /><strong>Zpětná vazba</strong><span>Build, hodnoty v ARsim a čitelný logbook pro další krok.</span></div>
</div>

<p class="bridge-takeaway" v-click="4">Bridge dodává <strong>nástroje a know-how.</strong><br>Nemění AS na jiný typ projektu.</p>

<!--
Čas: 1:30. Mapa odhalování: 0 = nadpis a lead; 1 = Projektové zdroje;
2 = Instalace a Help; 3 = Zpětná vazba; 4 = celý závěr.
Finále = tři vstupy a role Bridge. Bez dalších interakcí.

Textový základ není až důsledek AI. Webinář ho popisuje jako přínos dřívějších
architektonických rozhodnutí Automation Studia: agent nemusí získávat
všechny informace jen klikáním v GUI nebo rozpoznáváním screenshotů.

[CLICK]
Kód i podstatná část konfigurace jsou přístupné jako textové soubory.
Agent může pracovat s existujícím projektem; změny lze kontrolovat v diffu.
Neopakovat absolutní „žádné binární soubory“: přepis výslovně připouští
kompilované knihovny, projekt může mít i další netextové podklady.

[CLICK]
V instalaci jsou metadata a schémata; Help má HTML podobu.
Dokumentace vysvětluje význam, metadata určují dostupnou strukturu a vlastnosti.
Agent potřebuje podklady odpovídající verzi projektu a instalace.
Preferovat podporované nástroje, například CLI pro zjištění schématu;
textová dostupnost není oprávnění libovolně měnit instalaci.

[CLICK]
CLI zpřístupňuje podporované operace a výsledky. ARsim umožní testovat
aplikační scénář bez fyzického stroje; čtení hodnot a logbooku dává zpětnou vazbu.
Simulace sama neověří skutečné I/O, mechaniku ani bezpečnost stroje.
Konkrétní ověření ukáže blok AS CLI.

[CLICK]
„Nešaháme do projektu“ zde znamená: Bridge nenahrazuje projektový model AS.
Dodáváme nástroje, instrukce a odborné postupy; agent jimi podle zadání
a oprávnění projekt skutečně upravuje. Není to read-only režim ani záruka,
že žádná změna nenastane. Projektová šablona navíc přidává podpůrné soubory.
Model a harness volí zákazník; Bridge není nový LLM.

Zdroj: Webinar Agentic Engineering with B&R, 7:34–12:12;
training s5/09-capabilities (logical, config, build, sim, plc);
as-skills/README.md, Toolchain precedence; root README, Project Template.
IntelliSense je na dodaném screenshotu „coming soon“; z tohoto slidu
nelze odvodit aktuální dostupnost ani podporu všech klientů.
-->

---
layout: default
class: ot-slide topic-as-agentic-bridge bridge-layers-slide
clicks: 5
---

<script setup>
import './as-agentic-bridge/styles.css'
</script>

# Model, harness, tools a skills

<p class="bridge-lead">Čtyři vrstvy agentního prostředí a kdo je dodává.</p>

<div class="bridge-layers-stage">
	<table class="bridge-layers-table">
		<colgroup><col><col><col><col></colgroup>
		<thead><tr><th>Vrstva</th><th>Co to je</th><th>Kdo to dodává</th><th>Příspěvek B&amp;R</th></tr></thead>
		<tbody>
			<tr :class="{ 'is-current': $clicks === 1 }"><th scope="row">LLM</th><td>Jazykový model, který uvažuje a píše.</td><td>OpenAI · Anthropic · Google · Mistral · DeepSeek · Qwen · …</td><td>—</td></tr>
			<tr :class="{ 'is-current': $clicks === 2 }"><th scope="row">Harness</th><td>Aplikace agenta: kontext, nástroje, schvalování.</td><td>GitHub Copilot · Claude Code · Codex · Cursor · OpenCode · …</td><td>—</td></tr>
			<tr :class="{ 'is-current': $clicks === 3 }"><th scope="row">Nástroje</th><td>MCP servery · CLI nástroje · jazykové servery (LSP).</td><td>B&amp;R · dodavatelé harnessů · komunita</td><td>as-cli · B&amp;R MCP Server (RAG) · jazykový server Structured Text</td></tr>
			<tr :class="{ 'is-current': $clicks === 4 }"><th scope="row">Přizpůsobení</th><td>Agents · AGENTS.md · skills · příkazy · plugins.</td><td>B&amp;R · váš tým · komunita</td><td>Skills, agenti a šablony projektů Automation Studio dodávané jako plugins</td></tr>
		</tbody>
	</table>
	<div v-click="5" class="bridge-layers-promise">
		<strong>Agentic Bridge slibuje</strong><p>Používáte harness dle vlastního výběru. Zajistíme, aby s Automation Studio fungoval.</p>
	</div>
</div>

<!--
Záměr a čas: 2 minuty. Rozlište role i dodavatele jednotlivých vrstev; Bridge je příspěvek B&R nad touto skladbou.
Mapa odhalování: před prvním klikem je viditelná celá tabulka. Kliky 1–4 zvýrazní po jednom řádku: LLM, harness, nástroje, přizpůsobení. Skupina 5 odhalí spodní sdělení Bridge. Konečný stav: tabulka čtyř vrstev, dodavatelů i příspěvku B&R a spodní sdělení. Bez dalších interakcí.

[CLICK]
Jazykový model vytváří návrh. Uvedení dodavatelé jsou příklady, nikoli úplný seznam ani doporučení.

[CLICK]
Harness řídí běh agenta, například dostupný kontext, nástroje a schvalování. Uvedená prostředí nejsou automaticky zaměnitelná.

[CLICK]
Nástroje mohou být MCP servery, příkazové nástroje nebo jazykové servery. MCP je způsob propojení, ne další druh nástroje.

[CLICK]
Přizpůsobení mohou dodat B&R, vlastní tým i komunita. Skills popisují pracovní postupy, ale samy o sobě neudělují bezpečnostní oprávnění.

[CLICK]
Agentic Bridge má propojit Automation Studio s harnessy podle volby zákazníka. Rozsah podpory závisí na konfiguraci; neznamená to, že každý harness funguje bez integrace.

Teď tyto vrstvy propojíme s konkrétními částmi Agentic Bridge: Knowledge Hub, AS Repository a AS CLI.
Převzato z UserMeetingSK_AI/Slides/slides.md, slide 13 „Model, harness, tools a skills“.
Zdroj pro přípravu: agentic-bridge/slides/s1/05-who-offers-what.js, s3/02-mcp.js a s4/07-skills-what.js.
-->

---
layout: default
class: ot-slide topic-as-agentic-bridge bridge-architecture-slide
---

<script setup>
import './as-agentic-bridge/styles.css'
</script>

# Agentic Bridge: tři propojené části

<div class="bridge-agent"><mdi-robot-outline aria-hidden="true" /><strong>Agent + zvolený model a harness</strong></div>
<p class="bridge-architecture-note">využívá podle potřeby</p>

<div class="bridge-pillars" aria-label="Tři části Agentic Bridge">
	<section class="bridge-pillar knowledge-pillar" v-click="1">
		<div class="bridge-pillar-heading"><span class="bridge-pillar-icon"><mdi-book-search-outline aria-hidden="true" /></span><h2>Knowledge Hub</h2></div>
		<p><strong>Knowledge:</strong> podklady dohledané přes MCP, včetně zdrojů.</p>
	</section>
	<section class="bridge-pillar workflow-pillar" v-click="2">
		<div class="bridge-pillar-heading"><span class="bridge-pillar-icon"><mdi-source-repository aria-hidden="true" /></span><h2>AS Repository</h2></div>
		<p><strong>Workflow:</strong> instrukce, skills a postup pro práci na projektu.</p>
	</section>
	<section class="bridge-pillar execution-pillar" v-click="3">
		<div class="bridge-pillar-heading"><span class="bridge-pillar-icon"><mdi-console aria-hidden="true" /></span><h2>AS CLI</h2></div>
		<p><strong>Execution:</strong> podporované operace a návrat výsledků nástrojů.</p>
	</section>
</div>

<div class="bridge-environment"><mdi-factory aria-hidden="true" /><strong>Automation Studio + konkrétní projekt</strong></div>

<!--
Počáteční stav: nadpis, agent se zvoleným modelem a harness, popisek a prostředí Automation Studio. Tři části jsou skryté. Skupiny 1–3 odhalují Knowledge Hub, AS Repository a AS CLI. Konečný stav: všechny tři části mezi agentem a konkrétním projektem.

Nahoře zůstává agentní prostředí a model, které si zvolíte. Bridge není další model mezi vámi a Automation Studiem. Tři role jsou Knowledge, Workflow a Execution; nejde o tři AI modely.

[CLICK]
Knowledge Hub poskytuje dohledané podklady včetně zdrojů. MCP propojí agenta se znalostním nástrojem; podklady se musí vztahovat ke konkrétnímu dotazu a verzi. Tento znalostní nástroj neovládá PLC.

[CLICK]
AS Repository říká, jak postupovat a jaké konvence dodržet. Konkrétní instrukce, skills a pluginy ukáže následující přednáška o AS Repository.

[CLICK]
AS CLI umožní provést podporované operace a vrátit výsledek. CLI ukáže následující přednáška. Všechny tři části pracují v kontextu Automation Studia a konkrétního projektu.

Agent využívá části podle úkolu. Znalostní služba projekt nesestavuje a úspěšný build ještě nedokazuje správné chování stroje. Bridge není vázán na jednoho poskytovatele modelu, ale konfigurace a nástroje závisejí na konkrétním prostředí; neslibovat stejnou kompatibilitu všech klientů. Náklady a licence diagram neřeší.
-->

---
layout: default
class: ot-slide topic-as-agentic-bridge bridge-loop-slide
clicks: 6
---

<script setup>
import './as-agentic-bridge/styles.css'
</script>

# Jak se z požadavku stane ověřená změna

<p class="bridge-request">„Přidej počítadlo hotových kusů a ověř reset.“</p>

<div class="bridge-loop" aria-label="Ilustrační procesní smyčka: plán, implementace, sestavení, test a lidské schválení">
	<svg class="bridge-forward" viewBox="0 0 1140 160" aria-hidden="true">
		<path v-click="2" d="M194 80H246m-9-7 9 7-9 7" />
		<path v-click="3" d="M427 80H479m-9-7 9 7-9 7" />
		<path v-click="4" d="M660 80H712m-9-7 9 7-9 7" />
		<path v-click="5" d="M893 80H945m-9-7 9 7-9 7" />
	</svg>
	<section class="bridge-loop-step" :class="{ 'is-current': $clicks === 1 }" v-click="1"><div class="bridge-loop-visual"><span class="bridge-step-number" aria-hidden="true">1</span><mdi-clipboard-text-outline aria-hidden="true" /></div><h2>Plan</h2><p>Pravidla a kontext</p></section>
	<section class="bridge-loop-step" :class="{ 'is-current': $clicks === 2 }" v-click="2"><div class="bridge-loop-visual"><span class="bridge-step-number" aria-hidden="true">2</span><mdi-file-code-outline aria-hidden="true" /></div><h2>Implement</h2><p>Úprava projektu</p></section>
	<section class="bridge-loop-step" :class="{ 'is-current': $clicks === 3 }" v-click="3"><div class="bridge-loop-visual"><span class="bridge-step-number" aria-hidden="true">3</span><mdi-cog-outline aria-hidden="true" /></div><h2>Verify</h2><p>Sestavení</p></section>
	<section class="bridge-loop-step" :class="{ 'is-current': $clicks === 4 }" v-click="4"><div class="bridge-loop-visual"><span class="bridge-step-number" aria-hidden="true">4</span><svg class="bridge-test-signal" viewBox="0 0 104 88" aria-hidden="true"><path class="bridge-test-axis" d="M8 8V76H100" /><path d="M14 64H36V26H67V64H96" /><circle cx="36" cy="26" r="4" /><circle cx="67" cy="64" r="4" /></svg></div><h2>Test</h2><p>Chování v ARsim</p></section>
	<section class="bridge-loop-review" :class="{ 'is-current': $clicks === 5 }" v-click="5"><div class="bridge-loop-visual"><span class="bridge-step-number" aria-hidden="true">5</span><mdi-account-outline aria-hidden="true" /><mdi-lock-outline class="bridge-approval-lock" aria-hidden="true" /></div><h2>Lidská revize</h2><p>Čeká na schválení</p></section>
	<span class="bridge-human-boundary" v-click="5" aria-hidden="true"></span>
</div>

<div class="bridge-return" v-click="4">
	<svg viewBox="0 0 900 72" preserveAspectRatio="none" aria-hidden="true"><path d="M797 0V48H104V2M96 10l8-8 8 8" /></svg>
	<p>Zpětná vazba → nový plán</p>
</div>

<p class="bridge-artifact-note" role="note">Ilustrační postup. Build není test; nasazení vyžaduje souhlas.</p>

<!--
Tento postup je ilustrační; nejde o právě provedené demo.

[CLICK]
Plan: dokument s pravidly představuje projektový kontext. Agent zjistí, co mění, jaká pravidla platí a kterou dokumentaci potřebuje.

[CLICK]
Implement: soubor s kódem představuje změnu projektu podle zjištěných pravidel. V příkladu jde o počítadlo a jeho reset.

[CLICK]
Verify: ozubené kolo představuje sestavení a kontrolu konfigurace. Úspěšný build ještě nedokazuje správné chování.

[CLICK]
Test: průběh ukazuje očekávané zvýšení počtu a návrat na nulu při resetu v ARsim. Křivka je schéma chování, nikoli naměřený signál ani doplnění chybějícího čtení v přepisu AS CLI. Návratová šipka ukazuje, že chyby i výsledky testů vstupují do dalšího plánování.

[CLICK]
Lidská revize je za přerušovanou hranicí automatizované práce. Postava a zámek označují povinné lidské rozhodnutí, ne automatické schválení. Člověk posoudí změnu i důkazy. Revize může proběhnout také dříve podle oprávnění. Přenos na fyzický stroj vyžaduje samostatné schválení a validaci; Bridge sám bezpečnost stroje nezaručuje.

[CLICK]
Po revizi se zvýraznění stáhne: všech pět kroků zůstává viditelných jako neutrální celek.
-->

---
layout: default
class: ot-slide topic-as-agentic-bridge bridge-mcp-slide
---

<script setup>
import './as-agentic-bridge/styles.css'
</script>

# MCP? Společná řeč mezi AI aplikací a nástrojem

<p class="bridge-mcp-lead">Představ si, že každý AI editor potřebuje vlastní integraci ke každému nástroji. <strong>MCP dává oběma stranám společný způsob, jak se domluvit.</strong></p>

<div class="bridge-mcp-architecture" aria-label="AI aplikace obsahuje MCP klienta, který mluví se serverem MCP; server zpřístupní existující nástroje a data">
	<section class="bridge-mcp-part"><mdi-robot-outline aria-hidden="true" /><h2>AI aplikace</h2><p>Například chat nebo IDE.<br>Uvnitř běží MCP klient.</p></section>
	<span class="bridge-mcp-link" aria-hidden="true"><span>MCP</span><mdi-arrow-left-right /></span>
	<section class="bridge-mcp-part"><mdi-connection aria-hidden="true" /><h2>MCP server</h2><p>Popíše, co umí,<br>a provede požadovanou akci.</p></section>
	<span class="bridge-mcp-link" aria-hidden="true"><span>API<br>volitelně</span><mdi-arrow-left-right /></span>
	<section class="bridge-mcp-part"><mdi-database-outline aria-hidden="true" /><h2>Existující nástroje a data</h2><p>API, CLI, soubory,<br>databáze nebo vlastní kód.</p></section>
</div>

<div class="bridge-mcp-capabilities" aria-label="MCP server může nabídnout nástroje, data a připravené šablony zadání">
	<strong>MCP server může nabídnout:</strong>
	<span><mdi-wrench-outline aria-hidden="true" /><strong>Tools</strong> – akce, o které může AI požádat</span>
	<span><mdi-file-document-outline aria-hidden="true" /><strong>Resources</strong> – data, ze kterých může AI čerpat</span>
	<span><mdi-message-text-outline aria-hidden="true" /><strong>Prompts</strong> – připravené šablony zadání</span>
</div>

<div class="bridge-mcp-exchange" aria-label="Zjednodušený průběh použití MCP nástroje">
	<div v-click="1"><span>1</span><strong>Co umíš?</strong><p>Klient zjistí, jaké akce server nabízí a jaké vstupy potřebují.</p><code>tools/list</code></div>
	<div v-click="2"><span>2</span><strong>Použij tohle</strong><p>Agent vybere akci; klient předá serveru požadavek.</p><code>tools/call</code></div>
	<div v-click="3"><span>3</span><strong>Proveď akci</strong><p>Server použije API, CLI, soubory nebo vlastní kód.</p><mdi-cog-outline aria-hidden="true" /></div>
	<div v-click="4"><span>4</span><strong>Vrať výsledek</strong><p>Výsledek se vrátí do AI aplikace jako kontext pro odpověď.</p><mdi-arrow-u-left-top aria-hidden="true" /></div>
</div>

<!--
Záměr: odpovědět kolegovi programátorovi, který se ptá „A co je vlastně MCP?“, přibližně 60–90 sekund.

Počáteční stav: nadpis, definice, všechny tři role diagramu a řádek Tools / Resources / Prompts jsou viditelné. Skupina 1 odhalí nabídku nástrojů, skupina 2 volání, skupina 3 provedení a skupina 4 návrat výsledku. Konečný stav: celý čtyřkrokový průběh. Bez dalších interakcí.

„MCP“ znamená Model Context Protocol. Představ si, že chceš, aby AI editor uměl vyhledat dokumentaci nebo spustit nástroj. Bez společné dohody by se integrace musela přizpůsobovat každé aplikaci zvlášť. MCP je společný protokol, kterému rozumí AI aplikace i připojené nástroje. Není to další model, databáze ani kouzelný přístup k počítači.

[CLICK]
Vlevo je AI aplikace, třeba IDE s agentem. Uvnitř ní běží MCP klient: část programu, která umí protokol MCP. Klient se připojí k MCP serveru a zjistí, jaké nástroje server nabízí a jaké argumenty očekávají. Proto je na slidu otázka „Co umíš?“; skutečná zpráva se jmenuje tools/list.

Řádek pod kartami shrnuje tři druhy schopností, které může MCP server nabídnout: nástroje k volání, data pro kontext a připravené šablony zadání.

[CLICK]
Když agent potřebuje například vyhledat dokumentaci, navrhne odpovídající nástroj a vstupy. Aplikace rozhodne, zda volání povolí; její klient předá požadavek serveru. Tomuto kroku se v MCP říká tools/call. Model sám neotevírá spojení se serverem.

[CLICK]
MCP server je často adaptér: převede standardní požadavek na konkrétní práci. Může zavolat API, spustit CLI, číst soubory nebo použít vlastní kód. API je jen jedna možnost, ne povinná součást MCP serveru. Server vrátí výsledek klientovi a ten jej předá aplikaci, aby z něj agent mohl odpovědět.

[CLICK]
Výsledek se vrátí přes klienta do AI aplikace a doplní kontext pro odpověď.

Představ si MCP jako společnou zásuvku pro integrace: server nemusí být přepsán pro každý MCP-kompatibilní editor. Přirovnání má hranice: MCP nezaručuje, že každá aplikace podporuje každou schopnost serveru, ani samo neřeší přihlášení či oprávnění. Proto kontrolujeme, který server spouštíme a co mu dovolíme.

Potom odlišíme MCP od API a přejdeme ke konkrétní znalostní službě přístupné přes MCP.

Zdroj: https://modelcontextprotocol.io/docs/learn/architecture (role host/client/server, tools/list, tools/call a návrat výsledku).
-->

---
layout: default
class: ot-slide topic-as-agentic-bridge bridge-mcp-selection-slide
hide: true
---

<script setup>
import './as-agentic-bridge/styles.css'
</script>

# Podle čeho agent vybere nástroj?

<p class="bridge-mcp-selection-request">„Najdi v dokumentaci podklady k problému po přenosu projektu.“</p>

<div class="bridge-mcp-tool-offer" v-click="1">
	<p class="bridge-mcp-example-note">Ilustrační nabídka nástrojů, nikoli skutečný výpis serveru.</p>
	<div class="bridge-mcp-tool-options">
		<section :class="{ 'is-selected': $clicks >= 2 }"><div class="bridge-mcp-section-heading"><mdi-book-search-outline aria-hidden="true" /><h2>Dokumentace</h2><mdi-check-circle-outline v-if="$clicks >= 2" class="bridge-tool-selected" aria-label="Vybraný nástroj" /></div><dl class="bridge-mcp-tool-metadata"><div><dt>Název</dt><dd><code>search_docs</code></dd></div><div><dt>Popis</dt><dd>Vyhledá odbornou dokumentaci a vrátí pasáže se zdroji.</dd></div><div><dt>Argumenty</dt><dd><code>query: string</code><br><code>version?: string</code></dd></div></dl></section>
		<section><div class="bridge-mcp-section-heading"><mdi-web aria-hidden="true" /><h2>Prohlížeč</h2></div><dl class="bridge-mcp-tool-metadata"><div><dt>Název</dt><dd><code>browser_snapshot</code></dd></div><div><dt>Popis</dt><dd>Vrátí strukturu aktuálně otevřené webové stránky.</dd></div><div><dt>Argumenty</dt><dd>V této ukázce bez argumentů.</dd></div></dl></section>
	</div>
</div>

<div class="bridge-mcp-tool-choice" v-click="2"><mdi-check-circle-outline aria-hidden="true" /><div><p><strong>Hledání dokumentace odpovídá popisu <code>search_docs</code>.</strong></p><p>Agent připraví vyhledávací dotaz do argumentu <code>query</code>.</p></div></div>

<div class="bridge-mcp-tool-routing" v-click="3"><p><strong>Aplikace směruje volání na server, který nástroj nabízí.</strong></p><p>Výběr ovlivňují také instrukce, kontext a povolené nástroje.</p></div>

<!--
Záměr: ukázat, z jakých informací vzniká návrh volání konkrétního nástroje, přibližně 60 sekund.

Počáteční stav: nadpis a požadavek uživatele jsou viditelné. Skupina 1 odhalí oba nástroje i označení ilustrační nabídky. Skupina 2 zvýrazní Dokumentaci linkou a symbolem výběru a odhalí zdůvodnění shody a přípravu argumentu query. Skupina 3 odhalí směrování aplikací a vliv instrukcí, kontextu i povolených nástrojů. Konečný stav: celá nabídka, shoda i směrování. Bez dalších interakcí.

Přesněji nejde o výběr „nějakého MCP“ podle názvu serveru. Model obvykle navrhuje volání konkrétního dostupného nástroje. Host propojí nástroj se správným klientem a serverem. Způsob pojmenování a vyhledávání nástrojů se liší podle aplikace.

[CLICK]
Server nabízí názvy nástrojů, jejich popisy a vstupní schémata. Host může nástroje modelu zpřístupnit přímo nebo přes vyhledávání na vyžádání. Na slidu je záměrně zjednodušená ilustrační nabídka: zapsané typy argumentů nejsou úplné JSON Schema a názvy nejsou tvrzením o skutečném rozhraní Knowledge Hubu. Popis vysvětluje účel, schéma říká, jaké argumenty lze předat.

[CLICK]
Požadavek mluví o vyhledání dokumentace. Tomu v této nabídce odpovídá search_docs, nikoli snímek už otevřené stránky. Agent vytvoří query; nezná-li verzi, nemá si ji vymyslet. Toto je vysvětlení vstupů a vhodnosti nástroje, nikoli záznam skrytého uvažování modelu nebo záruka deterministického výběru.

[CLICK]
Aplikace směruje navržené volání na server, kterému nástroj patří. Oprávnění a případné schválení se uplatní před provedením; dobrý popis nástroje je nenahrazuje. Výběr může ovlivnit uživatelův výslovný požadavek, projektové instrukce, předchozí výsledky a dostupná nabídka. Při podobných nástrojích více serverů je potřeba rozlišující popis a kontrola skutečného volání. Není správné tvrdit, že rozhoduje jen název nebo že každý nástroj musí být pokaždé celý vložen do kontextu.

Zdroj: https://modelcontextprotocol.io/docs/learn/architecture (metadata nástrojů, vstupní schémata a směrování hostem).
-->

---
layout: default
class: ot-slide topic-as-agentic-bridge bridge-mcp-comparison-slide
---

<script setup>
import './as-agentic-bridge/styles.css'
</script>

# MCP a API: propojené vrstvy, ne náhrady

<p class="bridge-mcp-lead">MCP sjednocuje přístup AI aplikace k nástrojům. API zpřístupňuje funkce konkrétní služby.</p>

<div class="bridge-mcp-comparison">
	<section>
		<div class="bridge-mcp-section-heading"><mdi-connection aria-hidden="true" /><h2>MCP</h2></div>
		<p>Standardní protokol mezi AI hostem a MCP serverem.</p>
		<div class="bridge-mcp-example" v-click="1">
			<h3>Když funkci používá AI host</h3>
			<ol class="bridge-mcp-example-path"><li><mdi-robot-outline aria-hidden="true" /><span>Host vytvoří MCP klienta pro server.</span></li><li><mdi-connection aria-hidden="true" /><span>Klient zjistí nástroje a zavolá například <code>get_order_status</code>.</span></li><li><mdi-message-reply-text-outline aria-hidden="true" /><span>Server vrátí výsledek; může přitom zavolat API.</span></li></ol>
			<p class="bridge-mcp-example-note">Klient a server mluví přes MCP; model sám spojení neotevírá.</p>
		</div>
	</section>
	<section>
		<div class="bridge-mcp-section-heading"><mdi-api aria-hidden="true" /><h2>API</h2></div>
		<p>Kontrakt, kterým služba nabízí data nebo operace klientům.</p>
		<div class="bridge-mcp-example" v-click="2">
			<h3>Když službu volá aplikace</h3>
			<ol class="bridge-mcp-example-path"><li><mdi-code-braces aria-hidden="true" /><span>Klient zná konkrétní API kontrakt a přihlašování.</span></li><li><mdi-api aria-hidden="true" /><span>Pošle požadavek, například <code>GET /orders/42</code>.</span></li><li><mdi-message-reply-text-outline aria-hidden="true" /><span>Služba vrátí data klientovi.</span></li></ol>
			<p class="bridge-mcp-example-note">REST přes HTTP je běžné API, ne jediný možný druh API.</p>
		</div>
	</section>
</div>

<div class="bridge-mcp-comparison-takeaway" v-click="3"><p><strong>MCP server může API zpřístupnit agentovi; API tím nezaniká.</strong></p><p>MCP volíme pro kompatibilní AI hosty a znovupoužitelné nástroje, přímé API pro integraci na úrovni aplikace. Oprávnění se kontrolují v každé vrstvě.</p></div>

<!--
Záměr: vysvětlit rozdíl mezi MCP a API a ukázat jejich běžné vrstvení, přibližně 60 sekund.

Počáteční stav: nadpis, úvodní věta a definice obou sloupců jsou viditelné. Skupina 1 odhalí celý příklad MCP; skupina 2 přímé volání API; skupina 3 shrnutí použití a oprávnění. Konečný stav: oba příklady a shrnutí. Bez dalších interakcí.

MCP a API neporovnáváme jako dvě alternativy na stejné vrstvě. MCP standardizuje komunikaci agentní aplikace s MCP serverem. API je rozhraní, kterým služba nabízí své operace nebo data; může jít například o REST API přes HTTP.

[CLICK]
AI host spravuje jednoho MCP klienta pro každý připojený server. Klient podle nabídky serveru zavolá nástroj přes MCP. MCP server může operaci provést sám, nebo ji delegovat na navázané API. Výsledek putuje zpět přes MCP klienta do host aplikace. Model navrhuje nástroj, ale připojení a směrování řídí host.

[CLICK]
Při přímé integraci volá klient API podle jeho konkrétního kontraktu: endpoint nebo operaci, schéma, autentizaci a chybové stavy. API není synonymum pro REST; REST přes HTTP je pouze častý typ webového API. Příklad GET /orders/42 je schematický, nikoli konkrétní rozhraní B&R.

[CLICK]
MCP dává smysl, když chceme jednotně nabídnout schopnosti různým MCP-kompatibilním AI hostům a nepsat pro každý vlastní adaptér. Přímé API dává smysl pro běžnou aplikační integraci s přesnou kontrolou nad kontraktem. Nejde o volbu buď/anebo: MCP server může být adaptér nad API. MCP samo o sobě neuděluje oprávnění; autentizaci, autorizaci a případné potvrzení akce musí řešit host, server i navázaná služba.

Zdroje: https://modelcontextprotocol.io/docs/learn/architecture (role hostu/klienta/serveru, tools/list a tools/call) a https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design (příklady REST API přes HTTP).
-->

---
layout: default
class: ot-slide topic-as-agentic-bridge bridge-rag-slide
hide: true
---

<script setup>
import './as-agentic-bridge/styles.css'
</script>

# RAG: odpověď opřená o dohledané podklady

<p class="bridge-lead">Retrieval-Augmented Generation: <strong>nejprve dohledat, potom odpovědět.</strong></p>

<p class="bridge-rag-question"><mdi-account-outline aria-hidden="true" />„Jak se má počítadlo chovat po resetu?“</p>

<div class="bridge-rag-example" aria-label="Ilustrační RAG nad modelovou projektovou specifikací, nikoli skutečná citace dokumentace B&R">
	<section :class="{ 'is-current': $clicks === 1 }" v-click="1">
		<h2>1 · Vyhledat</h2>
		<div class="bridge-rag-document" aria-label="Modelová specifikace S1, revize 3"><mdi-file-document-multiple-outline aria-hidden="true" /><strong>Specifikace</strong><span>S1 · revize 3</span></div>
	</section>
	<section :class="{ 'is-current': $clicks === 2 }" v-click="2">
		<h2>2 · Dodat kontext</h2>
		<div class="bridge-rag-passage" aria-label="Modelová pasáž S1, revize 3, paragraf 2: při resetu nastav gProductionCount na nulu"><mdi-file-search-outline aria-hidden="true" /><strong>Reset → 0</strong><span>S1 · § 2</span></div>
	</section>
	<section :class="{ 'is-current': $clicks === 3 }" v-click="3">
		<h2>3 · Sestavit odpověď</h2>
		<div class="bridge-rag-answer"><mdi-comment-quote-outline aria-hidden="true" /><strong>„Očekávej nulu.“</strong><span>Opora: [S1, § 2]</span></div>
	</section>
	<mdi-arrow-right class="bridge-rag-link at-context" v-click="2" aria-hidden="true" />
	<mdi-arrow-right class="bridge-rag-link at-answer" v-click="3" aria-hidden="true" />
</div>

<p class="bridge-takeaway" v-click="4"><strong>Dohledaný zdroj ještě nezaručuje správnou odpověď.</strong></p>
<p class="bridge-artifact-note" role="note">Ilustrační dokument i odpověď, ne živé vyhledávání. Člověk ověří zdroj, verzi i závěr.</p>

<!--
Záměr a čas: 60 sekund. Vysvětlit RAG ve třech bodech a odlišit jej od MCP.
Mapa odhalování: 0 = nadpis, definice, otázka a označení ilustrace; 1 = stoh dokumentů S1; 2 = dokument s lupou, Reset → 0 a první šipka;
3 = odpověď s citací a druhá šipka; 4 = závěr a neutrální diagram. Kliky 1–3 zvýrazňují právě vysvětlovaný symbol a nadpis oranžově. Bez dalších interakcí.

[CLICK]
Stoh dokumentů představuje projektové podklady. Retrieval je dohledání pasáží v připravených zdrojích. Artefakt je ilustrační: S1 je modelová projektová specifikace počítadla, revize 3, nikoli existující citace B&R Help. Záleží na pokrytí znalostní báze a na formulaci dotazu. Nejde automaticky o živé hledání na celém internetu.

[CLICK]
Dokument s lupou představuje vybranou pasáž, ne druhé hledání na internetu. Augmented znamená, že nalezené podklady rozšíří kontext pro odpověď. Modelová pasáž S1 revize 3 § 2 říká: při resetu nastav gProductionCount na 0, počet zvyšuj jen při dokončení kusu. Revize a paragraf cestují s pasáží. Ve skutečné odpovědi odkazy umožní otevřít zdroj a ověřit, zda podpírá tvrzení; zde není vymyšlená URL.

[CLICK]
Bublina s citací představuje odpověď odvozenou z podkladu. Generation je vytvoření odpovědi modelem s využitím těchto podkladů. Modelová odpověď odkazuje na [S1, § 2]; očekávanou nulu ověřte čtením hodnoty při zastaveném počítání. Nejde o naměřený výsledek. Špatně dohledanou nebo nesprávně vyloženou pasáž může model stále proměnit v chybný závěr. Kontrolujeme i verzi Automation Studia a soulad s projektem.

[CLICK]
MCP propojuje aplikaci s nástrojem; RAG je postup dohledání podkladů pro generování. MCP nástroj nemusí používat RAG. U Knowledge Hubu nepředpokládáme nedoložené interní detaily, například konkrétní embeddingy nebo reranking.

Zdroj: agentic-bridge-training/docs/agentic-bridge/slides/s3/02-mcp/lang.cs.js a sdílená ukázka Knowledge Hubu.
-->

---
layout: default
class: ot-slide topic-as-agentic-bridge bridge-knowledge-slide
clicks: 6
---

<script setup>
import './as-agentic-bridge/styles.css'
import KnowledgeFlow from './as-agentic-bridge/components/KnowledgeFlow.vue'
</script>

# MCP Knowledge Hub: znalosti se zdrojem

<p class="bridge-lead">Oficiální MCP B&amp;R pro dohledávání technologických podkladů.</p>

<KnowledgeFlow />

<div class="bridge-knowledge-details" v-click="6">
	<section>
		<h2>Vyhledávané zdroje</h2>
		<ul><li><mdi-help-circle-outline aria-hidden="true" />Automation Help</li><li><mdi-forum-outline aria-hidden="true" />B&amp;R Community: příspěvky a komentáře</li><li><mdi-tag-multiple-outline aria-hidden="true" />Verze a ukázkové projekty</li><li><mdi-code-tags aria-hidden="true" />Schválený interní zdrojový kód</li></ul>
	</section>
</div>

<!--
B&R MCP Knowledge Hub je cloudový RAG-style MCP server B&R R&D s jedním vstupním bodem pro dotaz. Instalace agentovi zpřístupní nástroj k dohledání podkladů pro konkrétní dotaz. Nejprve postupně odhalíme dotazovací cestu. Po vyhledání ji ve stejném prostoru nahradí návrat podkladů přes MCP k agentovi; obsah zdrojů a provozní údaje vycházejí z podkladů k tomuto školení.

Počáteční stav: nadpis, úvodní věta a označení směru toku. Řádek kroků i plocha detailu mají od začátku vyhrazené místo. Skupiny 1–4 odhalují Dotaz, Agenta, MCP a Knowledge Hub; pod tokem zůstává otázka ze sdílené ukázky. Skupina 5 je nahradí návratovým tokem a shrnutím role podkladů; skupina 6 odhalí vyhledávané zdroje; provozní údaje říká řečník. Hover nebo fokus dočasně nahradí shrnutí detailem pod tokem, kliknutí jej připne, Escape nebo Zavřít jej zavře. Konečný stav: návratový tok, shrnutí a zdroje, detail zavřený.

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
Zdroje zahrnují Automation Help, Community, informace o verzích, ukázkové projekty zaslané týmu R&D a schválený interní zdrojový kód. Údaj o ukázkových projektech pochází ze sdílené konverzace. Služba je v produkci od červnového vydání Automation Studio Code a aktualizuje se čtvrtletně; rok vydání zde není uveden a aktualizace neznamená živou synchronizaci ani úplnost. SAP support tickety nejsou zahrnuté a schválený interní kód neznamená libovolný interní ani zákaznický kód.

MCP (Model Context Protocol) zpřístupňuje nástroje a zdroje; RAG (Retrieval-Augmented Generation) dohledává podklady před generováním odpovědi. MCP propojuje, RAG vyhledává. Ukazujeme znalostní službu, nikoli ovládání PLC.

Podle sdílené konverzace jde o samostatný externí endpoint staršího ASCopilotu z ASCode, upraveného pro použití jako MCP server, nikoli stejné řešení jako implementace dánských kolegů. Knowledge Hub lze připojit vedle as-help a br-community; vedle překrývajících se zdrojů nabízí také ukázkové projekty. Více serverů samo nezaručuje, že agent vybere nejlepší zdroj nebo odpověď, proto výběr ověřte na typických dotazech.

Provozní údaje podle konverzace: limit 200 požadavků měsíčně lze zkontrolovat nástrojem `bnr_rate_limit_info` nebo v ASCode. Komunitní návod popisuje dva kroky pro uživatelský `mcp.json` (například `C:\Users\<UserName>\AppData\Roaming\Code\User`): doplnit URL endpointu a vlastní JWL token. Hodnoty vezměte z aktuálního návodu a token nikdy neukládejte do repozitáře. Uvedená zkušenost, že server fungoval lépe s levnějšími modely a používá GPT-5, je anekdotická, nikoli garance kvality či kompatibility.

Používáme dodaný snímek volání a zkrácený text výsledků. Odpověď je shrnutí sdílené ukázky, nikoli ověřený diagnostický postup. Neřešit zde diagnostiku ani neimprovizovat chybějící výsledky nebo citace. Při změně klikového kroku se detail zavře, aby nezůstal otevřený nad jinou fází toku.

Dohledaná odpověď se zdrojem je kontrolovatelnější, ne automaticky správná. Je nutné posoudit relevanci, verzi a soulad s projektem. Přístup se konfiguruje v klientovi; školení ukazuje Bearer JWT. Nikdy nezobrazovat reálné přihlašovací údaje a netvrdit anonymní přístup ani dostupnost bez dalších podmínek.
-->

---
layout: default
class: ot-slide topic-as-agentic-bridge bridge-knowledge-setup-slide
---

<script setup>
import './as-agentic-bridge/styles.css'
</script>

# Připojení Knowledge Hubu

<p class="bridge-lead">Přepracovaný ASCopilot z ASCode: cloudový RAG MCP B&amp;R R&amp;D, ne dánské řešení.</p>

<div class="bridge-hub-setup-grid">
	<section>
		<p class="bridge-hub-eyebrow">PŘIDÁNÍ · 2 KROKY</p>
		<h2>Uživatelský <code>mcp.json</code></h2>
		<p class="bridge-hub-config-location">Uživatelská složka: <code>%APPDATA%\Code\User</code></p>
		<ol>
			<li><span>01</span><div><strong>URL endpointu</strong><p>adresa Knowledge Hubu</p></div></li>
			<li><span>02</span><div><strong>Vlastní JWL token</strong><p>tajný přístupový údaj</p></div></li>
		</ol>
		<p class="bridge-hub-secret">Token patří do osobní konfigurace, ne do repozitáře.</p>
	</section>
	<section>
		<p class="bridge-hub-eyebrow">DOPLNĚK · DALŠÍ MCP</p>
		<h2>Mohou se vzájemně doplnit</h2>
		<p>Hub může fungovat vedle <code>as-help</code> a <code>br-community</code>. Zdroje se mohou překrývat; Hub navíc přináší ukázkové projekty zaslané týmu R&amp;D.</p>
		<p class="bridge-hub-verify"><strong>Ověř na typických dotazech:</strong> více serverů samo nezaručí, že agent vybere nejlepší zdroj.</p>
		<p class="bridge-hub-model-note">Serverní model GPT-5; lepší výsledky s levnějšími modely jsou jen anekdotická zkušenost.</p>
	</section>
</div>

<div class="bridge-hub-operations">
	<p class="bridge-hub-quota"><strong>200</strong><span>požadavků / měsíc</span></p>
	<p>Aktuální kvótu ověř přes <code>bnr_rate_limit_info</code> nebo v ASCode.</p>
</div>

<!--
Sdělení: Připojení má dva údaje. Hub může fungovat spolu s dalšími MCP servery a doplňovat jejich zdroje.
Veškerý obsah je viditelný bez klikání. Hlavní část vlevo ukazuje URL a osobní JWL token; doplněk vpravo souběh a ověření na typických dotazech.
Údaj o 200 požadavcích za měsíc, kontrole přes bnr_rate_limit_info/ASCode, endpointu B&R R&D a ukázkových projektech vychází ze sdílené konverzace; aktuální limit i návod ověřit v ASCode/Community.
Tvrzení o lepším výsledku s levnějšími modely je anekdotická zkušenost, nikoli doporučení či garance. Serverní model je podle sdílené konverzace GPT-5. Více připojených serverů samo nezaručí výběr nejlepšího zdroje.
-->

---
layout: default
class: ot-slide topic-as-agentic-bridge bridge-mcp-publishers-slide
---

<script setup>
import './as-agentic-bridge/styles.css'
</script>

# Stejný protokol, různí vydavatelé

<p class="bridge-lead">Komunitní MCP servery <strong>nejsou oficiální Knowledge Hub B&amp;R.</strong></p>

<div class="bridge-needs-list" aria-label="Vydavatelé znalostních MCP serverů">
	<div class="bridge-need-row" v-click="1"><mdi-forum-outline aria-hidden="true" /><strong>MCP Community</strong><span>Neoficiální komunitní MCP pro práci s obsahem B&amp;R Community.</span></div>
	<div class="bridge-need-row" v-click="2"><mdi-help-circle-outline aria-hidden="true" /><strong>MCP Help</strong><span>Neoficiální komunitní MCP pro práci s dokumentací Automation Help.</span></div>
	<div class="bridge-need-row" v-click="3"><mdi-domain aria-hidden="true" /><strong>Knowledge Hub</strong><span>Oficiální MCP B&amp;R: znalostní služba napříč připravenými zdroji.</span></div>
</div>

<!--
Záměr a čas: 60 sekund. Výslovně odlišit komunitní integrace od oficiálního MCP B&R.
Mapa odhalování: 0 = nadpis a úvod; 1 = MCP Community; 2 = MCP Help;
3 = Knowledge Hub. Finále = všechny tři servery a rozlišení původu. Bez dalších interakcí.

[CLICK]
Zde označený MCP Community je neoficiální komunitní integrace. Nezaměňovat jeho vydavatele s provozovatelem B&R Community ani s oficiálním Knowledge Hubem.

[CLICK]
Také zde označený MCP Help je neoficiální komunitní integrace. To, že nástroj čte oficiální dokumentaci, z něj nedělá oficiální produkt B&R.

[CLICK]
Knowledge Hub je oficiální MCP B&R. Může vyhledávat mimo jiné v Helpu a Community, ale nejde jen o jiné jméno pro dva zmíněné komunitní servery. Nabídka nástrojů, provoz a přístupové podmínky se posuzují samostatně.

Protokol MCP sám neříká nic o vydavateli ani garanci podpory. Prověřujeme konkrétní server, jeho původ, verzi a oprávnění. Označení oficiální není záruka správnosti každé vrácené odpovědi.

Zdroj rozlišení vydavatelů: potvrzený požadavek vlastníka prezentace, 30. 10. 2026.
-->

---
layout: default
class: ot-slide topic-as-agentic-bridge bridge-knowledge-tools-slide
hide: true
---

<script setup>
import './as-agentic-bridge/styles.css'
</script>

# Knowledge Hub: dostupné nástroje

<p class="bridge-lead">B&amp;R MCP Server: <strong>znalosti, agentní prompty a stav služby.</strong></p>

<table class="bridge-layers-table bridge-knowledge-tools-table" aria-label="Pět nástrojů B&R MCP serveru">
	<colgroup><col><col></colgroup>
	<thead><tr><th>Nástroj</th><th>Co poskytuje</th></tr></thead>
	<tbody>
		<tr v-click="1"><th scope="row"><code>bnr_knowledge_base_rag</code></th><td>Dohledané podklady ze znalostní báze B&amp;R včetně zdrojů.</td></tr>
		<tr v-click="2"><th scope="row"><code>bnr_list_agent_prompts</code></th><td>Seznam dostupných systémových promptů B&amp;R agentů.</td></tr>
		<tr v-click="3"><th scope="row"><code>bnr_get_agent_prompt</code></th><td>Úplný systémový prompt vybraného B&amp;R agenta.</td></tr>
		<tr v-click="4"><th scope="row"><code>bnr_rate_limit_info</code></th><td>Využití, limity a zbývající kvóty služeb.</td></tr>
		<tr v-click="5"><th scope="row"><code>health</code></th><td>Základní kontrolu dostupnosti služby.</td></tr>
	</tbody>
</table>

<!--
Záměr a čas: 60–90 sekund. Ukázat všech pět nástrojů z dodaného seznamu B&R MCP Serveru a rozlišit jejich role.
Mapa odhalování: 0 = nadpis, úvod a hlavička tabulky; 1 = RAG;
2 = seznam promptů; 3 = načtení promptu; 4 = limity; 5 = health.
Finále = všech pět nástrojů s popisy. Bez dalších interakcí.

[CLICK]
bnr_knowledge_base_rag dohledává podklady a vrací je se zdroji. Argumenty jsou query, top_k a include_images; předchozí ukázka používá top_k 5 a include_images false. Dohledané podklady je stále nutné posoudit.

[CLICK]
bnr_list_agent_prompts vrací identifikátory a názvy dostupných systémových promptů B&R agentů. Nejprve zjistíme nabídku, teprve potom vybíráme konkrétní prompt.

[CLICK]
bnr_get_agent_prompt načte úplný text systémového promptu pro agent_name získané ze seznamu. Načtení textu samo nespouští agenta ani mu neuděluje oprávnění.

[CLICK]
bnr_rate_limit_info vrací využití, limity a zbývající kvóty služeb i čas do jejich obnovení. Podle popisu rozhraní samotná kontrola kvótu nespotřebovává. Není to znalostní vyhledávání.

[CLICK]
health je jednoduchá kontrola dostupnosti služby. Úspěšný health check sám nepotvrzuje relevanci odpovědí RAG ani správnost projektového výsledku.

Zdroj: uživatelem dodaný screenshot „BnR AI Companion / B&R MCP Server“ a popisy pěti nástrojů připojeného MCP serveru, ověřeno 30. 10. 2026. Jde o aktuálně doloženou nabídku, nikoli garanci stejného seznamu v každé budoucí verzi. tools/list je metoda protokolu MCP, nikoli šestý nástroj.
-->

---
layout: default
class: ot-slide topic-as-agentic-bridge bridge-summary-slide
hide: true
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
