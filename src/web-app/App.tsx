import React from 'react';
import './assets/web-app.scss';
import Welcome from './Welcome';
import CookieConsent from 'react-cookie-consent';
import { useCookies } from 'react-cookie';

const App: React.FC = () => {
  const [cookies, setCookie] = useCookies(['disclaimer']);
  console.log(cookies);
  return (
    <>
      <div className={`${cookies.disclaimer ? '' : 'no-scroll'} main-app`}>
        <div className='app-container'>
          <Welcome></Welcome>
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
        We use cookies to collect information about you. We use this to to give you a better experience of our website.
      </CookieConsent>
      {
        cookies.disclaimer !== true ?
          <div className='disclaimer'>
              <div>
		            <h1>Disclaimer</h1>
                <p>Welcome to the Trigon Capital website. You must read the following information for your own protection and benefit. It explains the legal and regulatory restrictions which apply to any investment in the products referred to in this website. When you have read the following information click on the “I Accept”’ button to acknowledge that you have read and understood the information and to continue to the website menu. If you do not wish to proceed, please click on “I decline” and this will return you to the Homepage.</p>
                <p>Conditions of Use:</p>
                <p>Nothing on this web page may be considered as part of an offer of fund units or an invitation to subscribe for fund units.</p>
                <p>By using this website you confirm that you have read, understood and accepted the following conditions. Your access to this website is governed by the version of these conditions then-in-force. All disputes relating to these conditions or your use of the website are governed by the laws of the Republic of Estonia.</p>
                <p>1.The distribution of the information contained on this website in certain jurisdictions may be restricted by law, including but not limited to the United States or US Persons (as defined in Regulation S under the U.S. Securities Act 1933).</p>
                <p>2. The provision of the information in this web site does not constitute an offer of securities to any person in the United States or to any U.S. Person as such term is defined under the Securities Act of 1933, as amended. The information contained in this site about Trigon Capital and/or any of its affiliates is not directed to any person in the United States. The funds described for informational purposes only herein are not offered for sale to private investors in the USA, its territories, possessions or protectorates under its jurisdiction.</p>
                <p>3. The information contained herein does not constitute a distribution, an offer to sell, or the solicitation of an offer to buy any securities in any jurisdiction in which such distribution or offer is not authorized.</p>
                <p>4. Nothing in this website should be construed as investment, tax, legal or other advice nor is it to be relied upon in making an investment decision. Those accessing the Trigon Capital website should consult their financial advisers regarding the suitability of any of the products referred to on this website. The value of investments and the income from them may go down as well as up and an investor may receive back less than the original investment; past performance is not necessarily a guide to future performance.</p>
                <p>5. The website is provided to you on an “as is” basis. Trigon Capital does not guarantee that this website or any content is error-free, of satisfactory quality or suitable for any particular purpose, accurate, up-to-date, or available at all times. You are entirely responsible for your use of the website, and for the consequences of relying on any content.</p>
                <p>6. To the maximum extent permitted by law, Trigon Capital disclaims all liability to you arising out of your use of the website. In particular, Trigon Capital shall not be liable for any direct or indirect loss or damage to you, any loss of profits, loss of business, revenue, data, goodwill, or any consequential loss or damage.</p>
                <p>7. All content on this website is protected by copyright. Unless consent is given by Trigon Capital, no content, materials or images accessible on or via this website may be copied, reproduced, republished, uploaded, posted, transmitted or distributed in any way.</p>
                <div className="actions">
                  <button className='button' onClick={() => setCookie('disclaimer', 'true')}>I accept</button>
                  <a className='button' href="https://trigoncapital.com/">I decline</a>
                </div>
              </div>
          </div>
          :
          null
      }
    </>
  );
}

export default App;