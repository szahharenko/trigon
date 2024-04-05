import React, { useState, useRef } from 'react';
import './assets/web-app.scss';
import Loading from './Loading';
import Welcome from './Welcome';
import { VIEWS, CONTENT, animationTime } from '../tools/types';

const App: React.FC = () => {

  const [currentView, setView] = useState(VIEWS.LOADING);
  const [currentContent, setContent] = useState(CONTENT.NONE);
  //const viewRef = useRef<HTMLDivElement>(null);

  const startApp = () : void => {
    setTimeout( () => {
      setView(VIEWS.WELCOME);
      setContent(CONTENT.LANDING);
    }, animationTime + 100 );
  }

  return (
    <div className='main-app'>
      <div className='app-container'>
        { currentView === VIEWS.LOADING && <Loading onLoadComplete={startApp}></Loading> }
        { currentView === VIEWS.WELCOME &&
          <div className='content'>
              { currentContent === CONTENT.LANDING && <Welcome></Welcome> }
          </div>
        }
      </div>
    </div>
  );
}

export default App;