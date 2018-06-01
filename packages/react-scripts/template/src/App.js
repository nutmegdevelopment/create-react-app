import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@nutkit/component-button';
import { Container, Row, Col } from '@nutkit/component-grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Nutkit</h1>
        </header>
        <Container fluid>
          <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <pre>.col-sm-12 .col-md-6 .col-md-offset-3</pre>
            </Col>
          </Row>
          <Row>
            <Col sm={{ size: 'auto', offset: 1 }}>
              <pre>.col-sm .col-sm-offset-1</pre>
            </Col>
            <Col sm={{ size: 'auto', offset: 1 }}>
              <Button>Nutmeg Button</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
