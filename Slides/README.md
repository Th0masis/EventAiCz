# Práce na vlastním topicu

Každé téma má připravenou větev `topic/<id>`. ID najdete v názvu souboru
`topics/<id>.md`; seznam témat a podrobný postup pro větev a PR jsou v
[hlavním README](../README.md#větev-a-změny-tématu).

## Rychlý start

1. Zjistěte ID tématu podle souboru `topics/<id>.md` a přepněte se na jeho
   větev. Příklad pro `privitani`:

   ```powershell
   git fetch origin
   git switch --track origin/topic/privitani
   ```

2. Upravujte jen soubory svého tématu:

   - `topics/<id>.md` – obsah a pořadí slidů uvnitř tématu.
   - `topics/<id>/` – vlastní CSS, Vue komponenty a skripty.
   - `public/topics/<id>/` – obrázky a další soubory pro slidy.

    Prohlédněte si podobné téma a jeho Markdown jako vzor. Každý slide začíná
    oddělovačem `---`; další slide přidáte do stejného topicového souboru.

3. Pro spuštění náhledu a kontroly postupujte podle [TESTING.md](TESTING.md).

4. Odešlete změny do stejné topicové větve a otevřete PR do `main` podle
   [podrobného postupu](../README.md#vytvoření-pr).

Neměňte `slides.md`, sdílené `style.css` ani soubory jiného tématu. Změny
programu, společného vzhledu nebo sdílených komponent patří na koordinační
větev; postup je v [hlavním README](../README.md#větev-a-změny-tématu).

## Design Notes For Agents

Platí pro autory i agenty pracující na slidech:

- Než navrhnete nebo upravíte grafiku, přečtěte si celé
   [grafické poznámky](../docs/graphic-notes.md). Jsou závazným zdrojem pro
   paletu, typografii, rozvržení, assety i technická pravidla.
- Zachovejte vizuální směr B&R: ABBvoice, oranžové akcenty, neutrální šedé,
   bílé pozadí a logo vpravo dole. Sdílené tokeny a layouty jsou v
   [style.css](style.css); v topicové práci je neměňte.
- Změny vzhledu omezte na vlastní `topics/<id>/styles.css`. Každý slide
   tématu včetně úvodního musí mít třídu `topic-<id>` a v `<script setup>` svůj
   import `./<id>/styles.css`.
- Vue komponenty importujte výslovně z `./<id>/components/`. Nedávejte
   topicový kód do sdílených složek a neimportujte zdroje jiného tématu.
- ABBvoice není součástí repozitáře; musí být nainstalované podle organizační
   licence. Logo a titulní banner jsou v `public/`.
