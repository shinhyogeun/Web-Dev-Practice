import { right, makeTable, left, calculateRemainMine } from './clickEvent';
// 언제나 state의 뜻을 명확하게 해야한다. state의 흐름 === 프로그램의 흐름
const initialState = {
  row: '',
  col: '',
  mine: '',
  remainMine: null,
  halted: null,
  tableData: [],
  time: 0,
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
      halted: null,
      time: 0,
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
  'gameStart': (state) => {
    return {
      ...state,
      halted: false,
    }
  },
  'endGame': (state) => {
    return {
      ...state,
      halted: true,
    }
  },
  'updateTime': (state) => {
    return {
      ...state,
      time: state.time + 1,
    }
  },
  'updateRemainMine': (state) => {
    return {
      ...state,
      remainMine: calculateRemainMine(state.tableData, state.mine),
    }
  }
};

export default function reducer(state = initialState, action) {
  return reducers[action.type] ? reducers[action.type](state, action) : state;
}
