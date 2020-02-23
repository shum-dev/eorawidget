import React from 'react';
import './App.css';
import EoraWidget from './EoraWidget'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://eora.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          EORA
        </a>
        <p>Evaluation Test for EORA company</p>
        <p>"Bot widget"</p>
      </header>
      <EoraWidget />
    </div>
  );
}

export default App;
