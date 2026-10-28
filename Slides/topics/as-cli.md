---
layout: default
class: ot-slide chapter-slide topic-as-cli
---

<script setup>
import './as-cli/styles.css'
</script>

<img class="chapter-image" src="/topics/as-cli/chapter.jpg" alt="">

# AS CLI: od zadání k ověřenému výsledku

<!--
Čas: 0:30. Celý blok: 15:00, šest obsahových slidů a tento úvod.
Mapa odhalování: název a obraz viditelné od začátku; bez kliků a interakcí.

Agent může napsat správně vypadající kód. Jak ale pozná, že je změna správně
zapojená do projektu, sestavitelná a že se chová podle zadání?
AS CLI je programovatelné rozhraní k Automation Studiu, ne další AI model.
Ukážeme proč ho potřebujeme, rozsah funkcí a krátký průchod simulací.

Zdroje celého bloku, studováno 28. 10. 2026:
- agentic-bridge-training/docs/agentic-bridge/slides/s5/07-what-is-as-cli/{page,lang.en}.js
- s5/08-cli-primer, 09-capabilities, 10-how-agent-learns-as, 14-loop-verify, 15-loop-test.
- agentic-engineering-in-automation-studio/plugins/as-skills/README.md a template/AGENTS.md.
- UserMeetingSK_AI/Slides/slides.md, kapitola Agentic Bridge.
Rozsah je podle lokálních podkladů; přesnou verzi instalovaného CLI nelze
uvést, protože zde není na PATH. Nejde o potvrzení všeobecné dostupnosti.
Regrese grafických diagramů a čitelnosti tohoto tématu se ověřuje ze Slides příkazem
`node topics\as-cli\tests\contrast.test.mjs` proti běžícímu serveru;
SLIDES_URL mění jeho adresu. Ostatní kontroly a smoke test viz Slides/TESTING.md.
-->

---
layout: default
class: ot-slide dark-slide tooling-matters-slide topic-as-cli cli-story
---

<script setup>
import './as-cli/styles.css'
</script>

# Proč nestačí, aby AI napsala kód

<p class="cli-lead">Automatizace potřebuje provádět operace a číst jejich výsledky, ne jen klikat v GUI.</p>

<div class="tooling-access-grid" aria-label="Ruční práce v GUI a automatizace přes CLI">
  <section class="tooling-workflow-panel gui-workflow-panel" aria-label="Ruční postup">
    <div class="tooling-panel-title"><mdi-monitor-dashboard /><b>Člověk v GUI</b></div>
    <div class="tooling-gui-window" v-click="1">
      <div class="tooling-window-bar"><span>Automation Studio</span><i></i><i></i><i></i></div>
      <div class="tooling-step-list">
        <div class="tooling-step"><span>01</span><mdi-folder-open-outline /><b>Otevřít projekt</b><span class="tooling-click-icon"><mdi-cursor-default-click-outline /></span></div>
        <div class="tooling-step-arrow"><mdi-arrow-down /></div>
        <div class="tooling-step"><span>02</span><mdi-tune-variant /><b>Zvolit konfiguraci</b><span class="tooling-click-icon"><mdi-cursor-default-click-outline /></span></div>
        <div class="tooling-step-arrow"><mdi-arrow-down /></div>
        <div class="tooling-step"><span>03</span><mdi-hammer-wrench /><b>Spustit build</b><span class="tooling-click-icon"><mdi-cursor-default-click-outline /></span></div>
        <div class="tooling-step-arrow"><mdi-arrow-down /></div>
        <div class="tooling-step"><span>04</span><mdi-text-box-search-outline /><b>Přečíst výsledek</b><span class="tooling-click-icon"><mdi-cursor-default-click-outline /></span></div>
        <div class="tooling-step-arrow"><mdi-arrow-down /></div>
        <div class="tooling-step"><span>05</span><mdi-upload-network-outline /><b>Provést transfer</b><span class="tooling-click-icon"><mdi-cursor-default-click-outline /></span></div>
      </div>
      <div class="tooling-manual-cue"><mdi-cursor-default-click-outline /><span>Každý krok obsluhuje člověk</span></div>
    </div>
    <p class="tooling-panel-note" v-click="1">Vhodné pro interaktivní engineering.</p>
  </section>
  <div class="tooling-interface-bridge" v-click="2" aria-label="Dvě rozhraní k podporovaným operacím">
    <div class="tooling-bridge-box"><strong>GUI</strong><small>Pro člověka</small></div>
    <mdi-arrow-down />
    <div class="tooling-bridge-caption">Podporované<br>operace AS</div>
    <mdi-arrow-down />
    <div class="tooling-bridge-box is-automation"><strong>CLI</strong><small>Pro automatizaci</small></div>
  </div>
  <section class="tooling-workflow-panel pipeline-workflow-panel" aria-label="Programovatelný postup">
    <div class="tooling-panel-title" v-click="2"><mdi-console-line /><b>Agent nebo skript</b></div>
    <div class="tooling-runner-shell" v-click="2">
      <div class="tooling-runner-bar"><mdi-source-branch /><span>Spustit → přečíst → vyhodnotit</span></div>
      <div class="tooling-runner-question"><mdi-robot-outline /><b>Konkrétní příkaz<br>místo ručního kliku</b></div>
    </div>
    <div class="tooling-cli-boundary" v-click="2">
      <div class="tooling-cli-label"><mdi-console-line /><b>AS CLI</b><small>Operace a jejich výsledky</small></div>
      <div class="tooling-automated-steps">
        <div><mdi-hammer-wrench /><b>Build</b></div>
        <div><mdi-test-tube /><b>Test</b></div>
        <div><mdi-package-variant-closed /><b>Balíček</b></div>
        <div><mdi-upload-network-outline /><b>Transfer</b></div>
        <div><mdi-file-check-outline /><b>Výsledek</b></div>
      </div>
    </div>
    <p class="tooling-panel-note" v-click="2">Stejné příkazy pro člověka, agenta i CI.</p>
  </section>
</div>

<div class="tooling-takeaway" v-click="3">
  <strong>AS CLI propojí akci s pozorováním výsledku.</strong>
  <small>Agent plánuje. CLI provádí podporované operace. Člověk určuje cíl a hranice.</small>
</div>

<!--
Čas: 2:00.
Mapa odhalování: 0 = nadpis, lead a levý titulek; 1 = celé GUI s pěti kroky
a poznámkou; 2 = most GUI/CLI a celý pravý postup; 3 = závěr s odpovědnostmi.
Konečný stav = obě srovnání i závěr.
Žádné další interaktivní komponenty. Každý marker odpovídá jedné skupině.

Začněte praktickým problémem: soubor se Structured Textem ještě není běžící
úloha. Projekt obsahuje registrace a vazby mezi Logical a Physical.
GUI je vhodné pro člověka. CLI ho nemusí nahrazovat; přidává rozhraní pro
opakovatelný postup bez ručního předávání mezi okny.

[CLICK]
Pět kroků v GUI je jedna odhalovací skupina, ne pět kliků prezentace.
Člověk vybírá konfiguraci, spouští operaci a ručně čte výsledek.

[CLICK]
V podporovaných operacích může AS objekt vytvořit a zaregistrovat.
To snižuje riziko zapomenuté vazby, ale neprokazuje správnost celé aplikace.
Čtení schémat řeší jiný problém: agent nemá hádat parametry z paměti.
Výsledek nástroje je konkrétní důkaz, nikoli jazykový dojem.

[CLICK]
Stejné CLI použiji ručně, ve skriptu i v pipeline. Agent k tomu přidává
rozhodování a práci s kontextem, není součástí samotného CLI.
Skills dávají postup, Knowledge Hub dohledává znalosti; AS CLI není ani jedno.

Zdroje: training s5/05-cli-vs-mcp-vs-handediting a 07-what-is-as-cli;
as-skills/README.md, Toolchain precedence; template/AGENTS.md,
Project Architecture a Global Invariants. Platí jen pro podporované operace.
-->

---
layout: default
class: ot-slide dark-slide as-cli-intro-slide topic-as-cli cli-story
---

<script setup>
import './as-cli/styles.css'
</script>

# Co můžeme přes AS CLI dělat

<div class="as-cli-consumer-row" aria-label="Tři uživatelé stejného rozhraní">
  <article class="as-cli-consumer-card as-cli-consumer-devops" v-click="1">
    <div class="as-cli-consumer-icon"><mdi-source-branch /></div>
    <div class="as-cli-consumer-copy"><b>CI pipeline</b></div>
    <mdi-arrow-down class="as-cli-consumer-arrow" />
  </article>
  <article class="as-cli-consumer-card as-cli-consumer-engineer" v-click="1">
    <div class="as-cli-consumer-icon"><mdi-account-hard-hat-outline /></div>
    <div class="as-cli-consumer-copy"><b>Inženýr</b></div>
    <mdi-arrow-down class="as-cli-consumer-arrow" />
  </article>
  <article class="as-cli-consumer-card as-cli-consumer-agent" v-click="1">
    <div class="as-cli-consumer-icon"><mdi-robot-outline /></div>
    <div class="as-cli-consumer-copy"><b>AI agent</b></div>
    <mdi-arrow-down class="as-cli-consumer-arrow" />
  </article>
</div>
<div class="as-cli-core-row" aria-label="Společné programovatelné rozhraní">
  <section class="as-cli-core">
    <div class="as-cli-terminal-line"><span>&gt;_</span> <strong>as</strong></div>
    <div class="as-cli-core-name">Programovatelné rozhraní k Automation Studiu</div>
  </section>
</div>
<div class="as-cli-roadmap" v-click="2" aria-label="Pět oblastí operací">
  <div class="as-cli-capability-grid">
    <article class="as-cli-capability-card as-cli-capability-build">
      <div class="as-cli-capability-head"><mdi-hammer-wrench /></div>
      <b class="as-cli-capability-name">Build</b>
      <div class="as-cli-capability-purpose">Sestavení a simulace</div>
      <div class="as-cli-command-stack">
        <div class="as-cli-command"><span>&gt;</span><span><strong>as</strong> build</span></div>
        <div class="as-cli-command"><span>&gt;</span><span><strong>as</strong> build sim</span></div>
      </div>
    </article>
    <article class="as-cli-capability-card as-cli-capability-test">
      <div class="as-cli-capability-head"><mdi-test-tube /></div>
      <b class="as-cli-capability-name">Testování</b>
      <div class="as-cli-capability-purpose">Nastavit vstup, přečíst stav</div>
      <div class="as-cli-command-stack">
        <div class="as-cli-command"><span>&gt;</span><span><strong>as</strong> var write …</span></div>
        <div class="as-cli-command"><span>&gt;</span><span><strong>as</strong> var read …</span></div>
      </div>
    </article>
    <article class="as-cli-capability-card as-cli-capability-package">
      <div class="as-cli-capability-head"><mdi-package-variant-closed /></div>
      <b class="as-cli-capability-name">Balíček</b>
      <div class="as-cli-capability-purpose">Instalační artefakt PIP</div>
      <div class="as-cli-command-stack">
        <div class="as-cli-command"><span>&gt;</span><span><strong>as</strong> build pip</span></div>
      </div>
    </article>
    <article class="as-cli-capability-card as-cli-capability-transfer">
      <div class="as-cli-capability-head"><mdi-upload-network-outline /></div>
      <b class="as-cli-capability-name">Transfer</b>
      <div class="as-cli-capability-purpose">Přenos na zvolený cíl</div>
      <div class="as-cli-command-stack">
        <div class="as-cli-command"><span>&gt;</span><span><strong>as</strong> transfer online --ip …</span></div>
      </div>
    </article>
    <article class="as-cli-capability-card as-cli-capability-diagnostics">
      <div class="as-cli-capability-head"><mdi-file-search-outline /></div>
      <b class="as-cli-capability-name">Diagnostika</b>
      <div class="as-cli-capability-purpose">Logbook a chyby runtime</div>
      <div class="as-cli-command-stack">
        <div class="as-cli-command"><span>&gt;</span><span><strong>as</strong> logbook read</span></div>
      </div>
    </article>
  </div>
</div>
<div class="cli-project-strip" v-click="3">
  <mdi-file-tree-outline />
  <div><strong>Také struktura projektu a konfigurace</strong><code>as logical add StProgram Conveyor --parent Machine</code><code>as config schema read .axis</code></div>
</div>

<!--
Čas: 2:30.
Mapa odhalování: 0 = nadpis a centrální AS CLI; 1 = tři uživatelé a šipky;
2 = všech pět oblastí současně; 3 = spodní pás struktury a konfigurace.
Finále = celý diagram od uživatelů přes CLI k operacím a projektovým změnám.

Centrální AS CLI je společné rozhraní, nikoli AI agent nebo CI služba.

[CLICK]
Stejné příkazy může používat člověk, skript pipeline i agent.
Všichni tři používají centrální CLI, pod ním jsou oblasti podporovaných operací.

[CLICK]
Nečtěte všechny příkazy. Pět oblastí je jedna odhalovací skupina.
as build sestaví projekt. as build sim sestaví a instaluje do ARsim;
as build pip vytváří instalační artefakt, nikoli schválení k nasazení.
Transfer na fyzické zařízení je samostatná zapisující operace
`as transfer online --ip <IP>`; dnes ji nepoužijeme.

Čtení hodnot a logbooku vrací pozorování. Zápis a force mění chování cíle;
force není obyčejné čtení ani bezpečná výchozí volba pro demonstraci.
Další skupiny podle školení: symbol, network, mappview. Rozsah a názvy
se mohou lišit podle instalace; netvrdíme úplnou paritu s GUI.

[CLICK]
CLI umí pracovat i s projektovou strukturou a metadata získává z prostředí.
Conveyor a rodič Machine jsou modelové názvy ze školicího příkladu, ne
existence těchto objektů v otevřeném projektu. Úprava ST těla je práce agenta
se souborem. Parametry ověřujeme v as --help konkrétní instalace.

Zdroje: training s5/09-capabilities/page.js, s5/07-what-is-as-cli/lang.en.js;
as-skills/README.md; lokální TerminalCli.vue/helpOutput.
Důležitý rozpor: training s5/15 používá "as plc var" a "as plc logbook",
starší přepis této prezentace má samostatné "as var" a "as logbook".
Kvůli konzistenci s přepisem je zde druhá varianta. Bez skutečného as --help
nepředstírat ověřenou kompatibilitu. Balíčky ani PLC zde nebyly vytvořeny/spuštěny.
-->

---
layout: default
class: ot-slide dark-slide topic-as-cli cli-story
---

<script setup>
import './as-cli/styles.css'
</script>

# Jak agent zjistí správný příkaz

<p class="cli-lead">Instrukce určují postup. Nápověda popisuje dostupné operace.</p>

<div class="cli-discovery-flow" aria-label="Od cíle přes instrukce a nápovědu k důkazu">
  <section class="cli-flow-node">
    <mdi-account-hard-hat-outline />
    <h2>Cíl</h2>
    <p>Projekt, očekávání a povolené změny.</p>
    <small>Zadává uživatel</small>
  </section>
  <mdi-arrow-right class="cli-flow-arrow" v-click="1" />
  <section class="cli-flow-node" v-click="1">
    <mdi-book-open-page-variant-outline />
    <h2>Postup</h2>
    <p>Instrukce a skill vedou agenta k nástroji.</p>
    <code>AGENTS.md</code>
  </section>
  <mdi-arrow-right class="cli-flow-arrow" v-click="1" />
  <section class="cli-flow-node" v-click="1">
    <mdi-console-line />
    <h2>Příkaz</h2>
    <p>Syntaxe z nápovědy, ne z paměti modelu.</p>
    <code>as --help</code>
    <code>as help build</code>
  </section>
  <mdi-arrow-right class="cli-flow-arrow" v-click="2" />
  <section class="cli-flow-node cli-flow-evidence" v-click="2">
    <mdi-file-check-outline />
    <h2>Důkaz</h2>
    <p>Výstup a návratový kód pro další rozhodnutí.</p>
    <code>--format json</code>
  </section>
</div>

<div class="cli-feedback" v-click="2"><mdi-arrow-u-left-top /><span>Při chybě: diagnostika → oprava → nové ověření</span></div>
<div class="cli-conclusion">
  <strong>Klient řídí oprávnění. Skill je návod, ne povolení k zápisu.</strong>
  <p>Nejdřív zjistit stav. Potom provést změnu. Nakonec ověřit výsledek.</p>
</div>

<!--
Čas: 2:00.
Mapa odhalování: 0 = nadpis, lead, uzel Cíl a spodní pravidlo oprávnění;
1 = uzly Postup a Příkaz s jejich šipkami; 2 = uzel Důkaz, poslední šipka
a návratová vazba k opravě. Finále = celý čtyřuzlový diagram. Bez dalších interakcí.

AS CLI nevybírá cíl za uživatele. Uživatel specifikuje projekt, konfiguraci
a hranice, agent dodá plán a důkazy. Skill je návod, ne oprávnění.
Předpoklady: Windows, kompatibilní lokální AS, dostupné as na PATH,
správný projekt a pro online operace příslušné prostředí a spojení.

[CLICK]
as --help zpřístupní skupiny; as help build prohloubí nápovědu.
CLI umí vyhledat projekt z pracovního adresáře nebo dostane explicitní
`--project <cesta.apj>`. Nezaměnit úspěch dotazu status s úspěchem buildu.
Pro strojové zpracování použít --format json a zkontrolovat výsledek i exit code.
Training uvádí 0 = úspěch, 1 = chyby; nejde o vlastní testovací framework.

[CLICK]
Typický průchod: plán → změna → build → runtime test → lidská revize.
Ne všechny kroky vykonává CLI. Agent zpracuje chyby a vrátí se k opravě;
nepředstírat automaticky správný test nebo automatické schválení nasazení.

Zdroje: training s5/08-cli-primer/{page,lang.en}.js a
s5/10-how-agent-learns-as/{page,lang.en}.js; as-skills/README.md;
template/AGENTS.md, Skill Prerequisites. Zdroje se rozcházejí v tvrzení
"instalováno spolu s AS" vs. požadavek dostupného CLI: negarantujeme způsob
distribuce ani konkrétní číslo AS verze. Instalaci ověřit před živou ukázkou.
-->

---
layout: default
class: ot-slide dark-slide topic-as-cli cli-story
---

<script setup>
import './as-cli/styles.css'
</script>

# Příklad: ověřit reset počítadla

<p class="cli-lead">Modelové zadání nad demonstračním přepisem, pouze v lokální simulaci.</p>

<div class="cli-test-context">
  <mdi-robot-outline />
  <blockquote class="cli-request">„V ARsim ověř reset počítadla. Zaznamenej hodnotu před a po resetu, zkontroluj logbook. Na fyzické PLC nic nepřenášej.“</blockquote>
  <div class="cli-target"><mdi-desktop-classic /><strong>ARsim</strong><code>DevOpsDemo / Cyclic</code><small>127.0.0.1</small></div>
</div>
<div class="cli-reset-flow" v-click="1" aria-label="Přečíst hodnotu, zapsat reset a znovu přečíst">
  <section class="cli-reset-step">
    <mdi-eye-outline />
    <h2>Přečíst před</h2>
    <div class="cli-counter">17 <small>UDINT</small></div>
    <code class="cli-reset-command">as var read<br>gProductionCount<br>--task Cyclic</code>
    <p>Výchozí hodnota v přepisu</p>
  </section>
  <mdi-arrow-right class="cli-flow-arrow" />
  <section class="cli-reset-step cli-reset-action">
    <mdi-restart />
    <h2>Zapsat reset</h2>
    <div class="cli-counter">1</div>
    <code class="cli-reset-command">as var write gCmdClear<br>--task Cyclic<br>--value 1</code>
    <p>Potvrzený zápis ≠ ověřený reset</p>
  </section>
  <mdi-arrow-right class="cli-flow-arrow" />
  <section class="cli-reset-step cli-reset-observe">
    <mdi-magnify />
    <h2>Přečíst po</h2>
    <div class="cli-counter">?</div>
    <code class="cli-reset-command">as var read<br>gProductionCount<br>--task Cyclic</code>
    <p>V přepisu chybí měření</p>
  </section>
</div>

<div class="cli-feedback" v-click="2"><mdi-check-decagram-outline /><span>Při zastaveném počítání očekáváme 0. Ověřit čtením a zkontrolovat logbook.</span></div>

<!--
Čas: 2:00.
Mapa odhalování: 0 = zadání a cíl ARsim; 1 = celá trojice Přečíst před →
Zapsat reset → Přečíst po s hodnotami 17, 1, ? a konkrétními příkazy;
2 = podmínka očekávané nuly
a kontrola logbooku. Finále = celý kontrakt testu, ? se nemění na naměřenou 0.

Příklad je záměrně malý. Neřešíme nový pohon ani HMI; ukazujeme vazbu
akce a pozorování. Projekt a názvy proměnných pocházejí z existujícího
ilustračního TerminalCli.vue; nejsou zde ověřeny v dostupném AS projektu.
Požadavek testu a očekávaná nula jsou modelové, ne naměřený výsledek.

[CLICK]
Příkazy v kartách jsou zalomené kvůli čitelnosti; každý se spouští jako
jeden řádek. Používají syntaxi stejného ilustračního přepisu jako následující
terminál. Před skutečným spuštěním ověřit nápovědu instalované verze:
školení používá také seskupení as plc var. Třetí příkaz je požadované
doplňující čtení, nikoli výsledek obsažený v původním přepisu.
Nejdřív si potvrdit, že reset opravdu takto funguje: datový typ, zda je
gCmdClear jednorázový příkaz či vyžaduje návrat na 0 a zda počítadlo mezitím
neběží. Agent to musí zjistit z kódu/projektu nebo si vyžádat rozhodnutí.
Neslibovat, že jediný write vždy vytváří resetovací impuls.
Uživatel určil simulaci a zákaz fyzického transferu; klient může vyžadovat
schválení příkazů, zejména zápisu. 127.0.0.1 je zamýšlený cíl ukázky,
není to samo o sobě bezpečnostní izolace.

[CLICK]
Počítání je v podmínce testu zastavené, jinak by očekávání nuly bylo křehké.
Na dalším slidu rozlišit, co přepis skutečně ukazuje a co mu k testu chybí.
Nevymýšlíme úspěšný test: druhé čtení v původním přepisu není.

Zdroje: vlastní TerminalCli.vue, commands; training s5/15-loop-test
(princip akce → čtení → porovnání, nikoli syntaxe staršího přepisu).
-->

---
layout: default
class: demo-slide dark-slide as-cli-slide topic-as-cli
---

<script setup>
import './as-cli/styles.css'
import TerminalCli from './as-cli/components/TerminalCli.vue'
</script>

# Příkazy v praxi: akce a pozorování

<p class="cli-demo-label">Ilustrační přepis, nikoli živé připojení k Automation Studiu.</p>

<div class="demo-steps">
  <div v-click><span>01</span><b>BROWSE</b><small>Dostupné příkazy a parametry</small></div>
  <div v-click><span>02</span><b>PROJECT STATUS</b><small>Projekt, konfigurace a CPU</small></div>
  <div v-click><span>03</span><b>SIM ENABLE</b><small>Simulace místo fyzického cíle</small></div>
  <div v-click><span>04</span><b>BUILD SIM</b><small>Sestavení a instalace do ARsim</small></div>
  <div v-click><span>05</span><b>PLC CONNECT</b><small>Připojení na 127.0.0.1</small></div>
  <div v-click><span>06</span><b>VAR READ</b><small>Hodnota počítadla před resetem</small></div>
  <div v-click><span>07</span><b>VAR WRITE</b><small>Zápis resetovacího příkazu</small></div>
  <div v-click><span>08</span><b>LOGBOOK READ</b><small>Diagnostika, ne automatický verdikt</small></div>
  <div v-click><span>09</span><b>BUILD PIP</b><small>Balíček není schválené nasazení</small></div>
</div>

<TerminalCli />

<!--
Čas: 3:00. Nepřepisovat příkazy ručně během přednášky; klikací přepis je záloha.
Mapa odhalování: 0 = nadpis, upozornění a terminál ve stavu čekání;
1 = BROWSE/as --help; 2 = PROJECT STATUS; 3 = SIM ENABLE; 4 = BUILD SIM;
5 = PLC CONNECT; 6 = VAR READ; 7 = VAR WRITE; 8 = LOGBOOK READ;
9 = BUILD PIP. Každá z devíti nečíslovaných direktiv je samostatná skupina.
TerminalCli sleduje počet kliků: po 900 ms ukáže výsledek aktuálního příkazu,
předchozí výsledek sbalí, všechny odhalené příkazy ponechá. Návrat zpět
obnoví příslušný stav; komponenta nespouští žádné externí příkazy.
Finále = všech devět příkazů a pouze výsledek PIP. Bez dalších interakcí.

Od začátku řekněte, že jde o ilustraci z předchozí prezentace, ne záznam
nově provedeného testu. Výstupy jsou zjednodušené. DONE označuje dokončení
animace, nikoli prokázaný úspěch engineeringové operace.

[CLICK]
Agent si nejprve zjistí příkazy. Zobrazujeme označený výřez help, ne celý výpis.

[CLICK]
Status ukazuje modelový DevOpsDemo, Config1, X20CP1686X.

[CLICK]
Zapneme simulaci CPU. Žádné tvrzení o připojení k fyzickému stroji.

[CLICK]
Build sim: sestavení a instalace do ARsim. Úspěch tohoto kroku není runtime test.

[CLICK]
Připojení k lokálnímu cíli. Před živou ukázkou ověřit správný proces a projekt.

[CLICK]
Přepis vrací gProductionCount = 17 a datový typ UDINT. To je výchozí pozorování.

[CLICK]
Zápis gCmdClear = 1 vrací written. POZOR: to ještě neukazuje nulu počítadla.
Pro slíbený test je nutné další čtení:
as var read gProductionCount --task Cyclic
Očekávaný výsledek za podmínek předchozího slidu je 0, ale přepis ho neobsahuje.
Pokud jej neprovedeme živě, výsledek resetu zůstává NEOVĚŘENÝ.

[CLICK]
Logbook má i chybu pohonu. Nezametat ji pod koberec: zjistit čas a souvislost.
Přepis obsahuje INFO i při filtru error; není důkazem chování filtru.
Při skutečném testu vycházet z aktuálních dat a vyhodnotit relevantní chyby.

[CLICK]
PIP je samostatná ukázka balení. Přepis nemá podmíněný gate po testu, proto
nevytváříme dojem úspěšné release pipeline. Balíček nenasazovat automaticky.

Zdroje: původní TerminalCli.vue/helpOutput a commands. Training s5/15 má
novější seskupení plc var/plc logbook. Syntaxi před live demem potvrdit
v nápovědě nainstalované verze. Zde AS CLI není na PATH a nebylo spuštěno.
-->

---
layout: default
class: ot-slide dark-slide as-cli-demo-slide topic-as-cli cli-story
---

<script setup>
import './as-cli/styles.css'
</script>

# Kde AS CLI použít a co tím neprokážeme

<div class="cli-audience-strip" aria-label="Použití inženýrem, agentem a v CI">
  <span><mdi-account-hard-hat-outline />Inženýr</span>
  <span><mdi-robot-outline />Agent</span>
  <span><mdi-source-branch />CI skript</span>
</div>
<div class="as-cli-devops-flow" aria-label="Dvě samostatné úrovně ověření">
  <article class="as-cli-devops-gate as-cli-devops-unit">
    <div class="as-cli-devops-gate-head"><mdi-hammer-wrench /><span>Sestavení</span></div>
    <b class="as-cli-devops-gate-name">Build prošel</b>
    <p>Projekt lze sestavit.<br>Chování aplikace tím není ověřeno.</p>
    <code>as build</code>
  </article>
  <div class="as-cli-devops-arrow" v-click="1"><span>Potom</span><mdi-arrow-right /></div>
  <article class="as-cli-devops-gate as-cli-devops-integration" v-click="1">
    <div class="as-cli-devops-gate-head"><mdi-test-tube /><span>Runtime test</span></div>
    <b class="as-cli-devops-gate-name">Chování odpovídá?</b>
    <p>Porovnat výsledek s očekáváním.<br>V přepisu chybí čtení po resetu.</p>
    <code>as var read gProductionCount --task Cyclic</code>
  </article>
</div>
<div class="as-cli-devops-result" v-click="2">
  <mdi-shield-check-outline /><span>Lidská revize</span>
  <strong>Test → kontrola změn → schválení nasazení</strong>
</div>
<p class="cli-final-note" v-click="2">Začněte v simulaci. Windows + kompatibilní AS + dostupné CLI. PIP balíček ≠ nasazení.</p>

<!--
Čas: 3:00. Časový součet: 0:30 + 2:00 + 2:30 + 2:00 + 2:00 + 3:00 + 3:00 = 15:00.
Mapa odhalování: 0 = nadpis, tři uživatelé a gate sestavení; 1 = spojovací
šipka a celý gate runtime testu; 2 = pás lidské revize a spodní předpoklady.
Finále = obě úrovně důkazu a schválení, ne automatický verdikt PASS.
Bez dalších interaktivních komponent.

Vraťte se ke třem uživatelům stejného nástroje. Pipeline ale ještě vyžaduje
runner s kompatibilním AS a potřebnými závislostmi; samotné CLI není CI služba.
Agent potřebuje vhodný klient, kontext a instrukce. Podpora klientů není
záruka stejného chování nebo automatického přístupu ke všem nástrojům.

[CLICK]
Zopakujte konkrétní rozdíl ze scénáře: written potvrzuje zápis, ne reset.
K dokončení potřebujeme čtení po akci a porovnání s očekávanou nulou
za zastaveného počítání. Relevantní runtime chyby jsou důvod pro šetření,
ne něco, co obejdeme vytvořením balíčku.
Build ověřuje sestavení, simulace jen testované scénáře v daném prostředí.
Bezpečnost stroje ani chování na reálném hardware tím nejsou prokázané.

[CLICK]
První praktický krok: zvolte malý test, přečtěte help a projektový stav,
potom proveďte změnu pouze v určeném prostředí. Výsledkem má být doložitelný
rozdíl a testovací důkaz, ne jen odpověď agenta.
Fyzický transfer a zásahy do runtime až podle pravidel a schválení týmu.
Přechod k AS Repository: nástroj máme; odkud agent vezme správný pracovní postup?

Zdroje: training s5/11-full-loop, 14-loop-verify, 15-loop-test;
template/AGENTS.md, Global Invariants a Completion Gate;
UserMeetingSK_AI/Slides/slides.md, rozlišení vrstev Bridge.
Délka je plán řeči, ne naměřený čas zkoušky před publikem.
-->
