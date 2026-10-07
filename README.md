# AI & Agentic Engineering Day

Repozitář obsahuje společnou prezentaci a podklady pro jednotlivá vystoupení.
Akce se koná 4. 11. 2026. Prezentace se skládá ze zdrojů v `Slides/` a po
sloučení změn do `main` se automaticky publikuje přes GitHub Pages.

> **Stav GitHubu:** PR zakládejte proti `main`. Vzdálená výchozí větev je
> zatím `master` a `main` zatím nemá zapnutou ochranu větve. Dokud správce
> nepřepne výchozí větev a nenastaví ochranu `main`, GitHub pravidla schválení
> koordinátorem a povinných kontrol technicky nevynucuje.

## Kde pracovat

- `Slides/topics/<id>.md` je obsah konkrétního tématu. ID je název souboru bez
  přípony, například `privitani`.
- `Slides/public/topics/<id>/` obsahuje obrázky a další podklady daného tématu.
- `Slides/slides.md` skládá témata a společné části do pořadí prezentace.
- `docs/graphic-notes.md` popisuje pravidla pro grafiku, barvy, písmo a layout.
- `Slides/README.md` obsahuje poznámky k návrhu Slidev prezentace.

Prezentující upravují své téma a jeho podklady. Pořadí programu, společné slidy
nebo jiné změny zasahující více témat řešte samostatným koordinačním PR.

## Lokální náhled a kontrola

V PowerShellu přejděte do složky `Slides/`. Pokud PowerShell blokuje `npm`,
použijte příkaz `npm.cmd`:

```powershell
cd Slides
npm.cmd ci
npm.cmd run test:content
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

2. Upravujte pouze `Slides/topics/<id>.md` a soubory v
   `Slides/public/topics/<id>/`. Obsahový PR nesmí zahrnovat jiné soubory.
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
5. Změny programu, `Slides/slides.md`, sdílených stylů nebo jiné společné
   soubory připravte na samostatné větvi `coord/<stručné-id-změny>` z aktuálního
   `origin/main`. Koordinační PR nesmí měnit soubory témat ani jejich podklady.

   ```powershell
   git fetch origin
   git switch -c coord/program-order origin/main
   ```

## Vytvoření PR

1. Na GitHubu otevřete PR z vaší větve do `main`. Použijte automaticky
   předvyplněnou šablonu a uveďte ID tématu, prezentující, spoluautory, délku,
   shrnutí změn a stav dema.
2. U obsahového PR ověřte, že je to jediný otevřený PR pro téma a že mění jen
   jeho soubor a podklady. Všechny spoluautory přidejte do téhož PR.
3. Počkejte na kontroly `Slides validation` a `PR policy`. V artefaktu
   `rendered-slides` zkontrolujte vykreslené slidy a screenshoty.
4. Doplňte informace pro ruční ověření dema a záložní variantu. Do repozitáře
   nevkládejte přihlašovací údaje ani neveřejná zákaznická data bez souhlasu.
5. Schválení zajišťuje koordinátor `@Th0masis` přes GitHub review. Zaškrtnutí
   položky v šabloně review nenahrazuje. Autor PR nemůže schválit vlastní změnu;
   příspěvek autora musí schválit další oprávněný koordinátor.

Po schválení a úspěšných kontrolách lze PR sloučit do `main`. GitHub Actions
pak automaticky publikuje prezentaci. Dokud správce nezapne ochranu `main`,
jsou schválení koordinátorem a úspěšné kontroly popsaným procesem, nikoli
vynucenou podmínkou GitHubu.
