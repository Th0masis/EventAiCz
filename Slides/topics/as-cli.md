---
layout: default
class: ot-slide
---

# AS CLI - nový koncept kontroly Automation Studia pomocí AI

---
layout: default
class: demo-slide dark-slide as-cli-slide
---

<div class="status-badge demonstrator">DEMONSTRATOR</div>
<div class="kicker">EXECUTION · 04 MIN</div>

# as cli:<br><span class="accent">action + observation</span>

<div class="demo-steps">
  <div v-click><span>01</span><b>BROWSE</b><small>as --help → command surface</small></div>
  <div v-click><span>02</span><b>PROJECT STATUS</b><small>name · config · cpu</small></div>
  <div v-click><span>03</span><b>SIM ENABLE</b><small>simulation on CPU</small></div>
  <div v-click><span>04</span><b>BUILD SIM</b><small>build + install to ARsim</small></div>
  <div v-click><span>05</span><b>PLC CONNECT</b><small>--ip 127.0.0.1</small></div>
  <div v-click><span>06</span><b>VAR READ</b><small>gProductionCount → value + type</small></div>
  <div v-click><span>07</span><b>VAR WRITE</b><small>gCmdClear → written</small></div>
  <div v-click><span>08</span><b>LOGBOOK READ</b><small>$arlogsys → error entries</small></div>
  <div v-click><span>09</span><b>BUILD PIP</b><small>offline install package</small></div>
</div>

<TerminalCli />


<div class="slide-id">16</div>

<!--
<b>Pokud pauza, tak TEĎ!</b>

`AS CLI` je rozhraní příkazového řádku, které může používat člověk, skript, automatizovaný test, CI pipeline i agent.

AS CLI je samotnou páteří Agentic Bridge a je to něco, <b>co jsme vyvinuli zde v Dánsku</b>. Je to víceméně kompletní rozhraní k Automation Studio 6 a umí spoustu stejných věcí, které se jinak musí provádět ručně v Automation Studio. <b>Kromě samotných runtime funkcí, na které se podíváme za chvíli, umí také přidávat knihovny, hardware, úkoly, HMI, konfigurace atd.</b> I když se samozřejmě jedná pouze o text, je spolehlivější použít stávající skriptovací engine za AS, aby bylo vše správně vloženo a nakonfigurováno s platnými parametry.

Otevírá Automation Studio v headless režimu (bez GUI) a připojuje se přímo k backendu v AS. Všechny funkce a stavy jsou dostupné přes json-rpc rozhraní, které usnadňuje stavbu dalších systémů na tomto základě. Pravděpodobně to bude také to, co využije naše oficiální rozšíření pro VS Code.

[CLICK]

Když jsme navrhovali CLI, bylo pro nás důležité, aby AI byla zohledněna už v návrhu. To znamená, že agent by měl být schopen sám zjistit, jak ho používat, aniž by ho bylo nutné instruovat jak.

Agent může kdekoli spustit --help, aby vyhledal informace o tom, jaké příkazy a jaké parametry může použít a co budou vracet.
[CLICK]

Může poskytnout status projektu, ke kterému je připojen

[CLICK]

Umí simulovat, ale také obsluhovat simulátor. Může například zrychlit nebo zpomalit čas. Tímto způsobem může zkoušet věci ve zpomaleném pohybu, nebo zrychlit čas, pokud má spustit test na velké dávce.

[CLICK]

Umí sestavit projekt buď pro fyzický hardware, nebo pro simulátor

[CLICK]

Připojit se k PLC nebo simulátoru

[CLICK]

Číst proměnné

[CLICK]

Psát proměnné

[CLICK]

Číst logbooky

[CLICK]

Vytvořit PIP balíček. ProjectInstallationPackage PIP (deployment artefakt)

přechod: Teď máme veškeré nástroje na místě, takže nám chybí jen instrukce a skills
-->

---
layout: default
class: tooling-matters-slide dark-slide
---

<div class="status-badge general">GENERAL PRINCIPLE</div>
<div class="kicker">WORKSHOP 02 · TOOLING</div>

# Why <span class="accent">Tooling Matters</span>

<div class="tooling-subtitle">Automation requires programmable access to engineering tools.</div>

<div class="tooling-access-grid" aria-label="Human-driven and pipeline-driven engineering workflows">
  <section class="tooling-workflow-panel gui-workflow-panel" aria-label="Human-driven workflow">
    <div class="tooling-panel-label">01 · HUMAN-DRIVEN WORKFLOW</div>
    <div class="tooling-panel-title"><mdi-monitor-dashboard /><b>GUI WORKFLOW</b></div>
    <div class="tooling-gui-window" v-click="1">
      <div class="tooling-window-bar"><span>ENGINEERING APPLICATION</span><i></i><i></i><i></i></div>
      <div class="tooling-step-list">
        <div class="tooling-step"><span>01</span><mdi-folder-open-outline /><b>OPEN PROJECT</b><span class="tooling-click-icon"><mdi-cursor-default-click-outline /></span></div>
        <div class="tooling-step-arrow"><mdi-arrow-down /></div>
        <div class="tooling-step"><span>02</span><mdi-tune-variant /><b>SELECT CONFIGURATION</b><span class="tooling-click-icon"><mdi-cursor-default-click-outline /></span></div>
        <div class="tooling-step-arrow"><mdi-arrow-down /></div>
        <div class="tooling-step"><span>03</span><mdi-hammer-wrench /><b>CLICK BUILD</b><span class="tooling-click-icon"><mdi-cursor-default-click-outline /></span></div>
        <div class="tooling-step-arrow"><mdi-arrow-down /></div>
        <div class="tooling-step"><span>04</span><mdi-text-box-search-outline /><b>READ RESULT</b><span class="tooling-click-icon"><mdi-cursor-default-click-outline /></span></div>
        <div class="tooling-step-arrow"><mdi-arrow-down /></div>
        <div class="tooling-step"><span>05</span><mdi-upload-network-outline /><b>CLICK TRANSFER</b><span class="tooling-click-icon"><mdi-cursor-default-click-outline /></span></div>
      </div>
      <div class="tooling-manual-cue"><mdi-cursor-default-click-outline /><span>REPEAT EACH HANDOFF BY HAND</span></div>
    </div>
    <p class="tooling-panel-note" v-click="1">Effective for engineering work, difficult for unattended execution.</p>
  </section>

  <div class="tooling-interface-bridge" v-click="2" aria-label="Complementary interfaces">
    <div class="tooling-bridge-box"><strong>GUI</strong><small>FOR PEOPLE</small></div>
    <mdi-arrow-down />
    <div class="tooling-bridge-caption">SAME<br>ENGINEERING<br>CAPABILITY</div>
    <mdi-arrow-down />
    <div class="tooling-bridge-box is-automation"><strong>CLI / API</strong><small>FOR AUTOMATION</small></div>
  </div>
  <section class="tooling-workflow-panel pipeline-workflow-panel" aria-label="Pipeline-driven workflow">
    <div class="tooling-panel-label">02 · PIPELINE-DRIVEN WORKFLOW</div>
    <div class="tooling-panel-title" v-click="2"><mdi-console-line /><b>PROGRAMMABLE INTERFACE</b></div>
    <div class="tooling-runner-shell" v-click="2">
      <div class="tooling-runner-bar"><mdi-source-branch /><span>PIPELINE RUNNER</span></div>
      <div class="tooling-runner-question"><mdi-help-circle-outline /><b>NEED A<br>PROGRAMMABLE INTERFACE</b></div>
    </div>
    <div class="tooling-cli-boundary" v-click="2">
      <div class="tooling-cli-label"><mdi-console-line /><b>CLI / API</b><small>ONE AUTOMATED BOUNDARY</small></div>
      <div class="tooling-automated-steps">
        <div><mdi-hammer-wrench /><b>BUILD</b></div>
        <div><mdi-test-tube /><b>TEST</b></div>
        <div><mdi-package-variant-closed /><b>PACKAGE</b></div>
        <div><mdi-upload-network-outline /><b>TRANSFER</b></div>
        <div><mdi-file-check-outline /><b>RETURN RESULT</b></div>
      </div>
    </div>
    <p class="tooling-panel-note" v-click="2">The same operation can be executed consistently every time.</p>
  </section>
</div>

<div class="tooling-takeaway" v-click="3">
  <strong>If a human must click it, a pipeline cannot reliably automate it.</strong>
  <small>The capability must also be exposed programmatically.</small>
</div>

<div class="slide-id">34</div>

<!--
Teď jsme mluvili o CI a CD.
Ale pořád chybí jedna důležitá otázka.
Jak to všechno vlastně uděláme?
Protože pipeline nemůže kliknout myší.

Vezměme si klasickou engineeringovou aplikaci.
Mohla by to být Automation Studio.
Mohl by to být TIA Portal.
Mohl by to být Studio 5000.

Jako lidé můžeme dělat spoustu věcí.
Můžeme otevřít projekt.
Můžeme zvolit konfiguraci.
Můžeme spustit build.
Můžeme přečíst výsledek.
Můžeme přenést software na target.
A vlastně to funguje opravdu dobře.

GUI jsou dělaná pro lidi.
Jsou optimalizovaná na to, abychom mohli se systémem zkoumat, chápat a pracovat.
Problém nastane teprve, když chceme automatizaci.
Protože pipeline neví, na co má kliknout.
Nevidí tlačítka.
Neumí číst dialogová okna.
Neumí interpretovat build okno stejně jako člověk.

[CLICK]

Takže pokud chceme automatizovat build, test, balení a nasazení...
potřebujeme jiný typ rozhraní.
Ne rozhraní pro lidi.
Ale rozhraní pro software.
Proto tak často vidíme CLI a API.
Ty dávají přístup přesně ke stejným možnostem jako GUI.
Jen způsobem, kterému pipeline rozumí.


A to nás přivádí k nejdůležitější myšlence celého slidu.
"Pokud na to musí kliknout člověk, pipeline to nedokáže automatizovat."
To je samozřejmě mírné zjednodušení.

Ale základní myšlenka je důležitá:
Pokud chceme DevOps.
Pokud chceme automatické testy.
Pokud chceme Agentic Engineering.
Musí být engineeringové funkce, ke kterým už máme jako lidé přístup...
dostupné i programově.
A přesně tady přichází na scénu B&R.

Podívejme se tedy, jak se to snažíme udělat v Automation Studio.
-->

---
layout: default
class: as-cli-intro-slide dark-slide
---

<div class="status-badge general">B&amp;R TOOLING</div>
<div class="kicker">WORKSHOP 02 · AS · DEMO ROADMAP</div>

# New <span class="accent">as CLI</span>

<div class="as-cli-subtitle">One programmable interface for pipelines, agents, and engineers.</div>

<div class="as-cli-consumer-row" aria-label="Consumers of as">
  <article class="as-cli-consumer-card as-cli-consumer-devops" v-click="1">
    <div class="as-cli-consumer-icon"><mdi-source-branch /></div>
    <div class="as-cli-consumer-copy">
      <span>01 · CONSUMER</span>
      <b>DEVOPS PIPELINE</b>
    </div>
    <mdi-arrow-down class="as-cli-consumer-arrow" />
  </article>
  <article class="as-cli-consumer-card as-cli-consumer-engineer" v-click="1">
    <div class="as-cli-consumer-icon"><mdi-account-hard-hat-outline /></div>
    <div class="as-cli-consumer-copy">
      <span>02 · CONSUMER</span>
      <b>ENGINEER</b>
    </div>
    <mdi-arrow-down class="as-cli-consumer-arrow" />
  </article>
  <article class="as-cli-consumer-card as-cli-consumer-agent" v-click="1">
    <div class="as-cli-consumer-icon"><mdi-robot-outline /></div>
    <div class="as-cli-consumer-copy">
      <span>03 · CONSUMER</span>
      <b>AI AGENT</b>
    </div>
    <mdi-arrow-down class="as-cli-consumer-arrow" />
  </article>
</div>

<div class="as-cli-core-row" aria-label="as programmable tool layer">
  <section class="as-cli-core" aria-label="as command-line tool">
    <div class="as-cli-core-topline"><span>PROGRAMMABLE TOOL LAYER</span><small>B&amp;R ENGINEERING ACCESS</small></div>
    <div class="as-cli-terminal-line"><span>&gt;_</span> <strong>as</strong></div>
    <div class="as-cli-core-name">AUTOMATION STUDIO COMMAND LINE INTERFACE</div>
  </section>
</div>

<div class="as-cli-roadmap" aria-label="as demonstration roadmap">
  <div class="as-cli-capability-grid">
    <article class="as-cli-capability-card as-cli-capability-build" v-click="1">
      <div class="as-cli-capability-head"><span>01</span><mdi-hammer-wrench /></div>
      <b class="as-cli-capability-name">BUILD</b>
      <div class="as-cli-capability-purpose">Compile the project</div>
      <div class="as-cli-command-stack">
        <div class="as-cli-command"><span>&gt;</span><span><strong>as</strong> build</span></div>
        <div class="as-cli-command"><span>&gt;</span><span><strong>as</strong> build sim</span></div>
      </div>
    </article>
    <article class="as-cli-capability-card as-cli-capability-test" v-click="1">
      <div class="as-cli-capability-head"><span>02</span><mdi-test-tube /></div>
      <b class="as-cli-capability-name">TEST INTERACTION</b>
      <div class="as-cli-capability-purpose">Set inputs and inspect behavior</div>
      <div class="as-cli-command-stack">
        <div class="as-cli-command"><span>&gt;</span><span><strong>as</strong> var write ...</span></div>
        <div class="as-cli-command"><span>&gt;</span><span><strong>as</strong> var read ...</span></div>
      </div>
    </article>
    <article class="as-cli-capability-card as-cli-capability-package" v-click="1">
      <div class="as-cli-capability-head"><span>03</span><mdi-package-variant-closed /></div>
      <b class="as-cli-capability-name">PACKAGE</b>
      <div class="as-cli-capability-purpose">Create an installation package</div>
      <small class="as-cli-capability-sublabel">PROJECT INSTALLATION PACKAGE</small>
      <div class="as-cli-command-stack">
        <div class="as-cli-command"><span>&gt;</span><span><strong>as</strong> build pip --output ...</span></div>
      </div>
    </article>
    <article class="as-cli-capability-card as-cli-capability-transfer" v-click="1">
      <div class="as-cli-capability-head"><span>04</span><span class="as-cli-capability-icon"><mdi-upload-network-outline /></span></div>
      <b class="as-cli-capability-name">TRANSFER</b>
      <div class="as-cli-capability-purpose">Transfer to a target</div>
      <div class="as-cli-command-stack">
        <div class="as-cli-command"><span>&gt;</span><span><strong>as</strong> transfer online --ip ...</span></div>
      </div>
    </article>
    <article class="as-cli-capability-card as-cli-capability-diagnostics" v-click="1">
      <div class="as-cli-capability-head"><span>05</span><mdi-file-search-outline /></div>
      <b class="as-cli-capability-name">DIAGNOSTICS</b>
      <div class="as-cli-capability-purpose">Read controller logbook entries</div>
      <div class="as-cli-command-stack">
        <div class="as-cli-command"><span>&gt;</span><span><strong>as</strong> logbook read</span></div>
      </div>
    </article>
  </div>
</div>

<div class="slide-id">35</div>

<!--
Zatím jsme mluvili o principech a teorii.
CI.
CD.
Automatizované testování.
Pipelines.

Ale celá ta teorie nám vlastně moc nepomůže, pokud se nástroje nedají automatizovat.

Proto jsme tady v Dánsku pracovali na as-cli.
(ukazuje doprostřed)

Ve skutečnosti to není DevOps platforma.
Není to AI agent.
A není to ani náhrada za Automation Studio.
Je to programovatelné rozhraní k Automation Studio.

To znamená, že stejnou engineeringovou funkčnost teď může používat:
- inženýr
- DevOps pipeline
- nebo AI agent

Mluvili jsme o tom, že člověk používá GUI, zatímco automatizace potřebuje CLI nebo API.
Přesně tuto roli plní as-cli.

(ukazuje na capabilities)

Pro dnešní demo je zajímavých zejména 5 capabilities.
Build projektů.
Interakce s runtime proměnnými.
Balení softwaru.
Transfer na target.
A diagnostika.

Ve skutečnosti je to dost na to, abychom postavili překvapivě velkou část DevOps pipeline.
A přesně těchto 5 věcí použijeme i v následujících demech.

-->

---
layout: default
class: as-cli-demo-slide dark-slide
---

<div class="status-badge demonstradtor">DEMO 1 / 3</div>
<div class="kicker">AS-CLI DEVELOPMENT · DEVOPS IN PRACTICE</div>

# How <span class="accent">as CLI</span> tests itself

<div class="as-cli-devops-flow" aria-label="as development test gates">
  <article class="as-cli-devops-gate as-cli-devops-unit">
    <div class="as-cli-devops-gate-head"><span>01 · FAST GATE</span><mdi-test-tube /></div>
    <b class="as-cli-devops-gate-name">PURE UNIT TESTS</b>
    <p>Fast tests of isolated logic, with no live Automation Studio</p>
    <code>.\tests\run-tests.ps1</code>
    <br />
  </article>
  <div class="as-cli-devops-arrow" aria-hidden="true"><span>THEN</span><mdi-arrow-right /></div>
  <article class="as-cli-devops-gate as-cli-devops-integration">
    <div class="as-cli-devops-gate-head"><span>02 · REAL SYSTEM</span><mdi-monitor-eye /></div>
    <b class="as-cli-devops-gate-name">INTEGRATION TESTS</b>
    <p>Slower tests that verify the complete system up against an Automation Studio simulator </p>
    <code>.\tests\run-integration-tests.ps1</code>
    <br />
  </article>
</div>

<div class="as-cli-devops-result">
  <mdi-shield-check-outline />
  <span>PASS / FAIL</span>
  <strong>Protects quality. Builds confidence. Catches issues early.</strong>
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
