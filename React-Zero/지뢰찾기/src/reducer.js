const initailState = {
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

const reducers = {
  'changeInput': (state, { payload: { placeholder, value } }) => ({
    ...state,
    [placeholder]: value,
  }),
  'makeTable': (state) => {
    const a = makeTable(Number(state.row), Number(state.col), Number(state.mine))
    console.log(state)
    return {
      ...state,
      tableData: a,
    }
  },

};

export default function reducer(state = initailState, action) {
  return reducers[action.type] ? reducers[action.type](state, action) : state;
}
