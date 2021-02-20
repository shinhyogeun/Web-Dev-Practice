import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  beforeEach(() => { jest.clearAllMocks() });

  it('화면을 잘 출력한다.', () => {
    const { getByDisplayValue, getByText } = render(<Input
      rowValue={5}
      colValue={4}
      mineCount={10}
      onChange={handleChange}
      onClick={handleClick}
    />
    )

    expect(getByDisplayValue(5)).toBeInTheDocument();
    expect(getByDisplayValue(4)).toBeInTheDocument();
    expect(getByDisplayValue(10)).toBeInTheDocument();
    expect(getByText('만들기')).toBeInTheDocument();
  })

  it('인풋을 입력하면 handleChange 함수가 실행된다.', () => {
    const { getByDisplayValue } = render(<Input
      rowValue={5}
      colValue={4}
      mineCount={10}
      onChange={handleChange}
      onClick={handleClick}
    />)

    const arr = [5, 4, 10];

    arr.forEach((item) => {
      fireEvent.change(getByDisplayValue(item), {
        target: {
          value: 65,
        },
      });

      expect(handleChange).toBeCalled();
    })
  });

  it('만들기 버튼을 클릭하면 handleClick함수가 실행된다.', () => {
    const { getByText } = render(<Input
      rowValue={5}
      colValue={4}
      mineCount={10}
      onChange={handleChange}
      onClick={handleClick}
    />)

    fireEvent.click(getByText('만들기'));

    expect(handleClick).toBeCalled();
  });
});