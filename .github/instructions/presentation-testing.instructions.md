---
description: "Use when testing, debugging, or changing the Slidev presentation, its slides, styles, components, or presentation tests. Keep verification focused, inspect the rendered slides, fix real defects, and add regression coverage."
name: "Presentation Testing"
---

# Testování prezentace

- Než začneš testovat, zjisti, co se změnilo a jaké chování má zůstat správné. Řiď se postupem v [Slides/TESTING.md](../../Slides/TESTING.md); nevymýšlej nový testovací framework, nástroje ani vícekrokové workflow, pokud stávající kontroly umí změnu ověřit.
- Před `npm ci` zastav vlastní dev a preview servery pro tento projekt, aby nedržely soubory v `node_modules`. Příkazy spouštěj z `Slides/`; vyber relevantní statické kontroly (`test:content`, `test:topic-styles`, `test:topic-code`, `test:duplicates`) a po změně zdrojů prezentace vždy ověř sestavení (`npm.cmd run build`) i vykreslenou prezentaci (`npm.cmd run test:smoke`) proti běžícímu serveru podle `Slides/TESTING.md`.
- Před ruční kontrolou každého změněného slidu sestav mapu odhalování:
  - zaznamenej obsah viditelný před prvním kliknutím;
  - vypiš jedinečné skupiny odhalování v pořadí, v jakém je Slidev skutečně zobrazí. Všechny prvky se stejným číselným `v-click` patří do jedné skupiny, nikoli do samostatných kliků; nečíslované `v-click` tvoří skupiny podle pořadí odhalení. `v-after` zaznamenej jako vlastní pozdější skupinu (zpravidla o krok po předchozím `v-click`); při sdílených nebo číslovaných skupinách ověř přesné pořadí vykreslením;
  - uveď komponenty řízené kliknutím nebo jinou interakcí a stav, do kterého se dostanou;
  - zaznamenej konečný stav po poslední skupině odhalení a relevantních interakcích.
  Počet a umístění `[CLICK]` v poznámkách řečníka porovnej s touto mapou: každý marker musí odpovídat zamýšlené skupině nebo výslovně popsanému kroku. Nepovažuj samotný počet direktiv či markerů za důkaz správného načasování.
- Smoke test prochází prezentaci pouze na desktopu (1280 × 720) a ukládá snímky do `Slides/artifacts/slides/desktop/`. Mobilní telefony netestuj. Ručně otevři Presenter Mode a ověř poznámky řečníka i jejich soulad s mapou odhalování. Prohlédni každý změněný slide na desktopu v počátečním, relevantních mezilehlých a konečném stavu; projdi také klikem řízené komponenty, obrázky a animace. Ověř samostatně, že se obsah vejde bez přetékání či ořezu a že je text skutečně čitelný. Automatický úspěch nenahrazuje vizuální kontrolu.
- Produkční `preview` přidávej jen tehdy, když změna může ovlivnit produkční build, routování či nasazení, nebo když ho vyžaduje CI či zjištěná chyba. Jinak stačí běžný postup se smoke testem.
- Když kontrola nebo vizuální prohlídka odhalí skutečnou regresi, zjisti příčinu, oprav ji ve zdroji a znovu spusť nejmenší relevantní testy. Neskonči u popisu chyby ani u změkčení testu.
- Testy průběžně udržuj spolu s opravami: pro reprodukovatelnou chybu doplň nebo uprav nejbližší existující test tak, aby ji zachytil i příště, potom ověř, že selže před opravou (je-li to praktické) a po opravě projde. Nevytvářej duplicitní testy ani nepřidávej křehké kontroly bez vazby na očekávané chování.
- `test:topic-code` kontroluje také Markdown v `Slides/topics/<id>/`, takže i nepřipojený `plan.md` tam může způsobit selhání. Test ani uživatelský soubor kvůli tomu tiše nemaž, neobcházej ani neoslabuj; změna rozsahu testu patří do koordinované úpravy testu.
- Selhání nejdřív diagnostikuj. Zaznamenej přesný příkaz, návratový kód, chybné assertion a dostupné údaje o viewportu, slidu a kliku; u smoke testu uveď přesnou cestu k failure screenshotu, případně že se jej nepodařilo uložit. Při `EPERM` identifikuj proces blokující soubor (PID, příkazovou řádku a vazbu na tento projekt) a ověř, že jej můžeš bezpečně zastavit. Nezabíjej neznámý proces Node.js a nemaž `dist` naslepo. Pokud terminál nevrátí výsledek, neoznačuj kontrolu jako PASS. Tentýž příkaz kvůli stejnému blockeru opakuj nejvýše dvakrát; poté uveď blokaci a co nebylo ověřeno.
- Měníš-li záměrné chování nebo vzhled, uprav očekávání testu pouze tehdy, když odpovídají potvrzenému požadavku; nikdy test nevypínej ani nesnižuj jeho přísnost jen proto, aby prošel. Pokud ověření nelze dokončit kvůli prostředí, uveď přesně co nebylo ověřeno a proč.
- V závěru stručně uveď spuštěné kontroly, výsledek vizuální kontroly a případné opravy. Netvrď, že prezentace je ověřená, pokud jsi její render skutečně neprohlédl.
