import React from 'react';
import generator from "sudoku";
import './App.css';

window.generator = generator;

function App() {
  return (
    <div className="App">
      <h1>Sudoku Freedom</h1>
    </div>
  );
}

export default App;
