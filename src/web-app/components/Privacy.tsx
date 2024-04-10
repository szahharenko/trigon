import React from 'react';
interface Props {
    onClose: () => void;
}
const Privacy: React.FC<Props> = ({onClose}) => {
  return (
    <div className='privacy'>
        <span className="close" onClick={onClose}>&times;</span>
        <div className='container'>
            <div className='privacy-content'>
                <h1>Privaatsusteade ja kodulehe kasutustingimused</h1>
                <h2>VEEBILEHE KASUTUSTINGIMUSED</h2>
                <p>Sellelt veebisaidilt leiate teavet AS Trigon Asset Management valitsetava investeerimisfondi Trigon Dividendifond kohta. Mitte midagi sellel veebilehel ei tohi käsitleda fondiosakute pakkumise või fondiosakute märkimise kutsena. Seda veebisaiti kasutades kinnitate, et olete järgmised tingimused läbi lugenud, neist aru saanud ja nõustute nendega. Teie juurdepääsu sellele veebisaidile reguleerib nende tingimuste sel ajal kehtiv versioon. Kõik vaidlused, mis on seotud nende tingimuste või teie veebisaidi kasutamisega, on reguleeritud Eesti Vabariigi seadustega. </p>
                1)	Käesoleva veebilehe sisu on avaldanud AS Trigon Asset Management (registrikood 11339670; aadress Pärnu mnt 18, Tallinn 10141, Eesti). <br/>
                2)	AS Trigon Asset Management tegevusloaga eurofondi fondivalitseja ning allub Finantsinspektsiooni järelevalvele. <br/>
                3)	See veebisait, sealhulgas kogu saadaolev teave, ei ole suunatud ega mõeldud ühelegi isikule ega üksusele, kes on resident või kelle asukohariik on riigis, kus Trigon Dividendifondi kohta teabe levitamine rikuks kehtivaid seadusi või määrusi või kus AS Trigon Asset Management ei ole õigustatud fondi kohta infot avaldama.<br/>
                4)	See veebisait, sealhulgas kogu saadaolev teave, ei kujuta endast müügipakkumist ega sellel veebisaidil esitatud fondide osakute ostmise pakkumist.<br/>
                5)	Midagi sellel veebisaidil ei tohiks tõlgendada investeerimisnõustamisena või maksualase, õigusalase või muu nõuandena ning sellele ei tohi investeerimisotsuse tegemisel tugineda. Trigondividendifond.ee veebisaidile sisenejad peaksid sellel veebisaidil viidatud toodete sobivuse osas konsulteerima oma finantsnõustajatega.<br/>
                6)	Investeeringut kaaludes tuleb olla teadlik järgmistest riskidest: Investeeringute väärtus ja nendest saadav tulu võib nii langeda kui ka tõusta ning investor võib saada tagasi alginvesteeringust vähem; fondi senine tootlus ei garanteeri samasugust tootlust tulevikus. <br/>
                7)	Fondi prospektide ja muude dokumentide (nt investori põhiteabe dokumendid, majandusaasta aruanne, poolaastaaruanne) kehtivad versioonid on kättesaadavad sellel veebilehel ja soovi korral saab neid küsida AS’ilt Trigon Asset Management. <br/>
                8)	Selleks, et investeerimisotsuseid saaks teha informeeritud alusel, palume tutvuda asjakohaste fondi pakkumise alusdokumentidega. Enne investeerimist veenduge, et mõistate fondi olemust ja sellega kaasnevaid spetsiifilisi riske, et teha kindlaks, kas fond on teie jaoks sobiv toode.<br/>
                9)	AS Trigon Asset Management ei garanteeri, et see veebisait või mis tahes sisu on vigadeta, rahuldava kvaliteediga või mis tahes konkreetseks otstarbeks sobiv. Vastutate täielikult veebisaidi kasutamise ja mis tahes sisule tuginemise tagajärgede eest.<br/>
                10)	AS Trigon Asset Management loobub seadusega lubatud maksimaalses ulatuses igasugusest vastutusest teie ees, mis tuleneb teie veebisaidi kasutamisest. Eelkõige ei vastuta AS Trigon Asset Management teile investeeringu tulemusel tekkida võiva mis tahes otsese või kaudse kahju eest, mis tahes saamata jäänud kasumi või väärtuse kaotuse eest.<br/>
                11)	Kogu sellel veebisaidil olev sisu on kaitstud autoriõigusega. Kui AS Trigon Asset Management pole selleks nõusolekut andnud, ei tohi sellel veebisaidil või selle kaudu juurdepääsetavat sisu, materjale ega pilte ühelgi viisil kopeerida, reprodutseerida, uuesti avaldada, üles laadida, postitada, edastada ega levitada.<br/>


                <h2>PRIVAATSUSTEADE</h2>
                <p>Käesolev privaatsusteade (edaspidi Reeglid) reguleerib isikuandmete töötlemist ning kirjeldab, kuidas Trigon Dividendifondi valitseja AS Trigon Asset Management (edaspidi Trigon) kui vastutav töötleja töötleb teie isikuandmeid. Veebilehe kasutamisega kinnitate, et olete käesolevate Reeglitega tutvunud, neist aru saanud ning aktsepteerite neid.</p>

                <p>1.	Mõisted</p>
                1.1	Isikuandmed on mis tahes tuvastatud või tuvastatav teave füüsilise isiku kohta. Tuvastatav füüsiline isik on isik, keda saab otseselt või kaudselt tuvastada, eelkõige sellise identifitseerimistunnuse põhjal nagu nimi, isikukood, asukohateave, võrguidentifikaator või selle füüsilise isiku ühe või mitme füüsilise, füsioloogilise, geneetilise, vaimse, majandusliku, kultuurilise või sotsiaalse tunnuse põhjal.<br/>
                1.2	Isikuandmete töötlemine on iga isikuandmetega tehtav toiming, sealhulgas nende kogumine, korrastamine, säilitamine, muutmine, avalikustamine, juurdepääsu võimaldamine isikuandmetele, päringute teostamine ja väljavõtete tegemine, kasutamine, edastamine, ristkasutamine, ühendamine, sulgemine, kustutamine või hävitamine. <br/>
                1.3	Klient on iga füüsiline või juriidiline isik, kes kasutab, on kasutanud või on avaldanud tahet kasutada Trigoni poolt osutatavaid teenuseid, sh omandanud Trigoni valitsetava investeerimisfondi osakuid või avaldanud selleks huvi.<br/>
                1.4	Vastutav töötleja on füüsiline või juriidiline isik, avaliku sektori või KOV asutus, kes on esmaseks isikuandmete kogujaks. Vastutav töötleja määrab kindlaks isikuandmete töötlemise eesmärgid ja vahendid. Töötleja on ka Trigon. <br/>
                1.5	Kolmas isik on iga isik, kes ei ole Klient, Trigoni ega Trigon grupi töötaja.<br/>
                1.6	Volitatud töötleja on isik, kes töötleb Trigoni nimel Kliendi isikuandmeid.<br/>
                1.7	Isikuandmetega seotud rikkumine on nõuete rikkumine, mis põhjustab edastatavate, salvestatud või muul viisil töödeldavate isikuandmete juhusliku või ebaseadusliku hävitamise, kaotsimineku, muutmise või loata avalikustamise või neile juurdepääsu.<br/>

                <p>2.	Põhimõtted</p>
                2.1	Trigoni ja meie nimel isikuandmeid töötlevad isikud lähtuvad isikuandmete töötlemisel järgmistest põhimõtetest: <br/>
                2.1.1	seaduslikkuse, õigluse ja läbipaistvuse põhimõte – töötlemine on seaduslik, õiglane ja andmesubjektile läbipaistev; <br/>
                2.1.2	eesmärgi piirangu põhimõte – isikuandmeid kogutakse täpselt ja selgelt kindlaksmääratud ning õiguspärastel eesmärkidel ning neid ei töödelda hiljem viisil, mis on nende eesmärkidega vastuolus; <br/>
                2.1.3	võimalikult väheste andmete kogumise põhimõte – isikuandmed on asjakohased, olulised ja piiratud sellega, mis on vajalik nende töötlemise eesmärgi seisukohalt; <br/>
                2.1.4	õigsuse põhimõte – isikuandmed on õiged ja vajaduse korral ajakohastatud ning et võetakse kõik mõistlikud meetmed, et töötlemise eesmärgi seisukohast ebaõiged isikuandmed kustutaks või parandataks viivitamata. Klient teavitab Trigonit isikuandmetega seotud muudatustest; <br/>
                2.1.5	säilitamise piirangu põhimõte – isikuandmeid säilitatakse kujul, mis võimaldab andmesubjekte tuvastada ainult seni, kuni see on vajalik selle eesmärgi täitmiseks, milleks isikuandmeid töödeldakse; <br/>
                2.1.6	usaldusväärsuse ja konfidentsiaalsuse põhimõte – isikuandmeid töödeldakse viisil, mis tagab isikuandmete asjakohase turvalisuse, sealhulgas kaitseb loata või ebaseadusliku töötlemise eest ning juhusliku kaotamise, hävitamise või kahjustumise eest, kasutades asjakohaseid tehnilisi või korralduslikke meetmeid. <br/>

                <p>3.	Isikuandmete töötlemise turvalisus </p>
                3.1	Trigon rakendab isikuandmete kaitseks erinevaid organisatsioonilisi, füüsilisi ja infotehnoloogilisi turvameetmeid. Trigon on isikuandmete töötlemise turvalisuse tagamiseks kehtestanud juhised ja protseduurireeglid, mis hõlmavad töötajate, informatsiooni, IT-infrastruktuuri, ettevõtte siseste ja avalike võrkude ning ka kontorihoonete ja tehniliste seadmete kaitset. <br/>
                3.2	Trigon tagab, et isikuandmetega kokku puutuvad isikud on läbinud asjakohase koolituse ja saanud isikuandmete turvaliseks töötlemiseks juhendeid. <br/>
                3.3	Trigon võib teatud juhtudel kasutada isikuandmete töötlemiseks volitatud töötlejaid. Trigon tagab, et volitatud töötlejad töötlevad isikuandmeid meie juhiste kohaselt ja kooskõlas kohalduva õigusega ning rakendavad asjakohaseid turvameetmeid. <br/>

                <p>4.	Kliendi isikuandmete töötlemise õiguslik alus ja eesmärgid </p>
                4.1	Trigon töötleb Kliendi isikuandmeid sõlmitud lepingu täitmiseks ja täitmise tagamiseks, seadusest tuleneva kohustuse täitmiseks, õigustatud huvi korral Kliendi nõusoleku alusel. <br/>
                4.2	Trigon töötleb lepingu täitmiseks Kliendi isikuandmeid selleks, et:  <br/>
                4.2.1	kontrollida ja vajaduse korral parandada ja/või täiendada ning uuendada Kliendi poolt esitatud isikuandmeid. <br/>
                4.2.2	Isik identifitseerida. <br/>
                4.2.3	osutada fondide valitsemise teenust ja võimaldada Klientidele fondi osakute ostmist ja müümist; <br/>
                4.2.4	määrata teenusetasu suurusi; <br/>
                4.2.5	lepingu rikkumise korral võlgade sissenõudmise menetluseks ja võlateatiste edastamiseks; <br/>
                4.2.6	kaitsa Trigoni ja/või Kliendi huve; <br/>
                4.2.7	hoida ära Trigonile kahju tekitamine; <br/>
                4.3	Trigon töötleb isikuandmeid seadusest tulenevate kohustuste täitmiseks selleks, et:  <br/>
                4.3.1	otsustada, kas ja mis tingimustel osutada Kliendile teenust; <br/>
                4.3.2	identifitseerida Klient ja hinnata Kliendi usaldusväärsust; <br/>
                4.3.3	vähendada või hoida ära riske; <br/>
                4.3.4	tõkestada rahapesu ja terrorismi rahastamist ning täita õigusaktidest ja järelevalveorganite ja vastava valdkonna spetsialistide soovitustest tulenevaid nõudeid; <br/>
                4.3.5	täita õigusaktidest tulenevaid kohustusi (nt andmete edastamine Finantsinspektsioonile, uurimisasutustele, notarile, Maksu- ja Tolliametile); <br/>
                4.3.6	vahetada Kliendi isikuandmeid Eesti ja välisriikide krediidi- ja finantseerimisasutustega. <br/>
                4.4	Trigon töötleb isikuandmeid õigustatud huvi alusel selleks:  <br/>
                4.4.1	Et edastada fondide tegevusaruandeid Klientidele (fondide investoritele); <br/>
                4.4.2	kontrollida, arendada või hooldada Trigon grupi IT-süsteeme ja -programme; <br/>
                4.4.3	teha statistilist- ja finantsanalüüsi. <br/>
                4.5	Trigon töötleb nõusoleku alusel andmeid selleks, et:  <br/>
                4.5.1	pakkuda Kliendile Trigoni teenuseid ja tooteid (nt uute teenuste või toodete pakkumine või tutvustamine); <br/>
                4.5.2	edastada Kliendile infot Trigoni teenuste ja toodetega seotud uuenduste kohta. <br/>

                <p>5.	Isikuandmete liigid </p>
                5.1	Kliendi isikuandmeid võib Trigon koguda Kliendilt ja välistest allikatest, milleks on näiteks avalikud ja eraõiguslikud registrid ning muud kolmandad isikud. <br/>
                5.2	Kliendi isikuandmete kategooriad, mida Trigon eelkõige, kuid mitte ainult, kogub ja töötleb, on järgmised:  <br/>
                5.2.1	Kliendi tuvastamise andmed (sh nimi, sünniaeg või isikukood, andmed isikut tõendava dokumendi kohta (nt passi või ID kaardi koopia) jms); <br/>
                5.2.2	Kliendi kontaktandmed (sh aadress, telefoninumber, e-posti aadress, suhtluskeel jne); <br/>
                5.2.3	andmed Kliendi maksuresidentsuse kohta, nt andmed elukohariigi, maksukohustuslase identifitseerimisnumbri, kodakondsuse kohta; <br/>
                5.2.4	andmed Kliendi tegevusala, õpingute või töökoha kohta; <br/>
                5.2.5	Kliendi finantsandmed (mh sissetulek, vara, kohustused); <br/>
                5.2.6	andmed Kliendi tehingute, tehingupartnerite ja nendega seotud lepingute ning lepingute täitmise või mittenõuetekohase täitmise kohta; <br/>
                5.2.7	andmed Kliendi eelistuste, harjumuste ja rahulolu kohta (nt andmed teenuste kasutamise aktiivsuse, kasutatavate teenuste, Kliendi kaebuste kohta); <br/>
                5.2.8	andmed Kliendi vara päritolu kohta (nt andmed tööandja, tegevusvaldkonna, tehingupartnerite, äritegevuse kohta jne); <br/>
                5.2.9	andmed Kliendi usaldusväärsuse kohta (nt andmed lepingute täitmise või mittekohase täitmise kohta, Trigonile või muule isikule tekitatud kahju kohta, rahapesuga, terrorismi rahastamisega või kuritegevusega seotuse kohta jne); <br/>
                5.2.10	seadusest tuleneva kohustuse täitmisel saadud andmed (nt uurimisorganite, notarite, maksuhalduri, kohtu järelpärimistest, kohtutäiturite, pankrotihalduri nõuetest tulenevad andmed jne); <br/>
                5.2.11	Internetiandmed: kasutusseansi andmed, küpsised, veebilehe logiandmed ja IP aadressid. <br/>

                <p>6.	Vastutav või volitatud töötleja ja andmete kogumine </p>
                6.1	Trigon on erinevates isikuandmete töötlemise protsesside isikuandmete vastutavaks või volitatud töötlejaks ning Trigon järgib isikuandmete konfidentsiaalsuse tagamise põhimõtteid ning avalikustab isikuandmeid vaid rangelt piiratud ulatuses, tagamaks isikute privaatsusõigusi. <br/>
                6.2	Isikuandmete muutmiseks ja töötlemiseks on ligipääs ainult Trigoni poolt volitatud isikutel. <br/>
                6.3	Trigon töötleb isikuandmeid, mis on saadud otse andmesubjektilt (st isikult, kes on isikuandmed avaldanud) või kaudselt läbi juriidilise isikust kliendi. Kaudselt, ilma andmesubjekti osaluseta saadud isikuandmeid töötleb Trigon ainult siis, kui selleks on seaduslik alus. <br/>

                <p>7.	Kliendi isikuandmete edastamine kolmandatele isikutele</p>
                7.1	Trigon avalikustab või edastab Kliendi isikuandmeid piiratud rangelt vajalikkusega eesmärkidest lähtuvalt alljärgnevatele kolmandatele isikutele: <br/>
                7.1.1	teistele Trigon gruppi kuuluvatele ettevõtetele; <br/>
                7.1.2	nii Eesti kui ka välisriigi üksustele, kes on seotud Kliendiga sõlmitud lepingu täitmisega; <br/>
                7.1.3	Trigoni audiitoritele, õigusnõustajatele ja muudele teenuse osutajatele, kui Kliendi isikuandmed on neile vajalikud, et osutada vastavat teenust, sh posti- ja kullerteenuse osutajad; <br/>
                7.1.4	teenuse osutajatele, kellele Trigon on õigusaktis sätestatud tingimustel osaliselt või tervikuna oma põhitegevuse või seda otseselt toetava tegevuse edasi andnud (nt investeerimisfondi osakute registri pidamine, osakutehingute korraldamine); <br/>
                7.1.5	andmekogude pidajatele, kellele Trigon edastab Kliendi isikuandmeid õigusakti alusel; <br/>
                7.1.6	avaliku andmekogu pidajale päringu tegemiseks; <br/>
                7.1.7	volitatud töötlejatele; <br/>
                7.1.8	õigusaktist tuleneva kohustuse täitmiseks nt uurimisasutustele, Finantsinspektsioonile, rahapesu andmebüroole jne; <br/>
                7.1.9	Trigoni finantskonsultantidele või muudele teenuse osutajatele, kui Kliendi isikuandmed on neile vajalikud, et osutada Trigonile kvaliteetset teenust, ning tingimusel, et sellised isikud täidavad Trigoni poolt ettenähtud organisatsioonilisi, füüsilisi ja infotehnilisi nõudeid Kliendi isikuandmete konfidentsiaalsena hoidmise ja kaitse kohta. <br/>
                7.2	Trigon avalikustab Kliendi isikuandmeid kolmandatele isikutele ainult ulatuses, millises see on vajalik Reeglite punktis 4 toodud eesmärkide saavutamiseks. <br/>

                <p>8.	Kliendi isikuandmete edastamine välisriiki</p>
                8.1 Kliendi isikuandmeid töödeldakse Euroopa Liidu/Euroopa Majanduspiirkonna (EL/ EMP) riikides, kus on piisav andmekaitse tase. <br/>
                8.2 Kliendi isikuandmete edastamine väljapoole ELi/EMPi võib toimuda järgmistel tingimustel: <br/>
                o	juhul kui kolmas isik taotleb teavet, mis on saadud või loodud seaduse või selle alusel antud õigusaktides sätestatud avalikke ülesandeid täites ja taotletav teave ei sisalda eriliigilisi isikuandmeid; <br/>
                o	Euroopa Komisjon on hinnanud väljaspool ELi/EMPi asuvas riigi andmekaitse taseme piisavaks; <br/>
                o	Ameerika Ühendriikides asuv vastuvõtja on sertifitseeritud andmekaitseraamistiku Privacy Shield alusel; <br/>
                o	Andmekaitse Inspektsioon on andnud loa andmete edastamiseks. <br/>

                <p>9.	Andmete säilitamise periood</p>
                9.1	Trigon säilitab Kliendi isikuandmeid kujul, mis võimaldab Klienti tuvastada ainult seni, kuni see on vajalik selle eesmärgi täitmiseks, milleks isikuandmeid töödeldakse, välja arvatud juhul kui Trigonil on seadusest tulenev nõue, mis sätestab teistsugused isikuandmete säilitamise tähtajad: <br/>
                9.1.1	raamatupidamise algdokumente tuleb raamatupidamise seaduse alusel säilitada 7 aastat; <br/>
                9.1.2	rahapesu ja terrorismi rahastamise tõkestamise seaduse alusel kogutud andmed säilitatakse 5 aastat peale pärast ärisuhte lõppu; <br/>
                9.1.3	Trigon säilitab muid andmeid vastavalt ettevõtte isikuandmete töötlemise registris märgitud säilitustähtaja lõpuni; <br/>
                9.1.4	Trigon hävitab ja/või kustutab turvaliselt kõik isikuandmed, mille säilitamiseks eesmärk puudub või säilitustähtaeg on möödunud. <br/>

                <p>10.	Eraisikust Kliendi õigused</p>
                10.1	Eraisikust Kliendil on seoses Kliendi isikuandmete töötlemisega alljärgnevad õigused: <br/>
                10.1.1	taotleda enda isikuandmete parandamist, kui need on ebapiisavad, puudulikud või valed; <br/>
                10.1.2	esitada vastuväiteid enda isikuandmete töötlemise suhtes, kui isikuandmete kasutamine põhineb õigustatud huvil (nt turunduspakkumiste saamine või küsitlustes osalemine) või nõusolekul; <br/>
                10.1.3	saada infot, kas Trigon töötleb tema isikuandmeid ning juhul, kui töötleb, siis saada eelnimetatud andmetele juurdepääs; <br/>
                10.1.4	taotleda enda isikuandmete töötlemise piiramist; <br/>
                10.1.5	saada Trigonilt digitaliseeritud kujul töödeldavaid isikuandmed, mis käivad tema kohta, mida Trigon töötleb nõusoleku alusel või lepingu täitmiseks ning mis Klient on Trigonile ise esitanud ja/või kui tehniliselt võimalik, taotleda nende andmete edastamist teisele teenusepakkujale (andmete ülekantavus); <br/>
                10.1.6	võtta tagasi nõusoleku alusel töödeldavate isikuandmete töötlemise nõusolek. Nõusoleku tagasivõtmine ei kehti tagasiulatuvalt; <br/>
                10.1.7	taotleda, et tema suhtes ei võetaks vastu otsust, mis põhineb üksnes automatiseeritud otsustamisel, sealhulgas profiilianalüüsil, kui see toob kaasa teda puudutavaid õiguslikke tagajärgi või avaldab talle märkimisväärset mõju. <br/>
                10.1.8	esitada kaebus Kliendi isikuandmete kasutamise kohta Eesti Andmekaitse Inspektsioonile (veebileht: <a href="https://www.aki.ee/">www.aki.ee</a>), kui Klient leiab, et tema isikuandmete töötlemine riivab tema õiguseid ja huve kohalduva õiguse alusel. <br/>

                <p>11.	Küpsised </p>
                11.1	 Trigoni poolt hallatav veebileht <a href="https://www.trigoncapital.com">www.trigoncapital.com</a> ja <a href="https://www.trigondividendifond.ee">www.trigondividendifond.ee</a> kasutab küpsiseid, et teha isikute kasutajakogemus veebilehel mugavamaks ja kasutamine sujuvamaks. <br/>
                11.2	Küpsis on väike tekstifail, mille veebilehitseja automaatselt isiku kasutatavasse seadmesse salvestab. <br/>
                11.3	Küpsiseid kasutame anonüümse ja üldistatud statistika kogumiseks veebilehe külastajate arvu kohta, infot kuidas veebilehte kasutatakse, selleks, et muuta veebilehti veelgi kasutajasõbralikumaks ja paremaks. <br/>
                11.4	Küpsiste kasutamise mittenõustumisega on võimalik seadmes salvestatud küpsised blokeerida. Selleks tuleb muuta veebilehitseja vastavaid seadmed. Küpsiste mittekasutamisel ei pruugi veebilehed korrektselt töötada ja kõik teenused ei pruugi olla kättesaadavad. <br/>

                <p>12.	Reeglite kehtivus ja muutumine </p>
                12.1	Reeglid on Klientidele kättesaadavad Trigoni kontorites ja veebilehel <a href="https://www.trigoncapital.com">www.trigoncapital.com</a> ja <a href="https://www.trigondividendifond.ee">www.trigondividendifond.ee</a>. <br/>
                12.2	Trigon võib Reegleid igal ajal ühepoolselt muuta, arvestades õigusaktides sätestatut. <br/>
                12.3	Trigon teavitab Reeglite muudatustest Kliente Trigoni veebilehel <a href="https://www.trigoncapital.com">www.trigoncapital.com</a> ja <a href="https://www.trigondividendifond.ee">www.trigondividendifond.ee</a> või muul viisil (näiteks saates e-kirja või kirja Trigonile teadaolevatel Kliendi kontaktandmetel vähemalt üks kuu enne muudatuste jõustumist). <br/>

                <p>13.	Trigoni kontaktandmed </p>
                13.1	Kliendid võivad Trigoniga ühendust võtta seoses päringutega ja nõusolekute tühistamisega ning eraisikust Kliendid võivad lisaks nõuda Kliendi isikuandmete töötlemisel enda õiguste realiseerimist ning esitada kaebuseid Kliendi isikuandmete kasutamise kohta alljärgnevatel kontaktidel: <br/>

                <p>14.	Privaatsusteate ja kasutustingimuste muutmine</p>
                14.1	Käesolev privaatsusteade ja kasutustingimused on avaldatud Trigoni veebilehel ja on kehtivad alates 10.04.2024. Reeglite muutmisel jõustuvad muudatused ja täiendused uue versiooni avaldamisel meie veebilehel. <br/>
                <br/>
                <p>AS Trigon Capital<br/>
                Pärnu mnt 18<br/>
                Tallinn 10141<br/>
                <a href="mailto:trigon@trigoncapital.com">trigon@trigoncapital.com</a><br/>
                </p>

            </div>
        </div>
    </div>
  );
}
export default Privacy;
