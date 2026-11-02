# Katalog artefaktů

Ověřené vzory z `Slides/topics/orchestrace-dansko.md` (slidy 72–76) a `orchestrace-dansko/styles.css`. V jiném tématu zkopíruj CSS do `Slides/topics/<id>/styles.css` a nahraď prefix `.topic-orchestrace-dansko` za `.topic-<id>`. Ve stejném tématu znovu použij existující třídy a selektory seskup (jscpd hlídá bloky ≥ 8 řádků / 50 tokenů).

## Typografické role

Každý prvek s přímým textem musí mít roli z `docs/graphic-notes.md`. Nastavuj všechny čtyři proměnné:

```css
.topic-<id> .story-pr p > span {
  --text-role: compact;
  --text-size: var(--type-compact);
  --text-leading: 1.3;
  --text-font: var(--br-font);
}
```

| Použití v artefaktu | Role | Velikost / řádkování | Font |
|---|---|---|---|
| Hlavní věta dialogu | body | `--type-body` (18) / 1.35 | `var(--br-font)` |
| Varianty, položky PR, řádky karet | compact nebo caption | 14 / 1.3 | `var(--br-font)` |
| Kód, diff, výstup testu, název větve | code | `var(--type-note)` (12) / 1.35 | `'IBM Plex Mono', monospace` |
| Štítky (`PULL REQUEST`, `SUBAGENT · TEST`) | minor | `--type-minor` (10) / 1.2 | `'IBM Plex Mono', monospace` |
| Poznámka "ilustrační" | note | `--type-note` (12) / 1.35 | `var(--br-font)` |

Token `--type-code` neexistuje; pro kód použij `var(--type-note)`.

## Společný rám artefaktu

```css
.topic-<id> .story-diff,
.topic-<id> .story-testrun {
  display: grid;
  gap: 2px;
  margin-top: 10px;
  padding: 8px 12px;
  border: 1px solid #3c454a;
  background: #1c1f21;            /* tmavší = "obrazovka" (kód, test) */
}

.topic-<id> .story-dialog,
.topic-<id> .story-pr {
  border: 1px solid #3c454a;
  background: rgba(255, 255, 255, 0.035);  /* světlejší = "dokument" */
}
```

Zvýraznění aktivního stavu: změna `border-color` / `background` s `transition: … 220ms cubic-bezier(0.22, 1, 0.36, 1)`. Nikdy neměň velikost písma ani rozměry.

## 1. Dialog agent ↔ člověk (rozhodnutí)

```html
<div class="story-dialog" aria-label="Ilustrační upřesnění chování mezi agentem a člověkem">
  <p class="is-agent"><mdi-robot-outline aria-hidden="true" /><span><strong>Agent se doptá</strong>Co s neuzavřenými lahvemi po poruše?</span></p>
  <div class="story-dialog-options" aria-label="Navržené varianty"><b class="is-chosen">A · Vyřadit jako zmetky</b><b>B · Dokončit plnění</b><b>C · Jiné</b></div>
  <p class="is-human"><mdi-account-outline aria-hidden="true" /><span><strong>Člověk rozhodne</strong>A. Dobrých kusů zůstává 42.</span></p>
</div>
```

- Mřížka `minmax(0, 1.1fr) auto minmax(0, 1fr)`: otázka, varianty, odpověď na jednom řádku.
- `strong` v barvě vlastníka (agent `#bdaaff`, člověk `var(--br-orange)`), text bílý.
- Zvolená varianta: oranžový rámeček + bold; ostatní `#4a545a` rámeček, `#c5cdd1` text.
- Odpověď musí odpovídat ticketům a poznámkám (stejná čísla a formulace).

## 2. Diff (malá změna)

```html
<div class="story-diff" aria-label="Ilustrační diff v jazyce ST"><span>IF AxisFault THEN</span><span class="is-removed">-  GoodCount := 0;</span><span class="is-added">+  State := HOLD;</span></div>
```

- 1 řádek kontextu + 1 odebraný + 1 přidaný. Víc řádků publikum nepřečte.
- `span { white-space: pre; }`, `.is-removed { color: #ff8a7a; background: rgba(255,138,122,.12) }`, `.is-added { color: #7fd394; background: rgba(127,211,148,.12) }`.
- Jazyk domény publika (ST pro PLC), identifikátory musí sedět se slidem.

## 3. Běh testu FAIL → PASS (ověření)

```html
<div class="story-testrun" aria-label="Ilustrační běh akceptačního testu T1">
  <p class="is-fail"><mdi-close-circle-outline aria-hidden="true" /><span>FAIL · po poruše počet 0</span></p>
  <p class="is-pass" v-click="2"><mdi-check-circle-outline aria-hidden="true" /><span>PASS · po poruše počet 42</span></p>
</div>
```

- FAIL se objeví s kartou testu, PASS až na kroku "oprava proběhla". Tím artefakt sám vypráví smyčku oprava → znovu test.
- Výsledek popisuje pozorovatelné chování, ne "build OK".

## 4. PR karta s lidskou bránou (schválení)

```html
<aside class="story-pr" aria-label="Ilustrační pull request čekající na lidské schválení">
  <div class="story-pr-head"><mdi-source-pull aria-hidden="true" /><span>PULL REQUEST</span></div>
  <p class="story-pr-branch">feature/obnova-davky → main</p>
  <p><mdi-check-circle-outline aria-hidden="true" /><span>Akceptační testy T1–T3: PASS</span></p>
  <p><mdi-file-document-outline aria-hidden="true" /><span>Diff, logy a rizika přiloženy</span></p>
  <p class="is-required" :class="{ 'is-current': $clicks >= 2 }"><mdi-account-check-outline aria-hidden="true" /><span>Schválení člověkem: povinné</span></p>
</aside>
```

- Rozvržení vedle textu: `.story-evaluation-layout { grid-template-columns: minmax(0, 1fr) 380px; gap: 40px; }`.
- Kontroly zeleně (`#7fd394`), brána oranžově. `.is-required` má čárkovaný rámeček; na rozhodovacím kliku `.is-current` plný oranžový rámeček a podbarvení `rgba(255,119,0,.1)`.
- Na přehledu (roadmapa) stejná karta zjednodušená na 2 kontroly; selektory hlavičky, větve a brány sdílí obě karty.

## 5. Zjednodušený graf práce (paralelismus + návrat)

Zdroj: `.roadmap-graph` na slidu 72. SVG `viewBox="0 0 236 128"`, popisky řádků v HTML (`grid-auto-rows: 32px`, aby seděly na y = 16/48/80/112). Třídy:

- `graph-main` (feature větev, `#e4e9ec`, 2.5), `graph-branch` (ticket, `#bdaaff`, 2), `graph-retry` (čárkovaný `#ff8a7a`),
- `graph-node`, `graph-node.is-failed` (prázdný kruh s červeným obrysem), `graph-merge`.
- Pod grafem jedna legenda: `<span class="is-failed">Test selhal</span> → oprava → review a test znovu`.

SVG text se v typografickém testu neměří, proto popisky dávej do HTML, ne do `<text>`.

## 6. Tickety / Kanban

- Řetěz `T1 → T2 → T3` jako `<b>` s oranžovým rámečkem a `mdi-arrow-right` mezi nimi.
- Kanban používá **stejná ID** jako specifikace; závislost (`ČEKÁ NA T2`) je viditelná.

## Měření rezervy

Spusť proti běžícímu serveru (Playwright, viewport 1280 × 720). Výsledek je v souřadnicích plátna 720 px:

```js
await page.goto('http://localhost:3030/75?clicks=2'); await page.waitForTimeout(3000)
return page.evaluate(sel => {
  const root = document.querySelector('#slide-content').getBoundingClientRect()
  const k = 720 / root.height
  return [...document.querySelectorAll(sel)].filter(e => e.offsetParent)
    .map(e => Math.round((e.getBoundingClientRect().bottom - root.top) * k))
}, '.story-implementation-outcome')
```

Hodnota musí být ≤ 672 (720 − footer keepout 48). Slide 75 po doplnění artefaktů skončil na 667 — to je horní mez, další řádek se tam nevejde.

## Poznámky řečníka — vzor

```md
[click]
Pak vstupuje review subagent a testovací subagent. … První běh akceptačního testu tu selže: po poruše je počet nula.

[click]
Neúspěšná kontrola vrací práci k implementaci; po opravě test projde a počet zůstává 42. …
```

Jedna věta na artefakt, ve stejném `[click]` bloku, ve kterém se artefakt objeví.
