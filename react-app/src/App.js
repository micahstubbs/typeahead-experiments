import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DownshiftTypeahead from './components/DownshiftTypeahead';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DownshiftTypeahead />
      </div>
    );
  }
}

export default App;
