---
layout: default
class: ot-slide topic-success-stories success-story-slide
---

<script setup>
import './success-stories/styles.css'
</script>

# Copilot opravil komunikaci napříč ARM a x86

<p class="success-category">PLC / komunikace</p>

<div class="success-three-columns">
	<section>
		<span class="success-label">Výzva</span>
		<h2>Jeden projekt, různé platformy</h2>
		<p>Nejprve spolu přes UDP komunikovala dvě ARM PLC. Po přidání PLC 3100 s x86 procesorem se data ve strukturách s hodnotami LREAL přestala přenášet správně kvůli rozdílnému bajtovému zarovnání.</p>
	</section>
	<section>
		<span class="success-label">Postup</span>
		<h2>Návrh od Copilotu, kontrola člověkem</h2>
		<p>Copilot navrhl upravit rozmístění polí a doplnit výplňové bajty. Autor prošel výsledek a přenesl změny do projektu.</p>
	</section>
	<section>
		<span class="success-label">Přínos</span>
		<h2>Méně ručního procházení struktur</h2>
		<p>Místo ruční kontroly každé struktury a podstruktury se práce soustředila na revizi návrhu.</p>
	</section>
</div>

<p class="success-outcome"><strong>Výsledek:</strong> Po kontrole navržených úprav struktur a jejich přenosu do projektu komunikace mezi PLC fungovala správně.</p>

<!--
*Záměr a čas: 1:00. Ukázat konkrétní, malý úkol, na kterém AI ušetřila ruční práci bez vynechání kontroly.*
*Počáteční stav: celý titulek i tři obsahové sloupce jsou viditelné; slide nemá klikací odhalení ani interaktivní prvky.*

Nejprve spolu přes UDP komunikovala dvě ARM PLC. Po přidání PLC 3100 s x86 procesorem se data ze struktur s LREAL nepřenášela správně kvůli odlišnému bajtovému zarovnání. Copilot navrhl upravit rozmístění polí a doplnit výplňové bajty. Autor návrh zkontroloval, přenesl změny do projektu a komunikace pak fungovala správně.

*Konečný stav: stejný jako počáteční; všechny tři části příběhu zůstávají viditelné.*
-->

---
layout: default
class: ot-slide topic-success-stories success-story-slide
---

<script setup>
import './success-stories/styles.css'
</script>

# Migrace AS4 → AS6 s kontextem projektu

<p class="success-category">Migrace / engineering</p>

<div class="success-migration-grid">
	<section>
		<h2>Od migračního reportu k řízené práci</h2>
		<ol class="success-migration-steps">
			<li>
				<strong>Začít reportem</strong>
				<p>AS6 Migration Tool poskytl HTML report jako základ seznamu úkolů, milníků a kontrol pro AS6.</p>
			</li>
			<li>
				<strong>Udržovat kontext</strong>
				<p>Dokumentace zachycuje strukturu projektu, znalosti, rozhodnutí, známé problémy i návaznost na Git commity.</p>
			</li>
			<li>
				<strong>Zapojit agenta s jasnými hranicemi</strong>
				<p>Agent nejprve projde dokumentaci a navrhne posouzení. Změny provádí až po výslovném zadání; po práci aktualizuje poznámky.</p>
			</li>
		</ol>
	</section>
	<aside class="success-project-map" aria-label="Struktura projektu po migraci">
		<h2>Projektová báze</h2>
		<div><code>project/</code><span>projekt pro AS6</span></div>
		<div><code>.github/</code><span>nastavení agentického workflow</span></div>
		<div><code>docs/</code><span>znalosti, úkoly a posouzení</span></div>
		<div><code>exports/</code><span>předávané soubory a exporty</span></div>
	</aside>
</div>

<p class="success-outcome"><strong>Výsledek:</strong> Agent nyní dokáže samostatně najít a vyřešit většinu popsaných problémů; dokumentace a odkazy na commity pomáhají zachovat návaznost práce.</p>

<!--
*Záměr a čas: 1:15. Vysvětlit, že přínos nevznikl jen volbou modelu, ale přípravou kontextu a řízením práce.*
*Počáteční stav: celý migrační postup, adresářová mapa i výsledek jsou viditelné; slide nemá klikací odhalení ani interaktivní prvky.*

Projekt s mappView, OPC UA CS, AlarmX a UserX přecházel z Automation Studio 4 do AS6. Počátečním podkladem byl HTML report z migračního nástroje. Tým k němu přidal strukturovanou dokumentaci, úkoly s validačními body a záznamy o rozhodnutích a problémech. Při řešení potíží agent nejprve čte projektový kontext a poskytuje posouzení; implementace následuje až na výslovnou žádost. Zdroj uvádí, že agent v této fázi dokáže automaticky identifikovat a řešit většinu problémů.

*Konečný stav: stejný jako počáteční; celý postup a výsledek jsou stále viditelné.*
-->

---
layout: default
class: ot-slide topic-success-stories success-story-slide
---

<script setup>
import './success-stories/styles.css'
</script>

# Od XML s 3 200 uzly k zákaznickému řešení

<p class="success-category">OPC UA / zákaznické řešení</p>

<div class="success-ua-grid">
	<section>
		<h2>Ruční mapování nebylo reálné</h2>
		<p>Zákaznický Schneider PLC s CoDeSys nabízel OPC UA server s přibližně 3&nbsp;200 proměnnými. B&amp;R PLC je mělo číst jako klient přes EasyUaClnt; změna stabilního projektu na straně zákazníka nepřipadala v úvahu.</p>
		<h2>Jednorázový návrh se změnil v nástroj</h2>
		<p>AI z XML a příkladů knihovny vytvořila zhruba 50 čtecích bloků po 64 proměnných a odpovídající zápisové FBs. Z postupu vznikl offline PowerShell nástroj: připraví struktury, úlohy i proměnné pro B&amp;R OPC UA server a mappView. Python simulátor umožňuje test bez Schneider PLC.</p>
	</section>
	<figure class="success-ua-image">
		<img src="/topics/success-stories/SuccessStory3/image.png" alt="Simulátor OPC UA s proměnnými vedle odpovídající struktury v Automation Studio">
		<figcaption>Test simulátoru a mapovaných proměnných</figcaption>
	</figure>
</div>

<p class="success-outcome"><strong>Přínos:</strong> Rychlé řešení pomohlo zákazníkovi, který B&amp;R už zvažoval, rozhodnout se pro spolupráci. AI nebyla jediným důvodem.</p>

<!--
*Záměr a čas: 1:30. Zdůraznit cestu od nemožného ručního mapování k opakovatelnému nástroji a nepřisuzovat AI celé obchodní rozhodnutí.*
*Počáteční stav: celý problém, ukázka simulátoru i opatrně formulovaný přínos jsou viditelné; slide nemá klikací odhalení ani interaktivní prvky.*

Zákaznická strana používala Schneider PLC s CoDeSys jako OPC UA server; na straně B&R byl klient EasyUaClnt. XML obsahovalo zhruba 3 200 proměnných. AI nejprve vytvořila čtecí subscription FB po skupinách 64 proměnných a odpovídající WriteBulk FB. Opakovanou práci pak tým převedl do offline PowerShell aplikace, která vytvoří datové typy, úlohy i proměnné pro B&R OPC UA server a mappView. Python simulátor poskytl testovací server bez potřeby připojit skutečný hardware. Rychlost řešení přispěla k rozhodnutí zákazníka, ale nebyla jeho jedinou příčinou.

*Konečný stav: stejný jako počáteční; ukázkový obrázek i všechny informace zůstávají viditelné.*
-->

---
layout: default
class: ot-slide topic-success-stories success-story-slide
---

<script setup>
import './success-stories/styles.css'
</script>

# Support Agent: návrh náhrady HW sestavy

<p class="success-category">HW konfigurace / podpora návrhu</p>

<div class="success-demo-grid">
	<figure class="success-demo-image success-hw-image">
		<img src="/topics/success-stories/support-agent-hw.png" alt="Support Agent navrhuje variantu ACOPOS P3 a doptává se na společný DC bus nebo samostatné moduly">
		<figcaption>Pracovní návrh a upřesnění požadavků v dialogu</figcaption>
	</figure>
	<section class="success-demo-copy">
		<h2>Výchozí sestava a vybrané varianty</h2>
		<p>Kolega zadal stávající ACOPOSmulti sestavu a požádal o náhradu ve variantách ACOPOS P3 a ACOPOS M4.</p>
		<h2>Upřesňující dotazy místo hádání</h2>
		<p>Agent se doptával na požadovanou topologii a společný DC bus. Po upřesnění požadavků navrhl náhradu z předvybraných možností.</p>
	</section>
</div>

<p class="success-outcome"><strong>Přínos:</strong> Konkrétní podklad pro další technické ověření místo ručního porovnávání všech variant.</p>

<!--
Kolega potřeboval pomoc s návrhem náhrady hardwarové sestavy. Agent dostal seznam stávajících modulů a předvybrané cílové varianty ACOPOS P3 a ACOPOS M4.

Dialog nejprve zpřesnil zadání: zda mají osy zůstat na společném DC busu, nebo mají být použity samostatné moduly. Agent upozornil, že zachování počtu os neznamená nutně stejný počet modulů a že je potřeba posuzovat požadované proudy a výkony.

Výsledkem byl návrh náhrady jako podklad pro práci technika. Nejde o potvrzení kompatibility ani o schválený objednací kusovník; před realizací je třeba ověřit konkrétní moduly, napájení, dimenzování a bezpečnostní požadavky.
-->

---
layout: default
class: ot-slide topic-success-stories success-story-slide
---

<script setup>
import './success-stories/styles.css'
</script>

# Support Agent: od mechanismu k návrhu pohonu

<p class="success-category">Diplomová práce na ČVUT · autor Tomáš Bejček</p>

<div class="success-demo-grid">
	<figure class="success-demo-image">
		<img src="/topics/success-stories/support-agent-mechanism.png" alt="Mechanismus z diplomové práce s agentem vyznačeným hřebenem a pastorkem">
		<figcaption>Agent rozpoznal a označil hřeben a pastorek</figcaption>
	</figure>
	<section class="success-demo-copy">
		<h2>Nejprve porozumět obrázku</h2>
		<p>Obchodník předal agentovi obrázek mechanismu. Agent rozpoznal jeho části a vyznačil hřeben a pastorek přímo v obrázku.</p>
		<h2>Potom doplnit parametry pohybu</h2>
		<p>Z rozměrů, materiálu, hmotnosti a požadovaného pohybu připravil orientační výpočet dynamiky a návrh motoru.</p>
	</section>
</div>

<p class="success-outcome"><strong>Přínos:</strong> Podklad pro dimenzování pohonu — nikoli náhrada ověření v ServoSoftu.</p>

<!--
Příkladem je mechanismus z diplomové práce na ČVUT, jejímž autorem je Tomáš Bejček. Obchodník předal agentovi obrázek a agent nejprve identifikoval hřeben a pastorek a označil je v obrázku.

V dalších krocích dostal rozměry a materiál pastorku, hmotnost pohybující se části a požadavky na pohyb. Na jejich základě připravil orientační výpočty zrychlení, otáček, momentu setrvačnosti a potřebného momentu a navrhl kandidáty motorů.

Jde o předběžnou podporu podobného typu úlohy, jakou řeší dimenzování v ServoSoftu, nikoli o prokázanou ekvivalenci výsledků. Zjednodušený model a porovnání maximálních momentů nestačí pro konečný výběr. Technik musí ověřit celý pohybový cyklus, momentově-otáčkovou charakteristiku, efektivní zatížení, ztráty i rezervy ve vhodném dimenzačním nástroji.
-->

---
layout: default
class: ot-slide topic-success-stories success-story-slide
---

<script setup>
import './success-stories/styles.css'
</script>

# MCP v terénu: technik řeší stroj přes chat

<p class="success-category">MCP / servis v terénu</p>

<div class="success-demo-grid">
	<figure class="success-demo-image">
		<img src="/topics/success-stories/SuccessStory4/immagine.png" alt="Ukázka chatového rozhraní MCP Desk s technickým dotazem a dostupnými nástroji">
		<figcaption>Ukázka rozhraní MCP Desk</figcaption>
	</figure>
	<section class="success-demo-copy">
		<p class="success-demo-status">Připravovaná demonstrace — nikoli potvrzený výsledek zákaznického nasazení.</p>
		<h2>Technická pomoc přímo u stroje</h2>
		<p>Plánovaný scénář propojí chat v mappView s MCP servery, aby technik v terénu mohl hledat podklady pro diagnostiku stroje a zlepšování procesu.</p>
		<h2>Demo model není cílové nasazení</h2>
		<p>Rozhraní má využít Python a Flask. Pro demonstraci integrace se počítá s cloudovým modelem kompatibilním s OpenAI; zamýšlený zákaznický případ používá lokální Ollama model, jehož výkon na současném hardware zatím nestačí.</p>
	</section>
</div>

<!--
*Záměr a čas: 1:00. Oddělit připravovanou demonstraci od již ověřených zákaznických výsledků a stručně vysvětlit její technický cíl.*
*Počáteční stav: text, stav demonstrace i ukázkový obrázek jsou viditelné; slide nemá klikací odhalení ani interaktivní prvky.*

Tento podklad popisuje demo, nikoli hotové zákaznické nasazení. Zamýšleným scénářem je pomoc technikovi při ladění stroje a procesu přes chat integrovaný do mappView, Python/Flask a MCP nástroje. Cloudový model má být použit jen k demonstraci MCP integrace. Skutečný zákaznický případ má běžet s lokálním modelem Ollama, ale dostupný hardware zatím neposkytuje dostatečný výkon.

*Konečný stav: stejný jako počáteční; označení rozpracovaného dema i obrázek zůstávají viditelné.*
-->

---
layout: default
class: ot-slide topic-success-stories success-story-slide
---

<script setup>
import './success-stories/styles.css'
</script>

# Commissioning: z MQTT dat do historického trendu

<p class="success-category">MQTT / ověřování dat při uvádění do provozu</p>

<div class="success-demo-grid">
	<figure class="success-demo-image">
		<img src="/topics/success-stories/mqtt-commissioning-trend.png" alt="Webová aplikace zobrazuje historický trend napětí a polohy klapek z načtených JSONL záznamů, včetně výběru časového okna">
		<figcaption>Historický trend vybraných signálů z JSONL záznamů</figcaption>
	</figure>
	<section class="success-demo-copy">
		<h2>Ověřit komunikaci i předávaná data</h2>
		<p>Kolega při commissioning potřeboval ověřit MQTT komunikaci s cloudovým serverem a obsah předávaných dat. Data se ukládala do JSON záznamů.</p>
		<h2>Vlastní webová aplikace místo čtení logů</h2>
		<p>Aplikace záznamy rozparsuje a zobrazí vybrané signály v historickém trendu. Umožňuje zvolit časové okno a porovnat průběhy hodnot.</p>
	</section>
</div>

<p class="success-outcome"><strong>Přínos:</strong> Přehledná kontrola vývoje zaznamenaných hodnot jako podklad pro ověřování dat při commissioning.</p>

<!--
Při uvádění do provozu kolega potřeboval ověřit MQTT komunikaci s cloudovým serverem a data, která si systémy předávají. K dispozici měl data logovaná do JSON.

Vytvořil si proto webovou aplikaci, která záznamy rozparsuje a umožní vybrané signály zobrazit v historickém trendu. Ukázka pracuje se soubory JSONL a nabízí výběr signálů, časového okna i normalizaci průběhů pro jejich porovnání.

Místo procházení jednotlivých záznamů lze sledovat, jak se hodnoty vyvíjely v čase. Trend pomáhá ověřit obsah zaznamenaných dat; sám o sobě ale nedokazuje správné doručení všech MQTT zpráv ani správnost celé komunikace.
-->

---
layout: default
class: ot-slide topic-success-stories success-story-slide
---

<script setup>
import './success-stories/styles.css'
</script>

# Prediktivní údržba Mdoctor

<p class="success-category">AI / diagnostika strojů</p>

<div class="success-three-columns">
	<section>
		<span class="success-label">Sběr dat</span>
		<h2>Provozní signály místo odhadů</h2>
		<p>MDoctor pracuje s vibracemi, teplotou, hlukem a proudem. Senzory a měřicí moduly dodávají data pro sledování stavu stroje na platformě B&amp;R.</p>
	</section>
	<section>
		<span class="success-label">Vyhodnocení</span>
		<h2>AI rozpoznává poruchové stavy</h2>
		<p>Modely se trénují na označených měřeních. Ukázky testů zahrnují rozpoznávání nesouososti pohonu a uvolněného uchycení stroje.</p>
	</section>
	<section>
		<span class="success-label">Údržba</span>
		<h2>Z diagnostiky k rozhodnutí</h2>
		<p>Diagnostické výsledky pomáhají posoudit stav zařízení a plánovat servis. Řešení podporuje průběžný monitoring i diagnostiku na vyžádání.</p>
	</section>
</div>

<p class="success-outcome"><strong>Cíl:</strong> Včas odhalit vznikající problémy a omezit neplánované odstávky.</p>

<!--
MDoctor je platforma pro prediktivní údržbu na technologii B&R. Základem nejsou odhady, ale měření provozních signálů: vibrací, teploty, hluku a proudu.

AI modely se učí z označených měření a poskytují diagnostické výsledky. Prezentované testy ukazují například rozpoznávání nesouososti pohonu a uvolněného uchycení stroje. Jde o konkrétní testovací scénáře, nikoli o záruku rozpoznání každé poruchy na libovolném stroji.

Výsledky slouží jako podklad pro posouzení stavu zařízení a plánování údržby. MDoctor může být součástí průběžného monitoringu nebo diagnostické služby na vyžádání. Cílem je odhalit problémy dříve a omezit neplánované odstávky; neuvádíme zde garantovanou úsporu ani přesnost.
-->

---
layout: default
class: ot-slide topic-success-stories success-story-slide
---

<script setup>
import './success-stories/styles.css'
</script>

# AI už dnes přináší hodnotu

<div class="success-overview-grid" aria-label="Čtyři příklady přínosu AI">
	<section>
		<h2>Quality Check</h2>
		<div class="success-overview-block">
			<span class="success-label">Výzva</span>
			<p>Chyba v Teach/Compare vedla k vyřazování dobrých výrobků; celosvětově se takto zmetkovalo asi 0,2&nbsp;% produkce.</p>
		</div>
		<div class="success-overview-block">
			<span class="success-label">Co odhalila AI</span>
			<p>Našla chybu v algoritmu a upozornila na zachycení hodnoty integrálu před optimalizací senzorových dat.</p>
		</div>
		<div class="success-overview-block">
			<span class="success-label">Výsledek</span>
			<p>Problém, který by nejspíš zůstal skrytý, a výrazná příležitost omezit zmetkovitost ve výrobě.</p>
		</div>
		<p class="success-overview-proof">Vyšší produktivita, méně odpadu</p>
	</section>
	<section>
		<h2>Wireshark Analysis</h2>
		<div class="success-overview-block">
			<span class="success-label">Výzva</span>
			<p>Rozsáhlé Wireshark záznamy s nejasným chováním protokolu by ručně zabraly celé dny.</p>
		</div>
		<div class="success-overview-block">
			<span class="success-label">Co odhalila AI</span>
			<p>Porovnala záznamy s dokumentací a našla limit 100 proměnných i chybějící požadavek continue.</p>
		</div>
		<div class="success-overview-block">
			<span class="success-label">Výsledek</span>
			<p>Příčina byla určena během minut a s technicky správným vysvětlením.</p>
		</div>
		<p class="success-overview-proof">Dny analýzy → minuty</p>
	</section>
	<section>
		<h2>AS4 → AS6 Conversion Tool</h2>
		<div class="success-overview-block">
			<span class="success-label">Výzva</span>
			<p>Složitá migrace, informace roztříštěné na různých místech a rozdíly mezi jednotlivými projekty.</p>
		</div>
		<div class="success-overview-block">
			<span class="success-label">Co vytvořila AI</span>
			<p>Sjednotila podklady a připravila převodní referenci pro konkrétní projekt; vznikl deterministický konverzní nástroj.</p>
		</div>
		<div class="success-overview-block">
			<span class="success-label">Výsledek</span>
			<p>Opakovatelný převod AS4 → AS6 dostupný týmům po celém světě.</p>
		</div>
		<p class="success-overview-proof">Konverze téměř okamžitě</p>
	</section>
	<section>
		<h2>Consulting</h2>
		<div class="success-overview-block">
			<span class="success-label">Výzva</span>
			<p>Zákazníkům často chybí AI zkušenosti; vyčlenění vlastních lidí je nákladné. Potřebují škálovat vývoj a uvolnit R&amp;D od výroby.</p>
		</div>
		<div class="success-overview-block">
			<span class="success-label">Co nabízí B&amp;R</span>
			<p>Hodinové konzultace, které zákazníky uvedou do nových AI workflow a pomohou jim je zavést.</p>
		</div>
		<div class="success-overview-block">
			<span class="success-label">Výsledek</span>
			<p>Rychlejší zákaznické workflow, bližší spolupráce a přímá zpětná vazba.</p>
		</div>
		<p class="success-overview-proof">Rychlejší zákaznické workflow</p>
	</section>
</div>

<!--
*Záměr a čas: 1:15. Shrnutí čtyř různých způsobů, jak AI pomáhá ve výrobě, analýze, migraci i zákaznickém poradenství.*
*Počáteční stav: titulek a všechny čtyři příběhy jsou viditelné; slide nemá klikací odhalení ani interaktivní prvky.*

Quality Check ukazuje odhalení chyby Teach/Compare, která vedla ke zmetkovitosti. Wireshark Analysis zkrátil hledání příčiny z dnů na minuty. AS4 → AS6 Conversion Tool převádí roztříštěné znalosti do opakovatelného nástroje. Consulting pomáhá zákazníkům začít s AI workflow bez nutnosti vyčlenit vlastní tým.

*Konečný stav: stejný jako počáteční; všechny čtyři příklady zůstávají viditelné.*
-->
