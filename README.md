# AI & Agentic Engineering Day

Repozitář obsahuje společnou prezentaci a podklady pro jednotlivá vystoupení.
Prezentace se skládá ze zdrojů v `Slides/` a po sloučení změn do `main` se
automaticky publikuje přes GitHub Pages.

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

1. Aktualizujte `main` a založte větev pojmenovanou přesně podle ID tématu:

   ```powershell
   git switch main
   git pull --ff-only
   git switch -c topic/privitani
   ```

   Nahraďte `privitani` ID vašeho souboru v `Slides/topics/`.
2. Upravujte pouze `Slides/topics/<id>.md` a soubory v
   `Slides/public/topics/<id>/`. Obsahový PR nesmí zahrnovat jiné soubory.
3. Pokud na tématu pracuje více lidí, všichni používejte stejnou větev a jeden
   otevřený PR. Nevytvářejte pro stejné téma další PR.
4. Změny programu nebo společné prezentace připravte na větvi
   `coord/<stručné-id-změny>`. Koordinační PR nesmí měnit obsah ani podklady
   témat.

Příklad odeslání změny tématu:

```powershell
git add Slides/topics/privitani.md Slides/public/topics/privitani/
git commit -m "Update privitani topic"
git push -u origin topic/privitani
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
pak automaticky publikuje prezentaci.
