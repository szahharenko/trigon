import React, { useState } from "react";

interface Props {
  setShowPrivacy: (show: boolean) => void;
}
const ContactUs: React.FC<Props> = ({setShowPrivacy}) => {
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [highLightCheckbox, setHighLightCheckbox] = useState(false);
  async function  postEmail() {
    const formData= {email, consent: true}
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    };
    try {
      const response = await fetch('/data/', requestOptions);
      const data = await response.json();
      if(data.OK) {
        setIsSubmitted(true);
      }
    } catch (error) {
      alert('Midagi läks valesti, proovi uuesti');
    }
  }
  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
    const isValid = /^\S+@\S+\.\S+$/.test(email);
    if (email === "" || !isValid) {
      setIsEmailValid(false);
      return;
    }
    setIsEmailValid(true);
  }

  function handleCheck() {
    setChecked(!checked);
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if(checked === false) {
      setHighLightCheckbox(true);
    }
    if(isEmailValid === false) {
      return;
    }
    postEmail();
  }

  return (
    <div className="dark-green-bg">
      <div className="container">
        <div className="contact-us">
            <div className="row">
              <div className="col-md-6">
                <h2>Hoia end meie tegemistega kursis</h2>
                <p>
                  Fondi viimane kuuraport:
                  <a target="_blank" rel="noreferrer" href="https://trigoncapital.com/fund-sheet/" className="button">VAATA SIIT</a>
                </p>
              </div>
              <div className="col-md-6">
                {
                  isSubmitted ?
                   <p className="success">Sinu meiliaadress jõudis kenasti kohale, aitäh!</p>
                   :
                   <>
                    <p>Sisesta oma e-mail igakuise kuuraporti saamiseks. Jooksvat seisu saad alati jälgida oma internetipangas.</p>
                    <form onSubmit={handleSubmit}>
                      <div className={`section ${isEmailValid || email === '' ? '' : 'invalid'}`}>
                        <input
                          name="email"
                          type="email" placeholder="Sisesta oma e-mail"
                          value={email}
                          onChange={handleEmailChange}
                          onBlur={handleEmailChange}
                        />
                        <button className="button">SAADAN</button>
                      </div>
                      <div className={`section-check ${checked ? 'checked' : ''} ${highLightCheckbox ? 'invalid' : ''}`}>
                        <label onClick={handleCheck}>
                          <span>
                            <span className='sq'></span>
                             Nõustun Trigoni <a onClick={() => setShowPrivacy(true)}  href="#n">Privaatsuspoliitikaga</a> *
                          </span>
                        </label>
                      </div>
                    </form>
                   </>
                }


              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;