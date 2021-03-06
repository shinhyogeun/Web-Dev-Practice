import initialState from '../fixture/initialState';

import {
  changeInput,
  makeTable,
  clickCell,
  clickRight,
  updateRemainMine,
} from './actions';

import reducer from './reducer';

import { CELL } from './clickEvent';

describe('reducer는', () => {

  it('입력이 들어오면 update한다.', () => {
    const state = reducer(initialState, changeInput('col', 5));

    expect(state.col).toBe(5);
  });

  it('만들기 버튼을 누르면 새로운 tableData를 만든다.', () => {
    const state = reducer(initialState, makeTable())

    expect(state.tableData).not.toBe(initialState.tableData);
  });

  it('지뢰갯수에서 사용자가 심은 깃발갯수를 계산해 준다.', () => {
    const state = reducer(initialState, updateRemainMine());

    expect(state.remainMine).toBe(6);
  });

  it('오른쪽 버튼을 클릭하면 ! -> ? -> 평범 순서대로 바뀐다.', () => {
    const state = reducer(initialState, clickRight(2, 2));
    expect(state.tableData[2][2]).toBe(CELL.NORMAL_FLAG);
    const state2 = reducer(state, clickRight(2, 2));
    expect(state2.tableData[2][2]).toBe(CELL.NORMAL_QUATIONS);
    const state3 = reducer(state2, clickRight(2, 2));
    expect(state3.tableData[2][2]).toBe(CELL.NORMAL);
  });

  context('왼쪽 버튼을 클릭한다면', () => {

    it('지뢰라면 게임종료한다.', () => {
      const state1 = reducer(initialState, clickCell(1, 1));
      expect(state1.halted).toBe(true);
    });

    it('지뢰아니면 주변에 지뢰세서 각인!', () => {
      const state2 = reducer(initialState, clickCell(2, 2));

      expect(state2.tableData[2][2]).toBe(4);

      const state3 = reducer(initialState, clickCell(3, 3));

      expect(state3.tableData[3][3]).toBe(2);

      const state4 = reducer(initialState, clickCell(2, 1));

      expect(state4.tableData[2][1]).toBe(3);
    });

  });
});
