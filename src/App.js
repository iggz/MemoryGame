import React from 'react';

import './App.css';

import MemoryCard from './memoryCard.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory game</h1>
        <h2>Match cards to win</h2>
      </header>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>

      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>

      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>

      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>


    </div>
  );
}

export default App;
