---
layout: default
class: ot-slide chapter-slide topic-as-cli
---

<script setup>
import './as-cli/styles.css'
</script>

<img class="chapter-image" src="/topics/as-cli/chapter.jpg" alt="">

# AS CLI - nový koncept kontroly Automation Studia pomocí AI

---
layout: default
class: demo-slide dark-slide as-cli-slide topic-as-cli
---

<script setup>
import './as-cli/styles.css'
import TerminalCli from './as-cli/components/TerminalCli.vue'
</script>

<div class="status-badge demonstrator">ILUSTRAČNÍ UKÁZKA</div>
<div class="kicker">PROVÁDĚNÍ · 04 MIN</div>

# as CLI:<br><span class="accent">akce + pozorování</span>

<div class="demo-steps">
  <div v-click><span>01</span><b>NÁPOVĚDA</b><small>as --help → dostupné příkazy</small></div>
  <div v-click><span>02</span><b>STAV PROJEKTU</b><small>name · config · cpu</small></div>
  <div v-click><span>03</span><b>POVOLIT SIMULACI</b><small>simulace na CPU</small></div>
  <div v-click><span>04</span><b>SESTAVIT PRO ARSIM</b><small>sestavení + instalace do ARsim</small></div>
  <div v-click><span>05</span><b>PŘIPOJIT PLC</b><small>--ip 127.0.0.1</small></div>
  <div v-click><span>06</span><b>ČÍST PROMĚNNOU</b><small>gProductionCount → hodnota + typ</small></div>
  <div v-click><span>07</span><b>ZAPSAT PROMĚNNOU</b><small>gCmdClear → zapsáno</small></div>
  <div v-click><span>08</span><b>ČÍST LOGBOOK</b><small>$arlogsys → chybové záznamy</small></div>
  <div v-click><span>09</span><b>VYTVOŘIT PIP</b><small>instalační balíček bez připojení</small></div>
</div>

<TerminalCli />


<div class="slide-id">16</div>

<!--
<b>Pokud pauza, tak TEĎ!</b>

`AS CLI` je příkazové rozhraní k Automation Studiu pro inženýry, skripty, automatizované testy, CI pipeline i agenty. Není to AI agent ani náhrada celého Automation Studia. Terminál na slidu je předpřipravená ilustrace, ne živý běh.

CLI nabízí konkrétní podporované operace. Jejich dostupnost a parametry závisejí na verzi; úplný přehled pro danou instalaci ukáže `as --help`.

[CLICK]
Nápověda ukáže dostupné příkazy a parametry.

[CLICK]
CLI zobrazí stav projektu.

[CLICK]
Povolí simulaci na CPU.

[CLICK]
Sestaví projekt a nainstaluje ho do ARsim.

[CLICK]
Připojí se k PLC nebo simulátoru.

[CLICK]
Přečte hodnotu proměnné.

[CLICK]
Zapíše hodnotu proměnné.

[CLICK]
Přečte záznamy logbooku.

[CLICK]
Vytvoří offline instalační balíček PIP.

Přechod: Máme rozhraní pro akci i pozorování výsledku. Dále se podíváme na pravidla a odborné postupy.
-->

---
layout: default
class: tooling-matters-slide dark-slide topic-as-cli
---

<script setup>
import './as-cli/styles.css'
</script>

<div class="status-badge general">OBECNÝ PRINCIP</div>
<div class="kicker">WORKSHOP 02 · NÁSTROJE</div>

# Proč jsou <span class="accent">nástroje důležité</span>

<div class="tooling-subtitle">Automatizace potřebuje programový přístup k engineeringovým nástrojům.</div>

  <přechod>: Máme rozhraní pro akci i pozorování výsledku. Dále se podíváme na pravidla a odborné postupy.
  <section class="tooling-workflow-panel gui-workflow-panel" aria-label="Postup řízený člověkem">
    <div class="tooling-panel-label">01 · POSTUP PRO ČLOVĚKA</div>
    <div class="tooling-panel-title"><mdi-monitor-dashboard /><b>PRÁCE V GUI</b></div>
    <div class="tooling-gui-window" v-click="1">
      <div class="tooling-window-bar"><span>ENGINEERINGOVÁ APLIKACE</span><i></i><i></i><i></i></div>
      <div class="tooling-step-list">
        <div class="tooling-step"><span>01</span><mdi-folder-open-outline /><b>OTEVŘÍT PROJEKT</b><span class="tooling-click-icon"><mdi-cursor-default-click-outline /></span></div>
        <div class="tooling-step-arrow"><mdi-arrow-down /></div>
        <div class="tooling-step"><span>02</span><mdi-tune-variant /><b>VYBRAT KONFIGURACI</b><span class="tooling-click-icon"><mdi-cursor-default-click-outline /></span></div>
        <div class="tooling-step-arrow"><mdi-arrow-down /></div>
        <div class="tooling-step"><span>03</span><mdi-hammer-wrench /><b>SPUSTIT SESTAVENÍ</b><span class="tooling-click-icon"><mdi-cursor-default-click-outline /></span></div>
        <div class="tooling-step-arrow"><mdi-arrow-down /></div>
        <div class="tooling-step"><span>04</span><mdi-text-box-search-outline /><b>ZKONTROLOVAT VÝSLEDEK</b><span class="tooling-click-icon"><mdi-cursor-default-click-outline /></span></div>
        <div class="tooling-step-arrow"><mdi-arrow-down /></div>
        <div class="tooling-step"><span>05</span><mdi-upload-network-outline /><b>SPUSTIT PŘENOS</b><span class="tooling-click-icon"><mdi-cursor-default-click-outline /></span></div>
      </div>
      <div class="tooling-manual-cue"><mdi-cursor-default-click-outline /><span>KAŽDÝ PŘEDÁVACÍ KROK RUČNĚ</span></div>
    </div>
    <p class="tooling-panel-note" v-click="1">Pro engineering vhodné; bezobslužná automatizace je složitější.</p>
  </section>

  <div class="tooling-interface-bridge" v-click="2" aria-label="Doplňující se rozhraní">
    <div class="tooling-bridge-box"><strong>GUI</strong><small>PRO ČLOVĚKA</small></div>
    <mdi-arrow-down />
    <div class="tooling-bridge-caption">VYBRANÉ<br>ENGINEERINGOVÉ<br>OPERACE</div>
    <mdi-arrow-down />
    <div class="tooling-bridge-box is-automation"><strong>CLI / API</strong><small>PRO AUTOMATIZACI</small></div>
  </div>
  <section class="tooling-workflow-panel pipeline-workflow-panel" aria-label="Postup řízený pipeline">
    <div class="tooling-panel-label">02 · POSTUP PIPELINE</div>
    <div class="tooling-panel-title" v-click="2"><mdi-console-line /><b>PROGRAMOVATELNÉ ROZHRANÍ</b></div>
    <div class="tooling-runner-shell" v-click="2">
      <div class="tooling-runner-bar"><mdi-source-branch /><span>SPUŠTĚNÍ PIPELINE</span></div>
      <div class="tooling-runner-question"><mdi-help-circle-outline /><b>POTŘEBUJE<br>PROGRAMOVATELNÉ ROZHRANÍ</b></div>
    </div>
    <div class="tooling-cli-boundary" v-click="2">
      <div class="tooling-cli-label"><mdi-console-line /><b>CLI / API</b><small>JEDNO ROZHRANÍ PRO AUTOMATIZACI</small></div>
      <div class="tooling-automated-steps">
        <div><mdi-hammer-wrench /><b>SESTAVIT</b></div>
        <div><mdi-test-tube /><b>TESTOVAT</b></div>
        <div><mdi-package-variant-closed /><b>ZABALIT</b></div>
        <div><mdi-upload-network-outline /><b>PŘENÉST</b></div>
        <div><mdi-file-check-outline /><b>VRÁTIT VÝSLEDEK</b></div>
      </div>
    </div>
    <p class="tooling-panel-note" v-click="2">Podporovanou operaci lze spouštět opakovatelně stejným způsobem.</p>
  </section>
</div>

<div class="tooling-takeaway" v-click="3">
  <strong>If a human must click it, a pipeline cannot reliably automate it.</strong>
  <small>Operace musí mít programové rozhraní, které ji podporuje.</small>
</div>

<div class="slide-id">34</div>

<!--
Mluvili jsme o CI, CD a automatizovaném testování. Když člověk pracuje v GUI, jednotlivé kroky provádí ručně. To je vhodné pro interaktivní engineering, ale hůř se to automatizuje bez programového rozhraní.

[CLICK]
Příklad ručního postupu: otevřít projekt, vybrat konfiguraci, sestavit ho, zkontrolovat výsledek a případně spustit přenos.

[CLICK]
Pro pipeline musí být tyto konkrétní operace dostupné programově. CLI nebo API ale nemusí kopírovat celé GUI; automatizovat lze jen podporované operace.

[CLICK]
Věta „If a human must click it, a pipeline cannot reliably automate it“ zůstává jako pracovní zjednodušení pro pozdější revizi.
-->

---
layout: default
class: as-cli-intro-slide dark-slide topic-as-cli
---

<script setup>
import './as-cli/styles.css'
</script>

<div class="status-badge general">NÁSTROJE B&amp;R</div>
<div class="kicker">WORKSHOP 02 · AS · PŘEHLED UKÁZKY</div>

# Nové <span class="accent">as CLI</span>

<div class="as-cli-subtitle">Jedno programovatelné rozhraní pro pipeline, agenty i inženýry.</div>

<div class="as-cli-consumer-row" aria-label="Uživatelé as CLI">
  <article class="as-cli-consumer-card as-cli-consumer-devops" v-click="1">
    <div class="as-cli-consumer-icon"><mdi-source-branch /></div>
    <div class="as-cli-consumer-copy">
      <span>01 · UŽIVATEL</span>
      <b>DEVOPS PIPELINE</b>
    </div>
    <mdi-arrow-down class="as-cli-consumer-arrow" />
  </article>
  <article class="as-cli-consumer-card as-cli-consumer-engineer" v-click="1">
    <div class="as-cli-consumer-icon"><mdi-account-hard-hat-outline /></div>
    <div class="as-cli-consumer-copy">
      <span>02 · UŽIVATEL</span>
      <b>INŽENÝR</b>
    </div>
    <mdi-arrow-down class="as-cli-consumer-arrow" />
  </article>
  <article class="as-cli-consumer-card as-cli-consumer-agent" v-click="1">
    <div class="as-cli-consumer-icon"><mdi-robot-outline /></div>
    <div class="as-cli-consumer-copy">
      <span>03 · UŽIVATEL</span>
      <b>AI AGENT</b>
    </div>
    <mdi-arrow-down class="as-cli-consumer-arrow" />
  </article>
</div>

<div class="as-cli-core-row" aria-label="Programovatelné rozhraní as CLI">
  <section class="as-cli-core" aria-label="Příkazové rozhraní as CLI">
    <div class="as-cli-core-topline"><span>PROGRAMOVATELNÉ ROZHRANÍ</span><small>PŘÍSTUP K NÁSTROJŮM B&amp;R</small></div>
    <div class="as-cli-terminal-line"><span>&gt;_</span> <strong>as</strong></div>
    <div class="as-cli-core-name">PŘÍKAZOVÉ ROZHRANÍ AUTOMATION STUDIA</div>
  </section>
</div>

<div class="as-cli-roadmap" aria-label="Přehled ukázkových schopností as CLI">
  <div class="as-cli-capability-grid">
    <article class="as-cli-capability-card as-cli-capability-build" v-click="1">
      <div class="as-cli-capability-head"><span>01</span><mdi-hammer-wrench /></div>
      <b class="as-cli-capability-name">SESTAVENÍ</b>
      <div class="as-cli-capability-purpose">Sestavit projekt</div>
      <div class="as-cli-command-stack">
        <div class="as-cli-command"><span>&gt;</span><span><strong>as</strong> build</span></div>
        <div class="as-cli-command"><span>&gt;</span><span><strong>as</strong> build sim</span></div>
      </div>
    </article>
    <article class="as-cli-capability-card as-cli-capability-test" v-click="1">
      <div class="as-cli-capability-head"><span>02</span><mdi-test-tube /></div>
      <b class="as-cli-capability-name">OVĚŘENÍ PŘI BĚHU</b>
      <div class="as-cli-capability-purpose">Nastavit vstupy a sledovat chování</div>
      <div class="as-cli-command-stack">
        <div class="as-cli-command"><span>&gt;</span><span><strong>as</strong> var write ...</span></div>
        <div class="as-cli-command"><span>&gt;</span><span><strong>as</strong> var read ...</span></div>
      </div>
    </article>
    <article class="as-cli-capability-card as-cli-capability-package" v-click="1">
      <div class="as-cli-capability-head"><span>03</span><mdi-package-variant-closed /></div>
      <b class="as-cli-capability-name">ZABALENÍ</b>
      <div class="as-cli-capability-purpose">Vytvořit instalační balíček</div>
      <small class="as-cli-capability-sublabel">INSTALAČNÍ BALÍČEK</small>
      <div class="as-cli-command-stack">
        <div class="as-cli-command"><span>&gt;</span><span><strong>as</strong> build pip --output ...</span></div>
      </div>
    </article>
    <article class="as-cli-capability-card as-cli-capability-transfer" v-click="1">
      <div class="as-cli-capability-head"><span>04</span><span class="as-cli-capability-icon"><mdi-upload-network-outline /></span></div>
      <b class="as-cli-capability-name">PŘENOS</b>
      <div class="as-cli-capability-purpose">Přenést na cílové zařízení</div>
      <div class="as-cli-command-stack">
        <div class="as-cli-command"><span>&gt;</span><span><strong>as</strong> transfer online --ip ...</span></div>
      </div>
    </article>
    <article class="as-cli-capability-card as-cli-capability-diagnostics" v-click="1">
      <div class="as-cli-capability-head"><span>05</span><mdi-file-search-outline /></div>
      <b class="as-cli-capability-name">DIAGNOSTIKA</b>
      <div class="as-cli-capability-purpose">Číst záznamy PLC logbooku</div>
      <div class="as-cli-command-stack">
        <div class="as-cli-command"><span>&gt;</span><span><strong>as</strong> logbook read</span></div>
      </div>
    </article>
  </div>
</div>

<div class="slide-id">35</div>

<!--
Předtím jsme mluvili o CI, CD, automatizovaném testování a pipeline. Teď se podíváme na programové rozhraní, které zpřístupňuje podporované operace Automation Studia.

as CLI není DevOps platforma, AI agent ani náhrada Automation Studia. Je to příkazový nástroj pro inženýry, automatizaci i agenty.

[CLICK]

Pro dnešní ukázku vybíráme pět oblastí: sestavení, práci s runtime proměnnými, balení, přenos a diagnostiku. Příkazy na kartách jsou příklady; přesnou syntaxi ověřujeme v nápovědě používané verze.

S5 uvádí širší skupiny příkazů: project/config, logical/library/tp, hardware, mappView, symbol, build, sim, transfer, online PLC a network. Pět karet je výběr pro demo, ne úplný katalog všech funkcí.

Přechod: Příště si ukážeme, jaké projektové instrukce a odborné postupy pomáhají agentovi tyto nástroje používat.

-->

---
layout: default
class: as-cli-demo-slide dark-slide topic-as-cli
---

<script setup>
import './as-cli/styles.css'
</script>

<div class="status-badge demonstrator">DEMO 1 / 3</div>
<div class="kicker">VÝVOJ AS CLI · OVĚŘENÍ V PRAXI</div>

# Jak <span class="accent">as CLI</span> testujeme

<div class="as-cli-devops-flow" aria-label="Testovací brány při vývoji as CLI">
  <article class="as-cli-devops-gate as-cli-devops-unit">
    <div class="as-cli-devops-gate-head"><span>01 · RYCHLÁ KONTROLA</span><mdi-test-tube /></div>
    <b class="as-cli-devops-gate-name">JEDNOTKOVÉ TESTY</b>
    <p>Rychlé testy izolované logiky bez spuštěného Automation Studia.</p>
    <code>.\tests\run-tests.ps1</code>
    <br />
  </article>
  <div class="as-cli-devops-arrow" aria-hidden="true"><span>POTOM</span><mdi-arrow-right /></div>
  <article class="as-cli-devops-gate as-cli-devops-integration">
    <div class="as-cli-devops-gate-head"><span>02 · SIMULÁTOR</span><mdi-monitor-eye /></div>
    <b class="as-cli-devops-gate-name">INTEGRAČNÍ TESTY</b>
    <p>Pomalejší testy celého systému proti simulátoru Automation Studia.</p>
    <code>.\tests\run-integration-tests.ps1</code>
    <br />
  </article>
</div>

<div class="as-cli-devops-result">
  <mdi-shield-check-outline />
  <span>PROŠLO / SELHALO</span>
  <strong>Pomáhají zachytit chyby a ověřit integraci dříve.</strong>
</div>

<div class="slide-id">36</div>

<!--
První demo je z vývojového projektu as CLI.

Projekt má několik jednoduchých unit testů, které testují velmi izolovanou logiku, např. že vstup do funkce dá očekávaný výstup.
Tyto testy jsou velmi rychlé a lze je spouštět často, ale moc neříkají o tom, zda funguje celý systém.
Na to máme integrační testy, kde testujeme všechny as cli příkazy proti testovacímu projektu Automation Studio. Otevřeme si projekt a podíváme se na něj.

Začněte tím, že v terminálu spustíte as --help a ukážete všechny různé příkazy.

Potom skočte do projektu a spusťte unit testy (trvá to asi 2 s).

Poté spusťte integrační test (trvá 1,5 min).
Udělejte "úmyslně" chybu a pak ukažte, že ji integrační test odchytí.
Vysvětlete, že máme GitHub workflow, který tyto testy spouští automaticky před vydáním. S tímto ale počkám do dalšího dema, kde budeme demonstrovat celou CI/CD pipeline.
-->
