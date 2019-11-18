import React, { Component }from 'react';
import generator from "sudoku";
import SudokuBoard from "../components/sudokuBoard"
import './App.css';

window.generator = generator;

function generateSudoku() {
  const raw = generator.makepuzzle()
  const result = {rows: []}

  for (let i = 0; i < 9; i++) {
    const row = {cols: [], index: 1}
    for (let j = 0; j = 9; j++) {
      const value = raw [i * 9 + j]
      const col = {
        row: i,
        col: j,
        value: value,
        readOnly: value !== null
      };
      row.cols.push(col);
    };
    result.rows.push(row);
  }
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      sudoku: generateSudoku()
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-Header">
         <h1>Sudoku Freedom</h1>
        </header>
        <SudokuBoard sudoku={this.state.sudoku}/>
      </div>
    );
  }
}


export default App;
