import React from 'react';

const WeDo: React.FC = () => {
  return (
    <div className='container'>
    <h1>Meie tugevused ...</h1>
    <div className="row">
      <div className="col-md-4 col-lg-4"><div className="green-section"><h2>30</h2>aastat kogemust</div></div>
      <div className="col-md-4 col-lg-4"><div className="green-section"><h2>0%</h2>fikseeritud haldustasu</div></div>
      <div className="col-md-4 col-lg-4"><div className="green-section"><h2>43</h2>rahvusvahelist auhinda</div></div>
    </div>
    <div className="row">
      <div className="col">
        <div className=' green-section'>
          Haldame klientide varasid
          <h2>900+ miljoni euro väärtuses</h2>
        </div>
      </div>
    </div>
  </div>
  );
}

export default WeDo;