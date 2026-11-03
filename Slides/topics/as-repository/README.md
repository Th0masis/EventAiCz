# Ilustrační artefakty AS Repository

Tři přehledy používají velké symboly a spojnice místo dalších textových panelů. Všechny
zůstávají statické: žádné nové kliky, hover ani modaly.

| Slide v tématu (v decku) | Sdělení | Stav 0 = finále |
|---|---|---|
| 9 (39), as-skills | Skill vede práci; nástroje provedou změnu a ověření. | Kniha postupu → soubor změny resetu → kontrolní seznam build + test, lidské review čeká. Podrobnosti směrování a ověření jsou v poznámkách. |
| 12 (42), mappView HMI | Převod, nasazení a případná oprava mají lidské brány. | Šest velkých symbolů propojených lomenou trasou mezi drahami člověk/agent. Dvě lidské brány mají přerušovaný kruh; validace je jen čtení. Číst zleva doprava. |
| 16 (46), gAlarmXCore | LSP ukáže původ a reference; generovaný soubor není místo k ruční opravě. | Symbol se větví ke třem souborům: generovaná deklarace se zámkem a dvě ST použití. Typ není vymyšlený, musí se zjistit z projektu. |

Poznámky řečníka nemají na těchto slidech žádné `[click]` markery. Žádný
artefakt neprokazuje existenci skutečných souborů, buildu, testu ani nasazení.
Technické detaily zůstávají v poznámkách, ne v přidaných textových blocích.
Každý přehled má nejvýše 85 viditelných slov; validace zůstává read-only.

## Ověření

Z `Slides/` spusťte standardní kontroly a build podle
[TESTING.md](../../TESTING.md). Pro regresi artefaktů proti běžícímu serveru:

```powershell
node topics\as-repository\tests\artifacts.test.mjs
$env:SLIDES_TOPIC = 'as-repository'
npm.cmd run test:smoke
```

Oba prohlížečové testy respektují `SLIDES_URL`. Test artefaktů navíc ověřuje
schvalovací brány, read-only hranici, grafické spojnice a reference včetně deklarace.
Ručně zkontrolujte všechny tři statické stavy i poznámky v Presenter Mode.
