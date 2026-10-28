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
		<p>Dvě ARM PLC doplnilo x86 PLC 3100. Při výměně dat přes UDP přestaly po přidání struktur s hodnotami LREAL správně sedět jejich bajtová zarovnání.</p>
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

<p class="success-outcome"><strong>Výsledek:</strong> Po lidské revizi a přenosu změn komunikace fungovala.</p>

<!--
*Záměr a čas: 1:00. Ukázat konkrétní, malý úkol, na kterém AI ušetřila ruční práci bez vynechání kontroly.*
*Počáteční stav: celý titulek i tři obsahové sloupce jsou viditelné; slide nemá klikací odhalení ani interaktivní prvky.*

V projektu komunikovala dvě ARM PLC a nově přidané x86 PLC 3100 přes UDP. Problém se projevil u struktur s LREAL. Po určení příčiny v zarovnání bajtů požádal autor Copilot o návrh úpravy struktur. Výsledek následně zkontroloval a přenesl do projektu; komunikace pak fungovala.

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
