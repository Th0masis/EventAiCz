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
class: ot-slide vertical-modules-slide dark-slide topic-orchestrace-dansko
---

<script setup>
import './orchestrace-dansko/styles.css'
</script>

<div class="kicker">AGENTIC METHOD · VERTICAL SLICES</div>

# Build features <span class="accent">through the stack</span>

<p class="vertical-modules-lead">Humans optimize for focus. Agents can optimize for feedback.</p>

<div class="kanban-compare">
  <section class="kanban-panel horizontal-panel">
    <div class="kanban-panel-head"><div><span>HUMAN DEFAULT</span><b>Discipline lanes</b></div><mdi-view-column-outline /></div>
    <p class="kanban-panel-note">Specialists stay focused. The feature waits at the integration boundary.</p>
    <div class="kanban-board category-board">
      <div class="kanban-columns"><span></span><b>BACKLOG</b><b>IN PROGRESS</b><b>PROVEN</b></div>
      <div class="kanban-lanes">
        <div class="kanban-lane category-lane"><span class="kanban-lane-label">HMI</span><div class="kanban-cell"><span class="kanban-card">fault + reset screen</span></div><div class="kanban-cell"><span class="kanban-card muted-card">needs state names</span></div><div class="kanban-cell"></div></div>
        <div class="kanban-lane category-lane"><span class="kanban-lane-label">SAFETY</span><div class="kanban-cell"><span class="kanban-card amber-card">safe stop on fault</span></div><div class="kanban-cell"><span class="kanban-card muted-card">needs reset rule</span></div><div class="kanban-cell"></div></div>
        <div class="kanban-lane category-lane"><span class="kanban-lane-label">CONTROL</span><div class="kanban-cell"><span class="kanban-card">abort + clear states</span></div><div class="kanban-cell"><span class="kanban-card muted-card">needs reject logic</span></div><div class="kanban-cell"></div></div>
        <div class="kanban-lane category-lane"><span class="kanban-lane-label">I/O + HW</span><div class="kanban-cell"><span class="kanban-card">axis error handling</span></div><div class="kanban-cell"><span class="kanban-card muted-card">needs sim rig</span></div><div class="kanban-cell"></div></div>
      </div>
    </div>
    <div class="kanban-result blocked"><mdi-clock-alert-outline /><div><span>INTEGRATION DAY</span><b>No complete feature to test</b></div></div>
  </section>
  <div class="kanban-contrast" v-click="1"><span>SAME BOARD<br><strong>NEW UNIT</strong></span><mdi-arrow-right /></div>
  <section class="kanban-panel vertical-panel" v-click="1">
    <div class="kanban-panel-head"><div><span>AGENT + TDD</span><b>Feature lanes</b></div><mdi-view-column-outline /></div>
    <p class="kanban-panel-note">Keep one behavior in context. Cross every boundary, then prove it.</p>
    <div class="kanban-board feature-board">
      <div class="kanban-columns"><span></span><b>BACKLOG</b><b>IN PROGRESS</b><b>PROVEN</b></div>
      <div class="kanban-lanes">
        <div class="kanban-lane feature-lane"><span class="kanban-lane-label">OBSERVE<br>FAULT</span><div class="kanban-cell"><span class="kanban-card red-card">abort is visible</span></div><div class="kanban-cell"><span class="kanban-card">HMI + state + axis</span></div><div class="kanban-cell"><span class="kanban-card done-card">count holds</span></div></div>
        <div class="kanban-lane feature-lane"><span class="kanban-lane-label">CLEAR<br>CONVEYOR</span><div class="kanban-cell"><span class="kanban-card red-card">uncapped stay on</span></div><div class="kanban-cell"><span class="kanban-card">reject logic + safety</span></div><div class="kanban-cell"><span class="kanban-card done-card">conveyor empty</span></div></div>
        <div class="kanban-lane feature-lane"><span class="kanban-lane-label">RESUME<br>BATCH</span><div class="kanban-cell"><span class="kanban-card red-card">restart resets count</span></div><div class="kanban-cell"><span class="kanban-card">reset + sequence</span></div><div class="kanban-cell"><span class="kanban-card done-card">continues from held</span></div></div>
        <div class="kanban-lane feature-lane"><span class="kanban-lane-label">PROVE<br>100 BATCH</span><div class="kanban-cell"><span class="kanban-card red-card">no evidence</span></div><div class="kanban-cell"><span class="kanban-card">sim run + logbook</span></div><div class="kanban-cell"><span class="kanban-card done-card">100 bottles done</span></div></div>
      </div>
    </div>
    <div class="kanban-result ready"><mdi-test-tube /><div><span>EVERY MOVE HAS A SIGNAL</span><b>A working feature at every step</b></div></div>
  </section>
</div>

<div class="tdd-loop" v-click="2">
  <div class="tdd-loop-label"><span>THE AGENT'S RHYTHM</span><b>One slice at a time</b></div>
  <div class="tdd-step red"><span>01</span><strong>RED</strong><small>write failing test</small></div>
  <mdi-arrow-right />
  <div class="tdd-step green"><span>02</span><strong>GREEN</strong><small>make the smallest change</small></div>
  <mdi-arrow-right />
  <div class="tdd-step refactor"><span>03</span><strong>REFACTOR</strong><small>review, then repeat</small></div>
</div>

<div class="vertical-modules-takeaway" v-click="3"><span>THINK IN BEHAVIORS, NOT LAYERS</span><strong>One narrow outcome. One fast feedback loop.</strong></div>
<div class="slide-id">23</div>

<!--
[CLICK]
Lidé se často organizují do kanban tabulkách podle odborné disciplíny: HMI, safety, control a hardware. <b>horizontal slices</b> To je racionální způsob práce, když je zaměření omezené a když různí lidé mají různé odborné znalosti. Je to omezení, které máme jako lidé. Máme malou krátkodobou paměť a jsme špatní v multitaskingu / přepínání kontextu. Jako lidé proto typicky děláme jednu disciplínu po druhé. Tam jsme nejproduktivnější, ale to vytváří problémy při testování. Jak otestujete HMI bez logiky? Není tam žádná zpětná vazba!

[CLICK]
Agent tato omezení nemá a může jednoduše spustit subagenty, kteří se postarají o jiné odbornosti, nebo aby izoloval a delegoval kontext. Proto může pracovat vertikálně (<b>vertical slices</b>): feature swimlanes s HMI stavem, safety kontraktem, control logikou, I/O nebo simulací a akceptačním testem ve stejné krátké smyčce. To je obrovská výhoda z hlediska testování. Každou funkci lze testovat nezávisle, protože obsahuje všechny prvky.

[CLICK]
Matt Pocockův TDD skill popisuje horizontal slicing jako anti-pattern: nepiš nejdřív všechny testy a veškerou implementaci až potom. Pracuj ve vertical slices: jeden test, jedna minimální implementace, opakuj. Každý test je tracer bullet, který využívá zpětnou vazbu z předchozího cyklu. Červená před zelenou; refaktorování patří do fáze kontroly.

Zdroj: https://github.com/mattpocock/skills/blob/main/skills/engineering/tdd/SKILL.md
-->

---
layout: default
class: ot-slide planning-slide dark-slide topic-orchestrace-dansko
---

<script setup>
import './orchestrace-dansko/styles.css'
</script>

<div class="kicker">WORKFLOWS · 04 MIN</div>

# Three workflows<br><span class="accent">everyone needs</span>

<div class="workflow-triad" aria-label="Three accountable agent workflows">
  <section class="workflow-lane">
    <div class="workflow-lane-head"><span>01 · HITL</span><strong>Specify the work</strong></div>
    <p>Turn intent into a shared, reviewable change.</p>
    <ol><li>Clarify unknowns</li><li>Write acceptance criteria</li><li>Review and split into tickets</li></ol>
    <div class="workflow-output"><span>HUMAN GATE</span><b>Approve intent before implementation</b></div>
  </section>
  <section class="workflow-lane" v-click="1">
    <div class="workflow-lane-head"><span>02 · AFK</span><strong>Implement in a loop</strong></div>
    <p>Keep each issue bounded and independently testable.</p>
    <ol><li>Plan dependencies and branch</li><li>Implement with fast feedback</li><li>Review, test, repeat</li></ol>
    <div class="workflow-output"><span>DETERMINISTIC GATES</span><b>Changes return until checks pass</b></div>
  </section>
  <section class="workflow-lane" v-click="2">
    <div class="workflow-lane-head"><span>03 · RELEASE</span><strong>Validate the system</strong></div>
    <p>Prove integrated behavior before a release decision.</p>
    <ol><li>Build a traceable artifact</li><li>Run simulator and operator tests</li><li>Review evidence and approve</li></ol>
    <div class="workflow-output"><span>HUMAN GATE</span><b>Release only the verified artifact</b></div>
  </section>
</div>

<div class="slide-id">24</div>

<!--
"Zotavení po chybě osy" zní jako úkol, ale není to specifikace. Agent může prozkoumat existující kód a vyhledat znalosti. Ale záměr a kompromisy se musí vrátit k nám, abychom mohli zaujmout stanovisko.

Zde je příklad, jak by mohl vypadat úplný workflow, který vede přímo k tomu, o čem bude Mads vyprávět po přestávce:

První workflow se zabývá tím, aby byl správně popsán zadaný úkol.

Druhý může být plně automatický, jakmile je ohraničený, izolovaný a získal si naši důvěru.

Poslední se zabývá validací a optimalizací systému.

přechod: OTÁZKY
-->

---
layout: default
class: ot-slide machine-demo-slide dark-slide topic-orchestrace-dansko
---

<script setup>
import './orchestrace-dansko/styles.css'
</script>

<div class="status-badge demonstrator">DEMO 2 / 3</div>
<div class="kicker">FULL CI/CD PIPELINE · TEST PROJECT</div>

# The <span class="accent">orange</span> juice machine

<div class="machine-demo-subtitle">A GitHub workflow builds, tests, packages, and deploys this demonstration project.</div>

<div class="machine-demo-meta"><span>PROJECT IN GITHUB</span><span class="machine-demo-path">.\EventAiAndDevOps\DevOps\DevOpsDemo</span></div>

<div class="machine-demo-machine">
  <div class="machine-line" role="img" aria-label="Juice filling and capping conveyor, running at bottle 42 of 100">
    <div class="machine-line-head"><span>CONVEYOR / 04</span><b>RUNNING</b></div>
    <div class="machine-line-stations"><span>FILLER <b>FILL</b></span><span>CAPPER <b>CAP</b></span></div>
    <div class="machine-line-belt"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
    <div class="machine-line-footer"><span>PRODUCTION</span><strong>042 <small>/ 100</small></strong><span>CI · BUILD · TEST · RELEASE</span></div>
  </div>
</div>

<div class="slide-id">37</div>

<!--
Zatím jsme se na as CLI dívali jako na softwarový projekt.
Ale přesuňme pozornost k něčemu, co víc připomíná to, s čím mnozí z nás pracují každý den.

Toto je náš stroj na pomerančový džus. Je to samozřejmě demo projekt. Ale myšlenka je přesně stejná jako u skutečného stroje. Máme projekt Automation Studio. Máme software. Máme HMI. A máme přání být schopni dodávat změny reprodukovatelným způsobem. Místo abychom o tom mluvili, zkusme to udělat.

[přepnout na GitHub]
Teď vytvořím release. Jediné, co udělám, je vytvoření tagu a jeho push na GitHub. A všimněte si, co se stane potom. Protože teď to přebírá pipeline. Ne já.

[vytvořit tag a pushnout]
Teď se spouští GitHub workflow. Pokud otevřeme záložku Actions, můžeme to sledovat naživo. Toto je náš digitalizovaný proces. Všechny manuální kroky, o kterých jsme dřív mluvili... jsou teď popsané jako workflow.

[ukázat workflow]
V praxi se teď děje víc věcí najednou. Projekt se sestavuje. Spouštějí se automatické testy. Vytváří se release. Generují se artefakty. A nakonec se výsledek publikuje. Všechno bez toho, abych se musel přihlašovat na build stroj nebo si pamatovat, jaké kroky se mají spustit.

[ukázat .github/workflows]
Zajímavý ve skutečnosti není GitHub. GitHub by stejně dobře mohl být Gitlab, Azure DevOps, Jenkins nebo něco úplně jiného. Zajímavé je, že proces je teď popsaný jako kód. Pokud si kolega naklonuje projekt, dostane přesně stejný proces. Pokud ho spustíme zítra nebo za šest měsíců, pořád dostaneme přesně stejný proces. Právě to ho dělá reprodukovatelným.

[ukázat jednotlivé kroky během běhu workflow]
Všimněte si, že produkujeme víc než jen software. Produkujeme také evidence (důkazy). Vidíme, co se sestavilo, jaké testy se spustily a zda prošly. Přesně to nám dává CI/CD. Nejen automatizaci, ale i sledovatelnost. Když je workflow hotový, výsledek je připravený na release serveru. Odtud si target může stáhnout přesně tu verzi, kterou jsme právě sestavili. Zvlášť zajímavé je to, když máte hodně identických instalací nebo potřebujete přesně vědět, jaká verze byla nainstalovaná kde.

Existuje jeden build. Jeden artefakt. Jedna verze. A všichni vědí, odkud pochází.

Přechod: Teď jsme automatizovali build, test a release. Ale co samotný uživatelský zážitek? Jak vlastně otestujeme, že HMI stále funguje tak, jak operátor očekává?
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
