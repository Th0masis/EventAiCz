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
Regrese čitelnosti tohoto tématu se ověřuje ze Slides příkazem
`node topics\as-cli\tests\contrast.test.mjs` proti běžícímu serveru;
SLIDES_URL mění jeho adresu. Ostatní kontroly a smoke test viz Slides/TESTING.md.
-->

---
layout: default
class: ot-slide dark-slide topic-as-cli cli-story
---

<script setup>
import './as-cli/styles.css'
</script>

# Proč nestačí, aby AI napsala kód

<p class="cli-lead">Automatizace potřebuje provádět operace a číst jejich výsledky, ne jen klikat v GUI.</p>

<div class="cli-comparison">
  <section>
    <h2>Samotný text nestačí</h2>
    <p>Nový program musí být součástí projektu a přiřazený ke spuštění.</p>
    <p>Odhad názvu parametru nebo platného XML může být chybný.</p>
    <p>„Hotovo“ v odpovědi agenta není výsledek testu.</p>
  </section>
  <section v-click="1">
    <h2>AS CLI přidává nástroj</h2>
    <p>V podporovaných operacích mění projekt přes Automation Studio.</p>
    <p>Čte schémata a metadata z nainstalovaného prostředí.</p>
    <p>Vrací diagnostiku buildu, hodnoty PLC a logbook.</p>
  </section>
</div>

<div class="cli-conclusion" v-click="2">
  <strong>Člověk, skript i agent mohou použít stejné příkazy.</strong>
  <p>AS CLI vykonává operace. Agent plánuje. Člověk určuje cíl a hranice.</p>
</div>

<!--
Čas: 2:00.
Mapa odhalování: 0 = nadpis, lead a levý sloupec; 1 = celý pravý sloupec;
2 = závěr s odpovědnostmi. Konečný stav = obě srovnání i závěr.
Žádné další interaktivní komponenty. Každý marker odpovídá jedné skupině.

Začněte praktickým problémem: soubor se Structured Textem ještě není běžící
úloha. Projekt obsahuje registrace a vazby mezi Logical a Physical.
GUI je vhodné pro člověka. CLI ho nemusí nahrazovat; přidává rozhraní pro
opakovatelný postup bez ručního předávání mezi okny.

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
class: ot-slide dark-slide topic-as-cli cli-story
---

<script setup>
import './as-cli/styles.css'
</script>

# Co můžeme přes AS CLI dělat

<p class="cli-lead">Od struktury projektu přes sestavení až po pozorování runtime.</p>

<div class="cli-capabilities">
  <section>
    <h2>Projekt a konfigurace</h2>
    <p>Objekty, knihovny, technology packages, hardware a schémata.</p>
    <code class="cli-code">as project status</code>
    <code class="cli-code">as logical add StProgram Conveyor --parent Machine</code>
    <code class="cli-code">as config schema read .axis</code>
  </section>
  <section v-click="1">
    <h2>Sestavení a doručení</h2>
    <p>Build, ARsim, instalační balíčky a transfer na zvolený cíl.</p>
    <code class="cli-code">as build</code>
    <code class="cli-code">as build sim</code>
    <code class="cli-code">as build pip</code>
  </section>
  <section v-click="2">
    <h2>Runtime a diagnostika</h2>
    <p>Připojení PLC, čtení a zápis hodnot, I/O a logbook.</p>
    <code class="cli-code">as plc connect --ip 127.0.0.1</code>
    <code class="cli-code">as var read gProductionCount --task Cyclic</code>
    <code class="cli-code">as logbook read --count 20 --level error</code>
  </section>
</div>

<p class="cli-conclusion">Příkazy a parametry ověřujeme v <code>as --help</code> konkrétní instalace.</p>

<!--
Čas: 2:30.
Mapa odhalování: 0 = nadpis, lead, první oblast a spodní poznámka;
1 = sestavení a doručení; 2 = runtime a diagnostika. Finále = všechny tři oblasti.

Nečtěte všechny příkazy. První sloupec ukazuje, že nejde jen o build wrapper:
CLI umí pracovat i s projektovou strukturou a metadata získává z prostředí.
Conveyor a rodič Machine jsou modelové názvy převzaté ze školicího příkladu,
ne existence těchto objektů v otevřeném projektu.
Úprava ST těla je práce agenta se souborem, ne automatická schopnost CLI.

[CLICK]
as build sestaví projekt. as build sim sestaví a instaluje do ARsim;
as build pip vytváří instalační artefakt, nikoli schválení k nasazení.
Transfer na fyzické zařízení je samostatná zapisující operace
`as transfer online --ip <IP>`; dnes ji nepoužijeme.

[CLICK]
Čtení hodnot a logbooku vrací pozorování. Zápis a force mění chování cíle;
force není obyčejné čtení ani bezpečná výchozí volba pro demonstraci.
Další skupiny podle školení: symbol, network, mappview. Rozsah a názvy
se mohou lišit podle instalace; netvrdíme úplnou paritu s GUI.

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

<div class="cli-discovery">
  <section>
    <h2>Cíl a pravidla</h2>
    <p>Uživatel vymezí projekt, očekávaný výsledek a povolené změny.</p>
    <p><code>AGENTS.md</code> a příslušný skill vedou agenta k nástroji.</p>
    <p>Oprávnění spouštět příkazy řídí klient a jeho nastavení.</p>
  </section>
  <section v-click="1">
    <h2>Od nápovědy k výsledku</h2>
    <code class="cli-code">as --help</code>
    <code class="cli-code">as help build</code>
    <code class="cli-code">as --format json project status</code>
    <p>Text pro člověka, JSON pro zpracování; návratový kód pro stav operace.</p>
  </section>
</div>

<div class="cli-conclusion" v-click="2">
  <strong>Nejdřív zjistit stav. Potom provést změnu. Nakonec ověřit výsledek.</strong>
  <p>Při chybě přečíst diagnostiku a opravit příčinu, ne pokračovat jako při úspěchu.</p>
</div>

<!--
Čas: 2:00.
Mapa odhalování: 0 = nadpis, lead a levá část; 1 = pravá část s třemi
příkazy; 2 = závěr. Finále = celý postup. Bez dalších interakcí.

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

<div class="cli-discovery">
  <section>
    <h2>Uživatel vymezí test</h2>
    <blockquote class="cli-request">„V ARsim ověř reset počítadla. Zaznamenej hodnotu před a po resetu, zkontroluj logbook. Na fyzické PLC nic nepřenášej.“</blockquote>
    <p>Projekt: <code>DevOpsDemo</code>, úloha: <code>Cyclic</code>.</p>
    <p>Počítadlo: <code>gProductionCount</code><br>Reset: <code>gCmdClear</code></p>
  </section>
  <section v-click="1">
    <h2>Agent připraví postup</h2>
    <ol class="cli-test-plan">
      <li>Ověřit projekt a dostupnou syntaxi.</li>
      <li>Zapnout simulaci, sestavit, připojit se.</li>
      <li>Přečíst hodnotu → resetovat → znovu přečíst.</li>
      <li>Porovnat s očekáváním a přečíst logbook.</li>
    </ol>
  </section>
</div>

<p class="cli-conclusion" v-click="2"><strong>Podmínka testu:</strong> při zastaveném počítání očekáváme po resetu hodnotu 0. Úspěšný zápis sám nestačí.</p>

<!--
Čas: 2:00.
Mapa odhalování: 0 = zadání, kontext a proměnné; 1 = všechny čtyři kroky
testovacího plánu současně; 2 = podmínka úspěchu. Finále = celý kontrakt testu.

Příklad je záměrně malý. Neřešíme nový pohon ani HMI; ukazujeme vazbu
akce a pozorování. Projekt a názvy proměnných pocházejí z existujícího
ilustračního TerminalCli.vue; nejsou zde ověřeny v dostupném AS projektu.
Požadavek testu a očekávaná nula jsou modelové, ne naměřený výsledek.

[CLICK]
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
class: ot-slide dark-slide topic-as-cli cli-story
---

<script setup>
import './as-cli/styles.css'
</script>

# Kde AS CLI použít a co tím neprokážeme

<div class="cli-use-cases">
  <section>
    <h2>Inženýr</h2>
    <p>Opakovaný build a diagnostika bez ručního procházení stejných oken.</p>
  </section>
  <section>
    <h2>Agent</h2>
    <p>Změní projekt, sestaví jej a podle pozorování opraví další krok.</p>
  </section>
  <section>
    <h2>CI skript</h2>
    <p>Spustí příkazy, vyhodnotí podmínky a při chybě zastaví další kroky.</p>
  </section>
</div>

<div class="cli-evidence" v-click="1">
  <h2>Výsledek operace není důkaz celé aplikace</h2>
  <p><code>build OK</code> ≠ správné chování · <code>written</code> ≠ reset ověřen · PIP ≠ nasazeno</p>
  <code class="cli-code">as var read gProductionCount --task Cyclic</code>
  <p>Doplnit čtení po resetu: očekáváme 0, skutečný výsledek přepis nedokládá.</p>
</div>

<div class="cli-conclusion" v-click="2">
  <strong>Začněte jedním měřitelným testem v simulaci.</strong>
  <p>Windows + kompatibilní AS + dostupné CLI. Člověk zkontroluje změny a schvaluje rizikové kroky.</p>
</div>

<!--
Čas: 3:00. Časový součet: 0:30 + 2:00 + 2:30 + 2:00 + 2:00 + 3:00 + 3:00 = 15:00.
Mapa odhalování: 0 = nadpis a tři použití; 1 = celý blok důkazů a závěr
o nedokončeném testu; 2 = doporučení a předpoklady. Finále = všechno.
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
