<script setup lang="ts">
import { computed, ref, useId } from 'vue'

type StepId = 'request' | 'design' | 'convert' | 'validate'

const id = useId()
const workflow = ref<HTMLElement | null>(null)
const active = ref<StepId | null>(null)
const pinned = ref(false)
const steps: Array<{ id: StepId; label: string; summary: string; title: string; details: string[]; snippet?: string }> = [
  {
    id: 'request',
    label: 'Uživatel upřesní',
    summary: 'Cíl obrazovky, obsluhu, panel a hranice změny.',
    title: 'Co dodá a potvrdí uživatel',
    details: [
      '„Doplň do existujícího HMI číselné zobrazení teploty.“ Uživatel otevře správný projekt AS6 a určí panel.',
      'Předá ověřený zdroj, jednotku, formát a rozsah změny. Nejasné PLC rozhraní agent nejdřív potvrdí; logiku si nevymýšlí.',
    ],
  },
  {
    id: 'design',
    label: 'Společný návrh',
    summary: 'Agent vytvoří HTML kontrakt; uživatel jej zkontroluje.',
    title: 'Návrhový HTML kontrakt',
    details: [
      'Agent vytvoří prohlížitelný návrh s číselným výstupem, stabilním ID a jednosměrnou vazbou.',
      'Uživatel zkontroluje vzhled, jednotku i signál. Anotace je ilustrativní; skutečný zdroj musí potvrdit projekt.',
    ],
    snippet: '<span data-hmi-type="numberOutput" data-hmi-id="temperatureValue" data-hmi-bind="Temperature" data-hmi-bind-mode="oneWay">23,8 °C</span>',
  },
  {
    id: 'convert',
    label: 'Agent převede',
    summary: 'Schválený kontrakt promítne do projektu a spustí build.',
    title: 'Převod do existujícího mappView',
    details: [
      'Agent ověří proměnnou a strukturu AS6, schválený návrh promítne do obsahu i bindingu mappView.',
      'Spustí `as build`; nula chyb potvrzuje sestavení, ne zobrazení živé hodnoty. Nejasnosti předloží uživateli.',
    ],
  },
  {
    id: 'validate',
    label: 'Uživatel nasadí',
    summary: 'Agent s potvrzenou URL vrátí read-only nálezy.',
    title: 'Uživatelský handoff a runtime kontrola',
    details: [
      'Uživatel nasadí sestavení, předá runtime URL a potvrdí běžící verzi.',
      'Agent ověří zobrazení i rozvržení jen read-only, vrátí nálezy a nic nezapisuje do PLC ani nenasazuje.',
    ],
  },
]

const activeStep = computed(() => steps.find(step => step.id === active.value) ?? null)

function close() {
  active.value = null
  pinned.value = false
}

function dismiss() {
  if (active.value) {
    workflow.value?.querySelector<HTMLButtonElement>(`[data-detail="${active.value}"]`)?.focus()
  }
  close()
}

function preview(step: StepId) {
  if (!pinned.value) active.value = step
}

function toggle(step: StepId) {
  if (active.value === step && pinned.value) close()
  else {
    active.value = step
    pinned.value = true
  }
}

function leavePointer() {
  if (!pinned.value && !workflow.value?.contains(document.activeElement)) close()
}

function leaveFocus(event: FocusEvent) {
  const container = event.currentTarget
  if (container instanceof HTMLElement &&
    (!(event.relatedTarget instanceof Node) || !container.contains(event.relatedTarget))) close()
}
</script>

<template>
  <div
    ref="workflow"
    class="repo-hmi-workflow"
    aria-label="Interaktivní průchod návrhem HMI s agentem"
    @mouseleave="leavePointer"
    @focusout="leaveFocus"
    @keydown.esc.stop.prevent="dismiss"
    @click.stop
  >
    <div class="repo-hmi-path">
      <button
        v-for="(step, index) in steps"
        :key="step.id"
        :id="`${id}-${step.id}`"
        type="button"
        class="repo-hmi-step"
        :class="{ 'is-active': active === step.id }"
        :data-detail="step.id"
        :aria-expanded="active === step.id"
        :aria-controls="active === step.id ? `${id}-detail` : undefined"
        @mouseenter="preview(step.id)"
        @focus="preview(step.id)"
        @click="toggle(step.id)"
      >
        <span class="repo-hmi-step-number">{{ index + 1 }}</span>
        <strong>{{ step.label }}</strong>
        <span class="repo-hmi-step-summary">{{ step.summary }}</span>
      </button>
    </div>

    <div class="repo-hmi-detail-slot">
      <p v-if="!activeStep" class="repo-hmi-prompt">Najeďte na krok nebo ho zaměřte klávesnicí. Kliknutí detail připne.</p>
      <section
        v-else
        :id="`${id}-detail`"
        class="repo-hmi-popup"
        role="region"
        aria-live="polite"
        :aria-labelledby="`${id}-detail-title`"
      >
        <header>
          <h2 :id="`${id}-detail-title`">{{ activeStep.title }}</h2>
          <button type="button" class="repo-hmi-close" aria-label="Zavřít detail" @click="dismiss">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2" />
            </svg>
          </button>
        </header>
        <div class="repo-hmi-popup-body" :class="{ 'has-snippet': activeStep.snippet }">
          <div class="repo-hmi-detail-copy">
            <p v-for="detail in activeStep.details" :key="detail">{{ detail }}</p>
          </div>
          <pre v-if="activeStep.snippet" aria-label="Ilustrativní anotace HTML"><code>{{ activeStep.snippet }}</code></pre>
        </div>
      </section>
    </div>
  </div>
</template>
