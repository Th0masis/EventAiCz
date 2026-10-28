---
description: "Use when creating or revising Slidev slides that explain an agent, plugin, skill, CLI, MCP server, language server, or its workflow. Covers source verification, user-agent collaboration, project examples, and limitations."
name: "Presentation Plugin Authoring"
applyTo: "Slides/topics/**"
---

# Pokyny pro slidy o agentech a pluginech

Při vysvětlování nástroje v prezentaci převeď ověřené informace do srozumitelného příběhu: co nástroj umí, co musí dodat nebo schválit uživatel, jak vypadá skutečné použití v projektu a co výsledek ještě nedokazuje. HMI ukázka v [as-repository.md](../../Slides/topics/as-repository.md) je vzor podrobnosti a spolupráce, ne univerzální posloupnost kroků pro jiné pluginy.

## Nejdřív zjisti, co je zdroj pravdy

- Přečti README pluginu, na který se zadání odkazuje. Rozlišuj README prezentace či repozitáře od README samotného pluginu. Zaznamenej, pro jakou verzi a prostředí informace platí.
- Podle dostupnosti ověř podstatná tvrzení také v relevantních artefaktech: instrukcích agenta nebo skillu, manifestu, schématu konfigurace, příkladech nastavení, implementaci launcheru či rozšíření, dokumentaci CLI a testech. Nepředpokládej, že každý z těchto zdrojů je součástí tohoto repozitáře.
- Pro fakta o projektu použij jeho skutečné soubory a dostupné nástroje. Projektové názvy, proměnné, cesty, hodnoty a výsledky buildu nikdy nevymýšlej; neověřené ilustrace výslovně označ.
- Když se zdroje rozcházejí nebo požadované tvrzení nelze ověřit, nepředstavuj odhad jako fakt. Rozpor uveď v poznámkách, případně si vyžádej chybějící podklad.

## Než začneš psát, sestav mapu faktů

Pro každý nástroj zjisti a podklady si poznamenej:

1. **Účel a rozsah:** jaký problém řeší a jaké konkrétní operace podporuje.
2. **Předpoklady:** požadované prostředí, klient/harness, instalace, konfigurace, projekt nebo předchozí příprava.
3. **Pracovní postup:** kdo nástroj vybere či spustí, co agent přečte nebo změní a co je před pokračováním potřeba od uživatele.
4. **Důkazy a hranice:** co potvrzuje výsledek operace a co z něj nelze vyvozovat; které operace jsou read-only a které zapisují.
5. **Konkrétní příklad:** skutečné vstupy, artefakty a ověřovací krok z projektu, nebo jasně označený modelový příklad.

Do poznámek řečníka ulož stručný původ důležitých tvrzení (cestu k souboru, dokumentaci či ověřený výstup) a nezbytné výhrady. Viditelný text drž stručný. Nevkládej do něj technické podrobnosti, které zdroje nedokládají.

## Navrhni posloupnost podle skutečného nástroje

- Typická posloupnost může zahrnout přehled schopností, spolupráci uživatele s agentem a konkrétní průchod projektem. Rozděl ji podle potřeby mezi slidy; detailní příklad umísti na samostatný navazující slide, ne do souhrnného přehledu.
- Ukaž odpovědnost obou stran: uživatel vymezí cíl a kontext, doplní chybějící rozhodnutí a schvaluje rizikové kroky; agent vysvětlí postup, změny a ověřovací důkazy. Schválení, nasazení ani rozhodnutí uživatele nepředstírej jako automatickou schopnost pluginu.
- Nepřenášej mechanicky workflow jiného nástroje. Například HMI kroky Design → Convert → Validate platí pro popsaný HMI postup; language server ani jiný plugin nemusí mít tyto fáze, schvalovací body nebo možnost měnit projekt.
- Rozlišuj plugin, skill, agenta, klienta/harness, server, CLI a MCP. Připsat schopnost správné vrstvě je důležitější než zjednodušit diagram.
- U každého ověřovacího kroku pojmenuj důkaz i limit. Například úspěšný build potvrzuje sestavení, ne běh systému; symbolová navigace language serveru sama o sobě neověřuje build ani runtime.

## Příklad pro AS-LSP a podobný language-server workflow

Stávající AS-LSP materiál v [as-repository.md](../../Slides/topics/as-repository.md) použij jako obsahový a prezentační výchozí bod, ne jako jediný zdroj pravdy. Před jeho dalším rozšířením ověř, zda už existuje samostatný topic nebo projektová větev, a zjisti konkrétní zdroje pluginu a prostředí. Podle dostupnosti prověř zejména:

- dokumentaci/README rozšíření B&R ST-LSP a jeho závislosti;
- klientskou konfiguraci (například `lsp.json` nebo `.lsp.json`) a který harness ji skutečně načítá;
- launcher, například `scripts/st-lsp-launcher.js`, a odkud získává server i projektové deklarace;
- instrukce skillu/agenta, které popisují, kdy a jak agent LSP dotazy používá;
- dostupné operace serveru a hranice konkrétního klienta, zejména zda umí pouze číst, nebo také provádět rename či jiné změny.

Vysvětli tok požadavku od uživatelova symbolového dotazu přes klienta, launcher a server zpět k informaci, kterou agent použije. Ověř požadavky prostředí a případnou předchozí přípravu projektu. Nezaměňuj serverové možnosti za možnosti harnessu; nevyvozuj, že všechny klienty sdílejí konfiguraci nebo podporují zápis. Jasně uveď, pokud LSP neprovádí build, neposkytuje diagnostiku buildu nebo nepotvrzuje běhové chování — ale pouze tehdy, když to potvrzují zdroje.

## Interaktivní ukázky

Pokud zadání požaduje popup nebo rozbalovací detail, umísti jej ke konkrétnímu příkladu, ne na souhrnný slide. Zachovej přístup ovládáním klávesnicí i bez hoveru; popiš počáteční, otevřený a konečný stav v poznámkách řečníka. U interakcí dodrž také [pokyny k testování prezentace](./presentation-testing.instructions.md) a ověř vykreslené stavy podle `Slides/TESTING.md`.

## Rozsah a ověření

- Dodrž topicovou strukturu a omezení v [Slides/README.md](../../Slides/README.md); před grafickými změnami přečti také odkazované grafické poznámky.
- Upravuj pouze soubory cílového tématu, pokud změna sdílené instrukce, prezentace nebo komponent nebyla výslovně požadována a koordinována.
- Při změně slidů ověř jejich obsah, poznámky řečníka, pořadí odhalení, související testy, build i vizuální render podle existujících prezentačních instrukcí. U samotné změny této instrukce nevymýšlej nový testovací workflow.
