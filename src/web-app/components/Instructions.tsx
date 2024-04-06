import React, { useState } from 'react';
import Gallery from './Gallery';
import * as Tabs from '@radix-ui/react-tabs';

const Instructions: React.FC = () => {
  const [slide1, setSlide1] = useState(0);
  const onChange1 = (index: number, item: React.ReactNode) => {
    setSlide1(index)
    console.log(index, item);
  }

  return (
    <div className='container instructions'>
      <Tabs.Root defaultValue="tab1" orientation="vertical">
        <Tabs.List aria-label="tabs example" className='tabs'>
          <Tabs.Trigger value="tab1">LHV era- ja äriklient</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Swedbank eraklient</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Swedbank äriklient</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">
          <div className='container'>
            <div className="row">
              <div className="col-md-6">
                <div className='steps'>
                  <div className={ slide1 === 0 ? 'active' : ''}>
                    <h3>Esimene samm</h3>
                    <p>Logi internetipanka, vali ülevalt menüüst “Kogumine, investeerimine” ja kliki “Fondid”</p>
                  </div>
                  <div className={ slide1 === 1 ? 'active' : ''}>
                    <h3>Teine samm</h3>
                    <p>Scrolli fondide loetelu päris lõppu, kliki väiksel nupul “Fondiorder” ning sisesta otsingusse “Trigon Dividendifond.</p>
                  </div>
                  <div className={ slide1 === 2 ? 'active' : ''}>
                    <h3>Kolmas samm</h3>
                    <p>Vali “Trigon Dividendifond C Osak” (reinvesteerib kasumi) või “Trigon Dividendifond D Osak” (maksab dividende korra aastas) ning osta endale sobivas summas alates 100€</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <Gallery onChange={onChange1}/>
              </div>
            </div>
        </div>
        </Tabs.Content>
        <Tabs.Content value="tab2">
          tab2
        </Tabs.Content>
        <Tabs.Content value="tab3">
          tab3
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}

export default Instructions;