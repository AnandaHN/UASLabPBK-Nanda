<template>
    <div class="tic-tac-toe">
      <h1>Tic Tac Toe</h1>
      <div class="board-container">
        <div class="board">
          <div class="row" v-for="(row, rowIndex) in board" :key="rowIndex">
            <div
              class="cell"
              v-for="(cell, colIndex) in row"
              :key="colIndex"
              @click="makeMove(rowIndex, colIndex)"
            >
              {{ cell }}
            </div>
          </div>
        </div>
      </div>
      <div class="reset-container">
        <button @click="resetBoard">Reset</button>
      </div>
      <p class="message">{{ message }}</p>
    </div>
  </template>
  <script>
  export default {
    name: 'TicTacToe',
    data() {
      return {
        currentPlayer: 'X',
        board: [
          ['', '', ''],
          ['', '', ''],
          ['', '', '']
        ],
        message: ''
      };
    },
    methods: {
      makeMove(rowIndex, colIndex) {
        if (this.board[rowIndex][colIndex] === '') {
          this.board[rowIndex][colIndex] = this.currentPlayer;
          this.checkGameStatus();
          this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        }
      },
      checkGameStatus() {
        const winningCombinations = [
          [[0, 0], [0, 1], [0, 2]],
          [[1, 0], [1, 1], [1, 2]],
          [[2, 0], [2, 1], [2, 2]],
          [[0, 0], [1, 0], [2, 0]],
          [[0, 1], [1, 1], [2, 1]],
          [[0, 2], [1, 2], [2, 2]],
          [[0, 0], [1, 1], [2, 2]],
          [[0, 2], [1, 1], [2, 0]]
        ];
  
        for (let combination of winningCombinations) {
          const [a, b, c] = combination;
          const [rowA, colA] = a;
          const [rowB, colB] = b;
          const [rowC, colC] = c;
  
          if (
            this.board[rowA][colA] &&
            this.board[rowA][colA] === this.board[rowB][colB] &&
            this.board[rowA][colA] === this.board[rowC][colC]
          ) {
            this.message = `${this.board[rowA][colA]} wins!`;
            return;
          }
        }
  
        if (this.checkBoardFilled()) {
          this.message = "It's a tie!";
        }
      },
      checkBoardFilled() {
        for (let row of this.board) {
          for (let cell of row) {
            if (cell === '') {
              return false;
            }
          }
        }
        return true;
      },
      resetBoard() {
        this.board = [
          ['', '', ''],
          ['', '', ''],
          ['', '', '']
        ];
        this.currentPlayer = 'X';
        this.message = '';
      }
    }
  };
  </script>
  <style>
  .tic-tac-toe {
    text-align: center;
  }
  
  .board-container {
    display: inline-block;
    margin: 20px;
    border: 2px solid #333;
    border-radius: 8px;
    padding: 10px;
  }
  
  .board {
    display: flex;
    flex-wrap: wrap;
    width: 154px; /* (50px cell width + 2px border) * 3 columns + 4px margin */
    margin: 0 auto;
  }
  
  .row {
    display: flex;
    width: 100%;
  }
  
  .cell {
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    cursor: pointer;
    background-color: #fff; /* Warna latar belakang sel */
    color: #000; /* Warna teks sel */
  }
  
  .cell:nth-child(2n) {
    background-color: #000; /* Warna latar belakang sel ganjil */
    color: #fff; /* Warna teks sel ganjil */
  }
  
  .reset-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  
  .message {
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
  }
  
  </style>