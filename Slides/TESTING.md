# Náhled a kontroly prezentace

Z kořene repozitáře přejděte do složky `Slides/`; další příkazy spouštějte
z této složky. Projekt používá Node.js 22 a npm, stejně jako CI. Pro kontrolu
vzhledu a exportu je potřeba mít lokálně nainstalované písmo ABBvoice podle
organizační licence.

## Instalace

Před instalací zastavte dev a preview servery projektu. Ve Windows mohou
zamknout soubory v `node_modules`. V PowerShellu použijte `npm.cmd`, pokud
prostředí blokuje `npm.ps1`:

```powershell
cd Slides
npm.cmd ci
npx.cmd playwright install chromium
```

## Kontroly

Spusťte statické kontroly a sestavení:

```powershell
npm.cmd run test:content
npm.cmd run test:topic-styles
npm.cmd run test:topic-code
npm.cmd run test:duplicates
npm.cmd run build
```

`test:content` kontroluje obsahové konvence, `test:topic-styles` pravidla
topicového CSS a `test:topic-code` hranice importů a skriptů. `test:duplicates`
hledá výrazně duplicitní zdrojový kód. Kontroly stylů, kódu a duplicit běží
také v CI.

## Náhled a smoke test

Nechte vývojový server běžet v prvním terminálu:

```powershell
npm.cmd run start -- --port 3030
```

V druhém terminálu spusťte smoke test:

```powershell
npm.cmd run test:smoke
```

Test projde slidy na desktopovém i mobilním rozlišení a uloží screenshoty do
`artifacts/slides/`. Při selhání vypíše viewport, slide, klik, aktuální URL
a dosud zachycené chyby JavaScriptu, konzole, HTTP a neúspěšné síťové požadavky.
Chybový screenshot celého viewportu uloží jako
`artifacts/slides/<desktop|mobile>/failure-<slide>-click-<klik>.png`.
Pokud screenshot nelze pořídit, vypíše i tuto chybu; původní selhání zachová.
Timeouty ani podmínky úspěchu se diagnostikou nemění.

Diagnostiku lze ověřit bez běžící prezentace:

```powershell
npm.cmd run test:smoke-diagnostics
```

Regresní test používá lokální HTTP fixture, záměrně vyvolá timeout při vstupu
na slide i při kliku a ověří výpis chyb, screenshot a neúspěšný návratový kód.
Své chybové screenshoty po ověření odstraní.

Smoke test používá vývojový server na portu 3030. Pro kontrolu
produkčního buildu spusťte po sestavení preview server v prvním terminálu:

```powershell
npm.cmd run preview
```

Ve druhém terminálu nastavte adresu preview:

```powershell
$env:SLIDES_URL = 'http://127.0.0.1:4173'
npm.cmd run test:smoke
Remove-Item Env:SLIDES_URL
```

Pro rychlou lokální kontrolu jednoho tématu lze nastavit jeho ID. Projdou se
všechny slidy tohoto tématu na desktopu i mobilu, včetně klikacích stavů:

```powershell
$env:SLIDES_TOPIC = 'as-cli'
npm.cmd run test:smoke
Remove-Item Env:SLIDES_TOPIC
```

Tento režim nenahrazuje úplný smoke test před PR ani v CI. Používejte ho při
iteraci nad izolovaným tématem; změny sdílených stylů, layoutů, slidů nebo
komponent vyžadují úplný smoke test.

Před PR ručně projděte všechny změněné slidy: ověřte odhalování obsahu,
interakce, obrázky, poznámky prezentujícího, čitelnost na menším rozlišení
a délku vystoupení. CI navíc kontroluje build, produkční preview a screenshoty.
Automatické kontroly nenahrazují vizuální kontrolu. Grafická pravidla jsou v
[grafických poznámkách](../docs/graphic-notes.md).
