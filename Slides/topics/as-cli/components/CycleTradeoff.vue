<script setup lang="ts">
import { computed, ref } from 'vue'

const FLEXIBLE_TIME_UNITS = 62
const BASE_GOVERN_UNITS = 9
const MAX_GOVERN_UNITS = FLEXIBLE_TIME_UNITS - BASE_GOVERN_UNITS
const FIXED_STAGE_UNITS = 49

const qualityInvestment = ref(0)
const governUnits = computed(() => 9 + (qualityInvestment.value / 100) * 44)
const reclaimedUnits = computed(() => FLEXIBLE_TIME_UNITS - governUnits.value)
const qualityLabel = computed(() => `${Math.round(qualityInvestment.value)}% quality investment`)
const isDragging = ref(false)
const trackStyle = computed<Record<string, string>>(() => ({
  '--govern-time': `${governUnits.value}fr`,
  '--reclaimed-time': `${reclaimedUnits.value}fr`,
}))

function setInvestmentFromPointer(clientX: number, track: HTMLElement) {
  const trackRect = track.getBoundingClientRect()
  const columnGap = Number.parseFloat(getComputedStyle(track).columnGap) || 0
  const unitWidth = (trackRect.width - columnGap * 7) / (FIXED_STAGE_UNITS + FLEXIBLE_TIME_UNITS)
  if (unitWidth <= 0) return

  const flexibleStart = trackRect.left + columnGap * 6 + FIXED_STAGE_UNITS * unitWidth
  const governUnitsAtPointer = (clientX - flexibleStart) / unitWidth
  const boundedGovernUnits = Math.min(MAX_GOVERN_UNITS, Math.max(BASE_GOVERN_UNITS, governUnitsAtPointer))
  qualityInvestment.value = ((boundedGovernUnits - BASE_GOVERN_UNITS) / (MAX_GOVERN_UNITS - BASE_GOVERN_UNITS)) * 100
}

function startDragging(event: PointerEvent) {
  const handle = event.currentTarget as HTMLElement
  const track = handle.closest('.track-after')
  if (!track) return

  event.preventDefault()
  handle.setPointerCapture(event.pointerId)
  isDragging.value = true
  setInvestmentFromPointer(event.clientX, track)
}

function drag(event: PointerEvent) {
  if (!isDragging.value) return
  const handle = event.currentTarget as HTMLElement
  const track = handle.closest('.track-after')
  if (track) setInvestmentFromPointer(event.clientX, track)
}

function stopDragging(event: PointerEvent) {
  isDragging.value = false
  const handle = event.currentTarget as HTMLElement
  if (handle.hasPointerCapture(event.pointerId)) handle.releasePointerCapture(event.pointerId)
}

function nudgeInvestment(event: KeyboardEvent) {
  if (event.key === 'Home') qualityInvestment.value = 0
  if (event.key === 'End') qualityInvestment.value = 100
  if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') qualityInvestment.value = Math.max(0, qualityInvestment.value - 5)
  if (event.key === 'ArrowRight' || event.key === 'ArrowUp') qualityInvestment.value = Math.min(100, qualityInvestment.value + 5)
}
</script>

<template>
  <div class="cycle-block cycle-tradeoff">
    <p class="cycle-head"><b>DevOps after AI</b> — build runs at agent speed</p>
    <div class="cycle-track track-after" :style="trackStyle">
      <span>Plan</span>
      <span>Design</span>
      <span class="hot"></span>
      <span>Test</span>
      <span>Deploy</span>
      <span>Maintain</span>
      <span
        class="own"
        :class="{ 'is-dragging': isDragging }"
        role="slider"
        tabindex="0"
        aria-label="Time spent improving the system"
        aria-valuemin="0"
        aria-valuemax="100"
        :aria-valuenow="Math.round(qualityInvestment)"
        :aria-valuetext="qualityLabel"
        @pointerdown="startDragging"
        @pointermove="drag"
        @pointerup="stopDragging"
        @pointercancel="stopDragging"
        @keydown.prevent="nudgeInvestment"
      >
        Improve
        <i class="cycle-divider" aria-hidden="true"></i>
      </span>
      <em>reclaimed</em>
    </div>

    <div class="cycle-track track-after cycle-legend">
      <small style="grid-column: 1 / 3">requirements</small>
      <small style="grid-column: 4">review</small>
      <small style="grid-column: 5">release</small>
      <small style="grid-column: 7">improve</small>
      <small style="grid-column: 8">trade for quality</small>
    </div>
  </div>
</template>

<style scoped>
:where(:deep()).cycle-block { margin-top: 62px; }

:where(:deep()).cycle-head {
  margin: 0 0 12px;
  color: var(--muted);
  font-size: 14px;
}

:where(:deep()).cycle-head b { color: var(--white); }

:where(:deep()).cycle-track { display: grid; gap: 8px; }
:where(:deep()).track-after { grid-template-columns: 13fr 13fr 2fr 6fr 8fr 7fr var(--govern-time, 9fr) var(--reclaimed-time, 53fr); }

:where(:deep()).cycle-track span {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  height: 54px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.06);
  font-size: 14px;
  white-space: nowrap;
}

:where(:deep()).cycle-track span.hot {
  border-color: var(--br-orange);
  background: var(--br-orange);
  font-weight: 500;
}

:where(:deep()).cycle-track span.bad {
  padding-right: 22px;
  border: none;
  background: linear-gradient(90deg, var(--danger) 45%, rgba(214, 64, 50, 0.45));
  font-weight: 500;
  clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%);
}

:where(:deep()).cycle-track span.own {
  position: relative;
  border-color: var(--br-orange);
  background: rgba(255, 122, 0, 0.14);
  cursor: ew-resize;
  font-weight: 500;
  touch-action: none;
}

:where(:deep()).cycle-track span.own.is-dragging {
  background: rgba(255, 122, 0, 0.3);
}

:where(:deep()).cycle-track span.own:focus-visible {
  outline: 2px solid var(--white);
  outline-offset: 3px;
  z-index: 2;
}

:where(:deep()).cycle-divider {
  position: absolute;
  top: -1px;
  right: -1px;
  width: 14px;
  height: 54px;
  border-left: 2px solid var(--br-orange);
  background: repeating-linear-gradient(0deg, transparent 0 7px, rgba(255, 122, 0, 0.55) 7px 8px);
  pointer-events: none;
}

:where(:deep()).cycle-track em {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  border: 1px dashed rgba(255, 255, 255, 0.25);
  color: #8b9399;
  font: 500 12px/1 'IBM Plex Mono', monospace;
  font-style: normal;
  letter-spacing: 0.04em;
}

:where(:deep()).cycle-legend { margin-top: 12px; }

:where(:deep()).cycle-legend small {
  color: #7d858b;
  text-align: center;
  font: 500 11px/1 'IBM Plex Mono', monospace;
}
</style>