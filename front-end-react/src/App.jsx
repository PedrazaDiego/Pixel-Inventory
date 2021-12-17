import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import LeftBar from './bars/LeftBar';
import RigthBar from './bars/RigthBar';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <div className="left-bar">
        <LeftBar>
        </LeftBar>
      </div>
      <div className='right-bar'>
        <RigthBar />
        <Switch>
          <Route exact path="/" component={''} />
          <Route path="/categories" component={''} />
          <Route path="/providers" component={''} />
        </Switch>
      </div>
     
    </div>
  );
}

export default App;
