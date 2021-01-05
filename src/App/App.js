import React, { Component } from 'react';
import { generateSudoku } from '../lib/sudoku';
import SudokuBoard from "../components/sudokuBoard"
import './App.css';




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
          <h1>Sudoku</h1>
        </header>
        <SudokuBoard sudoku={this.state.sudoku}/>
      </div>
    );
  }
}


export default App;
