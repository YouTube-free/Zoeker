# Versielog Treinplek

## Regels (voor elke Claude)
1. Wordt er een bestand geüpload? Lees dit logboek eerst. Heeft de ander iets veranderd, zeg dan in 1 tot 3 zinnen wat.
2. Na elke aanpassing: zet **bovenaan** het log een regel met versie, datum, wie en wat er veranderd is (kort, max 5 punten).
3. Verhoog `VERSIE` in `sw.js` (bijv. `trein-v6`) en gebruik hetzelfde nummer hier.
4. Teken met je eigen naam: **Claude A** of **Claude B**.
5. Zet open vragen en dingen die niet getest zijn onderaan.

## Bestanden
`index.html` (de app) · `sw.js` (offline) · `manifest.webmanifest` · `icon-*.png` · `plaatjes/` · `worker.js` (Cloudflare, niet op GitHub)

## Log (nieuwste bovenaan)
- **v8** · 10 okt 2026 · Claude B: in het deelplaatje heeft elk treindeel nu zijn eigen "Voorkant" en "Achterkant" (boven de bakken van dat deel; bij smalle delen "Voor"/"Achter"). Een trein met 1 deel ziet er hetzelfde uit als eerst. Alleen het deelplaatje is aangepast, niet het scherm in de app.
- **v7** · 10 okt 2026 · Claude B: tandwiel rechtsboven opent **Instellingen** (Animatie aan/uit + Zelf trein samenstellen verhuisd van het beginscherm); verversknop staat rechts als echte knop met tekst "Ververs" (hij zag er kapot uit door mijn eigen v6-stijl, die is weg); het grijze treinlogo staat er alleen nog als er niets anders op het scherm staat (puur CSS met `:has()`).
- **v6** · 10 okt 2026 · Claude B: animatie volgt niet meer de iPhone-instelling "Beperk beweging" (daardoor was hij onzichtbaar); knop "Animatie: aan/uit" onderaan de startpagina. Let op: Claude B = de Claude die dit log voor het eerst ziet; de eerdere regels (v2 t/m v5) zijn van de andere Claude, die als "Claude A" tekende. Het eerdere werk van Claude B (Kopieer-knop, testplek, ICE-stel 8001-8090) zit niet in deze versie.
- **v5** · 10 okt 2026 · Claude A: bakken rijden binnen zodra je een trein kiest; na delen rijden ze weg en ben je thuis (Andere trein is meteen, "beweging verminderen" slaat het over).
- **v4** · 10 okt 2026 · Claude A: nieuwe startindeling voor telefoon (Automatisch + Treinnummer/Station/Treinstel, grotere knoppen, grijs treinlogo); Automatisch = treinen bij jou via live locatie met filter IC/SPR/ICE, ruimer zoeken en "waarschijnlijk jouw trein"; `worker.js` toegevoegd (routes /nabij en /rit); ICE 3neo = 8001-8090.
- **v3** · Claude A: plaatjes erbij (SNG, SLT, ICM, ICE, GTW, LINT, FLIRT R-net, VIRM oud/flow, ICNG-B flow); kleuring kiezen bij VIRM en ICNG; stelnummers uit `Treinstelnummers_Nederland.xlsx`.
- **v2** · Claude A: iPhone-app (manifest, sw), tikken op de exacte plek, deelplaatje (voorkant/achterkant, delen), zelf samenstellen met echte combinaties, zoeken op stelnummer.
- **v1** · gebruiker: eerste `index.html` met drie delen per trein.

## Open / niet getest
- `worker.js` en de NS-veldnamen zijn niet met een echte NS-sleutel getest.
- Bij 3 of meer delen met veel bakken staan de nummers van 10 en hoger krap naast elkaar in het deelplaatje.
- Animaties alleen getest in een gewone browser (ook met "beperk beweging" aan), niet op een echte iPhone.
- Vragen: welke VIRM-nummers zijn oud/flow? ICNG-D (3351-3362) ook flow? R-net 2010-2015 = 3 bakken? SNG-4 boven 2750 (tot 2788)?
- Nog geen plaatje: WINK, Arriva-FLIRT, Valleilijn, TGV.
