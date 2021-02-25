import React from 'react';

import InputContainer from './InputContainer';
import TableContainer from './TableContainer';

// const CELL = {
//   MINE: -1,
//   SAFE: 0,
// }

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

export default function MineFind() {
  return (
    <>
      <h1>지뢰를 찾아봅시다!</h1>
      <InputContainer />
      <TableContainer />
    </>
  )
}