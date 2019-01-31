import React, { Component } from 'react';
import Nav from './Components/Nav'
import GaleryHome from './Components/GaleryHome'

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
    }
  }
  render() {
    return (
      <div className="container-fluid p-0">
          <Nav />
          <GaleryHome />
      </div>
    );
  }
}

export default App;
