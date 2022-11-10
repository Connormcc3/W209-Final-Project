import './App.css';
import React from 'react';
import { VegaLite } from 'react-vega'

const FFASpec = require('./specs/final-four-appearances.json')

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <VegaLite spec={FFASpec} data={FFASpec.datasets} />,
      document.getElementById('bar-container')
      </header>
    </div>
  );
}

export default App;
