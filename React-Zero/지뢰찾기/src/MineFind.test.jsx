import React from 'react';

import { render } from '@testing-library/react';

import MineFind from './MineFind'

import { useSelector, useDispatch } from 'react-redux';

jest.mock('react-redux');

describe('지뢰찾기에서', () => {
  const dispatch = jest.fn();
  const data = {
    row: '',
    col: '',
    mine: '',
    tableData: [
      [0, 0, 0, 0],
      [0, 1, 0, 1],
      [1, 0, 0, 1],
      [0, 1, 1, 0]
    ],
  };

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector(data));
  })

  it('지뢰찾기 제목을 보여준다.', () => {
    const { queryByText } = render(<MineFind />)

    expect(queryByText('지뢰를 찾아봅시다!')).toBeInTheDocument();
  });
})