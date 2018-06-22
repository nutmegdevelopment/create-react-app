import React from 'react';
import Button from '@nutkit/component-button';
import Panel from '@nutkit/component-panel';

import '@nutkit/styles';

import './App.scss';
import logo from './nutkit_logo.svg';


const App = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Nutkit</h1>
        </header>
        <Panel>
          <p>Hello this is a f** panel</p>
          <br />
          <Button>Get Started!!</Button>
        </Panel>
      </div>
    );
};

export default App;
