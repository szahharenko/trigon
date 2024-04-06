import React from 'react';
import swedButton from '../assets/swed-button.svg';
import lhvButton from '../assets/lhv-button.svg';

const Invest: React.FC = () => {
  return (
    <div className='container invest green-section'>
      <h1>Investeeri Trigon Dividendifondi oma internetipangas</h1>
      <p><strong>Allpool olevas juhises</strong> anname sulle samm-sammu haaval täpselt teada, kuidas meie fond leida.</p>
      <p>
          <img src={lhvButton} alt="" />
          <img src={swedButton} alt="" />
      </p>
    </div>
  );
}

export default Invest;