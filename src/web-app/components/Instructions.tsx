import React, { useState } from 'react';
import Gallery from './Gallery';
import * as Tabs from '@radix-ui/react-tabs';

import lhv1 from '../assets/steps/lhv1.png';
import lhv2 from '../assets/steps/lhv2.png';
import lhv3 from '../assets/steps/lhv3.png';

import sw1 from '../assets/steps/sw1.png';
import sw2 from '../assets/steps/sw2.png';
import sw3 from '../assets/steps/sw3.png';
import sw4 from '../assets/steps/sw4.png';
import sw5 from '../assets/steps/sw5.png';
import sw6 from '../assets/steps/sw6.png';
import sw7 from '../assets/steps/sw7.png';

const Instructions: React.FC = () => {
  const [slide1, setSlide1] = useState(0);
  const [slide2, setSlide2] = useState(0);
  const [slide3, setSlide3] = useState(0);
  const onStepClick = (index: number, order: number[]) => {
    let x = 0;
    switch(index) {
      case 0: x = 0; break;
      case 1: x = 1; break;
      case 2: x = 3; break;
    }
    const activate = order.length === 3 ? index : x;
    console.log({index, order, x, activate});
    const el = document.querySelectorAll('.thumbs li')[activate] as HTMLElement;
    if(el) el.click();
  }
  const getSlides = (steps: JSX.Element[], order: number[], sliderState: number) => {
    return steps.map((value, index) => <div key={index} onClick={() => onStepClick(index, order)} className={ index === order[sliderState] ? 'active' : ''}>
        <h3>{stepTitles[index]}</h3>
        {value}
      </div>
    )
  }
  const stepTitles = [
    'Esimene samm',
    'Teine samm',
    'Kolmas samm'
  ]

  const lhvSteps = [
    <p>Sisene internetipanka, vali vasakult menüüst “Raha kasvatamine” ja edasi “Ost-müük”.</p>,
    <p>Kliki nupul “Fondiosakud”, vali konto, millelt soovid investeerida, ning leia rippmenüüst "Trigon Dividendifond C osak” (reinvesteerib dividendid) või “Trigon Dividendifond D osak” (maksab dividendid kord aastas välja).</p>,
    <p>Sisesta sobiv summa alates 100€ ja kliki “Eelvaade”. Kontrolli tehing ja “Kinnita”.</p>
  ];
  const swed1Steps = [
    <p>Sisene internetipanka, vali ülevalt menüüst “Kogumine, investeerimine” ja kliki “Fondid”.</p>,
    <p>Liigu fondide nimekirja lõppu. Kliki väiksel nupul “Fondiorder” ning sisesta otsingusse “Trigon Dividendifond”, seejärel vajuta “Otsi”. Vali fondiosak, mida soovite osta - “Trigon Dividendifond C osak” (reinvesteerib dividendid) või “Trigon Dividendifond D osak” (maksab dividendid kord aastas välja).</p>,
    <p>Vali “Tegevused” ning vajuta “Ostan”. Sisesta investeeritav summa, vajuta “Kontroll” ning “Kinnitan”.</p>
  ]
  const swed2Steps = [
    <p>Sisene internetipanka, vali ülevalt menüüst “Investeerimine, hoiustamine” ja kliki “Fondid”.</p>,
    <p>Vali “Investeerimisfondide nimekiri” ja liigu fondide nimekirja lõppu. Kliki väiksel nupul “Fondiorder” ning sisesta otsingusse “Trigon Dividendifond". Vali fondiosak, mida soovite osta - "Trigon Dividendifond C osak" (reinvesteerib dividendid) või "Trigon Dividendifond D osak" (maksab dividendid kord aastas välja).</p>,
    <p>Vali "Tegevused" ning vajuta "Ostan". Sisesta investeeritav summa, vajuta "Kontroll" ning "Kinnitan"</p>
  ]

  return (
    <div className='container'>
      <div className='instructions'>
        <Tabs.Root defaultValue="tab1" orientation="vertical">
          <Tabs.List aria-label="tabs example" className='tabs'>
            <Tabs.Trigger onClick={() => setSlide1(0)} value="tab1">LHV era- ja äriklient</Tabs.Trigger>
            <Tabs.Trigger onClick={() => setSlide2(0)} value="tab2">Swedbank eraklient</Tabs.Trigger>
            <Tabs.Trigger onClick={() => setSlide3(0)} value="tab3">Swedbank äriklient</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">
            <div className='container'>
              <div className="row">
                <div className="col-md-6">
                  <div className='steps'>
                    {getSlides(lhvSteps,[0,1,2],slide1)}
                  </div>
                </div>
                <div className="col-md-6">
                  <Gallery onChange={setSlide1} title="LHV"  images={[
                    { src: lhv1, step: 0},
                    { src: lhv2, step: 1},
                    { src: lhv3, step: 2}
                  ]}></Gallery>
                </div>
              </div>
            </div>
          </Tabs.Content>
          <Tabs.Content value="tab2">
            <div className='container'>
              <div className="row">
                <div className="col-md-6">
                  <div className='steps'>
                    {getSlides(swed1Steps,[0,1,1,2,2,2], slide2)}
                  </div>
                </div>
                <div className="col-md-6">
                  <Gallery onChange={setSlide2} title="Swed"  images={[
                  { src: sw1, step: 0 },
                  { src: sw2, step: 1 },
                  { src: sw3, step: 1 },
                  { src: sw4, step: 2 },
                  { src: sw5, step: 2 },
                  { src: sw6, step: 2 }
                  ]}></Gallery>
                </div>
              </div>
            </div>
          </Tabs.Content>
          <Tabs.Content value="tab3">
          <div className='container'>
              <div className="row">
                <div className="col-md-6">
                  <div className='steps'>
                    {getSlides(swed2Steps, [0,1,1,2,2,2], slide3)}
                  </div>
                </div>
                <div className="col-md-6">
                  <Gallery onChange={setSlide3} title="SwedB2B"  images={[
                  { src: sw7, step: 0 },
                  { src: sw2, step: 1 },
                  { src: sw3, step: 1 },
                  { src: sw4, step: 2 },
                  { src: sw5, step: 2 },
                  { src: sw6, step: 2 }
                  ]}></Gallery>
                </div>
              </div>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
}

export default Instructions;