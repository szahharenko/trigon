import React, { useState, useRef } from 'react';
import './assets/web-app.scss';
import Loading from './Loading';
import Welcome from './ContentWelcome';
import { VIEWS, CONTENT, animationTime } from '../tools/types';

const App: React.FC = () => {

  const [currentView, setView] = useState(VIEWS.LOADING);
  const [currentContent, setContent] = useState(0);
  const viewRef = useRef<HTMLDivElement>(null);

  const startApp = () : void => {
    setTimeout( () => { setView(VIEWS.WELCOME) }, animationTime + 100 );
    setTimeout( () => { setContent(CONTENT.ABOUT) }, animationTime * 3 + 100 );
  }

  return (
    <div className='main-app'>
      <div className='app-container'>
        { currentView === VIEWS.LOADING && <Loading onLoadComplete={startApp}></Loading> }
        { currentView === VIEWS.WELCOME &&
          <div className='content'>
            <div ref={viewRef} className='bounce-in'>
              { currentContent === CONTENT.WELCOME && <Welcome></Welcome> }
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;