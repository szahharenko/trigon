import React from 'react';
import './assets/web-app.scss';
import Welcome from './Welcome';

const App: React.FC = () => {
  return (
    <div className='main-app'>
      <div className='app-container'>
        <Welcome></Welcome>
      </div>
    </div>
  );
}

export default App;