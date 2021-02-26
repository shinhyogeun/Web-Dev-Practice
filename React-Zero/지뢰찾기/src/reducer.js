import { clickRight } from "./actions";

const initialState = {
  row: '',
  col: '',
  mine: '',
  tableData: [],
};

export const CELL = {
  MINE: -6,
  MINE_QUATIONS: -5,
  MINE_FLAG: -4,
  NORMAL_QUATIONS: -3,
  NORMAL_FLAG: -2,
  NORMAL: -1,
  OPENED: 0,
}

const makeTable = (row, col, mineCount) => {
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

const reducers = {
  'changeInput': (state, { payload: { placeholder, value } }) => ({
    ...state,
    [placeholder]: value,
  }),
  'makeTable': (state) => {
    return {
      ...state,
      tableData: makeTable(Number(state.row), Number(state.col), Number(state.mine)),
    }
  },
  'clickRight': (state, { payload: { row, col } }) => {
    return {
      ...state,
      tableData: right(state.tableData, row, col),
    }
  },
};

export default function reducer(state = initialState, action) {
  return reducers[action.type] ? reducers[action.type](state, action) : state;
}
