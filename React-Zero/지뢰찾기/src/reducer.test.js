import { changeInput } from './actions';
import reducer from './reducer';

describe('reducer는', () => {
  const initialState = {
    row: '',
    col: '',
    mine: '',
    tableData: [],
  }

  it('입력이 들어오면 update한다.', () => {
    const state = reducer(initialState, changeInput('col', 5))
    expect(state.col).toBe(5)
  });
});
