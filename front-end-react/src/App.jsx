import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import LeftBar from './bars/LeftBar';
import RigthBar from './bars/RigthBar';
import NavBar from './components/NavBar';
import Inventory from './components/Inventory';
import Categories from './components/Categories';

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
