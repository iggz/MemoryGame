import React from 'react';

import './App.css';

import MemoryCardBack from './memoryCard.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory game</h1>
        <h2>Match cards to win</h2>
      </header>
      <div>
        <MemoryCardBack />
        <MemoryCardBack />
        <MemoryCardBack />
        <MemoryCardBack />
      </div>

      <div>
        <MemoryCardBack />
        <MemoryCardBack />
        <MemoryCardBack />
        <MemoryCardBack />
      </div>

      <div>
        <MemoryCardBack />
        <MemoryCardBack />
        <MemoryCardBack />
        <MemoryCardBack />
      </div>

      <div>
        <MemoryCardBack />
        <MemoryCardBack />
        <MemoryCardBack />
        <MemoryCardBack />
      </div>


    </div>
  );
}

export default App;
