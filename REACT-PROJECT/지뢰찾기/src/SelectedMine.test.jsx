import React from 'react';

import { render } from '@testing-library/react';

import SelectedMine from './SelectedMine';

describe('selectedMine', () => {
  it('!갯수를 보여준다.', () => {
    const { queryByText } = render(<SelectedMine selectedMine={10} />);

    expect(queryByText(/10/)).toBeInTheDocument();
  });
})