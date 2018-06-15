import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import '@nutkit/styles';

import Button from '@nutkit/component-button';
import Panel from '@nutkit/component-panel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Nutkit</h1>
        </header>
        <Panel>
          <p>Hello this is a f** panel</p>
          <br/>
          <Button>Get Started!!</Button>
        </Panel>
      </div>
    );
  }
}

export default App;
