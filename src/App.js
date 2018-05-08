import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import "react-select/dist/react-select.css";
// import "react-virtualized/styles.css";
// import "react-virtualized-select/styles.css";

import MenuBar from "./components/MenuBar/MenuBar.js";

class App extends Component {

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MenuBar />

      </div>
    );
  }
}

export default App;
