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
    this.checkSudoku = this.checkSudoku.bind(this);
    this.getSudoku = this.getSudoku.bind(this);
    this.solveSudoku = this.solveSudoku.bind(this);
    this.enterValue = this.enterValue.bind(this);
    this.resetSudoku = this.resetSudoku.bind(this);
  };

  getSudoku() {
    let sudokugame = sudoku.generate("easy");
    this.setState({
      initialBoard: sudokugame,
      board: sudokugame
    });
  }
  resetSudoku() {
    let sudokugame = this.state.initialBoard
    this.setState({
      board: sudokugame
    });
  }

  solveSudoku() {
    console.log(sudoku.solve(this.state.board));
    if (sudoku.solve(this.state.board) == false) {
      alert("Unfortunately, you have made mistakes - the sudoku can't be solved.")
    }
    else {
      let sudokugame = sudoku.solve(this.state.board);
      this.setState({
        board: sudokugame
      })
    }
  }


  checkSudoku() {
    if (sudoku.solve(this.state.board) == false) {
      alert("Unfortunately, you have made mistakes - the sudoku can't be solved.")
    }
    else {
      alert("Keep going! You have made no mistakes so far :).")
    }
  }

  enterValue(index, value) {
    console.log(index, value)
    console.log(this.state.initialBoard)
    if (value == "") {
      value = "."
    };
    let newBoardState = this.state.board.substr(0, index) + value + this.state.board.substr(index + 1);
    console.log(newBoardState);

    this.setState({
      board: newBoardState
    });
  }

  render() {
    return (
      <div className="App" >
        <h1>Sudoku</h1>
        <Board enterValue={this.enterValue} boardData={this.state.board} initialboardData={this.state.initialBoard} />
        <div className="Buttons">
          <button onClick={this.checkSudoku}>Check the board</button>
          <button onClick={this.getSudoku}>New game</button>
          <button onClick={this.solveSudoku}>Show the solution</button>
          <button onClick={this.resetSudoku}>Reset</button>
        </div>
      </div>
    );
  }
};

export default App;