---
layout: default
class: ot-slide chapter-slide topic-orchestrace-dansko
---

<script setup>
import './orchestrace-dansko/styles.css'
</script>

<img class="chapter-image" src="/topics/orchestrace-dansko/chapter.jpg" alt="">

# Case study z Dánska

---
layout: default
class: ot-slide dark-slide loop-slide topic-orchestrace-dansko
clicks: 2
---

<script setup>
import './orchestrace-dansko/styles.css'
</script>

<div class="kicker">DEVOPS × AGENTIC ENGINEERING</div>

# DevOps + Agentic<br><span class="accent">Engineering</span>

<div class="loop-compare">
  <div class="loop-linear">
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
  <div class="loop-cycle" v-click="1">
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

<div class="signal-callout" v-click="2">
  <div class="signal-pulse"></div>
  <p><strong>AS CLI</strong> spojuje agenty se skutečným engineeringem.</p>
</div>

<!--
<b>DevOps je postup sestávající z různých fází</b>, kterými musí software projít. Každá fáze nastavuje požadavky, které zajišťují, že další fáze bude úspěšná. Musí se <b>buď provádět ručně, nebo se ručně předávat dál</b>. Pokud nejsou požadavky splněny dostatečně důkladně, nemá workflow žádnou skutečnou hodnotu.

[click]
<b>Zavedením AI agentů do DevOps procesu</b> se DevOps stává rámcem pro AI, který zajišťuje kvalitu a předvídatelnost. Agenti dodržují své pokyny, velkou část procesů lze automatizovat a znalosti se ukládají do pracovních postupů, nikoli do jednotlivců. Člověk zůstává nad smyčkou: určuje cíl, rozsah a oprávnění a posuzuje výsledek.

[click]
Agent, skript i CI mohou volat stejné rozhraní Automation Studia. AS CLI (BR.AS.Build.exe) sestavuje projekt z příkazové řádky a vrací build status a artefakty zpět do workflow agenta nebo CI. Netvrdíme, že AS CLI samo nahrazuje testy, simulátor nebo lidské schválení.
-->

---
layout: default
class: ot-slide machine-demo-slide feature-request-slide dark-slide topic-orchestrace-dansko
clicks: 3
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
class: ot-slide workflow-overview-slide dark-slide topic-orchestrace-dansko
clicks: 3
---

<script setup>
import './orchestrace-dansko/styles.css'
</script>

# Od záměru k rozhodnutí:<br><span class="accent">kde pracuje agent a kde člověk.</span>

<div class="roadmap" aria-label="Roadmapa workflow: specifikace, implementace a ověření">
  <section class="roadmap-stage is-shared" data-phase="specification" :class="{ 'is-current': $clicks === 1 }">
    <div class="roadmap-station"><span class="roadmap-icon"><mdi-file-document-edit-outline aria-hidden="true" /></span><div><span class="roadmap-mode">01 · ČLOVĚK + AGENT</span><strong>SPECIFIKACE</strong></div></div>
    <div class="roadmap-role is-human"><mdi-account-outline aria-hidden="true" /><span>Zadá záměr, odpoví, schválí tickety</span></div>
    <div class="roadmap-role is-agent"><mdi-robot-outline aria-hidden="true" /><span>Doptá se a navrhne T1 → T2 → T3</span></div>
    <div class="roadmap-artifact roadmap-dialog" v-click="1" aria-label="Ilustrace: od záměru k ticketům">
      <p class="is-human"><mdi-account-outline aria-hidden="true" /><span>Po poruše osy pokračovat ve stejné dávce.</span></p>
      <p class="is-agent"><mdi-robot-outline aria-hidden="true" /><span>Co s neuzavřenými lahvemi?</span></p>
      <p class="is-human"><mdi-account-outline aria-hidden="true" /><span>Vyřadit jako zmetky.</span></p>
      <div class="roadmap-tickets"><b>T1</b><mdi-arrow-right aria-hidden="true" /><b>T2</b><mdi-arrow-right aria-hidden="true" /><b>T3</b></div>
    </div>
  </section>
  <div class="roadmap-handoff is-human"><mdi-account-check-outline aria-hidden="true" /><span>schválené tickety</span></div>
  <section class="roadmap-stage is-agent" data-phase="implementation" :class="{ 'is-current': $clicks === 2 }">
    <div class="roadmap-station"><span class="roadmap-icon"><mdi-robot-outline aria-hidden="true" /></span><div><span class="roadmap-mode">02 · AGENT BEZ DOZORU</span><strong>IMPLEMENTACE</strong></div></div>
    <div class="roadmap-role is-agent"><mdi-robot-outline aria-hidden="true" /><span>Subagenti: změna → review → test</span></div>
    <div class="roadmap-role is-human is-exception"><mdi-account-alert-outline aria-hidden="true" /><span>Člověk jen při riziku nebo opakovaném selhání</span></div>
    <div class="roadmap-artifact roadmap-graph" v-click="2" aria-label="Zjednodušený graf práce: větve T1 až T3 se po review a testu slučují do feature větve">
      <div class="roadmap-graph-body">
        <div class="roadmap-graph-labels"><span>feature</span><span>T1</span><span>T2</span><span>T3</span></div>
        <svg width="236" height="128" viewBox="0 0 236 128" aria-hidden="true">
          <path class="graph-main" d="M 4 16 H 232" />
          <path class="graph-branch" d="M 8 16 C 16 16 14 48 24 48 H 52 C 62 48 60 16 68 16" />
          <path class="graph-branch" d="M 80 16 C 88 16 86 80 96 80 H 136 C 146 80 144 16 152 16" />
          <path class="graph-branch" d="M 164 16 C 172 16 170 112 180 112 H 208 C 218 112 216 16 224 16" />
          <path class="graph-retry" d="M 112 70 C 108 58 100 58 100 70" />
          <circle class="graph-node" cx="30" cy="48" r="4.5" /><circle class="graph-node" cx="46" cy="48" r="4.5" />
          <circle class="graph-node" cx="100" cy="80" r="4.5" /><circle class="graph-node is-failed" cx="116" cy="80" r="5.5" /><circle class="graph-node" cx="132" cy="80" r="4.5" />
          <circle class="graph-node" cx="186" cy="112" r="4.5" /><circle class="graph-node" cx="202" cy="112" r="4.5" />
          <circle class="graph-merge" cx="68" cy="16" r="5.5" /><circle class="graph-merge" cx="152" cy="16" r="5.5" /><circle class="graph-merge" cx="224" cy="16" r="5.5" />
        </svg>
      </div>
      <p class="roadmap-graph-legend"><span class="is-failed">Test selhal</span> → oprava → review a test znovu</p>
    </div>
  </section>
  <div class="roadmap-handoff is-agent"><mdi-package-variant-closed aria-hidden="true" /><span>změna + důkazy</span></div>
  <section class="roadmap-stage is-human" data-phase="evaluation" :class="{ 'is-current': $clicks === 3 }">
    <div class="roadmap-station"><span class="roadmap-icon"><mdi-account-check-outline aria-hidden="true" /></span><div><span class="roadmap-mode">03 · ČLOVĚK ROZHODNE</span><strong>OVĚŘENÍ</strong></div></div>
    <div class="roadmap-role is-agent"><mdi-robot-outline aria-hidden="true" /><span>Předloží diff, testy, logy a rizika</span></div>
    <div class="roadmap-role is-human"><mdi-account-outline aria-hidden="true" /><span>Porovná s cílem: schválí, vrátí, upřesní</span></div>
    <div class="roadmap-artifact roadmap-pr" v-click="3" aria-label="Ilustrace: pull request čeká na lidské schválení">
      <div class="roadmap-pr-head"><mdi-source-pull aria-hidden="true" /><span>PULL REQUEST</span></div>
      <p class="roadmap-pr-branch">feature/obnova-davky → main</p>
      <p><mdi-check-circle-outline aria-hidden="true" /><span>Testy T1–T3 prošly</span></p>
      <p><mdi-check-circle-outline aria-hidden="true" /><span>Diff a logy přiloženy</span></p>
      <p class="is-required"><mdi-account-alert-outline aria-hidden="true" /><span>Schválení člověkem: povinné</span></p>
    </div>
  </section>
</div>
<p class="roadmap-footnote">Ilustrační artefakty, ne skutečný repozitář.</p>

<!--
Celý tok má tři zastávky. Ikona a barva říkají, kdo v dané fázi pracuje: oranžová je člověk, fialová agent. Specifikaci dělá člověk s agentem, implementace běží na agentech a ověření končí lidským rozhodnutím. Mezi fázemi jsou dvě předávky: člověk schválí tickety a agent předá změnu s důkazy.

[click]
Specifikace: člověk popíše záměr, agent se doptá na nejasnosti, například co s neuzavřenými lahvemi. Odpověď dá člověk. Z toho agent navrhne tickety T1, T2 a T3 se závislostmi a člověk je schválí.

[click]
Implementace: každý ticket má vlastní větev. Subagent udělá změnu, další ji zkontroluje a otestuje. Když test selže, práce se vrací k opravě a kontroly běží znovu; až potom se větev sloučí do feature větve. Člověk vstupuje jen při riziku nebo opakovaném selhání.

[click]
Ověření: agent připraví pull request s diffem, testy a logy. Zelené testy ale nejsou rozhodnutí. Člověk porovná výsledek s původním záměrem a PR schválí, vrátí k opravě, nebo upřesní zadání.
-->

---
layout: default
class: ot-slide specification-slide dark-slide topic-orchestrace-dansko
clicks: 2
---

<script setup>
import './orchestrace-dansko/styles.css'
</script>

# Nejdřív ujasnit chování.<br><span class="accent">Potom rozdělit práci.</span>

<div class="workflow-progress" aria-label="Fáze workflow"><span class="is-current">01 Specifikace</span><span class="workflow-progress-separator">→</span><span>02 Implementace</span><span class="workflow-progress-separator">→</span><span>03 Ověření</span></div>

<div class="story-flow" aria-label="Specifikace: spolupráce člověka a agenta">
  <div class="is-human"><mdi-account-outline aria-hidden="true" /><strong>Člověk</strong><span>Záměr</span></div>
  <mdi-arrow-right aria-hidden="true" />
  <div class="is-agent"><mdi-robot-outline aria-hidden="true" /><strong>Agent</strong><span>Otázky</span></div>
  <mdi-arrow-right aria-hidden="true" />
  <div class="is-human"><mdi-account-check-outline aria-hidden="true" /><strong>Člověk</strong><span>Rozhodnutí</span></div>
  <mdi-arrow-right aria-hidden="true" />
  <div class="is-agent"><mdi-format-list-checks aria-hidden="true" /><strong>Agent</strong><span>Tickety</span></div>
</div>
<div class="story-dialog" aria-label="Ilustrační upřesnění chování mezi agentem a člověkem">
  <p class="is-agent"><mdi-robot-outline aria-hidden="true" /><span><strong>Agent se doptá</strong>Co s neuzavřenými lahvemi po poruše?</span></p>
  <div class="story-dialog-options" aria-label="Navržené varianty"><b class="is-chosen">A · Vyřadit jako zmetky</b><b>B · Dokončit plnění</b><b>C · Jiné</b></div>
  <p class="is-human"><mdi-account-outline aria-hidden="true" /><span><strong>Člověk rozhodne</strong>A. Dobrých kusů zůstává 42.</span></p>
</div>

<div class="story-tickets" v-click="1" aria-label="Ilustrační návrh ticketů a akceptačních podmínek">
  <section><span class="story-ticket-id">T1 · PORUCHA</span><h2>Zobrazit poruchu</h2><p>Osa stojí, alarm je vidět.<br>Vyrobený počet zůstává 42.</p></section>
  <section><span class="story-ticket-id">T2 · VYŘAZENÍ</span><h2>Vyřadit lahve</h2><p>Neuzavřené lahve jsou zmetky.<br>Závisí na T1.</p></section>
  <section><span class="story-ticket-id">T3 · OBNOVA</span><h2>Obnovit dávku</h2><p>Další dobrý kus zvýší počet<br>na 43, ne na 1. Závisí na T2.</p></section>
</div>
<div class="story-human-gate story-rule" v-click="2"><mdi-account-check-outline /><p><strong>Člověk schválí záměr i tickety T1 → T2 → T3.</strong></p></div>

<!--
První workflow je specifikace s člověkem ve smyčce. Agent má záměr zpochybnit a otevřít nejasnosti, ne je tiše rozhodnout. Tady se ptá, co s neuzavřenými lahvemi po poruše, a nabídne varianty. Rozhodnutí — vyřadit je jako zmetky — musí dodat vlastník zadání, ne agent. Dialog je ilustrační.

[click]
Teprve potom dává smysl navrhnout tickety. Tady jsou tři ilustrační výsledky, každý s pozorovatelnou akceptační podmínkou. Nejsou to skutečně založené GitHub issues. Úplná specifikace musí doplnit chybové scénáře a povolené podmínky pohybu.

[click]
Člověk zkontroluje, zda se původní záměr při rozpadu neztratil. Návrh má závislosti: obnova navazuje na vyřazení a vyřazení na stav po poruše. Nezávislost nevznikne tím, že práci rozdělíme na tři kartičky. A teď je otázka, co přesně bude uvnitř jedné takové kartičky.
-->

---
layout: default
class: ot-slide vertical-modules-slide dark-slide topic-orchestrace-dansko
clicks: 2
---

<script setup>
import './orchestrace-dansko/styles.css'
</script>

# Hotová vrstva ještě není<br><span class="accent">otestovatelná funkce.</span>

<div class="workflow-progress" aria-label="Fáze workflow"><span class="is-current">01 Specifikace</span><span class="workflow-progress-separator">→</span><span>02 Implementace</span><span class="workflow-progress-separator">→</span><span>03 Ověření</span></div>

<div class="story-slicing">
  <section class="story-horizontal">
    <div class="story-lane-header">
      <span class="story-lane-label">HUMAN DEFAULT</span>
      <h2>DISCIPLINE LANES</h2>
      <mdi-layers-outline aria-hidden="true" class="story-lane-icon" />
    </div>
    <p>Specialisté zůstávají zaměření. Funkce čeká na integrační hranici.</p>
    <div class="story-board-table" aria-label="Horizontal slicing: specialist lanes with work-in-progress columns">
      <div class="story-board-header">
        <span>VRSTVA</span><b>BACKLOG</b><b>ROZPRACOVANÉ</b><b>OVĚŘENO</b>
      </div>
      <div class="story-board-row">
        <strong>HMI</strong>
        <span class="story-board-cell">chyba + reset displej</span>
        <span class="story-board-cell">potřeba názvů stavů</span>
        <span class="story-board-cell"></span>
      </div>
      <div class="story-board-row">
        <strong>BEZPEČNOST</strong>
        <span class="story-board-cell">bezpečný stop</span>
        <span class="story-board-cell">potřeba pravidla resetů</span>
        <span class="story-board-cell"></span>
      </div>
      <div class="story-board-row">
        <strong>ŘÍZENÍ</strong>
        <span class="story-board-cell">přerušení + vyčistit</span>
        <span class="story-board-cell">potřeba logiky zamítnutí</span>
        <span class="story-board-cell"></span>
      </div>
      <div class="story-board-row">
        <strong>V/V + HW</strong>
        <span class="story-board-cell">zpracování chyb osy</span>
        <span class="story-board-cell">potřeba sim zařízení</span>
        <span class="story-board-cell"></span>
      </div>
    </div>
    <div class="story-board-footer">
      <mdi-clock-outline aria-hidden="true" />
      <span><strong>DEN INTEGRACE</strong></span>
      <span>Žádná kompletní funkce k testování</span>
    </div>
  </section>
  <section class="story-vertical">
    <div class="story-lane-header">
      <span class="story-lane-label">AGENT + TDD</span>
      <h2>FEATURE LANES</h2>
      <mdi-layers-outline aria-hidden="true" class="story-lane-icon" />
    </div>
    <p>Udržovat jedno chování v kontextu. Překročit každou hranici, pak to ověřit.</p>
    <div class="story-board-table" aria-label="Vertical slicing: feature lanes with work-in-progress columns">
      <div class="story-board-header">
        <span></span><b>BACKLOG</b><b>ROZPRACOVANÉ</b><b>OVĚŘENO</b>
      </div>
      <div class="story-board-row">
        <strong>DETEKCE CHYBY</strong>
        <span class="story-board-cell">přerušení viditelné</span>
        <span class="story-board-cell">HMI + stav + osa</span>
        <span class="story-board-cell">počet platný</span>
      </div>
      <div class="story-board-row" v-click="1">
        <strong>VYMAZAT PŘÍKAZ</strong>
        <span class="story-board-cell">nekryté zůstávání</span>
        <span class="story-board-cell">logika zamítnutí + bezpečnost</span>
        <span class="story-board-cell">přepravník prázdný</span>
      </div>
      <div class="story-board-row" v-click="1">
        <strong>OBNOVIT DÁVKU</strong>
        <span class="story-board-cell">restart počtu dávky</span>
        <span class="story-board-cell">reset + sekvence</span>
        <span class="story-board-cell">pokračuje ze zastavení</span>
      </div>
      <div class="story-board-row" v-click="1">
        <strong>OVĚŘIT 100 DÁVKU</strong>
        <span class="story-board-cell">žádný důkaz</span>
        <span class="story-board-cell">sim spuštění + log</span>
        <span class="story-board-cell">100 lahví hotovo</span>
      </div>
    </div>
    <div class="story-board-footer" v-click="1">
      <mdi-beaker-outline aria-hidden="true" />
      <span><strong>SAME BOARD NEW UNIT</strong></span>
      <span>A working feature at every step</span>
    </div>
  </section>
</div>
<div class="story-board" v-click="2" aria-label="Ilustrační Kanban stejných ticketů">
  <section><b>OVĚŘENO</b><span><strong>T1</strong> Porucha a počet</span></section>
  <section><b>ROZPRACOVÁNO</b><span><strong>T2</strong> Vyřadit lahve</span></section>
  <section><b>ČEKÁ NA T2</b><span><strong>T3</strong> Obnovit dávku</span></section>
</div>
<div class="story-slicing-result" v-click="2" aria-label="Ilustrační zpětná vazba pro AI při vertikálním řezu">
  <strong><mdi-robot-outline aria-hidden="true" /> Pro AI: jeden ověřitelný výsledek</strong>
  <div class="story-ai-feedback"><span>Menší kontext</span><mdi-arrow-right aria-hidden="true" /><span>Akceptační test</span><mdi-arrow-right aria-hidden="true" /><span>Cílená oprava</span></div>
</div>

<!--
## Horizontální slicing — první přístup, často nevhodný

Vlevo je horizontal slicing. Ticket T-HMI pokrývá jednu vrstvu (HMI) napříč všemi chováními: porucha, vyřazení, obnova. Týmy si to často vybírají, protože odpovídá tomu, jak vývojáři přirozeně rozdělují práci — podle disciplín, dovedností a vlastnictví kódu. Problém: hotové HMI samo neprokazuje funkci. Funkce žije až po integraci všech vrstev. Každá vrstva se testuje zvlášť; celek ověříme později. Cena za integraci je vysoká — dlouhý feedback cyklus, opravné smyčky na konci.

## Vertikální slicing — měníme směr, zachováme stack

[click]
Vpravo je vertical slicing. Architektonický stack zůstává stejný; měníme směr řezu. Ticket T1 je jedno pozorovatelné chování (porucha) napříč všemi vrstvami: HMI, řízení, simulací. Akceptační test ověří funkci na konci — vidět alarm a zachovat počet. Nemusíš měnit každou vrstvu v každém ticketu, jen ty potřebné. Zpětná vazba přichází okamžitě. Cena: řezání ticketů je intelektuálně náročnější a odhady jsou nejisté. Stejný princip má Pocock v TDD: jeden test (červeno), jedna implementace (zeleno), opakovat. Refaktoring (modrá fáze) patří do review, ne do smyčky.

## Proč vertical pro lidi?

Feedback a testovatelnost. Zákazník vidí hodnotu na konci jednoho ticketu, ne na konci projektu. Integrace není šok.

## Proč vertical pro agenty?

[click]
Vertical je standard pro lidi i agenty. Agent má dvě omezení: krátkodobou paměť (kontext) a sklonění dělat příliš mnoho najednou. Malý ticket s konkrétní podmínkou dokončení a testem ho udržuje na jedné linii. Akceptační test mu řekne, co konkrétně opravit — vyhne se označení „hotovo bez testů". Každý slice jde delegovat subagentovi s čerstvým kontextem, bez zbytečného kontextu z jiných ticketů. Výhoda: menší kontext, izolované selhání, cílená zpětná vazba. Nevýhoda: závisí na opravdu malém rozsahu a dostupných akceptačních testech — není to magické řešení na ušetření tokenů. V Kanbanu T1, T2, T3 zůstávají stejné. T3 čeká na T2; vertikální řez neruší závislosti ani integrační testy.

## Výjimka: horizontal jako kontrakt

Horizontální řezy znovu mají smysl jako první ticket, když musíš definovat rozhraní (API, schema) pro paralelní práci. Předem dohodnutý kontrakt snižuje konflikty v kódu — 57 % konfliktů v jednom datasetu tvoří úpravy stejného místa v souboru.
-->

---
layout: default
class: ot-slide implementation-slide dark-slide topic-orchestrace-dansko
clicks: 2
---

<script setup>
import './orchestrace-dansko/styles.css'
</script>

# Jeden ticket.<br><span class="accent">Krátká implementační smyčka.</span>

<div class="workflow-progress" aria-label="Fáze workflow"><span>01 Specifikace</span><span class="workflow-progress-separator">→</span><span class="is-current">02 Implementace</span><span class="workflow-progress-separator">→</span><span>03 Ověření</span></div>

<div class="agent-lanes" role="group" aria-label="Ilustrační workflow ticketu T1: plán, implementace, review, test a integrace s návraty k opravě">
  <div class="agent-lanes-head"><strong>T1 · PORUCHA</strong><span>Plán</span><span>Implementace</span><span>Review</span><span>Test</span><span>Integrace</span></div>
  <svg class="agent-lanes-links" viewBox="0 0 1000 240" preserveAspectRatio="none" aria-hidden="true">
    <path class="lane-forward" d="M100 24 H300 V72" />
    <path class="lane-forward" v-click="1" d="M300 72 H500 V120 H700 V168" />
    <path class="lane-return" data-return="review" v-click="1" d="M500 132 V144 H300 V88 M292 98 L300 88 L308 98" />
    <path class="lane-return" data-return="test" v-click="1" d="M700 180 V192 H300 V88" />
    <path class="lane-forward is-pass" v-click="2" d="M700 168 H900 V216" />
  </svg>
  <div class="agent-lane"><strong class="agent-lane-role"><mdi-robot-outline aria-hidden="true" />Orchestrátor</strong><div class="agent-lane-node lane-plan"><mdi-robot-outline aria-hidden="true" /><span>Schválený T1</span></div></div>
  <div class="agent-lane"><strong class="agent-lane-role"><mdi-robot-outline aria-hidden="true" />Implementátor</strong><div class="agent-lane-node lane-implement"><mdi-robot-outline aria-hidden="true" /><span>Malá změna</span></div></div>
  <div class="agent-lane"><strong class="agent-lane-role"><mdi-robot-outline aria-hidden="true" />Reviewer</strong><div class="agent-lane-node lane-review" v-click="1"><mdi-robot-outline aria-hidden="true" /><span>Kontrola diffu</span></div><span class="lane-retry-label retry-review" v-click="1">Nález → opravit</span></div>
  <div class="agent-lane"><strong class="agent-lane-role"><mdi-robot-outline aria-hidden="true" />Tester</strong><div class="agent-lane-node lane-test" v-click="1"><mdi-robot-outline aria-hidden="true" /><span :class="{ 'is-pass': $clicks >= 2 }">{{ $clicks >= 2 ? 'PASS · 42' : 'FAIL · 0' }}</span></div><span class="lane-retry-label retry-test" v-click="1">FAIL → opravit</span></div>
  <div class="agent-lane"><strong class="agent-lane-role"><mdi-source-merge aria-hidden="true" />Integrátor</strong><div class="agent-lane-node lane-merge" v-click="2"><mdi-source-merge aria-hidden="true" /><span>Důkazy k PR</span></div></div>
</div>
<div class="story-implementation-outcome" v-click="2">
  <p><mdi-check-circle-outline /><span><strong>PASS → integrace → důkazy pro člověka</strong></span></p>
  <p class="story-human-gate"><mdi-account-alert-outline /><span><strong>Nejasnost · riziko · opakované selhání → člověk</strong></span></p>
</div>

<!--
Druhé workflow začíná až připraveným ticketem. Graf je ilustrační: řádky rozlišují role agentů, sloupce kroky práce. Orchestrátor ověří závislosti T1 a přidělí práci. Implementační subagent dělá nejmenší změnu v dohodnutém rozsahu: porucha osy nesmí vynulovat vyrobený počet.

[click]
Fialová spojnice předává práci review a testovacímu subagentovi. Review ověřuje změnu a její rozsah; test dokládá chování. Oranžové přerušované větve ukazují dva možné návraty k implementátorovi: nález v review nebo selhání testu. Neznamenají, že obě chyby musí nastat. Ilustrační první test ukazuje počet nula. Úspěšný build sám nepotvrzuje zachování počtu při poruše.

[click]
Neúspěšná kontrola vrací práci k implementaci; po opravě test projde a počet zůstává 42. Úspěšné kontroly dovolí integraci do pracovní větve a předání důkazů. Nejasný záměr, riziková operace nebo opakované selhání vyžadují člověka. Paralelně pracují jen nezávislé úkoly; samotné rozdělení mezi agenty závislosti T1 → T2 → T3 nemaže.
-->

---
layout: default
class: ot-slide evaluation-slide dark-slide topic-orchestrace-dansko
clicks: 2
---

<script setup>
import './orchestrace-dansko/styles.css'
</script>

# Agent dodá důkazy.<br><span class="accent">Člověk posoudí výsledek.</span>

<div class="workflow-progress" aria-label="Fáze workflow"><span>01 Specifikace</span><span class="workflow-progress-separator">→</span><span>02 Implementace</span><span class="workflow-progress-separator">→</span><span class="is-current">03 Ověření</span></div>

<div class="story-evaluation-layout">
<div class="story-evaluation">
  <section class="is-agent"><span class="story-evaluation-index"><mdi-robot-outline aria-hidden="true" />AGENT</span><div><h2>Důkazy k posouzení</h2><p>Diff · testy · logy · rizika</p></div></section>
  <section v-click="1"><span class="story-evaluation-index"><mdi-target aria-hidden="true" />ZÁMĚR</span><div><h2>Stejná dávka, správný počet</h2><p>Porucha → vyřazení → obnova · 42 → 43</p></div></section>
  <section v-click="2"><span class="story-evaluation-index"><mdi-account-check-outline aria-hidden="true" />ČLOVĚK</span><div><h2>Rozhodnutí</h2><div class="story-decisions" aria-label="Ilustrační výstupy lidského rozhodnutí"><span><mdi-check-circle-outline aria-hidden="true" />Schválit PR</span><span><mdi-arrow-u-left-top aria-hidden="true" />Opravit</span><span><mdi-comment-question-outline aria-hidden="true" />Upřesnit</span></div></div></section>
</div>
<aside class="story-pr" aria-label="Ilustrační pull request čekající na lidské schválení">
  <div class="story-pr-head"><mdi-source-pull aria-hidden="true" /><span>PULL REQUEST</span></div>
  <p class="story-pr-branch">feature/obnova-davky → main</p>
  <p><mdi-check-circle-outline aria-hidden="true" /><span>Akceptační testy T1–T3: PASS</span></p>
  <p><mdi-check-circle-outline aria-hidden="true" /><span>Review subagenta: bez nálezů</span></p>
  <p><mdi-file-document-outline aria-hidden="true" /><span>Diff, logy a rizika přiloženy</span></p>
  <p class="is-required" :class="{ 'is-current': $clicks >= 2 }"><mdi-account-check-outline aria-hidden="true" /><span>Schválení člověkem: povinné</span></p>
</aside>
</div>
<div class="story-rule"><mdi-account-check-outline /><p><strong>Schválení PR ≠ povolení k nasazení.</strong></p></div>

<!--
Třetí workflow začíná výsledkovým balíčkem od agenta: pull request se změnou, testy, nálezy a riziky. Zelený build není důkaz, že funkce odpovídá původnímu požadavku. PR je ilustrační.

[click]
Vraťme se k původnímu záměru: obsluha vidí poruchu, systém vyřadí neuzavřené lahve a po splnění podmínek obnovy pokračuje stejná dávka.

[click]
Člověk porovná důkazy s cílem a zvolí další krok: schválit PR, vrátit implementaci, nebo upřesnit zadání. Tři výstupy v diagramu jsou ilustrační: oprava se vrací do implementace, upřesnění do specifikace. Bez jeho schválení se PR nesloučí. Schválení PR není povolení k nasazení ani bezpečnostní validace stroje.
-->

---
layout: default
class: ot-slide hmi-testing-slide dark-slide topic-orchestrace-dansko
clicks: 4
---

<script setup>
import './orchestrace-dansko/styles.css'
</script>

<div class="status-badge demonstrator">OVĚŘENÍ · T1–T3</div>
<div class="kicker">OVĚŘENÍ · POHLED OBSLUHY</div>

# Ověřte obnovu dávky<br><span class="accent">tak, jak ji vidí obsluha.</span>

<div class="workflow-progress" aria-label="Fáze workflow"><span>01 Specifikace</span><span class="workflow-progress-separator">→</span><span>02 Implementace</span><span class="workflow-progress-separator">→</span><span class="is-current">03 Ověření</span></div>
<p class="hmi-testing-subtitle">Jeden scénář propojí alarm HMI, chování řízení i výsledek pro stejnou dávku.</p>

<div class="hmi-testing-flow" aria-label="Ověření poruchy osy, vyřazení lahví a obnovy stejné dávky">
  <article class="hmi-testing-card is-user"><div class="hmi-testing-card-head"><span>01</span><mdi-account-outline /></div><div><small>OPERÁTOR</small><strong>Potvrdí alarm osy</strong></div></article>
  <div class="hmi-testing-arrow" aria-hidden="true" v-click="1"><mdi-arrow-right /></div>
  <article class="hmi-testing-card is-hmi" v-click="1"><div class="hmi-testing-card-head"><span>02</span><mdi-monitor-dashboard /></div><div><small>HMI</small><strong>Alarm viditelný · počet 42</strong></div></article>
  <div class="hmi-testing-arrow" aria-hidden="true" v-click="2"><mdi-arrow-right /></div>
  <article class="hmi-testing-card is-plc" v-click="2"><div class="hmi-testing-card-head"><span>03</span><mdi-cog-outline /></div><div><small>ŘÍZENÍ</small><strong>Vyřadí neuzavřené lahve</strong></div></article>
  <div class="hmi-testing-arrow" aria-hidden="true" v-click="3"><mdi-arrow-right /></div>
  <article class="hmi-testing-card is-result" v-click="3"><div class="hmi-testing-card-head"><span>04</span><mdi-check-circle-outline /></div><div><small>VÝSLEDEK</small><strong>Stejná dávka · 42 → 43</strong></div></article>
</div>

<div class="hmi-testing-takeaway" v-click="4"><mdi-account-check-outline /><strong>Automatický test doloží scénář. Člověk posoudí indikaci, podmínky obnovy i zbývající riziko.</strong></div>

<!--
Ověření doplníme pohledem obsluhy. Nejde o živé HMI ani simulaci připojeného stroje; ověřovací scénář je ilustrace.

[click]
Obsluha potvrdí alarm. Test ověří, že HMI zobrazuje poruchu a stejný vyrobený počet 42.

[click]
Řízení vyřadí příklad dvou neuzavřených lahví. Konkrétní povolení obnovy musí odpovídat návrhu stroje a jeho bezpečnostním pravidlům.

[click]
Po obnově stejné dávky přejde počet 42 na 43. Test dodává důkaz, nikoli lidské schválení.

[click]
Člověk posoudí stav HMI, správnost požadovaného chování a zbývající rizika. Automatický test nenahrazuje bezpečnostní validaci ani oprávnění k nasazení.
npm run test:hmi
-->

---
layout: default
class: ot-slide devops-mountain-slide dark-slide topic-orchestrace-dansko
---

<script setup>
import './orchestrace-dansko/styles.css'
</script>

<div class="kicker">PRAKTICKÝ START · POSTUPNÁ AUTOMATIZACE</div>

# Jeden krok<br><span class="accent">k ověřitelné automatizaci.</span>

<p class="mountain-subtitle">Git → AS CLI → test → důkazy → pipeline</p>

<section class="mountain-stage" aria-label="DevOps journey from today's workflow to full CI/CD">
  <div class="mountain-visual">
    <div class="mountain-distant" aria-hidden="true"></div><div class="mountain-main" aria-hidden="true"></div><div class="mountain-facet" aria-hidden="true"></div><div class="mountain-grid" aria-hidden="true"></div><div class="mountain-trail" aria-hidden="true"></div>
    <div class="mountain-origin"><mdi-account-hard-hat-outline /><strong>DNEŠEK</strong><small>Současný postup</small></div>
    <article class="mountain-checkpoint checkpoint-git"><span class="mountain-checkpoint-marker">01</span><div class="mountain-checkpoint-label"><strong>GIT</strong><small>Verzovaný projekt</small></div></article>
    <article class="mountain-checkpoint checkpoint-build"><span class="mountain-checkpoint-marker">02</span><div class="mountain-checkpoint-label"><strong>AS CLI</strong><small>Opakovatelný build</small></div></article>
    <article class="mountain-checkpoint checkpoint-test"><span class="mountain-checkpoint-marker">03</span><div class="mountain-checkpoint-label"><strong>TEST</strong><small>Jeden akceptační scénář</small></div></article>
    <article class="mountain-checkpoint checkpoint-evidence"><span class="mountain-checkpoint-marker">04</span><div class="mountain-checkpoint-label"><strong>VÝSTUP</strong><small>Artefakt a dohledatelnost</small></div></article>
    <article class="mountain-checkpoint checkpoint-release"><span class="mountain-checkpoint-marker">05</span><div class="mountain-checkpoint-label"><strong>CI</strong><small>Automatizované kroky</small></div></article>
    <div class="mountain-summit"><span class="mountain-flag-pole" aria-hidden="true"></span><span class="mountain-flag-pennant" aria-hidden="true"></span><div class="mountain-summit-copy"><strong>CI/CD</strong><em>Opakovatelné dodání</em></div></div>
  </div>
  <aside class="mountain-statement"><span class="mountain-statement-label">DŮLEŽITÝ JE POKROK</span><strong>Nezačínejte<br>na vrcholu.</strong><b>Vyberte další krok.</b></aside>
</section>

<div class="mountain-footer"><span>AS CLI dává agentovi i CI opakovatelnou cestu k sestavení projektu.</span><b>Skills a projektový kontext omezují hledání a opravy. Úsporu času i tokenů ověřte měřením na vlastní úloze.</b></div>

<!--
Cílem není vybudovat kompletní CI/CD přes noc. Začněte verzováním projektu, potom přidejte opakovatelný build přes podporované AS CLI, jeden test, dohledatelné výstupy a další automatizační krok.

AS CLI je rozhraní k sestavení, ne náhrada DevOps, testování ani doménových znalostí. Agent se znalostí projektu a postupu může méně hledat a méně opravovat; spotřeba tokenů i rychlost ale závisejí na úloze a je třeba je změřit.
-->
