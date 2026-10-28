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

Rozšíření podle Webinar Agentic Engineering with B&R, 7:34–12:12,
a dodaného slidu „Why B&R offers an ideal environment“; ověřeno vůči
agentic-bridge-training/docs/agentic-bridge/slides/s5 a
agentic-engineering-in-automation-studio/{README.md,plugins/as-skills/README.md}.
Nový slide o textovém základu přidává přibližně 90 sekund.
Původní DOCX ani screenshot nekopírujeme do repozitáře.
-->

---
layout: default
class: ot-slide topic-as-agentic-bridge bridge-needs-slide
transition: fade-out
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
class: ot-slide topic-as-agentic-bridge bridge-foundation-slide
transition: fade-out
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
class: ot-slide topic-as-agentic-bridge bridge-architecture-slide
transition: fade-out
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
transition: fade-out
---

<script setup>
import './as-agentic-bridge/styles.css'
</script>

# Jak se z požadavku stane ověřená změna

<p class="bridge-request">„Přidej počítadlo hotových kusů a ověř reset.“</p>

<div class="bridge-loop" aria-label="Plán, implementace, ověření, test a lidská revize">
	<section class="bridge-loop-step" :class="{ 'is-current': $clicks === 1 }" v-click="1"><span class="bridge-step-number" aria-hidden="true">1</span><h2>Plan</h2><p>Projekt, pravidla a potřebná dokumentace.</p></section>
	<section class="bridge-loop-step" :class="{ 'is-current': $clicks === 2 }" v-click="2"><span class="bridge-step-number" aria-hidden="true">2</span><h2>Implement</h2><p>Změna podle zjištěných pravidel.</p></section>
	<section class="bridge-loop-step" :class="{ 'is-current': $clicks === 3 }" v-click="3"><span class="bridge-step-number" aria-hidden="true">3</span><h2>Verify</h2><p>Build a kontrola konfigurace.</p></section>
	<section class="bridge-loop-step" :class="{ 'is-current': $clicks === 4 }" v-click="4"><span class="bridge-step-number" aria-hidden="true">4</span><h2>Test</h2><p>ARsim: počet se zvýší; po resetu je nula.</p></section>
	<section class="bridge-loop-review" :class="{ 'is-current': $clicks === 5 }" v-click="5"><mdi-account-check-outline aria-hidden="true" /><h2>Lidská revize</h2><p>Změna i důkazy.</p></section>
</div>

<div class="bridge-return" v-click="4">
	<svg viewBox="0 0 900 64" preserveAspectRatio="none" aria-hidden="true"><path d="M888 0V40H12V2M4 10l8-8 8 8" /></svg>
	<p><strong>Chyba nebo výsledek testu zpět do kontextu agenta</strong></p>
</div>

<!--
Jde o ilustrační scénář, nikoli tvrzení o právě předvedeném úspěšném demu. Počáteční stav: nadpis a požadavek. Skupiny 1–3 odhalují Plan, Implement a Verify; právě vysvětlovaný krok má oranžovou linku a číslo. Skupina 4 odhalí Test i návratovou spojnici do plánování. Skupina 5 přidá lidskou revizi. Konečný stav: všech pět kroků a návrat zpětné vazby. Bez dalších interakcí.

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
class: ot-slide topic-as-agentic-bridge bridge-mcp-slide
transition: fade-out
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

<p class="bridge-mcp-takeaway" v-click="4"><strong>MCP je společný protokol, ne model ani databáze.</strong> Díky němu mohou MCP-kompatibilní AI aplikace používat stejný server bez zvláštní integrace pro každý nástroj.</p>

<!--
Záměr: odpovědět kolegovi programátorovi, který se ptá „A co je vlastně MCP?“, přibližně 60–90 sekund.

Počáteční stav: nadpis, definice, všechny tři role diagramu a řádek Tools / Resources / Prompts jsou viditelné. Skupina 1 odhalí nabídku nástrojů, skupina 2 volání, skupina 3 provedení a skupina 4 návrat výsledku společně se spodním shrnutím. Konečný stav: celý čtyřkrokový průběh i shrnutí. Bez dalších interakcí.

„MCP“ znamená Model Context Protocol. Představ si, že chceš, aby AI editor uměl vyhledat dokumentaci nebo spustit nástroj. Bez společné dohody by se integrace musela přizpůsobovat každé aplikaci zvlášť. MCP je společný protokol, kterému rozumí AI aplikace i připojené nástroje. Není to další model, databáze ani kouzelný přístup k počítači.

[CLICK]
Vlevo je AI aplikace, třeba IDE s agentem. Uvnitř ní běží MCP klient: část programu, která umí protokol MCP. Klient se připojí k MCP serveru a zjistí, jaké nástroje server nabízí a jaké argumenty očekávají. Proto je na slidu otázka „Co umíš?“; skutečná zpráva se jmenuje tools/list.

Řádek pod kartami shrnuje tři druhy schopností, které může MCP server nabídnout: nástroje k volání, data pro kontext a připravené šablony zadání.

[CLICK]
Když agent potřebuje například vyhledat dokumentaci, navrhne odpovídající nástroj a vstupy. Aplikace rozhodne, zda volání povolí; její klient předá požadavek serveru. Tomuto kroku se v MCP říká tools/call. Model sám neotevírá spojení se serverem.

[CLICK]
MCP server je často adaptér: převede standardní požadavek na konkrétní práci. Může zavolat API, spustit CLI, číst soubory nebo použít vlastní kód. API je jen jedna možnost, ne povinná součást MCP serveru. Server vrátí výsledek klientovi a ten jej předá aplikaci, aby z něj agent mohl odpovědět.

[CLICK]
Představ si MCP jako společnou zásuvku pro integrace: server nemusí být přepsán pro každý MCP-kompatibilní editor. Přirovnání má hranice: MCP nezaručuje, že každá aplikace podporuje každou schopnost serveru, ani samo neřeší přihlášení či oprávnění. Proto kontrolujeme, který server spouštíme a co mu dovolíme.

Nejprve ukážeme, podle čeho agent vybere nástroj. Potom odlišíme MCP od API a přejdeme ke konkrétní znalostní službě přístupné přes MCP.

Zdroj: https://modelcontextprotocol.io/docs/learn/architecture (role host/client/server, tools/list, tools/call a návrat výsledku).
-->

---
layout: default
class: ot-slide topic-as-agentic-bridge bridge-mcp-selection-slide
transition: fade-out
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
transition: fade-out
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
class: ot-slide topic-as-agentic-bridge bridge-knowledge-slide
transition: fade-out
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
	<section>
		<h2>Vyhledávané zdroje</h2>
		<ul><li><mdi-help-circle-outline aria-hidden="true" />Automation Help</li><li><mdi-forum-outline aria-hidden="true" />B&amp;R Community: příspěvky a komentáře</li><li><mdi-tag-multiple-outline aria-hidden="true" />Informace o verzích</li><li><mdi-code-tags aria-hidden="true" />Schválený interní zdrojový kód</li></ul>
	</section>
	<section class="bridge-illustrative-query">
		<mdi-chat-question-outline aria-hidden="true" />
		<div><h2>Ilustrační dotaz</h2><p>„Po přenosu projektu startuje X20 CPU do SERVICE místo RUN. Jaké mohou být příčiny?“</p><p class="bridge-query-caveat">Příklad dotazu, nikoli živé vyhledávání ani ověřený diagnostický postup.</p></div>
	</section>
</div>

<p class="bridge-knowledge-status" v-click="7">V produkci od červnového vydání Automation Studio Code · aktualizace čtvrtletně</p>
<p class="bridge-knowledge-limit" v-click="7"><strong>Zatím nezahrnuto:</strong> SAP support tickety</p>

<!--
B&R MCP Knowledge Hub je online vyhledávací služba pro technologické znalosti B&R. Nejprve postupně odhalíme dotazovací cestu. Po vyhledání ji ve stejném prostoru nahradí návrat podkladů přes MCP k agentovi; obsah zdrojů a provozní údaje vycházejí z podkladů k tomuto školení.

Počáteční stav: nadpis, úvodní věta a označení směru toku. Řádek kroků i plocha detailu mají od začátku vyhrazené místo. Skupiny 1–4 odhalují Dotaz, Agenta, MCP a Knowledge Hub; pod tokem zůstává otázka ze sdílené ukázky. Skupina 5 je nahradí návratovým tokem a shrnutím role podkladů; skupina 6 odhalí zdroje s ilustračním dotazem a skupina 7 provozní údaje. Hover nebo fokus dočasně nahradí shrnutí detailem pod tokem, kliknutí jej připne, Escape nebo Zavřít jej zavře. Konečný stav: návratový tok, shrnutí, zdroje, ilustrační dotaz a provozní údaje, detail zavřený.

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
class: ot-slide topic-as-agentic-bridge bridge-mcp-connection-slide
transition: fade-out
---

<script setup>
import './as-agentic-bridge/styles.css'
</script>

# MCP server: připojit a ověřit

<p class="bridge-mcp-lead">Samotný záznam v konfiguraci ještě nedokazuje funkční připojení.</p>

<div class="bridge-mcp-connection-grid">
	<section>
		<div class="bridge-mcp-section-heading"><mdi-server-network aria-hidden="true" /><h2>Server a rozsah nastavení</h2></div>
		<p class="bridge-mcp-command">Ve VS Code: <code>MCP: Add Server</code></p>
		<dl class="bridge-mcp-settings">
			<div v-click="1"><dt>Lokálně</dt><dd>Proces na počítači · stdio</dd></div>
			<div v-click="1"><dt>Vzdáleně</dt><dd>URL služby · HTTP</dd></div>
			<div v-click="2"><dt>Uživatel</dt><dd>Osobní nastavení pro více projektů.</dd></div>
			<div v-click="2"><dt>Projekt</dt><dd>Sdílená konfigurace v Gitu, bez tajných údajů.</dd></div>
		</dl>
	</section>
	<section>
		<div class="bridge-mcp-section-heading"><mdi-check-network-outline aria-hidden="true" /><h2>Důkaz funkčního připojení</h2></div>
		<ol class="bridge-mcp-verification" v-click="3"><li><mdi-check-circle-outline aria-hidden="true" /><span>Byl zavolán nástroj správného MCP serveru.</span></li><li><mdi-check-circle-outline aria-hidden="true" /><span>Vrátil očekávaná data bez chyby spojení.</span></li><li><mdi-check-circle-outline aria-hidden="true" /><span>Odpověď agenta vychází z vráceného výsledku.</span></li></ol>
		<p class="bridge-mcp-example-note" v-click="3">Přesvědčivá odpověď sama o sobě není důkaz.</p>
	</section>
</div>

<p class="bridge-mcp-security" v-click="4"><mdi-shield-key-outline aria-hidden="true" /><span><strong>Prověřit server a oprávnění.</strong> Přihlašovací údaje mimo Git i chat.</span></p>
<p class="bridge-mcp-configuration-note" v-click="4">Formát konfigurace a načítání nástrojů závisí na harnessu a jeho verzi.</p>

<!--
Záměr: ukázat praktickou cestu od konfigurace k ověřenému použití, přibližně 90 sekund.

Počáteční stav: nadpis, úvodní věta, nadpisy obou sloupců a příkaz MCP: Add Server jsou viditelné. Skupina 1 odhalí společně lokální a vzdálený server, skupina 2 společně uživatelský a projektový rozsah, skupina 3 celé tři důkazy vpravo i upozornění pod nimi, skupina 4 bezpečnostní řádek a poznámku o konfiguraci. Konečný stav: všechny informace. Bez interaktivních ovládacích prvků.

Příkaz MCP: Add Server je konkrétní cesta pro VS Code; ostatní harnessy mají vlastní postupy. Použijeme endpoint nebo spouštěcí příkaz od důvěryhodného vydavatele. Neinstalujeme neznámý server pouze podle přesvědčivého popisu.

[CLICK]
Lokální server může komunikovat přes standardní vstup a výstup procesu, vzdálená služba přes HTTP. HTTP může používat i server na stejném počítači; jde o běžné příklady nasazení, ne zákaz jiných kombinací. Lokální proces může vykonávat kód a vzdálená služba může získávat přenesená data. Je třeba rozumět oprávněním a přihlašování.

[CLICK]
Uživatelský rozsah používáme pro osobní servery napříč projekty. Projektový rozsah sdílí konfiguraci s týmem. Neznamená to sdílení tokenů nebo osobních oprávnění. Formát i možnosti konkrétního souboru ověříme v dokumentaci používané verze; nepřenášíme slepě servers a mcpServers mezi prostředími.

[CLICK]
Zadáme jednoduchý úkol, který server skutečně podporuje a má malý dopad. V záznamu konverzace rozbalíme skutečné volání nástroje: správný server, argumenty, úspěšný návrat dat a návaznost odpovědi na výstup. Samotný běžící server ani obecná odpověď modelu nejsou důkazem integrace. Při potížích kontrolujeme výstup serveru, dostupnost nástrojů, síť a přihlášení.

[CLICK]
Konfiguraci i vydavatele před spuštěním prověříme. Přihlášení a tajné údaje řešíme mechanismem daného prostředí, nikdy reálným tokenem na slidu, v Gitu nebo v chatu. Nepředpokládáme stejné proměnné a stejnou správu tajemství ve všech formátech.

Definice nástrojů mohou spotřebovávat kontext, ale způsob jejich načítání, vyhledávání a předávání modelu závisí na harnessu a verzi. Netvrdíme, že každý server posílá všechny definice při každém požadavku. Zapínáme jen potřebné nástroje. Plugin může přinést MCP konfiguraci, ale není to univerzální vlastnost všech pluginů a klientů; naváže AS Repository.

Zdroj: https://code.visualstudio.com/docs/copilot/customization/mcp-servers (připojení, rozsah, důvěra a ověření prvního volání).
-->

---
layout: default
class: ot-slide topic-as-agentic-bridge bridge-summary-slide
transition: fade-out
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
