import React, { useState } from "react";


const ContactUs: React.FC = () => {

  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [highLightCheckbox, setHighLightCheckbox] = useState(false);

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
    if (email === "" || !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }
  }
  function handleCheck(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
    setChecked(!checked);
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if(checked === false) {
      setHighLightCheckbox(true);
      return
    }
    if(isEmailValid === false) return;
    setIsSubmitted(true);
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
                  <a href="#h" className="button">VAATA SIIT</a>
                </p>
              </div>
              <div className="col-md-6">
                {
                  isSubmitted ?
                   <p className="success">Aitäh, et tellisite meie uudiskirja! Hindame teie huvi ja ootame põnevusega väärtusliku sisu jagamist teiega.</p>
                   :
                   <>
                    <p>Sisesta oma e-mail igakuise kuuraporti saamiseks. Jooksvat seisu saad alati jälgida oma internetipangas.</p>
                    <form onSubmit={handleSubmit}>
                      <div className="section">
                        <input
                          name="email"
                          className={isEmailValid || email === "" ? "" : "invalid"}
                          type="email" placeholder="Sisesta oma e-mail"
                          value={email}
                          onChange={handleInput}
                        />
                        <button className="button">SAADAN</button>
                      </div>
                      <div className="section-check">
                        <label className={highLightCheckbox ? "invalid checkbox" : "checkbox"}>
                          <input
                            value={checked.toString()}
                            onChange={handleCheck}
                            type="checkbox"
                            name="private"
                          />
                          <span>
                            Nõustun Trigoni Privaatsuspoliitikaga *
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