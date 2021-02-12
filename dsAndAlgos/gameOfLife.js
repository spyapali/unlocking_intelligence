/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// base cases
// 1. if row equal to or greater than m
// 2. if col equal to or greater than n
// 3. if row or col is less than zero

// logic
// 1. if number of neighbors is greater than 3, cell goes from 1 to 0
// 2. if number of neighbors is 2; do nothing
// 3. if number of neighbors is 3; make sure it goes from 0 to 1
// 3. if number of neighbors is less than 2, goes from 1 to 0

// whenever there is a change --> recursively update the rest of the cells.

// recursion + backtracking



const checkIfGameOflifeIsOutofBounds = function(row, numOfRows, col, numOfCols) {
    if (row < 0 || col < 0 || row >= numOfRows || col >= numOfCols) {
      return true;
    }
    return false;
}

const recursivelySolveTheGameOfLife = function(copyBoard, board, row, column, numOfRows, numOfCols) {
    if (checkIfGameOflifeIsOutofBounds(row, numOfRows, column, numOfCols)) {
        return;
    }
    const possibleNeighbors = [[-1, 1], [0, 1], [1, 1], [-1, 0], [1, -1], [0, -1], [-1, -1], [1, 0]]
    const calculateTotalNeighbors = function(row, column) {
        let totalSum = 0;
        for (let neighbor of possibleNeighbors) {
            const neighborRow = neighbor[0]
            const neighborCol = neighbor[1]
            if (checkIfGameOflifeIsOutofBounds(row + neighborRow, numOfRows, column + neighborCol, numOfCols)) continue;
            totalSum += copyBoard[row + neighborRow][column + neighborCol]
        }
        return totalSum
    }
    totalNeighbors = calculateTotalNeighbors(row, column)
    if (totalNeighbors === 3) {
        if (copyBoard[row][column] === 0) {
            board[row][column] = 1
        }
    } else if (totalNeighbors > 3 || totalNeighbors < 2) {
        if (copyBoard[row][column] === 1) {
            board[row][column] = 0
        }
    }
    recursivelySolveTheGameOfLife(copyBoard, board, row, column + 1, numOfRows, numOfCols)
    recursivelySolveTheGameOfLife(copyBoard, board, row + 1, column, numOfRows, numOfCols)
}

var gameOfLife = function(board) {
    const numOfRows = board.length
    const numOfCols = board[0].length
    const copyBoard = board.map(array => array.slice())
    recursivelySolveTheGameOfLife(copyBoard, board, 0, 0, numOfRows, numOfCols)
    return board
}

function matrixComparison(input, expected) {
  const rows = expected.length
  const cols = expected[0].length
  for (let row of expected) {
    for (let col of expected[0]) {
      if (input[row][col] !== expected[row][col]) {
        return false
      }
    }
  }
  return true
}

console.log(matrixComparison(gameOfLife([[0]]), [[0]]))
console.log(matrixComparison(gameOfLife([[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]), [[0]]))
