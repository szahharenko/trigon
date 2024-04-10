import React, { useState } from 'react';
import './assets/web-app.scss';
import Welcome from './Welcome';
import CookieConsent from 'react-cookie-consent';
import { useCookies } from 'react-cookie';
import Privacy from './components/Privacy';

const App: React.FC = () => {
  const [cookies, setCookie] = useCookies(['disclaimer']);
  const [showPrivacy, setShowPrivacy] = useState(false);
  function togglePrivacy(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    setShowPrivacy(!showPrivacy);
  }
  return (
    <>
      <div className={`${cookies.disclaimer ? '' : 'no-scroll'} ${!showPrivacy ? '' : 'no-scroll'} main-app`}>
        <div className='app-container'>
          <Welcome setShowPrivacy={setShowPrivacy}></Welcome>
        </div>
      </div>
      <CookieConsent
        location="bottom"
        buttonText="OK"
        cookieName="myAwesomeCookieName2"
        style={{ background: "var(--Trigon-Light, #DDE7DA)", color: "var(--Trigon-Dark, #4e503b)"}}
        buttonClasses='button'
        buttonStyle={{
          padding: "0",
          border: "2px solid var(--Trigon-Middle, #00850E)",
          background: "var(--Trigon-Light, #00850E)",
          color: "#000",
          borderRadius: "24px",
          width: "100px",
        }}
        expires={150}
      >
        Siin veebilehel kasutatakse küpsiseid. Veebilehe kasutamist jätkates nõustute sellega ning veebilehe kasutustingimuste ja <a  href="#n" onClick={togglePrivacy}>privaatsusteatega</a>.
      </CookieConsent>
      {
        cookies.disclaimer !== true ?
          <div className='disclaimer'>
              <div>
                <h1>TEADE</h1>
                <p>Trigondividendifond.ee veebilehe kasutamiseks peate lugema järgmist teavet. See selgitab õiguslikke ja regulatiivseid piiranguid, mis kehtivad mis tahes investeeringutele sellel veebisaidil viidatud finantstoodetesse.</p>
                <p>Kui olete järgmise teabe läbi lugenud, klõpsake nuppu "Nõustun", kinnitamaks, et olete teabe läbi lugenud ja sellest aru saanud. Kui te ei soovi jätkata, klõpsake "Keeldun".</p>
                <h2>Veebilehe kasutustingimused:</h2>
                <p>Sellelt veebisaidilt leiate teavet AS Trigon Asset Management valitsetava investeerimisfondi Trigon Dividendifond kohta. Mitte midagi sellel veebilehel ei tohi käsitleda fondiosakute pakkumise või fondiosakute märkimise kutsena. Seda veebisaiti kasutades kinnitate, et olete järgmised tingimused läbi lugenud, neist aru saanud ja nõustute nendega. Teie juurdepääsu sellele veebisaidile reguleerib nende tingimuste sel ajal kehtiv versioon. Kõik vaidlused, mis on seotud nende tingimuste või teie veebisaidi kasutamisega, on reguleeritud Eesti Vabariigi seadustega.</p>
                <ol>
                  <li>Käesoleva veebilehe sisu on avaldanud AS Trigon Asset Management (registrikood 11339670; aadress Pärnu mnt 18, Tallinn 10141, Eesti).</li>
                  <li>AS Trigon Asset Management tegevusloaga eurofondi fondivalitseja ning allub Finantsinspektsiooni järelevalvele.</li>
                  <li>See veebisait, sealhulgas kogu saadaolev teave, ei ole suunatud ega mõeldud ühelegi isikule ega üksusele, kes on resident või kelle asukohariik on riigis, kus Trigon Dividendifondi kohta teabe levitamine rikuks kehtivaid seadusi või määrusi või kus AS Trigon Asset Management ei ole õigustatud fondi kohta infot avaldama.</li>
                  <li>See veebisait, sealhulgas kogu saadaolev teave, ei kujuta endast müügipakkumist ega sellel veebisaidil esitatud fondide osakute ostmise pakkumist.</li>
                  <li>Midagi sellel veebisaidil ei tohiks tõlgendada investeerimisnõustamisena või maksualase, õigusalase või muu nõuandena ning sellele ei tohi investeerimisotsuse tegemisel tugineda. Trigondividendifond.ee veebisaidile sisenejad peaksid sellel veebisaidil viidatud toodete sobivuse osas konsulteerima oma finantsnõustajatega.</li>
                  <li>Investeeringut kaaludes tuleb olla teadlik järgmistest riskidest: Investeeringute väärtus ja nendest saadav tulu võib nii langeda kui ka tõusta ning investor võib saada tagasi alginvesteeringust vähem; fondi senine tootlus ei garanteeri samasugust tootlust tulevikus.</li>
                  <li>Fondi prospektide ja muude dokumentide (nt investori põhiteabe dokumendid, majandusaasta aruanne, poolaastaaruanne) kehtivad versioonid on kättesaadavad sellel veebilehel ja soovi korral saab neid küsida AS’ilt Trigon Asset Management.</li>
                  <li>Selleks, et investeerimisotsuseid saaks teha informeeritud alusel, palume tutvuda asjakohaste fondi pakkumise alusdokumentidega. Enne investeerimist veenduge, et mõistate fondi olemust ja sellega kaasnevaid spetsiifilisi riske, et teha kindlaks, kas fond on teie jaoks sobiv toode.</li>
                  <li>AS Trigon Asset Management ei garanteeri, et see veebisait või mis tahes sisu on vigadeta, rahuldava kvaliteediga või mis tahes konkreetseks otstarbeks sobiv. Vastutate täielikult veebisaidi kasutamise ja mis tahes sisule tuginemise tagajärgede eest.</li>
                  <li>AS Trigon Asset Management loobub seadusega lubatud maksimaalses ulatuses igasugusest vastutusest teie ees, mis tuleneb teie veebisaidi kasutamisest. Eelkõige ei vastuta AS Trigon Asset Management teile investeeringu tulemusel tekkida võiva mis tahes otsese või kaudse kahju eest, mis tahes saamata jäänud kasumi või väärtuse kaotuse eest.</li>
                  <li>Kogu sellel veebisaidil olev sisu on kaitstud autoriõigusega. Kui AS Trigon Asset Management pole selleks nõusolekut andnud, ei tohi sellel veebisaidil või selle kaudu juurdepääsetavat sisu, materjale ega pilte ühelgi viisil kopeerida, reprodutseerida, uuesti avaldada, üles laadida, postitada, edastada ega levitada.</li>
                </ol>
                <div className="actions">
                  <button className='button' onClick={() => setCookie('disclaimer', 'true')}>Nõustun</button>
                  <a className='button' href="https://trigoncapital.com/">Keeldun</a>
                </div>
              </div>
          </div>
          :
          null
      }
      {
        showPrivacy ? <Privacy onClose={() => setShowPrivacy(false)}></Privacy> : null
      }
    </>
  );
}

export default App;