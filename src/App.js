import { useState } from "react";
import "./App.css";

const puzzle = [
  [-1, 5, -1, 9, -1, -1, -1, -1, -1],
  [8, -1, -1, -1, 4, -1, 3, -1, 7],
  [-1, -1, -1, 2, 8, -1, 1, 9, -1],
  [5, 3, 8, 6, -1, 7, 9, 4, -1],
  [-1, 2, -1, 3, -1, 1, -1, -1, -1],
  [1, -1, 9, 8, -1, 4, 6, 2, 3],
  [9, -1, 7, 4, -1, -1, -1, -1, -1],
  [-1, 4, 5, -1, -1, -1, 2, -1, 9],
  [-1, -1, -1, -1, 3, -1, -1, 7, -1],
];

function App() {
  const [sudokuArr, setSudokuArr] = useState(getDeepCopy(puzzle));

  function getDeepCopy(arr) {
    return JSON.parse(JSON.stringify(arr));
  }

  function onInputChange(e, row, col) {
    const val = parseInt(e.target.value) || -1,
      grid = getDeepCopy(sudokuArr);
    if (val === -1 || (val >= 1 && val <= 9)) {
      grid[row][col] = val;
    }
    setSudokuArr(grid);
  }

  function checkSudoku() {
    // Checks sudoku for user input and pops up an alert whether or not it is completed properly
  }

  function solveSudoku() {
    // fills in all empty answers and corrects incorrect user-input answers
  }

  function resetSudoku() {
    // clears board
  }

  return (
    <div className="App">
      <div className="sudoku-container">
        <h1>Sudoku Solver</h1>
        <table>
          <tbody>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rIndex) => {
              return (
                <tr
                  key={rIndex}
                  className={(row + 1) % 3 === 0 ? "bBorder" : ""}
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, cIndex) => {
                    return (
                      <td
                        key={rIndex + cIndex}
                        className={(col + 1) % 3 === 0 ? "rBorder" : ""}
                      >
                        <input
                          onChange={(e) => onInputChange(e, row, col)}
                          value={
                            sudokuArr[row][col] === -1
                              ? ""
                              : sudokuArr[row][col]
                          }
                          className="cell-input"
                          disabled={puzzle[row][col] !== -1}
                        />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="button-container">
          <button className="check-button" onClick={checkSudoku()}>
            Check
          </button>
          <button className="solve-button" onClick={solveSudoku()}>
            Solve
          </button>
          <button className="reset-button" onClick={resetSudoku()}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
