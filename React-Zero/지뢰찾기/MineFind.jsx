import React, { useReducer } from 'react';

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

export default function MineFind() {
  return (
    <h1>지뢰를 찾아봅시다!</h1>
  )
}