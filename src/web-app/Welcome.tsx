import React from 'react';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import Graph from './components/Graph';
import WeDo from './components/WeDo';
import People from './components/People';
import Instructions from './components/Instructions';
import Header from './components/Header';
import Invest from './components/Invest';

const Welcome: React.FC = () => {
  return (
    <>
      <Header/>
      <WeDo/>
      <People/>
      <Invest/>
      <Instructions/>
      <Graph/>
      <ContactUs/>
      <Footer/>
    </>
  );
}

export default Welcome;