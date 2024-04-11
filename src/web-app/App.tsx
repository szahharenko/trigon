import React, { useState } from 'react';
import './assets/web-app.scss';
import Welcome from './Welcome';
import CookieConsent from 'react-cookie-consent';
import Privacy from './components/Privacy';

const App: React.FC = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  function togglePrivacy(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    setShowPrivacy(!showPrivacy);
  }
  return (
    <>
      <div className={`${!showPrivacy ? '' : 'no-scroll'} main-app`}>
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
        showPrivacy ? <Privacy onClose={() => setShowPrivacy(false)}></Privacy> : null
      }
    </>
  );
}

export default App;