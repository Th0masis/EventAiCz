<script setup lang="ts">
import { computed, ref, useId, watch } from 'vue'
import { useSlideContext } from '@slidev/client'

type Detail = 'query' | 'agent' | 'mcp' | 'hub' | 'answer'
const { $clicks } = useSlideContext()
const id = useId()
const flow = ref<HTMLElement | null>(null)
const active = ref<Detail | null>(null)
const pinned = ref(false)
const returning = computed(() => $clicks.value >= 5)
const steps = computed(() => returning.value
  ? [
      { detail: 'answer' as const, label: 'Odpověď', description: 'posoudí člověk' },
      { detail: 'agent' as const, label: 'Agent', description: 'vyhodnotí podklady a sestaví odpověď' },
      { detail: 'mcp' as const, label: 'MCP', description: 'vrátí výsledek volání' },
      { detail: 'hub' as const, label: 'Pasáže + zdroje', description: 'výsledek vyhledávání' },
    ]
  : [
      { detail: 'query' as const, label: 'Dotaz', description: 'otázka uživatele' },
      { detail: 'agent' as const, label: 'Agent', description: 'vyloží dotaz a připraví hledání' },
      { detail: 'mcp' as const, label: 'MCP', description: 'předá volání nástroje' },
      { detail: 'hub' as const, label: 'Knowledge Hub', description: 'vyhledá podklady (RAG)' },
    ])
const titles: Record<Detail, string> = {
  query: 'Dotaz uživatele',
  agent: 'Agent: od otázky k podkladům',
  mcp: 'MCP: skutečné argumenty volání',
  hub: 'Knowledge Hub: vyhledání pasáží, ne hotové odpovědi',
  answer: 'Odpověď agenta: návrh, který vyžaduje ověření',
}
const searchQuery = 'X20 PLC starts in SERVICE after transfer to project causes possible reasons'
const payload = JSON.stringify({
  query: searchQuery,
  top_k: 5,
  include_images: false,
}, null, 2)

function close() {
  active.value = null
  pinned.value = false
}

function dismiss() {
  flow.value?.querySelector<HTMLButtonElement>(`[data-detail="${active.value}"]`)?.focus()
  close()
}

function preview(detail: Detail) {
  if (!pinned.value) active.value = detail
}

function toggle(detail: Detail) {
  if (active.value === detail && pinned.value) close()
  else {
    active.value = detail
    pinned.value = true
  }
}

function leave(event: FocusEvent) {
  if (event.currentTarget instanceof HTMLElement &&
    (!(event.relatedTarget instanceof Node) || !event.currentTarget.contains(event.relatedTarget))) close()
}

watch($clicks, close)
</script>

<template>
  <div
    ref="flow"
    class="bridge-knowledge-flow"
    aria-label="Cesta dotazu a návrat podkladů"
    @mouseleave="!pinned && close()"
    @focusout="leave"
    @keydown.esc.stop.prevent="dismiss"
    @keydown.left.stop
    @keydown.right.stop
    @click.stop
  >
    <div class="bridge-knowledge-path-label">
      {{ returning ? 'Návrat podkladů k agentovi' : 'Dotaz / vyhledání' }}
    </div>
    <div class="bridge-knowledge-path" :class="{ 'bridge-knowledge-return': returning }">
      <div v-for="(step, index) in steps" :key="`${returning}-${step.detail}`" class="bridge-knowledge-node">
        <button
          v-show="$clicks >= (returning ? 5 : index + 1)"
          :id="`${id}-${step.detail}`"
          type="button"
          class="bridge-knowledge-step"
          :class="{ 'is-active': active === step.detail, 'is-current': !active && !returning && $clicks === index + 1 }"
          :data-detail="step.detail"
          :aria-expanded="active === step.detail"
          :aria-controls="`${id}-detail`"
          @mouseenter="preview(step.detail)"
          @focus="preview(step.detail)"
          @click="toggle(step.detail)"
        >
          <div class="bridge-knowledge-step-heading">
            <span class="bridge-knowledge-step-icon" aria-hidden="true">
              <mdi-account-question-outline v-if="step.detail === 'query'" />
              <mdi-account-check-outline v-else-if="step.detail === 'answer'" />
              <mdi-robot-outline v-else-if="step.detail === 'agent'" />
              <mdi-connection v-else-if="step.detail === 'mcp'" />
              <mdi-file-document-multiple-outline v-else-if="returning" />
              <mdi-database-search-outline v-else />
            </span>
            <strong>{{ step.label }}</strong>
          </div>
          <span>{{ step.description }}</span>
        </button>
        <svg v-if="index < 3" v-show="$clicks >= (returning ? 5 : index + 1)" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 12h16m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" />
        </svg>
      </div>
    </div>
    <div v-if="!active && $clicks >= 1" class="bridge-knowledge-context">
      <template v-if="returning">
        <h2>Od podkladů k odpovědi</h2>
        <p>RAG dodává podklady; výslednou odpověď vytváří agent.</p>
        <p class="bridge-knowledge-caveat">Podklady vstupují do kontextu, ne natrvalo do modelu.</p>
      </template>
      <template v-else>
        <h2>Dotaz ze sdílené ukázky</h2>
        <p>„Proč X20 PLC přejde po nahrání projektu do SERVICE?“</p>
        <p class="bridge-knowledge-caveat">Cílem je dohledat podklady pro diagnostiku, nikoli měnit stav PLC.</p>
      </template>
    </div>
    <section v-if="active" :id="`${id}-detail`" class="bridge-knowledge-popup" role="region" :aria-labelledby="`${id}-title`">
      <header>
        <h2 :id="`${id}-title`">{{ titles[active] }}</h2>
        <button type="button" aria-label="Zavřít detail" @click="dismiss">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2" /></svg>
        </button>
      </header>
      <div class="bridge-knowledge-popup-body">
        <template v-if="active === 'query'">
          <p class="bridge-knowledge-question">„Proč X20 PLC přejde po nahrání projektu do SERVICE?“</p>
          <p>Dotaz ze sdílené ukázky. Cílem je dohledat podklady pro diagnostiku, nikoli měnit stav PLC.</p>
        </template>
        <div v-else-if="active === 'agent'" class="bridge-knowledge-columns">
          <div>
            <h3>{{ returning ? 'Vrácené podklady' : 'Otázka uživatele' }}</h3>
            <p v-if="returning">Textové pasáže s odkazy. Agent posoudí relevanci, verzi a návaznost na projekt.</p>
            <p v-else class="bridge-knowledge-question">„Proč X20 PLC přejde po nahrání projektu do SERVICE?“</p>
          </div>
          <div>
            <h3>{{ returning ? 'Odpověď pro člověka' : 'Vyhledávací dotaz' }}</h3>
            <p v-if="returning">Oddělit doložená tvrzení od hypotéz a sestavit odpověď se zdroji.</p>
            <template v-else><p><code>{{ searchQuery }}</code></p><p>Nejvýše 5 výsledků, bez obrázků.</p></template>
            <p class="bridge-knowledge-caveat">Vysvětlení role agenta, ne záznam jeho interního uvažování.</p>
          </div>
        </div>
        <div v-else-if="active === 'mcp'" class="bridge-knowledge-columns">
          <div>
            <h3>Volání nástroje</h3>
            <p><code>bnr_knowledge_base_rag</code></p>
            <p>MCP předá argumenty službě a vrátí výsledek agentovi.</p>
            <p class="bridge-knowledge-caveat">Argumenty z dodaného snímku. Nejde o živé volání ani řízení PLC.</p>
          </div>
          <pre aria-label="Argumenty MCP volání"><code>{{ payload }}</code></pre>
        </div>
        <template v-else-if="active === 'hub'">
          <ul class="bridge-knowledge-results">
            <li><a href="https://help.br-automation.com/#/en/4/programming/build_rebuildactiveconfiguration.html" target="_blank" rel="noopener noreferrer">Source 2 · Rebuilding the active configuration</a><span>„the PLC should be switched to HALT mode before transferring the project“</span><span class="bridge-knowledge-caveat">Relevantní k transferu sdílených globálních proměnných mezi tasky.</span></li>
            <li><a href="https://help.br-automation.com/#/en/6/motion/mapp_motion/statusnummern/event-ids/axdrivenotreadyforpoweronanymore.html" target="_blank" rel="noopener noreferrer">Source 1 · The axis isn't ready for power on anymore</a><span>Chyba osy / ErrorStop.</span><span class="bridge-knowledge-caveat">Sama nedokládá příčinu SERVICE na CPU.</span></li>
            <li><a href="https://help.br-automation.com/#/de/4/hardware/x20if10e3-1/firmware_fur_x20_module.html" target="_blank" rel="noopener noreferrer">Source 3 · Firmware</a><span>Výřez výsledku je zkrácený.</span><span class="bridge-knowledge-caveat">Nelze z něj ověřit tvrzení o firmware CPU.</span></li>
          </ul>
          <p class="bridge-knowledge-caveat">Dodané výsledky: text_chunk. Algoritmus ani úplný výstup zde neznáme.</p>
        </template>
        <template v-else>
          <p>Ve sdílené odpovědi agent uvádí šest skupin možných příčin: hardware/firmware, transfer, start systému, režim přenosu, runtime a komunikaci.</p>
          <p><strong>Nejde o potvrzenou diagnózu.</strong> Dodaný výřez podkladů nedokládá celý seznam. U části tvrzení chybí konkrétní citace a návaznost na daný projekt.</p>
          <p>Člověk musí ověřit zdroje a diagnostické důkazy. RAG dodává podklady; výslednou odpověď vytváří agent.</p>
        </template>
      </div>
    </section>
  </div>
</template>
