# Ilustrační artefakty AS Repository

Tři přehledy nahrazují abstraktní seznamy konkrétním materiálem. Všechny
zůstávají statické: žádné nové kliky, hover ani modaly.

| Slide v tématu (v decku) | Sdělení | Stav 0 = finále |
|---|---|---|
| 9 (41), as-skills | Skill vede práci; nástroje provedou změnu a ověření. | Zadání resetu, soubor `Logical/Counter/Main.st` → `structured-text`, výřez ST diffu `gProductionCount := 1` → `0`, modelový build/test a čekající lidské review. |
| 12 (44), mappView HMI | Převod, nasazení a případná oprava mají lidské brány. | Šest fází zleva doprava; člověk zadá práci, agent dodá HTML, člověk schválí, agent převede a sestaví, člověk nasadí a potvrdí URL/verzi, agent vrátí read-only nálezy. Číst po fázích, nikoli po celých drahách. |
| 16 (48), gAlarmXCore | LSP ukáže původ a reference; generovaný soubor není místo k ruční opravě. | Vlevo symbol, dotazy hover/definice a generovaný původ; vpravo modelový seznam deklarace a dvou ST použití. Typ není vymyšlený, musí se zjistit z projektu. |

Poznámky řečníka nemají na těchto slidech žádné `[click]` markery. Žádný
artefakt neprokazuje existenci skutečných souborů, buildu, testu ani nasazení.
ST je výřez, nikoli celý program. HMI identifikátor `TemperatureValue.value`
navazuje na následující příklad teploty; validace zůstává read-only.

## Ověření

Z `Slides/` spusťte standardní kontroly a build podle
[TESTING.md](../../TESTING.md). Pro regresi artefaktů proti běžícímu serveru:

```powershell
node topics\as-repository\tests\artifacts.test.mjs
$env:SLIDES_TOPIC = 'as-repository'
npm.cmd run test:smoke
```

Oba prohlížečové testy respektují `SLIDES_URL`. Test artefaktů navíc ověřuje
schvalovací brány, read-only hranici, modelové důkazy a reference včetně deklarace.
Ručně zkontrolujte všechny tři statické stavy i poznámky v Presenter Mode.
