import React from 'react';

import { render } from '@testing-library/react';

import Tr from './Tr';

describe('Tr', () => {
  const handleClick = jest.fn();

  it('Td들을 보여준다.', () => {
    const row = 3;
    const cols = [1, 0, 1, 0, 0, 0, 1];
    const tbody = document.createElement('tbody')
    const { queryAllByText } = render(
      <Tr
        row={row}
        cols={cols}
        onClick={handleClick}
      />,
      {
        container: document.body.appendChild(tbody)
      });

    [0, 1].forEach((value) => {
      queryAllByText(value).forEach((cell) => {
        expect(cell).toBeInTheDocument();
      })
    });
  });
});