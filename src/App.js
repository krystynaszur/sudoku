import React from 'react';
import './App.css';
import Board from './Board';
import sudoku from 'sudoku-umd';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialBoard: '',
      board: ''
    };
    this.getSudoku = this.getSudoku.bind(this);
    this.solveSudoku = this.solveSudoku.bind(this);
  };

  getSudoku() {
    this.setState({
      initialBoard: sudoku.generate("easy")
    });
    console.log(this.state.initialBoard);
  }
  solveSudoku() {
    console.log (sudoku.solve(this.state.initialBoard));
    this.setState({
      initialBoard: sudoku.solve(this.state.initialBoard)
    });
  }

  render() {
    return (
      <div className="App" >
        <h1>Sudoku</h1>
        <Board boardData={this.state.initialBoard} />
        <div className="Buttons">
          <button>Check</button>
          <button onClick={this.getSudoku}>New Game</button>
          <button onClick={this.solveSudoku}>Solve</button>
          <button onClick={this.getSudoku}>Restart</button>
        </div>
      </div>
    );
  }
};

export default App;