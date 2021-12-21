import React from 'react';
import './App.css';
import LeftBar from './bars/LeftBar';
import RigthBar from './bars/RigthBar';


function App() {
  return (
    <div className="App">
      <div className="left-bar">
        <LeftBar>
        </LeftBar>
      </div>
      <div className='right-bar'>
        <RigthBar />
      </div>
    </div>
  );
}

export default App;
