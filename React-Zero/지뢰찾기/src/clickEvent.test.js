
import initialState from '../fixture/initialState';

import {
  CELL,
  makeTable,
  right,
  left,
  makeNearPointArray,
  calculateNearMine,
} from './clickEvent';

describe('makeTable', () => {
  it('올바른 결과를 리턴한다.', () => {
    const { tableData } = initialState
    const result = makeNearPointArray(tableData, 1, 1)
    console.log(result)
  })
})