import { right, makeTable, left } from './clickEvent';

const initialState = {
  row: '',
  col: '',
  mine: '',
  halted: false,
  tableData: [],
};

const reducers = {
  'changeInput': (state, { payload: { placeholder, value } }) => ({
    ...state,
    [placeholder]: value,
  }),
  'makeTable': (state) => {
    return {
      ...state,
      tableData: makeTable(Number(state.row), Number(state.col), Number(state.mine)),
      halted: false,
    }
  },
  'clickRight': (state, { payload: { row, col } }) => {
    return {
      ...state,
      tableData: right(state.tableData, row, col),
    }
  },
  'clickCell': (state, { payload: { row, col } }) => {
    return left(state, row, col);
  },
  'endGame': (state) => {
    return {
      ...state,
      halted: true,
    }
  },
};

export default function reducer(state = initialState, action) {
  return reducers[action.type] ? reducers[action.type](state, action) : state;
}
