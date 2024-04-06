import React from 'react';
import person1 from '../assets/image_2024-04-05_13-56-39.png';
import person2 from '../assets/image_2024-04-06_04-28-23.png';
import person3 from '../assets/image_2024-04-06_04-28-39.png';


import linkedin from '../assets/lin.svg'

const People: React.FC = () => {
  return (
    <div className='container people'>
      <h1>... millesse usuvad ka meie fondijuhid, kes on ise fondi investorid</h1>

      <div className="row">
        <div className="person col-md-4">
          <img src={person1} className="photo" alt="" />
          <h3>Mihkel Välja</h3>
          <p>Fondijuht, Partner</p>
          <img src={linkedin} alt="" />
        </div>
        <div className="person col-md-4">
          <img src={person2} className="photo" alt="" />
          <h3>Jelena Rozenfeld</h3>
          <p>Fondijuht, Partner</p>
          <img src={linkedin} alt="" />
        </div>
        <div className="person col-md-4">
          <img src={person3} className="photo" alt="" />
          <h3>Mehis Raud</h3>
          <p>Fondijuht, Partner</p>
          <img src={linkedin} alt="" />
        </div>
      </div>
    </div>
  );
}

export default People;