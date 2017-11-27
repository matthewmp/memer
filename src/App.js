import React, { Component } from 'react';

import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import Landing from './components/Landing.js';
import './css/normalize.css';
import './css/app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;
