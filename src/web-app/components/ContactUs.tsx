import React from "react";


const ContactUs: React.FC = () => {
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
                <p>Sisesta oma e-mail igakuise kuuraporti saamiseks. Jooksvat seisu saad alati jälgida oma internetipangas.</p>
                <form>
                  <div className="section">
                    <input type="email" placeholder="Sisesta oma e-mail" />
                    <button className="button">SAADAN</button>
                  </div>
                  <div className="section-check">
                    <label className="checkbox">
                      <input type="checkbox" />
                      <span>Nõustun Trigoni Privaatsuspoliitikaga *</span>
                    </label>
                  </div>
                </form>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;