import React, { useReducer, useContext } from 'react';

const CELL = {
  MINE: -1,
  SAFE: 0,
}

const makeTable = (row, col, mineCount) => {
  let table = []
  let count = mineCount;

  for (let i = 0; i < col; i++) {
    table = [...table, Array(row).fill().map((cell) => 0)]
  }

  while (count) {
    const randomCol = Math.floor(Math.random() * col);
    const randomRow = Math.floor(Math.random() * row);
    if (table[randomCol][randomRow] === CELL.MINE) {
      continue;
    }
    table[randomCol][randomRow] = CELL.MINE
    count = count - 1;
  }

  return table;
}

console.log("asd")
console.log(makeTable(10, 10, 25))

const initialState = {
  row: 0,
  col: 0,
  mineCount: 0,
  tableData: []
}

const CELL_CLICK = "CELL_CLICK";
const GAME_START = "GAME_START";

const reduser = (state, action) => {
  switch (action.type) {
    case GAME_START:
      const { row, col, mineCount } = action;
      return {
        row,
        col,
        mineCount,
        tableData: makeTable(row, col, mineCount)
      }

    case CELL_CLICK:
    default:
      break;
  }
}

const MineFind = () => {
  const [state, dispatch] = useReducer(reduser, initialState);

  return (
    <div>지뢰찾기 시작!!</div>
  )
}

export default MineFind;