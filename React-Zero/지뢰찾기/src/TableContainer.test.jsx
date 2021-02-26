import React from 'react';

import TableContainer from './TableContainer';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

jest.mock('react-redux');

describe('지뢰밭은', () => {
  const tableData = [
    [0, 0, 0, 0],
    [0, 1, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0]
  ]

  useSelector.mockImplementation((selector) => selector({ tableData }));

  it('속성(지뢰or물음표or무 등등)을 잘 보여준다.', () => {
    const { container } = render(<TableContainer />)

    container.querySelectorAll("td").forEach(item => {
      expect(item).toBeInTheDocument();
    });
  })

  it('클릭하면 주변까지 조사해서 모두 열어버리는 함수를 실행한다.', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => (dispatch));

    const { container } = render(<TableContainer />)

    container.querySelectorAll('td').forEach(item => {
      fireEvent.click(item);
      expect(dispatch).toBeCalled();
    });
  })

  it('오른쪽 클릭하면 무 -> ! -> ?변경', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => (dispatch));

    const { container } = render(<TableContainer />)

    container.querySelectorAll('td').forEach(item => {
      fireEvent.contextMenu(item);
      expect(dispatch).toBeCalled();
    });
  })
});