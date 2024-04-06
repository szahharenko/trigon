import React from "react";


const ContactUs: React.FC = () => {
  return (
    <div className="contact-us">
      <div className='container'>
          <div className="row">
            <div className="col-md-6">
              <h2>Hoia end meie tegemistega kursis</h2>
              <p>
                Fondi viimane faktileht:
                <a href="#h" className="button">LOE SIIT</a>
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Sisesta oma e-mail, sest korra kuus saadame detailse ülevaatega faktilehe oma fondist. Jooksvat seisu võid alati jälgida oma internetipangas.
              </p>
              <form>
                <input type="email" placeholder="Sisesta oma e-mail" />
                <button className="button">SAADAN</button>
              </form>
            </div>
          </div>
      </div>
    </div>
  );
}

export default ContactUs;