import React, { useRef } from 'react';
import person1 from '../assets/image_2024-04-05_13-56-39.png';
import person2 from '../assets/image_2024-04-06_04-28-23.png';
import person3 from '../assets/image_2024-04-06_04-28-39.png';


import linkedin from '../assets/lin.svg'
import { useState } from 'react';

const People: React.FC = () => {
  const ppl = useRef<HTMLDivElement>(null);
  const [ person, setPerson ] = useState(0);
  const [ cls, setClass ] = useState('start');

  const scrollTo = (indexChange: number) => {
    let nextPerson = person + indexChange;
    if(nextPerson < 0) {
      nextPerson = 0;
    } if(nextPerson > 2) {
      nextPerson = 2;
    }
    const values = [
      'start',
      'middle',
      'end',
    ]
    setPerson(nextPerson)
    setClass(values[nextPerson]);
  }
  return (
    <div className='container'>
      <div className='people'>
        <h1>...millesse usuvad ka meie fondijuhid, kes on ise fondi investorid.</h1>
        <div className={`scrollWrapper`} ref={ppl}>
          <div className={`row ${cls}`}>
            <div className="person col-4">
              <img src={person1} className="photo" alt="" />
              <h3>Mihkel Välja</h3>
              <p>Fondijuht, Partner</p>
              <a href='https://www.linkedin.com/in/mihkel-välja-6a30b168' target='_blank' rel="noreferrer"><img src={linkedin} alt="" /></a>
            </div>
            <div className="person col-4">
              <img src={person2} className="photo" alt="" />
              <h3>Jelena Rozenfeld</h3>
              <p>Fondijuht, Partner</p>
              <a href='https://www.linkedin.com/in/jelena-rozenfeld-4931ab7/' target='_blank' rel="noreferrer"><img src={linkedin} alt="" /></a>
            </div>
            <div className="person col-4">
              <img src={person3} className="photo" alt="" />
              <h3>Mehis Raud</h3>
              <p>Fondijuht, Partner</p>
              <a href='https://www.linkedin.com/in/mehis-raud-1b67118a/' target='_blank' rel="noreferrer"><img src={linkedin} alt="" /></a>
            </div>
          </div>
        </div>
        <div className='mobile-only'>
          <div className='ppl-nav'>
            <div className='dots'>
              <span className={`${person === 0 ? 'active' : ''}`}></span>
              <span className={`${person === 1 ? 'active' : ''}`}></span>
              <span className={`${person === 2 ? 'active' : ''}`}></span>
            </div>
            <div className='buttons'>
              <button className='button prev' disabled={person === 0} onClick={() => scrollTo(-1)}></button>
              <button className='button' disabled={person === 2} onClick={() => scrollTo(1)}></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default People;