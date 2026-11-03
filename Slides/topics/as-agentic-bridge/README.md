# Artefakty Agentic Bridge a mapa odhalování

## Engineering smyčka — slide 6 v tématu (15 v decku)

Sdělení: nástroje předávají agentovi důkazy; o změně a nasazení rozhoduje člověk.

| Klik | Nově viditelný obsah | Aktivní krok |
|---|---|---|
| 0 | Nadpis, zadání počítadla a viditelné označení ilustrace. | Žádný |
| 1 | Plan: uzel s dokumentem a krátkým popiskem. | Plan |
| 2 | Implement: uzel se souborem kódu a první směrová šipka. | Implement |
| 3 | Verify: uzel se symbolem sestavení a druhá šipka. | Verify |
| 4 | Test: schéma zvýšení a resetu, třetí šipka a zpětná vazba do plánu. | Test |
| 5 | Postava se zámkem za přerušovanou schvalovací hranicí a čtvrtá šipka. | Lidská revize |
| 6 | Stejný diagram, všechny uzly neutrální. Schválení stále čeká. | Žádný |

Na klicích 1–5 se zvýrazní oranžově ikona, obvod, číslo i nadpis aktivního kroku.
Šest markerů `[CLICK]` odpovídá šesti skupinám, `clicks: 6` se nemění.
Grafický vzorek nahrazuje textové panely velkými ikonami a propojenou smyčkou.
Viditelný text má nejvýše 55 slov; technické detaily patří do poznámek.
Průběh testu je schéma, nikoli měření. Test ani build nebyly provedeny proti
Automation Studiu. Ukázka nedoplňuje chybějící čtení po resetu v přepisu AS CLI.

## RAG — slide 10 v tématu (skrytý záložní slide, `hide: true`)

Sdělení: odpověď musí být dohledatelná ke konkrétní pasáži a její revizi.

| Klik | Nově viditelný obsah |
|---|---|
| 0 | Nadpis, definice, otázka o resetu a označení ilustrace. |
| 1 | Stoh dokumentů: modelová specifikace S1, revize 3. |
| 2 | Dokument s lupou: Reset → 0, S1 § 2; první směrová šipka. |
| 3 | Bublina odpovědi: očekávaná nula s citací [S1, § 2]; druhá šipka. |
| 4 | Závěr: nejde o trénování ani záruku správné odpovědi; všechny nadpisy a ikony neutrální. |

Čtyři markery `[CLICK]` zůstávají. Finále obsahuje všechny artefakty i omezení.
Kliky 1–3 zvýrazňují právě vysvětlovanou ikonu a nadpis oranžově.
Bez dalších interakcí. S1 není citace B&R Help ani skutečný dohledaný dokument;
nepřidáváme vymyšlenou URL. Reference je uvnitř modelového příkladu.

## Výběr nástroje — skrytý záložní slide (`hide: true`)

Sdělení: model navrhuje konkrétní dostupný nástroj podle požadavku, popisu,
kontextu a povolení; host směruje volání na odpovídající server.

| Klik | Nově viditelný obsah |
|---|---|
| 0 | Nadpis a požadavek uživatele. |
| 1 | Ilustrační nabídka nástrojů Dokumentace a Prohlížeč. |
| 2 | Vybraná Dokumentace, zdůvodnění shody a příprava argumentu `query`. |
| 3 | Směrování aplikací a další vlivy na výběr. |

Tři markery `[CLICK]` odpovídají skupinám 1–3. Nabídka je ilustrační, nikoli
skutečný výpis Knowledge Hubu; slide nezobrazuje skryté uvažování modelu ani
nezaručuje deterministický výběr.

## Knowledge Hub — viditelný slide o připojení

Hlavní část vlevo ukazuje přidání přes URL a JWL token do uživatelského
`mcp.json`. Doplňková část vpravo vysvětluje, jak může Hub spolupracovat s
`as-help` a `br-community`, doplnění zdrojů a ověření na typických dotazech.
Měsíční kvóta je samostatný doplněk zarovnaný ke spodnímu okraji obsahu.

## Shrnutí — skrytý záložní slide (`hide: true`)

Slide „Co si odnést a co přijde dál“ zůstává připravený jako záloha, ale není
součástí běžného průchodu.

## Regrese

Z `Slides/` proti běžícímu serveru:

```powershell
node topics\as-agentic-bridge\tests\artifacts.test.mjs
$env:SLIDES_TOPIC = 'as-agentic-bridge'
npm.cmd run test:smoke
```

Oba testy respektují `SLIDES_URL`. Test artefaktů kontroluje všechny kliky,
návrat do neutrálního stavu, čekající schválení a zachování odkazu S1.
Standardní statické kontroly, build, smoke a ruční kontrola Presenter Mode
se řídí [TESTING.md](../../TESTING.md).
