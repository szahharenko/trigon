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
              <h1>Euroopa edukaim fond</h1>
              <p><strong>Trigon Dividendifondi</strong> tootlus oli eelmisel aastal 35.7%, mis on mäekõrguselt üle kõigist Eesti pensionifondidest. Nelja aastaga on tootlus olnud enam kui 80%* ning hiljuti pälvis fond tulemuslikkuse eest maineka LSEG Lipper Fund Awardsi. <strong>Nüüd on kõigil võimalus meie edust osa saada.</strong></p>
              <p>Kliki oma <strong>panga logol</strong> ja <strong>loe juhendist</strong>, kuidas internetipangas meie fondi investeerida.</p>
              <div className='hero-mobile relative mobile-only'>
                <img src={heroM} className='hero' alt="" />
                <img src={lipper} alt="" className='lipper' />
                <img src={heroGraph} alt="" className='hero-graph' />
              </div>
              <p>
                <a onClick={scrollToInvest} href="#n" className='bank-button'><img src={lhvButton} alt="Lhv" /></a>
                <a onClick={scrollToInvest} href="#n" className='bank-button'><img src={swedButton} alt="Swed" /></a>
              </p>
              <p className='small'>
                * Eelmise aasta tootlus on perioodi 01.01.2023-31.12.2023 kohta. Nelja aasta tootlus perioodi 28.02.2020 - 29.02.2024 kohta. Fondi eelmiste perioodide tootlus ei garanteeri fondi järgmiste perioodide tootlust. Tutvu fondi prospekti ja põhiteabega <a href="https://trigoncapital.com/" target='_blank' rel="noreferrer">trigoncapital.com</a>  ja pea nõu asjatundjaga.
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