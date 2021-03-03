
import initialState from '../fixture/initialState';

import {
  CELL,
  makeTable,
  right,
  left,
  makeNearPointArray,
  calculateNearMine,
  calculateRemainMine,
} from './clickEvent';

describe('makeNearPointArray', () => {
  it('올바른 결과를 리턴한다.', () => {
    const { tableData } = initialState
    const result = makeNearPointArray(tableData, 0, 0)
    expect(result).toHaveLength(3)
  })
})

describe('calculateNearMine', () => {
  it('올바른 결과를 리턴한다.', () => {
    const { tableData } = initialState
    const result = calculateNearMine(tableData, 2, 2)

    expect(result).toBe(4)
  })
})

describe('calculateRemainMine', () => {
  it('올바른 결과를 리턴한다.', () => {
    const tableData = [[-6, -6, -4, -2], [-1, -1, -1, -1], [-6, -6, -4, -4], [-1, -6, -6, -1]];
    const result = calculateRemainMine(tableData, 8);

    expect(result).toBe(4);
  })
})