import React from 'react';

import Table from './Table';

import { render } from '@testing-library/react';

describe('Table에서', () => {
  const handleClick = jest.fn();

  it('모든 Cell들을 잘 보여준다.', () => {
    const tableData = [
      [0, 0, 0, 1],
      [1, 0, 1, 0],
      [1, 0, 0, 1],
      [0, 0, 1, 0]
    ]
    const { queryAllByText } = render(<Table tableData={tableData} onClick={handleClick} />);

    [0, 1].forEach((value) => {
      queryAllByText(value).forEach((cell) => {
        expect(cell).toBeInTheDocument();
      })
    });
  })
})