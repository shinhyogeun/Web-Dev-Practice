const CELL = {
  MINE_OPENED: -7,
  MINE: -6,
  MINE_QUATIONS: -5,
  MINE_FLAG: -4,
  NORMAL_QUATIONS: -3,
  NORMAL_FLAG: -2,
  NORMAL: -1,
  OPENED: 0,
};

function makeTable(row, col, mineCount) {
  let table = []
  let count = mineCount;

  for (let i = 0; i < col; i++) {
    table = [...table, Array(row).fill().map((cell) => CELL.NORMAL)]
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

function right(table, row, col) {
  const copyTable = [...table]
  copyTable[row] = [...table[row]];

  if ([CELL.MINE].includes(copyTable[row][col])) {
    copyTable[row][col] = CELL.MINE_FLAG;
    return copyTable;
  }

  if ([CELL.MINE_FLAG].includes(copyTable[row][col])) {
    copyTable[row][col] = CELL.MINE_QUATIONS;
    return copyTable;
  }

  if ([CELL.MINE_QUATIONS].includes(copyTable[row][col])) {
    copyTable[row][col] = CELL.MINE;
    return copyTable;
  }

  if ([CELL.NORMAL].includes(copyTable[row][col])) {
    copyTable[row][col] = CELL.NORMAL_FLAG;
    return copyTable;
  }

  if ([CELL.NORMAL_FLAG].includes(copyTable[row][col])) {
    copyTable[row][col] = CELL.NORMAL_QUATIONS;
    return copyTable;
  }

  if ([CELL.NORMAL_QUATIONS].includes(copyTable[row][col])) {
    copyTable[row][col] = CELL.NORMAL;
    return copyTable;
  }

  return copyTable;
}

function makeNearPointArray(table, row, col) {
  const nearPoint = [];
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      if (i === 0 && j === 0) continue;

      if (0 <= row + i && row + i < table.length) {
        if (0 <= col + j && col + j < table[0].length) {
          nearPoint.push(table[row + i][col + j])
        }
      }
    }
  }

  return nearPoint
}

function calculateNearMine(table, row, col) {
  const nearPoint = makeNearPointArray(table, row, col)


}

function left(state, row, col) {
  const copyTable = []
  for (let i = 0; i < state.tableData.length; i++) {
    copyTable[i] = [...state.tableData[i]];
  }

  if (copyTable[row][col] === CELL.MINE) {
    copyTable[row][col] = CELL.MINE_OPENED

    return ({
      ...state,
      halted: true,
      tableData: copyTable,
    });
  }

  if (copyTable[row][col] === CELL.NORMAL) {
    const mineCount = calculateNearMine(table, row, col)

    // if (nearMineCount) {

    // }

    copyTable[row][col] = mineCount

    return ({
      ...state,
      tableData: copyTable,
    });
  }

  return state
}

export {
  CELL,
  makeTable,
  right,
  left,
  makeNearPointArray,
  calculateNearMine,
};
