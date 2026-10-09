# AI & Agentic Engineering Day

Repozitář obsahuje společnou prezentaci a podklady pro jednotlivá vystoupení.
Akce se koná 4. 11. 2026. Prezentace se skládá ze zdrojů v `Slides/` a po
sloučení změn do `main` se automaticky publikuje přes GitHub Pages.

> **Stav GitHubu:** Výchozí větev repozitáře je `main`; PR zakládejte proti ní.
> GitHub Pages používá GitHub Actions a prostředí `github-pages` povoluje
> nasazení z `main`.

## Publikace prezentace

Prezentace se publikuje na [th0masis.github.io/EventAiCz](https://th0masis.github.io/EventAiCz/)
pomocí workflow [Deploy Slidev to GitHub Pages](.github/workflows/deploy-pages.yml).
Workflow při pushi do `main` sestaví obsah z `Slides/` a nasadí výstup `Slides/dist/`;
lze ho spustit také ručně v GitHub Actions.

V nastavení repozitáře **Settings → Pages** musí být jako zdroj zvoleno
**GitHub Actions**. Prostředí `github-pages` musí povolovat nasazení z větve
`main`; jinak sestavení projde, ale nasazení bude zablokováno. Publikování přímo
z větve místo tohoto workflow může zobrazit README repozitáře namísto prezentace.

## Kde pracovat

- `Slides/topics/<id>.md` je obsah konkrétního tématu. ID je název souboru bez
  přípony, například `privitani`.
- `Slides/topics/<id>/` obsahuje CSS, Vue komponenty a případné skripty tématu.
   Sdílené tokeny a layouty zůstávají v `Slides/style.css`; pravidla vlastnictví
   a namespace popisuje [grafický kontrakt](docs/graphic-notes.md).
- `Slides/public/topics/<id>/` obsahuje obrázky a další podklady daného tématu.
- `Slides/slides.md` skládá témata a společné části do pořadí prezentace.
- `docs/graphic-notes.md` popisuje pravidla pro grafiku, barvy, písmo a layout.
- `Slides/README.md` obsahuje poznámky k návrhu Slidev prezentace.

Prezentující upravují své téma a jeho podklady. Pořadí programu, společné slidy
nebo jiné změny zasahující více témat řešte samostatným koordinačním PR.

## Lokální náhled a kontrola

Použijte Node.js 22 stejně jako CI a npm. Pro požadovaný vzhled musí být
nainstalované licencované písmo ABBvoice; není součástí repozitáře. Podrobnosti
jsou v [grafických poznámkách](docs/graphic-notes.md#typography).
Před `npm.cmd ci` zastavte běžící dev/preview servery tohoto projektu;
ve Windows mohou držet načtené soubory v `node_modules`.

V PowerShellu přejděte do složky `Slides/`. Pokud PowerShell blokuje `npm`,
použijte příkaz `npm.cmd`:

```powershell
cd Slides
npm.cmd ci
npx.cmd playwright install chromium
npm.cmd run test:content
npm.cmd run test:topic-styles
npm.cmd run test:topic-code
npm.cmd run test:duplicates
npm.cmd run build
```

Pro kontrolu v prohlížeči spusťte prezentaci v jednom terminálu:

```powershell
cd Slides
npm.cmd run start -- --port 3030
```

Nechte ji běžet a v druhém terminálu spusťte:

```powershell
cd Slides
npm.cmd run test:smoke
```

Smoke test projde slidy na desktopovém i mobilním rozlišení a uloží screenshoty
do `Slides/artifacts/slides/`. Před PR také ručně zkontrolujte odhalování
obsahu, interakce, poznámky prezentujícího, obrázky a délku vystoupení.
Duplicate checker kontroluje topicové i sdílené zdroje, CSS a testovací skripty;
závislosti a generované výstupy ignoruje. Jeho dočasný report se po běhu odstraní.

Pro kontrolu produkčního buildu stejně jako v CI spusťte místo dev serveru
`npm.cmd run preview` po úspěšném `npm.cmd run build`. V druhém terminálu,
ve složce `Slides/`, spusťte:

```powershell
$env:SLIDES_URL = 'http://127.0.0.1:4173'
npm.cmd run test:smoke
Remove-Item Env:SLIDES_URL
```

Při jiné adrese náhledu upravte `SLIDES_URL`. Pro návrat k dev serveru proměnnou
odstraňte, aby test opět použil výchozí port 3030.

## Větev a změny tématu

Každé téma má připravenou vzdálenou větev `topic/<id>`. ID odpovídá názvu
souboru v `Slides/topics/` bez přípony:

| ID | Téma |
| --- | --- |
| `privitani` | Přivítání |
| `proc-ai` | Proč je AI důležitá v průmyslové automatizaci |
| `agentic-engineering` | Co je Agentic Engineering? |
| `agentic-demo` | Ukázka Agentic Engineeringu |
| `br-community` | B&R Community: Od AI funkcí ke znalostní bázi pro AI |
| `as-agentic-bridge` | Automation Studio Agentic Bridge |
| `as-cli` | AS CLI - nový koncept kontroly Automation Studia pomocí AI |
| `as-repository` | AS repository: dejte AI schopnosti automation experta |
| `support-agent` | Příklad z B&R: Support Agent |
| `prakticky-prinos` | Příklady z praxe: praktický přínos AI |
| `br-services` | B&R Services - nabídka AI služeb |
| `ai-management` | AI pro management - externí speaker |
| `orchestrace-dansko` | Kompletní orchestrace? Příklad z Dánska |
| `zaver` | Závěr |

Oběd, přestávka a ARVK jsou jednotlivé slidy koordinátora v `Slides/slides.md`;
nemají vlastní tematickou větev.

1. Načtěte vzdálené větve a přepněte se na připravenou větev svého tématu:

   ```powershell
   git fetch origin
   git switch --track origin/topic/privitani
   ```

   Nahraďte `privitani` ID svého tématu. Pokud už lokální větev máte, přepněte
   se na ni a načtěte případné nové změny:

   ```powershell
   git switch topic/privitani
   git pull --ff-only
   ```

2. Upravujte pouze `Slides/topics/<id>.md`, vlastní zdroje v
   `Slides/topics/<id>/` a soubory v `Slides/public/topics/<id>/`.
   Topicový PR nesmí zahrnovat sdílené soubory ani jiné téma.
   Vue komponenty importujte explicitně z vlastní složky; mimo
   `Slides/components/` se neregistrují automaticky. Pokud téma má
   `styles.css`, každý jeho slide včetně chapter openeru musí mít root třídu
   `topic-<id>` a vlastní import stylesheetu v `<script setup>`.
3. Pokud na tématu pracuje více lidí, všichni používejte stejnou větev a jeden
   otevřený PR. Nevytvářejte pro stejné téma další PR.
4. Po úpravách odešlete změny do stejné vzdálené větve:

   ```powershell
   git add Slides/topics/privitani.md Slides/public/topics/privitani/
   git commit -m "Update privitani topic"
   git push
   ```

   Při prvním pushi z lokální větve, která nemá nastavenou vzdálenou větev,
   použijte `git push -u origin topic/privitani`.
   Pokud jste vytvořili nebo upravili vlastní CSS, komponenty nebo skripty,
   přidejte do commitu také změněné soubory v `Slides/topics/privitani/`.
5. Změny programu, `Slides/slides.md`, sdílených stylů nebo jiné společné
   soubory připravte na samostatné větvi `coord/<stručné-id-změny>` z aktuálního
   `origin/main`. Koordinační PR nesmí měnit Markdown témat ani jejich podklady;
   může přesouvat topicové zdroje ze sdílených složek a upravovat společné testy.

   ```powershell
   git fetch origin
   git switch -c coord/program-order origin/main
   ```

   Koordinovanou migraci nejprve slučte do `main`, potom aktualizujte základ
   topicové větve. Rozsah PR se kontroluje vůči `main`, ne pouze podle posledního
   commitu; topicový PR nesmí obsahovat dosud nesloučené společné změny.

## Vytvoření PR

1. Na GitHubu otevřete PR z vaší větve do `main`. Použijte automaticky
   předvyplněnou šablonu a uveďte ID tématu, prezentující, spoluautory, délku,
   shrnutí změn a stav dema.
2. U topicového PR ověřte, že je to jediný otevřený PR pro téma a že mění jen
   jeho Markdown, vlastní CSS/Vue/skripty a podklady. Všechny spoluautory
   přidejte do téhož PR.
3. Počkejte na kontroly `Slides validation` a `PR policy`. V artefaktu
   `rendered-slides` zkontrolujte vykreslené slidy a screenshoty.
4. Doplňte informace pro ruční ověření dema a záložní variantu. Do repozitáře
   nevkládejte přihlašovací údaje ani neveřejná zákaznická data bez souhlasu.
5. PR ostatních autorů vyžaduje aktuální GitHub approval od koordinátora
   `@Th0masis`. Kontrola `PR policy` ověří, že approval patří k aktuálnímu
   commitu PR. U PR vytvořeného `@Th0masis` se vyžadování tohoto review
   přeskočí; kontroly rozsahu, CI a ochrana větve platí dál.

Po schválení a úspěšných kontrolách lze PR sloučit do `main`. GitHub Actions
pak automaticky publikuje prezentaci. Dokud správce nezapne ochranu `main`,
jsou schválení koordinátorem a úspěšné kontroly popsaným procesem, nikoli
vynucenou podmínkou GitHubu. Ochrana `main` musí vyžadovat oba statusy:
`Slides validation` a `PR policy`. Aktuální nastavení ochrany není ověřitelné
jen z těchto workflow souborů.
