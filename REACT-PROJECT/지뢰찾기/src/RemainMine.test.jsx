import React from 'react';

import { render } from '@testing-library/react';

import RemainMine from './RemainMine';

describe('RemainMine', () => {
  it('!갯수를 보여준다.', () => {
    const { queryByText } = render(<RemainMine remainMine={10} />);

    expect(queryByText(/10/)).toBeInTheDocument();
  });
})