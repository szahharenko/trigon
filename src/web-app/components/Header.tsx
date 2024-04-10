import React from 'react';
import hero from '../assets/Hero_illustration_man.png';
import heroM from '../assets/hero-mobile.png';

import heroGraph from '../assets/hero-graph.png';
import ham from '../assets/header-assets-management.svg'
import lipper from '../assets/lipper.svg';
import swedButton from '../assets/swed-button.svg';
import lhvButton from '../assets/lhv-button.svg';

const Header: React.FC = () => {
  const scrollToInvest = () => {
    const element = document.getElementById('invest');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  }
  return (
    <>
      <div className='head-bar'>
        <img src={ham} alt=""/>
      </div>
      <div className='head-promo section'>
        <div className='container'>
          <div className="row">
            <div className="col-lg-5 col-md-5">
              <h1>Hästi hoitud saladus</h1>
              <p><strong>Trigon Dividendifond</strong> teenis eelmisel aastal 35.7% tulu, mis on mäekõrguselt üle kõikidest Eesti pensionifondidest. Nelja aastaga on tootlus olnud enam kui 80%*. <strong>Nüüd on võimalus meie edukatesse fondidesse investeerida kõigil.</strong></p>
              <div className='hero-mobile relative mobile-only'>
                <img src={heroM} className='hero' alt="" />
                <img src={lipper} alt="" className='lipper' />
                <img src={heroGraph} alt="" className='hero-graph' />
              </div>
              <p>
                <a onClick={scrollToInvest} href="#n" className='bank-button'><img src={lhvButton} alt="Lhv" /></a>
                <a onClick={scrollToInvest} href="#n" className='bank-button'><img src={swedButton} alt="Swed" /></a>
              </p>
            </div>
            <div className="col-lg-7 col-md-7 mobile-hidden">
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