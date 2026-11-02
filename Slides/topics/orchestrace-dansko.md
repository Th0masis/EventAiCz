---
layout: default
class: ot-slide chapter-slide topic-orchestrace-dansko
---

<script setup>
import './orchestrace-dansko/styles.css'
</script>

<img class="chapter-image" src="/topics/orchestrace-dansko/chapter.jpg" alt="">

# Kompletní orchestrace? Příklad z Dánska

---
layout: default
class: ot-slide dark-slide loop-slide topic-orchestrace-dansko
---

<script setup>
import './orchestrace-dansko/styles.css'
</script>

<div class="kicker">COMPLEMENTARY SYSTEMS · 03 MIN</div>

# DevOps + Agentic<br><span class="accent">Engineering</span>

<div class="loop-compare">
  <div class="loop-linear" v-click="1">
    <div class="loop-bars">
      <span>Plan</span><i></i>
      <span>Design</span><i></i>
      <span>Build</span><i></i>
      <span>Test</span><i></i>
      <span>Deploy</span><i></i>
      <span>Maintain</span>
    </div>
    <p><b>Traditional DevOps stages.</b> Every step is handled manually</p>
  </div>
  <div class="loop-cycle" v-click="2">
    <svg viewBox="0 0 300 300">
      <defs>
        <marker id="loopArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="var(--br-orange)" />
        </marker>
      </defs>
      <g class="loop-arrows" fill="none" stroke="var(--br-orange)" stroke-width="3" stroke-linecap="round" marker-end="url(#loopArrow)">
        <path d="M189.3 41.9 A115 115 0 0 1 223.9 61.9" />
        <path d="M263.2 130 A115 115 0 0 1 263.2 170" />
        <path d="M223.9 238.1 A115 115 0 0 1 189.3 258.1" />
        <path d="M110.7 258.1 A115 115 0 0 1 76.1 238.1" />
        <path d="M36.7 170 A115 115 0 0 1 36.7 130" />
        <path d="M76.1 61.9 A115 115 0 0 1 110.7 41.9" />
      </g>
      <circle class="loop-hub" cx="150" cy="150" r="56" />
      <text class="loop-hub-label" x="150" y="145">Agent</text>
      <text class="loop-hub-sub" x="150" y="166">Workflows</text>
      <g class="loop-node">
        <circle cx="150" cy="35" r="31" /><text x="150" y="39">Plan</text>
        <circle cx="249.6" cy="92.5" r="31" /><text x="249.6" y="96.5">Design</text>
        <circle cx="249.6" cy="207.5" r="31" /><text x="249.6" y="211.5">Build</text>
        <circle cx="150" cy="265" r="31" /><text x="150" y="269">Test</text>
        <circle cx="50.4" cy="207.5" r="31" /><text x="50.4" y="211.5">Deploy</text>
        <circle cx="50.4" cy="92.5" r="31" /><text x="50.4" y="96.5">Maintain</text>
      </g>
    </svg>
    <p><b>AI-native DevOps.</b> Humans above the loop instigating, directing and governing.</p>
  </div>
</div>

<div class="signal-callout" v-click="3">
  <div class="signal-pulse"></div>
  <p>DevOps gives agents rails.<br><strong>Agents make the rails more useful.</strong></p>
</div>

<div class="slide-id">04</div>

<!--
[CLICK]
<b>DevOps je postup sestávající z různých fází</b>, kterými musí software projít. Každá fáze nastavuje požadavky, které zajišťují, že další fáze bude úspěšná. Musí se <b>buď provádět ručně, nebo se ručně předávat dál</b>. Pokud nejsou požadavky splněny dostatečně důkladně, nemá workflow žádnou skutečnou hodnotu. Proto to pro některé může vypadat rigidně a těžkopádně - i když je to nutnost pro poskytování vysoké kvality.

[CLICK]
<b>Zavedením AI-Agentů do vašeho DevOps procesu existuje mnoho výhod. AgentOps</b>

0. DevOps se stává rámcem pro AI, který zajišťuje kvalitu a předvídatelnost. (AI, stejně jako lidé, není deterministická). To je důležité, protože nikdy jsme nebyli schopni udělat chybu rychleji než nyní.
1. Agenti na rozdíl od lidí VŽDY dodržují své pokyny. Nejsou ani fanatičtí, ani si nestěžují, že je to rigidní!
2. Velkou část procesů DevOps lze automatizovat a ušetřit tak čas.
3. Znalosti se ukládají do pracovních postupů, nikoli do jednotlivců
4. Stále můžeme mít plnou kontrolu nad procesem, pokud jej chytře integrujeme. To je v OT zásadní požadavek!

[CLICK]
<b>DevOps se tedy stane samotným rámcem pro AI <br>a AI činí tento rámec super efektivním!</b>
-->

---
layout: default
class: ot-slide machine-demo-slide feature-request-slide dark-slide topic-orchestrace-dansko
clicks: 3
transition: fade-out
---

<script setup>
import './orchestrace-dansko/styles.css'
</script>

# Porucha osy nesmí znamenat<br><span class="accent">nový začátek dávky.</span>

<div class="story-request-layout">
  <section class="story-request">
    <h2>Nová funkce pro Orange Juice</h2>
    <p>Při poruše dopravníkové osy zastav stroj, odstraň <strong>neuzavřené lahve jako zmetky</strong>, zachovej <strong>počet vyrobených kusů</strong> a umožni pokračovat ve stejné dávce <strong>100 lahví</strong>.</p>
    <p class="story-secondary">Zadáváme požadované chování,<br>ne konkrétní implementaci.</p>
  </section>
  <div class="recovery-machine" data-batch="same-batch" :data-recovery-phase="['running', 'fault', 'cleared', 'resumed'][Math.min($clicks, 3)]" role="group" aria-label="Ilustrační stavy obnovy plnicí linky">
    <div class="recovery-topline"><span>Orange Juice · dopravníková osa</span><strong>{{ ['V PROVOZU', 'PORUCHA OSY', 'VYČIŠTĚNO', 'POKRAČUJEME'][Math.min($clicks, 3)] }}</strong></div>
    <div class="recovery-stations"><span>Plnění</span><span>Uzavírání</span></div>
    <div class="recovery-conveyor" aria-label="Dvě neuzavřené a tři uzavřené lahve">
      <span class="recovery-bottle" :class="{ 'is-rejected': $clicks >= 2 }"><i></i></span>
      <span class="recovery-bottle" :class="{ 'is-rejected': $clicks >= 2 }"><i></i></span>
      <span class="recovery-bottle is-capped"><i></i></span>
      <span class="recovery-bottle is-capped"><i></i></span>
      <span class="recovery-bottle is-capped"><i></i></span>
    </div>
    <div class="recovery-production"><span>Vyrobeno · stejná dávka</span><strong class="recovery-count">{{ $clicks >= 3 ? '043 / 100' : '042 / 100' }}</strong></div>
    <p class="recovery-caption">{{ ['Ilustrace požadavku, nikoli živá simulace.', 'Osa stojí. Počet zůstává 42.', 'Dvě neuzavřené lahve vyřazeny. Počet drží.', 'Po obnově 42 → 43. Žádné nulování dávky.'][Math.min($clicks, 3)] }}</p>
  </div>
</div>

<div class="story-request-steps">
  <div v-click="1"><b>Zastavit</b><span>Porucha je viditelná.</span></div>
  <div v-click="2"><b>Vyřadit</b><span>Neuzavřené lahve pryč.</span></div>
  <div v-click="3"><b>Pokračovat</b><span>Stejná dávka, zachovaný počet.</span></div>
</div>

<!--
Tady je konkrétní zadání nové funkce pro náš demonstrační stroj. Ve stejné dávce chceme dokončit sto lahví i po poruše dopravníkové osy. Číslo 42 je ilustrační stav, ne údaj z připojeného PLC.

[click]
Osa ohlásila poruchu. Stroj zastaví a operátor poruchu vidí. Vyrobený počet zůstává 42. Nezaměňujeme poruchu osy s nouzovým zastavením ani s validací bezpečnostní funkce.

[click]
Po odstranění příčiny potřebujeme vyřadit všechny neuzavřené lahve. V nákresu jsou dvě. Přesná sekvence pohybů a podmínky povolení obnovy musí vycházet z návrhu konkrétního stroje.

[click]
Po splnění podmínek obnovy pokračuje stejná dávka. Další dobrý kus posune počet ze 42 na 43, ne z nuly na jednu. Teď máme srozumitelný záměr. Ještě ale nemáme dostatečnou specifikaci pro implementaci.
-->

---
layout: default
class: ot-slide specification-slide dark-slide topic-orchestrace-dansko
clicks: 2
transition: fade-out
---

<script setup>
import './orchestrace-dansko/styles.css'
</script>

# Nejdřív ujasnit chování.<br><span class="accent">Potom rozdělit práci.</span>

<div class="story-flow" aria-label="Specifikace: spolupráce člověka a agenta">
  <div><strong>Člověk</strong><span>Zadá záměr</span></div>
  <mdi-arrow-right aria-hidden="true" />
  <div><strong>Agent</strong><span>Otevře otázky</span></div>
  <mdi-arrow-right aria-hidden="true" />
  <div><strong>Člověk</strong><span>Rozhodne chování</span></div>
  <mdi-arrow-right aria-hidden="true" />
  <div><strong>Agent</strong><span>Navrhne tickety</span></div>
</div>
<p class="story-question">Co se započítává jako dobrý kus? Kdy je dovoleno obnovit chod?</p>

<div class="story-tickets" v-click="1" aria-label="Ilustrační návrh ticketů a akceptačních podmínek">
  <section><h2>Zobrazit poruchu</h2><p>Osa stojí, alarm je vidět.<br>Počet zůstává 42.</p></section>
  <section><h2>Vyřadit lahve</h2><p>Na dopravníku nezůstane<br>žádná neuzavřená lahev.</p></section>
  <section><h2>Obnovit dávku</h2><p>Po obnově další dobrý kus<br>zvýší počet na 43, ne na 1.</p></section>
</div>
<div class="story-human-gate story-rule" v-click="2"><mdi-account-check-outline /><p><strong>Člověk schválí záměr i tickety.</strong><span>Návrh závislostí: porucha → vyřazení → obnova. Blokovaný ticket ještě není připravený.</span></p></div>

<!--
První workflow je specifikace s člověkem ve smyčce. Agent má záměr zpochybnit a otevřít nejasnosti, ne je tiše rozhodnout. Třeba co přesně započítáváme jako dobrý kus a kdo smí obnovit chod. Odpovědi musí dodat vlastník zadání.

[click]
Teprve potom dává smysl navrhnout tickety. Tady jsou tři ilustrační výsledky, každý s pozorovatelnou akceptační podmínkou. Nejsou to skutečně založené GitHub issues. Úplná specifikace musí doplnit chybové scénáře a povolené podmínky pohybu.

[click]
Člověk zkontroluje, zda se původní záměr při rozpadu neztratil. Návrh má závislosti: obnova navazuje na vyřazení a vyřazení na stav po poruše. Nezávislost nevznikne tím, že práci rozdělíme na tři kartičky. A teď je otázka, co přesně bude uvnitř jedné takové kartičky.
-->

---
layout: default
class: ot-slide vertical-modules-slide dark-slide topic-orchestrace-dansko
clicks: 2
transition: fade-out
---

<script setup>
import './orchestrace-dansko/styles.css'
</script>

# Hotová vrstva ještě není<br><span class="accent">otestovatelná funkce.</span>

<div class="story-slicing">
  <section class="story-horizontal">
    <h2>Horizontal · podle vrstev</h2>
    <div class="story-layer"><b>HMI</b><span>Obrazovka poruchy</span></div>
    <div class="story-layer"><b>Řízení</b><span>Logika obnovy</span></div>
    <div class="story-layer"><b>I/O a simulace</b><span>Signály osy</span></div>
    <p class="story-secondary">Samostatné úkoly. Celé chování<br>ověříme až po propojení.</p>
  </section>
  <section class="story-vertical" v-click="1">
    <h2>Vertical · podle výsledku</h2>
    <div class="story-feature"><strong>„Porucha je vidět a počet drží.“</strong><span>HMI + řízení + simulace + test</span></div>
    <div class="story-board" aria-label="Ilustrační Kanban se stejnými stavy pro různé rozsahy ticketů">
      <div><b>Připraveno</b><span>Obnovit dávku</span></div>
      <div><b>Rozpracováno</b><span>Vyřadit lahve</span></div>
      <div><b>Ověřeno</b><span>Porucha a počet</span></div>
    </div>
    <p class="story-secondary">Jeden úzký výsledek přes potřebné vrstvy.<br>Má vlastní akceptační test.</p>
  </section>
</div>
<div class="story-slicing-result story-rule" v-click="2"><mdi-test-tube /><p><strong>Měníme rozsah ticketu, ne orientaci tabule.</strong><span>Vertical slicing může používat člověk i agent. Závislosti a integrační testy zůstávají.</span></p></div>

<!--
Na levé straně dělíme stejnou práci podle disciplín: někdo vytvoří HMI, jiný logiku a další simulaci osy. Specializace je užitečná. Dokončená obrazovka ale sama neprokazuje, že stroj po poruše správně pokračuje. Jednotlivé vrstvy samozřejmě mohou mít své vlastní testy.

[click]
Vpravo je jednotkou práce pozorovatelné chování. Ticket pro zobrazení poruchy a zachování počtu zahrne potřebnou část HMI, řízení, simulace i test. Kanban je pouze ilustrační momentka: první výsledek ověřený, druhý rozpracovaný, třetí čeká. Nejde o skutečný stav projektu.

[click]
Horizontal a vertical neznamená otočit řádky a sloupce tabule. Měníme hranici jednoho ticketu. Je to metoda pro lidi i agenty, ne důkaz, že agent nemá omezený kontext. Každý výsledek má vlastní test a současně musíme ověřit, že výsledky fungují dohromady.
-->

---
layout: default
class: ot-slide implementation-slide dark-slide topic-orchestrace-dansko
clicks: 2
transition: fade-out
---

<script setup>
import './orchestrace-dansko/styles.css'
</script>

# Jeden ticket.<br><span class="accent">Krátká implementační smyčka.</span>

<p class="story-intro">Agent pracuje v dohodnutém rozsahu. Kontroly rozhodují, zda může dál.</p>
<div class="story-implementation">
  <section><h2>Naplánovat</h2><p>Ověřit závislosti.<br>Připravit větev a test.</p></section>
  <mdi-arrow-right aria-hidden="true" />
  <section><h2>Implementovat</h2><p>Nejmenší změna<br>pro jeden výsledek.</p></section>
  <mdi-arrow-right v-click="1" aria-hidden="true" />
  <section v-click="1"><h2>Review a test</h2><p>Ověřit kód i chování.<br>Nestačí úspěšný build.</p></section>
</div>
<div class="story-implementation-outcome" v-click="2">
  <p><mdi-arrow-u-left-top /><span><strong>Kontrola selhala?</strong> Vrátit se k implementaci.</span></p>
  <p><mdi-check-circle-outline /><span><strong>Kontroly prošly?</strong> Integrovat do pracovní větve funkce.</span></p>
</div>
<div class="story-rule"><mdi-source-branch /><p><strong>Ověřený ticket ještě není schválené PR.</strong><span>Například: porucha je vidět, počet zůstává 42 a test to prokazuje.</span></p></div>

<!--
Druhé workflow začíná až připraveným ticketem. Agent ověří závislosti a omezení, připraví větev a naplánuje test pozorovatelného chování. Potom implementuje nejmenší změnu v dohodnutém rozsahu.

[click]
Následuje review a test. Test může začít jako červený akceptační scénář, potom se změní implementace tak, aby prošel. Build potvrzuje sestavitelnost, nikoli správné zachování počtu při poruše.

[click]
Neúspěšná kontrola vrací práci do implementace. Úspěšné kontroly dovolí integraci do pracovní větve funkce, ne automatické schválení zákaznického záměru. Při nejasném zadání nebo opakovaném selhání se agent musí vrátit k člověku, ne neomezeně opakovat stejný pokus. Schválení PR přijde až po vyhodnocení celku.
-->

---
layout: default
class: ot-slide evaluation-slide dark-slide topic-orchestrace-dansko
clicks: 2
transition: fade-out
---

<script setup>
import './orchestrace-dansko/styles.css'
</script>

# Zelené testy ještě nepotvrzují<br><span class="accent">správné zadání.</span>

<div class="story-evaluation">
  <section><span class="story-evaluation-index">1</span><div><h2>Ověřujeme původní záměr?</h2><p>Stejná dávka, správné zmetky, zachovaný počet.</p></div></section>
  <section v-click="1"><span class="story-evaluation-index">2</span><div><h2>Funguje to pro operátora?</h2><p>Porucha → vyřazení → obnova. Ověřit i přes HMI.</p></div></section>
  <section v-click="2"><span class="story-evaluation-index">3</span><div><h2>Máme důkazy pro schválení PR?</h2><p>Člověk posoudí testy, nálezy a zbývající rizika.</p></div></section>
</div>
<div class="story-rule"><mdi-account-check-outline /><p><strong>Agent připraví změnu a důkazy. Člověk rozhodne.</strong><span>Schválení PR není totéž co povolení nasazení na skutečný stroj.</span></p></div>

<!--
Třetí workflow je lidské vyhodnocení integrované funkce. Nejprve se vrátíme k původnímu zadání. Test, který očekává nesprávné chování, může být zelený. Proto kontrolujeme i význam testů, nejen jejich návratový kód.

[click]
Dalším důkazem je operátorský scénář. Operátor vidí poruchu, systém vyřadí neuzavřené lahve a po splnění podmínek obnovy pokračuje stejná dávka. Na následujícím slidu si ukážeme, jak do důkazů zapojit i HMI.

[click]
Člověk posoudí report, zkušenost operátora a zbývající mezery. Rozhodne, zda je změna připravená na schválení PR, nebo se vrací k opravě či upřesnění zadání. Samostatné release a provozní podmínky tím nezanikají. Ani automatický test HMI nenahrazuje bezpečnostní validaci stroje.
-->

---
layout: default
class: ot-slide hmi-testing-slide dark-slide topic-orchestrace-dansko
---

<script setup>
import './orchestrace-dansko/styles.css'
</script>

<div class="status-badge demonstrator">DEMO 3 / 3</div>
<div class="kicker">HMI VERIFICATION</div>

# Test the HMI <span class="accent">like an operator</span>

<p class="hmi-testing-subtitle">Automated checks of real operator workflows.</p>

<div class="hmi-testing-flow" aria-label="Operator workflow from action to verified result">
  <article class="hmi-testing-card is-user"><div class="hmi-testing-card-head"><span>01</span><mdi-account-outline /></div><div><small>USER ACTION</small><strong>Press Start</strong></div></article>
  <div class="hmi-testing-arrow" aria-hidden="true" v-click="1"><mdi-arrow-right /></div>
  <article class="hmi-testing-card is-hmi" v-click="1"><div class="hmi-testing-card-head"><span>02</span><mdi-monitor-dashboard /></div><div><small>HMI</small><strong>Button changes state</strong></div></article>
  <div class="hmi-testing-arrow" aria-hidden="true" v-click="2"><mdi-arrow-right /></div>
  <article class="hmi-testing-card is-plc" v-click="2"><div class="hmi-testing-card-head"><span>03</span><mdi-cog-outline /></div><div><small>PLC</small><strong>Machine reacts</strong></div></article>
  <div class="hmi-testing-arrow" aria-hidden="true" v-click="3"><mdi-arrow-right /></div>
  <article class="hmi-testing-card is-result" v-click="3"><div class="hmi-testing-card-head"><span>04</span><mdi-check-circle-outline /></div><div><small>RESULT</small><strong>Expected behavior verified</strong></div></article>
</div>

<div class="hmi-testing-takeaway" v-click="4"><mdi-shield-check-outline /><strong>Every software change can automatically prove that the operator workflow still works.</strong></div>
<div class="hmi-testing-examples" v-click="5"><span>EXAMPLES</span><p>Start machine &bull; Change recipe &bull; Acknowledge alarm &bull; Verify status indication</p></div>
<div class="slide-id">38</div>

<!--
Poslední demo se týká něčeho, co bylo tradičně těžké automatizovat. Konkrétně HMI verifikace.

(ukazuje na flow)
Dřív jsme mluvili o unit testech, integračních testech a PLC testech. Ale nakonec to není PLC, kdo stroj používá. Je to operátor. A proto je zajímavé umět testovat i workflows, které operátor skutečně používá.

Například: dá se stroj spustit? Dá se potvrdit alarm? Dá se změnit recept? Zobrazuje se na obrazovce správný stav?

Normálně by musel člověk klikat těmito scénáři ručně. Ale přesně tak, jak dokážeme automatizovat build a test softwaru, dokážeme automatizovat i interakci uživatele s HMI. To znamená, že u každé softwarové změny lze automaticky zkontrolovat, že nejdůležitější operátorské workflows stále fungují.

Přesně to vám teď chci ukázat. Používáme k tomu CLI od Microsoftu, který se jmenuje Playwright. Kvůli demu otevírám prohlížeč a přidal jsem k tomu nějaké animace navíc. Ve skutečné pipeline by to normálně běželo headless v terminálu.

npm run test:demo
Pokud by to mělo běžet headless, stačí napsat:
npm run test:hmi
-->

---
layout: default
class: ot-slide devops-mountain-slide dark-slide topic-orchestrace-dansko
---

<script setup>
import './orchestrace-dansko/styles.css'
</script>

<div class="kicker">THE FIRST LOOP · PRACTICAL START</div>

# How to <span class="accent">get started</span>

<p class="mountain-subtitle">One step at a time</p>

<section class="mountain-stage" aria-label="DevOps journey from today's workflow to full CI/CD">
  <div class="mountain-visual">
    <div class="mountain-distant" aria-hidden="true"></div><div class="mountain-main" aria-hidden="true"></div><div class="mountain-facet" aria-hidden="true"></div><div class="mountain-grid" aria-hidden="true"></div><div class="mountain-trail" aria-hidden="true"></div>
    <div class="mountain-origin"><mdi-account-hard-hat-outline /><strong>TODAY</strong><small>Current workflow</small></div>
    <article class="mountain-checkpoint checkpoint-git"><span class="mountain-checkpoint-marker">01</span><div class="mountain-checkpoint-label"><strong>GIT</strong><small>versioned project</small></div></article>
    <article class="mountain-checkpoint checkpoint-build"><span class="mountain-checkpoint-marker">02</span><div class="mountain-checkpoint-label"><strong>AS CLI</strong><small>Automate engineering tasks</small></div></article>
    <article class="mountain-checkpoint checkpoint-test"><span class="mountain-checkpoint-marker">03</span><div class="mountain-checkpoint-label"><strong>TEST</strong><small>Start with 1 test</small></div></article>
    <article class="mountain-checkpoint checkpoint-evidence"><span class="mountain-checkpoint-marker">04</span><div class="mountain-checkpoint-label"><strong>RELEASE</strong><small>Deployment package (PIP)</small></div></article>
    <article class="mountain-checkpoint checkpoint-release"><span class="mountain-checkpoint-marker">05</span><div class="mountain-checkpoint-label"><strong>Automate</strong><small>Pipeline execution</small></div></article>
    <div class="mountain-summit"><span class="mountain-flag-pole" aria-hidden="true"></span><span class="mountain-flag-pennant" aria-hidden="true"></span><div class="mountain-summit-copy"><strong>FULL CI/CD</strong><em>Repeatable and automated delivery</em></div></div>
  </div>
  <aside class="mountain-statement"><span class="mountain-statement-label">THE POINT IS PROGRESS</span><strong>Don't start at<br> the summit.</strong><b>Take the next step.</b></aside>
</section>

<div class="mountain-footer"><span>Every organization starts from a different place.</span><b>Success comes from taking the next step, not from reaching the summit immediately.</b></div>
<div class="slide-id">39</div>

<!--
Cílem DevOps není vybudovat dokonalý systém CI/CD přes noc.
Cílem je zajistit, aby byl jeden technický pracovní postup opakovatelnější než včera.

Začněte s Gitem. Poté automatizujte sestavení. Poté přidejte jeden smysluplný test. Poté zaznamenejte důkazy. Poté automatizujte činnosti související s vydáním.

Každý krok vytváří hodnotu.
-->
