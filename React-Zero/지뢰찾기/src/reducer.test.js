import { changeInput, makeTable } from './actions';
import reducer from './reducer';

describe('reducer는', () => {
  const initialState = {
    row: 10,
    col: 10,
    mine: 25,
    tableData: [],
  }

  it('입력이 들어오면 update한다.', () => {
    const state = reducer(initialState, changeInput('col', 5))
    expect(state.col).toBe(5)
  });

  it('만들기 버튼을 누르면 새로운 tableData를 만든다.', () => {
    const state = reducer(initialState, makeTable())
    console.log(state.tableData);
    expect(state.tableData).not.toBe([]);
  });
});
