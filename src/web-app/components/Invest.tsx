import React from 'react';
import swedButton from '../assets/swed-button.svg';
import lhvButton from '../assets/lhv-button.svg';

const Invest: React.FC = () => {
  return (
    <div className='container'>
      <div className='invest green-section'  id="invest">
        <h1>Investeeri Trigon Dividendifondi internetipangas</h1>
        <p>
          <a target="_blank" rel="noreferrer" href="https://www.lhv.ee/" className='bank-button'><img src={lhvButton} alt="Lhv" /></a>
          <a target="_blank" rel="noreferrer" href="https://www.swedbank.ee/" className='bank-button'><img src={swedButton} alt="Swed" /></a>
        </p>
      </div>
    </div>
  );
}

export default Invest;