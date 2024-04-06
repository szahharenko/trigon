import React from 'react';
import hero from '../assets/Hero_illustration_man.png';
import heroGraph from '../assets/hero-graph.png';
import ham from '../assets/header-assets-management.svg'
import lipper from '../assets/lipper.svg';
import swedButton from '../assets/swed-button.svg';
import lhvButton from '../assets/lhv-button.svg';

const Header: React.FC = () => {
  return (
    <>
      <div className='head-bar'>
        <img src={ham} alt=""/>
      </div>
      <div className='head-promo section'>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5">
              <h1>Hästi hoitud saladus</h1>
              <p>Trigon Dividendifond teenis eelmisel aastal 35.7% tulu, mis on mäekõrguselt üle kõikidest Eesti pensionifondidest. Nelja aastaga on tootlus olnud enam kui 80%. Nüüd on võimalus meie edukatesse fondidesse investeerida kõigil.</p>
              <p>
                <a href="#n" className='bank-button'><img src={lhvButton} alt="" /></a>
                <a href="#n" className='bank-button'><img src={swedButton} alt="" /></a>
              </p>
              <p>Fondi eelmiste perioodide tootlus ei garanteeri fondi järgmiste perioodide tootlust. Tutvu fondi prospekti ja põhiteabega trigoncapital.com ja pea nõu asjatundjaga.</p>
            </div>
            <div className="col-lg-7 col-md-7">
              <div className='relative'>
                <img src={hero} className='hero' alt="" />
                <img src={lipper} alt="" className='lipper' />
                <img src={heroGraph} alt="" className='hero-graph' />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Header;