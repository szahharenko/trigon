import React from "react";
import ham from "../assets/header-assets-management.svg";

interface Props {
  setShowPrivacy: (show: boolean) => void;
}
const Footer: React.FC<Props> = ({setShowPrivacy}) => {
  return (
      <div className="footer">
          <img src={ham} alt=""/>
          <ul>
              <li><a target="_blank" rel="noreferrer" href="https://trigoncapital.com/et/asset-management/">Trigoni
                  fondidest</a></li>
              <li><a target="_blank" rel="noreferrer" href="https://trigoncapital.com/et/dokumendid/">Fondi
                  dokumendid</a></li>
              <li><a target="_blank" rel="noreferrer"
                     href="https://trigoncapital.com/et/asset-management/investeerimisfilosoofia/">Investeerimisfilosoofia</a>
              </li>
              <li><a target="_blank" rel="noreferrer"
                     href="https://trigoncapital.com/et/uudised-ja-auhinnad/">Uudised</a></li>
          </ul>
          <p>
              <span className="mobile-row"><strong>Telefon</strong>: <a href="tel:003726679200">+372 667 9200</a></span>
              <span className="mobile-row"><strong>E-mail</strong>: <a
                  href="mailto:funds@trigoncapital.com">funds@trigoncapital.com</a></span>
          </p>
          <p>
          <span className="mobile-row">
            <a onClick={() => setShowPrivacy(true)}>Privaatsuspoliitika</a>
          </span>
              <span className="mobile-row">
          <a target="_blank" rel="noreferrer" href="#n" className="mobile-row">Küpsiste kasutamise põhimõtted</a>
          </span>
          </p>
      </div>
  );
}

export default Footer;