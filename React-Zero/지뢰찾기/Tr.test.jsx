import React from 'react';

import { render } from '@testing-library/react';

import Tr from './Tr';

describe('Tr', () => {
  const handleClick = jest.fn();

  it('Td들을 보여준다.', () => {
    const row = 3;
    const cols = [1, 0, 1, 0, 0, 0, 1];
    const { getByText } = render(<Tr row={row} cols={cols} onClick={handleClick} />);
    cols.forEach((col) => {
      expect(getByText(col)).toBeInTheDocument();
    });
  });
});