const initailState = {
  row: '',
  col: '',
  mine: '',
  tableData: [],
};

const reducers = {
  'changeInput': (state, { payload: { placeholder, value } }) => ({
    ...state,
    [placeholder]: value,
  })
};

export default function reducer(state = initailState, action) {
  return reducers[action.type] ? reducers[action.type](state, action) : state;
}
