import React from 'react';

import InputContainer from './InputContainer';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();
  const data = {
    rowValue: 0,
    colValue: 0,
    mineCount: 0,
  }

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({ data }));
    useDispatch.mockImplementation(() => (dispatch));
  });

  it('input을 입력하면 dispatch가 실행된다.', () => {
    const { queryByPlaceholderText } = render(<InputContainer />)

    const placeholders = ['row', 'col', 'mineCount'];

    placeholders.forEach((placeholder) => {
      fireEvent.change(queryByPlaceholderText(placeholder), {
        target: {
          value: 10
        },
      });

      expect(dispatch).toBeCalled();
    })
  });

  it('만들기 버튼을 클릭하면 dispatch가 실행된다.', () => {
    const { queryByText } = render(<InputContainer />);

    fireEvent.click(queryByText('만들기'));

    expect(dispatch).toBeCalled();
  });
});