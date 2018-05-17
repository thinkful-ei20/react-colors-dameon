import React, { Component } from 'react';

import './App.css';
import NavBar from './components/NavBar';
import Header from './components/header';
import Colors from './components/colors';
import Timer from './components/timer'

class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
      <Header />
      <Colors />
      <Timer />
      </div>
      )
  }
}

export default App;
