<script setup lang="ts">
const iframeSource = (() => {
  if (!import.meta.env.DEV) return ''
  if (typeof window === 'undefined') return ''

  const currentPort = Number(window.location.port || (window.location.protocol === 'https:' ? 443 : 80))
  return `${window.location.protocol}//${window.location.hostname}:${currentPort + 1}/`
})()
</script>

<template>
  <div class="skills-embed-frame" aria-label="Embedded skills.sh open agent skills ecosystem">
    <div class="skills-embed-chrome">
      <div class="skills-embed-dots"><i></i><i></i><i></i></div>
      <span>skills.sh · open agent skills ecosystem</span>
      <a href="https://www.skills.sh/" target="_blank" rel="noreferrer">OPEN ↗</a>
    </div>
    <iframe
      v-if="iframeSource"
      :src="iframeSource"
      title="skills.sh open agent skills ecosystem"
      loading="eager"
      referrerpolicy="strict-origin-when-cross-origin"
    ></iframe>
    <div v-else class="skills-embed-fallback">
      <div class="skills-embed-fallback-mark">SKILLS<span>.SH</span></div>
      <div class="skills-embed-fallback-copy">
        <strong>Open agent skills ecosystem</strong>
        <span>Browse reusable skills for coding, research, testing, and automation workflows.</span>
      </div>
      <div class="skills-embed-fallback-tags">
        <span>engineering</span><span>automation</span><span>testing</span><span>devops</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
:where(:deep()).skills-embed-frame { position: absolute !important; top: 138px; right: 70px; bottom: 40px; left: 70px; display: grid; grid-template-rows: 30px minmax(0, 1fr); overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.24); background: var(--white); box-shadow: 0 20px 45px rgba(0, 0, 0, 0.28); }
:where(:deep()).skills-embed-chrome { display: flex; align-items: center; gap: 8px; min-width: 0; padding: 0 12px; color: #aeb6bb; background: #202326; font: 500 8px/1 'IBM Plex Mono', monospace; }
:where(:deep()).skills-embed-chrome > span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
:where(:deep()).skills-embed-chrome a { margin-left: auto; color: var(--br-orange); font: 600 7px/1 'IBM Plex Mono', monospace; text-decoration: none; white-space: nowrap; }
:where(:deep()).skills-embed-dots { display: flex; gap: 5px; flex: none; }
:where(:deep()).skills-embed-dots i { width: 7px; height: 7px; border-radius: 50%; background: #5e666b; }
:where(:deep()).skills-embed-dots i:first-child { background: var(--br-orange); }
:where(:deep()).skills-embed-frame iframe { grid-area: 2 / 1; display: block; width: 100%; height: 100%; min-height: 0; border: 0; background: var(--white); }
:where(:deep()).skills-embed-fallback { display: grid; grid-template-columns: minmax(0, 1fr) auto; grid-template-rows: 1fr auto; gap: 18px 32px; align-content: center; padding: 8% 12%; color: #f5f6f4; background: #242735; }
:where(:deep()).skills-embed-fallback-mark { color: var(--br-orange); font: 700 54px/0.9 'Barlow Condensed', sans-serif; letter-spacing: 0; }
:where(:deep()).skills-embed-fallback-mark span { color: #f5f6f4; }
:where(:deep()).skills-embed-fallback-copy { display: grid; align-content: center; gap: 8px; max-width: 360px; }
:where(:deep()).skills-embed-fallback-copy strong { font: 600 21px/1.1 'IBM Plex Sans', sans-serif; }
:where(:deep()).skills-embed-fallback-copy span { color: #b9c0c4; font: 400 11px/1.45 'IBM Plex Sans', sans-serif; }
:where(:deep()).skills-embed-fallback-tags { grid-column: 1 / -1; display: flex; flex-wrap: wrap; gap: 8px; }
:where(:deep()).skills-embed-fallback-tags span { padding: 6px 9px; border: 1px solid rgba(255, 122, 0, 0.65); color: #ffb06b; font: 500 9px/1 'IBM Plex Mono', monospace; text-transform: uppercase; }
</style>